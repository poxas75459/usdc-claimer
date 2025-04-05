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
    "2k14CzFJxqz9eSzaGx3QwdZ5FFAgUP3ECTAfuKSKjAxvDk6dzNgaJ8cmgjHX8TyrZCvUbZWyfP7NozdQDTmwhF5V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31Ad8k8gkCqiPKE1jTBxNh4XbeSDRPgiKMw1Cd5UZYjqo9dZJDH6N1nvoCMpA8vjfJFfUNPTHU9d9JJEJachgcTz",
  "key1": "4PXda59MyUh4KKuhGGi18ZMvLngLuq8zFq2j1CsmAMqz4NR2Kp8mbu6v1xV8WLGQzFzfUFU8ETwKWSu6GR7xfwdE",
  "key2": "4o6PznUr511JVb3W2qfxSBvyxuhjgkD6S1QmHojhrw4bpsQQ3UGWtDCgXhPgAF6J3mAjzkTSWPWYfkA5x6kYrXmY",
  "key3": "3EFxkUg6AcW5a3Ua1yFFa9qw3xud75EtGJqnnWUefZENtLLh99L8UVggKmosvau4EnerP5baNNaPi9ZDp2WWhPp4",
  "key4": "671USMpr6takPxSsVVQRz2xA8igHCNzuCoJ4yJKW1ZKoBVRiZ9v2EiDcyqqfSAeDMfmwvcpMkYV5cZ87GAcBA61a",
  "key5": "57kq1wnDe7RPWRAoW7DoGJrvvjj6Vgomxj7PKeCQzDvSMPVDFVjipPZGfGdbogPJRK5j16bbrYL3jdj6h2mPGL6W",
  "key6": "5yVx9L8uqNisa91D6ZmcSRWvdhzVudHbKK8mYK7iqccLDas7n1xnWsyXmd6mr9tJqGtAA2CX2Trh73iyx46VmSYU",
  "key7": "2m4WhRfzct4F57Ny8BcTmjwN9pLojBMbw8K7pKkeVcmNbv5AiqaLvzt9S1vEaptVh8N7d1wGvMxC7Nc31eK7rY2F",
  "key8": "569DEiVkqE3Qb5XDXJ81pkEvL6Dze43BmBWeduXcrBjcBLvrHDf7Uyof653SMtbUzh4YaWdSPz1Z9a6dXaBDBwKV",
  "key9": "4KkY9u3KBtX3822zjNUnr4mCENoDw1PBRVxvqAEJarRAbwWaPGQZA4jDoVnrU7zYJ7xepRY51eJDmfRYeDfmLDA8",
  "key10": "2XBAAzxuf2RY8eRjqTN363sg1qFcPMCNC8QbU3LH471FpKLybVYj6aGN7ina38i6wLKR36CdUvg2vmnqrZzC8o3D",
  "key11": "5JPYonq1edss9gb3LXzzKUfg3f4XXxZhQnrsDcHRrfobqXc8A2AkXLxTT46x5MapeDFoBEpQ4wuuBxgyqgBoV73D",
  "key12": "5npqFMvavpPuyVcUFUAf4haXqLx8uHm8joym3cPX9KeQ2v8CvWyru4vXay7nFYkRjzraHNwjxTdwtFykQ2gw9bwu",
  "key13": "NnscKsBZWAQk5ritKqr5Y7yagAGhj6F9LvZAaq5RarsbhxZyoC9hfFTj5mt2qSzP9raU1417yKBZ5oeCaBc8vy4",
  "key14": "2P85kTFFWyQJtoYbAxC5bjAKpgn16sp6bMJvWNUgXDGyrH5iEpR5LSgshky4EaTf9Ghm9C9zjL4zJKqEqLxezz8E",
  "key15": "5BY6iaJWpj823qS1BBcC7sd5QrSbscmseCVZPmQWcrqZ6GueRbSDEgqywSGFgMmUQaehpD8bEfUjZ7t28ch137C3",
  "key16": "5197pp3rw5euiBKCY3JdNSiebKQrDpwmUG52oG2qqoX21TKWKXd9TbSAsYLf8X2iZZo3moGEGqQKHMpJtAWMxeqV",
  "key17": "5w9nNRmjJ3U9rPrYGt64DZsGBbwwwZK2CsTF9SCvDENEDUVuxZweMrNvnNJ1qtWcfGZUxwoV6C5p9ZzaeqCewSiS",
  "key18": "PqcdKfQf7GoLymKAjLTHFptcrxanPZyTNYe3b5deBEAw4P1WTxEDytVLtXw3ZFP6NsJVcW27SkP8FVsu67ZS6dy",
  "key19": "2Hcrd7cm9fsKUZpMnDTnjxbTabqyAU6U1bpV8A8AgsTm5GHMvVvzj4R7EZqVTCBhwUVMfMRKTG8NiiPw5eroSS7h",
  "key20": "sWBdXb864Uh9k79zXDju2gnAWW9PVfXRdJ5hxkxYLwzjeau4W9S3BcjoLFTdgg5v1CnUwEZ5kecLZ3em29aYSkG",
  "key21": "4TV6Gb7eyyZJ9sPZCyiHxqaZXzRXCzGwwXVZY2mVLXnZsjrz99KsQEdP6gWRuWEkbvcrRVci6ypf6Lv27Kw4BK2P",
  "key22": "4DqvCGoKgGvMrLHcgJgkbSd5DH3x8psPLBo6hZyzRzHy9UpTaVyN7iDQ1Ni3QRMoivgqCihnrrtBzfyszX7hvzmZ",
  "key23": "q4J6XhhngBofahDqkcWbGk4Jda8m32frsYqJzYSo3QM1Sv5rpprc2LQXy1y4y8tpC2r1tDTqTrWiZd6HTLVDYJ4",
  "key24": "5Dt7NrB91jrZLzvorzYEJUuBCVhTbXXa2LmEW4wvutPq9CC3fuQJQviSAE9LH8UHNV2iQZRVTMQBpwNuJYHrbisg",
  "key25": "4YeJ4nwDKbXv4sqArLPzbmPAL32rFuu1Pos3rKWcQUA1tLfpbsPQtG7u55SfaUWpcYaKS1WquBpDrrDU7aRxzzJ8",
  "key26": "4wXaHoXnEAAW2XxcexL6FYRzv4DrTseBiDsXmYbzHbp4Uo767MGXXDfMFFWWJJdZ93MdL9MueNfwcYGPYxGKERbb",
  "key27": "b6dwnNMPS1GiCa17kzgx4b5JesT64mdVpRqGintfoKoY4Fg6rqjQgfwAfwarSTrnsLe6NWYa1Ja6MqRQ6Ak88xe",
  "key28": "5WXsq4KRxBFgijzea3DwL8dd6y4YpzvhXWFGTWzjxs3p6cz83XepxkT1nYsNAxZntSs1ZumQdRdT5GNyTwAmtY84"
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
