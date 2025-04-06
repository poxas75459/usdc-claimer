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
    "4nvZYAsszFSy3FJ2Zhjh6ZWGy16zYb6PaSYeSgZbHA9AV4DaqYWwixJNXzt2Y9331zbLKwBoXHiVdmM5u6kUZQkR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZGvPeppLnKQyckY5on1ewATT9oRNvkUJnUkj1NqCidx7fAdAqXUcvcu3QYkhKVTNMwu8sBtzCXZXVEwmSNE9e3C",
  "key1": "3EYzsDSSCudwB9ZoVR54FQpGjKASFXGyqXdsCBw4ppsvLcV5BNg3TsY8qbNdfb8e9NWev14zemwXVytgdeRNppRd",
  "key2": "fUb92crtkzQiN7hJBoPJShhwRGyAUYvu4KHoR6Kak9ctTrCnWXyXN2HUGgYbeVC6wwJgR7nGE5RKNMGUZkyeRr3",
  "key3": "4x7HrdN2J2Gj3B7aa7vhVCyz9VxYDHCaQvuCKz9uYuEGB541JuQXTVNe7Uo2J1ANLsrAnxwvHQDQqmQX3xHLy6VP",
  "key4": "61Y5f3CXiHyXtrY6G9hg5DQd59z8C6xRB57PC4BgqohyY9TCmLtUYuTCg4WEC7RDRprrnohyGLWcR5kRK5LgDp4o",
  "key5": "5dqEXmnya1JycR6QX7CPHPTu9n9PhXKsaS2usZ73Z8cAAa1GTi4VCZJtQp8MavsM2Mgrse9VUbc2HxRoEispehcq",
  "key6": "4oL1EeoYggWy1jxAYaWutKzF2P8XQeed2CZYYCb8RDCZmdMArYzniP7S3xYqFGvWFZujPWy2b1upsWiKegbBgWJN",
  "key7": "5TTnBJgbFtN1LspE3CwPVQNUzogpdjQg8QME9uAtgBELgRGUz7bek9ftwmgxZZXwvsJ3JXtn7Zo2NyvCvQhTXkEe",
  "key8": "661EeaUZ8ccsc7m1ZPa5mxNHAjAX83K1mHaQ5NR3CEueJsqRUFKTRfQEwMGvn4hvR1Xm6BRYamC8NE8GCLCorS1x",
  "key9": "3uVy4LcV3wfTQHy5Y3HjduAi8o2u9WW51L933kp2djNmxu9YojWvJbnPvciSuVf4TtcNy6vKqwj9gytwCem2vJpn",
  "key10": "3NPopTb1rmftFF84ZMrjs66Z68Gjak5MFbBRZsz32kszSzTsiEkxMqqMeaoxRidKoZgDUG3VtV5q7Ab7LGsYrr2P",
  "key11": "5kFDSHjMdGMaQSZvSgC24A8sNp9wzcZjBkGPYN6AoxnNeEomDCtCmHz8XxrcMViFi8T2M7oua3e1XzoymjUNyyyj",
  "key12": "2fEL2smf5udZn7KPzfDy12SHc8EZGBDQ7XrAUNd52XXwZKrr4xWzSZmzvgGWe896qmiidCDfpGXaERkNhuGvEqHm",
  "key13": "5b5CgBCzL7f1bR9URrEpn8GtmHfomCoZSPUXw59PAM5K96noQYtUjiCP7NWJdb2sR3sYMGsrZR9yBmiZHQHn9sto",
  "key14": "4dbwhtc6VJgk8aEb6PPzhk78fTpxhqFXy4uERWLu3aDAmsVaG3vrbEHihq9cHLZfrfcR5uMy3W4hsHQ7Um3J8avG",
  "key15": "3akmjDgWGLuMbPQpLYBEzX72NQdEk6jJ3ix5nvD8pSwqJ34xJgirySQCHGniAuB8YLpMWYXAC2pEAjzYUGcSMEqT",
  "key16": "2czgVSU2D4gZqoWtdJBH3wjMypEwJUrbnde3TRK3BvYthoR1AmtQsrioZmif3khZnoYyE62UaA7dGccGTUJcP9Li",
  "key17": "5FJ6EYwwAwHYtwsii5R2jb9BB1afKDR3VkUpbWpnp7E6iqXwMosSAtC4zSBH4nHtPx1eQhENJNrgEWAYbStywq9B",
  "key18": "2zCrhUMsKBTLWGQgNYGNPo99ZV6j7MGqyJw1ZNZyeTSgn682FxRKCWPufuUkdZaLc7Ag2invCSbQWHVjXWb9r7zw",
  "key19": "5sivyZUBPCzFjrVv8B1qP8BbJAomq484iqB7sghhnJD1Tjvge4R3nMPzFD17U4WfYwWMiFpLhmnhX5zBURytVAoU",
  "key20": "4uvAuHJ6g17xSrBWZNJwbrTLn1gPmFGPPoTmrrDTmDDczj2YjQxD3EjH5wSRPptfKcpFXgXpniAGgasCSnQNFkkV",
  "key21": "51fKLF5tvT8pWJEEgfUZwwyCJVAdC7VPoB2bkhazQnniHEmp1RNp4DJHCxoqDrym9YQarAo2joM831sjevBeyfCu",
  "key22": "JuQHeB3q2uQb6SfRaCMbe6NSKtxpR1yFjMT9C3WSfd3J3utfBRQkAn17ojof6k6eyCDq5VFr1LqL1m5KVbhx2y7",
  "key23": "dmRMtuJnPQVusRsq5JxmkAyLt61GW16ktC6iJgJfnVeBf89yk56WhTmJst2JL1sGw1faDWSH4N4yMDeaCjYXrR5",
  "key24": "4PsGQBwt12s4WRFoGqwsk9yQxcJ4mLaNeAN626tJJMstB8JZNXMg8iQx69wSw62AFx4AyaAxc4rtVh7eVnqx4tJ2",
  "key25": "5BPnygdWef3FK5qAfeP3rQihrQ73zHU3kTkVbVeCaNGCE8imp9tWLirR2giAduWSsSCYhdEgvFmAhYjvmP4EZ2XW"
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
