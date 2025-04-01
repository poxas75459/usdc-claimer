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
    "reitDYLQ1vUyqfrHgifV2LUFAwZizN5tnhvPiDYcyvyQSq6iU2vrWQVKhUEegJcTWkYvKQEK78RYdsD29hKt61F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tC5XG9wZjfrSBQie9xkvird1QWkPFkjTBLekqDDDDAbKThmHYMBTjNjtiakJVrQ2aki6EZ6rw63DJ4auFkxjnKT",
  "key1": "5N37nqKVoxrFzrPuw9iwbRg2Vw5WviPaVS7LecUZXdgyyaUyvWwrKW9N5CvTtmfWQUcbCtpypDgmi3ombii813tp",
  "key2": "4o5BPeKW5Zp3MNHeVscQmDBsKfuMJcEGEsUDbDBjAFf27v3aBiAS8MQsJUaJCDKk1DaJykAD6Qog2PJEriwVxb1q",
  "key3": "5DnXJWUHKvBMDknabbXKXEjLUVWEJVqgE3mE13yXB5SH6uUrs64mbi2ovx6grkrLPic5KTa9i5tHZZS6NQCLbyAP",
  "key4": "5CiG3yaSM9zmSip3oDbJLseyUJ6np7JthxT69KjFAyoE2x5HirtTBUZ7zW9foU76tBsDaCYvapip7bogxPmVZxan",
  "key5": "WMpWyLXCV1FGetD8EGCPZ9AzBy9mi6oxrrpbF6tSc2Z3pJRhB5oG5YHCpijhKNHd9A7jS7QRWZSrjumAYQQDjsK",
  "key6": "3JiossvDtPBfDcmfD5FRrnuh8dWd7wRA7VyMH6pjF5CkdZ6xCVtpBxd66MWUPwfoJvPi8gnKJdQ4Jma1Lb4QZWdH",
  "key7": "m6pKUoZTvnu1cvFtEgaSMNrTs2h9uvEVCX2XJPBrgxE16KbHTesfQjK7Y4Nsz1KvQHjz5PwprNa1Hx3pqQ2eyaZ",
  "key8": "43C2Wdy4Vpb7GLfz9QXvZkPeZWaJ55ZykkPhcY6pKshqSbu7vqKSifU5Sn3vDSAeQPTA27ESRg9zVzzTCv9VcDx",
  "key9": "2ZYhng83XLighk2vxmJ5GUYTFb12LkXfSrunEwwGkudRKEH1bCbwSreJE6cncZyZAtS7SVXSV9VFzf7EU1RmYhe9",
  "key10": "3GMSvnfTRK2zA4NLxyG9hXgL4vTNtZwBgJXCxWJ753fYmntCds4AKgtdyecasvTgjsCnHiMgDvz2xgUcDDJAanqi",
  "key11": "2Ej46qLSMACJf2K1E9thP8kqBwBsjHA54c5AD4yFFM38AChWucbibntXesUTmCb73LyNN8hkjmbwc5p4K5q1s28U",
  "key12": "5D3rjhPU6unuhEoANLHerNoiTa9sH9oBhgTmXNSgGZfa2nBctYSc44iiQHCHzuBS1xni2iFzReVWkjGoxh3SJUgz",
  "key13": "5RiKAPoBwnsPAEu12AWqSbZeyYdF8YXBB7PLa36Bv3w8GQZ6GfnWjmwnQqLMHkwhR165EW7wkqykJmEEcAVvAfFX",
  "key14": "PU5P8BhK5tFvDGkoUvXWt33kKMPnWkUXXrffAasiPLKHC3RTwPbMqLkdjh5pXP3PuT95SPAdwWqmqWQpgurmhaR",
  "key15": "63SMuTxyF6VAa1d2sZRJZXLCkVJXJyHrYBZFCBspLVkMc4MWCk9iBraa9r6iKq1zKFZB5pcB3LYFfGGEQhPgLzGK",
  "key16": "3dTu34FUJDNsWCCBPGTKua8V634uK3prYkDJxtoL7fL7F82vAbEbqbmgwe2XAxh8Wy7gCQ57RaVXkLD9bBWpJTAp",
  "key17": "3XeYXCkDsVLetoSLGVoQAWxerNGpXiM2WL86FKERT7wSa6zPrQBDT1Z6JNseuSHzFTRHTyQbiH8n5tSyeWUZ1f96",
  "key18": "4mpENzUkepvHPZrQpZkuZtjQkCTdh8QgmXEqn3EkC2kLGMKyJWV66Vzm9YjV4FmJP6XJ5w7thY8yvPbucCbBdfeC",
  "key19": "2wQr714x8jxenir87Y6YZ1i2Zz9H4LE2nhdiSLXVc2LziTPo5BzjkmRkjuMpM8zfKsARvZxRVBEUK3pr3fawfbBA",
  "key20": "2kVV8CCMvXGSYknFevoXBpbjiCKFfU9dV8E8v9YAiGeGeQxY5QnQuXwZGbbgHGmqwna84kbi9wo64wscVhacq7Tr",
  "key21": "2DyT3xhKc2xbiP8tHaHvounbuWsj4NoSYNFVZLoSieizGzsYtzcRJH2zN4Es5xdDuW28Cy6ppgsDguifrgUZ5bX3",
  "key22": "46D6G1bKnspXnmvQ3zhXjX25aJEFZX3u7kEXzGZjwcQKewM1d9hjEnqgzDNLiwT4VEqHJTR2RRcSTQrbBBbACtZi",
  "key23": "3eTz8PjFuUasmrVA49JdjC2Cq7o6f9YgbasB7U7KFwdXeuQ3Heoy349SdhjtHsq1ZzayEaUh5dANLTRtCWXLgNJQ",
  "key24": "F3REH6ErAQKauVTggtZgsASCy7zRoeLNpHFNq1g8kNBC9Uf4VhUKBfoFQ79G4EMuKp5CDJEGeS3rqGQEhYVh254",
  "key25": "57VvLmeQpwqnEYGFo6j1Ecu7kMHfEFRTBSoQzLirhhV9hCtFf7pcePLxBQuGN2FNBZVuoGK6tcXVa7QT83PEK8r7",
  "key26": "65kWuzPPEUCfBKLVHoxk1pFe9vcfc7SjvL6q1An6hMHcHCGkCTJCZFyb9UoQMFujKh5TFwTUhhhDFWtDVT38MtYj",
  "key27": "5KxU5B16b44wAM1giRuS9B6wQam9ZBxqFpPo11uRgxyhKDELK2Bf8gyjy2wVREAm7FQ5nQcbkuuker7QDreTcmae",
  "key28": "4RNV7E9v2moU7A2adFpon2wVNZ51WZrKhDN8pAo6URLfiMVL8WDKXjHtkWfDU5MrwW3gryJmjoYRszmwh2eapkdW",
  "key29": "5Mh6cBtNC6nr4SAeGyQTdqcSFVjagfDhDqGfeDENAZQL5Z3ZvZX6GAkTYhQ8do1qUF1mYRbQKL4PvcPFcRXU1t3B",
  "key30": "3y25cEZnnVMuPrj1jHnaZXj4P32XJzAn1P8fMPPq3Cp8Xd94dE7wMvc9QUcMbdnbfgGgQqyeGUSc6N7uWvg6kQkV",
  "key31": "4PrsVAUxLb5mtz2skekDche8EkFkNSNDRVe3PA3QbEjkDJRLiErx3cBuLxLrkMUBg6dbKn2GDRy3GwAueZU5t6nw",
  "key32": "vMTf3W83Btxjee7cyyCYLvMTSPSwjZ7TXWrbPPspccBMaSiixBZJtYX8CabDVuCqnJ3pzW1YWMQxS6ef1LaDzjp",
  "key33": "4ZyPuuFwh7K94XSN3MCqrUnju1nt3yWXribFDm2pN8wNTz6qsYLPFVnqJsS4jbkvNiUW1vMo89tLV6iuUZRjdoQq",
  "key34": "56VCChTL8d2hncDqjJWGTdmrKMcQ2pFCjv8tW54g1uvMP1m2Hj4tS9rUTkQfMjHAjQ7tUR8YUQqdyop3G7i5n2UG",
  "key35": "17kTtHBc5YuGGSsXjYG7DPMA3WcBukkC4CrTtKkuGH1sEVsiSxWHZYLxA9xsN2XgbZ7uJg9q8pAfiJxA3icnaFP",
  "key36": "25o6uLnkfjvVMWKX94qP1bkerVzhhUokLR7hBrnTdfH6bekrJJMpvLdCRb3y26b5P6L9bJXj75f1Gdr2ebQYp81q",
  "key37": "5E2r8oPCTr9HUrnAy7DBUfiucC1DCtQzbbFDdK11aABeiZqrsxXRFTimh1issU6pb9MP7eMceNhD6tidVi44cHUN",
  "key38": "3Yi2msuLHaSow9NMv9cWXH7uJJiYjzXtH5g8XAnyQnAoiGcFannic54vN88FnYKjfLBbJpagvoZ7HQp6u5GuNsqX",
  "key39": "2EAMNvJnUFYari35cvhHcVrXptWfUY1y5a7ZvVD1bEGtiPxgbZt5FRnheaeC2yyam9Pm4dg7yca2tCq4HEKLS4Ke",
  "key40": "5CbCQGz263WxQZTfS9QLTqnGBHamtSjAMZq62xcxreuiPb1cu63T58Fi2xWJmhrm1Vx4wfnizA1JqFsvcGpMNm1h",
  "key41": "2g3Mnp1ckYhn1WttTvAF1hfBRKzavjpXbZn57GqasCD1W5duJVVyxWvkUVzoksy9jxh3ibHKsunMBtB2EAFnZzxL",
  "key42": "4S2opkNnqRfRUCnoRbDuSwbMTU3LyEPVodZc2B8MJVHdBtWSxVrFnUUKtytv6McmpdZCe6C1E9R3zNtJqU7iogr4",
  "key43": "YmnVX6aT8fhiLLExqDNzH1KLA6DaLZj6V1RfLDExiHDAZCPoDsVnAx7mBPdzgge1KKqNKWj8kgeVwuqF44CZd7o",
  "key44": "nqez7MqrQ6gZH2RHu5tE6hqk2ZH2GtTmnGM5aon9nUQPzXvpd1b7M8hgv9aHWruWscUy7p6cwd7FJcw5GX9Hbp3",
  "key45": "4gXxttUkQayjWDbzuDEdgX973Yxc3irFt9Wwb1kEADLQDJ7Jb59ojaFVHYW4f1QpsrtqcA52K6m4tZ3b6uK3vZTp"
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
