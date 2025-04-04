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
    "LHiwyE5MQsF3Dh8z9B56RrWWBNUMrvEDgaZnFvVtHvRz7tTpHrRg5mCA2yWmffiS1QK6aG1p3rXkKKWApcEuuu3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iUwxA6yHNwPVhVzYAsGncMpe3b3YMSsVZCAYtYcCEcsB9K9smLK7NPw6qgL1nm9vPzNmdY1odjmgEfNWd6R9v2Y",
  "key1": "5tiLHFqAFWDyNvS1tk4jHSUE9zQE61R5EtWrSnfVh3i57hdNCCcneQkRvcapijp3kW2Bjv6aNhdLJ7yqWvjCfrU7",
  "key2": "2YyUJigJYdLgJnbur87xZYuufgd2nrPHJSAizg265eAHZ5WbfRMu1cv1XPHpfByCvUWw8mLNsEsk5h7om3cnUfz5",
  "key3": "5bpNHXj6E26d5RAVk95BbZZzSgygnUCgGownwY2ywDoED5U22PyBz4FJHf2maJkrKfQ6fbzu7SNG3rNzkBnb4jdS",
  "key4": "KcBmpuPBZcUfQvRjqi7uqtzDLf2GEgwJfZEJdeYAs8Rbaw8S8YHbBoJKMV73iqrBjwDzjbvMpuGkjc9oxMdesBf",
  "key5": "2SeRiSEUAy1UVCiuAeq2Zfg9LQkhEJKzK7zLHXPocBnQnSGEjsJWCDBkjd82CZkgSw6iBfUvYMD6DajB83zeYsue",
  "key6": "CLu3Yhcm9u3231WdWuyRwL756BknAoWahqgbD85v7qbiZ6yXGWnSq2A8nYtKj1pAkaeYQE5gQw6zhyTzRx6G81i",
  "key7": "3rmcbAZYxSn8fuc5pes7PjTHLycoyGkXGmUKMpHoARTkSZanqVzg2W52a4rJjV4X6W2m626JfjKCARZT7XhunhVS",
  "key8": "zr2syUqxoUY4GYyy3WcriH6yMQ9WaKWZ8hYKdjLD9Upw4gsh54G7GQfQ54TS3k9BKmqP6C8wE82AcVbpmBvLmuu",
  "key9": "3FBprL6U1QcYLubUFEpRs3zZu1kMYAziXErttv4ibehutUSexbwzx6vFHdm9SLJmdNR2CFmMNu7xLBEizwVK43Ty",
  "key10": "4fTX1fmYMd2GfonveeNeG5pePSLvbUxYSHj2N4hJU5faUdFuDHWjMVboiB3ntoU7YxRrVvCqyrU7Aco4Bb1jtzh7",
  "key11": "2mbbyLZkt8bUy5LVGZXjeTA8iWK1QaGJffvVeDJnTJxEyCFgys7ZCAtMbbBqyvyrLkUEYuWbaLKLHt3ARHXxHrcM",
  "key12": "7B3Y7pim8oTQKTg2NXhqeGeWMLYf2AY8LHh5brAHjhp6BRKMZBS4TN9pHrLEw5V9W8VhMVpjDboN9GeR2py4ejK",
  "key13": "2k6ahysDqm7V6jjTDvmp66rnAfdYpMVjdbZ4i6yLkdjEURNzEbKfXX1Q1RFHAzNWz25gpxUcKyLUJwDruT2tuDk",
  "key14": "532zhB5xTezUYE8uZRfdMcagcqCnwEAb6fUYrBqLQEmE3xyxb5Ekp4bUdy6Fug1rF5DuFT6RjWuuvzsFprsjYf4K",
  "key15": "478cHzyL4Qjn5F2iZb9qipYw23ewaC6CgBr1osqbKKCPFhgN95LW9CD3ruYXgoB4H3SUjeu5fdLtWRetJyVuP46G",
  "key16": "3uRmJHXqcUzA4DnYkLZaAFXdbbf4sCPkdPZrCzsTqSRLo9fJTFT1R8N3nMGezLJZNVrEviyveeTJczsLh32jV2yh",
  "key17": "21oAhSsLP4pJ7A3zkjjCvchYBkAAvNZ7Smj58hLFb5Mbu42mcLnbqzkjgtaCRwMBLhyEnrXAYA7Rzpdubw3gnDip",
  "key18": "5faoVYyMyDKTtff3kai3qtKWzVpy2c8jrfTLkPfroJHT5mSuqBP8zwYLgoLKt9Z2eE9SKmiu5vzHYY6VD68n3QcR",
  "key19": "5uesRbQicBtL5ypxb1EJWbtuRP1mii6nitW5vtWAUBYyjEMuD5JnEhUE4cMFkWygYjMGPErqz4mQzGqSL65EUS1A",
  "key20": "5hiqsX9S1vkQKArvwcXosojtBkDBz5VNmJmjLUVxNfx5UDHrqUAcMRidr5gKycVKBSBjRTqRVNK2gWDa2xzaKAZD",
  "key21": "34FRtmUtB2L7tpZzTtAJAw6noubyxPzBadfMd4SAQBYeREg1T4zH19yBzM9iPrK7YsjjCiN8BKD5Bwafq1ZDgUgV",
  "key22": "gtWXDteTgwtSdwcft73K75WouBh2m1TwQhNFVaGNddPvAKDLLGEHYjTvfbzJXqM75n2ujJbAxsbY5VwAQATpMve",
  "key23": "oKLirTuWh1FcMbZ2HTGoq8AgkuqzVpKDpXN2ha8aphuYAEd4tLTkVchc948UUBMZWMpyKskrsEfksb42EEcdTLv",
  "key24": "4B2fEXTSWAJcmZTzzaF3hqpC61yhBNiYhLknmqYFdC2zKxJNGwk7Vjwr3U5JYWEnQsim5TBvNDgGPGQ7HfeLeB9a",
  "key25": "4sEdRZ8MWHMUaFsuv6pAvhDhy5PEYU5ZWviqJU5dK62bmcQKxaxTkd1fPPzGyePWA4LENFz992mPH6Aihf29Rv8L",
  "key26": "486jML2rs6M46ChDAbqDsE1wkGx6B5Wox85Zv1SL19G6NNrmAtCBqipCWvUavSD4C3X8t1VhPCDJ26bS55NSEmu8",
  "key27": "5LT3nzenAwDzhKdpc27LtgbCdQSbQa9Jqo7iHDFmSx2V9Kn8xJjMHWHKuShxqxaSrXvbooZZEyhDsnKtRoFydLkh",
  "key28": "3zEUprpsDvWmGkPoUTtc9sRYPQzLYmCyFg9puwStn2kvo8jj6Pye3iDm87azWZbzeDVeUD94mfswSVt2bYL17e5w",
  "key29": "3NC1c8vevh7va5vNDuS2UdK83Kwu1CB31A8wkLoQDKUdabtNoFaUzSWvkcRjaA73XEEPwtpRCdD2R7KXiHEfJQtx",
  "key30": "4vY4hvTi4ewA7QynoK3SnbSevv1Fm3bFjPHEUH8RJCqjh6WeaevcQm7NzLiUuZcX6LzD7oj2AQpX1JrViwEbjCUj",
  "key31": "2tQms2j129b1b27wQVx4TLSNreWVrL6vGxfDPYxNkDSu5ddux3FN726191ViiPKwsiW7wh3CP55s6vJGRvqW9ZLX",
  "key32": "5jRrHtSGf1UF3xf6gPhafLJ9Pi4UGb5qYor4bs4Yk57ZAxcHXoehaWrFequwFfTXn17tHEcifkGtzLCStejny3bB"
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
