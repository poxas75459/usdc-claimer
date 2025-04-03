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
    "3ByrLdkXXJEA7Jd6UekWuaiF6u6U7BdERC7mYS9RDPEBhcnANJuvSCn83W2txdYcWRaZSv8zY8qKcBGBgHhzirMG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Vjkg7LeuDazuntmBwpjpjFrweLtWeqXo2qWmB3xDaKHaGS1EdTru3eq7yZAkXsa92Kvye7mpVxfonFQo6jfAqTf",
  "key1": "tFLeDCs3cWxoVVDwcPp6jytVtu7XzpAop27GR1aw4Nfpbq1fSwRigzDpR4MQ6Bb4L3CLzbBd3HLzsBrMEXPD9h6",
  "key2": "4ozwcywu6hZpk4Hr8jrim3ToD6jzmdFkLc6SHMAEw9TpVoPrTEyVpiBmnNEMpz77McYTNQgRH61fi4U4eNTAy3Vo",
  "key3": "2rKh4vRVKXRkV89Wsx3pZ6rtkdABtDPCtde2hCPvBgiDLoYuzHgR2ekBwNa6cCor1VfXFZnRF5MkV1KX1AezScuD",
  "key4": "Hqxmk9fFCosxTXHyn5h6qod5hMv1hwAkH9qfAkF41XVTJEvJTKhU4V4jR9KrCwoF3NoSntRCvCLaGGVvyhVnram",
  "key5": "4hvX4YNXpWmNpBxM7Q3QhZPnUPkM72enmX7pQot8exQV8nqWwtgPKoUzbXFRj4nQpXwTQzq7WGT7xo1BCJTrYTtJ",
  "key6": "2MP4AY8PryXXYZCiottUL8rnVqQBa5kyc5g2zJnwfFMAkNgVsQCX6dS4BMtCMD1PXyCqU2W1kvUdQR2ijaFJBtBc",
  "key7": "2wwcF3D3j9uKM52CFAk9vvZTy7PbLjRS78sRcKHp52TBUM5CzyV5khnXuB9ExFQ29YCk1iGfBMBErWD811nSLjK7",
  "key8": "48DXhz7PBV5DHG1LqkWmsRS6YgixeY6GSJ6U84cXrZi9bDaA1Jwh1CDNzhR1iq79FZ3qd6YoakPTgJEgNjiN6zJN",
  "key9": "5SpWeyZVdKWWqeVKuSy9cVKXCJ6JNXEh6kci6NZXnhJnQhCytsToB9Rok89m8rukEsLKVTx7us1YCPbYMntLbo7z",
  "key10": "55LSRbGMRMGY8hy9ZxDu3imqS9CSvz3oTnzifLUENBMmgDbF9kw1BNYSNYCJHqLSW3gxU1nfDZ9R1qNdHaAQ6FY2",
  "key11": "5Ki4MCLW8Ke5XHFXRjoQzuatG8MLbuzUUasFHcaeG4s4V1Nwnwe9NpuiUGvkbRJmR1GBkQmiU3K6QJE4KxZ74CZM",
  "key12": "5KGXYK4Fy5Y5ppqRDKfsfwdTuv6zBjsaVDKz6be29oZUFenykiJ4PQjtm33PkAHm8nfNy8ngWqttGPpSE9Nx4TGS",
  "key13": "3hMNyyQNvQBxdo2UzyTgC8taq9Rb6SR1L46TCCbgQjTfCuJ9uC6FG7S4qiU41oQbTb7m7PDPQy1KcztXVj9iwDWh",
  "key14": "2jNni64ZpJWmpt7xePg5dq3PsJhgJjYCyrWJ9qBxstE1WRSi1MSCaddxog2dem4bMSiZxMWLquktkniwzBdT22KL",
  "key15": "523kBzMUefcXuYEwzqGUkJNKLttGewLe3bgvcrxRfALUCzB311UxHcwoVou2RFf9WfiZ5Qce9b5XkeNcVuRQYgUU",
  "key16": "5SzCxU2JjDnn6nRjN7NjpFup4tPa9KRpBkBqdCrZ67rZG9sQsnGMtAAypN4hkF1ugnhJDoBTCDJsjv7p4KWQPoT3",
  "key17": "2fXyYqrBcMYn3aMRNHU7NVkCm8BsEusRFNuGfuyS9D8xzDm67zEM1KvbQvTrkysCbfH7GK41nUZrEpNgYFvmVFQk",
  "key18": "2bBm5sy1ENK96YB8HFs9fC7h4Z69qn1FAW1J27hZGJ5rjhnJZeNY9yq8QXCfrgViiS2FKY3w2DBz2XmM5K9U7BbD",
  "key19": "55DqP7d78CMdFrSVDUW6BXVoBGTApyDBp38rKeenLHE9vSv3woGfqmdRvewSVk63QaJtJnnnvwvJGp9jKkdD6NuG",
  "key20": "zUW7hjRBPXXkYiq8NvbZnwSHENED57FnYpqugyM4ZBC5YfUvL8aGqoZJZeTFFTD8TnU9dUCsSyBw7EnG7wTZAWp",
  "key21": "43bjzyME4WJexduHJK7BwiADfRW9NvSrV11f51bvpEfUrBT1VJoENqASAN4NRukEmqzFpRwruwHfvdoioUKub7vp",
  "key22": "3N2EeD4kz1Z3gSA5GutntRbxC3iky3SehJQNAnXd4pjqeLM86rVM5Yx6zCEzcvnuhnYMzdErzKbt1bCDM5bkrUjA",
  "key23": "4utXcQJ5ZZCaqtzCPuTB8jo9kRX4JW7WERKKeoLjHq863T2LXSJGUCbQRXQyeCK6nyyS89hBg1oD1vBvrfgqPCho",
  "key24": "5ZCievvaQBc6q8G1wdzVZgRAYJzfjgVouzoNDbhjy3Zihpg9BxQ38KqvaNCH8BJXGarjM5vrRgvNnaZqVzW2V2S3",
  "key25": "5tiVjgAgUhEbmbMYQQJWCDsNYt3L7xyf2ZPCU7g8sPcrsySJAoHoakkQ1tyk9U1xkpA12KUYzoaDaqDK5bvTyfh",
  "key26": "4Le2uUjjkbxkaVrNQg1uSXg5tDW61GcvVKZXXhp2XyK4feXXbdB4WNXNwVftGhkdvKuE8jEAYpGBWQMKN1AcA1xK",
  "key27": "5yqK9E78sNT51t98NWeXCi5LkBakz6cs4Mz4NMkMG1WGTRTzUrnfowtzzUCJv36uji2xSPhH8FZbJV6XPfZjbpMJ",
  "key28": "k5k7bN1ktry6fCDJw59giem7R8GCyYfCugqCCfDzfYNSp7R3zMboYr63Ej18svEgqWqrh5YoKPYPR7sVmq8xFUY",
  "key29": "3ZPnjrwDpgUPacf6JAfudhu35MkuzHuLR3biSf9rpGuVdLbUd9ckWCecYoAQ6FeF5N5gLeV1bnEkFkEGj4BvdZAv",
  "key30": "2hGTPqJYLKoNA4xFZFoEwnA7TVijYBMWoD4r9ieLVkGq8REH6RG1pfM6BhtfQqmpTRghWDMFth9DDKRs8vmzPVrW",
  "key31": "3qUUWCyL9ZwCSmj8pQWgTxrKAfGL4vk82xonaCsrY3KnCP3DxChPgyVsJVabfqW5fhzHVQWk1HDjT2VafsKxidsf",
  "key32": "4y4cSf1gY7QNdAXueEudJj2rRNz57akBXPkcPvqrWNfMicuWJWWeTFnXQ8d9WhoGY5Euq63NeuXQYQFewzuPvxqC",
  "key33": "MDzx3gS5WZhxSaZQRepKa6j1uAAoq7RDaqPHxrvXSuettFJgahuFXAUv3adpCC5qyNSm2C8UiGLR8CXCyZnqG8s",
  "key34": "5AE3ocDWtdHTkqCfDj86UhbT6QedS6VDiY1x6wDSvjR9SFwKrXg9EveYNS4Jc8hxY5Lkaa75u25YGpnGanHtru3B",
  "key35": "5xiV6JUThCwSHjvnSi2Gv5s9mqxV9uzZLv4sEkRrqMg31kmWF8HVczV2K9c3hs2RkXjYsvsQy5oqbigcoP5BDHRZ",
  "key36": "3QSabHoKJZQdRvFKcuEzQCBmv55sQrKBqjJdkZ4y2Vomjuzi2RiBvG1qBP8Qn67Co3ENgDE3x8fHTCW5X6rpnadz",
  "key37": "4g5iQjQCNyrGzGJRT3gywfLrrxqLj5cf4BwUMcNKHrhJNsLLHwMoNEJW7EUhV8GVaMQuA2naYkKK4SuGUANjmZRK",
  "key38": "TTkmLA7Gwf5zq4e5inwQXy4cF1K9BW1bwZHBmeoqvTXB3CqE1Q4vHJt5WyNsQhdg5RMaRH4StYVqg2E6vhCFJ2U",
  "key39": "2LmqJ4chuYqbdGNcVHBGvjpNtHGiupVFmDAJrHB5fHczCXz8U7TKUDiJ9AHYs4PLCDrW4BecVD8X3aG1dRtAnLMf",
  "key40": "48VxQFfCuFARkcMoAmL7DvaQ1ornASASAuAyiYv8X4WgaqxM5NYmzZdRWkbqK43oY2LV3hCPL372V6zWcxMSojvB",
  "key41": "3KoZQiDx4UQTTieUk97qSppjQjkZHB9iwCgBtofTsApwwoJ3ZAGVk45qjfpHL5VoeUrXoRudE6ntwJXzJHTY2mYz",
  "key42": "j3zWdq5PGsSbrXMQVqJZ9SMXPCS5YgNjGTiko6SmddymFmcrQXRZe89jCGBq7sqhdC7DXyDXgx4ZN3AKn1bmwWE",
  "key43": "5wkTmv6kHaakftqFLbBUsZs5Ldnom97yRsAtM9zW13oDkqWDMmHrhkiYysxUgzEJ1F4fwwuypmBzWqah4ZZLGsKg",
  "key44": "292zNJ7euk4yBGhV5FZUZghtyHHMmC3rdQLmQw1XQxeCc6HknmoeVmdjjcYUAvMw4Bh12qjkcagqkPQwjJFVwV91",
  "key45": "45ThqMhNJeJKjnVWaLccpeFHPMGCLQV5JoVc9utErb71DPZYYkZREAnf53HgC5SUk84UNqtEUxMyoytpPEGsdqRt",
  "key46": "4bDerBFEcsYiVXjsUYjBPow8cr32tSxktyrpE7JE36T5KkhMYk7MPpgcR231x6ABKqGiKpjhYeRnYpDxAPsFNjx5",
  "key47": "1fi5pMoM6Wdup5RBLWM5ENA4VWGirWNcyRW8mSvSqdjzDfQcepbYzhmHPR5MURzCBrgXBvniamwZA8J6czk9q6r"
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
