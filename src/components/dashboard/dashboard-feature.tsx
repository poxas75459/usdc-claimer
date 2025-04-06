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
    "2MtsGcRvT911rhsF8ksXUbhV918gzrRUMTqGUNEEdVDzMzSZnSkbLf1hmGwswVotPghao7mceXV5uiBVipQk72Y7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L23YAhNXDkWZoV2E8Vcf7G6FVwK8X13V5rAYGQdYck1qvfCUCWQoipToZueSmrEhfimTJXVQjoysxZbZH6YA33p",
  "key1": "2j3BvpVumDuVMhXBF9NiCTDtqEugP7VNaJ3aNekkowjAXe4jdDgs3JFshP5Dt1SQPKjLPHBmzs9bBzrPgBYRTjuo",
  "key2": "3eZ1X8r7BUpv3ffRZMpuSZKnm1CRnKQtwzo2pjXyzs4SUL32FTcZCaVbshyZ7DDYj8FrdrLAasNpUn4jDFubzkRb",
  "key3": "5G8xPxuCFGSBFM8EG6E9Doi9oQvPXUEG8FzPY6vFzNh96NERWw2JRKhfhHNHiypHkBfaV36SNydaSouydGQCUfA",
  "key4": "o6NgQ1Kk42GB21WpyJiU3BAs7xti7Qo1d16aoPR1c885sAhZPSZeTwXyadJLyxr2fKCkwiHPVN6oPVk9hpLRpnA",
  "key5": "51D23qnw1Mmz2GFhZegGkEVg1QZ4Y6iydB95i1WK4AUpjMcMJG6i95Rb1Ucbgyx7uTMMS3UHUQjmdUZZUPVwdU3J",
  "key6": "5zjDZpz8s8RZZu21anrviFYfpP2Kvhrg1KaRRwRgPGTUPLWbsxNp1GUo4Sf4ZvWRmtszqRo1QXRcHJfg4grum9Di",
  "key7": "2kZ8h91v4RFFAaR8EYURBx2RhLvVoAnG52m8X3PJxYKZTA8nt7NS5HLjqCZKfRYpu54h1wfQ7B2TVKYmrR8AfkBN",
  "key8": "3Sb1JrXrEg4i7tx6AmtsHobpBqVkmdXnZZSn97Vx2YDgBbsADzCfxYvojwc8JxApNCdCVfcnARFZau9awCCG4St9",
  "key9": "3Ug3osgrxSRmc9pNuQ9BdEEnLszCWsYraL3oSQm5sRFaWYYPgs5PQuj8deY66ZXyeYdSKiexqaVYZj7KHLmjKFSa",
  "key10": "3w2NL2n7vULmaEGQs24EpjhNUBdL33ZjRLF9oBxTKxkPQewxK57KkP6kVobcGQwCu7Ffj6psm8ipQK5kxNCXB9Vw",
  "key11": "afsekKpXZraWoYCVFGH9BieLTuw3tbeFVevtDQhWyKoRDLTwhyh8VdzicNS5N5EV21TR5azynb3ufFDZxfdQf9p",
  "key12": "671wraWT2udAiWFQgGFqrqCKW86SYRKvpReMSLPgyckS1RJLepKNFkb689Uk563NbzanBkTnJxWEd82EpM18D8oz",
  "key13": "24NH3JG6XqiKBXw3tHsiYNbogpfupaqS9hALqwZZku6vxyLCJaUbNrympuM5G9ybxE5L6k3Tw56jn7pNehujtfsA",
  "key14": "3Jht5uH8arEDstpc2mohVA1vQkHJYXAJbKcdsKoRVtKe3FuHWN2AydnM69psMzKuYMCcBQCuZGmqY6HAN87VhqZm",
  "key15": "63MZ5a38pqUF5Kr4Kd4CbFBD73dMZEJGWjCNwL73D4tpDcipYYvQQCtVruySZJVYBpijqW1Mkio9jAp9y62TD1bB",
  "key16": "nq3TU8d3wUa4Vkrk9HKmUkAUcWraZyvwctUXy2dxn9iaV19cm5zRHkdL4b3KkXBQasykG2oQWre3Yg7zbgdnn5K",
  "key17": "2tPdgzhWEtJaiaV5GVqeRRynJYDsgjmxBTbfr14jhhju2vvN879P7MAT3NdwAYzVVP771ob4Mnh5TBAdYc8c78ZY",
  "key18": "2F9yWJMiZg8uH1Ag94TVocQdDfsKCsE61AUVeUSHUkKrvV4qX6FsBBg3VDyPs9pHqLhS9MAnSs7A9ci3a5tXnH9n",
  "key19": "CABe8jDaQtFuVpBEzDs5LqAFg9mysid7JeszSNuS9Myd5oT5QNWhNYSGVAfqP4he48qJLoanysHXxifrv5ibnS5",
  "key20": "4ewV9ZsFbYZtZhjnXVpeapw2jpzADwbzaCYXRLjBRpFzt1DGQ1aXRAxtjbjYRZD5ePcnwYae2w8nqos1yY6eM7Yq",
  "key21": "3No799KxXStNDJtwq5n4AyAFUbgjHn9KCYQEQTPKcrqk1fSTEhHyWfnfGLiyyXiVmxq5tyGDx8PWFNsHLaK1tPcR",
  "key22": "5UAtpTgaxvGjbHry72Dh9oDFzxMUhriN9nkWB51cfdpaFxQ1Njo8J2jvonsnZohHGcnBYQ1q1JkaXjDz33HQUp7h",
  "key23": "5zqHD6fqYEb7eGNKgDxKFNFG6uBnoGLRspoJnDkwhSxLhbwTcBUxvzExMJLpDs7cTG28zoDbmACDKZgxta2N5QqS",
  "key24": "5qZkU5ggZBNFU2iMdAgQ2AKDFcdzcsYAYCv8SgxsEspi8Cg7jNb4JSqePQBtYqFhRTVWBpsX5KrPUYTzbVyfCH3t",
  "key25": "31U74Nw8BESptooikL2AYy611expnn7isHrViufskteGqfHAyBSxKxRqZwsuJczWxiYNiGrG5HfypETvJnTTQstM"
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
