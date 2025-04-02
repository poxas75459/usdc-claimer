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
    "38LPuboYj12WhtWejmMkcugvCnMSiiX8fajASVUqTkBgezXeZU42ZJa4Pae7fmqiZSJgjFDJNTTfdBAm4hRnDMJJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HNykivGXgfxYdm9jLwDezmwNBMu1nLoh7KXFqyjQewvrEm4zJrkFUntaVSs7Fa9MYnzn9Z18A4UexD28z9TTnSr",
  "key1": "3wBHMEfUZrKfzZ5P5mWtoeJwnkNsHBcfCosiFpDG9n7ubHxpEZnFP9a5TRuQ1qH2RHHeHaNCZpeND5Zv5DPwNHgP",
  "key2": "YXxQ27ri7jF6Kaovg7P5pezf1PA5xzNkdTur3Qbx656GjATvds93arPXBUEEBHQaeiXX5CojGFZHVBufYKQGjWU",
  "key3": "47UY44tgUhByGk4s67WaPBNjVpudxJE9VhPuJjSPapcVsQb5k8E1nPKxxNrCqXKNcvBL8ryaP5tGNDZYko8oYTx4",
  "key4": "5Wg5qMkQ4eG1wjwa3FDwecDhi2NXLBTr5nQdWoSuTPJy44c9hPEF74evvL3iF68LVA9AGkVKGug5mcT9Li6p8iad",
  "key5": "2PruYxFRXhfqGMVeKSjyo7HboqAdEeTkXyG3oySNtjqqkny5E15MdEJWfquhtMQKdUwdR8wTdxD8cAN1wR4vYm1b",
  "key6": "5VWv7bwKhHjhnJSwFwbgDRUhcb8o4bThz6Hi3etWmWMn8gdKTTRBZK4EhFFYcsa1iW3sKyBXTmanLy248BKGGyLN",
  "key7": "5SW2dSzHQTuzHDRAU6gH7rUYw84pNn88zqFs6hVwHVnvxZz7rcjQZJuybFMDzYo72dn3RHtBTMXC8jnyEFEW7zd4",
  "key8": "2Y2J6MnUvuqaZvNAZ7ZYMUu626YUPtGaz5VnGxYvLryFmRSoGp8BNMhWxHGzQirEAfNMFLw6wP5msczytHcmEvBM",
  "key9": "4UWFAau3qARHFK9ufiXqbnd4s5xjV2tD3jckMF6bNr2QYNmpAL1KB8nJcyFYiXPmp5biomg8qjFEyVEr6JfCCB2m",
  "key10": "2dNRiMzKXRrUwF9gteCZjmDzxzLDZ1MTW8C7WX8A7N6HJi7aypGKR1aqgwf3g6B3TjR4zSU3f4QP8qLySDotaxtX",
  "key11": "61JbDfm4yVXMUMhR3G2reXJud44DhEomLrYVqz9QJ1d283PX1NeUGJE41iMoYeUyJFRv8wruziNuM83Q34XBoA8Y",
  "key12": "5Z6LobHrd2x5gfSNYogUoDFNERYkCsnDwZqVPLHSHYJzuuNJsRYnsh8gpoJar3q483MaqBZ7pDcfe3h4RpRHAp7V",
  "key13": "LSQJ4tU9ofNhxiCQ2js9WimkWwtEhMVKdWRDCRr6m17pLcrECNaMVgEMZGUr7LHj4rsXxfyi6d23WLN3NSoQHAn",
  "key14": "2Fue9myZ8DRzFENNaS31stCaMubGnhYB68NQCn2C8rFEKjsW6EAzkz3FTaYcGiUx4aCFSd8MR9PXkLSNEk94SN62",
  "key15": "5Kv3AdTWiZMFhWuxUgeuxmH8xxSkGyp6dUbcWV6m6439iJFgL21UYSCr27n2NWD8Q3BPTazetkKp71LQ62YDC15e",
  "key16": "34ZXcjqZjxaGh41MC8G5HqYJX5UpRB2o32hjtrnLTiCcjDyiT927VatRWqLaRuLXRgNp7SHJQZsZVjEL6emqXbpV",
  "key17": "3pdDt34ddZkBLmfLPn7Hd3C3hnUuibtCw93cWcW45Dr58NuwFRemBvyqxXim3hDpwr3yK3gRvVePUtHmRUtm4gg9",
  "key18": "3cSmmfJHs5bVJRgJUFnsthRULqGfinv4q8rQzFDsxzwA36xP9UsYGtfuvH3wWkuXxFADQmJMzL4ZiKbSU9j6JZvB",
  "key19": "wt3J9HkUzZdjTYf2dsfBoXB1uvhPZTJ2cAx8jafgLEuxr45NtzFtMQZtfTSTsh2zTRKyK4D5FYCAz6rVHDt93Ho",
  "key20": "5mvvPkte79BES4B6PbmXnQwvsaoArKF6yd6x1s1kdiTAaoB8PYj93nSUVf6B5jjHB8tthqKVeq1p8GmZaTz3NmRB",
  "key21": "5SQG3PDnyYHgEgDmzFzeZhbQ6oMoeqSQJdCtkex4Ek9GJzjCaaTAAGMktBAVN5kcKhbYa7yTcQCpmRYLG6SG3zbY",
  "key22": "4UABAN8EyehU4dqQuictzVeXXZkXPvSmtRAvRfaUx5xWgJgmFPkRBY5sU9fPJzz9ak5qtm2c1RGikNs4yWEN2TtT",
  "key23": "5ePchHmdqTcGqmMvz2D57uY2uStSQoJKYGSaaJhzmLJiym2Bf8sYDwXyyV4FA6FN6BPTKEF42Ajt7vAHiJrxagtE",
  "key24": "2YxVkAmZ2huz4cuUVRfkrDtdwfqQMrvm4QPWqNTL7rRRzFeuBNV9nUG1swJrGEHiwJskXMfskZE4nLMVHf6m1uf8",
  "key25": "26nsSS9C5S7pfQxLrPGhYjYTWPHcqM5J6zj1XLXGHwbArDmiGriDwXrxyV27KpwVycXcei6hNZW84L2nQzZQcmVy",
  "key26": "3QtbaTFRignmA1iPJapQWjpjiiEWxmjMj2G6eoQnCpAN91kPSomh7Zbe8ygoxjndZYKVeBFCQYgUAPujdxDvdYVa",
  "key27": "4yBHFC8poikPpCmqkqsyxyoS9i9SjWo4xwVAgMNERo8UvMR38DZ2rKsXZviAUY9VMzWXH7VwpnGntfbs1JBg3Jce",
  "key28": "2dHtztKwJq13w1GoBWrkd1y36Zzr6xaHDQbUvvW1Km1VHPRfWLib3ZWQ91GEYKheViQ9PUgkTUtFkjjJRvWYvLfh",
  "key29": "5BUJKzXW9XYPMdhFtWr6MHCqyh5KjRUchgSfN3AD3Df3C62nR17rvpy3PkvzNtgZ4qqtrvJJR6EEkDZ9KgkkBxss",
  "key30": "cYHysKyQ9dHn5rmz1YxWrV2QYiYdef9qq2dgnNMXTRicHRitRnAWEuQtGYERrsbMHv3SVoiZ5uJLzA8pqJZVM2f",
  "key31": "2dFcgVwVcaksWB7h9epRfkXCg89baRBq7mNtzP14p81cx63p9WASQQVud6D9kYweMixU3z9maf9gJCchA8otqccw",
  "key32": "2opNDsWE8QkuULSf8WHwNbCuczJpG6Td6TeZPNRGdaYYdHsyxqRwnPvdrEpzVfB9LhwhAJkKxjvvDCwcmLsfeWFy",
  "key33": "C4VotE23LfLPdVizQMEkjjU6WHSTaLZukt8oHu7NXLhKpPBZ8H9GTZjyYnHZaXZbN4A14D5RVxA8XbBm169BAk1",
  "key34": "5X432LCHU4uRL8vnjNcLW6jaQuci4LRbNs73RmYeKcFM14NJoBqQcDPjB3NUYRK9vZrRZMZZUgV56t1276LNYt7M",
  "key35": "5DT94jayU78dD137ki6SxgSa32f31waGCE69tu4jUX9qSxzoYZvabSy6bPPV31LJZipqjKp5KN53yKU4PjoMguFv",
  "key36": "299qSo3TuQk7qrc6eysnfK5tsBEQMj537UrTLbdiFdZujfTZwJZHXTarmXafhnB3fHu5ALTXZie5korcWqCAyxNn",
  "key37": "4w26ef6V1v73tKoLwXSU7qEFxndF9dzektQEgxefdYopwSRT3tse624Bj1aAS7vw8wnbXM1q1THGfzSDhfyn2Ua3",
  "key38": "2M6quPcsojs3tnU1nfmb2gL1vWHr2zbt5yQ5Phw6fby7V2tTsLSAPXos1iqkRG3eS26WqVrSSPXnijx8Cpk6TDTr",
  "key39": "54ugdCYnriv6p4Ji776P4n5yPK3g678PVQn2ykqJ768RZQcJrpuLjGu4ot8t2mxhN1Rh1e2mqkpix22gxvdDkxTt",
  "key40": "5Wt2v2rCMS2SCcLGsQtNwT7oC4rz5HXA1Ddm729kaE3iyP5xgPikqxACTigzD8AdhYp83WDDuqkLBwBsE5kPLva",
  "key41": "5zR5BHQbnqXt3aewCEH5Wn2DJfkZvpMAYuLe2mvbYsJRAzg1fKE6ybnmgaG5iu6fapJwAeA14j6TMo5pwFBVAXNZ",
  "key42": "44F4rpiGntDFYx2S8bkKU91iAN6GXfKenmm4F9SK2dsA7mV9WXZJ55pxPB1jCQ3cGcrCKg9Tapkx41W1FuvPad2y",
  "key43": "5j5wWmn8CnnhQPdFbjn5wfmWTWkKR4V2MsKa7FUYdcjEjpTXpXpvAXVD1yiaBmf53N7G64EdBoryMCziafWhYiLp"
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
