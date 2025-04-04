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
    "2z3noKmWvqrTGTFRH2pa92GVqZsF7aLEP7QBUH95X6gc8KvkvCXDAgWRyobTTBihtiiiznWTZeyYWP1RsZMPXgQ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g1QmPr1oNxdEvLtDeFYcfDAQoosEeTf1ppLMrGtWRgqWhYsBeVCwTQoWbLeUER6xHqTYMha2wsiBCxhGeAvNRVr",
  "key1": "5Yv5ZP9gtJeDT4Z6r4QTEJheW9r8sk5Xcg7wkWtibSxmyd7fHrN4Rzw9uD7ct6dc8QLr4JjzyZbxtrCVoHu9BytB",
  "key2": "2U5pKCt3niXTJsF5ZwVZLP5aBAWMWAWtAGLw1tZRMdEs3S2DfnT1NexxNCFiVAUaDFyUBu4V4gpEomtL98VNpX5c",
  "key3": "2QcihnCJwQRQSXyWWJFbZ38YkF4XcXoZnwKiEmc6VHVnWdmci5bxRrk9g8WLCyAa2P7XTUwMxoaZN4q45Aifw4Zs",
  "key4": "4xadyGXkQc3YmGM4mHLMqqexDbAj4fLZYuQbRJauz1Kf7iVqhQo2B12wxs71vMJttrS2ikhQBMSyLwiSTRkuRtZf",
  "key5": "2f1Nrf2BUCzhj3ke7i6Jnph9f76H4CBYaA4rqJL3Hs45Lh9R16bgJwMQkBHpXUAsvU1Y7zjb2pNYnSHX8jeni6At",
  "key6": "22JNJYg7wk3GhN9GG3txTg1dRvhsirvHPHLFiYBn894WpBJ5KWNdc9we6v9XTxveGzq2ZrUKz55353y3xaQJVJDR",
  "key7": "2aFKcQu6WfdCLZXAhWEwe4qCaSuZd2eECfxS9bPJTBHqw3hdpgPHHrtypewHGRHYNx5SMdrbKFpmXJGXKLJt4Vqs",
  "key8": "2Y9Pc5ucApyATBNEHsg3Gs7pnrLbYqogoCJu3emRZ6EcykzFyT1V3AWYCrec5uKpfexFL6Sgs3DyPQYw3L29nqxp",
  "key9": "35ZtbmT7GxthcX535kuboGtgfYpCEDmJxkdQFqyUEDf5vKEUCLEbpdsf6c3VdrDo61YqGu3uCZABtVTFsF4SY4Hy",
  "key10": "35T5MCorHJSCv1m4KRJ3g1xhHiJdeoLCu2iT5ry3ef6yFnc7wvMzZqqnNEsJL6aaYHTsZGenXKhqqHnJKQyD58cB",
  "key11": "6tfhRTakySWgrq2ZhH1VBQahQjsV4XPdaJ9sAX72m77Vc5TmxRbxJuJ6hWzeftHaMf5vQkjDtoFE2oPibWaQBXC",
  "key12": "5stVmZvZnheCQgppn9m3LYys2HcX697T6LwEuvbbYRNyCZKjoVQ8MwpqaYDnv4U3V5PKKeCVHGbY3DnwTvK6tw8h",
  "key13": "5SHpGRkF7grugRa7zciELKfeAuo4rHajC8JpajcxTTnvjUwin5JVb5xTZJgkLSCq5fJLL6N3oA4By6GZPj5CN7oN",
  "key14": "4SrkXgMBGd7FAjz5uq6ZiKDMrnLMFFGjNa7Mo6zHJpCi3Z9mSRjZqSUpVpr5HaYPJYKqUYxATAp7AbsuumzVZk7F",
  "key15": "4irYqY4XMLWvqPfchhPq8XX843GTiEbkaLeaRaTbrDoMhHyd4agPxtN9KBKrHSUWhSxA74rffVV7kU6fW3Jw8ZdS",
  "key16": "toxTtoTbfuKPRg8CArw135Hahk4KLUKCwMb5iAjUqKcu5MwyNDhViuy9Z1K7ue2Wkc5dzfc3r9Aah9UMXUiH54R",
  "key17": "5U6R546uMfsVRrqAsjfUx6AXf17tFKh8Go3kgfz8aR8WWBArtURy2xiK73NGQpBcKdoG8vYJZegVZFrq5AhXgtWD",
  "key18": "2ogKpSsxDvE3q8RbL9AJnA6rz6wAC1xrp2hvGhHqhU29hunB2TX8Y5uRTgkXQurd8eoXg2XQjtvxhFNky3cNt7Zf",
  "key19": "4uKhYfq66d7We9B6prdFKQpP5BXZottm93E1kiJVSEh5pCTyjmfGcGz2iJYbsVk7972MDKrLpcKTVcrMsyYyBiXN",
  "key20": "5SknY9oqu3tsHhXwihTQL5as7FYNoRUTDuU5Vbsa7Nw7aBDZQi4uQPkrUsXvcbqt2m1DGftJn613DuAemTk9E1mh",
  "key21": "3PGKjmp3oF7sxnybqDV3wR7x68RMG2CyUMx9KVu9vkXyCw2k8c9nQQ3DGNunkkghrmssHpspiREZ7TFMAwPLMSFB",
  "key22": "4VmURVdE6KDhDhmAx1X9wtbisbTF3DdFGeBwfngGebQL8vfS6LdakgQqmpUL5zCfRByjDkAzQvZFXg4NE2NNPQfZ",
  "key23": "2PMCPTcwJntdpydjzXArG6fd515jB5LsWfSA7ggUQN1CLkMR8vdgYcq8pV3M4zmM2E1wEAHLdmGpuPtkNRQNkhke",
  "key24": "3GoZgF6nK5s1bNxkuUYwyz2NTMVqfTsx9WAmq3c6QYowGk6kvzHxiA4yAjXE3J4NJhStbKEeF7vYWvD9Mrfxne45",
  "key25": "4fjwJEthnEDcDqrPzeVkmhFisEkE3nrYomCgjNfFRPFnuNNbNGfksreT6cXb3YbqB2fHnzkhmLSAu4XmcD7QYNSs",
  "key26": "3yic9WWWk89pxCGqJvYHw5VDBxUFfEeE4yfPGBdWYirKg2N7WTq9RnR4y2WsHcAUbzhsZbA68wJ6VYjNeCJKapE9",
  "key27": "45FHrtCe5DAT9BuYnBXVnQprDDhZBKBfGM6RLWkDmbiUtFuKeALxBgXMm1fgwkboGeDHCyc2rNr2FYBQHViFTYx4",
  "key28": "2fmeMQ2BDXq7Lj66QRv5PAZFerdGrxp91UYfFt5eiZETAX37dTCSthDKZ6qCUR82tYwDcodK5jhTUgCsFLbGnaLe",
  "key29": "2yG4TZk6nBFsb9wXYyJNRgrFzJvR1yJcCeKDQEqvSXeTLtM5ddJ9e1Ef5C27LyyLkKBHFqztGPK6nQ6RSpG4292X",
  "key30": "5PgNxAT4NpbhaUa1kKiv7hGNFdqe2ykSE9y5T1du6nQUbmk1eqwmg8GhY2h2PqfhRQkFBgCqYiRXPUf5y184Lp18",
  "key31": "4fr4YTrK3pfALGuG585SXT4JsCZoWibwQY5RURfiATihKfL4NtKYM86EU7kvNCMho5LN6s9TDQs2Ysjg6m3Vkn56",
  "key32": "476XFzH1Cmcqb1vCzDkGZB4PdWEj69FZahUQ8fdqrsqmx4hYiPE7eWRrahAts1n7kAEiqD6tfMMKW3nzQmUBJqnZ",
  "key33": "5DbyEjH1q1fSeZi9Jdhv8gJL4wQmX1njAm1CxS3rJaUXWxRwJbCDEXohE2qxBzQ9esExCS2LvSvxZWV7hXNEkQZ3",
  "key34": "4CsBZe1hfbxp82Acna75oEcvVuzg29Nc5b2yYo85r7Nxpx3hKac8L8D2rcfkkvmfFWaNBJJAJDTmw3FqyeUpWjGE",
  "key35": "2hh5aSLqdWMgbGjYKMQeUwD41gKDPiBJAGGhoEwseme8DS77cia2EVttQuFFwf4bb9rP8ULDt8xWNHmap7Z4kDZH",
  "key36": "4nX51DrDWwpPH1nR5Kx9xjZeeaRjfYTpbEjNUWMojwCE4CX2VT5WEzgszKHJxmuQ6LpXLMgrgQ3vrTvyQ1Pk4w8r",
  "key37": "48MVWdfzk8RW4NfucYsDhk9B9jYVD2dzpWXyRJ6jtzptMiCz1avzTM4ACUbfQ5VQRsMV3HWjQJyVNGchNjqkY9cn",
  "key38": "Vmfgf7ZzhoGoPfiF315hHUpPpGwHrzUTJZb7m4x4wFb1M6hZwGyZB6W1Ms7xQjJ8PZ43hoSg8MnQDcLBfvXvFfn",
  "key39": "3MKGe7tpk3WjsP6CKbkc3ES67x3VfQNQdzVvCuzHffLV76yUpN6paGcK2qwyQdiKoMsKwxFzLiSx2PLRLcacHUJk",
  "key40": "odn7hKgehoSHLUJSZar71e8moxUoQDKmJGMeF9Mv7b87diBKDMKcxxKWD3kuh2TLD7eibcnY8mJeyQxG7Hvv3eP",
  "key41": "2QXuPSy6H8kihPFAQVCPnzaK97Kjimv323sorSEhJXtaFpPQw24ZvVMEjVsP8i4ALDwAyoixhsz2HNKR59ENtHJA",
  "key42": "3XAgmjpeyy6YqhWMxwdsy8DJrUr7cjjnB3u3cVgLhVmJndFKxJfnBqhdX6vrNsK2xAQmobuX6hJN2sFkr1fSHpMp",
  "key43": "49cfhLC4L3qffQhMcELxKrXQipd57YvXSGKfPsF9rwbLP4hbYTjDCorY767RafHnPPANRgaQqyPD8TQh35fDtUAh",
  "key44": "5j3wAQnTHWCKYCKnzExVqJYuCZ8j6Kn77QRcjhp1LkrqH2qStedM1ePK93sG9zbAiW7KeGkbKbhCuBvVNjwfJQML",
  "key45": "5xmpKSJ17rRGAsf2jpFUzfNShMm9bEqPswayzpqfkT5QhE4bkhjk6vWcTdvJcdpCPhyxTJJmbh9WCRdyBqUSiaQi",
  "key46": "DBV2rpNdZujQ3JN1hxZCHwKSqMHDioM8UaJczp4SxW7v147LaWNhPhnqZuueWKbYMumhzWUDEBjkmvCzFVVaycN",
  "key47": "UzWKCL8rXWZojMvzLivqqUow6iSkEpXxNoqATGBuEVtVnDJad4nvhnCVA3BD1reLAiy5Scin6apYW88fpdGAcKm"
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
