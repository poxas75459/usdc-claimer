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
    "4JyrSqUY5QpX5eqGf8F1NwUirZp8mb4M6kLZ72XCoJ9Ms3uPRRubzSpANExFEvobtGxjS22SrHoK9NKn51e7qG1x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hc6JvXM1x6WNwkmyJPpPkjR64X1kG6T53iJWVM3qYqJxBBsMem4NJqsfv8s6uLT9d7WR2B8i5LgYquEL3kAX9yW",
  "key1": "63zoJUCHyovZxSDuMYivV4saHdHyW12PHJHfKaEhb7suajb9vMT6kPNzBb6ojXuWJU9FBp3QPjguqhReML1Xdsof",
  "key2": "3tks1GzWLwQaMaYPDuSadpCtYNpLhWJxQYgih7nJWrFEgvXzt3nBD6SAjoG7PEcEbDGVZ6LUMC25EkAe6RHXWuMS",
  "key3": "2JHHL8LeoEpbBS5jHsJCQcNzAZNFkRYneaB1FM17hMfv5fDhZaBaEWjafKaHZjgbezZMVY2cedZCqB6tbKFHqLQS",
  "key4": "5ankqQAdWvLcVXSSpq9piQsmTtaERbxSUqC2TzZDYsvyzCp85zMLoK4FzXkzDQvJm2qGQymXr1PDUe8kF9Lxrcm4",
  "key5": "ys7u4qULrUyipAggxdcu1TEGecBTtreHN9SFPkSRoBqUphHjoL9QLy6TR9LUNkdVwfu5HdKoe5jWWjrmBYn1JxR",
  "key6": "2f39ddYqrYp9Q24eRwFCEJru8cZ99iX3d2md618mTS1GmpZ9yDmwwhSQK5mKwViu68XS1n8UH49UHs4CNtGEycpb",
  "key7": "2i93eQ9mhKoxxESxaauWvBLqp59SpPCwHs87vQEXtZxSADXsVnJ46bwX5iXW3rQc2uZwGALD3DjFBhcUoo3Rvkpu",
  "key8": "4UENF3udFLFzokpgWUhBYKotWdnUS5hFUdEWhEg1YExTyzzjs9KCtZNfxfA9bHLfTTvEjr5jooa4RdaW2gmzf68Y",
  "key9": "2xdwTPJYoLBbaBMF49vSRc7NePdTTq4Td6qBbQ2pwfgmf9LBPJXeypXCnteNwcj8m2XvbgzQThhZPC59EywyjeyT",
  "key10": "JTCBjn2gQxhtFSNK9jryKGUq1nmgiXd2ssS5xFeHzgTh1PRd14VAFfLGnXQszsYrF6CzxHjZ5vX8da8K85F3aLB",
  "key11": "AkFTRi2pA4dPqc9vgNZpCjsuUx19haZ6U91FpmPRmZVXTJhGM2Q7FAji1b9oxQQfhygYA1FEA6myaZd29RxkvNp",
  "key12": "5ngSg15uKh8j7X8g6yL7tqbpMPuPJbPfs6feYo5QTabmeM6UwfHPSv4Zev2SMcjA5KjtJNqf2D47HNho3QKfdXEG",
  "key13": "Q2Zbk483UCfD7dswJ9fdKdLywr3xtVuAY1eXqWiyJDc4hDFq4cPeukeT8ZDZM2Xp1M1uMt4Pz2CfNtYuGmDJqTM",
  "key14": "2yw1z7KVfwDaadBRgENaDqdNg7zi6Jcy4G94yn6FPiC6nYF8FC9Bcazfz7pP4fET874HrMHDpXTwtkh929AswKdQ",
  "key15": "6GPMnw4sotRRft7nEophN9zV59u9dsNJrkuAkWNdftBzezkKMB3Hgzv5r1KUUH1mtEiMNztYrBhFfgBYGuVZk6r",
  "key16": "5r7TEKEG4Th74L4DFgf4EWVtn3fjoaJh2pcw49neB1Arp7RtQPvaj5H6Eo3X17y9pzc4LofeQFcLCm49NzHKp152",
  "key17": "2TUb8CEsrLTmUJMS2TeAcEdmvWbK5bEbpCEHLb1EdwpXiRmeLCZKCtRidvE7r1cJuXRhbtud4dVVDXeUJ8ZavKxi",
  "key18": "4Wjf97XvEN4nGysC5LekGBdCh4qVDnbz113mr89e22Amb1PeUt8uaWfDhb7T4vTQS9Q6bH7CQ4iZZvZRKQPkvZkw",
  "key19": "Er8BqZmM49uzyD86cf8PZVgESfQ8gzK9gi5a2AeZK6XPG3FkiY7yHUgG8KWqSdMnSDENW5GXA8n6uE9eVyZCddD",
  "key20": "36ewBH5ZtzNccWdKjCPoJgGxXuF3ADmiRAVBg9CvmDKgFDsEb8bqDUCg3ZqvrtANKUXAfFdQ9dbCCvR3gw9NLkhd",
  "key21": "LffWQrKmBYhogWViTiGQyvWJVh4r4WaLJkh1HK1pP2WGB7GAGiDasw8iSqf15NsWxJmsW738LDsRgjxCEeudozy",
  "key22": "5VN8LUtJW8v7in5fwAPV35voWUR1tqfieqDyNY9ZvuxycJBMFFcocN6kSnkuS9uMc2kjRj3XByd5pENmkoUzn5V1",
  "key23": "bsNKNPVdAaw4L8jN8b6qedPAjQGq3hTwhQbQuCjRzanfcArcrKTFKqJiuVXoSURPdLERuPRbq83inoXJEF5PGds",
  "key24": "5ULWHib8ixXEFziMQMmZPumL788m5pztiDPSB1FRgDuQiAwwMh7sfwG5DYivpvHDgU3aLHPdfHZxY2rwfc2Psb24",
  "key25": "4KGhJWUn4AnHZrAMbkRjmzBWgTK3ECvAQgkUjPnoE24mcrJYtjEWf3mi9bodd4FMpiMu3NCZMPApMhXFRUyZLbd5",
  "key26": "qfh9JxQvgVSQyBdzQVsNtTZL34msG3mCbsHEU7LG7voideLewAjNh4TEfJpaVDGgLpvksvBYwS1fbLPzSGDoUxH"
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
