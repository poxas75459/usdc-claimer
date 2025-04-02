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
    "2QsQPVi1sJQZCT5WZwTwNCjp8s7DTuUCvpe6MxwNQ9Y96BpWLNYA9GbSownhr9ao59jCKosuEX68p7Z5iRdin7Az"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dwJist4fhofhFUaTTZuVAruaxaC83A9CtxAVznE2PfG78X18toC5qV8FFA55P14575czfYz7mUFi4Ngn9SzMH84",
  "key1": "5kfV9gxoiAo9gr3S4rRQSuBWz4mYWprZ51bdG4zUmWCptGSFYpqqD2QhKv6tUGNdjmCup7Y5eD4qxFqNcqpR3aQe",
  "key2": "5UrhEtnUwFRnZDinBC419Y1QgPJDweh7GqmrWhUMPMrEnpHVx9y9TSfvD3T1gpVPc3ducmzQ9Xv1xvv9GZbcqKEa",
  "key3": "4iZnf9wDMKU1h9qaPeGtyXnv5DYnNh4EM3vpKJyHJc4w8xFpwgfDTLkVMMpxa2FoGRoDg3FTEZYo2VJffymugEup",
  "key4": "LjFB6cUCHqXb76D2b9gf2eAdBaYmTEmS3YsLAmSEP7EcfVde68tnvceHdwpLfQeAPjF8H7sGAopjAq8evwcYHAa",
  "key5": "hJNenGSKLyCSqCUBfZN1EBxEJA7CwhgUjBz7eQhn4ke7RtUDiV6FGi8N1V5mGHD5zeSiYnSdvGgeCMgA6CnUDkB",
  "key6": "2H9YxCjtpg5yBWYJHyuBVHQ6McExAfKuT85cU2LtzqHGh2LV5aEzSGkczLWo63EHJrsijgG5UnaMdAhK2Z4T8kKV",
  "key7": "5HpabgzjCrXjCNBcqwfZ4CHz3ESiVuAUdbAAZi99fS2hUhZKRacGxRpNegNDQEYobfBXyZaUp9PhmmjKBinuFK9D",
  "key8": "4ScTWB7Zmw64bFM5CcUkUrgEscFQmj2cVrCJjm9TfwSjcCN469GGTPqT74SJqDy4netxYTkNcsfSoL6hnFvxCGkF",
  "key9": "3qpCbZcz4UPvSXc4dhtsRi9aaDnzzYqZcbtwFss91LwsNeXx4sxKGvXcDsGNYXrusXaB9xTJcqC99FVUe4gTWE8H",
  "key10": "22ytSNBx1iK6DHwiK5jqbHUKNujSabHvQDpJA4QScQ3xRczD8DhVo81kQNET93v861Vhb6CPPwqh2XURfrWJNbwm",
  "key11": "5tSSnitDYt5L7v62Ky3HrGm7kHQML15ryRK84LtptxXGTiHVn2cneLtNicZqCudT1UsGzwiR3BRohARtX8Qofnrj",
  "key12": "2zoHZ7T57aeix9pi6ACE4h3nyoHujMk5jQAQQfHxHdn5vXZYisUFm8QT8QmSwf43nh9sXc1NiYMFvzAVweSNDaYM",
  "key13": "5Xe2NiMbHX8fSbi7p8rqictgoqgbgjExyrmsBrcq12tqbcedCmPr6g6fNVNGSKycaofbo7NvesgMDCQA71hG1wME",
  "key14": "YU3GDSBy3oywYBXEsHwC31nRhMzvJaYMGNxRwnvse23J7mLWVMg1XTFckdr3pjS4yUAYG22fS918SsPMNECtiri",
  "key15": "2B5jdPgbGQnyKHkpECCPkK2gMCJzLJ7YMt9zYNzTdQD6EL1Jcx8wdEELPAzcgjUzPJ8r4PpQZh5jPRX1ppU7EWZE",
  "key16": "3FzKEztbVCefTGpMwsAJTX5ScHYzk5nu7ezktK2xpirEDYi7s8gtGkkq7gSJv2nYrKdcA9pN5uAjUtZNzadHSXYT",
  "key17": "ynNXfDg3MW9ZeyLhhcZtzppKyrGyf3DwmFx6TnVyWZxcHeczj8iR9h77ZDdXJBPnkqdw74UcELHJE3DK8wQn3dj",
  "key18": "Lu2ws6wv5D2LzSG3jU4xp2fQFhuuZ9qS4XUW3jSarBX6c7Bcj6B4UjM9KxwRPqX3y26crb8xmFmx46rBS1zyCFJ",
  "key19": "4TEJCFWBCeXW7k3MKhz4AtyHfZU9EjepJr9xU5bBUxU5iwWGcxieZ3qZRxhh7NcVo9ixxpcUUpqPs6FqY7ANrMWY",
  "key20": "wHtpzB5SxmShs2FcHkeVqoxJwfJbbxtaB87qjwNa24ejqbYw9182jSxczKKWzUTbmChcks746TgXdx2VZfiv7Xz",
  "key21": "vFWTF8dkZJqS9RRMeRMvE5x2hNNyaLcqjTjTwFocTQmjFvyJQsAH7gBrqxhyJGVLLRBoyZ6R2PdesPpM8t9tun3",
  "key22": "3jj982t2fAUaYeYbmRfQBCJCHxG43cCeidzjajvWrNsGPTmaCM1XFJnuP4M2ndoK9gTfZwRKL191CCBrZQdbZsSk",
  "key23": "dhpu7xdBaJ7K18o9hvGNBpEj9UuMHE7q26kVPLzEd3kwxS2cMM92RbXXBtwJJGUjvchT2Bh1fB5Si9rWpKyeDVm",
  "key24": "3GHLoEwy28gffG2VD5yWLh6smPM1tEoGdu7Dp3yNFnm1TiQkx5BWMKN4fqwTYvAkPqXjgtyNw4N6EMJL24sAomAb",
  "key25": "4zvp1BDSdESfhnoVrfQTEd5CG7xoKsgBm3z1RYepxgbmrwhRLNdwUdkBXqRTTutFDMvEbMSzqey6Pgxf2cPS4EAP",
  "key26": "2uhDPBkNcknuYm4MWkRxbx2WANK7efQjF96hvZKcrye3CmyJ3cB2m2wGyNua73qX6J7B27vcWMvuQKyVJ2brBTMG",
  "key27": "h8ngGMzAU82Uc1y5iW8MsLwHdxxUqw2bTHYNKoo3Twux9BJx3BQuZ23peoanQZzPJsCkpyq4NbyodaX8m56f4KD",
  "key28": "upmGP4Pkbs35b23eJhYLyq322UjaLsi1qFwhRmNnpZAd7NWUqRbuRib2S2geK59HfDUHE58i98qwKLf2fzxr12Y",
  "key29": "2tuhRWhb835njT8hH3rV9tc4cqSGBRmmToP7VgjDh4FT35tWipg6KxjihYFABHnoBCfLvDMZUGTxrb4uxHa4Bf5N",
  "key30": "5TP394C5rGRRMVN16rKJCG5D5ukRifAerFQ43XMDtFmsPmG8zh5SfpZuMRtbt6jXsCp9VtsxJGwz5Y9XLjrATsi",
  "key31": "5DPn3BW16rQjWsztfGdLHe3uMtGeE33hGFW9gVUqDhBkoJMNd5xTkXh9jSEhkKoHYC5khw258gFGth2H856qCdBc",
  "key32": "CebzdM2DkfSu5Xh7hCV2Qgg5Lb8om4ckjtuLF6Q6xeA8hwghVA4NooGgbzA1iVsbrmQAXL7Q75RJUb6eRyPyR8h",
  "key33": "54wLc9bi8cdVYwZCA1MiFm7vUbiCfKgiGMamcENFzc6yUEKS6UJU7xLRPyDNGsaY62SBKcDgc2CrPxGnjPiYa6k2",
  "key34": "iHY4FhdTCiXodE3dbjDxkNctAWKuHdkCZu62qaMRhVQeMdeFsH6Fw1r2y5S2B67ACrEZm8RBCHhUV6ByZti6JGh",
  "key35": "2u3HG3UhxZBPFLynoWyxj3qSC5pKhYA3tsmep7ySEcKjZ9bVe6oLqRhD6Yr65aPAHFsjo3Kko5RLQmforUiwPczV",
  "key36": "eK2XzFBMeMRY5eD2uA78fdp96qmFcXsLi1mADnpV4HTVmZ4SqFpLixLaAdb2CaC2r2E7kAitjyy2oq3hrmrJvYp",
  "key37": "5CCGERy9sPFWKCHTfc2SXKUmo9fn6NzQcH8u68zxGcYQCa4CCbTCgeVkRE93yETJcT6WLPRHf5KKGRaiC3qNWA4v",
  "key38": "5vtb7sp9iffcYvpUiiNHbBXaz9jLmacdpiiaNJNh9dpwj3Do2PkHJJTmM8T9yPs5PXoPQ1nxV8cREjEyJyMbZJa",
  "key39": "G2YJy1VE7o4K371LYSG7iRim7NAyT5iVT8LCn5gYkR4rGob2UjmpDz1VotgwGHMdUJTB69UW9sdJS6NJMhScXmh",
  "key40": "2WcVxLwJL68QfKxPFbMY4vyyvZ5TsejLBxpZ3d51zrW8awqnuC24DWufQh8upBKLu6TZ8aEneQYXgs7KfzkczMf1",
  "key41": "4h6KHYhajvuan1VUeX5RzgVXGKmFdWQKQBbBNraqsKJusWGZNc5AjGojeNfMGRPjHDg4rTjg9NecQmtZ59RGt3aq",
  "key42": "4hJFFWS3ovaEoiM4cwNAjgQofZmnQbQjKMQYb9y8n9LiVNkt4KYzUYxfuRmwDqKVV2UnaXgHYwxxH3qLE5Jd7TY6",
  "key43": "2VrqCBVSkALNH28eDgTovFmhKK6x8kU8DgUjSGscFPzjFgQiy4tR5WgU3aNA7qcnSHeXXzj5TXoHiQPuuzsQQKPt",
  "key44": "2wBY5JLiFsBX4eCGptKRpUrD8xadfV723nbT8NmtyFD4vDRGYjkz1VYvbu38pUeGCqC22GSsbqshgamAC238cXhR",
  "key45": "yWkY2DiT5pZ7S51Fcd6pp6S9GjsmN2LtutFnRfrouwhkGJRXKy854wkyaiJCJzQ1EPJqBFCYXYUM4j7DevnmG1r",
  "key46": "guoztYgDvNfofU2WwmfXSTZvy6LtxHRxd7QGRfRgLMNyMnRh4BCQpK4zoGpkQDC94RxBsT4QKJnQatixpVdDrkP",
  "key47": "272FfwvhgTbmQRffGUiiEzbbSZWwajPyWhRwj4XawcmB2ZzMzm3CcocbUqgHm9qpezjxoevzn1RU26Y2X8Uk7iqy",
  "key48": "L1m9bkVWsZz6LDS7VnY5yn4EaFLyJhZ34KkVz3We93QwgFu7o57JQrbckjUV6ubk6nR7gG6MhqVRVWZpeDZpdTu"
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
