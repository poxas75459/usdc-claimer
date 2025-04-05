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
    "4vNe4pb67sqQwGJYJ3A2e3u8iAyJJ9HyYsHEYwVfWdL86smuqYb4RQPbcdjoUttMNEEzLh5dNBWiPBbGqTUHdwhe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ntKSoCF5xeuNxqNfV6XucdiA1b3ZmMRraBhTearTVnWBs3YzpDvFqzKaPcVNZWXw79K2ngeJJMuVkpRfqnupkdr",
  "key1": "4ndoFtH86WyvMrcK6XLmBLVM46qHzCvuRWqhoMuokkLbchrQiy96n7WcweV8LaPYubQgSg7LtFqVYFCWS8YCanzA",
  "key2": "5nfR16BAft3WLEEvwFGseTGAuDBrJDUUUWqsJSRQmc7ASrfFYGjjGx8HGpveczzS8GjoE7b8viRFJz1SNj4HGG8c",
  "key3": "271XR6zSrJfeAL6swwuzFnbXmJzpXDXvqbYzdVoPRwMYSvjVjVREU3FitAwujWrLGSsPGwTHS18qvhnBdas8CxJG",
  "key4": "25rLdieMN3oD55u8oSDxfw43c3t6cQC4cwsPUSi7DFdBztV6sfxXgbo2CUJ2EAG9SdkqWhHuHEhJ9df33FFsMaNG",
  "key5": "yQxzHUusH5xhHGxAK3H7TmFvmNNQqfReF3vQXuLXE4aifRF8QbTajmcxcE7Lq1DrS65ehreCANJxvayiiiBNNXT",
  "key6": "12bEMVE4uUrNGbHiMfdDE6iaLxqmK2RoaazrWRzTmHAcHFkHQ952KvHNwniGgRFLhpkYjsbtX4KMcW6UjZQvpjW",
  "key7": "3m6jRYahzsqU39V9UPb6sHQaXF2qExbmCBxCTmvLHDrW6KcHENeWxDyRb4fjjLVvbkPXqnyf8DmknCgJaNq9MACt",
  "key8": "3uRX42KEtEGeTnYhiRE2qBCqn5KFQmEWEkjWvdpG2sa79xNXzicZvJXrrXTDkUmnjUosH3QY9f9imaiRzjRe4k4P",
  "key9": "2Zy9FVayR53JWxhn6cWJ1k4n99BRtx5jULsmnp9UKkaHZYKkVwhq93oY5XymWpwX39hAHpZGzMo56tU8v1HPq824",
  "key10": "6T6e2VRVrPvSegdGehY78beK1ZFeF4MfMhJ1Qy4VFTQaSSHwpYqeBE1q2WJRUgk4xLq1VMU1u35bZtztZLZeCom",
  "key11": "5yQjUViiXobVPsQD2oJDeQHxnwZUJExxZmG7RtdstAojEbxHKtqk3eCTcDtY8gCAXFBTVEej7LSpbi2wEuynfCZs",
  "key12": "4ZefJds6VjRBKnqQxbuUJR6gEnsHGhgG5X2a9CB4cM1BhC3JRCnvub6QTzouKovGPYB8Geo9ovFJJPyB189sqAVr",
  "key13": "2GMPWcUfm6oW8YWGArmmMFLvid2MEq6isiM7QPaLmZRoY9FRkcNrEWnNf2JWGwmRNB5x8UieksCmRQHE2GHpqiiC",
  "key14": "5riS5uN8cEqkhjceWRyBLohdfCNySb5KYPn1mhiy6CPu8KuQ6sDeX7u1hTJDH155Pb971V1UYnWQbkALGqQBTg8v",
  "key15": "Dk4vuLv1Vs1nr7dJXwnkJCgUX6oB9seyGRtqE6qr7418HsXxe9rhadayrNmUMDJK9KJdsgJkYBwrYveiUe9R9D2",
  "key16": "3BSqWLLH9tvhG2uiyTCkvZx7G6yMbgbaBZnecKZstiSabwdjHAvz1LfoLnzNYHmjXt16BD51eNpbyePZUMGv2GWq",
  "key17": "3ZAVfcZTf8UfsAjCwreVLXHxjnrbFcgHWR7xQhDmdBbLx7JRfYBZRpeeJrMxejERKTC21UbKAE7Ha3oYqM5TzZiw",
  "key18": "4iPoqdy15zGCgYZpwsroK5nuKc15CeNtgRi5ujpuN2MHX7e878QpoSNfDuGncKeckhCwGEWCaEjMwsfppWX3DNES",
  "key19": "28M3EuMJ6w8CQcvqH9az39temhmJrD8YRn9tzzsAopSUU2wPNYfmo1Wm89HeMS62sqEBwUvpABBmznBmmKTYn9H2",
  "key20": "WZGCbJWuh2zseF5Q8TW7SZw3BQYYV4iqMQXJf8orBbX52AbsbZ7tnYAsk8SvsU478QcZSyRCTjxYq1fhD8As7np",
  "key21": "4jzS7BPLSLbDQ12yjv77VnBsemqq376Tp5QCAZDymHEw4BTb7WfHun168VUJwiZ5sFznCXNT5RKcbmNXMwS5CQcW",
  "key22": "5JyL8mgkkcQKvryCQ6tqYwKspxcFaqywop6R4TFYUTydpVdTR55LHhS3rkjhQ92Jb6MVsNfgjqFPaEntCmpF4URb",
  "key23": "phBZDHy6JSzmAT8uvzRXTkPaxg9NFN579sGY8WQQfdTdDAvvfLuiH8bzXUgL6JM4qYtyG2Hqys2WgyXqaa2YLnc",
  "key24": "2dQed4xcojbrpE5N8BMhp4cRj4hy6bL27dxeWjHZHqFbwdmKMivKVxKAvDXYkVxHo7uPPrzd3SdPBJGiRKsCeLW8",
  "key25": "5LabdXwH5idSvPzCKV2NH7Y3KVtt5ewgT8svuNnx5SwJFwHzrMbJ53cCP13xvJbPpQJ68YS6Hcbaq3Dd1f6uYw7y",
  "key26": "ey9mFThtBThCqsK5TecL6Tx4pV283qKrTv8WJrUnViEemjZaw2QWXVgGnaHePV8FyumeHqiMTEWHwePvzx9mCNB",
  "key27": "2B7QBJwC2GxvxaMeYp8ZjqFgQgMAtihsf55NkfofRFGbwWEntqxBbqLzSQ9TXnBv9wnJ7QJjy1uVhNzZKsCnbz2A",
  "key28": "n4eWURaSdsgBdvMpNJ4cnx4CNjHhcbykaRjgHFKLSBKyLahCwZDzGkq2UP7Rvmi2gc36WGtUFU3D9B7DLbgrR8Q",
  "key29": "4vBD78jK7XrXEvbjLuz39qfmWoEoogbv3pxXhzut6gPegfwfN32YMHATEAQwRf5mVfR2xG89X8rQx5mT26N73rWz",
  "key30": "3oZ7qxTNJWavW8teEWVr597wDuHpPvRj8mrfHjSaLGiV9mLQVHD7mpUV2PrJ2hdemXVStgwyKKmD6vJBDMxewemf",
  "key31": "21keggjVsojdEmYRqRcmF4wrQFSoYEh7Re6qHtVFYT2ewkPcag9YjNy9RmcGtyLSTtczGBkMcATqW2PSJELtByh8",
  "key32": "5KkVUnJw1AkeTzrLDAe1NfjQgy8p9fjWBL5tDkzjL197ZzrNHvYMQsLKAr4JrDaNP89QFKnVvBo7eFAMefiJTuD4",
  "key33": "2hgYEj6pzxtEqXpiGQRv1C4omFiqmdMjC2w1KH41cKo7zvVG3t2YVGLHpRWQKMzyYYaXecekm9jTo6LBTynmXT6j",
  "key34": "5hQGqManmHA4HFStA7wF9DnwLNpVDWPmXpmqkFLPRBnnDeeCF6N3H9V28137keugVZioNYnwzavNuUnVd7iuQpGG",
  "key35": "3faSQFVQxrxcxdRoZ3JH8DE4eYBR8mxJaYdc6ph4c7o1tmfrV5T4kiwUkHA42UZzuKY4r5Koen3dRYNuTQ5uGHU6",
  "key36": "2SeoF6JWueHdJwV8G1FLaQbRUFaFr3CJYi1RNB46GSWNUp22FETp37RCq2ELnFRk7KWowYdLTEJYX85M3pQFKM7D",
  "key37": "3p56QwmszKk7aUp3ReJak5YtJQxDoJFf1Q3SJC6X7Fo3kgLbbPJfcJryRtVUbLa5yosKDJzGiEaz3MSdoYsgebQg",
  "key38": "4wVM6dHmDVW9rkptM4CBVA7VTWH4scTy3oJBpmvCYA962AArAU7oZaALqbBUEbFF1MfrZ2i49c277vRScFpRPTPU",
  "key39": "4qWREwAbGyzcMbttFXpYN2iujKvbf8YAZmY5X9XMYco7QuHWgAfLgHhQduBvmT5EjoJwsQbG5os82ZwtgvpEdzN3",
  "key40": "33AQ5kSdQKHo4wZEDaAADQwZo9sUPhhDxqKV3Ljk8bK9GjTTmx35yMYr8eUBVGTJWXjMkxfrxZvYEvZgYG3hXJaT",
  "key41": "Fie2QtFAHWMfaAiiW4jVKkiJkwEAWAw6fVCGsLXk7stiMuprCt7xhqjrEwWNS6U4eupCcziXgdApN4K59teqTkM"
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
