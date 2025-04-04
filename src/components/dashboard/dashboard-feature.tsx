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
    "2rx9A3FjYDHX6Co1rNdUKGWen9tLt9CVhT4XLGaDDCSjvxdRBWKPSqj3emrhCWYKaY6rqDC1voLzsfyVNioDsT3e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vcT1kgj6mTfSHE4c13eT3mgWQzyk2F8MHjdMQ7XHG7LDsvfekMaU4srqo5avNoRPo9pUtJhyDaKhmoqZDYK4srC",
  "key1": "3eMmsa7eJh2f6dRUqqgDySijFeVpzk96QArH4VZo3VKVoPJqvvVwmk3tgeAzwfRAQCaFnZ9NW1TPA5MMsAVNGf3q",
  "key2": "3vViQ47ddevskVZ5GAFvJCf5fvUuSjHKJ1enRRqN9QdjT5on3PPwrfsz33PysdCY4PZdH6qC1ELGZzmfacJfuCuJ",
  "key3": "5nQqPuioyG5MRNvf6gnihCAKZeCDnLY1pPD3sCFPuP2NHAPxKyhz18Vb5zCoURdHAVqxwBtg7rMFKhtMCMwmWEqC",
  "key4": "5zwXqozNbJ4ETZ3AjVG7ZmnGfjYEZqrujCQAUxYUt4S31rpzVYAxDv8M9JfBw7J6QLBpG1xfKnTZFpiMCQ5cJctG",
  "key5": "pkdchbTaWUsceNRx2evxkydHYNYaJWJCJsWzDqNbPWiHuMqgRaN8xC7mDxzVVA84f6AFxt2CzLEnK78gazCzz9F",
  "key6": "63bc2SUdgUuzwdoPrhshwutxkh3PJJCJ9kXHVWDf2ASKn5wbgcqKAkhoV8TXwDWmudxHEX9NsNrxFXaezK1WhN84",
  "key7": "312Ujk69mAbnMdbtzHRV6HpCAiTpp5DQTihWCgiEviR29Tzo9DmbZi6662b4VP12zMg2PMdvwRhPkFd4TJJVr7Qq",
  "key8": "58jVtTSK45PG9YHyVh1DXwYrCKMcfAUe6WcFfC293CFUtLNbTH8QGomBtBT5dW54zjzGMo6Mirc5KRv2uaB5oErb",
  "key9": "PjUPg5RcMKdivoUZFp4dAevCKzPcsPCYCUaLK6vitbVkjpkNPFSChhvHaPamBabZXevSjrWSeXP1V47ucdwLvQA",
  "key10": "5Skfv54vGJ7HHivUspDzWXro3Mbg3sP8DZ3ams1t2hbSTu1FTeUD9GKJTGHkFQbftNwt689Kvp7ZG46qHcbEET7",
  "key11": "2kvVR6jDuGDHj49NwLXkUDNvYMUy8ib12Jnc7kS7y1KZupsaa4Ng28K2j6gsiTdgW9SMmG6ScHycegwb8b16fALG",
  "key12": "5BfmWMZhTbpjG2sjmtuya4PmtVToshBe3HJnumG766CTgnd2ymXpqadUP2QB9zCHyjuAQuJ5y7USc2mn8rXhAD2y",
  "key13": "2a4MXitjUWJAu3psim5fAG8YvychEaeywkTg982wXXtyZg5GhGPBAEeduXvV2tgACH4humAcMxfZBiCxEoz9SpDo",
  "key14": "3St1eUdGixXk5XVJ6rLedHGaJWdkouHKfkH5fZHwuB2BeWUvssxGV7YC8pNH6GshKfBcnmWQdsQkWXRL4uBtFFbg",
  "key15": "3iHEokhQBS8TkSRrZX1TJtfyGJDXrLsevgy2hrdXgw3rxLRy3eqsBBNZLh1Ux4hu1xYhzKZcjrMTTwrUYpuLKPdz",
  "key16": "nqkXdLXY3WcFNAVG5CtQGoprEpe3HLTfp45eesHoyEHQzqVVQy6t1yeSghMd5JbVuLztjXUGhHkBssAEHSsrrWA",
  "key17": "2uUaBxuTVNLUZtGe14dLxKhcuamvzfp6ynEcM4Y8LXtjPmqvhEHJvv3TBExgrLv7v91LR2XjeqJTP2NRE85gLpLS",
  "key18": "4jdp5sGbTSzniaJJuHX7b2CmpM4ei9LghgMiy8xWGK4aTZepphd89dNwVGBXmc7j2c7UZz7P4eEdkScbHGRpG8Hu",
  "key19": "3fmpSVyoczP5zyRXuJ1W47X8K7FK1wQDeDhJpeduWFmgiTD3CogYtKqHKB67uhtxujJDKxZW28M8H84ehdyxsbf",
  "key20": "2WTqUCKdDUmDmhfYzrsxpMsBvPEcvxsYSV1e2NGznuzRBGgmf4dBVKpbiRJXriTQbhfuuXwdiNVdaf1onyUjrNcz",
  "key21": "iuddY2W3cEhN8Uwjgu6tS3qHgcCzwmeVgsMhUd8fSfBs1KYgJ44WXhK5gZt8crm43MfyRh89QxicL1mSSUk4Q6d",
  "key22": "yR7QG8VajX7qMyJ7iKLdDPsBdqge8SKGsGzQVsxDo8hnZn66ogG5brbXQLHTzHnrxSCVMMdT6mHv3XBJzcnj4rx",
  "key23": "3so6vZfe81bP5YEWQ87U4zBp6CJ4NXvMMGXBiBskN4DR8RturWcLuKSH8ABt12oUxgCi8vRmZuKgy19b2YXvCPws",
  "key24": "2htJExJ6mguDhhggVt45qMNcL93XRvncbrnTFBRatYtFDA6LzLudoTCTsXuG6GUTVEtdWaEqMaFhhYAfYhemUzgB",
  "key25": "3Fx4vnnMyMuT17WiZ7bnnnnZUTyyDFm6YgjnT9xtpfianrMetu7pRamuWFBJ84ioCvcXfWtp1imdAcLy9mZ8d58w",
  "key26": "3rxcPVuTpWrmP6zWMYbKheFvrYLBoJVPyX9WrS7CKM1LCtH3svKvxiYs3Eki52ncFR1xYLUGcEHg5DarqgwDsZv9",
  "key27": "4vrpNBop96xk1tAsCaxPjMBzQa8GeotLbMUrV6gPBpdmy4ccNxTv3Tk7TrQ4K2LTnudxmvFRhDUb5aT2XHiqVG51",
  "key28": "2mC7NtPrHYMEK4ENwt7d3JoGWG4xCxDFmLfS7QoFzaBE6Ge2CfoJ4pkk25yH6ywcCQssYNcGkVn4f8tPzdoycLTr",
  "key29": "j5bYFfn6GEcxHfzcbYCjwkqaPhyHVdrFLNexn2DAjHnnayezpWnc56XMC5fR7eqAuAafVsgvuGR5TUcMQsr63yK",
  "key30": "5eLj7FZ2FvLs1yHfV8X5DhmH68LxeX1ZZdEZZpDmPEJth2HK5ViXCLxAVygCwSewDRrjXdNdwEH4UHrj3P6zETzf",
  "key31": "3budfvvenBNCZNpVLvgdsK9UqESN1zDYZFAR1HULmpzu74b5rzy5PvGwu1G9KnemTv8KC8HEfMZy7fTmWYaCEzN2",
  "key32": "TWaVQLYN5Q3MNxvcMhAHDtFyZMroBsakj4oC59xkhRQbYVkMCpiJi8ikmMyxCsud9bMVUbJGjCWk9jPmGFtxZak",
  "key33": "5Gp7qgwdg2xHQ3Zw5Bo3LvP1nh3riVXPDmrAs5MVEJjW3oBHG8e8b8XSmxwdTowtLPysAmMKoU8sw2BgZibtHJ5",
  "key34": "4jopDNCHc1EMKe6jK7uddAHJvovG2hrUiaZG32d9ZdD4w7Qtb5YiCnfKSkpqN8cFvAMxhWg5f7fTayk5oSwBYB5M",
  "key35": "2kWGG45M9j3FDj3vypCE1FgjbdupbiRkdPMd2qaQ9ECAK3n2HjiLHyrb6PaFEfx8c8uiWHUzXy3oWUGTNU3QeEg8",
  "key36": "21wpV2ejWFTjjBmgJbBc5V1bdmbDH8tKN2TCS6gTctKs4pU6co4sGBWf168bWj8QhfoJ6JJsgJMYc5p4nY3rTJYk",
  "key37": "4Eznuwo1a9fNMKo1PBmF4BcwmBQZpcKu4Q4j97RMNA7gYZ2CUw8dZYGVUnrGcn25V5WzT4d5G4jTWcS2tDjs29W4",
  "key38": "61SnmcoJzomF2jov6pnKsVsnneUiJhWJenbtvdCucjhiqCxe4zDDr9xzUsJQJvzqQi9gySDgigWgQe4apEC9NDYi",
  "key39": "2dgp5Atoe5gddwz29zThQmP1NTT78LfHMpcQ4RrsaXmz1pn794eKPgkggScTbG2ywWnxpDonMd1XC1h7n1MwAFw7"
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
