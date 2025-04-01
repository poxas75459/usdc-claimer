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
    "2yDZZkxJ1i4FjZKRoKYh6W2uqSGi89pYfagm8uydSJJ5whsKHk5BpfJasHJ7Cov5QiNkssYsPfxJtHoV4RnHytaR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mhHHpprjRkGwP5wFEdjePj2FohDzGcrFVhMg4ucZ7LhdD9LzwdtAccmop1jJ2tzqvv91dHRgdGU67vwEHuN8CsF",
  "key1": "2B8ttFUFbNejV7ELVhwGkYHHNoGgkX2zWo8mQuWcSSwrn6Mk2kqP8eGo2dgdpRwdAEWmf46Cn4NRwcBDAEr3spRZ",
  "key2": "31mkYVELRajhUSSDmgQF7xnZuwxQTf5KEwex94hZHdEuZ8tk1RrC7Xs9exTTDWnDGBNxD74mAivrfJ2S5duyvuMx",
  "key3": "2uS8AMzJCRRNGoUYmjUaijRV5PmvQcAGVuo1ma7RZZpkHXWcxzN7UF2zgK4wnnV5eAUQHkbBaat9rxzYePu7Mve",
  "key4": "66Kc1UEWGshAeaofM7w6qgoGVD8aZdTxANyGGz4i8pYEcrkowAG4G8v78RziMtmLHiVJWF1AHDBdyZdBCrvCFK88",
  "key5": "YZ5L7PpdgNAaXK6Eb9TbmFmuEwAdXNQEg4vVUrzsL6APZKsCAPdXV2JFrhjdNbD1XUi6HgxuHDFyvqZnypS98mu",
  "key6": "2t9xrcZKnSSrbQArw46gMUK8BTu1tGa91cnVUNDpiNJGxYMCPQJ2JvuTEMFtbha6p5Q4UCcBc62boh6Bx8gt9WTJ",
  "key7": "5gTuh9QMGrUVs5Pm2oF5czwqGuWMvUKApDtHmUsajGFzVmcEhVDjVn3xaXymzh3yKsBCJLWddSyWCfExUmpb9aKr",
  "key8": "3YAHobCVdghQ2TcPJLiUpPtXhNAXgBJQD8qiq7qyjX5tLVrhTQdmgML2LrdBnA1QsBGuvaB18saZfzNfqY533Njg",
  "key9": "3XKbNVkz89zRSPLbDhCMyLqFJAQBcCht3RGeVTJBZLm2csuj9U3k5Jv484g87oyb29vbLXydGBYREuCGZMHg846p",
  "key10": "XSBn6mJJqVhtUTDyLYvZKZViwY3wHoikCvDW4w6evAFAVaANPo7scMVVo4BXrZPkppNP8nbFHT1imYib9mTPXum",
  "key11": "zVrcc95qyDQj62DvfVkpD7J9uaPB3tpU8TozSCFgVHdUeshnWYUcWK5ZEk9wCNxYQUnn89ryqiPm9ok29o17Pcd",
  "key12": "4micsbkSqc8AUb7kkNPhNLYWV5jee4RuPsEkFom3Ho3pR8Bt5imyZgJVveZfhn7twieqyazVLNXMAnJN52KMBufE",
  "key13": "2X8NQS181C67tWa67Zg4Qya7j9iwtPtg8L1RCUs4FQsKauncLfnw5sB4FumfmuUYVUH9bG4cdZddYAetd7yiBZvJ",
  "key14": "2Qkoze1sMusCkdGfBiiwABJ6Ln3RcBZDmt5D7uPghZjTVqG3CTwbKxjQySt7dJYJULL4v9ByYfTPvtMLQ1Zq2PRW",
  "key15": "45BG2CQnB4n4a2PsnJuuxdS8CVLVeahKp7Ayj6XvwR3Rk4LmPcUYmcWUCUZa7DrUB1AxA3vjC94hxrXWVVT5UTuH",
  "key16": "3wPjQNkXDed6C2H2WWFmwQUC58n8Hw2wb7JPYaj74wjykc2W8XdE8USqzCQD31QgLwbfMqXmQNUSipDQj6TLbLfX",
  "key17": "4EQBRByJyM5NrfULiHckGXrW8NrViUuaCjMDs9UVfQhhMB9zxyUq4sh9aWvWdp3gWLL2Rd6J7yUxG1Adj3RKyqdb",
  "key18": "YYURtzWmja4SWnW9sUgS6agFjN3gkbHsuDZsbdvKtpBT8Uihqkzz9oUyNKSmq4Lbc35ax4Zy5GcvPiRYTbvmYyt",
  "key19": "4dYuuWrNGqGT5Z4FjxxkrMsaFKfF2nUJDSFA9wD5so4o8knzmBMobFBCToQR78pUnfkEwfG1Rpvyn4y5dAQxtvdr",
  "key20": "4ucKidGLD1ydTRvYnnjCEe8d898UKVYqYDmXitPRt1yXgW5MsZpcvwa9rm1pWZVTT4dd5FXBCdKMnWscreSx4dcV",
  "key21": "2FF8SEnk5kpbMWBEiumxtoTjVUP8YTBi7YNPADDjhkjn8reL2J9bp8ceVocvwMA9bsqNir2WnPKPUVNAdSNxyLeP",
  "key22": "3FZFdXg86quFcteih1LmyeLitrVNqiqB8jvHNWoszfq1V3beud8xkCaZFpJi6rF9F4t3rem1BNnrtnUEEAXCqT6J",
  "key23": "3nhhELnMczwCUFcw4RT6LRxDr81VFLdkgBQs3c9MV1NBRsSkmqfH7D2Saf6jx639bgpwJknDceCAoJBjN5HhhEL2",
  "key24": "4AX7E9PEr8M1wY2VXnccVjb83Up71S7HRPjppkXZAaBL9igmT3R4DGDDYxeJ9GmnYMxcLnvJcnS9G9tgAjDX4DZM",
  "key25": "2BnEejNX5Qj1AvjpYWZQ7wmGfoJN6rvPfhp7zH1nsHKHmMa6qvaHRbAuYP3usswMDuLZpvTAT9u7jer6B9ZUvzrq",
  "key26": "m6dhow8pCRvr2ib39LRoMHvwtU3BQ2ar7kRdZZhKzGkY9HccUnnbdeJGZ3eJpFFV8kytwFNi6cDNwvhxLLmpetd",
  "key27": "5dwdjL4SZVgF8p3rvGQn5V8y5FVdtehtSByGTFrLqGSNavkjume9HrTXi5MxhWgxoGFCm4j237A94oGFYx9pCVth",
  "key28": "3PAxgmCEh66V8By6mMWAjJ7wvTBepxkjUGQWj5niGMC8meKzbx7uSDe79rgByiST16saw5P2TgKPKzktc87R5wGk",
  "key29": "e1Cn5VLJNbsatwixzzhLbLgPn3HMTKniUbXxTW61qgs9CwQ5PD8n7S5VyU52CWtTVdtkQfURm2PFLUYzd72VJAG",
  "key30": "RQDrbrCXvfxR2pU1Dtof3BMRFzsAdi5kU9wqATtAxvCJDaVE7fbtwBNbXVFRqDb3ttca63G93569pUttSyf6f5w",
  "key31": "3kwbEe4reqz5FbQWP5zkMpD2UZatbPBerDzBDiqtqb7sgxAZ5C5eg8wJ1wep1micpUZ74FWXBALo5ME8k6fYEHm8",
  "key32": "4oFnTGVJHPknP3dw2F1Ydt4sHBDy89UP2Y6uZYwAszSY8SsbJiPPgruKNp9Sg1LepgSx5ZhYG39yv4oT2ZJzw9qn",
  "key33": "52uvYPWQsKHAxLRDjQpqWfCg8VukgetSzBp6fE4DnH3azhpRuyffyUiyvB1bcrpVVsJFctXNu6SE3iemgz3aDjM7",
  "key34": "YQfgx8BUBHVMgoKNU6Etkg5vUmVSZutNUWwsUMeePL5duDjpdzwWXjwp4s194RXMHqNcovE7SMrAzPvUF3ZuzPb",
  "key35": "3wwoKpNh7XmvP9aqRUv566EgDbZTyZRpo5pLbaaNs7qY53ruj5ud596u12PDE8w6rG13gmJPK6DwZtSaZDWK68hC",
  "key36": "rW21oNQqte2TR6jEcdN6zoJ9rWnVhQdctjx37cJzzgWxWKVUE8cEqwTHWhwFdRZmQfYmsUtB75F8jrjq5BGJDtB",
  "key37": "61faQQom2VCp6Nc9o5pfWdd7WqTLWBeaE1BLRzcMevnvKNTXzY1yQPqEdnLnbdzxCMRxPtGiPteU43nTRV957fcp",
  "key38": "am4TMKmCTXpqYdhcg2Xr3jLdrJf2yr4LM7PHxcUHTgRV1EKjuRihuZtkpSFz9sbhckhx3MUcdvyLKfakDFByrbr",
  "key39": "3DqStFHSoz8dG5xBdfCZj5j17ALtnxLPShcYmG271NcQ57xqDp6bqmsTXqgqAtTSLQ4jTwYq1FU9MPXMJ8UQtBhL"
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
