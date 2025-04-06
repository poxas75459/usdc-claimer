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
    "52TXkhv4tR5eDgNctgGtTi96MkmND11yEtXLFLusG8z6DKJWaJTKfjJvgBrDEvwmmyzFgevrXzkjnJJFPvZRriA8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55oDQc1ejBB9GqPThRd4wAVJHSgtk8VfvLPJerApr7zgkgiXptxKLSgNy8m58hKQNSLz7njP5WwGCLWFNyrEZ4b8",
  "key1": "42JGJeoNDbrJ2CUjHLXdGQwyxjJqLWwsgY8AQTGR9j8kw7BtJzYPSJKZhTdxvYWKZDnXBkq32WsAAJpttSDGfZxc",
  "key2": "yb4n4MDQkUQ1XCxQdjJBeN41rWLJD3FgjZUgp3MwUkoHr3A9YaLiYfxhprmh3Z1FAWXh8frwVkdMtpnBH6CB5sB",
  "key3": "5NvSUMYynBPgzHbBgYBwybs3Ywbc7m8ox5FpXXUymkEXv4cV37QNN2iNPbb3Ki7Fpkgkhds5NneUyFyjmMzT1JC3",
  "key4": "3Bowevh4VXZ7tRuWZAvmJmZ49mGNKtsKUheTMGgCYM1tVgoXRH8ibyYUXxdsjw9UhR8ULwxfL5TasdTSi1mTNNkY",
  "key5": "5TkvAknEkXPwTNZfkzdfDvpfhWNTa1TzZvY2H9EmdKpnUVXMqcJqd24EtMAgSg8nFa7qEQwwaT7dXB7XCPQT2fHn",
  "key6": "F68BrpceZy876YSWhJnKLyJq9vumSmYvwF4HyrpwqvUiCFSMPt6cznwyW3nKWUZSr2Sua6CZT5opMt7y8jUyXT2",
  "key7": "3RiGKkfkBseCosXn2LKoPzcsArFNnqWHWjL5XpzDeKZyY5tBzhenK68M8uhf7CsvcFDmzP7qnSqGQRa6shJNayQG",
  "key8": "615dhiddWPdzfMp98gjWdxU8VrLppWXR1rXnrFBeZmafB9mhb27p3K7YGvBj6s7DZAmsCkJ25DPpEjHtr14CdiKn",
  "key9": "21AUopGgSGT7PvKKcxmbXpkBKxxBu3mE1iBh146UPME9BwPckbHPLZif1Tsap59EDUEw5PwdTMiYTFr3pXtguSwD",
  "key10": "27MG1tnY9BodSt8ZzfQTbnM9dar55Mqx7SS9T1UVhaN5MbZHmvbbrqGabCfyj1J8RH4bVivx4DjY8Rs1yRpcUmvn",
  "key11": "4kNuvuS5oB7REEWytSMfxrELKS6d6HAc9rqPe6m3eNeN6kRqssyah1KMET7FaJKohPGQViSweNi4D8C9eQSooEoY",
  "key12": "3VVKfUziRCeWbXfkojm9EhT6z3E2Bq3nq6HReFcT1gTiLsjoLHW5Vi2YMNJhZiYhsBaXtHFmgq6NtNfsaC9eitgb",
  "key13": "4W99AepXv7eEuk1nc5Zt52cBrLUVsqGnfMFnhJRPWDWDwEAbXoizjU94XvnBvxcKSQgHjvfGog2N5jRwBM9Sa2iB",
  "key14": "3vsDpqCZfxDqdi1o8sAwrfTUTdiTqMB8e4dor7yauwb2Vqh3kHXbKMUASoY3WTT8fmmzk6JqsQqkvTyU8Jf7ASUp",
  "key15": "p71Y7Jo1E7B4mozP6ZKV5BpgnPTNbecTLtMeDhcoLCnhC8m5aWR2SrepAVzQ2EfamcGSX53z4crpp2Sa2Bw3qAZ",
  "key16": "43p52db79jfMYhojfXdKBpsGpeSkiA2P4fw6KiGocanLkLsTY5dkWR8HVHXJF559AySsEWa11tiAiD7GPMSi3Wwq",
  "key17": "2MajVsLBaUdYBYkuoZGxZBy5SzzGty1Dj4xouLJXWQp523yMFpFfH2vZ7Q7S2iAxW878WwtL6pTTnsFfCWiP9f1H",
  "key18": "vW6ANEb25cvtfjjNYR98fbwxcMXDpNHd4sZ3aQJNJsnH5MxPQ5MDancia7kq37XCPmqZuJiEjsXw8ZRXXbXHACw",
  "key19": "6137qbqwJSSt5TWJXkdHZzvWTq4ijypnF5Z9XU6VceadV5JCjTpuqe2esoYXLkbk6SQQ2TJqh4xF8crdPQ1RJjKz",
  "key20": "599MqoRdXdTWWbshxx3hKoYpZ1KUMLqVdv6MNCw3gKWVBQGRTYAJvnYZ3Tp214K7aW5SZt5X95792SHGxoggfz1k",
  "key21": "2aLhgTYqjrZRN1BBNnYUDbREmrrWE4H9tZ5a8xBaMxM4XjUxHKu35m9UM6ZV3TkgUQYjEDs2M6TQ4qPaq5pd3Fe4",
  "key22": "25yHAFWBgVWt4CNE5wMBumtvVVu8dj3MKGrW2KyaRULpdyoQb4AuGt1Vnr64WJmjBteCeehGqdwFC3Am47UEEfKP",
  "key23": "4uZmRCYzewf9wytnubC6CfwgSUyUhUuTe3hmfEDHPNyE8Wb5tb6L2NyUBjJR8DyTJtgcd74hhZZpdR8CVtGfnMnU",
  "key24": "RQBEPA8eSr3SGQrq2ePd9mAMcNd2xTZtVkTcrnP6R3p1YoCuQzzoSg3LdC7ntPuGmVr83fErKKKwhh1auyeZcNk",
  "key25": "GjF8HmYiqGLTi4rmTWm8DLLfp7ESbNaSgJorHv7XWG3XaEKwpzaYyiJzGAGMstzf5oYMi54QwprUciNQpWafE7A",
  "key26": "5wQ4LciYbopereZMkCzHx9U1uiaSZ6LhUKEunSjMx6rqnQGaitPRQzwoVN7dDFWwhpU5LAEnZjvRqBC68sQkqXA3",
  "key27": "2UaCtYNcBVFYeqpMAczQCfubp8DKaLoSFgqifrpRpnos6M7C5DjSVhSqpUF3Jfu5HGrQTV87n6zQyTZQoHyAWbtR",
  "key28": "2JXEeSCfk469LXu4nxHBKat1Adgq1SPERDXXgACdQBKenzdZNZv9vrEUoA28xzCJ5zr1CBnoYPakQXS8ZZ988uaL",
  "key29": "3DxMQvJVKKMzQoSkcv3xeJYudokAUFz1UdRL9eSwoPaMauZUhffBNNXX8Lo2mC9SRLJ9mLbpBKUm21g3uYEuDNGP",
  "key30": "5MGS8pKnsaNBNf7krPpmUXAtbKBdVbCcdE4zWttiCCUWE45zQVBmRn56b9PrYgtczMv1c22RnMXHDVf2WxYGwWSA",
  "key31": "47tY5TquY4X8Mx6tiVySoiL9gTutwMMX2sr2rX8ZPhaTsE52G7Jz1GcujVkk3H2UMGXhHUmLT77Y477eLGQedKmp",
  "key32": "5U33Ujcu6EwcoiC1QwmbE9ZwL2LBznwJPN8u1RQTe99LszWQW9RFgrewVpQncWLk8NjDZoSnHZYkMxC5tQFd7jwL",
  "key33": "3FsMdsCH4mArmYiEa5cFCsG4G92K8ScovinzvJa6Ey1txoyjoRrTGChNR4YftddCpR6XG45C67kx6FWcYZXh3ugt",
  "key34": "4a1rgHudrcX5eqyPekGVNokLzbouJh3MDM6JAqMEU1ZJ87XM2qhTK6nEUJupVV5qLw1jij9dipscw1YN7wYqpDYq",
  "key35": "4GBibtX1Z2qj6oFPCCkUAATGmYw923sSCh9LjeaoLfFXvMPp32NREeDrB3yVbZtew79nPNUWdRUJ6RBJSsQaTQG9",
  "key36": "4va5DaM6nonz56bWjXUM5yLYtZJyST8VqDro3MELCLpwnNfttoVSHwTN2BbAoG5g8QsRFrzkCYxo1HorwbRWBa5h",
  "key37": "5RNYPfFYiVP171KiXk72hvCLPhRLoG2tJCvcU3KFcauAoSpRnMwNbSDapuwGhFjbHVBRnNpuVLXEVNZm98xPhMdQ",
  "key38": "3Y9nSVezfX64cESojGfU8szUvAogVDETsqXw24qX4oXJ3NCeXJHb8zzxW8Xb6LLuU9wtwobFARkRoa2uuHgE5ktu",
  "key39": "36s9XfDcXQ9LzJ18cZcbcrYxViVX7873KH5stP4uZDHa2tGt2WR2yLZw4Myf3u2NoG2iYVEJY6XahfmkacgXsyNn",
  "key40": "3KXbG5kjSL9eNqq6Du7mNh7KkST8fpfJYjkhcjnm8V2JRn1e9LJZCNT6Jj3NbepuiNkLsRj2PR3FTEZjxEKFXs8F",
  "key41": "4kcpYemSgyfQiJwmGTVWwvFhNvkiUWWaAJfBv5zsNhuVpaUTHg9VAHycBDFsQ3vKuyxN9XvyYe7F7oZXW2jcP3qV"
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
