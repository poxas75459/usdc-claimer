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
    "2HZfWv9SFebVJmjKqzCJRu9fUsLKFCUgb8jLN9qX85gKsYZmdHwC1n2HAvfv4N8q7cEQH666WNDAfh7xDzpbsD2g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y9fP3gRxXrFJM1EwNSxeYpUTA1vnChLVCCuSFtANtdJ2H7ZSHFXETKKMo3HLqGu9cp8Z2t6oZBuJEQrVxLwYApj",
  "key1": "3NbwbXiTSQZTWWac5hZ24f5pfnXzPmAAWdssKfodQYtrmWHBxkFTwmwsx4PiLhJZxjKqYvN5YtMbi35MxgxGL2Ra",
  "key2": "63T1j4goKrHovAQVtryjud5qfpYv5tAF9wuvXL9L5iDBx7fDxqG6nm1B8jRz6rpDM2y6uUq6rFgMJyVHozH3C2Ef",
  "key3": "4bdRXoeEkF4fdw2P3pjbjMTzJ1xqaGfb9WKSmpbQak6wFh1tBDyH9rZ2AMynhhuSawmDwpt2tnEHB2jWvZtBz2rS",
  "key4": "pk7urr56KegFFmuLW5Hwbw9uGawuY4nt9ScfdbjPkFAXYUKEg1K1y5XoRWjSnZj5jETpAFEvr1qqJvap6MbdHTT",
  "key5": "5ZeHTj4XJi79dKNgRsBYi1sDk1sKSYjcnoeex5aYicnju9ZBk3ptpsnJFZH89iXkprkqMg6bVjuWAn45TGz9j9oT",
  "key6": "3umRaeP4JVR8QcKLbFC4kWnds58Rnf9EuEhhTztLxA1QdCKrXoNF9MpZ5YFiPg3UK5pP965HfQPddHwN5kuzw2Sg",
  "key7": "2QrxSjqUGXmG5jForBRmQ4bNDseuNto6VkGsHyUsdTdNzusU5rx8oDbcTfZvqzuxCL3txpivuhwzPkJpuQGU29SC",
  "key8": "7QBoFxxN2dLVXFRqNfUYT2BoURSzYUYhxgbrG6tFVF11SGvxwohbQoRGPHggdHgh6qr8TAAPAr6mstR6N1iGYgf",
  "key9": "2CwG8ZznFoLTuAJKCmAobFC9U6Yo23vkqYo8emTPzLhTmEwihYnMKSbAuVRoJL2Tg4dWPyHWzv2gStgvBwkhipsV",
  "key10": "2DCpUxyPWvnob4YbzNyLm88ohacxvzVc9G3ngCQ4nBBAawY797PBDbJj3yGWvULPHiLdVwrGxz88BEo3KFgdpYXY",
  "key11": "2Dz5rzpqoAkfFTXQSsBXt2PH5djVFdyytiXmrUBVg8JhG3H2HA8YtC37zH2Azi7Qe1jL9bvpvKLoiC2erJpm3UjC",
  "key12": "2UHuC5spyu35x5maCxJ3EfdnGySkWse32WERZ2VWRWXy17V2WULeo2WyPn47UaM11oswpKW7zXbavdUf28Mt9VAM",
  "key13": "25yy6QesANdVnL4YXbWy7mabq2oRgANW81U3DptSYvzxVUoKHJ1YxK9tH1KmzBfieFNAStueQ9yEmFExBGMicfMy",
  "key14": "4GhounSkroKgg7SNEves5MWRgMtFACYCwupLgHBSNtmh2XDnWk15Fbw3hrBzDmzcURvyrrsFYdPEaqMDi5NgJ59T",
  "key15": "2CrJkZR139mdhuY2ZFD7j3MyrKRQD3MMoG1ino8UcPSAXdwaZJSRjZZdQghi178nMNVuL35GXH8CKSKQZN5tBRoz",
  "key16": "5nvA5qitYo63DyCHBbtzT6M6mFAhU9wC78irgdXhsxuRp1cNwNXJirS3C34F4jmmpSJWJurZF1U38uq1zzduJPzd",
  "key17": "Gv6YBTKpoPduSjh7r76nY8awck2NXXBMTCsVL4rzwA3Zye2VV3dXP8PSzwd2JGaPnXbiJcxQDqZR9NZwg2raAab",
  "key18": "5zwZ5bHRFsSkN1FDNenes9CfXMQ9tLDymVvBdfoxBJqcLTim39sQk2xEx9LWSAkHMwiuNt6gTJYJQggjDVapC37D",
  "key19": "2pHQCQoTrtfKL3z1wM4BAVAtfSDJqbqD5u94DL1out8YpSJeDjnFgrdAks6NSAKC7x4cj1uaDtVk66fWegswk82f",
  "key20": "2vQLxCRBf7uo9qQZ2ZiXAAWkBP13Cw9DJKoWKkQzhPXNP9eVgKGnJwRxDB6J8jz6aPeimA3zKWDcQpoqkJ2gJunm",
  "key21": "5zisPTB9cgBakxFondRumfW1fj1aV1eXQo2VWNHLb28uTrRVs6Qmr49iJogQbdfp2hSvvEweFVMtqgmRRiP9tAgF",
  "key22": "48sQ83JzKWnJ6Cza7AaWZAsMdom6syK7PvzQzgfecNgnWKyTwpKWF33zmFM83oGbBL9rPMSRzhbk7aUGU1EmB9aR",
  "key23": "3U6g3vYzj6Ua8L7wf9enbXQUXHKMM5ChaJRogaJfqF2g96prnvbL7oozcgApkTd6Jh2Wwa7a9pwzbvZxJHTGCFZG",
  "key24": "uM3KvFo8XjMGJ6fZKckMYGvZ2VW6doKjtzJLZeMbCUvQMpt1bew4XYV62FVaB1aWL3c4nf81S2VYtAUr1ombZ47"
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
