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
    "379JbXvELsxE4oqsge2BK4mMkZkLRnxdWBqYavaveAGrnJ3QFUFZGTXXP6ZkR87mn3r2rM94cBuJ5K6yzjdQYN51"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CyygcRZPFHAQWGhugR9pwRpXmmmsebpQMBjku8xvh8ABUzGfC8q5r7bFjiyP9rEtNTCTepVJ88ET1An56BGjVDa",
  "key1": "2XW5z64nT9d2iQUuKwB7nymRuLGLCdvDVQQE7qAGGHRw9vsjV7oXdVmpBFZpHQ2jEgjoe4aYaRLVYJCRAB37djdh",
  "key2": "28V1yAcn19Pr2ytPJA5XhafJqfHZXjSQ5Sa3XgqXbCAnpKwRypEPSEzPubnnhL8rqj7BAYuG8zoW8STqH7RPdSvf",
  "key3": "2y7U5K8dANxQQLTj1mjU8MnFkegSMg7xju9mdoHhGD7VSV43kuu3Q9bsizWY3nZZVUWht4X51VbUKccoexXa4yTG",
  "key4": "3i2rhb2E3Yb7L4VfxETqZSv2iXqHKq8n6K2dm1xSQTLf6kra4Bb6AjqttZm8drMV8nmUd4NkpctsjjB8sQCkmwR8",
  "key5": "3JqRaiBPavP713xgPw8JhVzRHZbevEvpUE5hVXHnL4gkRXHG4HPbQQydaU6o9ejXMTBn7AK6VrvqHPh1BRUM4dAd",
  "key6": "AvD3JNF4fpTZ7AY15imk4Utjc7VWrCdcUXEwyeYy2SqM3BjnTWXXeRfM3roJcHN7sotSVV27phTAisqhuz1xe5k",
  "key7": "238yWUnqEpQ4FNjmWMHeMp7znqzkzCtZeQS8FfoEE74MCtVJPhnETkpfnZtrWQbaJmCmJm5icSLhaHH9QTeM6YRu",
  "key8": "SLf4cz4UhQa8ePycGomDbP5f6Hm5kueHKrJtgESB9LdhLDQjKRTSYcuWcW7FLb78LMCVd6KoaSPJSwtXkKHf3NM",
  "key9": "3s29uTYeaG5hQPsb3GtucnsJWU5mkyZkGevxk8eFqwv59gG5eDtMee2ZDHcmSRTeXiKZ8Xme1Wdw3bi1rDF45wj4",
  "key10": "4RoMy64ktmtpBURU5Vhpo7Za1pT32s8fK1uVvx2Vr96D99Y7CoQWDVn6qewzG6YtxmEXdCBUKrgujm82kF1dsNdS",
  "key11": "3astQ8CqVSiwwrBvJ4JApRGxLmG6v2vfBhF8wekjgueCReuULPxCqLzrDGYkHj4MZmCfRrccpaxPrDqTnUqSF5bJ",
  "key12": "4EqBd5UxyKhhEqX821p7kGMCPDaEAECaf2g9QzDUsosXwwX31AEDoQZtLvYSaGeHKD1tyEcZtkSAwaa1yiPFCZwd",
  "key13": "C1J134dthBSte4KDQKLiMxCnqSooReq7hk3YHYNbfRmR2bM3Jd4uvWnNPhPCeNZS8Vr87wJpPNUVW5HpodxJ7kR",
  "key14": "Np2oeZqBbWnvkS7Kcpk9hBufL4P7iDGxD2eAMwtCwLdu8xX4QmwvjbLcGiKMhXiTqogza99NrJseaKGXdU4VrV5",
  "key15": "vHfq845RscmsqVMzpfvpfh3nKS9DfWdTAYE611MZ2aKou9CHaWdVHPco4AGohs7sM5Eha4rXGHHWpBirY65So3B",
  "key16": "Xcy4TVcVJ8XKd9Fy7vdWTC5cbnUk1yRtGGGuwEF7BPmiTMPbyFX9W6pPz65MmpDU93e3DXDjn2YjFg7WrSLo7MW",
  "key17": "2LEKyjyFZWJ5bySDWsCif9BEdiutDHWSGwNkQmmG6fxCvqkaHB3sRYJi9fCFS8QcyMm5zUmwNg1WFt7XhtpuT44C",
  "key18": "41XBEDk1Ut2JphciuzB8uubehMCvwc5LLeTaBPE3eoakQMHMPetYHiyxLGU1rk7fxWNzbSEq5fPLkqrEMWpoYe9d",
  "key19": "3J6T5bfQUwsrybtfwbY8zmvkVwyDhXAFwBptYKoMnqcvYQQVsbFAVjvsLzALcPsP4uRLMQQD9enuREbberV3WCji",
  "key20": "3hGfg3cfiR7Q1cCE1iFbQTYsnmNPrMaaLEEKWdrRWKHPZWFMHuQqQv1TVAAJDRyoty26eEXeTNe5fbaY2WtAcFod",
  "key21": "63z3J1N4SxBzoGSLa7JKzD6g19wXLB6Kp2tTNcEJBDAU6MfKmNErXmBwGbPpVh66ewL8Z5Hbh1g5ZbcLUx4HN5wT",
  "key22": "3AsE7CRv7trPmkt7S3daHp1V9natVNAhU7YjUNPZnBWd8amb4rB59zFDTWu9zAZE9TZJwmH2aoKxWqZbi8D8Nb9d",
  "key23": "2cLo1ztPH3nwm16vdQHwjQsz5KsV4NYPybxggcqUPZjXo9Yjx16MUmUUZZALEY5xYYg9NcEtUDxRhdGnJFT2UB2g",
  "key24": "2az1si6MP2wgW9szjmFXRS9kvzna41qRFaW3guW8sUxTtqLgQjsJqiZdgHhvyHACLoU3AHGhXWLnKFMXTiuF4H2s",
  "key25": "3b98cFf6dnzxaY8ixANAmL5JmRiUdyZiMXKQzPpAVPomYEwyWLqRtkMmzdkM6158VnvfFxTo9t5NUj6uPJgYpA6F",
  "key26": "3suAHzi1nAYtmRoQVxKqHbjDR8ZPqUNcaqTgKANGaGbNHx7o4ZcQayVTynYhKA3Z9PFLw1XbfxxS9XAkRA5KRyuy",
  "key27": "39BjGbux6j7PjY3SqAyeciAzWvZqPyjmsRB4HMb7Dj5XbKBxCUakPtYM7PnMkponAbJkPV41t5h1DEGfDvQhkc8T",
  "key28": "3X39QovzMjew56PhaWtKcNPNgZRj1CsuzfD7tNQMEWHJ7aDUScBrSZZFsDcZbAuSaihXKivyNqTMrMnr8s6ikJNA",
  "key29": "AFmA65uqyvWX89AQJd7vjwcsFftJ6SjuK37ryB6gn26rxTEKWhL4c9Lwz1qv21uYoaRqqeY2ymXGwzZdhKQnQh7",
  "key30": "QSY9JEHS83H9yMayZmEFajT8jEvBLwFFKdMx7FjcpJ6D9AAMWrksPnR3NBnHGJXbSwc4uHkqrjvbd8WzETiq9ML",
  "key31": "3LhK6EhP7tBPLcMDeM8xwyEtHhf49agPBC9sBATpqfEyd3NzcHLzf2oidHgKofHRXAuP1NHPFCSXQYXs4hQm5pRX",
  "key32": "26qSv1gmyVob4JgvsVgXezqPrmxx4XDKCoxKNkesqcWA821G3ENMEePwNg6hDBXYdUajmJhxKuMWugoSmSZrQB54",
  "key33": "3jxs8hQm4HDc8wMYoDaggBAjHBtAgN3HwzQtCLAou2U1QJSYQqnfhi2nRPaF8ZhWFeGENHLo7QipVCNBGmZAprTa",
  "key34": "2yPxyYxRRGn4rhkXH4L48T27tpvuXxvujnX1Piuy4qy5z4HxVAABVM8P41zdecF17sjrYsMuinhTEbaw2mXG7aWx",
  "key35": "5vR24WfL1sXNwQfSijUF2AKjfFAcL8Au7oh5PBCpXzk8zYB3DZanGYhEGw8thTvSbePM7rThhPYBicZQzT4HzAt7",
  "key36": "5BRn9MuvcG23cC51NTWwjoCKWm25QN5QThcxdn1DcyK4QJ8MjLkeYYtw2PNTThymrzTgvy7L8aBKXk3mHPCpUbSi",
  "key37": "3V2FhQSn7FUTnwDLrJxsKfDqFS4a3NjMB8ETMgsyTWjQf1TkfFQQGrxTDyHTfgqhrZZYGG9NzefnKGFQvaaPxhms"
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
