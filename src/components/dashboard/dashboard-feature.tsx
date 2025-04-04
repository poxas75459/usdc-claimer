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
    "2PcBmQh6LkjpzXt7HSdKQmSMiYU8GbWTBiQQMFEqkKjhEw1E938ey2LjsMBFjzXSDnyQBhZDL51QCpXEfxCT2zbR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gyJKEfENw5kU71G58Jkt8JXsekYnRCay6XHjXADfGbnyodMsfzN469frsTe5UZcGi43smmPNZV9yuiELuK2t4fM",
  "key1": "6BaWkTEmSEWUd1w8m9FQMBS2bpqUZ3SdPk3uvrqyrrpQgCYPCt3z9b3UkbfXd1F8k31KtxyVsCYR7JdQGo2vBvM",
  "key2": "3d8hDjDHzvuENPUNoN2WgEnk4HGs5QnZTG1iwTq6rwmGoLH4KGzEhMVhwDYsvLBWAgJwcfYxtJopKhWVD1TNkaWZ",
  "key3": "RDNogAxrHdGrmAAM8qukPf7v1FLRqLkRBTwxUt789ddHawVP3CyGLBrxDXrRpotRVFWpwLFBbTvFjCHv7NN199B",
  "key4": "554aXhorRTTExFTsJZYS4BBFKDMU2jVDsE45Rq7YaU3Cq63GuTvGcstA2gvGNm8x7t3GhV6sJDBfB4WcS11qqkgy",
  "key5": "u8VBtxfrA1DjN3xjbgR9uiyTbwA7XFfcicU4Pcxg1iZNjyDq1RqvKfZPmndmVRMApcU28d2DZQ1JzUVnVT9ivh3",
  "key6": "5hft1WMq6nbJkNcvfCq2i7LpLJ4zjUQ66VQorBe3iogVwVgrUYnRX1PxUPuwHco9S1F2dCsq5vZ4fMN3yRHyQYNk",
  "key7": "5R33cU3pBamCSvHPUmJvfBRG1cVN1mQdm4G17FLc8HYbBFsnBYLaXfigCvvXTAv47ASBfP6x6jxq1jMWaamSWazk",
  "key8": "2WQVgxNQecu5ByYv7EHe9FUFZAVs8dgQRawXn733U4UesKkwSJTKiQjfqwHWh5s3vCFqN4UGZCrxdtHiL1EK9cvm",
  "key9": "5MgFgDZMg4qsBpoZ5wZP36BJ9wQEkozu66BgxnZd1bdnpwJWbV7QBe3FHYLudP1ZwHZJspthR21VwbWs2Sg4Taey",
  "key10": "traZNnXJULFCMeDBPzcrfjjcndhGx5WUmKp5PdtDJNCDiXLs6YzCHdK4gCUsb6kyq5tgSnjFWBPmZvXG23hMniB",
  "key11": "5e2VydokCXkiFYnp77cHtmM77SZNFz19YH5dYKujUYegsZWNtqXpNRB1T88f5qTtCVXGAaqEJtPCWHSwuF35Zi4n",
  "key12": "38tHkepBNZrF1PkpFbTsy6dpAXJkuNdvqzhGXHZfEN2LWcv8sow1uLfP7VYJdp1xLPZJAhQ2PfGZz7whcMRQygWM",
  "key13": "2mExmztWwqWBmgMnmcbs4MMzS7DLTwXExtTZKnAkZ4iYsuXZBUwJSXVcUM41sqHW1fk2SVPRF93uqXTpb9TcuPez",
  "key14": "5vqCseaKu6bQ2AMa43qCGrtw8XwrVs4ParZPqMwbDHUmtamMk5YLUGhPxpYwSmc3aN4PKGPQK29yjmjCRdcnLBdj",
  "key15": "BgTbBYZdUmsEdn86Sf2iScbwMi6ZmkFcfYVzDWmo2uGNagiJXh8oyic2LpJvkgxYwUzC3Pnxt2qdpFBnsokVTvN",
  "key16": "5yvHQReYDeWDLtdSRWv296b4xEbge5Pbt9z6iWtPaU1D8e6oXTFDBG9enpvaAiDkrahftcfa4tU1Lf4XerCuUHqW",
  "key17": "5ECYLkzgckhVxMSMzuwcL57tKJra5d8V68GgzYDWXchP1VHm9Y267dxThGAehgspUFUTEB8bDo6CujuQp9R3pCNm",
  "key18": "5442johwtbUKFvSScv1Y5HDqj7HEMATiqmjUa6L98Zb3gBduPUynN9SfFCJGY8PS696tSruNG8CKL94BPgPitaoy",
  "key19": "32zNhBrUfeinxqNmnjhf9jpWaQSzGQ9a5HAVoB3KAf3RkGxEsxd5GkbZ8XaSuWgJpJ6WDDraDjk292nkVJSQRS4p",
  "key20": "4SC2sNrkhXixAzzasGkt1BE7K1rb2MPo7oDvJUbuXG82Y5w9TkyQdpVw93ekhVezmHSxG6eH2tV9zexXkvkfPRnZ",
  "key21": "34nZZ5NTbuve3PDQ8TpiMHUdzDS8MiLWgxj9CvbDjbZzbRd714TBRnG4S6ymfqrihqViXn4REKLLBADbbTPzo8fh",
  "key22": "4bTbffDgtsPZsGk32NnAKHwcXZKWrAXexhknuk7yia3ku6DMz8bo4zLj5NgTiRXj7nMqbMMUjLT7Z44MBArxvPXa",
  "key23": "2uado8fm5JjwFXAxGByunayUUUwLK84Fffde7vzkCq4AwJ9ySZTV8RjKgFMujHuGQotEQm5fjWY4PkG5hpdtsrJA",
  "key24": "61erAGx8f5ig5uniq9JNa24EDjzjfULx5NYkKmMzMhy4dppLGCayjyNqiteSWzN6FhQR1hZjBVWjsAuprbstP4Fs",
  "key25": "52a9aYKkPYWUrS5red5TmrJLFZwacgVZeEswG1CqEgRthriDNMpApxJeao4zNM2rSxhB7rL53Zff2a5ekXTYpEgW"
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
