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
    "4U4HKTtN9GggYpR1yNV6gbZLGPWsQWSm3wTXKFFf83s7sVe4N9QFTyikg5FoBjMVdUsAW4KxKbTqF9ChsgoAYBdR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36B9GRZWKtiEv3NgRdRaPiqt7o5sk8CwEogJj5xAuAVDiPV71wtfsJPUrZyoESmxhuZjCDGqK3TV1JAUVezm4b47",
  "key1": "22G6tV1LsN6yFCRgo5kG5x2LMpQy3pMxEuDyYzvpEukvPmeLASGaXyn5njeH8kYxd6KkGC9Cb5AwqjiggR8Mx9JS",
  "key2": "5AYGPJmmNGTKCeerhvNUjLPxM6qJ8ppQGkZnNsTXjZ5pxiA7u6VFsQ9AYW3A1hFt8wfwwENQkJg5d21Mv61N4i1R",
  "key3": "2Vjq1x6s8xkdAsf9zEr6yHBfKELq7bYLqH9eX8wDg7Ai1LcNfbkL5qFtbTuASYW3X4vSZE8Qyrr157bNRHjxW7xt",
  "key4": "3SnyvS1ZxPQV1mCrs9Mm5x8VcvcDHmeQxatUKoQrtUmySWQXEacjSENciAX12voNmncMEdqpWELSqbKgyL3x8ENt",
  "key5": "2NTTh2ZcaopVCw23HK1DMxFNpA2jRfNEGLNq7N5ztMEuwPoctb5mBHvTwJ2VdS6SRdHpXmrB6RnHnTJ2pWJw2PCQ",
  "key6": "2eA14uRDG2P1xkTHeG3BmLBkUzAjT1Kbrv9Jf95844edBzSHtqS64DqMrUC6T6R1f5BQpiwT12UQzbAkwHJSSChZ",
  "key7": "2D65jNciRY8a87AtMped51GHQximUNwAVp2DqWauMBXQNfDuEccGAXq7VKYz5WKCxHG5Qz711ZvefDSwQPDGfXSe",
  "key8": "5v3JtKC6EenZzomtTGSt91BSpfBZJzr35GSB1dSc18s4BzkwBU22WhRaxSmtJiJsP9VjeUWps7GatuTmzQ2PbnoQ",
  "key9": "2BbttiP3mwWhZbkzZEY69a8p8eBEwRAH8jULwCoFnoBAuZAQXxYfHq9gaD9nTxKe9dajaEigVNS3415pccNtHdDf",
  "key10": "5N1CX53gdoWkqejZGSj8CbZCr4XgfQgqHD4s9Sj2Sqrei3n4WZEcnnCrzbjnnTBv84QDQ6S6waCFMDC3KVr83W5e",
  "key11": "9dbREQfHdEwrkXJUPiUZNRAi2PjbPJSag4pMsZm6oqYGuDFnpSaE68EAfuYQEiabtLVU8xBmZRSSZotdjjSuWJc",
  "key12": "2wvVpKTJXFc5FvTCXKbxowaQiyp3i3CQejugxwUKuqMPdXWqDBB8P9wWFcwc9SKFykBxrSvLfHCA8FgBxB87Xhgw",
  "key13": "3fyDGgpU2ZwocgTYJwGmQcEQf6BPdfee8E9qe3wTc8qZLLytZKb4TshkEbe9KfPDYiMa527NQJi8ADveX4VqMx34",
  "key14": "3zCLs3PsqoXRNwzgoJ4YfooCwvVZVhmdRgKBAEe8cnoJiCfSUEFBR8SRMpYNDZ71y7fJvsruLi51AJhKsDJyHe5M",
  "key15": "4nZU6CaxCFCRm8S1DaTCMMMaH2XXSzYsktMCM2M6swUubBACMqjDg4yPZ5rC7QGNQHgLEFDMRyVtmryCKFAxX3En",
  "key16": "3fgsrEKA8koVmL1q7K3fiTSZmBiYKVPeM24QDZFpbbvXabxQ3KouwRACU3dTpbHKgb697Ka6biqRHSNuveePDGMa",
  "key17": "J6NvTxEJPzVh16ABZebF9ahVnQNaKyLp4moEuXeb2c2GbZSVuUj6Uy9uAagMsmbUmvVEGs6DBSCrQQJBCjELJkT",
  "key18": "2xFjoFKJMpQPLpZ4PHVu66KTnGQjs7f3L2Z1kv7CS56NcMTuXTTdPW9nxucqBABNFkGyPmAtPgkUeidUN2yGDtJL",
  "key19": "5ctXseP1ixS7H9Jypv8SvPzM93ZiKG343p7Nv1vBZVD1qo2j5HZiYfzqsJEtfYiVWnP7SEztvt3B3ZdqKtDbvmn6",
  "key20": "42UuaoRbqtAMUrw9agvFpfWssMfZS99KL3Hpm9hXdBzmdJ11rtb62Z2bp7Npx3MLkiLa6r2L3jJyqiBUNwDLymN5",
  "key21": "h7fXu6qbbMuDi4oG3snCGMCVCahvmqjhM9ycBCju2VSiKn26bCUeCkgwC2y4eGkgH6GdcL7Xyhm5sTuPaxwZZQA",
  "key22": "4fWj9q3rhxACosUwKHxDi8kPP77WZVBNMePyNceUeEDxNKJ9XuQuFD2eDXbPJD3Ds7R9dtew4SN5G4k2mstmBWB6",
  "key23": "5UZ3qLAY9tEYSo7KT6wGWrEhyurDvbp97UXNo5yQ8FsuzgWSbFB49pa5bm5ATQd7TZPcHQmsKrYZjSSG1nVRpeev",
  "key24": "4UV7raR2XFj1wCBezAaht682K1BxBhpAWkxCQU4ToVqzdtGChd3tgQ5gD55Mdpip81irqM97LdSj8QAiiLYXR72X",
  "key25": "3sdn2udEyLzXncE1LW2TSKTH3zGKiR6ZFfu2Sm2tEaawk2mkB3UNgqDL1c2dVh8HqhjYSQDCCVAUvdCkKKBWKfp4",
  "key26": "5hAEngD795mAWM2NG6nCfeJ3hWmYa4kZXnhiXoQfUbMzT6YBE2a1mtmgMhn1vJQdrmAUhdtauBAyZmcYockTbgqk",
  "key27": "2CpeNx4w5jci5nGzgRQhtyGEBQDDRaZA7krjpJfkW2H22gCWo9SMA82ECHwgMVfvQ5y5azv2XmkdwksJ39dNP9eK",
  "key28": "3ivDR1ZuMFNyDMk3ELqaXevis7PZyneTNRsydtkW9Tb9zbYp75zZUFGCJCa378DrxBdCvGDyseojiHD5EcXGnJ4w",
  "key29": "3JG9EPWSnqZ7bGbRkRSHnkiN4ZAtsT8mhxyXxb8dmJtWeeGAofDiX6V4QtSvK2BqYDk31T2DLRQXejhuJT8Seo6",
  "key30": "wmZXojzbAckuND7F3J9b99oqM6occZC2qY4AK8bW6MPDpyDQwfYzZ9erjUskzjsRCHEr8UVhyp8ar7c7G4pVRRu",
  "key31": "2B7cJBL57jTzFFtRd48DEJmuRzNCB1YiFD7N8a95aM3uSpTJjSF3LGYqhXc7VGFf2x2Nu9yRWNJsRe7SvJp7Q3Uh",
  "key32": "51mfTYhcXgdeuGKiRzbCCbukrRYmaweU3yN4U7DT17BStmi2qNZ9io6DxufeTAnDo9rcwWNpJcQGczxe9bXfyxRV",
  "key33": "iMgwTXZs8Yq54iB2LaQCe6hAgaEmCBW5HCM73WewvYiXQxJpBTQtVMdVHfdWNEe41K3Hci9ftggWHjTWpp7c9ZZ",
  "key34": "4zzAeAZQv7JG6BU6JGLCuQtJhn4a7vQYAn7CG8NQUwEbtoqgWX3JgJPqf58ZksNjMAZaRXw2BwP8h7TSQMcYUtA9",
  "key35": "2NpePtLRE4HHXdmiZqYhQkj3d8EGJW7GxGba8i8qRgckiFhxkSJiX9vjhZpJpFzGp2Vfb93pc45gvxUeGGAAVwg3",
  "key36": "1m6kQG4mSUHGRYfpc5Cx11xPgvtB23KBDPNx6nX2H6AaRfq1nvBXdjsVmNcbwoNPQ2MWcvyJDz872C9XQLWbeKe",
  "key37": "4TsyMfrYdNEB3Q3vwP5wu8Gz87neHtj2bfeMr31QkbFbFZ5B1fjqQcFVvA6aLo4JcjjCwqQmH8NSJ9dvMhJkTkor",
  "key38": "3XJYtDrhXr3PJeGEBub8dM171YBS4qMspYukKdJ7K9F8XXQVCMAL8MDw4WUT3suf8VLNj9d6pPiaMutKtjXHJKBn",
  "key39": "Tpsc42sHJNT4947FZzPEsh6xEmH8Liy4Hf4eGBdJkcH6Tg7mUzA8jY1ADH2pwaYdaLb6DhYPH1oX5cnURRXb57D",
  "key40": "PEJt9jXoqQ3sYPzokQhuX3jdbqMvTfjMMMdEv5MoGw8UqwhhW6XtrdnirE1K3mx4pVRNoMx3jvPZUDFzoCtCQWT",
  "key41": "5NDeWRrJV1LXwrAeZJKjqYgFarhhrg9x6ANP74spiVfT1gzC4bosJ6AiBJDzLnjhaxau9NAdrGMq2s9kz1S1Wg7J",
  "key42": "2Ww6WmCYMLbwgkWGK96uVGwPvMGkCR4oTLwfDknum3tfBhWBXLGfQsjNUmqgXkz84dkyHA4tLaRJACAhfuvrQQx4",
  "key43": "5YLUVScXkauQn6GWGdNg9acWMTY5nhLTEAVym7ubkNzmsUYuLHooJaAAEpusjJfQtvSpS621Qh5vw8UnhzV5AnKY",
  "key44": "2jHEQ1CHQNeetQyPtRF96rSN1yTj34DW6D9u4aP2ssy5RTRFSicsSgLNYyuyDCLCKSrreLsbPxn8MSgQyjqTHvaQ"
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
