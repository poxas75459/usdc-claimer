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
    "3ZM4887GyZcrusqtyKnaDZj3z3rMpXYj9um6VewbqrKheUmMWpNB67eTfEd2Em88E7THMrYhvjZJkgmQPRWR5xea"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FA9itmRbqVqPLW5iYPv7VZ2tCHXzVMoiXDh5w792U1ggaNsguaJKSgt5DjK3GNbC9AL546fCWwWXs3uxqGp5ugJ",
  "key1": "4YWvycd9k95nzpBpn1B396ncb53FeEZVTyqPdNkKwbgeRGDTbB7ospuYYuSfa9iQLxZBryn4dfXNswEpNqZHdTJa",
  "key2": "28bbCTDvDZLcg5s8yEipnsmE2Lv1oM27c2P9Ndf5P2nJu6ZodELvrMN6KggEbDVThcuQrQCGhyBNPKQr8jVS7aNd",
  "key3": "2rckix1Zxujr665qeRdJ4fg2DWwAvzk6yQxYRZ6DzCYa5wpvN4GADimdWtzGKT9EUBZ2s6PSCjajjhgwNoLkQqFp",
  "key4": "DHtvXb4zVpMxKiAGdSMGnbcqfaHyo3kiiEZpqkur32EjeFfj4CVZacEUhAjT89fAhd9p1sDkwJe4FnyvB6wR7qw",
  "key5": "4X7ucgRZjGRcikncFJxrz1yBUf7zQdhTzt6rVHbrvatmEgoAMXH9B3AM5QxonkZL3kQ7hi6sg8Jz9p3yU4HJaHLQ",
  "key6": "kRDt8iCi5gsvJ9e7nzcTJSgWfFfHg7ZLeeQuLhXsrZ6o9H93aRhj7xkD6pR7yxGusi3gF2Ny2eSeMWXSAvt1Vyq",
  "key7": "3qW5kkwnKJgvwZrd4Yj1pxifF9ztuAzZa4vsC5CsScQJbsLW9aV1zgWgTrq7ZVPHdW6zBvkd28CJBSMfvHhq6zQ",
  "key8": "4Jm1oviu9g9x4BanNSrgg1Sbkiy4Gbz1Fb9z4g1bqLUUcA3YS9UNDwgN9mFsfv2bNedeAX3gNLPWPMNF1vbPEPmF",
  "key9": "3ss1iwv4wdiRbk35jjDEDPHZSQKqn1i45PrEthRJpNeLdxjQ3V18BxArEmBxTL9bA7YnDhGR57X8gkFX3QYiX452",
  "key10": "4Zxc6PN2cckYhiN8ffsaeY8rRJnrr6mmXbmin2aKcTSYXWsUY8TCxgzyRUt41VUSFroKsBn8uVFz9k6tmPjkLTse",
  "key11": "4ZRFRXYTPjEKcyaihckq1u2XssBcCzY8QauhKp2isaJH49nUtLTuX1ZscbpdUhzy9ZpEg5XCLenY2PKJZYcsx6iY",
  "key12": "3Jwbvor9oU1ZonmxB1AjyGxmWci1ygKzcdE34MavtJeiTELPJtK6p4hyX3ErqQpxr3ZgDjfzapeCAAjNUTAFETJ4",
  "key13": "5mhk5Ui4Kdxp3XmPnnnw5EgKvdFAfemWWDC8QDnx2rW2yssDgkmH1diSrJWbz31eWWCTWzYuphhv6VUgmToVpRBX",
  "key14": "iBcECBVt63DSDiuDbpxuPwVsYQXMvt5RpYo2qDoYJkzUPK6cNanPTDqyGSQDhrjbFThT8KPqe4CHUzrJeiPJWYc",
  "key15": "Pvghy6zgEbf22d6LevKpPZ3DRcnLspDALpDKzGayDfPjvkchF4Box1XbcWPfsXhPcnTSJCkYJGzwjv5mCoyfgk6",
  "key16": "5kduAGsBHfUAjixBmeiog2Pe6w9kyhu88WEZdQCR8tVik9ASrwJAkAUTKmJtSH7pGQibDk6MQ1zpDNTBFVNiY6kp",
  "key17": "41tmisVK12XHJjA3GtyUweEyFto2RENoaDj87SkFsi2FjywnBffjJmu2Vaxrx24noiVCzXvCwje5X8fRxp5v4MwS",
  "key18": "5QiDRe5YzJBm7wXC73MWqHfySk7FzeLqYWr1qa6kY5CLWi1ojumMuBpUB1hMUZ63Gtn91xcUF6i3VBsHs2hqnFdN",
  "key19": "GqkL4StfGGbqjg63nPKTwpnuM1PTBDHUxYwQPbR6iDDQK4pTEnCUCgmbupHEVtpUNY55NzvFpfa8qBMFdTcELHr",
  "key20": "4oz3MJ9C5k2mRk4XmC7BNV5Xm85X5vNiyJDL9SQLP9RoWDDeuZ3qDjvjDnTdgrDNkgz7cMWQvToVbXQJeDpVyhx5",
  "key21": "4AfRPKNqqoacnr79E47kGZM3srdA8MhTQNyQE7FsDdB82K9BfJizfuiwzHuEChVzrr3s3jXQULDMiYBvTDLhRjYp",
  "key22": "4AEnKnUdg9Y6JgZb8eTEXXQQdZZWYeCpWhVcREqVABJWNgwKaYQGSTH6a6VZdg391o9wkTE35anAndZcnzVbtciU",
  "key23": "3LW876gtbnbdDcnQghEUzJwikVLtGE41SfLiGduJXvAvbBanjbAFVFaB945pHhNoTVkZx4h2eACEbQFeSzPanaXy",
  "key24": "5Sy8RjCTviZmiWjDoaNngKnmhEWLHwxxMQVbw4nnaQ7VCyVUtgCBbgbShx29tsHgLZhPMQWkaDyjND1wTTKuCjwv",
  "key25": "5iJjwSAFn3YbRV1mLhHczarXYnWQdRYbN9ynw5Jfw3GJ1PMqjG3woywgGumhrs7h3u81rVJPgGAfVcEt1VytmTuA",
  "key26": "3VSKkP7fBj4iYMJ8rz2gAtA98L4sK8YRvNuEbXhJfWnivzQFNEuK2VTzH6fwYgbGQft5rXrs9myQ7CZik5ELPPgN",
  "key27": "5M4hexwxTGzaypWAdWuf7ApdaiAGRJFB94CqHbn9y7ot5TgPDsLmahZYejAUrL8ptQC7G6dDzFgZYBmtw3w15oat",
  "key28": "2F8XXKq7cvd6sGRqLLiYyoW72DEvRAMPbwJJ2iZHJGYayDvbtqomK5NnApqYejgxGkDs9oLcMnuLxnZRGnTRUoxC",
  "key29": "2mkMXTZB6nrqFk8f7DFXrpNHh9JEVWD9eavLpTNoKannKAM4SZomdzVJ9drnr3Ra1EaweZPPi4t44V4USduHue3r",
  "key30": "2X6qsnzjSSLwAF6NvnFgcAwZYrECL7q6ACdUANd6hZ4Mxx8xTXwpGQs7RmW8C8EhqtncubGu1xNZwxtX2qnWva1m"
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
