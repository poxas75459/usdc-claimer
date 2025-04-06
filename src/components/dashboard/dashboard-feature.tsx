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
    "3ttnU7WffZmApBSXkCov5LqJsdgGmdZV5EGCruEJfxgw7FyPNg4TsL9rJ6prQi1gXoREqPwTxyraDBxuC9Nu7y4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8ViYtj9wZDiQK9eibJ5TVchZkrUW757mWPs5Zd6FLuGVndM91SbZJuiSUyEqDr4B98RfsiMtvV6NKJFSf8G36U9",
  "key1": "3uxbeAj9gkDrsqFuRj4qcWJfvsJZToBUpMfuu4n2Va76HKD3iwjf9S7iZ7ZVTJ1x3BcVk5bpEv7rZNKeQ68RDodL",
  "key2": "3UvkqjQEQMtAv7rEo1vDZE1EEtb6nJEGGdmbWDcKqb4fCCswa5CfJZTsd5EpU6tijg9zX6SJWXdPyMUujjMvY94r",
  "key3": "3Em8LMi5D5ZAYn6NLsVwpaNbBQVXsVF4Mzj4yTdqLAGk2QqvtPUJWy4y5ZsfP5PKENiBdF7u3hz4jXMChYKWTPMr",
  "key4": "2SNYvPmNzbDCb3DJjer4qu6nNmN5iU7zeWSZcBkgzSaffR6QNQ7xd7ZrqAWA3BfWKBxxvtfLizZX1epT9ZSDwxDK",
  "key5": "5VsZPkVSnFQmAms2Do3ceRK2emV3ujgkBatpkE65ZYdBpQXFqcZXRNomcQTF8YSehUoeUGSeff8kTX6UZwUkcu67",
  "key6": "2FQcjBsm1oWgSc73Pp61hF3tc8YsqATk3kg5N2sxNxcCyQ4McwtKkTaPG9w7xY8LbvtVibMGZe16AnCbw5AjPukV",
  "key7": "4SLPk3mmBfCrHgEep1Yy1Een4sJMmwLAHUaxzULGHGMzDqQbwpepVDGKbF2AnLpx7n33tRebUpd5ARQ1vdhQyJKo",
  "key8": "2EcGJ69beGN2f5FLGoFiw6QGrxbUU8qzTYbVbXgWLT1aAMSUDfE28BW1UyGdpStMrHDmZ6i5ubMVxgxyQmXSJ8wh",
  "key9": "N7sHj8r6DjwMdc86245C8sKCSwKWU5ZPDNVUburYHgVpqAE2pB9zhbXc8u8gz5s4B7JkrUSaUS11hEyMsMtFAbz",
  "key10": "2TUXyx98738WYzczc37YtWzPPqo4mqeoXsDqnfCBjsLdUYRitfMQcKxzvu1oxDhyiS5fAEQdSQcpLDV6J8vbStS1",
  "key11": "tqcFSzDepWrzNmcR5sV9FmKKADA3xoijeWUgtXtmmxLw8SLH7ZhKFyakTw3GUG9PtkxyXH6VzvTLKXzSJya6rhp",
  "key12": "XYyBwzVoCTSxehTYaAfqYECvw7yF2Xn2mreqJSt2XxWWfrAMJGTKBxNixuoz49qFGpaMXjx6qLpjRxCUSxKJSSu",
  "key13": "2vjG3Db5yK1LiFcbxwyjwzUNDkdb6beVa7wYENwDvP7s1PzkCBcJ6WEFdAcVs1YUBBTWhu7MmdvSPtTccZxNcuVh",
  "key14": "3GNCZVbX8K6LVMGPNVfkvePpnok7HXSV9iXhw9PQyK54yUThPkdWDPo3EJ5mPz5F7XVmkaAQDsuVhNdQJZrAEPDx",
  "key15": "qYBb25hkWohBEwKMWnC6mPyvezHyc3Px8dKPonTD4jLUwPYPCRLq8HFeopBpajZum4T9BVf4L9sthpNayiZRyEe",
  "key16": "3hV3mAuqnr5fXTHDhtzgsjUJEZbhbsWyyvcjptcSGeroLwuYapwZcxtsoU3p4u5rYSCaJQYaAvTqWrHXbioFffRS",
  "key17": "3j6ZddVbrTFzwyyi4u7xDSnWCPVQcsnpznfefELYEDkphSda1rixfYJ7yk7nLEcwGQkyJKM6t77QsziXbyHSWSfG",
  "key18": "57KFCx5QkNvNg3Dar7Uc95hcM9Z8GCs6Qq1wixmGLh9tRz4UotbYaJdWbze3NtLfLDGZDzvjuRzwvUUXkjAx1eXh",
  "key19": "25xpTX4JESMhVQwBEUvV7Sx4EzapdApuXN3hUdpWgPJ9BYmchFyZCZKKScrDZAcFpWx8V5Uffjao6qWnEmR6ckzP",
  "key20": "5ZyW1Lau5ce8SFNyUqhBcGA5YL2bNq8yEaBLSFGsgo4MH2CdyAyQGCd9xFhyKEe8D11JyLJb9zT9242TaxeBtyvC",
  "key21": "43Wq4J4Qkuy6YZQMRXxXrjLS9HKWu7fdgCvc5Rgu2d4u91UtDAzRdKaj7Y7UUtsb7M47YveY44HMs9ZqmFT7RgTz",
  "key22": "573NhJZdxLiqVxHcJnEDSBNJfNy6rs9zEom6SaeiP43Nj76EddDasY6KcJyDvSm1uBd7fsRoTRcXwhxVJCwFSLXm",
  "key23": "4nXRnmueN3KKtGExZvxU9oj7YetDpmYPqnPUqGaLP34mqhvyJd3rHaKvLFUYke61Lwpno7j7yBUD1CYoJkk9PEod",
  "key24": "2B8bGf44Z6pHckghytVtVa3cVVn5zFyJjWs8ZFZYcMVGz7chj7kxMJAeCymM47oWAz4hZ66kEQ66yatoBAtebqkm",
  "key25": "4xFqzez1mWJKf8LuemB5X8x2ZE5havZpqMfGtsmgUx4JKwrm83c2N7N2JxAc1WK6AAxK7DSz5h7bVPFyvMndjpDk",
  "key26": "Pjdwzg7aNA9nzsRHXyBAxn9egWKpfS2D7N6132ER1TqnkfvUrpSnFAdhA9BoPQSWYiTPpgJHoJv1qwAqcXBTwgK",
  "key27": "41z7qhgCa4frCcYTpkq4JvX7Cz5YEJcR8VHdQ1syw6TSBPTUgYw9cPPK7FE3GCabuhZ1KPYcFZjybWhYYjRAdkLB",
  "key28": "3Bu5nhGuTJAzcPDZG1rLf4Zz31V7rNpZwCADWiCKZweuDh7U45gipaLwwkZNFPuhenWikqwonX3DVr7aun11KVRi",
  "key29": "2Dyb3HvoiCo5ASdGEMsQVouWSnD4zFDNg1ritHU524LjJGi8QCvN6pH5as4tPTTYory4AyNRAYg79nX6Yx4cvN2Z",
  "key30": "3LnaN3RiQj6d5pkSbvmH2ryjWo19y5Peys5PPcHb1T9C6C5QBAxD1MfdSXfL2m75Ax3T4yfbaMe44Bisn9y1e3QW",
  "key31": "3cHduWnTdncr1e6u6xxACfMtmXP6AjrCBtZAwjuwi9jsb3APcmH1MAvW1Jw76NSQmoGgkRaFaLkZQMKqncryupNK",
  "key32": "5djHzBw21pFgpZ695PTjPScRFgz6zcGfXh5b1Vq7JFJsXBjrvAZdmc9R1t72jLpcvFdvr52SxELQZmzV8pWteqTa",
  "key33": "3oBZYq6E9E7Wkmo66XUoPYYJBALCf7XRiJQ9uEa1nwEdt6PgXpzjk3MTs7d7pXiCfTqdjxTUtYuG6j1WkkJFDfYw",
  "key34": "4nbuehyab7Ar7uviExxAP4kup3FpRC97vKyEtiwgeNLc7ghmHR3PRCMNdcJHFosesHRQd5YphCgMS9UX9VWsDnRp",
  "key35": "mKvxDE4yH5L2prNdkXFF7cbxZg2QLgQt9Ynts7YscJHwgAcGJsT1ChnKHKiNys8v8TrGWG1UmG7mErQ9XZ5aNPo",
  "key36": "5tCbqMkXsodSb7nV46m7DMqNQx31DKD7WAff2PtfU1QSCarFABpCiKATAKLPyj4ekeKepWFxsasiTMoNWvdu2HPL",
  "key37": "22ZddagiebsKSpdSpFxCbfNydupZBCrB73cGMmc8sib6tw442VpzUrnYNgDeihX824XJ6jXkbn31NpuZrL1UauJ9",
  "key38": "4qotL5Xx1sC9npoEBR9iQDosAKk4wdUfiVWoTUyU6VKzgocT2htwEkLUmToTUUtvszWdrTk4mt9B1WvZXtbvrHH3",
  "key39": "3w8jbig3xhksSH7PgD7SMsQGLW2W7DtreG2EM9BuxLD3SMbno2zZQfzcUgRRgzHtdhud4kHp6mx9H9weWsycNzGD"
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
