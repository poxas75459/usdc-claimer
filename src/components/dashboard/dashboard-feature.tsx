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
    "56kVXPvtBhg3ZzGFqgMsXyBFwbZKm4kD5ath2EpJtZgbDTDJMSwgP7Zr4CZNdDNmyiYy1TQSv3SNdMNpYJBFMPhN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yTadM3zyaEAVfAR6suyChETT8vfQAQTnjfKzKRmeZevXFCvGuELxSwsiuWrK7FaSbyRvEZQcs9qrpdMt3FxQHok",
  "key1": "uwUD2pGxcRTCYngL7cXCmHysDJZrL5wbY8bKvaqzpUXxHvmZ6aPN7Sfby6Bu6kdMVsDvmXkW8znDwuhg8iBxz9X",
  "key2": "3asUsPBZswaKW4SwAhYbMbQhDjJjpTNHopmr2tsu94HpeqrbSnE775rgQvAu4fTwFGWJqLhVhNssDDEiZwnEjdJ3",
  "key3": "4U6wizqLsucLuuwMGqq5UiVcN2XYMi7VxP1WPVRxLCPdhans6ReN8p8YvLhZPRLUXDq3f4KaaxkDRg6PJFuPgg2V",
  "key4": "VAvo2dDu4WR6z1aw6TPHctxeFSjoxNdfiXTsyVfaJtLbVejDBURhWja26aGpn9jbvXTKK9acamXhtDnmm9WaYdf",
  "key5": "5NFgnAcoBvBhMzxLnSuWnV2N5iPGVfvG6jnoFwFHXYLdkUhzK8eF2BSzfmhc4h5G8krmYoeUpesXFVdTUkhGh2RZ",
  "key6": "5RTYaRnjx9gCAL6ZMidDMWF9EtwvrntgThdq5dimsS8RNJtcpFdx6QyG1nHmEUu7p6Hfw6ERik5gUJdA7sDoTWRw",
  "key7": "3rttpSQHcQNUrUdzxBcae3adbBNqpcsQjRDYXHbnEUa2AZLwZ8FeU5YzrFak3xGCftcwmpDqMxbTtQ1qBKee6dyt",
  "key8": "4Sg5xUUgMd1Tm1RCxPjtEnoDyAWRt5yLBLmkCR647rAAnGKMaJPeXcdmup73uXzCTbCroy2sGxU16JonwVA6BYof",
  "key9": "5WzCnsvFvDoxsDjA4wgsVAwkQDPKK6oLNgPRBtpTUq8Y8q9ZVhHK3LTxud2PnGo5UL2mwWrrmKiHn43ykXQXdqbs",
  "key10": "SJqeePUsQSiTBXsFDxogBAHxkh4fhBtVhh5AAkPH9JzCp6LHj9iSXZwAVCQX26Z9ZyZYrPMZeBsto1S9kGWzEx7",
  "key11": "3Ne8HSvXZKp7sD3cf3esW3mXwiqZQ46DsxqE9PjVhELJRN7YqCD8L6APCRmf52CJkZ8Cso2acsZK2JUBjYJBg4jJ",
  "key12": "4ZAFR9aQyR8r9QzR2WmAayVYJr48khEHPBHK6zRs3MqPNq3qdybfKPTX9V8f5e7u1R9q5h5cNZRi4YhPZRze7rAj",
  "key13": "2qjeFi9pV174iTss6ivZ6Q8uQQXkNFtDMSwBE2s1itQV5akBYWoXofPAp8BibV6wqfmmz5Sj2hNiQLnG9qbU4zN4",
  "key14": "5DrP9mcRH9giYkLcki4KtFZuw76eBepc7XsWkUHwiKeSe6NjWLiRBjsyUzE7pZfjsFwq69MEmAEVcxsvUbTgnQhb",
  "key15": "TQPPFNuWgiYmx8QjfXsF15dZ8eRH7J7vV43EptvRNrz3vEmTPxgW3yzUQmNmMqpgX9RuzGPqXu3f12FKo54gJBK",
  "key16": "4ubancCwuyvY3Rqv3gGjp5oGZzVaB1DhrMZL9nvzsT8ftUTfTWGig4vJca87WUFFPfrQin9p7X1RkH41aUkwSZZZ",
  "key17": "5riaJ4Fg5v7pGemLpevLkCkUJUwZD7suSUYPHDcRfVbw7opddsqAj9RodVXGk2z4XGtCmH5svY6kj4ipkyTea4We",
  "key18": "32a8hYCWoy5T1wZNdYw7nUUiScvEgdXVZaFThfCrqZpnjZrdmDb9yM957iRLEsUbpDYEjFwvoqQt6yNGDBn1S5qs",
  "key19": "EXqC1KrEiRfM1uYbpZQjvd7ZupS6XNAmc8i6Bm9KMrLHUTuwduX7ithuF59ZaRaELbaF5WgkynLjxiiRCB1cRyh",
  "key20": "64Pw41o5zvbo1zzCFdc3PuktdRKLV2UvyzyD2zF7ByE7vAZQryGXb3Y45PWkoLcs8RMYWtNRvcWe45Q76mwUDv2e",
  "key21": "51ZdF5WcseeUPzNh7wgUKsK6iSEVCEuKH6Suc1jSE4iyxetsvEFU494JxK4BueDCDFeLwYbp1PRR4kVBtSCSxwwz",
  "key22": "5gapMBGZWXZVnR1SpEUiKW3HJ52MistEp9RmUHK2XeWMpZAimtRg1XBLDZzTESZrtxtXVmzvvPFW5Ai9qWG7a2o7",
  "key23": "2P7het7eR9DWgqzHHSqCtNhGp8Vxb6bMoJRZQR1tZfM3yTfZY2jk7rencntkjyuW5ByyPPnBf1CQJXMDnpmtvwQ3",
  "key24": "3c3rd2QXU7qTUdj9W7GnamBceRNxqZkZyyPwqsueV1PA9JZ5oDDPPeAtWykHjmoirHXaht7tfAaNTpwomMkwLk68",
  "key25": "4XbubqMwHFC3XrcB7tGNcjUuMDTfPPEhZjfHKnkviqR7rVL3Brcjnn8zhBg4t1C8bfMrkfkacDzVfTFXtqShcFS5",
  "key26": "4XxAyhZqurAidnpPqHsKToGcfyqJTMQvgU8Xhy4GvLUkCH21DYTf7VWFrjFkBigcqPFfBDaA72Y5gFxaSfYi5Jqo",
  "key27": "5AYeYFtNzGwvPhS8aS2aNFVSUAusMYn8qN4Z3XSLEb9svyN1fKs3xhEt11P4W648XxtzyL3q5Ue2xX45N9ys4joi",
  "key28": "46AdkbLrQ4wgM5oUC3SrC8ZLQ4jcrTZ6zbSe29kuGMxwFzhcbUAni6wpaqYQrvQ2TyHrM6tnBsLQfz81ig4qCUFA",
  "key29": "5GJETq1fT5xADWJ2wmGXHuLFphpCCqQc4RcjE1XLRAD29wR2PW2J8BxLcnWEtBaXX2GL4Br1sxh9MSTr7ygLM74R",
  "key30": "5JA98RRuZSaHQAyf4bs4u5soniBLG1b7JxeUGV1utZyKm4yFnqhoRnm3feCsVxUKNUHbgkP7aAuqkUHbZgSgiCmC",
  "key31": "2SFBCRr6BhU4faUSb3HC1kiiVvXR2ManwKGELjqZxMaP8F7AUrsUv6ePEVHZucEXAEEV3B7Z9pQCyvC1ykjPURHu"
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
