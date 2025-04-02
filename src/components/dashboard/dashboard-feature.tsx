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
    "3eJMMRXqSuCVTLnw7CZ2cAqWWDiurbH2fSm2TBCWRHFr17TDA7gwSXHKQj3c6f3UWvhM5M8SVa5KZx3UJefUHJPg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AxJ4dZ6Lf9BsqhfvMevCnvSWAYCp2JrNgouq58ThV6yj4yTcJRoqF2BFuA3dXwMew3GynY4N69aFSaFTBHkc6CV",
  "key1": "4SsnnCxvXthNDEMvsjAEpcUv2jLQiC7CuRxzSWPfap8Q3xDLFRJWk8beKzRigPmVEzja4631rVzuo6ZmzjBhbkBw",
  "key2": "4XAssmYQf8bVfetApH6zm7XJybrXVJYSw7t765dgdzgquUhbbrejS3P1egWuZ5sB1CXeDYddRxV4bq8tZabsx8jt",
  "key3": "2Fmzo6dgTbHTepaQGReCDre6BexegUnJqy8PR2mWD5vBqZ5ZteNQaGMCT3qgXFnVKwBNE9QdkwFtRLHfDuWaCyPA",
  "key4": "3CWjTw39cz8XkmbWLR9UFcz2qSxGne8nwvYd395BhXYPwzyEJX6H941scY5mw2Y7rKt5szPY1ThPWbXtPYGnMzhK",
  "key5": "kkNEoW6qPokN1zRE7mfDPjcCFiwxsQJTFfSrNJ9myFtSvs7mNtsAQygLrFfbeRUrkLpCWfGwjAcqWMvVq4YS468",
  "key6": "3QcNFdhATiSX9Skjvo3HfrssAw6YHdimX8rvGkSupqn4jpRrGnMbNYtuPRSbBMVa6yDNS562dWUpNBfL5ooaV99W",
  "key7": "uhhyRVJDCGtKyAX6X9PZeK3bKUp2TZ6mzDWKVH1UTzs9EZNSGLKXSkDq4LwNVCZrFUs5KhWhH5awc4iYUBi7gjF",
  "key8": "2BMjYSWC79TgMALH3thpQ6syXvouWwcCnspToGcxLdqtv6Ae8NxrLFWfmUzr8CZW2SYqzHGgpZnx15EvLc7R84Lp",
  "key9": "5FCAMYmg1vChoGyvBjkdjmEFMdpoTQRHur9176F2gyeBF6Tkrhz6mYyM6zNxDbmeyMuiWiqoH9HsTn5T6GSoqTCH",
  "key10": "5U7vACMSPMMBCk95rpT1YtjYriZ9JfRb2e4Eb7xkHADSxUAkqnewLh9ebHJTcm8rm5ViUowWBZBLZnHbUbUjVaHW",
  "key11": "i2ZC4qDfY63dXHnDhTzeNZ9B5yUza2igs4tXnPbmnt8sktMLToazehzfCbc6cGiQtDRzGNjm4Epj9KWeAr3LN42",
  "key12": "55fZCiaUB2kfaVL1YW5byqeutCnEZVTv19xeVwD8HBdM7GbbuS3jz9XsVRcF2G3opQNuv2zXHEoj33cbHiXs9x9r",
  "key13": "36eme9SR39AWh3pibuXuU2KHcRQ1hKjdFncFg2Yid34R2z6tY9k6BQnxqQkefdSF8MiUPtPzANSQaAKRHAbfc6y8",
  "key14": "65R1evYcVrjEx9KCeRCzrjLM7XJ88KJmxsboNBdosZXyuZaorzg9crsKZz5FZD36vsu7xr44uCGQbLebqLguyWxx",
  "key15": "2KA25sRKTyLcNeDRpVBXcS4ncC3o1uxDuCrRHrA6nJEeK3QMtknsDmj4SgWJigMH7CQM3FPaoHFfpVvd4zvPZ9qB",
  "key16": "wBaajhEeKTmXgvVtPdyCVFqpgpD25GeKnsxwMqdVzCgEcei58qk9cX56xK8eoHzsu32Na7D8LBXrKFoW4BwDMLZ",
  "key17": "5JA94xyfcz9MT8y1fWQMHuqYrFopXvsfj4Ph55Li1bg1UWMaVqV57f53ZPxJCQARkWk2yPz3RdLnT4UjZtWRk4Wd",
  "key18": "4EESJZkkwfYshK3saaC3MQ323bTwMgneedTT4iUZzq5UVvPvqBgozQLEGRoAzBy9s9vhRGSX2ZzpYKh3RMtvDDoE",
  "key19": "4Uiy9ymvmTuR6QpfmDaEjdoou3RHkd4W8LtAC4R51RBteHch1ZPoif2L7VV6pyfvnvS2qATsdBSsYkp3BMuWHdiA",
  "key20": "4VB944FtDmVRNMV3aEQM3bXoksAhhtHf6xqAXtKNuidhgwj7tQqvWvUY6MCW3JChRHw6VF6RUd978CbHqnUCwJn",
  "key21": "5XEcXYMWPqi9WeTQcav9VxP9N2ZAVUymNJLvrAFxi8kKqtQwPSeVm8HAyMGu2darynWrsDmXXFr5n44WH6DYVEVA",
  "key22": "Fyn9VNe2HhuwgoVHFHeZNGGLgBTc1q6auaeZ8iYaz6CeRP9x4eQbrb67N4MwPbkwiyYnhtgKVsq9hd2e4ZhgnwN",
  "key23": "4MRaRr3BAyyerD4DuunJj2tnARF8GpmskAsNkQkTBvKWAhqQsmB2K7Nj5ZdZpCXTWuE4vN52f866f8Mvdj4gEbmS",
  "key24": "2yicRMEzCQhBJYojiyeN4qikYNoog2oXpcK3Hbj5HXTruNW29jyXrPWuHewJBepwBM2whnjofH4XmRaEWA9x8Yag",
  "key25": "2VQDTMAuvVfTM5cy9ZpzXQveNwrXktRfv4RryTWKwM36S4DUccsfgdyH8eubBg1HT5B3Mmp3h5MnF3Bq9AuR3vvH",
  "key26": "42bGbhwiHVFp7e5fiVXpe69BrcmUmKqnsTUuqNFiBmL22VeanDhHF3tD2qZqeBjwZHTLfJ2d49xPmF2dpMVVfq8t",
  "key27": "5iV7JKQefWrm6mgdgX2q4VkcGxqjcx5VrUj7uPaAjrzsA5xxJMsaZa1QtqakFveWyH6GaRuhbdKfyeNRFdodtWgW",
  "key28": "pkMEAXw114boEvhcqHDJRp4GQs59Xi5rr4fzQUwE7eRHrbABvd9AmUvC2smhUQ3cHjxBG8PfFVhqeU7sUjesTQb",
  "key29": "5BcbPCf6g6Td9Ekvh8g7W2PSijk9XUEDZymaPJabw79cSZc4yDUjSdaanNPNi5gWeggiPWmHVbGUkDTBwGWRjH8Q",
  "key30": "3pPreqZ8JbAcWyvWtUtNHZBtpWpr8ELrG4Y1TaXUerc1ViDddFgrgw1zdFo3QAFB78mrwjWnsBVh5AUJWscyjmi2"
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
