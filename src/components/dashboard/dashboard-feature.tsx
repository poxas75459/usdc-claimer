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
    "36f32hzFf6yFrPNRWmJBbwwyvprtkWc5dsYpsmhj67P4pEXfogQ7umjCPfeuC1aN8NGqCXpA1wx3F8EVpiLLju9q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fxNzcewCQ2cEfm5H9gwswHoAnSV811obkGywApdJehDNDXPkVCpiAGBkvVPLBZBGp6Nm85hEUqJZoPL1Wto21KD",
  "key1": "57PrKXiZsc9JU6tYbeY1nQetguksGZixUpXLNmoMQvc7C23nrNmgjyJKwB3PDTaYj6YtrwxpwFe1zrDRqxhHB6qn",
  "key2": "5pe3hKKGMvLgxYgQQ9gwhUQNAut7Wv3nXXaCHLozrkFiZqqkn9rcCKvv1u9hUK87Qs93GmFHMNv4Lo7M4QoyaXK2",
  "key3": "3o98aXjUsLGy5KJtqKJ8FLTqwxt5v4FSvAi9NRi2SidUxTDsJekd4i6w5VSePB6FHRcvQFfYefQXVbm4AbzGYags",
  "key4": "4UD7F36xH8EsCX95Nm5HJDGSUYJSbQEifth4qhSdRDxE4Cr4iMqYYNhhJLRBo8rzwPf6jxkkeywk4qNdvYtG63Wa",
  "key5": "BggiPhPUz517jt36dkCw9LBCDAxwN1WsYHjm4WKmcLCmhE1548VYgwffc6Q2iQg3gZnZTXSgn1QVYNLdD9DF5L1",
  "key6": "Hn2hpqmr1rVkj8EpvBNvCmXCDhZ8h294hmsN9s665NQZ97FhM3e9spNdnmyAKdMjf3qiMwZLsu9ppG57Nrtrg4y",
  "key7": "3HwrNruc9uwc8jAn8j1g9n2oTEUne6RS64UAVhc7HEwt127v2ajpVVrWdw6F1yYbceauUDdBqAPWb3MMXyrzevdh",
  "key8": "4BRbhPVN1BZrEVkBQYKCE12vejCrYt5mLpgj3QaVWkp1K3KbN4xkniiDTvy4PNBQH8m1A9Hz9hFvYriZABcDWmHn",
  "key9": "5ixwa5MDPgu9V2Z7fZYF1E3qqPjr4HYpexT7GP7XVNCggAJZpG3x3PsWQc1tQu2jLFSqfAhkyjUeFRQSNdhRukzY",
  "key10": "43Bx6GXRh37TV2hyuzGxRRRACkycMTrSvEV94xjw1rYaRCq5y8WjhV5yaonurrTN8LtMm7aRp8JQVwngJevxpNiZ",
  "key11": "CfX8wuKcSL44Yn9ntM3chsvA6vQ29HDUHDCAaGhzJVcoM937QLLVCwUw1fgPsh9aYTTYMdShqahwF2wgygu9TBv",
  "key12": "TiMgjb1ABEuYB7J4uT1nkr5B9EAojapwEG7LtVVQPqZwxELsZcn7XeSmp3vqJUnh6AZ7wjQWUT6q2vwG2MuZJNj",
  "key13": "6iEaMdos8k1SzSKUZtEFZGL8NEZh6tY2z5XX4AVE65Bb7Cbef6yJUC1syM47f2aYWwZrAgmMV9ZJqr4BcoqgXzf",
  "key14": "212bcg3tYwAmfFuEygTre8kPNEJp4jtWKkH5CCoTjomNWTDA9JeimY4VF9k9LDgMDaZ57HGNXH9bAiGWeLsDmUj1",
  "key15": "rPucdvoomqfuREY2jzqJGASpPMsmRSA8199jQyR8h6UgMgDYpu3BuHxNM46f3bEn6XyuU7Q7C91CNtKw7HNkK64",
  "key16": "p73RthSeJqy8qDAggjuGijWktZU8LEoz4wu6co45XShDDKWgrGAjPsH51KqnSHqH6hNXwFNxJgafnog2GxSPozY",
  "key17": "46NBgH44vVrda7QbMy92SeBtYNQBCprRKgk9sMYGyrJaQuR7MuPeNyUNpxqcAS16nwChnfTPuiambsLwui2NMFVK",
  "key18": "5v88A3AAwSCpZqQnUtehu6oTe6k9uVEsiqcT7hWmi9QEyqcr1Ddr8BJLnQ2DqBv8UJtAqd9oH5R3bt7Ud2G2dQg8",
  "key19": "2BRnuMfTLdxc6gDapqUTd1LuBTmTqnhcSXQPXAXzZ2SphKnVFwL1eeGyJ1JdXU61WVvEAwKQshPrGNxrhoDKL11x",
  "key20": "sCS8Ge6m38HjiZFvYpXPxk3uSWpbQ16rvxdgULx5ogfWorPemXseo2Z1HnS5YHUpmixAkFzSKX8ZCbXCBW5zuXV",
  "key21": "5bwpT4cLQCoSHJhfydQrgjDMLscpZ2ZqjJrmZ4BiZwmhUX3TPFjdE5KNAcCsdKaca1CpxvTBMt5q9HhyjwWNkj5Y",
  "key22": "xtTbYzYW2rpB1GXkpFubFynsbQmABseYT6hnSkGsRjPF3QjD9p8ivNsbdLFhvMYtLXuN6bCVu2DjFkSSrgAUCVy",
  "key23": "3hdi4j25sTrUGtptTr1imNxAzZk3uoSPLP2wyzY2CUGVhDXt5NtQ1co6rEdNnttLLxdB3FjExFptkmLfxXaJ9W46",
  "key24": "3XrsgKPbwJF4WDt1VNnb47PFt1DHFFFztwVki5Nei6EMBEuKTG7jGu78koUJoXvJ87KwfZjZyZts8niXSxbLR8MV",
  "key25": "3Eior4ivhazDHssY57YX6c5KuxYNRk8SSYJsbMzYbtZP3kkdHNDj8UhCsQs3MZgACtPXVtu7Tx1kW7xezFVosMGx",
  "key26": "5zgeyMYfyHRYuMmMnZuAvbDbk4bX4bcDjkRNMUySmWKaaZDPPae9AnzkzRjfqnVq5Y4KhvFVutKNHW3ijc6wyd2z",
  "key27": "4tHkXngpnbLLFYmEwSBw1XQeruQGxSMa7ogDXPCgCMa7zCYXdVzWpYfzMC472jaX8FxNShif4PwdExzHEJ5HMgBC",
  "key28": "5bRJVN7ZtCcXr4kGDv7rNjYwZhzgtWRc8Cvgs3vxG8ftW3A2Tsgfp97FmHgQm7WBLusDywPK8UixJFf2WRLNxpCc",
  "key29": "3yMFmMyKmUFcL861yRsjNzv8htFWNa59HEPTL46vAcs5KA2239LxMHb7gNetZb9C6hx3DQXf2GSUjzmgKiQJAgYS",
  "key30": "2KknRHTLeXvzWKHJyoxREFd8SMwUf4UJXNsT54cRThaBydnjWUqa2P3EvDQNRDTkpGfeLYmTdaBMGQ3VMn1gz9hC",
  "key31": "4U9NReUNX57ax4ujrqeW4pJGvtww3PoKok9Z1b22tAxw4WxdzdUCCbZvNbFCEMgxKQMBF77LNFEz56afF8YhvA6T",
  "key32": "2M28coRiqscUnHa2sBFKkxwXMVgjFTdVNcjgg8KNpXrinUrtD4WHpBwMkJQkWycbgtBbWUCv51po6rq3KSLdRnPf",
  "key33": "r836HapVf6UB1z5q7LJsyfMxtQ3yAZUiJjTrEyzxq4Pb79dWEJoVYqtgXG83qcFmb9KpGi9HYViAKF7yg9ce52f",
  "key34": "5u8h259mkpZCteCwcyoeweaf1cdv3xup6JeW3v2a6jzWaaf58wFAC5u1BiwjKijftYithAt9JvLp1v3qWKSv4ahm",
  "key35": "eAQgP6D4bSchGjN2CkuEu8DFDxuPbB86CgKsr8fGYei8tS2nWdNmqrJUK8Z5yDWE9bpMdR6kWE1BwydPBU1gGZf",
  "key36": "3tEkh6KNCUZC64bYSAAbW8Zm9K4WDYmm9x1Fx6FQD7xgYcr1sF9cL38haeQpnUaFvQuYMzmDAswZb2sVoNPG5ZxP",
  "key37": "64TMq9KDx5W3yXpyJsLEK7AVg99b2Nt9Yurh8XFrGn7Y7pLg8A3PFhLLS2uSJkMJiZWd4HShYmNSJpdZiUzqVykF",
  "key38": "3kd5EhAvqkhBfAAqqTCuGXq9hi6rVZ2gcNnrjhpvd8avmMnSAtsUE47wnARniWi8w1o6Hn7vFR1Bx8esofDNrpv7",
  "key39": "2ZPJJNkVjK4jDLLmkHo3rvn9aUvWH1KSu5EhK5uVc5CUQJrAfyianVpSP9sDNzeb8ULwyxkozqZDXPobRxbe39Qs",
  "key40": "rjVfbzxzkPSL3SWm81PC4FbhtjXpEAZDo5uESxA8UPa3wqy9QdAyukmKK3gRJrrqCnuB7jBCJL9peBZGYRsqCjU",
  "key41": "5TjPmc6aUinVtZmLM5Tt7iiageP2jR2k972fZL2acdxkrCK3eYc1iFPCTnmkMMrdRjKuLGC1TDncFsG48u6MU8Ge",
  "key42": "5qZyQiKKgxqmNUtmgBCm4Em8YskaK839CkDgjGAMRnMBLs9soRAytYSjc4iJqVQL6FAoPbh7UKsFsCciHNn3EjF8",
  "key43": "27jCq7ZAX5TTuHr6UPhz8VTbTiAfJmjw4deu2wu4bE68roqy7e8QiPEFSTddDZhFdvvFjdpF6p6mNqjm2QSmZjj2",
  "key44": "3DRdmRAXeLCVoSurGa4DGXvv6tEZ24esgsrt9et2hmG2w8DQ79FwJtH3Yn7WEsiXixZgU2M9K9rKJNdaNuRq7qRp",
  "key45": "4PNg7Udqm9zRhDo4xVqNa3qa1DbiBsU37kHyC86YBwRvfn4943YtiXXTgAkTiSqSg8vBXkfFF1SPYx1CvsrHKdwt",
  "key46": "4TgNe3XHy2MBrDzSTfgKv8Wi1wLfZnf9HD3MNWzqqM3HyjRBiHUVQgSwyJj76bW7wHCWQfFnhMr2WuANFVRNTSsL"
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
