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
    "5WwJDQYt1WCEAtkqRbVZ5x2uUXe7hLuYn6woR7S8Rfdxh81yDPYQh5aZm4xNVoLYsxvDo1Nn3EGCfh4Kk9QBwucb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uqF18qFpSgSPXUzbxJrJSNyieQyr6Q8xqWrsoU3wdq7AVxN8GH2THsmyo6c9dmETqwxSSX8Nsbxr6UNx8GEhfu1",
  "key1": "3mXdahGmLBudtAphiGikMw7eHcTc6MoAPnauasGRJa3Y7D4DPW4JnjgkRLf1Y5vY1AqrTpQaQnRhX7S3JorfNMV7",
  "key2": "5HsPSqW88x63jDKCKHPFKTQLuYrGSHhYus5RQhDU6Rq2shPv35tv3mkeckGTTxwQaEY8KHWJL4dvzomHpdG1SsnG",
  "key3": "3TanURZUM17r8SfgPa4oH9CTzuRU5YSsQxtvxgF2BRzCr3uscB6pmFmosP1YetJVR1BMxf87xhpB6Uci48vREcdE",
  "key4": "2o3TXHYtQqbndyxUb1wXupDiLi5YV5kfZ88ebyYAzJUAL1eEy4EhigBbonaN1q1Gnz44dhGWAQP4uVhDnKmuFbL9",
  "key5": "DzEmURoPS551jpnpbm8o5j8s5jkbXj1TAhAeWgBatxbBkvGnzAkwj5DGwpaRPqSBQv6tkwAT8pqNR98bECap8qP",
  "key6": "cBvFnmksXz9dQnrJqqGGBZcTjEhrQ8sPG3n1Tze6eBTiJCxFpGV4iavzj7mQHFzDcDKJuPssswXdjiQZrWyDip3",
  "key7": "59fN9EhDfm2WG8szYTxr7WSX2VVJAdhWa4xhbS2pbYamhom3ZPreWeYTUSc2nJvugyLkpXcQxjrh7FhwsMQUWiDn",
  "key8": "4i3A2VTG7Nq9mBBpq6PoBLJ9oFBJUwyyajY4oioHhrhoGEBXwxYqBUjHo6Svk5qJZQyubhV5xpMy4yLd6xnK44tJ",
  "key9": "4hHpYPPpFkKeRkmxhQVvE8so5icUE2pwtjEZjs7fKeqBx1zS3FMCB57XPouArQCnxUacJpC1KFkib5ErGxcbi4fw",
  "key10": "3bWqb2NuMsLanEoneXX1WS6aney2vdzWFL8SG8bunsN5oDAMm5V3Uap3kxgM2pCZn4gdFboteZjVKUzQd7BJCs8k",
  "key11": "66xmHU8mRZvqJ9fnK4vSBBT54zCyWghd4R8r4ZRVtyEiqzpbF2oqbrteewBqr9uL9LWgdVjwRkecV4QqHt4Dj168",
  "key12": "2JAc8LRZgcBaR1EtfADQpeHYvcLDZ6Xj7WDkLpWJZWP9B9r8Ngi74vm5LeKqeS2umKZZtLpVyq23WopkeNgR9hwz",
  "key13": "54xyqxMGbxhwMQokwLkL1prZdMxngxNU1GoBsQwNPcCGhwhyCG1p9vzrrPU3nD6r9pUoQbpxyqXnKQu9Est3hkTZ",
  "key14": "n2HZrt3GAfhgqUY1F6aHxjhmsTYbMEmwJhJKjYLYVNW49QwuG9cZ2Y5bhKyFgNwa6RU4Hcek1DxsfVPUsR3EwCj",
  "key15": "5cfME2cTw6u62V1prv1rXQvaMg1CapBRtV6DP3xAhpuesDr5FeyL6q6DgsJPJ6jTdJ7PzNZH918SKC7hgMAprEXr",
  "key16": "3GNJqa7VmkTCuBpYVecUPBgnpu7cp4hjUCRXqFk8d5bZp9bPYZZDsbCNDzxwuzvepkFYQW8V8kUYxkjuFf6ThDt5",
  "key17": "5PWuZvMLvFPVYeNjE4sxTz7i36tCTP5PKmMG9o8MuBZtWGstM7KnaX8XtJUrkJFGzbci89yYPs8FyNW5VLvNLXtX",
  "key18": "3jrt5HuYiAKBzdeHkRCZfbvBFZAcig8QMfx6LwaZMutP3kV4emWoXYih54MDmsp25sxE6QJa6Z7EQSXmoS34qmey",
  "key19": "61J2FrqEDRyJbJn42CcQUL5jP2BdZLgwXrk9vpd4kkSpmwQgj1gUv7ws9Dxn1XM2S2oCgWz3m52DNRBMgWB5HySN",
  "key20": "3G78tCo2DBRHHmb1PND5Gszwzzc6gvBjiDANJYWG6L6hXza5z33j7d2SYUrPsqr1ZAe2opU13AfyyxQt5SrRD33B",
  "key21": "2QmYsDRXBnkBeBe6B7d9JrAGsQBJoZDa8vQUaE8T4ZE9DMqyysgZDDnWj9cKy3mUSaMxrVBME9dAtjbHRp6b2xhU",
  "key22": "5hXBX9LsjM2NGancoBgRY2iPsN6QqtLAcCkYXEzPsYv4GAaRiSsXfaJZUAb7ZVnKETZV3wi5AbymrT1v9d9Y4SFP",
  "key23": "4GViQPa41NGhZ8uti4Y4fNncxovr8G9LJfFiTWu3JJBVSZePDDhNxTJL5QZg1zcsP6KiKst6jcv6KMamXnW7LKTy",
  "key24": "3BSn8LuqhEpBhHVb6Qcrp7WBiquriy9cpmH4eZUp2nzex5vprDgsyQj2yTsKdsyc9nmJwzN8kfjRiFsFC7YvS17u",
  "key25": "45FLRut7mY8AthWxRVK1pSnbwHcferTrCwJqEuS9PThX8HaLnpCA9uQSq9GNbCRLzpPf1SEGjfcAZtJU44f5qwtn",
  "key26": "cWbW93fEZz8vLPi1Zs6nPKs5JADC9YrE3P2r1DfKsH8ov6rSJmjTDVHJ7HWyiweMftDYfdaXtxGieUcpC1zYgCH",
  "key27": "31Bhfb6raKkALXAKnqZ3VJNLRJBPpnkcnNeKm9AjfanzcXuuCw2GsJd1tR2p4CkMk2WfUCgV2Y1QMbdSrV7sPGHC",
  "key28": "2cF3MP2gYA1tpDyimGYsSetvhxkBb85YCkk13tCxRvQMSFd8gvFVGFkLHYsr8hYT9PP7tDKoUi21vCsAQGfaXhMQ",
  "key29": "3MPCU6SLPMFoVGZdD4H5H3dCGcTfR76QKgh188uCPSnW5aFnQpuaghR6AdbjJPQzgpSaPB9HtKgLxeTWonLvxKkV",
  "key30": "4U2Ym5Ae5ae5uJAgxv8dn7FNwjZr1XTaC7199oNMxN4NsmmoZWgKMBPNG639yp1U3TdyToB7FAZ8mqMmAxXh3eFC",
  "key31": "MVprMVtjKGxoEDq7Juj1e4JtPg51psZK6yr95PJ7VRyhgMPkPmzBb6joRphcQBAwayZ8nWjRcoYFTMxccZpoeAZ",
  "key32": "2F6RZwhjepdezt7Qvx7zb37dgWeoEikExUunpA93ziLX2w6S2eLFWHB11JVYZCxj4xQxi5uJcsQxVL5X4HKWRjpH",
  "key33": "3Tiwa3s5M4Gt5SNYi3mZT34xT2RBBk7NmgyF7YYSzFmSKcZ9a3Bw6bnSCPPZb3fuDbhFabAvupzq5cdfowM8nJ7X",
  "key34": "383PUwupAEJsHeWMjDsTfPWegRRSiZqEoQ6bjQ2QY2ke8RVucCY73XmH7fAPxmCNySQagzZtH3CwzsE1J121Ku7J",
  "key35": "5XhU6bikyaYNxb1PNdyrHH8djZCgVgtJM7Q1fqYi1P9C3r6mjCwZcE9Eqk9KpcBSizweQccEEYAHkKNSHNbnTbLf",
  "key36": "FKwTiP7ZVSwCw2M2Q3S5CSKkpR3zQH7f9i2jyJiyfpTTcbCT9dkWZDRmx4UDGz9P5tMujFM8DxwhdUjXkHZDidK",
  "key37": "53oLwWGvQYqF7A7u9ucATbCKagpQKiWWGRcUP6cLQRsG249bquLxbejx6jJ5m8TDnVgYUJ6pz7YDxcgtJjxR4EnE",
  "key38": "3qdrusmTKXxiPe5u3HjVCDctnRVcCnjvzrLuBR7Grbafs36o1NpWroJpzx3aVMQk8gRTCWgYZH4SxLi7HEDRv4yL",
  "key39": "5hZNnBvRzKoBE7F8j6ySuyJWaR4F46iFxmpsJ9dpVDVTT33EjwCZ1858UAeYaEiiPWjGqeKvdi7bVFLZfkU3XKTf",
  "key40": "4LXnLT4cezakdtKh6bBW27Qz4nJ4K6tDLYAnz1Tjw4psBfeqHH8qxcwZYg1ZDgdJaBUbgANKKAJH6Ccpn2HcDxA6",
  "key41": "AtLYiUjdh4FCUPfEzaeooVE1He4dxYnn6ktjwYFA4oiX9pQUWf1Nqm4RHxREWfx3odBt24Ucf5YoUr7yQHpmjih",
  "key42": "2L1PiogRSWWWfuyS6qwX2dCKVAyBNtvpNSjTio1651XCYs437kUJT5D2E5cZZesgiaQZdgUVWbQFap1VMLKCFxCV",
  "key43": "3hXSYbQygDDiwgSxwqsgLyLZZDpCUgm9f75QjK9NxnunN9hAJdx4F1uDc1ddSnMq7bs8sn3bzdZhW51hpb45fuka",
  "key44": "Y19QW8ZuSf1EA6CpAiPhonKxMf9btnetVswEuKYp1i11xS5b1Zvnt1fyKWC3KrV6zdqJBJPaadnCkeokMVzbE4L",
  "key45": "4ZQxaonnq7UCy4boU2vyHBtaSHFi9hh2KULY7QcdMG2C25PKDtcNGWGtXSvdTau4T3SD456uHcYgr6be4mxiu14V",
  "key46": "CfDLTD6mwr6xUwDGYyXE6eAaAiqjMGpF5t9Cg6V8JRSEGTJsGr2rzEV3hqMr6zVABfSsafyDNacd8BGhGiSdNrk"
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
