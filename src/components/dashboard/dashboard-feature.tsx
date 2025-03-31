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
    "2RHUKDWd8PyGJTBKdKKwx473NavydHYB3Hg7YmKFY9CJCY9TGLaw9fVnYd4q8aaLoRv2LUFTUBrX4KLRvXTZnFEP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24xpYEomZZVQ45Xdv83hPJ96Dw68tD3GiGo9DQkNHCtMu9RqzpPvmPuVzr8FFz93LBiUEJzMN9LJ6GUSBduagRkw",
  "key1": "4DnKvdLm8Zbh3JFPnKwu6BkSJhdF2scL5TiM6JX4CbniVbsn1HRtQWDrtLZstPVusYj3R9TEfx7xtfMh4F8pB5tv",
  "key2": "2x4WwfiJeeCHZfqvbKhADvbEXihpjukosc3ZnRaZL8uNRyG3syYECyE7jTMyaj7zV1aCWZtQqEbS95pAztfDTvry",
  "key3": "61VV7nP657qhnRHYtfZPWbumABpW3tCbTkYEFc4YPi4KWDuXZiTYyip4WnEVK6Uea5qjfQMhN8PsVmUW9LCBToLe",
  "key4": "4GzExUut46AMP5bX38UxyHM9JWdBAUEmUhsfjJJ12tdWsr4vzSPJuX528FZycbJd9fNthGwYP7xAa3REZ2MmcaR1",
  "key5": "2X5HCM2od3w55edLuH9CWGs1MCFxULzLNKiWALnwb2SGq2qJFnR9eJs38STJdLzNmfWieTR5pZk8L5EjHRs2VJjc",
  "key6": "62hH8TCxvJMoThpNTfUPUWTh8WGX3fPopejqd3Tu4mjg7bHXp8HaTD1uQ1VMo3WMvuPNHsDmNawWKGHHYqJS9MAp",
  "key7": "4uwfATonhz161qwGAgw4h4Hi1AK1XHx1ZwAup2mjXhkToaneAzPtCPtDJTrKVFP6WNK9AecyKeeLUvcMe5r4PE3W",
  "key8": "imAEZ8J7T8mYGDj6nEZvCbCVD3zMSZu7TRrb2hrZ3LUB3S4Kc9cUYo7AikHQu4bfYWgToiLvjEd6QWARMMmGbdf",
  "key9": "5RhZfjLpanB9r1NvDZren7iUDud26shz8Xv6HYkEBw7fYPeVHp5WC4rsBQ1VHbqeDK6bVCAowYv7yLB2NLXafZCd",
  "key10": "4TRxLdimHV8jor5uu8a1FviTbdfgUiVUvcVJsMwEQCzgVta2mN5rHtyXWCcH1SnkWAWWPAQL88UuhkNWXumqQERR",
  "key11": "45koqLaTDxRa5bs4usUhXxhssnC6X9RMyxo8zs4hYinfwncDBZdjhbsWHz5i1pYQm7soQDiXXcgiZ4bJEPL2VgZt",
  "key12": "2t2CtT55j7uGfguxXbhGA2j17nMYZPtBqM3QHBBePDqNurPSXekViS2ZmULpKsa1fQb7uhLasFGVvFgwXrdfPdnT",
  "key13": "3AS5L5UcTZS8SzMyjpoJQZDiEHoF3WRnyVo79bqiZeeyuESAZ9LrgzkL5fBKvqUYMzuxXENo1UzREbjQ77vnXmSb",
  "key14": "4ESzukPWYWGKycN1PXVgLkXZXp7J7g3ZvqaFagu3hQKsvH4mFHqWBh1BFNRqmB567mrXrWY8mrNDkvg1cTB2pJRB",
  "key15": "HU3LsBLWv6V6Rhcu26ADTMnZhZRWpeci7fmpx9JfkLzBsB1wsoPtTNW4T8JwpmjtbxubSk8m7vxKE1EfHEbQcK1",
  "key16": "4ivTGPzGx1NRQDrDVGPVEwN8o4cUtPBD4AswGXhxU8oJEpdsSXvFvhjWqocmZLRhRd5Uj8AdPQHh7mvUTpWBJdHL",
  "key17": "4fTGxhmb63Av8Y4A6LahTXEt8DqE8qADdvV8dS4Beg42z7G9dondnPKsGKsdwCUefERWvSmgYrwXSSrgQMYMLsNH",
  "key18": "5vakNNKL8p38u5JcALXEAcdujKQjk8yNKK5gjbEDYgbwysKiGpnBWCUEaioZswXnSGqi6ZdgKYBhz6FeSSdYbrSm",
  "key19": "3MNgWsZPQs31VBzqaAAk4zwDgkBwmxAmtMPtiLFhuB8hbC3fkK7TEJxYbX4Z1AQhjvZryvgSrQQbNFWiueAQxUVe",
  "key20": "Mi3wypWhGtD98ddGcF9CWKqKZbEtRYaDJ2WWMSAnqLwhA2EBBMo6Csk5yQLqwFAMo9ChQJGB1ncw6omiQFe7aDM",
  "key21": "2hiAxi3iGBxsnYkN1tkgMskoEvq3BuPemtZknmpnzEgGZ9iNK9F46VKzyRY29o9v7o9S9K7tWhe4Yge6AFR43zVy",
  "key22": "3bveNDgJMCAAHUxC2aSEHXXMAr9QUuXmHkSYMT7USaLxpBCb5tVNuhogriAwfvLs53uug6wDmP9bkMxfq9HF8UbQ",
  "key23": "2JYggL9WVe7pPTVGAond9ckwDazLyeUhm1mJi9TJLn4tThkPx2aUNCWvwS3oNz2S38oZZpbSbvFVAKcktG3qJpJZ",
  "key24": "4zjnMa1TqPvS34HMRKB82Ja8J7C8Gvi455tNd4PmDHN4MZCV7o5U75dthAwz5uoCigXMaCwprfssN7GmfB7wEavH",
  "key25": "2gauSjcZoNf49u3M5g9djkzvAjXv43uWU64WJj9UrkqFEFcaqg8hDPnW9r1NDh1MHE1Um6KtHpBB8KZUFQoUKGex",
  "key26": "qxAX4PoeoV5XuimFkr5KQxTAE9Rn8JQiVCJYgcNLo9pu2geDz11ULmRK8SZFog1n3nfV9zskQpBHCyNghB83T2K",
  "key27": "4Ak8vmZ9EoNnr7ePHgxPUVZuemzS5DsdY5Ev38TDVQSUrirSFYohCAaXimHarE3dYKDpvhM65y7iCKg4GSohATwx",
  "key28": "Z1oxxAFKHAEX1biNX4AfQhC229LfAgfmMvdAm8LNSVzHx2gAzZnfwueUS13J8QnMgfd8bSkJg37bQDbueGF8TYW",
  "key29": "55KFCrnVS5x37LwUG9uBCVdGUJLEnz83SfpJXVsfUn81XnpXTbTKGTPjiQGmAYGasc4y9HGVGf5PL3xXybvPNrYR",
  "key30": "2GAeruZkZJYpLimvugU9qrjBRTRiL99Nx1zYoMjzi9xVHGCXjBPpoGKVLxtDQfm7B3eGXMtjWC2J8HXQzvJVpE7j",
  "key31": "2ht7W1137HH9MahTG7g3YFgDtkwmdXWyJo8U2gmSAs5evzi77N5CDSZpmcBaSvtoq673ypJhk4seg1VMwFpoZ2Wc",
  "key32": "4Em8NTjm6QjVzoGrGXrZv1UHg98SSdfrA7s3HRX9acSjnt4yhnc1rP9CfB8oHoTPTD7aryaeqnoHFGRrHXVuip9W",
  "key33": "2VsrSxn5ghgdBpLmPm4uJ5exYyYdJhb3867PfqEVGKGYP6jPfws3JmxpvLowUDoh4a6NnQ6GHH1PRua4QaRsqC9r",
  "key34": "xjiBUH6TkmJe8KofnWKVh3qosihr7KCtghczio5p1951DE18XnKcBGHfJ57p81h57JgNk5vxgAKXmQfFCoQ6HM4",
  "key35": "5RV2EJc4Hpocw8JAypp2NDtzysraDT6ngTqVShAC7snJ4qGdCr78F3w2Z1DsnsP3BGhH6B4beK9txWNGJNQp5upD",
  "key36": "45iTfUzvE7dUECUdvrWNqDzbnsJDiSUGq7AVhrXhGdW6MYeQ8KERMb4mcLoZiFJXtua2ik4mKRJo99pGgnjPpTTb",
  "key37": "2Kqw2kxDWsnNxX4k5VPReu6co1hUSwEyoc9LCdwDHtvtJBAASgYMsvVrijFDNEDiu4TU2oqYJgWNmyue2rv8URpu",
  "key38": "zsexoy8wcnMhohC55RjAf4t6wuHmi8TzyE9LsKy8jFu43MbWnJdPmDFE67fF6QjdHddiJ9KXK4bVRAntivxMmMK",
  "key39": "3bqkPjANBBZKihpW9dox6j6MGJHeUvh3ZWxrswYWybRs9SM3svQ8wgDV5bcdmHShcay3oRr328rhPMp7dRz6Lxn2",
  "key40": "5aMjbtomgt7maaD8HDDmYqTSEnsYjyBEbTGnkV3qR1kkY48J8iaFZbDkpw1PRiZwSUPgCEVRp8PiemNP7N5PojLK",
  "key41": "mae9mAF41FMp96gXr9LGHVyPZuYHA8W4ixCoLhNDfcVYfzXqvy25VgtmwcM12suKn7c4zGA8gDPhymJ4uKCu6JR",
  "key42": "DLwbuxiiHkx7eJGu1PfDw135EyA2qsppNdUYu3CksxX6pFwsmJ7XE1eEnJrC3QGaWCtzo98ZC3H1qE65cJ1FPZP",
  "key43": "RBTtupLJ9tk4qjmyZnHs9cyooE5RkFvbdQ61DcmURs2afuWor6wGvxBuuUGLS9BbZ1va8ZqxnA8YVASZYayQn7b",
  "key44": "4d7Yut8EXRKuuFvp2M7t7y8vJ7zk4XyyqBbeM8UnLh3TwZoitoT28yT8qBJ3voNshvrgpdnxPnGkPTBrTC7cRpWS",
  "key45": "5U8W4wpNc7QC7J74JXXR83bHs4bGvxfiML4z3MEe8jhheMhRPKTFigtjrWe3MziBGzcXZXkUEVFTq4JgZuyiqAJc",
  "key46": "5JKdtpqd2XCDr52N4px4R3zj3DtkqSMBPzdAr8AXPDMV9irnYoV34pgnB2Nzc6onYXXieh9XaPADTYAtdEb8UWR1"
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
