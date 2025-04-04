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
    "3WvBvVLbr2oE5h9bb2soKvJrPtwHsFB5wCQyNUqspdMVQKenUb2wCUpDtgVxYG4LvqXpKQ2eXW4SayZT38o8VWtN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58U1MxkUUvmsf3rxNFRvTV85ty1ns4sjgjzBnwYdNvtdEXZ3t7kyHdL1r5vgHJ5ZniuFGnv8f4BYtfL8D1s2UH65",
  "key1": "jcgbowRMED9e2NNKcJYQmkYTHbaf3qV7DoqUgvz6TWXnPy8xUsn7fGFpEgNW5pNPLhtHaZ4ftnECyzaJF3SZKLV",
  "key2": "MY3ezwusSQengWT964K3foV5DRLver9rzyFJSfCsovCUoGNmjoNEemSDXgHaGB9KNb5Gt7Stqtdz5tETdnDrDRz",
  "key3": "3SjvxRLWy1bMQ3n8oVRdaF5AQe5rsgFBsn4pwXaq7v8ynKDcWx1gDuw5qaCdzu37cEWh8NTFpKwTr2xRLzMamPLM",
  "key4": "2w2SdAskSiSiWVgc8iSepo8ucU7Q715adDSN995J5LFh5vkc4ER3PRGDkuJyx1eQtao5F2cjWDFGyfckVtk2j5DE",
  "key5": "3YYfmL5s3BSaRGbkgz6p2N3LC4LpA9FtyBnXYXU7pnkjvciaDNs6XCGNwq4tKt4fcqRCBStWSGtZsk7YkJ5aGRY7",
  "key6": "67fSLpLAGhRw6nmZLWcBf7GuRbRvgQiov8KtUvMLrkNZ3nhU6NvASqDwxAqdp73bke1LVQAvNDFRAFxGj5JTe2vE",
  "key7": "5TwKXawBxJad2TuNddfArqKZwWFDatYVMZVZjUJidu1dCrmjdNjyVrss4XtiHAW47ZEJzAwRz2owaBRd1qFfu3tc",
  "key8": "4ansfGAhugxq8Ee3aFWt6mmSRESAR5Ve3GzSGzbMFkqmcNDg8fkzHaE3QYS3Mvjf3Rx3u5gMg9xsg7yxnoBLxU4x",
  "key9": "3tP4BtXJgWQDFj3VnJ9qMXBKYmHyEPsfGUEHjCoF65V735yQ93JaPAZwSPtchFWxCak5Ni4cvPhG9HqdR8wTRwfZ",
  "key10": "2Katm3fXoA2R41LTcfx1vUYH6cThUoshFs5FivR9oJ8xEVXzYio8fb2Hn5rHSKXc1bByAwBhNFVeMtbEPehV9ShZ",
  "key11": "2PP3iYz3T9S6bFvAiKJYoQepaHx4wdpcQb3QmdSmGqZTvWEdgc7TUgxqUFQaP8Q49WaWiUQGh9qjaQHVUFxKZxL9",
  "key12": "3haxqKSn9rbBsimtjefPL1amNibz4zAja63wzBLEVXSrNCC2MRB1C7ks5gqfvMVFeeSkYyDcF9fM7Vi2W961bRM3",
  "key13": "5ctJdNandjYd4TicW1BgsrJARAqSoi4Tr2C9xwGMsmhdRtAFgi3TKtffzDD5KWFUoZggqJAVH8pdivpS1sT4xkS9",
  "key14": "5seQ4kdHHTxE9HAbJr7YBX2JCayCUdtELi7kKAxzbu1dcxuKK6LqKwVvLRuEjGjHXP4E8DfMK2yNoKqgVQaLJ8WS",
  "key15": "5wCEErdC8Y73GmCbm1GD5kgaDJip1h6ZPTKC46GUAcXyGky7BD7gyWyDFVTUznJi5nWx8ypFwcWnC2X9vX45BMis",
  "key16": "4QCSGHWggKfKMHbbjRjHEk2NtS8d9LwBnRdSvZ891WEiQXNLK8VMjwpXbEpHehhRDHSVZhSwziio42aqn5o9mNVf",
  "key17": "2QZLQbhLzQYiN28GRuvio8ekDJB12H7DD2VMdUx7qKDvQidQeAuS7jmpmPzevquUGB9fXSMD4gCwHf6N2uSVCFS2",
  "key18": "3ZppAaPbkGWBTzoLDN1Wc2A1ghGb2aozzXGBwxAFYyDg98fn2j9jzhaJA7ue8ijLL5CBRtt3EeTde7GLboWgTGoK",
  "key19": "5L1XxjfdtYggEGnqccPoWm9me42wYmSdeKkCTcPHPegM5baToXSbJaBNQpeUMrpy1gi1QnCqGjcXcXcU1nAcCcs1",
  "key20": "34uCWpR1iaZh5TxiDN58RdaeyKKwqcWTE842uCtzLQ2rtsixpgS6vW1W2fvadfddmEJFiAGvrzjcxYAf9QFTiSkF",
  "key21": "5cHgsv5FyB2XXtN2u7BakQDiWP3zF1JFrmnwA6ioVveJV4Tt6tXqvVDqGdnfx76iaBWhrXcVqU4NddspSB7Q8t24",
  "key22": "3ww7YNQV1VFaaJB1QVf1xtjLX6MKfFud7TqDAz5cDon8QGRTJac127Knje1WkyZc7S43x1S76URNCd7xaLCXw5ur",
  "key23": "4cAoWrCG8fTGc4siE2KZVHKhGRjnKcN9LogCSANu5HQHZNDZW3qHc5FHDSQf1eaJpuWpFtpri8H5BPNmDkswNxH5",
  "key24": "23xQ4VFamQC1tERRcrAnPrFkDEGWBFbXEELgG1t6hzqJVgGkQKSGJgiS4vPYtbjbkGPHBSCuP2dKfzuns1ubjGG7",
  "key25": "4jXmY1C4yMVQ42aoobsat7RBbhd1tUBgPYTgjbhkEFwS7Ln4RikLTz2Pu6HYzUU8TsVUGF3FMBF9n4TBysUzXwfE",
  "key26": "5RDBagTjiLN4ANMW82fsdMhy8TvKcRmeJShBZ3wMR6BQioRicX78Tu8i6uCLkLm4udhRZqDyYCoDitTH11ZjgdXW",
  "key27": "3b7QCNy5SmKffvmuA68JDwggv7uoRk2GVh6duBArrM8swbKErn9YhLQwqf99Z7dTZqqhEnSifE2KXnKm9t8yTUUd",
  "key28": "XHgW4qx5fVUgkrKF8tUGnoMr1vFZhNDJ61Z4AzDxtRNdoeoBCGzueMRDa7NXCBYLYpDtox9wrHNKqW9gq6iVidj",
  "key29": "4sFZvEJzdS1wWkCqCfhrJ8GR58cqYDm6HCmdvt8zWzLfQJD7MzGujZCBBpWyrZ1T5MJhPpBMCmj5deDC3xVCabpt",
  "key30": "4yzWB3RCFZWGHKcPGbNbsknkoyBQXQeFZ3ztPkD6B7zpDWQVgsSMB1bXfqMK5qNDFdhdVrP4dKazq448VpbKDVAJ",
  "key31": "5sc4Fm6uSoaiwpb17AP8oUN5qUhRCNVQLfuc2WgJKQgYavYcwLfLLnNzryMhcojXSDRTKfKfKZMMvDg9QUrqvK9z",
  "key32": "39nYtugAEBRXdfGM849JLoCANWMsPThDTyv8zji8akg8Sh8NYcHxtpDvLoSAWJPWjuX5GojcWhYXSptXrvVxDm22",
  "key33": "44UKbQKy9X6xFVbbqzjKNrwxV6QJntTsbBrXKhN9EdjU9Xg9Pq94y6BvdJUJfR7VF6Eeb74QPNJQ3Fu9UVXZ7JMW"
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
