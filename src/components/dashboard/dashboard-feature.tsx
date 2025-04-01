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
    "3MxkhVR7z1qsadG2naknaLS2HiefZwYAEc1ZtNvUqEX7E1NJC1CdqWwcMW9FThEspp9zypb62ywvFg8izPcCgMnn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QweRNPBRr3N7NevT6NEHn3ENFoKkoo2SJuVWd3niYxCHyU3SdMaXAEiK9NQtRY7ajLJMqoomZe2aWGj1mb4j74A",
  "key1": "5YYT1bVCFSw7jzEMBiskUVWqfeiV9TxVDiSoWCWrwVmpJE3tXmXhaaDgKzJcL1Mjj4S5qTLN8U5Ldj9NxGM3n3Rz",
  "key2": "5Zw6krJ8fKPTo92Uy8cEVSaVddMUHHs1wK9ZLZFq5ZLENxRZULHti5TMneu1xaoHJpAHTKBwb6MWjBuXzHocfjj4",
  "key3": "XLqv88NQcZkdFAWvziGWy753sGwkuCNNih9Cakum65QsH6wRbV9FynHJAkuAjsCxkjStrhKgyTR2PfPbRMWxWGS",
  "key4": "Y8gBQbcP65GsjJ6ySssMnqYZe3ypRWESx1FY6bsCAxHU5z6FJHD44hq8jYJNth8y1xBEtLf5h2vUi9H2uj36GiF",
  "key5": "2SXwVxpbFGMNeYhiJJUbAC1A6zkDRufQ4jwBwcsmGzWZjhDEUjmL8fme3qnpQvgbX57hQUfaBzbBf8Lfm1zzEPiZ",
  "key6": "2vC5dPJUMsogcGMxP68264vb9z31LQkTBG1HjSfbFGRVV7ofGbTRTNfdarh13gcW97vGsskPKJiiUj9zzp7RfvSc",
  "key7": "2yk8KCnkVSzE6C9k8mr4GQmwzXweuwD3BWvTv5n9hbEpiX6w5ujyw2iKtA4kUoUxC5naSzABdjudxXAi1hFDtmmY",
  "key8": "3xDfNSEViExBo5YWePXriuWEbu3iRSRuxQzCPUJUiymWu6ANAQxGj2nEd8xnNFtwyWka6EvLxLQrVMLNG5D5SeNm",
  "key9": "x3RPKyiKmXLNmfB9rcvDBAFQjz3TXS2M8hqLQuxwaP27Jj5P9Rf6VMsdFEKiRcxvdbriGzTCEw91LowHRcdYrJo",
  "key10": "4pWFCbsFZ8CpA9kArnHQSKMguH9MfZ7EGukTNwSFG5WDBqmKfMGvXd9UJ6Hr1WT3wdGwFNvvtz9qRisBrZsEzhCB",
  "key11": "eRnrDVG9TCuPGYn1LRLtuHpGuz9tC4kogQdDhJYAiVhPSPnAtadVEyoF9WB6FXjhB3wGvFekC441XjKSsR3Pdh3",
  "key12": "5GgMFSbxGJB2JTsoXJAdtF9WTUBU2st9etagMafiDCRVhzadsWrDX9T8U3wpZctsc9x8ZPVgog6jPGgAepuVBXLv",
  "key13": "5FMgsPG23nMCgsp9JiLHpqjJ1sy9BT5eM6KN6kg8TzN3s8FEvrU7Ku1hgbh1ddnyEcyn6f3UAeHC4KQgjnnPTf1f",
  "key14": "5G3p9nZbYebcfuCrmnAchzbjtfwhSNZGRJkc25eT9GAkebQm1Hja98W2myGKPeUu86MyHnYHrccUudhqS6fi4qgb",
  "key15": "5GGDqJhADSoqoAjNpF59zqsqfgkF6BjzEqRrH8bLpVNBu5p8gQKYSabStut3oyJrwWAi8ip5AyPUX9RYS9E8mVKc",
  "key16": "4KRsM36JarvpMuHFb2CQB4A3n2oH4LK9WQMukrqGVUYkKss8iNKdEQhCW57foX4Ucm5oTZYh9Jm9jdqPmUMpxHwW",
  "key17": "4HT693FDhEiqM3Ntw38HZd8h7KNzNSRvX2DTg5zHy3dm2ntAXu7zAoBbnJsVEe1xDBqxi5HkeMSaEuwa4ZddhszB",
  "key18": "F3Ywy8v79rVAoYppXyJoKDYXBu1VMG9duAwQ3drKdWZdhZgzfX4UpMCTVcCL2cAbcp62L5LT36E2qaanp8qL1yJ",
  "key19": "4C9xZW3T5Bg98Kq4RXSmmx52ZaZXynfparW5qSwHaZEJQub5KgQx2rLRaW4YpUieDp8m1ipb6FSeSEhxPrarrWWv",
  "key20": "3hW6TBNwoT8Yyq1rzS1oa7ZqKXMJZTaLRvpJDPX8BdKGdRDPkga2xTDW1CnKKtQCs4FGGCLSXuJL2kyYpBrGCw5Z",
  "key21": "415PWRGGiws5BnS7JVtV1BzLkefwWTzjnwrR4ngraPG8kPfubF9CgPS83mXWGYVcLM7YzauTyCuWCN6w4GRFgJ5p",
  "key22": "2JC8Dou17w5rozoqnx9FigCz2PuLGPYYTvFn5tft6WqyXuHzrbxx5Rxx9PY56Y4qqQSQV4ADgwHPvXawvhmK6Kf",
  "key23": "3RndYAoKfzJ5C8Ne1ct1manGT6TLNdkP1ycqfih6NFd8NVRVen3e3trVEqGWiZpP6YtKd1qFTTt5skB6QrqG4MpZ",
  "key24": "4UyG5wXceTtiH1PHdYBfRDN4gt6iLToJCiAW29BWzusr16yNTFQRDH3EWmrVj8zsbJnyaawZMJaDpDxwGotqHwRD",
  "key25": "5BmBq8mdRh7e9hBM5NsmxsgX64pmoNeU4hs5Px1Xg8EgE3TQmjtpTz6VpGM1pMLEw6yy9mtqsnrfX247jR1fFFa1",
  "key26": "3ZbZZJEaxF6AYM8Vrd9YDVGcEPGLSRQ6odMRvr6XUD6M4or2pAjFDzMLjmdvjbmtfEAah2E8tj9mPQYs2bbfXUVH",
  "key27": "33dKh4MXH4GTTPW684XLXUvdyxAcJAQcr6CTfYY2BH3PKbKDn27FU7Far1f7Am6QBAUU7d5mtonfdpdqjvALLk7E",
  "key28": "4BrSDQ3MtJwVZpqgsTxaF9BdQMHyjP5UAx8TDZZd6YvdokDNRkkhkhU4BZXdTMBwhX26bELFoaWdLLKFJETaRAQX",
  "key29": "5HwqBCmp8dKVnHDkoDP7mMjpqkESB9sHjQrV37EkApJrqckfrYnqU1b9mydi1VXh6NAMvXv8Ga28c27eZKjKf8gF",
  "key30": "2yDZ5U4ZUXzMDF9oY9xAY4L7NPKZ27oZUFb7NAKV1aMy3g4zjHnSy5y1dFYdwvFYHVCCocjm45vjpePWGvrcLFex",
  "key31": "cqbvc95T219pVyB94oiUncsgG1yZgL64Edqt16bKZhHdozyGXy6umt1P4gN9zLvpPDegSdrzsH4MVwGDowHyGwd",
  "key32": "WY529D5oqjJeqR62zJyuRBH6PpFbRAY5x8yV8fWpKxRWzSaywxVRnX5GAqxvoTmEZSe9zkTt4jA1vj4BKL9RjmR",
  "key33": "2EPi6XybPk2YiioUWfVUSm71Dtp8ifusWbza3eB5hzjm4VN3ZwBHRhouFFUgxaAxK2gau4rtWhdYNLPML1VjniFn",
  "key34": "42rj6RNCgBnphcjN9jef2JzPnTduCgWdduHYXF2f694LjCti1QqUWbnqv9QVsc7Qc8gsfLidSihgL1kwhuXfeQio",
  "key35": "62nJsM2ov4gMYWk3KpURrZRUMcnjCKuF13yexDikGrtv3FQaZoW2s3RVWkYnmE7VqhNHDMDWeoggxMyNyW8GQRqH",
  "key36": "2r67Ff1qjvXwynXMZr6eifAebAaJ5jcPKy4iXeDmahBD2qAnr79pPYSRAsFL3xChv9FgVJTeFAr5tGrLFCJnQ42v",
  "key37": "3F5FvhTtGyvMPEYcu31b9GDiNGJvjikNg4Gfps1fsHDgawmLkxiqeFkVcX7VuZQqrSLof1SWdNHf18JZHVTor9fY",
  "key38": "4Loqpy9Kxfe57nRFVCxbP9PuJLcrbvtbPhQPGpfULzuToTBzJJeDzk46byWmkfbF1NSpxBQrAEkKy4Ee9HGF2ve",
  "key39": "5Hkgnor4WqMVBH5m9KR6aDaber4yuaNn7FxhCGeNE6ePXsfKLe8P7dC34aXwdYv38XZyKzPd3J6y3bQoeVzCSbrc",
  "key40": "gkmv4NEvk2WmJG7TGVz4DmRfA8odwRwZk3PBMhFJe7XjwxPDDZ71kwktaWUYaNQFwcttuK56ZGbBhR2uKqmwXH6"
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
