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
    "3Qx53yPDPdiuAj7LHAynqoCcEZv4XR31qaVXoqDF5y9jBNr7AY7EvbhtVQ6sJ1EUX3z68g6u7Cd34BL7tw7na2J5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MiYMN5xr4Kr281YpiAuJc5QPCJ1ZkaWmXLg3BjhwQNuU2BnG8y2GT9rJQDFeRdmBR7WftnAR7Pj2yWpexaBRr26",
  "key1": "48g6YREYiLUrBGdkX5zBn4SBVKzresxRt6wfWzcNA6j1N4EGYjnbDAC8dh4qzXRkkx53AiubXRcPVnnAeHj8paBj",
  "key2": "2S71xu6ZNQ84bmEbJc1keFvbykNZYABsRm5V59JkBQQXXjoagcS3kfkpid2eUoz2akDNpvrcAK8wjUUgfEbr8SvF",
  "key3": "561k7zSmFwaZf5zMfB8unSSHkhjbbAddsw79ogRw6aZ6RmdL8VwNmP9zFJ4bHG2dK3hXKJeCX9guEVZPdrtuNJdG",
  "key4": "5x2HAycaqb9ekN56YauhnK6owkwpTCmV8Fc7LyHgUfagCrh2MGMehUKP1yZBFFnWzW3r32sezv3wSpNyu18eowdo",
  "key5": "3p1fjT5zARgNrr4et2cmKS7cgojHUpGUFUajxGEf3ZjrhbLMxYRsQAhBVirn7R7mJz1denpk2KmHZgLMAhgbtFtB",
  "key6": "4DBtj92TDKv5XCz3r9ErMNF2aQCbXPPzMADXnLGzjAeuvXPMkBavvcNr8z7QfhqCefwAesVRiC9ZDQGm8w9Bmokg",
  "key7": "5fgTpzu4YyqVt3U1ht5tSuLd2Y3MZiaUSDE6R99655xDAWwps5CfYbS3wbA8toDT17B7Yk7sxuGsDBkMFRsEF4zD",
  "key8": "JoojSMVKPAcfqRKnecEQeVud7pjTuAKUEZdNSdcKiN2AVfRcRzAWr4C11fpf6RoM5YMG9eYU7B1rTrqbekfuXZF",
  "key9": "4KCfHbgg2wGaRe6qNu6XtrJqu7wpFTkhK97H1UiKrYEs6XRHzuhfYxpenLJPV3XBb6cA5HYrtRwcLJzDqqa1SYr8",
  "key10": "kmcAVQgorLaQM4R3Fnn7iPENVJ4e4A3zXoUH9YVp4Re7T1SA9SRzZf8FdyGZhQ9y93EwPjfXazUwu8yNkejsPhp",
  "key11": "3iGseKSG2P9sM18tmnz94hxXHz7DR6keEgHx5u8U5Xj7AJQZT7Mb5t113ZvQQSnW38c6uymgPqa1Y7hEUk14rs6S",
  "key12": "5NoLSmirjgyR6JANJuFr6Sn7ggoLbMquy6y3ZDzoUsHgHZeLDXJVFsd35iKVbU26uMxv3QHUeo2GLotsZyU9cLNF",
  "key13": "41tAyEJ1UV7ihmoF6mE7bzqHHvVScJfmXXBKEeN3oCbGXaAQxT1L6MSwiqMgUM6ConswSk6sjcVjjuefHM7TZXLR",
  "key14": "2wMonUP23FVUcLnr5xmPM9PsXsT2K86mLCPivGVvYMs4QCSFysUcPt13dq3tjt86q8wrCKnfjWiG9UAbv4EFGLps",
  "key15": "xsCsf5NTmSZTJygbM3s3VdT1p2hkSSeBpAt4gwosCPC3HE7u7evBSrVRo35R6fgg7ziJJD8dGwQeHEhzZjoK7Tx",
  "key16": "5tBsQMGhbLJmLqc6iUsHL92eaxJUCC3LKEGAB3mqDbMrdFkJw7n5ii99jfQwAnWLtqRba52jpQkgygq3cEq3ihC3",
  "key17": "5MX9qJryLhB7qmva5r3Dj3V645pwQq3C79BsQW7xDt54BGSs8WomhuFJ5kf6kZeoJgmsaYhBz1ySfQ1DLU6VN4bk",
  "key18": "593niYKtaqVLGCw6iw2CPzfx8bhaaMcr51VwHQnqt1tHKB6GBn8EUryzDPMtScJTfXowFey4mUC2DGNuKjj7v4ZK",
  "key19": "2qgUoLQfr43cHSe6btdvkjAuHD6MjBKupaPAovi9igFfRMiwrFncQn4DMDfWhGPLmvk3BtPwAF41un7TbAk1iVS6",
  "key20": "4S7XXj6rDkXyG6QLNPfFV7KPWQ4vtAQdzP3xQucfcs2z8TnZiTFoWkx335z9LAf6uyVWTXmSmg8YP8eGmpvpAuYb",
  "key21": "5Gc71KZbwRTr7i7grCKzd3ARHrWttqocrhGoCgpnNRRHP8SeGMQ1TLvsr4vi3wA5sKqL23hhAh3VQwsHNmX6QDV",
  "key22": "3RoW7bUtFy9fKQNn7PkHginCi7QkaHewmMtkFJYGiZLQRdw9MH59xYFwWhJLFBgYWkqvunwM4SdYaXvp1z2H2NX9",
  "key23": "2aUGn9Mp5zjLUrPQRxFBbEyEENE6C2gQpp997SbnD8NnQaxK9jwfewA5SFzw59TxULA9qmDurhXeqnvdPd9DfmKt",
  "key24": "3gYzMjpyTrUbMfLdTQGjC71JitL76H1H4t8Q1kfyE8vPvnmUJEiYu799nRbmK1Y7G3U652UzGAfW6pHdkFbdyjXC"
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
