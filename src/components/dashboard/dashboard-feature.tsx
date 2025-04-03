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
    "4LbdGQNhG6h2DCF448uzqqUsHRtrK5z628MApFXT5zqQ9LHxb631jjKqyUNKWYoc2SY1qiMj1nZC336Umu3dEK97"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EUemNMYLms9vgcyKMSnbGYSf3piiw2HDC2s1bVoFC8CJg879yzCrR6JJokSmsCpGjuLCVFeEEi4zCXs7rEpixaA",
  "key1": "5dYh9AX2B4GATgGsuL796d6o8ZbSEZECKLYCFNr84JBkLmZpy139s1nUgkAhWJ77Z9SB6Tg8GHJi1Uc2Cj2cJM3F",
  "key2": "3cGhhSJrCSCUnRnzy6o3bVFNRZSN9fZojNwua9MmLBnUZP1mek6xcvxKNMKN4pPjKqtWesLtXCktHEBRWmK3Lh6D",
  "key3": "2VNgnsbDvWhUY4seEsNa8r7YZzMzPxNNP37SqM49pvYTtYufSn7r27BQHj6TPRq2imx8EKyh5HWkGh5ayp4Bdmsu",
  "key4": "2xxrviK1KHtMsis5xj3i5sbpXfX1pt37Z92WGn5bhWD1moGcr1jyf48MyWhGpakyvp5T7YZHVcJLBU7iHfzPLm2R",
  "key5": "5jmxcDC3VKbfRwTjnhXvRyp88rqrHwNK9UsPEc1wMs68UJiqbRf6AKBKJLhdzdysdLvtV3o8UdbcJj9fx3avxZT6",
  "key6": "2aqw1GSU1jVJHEo8Coyadjxv2wHHmLEsZby525rFoeTdt1rP3jKdnh1ew9vPPddQFosiqNDszFtoEd83krphZLPH",
  "key7": "2SqY6RfsgN6tRiQq77zcyW8bSSGPzrnnjzNqmpuY2EsBTLYLZyCU2Bb6wpbJs8ihowsKAMAsuradBwZLBsbSTUpi",
  "key8": "2CzYm3j3CLBeaiQsSbu469ELKE49LExjBLJRqxrCK1EA3HDrywuDb1thC2WvnhSG6HMNwjqw9mrh8bpZGu9UQ8VG",
  "key9": "2gEBG9eE4EaHXsGCG7iRnhGjUxebC2Coj8u9HrJKsnKB79qczUGseezf7YbFVn5Xi5DKEJs6Kq5UxS25YSfcz16C",
  "key10": "2LBGpkQE529TaiSjY9GCyX7hdZdP3wgnmy4F1yEuUKysyDXjLXd8REEQRPi8oFGfC75n5QimSfzbZQTLbWxJJgYy",
  "key11": "29sGd6Twn5HJBEAsvt6gHHp1Y6YLTDUEUyLPbsg5YsAxxMErZcShnr8P2BanQ5sjGXL3248FXJVVYkNgUY1EFHxU",
  "key12": "2zcaQ5E727PRnHuDddZNvsif3MG55BJRJkaJ4Mg4jeQ6c4f53PDnKTNfxd56137pJgQkCgmzZ4MdMber1Agxrfjb",
  "key13": "2ZZaeeC9Z6F2dHykSEviyaKnaGrSToirzxiJAAB1hJG4jwKasn5HW5D1KaYSTwaX2iJGdQ9yGP3qFEeAQcwMSJh7",
  "key14": "5pZ7d4s5Dbc677ZfndGZ39hEj4GRESucQvgPeB49oGEc3yQQ1puShu58J36baZ1vDCaqjHYhKYju9YCTQmqkeKkD",
  "key15": "qYh4xmt1CE3dhQ9pd6EzUCaZS3wys8go3v8xFCkRR3q1bpLcYRkhAYbgT8zg8fzXChpGbWERwgQBVJvfwDmtViB",
  "key16": "2LYBDFsSiEtvDE3ZUx2BesVs3rp8wHMtpbeKomV2LWQJ9Ka4VeUeLjxCqZDCC6n2iGX4hLNaNhUyj6evg8VKqRz4",
  "key17": "5TVb5FjX13R4KKU6DjT4Js6jomPM1qDGi4qz5pUGXHjZmnWaTBWmRHKLfb7TCDiuVBtGiddHnZ4vEcRqvVoUi4KG",
  "key18": "5ncEtmPDWu32cNLwcMWEu8dJf2bijAvY4ywjnacLgMHnSg1kdH3724ekhCtBoPGbmWWMkRWhoPKxC7C7sqngVokx",
  "key19": "vhGneW5574Re6twubD5RPiJwM3pw481BKtg7KvtD487bAF1ywTBpWj5FS3WD2cN7FXupW6hr3ZTKDXomDsUJDLz",
  "key20": "4fJyBa4Ba3AzqB9JsYWtPjHcsY38YK2pM1ASXz8F5hptF8f6QApAcwmW7ZEkzGX3td6NpRYURZ3F2k8aBEgM86Ki",
  "key21": "3fhkZQ6MXC3LT4xsF1tFnFiLGHAWzp2hWKqfmqUTfU2ygkvRqcWnBeasQikaMQYHji3wrF53UFstsYHDeGt3G94D",
  "key22": "5BA59WtpSNxNkqNY3C9wbp5MhdFmJhocgYmttTmgHR7B7bbv4Ak37uEWJy9UTs5xSsw5rx5Cai2dkD6TGKgyLYGC",
  "key23": "5S7KnMek9LwK6SY5N6dmDfJJmNarC66p7adTQ6Lvx7SxWi2jMZCgzKaGycKJ2ukxTqxdxM4bWriV76BxD1ZMYzPL",
  "key24": "ayGTt3iLv5weQpFaVqJEyjZxdcvN2ryu4cWA18eBY8QLzH3Yfh7et7kgNy2WxeWNvGwBES8miTewkpxMN2s468Q",
  "key25": "4nS54krmJY8wd94PSRp2pnNdRurcHwPhXXpd5xDyFE49mc9VQ7DHmA8ZXxftArFfFGDRqFD8t7tKWoDgcAEVvz8x",
  "key26": "3wFD7nCpr3VTZbQ4TNrKweNCsjUbe8FyFvUCaDSDxdQaByFW2yFMn1BaYjCRgKVsUXuA76JmTYt3UWvbH2bvduSg",
  "key27": "5QrpiYFHfP9B59X2VTSo5jAWvSnYWxcEMRphauMFcX5bZRaL5DPKokbUU86VqFKoPav822XhNPMTYDGn9QZi8AAh",
  "key28": "5rKcDoZg4Bx5TbbyTYRL76DnooipxC3diAm1dgpyp4vqFUnbZinzKC7gZpKkG6E7tgc2ejbxdH3YcdWwFwtCa52E",
  "key29": "4XGWWUTTTfowQFZgBELaoYVchsBe7eq6QXt8kgNtrS5SHsF3phxcbGa8KCjduk3sc7UGqLme2FUZiEKwtrWQj2EY",
  "key30": "3yvaVHjbmMGZsANoYK9YRSE74bx6Xf5RVYaBZS9oTjQdyuNXznE3vXdbMJZugKtqnof6FNfqWNLbvrY4szr5cGAa",
  "key31": "3BRqWdJHoYLfjrGVfhRRmFND9uBoxn6zvb77K3MNxJ7L93vSchyEn5GGWy6CAanJeCsKHFoPfuX7A4zjGNXc3Sq9",
  "key32": "55CsjJf261DKjvMrNXPfBht5aKDx6e5M3DNvkcS7ADsSPF9UmPs7gJ6pyHVYkqf6c8DkYEyVJCX5XtYSnMRHnmXq",
  "key33": "3hce9uSUeSzpdD3kVSWjLP93uZtL3XcwwuyEN8PAgNAr35zanehSPxTKbw5vfipq7MYGj7D3xN1MbvVu5TUDxAxV",
  "key34": "BtfjMDMVWipWjWt4FDB5ubgkBdfDu4Bi1Zb63wNNFtdtwr5TLnAYBLVCxt3hdsG6TDT8JJApF1RLoingd7hdaj6",
  "key35": "5YnRjojqMABX7rUyuexbJ9ZXS9fc2oYdv4rfCEDYAJRk1a61Pj5ebVb5nbbkrxtG4ftMiWV3UijqZn33UsJ2HsWq",
  "key36": "3YDEbT5hZ9KVnVxKEMPW6ZoNvNd3icadsiMzmc8cmDzuiD5tSbgUQKmyPyjk8ez29wiKv31u9YEPRbBHuupoYfCt",
  "key37": "4twcd3cM88xKLLGuBKLC1vjyNULCsWqWu8uHHTfz4HvuNkULcMNwHj5AbH9nV8nX46NcjhY9gef5S3zBGqfnFj9u",
  "key38": "oLSE9iJZzhKarzCcG2BDfztWtQkyRMZwWSx7hQLzVTGmTu4LK2JWuoFGwfCRnJaMcdz5D2GiJzSgGTSUb8tHtCJ"
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
