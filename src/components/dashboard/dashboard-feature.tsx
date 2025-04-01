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
    "4qvhaB4t7oVoHD55uYh3Stjrkryadb11WgcWCT2RG9RgyiWhxp8NYdvAacqLiEDd84vCAwjLu9gVKCRbWHUpXVik"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gs9yxRNdWXXEDQFJKZdPrkHFE2dFzq5R8MS3ex5bpd8vL7LUSMeoeg5TXboyziPiSJftSm5uRFVmauK52ZDFPoo",
  "key1": "5ZtoDFosR49avPTV73uDcgwRatHAFyZyAncozPPPQtYNuQU3FAPQWawhoJdaZGXjv7gcBuKnopPVvCvHsRYtHZkC",
  "key2": "3VQN5bUG8ecdQbhdFs4Z1SbFDkgRCRucMNSVrQ8gkm6CtdKmPCA8M92g4ZvqhAh7A21FX2KzSA7u3DwDQeJ8dw2f",
  "key3": "5dR2r57t8Xz2hnKhozUNAN7ybStcb7JvAvHsGuHRrsNfh32QW2wvbSF6ELLZQYUHYvTLExrdiYX1rBuuSvoeQm2F",
  "key4": "3DvAoPYJDgTVEx4bCoZm7rkNtM1yThGs1fc4tH8W6evyEfSM1SzqMjUVMysDNpcXWyBpfyuJYLAQaRGLy4bDKt8w",
  "key5": "4iGHz1HbEw5QJgXztcSVbnUVwhPYk1soKj1yQaCpSsc1CbAhJvUJaENuQMj4mTc93rF6Hr9kX4Vc8SVVAstrDMFM",
  "key6": "4RAKjkjHsnjARag4MitnUgyzTFBdwRh6Jv4mdtTZ1uRsbw48W8WrcJnQtmgocpeLHLTHdqMjvpeFPgUHCpGGDNwf",
  "key7": "28YSP38eDQcez8AFsqpjUv6SiktJqXkKSrK6QKF869NPDj6omWt4hyopPkrD1ma9zrtf9PESjXpx9xQEoUBLt2rc",
  "key8": "4mwY5xVag5Ge3aNzTDquAN9kJugFZyY3CdzkXZBoUaT2xFrQuCb8NXBrJny5FsbMMWzmCotgb2RwVt6uozmTyGDv",
  "key9": "3cUrJwQJ27RCQpTEntZWtHBk1JmsaU7txLZusyi51KamXP7Z8TeXgHjDpgy6aR7ysWWyYTQgWdBkRfkTjXJC55Fq",
  "key10": "55vK9EDxatRWhJY5moPGGJdmAB3J281zoVyWGsJTHj19hcdg64U82N3DvTX6mH5zrnHP7Loewy51fkTHF7kTUKms",
  "key11": "2pwF37YcUwzyho3sJL8uVS7SnwjXB6SQH5HH5V2rbv6BwGgxnMh8PsCrkT5hA9bfFbdtYPnyx6HJgwny7h7Bvx7V",
  "key12": "3iXYxFqdwQGrJCZZ8tKrUB9f4ZhcUuBHFEDRegjGZyNKp93mh8tZXP71JufDyPJTfcaK7yadmbPGcPY1cg7Ta2DC",
  "key13": "4u845SsK9FhMNBhYKKvWLA4pspQGAPSvPw8mLYanhYkYWVpftuPC9qy5VxmjXTCZeYVGaNJeNHd112nhfFZTq84w",
  "key14": "5dkkUppSv3kN1z8t3cYiszwr7tYs8o4VNMwCU22hBNBFRxP3ya3hzSkF24JmVVTf45btBCPFo4o22hDWnQzSARRj",
  "key15": "67is4hBUSLviNU7rEaWMhJVgjNnTBT1QvozZv21MQDx8rxN2dmSD1ARGgFgHLhsvqYGescCfV33kyJnuRGYQSMuL",
  "key16": "266MaXhZhEJj8KzdGBp8ajoE4TtPtjdKR4EN5Seq4jFN7iS3BbCjADsMDKdpTRzLicrojMCjEfrpofJUKtSsKQra",
  "key17": "4MtoZCRB2aQSYEZs1bf2xNnD8qVj41SLSRFoKQeMy1zCMn8ezghcYBiWfdZZcWTSaQrKJc9A4Bfve8m7jwNDrwdh",
  "key18": "2MpVp9zqxxyhscpaY1KtjNyUMXgkP9f1gx1ErCgBN1ZszY5xXXwzw9D8w7agtwuF9bv1kux2RkdfA99r3MBFSZCm",
  "key19": "2Ce5YvMsTXuvpE8q2CyrLGZ9vRnBWXqEX5uHvRU1mz8ATsewWfUWPWzVTj18LWD9YVxFRfzwgep1UqzkQWniWb1P",
  "key20": "4HHuac522eHjxSsy3YQLocV3H65FWwjDMTfP1WQ8a4pSnYWnAyShCKv2scgShvB5NCg7sWZZwdtQgiTgzQJDDZNN",
  "key21": "MrsYqXqxieRJyBW2K8CDcqayzKWgqGFKpoe6JsDdnSkRLx8kU9qKkugPBZ6jh1f2ykLeX9W2TJWWG33dy1Uahic",
  "key22": "2TXDhACmptJ3FZ5CLYiTimwr7v4BCFX1NS5UruzsaWCyMBUF1KWiCFFN6Eh1NE5rf2U45qqv4tcFFVKwCEB2wtT4",
  "key23": "62B8BSEMPKThVKRnXyG8Hiohp5C3PnxmH7cj8y2gttbyHLzvKjhJWp6tmDpjh1ibt8HxMKbCmaAciV2zGiYUeWAj",
  "key24": "2GFg5ogBuQE1mWsMuUL1NPNkrTXivfZjJWKkKvu7WFBYMXFiVAZ8UzTCCbD5S3XT5FroPAZ1kBqSJ85vzNqpp2At",
  "key25": "2EynAnanTraaY2iTkpyZ54FN8zNxJs14VXt8L3CgnsrxRSft3QaabLKkYf71KiABJj7BoyS6pmFFyFsFM165E25Y",
  "key26": "4tQoC5AJr8GNGfzVCKbZwvz3vrDsL8H91wTcQJMStiE8nLaGhSoUjJKnSqBX3wUzaAZDcKMMBsW9cV9fTVCfT3f3",
  "key27": "2mUW5S4PYEwMBYCYDe2D77m4duHAhBy4mAL96ZScj1mPq8mMQeKTDQKjjSXYhb33pES5NVR6ccQh8ZAu6QziQiJN",
  "key28": "3e3mqUbYe5fbXcqfJADwcqjxNNRJQSk9uaegrz5FWNR41nVqqrXa6uP4tBM2coRZEzB4VFeZaAvLk8NGcf58Qqt5",
  "key29": "Ln38nAR5T4B33zf4du6utKfJmj5npJdKTLQRhhWUeAiC9718YJGd1WKtrQdXvSyV39vDP4skvdkLJsptagsS5o4",
  "key30": "4hgCHhw3kifTnczFeKJsBqKvpjQ7z1uHLaP2okJ7UGt8TZgZGYsaeySxA5R4hxBkphwqYdNWYTHsL5cBQwWWFSru",
  "key31": "dbTmXQ1teVgGLEfWWzWw2vxUVTw4s5Ayj8CVwfsJmfjW27KjWsWLfaToYUVPGoeF1V3U1sHLPGadbDCVHuyJQqd",
  "key32": "2CvmZ51yJV6NMi6Qd1dsrxRZLbkXeaQK8ruYdGS3TqAPSW8ARSTwzPwgtZ8yF9kL6c5aodKm7XZm5DKdg2TWkgbZ"
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
