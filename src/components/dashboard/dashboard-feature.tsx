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
    "4aHaaCVzsEhpDC2v23Wj8bB4GJHDjnxBEenZkah4yqVnsVPPCCXWB9kTcvLn5JdrMa1mtK91NrqSMB5gp4o2Gka1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kGVNsdrvgQKtxUC3hM7C7nNFmGkMn2aMzcAsL67PkYdu9s5pqJJQ97knRHhEYEhE8Hcdh39m1DbxZBEt4kMJzRf",
  "key1": "3uFGkgkoKxr3qPfDnMEFRAwfNzxsvX9tbqQuGC7mea8FXmVPY62vyzwB9cmijmDwceycmEkFQ8BYNFHBLkmW66Fk",
  "key2": "3YrxpPDQ565sLEYzdd2uF7iiqDG8H3tL4zvT4xBjTUo4P2Z7ak1HZeUKX1HK9gnV1TMhm6F2ELgboeDwn8wTmCz8",
  "key3": "5b3Y5x2ic4vZ5EV4wjiD9eMLBcmKHczhT5ojp2JRotqiZ83FNzQMvnzWkj6okgAMXSjd489icA1dw2kCdh3GqSXN",
  "key4": "3tKFTbBJ8NQejCCApi8DUFWRFjeNzsWb7L7XFjQZxPgmuiepgNEZzLU5m1tZymAitgANFCMc7WGgMKNBowq38FVt",
  "key5": "dNzUGwp356oaGdxaxRXabyDV5gemGucB2dgeTfwnHQf6YS7hUTm1vq9r97anVZNeLe2n8GYYkeVknhVGVS65twR",
  "key6": "5oJ31SYBrdmdDxFLQV5Bbq6t3nNZToheZQJ97xuuQRvJc1p4tqZNtHP4yrariRYi6gwE5mCvPUw5NETjSiEeXTXg",
  "key7": "3tQea8P5fnMkU3Q72rp8NrQhY9HqL4xHMkSC4oY1adf1dNqxQvzAHtJkBabYKkKpoxqWtXJYyEY3oZqXYx85U25Q",
  "key8": "2MS9wVpmFPqN6M3dSNwgu9fKM5Yinu8h4AXfJ7RXCsXZTKLGhp5kQSnPkGdikxn8Q5KQNxmhe5s2h2j1QNvmFdCw",
  "key9": "5W6AXo44wehHXsf1K5xNVLpJSR1PxPqjkj7umvFxexJHBbHnrqThjf4aDABMfxAyTamE6QNZ5oYo8qxJ7qU4bzKq",
  "key10": "5v8p4mh232awuJASLDzY4Z4PuQWpb4pih4ezaW1xEginqeUokTBYG1jdCTm449dcxbmwi8UK7ZNT3oHKSSNyV8gR",
  "key11": "4PAwL353kxySxnvkaqYAzs5urLhbujAeZkNjgboznm4GUR27xTVgZGud2JyaU9tKyREZS2vAWATuy8bFTsG6bkDa",
  "key12": "51HtNoJAR8WF7WzLWGpAoRt65HoNkFCDB9SDgyVdW15S2wWZw35KjQVLRxvz1fmvdf4ZZ4Y2ZWhAvMWmkZBseph8",
  "key13": "2DMeL6zfDaPPCACfGYhw7QAKxecHRopNDbXgEwigdPKh6P9CDHarreikax9R5ibddkHMpnoMTH8RdV8AZ9VboRVT",
  "key14": "2UDw1P3spp6fCp4hwP3fPz3yDJvtC6qyL8Aw7QtMUA6HoG2YRQ3t65gw96YqrGSPSGMzwnkFoS1kqt3jB3GWdaCG",
  "key15": "2hVhUrxgyi3FDMa6LKsd1CqrGEvnQtd9vj3eWUw5U8B847X9zXwwkDedVXkZL5UktYAGivAzbhdNivuwq8tEu6BE",
  "key16": "z1J1d5QYxc4cvD65L5CL844Kot5rYaQGMnKemE72LX26N4DzAJdrUS9cRfgi7R9npb6YZVUuT4niXtW5fekhRxB",
  "key17": "rWpQbpywB4qRY3NGXRdtbxtnrGGDq51gKTg7JBiEYfW83u4R7st6b1qZEVjERpP2x4sQ8wub5ZegzFqispVSgzH",
  "key18": "4pPNnXSR5Y7gbe1ZMEqD4TqLzKBV74VD77HnWcvLiLX62UfqNsUCBzxQ76GfT7a3aZ6D1CAUC5zFqUcMqcvxXwSM",
  "key19": "59fDNJSL26433B5ripePpkcBJvs4hUjCVC9Pivza9ukT6SX7kXHBB687QKs4a3nf4w1YWea5JyX8ZxXTfCXTZebJ",
  "key20": "2wdUpko9dc4ZFCPjyUYE92HzSWvNFRbJDxAbQst5Jh6jtVadpjEedurZY2dGnfRqiZJFJfzHB8fjHy65JvdYyeZs",
  "key21": "31ajmWt9qqTWD6aL77sxLSRDyb4zjfMFo9u9uVk17Xouf11JmtWkyrQNWxrhG3Ta3d6doSX1bFhKU6jGPuDvatTv",
  "key22": "2tnoTM9SKxtk1VpN7YcwhJDbD6SD11buSRv5hQAKa6SogTnFRdrKdH2Y8zBVh3iCC9vtWiBDnXwtpLmtXYpz2hZV",
  "key23": "5F28KiYxyuCXSbjMNkq7tMLqmAf2r8e5A8bYHepm71kGg5hLSDh5MfrcsXZPFuMnf1AD72jkGeDStEo27FyHx531",
  "key24": "5mZMAzhXBUhFUetByUMt3FxxZdQfFJFkXUVv4e9sL37AYKMignPprudKVD3fpy55wMTmZurRNXuVPZ4jFG3cURwi",
  "key25": "2UigEECcVRXPNcBTvwvRuTH8xQvX2rgwjKRsw2nzMJfexxVVuZoke88N5L6QPN2Sha7A2SDeUfCoYnaNaAdsmsaY",
  "key26": "7tYVQLQfsn7fGCrHQ7hzxYSvZ34Qo96QN2igRKfJsQ3LpeqKpWpakCVZLtgAfqNVrnuda8Ueivae378gH59n55W",
  "key27": "2JgtRWQYPLBpvGoKs47GaEz9BizmD2be2AsaXvXebRdBSTUaiynPLnEs1NyJ25pi3t4AvmGs1z1Y283DGEGBdpGs",
  "key28": "5QQzpqrNB5zQzaAB1dZKyehbTxVUZALs4sDQCeYhfNk41oGPwtS9SFFmn76eN3rqgx4VTDSbpGP8G6Y35euBGkqh",
  "key29": "67euhT3s6XH9nEDAgfLeJkDuoUJUQaqn9WNt9qa2zKdXTy3iN1XHv8N8sZSh43jERVuzs1P6pk1YeazZohQqqFMK",
  "key30": "4JXsKp2GjzCACXoCsGeTfAS3siGkSneBY7EZpx1rr6cdhbw9wQ89VvSJJ2BxmkT1fx8Et6wv1HyMRVXNooPHNqsE",
  "key31": "4H62RAMUGgoPKhXckgYQuUUw8w9HNUzaCqzMztx5337FrxW9A1e8LGgd8gkWnvgpQyL7xMJQJWxaspVi25GfmBke",
  "key32": "3EqJEi7V6WzR54SnriBzjQFustYprL2DHgurGTMt1V8GyQjqS8JJVubwvzJonhwuNmiCGJZ9ceL64Ja4FhH5uNGx",
  "key33": "5jAfMW1cLpDCx9EL4oaPSJ7wQJu89YGQRspGPSc3GKmPaSkpye8gDJHbkdfvY7CrZHigWAN6JWm4uDizp7gw5B65",
  "key34": "5a8jKv8dCYtNrxqJsqsDiNSXLXC5SnwVdrAGxekEs5i5TU4pe5YdEudZvmuxxrfJEwirDoTXNR286GcoMmDbhHip",
  "key35": "5sqJkcyJ4FzAt3m1CW4Pk8cpu1BH4pHZFQa8vq2eonyeVYJMSH1i3isjnaoUERti696bDCepe12pLHQJutsJQT3r",
  "key36": "2FXhJw5dQtmtbRTFaXYQMCh2kKJvrvVcqYvgmR5H319u6FufqgwFaYZ1TxVUGq5xKNY4UnvZWwt1iEPRWaXpd3mD"
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
