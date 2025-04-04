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
    "5DLqBh7n9akZb8LU1w5MRRcrErxyu628AB6t2pDGPBBmKL3f15wC1kBEkDVkDW36hEVbDdwzTzhQ8jUbCkTKPz1Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ypb8YCru56zCsSLaazRi6Gqzt7vX55UAeVzSyoMGqBeUtRvKpKtcMVsuwtBpGDmQNzkw7NUH1yf7ma6QhWsZgZj",
  "key1": "4qdVD9Y8mEXDUC5zRByGCSR7bN66Jr97mo4NzN1pWE9rVPYAH8QJdPPXrNrsiyYxsZ6RyENXYJr2eYSL2PomjjGS",
  "key2": "354mcRr1RDj2ybXhpYQdt9vxT11PYTXRVecNbxCY8vhgdvPL2KguS6jPUcraXLSkXfc4LozURDZQLo2BkxaX83fC",
  "key3": "42AoHNhuGRWYpUAmENhiBiMLc18Z33uj1nKR7ggAeHHJwRJSGXE6tcsu2KYfXaMnxEdAybXmyMEwbvvbvmwyjymm",
  "key4": "4QBxt1qnsx1yiT3H8qqZ7Eh6hXsZBX9W2n6pb87wBmBocDriKFMaoRBbQCaFjmNvWAG8KvUbynvZt4TLgZVMnZEZ",
  "key5": "mciKmnuYuZhxg9K7BKorYwErWLTaDptqWEjEvn4yizhpyRFCmVEiLi9wvAdXD4mx4feScHPN6hy5GkUGudMj9NK",
  "key6": "51rmqjMgLtTLanD8nfqfAy7yey1iq1YcYTAcVMMYBSNu6scuRen9fiMjzAVtokZhus9VivR9RUZ8DAKiStdc9Bwu",
  "key7": "2aAbN1QhwLpKygEHVTN2e73eYpvkmBWM35ru4sU9Kfj2AxhA8P5NzhYrFzU1RLmEpznQAV9fsFF5QeDgRVtVW2Kd",
  "key8": "4scfsiYM3YsY7CvwBBL9hnpp4CE6BMYknRQCamtKNkDQF8ZeJC9GBkdoxUEfM1ifvMvx71yH4tF7xiuj1us2eVun",
  "key9": "3iurh1Pre3ogw5gbQSQbtzYgnfW25s5sAaUszehALif6tS4H9hveZt7iF7uuEwY8zgC6Pb1bZogCMM9G2qhJ9ZqK",
  "key10": "5kywmTCYqyo7qKvwraAfQ7icXWYmthvZQVM8vypdTbYjMhTdGR6oagMin2uQFzjDH8TfkUbuaMgvJ4wpfhaatwxC",
  "key11": "mwNXX8Qm4yFdQxTxhtmdVgUBsgzxx9eb5jDrWFyHEjD5AmzebFx3mW2ZTKusbVxaADNKYFBMFAJG5NkbunoMDdv",
  "key12": "G81G1pPJ2uWoM9JwUtZbMTDLfXN3FWR1NBSUu3D6GMtZkNGHpjHmCnfNzxfqhv8umsgrBVfzww9Z3R9JGNrPfsn",
  "key13": "2BRFS1qKeCGEkCdh5gAE7JaRoFiRVP57enAwDmakU5UKBDWH9gVryG5YB2kjWG55yowW6J4gmMS7bKNvdLywVC3L",
  "key14": "2t4Hw4U713Pyx98WaNppy57G4c1X1F3iQVrmJiN8UbsSihJL2c4FkL1em8CPWnsjbNqBZRi6j3iG48zTimv59Ytt",
  "key15": "3PdCap5wR5FLGRTwPiEgaAWAGvH6PVzdkj36LCRUQAdrKK5Lw6aaJCALvrJvmZ5udPw27xJNrirXwu38YYGMnF4E",
  "key16": "54aLmxTmxc8r8Uc7LQwb1YBbQAwDjhoN4N7j1g6BjRyynRCqozqPUtt8DymEDeXj12c8Vz8Pgvf1AZ34Hkg6hd59",
  "key17": "G9gVxisgWz2vvdJyzm38zHuPqATZTv981xaEqzcQhXG2PsV2no66ZosdUvSNB3da5bjpLuJbmc8nWuCeaJtJdNm",
  "key18": "4pFpT1sH355wKZB5ySEj1y25X2fXdu8FsWzwuvREtT9WAhxFWfCQUddm3fZBA2G9WqbQxwsU8fERGfNx5ew2cr7Y",
  "key19": "3wqa6RvaEbsYVNavp3J6tkb6ZmMHou1rvWfYrMaEH8N7fvuj6F7A2JdnXjWdksqSZhoThLLfQAjoNtW4DMu1Yk3x",
  "key20": "5ot3xx8cq2JVgjAcNjaoqJEovR4NduCno9LwqBc1gwdfah47GDB1X5VJRMNrjfsEgvbz39ydRWzZQZ9Bcc599UYy",
  "key21": "5wDozCEjNTeUdJ9sxpy1KYHpQdQD6fZE886XqhptUpGqk8x1craDEEWtpEv82neVnaPGbQD9mwiMSc4FUR25dn93",
  "key22": "3hFXiU8hQi5J1UTe6Xvf2j7b57Ze668r6CZEzWJiuPRUGngrYXxqx2zToDMuaF5N3WWpsaiT4VtXaTEAChE5kLZi",
  "key23": "nNzw2auFiPSMHSTZmzddvSzacXSF78xCX3x5xEqiF1bZdoQLgNaT2pYtz781bQ1q7idAtGSce1d6KTjxeYfQoxn",
  "key24": "3nDc6rWgNsxeFRmrnWSRuUVKW3YzQvFpGp88fb9iXSgEcyCk9tZPiJCsxdgByg7URnJnmFfdZopa7H7Go2fcbdvR",
  "key25": "3dEqRtKY7pFHAeM5oDrNZ56GXUJfDeN1vU8M9vxxvFz7dJWscbpCFnqt4WJxRQWC3UhCX2CHCtzdSqo3j9tsW5Ve",
  "key26": "3iRMKE6MAru4Jpg7SuBNqM9Paeoc6rmf9n4TaRNKqSHWic1sELgr9tJDSJitsuwYqPmcYpyp3etm8fjYoXd76C4C",
  "key27": "v2smzX9uifnUDR7DLPQPKueoXGBmp7ZfRoPKyVPbWc2zQXK8uB2r19NaTfouHdA47jRMRUhrpzbTEbg2yeqcjZ2"
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
