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
    "3Y3hb75dTDBM4hnKbfRJMSndUtaZMtHTucnuaVQib5Vi3UdKYr7aAAJ2VNVfgspFJ9AnzNnWsFy17dxGVrdqrahg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e8F9BReQyEZ3hJoffXHZA6yZaEmR7xf4W3a7WvZYtFzcvvW1DSMnsQfp33WgUYYvRHmxPSWPSinkxExhpKeBMpY",
  "key1": "4LWHRkdzdon5zfZdzqRFex3HhFQpokrNMegZK7qRymBhDE1g6otxdvubQgnvVfn9aVfoMWfTDiy4PA7YQvehAKjf",
  "key2": "4YeKCvfUo61i7J6pYFRjps7JSK27VRMfQiKEhJy35UwRmXrt4D7iFCikVm7E1Y9yeMnu1rwokLRyE5SqzWPP6McY",
  "key3": "3r9WvKkdEXoNYaHpyPK54rqNhtXcEe4WEHzrEzfYGdicypUzp9BQ5BMKq9BrQtxVQocRKZqZaCtEvTCDnFEKD2gS",
  "key4": "5hJNNARX5fWSRdtXsbTdw7GNDdvxeJD1k7HUkecjqw2nB4mfwE8DmHJTNgeYRnpHFWqyGSv4CqtmEUVUCNXseqKD",
  "key5": "3yxs5vrmbb3A9iPwB4Q3PH4e91NfRzSVAGeVzEFfbRpmqHFEMbTUQNhUz1MhjDQW9CwDc9RZsKLfkP3RwbyDDSbJ",
  "key6": "5cRYUc3pCoptR282qnU4Hvc61gVptM5gdsrJBJ1ckmKnXoqPwzRKgjrHPCTApYPmLPPwTjkvDrGM25B8rUdQT2So",
  "key7": "27oiU2H1BC2xawGsbB2HBsaZTWX8pDuJT3qx3p9pfAhjgLQFLC6ZU4Uj3X2yYtDFY7DNT3XPLFcqMQorHZJE6dgQ",
  "key8": "HGUFaXLVD7G1X6aa6H1UoBrujjo6H3kCi2NYSC1ccwM2fvfKyEGhiY73kUv59uYttp58Wvm98pGMWg62cKgbjBP",
  "key9": "5UUWHDRSXXStyLEqRgc9UQktHDX1LpKw8yGk85iifNtwus3XdwHsGxBXSPGGKYw2HMdmVcrju5t7oQ1Q5f9LvMw5",
  "key10": "49NPUcXRx2cS8haPfejCPgikdZrXtVe5goStnavL3cY2MwzRQRYHLD46HzejyLzNGc25WDRZZF5bnR1FoNfDerBD",
  "key11": "a9d83WanaWBaYBQMMhsz4MgdifxCaiASAqfoLWVNG6tssdQvnd6N2EiPJdx34999egLktTCV7kYnuyjpNTDyoNA",
  "key12": "5RhDN6rs8HJ5nBAB3HFWSxcBuhCLsPMfzLnJxTxP1KkGdhtvwhEX3eTfhTVNebajLVMyRQ6PDQvkMc58gboVPjPr",
  "key13": "665JM1uYhoPLu2De9CthpPWmiqqt38Wra5hu8tsBBVHkZCtEnWqVbA8iS1f4m2pFFNU25yWHaVvQprUk3uhv8MCF",
  "key14": "yVresk58k2KRxe5xUs8EQsnfS1XagqRd6jjmDrMtLvkNhWHSNcL15whLCb1Huca5Zccb5X6r5RaZTgw7Fyg66Zc",
  "key15": "3H4Pwpu6LaLYgMZFUqtdtEF8ga8jYzuxPsatkhDMTmVAecGBRAhfzF5kfpc8TnSSAGCyi8ZW3TDAbEbU7wW7eoNF",
  "key16": "4JvhwnuK5rgzkBH38ZYT58upPURVw2kk1GWmVTu114r2MHNhRoYDFRKcitWEXtcReiVeCZS3mRPtY7r66wdLT2uj",
  "key17": "33exHvoCAm5RAAxCT56jeXVxZTy9n14J1iG3QbCJgYWXL4VDX2LAMDQVKv33bV1YXs9LjKmrDgsK7zyjsC76APgn",
  "key18": "53p3UxZPdnR9j3u6dswX8MxRt2PLzjxZu51E9gY9Va3UqNQkiCPhkpr5sXMMPF52JbYx98TQ9y61FhPVpnNJYqbx",
  "key19": "3tQyFCNDnGUA4aBp4EY1Z1eC54CVfBk4xbgRGRzQLfwKfcJFUTDRkNnbeQ68B4jMAJg3jiFDWxtJWLjjrUKRYppC",
  "key20": "5Qzh3KWeEku22WKiZ1Hwt4W9fhKwWWNKvWXnkwPgvSpGN2jZkSgKxvrGpERzoRkUWYBfcHuYkkgBEg2aw9e1ZCKd",
  "key21": "4LgiZVV2pnQyinAa5pngTgPJb9jNw86Fn1K7XbBhZAUEJoE9nmXMRgiKedvhQ1QtBRAEdXaSEs37HGFAkQ295ofG",
  "key22": "4wGZYnXDageg7ALXwfsnue39sxEb3bbiaE3raftR2JV2JAvcKPURTnjVmGZBVPFBYBrukM5kk5XcqaZAjmHEwSDH",
  "key23": "64hSZPPfCJDZ4LsGyMkfQkVJJGTt7GNmpUnXTXA1gYrm5FW1QGGjGz94b9vUhysWUQh62UQgj8YZH6bPBHVj3XqT",
  "key24": "4gB2g26KzvQBArefnWq4EDqeWHo4cvudXyPRAeSAXJSZGexQDbLHFgn8UD6hbwcJZAQi34YPdK2wMUAYFPC4ghj4",
  "key25": "QtwefpaNPFjxn5mJkugdZvL8nquybZPnL9ff9pnPRpifaTwUVrxVC2XepfAvkyJLr68T5viHEun1y9jEYyH9fLp",
  "key26": "3JD3eo756RtgYpPVbUDSFktiS428gQ7aAc7SqscsGkYzm7FgsQpkXFRcMws2CEgjeMz4bvRDbexgtRnVbCnGMpjC",
  "key27": "5tRHg4u2mbTqUYMY6V1jhgCwXg5BLeZaSh1UbFn77pn7ycsPDbsUkGVdPnnk7cBnPSpMwmez7aRXWnoWVk3fs3Wr",
  "key28": "p77mGZ3RHe9xso5cwJvQHS9qSQTQ5W1JsbEoZwgGLLCjajhDzAbpYrMVYzzo2vcYAFJ11ZV8FupM6jKkHbaWs9t",
  "key29": "4qYdpu7BTCXZN3f4vnXvBNmzSRpoD6JGbYcFXWgKwLNapFurBGrbB8oJTcwKJKezxX2MribRtUNDQcpH3WDb9hAd",
  "key30": "xjxAJ21tSvVtAvQry41e3xEKdCMGNHZAJkWWWs5dVhxw6cvxDtd4WA6kaXdWUwgrrCoVxxmRGKFe1HwZqNrogKE",
  "key31": "45Ffm2DifaV3RGEKqhNWqF4sBCcoAUgPJQCzzbCDho87jyXYpL91tmC7jr7hBhyHGEyEcpWarvf5rGVn6ZUhs7Vn",
  "key32": "3TCnczaciMEy5doAMKwkDJSzAXFz2aukHKRreJ1WEYLF82BKFBKJZmgKuj1hVoXAs5ypfudHjuHfjnD84zvq7ojR",
  "key33": "2eFjywfjjwZqhUQitmWiP5sgkHkZ5aQLeLiJdPaoqiSfnGu4RjH1AEG2vbSHfXBfwARzwzNnNAViQrW1EM9JMXpL"
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
