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
    "4CVjHmkEvf6fQrMCkL2trNJd5Q3coXVH8ZQVEGJLPV9RugyCdxPPfT8oW6MqYfx5mWSNCc51erASFTT2iU7WVrad"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "413fmbuU85T8xqwZxdM2PvVLGYiYtw6S59Ye97DjHiRmrPjkceqewcHA8W5UjQGvMudvNfH7Z6MtXzPn51nPdnhC",
  "key1": "Qpe7Wn2kTMcz6bUboduC56FaPUPFk5BNtWKTuvYPxTyxkUL2sjyENFFtHpgiePW4mSx4SrfqHXrKuyvsXq7wbgz",
  "key2": "5Z6aaro9ZmhhkfwQGhKPYwmCtinqd3wyWkRNai8QPETUvUqamTxzjWWNvUYk6infsHzFpJhmbNPi94LZ6Pu4Mvwq",
  "key3": "5k4kPdjnHxFHMRBSDprRjqgeDawhS5s1M4DhFSeNJDxs6vdQMRKEfce2KRBU8pvJHs7cwvAwxc455Uyv6DFJpC5q",
  "key4": "3B3gem8aBA1ZCjzASbh37qSinH1vNCcSPvCsFMsij4zC1MtVxLYWJx4FHN6L4BnVGAbFoj2SqeSsG6HAqnmUErpM",
  "key5": "5engiwePAXfDvyWkCCBUP52UK2gAgBrmfDoMiHtn67SZe2pLZboMTzFXgPu75Vw5g9Zs3DMiLYw3yqEGLKaewXon",
  "key6": "3thFJ7yvYYv9skG1eHMRdUDARYcEZkWQ5SSj4UxcNGdNXijJPse7xueZz7S7UaaAvjTusbm8SwD7sGkTamyutUry",
  "key7": "3xQqg7y6YACrnyJY5MwtRfTnM4pQQXskCiL2xFLCJkB4S1SkDF5DTNTMYaCsBP5miQheZim7JMbweZiCgTvcgr88",
  "key8": "4JaXh4tPxFWKLQz2QCCYU3sUhdhJ2tzcLT2TJjXGmAckmYhEtAJEauA3oMWnJjp97MnngTTevuYdy3jLYPZF5oVM",
  "key9": "2LgTjaksfwQxhZMucdDrovnVP3NNNwxCmBWzUnCW2sJ8kUuCx5om3ggYoa5KTe7vDcwND2qw8sQfhjSAyV9oaAVZ",
  "key10": "1V73CZLeG7bZvUo2mychxxFaozj2mvXVBM1cPAVdFjyXePXzT4g5YWAq4857HUvfGRXceMCxiX4Fx4VdwTAXNPR",
  "key11": "38biso5tzVhMd1fkegkwHU6Bu8gNiD7uzMikxnki2Seq2VK178pLfgw3tKtSkumHjH7AUqQS2ZD48UrRGaYig91g",
  "key12": "3bnehtAywEEeAVEZyBhAApv9bVaQRs3PvpkwWVy6BmswB9MgCJiuGXYAbzLG6RLtQnr7a69rY6yTckEwaEZUiRxQ",
  "key13": "541aScXvKYuptC7BmmvdbNk92dDc5NPcvFMGbRKGpGEGsHjaFwnZuhaX8nUCVj4U2Tiwdu5JRFbVkRCnTQvEYeag",
  "key14": "3z11yEUy95nfNwdB2bA4HN38qHTyrRthEnh5TYdnyHB5GZyouen1RNnAKyxaaxE16uDFvCmxNnEC6e4zxN2ksETT",
  "key15": "5H8wXvUoht1MYnfZcYfLv1PDCPUpGnfL5ci4wFDLtdd6MMYmwgCCcDBjt2HAvaL4vLRSc5fwoKiVJxzC7uamUuAZ",
  "key16": "62y3giygYVtwiXK14QEi5bu2kWeMY1XogCzTbhnqyXc4zYiY3ur7hcroQkbYSEwVNmfQpcfcKsTb2ye15G8u3qga",
  "key17": "3Bc3SPYWqjyg47YMPKwhaCFs2BFrCbab3R2JmT6PocvQMX8KLUTqbVmdKYtjNGkuFxMWvTTki4eNgNUaJtbyXmQM",
  "key18": "3gYUuRmQVedyDCMCELuz3Ai4w1Re3tJytWchLpCKKUNdF2KMGimVNMFMmTZypWKtZivc9VKg7UhxKjZT5vP1YoKM",
  "key19": "58Z9BPKqy169hC7Aahcpi8pQCHYWMigtKKaD1XoeWpgMTQ8uX7rDMPbyjrLu3CXvN3iPRF9YVnWqZDTbVZBpu2wK",
  "key20": "y7vPPbkEroXHwZWX6tLcJS4CLoDtHFhiE9xX1GE9fFfuChKiUWFHSN9SfmbBs2XFLxu5NDSb1CJH3Wd1iofC3tS",
  "key21": "2k5aVicefSaQMyLNyXN4dsVMaPoXrBkbdQPKdecTYa7EM9dghzW52e4LxZ1KYX57nMv4gcRqeDAg7LHpsvMYdZev",
  "key22": "44bU1Ajze7T4ZNExjFoHCwnhY67mAQpe3872CrYxxBMTXxjY2i7f7Rz2pU2pfFkDWokAQSdrd1xmsjP9aUANS36g",
  "key23": "2wihS36Q71ZrYsK2Q6pSNBLygytU7kxcxwrTVBUtuQ7FE1V2yTkjsYXRggMe7QDa4m9NM6Lusd88TpSbhf6fk7qz",
  "key24": "2p3oub5fkyvW3NC4w6RVismMTe1MfUrejpsZHiEU3vNdfDp35ifSpHQchBKyvsY4PP8vSgXy2WnBEGTcHkBagN9n",
  "key25": "5nST2Zx2m59tuE3C3Aa3WYuGNtWTsW4waYHJXCsMiBvorXCKb36BGZB17rDwsfZk3LqUzBB1nR2AJXDqtMPQz8Jo",
  "key26": "4yi7SYQvukxXa3v4BybVKEDGDU6ntj8iVNUvHfg3h1ws9WMVzagLzWkUtw72mRsksjKcLps1Pt1jYS5itzqnCEMK",
  "key27": "3GCgn3b5Wcrbu838auUqEkyr7TcRxexZWjMUP2NRd39qdU4czmU1KgggHADZwGCBoBh5NV5V7iW3NLbnBf2uYqzf",
  "key28": "4cWBFdZ3abUzJU5D1dLjjSDMNnDReMTpPipkkSLUFtKcobaHzvLUxtiF2HRwFfsaWk6BTksUjqHYJmXiLo9CaEf",
  "key29": "3A5248jDiz3skkSXGYzPFTddUoYAy5EzsMd9yg2C15ncxZqEYtf6eRyAb73br193b8PSDzuvNs74ww4YQp8Pd3MP",
  "key30": "5JawHxFrvQyf762CSAxNEBDt57UPhz8QxhUTk2KK2SExA7eKiKGvtMyuvp1zYHUJzq1hyDrWuGwbDPS4xmC7M54L",
  "key31": "39yt4zfPkDZZUgt4npByDpawQsydzvtyzjcJqkyRgRSNTZob7cDPDT1M5M3Y48uqepBUQWh2zuQXF9ymKsS7Zvw8",
  "key32": "5piZb9qBugwmNT31i9VtiKTMDpDqZk5QuGzj5LXSS3opCneasCfQo2JeLZ2448LJXV4JeXX7Gg22wbQbAaPLnWmD",
  "key33": "3c27dm7HG1Mj6LTBggKixhwcvRhgyfZA9yJJnJRVbfBWUwQC1jEcSPQJZD5bYEJgaUZ1EcVViRmKYSXwQf6FMU9L",
  "key34": "5aJt3VAEotBxteYzAMvnvzfqpm7DdH1zXg9CY338yudGwUa3xKsU8Liem3EWt1cAUYRG7LdmYWkN3ogyAyrCTSKB",
  "key35": "5Zf2s14An1qzJMmGoNrXQeRCmNa6TMPvtc23puoYz3ziz34SNCRc59fGJAXi1sGyE5mzs9Pj3RDmvrQFVm6cbxgz",
  "key36": "42uso5ArsnYZFtNeN1DeexVoTqRYzCNzNae7cjWEHatSu78ZFEbiDsVv1oi7Yy88TuapcEVJYxGCVhHpuUrU3VoX",
  "key37": "33tazwggJRBY8wmC5KhoWypXT6nftBmpdjycAmSqQKeug4Vm7zhHX7tFFVc9B3DjZsXTfv37dPFSj1RvVf9uwPPH",
  "key38": "5ur2b3f3ie5WFafuTWnf55EPLw3YoVrn1Tk9dynLnkq2eDc7a27J5VWz39qQ32HxkdvixC2w1JzGqyp5mJcUXK9s",
  "key39": "25dAyZWmKV6uBH4YS7JqpbFXS716PAjrKYoLBVnBakNozZTQjpGYjai6jWLNDhuQtg23ptPntmu9s3nXtsw7VJqe",
  "key40": "3vWY2XnEqsm4qepHNfrsbTjsjaznLNaEAUk9DY59dNzkGyuPSGCruix8avWcePULRjJLi7Fyh2zdFMsiefWu6ujH",
  "key41": "21NA5CruwPKBaztVjGwns2qNbfec1d9UfcHcsuq9yArH699PAi684nboUFLvZhva35hK8kFa4anUKN7JRY3pguSP",
  "key42": "2pF9vFD32NvUWLbXmyt6vzniKfd1UPAkjQ34WEDRnmQ3egHoCUQJkVTUeaksBFpndPsb59drzzfS3dyuBH7aMaeX",
  "key43": "5aLHJoKMk9Nq9wCiK7XsTtbgzb6yRKe2nU8ggAjDTLjsDaDEQk39eCYx9Pj3Xtxer2pa3QjjFmpg4wZTrKRZcrew",
  "key44": "5PohEvHajdii2ZNh8gP3h6HYduz5zYzr2BVaogjFHwNGPaZ8b9zomhHBGjZBNxwsChgoJWfx2d5ddLtfsxgR6DRX",
  "key45": "rYT3Bm4URvKJJK98HiCNrppMkaKeBwmtGe226fgGqmpfuvdVWkJDF2Mv52Mj5uQ2erBU3GVm9XyWhcnWDBhjYSZ",
  "key46": "2uLsMwJuxjWG14gY9jcyTX6Pu3eYdudNimod6FisPseLbY6XYgwhBXW3GK5LZGmToJRjKyj9Y1crpJcwJFzAFMQt"
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
