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
    "2JUgiEFX3vNtZxBeiKYdg3bjD484q37H5jFUFzdGTFzCzs4Ygjk5JtHgviUvczLjUAxBrMiFJ87PSiaPYnPJjAZy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eT5atmcfb495iQETPTJvgAGbUzqctfJp99WmxE9AVubpb5MwAAQS65D46ort3LweFAq8hSYzWys7am748RAKy8",
  "key1": "4KiAeHCBCH6dZTvjJnDAws9pg9YaWdV1NKdPDCreQUquuTyEjA3juckXmDk3fvwJKuGmB6eVpBj4qu4ZbGwQvwmZ",
  "key2": "4TPDzsF4o8pHwN5owiGm5QGGvXHQUNUVt3CGVXJracVKgPpq49fjgFrfZ6Yd3A2AucRPRd8obasJhjGsJ8n3HZ5t",
  "key3": "5aKXC6bVTvciKUT1WSB8EFCw2mtdvDhjjxVoA9oEg7uLny8vVtQuSDFTM2KnYdchjTfSVgDgb5jsgvUEuLRqTco1",
  "key4": "3Hg1VzL4Zr2ck4QQ7bxhBqwGGTn487LDx4nDNRUhiv1pcYtcaJfGnpTrwH1DvHMcpms1FqGoGvYVwKfXKkeU1HaQ",
  "key5": "TV7mvUE9anMmXA1ewyTH44WDqGyMbdxjWkoeEHEYXuFbttsLERYa3wvNNyxsmKE64w6ZYoEHeu9CtFjwmLDwm8J",
  "key6": "2r1zkpFjWzdJdAG5oKH4zmsCKFA4snKXuuNb4UvQX6yoTMFrdke5AnUPXiVTB6ttxHpe8XH1Yc1UMx9Goe88GMC3",
  "key7": "59MMeNA7mrakaNv2vtBjHZZakgvMdJhzsVuWurESKAyBD5SnXoeA1dwhwvSbsAWku1y6WJoRWwdq7YNCMmoRzMCX",
  "key8": "jbut46N4cKQ34tRAL8JCur9w6pSZuppFK9Hn3A9joFVvbmp8ryhUiHvFPwd9qUsZa75ZNr4LNQAvnexxYjkq7Jb",
  "key9": "4jwnNoveucpxQvApvVfwubiLwyU6dLBVNedt7mvYSUbtZaLAMm4AViSoh5H5RmbdYvgbYoS72TH84cQ5KqmUezPG",
  "key10": "3t6bX9JZydkTt8uujoUqP4A8jH8DnBK5GKHQtXB1PdMLNh2ZJrUufvVBiZPs1QPdFGeUPExLnBW6V9bVLf5BqpE5",
  "key11": "D2S4gaufGP2bWQwZGgXdUVVVEcrsDYMrjxEnHENhviqdJMvur87Yr743Mm8rCK4JdRZLQUK16imvScnDnaUnPX7",
  "key12": "3jwv2dYuREry5jSzWVuxvC1CZGS5ShYcQmYp4iXg9fJ6dsZzJvW2F8SaV4gpPC2D6RfwKggZ4boiUU1SYqDUAKMG",
  "key13": "2ppTQTcm9naSTxD34BXoy1qV9k151j6N1xhSxYE86yZNXbYCuePrfpKvkU4RM9tVMH1vJNuEWYkSYENj2VEePvoC",
  "key14": "3tPXrufo7ySggMQQjQJawLBCtw86XbYGnynS24XthyLd6p3kjc1xf2xxnBUEEgT5FedYtdg4y94n3Dh5j8QFhb5Q",
  "key15": "5XGG7Ty9vY6tZkWeY7kAPxX5538puJGdJTobsuK3GUwU2S6qsLCYMm4VDrdCpuaH7NWcr8oM34fQT8bUhE1dfhpZ",
  "key16": "2KBCxWSpufJJvANmrcLVGfcrbqicXvML9rRVkXzhQZGViYY4kCiqUJUhA1n2yMzyaLbeiTTJvxhereXt5Sv7h2Zh",
  "key17": "3BjyQBi7on4BD5Uje1aSkGwpvjecvqQburQkv9A5Sq5848UWCYmzjG9fHNah9BdvoupwHQG4rh85z2Xd6LKGDBie",
  "key18": "3cEKHjtwoh6RiCnerwHHwGCjjXEZWX5W7kLvZQTVwzdUs2HD9B9ZQhZWTqGWWTtSA98Py4jaiFi6R4kkugXrvU4e",
  "key19": "WVbcEVZq7zpuMXQyHQ8zUhfzQHxjvPFLZQd3zQSwAvF6t2ZPnv7AEaqPrymCSX3ZmQpsU5QJ9xsMkUYjqBdusPy",
  "key20": "54Rb8NKBRVHm5UPKYNu9ZhRb65UdHfdBrryRqWc2emSB5qmH8NgghAuDK5osidEatGYTWc7pPn6RojG7vndgCbcR",
  "key21": "356rjkAp2mQQCsDapaj9EVnQ3VVeJMN9wPoRxBWx2hFVniyBxnE2WE8hVVV7Vs1SoNzPenQFD6FuFNFjMyKeMicY",
  "key22": "2WoDw4yAhCaDGeKfo3yWwthg989NGA52iTTEficphvRdVp5ARBAvjzqjFF6RpoZSuWbzyRuocwQnVudGLgt19R41",
  "key23": "2N8NFVTVJKvPDJBWYjwfJaL4FViqM8AopcB9RpJvD75QvKSwbVUUcDWKrvwWvK9NhVhUjtwPQ3wKtD7ZAB1PiXmA",
  "key24": "389ipQeDRUDNBuA3BPaQiqFn9MmXPHfhhMswTC3apnhSnh3i2X6oSzq6cD2r4MX2eV2CovNbF1Tfxwnh3U2ibCKj",
  "key25": "5Bg9GQGvnZfWaQkvY27EUt7TYGhyDm5C4RR7YYUiNrWSSXHvxDth4XRp36ALYX3LdXReGGpLNL3ja2GDcUyo7SnQ",
  "key26": "g5mdS7rvqPyBgFczn2YDB1TJoNikzWJ5C9YhEwHWYsTzsdEypw1wJtWMHL2qLqwpZP15o3vFJ9pjCkxYwGF9KXA",
  "key27": "4QgwGk3SeBBh3zLjyR3GHuVFKUroG7Jr3USmGoWJf6zZ4HGJ4hnqKW7JJn4PuUuH8uEhALw5monFcgjKo9dYvsfM",
  "key28": "4G8obHD4dTcVBjr9ciHvJ2zapcCZ8i8w898mmMjkFowDruo3TEdPyoSdgETAW7V2mUH5XNcmpyMjRZwSuB6BF4vb",
  "key29": "3X9JfQVsYtxVPA2v7TcwSppBE4JPdNPBfmhzUWWHAfE97sPzTZvdKxWPKeoy2CGzuyviF3stsnZ7A8oBtA4jb7Ej",
  "key30": "3oE28xRJCAbZ4LuaNnX4ntyGBUCLbHvuzJsV2yErhe16D44RViM7JH724NY3rDStbztu7kEYTTihXSgX1T5JfQ9Z",
  "key31": "33GTUQT5hGNu8y8JmC3y9aRk66s4R9NMRJoKQsGW9yxWxLXiPY8r832yREH5DVvQMJairiNBBrC4ZA2NyN3PfoUH",
  "key32": "4FKuoYbJ3DKmX5tsfB6u44p5uT94NuiUQhdvXpugEoR9LpHU7gkrfwyMaVMrJWR5LqBXz1cuENE46zFg5q9XhXSR",
  "key33": "3oW5HcWTQWsQYc16FPWHn4Ah8h1AZ8wvfCoqnt9kiYKTeRUBbeuMcZFiBdXCMdbgM6BGY9h3krUHBDuqGqXKHoz3",
  "key34": "4yd7GVcMfyAmWAihuGzEPvwURkp5yB5vrv8VqR2gEkq63WK1XW7ZyDUcjKnyYa2gPNPhvWkKbE95gijeRTaze1sV",
  "key35": "2iUoepW78DYntUpmgrsHscScNEpuuRtpA3og5SipeL23mNiFdU23yQyFy2GT64qgnFpnbnvBArUVu9UsiMjc3P5b",
  "key36": "2tLVWb618GGctMYvkpCxiciQvT7NZZe9SG1vVSFWsqqLNGb5uxpqufmdzVdKcU6tbWmyMhtmyppPXi8ArbXy6rrd",
  "key37": "3iKaw4tqQNVe3if1wUmZx42gghSYCSjose4Cmgdany1G6XM2S5PWWee8bHptoKD3ErfyGz73mckaXjuWGqcGYGjH"
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
