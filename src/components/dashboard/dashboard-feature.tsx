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
    "2eijN5CCEYF3yovqffSWxQzS8PwcXQQhjf9sKfBs9r63NaKQ3uheR3KX8Ut4X76Wm3RCmKVdrEKXQgerRdW5zfEt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iQBJUYJk3AnEWVQpu57ev4rnCDQ6pMD3mTMUBJcDmWY5vAWghMdJfDAQxcKfhjb9qcFLiaPEGc3sGGxsweyU19e",
  "key1": "5F7y2mZ9hTJvZJQRfqQTpNqF3Es6SGW18WXpaJhswjusxS7PxybnMuBBkJbifwFT7f4scNvcKx5x1bdf17yudBg1",
  "key2": "4RTPyyri2y8Zz1MtdWZa3tvHAAQoFbwM1ko3xFG7YtvpcsJjYLxbnP8PDk3BubQr8v7PJjrmsNxvpbB9zM5uysWb",
  "key3": "5SWk5dUxFgVTmkZEz4DpcyJMGDTuztqeonT2FzFwAhgmXazLiDoMt54mHQD67R1bB3uG9DfxFtDfbpTckevxvghq",
  "key4": "3AZxq2PphphxECMS5TCsXBQBHFQoMvE7VJdoF47at7oyLRyLpLz6aKMVvnyKKMDDyqii4yfj5h6HyJk5uEinmWVB",
  "key5": "NMtXuQrWSgXpNp2JtsKmkhBYwBrMGSVeNYJWKcsubwm9HDR74hRcs3dWU4CfUTcmmdSE23Rfrpa6DPP3khyjvNE",
  "key6": "1e7HKY3BqXeAi8YMAdJA4519yw6MhnWEyZhePj1A76T2Wocjju7A21LbtZY8nFg5Esg28jB9RPd5tVF4rVjr3gf",
  "key7": "3ccaTmEgzdWL4RiSYpVfqiMj8Ffj9DiACwW5V4H7tZ3Zrie4s81n9mCR1FnHc2k2WMLKrpLscKgnHBw5j2g65zb4",
  "key8": "5idrNVhvCgcxbeveSQaDdfkFcz4JX1MmmyHZYfg1hHUMyBBsRpgZwGofYFcDjTa24pC9FFYHEfi5mE2k89pQCJUX",
  "key9": "5g1mxY3jjZdBY9SexJZqD2oq5BT6xYQ9LWTibpF6BTbxyKod5M3ExsDTb473ox4zkhiSq7CdVNRtdN2756SKQYMW",
  "key10": "4DxYDazqo4sHjaWTpUjmEGhmyYnC3XdrK4pbZe4xL9pbDZQY2VxcQN62LYaoj8Hxi4aFN4isa1JDN6fL4qSoJ7bU",
  "key11": "dqSKn4KoRPk7n4RwghEyi1rhs9HP7fSP456YTTkQpND2SPQbJWiMhv8g4wf37co39Gg9tQLbFCXewyeEsCnhsgx",
  "key12": "3BPLjoPBFdxxoQS2DxwQfDb8maQZTuYwXNmKn8L9MDSHYusgQdbfpBEnsgQHJfjCFjrbUu7M9pxcupc4ht1oUjwE",
  "key13": "2DaSS1YfeAdgEeVkyfq6fnKz4Jba29J8B5GZjY1p8V3wttsVhy5Gcvfdp8TbtrMaojzYycckUJR6y7Tf8ivbWzX2",
  "key14": "5vewiMXE7CXokCE5drypLDJLpLSQXEvfcGG65KiRtp1MDBfZAuFzn97yErWDYyd8ia7wtQT6UxyR8cnuXJm31PsE",
  "key15": "4UusnTi6fqvGqKaCTo1xMyF6aGMrZGaaXPgAxEkBiLquDULPTVwpoyvdzds3tuGLm83C2cCxThbZDbbdbBYWg71f",
  "key16": "2XkpBTFTDmuB3aZyHChepuEkMK4sDeNGkR58jCrroqf2GRiDx7MfkF6LByr1bM91wz6VzZXqR7hJFPUioDwEuzwV",
  "key17": "Tu7Gt8ScWdVHhg2esPHGnKGo6rn75eKQUMaGw2Xq8a9vjZRpAqDgyDUUm9svM1BCULLo38k2ZfXxQkhv3mursi6",
  "key18": "32Gn9ACq6JSQCk4XhXviS77oLvvUhNWHVoYYyzqtgky2TJmAa7U4xGSon2stKPMdYFYYAEfijB59yeug6j2jCzcu",
  "key19": "5D17hMBfqC94irPX4TBV7zuhxWQ3NpMxmeXHaZDaySTVX6sKbC8uwL1u65x4D6NoMijPHANMFcQon6VF5DcJ6fX2",
  "key20": "2RzuxBffyVf4sSMLAy5WsLsCq1gEMyTsHV2b3oB9TUfkBeagEBtbwu9pP8xLppRNZBAvjzRKUrgQxUXcH442WPRP",
  "key21": "5RPqcjSfzj7YdDf4FecW669p8vUioVYZTXkJvyNGtUj7ehSysgZZBS9Z6yBhPAPYAEyCka5TDoMxrvXdj55tqRar",
  "key22": "3oc5o3sSMP1WxJZJjssx9dnBWE39vvAyKjUHeM2TjXx8TSMpqAmT5N4K3NUYaJVXqLZTfrZA89PyaCxz3hZk6CWq",
  "key23": "cuadxmFwJuoHUNonhK6x7GgsL3AuHh51BwrthL6FY7szV5NN9LEZytReemveT6Yn1uoXoTs5DVeoLVQiNZH8DP2",
  "key24": "4oitVwoCm3s2VDdaFJfy9AuJnjxkM9ZZkdkT2pEHhusmafhwAmhwTQABaZEtdfV2v8X5eimR6Zd5jbyo8nXzC5e5",
  "key25": "8pQtVc1Q13iCDVrWRAeRwxySi2uTaoVTtmQThKscKLA9BZsMkVccZ7GRMGwVzPBZksjmzL9jRG6Uf8cR5Ds8hMW",
  "key26": "5ygs2ys4kUzdT6hnJv8MH9zNaFRBrobCUT7s1JJ7iRvXceJ5ScekC6pQzTShVSDDu9rThzGwPsdk78yarXFgTmxA",
  "key27": "38cW29gEgjYu5L4R6m9jwKAvkjvWUgxSaLcLAenquELMAfMqkgzD91aD3QdbSKgSPS92bFHVR2Z6KeVyxPVwX4Ef",
  "key28": "zx7RULAyj6Fv6sphj5DexUHb6kXnbmq4p1ParizPqaDWQNR6PaCcBekWmaZV7RRLXPCSpAPkuQTVvnH5sDt8LHU",
  "key29": "2ksSs5R7ftiCdibRaPYegyznqAA2KZqPcULruTaD6KVpLypE56x6i87ZC2GvJt93xqnRS6sNzNAQB7agoL4WroHq",
  "key30": "C4zwJBE8hVocjXTMEcFaxPeUNo4RAf2T3LNNbiH7vgmmzFpphGn4jqgbeDEuT9ogTg2XEc8piB7scezwx8pP2HM",
  "key31": "62QAA5SCG9tCuEnW59qNXgE2HosR2817yohp5uPCD8fcP6XZVrYcupRuTiCrNDUGXmwh8DGPAFigEj8DPwGX9W3s",
  "key32": "5AvqFi88kp1WpdeC9RfjAUVFQNnvpV1NmDwMgiqP6A3mJVCbC3GZymXmYEfcViDGADKAW3n2muPkbTwqTp3psapP",
  "key33": "2EXZf7RqNQ1TDfmGBsfAwFzteAkWhCuTcFoS5yAZBs2N1xJYKNb5Zn9Uee8dCnpBuQ7YwBwML8rANirMgcfrBXVU",
  "key34": "5woSZtRJnrP3CfW4qQBzgfPopR3HH5aJ6nbw652TVBY7zxUUSH9bGMDY7vCYAWA7wo5nQB93dEuwn7UdrMBZVBKR",
  "key35": "3GhWFdbKsVgAzncTC3JAQngyDsUR2JRfkcPAneZA3wmCbXhDZVkdcKsqzpEcLcMXnbi4qG83cop9ovZ6yiFyLeBz",
  "key36": "4oTxK668DjZnbXtB9seijvF5JjxWKwqNYW5Ctq2UctCRBT71eNojh4v4jnqNqVqJGQLPYdWzpLfYLX17t69WMKMP",
  "key37": "3KEgdjJAzGU1pDdjVywLpncQMWnwJ9x8Y6aW3oJHWf8uNmi87KP3rSafVtP3354oekLZzYoVRgyRwr8x6wjZhStK",
  "key38": "5dUvno3Zfbue6AhfbZLYGCfcCF4pqHCRTK3hV4mw7ezBiVqfrC1hckBFsM1MGfwzf4RCiCvMN9XLAfykN7RQgLWw",
  "key39": "2fo2EBoFdT2qnGVDGHsLT8GhUyjCVXweszXJipgW5k93sQVotCWAiC3rq4wnzpKUPaD5JxABJLYniruijxvm4V9B",
  "key40": "4xYnkwHMyhD67WAAkWXet5bmVRymuzAGoXyfx6tSru7GcFKC8NeF5zZZYgHi9Hh2Ccw3PUqTL5d59o3wBzXid7XJ",
  "key41": "66EQCHPLenaCsnNzr6WChPqNutNNSyqct3qbgT8eZrhoXpZYP4oHW3aiewh4fuerNqW9KGnfEhSAoK98Pwi7VRkJ",
  "key42": "3dFQPjTKxUJyEhR84iXepTW3g1nmKVp7Fi4RLeVGqZzVBqPUeYQeKkEH5ysK4d7wrSox1by61oMbWDPpk2sH3RKU",
  "key43": "ao5oheW8GdoMh4VJRnRKTkruaV6JVTGSer5zLAKY2ZyEU5gYFX3B6zniHxGvgdFiutKcDp8yA1Es7Z8ZVnZbmfu",
  "key44": "F8xavLmf4Uyq9V44V5fzwBt9Lks7unNSudobeiNEBfEpSbyBZAQr4GPU3Ww43k59W5gko6uYXgBNBHa8EvcNGhn"
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
