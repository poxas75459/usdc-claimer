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
    "2wz3tQwRsxoEJqtxUrUs7fwmTBJPZuXVgzqyxHLEsj3Lo96u6P8vp7AJR3fJMczY4BaeTr2YJ5KxuUR7nPzKft9c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CWcr41YCVVFZeoUC3EnakNx2WGxyWAiJPUwobRXjCD2tCjJKShQWDYDtvRV8qmPPJqBsEbeyXhyiDfPDnnbfBUV",
  "key1": "4hiaygqzc7Cvo47T6DNwjLWqrwGbJmxk8VZuruHU9a3tbVctu616WH8RspcWJ15RnndBdvcio4T3DFCQzKuN3G9D",
  "key2": "3PiCP9eJNPosW7Ps3fcN8QtFqzAXWpKP2Kc2tN4wMji3iHBqaHwKGtAQC3ihA4oX95wxSRaYZhLsHz8ZHAEuiHXD",
  "key3": "TqjAic1hmTs9JgchTGZnLoYPaf8atbniienhbvW7BmKPVjDH8Li4BY6uVbxDKNqy5vkNTqL7qtoLL2gKoheAfWh",
  "key4": "38j2FSsEhpi9uGyatmp8wDKNwpXZj8T1m1uNHCPPazL3qgtgmWm5myMktfb9NTSbmJS9qsfYQs9DNZFV8QXhNTvz",
  "key5": "4h9upRKuvuFdUMvjiUgyRNKMxP32g9nXr7qzWQoGuwAsMKsXxAUDMwXP6AQP5nGZg6jgKeR5YQMxDrwSMWBTUrQS",
  "key6": "5WTqMxFBM7DP75KHiS4825epuHrs7GBY47sJio2TSask4CcScHEbF6m4ecVBapQHEDxCu9qCWRtooRNahZcafKSR",
  "key7": "2Jn3JQYrg7NRQFYSyxidpjMD25xY3CwFtu4KN565F1oHTTMk5BGyytw9ZjpCXXSYuRB185BL1HDYU9wmG4KTwXwN",
  "key8": "3QxLpbrhPDcibake5EbCBJ2dnRWQJGB7qs3osEYUKNZXVBCDpSQLu1FDVtsoSEmhhhejPRC1n5oQqX3TAUyCpYfd",
  "key9": "4Er2NXHGZsxgaJSgKiT7cXThSUCM3783AxEc5LPcaNGX626efUWfqBqRZ7H4XbBEjdaJY4nezL4eqx7tu7cxxnsS",
  "key10": "2zS5TvfKv5qfJdkKCoTMxDviHnR8Lf4cyuwt6BsaH8oi7ziLnFf6gUBYvV2ArXH8Ao29NEf5JShq8Gt7vrBwFt1t",
  "key11": "5q7F4qAT9zrVmtCxUUq7K1x3UyEnoY1XyvAXXjMCDyHjNm8XoJQaQQVdxosCtgsXPu63JNr3zUfJEhBdmgW4LDEP",
  "key12": "4ojPSSkgatENQPUQqWb66HKABeLF9TGWzJoauDheKVb2Ey96ZRVeSkGvHAXNnz2Gi7pAXsYNNN9W3WsGAscYhDxU",
  "key13": "4aTaZERnJoDP8WgtpgiXFPE72d6RJKpwngCqR3x7bKRRQHJPGbJ7UYfQjLKHWLqhht5mpA2F1hrLUi7xAnqBStcQ",
  "key14": "5hPbAvZ4vVcajDX68K7u6eNdyCRCnyQAAWcy2LtSZiu2VZPQPiPc8eRXqi3ZriABVCX86UjSabD7pc1PjHE6jFgr",
  "key15": "2aDpZJPtkoT7aXt8Khj1JfRHWqEQqW8weK6FWRhgaEcDuxbttUELBwfWWXbKHZeYwcK8EKeA6eaohWecmS1pmkXT",
  "key16": "HYhQ6d1dbHE5hFmofYEaevfXxM7yzc6WzyVtUhTvhgx1XuCGQqzJpw7wT81zVR5fj8jyyS1MRuJwzbzWg2gtuq2",
  "key17": "56PmrGmtaWvrK87B8GaYrpWDNJnf2BE7yckL37h4rN2fmf6sPcu8zKJYX4KWjnr7BtZYkbJxTDdgemQ3eXrfNi6U",
  "key18": "aL1dnEkNiKrWvVJyztQjTgioPZzUMJpJkqaCCf8vs3icyzyd39LUqbkLjfxeaNAeKMqeaHa9Dp6aKCYPNb1XHJh",
  "key19": "5USn7MHokJ6RnEt6PmVNiSDWd2AKGa8spRBaK7BU3vB5ZFL2taupKmZhh57sgWjzNmwM4JZkaD72zxZbe5Dr1eh2",
  "key20": "2sUCWCioBtLyEDCrWBnyfyP8PS7WMA7S781baPd87XEk9ju1K9sSFa2War7bSVAcnmAcoPomj1oGHtfEgZbrcW9k",
  "key21": "2n3t2joWnJhe6hK4g6t63wt7BYJKVgMDgutiewnkJ3M81eDwGsxSNbpG16PD5ApAoQBaNbeWBLjtdonbYSgpPR2q",
  "key22": "AG6kp8Mp7pdu7tDGCPRTwqctTK5np83Za6MRfyLvjqLWzw9ZtsczZuNyXYFY8bhSzLidEUx33zWSFRNUqHTEFww",
  "key23": "28MXeQjZCC6PEgS54zQDEismpxdpoeqLSPt1aqbfEdAyZWo9PdvXRcVvYbnCwJYZCcCd7BYkmLjiehuQ5SGVQa15",
  "key24": "4oLC1cNYQagftrTCU2n36jx12UzQYqta6Nca79dBDThdJ9yt78JZCXfyB45ofyKxPXXmMxchu4SYZgb6gVZYfkJY",
  "key25": "4SPZyr8ssrt8EfohzPFLUn4pMX5VR4fpkqkGD4PUXuYSZu93ytQ5PTZsVTUCp8Dz1HaSvZ7fkLgbxwsMmHpyBDWq",
  "key26": "5HCo4hTLQTZdgsTVMEKsSYBGAVTZ2ELnkDWiCL76aogzaqhL7QD8MzcamjiJVCiEKouKAUJ6wVynQCWS58FJbDM9",
  "key27": "2kXth9DbrgVzAJx1j2Yf5a47cFbNvhjjsSkG1azEoSQbnbwnJkV3mnFCs3n4P7rNZUL6dyf3wjfgjaYASZLpzA1k",
  "key28": "4x2vVB3zkmVyRGWrFQ8ZDbZ678ENsRWNFPpiUuWWqadxSrgwSTytFr32VWMSQuCTVs92yDbhBfmUuMncHPBd9h94",
  "key29": "c85NQGyMA7BYsg4qaNFPEXEiD5Ua2Kre7R2A7awZzyBpw3j7n2x1EXWrwctG8C7EF9XFfrAocpohe1DXDLbZ4k5",
  "key30": "mrNpbK6HQNxJRWUvQNrC9SJtt8msjo5oDQem41Vmm5UyXtxcTqNLxGJU7AdXtvwC2Kda1FRjFkr5opVqj92iCEu",
  "key31": "5NNpksECNYJihvcCZVKcYHGCQ5rDrZZuYY11Tez9QJsTz5R5vG1VzvGSb8Qjtj6sc3froD6kET6nkWegwjcnETs8",
  "key32": "38p7Gsmhvy3JD36NX9dY1CGeBaMDz483b4MFfNNV5o8jDWXgEgZRiu3DHMrVgAqkMfRHUnLvNqEfjzuJtyaam2a",
  "key33": "4BxkBwVXBJVatLYC7u45sPgXwuZQZM5R7GKykAx6iGBxJU67qCK4vj9Npdft1o28SzDPahvXw9nkopWz2z7ok8oR",
  "key34": "41T9P3n48yUmspUj8PAPUf61bZ26JgSoSxmSbiJgKa4uNCyXSG5iyRtLTFsUDiAYZV3i7s3epMJMReAgGbmPfMXk",
  "key35": "31ee43PhVunBqK2uMmAjrc1DUXMd49GvTnPvtkLKnApq9oyRWT9vuy5YpHmXsztuDefLrep5PQQ4TmoxFLdt96mV",
  "key36": "47g7n3CW1fqqyMBLVxsuL91FiUKGxCLrQTAJVrN8raWWzJ7PzMpsFMEucD5SxJFBULRo9LfqgWvfRunkk7ZjUSMX",
  "key37": "oXWL58DQQV2WjYBw1mq8uNEVWBDWV3FbocVNMpLxKEvejvX7cKgSj38vNdJGvs6qMu7gZbDpFbqD846UhPGUL5y",
  "key38": "5hE8itmkdSJBSrSp5xB7b9nWJqaZDmTnJXv29Cfut4dZJDnNzjJ83Vpve6gUHf3xEQniwuE3JZ2tLzCAQ1Zg1jCk",
  "key39": "5tZMuPERf45ozwNabCKuDqAAcSSDPCCnfd3rfT3d6LdjvQ3SQmDr4Bsi9sVUMBboRb9HwcYwaGgYgLQu9adhjcwP",
  "key40": "39ihYcUucrbeB24n3oyjDMmKE4cAMiQCQqEeos6CrYNobmYKPJjibS1j9wmw492HrieLSRRwZbzi9C85Yjp2Y4s8",
  "key41": "575UgdMeViGQzxFJG7UL8WAiNeE6dy8Zd5mYDyi43Ru4aNmBrJddgrbw9ggqAfku1NX2rEzSuSbGRw8z1MkVNzqG"
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
