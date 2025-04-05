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
    "4KNEGtCSSMi67qMnR4wXrgttkDUcCWjAeDpubv5n1USM5omLv4wFeHbPhhR9AJGN4UxVM3efqWx3qmefwbNTWfQ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NRzFffdg75kLSRUyyRA4ap3L44KHkshJnhBsby3CYfp3fh7UPQbTtCjVHv9XFK9prnWzS2A7tUPLM7SakkbiiB7",
  "key1": "2HRLjqMVU8VHgFoDSoowNzVxXqs8qeCrGgUoT5iinmFkVAZFhHtE1bAijWkb8xcSvoEkg2agpezwFQuAKoHUV5Di",
  "key2": "yEGBqZFDJDVn5CdL8p2y999ub7scLEWtjPVQqLsfvPpjV5D1nGD8RbiMRaHb7PCqLP8UopKu5YzsZuqqYkg2MCC",
  "key3": "5XruQ5u6VuP42skiAV3WPUS2nmhSFj9ZsBE8spwXLh8MxCN7c5StUd7WpTzvb99xcDaJEnhjgkGdpdnH4jDXfz6A",
  "key4": "wvhboBCukCwLDsNA8x9bDy6yxXfZ4st121uZJmer95NFJcZEjPaSGboBoFzgJFyTExfhdW7L9tqTuUPZWmgGuaC",
  "key5": "T2cMacj6SnpG1HuPCjBgjwMhrsgASp6AUnWtqtaS8XY2R6sJutsqj9g36iVw2wr4JtpF1MxCipAdPn5ecRRQa3H",
  "key6": "2Kai7VejUqP99DFcnQptb37R2Rrhpab9dFY2XqYPY6cnGmbXmdwHMUw59DLGTzBi7gJhk6oZ9u2jDZs7Wi7ePmNC",
  "key7": "49BVCh3dbcFCsL5QTMqMmFG8V9jjMvvjPK1LrB4QLn39w4N8V4eWXwpAyQNFquEG5Gf3iYwtEWFi2MkhA88zPNro",
  "key8": "3k2XaqCtyxCgAPZaQEmZJgv827DfujGdC5SXQ5kyDSGqjewTZwq5fhLsLSk6e3GCy7SB2rNaUhQ375cC5nS6sAAB",
  "key9": "2VF9CHXze2LQPPnz2gjKRjRt8nHPPWWGSA8sdtyCzJFD2v5xNy9634WkiMc4dvtcvqmTiVx2tn8byaD3PPMqekZD",
  "key10": "3pqDG1byBXn21A2ZekyBJafvqi8DtippKJE9Vy8xtNGsGoDdazq1J1vKczsryQ9RMTyXKixfW2jTbAHXQq2UKsnU",
  "key11": "3L6NMp8Bu53aATRsgh7PSY3En1PbMwMeBGHV3HSnx6RnW5GxTwHX41sC2uBAseHdTi6e2Tr2o12Q1sCvHLwEgMoo",
  "key12": "2JwayXepsCtBtBrsS8j4XxE8XWqxi1mrN7hiVAVbLsiTkz4WfGaQSvAeoH56Aggt9pshxCgtPXEvPsmshLvyFzkK",
  "key13": "j1V66zXe7jUBopGk7frcpeeF48QPVB9wAYpE482Udkyh5BDSSWxT6dc7N8FmxAHBHu67FNyroQPjdyhWytjZA5m",
  "key14": "5feiUvMXqLQ9kDUyaguLh6T3z7iGGWRyVBX1NYutphe3fxqBBDqBhLDJzUd8PrQ4WWCm9PgXRufogHD67k5eNHEN",
  "key15": "4Ua8HEhk99VUgmYy5jDtTaZTDPyNK2ukpmzKR1MRkgY96t8jm2z4SfEB7RikynkoAQyPnReugXXxHpnNx6a8n4mY",
  "key16": "5zWqEVQ5Ac1jGfK1JuvwijRuXTasi5b78uieQVmajQ4GfmPygztFTBoZZrTt25C6PZyeQ8Fza4vU8B7MnjQvRQCv",
  "key17": "4wFiR4pyU5hd3S8zAh9oHWBoHHY4W4VYPkQDSty2KHA7gwbpB94erW7Ddqxg91Krkp3YnjjecZnZkqaBnMRoSrj6",
  "key18": "21YwXW1MbC9BNZn8d83NiCXx5zsJ7qFB5Zp2xfJ1xF5H7eur4iZFzS9Ximic572hHXPFmX3sE55s2ExkGCcehLf2",
  "key19": "5cZU2Q6CdMzZvoA8FFcYsLGEXtmsrs1XypFKthc8S4ypA4KDUDX3jrNL5EeyfHEpyVHGstPPEcK2C1zxPb4gQoXU",
  "key20": "5tEnuJqu99j12Xb1mFPNBLwG2fZgpsnkTX4RoeHxcV4xgC83L2SRrVeq1hYUggddkQy2p1aP33BAbpPgVQwfjtSa",
  "key21": "go1RFsAkaLZpRxXsMoT4WMpJdsWoB2aFGTECPyymxCCMTqcNhTc2axwCDALZ2wmcvRGGRUfiGLgDTMiC9hRksQh",
  "key22": "37BsMrqz7MeKzHAZAUs74JpLztLAfLJJq9uSPGoNU9RPDnzZwt2UThWuUPSKBZTsakHX6BhhyKrUW4i8oymt357Q",
  "key23": "5Vbq3LLou8As8MHdx8EUp9AkQ1HLo1FWXYtVQdiv3y8hXmnKJZkHWRk3iMkSXP28GY41Toc9rrjgZqVydUgEkwJb",
  "key24": "2UKM2tUciKv83fZi4pa62R6SHcoXh8HxLnZkpoLpGuKXATmNqjHnA63B69DTjMyhSoK22pZC7mcP3voZRZrpsVq9",
  "key25": "mim1FisWAHxRRSxT8jx6NXQmTjwdeJbeQ1PaDC2v1fHmze1fxXMTXRTMVHUdJU8khpMwuF4c57Vrf9sHDHaErmh",
  "key26": "4BRcsqDgG5ErtiKNH7Gk2CpLNsXei8zxGvzhyqznkrMP4RZH1uawb9giFnvQdUDiJzCH3piDPFtruCGZ9XLLr2z6",
  "key27": "5rT3jiFX7p9suWCkjFvhqfJ4shbnxrgZCvtJi6KWV1a7Nnapv4dFkzTeQKEyqVhTAPMb3H6uuTyuGt3daMeBnm8Z",
  "key28": "33ybNWeAMtgxowr3Fh39mp6ncDp9qnCNQdRKfHVdPTXTSt7KQsC2ja1kdoNNGtmquG9kwagMi9RCJ2dDV2sNUnAQ",
  "key29": "3vDq6FW34pgz6eNE2oV31mdYFGmWJ5j695qUNJwMJLxQVvHprzBznq13LZuL2pB57Cd5a3YP6jkhD5k9ZUKEQe9X",
  "key30": "5Jyv9jhVhyK84nQ5xocg7z5UruqoAd7DVSULfhp3mmM4wqbbTaVtd88zNMM3krKX2LmHAaw6Cdkx5xmYXGMzTPAC",
  "key31": "4qhh6oV1KcKHAJyFphcEUCfnWp1qMJZoQQbwXMb8V3FztnfWkLArSaYWEiXenN4D7dayfYRxqKfSAqpySokK7ER3",
  "key32": "31nVL1a3VHnBLpM7RbiDBy4pZTYc5jaTHCb6NvNa71qXLjPWnAWdB5qWVKdk1uQoVgSSiaUDYRiEuWTJc492b3dg",
  "key33": "2t79fRzxmRUYZfEzGTU6NS27jLF5QuBjTC3nqnJPB6647ah3M1sn43BzxDU89Csb92vPB7YvvXXeTL9XfXfBbR2M"
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
