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
    "hu5QvaaStU49Dd6hEsR1nnnNaM25zpVWj6vryKFd2hG2fPNAAnGpGXq8eR5d8hXaXkkn5GG3HAvW2MsGhxtNt9R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jUCsNqYoTnvUyKDBHQA1z6j7iAHRGcDQDRBk8hZ8mQ6no8j5L97jMteSTeSAbPtoRepjZKTzDqr1SmZu49BD2Mb",
  "key1": "3My1xtLny3bPjMCFpwJZsYysxiqG2vL8LwhecjThfAFLAPuHSruNV8kMmN9TLtHSgnGGfRdoz5gipVK1Nd2D1hzY",
  "key2": "5BcmFVnDM8Cuz5Lzux3ScoTfuqVT458JVjFpcsE9rGrQ1fNFujAJU5AjWsPj9LcuDQttKa2XyHZK9HASpaW2GHj",
  "key3": "419bCJpv3V3qmDu6YZfvXDLRhtfvNk8BvVxAsNXtwfnBUbm27DnZrmqDDVUvMd8wbpXpNNQJ4gM4cMKNgu5hminH",
  "key4": "2eK4dadqYwvFzKP26nTMMcNr71NmHgwNeJH2qh2QG7tLp5cuYVg9H3sD4DratEd7vUP6X6F2tZqMo5KiRqXQ99b5",
  "key5": "R1XCBJWPWqCEsdC7aeDB22JBEU1qoD28rFGB4y6pHBCEgg99W83SpcuAzh8zFgTjVWQDGAZHN15bM6XmzY7gRw4",
  "key6": "2PdWrhee4yKz8pZR1zs1oR5R58oNjpvRoM5Bh7WfGHhQm4zgCmKxjCp1BagSqwsiw2j7ur8m8iYzxn9h5v14GxwR",
  "key7": "NQZxFN8KMpN1Q47qrLTczRym9zoqthK11g8oBL4outTXsVubBbJ7J3Z2e1tdkTjsfRZQZiP1vUfrY6yDfc1dKdR",
  "key8": "2Lj6u1ScdkfMgxCEbJGFdUFJeaYCiaA3o7PDokgbdNL7h1AYQbaHA23cgcz5L2oFkap9fYoDguuVhhYu88si64ny",
  "key9": "2gZ6ZHXNyqbWdiek2UhKc36ctb55q5DACiQrE8omHbjEqKQPPr6GaRU6VApaHSFyk2fL6rvwqDc8AvvAwrrAXkrt",
  "key10": "2rvouDLHgsAcsQmgrmrfgCmWHLQ4N3AUzhWAshDwcD7mVMpikP9Wnt29a3LGfsysfSaw5eFZchWhQSJhC8Kf7ECu",
  "key11": "5DQgEdHUGK3foedqqgVV32UF26Yt3cxF34sSPc4nsm41WqDRdvSwoFCjwCTmfSMpHLnPZY7cEHf95MwFnV5iyLSN",
  "key12": "5JPDc9QPRHTZcmVt2rdLHLnMgetgSYMvSz8bCxUDEVz1ursQotsmDkFoRaGYZ1Pj7dRzQ6C7RUjBYjgmnoqwnwxj",
  "key13": "2EBTJ9krCxZ3VvvxuzXcYzBZfh1Uv6r1dKERrk1Hpduu2SoZyxzzFQW1ffN4ru6S14GYP63fYL4pSNARuUw1nwnT",
  "key14": "4qeo1mUeHaHi19DLkbQsqGUQSfvxbzugf6fAGqAeQpio9VzxYcercfYfn9ZSNGDZZ5RmeCgMHnpvxVqKYqFuZXbC",
  "key15": "5R9KiLpwftZnptj5iX7db6rXaq4CNgW2MgBHRuUp1aMaH3ze3mP1RZ4aSmHrQHMkcNPGPqewop9VWpTiuB6ZNpoH",
  "key16": "5MvwM1awBBzYTRtCVmTAEm5EgK56G58XPo6rhNwhGTycY36YrpdXmrh77Ek8K7dvVRkRZNj2t3u2839o5Jw16ngv",
  "key17": "65kaMP6YaqSt2pqwqLjWpyaQCsMsJtsjt5GpS8YtmnBRwcTouZxggPz1BxF9iXi2dyA4LzVFhk6y29tmgGoqBWd8",
  "key18": "DUm84jFxui2zKbfCeR3VTEkATgdi2KKsb6pDVRnWwUBp7UdwQJkQdndQzkZyu9tEqaWyvx6ATMsy2u6u698c6nz",
  "key19": "53EARKuuLjLUkQLCTb8QfJj4micaBimDt9qerHF6bBNn6EsCMqJoRRrDa27nktyNyoTNQhX4bUkSNDc25ek545Le",
  "key20": "3dKPvPYt5YacCGjpmx81rq7gEStkUtwC7XiKvTxgNcXUm1GxNNK3G7eYcKNy98XSAXkGgtXD5wCCCn7AMmKemgER",
  "key21": "41zBK6fhEHbnk1VGo9ZqxdoPZgAraiWZTBd1A77peV8FCcSLSVBVoSjLQbMvbuKSaUhqCQNVkHtcY3z7b1jHTDW4",
  "key22": "634GBGkckW1DsJp9GeTtu1oKGCtRRBjprnmHDhRYMwwGHDoJjvDzC9NGVhooJicaRFU79bAB4aDwsLwJ3QYgKCV",
  "key23": "4fEJWLhHt7nQuZDhtoPaZsgEKS7cezg8iuVbkxo6cJc2wbSZ5yupTAcXvzNmQhU9mJ3bgQaZu2uE4gkx6gXjxkQU",
  "key24": "4hf9abDrvzy6UraJuAQ3xwXenFLCb1apATaZmK5zuZH2kK8VEMq9YiFogqBFJYf9xgRe7jpDzqBkCdh74VdiRwfv",
  "key25": "3ywdRxKxFGwa8gTcWv2x5DkRJnDoxc6kXRWDM43xzgaQNQPjpNrS7Yvn6iuqRr1Lebjuqj532QgVX1JweAFw9aDo",
  "key26": "4VtsYGKf1bTRSU8m7jhGWZXvCDYrKet9QYfgFS3u8ycHVVRbd7FBNDi8tuwieLrQjvRY83tFA3yZ8PsK3MqB4PKJ",
  "key27": "3VgNJQmWsPv3MHig5ugVcLCQNvQwV14CWdQ3xCQH87ENYHDmRPRKC9a4fV37kQJjRUN1vqQyAdCmCTH8em8aadD8",
  "key28": "4DFLbigEMBhr5xsdFoTaem5MGrPohFeN9mqazrRT7EdVkVHvNzdYRHKNEqx4Eu3Em72xLkJhz8tsFdLmE4imnStK",
  "key29": "yv8ZeWS71Qe8Qxqvj6z8xWD9Z1fHXZgF9cj7BqBDqBEyVXdh3JsM5G4ytBzchuXWQs3ha9WrUMgZr6TqisTuG6k",
  "key30": "3V8SAd5McxCFymj3sZe213vAVogww3gbuvgeNpSCCiUgWifnv5JGyCYupE2fGMGv2wN1ph1afao8PMQp3ABp6d3d",
  "key31": "3yG9DfQWVjSKzFAFB9B5Su4JMsuUQA7CVkQu66bJs2vEATrRoZXPQdJu5TpMTV6rWN94BhbuXigPWM3mbtmR9h9T",
  "key32": "2znpoVtGDWyUEH73oosfn9o7gg5f9e5Hzfi9jg1Au53VkwPAeLmx1oVBjxENt5wn7kNbAFWUBoG6SM2eQgom4GTF",
  "key33": "mBhKFW8bu2wvJVHmWQxzZ3imdrTrqmHdV7iUAUT5FrS9W1a5Qs7NBz4cMjv3J2mspPo9DAUykzwCSKdvSGNxapH",
  "key34": "3YdwrVhW3HMo2BwcDoogNA7s7oYL45BJYigqVC5g1W4HvGPscPGm34y9JzZhw9HDNkabuvdTvNRorfxCdnBgJita",
  "key35": "5McZdQE8m25JfHeCZxaoEucqDqMUPrQA26cDicrHVD9zq2xhzPMqSFC7TKBKnojqDTS2gWMrg9bYAeHP2LqApK62",
  "key36": "ugPQE1H2nP3ZkKdxRtWstgEehvQb9HAXrCUcpYqEe1QiFaU3dziN3aNkd4JpmDnYhbk8cSUJd9LRBVdRiyir2Lp",
  "key37": "2BGpsnfWfHNzD8Yo7toY6jzr1hvEyM8fcGg6dHRuG72BNYKtcgQMUouUBE2F7L7Bu5TcWDFrh1Wh6PYZ6wABQ1Qu",
  "key38": "29ACDVFcWkbQS5NkV4RgD8qBpymr962kSe8HVXrrXxdwTXQoTnPkhiYnB85NAMceaTbsT9EXyajUZyYfL27L58Cp",
  "key39": "3xSntEVPvrt68skMutDrprJ6pHTRyytUmon8c2tMywp3sPfXqMBYtYx5c2G4C1wdAh2Vy22jwj65j8HvYgmGJbug",
  "key40": "5X5qcCH7A6kopcHHNNexjtLdpkMt9LH5jmmTN5LLp9X59LUEq2fdXG4dH9v8UZmFMPEAp79LBBW1g3JsEUf6Wr7r",
  "key41": "5Xnij2wd9GkxYGoipHtjDEgznPqkVAVA25WJdwir5PuyFHz77RMz8ycmPFtRnscKvfuiucE7wVKGjoQ5p5gBQgqx",
  "key42": "3oSwxEySz5M61UemwYaoJCdWhkPwCE1dMGVP4qaiPhx8YyxkJXE4Q4hFvdLjAjvLWPUWzDs2kWer1ULwxtdsXfTA",
  "key43": "21SmHeurCmExtBSqf9Ybn4phJq68kp19QLCkab66gowGHGFkCtATsFKCi17Q9DGZfr768f7wJr9rtj7WyfntHFSH",
  "key44": "dZZbrVwt6guSV4ivTRnsnQ1Mjc4Ue3fFWwWWFaZtAJeote1kjsJnMYfrAdj33UYwfkPp94o2bJz5PoCW8WR9gpY",
  "key45": "3K2vCjr4TDVEhXfB7mfg2Cr9NZASjVb7XhMGKJ95B5HXWXB7UcNk8xjbDvyytC9cGSVDZe8isogLMYSVC349tZD3",
  "key46": "gqmJFPbwBZ5922va5Lxb1vuaMeTQWsNQ8gs5HE8cyQj6p4Anr8idZUd9MfPLyxmS46EC7mki7nxpzeoDe18MVKc",
  "key47": "kTK1W5TDouqN5zAUAE2Da6CNTxB7DPcgoUVAgAiXTFPnoPzoGdQi65pdPFKd2oEzPDZSbL4FDcaQstkPRLrrRPL",
  "key48": "9bd3ASEZWiSVj4NRk4Py3se8NfNtwAYxFFuzGHaG9vEg1jbDMiMnRzvBmQNciMZ6noTYW2gscHJSmar15x5SpT6",
  "key49": "4izytvQ1zLSDSHErb1iJE9miWrGAhD48dDwUBKgNweqyRkXpRkzxP4ddT8nvJvikfo6UKY6jWyQBctFk7DgHvQQk"
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
