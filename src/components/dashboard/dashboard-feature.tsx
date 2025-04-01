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
    "4gD14RLRipdW2LcVxB4DKAr5YGio3xKC7RS7eQhy4sGfPrYnLbHJMxpJQtz9dvfA2NeiaN6khHkbN9AuPzqouuCK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jahMByjB5RTceN7EnBHifBxT36HpU8ZPNfSeTttnoZj184Tc7JnuoABUkEfhtjmRWMcYNd1JjbYVvS2idKBV2pM",
  "key1": "2pQcN6mSUGZo373i9K4fgfy9p7kjDVe3hVCh8Q7K5tbhc35ivb7eSvnjj12SKUk4urZm7gq4v5ve4TkVxaG1i5yV",
  "key2": "33ibZk2m8sQodRMXVqb9X9U8bUQmEjGQ6LEPmJYG8AD1ejaWqWtYnWR8BnuoYQm1s5k5woPxx9EGqHX4K9BTwrqU",
  "key3": "sD5JF4N74X1f3M7KB1BLUHE8qkLboCMb541u85MpAX7u2GcWRWJSpmw11NELHALnn6g12EYpCSCYaJgVgsWJQFh",
  "key4": "652ZrbKnRTRBZixxe6xs9SKrx4yKudwQFdLR6LpsmTbRzUuQy6z7rXEtWsoBDXcSHiRcuasY4uQZAp3HwjjBxcmo",
  "key5": "rjs6awhHatEta4V3VLXavg2LxEqi6rvSnKiE17uALsCN2kCUh75T58F8UEvcRxsCsYbEEjHQSxcFz2baeDf8jTE",
  "key6": "5viEKFKYY868hwM1BP9L9yAYcx2q7BMtns7REsMm2kQjpw37chgCovoG9PFEYngw1jX5aMNUrSxG7T8ZtxbWoE8N",
  "key7": "5Pn3c8viRVM6XMPPByY5iwyb2Yf2tm5EiJWVLUFDk6c5Cz51RqbER7qRUkjdg4gLToJ1BcXgjY1Z1pXkzjU6pqLJ",
  "key8": "2GEgMptbkDBJWwgBnqtv31CZS2rDGoxV39Z6xUNpXsx2YGFz4woRjD8Ba8N232q8k7RhvhefnMSd8Kqv97TafLBE",
  "key9": "3JQP3FAegkxyQn17HHimosq6n6zxp3pGxVrDd6Q7rGz6upaXqSXvdGD1bQn3fRivmhPpWvDjX9hU3oYdJHhhccPY",
  "key10": "2ABJL9zjLgCGPMWMmcCvE7WLtFS9TtsUfryP6svLdpqz21NJz23qWoxhSFmCnSFjzzk1PSNKp4PmRCH5U4QqTwGf",
  "key11": "2gbiu5KdEAe6ReWW2Eb61nhhnBHsEa4SWd4uSR3AvarQBeUAJxfWgG7UrxraxJVpZyVxJYjqxTLavZkzQ6XY3Cte",
  "key12": "5WTREyAsgW5mqQ5gomH198mcqbg5YTPYNx3nKYmAiLeCe3ncqUMjbQvzrGBiFqoa2KoKAV3Q32USK6J2Yu7MHvgc",
  "key13": "55DinvXjexxYdtXWfE1gBTo9cn8SFu9yEpEzcvHHsDHULP1KagLELU8MeiQkcppzCYAfCaR25azc9uDEy7EAkZCW",
  "key14": "3v5fc5D1KsnYYbweFkk39kj2Db1nb3QiLsFDBViNdAjRsiPvJmz6bqARv39CWATcb5JawgRuPqtBjcVQ6pGPgWwN",
  "key15": "3z6F8kv4Bosg3vBwTFW63YAkmyjW7sxtXSTVjRnyoj1oy5RLXK7xCQqjJE82WmLh6sTwoU499CC6No7HZ2RXNTiu",
  "key16": "dF7S9b6abtXLH2qjP4b3LQLWsrZCwSjDcKhirU7hiSCTMBaaFA8kdXxxrKbMFvPC7y8R5SQLa5dW1fayWAgZgFz",
  "key17": "nsqHGWrUAZhg4zwTRnoPerHUfKdvnoxsVSCiMKuekSVRGVjwM82pLwq9H2bnAhNqREWAJv4LjqhgsHJ9aEZmW3f",
  "key18": "4Yeq3Exw9b6E1aetVcQLC6PkTVDYGxSWHgunUMSJ6Cej6Ga3G65EwfWjrkHM3DfPUeKQiAs8W3coEugMDzduuQrD",
  "key19": "66NaxV5zj8BV5FLqc2b4EpLzx3KXUD6r9PL4MQSY6TFdMGfwpPLWhcYYBKmKXSiC2afNmyXkA2vMDE456kftfsfU",
  "key20": "3GmmrYe899dC91RD42FzkvSPhuLKCyKiqSdCCpNhRizWFLSLn1QBEAXXK5SHLpHmL9KMDR2on3PQGLNx2E3Zbzb1",
  "key21": "3whk9zZq2bsBqeBDZhKcRyjRq3Lf9u1bsTFwDYsua2zjwnP9GDJbvdSPjTQXmCqrzijDjoFfXd2hviaWKgvX8v7i",
  "key22": "29kM7GMYWVQSmUrCFv2nP7WdZcMwF1JWSDhxA1DXdvUNxnKWfTMqmaN87VqzjJjhVjscBGMq263G9FCi86q1dQkP",
  "key23": "5ekZHiyvB7PEc4cU4n4LdtE8kLd96sjLSLRbP5r4qFMqyvVxzFEjo2jCtLfQqtAzm3enChW8A3hNSc5EXmP3eFsA",
  "key24": "2pogGhE1e55knnJf2zgtVBbqDAS4XMMY5vbaDuZF48rgP4L4THUwWCfWEvTavzJPiznHC9J5d7TQbYMm7R4QxQSy",
  "key25": "3cjZfnJ7ipVkqbHUYA2JqLqWLKZvFU4nfgBYgnfrc9SxaajHmtVv9f9MGgo4pKjkD4epF9vJpztiUAJUftZPBe4R",
  "key26": "6xa9P5mu7sMa9u35BWnWarqNbMK3DSCsp2mTkT1cQ3z6ZQYQjMaXdCQXTCmfmzBraEhfLNYDnrQyNNRxT2FRGhp",
  "key27": "5TaNHpw61E9wYEmxsAWYVuNK9BKJTi7mneA5abEmUaszvjzoxXDspGCRKNS6cLiWVeoJeXGiK8M85nL9QaAhLSt6",
  "key28": "2MmwPCQdQe4bvkDZdsEBpwpZVHXnzpu8ws32VRqKwj3Zmg4aaAKGk1bRjWpVk1tXpP2CryXcE9ZnHrFWJxLHgrTG",
  "key29": "3wDnFmgn3T4Z3VDHxbSnn5Kgb7Firht7CeD88gcBDgsQxRBksM7Kw5RdPSJxTU66axzjYViLbyLHHTfrvGRMZ1WK"
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
