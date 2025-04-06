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
    "2Tu7FXGetyA2ixZdEWADmWi4eNvaawpZrJYaemAtsa7DUr9fE1PDFzJpo3jDfLxexAxxaAYXkag19nu62xf1TFiW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eRoGauXXSoCDdGKsH1WFWgEVyM8ay1sgroucSrq8btAozRCdwmS5PSnhmd7PsCvhASDtobFLkpjeLukijQyJC58",
  "key1": "33AwmsH1GCfHHRH8iye1hJ8ipS3tgFre6gGiVq3Ho8GTtcQg3Q58A7VeohBStX123FMn5C76WjKMz9RQ9nBRKJZm",
  "key2": "44nhUuS1whFgnV7UCWgk1BXvKgPfBS293Xtne3puFtuLAA8R7YH4gPFg2mJZeHLW2X5X9XWPpoonfrrZeQaLjwxz",
  "key3": "tosxxxwvsSkeim9ZxRa5HKA3ZPjorkbBtWd3biBWykfYa3qmDjcNuKkfr9N9KFftaodSx7UkvdiXdm8gQxLjZVS",
  "key4": "2bkXXEwCu4SssHX7SPhGSxM5wme9HBCut47RqFN3wcZD3gavWvqKrkyqgqrb519qiaXBogMNLMNBN2uxGvgcU2zG",
  "key5": "2vCQKhik3fd4HzZ168y4kPSruxMLad1CfWmh7GD4C5hrjoWrRXwmiMDMwouaQu3f94KxRKbMXSdQXAywbbeay1yr",
  "key6": "5XHdCLAhDg4C1511KXX2S55w6w5akCjtmJzsnpMuThgcRoAeyi5Yy1XqSpg3aPNFrSs1mTdqgrXQGQjYcQ87wKKZ",
  "key7": "2QfNyyWvkrbMKZT6E7BVCR4McQg3MFFUfEByrDpyQxjFXQtmfd6k14KvtB3MKBMqfjjoZL5XXpcN1ZC6EFF5Giz6",
  "key8": "3kLT6pyRbjSYA2oRYrz7ft7Yv3mtgcoQEocRva8R4ceS1gEp8z8HVakD3nyvGWoiQVxBhiWe6YdV1VHAkQDePV4D",
  "key9": "2fnCDnypx4CrAWF4hM4z594XJWGkBEW7HDw4wzS9y55Mhz7TNjjBZMtftmSVipxLR3tNaAP5GJypBt1GvGPo8yfq",
  "key10": "g9dAS5MYu5VxVVN2vPHep7UaYLQT3h54ZPqjMuCmK7G7TNJL1WAagbAxgVHAD7bMuYAPpfx69bQvBczXZ4h6sFk",
  "key11": "gQcnvkyF83x6cuP4ciKCvEGoRERFke8Y9Mm7yvLBJpYxqtbAUCJqU57cjEAZ6Ak8RwgYzwDRQ6TxBFiLEkHouMM",
  "key12": "xUn89rt3SfKxfzxSFCFBmmDJcG9FKVXHNtiADtqv3ABb6478mu5698diFT83LHUtxR99ZKPrk2JVrLXuWPavGdF",
  "key13": "5N49Qh8ppYGskge8Y2V39Yy6o1vPRxD9F43UMrNaaZ1rHRNjptwWkm3zvp6wdU4qMJCAesG5TFq52wGm4aigA8d5",
  "key14": "2eqxPrJns6fsbo5zMTrrNnjNXDsteywHnKKFhMZ9sDVKt7YosKvcKKkUcXw6VwGjq6JEQiYwsCLdXmY7xuAKBfJu",
  "key15": "3GPi42m5cwiGFpEi6Tds9p8yZ7XqRnMFSWPjVs5hr7WyWPY7JvvQGiH2JvYtCXPtNgTfgeUcs3tBmFydu2rj1qVC",
  "key16": "49RRhWMTLQttwpyVBHHEzBECPECYQmSsUBhLQoALKiKf3mzqnU4k4xmmSc2BisrroD7iVyDWE1FJrGnVgxsX7Wn3",
  "key17": "3Nt9j83GhRaQuyUaQtki3oxjpDGKM4BbxmXDtqBqpNeYtuWV9Khx9dUFAAxR91Tzh72EQajMzdDHJq5nXadKz44N",
  "key18": "48bD5jjFRnneiGzoJ2HFsf9DGPvP8GuwhMWm2X4RfydigqQbcpys9WRnDgGQgeh53niqXbxqDFMrKjxyHsekCbf",
  "key19": "3hCX7UnD7Dr27ffkD7JC175ptfTvpcXP759iRD4Nt7fbpzGcSif1MAQpGKz9dXfuuvKVvY134sFenuqkSNdkzpfz",
  "key20": "4HTD4bs3g4PCDfQa8Q1KnwKpQqX51CyS4XTCZFJ51Lo7vUjsHoyJ6S4VXMX2k5pZi8tiPnP6tKbkvyDzTMEeQ2X7",
  "key21": "2rtFoVBi8sS1kgT7ZCW9CZB4Uuecvy5xfkG6ZDoGEpSpyCyFhZ8dm6qH8ZULtuizagA3MGTrgtax9SZPhZ8BgLAB",
  "key22": "3NpYeNmuPQJ5aubbfB5QtHP2K8J11eaQMGgkcYapvYTwnzVmNg4S66C36LqDjEGnh1RnV5B1p2MmSa4YbJ2T3oW4",
  "key23": "3J1rTqwPqShtd2Xu1zzw86Uc281KL3veUcVq6AeVoc2hbtWfcL6n4oKcSCamrGHH7FyZ7SKft9Uz7G3YYnJp6uPW",
  "key24": "4cnWhcujhuVLPWbrmwMGBJrKj9BqsLwHh22A27K28eXaZDEJg7qsGmoeq1QKApVUHQvqjHmvjjyCWjQ5z9vDTx4X",
  "key25": "5ag3w6gto9mGzLYxjsYXhpapJu8rUVsUfViXVUUTWXm8qELQTAWbHXasxhh8FXC3sZQjeGtrY5LwRDWuQeMpmMc8",
  "key26": "4DjEa5ov7Smo96R2gTiBu3rt5gs87BUVSS5Kj91LsEmWAzHYSwDeQXNCwMCgoJKQiqWyPp8thn5KqESfM4invdrG"
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
