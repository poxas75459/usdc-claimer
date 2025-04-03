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
    "3f22m3Cdy8BpPRdSW1qwykvWKi73sPRrSEsDWZtTrwirE4cpVuqGMdqfcNHhdobjEM1jMsA93pmUm2c3T9FXZPpy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37p5511zRabVgJ1XAkZy85EX5jFgL4BAvhkwT3t8wMzi9ah5tYdUdif1zxyuymGfxnkanpfhhjfS9EKwpCgDpyHm",
  "key1": "63E2wzeSgFiCPocvtDHSfwKkNkbJmUEkmZZgtpqZ64Ejogv2hk2BE7iX5teUZTRf2ajUfVEuTH1di5mzHGbcruw7",
  "key2": "4Smxka8ca636QvhsGevaLYU8esnR1EqBzqF3az1oemNU6CyD8bu5ZH4LVS1oC9oJRzkMVzagQTkdz6eiYdvQhqnf",
  "key3": "3mXuHEwcQz5CD6gVWwNvZkowMvcvrEeNPxbiqnboUgkbXirCbxV5oiiM3WJzLwYtffnzWUo4ctnaTWUq9aWj6Bk4",
  "key4": "5UF2V5sEPP7o73Sv8KYTdUW6Dczed45gR2TJt4Fx781Ab7AXWd9aRxreyVuvvRbrzfnzgdxnuLmUWcT9W7fZryL4",
  "key5": "5p9Thbe4rEa6nsSV548HfbvxCSSFsmYN65TGUHuMtnJzYKeFePEATDAyneQnrdjRrzXvGZ79HQQGSrUHg2WkNkfv",
  "key6": "2v9s85D6vLQ7EMYcwr55mb8cebrMonbZWYD5nJCnwhe7y9k6bnCGU8jAkYAHKc3ZKRe4wbx8sFnigkWm9SW7PYHL",
  "key7": "5NxdER2dVsbS2WBsb9d7hXMztfwY8LJpvftQPDoN5vFQCVhmuJTNUz7swuXopnuEgvAB8JunkrX2aKqnqtUebtRX",
  "key8": "2iMjTp6TXEdi9AjP3QhY7mrxgSabiiSzp3NhusbUP4zr4HGJcRKV2Fwi89GwQik2scQjHaXaj11xxRWNJirLeyXS",
  "key9": "2x7rY8LQzJEcXZj58KuS6NEreCQZZ6PRXzAzMqthwRF4zPDKC3vhawQTacqAsHJumXjrbGcUmoag6YHTEQsV7WPf",
  "key10": "4ZyoAe1TvqyEST4ywdcHDsaBnA9G4DMHYXwgFwitoWuWusK1citBKVVb3o9bC3LJC2dGHverauZQEbbtBdxVPveb",
  "key11": "2zJZiZhme4GQcEFmvLN8X8rmLUyTV3S4ApJaLhpoUYsEWEHWL6aHuB8dqwHE7D64ZHzpuhkLR7Ra9Svx8RuUE6aV",
  "key12": "2WKCh9ZbrvaZWeJ96hssQzgCVuK9yuYzAZiWHCd19eBhVqoWgDzDeUbHFYVXeU3WJnQ9o1CnDgDCGhKxvsaa8fDy",
  "key13": "4AsTVeDyfX3cNM94CmK3NBh6WsU59Zqr1Zjn876SD82FdNHbeTnsAogu5GKaBhB63sKv3UjNTafUmQxQFy9BonwG",
  "key14": "cxz5JtniTuMTMB38E3nMtp9s8RAqhHyJ5iF6AKmXF2tjMtZft9V1CSGdJ7ipiMfbT1teRCEnbyi58i8TF4ofdDW",
  "key15": "3RTSAFjRB8e9QW6R26XPmsXthFG7gUn3kcAJ9nt1wnJ9W17VpqCp233Dvjfuuc3m7Vzx3UsdUY4RV9zUR61sMaAR",
  "key16": "5fdFwNE9u9YY7PJqpKBEVWcDynBeRvvmDUArqtmszazdvDMzTcRSiHDengnCv9S4pJf7akwVGHFmBqZWDUTDYdPC",
  "key17": "uYPNVeDK1Nq1JJnPAj2KqfK5ZPaYerADasqfHni8N5PwQc8eQoNCMQYrTMn9Z64WHq5q77E79xj74eqdNTAB7sG",
  "key18": "2ByYM3zym61sUzz7bTZJs6doUYeSuyTfzhpYZathGnqnGr9Wvjr4CxP9HrdjnZMcmXLDzBW3F2BvfpCkrz32QiKq",
  "key19": "4acktVD1EzKwRGeCo7xabFU9Y1DdCjnTwvYjHREHXdWtdu3xSY49AR7vQSVv38kyncBjcXqyBENbKyrkr5ReLSHP",
  "key20": "2Qsy82NAkW8SDXS5NJyuvdrEKukzUpLpvRD9PELVzWYzrhtPVAvtuauZVS5bL3cAAuyxzpC5YFcHFansB4K1nGZm",
  "key21": "5mvc2JLunnmZMCvqhAS4onGYPXrJKcXRLsov2jWcyExBoXfHAtChRkw43C7ZHf87fxKce6Gxd3U4BErQi4Hf6uuj",
  "key22": "4moNY3xUN2UoUoWDpqm5BtNj8riG3XSTueDmHoe4FYqVeChz7kMqmmy6UQ9yJDPEi612U3p3RcJQQGmkPBbc7Le7",
  "key23": "3eaVBw8kGBFc54QjHhtP7fG3UY62QUYbTVSkaimUuTvLTJcPF9FKTsWRKv28ZrC8ko73i9EVs9qph3xPFTQoyPXt",
  "key24": "26af1uMoucdVHD2wm8vv1kfHj5ZtPNqFN7RXdXf2sCgLStKe9umXpxXDEaVpw2XNnjcjq95t2gE71brvXcaUFZmp",
  "key25": "5bRrHwkis48tN4KE567CAESapUcZHQEg6Ep6nfmX28uMzujsTYmBosVcLkscNWA6KfJSXryALXD4LQiwAvUAm4xq",
  "key26": "2y9DzypFRRpdATczPhi1jbLSnnLEcjcqaoBUtrt7N9c52sYdm5xLd4tFVtptr7uPUYvuKad8cxrdDzeCgGJ4Hv4B",
  "key27": "9EVyC2XJgQpoxrULq5nwQve8wnEhc9MM8LbQdgg1st7SnXaTjs5sDYgHxETo9KbL8FsAKBMdPe3asXwavoTrAKR",
  "key28": "MUAc7rbh6KwPApPi16e97NWkTR5U5ZtenBY21MRGLC2q3WwGf9hqQZXTdweHjRXgXTstVxYh8o2vGPvezdFJhof",
  "key29": "2Y3jd8moNGBJXJ74whr7eaJnKV55fqypZmTL2mdT4U5Z3q6PBGvkRAvc4aJyeZUWYyfrnB4MuR2C12kALsV6q8FZ",
  "key30": "udpgpiTMkgmxzZFX94KKz5E8sDkFMNMmmu3R4zQHN1mSFXnxj6DZjc47EYmbKay6Kj3p9fTbnn4nqhhbBx6NbE9",
  "key31": "2prdsazqpoqrn9TQeXDQchQxte7KtQ9dp4VPe9deawD4nj4W5NUgP6JgE2N8yCHsJjUXtarUah2BMQKcoP8mp8e3",
  "key32": "387PhFjjYMGg7gQ2bammR5EVPjqpMQNhTKRS8QL5CT9cV83E4Vz97RpKKPjppmpowSPuzWRKdCcQPLRsUUTxpvQp",
  "key33": "4STj7AJrjhL5aWs1p2QPcPzE9ycHPLSbKFHjVYVSUs9kbwCVAFuRG3NF5cgfV3J1PXEkHCDXCycRPWENTLE5KD1c",
  "key34": "3o6Z8t38ufXepDw5TNhk6yzrNnJmghBSDbRuXd3hdyjdQP1bUd3AYoaJoa8UgGCuysCX295QvgxMe8PmBG9pJXb9",
  "key35": "3Gs2MxYzX1QkxopqFJZ9ViLXLUSfWfs7W3E89gDYNzSjHbbLJfE4RA3VaGaXT2YTviDsDwVSKMhhNoJn5QYsrkfc",
  "key36": "51FwszpetTHWSWUNsuhFrBfo2EtD4aX3gtnLXv7x58SohjVBWRRBv1jdfEeZH5B8SCSaVnEEJ8j4S5MfxXeLZkki",
  "key37": "8ixWCyeZ5QuWBoyytzVrhF4KaEwu5wQiChFcgii9n7XoFR6qinz1qo3b7pboWw2DBZvbB5hv41njVDgahJDVJxt",
  "key38": "3jdm6X1izsLjv3rgh1boVCiaT8dbXoCBYSqp9qbCoYSgt9quKkFYQs3HKTvsf9hBhAj5DqaLanJ83sGHPUJopYU9",
  "key39": "3QE9sj6M5KwnuZ69NXkXzGbqCWGAEh18RpDdBKW7DyDFBbfwjgz6Q8GsC628954pcKim38shXGu4K4eHXbHuCsiu",
  "key40": "3JLsB7GCt9q5yWfn5wjhDbmjWDDAFYWDjLUKpyT9NTqrMA3HyHYgZF5tzoNrXpvim2NgjgWGodD9kP2a9mR1WaZf",
  "key41": "3yYmEExufAxy1VPEcYvDuDquCGFSBo1kicoTvjES27aEQjrfv83TXkt7kTwSg8mvuV5wpFqEzcNeTMQRiNoNrEZa",
  "key42": "2JPXAEKEGGRbgmKSNaPB7vPnDMetXwspBxifPKv3Fenb9DJJiSPDVzCjgpC9aNPDxEHX6jEukqna158tBhwDEnQB",
  "key43": "5HymzDQHch5xzEqcarX5bHGSsWKkP6iLJaAGFJyjNnrqQz9dfq5kDQT9JmedQBTNxRwtxJhrntsSDd5ThxQXpPhA"
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
