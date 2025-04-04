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
    "Bbb3MNyYZzkkzaQB836hRC4pcV2tJ2EYhQXMp6qX9nVsyhws6VhpqABerFx8DNxf2ZohnwS9LRjghVWUtHNj7ju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ubnMTdG8eYXUunMRJByVK9nnPZbNZcQRV4JyPqSN2D4zSvbpkZqsNA3zJDTEcyJUykrghPP1vwqi9rdcRRA74um",
  "key1": "2gtzDddw2HV8mWmcEsmkfLeauUiJndFiXmKXhBALieq6FsaSD7HyTMVimGwjV5NBejY1P9Y86QGA86CBkHpxJA1g",
  "key2": "4QoUVoNFLEU98z4kBzgrpAMRJVN5VToxXFoYgvWtpzqv8Mh1qrhFcQyggd8dS66DbsWNas2MvjKUXFSci3bpA7PA",
  "key3": "2pvkpZyGZ7iqMgDrc3kaDT99hzt2HxSpX48D5CQXfKeqiAKKt8JgTVJqocRzB5CnS6sKjuQpq3MaMY7S3SzQ5tEn",
  "key4": "3PKoR6z9wKMQBEGpUWvm2LBB3b2TgA55AdZ76QyENBhjy1899hw7JByVjCLMjc2XGAXPaCZHXd684yWySugW1Cz",
  "key5": "4ktbihsERM6XQzE5bFrN6YUDapV22vByAeBdYFy2gNDX5VKacmwFkT6DHdqgFovG31YxxTarepjWpjPetPftnWra",
  "key6": "ULAypmej5HZE2Ft6hN7TmihZFrAXxho2EjKGLWz4DYc8UFrRQr6DXYnJwQCZyGwL3w3af1wHUS9kSEDuQd73wxF",
  "key7": "yuqYkwM6J4YPjgHjxkq9xFFcchYY26CCZmcTsZTCc9bQ7iUyuipKXAXWLjNHTqw4E1bkJhw4ATNE3dPvXiZD75X",
  "key8": "3ioY4WJGo5SuzVMjz6v5eHrNBhRtqgPHTznstVHNNSNh4QCQqcALpVAgavkAMfoL3twdgPc2RcpF4t5KygVdm36g",
  "key9": "255xJQ6NWGpbKNLAQygDiU5E6jskp6hZDs7uEtb8eXyzSRhvCEMTh2pL2vNiUMJhLfkaeUdSqw1NH9ddm1zcCr9U",
  "key10": "28tkPdqhYZcV1UExSByVABc25CqwUcaNKZMx8YXYGvT8u2GbatsUnQdbV3hotp6vY8CJw5vtSjRHUMwnFVvjq2Wx",
  "key11": "wDaJ6RUY9HMXbxTya4szz2AG9WZqqUJgWHPCUJ4xRZrWgqVK9apA85b6Z85oEsBneFdxLFSYD3hii1pAuahQxnm",
  "key12": "EdyoctVM5EqqQtwxN6MDZwZ3QiVh5kBjvQU3qb15UXA2DEwY6yR4z3e8BXZqFudU6WNuUAehWqFGQL9onSe7wKS",
  "key13": "2ja1a4Su1bR1fgDrqb567ir426fgaZTKCyWSV2BoWmGKkxrbo8iGEo8578ruirhgvFM3pUpqyjMxmtC1RpDJro7A",
  "key14": "2C3GZgsUHYwpp3HqvrSxrn6RQ2wpUgKgnCCqmNrpRT1t7igWJ6L6W76xoeNacSetGRcNkdzRvKLVWBX4DVHkGhpZ",
  "key15": "3P8zWFhGSysqVyTR6rrBKLDyJTrx5EEB5hHaEPnF8YWr8Nifv4733xSqK9cSFCLJh5XyNtJHYsPUk6X3kVjDbQAH",
  "key16": "JiCkRtwAnekPQuhRtMTyFqF2pJHZfsAAAb3fRWRocYXWeoBWUvtTMmhvRiCehMT6p4jDAREBWb7ARTN13Ppwjoq",
  "key17": "z9jWckoxsq9bemAUg4eLHWiAuy5qwPsu7ZZKmBLKK44J2ANDuikncKLrUkUUyhypnzU6bDqJA1qZ8mFNHpP9KXs",
  "key18": "5hChV2af4CEWh9441BxAhNpcUyUU7KExmwoHihQHd7YhCJmP41svAabtrtcaKV2pMPS56cuJ8p4KJtdg7ho7XCc6",
  "key19": "5g5vh5hNPnFNC9vUsPAJsRrJKizstYxx6SzA5jYY1Xd8wMtYoGXEffSQdUjhEzqPbxJH8pkkg9Poa4A42uQSb9yz",
  "key20": "r3v88w7NnDPyrSEotVjFoVemLY2FzR2stabXz7JMUNnH8fDy4XE5fJfq4qUfypYYxn1VJvYFRXLjTAXjdMzwHts",
  "key21": "5iitutoaDSvDt5TPo5m2S2RseZzuirryt9kRA2VZbHunBUXwj9JtxjoF2PNy43QJQMWZjnhj1MNW4XaCB76JZXE5",
  "key22": "5tTwe3NzmMSKoL7ok4sBip2w4TAPbt2JBZ2dGKDSDTBjMwazAJRYDF7rMU8QkwgjGWAH2gNXuWtXVXkcGKESRb5j",
  "key23": "3etAt51k62XJvEFK4jBN3vAyUQrz772HL4QWCj6Dt94JUAVxy1vHMD6JUyRLeEMNC9ymckjNhazU7ygg6yB5uUrZ",
  "key24": "51NE66McaHyW9hSvMUQ5s318NUoVMbZnRZBWMauTgW6UpFEcVzkAEampWahGfzXkF3qbLBMX3EsbYnETRtbuZBq1",
  "key25": "4UoKWePMW2e1B4WWnm4Lc9AtcYjQtBe19BW1vGRinWGCBu7NKjfn9rUnqNKGdEMRRJLxXNJwNcdKPsquoM6eWkqR",
  "key26": "4bGG2Qw7UCUEq8oJC8H2fb73FUQouxhx7DAB7NVSuNxnNgRTGieWRjWZboxgSdxuCdR5k8zuN2aXyUAYVjvDGFG1",
  "key27": "2EYhfzaG5A6PmMLfCcZSDeZkiohPcGAb4BZVTh86U6AJW7R44BDEHz5HLZyyWPvDn1QRNT6Ju3eRfzgQaKq12J5k",
  "key28": "2HsaKYM8eig2piSM5d4jR4cWb2Yf3WDSAP6h9hchFYoZ2yqyUpX6V5zsHjBHyH2e4dKioMiU48eX9Zb2PTgo2kWu",
  "key29": "4yx14ZUYkuwbeGnJsbWyWLU7R8TBzp1PZYaiaeyjC4qzjfkjVYFqqmb3m4yyksPMHZYiodpXZfkD3Up4oNUWw6TR",
  "key30": "3fm1rupwGvtzFX6irJSRnM9Bg56tTvDRt1CiMTaWxjeUhvFATkB9b3nM724pEkrvrxjTj6P8LGvMxR9fZeQnnrgV",
  "key31": "3DrmVdtd7UTByDz1xVeq5nuxh1a5FcKPx3QogE4qxRjoQC8TQaaz47WWhyvW66MPom8njhT1AJbH32TEf18tJuyX",
  "key32": "35ccjxphdAqgV1putWCKumuaqhJe78oBvg6Eq61ZDgEjoP4cSnkUJ5JBQQ6sHJjjR3RQPrjsZuhnYkW6Nr1Vn6KT",
  "key33": "2pGThDEdzqck3G2VAFjbJTpW28KFHGEvbFsFre9szh6q9dPHrRatUPn4sfV64jY3EBi5fRtfPY1Vmh5KMGuv3KAH",
  "key34": "2Wj8gGgefKGtSGFY8gDUK6hs3GJW5DaWNEd8sYNJocXRN23rryCABaYyrN7qM3VvYpkMSQgpQf3H6tjXz7jor3Tk",
  "key35": "4q9Ygt3Vc9mE9ZKYB2SohDUug6CdjpBP6n1azRtuv1A3UWAHZVmv5JHFBrjTfQ357YY3HBjWmzfhi4tZLVurc2F3",
  "key36": "3WMJbf4KRrqJRvDoKb9fhP8AJh8FUzstHxaxFN5UYEc3xe8YSBtKdsta6EtKE3PW38BimyoK5LRMdTHMMV8QuuQC",
  "key37": "2AdEuDRM47oQxCRYtH1cVrAfEwFF5rYJh2emiUwRBThuQqSUj5Cof8fsMgGHNNiPWawREy1KX5kffkG9ngji4gwh",
  "key38": "5JgzZqHcRM5o2GNLBCfRG1wGwFExFqwyeviKc5Pja5NvQxL32Qhtj8CophzJxWBVquVVadAfZALm8xhZcZgZRLha",
  "key39": "2F7WYQJKNiyntXAMnEeF6nQKwhhudEZDEWuhe2GK74n4XWMKHuQoRdf91FwiN3mHEQ2d6PEEZjtdrJ6efoQeUGXJ",
  "key40": "5qEZijtwmMzBJf1xutrmQjsCLwq9nMzcDrcaSHLNr3Ywfr8F1Gg9pXxsVSVmwU83vnvAize9FAMhCs638aDJPYhz",
  "key41": "3kB6xzMfk2W7pJXrXb8m4HM27j3jYqKS3sJm8w7c57xrbrCej2Z5Sz73bZjZWGyk2BmJ21VUCSrRqSBAiSLzpsz4",
  "key42": "3DtD8g7P5NFzE6Rm99uHLCLZGNxJHvEqWDKcFod2tNhmD9fcxoFVwtoACdnBZFdDHr2q8dn32ArEqHLcRShiJfg8",
  "key43": "2PkK56R1pNxm17HdxinAyRhhh9XJqFnEU7BNm5woKhS6CtarnYr2nZJhFVtGVuDPrpjHXt8RsPySETGXnEZgLsoW",
  "key44": "224Lo1EK4tAmErrgQooYCttFZBzuJGarQ52ei8NpRtLQsUSfDyRJmdTkDtQZfg5pNsFecJrJLUSHzTHoBUTeE3qV",
  "key45": "zQSd1ctVnmqfmrbaJE4sDG4ZrKzxRvnP4GLAaXiC9VM32z6vu4PUaoUm2jgYbxJSoeEw4RhvSzBt5L6gFrb1uRj",
  "key46": "2Uww5CD36bCyjdAHBBAkuxu3sk9NdFLXKdyYCv9ZpMRZE6zbfuSpxpCyHz2X5MxaW1cF6r1MW2dk5ZW7UmBRCP8R",
  "key47": "3pdUc9UuUU7n9to8dhn6E7MzUR3DvJstbrRYASaHBZtPGCknCUVnHEZsZ9dCdQJR3AqMxrjuCsm9aAnR15yrG1NW"
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
