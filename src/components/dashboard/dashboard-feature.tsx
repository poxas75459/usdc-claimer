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
    "3NYr6BiPYsawTC2sZiXJjeW7o5C6Wy5awux17HhVWXeqiHLSThC4nrLqgLRxggVXG6Ktg7JnP3zrpQ3mteHNyQt5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CTiASDiSWw8DKBUofBWmCLqT1WTd9FPpDHsRcXZxCLmhk1aiuE9NtY6vZRpEAgj2MsK9Y5omMKugRGQs7wGYfVX",
  "key1": "4m3DS7tnoYEb9XuxTy7hKGFQxEU6tKj9iYrS3D2AxE6zXtZ6wPfTwmLckTFq45GuNMEivF163ydVWgGDAAcb6rcW",
  "key2": "4pSn2vFq6NwSVo9DCYqYhm2oWdsyCm33hSc19Ac9RyufTAmY4uZWpijf8TcepNXEzeDLmQhKoT1HKxLDk9B7VSua",
  "key3": "w3g9N8P92n7EVMyyFZjGgNzZQhm9UQmAGkcjTavc4ndGWnBdAAsvJhb1pg88Hh7EDMnNpFYVhwmaDj5KZRgSMmL",
  "key4": "62cL2pBT5a4E5GoogaEb6fdGVoyEHqyW8RPCk3dWCAPeQyyiJQ9cZAmxwzmeNEZdnpAmoBjDKfEpsfypwmuB5L6M",
  "key5": "5oXsvfGPH2biPwKDynGSVbQ6kCuhQLvJq1P41xo248PuE7Lgf9TwUhnBMCBV1x4csQs2q3WhThVhxshuKw6rEqy3",
  "key6": "Kw9UBL3N3XF4xBdPvV4F3Upq3Fq6sw7Duz34mVUoPb8GwxdBNBhLteEL3Uy1Yu9LMz9oseRs7Ujfff2HfKmM35F",
  "key7": "5cg8R9tGhGhtoZpgQA6cZfeA7dWcGtLVas2KTTaGvxDTmwMajsQJFjVQGQLXCLTsjVpmyiFcpXdrqGFYd6ykVEeL",
  "key8": "y7uC7LdpJoqtZTD9dJAe8iEeByimybQ5Uz12ExBAX1MMuKh5ZmBxd7EjQHHre8u9YBemDxVMiUWvGL4qbJiKpwi",
  "key9": "2CQpM6s91g3vm1uEpdomLw5T7CEd9YKV9HkfCvs68QL41pJjEPSF7L66AC1razrTPVCTWo4aqGahq9Xju18dX7gz",
  "key10": "66rYFJc4JjvEvyxvaDWdtHogU6HD3gCWHPAAJ7ZUKvTtCWMqgrNyRt8BSdVaSEU2YNgg7ERxhewxjEMk7BLU6yJW",
  "key11": "2r8reMVNpYvsKvztjW6sgpRXswymmHWSegazFnN5PMDx48fdEJuH9PnaWVWaJYVCvhSXuY6NhnEy7pfyBaAB2QAH",
  "key12": "2UyVA82qK55CSWEaPeRD2Z8QwFyYvfMT4QXFd6PK1J3PMymQxM84HSRSvJ3oXLDsaEcpc6gv6HqJ1Lw5HpVfuEQm",
  "key13": "276K5qUSszuD5fABmgUXa4rA7aTWuQJSREamF2Dtpg6HawG2CKc9GCLTbGf6Kob1von8iMkygrwJWjxuaGwcPFrv",
  "key14": "vBp1NZd1aaTiTNrqu4PTsUYDTnybWump7sgYFgXZm8QMdrjxT8c7MttPEEtvVmfeVL65abkggCt17HVNbwqWK7B",
  "key15": "4mn9t2osM3E14zgZRF1e9JxakurqC1sLc64BpZofheq6vszEPgJ2EUufXCobdEHutJw4MwpnxKU96ZkYKRbPac2N",
  "key16": "qkUyaBw9qaLtVGXZZPFaV6i8gPAExhWDfnk8WzDANShNCQy7ft2pRgbYkB3QvNLaQZWjtCfkn7az7AVU1Roy7tc",
  "key17": "45gLkcTtgBJAGbeyLPrGeK8aV4FHYVhyuw8ib7wqUWhTQw4zbsbQxybX7dbWbgaZuNXBjK9xQVbv2NQYccmp11td",
  "key18": "Rj9fPRr6ArtSi6AeV5R1SF3hwzEoT5GSPXeqya5DaRc5jNH42t97LB9UcXHrtQPDiEZ8xEfSTs1apBJ9mqPwXtR",
  "key19": "5mUkjRrUvNNL1dhBZTp7T2ahkAL5o6C7q1arbz1FCifWq8J5DR5HHKeM6unYbJKk6ze1yFH2KrKCDdN4JLSZBnty",
  "key20": "3R7Rgy5nhoVoZLcq6u3Vk6YaeducFdC5KJsGz79FtWPhjLqJqh5mzgeJ37rkcm8LMyDy3KdrWW2sfujA4sMEYJmm",
  "key21": "3DG2vSAmSZC3A6hnFkxwg3mbDK5bmdLCrtojtB8Qz9kKWCKchuPodrHPeNSUnYB87wjVUJBozsDHjTri7dVumFX3",
  "key22": "5WPRKqSsmRZgX23Nm2j5BDM6eRT6jQNaBNTzFNHR58LgSQUQTz4mP6jYwVf89PD3DtjjcrAaUQwcYrxM9YY4TGQ4",
  "key23": "4JCXA3Wn8oBtgPHVXAN3CoZe49p5JDi3HtBXGvQRinqjCyQtMfosDLmcFMrZDtn5fC4tKPk7vYUFULXskGzyJR93",
  "key24": "2gemrr4au4uyHf9Bt9uDRTguuKk9Msyawyw7JfuUYFCqQwibTEP6oQmTeXzBYAV8Lan23YuwBPZ6TJCGKGW1yRf3",
  "key25": "3eNnpiz8CnX6RyC4TKSe1FkqMK5vwHytBfvTt7Z9AUe6zDrRBuuTnTfzPuYjHkWsiZSssA1YqovXeoMk9AcLMyvk",
  "key26": "dxYUZPqZfqJhnYwze5pJjQ7oNVfsi1prTWCafbFWv8wqbik8MGPztJsoq8oaqurCEXsMs2aXBUq3Q4FhbV8nc2x",
  "key27": "2UyQSxQVJq2N7UyhkEVQKoaGE3Y1TGLTSMYK7WFUqTxoeerskNbVzMNMSZAjqpGHqwzwHTY4PpsZAd1xp1bJnh4P",
  "key28": "2YGn8HbcY4THhbWMVqL2X8rhPnPtG3HiVAntTAzhdrcPNeFG53jHtTCJBCUPoafV2p5bSiRwb5XCX6kHdhcE99tB",
  "key29": "3ik526FfsxARF74189Q2MBYHpZFfyKfsmFbHuqSCPY15TP8vie1ZVgBNRGnvRKVRbuaRZFxjgfjcFHXMRxaXYfXM",
  "key30": "3PsrUeNd5jvGTWCB5H46A5gmjDCBY6xKEvpMqb8CzwicmqL4cum6e9dDxzVWH4UwzrBF4k2atKuUvTjbMBVUBy5i",
  "key31": "2mjWY7YVsL8yp6r5Xi7Nq12XsMcM26myvQMAT4ukAzvsGDHSjF37LpwYAW3e1zUD7jHFRmmfMWqHVZDpMRdaZkgB",
  "key32": "4cytWTB8MKb5VXBkgNxDRpFiJ3oeTJqEB7Jghh5oDsvjCWFMwzRjNUh81RiZQhtWDfAp6KXFrMfcur747V7Q62FD",
  "key33": "5iDBGNzUVD2RmZDUoR45bLPmT6X7A3KuBqGQWh8n1hHQCHMKti6DFM5DbmZKRwc4kzpNAnGQnBnjJzPFDidFCCgk",
  "key34": "2xhD6oBabZmXtMXyJtCt62eRxVGXo59NnEMoFCkzGyxrDRNMDkFjmVG58D93T4NCtM8DsgRJzoeFjThPf6qfkZpF",
  "key35": "4NaD4TFXfxUVcfx7p7YrmZtfFMpUmkobo5D7o76BAY1eq3GyS5JH2YsqNSnfiwZYYkLeepxaMT8oRtnvzXEegd2W",
  "key36": "isQsKygqhedW4EjoYpWnB8wVxQ46fweQnhiw93YgPftqHPBky2tLjNkJPxThhUFirVZxqC3tpTrqMoDF4hrxb56",
  "key37": "iepw5WACdB1sPJz69Afp73D7waUZJPbEfTptnc6FouPTbEf7EySaUmCdozRdPeBr5HMWH4o9Vx4YATETHPwhx1A",
  "key38": "4o2Qkf763r11pyNriAq7umnUstQeAmLxBskAqXucHWrRkEGzEMLEpTZX5Cu28cQSJ4fH7hWYHhfCGfEU5KkZncbu",
  "key39": "5c3h7S7C22yH41DVQsNS3cEusJJTjEPZN1uj1MCwA9R3GfU4oESJHox8Wn6wQPVzztZ6ZkxTJb8kBda5TrLzv3eD",
  "key40": "2rZXAQKbHp7ZmgGbb4cL6pJop4BGyF19uvVoVKosdMeuS3UhHU4XVTLCMxE96prBc1oNScMQBZvW51iwy8n8L7az"
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
