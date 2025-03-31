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
    "3snMG2cgXE7PynPfrSrYzLGLxNwAbBcX3JZXSodxFxCzn9gcTGoBB3v4pXcKekmP9DnwhyyHtiJMcjn95CSGRa9e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TTsBtTfTQf2o8JReuWfcSxbQfjuvpMsEP2Tp3tWeupEAqTo3LBseBnb4t8GUWDCHHuhvTbAqFZvEq5xuue9YCGv",
  "key1": "Kx2zthUHbRCpFNPYEYbmi1w8opg3T5QioTJJdJdyDrCExtrbinwY2A9fo7mLmfRS4EKrbtA38s9FswtR8Ps1jXU",
  "key2": "2pVc8zHvmr6F9vHdU5kyFWAvdzDr5rEorcJhxQcPMMVd6Rjca2gN1XXugw2rsPZ13L8WsEUdV8FuBBqUpqVxDXw",
  "key3": "38baW3gGVaxgzujGttQ1TD3nuxuyrbEMKDkgop6GMpmKD38qa7nT36bPqAio3AhG3a89Qm1ieHX53tpFjLMQKoPu",
  "key4": "fU6VUTV4vSH385JeYUMC7U31SWzAWPVx859ApPsRy8dFJNK7dcJwEYsom4ftQvBkJDB9hD4kVXfZKtTP7JToiKv",
  "key5": "2wC564j2jbYjjfSJug6An2WRMwyGiremXMbWLfPC158vsi5BRq4WByJKp1HtpSyEkdSLcu4WZ8bLxQuYX4etyYHm",
  "key6": "3xzeN4QxZtH9kf8Kz9EBeKM6fh8D4otnpPHg8Cd77PhnthJAJRkeD2ZzaJi4k9ZhNpoPMGpKCuv1oqK4DuoK7Ddu",
  "key7": "5GqJJbyqbVppUqDGtUX5gxuStF7hZ9bfnnKBvpo8FfdcGS4hq2Tpzc6vSqmYzcBZy2mCp42eCk5gN2VELBsDFDXn",
  "key8": "oUJ95dVEAiuDSix2GNgurnBiaxAnhBewkTvn78Pc1rTJw7qTJz5iaPpBHpxnRQR7xTa6PX6F4Y3tov8nJgKEfBS",
  "key9": "3LiFwWwYFHuRUNup9QyXx7uUx4Egcrw8cra8hC6rqQUCjE4ngmuKQ3qiTaUKKsA9dWdM6kUEysRpkQLJHYRtpPaJ",
  "key10": "2b6wEPU9CoM9KX3g9swQ7nKmR2LFAooAVM2c2iGDssYpaRaLBmL7ow1qNZvUWR57WncSDA2FGeyHwNmvUtXXWFPz",
  "key11": "CTxBodcT1fYEjuxnWDuaVS4khJm99jmRetrQuJRw9nqrMKzauiYbfDwQfo466b4bwWqKmZw6a2nkkQ7tPGa3wAc",
  "key12": "1vMBQTMARtrEyZqJKLCFoxjnd9wEuMsA8B3YbjK6c3r3QpXEKJ1XL7ZJXTukWHph8JVHyDczhPbXzcufowzZrSc",
  "key13": "4WvENQ2AKpv5zmGEpAZcrRbgch9ULne4kNUaa5yBJhakXEwNx5tyXbaCF1L3PJ85KkEScmcZFEi2j2bqWDVQo9cS",
  "key14": "uhs2BrMUfLjuwzhpNEDysXiiYXRHR71Z8YZ99v9UH1zbEnmCdJcaGccqEMPmEk5VQd5Q7X7TTwqSKnWJqtgFKbD",
  "key15": "45bm3Y4V1j7yZW7ewfyUMYPCbWmEKYXyCZwucYej58UHKz5uKtLjdRz1WJm2SMdTEL229FhNdEsJoUm49b2bJqPE",
  "key16": "33bYQjJq7b22JKJrkJZ976jLMaSQcUjnoUK1oe9N8nXJRB6kM673EvKRUYWqgMj5DnWo4qKsQCyjFGgDkzzcictE",
  "key17": "5B1mg9zAyE3F8vRcaXHTmNQ7BvwjSCq6yM8GU5zs9zJ7am47BgrfyBThKXYaSpu92pKZFkHFwkRwHuAoLqU6o6JZ",
  "key18": "4ahaNDNsgVE3qdevua9uqrE696QTEUPZgD4QYiW6CT9zQUPvCZZodjHL48amWDDkUoifgexLLkcwRe5KSjghugED",
  "key19": "2hvEz26sEdBdsfyWNAW6KNsUeNuWePq66BGLFvmufGv4w4X5ZQoPRUxpwAfTyDrGdSzVv1HcMGqYywz65fudV4ge",
  "key20": "sRCCrXRXK6KjMqwzJtPghE7MzrXNLA8WjdXQoAjyVg7YjDQjBtAcpwxyGX75bMyhvp2A8hzeomy7KRb22QTodfu",
  "key21": "258sGnXJc6QxtVBVvDZygP6rYtiVcPinjCj6H7hcNpKqwqEGoUL9yihcNQYe12rndx2Kaa9TKsGLQ7B5cYpzQz23",
  "key22": "39ArtwYE9GDpLqNpxD87XXbFJZcrDnXAagVCvMQVus34TEyGAjvgTwDNfjpyDhEFi5K5omjSeGaZNxXWAQPsqUPf",
  "key23": "61XcSdU1qk4YBioLersrYzwVpbwJXzh7PkuFT2L9KWwNLgMczL7LRaYrhiYMqQiVNKZoQyY7pSYLdqZ5dJWERHZ8",
  "key24": "4GgtQgUSKjN1z8aLFbktjwFZ3dHnahDzvrqBK3uj3Au9KWdMJiQoDLfbZhb3RS96XigwJGeahZHbfSzY9P4XQiFg",
  "key25": "4PFTSUHFk3fina4TNHiEFTwGG8ivxE2vfxYE1rwxY5NFqhLqwXiXaPQ6rgBvopj7SqvRoV4HRxejcPYhKT7RdJZ6",
  "key26": "5MdTyPoFJcQRSAHGoQSFxceUqyMN2jqJ3VLYVq6pp3evN153PPcRGaDtRmp7AqV2S7sWeGdN3duMSesAv2WafhiA",
  "key27": "5an9W2qZtv4igMSySqCVXJo6JXxURkdJhvHFRwWLyqPgpFtdoUaYJcnkmyhyPS7C1KZVaXuWrSy4cjcLGbE4inPt",
  "key28": "4HDbDS4djXiMnFhTRPGe6L1t14SK9ox9w4f2EENKwfobimRdksTcLcNkjTC1AopovR3kXonLLSgCT2QJRCgW3GEt",
  "key29": "gJfa1wPm2ooZTwQNF4EHUpbnPcRTKgZf56aE3BUxgNEqoYjP9abmv9juevLh2NExXKFuNgQ6GGuGmkQEyzCrdTu",
  "key30": "4Dg9ZBpJDoLvuvT2Po5ERRaoC1sfW2FMAxSes32NkQAEuMdjABi3sqxdxsufLv7jmMRUjmXpV6ahKmZkQvzkSqYT",
  "key31": "5sF2jM1Uu1MkT1FcnnTsafdmzxwe8Aa4f4ZKzBwHGwC4MjHeyVF5o15ism8XVRiExzuCg8GDUuVZji6S9WemDuiL",
  "key32": "6CyJ5gheG2UzzJn2HPxtfncmRpf3A37mKa72zxBjssypH5szQGvmZWnrAhLuAH6GJMS3FFRz3nQaz19CbHSHC1b",
  "key33": "5EieSmXUqexLmi7mdqiCmSPiRpsePaxLavUavsxmrmeNqYjg9iRXz9y1uGyn2PVRs9q4eaVAji8bkkvEG5puqeL4",
  "key34": "5SXjydYNs3YyaTDCKy61HfdZCKFQ9TgjBMBMsHsEuGpdgTuYTHjLRZr1teaLReiBgMedEXEWUaR6YAzdxn1NzTRa",
  "key35": "31jWt4QniFmWztLVrsbvWHyn6S44CNUnvTcYJ7UfMwVJSKAN2jLWiRP6NPEQeCvBeZ3nEdUDcN4y363UgToYvZ1V",
  "key36": "4nF7ZmZnw1zsKksEW1C7Pd6RvVFqS5FEqBjDnQnqDdmpzUUbRSHmxEBJvZDtzHDafTKQxATCvjVsLzHE6AM4xxAo",
  "key37": "25YkXvuSp2h3KKtAywG39XdNayjKh18v7o3Rf33m8PKbZw1uCZJFmyUoSAtzNRCmyJKn7Pitk2k1duHtsNMQbXFB",
  "key38": "3fQPKE6sPe3yXy2VTKVZfdgcucmR9pw8wf4EL2WzWdqm1QdWTNkBF1uiPXnXHGnraakfspby6PnkmBsoJRdphyGS",
  "key39": "5agvvH3jfnYzs91U8HoPFm7Bnj5L7ewT8M559aDyGNVDV5m87nW5bFbGHVxU3aMeQHr7JovL7oUqX4RJqCiDY2uC",
  "key40": "5PbMsyVqjc7RjbdXCq2WVfQYBDWuhesz2CpSunH2pm7utBQ5ym3t4fjcd85BWnruifSH92kU49y9d9QPf7W1UmjY",
  "key41": "33iedMvUjnzhRdoRt3h2UzjktbZyqTLvfNVW5EEN83yum2LhP67zCMG3TN3xkcHP2HvC7i9Adg4pMK5zyEAs2cn8"
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
