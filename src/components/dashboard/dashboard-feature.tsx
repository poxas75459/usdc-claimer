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
    "4TFMicMNWu1xUqMqA3C8uRTRB7wFWLMzTf1JzV48tfFFvTbudjvQ5TqzRdhxALcf53n6KYFXVS1oQgS5ToSAbAZA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41aEixpNPDhF46nRdHQyaAFj7yQuzFQ7Y5REA7h2Wpir4UK4HYM7ckLvJFKdHREciejw3t9epVzUTMTEwo1V8bG2",
  "key1": "23vPxDBuf5V9DATptuT18DacdbNQGgdCEUt3SkQtnHDpxFHkzvvtNhMy6TtKJanXguTr6gMcJc1stFSpPUeA13xZ",
  "key2": "1hoBeBB7f1AbQ6k5PJpYAEJj2UVBdKP9xknMLLAbX13QCDqfYS6gQYSkC2jd3vPWLumowMpvTmN9TX14hADwtkK",
  "key3": "475wctC9UVM5hrtt3uECWXg2tFmVsVV6s6v54KCtaXpLwvuN8ahwNCVq5oyVQmzeXDohaTZtTiU9ZWQs6ZPU4MTR",
  "key4": "dCmgpraCXUPAVVG8xuhkA1f74GkuJgv8PVN7KcWv5HJgyLYTMALuVV2JMV1cPZm7dHMWarqVc5m2BWCtRCQZsXy",
  "key5": "2vbYvTqXoBazrF4CW6nHJ27sz2W6sZJSjz2gx3pBGvpeV9dMgwG2ENmzeKda5iYZHbsiFJXerwtSfHEPXvgKUme6",
  "key6": "23EJEjt726cLzW4gJjofg9Hq84n2YMArdCJ7kaLot5CW1Wyx95k99hAuKAaEDY3SfxcrLwkvoZe5W5kznJrXdA2Q",
  "key7": "2Ne98mTHGNcNLFVCPxNwGXcbvAgJ9PrwDBJxMtyAputtb3zMLg9vfxHYMBNh7xe3gKgmzvnqFBUtZwNn7mcebweq",
  "key8": "5VUDpFkRrveRhRC1oQy2C8MCDmh8nqthE3YHMSNKBUf2C3ZWi9YkVrPHpqhziLWsnBrqGybAWWjdVLPmpe58jguL",
  "key9": "27FBi8pBx2tNF3RHjz3KefPFa1oSbQ67Dufgsmt2dYoX9ri4cYdiwZf7Hx25pTtpi58AACw1XbHyhhCxf8sjMBHD",
  "key10": "cGw3rrEXG2JUZ4uDHMP31yeKVedoHET2hAKxicZi9A7aUXevwB1P9NE9xy3rbKX8C5J3uMopc3RgUTRcDmRKPzW",
  "key11": "4XMWWoXBe7hEnNieFJQXHSXArpNomPJ5C5oE18ts9AZGEiirauY7ASgV5v1QUrrPwkpojRE1HJShc2gNGxxcb5Ne",
  "key12": "3LtrSp3FnXzRD4gF4ke3VozHQ4uTdC2Rtmo4sVsonYdxJYPtRLrARwsUWBeBDj9ZveMmFkokqcwpP1fDAZ6k7sA2",
  "key13": "5tYWJEmreMSnV8iajfdcDaqztjJxNARC6adoW8sWmHBu2mvxcUd7RdXJThoYUW2kqkyBCcpSmvYo1EqrK3pVc56x",
  "key14": "2YQiY9iqWifmZ5T5bRQwf1MfhpZowBcyARB6G7TkdfJ6mgJjgCFqtydJg8NHig84hR7ysLwCYKcRyY2WzdsYnkQR",
  "key15": "5DRe9qN9Zbq4aWPBmRokRchkQ9PGq3Ykbse2cich3NvqmhCmsSLJFGk43WazzdvdRX6iCmRMtpvxTf5gwVgHdtpy",
  "key16": "vw9EewR672dQLv4vhwboRn4rXLheJR4nFtmoHyKeQBY9tib5TKUsdLZwJ5NhGhgfQcmdqgPESf625vViyhgjuoE",
  "key17": "4UWw7S7crp51phjJ8N4SPX7zT4LuLcKBVLc317R52GAh9DTJZ8mXmGynfxrCZYsDbbGn43GCME9vFfjRD3Zf2h3T",
  "key18": "x3nyuuksBpsuo51QW6cD86CQVUJM8RS7fQ7mNZusopsbQU2RVpQMx3YngFp3oP3ixc6PHuaaFhcGhpHzgaCiU8P",
  "key19": "53B6z96JmtcJGejLJuSh7Mk61j2sW1X4xbjuD9xEeoR4yhw8EpGpxcJEEx4TpqUZuRLbygdHmbfwHvhv9JbFZZbA",
  "key20": "XW42a9Km5EugHc5iLQVPduW1UAriebZ4g3FWEYC3DuFQaGN3T9H9B9wCv8etdExmZBu7x5xn71yriWgUT4c7DDJ",
  "key21": "3B8BDK9BwAp3cLbVGTHUfrvT6MyAEzSV71TQ98i63tbH26a6HMFPYcUH581zLERg7PPaH6vWRmVytYzhw5RBccxW",
  "key22": "4wjcWdFDZY8qrAS8WMgVqNPmHsGRU7TabSNMjdFSpeLAVAUuEJ91crESSY598L1qH9C78hK6V6G1ZsSH4Tmwg7kv",
  "key23": "25KDKVAd8txeVyErsTPHQYLUy6BDjK9wpkZs8yfCJEVarabT8EnYBcdDd5BqjqL4UKZNTaFvwYxoS3jy2NykSUBj",
  "key24": "3HHGryGXTBo8vg2frf1NethSrbCQQcbvZsgVuQKuddqxBNpNHRjCEjcdKjhBCXVZMkoeKSP9DsGGtm2j3jmRWcb",
  "key25": "5fxCPbb86UKFtAMX5cfYWifNHsvir9fGq74MXx3VUz4es15nG8pGsujemoXtJ1zHUPxNSuyAHfsb2Snxx5YQ2z3u",
  "key26": "v7PSpiCrGcRaJY8qK3gN1TLmMGw189VjzXsbnKC1okBfUfXGRtWbCpLKKw9hZcYyEqWJ9rEESrTEN1VQke7kw2y",
  "key27": "5uF1MZQfw44uEmd3nLJK7bFg1cnYrsQHRT1Y4nb6vsHA6ipVbSDYyhDf61Gv442jBP8dRD4d8vHJMBiNiA7oBhtX",
  "key28": "5HWDYNKDpJkTRYpQvP3z88Kuk2PNy1X74rrUMZfK6NPpLKP7iBhSdHJFKcN8LAWSnHyAQhrsBbvuLxJoijbLBZHk",
  "key29": "4M8nNwNzurN2Uq9doPRLV2H6ux2XK7HgBmJs9KAckPYUyFkttUsZqe74e6RkoAFTq55rU1xSdcSTzaHYzS9v4wnG",
  "key30": "FHwUnBkb1j7zcbeLRUFSyKqgMRGSJtJDpKv2umSHLEqv5nPJAhvYxbghSW2zkQKwh2MhZH4cKs2hrwFmG5UR1ep"
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
