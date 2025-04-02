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
    "2SkHbvREdZTYjJpg2raH84m8GSxfovCqjZfysDXMgy9ZehJkshmEiiS2EWMSXZPHzFbR952v2NktnJ2bS8pVKnnu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42P3pek9ykKmAXEnovPPuXPma8UPc4DUjsUyXmVFNMcBD8tb3Da4CguGqBuRR3m8GujdapKJsDYoP4msa3h8FVmT",
  "key1": "19tsrd9dj3MuBaC45oW4cfQq6qFwe4ttS4ZCNBfSrjRVQzyTRic8DdXyjfFMQ6kgcuhxSt2azcTq6JLf5xbU7RN",
  "key2": "2yreCy3yT7DHAMYjiFkDWP1k45QvsA7P4Z6s7EzJVYNCfCE1ygSmx7b25ubXf6TPxD5tCajJSGYxYYZsnsvFSgiu",
  "key3": "45uh4BazNEcvmgjJsGxN28YKZBz8RzzDg3aX4CCEwxDXWwMh9j8DHtbkZ6oqMsetpVR4VunkA78b8CrBV6DQ1PGV",
  "key4": "RFFbKEXxS94uWQFdPzs4LESYdDMTSxHb1xwfxo25QsZDLQJdtUfRTu8yHu68oyodLipWeNi6aSzHR5wYmPLfnYo",
  "key5": "vRs9uxbwusHZL48qvo6J96cuLepG6rK7hPn3LZsNAWuiDE7tXJ7wRppfGcFZv3aFCmNJPYcyXahXkxLvQZHMKRf",
  "key6": "2A1xLnct1oTGTpZWRxhcUn2FuCfJuBe3V2fTRkQncyKNqkr8ynvprPGeRCcMxMDVEfK1i4vTZgmJvBBo8jSunJqA",
  "key7": "535ECfLwKQnvLmv9huRxMq6fFboMSmjN21hrnmC9SmVHQq1WsokhnPNeZFW4pR3EzzTbZe8FsQxCRjeEmryKrZKu",
  "key8": "vb8rqHuCL1XRfsQQQaCoAt2njXmmYrYp55oMj9H86RdgUFbV6W1sh6ycEGFMFgPfkcg7xWFQwi5mtMNhc5Nhj2Z",
  "key9": "4z1Asfd7BBMsVARxqjAMEfRuR8JodrHB7jVbZRtps4Ehypu1MKhecdMGFLWzuSbGVZVRRshGXcu8rEpBDZYFMqrA",
  "key10": "4YR9waYtpsijrgHShXonVbecSdoUR8DCSJT3EAC4f1ng4guQTkajLhNGxJzKkrswz4buSvtj6cHdoFZSS2dCMMgk",
  "key11": "4YgaG2W7wpCcizwwi7q1FUk9NiDnFy8yexVmBHHp3sgwbwkTBVZ1tb2bNwsfTECXGrPo5ZC9MbVpGtLK3qhsGf54",
  "key12": "2eRymbecUU32eNFnhRHgKLiYBA54u6xHsJdtXzkmuMQTSrruh4XY7gQigJnniFgrzDHNFjPngWimTipH6TM7jNj4",
  "key13": "3h1DPMAwBy1eGebRqs8879A2aupTycfFYGLJQ6LsiTP9y3MZ1ZcnkRui3SGCkpYGWLbK6rVci4A8UKiqe5La2vG2",
  "key14": "kWEb5j9wbbShtALp24y2kj4yZMMm2vMJ8kJsYuTy1Y26DuHsGsDK2LKvNvHs2797JrhDaYzdFV3LchZ9Ed42yjV",
  "key15": "5GEKFy2v8oVbwktpbAz7ZQYid2CEg7JvsRfzJfmg7iZcQRe5A9yAAy7RXQEFwfeko2uCVu2z7GMs4ayNn22ELHSG",
  "key16": "4ec9EjkDpDRYFXz6o5EkTmEs6ZRjArNVbm66JCrdkVeEtx72e6Vhg9xkahrfgAHzVUgXgbjJpeoS5K8GVNk56adM",
  "key17": "3M8L4G6KFrzhpHq6ThWYA5UNt2rQSwHNp3a7ZbeMyyXn4hns2JccZEuR5RaGR6bGskf7WDyYH7kaD5iA9LcJaU6L",
  "key18": "3TQEBZmzwTWumXzZHSiezmMmhP6p7zVgZdysGUh2LgZ9zTVh7Uo4SxLwgd4b5RLeetX4YgiHmMyBczwVrpbZjjwK",
  "key19": "55dgigbdJLQZX1dixStcJzMMvB1bQvMVQMMHPzFnKuTE4wk2avxxMGftT2dgPtBSqNrzjh5ouM5TkX92QsRumUcr",
  "key20": "2ZtzwUQF86f3qa4iSQKQpDvVknUV7PJGgqv2gsYZvpoXzKDgE9dGGC8BgBSTD6FBDSnUgL99jM23eMFcP86FpUAB",
  "key21": "uqbaU9rWFjKm7zcidZAEKKNE45yuhHBgdM5VwvMMnqraEZbJfU6cLiY8FB6ZEJeftZeKKcFdxAGMRDNhQ8SvZtQ",
  "key22": "4ZN5s2ZsMKRkByZBbbXNLsXZZf9ngPN5K8CTpsSSo571mNMwvARYvJj2xjiRQ65wF4XgEymhf52NCbZDMwNkbkGQ",
  "key23": "32L1MUvmDJ3QDGjSjTWQQWiDUCDaNRxrEMEGEU9JwgFJxMY1dkiiGNX8QoNNEooFfo9yegFfqeNig4eECYK5E7tb",
  "key24": "5qyPe2UEvvEELgXh9n4DRRpQz1sK8497T9uxzWgBZmY7nJQbMw43c5W1729GXKYgUoMtyDjfB8x9PkSMhLBDCL8K"
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
