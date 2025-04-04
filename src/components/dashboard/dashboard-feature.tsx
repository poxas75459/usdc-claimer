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
    "5VXAQxT7NxZsrEYQRUj5y7rPLLcTFESTbdEa3JA2krG1nCznMdfxdfLPXPvjh7BjqVyXoeAynjhUYudrRWV6D4P8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vWZyYDes6u8KF7ezqQov8VJ72wJ7do1TX6Jpp388hz8bhjgP5fWiiPBn3Hccev227yUkT1oNY2ifxwjJtZkMAg7",
  "key1": "5qjbDjyYhAZxj7Wo55Vvin7DvmcyxWipgoAdK8f1SKwH81V7tvTMYZa7tQWLdbkX9oFDSKNyFTQFe8nRxMBMw2h6",
  "key2": "NdJ9WeQNz6dar8vqrtC51fCHDVKoEkmy3aNQkfcAJa4Z72YMvjzT4KWn5grdUzZ4w5cPXcpranF3J4khb6qpPbd",
  "key3": "41T79XAPPPDFQE9tQgiU1Eg76EZgPn1YLc7kbLSQNt2gaq2ewXcXhDrAx4YjrupAJ3pN7BSsD2FTUPHdSxt1jgz3",
  "key4": "1ZiTXz3EkgoynyUm46kLsyM2wXWxPCoWX4TGUMvoUQuFeR8coqEdNkjeP5JLUrPcdqz5gz2Pzj1xXwScRVSCqwC",
  "key5": "5a1qyaDDjshMX9u7AhUPPEPEH1CA1dsvR6vUhtUV4yziHoK58WsB6nUg9WAKSFdThv2uP9DpdqZdYcGnRiQp6La8",
  "key6": "5RFPuUvpo5iZJMwpXuZBEQBggDAfbgdVTChSy6PXpVQLK9gsBJASVyj7mQMGmV9dFE5CRa5Uaf6dswhGUoWbQyfA",
  "key7": "pgJfVBw73jvZybTtvPAyHP4u4mhT7cXyqNM5NvnZMTUwJkJPV6VrYgmvLuAXMEnx7FWbJx2TJmkSSdW1qfFD4yJ",
  "key8": "koDdHKGCsYccrUvxLxj1w2dGy2Wj4C3tNv2q5fuCdBJgXokDMhtdvRB8srNxXmcZ4HpvJW358R7A1TqjcLPuVnn",
  "key9": "8Z5rcNutQQH8tJgUpbDTY9is5TF7ShRbyRDmpgwaWTjLNQXerWH32j76a6zaHTwdA3wCqUoAxgfAyCFA7JcpYBM",
  "key10": "oLKHVBnVDEEEoRBsxHhCkSVjAwinq66xXBfkotLJCk1atbrebctcKXbq2ogegv9Fw68dGyRguqE7J69iuTHw9Kv",
  "key11": "2KHsszcsyxMCZwnqeq9NVA3N8wdJyGLRUayuh9YfqPPYEDESEUBzgSLPgTTjpFE1aSDwnmkqp1FPUNnc2CKWS5ug",
  "key12": "5LAbLoQkC6ZregLBWmmdJaVZEqiTvfiG5yPBTyEmWpQhsGh9owZJsCky6cJLDin5MGgh6mYgTpR5SiuyMTWEZ2Ct",
  "key13": "38ywrHUHBzSqjEKmKxPrhTmMpqQvdEzhrxirq4KeDFYRgzbWjq3XQf2h8GiQ5YPvQY3U47Lq1yGwDJoMpJKTkCSq",
  "key14": "2Ag2vY3AZEVMV8qW4LgsNsVPmn1qpnjXHpC6ZXd6M91diXxhwRp9yiS7wDbidQDVdiJg61kLrhseWi52YqDP4LDL",
  "key15": "4iooM1Fn7fWXbtsdDBqP9qHQ2CrPiRkdo4zbEndneXdDXGKvH2mCPabgkCnKo4bhFDdc3oVRNSPwit1Pmw58Fj7t",
  "key16": "XmVTm73qLSZPoV6QFKykcrWytRW2T787tGnoCdfUpbkJioR3Xmn2M7e44pGFNw4x4MaKb6zoctvNK7iM1F3dpDZ",
  "key17": "62kXEA7MkkNd1r3esgCg9Z85kYiFFy1Rovf9EsJs1xpAPUXV1EfaHDGjBnEagFM71d2LvhoVg6qgCKJSn3pCTqkY",
  "key18": "44eTSBaWRwDfv8NZSSPsfowf1Avkw6EtVNPVxmLWdMcQdWnXDZrKv4gm1re2LXzfA5ZxBtjYQMLq67rLcatgWV1q",
  "key19": "CJmeRQkhW7Pdzp3WsUf9VwcP7uBbX6gdbPzG4x4VmtdDPCvcyUErojRVCMhedRPwFUEfmKLSGjEVVMrCchnGEbh",
  "key20": "5zDhSwtmGps3HrFk6Kci7oV9VXbwzMwEZYtApsjk2MYSAJfoYsfXMbzHGU5H5D5D7p4nhCG2bdv84zEpw7oGmSkb",
  "key21": "4bhBL5YyCk19nz6SyjxgR7bv32BWLktjgbeBUS6wzkqRTPSUYwok3Z4JYcyqJhSgzWFhkf5DnjQCwCgG9E5zTTDN",
  "key22": "5dxUrTZa6bTuTEYDnqF3jc1BX15XhEqRRXZzsvr3fJgewdRoDkG3BZAAXis2FYoxWshRnurBF9Zb9s464PD9buuH",
  "key23": "3bJkD9DCsTh8F9hAcgL5zXGNRkj3uUmGs9HoAFTddHLL4P8axqLHxWzvqgVj442KcN8tkYYR8dbvKoSSZmeYcPDr",
  "key24": "2ywHcrf4bzE1TqpoACMMiV4Dn9KTWX5UiZtQoCWmBYSkPrQzfeVwVi9uixdS1TBvDvcGjMK4gfMTwo14xfsafHo4",
  "key25": "4wuugL4repDKJmShepPVXiKkHvQrNgDqgBvwRD73kXsNtL4WnM56KA1soBfWaJgZBwjmBrejaiuo6Jg4QSjzsDYv",
  "key26": "5mqRAxTtWoALj2Txv3uLuiwEreWCoFLoxi9Q16y9HN2xgDxbjRQsFK7FaQc5ndJYGurtZhmMQR2VxiLkCXCtZPLX",
  "key27": "2wxtDW8S81fwTr4eLj9ssRE58nKrjZocVk2ZYFAzyFowKjCeawAbMPssBgBDnikEw6gQU5L6AGwPWGumXsdhh4M2",
  "key28": "3vmp93k1Wbbs6dbnFWgENNZJwbAt1T3XW8t1wWEPKZ36ttgX6fJKgSjoHyh4cYfMCmFodNVPHkMvLzSQhZhVwotw",
  "key29": "2ainsUqKNSB5YtTunkYTDTwtat48TSKX16AezNkrqsTjqyNxssxG1N2DaGsgsfejxdcb7yn2bDfUFDZEdBub7tiN",
  "key30": "4pMc89eJCVKpeMy68T4hXoxRo6g6nBCdMXG7WaX7x1c3JjeGTDwMDv45abZLq9KLNpj55JkyJLxt64TcfFnrX7WR",
  "key31": "4McLSpKuL1ozZM1ZvqcYNK9EbnJ9NQ75GKepcuZg1Mk6gRAoGnGHviTwCfk9u9fCRcRzY6jP9CacCFDRB7rp5GvT",
  "key32": "4jEX2oMhCzrpmJFDEjB1mHJhC11UnjV6nBCMGwTDTj8M23XUafQ6X8PXMs7nXPBcLmYbHmX86nGcs9pTSbTtTo6D",
  "key33": "3tuqrCYtyRixYoDpdajus82pLGZECieUrVFCR6Kb7AxJGJcr6Z9WzLspkDq8J9RZS7J5umQBgckXgkPo6fkkY4Xz",
  "key34": "o6VpHr61XcL5yGbSYvN2omLE7tXTRhTLbquzuUbR8vFJpM9VXzUZoaGsanyxXtj8wiDrVLWzpivds3tLRQreaBE",
  "key35": "4kYPzT6vAZSVb6UZemsztojsthNZckWVA9K9HLWgN4oXHyCBFGomsyQfHYandX4JtEeyqyk4DPSwCvu2xP7zVBWW",
  "key36": "36MbABsjGdYr8Coi5aMAu9aCCaxqHAXaiqCSsXXjRizDPysijpTmJYCkiafyoUgzAsDoVGMBipuySxmKkZLm1bFf",
  "key37": "2d7caTkLFD7KBRT2QU6GMEVBcCKozrrsTbZ9zTRJffEdALVNvX6XsSmZKSHi1VqPFBACmnSUUgsCwerg7BMZQAm5",
  "key38": "423cY6QpMxaK7kaxTJnFN4A4Ya54NqsGze16mw8yzsR19HfuKiLgESoQAemqBrPsgkqh7s6nSLdFzQch6D6Mb1mk",
  "key39": "5u8bhprYK2iJNGQFvAm3VfjhqiwMUyrv22K9CaZRwTkdELsBRpbvifws6cQXGBx7bPK8cUCd17roSMupDCrVShim",
  "key40": "3XRf1UmY45qj8ZUMuL7sWjtfkSV62sLj8jPU8R3z4oUEFdGAyS1qjJHXm9ETGxYD1zdJyz2sar85KSQuBCVyjfhV",
  "key41": "chaEYG3h4JCot579cuLVChMh3JkXaFS5awzJqzsFT9uFPLRrLwF1BEkSeGyk7ZdhiTMCo1L8cfh4J4oi8EwqabN",
  "key42": "4GetZuEhbSx59QrEvTi4xpyQdSWSrQDcnCcUJ6fyW1UqNmjANuDTs1FUjo9oQambsE6r1gqMo4V6MUK8FDC3GC7E",
  "key43": "5kWrUfmHyAvZnUfYCUJdgqnd7qtyv65bZgF8w97typgvMkU8LzkHkZ2osuMUoLVps8VJKitkKkxBTxaU2kqHaqLH",
  "key44": "2UXVDHi3gTN9E37xwTXvmLzxpqj21qAzEimLAPKFYLhxWXnHg3SSPmJ7H1hJyaEti2wrJT6EDicUyheEC6UDgdwj",
  "key45": "ZdhvykWejQL7jP1vjQZbAX8vKWUgHa4CqRbL6GdGbxoum134oS9LGXSQVPwLF61z461q2CdMm6i1z7k27J4NmVH",
  "key46": "qSZZHVZCYgFQc81BctiY9KKdey9QKpCp5vGNrHHBD2RMWwAkMf6MKNGQvVgneLpGTigohx5wnHrzMq5JRwAnJAA",
  "key47": "5piahn2CXVN6MYkKxXUWxef8A7psqwQ85AW7MjgdLcE94m92MsMK6SkDCDKNowz7HWLBLKqAYXkUhRazftBwMQaG"
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
