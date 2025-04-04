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
    "4UUYFpKsDbXfQiMC3PybCeCXDzd1BfudPTBeSNYVBSbFmdAmZL2LHY8jyRxFiKfGaHf4FYQyoJCstuWbaiRncyPg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DUKeZwxLWkfxXGTkT7eLCyDTspUhEZPMqoMUgJb7RURcLBUTF6bSfRGqoLhsXTcuSjGRs2D7ZhMRaKdmiJfibqQ",
  "key1": "4uEoeHwcZkeHWdGbkmeSt3MLEh1KTg59yEsHXkEAVPGfHG6CrmhUB8LeQYFaLRyt8eP5LQbpLTGApC76cZCir7KX",
  "key2": "4KorHqsKpNtoeTT8u22Viv1abhu7v1RiJa7VkCaRF6jSik1AnXpns7K3BvVVb24LdtJT4saWNei8CXBegbXkAHzw",
  "key3": "4hgycsdXp92fMNYi3HaWv2Z2AwVzefFf9JvhrB4tR98tmBoCyDyT3ck9Z6zepBphddHkw35CrVUEr1XJULJH3mcX",
  "key4": "2CpS3wrvTQBsKczMzcTSTYcy4M1VSZd1DfVJj6XdFLcBJhW6VHXjhDxvNPJNCrEPawP4oJ7dF89WH6QeCzgrLjyg",
  "key5": "63Y54sooa1BXSrbb8JZAk2y1PjphQpmXtFNzeFKpUpNpiWe6ABSrNruk9FUbCwPpxRX4FNgwGzs8EkyQz7d2AH4q",
  "key6": "2UbkHRfcT6aKxuSjAz4zMsFpWssPiYo1Sh34zXYCXZJFdNYEpe2CAsbzkXtFFLRgPYqAXXXk6R8jDKoQFZpfDtu2",
  "key7": "2QMwEXeCWwf5Evss4AYwxgNvi2KemNCCqnSV3A6f7BjBALJvLE8cSnYFUcXh2CVBkVw9eCaBf7nCS8AWPw8Kk6Z9",
  "key8": "QzNXe8XFWLZVgx6YDPsQkAoxnbFEnEFHkBTc8X761AP5BR1fq2A8vBmMtKbiWhL7gRuF32PRqFxr7E3R3mNpnLj",
  "key9": "4ArunhYocpCiMarPSwr7xP4MagyAEadwkKXRh2aJmsWmYHyrEAFZEqAvt5Bw3dsbMbVm74rTJ1bsccsNvGCMTsTb",
  "key10": "2W9oCvDSydm5sHnPCAYQTgBWvkedd5ffSH9byGNZ31froK6wZY4eEXL5aQPwHdcb7jiXMHZmVod3eN4UMyMN84KD",
  "key11": "iUtxAGCAcHERJieTPU8MP1daQF5YCZVtwER8k38v9vUfBUgiQzvhZRFF1aALtQN6DXrW3YRHCGVTFe3X9jwKrih",
  "key12": "8C68r2xLtEygqGghB99qasaSkc9456tZPxkYHXLS9TD6WAUgsk9zYZGu7JfpQbc2yhPEaL7d2RgXjofVfQh7141",
  "key13": "2HBXw1KAH4DWjyxR1vpb6uSfhPZCgzMfAFwExM5QbjcDgFN5GFXtiPzySyJBXfhVKTyxq7Woz3H5RoLUASF3pJqa",
  "key14": "2hHkXSsuyaZ35nUgs84ifRMWvnBm9Psh6SHa5KjZiATCpknHgpr4d4nrnEcUFbm4dy9T1Mi5gC2xNiquxpkBayzw",
  "key15": "559QbTV8j44DM7Gu84g7RhZ1egZWYqBRC1xQYBV65mwtfcUjVKHMaq7wiYRJGcPTH2F7A1nrb2mHnesgFKBAtNVo",
  "key16": "T3c5ZJMMqZcGCGxAL6KEzuD2bxNXHhARyLXEfz6La22suSXAjPw2ndQ5EcUtwNUkTaQSTexTkMGiyr5czdzPX8m",
  "key17": "3hzqAfqgvqGMmkyLCB7yRnAZPAFX3v9WDyMphLwqr8xiQMtFdbseMhCf9JEpAtJhyvTH54m4GWkExqXgnLHaHiTc",
  "key18": "VzAsyedc8ph7UkBj3YAZpaJmF2dj5Eh8vB4Qc1CvtQ5ctdAHhg8HGZzbnKZTxJGXTLjprQWcVo49jfRTrAhCPrW",
  "key19": "4bczS8crB89hg4KpMiYAKiE6WRHLGbSuBrrmr367Wm8vBS2utsXCz6tcqga7DuGPaX3q4QuGsL42MNaGXA8WRvNr",
  "key20": "FadjoHFnupxjpRDfcFQLc9xUCWutbMUpGo8yWnywj2zUBytZ9D9yj2tQkRQR9Y6p5qVYjKiBZpNu5hLMSXkUybD",
  "key21": "4Wq2gKRLuYS6Pf8D8rbvp1VezbckNTqxTVpmxTYn5rK4VrBFW1jLkV5pkzV7s2UaQVm6f7AUyfe4rXuD4BeeNVZq",
  "key22": "3n1qtaL9e12uaP4xQg1VimzaYJBTpTb2QRk1G5KhS7jntLcGiK6QngSaFJiX3jDn5DYKViuJD3GiedrGcDxf3FFC",
  "key23": "24BoaWLzF3wTu8PfBHaEPmH3CeeMdTPNLiTJ7to8uyYtqMtL8tL1HTUa1AjprvPjYEZnaC3Q8kwbcochjdSwuqAZ",
  "key24": "5YFx9fGSTSSq8y88z446Kn6PGQAfwkwzwkLkbbj67wKY4AE35dJ3VoUbTGv7h6p5kxp7kxMTskSucYEQQi72BKRP",
  "key25": "5oAafmQafaRYKuoN2zWc8cYAkhJCXywHTt8Qy9gqzMcGuE4BKhdqULhkTwzqT3TgHGxfDDGft5Fqu42PkxLQNhgr",
  "key26": "21PHUcH5YmqRFrUmrDBLMqT9PK9f6qJqYL8KkaDCqBJCG2A7Lh5ReXSszodaAZhgkFzVp1Q8JRg2MNtRTb6AY8bP",
  "key27": "2isAf1XWYUmk425ffgz1UPBdXoxtVyKR8rkSZy6cmP4WLzaMq9Q7Rr6rqRz3aJ8sxVftkEV9j4gRjPuL9RjGSuuo",
  "key28": "5vjU19UeN2p7E2PSpcBYqv1RyeTRHD5x1qVxFgEh5aS2Xx46Pniw8pzkHpFHiVyAfVhGYJCCMrUnnBwTSJ5hrJMr",
  "key29": "3kb1hDEHKYAy255Tp7DhVXQNApKpFLEnRCsv3dRi4XzLEeery7fSPG28SrFdCUj94jm6D4EV1ByxQuSfrjtoZqQe",
  "key30": "4L1yWQKx2GjYiTByLJyb6iYSfdc9aAVWRNbcwWgGFaNwPWcJNL7e78w6LCMvCRrr7wVTM8yfLwvHxcvkn8SUiKGK",
  "key31": "Aw16RrUtxeLvPUfUycc8qgmCYVCyPkatGEgPHA5nQX3YPm7mX83xUjUXwe5DAjdGWLjNaugGZmEvfYj7HFe3LAu",
  "key32": "2ZWmqd7EMLcRh3Lsj9Wmc1L9ZsK7BVpLtNYXsNHGakSbmqzmGJvLUH2sNt81rnKWtLcbKnjyNK3mXPeaxfnRHNFE",
  "key33": "AxpNy85e8heUewjKcm75ok4SF2BHk5NAv4derggE4XNVuNWEi23Nn7m1h5XvUJJnaZJ37dTNqJcAQhj3jEZtcWm",
  "key34": "3CVVZDQKHGixVhERadg2TmgyRxjBzTwRg6hYUKG1zg45EwTtcRsjYPjZ7yfConSn4HE1trntGtCZFoAkrdHyk4cU",
  "key35": "3fEq9Wc1VNC4FExpCqYhVm2B7rgf67hKsK978pVhW5yqv2PRbzKVaqSq5rgbK689s1tGfo2Pfr9PcEenChimBKwh",
  "key36": "tvvH3CAtJpufHrami1E7KUPD1ZH6G3aniByXBzPYEaw4L9tgyfUuX9vbowW5jVTv7TG8Qt1XeP2qdJjsXGwR8QE",
  "key37": "5JKrCzXuZiYk4x84soZ7L7zYg9Z1hQGMoZHLPiCYCvq59VHJ4pkEFPgQWiy1AbUs3PnZgbXDJWudnQ3D2DCehj9j",
  "key38": "62S36y4YUbrVLwAvREdAj9tXmhs99ZjFnp79yTvcD9hDH4GmpJyePvi95xQH2iKSUtco7owTFc6Fi8kaR1UFNyq4",
  "key39": "3BKf7T9qnbP8A5reLTtrRQXAPCWu1am2BxmWD3LiLjVsh525LcTdD9jodgrvPE43ZvK3pAjozgyTcz5BhU5k76ny",
  "key40": "4Mw7bgQeVQobvs6sqdhGAo8N2uPHwGtJxMz4orRiZyoNpC8hKtaa6Pw5RYPXSZsRyWqua5xZ8CmCeZNC5ye5EoeE",
  "key41": "uY2KCdjCWDbZPFZdHQ55VCFTTiBcktj58M7syBQF7X2KD3QzQLTBMHzJfGEfHGQiJLjYwTKkrLxuusLZPdDZUge",
  "key42": "fgLQ3FxzuD7BxCN1RuTT1L2oKG1hUx7g9v9yGywRLwnoASzr8LjtKCfNLd4tJ5sP4jhx4ofwFrjN6K7QB9w8hnt",
  "key43": "5RksqjyTFDJXJL2FhrncCd8gKhNEqbT8XGoSQohd4Q4JjtJFbfyQHZAHxPGHA6qvWeNwU5kMRgdHGrJ6Bd1HH432",
  "key44": "2C1R5fR3TdfQB7aVps2wjtg2vR4CF8ZzSM2vZyCNNwUxkNFfiiMMSWNiFLpcuwALNuYNjmZqZuvQihVFCjTEa3C3",
  "key45": "5Sh7fQPApSGw9A8wjXzQ33SobeX6SNZtwQKarS9kuqMDELLHNU88hcpwWDST8RLksqR9PB4VktiKaKhuFE2JtUxV",
  "key46": "2QbHcoqMsbYepmEfNurrMVcstHRWqKtZpKJV18imbu6Jyp55bu2U619gYoB2xLoXwLG9CR3kmiTP3adVvqD7kDxa",
  "key47": "3zhizBqRFueDLTDCxsjXr76CRvBAC1QE92rz9vGz9YmN4TW79PTu1p3q3LdFSCB4t4dUrWcd3krELYs4bYHkuj8u"
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
