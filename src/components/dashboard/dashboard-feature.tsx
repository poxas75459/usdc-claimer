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
    "2sLqU2RWy6uiwViVXNqV2Q7pwxTtgXFf4o543xfmi25q4nK21twxW4frLsZVzj4YHPPkKCYdYJXBmfkwMCD5LySL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qBT97LntkKTwzqDJBfjg8a6Kfx26WpBmixN5pKd5G7cCPQ4rek5bFaUhsiwqUCN6M1PLAWbqoi4WSvo5JF38e4u",
  "key1": "7QSncJnrGmfN9q9KdJwXCkLk7P5uUYVjw1z3RqAMi2yPH5Cfb4rf3tY69UwZPyr9BWVse27D5fSCDMRuVDfKF1E",
  "key2": "iD8toNqdyiK2KbZ97x37mBnM42dLxMJQdGWrgDLP27rk2Ed34at34W3rj48NPMKWMbuDCrd6xTut8pkEpGDNn8N",
  "key3": "47aJ1ipzvLin7FXahFo9t998JBuxzGTLaTqGBJ5jkNahXYVd2rKsJkWTW5ZR8Y92KZpkMR34zGxDSbTbi8sCucjT",
  "key4": "2f6MS89EJFyUN4kVbN1UBrW7yt7tS74vdaMQWABwXNFbcWPEcDcsmRFuNSmXpS4rJMRDJbJjtEptcr3UeeMztL6N",
  "key5": "4RDRVDcAJ77ZqDngVLnqLHFzSoidLhLrzVcpZmXbrDtL1hEdapBKPVmUWKM16JNoEN2GGf4B2sMa26LfJzPn71Ui",
  "key6": "5gEByZ34sDhxgWcBUS8CbncJEAYxdCoGswwBoXesTaMdYtNGBBYJo1c73kvRvBGCgG3n9PMgJBeYATUvqx9t6a6c",
  "key7": "53LqTsu6NP2y62kYE52QgKQ6SNsF7uEie45VGjcqKay38nwwk15bxaYY7gZypMp9YzN65bYMi8u1Rgpk57gXx16a",
  "key8": "2dZqjrHkYFTxfNuy3ZC5mQDaVwRL9Vyt1AqaTMaFoEYhr4xpF4JfWPzFzkkcv2it4xFmEnJZuLq29eKqLn44FAjD",
  "key9": "2z76wSkUteErBSZsfEUcRNxQ78fr2EUyJXUM1sdNeLbo6bNnZ8DN2pMkkpCANazZ1YFWPXtpLKBG61B2pnqw2Dtd",
  "key10": "yUu75eLGBBQZu8ehQaDPAn6vGhtJXtf1JUNmVy6SLnKT2gWmVS7uw37qsWRJna34b3nsyTxMmaDvwpAgWV8BLyZ",
  "key11": "2wFqzmpj1UTnu2tdtoC1BL2qYG53NrEUS1MNMutRoMqHTJYaZWE9AZtBgx8GWFLc4BeRVsRaboXUU4io3xFZ9FTB",
  "key12": "3ncwgG4gB5VqXqw9H9yYSJMkTqMzhbowdypfKFhF2MH4h296KZ1VPWeuyaj5J7CcRnYcheHCS2843QCGDkToXm7Q",
  "key13": "2PQBSc7ixxtDYvZdCXLZKE4M2BRATEeypAzXsvXPx6tsGRcA6EgeCv46P4TmgLtXNM4BTcN4tqgMBNcqx4GsPpW6",
  "key14": "24A4XLjxR9XLm6SRsqhQ32s43TdGTYgi7pjbVHjj2h1Fn1DKTKREp7jsVL8jEn48UJJtkHN1SfHteaotXWkazVxU",
  "key15": "2fp3C9BUmbJwzRusZCChBptXHRikpSZvyPpd6By4AFwvzdySZKPB6CKfUPWGpvVKVB75dXHr2naHwdZfL1P3MPyE",
  "key16": "383MZSmfoznUBNHDMYRDCu2ityS4bz9Jq8FpVAn7tHkJ2HYwKxjua6D4SckGBWoBzcughdftt7QWD7hgrijy7gRD",
  "key17": "2SkfFAJj4nX3zJhACkeV4DwAQ5D8P1Vtau8iVcxckvyvuLxjucuKFXg4JLSojdg2yuzi92yTjZGB3jwdzAmGSLks",
  "key18": "3DaD3WEZ8upTfG16uRdFzERmhRha4dPcKgWdudsMZWZtAi1rYnjyp1FTJuzgRBE1TK72qDpJyngqebaToGctKuTo",
  "key19": "2coyh5Kh1BgvobzsrAeExNBui2uzfgtGAbt6TDXNoRVHKAcMMb8mgA3ycuM1EvMHTDzNWxJabt6JQcdddKuepYsw",
  "key20": "4USrL9nR2UFa8cVNWoDzQAojGAHrCkX61uhdv6DDnTmWN2qNTvfG34UZXVpHoBWZVJtBh4ztzarnJAUmuATspVW",
  "key21": "cDPPcv8UkDX3hPWDLMySWreNZoNcEY4A4UAesUPPjb9uSxhHwLhQryZZw5C2WReQRHqnMyNnBSQ9h9DW4NwipcN",
  "key22": "2W7UEBmD4B9ddgPn92rEeb9LgMQ9BniB3GWvH2EpninXbDdUDcXYnv6p69e4vHCp2TFL69XrwoLXSL82V6rbfQCe",
  "key23": "49jMXaUsvoeAjcf3nunKP6YiGCXUcm1AErZuGEpb54UvoVbrcw3rC2FbgGot66aDET1giYsRPuSXqVNunNNoEyXw",
  "key24": "2bRn6H7ysUM8dzo9kqUuSXK6yopr2Cwt9LT5sRvv3rBW2zPk5zQRkMJ92HZLYLTX4QGLGihLRMwRBmstbyAMUhpq",
  "key25": "a1qxA4ettvZUhU9dxTLwyLJFhdNTqdc6DFCeuqhEZ9xPnCeWMRJsfU8sHije7rmi9KEpcxVaKM9DnBCKjG3CLB7",
  "key26": "5kYHYS3JToePKnzKoX6HuMjmMQQszBLxu9zSdhbWQa9eLByimZNXZbpfyPgFHR58JCXuGfJ1JvaMmTJDzf5W7Cy6",
  "key27": "2cCekZGq1z3Lqfx6ZNxniKoP5hxEEsMRv31yrTjtdZcu8mmFvzPrRwigeKygHSXQ2wVXnfsRqH76hK7whBkmEsnc",
  "key28": "5JqJJehjgdk6TgnhKJy5yPgP42B6LnasoPm4igtCCWbpN2YmW5ezB4vFt791UWzGfBRrLrFP7HugXRc1hPPEeE4a",
  "key29": "4qdsQJyPw12KFkeUQ3WjuVfUacopDBFuFin3JUQGMkQKVqKBub7CTsqUvKpU8dDD6gwaZSuLEzLLPb4UsAiV3wBh",
  "key30": "xri6et31FqJ5yQeodCLGnhTPVsthsSHaex3NWUqgE3j32gJPfoTNWWArRBtzt2Hs6KxhUiCUaC2nVtbPKR5esYP",
  "key31": "58VEYZqpUR8kisgtjWi8ZXf85HbuA7rgRrgvxscTSAh96sjEGBAQza1aLz2yGCbJCzco6cNupMc66djqw4n3UwX1",
  "key32": "5NKe3AbK3AAc8FcNKxe6P4heDpdPCXW72GQzPbTcvJ9cmc5ii1yGGyXmiCXoxVTQBLzbEJ8n7zSH9xrzxqgAeCRe",
  "key33": "5Y5P9asEt29zSTCwiUDkuFp8kw1bArp6PpXALkwQb3aeZzwS1YoMCSyD44SiErx89XmndpGxNHBm7MbKbDfb5Bfn",
  "key34": "4xFae5sEiZ54y9WA2Rooh2tNDov6ij3vQdERLLJWHeK3A6uHeHeEzH1ES72HvQa7srsbD4eM3b5RVHmHsXddNpcA"
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
