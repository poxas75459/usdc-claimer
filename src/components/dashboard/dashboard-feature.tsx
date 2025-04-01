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
    "5KPpjUYWkoD1VQMGU4EZo151U9DLAnSjcnU9q6NrdJjkPetXiXExx9t14NqfP2bonuXuHFQLnZ99TMup9KZr9Q75"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HaxYrKYWXTJ9wiUgyZ8M8uoF9ZYiECFvb4m5FmhazBz1ipwRChzwRzX916mMecveV7a5uJXesSb6EWW63JTuHpj",
  "key1": "2vh9GjuCTAPmq1dmMmEkBjW9dVdAAZGfQA1PVzJZiiLqqyQGndqpGuwfhKD5Y7cyiDVM6JUBApBM56Lh51frLMm4",
  "key2": "3SAuEF4x2NSuPAgdiZ8ewYP5vBFYD4QDusRWxhd7HonrAS6iztd2fmakPu5L5zKjFxMCcsvQnGyxNs9ywBMngKYK",
  "key3": "3iz1BNhVTyDeCMyVVcrAsUuPVvqdAZbtAtRX68JmeV3PkxwmtuGLVn9xbuNJ8KkDdkDzTsfYgkdMZRF998gfj4Tf",
  "key4": "214Euwwq1ii1sPQAkxprLy4ZrqX7GVscmYFsDwbC7bDb4zjgjBXAhJxAEJZSa2iEDEHJbeHk1kPLgAY186n5z1qt",
  "key5": "3doAfxK55gkEumgV6jcgTsegdAeXy6978dnEhKvwRsrDJVfFix49vCV1nYdH4yN8fadHMAV5W74yGNPSamChXxVT",
  "key6": "xMu94yr1vPB9fogS6beVyVump2upAZiEodd1iXUFx8sVaLrLEjwaQje3s4ZoEpRMHpcRJWw682DwLpH6bbmv4HK",
  "key7": "4DfWWK4N8MCYG8qYFw1wbWWhNJbiWt56fvC7Xb5pbsnVfNA2okaxaTpMRAg43WkGjqtEgMM456ofAmfmbAaa7WPo",
  "key8": "4NLAzamoCjVLD7k6Pqrc5P6gNWLPtMhjenF9CwWnxFvodeoCbDVyrZJ8XN1YvZRsNBxGtCnKzDJsWtF5Zk6r4tQr",
  "key9": "5nznkgQAwM3xjLFXJHjJdtn1g78E8XQKBhKkEdKXEkYHzxTxU4mdXz7z4KHFQb482qYCDFFUFxhzuxoH1G6JkYWq",
  "key10": "3DtrXBDvjsJ6ZnfZXDSCfmwZ1DdyLA85j4SL2tbaNP7Jf7L52U2u4Z941k25qzQeBq3Sj2iUp2218J69TdRBqXhw",
  "key11": "53gdnEhfkLiTTmuBNj8KMiG4uWPDok4jz2WZw2CMYNuMCts2ccxXXGenWXGwcWcRhePzWAQPQ4PnNhwScGr1jmU1",
  "key12": "4tEhaLxPrGApFuYNyJgVsaje2bpQ3daUfNWZA4ZHNYD6mZytYoSZpXgGSFDHJvxh49b8SDSWsrp9rejHbyWiZsH2",
  "key13": "37dMArAS94Kk8c3t7CyYW1sBpdUvw3wm4XjrzKD6bGU8gXZ8i6QpUpEmvdenWSMFyFxSLNoQfbDVUFHFaUKSd4ji",
  "key14": "48CefPqqRfCNvnRsQkKQ4b3SnrMQZSexYy5mryNbh7tcQ74RkoTsvN7Tdc53G5qXLimnN3AKSGkZK1sM4GLQ29LA",
  "key15": "51pNtYQQ3SYmxVfsQP7myotZ1QBrXNHHzcp4nE1q9jn84Kx9fTrPxiHwzX841LaqCo9ym2mdkCfFY1RrLADiSNm9",
  "key16": "4n4HvT45hTjxiMTLZUmgXoeu8bmmyniGrXFxgkWxGHHb3osgHefCdjrVePYzNhEQq22jsZxK5c8EAMV9KTunVzjL",
  "key17": "5TsRhvMmuXwunCgTVkfafKtVdFkSboXC5itPFZFX1kaUuZhrXZnHmDXzpnre6gRTFh337eWqa4i3UyEeg3VRM6Fw",
  "key18": "2zop1XaREbA7QjMLbuap2AN7roDd39h465EqqoJvgG74zsHK8KS1JFhZMyfHgFdtHDxQuQFtYUQvDC9mZPUzg22A",
  "key19": "5pQCWcd5TDBmpjeZ1t39YfRMDKqBjeyAXJb3XoHUAcCdwe4SjdV3myvXHzYTZykNy8erauVLt3Ju2TK5qkTryyQM",
  "key20": "2arq5dnDYHptr1cHev2UGmZmkyaJHvUfDGPSH6r2jidAZhmfj9xXomZWHrYyiT34s1SwCBHTDKCWpdzD3bHxZisq",
  "key21": "2sKKAxEPqoMDW8KFoxwvqcjY1SeuWeSmZpUrE56kzta7qZkVkSDHwhuwjuMwhrN2Aojwz9sUTWjaFon7iB1XZDEP",
  "key22": "4jtNWAvy8EcLJCw7WMPb7r5teYkpToXiC92GA7VGdm9BKvgaUszn1DE2JZDh9mBVkP5nn2ZzqKrkGazG3f7RknfC",
  "key23": "34HxB1DFQFVbHBdq1LbTet2yJZ5kkCPvQioDGu2fmuFvcoiL6vYwXocWULMYiUkPDYY4WBy5ocDkPfQ5HMDL7Dfr",
  "key24": "3fg358soAGbv4bD3woQE7Xjs4X2FcRid3EyX5VbrWNdiVQfWBixX1SYGk2rZ2nBiELbqPyzb5VAp2Ew2GwF74tGV",
  "key25": "D6XCrhSFPAZS1b8AtoHe6v1NvmDY7s3PynaFviwtfMu7GcfN2BuMBsV9cB8G1MdioSEwvdmqZrgcG58CTgeKKAW",
  "key26": "26BeJu1Za2AzTFQQSwTTHy9cY78Pqs853ygy8dXRsVidQKBxu84DZ5YNMjCx744iUvoZehwa9z2BnB25WWNhyZek"
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
