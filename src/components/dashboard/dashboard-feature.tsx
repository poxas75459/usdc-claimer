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
    "4AP2LLLQvgpePWnHaiVgJd2o7vdTD1AKY2egYkuxCNZP3hiHRExtDvEMTfQvQ5UnWjRBuQqsZCvWh6UMs4FbBsfe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wSXBft5AVrDi8dt5fJikEsCj31XnjQy7c5X5xMfNkf9jQr4haBE7WyQeyc7HmMhL96PzktnX8GnxphMmd74tdjD",
  "key1": "5wtHBWkkNV4nC4GKZqRMv1A8YFyrS4uHx1d3dGXEmuQhUaxqdnzVT6KKeq3mSTpu663h5cHcHxGYrxBc56h2jDD8",
  "key2": "267KNksa2ehqeYBAogNCEFxJqgizAt92URM4TBXoGvvBXxtMjwPgbV3Ed5Yv8ig7v2G3nzhzYrRarzx8f3Wcib5A",
  "key3": "5PCbknmiHmExMeJZwvkifdaFUypksDjM5CD4HZZcfWWLm9gSQzW4LeKKeY7kyBApMRsWvR21W6F5z5cw7Z3Qz4PE",
  "key4": "4e5wEEnHBp7GNooxr8JuCHWZwEGPaDjWp2wChKNAHnrHv72cTqB4VKGNEuVY5Cidvy9uQZWPsw3AZdfccKUZMCxH",
  "key5": "3dhpauFtj2HrW2ebQPvDq5PJkyzdWTAXjopUYVRtLBhvRrNStdYqkAQXrnvqSLrGFZRsxoVWqFjvCf9mk29CAagE",
  "key6": "3j6ddF3McgTxBhFBpMAidxfLUmVcdh4vJLmCo1sXCWX9T3MjmKxoUuHeJK174mvDHnrJRLsiz9HruJ46LKZsFmqm",
  "key7": "26LJ2HHnqsNyGHSCxwtFTi8FxvpFbXEKCBxhJNwnukxj4zHRYSL2zBDui3L2gHSs4kqjkKqZ4Rbf6sgrSFR4fwmB",
  "key8": "4n25k1eLHJneiJS5NgcR33oqsSQg4WoT7Vq4i3FMjLxUt6gaQaZ3pF93H3gG4gHCHuRA9W7LJMCPVikPozgheGjY",
  "key9": "3DeUkEsrS9BvYKPrb1CwpK4pbjgKWaqB2aLy1JhR6ypxLnzkCAbTXWSBk65yF3Xt34Hb4Mtftsig9u9Ytaqv7ca",
  "key10": "5ZpzVzNyff9bcLGXHRAwR4H9zT7q3Fb3rdDMbVqMrKxWEGLD9TbyYsR5yBwGSY22TaU7dhpxUXVHF7p6mmHfN7Eg",
  "key11": "5njekRougF5maSbG7JttCBjMKbHiRxrscdGMk1TratCXB123SnCTF9sy4MNVXHZGiBSR9RUs5xGQL5ps2baYL88A",
  "key12": "2X5duYjFgSaYtjPSYonqLbj6tbAHXi3psaGVDAhzLuZ1mC12Y1TaD6m53QVzYTxuRRufa9uWHhquMzTVGWJeXGdd",
  "key13": "3FMyijxkSxSMrRPXUtAZaTBfcxM7q7nAdaL4b2ZZCTRxneZfAaHcEW9EBvZFJ5aHNPScwFAxwbYtkqybemY4WqBc",
  "key14": "FzcomE7FbA7QAVoBrJxFJZGYaUok1HM3ajB29ntQ9KhnpH3Fw2xKVL41hkUk5J8ssSxFd6PkAFh6yZNdy1C46Pk",
  "key15": "3gkpLVER31jsVqqUaAcgRn19PXeiQPq9Wq7fy85WzsRj8VNiL86rZJKRUxuKsasVcLFk7fbtmWYND6gMouS9Tg31",
  "key16": "xxW6XuYsVdseeYDJW63gLbaJvyNUk9EcCJEbdVgVZGH6SRsusBA7cCyyVxpARyxjTMGKnibxF2DboD8eK4BG8fz",
  "key17": "5ogkVDCBtibqcs5TRntV1YhgRKgRvM9dNfuBX2wTwA8X9yvqetjJuEgvv9Hwzac768YoVW67otZwjNnJXjh8isUj",
  "key18": "5v3tQVedXZfeJJN3ZRu3nAHDh7YoySfCbfia1juShmwCbMEhtoxaCj4Kim2BKrFwgbt2HkvX4mDaZ1JgeQtuzLBu",
  "key19": "3PPdXffdkYAXHKnrNWD5o8ZaXQhNEwkxXsqkxsoHAvEXpjnvppCs5sgenkfjWo5MGiJZdJC4LeU5SRWAYVKLazA6",
  "key20": "2Z7pZXKLqQzbSYc9daoSrcpgjVJrJL1cUSnPBrgm8Fm4N16o1mzdNggqsS49qnnH5CmvQ4JgVVdwTatXH2YrWS73",
  "key21": "8vAo2JW2rywGLLqvfJE7crVjpntTKdVfg1VrhdyfKD986DrrNFW1G64xzrC8LpnMh7ovvp6qrNHfV4b3kN4DfH7",
  "key22": "3QrEttNDF4VxNn5s3pvZBRdLvcsizyo9Pu8jcA3Hprctm8Rb3YatojMn1yLkWisTgJGuEuhWV7Wu2TZ4XQ3Lj5o9",
  "key23": "4VqZ9Nh4M6tsdodBStP7gCmyyDCt1AsoskkKhdS5NNf1XheF9FnBcrQVoJfJUXAhqzmqkrSgAVKshEW7f1BjaTY7",
  "key24": "2ovmjfXmnxgNe9KUU415kZTH3s42PA5PT2cqVTfcJfbRFctqiZ5JKcrAbEcAh6T8cyU6ow48gVLNf3aEmmSUX55j"
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
