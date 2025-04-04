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
    "iwuuMhQvs9VSqcvsyrJx3uEx6rsP3hEKvU5DhdoRhiqhvupajBY4o2ESreZCespt8n5LHeSn1jf6FGoWyxjo692"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i244Q8rM6CXk9DRnqoQSDguAU3azhpFy7kVefxU6juGDNEhn3tMW1n45ZVu7ZEUJ2bkspBL4Y3pqEUaVQebQhot",
  "key1": "cWwiYvJEPNeP6tyutMoALbkUBUJnENeaag5dsFjUn6dJh3p8b6TYkqkWkTVqguoW7MEXG3uweeNMbVoaV6XwXmu",
  "key2": "4y6ze1PDV35hKVKQceamdfXFFQC6wZymMSPJaqPJRhmDozK72VbARH6Q8CpdCFfGtkAyarivxqpgkL3WzHviEoUu",
  "key3": "3a9xSrAvgu64CegZDDxxaKHx5efYZppUCTLvFAQ8T3efSJRgBkknDoWZc1q78B9F2UyzSi5GjKTn7BoRxALFymkV",
  "key4": "5Mjyan4jhXuMwcUWAsEP4HJgFEw39Qs2Luwc7E5m1DQovZsVEwyK3wnoY595i6mbdfeu14EEhxWtqeKzdQCkLKxk",
  "key5": "2ExzNgNCzK6GCRCELLrDW2ML3UmKmeyMqmtZ8i8qtiU6HgywCoiaoJf76c6J6cn2dyjeZRMUweTk9rHxjfHjwi9N",
  "key6": "5RK6CwzC4LNMa6MT5XxdntfQc7aq6NHpxZRJHT28RZtZm98MJhsfkz3KyaBQXzoDtq5f3ZdXiugsDGUt1wYh9W7P",
  "key7": "4Fm8aMEWaPXJvTyUcGRP429KWEakAP4a1W4a32ga8rS2brshnMSoCoUp4y9QHDTVXGbxbt1QsRbLjm8444AedtCd",
  "key8": "Ybnm4YdCkUEKv76EUQCqmSQ4ucb6ZqwB4CKigYfWzyAXpV8Wi4u6XTT3Eq8DqoJbT1BA2fJbPJn9LSQa1K2KWn5",
  "key9": "4QsxdNba8etREos4VPhRYBapCdnnNu3WXxxJ6SX3sTgg1PFJ4PygVT27RCHXArzwyJPCc5Pwi7rNRRy61xxadYPm",
  "key10": "5udZqpA6Zb5oGfxcMTcvWfQWhJCanrPsKjGqeaz2NoP3YZK3V8D4LhGvi5S4NRNb9H9utmELZiwcqdADibBuPP8J",
  "key11": "zArbNfcwHVk529UHdZ73G3B7kVSDgNEVVLe77gDi3xuZKQThuBsQbkXm5vDbMDso1VqietyVtpqxqTDfw6E3dL8",
  "key12": "5TcYQWsfccgcPVaif4riZSKbKmH9nbKMev3gyGyzsogtqGXsvotGxrt14tmhtKg4cyNvhXjrhvzVBULZv6twemBr",
  "key13": "3x48EvimiNV1qyKTXuk89QJ81vJiYpriFvCSMG41QgvMkwhkwLnRpRyVLCyMDwkW8qWGqkDqPrxK7g31nzcfrQK3",
  "key14": "5zzHfX42w6TDpYztcLCTqeTB9XtsjFM9sLUWhfF6LNR5WJvizwQUDBNFhELuHXroShUQYSaYLxGesNWBaBQwo9QH",
  "key15": "magCAnNjf6S9cvJLWSob1WgUWuijSxeYCYqiTE1Z2bscp9CyLPehmgGr4hmLjX9t9d38hAYu1Z6dQ87iiGCYjhT",
  "key16": "3dithLGunYvHey5hTLnZuLTHRbZ8ZPXAUH3WrZnLr6NeSy65rAASpW1ZSixCG3TNcNfXa5YbjWVfwt7QfV9JY61Z",
  "key17": "6f3SbuDoEdedesZjMe2nRZyALm3sFspZ89dFmypQUUksuJm7jFgu1kUn64f8kxbEPpNDmQKFW7KrS4Kfu6fdkxT",
  "key18": "58vyUMrX3WD6S6QJgQg7sz2jgzWknP41sFN5cQNza3wn6MMdyb3Jiya2Mjk2rKCcdDBqzFQCLEFW5p3B3jFWNjRX",
  "key19": "S2Gork1J9cRiqfEoZeHVFwUhtcyAAq7gF2K3G9ztgvvDSdWYSVNzh4PTwZsNNtmTEWGco9LfZwF7NbTw1XimEWF",
  "key20": "iJFfJBF62x5sjZMPGN5r8qq7apXVGQHEEbsLXzij3QwzWRR55kVyabNfChkyGaBc5TwoTkBdEnL9uwfvNzSnyRo",
  "key21": "44AnFRjk1NShqeAcGfSaGBYwW518tfZy5TPoaHcaUEuqekBVP749Nb5tf3r34W4ziGxaFcWnrBrJWaATWqWTSCgN",
  "key22": "3PJCLVTR7YbZTiBfhND3bBicYe2M5ZoTKCMD5L4pp4Vcci7kwTgFPic5LkVoMaqdKVUgvqdrEvivSA8df4w3GvA4",
  "key23": "3ik8Hj43YaLDWP3G43xSDHh7ZVDrNEqRHtsgTtWPkZdaQbiD7SdLaabn5Pfsh8kSRahzhyheuT6hvADN3ojv2vsF",
  "key24": "2emr4ZSVRqF7aKHrh7o2ty6VqwzNp6PSr7Yt9RYHWcCHMDfbHvc5eXpg7mdtoGrhzkBgJCLRRu53GUo8toXVnGhe"
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
