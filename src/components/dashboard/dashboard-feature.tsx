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
    "WiWeWrGJtVTNfanSq6gwF66SgPSCrCHNCZP92qVEK2mvS71RBzm6NNDe1SMsSye9xWwDheF96oCzKYEJQfWXqsS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55n2Z7So6keX3W3ssKg6615sdLmpauaBrZLCk5gzKM4jTSKibFWg6roUvs7GxHinYCoYJnSi2hgPoV828oJcX5Do",
  "key1": "2QFo8HKVvbMeF6DeVuptmNzyUq22D5P8XMq6BSNQGWiCffK3xSRwCPEy4Mky6dTXmeqWHYs76RE3fKu69pPKDKFT",
  "key2": "53i2iG4CJHnNaw82aLXg5LW4hw9LkLzgo3Qcgqqa8eY8a2upPu9Rr2V8Zfo66H4w3xcUFfsCB7FGJNZAYc6SxE9x",
  "key3": "56fnby19qHQe5WuGHHDkmcTpTMf7JoBm9eEjo9ke2yZDQx6mBZjrFnzB8oe6J6KymKpKHBAzPUSjZEmH5ryfcGtt",
  "key4": "4i5HiUbxEm41PMfSfSWZzT27eZ1fbQyfvfGgSwHnaMLTigzaVDH6VDGmN2JgWUxR8Q2whk3FpNcdsxvqpJsrVNpV",
  "key5": "4DyiNwZVxHPNSPsBBJMKzphfp5e3EBHxvrSPhokdpyFTHw4rruM5o9gKXkcUcQby6cvdrVLeASXDEFcLy1zdcBQa",
  "key6": "5o7w4XTJTTK1zD1C7Wqkv7bRPFhZdhotUBcTBaAy8CSzTKL7a1N9WzQAn4zEBC6nwBSJdc3HsKYKCio9iEc2ArQY",
  "key7": "YHLSXEHkisKGkWntqj7rBeo2tzAHGB53xYrbJeV8EXQYa1ECMQTuigCuk26a3DWcN3rCeJtfCdNR1sjFivn1jzL",
  "key8": "64KjGpZaGGhgAqhdFBfnUccDmcbxKk6ckN2pT96zEH4JpySjnK7MB3vQC3Pa6qAYGeG58JQqBBBE7JiRo9syCTX2",
  "key9": "hixicpqUzH6eYa3V2oDKY8iaoAx9cS67cH9EcAVyiudPw5rsWoUcjLMn1pXYnYxYARmB9vPyfyBtn1myX8sLGDA",
  "key10": "3JLMkAykryMzzEcodkG4pgQnoDQZY6wmMW7DXJFajoKqTc7gqXjy72Sd21DK5fHTB3ZvuaFcCU3M18zy4ve3oyvY",
  "key11": "51efMWD8ym5QR5XV1sP6JoMc1UvEoBxXL5uS1UTMjc4wSfR4kdb5xqAQUeNvBpZwGVS2VSBSfjURvD9c5uD21rDa",
  "key12": "4RZNCZix9MivkgnMMQKG2CH6joYGcdvek1bJ6H2pjQffnwzGMWxtegph2bdU9oV3K3q8cgQyppKjVenLJaUKdK9P",
  "key13": "2FZbWmqdSP3tBzY9sT2sgNtmVB4JiYGdAPvLYNJvJmFESAjUYsmsigdo8gLFnALBpB3gHMWLGM9rgdzgHdF5qSWY",
  "key14": "5aMn922w696iABYmo3APEghDdLSm4DYSJ1Km4hoW8RTGuneXeJmk7vqxvyhBP4DQYkm1rBXkXPSRLxD7rPuPd1Bo",
  "key15": "5RPW2wnPQMhpAW93iBsC9Y9brYcZWdJ4nwUHyhvjovNbpnWZmn8Pq8JgZc4UStVsQqJ3s4mgZUFzGDfCLmLrqm4B",
  "key16": "3crVFyVaJnX7CujgAuSa5QTK5FzU1y7KEUbHoZxPFYzjBzeXpGS477xpK5uek3WgK6M21gC4wKRE45vEt9im88WT",
  "key17": "4fSDbLzhHnLPuLrT4ToX7dckMeES3xpEDzcsCDDrT8Xz1qQef6LPyNJnX8vb6YBPMo4Me4gY1gBiLwK2TfFpzcWa",
  "key18": "5bwNx7QwaFMH9JpXTqjVfLsCjjC72vY1KLQnTZD3QhaBjaQHc2TTiafXZsBDeerr4SQS7FDiLQW626e49muHqTtX",
  "key19": "2XoYi5sAsczQWzvoCzoshtjCq2N96sXZhynDYnvoyTzBCFguErsMkCvDzzSH97MEZ2kaDH4afEhKxsovjrAoiDK3",
  "key20": "5886QfDNnQAuJXHYxqN2essF7mHRCHf4ep9jFTsFLQiN2iLdKREp8RrVZb13M7zdbJZQivdr8HygpaRKQjpxzdVf",
  "key21": "ChPjYrD4RHYB1pXrU6RMPLg4fbvRscKt99S5WkeXvS8EXDzr49MHHNbPiS63Dz7e7RDFxFFPkD8uPhkSUhxKkwq",
  "key22": "4oeKZ9dY92Jndp34jiftHrwzLuMLYT4tcHYYEphHSHCn5xXDBn6Y8C5E3vBZCPabmPhgNE7WpBus2cW1PP7eTrvc",
  "key23": "315w2mZi6E7DnXf9RwAvdE13jR9VrCcvBZDrgiVKYZVd5aDM8MJzVi9ScHFrdfhqxdN5Mu5fr5g4vKCKYsyDd3Ki",
  "key24": "3kYbSHN6Cr677TwCbQWXBRtsiW4NtAMp1rbW8zTHDGruNwB1NqADbPgC5PYA4voKienVdjMT4YT5fjmqaP1KWJi6",
  "key25": "27Z1iSKgBzz3pa1wQGzw9M4SDi2ek2d7Ts2kxeXBKebcxWTkMTghwvmuPddbfcuACS4d8Y9YSgEzqe8Bfi6jgSj7",
  "key26": "3w4EJqJEvMsFaYkQZvaiwfH9Eb3k6YRYyWXMkBq6X3wEW6aYFTJpA5bfKf5yPmF9w97XFhAvvsfbaopL7AGzmbCH",
  "key27": "29RMRkh13xodhVkD6gC4wzr2tcfc15mT1MYu6Kxg6bxUs5nDgNGTCDsarsqDbGjbq9EYNva2KW8fBiNdDEiS178T",
  "key28": "2i9bBfnZ6AWCwivWsb8XYvLivhpCgLT3T7TReqEsCqLa5W1odEZfA4y1f4GKdPdrvvRhEtnyUD5Jz5TN5WkrAXnP"
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
