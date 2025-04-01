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
    "2LovivX4XXSyGqtdg5eJ5iUkk55bq6ZmT9G94KbSyVQNWxZzh2TV11vkivNRM8xpZAZdHboAXktdWjyqYzs47Q95"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kUAkjwszY3tR6GJVqzvicyYVNbBy5ZgoPNS2wRVQx2HmBDpHA5zgrnABvknmvdynwM4uJDEbDRJ2svqPwEtDWRD",
  "key1": "5j3RMHHvdwzWgcdhnc6H6AmRNqqZkm4g7zdawQAMTKVvvg1aT4DMzArdQ1FAwWdzQ9FDyvfRdVMBy3kQXxZk7opR",
  "key2": "36vojf7MVgGeTxYEmox946dW2kZLpL2Szo32RForkWSaEQYtjXgrnkzKt1YHJszA1pwVZjPtrvfSR6cyh3hfrUYP",
  "key3": "28BAFBskiAtsCtRjdbucJdZERhgEkRxCoirCJeHgUGUnkMyGV9PtJn4HrVJHH9rMS6cGVVRC7425kr3KK267e8Sf",
  "key4": "39KQMmhEq77BZ3aj2i2bBJaUFSc9iqgV2EHKVnrYv57LysrgtKLrSmxBCMuA6stFb4YrDWM2KNx3MhcoCWWWjshP",
  "key5": "2KgR4pMEfQ2oEoJnEg2ate5hYkT3X1nczZMrBU3ozT89dpYq7xqDS6ZNHfr39iDGs5ojJHC2oNJ3vd1EVMuRz57a",
  "key6": "4fr5411Crdx8tiu6KpMufs8X1sJiNymxozWvwvvfPvB9PCUCsJtJZwkuBdB8FU621LMqnSqD9MsmBnA6kFthtrE9",
  "key7": "KuXQn3A4skeue618nPmLUgN7bBB1mhxXzHDLmt986es5pDaikm2mNNRiczhzNpucozX3rGQHVcc9CuTFwfgFi1X",
  "key8": "5TJTcvTHbeaQWNHNMLW8BUuxkv1zmwFKJ3aJevqBP8DT2MoRM6NYzCKqFqdzLezRiNBDP6CjdnsKmwRg12xs92Ea",
  "key9": "57X1uwmdenbkckmG5xZ1byghfyhJADa5jCxHg233XfcimbvsAnxCExWtubww2AUNjNdYAyqm4ZLzhyxu7dzFg3bL",
  "key10": "492RyBjx3HN7pNtF6FYd6fk2qikAoTCgPyt1FtKVyGJZsUxSgYZKquLT8CAynXXgv9uhoecP74TfHCyKuHioq5D8",
  "key11": "5PEDoGXLFLNh64JHSEWTQWamh3cNwKPwcKkNsvFm5sQWpE31pKywTkVcRakZoTK5QE8wJc5WmZhQbwwHjuhW2m9E",
  "key12": "3YkJdyg7qjDpvLEeZhUMTtodG5ofUgVTPBwVXLgijGyviyh6wCSyYba7jmLpJLhpHCYBZASG9ei3ttqcheiusCoY",
  "key13": "NaWoP7xD9z3SJrX97MiJcrHDsB5EkrzmtV2FiRmQMoCGmbGGervxAjaErpDfp8XtHoYxcZc4ShZXixDZ9RhNRSU",
  "key14": "5bFRMW3LuDuT9dcg4YkuvMN17LcyTrAc3RWES7wvCPExafPPGe54FAJoViDkoB9Lj3zdf67W1z6xBa8TQKQeRi8t",
  "key15": "zyxacCjj3dMGoxx2dsjNFArZ6pW7touLCNi2piScxBCXkUoqncVeDx8Cep7tLPskwXXe1vxdTtZPAhADkdERiGx",
  "key16": "2HW3HQYiYaefjzU8WX4v9NVTQf73MavTroNvisiUKPihF8jNVxedgd5snjGjDAbgq1LfUgEfQCAxmgRrB62myLSd",
  "key17": "2LQWtw87Ks4LmBoiMdsAaMa9Viz8hseZEHLQoY96Kb7T35k9LLMoUAerdkXr3Spxm1e38uCfu1Y5bA8iYRSeXVkJ",
  "key18": "5hJiCnW9iMEHchJZriRatRUH424VqRArgVDPoHcPPRtNUXzd33n6ABajmZdz8ZtdUgcdiwSDXnJCk3pVJumjeka5",
  "key19": "25dsb6NCCyWaUhP5auNB88sywrVkNwVua8tWXFxtPBEKecQKUVS9P7ep8gdB2u4QhuYoc4H16DYCQcaCpQ7X7ibB",
  "key20": "3cwvFb4P4wFPFnU9pnHmo5DBjKuTmdVz5q2RLyWupHoSTL1XJ8SFWF5RQT1dVV7fMdT87saFajbLH36v8bjQZ61J",
  "key21": "35b6jA7T4W2a6YP4JViaFJuyEuFyygzh8Qc2zHEVbuNm7H764GceKaQzC4MUtXMpm9QRmUDkk7LYRHGuvTZBtWw8",
  "key22": "2ctR5rkq12ZuL3Ut9Gks34XaZkRMzXC6VvjWzhk6TKx9x7yM27NGAszXEcmbFBoFvWd95rSxxVQ6YSk1uFuTqtby",
  "key23": "2x5MkLdeztz59Hg3vixJRrPPpDV1Y43zZ74dCGmNoLnHim639dumPyM8FYBCLBJZUakzq38FVKA6QDSE4RZ2vCuK",
  "key24": "4mz7V5MEitjBiMcjKLhpg4yTubroy6r8EBLeF8JwHvrufhoUW6HujR1XxprkgeTFSs1fWjFnu8zkNYWfDbbGaDTL",
  "key25": "4UZWf4hQm1Q6TPhjXGKsARySQ93QA73CYrMyo3ucbeBiqqeTCXEqzaCvdndzUTX4MsQL8t5WpnxqJi8MsBcpMoGZ",
  "key26": "N6mEGZYBXHM8YtLZz7oM1opXbZvNL1DrVS37JKhgw14CrzrDyei6CJDGVHVQHTGRAMpwhrpeVZtVVkNubVfJ2sV",
  "key27": "4RR2JbKm8t1MvePzSPnSD4dFXdizNKmnqMi5mzYF6SuBV3w5bj6HU3xuQABH6PMzamTGLiK1bVykeLLR32z9C5NU",
  "key28": "77CF5Doy6kQsCqBasoShHXHMYZ59qgCMrRLhH9UBpZpmoSds64DZtqjryCRn4f5zvmDrEjSeYwAYjyBUshTsJjs",
  "key29": "4gKwKK27E4iRH3ju8HBSwM1qtzvsu6mFqKeA4uVcng3nutKJ1pZrBo7SnjTg9THW2aHaN9bEzFQwcdSPjA6KLSWx"
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
