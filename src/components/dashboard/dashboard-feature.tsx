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
    "2FJJnrumdmtEXuQnKFS7CeAxESG6ETe1XjCrJTNr5g9KyLJZqPV2rDNpJj6BkBuTFSJKEuGpY3pSpTreaKqVJGHx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pcPJAgwvp3RFXRbdFLXna1ZCgNAGFjWfEJYxKG2u9P4tvjweu3aHCqTFhT27VnwHxrGRSmbkdEjPawxki96H6Ln",
  "key1": "ndVMr3GzJf2pvYrUtHQV4yNgHsZWmaTb8aKU5zVvFYEfZPvTMx49bKq6aHmz46eFexP7pxNYZnaC7iKdSqQz4s8",
  "key2": "GFKZVgteXCsr9MGSgaSR3nxzhzNeKoogKhcCHmWeYysi8eBRAu8reQ3xiY2sa4WM1TXjtLjsUFGroKBn44HxLVj",
  "key3": "5ar7iMrJ5DoSjgTFU986Wt4eYqgox7UsiQAXHGf68bzsaMbkoEF4P19w1hD4ahn2aF1ZunuFgLKZRA1hiwYd18f2",
  "key4": "5eLTR58iXSRD6G4X9rRcjELGEh1caqhWhXzCrrePnxwL7KepX7arxpMP19yRkxFPCC6Q2nXoMeJFXPmT1gnijrnw",
  "key5": "49Ypunv9PXtUZjfty9k7Yips2LFE2QUw5ZnXeBp5Ga1gp64LQ2yb1tLFkbbMgVUcK1vnR1kP55kaST3YSn645irS",
  "key6": "4RMwjp51pMoRxNXiQnFPjhCFwK2oJYu33SWaZYk6zHcGwEHJ2ZdW9DA961CZU8DFdZnQPUMAmNNK9eykiNsijbiW",
  "key7": "5zzeyNv19faoRX9W5VoLGnFPBPi6vDrfhtWe2rGvXsakEWMm5qZG3y7VxX8V8RpLqj3unc6csJKXDSL31pEcm3j4",
  "key8": "56gTHgS4R2pwWFZYqe1VnTbcL6guX9mRMoYWqY6DK3S7yVdP3AKwg9fFxqbD71uaRGHVCG7rxJgs4fD4ofprFgAQ",
  "key9": "vJK8qYBWKaBrAXi2TwBY76yJMiFkvy7tZD72y2trhNhifUB1tairqj6WEoZKYkw9QE7iBFqCpxQUh7vrgqc4fT4",
  "key10": "4Acc99AzKGeCMBDkJVBuiThcuY7p3o3u2Pb5S5yjVBio72xwozbyhdJP5SENoVi9JdVmLu7si2w2HBvKXMiT9j7q",
  "key11": "5DsFNQVUetnn7AGb4pGsN2zMnqc5ebqErTbaEGpHGGwUgcfBD3rxngpnynvgcLqzyh5wLZtGSDHMRh5SbwtBgchn",
  "key12": "p7uP8HmBqjU7SmLUiSGhV9jB3yjHBeLUUtQAoTTWjaBkb5M4Y3b5Pq8V4xzEy1ctc6jJrqFCKkoP8L8sNj375iC",
  "key13": "CtTHsRGhUdNy3wHE6DYD1GckFFJ9W1WrSffzBLyuZDyA16MZxMZzeMCyERRzKhZacspaBRLYsLovudpZNVCN7JT",
  "key14": "58CSgJeYyufGQJz8Z9uqyhUoqjdGFRYWuhtZobuVbFnB46uKwY1LnxEWSxovMmHFKeWhDtLR2yegVDXDuqxb7Enq",
  "key15": "3YPHp9v5umQa6SAzv88DnpBM8vFFRWtFP9Dm45XRtnWdCw7uM7yd3kHZhK7oVcvb3J1Qn3ZnDpqN7kZJziDgGqGq",
  "key16": "28y8BDuQHj4sSJw6tZdnMdK2iB6ZEw4Ex8i2KL79pS6FsaaLnSCexzp3LWY8mo6JK81a6HFfV1De321xAJSVQj65",
  "key17": "3WxckWE52p1t1nhMwJtvQoAif2UanRE68UUbNKB5Rf6JTL121M5PCcAcBCQkSYAsUHCvJycsX5MxzwqPzVNKSivj",
  "key18": "2T9xDcdE7q5ofqePzEvYqj8F6XGCMZ61AVpnjEqb4gK7srTvTQvvJG1AuttDCRP4Acb28KRwVRbJTphE5nD3giDK",
  "key19": "2fCe94FP4MsqgCFH9ddtSHjD46Z2yo8RSXTEiZW1JrazpgWRBZD4X1nLYzGs4Bt45KEJFsTep9jfaNs974YABTPj",
  "key20": "5ZCn1hr7b3GLnToU4PbDYaJ8Kd5xQp2TpD83ydKPWSK5vLNBAz4TXJAg4yARzwifHjnUZp5LzEzuV1d96skDnqw4",
  "key21": "385wUe5vKEUC9exX5jyBx5WzHakpxspHHy47VFUP218hVtBmnAaGUkTniT5JhmmPHkYtgS8VXRfkfiTBDUVUTvyM",
  "key22": "2oUPUNE2wLGFA1bdQsBo1KgDspSA5tYhb2W68Zmvuq9iC4FFGxtcJhfnGEnmZ4TpiUFkrBqtf6PaqF6FFY2c91dt",
  "key23": "38zT6itt2tvt2hBRsCTHiw6gFA1JB7crokH9CesHDQ2KZtEmYGYDur3F9qwGWtYTTzLE4vfUDascES8w2BcK6V4x",
  "key24": "2NoCqZ1gjd7ckN1kRhGHYiJRNVno1rcWKusYjTpjuwvAtUZ9XeSD9nJxjzM62KmyTVUgu5MpgB8s6s55CxxwCD7i",
  "key25": "3agHzsSRZ1TDGQ1fhwsGe7bFrUdc2WJ4qMVwgvavJVPLujppR8n9tj8QdMRponb11aQSokVYGwuUdnH2oTL7pzLA",
  "key26": "2HVAR13PgPQrPksQm8FVjrWRk1SXDqVSdLt3uJxQQjxFEP9LbXEhDSTwURzwhtorwEWEomtyHfB2w49cDq1c2h3Y",
  "key27": "4XpBb9pH5Ut4TNShZz4xjxgV8DExsN7yKnUjNpTPQQgZbsPCo64FnManPpiqjAZXwrkMtvytqy5NYLTAqjvqrmG5",
  "key28": "65GPLP7KwR5iqz2YQvY178Ft9THxuKwKyEF5ci6RejxgtRJcDEwyitRoqcJvZn2WN6FDD2eVrsJpzRo1YYfc4qGC",
  "key29": "5umbYtfsQY9WCMHbx5x7CUAT561SgZXQPK67388VbwoSKVufyNqsFF5Cd3qkZcN7iWPg2NqPgZ3PwJ7N1nNKgNBn",
  "key30": "3rDFxg7MTv54HfW9yGjXD2pcArpi43v3pY7nXiDDLP47L7gnBe2Turm18yZmDcU9vx51Zn1hWY6Qhp3fQza8Sjeh",
  "key31": "KYAzf3R164wmWPHCWcFP4gm6YvgTqZqqrWPdoU9ZNCSqnCSN8vzhbfgAd1rznkYgtMQR27xR5ioPcHBz4hKSzqb",
  "key32": "4S1kTADRcBZdLKU3FhFvgt2ixAadUVwrJzb5uFDR1gUtcq1b2E3ycR3RAn3MwKdbRqABKdwuyKBHJFg2J4b8yDrR",
  "key33": "3V2YnaGnCcXqovNidRaSQiv1xk5P93pzqorCFvQ2bQfFmZvRu3Q5eyzRhgzsbsEpVDvJsofqb4ThBEUMyMeg1dst",
  "key34": "hPb9vmYpdjMXCo8QyjDoAiuhCTaufwb7ydkat3WZT6Zc8p793CdLWN16fg9eju146v4Xst5MSxThnBTo9KCRsQm"
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
