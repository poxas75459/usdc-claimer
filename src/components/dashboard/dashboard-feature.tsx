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
    "5QWG33AP6Q5iFWsgSkG1NskpaW2b3iV2RUVfgaVgeJ5eooymzjjhaH7VQgkV7eWG3j51o3eS9VWG2j9bQB3WUgfi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eox1XwCHxwZ1d3eaGy2ueoneKEjHFvYu8DJHuBikn5CJyDUouZe7yTwmCpq7Nmjfgc4CcriF7Ms2yHaxTXrexU7",
  "key1": "2wjzxLbd123sfrhCLSfWRXjrhmhE6ddaMNeZtE6hTDTN6t8LQpKy8XFM8UoFwswxfNw67jrPtCy864Hd4RkkFynC",
  "key2": "2nzGgiigW7ui918Q4x58mF9uNars8w8Bxbe2XDMQnJ74eQ8gCwc8Ak2zEh2h3PKuufv9XozmkvfnwU3okwfaEYE4",
  "key3": "4eAmEdkyT5WUD4RPhUQe4Mxpat5YVSyeD33GpNxq8ovmRTu1WiNykfmE2yUzzHPnXkhZtQohbY2MRTdSudDDFYsz",
  "key4": "SUMNGX17sLiVtnRMi1UpgYQGSUZoviW5EuvDVaodmRvSBVyUGfWzLATkCxRuuztjQWn7DyaPDxrtmBJDmLTLeXs",
  "key5": "3bTFVSC3kBHr714MNSRqxYFnGD5Rr59JggtT4jqnrDvrUNKtrqQMQnG3ybahBb38M5nqSh5jqvc4F4qc164AM1sy",
  "key6": "3f99q1nCKDSw5JoD6aVVSqnJd5dJELidLc7HXV5Ki9xbKkcHbtJ5L59VSsSWzpn2i9aXoMCw1SxMkKFsDwXuNits",
  "key7": "e1SALi7yZDeiaUXaVVSYweUZZ2qjgLZHbCBdE8arjJWAG6L3DDr2RCGmhR31apzUtu937Ziwtfo4ur7z1sNm6PU",
  "key8": "64K1h2w3MHi6piMTxkxGuPT56bMskCrwZwzzbw4Gj6MABMi2EF5h1dpEkVsNALu7VahRo74qxLFLzLmhsMkSAzxt",
  "key9": "5hyuo3CLozVXnSfEdRPTxeafSWevYoKJSgus1YQrwK3HbPsrz2HP5oe5PpRCngjMgfMqVGGMfy2Qx6nuPbve9nPG",
  "key10": "2USxf3HK7KFE2qoWTsNGrYmRAWkp4tSRMn6p1CcxbXAtp3Cc6ZcbGF4Abp25n46Rdb8pKe4cBzWKWWnVP7AZ2hEj",
  "key11": "3BuBDNPdT2w7f4y9grVjz8DUNSwC5WM356nkNK8RCgoWX9qwhDz8QQq7m6ZJ5L6NPriaBtxLMZbkiNGGKGrV7sqz",
  "key12": "2kAaLwv1fESTHLCUpEV3jRaswm6TaPsAiw2vqZHGTwpTfbf8igWv6JtPyK96iZnrnSpVdYJFRSgcJkYZB42LCbcR",
  "key13": "2FjQzrXnj3WSzKhaSDHYNNm9nLrb8kHixbewNbxj3uABigeY6r1rWe9B1udzqMVEmQ45GpoBtXUW6H3nQLxBR5LT",
  "key14": "4n5pQK2BAa96EECRpMdWvoCx14ydTobmRae2FyFs1sKiJBJJa6FJyJsjmr16AQnJk41dAQQguEQw87RcjNKqoiiy",
  "key15": "2gWq5j8YXoYXr4unF8D1vWuuv99uQY7uFnXVwWmnnf3LZwDqBaAgcr5VwXsgaRUa3R1pXK2BcjrZWwHHSvbuzgy7",
  "key16": "3ny8LNgzUHPDc37M7GLi2oTAejeBQgScVZh4GXZtF84JZmkm1QDpGi4d12j39m3k7G47Asove1Pqyf8BavUVgjBp",
  "key17": "ZwWHesvY3hrjBrJwjUbB2M5Hxt2uJwbiAEp9ssZuarjxrJak5QHpSB8aPxdDGUXcnKm3rRwWFn8ZsLhp4ULjAAG",
  "key18": "VJTqW4urHxiTbyRFVwc4AoPAWG2JMZAzhyKFyZ44cXBC1FPfzU94Ve4sgse9Rr9ubvBzycqJfxX6kcYhyqQwf8o",
  "key19": "XHSAQgqLZDDnxYfoo9fEtmvGW78NDyP9bLXDG6uMXherzPJatiEmpYZqWxQ1EdK3xrqaFQThuiw2sWz9UTWi4P2",
  "key20": "5dJdnVqB7ud1ZxYQF5KfofXyRopvwqVmCnCsgTrwKrcp5BoAJ7An1wxRYScwtscpU1gJysb6SZNvf9kka1ufYBNs",
  "key21": "3EEoh7ATzHDEXLDEG1VEdEFdHbySHRJsFSpz4jJ8VXRiKNZmUHSF54gGC2udK3UM9BqspHcyE8Q33JvhoPv63an6",
  "key22": "7NJTP9jTkx5WgavAGxn4x4fTqXAwegkyoGWT6g2GQVL4GKoA8zDzXfZa2wgj2n6GskzoJPQFTr89Pe5vtFVyEHQ",
  "key23": "2a4RwKZrJm91MNZbkZEX1FP25LtFdUpsCHHx5pUS9ob7VM4sovSNRgTgrDYQLj7JcJ2BcsttWWM5e3WGvjSKbniZ",
  "key24": "3ns9dqxyqF34LppnSMfivh4gWKMMxeQkqEGERWrovWRgQCoNF5HphNj4Nmc3zG2hxo8fcMfP7Ggz65DhsP2peFwf",
  "key25": "2P73K1DYwZQtBZCW9mf3qguedCAQgibV9gA8w6i2vg24MvcPJw2t8Y9r9vk3efbTxoFQRqBuVGTyb8Qmwb3xkuK9",
  "key26": "ZJ1dbVmSkVboLYjnB1yaEuG8F1HUqaHYEZ7gQA4iKnRoieATXz6Lt39kgD1ff3WMMNkdt9dZFLi6q22FGeiACEJ",
  "key27": "2VbzLxcqcuMu33WFxFLL2jhaY66heTMbSuFgvWxwoSeqp9bXwVaPGfvbToFNxS4EoL6qhMeJRXEi6dMkQARVG1aj",
  "key28": "4xBzAJz4UKUJdfKZA6nLqY8nZig2wLiNuEsJpy8gAGGR5wjg1Kzt2raUxeCsXohrq8dSufeuJwYcTBwRfPM2TDpS",
  "key29": "2YXhBTpHnRMnUaUCmJdbqow1ZJPM6xNoqoa1S921U81698ByZWuTQ7MfhK9RSR3W6nquvZUnpACeY1axGMsV1tuz",
  "key30": "VVUvqAf5AS5STRKcaTAT7w5NFyuw9Pbjhd43FSvHweBtu9hvitQKXFYTECbYtFG58NAe6h9ohXihPrL1iPsa6o7",
  "key31": "3UadKVUhT3gPZD4FYunr6hgpyKf9KUL9cqwiZz9z582tYiatTqcJuB9bpuxonTAUbErM9R5J2vVp2GuGBexwe7po",
  "key32": "5coLvznCuoysc4Tp3hvk3yG2c8qiVQ6gcMPpQsothvxbF12hyHw5B7FeUHrCLZaSbbHbScbuNyJmHqPYaFKSpGqJ",
  "key33": "4FREg8gpCWsKo81CwCat12ioZrLduy1BtjDGGgnG2Ymcsh8gVn1m6iEaNdvKh4TYfjmADAEVkirNxQEE2ACvw3BH",
  "key34": "5YKGydtLcqtxUHXGN1fMxaEekQXXq4V2SaM4fXyajA7BZGYvpvLm84yxR2GauoR4BP6KkdLCSb7Tv95ceTRUsrFN",
  "key35": "5L5DA5uHURcMhPG5RtZTDJW8ZNLW4V7ckwVFt3r4i9PqQyFgp65k1jPruZ5FbngK4KChwJaDPGr9SnBRpuoNAzcc",
  "key36": "3S2Fqwo2Bo3QNnecBYFaNr5iTic8iGZ5pBnm9Ax1A9Tb1L9DeXRQssypoXYqFzpFG5dum5P9qS7o8ofm5p7Y7UZq",
  "key37": "2vQMULF34mBkwExjNk44otXAKWHrxoXXRqdeMeA8ZENonHSdT8m55AiXjVMmtxXSQXfqzJj6DHD4N2iGmiFrKh19",
  "key38": "47xtERHVvUAUzCsHfuyNn7rx4EVBWjGahxMPWhRC1XdMVYkPsYicQ7FnSBuU1qqiQwNKp9rEW2B39NQ5fZ2KeRNv",
  "key39": "5bradeMb3T9CWvyx2JVU5qJPNodxn4UAbB2sjAcRpjc6uYi1rtq9N1aqgZ4rL7H4QqutyQitrzYQuWSoMFjQLTqW",
  "key40": "XrPjTMHrE82TKAyNjyLnjPnaXaxzTjQuWpABb7XqYzuwEuZLNBzBTk44dqPjdu8hsBzTdEJVv6dJ3eVxdbcBb9K",
  "key41": "4N5Vf3EqwkfXTWAjqe7DVKBoSAvYsDKXdzi5isXz1dvJXHxZkVtTRA9Fe8GNNzeULDj2if44B6A3qBqzCiuLfe8q"
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
