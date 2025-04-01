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
    "5SvTbT3bRMjdHDL32yXKFYgTr8nLJMYVkcyWnkg64rAA57xEDEnMu8YH5b8V1vqWou85dzKf1MDYbMukb9H3VMPm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b91MF3e5fje5PWPKirMFNWEoga8zczPtDzHEqE27XLh5W9Q17v4huKHfUoStdcsdFVpb4w8tUB7nS2puJVihMs",
  "key1": "5Bj1iDWigZk4Tre9uPdW9EXsAp9fWMuNEtCnfenkgRRNRjA64chndq9yn36dQwjV2ihSG83BY9oYNhrccfpap7qD",
  "key2": "4b6qk5R1QuFLQKBAHkqgFkHDC7ycchqz4FNfR3hQahE3ftyG66KFCyNK8qgUUAMGMDGddUzugABPGaRWTKjgXod",
  "key3": "Sp5dW71ZT6N3J5hJeoetg3iLbd7ToynLsLtBFn4LGA7BgxMwgRvWno6Y9yNVdTiuuVgzfkhNMfgbWSTHTY1QMgC",
  "key4": "2aYxzTYGDUdT3caJHnUcaEauU3YzdYQHsvLaoJpw6QFhpjxZtLyAfWMmKdsD9X9Wz52DjfLbAMbqRE8sSkhSs3YJ",
  "key5": "GoHV4o8Qz8SaWcSz3DSpRGLmy8G5XJnGEoMoVARQiJtiMGkQGXSRe4aUDnN5MRh7Ff3ouiDWXLMJ1HajwVRrrWm",
  "key6": "2uLHuzu9vFvK3k1VKnTVh6vMhGsSyy5MjfKnxMSB2nZ3z5MYVD6CVwWFxcUqhjLMssrma7ybXxeg6j7FkChw8NCG",
  "key7": "2RaQpxXXg9SazT1DVzLYrfw9CFz9tgXmd6V6L9WH7S5UNtDq6yexJWxPNtVYMgBmgv5gqnykDobodje3TX7Auw99",
  "key8": "2GhEMKtfC6Rjkq2c59uGgyemyArQsD63P1WYjzW3d79cXtMS7RiCYY5r2H6DysQocTNwigDYaPThU6P6AWH6LN5B",
  "key9": "4Gqdk6YfhtmLLpGsPGGaPuc2BjXLxmhR4UkhcN4Hf371XULbptAQo1t792yquBgqvWzt9nf2uaKPMucnQsnKDhkg",
  "key10": "4HtHy3uuW1Xb95hThNxYRdw5TLsvSy6RYjy4pgui4DaowM3sKc1EbNJhMGLnpsLN5dhZsy512FoRMkuQu5a1MuTr",
  "key11": "STWPhxFpj6DPdVv3KNMu3BhCin2q6jDVyLMJPq5aZiVEiTLnjQfxZ6YApTK6b5xJ7yACx5PV4RvmAc8aPx7zq9n",
  "key12": "3PzW2bjpvRA2FgtbHtDUEhXsTyARS894p8t4XWg8RANKbUZemLmdztnih9HVrwxgp197M49oXC7fToza599R1qD4",
  "key13": "61Kg3sokC46bXJJDrtM21hnfjXSocen75xEzDZyfGxPtRb4wCuVXwyrDoYbmTzgRTzH3pzsAZcoe7XYTcQQ5Mwjb",
  "key14": "4nYudNWsTrr1dH95zHbpDUc1NHC2jXK36UsgPxRnwnbdDu2iZQXaf3Emqzs57pWQBDHGkF4KDybHKeafsR2nstUi",
  "key15": "5fPftd9CgFVDMuZFD4TJcy9yz1nGiBYsHS2HyhN8mrV9xZcxXZWpWB7ZbS6mocrgvQFrdQYgJZmaF96p78CuszPZ",
  "key16": "2Ksobz7ayby3NXUSSFm93Mmx9oxFdy1RA93iT9BPEvwHQrWMhMAf7HtHTip8v4bQE8nNndARwRW1YAHpn1AP5q7p",
  "key17": "3R3q4quDXtbETKBsL8UWiiJWj2ivA1gXZhwGeuCVhjrh8TEwC8HmS6pzkX7g7rnRvBn3qEBVK3SwwJhc5y7PMCUm",
  "key18": "4LEDJUUvG3c7ybjtd1nDndQx5ZDP91fpDC4FLyK8RGqzc7KP3hsDPzKrwdpnZA2vo43HhhRZf6C1MyF9VzdfLGSN",
  "key19": "29BaMiYn87U6Zjurxoq4XU19gR7DVV6rJ7wWsk1dYiTBi267z5D1BNV6qU3YtJP7M9yseCJXH6kvhvADyxoLffum",
  "key20": "2wL9RLokVDUA4c7eLUtz5Bboebr6pWrXBR23ngnF3j2TWeRJqJGXT5NPGbfgJGkjSEmo3QXGAeYUFsgadUCtRnJy",
  "key21": "4kAB7gDHjpGXPvAfNXLWvP9T7h1QGjUiwAtveTQDwiajMgF3BWcwi8fMMECbSnw8GNis4CPEEcrJGgaEAPbR6UZA",
  "key22": "YBjofMqMLHq7oiaCcRLDCUaiyybvWsjyUVzocTLZv5hfsVMRzuob119YvFuL6jPGRwNorVodEs5HF4M8L8H8Abc",
  "key23": "4F1mbae93Z88DyG4tLZ3gYjkS8hBMytC3mXVKPXaXPQVdjGmLpWZox7ewzRgNunePFhDtNfbrXyEYX6eE1G1UNpD",
  "key24": "4cLnbakuy4tSQm6nnxB3W9Q41VfDmcAZPHvE3Y6nQDc2sHT1SQ4JPmYEW2q6tsaudNFism97vMSEVQiwyy64qz8R",
  "key25": "5AbRfoRvmvWeYdz5Lk9jnVVwpfPwmmZ29ijqjgjzW47QSqVjZoSxjTPy8JkNjUTD4pSVUryNhmFSkAhFYe6mbCfi",
  "key26": "4cFDb1vKXac5TNBJi9Basmb7Ng4xXyiCfndUh8cidMSwTn6SvPHDQtZ2qJ6Nwe8WGLbmj1GKVgdWL8AAK917jNcF",
  "key27": "3JHhtwiWtZJLJa4m1jfJ4ep8jJdWJuWj48iXTNtvrJSq2rcMpprb9a5A9HLF42sWvMQb9se9xTMjKfoxbH9X4C13",
  "key28": "2hDg1tjL4kqPcjo89EAgNG1W3X1wfnfrtkzawVsNiCgQ5nukPBFmStfKbLHd7FqAXCi4FiM7m5pBvc3e1h1s4oJQ",
  "key29": "53x36UWPvwYrQhSgMyxVPQ7Qa2TYQ4e4FbGTzq8Kb69ezW4FvyTrWUJQQGLVHEjCXSJmNfLcSvNhYu6PPEAazonN",
  "key30": "4imTEn1sqXU3hicJSPr7Ja3fmD76LXWvSDgVPjeEos4qvXKgzrddSZxaQTGa3xKgobX9smCDVwEpDokbTmfT8M8A",
  "key31": "a6f4Qqc2z2rWfebE6rCsnPfR5gBPd1gZCWoajJDi3TyCYHpCMvLbQsxZjDUVPSEAYzTwXxyeVNuuj1nNLUPbFjM",
  "key32": "rKCd7zhFojVJtmuvYffEH6wRnNuMDL3RWUsaf2sgvw5UNUKzHUkDDyqj9UfroqN1WKvCdKDXw3ygjx5oRPBqn9L",
  "key33": "2ZbvxjzhLyCBdryoMrWbBJt8BeDhK1xAjD78ckq9XqiQLYkRDE2Q7f1bWrEgSYyxWrKTBoXNotRPJg6nHHVcKMEd",
  "key34": "3G3dJ6Adk1ayfFXkexDduW3kzNAbrZXJGuUuZJ89SvoCic3R8WSxM72x1rsPtmeEUVteFsbhX9ZNFfJkCchixAU",
  "key35": "4h1vmyDnAdo7UdQVNYSo3SwKxkgTGGrvvaSCUzzzJbh7mrtg1FSidok9TjEt773eea5LKHcuVFp7JsFgxv3V4nET",
  "key36": "4HKz9LrWBK9iHi5Woaz2DYzprUADn8SCuib9wb2XrRdPEb9Tr4r9yZU4k89oTzGeqcACF5jK229GvKqWLdqaneH5",
  "key37": "3kaVJTAH216xfExGNQZauRzZgzyWk7pygnShuJV9sQ8QicnHixzzdmK1e5kKLtBMEaPfZp2Uxa6C83thxaSnjZim",
  "key38": "jSdMRwz5kN3CTuvpCCrdNFZ7PmQoSK88pMvtANRB8MKrpfnsbfqjQ4jyYLzw1bhN8wdVsYfsDdAMposKMuGai72",
  "key39": "3EePCTsRgZUqX8QrTMyuntKJFQWSyPDsh4xXgh4uVBMud3i3tuYkabH5mYMPKK9YyUq5GWLaQE4dmA1vX2WFEM2R",
  "key40": "K3WGERDf3Vy4oa5CTJNJ248H6tN9iDWbY7AZHVdJPdtAPHWMyGy3v7NG8PEp2kZx76Jkt2E1EVrXTspp8FMF1L1",
  "key41": "2swzZvp4egEJGMFjzgwiSmiQNHJApV3uVLHEouvUnVzXKHgAkd2Qf8TC5TzkgZUhpsrAdKVNLcv4mDpCeqFXh2LV",
  "key42": "26YWNr6LsM38iLPuxX639FX7KgyRHRWPWmYnXjwHMkCYENrbWAgJUoAAoGRhu9LLQD3xhjy5HMmDsfGWg9cjk5EL",
  "key43": "326MD6rUnsCfRgvdcuyaJctNKioEzkg2rsJo4oEQQa9pwTqgZ1UL37MpEvoWuf6HR5RHX8G4KNx9b1As19VNTsbw",
  "key44": "2Qgu6ZYorV8BBZz73reijoHJxN8djdhT1K9TUH3LUL7mJ1Dr23dF1sn6FS8oy6fh4fgucwuy4gXKxRyLa61hasV1",
  "key45": "492Vw4JKw7mfMVypZouRgDThMcTwxYJ63hwUo6tVTCF5U1erzQ6FjDVpp4yGQA8qvfTKQqZBRVyfGCQq3oV5jivN",
  "key46": "3J7Lf9ybSsJG7YGhRwLWBgPC9SqezM5WDwciDPJafNYuD1q688P5rqa1AsvkirsqEoWgqkkdvJq3Zf4wKDRabcK7",
  "key47": "2wXWQs94uDZLh6FavrTdBXCPtSMqbvvcYEQvqry3jc9hXYR4vqCenJQoF48U3owk7ELBZYZEjHCmgfP4L4YCenb1",
  "key48": "34caUEcTnF2cKo6YFzRRnRNQbKUscUjoCskv8p3aiGeAyVf58FKXsDcWUEHru2ZSWw5uUxrgJUsTKafmvVAziBzz"
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
