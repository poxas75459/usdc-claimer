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
    "4BNStzxEdGzxirBKpabW8LG3aKqJR2v6mpPrHRDr7M19WaJ8P5RsCoGaN7zjjHQLPeJnzVEBHz2mLuSpx3MWEUak"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QhyRnA4JCE1M77cXPQ3bWxYgh1eUQ9qgcW5BzhuGii7DeyvN6wTrJte587Mcizr4fUPyGR6jaUVcJx6dmdAC9vM",
  "key1": "4EZMuHvKPUySK5kKtxGNiDYTN4y6q18WpmiWGr7qwP77pvFzXDNftXjNhp1pCPma4d5zFX2VKnBH8d6c9XZyXcnd",
  "key2": "4LXeJHCmtMhJm92oaRUHop3Le52gqQw6R7XWYmoWGmpzJH99hxomrPM1GecyrxYTjt95nCGP1ZZuGpSV6gWDvRgf",
  "key3": "3cWiGevVvtbYgeaagE7SFg851L9ghAgiPxSHdR6y8ytZMXtBHoqdXcw9LZcsHGpmxzenKTh41fC3NUXqVAxn3r7V",
  "key4": "3FzsW48HP4BHB4owXL2TBL869ZQfDrEBCr8dpoFLHqmBkwh3kzp7HUSHC77EhTMeQ34HZRNrzjZvYaRDh5Rqj9JB",
  "key5": "2Ct3cWrrK99s4o3hnqPUwuvSNzk8PVMzhn5TkKJ6DKd6qiw6H7KjucA6Lyg4FqADT1kwzKfnVBdRHoNr3fzcdPfM",
  "key6": "2SCnFsCScrxQS41E75P8tXyQtjXb9oNRqZ5LYi4tyubcEhhTK8o2MNrYUM1LYJCZ25QcwjU6vQGMRE8V2koK6Nhb",
  "key7": "5m8QnxBjwLzprREwQbrNnniec9Dw6vLKNpKsVncouu4dL8Lx9HQBXDfAmYQPHQaaSz8fmdZiSGLMY6iFgjL7KEyf",
  "key8": "62fJhWZjDCN6C9j45Jo9qkeRmVbyq2Cw85fz2b8SHuYtiTjUvuc34aXKHaMoM4sgQfuTEyYFmX3uLToHyk7XXDef",
  "key9": "2Jvi9sYTkj8NM1pwgF3JHtQ7RJCmN6TQTwxUMftqSzEyJciqnQ8zURdFS3a6uvB6SVgrmLMEYMpR8K8PqEWv7jcH",
  "key10": "5zjSSGLX5XEErsdKDXu8JFGwnoxVbyx8KXAZ7tjqKk2FjLAts26MHMgWcBp3syiaSrYF4kTToKTJr2FGUrzLADQS",
  "key11": "VNEbkYvuMQJHgdo72LeXmvwSjUL7RQThznaUunuy3RqFPf6djcgPQ9gEBdCTS9a7YX4cvkwSnttJYtezAS2hXYV",
  "key12": "5koTYw38NXn3f7iZ1nKCpJLpNeGo9QjftPFY4EBa857wF2nyyKDezg26V4GCU9Emy8djyeL6tg6iuHrMZ4PAUkWf",
  "key13": "3GgYZA7NsW1XNcF4Jpvu2ehnASu6D6HXm6Ya1Ga4wQurQTgCe9tap36j5FyzzMZA6Lp8izEnwyaTPdAn2XFWiSG7",
  "key14": "3CQ7RYXCRkGE73dtFq1GdsZaMcc1xL8cU1KicGfgs4tYCryssCLJE8Ym33NTKVyxCsC7EzoXVfGYJZ6iF2GsxN4s",
  "key15": "5B8LD9Gbh41jzPXA3nYdrB9fRAKcamUPtMzkxuLDGAgDNJZCtQJTyp3MU8bwGAe1GcuCBVdgQeynC1pKrParuLwR",
  "key16": "23BnDwCDNt2HCCurFq5HRjui13g2AUkVnsaXLHQWnqVFjnZt6aNVsFSQ81TqV2GFPKPgJAzi1NBtGhgyeREYrEd9",
  "key17": "4pKWu6n5R54pchm6cW4R3QLP95HK5s3BoFuvP7rUA7hb3TDjbRSZNewwZyHsBe2mi4p9ci4VCcWu2kHADdaFW4XT",
  "key18": "2KDTi8XdVq1vpKqMm4EJR6SXbSWtCEx5wpb64wFo7jiPw6WxLZRtmdQxW9zU7EDVPuPg4voegQvoMnM38PFijD3T",
  "key19": "3AgvSuLMutdM6vbayg71kdoSZdRSQ3jDC7a5TfhNKsKsuA7foNf9oVUrCCbtygva7Xcn5wonse3C6x94L8vUTCUq",
  "key20": "5AoD9QMN8fVxHTQftFoM8k752sJEsRrZb7ESq1kquwPdZ7GZ2ndYRmrCxsnkGVXGg1MACejiSW2yEV18ytfp29m",
  "key21": "5QGBPFxc8GTpoAhD8PJEUqtcZgvz9coi8zh5fEvaXDrrvSQEsprcgKJV5nbY4CjfK7t29gNGRUxfSix3nEaw4heZ",
  "key22": "WeLQ7TywuDq4ebvEqudmiiqgZrBQYHKuGYfxjdG1hK1Sy2BgrJ1hx4uUXYLjUQuNBSHP2mkmGEjowBxH7HjKnYC",
  "key23": "3aLac7SfLpzMTNsh8LEixA7gvBaE37ccAM2q1UAEkoxnoZWsgZ6XxGfqL9uwtwE1uJrzE89w2UszGxrpd1vBqzkE",
  "key24": "JZjofkUHpngwD8ES246wfZ4QEWPvAV8DFS8LRiMGJ7vsP5e8De6NFhAWSMyXpMs5u3KfEEVbTtELsrNUo9yjfLy",
  "key25": "61zBmLWxtvao5tEfTfiRfc5oEcf1nW2DDbvESi7NDHQtfgDFzUWWk45xyjgwvu4vkJWpgN2qZK1MP3FFXdeda4eZ",
  "key26": "Rhp2vKCGmiaxY2W1qTqQ4Q3ddTDJXXqMXNATqYLxT6788Tv5PEwMzoTf9UpKC7aY1uBXkhMmGAk47FB8FgzdbcD",
  "key27": "51eAjWMBkqcYTfEhnntHsdnwZGnxGerqZMUApwKWR11o12vNBJowLkF2ba381XRTQzDBzPL4vFCxmhcZLMcaSWAL",
  "key28": "2xdCD1MQxhf9bjbm4cGRDkCctg4s2iHMDKqXAcUCF5YwfJDP7WLhq9g839uuRAWkCZe9wbQRMjLGS6WfYaZLvTcT",
  "key29": "3eSBvfbEmD89UANeeTStaVwTmPmsfX3pKN4H7RP54CW9MdoTDNpBiw4ULPR6HTqu3LG79VbVkXZKcjwWsShsUgrU",
  "key30": "4eLYfKrV5UoHReurKwHdBdKaDJgL88tfc7gyHbV1xTJxeVrF8JtKV3dwya1Ex6VW3zj8xtK4gb2QFzmpuHX2JEnH",
  "key31": "5V7oT9zRby9xDR9nh9ac3avGo4RAFmV7fYLzLLYJnH2YRRnR7diBvLBwMYkZeSDycJHbxhi3QxW4RD4Yx6CM9w74",
  "key32": "4frRTLgQGBX9hDJvtSzeNB8bYYtd8uXtupKMjt3hExCs98pL1UBYjYYWDjHY42t9TG6UKzKozDfiFNGUekkrJjrX",
  "key33": "3tK6gN4hdQJ1pC6st3T73iB9VSV9u5cT8uuqb96Hod15otikhnr45Mf2XmPTXiLRuWAr8oPhNNjnXP3pcor64c7c",
  "key34": "3zSqJtuFJfq5tVXQpSjPX8fBfAAyR2ajoEDLNp9gcCg3L6dcRfow48azqpTjjFYk6jkvVsrncSJDQAueb792o7Tw",
  "key35": "4MNnFaCNmr5q6NQxutoR93Ackuz51iF2sxKf3DCyizZ7TevTLSWEQNQjbb7was2BUnq9FYS6mM1dRpLbsWZBXwj4",
  "key36": "uF1dkLzpRY1iSwEs115fFtbSq9DfP82w3UcUPWrk79ZAswrTduvFCuVbN8hZm4uer4zr8ef1CsFPE9qPUSzmjWS",
  "key37": "2axbMmw6v4hdhU1giWpub9JarzJRyzpWm96f62xUE66xm5cETCaB2M1uELddAnEQanUcSK53VmtAfysbY8SC9TgG",
  "key38": "5ZMnJZuKGBj58QF3dz23NriNghpxdbqB1EGS5u2gGMbaALqZWBFRwtCqkJCMVfjZWm9wwAEYve1jeeyMsxsg3tPW"
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
