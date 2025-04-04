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
    "8FmztAAFzsqPa9WpBLet3qzfetHEtHRcy337z3AJC1ZkjAqZErHEazTNF2FujXbNuVjurjGf8GuT3k9D3DY9NcA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RmUgFioFD2P2hMz6g7LGfVjkUURi5c7iMuDB1L6fb4v1hcwWS6vYwPG7PVhFajxtuEh8yoe7XZhCkZcMgqf33bp",
  "key1": "56Qp42K6NCnWtNfBsoA1P19tpCc5k7L5c4RxLijnJj4xaYRN6htBMvAjoH5N8xHPUA2PwbKJ61Xvi7LtYcUh9ZEG",
  "key2": "j8uGaJ3fS6fbZAcBAwRT3GfUV6fx64YPQen3sUrUcfXhmA176dX2qoVgCrz9Ks9p1hgJtkNNC4AUYL9fsH9b8Bn",
  "key3": "5cBe4ULHRBNQ5dhfBgZdYUuNBGGdwpvnjnpCt45Tb7CssPfhrF4FAYZ1kP8QCDFzJPXdnej1LyEyYvCrbe6F1egY",
  "key4": "6z8CAJvNoervpeUGzm3BYNr8Rwf78Nxz4DbgQrqbrViMf9iakcqLp3pTMzzfvdsVFTaaTi5E5KH8KVLcrnhGA1b",
  "key5": "oKN744EwrnWZp9qGeywgqeJmbsBK6zKV8d9YSjdFQrjQdJjPAVEaec1c2w7zGQXB4odsyWJeTKgquhLUGCrtAhS",
  "key6": "UrEVJBPiNHMJK7HkcxSdu2WNUyqiHif24jDEXvMHZRuEBMe14SMttZ1jnXUZh8KiERMFb1fyFJD5YJAMtdVRfYC",
  "key7": "5uCKFBoyBEawToy3L81kiKoaZCfphGgCtqd6fa2khvNV4H1CBVKST8zMUeQVNEESRSWKi7QADSwUgQFvBVsndup",
  "key8": "2rDcCEptqx32oQWWdEXct6PNgVtCALxjQTpiaVsvY5eoyH87fbvL9vKTuq2Dj3dthNLTyXNWgtFCa2pasWmX7w16",
  "key9": "5DxeVxKefW32HMkcTwEHh5JKDJ8R4GMG2hKaSx7Dq8W3RQSnW2wdpe4as4vwUQS1Hfrz9XwUXZLjLDk7cELCt6cL",
  "key10": "353jEWr856xKRYmmY7j27ddW2vz7Gvixq2Wbneu7DiC4MeBWMncFH1KySEY1BekRsZee5tSt2sdcygRe41HSp9UY",
  "key11": "3FGybNY8bmkJFPqX6P99JepJ5z7P4fVvjWM6bemdN9xybYXTqVKsbbBQqJ3WphUupCtZhAMsuyfyTKuJFJiuGNVX",
  "key12": "2BmekimHm4uCYKn3LRCnZ49JrKjGti2KLP5xaXTLUS5ZqSiDMXmKAYYQKhzYKaHrhGJLePSAB9tHbE3fKfyJqYGR",
  "key13": "2FFRXreAKN4Qo6Er6ogkhfR3vh8JjKahZutmY2ggi5NV4SAiiYkGTXniXFLBy8U2YciEUg6dnoAYtyuefkZbPSd9",
  "key14": "c2ddBj8rAFyYNHU7LSwoqwMwxRF3spEXUGehST9nZ5eretchrdup2HBgmVHrxFV7CRKz7vu512tNHixu4M4CZYh",
  "key15": "52BMZAXaFckeQMQWqLmXhzH7BkwJP8c4JUHdiwQUNXu66goMBvDPbSufpLbVrCE9u1goNXUTVbzVistceE9e4KYh",
  "key16": "4kBPvBS75CRYqPYQGfyBQ74sHCjy5V14Rzroj6J4NV6irnoqdSv8N8XYAmxk2JpzsDucYPPvmCFmEUsPFoGzUTXT",
  "key17": "2hbt3HvRv13kqsM85yHXvXZUiyS6GUuG5kME5gJotmSYfcUoXtduTm2DmG8YnX2QX5PxaicuLcdFGiuHTB4aiuMX",
  "key18": "A7RvV6hM1dhRMjwNxQEXSM92cRPGTdHxrBSDKfsTpJcxUKMVaiMUMRzmkYmto8wFfFJhZJbukBXnxzcGrKFgG7D",
  "key19": "3VysgVBdNUeypJpanLECszkja54L58ykUuwPGPoS8fYLvkbeRuYPKG8RvSAwRAVkFzRD8yx5irRdKmsiNqrgvsUw",
  "key20": "5xBof1eEpkDQwzNX5BPjU2xDuEniTKMS1qRjmmzZrntBcspVRa1hVMEce9T5D6hzjJ6Hri1uxQPDzW1SbrFRQSZh",
  "key21": "2DXBjE9oVinFxfb1vvrEqqkLAiDsH9abvShaR1NSMabxBS1Jsx9qF1WwKEhUCtYh1ze9Ups6Ahycm7v7FfNPNExa",
  "key22": "5j6miWgeDRoFzHNmfhgzd38PKrnoMoYwLAovPHbE4sAZ36JEM2Xx1sMA24tuJrNPGU6qa89D6dviGAJN87RWBxKZ",
  "key23": "66Pk17xe8G4VDDxnnA2JjJVTHG78tRfWT9x5SxtJ2tRXrPHkiRLrjny166VrhuyHVxz7bTLMGUgXVCP732LBZjtZ",
  "key24": "jpujpTf6vFatGqgRwh8SeXv3mwzFV8ygtyuNdk5Du4WnLupnTbqUWV6S6biDdQZb2ac9yQcMsEbmDfBLmhbzkYC",
  "key25": "2VToCbpJ3ravJvKudrLPsRPYgbUjDzKUqoD5faeoBDdoZaJxAe5N7PZGpwxN33pEEzai9aqx2HzpbgXCxMxwmY2P",
  "key26": "2d1N5AFquhnUSaeYcWYtTJuzNtRZtuf5sNZpePho6hoP9cFjbdiJAMf316wqugi3VZbWZG7mDDJsi1w2wEkUu6DC",
  "key27": "3zzQGFknmY2FGRBJJHyhEDFCeSswQegEqTTU4812puJjeSr5mfu6PvJQdDFmRqsaS6NSTb1WaAZ4qUL3s1Yxn42L",
  "key28": "zxm8YebtU9aY9HJTQQ6c4im3b2kG5KL84yoU596ZBD5u6JTaki8QV7gzkhsDugNPwCRyT6jLv1J3xieiJnveJqA",
  "key29": "AfMRKwv6WGq6zMUVmzPPJAuhEdYDF5o7pcsTaztN3F5CHgCtYvi8LrhfA9kZzn781qVQcxBBygDub1v9JW6on2r",
  "key30": "3HxKurBN7VLhShNaY5X3WZ5kpKnrrehqx6LJSDWAdnKXJJx3qfY1v47y5VHn43YcAEZbejF1V7fTDeecd3pQhMdg",
  "key31": "2FmuP4TP1b9EPULEcxGjfC2CnPVQSgfY8gDtVJinmU8Mvico5p3zXAYhs5hHDetrGrqcJ69MX6vRybP4UH98Nij6",
  "key32": "2V9joNQHu99jDvdYAKx7ganZRzpgD56oFdEJtXeUGGV4CakLZgTrDg3EyfE3fQXsXZbigc4ykU5T1PAtgZQcbZdF",
  "key33": "3ZtAB1ztAxmFzdBMNMbJLUCPzs1XXby4GXdhzJtndB2EdLETRVyKWiGWxZjSVYG4QuerntrtHrFFaFVVMkPMibT5",
  "key34": "bhifR4kS5BStLM8E7wzn59WtbaeyCBWc7vgUfY28aP5kFYuubuv2t1zvQ9wLhCvPWLGtDvyDCSW1f4p7MHp1AsB",
  "key35": "4XyvpT5wJm2JAWF6wTMGR345bhH8pRzAUFSEYJ5jrq7ki47BfH9DBDkxeMNukGxTqRSdcUt6iYMMMTo9Q3i3xa5x",
  "key36": "2umAxbFrcA55ebENEEAHp2PpbhDhrknmtYQQM9jNMeT6THoM6iLvh8jco9bqQaWPK9qjtyCFaEhK3rxXvXWP8T6d",
  "key37": "S9uoMzXucEfCm7xQ4ndPxiphRfJaqVGYuN97Xxhci5qizv2ndcjske7tRn2XJYNTus1ZREAz7qYdELt4S5kSX4Y",
  "key38": "5a7G3RTgxWcvibJhZNwagHixtvPL1PYNCCJdocFBezZjr2v6NvGpkbjhw2pK7zmGMEV61UCPsek3k2CGJWRyLctK",
  "key39": "5peM81YHjsu9k3ErCjK7FZc395PbUfHGqN2Pf8PsHG1ZvPRoVVfohiXrp8YkoD56x8ZZeaenGZT2PMnybspyFr49",
  "key40": "GBVrnu8RdMC1MD3FdaqFXv8sWNHTosFRKo4HFFQRwXQwqovSXHCDMxbX65mvwJGDvMKyFummts6CqRDewwCiWP9",
  "key41": "37osLjFKiUfPGvJX7CsNGHHTHQz9MASTspidADwcaiwqJscPuCvT1VSA5Jg5bvrjsyY14H7WLU1kGPFkpa5YTp1T",
  "key42": "56mKtLZGW4CsQUM3XVAsL1W46Stske66Z4nd4mHywCbcTf5PA4kLFrx7nXTm8zWy2kebUC2zA7XXUwJJjnThJk2e"
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
