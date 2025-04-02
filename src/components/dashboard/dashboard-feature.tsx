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
    "5ayvhpjN1ihhV4R8fZqdLyiVSHgPrjAUep1JinPC9WpbvzoDM8U36QgqNXYTPU9ub1EDddCzNtdStoc5mQC7aNEb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jajfciZcXZD269erJbwM9dohLCxzf9P1uTwwmLWByPc9nWJtW3qGMsKEoyUvJjwRNz2dZHNkKdsWb2QVXeqWd6X",
  "key1": "3rJ2dxZxfweVP9BLMoUzee8Z3RRwhRdVR4QMEjy1PnDMXcBPefe1f3pgsy4TqRtanEkx5cujaANN4x91VmRpwkn2",
  "key2": "3fKpMpQZN5epFNn8pHPwfak6SFht2EZhgQnNdh9KnYJ1FhTMqUVsJkEEoFe7vHhBdyXgNQFfHDVFdgbgNBkX2Uq",
  "key3": "3493NXzpvNFkq8aYiuAmh3uno8PGCr64Jgeg5hJbrnoFLoZE4Jwe9tnBqXDbKV7tLnTj47SPHGnTAP5yeJKf8wh6",
  "key4": "29eukVEunT8U4W6tiUGDP6jRJcvxK2hwC9WNGh98FgGWzSzX6jFdfazypPMNQ2qm2syrwepXwfDU7g1UfpK6nvwi",
  "key5": "4f5WbczxNva1gj81puvF8GTso1kWcrf3dfeaPGTZRokHJdQFrKc9HBFey4VAcrQYr96zUuFoYE2sZdrdiQNESwZf",
  "key6": "4ApJ4VWYiBNpEDNN3X3h4j7o4EaHYJ9rJcmkBhAfoPb3D6ismMtGsgfyTxJjrFb74iG5FaAYHrKqS9XUjcnjMGFk",
  "key7": "6qQ1j1m9v48NN6D1F7PJpuSdwUaLM2G3BDo6eXzVHx383jxieB7qM1GqQM2Msm56DrMyz7vJnNbDtdPExadtppT",
  "key8": "XouQ1R8HxiUrUMLWYaijTHFwmTqfdP1mywidwJDerbG5GjvJoipewkXkuUmuQ6UXYszqbU6CTog6MJKeDAUd7us",
  "key9": "5A7276PAuBe9FgJ1hWwvpEEpmPFSwaqb3fN84CxSxyS9idqCLiHVXA5NkTVxaSko9mGkQLEjw76N98e6zyp8LuLf",
  "key10": "iZNJhrp5X4Vb4zLTwh75TXhvQKXpvuzx8z24bgioR4rn2fCm3mVpnS1QS5j7U6HmkZeb425rcLeHqSdNoNfPXeA",
  "key11": "61GkobK5ttoqv1jdGUhHXcx7DP3kRgLKNXEvxSCvM8YXGuqckQQnTBuY1Rp7Ys5F3Us4T5WcBYKoRo62LkcqEY1R",
  "key12": "4YodBzBx9tbBQV6sqQYXHoE3oY7QQRkPphaRzKvE8vXByXEbPLASMYND51hixx55826LF3cxiWQTLCVWNTK3qMYR",
  "key13": "5cTo8gLLBYrg2suA6Pz8AkCEAEcBVq3Kcg1qgY5v7rgKhdXtrGtuwujnjchyB4nXq6HgmYxxJuKpdgQMoQaHQKnT",
  "key14": "3mDWTcUqLBRAExdL965QNU7oXMLcqh3jf3ePXmy7bh5nKqwZacDCLnMQYedLqdXeBkURHyCuA23iT4QpF9wjY8Xv",
  "key15": "2SE3iN4gaEMA9k3jtAvm8gkNobAHUvJptYZDeAGSYrcf7MmbfSSXrWaRZARzUzXKV2YzZRFaYxatFDshJmx7gFvX",
  "key16": "imTHz5VvEK3GkVk4tYpXPa3CFQbwyP85WLyQ6MR5EDfidiq8ttF4rTWboVUvu9dYi9squRRM3y3s5qdbyQkQAo7",
  "key17": "HwKqiF7h9H1gVuAqrc9TNo9d5CfEtpVYfrGh3JEu2pTLZj39CVMEnbjiijFRyit38S5Ny9RZhYuNnMLPrErmy5W",
  "key18": "4aG3etPy6oCg3KLhUZwckcEp7tzua35u4iqFTFV5h3UTcH3E9vCcuDqcjrpbmW9itQDgtXCfk21aoh5p4E3k2zca",
  "key19": "5phDnw8ZfqpTyUaBk2bH8jzUdNvA9oNGtPQujReJDcfikBLaQuwQHuf1MqBdmBYksnDzHJA7btKimeTWqYmHVM78",
  "key20": "5X4bNFhK6EwMPXcic5znTtrX1rwXB8dNZBBBJSrTiz6VEAxQXoRQ2C4JbQhack9R6U5jTBsbW8Z3E7nr3AmAnBtU",
  "key21": "vGaXFLqsvdoPJXtbf3L9RKVV6f58cnZTrsrNq3ceBcT7K5pcFWmXrZ3WvYqg2NsxStPT6XTsP4pUN9FqKinYVtS",
  "key22": "2CDVWSewsLyAMwcQ5JmFV5gMXDeo6WuqGs6SfYYLcJA4RXQSp2XBer8Mvznx35LnEAZHqDSNbnbsFiKedHBsqog1",
  "key23": "5RVFbNRtT1AHud1tYRniQ9XDHEbDiqUEtfAC9KKSwmu7vSugKrrod47vkYTg2SKpv2tav9bfba1oo89CZuaMAbXS",
  "key24": "63HRYnkWTPp9D6EesNAiCAova4aE4MfXz8SD1yBknUsQCNyfxaupjBd2uDgixUj2AgpSWYxAh2dK3VdkSoxAHqwF",
  "key25": "2MKns5PXBTvEK4hRGXG4wkQGkk47biwDd8oN1uxY2ycA4Z8NtcdEjsN7MQ62pvDfJCaM5HZ9JcH7Ai5ze4q4L5gQ",
  "key26": "5sqQgXtQgLbBmodooKSEo9nzxzBi2iayXZhyeD32Fj7BSCFMtn414jh1LyjoQ7mWJ7yZj7tcbL3NJntN6VoGn7AZ",
  "key27": "58d6ipUF7GYNQfLTJafMSWYriB7a1Du5nABjAtE3cTUpeUA4TxRiB1G19BsvegtWnTUeGrUmVjY1o4u17D9RjAXH",
  "key28": "2L8t792WtLVd5ymu734HL94hFxNBm5MKu6dGhHrRbPCd16TQgmx79C3KRQnuYaAQPhQPpnnvhgEtZNYub7ioC8Jr",
  "key29": "4wUxxnKB4dDLH5y6jqGMRozA6Qd2cYpqGumWhm7YqA9wW45rN8vVccbmdiw9YfCVxckLzCHRfN8AoWqgWK6622yn",
  "key30": "2HZJtScsKvwhtfVVjvqPzpewy9fnV8FymAJAeryJxngN9TDCp3LT9xsWFvUNY5MpEYkqvPh6q2RxFxgZHDm7xPb9",
  "key31": "5LniLA5SF6K1Moi2dpgpuuzZkFSKP6bNvL1hG9snBQhDJpC8JYY2ExNTX6jj11DtaPo5WrV7ToR3FdLmHVZKvjBC",
  "key32": "4ZFHSXqYcDV1fJ8PDeEWM5wBzgzNV8JuJ4SKd7ci2MG1yXiNwz6F2R91UkftpoAYenyZ1e5TJfYpPmZWfnB55WAz",
  "key33": "54bsvBoK1pGDbCarqQG4Gvi95GFcVfbr7pNUzVfTTHNhHYMMNcUjrrW7SnJJMJ1SzD1SmkH1vRbZsG4gierxtAbw",
  "key34": "3jvgGrYyRkBQPysM5u4THLFe6f1WxuHsuNowo9Aqbji7rxKkeBoUhN4oxsHYYWucuFJr4vfWZSMp4X1RaiTmk1xE",
  "key35": "2CeUtDA41vHnCCVdE3cnnZ1P6AcixuhnaTKExau1jEK7xVxVRLWAiAA3PShANZYe2uYne5zTKqGgihp7wtXTRRcJ",
  "key36": "2RsavX589U9RGAZS4SigLNjL9CqMpfGmHbvcmDKX1aBrLTTppGtx4cLHBYTLG412WuxwVU2f2ppenrwZUUWAuNHQ",
  "key37": "4kHLoQ1FciMoKobQjdUj1pzMsQTnJ8164etQjixLLJuoUYgnHZm3JSj9gNtdmiYkWkpXAuTQUHH8KwhHUPtAbRgQ",
  "key38": "4EMtF8Bafp824ocFbHzCiQKTqtbGmDeKhkcXgEq9XYWfAcN2MwBHsvLQ6JLYHRwu2cj3WBFyCX4D1Yf7ia8ZrqfW",
  "key39": "2YpihwPXpwQ9Ds5v9p8QnWLFMqYXMDzv9VHjTedqBN5ddW5RzahR7YmDkxHsWPT89YFhatNntnCjQ6o8va26yNNT",
  "key40": "2fp9Syn6p9AiG9KggjAvGbo7HMX1VJB9K7mqT6WCebXKvyieSLDjaAi2zZKN4YD4j7Louf5BDmiWe9GKbDcK5eiY",
  "key41": "49SQ7aFA3SHv7ZutzgVNTbHVKD5Ms28WKN6gd8PnQJqKhHXFRXATsrwPyp2veNUYuHCSDik2fnLpWCBtpwfDfgVc",
  "key42": "2djdCYkJppTjUZrcjt3i3ZQoU9LDuuWreMTz6R4UJ3Q3mUsTDqWHMkpfZ6HiVEst5Qnm8bewP7S5sTayy52ttLeK",
  "key43": "5vYg2MtyAyxjsJW2cGwXUW4x63VS7rvFEsyobFGv4bQq2ViwR1Ng5QcAv2aDqgsPovHV353ouyesKz6xUv2oxGcn",
  "key44": "2wmJqDpLBopLewhYPjpiAfJNQndhgbeZuVsFj6vLhAR9gwp7GXaRwoPNzr9xVBzaQwnnxBQQU1KbvuyGv8PhYoyF",
  "key45": "2Y41JkL7CtPyHbPNSUwM1gz7FnQP2H6TuLjQBn6F6BUTajj9ddM2M9jRuxYHyxw6gEMsbvjVZtcnmpgMCg9uigG",
  "key46": "3FSh3n2a3Hu9ugjXx5xR6dofNb8pCgZY2NvEcL26XcGQJPEbSHbD3q5UcTxzvevSYkXB7wn6efYJFdSfLAEu95FU",
  "key47": "5dpiBfMjeRQSHTdQrhDFZrgz3fK1JNPEaXkb1cJ9aJQeyS9tj72AYypLBnA4MQmqMCheUn9he3gE8a2hGd8SuC8q",
  "key48": "4ppLy8QFkfcaYKB3786qXBiQzhAemYzwKUsytd8LM8TyWJuvfGe8BKp2tNBnEDiiF4o3AD7mA9i26jTw3WScxSmJ",
  "key49": "5kbbGxF6UKifjJU1KG4dHyiHsHjd1BqTBp9umrNw78bCLCsop8bPuwHnnz8FdsuAwMiYFhZN5wtpz9JQxLVYLrBc"
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
