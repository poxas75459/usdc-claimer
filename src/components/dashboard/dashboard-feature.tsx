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
    "2saYNinh777iUtUWEgQsU8oA3arrzz2EeJvD5omY2158R9qnarhmstXNFLB7xaVcNabmyZzPGVGMyPZytGoCUEfw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JcuhTFSCX6pNKXmYqMcTvk4otg7t5CVmfEwVQmQaUVwCePkGtyMATyf78pEzCuzXkq9ebTKv1AihcLt3JzV4vuq",
  "key1": "5SQCNFuSvCac2BjQygmQm99DZL3uWc9NAu96ZDe3ijSunZLKz3wg8gEfj2eo4i3Q3ZFnQ7sDc8eQiY24Lxkk9fmT",
  "key2": "644P77GrGMU2cfRD6qjXDGakwL5YErqYov3nm3rv7gaTUiHCYZ5kH9nqPrFheDCJjzLFHvpxo2j4naVxt6njnZcC",
  "key3": "5apDgxS8A9etZVA5b3APLSQmtg1c3hBPTQredwXCBzZ4vQeZeLsuR7hnBzNoFXwQrkF2kbsLsS5ZwKG9cNLf454c",
  "key4": "25xYVqV8MqCnMimDavJd345mS735noAk6GAJP88QSUiw3biMT2BXZ9aMMpGMfYjDCyfPevi7wAeLzG2QUAYMifem",
  "key5": "2KJjYYaX1kYHx7aodkSCiVqVRgQSaU33Q6Z9oKwH7j6ftkMZLFWB3sx4eNbtQ6LhzzSW26q6m7JkVG5YZ1Koa5Yk",
  "key6": "2srxGHrmiUAdn9oiJq4HEG6M18HHWq1C57oN2ALqJed1KDENzY8CiPDxiYFR7j2u3Dx4V1zZ9BeyvRSJG7GYzDU5",
  "key7": "6A5Vo7tHdcKpkNxBpoQGpGvEByLwht6oqaTzL3yxjmipq2r3diCFc3FEt5kxJrTUVhXXP4NPfnghutnmHfbATPd",
  "key8": "3rDdiXGS5nQWQ6TfGP7EsRpDPoZD7ZUHLzpgJSJdCniiZTGb7esvK8JrKoP6jCnugMmaxn7EZ9r1b4qpULWJYCu7",
  "key9": "3QhYZyMwupHN3wdhJLZqB97e8CD7QoYP5xumNnJrDW8N9Hyyfj7x2iH7M625unCaBrwEpNY4hDK64wzV5JrUyWBy",
  "key10": "3TXc4r8GoZoMW9JSh9GkjhRewT6TvKtSZtHvrjfudHx4P1XsvHDr6iWttvc7CMZJWgaDP7ZaVNeFgB82KUTwbce6",
  "key11": "2VwVHL197kh4CFyMjGGfoaneMqyjhDA7oMHmL3mTfNiVBv2UEUG6tyJg8UvsmNQjjmjaD8UKh9JL7kVd46Gqz3St",
  "key12": "4UEmr6CxsT97AarfgyrJ974LR72x14WB1rdcRAB58iN5Jn8h53VAeqEvpUPnhnp3wcNsRSwVh6rCxEkQY1rBYYJN",
  "key13": "VK5kookypCNRYcgjEyLv3TPtaL2XxY8VFwbscnUPz4suWBjLerD9ToMsRkzsB6cRPTTkMy6hmKryP9kQheNShSx",
  "key14": "3EY1Yidh7GKbYg85tiS9dy2C4zYVPjqdn5FkYw3uVtozTAwarpr9K9daxRACtrjUvouHPN9wAZJccTH5aHqNWCZd",
  "key15": "4e16GZ5tUdMbuVWdXUeo1V6nzXPh3sskiev3p8mt1jptV17yibXFRD8ZgZMcq75GSouVrU3TFPkEHQq3qk3289nq",
  "key16": "3JbNvz7ruuy62n2ZTSAjJ6HNW3njyCCHseg6v6RhCP2Ybi4TXCt6mGGQWwDRNZgnySN111LzfgEXHwfLkjppy5Jz",
  "key17": "2v7qo1Pv5x6JpVFME3V7yxph81Gb8LTE6NodgwqTvqowYrxZUNg5KsHzZL7XhcdsG6VpPqXKVVAcEBx3dQHqvX4w",
  "key18": "5P3FjkTXzcW55RoJWHRajYnbja8p1gz11q2c8cNcVqHQrre32Qfsbwgwa4menqcJ6ybe7GCsV6zwufoczbQmaMpR",
  "key19": "4mHmNqrqi4LBBMGSCDwALT6DCaZB5FD78tUZZbq3d68tFNq9t1AcTMGy5GuD4ifm1Wz5VjGXhLAHavhMhMxCiVnh",
  "key20": "NqzXmrNi3c8MkMEFxWdB8jfvgj34o9GsPUvbeTNqTMULAXVvYm1fdnLpAHYifLg8pkjvQ2iBGcrwuz8WZPgCi2F",
  "key21": "uqXZYZJTrtSne4avhREZdGMFnfyaVbeUC1Utt9YNzvtJ6Kj7sCTmqCzkzTHhP9A6kFTHy6BAQvkRuX1bWdazBQh",
  "key22": "4yENVbzeSHy3BtdPkfChBRuQGtfes95JTjuv9BT9CHbD1pQoY3jwd5RhVDqnzFpRNaokkKoMcuuSdDzGNxUnb1yi",
  "key23": "3EMYCe7B9cQ6z2CVvAVAJsGqQGi3St91zeAgZgKZpoTmanoRU4NYnQPqBiHMxzZKWf2kpfADp92NEgDuZ4hVYDkv",
  "key24": "42mbeScJXUeHhzrVxPTxaZxrfgUdhSoywG3ji5rwMEmArEc4PED9zRX9cEDot25CJFhFqSUEtRayEhUGakXF827n",
  "key25": "2aTHfpUWMNVW58gxVeVipjHFjj2o6jd8NwELoKzgprQemWikM6XWMiYSUBcx8vkUdFAEEcB7YHW2wpdgCV8fQTpr"
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
