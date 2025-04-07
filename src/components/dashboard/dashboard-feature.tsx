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
    "3gPKzqiLhwWCmhNXo32eLDZ5UVnCZ8R26Q8JB82KY3rT9PMQ19RTKuyeqZT4pYP3G4HSmLbcDY7h6LhSmsYwhXsQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VCEGY9gCzp65XbW19LkvocXNCmcLZKLaQAZToVW9GjmG9csyVwYy75UEKcYXc2gnkN2AeLzf8W3UoAxmmgD3F36",
  "key1": "StrG1aGQsqg8SNyd7hANQfkgsrEKwDevFvbMXamS4W2835ENHvDkkEzkoY3jW9wXgDdAbfS975ncR9dLSzk3ToR",
  "key2": "3ZWdz9vVtSSqWm3jxjZVuFrjE1UYqCtHTufQMrcNBFujzq1vaXHMeouN6KsLNx6zkEyRX6F93GpNeDKmJM8NWthS",
  "key3": "4Ka8HuaTrJRDGJDNbXXaoGoC6hLNtpmHh14ozyUVgUrw1nPFcjbmphRPspyBXrkjHRFA8qZsFqCZQgio6tYpooTN",
  "key4": "4L2jTDJhQWjgSRkLK3b1sQRpn7a5Rq1vWV3XFVLfPKBKWL5WSmJqTSQamBVuGwWfkvv5RBv72okRDenUzCjVFxAN",
  "key5": "83Jj1NckVbUwPx8nrDWz7L9Ss2tBHVdhTydaBtTWCSb9t7QHhPwE4TnFxyj49ZTGwNyLTJKE7BHrqDQrvqMqKdy",
  "key6": "43Xwtrwc6fsSk7NXpc6a7u2zXSo96wFS8xaCwnnwxdKQZ3yiCEaCuxMAhpAVP5cKY2roVuGCdBSKraVAspNjZwUE",
  "key7": "2BRh9XXNzsMESn4kN6zJ75bEkvXEjLzMNKRKwEyjBtYyoTp9hJpMdjenxABs4pXQr9By2UAFGVHYJQwiVpC5ShhA",
  "key8": "HyxFMYzKX3z5Vb8YZFHPT2f9JEMkokQ47wmKB3M1xir3XZckd2ifdy4ubbp8Rnt4USu5RSGWC8TPBrSosaard1G",
  "key9": "2y54z8W8oSCeDBoijvX9pr5zi2GGicD54paCwn8tnZ5rs73217gKLpeaKgoeeq3xDMGkZCxBNmzimC5U4yjundAV",
  "key10": "4wmBnPhtuTmDB1wkTRBmroD5pVGkKEGHxeHxCCoHkiUXnc7hk1u4UhgnjaHQHp9uQiHdVhipGS5mbunJcTHSGjLC",
  "key11": "3fAXPhf39vm2FuEJKeAo3n6VFrGxFuZ1gym1Y9XiQnFw7zDTmGqqTFRUDHv7VhHzuWVKijkPrTCoCn256AGRFXzJ",
  "key12": "4T6aZd5GXtN596SUZVhtfW7TMv8vV5fonEUYGdi4zdRroffsbvk5BHMF9CmC8ZCrEvBbLNVD8kf1o9xYcDSWRhe2",
  "key13": "249pZh6Z8JzFHtw1khKx7PEa2oHu6QFEfxiUQdwqHu3E9qiKdXHVKj3b1soVG2PapGFrFcur8DQC4G1UX8rRj2TB",
  "key14": "2nLeTCpKCnmktkVuQvd1JEkuiTo1ADGPy46L98dtWpXUAcYSSsr3LMJM6rhZTfzDAdJ4sGvD59RvVHFWBG22Lw32",
  "key15": "e9eS7jFcQKhxTHddWQ8RF6UvnZYU3SsSWCMxeYkFC7cDuwt6bZaoAdRkCdX4iRbWyYkpkiVEB24GLgCsrnjuJ54",
  "key16": "3gBLwJwwKk7C8yj28SxuAdJ92ZfWBY55CBCA4LvB3YZTg3e4tS2tZ5HC84Q5WsC7PXpxVo8czwEqTYx4b4ohoWky",
  "key17": "4v7SvjSx8VdykY9AYzZTsxq9F6rcvQwNc9M7S1V98ZRYQovnzkGqmDGpZUgRXVLdfKHtpsavhdaWydK1t3RrqKhq",
  "key18": "4hDjAgKaHi6FBwva4PohPCfedwGw4MnyTxZ1rEscAdfDK1NVCtn2nuynYCrsfUotF74jKV1XrrzBkbj8FNovmjK4",
  "key19": "2mnnU9m61emqAf3u8yw35dsGYt68E8NPzcnzB6vVKAvRHzG9PKND6wVzSHXv1JdtAcdyhNgjfotb19Ey8VvS7igH",
  "key20": "2dzFqE2MBEXhNM9B5VqP5Awo8cS9ewSXsprFCiLjfybejPPVfpwX1rPT264RB46G3TJQKJCHREwLmA9W6cHGW9o7",
  "key21": "4WwEkzWQVgXTnSYsxfyMFDycsJCbRQiTtYk5gDfKxjBGwfubj6MioJ83S2Cjpdhfodjsh647tP6KJwg3iPBePQt8",
  "key22": "5CdxKocqU5N7ed56Qj89Hu7tm4RnuXKj8Gj12mLuw9dJBwkDMnsw47HL2MjgQ2vGtkY6C9iwc1jxuSttjhyhfxB9",
  "key23": "4sEi6p9wXB6FejfQxKa1M9nBHiZMEtYCSU1tsoySvzaoaRVPVNTANjURcTt1zAsLXNeaNdVc42gsiKqMC9xPUUSb",
  "key24": "FkZCzAryGTsMEWujtv9w6uyUcL6AsYLtFy1CHU1PrckM2zvJvsNj2mhvp89V1JvcjqiJeNEPE2hwaayQfQFcumC",
  "key25": "5BLM2vASifSNPAoEcbjnSaZwNSD3cm94hA1yPXfvonq2HYYgsr8CzotdGK4YTTdSRcmBkxDAeKVQibMtUB5GbVrB",
  "key26": "hnVSvpxPU4QCsVxvyhLgDJGa7o3fCv44gXrfULJ3nKfRTY69wAJARRMQ3tVDRnkk5reAFnn5HiewxuyKAgBsKCN",
  "key27": "4qfafXZ69SuuywGVejZBNWWJ2QyrbPjTqsxwgZHpFfTG4hcLJVRBQDRsmUirt1rggyk3AYnJNiLC1Emwuku4xjpK",
  "key28": "5kHv9yj7upkBAzQHJ6CuzdMgzFVKW7JPjnEadNXACpnUCnMMXsrtapQoSiH1P4NRsPeJZ4NZRTPMRQRVPhpHynkw",
  "key29": "4iJZceh1gzaMwVbfRHYteYXKpxaEC5WAxtkXhetoEL3PhqQrYxN7iFaFSRTZHJWeFKcQUFnDeNh9jp8VKbhpMKFr",
  "key30": "KJTfgAvKGJREN8k4kPNRm31yXRF1ueDoHxRWPegjhmnjqAPzuXsvgfsdtftCh6KrMMEejnSyRT6pYDi4uWNMWNz",
  "key31": "4P3EtEwjWGMHbkxdN6TvfVBy48844apwLMcp7sJNgs6SxdDxGVPmkLqyZZDPkT7QcMqsntzRezHKgB2wjQZYqdsr",
  "key32": "4CtMdqHh3PPk4z3D36zw9HBaYxhQ2ASwFMfi2ZbM5u4qhD6DrYye7Lu65fjHTBQQ6kBFRh4RKwiG2vKhUnmKsFjY",
  "key33": "5jiGQ7auzuuBEZCy33hwMsfN28AYMVza96RyQ9F7NQEJVH3wL9r3xSBagfA7cdoUGszpQo2ZC6mrryS7Zibdj2sm",
  "key34": "petjZ5MRHCbEpmgNUffDex8fDLs24sc6827BmWfsTdf5ccinityeZb6brUYpGaQpMFReASBW8iteMt9d3rpXmag",
  "key35": "5RFUiUTzSGDJiQhwic6DbxmXFiEpmGW9eRfeJd1VcYGJYQUR51gGPfbczAm3qP1wgX5bvtRB2a1J5HA73SiY98j5",
  "key36": "EjWXf7ZxVVAGRryQFeHt44f8t2WzU3freNXc5Ha5MoW4PeKbPZBngN3afNzmaAEfLXgiDwADAGzH9MRzwTb91HX",
  "key37": "5Qu1i7oj24J15Dti5P27sK2mwv1TEfpMiUczqHwWfZC77ajDwSZTbWbjZoLqVaGFz7WKb29NPZdBXaBg6p7geAc7",
  "key38": "2LAaeK3HUBppGmMjdhUBHx12cUPNYvvJVUsPtJ347fF9Kw23wPGhhQffXmY96RV8WrN5HFABBMoVuM6WS7Dccg3x",
  "key39": "5B17uqVnn87UdTdk4hUE5vFXo3EXXzTkofWMGCpZBPxBttmWsKgr2f9dkFcAquy8Y96ufwWisozSFfHzry8t7c4R",
  "key40": "3QzjhtUQcyKfN4NKuJhzXMemGum7fnBpTaxE2G3YhyEVNBSjQ7DHG24m1q9XPdGtocgHfHwsiYGQ2X9zeSZEJUad",
  "key41": "3z6aKzNUt12V9KzPH5iNfDVDWpKtCuQzjCy4oSQo9FerpjwkpY5ywXMdqyDw3CvbBS2BYQ29MSH6fK9Bwpc2JTMi",
  "key42": "2ii3waBo9jyfqDL3PLjd4MsfNFWYv7C7YFuDJioDz9yVGUz1DbcRjoH2RwfLJNg9dRN3217YrrNVHEE74eixUtSA",
  "key43": "jWXBPA6G3xPThNZpipKgwA95iptGbEjxutdkRUfCpqumKmWV4idgJyAnNSSgwzxAcBQoo6mXahESJgpB6vWAtvk"
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
