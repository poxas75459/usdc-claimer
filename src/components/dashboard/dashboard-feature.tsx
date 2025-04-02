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
    "5m1F9QAdUjS3Thnb2CJ1F6DR4k6g1frevEGxePaJ2JxC4No7C9NAdLmdJjRYfjfx8suQkRMfn6JwU4rEFSgnC37J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F23wfiyYce8cNcBoFUGGxa5dvRPhzNqztS5TvfKNZrpWENGuJSrkTi5qxGwFioPjpftB3MQi5mo5TtAzCHRFguK",
  "key1": "5Gdp2nE3fjQw7GwT8fHHo6vj5XX1d1okVNLfyhxY4pdB2onpgn7cSoRGBRZTkXhBYgoRBbkAMPoU9feGJcDDpe3q",
  "key2": "64wnRCRofAq2hjTwEELkgq16CwZdEknAXuxb6WnBuPCCiDqcjiKihDJtwUThrTTybYBjh9u8Lhp32fYFtjgaCXjb",
  "key3": "36Cm15zyi4JbrWa686hGPTNTaSTtGjntDE3PBBYe8yRyKkBMCySx65ZkQ5ZenoQnUmAKfWw1oUL2Nfpm4GA1k7cN",
  "key4": "fcX7LfPjPUjaJrVhVpYTL3fj8e1sA8P6f6KjoaCjv6eGHnWXkUurnNujMYSC7iQGPKac1cWhapd6ZwtDKb2inf1",
  "key5": "2kcMqt5mxf21S9u2QDGA1pRmeiwvR87MTwHYikQ9ygECjmozZyRj5GgjgvMyQpp4YpRpyRBrxQTMJGTqnweApYuZ",
  "key6": "4sWx3cHnJwVFFJNjig6gppw1f92UVoYkF8QXu9oYk2KVHPRyk9F3PcqpSwHaD23MosrrVUNJHA6JPY3SVWaCUEwd",
  "key7": "4ZjaeZ7BY4kzVLnxpaAPoGo8r9kzj2CJwu4TaQwgiwTM1vVK9LqdhTt7BkjfnSpvLW8yaK1sWho1EyALXwxGtWX6",
  "key8": "2GH6zKD17ixWec2UD9sbkpKoSmL7SkTDEtTvCoZhKmLj7JPiQYEUwFvfq2U1kjLCoScuiyaR8at2dvG6w2yDgQxm",
  "key9": "3TV6dm4t8jazFATeYfo2WCs4ZhJJ5FY2ELRR7R71gqfZxgBaCc7XP7Fi6UA3WSAFsDm3twXk7vCaoNr9PCSYg9hK",
  "key10": "3KLSfkdF2MY9ZCqWnnv4uXqtDCqZ1yQeAK59Z5mBxpFezGasf1RYWydiqwt594yMq1GGtx5Ga4YT5Gm4nq8bNiTQ",
  "key11": "1JuuhWxhF8bdoet1sRng9r3WC4gpjtsuVXitts76ohaggaQkZFmaEf7iW9cLMbAywZAjJ1gziruejaqzUqhuczP",
  "key12": "2Y681rrZTMnDx2LHcgfa8dk2SpRmRhPE7W76nXbMuK4h5ef57pd1D63epnXRWLvvsuggTmaEGteh4q4CgL3o1s5j",
  "key13": "2xv2nuTy9cDZruzjhkMSmHX3oHmHouucMjgSDFz2y9TWaHgFukugXcTMG1R5yZKXLjfmYzfJ6FHWWfFDueD9pApQ",
  "key14": "4KKgVqnQKkj6dMMPHuJevBuHhmnDYYUpY3UqbMAaGVuXYmNgBncuynQ2cnpeokTV4j47C3T797iPc8X1Arh6ehqM",
  "key15": "3XskRSJCjxozSD6Uv4xLB7NkGS4fMvNTHeWv8BCMJVwH9Ev1DuUa13hyUotfn6pfRMroqeGNN7dKL1uvVZKbREob",
  "key16": "58rGqzqdfSzuLSHnPasn7mungrpP7Y1Vmh5f32vWgwA9GC7Kbxr6p328PxSz9hfmrxCAmbq914mxH35rGbLARXW6",
  "key17": "T4GSYTUTcUstr6j2AKaUiWYuwXPdMXGgXXFknpzvsSKaDuhAwxRF8q4jdX7YeJjRqoNL6B5CoDhE1uPx3VCZoDf",
  "key18": "28zHSJdTT8Txdnpod6a1oz24WChFTG3RFx75PN8CKx3upgXtE9Sqd1fQEg48rCcsJMmN3nBPrKW1eCuTL3oJNAeR",
  "key19": "2RMs1kFZpE3nuFh9dbZoo2tfkhb7eyQt2vW7mUzgYgKN6JDt17efw7A8URMd3vi4C2v9B7CWGNh1jUsE5s45fS34",
  "key20": "2pgYLbydJxFYVobWENVuAjDJmWdaaockjtzfGBz4NBT2mggh8gaMK6Gt1HS3sGk4dWWe9drVKy6SLAP8TNaF8Fww",
  "key21": "5fvypiZBEqJ2MNDetvXHgP8H4VuVZ1jVrG67SGEpLbYBZrS3iUNi9gJ364dYFqrJKBrskAreYzcaGuCW8zDLVKUM",
  "key22": "5VgK4BgitfBiQgDJzx8diMRTz7CitetF4QAYhb8GabkAY8XTqmvYX3LaFHMTH2tc8pj12t3ZhHN3CYjM2MpLRn22",
  "key23": "xTEYTaJAjP69YvPQCYYa18Us43X5ijEmiV5m4rhdhwX6jY5oysw9xzRbaW8mgjZ3KAMwazK9W5iKXg6oFFJR8mE",
  "key24": "qT6Dmy9edoRmFSJMT3vhUxaMy9hqR9VViJ4WQubM2s1rP6Dw31mNYVjUdGEGdvrMHWL54PUB7kSmhHFazhKYok1",
  "key25": "2VqWW7Jmq7Cn7mandfgPPd7HAkQ1htWdgxNkmSnHR2FxKNbY89B4q9tNufAxiKGtCT5Zw6HXRuQWxVTdWgmdMf4N",
  "key26": "4mptGTFXMLNSGhG1cQYQkATL3cmbyAyHFbFVFFHo3i85FDBqnTUoaFsmprUH7XrUF6iE24qpkWjRiBA4yPE17hgc",
  "key27": "uMsANxDSfb7zSshgXcXibEe89bUni4a75xErAcvVeWiNqSwmiDthyGVsvPj9Vcex3HVdTgobVNmo4wJ47m54Msd",
  "key28": "5orET7miGHTsAxRsCTMWQAD2CPeHRHTkvN74ygTZqJyEctRwdwjUZUPSNUxPmUG7PCpfP5vUYrXRSf28L4Wcrncy",
  "key29": "3y5kWZHzKye6EgQBWHxt3ky1MW8mNT1RKZBWQsU7dyKakVdjVfKV1K3hptG63PctBKgcjdf9zhXWo6e79okC1tFK",
  "key30": "21zL34UkLUSn3DMUxkxiGdeacAqif78hq7uKAkSSqCtY3jpFZWQtuTqGi5Sw4wbeDuZkbte8CdTdTDE1dhGScdAe",
  "key31": "4Ysfo95HFhDkKZTKrxSxMK3xvV9RaYBqHjyP4epbiJXhV9Q54fbk5qNcAAcQqGziXdzBhGrYgKXNyW1VY4haHr8d",
  "key32": "Cp3pneidyzDGA21YSU5EdVtfgiRRipe8ALiYX5aETk6SCW5j32zCNtcWbzhpDWXhgofNKgaZfmJfW8mAjzVyBBf",
  "key33": "2nMuLgQbovkdcGUArVZDtgV7Mu6uX3nv9Pumcx9B3WhBAHF8CGX7mssF1eyRaJN5dESu5QRYS3gTLNAhkUTJG7Pq",
  "key34": "9c1EnQDYxYvJ5ExrCByQw34r6ASuG1yD8YdG3s9Qu91QCw1wmTVbhiW8V2tAq6i5W1etnfFZNTztp4DrZi5qBjW",
  "key35": "44wumBhXRf83tYPpNHC2kRHipVFDnkapiweGydSrPqLAgMidnXDi5WEygdwn8A6jTSu9akb92YkFE9sXniLmhHaJ",
  "key36": "5pi3UL3ov3D19xX4res4Kg4hxdqg8uBwa2Thw8Y1PRM5V4yQHd6S3THAikMDYpDjVsVYpSZm7iG6XxeU9ZVntEZ3"
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
