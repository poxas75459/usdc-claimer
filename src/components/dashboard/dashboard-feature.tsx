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
    "4pXPJtVdfuCna15BfdcUtCoUNTMno3PqDN4TgeWdY6vJcmpW5ZGXPtAcsw5vr4UY1xE4YD16DdwoWtyE3mZxmmM1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cKZRPTjbK6fyRAFpqqbEgHi4GYmxRCBfZsdAS8My6WzPzqxAuhKiEMH7zB6KGp9mgLyi2HhwLG7PCZ8A8tWJpB1",
  "key1": "5Fc6MHTL5XHFGiLgNBCa2kgvfK9qyufxT9XyCVKRuKNuWEWZR5JXWJVXG8Z5ZPXXoaFW7DMhCyTkq512QjxVLCkK",
  "key2": "5usKDbXJ7iWJUDjwZwAd678icTJV7eV8bbPVRfSgv5qmwEFCXCEiXFkxNMgDv1qopwyETDyydw4UsTBuD5h77oCt",
  "key3": "3UiEhdpnpaLu7GXhxWRW4jKFqHFC7HqPNwFJYKzVHzphFBjTFwzQUrZ1pUFMC3ZTTfTjqgeLr9NCgMk62BDN21CQ",
  "key4": "NEvsGGYpACRv9twUjdS742xAxTNHhwvrf3jDEJjv83UeggDaTMDLU2DmgVstjJesWjwCCC26ou3vNAtYbWjrFma",
  "key5": "4hgPjh8Ke1DuDsAHRp7Uh9e2TBKJT7zoouHwRT1nRTTNkUY5zYekJBsYFQ2Ux2WBTb57bKGEMU8gQNCjgBY8hiNd",
  "key6": "gbR5ZuwZpwSzffXVHCYYiUMekUrGJ34xHCTgDpy4YGHceVEAPCgq85bGHnm37SJybtDcq4i4bh4JkRJe7MXp9pk",
  "key7": "4ydiz6U7cfGYuMN8mTy89hb2xL9FzZqwLsQ2RvGwn2aeZBzrAgvTYE1Lv6bnLfGhuXmFwSdFdNu3Latin6CCAQEG",
  "key8": "4KKVGrjSBsbMPMyXuMcVy4JettZwoRS3xHvhDxxq5MZbZfkdXXkb24qS1wm9orYDn4re19jBtNaVKhmM8aHpqTi",
  "key9": "5i1q8DRRkuthome32oVomnAJycarnWWfmjur5aVSJurwTTgpo8tevNSKnpAS2jx8ahuj453yRhhHKnN3E2MryinV",
  "key10": "3n26BA6PwpMkmNBVU3Gc7tqr4VFSP7ncWFZzTd1tF549YY2u7V7Hi5fTmKxnmvCSSsWvUU5a7DET6FA6TwgSL15x",
  "key11": "5vhm9iP6Y5r6cQzj97Y47cCtjt3PqCnjm1fppwESm72ydwWX122E5kCUrS1gzrQMEZVcvjPY6FhQdHcbRQiM1ACZ",
  "key12": "2iqXizTdp2ZWEvipSDPRehHhYsJA1V3ns3jNEsjfd12rCmFWs2MagXyeYjPZc13ccLTpV4WdFPJBWxz4UxLSAEGy",
  "key13": "P5JjmwhP6a9dhr1LLpdZaVjcNzvLhLwYzkzuLpvnz6B5UricrMXVeVdGAZnx48cRRkCAQYCuEZfbakxRUJXW8k1",
  "key14": "2yX1eaiCTb9CW7xnQr4EbMo6uRCzfeZw8hTPqXATTXWcvoAnQPSfZGepXRkYPqDifBgZXkp6SNGDBC8CkC4TsDE1",
  "key15": "67mCh6gGcJ29oLA6Zg1WHo2JfWyyPz97vPRbavetCFS8dCyBCXEJDCeke7DB5LrNUFQB2SqWrMojFaJcR4CvjN5Y",
  "key16": "2SrovX3gtZWC5g9HfRqWf6frem9jutmVjujLsznUPrwbm3nkesjE3YKZp18vXYrdwG8fCeUi23c4NSiPES8PUnvo",
  "key17": "2CPrDZVwBjtQAy4JevopA1xvUnhXJNknpYMv373g2Pz1PL5VbQs5jvR7yEmakBAs9bdc6GQF7KXCbNxjA5xjm95T",
  "key18": "38C5rwTWgD3jH5qQnmqUog34YUNFkHnMsTcQiLzonuBye248nwijq2suyagbibRLEhdU7bkkiD6miBSGuAfWDtHv",
  "key19": "7hMTjhp5zXJCuZiBpWqBkGP68UcnDrQ7ue8kbujuVg2ihDt36PrG5FXo9HTEtA4SH9vCXPaoDzExyAbNQgAp7sf",
  "key20": "36NozYmNsfdheRsKGA7iZ28HcMX6CzHiJz7MNjLbyFT6ybJEwCip733py2nvgugYTKnWBc3UrNwRXt22Fbu7w8Rv",
  "key21": "5DAEv2nWXRpsmp8FLxzHu8Xs82JcUMoAy6GhLEZfyNSbChQCVyJqdxCpW4mkf1AtCdwMYnNACURKpxkxU6nDLxhh",
  "key22": "evZMWvLPKajEv85ZsRuJ69mpXkAP7j4CBLpGNMX6yVSDVUbGNpm98jxAsKC4gQbYS3NToEoUUJR4vWAZ2SPM4od",
  "key23": "F3QHkFPNdiw4sLrhidd955E1KhVnHJvaAqEfSPAbS3jweTAnQqKgujxAhdFZZCM7WFMKPfF5HdiwoWozDz3B1Je",
  "key24": "53xsqHAica1XRdbnde288dgcLQUZVvZBn2AvNDP5u49MqH9SHQcowPGhWSArhxgbySW8H3hsrvb5N6FhAULvfhU1",
  "key25": "4qsQXEFuWTfJy8Mh6pAMifhuE1xsj6n3SankTSpj971eN4FPp6aCbY5ApdHfXuTCF6bu343akmwfTJNLSUEzCC5S",
  "key26": "5hKjg9bxfAEXNam5BsaX6oY4gNkiT35S7fiXQ5u26RsXvHN4PfH5uWg1wX7hnvgzK3YE2K5i1tVNRt2nCUkagPq6",
  "key27": "5ttE4PbCeYhvDUSE3yeN5NnRzDd9uKKTM3Whz7Rm8xWiqZEDtWCgdCxRKiX5cZcvQ9N5fqgk9B7wL72gyhY1nEPw",
  "key28": "RLbbEo4JjMHHwCMUc6h3ziZrMkHrkDuoQ7aUPhGB4CqUHCNZbzvAEhHAu6u6Veq5xH63MekbhSYYbxfiYSHhw4w",
  "key29": "4nwX6tEKFR6FFqNciWr4xbNUQQwq5wZR24uEsALFM136R1anGAdDa7zWUfV38FFT266U2HkfheMpSZc6pv84cbny",
  "key30": "4qP2AgHVLcSWaG23JAKJW8a5AHWakHjJw8v2jpGnD5VKNVX7zsPafeMud4e2hczXTiRhvHpD7fW6BhTBfaoEQEiR",
  "key31": "RXvczWDFHatgvtJbui5CfVz7zkskKEFeKQu6x2dWKXs6toLmghSau5H2cepjD8pRC49xj6CzTNqz5fTqaGzgkRE",
  "key32": "4g7JbDy5sgMjQeRs3BuDDezorkZYkR7PtMmDeLHmAeQR984LYJHrwyRHTyPvbUoZX7hzDWSrQrAUcYivspKkXTU",
  "key33": "281HaK2ws1SMRijAGRTBg4wXHMUxD7sgRit47zf58mdcu7f52VFta7vZThkmquEZTk6f1cYBKJUW6vTXtsCnuUUq",
  "key34": "bbW6DNSs4V3NLFocGpqB67CaMkyes9u3PPSEvZWwByvPYKY2aGR57phx2EzF1T7MG2nT7AUTqRQCbxTCr2cgMKx",
  "key35": "n1KutMX237PjhHoiM3smrfPP1DtxbNYU3XePbJ7dfKHGacJq1BS3uRQVf2zd9Q24KMAeTbW826vyuG3mrATWrCZ",
  "key36": "5KtxfFGy3SPDBFCNeEsXPZzKmYDsmu99L52AcdNrSF8gZRV8MDQiRyARHZLCyPqqskW2bDiXCz2UPUeM19mGf9Ek",
  "key37": "5x21BrxTqAYyVNLnTrkQzD17xfTYk4stsjxpCUZVttyMnNmt74paRkheWmZKWt9FmW3dnXdQgt53NRmWYBVKpM9K",
  "key38": "3bASnV9qpzYEYnw5KSEPgwWx1wa4HNbW9xW2BFxfEeeDjJwnrzv8yzH7hq5bNcuwL4Jh5VHZmxAYvhuXwhBFPUjM",
  "key39": "3355pWjE77ek7idwFefEPWZjqw4ML75tQ51UAZMHHm5AYVRqs98f39eRem6atFEMZUVGrZZg8wnMJxKBdGMYAbrE",
  "key40": "2mAMEQ9A6UXsykhwyvkVyS8UcftYJdwtTZ6pRBKyQHAW32rL3P9Pf8kUdh4nDdMRF4v1QyAFKx4eb3jWXESnZqnv",
  "key41": "4tQHK5qz1QhiDqeBt8Zi6c62enK9HreNTpMcDw2KswTCc3aqwh43n1kNGT8ytuznccXpxHGN8ZTaiHQstZqP6hAd",
  "key42": "5tKk3C66cMGX81Fkp7AH2X9QL2fmU6QNCkNRAugQPbESfzyALCGUJGeCHHez795AyhzcQGw8Nw9bSvM5ZCuNP7q8",
  "key43": "bEGyxAD2LKs4pwAhEHtMveSXWZpsKFsBVwP4FjCj25z4m8mvxdAS1FaMnswi9R94FpS9ushtYeCfDm3uWd17YDw",
  "key44": "5REYdDzmZfVUpugSAxVtzhZhhS5iGnbWQHCjo3XLoEN3kdZLiXfhCSdVZqRFuy8dkTwf5U2fAZVAK2X9TYuGPDDX",
  "key45": "4SEKcyxL21WqVxft9q7ZLkKCfjc3foh1jKoV9D5YXxbsoZgZki92XQ84wQ4Dry5RHn7hEfL8ppyFGQdzaRGxT23b",
  "key46": "4tGsu3b4n2yhfm17eGWK1rpXry9RxeQNx7CJnJeMuxcERMqJsZF7QDRiRmLp74ALLSRwTeecsf2ZYNsNmrBgrKq5",
  "key47": "5oQAZ7MR3AYxCtHqpjHcScjUPUVoUvE2KEJ3oCGJUDCFKzVDNRCWzzRr12P9geaVcv9TUddnjoeDJQgsnoB3p4jd",
  "key48": "2yVjX91K6ULdPDcWFMsxJcoq4fMSYhJAbeR3e7VoQAeWP6tGcM1bWN1ngshS3bCSADHgu7MKF3wCw4TyvDRFwosk"
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
