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
    "5fCEriVqrWkn9QMMxykNYRj16G6pyGks9pK4kqs2X5xRTm9i61FzHvK8mFPvhbFKQyrferZMfVESH1kVzGnHJKZS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LAKhiEKXzmUT5pEJzrXKj3b6pFrepfogH5VNf8FUUroMyPG6xW5CTvssZn3gaoBteX6dYCpNwagHqzVr94ty8Ak",
  "key1": "3eQprsYgmiM46BWrr7A8K7jjiPDVWKqjraeTrMrGANKs88zbMpciwFJjkyVkJDBxL7xHTzFNFH1TP1Sybw52UN8S",
  "key2": "3pj3afGUF1bSz8sknp5iTLdy1TBQQdyv7eJVobh2fakBcYiSRxLzkTFSYY5ePEHqEzVu7296XJ9J1sBmokcm8g29",
  "key3": "3p3zPJBxeJZPbabR5iQpyT5DXooK9cHqhvgxmVCH5evwNacud8ozYDFw39PeZEY3mBEmr4DWfHhktvLq2cCCJ5zP",
  "key4": "SgJ2FVXxLo3WDYjuYdZNB7bEezHzXfCnV1oEUV4yA38u6ANUjM9og5JBYJGu61PyaWUhcK6wjQz8f7EisQDagXQ",
  "key5": "4AtYSjxEEieZNvLhahJTKKb5pdZ9SiwHUjc1TNq8WjQXSKPA7AWP8Gnzu65qhMKrGwmA4GNHBdE4Ca6mv6L4C4YD",
  "key6": "4DjcRapp5w8b438Q7g3jQv9mRVMWAFPjuVfFfeGUjHASiX8Nrd2GPnPAmvoPcgdrGjU2iHxGnvkcx1H5BpsU8inW",
  "key7": "C422PwLZYNGbM4TTFuZcubUkeYBroxyUezgvTcesPSf2G8UcaC2TPvjHSt98vRgbnuYCHrqXu2uxupMPu4c4F41",
  "key8": "FdzWt4rdUVz46a4FkZebzJS3X27iukAdQES5coLYFxSsSPjCSwx2whnfG8kzg38CkfevRQ5BkLpg5PKbgwT2sJ1",
  "key9": "6Cr5bqfD876AcFoy6G3e5Qb1cVP3ycVxmJNA13wAewrweoktgkdsxdFwGsdc6DAKryxY2xDD7R5WwUcd3ECqyrv",
  "key10": "3bkiFpn2r2qhSamdfGfahx581QTA3AyMtjcysmoaCm2mqHauHWZumHXepa7fLFZAtmBHDMNMPD3yDrN9TrrLANjx",
  "key11": "5FZfyd1hee1hwC8kJZByHh4VtgDQEuAyXQ5fcj1kzSyeGFG2mQ5aiRTGo6dTQhMgXPZjGUUUxzqn2dLyZa2amY7J",
  "key12": "5M9F6vgsYrFwBReKmjfJu5GBRxT3aHGFzKy8wSYhYwP2bqMbcMyzumVbtyFvrxebuk3hwQpWBrrVhdEfmpg93pJt",
  "key13": "4y4wXHpTCT1ZPAUKoqiCqKbZXBLVjXnmMiDeWkjU4tPKEpAxPmByFhNCZGoP1sjWck4pnoJTeP4Axtfw3vRyvWw",
  "key14": "GmTb2JhEwqMtETNMztdzckVRcJChoa3Nm1svWf4ou8vZnUyQaV8QLN6QJHYF2uqc3w2hm2CAusFMHijFgXscAQQ",
  "key15": "k81P79Fk3taNM2fubvqMLZeuzLnDrjkMPtBTc2urxHmhrdkX4oVMBScAaz1CP5mCHjfsnhYzgbrPhrkPiiaVnQz",
  "key16": "2kuZZXqH62fo8SHF4rYrC8rs2QhwLGzHwv49XqrqtMXZJ69zzV3cmQgb7wRZBU6jR13HmCKdjHHu6oFdYjcp7Ppk",
  "key17": "BMMPnc1vDsmrK6pmEysvgnhKq4HDEWAHaviRDY18RpUfMgUoensP4t75TgdvJqyWdTdA6mEj5NPd2CHbAw8zm2S",
  "key18": "4isY6A9v7xgA7PAsGmS3R1ar1YH7eUZQpiWcUGLfbjPiY8PtjGxvSm753wvmXbcubA2fF4PtWv1TTRkSUzdDnLQQ",
  "key19": "4EdDynSCb4XEXTemvreJwDi9h7Wupegy5xAcNh5fm9pnRJBWS7PrhBCYcB1av9p2wMsj7sd6yJoZYMRJM7c1dxo7",
  "key20": "jaegoynC59iwbJg1FRZyRgaCwmm7gKh11qAY3WxXQyrf8ngT8j8umE3MJHiwehtSVRCimTVg4LcsgFNG9igVq1s",
  "key21": "5qsXZXK9H1w8PaKMrT8TcJ6Wk37xgBjGtba7Kn1aFh3z1J2EK4hg4REyWS4BurNn7whPHRjTL8DHTZhJqNBgwERf",
  "key22": "3gGpyTtHD6CRkV2mTB8gBZGdjiy6eWA8EnxT74kmtQZZmf2yp8ZZGL5C72QwK8kPLLhRNfY8V4NFTaccbMhXTHoZ",
  "key23": "3tSYTwQk24ZGhXgfvbxN7a3apgth3o5SktYMcbuH3wg3t77fmoPYiNvVpkwvHHbnDAEbPTdy3n23r9e3k5W8hEVd",
  "key24": "4kjy3bVgmSZDBrZPo426uu87duDAQRXnV8nJBJTFYVEAp1MQbo5zWcfVW61HjTrvkk7rKAkjxiBUrgexMJkYUP9u",
  "key25": "2i5WutyCYHu4KL1zXd4kdVXEYwNgmqofjsGyeYCZTBFfqmhqoG7AEtDZQ9pEpTu2xbcyZkiHCvna78KS3NeaxNGW",
  "key26": "3fsbAKpPfQXHdM2CAebhtC2qbNxuhv6nmtxy33mYDYDGqA9tX2c7gMcRkGvMWmgjHVpmptN3sSxBQCgmHeLTUkP8",
  "key27": "xUZxMQeS7syPmfzFGsNPGE42rCPD1cdY66m2syXx1h9M8ZhYanHAjp86TmNGUy8CkKL8vY2frGR2SuEUwgaZs6E",
  "key28": "4VKwXYKeH94Z37is6nLyuRGbv9g7QydseyPWHB7782cDer9ot5PTYNHQx5XQghxHy2ux5i8khWBk4RtkwicQD33z",
  "key29": "4AuBEX7Trtea5tXhu2bmw4D7jEvtsNLHKUmjDRh5Uqf1jDDf9tqPpPNVENjPE6U8CZJykA9PuPEJ7y7T1PySnn1g",
  "key30": "4hMUA5iKhM8AVmuVzxH4qFPJFAw6bWz9JMTA7h81m6uwoMNWFy1UDz18ZXLQT8wteBgquEMgETfXX29JfF3JSjxV",
  "key31": "Yy7MQpeacTPmduNkofDFds56piRnmKutrWxVd8k11EkB7LJLVgzbLmaYns2bZchASMcpL8gCYTcZPGqc6sQSMVU",
  "key32": "2wSzso5pvDoYUKsUmnSLozf3xpc7669J9CBWSXrrm6ZpTsriiJa11Laz8y1GKT8sUDZndctsPG8d5J6osmRAMYSq",
  "key33": "2iK8bpAoSmLL3XabzGBvfDuYmurHAJfdLRGxVLtadN9yLNUXnKnK6pTyF5Bk1GYFSedFihc8fBECq7rAnVVJw2YH",
  "key34": "5ZfMBgAT8rnrsin1Fvotm5ffCExNknWUV1nB6kUEXoSFLwN1DTkR4ABXAgUQx93HGnHJmFmShqc4dosLN2jrnyc3",
  "key35": "43RqQDvYk86csLDtUUxvPgnyjKG2ZD3Tpvk1sABqda18v9zAVpgzreCXENK2cvtidmqFds7Nr1vKWbT4BAni8fw3",
  "key36": "9F1LVfsTyvGTayYm59yiS2EAtuHghj1MGi1ozBgxysz8kGtzJ4ijvbmbqfN2kB5UaEQgMZjdTujgVuWh37SPTeA",
  "key37": "2Tq74fvmmRhirKpEPwSCxGiegyhZLsh9aFSKmpogcKkPSncMHdvUcPdJuGdgYbC8QuMmwdMB7XvG8KCh8dhfYcjr",
  "key38": "3YHitGHwqHWtfyUJmJYCcWUubdQDk9VYU3NzZSeF2PEx5651hetRKYvhHJnkYK3Hrx3RhPwbTUzqPYdxvhXK1pP4",
  "key39": "PYatxGPWCqTFRqok9wfhWo3AV4ej8hVSzrYEx4aordeDQZDAbuCzGUfmPtb5gRbCS7J888ESGUdjzc5w3Ucz5v6",
  "key40": "48xApKh8byknBUgNrp4k2tRier65pHUqRc1EZJoTFSWz3NymePBDU7U2BYVMrY6SVjyZmkopD3sNFVG1VTwiG8ky",
  "key41": "bhsmLaBLzFZcum7BxyomHBh5MbdvN6WoZeRRqH8p2qjYovh5BShc4fFpdJwzDiymRv8xy8zQ4U2UVgLLqJP87CE",
  "key42": "2qE6ENnfi58abX1qtci1uZVahyZu9mUdHK2kNPoFdyf8gVvvZDuP3nwV7gXQH2rip6qEHozyWygaVSX72Hn1goBF",
  "key43": "4H91BW6E3t7cxRCvt1SmcNgfBeUrUs8CQJV4Ve8LXjN5oMsQyikVadAM2pJVaf8BQYdPtyz5mNqEg1uN29h1VTA6",
  "key44": "2wLuUkbwux9CsnGBQToYBZwW7B2jC4GM7jQhFpJQowhrHjXXy9NXijYTaQrQP5W9ARbuATVahMJKqCM64WjD6RvB",
  "key45": "APrn3AVzJvvs4NgxaKyRPDjUKzMmegrBgK3eK64Tvzmdmf4zi3XLDyYaD7atnZterZFtpdZpkQmtj46vmytbsah",
  "key46": "a1ohMrF9Ydq5Cwh47bRe6MGXtq6yeWHwBjEdET58eeY7yZySDTHAA11RJ3hVcTpgNtJtksHxqzuNQn1krzVFaze",
  "key47": "3TKdTCAb4f6LYEvJVcYxS3aeMkULUquCz1iQkf1LqUbLY735SEREkS1FCiBRHEAZURUTvxEHHJbY2CgyuzeWoqhx"
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
