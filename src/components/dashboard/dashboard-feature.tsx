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
    "5gc385ou1crtFgTYE9YYMMaLVBuwu6ysDCfAY7povyrZpmtskY3wAWkiHpshbcDgGxaQDsj5CV8FW2PhU3siHvX7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vv1iPm7pbfyWTMbFt4dXtqnmtw1rNuAgRgV3PR1FSD1n4trQYB6uXFh6uamGpN9giSJUSiQvs5RbgVexrgQU5MN",
  "key1": "3t2ZCnRFfAytWVv1WQQh8Vvqy294HAuAdf6qJoWktUNxrThxDeeP2aDc8o61c2WiuJwWPJgBapBFZc7NAWjUHi74",
  "key2": "4AAZQ2sN8eFzjatCrJ7hWsVBLNTsG9MAbrmTY4RLF1s8hvyHHYG6mAazDWvY8FzRe4ssn7pHXGQvztXSQhpxY8Dx",
  "key3": "4AxjdKPP8Bp4issnoaL7GKCbMrL3QxcNBY4id7GAcaAKPDHzZ68REu4uMqxtBB4uCcNRfCWP321qqW2f8gFu9uyw",
  "key4": "4id3jVuHnbSApby7vN13bJ8gSXbaoKanifa6bfu5gXWnRMBxXCnkuL2juCNLrzx4WkRVVfNJi33tYy3Dek6tF2Ha",
  "key5": "8fEeLk272MYY4vS4sZExZgX6DQWvemzhiEkgk7sEWCKHyP2QEv9pqjdPzhnD9MTo5uStXYq4qbBNV9VCfWRxBm2",
  "key6": "319k88LqYbYgwDBJhQnhF814tuLVY7d2MT6ddhXhPzptX1ztphCjgS6dSHMuFE3UrF1cEMLFUD3VdF4QZ3EfAtFf",
  "key7": "4PZXDA5putbR4kExKFtZ93fodRxCjbZZX6kgofRmVArgLdt88hYf1pp172WApGhRc2arLyuLASLcH2m7U7mkHsdr",
  "key8": "zdY4YUy8at6dA947B68RuXYnrHaE764CjC5zDnwN2UjzLainossMpe2nNjxhamicMaTe6wfPtAxvDEP1xyTB5LV",
  "key9": "RXEbEfm8adDHNeJMiZ2tNPdCrijsWKagCyX7pQNKZqD9RvoMkXfovEsnwNGA487B5hvDgy7HDgBGd4ug275hCRL",
  "key10": "4mhkkcQ8CGC2ig8QvvkuDdFtNH3yKcFFw131MTaKZLX4Yg87hEwN3qYfyiz3NdBjyGv5X9HzdogprgiCHVFXgMsU",
  "key11": "mKBqWq4wQPnGapTQxG2P8vUNpuonanzbfX5n4HtEXaaAHfA9XLqyvg7hdd9enjyYRFxwfbvdrxdyvzpM2AVwwFY",
  "key12": "35LGeJLnPL4KwpsnmyMqjcwGsVviQc68onLWzo1k1TMiw5mXH14iRhSaK5Uek9AQKUzsqSidfux46mFz9nDrR4pP",
  "key13": "4gxSSBShDtckB5oNvjpMamUnTA1kEtc23kEQcqtV1R3AkteYMZD31na8Wt7VvDzC5muQUairFdp9tk5GgMRyJmuJ",
  "key14": "4t4hQKYeYWgJrBg4tpgGazuwv7uqFvCUahJbhRVdo4sd6CgyfanLLzhugiTRThDFJjqMb9bgQD3ucijW3eqZBWfX",
  "key15": "2RocyVndVm9eb11XXfG5cygx6BogrtxWwTebg7Z69MM1xwCEeTMbw8hdVSmnCiJ51Y4eCnQWUCueJz2he7udAHDG",
  "key16": "5SELL6hvCVNWjhznCEdCWBYbACDXJ4Ecaso7b7CxavaQDQjHHXJR6Ns4VMFkDnQrcmFRhCRf5ndusTgkxXHQ2EZr",
  "key17": "2FWmar9ou2qiVGxuPCQEoXsR3AJULrG9o3wkinbXZjpekB6Py8Z9ZBBNLEcrQcuWmDTSyRT1LXXLL1gMb7QYm61n",
  "key18": "4rzeeNRQTebTVQpUump2MwDtTi6qUv7fBfGw9ZUX8MQFDWhmvEGaoHbxWmV9E8qV4o1ZWs3MKA9W3rgp5PSPLJMw",
  "key19": "4NQWGudMS8rWKndjD8fwxtLLEZzKdi7cyepuL9gBVdpdkVv88oeAiDCJ1cn44Xwh7vhMTA4QV3pFyUcJvvT9K9Bh",
  "key20": "3TeHg1VQyq7XN2pLomG5UKK8BTrwGjSBGw41qtNjyWWkNR5HdqY7pSjVDHc6n1Vdfavyo3ryp374SdS61rN74V1f",
  "key21": "eNVjAaQS9AVpLL31E1LkpuuFiutjoBQkJwH4y5xUaPDLds9wN1UfyLUk6rJKFi5AUXQAg6bXzUX4fAhtn7BDNub",
  "key22": "2tRgfrBRAxSo1ZBaKjnwbyJTeCT6SqbJA7FuX75MGrXZz4xhe7Mt9qvMHzxf5dx9AVQ7hzNFVAxkGBbpo7mJt1yD",
  "key23": "4JBTbxFcHWfFPx1rvpadLjLn9YEL4pMWsHDi3GWArn7C9GhP1sEmana1FUBB7UBtef8v8j6ujtF9Yf3igKEcS2Wz",
  "key24": "3mv7ieR7uncX7WdawMAoyNeEbDw7X5yJEdanm45Syd1rwLRfa1Ea6MP18X7cADtcGuWBbamgyvRjWoRVh9JAHig4",
  "key25": "3bkzRQceKpJ55tt5xEfQAH7guvNE7Tu8RDGdPYyZpvrCySRN5X2N9PNLP9RA8AztgN7gaVPYozRjzmxLfjkMLoTx",
  "key26": "4Nz7So2j5q3VWQu5rbUUfcZwd98Kk1dLfmkBhsK1Jrk8bAf4b9eHQnrsfPsmro9x5Y6zS6vpkQiCf4vm16G3xXAt",
  "key27": "2oQ4NjcLoFJeRe3Wzvj9AyMoogHMwuWF3CXFJsgMChy5Sqx4GHAPDZB4r6muYSSjScVMxpqtZjTYTLnqz7a6kqkt",
  "key28": "3kKZfZkdKycLNQo591uQNgVRgshRHc1GZbGVTaZnUPrgDADkbetBu9ouhLL1cikVAhgKnmg61LVNUETwk2HwhvGg"
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
