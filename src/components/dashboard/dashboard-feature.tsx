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
    "FdePt33RifKkMwnjRVwenhqFcKo2VsUxX6NXPeQ9RtgNBfV9ZKdeSLS3nGke1tAMGAQMd7rb2bXpSFZX31z18Ae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wrHKgejHGaLSnUfyDRNnQnuwi36jVKeB1r1nek3wdFJX5vbfDwi7tHQN3NRp5mtnviJbiAuiNsFun92kgQXyMsV",
  "key1": "3ZC2uYFYfV3ajuJE4f21ViYVpNfEDyMZDKwFiFBJUZYhQBj6nfxwjqeWxzZe7cNaVqewSXGEf4dPk9v7TtCgtVHG",
  "key2": "TgQfZpFxTyH2WHoRyRDGmhe9aaytBqzyQv8VdYQJixYBdTgxGf2PEkN52Rbeoz77FyoqLFcb7Hpy9HMfLfzf4Kq",
  "key3": "PSjQaFTQZzFf3dCNhQpE3tehSkZX7MX8MVhCLU43NShv15crKRrThGHsycGGuqMcaky2WqCRY7mtSAt34T729so",
  "key4": "5wq4Doi46d1owG9v78ossPXoWtyqYxjxxkaHKgagmu3TRFaUEkrcBgVRMnPf3viwW6zewVKW7es8guAogZZjYqmZ",
  "key5": "35r9qD1hhMUnDg5dkTNTTPHUjbe1JyvKHojTw9tq8PoDQpm6GUjEvWo8uzzUCc4k4fPenat5dfmPT4BLhdZCfsNy",
  "key6": "4tAEH9tY1WhEnNkuqYGGQYsafryseYbLk7nWCtcbmAsi7tNuqeDEUG5RhST38CTktnHQDWutZJYUpaURoPP8XTdM",
  "key7": "2YkD4DkDCYdwRRY8Ti6aBToeLzgc4gur2g9eTjoTMxRQDRnBrJLoqkobpsdUfL6kn4LFv42dHidrvqBP1Zh8iFuU",
  "key8": "2y5m6yN25TvKNLJJdr7gBgfJko6UhwuXUAML8riEfsHSQy8zhYXTCH3g9fpCEM1NaXTnsuMmU61EgTiiHx7Dp27r",
  "key9": "4jfXyTpP2b63ZdHrNQuAet1PGyqPpsazmXg6ohqSYxgFbydrNfBCqCtpkmiLzrqp3cH48jScX2Vv1oKgrHqNeaAq",
  "key10": "4UbRdePGWQzmgPKapsDEnYp6kYmcmedXsLAQm7SApNZ9nEGEBzGAJzzFuKtjX7zTNaG7YTFTArgfNhSogGizUX6N",
  "key11": "2Sp55Um9ZEW2YZETSEUjx28fNFihfVPSLfa42LmogFoC6jGdXqdDfXjyG23aw93izznCX3U5SvSwx3UB6Md4Fe6z",
  "key12": "4Qy3HjBxhsLwVdWq5x7bkEVkkfrrZeEycRHZGJLNakKagvs247fktCVu9dspNdAxu9dqBPHWx2BropFSJNtFywim",
  "key13": "4hNwBSoEe97pGr9327pY7oaHzb9eQLYD7o9z1erjNKBD1WQyzaBKhsSj9brwx21zDBdUduEdGJTZPvM1SwS2NxDQ",
  "key14": "4au4bt1MpMZuFQpuWUmT7VSyGRwAPosFAJkdSqPFYAQdxyQpBS4Yy5PHacNrRrsaCdKbRHFEn2dgiV1xYYzcdkhi",
  "key15": "3oGe4yPp3t8vMy8aj2ekRqM4oirhsPyKL3jxrH2Mbw6TxZQ2S1X8rL2U81bVMdjrxcCmTniXD537S23yofhapqr9",
  "key16": "XnURyspjHsmen31rCNAxpumRi3LM6aTvWgzFBNotf81wTj4VvMdVa466xuci4Sr3KmPSLraigvhm5zM3P1HLeC6",
  "key17": "3CnYGCTysZaTTYybVSz49EXs4pyEnFif6ezwDon9NhTkDT8E4wY2opdzZTFddzQyqGG9vyVYArAVoC6ohpovX9n2",
  "key18": "2bWGHNuVnPVMLvxb1G38KtUwuWpKStLtueUVNWBLJGSki2EChLK5ZUt9ySQq7rkVoLHLEkdnw4Up71B4K8rtuqoD",
  "key19": "4fXa1FDkqq61W1isfkr4Tn8rBSxnCvv3umjSUmbqn29mHQ8oDWTR6CRSTVgYXPuGc4CtUaYQLHbbxhXy2x1SMZqU",
  "key20": "2pHrgboVzokGJvRoLnxL33sTxm8m21xZXejxFYsafc14QCZQPUoxaax9HrVe9skwEdyVXRKRyh6sSqGMFZxuBGVT",
  "key21": "FuYRVXs8sAitbJYfjVaVGyYJ6y52ngXGbqrz4MXY9L2LovUNjCJH1QdySBqaEfMC2iCdfRESmrRhswpqzd8nHeg",
  "key22": "568D4pQq2fcswu9CzA38Dd5tfa2E44V5sKEzBSNGkWvxX9TM6UqjZTobESdBsnvN5cGoPRYPBpFHZtKtfDgNtPm",
  "key23": "wqyvjZVeVipsgyNwMTC4WutUCaPBE9DZkp97AyhSKVrpDzJhd5kH2BF6VAAzY6V1SaBGhFKnpiDKMaUcDeEbRzr",
  "key24": "4sNdMpmA9qWd6QHKTacqqsRqHvE9ZhXrxv2AbGnUds3WPfWv958dXkJFQGLnr9LizvZUrYzTFsNTbEFN3DNTM2AT",
  "key25": "ci3h3ARt2Y16B2smN5TMAVfBkrtVZpsrbcex34LpAUnGmVSLoCZFajkNeBJwUofmjmWvS8fDJDryjAfZFnD6f23",
  "key26": "57F5TFwF28XWom7pdNXNHKBqWWWXFtk93XF3VKbccvMdqgGpqSP8kSYkWVnAYi5yZwUHm6of1RULJsuWXaGMjiFn",
  "key27": "4dTWzvWDPWiYQ4TGNXTkHP5XPpLq8EJLzz3WLVbM52ggetvWGhMbPqQD5umD2zzkSX9zbVDcQQW5ao4bndC4vCwW",
  "key28": "2exAXnxUNPe3Vx61AQjcr2LPQvckwBYM9EyEyVz7QuQMMLoLjkXgYfquiwWAL9bZmELZPS4Dyq9GrdMaAXDTaPNP",
  "key29": "5vwboqGm68cXmiwsAUG2LU3Nf4RTHoFwyLdjabUs3sw91unuj3PyMfGBBT3mvjRhtafaj2R1WP2oLkhVeL3VsKNu",
  "key30": "4wjpWgG3NHCeRWtFpnWEDS8PSpAsDoDDDo1jT9CEEad61qyVXd9XGkAVtR5BazvbuSU2ywJhkwaCtVA4tb1G4L1J",
  "key31": "2ncUYzHoncdGW3DD32QQNmEdZFDBubLcJ34tRT5Lc4ugC6Xia3H7pshjjfLZayVMUANoxzmxpxyELqu4uEbHavqT",
  "key32": "5EpY3rxDvcTmwBHpQ6cBMgS44nNtKQvG8kCwdMuRsbuEWuNch5iG2qodmMpRymFpXUSzKNmjoNsWBAoSmnwS62Ya",
  "key33": "3XdjZgEwx8dpkPAAGf6vywyvZRm64M6sJwQ1aAgv66Rb9P1yLjdfchLgZwepEVKuTfKvhvQLv1WKL8GYFoZ8u8gV",
  "key34": "XSXKY8n1AnpC5KHTwS1pbbfH3qYyHLdbVq4k7SmEw58yxDFsz4qx99r4mf2R3y2PeihEpF7BNK4ve9SbYpZ8ZQ7",
  "key35": "4ksP2w1zu9uA6q4SrGsMd7a47i8W92CcYEhJC21H863sXpgzBYo1hDcoVDD6D6Un69NoC5RREFmWYJ63hJkiEjwR",
  "key36": "3s8yTSbttBNyABRANLTZXMesFQGtMf3xzM8THwnxZnDnsL13rxhQX9i9dk8hwqqWVC9CJyHHTKm7mnRt3mJoeFkX",
  "key37": "5vfE3XaH74KX9WPRUbuSYb8XT5b61o1i4H4TSgpYe5iRjdpM7w3NiYy9fu7d3Gi2iUXQjxfRJwyereMzjXmkHLQP",
  "key38": "469rTVvyfmp7LVZWsx4DPdBTX8xFcmGHvNTFZGQWaRWVBU1LUudMQkXWXheXnXvz3GPNpgkRxidwE8jxFV3rvbJ4",
  "key39": "3g87D7V6RHkbDXQatVM22VZVpJKBPVZMDGUjeJPfRjJzeSceU1dgJGjiaWpvrm76usNmHmrC1ybBSiYYfDpqd2sa",
  "key40": "2FanVMRUdyZEwWs8HiHpe8PLrphVyrSyvcycm84WqAVxTUx2Y3xeGLMmG7qc8W4GjVni3u5TAHbiENeYBedeniwW",
  "key41": "PSDqgksQV4GPJoRtjF6oaoDfpyNMi1xuMzY1UGp88VBPuPfBxoYWzX7agEd6Unhd1Yj3qymVuGH7ECrdE555GG4",
  "key42": "4osZnggEmap4AhU6rutrTkxjjryr2Ja1KS8DXaQkJDyXrNkt9sM2ZkTLn2y2TsegY5hJpWLiN1NAZfD2kHucw3YN"
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
