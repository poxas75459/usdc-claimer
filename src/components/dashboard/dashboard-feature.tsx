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
    "uGE5VPwQDpMzobZXDGdma6pGBspuHz8pbwykfKjuaKi7cA1b2rJRrHGwDxssujAfxKfeGvs17VMG6LAd7E5Ba2q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tNpHihyhWm3Gu1eqZKBQ8EKK2wcEQTyV3Rqk24faSNFZUmEzLecseA3orFzwg887dS9aU2TcHZ3XVeV2iZ2ag8f",
  "key1": "54WZBq6eAeSqTyyEE66A38iSYwzQQW2A5gztCy93CF5E42UoNWKgcWZ3XBtzP4rNCUZh5tWoosCQwhQ3FS5FMsTe",
  "key2": "3jWRnYe5w3bQL5YtEigfpT9qzwgYLTXtiC2CKicY4DLh21UBiarYsVtF55G17CXbBd1dhUmA6ZffekjQ4KSAVPvG",
  "key3": "5SZ9VxjCKCQAsG2HNSYKBu6eW1SnA8SWuL1eCpKuLgko1orRcVGxfg2bAsQubUrkgYP9Zin5bNPsyKLBohdbL8ci",
  "key4": "4BMQT9JMj5bXBYXCuE92n3JV5X8RoHdSeAiSdywMgtpPDSCvt8PLWbQuHKqBZAvpRspuFcYiWjbhM4Z4J6Thybpa",
  "key5": "5wDYMRvbfAd4Un8rQyAhJCb4CzaWMm7H4nvTh82CXY5SXkBAvYg1tFQHzLge5trum4KpPTMnEshCA9MRN42ZuhWN",
  "key6": "5nsDwRX8aibGfK1dKo5PDzQhRMrvn9qqvyDHf6tuBfHmLGB8FNrsMWraaQoyTE68757nVg7Hw7evpWc4NjZQnxwz",
  "key7": "vHeZm6NYnZEfMtnXuBa79jspez14cgHR8i2FRdS4gpT4h3eky93jFCPdGqo86VxEn1RdyULh6UsdHzVAfjCwVcn",
  "key8": "5RR8HrwGCVMSEf1Hy9ckksb4R5NxGTs99zNWwTgpFoXdWfH6u5Rx9nc5hBW2M3cHmq3nAAmvUHvKTEHHc87xUpzk",
  "key9": "4uRLnun8Wcfu6wvVicrbbyfDsPdvKxW6RCij6EZ92P1zHaDM29oapVgTY5VwHnuTJxbmgcd65svCqxb83ZDBwTB",
  "key10": "3A9zVC3JMCA3vpVNdeoMbkPWSMso6Ni2HryktYaXgSG2CCUJJGfjxFqQuMCeQSPo98KxfQAp7w6GJ25hEfuCnUhT",
  "key11": "3eEhvFYZ5qN135Mw7xXj3vk1SzKNUPe7qgi8q83xXmq6hKXMCY3zt6KxH8BwoQFkeKVwrqWGRKZcvsH9VkbNfcnE",
  "key12": "5JbkCTbwLbx3wS4bbvxcwfFnpkZ9ozc9zVWAq3TRsUaxL8kEY5ZgrKjWwtEpuyGs9WCVYsedGSyDxgrfWAoPZ9Rz",
  "key13": "uvsBYiKF7BnyLXfDZFUhCL59tW57gxbmw8YmTsjiQxnhS5NEWazE5vmZUWWcxB6CfczSq243xp9ZunSRR2PEVNC",
  "key14": "3HzFGjvrZSfC4ZBDBqoVXWzDdXLwkU2sxYRkz1VSNZgpn2qqnSkC4DuqoTfw5eDj4267vXn2H1WfMwKE5PFxzTuc",
  "key15": "282EtXoVnaPRAF8YoL5qXhbAUPUbJDVvxbZtwB1n5zuPgPuyvZdDDLbxAJVU2N1MqBGELTyBbPtne6xBQrj5p4bS",
  "key16": "3KP9z5LyEhzg2xY3jforRBck81KujHcVG3u5bSGKrtGiehXyrvAi37SuLPxLq1kzC2hPaQ9Eyz3yR3jEYrxovWhT",
  "key17": "2BCF4tdedoyjrqF3ZBAEgHKYemLPkyJJNJLymR9aqLfqqYGhdjFXFDfri1mAKjSZ2AhQQDnNPNVMDiKHBqMVb2hu",
  "key18": "4exVhmv5nkJ21VbCsKpmf9BLo4fMAZjjdK6HQuCBKCTyaxTRSXUJhyaqiLkHvBYdrmaE4uWE14baFe3xyUARZiqd",
  "key19": "5fTzyxk9oQqanv8Sq6p7ur8FMZRQXAKjhx3vYd3ZtSJV5jPkGY97PZuprDMQpy4AxoXLXTQvQ6GA9qmAwjKRsbwS",
  "key20": "EkwmNGrWy5NQe9J4BJ8YZ5bWN5JTYy2kzSaoXXUgpnowjNFDv4d1AcHFogoAXQTxn6YXsAs4aTs6r2DsxeNHbK4",
  "key21": "5GYmSRXEm15YWhLqp1VoPLVpPFsDEvddzVXRt4onuHpbLebNg7wjXDFBuVBv8PunmgsRRr23ggDQWEQGGqnsBC9J",
  "key22": "39J65wEBo5ncQeWxu7jqH3SivLjGP8JsJLZHkPszTY2WZPtJBwD98YFtReUaqSaVN9wN5enYwAJHnrfs9Tz2kxSg",
  "key23": "586B87WtWTx6EgTEDLY7bFmQrbYEnQZ8Eg4M1QQ9rigwUsqjDYL1hrTfkTz8QSN3xkUWCX1rbNEwQ9deaFZHjqjY",
  "key24": "5NhbZpsryvBP7UXvaddjQ4AtAyKEMR2bgGvRZQ6devk63QapuqPx1XSArdJabsgBejLrzSsSf4zKmRxmZ9UmNg6Y",
  "key25": "fqu8zak9SMnYhtmrxUqHocSc226Cf1wPYcdE7SqLCfdbqZkKhpxVsvcjGMap5ArmVG28pquPmbwxiHBetHAokdF",
  "key26": "5smTKwomwR7Lb1vuj1kdB2q3hDdroFbQKMSyk7JcrXH4ZDvDPFvsvPVhP7g7ADrpaQyrB7GGfdhK8wg3GpJWY8o1",
  "key27": "tmDXYz5Css4yC4uibpY3Rd442ZRPGWZAQyGAqM7wfRvwZn4PywVBLwubeRCZDsBKFSRnDnaNQ7GEEL9vGp9QjCK",
  "key28": "2dWo39jkKSSUxCz8UJg7tPVd2YvLdGTSXWZZ44fu3BH2X8CJckuzYGqzBF2Lyz5614Y9XiBbP8c3szLSc2Qo6Kg",
  "key29": "4opxtcPpJUJ8kiuNML55383tP6RvwMkpfe8svfZtCcyLy5L5frvBVJ2GZidpmoR7XFXYMDwb4NeMYuS6zpiCbCA1",
  "key30": "6aBMChunBN1BrfEd1wEnC4Lsp5PkJTz8YwmBnv3UWnD7ZULvWXX1ydTAASfRxE6wHS3dfeiHmxLSQXgSgkwLHLS",
  "key31": "3Bk5woYFCLgX3DxiCytJnB2JkrA3SRKg253Yjw9oCfxZRgtn6EUhXSntHLG68YA8cbur9cZUEjfwkxXCcRG6uF1G",
  "key32": "5Rw2X3XdasKTBFMyRMemXWuPzmA6AJeXt5jVcbektmyNXjtBD6Jac3mRYYmMch8rCf8qMAm6F78BbGENPLmpHrqf",
  "key33": "26s9e5DCPPa45KV5SazWFey3U7DDK5PxGZ8UKTipVnd3pKuhdvPoif8X5P42e5ztCdi4KzM9J72BJ6K3M7wQiegt",
  "key34": "5jb5NFZxUD4PiDPPmAhs15GBoEd6zTZr5apEbuNDR7aVz8vVrnpuoWczmr7ciZQ8EdF3RGy7vjhNXKDR7Y65smQf",
  "key35": "3tnJYT52gtdK6uXEfocyuKzL4MUUxLEji9v17SMmXJqWZY7DbGcKFQFmhP1oc2CpjNi7EaHC3LbXrHbSSk8ba7r7",
  "key36": "2eCgdpitLM8Zu7krYnBBe7eb8EZoFgCcmQmwC2ivLZuvrmuPXDrThAzNLkqR25s5BqHsQbUUyi7dVHqPeMVNuwUU"
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
