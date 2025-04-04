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
    "wavGLiVAZ4h52gasPhdXVKzj8V966WA5QtEtewekxSgxBETxPHT85znXiT5WuSTiyywNARd7k4TfmBavLYSwrrp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cYmXt1RxVTTBKE2DACPGsNBdXusE42QkxwAGA8XJ7Yn6zEmWk8h9b2T6n3A2pF4MtuGRN9Mk6eQRr8XDRwRJMpb",
  "key1": "4bXdyUpYVSqnLpuHyfCKSunfT7yHkpoBMbetVkAFT2i7op1FUafxgd5DANw8PjfngbfmnP157r64tJkAqZ5HoJqG",
  "key2": "2Z3ZS68Qo7oByFfeHF1r4xQjRN6CMgjQE6bdAdiz4z2ocQyx6Kmf8f7gTaq5xt1N6MUmLwUtWb7RnceFPHSFYXA2",
  "key3": "zWpmTY4CAk4cgZvovvBvBRg9p3cFRyanDM2baazoeCSH5yCrpRu5ctoRb1GGTSGXjGpwE6svPufMRANDdU5yZVC",
  "key4": "5q3VX7ERcLNNURdcrM4eaAeEcCdB2ecWukrpXQ8PpZJq1Nc79vhDBF1NhPxUssrriruGTaKy4C3pmL4Uy87DNJ3o",
  "key5": "5WTJy6j2PPMojnZLGfJ8ZrduwQB1tkUL2sCSJxPzgQani4Yc9FmHZWTKCvGVZrQKeUdcjHAfyRwXKaCDrLkUCsgV",
  "key6": "2USWzz2m1GCqgSu88CAHAnhkEmczbdC9L6ADjveVy5jZnki39nAMDvLM4NaCkqzgiGDFutDaCzjDwSmvjcibAPsy",
  "key7": "4e9QLuz9xn24Qi2ByYqAe9FAQiqER6t67u8p7TH6FGw5qcjcEqKuXGMdxFzvPirCKLKvWMumxDehjZ4GbmGRLygR",
  "key8": "NqBpJN6pCtB9ZQtJmtDR3LPvUwcdxqdbAANGPmctLbQ5XegjxEnA4UTxktK6GHX4tfiesuD5q4hagseJSE8jDFM",
  "key9": "3XaVMqmtC8iDEEwQMn72hFvPmyc5JZfMrYSuLqtEAMA1PRgQAYf93X4op1nkJ1kyx5ABxjBjDG3281oHZjwA3dB6",
  "key10": "4Hh11UHm3qgZTCcCjsnV4x9ZHrcfWJp2NLzw4JKvjX3eQEQXVsENcEkjiiCddPgrdkB1GRML5BU7prcrcdNdeh9g",
  "key11": "4BBnZhP4Yc45xVfvLSVgJKVNMWgb4y9Yguc4S9kKtsTkGHJAGe9ZvfWmsMb1AUF2uX9pee5vKrsAVQUgapro7A55",
  "key12": "2tbrwaSoAhWyfhvDnqLQ1wVr7QK4XL39nYPhqZieEPu3pSKpJ2LH5kE1hUNQcJJw3WXmmSfSRxD1zz3MxAa9nfEx",
  "key13": "2jtfrSM4A9g94N6PvMGyFuCDtWC1dJLiMANJR4EdSVHMNvJoVyMst1L8qWfwtcJXUA1UCZkku9BeWapyoE4WryT3",
  "key14": "2NQTs9zkhhPy8AaCZJbdT6QHnLJcredburaEE5bPcfk3PTyNfYTjs1cfpseBAULCeRFbVAo2j64g86z5r6xdXadB",
  "key15": "y7Ti8egEjpfMD49d8SvcWSKjP2cibyTdJymcVj1AjhH2QTgX7ejJxN3je1wnRztEbnTxByvvC4Jm3kXFyrmB7Td",
  "key16": "3GAr6YcaqyvrSKViyqJ5PKkYEozNUadUPwSVtqx1x61DA7ZQ3deNWCjQvR73tRYKr8dKyf9MTacz79HwBbhzRBju",
  "key17": "23ef7LNa6YvcJga4k3MEc32mz5xPG1Kv7wURNeUWySj9E1j1ig4JhXELKQX2PXWAfruhhuRKVWaZWZKhn4P3SJV4",
  "key18": "26NwN7Bcvw5zgMsJ5tjYgQHwLimhMugtae3W2ob6Z35cb2Z2vHBuuYNckHuWMWgtW7hcVnaVttgeth97PRwy3gXe",
  "key19": "FKDMZ5ypoGHRPtMdZx1XFgcE1pEs7Ccbmj6fUB36nBzSYZ9C7g8WB2hbuQE4Rd5DicacmBE7hbPpqYtTCii67Md",
  "key20": "sHGvvAhp3nS7KWnQo2DdqYhntJDdSuVxAUdfdDgwSbWNPffwV3ZLwW227Ceh5wjtmRyqp2hyoCdGNCarwUHMfjq",
  "key21": "h65T6MKH1uBUByiPjGubv81EM1HXxUthbh9DmnqupcSrK3hnKXHXVLwvfUNj1SYhWfLqaQFhEj4YGsdK8T4rsmu",
  "key22": "3g3eneFssYGTj4en6nmsRsmHxbzhDsN4LKrYtDZnn2pF1y1zaqHES1sdTBKsK8HMBG1oQpv7qtmDAnYGDFwJ26Dc",
  "key23": "q18pQQtYRaye4CV4DBC8ubboQupV3chSUd4G4v62whN9vaqrKVMty4S3YDNaB5NEnYwrjymrKtPcT8Azn14rWYC",
  "key24": "46rVfTgJ65g32g98PpQD19Hu845yLdPEYiGuepUSKhM9tkSboVbuBum1rE2zMxwFtjjbm8UFTZkJBLP4JaQa6gbp",
  "key25": "5fVhH3aA1Zf2ZMFSfkqmyKiJwXeAxagh7LQEx6xyWGGYU6dMtkKfHJ6wSHGp61DvSydYE4cjgkDTheqLcaY1Y6Xs",
  "key26": "4sDRF6uK2bRuQ9kHBPLgnSbQ9dqiVvrM7rqgyqfcA7gjdKtz8hT7L8ijQWtEwpA5T5zKVGdojSDf2oseibWpoyPr",
  "key27": "axqXWTj7bv1zujWtymwxFwCYbkVCSNXWnv3itiggqbJgQoZsjTpf8Cwpmg7QpLr6mn9PaCBHGPE4xKB3DvsiXGP",
  "key28": "22WPUc9jxDG9Yi9Aavg2bbDqQknCYFTBoiCjKnJyjCKN9GM9NwHEt8tTC7sn17d36MKpYu6eycNJYsMnx5ydg6G1",
  "key29": "4xVVWSBDkTNDMbTnDLx74mLUA4XAFY3bAuoWwSfW1X4AGgk1NygSn7YFWwcnsHpKs5j3AvJdBsPUHuzoNza2tcSX",
  "key30": "4LrvkSWf25opEeFf2MCgQCUbTSKAtWGjEihQePTrtCr37vTtGnqbudNVxVxW1nBjM3Bf3p7N2LRgXQD32g2815S7",
  "key31": "vBunUPXRCK12YYKgcDPsuDZmXiqXt9oUPdKUBYtiWFLbq9j7a9GhT51UFZGibMyfZEVd7MeP9ZRQx2u6f7neJMf",
  "key32": "5mMrKvyPS3aDEx9tnuxLcWtieAaN8DDMfMui3iDQS77PZRkZRGmAtuxZg8d8wa52RLmw3reKN6yy2xToZ1gcLjup",
  "key33": "4NQQLraScWyjPPGzXmP8x9pYPBkzKCTvruhL18YUUbK3FTUmZWwB7bmNkjtzudD4CWzCL9881efZvvqwc26QcxMi",
  "key34": "2vtXw7Eku2pEzzPLqCHLDE87zCEtvn6AbZqNPMUfwH7YNQTCDt4BGtXGcaVxd9cJ67tuq9A4Ah2WVBNaiFALk4Ff",
  "key35": "2gQNS7zKhWpQgAmyD9hd7Hc4qo2V1ECsD9r8kydKdVPUaWEFpznw2mGi5n45SJ4KMdowTWnqKB3aHssXsppeaZzQ",
  "key36": "4k34nwrKK3Rmfgt3YySKAY7Q1vii32x8tggEb6Eju4Xh1KQQyiwDtfheeDsCm34pRT6WCk1RsngjX4GQsu1y63F3",
  "key37": "4ijLveduRM4kT7jPvkpAeLxA4auaHJ4v5qpNcRbLhAfD2CGhN8Rxn3CmSe8rEVWpSLRK2fAAnjiNKMxJM9jy4ojs",
  "key38": "5nZbdVsDPszKtDA73UmSqXVeK1kzeAGfNpE1WyLbU9eiDxhX1tJuFPWPxz4yL5ozTRvVDUxxZAvnE6rGLyY6zhKK",
  "key39": "3DVVgFR3Mjbcx7H9NvHgLkrosc43wVwjUyKAPm9jQRwuzq1Yk5WbFkn362tAFbszHuPW4Ui71YTafsLnufmG1zDJ",
  "key40": "62i7JZSBFsm1BqqT42SPtTk7nBxaWZb28Rq1MuVzmQzwZj6UNuxaUontVhibvpivwD11FwT6Q4tKwYb5BHHQ24E1",
  "key41": "KpbucUFLSuyJZUUPtyjVByN4NgagjPM45qDkaoHVwwKn2MENzJqCkfiAZBvVFDoL6ubi1K8pKKdTx7LPFRV5j7v",
  "key42": "3PKfeZC5Gx27GhakZKU9vuqKQb71JFAyiBtd9u8wC1wPDiptLQLNPMq9JYUWWntjXTmaLWZp22bBEsXuGUpV9cpk"
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
