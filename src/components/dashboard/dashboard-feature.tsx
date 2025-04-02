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
    "2BFPbxD7BqassNF5WVLMbD4S9s6PSKA48nnqaRETR9crEY9uoZPAc2C7XgYpE48wBW9moiTe7T3y3rVpyydda3Gn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M2M7mX4HRPLS7coX96DqBGiBe7yTmYFoVJk9JkrDpCMJ9jvB2RLKxBheVqK3d3daRqEmvBWVZ2Hj4jtTJGAqwhF",
  "key1": "4pvKghntpJNU5K13B7dkdt9JrbFh4QqDk3m61DpgAvtYDvDuX2rD6Azn4oiTShNjzeYwWWoohUgxuX3ZaKKCpBcW",
  "key2": "nDsh6pPjRyksaGZD6GEedbrLMLKotZKfsZqgqG2sQ4i68DaYBqhRKFrbLfiuCFjygRhoqF8U65fLKJVXHtwLcYa",
  "key3": "3yZHsMLNVijemG2rQwSvfbcFaAE35JqxAjqVJzcD19g1ZHRQxkwzNagHQY3E4brGtQQW5QPvYsX6Le7ru4MrPYQW",
  "key4": "5Xi5Z99FVzyM4rVoUoKXhYgQNyp2H2mjkN8kptnX3qRAcAv34Eo28mu4xiAgcFNiGHf4ioNy7Kys6Q21Qx9PWipd",
  "key5": "pZVJi6kFzjrMkMw8CUewLoCGWp55xamQucXVMXesvh7AVkevaZkmjDKEMdHurdJj7pfpi31C4ZYCs3U9JbfqTsk",
  "key6": "2Bxb81kHjn43aP6Br5WChwukVKRmvXynvTDPwWbWNNzsiVj7EHj3P7L1mzMk8Sbj2coPZTmvB1R8wESRdqt4SFjq",
  "key7": "3EYFUmkGh3REBFicMj5Udbki2mp6RinzFvwuB9jXqz58FsvXamfJVmbPXpyRkiYjLUT8PSAjNmFw8QqYKqwLHahZ",
  "key8": "4BNwqJPXxNcF6kJjgP4ioA4RAy3t77B5vyBxoELUcppAKxQRLyEGAeM4ZHaucaoRxmk3nipsjzXEybwmGdGt47xv",
  "key9": "hhVHfi83oDehrRC7aVVmAn35ufVc52ho4rnsxYrcREjyRT8yiYP83aeLNmKv9VRkTcEdoSgrfBhBCAmkzAtBvaS",
  "key10": "3sjnUv5orjJ6v4uycRiuFxe47Bkxj23sKCDJhU9gnpyGSoxweFaBFZ49yEvyX9b9EwppRkBJqBLRPJqMfCPr2kXT",
  "key11": "59vV9QCP3miTf4ZuBKpaQfwSfD9s2a5DmEhV2Z4aXRaTd5XbthaQyNWuHfivfMycnincY1ZAUGLRUWKphvzH8CSR",
  "key12": "5tpwKcyWUMWxqte8nDmz7MSgcjygoqaicwzxb1n5JcR1nJR4baTWKFDZ9Wf5bUL9wV55UoFmw4LngESeTdc6BK21",
  "key13": "453UxYUtT9ajKSzGqdnwqzyrvLbdgnHZSv6oMUx9EZ2CDv9g1z7V68fTA1A63T8GBV2UMsupZESTBArBkdgAD6V2",
  "key14": "5E1uv8iF4EyB5owmB878wnApC4hp7D9S6NMno4Yw1ybcA895sHg62GavQy8PYj3MgmeVAhNFPidvT8XcapBcJmYn",
  "key15": "2Rc63FiFz6xTnY7wR3GJqiMFWkTs4opjaA2uFTWnmBv57HFjtui8myBMBgnUugii9repddtM7fCoamD2vp41fzjG",
  "key16": "UxqYArVijgwHVHUEkeVdmBqRyrYJ173NTaS8TzBbM9pHsV3wTgJbovTutYtbiNdPaH6ZME7U8mp9EawKjoXoUTS",
  "key17": "2AF4qbV49VkLqxq9695ymkrkDrnX7A9xJ4JS3DYH5Xu4D557ppVnFhs7LrGcJM6qeriBxef9ztMyNjqKjSzW6MDz",
  "key18": "5uCYCCVNfV2iqT4fWtLm573gNAqUDfT8nAjBSrSEcYDLhKirMKLmXs6j6zh5XW8vQnRBNgkNs7cFGEqbWsqzmxpX",
  "key19": "sqqfX7raQWCvkgYEmscTbVpf6rbkAHZTFdREduovqdHaXvmFpAX6KWoduEmrj4NRvTfsWVv1H4H519MqaMZ7G6F",
  "key20": "hfX98kRYbZgaatcWSWme1nLDi59cuynwD8h5tQpndQwmP8AR8VuR1J6KrvRnYXpGtJifWiCXKnZX2LC3EXNiLWd",
  "key21": "4HGKRStcMUakQYQziXoX3FqFWza1dXCf5G5ZSDEmkL9KUfPEcvspjmuwKmzetDerQMavJPC4Jhqip1eYgmYyTgCF",
  "key22": "61ECP1pfTnksSqVtmyioXtPsvoSmyypFwLXtyp87Gr6S21AoRE6RRnHgazwjYmgAomMhNDBgcbHRs4jMSYjA9Cp",
  "key23": "67FxKbQy14ec2v2BZf2cPzJ2Mrza9RdSJRjdHagLCe8PB2Yf4BffzjxqRoc3oDvgVDDVqLXrjtDY7gdufhdAufTB",
  "key24": "7XxrzRnxu34LDD5oLPxREYMRtW1HxUNdU1LbsVBLgw2VMke82ojYo51QHpoLq3MKPjtDSFLXSqW1diR72xLr2m7",
  "key25": "3g8CsBgZvtsXfNqa6DkFYPZogLnFFVvsqNN5PXdFpubxwfPon5QXVxXsRVHVaXfP4XUmLrkERKPi4wewRquYX5T7",
  "key26": "4aLkuoCpTAkgWCrzRjh3CGrMg3RGirtKtHtQim2LMn5N26hjknSEY8bgew63WRsZX1twct16UAgtDZJXP1Yeokuu",
  "key27": "48yiSddXvbyZarhkJdRLwvqERLCZVEQRwJsmdjShuxKG5AfT5VykF95wrpN3TTs8i8to5LUVUE9AtGSEnoJwDHMW",
  "key28": "5Z7Xnabf3amSdRgre5eAzFky5u31hc31PURfWbw3s9647sFDajDyvVmMpiS9bUkXiRkbV2Bsb3fjszBxUP7LNd2n",
  "key29": "2hZdvdx9YSGMbbntymKgsqMsUKoSEjVvSuSwqifBpaQei1Rtr1vPUkQncPJSoTqSfFRpwkSteF5cUR2rvPJYPfDF",
  "key30": "2Anwsep4CRVSckn7NwhGNiUQbiWaMdkefCGe1MLHbPjX9zXd6aUMmzqknxaCsTVxSw4BSoJAzQp2j2wCdBCNe6DK",
  "key31": "3vK57cHhzFNbXKQbreA1uwATL5k2cuUcrctCAYbZmeEnCTeGkSJ3YEYXQMRaL6agLtWiTHRzbgp26KVtZU1Hgcg8",
  "key32": "4jHXnoiehNbG2uFW1kYEzYmYESuarRarYcSuZjpHFtmRvbHGHe7HqNgeRBsgU89h6n7qoRpYogR3CigByYL7VC9S",
  "key33": "JXJxqn3HbVpJLyKDf3HrS2t5WUP4eeZ8enJNfARZZawS8a34KBctp48zBTNVJZbvASba7VkBSQJVwvo1Daz7qhp",
  "key34": "4s3tCwSg3ykCZX8ZxUfSnbhM4dCtVAct4sB1mMhgiuTbR7tWfFGr8gSVQc5hUgr8Bff3T6H8GGUVZdBHHzCVfHUM",
  "key35": "MZFSDyeERkHWQkuT4jLgi71SDGWBZn5kfN1unnMDiXiDfEtDxAzPCo48JNbobVEyBSrLZUj2qhiqu4HJRma5wCr",
  "key36": "2apKrRRaBtkFzJ6pGF91ZfgxX38Qd1WfwWYaWA6Mffh2hsJSF2Pr7Pw9XzrpihXdCViMHzyWiLLyDv66eM62mh1q",
  "key37": "Pig6UtjQUEBYrcTLpEU1NJf3CNCNkFr2wCsWGgxFUfQDZE93YmTKBk9p1cGt2D7Pt2JAe4BN4RLAYkChumKnsCW",
  "key38": "38RQUAZ8n8vq3xPhoaRgG1MpNxVv8f3kRd5B3Cwmznd7uQF9oFZz2Q1pPnThEdD4fcdmMghDj8KiCrTJQkFXvrjg",
  "key39": "KdthVQCEoir7efgJhTBWRLXT7u3hf4QbxEDjGxMDqbL2iZjxAujHaBC1u7nAFiCiYMEC54zyjsSNhtnuwJXq8eL",
  "key40": "5KSXq67rRwoQYRFGfuRyad98iGmNdscNdmYSaLY4X4o5Asx6uMXq6Dc8BZFMTcDzG9ynFFLFhkkT2X6WKc5nQ8Nz",
  "key41": "3bixdirGPVUfNX6kR3uwMkekRhXGbLaFRLwtnVbSYDxxUtsjxLQABg63tL49XZueZJSEEwwSFv9rnPWMV7aFuHNe",
  "key42": "2mbNbVSgFg5Fk2eT9WxN1eiXL2w8BuLd5NVT3HYo1AK6UAVMvoiptRF2ArCoWTUKvzU4dqiYVryKLMPAjuJpjCZP",
  "key43": "2zhhFSKf1W2WbwoypV3xs154sT3s7Vo7NSTsPLpT3waRQJZPjvRPngJvYkXXDtfgWR87RWdGMHGWprHaXN4E8voq",
  "key44": "5XdE8DnfzpwfBEYanYKiSZNs96XVLG4onn6PgzsB9STpWQss1HK6dhNJCZMS6znrQ2uoh7nGhTUj8eN1jWprbFXd",
  "key45": "4AbiQi3VV1gmyzwb9hkLVJinaJ4dTPHCstj9zJRkCjXgbtUgPM1VtJETUKWPhTG7bnBkfT8DUdrDNSzo9buxDZLW",
  "key46": "sa7Rq6EreGig7LogwKHRHqqMFhEeYPoFTY5RmP24qJjxkQk8X3mXGUvPyz5eWnizrwEuTUsZc5KGvvjMfn4mcNX",
  "key47": "54JzVFh8uYq4MvemtZs9hjSdEqjzQUZxgbgXEWo1kphSPFAcEdKQuToWzqSpi3jBpcEhZu12D7eNEy56P6tYc7rn"
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
