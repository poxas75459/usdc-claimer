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
    "4eFFXmkG7D2mQg4RbzBibtf2Ct3CgBypfe51DzTeD4Pa8VJ6cUqnn3415dAqTVgLY61adGpiTtmWJ2hitNx2N7Qa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YtuH1nDQjAJkQVGax2MoTuXuQ1VP7fY26aPJxQRavioQEyJuHXy9dYuFmmbk8BvqRL9Vn3qBenHb9NpiPwn9ESb",
  "key1": "4U2dG6wTZH9aWbPzpPuZKEueY9MWnDvHWkxJpuByMWugAPBmwtDV8eiBaozeDHSo1eaVu7tsnEm1QBCKq9T1LpfM",
  "key2": "2c4KB9cxHbQGWgZtaFrM9ECeX7YoougPRuPdQSw5PN75gywF8C6SDLvnAC2WJQELKHHZrzUob96cXosYd8CGhvzn",
  "key3": "3GWDNFayXPm5ksW3sUhJtaC1bSui6Dn6A9rXHLQ28rSV9KW7DgsxRqwAtE6y8u27hP8nhYMUpnssCUy6Ry61SaWv",
  "key4": "5u4NScvao4Jn8rcY6y7CSwZYnM6ZdkKG3ji2mPrLaiKvEFYFtSiV4QTSNh9zvvADYgoo3aGzVTzzJtKV9ZmwxNxR",
  "key5": "4Z2C2aoNcTErYRUdx4JRxSBCtNeUACDLG41XCwnmPtE2nxzhVigEjTHcf1d6bKAzE9n5LV6vr6VkdKb8TTwXuhNF",
  "key6": "3HNvQhTFf8upndV2YWciDdPYJ6JA4azEKVzkz9HPLvNfhT8eWMBWjNsigSuDXWgBE4S2ZYfFTwUQSTfvRBVHANqm",
  "key7": "3RRUHve5yCT836xnUBWgmsBD9iuX4cqczkuU9p3yH2J9RJMvEE7wHN8CzshMKyuKNAxUmsZGCHWPnmf615ogBtfn",
  "key8": "4ZtfzR2sCapwfvmekDYWj1gYhzHnMgNj3jUX4YShkVAbw6r7zWHEsDNfJZD3E62wtQ5cq6ismw4J3sdVSYM4a2vB",
  "key9": "3TtkDe5wG3Qw5m2MX35gdygx4oQSZA6tsrrCneEno4dL9SNfRhvRfmtjPboyGPfz8L9VqUE3A3a1YdRq4iVWr5cd",
  "key10": "5FZXRYPeDmps4ZmJbLHAd6rnagQxMppJ3Mv1xyjEHg6DiCLUt8MvFLqoUgTbGH8tzRDKScMXkKAa8TzY5ZBpA8Kq",
  "key11": "2Q2XwJYqjjLNGYJ6aZaAqBDijSSrgAgovzbkZoic5rfCANZqwgpkN7DuR1crWozvn3G6zmxpbGVkk39R19L7oCac",
  "key12": "4k9rAZTxnWFDKVp5FWKJLy8uwUk9F29kBBh51eavtWAzgCG7nUkySsuz5c9UT5zspQ7dm2NhMuqubaCoGkAWL8yC",
  "key13": "JWhdV7A11rrQLw5mKE6mtFsReKfshtDjjTvwcXr9Hm6jj45d7qnno5m3jgguF9nprox7WcjS9ufJct2aBdRtz6N",
  "key14": "26yd9d48Em8hBnwnjV1zrmWRrrEuCvZL47jZ4bjVftni1v7yRTJkBH732wZRTFJrzDSRr3vXEqsJUGBk9mKUzFgm",
  "key15": "2sfNSFB1ynftCGkpENZxB27p9DZByg2B4VEToc4WGZ8o4NedCFBqvjg3CjtgVuBrVQxEVxjDx3UwAX3NfQUQQuHv",
  "key16": "5MoPVbSeU3AyxqKk6rwFBoNUhAEPoL9KeokvLJ21uWML4reQKY8HMRfhfUU5gTTxc3ksVgQQVBgfDaaDscBhaXLd",
  "key17": "4t2Rce41j2ThdwfxEP8GG1d6Vqf5nMDKUxDdr6EvokazWsdmM16WDFcsZ6E2DxUYDN12VmM3SxAWPsytpToobMV5",
  "key18": "3VVTocWgm3PQt14dsjyvEamK6qvN8i8djBpWVGJHW8qQ5tGQ6P5fUHgwVDiukBZFz1oq1f8sAznmHDXbTHcsU2hX",
  "key19": "5WJWBF8hJXH9bcnDzKc1VTqTHC2wCVJYNL5Wg714J7oBZDi6erKSCfHXi679AAu5nSwvwCyaM6QJrak18qRiexUc",
  "key20": "5Gk9JEHfjcMCgD5GzGzM8Hv7u3AVAtwa3Vje99Cq5aGx6MwAK7cZdKGV5rDHJZEkKbmp1GvrQtQnYAc2XbPUvQ6N",
  "key21": "3WZyQw7K3ESfcwDxN4q9G7uL2iPi71vVdDNipXXzgbQbffvjtuszTGR5vWGqvWozo5vX5d7iYW8Z7yCd9kbhYxmJ",
  "key22": "3ZAF9aUuhaBjWiBjhwARMecxbwtv4RPnn4rUXEdPUJeTqWoV4ZdLwitkwZvvpTwUnactLT6FPRygJ4moACpajW3s",
  "key23": "icmo1ziYUivhwnSVk8hXkfq6NPiAyEBDGCmRXgAUKRhMb8dot3Cf2SnY5fK5yTvGCoThpWP112uK3ChdUEhPeD1",
  "key24": "4pegiEHrxbviMuFs9zRDEAdiob8h4qm6iTYPtm74SXuBLtWR95Prw5LDhGcvTJVbLz9Low6AWoC3QKnAUbQrGvUF",
  "key25": "3aYHC2SXXqiaanNVJU7xqy1GRD2Lgo3VNyZgurM6f3Wfy44ChfqssT6o23aAuBBkEry3NqRTHvprNdLVJcZ1rQxs"
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
