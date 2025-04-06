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
    "5WpDafyUtazQNajghua8TRJzM2UdHtWTrB1ZVXye9rHZb3uXDvPgPjreBWm5ACsTy5HLZXmiauMBgvp87qvRaQPX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wibjKW9w9rXzveMwG1sbJJXgXH84EHDisQA6sWauL3QjrraRKLTYNkGHdFzQbLZAhjD7C6FwPj6t5Xv3nfcQpm9",
  "key1": "sJQExnMgGZkuQ5eqjRvn7Cs4LzL85maoeoET5iDpLnQD5Sy5Xgg4SJcHncaS8aMomeY2HA3y42p9VWMHsth6unR",
  "key2": "3WgyteShNi23KR1iMWy9gYLGKo7RUhETrwGy2Mcj9jjuGGHSTKD7Krrbpantj1iji77B37XRy9bDfb9e16jBVeq1",
  "key3": "5jcEpkLcQFRU1WbCsUtNxQ8toyKGdSexUXY4yJ3hhfyAfSwQKUt3p8qs5W3XdJVphWaoUqMXx9fXAPpFjn2nFDwK",
  "key4": "528n2nRQzddcRfR33hW2YhWFv4STZQmtnyZziAJ6RTKKy3YmdFU6ZrwGDPtB5CXkjAaQQEiY4A4fRRTzERtAuCgU",
  "key5": "2smDAwVXtLFfqYeqi3KtEW8zFJA3aCFpx59yMhwbzLk1BCmyazcxUJG8XZpQQbF4LokSzqPmrufBMriQGEEVEjey",
  "key6": "5x73DtDMcB8Tn7QAY8jWAer1vkAJPkjbRpPSHyrPxMNC5EVJyjSwoqaP1PAzQt4rrpaFN7Exa8Y5QYUP2djz47GK",
  "key7": "bzhbVHkc2LEUyzGNjdb4Z3mpZ5HjZadWv2BXW4dYWjajfGtKXNrH9mej6rCgDTSHjF5XcSkpEuhvUKBDhp9kYyM",
  "key8": "3rcvk712hjduiBbvzcWoEviTi7uPcfGQhnF2kFiaMnmpz14JU88m2PK3SKmQNKru4rwSj2CziVcNHBA32QzQTfwz",
  "key9": "2Shi6B9PxM3boPLsshtkThmYVU9B5fCvtxDfZkSh6vQw3QUpGs9SPQ38a5j3mWdBmb29i6WQXSngyywtZvaUKETS",
  "key10": "2ENSy2W3oQV45B6XjjjytwEo17gRFZcFsX48nC7xeu6K1mjMuaFfxqL48X7NJv9cwe8QZT3i6Re5qXWrwcVGUT7i",
  "key11": "4LdGvazqAPgeuvDSKN9KwPuiCiyHzNESNURWoZDPHkvqBF8XwVKGofACoNPUGyp8V7nNbdKRgvmhbjh5F6rHkEpF",
  "key12": "4UNyGzcjPesWf9bi7Y3C9KHCAeE4RFVjBFkScPuaZUUAozRzBi115b9gr34rXB5x7rz8h2TgA9rWBV4CU4ksdXqg",
  "key13": "3EJNVQbjHhx2uwPiEGpiFxpv641PefnGp6R6amfaw3UFi7KoaXMqsrheoowVEGpuRLz136gYxNeJGvwP5k3JeX7u",
  "key14": "jmS9rYJ2h5mEFE3bmmh6TZz5ek5tuA8pnpmvvrijctu7MnFWf9d1zoTkE8pAAd1MBfjyrEhTNwoGv6iMwi1k79c",
  "key15": "5y1KhnjGYqiwUjhBeDxi7eE4HnmwotGfFqBJw3wukYef2NAaDp24A4gkg9shyrY7yAVMUtVe6VuW5BEWeprEtudd",
  "key16": "5V6S1JwHVWDzxuz6b63rMUcop8ok21hEXMSXKGqCN1D1xBbyG9WUAKVn2NuQSJkFbjRMJBMKfW5cCfQ97k8PrY6t",
  "key17": "4z9uQPLgReCPYi18TE52Stpi7MWAFU2srjpsyuVr7K9sP2ihPcuNiNscZ1X5tp2za6cTDKiDXansB5tnK9Uuh3ac",
  "key18": "3dwhN32PfUVFuAzfLCDRhKX7ae5kBBWnSpxfk3tdP5hQAH6ciGoRekUNtCYgX5die1p4DJttwmLqcwdyX8ipY5Ne",
  "key19": "5gPfSwDct8NE4oT4M77oMeFbpgPJdHSBmA3Vh6kVXyEFfynuEfNYwwJEXrWPAZru9ZYKY9DooJum6v2CP314audM",
  "key20": "5b881jneg4FDF3pXtF8nEfJaAP3CwPLJSMarSDPHYKH3bNS2TNBoDUMukjTeiBwsG45gsWYk9Sawpa6fggEsRPzo",
  "key21": "5KXncBCRdtDCSPyJTe4ZJfFtKTpCPRDDVgzX6mZ5hKs3Gm4ntvTBZLQqpm81SCNKU6ueZtZdLL3jb6cRrQV6ha9J",
  "key22": "5inAtdEZ2XN786Ehx5DsdsaCkLk1eFX5MYzPwabaoXbX95roAcSEZCZAGjhJVmUPd74Ae3neJi8ded3p6Qdx5zmk",
  "key23": "53MvRUQyWeEHNte8QahkVBXKng7Q4ph6RkWqe5AsnaVWpB8J4Cnm3ZWStBTavpvEnPLva21YqJhk9CX23DzDyGee",
  "key24": "3RZEfMo3YVGhNu6Nrk82KMyhmcMgCiQp7YiT8hUgbKazvSkzM28LLXdB7BbMnw6XFez5uTLLAwZrzUEraEJddRjs",
  "key25": "S5kV4bn9tACwT3GNLJtoXaPc2QWb1gFimqyAqnwC7rFmUQt8uiF3FghXwazv87qoifkdBH2RFA6GKWE5VDQ4gXo",
  "key26": "5vbAt1GqyYEhRb1KZVY3r8afiSSEpDEWADZFdJSUw6pZXTPodxr4scYFLS3tJrxzim7FwXGTxY3iENhbvb6Cq75Z",
  "key27": "3Wnh2N9fXPBGqXmxHkSV34mtSFfSkReEVs48PRLFzY4h2GD5aVVxPfJzv4Z6iM6LtXPSqxXFg7hyET1624Hb9Ad6",
  "key28": "4Jx5RcUKj8Tg1GW9fB4Z6cknb1tiZH7Sb7e9sFVv8iaFs3fETnYyzTz3JBXfw7nRBXJi4B7nbf2sjxYBndFQPpoq",
  "key29": "2wM9VGpLTWBZNLFnJy2JKepqJxFZEoBhJxwhwT4cXwAG9nFRExv7qzvd4cUimLYk2S7vNBYGCKaQbMDZJcTe5xjx",
  "key30": "55DBV1ZmAcaCPMVY6KXUUQ4j1ADgE9EEewPmrrpTFdoeFN9gynUH3Z2KLvsDUivCtEnAPz3XGb4ox1ADx5buCiJQ",
  "key31": "4K5Mzya3sJDWb9S6LcWmNyT21iGxFejeee5exZVKGooknehwjo19M8m7NThQaus2e4VHKX7dn1Xb63Am5pfhETZz",
  "key32": "5bxnb26fwsJDSXr8Pz5PswoPz3wGwzaBYRd7c8vY3kiPB5fYLRNhYpRXqLEbvcKE1NRt1bLdjWTPfz7PgusT2TdJ",
  "key33": "3C6PWeYC3qH323yZ2BHkgHoYZEtmJfL847Lx99nFuCj2tF2Se3U6sqmUUkmhtLNLyBjFjFZ9mPNtJPe28suarp17",
  "key34": "41VXUWV8nrLNhBHqQN9zRDy95uEfFCnk18c27wQjLyGKn7FSmMun4Yv5NufDQRYdh3T5TvMegpKBFDnHcimdv8UT",
  "key35": "5AeFsQa6X2rbZ71wNP9pfDDo9nedU96Xm1vHRAdqNHeYN8DyDAcsS8mZrkVUYxX1wyo3QP9EfPK7v2HHRr32Dnty",
  "key36": "55MUFRjmQh4fEAdT23PBQraziZfupgmoBKeRYgs516tvMkAsYtoBaQmtkFEHPeoki7AeG8jEFSpDk3sF2qjgrxh4",
  "key37": "4aTc4ZafGLrxBgDmQN94ahwq1kjVHmiXTVgVmYmwzqEhrwiEm7vA3UC8VbdQhkGELjDpzk9QmLv2nrNwme1FoE72",
  "key38": "HiMaKjcPwfgho4JgRLDsYbbfExwNdwXFLe1XURiwSuTXpGxLvfQt2XTVKQmn6M5UH8fdmWPsWKjCvLZnyLQQQWc"
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
