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
    "ymsMXxafN9kNFgVRzPx4JXoyMkZmU3sSLxi6WMYFouj41zD42BqpPFm87GHJQSX7pHSNoBjyjpAetYDC21x6E2B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EhE18HnqK1XaCBkDDb8XSMCwamBjHK37bkA6rfKngsFBePZFRZ6D54cexvmQAcj8YVvDeD2BtSJoh5qYHcbanqb",
  "key1": "5mwCpsGYAyAurbxKpJPBQeh7uqK4yquyzcLwNJje8ctmTJYmFiw14G5Yg6P3nFdoiQ1Bku2tcmkkjCJDDEkgFLe1",
  "key2": "3afH8b95EpVLPQwVM7aDyLzNqC8vmnmHjvkaWCTMjsXQ7Zm3DyrRRsgRwNpAocUr8mUrr8KTkp2grGJZsXPWLPtx",
  "key3": "27P963fhARcrQvm6aWt6M1pFvDS2bBHzK72ApG78revzpMvCu3xJXYziV4PoK8jauy5eciBHfACRtFpTEhQFyu3g",
  "key4": "jfvZDAkEAXrjXdxjUQ2vKMC5dJsT5AsCF7sBX6VCnVhvGo64ZsfPS1Z4sDgB2wp6JfrQVrtqd9DCprbcm74UTD3",
  "key5": "5TG1sGVegN51wuzpBY2NLX8xtK3zXbHrB2WVWUEFcQqYVZScbg7mFRDk29iBRFbHz1niv6VctkM2MQ8n7eyY2DHs",
  "key6": "5k45Gy2Jz6udbzDW6PmS9SfUBz3Kxa226eexdemNdJ5xRdh5ck2444T4zaFLEbFULK6q4gpKEFgQGW5DsG7FCHTU",
  "key7": "2DSzMMv65WdxhzR227ewiYr8hyB9jdG3jPbXU4RxuEuwUpuU4gFcUPpSb6VegrMgKntprcEkNoYrsnJmYcnLFUmy",
  "key8": "hVm9NbY7npPrWfzMyprjbvHgDpQyjqrSVcpYbNGoLkfghrTzXSCdoLsid5Es9mKerpSvgQJCR4Lo1cHS1odRJD7",
  "key9": "4Ur8mDSubNYMJiZ3Z9BLdW7CKeq9urUqviXgzjFoXSXazQXa8KE5XyHJtAnmWShUF2tC1G4BeSWJWwUYSs2DSiPW",
  "key10": "W2PNpoPNKV6dycbhpfypDGYkXcLEWHQ4xod5vy55fU99h7Mx2DfQYibBRi9YLWMJhhmS4XjbVxnUcNc8pcREU3y",
  "key11": "QpeC5s2m3iUjcACWyCeMcRkna1KZxJ1znkZ5vZM4EcTLVSLqdka8Um6zFWBfrdGor2FohXhvH8HtJzvtwM9MdXj",
  "key12": "4aKk6Lt8KBjQNnw3LQ71yxqDK3KGmCir5oDbxk3U9ztLtUVqTfXDKYbj64t7VBfNNHZVbs3ZrLGQpjQarE4MnnbP",
  "key13": "22p4RkJzGi9vzLtrQ3ApP2oNtrmUdoU7ZbA1zb4a7rxZsGtFDisLrCChLn5Nip2ER5jjvKjKeB8ZAERf2tCi83J7",
  "key14": "3iVmz1AJKQXXPiJw6R7CnCMtSjVyuJYNinYZnjkta7uskrsctKqVT7zaDJdzMjgCJJWYfuFzpcDFHUaJCv81Cybs",
  "key15": "35RWWTjXtdZuMbQXRQuEMEkapcFMQgNcRKZYvH2Hi6xYrFahX9mJNFHVD6qrwHL74XxUNq9A7JqbUVk5L6VEpGfP",
  "key16": "5BBhpBpuyi4vPQNbJUAnWNA9EXcQvN6NT3fNTEkNaLMx7tqneQc6X4dJJPXXF4uYz8L69ipdP3cQwcoUDrp7nnk6",
  "key17": "3ADLSv6oSPUyAxTKwXtU7JX52BDJBo3mhLYBPyJeHK4AzmYYUrWr5YEGnfHvQtMc8dAgQGPYA7BqikNrLDYZAAnR",
  "key18": "5JoV8tDQ9EjzZXKdjC4UX2i7ZFUFmiA3VrgUNn1UPueX4ULePmEXhj77erpVVKxAjhsd4eaCm4F8ESo5cSptv25j",
  "key19": "3hbDQacSaAaoygePEcFY6JNXeZrt2yN9nimaTSEAw8ocZqQ4QR2NndWZCVRLr5TJ5sZaSeSiHUnggfih78qNds8f",
  "key20": "coqAPPqP6iQJRpikP4R8saX2Syry8kx6GKnWcZs41LTeckLYyiFe4PYwpXPBUc7G5gxVCnNvny4XjUqpTp3ZrDe",
  "key21": "3qXNqHjjVJ7z6TgacLpoAR7b1V8etCe33hsFSAvASBkf2GdqENJzr6xkwT23pEaE1EaP26ZCEDtxqitMwP3QYvZv",
  "key22": "65BPtktqGUBMsG3ZPnZFwzbS4nYXoZKcfvjQSdfmsjPChgoqdY18fBqAHyhhPiGUXwdSXdeWzqbw4rRyDfq1dki7",
  "key23": "1oapgDxp9MURLY51W91TiSgvgEmVkkN6tcuo7nLwHkfrrRnNtn2nwcwiSkjtJs9eSeAJRn56XW4Tmba8DHEDAnw",
  "key24": "279LTBSGyvyXPF7gTNuvnjxuJw3ahSWWUAhgMYU3XfW2ALhHpGFozYoEARDnGeFXwULwUmTztgz8rGp96HYgDwhe",
  "key25": "4mDoy1euP4d5F8hUd2mXeqq1Zkvtmy2HFkmk56hmt44djYbEwr7s4VjR4F9P3Ljn1fGmamp9gdPBYKwFLXexCLS4",
  "key26": "2xMUEiNDpmjYWwxwxXn5QtPmX7BtPbyjW7p958t3YBW4xTNQL7zMP4qKZdCZ6QFJTWpqVv9R2jdqomRgWsWQR1iZ",
  "key27": "rKXK9Qp5PNq7KssGD38XM6ooxKSwvrxjiY7T4snQkUokDuFpKgcp3SeGGTJZfNRyGofhbDVvNAsRQiv2rMk18uA",
  "key28": "Fc44Vr4YpTLxdkjuekEEG2Lux116cntMag8k5Gqq1nDo3ybdA9SBptHsVZC1bwst6szkJg4wLRN9GH7wJ3U6PcD",
  "key29": "3eE6G5fPeJW9YwR6HH7MCbPZjvJPrDnajFsZR1dBWmcDbu5yJk4uZtkfbEWeMtH9MZHvjN2MEQpGzu3FsFwo4uiY"
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
