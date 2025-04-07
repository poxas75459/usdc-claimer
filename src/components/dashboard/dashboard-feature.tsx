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
    "8mEaSswCWjHKTwZGcDH7n716X3fJbiXzvgu8iphnWaqRX6zrnh5vPqzVhS64Kj4S5ZJ2wtFZyfzbh9Apyjn1n1f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MbKGaxcru6zytxucLfmWg9ag6sNkPQjp7Sv2sBWYbm5hm7f8P9juRWystwH4jXCCZAx1XiMUiYEqTpun1Jxwwge",
  "key1": "2xDzXUgVBQcw1kCGE1GwJmm8cfk75ghvmir1BekF8YxXj2m5paZ73Br8Zm2m7bXKvRinVgENv88oBEDVzxuZV9f6",
  "key2": "4VDmRg1EJrE2DwqUUQdAeXAGNgvEWuUTYunDgdWHyVqPu4YPvmz93neNa3gF2sXG98CVMQga5USMKzwiHirn79Ec",
  "key3": "5Fpv5G9JnXNQHBqMxQHujgofHbyYeX7cmPcJpixZ7smx299f1HG4jXrWLnMUdGhFYvcTpinf3CFwirC8RMxnTvDW",
  "key4": "5iP59vBBsmRQ77oBPQCQtAuZcYNLyLwt2sNH2Ttx2udH9uW2movVrkXLV4dUWjbGvR1LE6ogTgvYntYUkogAZ49V",
  "key5": "eJf4FBWqYr29MfYfo7qXm1fRhUBygwcihVp3SjhsXLg8HHiHN2ZyGrHHrrWKcN3kEBHgNAECfhgtWFXjQfHmUQd",
  "key6": "4cSFHyjrnakZmUgDE1KNhadZQQhejJB4xjxHeS8VtStRJmMs5qNeym7perwaVFUVuvNwVU8J1ZHjbBZemJm33PLR",
  "key7": "RZ8otRjdW1zwDWFEp7xaLcxQfDqriFpjsFiXABVrdPfjdwCbngS2EsN7HJatirr6u3xu6nvqPuB6TkkQzwPQ3XY",
  "key8": "53U2eF8YLs4M9XZVGpkvXNwXDmEZQGdoa7v4xWc92et13i5D9BBsfhvc1Uk7d5YDxuoUPUgw35uGsKXeNGSn3TGk",
  "key9": "2qwpBQjcvgfq3qbhZ282epR7mfKCKoe6v6m6fFPkhAt2WFY2sNqaAbYACfNmnNfNjA4PZKmREwCwCJ7d9TjWFi4G",
  "key10": "441sE5wMfRgLmNEP3cbkZmcYoJTCLEfxdAmvjCN8cM2qEsKGkCpyYxAM8kYtXiWLvfCk9ZVmvKkZRggCZMoPhv6Z",
  "key11": "27QNfx3QGFgQSCxz7h8NPgr4C3E5Pgx1t9E5Fne3mE1d76MewJryTRNfM83uuHQAjKi4Jbq6dcN51jAj6vs3fB9p",
  "key12": "3d3vDfwYvr8c4Qf6ykKgnm7pboW1ZBCFbZq4FZqTYYhvpnD7FgZjTAPceJQeUw4tBtAsASf7xeUMyCtF5nvczDJN",
  "key13": "BizRvGTUQYBUsmZpTFYJxTXeUVARvMh4UvyW25Nanqg1RGeSaAS1YMxD9mrtMTUVaxNTJXthtvuwma4Dm91Ri7A",
  "key14": "5AbeTCYvBa5vq9SDszSHmz263VMw1SbLhsRbHGQe815UpcW2FAMZ14vQQ4yUAK7KRuvTsdDqm5vE7PF2jSmrizbY",
  "key15": "3J4hkn1WU6aQkn1jmc4sYuW4AXea6chwNtwqvyMcN6y9kk2uRJmo5gaMSkjaF6ySUcFzz3rTZQdXAAkB5u3d5F3z",
  "key16": "c97uPkXL7N62DLXswXkP6SwFecr2FcVqxexXFcJeQfRou233mdQyXJh2JRpBXxsXHmqzTQbQpZBDjHh5dxuLcF8",
  "key17": "2yNBLwgy9n2k48mnVE4cHb7h7VVsnKFNd8DpQjnZ49WWe69VzpESHewy1nmNMnfttpaDeF9GPaAyRJruu5fe9TYT",
  "key18": "5qT68cV7JosQbuEhnb88Pqy17ACyhMV6ynPMLa93ehdK1v5pLvuMHWP6WABeRhCD4zwvEq5fkWmVgmhDnSQxDcn9",
  "key19": "4wzf6MqnKNbMxYH8Vq7gsj7DWJjLSwW69UXXYsDzBvkEJKdVhk8mp2pC87G1nCn1tdzfxXadDV9yKKonazE7kdZT",
  "key20": "5Fuut3LSCEWHRP7j3Pf7mgmshumt4YE9PXCxHxfy3ZWQ4SCRR7xTZoDhHFAft9M44qmRWbYcMs7wKqP8VBxtsuML",
  "key21": "3FFkbqMPzaZnsvLds55X2STkFNu1NPoCneJMCirqTMRJEVRfPTJcLmYYU88Xoqfb7oUDvAXsMPMjWnG7xmKLiYpd",
  "key22": "2h3KzwnkwpmAaMCnwvnYDZLabzUm5mh8Av1Kpm1WfRwSgjxQPiWVif9YQqb3VFUqE2tn8aXK4up7tMFqgu7cqKto",
  "key23": "5dzzg4bwTuM1qesKzVRGqo4LqqregPgGra7NQ9ztXE6gVUNXgqMwEczim5PindwEwdmvcGzKhGyiBVDR25eRuRjh",
  "key24": "5Wep9Cr7q4qAkFmTk3kayxpg1Zm1HeDQ7zRoPryNmqRpPMoB4auTnuPjQFZyv2DYVDVXaPUpcKSyACnN4R8hdexp",
  "key25": "53ocyeVg4vRt1CGdRKQAwXJoF8teApxVB6J3ThjbUSPxG8p18UYTYmnJr1wttWsNd6Gauoz2wsMccR9rtim4HfxW",
  "key26": "3juAxqu8hKZZiasus1rE67DUK3aPhmjBZtwc6GQkgc7tdwzsHy3AZE3cuZbwf9P5xkPzRxStWPB3CRkvM51XUiKm",
  "key27": "52PRYZnLtnJ4bX9FRtbS8ZDtSyPUwujb3be8D8FvbR9MNLnAif4wuBawygW337kDMoF1YspgryFdMKqHcE1pvYkW",
  "key28": "FshSRBGyMyDVpEmXZ7Wbup6o19G9WhDRUrhoNpsVxtgCrE6v7QZmBntPCMsvrWbQ4e2RajAbMUhX1iCfdFWhhBF",
  "key29": "5CPdcxzzAfgDJwzDSmGy9xQSgv9WJKRYSkRqqRruaC5Gn55wYrMRFDNCyW4defCoGyqfCbDWLeaCPj9XMH6QpME",
  "key30": "5aqPiznxdxGsKFRpzvgMLgx4ovPb7cKnBbep6r1Hwzem4PoRcqksmZzyDoSK9AvgYpNrjPVZZhCkbybYnXiC8zY7",
  "key31": "4G3umDZqRF6azQA78EqkB4gCFcraYjCa7KJnu7R2m7Arsndqvp1KoQ2Tos8BuMEPqAUaZziJmUC41EzUY18JCcpe",
  "key32": "39T6xVw5N4ex84aYzoQiZkL1cUvSwJoLU1ms6LaNTdNLZ44hj3PDduFD73FQKcdMrANxnXoT4x8Jke617NwkznVj",
  "key33": "rPfEF9KQUZ7Gw9Bv75rWqaCwsALA79nVN167KLajebWsUokZz8vdQSSRJNfVJhsMN24d5Yp8SqcaxHRFeYGCo86",
  "key34": "51wk9f2oh6fjosxEDofqRnAsa6qgcGa6HWifu7zJcuS3kznHDRStRnesWUZaQTWvdB6YMVGV5nHyoeuMWUa8Vdre",
  "key35": "3wxuGNEij4osfFeUy1mYspHgZWoKdf3EAxJCFoKSqnToKSom6kFKHQRasD2GFm2aWiJHtk69crevJ4zgEgtva6Fk",
  "key36": "3b12fch8Gy9UZNPez481QVxG6dCwqQaMrKE7jtG6LrAMhLcwMaFBba8mXdN5Gs9A3Wg57pwQ6Fa4Sn6q5A1wXyWR"
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
