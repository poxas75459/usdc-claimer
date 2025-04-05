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
    "2Qbh7wqH8iZU23MB59yHf9JdncsE5pgw9Dhzb6H4Hrsijjpw2dXuECQvdWUPKrx22Qn92v3Nu7aqg7zdn9jhLgSp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bBw88QnBHG2U4SgmDKkrLdph9j56MeAMEnKY4svtvTervyNHQ2RgGSKXrqVy1SP5jzWGHewsc4uPLbHUho8bNok",
  "key1": "5rWWiPJfSQ9pChYoNkmhKBanWiBbL6JwRqsLathGnRQXhVa98yF6xBRZTV9ihZ42GNEUHWCUb5KV8uahrdZG22wY",
  "key2": "5bxpjHfjMM73Qjauw2TNdoqwMT4zphynv9LHEietorSTmJo2YVmTzqZiDNfJKMtWEj65nd5eh7McyEwYfs2XihVg",
  "key3": "2KyfjJx4H9mJaSePDSZnbxmmU6iFmBdHe1SmhHoKA3ptgeymE5QtAS733g9TeCRNnUnKV3DGMamraqyAoMofYg96",
  "key4": "3GkwRF5dGom4aWAPAXskBH1M6UEnM2GVUPMQFJ3Dp2ZkfT1hSRERdbXG9Tqbf6ThVHhuo7jy6kUYjqg4G6jwnpjY",
  "key5": "2kWptRSygGSCk4t3H5kJASQKnTJLouNYLptQraQBZx5SThBpDzNCYcELpyXDKnH5KRmVxrRPHTwLt4uvY3p7Y93N",
  "key6": "49jczCky3ELWQ1y8oDpGoV6GuU5RUBWJ6Miqbn1rsdzRpC1zzmyjXndUjdM4ss9LJuXepfJjTzNsXQUuqUsx3Q27",
  "key7": "3gvcogJRT88y9uNpHxLeuLuZWKcVzeMBypAgyt6ENC5Yv2QSU7B6DeY4FPjuqG2Ew5b94bvxVHq8F2bXwHnfhcBw",
  "key8": "3k1H1snaiCp8wFt2MP98i3Edd82kbUo55xLoRgYFd4QTeY3f84fHSoSMmD9bSTWWLeiot6sDPWEEickMRn6zdRLv",
  "key9": "3H2cxnEXmBWU3DfZVpiEtEN74xDnD7qeK8w1LckfJ4fPpsdHPRuWaqMKp8As2beZu3PLoFkvMBzZBdfSp5SKzkUt",
  "key10": "4S3vjZjPvMScfLwb4Nx4fVw2VEuAyJgf2ppT6bYJW74Y6EHPcxonD6tHTLUYxn15pJqdU67RG8SXPkowKgjX6P8J",
  "key11": "4nX42gXZSjfvZbmibDxTCsDtoaRUEpWZX8AeAFLxj4XYdzkaECTCBv336CycVoCdjqYZeZjyjHuLT1JFhTkgAXNm",
  "key12": "MW5T7iSRTGeCMK9EQZjQGFc5g5AoSacYYjxRQeCgX8Y9HKhzNXJ9DKyR5ytJwqjevVf2wH1ZFknxJokBQFBmm3x",
  "key13": "29cNm1D9zasq6EeeASi4AdUWS1RErBRhSND2PQY7vrRkAVoji5yz5dbyNM9Wjy7BH2peQNtza7MpAosx2VvcvoWg",
  "key14": "ua56yxLZ9SNUsJKSVTQCaBHJhii3PwGMXFYeHBiuqQt3gRkSKc4Mi13eTWRB7ptZVBbGUKqfAdLeu5kk4BFN6Ui",
  "key15": "5uBTM3ax6K8Rca7SFmiv3Y8sfyzHgyXCHn9dyQEqWgKMpPWybsmRZjVP7nfFhrDxn9yiu3zq3JUyaxySouybMhTc",
  "key16": "45bZmH544JagLGYkVeM9fxRcozdP4xmnJvqF5an9kuwV2NHkzMKyHUhj7GLngkCSL7L2E8ZjYAQxdM7ogQt1HvuZ",
  "key17": "3bAczYpDRrYmrTY8HYzg2mgQY3vJ4NVPWuNRu7xLPM3f13eb9cS1G32w4mt6jyxcVMxCCwtRBbnVwPvft4Brfpg4",
  "key18": "6rfZn2QmbA28DZv8ALRPgsWdurP9yvAMadNQx4nD6V6LfBHb3RCCrStbAvkiR7hCdkSbg4AG3478TpXaRGmUNJf",
  "key19": "3iSRTAHMANCgrson2pmnnivPuUGBX6CM9xz9DNkXUgtgtcWtPop1VKeWA7NfzVYiGgCpXVoEuF7Vqq4nGSZrX5zW",
  "key20": "2yfTyXssBE9n5j2nbQcjCUV1nZnPJiTbrjqAxpHzwbDe8nXv7FH35VxkQohvaeaNv7y7j3EbYyuCUFCFsefjFtJY",
  "key21": "3xqL4XeqhXyYNX7a5S5vFxJ8RMupY4jiwwgRoGz5tNQFS6Y5QhdExV9gnyNkX84LWHcaUud5WHbm94r8imfYBPPx",
  "key22": "4gWazjkfZzd5wiaVJU9Wt7x9aNEFzQ7ixFitaB5BGskKni8GpfRvG6hyCUDRg5Do4VxzQpd2Xk9eJE1Wc1nAiE6q",
  "key23": "7Tk12RsVju76NRRTci5U9bkFYeQKgSYZNVrSdPMNDLWtkfpyjfwumRQmKWbARUUP4t9sZUibbDvBhSGnX6cCBDy",
  "key24": "9Ujczh5c8FZgCkN9xJ6U2RWFBgSG9adMKxZD9nzUaGAj2NFavf3dHEcgRQZvx5T6a1GH5nF1mfbzKpTQhNzGDry",
  "key25": "3x7oFkfkDhY2NWvmjAEKUUguowdTLmwYuL7dLY6iC3pEDrHHuY7wcWAKxQ5RVhFgENSWo5gCJk8PmPfq7ZhUqhsA",
  "key26": "5hYk1pjSZ4yEN7rbVE1uKoVqbeLaY8SU7DYBqCUgJCPYiWgiqhbCn8od9ae18S4wHYk6m5whik9J66DAfUYKUyto",
  "key27": "5bYSvrNm56A6ybmpSaztVgmAFM9pTQBok7dfgJZ2NHXaVuNVM1JCwuyLtnw958h1ucKzxrqHJ6JuSN9GADwu1dCh",
  "key28": "3wwRtnvcRdFnswJPjUwTmquexZqUgkWxX1W2cwfuvNAdcqSDbEA1MoMNcm7z33NFB3DAoGNJqhmszhQsg3BNVSkT"
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
