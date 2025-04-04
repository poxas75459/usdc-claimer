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
    "548Pd7jcUdqHaDvTsupfXYKgFx5qeDyTzcXMEAjZAhoTRtRtEWxmYD5Th68PYeYe6hj1DaMcPKs9Qa7xBgdcEcG9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n2JDs37cotBkadUUZiLursJnygUdYwcKbuV3f18JgS8QNANUcxFRdHxNPraRkNUf2vovH5J5gGc3qpWcti8HLjd",
  "key1": "2pLa3YScTZ8J7q1vcREVmdUZBmEhZ2aTHLsQctPpNU7VuMVxKhTUxUgjfqojTLbAb6ywzsPE2Yd2oiFoRcSH6j5B",
  "key2": "5t46cjpHqW1kYUXckzJkT71366J7FWyyAjKeGaLDZCCSi8py7hXFLoScriGvA1srjZiNx7UhUaDBMNja38JpXWAy",
  "key3": "3Vt9xtnA4o9pGwkqkWd9goyFvcqMexFi4DCCSfSHbf919Y4jSpQ14nF4ZPDr6gcttVVmcR2oYxFpW3qPNpHmkjbE",
  "key4": "3weJcFcVeapgucQqXnXSCP5UWbzEAMHLY6416D9C98Vm9k3g7N3riYrhXyBKceTGwnjzx7b6DvLyJFwdXNYSuQEm",
  "key5": "5NqcpEGLXX5H2JXv1bDWVc6VUb9wLANWxAyF9u6KvrxbBgNcdDs49vcw2sZ8xxFS9oZwVgQ8zZ6aM3ph2Cyomkaz",
  "key6": "3LVip5NzFM1LubYjXAH3DXvMHSVrBwdQj9fyXeujeo3WgxsyP71J7B4AXwCpNV4Z3ecaAHurzEcWo98XPGwf5c5N",
  "key7": "2DYPPZ34ah8E4PQrU7LJfidS3ktno5P9jiVKsZpeMB4j85Sr3CvB8khNTKeuxstVjy76mABk3hKhubs3VxG7g85D",
  "key8": "2kqqQXsq5aWJCiqmksAfRimqFbtiAcSXwTUJCsoGhgjby8QnFHfX5y1R2w8hCrSTP43JWfrMwVDcDVPF7QvnGck5",
  "key9": "4YCeJnbysRAsauzjZAtD1m6iXMkun3MRVk3tTjCYo4yTFb7ZYQzo9BaQ8Q6cHweRbbhL1gGC33JzEABTbD3FSy6g",
  "key10": "5QCiZh8QgiTX7oBp457tVFuJDSdswT3xBUviyEoN9MtQutAxrPm7UtcyBHHhappTtyXyWrX5w6vdzrXrwpontn14",
  "key11": "5Js23aUegoJH4DPu8DDXsiBpuHZpKhgdQnesg9pxeAZtyFLrB1bFxEPrMz4Jw2BVSv78gE1cYvgtcEjb3hdPySKL",
  "key12": "AcYkeDipxczjhZmHf79yiAo9v84e27thAv2QZm4GFZuYBw1582qavmjbpb4hGyYUXPeTxErUDd6nPPzqaZTMc4b",
  "key13": "4iuR6vw5wjAhGDhHRRBDQpvofEn777MEn7EfwZhF3ti9dkk7zLCaHNi3vtKkL9eMwPN3dHZ66XH8nGACKLdWHJhF",
  "key14": "436Hqo4PewXu2jLQASZSg55nJvYYdcyLnswJVF4aWQeH7FxZhCa1yu1Jz9dPVyd9wdVQUTd6dE3GfjPZ4T721yAH",
  "key15": "4cGbMw1y7bSFfjufSsfyhieVWQunWeaybCm5yBcnznLR3AorWhQTA3mFQokMsBbM6saj8ApSEvLAH9onjQ69KxfC",
  "key16": "3c1U52j4nPc7QfMbgzURNfVdR89eB1ZQXG94JSRpEZ81APVfnMW9BPVjyEcuR55XobB284zmfwMxdjWH7H7iGBzt",
  "key17": "2mnVxbeWM5ikp5WGK6yqTg9YPgrZuHKsaeVdgGa98MMvkKxczeSJTEGZVxqyf23gqbSTzxnesT6jw6D16rytsbRA",
  "key18": "48wV1hxVqtCb9eM8Rfvx648k5M1a6nmnQEtc4PudR3pTxNvjJhJHzE1QGdQYJHtLWXBujjESpQ2NRoRuZYDnvCna",
  "key19": "2oEXsETQDHk9rWv2MxbF2sVQSuqrjD9DN6JSSAc614DcWPxxssDbdqiHaTPdgw8qUNe8eBY7LYoJf1bxcDxRdh4b",
  "key20": "61AXWDztpMQjGZ6h1YdDBghGVxzjDE23aNPXbqvMNfuiA3RSPGK6sPjQ5sK2hCgkrQtBqRtcBX4GjvTemdDVmLLJ",
  "key21": "4mkycpBSfsiM61a6v9feWFoGhyUDBcMhLRSbrKG17QnywusoUaqBpAufcCVGxaa5U2jPqp8ww63FmjfHU9vUrWoZ",
  "key22": "31EkNoZyXgnCpLVPRUedz9dc4UfevjQB2nkLKXNcRVondnLjVbjNuRuwtG9ik29AqbFwBGxb5CaWXxs7cenGYZWC",
  "key23": "2S8nhFwqeCzvQ6KBZgYhfGyY6kPGGPG1nm8MDXUVAns7abRqLx4jPLy3uMEoJSUT3LFFcos9RYapx6B393XGudAR",
  "key24": "31NdAAhjBvhQEVbRThHr1xk6eu4F9Vk7eJapQjYu7szAoc2smSG3PkDvBF2JTYQRHmuYeM12v3QJBeAQTf5eW3KQ",
  "key25": "2xtPDYD5FZdqjEzktMRRt6rz6UynCnb3Q6DsR4wVHEX8FERA2maEsJGquuc9eieLphKz3N4Ju4eg7XkY8AgrFCZN",
  "key26": "zbDS7RerQT4nLzBXyDP1vMhKLnWoB5H9kqk9v8TqPUMx2Vg9419HPXuZt2hf9azNvx3xmJQgAutSKZAnBMZQDwW",
  "key27": "3CojDEX1Y3MnZ3Qah1WmLR7FSZhrgsDyaEQU3ERv9wMVpmZ1sJs5mmAb4ERT6K8JsyJjwpYdmTTnmpbUvCSkwU7n",
  "key28": "3nsR1aJTwBDHmUyYcPQJoNKXSeEfrapkYmY6c9PKwzvF8aV4NWy3uvjPrinFkYbFx8cStZxR88g3r63Pup5yXY89",
  "key29": "2HupXNDKct1GZYdc21mSc6H19EgKhbTmDc91YrnAGw6MT3sdem3Dkx9h1kCEMAGRL2Q4NM7jsV269vFQw2gsR3EA",
  "key30": "4CM1ua71X2vMHX2x5eqP1hKhtvH2LX8yNRaVgm5KDRGhC3ANWRdVg33CJFU46UmR6QkYdf2GAVhErx8EzmaCWoJw",
  "key31": "4g3VCMnHX8jsVzb9vqdjobc9p6XGBj4pEX9JbyhHQzVgX89iVtbxdXqcirNyGTf65VtX6BewjmrAzzZ7QHV8yn6C",
  "key32": "at7kZbZj8BMxDN9anmWdH8m79nNUM9EayzUhgZQRSkrSQP8shA6hd7awFEXs3eAfTJEeuHFZmzbV8VWCAURFfDJ",
  "key33": "3CciaWgfWnXSecHH7iRDC1DWhYKw98FxdARPobBJiLjchrbfQ4XH49WrkFzoVp1ywtrr3A9vqdj4WPp2MP51XjyY",
  "key34": "5NXQJUZXRXmCAxKPtTxZZirorJhHjYKkko27boYdHN7sVmaJMrKJnDDNZJyQfy2Cxcnsks1m1SHBn63xFQw8jwzs",
  "key35": "spN59TRRpt7aWJZsHLDaZCtRmYvJepuSpELmQDkfTYbas1RA9sxLZ1yTv2rLcfXHucuEwZLeLmmVzGTGp7ea1ND",
  "key36": "2rjobYva1RJbJJC8kehVr5DMLbMCTxvmcvMu6M3veEenhxPeipLBAyPeRjA89nS14qPzwUEvLgoCmQS4UXb9vv9y",
  "key37": "2sPVQtGTT4p4XJa4KhfrAVPE12dbmgVEiHcemkzcoZr42xRtEjCs2vhQWaHKc8SF48t5t9T3x3fRUamebJ52NZH3",
  "key38": "5yh7dvo2GZu3zDM1KUrWskx4jrsiVafmgmHHqZnaWAhsWpbqntymXxr3at6PonWRpC21uHHSMEfhj8tXPE98gcS2",
  "key39": "35Y7cZC8ecWotJSao1i3yKtioWL7PzMcS5ivpkU6qL4Sqni9NznEftwNzbg6yDsY3SJLgj8NcwNUvpgrrk13MTVs",
  "key40": "4hzvstgdm6u2ga8jG7rius72p1wqEToLxwwJJnu5kZmTnLL3apU9nXATW6bu7NcmQxKRvjzE8e64h5ojskvqTiA",
  "key41": "5TLzboUmJinBZ1ZTNfwuTFDujUBcf25JxggwaDnSqg7AGHqym31TwFuKpjFoZ7ceZZAvu4VaL61aFDSii3s1uTnC",
  "key42": "4dwFL7Z9hNw1Jw6dZPjQKCYuT9wCsTyPN3vsM1eW8ccoE6b2jHrK3NHKoDfDYNXxxSBmMS1K75qaoT3mJPyoJc5K",
  "key43": "4c5PYGmpUa6bJguKyxhoGknhjQeQxELKt6V8pX7NvYrbK9s45UqiZYxJjK69JqUzCzp82hGMCFUPjUW8Uc41ipbz",
  "key44": "2oGSBHtn9dmHFXGgQAt1Hc13TDbYYjJbdRfFkJuv88W425BS8Wf2ELKURYq8wq5c4crNNwZHLR3yn9UhrZZTpUoE",
  "key45": "226G6GJUQByhGVN85mfeYktRassni84KDmg1Z4EZ3XevDnyn6yjhggCUktPmDjqwVvYNULuttavJT7F21kdDBpN7",
  "key46": "4YHF3PtMR35U5D4dUk5otZ2NmJCmvVx5TcRDaqBk1xG6LAo8U39MZFg2SF6FF3ezkZZoVgSgAcFJjnd6cBdd48o5",
  "key47": "2qTkBCcaNsapo9yZsYxr1h3Gsy56sAHhyH3TuNs9sXa548Np7madDFPD1HNJ7Dp34Lb8DiVvPYo1qzaqkP8Rg8oF",
  "key48": "2UBp14s7rwS1gprbziSeNeeiK1FnG3JJ8zhLNpPFbTWgL5mta7CdmW3j3Bg1aa1W3xEKqWgbBGmerpNyUjXDcG8c"
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
