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
    "QwdFv7w8z1fvjYqVLvP85wxTRUHG7xDgsWmU6VRHxhKmbbyAmVAH3ePDin6rX2EqkZiddtuo8ssNYwf7tRj3zHA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J5Lcn1TCQ688LKj4mH9MngZJckczaFfP2F1Knj8eoTEwekbmLmdp4ZsyHhm2HPxq7aPBjVEKwoGsiWKMAFnaemh",
  "key1": "4meeq2MHzrcxj6HSsnPAigopPHZSa8S93DTH81crYyqzJj84P7WVq989w7Aia2vkLp48MkdaEJVBQjube2DHa6pX",
  "key2": "HroimNViqzRPk12eHizWMrRT1ELwGEgnuM9AHpDAqKCS2BgwyJkuTqyfVGpC3ESttLz7n6bVNczWQbbPM7CCt33",
  "key3": "r5j7o9Mi4FJDdTLiQ1F1KLPZhC7qB55eJqGxcpYzL52Vkv3AirrpJmSQQh8LdUypQi6L8upS7D7ZFXjL9GxbEv2",
  "key4": "3u7LaZpYhTge74E7zKzqNbnT9yrghKQET4hLX9p8H7RwkdtgriqKhz3k1u1uVogccjbfPp8v2Gk9Jd6DFrJmnymA",
  "key5": "4jeu8GkJLDEmrRptLeWby3AFaf1Skq9XJ9CtF4LU2aiJg1RWYpi8D5fMa6AAQ5q6RRoBYKaNFprP944diF7GJBPj",
  "key6": "3EyFFjL3U5fXG2XU13eMq149rj3osC3wjHpmc6GsMpt13tkxiBoNyiqMMxepY1Jm4ahiCePe4wgR3SdhnAysgidS",
  "key7": "2VS2tXSL5vv1wEiYT1sPoHgHKWc8dSYC8aWPZ3sJe5ZhCm2NjD5BmANTbwasE3RwuNxoj63Y8HS63pxBxfDyPQGy",
  "key8": "5JwJoeFBhE8akBcnTHUEr6knB66E1ksjKemDtTUnmXVGrN4xJ6AWLVoF95zdPxWB1zK7HuWVRmfYy3DftSTmtQM9",
  "key9": "3rNk5peTjx2un9QVcExtfZAoVBrGtzfRbkSpVFtnGpu6YBQEfSi45JHewXjHzwny5QetdTbiptX1nBYbrvoig83y",
  "key10": "2YW2qVuZhEWpk7iJhWysBHuD5bBEev33wfrrVP8sdhius7S82nQNJ8FviTwsw6C9aXc8cXbAVfZ75CV6otN6V6UC",
  "key11": "z99diyUzeXAAHNVUuGXr6V2ZHTppnH1btZojnxdj1nz3EsqAysYyKaBUq9C98mUUWSTg8aCQQAWMc4JC2tEZoKY",
  "key12": "2xHcmQqzH2kB2o4mKvXfx8UGX1JZz5EkteCG8fTmPnhhgrnrZ1A84aHjfukMawrUABwRpLy24AGzgasmJshEdpdE",
  "key13": "5TKrGWWQatV6N2BgfdToBvNCLaZbPdwc8LfriYyQ2vFzXhBBuUpSfYDA7sNiWbTaZtjiS5e9vxpq573tDaVko4CD",
  "key14": "2YmwV7QXEfbWiGXCAdqbgidKk4mi5sJZk32G3XYwirMLJXNMaf4SJcRoCpv4NDk3yRdEe6T8Xho6Vk28egZpmkKh",
  "key15": "4BzUzB82gNJvhG1tcbfxhNX84c7tMj85JHXiVbzGVbLFD796ozCZkKyd9c3NoTbxMx5rvBPifN7QaPkaYg9zbEWo",
  "key16": "5347XpbsJzT86XYS86y3994iMhh8BZukWt2DaQZfBcnTW8EPdX82yJC3XQ6D9r8ktM7h3MrmVNAK3bjX5mhZhL1L",
  "key17": "5xDMmoXofNdAsVsdHRL4oKNLkTCGnp1tMKfQUwZZE7MjwbLGCqLnKhVsb27V83nT8xfyLoLMzH1uEVMMPk94MDZG",
  "key18": "bEXXUrCjWYvREPHUXpx5jRRKUCDi8tFKtMEUoRssgDwAKpcUisysdSthSYyw8jUTHU8yakjTWNFGSdaxHdfTuUY",
  "key19": "26jfp5fTN8TZvjA37Rt4mpp51kHVuGBBPFPK5wq5sD2L2gPqbG6HaJjLHCMafxd3D5ELEXmvD55EKCdpkDEZiUhR",
  "key20": "478Yft8sR286yTa6t1TgG3zyhdoSfk9XCo9pvSoVhjZeHAdS9SD1mG4iaTakaVbKHKUtF2Cn58GgLVMeoyzVWn3h",
  "key21": "2wZrU6qu8A8V2U13jhZq3TQHT5UiQp24NEX4YcL3DMC1yJpWucg6uBCMhgcRvzFgy1ev81fN7pwXaX1HhmS2wUVv",
  "key22": "3imF6MVo2NFLrjHUHkroEKTCYfsA2vYT68NYt9zUXZYzwECwSSSdeKXiXTS4P1TupFf8HrHBwH8mcTr6Wrcifdb3",
  "key23": "in1zvncKxDNGS3GW3AYpMBMu9gLZATHv8tcGRxrVfjLzfuhFvtjYNEzvsy4xiCYakYDgJ6BCnSq8vs67bM4DZno",
  "key24": "vC5tgPy4eR5YkUf6Wa4V1GbfSufpNxT95SA8wGdRxnudC7KHAi5kh8LV7brK9nVx31wqVPmt2kdxzy8rLP6FZJd",
  "key25": "4iS1Ljccfg43KspABToRUb87PwzniXpVqFFGAhLo1YAJffVtPNrrnnd7K6A4nsa8VbYxo7CiYzmFsyRWtQFMsd1R",
  "key26": "5r22iPzRFmjAbEdesc5BJpNQfZvP4SgCvEXPLtwc3wg2Q3PezzGweDjot9oBYMbcWcPUV5sRyJHFVxHZK2aVgNFv",
  "key27": "3kZBuQVuXpmsSwyMdUKjaPfWYWDWwnxi7Nir2m7ky883AQnuPSRHwnxixvpyagBjLPqonSpeTJHWBqY8HqKtSCzB"
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
