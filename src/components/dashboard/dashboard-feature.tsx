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
    "CWVz2fG5udyLmtcWwv91e7LLudfsdQiEL7moiiavVNZohJHcTiLNj2t7qxW5ke34ZN2AzxqaDdBU5W8CqJXPKce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KSXZvin9FhqCXsTrmZmfBuHwBfAwWeqHZzUJ2ovH224A6PrGFnkdZCRW9JuCod6sZ6N7Zbne2czjD3kmW5E3mj2",
  "key1": "3zKM5S6bqko8XE3ptZAMK9pyD31UAnDjBmqXsrRDa7ybcsXT2BRsPFc1DgyQu24fGoTrcTvVP653Ft1SHEugZvue",
  "key2": "MUhJERBnfuk3sZ4y2gqvNWgSMHQx77ukKXhVddXKVkDPnKTHmuHfzGpfaZHEmdxGwdGwi4nqsJVYmiUetBvUUWi",
  "key3": "Gb8e5xRd9tczSvQdKePdsPMaV2zpNmpVPn8LwGEXroaEbbn586P6NmcQVWY9JoacGqZnnDLs5ZZXe6QShEE1KSy",
  "key4": "53fTXwHGRftZnHLVQB61yBMJnHLtSmSedMKCVNp1VFmV7AcBRybPYJz2ZvvBWUN7ej8Cu9TSC7wSqE5dQBm7DLpk",
  "key5": "2GLnQp7zmFzbhR33etonLaH3WC8E5apsRXe19L2E4Ezo9Cnns3Yg47VTfsGhpiVRmesnFN2m7hNWA4w1Mof1JC69",
  "key6": "2U31DC9hxPhRXYzdR6DMEDcqMmvWEu89ejkGp6SADR6GSSJURWRpkpxzAzg7PDKHRc9pkMq2sgcATRUFnEmFumvW",
  "key7": "48APmVLD1v89xinULrP8uae48k2svJPdBLjQD8wto9ZFgiAMpzjCzCJeSU9d6BFwQRXFDdLUw9qTK4rrMTn9XYDW",
  "key8": "5P8SUW4tv1EmbdporQZCWzc96c6JipZf9vTgMQfqZMz8zjVY96dDPrNUpjDzD7KyngV1XJrTFCpqBov8yYrh3Qgj",
  "key9": "3LruQCTAbuqyjTEm6LxynAcG6Bb9P89JsgcXPWZRPSF7XGuVBoBczFtABurzWfkETyVbjesPskNKHEg8N6pVCrrW",
  "key10": "5kuqxTrhaS1X2WFqQQQHNoAqvYqPG8VXWPXzRXL73DTyEU9hvRKVBje5XeyxSwRcYmbSJPjumqpM4P2sCZ9d4nu5",
  "key11": "5TN8VsbAt2NZNCfezCT72Hq7oG3mBCL14EjfhCbK9RSrERsrx7vV5C4tjV156zcuAdUCmHdZV1988mo4PYSW9f6Q",
  "key12": "5K9pcYZrZBdzqEiJycwmfmhGE8yUGxMnSZX1D321ZkCgUc5mhJS4brqAdmXTFq4uLaeZsNJ8HeNMRQa8Xb8QKZ1X",
  "key13": "4MJPNcjseitfnaY4BhUiyrzAxyJNtuDbGkfcVyzwKHfraFmxPAmx56GHcBCoUzzD3SLS3igKrjJbr7SweLUT2Whd",
  "key14": "5EYFukLDKqdDGfZM7o8QBwvZuVVU5Tdvnrv9h6CdawepGDahV2j8nZpAHshHtroyQocZb9aXbWebtqJgmX77wP8Y",
  "key15": "3oFohqDHv1YJYCcT11PFnvmqSZLHGuJmrFFpf7A3Z8KKeMW2AjHJqsktCQcUoQMDiHnRVCNruF6sz9EnSSrgkG2n",
  "key16": "4ez6R83L8gfNdR9SuMXR1wE54ZyVEv9h87EE1kB9hxTZHNt5Xn29pBuoVKX9UM3RP7MTE5yRQba6UzXnjyHtxLNg",
  "key17": "4w9yMm1sM7YcSFr4mwnK2Pi7swPNvdWTZ8nNNMQzgC7SFa2mjg4HbZWfxAHyb8S6QxfQrm9Wj9Ggn7Tw94SEymD6",
  "key18": "5FnAmgaRC6H1gepbmNXYobs1TGanobuSnqN8pzU9o8XfLVM7UH7op9aSfbq8uFE141GQzG6SAAxupxY1sgLT8Z2d",
  "key19": "hYMV3VeN5tKGEzHvm1UZB7FVSk5tpSeBKyxjR7fDj2LuZ7v9SQHCqNhCQ3htD5wxZVEacvFNCFfAnXMDRu6C4VZ",
  "key20": "32SVgqRdJVwF5zRuuhdKutq7XcvunVhLMsz2hwVwWaJbCRHu1U2HASinsggoMVrKgDx5csHhvFDzGTu2Xg9gBCZe",
  "key21": "3Pib6mWd4bTxnK1qvSS45QHurm5ApsYLoRcpRxrNDqqywGVweH9WizefUen2BcKyxcwR4CqJoLuCHEZwGooQ12Lu",
  "key22": "5X6JWEb42f65tjqQZMGsvEx3Ts5JbNo4LpXjdBzJGhLyxo675AKSRGpFQ4XunRj8ojgzkniiF1RQDsNA6wCHC9J5",
  "key23": "4Pp9w6sjqGoPu5GrNXEmz66tcmAganvKwv3Z5e9cFVC3Na2A3KdwxvdTEfRwCLtvEtsFYN78oATuxhA7PA5C1ZT1",
  "key24": "K3ZYG4tHEzHWX8sRe1Q41Ty6eg2AkZBBkQLy2m2fyzmC7SWzWrPQECZ9sM6XcEMBKA9Yqdqhe9pZAXZaBmyU3zd",
  "key25": "4vitU7xxYqhJiivfWabxkCVnNdhjer3M4QmLkppeZn49ueqx82A5RnF1mu3BiE1hFviKNfi3poqw5rVMU1LrWrRA",
  "key26": "4mBTbXgQR7Qvn2YXGg8WcMp6ytXzcd8RAAV9p55auTwP5kSoRvKwd9vPDRxvuExW8ywJuYxLkaGc8yAdimvGneC7",
  "key27": "iBU9X4QVr8fMqg8Ywo6ADt4TGbbWLzqH8DU3XkVPHHJpmaDpDYLmXf2t3rE5mdEWLUJQNWNXjmh1cGRC7wjdkVZ",
  "key28": "2mhWKZujPC6mWdvzyithcdhL1rrYNXWHH5jhrkHjoBFC5BCwk1nHH47nYaG31U9x9SeuZ8a7tVbLbZRtqjZYjAK6",
  "key29": "37S2wqJEhp2L4DR9N2CkL4RoyzFbvpAYGHCYsUXRUZNS2xEMmQgBpYcUVCPg3RM2skbdf4qpNLkyMZcxsxboC3hu",
  "key30": "3Gnu7oV7ejvPgHfWykZxdp6YpvQU4ww8RdgVqfDpdDfe62vdCZGCaBL71mZZzqZoUGMcr8hQ8JYqoSXPmRNspLcG",
  "key31": "Z3cwBPrZaVPZoYk56NVMWzV71vHkYJ32SbpU1PZr8YkeU4siSfuJAKUfSvAZTVzhTpHRU3jiTxFa7riSBzABgcP",
  "key32": "ggDKv4frduYYteZqzgjLKKtouFCnhZs7SN1RQCkNnSxxuRwbg1gXL4c5ab2R8dejVqTca2S8JxtnzW4teXfyANr",
  "key33": "2CMUrYUQCJTzxP778a7sjpW9dt6LH29gP2ovGVADGUonvygHpqUScATX5NnndHVGUhp5NNgz1yaKNZVgbhuzWja4",
  "key34": "3ZHrWcQhivf5xwBaoJPPs3TxdAFKQyS8AwCG6JzT9HVCAnHk7c1vwQzogbt8tpMUp8mhqm9RbCCPs64tut4qMcPR",
  "key35": "rYfDdDgCSTe3LSh3yRJHa7M1LPjLLRsztBqrXFneK9iXWCRzMr1TPU6DgmWNfSsZxny92Jw9E89xcxoKSfXc5KT",
  "key36": "4frN9Mo5DTGjtZKWm896XDQpJ5Rj8dgyA55aEc8wmHgfPhzxTFTfCRchzspvGK2eaC36gkv21o65EZNsEE174eH1",
  "key37": "2n1QFViHaAb8sEKeuGgyNBiGMeRKAqvhCHj5Gmnfn18iRLgt3PbeLtResuT5gfW4zMdMvxFF5fkzj6DQJWi2Hift"
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
