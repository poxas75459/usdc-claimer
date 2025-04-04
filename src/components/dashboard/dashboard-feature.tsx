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
    "52eKnR9P8mRnxUteRJp47i3AJLhH8K9KCV67tqij3Yx9Nj5E2dU7G7aALpMy1tstNN3PP2TTmB9gM36TuMJhHtCh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4agKDMxiYh834bm6h2E2pAGbE4QaJ574thWAZ3pUk19xEmLka7LppFpEwgJiH2Pv74mAm9XPaTdWF6uQw4NPeGVV",
  "key1": "2QmC9HgpkecJgrYkVMAHk5L5Eqma1hKYuZbsw5tHG5ViWyPpgkS5zBdYBg3xY4cZBR3d3myqaqy5kFf6tcYQkzDz",
  "key2": "3XQGxvHvNrmZsANthUgwWjShNF1Y2Mg7dhV3XAJL7YACYUs3cfyhfkN8t1gxiGHF6hfzgr4rshPX8rVq7VngycSY",
  "key3": "3HahUdUPTo1SnyTuFkPihPy5Jd7jvhb8UM7PDMQXeq1oYPcWwXKkgnEaSCumiJTCDNj9kZ2wHSjkGyYnncmjtkqC",
  "key4": "5UcmKJaYsRXDLqnF2HyPtJ6sw6cHvWz6xXboXY8RYr1VstM6hptov8JbHHuCCVpQr85FpTx3ysZbHCAdZhRAvh2s",
  "key5": "4HhDGH3Jcs7QrRoGs4RFTpNeiNg1gr2sweq2JjS3QHzN2HC7qvhmmZ81z81b1ishhFMTHRJy5aYpMNGhWep27XBz",
  "key6": "3tbZoGty1fcZUgeJgWJRWggvGhq3LiUZVg9d5BWBRSuAq4yrfgtQ2HKesQkcbmSKc1oc49Kov37QWUxMdrn3zRNd",
  "key7": "3PFYUR3zmko2BAYJ7LFVDaWBDuDTbWWHG2b1HR4XUZH6LmzCPSdAAS6Naw8DKeS6usvbmRrzzuxasJyH3rWEBq2r",
  "key8": "5M9WXMUb3wz8rHZsHB9y9hQn6Srfibiiywu85nBi5cidi6h9Yot4QkDZacbESPaZZkcqBapC6wte9a4qsCz857Si",
  "key9": "4yLjTpYGiFkW8qK9BD7MxjBR9itgdsGH2fY3Xb8ZQ2iWLXzZM28vVGa9Q8tVT7dJGz8JZkgCXBoLFbG33MwnxnCr",
  "key10": "5AdRRmLCuPnfZY8YkEBU569Bg6Vjim7sNjhpUb6tSUQP38NHe4we4esbiURUnACmUq3QtGazZsyTbpWmX5Ge73L3",
  "key11": "4aRmuL4BrkugNffRdDhTNcBnrGCcrZoAkGLWWhvCYUrbcUhxoeq7oa7U1cgX1EbB9WoFeRimWrAsnttFcunmTiKZ",
  "key12": "2QiubzBgQyHGZae7RoGs15YUuRvbhA5NCBx2t5URg7JGacdjtSTTXRVPxHHKowqm2zC5tBQ66VrikPocrRi1srPs",
  "key13": "qHVoqif818da3GxuJ38Fg3dT7ChuA3E1fSjAoDqxSKycq3EaWm6Wn1hbdYDzM2eqRV4Rgn9YzH3Sj67UMgqLkjQ",
  "key14": "28SqLdE7EZNResYWkBA831uxugqkPqiUozi5mzXmaj4JJp1YWKBhSLvFTgH7vR3hUbqfhfgeg6HkoBtCChfov3Bm",
  "key15": "MyF36sxSi5KLqgJzD2kzdz2mHzCHXS1qEifK5J56p9jxZ83fG46kLSroLgJBihatUrL77bnxiGUbGh6ZjoC8LzA",
  "key16": "67NKvJMZUitX8SXfbRRBTa2ouBu17csLiN8PeK1aCxVshrSCW3GMVYtEVGcEEf8N4Fhz2dJFm69i4HdduCGGLKb7",
  "key17": "2P1JbnjagpnwNDdT8w5wb5ikWBkKzZ66LnkKq1NjYCrksGF3biiHK4uoQjTAkYGFutxGcubprrZtDBn6keRnPf1S",
  "key18": "G9ZeaLbs3woZGHK8poUXvZiKrdMcxQs75r24ag6ytorLtfbRq3tMmVwDwEmDZ4yDczNWKyuoUeeKpuKrPt3tfps",
  "key19": "63dLyAUnxzV2sJkekM1WP7gt2FsLRXsnUhTQLET1QWfYvDEn7yCSmEtAGeFB4dmsrSn13bvvxz2vqbK46iuRd9sh",
  "key20": "3FsSkPLTa5uomt8Eqq4WthNubh4h7Hvws3JUAeGhh7ggJy5kUaXgT2yTCWYbhfkEo9hgYSTXZMxPc49bCCfhErLr",
  "key21": "41YtJCfF5rvaygpxGffQpMJCxCTh4rvQU6jE3RyatUvLFHgSzjwrTVDjLqwycPFPRbTRrzyv94uZ2nBfYvEy1oKF",
  "key22": "3kmJpGLXHyEA6rnpTjCcpyzhn7rYGJrt5B86Gk3zhaTXDZMf6zLuRKP5twH5twHHYhDyenSd8LiaoChcFMUqhkJ4",
  "key23": "56oCxgMH1X7qCHYJdAqGeWdjyEFvPFCzR9f2BomiuhiypebdmKCJdsXFXHTptZqEE7VCAFXc1k2cqC4c3epH7zcZ",
  "key24": "4RXZ4cohRiSwteCLo2rbhDNM7qQH9YC3Kvh8d2byqMAUPg3CUxfyW1unFEeQof1Z1HfrqGk5hAyJUnLuGQdmyEwa"
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
