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
    "2GJi4neN8zUVZDV9unSSQViueJMGZGPMYqpcxL8kGmtif5UE2mBr8nbpFDKaN2UytEw13TzzCMrMQZLsVadCmNiP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5knuVPorURHTT2fMV8msX6sm2Hchbtj5Jc9Ktq2h4hzcX3SnZkEUKJ22wV8H5M4DBE4t5XzMSuAFmzd7sxc6vwhp",
  "key1": "3LQooxwkVpBtvuS4pYU8i5dTCSUqF9ZsLoZgh3ytKZJ4Fb8TgfqVQcVZ6odGEUJVeWGcdixW8KbpEQyqjmWTpxf4",
  "key2": "5uEtvP33w8GnHu8pH8MUa2wqmzRE4yUFm2gpPUpDgQLDa5eVCRAumXqaGpvcCAmBfFDhnF2a7VJAeFzJN58udR8H",
  "key3": "5gPQhVrwVBprePS5haRRSV9Pz4eHcxiBvhF4hWqZGoxYCGdriuqSVVn45yZCjqbbGT3jUGuZSVcsFcy3V9mmywYz",
  "key4": "3sVqnUocmTWArHWtK1b7vUxWKYyHtW26LYRk4GKRjToLNdPfxxXFD2gTcfqeJ5i326P9chDryT21QNDeR9iFUw7X",
  "key5": "2qsiMXiSF9mh2cjE6PJYnvC1hkf4oSmG1CXRHq54L7rQmUDhm3rT5F1vv3LKJiakVNKQS6dWASoF6yyLeG1kfYXP",
  "key6": "GbnafXVosdW2wV1vHHcw1xh7cLuDzWsLzEdPsyDHCZ5KTSjQGsUy6FWVwaJRhFUgNqmbWKLSjQByJnrp7r25Rwu",
  "key7": "4E8Dnv23JpedJN9U3jnxqvbgX3wA3mXKpDVMVFRCXCheB9bQGTSrUCoBhjpYjo1BojguVU5KrTFUwupViVLzX4mV",
  "key8": "3aNLZ8sMco4h1sC1E1NoizJVikxDXzS4rq27E6rJ3fcEoyTGm5GoDxHS4pD5wY8F2ktu6nWJmvQXsmeCvRNURbbn",
  "key9": "4mbwPaL29jJJpe7KPpm1idaje5W2mnXk1DjoR429WBHsgZoNq8ChZDfLeF7b523J5FTTGB8ejWmdF9qk9T8NGRmM",
  "key10": "3EvLDp3VGJ1Gu7TbYAN9WyDmA7G4wpxgi19CnWLr4Gu9Tfn3kVDey6RiQCUg74pZBcJgDDcjb7HQqPen3pRoe6ZR",
  "key11": "3C5viwP5tns3cNceGAMGqkGyDmA5jmZHkrvugJGugo7xNvCH9pHQychzhfpnoxmbvQqvULLPEG1tmwgZhQPeqg85",
  "key12": "33Ez4vpGfyBQeY5GweY3ce9ZW86MUPAjDXrVrjDzX2XXWhvz5Bo8ZsXZ28wZwzceFkM7zKP5TLyMAjz8PNwesCLt",
  "key13": "47zxLYHsCdkXjpw1LNPJaZcmSHjxdGuYqzk33m6B2ric8nuZ14hKcqPLyepQTffG5HWTstAX7d8EuQbi4YipaUem",
  "key14": "x9hhsNn49mEY38FKdZ6TCVoiwo3YGsHXPnVR3NtgKbBnnafTzKfzsoYKsuPkLRKnXXDAnAVZTERHgAt6GXNHbn6",
  "key15": "5FhwSMqhR2FfNrfNwSoW4gG856yWrN2zQwFLVwXsnMFwPUQCdfJ16wpQJjyKZQwwuivVud1resycuohK8b3KHrjc",
  "key16": "5c4WSALaELQzW9EjfD8HvUNhLmQYV5pxMEHr2DVMQsBFhYTMM3SdzdeuQ4KoyTYxJcbmXW1normEUsKnJMfGfKVW",
  "key17": "2UxCmSrsVh79p8Y78o4T1oSnZB3RtsMpXUGMReihNnmkHhSfv8o8eBGxBBxEumoM9kNoSocxVBSMBN57W9WuhGdw",
  "key18": "3nqcmrzdnJv6wZizBYSbirdXZmQrdSpd5Uq8vP9Q7Dytkj2Y8mHCQ9k7ZuyrSWruv4Rvp8m2kuc9dHANWy9PSycN",
  "key19": "3aHYJmeQBEPwy7nC2CyaewGr9Y9X5pnSzsX4ASK66JLCpnY5taNgW5HKi1QMTVtuxkTdhAAF23godg42TMUPcq3C",
  "key20": "tXGFitXArYrDqjppNQjE9NysCRCmFeWmsbhVDwyBZZxFKza8AYWKS1mYdQSpSLLDzSBxLj3gyhuGT6VYQSXk6YF",
  "key21": "4Px3QtiAAVqzdexrrknxKr1j5RmXDoGNiHNGRFYxAHXBrD5cXrR1fciJMz3pNdCAk4Lvpef5if3WGuTXqF28btHT",
  "key22": "2femWesQmD8FoX1NLYZm8XQFp38hoK4ZRdXkhu61svwHAGtoPVHubWQeJoc4xvkzSKGuUe4hsjh1RnMWZXcMn75W",
  "key23": "2d8AK4x1E3bykbgNKDNHKykBYd9NF17ZZ7QTCXi92YQBpPHpgFJHxaRGDftEGj9KxYL6aMKw5hb5SYmyWdv2yogL",
  "key24": "5AvWp28GdD4XKmi29W6SvaeMaSkYDrhWK3642U4NYpYfs4dHXnTpp9PxY6t1tkAzHeB9enAPKEX5MyoEpqbj92qv",
  "key25": "LrkfuF6V8TapdDKvZfxdrL8hWsD83fJmrPv4haGufyGKpXbynBt14ynT5shF2pZeMVY5PBDD64Q7X59zfVwSWbK",
  "key26": "26aQt5Ppxdnw5fHXnApFAP2Nb3hnSkvpsQf1skpCUvUkhdF2d3bMAaFi4utjHsy5r6bjDFNcCh9T7LpkV3qZWxpR",
  "key27": "2XgkgUedVycErqhLYpHbVPUN5pdtNZjHpNetkUvpUJNBsroH1cu8BHjyAGtwE3fMmzcULiNK2UkGSw92UTC2fD1f",
  "key28": "5Tf2SVE9bQKa4J9fmkXpZGBoq4WcpdAeBxRttuNufaeX8XAuyUMkVH8sDNg9WuZrY8XfHtshiqDct8gXVAEuxK3H",
  "key29": "4UcfmFvkxdu7m64ee3YckZ1GboZXa2zMQQKnsxAzUgtBG6b8EqK7aKmemXVbHMb6jJaAttXcsi2pqHWEZszbFYD1",
  "key30": "3wWtJGD5yiXN6Uayowza9t1rBwY4sjPi8tYmcG2Ts18nUX1XERGKEL37xK29NRL3JDkWw5Hwba9tH4aS8dX8yY5C"
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
