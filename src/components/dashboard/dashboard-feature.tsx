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
    "4areLmi9KDtBVzu1jDcAmZwQo1xRDFzdakPU5pBzSuG6yeYpuiR2wLFU2fEcBMwDbyTraMtL68HDJjGguTMpVivi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yj8skSCFUEhmkUz1b7S4NtDukbEhHgxbeGWKd7vSnrAskiaXkNHwQb4qihEwx569TmC63EwgsNmp412zTKUhj2W",
  "key1": "2DJAC7C4c6g3bq8iw8vfdcUUraRxg2gD3ia6BdpqdSrqgc8JDoMAxo4eDbffBMEXRAeiC1Xwky4Ermz5E84K5NYS",
  "key2": "3J8LjvzzRAF3xWKDWyHKcSDa2s8N8szdKMbDfvpcf5euEj7WzyhHbEREnLE8GWBfdwzBx1ZCzozVWei2RrS9NKA7",
  "key3": "4kcDxbEkCo1iJ3aizihdJSsxBDhsY5C8zZVxKWQNyZCfZKZmXrxFhs3yPGfpG6JJV8AHK4S3b6Je9jrdbPWGjCQg",
  "key4": "3qdbSHi2KcLUxNrUZbA5z4eXMqsPXhhWo4hA4ddFTrctmvoovKHLWanjuX4Yst4HRvSabLWZzuVzqby3nLUJkNy9",
  "key5": "5S74dUE1XZzVnzGLLCaLeZR2BEk6mdTL8Ro4EvViW56RofBWfEoZqGy5NsG1gCi9yL1hQeJ7pQRRHMeVkatrdREA",
  "key6": "5TeM6KxyCdakAjVWz8pY77KeCHL6Tn1ogSpC2D28bpX9gbCMmjhqhXt7UGZmkQ43g5HKZkJPWFPz17jYUM6ZAdfW",
  "key7": "5CDpVCi5d7FQaQ7XvBEB1R41kntf3VC3CMvcFsftt9xgKWFA2ZsjzQ9oU9y1HiqWA7rSjLf8ugXTEtHJ8vcZPVvR",
  "key8": "2ojoWdq6T3HKiSnxqvi72b271fnaJGPEvx1YyKhRWtf5uoJ2UwKE55s5LSoVoJVJY1jxMohSfYEMgpgBdsg9UgPG",
  "key9": "4T8dZyt9mVwsbmwsWHsDUhJWsaFs5yyXUvvukzdMRYUkNFgrkuyxFvBGy3r8iUnC9LcgeZRTx4EcrnGLcwGhM85b",
  "key10": "39SmsuHVApaMqwaa7SMGZ2PHRYtkieXkXV5Bf95Cr2XiCAywfTR8u1UBtos5cHLyvzfMzuMYmMor8aa8HZ552YNt",
  "key11": "3h5UJ57WgWYNhY5rAg7yAA5RqBE8wtaEMukBR57Zm6fmf8NsGxPB8ZMSgNEUjE3WdMjxmmasy4wBnJSJtSELctS",
  "key12": "JgdrYNfuRcVm37v4VfnnqDmLoXmQ1GCf4ZoGkwQJ8pjtvsMSDm4U2MLKCzRzHhMwDwjFgrWctDh461is3TkfWhc",
  "key13": "bs1rYc2iSx9eGcXY8gQhbe15eQS6euQrv3yJ6WT9z21WJUjcbSKm7FyEVvWLEFXp9HujjheEgM151tCG8EYrJtz",
  "key14": "2XsYTWnhxrz2SiEfZDgePjP6cBoYozxUuWgRJkzjkecxA7KDtjD6Dj7mmyQV92juAhVorhaMK7TAyqvJEVQanbhX",
  "key15": "4LAkgxrrT1DKCGLfQco91ecU2n5CqA4RpRjXqJNX8VR83SE4WZxhqeCjWuX3vj3p7jKH8kx7qRzrq8mDrmspg5VD",
  "key16": "3DHzA6EuHXbGSf8f4i7QGqq2SLhe77xnFRaX19SDVDubb7jSDmvDnFK5vQL7TSTZmwvqfJ9y9hFr1ZJBrv8A127T",
  "key17": "3f9GkTdMBzrkR4M9a9895nLo7bEVgpyVt2WetNeHYZjq9whdbUBnN9QHsGB7S23haGmRhyQ4RznsGaGV6mEstvTr",
  "key18": "5A1uHanJNERPqaeeKB3sWzx6NUbQj7xKKB5S34LUrsoa6w311F5H1o35AaikdnNqkTGu94MvKTiNvfuXzBujo6Mt",
  "key19": "4Ms2tRoHDaMogzsHs2CRMLCRewJ7j8s8R9tT9pRCPwcFSD3KiiK45TCe3mzoCUgwQQVwFR653j4R5LcpoeoP68s3",
  "key20": "3rzvLkmX7tnkELoywAMTRQ76ikPmS9oKwp4RXHGiChBgrC5WgWEzmiENe7Y4WbzEroYsQQ66vBtxrZQALVFaqM6P",
  "key21": "2dYGHrsKEjxjz3rgrCe1DfLkKMuspR7cE2BqzKcu45nGNj2A4NTi8tBF8vuEpoW618Gj8dYYheEMd1NeabBDaRrX",
  "key22": "5vdDZ3TJJ7oUvHUWKK125ccJfzdXguR9MMrFFiAZYqWYWSEpqDevkLfZPw62b9FgQgziQPBCAhZMVX57zkW2d2dL",
  "key23": "4VJLeQAgF5rCk2sEFQbojDT7KuqqySxkmQYz9dRJ3SDU3WSfwcH2zxf6H1dzfSHQgp1zovEXCmDqRLN3KC7xaPpf",
  "key24": "4C7fnaaCxX1ktSJ5zNQRBNpnjkLbT2iySyCGnvmtfvkZqrcMRcgTazQSTEikvTqnebJT33KWNhpgn5B2gAXNPCqj",
  "key25": "QnybzAhT9TSHUL4qns6ZEGTFEv52CEUSsXBvZXzy3um2VEfqaBTpTXSHEnFa6Husg5n66P5ZezdzGxU2CoTT9cs",
  "key26": "5XdqYQiiZ4DkHnsp4nFNUoBjYE2kN58GWZ9FgefzBA5S78zxr9DcNCpeUeM681BtoJhDwkbQXUm9Bw4seFV2bN1W",
  "key27": "bwi6imxbdxhyx1DCXpNEequWa44RCL7kvffqe8diwkJTAcbk1Ap71UWPVVhK5aFPA4JTKnT2iuSVoMfHJSF2BeF",
  "key28": "3o7Vz79sDQuQoEWwDmrtgJMA5W1fvirNg1c8fKwnHRMtPPuA9xUGpfDHzg3VzfAg28tNzFL5GG5X3H8Qo7z9pWLQ",
  "key29": "5DHrnVus2GyMv2nex9oYhgsM9fS1W27WEWB66szvG4NAmjbyfHpA4m46s5mSsD9FqoRFZsJG3Usf4v94LLdRvAS5",
  "key30": "3eymXp7dXvk3srLXesDAeuHmzigK5N1WVfjiQ72gaeaeYKXHNTkeChATyWXw7T1LeNVezX4YA9GaNXRRB6sQN6Ej",
  "key31": "3Utb3r8NVAr5DMvXQrGDLMjZapmEmgc9NcSXkpSKtuHAsVN9ZiUUXW11Gz9uXUs95hAqi9C7ir8Ydk346DLUnMAa",
  "key32": "2hQBtKqEUn3BJ7Lr19VG2ZHAPzBPCnGSNwzyXTcs387qhFypZEWMRWMShQZnShRaSCfzaPqNDFzoAmr4SnDorFUN",
  "key33": "3Z6PVXSDhPmptwJ8QvVq5HiPjyj261EAR1ium7CNEqwDBmnhUHGPKm2RZWiWJcpUGmh4BEEKN32NZFa4BnwALjoa",
  "key34": "4nBoVTaBRQtKBwucfxZCexEEJXkMpqVLMKTxSQUS2Mf5NxATnRq8WNjjDTZpoiiSxoA26xYn89VGHeXXoYj6kd1K",
  "key35": "movi4Bosjy9XbYiPLHBEkphmau4vGA1vuM4rEaYVVp8ibRGAQ2tvwRsZcTiT5d2RdBTU84Zcs4iPvsNTLFGmnKL",
  "key36": "2LTUjnfawkWUjaxDQHEvUCnTHdd6vUyJNxTZ433zydM4yaa3khEnoT9owsMU8wxTjMhZiwvWp4xR1jssKC8y3PbQ",
  "key37": "2mu7SYAbxWrQ2yLWAQz8kSuSodMFAdC7bXBZPxkX58ibpnS8g31W8PeuyWBYZNATS7GFCewCkWycGHvVxbSDYzLJ",
  "key38": "3WyPLGPVWQNDiiw6LyZBoycjx6qFq3miAgTN6jazRMAXKXAQodCPf1xPvV2y2zajewRJeiCdXJjvSSSmdykyCX4r",
  "key39": "5nBGYLU6o1HKoaYu2pmSmSGSsB1JKLBrHjmNu5Dox2X37Fs35a1XdfURFuLLZcA5qZMUebhfT36wNV8we3Jb8LUR",
  "key40": "2cA1GsUi1ULEHLjTZ61gf8uZNq1XsDHQPkzZVjfo88edALnz5kLHy7pJP4J6nZHFg3HYLZQkXNgjrc4rUgTtXZYL",
  "key41": "46kevbX7xmsvQPJ26Yrtz81R7UritfhqF461kJLs5kwRED7ZEnBJsfczTaHRVwBokHEdbASceVyzJit8ayAcf9nx",
  "key42": "65RNxn8Ba1UDB5AnsqxFRbyjA6toAG6QgbshCStMdDRtjZFxfv1ExKC8qHAsgkGr5Dy8s7KcseLCYEcKZLA7NdoT",
  "key43": "5kU8xYz4Xhqz5EmJGHDXjNvUBeGaCzKxmhd9vNyKi3hFs4kTF6GUUKA3eTNS8aKTf6zJAAWokUWjzpdKo8Dtddw7",
  "key44": "585bJ7qzH6s9YU7iU9bysE3hME8g7cUwDZDuWtywUhSBCKpxGiLS1yHrS4r5K9hjpnBUfMy9d5qXKgkLwo3k5HMK",
  "key45": "2jcTaznU2WFkEB6PJiTb2ugYvskrmAAkR5qTPfuuU12hMYHSKBj5QsVGtz54wzqARJueqe4rsiZmWYwM9AxyJntu"
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
