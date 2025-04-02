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
    "2nGXSjJ1m8VA45Fg9Co9J8fW5u9HxSD9HCNoSz1HKCzn6sxAXCR4LyjPCYKWbfKmkNvnDRDg3awuL3iNBzVy6Epn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c7SxBuSgh4YWg7x1vfW5DTqzRFFzc1Q21NDzkDjwmtZkHpqDRQt63n1zATuJNEv4ANGE5XeUDkS4Wts9wtnvzBf",
  "key1": "23VngdPeCQkyaJiRyxyLnG6fSW12XE1CVrijEfTvpgRD1vjqQ3AMzXidgoNNMCKorbsAejErHdMcY2QSbSV3VNAT",
  "key2": "hqk3xrkf8kVZS2EEp1bArBMwTWLsebugAWc3TnRABaUxoGgCdgpvMnJ9kDL23GNc8mtnidiVam9N3r7ivNsawCt",
  "key3": "31y4zCrokxo7ihJowA7YLAE9ZTrCJroAe7UtkDrXnCACi8sSgdSDozGrY912BBTGbq5mMidNsvxcph77NDJ7gGuS",
  "key4": "4KgkyYwL88LP51vcGMgm9eMJSGjSEszv3HY2UNXbemxNex87KvTpDE41W1PSkBCBj2JBANFLnC77yhgeJ7RwcHTN",
  "key5": "5Ji5rvrsy5jFF7X8roTopEuowzLjknFd6uNstgDBxqUxhPU7pe2MKajuphcSupRLDZ8t8QkMsksriZ3BzLzMTTz1",
  "key6": "4RttMw1nG4sNHz24dMPgARDcv4iHeSLPp1ZWvZbvRHWjF5DEfeA7VDjLdC3SgXLGnPv1RVemkRwwsQeX3uzx8pkr",
  "key7": "4G5EFPEECoBsuT14a8DMc5EJhp2ZmD78thvX5wp6g6hrSfUr2FsToDrzwAKs7Z4ar7933wB6Sj2CH96g4BG75NMo",
  "key8": "5XHag2iSb93vNzE1fqsVibSBsQGZ8j7jaSmRGKkwjq4KZTGLNGdjmJ9bWkxSh7CcAXCgHbeduZ1Po4WcC7nMsiEU",
  "key9": "5nByujjVEJwMmhtYphhUHkGn88XBcGPUn3w7wcwUZvDPwdq1hr3p51TdtX1Q9ijQEcSSJ96GTX29eEts34B1wmdD",
  "key10": "S6hG8tkNueMMkLw1HJK1bqN1NpVKotjWYRJb5UHK4UiTKvNKkE2bP8qzhc9FwhkG8dghdx58JycaHDhbxVnHdeZ",
  "key11": "gF4awAcHaQK5x1kcjGgfWBjgZ8F29YPXW5EbdoXgo6ZRQ7fJzABWn94DBtedCjYWN8fSuyM3UbX8FBGNL7qDQeb",
  "key12": "5DVQm1TPmvMbgLyLUFgauGuGxe6APfq16bdfYDppLXwHbEC8N7Xj6jwYnoVFPxJscyC3iDxekNN2htwd7z1BUgP7",
  "key13": "4q5pxPL3gp5hcrAsAsW5LesNQb2e1aCgdzeAJRXpvgqexFftfNtdPFqzXt4uJ1WCGxcSrpYjTWY4c7bFb6B8SNDd",
  "key14": "4NsToVbyr7apXfcwR4VNEh3bWvGCXm4EC7wDrvjaPwzZgRKyA4FACGuSeAown5MJQzM8UZPBvqAGMLSfn4HuZ9Ct",
  "key15": "ZYfdDDoTS8smm56tqRY4Fo2rJzSxb4Fdq2NUynGhHaT9eQ74YZAYeMUoxf3yG8ymQNwyLqsa6cEkRMkKJc9TZ7L",
  "key16": "5zQ6sQaXk4msJC6wWiu93gDdpKqig6ZEvUszkeuVM3Aoks15msYXJ9HStGS87v4vXz2hXPCXGhzPDXeFb6HKSZRP",
  "key17": "65cvLFKQcLDRVrqjfHzTisvskfMUzBD3oZGSrGUZnn1W2MF2GtqSM1xHacWve6uFBxxuGV2qzGUBZQxm7tVq3BzT",
  "key18": "3vruCpNsLJhhxSxSt2kXsSjGr7H988wZwMM8yHuk7xCCKcDujdy3NfnB2MfLhHxgKQP9xt41f3gkV3EKukLLYL9g",
  "key19": "618bgP9F5EDscTU3WXaXZs9VDa8GGRyMSHgvXHYe1iwPDHZsbU9XHmNKkaVKesDgK3iX2CSgmtNSmLLapJgEgkZH",
  "key20": "4ZKnGvGbaMXcALSvFYKmVUeZTXfpuD5MLNHzg7igkEqHXHq1j6xKozTvHALbUHpdnmZZBAttmh9vBm8jiSztvRTi",
  "key21": "23nn3qSCiGynxJDe9ofaPj9eDi7693LfF5ECHWEvXFXTmcWbdG7jUAXyxZAZhLCzdL8qPrPUreij73eCwrYVJKxd",
  "key22": "V22zZ3q623sD4MjrSnGaYvptDqGYTUY6sL8vqGE5ehzXtwM5iVuEvUpw5YwidWvreirujQH7dQDFDxtUucgv6PU",
  "key23": "54vkQMSp7TFjANRjNvH8cQHb83XJzgHW3sEVfjR2pTfp67FtQSXV1XLT7Nz2LwVQPfJ7nLQiaX85r8TgAf2exmcX",
  "key24": "8EodSchsWQhNwwBbHf54LT8DuQAxPdJ4zk8vCnn9TxN5GdvVF63XJsEXexQDPGWMiY4F4Bv2R7waYirQu5CcDVr",
  "key25": "4XCCoD1ZxhotvwHq385Lr2NSosBLqLMkFEbT4ADXreNVKUfK2Td3Wa38b27R1VYr7aMqt66xn5LBwjumpXPsgWCf",
  "key26": "3biXN8MfziB5vKrwEqx2PDQxbQNNawYqZzcwQp4SEK5EmJ9J7DsSNkYsEzv3JX4rcAXsrheAafky2dRYQR497Qrn",
  "key27": "2hLCyuaNsajbVa11EXAVFbfGvHKjzdNGRjspvt9AYvcmHHSgVVYvLrJHCQqpN1y8JdBTKtEFyuELHtiw1F3brM4x",
  "key28": "4Xvjw4iV1PScx4gBpWGaoYy9iJn9N4p1YLo6JzAvVoVKp6dQzhtyHFLX4vTv8hKMx7sXG3VDi1Zn6KJxjF2QBopg",
  "key29": "3PPu5eWdgUBVn9GkPpWHSsaWX8dCsBhzXm6fynYbTWN7MSSjMSbbUeeGCSzmn6vANsyd2QNLuHSbyQJ3T8L7cxs"
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
