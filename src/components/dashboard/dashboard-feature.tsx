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
    "TQJ5qXK96vkNTpMAXbYzVrPAww9igVRv3WGHccJEZkbpKVhxmZ345PTigSz8GAX5kCYtEwhbTnJ6MLniBX7vb5h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CepSjSscAqcAL2QvnhHqNqzvh1SyY84AiVmHvXHaiPA4SbNxf5n2cg4odXNV7AGi3crJzpspM6qjKFLCcnaycaF",
  "key1": "5R2nxa23h25zbGNs2JCQbhHcy191nJ9fqWsHave84RuZoHhiWL8XfGZb36SQvSXB4ZjQUaxUeXJtJtFfjmeY5Cy",
  "key2": "5uh2mGycgrKvHZrQ1LKKes1F449As8hAP9juKRdj5HVnsfRQ33aa2b6fyee6UsDLDMYV3fnVegnhRtjzS8DPCvM1",
  "key3": "tS8HtCpuaffCqGkW4LC8RywPAk2trfCsy3ra9hTLk3sZzptTMETMDypHaM6sw5pkXMCRzFGw2VzYfuMVV3gfUyy",
  "key4": "3QPQL58AXmAbPKBaWeHUP7USvkGGcNyrb2X3x5w6nmmEn8cBhV61LKAqZgaGSUuHtEiNEmp2LDhvDVMiHxnCrvDM",
  "key5": "Bnj9b7fxPh3nzBUkeGquyb97D2XYiJRxoLKqiicG2YytNbsF9XxTDokMz5xKk6qWfZYtD8r3LGCJS2J4aMVvjho",
  "key6": "4LKobnv6jyFgeT3tRtd1uihqEu8D7x3VRfT6pnqyh5VWD7pg8PcR5WXWRVSHQDnr1g6EVRiYpMavinuPFFz4nDnh",
  "key7": "3zcNLjznM4PjMqkqbSP3RUSZ1JNqxRBW1pwQvJucs5gAnsyEWYY346DcdqYpwjhE1xB1oY7CYGFoyG3oqhbs1LyC",
  "key8": "5jY26NnmL7biCk7V6gXQqudAwjatAnKK5R4hUVLtdRNLDAVYQMrYRgXkt3aFNknUTAAVatN2v85Js95qwi8XZhfn",
  "key9": "5RKdzdvTma917xYUiB3JeMqBgy8cyxmF99ezpGo9MaW4Crxt6B2CC3cCQZVXUbFmaRS1TgBWMsYagwae6AsxXnrH",
  "key10": "5Hmb3knYhjGBjGiJAY3TpvpXPPwPWDcvNDR8g14jFMUt7emFXaAt62wrtXskZuT2zofuB9w78qHShW6FXh5ZSeQs",
  "key11": "YQLKjG39z8Y2fWApzPBMECn4EvyuceZMYy3EuWvBhgcfQpJ2zbgC5FyfpyhYP1dg3u8YA6MSi7wxCUrkTsoYjpb",
  "key12": "KrcfZ5cRtqyPfZU7LXu9KGkdW6F7rsNZe55EqbdH3z3aHDcVo5G7kikWaCSaL4oGBWQdkauhMCCHeUSx5JKAYLn",
  "key13": "49RJDKc7YhCNCWhXabR8EvAnnHoGGp7YSGJVa4Svm5ckqdPYoQCwjScZFgCkucAcrV1b7Rz1sWzwBswhxZRapcs4",
  "key14": "3uaZud3oVJjK7q17xoSyhjQsxRHjVjTtbH4LhNnkPg7c9E3gkzgHo6TvVp9YAW14QaMYyUxmDHsc9B5bw3dARVya",
  "key15": "3ESg4qX3od8aAcqJqbCVBeudFc7GiMYQcCkCQNM7R2Xoqzs15RdDMgtPCG8ajijm4ZapNFMz2NRpc8TH4snWCXD",
  "key16": "5fX41aF346gcbLauxZSGGQA1r5pggtwro1NVibY1YGCHWCMtkRg3BEQ8mJpRw5WXSTAjTaTe5rrFG9xfk5KoxdyM",
  "key17": "3tFutdQ6MHJ6qBWV4hv6kaRD9Q7r8ZvEPjXVdzPVA54QVcjYuhErhP86Dygt1Hg16Zd95JXYhysprfcNiFkFyMYn",
  "key18": "82fWkaxB2xNQhc2ZKS22msTGk5hmSDmT9Ta6k3tngycNi1DbmF1oTbZJHdsfsNFSheTA9oG1BFVZbJcs5zJpn6A",
  "key19": "2y9FLbFUqVpAFpJaRVibbqUf5LX1dxXMH5HbGPgm2WDCN2it2NbGrdKFqNPPfLNzGiU9sQ8DdmQe1SAmyMhzSbpH",
  "key20": "aqxds5ka4hRnKpzNJbqEe7zuaszpa4q5rYjfFrSW5qmHzZrCbSRQZDYa4eRVWnuG34Vo8L8XTLhLgvA1yz4MbKU",
  "key21": "3EoKKRYVWY6LXvmw82MTUvXDmecMsn1wY7dYTzkadshz3vempth5CAtoH3UhyTzYwYBisnP7ThFYFQ9nqsfCCNXk",
  "key22": "4xxKDmhCBDsVYdXHCdJVFgcdvzsmxSGphPHtMfcbxdfYp6FQ6911MiSmodqLaoMgvLdFjMQZ4PS2MqzP2p5Zr5VB",
  "key23": "51BBuDqaT7sczSuF18KFgWBt4ohYEYexuqC8otRuTKMCXe1cZ8PQ3LHdbDDHpipVBSDFLpsp1GXtvDEUSukw7zmP",
  "key24": "3oSWP6gSSzNZdhk7uDHtyPE1cyj5DSCJ45ZPFqCaXRcWZeLZ5QxQ88CwqDNpoC9qbCADBPbeQbVFwBqNsbHjjmpQ",
  "key25": "3hziqJsD96Ev2c7VovrWbcyA1V29AjHkfYkLLjPP57ZyFb2TussLL5Xx8BterpAmZn3aXYZAamKhkoc2K4HTDabA",
  "key26": "3atMaCgsWuhNseKtyXoBTwpmJ5u9HmDYBm26Wrn1q28Mm9GFrtaoEPE7NpgfQ7GpPXXgokNLkNzoeADctn5pyzPT",
  "key27": "4Nsj48wJiFW2uDBoz3GwPUHTkQGCYooqpXkKYxPWFSXygKPEEs4xsLqmLnpC1B747UaBUwueL9qw3g8AA2cKNEbR",
  "key28": "2xcKHTYV2W1xCmq4wZMUfZtmrqBgDS1PDyChqCG3aauoiKbfdm2oQDj88yoQhgaLnYP6AjNRq1c2CUUNmJSnKKnf",
  "key29": "2BmtGkJLPkdZx7dBySiZTy42D3GjNVk8dvhWnQmph9U3SYktJ5UeNiDSbDZkeNGRQ7FRKZLBn4ayDafrwe6zPqgU",
  "key30": "4NwKTiNJtDzK7F3NtdUdPfbWkTb8QeoXHiTikY1Ju9ZW9PwxXbuFfUAHrNLLQqw3Rvh2Ugv8rxV9b78sULpA8CcW",
  "key31": "26ivwRMP5TGVthit8DYoLeRjycKiPNNhhGVjiygAqh8BF35uPPv2os4hNKaWsVGfGjmcc6tHBxuVMr37ztDb3gLz",
  "key32": "3chotEjYL3uvukV8h5BDyS5XTR1wni82tHrB9s8kYo1AiXJVpYJXru9KVCiYF2TeSuntLZsUnnVnL43PMhVoepMe",
  "key33": "5qqJyhuKHwZVjnjMnsJSEKPdxRqyyxVPXKByqqPdaABirpwxY3vqCYH6FTQzCZ7qxszY6963AM5CeiD43wpKoMNy",
  "key34": "2Wb747oMWvErTfpoTsXQ2BiZfaJdD1wZ6ZycqskmcgRMiBeQDRwk5eXwCpnLFgzfw4yMpap9DXy72DbKa6jNqGrV",
  "key35": "pfbMa27q3k33NL3JCuoN1q6tnbHmuR4T9S7faCe8SG7GrV2eqs1tNtGSvAhqxtXyMEZVKjPhHmJyps5WSMrPBPb",
  "key36": "3XfrkA1LVbbhyw2x8RtXVB4rLZXn7P1x1FJzFWkmLVEJnedEWzGkgkGHDdzaHGsHjEJF3iTDBoSyc4ERrUCe52GK",
  "key37": "2R6XahmPwWiJaXACMfe7vAn8CHkarkB4umQ3L1o9BFSDy6YWEQLNWNeCDC58AtULiDJhDyJFgKjw3Hubf5wq4CC1",
  "key38": "5H2pgT55gH64MXTgcaKQH5N1BLnt2V5xSF5gVJfLtTaScMYh6jXjm7mTepq2jRX6jHTqYWHohstasUSDgmxg5C8v",
  "key39": "3tUPYd6amDRiXiRABtTzRYsBVekmF5y2XNFrxkVkD2eVjZb5SEk8vfm1YPJbayDkWixDyP9c2qZtNkJoE31JXGbU",
  "key40": "3XJfvGyxCB5pFVNpEpBfFLQwgwxoHftN88oUdAMhQjT1SRmDmoioyNb1RmjcoZmoGyJQ6ogVaNog69h2yffRR2pe",
  "key41": "3HC9ruLyseJPs5F5TCwSanGTS7bKt6p8aNEmSnQepAT9mrYJBp2kehGqbeNZmYW8MNKmgAM1vpvuz5Ue78XLsZro",
  "key42": "3PgnT83RNQGjtPPGi2bnyvQsaRpnbf32ULJ5fNz5tbHnBL2SoGzWRk9RcTatM5H1wJyg6QNtiPmKSfim7e27pWep",
  "key43": "5NEcb21e7Na8fVWoyocjdBB62zDQx51yvkA6j4cPaRW5oPNmXcD5t4CejJDz8K85pXPhzHSaQNbvnMUM52CaX3f6",
  "key44": "3QrLukHDa93HkWAqUbgeHqBtSPxyGEg1WsHZC7gB99prVTCoV8kDsy7vpkXpN48fopnALr1hqSHQzFeCNCue9aC5"
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
