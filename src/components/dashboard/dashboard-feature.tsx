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
    "5F3Jd7UoJks5H1VxQdnMc92L8GLa9yt8gycMPUtD56XU865MFkf3APV5xfdTZyntfmEbwNfvXEEBjiKJWdJX7mTS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P347Yu3GxUQzDQHP5wGsqV8Nrc3hSFw76DsfJxZcykQhnVyywFhCbFeKtbWyvLU92cY7K2JomSYQQKqDbVGRkX2",
  "key1": "2CpJQXu5JVaGArrQuUJWgmGHABMY97Ug3gcSyyf54fsyuPH5ZAcZfY9n5wafkJqng2v35pbv9JPRDaPoSssAiNA1",
  "key2": "2MLiWoLWTzTaDs8MpooY8GHdV4LPSNbPTbcQ1d134XruM1ZKwUhRqXh3cMr3rNop3KHNrQLtwVoE1wzZcHn46vak",
  "key3": "L7b67KQZr3xHxBpqRrkjrcqeK48AvNygoLhSetsFAbsXn1P6cpJQUfSbJoy5p5w9TeqvSwMCkCFY42fHmfLpxsU",
  "key4": "3ALSSr5giivo2MLxoM9ZsSykrnY2QVycxPYR7mcpvcUYED8GFMkBmrf9d33VoiGT9hkAJMqMz3SmRsDBCWbEXDQn",
  "key5": "4QtaoZPCxtRbvKYdbKejeMtjdqbwjJaVBNqF6dXBfppKTxiChQBApZ3s9Q1tvARmL6FRKSdeNR2GkGHf5rZFftoj",
  "key6": "5FhyJ88Qga8NEbpZB1iywZWEJwitjXMheHqkAF9ypKS3jfpVaRVsPXHyP5TkV1p9jKNApvispBpP563tD5jPycG2",
  "key7": "43qeDtjMbLF6eK8beRnG6WUqAT3zfpZuCfrCrUXHWBiK6odLm74M8BfULpTfDmXSYyxrxb5sG92Y53nwSy1dXmXW",
  "key8": "4nEJpDspJGXAHZ55x3cak99XFNFQEhxi2b6k2J3EdAqHkKpY3opdfPfSJVaNmBsbrD4avjd1nkrrr1Lhe4NsBGxd",
  "key9": "jVUZTdUp61EDs6PifHQbXu88vZ5YPakbDtu1Tq7adEkzdhgLyWmt7LKXHdDn8yd2czf2eH3v4J634K6BZzCav1z",
  "key10": "dCYt4HJAeWG562ASQhi3Bx2uYNDGyuvLWmHxeahyXycjmpmyNtHYZXANy2MsBK3FKqgCiLC5a2Lfsbfe7jHz8Lz",
  "key11": "3gSybk52h1ZHDWGmJmSr5uouEvwpLsdnqQ5fWCDPFqdqzGowfAcBNxsH9ue9yfzdStPbUUuntzWMD1YjBS9ywL1M",
  "key12": "zafyQaUsziB3ePPEjKQJTLjfAd5o262YNdCSHgrsVa7aLMvSDbvxEypNN5gWbXmTgP99YAcKreJyyT9LXCJPC6m",
  "key13": "4V72itzPCKgmbAowXpNvGqbrWYcmVYDASe8gTAkGdwLs71f6EPA4gM5hWJK4WGipCsMpS3EUmEE8UeQML9ZzzoQn",
  "key14": "2EzhvxDrhYkxvXxqoC8BRZVRBx73B5a1AvivvCon5VTRiqUJ1BFezq4enJsEY8358CUzVauhs5P5V4JFTq6QNDm",
  "key15": "33AMFj8BUcpxu9jNhg2iD24skKPwKcrdujyA2Cx3rz4x35rfGgi1W4daA1yiAKhaBptBuT6tapLVACTbT7B7ydJH",
  "key16": "5jjdHutBdWVWHdm5tmQXNJ2rxy1SHJHgvGdYcpoez6x3o8XWGdLTZao8vA3t4RrAGFyKxBTyXNuptaHvSGiNDjhw",
  "key17": "46gUUmorBqYb7EyqdAYNQJe1UEwq9Fc2k2LSCPTXk6EwYM6rX4CKSEskmWoT6Mk4FAdTUPhknPcoaBitU7wsHBFE",
  "key18": "5nd1koTvDUoNW1uFJo25pszUD388VKKhEwsBar1zHCQ2q7f2wqR37AaXU1nw2W3Y228d3Jv3KvnSkT2JQxuzXKfW",
  "key19": "18MwdmV4UQos5TkVa2779CSKjBACJvx3wQXL8LzmgNYph8PP28RDVnDL42oKCJRKBdp8WBcajiHrfiaLaPCdBgA",
  "key20": "5M1sFotzubUVJ1AzHkbmsXNqThtzrTV5RstbVLQ3m4WwBHLGvxtB2pGnhxn7PjRKxiaGNj7Zm51A2dwjakZBpACG",
  "key21": "3t4h7LrQNqy4Bd7Dhn7jDoByexFt3PweEcAaaftMwkY6Cro61EicUNMnBLgzHhYEJHFzMPMu6uW4JcqUPCpzSk1v",
  "key22": "vSXGMBQWLa1sZoNnJ7xAiD4WfwKNi235nTKcDW21bHF8T5AzvURYfmqu7esN6GaTPZGAbHwXay3VGkDkSEV7fGm",
  "key23": "56ynwjMAgwPgJNfbGSu5hGBX1ULMoL1aqZovuyKLV8b752JBWUx1C61A11Y5i6ZBwp7uGhPwTQvvfW9An4p5zCr2",
  "key24": "5BnHEeTjY6aZ7ABFYPB9aZ1sn8eA7W3EZGPrkxBv1H51P4u31fywiLg2PFpxKJBD8RmswCv7qbFE8ber7wyRYAVj",
  "key25": "57DAMR3FDqW2k6z8yrYgMCuAFLXLnRZEwFAvtU12JLmtsiwdWsJbRw9mtsMdqeDUZPoF2zRcDxAPMsnZM6MN4RH",
  "key26": "3yBLLRgJKCUbYMjaG7A8PsP9nyWNKR3W1PaY7DhUhzHwqkTmUoncLERJke8aKYMFd6ZzBmAgmDi7LRYqBiJtxqDY",
  "key27": "XT92xaZp6YXm5oxoFLKDei6gZFwpK4Mxr1WmdkQc4cBu53dmgY1VLvDGYYxM7MCT6FaEVQj2vCaATkfRe8Av6qC",
  "key28": "4wi5YheNTSg2H4UkghG63dSqTNrKvK2if4qbqmFkNrYyvgGZBpXEkjfwWCLGXs8YhGydv53DNAtMvreUU8cfp4Mw",
  "key29": "3rf9ZZyjJqebbg8Jou2mDoAeRDdBZBBwh4bwbDhrAcomDaQzgyYdT3tMw371j9zzpB1JZBQpDHfgdJVkkKMHtuAU",
  "key30": "5yzC5m62AMWNGSxcE1AvdkUvdiyMme4QbyBYVNDfBfzRA3zEyegfFzCAJyLCsGCnVcmvH5ALnYPHzydLnyMB2dE7",
  "key31": "4yhLXVcLUaJLhKsjQchhwG3Du2iS9FoEMsVFpRayZAS48pSBewELU4hEJwSz7rQpqZj2dXguoggnBVvaK52aWmyL",
  "key32": "2fYvh5DMa537xDuZ58TGnDEzvm6Lu4kgoqjt7TNnFf45dY3thn8EPMRQ5aC2xPGyoxJuMdmR78eatKEeyFBgtMWQ",
  "key33": "3CfEL2ufY3Q3UBZYArMbdLjvD6dB4gTC1ACnScgWCAPVtAuWcpWa7ouZCY9J2F2rXZAfxM4Y3mDDb8ns9WMJt3mn",
  "key34": "KdwZeee11y9w1EoYdn5qqVuQaNnq6ycRxqJdcVUoJZJbVwZgoqMP24YAea2AWPphYAuG2hRW6NVhofwq8Lk9UNw",
  "key35": "2nmxKmKDwRLwYrzSg4z2jKpWj8b4o5aV9wUBsNbcuFdYgTD8cYD3MtoTkKpXxxh8atTceuQmv1hVtAKJgwYGurwD",
  "key36": "2NbthZcvrTLynMosWYDRX7QFeLcnGvYTLwSBy6xB8CTnEhmgWetBmmbc2vbTm8WVVHExPBBYapCitHzEBLESXapH",
  "key37": "51gEkrXscBRHAwjw3ALCnTDQaAdUWyBNxHhPvX8nLtfRpsRDYLN5dmZvwxqVMnidSe7Y4oWXJnwLmF1HmbECXkuy",
  "key38": "3YvzpxPoytKcEqwCicNypxHD4M2Dubjk4872MuU1WiWnk1LBFi11RjJWFFDkpSgiYawDRbSrz43wFjXrMKqoKmTX",
  "key39": "4qYroNgwMZEbANnC4q7Rr8X13anvcLAoeNdRuheyj8p2AL4kvb63waFYfXLpLpGXfpRR978kNFcihoXvEBh1u563",
  "key40": "VN737N2yCJN8SivNAPAvLpyhXDdWMHR4fH67Y9dPKxe9ngQ8UpkyJSjra6GFpsLQqPaspan39X3Wtv6z6Kb8TQn",
  "key41": "4UH1HxxzMNUsE7pRihJKmJkHKfgErHjut8ChhkJW2y4jjTaJeGgbTQKTwgLnHVHHG8zvA8Ljt6n6q7o5pH6fxvJ2",
  "key42": "Jk1hayS55Pueqzi9i9WmGfpxcHzEkYb4DjWtZcHg6FK6EUXp9xM8szqRzswqPq9htPDhgDNgn88dXyNd2PzUScz",
  "key43": "4W1Q2Hcxh3UEVVBJjt2d1yP7kAXN42rTpvjyB3QWLhmpKfZbzcMD4VwRX2DDhcCdgDsbrv1zM9XiQQ8WysNbgirU",
  "key44": "STiGL2Sa6VQkhH2xSk63KjbRjbQkvY5hwT8wMw6rd2HTXosX8mMpGDjiENC8pXXoCPjiHYNdfYAEJHon7bYYnib",
  "key45": "4LvinsCMmWPcvHgKrCp5yXHBFdEiu5kLw535vQncLZsNZ7P78uTCL14jTprki8UtbLndLgDaNTM4Ycd99iwGYjrj"
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
