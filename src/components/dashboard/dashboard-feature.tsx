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
    "G6tcDehZFpcucc73GejVBLPjHHHQNK3cCE4foRFFfhHyUBckqE3BhKxiH49axV18czNiVPnLWvvTsoMHVMFnwYp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zCsbcJGRsQ94bJ4LFavKdX6wNx2vpZ3MTWqgR4YsjfPXn48LLP59cT82AukZcNqyWBzUvyprqNCpzUbSaZAkz2k",
  "key1": "5vsU6J3BmZR4znaeALYyUJmETUNSHHJ5PVqWM9MFZhKJtK412ov722RLyGcVb93MTBeC3djrzyo1zNkvvTcZAKt9",
  "key2": "3VtGZpVV8UGbWT9PoZhRtwqcrDYuFBWuePTW1Ao6VLsbnWqdGBapfSXjHHtKJtS3859N1bygUqxH8qw9BMdouRmc",
  "key3": "3C6Q8mT5uwyBF5UGWTs5S3SxqgnagvdwvYr4NFrWGcDWMvvEaDBQQTq2mAtsdKeuRt4D3rdJVP3QczPeeooZYpLk",
  "key4": "4RCpAuxu2j2tSk3GAthuwiQEJTE6yPsgFCGGW5fXbsZPMAWm8anqnxiZWbvww2J7xSfh7QuJbsTZk3gAN6TGKD6q",
  "key5": "HMdk6AreKJrjFhcsV21regAyiEUnRbcdBUVjxwzwyCA1GmVhNDGqNcf32gujo4hoFmEaeaCfjRcPXWjfNeuZoN8",
  "key6": "2S3eWjHesaceV4CrLL2ZudHRf9MomsnYS2JtdYdvw4mdfnzf3EFPovS5gQxT9r7PC22pUA5japkku2i6xiFDZ5vr",
  "key7": "3QivviNtmz96yrF6PEE72J5XNpvvboK6tC4G3jEWfSgBkhaV38b4fNUKV2aMev3WKEUpXhkr6SzbLcdx6Jzeh4Ha",
  "key8": "2ZzsXLmj8vdu9k94RUVR7SWCX696NB9ed2FFUQpsNYzC3NoGqHhf4tGTN6sxeSnCqrWKByrUEktMyJ7rpdowiX5C",
  "key9": "24fWSKqKLE4vQRKmrWrEXhzn8P5acw4y8BUSmFFnhhkkhEqUYSv6Njn8jGCZNUwqc8WQ3sR36Am29PgN3qEhXNG8",
  "key10": "58KiK81a8AJkCHuYJBCUMTKfFzvpVjffnbACFEo1Ezc46SghezepvzzmzN6jHzjtvjFvWHShtiPYiZGmGqRP8UkC",
  "key11": "3i1HAzd6yzF3sYRUCrjoTjrmt6dWupJm9c8Q9Si1Fq6sHXfEKhhjQK5UeiqoAD5TYEXMRY3rzSN6vA96k7nMyrnb",
  "key12": "Lq5x3hx2MmAtQdue371gRYhd8kg4tn1QnRb7rJpwpdC7Tfo9JujgEVN8EXYdF8VgL2fRCgTVVMj2vk8STpTwhZQ",
  "key13": "4HkHWzPFWCLZfbA3D4C4RpfgLZrQF3yTEzswKfzgwVg5aNEgNdhBimcLe2VeQS3XJ8ufVMUvDW8qBmSRTMAVD3Gv",
  "key14": "2NSjQAHWgYsm4NiQA71fSStS2e7kronyzMsk742UNapqKFy19tnRuro9Trx5H6ybMvkmXjrAJpC5HEn7dEUHsYuX",
  "key15": "5RdqganzSLWDuPaFkuBQFNajx51PsAGL72ScDrUGWN5P1bYhKjCFuZVyaNA56MiFqRwnugTES4dc85micKVxoWei",
  "key16": "67mHAUNV91pyK7EsXzd6vektr1cEwTaZvJHTnoY6HrpU23CqhsyLpoAbvm6eLYiX5ZR8XoixndgSAUQzU4qUvKG3",
  "key17": "3Gohq2dBkFZN7hPuqVfFs14rJLZWd7LgFtygiCxuthAmYzxUt9dSm92j12jGTXaGVUp7n4V27rQh8X7C7B7ULPH4",
  "key18": "4K4tnmcYWi8X1JfbeX4K5EmUx7fAUHLUotjFDma6oPtsnWMpSVzkj6oFgEocvW3adrtkFe6r9cuRq5xycF9s8FYP",
  "key19": "2RTpTWjp4RKBmA6LqwPEGYkPWxdDKuGw2it94BVkmxYRjVT7w2hbFshDkoQNvSYVbxkvrrSxnCY3dYc6LFUHxHt",
  "key20": "2W35ZAufgJ4S2Pb5eP9JHhbCNwSTnt6DF1mf4VGrbaNQk9Jn8fCfCDtyjE2dymRARKuVQtZk96tSTneavS8YJy3i",
  "key21": "2F8TuEb9biLuE2HzUndgYHA1ntZXD4wPKWenhUpPLR4b6qe4ijFYtdXtBXRDX5o8fLdTA5Mpj3UPg51MRZhzFTkU",
  "key22": "SKmjjFTVTh4bHQwuyrPsAwX5PudfQYpwKco3YsBemGJ4c2nZfFZHEVcXSiUQSr8frLwLgA513fFoeTDQhqoMLS6",
  "key23": "63VtSWABVFt5nXdwrP8ynhpevj2chdEcUpJLGNhym6zWvoJcrf4YHcwk3Tx8w4AGZ1oGJeDgoMBUPJKhta1th6uo",
  "key24": "4LKmCJFsCK8pMopnJHK9Sos87iis4x8U9b26FdhAJcnXwkjBpAiXqeV2fYmCc9RW2DqnKUNBSLepkEZ8fkMyytpn",
  "key25": "517QvPG34mBKCcWgYuqyUAYbFXc89cxccsxMgVAj222pcyodYieg43UhNSCJwVRCUNifJNAa2ZhYfoWWxWrRs8p7",
  "key26": "3fL1FihM7WyRtNtTZqGkQa8TG5R5mqeb4vbkDGbENtP7Maa1tSN7L2wUNwQTg7sfGkx7F52e2Heqy3xENWGiFVj1",
  "key27": "5BcWVVeDCgL2x3wGvpj9qejARiUpRLFq48bZdGsc5nwP2bvoSSN2QAGxmBpgUN2RKhHpEYajxAqPcVaSRM8HeFoH",
  "key28": "2ggN6VukTJQbF17m8pUgr937QEtdRLq7kaGhPv28xPMoq9FG9Lo8XAQkJ35ZBvjUy9xGVhr3pztwUhF8659APewK",
  "key29": "2xmSEKwNkuJbQUXZtihKCfKsPUSNxavG1CPaBkwejwVun5VXnB66NJzsTCAfGwgC2V4LDkvSK9vccJfw8A36ythX",
  "key30": "3PnuQdtXLuaEBt4VhMAGQYDX87LzPyRZVocabf8cStEPNxFovfg1ex9k6QRehjXCPFiRBDHpQFGBALgbUid6W8JZ",
  "key31": "4N6vhrFtq8BeqJxtFHd2a4SEwGWVahGkeuAvxb5jzcEe39v6fwTxKw25WTwS8LhFN86EjxtYy6eJ1Rc5fhKU7upm",
  "key32": "3v5Mea2ZQGTJqEH8PpWHxQ3gEz1AYfmgtCzwWN789DBLUtE2h2aCfX1fVz4VKGSkeJXF6agvqhRz9CDCKxiV7Lzt",
  "key33": "4iEKGnKJb2TFsxDSXB2MArjWNDRTnx18rGbgrkzxpPQ4uv1wmth8EsXc6SG2hbGozssoAmm733woihuMHK28r27h",
  "key34": "5uQjRTSyL3BW2BrQswBbjE8YCMqaBTEa63WvqqFmDxK1VfhQLiKxrfdq9VmFJeBPAp6pBPtjiFYdRBZJrzuzAaNC",
  "key35": "L41SZURrakwgaWQNPrjH4MxYKyGMjokfx3cFnBjhXASk7LVi4xFkbn5JicB5o7mGyKGyLfHRJz79LTNWSh7Yb8L",
  "key36": "iVsLFMgKJfLhE5zrZ1du7b8WBqTMfYWUSWvGijPbMotE3osxgPmDyFbaJcLEiaadYDgyaGofydasKSQiJeaLwT7",
  "key37": "391aeaR3aTEjSd27eSx5eqKP7T47QNdPrcKQnx69F3zmMobtp7AVCJPThsUNS3dKu9QFQzC2XHzyXDhyV7jYRaDD",
  "key38": "28q4UWKSfnyb4N8BuzfzGqQEz4BV3iWRoGt61hEZeVudrZdFjco52sxiwbfhEx4CBRMvxv3Kv5hU1d7Xk8Wz92Bn",
  "key39": "4pGBBzDGwXwixXRvJ9W4UikoFYtkQBRTTt4K7sKaA2TZPow9oYawLYwDDAdQ7fiiwJhoVxYyPfrPCPLXdq7ehBrr"
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
