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
    "3WXpjgJRKwpwBnbR589jPGw8RUgfUuVgRQ7Qvx7nqhwxUGVrKmxtZyhhXMNoF8s5dqn6Z2y4U7LnqDo3LfKrn2Gj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RCzokVi53adq9JGrhKn658oRq8y9CvQKNUABiGLwa3PKSjytmVpz9H4EGNjrBFbJQYWcAjSdch69MhzpkE7Z37j",
  "key1": "723kCJV5ieZCMGTTzUDfQBBfiKVESwvkkkvhWRwo5EUn4zjQyVEgerxE9Uf6UU5JtQXcTgtW1ShayMiuPpyC9hU",
  "key2": "37qbRgX8g6nziFqAsqGTabj4pYqu4mZ9xAJaBUWQ31EDwH2PYXGNUwU9jmxAiXPwJaCBcnBpqUX3cASE3anMWBfx",
  "key3": "5sNt8GZzbTTxTfnLk3AbjT7JnKbGLZqmhLSHyEiq8e3FoRwMfzvpT4uNPEUhSCvgqZepXaGicbHtHGhgzcEkpgxq",
  "key4": "3X4zQJkKFbMwpfY8CMh9VvFdQJFakZmXRNX8BRKh7X4y5nd1VT9b161U6GGVzVqiguP7RQbpgWeRqf7NZZMqq1DA",
  "key5": "ydWLfdGQ1HVJGYZaZggZUjAfwqwuFJuK1RBiMgzPh8ffKaMLpvHzZgzVcrJZX1FJCUQDaFvU3FwpJfoyb5TsHfU",
  "key6": "5Aa6nf2W2wekQ9uhhsp74HYAHUgtpWGkB26LmCY32YHgGtQA71AyS7FGaifxhKZ9M8NXAxmv6XGi6V2gGTfjgDVF",
  "key7": "5TNB3tQFQGKUdkK8Sv33st4hsght4EwBDVAaWG6VbMecyJCuF4jBAkBAV1gpenuFDW68JdUzdQ9RWr6ccR726pGj",
  "key8": "51YY5kYo4pt2geSXarbU5ncem8W4nFq6CP5kPLot2sdXHLSV9huoxCHnuQjnuT4bBEjp37fWG32NT6Fz2HCCf6QF",
  "key9": "5CuvELbWva37gAtzUnRowmpTDYmVjjd2YEGWScezk5B7FNa9r5XRhYuehPinZgkvY8TRbB4bbKiVASiWC5VtpKth",
  "key10": "3VZ5h9kpSD225VW4JiW5fhK33RHARuiNJXyB35DrJaNi74XxpG5bEbWsmXCzwYZ3naPcJhF8keFZMAE56z3XEKkn",
  "key11": "2CwHTxGgZde3PjHpptXmS8Cs31cswg325jDk2KRSdDWDMVPLrWZBLvWMWCMfar1tZFcWi5yE8cz5e2yPSnrDD2ya",
  "key12": "4vBPzTuckqWQykqGFJwTvFAdxQrKENvUDSJGBvQ34N4Q3AYw2rxmWLKjiMNqMPGQFz9mEweXBr4gfNrt9DVjFTpD",
  "key13": "5WYZ6u8TuY2kn5TzSLDnNAej2C1JQjNhcNkFhXALMnEPuUXgV364RwdFCqEVvTDhdTmieLESW8jetRbLGZonmmjs",
  "key14": "dV7w8pMWfgB77bgx1GpdzXUikpa23cKxLRoGAz4Xp7SzxXWiiXpa94C59UDDYWqgt9S7KhjK7qefQN1oc7gJnZk",
  "key15": "2ctzgjBvkkKv43ydHvYbasBFN5A5PWTjquaVzvrWgXFcST6JZL1T6oPoCkkFaWTPJ6AZn9EA1BWuE7Wy97w9TzTN",
  "key16": "2u77Xtk1e7YYA54Lcy1po5xwYkdRNMLGaDyWAS3P6waj8D8GppuhqwtDEBmt2oTCEZoogjqgkLTQ8Y4H7dD5wWcR",
  "key17": "L9WpzyX35yYjCbxyXiUXHkhwZ9ZbHxap75qNonEtF3sAQB6xZ5sM2jiKRph9KB7wYAuJAQwxTydLipSBdwJMPTN",
  "key18": "3SRtvyziQq8hwaLKPQtDYkv2pHvaZYNAfLUi4SW43HPb1tCvS1h1dqMe4isbocPBvZ5ac7Pi8skTGGjHLmKAf8BF",
  "key19": "2Hed7RZtiFcLK2pwJhyVAgDWhFEV1XSf4r3GVVXDtwxyKvqgB9XjwPBJT3YMqbggA5Eohb7nHcRMBgEStxmATKZ6",
  "key20": "2c4gvWKybqR5ACLqxEKpX3kujP9JwyVDNN1LG38SVrGAnL2v2uGMdeNYhimBfzzTYLZod2KLTodF3EYN8z5zWshG",
  "key21": "3L8suWVKx77PUGhUj6EgCCpdqynHv4G7WLN2JcNsKdd2DA6WRJgzRmiznXdwayw6uRVHLPcTN2PPhHK2si9piJ48",
  "key22": "BcAaDG8JQBzePKfiJWqUVWvAVdM1igVB7aJ5ZyDBXQGZiY61pgPnkUrLpMbtkvU3pmE54dQKRvmHjYwDn1YtF3i",
  "key23": "5wHrpX14Kh8Pysa6cnQHySuHL4R71c7z3nonSn7ZdRCT8aGZMJFkub7Lu9pxmZEiMyat4zmp4xX9cpRWBLwtkYpN",
  "key24": "2SZWupF62xuYsmsNje3QCpHcfyMxMGMksPMy7SomavqYrACDWyDhKE9XoVag9a3caUTPMboHfSZsV7LXCKZMpDsu",
  "key25": "4oLEfjCCQS9B3WqZyUPBgQ1Yzns1bwKwZjVLTYNiETgrDRMggPexoxXzpYz16FgmEiRdQdep6sBJeQ15GhW2CSry",
  "key26": "qMRujMmuivCixE8VhgsM1ZdYRZ67NhrKnqVcT7ACxNMauYufQAboCpvFEFSZyDkgMg3Stu48jMhoZtw8WGDVihz",
  "key27": "2hLerLydZoNywSec4xJK61wonvvzXuG4r8LAwN2ytydqtpgUNS5FMJnS4hfwmYkevpxURpoCzpqnmmUTu87ZMkRk",
  "key28": "4s94aLo3Fy3XZ7RQUu9X3nABvzVmVTKwHt3sNd3LiEVVEx7ii7mdMSTdd5bYv9c9pDsY8Bz35bvYuG1NGp3v1b1h",
  "key29": "3n2R3U53phxrKqdeTGnaY7PgbRs9pSEbc39nEogTFbPyL59WAjmrnjJfZyURsAXwieZc4ct3Po6JyexEebpcvPuy",
  "key30": "3od7awGxhMK7qP4mUUvRRiHWR7mqvx3fwQioEqAh7cSY7QbLjR8CcHppApRcycM9wELSpLaEoq1Hn6P43uQUyLBL"
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
