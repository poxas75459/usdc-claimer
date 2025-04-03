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
    "213YueHVBxHSuJZMJWXw4LAnNSGPh8irprEzAaNZwLv5aVAXnhELvi1ypNhxrcDLvYY46LrmZmkTmhPhVNWnFhH1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Eec9rr4DBxP5XUtDJiYf6SbuGxtT1QBPxUor9FBim6uWZReu4FQ2BCPG5Fz9qmb4u1FyMxwMRjXKHCnLp62NwRM",
  "key1": "23YmvbuR6ZjHGUhng89betNF4V8ARerS4XXhcPzURkRo14Lsu2jM87unTQpmhrzhVxSH6xCaZgjN2KiPphYJEsbz",
  "key2": "PY3JVh57rkqN3Acw5XvYtXhiyv9o53UCHD6bY3GYNzUWrD3Sq88AWvaKRynMSWCyATecWfiRkcQsfpRnrHeAXjS",
  "key3": "44eSbco6A9c27hb7jAqRwkGodrKHSZCfsz9Lfiocc4yAoTkTRadXUUmBk6JzYKVEuC8Yqp1Uuw8G4Y5fNuBYe8jh",
  "key4": "3LwqHhHgbJdJmnizGKw2crNRKPZbynKYrbouUm6hGzpacJjPeRyXLeV9RTkXuXgoVJ84xzPBfq2FvNEoAiFMvAum",
  "key5": "2nPp7Bxa4fPKX36AaFgABPi9f72w218R3qCMH6GLHdY8UsFSz3nimZ68GGWLThL6jbqRamkAuKwm5reZqkykAgiw",
  "key6": "BwW5wituA6J7FRPUXs8DjKQpVtw2XWKnWFZ3HxEUwJznAYh4REF7aARAJYdtWwejuDjKa9F44eXB1duW7Qd58wk",
  "key7": "29aMKUXwzaKDLLyhNRvs4qMYoMX418G39JEPeUW4SGDmWERnuj7MZiwR41KgGRa34ECBPCCvT9czTkevWR8QsQgJ",
  "key8": "5dKpkaR2cxLNnsZ2T7AxrixAguB1ix2zEULfYHyVTDaU5oR16118dGKjcMnGLmdw5fRmcFq2TNP1md3ckHzq6Yff",
  "key9": "2i3hcYmnokrpdLtDCW64k8BuradM7dnW86e6FupjvoymzmfwmFwUWLRk1iY2hNu9NfAUznPivXYkyPd574RyjKqr",
  "key10": "2KHEpa8RTvQ94rHfDLTo2FvkQvnK3FxkhNmTAKaMk9KgcDXVRq3Ff441omTSkEtJ79oKWtte1SsPcheqQxnLDua1",
  "key11": "2Pakxwbmv219JcJPnbrrsHNN9wpf2ScU2Fz4bAChMw77KXVDTFhRNBXH1urEvCbLimda7yna9JAgVj5AF9i91jzC",
  "key12": "Qfj41PFevZC2RYAhTNrqNHAktds6vAN5mpfRxhtyzYoVjuX1B2a8z16m46hbqzrK9LyCN9qEXEbwkAquPkjLrge",
  "key13": "x4LCKa32ZfscbVtKFWF8j2rMLKgyZ39zRBJgAz7RJ4jjFtNz8douNV81hSUE249uLgf7vuG3Dw5jqJ4wQX8GKKi",
  "key14": "5s9ZGvhxiLn7GJAsbkL7ZHjKxtCawXP6vMZ4bm4C7cKxkXHH5CXky6Bd2jnADknhsU5gT5ewFH6mtToXxEz468om",
  "key15": "3crW2XPGqbe64kE62xB7ECTHJXZsh45LpdAX92nMfxSGTPhbUqMjhnVVSVHD8a9pXxDjqFqHtKXD5u5SALUF2ftb",
  "key16": "4xjm9mwMZZYtMJaatjKjo6wXWCXxETnCzFAnkpm92yZnmxAwHuiWjvH64kKRfWoPy1cyiF2A3Niogzka56sqNDYT",
  "key17": "5J8PCHqWmWP8ipp918qDDbRdvi464MVtVQ29madPeuLsjAEqPqWMzJtwgFfB1iJd2FDrwKmtfbgGUQi5VR7wWQ98",
  "key18": "37PVJbacrSJbDyYt1L7bw6xoow5quAvatNGKsqLAssQzQVTiujxZ1cvNgvXEPeT6eSgKDv25Q9RY8KMmfgPwf23h",
  "key19": "R2ocPELCcLewQe94pRLmpwHpJmAYLiJnndi9f5iU1zGBxKazLTmyEiRnz6D28aYYBz3MgJdmy4vzT3DMooK4XKm",
  "key20": "64Js6Wa6rs9R8hmtU39XiEWf13idKLDU5iPu4kxo4SMMfoTsCEcoBaJKi8vqyEQ24996BNjS6yQ4aFEjYkghPRxh",
  "key21": "3ADJ2bMrRJZhyBSjp14GVUQ8rrYBqpDfFEd3HeQ3tpmvFMowZoYyofLWX9eSLY6EsLwY5gLCMFntfsPg3sctN9P4",
  "key22": "3fGrdFZvpNwnJtNh4d338A8Y8mfpKYKjBXQxnV2FHzG4Ws6esLFG2z8USYMWBa9EpeFdMTRDG2C9qYoGRbsGCM31",
  "key23": "4AAumoTpoZf7PoYPT7moDcpHVcMmiUFUNcAeZqvruEKiePjJz2CGwBRUFhbHCVCBvAeCSbbQomSL2qTBzTvkxREi",
  "key24": "oBsn9Mw8M4AxTmPG82PjffPXzX9iEWkfN18kgKs3Fbx9FYuBeZjWfpS9wj9EmSDNQgebFAE7AfwKE22thwJSxvR",
  "key25": "8SWmiaAHKuQL5yFrmJcFcnpET7weixZ2b7syct8Uh6h3GXwG7MaQkUVttkfbKknmnbKXRH1zbYcqFxyMQxEMuxY"
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
