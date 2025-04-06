/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5daj24yazBYgoG37GiQyYBBq8mLwLh9dp5a9VF8hTh24GizbcVvZ4PRmr9au5Mj9C1VSieRq5qsdoTajR4kaocLx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ds9sRA78AKtEJDccfovXbzWWFTCcQ3ejXXivcxwieppL5nH5d8FD4Lrx7Rq3sUYNFtHUM7wmUgYkEkBjLesAayT",
  "key1": "4LzsR5ydhbdzccKN5SG9R9GbTMhrQ7VUE1iUc4WNsn3fLQcim1RYzTW4JqpiQcMPrNm3327xHKu3VZHUWzcC6ErK",
  "key2": "2RvuHR5kuKSfsJ8Kxn64iuGgeVDJQsiHvZboQAShKm1GH9HFhzGHVDrfziANSWLtJvFDAkLEpbw5drequiTxKm1g",
  "key3": "622uc4UUNZ2fboVwvPTVBLWUHJfSWGqhy98yXvLHSj5LD42XC7hPgYYP1Uxud9wT19CGKeS1AaMnkhNDNYetHSfT",
  "key4": "5Q1eCTKsqh39rH2vCCofg5yRfDmZGkEZ63YFiQyabLCoeBFNSY5znKHURSpQNk2iTeKdGRYS4ne5CUSuupHeLCBe",
  "key5": "5woDZLTCxEYY4aQhofi6eoC6BVf2dC44QMdT7W3wgN5ojmBLCRcvyumGBhkksEoSPBbL8cQaDYKXm6VQfPTAnR9y",
  "key6": "igK6yhZnYLCHvox65FUXdAjEq8b61XHM7EZvGJ1njBnw8swfMNAMdNijJPrPKQ8Qr5UxXaiunbcSLFS3AKBUNBb",
  "key7": "3ENMi1aGN6tzEXuSRpShpX6n9EDiVeAuchYx2uKfs5gsSPpc6Z3Rj8LYE8vWzJfSpY8jaqFAWefiRuDeiAYG87TN",
  "key8": "aUCPrNTjbH8DiBqnyKrUi4SxoZkH9SiNJS638WriL1UZKzLxkar36HACNV9BazemqMqGsi7S5XCRzuQm1w3pBs9",
  "key9": "4W3CgHuA5X81YGkszWuYP1aZx86tbggANkXwdzMXYay81ZtCwXJXkegqnPV9HmCxoHsk636f2wgaugwwWzEMkGZK",
  "key10": "3duJntdXs4QT7ofDAxTjWpppK2MJa2QGd4Y6Ra5f6K7GMDfF3oW1TgqtdBQ6b43FVUUqMDgjpubpfLPDKCZnYBWL",
  "key11": "3124YumJggo6Y3V4WBrUVZK6QimzJAjW5PcJfzLpWJoEnPc1JuBfPv7tb7bUVTtWpBYYgrC48wg9o4iTmXsMYJ6r",
  "key12": "5B3ShHJM2FfNQwKyEXZz7SU1FVccMAc4tfGNRwryZG9QDhRsqF6Jo5QhCe9KY6YC1eKtAXvgMSUmUrk5ykV28i7i",
  "key13": "2dB3cCiDenm3vNEXaucXBsqL8oBx6yhPivKtarpBQgyBwn2tyne27Ba2oq6D8e6gdTvHFtQQcBbQwq6BMdb7bsbq",
  "key14": "D9aGcuDLyGWKuPexNhpzBWECdM3K9ojeEmsYWMCoSN1J6JvvEMaSAMx4bxY3vDGdJwUb8uNFg99MJKPYwWSRZC4",
  "key15": "3WR1NgXYPNfZ2SgYijruJz8Sz8N7vDsNJPPJyTMK1dBEi97qUdCcyzd1JKwQXLQA5yTtHTpL9cpBbhLr8reE47xu",
  "key16": "5pWAYgvPi22onBVrj1VCSnvuWuxbRnzLoZ42w2JwZZ4LF6oFoWq7QLrCcQtwHbnzjwZk9GfcqprANQfVDXDoHLy3",
  "key17": "5UzoqYzdMkuzhAvq3uo5vNsBjmFPUpRP2mNAzZiTK6zmHfExABiPKJuAv93cHZpmwcwauBhcudGC9LyjcwLyDMzf",
  "key18": "ynexym6cdRe9VyNeZK7fhwNYUmSm6nBJJ2Skg2avdbgmXh8r9N7EjwkUBWFMeyn9sep3NBGEeq3mpR81m97G6pT",
  "key19": "2Ln8vk7KMYyBzG1cA7TyN7XPF6CanYNyc46oYSasaeMpwvpH5J3yZ9jRYRujAhgJfePUbbqGqNj2fvPGBVjWrvvW",
  "key20": "62StyfxkFjDM4sJkpNpVD3G6NPuD8bTjEYqiyNEWxv2jXkwXS3DMkP7Cx3K5SfZPZrFPJTaoJgRskJdZwuPSKb8a",
  "key21": "JLzaBMTXhrXi32fgKAh4HjU8WymaYKoBTQbvnw3F1Ncf8rebqcmASNJxkmXn5t7HqTbzaQniatF3WpyEpDLEPuL",
  "key22": "5mXpbohwWjwKodpK3Nactv7Lvq3DBVBXp8RDFBWeCbmjmXap77WFA3PyqohPhLdV38L8aRAVB21ET1svJacgFdd3",
  "key23": "5NyzR1q3zUfy4LxfwHGJsx3mir87oSysrwc5TX4EdpQ8CDZUot8JAy9wm8BWUTx9weKXR5EjYagnU6wGgELmshqb",
  "key24": "4Y4YeF3jXTH5J5eCEwqwF26LCUuPE6SwauQvrzQeoHKAaGcVj9XuQ1u7xLg66YViMvPbJoyi68YoNkqTnQJy5nd",
  "key25": "5sbkqRD7s6yDHUhwKTauF28WB1zHTWwWeucrsFeE9be5t5G3rYa4yCtYNhSv6gJsnJ6NDfVFniT63zh3WMcqzkFK",
  "key26": "UP2DSgvhphoe5Z24KWEBawkvTTj6uEG7yhZtVWQu8dSMGrBNVPd3NAPvDYgZ1fLuvigotup5UaZ9xChGmF6m6g1",
  "key27": "5jbbEoGqycRJFq514c6fi8sy9sCnkSDFNhnCnJjSbettTjRE4bbv6PZSnpdH3gSFyaEH7Lz57E4gVpidMqb374cX",
  "key28": "EZW39yJE2aBw6LY3ahv561aP1Nh991oxyVXfBqcW8sdLezhPyBAJ2upD6avrusJrJbGE5HU5Q2kWJhycxT99heY",
  "key29": "yiJortSb7PyKoT2adi55k9BWPNnskyLqKsu8MW47KSn8SiQawdueGqikygk5AwpYrQ8X9JL74jwTkFW8eysrF87",
  "key30": "3vnMoJLVAi3WbqGBKjeUNiKZVZVk7Jdr42ehAxBeFuMzBoxiG2xFdYioSboD3DCiWYiyJqikpcJJrsoGs7LdrF6L",
  "key31": "27cEa4gQfjSCXeWteo5WBWi5Ms7sTrCjCydLPxW1FWp9pe3w3y2fKeoyLAKbpJ5Ry6z7ESbNZn2y32geB7BXzdnD",
  "key32": "3f8BD3uhFtAdCVw4nn8oTe3eBwVjfc52m4uMkJvDUMb9j98ECUYopTh3n6wdQF4s3xbsLcJTvH2nVyGm1dCwRvrZ",
  "key33": "3zpDZM6YUddppdHGFZxjtNcvd124U4x7A77fLBpDvMysNyokJ35yYeNqBsUNF2Bis6V5om2WHDp4D2CDCdjJprZQ",
  "key34": "3bTb9wrdTKcPS9aFGG3jF917HRbq9fUFKsenqFofCFYHMHLLJzHVFB4ARH14rJXaw7qduA96PHUxHHTDcnCKPQoR",
  "key35": "4cgWFFHTfSTPY71hwC8HnGtsN5ZDDwBKVUcvwGxQzmMRQH9XamVr83kVefJtAgrHSNn38NpXdcBdb8im4uo4KLA",
  "key36": "pknBFBkiEGNzQuFXqZCkvP9PtQcdxLexK14wMqwtXHSZU8E3QsoFK5C6RMRzTRd7yjrhkBvARkwGS1uWmiF87om",
  "key37": "2d9pM9CRPUHFka7nX1fXHPCD8ZagEsWByWeoXxmmhh4yHA84Rm3TBCc2pxBSM8QVrYZmE39a6rSBnT3NTstxbFwu",
  "key38": "3BLGv6c4go6MvpwCnMzFX8UsuRS4d5cb3qb2QaEUUFgF9KDN1JBQucSiuboc7ty4n29sTWcxmL1K9TYEhL9yDxfR",
  "key39": "5BuKsyokGsJFMTr1AW4AoMnUz5zwX21ihYhYXAiDokDNbSFRacfwVX26mZstAK2DRe7J8Nb7G598tf6FoerQAgzv",
  "key40": "3tbPgx1zNg5Dv2oy4DjqamGppxUuDM73MJvAEmxSQ8q59iXjiNUPBPyJg3idhwYdUcPE44US1cNo17T8ZGjzBvBa",
  "key41": "7Nqp19xJccYKMqmDfcJAL1JH5u7qtpmnuE471R6mabSZV9co1Z7zx136KcjioLL2SXzhRo3MJFgk1Lh7aUPateB",
  "key42": "5NizNS7tiE5dPSoqKEoysuxDbvC86jBwYni2thQzTn4GmuVnLiAXPYEtg9gWrAEEh9URha5Ve58MdrK4BL8DetpZ",
  "key43": "5ArP3nSu98VrtjZTpbtHfBDYfHa1SxV7uFBQ4fZRTyvcMPDSJm9XvCmVwctikPGbeaaC335BtVnhRJPjQf4B5qy2"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
