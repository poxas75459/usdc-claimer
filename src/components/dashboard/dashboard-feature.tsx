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
    "3698jwz5HzJjoQeZo5iXRUcTjAyfho6SkqCGUNNfADuGgBwjGLTSMvtY3tLmmTFFApSWh3DkT79oWQo8mBPGwKnN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47BiYHk69sNaS6B1cJUDz8TSwcDjX3gsPsnvzkjZAkCsCUH54NrfoLsBB7Gy8PQktVNtZQJQiqbB23X47b1Rg3mt",
  "key1": "5PJkgE2WpqH2tx8VMM647HsGgSmmo8NX12YGeyjuBzrCgnJMwaVn51J6P2G8r4Snk7cLN9F5ynoo1wA5EkSa34Ci",
  "key2": "QZdcae5dW4JQpxw6GJ5UZrD5RaJL3NPsPQ64WxioVyifvnV3hKDAzvrhoRFsA7jWP8dBBmwnnTY8H47sidyx7ih",
  "key3": "2QuBSVwhB4HAo9PhLNz8pZsKnPzLtriTvNVtqrR81XWiuJD2Tu86Kr2pCFU4ycX3iHij79mYmEqfE37n3HC7sSrw",
  "key4": "4x8cyr5Pwiv7i9q99GhPf2JuXezvUTpmkp7oW7q2raceFtGtF1SAybQvwQSsyiaq6UikNQt9jqhcjxsgjyDvfrRm",
  "key5": "417R51mV4P3jv78VXak61WCJAu1ZTHjcDoSDgPmZskmnE5fxB1GSkk31JvNZggynCeWioKmykfLBkHyQUmbQZgkd",
  "key6": "3KgGFxKfZRFm3jdGfN85wrfkcm3MWZ7pp1Mz1mtsMmPXNmc8crd5hpuGD1rSHeFAfMnwPwQGo3bmJrN7b3XziARA",
  "key7": "3ANQcuzc8J3GFUTdP3QG6X2yAdM2T28FCE4rMWPrGMHTAGGgMrX4tZKHSMiSx7G7huzH4FFJJ5B3tBXH9RbLCdTX",
  "key8": "3zdB1Xp1An4A83WNbWu4dBKhLDWdm9BGFeNwwpnGsk5Yq8LWRotE2axMqMNJkCRowq6PemcnFSsJE6GoY4L9DaPk",
  "key9": "4spYT6fGeHFgoT2qgFxNNRHc6cT57oce9WdvYuzdDwU1SKntPDmZYaeHEs1M2w4GuHH4PeLPzy6gn8gFjCkaG4my",
  "key10": "7hmHNeuTCZvX5w2G3f3fbcsLWTnoWmv5JFTGmtukP9tzSBgPhaF8YQ1sqzHjYuw7RyL3Y58CHtPBAFpcTkwZ48c",
  "key11": "3euFb3Uj29s68rxDV5wTijwmC296U7yPNh6CFxpv5sPBdXMtiSrvWep2u4tRD9BFrWUJyPJZdzph8yQ45HK27U7Z",
  "key12": "4bfBtehkV8g77zsrzWFNhHZDLdrJhSp4cCefEU6PZPic5iQNEj81AXm8H7o99e7hVF8RVKXmzQHuZUn3Wef7Pz73",
  "key13": "4k81NLqi7hhXv5dRw9eWeicSWbvtyuHvkKenVdtvXegkEayoVCgZHPrAkV2ZfedWKt9M2odNjjgLeNzUv52WCZJV",
  "key14": "3LgGF8BkLQV54CANtnBwdhudxWprxKZzMp4Tc4ytEWQW3NaRKr6YogSXqbCJd8RybKuP7Lkpn3ivQXgLon2x6u61",
  "key15": "4ZaedwnZ8u9Xhg5bwGx6jfumRBCquHp5wqEqbUSPyTJ8BirqPuM6BSwueFinojEU4tHy12vb4tPDF96CZpL1zhfZ",
  "key16": "5ruv5nVc32QumxqMZyy99RZnpjSHFYPEv4vpn4L5C576K9UcZvo6adW1k7egq82q7GSeWq8eNAZoP4KiLtJRZvgh",
  "key17": "4My2UR13UA5M1nTFLPXWrvLBwYsVWntAe4iqgA9sU9NJi5RnMZpDZ5c9x2sMB2H1zrQvtUmW71Sbx7AFR4wV7ivH",
  "key18": "4GnNj6gNoFraSwCUrATuaizf7X4AWQ5nFfMJGJ3V83WKus6jAd6H9UPAT5cZ8p3uvjDT1rCM1mMCdyF8hMoxq1YJ",
  "key19": "5HYL4zSiC6ogCSP5P4fbwvdrwrqjSWRfNqpFStfwYimxMwwrS1NTNHohuU89aMFAfjGMfg1Soph5hUnKeBKAUXhu",
  "key20": "3YKxtM72MXDCsdQcmbEEimtbzF5SccdJLDMM8CESKsBPNwy1DuhobxjHs76bNNB8Txn1AUR2rEy9SfKVX8TAEGHk",
  "key21": "4q164xLHjjdZPpfWASLqz9KVziabVc8Ag8m1wXhjPLuqPS5iTtFQDmQfgVf6aUwg4KQ2J1JbjyswQ44sSvyGH8xF",
  "key22": "3JDDk41uLZucGPANgbLpUFmCMz6PJvrBjjBFHwPGLeVoVmENykZhyedfagbVyNey3aY7ficuEnMFwVqBR8Jc221a",
  "key23": "54gkj2FKeCRUT42w7hHaUaoZJjQVgWwezrzkr5aXsEgaY6RYGTZzVPBR2haRXa8YM7kikJkMipT1QfG4SBzDMYw8",
  "key24": "5njQsrodwPLaLnnwikctiRqJAmsmRFV31GpmRem4eN6AkXtS2Z6FT8cErcWy947FCS5C9fpKsgBFFWGBF4RHmA7N",
  "key25": "5etWw9B6xiYyvb7cae8iZJ4qbe6MJKzJDFF2CodHrdgztQFCyi6F6N69hYxvBCvLqJ4fAibMhYvzAE62JUdNAE2K",
  "key26": "3KxFbaYWtjym8QET8KbeeGkyEm2rR16g6hHhKasMMuqwtPd7JoX3N2GEuhrT5jQnsfT3Fj3v1kB7fXwdeBjEEtq9",
  "key27": "qY45fBkY5XJqsFJJj3jDBYr3BeAQPQJRWGPWrqL6VHfytxov179rHQZsJUWCn6Vp6PXP2Qg5MdKafakz62o8uWw",
  "key28": "2KZgkgAUTXvasCsm7AaY6Kj2GrU3yr8DCuYhfa7reBqGtrWvnU2QRmmwaKhsowaz981Y1UpzKCAyi9XSYrc4gGhJ"
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
