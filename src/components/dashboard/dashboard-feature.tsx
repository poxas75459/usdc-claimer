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
    "3XsVpUmRxLPB7qJq7YSttQzUqoT74TehApw3KDwSsSWqAJCmn4V3WsEVYq6kgGf1qnoizjXXicJqnfFhbkUAUp27"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41QxwfsKijRxoix6JDpnfUuAsMMsFFVVzMePvHXPE3FMweRCjM6ABSgVVva1A4QipWxdiECbA9gHxwoAhpNiybwp",
  "key1": "7t7F5UgpCodBntv8pbhzkDthxVHyVdh4PiwZ8e5PfWDzGPK3PYuXe3GMtkYC6ynAJBRDgaofoPi4BnuVzmd4J8u",
  "key2": "daj39FAwdg5BoYJBTsGTYsK129Feb76tTGdFu1bWn2pZyRaGAmjW1yiJUrBuKqmnWaPoSEaxLZMYmCQ6tCjL7bh",
  "key3": "3R5cJFy7fZePbZ7a7rQZb2NxUuP1kfstwgP4jhdDpPND1Fpgq7feyWFKpgZbUVwBjEeNU8i9tQQbGkXVjscEXvdw",
  "key4": "2M3aZCJrEpzs6q6er4MAB9oajrfo4rAKNtC7SG8XUW8cP3RsHwxZUqvcpF9S9kAP3i5kbeAUpB35tphwDAkLpXx1",
  "key5": "P45oaDmDfPMiGEHxiKFMbPcTGVbW8zniRaviYGLrKvCMEimhHhzmiwevCTaSRnYoYrFc1vEBEu4fEn8cABQduh2",
  "key6": "ZtEQJ6iDZUeDK7Ahzh1iwedAryi2MaMdZUuygptfpMeqNuu9a689v4EmiFuYEAxemiS679923aB2gmnLexu5vp2",
  "key7": "4GJMtjnUEJpNFsYJnnCuMV72YFKbsy6ubxYmsJ8LUfoRt1sSitJHBt9QrXyntfz4wFkZp317p6aTbbLjj52bSF4V",
  "key8": "2BdeBi5ypxaSuKPiQrknR6anLuJJ5KrMpJREwrKA62pni8ww2hRaEREsFqHX97gKm8CvxxfwsiKH4rZkCJa8VjX9",
  "key9": "5bWUra2yoA26uN8SRR4BXbpvTUGf2KCP9sTaVVocQjVnAcy8T3fG4MdJMVHXNXNmHWnATnukAY2mJn7dgi4Lx3ps",
  "key10": "4aALdJchNVk7qvMWfe8XUFena1qAdqysUZ4rpEkYeAiyJqLacbff6NTS1REvkR4erV1nDu8CehXxn5gDrhHJRuZn",
  "key11": "362ugM61CnQRXpjd2pxenqYw5N4au7ePa7rhA6BewT88MiN1qHCdMWq8BBKbf3BNzG8MMhbXvmP2gLjmGXSGnxFD",
  "key12": "3xWe2DBF9ZiyScnKfUapkaPDmb6wbhrqTGenTS17JcmrAHLDuTY33MQ8dAodqqfLdz2U5R25iPHFr6NxHNPwbbvr",
  "key13": "2KpNwAaCtSdvpFEJxxpWY2EYa59UAcuNpWGxps6hQSxQiSRkyDhP5CCfcokvp9BQ5ndcWYsiPbUFpyLi7tgtUtmr",
  "key14": "4uBMnnkzJe7nzfb6da44E1xYAYgpgPe6FqE669opmb9F9Cga3HjJrEDWQUzNqyUNhdgYDAYbxHmqdpLpNGTBNLZa",
  "key15": "3oKbtJiQkkG6tMTWveJwiV5E5M9yj5i5gBc4xcNZFetapmFXTowKMAdqvevqjFkVf6iRWX45dZNqao1pGzVMc8Cj",
  "key16": "P5zuPuMDVveQ2Louokpv53DRtK61zAyxTMWx2ts9JSKQsC31YkVpGtMt8H4R6Hf15fVHNxD68iB6AHkSUV12foq",
  "key17": "nzKvoriZDELogbe4WPgmo3SJBptkF57ZW9sxtj3wF3BfGVjTMwPv51gAxrJ3BPoUuAsMFXMF7fywVETFxTHe5Vv",
  "key18": "4ywXVGzYXF6VoipMnhasiG1hCxaPEoJprpjfxC5VHbACDNGJtPFMUBQUtgBVQjMZZEnB7nZvdqGWpezK5As8Mmyf",
  "key19": "3BFVPerxU4Vt5c6U2cDtvtcvQMQZ9rQyBXCejh8HgG2JjSVPy3DQZELrA4V4SJ4adbCBupMHfaaQUuhCRbyb3XZn",
  "key20": "3rXkLoRSv6jEcS63pPioesCvzB9eWzDHEGoAnfjotRxG9VVhfdNgBrfr3uAKQTgV15DazhRGveDkHG85r2Eae9ey",
  "key21": "4QsP4rAkjzHExRy9JqhSy17Q7LVv5fiBUA1Z3Zto5EQqUN7z4g6u8F9EnJANdo3CSFjzos3qxNUtibWN7x5XM2kd",
  "key22": "4d27bXKe1iJ8ubmS3mhbcbR7FcH764DPfFYqDvTHyCt1BrcMb59fZW2EgjN64aDL5581M7b1YyDbMaF6fyXV3Auh",
  "key23": "5NU6Qq565wVecfuAC5XUtLxjK724XTvVCLyEq57oN8iELcx3eHvU6eJZwYfTroe81uNo1KuFYzWYFkZmVjNPEnvg",
  "key24": "d8nnzQwzJo1LiYk983EAzGiVMdNz6TQ5RQrQBAq16qf2Xt6iAYKF8yQLWktUxvyZKj914viXwnofBdLaTFc2zAW",
  "key25": "3CT8as1cqHLNna2CFbG6j3PWhhxu9MjxCAXTNvjjL7cY5bp5YwnbDhvsuGUXrTXhd7yGGScvitFjrDawnjfkeKLp",
  "key26": "8U8Lt1LfHXUJa1c9GZUzGjvwFBfw5TBCVytxDoUrCLVP6xDohxJtopEMJZd3QZAHXabP2jPkWLdzdovZ9B9hnLa",
  "key27": "2XSFRwE4rVaPiodcxaRhGCk1BJnybwUY8g5GuGLQn2ozwhn3Fu2uyCCGd43jnatMzQ4HMq5GunZkssrjFZnW1EJX",
  "key28": "anrvtkAjCRa9tjgEWxVxTwD33nwAkAuPJwn1UDCPHK7gBc9XFhPHpfx9QUX6wdgyEKYbJMNpXeeFKEtYAkKvEYd",
  "key29": "5bhpBB53hNVMqLQ8kus4cqzt6n5JGgTXu3ZV7zv1v3D8cMNKLtoS27wuz3aYw3nH3DzLqjVBnXx9Zn8vJMBZSdvs",
  "key30": "3gpkUYVUMLhvs498u5gTf5kGsjXbh8zAxoUCcZsP7yv4YVXtcsuqfoQV1pcwZvSK3Vv3WqroV4bnnnKuVDVDq4EZ",
  "key31": "57R3q25MRmX51zCs3ih4peA4wfzweEhyUNhnS8vWDCsVBYknkWzrbFbr9bvK7VyUkwp93vSmEyKziurspUVpYuQu",
  "key32": "3uNqphyMnvrkX6EzSpKF9cKYcRRp1FsHZShTF1Jmm6RJaVSfMmYHhxMkttNKFcTQGMsUNr9EbaSGJEVMK6t48hjF",
  "key33": "2E3sX1jmBmf18Y4bjqUo8zQPspyYmsuuCxBRKsi4iyKQ6CWr8RehaGPDEJ4SP5nYpFByUVntKon9GtLaW7Hnhh1q",
  "key34": "LzkJTk8k9yjVYiwnBymbwdzfBZwDi2wPcqYJqLSRMsFJ8vTb4ZkXxfmMKvQhCyhi7dXJrcQpudny1vaUQpic77K",
  "key35": "2CigBd8LV8J9Eoh18ueb5CwcXps2cVqFTJJ42sZ1cM8Zk75ZZCYTorgERmsLaWvtjsg3Xj1A1jz6tQaJapfZn4cY",
  "key36": "K79ANWdd3peYbhqkAUD32infq2oCwKEkd7shPLvepqAs4qDUMSABuEQrAUXVfeQA2CEqfU53JnxzwiYzdCdiy1d",
  "key37": "2nfrCHXx7djq3ZbYTLJCgxaYWmKqzMTEHBKCLQYiyJmKUQnJmvdBZJ6opMEraTTmAZWoS3jUpvvhr7UeqacTm74F",
  "key38": "33HH9bB8SzWfXSbyqA7gKHQono3K4cGC4EcdoWzymjhFbYeDL86FtyTzB3LGTo4fq1fb49FdNxzyt81irRrw4Nc9",
  "key39": "hpAxMwRiZBV8fTJRaE5JZvZ59gXU9r6CL11Jn2YNE2YgAxPj4NaGCHD4YSuPyWy6gwJX7SmiAbqH4aQrKYR5DAr",
  "key40": "5AxsnW6wJHEFmWztq2nYDuKKRJypxGx17qDRLvJXfmGnU3KHsxvCcRSCv7v6uQpAJ7cRNPspQtPLzLwNCivauife"
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
