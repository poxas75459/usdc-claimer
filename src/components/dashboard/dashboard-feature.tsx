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
    "5ERQx28JhA5k5UYgXYZCJU3dYm925VX5Y3iJzCz9xpucS6VxiBNsetW8LjaRjrDvsazLt2ckbPfCZA44B8ivjHYi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eb3fwP9cHjqkiEsLVwxPCvuNnPsMeKTw7qmMy1afV2XcoZENzeM5JGh5ZmKSTgPnxfgSUTh11f6Mv991wztqyGg",
  "key1": "3EXaB9MNJvipfVcchTtKYqDivPcw9YB9z1htt7DhjJQkougzE7xVoSmr2TmRaTPyMX5cWW47gBtJ92R2zvSou9wu",
  "key2": "2b6h9S2DfDDD658cTmdxB2p2uNbrHskisJiREvvPGc6xfjwfT1HWUbhbDXQaYbo6jUqnNBnSLMH3wtPpKfKj5Y3b",
  "key3": "4mgTcA8a525yjVMnMgddmhz2beVhjymHBAvL9GRXYhF1BJxoGPwsd5mtUkLVBbfdQRsqRQafvbvo4du3Dhn5zYpM",
  "key4": "5Zdsnohd86xvxugzP89bSvcKNseiJqqJBp1dbEicXgsw77xUHfAWq1dHghByhWGxVhhSYxfRsWCG1bBsc166Kaex",
  "key5": "32em3DjGyy9oGEShQP5bi7bLBwJ847rq7MRUHsHvZoxkrL8MHAEbLHTD5RfVznqNDh8oCsywrd7PEUQoN6seyNuJ",
  "key6": "34yHNqqD6UwpAdN5zNmppMcZV4x5PXeXZW3DMYgTtBmbnxEA5QALJ59kKmC1qGCkCJcM1M1rtP4uufoT742LxrgV",
  "key7": "u1dh9vaDfMnVdAGBY1ek57g6tyCpuyTA22ksG58WSFxct9Swe25msHLeqkbfahkor64FhTRf5wrmpHwHAVZmBF3",
  "key8": "5ZURzkSBvopKcNT9JcsViWRfRJhzbyiqvyCP2iKMHx6pCtdu9jew5YGYPJCnXwH1kyYD3G629rMrSAKcbJp1jJKn",
  "key9": "3KM25JHaUCVsXeTMMgdGxj2Z32tYYZe8BTaBJ74XdJLpt2ffVpx3X1dL1xunmb16raAyYKs2Xv5Kb7MRSr1WKAyT",
  "key10": "3usNhVvaB8FSqQsG5EDJMxQXzx3fFWa77vJ8htm15tezR9UM8VZ2qsvSoENXjfd8KHhbL8XZDVRvez5eE4UmAmyS",
  "key11": "2TuMeVVyz3pP4BTjKfkr4JHegyfFGcERitGZ8T9MdfSDizfRNyBnLomDKbd8UK9kR7bJ15jaNjUJBxm2jbGREPL1",
  "key12": "NRo8AwndkfJdCp7CZs3cfgp2nDSDgAAFXEugqXyGbgqq6STWQ96HWGsE1GqmPjkfu82ecewbPQ3hyR6RcZM5d1d",
  "key13": "3CKYv5xHsEhstaTjvm1U6A4XBYZyu4LMJXnbQ4bMTPocJtGGpFjPhmqh8gXggQMbUM1xMFiStxZdNdZuA4S74mgY",
  "key14": "317FzrfwhPNNbfMCiSuymfQkDN8B2rvjdem8GRtcbwxzHQTCtfuQGXr9YUpg1gLVeiF29VraiBxfLTm8shobQqyd",
  "key15": "2Frh2r55RdgTEfRRxEXP68ec1uDppw8ZHfBAVTx8LcS3i7dzsKJrz8uo81d5ar9Y4RuhTNttawNQoinmjVSiPPa2",
  "key16": "5AfChKVCcJ7xKYDYKMeLeBfHWYxyvb44zkLkugexcoxETQtnBCwaBR1TB9u45noqa2EuGWH6RykHHkdArDYLtJwk",
  "key17": "47mRDSRapnXinsgfEmGoP9U9gMv89DjnRqiPAwkALKyxgdsfE2VW9QCY5tn2stJBKxfzcjJzeiDWGe2YSaJ98MS8",
  "key18": "3a8L2ShyPzQrqK5hzsCZ6xaH1B1dVQV4ywc3wZ2S5F6ZLtvCfkPhaiapMnu8VkLXgNgcjXnfVCzr2qQBdXLC674d",
  "key19": "3w3egcP6oqnGS5Rwsk5B1jbJLPP9XQFhsZ4VKFSCZ1vCWWM6GmGHXHL4KnSNfmzesF18zfA1zjf6Mv7exUAEWXsR",
  "key20": "4rbpiJ1L847Spb35emxHNivnmxcTQUS3mXpQ82576jdLxmNSt1jjaafhNipzjfLY3TUom3qdAjcTcP87KcVVdDt3",
  "key21": "MJzRnKeRqrmzfj9rmZeeScuSCtQ84ZE34d9udde8gHozHZCwx4bjkAid9JEWLPG9FRMwrt1TgsCNqEftmvV5Kw3",
  "key22": "31oTpJ3UcHkmC5WPnq9aTpvFV9hSRLb5y2y9YFCP3C4Gri5HCvaqxfVtKJoYSUoD1SN9jSu2VnwE8cECKfFkty3F",
  "key23": "5vkTU3e4Kb9eGgxs8z1rWpLrVRqv7fGj1bAHeFHUrf4UFBhS9QemQX9HBprXwQEJCiVZjjMxRaUG1XZ3hfCabfBx",
  "key24": "4syNzrgjVzJiCzEHen1RrxZ9Bhp8kAJPwmYdJFez9Es1ho9KFa2SJcSiEptpw19ebdLjzB2T366myWGhXwDL9oSc",
  "key25": "65mcfSR7zwCgCqyVu1kRGTqFbcBJgVq8k5uA5iVP2ufp7RniYP685j2tw9FX13Mqn1tRQ87vyEf4RSn7qqtN5cic",
  "key26": "3srp9cqqxiNJPTymykbtFjMn1PYdXi5itBeHkZsH5vmPLFHwEVepjEuW86qMTuTe2TfSuLQiocEYi5mTnU9uopJ5",
  "key27": "4cxJCM6A1aKkjXUhebo97VyCAhL8YBE8HHpnmbRcYG5is1pABo6nYJofRjkQU6L7TDiTGeQM875AC7opRs8kKEu4",
  "key28": "2G2FJ8oM454Ng8Np4ASv8o7Lc53Y9V8hVHfNqbQKcuYGhbwyU82Ri1Rp7Ad3BVKJ7511m1R1oXjEwqkDs6EzKWA6",
  "key29": "4KvZk2kvTx2QsW9JdZm9dyTPJvtKvwMeMmsXUg9pUUCzPqKiRV3CC7dqspKd2LYcxY21Qjg4V7dXPirAq6enFUam",
  "key30": "2rP4wGVGgwUP6DscfdYuvde9ZYp77gwHZVywt7PgknCuENLeuBEEKCXreygeKZEGP4dTfsQ7fnRf2wYHpvB5Gnim",
  "key31": "2oRZCkKGFiGDUooee7iKG9jJr8rzWbbBMT8acBWePaYuagyP6bMTQB42cLDXV32sgTnedoWmzEJRH9UxeQRpSpvQ",
  "key32": "34KMDSpkzUJQ9FRj5SUwUvaZLwcU8YhtVSFSRbq5AWSWLTSdq5LScegRkzr8tBRB8X6W6vX47LfM9615i2YkQNYF",
  "key33": "43aszzsU7aSFUcW9fkFbcAkoHf7f6jUkFME9mJJsLSpyvLwnzsAnqfs9H5B9Bb3BmP256W6Qe6AdsKs5UiiqwG5d",
  "key34": "4azFwWExMy8bQzKHxe62HMgaABUwYmAeCS2E2Cv3Uw7SEmv21Hb5ZwJ5a7wkMaGxoQjKrH9JVvU3NDHoStbcWsRR",
  "key35": "5uDcmnJGSexgDY3cm8r6hVd5qQHDqccvVxEbM6gA62jvkBhF9DEeMDpzrJeFNH4fDkWiNbeMVc4tPgDDuGUvGnvG",
  "key36": "3yo9DtDHRM88pRgUGvX3oujTdbNC8DnG5Eyji8iRqbukFGbffxPpnUiwTjZDfNYeVcJY6rxN9td6e8rhJjELgf43",
  "key37": "2TXwNTsWFXJNV6sM8XXfDroSN5YyoCejMfVAZrjzDqxLpuwVJV5uzGovr1NjmRA5tTpPSKjHfzF2ZHK6g5fwesiy",
  "key38": "4pYc6e3f5oLwfYsfpownkkBaPqr69xz5WZtvGxp5XBZTfU6qsv5QLLrGDEdGsrTW12Z6DH5ghPyTXob6SBrmKj6A"
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
