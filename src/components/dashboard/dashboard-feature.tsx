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
    "5kYA966PCkE15fzGubuFHQK3WVCq3ZLaevbvv7jBAq6DwVyKxz46ci8b5hXUY1VN1EBxet6zY6ZJaM7nMucBbCad"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rXwBpg4Wm21VbXJsgsYaovU6VDSpZVtDT3VzgrT21yYzz8ZZmqqnnbD7zQeqAHiPfGi7LbWCsPdHb92sWPsoRkm",
  "key1": "2pEidKGUsSh9Uo3nn4doxCoP1KSJNwjQfU6husbHxEPPQfhgkVESEcduasrjNfhtsE8Q11HeabygFuxEJXz1uzb2",
  "key2": "5JrWMScnJ5a8tZFiDrNNdjFpWMhqFgTz3m41howeLNfidqv1KATurbXmasuh7HKmGmW96DeaztxhdJmDsnW3ezkB",
  "key3": "26eYvfYS83n9K9Q3LV4TCwjeLYsAqtUG7TPuMnPh6H3ENWnXm9GrBbgAWY4c852cesic54BFdz88eu8D6jtqVGNU",
  "key4": "3B5bL6wagofUMUEVu496woT7m29HEfUs6JLpVmxcHrcotXo3RCR1xhahStyeSz75Ke2PckkxhkKyHR8KAr5P219b",
  "key5": "49q6TCCHNN3k4CC7tKroL7QN2coXxuoRici25XyPBqWRutXNLyCo59pFwkRVhqJfdi3u63PEHpnuRmH3q4RuWNBQ",
  "key6": "igspjf9yEgssYqjJhaPKTpv1rxkRXFYJy26owAh1R3bADr2rqbgeXMRwQDbHGACvH8H6fpo2A6SzKkEXh85Jy3c",
  "key7": "A5dQTYfnLB85VahoKhTbWig4mZKTSEJRyrsYowhWfRA4kqNAbvkpqxo76DV1ZgSMsUU6X16y3AUw5P3hrrnNCHK",
  "key8": "3TqBPfMpbkDm1z6LndNU3nJHdr1WE5hDAMg19c2UW3Ths8u2mPnERima44JCVyWFasaWE9ij345r3CMD6HDUSUMP",
  "key9": "4TQ7H5NQaHx8vcoiUVQASd3Nh9UcTBTJUPm1P5h1iZWDnCLgFTPwhJg79fAgegtMCrjmak7E6RESpwC3YF46kJCS",
  "key10": "2gXjBZF3TCn2K1ka98kGTPK7SmUFbFwVZPzwbP1B7pwUatsGVKVYXeYn8N5qzmspFwPEzGmoKU9Ex9GqZDGTmgrh",
  "key11": "3seBnbWFvJTeqL57jKxLcsHKk2jsKi6qCWe7BYUNreUqqnP5nhodo9UXDwjBpCnDLURbw5LUtnh1P5VbDxMM42oD",
  "key12": "41P69tUm5c8ixEvNsSxK1bxDm3zqN87ZAPLhRxjRkUXowDjdC4j8CaAxfo74k9GD8gsQZr3BuHkH5YVXGVSX4DkU",
  "key13": "32iLCLAtbCF9FMeDu6JdynrwHAyGCiJn9UQgk1iGrGbyT9K8buFbRRTHrVsdpZ1uMwKNtUM8wkeS9icMMWtVvgjx",
  "key14": "yPqusex7y19SF4baFaChrmAx9madbbfKkz8xWGPgRfV75GZWd6pac7iNERciE6Da5p6EaGr6xsCVE3sQ9X2SrqC",
  "key15": "4CMfjwpvssrarNtGzRcbtdDevpWN5hP9AYq2w7oDFecq8ZLYjV2oaApJfc6YrxPx6tV1hULgjh234u1TcC4e8uJh",
  "key16": "3hUEinXtio23NQxw8CPfSXeAQbzwJ9bN7YZmx9A4zsYfJPTGiusSDfhsuE7uoogagzBRd7VZzMbsdqjVtt5LYF24",
  "key17": "5sKNLauEZXfiWuok5aA3xvpJeRqEkcXwcoQfoZdcXhmsUb38tPJyjGZ1zDz3967DZ5bwVk8dt7zifnQfrdLSWR4p",
  "key18": "47ujTchjEyJ4u9g5LswqLxd7bUMgzjnm7FwdVmEqWc1gsRenMsKKnBkKqCfEo8F6Ev9QcCsmyMEJZGM6ky1w3Zb8",
  "key19": "4nDorRGhV55aqBKdT8qQst4hCzdMbwg2pVr3BtDB1RQH8AguqLVoZNUSGGDm6DiVnr4mDzYdPnfca5v12E9gER1D",
  "key20": "4JH4acRanZ3hZaJimvCqVvNbsuor7fHXCSX8fyEahWnMRB38UcFgatciwqGjVVj3k4x2YXRk8ZsLjFHvaapXkCoo",
  "key21": "4685epKxwaTneX9ADUMCgUkrStukzEpzgefi8msdgZ87zcXB5qu4SGFDuv6iALFn3LSfLhGJhTBihXwtJK9xyMZn",
  "key22": "5LoTwXoEYLWzLw4uR61SN8XYENEoYr86Y6sbrfij1nE8gHkLgq9hbJhPA7LtYtMRS5wCNWiaHnLAsqwQDrur1BKd",
  "key23": "55RRTcAz8HsFtzETn9e4aMSbuDLwUJh5t1aCW3DQZ4EY1P7PyD9wp5qwhokFmBzFrGnnsSrrV316bovMDHy3K6nP",
  "key24": "4ZCsJdUL3aVa7wDLFBeTuFL7vrF4YA6jfpCLGYBW4TA7PckAjLZNmbexbsqyDGicRgT5x5vL4dXp4bwpBYwGSwLH",
  "key25": "3PQq7h5GHy4VZk8EwSoyQRz5NgMt5shj7YmqrTEAW7nJxmSd2A8N7BpsqA3NJeJn2QtBYK1dS6TEdQ5tQceJgn8T",
  "key26": "65TxR54CKYaL4aN2uL5VmqzoYGqGorS6xFxNaqqrSbXp1F2hR1G48aGXiHmM1GNzNp5tsP2QNVjHVLg8kQKG1EpX",
  "key27": "3oeinhB2Ezjx3HSh6cpua2z2wqFQZxBxrUpz15dvAVa8SYGBWSRQgKPWeCiZtKRmVQ3RCdZQdGePFwYfzP1A3Gdq",
  "key28": "2uh35Fs6CZSzSgXT7ocgXZYudWXwJSy8djnhAY3nhgMMc5QyjhBbgAuDgD89Hz55xGMF8X26XeN2CzfWFpdUr6Yo",
  "key29": "u2AQM5M1LzMpEbaKLKusq6voer2krqNbWsvjAM5LAwsfXFjA4UoeKJB91QpD4ATZXny7YzVHBwXoRu6oDSkTWCy",
  "key30": "2yddhpM3KsP14EZf1CMzmEH7n6eafDEhzKL9oJQ9DVaGouNgGhZ3e9rmbAm7eQon5CdFXEMpzVLrNTfeHxgbt3st",
  "key31": "3stCZFbSu6i2isXu7b36aEJ8WU5FykiXbN9NAB7b7EqfEactzVobJ5S4VxBUBsNu1PobTneHKJw1ctTgC1HLLz1j",
  "key32": "jqrj9dGrigLVdcgrY2yW4ibngJGgmc4tW3bBTdCx7EvZSJtr9RLmvY5K8BvAjKXkwwfYbt6eRCYt1h5h7LkNXwY",
  "key33": "3MLUwFaqoSBZb7ohqpu9Vjzp5V9KhZURKPEUEafGHGHBFdC5ZZyKCQmd6TtCFn5kkbKTkUdGjsi9oGH97j5C6rx2",
  "key34": "3VefZ97Yf7VHuNE9CRzS897go3MueRGrdSxZ9wkgMsWqdvGqiTm7zEeBoL7fJvF6LUGPKhHPKxKiGNdw1wRfwWg7"
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
