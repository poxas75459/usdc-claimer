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
    "4yVkovA41M5qLUDJTzbeJWj3UEYsfqDKAAfVVYG3EHs7tCn6tioMQM4GZqaVSG1oaHLKGDBhHNvprvUdWuWtNp8R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T3NpGHXBXVY6HvGtUisffgifH9PBUBzzZyBb6E46c7DHofpJiwuWCxFGHsQm7n6mPxP2LoEQcFuT1PUwxFEo2iR",
  "key1": "47XMCpNuti1LQzK6VHqiT73Fqowj6d99pxTDV4GhEMrvzzVXgExazBnR5wZPwuRu7VwzcnhJXPqefZwyw55Yex6N",
  "key2": "iWgfM854uzfSYckDCbLLm5FvkApwf9zDEhHDKgmi54fgtdtjnZuo8CjmXo1BfTDk6xqFCyzyemwLvJdPEYS6Q9p",
  "key3": "XAps5CdHbezokZHZEXpf2M5P1tyDE65cP4qzWWDDCRUMVwMYqzMWXAxX5wwFjjU7hseSeKkq5GZyX7svrjDZLLh",
  "key4": "Vnr1B2VgfBp4K86G3CZ22GtisV5RJogb5RUyvcrA6nP7Pi3nYaYy64Q3rLnhDkDxLPr9HocVeheLw13Dqr9miUs",
  "key5": "5y7NCy8cabkhJfK7qsTGFPBQt9EQgCArJBgTib2ix76Q8rBipaRuF4Ucj5jEetGH9jyg5c1NhnGczTJhbSV2pCJW",
  "key6": "5tyywaCAHvQHaexAzrfKL6RFeNJRnJNKzxWujRVRj6WnyRiq4FQyFtKSme3poAuNQUGTMhaY3nEBM3FJU3G3R23T",
  "key7": "2AZubN9KqzbWbzK7i3WiEnjXHGWLoEx2f6tk5MDH9GWZ6nCjeAMV6Hr3GMUmdcbpnwo2m1ZB7Mw7fv7f9gYJxYWz",
  "key8": "e32i8E6upjxMqDUcQFzNEhrthDfWknJjJPqu4Q7uwrogMor2VehUwniPDiXTakqGC92EUJbTXkw94GHA34gjbmv",
  "key9": "35gzpVL62oDU8bXXzXD8pdnLfHLZ17YcNpfnD1d6wkSD5CQFTq4xYYYqGSNXcnzwo8QMw8kzjZSWoxwQtr26k7Ff",
  "key10": "4xMAWErSpGdE1HyDhdbrDcgaMz6B9jHtDVSW2vXVq9Midtkrm4uiRrZXUg6gf6eScwE54TWEMf6VGy9x8JApdQ2P",
  "key11": "3qZkYdwizocCGyvaKBDGZ39cVsDufth2pnCdaNW81AvejweANqTrMzAhrHadsLNRz7kWiLcsWryY6MaKSJ72Ko3F",
  "key12": "2k9VyjHtD5CmTHJhZsysZhdPgeercPwmTWFLE1JU4aoVsJFbaZSpcMcdaVcJgzRU9nZdNmyJzSPDMyviGg1sYSaU",
  "key13": "2rVvMxQYeeQzp7NcyxPGTKV1b9CYdz47qus5DtoDP4qcAhHgXNr15Mxt3to72wr9RQWZY1tkQpDQdvs61oufXU9Z",
  "key14": "5bPv2NGS4zJkG3xVR8eazgvLEDGDLUtQK2NF61mrGZ5W74nurdSyt9nJTUQxipRNEzWBZJ6aCV6UCWTEGjsQdNBK",
  "key15": "4d3VTLahCTs7NUwCqwMUdYBZJYipAW3XhmkyoMP577S8TausbmHoQQ4AbnnHrZ8ZeGZU3fPeV3RXg4YrHspNupXw",
  "key16": "2c4YQ3211Ptkmk8V6fcugD2QwqFAdabwQFY8WGapqDtMfNjLigHw9oLcL5yQ2CKqe6GBSnJtm1BPbu83yV5KNUjx",
  "key17": "4RSHke2Yz35DsJKXPUgK8Zp5C4s5Lxi18oWRofQrs4fzosg8J7smLnZ32K6M4aCQ9DMJ5W2TzH9qrYAnstySRo5c",
  "key18": "2aPCZoUMJrJ9nj5KGLnu55vmLD66Q6yxbRin6jpYAB3XNMFFMZ5CtmndbSQC1shhPeGo9TwNTRApXUZRmCt5MJVW",
  "key19": "4MCJh4qRhDMjbmNvxX3abdQsYDBMw78R4FxTRHYgFuMYkmdpQyL6ds2s8dZnsF2NttX4uGfKTZKEnLrEUJ8uvMCG",
  "key20": "5qdYgCEQ9Qd9GjBPrgx22EwcQdC7KLj3BD2Dg8Bg4SnX4WAnHH3uwgAzkjsUZrkXGkdEEt7LLjFYJXTdVY1tcrrE",
  "key21": "2NVhrAwaMhhZzt3a3YBCfnzc4oCSM6r7z9mKQ68SHUyPRotLikpp7m6ESGprtDkgF89QXc2qNh6ea6ndZxKF8FqS",
  "key22": "5ymH9e1ZfUL1Sfh2awk1xPgq8DdkDVKZMTKa6VMx9fPCUiFNUmiY781LdcEa4jee9R4VfH1KzG2erP6fUwDnaSqn",
  "key23": "44xYRB6q5cPz29DmvnuDUANHRz8PgrM1KQx18u363SQLbfRKosucizphWgWNSPSwYPpTSh6GMHEeLaZSKCzsHSoi",
  "key24": "2UJQLaWRPnbpCqk5guiujJTkboUgtzoxBCy5zZtkvfFc6Y33wmNsdG35KYuhmikcwSKJBrHXF8QkRe18k16rV9Wx",
  "key25": "3wRioK8mRmy1L1yd6DBk6eeH9mido2q1gT932xZk62r4N8cyi7fPtkhgKrHCfAcH6RrZCL3nV4pJG9ZHtaVK7Rx9",
  "key26": "5D3n3RV6cTWv4HsDggjSe8gT2DgYwpQrWath419qK6CgePcGRcvzPEiCjo1pNg3HGX3VVGbiWZDf8uFX93nicCRq",
  "key27": "49yug7MwDk8CqZYPrcQWofivRBji1LKbuGsr2sh2wJy73vcBN8wuVvTqsqHcXrExGQSoFujAut4BwWdKgoCc37nP",
  "key28": "2hBZrStRpDAuG8v3d3oXkDcRan2bptvWucUkXprdSd1ZkNq7usimuGpr4kf24MAkqB1T3Lyr4mKBdgzZ6dnh4etb",
  "key29": "xR4n2NRQDzeiK8KERg4FLUKCBoAxjKr1i9srohC57mnrG9X1atrLNjYWHfd3MUN7gekAM3BFLafsn9dEw4VsjBV",
  "key30": "3oFFLhm2Pm2qR211zLuehL7aGnKVKMPKAqWTdnVZhnpsFoD4FPCogy7MBVMyZ71zM2dTU3EzFe6TUg9eiGCeMNpP",
  "key31": "2sgruwpJ2i7Tt4abDtCR9G2nfLSM3N2Dw5RrRSTiZwVjJewRivkYGeABjzBdKSWUFEERCb4hw7JmSJokoJ3Xgkej",
  "key32": "3S9wR3eu5cJDiYNk3rQdvTTtEwY7bQkd2YRyXSoZFvK6gnSVXbFYmHqSXxwEcvRKEtArwZUTvcgV5FUhBRsUTcnf",
  "key33": "22cbWrjJ24L7sX54gyHo5D65W1tNrVqekSqEY1eKe6MYzGFexyYy7dy5YDJygDrkVEqMJbnsirdGtuF8Cq21CKjT",
  "key34": "5sWNWbcsx3JG9ipk4n8Femvmba3BGQzeK487UnKEDfWuC7X6zYbM6tWUpvTWdY5frB7bYphUfAFQHsW23BscnSXZ"
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
