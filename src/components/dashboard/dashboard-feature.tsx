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
    "5tx1P3bsnkHwCfGKLopBgBPV6iYiB46ieJTtbFTcjYpypZ872jtV1GWdXsX41CxHp8mLZwZnVKsvDvd83BWFZNEt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R5DH7Q7TxuYYs9CweUiHkXHEhWBYd6hwEzH1zMZGJA2F4U95b8jhK6edY6rDQn3PDKzuoHKBj325pZk5aXKSmpr",
  "key1": "8awYx1R15SCNUKW6hdtrRnUdPu6vkbCfQU94BrSZTpFvFAaVsy9qg72zrMdF1uHZ3FAdSCEVpStBZzeQh1Twgbi",
  "key2": "3viRAamSj7HngFVhVVAn5iEgwNdhamC7rdt7zoyKLUQnbTZnjymPmEdwuWvGW9YMR8pV7kcW1XPRfNW379jDf3Qq",
  "key3": "42YkjPNLc6vN9YNzAJGoFK2HFHYi6qfMPHKvineU2P6nCLYiKjqBkzLFvxBmWwpKPHuZhXYZCzNL9ZiYnt93cTGA",
  "key4": "2o5k6VRw6S57D4KyVpTr1UvDD5zoBhfTkQUCvmzjZpB4cwcPDAsAgkpof3rjb5Qt6Sgf7m6ctoE9UZNWSRW4ShVL",
  "key5": "471wrJiv7rcUn5uKCubYHhZQjBwUdnqkVJxDtNgHXcT6iEsKCFRT8Kot4hhzUSNAGrn7xkEs8fs6LxJpwYPnk3xS",
  "key6": "5ipM9j3AUd4vLAfdDL99xaV6CenMkrJYpi2SqaKqwKLsbou1wVWsvWMGPD5soVm1HZxHNGGUEJyJnCDYq4RJ5oVF",
  "key7": "3baJRRfZTqn3XWfdAPvL52nLtQMMs5iSSpM9g4oiP2HNGFPMjNYB4fPMjVMue61sAKYQipQGVpLEddbt2bm6yeRm",
  "key8": "juLwNDFzLqakPp51D2HbEyxrtGQu78Es2H9bKyRULCucCxgM5PgbNzooLmAPf26bmyN49r5DwcHh3iWKnjT2rWE",
  "key9": "tf2Jo37AMFAPEyEaav56AqZ3Nt2BnjJiRhugHvDL5EmSNND5Y8tfMzkPo89Ga9Vvfdha6sfA77e1V6RHt98S1Pr",
  "key10": "3rFmeX3NsnLELEVikoZqx82dx6E3JsZE4jj1BJEeHy5bqts3vKLe2W1q7h2Z7gVpPccZvEMyMv2BcCWUXSaNdX6",
  "key11": "3WKn1Tu7VHPihJeK3UEFv1ccK1JRjHbQDuLjA3nZ2979wgeDXBatsHchEY4ZyB3FxngVhTXFYpHggwaXfyLavzeY",
  "key12": "45VKxtGojE8bHdXv3ozM1XfLLvwSQVNcRzir8kTdwTTK6ikucetiyTkQsFnyjiRoSkatMKWt74ArAZ9jGVsaE2r6",
  "key13": "ewh8G49doEQHZmL6uTZFUGbe1UHDLtXs8tS9vn1qfK8um6kQ8c3KjnmN2tdQ3AUiDG7zGmTxhHseg165n1tpJen",
  "key14": "5dJELus5uALShByGccPfJ4kND2DoRCudHLxp6VKzUcrbBFYvBeccR9SnpqbhxyYBbzdga98EGTMU9iWEH3AP3fT8",
  "key15": "3GG2eiURcMDvFQ9iwwCAjqvQTXn3JkPDdLymbaGtCJyJpeQmPbnr5s6rDi5mn7u8i1fcACyJVCqWZbBPUhVJG79A",
  "key16": "2Zi7LnwX7EERVLwymdcyVLnLdMGN8KNRaZbfVoYy6jsRTYTB7tFAZSQ4evXRvXK2sdq9D2waQ3CLqX5ahmD5XMkF",
  "key17": "4wUEJbFzxABDKGe4q38H55Zej2XPcaWvPgTc35weDCw156WmBNhaVRQzr94zgzdQumK1YU8MheVtao2Tr33yhgkV",
  "key18": "48Yn3bhQPFwCjoKzsapkp5UTxqnFJbE6Lqm3PFK2NiA9uh5a85ooNV3QWhGMNaFoqgDud595enSJUPpdfQ8MDJ1W",
  "key19": "5waCS8K9frddXht9ZnfhAQmhNaEQzEBTnxdE8UDzDfbLaNtxf9LCrCSEUGrLCdyn4bpJCDTZpEXdfJ523L1HTqNf",
  "key20": "Y6ANVgbkaEaxqJpd9rBBkp5JCTU2Z7VfhDNBrMVDCUGvPQbFbUDVwBEDArSejwdB5foJvJejy7utgTe2aQwB24t",
  "key21": "wFz8HyPKWpU713myy6iN4yJwA5v7kzToWuV5HYL8HwTSuRZsk43K2N7mZkFarSovP2EbaYdeta9JFGMC7aMnHdB",
  "key22": "yUvVztk4mkkoSnaCe5uWQJRaqdEL3vw3zss9kkHW7E1d24nfXLUEG2673cgUBFTQasHQY2h1phtHLg8PVbk2WHT",
  "key23": "3Ea6fk4fxZXjRJKNnnBJ9nEjFJCEtjMGVL8mZ7LCD7e3M9JKqc8SWzK7TSeMywwjXJT3zwRy53aZx7Qkn3pbHnMU",
  "key24": "24j2y9NMMcAncXBDJQTf8Z1KZ9dsDc2XNnBuxMdpED8DAqArPtvM9FBvCEU9TDJoHxnR5LEcEs4NPGTRGPXEKtqH",
  "key25": "5n7gJodLth16SUgUfGGEQrsW8o9fmUKyBABpofUNjzCZT3VFskD5VKMx9zcLTnB5hjQfMtWqHzx2ENuLvidd9w62",
  "key26": "3XnwadxG1GJZrAUmiVYA2Xnbqmpd58uQksSuT5sJkKnYQLJZhTJDUabBMQtCKFu83LUB9ZoZmJ9Yq3GUDNYfArDW",
  "key27": "3BtE2KL2VqvbYH2ouGtHnSa35EmdhG9vMtmsQ7JC9LuXm3ijvP8R8eB3e1psny5qzycTjEU97rkUNqWNKeqhGgEM",
  "key28": "2e4zkocbnyWdbZ6P4YPrWPwWkhSA8vJB9ZpgKk1qxJyMxpmdfjyowr8j7E9yTBZwwnNVrPCRNcybE4dh6zK3xFr2",
  "key29": "4i7f5t1Tczf7BVkGgmpg8T1qvuFnbvyR4DDqwZyFd55VmHgSmBJ5o7fPTJVuA8znLqHCEwv3zoDVAsnitcy79Ees",
  "key30": "46CoijoLAUWc8RCJ7ufC5NNVuKQTGzT3RdZoVGhN6HAkUyLd61W8VCPPvq7NbqpSeV1DLU64GuZ9DjcVfSamMrJk",
  "key31": "4J7dyZMCvWR3mu3stg8iBqSyMvrNMfEcVE1iwnx1seBhSDiokEgvqaipkQmZ7utNhh9ApgCjJTwRnh4a7aD8h3YG",
  "key32": "2GSJY1A85DHJXY26bLQuGF4XBZxy96e9hybPxThP3Mg9MXD4pBm3b9XUh2MHwUe7aPcQp4LieUP1U77hStrpdsrv",
  "key33": "4uHZESDuHAVPEi91TsLTmGA3fbNoRVxiLkcBmfLJh2ejSSzy4BPJs8JMZdN6jsJFkPCgo8u9W8R4c6Mxj7i5UYeF",
  "key34": "2fbDsPryVTHXUYdvEub3TKEZcWhe5W27jmRymZPg1GvJBxC2dLDmxPTF2pGj6Xj7VW36DGWiPaXnw5hgvXVwUkDg",
  "key35": "2cSVZajVuPcnPWma41ogDGyJtfbqncbUbewrUuoDkrLgxEwo8uVTPfZxJ4BNR7zSSwFtYVX3RrpfyFgeta64R5uD",
  "key36": "4jMfcXUFcCjyv37R5kvbwd7aXn5JqrcGsJ57BV1WjVrk9m7zhendXHDqegq9P6gZG26UyExhzvX4SjJGYJpfkNF7"
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
