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
    "4ovgLYB91h4cGcfUERMpedQkQvwKjPTpgRQkak2evdNrXqLYN44zHHqufLv8WUUX9vYKey11jLyFfdn7sB4rkUiy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AUW61wjRhzxsmA533VMjivio5MDxBig3XkkXafVoBx9JGbR1y9fRSTfoRaMxRf3TJ8AMvLJUnEeGyuDF9stKiep",
  "key1": "pnKsXVkWeK7wx4APnAJePKk9YzgyinJqVXBdwPRQbNtGhHTf9CJhptk5mf3WBb6xRUZ4PmcygNLDpBEt1YGiLSd",
  "key2": "2bKFPWjWoiFXAeE7FWiVifAHDbJHHW2P6tkW32kFaJaUKrxxeD7yRgSiydmJPNseemQoSJJ7QVKX4JcCYGAL87nU",
  "key3": "DteDVMERMprTAzxsx8GQLyPBUPfc5q77R8mcSmg6Y362WLZTA5UnNfrrmjYSqw6X3EvCdZFPeqXSgWqiCZyEr9e",
  "key4": "2429M5hQ5pnm4QE5VveY8YmfsLRR47AkcCfaEDqLXM2jX6szFP3SaFwpSJ7WUEasVowiqGmvrtQu2AvhTTQEh4Ds",
  "key5": "4GzVca5TdBHHRXUhd47SgJDt83EPiPP1NzwtwKC1f1bD33Wd3QqfpPLC9rADxFeVfSNEHaJSCeMBno6TSd3XMXXr",
  "key6": "5t3kkhmgebG9rojXV11bXwktpgrosoGBZXqoQrDYieTm1o7NhfBSAhatazD2Q4PcBDRXkWGbwmLNUoCbiyT7ZHhp",
  "key7": "3tBxK4oc69rET9i8povjNaZwqgS4XvquVbrYnCwtiDmfcuDGBNSmwdAQLoZoMGKsS9cjQZPugNAhM7ZtsJyL62qL",
  "key8": "px73Xh3NBXNLkDSY3abyrT1dmYHrdKtEUR7wiGX463SnXgpBSDdoceyn9K2qXLYQp5wiFuSL2ESiaNViWjYSQtL",
  "key9": "3s8nBiDmPkiNNu5TUopAY4ddteBjf1jN1b6r2ZuVfx6XqdvAmwTSZ3EekffjEaoKpQYDBdXXzs5ciYaFCWarT8UQ",
  "key10": "3HqFjqGckdkxbTsbCp8aqSqHL9cZ4KMvNKMsVqAm7pwkmeqPoobAQ7f6eav6xWAARJ7VwnpupAMtAvLzY2CXFfsY",
  "key11": "9mkAsY1gZeihXvCmmyhTRFsKmzqsXd6KP9o6mJiUiQdHi1KpsgxN7vWtgdunDRrRrbwi2MvG44T5KaHc4Axovps",
  "key12": "2DACLYqCA6S27TV6BXqjj4m9HaXom9XK7vkaQGaW6H3YoafbF3h8Jrwyvk2apFzTPZpZgBhSqsGqgrSRTKv9AGZb",
  "key13": "ZMMohSG6oJ8mMisaW1haX18588NJTz4udX6WjyX1VsbRihSCTCdZWGqWjhKX9A98jrnUMLRwnvGytCV5kTYZrUB",
  "key14": "3FPYHEq4tTgohSUjAAjpvSgsQ8R5PrD3fGHTpCZmbLWGwQcWJKxdjDF5ANFLHCE7kCipRtVqBqSXhC7HjiPD1PYf",
  "key15": "3AFM7JyJBXvaTfKJ6rtetGbEZA5uS4gckEGmBxQFcnBfpdePAubt1XXcpWLnYtK859fDSHL1P3BpuA4joQ6oDPQr",
  "key16": "2AF76j2x2m58CpCfaCenhZcX1TLLJ1AnyLZVJiDJvsK1UavDbTvR8AZoZzVgbdaRyhKZYLszQjKgoADdhSDD6yDs",
  "key17": "sXLC87wrtXD1PCCtccojgSZeqs45Pjk4JNpQ2o9dRvq4KNtD8gL5Lehebn2RpseTdtUP9fcdsjYZGnHTmgDAzP2",
  "key18": "V2EUo1hgT4R3ymesiTbQf3jAWeJAbJ8ijhDhKTUUufH1VxQpRSTDxu5f2nsxSfrzRErV5cSpY1NZT6kFBz2GGq1",
  "key19": "2SKswCiXHem1oooJ6jxsGT2d7bcn2EK7TKWVMBfvuEJoNRabmEzzJxWVdgrHoEirZs1D8UUaN7j5gTcSuHqTaGAK",
  "key20": "5V9gHSSPRLUw91J2Vp6ar4EjX8xbJEkkuBhtfz1cnoGAofF89voThnd8T4ckZgeyTt34qVXfjJ6xd3u1JDn6pyGj",
  "key21": "3Kn3YfmTVWqATWPoPipt95HLdtx7jcsqEMDktTMtL3Zsh13Fw6SWWwqztz76wrJKBten2Xii7xzaJrwtjhz6WriZ",
  "key22": "xVzumj7GGCgwt5JfUECmAJwoonfK9Big5tB5T2oJ3Jc3rrCnJDHrmX8iCtTWjG9H7wREXZZiAb3AgFssGa1v1ho",
  "key23": "5yLCAzyDBz8ewz3SyNWjd11NjgdWz5CG5xEPexSaLeWNX7rsAuykaUYRm24kzTdQaUi2FfrFA6BjhJcWw5Fk3AR6",
  "key24": "saCG5msxJzz47YRLPbsakB5Ci3FNqxYd7y62198kwuRrtz9bfys9VjYSWGoxDR7TBwFbnNChvT6C2EXts6anZBf",
  "key25": "2kYU6F2fZWidzbc7ATdYAkVLcm3Ri1XW6WGAPnScrPvaRGSzccnxiEQgKBuUyq5nFXuYwmDAwLUdhRAHrdDJKA78",
  "key26": "3DjioBDXT7zh51PvjL6L6sR7KLsAgSkaYVtkCwk9bB58hovNbZFwf1Br3Y4C5a3tvCxLgggv5TNp9rP3qbP7iJLj",
  "key27": "523ef7fqYuSPh6hTkez59wiBu7PGGqcom2XocGpxcRUuJ9LRYWataEerXCyF7LCc9fV1WPYnMbhEoB1eQkxyG71g",
  "key28": "2tHZd8riUQ1UsDQ7AkevsmcpQ1csqMuXmCD385Nx7ZubqvNzQG2JVFDJfyqw8cU7CPPD43A638aermGWc2Cr2VAZ",
  "key29": "2CYbBR9MNwakAftDWdosA8Ucn9D5qQJzcaEcZLui9nWvK2N4Lp1xXh7HWuompEJThszjqivAhurHRQvtpTamGzTr",
  "key30": "3DnXYRp6qGvXEW3NzGZ1ezp9iTJA4jiKXurCFEsVFcWqQ3aHYjtaH1XuPGC97uW29KwpsGdZEhZ26fyCKdrnSj1c",
  "key31": "5kBf1RwLmMpuSV1MvEvLT6iahQX9YFkg9nh3SuBjkwsSFFNHzULsMnEyYomFVGYstQbw8evBStTXa9DXqb4QFEwi",
  "key32": "2WNz84VenwkNnkM4kHKxXdh7JGW93efSYTm3Q1XQDDgL2KXJgPv7zaqM2QJJZv6JJJeJHasSDeo2PJTacqT58sjU",
  "key33": "3XtXEgmLYBCboVkDRY6TeS6kenjqhJo2vgbnFabUrHP8fevkWi2Wqe8aKFFhXMynb5xizYwbF6n4GZCVBa53o6h6",
  "key34": "2TN28ukViMe3Amq9zMm3FUiSz5wQC2jLGELz2DNwgJ8LYLZ2anxshAjpxD1jeKCUvNMeWZMyAoQ5Qo1CBvTC8LJx",
  "key35": "22FUh6xa27ux6bdZaz3dT8cyVkFcFZZX7kcPxzEPeqUpz3xFPu6bc1U8kVtCUxTFCuEkJDVSfvdS2dPn749fCgCs",
  "key36": "4sv9m4NoDvJGaRnXu7kHNu2qtCsqyjzin4Z1NKevMDkucyiHfF414CtE7RCAuYwJrzHq3mUzWmCyFe7vDM7m4hZz",
  "key37": "v4pw4JtYuYpV3CijmK8Fq4k1sHy7VJorqkGHEKzhTQRA7HtHhAD9xLQMFjLPPVszJ4ACi1u2z2hqA2iDoEpkLbk",
  "key38": "42mxQJDgxfk9usboJw1sjPYf1JHXTUEZrUJVqonNaGvpPR6jCDdvhn3n3WQ52GeMUAbY1XPS96GMWKcJTECYjEtz",
  "key39": "4qFzPCS7soLGXzKCYeTyH8YtETvvyigCCwRmL1qybhDUbiBEmzUNz8kSeZfQC4ChMZnhX92qC9oSvEycf2tMFBxT",
  "key40": "5qqcBQHxAJdSVCzVvKvrmm3F9xraDopPiqGt6qj9hn8y8mto8oiEVh24uxzzP44rnSZxRz94UzBjXdtYiq3ZxGDw",
  "key41": "53P78Y8oSSVj3fdids8aSvBebnsz8GUYP5qmyUr5L9XNTXfjuRJWqRoGkMbSwDKdXb8fBLhmtMBqx7kK4McJD2vm",
  "key42": "576ERTmwFiQLTpFLhdeYwmFj1k1SGAx4ytDiJQZENe8wLVMu6PUfQa2NrAHTfRYaGWquUQARG2huGLBSd2z1wxLm",
  "key43": "3EkQ5af3XovS63H4GDALFaytAZy11dKW2VsQ5ACNsZvanE8CUfPUWH51dQaw1aq4KLRJ7YqENvoXjsazVDXGgkxP"
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
