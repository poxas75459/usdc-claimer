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
    "3Ltd27BzA2f1M14XGycrwti56sKAhF4nsQ68oC6d2ETLGoENsmEHjXbqdrfBAohM7VNaLPBfMnVFA7bJPra3ZV7a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y6kMYdpNpdkCcgB8snZLNz2aa5UyEeps2UDfXjLppgwBu8XxQB5MXuHW3we2J8PrjUS6ZrCA9G3CbgqLY9whBYx",
  "key1": "56E28umPZntHrHAT8hBsvaWKjVow9FeA6cgqVnGMyL2mMBUCneBjaN8SpnF3qPz4ne7mpnqFoFRhQ3fxyyRUSPAs",
  "key2": "3PaHcGfkmfEfKfLdWsGhbk6U3FeiRtQ5PiHV3cRu85t33VeR3mUhZNc8YE277yH8pPv1D3kBm1D7vtoxt8LavahE",
  "key3": "cXoXjKdU6KsDFKEVvqbi4onCVFNJM5gdTq7VVciCyyCSjjQdGA69ez8y1rMs3ntDaVr2gL8J4c79TRy5Mfz2HC1",
  "key4": "4QVL6ZUSWbdVHnxMum8EKJXTfrHy1nYagBMRCUEn2k9YnGe8wApW4NKDwj5WH7eFVjhagfhw72dVCzy49pEmYZtY",
  "key5": "jrf1JsAe6DALSaKH8uA2hmEXtvgDyzdPePXKJEA2Lgxd7LyKieFLLAqzqC8dtA5Cnou99T84hjdVV59ViFeeqDL",
  "key6": "4nr74hLmHEguXQ5AsMoHqZgU97c3wVjbeg2pohpzrx2hRzurKwP8iCdSfrnnJJJaYhpDqNH3EPsFkD3HH14BjauG",
  "key7": "4XzFRnZGZ6HT3JYqhPu2i5XrXrAtHAiKsytEdrnaSFHzeVYWTdraWzKSZWVE6AF9ABf1oFS6d3DK9kuU6wzBVUnJ",
  "key8": "bdJixavsmPTTvQeR871MBUEevR9vT66QAMYhXwr2QUNPScmLiAd2ZYGYrgJxJywZ1r8vmYc9oeAfoWemmsD6pui",
  "key9": "5XJWdDHc5Gxbpx7442a5QcCMxDr1CCBMW3HooyrcAh5B3qi7vaTHC2odXM2WaTaZfFxRXdEhPBsPCpUMEZsNfjPu",
  "key10": "LzTSyxkxyNvawcYEHhfi82Lbr5CsxZYX92igvb18GiY8ymPiAbn9Y43AM9oeeUqRq5ChB3DwSXrAabC8hJnEvyc",
  "key11": "43wr9xj4HfNrZkx1gZscCuHPdjrvSzPq2FqpZUSyARxK3d7YkXNRqQa2hoUV1RvVtuCtE2TxyrT7PYuD2XDBgDiA",
  "key12": "4VPmxiYLXH7haLfCfgEJxkpYnGuGpWharXwDrot1hbziNdnwq8sLVAqFY82HE4kXrueQNZHmrzBTRxXe19LwwQHa",
  "key13": "23qJcHRgHyDEhNj4TUTM5zGZ8j397DLnTb179jCaQtNgjVpbwrTdyr35Hqx8MqkGSZ9s9JB4gem6FKTSVrjLPwWn",
  "key14": "64WyueF4JuTycdmWBHCCWnufixreGtHW1r63M4xqQa73AFwBFigw99VhdjGyusukS3ZmjyMcb9MCSiL5ug1VvSft",
  "key15": "2BhyH3Y4ftxDEZFAYom6XSqA2HS1eFmA1RJbkreAQwQLd8BFfQWpKiTbJRMf6WxcDLyEdWN5ARdtYp7fYepsqXs8",
  "key16": "5fG8pokp8QFH9FqBwLMKK55vQV4NouEVpxEo1RBUSEjbcF4ncV7G4q1sFaZdDr5wvKQnjPHxoBvxdis4pmapf2sM",
  "key17": "3uCpdKgC3DJRxDoQZYDuhqX98aZRTuAWtKEttVEYsgQN9CPLweDshce6eAYvcALHVvaAuabUUzL9sPH1n2NonC9t",
  "key18": "3bMPkeRbnkRok5new7MVENZA5gZWyWeXCzN48rGczEFN7VPahbn5buXxPcS6bJFMacwPjVEXqtAULaFUT9fBSorQ",
  "key19": "4CzSsFCKQWJ9gc8BfdgXhpv8omQAom984igSvirjuv3Vuf1rotHCSPuT1U8vAuNnagDQ7h9hCFawyJ7RvWsFckLk",
  "key20": "Ke66ridGTnkcqm9R7awCxZ3bfj5KSXTb5KLyPfVeKicz4vPrCC9Ta3wmFHXaFQsgJ5fqKvtAVc87nGZz4A4Art2",
  "key21": "Bk3yHgDaSsqy4qRwsGNjEetTSLAYDMurDFViEfZRWwgNR7JYsfDKKnNg2shTrU5WJC6jfnDciMxnHcdVzySoLCo",
  "key22": "4BUEqGYypqicme5oQS1hnoES33F5sNgbR1W6pv5iKGsP77JYk7kJ9Cd9dwRNvmy3yUdiWtXHSknAnRzBSnvSCAe4",
  "key23": "3Y4GK3ta2s3yq7kcfSDdK8Rc3hknHM5mmyoVeVHqs5KHVDuvTF2zLi9m1jbSo2bF7Dat35oDDng1nDf2Gr3fPa2L",
  "key24": "4VgSbTt2WEgGyNUtanM7ufuR7JzVzbR2CqnTuFrqK3YWeSLneBUHz48VNNUyknghQQ9tvmRLaWeKu8hdgebvwptS",
  "key25": "QoKMiLnJVSeX3KEHttJ2TXoPfUgxXPbovXduf4JL5zAYiiUtbvBxjxnRwCkQFSQFgf6zQirjFp9o5d7UFw2ntPA"
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
