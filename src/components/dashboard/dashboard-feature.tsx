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
    "4wT8N5s1SrBWCY29EsCiRWAY7isLC3fL9EhfU83We9PVDWSXJGoopApiymGN6K744wTpsQASNWncJzBH36GQgMss"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pDv8yMEpFjLMFrEb7n6ZtPeKRUAozMHnQYci5w9vhRBNXg8GSvo21H69rFj1orgdbxgbXQofj6ZqHgBdFHtdrbs",
  "key1": "Tmy1fe1edLvz4GxR3PDkqQ9LLsFYWxrzA2prWCunxW2Ly2mBT4NomJepc3y2ZTSR75WLL4womu47rtFYvShfpC3",
  "key2": "zCRGJyc7xyRwRZBNYqL68xKvHZXjfABuZwDWtRkHJ9rz93rfTAxfWcvVjjNRuAE5WtSfFGGHNj6bZ9Tw9bEhSnq",
  "key3": "3KKybdugdLYYHkpPTLMDvWFhUKNhdG6akBdePfGHZDJudQtGGs7ipnFBHNwSpnB5K1XY2vMNtYLx6Sj9HuuvbiXr",
  "key4": "5VmnRqdBMpj9Uv4ywRQA3QPAFFhPRuTcNpVrcgMzpN6SRieFe3YfTCyw5NeR7j3oS1XN16nTjT54y4aNvA9MywnQ",
  "key5": "XfR4Qa41iYrmXJrrud5XRtvuZrwEFPEZAL62nykTrAusn832Lhn8Kh5bg9hdYkwJpvUTuGVQ3jNAvMmrwtJwFTv",
  "key6": "Cd85TEHVoPpB3BUESkBDwPNVjmtowwSjsDUH6W7rmShCzEQ64nkB7jZSRAnUzSWjao78NhQv3wctCvZY24HC4PL",
  "key7": "3CULkXAxmMXtBwrpeSKtTWphnKCXNCRN2Nj7Pex4w8sx56KUPNvvnKD2nEgRSwKq7hrjvqb4z2fSWogH7tTMmxgU",
  "key8": "58Y4EhQ6avsVVTLQSe4JDBkE6HYZ7KAAm1Ywwbtom7AJqiQu4PfTrcmfJt6HZJaDAJ1YVP9QxsY9pEZWSrF3cWKX",
  "key9": "5v5bJtsf9p3Dz3Nq7s4DjDKEpCe3XJWSu5gcxBQdb3wW3mCiWFxkTvAPRfuiNPTZiRkkXVTXWzPap9XLEVuZ1Ltk",
  "key10": "3AnUwoD6qfM4Sn9E4vbDGL2pUPQTN85ur222WHXSxd23dqtVstS65mCjoRfznHiaiE8TUJPNRXcNmomXL2bjZxtC",
  "key11": "u6TNRj8YyHq3RJofPAbLv6wUcKsELXEHJvRfaN5F1eaKAqUHKFnxoyE432zxTNMEg3h7WVaoovfpZq6d46nXWSn",
  "key12": "2AxpbA1aP5pgyodHakjwJR7KtYxQnuuwp1LF67D4zenvM3p5DRcwzqKqwBM2juWp8Z1qQYc2usy1oWT8tRNySiE3",
  "key13": "32xV4PEVsUZDySX4LedLwwVTaobGHpabTuWiwzye1i3jejGKe2TbRv6QoynFUterzBenCjdEWEfkF8uHw6PD8R45",
  "key14": "5jwLBcLFmuyU4qiiQR1DpWVntYpGX3pMK99BefpLULL3QeNfQMTfqoe5PRg476uxBuc1UuZH36ZFGN5oyneytXgR",
  "key15": "jXYYZtc2xXWSSTUyvL1g5ZKt3eEmdWRnba3kyK4gBKuQSucWSzT7F2zhvGr146T8yjfpP7NGhaALGhDiTjf8ynB",
  "key16": "5u6FxrRYTCQzssbV4VJeW6bmk9EjNfFwNHf4vjTJVLPvCRC2kjBmq2Hr5bLsVyYj8zLGa7fkmHFqbYZ6oY2DgBLt",
  "key17": "3HivDaQvQdbDftQ2T8wi4WWeSiXXBsoTHuHcdJzPvTwMMGYpzmGqENDe8QYQMERmQaa1PN35g86Cz7WDjAD5cN6",
  "key18": "27tSycJexYzFzvbnmuagDT8xc7hw7LfEmeU9j1u8Nzk64wTXeC79gSiQPZ8EqVxpubaUd5GUZmshfXwehvMoV8vv",
  "key19": "3Fw9M5QdPGJGu6sYGQrccD8A6uhMJhDE67RpzKa9dHF7cX5BkNVRzJ9FSb1miiDcJC9jZKdskUgXxe88Zqymm4uT",
  "key20": "4zLVtzkrx1xhebPeVKKquRQe2jFmo2pJcUX9MzRYTdK9EXTmj3W1GAwNYwEoJgXnMLABMgUE5PQFMUGJcPR2gG4z",
  "key21": "4R6daha6vsXaaL45fPAhQTf72Er6LCJUKYyQtxXYysdEXrPqXjPpvrVN35iYKKh75oJDX9hojCcK9AZLQmiUqWXu",
  "key22": "2sUrBcfaifVEuxxEHrmKKKbREnLcB4wcKs7hpwA4DPUAxRbE95TjnUmVqpvh5vpDXGyiG1cY9URiMYxWWyVSc5Sg",
  "key23": "J2Mt1sMTjfVq4sM75ujsgdev87ei3ZTDm1r5LfGt1Lkan2uNyCKoYbgEi3H85pBz3NwPtLNyonn3iEgn36wam2U",
  "key24": "2LZgDRLPVmosunq3AJV5SG8EBn4FDUqyuhiZWPWZAnNpmymEAxMBTQibdd4ft4CXsNZkuuVVqGVdRKm2Pww7rAv3",
  "key25": "5T5YWBRuiU1yUs1QkTT1Zj4TA567DEticdev9SiJ3Fz2SRxf7D2w4zoj7T1QyhJa36L4yUHtQXtkTkns68QV1VAQ",
  "key26": "49MM15cPTG6i7LzoP1UDLEjvczzEU3XgLzHxBp9TMWxadt3mhNWVPK8MnbznGoJtLpbwWiD3PfSqU4NSCFafLFvo"
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
