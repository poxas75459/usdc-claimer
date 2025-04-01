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
    "4NS4YPi7aBhjZKvN38dX9YthEkGWwz4UGC7NZXwwfCA6B8bigsGUGtTrgcuUdXuEmfNXXwenk9sp5aDz8vcYjij9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KAYq1EXXGy35dss8bAS3N7HZpWA7Xp5kaMHWKhthny6TgPA9nGuVpS4SiWYDskJvYTWXVX6EN9VqYfjKjpBcTRq",
  "key1": "3NytKEqdvG6ryDtwX9KFXbULWjVtPE9XvtLUgzmcFKBBzAmrgtkWhdzDvnAeSPDZtg2KUTzqGYVMr4jyNthnNyM8",
  "key2": "ZLHEghLcE6PBE6BJY31SL2uetPzi6NQyfoa2H8F2LtbdeJ5DJRX88PiKsEnHv3cQaX5YwHbDVfRRNnPuf1w5krf",
  "key3": "3tizGZhnZa3vX6nkH5oeVLnKYpPXH8L9S7PST9mS2KqzHm9xLvfeAmDGLuGWgz4YzjQc4ka3WHZmnPeYq3iAnoRv",
  "key4": "5ZHeFe8MG9NaBhu8YQVLujM4UM46SAwnrpa6Ljq1YDwou11BzvrGsj4qVzSaQkiNjpNQE7uaUFYuM9KEJf8w1Zmp",
  "key5": "4yuk1EePKRuQ5eUPC4cg61AEUrkLXYHniMuEYc88QcV7ZpRiWMZHZe5b5fdCV7SPZqifJWzhRCLpTBRH3RQyuAnr",
  "key6": "5p21zUacFjsWgMvhrj27H3rwXNrKP2VoYaDS3X6vpFpzQpikLCs7bsRWFsZK6F1W8E2eFnxNJ8xfqbxGCjNs4WYC",
  "key7": "5Z76KrozQ8WubQCZFD6wG9qz1mraxHPfffepRdSZ2q4bSxDmVG22EeNgBxYKA9yZzJfBj3hyJxtTB3tWzXPbkBcG",
  "key8": "2jsqPVMGMquuz1ie5Hi7FMYN1zDPbQR7SjRDSiwjHm4uCueUZA13uNLQg8yyktqGqvCAXPD2e3AQnPfNMCxGcAhG",
  "key9": "2Fbp3giNsS5e3GgNWk2hCPTdQxmLamyi65aePFpoWRmEZvuPXzZYGmxVyu2WDPKe8UTa47JnxbNsA5c2wE5mwmjS",
  "key10": "z8vNyaDmYcQakipwYYmLd8YQj5es1dSWkQWpMfCXge6tySPWFfT3pCJPbtin7brj9ZG3iLybtAp1pAjxFyYBqmh",
  "key11": "3zMJjCfPAFcz6z59Nt7k9oVUdEyc9H8iQUgeUYFTFC6YUZMNv78oAaFa1dbbKaXSaQPuH7Z8q62gFo4y5ARCpPDW",
  "key12": "5mFYmCJBUmh37BgnZRDFhKyXhmfwP59SbscV7eAcyQmWQccvLPp82XsdKbEm8jWEL9WWzVPgiupLqpwDtVUYGRxQ",
  "key13": "5js4dzBnhd8643veWpFrzLdzqfJixWJ9zMKFP1xDoGrJHEvFs9UozUPPePMXRVfaNJvn9H4HQTsUoayFW3GqarsR",
  "key14": "2hrGsNc7aJdrcqHBWwUuTdr3KzC7vSh5TBKUokT2RX8b7NZRWyMM5HL9YFGSaz7Ag3rSgZuHFJzMYPRTvsZunWT6",
  "key15": "5A6tMFGesErhHByv4qWkRkDgy28BfeGud41svgpU9S4RFZUMjySqSCGSzLSovB11vdvRuc9ReQjrWmhWnUNCHs15",
  "key16": "2ohXKyHqFprWSPER3FUJNgVeUfAFaCspZ7toAZtesAdKEKZ8bv1j2Tc9RNSGs59CypmKBqzKGquhCrSZeC139LBa",
  "key17": "CpFn4KQCjapuZUtppQWk2XPdKEsT1zLY9c225RqzzBQdkgJdYmmt1uhaLMdJyWNQJCT3oKD4jgXLWwoFmV5W5YR",
  "key18": "3r5vRTHx4peBjadEd95rb6HgKJm54RFyPjGd3VZY4PkSt6qaS2if1s9AkrNJ27ES3PuAEZLb2WuavnxShBNtcCUy",
  "key19": "2rBTpBRyK6y9f4WW4zH9CxLnnUXhV7c3YWkNxWH1BccTRsqxUJdhnSGgekX2DUVNRkegAensTFkaxHj2s8B3GL1z",
  "key20": "2ZL17z2u1QnXmGhYzPpexGnFHXGWGxaMnGhimVQDYBv4B6mXNu212MPMW1AdAPkisErHz4pVsB2jsX5FmAiVi6EL",
  "key21": "4rt7y49ijr9ygcSc1c7xCv5TTRdDEJ2kSYvKyC5XEESuNotYZY64bitTpQ2TKW4ezfxuCAQmcCy7NqBNuBe6L6fG",
  "key22": "gFSJpGbgh4gYq4DtnfTqEns9QPF1hYg57ycenbgijTgpMUwmtGRGmGrnU5wfXaa4CGwtsGTguJCFjmGKEfhR9Lc",
  "key23": "4BUXpEXMTyP84d6t1rx5xrXzZZdxwp6R7AwLJkvAtMTk47zuKbXeGGWZPS5tBD1vE9gpdK1XawHJjiEq3nko4pK7",
  "key24": "484jhzqf4i3mhyeLDCT2hRteKYebKxnWxPYASU97dvAKqk5mPTBkwFSCLC6zQxVeRGJ8aB4KTsTadcWwP4oC5rfJ",
  "key25": "2iSubqotytbqdw6HRzcNTP6FeH91LMbdj3FXYPG4Xubgj3qMW1p3Shbobok8T6BZD3MgE3SebTDad139N9PAKwLm",
  "key26": "f7dPWzFREX3s6XZKcx3qA3m2JinyNk5SuvKc1hiMtg7Wav2yie77DzeHxmqSeyL3H31nvcUXV3CcNYxz2V64Mvv",
  "key27": "4eDhEbMdZpzLVEeH2RDHxvNV6rrjgsWGsDpgyXUF4mWLjJzSf4norZ1VWedyNfSBFnTXRUvxMDwimj8n4616WbnL",
  "key28": "JyXU8g22QWu1s3FVa78m3LPEqyoL8UjRPcwAE3VsYoWWqGy1tHANZyGqAjK7i1yW8XJiXCXxq7q8UzwqRxpgWom",
  "key29": "4gMXrGkFHneMrRu2YtqX4XPaVACL1TiFDLAerJ19GPjcwEvUHyhtWdDaU4PHaE4aXdiTX6vspn8pJ3hKaFFcLyyz",
  "key30": "BvrsrW6Nn4bmHmj74SfCh42R3fwVvX7QvoeFFjteZoH17zbSb9aMen6Sjk3cZHpPWARKiVMs3EsSjzpmjBmyeFf",
  "key31": "2FdKexBfrTXqjY2BfrPcKJGtMg43wDjQiVK9D2buyL5KtWCr7dmdo6KE3zRvS3zP4ePjUFZKMwZSKAKyT3LqZs3Z"
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
