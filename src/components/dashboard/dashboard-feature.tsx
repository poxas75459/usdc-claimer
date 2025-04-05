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
    "2GcdrgvW5wuMf11gT3JuwwERuR5BvUaiQKYbQ6M1tAhcRvHfBhCmuP2YDJCnrAjQqnU4nx1xRs86CpUPzzi6BJZd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Kd72kBKudP12XWSi8msaebgcRZi6a1aryREeXfYemvMunwP1kQqVKHJwQezo6ZTonTKJ9jLtoW8cEkEQhUQuGGE",
  "key1": "4juVfZfshsH6mGyNYC16dqgpoK8yoswjmefUz4uQD68m8vnkKGX1aJ1xt5zTqENtxUWpRgbkuh58FuF77HYBhAi9",
  "key2": "YDyjDGug4qByPgPq3Mh1LM2dT3sjVkiiFRgbH6WZLcGFXxVpeknWpuGcPppWg3kgZGJQcEDb6G4C27jScymfnis",
  "key3": "nWAc1Pruke1mhwvb6dR3rybkffTiPT7pNaKpTZQb5uJyvq2ybVvpDUV8uG75cTjDwHYjpnE4cRQDC9D1nzNCM1E",
  "key4": "47zA7t1gCMHJmqa1DiQGNbXjVFVS5cmvRc2V3dwLWBUnKfrSY8vAPMZLzNcE97pCLrTAEoG3woCYaVF2ipy8mcnb",
  "key5": "66cbyC77QXNjXi3D2HaAJGn3QFuJ1iW46qLwcx6z4C9AET7uG8eJCP4kNyqmsMsygZiRodergg7FEjdTvhXghUvq",
  "key6": "2DeHYZq3nXJqgp16aAPfqGHqwUXimQoRNXKFysiygaw776VxLfnhRmAX17Zu6AYtM1CqRboFBwLt1MDtfEWULtu2",
  "key7": "3a9VtTgJvprHn1V8UqAkCR99RNwtY9xhejFY2ryp3J74Bq65snKs5Pcx9cSDJQPx8ud71wQZxF9Xg1BWN4Q12SNm",
  "key8": "5gjmaDa7AoDcb5ion8KKrUStxqCJqJFGhVYByeUw1tXDQKXfXDCb69r9qZLeoyv5wk4NJu41HVpViU6i8vUujivo",
  "key9": "5vQgHhTQL8nazh6jva1ekAz8p2PY5FazMiQvSxEpQ7CS9HWiUXyRkrrmUB66mQMdSK3BrGjXyivVrHsSBsgc927g",
  "key10": "2jrhSFnZP2hhb2GQXCDKutHTWdxZKZYkdFgN3VK9DAniftKi9uGjNq3f69d8znLmgvBwXQR3FX1TCz6DUD5s3dD4",
  "key11": "4Y2zwEyJ4GCL2HkWeDTJa27f8rCWBnh2p3uJjyiT8fBjh1FFYqtYdGcqbz1ksbAaJAUpg334Ss5dr9yeFz7QdhCN",
  "key12": "e5uo5PcsEfpucheh1C3xjqTJBJRGypEU3U8JtfLx6kTc2dcjBxJayiB5yABrzk5wHBB8ZqmFTRvmYuhLBuhAFe3",
  "key13": "5Eh5xcMdPPm1e1Y4QiH8TzeqGqy3JhJ1TUr2whQ7CeMeLkgajW2VJNw8ZGdhe2TfDVPistwtYvsquLgVbPwXnTR",
  "key14": "mGhiReVCxEXNBKsYaNaSBLKxZHLTNPfidvq4YjanJ8UQGgg64mXjp5xTurvKFuPJJPJM8Qd1fiCS156FwU2XMHk",
  "key15": "352XeprmpAgYKYE9ef3nLoEKPL1L3tAJQSNSLSDVq4woXRV5XVzmoNhpEuUFMfJvgJmP8snDD75w4bhvFBnLL791",
  "key16": "vuh3m6R4AV54qXQfFV5zKHQeXywvZcnsFZ8gJnkTH2qdXLLiM85KmdogDJY3g4mhvAkUVnAnDzh69sNJdUP6eoe",
  "key17": "4mncnqBL6v9fon1PG9Y4DXaFMNEAifm6fr84aGYsDXrZ95mFCHkBhmsdY7qR2LrDsVQLtto2pr3zw99HUwt1QePb",
  "key18": "5te4TZorHeXw9YJ4hftYZXLauHQMQ685YgiCoLYe8fLaHaat7LDpRyu57jS2D4P1WazteREV3AhaQMX2hU2mi472",
  "key19": "tYA5fSoDUnDJwZ5G4rpKXRNUHZntyU764Uk9UPw543xmCFL2YMt2D8L4Mi4xA5b9x8efbuuDAjkvz7JixrxsaM9",
  "key20": "Mjt6WUDN5155J3dDNfJoxiiA8PWNEfDaMZgiWYa4tcj3WRfMYr69phEFf6pFyw2CeksgtpqXgtAR6Cod9ohpPYG",
  "key21": "4Xn4SMzhVrSmkiZW9k933XptLJdQrxwhGF8WfaAT2iZhk2kBFDgBr7jyf8fK9fCQAzxTEQhNXGnLExCc9BTfV6hp",
  "key22": "3teRz4skBA1NuZ2L9r7az3QdsU8ukTia6nTHdbgadYX1KDATjB1m2oAnGYpTmFGQZvQEfMBa4xUYkTpnAZrCiAfT",
  "key23": "3gNJugeS4AUgYUBFQnARpUeT6bdMRCLYyFb8G1EMJV7owPM2kDaS5L14j7ovbtRDnLUWJxhBM46tch4F7sBV5dET",
  "key24": "65nCqZ1RzS7qHmbeRM6difPy15yBzbMpiijX3Ex1qnGG6V3pmX68GYtKDNHMqmVdXqN7X7pp2UpMwsH2pi6rxn9a",
  "key25": "5ASX6nnEPnjTkG6tBW2viwBXYR2NpFuWfK8qd3Gura7BJCo9k5Q6W6cdNSEpcjsdVBpvMawRCf78PoJ6Kff11xMH",
  "key26": "4B9kVgDftBRqdT7KAthG47wonoSeHUZu7b74xgUCxx8gVnftZKPw9s1J8FrvfWo5tmqyLPpW3EDBhVPvtoCXAeM9",
  "key27": "4DCLTmvNnG2ZGMWTD9n5YMBosYYxmoKCscWS3643Lgs3cse8D5Y3bqT9TrphZvXaV9qYkpo2FANUjEjsU6nSdXNk",
  "key28": "5mA3WmogPw4ciwk54rPryRu4uhyUwaKrBusPTEYYhZSgRxZaTHntheTaEhHr4XCDomzGsWSaPADjAhEYnhvLegcr"
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
