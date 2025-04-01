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
    "4ENBx7tBadNui3fhYYiNR6VJKMq9kdYJTn7y68AoGtuP3hx1mG7dHpTUY7hMmTWwzvD6s7A9fBYPwrFd5zNgLnGk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oJu6EDaZ223HijZCsJwzuZPsardkVFX6Yg9N5uDmjGZGzj411jhRb8UqQYSqCrtCNUHxdtocdgqnn4HtzvsCEQb",
  "key1": "3CttPhwwnxx14VdSZbsiE1ks76QxC327jXiMJdrDxRTGP6Xxy11MQDS9Mx7RpLZVjmQN5MKFaTDVGqTmYYkN4Crf",
  "key2": "4ChrWf7NzPeYHLoRHByDheJrXkPef1TAdnwQMdM9Y6eLymM3a5MgiFuHZ1oakmFtq24KFSS4QCbNcPxjWyEZfmwJ",
  "key3": "FoEUTjQW1JVt2NjMzgQHtLDYZ6xHYvyrqqKDRShmfVKZM4Ki664oKG5nvsMSt4h8aNwymfCmhPrUAuALi4dMcqV",
  "key4": "53MoNVdrsofjofKZSEQnqBQYsfY5pBoaWGqNLqE7fCeu6kwYxCdwzWNDjaNwsTGEpLEkFmYeHYvD5dEKvEk9QNfX",
  "key5": "35E5j2Nwi1WeMQCF9CiKfSaznWuo9Muk68QUgnTf4PL3wALm9tUXjz2vJdiFyeQXhnCTjbaBMwniucjZBMH1kAKS",
  "key6": "5ZzhsqPeKTGpt4Dmz4R2U3v3NFxzBsChXietHtDHWN8xS3fSpi2hjMMc1HkBFMTxZ93kk6v3Ltv6jg3bw7Fxrb4a",
  "key7": "3R9FmVqMSnyqdCVwxqnkoMkB8BBHH5a86g5nwzUA3bhEZnc1Hzac3zZxCjZbYUNmbYAmFb95uh6ejPTB1cm8NwEp",
  "key8": "2ZUdzgwSs7T3emF34kAoB4nSr1iqWwhSEsomTwuz6VgEYoSqcA2gAzta1V2cCXNbZGbXrLLMuA6zL1PHGGoYCoVe",
  "key9": "4S3DTgDk2WJNTcb1RkxkbFPGYjRr9Uu7EFzyn4A3JYjLSTiKdhmpbV13LMhkDKH6bxoKE1h1UPQwDAKD4txfexzm",
  "key10": "45TBQqij9g6Dw5suWJYPMdVVgXBVT8XPXhxCjRnassk45x6kFVcxoLxFUKReWSBsRhget3SA46We6iaF4DD8nCza",
  "key11": "3mPjkJ8frdJHVcr9ZquMRTceXHxqLGkQDPYcYjtB67HdkRvcA2mNcA6HJK1EeSxgBkzY3zyqbTJmeu3tw5wbjGDj",
  "key12": "TsWxhEzJLipzYenYx2MFsoHJ5etYmikfYi3ivyieLD27xRwmUjfQhPYbVEUi8hVkXbx6xg5tFXwdJD3GPgDy3gQ",
  "key13": "2713u7U24uTtKG3LSekWPjWqTfEvtzUNYnYrjHUV1oTXjq9upQhcjzimwPxzxURS8TNexPjLL5RoNibMbaHswW7b",
  "key14": "5vBGy44GgyrgJvDp5ZuyzsSSdm8E2SphJXaa7Zsp389z55aXFvhd4LFZuVJKqdssCXSczuUKncLfdweSkRokngLQ",
  "key15": "3iynxP7DDbu8uTp6M2t2Qn6pjZqWuao7htu8F73cZmWZVwcDVvqr2M1SxMGgNHywoWKaGDQr5pYXks4pWNXvmmSW",
  "key16": "4cpn6W7wS1mkczWXSofwPprUz9hgnPTPEtovr4zMLjBNPRtkbjwwyMbocHWAquxNttFX7vVVbyhNQaMFhPwcWsw1",
  "key17": "UXUJSVh78gG2zmMqkV8ATGayttnhAhgHHzxPwi6a45KZrKMKtEp57WxdGucgWBYzrku1PW6Ep9Dk7P7cZ4RJpHm",
  "key18": "5knDVfFehXahNPggBf9KJJVjTQzeng6XRXBUuWus4YPZABZok3x6gWDocwmHVSX4pogex3yL8xiHzhevAYhCfCga",
  "key19": "5r7kiPnkfefsx1w2otg16VnfWaCudotXQ7DfspXprFLJzvYHVmqVy7Wjf2yTCgEDormKPLfYDt47wBLCe13bEHVm",
  "key20": "36CqgZRCBxf3oQ2BNdGucAHgSiCJvANgFobjW8D1Z1AQZZtLn3n9ZsQFoBTZygUvYJK9BTd6dLxhNgL9ZGktT5DP",
  "key21": "2gZuN8jCQjxoPvGiXFffnWJ9cDwanER2aDeJoAWwyyUswodR8hGGPjXU3vNjDGDyTTPKNT3W2NGUtxmvuLXNFbk8",
  "key22": "3hBqnsfzQK34MgSGiN3ejwKXfGf9ZvxbspvMExj93tpqkcbZydcfRTajuLougGGEiQjuwXx25QLkGQbkRwy6w7W2",
  "key23": "3Uq3LGW4azmm7n7Cm7nn8bDMPYj4HF4HG96MCBd1trAYhf3xTCKY4HeZhcsbSgXzjySc5tFG47oN2MnL8QZxyv6U",
  "key24": "5o1pLda8jtskvzz15Td4ms8iW1MQG8mssG168xvnaWESDnYLuxsBhJAZBcBjXXeLMegrNs4u6fRHGDaswzMtLetv"
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
