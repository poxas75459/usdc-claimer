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
    "4JstEwbGqktFxzdHWPb6QGhPTCRcKCYibPwekhPNGs1yUj2DXVHi851CsR29x66cJhfiZHFJt5cFea2YDwhGvaw7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JigG22aU3zK7QLfHMnewSSGE1YVzV2bgy1MpNpjapkWqtFgAasdfSytDWpXsh3GUzsLySNmBzKcT92Rbn4X2uqk",
  "key1": "3zqGh5nAzSLquvCc9XGvWUY8Rb5Rs8KD5kWEMkNnZgdScDzz6WgH6Cy8CR7rL1VkJsLn7eBd9hGbzTDPaLkAjTGV",
  "key2": "47atZ9uZKiBFDvDFUPZu7gjLrHorqHtKY6hhPyei3hrhb7Zu1ajpWaq2ndiZnwE9Z6kEu2RkmhLTBX4SrdF9Xpr7",
  "key3": "5ZVD92T9ijfkSgEQrKy9xvY6yReRYjE1453SVQTJ5e2kQrxNKkK6jEFik6MtY2ASjPPXvKhJbuVR9Km2cb3PHg2Y",
  "key4": "32QsZKPVJcANaF5NFPyCwfcMca6Reix1pyRBfqgSyGGhCtv8N6p5Fe7xFcT7VKTj7qDh2pekk48rwgb7vEC3cyZA",
  "key5": "DdZ2QVutojzm6koJSPFverMrLszowSYsP4rTEC4yEKrD6JHsocX1BcZ3xfifebpodq3zRCU5VKTwxekycXAVPt7",
  "key6": "5xmhiFX66fNtL5g2MHwAyYAHKwSLRbx5KfWtUdKWcrz4hfcnk6wXEivgUKqgKLdcFAp6jiA3k4uAfHiEsAGrzpZa",
  "key7": "DkBot66tJmN3L5KZhqztn5s3zA76oHAMYx4agikT3hEutaxTYNP1RNHk9Ri5gWDG1ssqPDDEdjtbDwBJ8zmmBm6",
  "key8": "5pajonjGsBLRdaMo7woymh1WtUuwAszLzFh88vPiXc22yx8NNfUwWiwYyW2T4morAfyvFrQfQGeK95G3NbnYX4Uq",
  "key9": "wbgaavD538vBAjzpdQraLmdtTtrtFN8EcoSHMS9Woz2Ti36pNFangrMkDyH1d7e4RWuZ6hkrCbFxxAe96aUE6tG",
  "key10": "2re3yGJdF6AmnycU48DAyJf748cSsZiCYLL7eECSHDKsJTqoKi8zWpNrwYJGEKnsdSUEmLngR11LZp1Dw2Dkmkh1",
  "key11": "3iNvwTZn1MrCKF7Cp8L9V1Cno2o164LBF5mV4MyJTYFQCk8n42s3YxGn6LvNPziz15aH3F2miZBWheBNN6sNGCgG",
  "key12": "5AjAP9ZBeJfVk1aXSbj9veMh4HJE1UKCTWSvmsZZD1L9bXB7qNCxztWSFZS7FpMeqJQhKSS4irjYFi2riUX9jjPu",
  "key13": "3DTci1XwVzzxHJnrbnWCfaFDPxAupQFUDL18gtzXAqKsKn4jNaHWeqMyeVtuV51znDeAdPj2HxZAp1vorcBspUtD",
  "key14": "3xcxf1FL5pZCrhwJt6P4PtN6g2PmqCpZ79JwRAKnAzEmCdC35UsFYWewP2uoYzkqnLMumfCq6xBozy849jtGFStx",
  "key15": "3a6fH53FM84pQC3mPxaAG4Rw9Jchy76xsNEsazAYsEQEdd4oMVdNVsbQHTtQJvv8DSCj3umC1X3YCmFnNMveLta9",
  "key16": "2JN4R4445bg677p55MT2oi9f5Fq6f1yqoexGNsNDEm7zjR3fcPnt7T62FFUMNHE3YzTuGEvtCPp9DFnFLkdn6ehp",
  "key17": "4qyj38dW1NCzSpARq2CXFqN52yXvbDm9HjY1qkRcFmSenKvdkG6UP81hinYCrYAjfqBJstqcxvTSUYgT5XtuAwtM",
  "key18": "2jH75iu3QEoPA4JcMYrSZaFZXGqzwmkbJVuySWQFC43267ydCRL9bRLXQFsDf8Gny56SGt3MjKbDAZgLY2Szse7Y",
  "key19": "4GsfHNKKFe2ak8NMJmwcJkQrMyxN4bvxUpYmUHreSXD41nQ85NHcDYpN7bTSyL2eFa4gN6VooMuTKM42G4VjDq9e",
  "key20": "2UFWbHAdqcP8MpLkFwX15K9dcsLEAE5ZxRM2XZadviqRfNXTfBGxPHWDKJsD28VUMyfdwtXToanEHCGgfRk6k6Nm",
  "key21": "TpCqXf6n7HirGfsKbbt23Z7eYyx8dcvwpyXypNCzFFfDeZLihT3F5vAxFJMMRTMraoxGbAHxTqCiZVnvSia8ti9",
  "key22": "QHKmj33S1c9s4xVj8mrPfNhWefFaP2dRx7g9ZT9eiSFAhzsa8nzJLrYY9FeYb84KFigLpxyXZFFX64nkYv4UfZK",
  "key23": "3J8XZx76AoqmQep8F3Dij2a7VDo7Que1NAeXrZVq9FE2A8cdeRgL5BCNZDBRviwXbLwqkp6jAZQkt6Gdg1dyzPjS",
  "key24": "2DxNkMRhJbNMHxGKXPqzqzEp6nt3PynR6nHBT3hAt8DtndfzzZCzc5uaYH6YQwLMCwsSb4wHWvUWer97RXdv6umY",
  "key25": "3V3rvyJWC16JZPxiWSWDd7Cx2X4tY1PqVqjQCAqw9N8q7pDVpqxCzRQuDUYxeUpvmiQ75tCt5KxVvtpY99VGCUiZ",
  "key26": "tYe7zWKvkJneKMvxho1wprXk5xEteZzrLWpwqy99JRXjoSDFjT3jm1UqByJnv7WEAxLRQk82LsaG6n1aTvvBARE",
  "key27": "4gFZNVrRgEN4rYNY1n9FACiknWcJNABv3vQNRpYnmeqjCSizTQgBDJDPZbLZAg8Gc9RqaKbffNtK4gwnQrRBjh2p",
  "key28": "5hgEUmoLWYkeqFi7VLFppANWPcY4uiu8GZ5DTphwKaDQBRecKNJUaFiSfFWM4b5Uv5WNnJKcznE7DhRYreQ3z1bn",
  "key29": "cbvPX8BjCAknAiiRcLaMeHaWGa43gKRVhviopuCq69MvV4TaD7rMFxagrhA2ExM82t9Ns5YofFtNtD91EyU1MVD",
  "key30": "5LkzP5PyQRHiVVEZf6NESY54ZujVPYvEsYmjj2jgadWG1mdLM2o31EMVQBUDG9Z4V14igwU2942q1rP6xMRqwFMB",
  "key31": "3cB37AswHfwE2eGjCA7ppXLXUGuaJ2shriPzdeKDrkpscBGxJKWYWmsVbHKK7QqVBJ9Fx1GummBCc3CJ82i6QYkU",
  "key32": "3xUMRgsWwTkZ4Z8ftFCQdER4zpntcyKcqQ4jgNGqvj7KBcgyMqaSAQwHmFo7JrTPUtDxs7E93voF9H41of83HN1o",
  "key33": "i8XDWMBbssZfMSEgdaZzTbbNCRJm2mn14NGm4k7i8yqVubzWgsyAW3xxkittDr3ui6gtF3KR51LD46v7x8L46Fd",
  "key34": "4hGpS9MxV5gRc8hqebf8gaffPAPSp9c8aXKxQKRsRqUpHEFrriqfC3xoSnpfVAKZ7ABc9rk8zSevLgXdW6tn36i6",
  "key35": "eFnmezkyrK1diWUGyHQsQM1gcxTxpd3LU63iKSigbeTWgZpMgxZFuyCLm6SqPqh9AzHBSt1jpyCHvg8rZBE1txx",
  "key36": "2N1kMsfgmdwcy2AzdtzRayYdqma1hokCAaFWgUPkY9Se7NXFs2RykZ3sjXS3YPsvw92kyv98bq4zvMdHwFjM89oQ"
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
