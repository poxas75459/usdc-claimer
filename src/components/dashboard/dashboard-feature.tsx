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
    "4TZVbM6ECVZKCa5TQF3drp89BpjFxDGHaR6zAgXtKL9cjv7ShDKM6bYmgRBaRGNahRkaxjRe4rYQ6yhAQHhNAc4N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51E5qDHjf3iSr5kPuaue5KBDCXVFutBRxHNNEhmY85zBUQjRmUSLi4mzhXHFXhxU2R3MRk6J2aFiorKEF6E13Spv",
  "key1": "3DhJtgFy8wgpYBqzWUTfEfho12KXYBojH4aqyu4LhiuiedqDkH9GiTp1wn9UBtNCNQSjtEbUNgymiH2c7AsijZtd",
  "key2": "3WiKM3ukJKfX2gKXaZsyZq3Y4Z4jjP33hhJiPZyHp9j6stCRhDaykgnmf7CuzhgkZhqC1qZrK5CFDGfkU4ro8H35",
  "key3": "5nJQp4A6KWBnNgokwnFY7KyK222EverY7kcGaJVQmAU9SMCLRbLA8TVYtxpoJQCfLDfHMWvwrf99xCdEpyYKPeHQ",
  "key4": "2Mf6CHUN3mniY9LwbwonMpQbWcFFC5N8qMVttniDE9sGeEi87WEzUUbVji8f7tAdxArim7iLLHB8uWgseKH8ZnGW",
  "key5": "5qULte52HiewbyfG1TyAr8p7uRVLowPziqRxYzfci3FyjdbN8UriZt9yoMKJf5SUTwDhNiSugKTNAL6vQHkMmB9R",
  "key6": "5V5N2u4ZdKpP7uAV1muD8w72ZGhv8N43ppqDDVY11Vydb7eFxEYXQWdCftYhn8BDHcbFsSp7SA2utXyXkrv3Nd2Q",
  "key7": "2NmjXXJ3vAyVUNgw7V5GXjc1xyct5bQ4r9aRff9q9iWZiPHVHKgXBsnMZTgNA9e2Evvfys43x6Szp1sP81Y2zoSb",
  "key8": "4Fax8wSi5nbWQTbWd6gwycoa3G11s5TAP6T7hPEUViJEu4k2XAnERRnE7PTunWmqMHPLU4XY6HgTNaGgZoy5rcTb",
  "key9": "5kc9eKdQtHbte9M2LK5pfyNipffvyzYKmTxMG8xb9iWdYFNfNSSZ6fH13B1j2pCcDF9R6zvwX4C9pb5CLo4zoYvL",
  "key10": "di7e317JVjRdNZYb5nGoxPaAvvQRTdpfGWXHq7Jm1PsS9TUErH4Vfc5HXzcQtPu7eZA1DzSQxQKPuRmSHaAFfvG",
  "key11": "5qBS5b533hic827eYXMbZ5uDQMxJsU8G6wBae58VXZPJpAsFgYs3GzKzbHw4qwmiNHxyuJCiFBizWmA6RbJR32yG",
  "key12": "555oWD81z1t61gtiL8bZLab1z43Bs1Y2YUvG64cVJN3VXwTciSZ69godBiga36xcpyL3XDHZdKpeta5bnNypHmye",
  "key13": "34cVwFjnwnTiWtZg3PjSDuGoZ58zow1sJAvrbB7zT2D5x2cD6BwuodowbsUxu8RhszxG9d5wMpVS7rT5vsmpBFxa",
  "key14": "34nuZKXxwBzapAnk62DhgHyNqWtt97be4XpCxRbrpNUMJwzq74y1LGAxpG9kCi6x65wQEx83Za76nZsjhnWPKRi5",
  "key15": "3s7JU1W1mHsMVTj1Bu2SNne2G9pUS9ia2XQyEcf5cn7xTuJNNgauNhpv61Ej513iTt2HMYAfceDmHhNB3gPnC5a6",
  "key16": "5pDJCi4eyv7XqfpGY9CkyTARwCF9URKfhCL8eDX5Bof1utJ4a4SFbFKQoQAEnAFb3mzF2epqnVTTsDXBvhnUuFAs",
  "key17": "hFTarXJesUuJF3ZDke87TDjLWY6qRSVewdDyD6qHJ2ce5aUnhnNtf5dhfkEyCTxk4KrwDLE2Z5QgAHJjgErigQQ",
  "key18": "2wFMrGAxrgyrsgYw1vG6vez5fcyX22g9EyMSdct2hwxBNyYfJ3A96Jd6bKbz48W4FUA9B8D5ANFyv5Xb4CCPC9p3",
  "key19": "62q2hZ3jDtmUMqXHFrBGXG9f5rhe6HoFXBqSqJ5NZgzuam5k9WEbnYBo9dQ5Yb6J59C79zHm6jaPFAvthPRNMxGE",
  "key20": "4DeRngG6XXkpDWKgc3igvSdt55Nq2i8CFW9eoUBrhRz5oEvzWesyRW3nkbvAkavvSGox9ERJFfwBVzDvzo29JFxZ",
  "key21": "2E5oU5m58Rurwd4331LECcUxSWqsmm2RpdUr3sCmYNUGpeUGov8Rikgvxgr9NT4bTBykzVJLjtQa53C7M2EsxgYF",
  "key22": "4yjLw8Fu5qB6sBJ7sg5x5Drz5sARxe344vNXSvisj5GLejC1dRK5iy7HYhPXqZXBTMjYm6Q3U9G9u71bmsrRE9K8",
  "key23": "4crWa38hNJriFUrpR7hg1Tp9iNEWbtmvNx623QMGdR2BjfaSEzj9fZS23MeFaBySkQRC8uisFdFLWVtZEErLVvDu",
  "key24": "4oMWR2VidKcd156X8fj9CB2Ac78ftuxQghntUPDo7DrRo5S9qf1oJAqfpY9M7GQhJmY8ayniHRu6YQoG87C74NqY",
  "key25": "2hiTiUGx3kxBLc3teAofJiN3xYFPUtBG9toasjEs1xa8WfV9kaStaB5mcA7k9ygEhrxAt4XnLJxogbQy8GGUDS25",
  "key26": "4D5jzRBCrMrTDzrs4ZPZ7BFyJReRARioxn46pQua31BNbJfLovA8agJpvwdteH8P9zSfTVU7bR21ZnMDDxTdDqr6",
  "key27": "4x5VcJ1iGWjSrc35d4ixmX5QaiWrLYYw4CRjNKxMa2LqqTUhPXgdbA6PPqiYZE62mW7oMBWwXxc9aoJCsTniY9oT",
  "key28": "35NqtoVizsLyeNRN3c6cLcbxvKEXiYch9JZzF8sFrVgF1ZthBThTBDPx1xctBFbyi7mNCu3MA3KzCyDUefHCHEFr",
  "key29": "527GRpTijPfPk9kLf4u1xzCFyqrNUaEbKir2PdcKkD22J6hJHDiGFxYtHGpkye8nzZTFKHanv8t77sQ1E4zmHcsG",
  "key30": "PSsW8Poqt7roZ73QtFKRT3gsrRTrkby1PTNjkc5vKSangfZQi4z3YQ9tFCnr3YJtU3ARpkXD2FAWePyUcuqHi9k",
  "key31": "WjLo2Ahigtp22yvkJvFXR5VuNDvoJsM3Ly6jN6S16SscLGC17GmikcWQXX8TwJ1tVrkUjCW1RetxJSqquM5rPyX",
  "key32": "66nwKj8rMzVfuh3R6F77geRTZavt4NavXnhCuDUPqHYW2KwuH7z5aUJA9xiigbNyaqhsg2X1RWmDmMAnuaawwU1w",
  "key33": "38TUxzGZDhU3ZvKRpbRaQp4uoruqer4E9jggRn4LdQdoGkd5MyuWNUcb7XWF3seFtFct5kmuCjSFzu6JfS7kYgZX",
  "key34": "3WatALrNRmKC357GazMiE6XnJ1GSjELZiwBkYjKBdXui5gtxxoyyD1w5sswfpJSXp4msiDYXKekMS8Xo3mxu24Wr",
  "key35": "3GrKnJ2npvXjwNbFfohxdFuZtbASPHVgUKjuriWgE78TiPRmU4NTKhe3zXpwDL4vJsTHrvmLLfhaAxWAiaPCgW68",
  "key36": "pVbrBae2942UoTid4TqRM21mN5gLbG2wBB2GtzCmhFmQacfjtUFj4rWmVBpx9bvXy2g7KUPMfjCZ9kqXhQGCE87",
  "key37": "3HeR6ZeP7GzgYE2VGxfoAjTRJ73TPZVsKbEaCtMmuzi5UYRDt8jx8LJJZU9zsfvDmMgPsRLoJqNQ8RvW1K5HUenm",
  "key38": "yNYgdYXbvLPmKwc758Wk4qy9XUSDzV1NUJtrbEHgeLXQVMJrNGny5EpQbZgb9fsJfNB7ycxfuUUFPXxsoM82UQH",
  "key39": "3yunvLi3F7qVRMqPurFNTktkaR2Mzfmw6YQ3ghscBBsWwMkbGVuKWja4ctzagUuAVJJDSFhPFe6jsMnFBr2RYEDF",
  "key40": "5LCCWnHiJjaabk1NLZc3oWQfAvC64qLraN3cE9dso29g9YYJyhaCfFhK976CWLx2UzgxS4xRkDz8CeAkgvRyqbFr",
  "key41": "rVeG1VXxd2tExtjnSdnpWedKou1uHugnpPgKTiPCyrun49MLqGn7Sni4niLKozFPMpQmTAyQbRsPJBuai6B5oZj",
  "key42": "2H8M4xuAPN1QwoUJybkaTX4KdKtDjb8U2zEa1qd47d4Bf5eVvtqn8LuMjaTM7vpuVUrhNzgDM1Hs5bk76AnApJeh",
  "key43": "41tuDYjZNe5sHFbvxLL4cM38PJFuixWb2tcMsam8NoYzn6JFMhJrkc6XmNGwmN5FSHbHxSfQbFDYyj7f51EM2h9h",
  "key44": "4SUHXzJLLss1BVUFzc6aXKNQJBDFSUnuHk3p8sdFcwT8yELKTiqfEkDGWrRtdi3BURWHZvKbGND7n1ntNUaGB4F5"
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
