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
    "2XF2W3PJYDjpntjxLjFFvrPtim5dbQJC3HoX3taqKTMa4W6BGMLGVRRdsapeQa4y345X8dZTkoiWPBABUcZfmmab"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GAR6eqy2igFr2EJzbkV51dhbo9USVUxnN52ExSRJh7jiK4RYV5ikpfxi9VvKmxTkKjwQzsnAvXwKjgZVxGVEDpT",
  "key1": "43QwPTUDidonFfBV6LR7W5cKvuephXt4vsPJWYgwBVKjZH1cXXndoy4NWi4sRJk22GZd3uoCtPnnENw7rCUuBvDN",
  "key2": "43xtUNFaFCcWyZexuR3FEck8nHTxSxYJpSJ8Kuwx2eGcQBzVVEMrimgdFm95gFQkaqSDxfhQJ49yVXjYPwBb5yNx",
  "key3": "5bfcdULxTAoPwHdRGitsyrE7jJDvxYk8CSMvBj5eM8wCPzhKvfeAeNZDv2X7XtXi2z8ymp1QCVBfbk8wBzFNvSd6",
  "key4": "586FQy4nh4Sx3BCwaMuxT9DW6r2CzRsroioA7qecFGrecB9sP35ThqZoyHFTrF6w3irE9MxTssaUCqhocHU75dAt",
  "key5": "2EWr1KFgUqQujyb4jQFGRLiqXcMaWwgXLQb61mzXxazcczdVMwzeCrSsBx4R4nHAbSvRnNGPGihJzuYyNagcKmpn",
  "key6": "2nPhsre1jjPutuJVXB5hvT2EF5N8KKZ9hTTUYToKNfxFjW4dFGfjLwx22Xw1DQStovCLztyycL6PY3XWxH8vQ2TT",
  "key7": "3vBepmarqatLpbokLeHeug3xwpyfJfrtAFG2so7juf4Bntyqxy4Pnrx7yfbD6dXzDUwRbgv9XW9VbUK9wy3q1nnZ",
  "key8": "5VrFWQ3XfKbbYHkWLYHVSE12PTfMDva2SefrRYAGhZtoVnjTAJTPCjkk9HQhB6yo5XRmp1JQrohG8Yea3gFGKdR3",
  "key9": "4PxvyZTikfYHNPBVgye3V9zJnf8ohs8eEwJppyE6dJSW4HJ4itWcSQh397SJ7uxKoFhAucoqRKoMjixMcvs6zjZt",
  "key10": "5DZ12NiQ6CHzhJoh9k8jBmXMqP82HYkeRaVG8dEiQ11MNMxYQjcoFWyYMaaRSqxqJJyAmHYNSor5jWYMo834fEoP",
  "key11": "3oAEaZfdE7bDydU9iJ4enndV9ATnRn6y1GCMNUowZBPpujYeHx3rb8Hgdeu53Y37rzW8ApLpfsEwAuU8kcN5BGu3",
  "key12": "5MaNzgDB9nMJzdGbkB2ZVG6SUTN5Ysyfgfe4HLWgqjkFFTnQfZeaxkQ7X3NevTu5rsigywTZ8xMkXXKnEkHnXtfA",
  "key13": "2jwvoTb6eqU3LbuiH4GyJhdMHgH8CFyuzhUMUhUgpQBSCzJmzJuNVBxPfg3iFhhBeJroimxbnc31PDjYKDq5NyX2",
  "key14": "5rfGpwbBeRJ6wj9G4YDAWKCxBHpUsgNXujwUEeMrgbt71tpzHvYG4VXThyzx9f826xjZFG5pJqk7P4AMxotjqPwy",
  "key15": "2NAAXGevvQwUkwWvqBTy9ZHS58jdFMNPs4ty7GpGFSnpT4Ccayps8UJH5j1FksYHCPTbFeamF1rGvGsyoDTrviXZ",
  "key16": "2bu1k1cTBQ4XcaHfo3ijFDvBsWm3D2pwWEc4qkjBePd3HUVE4dx1WXf8cmFdmuHh8m15AdUT6W2xSECFYbV4PDeU",
  "key17": "5bXUQTQ7NAofxSVqv8o2FdCjLYFB6yAfDLJ1iNMVPSBvFSqky1BsvZDc8zDQdJoJHbTajrzXawcHLPdPHUT4SJAZ",
  "key18": "1EDwSqDZs5fHuwQL9uvhZTsjLVBKf5CeDZAKmUz7zWB8zirYZDsUmc2hV55FhRB1akWqvJwqaWxpeZzyLAdUHpQ",
  "key19": "4BBYL7jnVRQ5zvgrmZzU1kGarezYm33zAdUQ3P9dXZdE4xoYJB9zv3QYQavhphQzTojyYHZ1BgrzS6e18nNyZQBV",
  "key20": "26oo3B7bGi8Bcn8tEQxfhJcFMCUUsamGfJTYB3egsAQYEmZ8mHD9s5sBBeKoQvbLcahoFc6yh2eW7RfhtCAEoZRG",
  "key21": "4m8d8SXcqWfa8bk4Kvam3bR539qRr1pZAgX5D2ep3gysF2WXgEBXZ3LM9ZCRuteqPhHBaCCh6DSVMoMwaAxXB9pw",
  "key22": "ZYe9Z3SR3SwcaWCYJeXvZ267muQCxubpJgjbhJYCF1c4LNwJM9nDT7Vna6KoraTGDNLyuBaHwoVSKFfn6hD81jW",
  "key23": "2um2EkkvMrnxg3QrmzfYB84XUj8u4wEWExmQuqqWPzfMR7vtH6cFNXh7ujqtDMuXb5Pep6yY2PCb6bG7cdryub8j",
  "key24": "PArYugeqKsnzzCbhJwUQVz9Ey4msqD5q143YGmxqRoRmbCWobUS9an2RqRdAY97Q4rpNi3dGkpr861LocVDRJCC",
  "key25": "KrfpGEp3HmPZC2qbPcMuKUBQo2RxtDbLjswUvjz9zgP8syiCDHoH9QSqoCMANMJNpudXvRPW7tweM65yQsViq7s",
  "key26": "hWqubdduLvy5jjxCYXZACU3D8wv72rUfoDCPPzLL9FjfsmNvuCA9h7ehvoG8XvP4QfgrF6aonR1nP3J5ZSMg8Ea",
  "key27": "5SaGi8xwrvpaDu9zKpCSPHTZyRUVLEdRFvidcfrKW4cCwkSvgDNPQ5gM3MWis2RZHM9V3YCoNg4v4PRFVjYaVwQJ",
  "key28": "42N6gDitBTuaVnZkpJb7hgiFzAREpBGzWWEEPSK125nq516ZnAMjK1K9SR1QFjbiRYQEfWnnryGNzYsZhaS818HA",
  "key29": "2WXp9ei6JvmC3penXBGdKtE83PLeYPrBR2fFWW3R4Umof42AaLFzvMtzvW1nvWTjEa4fZ4qWtb5ed6WVyow8JMJt"
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
