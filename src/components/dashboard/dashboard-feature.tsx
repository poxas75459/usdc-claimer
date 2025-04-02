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
    "Eyhv2kf6Y2JGYvxu5hZRQH72zdbq2TVq4Va3KenUD2XDDiiRodUsBZfCx23ehR9Sg42VJUhss7z8LwJJYtmDJCZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jw6U44LRQjRbfDv7W39ihqrFP9jVQSbRUTxxBFHfCK7fd8mhLdMn3qZRmJ5r5feXfABYddnRUH3KnXxRBC7e9AE",
  "key1": "2pRYPe39AgVdZPcUi9Rhtkv9C94YAUkg9QKCXgMKmaiuFY9cGNdE9LGAdX2Fposxd1WK2qDN8pf1XYEWRGzacaAN",
  "key2": "9JKyENiVxqv32okLJUSYTMtaxtbPpUvwVQt9jBg2uzrwsg3rxaXCuCm37v4joH4TehcsavBgB5bXQqNCwLAtH4D",
  "key3": "2BAJnKZNdVK8TTnh1aS34S11tw8tyQEBdEwtASiJxwJUWFBQZWCqLR9RKnk11qfhFFib1XszNGy4g6zRSrELs36C",
  "key4": "5S1tQCo7Mhj5n4MotkkhkVV483C8jcHcZFNgQedA9TuNKF1fViGnqHEe8gphmwZSDicPUXoZDxDTQtSrDkWwzjvS",
  "key5": "53DUCaTzgPtLaeKbxu2ZumQENDS4c1taE1wfmESKedepVTpd2aT6gxhnjWLwXJUZdYapLndudAXFMr95C3bjcnDi",
  "key6": "Z71kQrDwcdZCeZ25YHmEMWBwJFua4NpuaDoHMzK6s1LgshjG8mriPpVfSrqMS8HxLqpkTTzVPmSA8VfRWx698dT",
  "key7": "CKNPsCfo6deWBWXKEcbm9nXtntJcQwduvp6yJCdPA4nVikkPx2MH2Yh16c3GrZzBaJNSoHi2w7wJ8pvPamxLER6",
  "key8": "5h1SABnmqA5n5akS18ZsXYTRJaovMQ3fKvGc1GGGXcfLx353ZTExooYDU6NYv16QgUwoUuhd3jBPS4NvW8BfDrfg",
  "key9": "3yqof5YYAZaimv6gGhZXeM3iGoSa8iN1KGFuqF7jJPnzpTZmhifSsQNVtY7xbitawrLkhA4tTdLUgfkSjfBjWFJY",
  "key10": "39q8dMZADJGbj2goy4yqop9BiUWCmFH174ZrRUW7iZR6721kKCWiJiXvLRTgc9oRK725fPsHQNn82nA5CJ1Eohmo",
  "key11": "5yXhomvZHycABMNSLt8d9kyK6cg7hSN5ao8PsiwC923iT7UaydRgHgkE955YvMs1xEubxEFp9BL9MXNtfc7qBmA6",
  "key12": "eGeDgQAue2Mx72KQNsxnAaXdFM3mcTJHmhotNY7eQ1dY5SNpDPDQxu3uYRniSQfCEVUxcefGxrstKgy65WLhKND",
  "key13": "3QbyGuvJoGKbc6f3efR2eyWShTcGu8iYsWyKvZttDkjEU3rqQASdYJnJwdhwdTmgxzxJTHtvmV2SaBrk4Vog1U5L",
  "key14": "3WaA2DLK6ArGve1QV8a5Ansn4HQJSqoxR2eBzvN12XFGSmWpCiDhkxnrFRfpPSLfJRLF6kqRchpEiM3btJZhWmBs",
  "key15": "2A8y6w7uxS5gSxNNiFnjgUKMQdpy13XmY19awQvP1wNUJ5yygmyxaRfX3wGqtzacneFsK6JHkrj6dDMYWhmdqZxF",
  "key16": "5KPhUJ7Z7bC7CMM3yxpWvUcMp1gMgrjhK57LVacCoGSKv8mnejBKhsRSyFSXa6LtugbWJX4qU61EYag423VGtEAV",
  "key17": "2nEdWH456wWRsoXvYi2D6ieQcyP16RkHG9636ui82ud6a3hxS2rKRrVb5eSsZyR9S7xbR3QyecGSLx4Qur159mFr",
  "key18": "4Z1K2GL7NVmVEEWjeWzb7U1K5C4igRhDqxc1CcgzP2vaaLr4egkCMLNbGsU3xtY7KHRJWdJQvaRNdhXqE4KheT8M",
  "key19": "gWvAUiB6UKGSR5rGWkWBCkDbcgYAaWwjEufkxYFp4kBEaQwVxi3WjcXLCay5DUnNsNQ91xjfBUPE3amUWrwkFkN",
  "key20": "3a9eC88p2iNzD1cEfRJS7juhow2bbBYswY7zY16hJGzSm2Xowia5hJJzQ2RrgyidjJNMJtphLt7YVznWT9qM4Yj8",
  "key21": "3v4GASB9jT7qZGvfRdDtmR9T8HnEvx6CKsBbfLombUtFRCkrwbFki5PRkbuNM4m5dHNzjLXmoCwyzZUmwwoifTCe",
  "key22": "43e7Vzm92xA2MdfRyssnf5FACCwnJJ6K3QMPPg5pb4A2SjG4qwAANbnUmD3EhFApdeTXAwwdvq4VtjdR64yda86h",
  "key23": "3gEFrd8V5o2WZDbWniqTEiJY4WCcgvWSChnkVsh8edGNYfWeMP1QxmyonCMJr88NpJ4tniUmhvhx9hR7Ds7q9Rzt",
  "key24": "VAg5ZbxDmegDzNDU6TFmzLDcZ9uQAe5yr6TyGekHiLKuus2LAjoKc1xyZmn6Avyry77W295nMvjz8sLFR32LJGx"
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
