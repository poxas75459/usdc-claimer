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
    "5yws1RkvR3QWScAK8LuK9wFGR4oL4TDZo4Mok2G4P4CWsVJzqDmfJYJMHGz3rPdcHQR6Sf49wKEL7fDYJWU8Xg4Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TafM4yq1DZo7RKwQresCTTncYhYq4gzDC8AfT6MXJmdMYeNwxZjMDy7duTAKeVrStEb1NfHXMnvMRfTJhGG2Uhs",
  "key1": "5S1iearL8nGfdgusyDy8pQwfVVfmYQa4XYE2UYRhGQQ6vqka5rXwJmFT7DDz1qVqrE3ztUrvMTXiJBmJwK841bVF",
  "key2": "2cj4eq7z1m53g6g7bUgQarKPX5fBhiYnGnCG49YvAaN841ciz4rkLdAQwN1d3Qh155dUNySoHReQhMdJrJWwWEBJ",
  "key3": "4ALg7M4QmArQ5v1M7aKj4ZTcXi2JEjzA2CzfdSd1Jn8uEMGNyFiKfFNUqEAUKZ2V5utG62dYEXCWA3KkfNYbnspL",
  "key4": "3osGuxfmscAZqkhuqGuTiN9U1cXd3omfmBb9KqNi8CjCbHXZapwqFy1ADDeAKAK8U96zV69oDMRmjqTVUYoLBmys",
  "key5": "5dTk35rPEmrjfzRcWyVM1uEttBVfBVaMRwKNhFqEiZEZe34xLDhDYrc1AXZErmXFsqtr6wFVZcG7auPfaxi7uUuy",
  "key6": "2MorCMW7t47si8JvAKT1B2TWb7ebNLtnux49Es9JtK77ihiB4qfVYHPActa2NGeTkgg9nPKpo2onP2Hokbr4mwMm",
  "key7": "CJgMy4ehvYW94ddB1vTV1pv1DCnxktURGPbP94qdHaiBq3CVTZeU32pHaWtDE9wN3xLWL5PQkpH9Mo8pP7JpURf",
  "key8": "4X3M3TxsjUnL3vHdCvjDK1whWeSntaSUCCd6SzNFiB8CkST5b8iMFi5LDr6GCtd4cJGyFLZ4LRX8WDi8CTatpsNn",
  "key9": "2GHXMaRk1QYbXzCTote4VYu4Wezy2hJnw72UGeUPhM7hX9wnbDEpbXP3tyC6tuBDyiDaKXnxyU5AHqNSLB5vhL1d",
  "key10": "5Uk3oNMYpoNwpJ8brB6fRGZVoeVKSEzDC7J3y8rHoqLAaaEGwBqhbaaqjR1xGSMeE4mqSGBGMKf9ctmBU3GABZvH",
  "key11": "5hHkDsvbgJVrgki12sixr24iQaFUWPVrzthJY1Kuv1kodNxZ3qVGmzsTDJLDZzLDjGLDfXrGYvftUGH4o6VQGzD6",
  "key12": "2y9ESszraCH6zuxJqj3r4CFZLev62qxYEmkwmN9obmyBbKuBTUw8Ywf338JGxGHjwtbj9kn7sEAxUHVDeeNr69ks",
  "key13": "3abW6paexGeURnE5mqBSPdDXEUpdRcuSVJ2bzzojg8VxyCca5b4d9CdqcTg6QHMsAo1dDT3Cbp15TYjsqfb2G9NJ",
  "key14": "5pMsr2R4bRCvU1a53pHBqNV2bsoJ5r2dMBSQ2U1cAsdTKecbADNdsiMqLnomuyHAvxTs6KducyEJyhhiYc5nGLEn",
  "key15": "2aYfBQLLpqTjBwruZrmWtdFvXUSBpBeuQ3BycNjmRyADhmkXRjoNCix2W7vdzxgckQDP94NqPZFjCdydQE2NzcbE",
  "key16": "2q6SYJiwj2a3fF8QEAABrYWFag3X8raAkQZGEwEHxo84joEZ9PeVWopZsUYfLtq3zrKcb2uRoxeHxdp4HEeEgZd1",
  "key17": "3HEU6Ev7VmhC1e8yyD2QfHfq7DWWy4uTc1WH1RbFyAFmd8sYfAKdpPT2tx2ZFGvT5SBkLMNyUpuLVBi8qPEZPBoB",
  "key18": "4JAHrqF1fHGoGj4LrQUiKF2tCVb81cQprrVbSvvT2vrKpv5aRKES7iFNYVSVdzMgZeqFz3jvHFAfaGSHNXGMSVS5",
  "key19": "3KWHcWfopuf77cy6F7AfbjcDuc2JNzYuHNeaVrEvVy8XUY4ry3kypPsND4UsaCWrWgDKJ93ZQxVmQSkXANY4kZBa",
  "key20": "5pPi6hjZBhrWtkN3WFMpdqDUeEBszjCD6TSZMRNWFbb1jLKQoQwy1EcU9oG2dSuUz4YDtNbAgEHo2N2s9sVt54P6",
  "key21": "AD1egGgYEwCorWUuoiCyFGwubPPCa3uEjLhKidxnYehGh7DC1jvJTBuNnaVM2CDAi6rtuSZPMYs2zkHYhrJaU35",
  "key22": "pikyBFWA1hHdJFkpyyw8ZFtEpFtFs7iV4RCQhfCWt2tFY3Mh38LooFb8ZfgQBhe4qf1gSykdHsSdjV7ZGC3XzZi",
  "key23": "4w9cXEukKaz2oWkQn2H9y9dF83K5YFVrKgsgA7Vi4KmiLBCd8WUrjwVZJG8svL6M5Nuyna6nt7pwJENatnT3aCrC",
  "key24": "2xkdc5czEpofNQ8xmL7iRbbvbuNcbqWJVDZa8meGQUamWM4rrQTBygsFrPU44ZibQ9w4hLdVeovBNAS8xLwLbT8H",
  "key25": "5TbA6UeZyzVB1Pg27QFoHbXvk4L6FkepFLnU81kuhTeLDtNTiARTAd36k24iaq9f8SVYRsWi9Q6kjDmA48XChqVQ",
  "key26": "eD8ac41wiWdmfDeE87yh5fz14Va7ukU7enUQ5PcdyjtPfA6r4RJwNK82NZimRMzRWBdxeb5YLCkWfDogkBJr48u",
  "key27": "4k4NkvGzvLMZ72mQNvb7rqRdo9eHXmHgz6yKBNXK3ZqQ4cQetGT3fVZhMRkn4f6tBwMmH6S3cgmotRko8MYD4wnQ"
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
