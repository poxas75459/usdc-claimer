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
    "4aAkQoLZY8FqYSG7ewdQt1o5AZLNjRaUu4tfYPmyuUCTax3BMkXqMacTwaGfyY1iLFzYG2nNNfgQjKL67qFdCRWx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48VQdwTbk6B9Ykq1qSHS2oUEG9rubkK1XvttShhrvjntxWPEQx6t4b8JEV8G4K1RGKHbwrwW4ZHVivbcRreJ8Mvj",
  "key1": "5fp7D1c48hur1hDBXCf5uBMVzhMnrTpZw4gwJiZ7VeEKZf1pLTnFafVU3jTXDKkqDuuuzH3LjfjWJSY3aV4L4Pvm",
  "key2": "DkqEZyFiAY8ZY5zPqNh7Lg4asW8kcYnvfhZUHErVvmryj45LodDT7bLBz7jRfxXxBShEJmU2kFUxwqoDFTecqvG",
  "key3": "3GhNVafySQqAfTz9f383LuZpNNDH6avbhwZr5boyfp22n3m5cDXib5xgVAR5ADjSXP4dUTVAsbD8ad4dyJMahB1W",
  "key4": "tUrkRdggn6oemciGGpCm6MCNmaXZjbk2CgYEETQYWGwA4ujKDjN2egASabiaFoWJhfXohfLckwoMiymQCZYKNxi",
  "key5": "3vVrtvnwm6H9xtWGVgxVhqkDwC7SNJisoCnyY3SERJw4z3ntthNBYmvhzsg1nigGu6QwHazuth8r8q7RMPmyWCmP",
  "key6": "4W2dGRM941PY1miX53pZ7S5Ezjk2p3ppq5PqruKhp2SwX25aVXERMGiXDGiS6kfyCKKQzE5eGKzFz192WXCy4RAZ",
  "key7": "4oTtzbf7Tqa75MpGkaaAu8HJQJaBzxtFUFwBe6768yBwBxTLayaZHkzskwVfVHi9ZVqSA2KpVNPJjruyeeWki7C7",
  "key8": "mC153V9SYmHo1ditLVPXegmhYesnU1CzbVQ4Qc12q28B1kg39TCaNdNbwRdv14AgEJU85qVe1eXoJkowMJEzx8F",
  "key9": "4UbH2SA4d3JYuhLzmoFGCfjjw9oxsvmsx5JtT8vF35A4VLuDKw1Wc6UVaHF3Gumddq411DJaLEBGYsbXw29hEBuj",
  "key10": "2BmNvqoVwqu2Ddb2eiBwCgXjKuhvptJiJtnedt4b6JWRq8j7HoFVCiEoPNaubGUKqEqpznJCr5arPShqaCgsikcY",
  "key11": "3nHByTXEqa7nE3riTqQwRXVVDnZsjF29VZRRxdcJHv2ykk6e8xWBgPRWE1YRC4LHsfc9s5hRDMHLZZDEMamtsaMH",
  "key12": "4338EuVhYZe66a28mquvszp2nWd8CZMwCVwCh5tCYTbP1Y9xTif9L1iv2EAxrDRfV3RXD63zpKNfr6wU79LLFqgr",
  "key13": "ifadqgBYkVasKJkMSzd9vz8nXNmHp3CdJKzsq9FAyCu2XEwyzy2QRqa5mkNssL2AWdF783UvtHXMZnUmuo1Jbhd",
  "key14": "2yPuW9jMMij7FKj2815MqNNLysJ2kathjHq3dSEFoUFwnqqmAdTHjud4STzq3JbUcXdyPWQMfcEud13qqRN9JKoa",
  "key15": "4d5EFFYAzsYbRNrVQRa9c4sc4Lwn6nqT2znkN2RQm6kVoMEcyrC8hB3Fgbee6nrr5qTLKdQ61E9K7xyGc6DFYHJA",
  "key16": "3GR5tDQHe552WDbjiemu1RNSoh3h3rjmr3Cm2agoFAJyGDkRCNmaNG1x5S56A5rgCTkD8tAaeALQjAmJwSzJBgeG",
  "key17": "2YzYJBkR5LdbwA26rBiCXxcUJFZJZGapYCnaE5B7MgDJK9z5tNCzfWFyqv7skjRiaa29RxUfbqx25Z1VqEcvPeMz",
  "key18": "2rMVRWC1e8vWSNqyGr27QPFK6Dk2ftZTMvmZTdJkLNLF6cm554oXjhfwsYbdapnX2J4cAchYZRmhRtwwwHVZfRtr",
  "key19": "45zqdCqJqgAe7rxptnZo8m5DR9N86RD7mwNLpBDUaVM7YucSXFQKMbxSXDTDo1qpHgQoyEA3KAjzU68QqeUCBdwf",
  "key20": "4rUiu9bZFTBGexgByQ6ngSgv5XJcHNbiAAZGxsJzvP9Cd5makDYJCSWSm4SUiy7aqDz44QJamxMgR3vvuUUMLwNf",
  "key21": "3jUwrYioKV2KrpYF38NeJosVa1kuiujcTWfxwHCvzipbyNkWvLe6rTBnef7Rfg4TT6yDC8cBWWAqbTV8rYcXNzx2",
  "key22": "51CCosh61QiVYs4FCBL3RoY3k5YcuRkJZiJi6YGrkXtpaw7epY7b8P3j2Tdyyy5M8yMiKbWUNfZnNT5zaaNA7kLw",
  "key23": "5y8nmmPewV7B7HoM23nc7v7FhoqfiyQhCoDS3qiWT7XbqtYZHAdhYdHwWJbBmKyVSE9zqG31a3nTZyVVPPNf8gY9",
  "key24": "4EikhQnSJRdNsgiJ7Z3VszHrd3jJV5AjcigbZ39bcckBKFh3gypchjWPy3Xr4SYx4KvXwYfUYMkcdjv2HQvyuygK",
  "key25": "2gnB2oFZeZpfntvvGdaJoi33eApAWnd5dxyy4ZskiY1oUb4g4fCYVL5iFq7JDUtoQhE5rNd11uVaW4KN49Y7sCoj",
  "key26": "53pRqvB3GadnJQBpyimGXhhtpPT6mrhJAd7Stf345rEpPQRjRjdbd8J7fMvdneLQtwBToqvUQyGothb7L4sHKTZb",
  "key27": "45YFN6xoATugSGbbKFeuMpsU7uN985z3bNdzBr8TV7FJZqhjcaBNWj1bsdZFanKzwVPgpoWpXjmmSoGwmBMBL3YD",
  "key28": "5BzjqN4ihTpsFQXAyyY4vrx6KuEwaPXTijsmQGirQTc2oyMSsRXDkyBh8wQPPzHhB4QMsCXt3poVkgfmqXbV5Znf",
  "key29": "5f7k4oKEKdjjCsXeovAGWtgePSkiT27Vu8PT99XQ3XBvX2VKYz2UycFJEkjTfn6NwXE8vjAtAfzsFJMTpUfBiFKE",
  "key30": "3WvLMPUydGeNyjARaG1JcWijojDMA7uG5VFj9vJrULtioLHRDG5Hkb8ZKbpU6iKrdePncBg98i646FPNHLu49sTR",
  "key31": "3M3pebYqMRrE6MuTN13W6byaLzTLdnQBDio4fxKQb9SyHJLU4CLn8FFLYXgsAhofCXvbRJoiWzBJD21nuakBedym",
  "key32": "7qUppcWFz2mjqT5wR5etsqxKMcwsXcS7Xv3voVTSwrj8JYb8j95ydQhPC8szKBZwgC3frTtqYhZVMrjWSdvTkUa",
  "key33": "5HVxvDnHr56Atk7ANNAfZL366GC4FksuTRxDKrCEvrNGoADJ76KTFbfgZnMxWJ6hjMTZaxUbeuXj6n4wSo4gy1mi",
  "key34": "5gEv9JNrnATU7hrPkcDc1LBR5Tqkra3PvYgMP3q93rSYY5GeBWprhARrnVfDf2cCz7ghpbVHZ4kgQU9AxqXJimu5",
  "key35": "q4tVwMrRVgDiiZ2ihEattw4UBHSsovRywkTNJ9H7ttPZiZ1GYeUY8muF8cvA7ySGBru4jtJGH2PDnUKAQPGYPzM",
  "key36": "NRCiWhcnNf4wCRXwULgQ8FXRQ943aiGomHxR1jxzL8U4a3vSzGvGvL8E9fEeb3Wy5YJNsPnYbfYwqwv1p3HZys1",
  "key37": "Jiyzkt44fdizVaY4Us4LFmoS2ZWutghdzc4dFd1wsvDV6zR3sEvXqXgrCtB7GqcwyH1hkBHahkCt5JVKChuiQjh",
  "key38": "61pGRkwEPUEXTujT1jb7qp1F5GBs2gpSeVnZ3rdgYK5hJW7kKbFGyuiqFAsAqFUb9cfL8wU9QLncJvfAuwCyzCvM",
  "key39": "5K9HtNUxXq5W36JnSHMwP961VUZPCXrNus6ikKwLQqfGASgs1xBxzDN5vRaaVNefkhw77BUPDMCts6QRXoY9K5bB",
  "key40": "3h7YcDE49Ebh1frPL3b75bp7KHmqhfZnmTZyRumJenYanmxJibmKvKCBWTaAroESnn8yuUciPhfAuaB9pjvSVm8n",
  "key41": "3tLJM2eHy2biWPj1JLonxVfG4iNjjoRjE1BLxzF916JTpYt8wGCZ5FxeaTeTCvXuXGs96A1diRL2aCw22kv86i3k",
  "key42": "9N1Rnxy7cGUNH2yanfLLNLewhwkvmwqxUmLgRk8o7DM8JmMYbxAbp61LiegY979xucJNikHF8kawvJQrv31jXsF",
  "key43": "41ZWRLcnR7njVzX96jHjF4FNhgRRCjzUmRHuWdQ7YTpkbAAorV1zp4pFCGHhCXundts77yqB52RwYhaZf97NAKUo",
  "key44": "2xqAaR8qPeEUwqGpuLPZptrgzwxoyqwgMnuDVdwaVfzphG97ZYrkzrP1LkR4zFKNVuWsbFYjwFmGacPoG4gXBQut",
  "key45": "2aaSPbce3KMEWLf8rbFA54pihPAnaRAgfMATgX6YzBwJVXSs5aXk8AqBXJxbjv1LtDZZ5nruL4JBroAYE5j6rJi5",
  "key46": "5vNi4CzmPMacwrkfZ1QKZfwLizNpsxPy4BWg4p1NBm3EjzyS1aqEJmtUQaFrVZ7Ehqwwnu2xcGFqaHDagcWGMSJz",
  "key47": "2gjB5r7Dbah6NWDvpNMAGuxD1ozSwcvpL1exYSphKAXnQmUvkqD9HnS4VQEwCWim3GVYCG8r6X1jhFw3XcnuLMG7",
  "key48": "4Xi71CxEPXdkmzDBGFwMZL46XXjntyQX1ptzddM8uz3Wd5kffmUoQcddEkLqhsK2tip7VU67pwGfdruREPWUTJHb",
  "key49": "3HCQU2QTjR1ic8ZGh2h19ewgG2DW8kypyFRJNbbowJ7xHxWQMdTkLh5fav4nJzTeKHfqnNUQsqb6QaX9hYotxN6V"
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
