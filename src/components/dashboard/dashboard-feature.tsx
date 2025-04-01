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
    "23nG77UBSyZ25p69NFTZ1DeD7VQRqQ7sTr8affyNkv6PWbowXGUTmHu7HFawoCbbn6v2jLxdN5ZSJ2euvmFwki12"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YaVrU8HGTCsx78VckVVDifuZ4fgbof83VNPK2Ewqsip8PxiQp32kh2gxF9Z4Yjwk9B9FbyGby2CUQHQ56amFX8Y",
  "key1": "56SMjiYA9dXFpnofuYdr4wTj27MWPPmkm57px8YJRFQyJQte9bk7HrKaHpFcwuGe4LYN4Q4az7rmunDixn9TrMaL",
  "key2": "4uuMNP3vgdFNdkmjsNfuU6CEqEKA26JmP4W84jrM9Kd328epMh8RsSaKVwRSzS7a5Egmbqyxp8EDhb9iDjtEQoR8",
  "key3": "gJSEXbqJPwvbHzzYgYaUqDdc4dvDWywHvi2d9Mc2E27iZaD4PRBCtbhBk3uSq8iivJvX5zoz9LiLcyZsY26G7fb",
  "key4": "26EZa8L89QUMBmMKtgsqhKcRLLU7TuVV5ZYtBsTH7gU9gLYfEMCjonWtxxMaNkX6Ak1rYdR9Yyspjh3WycuedUa8",
  "key5": "52Y2ynyZcB8NutGRe3RccXAM41QdoJxGBKDCDSgesyu9SHQqroC8eTCj1Q1gprS6VvU1CZKveJsgyV5xvP9hp92F",
  "key6": "55GYdWiKzv1HTdg59kRkt9pHwDvzTgdmwSnhGx5h8vDt1Vw6kCk5Vtz3iYBfXLCkTvJyFw651PMtDa9TG3LJZHNg",
  "key7": "mwCjdJ6Sh96WhFiBhznRnQYZEoyKY8eKphGEADyHfEczEEkGd935ZL2PMrwvvuwx366HPzZEsLGSx6jMUw1mHhF",
  "key8": "32TbbH8MRhpkmd4ydgzJZaY2dWjdwMwYERLoE1984gR5sUs35YUKCienRZAhHUqSqFbF35inbuD4KcwfKQ2de4LQ",
  "key9": "2Zk9jznMHr5KqLSuafhNfJhgx4gDzxfAyJj8aNRFGGPUfgQ1U9zSN5a5CQcLYzozY4h7MSpd6LVwTFHkxkH1UDbh",
  "key10": "3H68jgbnX3ac7LGh5BFswRdMWsnUTEcKBS8PbVTCn1zboabEckUriKA61Z1dVq73tYF3VBMhmjdtJkME3XwKGPbi",
  "key11": "4UBZE8cAftgXV2sJzwQ4PaW9vbMv8Ta5kVPczBPCMaGZwe7VvzyrcxvmBkfTMeqJjmqVjG7FDP6DEr4biDkc7zEp",
  "key12": "2aDgCd5o8nkp2RRh6FsuS5gSvycur8Zi4VA6FqycXqA48jmsLv6cABYNUXJHxX7SqGGfU6JFk55F8op7DSGbXFWD",
  "key13": "5ie9X3gGaCyXB4AiBAECPu4WStsSrkBx6jYMTdyHmuqHrTPn7B9jFqYUAMz5Wmxdq7jZW82M1hVYUHdMSDbBZ6Tj",
  "key14": "9ecVF3QM1RPL2EBQCXyXwyiQV26AiT2uEFL8UJQJh1iGEGJJKnMQ9iGDL9eQR2gbG7RE9prHqphJHb6pTVtoiEW",
  "key15": "4sKcdNZFSuADBJAqw3Bh4wEYHwm362YYd6Ap6DD6t72KPg61FYta9YVBHuSSTFZ2Z7P8PnZt6eWtkBvojePTUwFq",
  "key16": "33yo89NHRyBdVAHBx1pAMMVe5wiDEV6ufmUbWsPzkQ3izMD7sT2EKFB6iYjBGZHstVzLj84fy4V66dMgnqDkobYi",
  "key17": "2VmVVdSMv9RcpeRneBLsjKK6Kf8dVogRaxEDLd7WraCjNPk489eMRzQ8EG7AD6TEd1iV3iC5k4STrBeN573bsDyN",
  "key18": "23wsDiqkJ5MKLeEnprR3WLM7SgpXeEQeZbiPu5fKhwbWgT8iigiJtgfVawAHk3sXZiPPmizmatSMdVHKG6x13KiM",
  "key19": "3bT6AWopwmsuvL7mHUvtHPDD2iyFSJs72oBCLnjBhaH97NiG2sYx6oCZ8NwEu86o8NBUoeZc587og2MzzJKVuBic",
  "key20": "FLerdei8q9HJ7wP4iPcj2ca78oGswuJnyc55m4w1Hu5JNfnr9KWzZ5HkmJ6jnwAhjSYqzaL8KebrF6vYDBsVp3x",
  "key21": "41y7Uyru2F3nK5JppJvxhmQX6wMsDTd4rY25viGM7uPHFdhuUPj25q6vuGNRmqfyNHhstSwE5iXHJHpfiyvFxRUc",
  "key22": "3865vnkWGiUvQwztonQVwRiVp1F5Aj6jjtwSPqB3LpfTaHad3iqrvqJqStsYnsvUBqcDia1WxBUNoiQebKjDBY6r",
  "key23": "ZZdJFyBEQY42N66bKrkRqqgHPCksz9UFkRCztcfmJbhwFdAJaq98sHN2VPBXEk96y4X32aFc97PpG4LrkidokqH",
  "key24": "463G8hWcr7DoaoLyVhaDUzoj4Szs3jYcCfpWVE986RAxnExh8seDqNEmYZttJRvJM7PtntYznwYTogziy82RDDdS",
  "key25": "3dp4iKiwz81fz6f1j5T8PXkGsbHxCrxwN7BHyvLNaHRfngDrP8qEqVuNAgy1jLzFFcXLHGdwhj8fA3McrJ6osJSN",
  "key26": "2LsWt6xvvicD4NxcngGLrXNMG5B1tozvE2RbNBnMRfmdq1jCb9yyg5ogpTDRyuRTCQG2CqEfRbmirNCGaupCPFPG",
  "key27": "1M6D5mi9NHfSaosEoxboPmsj5vHvNkotiuNAv2SQTZPqYCtM9a7LVcLTKLSg9uMxLi62a3qL1rfv3iLQWAyki9f",
  "key28": "PhUMHeBZckkMh8ZdPUEf6JP6Tn48fMXjYK94cFjkGST1pgjc232gyFue5FafmSgzisq2PLhv1ohM4DLW7rdKgRD",
  "key29": "W5j7FBU6xfjUoYDAKPuERDiYebtYAmKJDkKVMcQS3WCwBJxF1Aoq3SFU9hLBXHqzdk17XSKMetcSsS31zFDzrnU",
  "key30": "46bBKQmHR9ugdoreYgddEbaXi3sKNHYXT8j2gSgEKVzb4oPTLBiBEbZ2bWSMFnxMaZ6s5y52dHhbBmpjWdFnDdew",
  "key31": "2Z7UDqt6NCrVuGXCQpx57mXN3qDKptDKYWHn2NDAP2PNTesCTehmexwZ8XiXSNbTNv9LpWPYDrU4jTDCh3vtjPXM",
  "key32": "d7HNuwadcASAdm11G3TF2JN8b8P11GbQMY8SXNjhtNU5pG5bhZKhNgnnrDVqfhrzNfUUX2FbtNjrbxbZMWs8y24",
  "key33": "2vCqQ642knmNM1iiNAKjxqCLv7MVwPA3TsUpy57EsNniWX5hYY7Q8fTQBh29UfH3TzmgTSqUvjeqCB7LSgheVhqm",
  "key34": "43JRDo1XnKdMv1yk3fNQFjoUeu8YmsfpgpmJkyTsNQDD8wW4nReDKf69rn9WxcEGu27giQVhip1PvL3gTDCJjbmw",
  "key35": "4x8jvX2YHAeQqgwvhyYdAeBMCG59YtgwRonpWTGSTwgfZc6wP7Zi3bzYEED6uundDx6jMmpdEvVSQSrSxWttBquP",
  "key36": "49i91vDq2YoJUiUsB1VP7A7k2N2jX7ygZbgRKnkr28RSLnXsLiDfT9BXXQSTf2en1jJq4oCbnMWcoxCP3WG4g2Wi",
  "key37": "5xx1JPcGgvvF2iZk2LXTeWsRT6ntUw58oUEo46cGyJjV3VdXUXzDayBDcLUPpYNV6ysqEbbWdr7M14SzB47hQerJ",
  "key38": "BMrYPZMp1EC88zNWFUsFbFY5m6Q94B6JjcgnFA7itFRbvWELzH4t6u1u7VKfe3GX47QJwojZnAXKWdqbaKXGKeM",
  "key39": "5HMz55P38ykhNci6K2qZrCqUtTC5kd6kjerA7T1ig5r5ertrTCufEfBspU2TMEYsPwDeK4ThdnyeC7vKe4GuSxsQ",
  "key40": "2fBYbe6msvB6kcMhZ1DLYmusnerH3mucGNwnJxnvqoK1FHcF7eDmjcSvHK3G2kdh6hMt2dxsZLGRtnhjtXfHTLBj",
  "key41": "2m8zDe89P8XNg7kZAohPQbtMUionS7adNZU3ev4v9QWb3KdbhKr8AhvVfJu1VevC1RSFWQnaSrDvq2xobzizme1V",
  "key42": "PBSYm1SgvNySEjKFn6HzERobUThyH1TTJj26FQZeK2KKSpfxdnyFBAhYy3LVs37zt7HXdpP5z1X1HuTRWazfGz2",
  "key43": "4PjQRqs6s2SuJyxjkG3krAW3hiGBapRGvAxg8Xsdv2BBRzrR8wDePYVinfoEfzGwJhdAzrpZD1u51wYjFppUFKoE",
  "key44": "2CsifJkmREmGzuxxWt2wC4hen5Cm2ExKNd1W8BsxpT4PHDVMRpCL3PrZEohwn6PztN7XTYeBQrGd39DYHinihswr",
  "key45": "2EwWTfGuFbkb52oWdbDtg73K5DcdfarQ1Pm1mbZPUBUndGNUZmvhUKDcqJNajkw8QNxbfbMadjddZs2vzGbnQ63r"
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
