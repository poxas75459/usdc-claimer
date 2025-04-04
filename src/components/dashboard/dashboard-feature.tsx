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
    "5rZuQQURcTVt4mABVtxz7y8aeHhuRNh8tALDqGYEHThKbCzwSPCB6U3Ww1EoVbeLHRdPrhRxJNiEUce3Rf7H47U1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31VNTiydZWg1C1icmakVpRmqKfMV6dGYHb3njvG1nYbLcDw4BxYvibcZSgwtWHjcZSAKP8rYLapSKJt5id8Ws71L",
  "key1": "3TH4MnUxYR4nEHWdxZapiWprJXJb6NRz1ZbxZ8A1ekr9qUyWf5FU3gWHbfwpVVJPUHptpKnBLYtb3XpCvhdJGwBm",
  "key2": "3eUi7wkBiyZjKcJTs741QxQYN7n5rXgK82TZeWFBwmwMP4dMYkrLKSeDQ5CbjoRmGTCPR8DQUkFtkDiQ7GvBGwXk",
  "key3": "5f3ZLH6VpEDVGSbpEaDUgEmAgzhEDWwtCTC1XzQARfTPxRuQZGtLoExjFuCFw8RwzwLZ2i3rEKkGjDxt4s9Hj71e",
  "key4": "4bhgMMEikLTBCTdMpTvJ9NG5bfFCnSzJF3zDuBVqsWiaWJ59qeEGENfeFJuMhwCYEehg4GaaXZ9QeFS6pCLwvMgK",
  "key5": "5JsgU7F2aR4G1LU4GrU5ZTF8WRkAZSuMLgwKxbNdtbfCWhVKfQsnumY2gZeYymRJ9gB8vDGTd7zcJCXAN48A5SMf",
  "key6": "CdbiB3EXq33giSbnBW7vu2Rp1uT3gmQ5MtxXzVNvvpfQXJ4WgGdvL5fuCXWRTmbXEqZMzMiDXbA3pEtiWmPZP3E",
  "key7": "4b83XuLv5urLPFKB6EfawkfunBLsJPQQSk6dwjF2efZfTividsapSuL3mMXoPTCNwTjcYHVVS6UTVxUyfubx2xb4",
  "key8": "bcCTEKAmcKtWahrk6ZpRSAetvfNaUJECosGy4yYFAe9peXou3DAgx9NShMZXwjqKnyV3xyCGxY3NNmhsfFsxqyC",
  "key9": "2cG6sMRqqcyhiRXnADEDYgWpCNFePNhLmB74WfXDaXFQgQSN3e7DT6Aom8w9MmL5opgyeXDA6ENqvv5uyJns3NsZ",
  "key10": "3Ds5kPYMPn4cYc3vcsXhs4ArH4Skxvc3Vj1MEnqKhGAZUTngVbpeCtGdfJVhcyrsSeuctiiqqY7ryWpFTrcxovnA",
  "key11": "22TS187HBeSAC7AeH93oTir4iZRtDKFx6B3XhF6fvCD33qpzk2NT9inWX4DNEuENL2v3PbdVGpxZFJvAeJv2enG2",
  "key12": "BSnccdh4hfbQffZL58uDxpEJ4q9BB6PxX5GKpC7oDr7n9wiZHsa5gKdgWUec6qVgjJ7xMhpaom5j4qshrJUJ2Zu",
  "key13": "665ggNotKmfr5N7TqVCbmxJQUQPhWysUfwvLJWNFRoRyB1KNPziwQzGxbD51p7F2b6DZj9Ne7AGNTSA4thSFkCLn",
  "key14": "3VJ3TkcmUaMgPjukD2CsHFMrwBg83uU5WC8grJKHjQruYqvyAUWUHqT7Xs9GJbw6gmkNLJhZLxWw1JLzy6g8hk2g",
  "key15": "2q4YGJC9yCrnGDWjMdF34D1Sj4LwbGUJJzXxjUkU7Dg9DM4MTwA5p3bfdNDtQjYMyABKCqyDTVxPLmisokhMynTA",
  "key16": "2ckfQ7s19RyjurtdEgtEMKAqPjjRyjjdyYp28kCQLUsYYPjgQGBuK4yVxgGTiyVU93aQcad9Yu1nrZkNYHRL1qo",
  "key17": "qeXvoJZ1mkamkG4emZ6LhAfeGsq9eNNj18QXyNhoN2pgcMfjUJpY1jcJEb14D5o8X32iPBMVHotnpEqUWPU4deC",
  "key18": "3WWbJdJEcHz3vP9gezZpiL3MbdbZ3zUMcnUN91yU1yBbptAe7w3DwQsnGGwnefZ71oszyQRtJZL2htBK1h2ph9k8",
  "key19": "mSEkLUApNFtsi9pxASgbZ3J85yJC4jktjqHJsmioPuSQZdnuKaAsWzmWfEjrH4CrU5GNa9BiJpFKkcRqJSoXEMs",
  "key20": "6163N4Be3nqNjFiMETfUMWctWajFnA4uaTrth61uoaVr2bM8LTwNWadGYbCF12HX9tpjJQcYxTUB6oEUhW6pMgs3",
  "key21": "LQqq8GV8aahU9mQCgrQ6V5sURbPm58QUTkEkbCuzVvytm3fGgGNCK2E5yDLTRWno4ArNzck1yRHKf9iM1YzsbaN",
  "key22": "5CqqSz4kcW4673XbyisftLb3uMDtTbx3eMhW52QRyHixyNwz6Jza38LeUDypcFrrj41ooKPPpMzyDF6xa2rdkmYD",
  "key23": "5HyYGcZSVZo4Use5pqVBuXdFL5xHgqEBeXBiRDybXMWW2AopjBrHDkFPaiidoKCcFXUgGwABYeMPV7skq5sHPfVN",
  "key24": "32B8uKEgFkkR4RV4WNnuMZ3g8h6a2pzZMLEVVE6csA8yA8W6jw9XaSxoUvKjfT6SJrBHijRCc884AHj4iyqLq2BD",
  "key25": "5PZX6NFqhWc2PL5J6BaJcA8kjYEux16d4MoMM4AChXmeNuTKcxbNbimvNVP6S67xqrhktqSFCEXfAvkDfb6ZET2V",
  "key26": "4v2YAMFgzcoK7zirgYkuP6EmXsy89GY67LHY5uAoB5UcmUnCV93chAbXy3mCxfwSgqxBtkNkjvBauwDCoLw19bHn",
  "key27": "2rFEG8QMwD49kzAHfJzy3eV3ULWsMgaStPBF29xVcLyd3PCLRKz2tyzWCC36kbPngitSZJwQgSsBdZi4UE6aDx4j",
  "key28": "5zNv6TEsCP6aYrWdyWKtbXgVsabu6UfFkjzkiAYUoFMWid8F5tXTYM7wcYQQPVMh9SkjZ5jD4v9H7MzD8gG1zLNq",
  "key29": "38bYgHuQdjTNXZd3ThAyYXcipqU1kzPETY2XpLiX6SwM3MHJvo9QsFXFrxnN6PUcLL5TGrKucbkWVceBdTEbFJ24",
  "key30": "QyecboBi51tH6eRnyE7cfeMWiwBdUK12VHbAQspCZKuFnWYwAF6vuwHNq5yyZbAYQkVjS4zpVLkAtNjrV3syMeq",
  "key31": "UceBp17WRy54DuCaWVXJQF8GqeFStbKgpJxntJ8uZTW6zjj7q31GFvh7ni2yL82xBRu5CWpdoQRpBuAjjTLDSLr",
  "key32": "2h62m7sQCzS7KbQu55xfU1QwFBkQvZ1Wo8jUK5xfRMhqGu4sofJfDqzfjPw5Rxa34ymgNBeZHk9WSNeTr8tCeMfn",
  "key33": "c6AxQstoK1YgnDzFEtd8MzFKURBNmpBYmhaeNsiN3DyjCiQtu53tg3TJxGDSu4FfCmaa8fM9ieCf8qoTCPA8pDt",
  "key34": "5GsC6pdaqt6JBZqXozHRqJcs37axH974Ca2N8fZ6w4UUp69bFhqeRmu9u5roBqTDGMvv5dH3zurXEfUu9svmQU5X",
  "key35": "5bKVcrBRSVyS6MYMDA6LDDKbr5F89xLroNT4rdJNpsoYdz87QkKdnyovNq6R2f6DD7xyx5NfnmNVNwh35hVUZCfj",
  "key36": "82f6qQjrjgULN12qLRAKpXC1DoNdD18TqRpRR5Jqo7WGLu7tVByyazLzktTry61zzdZSbyTcb1uJEgQHa7PoMY2",
  "key37": "5PjwJuHJgAeE9rx3UNtiVgrYoG2AH2zewtBpgCcxNbyMkbCA2xykwsRHt97mH4xtPPsrajugwNMEGBdC4CoNUqoB",
  "key38": "3JHSMo8xd8C2brN5cWA3uW7Pwa7eFgaAdYKhkRUcPRu9TVEmoBJ9oZw86LzP7S3NTxHKs9EALZMPx2TqW8XiFtc9",
  "key39": "w2ekAGheBZT7hM1eR4WpkEdm2vDqdJedqNSgRYxbP7Lb3VM7uf2mAVBrLsRis1i1cyk8goRhMv3w1ekD3EDjjMK",
  "key40": "3Fr6A7kgQNzuKFz3bgL553f16MTUWYnJo7FmXJiPi59cND3kEGQF9Qvxrte2Fkh9mEtD5NRvvMmVEFmwxQjG1bkY",
  "key41": "3M2DmEzEX6dDBvKJr2zk4nudqfnCeUpsp8LeiZGtzj2iZiFeVy5Efzp7USgcRQR3pT2SuvoSxtXucGtZqNrXpP3P",
  "key42": "63E6r9k1kCga3zehYgdBoZtbqFJ475U6wkjWoZx9zpSDdrbLM7KoBvwhkwJAYzsVDaZiU6RP64kNPYSyjTri2sV7",
  "key43": "66MWLXGjXw2eTLVQZSoUeac1qCr7aCJ13prehJMp6AzuLXebv75oAqfJPFsrKFm29x92Ufm3TzdegFpHvMcpMq2r",
  "key44": "HK6whzNi7hi8juvfgXsknUkq7UAAwcYZQppR6eHg85gmTnorjewbgmQiBZCr8MK25YFJsyGh6PEUoJDsh9bRfWD",
  "key45": "2Dg2FbWEtTfp1Ask9Y5SuV6EYCD8SDaJbGsKjpWJ8dfyKsKeANMNfW81PtJa5SeXZt3Aqa5fqvzhdxJ2B5LyXb35",
  "key46": "3msvDQdHi16uT2kk2s8Js3bwe1jSEhuVpJki3Xauhris4Sh84qvshnojZ8njGyauDsXm1P38uHidfdMr7VvLN7Ek",
  "key47": "3CKSiSiANti4Gduxj7DtcEw5Ur9FdMo2nobM4RhXXZomyXg4nZzo3dEynJRZinmnXrnZC3HQpzbqwy3pTpNnmAai",
  "key48": "38Qe4LfvKAbgQLfsUC1APBDj1xRqUN4n9nzP5zMu7HWZGAiKssz3QwRfvAhoJ1Y5FuyjSsu6qZKbqU7oWrC15qQo",
  "key49": "7noTNALppfWngmnhu3ywairtvAsocSczJ5S4vevh5rhVzgm9XGDVrALHUU4Ejzmf9SpYXbUvwXCR1C2VsjGGmcH"
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
