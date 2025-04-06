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
    "4P9xCvQk8XV94KHw4EjxSgTbqu6aBQJUPBhioFwtDsQKQfqfdTPZDa6MknD5bFrQwV8Svynq6WcmHmkpaRDaxEhK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zmLvxtnWd4xC9dS636cj5eTxvH2zkSUkKd2KGS9R2qRpdXejhjUTyKEhYnW1pLv4hLvLi9XA1ri1o7DLU59W35W",
  "key1": "4x2MyydwAQpBXUx6LunuE8csRTocWroSqJvitFzepbvYxxuj3rHJ8DDKBLNkji6RAHejycwzEADhnEA7em8AdN1Z",
  "key2": "3vMyoB3DxMLv2z4WVNCFSoEhEozoDyVo7iXcVrtbfBq2tj44kERGH51iWYwfxyfcEzwPjXHA26dJspj4o3kpXsw2",
  "key3": "4M6aocvzFX2fv3hPpyhRi3LVSkDyRYggkqnk754ewNbPgU14ZwdnW53WUJ2QF6VFvu8RWpE1mJFsQFdYNmvtSZz3",
  "key4": "5s2deu9C8sieLPDcT1QSZEqckguFVfdNZaKHa8D9xiXdCjDZwPFy5VuzNDhRQc4W1qpBCMqLaG6SxeMK7LR2CuCP",
  "key5": "2SSs54PGmHmzg4QW9GYQDXZBUoLjreTFuc47SbrV1dfydxf3ZRTYMErDadc7wCZs93LdKzyGcfXekbG3GCWy8AeR",
  "key6": "22tmMwFYTwsyhvCD9TsSiXxnQhvDCbUeYard3RmyePR6qm5Gd8kptgy7NKrWXP9iphKHaGTMLiNy7LVxtEB95iCK",
  "key7": "52Zgfg9A1dYpoLdvefmqkBCZR2VVneCeQHxqxHDj9TipZCx3ZJu4LsGnj7gAwQBeWYktFw3a8BkNJPGmn1y5D2xb",
  "key8": "3rEiWSvyHr9v7fm932eCRcdnAySh8z2tnatf1cVBwfdQeR8jL6stBB4J2dpCfwxpWcHkT23wLcDqQuaYQHYrMm5N",
  "key9": "2GZ1ShBHnNK5JqERs1UgLPjM24Wi3mtv72QWhDBAS2tx8psUePEPUmLdtrKtr18cUUtY9hy165DaPFN8fhq4Ut1X",
  "key10": "3J95jJrzJ4BPWfDAEJ9aDNcmaTsmyNCcFdnCHU8edJicWDkjUKSbA3Gzap1TPGcvKhDjpNiuBxFw3H35Atcd6YZS",
  "key11": "2czVTWj9Bowtw7GvYd2uorgiJ2QwFcpVdXwiqkhjrdD1vZLR41P5H6ir9JX2kAbqPcsFhRorGGPp5o1CLZDB9tSh",
  "key12": "JMxn1eK6AuYkcf4qQVTXEVGPTRyW15okbXqXGsuFXM11p53JFXbeCj1F4Y5KxafiWyhUgjJy6zMdmm7MVP3Pa3w",
  "key13": "3CdujZy3DAce8fCnoujzDnBZA3eiJs3xmkcSBgErgyfKrPABxQq7C9hjNoXwRU1NJVXoyJLYVyN8FjpebtghYbyJ",
  "key14": "5YMpVjZ4rRJyU7Apkric7HhjmRyZovP5ZybjnUxhhHGWfw5fiuViryD9teZuxyLCGM1JoipvirfGQiKA1inJmahD",
  "key15": "2zhNGhVe49iARiGvuwpVpsmfXU6WVKkS2REHmBvv8ubKj9bCq2wp5jWfVz7kKD17k6qazwJptNzPeG6fpLwpR9DA",
  "key16": "33widuPxsnbn9adSsZo5rJsaGNxv559wxQfn8MKSoRS9QSFsMoazgZ1ouCnBsREDdkKF67JwMzRDnpeUMMcfCVuj",
  "key17": "enxMViWzwcGUqGUze4zwnqNZEaZZsABFMYCkjL3qbAFLH1Aau5EcV9Gza3CzN3KRHqxF97KPbKBi65jN6Z6m9kr",
  "key18": "3pQEKFYYH8NEA3iPpiMcYhnwnwURFmKUxD4XJRLn8hC4qFF3hH9YGrsDLj8kkm7N5RW1dZvRVfzHoYf5vyQiAVeG",
  "key19": "2QDQGn7g9qo9oepBK2JWwdpswN3WQPQopFzP9wUpzQSpCb6qgpvCdXS9SndJKE4gkLvDpEDivk9ivKaYhVATJa2j",
  "key20": "43jCV6KKuCYEKZyvTVZUzXJfjvZSdXnasdZWDoHnWGqc8nqV1gHRka7bTf6UtR76v6nUg4Yz53H8Qpyg6azAyVAf",
  "key21": "3tR6HNc2Yu5jND9UxnTxoYrG4timUjgYpFNKC81MJvwneEgbgbY3n45WRd5jzykZpN6Cw6Pn3gRm8uNUP1681iFB",
  "key22": "5DqeF5HoSGb6PhFzU3YQzWBjQhyBzvkcavhQP6WXXSpxStwBZmjJKp3X2iFqgTTDvbdrkzrtqTyamKq9KbQ6FXfA",
  "key23": "5nMLDn8sQJVsVhtdQse5TGxgN3EZmPdePbV2h6etXJis5Kdyj5zwpBuCMRb9rkhMtd1w4Z9ii9ZkucdBLsf3tHTm",
  "key24": "22PMRXPhTR3T9GYCouGyWj8HpCaECfAm39CnKu9SBzqckrfSepZniNLMc4fLrPnP73N5ewWaGXmhp5TGTvW3D1Yv",
  "key25": "3J2Lvnbyx3esnXbnSW7RK1JJ9t739QyeNb2AXhCA9VjHchbM9ELKe8GrXWLJV1bBf2qRpy8WDwkruijqPGGtXgyb",
  "key26": "4zRz5Mo5rGSPo2WYzD1nkNoYmGTXjPMEvNuQhCPajWkaao1AKygMFGmWZ3Lea6LVkY8jNK4poZi5VGijaGM8Nzfg",
  "key27": "37u2xHy6umw483jjUCmQXnfwd8Qz8qM4kAU3zEzhy9EQRm986FzsReDTBdkUeFsub8ULx633uPtVB7UBFuQyj41y",
  "key28": "21Wk8qWaJqyDTpjPZ4ofANCb2TH9N5MrPWnwUgJQdgNrcH798azpqQWHe1pRewzLPdfPd4zWVAnoy3VMQT75y5Kg",
  "key29": "3e5bZZwF3yz9x2pc4fKL5eew5FBeuVsDSjQMkNjSfYntYu3XzQdeZdSGwTx3yYmPMwVLGvFQvbvjwFbFetzUFt4i",
  "key30": "4UCuqA3jpuA5SRCX3akmjQu97CrvyKybfNk1Labear8DFJeGTDsRwfxsNb5pnDFzgXyoJE2xECMNGGKgjcMkG1nL",
  "key31": "5g4BFCrYJfJ6PVv2ijzM8pj1Vt7Kf669PHyyyFm7DQ1As3PmLQ7yH7ynNAMNDtkEsckbsdfPCmooZWJAgXSqLADG",
  "key32": "3JzPxNzYcpk2DbhZQuHkjtz1YBGUgjqdLm3ofvthxA71nP7oFEvKoKSExzmqHszXv8dfVbnRfKJXUmmoBiicrdho",
  "key33": "5xJEWyu7HZj1VLW2RfynBAtaoL4VCGySVCYqUKHqNvrDcLRYXnmEhZZoR8dppNKLP2hRtCd8McXFx3LYpE1mi3co",
  "key34": "2WW5DPrKUkL7CSayRRd7U28kbpU12tGAtL4hPqmw3JYmebdofnFGvBHHpE3sMh25KAmdKQy4C6siD2BNvYdmD3ys",
  "key35": "2ZVpV5CFnKe9qKtAnJPEbTbqhnMwKpQ6bor73Xo8Ned6QEAKrmzVAPiyvq7nh1SyU6LFRb6ZuFVHiQWbWok4fQwr",
  "key36": "48t7xzBtB8TSCxkL4mXMhVocekoNSYC85s3EWmW1JUaCsahyHTM9zRUc6HvDzV6e8exjEXBYaS2XKvyS8d8648Wh",
  "key37": "42HPVQUzeKwQR66J9LgUEayykvbxm7G6FfZdnTAfL9arvxyB78izufei6SVNgJekAN6V64gVXPWhSiKZHSbGWqRq",
  "key38": "3Jo1PaP5YMHZ3yomTatTeaZpi7QovEkYNpF7Yvjn72NVoEqQaWvCnVV9nyrT4K8JgQiH45UXKSJtT9LS9cc5riU",
  "key39": "41p1eP9TKwDGo7Vr4VDXRG9rn37cKu1pn4xfzatJfTBSmJJgVFnTYEDy7V6DnUtP9garv1Vj6UxSuUq5EGm3aSPK",
  "key40": "2qcmc5MHGq1YrDGSPuzd7vSfcQQWGJachY2JaP9kMHWbBGSDuoPZPrSLyDoKp8HEMRb94Jat2N5qp97uQrgb6oot",
  "key41": "3v9LBhBrpvetFeCmGcTwZ7XM6xQRFCVEADYa96tEdMXTUNpXuhYZuWwbpiRc94NyR5Ljwwv1ZhtZVHH1Kz2GgNHW",
  "key42": "4xPvDSStpCKQdod5eQLfmEniRXyabLDs5VQR2m6zaYrW1fzQdvTc1T44icQ2LWsXsenQ6VnvHnYtx2Syfuf2LZYc",
  "key43": "3VA5zbJDMsrEZpTNCVdsSXSCCBgBptSPFfetwqjGqXkWiRWnvB9c2VMehagPb56ivky6FfdTE9hqouSGDuAd8aDT",
  "key44": "2xvQrVUweHghPGVBGGePnwUP7WE3jSSsT8rZBu4svMZ1KLKYU5SfAYqmCHD6BDK3FTC5vcQhU9kz1P5m6jKBZ5b2",
  "key45": "3GcbBuNY2HoBm4KhMKHScdZcA8pjcDMkJkNG5D86u7ES1ADE8oN2Ftk5wjfKB2J2TLFPKGUMQyuxam2qAJKVtUko",
  "key46": "44dCowNHkmXFzXui63PMH4YnyumC5ZSwPVB8Re9p9sfhKSE2HvJxywb22DB8pvycertaCF5KBFjC9okaGZX7BNzm",
  "key47": "5xw61HreD7DkYfZiYir6S7dBMeo6nSKwfdQNQwkSYbpx2kW4VwdQgayKczynZTs56LsN35BkKZFCQs89Lq8kvHiw"
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
