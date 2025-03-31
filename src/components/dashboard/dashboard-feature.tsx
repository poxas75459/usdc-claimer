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
    "5MAtmMysug2KBWnmmmgirpxTN4qKd8UvHUnXDLFuBPnxsg2r1EYe3QB1MBmDQATG3JJKzEYh3Gfc982UXLZ3mnoy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RWFQH47CNZ48jXtasXi9tcmqanrzQWtdxUwNxoVpsHr9sh25CUrZ3bwL8e1HsJrXvkdGxPM3oPvHPmymvEnMAxu",
  "key1": "2hJnwBXBc8cNReoYDLhMUZb9AUUN9BfU3xPgZTZ4opppRx6XuaxyQGvxJJXPQqdCiJk3rw9XzdFC3ZTYJB4nuzUV",
  "key2": "iFZzgpAdo67buYXf7cnZBFdiwKbH8bUbAueFezxBfvPSo6su42nGuZwH6xYn4LUeFujxXZCmQL95uQsL1tUyXqr",
  "key3": "3NawJ4Dy3nNhUAk5SzWst8sZZMdp7kM9fRJAvSkRYQaRmHquA7EKCtEnbgq7XsJY4aPpAwm8nGtaJ2ppwTxahfQE",
  "key4": "E1V4K5ouw3RZXSjjBJApR9S4tZGneon6cfezS7ktAKZPLsLfBoxupjqUw1hU2uBNEvTv8ZjeCYdXKJHe2KbzVeK",
  "key5": "5nWfxeoKSjbTr7LqHqQJK1x1uN7zkYd8NHzyPaFDPp59kYLf2gs3tHyXSr81mJeQueoBwatLrYDoAJvgrsbniuB",
  "key6": "7z4zKka2ZD2uqoW3XeYi9fJjspDNmKq1ozeswPQ5PQcMnHw5Q5LeoLNPs3EenBHfxCF8TBLdh5fpTxcQRupLBTb",
  "key7": "5ZrtSDgcTUpgfwuBFaSqUoyt51oY9Zz2mLX56Ay2VNMkN5qSmZYMCpQSm47iDs6MxMpysAnjuL5rk5ev5XFnb8Bk",
  "key8": "2QoZ1FMvrMv7zhNgKNBd4wBvnNfkrqdLf7CouviW92bAWUD4gogXer4GjKxFyoDmd2doe5KYat1s4ivZnzW2YQws",
  "key9": "3Z89hA8GdZfD2WhtTe9FRR9gfE7T1i7t4jMEYrpEH5wtTYH9w1ndfa8prAdnx6jiLDRVv7pjDdhdxXXGH7tAKySq",
  "key10": "4NXkGvzvkZwFHj3qfNpD6Hke5JXgpW2L74Epw7dyyjgSTheKBA9PedZnQYzFU46GGMcFtrfRwaANC8X2mxMSiXud",
  "key11": "4DqRjRYejtjmKBatwsXwgM1jhnRzWj2FpMDDT5azitsK6ZQVMtZFMw77iKN8SSFLZKETviq2jSTZnJ89c9v3MyhF",
  "key12": "4q3JUkH6YTmyd2bzhzJByNYZjc4LqBEJd8rnFK9ohdUxhWTh1Tzj4tAjvxx8YpF8Be9sB84MQhqt2btW5nmurRwa",
  "key13": "2DUiKYDS9DZyZPkmsvLrEkNieikegzAgJiAMsTEx1cy7ygDRPhm82mAHDrmqXtxf46TqzyRLHxSSSLSkFgckRWs6",
  "key14": "4mkCXg3sGpfLEMw1f6mRa21WX1PFqut2SByPTdtqbRzKXRTQ5jmH12BDwZC3Xto6ekaei6AwqBgXM5avjxudE6eW",
  "key15": "7RHv87uni1akS4NsgQ3xcGBDYc6zi6EQkWwZr9iofaaZoHPRGNDhaDBx4Q1LrVVQ8VezMRBhTCaC8krwMKvrLfB",
  "key16": "2p24z63WdfMfvF6f84LEV1PY8hBmAZLXAwXjZnbnRhZwHVRuFgSeLm8ayWRvaJqkFZc9JZHjbSDwC4Wuf1fc2cSd",
  "key17": "5ZcTkjva31ZcnoHvwFWANH8bVb7ChWJq54PuNZzegaby6P3jL98gCBpb5Z4t3LgekGNJqua3C9oSRCTtaHGtGs6J",
  "key18": "4GhKLMBMMAaBgouc2zvVbv4JtuZy9p8HBPuhWbWBPtj8iiQv9pB7xTPcxBvss4cnX9rz4mBRAAmpoq7K8UiW5NAm",
  "key19": "5nwFrEQJixn6HKfcHAegPZDaBGmYjowAnWpPQ7WFNVxBawCyhGQVhq9iwhjm3pzHACHMFtKTD6DXgG1ToWT17QJz",
  "key20": "5DsXrLnsr8EihAYsLTEAjXr6VnrHqtSxqGZnn7BTnTd3H6syH6cNXkHycJonwmkN2fsaJWbnBPs66dTxUAmUoFkY",
  "key21": "2R5Z9pLxkCQsemjCnAmbbK9ag7oWvRcmN14fs45a717McTYP5QE1XyzwQBQXXf8TKP4neVnY2wAbqwsQNGuEkXYV",
  "key22": "3PyBFHNYsuszd1MxGDbKwNai4uL2i9okqNP6z7RiPgCSE2t5McxfhbrGyQG8JxonRJQYnGpk54U3e5azDkkPQFBD",
  "key23": "3JtwATEAoRDKyF8sHVAM9s7UmyvZ5awbqhLdVZcbH9KiPxQ3gczYBEGdrNYjdnqApapkpqYUZhH5gJxjUXDyLzrQ",
  "key24": "3V5BjKnLaDDNnArZPWXWxwnVP2Ep22Qza6J1XJeMAFWtvufGmBhjbEk34jPiN4yqQtPsQCQJkQ3yuESFRb9rxLnM"
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
