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
    "5BrxkuEFW4FoZ36Ra9u5Ehi9u6yM18YxyLyxCXvL4339Nk9irrcg9dBEjj1CNcnhjyT7ezJTFfMww8W86WUmsc9Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BA1HxGfgvP7dp5A72LHk4637S8ARvcefNJwpptn94mwUv5qD8jzwvyc66nCzctcMjqdLkMnVW9cVSVkyE5w7jrt",
  "key1": "2M7eMnR2mBnerGAzEeEFnVJJSuLfVA7E3WbEviH4B1e95bHs6dwMsrBHwES72ExbvegBfJtwwmbnNprWPKguc2rR",
  "key2": "34etBa35Pbyjv8L7WL3ws2SQ2Qj5r7BS2Tv5v5MghjSDLLCS1Pba3D3q5uRnTh5uae9H2VvY1XYdW7oExoosb7ub",
  "key3": "3A1sqXg3BoegCcVF2Ub5ksRsBJ5evGkv47Bw1m7iBL8CyQXXyNVA22BEKbBPxjTN1KUpwqQpB59WoAUTZqvrhpxw",
  "key4": "hTEka2u5WKMMyrUxEnRzZH8wx2RNAmfwMJKrgMTmX1bcpeJz3ztxVXUt1Y7PLpdtBKcUMF1cd9edK5oruEQpxAB",
  "key5": "3D8howtm7ZiCNZLGk6c1Uxaz45nivuAKauG6dMKa8zqaSGgAbvusUnbySnQHyUzwwkuzJaiU8XnedSHpRdPNbxiA",
  "key6": "5YjnpGBbhsxvME9otuYATSeJigjKNMsgaZT73u6dmBRRCvBM3nSkUHjKknu9chPbxumnMASvagkrihMeCT6DvRgX",
  "key7": "L5zMP9KLUjbnzTG8yMLp1Z3bfhrC2jF5vnNmqEKGWpLDsUCe9rubgEteM492efdMfKYZuoAdr41ZVYv94WmqEvN",
  "key8": "4nVBpHNv9FoFq3wDJUYbzzL3MHXq7ugsraZgHVextSe8QpVbtWT9nw9AMNkghDaJeSryDgcUJ4k21WM1ugH2nSq",
  "key9": "5uey6wQV3QC22PpYTRxVAKexYyyiKn8ZHpngfbwXqP7MCNktRm1jYWCGXdkpK3VxXp8HAwuuV4tcDt6MsMNtMtTp",
  "key10": "5febU7nx9DWaHpBErBdEuFb2aQuBzMJwqTCvoEWQv4WWDtU74PjD6vV9eNvsSejahzx6kBBGZcJfpbkc83Y3Dnxj",
  "key11": "4JVBZDrcL7WhT4AdNbW3sy17EQETfMiuhfiWtvkDL58DTPsjYtVwevxmNtKd6QsFt1EAPmvM4P2speA6YwU52dUd",
  "key12": "5A31ejd3Fc5r4jaRpt8En7tSGWW85MzCybQNzf3TLZdh7ZYQrCMJrTcLodKo6u2avt1kuh1S7brABcVRH6H6szXL",
  "key13": "546wQ1khfwM7hsSk2sPeW1rrxFDbcMnvhn8xeRt6SYZh9KHq4By7QPB3JuMb5LBjZG5AXEuUo1JzQwhiKpVFbfev",
  "key14": "5LVq3vt6Vonv4LJX1G4QWi8fix8DPmUWjU9Xhdu6n4aiD2CtMTHQV2i9Nus21K86oz62EjQBgKqUZq8PcAJf2Ygm",
  "key15": "3juCK8PKDGZEgThZtZMuzFqKEL8b3W3pgiY7vEWwqV6LtToUnjTwGcic3NsenRKZ7pvK6jvcBn6xvz1ACo1q3v8U",
  "key16": "48t4AKdPotQc7DCKhyvrZpLARwChBP6Whc42JgmWhhZMB99AoWRFc8PoKQypkRt22KFuMQJALo27rtUSyoZ11JiR",
  "key17": "62fRiUbsp8pZewoUCxpqB6ggBLsMocnDsU1kNWij2SHpEhGzYgVsqmipoRG9cHpm7Wyx7qTQih54d3a7hjNCbLDi",
  "key18": "3yWvcfn6CdwHNwXzGtNxKMrJRbRHgEE5c3kLNYd25nCz9NNirZiG7rrfdMmqXjVHEbCaitQ84aczfsFEjZUsyjXe",
  "key19": "5SDnZysGfQHSDroxK2o7RYv4zvFNzgEziqL7mt7iTPXGGNVD3cbBn558xoF6Wm2EukTiqF96LjSzKo11UBdJBcEp",
  "key20": "3ATKMRQfHdaysTb9FoyfLTHVrTh2bTphHZGkDpioHpxxdA7iDdmwrhEe1TDYMAKF1mASPKji6rPzacuZGcTwgof3",
  "key21": "3ScozTwbHpBUJ4hA5GKjM7yEvL4L5jg666kmCU1rAZUCRAgMsF9eCnPqEfZd7Fvfa5kfpd2pkVsrqSqKRt5bzF14",
  "key22": "Jy2X6GqfvAQuDCWwdxFmuXUwkwnhptkBwZeqrV2mPgULFRrPw7XJnxZhDc7PVD6x2N552RHD6PLJC24Fqzj8CCn",
  "key23": "3gsdWKnkCktvMxbT4TQ9Dr9NatbMhjSF9mymtKPDD4aMd8MVmMpGoMF54xLUk8qjSa9XWQW7uYSnZShFrWKsdcmN",
  "key24": "2evFyoquf9WDcGuF4dmqh2715UsfkD8ViYUuuPnZM7JsxdAp7TSubLEzt2mdpTYi1pX9ocYie5Tu7btis7FNkXoU",
  "key25": "YZqwWtfv2vzqPh1amUZezW8skHrUrugAsQ3nX9DkuzTquycZZ42BgEr9e2mX3MR9P44ZU43wV44hJBcrorSAh99",
  "key26": "JXmY2yLraDierGE75GQHJ1mDjPpcvUcfxXYh997HYD5rXFYnRUUttMjaoXiA5CQbdVngwRpMtAKWKzEdpPjDw53",
  "key27": "i8LAWv77Nt9KgD2rqZyRWsnpmBWakSmTjs9F6GkFecgJmbPvVhNf2XXebrKiyHrKgqcwFWBK1CsE3xx7Hjhk5U8",
  "key28": "2o2NXwe9SD9Cj5Lx4k4tFWmsHjeGqzXEs8s2iL89P9WPN41o92V7zij5v4KkCTFGJuSPNJFfdTmxvPjN6oStUcWi",
  "key29": "8rWtFZESx4n6nFCseAgx5JL8VEevShRqJDGE5RJiHbYwrW2yJLBUESUAjYr5r1C9gfXpRMERyBeC6ouBi1etQdw",
  "key30": "5HzQgEba8WMmGWsyGm1ikJrPCBQhyDVDXw3B9FhyD4M91BYiXSf41GVKkmgAiTDKy3VyqPhLXfrxsm5mVAUUT7Fb",
  "key31": "5W7ij2823WW2Rf1HGy2tnWEyzgLJPhwED55iHL8E7gTNPiUSyzDEBsx2g94M88Sj16L2fJUJ7WRJGLN4wGVYbLCB",
  "key32": "saPuqN7ezCPM7S5b5Cvhv5zVprEfbkdYSZa3fxp4CLKKLNP9KzZbJQZW9q39Lttp58rh77ccq35aBWTw8ScC5fR",
  "key33": "Akyw31ZuhmQ4TQQ77s5buNoRw5Q3vqh4yxmL2JCzvMQQxUx28Ja5MckwZeS48Vwns9nBiDdoXsyH7dUfyWifVah",
  "key34": "2u4qZ1ucZnenrSE1PD7vD4dZi79uSvsYdtCHmxrXoHFYf7j884U38E9zHVeCkSHESgfBSgpxuN4iMduNjKuUm5Z3",
  "key35": "469smVg7Q5Pnd7nCaKA4BQDxTu8wp6C9Kkxk6Z7J98mJjVSc3jsJrp5xbgec453jZjAdwpGuizTTgcXWRyQ9btpc",
  "key36": "qzXeqMn2sT5s4ijabEJTQ7WFWy5nAim2xkPNzYZLEAbmypE4AF2G5AhrXFASNVto8e1gRFswFqCMRj834xfaqZL",
  "key37": "4r6nzrziJwwkdz6pTfPBAGZe4TBZZBTCsuZDeac6uHTDrMo3DbkJY8NymoBHJBBmuEctZPx75Lcd8fUnL8WothE7",
  "key38": "3kSk8A7ZfuL2zGQndtu5iR6VPXqUKXC36w6G273w5v8U2sFCtCadk3bQ82puAxi45YjqcBMTzyQprRH5JNB4x7y8",
  "key39": "2tRomSfN8fJz1vVw2a4L1mL4axSUmx3EYrv9yur4ghJfCZHA4BJecMUDxT4fJQq92RUBHZieo74cKPbhUzytHZKi"
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
