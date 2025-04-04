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
    "5rWaCPCyeoEF5AkWfYhqmBDR1t4NGjX8VRDnbi2xT2UEpJ2aLwbA1HxiAPzSTnPavmz8RKbz1BD7o7uuAZnQAtG2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uFUAMr9wmFLbmy2LewnuE96EJ98hwJwGW5qURYLV5BPrKXrYAgoH7qZSrRBXtUUzCYCXXrSzqEPe4Zcp3zf7SAP",
  "key1": "52BzFTMC7Aw9krn6wfxkLMAkdJeLNUdGq2DkQMsKB7bdRJjYkvsVN9LA2cWumPxkHhdNTkPsZxoZgcQ2PsEnxfGR",
  "key2": "hVpqgVVhGppo4u1CKmTuykyA8ZL4sXbKppkyX1rjQrp82rTWaLx8qiZyFeCckin29FqTBYtQBJxeobx5s7pPuM4",
  "key3": "Q8WeomsRUA4dqrmJKjP5HWTg1xDRni8mjKmm8KftF7RbfUSaHjDrpiQZHWY4keg5AdKGwTKY6AC6HYcM8gev1wZ",
  "key4": "37yasp43E9m4y3aJnEjdAfsFbtgHFfB57NeQT8t65cjsgGdgPGTuKUXehN5gSLznHkhMfRcFMoycAkDQddwp6p8s",
  "key5": "27yyckbuu38rzxwZnoZ7qzVpXG5nQ4eEzn2rMxPi1f2NQmSKM1xpGc4c4mycseoKFpMKHyQQjAx7KWEKiUQSTaUe",
  "key6": "616ZGAUK15585aNkT2zzjWfG4sw8yenu86L411ivfyvTirh78HuFgmVszybHQ2D1mbAJj3DrqXkqMRTuwaiYQk6H",
  "key7": "2fhBhAnmrneeuoYrJLrna6qrQNPyctLdajHbZ6QALtjgWA19HvmQF6P3GvxCiZYTnbc5YfPpVPvm9Lj5jfGbQf6k",
  "key8": "5rTkEHqeLJiU1Nc78Z4mjSmMqt8vC7UG5qTj8bZgdjBeZxZv8sZnTxpUFafKDQqSs3XtpaLD3fCHN6ovyt4wg9Zo",
  "key9": "HokfNekNy7NC8hXbeH2Z76XX7iDzzoGEvJXJgshfVQr7EC1apQNBuAUVdN9pF1xBZ9onLW8yaZxtvY777ccwi4M",
  "key10": "25VycrTnEYkw5i8e8R8UHk8aDpSwupqSJ5usj5uCxyeL1uZYn2FEQJD45ufssPJDXMzLzDYJ8fk6Fec2w18op2Zn",
  "key11": "5pdCqX9MH4EtX1eNhatSAFXYwJF31nP2dMMMm1tq9tq3m5k3SSTZHCufMQQm7tEo85FAMyv9SCrtS4gZrdWqWcSv",
  "key12": "4JJcUUbqwJFnRqJeaDeNnYA5KNxTMjMKz7n1mGmtwPDVpnXM5sC1Y1AyWcv8SwzS6Y2rHbsK2agK6KL9zah8HPdP",
  "key13": "4ud5X1byQgeZ68mdcC9BtvT6ZKt6qLGE5MzEzdPpTntVLjWnZzFW6GGuy4jVKdkQ6QZqjQAz8QKeaLhWEMjjhL8M",
  "key14": "5NQuLgFBMhyT2aQPyo9PYNX4i742eRLoBwUQF8YgS8QYDnoT2ppSLm84XN8rVWxMpb2n1fqVwHqiKeNSrDjuhgCi",
  "key15": "3fM9croFuAMrzdFaYL1gNbi7snfiHD4jPftiymWUFCH7mfrUhUCSqajKzTJyMPWdQCcPrHqUPyXcqHMRTGnLVswn",
  "key16": "4mBHVMxtbLoCDb9Jp1555DzMQBWHFpbjxeuGLbenJ1mmS4giqneYDvj5BQRtnq1427fcy9UaDA2wWZfqtyWebRiE",
  "key17": "55wGtC4Azk9SE2JZmq3oRCNxn8b5YEVpVouxrNHRt33dEmUFFK1YsbZ8XEc34vQ4tyScX13M1R91H9pQ5v3RNo4C",
  "key18": "v2FbRFXhZXFLQoTAMoprNnZiUdM9KsqM3SB94fQQBGbnq2xpAx8hZzwz8gmh7Js25nF1xawXP6ZQmANqpx1Rmas",
  "key19": "b2w5ebT2swfau5RmRqjp1eSiubtwUXsFb7pJFxa4Ti5Bpcu81axNd7s5rikjip7iHLdpRymN94w4fvCa9XP8nbo",
  "key20": "2QL95hC7uyiBPNyD82yQvzK8cvCZVdxkLKb1eDfh7Wnj5p6LYNycXxmtxsBMBM9EPag1Vx6WGEZUBqMsyVQ7UBi7",
  "key21": "63qzYj49MDnCpHjbkfEX3pJd2pvS3AobuvaLqrBmtQqnPXMz2xybfbiJ4rrrXimJA7cH6eRSqNkcTcbM1TuCozoa",
  "key22": "2Km4TZba5CWKBz3UJ1tYCEfqWyjMXbJ6TsswQJhZZ6Td6kcf2MYXGQabohHXL6TxKW4vZTFM8DaHpcXv9qKpgqiR",
  "key23": "5xpU71rcJK3EUQk2KCsBJMpfcPabBo3NKLNocPaRAWPeJgk1o5GRneL7LdR13r1BDGxgmHDJoCPduK3rDEaVWg5j",
  "key24": "4EF3Nubtooxs3qt5w1kG6cPPFsfy2HayQtYF2tUWtVPxjrkjLKP15quhPYinJCdyw9VbxacxPreg1Pg841fajMd4",
  "key25": "65ZPB1FTpRXSs2uNaeaYMKz9MqGqvy5d9qQ2Wf6JyDYMHCw4w1dR1RaHRVYh74MVfsBqxfp55dPNqzucyr43vi1p",
  "key26": "4YETh8FxrC9wdKBkJrtGoB4fCtvQJS93vS8t52814iFrJ8DUY6GhNNRxA9LXExjZ3soL6BMHZeCRhJ1SUXXQEXkB",
  "key27": "2MSxx4nNGodTMADqB6QSiiXZmHmL6DaMyJ5uj8FcWt8QVJnFeaXpgBWxpeVRFV3WoCetBZ31M8XjfPM7tFgjfdLJ",
  "key28": "5NJkss27ofAnFbrs1RiCQpH3a4ojtCLPgfkLRpAxzhtDFRp8G2AofGxh7NDvGmakqJ3jVwfPsSdZGzHNpTVeLcGt",
  "key29": "9oDZbVUMpGhmQgyCHqALiLhNoN12hZa27athNXLz4WZ5F54giEmKDwjCCh2QEvQKMsCtXs4GLDdDSHehjLmps5e",
  "key30": "4utzh1VnX1vP854TDWC17bHLkywwB4e1Y3dMtpFEULu1C25CFa6LXLf7HyDH5eNfyGrCc1DU4iqnPWswwRcBVjVW",
  "key31": "4tdE5MP3XUY3KhTUfdJH6qCujiAqb5nFC9dzFHCw4oos6b3KwGfMvJ6gmrDKT4H4y5iVu5hD9o8o4sACSToHreRT",
  "key32": "nbU9Hpwhx3UaK8niqAALNoUWZugmyDcWjzWTen6h9Gb7y5rLsvdjk92KrmrwaCbyQZf7T71FccQsNWaFyXd114N",
  "key33": "5rQ1iHpBW8izHUsQ3WgJgngVzaufxk7saBWDWUbfQCTxzBu9WM8HGQDkLaXcGJf7P9ZJMLgB6B8SQKDpgekLwnTi",
  "key34": "2h4G3RmmJWxtTEN8zowuLGasGBpjikNvdopCRe6HmXgDWoBCPEiKfxjkqRMntfGhH8RrDQ8kTMNUNgNWJiV1UjZw",
  "key35": "2SK2XpUj3j3ykzMcuougMYTLJGvTr84owJpQFzUseuHBfERFDSvLAvAiqYrY6SZ1yXjtxgN91gdDN1Btgt8GSZR",
  "key36": "4cBDr3Bz8gvVxgUQYkNXVkFyk2kneERdk68EJEzuU7hkgJfjaGowZoZGiM6kKVvoKLxhTqn1tvDqaxmPNWVHDGuo",
  "key37": "5yQcjs8yk5ERt32LPvdT4KPA9hB8c2yxxEYGLK8MNf6XajsDEFRj4ZmeGwgRyj9AW1Js6j1bgtLe35GAfj5vfUyc",
  "key38": "2D4Lw2PYXx8XRS7TtvWuQEAaE3JLvkJqkFkzydTeVpnQC6PQHxXpYhcE9yDLFHALRtN5thrkfCMCrcZwxLRs7nVW",
  "key39": "3j7Fj4TN2b5iWmzZFG8cBkHFTeZXhCtR93enf9Qix99D8wTuEqRfraGjxZysR6k2GWEjPtMZ97sRM9s8AmkWLtPh",
  "key40": "92g2GLyMNMFsLA5Cg3YVkF1Te7QhueJ7DFgkiXG997uZCoy9nFxCxgJ4TfGSpFiQra7GTT15ChcAtJAeHx6Lfe4",
  "key41": "8abavUqahPgtC4yMwm8GrkVYDsmZ9t7jRcAn218AgQh28N6zRvKb2JqmyP7oc1jMvyoa21XzuGBXQyujXpnY4kY",
  "key42": "3XHPPAys7zu2LBKJYwj1HY2c3f7PUjT9mRkR5P2AKwfN1NWe9TCxgDPF5UuR5aBgzEwaoKXTNzNMjng7A6hHq6GP",
  "key43": "2V7uS9eyHjbSnSmikyMeoK5tQPotJcb7nVPd8q2pdDUko5LH5RXnT8uSeNBm8kZ1psb7uxqFUCB7CSeNGfbjbPEV",
  "key44": "2ALYk9eGSSyUsTR1TvSZuoLRGkX3eSaPMSkEVBPJ7j4etjRSumy3TpnfrPihd1qobrXi2mSoAcMbJ68KiW75h3De",
  "key45": "2tpm3ZERsj6Nw2X2n16iHckzfkUx1hnJJ3PJqCVF3Nsh2aRQkBaLvBnFRJEY6dwgN2sFwCwmhfueRipzJcb6exLm",
  "key46": "3W2drNn3CNw33CpYDP1uQakwoEw5U2YPTJ5fkftXthSwb9WBUXnZtJjUzyi4rK8TpbShm1RdBZKfRcg3WirNDrJV",
  "key47": "4E86Wo9SD7gsko28gkpZFVWZubntB3bG1MFaWDnoiG9Y2zYcPnz93Qj5VkZ5eeAxvSmJx9CEVWkEiy5d5ccSZ9Qj"
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
