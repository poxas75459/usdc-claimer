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
    "FcXE88BFF6NcSQ5BbtjT1YZy8inJ7NTH4Tey1N4gp7jzskZoHAcLhjYnvACXw4GUuW9k4AJxnACgvmnHSJU2L3z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DhLdiZZhiN8pLUAZdsFU583hBJz4yzGpxxgm8BMJKCT5yk8qfhRb4py3fPZ5JWN5u6gHN54k5sa426mBvVgKDwA",
  "key1": "2w4jQfzfPnKdTpo7hhjLDvvYse8XBY8tXQ2tcc7iLmgXZmB3gQhNFAocfc4bb8hKwoHhxhupQ91QGsFo978akgqk",
  "key2": "2kPAWRKd6Kyw9msBVzTzHgAE6UqrRCBrgK9QqRTyZTXcDJgKQb2BhEUFeiz5wwWYK5uM6gcQZzdpASYmvAnydM2Q",
  "key3": "2jPghKj6hCWPHg1ZxbypD9wxh6o2u7Bf6stBzWaSp2LB521qXkVuZ76W9b6wyM2vB43HYdkUDNiJqMKobjhJMjTb",
  "key4": "3MhcCvB7HgXrPRvSgBhJ3myiEx7k5Q2NJ4LYXn5z6CBuNDh3uE5J7eUiq2bPi7qUUxwbYvnaFLHVQfQLKpfS211e",
  "key5": "3jkaAfdAhzKWHGuW4Nd7zDQ2wiEysrvzEwdmE8PPoUdMb9ZP9oo4rSXjLvAe98w7bPuKfFEpjCm4QH6regHLnKQP",
  "key6": "4QZwGuh1bA9rkz5Y54Ff5czo7db68dLYpi1cvgsLAm8CCX3niufypjiuxhyC68KshWSDiyEhQejGUxKo7eQu6jZ4",
  "key7": "2pP6jVfZs6ovSoE2ogxGVCmXbRAYpQjJzQbjARCVkPccTaGKrTAcFy5HwjaEc4qTn7z7Sw8gvhYh3LApgR1XmLY1",
  "key8": "2XmQ5DATfrDKa7PwveMfDkyPedQ1YLxKJf1Kqt7ZJrHJRo4mDZDktKGtigZ8LWdaFWAAUSAPe2wsBYEVGHN4e4rT",
  "key9": "32fYJYn1fxY5bYxVDxK33JUFXFo7YQsjboLtpoa6oHBa6yDZUpefMvXsUwcLMzdNePnvdW5eepFApiy3duygwPJQ",
  "key10": "3sw5Y6Se67RH14zEKQ5mV2GoutTPG5uX3dX9qboTjx5UbC7kXKoofjzARvby5S6B6sWKQ2vXj9qYwHmfcjDqKz3J",
  "key11": "3baPu22fLrUYc5qBNHeGpCDmPhqzAt9EsLq2BGtPGc91v652eUxiuv4MTNcoyariaXcWMus2qi97ceyE5YN29YyA",
  "key12": "Cyj1fFYMgGCoQ13zUxMpe1D9hLWCqvPVgKnPoKsLuUsKr7tx714wda8GtnrUFpaGrH6tDmaqDs7rhn23CLGLGk7",
  "key13": "2Laq8zyvu2Faz4WH9M5HDTVGrqnRvUMhuBNK7nQZruefLeT74jAa88zmHGSAmRbsXFoMvdy4BrQdUhGCvGPP65Fx",
  "key14": "3eyi6nuXk6AQXj4btH8rtyBasyeMgqVFAzhodabW16j64LTUahzBY7YhsDUBcfmruZSgetrBMuqW6oysGxQDegmb",
  "key15": "wQZmx8ao4Gdt4aXQZt61xf18CyBBZvVcSgLJbxBsS2MWRb3BRzdD3giKhQUV5Q8wpd9qgbJGnnz6TMz6ZWaqGfK",
  "key16": "4gD8VJ9B1EpuEQNMFwzADQs543UTkC3u1HjTMS1UgESCjHGKtEsHnqYuYMh2MefjKYDUnhW1N5eXSqrAwET9Mst2",
  "key17": "4bksMu53a4qhRBZFKLzVvjaa5sx1HxEKMXuhsuiV8Nopza4E7Vxxjzn2equCK6WCQna8VGR9KWZfoautQJJ4jU5j",
  "key18": "febwiVAf7iDsAmFDbMTnp4c9mAhotU4aoYtXwfpud7fRcL2wHepcDUweWphiePG8yxjFznYVjVzwTUXCaAxsYp9",
  "key19": "yXdiNwe5YyXDHFnSHaXfArQJVeZ89CASAxgFSopdtmLGoJ3bESa9fTaMufKWj7hTtgM8TzXqg2X64uhAJw2Q9Zq",
  "key20": "7N6FFMTerWV25G5AaPwgDmZT2Ruag7yMbU5cWTafYQCfJNjQZgYYn1FZpnSuPM7kX3TiWS2DviEt5s9iT8AUwM9",
  "key21": "5ba6smiTzbck1gNrDiLPSJNaMUZam7yC9nsM2v9iSBUebBX42D3LWWe5noWbwJ7q3JcbQnHx9LXPmdVG2vv5uds6",
  "key22": "3fd68ZJMCAWG9UkZHFssk9ooCc1NbNGyb4LfE5a8oY2rVMkcrMH14giQ4CiGCeSsBzq5HihdLGmz41muo4ZyvYZm",
  "key23": "2TCWRWzWjwJSmd6xzU8YzyJrAj3RHUSqEPxPad2dpLqjF6GREHsvSYGwE6WLcBSdFSNo6eeQA9E9MBzdVF2G8FcU",
  "key24": "ykAYZAHyUJQuEnzUKYBE6dg84BRuqKhwNf58Nbfi8K2pJPyD4iJZyBr2sWeUW9jUTJHeifBbdBk4Z13ki5S6B2k"
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
