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
    "2BZyFMg51DMBPthaCFDiw4hRV8FnkfRzEdGtdcEWVdhQ2NMdzk9V64SDZQeZ4XNMetZQMFPiDjrBB8WR7teHt72F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wBiNrUn2sqwB55zTXv4rgaok6bWTFjtcJSswtkvTrPhnTyWh7FBawezoZBnnP4QB2hKDFxyAEfHep6KJisBHPCC",
  "key1": "282Nc48tW1ZpXqcdvoLRaDyUodzZ3CPNiDenLBVSTL2y6ddfNWYMKYznpq55kNoViCeBi8U6nR9qJfWz2MuQHmYG",
  "key2": "TMUR9SiQoDwLKNq1CFZxgcd5W3JDqCzSPa5MGpqwKrzJtXkYLE6Gbc14Qm9ayMDM4un7pDoVW8zzLgZs7uQbUuf",
  "key3": "2K2RJVGE6wBqu2MwXZptbwRnGY6e6bCtu4puTPj6XFF9hcL3TftByPTnPt6acAY36ri8y3k4HngL1PkbF5NpGjku",
  "key4": "4576kBJ82cPQLAkWcMCeaWpwTwD7mv2jeUQAg3xBX79WGqc6fPaPFBXP3Ab8KqC6JYGDE9iDE6BsDXszhvz4Nu8d",
  "key5": "3vASYBGRCkywC9MmnzkNsMmQMr9iy35YCh9c5giXK8C2Thd5Rx1LSQ8rhJDRihhRBgAXSX7t4XUkrfXg8KXXToHG",
  "key6": "nu229tXpgiwRVSY86Jv9L4XXS194NYvfz9RRwZd8UT6rqJpV33P5N892UDyZ8tJ8CtDNWJq8pvsY993BbBrRTU9",
  "key7": "wYjuFss6Wq8QJFZeof15XW37RMyTTjG6ay8NFay6fkUZDSinN2BDG1AJZZvVELw94JMWbSjU5zAkBvY9x6xbnKk",
  "key8": "4QWD4bAJq2rmyzLXwM12RdiDQxpCT9mXWC9abfroUYzpRHTJdfJkEZ7JXbn7ZPjwiN8JvvsUDDb88YDMbCaq8Xzm",
  "key9": "vWJud1sJMviUdzUChCkNshVEacYzSpe9GFJw7G6UfSW435nm1QMhZJSeCVLi6nV3vpN6pYzj3JU7cEypiMaiWrS",
  "key10": "WKRSM1dbLfoKfeLrUA72M8BBboNrC1pRmmYo9BwcQwK98MEw2bsXzMWEe9M4efEPKUxGY6Z9eD6zTBktM5SFvQd",
  "key11": "5TecQdTgopr7YW7dRarxydK4xskTHT2AaQED3bbR2SgtW1jyo8nUqZ6ha5GXeVmGemwds28AZcqiMNuWXzJbpYdg",
  "key12": "36WM4PvPPgekGijSrX7tnwZHjnnK5SFWYhEX9tG9YtfsWoqmsqQCBEtyzjQEttc9pPzgLNHjPXem6w3YkLzKvFeS",
  "key13": "27xdMPdnGjFBS9BAWvMW9ZEymEuCg9JFGNkee98gcpzcRMo31ju5eTiaTU674fHRYu6ygzfKRx15PbPL1JbcgiqK",
  "key14": "4qdQPPDvXMUtR53SHNo46PbsdWD1RCvkxo98mtfR6hF6Tg3oWkGJcS67LQDqFgu8wMfs427E5vNLZZh2PTxfuAor",
  "key15": "QAd4rf8i5SxUzJec4HeZ7AhPVEanuvSPmqfnUEQ7462qdCNDYnsQJ62zHiMFQhG3duj8phdfhwADjsWUHKmSe75",
  "key16": "WPs6bYMTxqGSz2gwEZwCApD8Xiq3bvQMobLdcWWiAbXZS3LymWiKsoBp9dw9f3Hy2A5nLaVRAVSbf4igbStpHNF",
  "key17": "3ufc7XpiUg2rRxyhMDYkX9uigeq6DcnhgSsuA25qxKMa3tBatyD1SshYWdnfyP9N2DWe2Wr1bb8uHCRtrinmWMVZ",
  "key18": "pPMruv1ZmUAYo7wYcxtw1VJCn51zPVwoke6Ge4AYk65j1C9w56nvKX5SRC3xHYRP2tcV9LaSw5573KrSjYZtF9E",
  "key19": "2U2x1p4ZryZUT1QzmWrRgrWGHZrADDQ7sCo3xJhdFohBS3whfrVZUngGjZH9v9dpdBg5ERa1114DNXB8uauvimRH",
  "key20": "52TN79tQSjtuaBKWLZcbxLMTSLdQxVPNaaKCQUJaksveec9HaTh5sjuGLVLfcn8NUa5i76an6u9Kzza1YQLQyHLd",
  "key21": "5cSmJYY5FnJGScADPoKNRZiDxwTqDycrnM6msXyUHDLwPjv5AHikMM1DBuYs6hbR4q5hc3jkKPfYeqBHYXsn7qBj",
  "key22": "2QmnU4M4RgyT2xHJ2FWvSuN4Bu3zkGzeeDrPHWrUkrzkNcihJwSg9uwoKJ9XUtgUXe9LfVJ48Sj2zuRRNBMASmyb",
  "key23": "2UzvwjmX24T23gEyDVTGGsjgDASVottvhCArmm5h1BNrnDS8xTFbwgsyjE3rqbqYBAbboh39yrqj48W9biLthHz",
  "key24": "5YEhxHBkF9sBPBNKD82fVEkKP7NwGo91KKgNZbuFtPryfzMn1LUDb65gZCFiDTy6evJM3naLnk3PWSvoUNfUAFeV",
  "key25": "4ufp63YZuTBPNKWnaPKbBPd9VAywX3hUwJMXWjVRUMdxUJwQxMZyF2sgYzxWeRgrpPpZedDFpF3uS71gtEGgfTdp",
  "key26": "2JhGkj1m55a7F3QsExP1gzGjyN5iLpD1vpqtMfLEskCjGudTniw5RM3gFLPC1SYq7R1356w3f8EvXepwYZGYhfZ7",
  "key27": "5HfBaBmwwdAogCpZkuS5MaWB12Qb9zgNsd6w5YbhKcNtbFutTi6WVr73j9o6MtfnWqPARWwweaXtqPXqofWzUjPf",
  "key28": "53q9ArLGRHcYtETa2G6PBcCuSKupLcxFQ5Y4fwZFaFMoMQmTNkgc7wkHTwW6p9vvkQx4ArH95yaxjXH1tz3c3z8x",
  "key29": "5hNJiJMyv4L4wnfF71554FZwV4ww8UqG3qSSFwy3qp8ZEYg5uqwWN3eU8eyo5gq922ibkaLomondigHS6VQ95phq",
  "key30": "2SrDoYcuvCTqVPABqdDW4yqm19Y9CKy4jqyaM18zwxVzQQGXJuFVMUvnBwsZxHURcUdtjXkPbsxwm7vbkarxha8",
  "key31": "4j942jRjAYMSDKKfyrnjCNws35AiB3BscAm6WHErRsYQzpTq15rUMenZt1doHHRxL9ir5EqiUCSKghxfgEUZmKsz",
  "key32": "3LCSBmWJh3CpMBAKkHZFdCMUNuWwhHRM1brAejNp6Z1CmgNQ6jCgJ5aoEqog2ffV2HuBuuEGRdA2cWHZKrY4Qn2S",
  "key33": "3RCAjnHQiCRghuVAo9Vr5dVJEmoJ54qhXaH5nX7R4idrNE4BTxoaJ8tNynckeCm7ULyRPCqtoFk2vJppqSSHFio5",
  "key34": "5PqRAezaKQNSyKkiJ8BTdZTyxBS9SJedAG7hfYdU1izUiBw32xMkHrYsDwU2TW16LxvjQQX66Zrw3Ku3PTvwX9Dy",
  "key35": "UjRyrvcjH7LXKP2LsGHieKtp9phXfYfCt4HaWrzHJraXaAUTJfVTcFxp6oUjYodBVsdfVRsLaHBeiQbEZ1XdAWK",
  "key36": "5FvfXrDccKvGTH1myjzKRHmQ7rQiX56A6WjWcih3MKZyAM7k5xqY5UQsYhT9jjv4fvoNQMVrSKorCAnKPARTqLH6",
  "key37": "2gP2rffpdasNb6tqua1DdwaMhPD7QZV7VjMPMsRSGu1rkqzLC4TKxWerRNovftZ9ecJZVy6WRq9dWi2EMs9ZuRxs",
  "key38": "5xeGDiKhQaA71eMy1mt77fwp5mMBRXxHhT9VGzsran3x9iPNf2iQMz58eJKyRKdjFRYxJzdkVYwe2uzCpo2TPP9G",
  "key39": "BD3BnnxknwPdxtg3D2p2ixB6fmwwSNiMhc3WfU6KQwRgEEC1Q6Y9KNkc6mK2Csikiad66eF5cuz42SeXCoQMgJM",
  "key40": "3wjcGUBoNGp6HyhcFNG8WCR6DiHj4fAgkgegsCy4VwCe9SiV7YkQ3Ln8s5CcsNNdFB88T84vCRgstQ4NbVfeiMYY",
  "key41": "irNxo7Z1DCyGc7TxVtq78S4KeaTKhYkfvNbNMCRXjt2kh52eGiPsitJ9yJh5seTKUeYqgUFD54EBV2Vcw87ErCh"
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
