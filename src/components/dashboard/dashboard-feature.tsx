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
    "33dM2spzU3y3C23yiBbjD4wgmjx1qQqz9tBVDAedVDH6yh3XokEpT4TRSKvmd4DHKTRb95gyoCHYet8Nh2eRrhei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vQQ4MvCr3HSf6vGajCLyg2Rm2QVPb2fuyAXHbZeLwou4nUmjsKqB6fW1PMbH7vNpdmajCMnbca69LKYv1ciZaqX",
  "key1": "5agqvtMnSh35DB8GsaaF85N5XGTYZdPBMRcZmoLR2hiYRJmjm28NkJFaDFYHemXxyB1e73vERaMTQrJWSznVxkdW",
  "key2": "o4G9i1o49bstjbMH1KWhDf3VnHwpPmvS9F34kTk3kiotyuwte56g2i3TfDCxQwqsKStpSpW2xXYNz9mETs9Urjb",
  "key3": "3eTe5m4QFqDubawFbHefLmQF77n5BfRBm5tgWFGGRErgyB4P3v4vdEXb6zUaJXn2RaC68tWmdYAVMVvZAy3w7UKC",
  "key4": "2cGMgstQL181C6pMX3w9w7WrGEnf9mKZH4FG7yvAFAyCZm3usYCmdFV1FyWUmssuYRfEsvbKLffZii2NUPNbsz9f",
  "key5": "4nYFTAVbrB2pUA9ppPpvx47Qa7GV6qJQxZVjHhX5qxYqdaP3oPbbhdFUgD8fSWRuTTyb6ejvAnoNUMkxkmxHY23Q",
  "key6": "3kVjZ39SrLfauXJhwfxrxfNWtkgvqD7jKU6hSstrYCbrx4XSDRSKJbVPb9RYRfZHD2e9c57bR2b65QvqC6DSLEc4",
  "key7": "B1QputTE2ferNbfKdRdz7fGVdREAJfFrs6NnF46tBrhk7a7dAMjep11NnA1cNk29Hf9p19qKxC2uq8WNdYCjkMc",
  "key8": "2E6ZnHrMgWpToEdqEv6QfE13hzCnun7gkn8fmCakxHd3E7gMH1KKCpxkwJmka27cKofRbwyT8VyPsMcKNLiDpknu",
  "key9": "4rLqyu6mfbn52XvJPiNXUsewj4MtZF5CBu6soGWGfHAicDsFSjTwy5aNpg6i6pf8whYk9UJ9ZuC1DsiymgqnkgJc",
  "key10": "4s9gtwCMnVzrLzURfzo8NoAryAPNrQiiurJrdHt2myVLWZEyTQyJw4ARWwtRPVZMYDgaAuVvpAwCNS8hGmmmMtFi",
  "key11": "36QDwgcFBcS7YVx2re2BF6Wi5MnaMTK9LfXT1gBY8Dz7o8GuPhqCgddf7RNskpEUhYu8HnwX8khakWFi5uR5wcw2",
  "key12": "4mAfHBQX9ZedXWS82ATBxpEhJaRDc56TQLbVReRDGedXr8AVwm58Kdr6uxZTAEsKAciciKGHJPR7WGM5kodugXhj",
  "key13": "4RgKkzJXm2AcW3N1ezQZ3abjaWd4PshdQ2nPivQytUb6BfcDJy9SvgHi3D37qL3mHvc7FHj3fcdaQvoBTrwA4FyC",
  "key14": "Q9etnvZMiNxEEzBMukxxLkCYTVZYhWa137sTamK4Ef2yojePLp84CRfwgCksdV1buDuSwr4XYSNvMKu77xMvJNF",
  "key15": "xW9rdFVJKMWPPmH8sDryDkbs3UaZ5AA6Sm3qbzbk5XUsgDq3TzquLE9nwbV1BqAmo8sqqk61vtcQKiH4aCvd5Qg",
  "key16": "51Qo5R6y9xSSgBqKpfKQTyDpHv4Jk81fLv96ctgFmFAfadZPZHW4tZRyxJMay8hShhp4tNnLtvwYRLX3m9Wujuzm",
  "key17": "2g5BKGFYUsq5XC2Nvq2kGBE7PYZx7Xj8tT4kYFKF4PVzX8opi2mwaRdRazgxH2acNcGFdEPpn7gRNyc55jo618hF",
  "key18": "5UAQkXXCSVe85QyvHHHgZhdVMbZSyJCTQ6NVo3qU9jp4FWBqfWpuzPNg6yP8bwnu3cZmVtVqa2yi9FhwbjKvbsfH",
  "key19": "3qsBzG6ULe8GH58pXgjHZ3mq6SRiAXRp5okAKGJJwhm3yd9LoSeCGoPznxxvgYHcZJ3u9WcZLpFJxA89bssAGG7z",
  "key20": "56zvvt8yrAkrotNv4LU4o3JKGFd1uaC6euRWYc7Pk82VDTHoq7dJubPRg9Qsq34SNV1vBuaRBGQRo1K4C2kaYNsp",
  "key21": "2E7szJnc3fVNcmB36jDY6wN86U3vr4J8pY9ALYHVmiAdaBYPD763r5Hsx5YE5eLc7kLFcNHJitn91Uy3hLW5qo3R",
  "key22": "4ZvRkuSNRgtpodsEHCAHPN5sMEPU6hzUzgdNL1j1tB69X1Q5fPp9q1yqGiC4iiuXsMQ3SRzQj2rxzTuHGNpzBttx",
  "key23": "mq7nnKVxboaKf4W7zHykc25cq9jbAHrHdPprJLnDNK5inhkzV2NeEexwpB34RymM9MLNKVTnG3Pn2Xv4uYNtHx1",
  "key24": "5Ph3aqENFHRdCCNGxnT2o3PwL3titmtRL1c3SUMD8mF6J2WPc46aGwM73KhUf7TiLtUNAXRAjGHXWCRw9ybrhCMX",
  "key25": "3i2PEZvKHzp2K7K322zVcTXJqSrh1Z2t2BwZNmx7erjP116LH5H5dHgKjfxkLmVin7vu26mNZnVrWTckHtoKTFun",
  "key26": "4c1YPYnudYPRV9LgpJfQNEF5b7Gpdfio6odGpugKXfwMU6RcmT2UubskA5hmj1fovJxTrVGjm87zNQZBwtZiVFUQ",
  "key27": "21pAoArFWogSPTantxpXtresFTRsGFuraMyhGg8k8nv69EN7W5GYG3BeM23p4cqUD7JPuE1Ag914chDUeMnFcJSd",
  "key28": "4ejRCetL4UybNdEW627DYqH1JeB9uZVFFtZa2qCBpWTSQmeGi6hG3HszdmN67V7KpkPE9Pi6pdVKxMRzqZAmCPSq",
  "key29": "xrMR5rMGTnyBfALq4bJ84Jz7HwCQRi8kqDmqp1GY8vmK414uSpZMAUZXEpDaf2L8SgiAT8oUoShwvBpJWGm1i92",
  "key30": "65pCT1QtoF6gHZsCZVvJ8QtaGNyu6TjBNmE52QXAmvR9Tfb9H8NnaQC24JJnNBoJz5Vo6K69ujxP1vk1ffr9kVgH",
  "key31": "3b95NxmG5nrRUpy1xgTsHbsxCbhnm8NR6EwLGEWDfcwPHYoebJpv5MTMnCBJome4QrXbwGaCjh7p3QjGnGvwWumk",
  "key32": "3sUGic2Vd421cUY5RGcwYp8VUiKMgWRSosTbnwJuWNt89Dymyu3kadtMJnnVYEy9Y6Xb1hMH6t72TE2MrHMmfLdx",
  "key33": "2ikBrg2cAFKDKtEy6Tkqj9F43PByCiUfXkBQfQFsxMDYU8U9pSPaYZMEbwe8zrgyABPUydwZEh6moepX87PpWcvR",
  "key34": "37uyzRf6knhPaRztzQCBMzF3VDx4grTrVijr4ujQ7JCbijzjCDxNGSETXfXBVFA9Km5TvHry8NUnkwsjYJPsHSfM",
  "key35": "4THd36oFekahuUvNsvjyHsSsp95LPVU2czVnVMyN7x2Ec9wxciiU86VZsWNXGirPvNydSMjeQ1QetPSajRcej4h6",
  "key36": "3uAH3XQc67WBUQ1D5PDh9EugVTQsHqQnEwDj1ZwANc9Mo84RG6dQ1Tor8ijMg5xzj8y3BmWMfXbrbAURmZ43xkAZ"
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
