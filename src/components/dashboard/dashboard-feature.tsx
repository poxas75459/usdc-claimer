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
    "5fnjhizJTSNeZzxArhc2jGbXqcaJiLWuSrzd5ax4SmcGApFxePPren7Xqx1GKwhqgQ4mkoqr2vZXw9gRrvBH5yx9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nuf5JoAC2481xv88LJn3x94Wn53qQs7wwJs4UNMW6qdSPkFtNDZiRWNcVR8R9PwEsXg37qqGTfW4YDY7Fs1TaJg",
  "key1": "2TATQJ46yDhpp6iQd7mjiZge7nxL9JP5Ynmp5ewtSYyQUCn3GCGutcoUh8yoYLYTL2oYtY9yxaDHvZi4PcCLYwxS",
  "key2": "2kJS5MssCw41P62TQxa7uPuFnMWbUsuRXtyjLTrDkQfJFHRrqio7pqRB5Z64czVxCBv472w774UZPyTKDWiEMa6b",
  "key3": "3vrWMiAkbdYmkrPEF6wpSQH1Y4nLG91UUpxSnWs64PPDV7D6KxbZtVUXvfphnsSMPfdP6cysYpdDqLadMQhjUPeG",
  "key4": "2UHRadHByBVzFd8ULUq3P6jLuf3KKkaSULdqHtqgQyRbRyitwQcBgQnfyPpSYWw9gZWyjS1Ucx4pFtPTbgwYpruA",
  "key5": "4869TTKuCZ2ZZ2tBjukNdeJhHBQMFTpYjLBfSRMyFGCP9MWwnpMg61dSSJqW7iyX64NFeWhJaniNeZaTN4nqkKym",
  "key6": "2BfhHL5eBGrkFQNL71moxgpj78iJzSQR4jY3m7n8iveLYEvcFvhEAUrjNbonwrjU5knE5SYXZdhrNSxEKk9bwwUk",
  "key7": "2DXo2bVTcBAQVcjvaB7XWvJL8rhzL9ZaVAurN9fyJiJ8qrzS7phDqtJPSmzteoE317Hv1kuFKXEMyUEqQjo5jFxS",
  "key8": "qMsnicvENqYLgtsfxUU46WPhQtmkJDYQA7Fj2vUZF1e8HtU73RZt6XghM4mvB3PhUftXQWhGTKf9GL4jC9cGNjb",
  "key9": "3EssTPRQvhCb6DevP3ZrdBw6QuhRCEz3sXzB56uDKvPK6253XaWJnf4WJoTMacfKGxqrresohGYaq24CZpLB5U8k",
  "key10": "5ENrchtGRcj2TozWcAfx1n4GKG63ogmy4P58xkEGnezRaFidcQurYbtKRpMA9Lzcorwn49XZw3oVeCtWq7KktjWA",
  "key11": "4LcZQb53UY3dbQ4zWFsAzuBMVsKsXTAMQd5MpUbag39gmCe1CfM3Pn4buk4qyEFq4SVmF3fcUbjXjRNAcBBZipiZ",
  "key12": "5a17jFVSycNVEfsFjnpxNFR69QtkbRVuMys6yg3TmJf4XMMKZktcMexQcHSUnVvPcpSUCDoVGJups5fja19zmEgM",
  "key13": "5nrCDxcuMvb5Wq2uHRdxSzRDVzgBfwRZZC4b2bL2Tp2jV1aZdTqfT34spNkEeFfdoKKs71Y64uTPuUar2Z73NzBe",
  "key14": "2G7EBjsr1ppWP1pm2LrhfM7AfarzkNMTwF46rgf4LiaJBxCYPARVXuwDpu9M9MgG2KTCm5V9M5ds7Yq3QSk1hYTv",
  "key15": "3WewCEx2g4UsgeFyVKuY2RVYsaysJr8vGxVRXoRsF8CPHwK3qYnJWscqmwiiQokbuu9un2w8AtM1E5V5MYdBeoVc",
  "key16": "2WBSG91nwX5RsupxygUSDirJvx4dePfPGqbzUg4WMHhKaQWA8iBUdauCz77oH8NfzZFtEmFmpL1wDunKNzAkYnJN",
  "key17": "53LN2nSJRb5uSRpcPutDewqkyDd994SrUmHN4dtYjfCBoWz8mGFmYmB28xGvQtdWHRFBQxpvkbmC3S4AgV1K9i2M",
  "key18": "4nQzwMmS1PoNaDGrGVuZeNZFgC6bARUvNTGegDp5t3pqrJLchPxhzmGNznjbgDT8ps1CYhBXYtmb9fXedSNwEYBw",
  "key19": "5TfhafgQ9fK9LbfE3rVRvM7ZtWFEu5B5L5Rok7WQqRWfxe876BfUhDR97fKg3c3G79ZtrMYVDDrrMxH4QiUmGmip",
  "key20": "5W6gJWzruTvpkPFAPsWzUqQ3frjETZuay9ipiuCGpVbV8uYuWgQk5TxDY9MSBWmK7LiG9HGBubTF4J8HDCvLeAwk",
  "key21": "3uA7aWvxEEzH61SAVATdVyyLMzSNbGVEM6j7BLDPPAAosXVK7fc9oxTVabub8JnBg7N9M6imrBRmR2G8vnVv2JHF",
  "key22": "2Lics364ewwNEgxVJLeBZKXJFZPnwmauGnUbRBunmKSTcDc1xDq5JiEjBNenypJGyoCG34j8oPUm1SB9VTnAgRxh",
  "key23": "3AQJpCF6rg73VfVXxexoKzrwCYewfrh6Q1VrkCJkmZtusecZXasZ1Xo1ft9qqMbNHycDV2omemXTbiTeDzkwRX6r",
  "key24": "5thpe19N1hsdcNxzogBDti3NSUvZdAQxWh8ZuQvS6bq6vvHdfCsJAhJeyrdwsSCgobqbfqvN8J9meGDPPir7ri6B",
  "key25": "2ZwKvuB4gNPxG7YYM98ixrHU9dXVt5J3jdY1XBNeqNRcJhu5f9w24zdL8B4RdwLuhFr1eitWXGPo1TT9BxGULiMk",
  "key26": "5u2WrFGwDKnG7DJ66L7MyDDEcZqKTcb1eXqv8anRwrx5MyffPJKR7wFri5wyP3SoJVKjXat2qNyrarLT3a2jVmUT",
  "key27": "4esv5yV8dc3ETgLXSLvupiaatJGteBoMg4rRgBYToKgq1gqgvwV6yiSdtbFWz4vcA5SiCLoP3QxdpwqrnGwZvwJv",
  "key28": "2f48wQv7eSZuM3ssRVNZEEqgwyN4pifvpZUAPYCVcDVVMgdSEkKzdASTP8WwuCf9EcxqMv8yQSGeET6NVFXuB2ua",
  "key29": "3zk3crMRWbgrorZnhUiE7bK8maNgyrUTDkuSYb8RfwepfANNrapihjMEJ3F8k8M21ukUBKuamqUQw7NpCqKR1TKc",
  "key30": "3JRay3rc8gEbz8okMHPdgq9GEQLzuucX1ojxV7SxaNbg6SPTcr5q1N15WEvMuTesZR4MahtF8RXekveDi3gg842A",
  "key31": "5sqLgzbx9Zta91pWbSuVherLNdwNXwJovYg7JNXKSzqasvwx8R4kAL471cK4jkLBfeJNszw5x5QA7qKxR8A7szaW",
  "key32": "2a7yzFbicmVMXtXGBEZY4QDF3LdVSQyxzJvzoRs765PfbydThUjPZ7zp2NtBrCeQYsWL4ko7Nhpnf3MwdxaGJd7t",
  "key33": "2NN75RjQN4dSESNcqmvr9bA4Vm2wbTVuByDEQ3kFk8ZcgPBgWKRz76UkvWR9JEfzgDigHLu46ZJqYV8jTq3jkTSS",
  "key34": "43Y2eoA83yaPqojgJysvidEfVFuFWUpHwD95Ef84A1ofubBusYDuxBmvwCNurfk1qFfQwjkbBu292kRzCzqd5Jo",
  "key35": "3hb1c4twPYjMMAxftSZY4av4QnySDfKmQWZoq2vvGvCq1mrLLuqZHRtksgkiBPsuPTSd3kqa4k4YjwpchS5fNvic",
  "key36": "657tPKLjUwxdZ9uFwPLdzX8v5ELfhdMN5iSQRjTP34e7UMYLGhH2mZaHZN7Ps9tuSjyMKjYNmpoptp28vwJbxVgV",
  "key37": "31QXzHPRSWCEirZBCTucBf7jSsCARApiw5qeYAXNENxiT9f79RHsUh8k1fPWaPBDaKDF3w9TN1GYhpXwbKf6RNrC",
  "key38": "3kdLYwXmhzfFYc5L34yUN36vsKzjWA5Nu2x6rfKG9B4mAYWUAMvoRBQRx9TQ2MNQZeyxkGjdYU2VBKG12dAz4wjy",
  "key39": "5dVjeu85wuiY14qSdd3aGsHtDSkbpNJCrsFzENJchu2vu4Exmz5rKzUJ8fL2sHbAehx2QxtEtBXLVuJKgjYHYzbx",
  "key40": "3Zt3nM651gEZ3QGJoq6YntDiTN8GgFxYEo24c41uLnDUMQAG39vm79HaQ28mmdVG1wfH8JeMXSmkzFEz9EsbuTjY",
  "key41": "YyAtqFrfnVjzYRM7nbwBFpdSqNvLcqLy8PY1SG7Yukekrugfeo2Q5tG8CPES1dpbrWE9cQDKBYmYHBxFqFzrNKz"
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
