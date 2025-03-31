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
    "5hynRi4w9tvcDT6Ux6FX7LdP8PFa4WnmmLikueYvRFfNcwgRBrQhK2TsdLfdW6GaCUFDxzKVEAAkLxoHUZV6idnz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21DpFXhmBBVTueme7HdfeHB8hCnHzErz7Lcx4SBniBdZq9HDKyKYtTr98Bn8NJyWnf2SG6WvXq5F4wQgDQuPSSxD",
  "key1": "4dcE52Eg2pT1g5BCHunU917jWHYmXxCgDDB2eVt6SibUQPyvVneduohF7Db9vTScvjigrxs7PKJnkyeuumCih6QE",
  "key2": "3HsktDGJ5JG8nNNAGC5hWksEn9xbYMRBhawzxxnTh8UbSY9tmn4rne9puBUs8qkwFxs4H4WQyXGyU36P6NZQy5xT",
  "key3": "vfbRbVpHgVErPcV3DtpA5gh6R5Hm4oy8ogQSHV6w6xStwvKtgvLkA21bXN66sY3sRQ2f2jQmsBFhuYfTjUvxzWf",
  "key4": "53P1h9tj3NXF9gJEDwa3FLxXMCvNAbEV1Y9C5NmDmxaVRuMrP1Kh7qtTEEGmiQsqTRQHZFEV1E2ZzWx2nLnmH8im",
  "key5": "58so36e1fsVRFiY95Vnykd3KMFZ1Eaa8ZfBofy1D4nJRU2VWcSPRztPhQnNL9irQrFLqbj3RaQpU14GPPtmQ6HWW",
  "key6": "4di3DiDjtHHeTB5CEN9KMjZphuMGpoqfSFTPX5kuCDGZRLXwC3wMnadAqU6deT53kQQaaPMEvoLwZ8Rdih4uG4sC",
  "key7": "5hs8GdcqknzHqNfaX2a4NpYmd7PbmZyN4LmwcyM7rP6qzkLabfqj3WUU8LngjwUMxmXpS5s7Z9ipyVz1i4f3Q3Up",
  "key8": "24PEBwk1z83PNnWwhRYSwX7NHZrbqxdFBQBaXSDyziq9nfEgm5Fv7Nk4rjxxsPMyPEGNWehJgtqgMrZg9tTeKhbb",
  "key9": "4hjAPggCKKKAnX77njDNetL3iUPxWX2ftJGLD2tzffALwe7bM9s2pfhyXJhiu1UdKBWccUtStLPncA9Gy73Cs1cR",
  "key10": "KvjZscj1ZKZTb99jq5Vzf68rcKr7X7Xc7p3i5rbE4vhTaX2ND6G5efQkoKjWVuv3ZfNVQLe56QBhEnKsquKZJrj",
  "key11": "4PNvFm4HSfcyD5PLxDwWG4rkUM8LMWP5BRvDv4aq5doAKEsVLMA6xTnjvarRxT5JWDrJ2QZHNad3nsTGGeFEZ1P5",
  "key12": "4LHLy6cataFDZi1nn5px8xNPdjruLMsaVs3Y164JjntdAzcvjv9A9CdtPorPvZcpCNYvpVD4nbUQkKFZ9AgXfMzt",
  "key13": "4QYgyTErfg18fgLZ2ipedNzUyr7UZZUni8cHvud57UJafCM3KxgmaRqaRiHo94ynCKJHFjmpH5cmjTosQkreD7KW",
  "key14": "5SmM7oNmnM7buf1YqKrUjnFpkR3zTjFBD5kCZmzJPzipKphkSJiSY5b7k6WK5GQqpSTmdwygfngXKs2f2A9z7Uzn",
  "key15": "3jrJoPgGEs22znVkNNjLhUWe1RP1z9t3kFkboH4yKRswckKmzU6rmkCZ2PNzvbZAHRq5DbZreURf1wCc2romr822",
  "key16": "WWs3g7t6W83rjMwYzkoTndiZfT3k6dEmWRaG5T6eDo3vUB1MRzEKaG4qcwVdF7kyfQYNVzC7TsuPMXFmcXVt7iK",
  "key17": "TDGUz98hpLpbNK87nF1waqL2eFLaghUgvBjmxJXrczMfsopYZCz845wy2fHPzVtjATBuboeuDV6hbzABx2PcyS4",
  "key18": "5FvMoiaFYqNPB7ZMLAEDK7mmwZ3kn25mZ1GmUBzF5qHRBqBzh3AbpUEZqHjRZJASMb1eNvjLZk2o8XG5ak3BGKQ6",
  "key19": "3ECJabiPEgt8G9T8utvWbbr7YaocFu6kaxDJaaTrJaQ7sNTR43UqbNHZrevVEpPSKQm3hMcmu3HCMcVPyi7sx6iV",
  "key20": "4UwZkBQpx3MtsxAhwPLJkVDpudguyvXUQkKNqefqnPabuNk7Vmiy7V8RuXar5cXbH4QSF8iG2Vxgf5uqJZVHavdS",
  "key21": "2G5nAPiriH3wqSS4nfpKDzenpQUF2pDR9duo7gLdM15a4kCDr8N6fhGt4J42PtXdDsCgJ8yFoP6fvVWCHNoQ3cUK",
  "key22": "4yJ8jRoFGDedfvLDXoho7cCpmM14tZ7d5rKHfYimoN5kN1HzTcTxZBzn6io8zYf8z9Lj47TxgwityPdZryk5EHrR",
  "key23": "5FycwWmQ2ZijQubJ9KFvh5oCBfnNxxT5pnutfPJ4q8AYfDrGAH8caSUcKjaC4RJvNQf6Aov13w3jCpS488J127e7",
  "key24": "4vJ1m9sDwgxwgNAoky2SagEFzdKgAPMwL8KkuShenfLB6k8vboz6ZbBZgoEJvgspH4URSCHYTXa8a7fzdp1Gfc4u",
  "key25": "2RbWj45L3Lrayqxkr74ces9nSCGKQs96a5ezLMnazsDS3PFW4UbYLT9vUTa4AFnNeZDdQVumJCJ4pYFXSJPbKRu6",
  "key26": "PR3HsoxsE8itrRfs5hAHhFVpguGT3cYYnp7JK7jr19NtSzrzSGZrGdbwR6RL4ecYNJzrGSXj4s21S4HrG2YwsQo",
  "key27": "zQg2QiyMTfoSehFeMXvA1BqAvE2qkVQsvks7A2mUQk9sntMFkJfW7ZmMxHFRyuuPydq2ZeevBAfmU3XjRkfEAGK",
  "key28": "3gQSyV1jRG8KHGNVz7aBXJXfybpEaueb6w2bZaBj3RA7Ks1FaAB9LPQ4yazNK2gHhaivCZ2VQUr4cENoxSVWx5kz",
  "key29": "265ZHY6jSYS8k63i8Xm3MNpdKw9ZHsMZZ4bjbDUALUxyqg79Z6mkMRMEpu1amwTwmuUo7DzQXedg415PLxsj2Pfs",
  "key30": "GtRARpaNsJsqBHYRz6uBpuG2nYnXU7YxpDPC4Nx5EmqRjre3qr4FBNVX2YCiLZ4t4Xv3VdiKvu3GEMeajzvEKUT",
  "key31": "aHe2MDY9YRebbhnF82QvAbcgRLMAyVvruwFHBJRz6nGSbcmU3ieH1TCYbtdhpomeCi8C5Rbj1FRYoDKtRvoDRn3",
  "key32": "5JpwxAQTygs81AQmgTgsciYAChD9XSRRBtcTznTcdqV5rDTmGnMBRUHGTGSy8srbktYtdKTbKX4MfRXhuiYiSKSc",
  "key33": "4jd1d5HRPS37fSZFqKKN1eQA2q2W5AkySMyQcmob5vWciEsm6yatQushW5YMdtqtehTMbc9Z2kDxP5QfEAqEgR3E",
  "key34": "3WLBr9rTbMsNPyigP1CR5ocMzPfXRNquhX3wVXPeT8gDiouKqFS8ynASDNyxZ3DQT71xaLz7s5K1etdvdatyuiud",
  "key35": "2DMizvwSud7LuVcT26UPJJcZhPf4jVFoJaj4Ebxsz8xsoZmdttKEDMLNzPJboYuHnNsVtYXjAgYngUdLN4fg3mRU"
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
