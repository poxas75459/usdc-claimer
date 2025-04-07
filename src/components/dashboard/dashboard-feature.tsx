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
    "5vejh3N7M9qxjXYwrW4EkiGfFt2nPSTJD4VbykN4cCLqXqvATqB3gsaaqjQMMzzZ8uscfBP4HAEngrnrXwWPVgvD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rPMfxcVMYgzrHEPtV4hE2h94f9uobAYyiVEdpQnirUyctpnkepwbWosNN485WAtfnbDgKLqLG6Tip5LpwvC6VQE",
  "key1": "2jfVtobJVCx36DuBdoLesrADwdAvVqQs1xR2NtZjf4Vq8dSg5iKsTcxV8zfNGiz3rAzqwwXUnNEX3HPsppEoLrYv",
  "key2": "3gHk8YfKjWpVppq6fBTHSkdTLYWWBJN9Ahi8nGtz4ZgogmaSC9kiCSGUmEvjgeC7Ltxbeeq7hmNzhR7Gu1fEmcBH",
  "key3": "4b2b5sCbubijKTwt7QWb7uxF5EP1PpdrgvKNmgnLbziMUGKPvqtFeqWN1UJdJCC3J1VPAyL1Rvy9UsKmZpQiehm7",
  "key4": "4HqDYA3nhBo8Jj5HY8wXmxSya61Yguyh6zMtnbrQrX9pSnz2pS4qFWAaLpxcQ2WFx3w97ZFELcAjmroHxj5DGQbg",
  "key5": "vcbpvjpp35MNDcL1ad69RyQ9bKLMZfWLHAGw2Kfzc9GKyAbqSKGQeMtyUF2sXKLGsLSDLRPo78NX5H37CMWz24P",
  "key6": "5EdNFKb6E4KDcBBQf8Z2Q9cZ26T4ZEKEvFk8JZdUGn3rb5bYitHGvVpuVqX43DuhVXLB7bmjFtpEAnCUui4jFmju",
  "key7": "4R8zCqateAbSs5hQmEyTiBUt6AqBq1jPgkkX669E7aAicAkzevzVWwQCQVysETGmAbDz8X8xiQiG2tiULxeUkrn1",
  "key8": "3NaSQeU2q1QsCitrGeAeUFcBufLi3LczgaGeE79syNnU7NjG6HRHKpK3sYhUurTb5xEAZXvWS3zWvAuN9NxUrggA",
  "key9": "4xkhvatzzkYdnRJ9SM1BMcAiuc8PgCPdbVk6DpFbz9acvRv1Fz2fgxr9TadyuFsRnstSa7bih6xrCawbKBbTxFx",
  "key10": "4mrNrkEdKzzh4riNmx5xeQjyF2bL27E56PNQ7NWjhjrMxj5SbkXjjtRPkNoqGB1sbJ6UMiGpcwaYEBjyQca6WHEM",
  "key11": "3zJBxRsh2ifbdkDH4vwUbcg8TAcvVrb8fwXrcs2DL1EC83bJdjFYKjzunHCy1b18rZJsXVYjCbDGoKr2cdttqoct",
  "key12": "5zqrfGzKxSeGseKhAKC82RBoeqq8BbJEt7xhAWMhipce7x73R8zwRorKZzpmFDpo2turLa5hPUGVhNADDtvxGXr",
  "key13": "5vWuCFc1x2Jyc1RC8h6Qi16a92oxGiWFrqzHip6KdQpZJ1nyQmqM9WaY5b8XrU8o4qLYyjq2EGNmqzp7X9k7TiKm",
  "key14": "4TUJu569sGi1Aj4kgXyFyYVW2HB4JBc2ZmhzfRwVRxsySNJ3oNSkBX4Q7NjKupXqgWuKSvcd5tmMsWMgeeK8BDU5",
  "key15": "iTCS91EoXnK2yqvsrYo1tfZTbweaPnJt6ut4c1uJ3FxbvowUf4yUpxU7mNQeSXuvX6Y6VCjvHiJSqDkN835XxMS",
  "key16": "SAnh1RbyDoPSGfuGd15dCtS68FyjqCrhBF7dwxRVxYRZoaPXMuMb27CkCKstp2xFvTDY3BHGF6f4vtD3HKYYLDb",
  "key17": "5ijrF2FoC1iN8tpZQv41d9ViADPXdvnk56RQw9V5GF8hFriaYCAEYysoKguVsjuwVWXN92EbRV9mb7iBZiy3LjfN",
  "key18": "33bbxh51zaLg5dQo9xEVKRr3TdBRNPMqeP47uNKn2e8db3DYJ15Z3ZEX9NJXFUD3LsWPoW25QDaqS8KuHQLH6t3y",
  "key19": "5ZjCv8xXHMfyZJpwTwqP1p1wzKp1LXze74YKAkXcBZr19vD6y2DiayyNcV1LvmqT1obiVgadNQ2PEMCwnYkRPi5G",
  "key20": "4o5QA1bMGjfoBEHpp8WiFf4nmeZqb6kNU1qG62MuVXWRQ6VmmFd1AY7LrqK1oTwZC3cDoGRhC8QzWfYxFQ2Uwcgm",
  "key21": "afYVUpL1iv7RKK51RGNfX3ihk1iW6F3K2kYHXZZgGKt1YwR1PbFtayBYLMDtkEwAapDNQwYHqnMLfbp1R2beEyr",
  "key22": "4Dq2VrLwiDLZ6ryrcVTUDwCcnemouSBXnez5L2NJ9y9fGLgBmDKQfPPCYa2M4Zn9rAjoSbvcrkcVh8qaEp9dXj1e",
  "key23": "33WgTfeY6AthaXn2Ujx6xe1ZDrCqvXvXEKRpjNp58WkaNWt3jB8gs63v7R64CCcfxKtMxTnqhGGWEPL7k2aP3kLz",
  "key24": "Nk9GWyvbFNRzAgZ8Gr78vs9wpMS2dYAuKmjxM4kJBPomPLeKrPmTbx5yiEBHByPrMCSNDgYuPDgqyvSkKReiJmy",
  "key25": "2rxV9E8Q4U88gLHELkZMs5igcgfUi3W4Q15kUEk58HHREYmnvetjRnNVFz46U69mB41MeK4CukuGLQme5BWTE8du",
  "key26": "3urpNL3szYsKqKPcmPwURf4EoAMAQTPgKENBAEF2eV2sqZ1sMDvAXVLSxPwknFzkNe4ZXrqUm8jD9sbFFap59cvM",
  "key27": "2Z89GKR1JVAyAJJE2GpoZPo8WvRh7S8o9GYL3hZUyxwVM8jmVdY91x72hf9p9qXJCDHtCYmUW7aZhLE4z1Hd55KL",
  "key28": "tMoHh2FCvuo9ZtV5uQYMYfMKXKwfe4me2zBMre6mwAVojJ1DEMKE8eh372yKJQB4JD9pigZ27pL5jV8vKsJ8mVd",
  "key29": "4g2g3MkBBJb5JsmxpSSxYGfeNinAD4j2YX4hU9QsMnM8fg9o9wTquWwqbuf8rBokHHWX1SRg89Rdv7gEgMUmF6iy",
  "key30": "2NVpFxTm6WDB4V7Kf14jf9odSWwy9WSN4Pa5kggrsRFbdZziHKqxKtASN9jS2z8hvc9E89G1TXXjaU1irTYNX6fC",
  "key31": "3ar1DzFEVxHWg6A3dJ6h8BpVHzttqGfXQmqjHLg5L363HBf7iAiEvdhXA7ajA6iybk7wzNNXQerRaBDqTJv8ZhG9",
  "key32": "3XgnT5TAN3innLUsXELatNjez9oi4Kd9wwy94jtXB2Mz431FLaUURvhRJas55PP5LuGRvpPcz5KMhFspm8Zk2C1F",
  "key33": "4XC1oLRFGvLU8c9btumBeWSs7PA5GpYpUHH1CDcKyVaY2yTygdfeFCXDJZdDmdv6hPevimbLGy8q37rjcotrCBt9",
  "key34": "5pVUQYKXUP23tmcCoA2E1MtbsQjZoWUbHm3ukMSJ8GwcjiK9SvE3S4taW7N4UJ3MW7h3bhmcPCJEE4dsAxb32P4w"
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
