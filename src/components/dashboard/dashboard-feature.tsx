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
    "5gKVsH49GM91JXU4JYoYLbtAst6yLmHHH1hPdkoqcgcbC8eo54nJvYLsaXtHefeuZCvRT22WRbV2k7qyuGkZNvw3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bLndQsPMY4izj9UnQfcffSadihRKrAtiWVUN3L5FDqZnZGp7s2oca1GMUcwu7eUMLVaoFkmKtLdhJPhSrBr2zfe",
  "key1": "4QuS7vwR9wM7fwVM5qosHenV5XJMsf3GC7ZR7gX11vU26L5XNZXuE86HRyKhsuqJU99crHvKXSq4vX4SZQq2mZck",
  "key2": "2Y1dHB1vi6Fm93UH6qoENAUcbNqLz3X7qMki1hY1Kt4yWEu5vofT2grQKLQEk2tV9ZyhN6rrk894iJjjqgxtqLrt",
  "key3": "NnWX3YxGuQ3gygSuDK2i9851abtVMCH3xMgAA3bTotSYYUt4A8hNepfTk8HKJT4ZZustjBQCi8i3VYLwjvRCRmp",
  "key4": "2LAfUUiLk8RqeUB2En1U7EjbcgHd4YM23g8bpMEN46yZjtc6hrU3Ha6HjYwfLAaSMSNiNQuLgiF8FmcCM63Aky3D",
  "key5": "53gUQyAP9SZErEFLsr3eTApg7ktYNCEMTmxc2vHrd86Fo4G2wgXMv2gVN9Ta6G5Y6G3ebRvVcdZkKYKnazgbdLSA",
  "key6": "2aUrMB7nwxH5VgmG47LFv2XgAC4KWCJVhaqJkwk4U2tSnMXXUQFHfqEY9iHz2uow79BHDjaFt5P6WkAT8b1HVwx",
  "key7": "5hqN9eeQGL8LJJCermERsD53mnGuBUKfFmA7bJPyT7zidN19f7oBNVojxKF4ouZTAgsLP6tWkWRjD84JKT9TzpBc",
  "key8": "3LMKFH9Ja69Soy2DrCjRSHog7kF4u6M44MiemAaLrqQuEfxcZ4hegj1zWfx8W9UbbHRGUyyHGb1Jx8X5CCCx7h6t",
  "key9": "3QiUjBgB78G9evdfmDHkvMNr7kjGCgvEyKxu1du6zsVUJNHMPWdJzRiGZmGYJmDWZKfXWyMeY5oA1Xm4WrgdDz2k",
  "key10": "5Dx8VHUPa9cgQAR55GrexzVptgmbbP3cR1FWj31rA66PirHKmesyrG7h88XikpMXDNrUfJ3bhhrffVepMp5soyNq",
  "key11": "2k8xs46XAJ4nixwQQPUjUy3zLHGtaBt6JBZfCpcSufn4zDvqr4DeJ95jrY5EKCh2LbsR7p7yo8UGEaaWLa3QS14d",
  "key12": "2gx7ZHH9PSwmRGgYLaCKRDqD1egfSo62HfaVW3gJVZGYdyDepKatQjXXXRN7WDm4QtHduvkHUarcQSQibZDB8oJ9",
  "key13": "2BE8TJrXM5kBNeBY8wzvUVgYfWJh4gvP8dugqkHou8N3K6pLdYhhQjfnAN5Fn6a5hp782AaYDMZL8EDxxqv9UdyF",
  "key14": "5vMcGNmBxMobufkpbkYHmf6PycxTZYDpgCsKLA6Jpa8AFpXVkzoFxtnkPS1rL4bFqKnC2KdND7XfUSRHKT9MRo5P",
  "key15": "4WZdDPgFRz1vqTamx5F8aJjrHgfujH5BJJvi3Ku9pft6aawNNHLaK9MozRRgoqr9JTnh55gnTm4AsRJTGtWUaufp",
  "key16": "2DjZH7FhtJRiG16JVFE4v5k2Kw8anxikm47kWurk5wv4v9nyGYQsfRS1yd9g8EBfpHHFkMfSS1te9S8bifaBtZjL",
  "key17": "61cd7xgsGZ54MEJTjBM6p6XqeYrZNWQ7yHZriCRbgin81acTtxiKeXTETs8js6qoQ5dM492x9KmLk6gwSJhqmUq9",
  "key18": "4j2YeZXnv67XP4Kjfrkqc1WYdkXaCFVwPnwj3AcRReTkJLsM4SZeNnx33Yf5FwJBZvVUgD5mk9xVwfaaGgdANq1Q",
  "key19": "3Y4VBrACaBemyhfV3h4QuDKDKfoDhtRnhKEnxj1ECpd74DLNzBWB9D6T5SxhXMVHEkYiTFWrwQebuFRUpjFBZ1sY",
  "key20": "dx66KiVM7Bdtrh6P4noFqkULTNpTQt1hQ6qfWUqWPMMxiayi7SFg9EH6jqQQ3Usc9Y7zEAz9o5DdhidwzQPrw1M",
  "key21": "59RvAu9jn1pzCKpq6duNX34MH94jVVRMg8ogWspDrPUPgEebUmt7Bq2TfHfVyfcAgR5sRACec57G2NC24bNeWJtD",
  "key22": "4rQr9XKKxq4bJyadjHyTyJaQeMZXepms7PZ8x97VRxZwS1EQzH9VDT4JymtSGLtnZapsLVq6KcxJ7nxwShiS8ULo",
  "key23": "23NUy8Bx3XWeLbM8ohsUxxHUvoGDHeYuptZEqBPx6NHzrGY7WLRgoEa9jSrYjBdVfWkFmSvuurgSaas4ckZ8pCAk",
  "key24": "mFykHnTAkJBjeDBB4xkzU6rkNAUbQGmLbHGrSHEMVkTYmcGRv1hpKESBiXhfefWkAtZ8BPv8GExmULZoUpV1Q9S",
  "key25": "47zvKgGm1edf8KRDtr6ibeUCGC7RiWyC37XBC5GGw6ZQrmUimCjLH2Lb62uacXXExDPcqYuzX2ndkALjR2qGzy3H",
  "key26": "5rEcJDeMLCLWTVZVhsquBiiGgmSFmi6trXrB1DpunzJVGTNEJEK1HgQxqhbkoCYsHKCBLe3gYdMVKVp2JxoB38HZ",
  "key27": "5VoSnB9CErwdZbzDjy4w8kCyWThoCFATtJXx81dWfzjpqeUzwDhyxiadoHnQhahabNmEVAJmBGt3Eps5oaMZbaZs",
  "key28": "3dPUvKV36mqwCjP2CiKXUhUgGm1ddPGCiWe3nUkTntXGc1PYHi4RrR5GjmgjqJXSRGrAce1QTaoYHEMngDXP1mLc",
  "key29": "2Fo3p9BPNNCHVNCG3mKq3evuCYuCFhy3qYVARpvyQpppS27zkVzkWKcczRfKqMdtSeWZejEYpZ8x8Nws5tom2wxe",
  "key30": "35c6jinvPf4n55LDWZPP1Z3vVfgp2JfUSfi4WRcMrcMtNABpsBJeRgBNArb2ZgaLKY7VJUTB5TzghaurDAqzV6ha",
  "key31": "3sbMuUCuT6HzA4jm29FBRQYvWLh2U2kYwvzDCi6RSgYvX7CuV1rNjEeESQ5xX5ucqhbaieqcwjE4N6tpwEe4SASr",
  "key32": "3Ki1szzzPAV3Kdpipr9RX777Sk9kHCU27ieH9cAH6t7cm9kFbsZbHoY3EtE3vUp8GPjLhuA2rsnpDCbhcJzYDFPs",
  "key33": "2A4WPhS9831PWKyfvrPkzTCEr4W67UgH9mtey9NsnMiaDhARjKRfgdXjD81tKm9FymSphNnHvCZUiABSrH7PV9Uh",
  "key34": "ytaQxBz1eWDcd5oddK3f8JmJmxPQnEy3WHNjPmuaiAQAk8vT8PtRJiwc29hKaFajdWynJippr5qijWWt3vsWGQ2",
  "key35": "3U8MsctxcYERDiWW82wCSDR2f6man96UJtfN5XKK9rNTbrXQVtUZQfvcEBLbeQ3MNC26UHaGUfukCyFGHvmN9cz2",
  "key36": "2yx3WyZMGezUa55m7XgqNin8WTqTfCHW4uHYcWeRTWg4cSWCK9eZM2phGDNd1AVBu3DfCwtvChxSV9kZMosX59PC",
  "key37": "5uC4rbkcc81xHmgH82uVULCQPmDz4tkKFVec2UJA6AU2r6X65sTUHEtEwsTaupgaX3RQkzCGfq8JZNEd9RW6Nx6c",
  "key38": "wamVRaC24CQQfYGmSTxGzdPeXsE9P1tmQ4zAQ7gBGR4kMaus7EvCztMHxMDYJ6cSApxbtZF3eX6jWMFvdrEUV1T",
  "key39": "3tAa4t2tAb3udoWQVd4mXQRKgvSgDFmaRNzC2aMmpCydz19VBMgewMc3SLpNhgFW6HNGmf8s6Awra8f3ejUqYCZK",
  "key40": "2pNyhWbsLRVEH66hXAWS7kz1CHYEuCYw7USvbJ4TQLr8Sg4pjqh3xEEAvaLf48cM3fyXknpCBptndV5SGGcJmicm",
  "key41": "5aSwEhWNZJJVgg1hGhmgc8LWkimr3vBKGWTLnwZDZhzjN8h3fXQNSLeJCPEz9uRU4Vn1xe8G4uCmsAukddhbJaSW",
  "key42": "453451mtSKPpyU7YW4fn53DKaw4Z95h1jiLhLEyJjcfuS8WDymPtonCCzvhJ46GGLL7RG3poapawJe4ffN3QGrZn",
  "key43": "3QxPPktfpn8JEHbnySTgNN8LnAjgK69uA8VDUx6s4EgtWK33gXwF56FRJdRBQhfHxqXKnToXgF2MGYswExvvdKYd",
  "key44": "s7brn5YPSmdnecgJeoT7MAb4SRBCPXJ4LEgL81bf7KqBQ1aLuvxDtc5a8vF8sNR8MiZQ8S81VqmhhkpokQqVA7V",
  "key45": "GV4dKDKTeQYR2jxkgfJUqC2bprFwpJbUCMeZcdqUHmFpoXkSvyRuN3uUXDeu92wkfn75KhmPfy1zhJkqbt4fdi8",
  "key46": "5Ass1m9PjsVNuWadyuTmRtX5hGJcBATsT7n6DhnsX8YmFfiQPk5sKw9qx6h2oppM3efb1qEkHqnJNdNDe5DNnvGb"
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
