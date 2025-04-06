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
    "4rBaaAx2TTbeXUX8NfGfxDdxuxXV2RzCJz8Qctkd2PQhDGSSYrS25XkU8BkZxerEEJf6HH1LiGwRjja8LUgHyadh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HohmHEcR5CzJYxCr8rQYQpc48GrtubnQE8d187ZBuak1rfHnyQ2FRAm8WGdzHXk8DCqbeCMGVVvSNPaSuKLTqHY",
  "key1": "5f21Dj1cFzfTYEFf4crivE4Xbixc2HonSYcUVF7zAFeVYGFFPCx57q5hP2vh5eSGqfiVRoQdeoRQCS2U41ne5puy",
  "key2": "298S4eviTGfM2V8ADd6cGDNatNtLQSPt55ZMmZSweWcS6KZANwo54SniJGcrSKZv6z7yrXUnMM6d4uMGWo9ffwkZ",
  "key3": "f2Uur2vK8XN5pXgBwhtfmM2vsakFGghDxF1qjBWAj4GBUaBxkX4McTug5ifgSoqWHm1xPqHfVBxmVt9t4DhPxx1",
  "key4": "yWu9Wv1V6ZkgbQ8YiqghM6Ww2atp4C4ivW1CZFPPxn6548kqhdnRtFUHzsLQiXzhGGCtP1NAUFMZJPQcc36xs6h",
  "key5": "5PtdT3Jy526RV6Jy3rMeZB4HPAX3xYk4zV1Z8eau6yA7F1sMH2eqAiyxhYkVSoLNRjUa48qP1VyN8BQq7CHvvpS7",
  "key6": "59dNDHiA83oXt7exPg2vWwSkFkoinbypx8bVXaZEXJLs9t21xKvsbTx6LELFHU2EhoVr5Zp9qrmzzZvw3rEVhwLT",
  "key7": "5YrFMCuj79iX66wWJ1S4uQwPxZ6vsEGQ8vtXVTdaWyP2SqgLAWstRykb8oGVGZ37F1Uhst6wH7WgvhonDd74ynUg",
  "key8": "3Cp7o9eUmY3XmRYVjXiCG3bEogwdBcmAu1yfhht8WwkaurYLFZu9uk8eXstw7DUFxBAFAYHeBNytus9ejhb6949d",
  "key9": "5EDDUK5hXRFeLfwQDsh6WTbo2SCUezTZcxuTeeCDbWX58wKr8zcgdQkp5J9Qhq1dqzUGirLLzSwTVotZc1SV6NRV",
  "key10": "5LpdPs2dNyjhkwqxkoVwRukEw9aZU9hS38EsMFHR3Jn2CQADE1rddYUbAkq5Qqdoee23sCzmRB7syavdqoqPQAzt",
  "key11": "5f4op8r6AMjDWB2CXWzYDQwbd3LJmhTdDN3vzdCyH2w8y5hvU9gH5ARs8viSreGMA172uXwpiKrZRwYvzkXY7L8H",
  "key12": "4oVjeSbukxaXEGF6tkQsYyT5oYpTN8GrippNtoFWkemZEuwbX9uFcfsUJ5iTgg3h2E6vD7Roh7t5CSBi7K4cmnKg",
  "key13": "25g3THEwruuHKWpmWbPwaFR2UE1pbzqNtf63q4ypmyFZivPvds2ZABr4y4FpLaZSyQUNMty8mk2gRmvyPN76MPVg",
  "key14": "4caSF86UCnF4fetbxLwetAtDQycpqeZXFvHPMKPELmUCWVi8Qbmm7E3kb4dWVGat2oKLopbENvNvB2hzJZzvhqKK",
  "key15": "41gvVf3TDQmDyAap2mzj7sSEsUx1Ae5yhCgPkMvP8Noym5ZbntWviXKDMDUFW7LB6Z9EtpeQMAPhJ3ZCaqS7PG8N",
  "key16": "4aC1cqPA2hyB7YVUsDBJ1Rocj7WtVdP3ZV57uAXMXL4GfiR8ECTGqgjVWV69hkNH1N4a3JewTeiqLyqDqAgYoHV7",
  "key17": "3TWiGPXbAEfSAtfrg2MKXfxUr4s2kpNsj5KqE2qLfsYq53dEFy737qaqCWPZRRNzXUF9CzTwVKuc3EjWjP88dMmV",
  "key18": "48TBgUVGUGFHswc2natzAdW83eca4u9cZpZdMpgyE1i1aDzXyYzAFQpnn9kniaNesPr6kCwDvADT5jqWV1YP1fE6",
  "key19": "4tJpTUwTnqnWEi5FhXRP2kmGAt8VNrji7mSY6tUR8HqqepByVKPrU8xJwCW3DR9ViZAC8wQWnEuaE44TAmEL4XkA",
  "key20": "4esF7AFUiEVUNj9pARL4mc3eVADVwTdPbH8mqfqFXgHqAbp5jrvJQftJLe96Tqq7PwZSa6T6VLuRpNCEv1QTvqtd",
  "key21": "4q2vDSCwS73j2zLYRXWZ4e3a9GZxEzrn38Dg7qfaBmCrtceMZUYCQzVkjFGr8iTynVg74Sh3cTM1QEv76YMYhRJh",
  "key22": "3VGJ3L8sXaruGoDhWj1HHhWLFkRjWtLTWuyE8AWZVyWSGwnFk3mAQFTJbUtWFcbeFDEhbC2Nezb7MX7EV3i2CKRu",
  "key23": "5p3ZvRaLzBoVicFMf7nENHDz4yzg3FB23NC7so49xyVnwA8JaSyD6fQ62GT6ejRYazvGoJXQM73JFerCmcN7wk8Y",
  "key24": "4ueM8e2Ratbqqys3tabfkoeWes48mdT3jLRuvsNjL5gCmbA74kVLAefufitxFdo46g4KpTKMPunChBj7UHYivdfq",
  "key25": "2FmusN71wdSicgNpL3RMDuQA61J66FzfM8txYkkraL3yMQ1wGqEgbv5zb2q9QH5kbytJCTxtZtSYuXdrd3UT5mEd",
  "key26": "3b3R9aJMYK55aApgF5CapS72gLuL7tLuJxLp4guUJpgQGbix7hTCdWV6PgTQJimT5rAnsb8B8K5V5vxMdaF9kWHx",
  "key27": "3iCzkbXoVAjUBATHQVkxFBqXpc2xk25KyBzpUe7tiDH5aeybGz65KH9RpPhVXMCoBg7H8xxtoyvLxKVfR4BcsKCn",
  "key28": "4DaR6Y3GwFfaCbKZfU3fYuT4qzu3fVieriZ6peCboxn1151Fbnt1NxnUNRmHpqbU1D9igvnnLaGVdBrkVcT1FEg4"
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
