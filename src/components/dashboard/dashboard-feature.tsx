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
    "5VtZqda2sbxkz7cKzwD7tbYCoeARWB4yy3JzfAHfrdoTYvbKCWxBdf28nTBhYH1RUXbrFhj4R9oi3TNMZDDqsbEm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pn193MRzLgLojkbkqqNRoqZhAKrjY2KVY1HKB1QkJfE3hDSf6oAcBKG4deLkVBKEU646GqbFWGYTLszazBShcqM",
  "key1": "4G4fJFQ9WoZ6AVWh1mToQPZfgD4YmVsxav5jaEe6UXiu5D1yi6nwrKUXezPprw8hRE9ggR1KQYbA5PCrMUWcBWv4",
  "key2": "3JxTb6Xv3p1oMcovpxX9E4BdzsKiujv5diypgKcomrPfaux4JJWzUKfb6AAYB7xLWdvf8VzZsxwgJjP4FqtvJheD",
  "key3": "3fsykmRnoHzyqnLxQXqM8im5qSeNe6n1L6nM9SN3cFmYdYJu7ZS96wLqLNqBnE9nVh89349j5H7aJSD9jTgswcy7",
  "key4": "29VCgH6FhBjeDFxb28EZcQcKnH83cgHm2MGm8JaiQBiJr1VcMJK9XJAsjtqc38mohP2YQP6jUanFTgYPtaXnsRuB",
  "key5": "2t9gy59PuA6eT8k8PrneNyQ3dfgYS1mADC8Up2vSbDyEMdTF7CDHTHrcRLM32DzY5TFy8fT7WVvVRbr5aSN5fRDd",
  "key6": "3BQ8UNNm58ajxuPFrUgUg7wLQ4AVFTACT32oDH3xFeCtzsxUJXMwtDopboqWe5D6w4mfhX1YZUYXcgAPzU8pCchX",
  "key7": "amMsnNoVocER9ronh5EBsQtXq5J9ZUExD6stz5kXUgLKrurQpizrDL8iuDPLGsY84Aqx8Cm1s7qo9Mqkc6V9HgJ",
  "key8": "5FswqGFrqZfKddw8mpVxq9zXTT2iDg4QYg2beKhz2rwiPWj4LWTGT8wjMzx81MpyevT13Ft5ZrYhzDMw7nuQYhAE",
  "key9": "cbT6qSbTh6heQRsNDgoitWnKKdJoPvRcCEgmiupnMifJ8QAvKo8gJDQY13cRqkBFFYM51bSbWM5zLxaLQjmhyDC",
  "key10": "2DDKQuaXGZBy55ozsHfAMcqwognLXeJFVfYVwexVvbb6vgtnBe1kn2HZi37Syc3dRBj5quagPeNya9NJDHhqgGxd",
  "key11": "22vry4QRSJSdW9Lxtcs5auwS4zL1FGANkS42PXjf2BrX4PW2U7Kw4sh23Xy5ohBjJdF4eEKP9UTeEPsyDXgH6n5J",
  "key12": "5y21wP4taceV2VkSm4DMQmxgLmuvoyZ6bitYBDKq9j5DUHsLuUnFH2u5HeeH7YWW8w3dB6c58qT1an1TntsbPhKz",
  "key13": "3eYFuAbpFZ8PnYc7RhxxwDrzVqZ7JBfj61stEHx2iDfLxPe5iwkxd9VNQ6EB4M9q4cpELiHDVPb7EgA3h5aqNZoh",
  "key14": "3Q5JaLjbKkGzJ6wUMrb8B2AitJaT4N1Ms6AHoQuAfW239BCgBxaVdgSuzSMrkayDksqUAngjvyWkPnaMCNahgWov",
  "key15": "41GFkqbpQKtKo9L3Lz3oVFpJ7VyzGbVJhqpPkVzSMzfZsgrWQJriAcjf3kYuNqcHyyVWSCW7VcjD9ivqG8uzwwF4",
  "key16": "2ZGH9WiQCcWZH81XdLFcaxQyxRqz3YrpFpfagke9HntZh62rLtNfVJ2RhRTVWa99dkS8XJKUQL9AmkatmWiDuYEJ",
  "key17": "xqJZ198SDSoRa5vU4m1gegaEWMqWfy4SSZxRpd18HbgyaFvusZodWbUixxPxRNS6Gcdirw9FZLTu6VG6g1ZJ3zP",
  "key18": "4fcZbmGufSH8wXVK7EudB8zAmJZBEzFvVNDSjZnRE8vKFK3QS4f1y6gxahEkLu8TzGBbsHq3SdfkkTFtdArRSWJd",
  "key19": "3jVnhP2ECgRkhRrniuauntwTdpbDbzyxtv3rnTPVZsPHfot6cqRcCXqNVoKAwSsUtsiVTG9rvwiL8t3fRJiEpyw1",
  "key20": "58f87QGYzUWiVz5yXJ8GLaE4hVnwDSqBnySRCcDRU1GQHee9CvDKt9AF914sgqpwcbwf6AZ5d7P2cCwjzfpwcUdh",
  "key21": "31LkonhihxPhmYLj6LsDabWncvNiD5j4ptKCK88qk8163d8KWCRKTq9tMAfw8n3q1BABZkeGPgqhhUMXo8WjgWas",
  "key22": "3PaW84NTWr6f1zJQitvAh9TsYwUPTLHvHUxbeymLaL5gXh8DeASwdrJzovfvt6w1btmuPUwH9EVKiR5kvBUBhp2G",
  "key23": "3HWCVCA4EGMKesjKTwHmvBc61XREgzNyaF3UycNBDK38jm2FNstMaEkWiCpCzdnwcfQaunCGCSpR1KvY2RMhGpGL",
  "key24": "4NL5S6iHYjVtY72vTxZL7rRVPTknoD2MzFfj5yHj1Vf735ijqZMNorhSFdM9NcCCBY9GTUmb7B6stR9k91DYC3cv",
  "key25": "4UuBYy9cBVWMwLM55Qrifd5nEDtgUmmzcJRD8iXeKY1Lmpc2UKJaGSSMTf857tPVxxtxx6iH8qq5Vx5bxd5CwvXp"
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
