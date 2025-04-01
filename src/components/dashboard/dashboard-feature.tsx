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
    "3xVhjJ1yYRSxCFBKRd2Vunya2ho8p9ki2p5zrQEDAaEvqgTXzwGi8Q3X4qNZ66zF89vC9nPUAY4n24rewAuXVNhw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RpRTm1hD3uncvJxHZFrgC1JhBS1ouNEbnBtsfW1FgKQeB2aWgHKs4EB6e6nkkdqaZztjgoN3J4hBbWavQC2egYT",
  "key1": "2ENvWmU5HQS1JhMVFx6VigT9qzGmseAt3mhJj3gXW8fo8sW9a4fmv3NBYA1ezoDCzAEM2q9iw8T618grsgHDPjxy",
  "key2": "649CDHz17vAdf5NK9po71rLdEMTUhoXL4XmeYeiTBL1gd8g6m6RC1pK6xUj9L4sqp6D6QTexdH9Qsq4jvev1DjD2",
  "key3": "64VUjNKvfAu4SgnasyyH4TsfExJAEWjyarZMNdce11B4fRtwoQfDdditRpTNC8MH3miM29fnU5coS61vVw8hAu45",
  "key4": "5Zy2aDtebKcRcYwCCB22sBpw1ttTxt8hbUiWKArgd5PQrYarD1m75ejhtfrPN3ZDnswzCQHbPDpWuWHiAizsXrUd",
  "key5": "3o7WeYCLEnnzVQ5CgiNmVVWprYFCb7m7oWsUW6PfjMssiWq2CDZtH7UcwY5c6CE2K29sU2M5bAqzLhfeyY1N5Zsg",
  "key6": "5kFnP93oPoDB6eBfooPcCogeKy3mUKq2ENyJpBokhmVD7ych1Gtf2D67Rk6qNQGzTueVc8tQqdJkLkU1Rh6n2jUP",
  "key7": "3TrBimt7DTNP3hA5AW3rFU4ZA4coNvsZBrSm1qYPdGjesbYvGy6zktYJhGNMfeyPnWpLG2XUi9PUSM54dQfYyEaU",
  "key8": "2DiZL5QNeLYpJyiMeEmPRivB7nFUVt1kgQk6o7emZLJEJZBYmewjYD468egQkYdfwMAVzK9w9FnqNdQBuxynDvA1",
  "key9": "3aZ5BU8raTtmV7HUNNVEFdqXCd7uYf1nJW6BN4b7iU1fvzHBQXucNcqX7sJWVnYoA1q3HUSQC2outYWcRaMSCGXe",
  "key10": "3v8fT9UGZ4Gt8tcfYU6MhdRqvp67Mn7woUjSryTM4hbuZsVe1bKZ4LwJ53g1BzyuwWE7Ctryut6Nh5ttnRpG3azf",
  "key11": "4AmmLps9iQ7rRE5C382opbTWcTS3zZLFGb1YKov38wRFs6kpiUCD3QFSv1Tq87Nf9qqReCJsvLGiMs7kvEFvaujT",
  "key12": "48mYFJoLMh92gmUWMyv29QVfjPuThPx9vEKfD2Un38impj5mgC7pno5EBfD2eWvYYhMf4YFfUnvzZtTmx9YMxJjT",
  "key13": "4rP6N5VEoyRqh9XKXnvND47QoEEJru9YbtnV7NEJxXfKPGDPh8dHNyTw5oLC1n4E8h3zZDAw5Pv2gz25DbGRb4cq",
  "key14": "4ghS13yMBBBHDHpEwT1rLwhoJjzGjSVzhowppEKWdio9ocTboArR6ER6gugW1Y3R2FgAuov6Avu8YCftJCimmtDy",
  "key15": "35GCKCs2WbTEAWiYWCowmo2vhuMxBDvMW9UMGwZdNaM4Ee3Q34tYvzHDNUG3DhCUbWZTPeb5qvvhwqMNNikyjeT9",
  "key16": "5LT1o2V3QpNUTRTjMYBYfeyK3mGEeaLiVqvCcELfJjABm3c24z5kBGiTnkBrevjJ3H6n7DEibQ6JC8KMuQfQyeUo",
  "key17": "ikQegmKatwMJhniVtsAurJwWgf2Rw1dvbn5XnkGNxSzGKsBbB54dqjLz7Lt2FbGwsgJABpijXsccG1cXtMwnRLK",
  "key18": "sRvg3pH88QtbMNsdv9GMQX9K9YAdk5xh5NiZJqEZNmFuwJg8JRMiYSwcnvLFjWJVbPeL3z9sVGCPd7o7zu6Wdes",
  "key19": "5V6soCPDgU4a7t4kZNnwyVyAkiptAurPSv7zPnCfrMUVM1ANmqboDLL2S5Y9wz9TQ5vygG4s1cWyq3QhDcXCpScj",
  "key20": "4tcyeoKFTmz7xXKafiuTj9VfxkkcaJkcE7oJrS22pzXgSRKEQPzsXg68MVCFjHYVp3eUwqpxLaoKx8p3pMYHQsTD",
  "key21": "gsf2GHB5ozi9hfgAxtynVSzDTQXBEJh3pn1HzPygBNVSXknHkPs2kaC2entkxNr9v3pjQ4gbHJb6qXsFbJKg3X9",
  "key22": "3T1HXqqxffEzvTAo1oevREJvAKnFhUznfSQzUn7zRXdYUK8uRNziy4ZUAya5qD3x6Jgmx45nfpkRtanSrjfqezxF",
  "key23": "5JFqNszTx3VqgoENwb38eNLRVzW7tAfLNWwyjssjmj3ajZFjP9YHFfkNLWHrrcgitfd4kTHYKs9qhX9GcMr2dfxV",
  "key24": "52nu3PTkY6uEuDQxFGEcGqE4j7bJozV1JEiNav8LWQihwFAAjTVm3fs5AkUnMM53iFMbgoMMexirDShshQz2BBDP",
  "key25": "3ZNjBK9qmBtNsGSJ5DoeKsS42nvWcr2WeiC3FaZtunAtrBF6TS834MhDwB5e3nD19TQvnuamYVwK2rboKVP9UQTb",
  "key26": "Hi8qw5xSczGvdMrhz8aGhHG22EDN6yNmfVHQPUYcwqxgVYxd9ncj51p3jFyYmurr3iiFHJEqSibHhENWNkHgt4M",
  "key27": "4sWZvcdFauGmZ2VCFUGj1DXCLrspAyWQoGPKxPeivHnVSfn1X2ioqKdZPFtsfB2K3gbWXcE3X3rQh7oUyDohFtjs"
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
