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
    "vJB757xonWxGUj7DZRDty7ij2MNnUMQF5msqaQvnWgfGjLP3Qmb5GJw9Wtdt3C9Nxk4P173rYQxwLU5amL1xNre"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AKegjDpm2RPXfFaqgugHpBiR5FESUaMJAVSAPxwE11YGGJerotf27tFya4shxjcmTFjTg5KcTzhxN9AgSSmkVhC",
  "key1": "5o1TGcw5qxfonEfWtuZPf5P94Hrmtgx6KrZfGp3itRyxSLBNSJqMrrQcEvYYSMGFMxmE6YqswXNt9MiAsn79whVe",
  "key2": "5YnEsg62NcqScSmq25iW8pQu9pUoi7aQQ9tAkabaZ6qi3mypKLV6tgr3835qRAXTyBL6eMJkb3FhFtJpCtJGv1JQ",
  "key3": "4KSoBc6CQ4FbdqhjmQpCUURkPLJcdCAaBKpQgoa1eJ2HvbMtyHzMyddmxgitdfELr2sPCUmiAi2rtLRuiphBwKxJ",
  "key4": "t6T7qAs9iUbe17KkjVRc1nStZbYQDXM6rbgmG7WFLeyNWqizy8EZg3W69HJb5Jp4QbtqJobF4YHeYF1f1yEzFXQ",
  "key5": "3pEcqJori2R1UMJsvyk4SHcKDVSzr9C96dSMmW46ubgrY1qgCQsPouvK2JTeVyTdKYAvMxWKGEjZ96B2VxQNRxM4",
  "key6": "2Q1HrSBncjTnr7ZnVpgk2rZZxJbzRQLAYGDTxb1KN78rsQSjg7NZCTy22YD4w2bF3LxPYQiNXynYHhYu8BKb2w3F",
  "key7": "5weEKPe9hf74ZKyE2jK5RpAdenhaVXC4yxxZzpGnffhS3YBoYZKrzeARwfGyNMTbcpwnsBw15MHyTm2Pis1XSgwR",
  "key8": "FqfZjxW8kduR6SWbm4UwBg2n6pbb26Wc5DTqWzj8FizWgEUmwXXegiE8exx2TrgTHm6cd2HRCoD9RsDWkYNpZnb",
  "key9": "24oieHsXyoAfgixC2VAEWrEYfvZ2kAB3qKNJTRaYyDmPCUhNKA1qrCmByNHaUK6W3W5Z35hVsxF91zZYDVNnjvgo",
  "key10": "3YPMCcbRuCqo8zg1DuAf18TEz97UPurNnLvp6VAJWHFbQPRYn9EB56F72cWrsNaTBKwKrSQXk8hKNDC4roUHYqBr",
  "key11": "MVq9pjn9HafxWYfKBrAFEueJsaPG6RrS6QaNSrwskCy9S5r69Av3GWrcJTgAvkA1cXg1ZKe1U9EQSvVkLrZEap7",
  "key12": "2E94B78jzEoHZmJfiMrThptq6Za4FmrC4sBynKsigUdvxu8WriBiN1sY821TFsuyNQ52rzSnvoqGfwyx42wYnJSt",
  "key13": "3ikaE6YA8Tcy4Xwq7iiNSMnF2jW9rnTctdJacJUBbjckgrDAFhxJe1nV7wH5mFM3xsybELavAnReGimn6MQbfSC5",
  "key14": "YY9428d9T9KpdeqeufYRPmNwykDkegPXrbnEnzNJmxcZc7QmdhsoTuecKfURFXqhXkFWy4EEnzAW7dHUiiC1Esw",
  "key15": "fizJAg5D7sMcytjyqKcS6d9ALVBzTJW9jYpxggevZwxGpQofqQKpzWA2LoRbmAxx5Kwdj3T85XNJiTJzsiH2x9k",
  "key16": "3cyXfGsL5UPkxDyN3BAgCNBiGCTGzQKAE1xktqc84KsFi6558ScYQRW46DgTcNpcAh3cY9swxBLJhWPVhS7te8Wp",
  "key17": "25MJB9JiRUPvW8EtpfVQ3nENgNSrPwXDHJmMezSbhVCmWNESsSrwqhqPXmPba3pDtQM5mhWged6UE92W5xbn7jBH",
  "key18": "5GtSqLhnXpr8V6Mx2EA1Ci8NLJFT9drsvqHVpYKeX7zPpzvwXfR1Us18VC47StidPJXBAzDmpfzm2oyw4QnSd4g",
  "key19": "4jHHXPAGGN8Jr78MTVpss8MZqnd5gm64n3uYv7mPA2gsV57W8YtaZpRoG3KvVrFxzF3CrKYCWbv6rvaffRorVTsP",
  "key20": "3RxS5w9XSA97cYvgVJa7bDaGN9Y2ZfBRH4HpwYBDWBrq53SDZCQFWTGeAskFLGLQgC3wuoVTAYUoDMAj5ujdLqby",
  "key21": "3CcB9cxrvFcYJj14ZjSdv44Uxq5DRKpvfzBUihWwerfBRxf18JHtEPxwZvkAvGJtuiDwQRAatjhaGcFA2WcK8KmG",
  "key22": "5hKXrEm1vFT1se3RPQjo78mkgQcQkZFQhwTeLuH2LxzVfyroSPbhUCEDh18fA6j9NwW1TUvSPXBceq1w14SE24Lx",
  "key23": "4JnxMojbNhuXer1yDtHQzgxmQGPssuGr9whhd8gexbSA8CMaSNqnfbNZ2vKPkimVc6Bykn8S86p9vxkcim67qNqL",
  "key24": "7dWsknzqPQx2qDWpCTkCF1XeWALW1pk8vurbcBMEU5txnQpuL1mukaMoek2k8cxi6BWhxHUqns2oimr5vwvDizL",
  "key25": "231nYL5YcCPWDy3bnopM7DBywACCqaz4paCHkjbZBU77ARWpKnq8rX9oRwmyoSbJ9LPU3QP67tBnrxseuGQwgJ84",
  "key26": "2eKNZFcpeRbd8zy2Kr47jT2eu4yD99Aox1tRuUDumgiSJZjSA7EAJGaugT3DYHMWeVc9xwPmFsbeMWGGgUxjk3SS",
  "key27": "2wimSZk46NPtx3Xy4Qq852oCUhHcBbEYwcrsndbtDNGaykZS9vd2TnXsbJGm4cJ8FkKZUHjmbrfg36wry5oEFdGR",
  "key28": "5HMiDh9iVKKkjgqPTxLB6vV8xiKWTZ5J2aQ3CSSJh9gjqm826Gjc5FE6FhiZYrfjy47Qfu5vCvrSvgc8BM2UtxDy",
  "key29": "2GEeCuP8Y6J2SKxPwxBeirHtawc1Y6w85YuyqVq6B5gqYRuA7vBt3tdNxWXnXCdUAsQNJACE7NTEKJyRyGuQmB1n",
  "key30": "2dFVmBHbCYhaTcw75pr63NUz5YzdjEycJq8yTUYQA9T6ytUGrxmUtFukeSSwSAuZE1HWfUQ4QLkTc2RE3DzGunRr",
  "key31": "4LA5VrLMcM1J7YprY8xx8mJzFhbQNjhhHRjCRhNnpjRdFiBfviATtGfG1RUPAuJHRzB3mqPs3nkiaM2W7kJn6bPZ",
  "key32": "2rToBe82FQRm8eNxjaQnujzmyYCnzBifegtHAmXWzf6QQFJyPDWsgqLXntX49E9snx6guJfL6coQfdbGsEKKUfLF",
  "key33": "3ETnvuSVCBiJQkut8UCe3YfgDKzqzaySwDMiLHzrHn1UnvrJ3YUVoWhN3YzsEdzY24JDYKASw4our4hdcRk8h6N2",
  "key34": "2x1agDQ4dQXbBEW9apRtRaDVRLAByzcPu79NPXE6XVFdh8XMacDbUt9cPcXJpN86horHUcweHQrTcgBfhK95xpcN",
  "key35": "2QfvFkwbcyEATEQoobqfmDsSNWqePrM5NtzFiUGxJqwHCHjczp1QCbHTkAW7Dj58JE7JKQhGHK7SBmaC9T6RQvL6",
  "key36": "47G75QR7nXj22Qt28QpeZMPZFRWWVyAT9PVVPxWcFn5ibumt8QaFKApSVEmMGy4MTSqfMpWGYsZs3zGYT7BjuNNK",
  "key37": "TCDJj4MyFcJeF9zYzVcCznrxaE4MNm9YRAqdGpomp3NwqUuypYar83UFHYurUsq3kZf5Aeo2FQfEDRdZHxsTwc8",
  "key38": "2GP8T6sddwR4x3XrLw5oTadiVZz1GUNBWadYr9rS5pBEtgGmcPtCXmFNydsZKq5BNTpGDtCucdaT9jcCZNRAwkMH",
  "key39": "43B4mkZSpCtBsogA88UVHKC1tCdaXurezo6LBjD33mwAdczUtaVyiSvAhriLgGqTCfmiTRYq4AjU4m12xJwNTqBt",
  "key40": "2AL1ABPFCQiEadgEoj95HYnuT7o4yrPgiAk96TSUi8KcR4SuBHGxCeHh4gcSwJN1XYj5mho5n96xRyvdKrXfXpHT"
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
