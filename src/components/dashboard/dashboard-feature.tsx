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
    "2BjeKzRsHqkbshQWzHe2PQ9dztxX8RKpjUnmfSkKejBr5m6hmbdvHmgTiWHN6UPp7BcPnoFaYCYLsbPRhBZeVDv8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LacVZKSNkRyVWwysoRSgajs1ucYAUyX7E4uyFCMPs9k7iuHWmdLVwy12PznayedC63c83QQcWPufiTqWSShxXEu",
  "key1": "2ccC6QfCSaCFEF7Lw8Qzt3S9PWszxM9qZP2bVNTtaofXQUqxp4JePWcEEayUc6H9qj48K7JJXxZqoefKCjgrmwMy",
  "key2": "2Rk2677Pf3r2qE3Uor6rWtNxoDhFfHJz6H1sVQTuDPkjwDZsDU6TcmHSHCb7ST7X1hzchSWXXzTsHidCYQDY9qRJ",
  "key3": "47EvxutnSEwUeVK4XYnn3W6ZsHppUuT2wqQpSgtAquEZUqXBw7LmB2aQNV4JCdaphuKcrK35WXwQp9qu62SBnQfr",
  "key4": "2DgDji8SezTsDt6AtZebFtJ5zTg6X7YT6uSHHDTsEq4U4GH2HG36hgCuB59xmYrPoVcCW3MAZQV7oFcgLuzpN7bP",
  "key5": "5z1VgRcdCCd1rbicsAZQHwbNSGYFMQFtjfdsRryiUvqUWcdKsSupYDb2xAviqqWrUm8dH5HaXNmLyqECvJemWjWi",
  "key6": "5xvnyci8KEypuHpZRaHhp3drRAMLdrfHUoQRJcsVKCpc2yYJEWAbbXw5UikbLRtqRaZgbfvYM5mMrQLSchnda2mH",
  "key7": "3b3aycveNh3LgVyJjgQeEPSxX1LqAP1fFUPwt5M62iQj1FpJb6XE2kJLDBsHFThaknbewnNbmPFMad1Bt8f2QepB",
  "key8": "yyVurCMYAzEBw6BLjoTCdE7EkBmu6vtptWwLzhsukJcuGJLPrxpanFu27CyWvMAHCCLFrVTeXffzdvNcUBy3ppr",
  "key9": "53mcdMiPSJ2RxtbTzy7orDJV3V8xHPmVrKxzNbNhVJ6XvdGfNUhJeFivvPnv6eaYdfqMfgikyoucgZzFP3bzUohg",
  "key10": "276T1RwU5C7mfKaULCXs87fuB77B77GHQToRNCTBTAfijzqsqATRYtZvcVRn6MVjKvrvkd5FBLYVe3uQv6XQtnBe",
  "key11": "4pduPobV9JSJh9Ko21aKfupyap2iYSvjKvkiDLL52jvGzcZqnGp5E2sYeRn47CZSxu1GpTcAQSgGzNBor1t9oQ4h",
  "key12": "5UhGodPXBvaFftV8KsWo9NTpzw2PJLJxhEjxHotQKJioAqoMx3Qd7W6JwJUY5zWAqEonhc6TZ4XQrG67W41xQDZn",
  "key13": "2P57GTMZZy6xQusaRYm9ExSNX2j1zj9ZwtapuRYyyAVrRbrGNkWArUxtpsoB1qBsZ6RSejJ5WeDkp75JV39A1Nph",
  "key14": "4uA7ovZ22YEkZny5hQmwT2uCYmXLuagDiqt47iCisqiJfQN4dhWNbVaFj2srtLSy3DSWNdRZh6rXqcSBBc6rpRRa",
  "key15": "2MCwxK4zMi5CCzZzEXhu3QUq1taJbFmhp5P99eALpQa2Psdd1cZizYfNCMxwcbG9YUgSz9WKjYfCoR48mYe6gfWH",
  "key16": "2srqsgUjovMws48Wm53D9Kf2iJ66ggjc3St6828vCPmBqM5jHYefPAhTtqiwLQ31N6kHGhQNEfQ66YUPQAgC4LnJ",
  "key17": "53ZuXmRGMmDqnMxyNkdghKrQSN57DcZZBLdxuNj2ZBHdu3KzhxHwpr8dWiuymsHCQSEcqsuAvLXZt3mER7qVa7AL",
  "key18": "38CV8B7VPf3whDEzJH7c9aqBzY9UiMYwGeqZLnJf27eB4YxLeBWVyJSxco2HWXPh19W3mUDmXMD4xT2RBZEf3Ngn",
  "key19": "2KEorQuwbnDJaLtHxL3XLbcP2Tmvu14LQXuRzu2zcqcN5BhMsTksVpUW3b5Qk13PMadXi537HShSqodomGFgVQtK",
  "key20": "2VJFFG9ad8rK2bwncD8zjWZmDHYKrPTc5tfrRK3HctC2gnnA4D4P3xzhW3Md6EA7wgDHsqA7KC2mZ9UzMRsY8Lwr",
  "key21": "2NCogcFu7VNZp1dMd8jm2hzbxL1p6MvzXtpAjofRkdf4XTZtu15Vn9X8djfst1SbfcKupFkoBHN5Ya7RUqsUiFH",
  "key22": "sGG6W7DApNDkQDHdPrsx4DXvhUnP9LHHgCPavdXnYz9xj74cs981gdQMSTiETT6tg65UUrJTr3pUq6Ufky38aBY",
  "key23": "3oNTkNGxzHm1Sa9k2pBNt1bpNmdjxGKbkT5kwPRdeFycCNSE6XaMQ82n8kLuNNWeNDi8Qowua7PvWz7uRMT65Lz9",
  "key24": "4pDA97NWRFNpEutyU6VgouPEfw4qHKgLAuWJaRemCQi8B8EMvLgpZ5A8bwBKHoSUYVk581PH4DQbUGPwTrjRwtmn",
  "key25": "DYCctjWiUkPbMDF578EFXJd3WbZV6nptRwD3Y3kGfEzNExCcytrajxbEC81fQfkq5sVwxfTDNFPMMG2zu6bvJTR",
  "key26": "3ER4a2GK7cRxAFYV56Uwwomm4gkJGXAHGnhbMenq3FRhcgPwtLwbinXtys2h7pj6KCqebTfcnb8M2TJJAeX8sasU",
  "key27": "5ZDYi37uNp8RyQmYMy9mmjny3HJWLBDHq6ixZwgMUe3FQYbgmeMJzLyESY4hqmdDNTW2iruTvmDm3pVoWHPu6WXf",
  "key28": "jFmjW5KJxoT9FSdYLUhp3KRvSFRMkihUoaTX6oaXZze6GuxoczhcQvShYmbfdBM6BmJEX4t6fRMgc8m7BZdz7z2",
  "key29": "3hMNdDctyuL1KDUvURaN3HMXNJWW4BDMk3bSF2TaNUWk1czQf9an3yHHg6G5Er1WVcqHsxcMYEZCoT9KiAvR6eBs",
  "key30": "2BiTc7Eva8BoWscmGuzGyThGFgyzgR9iZpijagPNoMxM2Er6YyH2sUPUDEBmnKpyELKEpQxdMbqhHkE2tJXdDyge",
  "key31": "22EB2m2ZJDr7cvsMkJCwq3BPiTBzRGAHpkdoUTQQVgbgG9FSbpSCHnix2bZVxq45qUc9mENxhXqc6EjNEkQeLii3",
  "key32": "4Ey3Beb2CEgbAxEmmQD4HA9hEdhsHVKqwEG2rtgioW2SwShTP1wrdxunwYxYHHM3woFZ8wZoU6yjtKAQdaCVzSF4",
  "key33": "ioDYvhWcnpNcMKrVL3WHZmqxHopDZV47JH2WrTpJntrud8mBYKgi9wUz4PHJH2pdvCHhNQFfmxWobiMCmnw6mjC",
  "key34": "CrBMwsw9hrH36P6mSR6hYsT2W6n6GPUAfQPkeZdZA87mjb2thnFxppAD8gzJZD1bk5G8Xs2t891pNM72G2eWQWV",
  "key35": "4Z1c956pWWgc4T7E1EgoGnWAxci2fX7NjGJreeWv7sC8nRfFKSJGMgantuaANpfA3gKb58s2k2q5VHYf7g9yQcAT",
  "key36": "5REFHsoWDigMUGXPascd9CVsdBbyQ9WHzkjLXgzKwaR1sqS28gQZiLwCfE2qcC4jCMVZPc4gW8jxz7VJE3F5CN2f",
  "key37": "4jwi5yLnUNWzTKqMq9Fbueim8AzE45ftApHhNMGCDjEMuZRvmC6JsYmhMtzY47ThQtBHm3egy9Ck2J4okGsXeseG",
  "key38": "3H5XrxBtrSucvUA4YngKkD237oZmJbnacLwvqqQLvKkAdkcAwvZTxCcSB6vwGH7NydeYXqNBpPjDfBstpqhWjXQk",
  "key39": "2G5wWtEG3YZ4Jd5wZMXmZ4X2xkz4PezeMV7zXMU1NyrQvSpKAryMTHzgzWeUcRZ7PKzm8uAzBQRKvR6dHXWDb5te",
  "key40": "2oNbGdVdZdJpTK6XHGrrem5TNyGqC7EJbEPHfghJEBhDe5os93abW43nMnoEA9CzEuhkwpMx1hY9na1nPsxJsZpD",
  "key41": "WPZRbYfXKwnv6NzgKAe2bQhf7EnASCt5GTSqvptt2kb7Xsd4NqoWuGQCT5bWzSF9js4FYsD843nPb4VgvVdsnEh"
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
