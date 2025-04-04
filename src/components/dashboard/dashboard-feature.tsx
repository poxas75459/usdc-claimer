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
    "4VX4nEM2js2RJbtbjy61e763fwCxtmp7aXi8Cj9MjBkHkydUNHTeNde6nA9i6ui11uADVf1rN1QZKRCH49WaA6cA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rY6VZjRvwbcHAaYGXGnuntKHFpxCS55Akg3ueLm9egjLp4oFTtHYxj8evJu2trqu4QWZX2mqPzEPJioEvYJmrL7",
  "key1": "65shK8XPUZowHkUXvQQB5RQb4vvvizitpp87A8TQLEZ9Logdx41jkHmjZNggJMqetWsp5VjnUbCgz8oB9vox3f1L",
  "key2": "oRTg72sUrv63RqQav7XrjN3X3dfmNBnV9wBgDbVc8dcDfNSkydHykqGXqRkBNnrbt8nQS9TqdqoHSuuq64HYf3J",
  "key3": "3ugNtfcjFhJhppio98pCLj9QfH7b5iRzRfsJfbmUg6s329VEiLkqzVHAufZZFCZtvx6HjqM8ghq3mjofdgv2PCTJ",
  "key4": "3LE9bzhbY8Kf6AJkmKGtZaUCAkEi8XHopuTL9XQomELh9BkRTZaVbqXNDeQw27hbEKUq1xRzLbYetw5Qm1ZvT6hZ",
  "key5": "5dMWpTE9gyy974994AaGQgcE37PHQRuEGsZnJEuJcyLLQNti3CAuy2Ru2zNUGNdGBnrMQj8oX8jzZEkn2PHpvmsz",
  "key6": "3hv9k2Xg9kP2zbvmFbS1RWQgzRsAs4aEo87qX9nWVmmDaX8ZUns8px3mhq7EqPTJNYNRovNLn4DpvG8dRqZqNXPC",
  "key7": "iX657uXps1sV4vkgB6DmuFAs4P9KYPAV6djF5xiH3X6ufzWa1JpUxqvm6FrvUUHbN4ErCtMxsuNUWapgiJxhutP",
  "key8": "3nToLpkkGoDAe98AzQ86AdbLYAeSKVk3q57oDrqU1Wy3uqY2hakHsdJSQXmUNT8uXRc7xDejLKSysW8xqNa7fhWy",
  "key9": "3oaAaSJuMZs9eGiy7hM3ALhu6CuTe6kHj7FuZ6k5RuXRJV837aA2eihJRaoqv8sF5CN7JExSi4i393gsUbqAPfwf",
  "key10": "4Gn3kAHsMLmYT42zMwS5sryq75NW5kLpKjwd4tYwZU9oWUgW6csQyjvmpsfy8UQL89VrYbo5M9dsnK5N6z4mQaam",
  "key11": "2KaTDimNZgTGAJvorHFNUYdbfvF1A8iXx2MCfXnDMy1hj973sb4q8A7o231DRupomeoEbmD8ti1tqWcu4vpZYiFF",
  "key12": "3GSjp5DtfK5rjq96uriBC4a6vZ1gUU7uRftgZWZFXvKTyVTAu94jthxaTPiAeq2bfseMRaZ1ck7mVFTUUheaj3xo",
  "key13": "2eFjCArMFuCgDskMQEzfbede3szuqxZvK5cLbWg569JPCBcpUYj1XizgzoYeTFh8tXvamjjLTXzVEUPkMA6wMgoc",
  "key14": "57zhb25UjNAC5hQzsz12WniN42mwN1ULUBChBeTi1hi546r1zwoiktveH21xwNd7P4JojYqcp7geEEYs8TYq3mnJ",
  "key15": "4Xdg2bPKRRQDKVMXm1Nb6zseswXZemQw8tUG4AaaPUTUqHUcknd35K8BQmz1LyivkVvWUtxyB6RSe7LzzpdWkvEA",
  "key16": "1hroyeBJ1Bu49MNJ7xay4Cn3fJfz1pPmSXM1nD9BTQnRsoXipAB92vNMETdMXMCVSaV6r7M8CBsmoyju3n9pm4L",
  "key17": "4cR2JcdjFkkDrUQyoi15m7LUyJguUquYJX4yHqvfWs3Np6nGBx2aCdUCqPdGtktnJfYtdu6xUULLTKShUzxkiHQ",
  "key18": "55bmLpZkAHnrdX5Xu7hNTZUTCqbiKzKT9BhYi89rUTQcZZxrNPAibm7zMYJvu5ohjA9sVJnSp3sniFbRH3UnAtL2",
  "key19": "oHtfase2vJgtC59EtgPfDLCAR6M746YZrERzEQewZ4jtmvEMGLYoRtHY4yLWnZyK2bdzm357uz9YcEHQCPZR6Zj",
  "key20": "389HbJTWdhf6h7R7gAVhC2SdND2RLBJ1YQPPKA6Qqv1kMLoGfN6RqbjKN9FiySQBdE4F9f5evin3pormrHFcUnRw",
  "key21": "2AmYypiXfhYdgcxsCByUpACRZDKKTqhqpNxocgERbbpk9eZ2gSjAt53VVpaJTqbYZVKeVuppfQJjBP231C9anaB8",
  "key22": "3wu9i6o5kHZEdAt7frTMiGe4Fdq8bmz4Y8enGeoP4DJLu4XNkwcojMv3Nyv7S4Xys7Hm4JyCRgqYMp1uBnC7sr9w",
  "key23": "51JbThkSHePeMs9duwPQXZMJNRk9DcKF32N48UFxTPrvbMmx5TGZvgQbyeocGVfNJ3PHQeHfvpk8vkuFpPdh6Afh",
  "key24": "2Rt7uNsptky8V4yhqZUm8s7fgrx5Nmfn1pu1SyUQ4hNfpf7PYyAAqsok259qhBy1w1VBeJ744S4rPMrgbsUzwq3",
  "key25": "2dfo3y7G2ppr632R2C8WLLV6wr7RXkmvkNi5SsmKM5mhaTpgpkm5beiZMxtJQx4Yyf9hnqUQbocwuR6pvwQT99Yp",
  "key26": "yeu6Ji2VtUAgNd3YLzbZLj4rqJuWQrLX7H7jwCSS6jStxzDHaXvocEBhXo4ewG4hw4mzcqLaB9LnKc83Pq7sEoE",
  "key27": "39vLU2bVgtvJ5SjbaP2XVN1bx6a4cdbuu2cKEuzSAvN5F2LuFjEJSH1PudQvjmGuESNFi7iNPv73RkLy81dq3Gne",
  "key28": "3K6PacZvZ8pW9JgHA5gTynXvNwQFxkwsJ87Xy6EaxAgTJb1PLbZgLrUqLqmnvG46HZG797FaPdb1soEaaQVUMVW7",
  "key29": "2c1bFYJEWd4xEhTG6LdHpHSwfV5sQtq2Vd4bMmjfvVbmfJf4KMhDzNqJ8FMHyVCaPkBKnaB8V6eJ7uNa6BfoSTyX",
  "key30": "2CpFCf2YNcx6esVJGEo1zVhPv8ny6kRyJg8RfPCPEZNNAwqVJ2wcf9Bk5aBTMK7MjTMdsFWTWffrJrbZvPv5ngSU",
  "key31": "2DGG8w92cWbRgbJnDwfUyz62AbkNPv7urn6prDndzFR72oTbdtBDyvyyPeSstGX91J1atmchhxCMqZCP97YEsdnh",
  "key32": "44hhXw3CLnSdhL2sfrAqqEqCkqL9B2CeMUMRhaDMegyS2rKdemX4ChLcNQnYKoVikACgcdfgrtQxm836T9c7Zsd3",
  "key33": "2e4MfWEugfnSKVCrHtmPCP6yquJVxYB6MpxSbtTAyz6VFDmMLpJE3henhJLgL6d1LPuSpTnhrKWQWottFRbKzo5o",
  "key34": "4CGHS8K8PTG4QZXyFobAo7mESEBiWH3F5okppZPyeUKKs9fCGJKmZPRdb1VHdDWcGic5JQrZ9TN4Gz21dBXfaS17",
  "key35": "3h19QCA4NfqrbvNDv5H3JU2hH1EzU5HVDXbuPUmSHprWbPZAMiXUketdQDSZt5vuPVmbowgyg6kuLCyMVoQ4eEvK"
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
