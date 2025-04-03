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
    "2hDbEsZpDCr9prWwYJA3x8GNYahRmmfhQwWRKkG34RZr3t4UoU3vCAh1CUwdAcCqyCbUNLAXtgWpWBYWNJme9qXw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mGSdfYNRm9s4fnDZMWJ3gkvXecbokpxTTL2wqiQidyJxcgQaebBLHu7G2gnby5kjnmywKCPMfHgEnMpGMb5Szyp",
  "key1": "R9dAB5Pf9ZMNZ5eRYinKcYRxNntYySRNyodnejEtgkLubswxF4fbF5ynN2euUmdu825V3v392yT7b7fuZkSYok3",
  "key2": "q67N321JLqwtihggEFLYm3Rxxy4nmek7rvGdQb2xmp19HpM6X2mdV8hU4NHdCH2LX7eXvUFYrJMXxNGqrzafy1N",
  "key3": "3kZSukDpZUGxUh7os7NrvbLRBwKEFVZcUDL5XogGJzwdvvRrkGSc9K93fWKVfe3Eser2Dku3cP3qed4cH7miz8UR",
  "key4": "4Teu87QKDRkxQbEb5CYy5vhEN1NeBS2RoRkUsigb6U1RJ2T9LNCUwepdDbaSnSzzsniG1wEUHJhEaMjuBqCkzW64",
  "key5": "UFwozkkCq63NV5jPgQ7CeiNSsy8wDUFwyuuW6mjzE9HZWHZ12RszL6NraHJAvyXW5sKMdVcR3FnqPGk3wrEkKDT",
  "key6": "4Dcez4g5F5tUQoe7hY3nCcS6EpBwvsiGoV238MhExCuk6CUQEhyTdzzoF3xXSNajthExgNDAsSuVNhSgqkgXYVGB",
  "key7": "5jDDuACJqzUpLdmDoSVSXXKUknS9PLmRzpZXa5QjUSR4aLW2ZwYLaUSnNjuxdn1Tx9sPLKMYv4VqMTZHquTskocb",
  "key8": "3tAZWxdvk31MoLo3d4goshkj7rurmwX7TP7a1LNaEPRDbHoDrcU4NZ9h7ERTxU2izxZn29zyuwKYUqCrNEdvkUr5",
  "key9": "46XcdnCNfVZQJevHQhub5QyFWf1aaD8B2WwH1NScbYJUtq3iLN2PQotnCUHzjBCKyKEUZKeV4Sa6cJGgN7Bdq99d",
  "key10": "2iYgcRWMMzuTqGQXjpj2V611BTFLWMb9vFiBJudbtiVEAaGNd2sBqfZ9aqJHjXYg7TGCdhTgXyQKBpSkGFX12dvZ",
  "key11": "61dWLYkHPjMfpvwgMbqrsTgUBnS6P3Sh3oT9utJDoBw2qxNLsbtc7yfHW2sxoMagMLwPPMwidAXJ9R86pRNTTpca",
  "key12": "32bN59uqGpFi8ZqX2FrdztHA7BKpe9Se4X3AFLbf78vNQi72rfeGPGmjBV6YsXZ7NxHtPiAn6zBP1D4u1BykKFZh",
  "key13": "5mTscFxjeGYJzRZuS3N97tuxJbAUWacCEnRKBzTbmk6JkTwFzce5mCgvXwX7ZiZwtDJc5TCDLoAGcSuESHg7Dyj9",
  "key14": "3wn6RpAkio81PWQ1Z2353cptAtRnWPi13V67BknnUXovrHA25nW7PQ433yLqQPghujEyZSAHLiUas7auQJ8EN9MT",
  "key15": "5CaeuEF6cGwbbdfhikA8xvuKozX96DcjPHsdm7q68ENx5SGR6Mti9kZS2s6AkPCuQj2gJHwLn8U79LMZzEbYSMjK",
  "key16": "4kuAa4qh8VXAHp5GGxmPPfR5AqzsXZKbWkhJM2TwDSDhNLxfUx6CnR58qkfX4qFU5bMJ9FtaDMQGJU48xTgGD5bC",
  "key17": "2TLDSeCNnoJMcZVXw63zdmNzNzYx3yVyXsth4HA6qYknjV6TQGQHVUiKNrSFnujoV4tfPDnWfVPCVgRqVtSDyNXb",
  "key18": "5jTw5RxxZcf783Nibq1ELXn3m3mumS9vhFWZgDrTmsD4t3X2kRVN6xxKBf1FGT1ppzetzmxkj5PktofCbMo3mVf5",
  "key19": "2dFRqJzj6Eq1qM8mAi5FHqNB38AvRtnWC5gjAnq33LvqmcdbQVGyjJy8k5mf43oBXafRikhf3epW33fSNaC1X91r",
  "key20": "5wkF3ump3AcbngojUFtK2MYf34XZEAuDeFJk2a4eKTuRe1H9MK7A4JoaRA5BF18y6zdo3HtRNCAf4qDEKx7CjgY2",
  "key21": "4Yxm5swm46aHqvAums8pEL64nh2CaciVo1pJ43SKQeR5hHsa92ok4guJMckruqfG3tr6JZf8Si2TwGMuMCZEmmpC",
  "key22": "23EPyKTn4M7vgF1G8vFeDCWzNr9tYniqVAP4ADRc7x2wuBpt1Mb5wY3hXwUip6soa9rVymHXpxzK99S3Lf23qoVu",
  "key23": "4gvR1cXhi3kE3kNJwt7aMABS42JChWndtoBpZX1sHDhLuTdecuYdjY73nKgQ7npcxkH4T6TxorqUWXwj1Amev3Dv",
  "key24": "29BLEzuzbUVeiFfnpFbMwLCNreQAspcse23x8GQzVE71wPQcfnmmS52qg9zSQYuozVUMGxKfiMEvYaMhefoGC9u6",
  "key25": "537Jn11GzkHnbtpqhvAVJUjvpdtT2hhTXBgzRSd4wKM5sjaJ87YED9FJ54XMCHFXis87uGXwjvHsatRMpKw9NWSA",
  "key26": "h22JTeNHYHzpYnHerCVLqTSz7jMRdLQV6jmxGJVwus1GrG49oscrgTao7byQk4B58dXRnKcpWUbUp3nmB5VbzNJ",
  "key27": "4B2RSLKAkUhdJ2QAmqdANJLgh7K3n6f8bwhrA2CQ2jKo91FXBCy7JhmTnYvwciUza6GZng8r6u9iqHfR5zpoJ2mf",
  "key28": "KBnDY4fE9Kv3ZLWAUr6FwiWMw5tupGGgS5VKRcVjVQAoidqbAU77mkiFTwhsojvq6mSqe4eMAgaYemSAhK1sMf6",
  "key29": "3P9gkSfxUuC5yJcegBygHVC4TXZaPSJTAzYw4947rDyBJnUV6wj9R9KPhsejPrH1VVS7MmgvY6kpgYCbte7gSDMm"
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
