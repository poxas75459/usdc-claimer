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
    "489NwfH5HKAmQjBKMu1rDwFoCC6VU1NfkvWeJnwey2iay4UMxYuhe3Pp9hMF5emKZtgadWCe7qX41czBZSUmLCia"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5psP7aL5KEsXvGqgmMWa1EWvvRwDmiEjK4n9Y6pQqnwTozSW35D37ihmHuGUgbB2Y4ipjnwxTbEZ3Qsm1zh1b6gU",
  "key1": "3k86vpqijaZUtetnN9PMpE4E8hDoDGg6PbhQovrr95SnVvgVu6notqXbz4H2UnsLp5ppS3PTEKLGAoAyEoopTysz",
  "key2": "415WEiXr2qbxooQfzrsYmS6F5RiDKfovrjcTrzjQGS1rpHWtvhUmvmzvyzmJHjzGXziU3PTm1LpbjU2mQZjEP5iH",
  "key3": "b6FybXujBCYbDee5db7M2mvrb3RPhpjoFg6UdjRbpnW8yANxbTLpbrYFumBMAfivxYkTKWMxp5zkJ7zbLgAqMMb",
  "key4": "4GcqGyWEczLiGH9AwPS8FBzTdeTxD4WXv3sfmqpqRQ7VdzRj4w9Lic9BcLBqhY2pxCjKXysFivWrGX8LvziH5hqD",
  "key5": "4HQGNBd3Z6UkziKddQrUxiXerK5ogGGJ8922PaQsVX92gygpyx2Tp8XBck18Z9UxbWzKNLx3L6NyYKREPdba5ZW3",
  "key6": "5g57ExB1w29rpB5EPpvgav6xngGru9RDuq5J8Qr2ddVuANLLhEs23eomA5s1upccDcjD3mHokfUyxx8qRguoGtFZ",
  "key7": "soudWEZPrRx5ED73C7pC2VuYyup9E7Bg1GAGXQXDdhaRjaKFen4GBKNXh44Dw6HNRnV8nwZZe3ngNEozAZdJm7G",
  "key8": "kcwH4ks4jhXH5fs13epsMX5WPzhRhCQwBQrSgf5RJQEQofYhhqgascFJUEJD7gsTFjic9NeqzwinCMyxfjSzp4B",
  "key9": "4G7LxXh1zJTr3cKuGjVrTy6sjxuG21jZzufs98HzZSdFe2KMgS2NUMHTsd3NaxVe53hmLcyDduuA1pLddQ9S27Z4",
  "key10": "3fQsLpTPhvTwKQwj2jfaRJnCf7vw6dLSfoh2dowhTZ7K5YQHS7i7zjQz1qFgdq8dsPWhhCF4NZ4UPeLXF4Dfmraq",
  "key11": "5x6igYCLaU8ZdeAvkRT1wLerNUtQQzQfv2XoZ6rAnqj8uDFEbp4y2NaNg7ovvwWWtK1xAfpv2d8U1jWx9uK9WrMz",
  "key12": "4mU7odwX8vxss7bTK5N8UYQyyHpA3tapdznWwa6MUPf6wQm5jK6BsxhZpG87nBv1AEyYCQNUSipAUs29u75qLdzk",
  "key13": "57mAgHVQve8ZXrJGMQZLh5tSYVr61MKvNNjDudCdv6udtZNc4zJRFMhkgsnZiMi5Uw2wVrM2svUppHKH9WqJbn5b",
  "key14": "2Vcc1zs4DZmWFtrvsKb8pXaEiLhbmNUj9JZFafc4sj4B2FYHacn4DWU9sTGUbgm7qSbz7hMFXUFngVH6V1rSPgMJ",
  "key15": "5r5V33qXeumdZpqWdibJVqSnVrd1fhyQnkbtXGxosJajrMc3916ckahuv9kvUFPEkgb9SnjyYvU42xoPTdNpEWKf",
  "key16": "2fDa63hJ9L4NNonw3rxzs4xRdauU82fA14Nbhc4STVgyXCHcyN6YvkcS27bxCu18FBDtmTzMFeEQr85MZAbpVQZe",
  "key17": "64RskRv8k3rwsx3xNAgQPPFDiEZfYsG25wPG173jqFnjpEZSdhZc7PCAPjb6rDRh4uoDpoixMhpcD9xcag2UybyJ",
  "key18": "41GfGTJSGzEEg7MiheT85qor6zthnXGoQsLL4gQ9QRMxE7aTjh2AGB4WdUy734oZVDdPs5hRGRvjYRq7QFTjDERh",
  "key19": "2rw4xANWF8Mkkmdt8yC2CjQ8REcnJgXBvozSTAZoAY9zSsEqu8HufxT89DNpqWuh4St5jifopyMTiFRovjLsrM99",
  "key20": "5xungLb25vCSNjsuLWFXK8ArHGr1U8cyHDmD7jkyX1qnjGfd3sKnMDjY8DmM78jZSSPK7PVADubeFNkWG3Bj5Gtp",
  "key21": "2pbfa98Kff5o3J4XWQXoWYJbXqMCWw3CyTVBjfRRPgsVPNqDnuK5cykULZbEPwghzRkcnQvyQNmRQQN8eLNsKgsB",
  "key22": "5MRW2GbnAmsjBUWnzaezAR33rRkKYMqoeoa9AtQcVc3ZGD6QQtuWTwUPbX6w477XW48f7BoeYPwTVw1UhDMEAmVF",
  "key23": "647Mv9DzLYFbbo4NEmpxrZGVkGaAMCgTMarAU6AY4zR7goz9BaWgK1ihswn8zzifRYRCcsprBPJe4JJvq1TeTTqN",
  "key24": "4VTgLNdmUTgHNE6rswf2WSywom54RGZn61eLxiK1UQXXeoqg74kZDVS4JHPprC3Tqc4pgJGZWKenAxhxyX8NG3qW",
  "key25": "3hmJf4GEgW6Msua7QzdGKmuM2BCC62SJvKd3aVLWU6VGH7bLBbQiEBAJALWsGbPKxfPXYpxZu3nuoCTQoo4H3dnV",
  "key26": "4xmcWMaiiSt8osgKkegeNMP9LYrExKFj4CzGwKuZympV12p3P7B2RmdkqDpFPLyGULidnbxanUi7EfywKpT4Pomy",
  "key27": "x4PWxdfmhX3pY7DEfDPZVn9jJhMHGsck119QhCYe2PHv52ZBDVyzXiCcEitKQTCBwF3xhNfp7KPHqw54n3HaEsk",
  "key28": "5Vo7ZYM7x5gobNmkbs1EoMKt9TSeTWKucbeKu2hX1AXXUDAJN8oax1RZdLvB7TsHSjWFkFwpYFGd81iHY3QWrCng",
  "key29": "4CZdC5Pq2MU1sSw6e9AEuapFurxSJVw7hBoBsC4H28akTwd9xWNdU1k3gdNwPhU8aUZNchJW1YvfZU8JeNDBsB7r",
  "key30": "287i9gv35MxM9MhSEjtJq3LGdEeos2xAQFLHr5k1WZ7QaWwM2cz4oBr48DPYsWhQW5npgWxY3m6UxqZBz7m1r97e",
  "key31": "2LKxV5ZFufJGDTiKgaiU3qideeh3kM6casCKaX1nxWzdUWKmbaBe6xC88Cmz1cqWWbdDFpMLncuJAQRTkMMusWtS",
  "key32": "2JthArp8pKHeR5uE9QhZ3vrB7EvF2yzs1ZpbwGbCJ43LZU2uD6F4iGUJStpAgKf1We3YztxhiCJt9zGBGaAVpe1V",
  "key33": "2cYfwwPEhyf9QLwSUCoowdy5D5s49rNQo8rYYXY59uRpsJN7q3cNN4tUmEtbdS2D1VFv4TJwBcoNP5yg5e614fAU",
  "key34": "jkMjiZ8ogf5d59cq7cNo12U4eKM39xXdoi5RiX1AvyYjzKSfsfEgZMfBrL6LjsJMDYguMGYgCdNpszvJxgBveF9",
  "key35": "3dvD6LZ5jMgguAq44P8Hp3jAcB5pnEoDu8hWCLX3WcBCxbRYfgnH495yTBUkU7BnWxjdP1tpDsxkr1fKsFCv9jdS",
  "key36": "qDFhNsivbvLPJNnjW4DxKLGG1yPgm4XHaDxJYL78sqE15yu2M3EaVfRPmqkVn3cwqV8SuAwfz823MEBmesvADP7",
  "key37": "4iNqhyuaFAWX1fEwJQuq1ebcZWDwMoKJGmZtWxDcdXRq2EsW5gJdyRYHcxzbymb4oUgSSxUCVkBdQRfKxSV2gMQ2",
  "key38": "5s5PJKJ794dzQdoZCd1PqZMxGjojStoeo1WWNc5H54qBCLTjUb3p8Ku9ikQKb5TsbQvWKxPsggGX3JfJq3873Fei"
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
