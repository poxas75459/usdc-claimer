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
    "49LLhAVoqDGMvZYd1rXPPFnkf5xXCpd2EpoisrCXshUJiKvRSLUNn29hoC7zc91VXxxLX2HAajVNMf5S8U3LUEr4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5paafpsahYwmymnjNi2StECZcAxr4Y1CqBeak9HW8KQtmevA1TJS34Hube4DvxQ4AFRFjrndPKqf96RUFmFa73U6",
  "key1": "6T4wqkxJv3NxvPmaKWJaabvj8aTV24uW6fdLn3SHgKVVxdLhM9yHRvw2uPQSN1ADwG2Vr8NfG7tBs972Sxn1bGU",
  "key2": "4AKH1XWKRG1P5NaajwYtpiYSE7bs6Fr1b4Kqd9yGt2efDhchjGSquxZ6ctH8hguLr3dWdBQfkJfYRxZpGpz5xKNR",
  "key3": "4fx3SBPbpD77G5Db2gDJrQB585UpUirR5UEou2DQkn3miK6wuwKkdU7jKHa3p4QZ1M7Nzx84YZVrVHnDT3uhXNhr",
  "key4": "5uCzMr6QXFPZHXbRnUvunUKD3qo3Pr1cXo9KoHMnZAptaV9BD2QmKDcUqcCQPCXovYBP6YadR9x8hZh8J1wbZuAS",
  "key5": "PFSuJwH6iysVbTprgbAARSrNMADJq3dSthJcfrqwJXR6zmyMJUEhozUUF894YXNFcPJm7HtffUhmpfNUcD2B1zk",
  "key6": "3ZBAqxsdhGP4Jszm9mjbhv7KTdHYrmEe7PHPmMkxT7cun858KZUTtf7YgzN3DUULcAvqXi7FKzu5SGavDixLxDGs",
  "key7": "KaLumxYngSZHB5CTBRniuZ8nQJuv14k75EMsKTUWHppuKYxCxsJdrePCpid3LPVViqSfjRzLxvHVjo17TFas8GV",
  "key8": "3zkkrQKPdQXirRsgdPEEyS4i5cH6bvTVmnmS5XZFm2YNLcxmYBgCenGa7ToiFoJG8KjJr2ZKZYwmZySDmGkNWqjg",
  "key9": "3LRuEuQpuV85VTmVayg1sSrJRpphBdUdi6upjVfo3472XLoUZ6BxMHac8oHWP9vKtZcmDvFYsyPK35HT2qRjY4jo",
  "key10": "5MZvjeUypCEQsJ5HnPgKwMQDgD1NrgYMT4iXRjYzRWx5jaWq8iX4FXPMrWJxFQbCAraPDjtTr2LvZcEbnZsVmaiu",
  "key11": "2H3N3rtCQYmjhz94ikePze3gy6m9koqMsCWdA7FiFXGZmX9oACA76kHstdEwmEtg3H7sLz9eS7mTy23Nc66Fi4b8",
  "key12": "2cHGBo9pnjpPpsTwnaNXaYx6ghLmfLgXC3uEK3TGS8BXJtAVseLH8mgctWcAsZGn5jjNybvgVKbwbqUSaaVYPbob",
  "key13": "4CEACMEJxuEzsksgDsRRv83CXTyXr5Hv2KQVFRHQQvtttrnrLctnA6yYZEGL8ucHGNrrSXy2vYUWexhX4LLPZUeL",
  "key14": "4SmBpJXWMpSjGurWnF9oqozXDfbbaTCSh6fFbsBPKeJ94b3jAdoUJ33DX7qo2W4BJ2YobCbhchxq1iS2SuXQnUww",
  "key15": "5VfyYGgLkkE3iRPpJa6VZaEAY8nJkmz9dGRRFVhZdNVQ3xwaZqAr5trcUMKvKv2R23jiVhvRVuYyCmPY1jX9WRPn",
  "key16": "4K8tLW7tukDh8r3HbZdzyNsFQ649LcdEZgJ5X2w6eoMGCdNWYAJzGgu9hvpZAYacg8YeARaD8fCEUAanVoZtm3Mp",
  "key17": "4NYcCssbBDo7Y8532nY3JXnr8k8P4q4DpgYspzP3mxTKcVjJUBw1jQZfRNcvYxG7hrMaLMAEDcUrS1ZqjJBuG9iB",
  "key18": "4WU23CiXrvo2wdJNHABHG6ZvBU4Sqfbek3rtVLgqYrg5pySxiuHz5uBzbcVqA4JHwxEJfNWx1FFesa8diSZme92i",
  "key19": "7jubUBgsekB9QL6zMUrygj88oixUnfoha88vFwfXJ2nrUh5bB7eNVwf5ZRqTZgpTuX2eG53KusDxk4GPgR4Me9S",
  "key20": "54hBa1vdW6a1dmrsgUEznXNHhkwvXwjZaKK7bPTnJDXQDwk9jwkUodjgBX6fd3Y3i45ExWEKY3qxFDi3VWnGgmeu",
  "key21": "hTCNWAgpfoGPoLcQVfYcDHTf9bUyCDycXcEyUKm3K5jPHxaymwhYGT1bSAtAZkGFMbnsy9bWxWW3WT4Tye5gvWp",
  "key22": "4MVLxFM1KYrakgLqLWCoH15Lf6zbcyi9u4a4nQXaEmFiUAqfCk6p844eZNtJ1BKPs5mFCDghPJtVYhBv9LCpyupw",
  "key23": "2g3RPY8QbnMPXLxosXH6X3JnHiDmbBzKayGfTf8QCegpGYxJwGuSHK6W7xp9TJdRS5kW2r8eTr2JGrxpv3PPq7YF",
  "key24": "4B1UQXeMhWynmsnK5jRj69eRjfUVXSrVjr4WnaEFwMJjtcZ1JpPzph6PYVs6WZ7tHhjZFW7VMSHByxc6Bq177bDk",
  "key25": "5Yk9HJFRfxvRXh1jqaGLv1Ut6VoAX9uUZPUR8ceHr2W3SeBMFx1irdNmY8TUGWFjTRACGi7FUDbwwDCGArPMgQia"
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
