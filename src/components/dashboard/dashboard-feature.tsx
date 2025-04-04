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
    "2zJCF8R9G9vRq85kBzE5m1J2qHR5iJWRQx9G7M3z1Kz9jm3tEQSBRMgHFNbJ9fKKD8RBCnsLyhCQp7VBfViYNnND"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jp4RVNz6jSmeCWhmKPDaMvJ3AYGbpfXkDYPHtHyKQAsVqJ77ZE4r3qfHYpCdbUVSwXPXDPChQhDWvkteWgzJTNe",
  "key1": "2kUijWJyhej1mgGot3dXiVbDrCSf7zb8CcTmmqiZ9Y7uTo8XGEw2ppKuHETQm69EcgR4drZYr4624as2aHuRjW8g",
  "key2": "UETAEGYk5aBDxE43ZkT2UCYdf4UgnTLEiQmUJdtytxiedUcLX4DDzB2t2QA1oXcad9qDLVcPJyJkfeCw97UeXVz",
  "key3": "2G3yEBzkUZnQ7nCxwwgD81dvaWVkLdSqgt623Ga4EJDruhTiu7D7iWyzkCtidQzVRgo2paqgMWKMzCvT8tRNRb26",
  "key4": "gvUBnvgnUviKbiGZH3HMaZX7kdXrXA2Gjhgcr1gg5vGU6usL9FbCRaCuv9rs8xfmpqxajUdqnRjNCZaJdeeCRuS",
  "key5": "S4FSLPLG2kXR9kQVzNaCNQPLpvB8cZ9Zb4xWLCRzBAcZw6S2hfHwv9oqfKSKVJQa71FKLR13LkQAY3tN3PRehK8",
  "key6": "5m5QjgfRYex6H4eVkRzbm2ndkniGMCYZxo5owx2zcdPxBDLJjm2dzKRigK2auEN7nXUqDYY1kKCLjH6rAU5jmSaR",
  "key7": "4KbEBWcfkx3jjefoisRK4ZeXGmeAnZmgUP4dw1CSvKVHwyPRvD5oLnyvPSmni2DYWUBa1vGjrytYK9hWAe6qq4js",
  "key8": "3wrDwLuQgfZiNPWd3R4RtBfkMFYgRWhogee8yjj8PpFt2RHHbwH6NQX4w78aYkwbghWHr75ouwxcRin5RHwA2WHa",
  "key9": "5Cr5WfJcTzFpnG6AHRMtte2xq2EiFbrhPiwHSToXTJUbkcEA4H7NadBVZAuRf8i5AfikqpbK2CBrr5WN3C4ZDREZ",
  "key10": "hHsuvHBvwGmrwBHJ2vBCj5mw6ZmNwgV83AfRT78akLs3WAXR81ykLwatDakj4Vj9Lox7tNS32241dnUT1YP3V33",
  "key11": "38vFhsdMvhRgQeQGwL1hPUitxqVydyyJuDrMEWdBonnNerYA4bu4nwnb1SDBG3QrZEdLCYXoTCR1t4LZ9uifzdnJ",
  "key12": "4FFETDZFr3929dgmV94i7JM39Fk6goZKff4jHf5BJKwCjyzvcdM2q7CTpwLQ5cuapTCMd4Lnu3KAUktRHRBRY1VX",
  "key13": "QjSwffR2BnojFT8tFcKeh9xFGWACUt2RJyrbfqUKFTAb864iu5ZxTvYxGV89vTdYSX2gGrbaNWVNcyGTN6mSqTU",
  "key14": "4GVFpuayPfP2M3bJdoHHQSiJ9GXQBf5TBZ98pNAzoKZqz68JN8r8nyKPWb8Csdh74ESEkHTbAtPfnW8ActSXZVf8",
  "key15": "4nt2AwxnBS9MoXJtF25rTTvkq7yHjfNibxDcuJBixEQqzASy9jy3oJpw3RmjLF7EoB3PEcosG6hbw5aHjnvY4CC6",
  "key16": "2Fb2W9bfMv7JKGyYpqNaSPX9oaPhA8wHQHkeg3a6aFhGKQNVx1wbj4GjvWXPMqSp3AuHkRzkJjq3aWx953Rq86Td",
  "key17": "PoFSnrChA84Zcg4CKVMY83oXThttkSwruudgedAU15HegzDdhfw3Bfd1VLRT8KnDVGXvx8kqJrZX3h8VKxNqi8f",
  "key18": "4JoAtPmqAhvPYjKSFunQpHGDPnu18DVT4ubDLTpFLoQKPQ2PxwjDnuA7jALo6bd89FSXwmsZxQsSYxcy2JHGXe8Q",
  "key19": "5NMidwTWCAQbQL5yQmJVycQt714jhDRupb78sWiKLzPN4KhvpcrvSyMEtJmbT243H4dGRXXwR4CvzC9XG6asubmi",
  "key20": "cJprnTMcKBcxE7t7rLffijyGqMgacsERmxXpNdcKqEj26n29Pj1qD8hUeArQTcCHcVPXi8HCcMvDJ6gjwPqNzXN",
  "key21": "rk9HDjeiBga9mfRwofwmZHCyuGf2L12HJpARa5TdjM3WETH7nXQgFUjKC8Tmkt3hLh8iUM1bGmAxz9Psp9aZ3Dq",
  "key22": "s1vPfKHXgQi5L5JXGveiBAT9Af6o9hmh6vLosipYWafsvmpqkiY8JpjwTGdKBjdwgHtCQ22wHtb8qqYmxXAZGiW",
  "key23": "5hGQME5FamsSEEfm9v7NW7dB5iZGpNgfY6fzhg5HaFxqy4Pa2gxQ3dYcxDjneXUtxMLRTG8jMbC8sB2VCYQDUL9w",
  "key24": "BuauFuMpEbxkvfi8N4TFoNgX2vLtdyxcs94EGVxk8BQqTMjHt111co8MVD4xwD2BHGZW3zQdSfQ8saWdpWcoBoh",
  "key25": "4YQnFfKNtRsWjdqYSZ6tPP5hoGqPaRQrMtWL2BBVTMT6v3UkbBJEcpdKYn8BEpeuKp9fij12DYSE66BckvsJkxdc",
  "key26": "44o9L2NSvLGbGW9Fd53MqMTC9LXNDvg2E5fUNBrFkL2JP9ULWKmmmRXzfzPszxkfHsTsHsQfGW6CGqVhYMmZJouL",
  "key27": "5bZkEh3YtbYGPCd58fQJqCyzyND7r3noymPZmo4H97FcUx9YWgTydUeqfUmmzr5NAbNyNPquHENsuo5XuNK7ZsNL",
  "key28": "3SjVDCBc4rBBRqkjQ7WNdvNKmgZbVvcFPbuJJds5HdwH2Fvvkc1kp2R6pYonwg283txeSNBMdSU9djm2HerkzhjH",
  "key29": "HVfB8vYE6hQmVyxpTPdUcPWNCKCM4MU1pqVRFeFZLKaAzVGUqRSHhA5DA9vcac6CSQ17D6nNWV6uouWSwCJ3d3w",
  "key30": "2syMG5Z59BA8Nnj6rionhdaU9EppFpLUkELsWugoKSr9ijU5SYdcGkG9DtoHggv5TnPNcns3dncqZUTb8jS7L1hs",
  "key31": "DeWDGJnDdBWyxHrUKKCxXY7hUoBzYfiuMAXp1XsbJSfooWoQvrn3nsqbDaaR7W8XdVA56yWBVLMkNSLBir9rU2K",
  "key32": "3AoXyuaKGr4bjuRU5bMZTTxAavnsckdZfGQhmbbB6wS3TwCziAaGefRLmMfA7Rf4toJh7X9oeGxs4hJKrRhXAYLr",
  "key33": "3PyfAnrNef8RNvg52mWC8PCw9F5kMZMpAc36vUSYHHq3WWgsvFxbsuaWS8a47ivVwsxbpHjU7CfkUPCBqjn9KCkF",
  "key34": "66BSa9hBvajirEnsgcULCGPZ2abkQN63E6gEE4fVCF9dsm4suP4aJRB8MtYpBXe1Hib6AZ6Hi8tyD8ppPNshmqpm",
  "key35": "5Nv9omE7aZy8gK4qu4wDqE4rBARXdLTTYSEp7nXfPHY3AYpAcmWhWzPaFGJNb1owLzqJH9LWadVTah9cTr6SQRJo",
  "key36": "67eBpzbM32AYMzo3RsDpSFt16sprjkMfghe7y7mrdaHMxLdE7hJRQLD1L6dTjdUr3NgUUitmHXZi2rQbHg15aP7g",
  "key37": "561rzqtTpWUYx4FBRjvMYUB2LiaVJiwCas3YQYUBbLFhQf92udWmHdaJd8EpQDVz4jajeFSXr4SJ9AWS1A8oNT8X",
  "key38": "2sVrnvPTQBSuHTRwqpLrnzL7NhthTdiKe5NSk4Zx4nVcvySy2RpEtpJjR7U3V6CxrTVzsCfnTD45idRw1doUb6qc",
  "key39": "2XAuYDskRvrb9zDx6bFAuBVizrZJm8xsocnMthAsNRUWEj2tGzGKD1n4pZztV1uVcsPeA3CXBfyaErhSdnBrXHqg"
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
