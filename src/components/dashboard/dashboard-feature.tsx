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
    "CUfB6yKiuwujtuku69GF24dq2cgFVDasKAJqgGbgY69PqdFZQBXEgU42EjdFvuzPT8Uc2i8X716rkNRbMNQX2Fu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yHCm3sqtvN5TNiGzrWzFkQZiujYE2YVk3gdjSassn5P7LB2WXP34Vr7JfaDNNDZ3gzWHpDUpG4PGS1XTN7o1ocA",
  "key1": "4ztTBwuwEr3LWgyHYidLk81M8nFjCziqQP7c28k8SgzpABGWn8SJVP3CnBR4Gje4bXBgyeeEKsH8Vu3DfWxcm2ub",
  "key2": "56k4S71ZtZRyk1ib3adSqLWv7WUkwga1SB42B5Z5byYpJTXCxJ9m6CTPJnSKYGDY3ZFkXexETSFn7b7Pu5JmABAG",
  "key3": "5ACsfH4qc4pb4UeEMs6ECnU4rKZGSVonBDi6wNjPhftyb1AnaRgL82gaFJwKsaXrfty4QuhWbcAsLsmjMs95sAcy",
  "key4": "3ZJQCGKX5bL5CeLyEco6kDyBKtzBqprCqPymiDqsvAqCgWUTR9PjF7vbygmHupxD1ypsEBnNnwCMMe3LNeQb5qwu",
  "key5": "3QDjooML6RAQSuxqjTrHV8qFJ91QchQc9Zaqftm9vFnztcJSP3HM54CRW5GUgMYteeMjWfuhEDXs3pBVi41dxKQd",
  "key6": "26p4741PBX3fh5symvUMryn5CuXu3Qojs7x4pw8wiKxaiAfZ9nGUEiEbf9hzbeQVxdRufJtyQSCDpGyBD8V9dny9",
  "key7": "4TLUcJTfHMNEYZrHY9q3VekND1sFmHgezi7pbcmJb8or7XPJsoGkds8FLXpNoMWeShoYEumGdi7ZZQk3CtAoz3p1",
  "key8": "44xFwXqawUEd7SeWXKuvv27TFhp1jmYuFe8nGvuJCfotxXD3svo3YEgYvUDz8MtWJQG7XZGGNer7Cz8zff9Rwwun",
  "key9": "5FUxKnq8HUmZLRK5vwfUzzkP3HvZtWG2kTRNxLjyc5xXmRhQJjmn95kRrtaChr9rtqX5xHBsF5Suu5pvW2Ebeuxp",
  "key10": "2kRKza8NcPdY5D5rT9KRZG785ZNpwSXcCEE4EkXmvJumr4znZP4a5V52Z8qhUSaVHxadPt6Kfbi5nWb5N3TBwAZv",
  "key11": "3hrChbHic5xCsbe3Z4gA9rbrgJXx4D5CfCDzGBohBAdrC7pXDGZHcmoMZaPQDUEjiQYBN6KeGgGgu2tN9cT6FgHB",
  "key12": "BBNpCjeFpZV2UughQGzBvJwuAHRXTvG5BKGoxvpxwAndtmaWmQiB7peE9Ru89iYWUYVQC5wrHsAgdqMHUKniLtK",
  "key13": "4tEokREePPwPiV3KJYqab6Egfxwtyo3zrZNkvRGLt2enxLtQSVmP4ZasiGfmvB4Az6Z7ZLkHKeGRMhqjCXs2Zguc",
  "key14": "5N7xvfqJG1cdjfAhfwpS6J7pqmvm9rGYqqSjnwGpdFi6G8X8fhPL822ZKvYCjREgwGfvm6ib4VpoX8APcWQ4vCXE",
  "key15": "2RJxnhWWs6fnTZfaansPSJv1aCWyAgrpVWagh6HWjoAJFdi8i9WGL3mVVsgZdPfuvMBN9pSP6hXyVNmwCamq8pWk",
  "key16": "21rGJ3zoEokhv6MiZikJZBgJELVmajK6TQJPTJZZhSUSR62eksup5FSCC8JMzrw7vi5YmLUNrqyMYbAWpQdaDXnN",
  "key17": "3wdYXUStZD9HFd6W22XBicKEEjJ9hohiP5Mhti262aBt33DMXTbuVE2pCuUYs8TceVARWB5fHVactYETfZ8dwsQU",
  "key18": "2GSrYP2wbutxZvQFc3qC8Uua3Xjwje7PqPnRkaLKPWemaGcpRy6zoGS8eXPyJBuV5g2R8noCMYx1DLejirS2Bati",
  "key19": "64p6PCTfG6QwWwmMUiBLnTMqKsq7d1LM2xZpfGxx8hZiu72hhk2Ufb7B1CD2WUX88vCBPU5HfvjAVNftdp8oLSKU",
  "key20": "2Y2yQ3dH91unhzvFaCzrXsek3TwU557nTppTC42qHzR1HjWL41cyykswpgS6aBuDR44PyWWiet1ZhN9oE3dUAKR1",
  "key21": "xs4DdazJu7rGztWDzxwNj8UvcE4Qj8fU6x8d5obiMZb4UCEbdQm7kFNGSuJueHjnsakkc4u7ydmnWfaxQVBWzri",
  "key22": "62HtEoMdhe3kALebHi3Kn4WacUbecFRG6j1kAN7vNQpivc8MNd34Gk1ArRk1WKkR4LJJeHKF1MJ2wuz6fCukZm9G",
  "key23": "xztK2pbguYjoifLvWQw8L9ZVEUGpTbpfUHb7S3a4xrWs686RZ1oYFzAnUF4kUwBo1wFamC7vsbXEgXJ5Lod9Sek",
  "key24": "4FMDJPNjJtmp2sRiwQ7VGnuHA3anMdmoUBdZsUPHMFmpgnC65Y3xH5LFWvEBvv6EisknRLCkquX8U852mj2nbr5V",
  "key25": "LH56AAzBRU6SNYtgT9LsMiM4Ch6VbkB7cxKdx8HqNPBcPMo1JnGmttb6c1D3oSiqiyabnSBRTM4hCZTBgQjpYCu",
  "key26": "53aUBe5DJSxUdywnPQdYor1cknh8Hh7anVwLWVpJf2iV7PS6owLwnK3SctzZ5AgFpVaHnutoMbGq4JhLv8EzEpey",
  "key27": "2bAP3bUPvRnLRNNCuutosCEbxuHR9YRovLmDDUs8UBcjJbrg1HcoRpeS2MjmYQzdsvjWuSwNVjJcyuhgvcZDauHW",
  "key28": "54HmB54ZgK9cvh8AxuyJKGBcj4mawFBzPsM9dHZWgZ4qDRZG4KG5r5qeW2oxUVyQsE4qhKBycTcqzNCVbCj6aAsZ",
  "key29": "M6okEUA4snFMnb14nJQhAz4kHufbSJQV7Q5AaN8ypXJ2hFKavWLP8hhDxGguUWbd3kmmc9kGUpUtEG6GWxPveHu",
  "key30": "23DJoWzFgAGyLEHo4xVLS7Ehbm3F3YJ4u7RMQn7RPUHo4ZwUTkNRmpWT2FbS4vn8X58dgDGa2DXvpnKrbm5L9nUJ"
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
