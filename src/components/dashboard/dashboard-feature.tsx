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
    "4zWwrd5uPunGoNQTvKKXsoFnVXa2Y6uQKAqkw7kiFSpmBZGcq1EaQHLbc2DmhLMU1b6ykk3eTCFJ5DKNcD4T9DLR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hYpso1p6WqBxSnifbyCs9uvdHpaTiAJmh2LzRpCKYEWNJUAqcKoznEnwovaed5fNeSYjgKHSfAS8NueJ9YGrTeq",
  "key1": "4znKnCj2ZLai7XUJY9rr1vzBJmoGNrVwR58qkpCpkacMgWuiK3UqhrJLVnNPFJN2mNNBqWBBbwE84R754Aa6yBVC",
  "key2": "3gcz3Rx7Ts5XPR8FvRmP4Bejj3wYu9y3r2YTQfwZZ45e1q6CzwpF4VJ8gtUapgdpKsPJXzvevTWN8boDvsG24bXx",
  "key3": "2MUNqZCCaLgbmx8i2dbWJhPcfLWypeo9x3qATb2mEBVF2uBTQZq67v2w9kEcvKcwrFyTTNFMpNymy4Mry1xMkH59",
  "key4": "5AHjGQG8mra57K5oXFv1SfUX5hpcTeawmbZmF4tEN859hFfa15NoJXsmGC7jsYeE9zAneVPky6xy8saWxaARqaiJ",
  "key5": "5BCLh88GNn2y8zxQ911VT5eLPgovShQ3yBuFosoargsAM9rR94DjnBNYaufiAeD2oBk6dwR82Y64UZFLvVCYyS9R",
  "key6": "Sgv4VMLNh5TzAPr8SXtVfp61LzmsNNk9cPoVP2RnGxKhdYvWXJRbGQf1WjX9jin2LVYB4zcVwQSBn5TWDkXqHCQ",
  "key7": "56B5BuEb4BJvj6XE6LavUssw4xjgPUuQF654jC2tBMcv5FE7WZN83iZYQsGZGpCNuUMqkz9nHYeae83raoNXF9dN",
  "key8": "2uA6tqryeGY9Rqomsxeojoo7P688smVuhrk5mFtUSbLG9rJCvmbzXebt1jex1KKBNp9kb4J9jPYpU8w7NkbjF9Em",
  "key9": "2cPWJayDNfyEjEmDQ2KHZKbwwBhEQfCpje53NddueNSsPBZ4Xj1PxLRWTfaRNZVHvkr8zfok65DWVPZiuziaRNVh",
  "key10": "5GZHMLAQxJQsQMfkc5bGQbTZ3kdusGpLDovfqV89VTVywyx4A6m54cSKDdERAApEqhyJVBmUzRMMgHTGAz9NmSDf",
  "key11": "6TfQahMprPB7fb6y54vCrpAsV63ptfFEshAJqjX5VQDPLzSJRmRCDfuEjBu4fQRLr4gVN6cQAA1kKyezq2kjN3k",
  "key12": "4joypHqf1WQnUTk47CKy9FfEMrUb4U7siibiCuNSkoSPEMAiBYu3NR8EjXpvG74R4d18v5pY1yzznve8bZV5vmoa",
  "key13": "2CYdDaVFj6FHqRMgVbiYvNfYmc8UQmqbwVDgKw8g84nMzvGqheQ4qKY78CdfEfeVgkz5tFJwga23zbFnssS17bf5",
  "key14": "3BD1NsAgXrgCzxL4V1qzY8VnJ88RFnaS3YenpM7urGNMUa1iDZzNfJxdsqnTJNSpfAYJtao7zQJcxE116CF18Mc6",
  "key15": "3iGRNXpSgytg9vBqAry3N49pJnUymLm96NKqyhQBcdLEEmRQaKG6i7iUHgPwNtYUxG9ih443tWb61B1vuVn8kU71",
  "key16": "3ZF9RK7Q6B7zMK2poAjMZaaxsnDwaEEsru6g1GdPc71Wf2RZFuisSsK1biUmckozbwAN4pkcB8bVJbazVMtCnLF2",
  "key17": "4ZpPZ57bx8eTV12dpfaodmbbgCrTg5YrWs8ATDhcac5ykCNo57krb2yZzpk8HeABgjkKJCrueiH5yq1xPjjfNBSV",
  "key18": "3PHDFazbPL81VbrstLWDkRhBMp2onfnNoALJE9d4zAuwmDtQk34d1xZzntPLJrHwoZJAUs1LN6aD69Csm6qxn63W",
  "key19": "3qNGcH8z1gV4XPrWrQWTcpHnptedc2R9uUjKRDqEm9Nsk1tHAkXxHvhF4UExS3aYjCcPtYyxHzKAU6AS3TacQNtY",
  "key20": "5Nbb88n2DBnLeFwWjepSh88iuZrvK8VjrmzinAdqKU31NX9p8stwAX6ag4zHJ5pnuRheTZfpkNTk3L9R4URhraAB",
  "key21": "4eYESkgMPKqrGhqFmLBqNe18eLb3W7oM1ULWyxfhuaazbYnZUqkkbgzTXdjuXJ34vqfkpRWTrnySACcK759TrJJg",
  "key22": "2YetYoqrR3hLps8Cu9ayEGFQr69mrMUJL4pEiebpJnHAT4EPauQpZGkowDeJ5MeYdDSk2uFkWFCPFim9Xkqg1XdA",
  "key23": "3abfFEsZBdLav6vFfdeErz4Qv2ngAaC2QnUxtHUDNU4GDUhAKkoRNUuU8T5tb1YKw73wYwTKP8mZahRzcRgM44km",
  "key24": "42cPB9Kc3netXpMrBGXGSo1kSPwkKhWPfFAcbT1dorWwLXKb8WhobT74d5NEQRmj52sKRsHAX5wLa8T18qgnPiK1",
  "key25": "5TskztSW4kjkY5cyG9ek4Dqnr7hAdBAsS6164zQKcTu9K99mqUku2GMnUPHuEBujYFHdiaebEnk8bP7UhTjUy5ke",
  "key26": "2F3hxMDgzqUFs9CKtaxgMZVRTT3bu8zAbVvpfYq7GG9rbbtqAKH24BM8NHH7kkoBcLEv5FeXqe4GJjLY2oU1ZQa",
  "key27": "4dHZ8iLurKbi7iWv4D1e45mPjsPixYg9CkhaNuL2DMqNthKcYQ2xvmiL1AbyksinD3xMWDHArJRPqBYxagrYB3SP",
  "key28": "4qQp143wB9Jf9Th55sXumbWNnaQZYH7WgeGVXjE3pgtS52ZxCw1nyAwCEpASaMDiETFsgfPh61HgBjgfUdrf4K1r"
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
