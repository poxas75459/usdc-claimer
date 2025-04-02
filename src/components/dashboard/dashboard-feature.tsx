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
    "4UnaoHQzKaM8NRapyQ1En76GPNQH7zKs98dQRoWJEZX8X87Xgm3zRCfhyQjdgBqZ5qi5k8H8PeYjFTD75TaUT1Sk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rWnYbUMKR1FSDV26MJZ2K9nYN2tFNfGDgpNpoosH5SkeFSJYhg4aSX7Whqdew8ajhSwVbbhWVj6oB5ZRmjkrtqR",
  "key1": "5kK5UsQiw5pdAVGDJMecNoFE5w13Pw3vpbZBMUAHXTvodbGXk1KHTPH7qrGNZUUPaRCeGLHMzjQ5aWBK6x8joXk6",
  "key2": "49hhgCApwZbNnQ3aULZSBvxW8VVJhrraSjfpVkv54DPEDsWd9HcsEeH1BUWGLGRqebZcjihVeLkQ7d6dmA1rqMXG",
  "key3": "2ruJrzAFz4tXyf7tEW9NVmADjm3FLZ8AyTEohNg1GBASU2FvgxXAVvuC2EpJ8c6iQvq4d19msA2QXjrjEmMGs4Y8",
  "key4": "3vCbEF3Ye1twf7SSGg9TQHsfLVwK3B3CQ3L2k5uu6XqJnjtRReHBPGrfYCoDijVEmUfkdHUGsUDPxoRotULnc9kR",
  "key5": "5mLnpnkDsq7n99KamaHzq9zYhmR1XqDb7jhSXenF5hQUEUE2ubkr2yiwUr8RVQqWd4RwJvpZkY4iLDgfv7vSXC6b",
  "key6": "2g7XSwyvZA1tThthUvrsxE96Dj4neabatDRcuFB1HbfyWHEdJZsV2K59wyprbSGdRWdJnjqFsfFedcjXtw6H618L",
  "key7": "3BUJKKGBx1Q897GHoiN5nD5vu5wokxVZhqy8Gk1zxo1tBBAAJUMmeobQVGfc4SzEVTfr3upWHENektYVVSAQUgZe",
  "key8": "4QUVGsmSPxvhew3PAjPUxG6NHnARtKbNsdaCmMji2x1oc96kSAEYk4CGkm9Y2bVoNwYu7BSyfpGbnAqHnU1KdGCs",
  "key9": "39LTevnmB5CCEvTwyQCNYmHq5iLwhGZ3X9D6niySfc8ZhrDEH7bmHBWzbe3MH9w5tXaJsNznzbxhRRMeMsVim9TS",
  "key10": "PTdvUs7BKauFVyYn7xouVCAFSEV1qbUZccFxHMu35KRTWXoLq7NVFjUawH1B2YeUWL5j2j912W7duDsMyLb8pkE",
  "key11": "65YE3d2J9W6hmC2L9kYbVF5tikUaLhSG1TYfjW6GhNDc51gcSTQ7hKwXYu7BK8FPwhGNXnaB2UhbyamGp8yLjSsF",
  "key12": "5hL1feaUUmb3pns7UBZiZCdNen8nH6payhKvhwrQZ1SJra2rwWL2BXeLPvbHKcW6Jy46PjgrUUo3wh5D7g37LU9Z",
  "key13": "v2LFHRX8TKwGob49frUCptwibZcarr16dhrUcfwRxYQJ7qPZYa2dt9knMw4f4rLeWDGwqkXp7cX1GZLqz7DtrGQ",
  "key14": "E3pboJNdiHCsko1UGtCukJRfcWYHhjpRZeqEheSa8n82j8UM5L7cH8jcsETm3zJCVoRvMG3fw1ssWL7ySJhgGt6",
  "key15": "5kwGZLuawtwDkt8BxGyfifHFviMyv7TkNkPMzvGnCNpBRuhzJ1m3aXm1satc8P5bkQs3u5simoYkE6iUYfDSvfbw",
  "key16": "26XMjQw5nMoBvQg9KpgLSBd5euKdm7Zc4vNC2mUGBZ31nGV7oScjHnePE9zWpePBELnNHatainxb4CjKvHkGAzeK",
  "key17": "4wKbe24G2Q831bC298azak6NXbfd1k9FLS1eKTif3Uwx6q8vtPmPBnLapaVLu1Lvb3TfTSPH8F1FGKHngyrPkHP3",
  "key18": "ZakrUu5PgW6huRVfna6gCrME3dqT39xQ5yGmjhdeA3S8ncvDw96NYcj1Wpf3Kg1Q2wsiZZKyP6jcyePxWZ81TuJ",
  "key19": "2GQ42pUutfzqc97C2xw9f7RttNyoQ1Kx9b65DgLEdthgtLKrwDFHHbGByU1KgdoUqq3WVJBSDT3eX5d6kRsu3ScQ",
  "key20": "2UWPgtCu3QxkNw3DZJHoH7NwbGqb6M4gADhGdQbWvzJ1WnFbu8PFL1A1EsdqK2Rxh446Z7XRPTB72SDq1sa9G8eh",
  "key21": "5u49dsnMNBgBzZSvE1ZghAVWKXLz9DAXmBK1aPdURBXjntMFUQDc3NLVd5RQbm46zGG8eXPuUJ8pXwt9cDfPXEqf",
  "key22": "4QbHHeWKUvvxjzrDHTENNSkQCtCHmZ1npKfqCHHhnVpMMEkJwZbvysW2mBchWHeDJNv5iYaajB9Vs3wVnmaGdP5u",
  "key23": "2pcqtSptd8eTrtFBUNUokJF8Z642HVyzqsj4Xi5BckLjNdxkVga3PsfaeHiB5GueWbNn8g1VbCLrCAyRZa5CjEPr",
  "key24": "5yfVVHQe4VWJhcsEP8Zb6GX21uNfVBeibdTusu8KFhob8PdKu95opxBR8PWfTUBiaE4P2bLwUQxUVjyrfp27RUyE",
  "key25": "3TVkiCuDg7C2Jfv8mMeJj2d5YqdqujjRPT762Boyuajsj2ASbnoYFJ5hBT9hXfBWyYcpbzN8yRCCiBzgNVRk5i5q",
  "key26": "25AxFHRVM94iXvuNhpnWLAWLLdbsYQqM9QtumgCBFjPuSndbuMbcZvLKits37m1CKrYUtdzJdFd8Wrid2wzucHVB",
  "key27": "5yAZPoCiRF4x5WCrQUHgHe1dfR6ZuNsCur1C6cnnujkicEBiwKQ2LtQ62pHrocEyDbBzyJBDg7xMcpRiWKEMBtqq",
  "key28": "3EWSv9znr5gSaPvozMKieqiL9YkGZ2c3vRwTxpyCx6ifnd1sh6Z9zWpUkfyvdNA8UvcF6ziz4hSk4gdZDp9r6H1B",
  "key29": "4zphuMNSmNtXtKzrgcHaL9c5v3bpSimLusawjzHSw4ivUNVgNy5ToF3abQtQginZ1KesnXWpcwxiBfUtRhHxLRbB",
  "key30": "2BeUocYZ1UCaMcucANc3RjfQBDatXcpLjT55tjZvPqbCHhaBg3Br7Mj3KZSq1xhRRRKKUzzKyxuNcFVvQ7bAoNZE",
  "key31": "5stiYfUWLhhCHmrt5x73pQcRNQ6uJTezR93qbngwe9quWVrbGYXzb12aSz9oevUGCfiGwkdbu21nsyrez9Hn3Uks",
  "key32": "4Quhcp4EZQH5VYueBCMYJFBR2od8RpgcKY3tWu6xNV1JcCoNWR9DKyYXWkJVXAVFkvP12VJ1P3Yn5zd5uxMT7Vm8",
  "key33": "37UMHCxTYfvUHLaq6mEE9w4ct5ytjTVH9uYCfkKCK1YYGXfzeFmeuoS7YVDGxjjcqGgyDK9Pi87agRk7fv4qzDvS",
  "key34": "3QBGHbERQed7Nb7SwpGy2UxVgJQ5mVqs4TxGsegiSHEZC2GPjdb2jSMb6XH974b7Fzwy3wPxXQABHYhbqJNPQnQU",
  "key35": "3B1rbop7P1NKVipArEje85THrE8S5arXv659Y4KDCm4MdT7FhD9FzKesCYF7h9sM8TMoYWYjBU4m5empMkN5yjFn",
  "key36": "ghkAbSUXQuEEPN3SRBvXEWNeejz8wt2Mxv27EVXJjvyMaXdvZSiQy3g1YsMVFMj9vQJMgiVBr9irmtP5mbZYqNc",
  "key37": "3VVaCAJ2KE4v8QJywaMKhr1QDR5viMUcHUZiiKJMUnXdB6vCYPmTk7UG2u3JrXLTH4sLm7MoCGTTzgXepP8cMgvV",
  "key38": "3QAagTmkPgSDZdjuFZ9nLtwCMosvv2eswLtkJjpHhcSUtnbDcLa4uP7sXm2JFHLteUTzygDRyjz7B1kAc372tQU2",
  "key39": "GjUzeLnJt9h1iqMaiyminrEkq4dJmgDrenAWCUewGDtdyuAQfjGoSzyD7Ma33jsDTkrAoWXSma8a6HG16yLerGu",
  "key40": "26yRN7p3DqRQWTea6JKezKmGqBzbRTWahff3tjdad7GqaPW7RW7CAUrovKNgCAgFjCnZL7RLQTRAMbRLQv54b2gK",
  "key41": "2SGX5Uo9jKkZ1iU3pFZnqeaMnztYjXFVYnyCJCVHnwhiFHjG5T9mvXYx6pc8TgjGLS5TnVBmhkGttWCdAs2PBsPN",
  "key42": "4F8N2wGxftsUscNenUzfduKtXfRMgrf9dGS8wEBxiHZzw9toM3jvxn9R3p1HNvn86D6F6T37s4zM71rpnNFcYEkK",
  "key43": "3bwKE4R5zDsKUMoy9UaVzoJAonc8GgEWvDQzajvevec9YdFEZkJsy7R2VqY2VUvpbvg2UV8Mxgmq7wgSwNtR8d35",
  "key44": "5bWTHf6UPzUUcGVqNG8JcTDw81kAEuZrz83B1f3qPd8obAYZRapYD6b25NiXnM2Hasgbeiwwxof8dRcvjstmPcyg",
  "key45": "4Y9uw6XbmU2h3Pybnc3LZLcmtD3zBN3hd9Azu7i2ckaPciuYZm61Teqmhu5w6PNxp2CMqzk8RWYT1Rdi7UVrNXon",
  "key46": "4qVhoLcrTqLevsAtAft8KJxmXYmtZmWkcjRWGfswizhNvmChybwJJSTd5vzQGRwUZ5a49EmWA6JEYdLG88x6Mhsa"
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
