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
    "bxzcwtj9UnBbBGXijcASTUwr31uWhmjCcSVHppU67LQV9ACt6QDUjzDZsa6TTEnYKLMngN1EzBpk2WGRG5zbd41"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4snyT8DYbnqCKYSknXEK8cknPkk8zXRBhaveSxJDoA4agToocxc2D2j8a9Jyo8Go3c5FJ92YFvY9ozged6aYW9YK",
  "key1": "4skTLJHQP7PK5pVmv5RAnu8j47Cb3jBbwgqdeMeZBKuzae8RQs9Lvw7zXqPctZpffyS6T3R72TKzatWbdPFDLTko",
  "key2": "67MpzXvH4FjQ3BRt51CByskfKC3hymWAhjrzf2RcziLFZBxW5EMPzXfguae8swMyycLjzW1jE1MaKx6yoSLeFf59",
  "key3": "2Xmq4pw5zmxrRnU7b2av99DNk67BqfAH5bUUmnXHvbqCFXZMALQHUELs5KV1tj76eGdC1KTSyaZQ7ds9esmiWpXy",
  "key4": "eVsgzsu8rSn2oNXnFUezi9fTtQyaHdXmKi7PbUC4nubeJHEqayK11seNWyjLe2j2ywTcFRJSUA29MzyraKi1Xtf",
  "key5": "2oR8T9upSXWPxHNgYjSe2maRAgYPwTCZCiYitTN5xj1RBJjGoYmRQiKXRceSm7Vp2gikAnY5CTqJA4kAezxyuCKA",
  "key6": "aZihENmsrvmpv2qVTtJ7uFFevPbZbJcCppJn2S8PD9N8gq5d6vcLwa2JNQAjWu3tMMvXMeNMpGC2kEDH8CgrVNB",
  "key7": "3gHRwv5KHhTbbcK6sCg4sM3seKtVxTCcJeFocRZ5eiEitCnbBgMd3nXRc7bXmotDVoAjNWCoLMu51AyMSNFqS6QW",
  "key8": "3DRXtVZi17Hp783rysCpapqWXjBvsRTqfdRhSo2v9pMD4DrVzR4VUh7cQDoX7eMaRzDMzymWFYCM7SCai9YXwnnj",
  "key9": "227rbMHgZdputhYxHFCcooRP2n3j1sxBZD2a1DtSc5zcAHeXvBu6EHLyGga51tJTDP2ZgSJJzGjyWHN6tRnTPVbH",
  "key10": "2t4zFbdVMq8PDSvopMWyGpXRB3yszENdAsXxAWoUkJVV5rXBx9SUcZ7kwRwdHdSoeUZTvMKPE7whWhKRcNNMVEBM",
  "key11": "rJPz8LdGLR6gtKTQx48GVaMGZ3WT1vaJKiSGZhbiU8jv77UiwkaECdaeG4Rp7XHteEiiYqgUmzaACn4fLkXXgHq",
  "key12": "XNaiJY2LfZJkZgUPkZdX59aFEKdwsjc6zqKNiNF8bGPCV6u4CUZhRF9p2gSyRNxK5QsvDmvp3yTgSR3qeEzwxqx",
  "key13": "7LtYt5WtH6mxZtzKx6F9RiWbLduYtFA4hWCwKRYMh73oFnYFGbWTrt9TvHTsUWPAtTjJvgz7r7zTo818fqUfUS2",
  "key14": "5nqWetT4JYFNt1k5xt7BxaG4eF633V19cfyr2AwgY36oN2P53Y6REzjQa1UhM7iFFQtB9SEWRv8VqgBNkQBqR4Ls",
  "key15": "3V9yr8G15o5MM2fzB4MzhUXhSxycn3RfRrrqeFnqNRmzPp8NM6zUGedY9KDDfpoQfdqRs9f1Fw1P73ib2jMrP3Nr",
  "key16": "4GUvpnCUJ3iqULnNe8sNEpmU4ZFKqnxpGGxJpP1pmhpbKWRcxsoGWY1zbUjkbprHAZxk8VFGwtSSa5wMN3iCoCw4",
  "key17": "29jQ3C33WV5y73BCtjhmv5AYNzT9xfQpHcU9SC26Ei9Cd7bATKWWfhrStGrwgFmknMrwLoRWvbgpZ1rmh9qiwvCh",
  "key18": "215Yj7oWLXkbzLKmkZEPNjhh3whKgZALDoXweD8ViGfyXow1bAiPmtp9Jdj4Nzq6Pspjutq9CMxkQB5KC3WCYDRd",
  "key19": "UFjs59oY6KeBbbaxLCxmmWJ18NC4fqTunMoonYfPGQFhapYHnXydW6aqGb2494Lq2T6YL1D83dd3oGoymvYzBam",
  "key20": "SUvDWgwRiTz24233ntdBtQCK32gDNh3wxUwMrT4EdzRyEdBrR2fv97BQYW79dsZ2M67ZFCPNH3TQXwBhZvvS6zg",
  "key21": "3xagBmFFTJFRU6p2LuhJrpz5f8XYa5XbiBhpZtr8kFRpCjdmMbD2Y1AxbL8BSg8hXUanCTzUnNXcxHhgyYuNd7LG",
  "key22": "3Sy3RWJanQSYjAFAofrR37PaKTh45n7CTmDqJ5oERDPafTWB5UxsAaGnHLdY7ANhysAWh1Yq6mKSF9SiKixdwEPe",
  "key23": "2bbtSdJbABw4h4Sbk99SsGxSt7o4XXDHFAi5DrMNT6TcuT9cThLSE1mzqpGpxQJCyyW5LQDHAd2jZUQPyirgEwLj",
  "key24": "3zBwMTgdHRqvV6y6CLh6Kbdzc8r6GoJeHnW6bSEuuTZAmrFKGtf5iNtT1tEe4K1odJJX6iBFavhqFiQuZZriiDet",
  "key25": "UEDirZzjALc8c2jajptPHL6L6ZNXWb9zz9tqtpQz4FnSopYsNYFCfxtnoh3gs8p1wdNusSCez6PFjwZujUqjPJq",
  "key26": "49yBBpLyxwwCtavFpNouRFh7wALo8BSC62afLMevsENzbK7i6zdAbPGwDnWDbWxsjmqUCzwQtUN8g75eqieCA9rd",
  "key27": "29ZCiDNS13BAD6ao5zkuaQ82wZU4RgcYPsmXTUCbZXCxAEMoko4EWy5x6p1oKN5zFYFxaZQ3JTbMZiLsdXmgd8eJ",
  "key28": "5u5QZqcebEnJENSWciMieVvhXv44L1mWiquKm8XA41Z6FBURDugpvqXCYWoZvTSAMHxAN1RRmE31GF6G7izybPvf",
  "key29": "3uTo1kBGZj3SQKfbvm2sUMBCfa3kjY9nHRnAjEA5Pv6eBWwA6dhKHaBSu1eZyRG12c6SyM6WGXWS7qNfvKhVyEXv",
  "key30": "3K1NzgTkuWt3daszTaCjT4ScsNXhLNX4WGZbX9MR2EdhsyafqUrpvuxMsDhjWpMvzCGRHysEMLrbgHHxWTWv7D28",
  "key31": "2YUgcoqTZMmFsNGcvDC949M68DJ3Pw1caA2YbAiY43cgDPLzLdC9yGf6UyB8XMMDaUVqhHqxXyQMH1H8bCTH6ai8",
  "key32": "dkvocfoArskHgX7Zi2WzxddXqpMKUg4qNw8iWYyegAyfbK3DnWpGa91nTLwRnnXqqFibAe1sVaNVN5wenaSCFMx",
  "key33": "4DvRR8xD2ayC4UjdsVydo5jn6kBHqNGsR7Y3QCCan3CJB8chMSeLkxTns1wYsd6S5EwLqv3xNss36fc9xuWH1R8j",
  "key34": "XTsU93G4PgVKQpzLYSVQzbdi2KUGAuKSPT6HoRQryfGRaEAgtQXMKwoVDdEpBDfntzVPNtMbrSMv5VAoPgBJQnN"
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
