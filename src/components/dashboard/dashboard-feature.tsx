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
    "5C1THG3YKDbk9bazUDSZ44eTqPdhaa8mUxxfVCi28XEwYstiHoEFs3yXfDhfqN6W67LKF1QVsy4CxprvTAjPe3Zo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aDe4sQrP9JqBq2Tb3UMUqEUVXpNYSwPL3w2B5ziweFeRDJRWKNufKYhV6msZGKrsk9YPnrmhxCfS6ddDkRC4bKw",
  "key1": "3XD1DwkaqSpY5TXtDzP5bYtpy4VL286sPMCCWdeBJ3mtLBEKxjjfNDUthaFRQUBF78Lu8dfFFachFUvkATvHhxgF",
  "key2": "3QbXNFHMqrdtpDEiuUzZncyLgMeSXxEDmPCNhWLxtrTLMhs9iYDPpHeUEfiPXwvVHYQAx3zDbCSdmp8DZhMGgsxc",
  "key3": "3DZCnmaNScGCGx5oegKSZs5NbpRc8M2jXGMdCxcXouf1p9aYFau8c9Pv4ayVwCwijCB3uJ3y2KEng68dqGLy997r",
  "key4": "3FuvqLWnfrgj78h1mHZamCcs4CAwZsY1bNguf5WRhTnfwcR5VBcZgYKbsUQeDfPuT7oHX3QDHbPAZKQ3pZoh3eyr",
  "key5": "3LGJqsXQq1xuke8oWFVCaqvZojQvLmV263un9erdLwTXeXcrptvuBQD5xmkVFe63qBpvrQk6Wu5mSVdYmVbVF4pK",
  "key6": "ywTSdR2qyAC8FNnvB83NWxxHawk8fRoJsTCg16jbDxjqHPDVd5JsQnxhejR5A3rr9FxYvkTZCyQugRb9ovzuyep",
  "key7": "2beyjsfbv2Dq6rZAdAJaxFJEa1jbEnWJ9WVzchpRnRP3Lwf5doagDVD7sRS9MAy4y8BsbDM4LMHzWZoUDoUQZjZ8",
  "key8": "5zvKkDaaSuBeJXAcipVYMM7n3PSoZWhwSfrjhCNgr8TAyzahs4EcKcZLobA6KQ2GdjRnMtP6vGbJ2FVJbGXki3bo",
  "key9": "3gXwqssi7VDyVNqz1pyGdaUegBeiwsjsnc6T4wswfq3jtttPLkTQk6GAF6frGn1uCYAEASGgsEwn75F5rjQREnLN",
  "key10": "2MUQLahnjz6qKSh8wFzwZqHnGDZNBLWnGNcstdpX7Eg7FxqHNnzW4BQesSeAPGDJWLnqzEBmvGkxNjLYxmTbND7z",
  "key11": "3EBQozf3Xn3DqfHyg8wVxJE9HgU5zeEbspUyVa1zz4GhwWfRZZP7HzqYdhteFTTBT4Um3M6hpciTcG21zH1ThcKo",
  "key12": "5F175XuU7qw1x9Bu2SdeLT3KFRp62sq1mHdyZA5bMZWqBmddujMkRRta6vSQiDbKS3XgAWnuyZ3HEUEUs9kEMCL7",
  "key13": "2CYK7apRRTqBvPkXBpTL1wyydM5gCXTr3GfMxj9AkLwQHg3hwSz9W3abZbYNuSUN3jDKbTXi6KXNg5s9M8mrbFKu",
  "key14": "3trjhgUMdvj2MAJbWjhfYhykTbGDpLDzZwoBZrz2qc4iGgvUkq5bCTgVu523LjNNN4avBz79MCE9s66GTDCNJ7FC",
  "key15": "47VBXF4d1jtwUfniZ9J1uuVQgoxzGTv67dskJmFj3RC3r6iBckK53XEFf9he1NpFtXjPDiNmUz6my6N1M3ZNuzB3",
  "key16": "BbjnPaVBe4WVVhDQHWiaeeF62xF5FWxtmCqAbT423Z1k33oduxVPti5vTk5fvkXjq2bLbXt3fYSLJ7nP4qKhNbD",
  "key17": "2ML5C8Z2irCXyxmpunkf4zR7U7eHscTPD4gHr92j88Ubax8t5SmoeVhSg4bHUeRv1EXAxCvNAQYi7CbHStFUsXZC",
  "key18": "FVH1HdqBq6P3yhBV6ENEDpoZ8hguFajQC6zbW1oqYERncSsTBHCbtoJgQb34AxouWHjiDL5YegkHSCcF8wieTv8",
  "key19": "3QEuaMpNskR6QkjE8pcxoh6kWeUXsfMiA8QstYnRXfauXEQ9WEKKEUWBPA2RVwVFo51G8t85k8tiAsdxqkGLJn22",
  "key20": "4yG7Zed6a2aPSp8VkhJ7H2YQoXznkC9co65BsUj8Sy53scHtt6JxVupZp3BjEDJJMitgcRMSyiHZa8cxanmcGcSG",
  "key21": "28qDPPSTb2wgaiYUs92zwFDMRr3DjMZLAxEY5D3ikF2jkDNg3DhjmvoNM8bdyUbihqwh3wFXtsUn8MYewLKH5rkp",
  "key22": "4HK6AHjZXRpaScvUu4x7UGieXHG1oU5ayRCYi44FUdHN2emujzE4ucGLY93UxigM5JpepkqxZcbw5VJtepjL2foq",
  "key23": "365tMpsLZhU5WEG1DpfESw55s7jyVLdrwmYJSDQxazMQ3gvDje7rYfdETDd5KbkRAWRpLTDyfqeR5ye8y1Tr5peA",
  "key24": "5gZPe3rFWxxg7wJnjooR2i84sSneu3cGqkqRqV62oNBuoddqTjeZcBJ6PEom515SvnC8y2TkJsAejmNa73fmpgJN",
  "key25": "3feNya1c4D1sWL25Sev7uxGbVcKhmwcREz3YLHd2hCALc2KN1SpSe8mpK5mJou56fmpsMx1urdihdJEmQCX4TSU",
  "key26": "4KvNBLRY3RYUqrcAGymKRYeoq8bqfFRLUDu2Twk4Bk2XvTnTdftr4NUZHa71K6X3iTpakBKZEJLQx1tAvhNowzKA",
  "key27": "2Zv3CRTC3bhz6kiMGYE3c7XFVAC19dxGwLS4zRdcLKhcd68zfn4ZskD9Esi4YTYVoQXBcunjGfZGZA2hfAipmVML",
  "key28": "58S4yTqen32tucGawEds2v1gMko7TmZzYY94jaJ1hhMqyBFYZvzBpTiyt2hTKmXFkPfKBn6uoMxezY7tbuzgRS7a",
  "key29": "eVNBydoc9yoLPPAseisYWux5pY2CwXqkEzQ9Fkac58GWyDy2mpMUuUBb89q7NbKpb3nUhvkvYSy63uGhhBPUX9y",
  "key30": "5XeR86uk9LjBFc3HKAjVBkCYmbR8Cmoktjp1mv4qriPNGfq7898mvuJ4uS6VtxLe92Z4QFTwz2HqFx3toSRJ8cVE",
  "key31": "8kFWgzriYnvZXGTakzUquKp1vvaepuSNbVYSkjgXQFzwbRaotnnVcg5pzZwJcJatgjPMwJariNJBfqD3s862RYc",
  "key32": "3Ls2r8M5qv9E8idX4amrrMyhvcpTiviWo7h9CC1aADHttjE4hi7Arx7uCmuJhQq7jp7HSpnbuPEfUTDHQqzeCyCf",
  "key33": "2ouNVhHWJNPvdPRkQFGoU7EaDfUAHLNNXx63fVbEzTgke1t2NxnfUvoBAisBUikcaHCMR4C6fPiUGNggSzTqWWXc",
  "key34": "2fXo8w5hYhSYyvm7D72tHodVmSy8z8fFr9t8rnevy7gAp7FB4cGRAoYhY6pxRG6RLHYEpCPaUNhvtS9pjbGLBsQC",
  "key35": "3MZsu3eLju3ivdj8TmWqC5U67M5m1sRpU2cftR11VzQ7YG8m6MjZNmnsRMNU8UgfJ4T4FCu23sFi5txQVssunZTA",
  "key36": "3BueUbQaCdCq28ei2cGbLmvCfzzq2huriaMfoEsaGvX584PjzxKBnvBo4YoFJVtAzTip7zm3VVtAjiH7QUbRJ8vR",
  "key37": "2EsSAGJxMh8HMhSvNu6Dt9KJjK63zgCmgDBvna9F5DzoL4etG3vWT7Dw3XcXyzJLzzLKce9ivrsv3W8iGcvwD9ds",
  "key38": "5T6HNWBcHgRQnvm5QFhydVabP27iqtVhRDne8uzJRsG2Md8QLKtENLixcPLLyAipe7J6W8ZV8ZXvGbPc8jFr8A7S",
  "key39": "5yoJQc3UT4oDWynoNq1ifHAvDkzVMB4mSVCSmj8n2PWdYcZdwL8ie2LmVCnQP7uHMNKLfR1JMPuhdkiHpqRn4dTb",
  "key40": "HaWycWggr3tC9kd9Lfc8oWewppp2DjXhABNKaufdnRQBkytkSPpiHeVZ5zyihAPbWDw6zrzv4yBbConsQphpArD",
  "key41": "25UZVGGApdC8htiqNY6oBP4iQ4MCWpGaXSecYoqqhhojcGh9pc6dvQSJaL9RVMyY5nP1GpoUMpvyRqL7QTwQkBpK",
  "key42": "3adAkTTQuVZVgYsnoiXJgE285X6DWj8S3ky1YMYBgvLvthspsHBJCL9VcVLz59bofjBLzh1Hu7V14oMv8x1PKGV4",
  "key43": "3snRqBb4UMLjvjjp9V38guvepjWi6JLVojyPAaaMccX5jUGiSSX2yCYKNpDWnhzY4J5BWQhsSNsos9nepVqRfoXk",
  "key44": "2WBsVni2UhT4ANwCCHBkCez2ufrUhywm9fzNJwJN1hBUC6UBtxSTdGZkURLyAmzBnt2kkkW8k5WNaoLfwrcoGhZS",
  "key45": "3L54yCzHsCvYpN5XU5whkeozMXZ6cZPC89jLwKMGbD78tRSypSnhE8ey7cUUyaWDJEBSydz1LoshvWT1qXL6g8Ch",
  "key46": "3xoGhJR7xXRiPFuz2gZBatmq3XVyy83svuyhGLtx3Hcy1d9yZcaefr73tWzB1GuCPadQ9gA6RcXKX7nVrgabLckW",
  "key47": "ymXgcdzyYR8qdf4XHqdPfyFn7R3SEmkifFvCEx5f1ZmVQQkFk24GUtyVHFcy7vNf2Hge8iwTywTeFNYuKzBBkgC"
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
