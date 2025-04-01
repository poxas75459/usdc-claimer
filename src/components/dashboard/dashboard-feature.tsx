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
    "3GBQgPqBsf3KzCDeNZkVFbWm4AGqG4BHjEhziKFc4SfTmYt4QgEJ3c4zTwcKwJ8LpWiuXW4zN7utfakyPdEGn4kL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aD5NoGwZwb352TpWzya9iuds3vC75hcbM1jHttuKx4751NMjgBUAGCzjwdMCrAfXrZoxFQbftW27LSLcJpPdGt3",
  "key1": "4NBQ2Kd5jYG8yi3tF4pFQDtJk7NEVNjHLejBeSwePqBkxZoZgn3DvwxEkPSjUZkMKSugEBFMmFrX3t7YReG6AHDs",
  "key2": "2Y3xZbunhuudUwa7UMYeXL67HVouD1XMwDa3xTC8iopJFpJK7TCDubJHdjLx8u2145u5e93NC6tba8CvvQ7FSEGj",
  "key3": "5qQ7epycAJ1FfhfdZZGchQqrtSUdwnwr2iqBssf2NPzUedGqoWyAasQ28zfjEmfAD61WPoGSnfEC6v6FCoGVhmxp",
  "key4": "5JoN9Nn9DRYA78Ykhqd4XXQDF4swLnevcsjZXDukkN2CMFrrRi6aPhiZbtfjDk7NMFyrnQQvsGuhvJGbaHGebk9i",
  "key5": "3cZoMcSxHfiWkTr6vmoY2wY57rKfXTVrmRCJTs8iEMiVRgbLHk85qB4Ak23VxpoJcYU59dZXBRePXT55xBxkEett",
  "key6": "2e5ug9THbCuZMnBi82H4qwqy6EstH6revZbt4JnCmPxvFwJhZTF9SHerUwqwb6n9mkvAMdr2YCFffF4Q6TWNQysh",
  "key7": "gieTKz5XLcuxTmn1v6x64hotWKjzsVFxMVKnwZQZgSuEC16MZtxgECg13y2LaQUia7YHgzXmVkbSSN6UjpNNyRu",
  "key8": "HiQ35EwPDnshGXJ1Q8Qem6TzvRuZucLhRfY6zKWdBUSJHN7S5gds2eW9amGSEyZxANjwDBUYFdUUc68hoPPR1CF",
  "key9": "3Sj5nMxcDac5wKzdbxRdhdnBstZAEAsWhGV3auyodUyyPRsvxpURHZHmrsLYjGhYEowUhoKWwJnd6VQrNQqd2Ujd",
  "key10": "5Cfb4XmMvn28Pu7HxKReLtb2Z4HyE2M7dLbDqS7RBkUCtfV2n8xWQ5fXGuHZtM4s8ebyCFa1ZrSsbBBCFAqbxjT1",
  "key11": "WDHHMvMhsNXpCaGqA85LDF1qpzFyrPhLhgZS5G1d9RTfphY1indakTdhe93VUssxz6q8BdTgu7RSn1HY1fPrJPd",
  "key12": "EdhobsxYdw6PKCftJSqepghFKk7GH1W7yiVk8Nxtpt43MHh4DStfLaKhfubNRF9seBHTCndcqDsJnqQXN5RXcHY",
  "key13": "29anxVghAEoBD9pKyaQHNRpiWZACXaa3uKmFUyQiafZf2nPhwbTttqEVF1RvMFGEMhq7rttC8gxuJP4ozvcSG5iU",
  "key14": "TAFiYFYXD3b5MWuXLwmmdXcrH6NvUX9ijGfrySe8wfaTX6EtmY9sqKoKR4o7X3RMZdmZeoAo3cSe2iLppKHz6B6",
  "key15": "LKJwMcbF9YpymoJP6YDK5HHuoicJUeqzQx529TEtU3CE11jN2xkgz8Nf7TSSDUjXvvCcybmmB6qFRPMuyhQXDp5",
  "key16": "3CefipUf53z5JbHUTZeogyhNK8M7KKAjsQHs5qnnR9fSxqq6oHLVLEwNqs671cfTwvHE7h7P4x6PLjfvajGr8PE",
  "key17": "F6PczaB9xbCoVZ4wv9vz2gUBS1Tzw7Zm9MefhzgxfYvVSvqsVNpqRA5y5QodPiSbePzTawkQnJg7isNBmKhPVji",
  "key18": "xcjHU39jgCAZZB51i2aFCdr3JhVpvGhtuRFpVJiPTjTGfjpQjB59fpceKPNU97gcZBUTsZHYBcwKyivqyUSjM1b",
  "key19": "2xayabc3suzuagB3gKfUxSqK4SABfNdYFeoZFXntJ7o1aTZS5QbfEHfwCd81sDdHWS4qNgLaVmk9QPLEL1BmNW9a",
  "key20": "Bg8zkMtJ12756mQxTpzGLW7BFNhD31Qogbhk5g9PoceyNYPtWo7Ef1SYtMbqeTXTAuvnYUAkBFFDYFkvH8e2ow7",
  "key21": "EsfrkjMLuyi3ei5iC5w3occYTP1JxPcU3yscGd5np6NuzjsrpyVqLFho7b8SoXzr6mcX9dTxqb8hHCwGeJ7AToH",
  "key22": "22Rm4Uy83v98ZfgHGKZyfaHNQptYVyWZMi4JTP2cAqs6NQm97eRaXZ7Ln9Uk8wAhnEeN3FHpLdBin2jXwjt7EJdc",
  "key23": "61HtZKHWL9qGCS4TYVnweqEq1scrjRdxUmqRFea2HRtvynnWGLdnsRVsS1Q2ABNd96dYoU8mAugiYxaiZL1YMCQM",
  "key24": "5VqesP1j4oJuxRbEyYQLkbMWjRWEQXhLrHnAEhjaRHo9SDRiKXpDGV4eBR1kZD8RDjBfxws6oRw5u6v6RnZwFwaB",
  "key25": "8ycMcWUrLYLK1YAfcyfdJYbEa715jdihssypJ2PZnoe2qNPSHgu8JmrQmxxWGszQCjsmwoiv572BXR2RfkU58Tx",
  "key26": "4N1razcnYgpb7sTpViQgAhBew4Bt3TUV4EKBYhcDZLR8HHriSRvgaGczJSSsq1X9WxdnHrBN6nV1P8ULvYQD4QD7",
  "key27": "2F63jpTKfACqEvuSqwvcNdfTwwB2wPRwAo7Z6UrpGoDMtq89fuC5UxttirKP6Y7yxgLr4gzv3cPFW8WjPnP9WSXo",
  "key28": "LdVtx2u3fcB1iCuNRXbDnYTmeE1uE5FtFgNB88g4H2UNdhARpvkwkG3JNpeALGiQGXSyeUdBXtuq2qFF9hKuqBN",
  "key29": "3RqWzhtyLP79VyJrLWkuDPLvEzwo37D7cWZCYuUQFLqQ5sCGNzGETb4dKagp1EkMJ4icQGgZw54AR6dBAUqhXKjk",
  "key30": "4RCXRwyUiCKoyGnUDMpQfcTYgYf37wAW62fKem2WqyX9XCZZbAt1VDPiP5Dnq42FgTaY2Tri5patey48aYfLWQp2",
  "key31": "4ehmFFpw58iQGAcCnEnVhwaSizGHWBtZ6b5NHzwiiboPfhmRMt85B5eUGMf7QUwt1BjcVbJtnjCwDRAqvZqeJno2",
  "key32": "48XkivZYY4kntGxmB9Lb1jj4BLQ6iTTQACJyN5JTavtoKqm1taJFXbqDPmcnbo1FU8BTwa8nwwzP5jLqR2HeHK51",
  "key33": "43gsj5xhSf7kBrBJg9kYuBscSV1iBWqHfgKmNoQKzzWV2n7h5MHhgN3eYL4tycgEeHaj6cAmEKfjBi5sc1X6CDx4",
  "key34": "3tXF6hJ5CbwvHadpAc8DctmNGJj9pwJu8FdAsjXR5hjSs1ecnje2Mh53azQkW5tfPtNY3dYanbrBybGK4FHfn2Qi",
  "key35": "5n37Mq9DDNUmh5u3XNDSWFuv2kzBEet3bXCyhDxLqF3tEoZbrhVw1k8rLM2piwRC2Wif2NL4DXobF76bhZGtLFo4",
  "key36": "5i6T9xt3rztLZLem8eTSFQBFVqf34hLDv5brVM1xLhm4dXv4oP5owjvqa7wkoyxRFoP577gHzyUgupdhEmzdYFdZ",
  "key37": "3jLDKht4PyWjn9RLJSqKTcZC7NfCfsuGjGpUBkhVcfLTQi4Nw4z77ZLcQrpzoj2ycdNAHeFvMDPJa8bmzHcEG7ou",
  "key38": "67WBkPrkQov4kkZaRfjaRLGaT7WJsR528c9FGBcVAjdrT9f3tsBsFBRRzWkSTceXftJjpTJ7uPD5TpqUzTsPVExb",
  "key39": "2s2ssX6Tum3gv6oaWmPbCeanB5FFM4UC7bkmzudByEg4d7NvEgCVWvycVnHwHzrTFNjoFoAWYgJXAhinVRLxJuc7",
  "key40": "3uDhLiq91G372PKoLLPsduozzX7r2989GjFC3S8Rp4SCoXK1mc5VijZzWDegNEsUg7cHw1LBnqU7CRaPSRzw1Ys4",
  "key41": "5pJYYaRvjCcxBYkYsBQ4Le8qkGwS88PTsUYaehvZaFCCbjg1R8dxTkk6BvTti8MjvJntoJQLzoBAvogDpmktjvsR",
  "key42": "51FPCvqLfLpvw4eu8ty2vY3hxMt3PCSXc1nWstrAg8jWtiL5YQ8Si5vA9HGpnQt9HeBkgfzmDsLqEieV6vz88VXr",
  "key43": "3Mtt3kqZw3sG2M6kotW2iL5CB8NLrUEY745N3N2uhnniZdtaNbdTnXGivvHeYZXXZZqPYZnSk53YKLxUfFqGmqYs"
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
