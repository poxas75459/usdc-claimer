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
    "SyzqBx9AiaSVcPuKyyVqdWQLDLv2Dfi4vR9Jn9VtfLznNM2fVU85M6vFHAsDL1iU3C1e9XdypULFPnYige9eEDh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "357gJorNQQQwtUfQd3Dj5LvQXNcruLhUFQZiJpP9Kua5CPsHrso5cWL4gUtXz33MfdrhdLbVTtJZdHGf6HqrEWGe",
  "key1": "4yN7EDjCUFEwNrZQX7c3y7D8dxuxbCJ9jJUtXPiRQtK4xhKRwVdmpH32kHBmX9vnUuE1cAMENwjDhGTCeZ7JcpaH",
  "key2": "4zLibLVqwuHfLEgC8uo6QG24s8B3ULBwHmHytFpCBo5GMrEcNYngXv9RkL79RwK5MQmcibLGjvShkKkv771y8ahf",
  "key3": "24hKVqdzc9k3Ba9nGb3zg3fJkqp4SSr7FSJV5NmxnertUeyENq6GxEhAoaRZpWCvHJwzNor8RbWNh482t3ob8FN8",
  "key4": "W4HaeM93TBABeiKyxDXmVumH9pfUEDqS1KCdDcArfy5vuGefEznXUcJNfTgf4sTYD6aesz6PAzVs6VbGnCQDfYo",
  "key5": "aQoXxUaHANbjGe5JRGJN3QXr6hhGr9mQbokAfuWYWZNYAPPu5PNSnU2SDgyENkDbBSeMPnWcpFc1qzQ2CT34EB8",
  "key6": "54TEQDN2tzBQgT2dF7yEDVX4VdFrkV5HjhNMSY96rVPkLt6yfAQutXmNYhuBNyVaiNUn6TC4oXnzLDe6gdq5sa7N",
  "key7": "zjTWwut7maAedsGBWii5Nr7EScsHdEtf65Tf7HRc8pt9x3gZgD7JMoAKCLMQCZzxbiMuFMeR4baK7uJb5nvLLZA",
  "key8": "22etm2m9QtuFKvahtCJHbkD7w6EqUb5wVJK6vzumTi6sYVKn1qQHEi2XngoVXmnsaxv5TnrcBiBVvwgY8M9rVmes",
  "key9": "3J1RZ9dnYhKzgNpFTkk6ELcKiBoZ6RGZBKKd8PCuCEcEsPDQ1z2yjQms5auqRsJZtFAJRZ5JsXVG9QBEX1TN1Sqc",
  "key10": "2Gm6F5rGDzJW42RbReicvRBak93jePrDesRu7F1hMsW5AaqRQeN2mEc3qQvshSAauCFC1zDeEiZksEgNNjQN5hGY",
  "key11": "35txaafLPDAYzAs28We7RZs3aHjvQQLKDvvtu12uEgTyCuDejAnZZ4am2TZGjtAa1eDsMrGYfynCwtrK9zbwNeHy",
  "key12": "2pCrCvoYgkrMFXnNSN6Uw4Feipcstx33ov1Q89mPGbAA5rgzH61p3Prw3DfYdaGYdQhk7EQkJUWhUZbviUPEoJhE",
  "key13": "26X3NpmKrtkaS7AhVuQV4isdQDqWb8XrsUTGU24dQtWEypxkDVQ6HsK4qfQCBrtHYDu8GGtG3Afy15hnCfvQ5FjG",
  "key14": "3DHb7836xNZzJNZyLovVBeu8SeznzBTvKT1yj4aK137nbMgx1ig93w5v9V5D9GvZznhFjzcSVxYicDCn8WQiZwMt",
  "key15": "2RUw4BvwVav2rKvTM32q1WGyZMCSE83d5bS7bzHAgr6iHJEXrBgZfC1GveXRfhJh5BRWAUR7hL8rGpaF1rcqqv3f",
  "key16": "3AgznYUDnDpNg8SEuzEaSpsNo1xoP1hA7bxXWEHzvYeMPZZHfNr2kMeK7Q7pFAQ11nnFJkz3PdxLA4ZuSMyn3EoD",
  "key17": "SXdpzFSKqSjFccDEXiyGoYT6HKkrjjXJMaSTiWsiLFxUThZrYr744tsSzmk6rZdrPE8Kbyi4QPfESgnSXVfxqG4",
  "key18": "5Ne88nZtNEWvoSPjBgpx5sNi91dzcLkAwyQLz2FreUGHCU3srafVK9E8j6bEf4ELx9invEJpf2N7hNwofm9EFcJN",
  "key19": "3LMo8G34QZy4brWcFxxanbwc4Snqd14vADPGTXFMTaDRid9qKbdMh3RSZ3PwzanAqp7Ma9Z9xMsfFBLShVU8nSKP",
  "key20": "Gunw9Nq1FCg8D2HTMQHi2bdomFdepoivbAU9p92a1T4Q6NRt4yuQzXP86RvU78AYe2Jzr9uXNTZCWG3XkBsR5mw",
  "key21": "5vupBYg9VKz4uv4yk1TRLx45bT9Ns4AcRCa14m8rA71L6YTF7hbD1CfFLqm8QSz3Da9jDDQxZETDctZipdBok5L7",
  "key22": "4p2yPPvniPJyMaqo9QFfLY2xzHYUQF5LHGwSePuXEbKhNvJYJW4okF3Wi6kTwMZFxnGDWioZgmMgRttg3LD8RyTJ",
  "key23": "49inYu3bi7db3UX5qB4qFLBnTUHc7iqVpgQbhZxbm4DfP3pUow9s6qwNGmiEzoQSrWT6Y84AqdYdPpdg2ic3oSzG",
  "key24": "5fb5vNUy6kuevUYbYZbj88K4V9kEnE9vrnuwspsjswRS9U2TLx2zmf44b8UGPtmsnwBtVkGnmWkuSG5hWgz7Smu"
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
