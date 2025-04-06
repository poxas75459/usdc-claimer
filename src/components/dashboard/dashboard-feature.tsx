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
    "4wgbg53FfVRMJcYfq17V5ukbvuyaKhQtQy6CC7SMv1XzZNVxH9xZyY4GDLLuoauuqYVT9im7PkeNuPnCM6pu2wga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VGLWHjW3JjMBetDSp3ZRnJaf8mJ5S9MTrfMJmQrewsjsxmwmEQGY5ABqpjGQbWrxcsdjEbg1Uj5VMw2fGrLRc6V",
  "key1": "4goiMeEykxSA4UzR5yHc4wVSoBKKuWDer2QQLvNsoh9HTPUaEnS7szdg3YhZ67HmWkeKJMeAAojf8H2ACCFYPY9x",
  "key2": "5Z47rjfagrUTfcHnaVtAb11sSCWRZ8KMYX1i6svn6XBMefNKUoqgvPMY66PKRvGZx7usp9xdZfn4ubeTAgxboHz9",
  "key3": "2uiYddM11FYbpsu6P3da3aZZd2Eb5LYhuqAW3x9GRs43gNi5u3XHnm5sdNtsLw6gr5tzaP4Gy4K7qTTM4rzZJtwx",
  "key4": "24JoPeidAvc6uMUkw3t9DRdupPk2fxGXKj6wFL8ZQDG82dZQzHEWofFhsxGwebDqmL4YW21hTvbPVyX8D3GqW1ZN",
  "key5": "4TmhsFve5Vns35TEinWFJDwtU1bTwjBsHiTmuLcjd7PNxwet56ShNLnmYQ1Cm4TLt7FwtFNe4c3CU3WTFkwBQMom",
  "key6": "5JMqQozFgmkQR44cXMQQwj1XFz7kswaNUdoyx4zn4tzjSt13h7Rc1Cq19c59EiFVbMXA7UtQwmKLWTMDhF2obWMy",
  "key7": "33zMZ6Am2ukzCcnhgu2cdBeNBBMpDsiFiAYp9DkF1N9Q3MsN3m9CP8F4csVvPCe37zMGXvoPtBJnLtYzX1TXkrxN",
  "key8": "29Mmd5K7JZuS8mMw171cxq6bJWTAMCXhTcn9XMdRdR6RhVPrK88C2GCkujPo1v5F1YPYXGoNFaAaaWP7bStsLQ7K",
  "key9": "2gacDTQZq2UpUn2KuxV95yViFeHFsqE9kN9o6JVRdbk8ZhTWnoM3Uo8bbDS34uvUJCsPoH8ATQcFZPrp2vVf5T9z",
  "key10": "2hwNoDLtHaNky6wgtwLhEURbVvphAnwovgtiqPrNGyP5j2jVuGZDz41ikSVF2qnFiPvj1nbNJu4fTJGWFpsTY8wf",
  "key11": "4sbvhZaXT4j7HW85UNCfrLSeyFgRLj5SB6fbVkeDTcvXuE8L1QqUKqPdDbA9zRiHy5BRf7nERNjydLQyRGvRbosK",
  "key12": "53yLJEiYm2K4WK4A1XwD3B95J6FuKTtmzZMnnTn7MzHFgMK5Gnbbm549XBoLJAH3fKXVyH15fm3HspYNuVACXwBk",
  "key13": "24JJsMMruWYfJAmr4FAeZYsQ314n8Qddx275PQXiZyQ4bhw7PgiyGsBWTWC3yoLDVQocUenrpiRwaQy3Wh94hcEB",
  "key14": "3tLdT3D5F8KLLQ7jRQhRVgyG6hcBx9gy9WeZAck8jez6v3Cy4HtJs3sELQQ5h9iqUWfAwZiCFJgDjhM8nQmZMkn6",
  "key15": "4hC8ZmqhDZ6hqfx4GizBtV8ddKtrefAGxRwY5pT6wUj9nUy4jrFNnTPZQZ85MbrLNFqAevDNWAZ9JqQqZ8cAGoc8",
  "key16": "4ADqaXGmVfpCFJYisTbTJdV4MKGxGCtMQmJQtq65Vuyw8Ao6iTkqUVAR7TcD8astcnFPsw2sp7SwLL2qaKbNQoRs",
  "key17": "poXQGVn9gZ5cjMtm3wrASA9QC4bqcp2PxgKS9Hre5oJvuE1gSXi3ZAZHmAfjc5WBBrao3SZw3TLAs1qBdAtPRUF",
  "key18": "vEAHFtr8KpauHVjZuzULQ6Ch8yfvexa2H4MHfSc681SDsx8bMtKG5oMkSYuecNusQK3JLKDGfrqkX8sAYmjs6CV",
  "key19": "3c4ygkbAhz7G1CnZYpSEAjnnWezgQxqD8MXBdp3hBnEHJ5Ny6qLgzeuMPq1QxYS9NEhgNgRdMDwndfNAa2mXGAfL",
  "key20": "LbAVKhGkGK6fGp54WQaWN9pLndPZ4Wu9zLhPbsGcjT4r33oU9hK7HUyPqFPwYAfgTmXRytNDATuDNzdid6fhNKA",
  "key21": "3KcKr99vveawuGzcQeyhaBCPozw78Rka1HKjKFTy9VUGQMfZtxszAmP43tLWiYP7WzcBTdqQ2VJVLJ1GE8556BAV",
  "key22": "4YeHeN38pM4sHdAtEGEiaNDuVbgLFVxSQk1osPYc1H94GV5nKTMCKknHkeVnTCtCBiA4mmGCVesVVzWfp3tRShu8",
  "key23": "jyN2pMgAQh7ETWHBoqsoPtPe7gv2YsFsACG3uw3vsvXLVE5wxZmdekKx8YQYbtQdgBLuZ2Dbwoe5tBNMsUMpVU2",
  "key24": "4JSwfM4MP1xAQ7CXs7i3PTBy3N8VdemUDwNMc3XXovbRpXm8tKQCuJfjdxuzkoHnVNMjrCKPGmGGFFtyUpZ1QkSq",
  "key25": "dzcPVMZTNgVH8zGR1BY2MB4ofnFuoKz8pwmYoyFNkpN7sdvTXgSZjTk1HVqdfneBsSGsvt6E17qWz6xzcHMjvat",
  "key26": "46g7ivNTZuigR4QKJc1Vouc2vvS44bvB34P9fPMP7rKRrc1W48dpH2V8CYQ3MH5Jbq2rYVKLEtt2LfnF4vDFgnrx",
  "key27": "FUXvWr2YVQQ4HE6zKXvUWSD1eYiMJSHiLhKtDyWJnAGHEfHuKN1ob2EecMsx42vBFbzCVGdER549dEPBKf15NnS",
  "key28": "2sSnDkcMcqav5UkomCmmGXCuQnV4eQ2ZmqrtvP6CPr5eTC7yNqujy26VsUqyhS5L2Mo9Ag7Vjfsxf7AfHMg3AUhg",
  "key29": "5QHvbq3VHnvZzkTHeUFA34ReKguRYSW8dbcXHQbcvxTDU3N2og7ATnBbmUJGN1Fy2htjjPY5iz7Diuw1b9PKM5zQ",
  "key30": "4znMejZ9wQNuV4zd15MuEy2WFmraf3Ut1whjrsKCErPjj93rBrJ65W8QQ5f23wxcvaFxaLAoWcS222GFNQqiwVAk",
  "key31": "29DSJuUnZQMNAAtf9kCPVU1dsdvSveg7acLgBan156GMgje3Dzb6qhL9FPtB97EyBK5DitEf11ENQiSYyuuoYkDg",
  "key32": "mYELx4fyxTsGfuH8fJBnZLGqVvEUxsTrb2n9jXoDUFo1DVJY5MzzAjieu7twdKM9pB5epSkSuBMJB8fybkRhu9C"
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
