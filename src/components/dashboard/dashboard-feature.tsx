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
    "5dRxTQ83Bs8YMWkt7sch2yAUspk1bUWSq3Dp9LiUfoadFV53aKs38TSDwj4SXonYESZ7MCJ67A4UQyAHzbrpxn5i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RrtyxAE9uBEF14Nu24jf88inVbKaueCRt3FJnvCf7642Gy3Fu3GQYXjhCxmTUyCpNUe4naz98ZVDKSD8CE9ythk",
  "key1": "GuhwshPt7uh7kVdMd15muAGvTbmmyCDZ4otWXQJ4pMMRPvjnB2yZL19A3vqW7u9GM2nSpmo6fEYqYJ4cthw3MPx",
  "key2": "2CErDvD6qe1PR955cinirm8ArZbH86vVAckTdkNBxm3XVexKtNa4Hs56uNzQon9kcQxX6A5srVBmgHUmP3XSyHwg",
  "key3": "44uw1nhMpGBKAzEEjeamjGZNaSutyDvPqE82DSrQpbrTRCNUrNKwkjqSx9ykSdZrg7tU3LvsgiEaAnsMWribyAeE",
  "key4": "2mj1C8f5Vzjx1AtZ4xnuDPSwsVga55LMYpfHQoxjvu9nML8TKnLKGp3AB1MRptah575eSrJeEmsfEM5U7F7SkG1i",
  "key5": "4V6BdhP22vzhotryqnrHDAPeNq4338jPrQKTtBzsmVvdL2TMGjDuGv92Rkuvp32kB6UwF1Vpng3J8WbkwyYA31uD",
  "key6": "2GJkwHSt2TqQVKiouZPLuJVQxTvdZKfdoPXsMLj6aUspyxLBHf9d7oYLsQQ8zie3doSbXTQ2M4XsbrUHV6vHR5sJ",
  "key7": "2zi89KBbM9FmNbN1zsyLJ3QuHSoa8GsoBXP7PM5nZ5pnzmV9Wc8ECMVx7chNSR2tJNhsigwoPDehJtiWDsczJXfy",
  "key8": "4fNxgRG69AHRptzPgKEpQEmpjHkPKcDKc12aaY5vS75CWgBXr4bjujjFAuHqHoeqjWizq1314RDneNqnsmH8ciG4",
  "key9": "2wW6ZDeE9aejjNrRhSQQhSVCzPFyJ9X3cqbxj2rHz8tgMJCZYSR7KeFe2hUbSwKgCjYjWYhitNebwrN7KJyoJdAK",
  "key10": "5ALCEws3biRmp2JdcXmACVrN1h4UJhWnBUqwYmMvewaUmBcH17kuLoS5eaYsYkjAVqceFRkYdDUdsbPJA5DGkDBw",
  "key11": "4p9jT5meSd9nG6biWTkcJDTgBgF1yR2xrf9AXWwfMCNfY4e8BrftQswL3R2GZKaScx7RNb4u4bKCx7jTrgbF7XS8",
  "key12": "WyWYq4g9aKmLjSaiDWHtPBBkwhZwVa4sspe8QsKRPS739YWzJJJAAeEGiEoDfYeqm9dxPRsqqeBzBZi8UiAx3Dp",
  "key13": "3PZocAxXD9TAW1erQQPAJVHUseEv7Di9YLP9dKLHrhjUXokF5LFQUPRhNBb8ag3puA8kvgTdBWCUZnUH21ZZb5vW",
  "key14": "3HN32TsQEn18B2u5S9yx4CLBPntscqA9M5uaEqgegzXL4aGmaBf9w8me4TXvZsQhVGzK3q4xBkSoLDy8FPwNHK3r",
  "key15": "5r2evH3qUrmvhANWPCgqPUyRT7nDFxQkpcbbnyUtCJjGaYUtFtmZSbXtgsok14RvjjcUAd4JysH7Nm9SX7C6WmHv",
  "key16": "27zdfYPPMndKwxBaM66sMtXH6z77EfEMATQMAjFEZUGPttLwFCyzzf2BcXXQmeUuDRtVwbFCDvecu9TYJyBjPQWu",
  "key17": "2ryw6eQrYbnBhwCwq4cfGJBCfZKezzDeMjvFmqkvdNh68HaGTNjAV8QwrF4BgFARTsfuHpzXPkgEfrmnvgNHG2DQ",
  "key18": "QHyEQL4cvwr5qXibA9ShmaZNQ2HJY6tw4QGBpJnd5bnvGkkjDk3kebfMP68XjZ5LDYphvjuQphm3m93Y7jXWgf2",
  "key19": "292HoEjmas7ePsu1ipnzKEugbvXHtvTsF5broYBFhVqCJiM1dRCKGFeRmKzp3mmdNefQqTWhRfcz99L1HNHh2LVF",
  "key20": "24GaNTweneLUZHojyvRfamEMMVQyJZda7eDsWx6X7EyCbQxSkigh6xNnoPUti3yPsEwhDtn8AXMxcDDgrPhAyjjn",
  "key21": "SDF9UuMnqrTGmkThgtKfvYmfivwkfpUFHSS9mPVzzMgxtBk3G4C1j2buiN6bmjCJELkeGf15pB3rbeo1ZjCTmdd",
  "key22": "LHAXsQFYFmhjKpk5wTNwNLFnxoZtVXHXM8PicRLDbr5m3H52kB4nSiQyGFwTC1sRz9UvsxocUqjapxQcx5BX37x",
  "key23": "2btPSzR9BZTbEfnxcveEeaBaWZSHkfr17u7TnVvhpSWu85niQKSc8BySddzXjDp5Hg6VzHa7X39UkRqhJrGKY52p",
  "key24": "2pbHdffoDjc4Duj8sLTMJihqD7MGyg81fH3VHLtze7KjDYVxsMr5YrGzqEgtRzb6korrUZjB7orbezo1JJcS5sDM",
  "key25": "3Njj2Tk5WQWUJu2sTNPn2ZZgBRQvnZh5jPn1vVihCf8rLVWfsuLYe3KU8ATjKwq4sz6YNyUs4GCP3tKt3NyJbhXA",
  "key26": "AfupNso4yNhoXEDeRHyeRWNHWBNwHoZUrY5UHUH6FYZ54yWDGCv6WGWDkAjpj8d9KTcUXbA4eLxnvr3uL21wRw7",
  "key27": "3Ht5gvM4MLjCQbStyAZEBzMSjqtkx6mmLupb41JJ2vzu8sQkCQUT9LRqEeeiZNbKK9awiRLPoTTqwkpegFbkdAVM",
  "key28": "5JU3ABAhNEDMyypnDJ1FzUroHRtRJND8AT3o4rRpqoiAmyT8frmKHT4wFrmbK6wbw5Uo1zWen4kd9fm72tbBNUxb",
  "key29": "5KZFX871a6LtwjZkNsX76uoitr2P3uZRX8TqaESTNdbY7mrXy15QFx79CrLZKZrgWbxd8v9NRiRKJNTGTKb3455M"
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
