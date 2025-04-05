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
    "38vAisyhS8xDLjpXCCkrSgtJkhD2LMUcZxGDcJekGEHGC6J9oHdhLj7agm9ELGRTU2mRg3avNKFm8KiDiT5jxxH8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VRNbmTJKrw3bJbdHUsaJjrYaHxZ4VATmjG64UyqjiLaKrbyG13yhbH4sJvdLQnG5vivxRKZnWwMNXuFhiPyoNEC",
  "key1": "3D752Di3PQvVpP1x51NSa9BYVNHqy6Q2Z12sa1yrSoWpDwTN2C2bs8gWShVRjWo74tLQrmisGwMQATN4CAmw1Kuu",
  "key2": "4VEvgptsRwn9xj9647XaxsApX7yhmDJnMqwNLheauiaM2DjtftuNEX7csyHTNtkQnAnrRGPJWGYkoJ3fYFLs2jps",
  "key3": "4RY4muee8t2qQ73w9GJBQfWeBEe96KfvoHLq54e6Brt3XGSh6s7MwtZyig9eu4YBmMcZjxkpYJtWKHzoVaxPmSaV",
  "key4": "9oW5mvfTds3RvDbqRc9E14Cj719aPBbPZR5WUXZ9o83QqcXNPNyS1Mjx2FPY6HVer1hwWPQdahByfzQzNsnmRkK",
  "key5": "uK56efYmM31t8MWKVca7kReViU5vUuffUE4TPutmHM26ZgMrsnWCAH8d1Bwv2tkTbCqm8Sz648ZNKtLuvAWkm7w",
  "key6": "21396z6VQmfhUX16k1uWfrcUWhG2eKKjSvVnXtSybhTmtd82SX95YANtqWbEfoXUEyjLgqnZx4s84Wabzb1F3WM6",
  "key7": "2wU7hjZz1YQBKNpVJHjPwCsZcMbbiGZDYWzYJ4MxfqnNC9HeJgyB1i8rzA2dUs7ocyu7K67x2VcusCHjHwAB4T4H",
  "key8": "28r91pCBQ2sfzq5XRdRJ6Yf86PUbEP26LKHNd7iAGgRgDrFqe559HfLXdT3Bub7TQAmmHXtHVv4esSAAc62gUHFX",
  "key9": "4jzY5qZMS56xgopkDpkNM4ycBsBc3tBxfb8fwiTwGKTTogitYkUBogbPdZpt63xfeQKnMadbA3VvvtXtaQskr7Be",
  "key10": "3iPPUc9ZNdMbGzv6QgK9zwjHZcKDb8XYiKhU7GfNRxEPHQkqtKEodwKXQXfZeP1QLSyD2F1ceqwQxn8q8ifWkdrS",
  "key11": "3ympqPbVS2s8vKz6rTb4jSxW4QWsY2gg5xoQMBE8zQjr3YJvzrhS8Sm5FeYFrCYmBhPyu7k82WkiQJZaesjNkwVA",
  "key12": "58LqHS2iSYHCVR83UUGJ85TqEsXDgEc83oNcDwvs85C6UqzfmtAZ6Jpxdvb3FDjtaqUTpspcaLt8e685CCjVPC16",
  "key13": "2zwK9NqPWj6XWJCAiN3tsaLojtR8Kj4jUJBU7KXBAftnMEMaFCpxmKoqBYinkRHAUFGbMnfr6NrgKMyohiSMNm9C",
  "key14": "4w7AFmAiX9qYwMdzrXS7qAJKqQPJdAFELpKXYGGscU1AYWUEefBLzQVz2MyBpdvHwgzX4jXvcKcYVg1eLAr8XLcn",
  "key15": "2Gpubva6VKiZq6LCNGpXxZRGARZ41StEyhGh86uDPf5c1cdW2aJi7R1X9i8iJNhS5JasHcdGDf9ziEFMdBna9EHV",
  "key16": "ZMP6AfNGvdtqYCyqYSh5aSMcPJSTaueKEmCcaFnWRUqyXcKP3AvLLY1DJ5P7hx3nxFv8Ho9LFF9LMfXHFiSRqbu",
  "key17": "3Xw5zUUsH2bVuhvRGMUHqY4UfSk6CcEPYAeZDbTw181fdVoW78uoKY9oJzT9ANeEXobTUW6m8xvANfP7iBK22ksb",
  "key18": "3zUAQjuu4dodyHx4SuvKksDKnu7BYCoJEYrGJvo2ws34g1MHW9QSykbb7sL7LQXDmhV29ikMKya9UavMGPgevCat",
  "key19": "5r7m34m2Vrt3FU8Pozz4sPZJfJQznUiemwiC1xoM3iGUbsthU8FokHwX4dH2rKzgpg9TTz4Pqv4vzN9QngczXxNr",
  "key20": "3FtyWYpL8TTaLxAJqh8wM4u7jEQBvGBrMJggqiWrh8DzZS4SdGqVAi62QbZWyj4oxJwz9NDdXYmSNVcn7dAy59H5",
  "key21": "3REeVzcuPqa6ZLPChUipJDRMu4gPiZNCS5APmC85Gsw2rDgE3RgtepGcAQ6ye5Z5rAzd7rKZaz95v1DXzR1SaKzE",
  "key22": "f2h1ewPY344bsrisoXKadAZrr6qkmMRbeXZYh6japaXNwLLVtDXG6jJR9TeZW4XPVfqD5snsFWR6rD2TbnMT8Ko",
  "key23": "4qxuDYoXGA6HhqdYY27SdzbVirs984aH4Z6s4V9dBqqmtrKR5GuYXcPXnWZrRReVsCUHdZC1oakU5hH25hsm2pKY",
  "key24": "5p2syhoFDSkM4A9Jr5RYsip41S9BH1niZxV9t5zn4vrYNhUraGFfJ3TpEGF9dSh1ndCfEDKHBMxFSRh6Pv29X9Tw",
  "key25": "2SbHHKZNf8o7tsexiL9eNhiyQoTUHawNk4FEbFSWieWccYsfsmkEVokSyY6cC7i1FYTqPw9vCWxA6mzGG637nE9f"
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
