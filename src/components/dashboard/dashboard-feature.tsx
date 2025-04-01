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
    "5BKyFz9gEFv8i9X6D9EPHHXgtpFhDUbhn4cYbnGwHLZWcpTnfDaaEw1qNY5Q19mhupPNKyLNagVKrx8c4aWTpi7c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iWVef3qqnioUS22HYAobEmTKobuq7a1xMFJhDZ9rWiF5XgGcgqRhBCwfvMngccrhsjro8sBDewEVj2bAi6Y3muQ",
  "key1": "44ypjB9fnmczUuRhCPGr95zPbsiXYdR1C6z5NAGASjZ5W9HCEuhAwgLQd5978L6kVgNCpBDzkSG39dQ1tr6XRjpi",
  "key2": "QTyFHoQFTLP1Wmjbfx2GTzRH9LoY8wDM2khF6Zd5TREZ7sugJDcV71Pq9js5JkGwcTM1QMyUFfZnuQWEjRLzLay",
  "key3": "5AGP66B5VaZXXyRUuapVwXGPK3CS8QWQgvR2o8G4xfvk7qToqTdGR7Zjk1BcvxFXUVVwtGhGJHDAMyXFEXk7VJ28",
  "key4": "cBMkxyeesTf7ff2swwNEfUj82T11LU6uR7z5rViRKm1KVdXkm6yeFmxUP2zvSVdz6hDbNmWYEQ8LxwY2JC4uZiA",
  "key5": "Z1PHUbjiPTak2wuLSKqa51wGJYj6jke3ToRLqUCwEMAJGaRaP77VsCWJkYjEba2q5C5dbNwyLdNYEWfTrFapkj4",
  "key6": "23EyFWwFk6GBE9w8Y9U6muYRwEx7Jy674vxgjogVfPEp9JV8WqR5LGnKEDe7eTuEojEWhaKLczneoLPKjz9pRg7v",
  "key7": "4Be5djfWtdPUdhkJ53dy19h3mBqvvBQhrxZDsjNANRS6yi8TXzHy6XWGk3ALFVkAHV9RZpJ1ttDP9QEv2uZZLEM3",
  "key8": "1Gdph4gTH6bQzvFJSUvSToq2dEFEgMm8MW2VQqgZNi5NQJhiM8maS8jHyFt7sca5CEET8bhGFoq9K4V45FtFTFe",
  "key9": "64dQ14FmoTvH9MZ8sBvYoLv8Z4JKudkZhiKxj6YhxhkRcsF4XVcgChYUeNkjkghzDRg8nxaKEsUtiDzNkMw9p484",
  "key10": "52wSVWWEbmAB1BkkLWJWS3TuE24m36Y2y6y7ScYmuJx7pXrBL3W1zrqHkiwRXXQu25sCJLVJBmnww3e6rr4UbYih",
  "key11": "2ZAaiH8eupyQHZTm9AyukWhrGK38niWPz3uVRZjxye241aFZBAaXgbgtJvdpvjidnAQTJDRTccYt36pyonkBGEnP",
  "key12": "5kB127txQHsKkXV4i2r5iwBtQQfjhBsA4B85HV62uBNm88tB7XT6LiXGzsn4oVkCMV5oBzUZ2rC85UAcyjv7rkmg",
  "key13": "2mCU392QzjMFqDSqzMGNmUNrZGAuGNNEnvANmnze1iP7quxXscWFVv5fxtM356hcqZsRTR5e5vkc8S8oqruNxnM9",
  "key14": "2PVP32XVh4CdqCXeQfPXFHg7HtVG3d5fY1pkxdmjaZHL6csxeNG616rjZcVBM2YNia5Lyjaotw28jcXTsLr4437h",
  "key15": "576cmVY3djMKhKEzQUf6bbRsWYLaAZpp4MUz2eE5aeGRcAKQWivgQ48tn7ewcyFwvTaepKwMF1XQY4sBQFJ9J3a3",
  "key16": "5Vpshc2XjWZXHmft21NgoW56DFpRKeLTgQazsmx5ZV5erSsDBmnEdLhfzxzxiXMkH8Wz5kuW6s3gFbr429hntvri",
  "key17": "25HBQunSt2DGFQCZjfpuC4J3MAzbMpSVe2E1aftxLR1G3EVPcd3R6PzGu1SSaj62WrYCt4UTumCq7iaVrAJ2jzWi",
  "key18": "oxxCcXmeLJBcmYSY7Bep2arAGAuCDT9qj3jak667TMetA1tuXgRuE6U1wnVfRsiznpZ4r99fuWEqaHHi1NLMT1s",
  "key19": "5xpzsvwg6VxPshco3eDLDWuDUMhbBxQDxeBFnx1VwmmyPELLTkgtM4fDx96TeTf3ptNEoUP5LHBcHSLZ5FTRM78E",
  "key20": "36K6H2Ew5361VqZjTzXCa6aokZ97k8oXUCtkHyonnMMMmcGUxqTys9tSqBA9diaygQaCnbcij9BHe9ptMkpyJxng",
  "key21": "3JUmvmmTJM7HyYPynvLsnrsrv9BYWtmrKAmw7RruRPYvZYmz98sM7HGHnba8Uw8qpyx9kLj7xW2WDzXr4QhayaFa",
  "key22": "31boAvFUNUao95SatEymQ965R64CgiAtKzj2jfotwNM9zQ6n2bZtov2rgqpuqinq629XbGXVHmq2HkMPWPVtjLKd",
  "key23": "3EDWy2Rzu5DH5kmBoHNyadqko64YxfvQXhc5DNBvoVpKqsE7BKpBP8avG87vbqRVYxxVZcQzAnuFbHPvvZiABuTy",
  "key24": "agX2JbypU66tu2D2LaHM7qEiRX3TwVL73PUQwAv3ip7CacMmg3ub5Ynhtpf14Cb4L4dDqd15ZxYzweBiMkT8eLP",
  "key25": "5XjxLhQBnjNeoz3Xx62mPRCd4NJSrfeghTULURbj564bv6ANhoga9BUsc49pw3UjZp71kpscMzyz7BXVGDHpEKmh",
  "key26": "pQQF4iGtbnq6bmKnuSxmNVmdcbEFYiWMsPoBQM6VenUh71SCbceGm8nE7pdxsVPTCETG8K3kZH6C3fzC7jn33FY",
  "key27": "3qCeHFT7f19mT5vgRPY3Wh1dZZcZiNNCa27kp4FYs1AoVzmerpBcFymm2Bo1Cot9mZJYdRpi6ZPG3YrwRL72Gsqz",
  "key28": "4m5NbWTiCu5fz3LtxaK4AG1pR4RNgoaGU5L6T7g6qkdRJuxho7HSn5f3k3zU8dgigi6fhqPDe7xifNxw9CMaxNjS",
  "key29": "47airXLCwnMAjXzo5TM3rx9sDLDXAbBPq4giZ8twQpTKcZw51nxKHzizuKmPXJevZfiprByEN9hWVX63cGQG4oVN",
  "key30": "5MSc1zvkdxRMgSJ1DVcFtWYRHZ7898RwcrNEsxMG2vko1ekP7NPtpg6MRQ84Tnb1jzPgQ3pTaEm1cMu27Uc3ZJPu",
  "key31": "2jmsJvtst5AXgbavsbRwQTiAajvNi43KwDkPwEoC7iYTyvNWykepY93yWhYxK7SsE55NncKoi571KGQXeb2Gu3oy",
  "key32": "BAcZYPQrL3wxSbih2exztDDPeiDGFX5HqKabgdabGcngYkWc3DbA4AXKJd2fu7zxudEhxRLnAFrRDLsACdxyija",
  "key33": "3h8qWEQaTbSr1SSzYE6V9Aobicwy4c5X9MBq1WfUvxJL9RgFM7bHrUxk8eanfLh2X4F8fVn1gWCLEY7FRS77WyQs",
  "key34": "5zNy1gMprhkQZvFUfi8vsAz5agA2B8cHE3kJpnJcA4nTQr3KquZ3NRz91rP3fqy9rkuzkm3wwWAUAYcTdRzp6E8a",
  "key35": "bF9nEvmeQmAgrBaCezWzKX7zwhLQapZdGGEKQbGQY8c8THeZcBBbEWf5wpL9aFuJXw4NRTXKyAja1SzjwQ9vKBH",
  "key36": "KYR9DZAwbpMSqmEANFS1ENFbTvS67Dv2phu1yveZDeFwjYfoupan5eurX6RxqyfaT8VqdtJxniSvzRy71Y7vKkX",
  "key37": "xuxvxNot38wdK3Qfcr3NoMqZfmsh2TJVc7o4NHeG2zdFCTjsY2nhyfppHTaay2Prq12mksHwW4Gi91sgHYkGdZ9",
  "key38": "445oGYpQJ6JWgsiNJv4hN4M5EdHRQzXpy8t4wyqFw11cDdfqE17CWU3vg41VoZEF9vK2BkindCA55LTLUy1HSvHT",
  "key39": "2inSwPqN465evWXbkmNUFYQhxNhFzFbmnYaz7bhKQicismmTqaWepkRexGFUnSMYf7XE1MoPxEAP8biN5KGXadt6",
  "key40": "VvvHi92UZ3utyDoRY49JZS529WL4TJmWdYwsJZ9PZuV8MYBZUenUfaFxH9HDNy1mR2YixRq7yumhCHUEJ5GKD3X",
  "key41": "4wrbVnm6mUKSqMgo5ogxq7smn2pFmiVWt54axN8ZiQE8YrWJMY1QJBqiL2LrSAqFViSXvAa2XAPsFu61cXHDKPLo",
  "key42": "2tZuq7PNGFSQnoFUJbAzCCkgzuZp2e4ZbthzZpqyHVA5THXAviWhPQfd6yU6N6fWN5YDcNAheWg3XcVuf1kVH4v4",
  "key43": "4wb5aVVfYCQTf97K34Bou93mqFjyAn3BpCLiwknX4bYsxXzFBX9STEvrxGTJZy7xZ73aj472WHosTSdzGTRAVBfu",
  "key44": "2MMEuzC3CDTD7zsKrcQV7d5aEga5icyd4RiEhnPqZwZiXXzbA6VzsT5gYZnyWJdFyR4wugSvc1auH2zobLce6vG1",
  "key45": "pwXuruufktmpXmagUMJLE3F9fRDbMgQNxP7ZZjgNaGaErNRCNiMaM4o4pC43tNGUVNLXm2WtXx5weQ8Tm6DWbDb",
  "key46": "3Qu4QbaamRoQu8M9LmM7YK9BWkfQJkvYZB1m5nBMquJK97WCkww63kqCk4UZJwsSxPeN8PyRF1qWLbBxPjGsLYhc",
  "key47": "5qLCbHn6khDeNjQzpPmNzbtdyySkTfctvdeYMWNt4w1sxW2UbgYNsk34VSnHEPNuijkg6GevVPoNy3UJgMCtcVoF",
  "key48": "4A3Cx9i397P3HpixkBPCaiCMxoNpJNRHCjJP7WXzbz9YiGH8qMf6ss1f5nHV6f7UFHCbWvQAsnp7HGFpAi2WM98d"
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
