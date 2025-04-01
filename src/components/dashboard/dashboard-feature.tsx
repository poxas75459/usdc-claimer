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
    "5LgVXSpzX4arZr3vYhfDbkpTMSP86qG3keRHjbtjbDSUu6xpWq7yDNyP2p7G3Q61jfvhyHWJ6w5aCnKe4zAW7uSf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WxN1fhrvvvWcrTd4ffEPDTyr2Q9Yd9WLmDG99CNsV8UCdECifxRg45LMv3Y1NG9fdwFpX5WqcaKKs7R3eFrtwhe",
  "key1": "ggPWWmXhMGj8VgBq55VzPN9JHkig5Xi574JBRinWEPS6Q79ozEQEU25gSyGoKFjxV5hVqixosCRvkoJCEwAczFk",
  "key2": "9HFk72NUfDYMwswDtnXZg2E3XE7czacVK63zk6nC4khncAJCpL7dfEkvTJiGzoYhufWkwBeZ7Nqp8inJVutefDy",
  "key3": "7Z2qP4usYWWykrqXxYLyjqiVZk5DwJS2fynBV9HtwdcJBcL48Ko9Tpuna93tqdAeNTdTmgbeKh9vAC39RXG32X6",
  "key4": "2uyhZvCwaL8QYGqFUv7CdQBynaWMCdiwJshFaCzEB7JiY6SNLDAAjPtPTgFTbcqEtgJcohid5xuNSkjcXmXz9koJ",
  "key5": "3DBQUHhxKFYJEa37KRvqJrsXouLSKBceuHusfpYqsLs1BehYuDg2RV8j2Y3yXsDijttz5vB1s9fQ83U3g5VyUZKR",
  "key6": "83X8pGXCccNkUkoxQ5rbDjVePe7cUq3hLBK77KDZnXvZBJpprqPzDvwNdySftsVWtf8T8RyinPBiYJDK77rztSd",
  "key7": "EMVw7TmitG62UjfRhCVxp18ozvsQtve4BVCU4Q1HL6kUN2GDVSqeYgai8vqaurr5EZJxpsSCSpgGttsS7TzG49S",
  "key8": "2Pjdx693GSfdJBxq7UxWAN46pnXT2pY519mbZPWyvhhyMqpyVT862UK7vWr2ZC7NsMSTHBHi2kdtPGvvzNiDE1dp",
  "key9": "4D9LV6z3ypLsX1WtztFp6YzProQ1XJu8DpTU2pJaX1scHWgVDX18MrtMZPpNizp48xPN9rxgnQTGFmhRyqkJfwSZ",
  "key10": "56nMW3JJKz26af3afY7oLUrpUfU5L1FxEs3An7vUzfXTx5j573K6n66weENuhMtwJX1Wkq2wnMN6McWES6QYUx7Y",
  "key11": "5XBwNrVgbtDYQa1Ac68JUeUG1Dz41UJ3798ThGYTF4T4qCGFMhnWWt3mnv8WWqUYPYyoC5PrzY8RNdobU9vud85W",
  "key12": "3YgcLZMjVFVnS2BmH7RHQcmu97T2RjstcmYSGYqwoSkSPv5juFc4CAmLF3QwG314jTXkf1EWJ3g6oEKT58KZ4i3s",
  "key13": "3KbhLZqs6MMbxT3swrG8K5xiFJNDwjYfG81yu2GrVf5XkUy83SSQSyKYV216xmKtoR25MkFem4XX9s9G25ZZ3sQY",
  "key14": "Zby8zh1g6B699D66RBCJZe9fSciAaxMC9PzvNAgmGZWhRG7y74ud72g7mrEx48KGShB3Xpdq5tBeh9oTVcrnWCW",
  "key15": "2KZzpFRmNxMhwXaGyZb3uymPMvBV6Ad2va45cW8ssdhtYLTx9QxajizPoyB9W61rGnvUpnWQAj2cbzvVv1moTNFT",
  "key16": "5SgbMEwZdLsLoq1YNbhUqu4WUUrKdVWSAu88VAbbdjzwRCf4RGL9zzNvTbho6wvoYh9nHJTq7io6DqbH8tdXTG59",
  "key17": "5sius6ivnWuJi3PN8b3vX9QtaErjUcK2ZGwagyTQQksbGiBj4NqhfVdXNJv7uHLM8vfQdYijwC2TwbQ76GEM4g17",
  "key18": "4gsjCoe4cLRogjq3e4dArsQfA84EuXwzmTk9HpybLB3FiBUsQqQ7XUj4iXiaEoSkSwWryXLBzLvoi3vtvqG1MHyA",
  "key19": "5xrG45x6AmtBsQ9dnr8hLDbhXhe7yCYCcy1yumJsewqZVUdXuT62jWJpeY1LSYCQyu6QZJZ6375JbSgsqCDn1LQV",
  "key20": "49FYqvHdQUwcopR5u2xNScsW5in4BjSYwpmhASVkd4HszqE2VbYR5hkGYos3YjPsqokcbTQAmuypANQtQEkbxf2G",
  "key21": "3Vm9eifKvj7r5nV3tWhVmgSuMnWpBdTyNs2xJdrKnzBADRQ6icbrWnbVvqXN88kv4WyRgiFLonWhBLKF1fhvUJdv",
  "key22": "4jQGzSwvcVv8Mwrt5MiTFvaA2VDFTcNo9R1v1avzNib1jQmrkhuQpDBmd16tYYcxbeSbd7gk6Vdrjidq5sEv7XUx",
  "key23": "3JQa5nk2xJ1T8WDBuPxSg4EDXgeigrsw6XzSAJ3XYL3qmeeLvG56EipKjM9xgkL1UCFm3Q9UMLJQVR8V5mPoQr7u",
  "key24": "2sLJgf3eciVEpZXn5FaPR87AhsYG8jVV4XT5S7YdjSM4xeoQCR4x8PrQp7XEy2JyW7k4ewoHskFGmBj58C69pxe4",
  "key25": "34UyG9g5ECEfqMv1rdDXpLpd8nX14CCS2FvSxeNMZegqRkT4kA2Lekscmf44qWqFxWfqSZtNVzukhHraHp2keL9x",
  "key26": "4mHWQjAFK1JcaErZsBU7qkUd7Cc78KmTPtQ9DiGsN7DHMsFtUAXdMyvdnas32JtrUnGHDXCPCrMET37ZaxGcXXE6",
  "key27": "3mzKwx7WTQKcL4xkLH9E8WYrA72jLbyR7uBqHYnCkhvXj6DxxT6rttGpoPgTFgeRbsaobANFsSssJit4jh5CvGzZ",
  "key28": "2FBiEcjc9mt5meviTnR9rdE2yq5Fs8G3T4eJfLYb8NjQQkKRKnP3wEgitH2mSAdrGKVyYMCanT8SLuiv8JD1inJM",
  "key29": "2SaJhZphCKF5CePxiJz9yU1k42mPYL9Eo8BqCJNLHsNKVd7phtmms2Z9Q98AJP1YR3BpzLwzCzu3QXWozqPgswLh",
  "key30": "NCJMztZiXaqaAatHiFkMjJyp26g4aBGvRwcLz8inyDX95kgzQpQQCTXcDALDzb4XXwafoM1DTQkPnxgr3fYLpw8",
  "key31": "5QJhoBzPmdd3gCuwrGg2GxaFeniYUgTmgkYdGdhg3gQ95RX333V8snohGKEzn5kFGWT34ybXwpQooj78qPny8U5w",
  "key32": "4z2dEGEQwS3TfjXyqy7hFyUPNqAFWDFv1RkHufALpL76sf5zhjqrp8MRjaGB2v1Dpq376dVmiTL9mZSVysHZbPoQ",
  "key33": "zB4rC6c2iqQE6bmisyJHd6JfmdwF6W972Lw6NSSaSLqEv6JjffUTLCtgYSs5nkVsXzDGYPPMS6JrvMLmfSDV2NL",
  "key34": "TxEAZsv2zTAhs1Z9XekaVKSv6ePbU8h3kSURx4mutq1wnqpyBfnPPyX4JkNZW7vos3uPb2cGAvCbkd2FFeVoSF3"
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
