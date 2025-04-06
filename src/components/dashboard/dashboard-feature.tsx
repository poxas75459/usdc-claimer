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
    "o9knR7AE9yYhrbabjnWCH5rxs8hkejLNzmBYdV4nRTc1Nf19JNM9nbgjUWrXZZyaiuLnAstmjEmoemAB9tLo6Td"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i7hoZarKW2nh4L61zXV2aiQGrNWhAWU25s5sXxZjURHg16Y2kyJrX7XnwBf7qCwFY4RQsYxWnkuV9wV9sLEHWSA",
  "key1": "3ujboRixgn616dY9oqaq3BoxqDp6HoS4WcCegkC4qQTc8cXVM7MkLtHud11d1fKYYMBEMBcGcpBuYycroutVDWz3",
  "key2": "4heKCzYSr8ugsUJ8DHzSZstrQ2MDYoma6voscWbvN3D4Bddy6vSfU4r7wfF4HGqyhA3YTemNPRozvuhzP1TGksfw",
  "key3": "31vNm3BCCDkMfNfoYrzp36W1ziXep7EScWvCGTPZvGsYxurvnFMxGanHE7UjaaqZgDoPEaJ4zcvAjn8UWWm7NLeo",
  "key4": "459d61WtRuZcrL3vjxtxBn6fgA5qr2w6TNmL1BvoCMLjxSLbPRRc61fbMw5rgRBcY26CVsT1PfDM2MyTms99Ny6L",
  "key5": "5J5HVk5tLLoCjHhYhwZ79NsuHqb77Nct1uLy4Cy4dZycr4EU8nekiPFXGtZAGAMGgCpTwM6aEHuc5Bb2LDxQZeky",
  "key6": "5xX5tBfjy5sCahBvDdSGUthWZHLQbg3bCMDBjqLnSQiWg4UjC3TVYAKBQZPLRQDH98aWuLijQ6u66NVqG6Sx65rn",
  "key7": "2jizHCV8LU2pL42oN75ezrQDSBTPP17q7uLeGSmjBSR4kNXvX2SVS257UtEvCsJzJsSqQRcLKr2Rx9JQF85C6A7L",
  "key8": "31EbJnVTT7RRz2J5HZhNoZFaCHpkutZ2JNirzG2QzLavAjFrJuJV2hCThCuMdsAPtxpRvWQK1Hxm2zE7zmdnQHES",
  "key9": "4yZUvJjhk3xFCqnk5EWPwtQ9dz83JayPr81DxU3b8qioEyaV48yMZrJZzeASKEubHK5pKEkib3shXX83PHWg7qkY",
  "key10": "5n3GokFpC8LJeHjE4u6FV8Ku8AyKEdWkgpCDsRaf6C2995auvmcz9vezDfQ7Fwaa2yjEuywRPEWaqachK3h3WCNy",
  "key11": "2acCHSmaqiFopeqvReWfwAWgUioFsBoY5eEctdAyF5cYyGFtxcX7LS75hLNApZk52H82D3JGPGt9eDTSWG1qKLo2",
  "key12": "8wXTEVwM8FuxVvYhQ7YKjs4nwuP4J6bfsWBK7udHdMrVtPUgr7ki1Z2jU6WqtA3EmsY3TvYUkvqNGoNTpoFGqpb",
  "key13": "2jWXSNdFTm8BWTkaaMfWPvHMxAQe9HxyewDh3oTGhuhopEc1Q1rCBwQFwdFNn3b8TXj1GGXeJhKXTA6aZsN2Y6AV",
  "key14": "4YuaPLYVXEeRxuSSHWdE2NejAXwc8PnsnCmFHUp5NNpoqrQrJLG2nCpTKN4MDBV7DGp2ZcCPb7ZGuMkuPdrLbGRr",
  "key15": "49BUwJZ17WrgqfAMQJKzyfMigy5tZRSnwJ76SEN6UCNiTz25pfaRSP1UibAzTfvzkCbp83xMV1ti2VhQ7167Ejm6",
  "key16": "2t1YqeyiVYjxsfYfsGr7mhVKrNwAXdTFCqqymz8VBNUWsMqW5V6SMW85eoQnr2kJGY5nrNeCCQdyY6w61yPF9nqb",
  "key17": "5YSnfWRYaDaM7JjasXbnWUphzu5qso288Z4CZJDV86rnFkHYWw395hKnQQApzeoefXqvDgmtn5wQVUCbhKzuZ8Ad",
  "key18": "2LSZnxXftKE3Do5b6n1tHzUL3T6LDqni7WwdSZWjiQ4uVrn3ZCdaxg3rKn5hbG2U96vkz1Ua8L7tymvt8hdMVZ9i",
  "key19": "2LVaFagFwz1huM2a2p5zzKSXn1Lr6wnjfNfd2D5MGcCW6uNhoRF6H9vfMWjAyYwTBGa2JXunRXE3dSQwbecTTzoZ",
  "key20": "2fGkypcCMh9JFD7XCLqGYKzVHfj2dychL6tuWMqixfKMpjMuFLwhaGx8wLrkVspZyKKpSfHGsdQsxjwFfeYNfkYq",
  "key21": "3NBhG3szhXoqSBhriCMD831z8UsLesXTEGK63t5qPhztHFe42QF4ZoFsYMwKfKNf97jMMZ4zQsfnu295oKSgNJVr",
  "key22": "5rtNJ173rpsywf65CQG8mEPzB8KoJTnbz6WAHckXo5jfrpmxqVXq9MHgGhPT47sq3FFBG8TmsZecsuY2eWGr1sgU",
  "key23": "2nAy2hZ6qiXXG8kG2JrpnWZ7pNvtAVnAk4AYSW3NcXUKy15RsqKqWtVgoDxGWBRHpktkg69my3gCbcMLCR2VAcGU",
  "key24": "2cm6U9jWUfee9rrkRVjiogSCvJbg1BpbbM2JTEwtpR1opNTJ31eWcLRjDufEUnrJxL4KC5vwkbnxicEknEXJvs2v",
  "key25": "mcvJXFg57BZEHtsexJBRJh2S9SvYp8Fh2jGFcoTqpihAFJyPagrUus9DHJUFjjqduhK4HGzEqDH7qSEHCHBY7tZ",
  "key26": "4rXPFkvx9Hw6PJ2DLiwceqeBziywP8VzT7dzPdLvxAyZJaowtZ4sx6RvdCqwudcreogFZE6HahzbjBVJHEsvYrVY",
  "key27": "4cuFswFujAkKfgCvjYBJbzGco295jAYPQdwdS2t1xZ8MHt3X8yWZHEDitGPkwoHDHghtYAxgRtPR9voLATtTvvgX",
  "key28": "s6DmC9gptpiAGs7cCWzYBpSgzkpPDwvw2VRbofeFj2Xj669YFMeH4eVoDw8B5fWR3m6c3Dugdfy3WtTLsMKfp7d",
  "key29": "4nTS9xsy9K1G7mWtCFYz2Jw91fk5epDnEYopqDUdJLkByF5y2ihH5bRc4Taj11aady2xep2pgr9xRq6Sze5obY3t",
  "key30": "5mX3v9VunSr8XX2G2VkweJPyku9yVhqtLD6Jt84Kt4W2n8WDNPf3o2dmQiJeiKhEwXAKRyTZ3P6Mp5eo3mnYsriz",
  "key31": "3UCYQm8W719nQr8VHddAgpvGnCs7qscgrh2X2m5sHKB4t3espz1Yk4KTK2vB5AJmLFGJJarWqNpUjBEjpxcyMY3h",
  "key32": "GbWQ9oyFgFhmnPhzoWgNYjaiihMXyWCQMyztVKpEQrhujUo1gYywjDGA6U9nkqANY4qYRpqHWgx3DRavt2xrG7C",
  "key33": "2rffzRHKy17ypFVR3RgYhdUwMj4UQh2Fe2TQwXZs6uc1SJG3zTosejQFqfRarANy45Fp8CtHHuMURKZTL4qUqKzn",
  "key34": "273MJFaFVJhJAbyvFoyafTYExrWNTbWeaSxvpB3WzEWkDgqvrjyTvMr2U9ZNGyfpFaLCEYiCFGUoJhRwJ2M6TGh9",
  "key35": "5DNVemF7RW1s9EMfpgrYAXHKVWKVfY4C2EdsrXELrnoNFQizSwvk2WUvYB35QZkcPNe1zMdKwanMjs6eoNsH6ZQa",
  "key36": "5AzqmJJ3Hvq1fD8DVeQKzToEhmwrp8ukbp2mXgn44KEDsPR5jNwXcR94ARJX9LMGMZb3UnA5biZJHxwQuA4qPRWY",
  "key37": "2n1S9nqEfXHDkgxC4aYPCuBsTV7WseKLNHFjZZSr3dbNBe7n4QKUa5JtY794gG6ftd13kH6dCjz2nVtSKy1wuJyt",
  "key38": "9xzxZ8CGgUejPibeZ3GxkVJssgyHqUbrrNvsMPnKyXyiMrYei2wmsJeuAB9SVmb2XBDKHWr1NosXQPKDx533WWj",
  "key39": "3ZLzg4xKSQjvcYogsT8GAdiRkhn12dh86jgm57hHFEbz5hooNNHMK2eCWaom4D5pA1qUKRCdc71iEjEKBNrE3EA3",
  "key40": "3LeS6tZ58JSpcNBCPJyQCX7rsyDhEuR1YKXmnCQEmLsa8bXaq1BrWA8u125hqeDRheNEiMNQgvajofg29rC64hVN",
  "key41": "3Uc9yZDABjQd82F5rNP8KYw14iYaPvV48D7hCDDmyg94jAKARKpzLiuyn1krxpjbXYoEzU2xNUuJk8HzGTQXNPUn",
  "key42": "7Q5mSnfdrrwxgSSytX8AtHUCqNTkVj6odNLYTf2aFHttwErKXTUrLeFgxLH3eKm3hkimwDLTJEaGxxxPgK8b65r",
  "key43": "5Ap4h5kWF7obY8qZq4WPjqaikyQAFawm7c1FZMyxU3pphThdYDW9UEktRF6JhmjHubBZQgSxwSCeyczgxKKhGCgT",
  "key44": "22rMHzMZHQ8U5nqUq13pBuszc6dy84Lp8x7L7Gj6eh1gHYwk7n5QcjAAdwBsx4WXuXhuNnxUAc6kdsBzuev8pcme",
  "key45": "ihvpnP5StYvknmCz5UMH4powhVHMw2hXcuFzp1E4YFE26df6c9ZwAjmKN3NTGNePz5KMZDQu3EqsJ9aA7gTLqdU",
  "key46": "sNtxLK2iJtZ6EiDBWsEx1gpz8BRh9TRxvPfQWA1fhDpuaSAMYbKQtFxFkExxmS8PRC6Mhvjgn6DUy3n4UB6ggst"
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
