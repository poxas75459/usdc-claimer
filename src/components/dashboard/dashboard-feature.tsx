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
    "UF8ZR2f8tTdg8KgwbG22NrAoNhQajFz9Ny62DUmvS2tuXc2cF9n2DA428XAM6MWTTcZwmjfgfiV9kmj4HsZJkeP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ppUahTBFvdhsAbyAHJFxNjmuGPx8UBpDs1iAD5bEaTtK3qJYzmBzem4dZLUWMC5MMD8TMLbbdGGZDkVSeqULjsY",
  "key1": "5hz3pAEZtN6MyE5iSfzZHTL8qY1zqr9q4nKfC8Y9hdWVMZcX65oCGwprtnzqcS4KkqKtsMTB9hCVkkeaTKPXufdw",
  "key2": "giBTd7GfynmHGsqeAk7SXwWhk3MNr6Z4DXHceoE5LzepGqu6TQMkhtP9gGBUKS4kj9C5h5z7YsNLVWptY3FkvTV",
  "key3": "2o5U9KAK9XKrnCtTFysgdWFQAqq4J38VYdf3hrUdX57qzyHUHywK2kY3wpU8ihdQu7dczkGafhfFgjkuhp5NeCwN",
  "key4": "3AgwCRWX95Jev6c3iY6gKYsFiqtvK4WpyUnCRBREQyDjd741UNFjyXPFyHTvqDKd4rZZiKwxcbndFLtbqgahw5ro",
  "key5": "3nNrZePRZho2nrKbyyFZDtM43yACXfdEr5huUfBhAvPPP3o7p6ViXgnPSrFogdLrXfCDZSpPnsrVpofv8TT8XJyk",
  "key6": "3RxsD8Nu4ke5WkMMsveFzpQmCLYh6t1GTuPhzCACd9Jop86knXscZ5L4tBRg9a1o5HYDT3ATZeEKbwE1pb21JHU2",
  "key7": "3qBtZJAbzuoe4mRmSvB8yyZrbXadqNRbKdTjHuaySKwMravUEeKeFbeV4u6D2ZiHwT6GhfBknpv3G6sDnxUduGmU",
  "key8": "2xHETqBDNbF89ZFDeyeg7bwdf1uj21CHDxNtPuex5Bc5wfnPkGtofeQ8sKJbANbMAtuf56v2CtqwaCiNkZ6QEbuG",
  "key9": "5bXzkNVGbuPfd8eDVzcrH4aKdiHqtDHpK1H3x2hXYnqUeMqGvL9jA93kRVK9f4cFgndikJXgF2g4R86DxmVRK8u9",
  "key10": "5rAccFNDCYq68McHM48TqvGSqZSvYB4mRPmfnVMNbEFqCJiZaBHjxY1Pmwm47Trt7Cm4i6CTbkUSD7hgkYhdWq8e",
  "key11": "28kPpeYAupPZeeRF9cURogeu1txDBXNq4bmz6D8Cz9Lvhp5ghT3EGkQD9G5hSbPPf1T2wrzo2Le55WVBQmLL92xM",
  "key12": "2h4KFAiRv9MU4XJpzU8YgpMFFPwGpnjsGgfEfwzJzJANVUGgT57Pp9eMuCDhqwb1oo7wVg13d6t6dykXSYCDiHDZ",
  "key13": "3k7fX2PBqP89mqNPtxffPXwtqf72HTyJ1wBAp9qk27xtnDw3NLrp1gSQAP3gXSGYT6CpGjpcUq65SULHz8rUQyEu",
  "key14": "66RzZh1YwpreTbgH1tffRuuK7w54PUeH2eotVV5HKNwhFbzg8LRprFWK9temrhCxxEtDf1e5jVvVMPAKpan5NwAt",
  "key15": "jYQktHnYvYzWndNFpREjGDFicvT3vhVMf2zbp7mvu6KYz9pVnK26humnSN1PByTqowhiv7fUYpoBuVeHfL7y6mq",
  "key16": "5pznch4tyXZzcUVwJ4NaTs2KxMjAB9MYEKMtZvgDCGjqYznYFAZQQgiV2Tfk2f8EQromDRUCS461zv4XzNxo4cyg",
  "key17": "3bpnmTMfeQgVgNG7ZeCuUBULryDEj27ogtp37otA4FtQTBUXg4qgXH72Fr584gNvE6ZhgcRijUAG8LmzA2uAVZx3",
  "key18": "3HxRACEMytpAsxxseQXwYEeUQszWpft21JvYxqkjzrjGXkNoyksAY6e3ppHTKmZsT4U837qacDeAR2kQMsfJJAbL",
  "key19": "23dtSSMFveJTygbV4BVaVUnjdGby6hc4sE7EGUY9C5BiTqCpWbb4xVJSbw8GrmhZcbHqtiadvLcEcB5BN2BwbcGE",
  "key20": "3QogoYZrhSUQ4gR8CNfDsFKWJ53YzQtrDoeEjWb4fYDypSRtnfutcML6xV1obN6Asupp5fvHcdBChHt1kowR6Dww",
  "key21": "24wZc1ku1d5kQbsDNDcWv6TFVd2fonp2iBPLbuWVQMLFgMrfw7GKN6GY2K8fFiyr2cdCMExg1dssXHU4GB86hVvm",
  "key22": "3EZ4MbVY6stFD9FWKV1wsaVijMtF1d7hJwRJxqxZSqUqosxXxJS5SbTVLNM6kvKixUivB2zdi67SxoQKmstZAGAs",
  "key23": "4Mn1WhNnvUaNevMQ7MrGsA1fenQrbm2w5bH5puH9n3iLoWtpFyE7Axa95ygvmtAwvbw8UoRX9Py4vefJLN24vmnq",
  "key24": "a8Y4jF3YzKqtmRMSX1zQzwFodQEuX1dWsSJ1LfDmVauY8Q23XEG6PoaLPjd5gHG3w8LHGVK2GzqKL17F1NYY2Xp",
  "key25": "M3zp7dASLpjKu9ePdtL5Ea9QkQA1DNpPh6odp3ADMoCsQ5MNhh17Xr56dSHYd6aVNE5MCMAPoX7Dm1EkJzyxCNS",
  "key26": "ndx3RBvw3PooHYsBLZa2jdeTFeMLpTUBkZcfDdfpd8CwVN2qyTHGqb9VLSom8i2mr4gfHcz1qWCYo443CTiViCS",
  "key27": "ohyPyKtLskyPYV6NcbNU2mogmJKY8uzmmnt6bguxcsz8AjZWHq2F7X65iZfRSUuua8H2ZebekMdHpMG5reWr2Vu",
  "key28": "2MB6n7r3ZovQdn5P9c2rB7xMCVctSspVftiQhCfXXKzrNzRp8FvxZRyWKCtMybfQNYh1yeGz4746WPt1AYa4vRuo",
  "key29": "2NoafyCaNRTYgmUKWTpmBCWvR3n6xwjQdfJCJLVDtJdj5CrQuTjAhd3ZUAGwjdkJtU6Z45gYR63vo5JTiJydEmqq",
  "key30": "4mNahzfFUJiy8JhiGzTtJpL7FXQ13a3Tt4CJyhU31J99xMeNDq8kmaxjE4eag3Eq9Tt5ue4GsF7iFQJ2vbwY7fSS"
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
