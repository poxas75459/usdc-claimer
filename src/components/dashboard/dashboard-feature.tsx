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
    "MZ4rEX4bmDToSbXrtNft9W6Q6MeZBjDf9LPuYqHrPShgZUbFpdhP2g8YQ77A675p8rzHZpE8kh3un13bDT2TA6b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jQwVKtVEERQuHSEiSjqmepFveHw3hG2EoKwC4bhjBjq7jaTHPQPXC5S2BRKSZ3bwjvuFu3o7UPZttDLT7SG4Zjm",
  "key1": "2UPBGLJMfiXYt4qnjMsx89g3jjcmjA1L5rhnXC8ouHNf7JPwyZaK4vMgyNsQTN8WcKfpofDvq2fKi4kCDdbUUdL9",
  "key2": "3s9ta1tpWwxN1Yh1zAGTUFrZ8JsPHeBi6Mv9XQWxPfvNxKkvWCz1PW9654nZpuLmP3v4Bu5SeBhk6FABGz54ZV59",
  "key3": "44upSVmnrRDaLjhg2EHKfZbFJzCDm4BFzgTHSqUVHsqsWCWJF2nVEgJeJK81jHkhyGziwobepbzJ7BEtZyzzMj6V",
  "key4": "5UTjGta4dRZuuZHxMG6Tgayj1cyK6TtqvtBNSHfQButyK8bsPknjdsDh1jUGf3Uezd6rMa1BLcgFza1CzrRYa52Q",
  "key5": "hjJStwtRhA5woe7cTJL3XaFUq8Q5WSGCjeqfCdhqmqsf4VE8q7jWfe5SX96WYA7V4MiguDoxGEhQonPPp77MGK1",
  "key6": "tJFwD2pTKvXrG8mFrnd4UV61Kvydug476h3nKDn7kCu8myRwBcZqU2vcNN5nn7SqR8VfXgBPknZnnLz5QwDJGP3",
  "key7": "5PhHwgcVK3tG5gVKDibjFYA4eDpey8q9YkymvKLgoq1nJz58pFEsUpbK3TUs9kDbkqW8URqHBwxkgB3GFBuMJveB",
  "key8": "5PvshzDAAzWypxaWNQJyephwn5SYb6ceyBnXYX1Awa8ZLfYBSUJmZdjKJX63QJaT3UNGoXwSiAC7TaC72eguzGZG",
  "key9": "4HbpMxtnH2habCmbRph8XZufvaCK9Mp7oE6HerUTCS5meVUKqTemFmPdJA2Ptjfpvd5qiy2RfdGMG63GNDpPVW6k",
  "key10": "3YieV9F43vgety1oD2zUqdhG1zUQnrvsqazVdvqBPpfHYmfFjTSiMUtQrykV3aKYyXdM8V2XuCnmiNKYxDQuZPLp",
  "key11": "4ydgoXVD5S6HEem3JsEhdUY3tRmtTPUk6tJSnmRFouxZ5ZdKmDkKfru9939Adx2kXnZv5CZZrYxbRwXsju75zmas",
  "key12": "4SwMTAAFNPucNgM96MZtQdC5NdD6nc62akwkt6xhLHVghgaVCTWep5j5eQfJLGFR4idHpLzSbC1uKpbzuoggbjW8",
  "key13": "61wg6fFwwzwrMNdxMnZCHpjjwe3aTVCZEJ3H9cb3gbLEKhEgQU7p2Ai9dBfVCW9ZWkitRzZHGhLCnZjvdMzJ45e3",
  "key14": "45x4XFBCHov4zJbvE4zX2G2XA4hEFmyDnK9YTtrndPCL7ygFC6GDGrsCjBcybBv2DdoV3FtXxsvYXuwXezop1CTG",
  "key15": "4MTPnFcCyKuy11EZXvJEMRuYeLuWK95KkDEycFdtFb5pwpdk6qjT36eyWSrjZuPzqDVAMeD38vtSD7m7T87DSziQ",
  "key16": "3pxSF4hGyKwYwLpa6HSF2o8YtJFfjJoGwJ727xxVgLPzn2K254FjbPddLNAKdBERVPWexR34wgex6Njr9NeAL3Yt",
  "key17": "4N9ad73Dsjn1LQmNhtqD2vwQM7CVsFoGkoxMyoSoK7weEHMgDdFa7YRZJceLtWvNJ5V2FsoDsNW2wtYxYDguLesB",
  "key18": "4jpJhKkjxJr7f9aZnvf8KpoZF5Nksoo7ReWThpK9ETgXF6A5dGdxjHPwtZgCZHXZcJEpUf4oih7avvSfg9SyCdgS",
  "key19": "22r654sTwocxaYyNiWNUkuyHn32k5ufdXMFNegVHxLvd4pwewieRj4cJV6vALRdDgNKWPcqpBwQ7RkU6CJY2nkKy",
  "key20": "ifJWek21N3xveZ9C5xMC6ARp1TThPdd2Brh7CQxnrFtNiA7RqKhQAYizoM9bikons9UxGyhLcT2SHXY9uesX8s6",
  "key21": "3r5yNibc28Fqo58jYLiCG3H4ML4jbRrzuzrjrGbfBETqsf6ENqcjxu2ZBaGj5qGF2L2epM1yEkNyEECMCYay4WbQ",
  "key22": "PBr99pDZun2kBZmgegYHCyz4iYQzVaWpnoeprqz6n9iC2xGxNbDmE3yhEjo8wuep215aLjssXW4XDXd4vr6swQf",
  "key23": "3Tgr2D5vgXvP2NSgWopFaP9LELtvZB8CGZp7CueVykLyhXVv1z7xTcaPXmdpXKdDpv3AY3HkKbyQnQGihx5hDdQX",
  "key24": "3A5Eg2Es5gyi78Pyvq7svtc8Jo7Lfz5qmbdCZnJmEGEocsdPRVv6Vpx3uUntjg3HGQPQYH9Q5VRAWerf1FLZZ4Sa",
  "key25": "2MQMTqkfRRo1nxwqbeBY51XyipqHGvAznN5iRqc87Zw1ZegKFzMnCnmuPKSFDryGrErv1udkBRSWNWh5WXjesphn",
  "key26": "ey8AvPacpFdv58Pv4N98TdMdn6F4aWP7TFKwVRx4gaVqA53Uwb3QDdbMo3XpTQDdUEaAF8XYsTZ7Mf44ycXUCEA",
  "key27": "3GhvfPk7DNZ7NyJ6b7b8RhbfUezBYL78fVqinEjcWicpDEybgiH3d4M7M4iqN6W1ZNcRW83iLJdvbdmbtJ9rUvAN",
  "key28": "3CXsUy8MT3RBrKhT7fmjr2kp1MPp4oV8e5kK4FkBH3fKAjQn1Ymx3CfdZHERfLaaKGLNPGJvXk6q2XzDkVLz3Xqk",
  "key29": "5MpiLxGTUF8xYMHvRzy5RGQuJs997joyaUNVL5Vgo67cxbrhyreBMH7e7MVJeHnWU676Fgb6oBHNWxayFcGixsJx",
  "key30": "aqDALc2HTYdMcA82qAcWRKHDSEphbd4u5kFmnbkAyxQehwgo7mC7MJBYoRVqbovgt2rfEtKqbk7u57gWf83rJpv",
  "key31": "xass8X9YS2mHNCoWxZMTc12rYssmDyhZpRVLnumaqoNm38LqE212KhoKLMWg55DYTF9sqPX1f6H2iVpKNo1M1Y8",
  "key32": "414Qif9dg6rSeXas3AYqvJf4EsZBUhif7LNbquUaagYnuNjTsngY3ctGadecfJcpJGGqEctRKwf3B8C4CfJjoPHG",
  "key33": "4LLhG7jGsU235R78oB6hMdKHzYMemZLF4G4oMWGgfc3mKnQMHX4muE37nwmfiEjncvX2bZnKnxdMqxJVb3oKa2d1",
  "key34": "ayWgQGZQEAhg1VTY92W7xFENkqZU4LbEQo1zwG1Ruu5GBfWnaBnmRd2FS1yJxt9r4kwSXcKKgxhmiUxjh3atzak",
  "key35": "3hw4sXa6mpm7h88HTs4Qwi5VxtPkz7TrhMAgqDg4Qf2Wx1DE1F56VBU3vgTCcwyqFdKWsPGsXbLWrCcDdXMS3MUk",
  "key36": "4THdpv3vY26x7aP32smaMFSvAYwVWHk9kWQPTMv2oM48KWqTxjvpvk4cPmCCPCpqdzfWTP2PJ1zYcQd2WzVVjjLw",
  "key37": "5qANPL4YdjYH1K7vnUDmTUXNVJ8YEgJdQeKK1kmJR54DRPsmqyEjdtozarWGZUv2j5oYjNCWGU8qYcemjjbs5sWb",
  "key38": "2rZKCDyDg2pcVx2J3ppebgwcW2V77758ZCv8dhDCit15vR7YqERBpt5oJM1iqdkswQdWZvfp1f9vWNbvAvcrzpkL",
  "key39": "3PT4YEytdnyxzyWpJrDSG4VMbFRzFCnR7M5QSV74HRtckwtbHBPbMVSSU2J8qTmzmReEeXFtZcrmTZwPk5wYB4Nu",
  "key40": "2QsNWcQSEvrcGg5srUqjbMs2dSG2un81WPxW2dWKC7GecaKKgwHk6VrXqAKngVMd1kaRxWr6oyk9QJs92DhGiUYf",
  "key41": "wMLaMEJWAwJRRM4dF9o7qsTFaeVhyDHz4ctn4SjBrV1dQpef4h9CMAimLtU7oK4LFd2m6F8KcVVc6SWX95e8RLZ",
  "key42": "4xRz4G86rLYEHU9YD9UjoYA9XMbhxF7RtESHHQ9kB2VVjp1Nxb25up7tCi2myLMNQ1ztppme3D8g7A3cPCBBKTcL",
  "key43": "2CyGqmhLoeYB16yFaCSJb9C7ENzXk1GPnyWpGGduXQn1P9xcpm1mgH3sQcZcYYeqravDAMXxDj85q44YLofBSuVy",
  "key44": "3LR5MhiDH8LcoAkwKxfnzA3c1FwD6it6a8UTRBTEr6n7TxArHZvHzc9vri5BbQmRFmM41PgRbnKDrtfuiLCYr8Vo",
  "key45": "jGF7acFB2dTTUycpVDHgCU1pwrCTuVfQN2hGxTQNnyW4arM5qggn3ESgdY3JLPkVeHeay4n3SaWPK6Hq6x8VGj6",
  "key46": "5C2JmfMcRWaMqW2ajonAxgKRiXgSg98HKMKWH8DZPaHpo4Lth6utMLi4BiuxcSuB6Zj2DeCg7JwWeYkFZ5mMay43",
  "key47": "3eGqrxB2DwKpaGiCWRVkMKqursFc2YfgGwmyyi1qv9Am7V8xnMh21HEsE1AGbKuUKseyGnsY4LvcUG1ZT77rLxKg",
  "key48": "5qU266zkuUjgD4YQiMHnvPGpfPSjXLFUrvRTeFHg29FkLsJLBGW1hdgTbGNjL4CDgrhaixPj8et6AcFbSWMa6VrU",
  "key49": "4bgiTsnNFqTGgC2Zu7JcKupHK7po5bNhwMrvumDhaYRPoBYr2AfKthP8KCuZQE8KtdZ8F29Zsmv5mcbSdiUdJ3dp"
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
