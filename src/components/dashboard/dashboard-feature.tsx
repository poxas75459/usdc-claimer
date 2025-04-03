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
    "4sNz7m14mCBRBZ7wxz2VE75hhocYtfoirqtyLeb6xNwawS1EdVzH8TyMXvfVKzYfuxa8snm1ZDhbnYyrCfRpESde"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5joe1YrYsFRPjVtS2EPBCyrFjWZVS6Rn7eXgsWsN2fVdKEyRwHFcn1fJRzvcDjyp7oQxgAHjT5isQJq6edKZWBT2",
  "key1": "oLVV87k8RWU882dtsgYXDdA8XpYEjDYB77XaAcGWpp77ERbPmEmj4SP6o8EeB1LFdBzZQYppX6uUbpEJowQijpT",
  "key2": "qdJLCK9SWbqSDmcyfXHPT4iQ1avosiozMXTMEXHDxGj2STVam6AKKsGXYhXhU6jsjYxEjS5qXNAnvfQJ7iWzvjj",
  "key3": "4k2DkZzx7x7keCYdUj7xH55QryLdLZ4A1aQ57A156zYXmzKwQoUVBvie3q39PEUQVBwu1esZcKhGNNonvsbpVk7Z",
  "key4": "4dgnCM6HEJnvP7ycScsgNHp3giAGQTvypuobypfm6JHtK34YbhPEwHiLKAmRWinfdu1VCrEejH15ZFGVxzNaqxfc",
  "key5": "4FYruC39BGMfWeTGHdmY5zTGZ5JuNLBQicsv5oKhWKoSkj9e2H61PntxWadqZ6ie6jBt6LRyXzc8zJ3g7mrEHuya",
  "key6": "4GuB5QJVFWDgyGnSr15b6zJZUg7TDrQT6hDwuGjwRYHUfszXkCNv5o9ewEM4S441gCUsjyU8nYsvRyuSQmzM9hYS",
  "key7": "4FW7xfYX1CTJn2TJZurxToU7fRaCPnoDgXuTzXMqv1PPi4RAJxcjuVzAXhboFxiZc6RSkKTnYgda6mwESkf1Xxxa",
  "key8": "3Xf66FBcBnmEPhaUnCrhFR44bGBeDKkBuL9crQxAeQVL7Pmz8mYpRHX3H1cwNUo2QofVFWdSoJxj5cBWVsnyPhig",
  "key9": "2cHToXUfFU1ZYBpekVmrGwQ43AhZdpaDsxb2yujW4m4DWX8DaJMfy9Ncaygx3GShCuL1YELmkwHpa4iVePgN4JyT",
  "key10": "4qCTAjuNgwvKg9A9KajZbie6YGsUuhgQm6NV5nsCZ2rDaVKLcUkde3g4fstdm3va1yt7ETvX3oGqDToqRDqYzjTv",
  "key11": "3tf3dKNf5fMEdfybMRnZqTy9ZffWPnXezUgCqdt7zZ9vn2xfpM8U41MP6fV7gaGvkSWFUHj52HyGHhXU6mX5pW8Q",
  "key12": "61F9STCvPAedZNzudKRmz57XKawQ62QSRqWujhmGYzZEfu9bRpwNrgAq9Q9u8k9Fgby8xQmpf4FGciPcHyfpV9yv",
  "key13": "5bGp9u4RMguJxszwei1GEP47WBSMo59NQSSgCtBg4tyzYkUofACs9XNXwycSUMdX38arDpaSF9G1ybjsijRBMs5R",
  "key14": "4bGQ7DRCMgtGEbgMYMe65MeFnwcA681hbpdgPX5ivvdZycLhLsYqZ3HdPux1MhWefchL73uNiTCZXii5NMW6UFQ7",
  "key15": "23mWhJbWJs4AUqBQuMkw2ur1FMx44iMQSuySviAxrnnqvdfYZbRMinnHaAHWUbeBBqqmsZtzfDnqo9vBsaTu9cEp",
  "key16": "qLtH5bSc6qiLyQ7A9qaMbXMd9eEyuF3D4xCU33gmGP5TRFYh1GYQwEiXvtbZ5SYw9ovFzjsgMbdpcPiX2JgFuCh",
  "key17": "5nw2imQoxfmapNsNHDBt34C7ZpJrDutWpbAGetdcDNJVj6hG4ryNnG2RWRxem184f4XBzFqQXw4KUDyVkQXZ2nAH",
  "key18": "BJk81x4YZXqzzt9Y2qPYaxczFA3GjMrxYg66EZpDghBdmcdrppz1DrgEUn98FyBxbZ3YZzNmLQkxg9hYXx927tP",
  "key19": "49ZgywCyZ7hSysM9RRYSVouKdB5RcwpHZTmsAGgx6LByQj2Zu1NTHtmK66JCgtxkGmtrBpNkaErqxRNseJXZyZrH",
  "key20": "2riYxur7oaZrfD6ugjRhFbLjBR9TeVkjX8dKecDs1sUoreuGrKNZxn5qXwbKnPcr2JKwySKxim7XwF8tVbvFX8NG",
  "key21": "33NoeWUyTzkkrCXw31Grs2zqWHMrLA7CMLaKqqgFkiSBEKjZNsfQJGHGHUsbPZvUGBDST7AiBcz5Mrkt2Zhrvhyy",
  "key22": "xBs2bJXXjNGh59xKmWtroKW3kwi3bY9choduie7PQXggQHuMvP5zdepCk2XVf1qX5G4vpR8sX4XSKYkhykUvmuU",
  "key23": "3mNZQagMULAZfoM8ihm5kHPouYg3tqgJheRYdARaWYeXhGNDeyBkmLox5zdPYbnDNQCqRC8wRFfLkG73F5XoCA3J",
  "key24": "3D4tj3sdNzSR6HdAQbJ72mmtvSwUjqWQXt3d6WM6UhfenCb5syuM4MKWFYqYQ5fFSpNbzEeXXgwhMfcS1iSaWmAq",
  "key25": "2UrJ6DDvTh9x41vwiSSgDMA7QEEB5X8aMHk1ba57XdR3Cto363k6iCb7RaFEFvtMmNUCBa1KVPsGEfXKjgeCKrNb",
  "key26": "4DDAhBg8XhDfHpbTbMFDeWN5fmDwR6UqahhoUMQj37PHNzK2hwHnhH29eQDTczoqQXsR7Lxq4sB3tf9ZjBL45ko3",
  "key27": "W98X2xByuV9rP4QQS7UVmMML4oKGDvf7sxDe4DWarGM8zEEUGA6Hd79rLZqYJpWMHUaRG9jv4kPdpcQAffb4t9p",
  "key28": "2TFx7MG6oC1TYhXxeqcynB8nuknw45rGz5bCoojrFP7rT1bj6oP6RLs4deWdLqRSs7GfPV13uhYZcnPWAgUUzXko",
  "key29": "5drf29ZvN8Moj5itXoXQmpChQWtKc2jTMnJVDYRoy3YYxQc18DtRgBJJ2wbkE1DCemhywLCboSDBbsEZvZVSCPgu",
  "key30": "5rtNHRJwoTTSQ9XYjDioXhSTG6DYNieV2yY83QhqXpa4RQUmKVRGEoc8dDMSSoX6FxD8YSXxEvnmPrqgCDeqGytb",
  "key31": "QoFba957j84yheVKikDersqNYX7FEKFiffY7CWK2HHkGEswnG4MaiCMwNhPZLSSfuAv1etVA9rs9LSsdhMp6YvT"
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
