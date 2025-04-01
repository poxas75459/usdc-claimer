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
    "21QQkdUivsuZVnHJvdyqSxXeRDU2Lbhp6SYq1Se3RSHcdWtbVBNCWqfPDp6cAMbdat91HFxDUSB8rCv2MYGp7Uo1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2usjvBN4wAy47bQkHM7W9ZcUffZLzbcSuKpVR6rTcdYBCRmpmkZTeVCD2b23UvYa7cpsqWLLchXQGEK4GchAF8M2",
  "key1": "2hnAg14iVHgEbsQ4WEC5hc6ef4MAbTvchcjVNNcdY7aeg9uEpLo3vPRzWZvX5kJdVieN23QMcUVN5mmqmX9SBZuJ",
  "key2": "3z1JNQBXY8rD8QDrhLV1d3khouBVfryHDsWagwcY26UPAAxpXjSuYaifzKHTFetC3iSaKc8tJjJaLVSydV1g3kwA",
  "key3": "5ziw2fNRrUJiCZXRvTZT8TRugsdbYUvihVrd1UPabb8RrtFBZbnnMAUr7Yk5FH4ZuZiK7386fAYySCkjYsFGoXtK",
  "key4": "5Z5yu3RkrPfc7pXW1cd7VVPkmp1cJPYifjSJXG2Vjb4qqs9DaikbnSVNnAVWEkRUNe1PQ8nDLUkxHdQWekpuytBL",
  "key5": "2RhAFmkfLU2VCxVa5Y4DBqriFw2oPTLAKspvcttukXm8Sue1yT7gwzfMQgF7bPphi9uUzYRvE6DQh57x8cjKfQ9g",
  "key6": "3JXiaJVtbEd4P7nQQgEyPam1RNDQhbK5N9GoELkSindF42VJqbhDvTp5RBosAWQk6xYv7r4M2NVQJDxsLd6ZVzUB",
  "key7": "5i7staw3cecpCyy37rsFrL7dczWyhYFNmdjfhUcJM8HP84B8Vv6zAmK5rYtnwFrvQTWay4kgZPGX2p3vgfugHjZc",
  "key8": "2TaRbsD9G9ZjL2VrsDYtCUD9fjwBrJuryHfuc2W2YhrgzaNuCbcsQWxvJaFxyB3DEAyreurkYVqZxbSvzYJhU6mL",
  "key9": "57FBd1bQDgqXVRTgpU22Gk29V7ShiRaThnTqix9kqSpAhuWqt4gNH64VK9xDnGp68qxvncv64q2GEPMUwrK7PbAj",
  "key10": "5a3qSAdpmpmW7FzipkwmyBsvJWDtKEk7kR9iVGCq6EotkZ7UWCrbd1pVfdMx8XTghqi8Cd1JW3a652KHm27zp8ZW",
  "key11": "2ETNxcrpBNf4MWmVs4XF3ubRyHyur6vvzv39bQpgi4HoLhnGdUSARzu91swjA3gdrXCaGvU8ja1jn4i4qrVSTcGk",
  "key12": "2vNHdyhB4fsfGnmGBUmCQYYuSD19W5w34CyT7kzA5fUwzWJmBKGwWykPMUKe6VGoeWbwdqUyZrYYfMhuUr12ofEo",
  "key13": "5f1BqkD9aesAcdhsGw3zTFf59RQKqPRuWUQHMoiTnVCQC2KbR2TtALDyv8PB4dYPrcM8vToNxF3NbJE7RqqgyCeZ",
  "key14": "514iHFigxpjpKJBKySqSoTbaqBXZV5oQuBjRUYABg3t1bzdkHaSm2TJVgS1ajdsJPpJ3nhZemzd4YssNDKTgBNmN",
  "key15": "2YMQ7CFXYo4A46v6FDHjvgLYnRwdxbUhmmZiJfk8jCt3v6YuZRMsybbRY4uxkPGLa8CLDRx9Q8yvHWePZhFzgBcw",
  "key16": "5Ng4SwzE1csmMXgzcnnQ4BNR8XVVNVyKZYwTm4nC7whJU69btsEVy8zxixLrZ9A6Axqs6ifmqLJn8uMd3aS1Angi",
  "key17": "5EWEGJc1zoRqRPx1k4ZrhE3NBab2UPe7Zg81LHaLFNsNhJ1ZWPUZjU7L4hXEfDm9L3u8fr8j5D2Me8o6oZiWMEEN",
  "key18": "4UdX4Aayd1sZrWihqSVLgivPKe17fFFdEhWdob2K5ak7sctLsiSNBHvZwaoPgZLktFosVr5BZCNy7T7qwFHLGont",
  "key19": "4N1A19vcrauQdcieFvb86LFkLXcQ4EWP5BQTJKbd4dfATeACfSTT3pJBg7F6yAbp41GTenB79RgVyyLMWLW5sNbd",
  "key20": "3qq9AeEYH1GNNvNMatNSVkMubUDnG9PqSqxWpP4cwmwVPd52EisA3sYsaRuC3QsLfqeoZMUHCc3FR6QTtw6dBhJy",
  "key21": "YFFkhmepd9CC4CgVTcTLuQ4xfYnbMLs6Rc3SSUcEYEz3yKYgpUFvmMjJX9nZk8Y7Yv3zv3cA7NfJpPW6XPer9Gn",
  "key22": "5fpFeCSdUxqkJxzbxEYjZBac5jZnpErnsLc3gESEWgzDxPrhPVzg9vaS8C7Lqoru1ce7xmjjMexwGcexKr3FkYRg",
  "key23": "2dYjjaNfkfBzui413d4SRNa9Gbd7ySEVbVH8TtuJyc6HXH2ygoAdauajKUsWJnKBNRt4Ts1uuWnGdmfVanQf6uJD",
  "key24": "53o7KWP1C3mE99bJSHCPTxAWMLZ6yETfSWviMQkkBTPUSTwVUV71Uekbrci5h1Yxkdbucbo1G192eEKzJKdd9wms",
  "key25": "3syKdoL6atthuejKXJjGReGEhdAn2sjnkqrz4oscSYsMQYPfTJrENtz6J8teQKsGLN6iUgFQyBwhrnChuh9SrDzq",
  "key26": "4eMcR8hoYLMLPWfqAcjwB5gXAy1rsa96pptqbQKG57659xVN3q251DpfGEr7mvy7QvX1k5TshpMamyUQgYgbEzuu",
  "key27": "3NVcmzWzJwaPmARPjhzrtAop7URffFzCPoY1vA6Fwa3UXgKBET4QEwvSiBfSrmMyVunREBYwBNFp562WKNc4Jz1e",
  "key28": "3iBLe7whBbPbFhem1BTunXaoXgWHSNoTTamXMESJtyn6rgAjhsoQ9WD8DbqSSQn9swgiLXuBc2n6DBoGZks1941d",
  "key29": "2WZ5dfHKxu6vuXDqbMyL8pdqNk2K3wNfW2BFwQ9aXfqmAvdNCFufk6UouJtMfzDPT8Kyk6sTbXjEwdUnd6V8nX73",
  "key30": "5BVo39nxmiNuvCsMXUqsNDJJcFt3R5zChscn15kTsiJhkS6pntS7aQieGRuQrorRZALcFiNzTrgBFepuZo8xCfRR",
  "key31": "2uEpJbijx1s8RM6Gr4P1naJpbEmHkeLcMsgd7fdRjzerrkhvn5ab9kYxxNG39MJPT6gBsFCBnxs8ZeJDzaWc26o9",
  "key32": "2ECJqgiuXiJedmvEwzA1DtbmVq9mjyQwnNFTbS2B21zWnaZoWk7eQGGDJkfKhuLdjFqASuuMLyYvy9ZnF9aNqeyW",
  "key33": "4h1C479jJvByhypfF8Qm83Dj3WX2Vog6R4pSJufZu3PaEdjtC4soVCP6pwhHGM1FYdJ36rPfDKq8WjWH1JqodbVe",
  "key34": "5666V6JAqiCYBwkrYobbF9ZrtSjF7BKWoHGWNds2EHUCkwok49FfZJfypjyui98Asm71jpktcLeASX8DjaLi6Mpv",
  "key35": "9gDmPppk1L66zALcfmfNP3cjxbEcBdjhM2uUVkqsh9qrqmLkosU26p14nKT6gNYLTZ3mBUCuZTxMMZ3T2DToKrK",
  "key36": "2NRPWaoDLdUQrJPkTRCFexDwj6QKAKEbTc3VMGRxXW3CAkfGXXLvFHS8R4WcbS34w6j8A2Ex7PKCdavzDyzViozz",
  "key37": "3zfcbc1ADRvWAunck1J4GXnBg22MzG3o3XycBfqP1ME1VQKdULVLY6fiMeMLGoNKfJvgiHZt5RrGPZ2jH2cqeXQK",
  "key38": "5mcLNDt99dzY3WqD1dYDV1Wu1P25K2k9AuAYN4D1XUDPKZmTxXuy3bVqAD2J48HTVqvXTsbba7S9Apbb9pGyZ611",
  "key39": "fn9yqiqBUGXCWQHSGwn5Q5jaZTnYHgaiHfAsZJzPiQYZtJ5u6KBMmSmx8cLSqQxrbjdUiJh2KQzp5cG53Zy9Nqb",
  "key40": "2tsd7yramPnL11jEezWzFrk5EuKpXERoee8GnVCHxNTB4hkxUYttssFUa8gN4fRnUBw91HHbgYFaY5Y1iNVeLu9o",
  "key41": "5Ph69QSB33NZqMyLwusXpbgyFn4yp6Kd3fnnJdqZrJzeQHiKY9CLFnwdX96mz4qKNzBBhs9o9XKCxdJWuVLeDqJ5",
  "key42": "4u8acBXq3YRvN61A8uqEftrRwtKQkxg4wqEqn5P4bdc8EbXdUKAiyK911f1hTwPFywLBFr3tiPMy6uCTHJYbjebR",
  "key43": "3qWa1QJqCuk7yo7F7p5Fg6BUFPE4YvfyoigWeGThuPTpNgMnGJr6AVZCY2qddcagzGtJmEcgGuG6mxBjGTuhvVXz"
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
