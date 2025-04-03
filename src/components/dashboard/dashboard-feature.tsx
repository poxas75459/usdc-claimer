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
    "5B9624u6YVb1Ns86XRpRzvchYPAhpTjesaUfPPpqUmAFSqr84gJigjPC4FnLS48sbxWcxgAFSVRPHUyvTLzREc4T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JBDSgpdVxyEfod4AnzswV6yVzcmK7jo28dpwovhR9y9pguYLjxsPS1gc4kSLVfGJzbmadcg6xu2bQuZrBwCfQBF",
  "key1": "5m5QTErm9sVj72j6dYK4Tdb6itdKuFJTDbngZrpKoN2idqHiTxtvxpWNE6c3UhxrfNZn9oCKeejYuMnP9R7eV9F4",
  "key2": "4farxrDbxxWFgCgsZKYuvjHdyyvwSVM2u5N8erGHcjsH4R2oeS13it6jJafqnUQhbcfT67BcjswzMdj2suNwDAV5",
  "key3": "4YCJBWU3zRdTc5aAJMPhM3k1oq7ePMhTRUE3tVZnmbePexjHmb1bG5N4AwF53STkFDf1yRiB4H3T2i7xbW4ynZCk",
  "key4": "8UhyW8B4LzvWmbpPJmwKaUNVK6Ukp3CoZDtcLz4eUbscrpDhAi6zsowEDcw3kKL8UQwf2af1rMsZYEttdSnkYpx",
  "key5": "2gdXEjBiZv1b6wJ34VPgWKf7Gd8NNv12ntyYUnYMrHpiivdYDF5pWDmWkc7wxJhvFJ1JMX4jdExAo6127D3i5W3R",
  "key6": "3iXY457WEk9je7pMioTM179MxGY1ba6byYu3gFMuqVL9cCzxzkFWjK2WGtBWcskdJbwBop3aYL1C4sgjqDFichXT",
  "key7": "4gbB4PV1WZPc17Veaf3ACELyQP8TbvpAHwtXjRC47MrbuC53f7V4FfZyP6atVX2nMkSmMYm8UDWWBcEuCAwXQZcB",
  "key8": "LsAxNEqHdctF31h2KRXTXH9KZ6fihUYGJ9ta1SzoYK5wpAPQw2n8mVuezfcYU6vwTo9EFcRmCPDmUcvj4EbWhqa",
  "key9": "4CMJ9FQ4moW1qkfAXDYU6aqvtYFsobe7hpcB7H4eSmBVDgDxeVfoE26GYdk2eB3hK9EHX8L4d6MRo9qVPw53nYLk",
  "key10": "4QCLcrYrgkj1JW5PndDFtZ7qFPN3G93e8ByBcWyErpxpAaErBWhHugnB9HN1x59wjTTzPdY6zKsDeS9wX2rcQXFL",
  "key11": "7ZQ3YzMuWGRYUhfuKHGyEs9nidczNFogdj9qy4gEa3o3povf3JD55qzQkrkSJi8qwqCNupM7RijDbE3ojU5Nngk",
  "key12": "4BCbvq5qjonqqTjCsfxC5t94KYDbTmgADxEsPFRdLzAPQ3r4iNfWnyVFzxJjt8wpHcQAUt8vrhKEmYv7KiNaxe1L",
  "key13": "477fCavY9v7Uth2VDFef7R4uDUbE396s4QTGudEWCJF6C9fS9coqYuj6FDTDWCr8R9pgQHqEJCrwzxqXXB9KQ8Tj",
  "key14": "5LstMWP9tfKMYUzgQ7a9gzYtT9ehmxyRahqoU9Z7amvsZPNUPPb9N2h7EkdpSPRJfo7PzPceeLnSSuULCbJeCnk5",
  "key15": "5TuFXCWKLe7eQrPJB7s56UCHNvHcHUGpHd6uxB1rjnFVh9puCJEqceHeM4MZgoKcq56pt4MAzLUFNGAYFiuGYAwy",
  "key16": "EZBmKzqW8TbaPc99HFsdkVHVq3NUxTRpjF2u8qcVGMAeCbW45dsVe9Ajfw6hh4ZTAhRcDuiLA49ESoPZid3WWEy",
  "key17": "cMhq7LyCTM8KD3mVHE8LMtkR3anUw9gaBbcCxcrXyR7XzELcRquutQiqd8cb5wqedHstoZehUb3HiUKyTpCLfcD",
  "key18": "3nGJDCajVWobaLAddf9PE2dVG9YbWxEWy7vEjRu1NkRPNK59QAnx7YPFLUuhPaprdskf13Ro7Gjx7Ras5EP2QE4p",
  "key19": "4hSHcvDpFLaFXZk37C8snePUpfxbEmafyswgws1iacRdXc3mTZqKri2Fbs63fhUwjVC4wFxWLxkf9thJZfzydz8A",
  "key20": "4fSceJCXrR3zBrJWB2EDbgn32g2RrkiB9B8XcFiqnrn3BFAJnVaANJJtxpQumEWDr3tQ7Y9xmYqL7iScBUVottjR",
  "key21": "64ypZSNZfSddaFycmtpyKxCsSDketYBnTEQBrnNcPKxLzziNxX5ES3Ya8YeAkJ5biBgWnJBjzk4PJUhykTQezNyJ",
  "key22": "4hCKbFfHE9wurW6n6SZfY1vn3uzuEU69YyXxZiSqvm4FwSjCsMfpXGc3nmAdXcKehnCxGvCYKRQpeS4xM92yvBjj",
  "key23": "64nx5A1kRTmtktivep39rZUjwvgcYZtVYYDyqmGZAk55YacBLzxsSJimFmoDBxnC8WKxkdbrMrcB9yXQLSFUxeHZ",
  "key24": "247htzY5cX7BPiU4ZCKnAcHb1njRjHrf9UeeijfVntUq5JrQXsd6XUK9aHgU6EobqM5gRFQ4iWiZYnjhpVDJ8dBT",
  "key25": "4z15ViPeTvTXvPBdYLsH9eXwyuicPagSh8X2Zgn9BiC7T7vL7D3yPUuo8JGcLgd44gbsk6pUMFvBrAvqNA78Y2Yz",
  "key26": "2w9W6nLL6BJ6KdzABybpXhcVo81LvQspFNJmca2459ubv3Yo9z3emLSZfBDKMxoHeR2dfWvnzypVr4Z61a8NCUty",
  "key27": "2noGJVzmbJLkRpzdsm55YHFCmbUQUFwSALw9qkC9go1nzFfiCV7eQ3aZYvKxMiqv5gMS5dsDKo9XDzedngjerjmj",
  "key28": "5XULB6ffN9zaqaRmec9HPsEdMn95T2ywrWsz2dkuJuVk69GM4yfu2tooxDwV9R7CahWHa5n6N2LjLGDGZn6M79an",
  "key29": "2mbHu7HhsKPyFUeymG7YbRqjDZkYAyRcpTmkedi9sznHkHL5FD1cWmmFHkcNn8C5aTMVQL1sSoG1MebRXtSGm7yz",
  "key30": "s4wSmArXtszemjXtqAvmjFdpXGRajT9zWXg8PP1C3ynU71Cni8YiRUkvU5L51zCkhRQQYfZAJ7zgGCQgGJAEzSc",
  "key31": "66W3sFBFuYCszjV266ymFS3ufbC2tTGd2Zkn89UfegfpsrBs5uB8ok34v7SQSy1Em2D92xswTgqYdjymdjGw8tAg",
  "key32": "4CXp8MBsdRamMiJfszGvTBDqHDKv6yGpwfUzHyufZCARJVy6uvzvMBWCSBzakiiZn9TxxTuNMxC18VoeiTAMgu9G",
  "key33": "2NwnyxgKW6UfPxX59Rk7nFyGFovkUzPLYh67sLW31BTANcuLA4UEKbi1M2p9a4tSze3FVdRZuvkMF4DzVbDPRLWw",
  "key34": "xorK1Fszr1DjvWTuNmvG6xLDSTngsTh6oK9DErRScJrWKCzgug6Xy4kPBMQCS2dcjuEYgVZ1sURi9xJM6uVXQh4",
  "key35": "4A7R9pivq1uT1SveospBiWUemsFsVhMCvakH1qfnjnmwYnnVWFctMv76gGKM5b3za8s2zq8f9V8HTWRTqdtexPKM",
  "key36": "4waLSyKWUob7XxmtC4mvSfdeaLswWdKxkm52yTqtJ6rXVDF8jUYNCq5UcDFLpHM2Phq9gfWYhQ2nQEWwMfpsZjpg",
  "key37": "5NXeEugEV9MJdkPtbk215dzsS3KQdMY5grgxDh3BCb6XGUZVnwtm5juXcPkZzBNyxekQ3fCFR466EbTFTErXnune",
  "key38": "3tfNJSCwLbntvgk4DBeCWU36JcNtHeq7ghDcMn67GoKzPfeLabYG47kAScMdpi9pxqJGcRmMRoQLnxHDWwuqB3zj",
  "key39": "2rW6v7CH4RRdWFzhXsysRE1sS6StJTfaSWzCh7fzu7sGifRMQQrrAga8ikNdMTLKcfEKim7fDyzryguToHKviuBB",
  "key40": "qQU9SqEyhRoZcoK8Qq1482WMRiEtWMYg7a3uYQCDYNyPRESvAYr3ywceqtjFFPxSJnFBBbJrufAtof7svxTVa6Z",
  "key41": "4j9vdwJZAERmX6T4GngsEacizfVRR6JV66rqKAgjoLKLgPyAt8WvFuzZAaxih9i1Ef7gJ7QHRhhwEcNj44fNyims"
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
