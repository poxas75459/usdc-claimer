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
    "5QPxsZHDpQD9KGStFgcGU1CNE1jZmv4vSSaXFzECigGGWNqfn1M1Dv8UP29wj8PYSLExjC7djBiW5sFkxL7wRCxA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ALVSrvQgTqaJgUCRD6NB3HQU6sVWpVzk4ye5oWBDhEA6T7UozhWobpCms3dt5pk6BWiyqHh1XTYTVAz4Zsadxt6",
  "key1": "5dRkavningSoqhRoeDKs4buo2RxjvYtPZwChD9UttV4mY6KcQ2CYydoz2ej9NKma6RT7ih1CiTBiJxWMXUshVHR2",
  "key2": "485aExMNyh6W7Yjz15GsE6AHFieNtXb83dMYbYrAUcADqrGCCBxx4ezDy2F5XRJkJXsnjcq8wAM7sji7oLtD4Kiq",
  "key3": "5Sk9XtysCRXEWaEZPwEXe58bHPks7xdr1XmmoKSVDXvJLg1VEHSNuypoHZ2sMsDxfu4VoAD3foNWs4qL5MUtvtoq",
  "key4": "2YEvmmTbRYuQW2TXdRXjYh48NZ93ejFJXx5zKp1k9AouvqhoXGbFRuM2Dg6XdyXBBCzmMUoQxmtrGNQCj9vqYQTK",
  "key5": "3KCX62tK4QuvddjegWozcNfsHveqrCx9Gh2jSBBAVExLkm7aNK6LufLvvaBBeaeunBY9yJMrzoWV9ptqgGvMUQG9",
  "key6": "2KyqUG8deEEjQLe1o15mtkCLTNxW8ShBP4YAZt6kMWejuT3xtXFEES3u6tcznu8xJC1nQ13FLQsq55yXvx63dg4o",
  "key7": "5s8ydcFDF6ynfHCbksNj8BNXoapLqLrVsFSd9kHVdVidFWWSWy6QvxKorD4j8Tsit5xU7BYiiDUFCgoXXciKbpvG",
  "key8": "27ML4dBCDeWNdjPocBsGvyTczzZhsvSsALVWVaLbtFdPZM54c9f9ZE94tRQjjdfawSQRRjxs1qQwq6y5r1MWntfe",
  "key9": "m5CVf369sYy1ha2Lynh17R8cJRnW2VgwM3ob2yviWSYnL3sDK9GiWRxsZccL1jquHnQnnyUvEu7P8rjYVjNDXQk",
  "key10": "3WPjjbdj423SY1kyfUAxNbKMUgaLGenRHXiHP4KoLNMroaFfHhfp13XDqYXR6DYVnjFrnxEyAryy91xHcd4gDqjt",
  "key11": "VLPEfR1QfEBZ9xXHBYDLsz6DFir93GdSd39aPy5CsF18SduJxN3s6FgvoTx8pZqoA2bNjiB5FzbLW4qPXQDj7aF",
  "key12": "5UfTpbjTviFFqX6mp6bEfzoaHKMWTZK5LyxkmsUet26ZkmKspaT4ASyKsbGf9LxJaBh9WW7UZ4Aqe283fkXJqwbk",
  "key13": "2DdbiwyFKQ43kKHFrNWrDmVDA2zuanman2sQtr8iEe1MskN7oVtTBGgC4FgferWvypquHwqtMvVdsik1WgGqJv3p",
  "key14": "2d1REQU99v9xo9Q4tgv5XWSugQiMo5GmhBCAHuSHLMKqtSXHZCUEThYXN1uUXSUxLkZd6F11H7NRXutjeZNu4qcV",
  "key15": "5uUw4pM7nQbgDY4K21KCXXpkWBNnQKrnKj7Yzd9GKYnSTYbks2Es89JRmpt9eZUDbZiDWxsqjmLLALNVxLnZWc1w",
  "key16": "4bW116TxKuBnUTf2tFuAT7FyP4piLkb4tva82Gmj4qcekYMAp7huJ9At6eptR5NU2XwVQNU5Bu1Zr7SFzcUFAULC",
  "key17": "5P6Z2pcrQRkZas9Vqu2tRD6ZdKu6AtMJ6WwVNjRkVviCWECPB3TbNR288vp8ZzbmNvoWL5jd2CoR4dzAZkMCYT9p",
  "key18": "5bvTjKZjh42EpSeoNfhVVRajJEGuoVuLtZmohNgJL4mMHQyPst6SwWNutN4hHQ4k1kZULePuuztH26d1BTMbD6ZZ",
  "key19": "4Qtbshde12vvvSJf3wQZirpnVtNypDw4oz9DDVpnRmKnBn54u58voZCAVUKc4nDDLjwhW1aohmvwXb9uHvzGkJnS",
  "key20": "3uizzJeeFyWKJQKpYj396t9eXFvz86i6zo1LBNC4nz5xzuDS8vu5HJN2cHaKoGYcR7h8xYh3V7WUKzf4925twHXS",
  "key21": "4GkFfcG9k2sGRkdu6ozQocMsEPYx88YYoX7U4URxAL5hJQHDvE3R6VR8NPcj4gxoCtefMzUsMaKL2C8sroeiGBdT",
  "key22": "XaHgxoXA7kYbbeey5tDes8syzBiSurYueS7WhJePeZRhW3FFHHVi6C4uRvU8GG92N6rz2hFj3FTeWZY5izRmdQd",
  "key23": "63iL7ex1dJKjCDrqiT32uTiztmuF2jMw5zGQ9X2skrQE9Ys4ESK9AVGs6YirJHFNJdJLeSFCDbK5v5uZsuLWTEXX",
  "key24": "4XkCkkyDK1NxAaPcb5z9UMnBtpC5v7ifwEeyB5m3q3gnuyATn6PaKgRuLHAUwFfiFgoEZR3NEf4D23ta88FMqS22",
  "key25": "5zuXHY8EpZ1wrQpP1HSLjTM2qeSdKxautPzTRA4iEPhC3bp8wkCoJ9gHsCxdiD9J4wjXX8djvLmsNiyJLwKbawuh"
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
