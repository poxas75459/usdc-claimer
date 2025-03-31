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
    "3k46mDCUNZHK7Pgk7R8uKWZTuBhcWAMuyBUzVnWGQ4KUDBgT5CjdGFJtRbcLYD32f1yt5iws5FckejeG9dijyTLN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cDg4hV4Gb3By1CdRLxcpGZonybY3gQK65dpWLDcjsZc6krdpn7X15EgssHWuv5MTvB3dALhrhYwD9XtVxUKi5oZ",
  "key1": "2yCuXSkfG2G4pRYLZrFqDPFWwXPXTG3xA92HmHijoyXb78LcSFzpY7Mk64v78YcxmaV2aXa8aUM8bJM4xYQDNSDe",
  "key2": "52BRkYqvF8Jy3gkULkmqx5ppSnQ52KjgSy7raJPWibnGKashAfhUMj7F9w7DeRNzN1Q7a8Df62b2A8HaSPJ2JAM6",
  "key3": "3v4Gx8VnM2b1bcbJpRvxtbaHRegfNUVk16JyCjDPjZziSSab9uVp3mgBffpjmzjX7fS6uPXjEYGqLB16PExU6k8n",
  "key4": "593ZpZfT9Pn51izpsT9U8DtrDhPxttWhvPB91zwi1cqzyNopdEniu5qBqnfyWYwUTwjsHbatYkNXNJ47ydgU9AJ8",
  "key5": "3fLhauZzPqSxqR4vCMHrStvcQBYdnZGiSXHDiK1LSyV8PiZXMcvRutyqY4myFe5iWT2anhXztU1QSRdGgvfpahnH",
  "key6": "mQY9u76bQiyEeZmkBUF9zCF5wkp5xC78Wgzn6wqrKaHqKxh4vNp2evV2YSoAXPvhB9MY4pSKNTEyMF873X1qd19",
  "key7": "CcKE7t8Z1S4jrjPeUbTe3dUSTR8rDdVfFocoa9kScfzhK2S1TYMhqU8WSzqkMd1rnXnvxx5b7tVZwmNy8qyAyQB",
  "key8": "67WuPTD2c3KccgXMWPC9KaihiSEXt1Jd6tgDmZEsbefZgmxzt2mho5gynUERppyxnx1P61pw6xnwRX1PzUwxdymz",
  "key9": "5dMRLF7ci3nq26L1bpnNC3CnF5JdWDMyZa3419jhNr1CxQiY1ARJUqnwUFt1UkXhTLJsvZBFdvNYRBmqvo3Gh4Yu",
  "key10": "2Voi2z28gJ7Q5X8YYVZBevejeDRYb85rnPTLxhzds7oUKtcmuCYm2QEtVQByC4sp7zVx8K6L8wS6Kxwc5RSVrpXU",
  "key11": "2DwxFn6omq89GLmLdqzUGqqXKT2ZmpceRU3Tf3SgoDGAyFJ9tKa8Yq9UELW7dX7NgUsWypT16iM8w6wHUYjP9ehP",
  "key12": "5i4QUKLxw1z6A4L1hrrX7pCZEzZhDi5Rp7NAPgdwWgFkRdEMnFPtDfvvbFAV4hXh3tGUUhNG8yAmwezLdedRbB22",
  "key13": "4jKDtKwZCxSgpbF29FGEUcj4EYJSo6Em29ZCVcnQaXioMnf3CqDKFR3rZchp4NGWisfi3gRUWFPhmAeTCu8nfJjh",
  "key14": "29wYgd9udNg7tf5hhMaXQKRe8so6ArNX7Uec2vkhTVdTcFWbEyuWZZARGBQtTEVutwadKon5prjYMWKhCFo1r8jp",
  "key15": "2HcNvp1ALdmQ4sqnJVdpXUEkVqgfZAH1NJCe3yo9p6z8LHE6cUPQJ9KPHnso2MDL9oZy4Pb5LYDiygnEdY11Xwx7",
  "key16": "3NSAdE7Kfp3xCYAvtH7L3N9939Sjz8wEu21pmDqvqYHn8MuNSmN5rQRbPdmQTW5AZ3hD53ZXJ8ZWDGKBG9nU8yxZ",
  "key17": "5WTC3Qvgv27M5e74DRgURVGbi5gitfVxWrjGitjL3HWD8itgwbktxciaR6UcYdA4sT9engcyRD9mFiLSbWNicQuZ",
  "key18": "2yfgqscVXMmJ7PNeduZFm9sZzaoyqUCcYHLpLfLa8n7TT9XADESAcP3rUfFKRhowt77MS6aVFd4eXt4PwoBvhPnT",
  "key19": "2uVwaXhHxfC6VKC3kaxPgMkS5tKoRrbrkKHUYwT4EozdxwHpZHnkwyDg5eGH2wikYTo8jb6xGqh1eBdiGPWPjgsG",
  "key20": "cRpYTrRUZ2EN7sN1beS7375GWjQvWarFWMbVbcF4P67hkJbX6ipVyCjWMCqfQ6hhXh82ajGR6eivRkXNLHgNsX1",
  "key21": "YuXA7879nokUpVuFw6VvSRCSJAkmyvRUi5bJsjvcz516aoWfqbo64LK7shKxfhUJAD5LiLy1PvXGXBP9SAb5wPA",
  "key22": "54ouVRq51n3t1osAHSFexfdJito7dLb3SGjYqeUgCa1QoEeKJcHpZZk2JJAtnQHVkXzwLBkxSmNJUwp7sAAWWc8z",
  "key23": "2DiybGGBugC5JxKmZNWDoxMqtfdXzN9WqAXmZuizMAnxR5jaMq6zyXeHwsagUchmNenXt1mmeerPJS7sTx98qfLe",
  "key24": "35QojnHtZLEQ7AsrL1PdyoxY1J52iz8Zkzt75NWgYcCtafMr3w4zLBhBiFa8y6pX3Fxniz7h42EbkK4UDCCyq5zQ",
  "key25": "fUcdQtyT3nQoqLkxf4d2wCpdvfeCeRJALgKaGwdw9V6h7pEHaRkFpQYaXHWAmrFeBdArTp1h99Q8aP2fNTHZe1t",
  "key26": "29GXG9pMRfD8iAusbUixfoWUJe87konYwNEApovQVk112pyVimgDmscyAN5Cscty2w8ab52H8AjWuFcRgbTU8BWG",
  "key27": "4Rb2iD8orrRnKLicgFykfTw7rxWkv1Rn1VVhpZnQPsxopgBMi9SZpfpCQxePUqfXbzURDRe7XrSikcCv6wfq99gR",
  "key28": "5TKjwvveBNyNqUbe82p9WqrhBvGLPGgRZFvWRaA8iy7MwMw3tbimkr2Cc1oeJXG27w696udX4tM9H3YvtqzcUssf",
  "key29": "2VnGd54sjupb4nmjApR56xpxNdHqiiGiTRpgwho9b2oiTEagpsDUMECVb3Ha74AyUwjjqStHM3ZYFjbMhBkzZnjD",
  "key30": "TFfnrumcPc9oHjj2nSe24LoakQe1agkYvhvZ6bGmK4VhYAAASPscLMMnyn6Hod8LZ1hfcTmDXC7VyS3fYrJjhPD",
  "key31": "4EfALpLSEMy71NCVhm6Ym7wSdkMhNXGBVyMY91EAkYxC1a9EbPbJ2ojUkWGRvm3Bq1mSGjpLcLC8ubH1Ymc48pZr",
  "key32": "4vgsapyFyyRzmCEypN8iKa27ZtRbHiQQiLNRA6juo2uH7yMCNVTiagrXqXkmTCKsuSM4c2eJi3jpYbuRy4UhzoJ5",
  "key33": "3Ad4P4Rdf8rTs7WFei8qTQBuCJ585VkRGE2JoaPz9A2v7s1BgUthNBLNgwRs591a7jYV2cyRm23HNurjL8Y7Hk1n",
  "key34": "5dp3bm45Qr3FzqGhVMMNHM2eC6T2gZJKLky2xvU6pmyZp4iSiURzkzomT73pVWH4nyEAEzz6tbVrw6nZvRGwV5mk",
  "key35": "4kpcZnpMhKYdCbTDmjc2XJ3QfsXBLMe3Xkop7rRoadYZpUG9yZ1rMQsNsd2kbWBfd8TGPbMXuEinfT52RJPp8XD3",
  "key36": "2Uzj4UG9JtxxKjDcmv3Njm4vDCzz5mPss3G5X9joQaGh1vZPHZUnxYryKmwCwDoBHXohvswTKKcBkc5MZs3kufcN",
  "key37": "4hWGc3VyGFJKrsoDhcVJMBbhTfwU67yNTD1ditfz6uDj9Ew6hCN878xbxwxrULM1pf8TdtMoAVKV4aSEXzUTow1e",
  "key38": "55a76gCnUXec8jy658MuufrCdPRFJ5DeCkX4Et9agKHkJgi34Fv4DHLZjaniZGk47wztnHvX9qVNaM1yM2etg4jh",
  "key39": "5rWU6skjrdnTyeJj6wFFyxjefmFXqRYBvUqkLXfTVZybFY1ykKm7LvFWzmepC6oA6BBrzq8ZvEJ4HcexRh2629QW",
  "key40": "5toPkt9tw6GBLZhhVkbBUZ5HLSzDWekFrV3CWZQ4Qb4Nd6JQjC9uG97WRyXcJujMrRs453Z2JEZCCUZgN2AHNkku",
  "key41": "ptzcMENrd5ZZ1stcQ8U9SQ9kBJpysBmocSHUS9z2WccyCQ7wjGWA9466EGFFVuE3d6KXooeCgNELgHyLotbKvE4",
  "key42": "4CzQp58pnGFu4RVdrBJWYtT26d8txmU2YVhYxr24DGkd7fGpgnaR4Jg9aC7nJJGMqqbEJJGxAbj39RF66DGGtNkg"
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
