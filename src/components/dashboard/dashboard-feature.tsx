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
    "4uZTZmDdWkcz8vGQQzsBe61oceh4n3guKWaRXr2WwWJEztXwB95wtnKht8kYqihrzTa9MHkS5vyUN1CVoYHhGTMv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oGkx3vvxMqMbLoMu4Hss6Dffo3SGve1QUus8TVmEbaYhvPMJofo6Jb3VwaekgvQTgVrkXb7CUDpo8uLWyeGxX2H",
  "key1": "4b861e4ysdS2kqcXzrdVRqpQWV9bekvseNJReJwhxdsftMRMJrsnhJUvkcwGJnWyFpxtczc3FHax5CQ9QAYt5CNP",
  "key2": "36dt9c5XSQXrxH4QMP3sGvRShEzY2Pp2D87aBFDZdm5zXqZe8QDQpaQJ9daW3qcy3ynBeDezRB2w7NyjCxZw4kv8",
  "key3": "5DANjHFKErAhVZUbXrjc9q3RP6PH31fTJvjsFNMM7zmQiU3AcDaVyYfwyhtb5TUzgLaF8RreN3vEc8ytXrPNhj3t",
  "key4": "5ZQoQti9dgaWB7FH7Xu5FMhBAuuJFhaJnA13xLuMymG1AhMzYappihWNrC4f9y7hgNCg5M115hMmKToZvT9vyCkP",
  "key5": "2VDwTaUT4jPMpgzo2RcLarDGb434RHR9NXujtoLMxqu27vWb64wuPpcxa45dEUGZb5fHTy5qnDWgcYZDWohEbdjm",
  "key6": "4P5oXnQ5pg9X4V7WjwTconLkEqWw5naFs5VKfL25DQm24fDWkM69Qgzb9cjDysjL8HxqLAnRT7tR99Cbn7zLYAuB",
  "key7": "52ZVQD9odQ9zGsTexmimUQup9XYxr97vDxVBeoV7MT7Dzuv9Ujfze5XE2YFAWP7tYyfFanxpKV8FYSgZgToAG3Qy",
  "key8": "38akLj2xmrJTd3pW7bGbcv3jJypYpY11j2ScjixWg7Nfj4fKFg8kg9UFBnRCdb9fi2EGTZZX692xC5rtbHUjYhgi",
  "key9": "dyR5QHLtmLAvfG8MDGfN4md63LziE9rBFS9KzTHBZ2ydU2cqo6maqVss89NHw2Y3vSKrxp2vZN5HyG3tJqLSdRF",
  "key10": "3BC8NvUwP6woh6okzJbxGkCT32RBwSrTasuN4h8S4XptmHgx3c6J5rPeSrLtKMHpZ3E83cXisPL6hGkFLm5wVTDx",
  "key11": "nAYonTtXW7E1hX9rmgpnHgnz2M8pDHkYJuV4mrRC8okNWD1UAwJt6c4k9tYPQN3i7aidPu3qS95KDQnFCAU65fC",
  "key12": "3AGJyozxXRKJub8bGQ71J1MmnVnnFJF6mrvsavAVA42qQMoa5s34XgUc61shVVQbeAtPJ3njLJ1DVwvztfJTHuah",
  "key13": "561A5vydDmsyC83ZxQ2xufsk61jif3s9RXV3sgNCKCrLNjdWvn1yaMdZ8LdwmPyBcvcA8kcQnBoAUdho5SAMPrRU",
  "key14": "5F3DD3mDxzVfKKrdoNDDqpK14sKS8Tc2X2Wx54i69V3erDknnA22qcFaGksb5DhBECeh3bK1GiZiMxvdHcQ11bA8",
  "key15": "3UN5ts5F6jaGr43zJQZ63X3FHUyn9adujvDn5BZVtqJTWLS9QrofYMuhrdupQM11PwdxH5nywvE5zYaoVvk28s7t",
  "key16": "2vEFQMZQi4mkv3sfGk4YJW3s18u78pRAotwVCWLiRZMqdYzJYdhS6vPRw8E6wTGx8N4UoPuTHFDPjQuicZtcYP4d",
  "key17": "4DfVqTJUxtMgsLvqxrhVTzHaq8LhmwoLQYEtur5rjc1jgBXbuVSvFRxJvGEvXRyw4ETinCSK24XRR6PSczkbMSih",
  "key18": "kRTd2ceQy5Pkxv5csFQuWbPTcEBq1Lb3aXaGsjXQ1XmFRAxVoej4oLgcrDKGNqheY8PaRG4jvQ6hqNc5XiG8z4A",
  "key19": "5SsmXpk4BRJNPRWHw3xEVGycFMfEWyGrvUufcwDDPsFBq44BR7UcfS3bnkPJAA6TtbUxFoUxai48KksFiZY8vbZe",
  "key20": "5FnrUAjEVs4J5bfJWFWVThF5mCkvod121oZsaWPvDxWTACLwUP3RCgR8sFp5rXgyneW1GbEBXYG9vJyHFPaBykL8",
  "key21": "5foDbYs2A3YkyMUHQhc5f8Pra38kqDjACSpMEj6G53ppMmuhKCRd6ftHefjhk6p5mPm7VaVVZayoraPgKE2gcooR",
  "key22": "4oXsd8UK3rKsk15DqGTdRBPfvnBgfC9Xzdo7UB1AvvU231WyssbK3W4saHaUm9MV9wmsSf4mg6HzsgEZtDfGpbK",
  "key23": "4vWPAC4knUfHkQKCkUdCkMqGUtnXdmv9E2dc45BkYYmNAx7WnQUuAYKNqJYjdKg9XHc7GHTBEAccTV15MEyEAQmA",
  "key24": "5G5xeZXyz3uQgYxwC2wcSm9XQwgHKmxbE2ppJntG3W2wrMPBeTgBHCRDKEdT1SzTV6XJWKtSRs7XoiiNqSjfmYPN",
  "key25": "4VjBAdQJiR1LjuYnmV5rSVFsb1ckun18hpTAad99frbjk1Mz9sj97b6oU8Bw7cR6UpSz7wuYqeoCQDm2w42z42ZX",
  "key26": "2tu4Qb8qk5oEEtxft25GnfZwaLjtdNLq5P6oMNMMg1HWCa8ohfLdeJ5hEsyzvN9HoyDkAihbadhD8o3Evn9ZNcsB",
  "key27": "5Vhv7asqg8SpPRDmhy2HL2248Svfw2WA3wPf12FNk9No4KCWPryf7GFfKseyWQVV5WG6BSMUyToC4cyTrxjKBdCm"
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
