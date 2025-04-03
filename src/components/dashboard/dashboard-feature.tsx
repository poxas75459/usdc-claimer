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
    "o5qGHEkc5WA2knTS9mWk8kT1PmbRHwPmh2bY7JCJEPS3B7PmAgWRZGUJS8VxvgNP1ZMuY77ianLjfhkGY5rrenx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xQom4HgSNk3cE1iDg9ssnBhheSFf9vAbiRjswMH8iEQEsGVYetgweNEavZbbckCMFX2PbW8MRnAX8C18yxQ8naa",
  "key1": "MRFVuyFesqmsXXqDrdZhsSxqhhQADtEsvkfSMaLupuMx5nkWpNYNm9WCQTZhSyoMxJodWxvD9ojYYVzz3MAJVgg",
  "key2": "2PD326m1FQVkhjkt7THVEaq9TCUv7W5WPc9w5746F8Cao4Y44cvs3UBxDoWDcXRMaBqn7hDZuWS6Ffh67BqdjskY",
  "key3": "4ATCphFX4FXwytkRQm3nWLe4xxmK4eCBy9wnGykrKbeCPMBK5dtRpi62oLaGjqWxMdu7jqtTRMG1kpVzyVqTdAyx",
  "key4": "4dQLn3i2TSoGTHMEaTMGf9WXHSYTp4HwkFD7w4mLLEnzJM5rXZjQwpHrmhdj1ZtUQd5U4ee3jUMAMTUqZK95uGwL",
  "key5": "5kCNa1RoyGyEc5sfTJD4juGXVwsWsc3DucE4MPTr46UEeK55t8JxJxHyzHWV1t19WS1H8ZGUHDnVDvpTGQEfK66q",
  "key6": "2a9PSvn7myxixnPERWaKbzSbV6EeVrztw56z1Ex6GcRTnLF85sgHYtNuLVKpszyZrBUS69ARG925tEDdiMw9CBPV",
  "key7": "2zrHVaRTJQSNXYxHz6KZzjGpqCkvhCtVWiGys42qaBpS9iRvNBfk47qeAcJfYPKBi96rsQkVAGxUYQe5P253JEsa",
  "key8": "5pt1aTkdHxfJ4dhTxMgAPq7PQNNipMz9s43F8tykEX1knPYDK4cdK4LCWBsjxJY1b6zZvfQx8uwFxi9DMv7cTMho",
  "key9": "Yiwrddd66vQjuRPJkwBiLxg2axDG8FpiZPtPiHzR4uccNcucS4vik23jhrrn9KR8UfyZ3pqNDAsA7BRLGBiaShM",
  "key10": "5DrbLGUwVzz2rLFHCWhPyDpqapt7Qmv9c9NWptdDBn4EEfcwV3KXHaMYCU6UE5A1Zurw2SfiPsEX2cxKvWKkV7hz",
  "key11": "259fJhhs1cqoxYett4d3ATTPzm6CXdodsnHqpxZu4GnMd2Vo7LT2ZbN8Ri51NB6H2PjwQ1tLrgZZXTMt9Q7agBuV",
  "key12": "2nKeXEndDKftUgRivxvUQMkFZpEejRyVUCGQApnb7jBBf7HPsVpqXER6XyGRjbKkLYZxFwkWEZCpw2drWRJgFWXQ",
  "key13": "3wsbEyVNHr9on5p7pYE5nx7Wyr5LQ9VBH9wPnRs9ojHPTxTdAzQtMi3V3iKGYWmo2Q1oxiJWuQY3j2DhM4nMBpzy",
  "key14": "hPdFpJzboEcJZKWJTZhe5HaKq1JKnUfyJteFSrFFntnyD9sHJX1JT9syz9AgDQZMkCAwpehauSJSi5uFwdSaUJ1",
  "key15": "2p5EZveXRiUCeTodPhM66XT8UzLwZsSrNC7ukyu5PVaY6HTJoNrW6WkCyXNKDAeV4SxdYvWrXNCL316GbQGu7gRW",
  "key16": "39vcN8U5fK7eGxHq9GUeBFsBXrst8NYzbyYrYTFMbjbSDkTzQ7z2xFMLfSPz673mbYybtLtgSP3A7w9fmo1kubzu",
  "key17": "36y5joEwAEQBAKpTpSQs9s1arRTKcZms9M6N3p5qArRawQbmAsWck3wMGdbGKMn6ZMXKKRPfsLFaA4fx56yiVW9J",
  "key18": "4e8CaJ1WaV8cvYqqaCpjbBLSmdq7Msr2g642NfC1gEV8nP9K5q3sYquT4nKmJJmpJ4tZfedVxbtwN9vMXz9GR8JZ",
  "key19": "8WqAPV6TkXNre3fUdBzsJNpN2TYHPRzGpUXvnd4rAe9A8mTCfPtcKetHskuFynuAqo7aWjhmFZtf7JzEYp9ia17",
  "key20": "2z4WBYtAYgfvA6yKPiopM3s61nu4iTGLjR19S3WTo4BPhqcpu9KbaEkpohprtgVxrBqJWkqFsmQrZZH2pTY3DFyG",
  "key21": "3C5FQZrDiMru4qzAEFj46L32CSiEZBXPkvrW3ky7sxic5RSZSoehYoAVp6QuWxMBZxWQZ4ptYwhNfprjUDry1w3A",
  "key22": "5xcWJk6PhDwSVwR1SNhGxcNE5adcfHXXSS7QWEn7vkMsCxQus3DUNNvZ6gtCq9t7pPcUKUatAf8mriHA17JCkn2n",
  "key23": "2hLnVFeqGD9t7Y6Dsk2TLNsWKhHiYVaVkCbCz61GNhansfX2pZ9CdZ7Gq21xxJWSuNjSnQTi85mDcxCPoW4iNFtV",
  "key24": "5P7VkLQhFtbCRpYB2VaNeZ5vm2PKj8YLq6o3WMua1DMzMiwnpdddifdhxL7kQmHmbkjzbHtrFK6khdBLMeCpSRtR",
  "key25": "2edGjc77qdFXMBbxgC2yfsy2BCEcu9B8SUrU3ewf1DABZ7rqkur6Bo14HFTQB3h7G5nRhCz5vE6amg81A6GhFNto",
  "key26": "MzR2MUZGfVSHcgGiMBTxWXqjXXMqU8yjbh9mD4c97Nz8wJ43B2Qhohjhx1AYukmQKiYYvpTtdNr2NzmAmTkMtLx",
  "key27": "3f3udQr8QjrwN8WFgrrdMMZYMubsE1pzT8WVHx5BHTYGaRCBrNuFdXjGPaaA95MdPQjDTUKYbprkFAbY93Wv3sRA",
  "key28": "4Bo6yYdx1sn2watQe6CC2rwtQPAw8skqyQ9bWc9xXqHV6ULSrEMVtFAkD226wNP88HQ2Tf5i1nvtExRrVcoDBT5X",
  "key29": "pZj4sq3Y1YyUPq2ZyHAxhLR8YbsXKp9d3vtR4bViLcUuybeodUHxAJsxfY5yw3MEQk2qqmYgJJ12rPSXH8svEq1"
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
