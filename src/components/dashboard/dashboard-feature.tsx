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
    "2sFkLCcSPAvZXW8aBW4uAEmBBzibWUz8kc245Snfm1iQiYAeXg2VhW7MggLUmwR7Ly28v6dxUvJaSK3qJnnucKFn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nNHhiDBt6pcLgzdtrizi8R7CZJgsMLiuet7tWWBptSKpdoiq6QkY8Hi7LT9cM1DM8UpsYU3oamA5LzJPMYsL53U",
  "key1": "5dns4KpzMBgmMgaF7KLz9sk8MwGiQtzBSTPDbtjUBGLU2mX9GAkbCyTWSwBj9KrwsUVn64ktjSLvvCd9nJ4SeLay",
  "key2": "5qPjwb1Gvg6Q6VT6V6u364EJdQ18x1beau7EQc23zYHGXoPwAZJycaefDnhvHnYEwAu5q3574ujJgpdXFfNcyXAT",
  "key3": "65ZkTnqAREEgY29uDEY5jQmiHqWmGJYeTf6ke5mA5qAZ2Ey86Y7HcghURYaib9GcS4YdjSzA4dCVSwJw5gqnemY1",
  "key4": "3GT9e9jr8rrWBiXmz86xM1EGq2sNyx3WvF1FSLytstnxPyXeFMwLNaomcUaFEPZQSsdWYMSFbzj3t5RYbD5urbkx",
  "key5": "5CBRTxHFRXN6xHG4iAKfGHErhJwhr2v1fuRgWVssgWQpH2ApZxmL2EmdG5vfTfM9CKFXfnFK3mWNhVxfEvYKPbcy",
  "key6": "2W8Hq25oFacvKXFqGRv1evJF7NYmB2hL8DjmBCegKSxpXxVZihCirq5ftiH69Cm7auTiLeFot6gE9kqKit3kfwZw",
  "key7": "KHGsqRzGMVQApnkmsTzesvmtkpBCH19GSoTxoc8fM3ZGM4Be3PHRDY3jvW612khtzuK1tJXVyaAecYdjvzD1wn8",
  "key8": "4c7yBAzBukeyL6J8C944Eb4VBwDgxniFM3ixMFhBy9QYPhqNW2iDPN4NfzPhUGhvmm9yzZ3Qyw7jVQ5AXE5R7KH1",
  "key9": "3uy9xBz65cxCquvnQvGbV56bQh7xtJs3m83tXeRuF9qd46xd1btnD3WAGxu2pcbbD9cC4RwytYLGB3YeotWYnF49",
  "key10": "3vnKRWWo17mjLHoicUbBY3VmkSFzFNQd1UuWDtiQjwaf3Xqd7KGvmD2P9qziWmA5tdBqg9p4BSxvzepsk4sUx3j2",
  "key11": "46kLum4fgHwsDeuzzZqBLhLXAozKt9LTpEShuCZnYSSdtewjbvo2zv5f1NhsEFaSNo7QEmXMU7ApqvDtR54TCQxZ",
  "key12": "k3XJ6ePAx5yDuJnZVMLTcTWcHbz5zu3bnK3MkZ3QDbBkkB4cy4HLee1bBket1DK9fP9SEvAsV3yk3BoCwVoY4PU",
  "key13": "UynYYZHSLo7daEPmSQ4kTVnTKaRWghLRYV5Wvrwp3628yb47oehyeNYdY1s8E4wAcUJdZc5TkV5E25gakgSa1HN",
  "key14": "3WHCcSJ7nv7aVqwRCme886QyfRk3jt6VA43gWm7NXGwjw1naBLhhQwSsrEFuwJV1qaiBbXQwXWUw7nqwVkVrWTpi",
  "key15": "24sYcpCQNRZ5D7vpur1KDFxBhegSQ2tiWyEE5FER9EbpC91svZQqtigNafw6eAskZiXzZNaUYMzmGyewwbsAoBEx",
  "key16": "57g6AMdQxLibS5fQzFEcsmotC5ktzDLxtHARGbvJQioKpYSyrLX6Ubn2YfZrUCvAUawtqqBibBHJe4mW8f8C2ecY",
  "key17": "ujb4dizniotGJURpHagN8yUoazwHCVhgjHMwB2xaupkcbx4SvJoj4kM4DDUNaiaJswbyBNtzBCxBHkWSi4w7FgJ",
  "key18": "2BuMcHJ49uwhCuvdyFHPvrkYQx5gx9kXNTmUbBeyM5raMUNmkNr9N8PtkpUa7CAs2YN5AJ9nvqkfpNQ8peamkboS",
  "key19": "4ju4eWfBZiQWczKm8kFYiEhxvsjQ4wbhjrkBicuJbspud1rVRauZ7gbBWosEydAhNCq5uFunMaKQJSondze6w59z",
  "key20": "2oWJ84U9VmpZLEVqKZ7narRJpbrwKZEzjVnuoPwDCzWbiYuXz6Wz4bf9UpDaqD3ZYwRw664GK4ysZ6EfopVCVjgL",
  "key21": "3fKxo2Z6PpULHtJy4tUmDviV9qtDozzbAxi62Z7iYjhdWPebcvZfi4cnDMN7i5gMQNatLtZZcJdXvheZqnjr6iFy",
  "key22": "3q8PMLBRymftvo6uMrFWDZ1vAkWbBg5d4Exmctazx4sKWdMoXmb63DfJ4B3z4h93HzKD4Ui425NGY43bJXCz3Utp",
  "key23": "4F2dMzkvpjCeSJMosnyEYGuTAutt4mMJL13BtoL8YNWY7y7RrAye5XJTKFygaESzDK1irnBzvALviCNpgAXBZFoU",
  "key24": "d2Hip1kS5wh13bKwqiHkUUdNFPDQrjG7ZrVtAJ1wEpP4iEfp8aJ1dK76QvNjmgsiLhXsGWaBdNQHXDxegcgUb12",
  "key25": "4DwDpjB6pQpfxWQG93MJN92QkzYWoMAfmJgFXsZHhZjtnpZRWmoPaTg9kfkGS7EEV2prtEX85wRPf3TTA7jNwWCk",
  "key26": "3eonWChsKMNv2xovQk26huswuZDejwR9vUDKcFAYSsFAUY6UcKeJu8bkhsn4TukNwiX6sAhCaUnw1vBFLEZ7UvQu",
  "key27": "39eup81qDGVkG34uPL98XksvEZTFdsveQpDfMAkWND9VJpZKdTi3PHMPqxNzv3tZxxjQzBZsCJ5vSYa6RzjUofwE",
  "key28": "5EXCQESjtj7x9qSWTiJh1xoRkbW85jcB72wvcHHvzMdPmmBGqJ1roYF97Y5LN1wypGn6ZvHBtC74aR8XQHkGhRf4",
  "key29": "5K2Jyu6EPZ8AZf9gdQswscGifdPi49xEYPp21EJ9XN5SnmwguVsdpGBbdNKpZQpkyz43TJ1VdzjogMBEXRJhFsSU"
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
