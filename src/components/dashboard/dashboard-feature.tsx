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
    "5KyTUqdspFmTMtKAoaiUBaN1qdgbyerd7GtG3uF1ho3z2RRvvnRGYfRtWmjDorEhp4nRpD56frc8rkvkzoRS9o9a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24zycjM5emrVXxuPgYS6HbXwoysw2SfmpKATVBmquucnjqDGN4AtCg4XuU7dvX2JVCw5LzZ3e1vDbpS9s3dGDvd7",
  "key1": "2heqgZYupbNAyznh7ydMYY2q7yeth6WsdvZn8cX6nfq4qQdxMuhw6ys2duKnCU8F24VrEdX9V2F1dY2Jpgyo1jWN",
  "key2": "33vD7rsAGUJAMF6L3GqYoNKvegobRz9x4YKyehqkPNXT3xaFVANpQE3QGBSogsSCwSZit56cgBrwNF84afVqvNRk",
  "key3": "QusjuDgpiXBsCnnMuGtQa8S99y3GvQKamqU9nQ9crhpaAPmYMowePwbapGBLH13sA9o4xPMVzeH1f4qaX9wg5rv",
  "key4": "4rSz9cSXyptQuY1zh3Skeszntab8XwV3cicB7nSx3mEQXCZVyaxBRUWaNmRdHV5ff8ukeYH9fcA9r2c6qSSJj1sV",
  "key5": "54RvpkLfXd9cY2DuMHUNyVdHqRjdrgxXnt4K3wjkiurjg7k5fXVTbNhKaidW4C6eABG2958xjDSFdGURw1p1SD5q",
  "key6": "65rjS2MctTZ739MPRE9cBNv7DAyyRzBsK5rrkT1CGmDRqdK6HvKNSGPu6iyDyyYN4nEbFFjVSuvt8fUoQptkuCXN",
  "key7": "3JQfdiMYgRogCSCqFdeRnYQCATDn2GhBeUReJEnir93PGYCYjmqAUDafCA5gj6fhTuda6afcpmCsTNeYHxJScMAL",
  "key8": "3GaDBdrtnGuy3hcjN7KV5soKrogFBgWcXKQrsrQDoKkoxyEqfpkg2ob6mfE3GD34E6wY8Qx7Q9pyjdSxuPJzqVLE",
  "key9": "5RZKMKe3ZhdyW1oGSXnYRLdsyHeMtpjBiHBijYNjUpFvTVMW8qYGFwzNKxNVh94EH3SoN7EV3FFwpYp41YRNDa8N",
  "key10": "ZGQmq5rLDdUChtT8YT1pA3bqjcGFCChnHBa3bnEd4ii6ZTF4kYztHTtRLfQnVv3JDnw92jYUB2dVQRyZXNWbGEc",
  "key11": "GDj7nSiwQttTHkW7P7i4Wwiee4dYakPWsa68gWXomZfuAuSTx3pjZxwbiFVodK8erPmW9bAmDdD8zptNSB1VYSg",
  "key12": "4sdFYxQZGB8WxFPLRqafwVWafDXuFBzLcMV9F48tWPWCMaYQhs8kj2jgt7dwVpZiKj12AKngA2DLR2LcNcA3hv37",
  "key13": "48shtZNVAfttAJY44GaX9bprYMMrnaGbpBLKLyAgB7DuyM8bdoLayXiaKKsUaHCwLDxWyBdwRWkctbLU1pJ1fBhN",
  "key14": "3mZB5gVgb8D9vtnSFV1GEkmSEoquBqPnrqoBSjU6Z8XFFFvRFRE72goLhStJr24UxMPMS1qXeX3zQrjvHzHnYtTk",
  "key15": "2UYQCK2wgXkXqVKGboEqQTiYQGpg2PjpU4yeS1vKkMCemP2tiVmf9kpZGcpgaWZecpVhRc7C8DfabPBkuPWWV1ua",
  "key16": "3fRRvZfoj3KjhsKezHcsVsfzSbQC7SWSDWrkpApnJRZ4byh5mXjUccKkKr5uH81WxwaE3FeVDzJwhU7UW9922sve",
  "key17": "B7xMLL7tGbEp154uSgHq9FjhqiUMf1AxCLMi8ZqjydpSRxoWWwgxbCGZXEsuiHue5xbgHfg2qnGSgz53ameZRz6",
  "key18": "tySdLJw5FuYd2bTVnW4wfGrKVD3rttzscjqZLH11FNzfULxY7GQfRxbusAAzHTirsSQVHocF226PrvXzkwLrZMA",
  "key19": "2Yg89zKVbKtvfSb7Xc1F53n82PjvUefGKQ5cEVCDA23zvWT9hMqVWVttzUq1dbDF21xBQCgq7kt3m51YnqEFkhsk",
  "key20": "ukAGr1oUf4Bny763XzEwrGfAuGq4KoVfKmT5KiiiFauPSQ1PeEQjvbJBZWRh7bR5SCeqkBkmiNfUNi1GqrmQcWq",
  "key21": "kh7kpTFKKJFoXhTuRxnr2knjA8yWBczRgxoZs9yVkDgGLPzidwqDeUM2HyFKCUt87HCBYUzfKbC9VdaEeDK3xpr",
  "key22": "5asAPb4DxFmmyDeoWUuQeyTGPSeggQkgRRCwFkEhP3YtQ6Y6xM4jKSybVVCXr2Bab9vaAkgEq4sTuDeFYbyfe3wn",
  "key23": "voVSmrZ4R2SnUsGEVEYb2xBg3guUXdAengRJnzzukqftqrW35dURJMDDHrRd9ZNVf82mXzVuT7QoNGBzctBGwmT",
  "key24": "4vRv8L4cwdfjT2pPZ76i5yHZfEqVDf1jKUkjWuWmohVLw5K92LLVTLMuk2C87AvFF69b1FoTbLaikffgAu42sLyN",
  "key25": "3e5gj8PQpeHPRKqdP83qtGtTVztRiTbx2GHeEvdftkfUz5ZLSAbSBtWB9L9uwF2sQArW5T3MiShWE5myhZYSf7G2",
  "key26": "2LsvYL1NurP15HAGcziiHWrepz1ejymT6tGXRBkvzNTprw5FjiXZjq5sRNNVQuTwzeAm51QLuNLUn23qZHjTsTpw",
  "key27": "5boV55CsCCvMxSHjx39ZnQzgRmH13PahuKGqVuv9B7tFH4JVQDRnTFceKRnPvTkYerVB8c81DF5WfwkyAAn1Pxy6",
  "key28": "2xNqggkDQgrrCjvzBT5Tdmji5n7JYjCg8NFpaaMqBiuCWCCDK92H94pQmy44uphgHZobtJeDf4vcsZYSa3A5Ct55",
  "key29": "65c1GCbUfTV6kF4XyDbR56uLfyRJyuBJ881NvMXMemYbtBfuVP4V6oHXRAZW4WRio9rrdXVH7gS4oGqncLPo5c28",
  "key30": "qcqawd1tU2og4f9dfyFJ4BRAGXxP7xBbBmgSqrFPwq21FHLAPgVZszUMuKXfgfivSfKHvbp6gKzaKctA9dmS6DP",
  "key31": "4egvtFvYDfADaJ4ndY5yxXMRcvqXwhYvimwgt8GS2n6XSEV3pJSBJ7DZB7CDFfE9xP27LVayGYzwn6iuAZ61kQsq",
  "key32": "2QKxj8HzYCZALjzCDWQtF5b6cBudbvFVPMoNs5txMEDEgnQ5JAMD3jquhxBk7wY2F1XTxcfFeG4D5Vzgme3K7xvh",
  "key33": "32ndvewqaPVv1BR4PbLvH6LN4whcf29S4LvfMo9QZ4kGnuJhjSAbH4XVzoZQ5eLZPvz2QRDXXtzjQXMH6NvJn9vU",
  "key34": "38NeQVZfP7dWemVZ3dGR66GbvnYT48t2jFBA6KTLH2aL7DbquqSYv8G1MfVWJ6rc9isQJ2MLLhDtqNAUw3PtJJd5",
  "key35": "2hBj9b2XyqAYTvC8jzBCrax4FUupoBR6LyqHwQfnb4Qr7t875rhMSywiuKXMuLawBhREXQmHDvZjCKZ8SryWmEZF",
  "key36": "4MYNw28ZWxExKHEM7Y6a2Etj8ow8Bj3YycAzuGi8NpHMTagHCfyPNMg9BFA9HBCKADNbs4cNdeogDeA43ZTx4f7E",
  "key37": "35e5pk1rTixVwkmCj6p36vvMbUnWnts4SGdYi9PimLq858rqebAds8YDyneieHiozaTEfkUQrCKkF2YV64zFUhn1",
  "key38": "4APErnUsMTQUZHt55GRWBPipXn9F5Wc2EvcqBgvZ6Sbj9eoXwPcxsjCFnshjrewBwZm4Mj2B8qHQ6ZSqaoCrowEx",
  "key39": "9XkmshtfUmLwhwLG2WhzMxdvAR7s6gycB3wTiNtxmgLcLDoVhfsK5pyxpDgWvWdMKUTWBZjCHyKXC6yKcKyVkq2",
  "key40": "2adVR93vQgkcKQSP1Ks8qcuhbLnm2zToWYjYff5y47TDEq38HCDukMsufvk9VsH4dGRJWpE6AAQ9Uy2Zpbqb3ZEe",
  "key41": "4q55UpfCwGBxChDmRPQpqr1e3ZZAXxf8B7nAwstvhYrpQJRkPdCcNATsdM2y7H9JpxqmmtSyTKEYpQHS5nZnmAgq",
  "key42": "4qewdvEUDuGixMfMX1yxnATJxFZPso1ZqZXFafhm6ZHkmaTQXYGn7YtXRYNKU5VK3PZNifMWkHW4A3NThu762TR7",
  "key43": "5r2V1LEffo3iSL5B8dMwcq5KFHgKjUqnmEDc6uNXxi38UTCSzjxm3NuGJ76YACEpk3QqhpKP38ctUs9RPi46yjaR",
  "key44": "3c13KTtVC7XL8XdfA7RFXNY1fige47FEfnQwn4ViYsRHhpDjpgaEw6h9ou38ipJEnEtpR2dJs5LXoJHr91yYvemD",
  "key45": "3H6xpKW247Qk35HDoQyHDZKCdfGaRtRa2d5VktLPpA4pAvWSTwmBJGW4kA1s1fzpztEXuma2tyYX3RtZgV2b92nu",
  "key46": "2g1zD95YkL4qoz3iSEhM6cmUPpd4CwcoCCu4cLwcTUKapy1a6RT6UkzJSbWe1tvVHkpAGrKqhrLQMhghsN86AzYv"
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
