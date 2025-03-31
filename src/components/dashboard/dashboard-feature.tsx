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
    "5JLMNWZaxen8EGcCLssxw3QvpmLVoZxpwJ5qMp6yJpZicXgjoBLBuQ8HEjkChkog4uX4qZjoA9goVCbj6PmbCMZB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hmnCaWDPcJgeiTfPNk4oWbCEvLk8dzmae9xZxx6mqsQeKv7DTjbUKZh8Ry9QiZ2YkT8kJ3KbLfFpWriuNPXKHkK",
  "key1": "5KDutTuhDnrsS1SPK7Gx9CECYQ5e4KAfgf884fWLvs1nYuafSwnrKN2MZBYBMTXrp3TWfAa6SDR8k3e6iPQn7XU6",
  "key2": "35Ew2VGpyuH1jxRvgxzAe4WGa4EUyNP7jdVVEgpdEu4pUNAuztQHPA6BQDRCaijNsgcCDp8Sy7ooLB9YsZT6neLq",
  "key3": "5tMS2b6JNnnVhvFUHECvTTYwSmkTX36hmi7pujPpJ8cGRce8Cr23oyANGUuTW1nzPyFVA4QKg2CQox25dceu4gzg",
  "key4": "2JMR3Q9YEVH5TXa2G6UJRtsibxoSPuMkY4w2w7xitbEgFGuKYSN2fCobNHwoxmXvndtmyc3uyoGb9PeAMSvVVcwJ",
  "key5": "5pmF7trBYdtJEcDPEjHnaaAcuQtZin7ZS9ZSxGVdhAtgNsujvojoj4NskQdYY2vhRYRejZ571H5ptWFaU91pRL1x",
  "key6": "3HkpnwR9dAwWcnyWN88RXfT2gx4eK8vYLabdGmFshGeCF8B6paZS5F1JVa7kVgoC4FboS1Db2chNPGYs5n9tEcud",
  "key7": "2UQ59YrAdHygWD2yckL5TazFeVCe5t1eFkJW1PdbeQqwB77Nje27K4xaR9E2tG4idHAKjiPYzTjwfPugYa4WFkrc",
  "key8": "633g4vSbnCE59YujdE1UVQ5UGitsrmwtR7CqCEJGLaEmRb99ifCEGwy6s99fnP9xpxrvkZWxjykgDXUtNMK7frkS",
  "key9": "3tWXbpK37qteQjKcLy9gCYT4X4xn5SQxy3GRXiGtNQbHkhdsaV1UiMjjS1qEPBTDcstJJsBJRCbDs5T4yZtUSf5q",
  "key10": "zJL8kxJmmrxLmpRtncj3WdjsAhxGhjiZscfv8Jog13Qo9mGxwEa9vDYH6WzCZGdb2WuWE1FgjvkbYH97uE7WpVc",
  "key11": "125yUp4sZG2Ja2vYjn14ceBx9S4QCqh4ZNoG3pVZVrmA7V2LyC46FggVfSKXDgHjnBL1vcYYGdVGyokTM4wTuVZV",
  "key12": "3HdaskJbeqo2DMozc4DsMaCNyED1iw7pnvFWt7RLepj7A5N3wnhSvQsZSWAAe3ZjyZ9NM6tKJ1UGonfX6iZJPPmT",
  "key13": "GyAv7WjTPeockwvCr2uqSsgVNTHEU1Ryq6hZhPKnPJzo2CykcFtf8jGBYmTzLcR5Ara8XscfBRyNqYGfF6vedP2",
  "key14": "5zbdBeW4mtoJWFzRq4Rp2WPSd9ubRRdKk6jE4KuwZrforQrHMqxoozxkzoGEC1n9GJ3EYuSHH1y7RdVnY6d8eKB8",
  "key15": "SaG8GA3Bb2D7Q6GUrXMtgvE9Ycjbv8jTvbs333yQAzMYDMTyrEPySn42C2vju3n5XfoXyGk7PKttcb3n7LQrBNN",
  "key16": "5kvJwipSYdcsBuzGWMZm43XDHfVD1bbcnXP4dFKRd8fjqSYKZqHswjkdF3XnSNsDDTVAsKCXRD1kFGDP7cGtuqMa",
  "key17": "4zQDMPXZZXgeSKhD1njv4tUwows4QaWjJGteZbPrEVdyDUrXbog9CbopMRekAZ2P6ksEYG3iMz1s3DJzW3j9RL9b",
  "key18": "5v9ZViWZA3X89qHgXAKipbxoi7XYFH82snifC8wJRT6SRKFRsHS4JvcGCopKXp4GcFkxhEKuKYZPcTwSExBBaFKB",
  "key19": "3J7a1g67muyaStGNnKd5QZaFF5wnKuCZFBLJR5nmLuzcG6vcynydsFPFGcK4wNGRWoFcpzBhEUKKrW4ti86FLfj",
  "key20": "Evyogaz8hri4QrHXUF82gi9M22Ti3HkUrt4gkobSeJuaa7vaaYy2216dieC1b6yQTR8yiAdRT4DCJwD8ETmxJkF",
  "key21": "V1Pz3KUnKkEaZbMvC5BidJB4BHpDu4YoUiVvqvgxLPGpUsg4GcDi7YzwQPi7oHjGBXR2U9iKrKu64yETnXPppY2",
  "key22": "2yStLMY4gPS9RGcYQuEDxyNx54N5HU3gUPq8WWHVRqFS43M3biBJPZ1cH9cqPiMQD5nGSpLA7xTEiVj4G3JndVsS",
  "key23": "45q8FN8m2AqFTJwTYSW81GhkTux586htFgSQohsR6ep5FUDs55Br3qpzuhJbWWGiLQcAwXjK8E9s7aNK7EVqimLJ",
  "key24": "4K1UPK28VbcKoRussqtSwiL1K2unqh7SvLTXi9b5X1SPdjn7rnPxTT7jgKeftgQhoGEmWs45XSCLndtsNY72ztbM",
  "key25": "DaXqGo4xvKm937bRWsx9de7yjDw3aVYLQLm7VEpXiAYH1xfibGc5kJZFsuv9T61aV2EUkB9PcifS7v9L5RqNZjW",
  "key26": "4eQuyJcRLkwRkQehJNCEPkeBAiNv5ViGYytUGQNJiyRUsA2XM9rHm5rDsnwJ14NYXJaV4Y2wA74eZaLU46hb7rkK",
  "key27": "okwnWX6XaQ8HSYmahviwFUcULKNQKc38DohdGAUKgTkQAc27tYUt8RLSQ36dPrCfq8XEuMH6miHhb2YmuQ2dnRV",
  "key28": "3a1WF2JVuAUiNdwfNCJuMeossBit6XQiAftiTgmLUMcyr2NbGN8kFfGq8T95qvJEKygXYWfn85qwEDpvNxNpnvnq",
  "key29": "25phTkkjoJFkHp9jhy93tNWYasG2PSpvouQaxczBgiRuHv9miRWtFDe5958BL9ZUT8iWaTQigFRhBUiDuh6ijRNA",
  "key30": "3CSF8fMWkZQyu6G1p8y9XKkCzujLkhnmhGtBmp7YupUxPkT2vPzNdWAvyTniyGAqQkmCFE5e3TYyztdhkRQBDBeN",
  "key31": "5WCdKvpYiJkfy2DKsy2PYpL6zeRRk8ZcoAZSv2LXDpAsPPzASWKkWAG5o2CQUzK4yPhuZvXKttVwPQ42hMsWVfR2",
  "key32": "4B6EHiFZEcFg9j5DJ6wXt8seWmtDbQYEJAd863qvCn4CbPyNwRXiPR3xjT5o2CYnU7JDQNPU6HV1feypZrapXgWB",
  "key33": "5r7kjfJvSovjK2ajkkac92N4NByRNP6b2eMvYJcqquaF6XV53K2xRC6whVGSuYKiPqB9L2C9fASpoBtL3Zk6HADM",
  "key34": "5i9jrZLbAbmSqnhprYNXi1a6u1nXfmd2UhCmajuA723fi1aMzutT5XNQTZ6Lb7FN8Yuzgf6oCeKY5VARQkzfPQTF",
  "key35": "Pz9swaNHmqDZpx1Mg2nEKxFyoCTeSYFBwoU5u8oRUV3YCxqnDz4pCz8ZFAr55En5mEyzqTThrtjqcQRU9C1Rted",
  "key36": "48HBbiDWAUqWkNM4yuQNzYUbntQJWosZM9rUUQS16Z6mYMgg9fMRFEufzUTW1RybGztCAJbQen6WigGsfSA9in5u",
  "key37": "5xjdvMUmytQR4aj4SpbigzgD6CAxZxRv99M2uT3kiRiiVYcea6ng7ezkSuTL81xfkWrLbPzQy62bLUjWkPHZR5mA",
  "key38": "23GDmcquUg6ujgy2Bd6UowbPRFZMRytaAhGHFDs39xMJ56QDC5rgtPAZkxvAET2hHARt2daNiyMQF7dPviECVHw5",
  "key39": "3GJ6zpxQhqAHRVMg7tumBZao3yAcw4bNUsNgNJk6S49AJpmKb6AJHSGsu8RZzi8HfTade8c3G8bwR59vjNuQ3fWQ",
  "key40": "5YKMoBXmnWQhHimkfbBeLZpmGCpYiYxr1ZMmktHWmiByJgvtQjvZJnKSGNfrdekJR9tEtWB1qNNUZ9a4Qzw4yEmS",
  "key41": "44uapD3Cw9FGnmWB42amsoCMY11hEAyBH7SyGtt7uAEQVkA1tP9ZUVqNJoMjgNb7jktC8vZr2tmxqtg2VPQ4WCBh",
  "key42": "52U1WJUenhHHJCQzkFZwE4mKH6i9ZBJyxjMSLzUBjRqmA6DyRTMLWiat22Ye9vvvniRX6QCUZnoXdZpmCWCgoDcN",
  "key43": "454Nz8DTfGGwSkCit4DwLpFnT4UguX7eGoL5C8RKzDFqHv9ixJiQmUrT2NchePZJDqTqskA36qHEUcFiLtaF47yV"
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
