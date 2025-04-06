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
    "3UGbFiBRBXBwS9GXQMkQudqmhUPNxs2ExoC5xZRXn4mYHD3QbowXhEa4myZ3KM17bMAaR16K3Vh1pdKVpyE4GEzd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PxF5zBXLBcCrrcWfbN54rkeFDMYMhrj67jNahvb6ocuVudNy4DkUUvUZ8unEhvuceDsxQJWfnpzGKrHSpUnBBPV",
  "key1": "5RCLeAn89wfA5bzhyARGUobCnWraomXxEmo9T2as1HQrU6pZk69JDdjuakBJuqhyNyq5egyTn3WzTPM4SLZnnVGE",
  "key2": "2SaWsNfJtXJ3DSDLUJC2oxQ4RS8MU7Ja6ccTdcAHa9CPt5KiAWFRd8VgnjDq3iTCDxRSWft9dB1L5qJznZKHrxwx",
  "key3": "2VmeSHDAQZo5Z6Wd1iehiDPE7SzCJaAApf4mpEdfREFiv84AQXrru5KEaX676fUhrCgt7VLoK2Jrc6V7kgiNP8tM",
  "key4": "3qXU2Ubd2KUtzSRtRvUdgQosZqbVm1X9dL1Ua7v5B4RJGAR6iEDiAv6M26nZsG4zt5EmS6Hw5wquvqJfqRQugw7",
  "key5": "MVJkwuPgtVdFcyQ2H7QZoccmrHtPvYKWoNJS7fwuiWDSd9Tu9Tq3vMMBQHBUZ9GKwzr81uLLnSkU77GYNBUcFYn",
  "key6": "3UMDYAJMF7kPAeQvkApNiDLk3vdSv6o2ivK6a6ZHgBDrDvSnbmEm9BGTAuRZziEQoKSLFP8arJn8iyPh9kWLtspD",
  "key7": "3sf9CEdTQ8ZujfGkQZYsTVhY98wy7hKNEYK9zeKrYCvuijtmteqGUGAGTPggNqhQj9vqD9o4NZVHW6z1Ja6wk5P8",
  "key8": "2LKytjU4SYncgJC18tUeEH99HUR9PhViBH4uAebpummkgtPNTS2oQYNJyfCFxp2tX6nkurb4jUqwPE4Cqr88ZKhP",
  "key9": "7ApuvVTvKoCnWKrdje4ZPYqvZac3jPE7h7288a6Naxm63CDS3yYjLnHeNmvM21w4mtqwwbbumHVNniEwQzzx7f1",
  "key10": "TPBevkt95fq7CSojBavvE9hdJqjTemjiRK1Q7Yt7DihuFdUVyqvDwXt8HZHtbcJ2AscE9A1zGSQAKxHoTPY7tMs",
  "key11": "3Q2ArNSuLQHgdfxFLxFxJLA4zmkb763XKNBHqeZrtvJ8sPsJTm8p1LP8ecXc9GDCMybRGn1JJPA71N87MG2HtzrN",
  "key12": "4gfTAzZXXkdwK6KUxNWXeBvogX1wf4jPQBoxnfRn1YtmcVG2dKwgN2jBkc2PM8v7NJHDE2r5Jh7NNmopJffRWZ4s",
  "key13": "4BYsPxSyvCLNAna7py8g8XbDQNsdC7rw51akSt51M76Jemn8UtnWnLdoyzUUTVoY8VuHatPzerBtiBgd9d71G6T",
  "key14": "2GDMYJyy93wsWfYrXUfh5JiLH2jaUrAuQwSJ7JgF1JmuG6Vat3qhde3TqwxacvKHydNJS6iEHjBDm12vSbkfsfE6",
  "key15": "c9svGQmYukkVXq4q2vP8prVEZgDoW2GRNtcfvhAENC3DgCgwsMNEe5C7teXozzT2jEvtLHi1xfdy8bK9Erp4NQo",
  "key16": "2YM9z6B6euZ5JERyHK1bypyciFT7WD5LjCMWLahYio1qFd4mzaWt4cHY4d6P7LswQoQsT16iVZSQgqLLkME9wB8h",
  "key17": "1JPbdt8Mo3gKoSuGv8vnYuy6YW7qyMhGuitCSEiwAtn5vQhqmQgsUxz7swzvDfS3sp17fXTYeN4pPgn5zQ3cuQF",
  "key18": "36NDhMFDn8SR28MQk69bfcRsrbhqdYdjkGrUGEsMNZvFyC4CpvWjnTMV2WyCMT2JMShAGEpZCTmWzkTaycxxjtr8",
  "key19": "5mTXUBiu4bQMP2RPBuDRzEdXrxGQwtA9WNRvNzPrmJd36aPvr1YZtRiLfN3zXYDEfcUrfGzc81frRwisF8V1sco8",
  "key20": "3Q2xYDDbuSMhqCHp1q8CUoXpVcfedW2RAEySTcPiSJuW6iT3P8fCEJaLRjGrVpRftkEUixURFZeABEZxycABeqPC",
  "key21": "qv2jwVbVEEFujRAcr7Zdf2xiJrs3Vg2WpkcFVXuLLcrdQhCJ5sZqchywwJAmtnmVJ9duGCHf5MH2bTccQaB1fws",
  "key22": "5Y2a2o8FxWXsJpMahHanJpUK5UNDETMKx8wxAgW9dRb7TApH4HT788uTVfqDbm7KCnjrabUBELc3WhZ7EfMH9KcG",
  "key23": "UBSnNWtpY51Wt8g5knombqwhRdYsehXr2wAR7adowbPPtSEmtFybT5qRvK5oU8TGCZYsW6mHn7HdRrhEjJoEPyR",
  "key24": "3KUaFbAtS5sXRA78WPsXDm4VbQCwzuyb31RWg9gJuemuJjfMYbhKjuHPhRUYHfRSVBhLN72tjgLStW6oFSLzWxcT",
  "key25": "35pDz8EESAEaAVix8AEG9VfhF2ZJtYstvKAYKinwSZ3EG2SbYUVyvSuHjDYGsZc6MopknN7kJNjcA1FkPqT4zQ2y",
  "key26": "5hdtUZ6FNMT9fXa7rLpptnorKkji81HbkAZdfD9HrZWs9eBAX11u5dXATkJYprwc77dxi2XjVzHa6DoSXCenwgz3",
  "key27": "tkzFs5NkTcaRBnvikk3Gdx18KN5VixtLhR5fW7W9eD33Q4AWaj3cNrzavehznn2QiNJ99eRydE5MSFuHzzxXRfo"
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
