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
    "2LL61v15LKC7UfaqVsHKhXsAjA1JxG19CjvZLjWzD6ZDeZRDzbDsjZRAPgeiFUxLn4hmM7brewDqBpdQZwhu4SRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V8u9Qp6iWdoLgZy4EoAawvQK3D4BBXokZX6tRLVDwtDwGBVtgDUfTfUvq6grY6Tui3mx6rjQnv9MTumaFJs7nji",
  "key1": "fxMRFcy2t9kgRNGHcFdypVdr2D8pyJjaFGGSAKcoQ9WurTLs8SM6UJZXsQ195rhsdKhsX4E3esvJZmF727Hj1c8",
  "key2": "TKHkGmNGuLC5omw6Lt83EPxPUs285MXP4qggx7axnhc4m27UnSAsTMAW8szr92Z7o2HBiLg9PvJo3LvhPmQURcV",
  "key3": "3JKGNZPZrYy67E4RLMWFDk3MebYFeuZrBCoTEmhELmHd9ytqnNZveRXh7AFGpdHoEajqyjcV5MYo1cGMkMrqkV1K",
  "key4": "stpL5BWHPpEzta6DL9DowTaszYMXysDb8KtvrRAsEv7UgcMrbUPn3Uneb1L1v4tdZjLGyZsrK5PQUstDy2q24Nf",
  "key5": "5FwmNLiAHnGmGPmRX31hCQ6ndBq6c6FdQy9b1Q27ErabbsDmzLUjT4j6kP82Q9TDm51jp4gyWixmph2Dww5bQU9H",
  "key6": "5mLkwbC6UUkvZEUTV6Qz2j5UWKbKeJ6hK4J6rQMBdUpD5RpgahUy3j4QTqmsL4aKG5xUdPE3XwcWXFZyPo6cSct",
  "key7": "4fN3unByE5ZD1otaArefCeqDbmv5VgzpjoXZZzCvaWtfDn7cQJFW3P96Ed5NZGxsKCS2RCEV1uNNPwPnRzBceszF",
  "key8": "5vd3MiyCWMDi6TFXzdNMMBRfMNAgH7VUHbc1937NHLuxkCF2n1vP3zRwS6Aj6DbptW68e4VCQXGsG68HB8vBAGxK",
  "key9": "2kUNiN5pGQQ49t9x8gHdXeiHD8CeHwBEnmwwAKNgfDk5HkzdVPyj5cMzaB2P535QjeK73mtC3YugZytuNQkbL6V",
  "key10": "42bztd9f2mafNqVRsbGBUh8NbuVufkfbHbr8MJwtusbBt8qMjrw5973UWwbzvr7gHusE3XnkKSe8No67gM9wYMfN",
  "key11": "5GfKsRxXzeNPbuuoHdELfS1E7w5ASNAWsWj65ynfW83fQ4zPkSwrVpyAEf3jrY9db5AY6GGEs3Tr7sHnNk44eFXf",
  "key12": "2ge9EFKDUdWFo9GesmERC5pSSFCqpvNtT7gHeGgU8MMaS3UdDkftUWVL5s7RsPmffVEiGBTHagUQ3t5bvJPtSBWs",
  "key13": "5KQYRVW8F7VNMKbhbngFDfmCPf7FRUHWFZxLeeiA8qGkEpfQRAqzXeBM4gY1ZLjpPKMr1YnpFkn6seLhoikvPKSH",
  "key14": "3JtM3SFNA2bgzMAF8zAprBqfK59JJxzuExTanPQHuPTsTKMiaVRvjhacvqcVkguspWZwGUDwHCJkdyQUQp9z2Xvw",
  "key15": "3Xx5SCKiXbTeiFRjrXhqTSiSWErqPPDhE38nPY32pJbL56KTHoscazBMSqp76yCZNgubr2WPtDBGtv19TPAdugy9",
  "key16": "5EJhz3LQf1DYFGxHLFRX6Tiwo7JbcFAEZDX9MPkbBV2Qrc7vqjcAchF1jjtkmxmQKLis63ZtaQh7jQkuThdxT87B",
  "key17": "3bovjoEvsbiFibLK8fe9sUZmUS6mSdN9Q3JF4WqWx6VAwdxhVLDr3ZbikpunoW3UhWvWWXzRFpp7zm6tp2BXG6HA",
  "key18": "fwdkXojF24s5KmHq1wmNctoz4L5hAtiJqyqDErNNR7SM1VsyGyvk7bAhzvq2H46mXGJPiYZFGzKnGJpNKeZEEYY",
  "key19": "4Mf3H5HfF3HjAibVXcVHZb38hxUTMVfaLa47ozGSDpM18KRdPtsVouTZGgoF1e5QZHZ1yjBqWtop3ZirmNgNEPuu",
  "key20": "4t3XcqH1HNBHzwJDfZacgcXeHL5JJNvXeGDMgPAGhfKd4wUQN13pEfmCPeH4vDr8YBDGZhf14VLeoHkGB66SZp9M",
  "key21": "4Xt9Ms2xrDbRWAqckw6pEfENYRyJNjq5ynxAiKdgwVtmwkCYisBRN7a4BG7sapFwaa97qr6StBa3rUQ3WZBNpnE5",
  "key22": "5Hyouajbn5kLW6AJQtZyLFz5gdeHn9ozqUjvD6YagQns3zbLqnPN232EG8Rru5oLZvr8mP6AzGFRekhJr4F8V27Z",
  "key23": "3VFPB6AuaB19BhTM9UAgtNkS9eCZpNjRbaW3WonFMYjKKDRvcHAydFRm3AdaS4xZXxF4GzDsVYF9NobMZ13XYc8X",
  "key24": "5AaFCPa62UUREyMcNuWGxnFtezTkgUbs73FoxMZozgWLdD6ieUyH4LSpt7TDp4i24DsUDSyt46LVZn2BE57AgAMF",
  "key25": "pojuEpD6DiPh25NqqxTMUz9zRnMbHv1KJbbeuCrcgMWLqQcDpvhWF29w2LaNu1WxFkqMhtfN6bjDQAwYAXxhShh",
  "key26": "5jBoYpZfyg1kV5S5SzPhhVjeKQjfaNb4ruDbLc8Q9meKAkYaJ7Ae436itLHfD4JU4NzBhkLYUdbnnELZWfMFJbci",
  "key27": "2habz83u5KQrosnVU347cVBDmxrtckTSDLXn5wAYXR7twABY2VVksA6SxLe36ycRqLUwWzSideRg7kgTLPMku5Mv",
  "key28": "5RPPPZCmhjW9AdHmF1d7KhWysQEs7iTU6edZeoT3VNtkJCuAJWkEpA6ndwEn9AhDCrJjX6Avqvx6pvZKscDtSbFV",
  "key29": "3JsbVTJ4ZA2sfzeujdXQpr8yrc5ziVqNWbxYxWaunics6J9YAC4pSCiPAPZCUTvMCLzQFVzwwsCH7AYem3XocMii",
  "key30": "SPBB4K3kjU8XqhFdS6zNwMUZshLNwgWUwQ67z7ekDXtHHRbPSiyvGx5v4ooKKjd9EjpD6FkFMEPoorGv2o9KGEN",
  "key31": "4jAeVCC53RDyPPRwLLK5r4u8ptMSr2NoBzjUv1qHqMQWYabVivGJusMk6HxXs9XSEwEfap6FKFABa1cxJZ5nyA4x",
  "key32": "2rWJ1yXXoKyKQ6MYEcZwceA6Qkm8Zuaufv2NvvNSvDzth6fYpUvXEbX78ojeuUN361uwH4ZLgA8Nv2dahm7d2A2M",
  "key33": "3M14X8LJqk1HKFJu7u9Z6x791Ko7TR2vzegbuxCSxLizujQXTCvjiNg4H6z2yzHx4P24aK13dugvmjPkoyNXQM3i",
  "key34": "2wDk2yob2RjdkALyQUtMroMfyzRHZnTrr6aweHXe6nLZJoJoXjA2KzjoiU4TPPxYrysegwG45JKpfWu8KdzBVL8X",
  "key35": "43UFUSvWzL5bDmos52BhxTUzJS2cN5N4fbwSzKRSC7gEJTbh91rYjCJtj8sJVW5TiZKfLfdRYHTMvVYLP3We7G7r",
  "key36": "4JQSj4UGPoqDYjXtwF43WLbJuFshZdpTUwVUG21K3h1JN9SC72ZCANBKz8DHcTzdDooyYjKVRASY9TKvHkoqC4YE",
  "key37": "4c8DJioaDyddNFFfQunqVkwcP5AiuVCTQy4NoTcsC7sME4wJ7x36nfWnHinVf1Vh1f7XX3nczXJ1QoGdhYCS7Nfv",
  "key38": "mCk8j8xXg2EJ1fcsp8nGm8S2fMW1BKU4Aau9acdDBQPi2Ew8zkq7p6KYLGUYVo6cUAT2WTB53AJJ3msPVtLcCCw",
  "key39": "Xg1DyHq79KuXCPNo6rZHmzxN6Sd7BLf1uBfpvK7coRn3zPBb5yqQKoREVBRaeuUv48K13i37vtBquWRgzDX3AZ6",
  "key40": "4D7Ubusa1cJDiJtsLApe8QRYSXwPmtoLNjdRqU9sF7A7a7Px5hyaYe5t6tdHEwyvF3QH1FjiobZ1DxnWpu3iZhNU",
  "key41": "4AcaSHumZATkLxe6pVF2qDA7TgD7pjnxR3du5AT44ATjvoHCVWYpvrddmpobPU7CgRed9qwj1dNXN8MW7Wy4MN4b",
  "key42": "3afsWVCw1hWmztVsYzmhQUqkbXrBVUBBnx8JjknofwLu6svstZUznTuNW7duj7pAjY1QQJsw33WHNH8gSLMiN2dM",
  "key43": "5fwXk5zv4a2YYqiWeynJ6QaFU8faphGBv9vMktRKE2x5WZRyQZNSYTVFSnSYCPUHn9e2ZuB7SdzjuktALYkvZdvL",
  "key44": "4Kpya7aXvAiqT9GTheRK8E9qFR3QQk7o3rbC7MqCsDVPs2eXFKMJpmyStRZcWWoJf5QHFJL887zFFD4AwYDCuR2V",
  "key45": "2HAN6ZFgSWqHUuHSVZ4yRLVq2mnVQNki3ptaMUqCjs82JhkjyygoQEN4ZfqbNkFGi6hrFL5iz9PE6K5pccGSyf6c"
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
