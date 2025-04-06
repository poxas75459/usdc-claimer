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
    "4WQFxCxJsTMv4m4MjgD8AawmWwmbvYkP2GreYNQJQMbfK1ykTqV7RTCfg8CD2Su9nHLEmF2gFguy3JkfzVtjvPEX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SdUUdSBDwKu76zCpoPdZJeCnStV3V95BmXSHRhjRewZQ2Qa69zg1tEMwdsyydUp49miSDknik5mfRkyNYtyVxM4",
  "key1": "3hTwyBFRx9TnKLNSwmskKTucPcfNCucP47pMXj4NwAHZCYqKRWiVKnzp68d4gS7PDAKuxpTBPy5gzegmdV7UnWQy",
  "key2": "5dWr1cDEk9YEkRDHfbmqUDxtmojY8wYcot4M1zCGcgbzzxv1w5tH5uMheCvdYK1rXidsLc5cYAdZkbd7Xb6CYn8f",
  "key3": "hNWPdo9oWeDCWetFtHJMKt2J3TRrBmhcL9vkbS5EFeLi2wGoGgaAEqGbhtm3xaEd9ARduQUrq1JnVEF4Ng9PADC",
  "key4": "Fe5HMDBY6KP97pZrvU3TzEMD3xJMsiarTiv19zk7XWK9nwJfoRHD2u5AQZEbWPhNVFwovgG5nQeUQdQAagJ6RdV",
  "key5": "3LGr6BRuNGY35q3J7cuDYNGV3ZcqDjFYc7amUuPQj6de1K8MCtggcr1NEsvf2mXEuzRRfKxfnHkv6yLZfUQKHZxB",
  "key6": "Bzhhyw7BaCgdPm1BFmS1aNccXEuJHC4jobx6sDHizxfyTJSc15ArqbW4PUte4rxPzBM1EGXscFvGUjEwasYXUCw",
  "key7": "2rG18njTzZj95ZJUVzywj5voZ7nj8jV8mriAbBTB2xRFBGkrWUxHmPBccAzZSzGQDVKvKnrfhb5oQi12pvmzEPeT",
  "key8": "55TGLFEvMJhscEHWkDKFQQ8S7QXHFdY6SaJLXri3DG3Lvh9NZR5XAoX4nqpjvDgmp51cAdkCzbzTfgF6dQAxxRE9",
  "key9": "2j4RLShmRZichQqkZHV6Fk7xGXxnHDqLMnLuGCzSoWpXpbqSo6FwYbWhPLGoXRis9KbqthZvkMFNSvMcVbDUSKkH",
  "key10": "676JSFiChAv972xAhTHbDc1ZtWzV34vGYLsDFNTJE91jxAzP9o9XQBXk3DHyCgzhVkxJhQp3bLqbct2wWGoctGBa",
  "key11": "3NJ8ZNcdH8jDtQPRA5jXMDr8xpiwkiqhRvFfp1nBB4VbUxCeZ46wmbJtoMeRB9RV3y15sB6jaw33a9ikDntL1bUh",
  "key12": "3M5BiN8MWMoz3ET7Ar6MFwHP7kAKdy8qUsDyomnbTzqJVQJMx8AqUbhPf915RFhwAELETy1qyQYccCrRoP6KbQ3d",
  "key13": "2yNEtJficasDudAtroa5LGwJaEapwi9YqcLrb2U8jWYvYx8ZDYBqd6C9ARto5NVuDLYQqRS27Tf8zksugjYqvWPv",
  "key14": "4CxxstNEasry8ZBNXs97C9YswGNtsFCHx6YMZUTUKoooccT7MReKXhd2R1WNWBEZbWeYtQHdKW66v2H8cJpxcYSz",
  "key15": "3yX2T6bM1BuXTxXEz16UxKAqQmtRrQbh8XahwkaZUPnYP7duhTX8ffgzUTgYSeLQpWj81tZ3jmu8A7LX5JhM2dde",
  "key16": "46U6Jb41VeoGFtERF6PT8fuysf9jsnYxDAkUjuqD3RhZqQnVdh5HFGpMbDFuzewnuyEJf83HaYvtkU3LiioxWru3",
  "key17": "5tZNoLenCWPTXuCGHNg8xmvGKbG4ceyUMT8LMzDRTishfYnyrj7vNtzrJVHu4Lycu9ndwVrad7o5QJcFJXz2XSyv",
  "key18": "5WrRThi7fSLUq6uZok5PFHoKqaoxSqv6Mcce4X4qNGGW9pYZyTLaDGNSYkXhEJhfQ1HW9QwtykY2sYzPBRvZKTZZ",
  "key19": "2JY6JUHYqv3DVusG4LZZ9HL2DmdprCwwboTpUPcQr9fsBCoGi9yBTVgFAPpCXcXVyyHpME3pqsb13fhyZHuXBXx",
  "key20": "4jdHpiWnjuPMhfvwbJjPdwehMc5UfVfYUqg7EPeAZeizfPnsSCMicYxde3i54HL7f6HTU4B9xHBcEHWrUzkzBh8V",
  "key21": "2aTezxfLDFPgfT2TPdsuTQDZmnLefAVmPapxQCQMyYRhSssQxPRCJM4BxVp4sKgpcXNNp1bPbaTMGKQmSVUgJz9d",
  "key22": "4gV78AifBc4WSivWbSZGsQr7itkjtXq6hu471mxy3uwTQ1cYwxzj7xNWBDHYNqAvz5pLJj2C88U7xf2J8GHoCUP5",
  "key23": "4jmCNY3eH8VLPy586JGy3yu5MFTiVN7Hk4UNd9Gp6Zh251d9GBqxduuJGLazC8TZKZ9bqnhDMDVgeemLoiknRY9S",
  "key24": "5Rk8ZvHMELpPxEbg1GYPVKCV74YFqwXnwxtzwY2RgacpdA6ZsDYYAm7kx68aL6tRyybKJZAisv3zL4UJobKQPKKy",
  "key25": "5qHSaVjy9W39qnZvdpyNx6vHWrJJhevx6vFfnBrb8NFLbo3cR2jptFuvezRt8xCuSTmY4et3ko5fXQ4tmh2ZEgDT",
  "key26": "SNejau9naSgRUHbFtMvg5JD2ipcu1Q7BrfXM7Bwyrh57nMuyMBWTkSDU13c58n9xMVdqY8YLSLGKCrniqe75USV",
  "key27": "45ZVzL45kAUFWJcNTXQx2zBVbK3f3jgdt54SppWcHZULN1XtvTLsySjMeU3pzyvar72q5efXAVfBGDRsPccxiiFN",
  "key28": "qtC9ED4StAr3ifvBitfZ8VWSM28kWegb4zfJby1sRzekxnSxDp333hmfzYeosE6vurvSyn8Hd9nSMG6n4Jht7o8",
  "key29": "XwRA743euQkCD1wD1JZJbrsY74XJg2NVhD3dTxNhHRDPCRVzPUFoGkqoffkvGXVbNSaznUij3UoUo7HCxdzk8P6",
  "key30": "5Ud5KZMQDkrcgWw5nhzQBJn5ANayTeviuK8TpKypb4sAD4ietsMQMahdLYJMJLnXPHs9DC5v3dCvSUZcJ5macfbq",
  "key31": "Chd6WSVf1u2xNyF6o89fy2Gc9oWdDg8EZEJRcrGjJSZ5S5opxzXXYwumsbVwbHKk7QueGdVpeBAiU325EKb3TM7",
  "key32": "5gFBi49ouooVZqHCDYMxJs913HZsPzo3FqD9tkvK725HaTjBgESdcwTHG4oEzVtmkEZRNKaa8XQhZfvwKpTCxD7E",
  "key33": "65N4fTcpphsakycUSztw6oxaEEK7AR5pxgNfKZnUJnMYRJJ5zXrUiu3A72s36YMDfa8rAE2cc7tpu2iQ8pXPVttm",
  "key34": "2FZvbso9QNmumHFNhixvCpT4Hvr5c3Q3XjwwGL44EFV9qxCR3mpMAUPVqX1zAdNGc9dMtC91MMGYNCK67X6ho3NG",
  "key35": "3k7n4CzpTkMdwxgnDhNxWMvujYEZ3SAiANnMGnQN96ZEShmtZBDHNDEGqpdXE2CVK2UdRkZzXW9ab1rdEtp8vr3u",
  "key36": "5bkowj9uvzLzF4FWUo9SECq6rQP6zxEwnp2zju8iYsaTjoFj1SySQo7EyU7zqZ9fXNs9zTDYWB9nPCY4CcjHM7YA",
  "key37": "57DXKAdie1MSYXmSHXU1ShncFpaMCrADQ6YXfgmYcgTwNUGFNhfRhkHTAsWkMiaZvPCibG42sJBmrNkt6Q3sUGB3",
  "key38": "5xJLPQUVu8J57TurXM3fVunF7VEmpTYEsxpA2F8dtihjqDRFwhr79323TtisiHftndUcDNxncvcgW1MsBYeqoRQp",
  "key39": "5CBKMFvrAEGRaAwSWecrVaZXWHpuVbaqdEo3jnBak68KAgL5Ce3Dh8o1Xn331fzQcyvNuQ5kWPU24Ka1G816dpmE",
  "key40": "W32cb5EKuU1Eu1bmaXbxHXbj1Qsx5ckxRmZ2JAvSh3NMnFyM6SxJWGVJA7XTsnTSMrqh5ELbTgQskyBz9Lx7W7D",
  "key41": "3QShQcYigHzJ1ysCNywoRzzdrgfbZegP6TrDaS2AA7A8jShrhnYEudCG5ihq5VfLgPcNjcszV7222itCygyH6tJZ",
  "key42": "UT5AJJe9WZRoHjnhQ12i8zqqhZdzzruDB3r1npFWakCECzAwnC8p7NUuwT76bye4vc6sEgjC7QZNejci7kY41MT",
  "key43": "4v8xEkMgbv6pqxjrCehPNZp2CfopcGBHqZoGjjejPnZs5fqR31zGQKJQicVjU5iwWWQismf9LRBjYwGdHd7sgwGa"
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
