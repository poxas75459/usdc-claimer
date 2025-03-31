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
    "2CTnArYMeiHgQA3x4uBJCfrf9XD3qtRkMT9F3pPn1RmJbBhesvoid4hyGSqgd7y9hZ5LKHRGx1rajNtU3sMZSqev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wJaNg9L94nRoaPA5g1LxxSG9NxzMAqJMsw8QoyNWT9QUmKmyBcdejdTwgAyhpXZEbWby6tbpNSZJzvMWdvVF55a",
  "key1": "4bKSsw146z2LqonqsAi4Q1gQsmJb34eqcUEyAMjmHgRuBZ47DmQ96FccvtkWogGNUSMPX5YtfCN4anxtnJy2sTCG",
  "key2": "4VeJtkZseA81scmaFicFonrm7Z5xsgXvtngCVqjCUe4gXLfXkuHd6Q1nSBxRfWjcQ2UDwAS6EtHjdDtTXkeSPJAW",
  "key3": "5g43eNHkjKWhkB9b1x41k7wHBKr3nuATG4tYccagy7rwHYdwKMZDvZDfnT6aBJMGSJvzzV62ZC49nie5Tf53djYP",
  "key4": "2EHrgX3dH5DX2SMx4Ws6faabaz5P7TGTpE8Y4gotmZSVDtC1aZk3paaadxtcMVeRJS6Wi4Eg4t3RrBDnqE7EXSRc",
  "key5": "45TR2kFyFuXAZhJ8dBpkGS92q8nmEjqiFX1qFSfw8RVUyeNWxrRf3Z1QZENbs5a5BggcpeqqN6uVeordVGgTkTbF",
  "key6": "zybp9JQ2qLvRC57tLvkAJ9Q8s2Va2LqkSd6VUQkfe7u1R5gNBrJAvKTcRkxNoXPjiP7svhGWdL6ZZj5D5Wo4XDN",
  "key7": "38JmxssenGTfandeubkEQYoP28vxg6VvF8PHomaU7bTJcwar2sUTs9v8NnMN7yRMLdNpaJTAYAZ6mx55pYujEULp",
  "key8": "4zRcWQM64uFvZasGFHaqRCuczAncxbgsh3HD8Au7zBLsNFUfUxFswF5izsnMcaGkoowGF4pzq4W8bti4Cbw4kSw9",
  "key9": "3RNmTBSsgvTNy3j1wp39V4kKK5QB5eLiEk9PneibghPZtvBCAV7wKVj8mJPB1bJAgBqdL3uGkP2rM91ubdf799Qx",
  "key10": "2kkuBW8v6BWT2epUpMFJrkFQ1cQ3JMm4zx2D2fDVQKY4uJWxv4jNwppia5CbzVSwCxMJM67DbG6C27pcDFzANdxh",
  "key11": "35CEDZesxnA4s85Ufm9XeLTbhY6hv9S3W3g6XEoxJXtUU41GXGH6cYszQhLchUuZyA9bmGWV2YMj8Q3a68RvzPeD",
  "key12": "5yngJzNjbzKtbW9EFu2ca3HHEUVwNf1xjakuGcy2Wvm2YriGxSgcMRsW3UsPhWsqvSJ1FnwUkexSm9wAZhaGKdZP",
  "key13": "31C2oUvZT53T8UazknAJYAQhssz2fBRdZoVydCZCzKe3QJVEUBLByPbbPtf6Jkvu9CXFXTcvmoxB2sAUCwjLxPTz",
  "key14": "fJzBMVGpXqaW3EhKcQHHJp9MgXZoC2PJujoSx6hDstuYj77foutGuuFCYujp4Qms3sETacgvb8nXHjaeuuiE3NJ",
  "key15": "5xiy2TgkXC36tgnLGWZgLSqVihENDo8NUvSTntv1t1CGtNf9Dx5TGHW9AMJ1Z2nQqgddbR3X2vtjJe9CDvVNXKHp",
  "key16": "2jCeCMDGftvaAkpiK4rXfh5iWjgrrNFxgycKpi8xb5ef8Wf5iChZNqBKphR6obT5rFUFwCTXFWxGmxQ4dcRPNKmJ",
  "key17": "Prrjvmh1w3Fua4ctm4N39eHrNDMJJ98ghmmD6jvD3XeksXZyCSZ865gMMnazdXWh5BXq9toKRzbibrMa66Hmt5V",
  "key18": "5bjtXmXXtXitvxEEW6V52sdaPDdS3Q6cW217Gwb5gCTcgEFra1F3CAxDkdB8nXyMse6hCq4GQbmc3g5uXPySUmNa",
  "key19": "4eoFpjVYRv3AvkZ72ojtMSQvkNXitLfDuqHs2SNk92BM8Hbrwysm6qecjVFS4NfYfq8zJfRiCLwMCzheVhaomXmD",
  "key20": "2Gxdtt85Qfhy1rKV4cEnzCVecJeprHDShP3MFmBS71TWDJRYH2ugCu77fYajBmBpkrWLwi75tWXiNuad4WMvaUXi",
  "key21": "4CJNhoBP7LQurWzqSQwY2ANBWAB3g2aaPYMzYDEU22uo4iaVQ1dqEPc1UpAZKChusputtPRuccvHy2tHaRRuRQmn",
  "key22": "4y61PRo6qSVS4Qd84jG2QChfeyRhfR9PkUnvKKE4ubbKKWmFiQ1CG7kGeXYzRc7wwGsrsdMRbdazCG24WozfG3Fy",
  "key23": "2s5wdp5ncnTiDvyrZXPG7sVZbrrtJr8JknARVULcReuuKKoWADu8SvFvpyvUn3cJo6qqnRaP1R6WxMyJodmck6GK",
  "key24": "61oBZ98m3tFvUSrksrB4SCTzYQZjKPziT1JxUE2WXE42PJSnszHiF6ARzPzK3v4KebbD1PUYC6bhjxLGCdQuXq4r",
  "key25": "2Y7StGrANTTV9VALq2ktRBsj4eLQRao3f3RoiAFDwEae7a8o4hJ1Y8bAPfbnPbu5t1u8YqZTAYg778MfkJAPTntK",
  "key26": "5qPUwAzUa5HYTKWbZSFWG9MzSyUnynPu87yFEPLaeQfpkw9REHMZQnjpkeGSFF4CTAdz7NET1xDUSnZLtXfyYrzw",
  "key27": "KAhXYQ4bAaZduh2ZrmRQHPjuWKmvakujAmDpf3XAPQD7Kb8vvGyNL9esAmLCTNPm121BzNJGRSVwMGXifufDw4a",
  "key28": "4MQiJCfnVkjtRg1nYvc4PFFascC84HtC6TDybvjqmG5ZGs8skAseR5VwDfUVtJ9YWDScvBRNLy54cGy1y89o8XZz",
  "key29": "1HhAhgbJrXws4brSpg7wVCHgE5gg1oRZSqhZWFwtUruSJjXUtpBvCQmGXmCWHg6ToLydHxx9FV3hFxqhvifn9Cx",
  "key30": "4ybBdG5CHEQrTuTFvHT4EZ4xDBoye7VE5DDbgQveRNwxWbcVZaBEghbZiBxeAX8ftMd3QYFGPWqeWMXj8i11n8cT",
  "key31": "dQwsnV8wh7rDbzeAiiNaZFfXiY2etgFTSdYzZ5BBwDhsZGdYgiPw73mkkcZLBiprvhiN28D3kQii9MJ7CibVhDe"
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
