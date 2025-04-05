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
    "2dpgo8NN9x68PYayoRodpP3fVw3T3gYLiNwavnErZDG7REyNbR1nAh55crfVALXpr35C8j8GcgYM5VcQiEEdhBNK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iGADH2zJZS2LVomowmrSWQCeeoGK1SHMTyMs38xy7Ky3KcDeuAiYuRwnkoJioiwdCLQ7Xx5VNpfhgHkStZmaq7M",
  "key1": "613yDapMy7sqmq2Y3EHdDsUXXS29MhhRHyeDF4dCYBcKVYgxVXJzi37a3qymexA7Mygv5m5Ao4Tf7mFPHB6bRmzM",
  "key2": "2Tw7y2NoEP3VV1tgM8sEVH1g6Hwr1PFdVVTqQNXZULhmmFaKLN7RYR89hwv56vCVqWtsAcW3VD3T47Pb2LjAaLTv",
  "key3": "2YHoWXfeMZHv9FUTQ2a5xV6W5Xmc4eZR9E48dZtaeeq8YoXS4thjXSc1KCLzVmAqozTtivJj68CwRhGCMSP8jAHo",
  "key4": "4QMqPYSUUT4zmcqGGEV8J9WxVb39TCfjaeebnTMxEnog3C4Z4Ttchjx2ySvzKs58iUfU9ahUcsE9ovxA1W6S5pm9",
  "key5": "4rsN6YN9S8x5uzbv1amaDjhbw2LTeVPpjiTmpJ312e2f6sv6rfFsor8cur3PecMgZ3bCQZHBHo38zN2atCfcYwWG",
  "key6": "3ouXt52Yfbm1xW65gQhb47bLmmZEMqozyqcWPjzSBfh3eWkq8aQvtQEn3QJ7z67xeNtY7K6zvQAXT7opEvtJmVAC",
  "key7": "2cAPgHqnms9NLjtqVEPSvnh2EyTe7grW6VQLFjYzrNoRRDGWrkLAgf9m1nLJWdy7YfkgTt8aTFxnKRq8x1e6kyLK",
  "key8": "4SHoAD1Cc9mnSxnQfMtoaKvNMBqwH6YNwJ48uXtJYUcSuJeUB1YMmRDVmdEzccioc7h1RtEG36Md763z3XQ1qwgD",
  "key9": "2jqfpgXcy9G4WqUYCUNGawgzfzb75yGK1eie4XMJJw6PzLBYo63nZq3BX3UmQCeGxHSsBF3qbshANwXY9SaSJXrk",
  "key10": "31mHViZT3CzJyFKZGfRQVXvjzb2K9mrq6Efx9EivVcGoUm4GBRb43zJf4mVhjPaQFhJuQSMA1rnxrStsWtL4w53K",
  "key11": "3AaQEFqaDKf61FQU5hkhX9eqLoUVVD6HdM5evLRdX48uiPsvy5eseVBg2U5DYBFygFFshNagdbRgChwNymVmUowe",
  "key12": "2mjW5QyAUn7gVEQYwUEqj7JLpkP8tyumeXQXszNnM5wDbZ8iFcb5zHk4YBq7x7jjome8qD5Be2psxoGvVGaVw1Eb",
  "key13": "3Ut4xozQcaA9b5YVJ2yVR8g7bkPSqjd9SkY57PZ2ZxHRqVGdhANT2wa858Qs4TR83cDi3jQCx6rsKWeTHijgvQEg",
  "key14": "2Dbv8J5hoChd4aNXPX1C9bWngXj2Vc2ggHNPQrG6Af2fsUWnyMzwVgniG6S4yqt7vMiimXJVwsxBf3sTrASPdhad",
  "key15": "QhrgPQ61H4hwTMkX9etMWgt7Tk8hczuAV2nHrw9Dyn5xPGiJoCpzLsbbsQMVShunXW17vqRLTVfjL81DUB6ag7P",
  "key16": "2x7grRh9RNMvAUDBrH7btNGaNbcCNBVrRg1bXEST5gHSnK3yheUBLLPweUiGd3WAyaGjC1yEhdpAkT6BWdMnAsGs",
  "key17": "3yFdUyf5Dy25ySeJtvFQWB9LS5Kmy4nWGj6KmKpNRSSmgdJCCCJwPgmV1Jzj6tiai8F5B4fsqvXUv5fG9rNJUs93",
  "key18": "qsgUg6U22S3QP9wVwaANveLvLUmqpBiFFpZj6r9YWteD5XEYm36c1j4bbumQNfB6VkyQ2dU5CGKM1QvK2TPSwUh",
  "key19": "2G6EoooCFD9wRUUodeHvwZQLRC36pzSNDje3BW7S7RYhJtj7hyMCGDauwZhviCEjsRQW2UJFjSupRGaNkBXm151Q",
  "key20": "4kxHn8CMvMD6JfAKvksKuerUmoPey9RNK3ddeA7niCfDX6P9o8ksejpzoUic7EwXJNQK6zh2gXiKWboBx1r8G6PC",
  "key21": "31QXcF21fDM6R5h4rFzFVDFz5JAXVi5Ng6TZYzCmK4SYjTM7WzLqUET4hgLkHfmmpWVtQgrTbWPA4AV7EBZ4mZeV",
  "key22": "4B3TEjj4umxSY9xys7or9ehtCStNCbkEb5Dj9v9WdVpw18Bub78VyuAnmJXffSiRmm8srZfyS1iELn4niqCmZ7Nf",
  "key23": "izy6rWfz1KY8WHJMEZsZjDHECHB3J33fsuNu3J9vePnNbGhh3FqFSgCd8L7gkf3pWJYkk9L1ZejnjqDSWBbaPkA",
  "key24": "8wAgrBmLgeYcZpdaoyFYT4Hfg5DoxbwNFJw44soUGUBFgXGM8FEJjuMAN3TWojKaGsCpBfwzvW1C8sqHbBKa7ya",
  "key25": "4VnGuhjneT8Ttv7jLnSTVyocT96ixRANXmjMtghBDRFAoudfipGzUWYM7H2Qxd2DF1FgCtm7wRN8PdC9cBtLVFrL",
  "key26": "2GNynTTWUptd4ZgJwT8HxKuWYq3vwxdsXpHPcjiJZY9feikWyi6zDkGsGRUdgt1V2kwZCzpV6gyZeWETt7nqpCax",
  "key27": "5SWsokZTzZNNgV9CTMdSpd3rgw6dFCrcMyiivH3yiStsoJwCaTeJj1LmFtdLS3UyXND7FSVYwrTeJpVmd6QLG7Zj",
  "key28": "66Vg6Htye3RquwstycMrGLck8ywp7wQ1pbk8kTjsdreKZtvV5eCVgFvjZW47p6VUty8DzTyeaq2VXpcfxjXXwAmf",
  "key29": "31aG5dggRnVp9Lsh84VpSLVSXQdtNuzno3YAijC3q85ma1rcTPTvD1uEg1My3CaNCSpcRKVMCoPWYqEfM4RJbaAh"
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
