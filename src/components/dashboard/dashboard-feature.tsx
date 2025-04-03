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
    "3RRpvt6HrxVKnqW4rh8ZKYmHDyByCkDt32Pu2zJZuYjjCYJhqePTLGwJJraW9MKK68qma2QAH95YGFHm4JEyFxmU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TzwMSTgqmBneshxU5khVpogC61vtH8zWNY6YYi5WAoMSyqoZxRx4MwLH8hCPovKqWEMCZPtafuse7XuzL63c7LB",
  "key1": "4hnR4FdhLxkPcmNwq29BnfNwtNVvN9FsUpGJWBYorNhdfw7HKEtz2kZXqTNgCNg7D4G8XrArfibsceVgMiovZfeF",
  "key2": "2jwCdk3msKp5E691hiFfarWCgNAHvHSEw8qATzowbPAWaUEGzfGJUh8dgxwX3CiYneHviLpRocmZ7Kkc3QerSJMn",
  "key3": "293uvxW1UEpEhhvSYy2AuRxuMZWZaTJudUtKmR1AGXWJx55btgx73t8wULDCEwYWfJiPyc8L1XJ9Fqboqo6g9Zk9",
  "key4": "AioxGxHNU21JroNJjWF5E8sao7uzg1pn66CRtG8skzSyA4uxgFbbKucAnkPe9qyHkMemrhEGyB9PWx7mTiEtYMT",
  "key5": "HBBaxfr3ijoCAdJ5z1YyrCnn48VsiL5qoNCjDSe28YETJyT2e18yiqg2zVjaSe1kpe9emSD12Z3BESQcEFFYgCB",
  "key6": "4xa6yPBrj4hrXCUeKE6CnfzzVnaPGWHEViXhFMroKE9QS8qMwnmr95sgFs9iJNB8kVWymakD7XaccXuw94atpMeM",
  "key7": "3sPHEWv9gLREBGm9a8uVsmzLagiinGfhTx79X1SAqwTQer2aEq1mRoYM1FevmBWiqCpjyoupKtBSGpgD1uC6qdQu",
  "key8": "5KwniXw5onpAMUifUsDifHdbjRFhit9UvQTReRFofavygJk6D6EPBfXxbezv7YmLBtvZ4WEdrZuCuhqeCrnfRnUS",
  "key9": "65ei46m26LBnGe4sLBs9b4bQkrqAAbeLGJiVaWBaQjDM6Uk9p9uu9XVbB82K44C9sEhCkLjju4sJGyq8sYqNJRM9",
  "key10": "3E6NS8SVASGSWJkd5tV3q4Dj3zEDJhRrFW6bvYaUzSLju3tSZsWuuVFWTLCuoBSgkscxT4cCL2SXW7paXSHmZZ4A",
  "key11": "2Wf7iS5eST7fy96FUPPhZak4FRrUBJ3yQd42bBoafBHbf4xdGYLBu2jbjww29faRLEwN9CCLsP2tFyQXosWrgAgE",
  "key12": "gTowmmV2moHy7xgTC9ZXw5AUN2MSmFndsaKuWFb8n6Njfx6MjWEcLJ6VwGVw8dZYWfv5YC7X1m4X3pdSTQza6iA",
  "key13": "341am4DPD3xajhJdLyGSX3Px8wVHjQWFJFFuTnptE2ikQVaHanKF6QAukmpuyZqBPh89PSjP1vfX8Jjv9ppXSHpe",
  "key14": "uqkPPY9pUFbW73XeNAT3JAsXXgQXK9yiDKW6EMaDk2KNru9kDNuGtruWUWtDECUTDkAxn8tFak7f7DzKf6PaVLh",
  "key15": "jXjFzw2AYQ1ksCfe6U57QMQr1sYVk7siyBxkSo3Pjg9ZnJ367Jw8431oAnyypdGtDDc3YeW2F9cdhAoWq2EEDyF",
  "key16": "3zJ31BQr38kbYx7zMFhmRZC5EG7xm9w3RdDs8eiMPcZfe9qGdDQXn8ADXcxdfmqpp8cVgw1fvmPUKwU6JKQuyd7U",
  "key17": "5Gb3K2y35MXyDq3JrP5c8b8C19afDZTB817TfjqqrgcuMLrYuYegaoNGB8zhAn5XZJxVj15s2Q4wuKKNBQpdjKnu",
  "key18": "4RwTdZqB3X9jZ9HUpKufBFPg86aENjJxKb2mejECvhmcPKTeQFxXrxzTu6Hs1nNp744psYepXZLUjABECXxex1uj",
  "key19": "38LrVfanV5GtQ3ofTuZ6fyBQ5yfPsDkaNTbhZhvw2U4J4yAwXvkixYjQUXUQYqXV15hWyAvJoqpovpdkS8woSGcJ",
  "key20": "3quXTx4G4veaZViaeJAoVRmzSyhdw4dFKrQbWXYnwRrHHGfXAH85Ji4dF5CSF9TkzmZpojiUVhnm1QeMAJboRTwi",
  "key21": "tLC6aBMRK88YnDEcAzfdinU2VfY1ywFeSgVkiHRSgqAhvSgZiXJa9VYzS3cn7jq2d9AM7wM3kq3cUGaqBHi3Nj8",
  "key22": "4jAZfJqtQyvMk7F2f6artTepUBNWqKLLqar7sQKhn6GbSfGG5foEDuocE5sNQ2WjM9ZueHUQuGfvLnjdhKonzE7r",
  "key23": "491nmChqvnBEPhW6CrFahPq3pBkbSVhRs7aTaoYBvD9d3U6cY3pDEDFHtnANjtAj4HK1iK5wtSMwtW1P1SxdwUmU",
  "key24": "tjYLSndFGbg6cCvDUQNFCCxM4fzfDVNXHGzMrtfE849Ke6LC7X3bXTF6GAqBgMqRBcpB93FmG8oWdVqiGuwt8ub",
  "key25": "9g7Z5ogG4X8fiSpjBYGKpaVmmW4Vb1aoRYXMCf6y7pkHeZKVbb9ZsjWsnCA9tC2f7YgyTw9KbZbcKDkZpx6n3Ke"
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
