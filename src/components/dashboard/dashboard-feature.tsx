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
    "211uryb8uHurJCaKufpxgrHx8T5i1wsNtvawzmEMQeFofWfCe6mWG3gb8zPmY8JtisWMPHvHvnMj2TBDrciyBv2p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GiNpgsfNxewciUhhfkPNm8ZvzHaotVKnpeKxDb7YnRutBsjWBYQxBpMvzyhSdrgBj1gcWxH9UqrWhZcGvMWRjbd",
  "key1": "3vq4tmF3RwpNDA7Wf9FkGJLJ77gwaoQj39Y3SpTguvWTc2zBL9P5CpQ8voZMtz1Ev3qxKUn4Yid3EnhLYQjYx9Lx",
  "key2": "2xBpmb6KNp7K9XKwqeQ8qUvruydjMiRd6ojoSSkJxn8kFyqJ5AKBHx1gJomz5dQRR88YVLWDi7do1XpHVJ1RFQBG",
  "key3": "34kReFsawJ6egFEUxd1MaEqdUCzgT2K6JUJJSys67UPBwaWrF7pTJieHRxnvxhJoP1eiRZPdFgfkYJ9NKwYDCHii",
  "key4": "4ByskpC4zQj1r9Xf3RqtYhbwWdDqwyjByaFc8rmNNtMRwHiCxy3RCqwsVX2sHWYQ4hw5Vs6bj8GZnnmW1pvTsb3b",
  "key5": "4pCo9HjyLFxiUZn1argjYBzDiTvEj5KPRM8aPxxma1dby5DhSzF3FdVjkS3aMwGgZUWemZe1qa6ZWqh58GX9RRp1",
  "key6": "4Ag6xCFg2TK3LhodVQFn2RENFt91F8S41P4Vc5wx1hSUkezNLjHSvXFYNQ7CgfrCujazy5S5oNZHF8k3TdXkPMEC",
  "key7": "2sLKkLhVfT39TZFJW6wXsVjSXEAP9JdB6KTjSrFDUPYSMVuDgyiDgpbXttA5m5d54wJecFFPzUzMQEfGmZJzqNcq",
  "key8": "4C5teSoRUAiFBjVWLjzbc75egWafNfLkTV6wqLfiAhvn2Bo4jHATAMWypEj9LY48EZjPyHSC7YJEjW2avYwDAobx",
  "key9": "3bqSs7BrPrYeYsAbAdqAukBkiGakXMYi9PvHSu3cQdMCfNRbXmbXa4g6ZiBW3wqPimS1vWLEa1z8R2anRkWuQMTr",
  "key10": "mNFw7FWgGtZLQGbNKwwS4BC3r2xubY81Q7WcS9Q29VCE7hdWJ6eBm1G4sqZqHLhKppKWwV8VqsYPjaLJEjbiLHu",
  "key11": "3WRgRNxdLmR4zePoQ3VgqB9VPc7Cc9RHjAht7EdUP2GfmBMQ8cRw1sjmjDnpbXjyejBRHhNuduudyqBxA7xMRpRG",
  "key12": "39Jz4K2hP5TNj5HEioqJ46piytqPoKbr3kuSYujsYJnXV62LC3zWYVgvByj8sqM7A5FrMxEcH9ZXhCf6bPqZzubA",
  "key13": "rSMeonndPCur31ta3kNmiMxERjDrh4dQJnkatDPi7QqBGL2ECbX6JbKVpmuB8MK27HpsfVuRahkZnRCRioivpbA",
  "key14": "2jJAFtigtH34uoejjF94MS3UDLiPeYmbtZJgddg8TanpuSXmH9oPStHGvQfo2B4EeL9xWhnGAH41TgSNi9P3rFXX",
  "key15": "5e9aroZHEgyJUHv9bajPjbQZgYChV3wpj8vLjJ1rrV9PMS3J74Q2AeFoaYYseoDhAHdhXe7SUhH1qJfzA4sMKgZo",
  "key16": "4LD3obWoDTyvFZnizFFNymgtbwoQRgfe2uagmhotodDYDcGjLVum18w236WH9RPAcD7UkzTTu4T7Z1e9MYFNwQjn",
  "key17": "2LLZHuSkJ9DvRCF6eHrR6kSeZXirgv6jY6NDPgBPELNNLES72x2nTL9o3e85uqF45SibXYaCkKRvyR8dmSNE6hEs",
  "key18": "2fPbV8iC3sWSDQ2gVebLD1TvfDraZrCcKVG3vrZTEnYR7UmWvTHnA3mK5akJnYrWTovYmLEmmjwtdY8q59ect7xo",
  "key19": "56AH35NVjQwWTrQTpebNtmTRnRiWJuonRrkG3PyT492MEAMUZEBVXBpbU5hxx3pEE6RjuzCbuuYDhbSLtocjSm7p",
  "key20": "4xsaN1w7sWfXBHwt4qBVu7LFpB9bgzwW3kXndvH4jv7hSKDttUugdMEpVPh3HivXjekfXvpGxvXJMjtUPfYnvvFB",
  "key21": "rzHbNNHoGPNzFciaPfVDNLF3PZ68UU6Tx9yC5ZxZnSBN5ooHvvtmE5XcRRs7EdWucMYBp5Zo1ZBb9hGgFJ4zJej",
  "key22": "hcxfxBSBcKob1NV6ptaqmVxvPXnvUWaFPYyuWAbegKoDbHvvTTb3Ww8RrNWHtPRGUgQEsqm3gZKze51Df68exAK",
  "key23": "x5nSeaG318xDtgt8KB2Q28PnThbQbRQNXUzHgEcHtR86RgHsndKA6xk6LYSbToFP9jFvSd4gytpeaxDnk1Er3GC",
  "key24": "5VtD4u4AjRRx8gcUtuwyBc4PKJEWmu3RohZDbBYSk9w4dHcQkEnoJhH2Wdm4QKTPzEiJE3LmZk2Pgk9PKgQGzJdV",
  "key25": "i7wdVzh8wPonbmP9JzjfvTisuFn3UhjJbUgEtkHpFBEiqMan6yWHW1pGgTT6LAAwfotVAYzT8HQyXjNgZJMjbh9",
  "key26": "5Lad4huszgbw2vY2A6dMXRzSDzuxkdMdoDprFRwM6eprLu18JLZa538J8rEJJqKPtd8HvFhhQdrk3SHe1d5yvw8W"
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
