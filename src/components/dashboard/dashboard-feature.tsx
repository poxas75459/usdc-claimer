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
    "3LcJAzYCd9DTrjsXgBEW3irsKnE3QxX8cB29CxfzRowsRA8rcXNMgvv4vZwXNxHoRzWSxPqg6R5BJjctHVGMCEi8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ER7WEogFt6xJrd6p8ARKpcHvUYSxwEgKLWuqJkz7QmnFx5ktfwrwe84RCitrsnTLKwaY8hMmVgFRb1mT96Q6NJS",
  "key1": "RpACcME1d2EJJ2XtzrVvQs9ExvLgHdsxFieMdfsFz7Gq9GfUachnSCws8xfXhpnd7bY2dW8tW5sBct2ixht2eVi",
  "key2": "44aHVDxdDRHbtXJPJ6XNM6MPW7aKT4EJ38q8m7V6zsa2V1YymKoKfcGaTHv7TqpFusD9sb1z5gGdKeUe394z4uT3",
  "key3": "3CheeociqVw4C8yij6VG7dcN1yTRQpDE4pxDbNnbDRPxhaMTZ92LkBjGVdLVZUAS2zgxGs7MGAHXje9cDED9HaPh",
  "key4": "4re53EfL53UBbhDhGNWveunMeid5omhkY5hKmqUicfe1fZBixYPGWTW5ueAFyYbfKVszaY4gJxv565TffF2ErA3Y",
  "key5": "5RMcDL7YibRFRZ7n1MA2P81M47qJduu2TvJmkVv8CnJuSSK4Wj5u66w7MPaBhZVeAjZb3M1LjCazaH3zqcS7CX5X",
  "key6": "zpZXuUhQauiMLFCiwhtLnENACQ6JiJEBc1HWeoyKuJE1we152UdNoDPacJY7dQA5NHTbtDpL7AtAnky77GbfR4o",
  "key7": "iHcX2GJMBh7KMrFUkwyZMwkKP6FimjQUuo4At7LfSevLk8Cq8gL3fEQvYJZFEaGSnJBPV9phA288bmTXUzzjXk1",
  "key8": "vhLxgy5riVP1WScffxPvgfw6be3xytVhpQX5SiauHMxySxfpgbhCDfpL4ymKeofF15XbMzUGPrxDZhsgm7wpEJM",
  "key9": "GPomDJcNf934A51jZPzXeMvXaA41g3mLP91S1sbxM15NgS6VRvcUYovT37zqXWM7r2iArrKMBAUfUPHXfmt8XV1",
  "key10": "RFA3AgtWWvCWCauCuPHNECzYrawVT4A1duaLm1yDPazNBgJaaqVogtutjeq9ykBhJ4BA4mvhyDwCjtUQK5TW8pT",
  "key11": "3m3L6JLzNQkDZokk8EmeDXrEZuRHrZwZbvJi3X6wfWmyvsAjcCzmVLj96hS2S5BDggvQaa6zeRCg4sjg666e3Len",
  "key12": "5udP7groipaRQGcz9L8rfSHkarreRadAiWY1FVvPBSV543Rc4nqrUKnVgzPYPBUeMDFCVSyc4wAWeyiR6yMqMZry",
  "key13": "3DR9cMDBiHNnXmk5UK14gsbf8LDHWRBhPx7TtwVBVY85VhpVnzgXuXV1y9KrtBs68Db8P67sYPzVQNYZpMbGXigQ",
  "key14": "4AgdY1XQJLBcweuR913BJhn6N1CqYJwnaNmoKQUqaJfcq3SqfSGFS6cFmNUBnznS7NyM1SLS3PE9bGMnggUbXPLV",
  "key15": "22sysw6UJrwk5HJssGxZaaM7giMqbGD5MVddGzJKEpdxpvV7ypWnLEYpdUitTwLC4FKY6iye7Y53QSqzvthmre77",
  "key16": "54JEVVjsEzfd8wGMANo8umfoXxDsqJ4qZD1Djsg3WXHQ6Q8Ak4UqpDdu225ZAuu6mEWFuSRUcmSxNefBnBj9ChSb",
  "key17": "2hRyen7XYYQzKuDqqYoc9FC1LrW9phYpyDKVrSHzJR3CXybTjhQJqdLhsA11A3RKbS8wK6q2f675NxGDdZuZ1wuv",
  "key18": "2uP6jTSAHNHCCPHGtytz8sUrXRxHymYxE1eFy4Rnrq26rqQzhL6qKJKU6mw6iDR9VsJpsxyyeUiUq3nR6TiefGYh",
  "key19": "aKCVLWypmsc8fJ2M328uFU14k8jB3z5Dtz12F1591qn7o3g4J6aT1cfEhTBqYrQhTazJxJFmXndKunZnTS3aTTU",
  "key20": "3gbhJxE6MnF4cMwTZL1yTny9i43j1Q3t9F7CY3hQBnpPSqSEUDWnnheLi88gi3jhx1WBkRKi8fUJWzeoy319xyLN",
  "key21": "4bisWNaZZBWcLfmhMECKuwYx49BbTu5D7xnRt2mkpEYrqtBsrmXrpunwYDkvrRNhgzsiopsVQg1nKb2qd3h36K3C",
  "key22": "2R2ztriwMchqfGCGcwEsx9JsYBAvqK3moPxYqkdX4dAvs4nDUzVrme2Fxp8zF1EdBLbgQDWVrht6AoLHHBetwX3Y",
  "key23": "m8FQhxPEdXzN8yDZ6uSV99kTjhVwKgy7Kp8AV8WJDWHdptycWxkQJwfKyGSyJFZkeS2HxvjPBQGadPB2A5YGNts",
  "key24": "33CdHKZ8xrMqq1YdU3oqH2erELRSmc6W4anRUyQCSB3WMDUf8mpygH2VbTW294U6ikDJWTbeckmgkkYKEmkmFTus",
  "key25": "4u1PvETGfdDrsaKAbVQY8YURPFsWrbNSjcPhhux9R1kQYkQjutFRrk2UBXUprm2eUzs1bzFGdFoh48bBk4i1cTWQ",
  "key26": "quvWXVxxbTXU5MsKNZVPUYw5mk8hQCRMbA5FgBqWJuqW7UXNwd2nUUta2aje2YDcae6eJa51LaZYmTKvD9hmTJe",
  "key27": "BnRiu64RF8QcSywHCLkZCFmEMiSZLvJA68aJFEJEjQxLigDk3qVDSmLRFgq5vPTXrjfR6vmPspzjLY5E9Uo8WpX",
  "key28": "2nPYcVeigYUV24XF957yyNjqsYTLqHNd7LKUDKjsej3rqV443wEtGpZUpqQFM3Wdd6YRN4giKjKxTpnLxdLTkVY3",
  "key29": "3LndBnwqBwWdWV1dQXstCXg6rnJAiyxDiPZ4QzoVZpqZCebrW4XkF9hPkeqb5rDZygtMT2t496aSZhSeaEKJyTJR",
  "key30": "3x7vGsFcdrs54bPNewLo5yJJzJuHG7LGd7mxo6iKwUG8RkmUbtQcT5PiGnur1hdtTyM7EhxvpxWZYx9KVoZ8gbMc",
  "key31": "2aBsmTQmSZRJZKYwenqqirtC9iKBu9MmzvESoTgrW1QWgV664UAXi9iDtW2LiZ9qohgiTSyc8bW99zUiA4yCSLuj",
  "key32": "vDrVVybXizXAnSZjCMaopbtz4iMhPR4D6YFqZmFAjJSN36KqAZwoFBLqfythPeD4q2QtbMBdVkmLdVj9k44EQJJ",
  "key33": "2hoE8cgU7mp4vELYV7e6oZaBG1fCPNpMkbDLnvFfWKMcUehP9Gq3vh7ZpKHCKFVfzuB9mWkTFVejdNx9dP3GfqqD",
  "key34": "iRHU77Cw8GYuouPyNyqEiL2VMghu9q6rjtJcwWM8sExN6UfFhhEX1T9EJSbhefccMWHFedNQSPo7XjK6i7VNxFY",
  "key35": "3HxzVmZijBQ17icQN22DcQoN5a8ViF2VgQQvPv615VStGQzGHCd2q5MihEGevpWYuC16jdFuH2dbckZCH9t8qoYD",
  "key36": "2BbzSwiiNZ25DLVSAAGbnCuQqdqYa8W6hoiGp1nTzeboX73fL1Hzt8b7RsSoSzR1KGeFDVighfzn6oKChiqvV6hz",
  "key37": "2JKtEARHNXmfj53fJLByKdNZs3iRRYz2foDfiTwJjHyjCMw44W2xyNu3q2ivDgCWpjxjzcJzqnhRZS7ZjdF2DYiZ",
  "key38": "N9KfUL6b968zH3xf6xkLC19cFFitjc2QDR5WHUdtdpPGuJTfnGS6H4uKGRiAdwR8YkZYWikvPfKmc9w9ZWb8gPS",
  "key39": "9NZJ1nSasprtxxmgJrQXvzBPP7ePemEEbqJLAChU4PFs6Q5NTDpHhPUx2vbswauhFaiodwU56iQ2LYU7BodT85v",
  "key40": "55m6zFeop3Lzjshmt8HQVdrbdZvDYQXXzwmEQU7gRKRzaxtAeZwGeeY4fVqX4rsdFa6af8r8hy1q7YSFwn5AxYG4",
  "key41": "4S9r6NbvHnWSc6B3g5ehgugkBqtw2mLAG4vUTRnqjTAzQJKty4gj5YwucZMfWhukWDNu7TijFyEJYHz8RNQcVFSh",
  "key42": "5DDYvxbdRjT9kRqCoYufJRMKjAGmTTHu2vBjpJ1df8j83NHyAF6x1ErqYkL2pbvYN3mHXd5qefEdytSsCdjtyf3d",
  "key43": "W5nxS6yN24nSdJecMbamK6ACzVyYYHp2T81iz7iyUHnbd7Ur3qggZqot6MLWEgGfzi8vZn1wgPnrFa8YjXCMeuV",
  "key44": "5otMm6Z5TAtWnr9rTT9qTKhp7WAoGwpqn4mHQgU8ukYx1RzkvjKzVZB5qimw9JT9iJ5PRmstwZGJSnAGbcFWYpH7",
  "key45": "47qCphpGRXft7iVHWvGMvX4ED6ASb9Eij6kyYVshJBZML6QqioEQiVPGjpB4hVmNeYm38GRjNz66rFx15T43QrhN",
  "key46": "4VUnotG26m3Xa2kw2hy9YkD18kM4YUHxgELQP9TTJDBzWMQwk2sK2ucoKko8GBro4CGvaRcUqjTp2WvNAjquff5Y",
  "key47": "3YhHXeaLESU7teTvoNjKycjDxjycaLj8JtaWv496NSgGUeg9gqVDYgg76yAax8aeid6VbK2qB8E7Nu1XeAthcGvS",
  "key48": "h3TagTftnX3Sf8su64bxb9jCmJVNN99vNU4SUdBkGAu41FHGrAYdKCuwqS2MaBaMCoY4VruJj6RWPKqf8sAQs8w"
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
