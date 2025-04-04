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
    "1SXdg1Yc5FnbfiJFYwd24GTBAgayvpp4HAJu2wfJqJY7EFxD5vyzkCCthxVQ4v7AwYWjjrvNyPuVXvbMurGUMj6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BuyW4su6RzEWVEqjafZXrecKAExssrucC6B64EBgMmKqEAWM77BLJcXXQgBTMwVCmwdZModyB3GiNDkT4n4CK7E",
  "key1": "3LaK2aYckgwwS7kTVx3ocHDSwM6gwttha7kJonSdqTEugvAfjCxoY4cVqnfh3JuVFehQBTUViJ9sGHTVLrczc8JX",
  "key2": "2H29fHS3mWEsw82QYc3w1DWngaWW4doSMmZqZ5NgF63zUiSjRtUN1ow9ti9jgkF1k4KLoNPLDnwNY5bbwtTif9oG",
  "key3": "kNA7vFGLvbtMHCvQrgHB78EkTSdYoW7U1JjM9cmULXPuPHx4HmFNhqmS2fcEN2qJaiNt4ijwSdPKKgDzZFM5HYR",
  "key4": "5iy7DEwKjXn6u6AAWUDFjo6s8g3EN3ECMshjgfrRD5hmZgWbzsn9FyCfvZggaMSJXhMf6q7Wz9QZYKvE84npixSp",
  "key5": "3rYFXoRdpKdNTrA92wBNoi5TG6jDJ7MNyWnoVMtLi8EB5MmLQMKN5T8jdJhfAkXzguJqeA5DdmQKrTZKfUzA7KWh",
  "key6": "5HX6RDQDum2zYwVcrQpAz7g2nFhvVbxx2kv6JpnUC9R5nTFFgP375ZaXTVT1URf7d55rprnj9tUGWsQkgK8q7FPD",
  "key7": "VfkiDUNXn4QeNYRhu8BSUUoaxVXM2xS1aAtLkB5U8F6KyorpM2wf5fhfc5YcwpiB8kt8hDmxF3sPJyJ4NcuZaxF",
  "key8": "NduhCvpaoZ3feiHZkdr3WyLbes2Ga5DQ9iMWzZfRFGNdHxHhUpr7kZWuoN47wnWbrNkmksYWe8z41JU9XVHZYNd",
  "key9": "FbcorvGDLnvnGWMVh94WsEfpZzbgkwX5Y4vkAK4dc6KQdWrEJBtK5f28C8J12vusuyospc86scsfLx1GNY75M2d",
  "key10": "2SB7ADeYH9CMhdbf47kub3Cfzp1T4ENctYc8cTrCicZM3ezjrP4Lm9vXbsBDvKwKKVZ8p5wqq74YnQvTiqGmiXsc",
  "key11": "2QpfLESRVphYryUmDZt31guq5cTXMghAjanchZn4txq44YA2YRhnHjc2LZp7ky24FLQU9Lyr4CrMdEdSiphKup9L",
  "key12": "4ckBBBbmSBvnCJHCRB5eJ37ttzyJoHEJZoZMWq7L4HRnFQ2LxRwXYmu4Hr7qNkCveqRhhKykGZmqvp7NMyCySzJp",
  "key13": "ZcaBpDvg74T2JzuEaPAaiXD7W2KVHZZgoYb7dpvsjYwnBKQ1X1AZMoDZP9XZuJkDtaZ5sq7F9TQCF48RLQbvuNV",
  "key14": "5jevtRGQ3MZJJ5T2TVkmDMP4Lfemxud83xRoAamPSSQhXJBgzARexQtYTbEqt5Kmj5CqPK7jNTpcW2DH23s9TGqw",
  "key15": "3ZbMYsDDE8XSv4DktLXVwahaftxQn6yEeoquHjo6uMQvbeKRdMjLfYmGd8K3nCmDfq9LkBHBAFmTcNkoNESgMos5",
  "key16": "uPQq5aA9tPP48fPdJS3WPq8yNa5Bshddh6ZHqejaHHGW42FcYcjQZ77G5qmJ5AjF8dF7EttQwY9pEu4yxYoCNkY",
  "key17": "6gjvMfuZjLS7eQHYqh1XXh3mGv74waSC2XHaNjF5jyT6W94Z4uFovi6cYJbaPML3HpFt8R8Rc2YyfW45mKKbRY4",
  "key18": "4bg17VaR6zrzhPwZDU3D8VGoYeNpc6TUi67tG2eKGYN1Rb3Exz6ogDyHrLiv66PkCZ5jEtNZPN5Yy7xp7p9FzmK7",
  "key19": "6nM3R3ii6wy8ry56JPYW4sq8Uj6QPtFD51QqcXCGioyfxHK7j9DhC7My34uADK3d6eLJG2R3q3nhQHshZn6MASE",
  "key20": "2QbgdP2FvAEuKQNFhjtb7uX95SS2VmGhXJQSBdP98tUb9f4YCkopwyEzD6FPvb5MgPf6gdLNoR8BjAtY2WEQsZzZ",
  "key21": "5We2tgQqh3CubDQfYuEPGcSpV2wEXt6YtfJ8X31hyd5gbQXzzh2AJ4be3N3wCjAoic19HJAKxkuLQ5hRCt6sLxb2",
  "key22": "3dcyyRT86xpMfJrUW6kcNDkspu5cHKrxKzjRRzAhzGNRfn6YRkX1tbQzFgy64E7SvJEyH2ToLZNsJbJ9pJ5aRV5M",
  "key23": "2QR4wmvRfMKmv8QmyBiw9D8TpREXfBCrLoq12AQ3nWqrZ1cg8HR6iAHXR2DbnVTLirS7WaDSjp5KeB5YPRxCehZ9",
  "key24": "47rBwjdrJNqzBMkByEbtQobWQfwS5m695B3FZHcUiNAYPuzbpFtKN9mSsSgfQmvMSS4Q5Z7S3gCQ9VZsVujsjNwL",
  "key25": "3uzR69heU43PX9wXhJx8hT34cwA9Evo7osPg5DaE3zaM5eUbRSYmDeUKzyqLJLkQsK5geHh1aWa5GELw2Uq9NZCQ",
  "key26": "3GQNa8JfjuZ7eBXNMSxxr4ikVNKfjDSn4odV5Hm3LqQMypKSn5A5Qjub4zzeLVssCjYaotNianKXp5te7ksMEvAW"
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
