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
    "3S4sxj7gjnr8gM8cZbJEqA45eNygx4j1MrAT8NBRFqf37q9dfAK1zqTFMjBE5aPbo9rKRHAYXAC1eGC8U2BiJD2G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UBcXCwTP3MuJxBSrqt5sE7Xxtgh1UW55oY7d2THDqMUzTrHF8ULstjbacM99Y1bmJkaAcWTs6BundS3ZqV94HMV",
  "key1": "48PZsW4t2YGePaX2H4ZTCofuvZs9pUtu9AaUqA9jyK1JiZ6ucRTuhebkwSGL9rs6a2tTGUsH1sp6y7eTf3suPXFp",
  "key2": "4nxMgPjv3zifHuvVJVxCyBBPfbj1JUCBzaNmg2xRUCmWa8NYgbU7x81u4V7g78uFqnLasJDuWwyhyrxfgw91FQsv",
  "key3": "3zNPHdTHfAg71DWmMNzCxhYyRW2MaG3yCnAEeTzEg6tN8LKpyBpmZQDUNNknJBF6jqmeE8usXKCigi1JGNXYqtSo",
  "key4": "r8tVRGCCn2d6ZHb7f9FuvQqLb7EkyfSoxusi3y6gc5FmkJxPQ8uikqhWsJxPVgJkeGmxkmw6wSiaPtxzhd9Hxi1",
  "key5": "54nqWqJCsxoitjqPQVVmjqRjc8AVHavD4baqmyBRogFNouQM7xRi8xvPpDYhvHUwASK4Gwe2id8CTkyWwYHDcZCF",
  "key6": "4eMFnMpYpjcPhNaiK9rK3fEz1HH8ft3imwPbDyzxEQaga1eTXgYAiNqCzpGX1opYBDFsWG6MWHJnHPTBEiV7pjmk",
  "key7": "3FCvpjDAHSQdSDHhRaeVF4ASUodfjbZg7zA28gnYSEqESWogR6aZpHpr9JpmQXxkv3netKXkJvdsg5HvHtagT1Ar",
  "key8": "64F75uVg8TUfC4LStTXbk33qt3yE5NSSxE1RsM9Bkx7hUpQBiJJVGXjRE5JQwYfQzy8mkc3SLLBbwnMfuKxgyZFW",
  "key9": "5yMZAzGD8jSg5BwCWbijnP3XgUtsNgbVcy3SATXwnrXS3WLTXxw6KLwvfMjwpnu2BfxKf7cRQzGCEd8esV85x8Q2",
  "key10": "2ynppAT4DY93nAgwLGapRYKkg5cWBt5YzNCEpBmuRWyAuyAZmtbXVEPW2vY5TtSADHWUbomQxtwi1aYESCt8tSrx",
  "key11": "4eK9o5VhqZPWpKoukDDGDmF2ci7uZSi1QWQrv71YwrtfAhcMrGhUKEQG9RdoGsEMUBYkyZXtfk1NGd2ryq9nPLXe",
  "key12": "23xbp4WzfywayVT4ZyTcgufLxtvvGucQpuxaWKd7n597V17Agu4xGHfNaX5bjw9M2nVVQowZVy1QgKwVLcJhS4PP",
  "key13": "4VANbM2p2riuwCsWjWqcysU1ee1WqsmWrc4jXkaUgaC2rAL6dh54yapygjB9vZkZ7p5y8b5LLdKYAbo1pRUjCzLi",
  "key14": "5qBdsr5uw7h96RnrNNdy9onKJyNwD299nuRNJSNxMNmtgyUv78nBdY74uTjkJs1m2CH9NyJ87idRqSwMvQtRGHah",
  "key15": "3EApmQzHhGdhuSZbYgoeLQnmYQ2niqLnGqpVL8oa8rhnbicXDi3ETEi7hf3D6s6QNQGbmDJw6CLvH9uxBPXT6WDN",
  "key16": "65mYJeyDE6AVU6c4ZA8PqDv3gVLqC2reYXzN7TJe4bdNfsFNaXfdo2mU9o61C2ncj3YUdHab5DVirvXTbLFVpnuw",
  "key17": "5urjLLVNap5YeLymVy8sDD6SRyCSBdjoQ47R3khAEwdHUCRKjk7uVNkb98qCkXG82rpPZmrj53muC5v1HjVgAA78",
  "key18": "DHaCegtdmketeFS4tw29QR8TtehemqvGFzvJD3bniZdrZFdnpfWEAYXEgNU9q4VqcFQRPJXa4bcJsT3W7UgbNEH",
  "key19": "2zXjEgJfh8DRwQNKLPmYFuMhYNVXDQ4tbdFhUckwnS87qyknQdAdFDxGaQunXKCDRzE2veoRxBDMEKTCkx2AkFRL",
  "key20": "3WQRJGa6NPYYdErksNLFyEiDHiafKGALxghsHRVQyGVWJsUbsebQXfiKno5ncThyWTK93NnCsjJYZzXX9LVtzGjc",
  "key21": "3bQZUUV3wVssGoUNwBDyGqpy1xwPtGb1mvwEmSCzLQALMU6EhUi9yPqo8SpCSTgKeX2Myr7Cy6mFE4aySqyBJVUH",
  "key22": "38uNmKU4U6UN8SyE6G85uVKKk1ftAYS7A83Mi7vwwAJMRjr74vG4LihH5YWWykvNhvLTL8K4RtWb7Q4eJsoEy5N7",
  "key23": "3dc7WpqyJNmoqn2Ph75hYmMpcRA23FDcR2A8FX6k7nR3DRsiZg4PJL9TSfLshp5W9zeT6JAUomgcXG2oRp7vzn13",
  "key24": "4qpwGoHmNHPM4mKoM8SnBgnRPbnDgxn9T9bLKDLuydWb9UrWcVkrNdx7zQGiYsq4QXEJ5amfYA6AAgJYs28DHygn",
  "key25": "2yGABHRxPLQD1NBQyNJmm2zbaVwfzT3h8Z3W3b5xSC5tfxDfKYrGEkwdqaoEryoRQqqQQn1AuVswgR4yYw1tYo8H",
  "key26": "4rHsdqdo8UJLxbmHfFnXB8ykLVWzNATT3Lq69qygxgq5t9vGvScRpnizSLAGKhqeixdv5bgVNTccB49eoFvCnGxj",
  "key27": "5v6WjHeUvvBSkCmVfJK3a1CPDGqZb8ghpyB11fYhdU6cNNoWSE8eb8e3JgU7C3rfy9zv4udWQsfQiggXcpouJ8fr",
  "key28": "4ExTVDgHDyG353q784GRoLJGjWFjnGJ4ysKCtZnzUJ4uZ5SrgS2UBzfbtbk1y1PXv4AdbTRhJfjoaeytuNVm95Wc",
  "key29": "3ZKmgAS9DGAyA5tYHih8CmiTX2AsZ9j5TiUTLWie9FYxGSBEts3qJvCvxZEHK26X1cDaoXvgKSFBjZvrpNWx1YMn",
  "key30": "56oMPQ9EeYTvDbHUPCqCeJfdEJTsuT2ZHjBYr5zHNaG8VxjDr91FCBP97gVg7crL64iv3x15EnuTm2vgBY6zMgHR",
  "key31": "4DrMTKx4VdkxXkK3ZfnwQHzncYyWymgzc7T52cUVAjW9aKUpeUaGAPntt956saWfmcyVUEZpiKALmuKmPDpEve4n"
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
