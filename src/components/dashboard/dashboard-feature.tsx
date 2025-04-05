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
    "376Upfg5W3fWV8uoZTeivU3CenV5MEZG3anjeN3FEaKesCKb6b4jARSmjTbDnkHh3wgkEQCdeKqrjtxk4Tp1X8NT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63JgHAuW9D1F28VsdNRD55E8cRkRsVHuaT3rkRASFWtiQR7RAcEu6ymiVEo3vme9i5PWRRgFWnTMVSKmug6RW4me",
  "key1": "23VBNfsij8BsuNe56jN8VhowZzfxGjBzm27tsWUY6saPCeUs4gcKjmoNAwdsmVFkhqXi5C5Lsg672UaUSz9JhQV6",
  "key2": "kDRwswJH2DRwh94ny9X6rhJxo5jXR97TqN7sh1nfBztr5cnA1uUMmYKDWjeUpu6Dp69uW3DVCm1aF5EYvG962fq",
  "key3": "4Qg9N8Qk5Jps38ZuigQnvLjVeGKVStfQW68fuPZq3Y8ashnbpS3PcWvSsVBprwraWqNRYKucmAPLG1a3Xc26CRZ",
  "key4": "N3iQZJfWaa3kMb48im1SSQtHR1SNXNDUvDssZGEJtSDQZqDLHadEZKYxQ6VwrWEgRQ8Z8s7s75Wi19UpUzKTkGZ",
  "key5": "2Xn5TrqdPfe72SboGLKzS48fH6ntmAAjf6btuNfpdAWxzTY2D2LjNLz2FuKHBQXTtbNSKf47yHiQ3pfWCrn5JizC",
  "key6": "QfFmgu3HWhJ93uZ9z9Ba2YdzESvsyVd6p92x8a8aJM2Ld4jo18J49xCLuTrzLgRy8VUAyQjkwfpYBTrMiXUTrC1",
  "key7": "Go3LRaVs1XqMtcW9RPRMCx6aBR15AFxt4J9ZfDCWaTiskhXCwtU3dT7VRjJ7nKmf3bBmUDkqbAzA4Y48CWRsw4i",
  "key8": "38Qw2NAzdjcPznqzFHqPFKqj5SymUWjTGs6o1tBcDC6SEcBUUygaEvVSaDKhYeUggX9mcA4ghRpQDeV5bSkEWzBV",
  "key9": "4RqoSvSh7SKueiBM3CNqK5qip1ie3K6Jzx2fpnMFhxGx9hvPWwUoWCFXgJbSwF3oAz6KKsuMJLXw21oqTQMEFbqs",
  "key10": "2ci9SyhREZGADGjmDh3op6U85ZdJVUZgVn5tY9y4QQ64iKh98kVoVq6rYafdx4F8JrUdpcSkNTNzQZsYd9U6QSGK",
  "key11": "48dfDDqY5f9JA6MkBdHfpVv1xoA9S4XVAasL6fkLaDTpmYUkfhrfcqX3RiQcEt2re4sxWavwmLhP8Z2fFESxHq7e",
  "key12": "5DoD9T5iSwbqpeWtQfRaofMPjSmKNt1D7xtyyYiUMMtHtmAE4BQFU95bE7XFY7LndqbzN7KLc9J6nZoF1Bn6H8N",
  "key13": "3ZZnwmPdErXQvp45uMqijt6C4MsEMT7igxZ4CBrpQ4mtXSZC8722GUSKUJQeUEVrqsEAUQuYst8C4pFq2ptM1o7Y",
  "key14": "5pwrWEkBzD8L8ePUA8utw6GTg4XjR2tBux4VUJb6nDKRcqkG3qLriBTpwRewM7F8BSdGxJ4pXMBJCaikgSoUAnCZ",
  "key15": "4Q7EMRzPSUhEBnsRnTw4cwvo4qDgdvmuVKrfiT761rWVRShXMWjdyRHoyxFTib4xNeTH1HBbaTQYEQthc6tpAtsx",
  "key16": "munJwSeCZWEN5xSHS8BdmkahEWnRMpahmXkNtHkr1Hp6moMikr1F4GnnM9DJMubAtBQtwvRWBjCwjEgdGKqFSLc",
  "key17": "3eWP5rUnSoerUZqkueztrCd9qxwpPEuaihZJDgWTpinn4nJxK5GBQEh5ZRDJwQfqj4B7ck4WmJkCFL6rDD8gB3W7",
  "key18": "5SAUc6Jw8WMUHDezDYDYvoei6j5KdiokwVXr26tCfHmpZ7M23DSUVMNUiid98CwNx8w7FPzTzbmo7JAv4keAGdtZ",
  "key19": "3nemeUe8F3U3zWS8emuegkxJG7cdyXeQrqUpV4Um2pLKM9T8ppYJS3vtjghucy6JiV4ZfjECK4J3BLA72X232QK9",
  "key20": "4uqswto964vKE6VgLL7gBCcvL1emg3o4oTgdpNYsrXbQCzZmv3nWy8f12mT4V2ZTox3xYmtnT49fg1B6aZ74hkng",
  "key21": "uBYD41R3w56pU7MCKfKnt4UaGj3vyKXLZE6Ci8gXp6YcGzuWrdDkVSKktJKeVouDzFaarqeffLjwLDKZuniMskx",
  "key22": "bxS99jG7EVmEeyQcqDXb2Ftge6nKjD7ry42i2mEDKTVkBnt5PomF4sWhHkJon8nBTFbdyDAr6tiiSu4vD9mwkgy",
  "key23": "2eXRGLQTdb3ESJF4DK5qjFBVz4qgsgqtTyt1BnHWJ8pezu9fpcFC9Ffdk1kYoHVaGXbGZxCkEYBvbWNRvbp79TY8",
  "key24": "2LCzM7kfw15iiLsXwTfFt1rVN7TLN3QEf2NeHdjMCREy7GxtZBC35Rst6y8REafWi35nYouVV1mHBr37NmgTw2TV",
  "key25": "2czhqxMeMGHGCU7MqUpNnognghouV1TBBhAwF739dW4HgWgScBaeM8tLNf5AvgCND51hwkFB91ubFWa6cPoYEsRJ",
  "key26": "2At7zEPfZfsjT2YSHADpcVgmQHWm3oq2HKGSpZHfwuDXXVTvV2bx4YAUWqn5H3qpyFau68j83ez42z7eetUqEaph",
  "key27": "ewJ4bqqHXK9K7qvRkudHh51wmr6Q1g1d2tQrzJTPcUbgqJ2tdDVXqcDxJq1wiY4n9eQnJ8iEUoR9qLH9uBmUMoY",
  "key28": "k3T3XrydRmXXT5gJgnpRpn6x3CuXQH7yDpshdjY3bgRBRkoAFRhtwts5HxXZhGGB6BiBHJYxUe8czYh6W7sZCNJ",
  "key29": "2J4ZbXgP1EC5TdDsKxVs9nAPLwMCaZxzfo9wh3nMxNdcL3R5W9cKtMhYfSwx2CRBv6k8cPsozreuXGhd9r1f5oxm",
  "key30": "1EGt3eNiDJgwYU1SvSuNjvpDnmVkye221UjkFFznDcPb8cYGEPFyxKBcBRyh6oBVUtTAZ9dpC5tx1BqsDKxrSjo",
  "key31": "4b8nLmuvHdf5isx9rAEjVjnMp9Jp2i8HYNeFnoeTAb8eN2LSrZzjQjUSPvNYyuo1QkrgEpZkNXfUQSDufDd1gw2H",
  "key32": "3oM33Bn31rEVXNPKb9mSEtrBSDxjPayc9C4dUZ3HCEWN9vnpHH7ihRhMTpNLXREEFm3cB5hS8gKFApZjYFJTJAPJ",
  "key33": "4DU2ZqdCZHqey8xkM5gDTZDL5EppzgSZQHUPxcJZkix4X9Mrhc6bnsGfBZ9yQyDH7B3vnbcKKVA9nPCfTR2eceHr",
  "key34": "oS1eFQ8pfvbaNY9pzpWwbNTgXX5De2546efMAtt8RqqFoLjSbEEcFTPWDsqJKSmGSDZik3wkSEZ2Z2K3e4Yocku",
  "key35": "3P9BNEjNBLPzVuCo2hwrLCPYpiMnN2quVvYZBKM5isgW4g1sNgSBgNZLa4SSZH38RH9f2cZXbfEvnxo3xvBsmCt3",
  "key36": "3T61UZZNUaUSctSR4i5UdhxWicymVdj8dRnnji56LHy3yJfxo7TJJ6Gfh4oZLUh9rfavyP5rppaeRhaa2RKQREux",
  "key37": "4GD4qCvnw9grwmhN9P89yiFkcuhiP9vWgFra76hxb5XzfCXBxctYeEP2VKcPpx6apHsx22NUA5tceV9SqWMVFmor",
  "key38": "3pKinnjwmxxw82vdUrNhDrxcBHxZsW2NuZoFoEs6Fq2qzf1R5YPWLDMuqNRkUf4qTkGz2M8kH7xXoUJcK3LNvhSP",
  "key39": "3AFJCd5d1BMpqTsqXYBS2NUk2Kt266nnyrkRTcpbAXYqRcEboUXykfrpY3ub6rpJh4JhAEBbqci3F4MN4km9qSRp",
  "key40": "58VeMfpCVLUPeaebN5jvEg543fDnCjzK3NmLLEmYebvvNHCvWUsVLFGiCkxM8C4TEHw4FWazKS3BRYEj3vDrY59C",
  "key41": "3Lnn3WqcBNBR6CEVAcfmWxL6uvTro4xo9CNmhNkt3Y7rhsvpKPBUEeskctCpzHaucZx6gQUydb1hvTpHJiuMW85G",
  "key42": "2zPmvTR3x3moiH7GYW7tGGdDApidzEgCzPkKmtq4nJvzGH2ayQEUtqgdg1b58RqcYbhh7jxx6sk8mrN6FMdh2sRT",
  "key43": "25HQdtbVBsp7bEcsY23zVHUeudZkjfu2uHPkD4ibpTFer3CyLUKievyNfN1qREKW6Ue6h1rRXa6bFNiG57PxudGK"
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
