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
    "5NeCKvAQuKgB6VrwrebsMLJ8C81p2wrrippW6vYbvWPwzS7AnKqqCqupiuznEWYPJMNvxTr8FoscywqjP9n8d4Ws"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nSn36chAbojwhgPAxsARCLXU19Zip5x2ip5BCeZFr222aQ6EBoVsTu1j3Q7F2tb5nX3kXK6qDzrGpvLR1u3aj6S",
  "key1": "6qmgjMSS461LeMBwbzMyDEwxTxevGmRWufS87CY61KHMV5P2FSVqoa627K4ajeBafuTbXfddPTLAyfPAwzfPnM7",
  "key2": "4S5yYb6HUzs5BoJo8hxqtNhFvTHFWdyF94ENnfa8o6FDwigrVad7T5Rbfb8NbZs9UHSXDo3zNMsyb2hsicAh5gKM",
  "key3": "EkiNBDK2dP454dkGYycciHhUi7yZfBiPprzM6cxLtR8rWHSczmH1UJxUXqRE7U84JGs5FrUCBRghPjDABjo72TL",
  "key4": "5QrqB4emmfREEnQtFxFUeLat5yE5V3CftmpaVe6yMTjW7QCgz3QLziyhWB4tEB3zGA9FwQzJK7XUXNfX3FiRuUz9",
  "key5": "55XAtf2dxWSuJ4JwGQW1EAMzmLMtP9QPDMXphgs4t6FvUgDoMGuZ3ZM251qWQWiqSzMTpP74MUEZBLzLRDXEgXw",
  "key6": "2VsKCHuiYUEMnHrjvTEAjq1hK9mUMMSYNxRMbdtNemnjCUFvcz1Wtt5T5Mv5zpeAZhDkeh8AjdrPf1WHeJ8af8Gu",
  "key7": "4tYzeidUG85SHQs7NxemCRU13u9oi4k9FJ271Baw659bqGRjdFFL4S6yrxwvXLru5B2PLp8YeByjchLJ6RhPCri",
  "key8": "iSCbkaJRWiZNsVDpat9WBpUXQHdnfKZDf9Mco2wJ5paEQ59tBmCdNv2mwGgcqahPtgq5nkU37D9NCA9s55QzTfW",
  "key9": "56EJsRYXJKajYgMX4ffghBs5G4koQUfMsQz46sUGDRk92cRwyJJVuZUc85EVTtYAWrYqf6teKCD45XLDHbMy2CDE",
  "key10": "2CQGoFSqcWsrb9ngd3zS5vhaKGQoXvf1KYwpxa1B1hfSWKbeYXQaNpzxT1zAoS7iEJBisFsd5KdrheosMYKdXjXX",
  "key11": "5qXaCivUuvh8RdKkYQ2ZPbABT7s4LJRk5yidvByLNBFxxUoKYwq8uHnEMgFCKNMDZYzvMR6gCZPWb5gpD64X1XZu",
  "key12": "5Y3xi1dt9tUfJfYRgXqJXRVC1CDopdoaYUZAc4tqKke9aoSmAL493iLSMNoZ1NadV2aGxFsJjXdKQjgxb5AiAKQw",
  "key13": "4P1619rzvYJMw7dbnGFg2fhKuvwjLis4y9FQgWsLwrTVgvXRLNvZM27JUgcen1HofgqJU4tCXLVt5YswBUbuzZfJ",
  "key14": "5md8JfabqE3dyMazDso6b5yRkEewbdPxSDN8aLPP8sGVENkhAqF4WU3Wisy6wAeS7urc75CKTtiVKkLhS6st15gD",
  "key15": "5vipxPeLbTHmagguFGGFBVkazFyp2HTG8Q1V2jrR8nd5tSnHnV8coP8qJP1DyHwqAdVvjYb4StoiScdVCk7damtP",
  "key16": "5eN1PQz9nfc6kEgHuihV6uivBzF4UR95fUFdAkt6nX9X4MQtR7XyG698gDfq7kH3FRHZhS7QiKcGnpWtDNKiSxtV",
  "key17": "5wQa6iZQF7vsC6yRpRdgE6LT9weX4bQUq6kFfmC83pRhBFuWwBKdqvSTEjaoPavzD4KYrZY8FfEnnd4rSffWTKQ2",
  "key18": "61F9D1VcjbMGRFndMA45jUai6PL1khtGTCmhTkTXSXxFGKzEVJfBgnZJt5fiTQjb5Zaw2iSreZLUBdhfrSK92qRk",
  "key19": "3rv2LxHyExghtBRGKtkN58nKqxiQEhYCMEPUZUyxSGmQUY1aaQYCtJhAZvZ9boybFJ653JFkKFoBnskTSpSo7dFT",
  "key20": "21XZGrSki6YGkttEiKWoVxNrjAaNRXxtg6EP12LygJG8EKskEMuUz4ChE3t8sgywNq7wPJdSmLxkMZKpwSksAhcs",
  "key21": "4azpJkDZPmHrq2LtVtPTE8ScCTxDaLdd9eNwcaW3f3uT1nwUav12r9jJciW26D9EMbCQ16KAdtac3SmEtYoJ8M3Z",
  "key22": "5VgpVvbN9eg1MUQymzHHgbUGtt13VkiA2cKkHxMAXd8WhowLhosMPLtDuKf764qVPBATXFN4zacTwbd6toyFxCiY",
  "key23": "5xeUXEQZZTtxxvZKKHSBa8Nybb1VtrHjKRoHjw9kCTiMRBVocXSGG9ueC4jxVdYkJ5qqNuFsJi4XbJeMod5tuM1A",
  "key24": "2oUSDKrhnepZgBmTA7jYmWJxfaKnmMhpxahDjuXWxnh6hRtc4eDvan7XQc676hRnRc8FQbqZhwT3JuUMUNb1CefU",
  "key25": "4CoxgbWt3wrYNjDwve6MwQmuo89mJqymfee1qybSmpczXNLVkwK186KhfMaQEvPhSCFo1hM2ZgTdyoBbGkTzkE1s",
  "key26": "2nXgbtjbmHCrPeF2isdsRBKqKthfEGVXZ99C8JLSUpLzxVC3jzaKDABhojmsD73hjCvzfNfd1aWma3MyJpL5jceP"
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
