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
    "5Ldd5skwgE55AW4qytc9YZWFdswhV4bt7HQLnyuYuuAGC9ESpch4qnEzBUwa9duHtReFDs8PHCUnwQPZUUwmJTaW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E24QnRcnKNYRZSW11KQF7yBF7FjF1hKJdWyhNJga4qxeCV5L3R7dqXe34cAu22kSh8Yi8AZg2bwUzGR1FeWNRQK",
  "key1": "3QFHmFM2EsoSyRX57Lb8sfzn691ToDdCRWUPAVHXBeJVVAswqsaEhBeABoF6XsCHD7EzsnmNuEMR1RN7KFNFGrc4",
  "key2": "5Z9vXgURCmi441PHkPRhcgrTbNbevJejDuHCKbwsDgUBfztAs7gWfJSJo4KyWsrt2ovyYhBebdHcAJHdMR24xAqv",
  "key3": "wkdZVwLy6U9XQdNzWgmQYTafgiHNGkegfUSQTrPyLvcuYJi7Mk77pPiZfE2ApS6DnDfUuPLhNJvZw1qKJis4CUe",
  "key4": "3qRHL7CnYTCVmbtF5Rm6VbC9UkY3KrZVJYci5a4vZNrrf8xX3zEhR4xTX1YjXpxNNoXxHYtBG5zAvH8nh5J7e7mf",
  "key5": "tbYiLj7jparu5BwmN8M53PqDFCqBWoaHEu4xtMnCvCQiXyQwGnP8dDfbebLWBRxbDXvAwvYfBtQLi1zLGpWrDTw",
  "key6": "54AWfCXagg38eYcmZ295RsEZ6VLUhJQ4pvb2FHEsM22yVj3NTMkCUt5UzQvmmRXj1ndJi8nV6wcJPCkudAgvqM2Z",
  "key7": "35wxQjBaCWsfCMj7zk3e6eP8ugcfNnjwyepqqRZSThJdxo4VcRWxADkdYx8kz7qMjUMbzSzV7P31dfQRhDokuM2q",
  "key8": "TpRpZRp7mXEP8pVn8MPdMXZ77GTpWjB7A7FiArt388HZ6RYKutdk1tuSo9uDR587t25nRL8Ui9aASFaK9xGRnrv",
  "key9": "2LSRhorUL3YBHTpV7HWgpZx3ByAqNPqFmE8HeVvDSzzoJzer2nKp1W55HpeeBy1WsYrwMDN7CHP68sZ1hrxjT7MV",
  "key10": "cGmvjL2v9GgujbhAx5GcQhfM8rF7jvBPBCLj7bG88hzjv2pftSQfvwg16fvm1fUc6oaFaxGWMJspReu4zhYCShU",
  "key11": "3cemuHDLd7fHyhBfaYZdB4D5rKic5sUKmBxaxx7soMR8kds3wzbUcbnq3EDxNETHDww5uUaRFo9KamdF11Q5boJD",
  "key12": "4nwDJpaVWZUfdsTa9hdyfXKYEyLdfvJ1zS73TSRLJoT5J16qFmAoDTmBtYuNAU2Bq3cX8vywCsAJAdbFKYEciBGt",
  "key13": "ncTBEX8abgAZpm22A26vTfSH2dUSofLLuxg4pXhNEFBDJbV1rZUtToJUp6AVuNUnjtrD4FptEG3Cq1mjGamJgu2",
  "key14": "21mHaDGY2JT73Xk1AY5RH73ob7rN1BcqsZi3wf9aDZRCBMDoPBMXkN9mJPHg6myu1yimbD4etqifiZbTpxoEPsze",
  "key15": "23TRrM4FYbg9N19enyacXR3cY1HQBc65oqNRrLwvagKnYERZxCZ2jyXUHVRDoRMPLkehRaH3ir86oRgeL7n4Hd2g",
  "key16": "5iqAigx7cChs8Ri2h3vq5hZBfEfyrXZQ8yZvrXGMru4kYbqv3tJyJvHFij4ewwvim9XSPP8trMeuejHHKsTu7H65",
  "key17": "kqXH3wBHvAaNWBLYbVrrKyqDPmoev3EP5TF7BbrUdJqGguTQG8hLHQDJDb68LFy3icngecCqC8sjJ4FFhcizHut",
  "key18": "2drFKT5uTEV8buc6aQrJxmr61VGSHyuGgkuuQRGuAwv1aYQuVspK5Uhofqoqz2ZNKKf7dGrB1XPTh6RkCETfzoSt",
  "key19": "2DH9csF76oJPnXDr586MTe55bRqysWhvfj1Ad2C1nKjLduY6u1WPuHkxmgyFN5zBxVcD8fdEucqxYmzJiVGVw6km",
  "key20": "25UC2rat4mk1H5ENXYL81YYdVkx6aTvRHEq5WhUWKWskmAZzhmGbGzbxYSWjakWrmcJoqk774ebmH1HUdotFHs2W",
  "key21": "34xyxZE1Qd63UfUwpn4BbfjhTurWyMksSBsytquUraCcKrGS3mNB6GP6gVR8v9yPsTJtFQ5XLgFDBRP4rFoAMcZp",
  "key22": "5VDL8Ps1MnF7xZQHYi16aTt7Z9sryq5jVbg7nZirccNV4QVp9M6Dtf7JLFumZUNWQheFwJb1TQQBiarFRivdS8X1",
  "key23": "3tvyrfcbHfBbkzoZwpJ3VdcA7o9ZgksFNed39TbPooFmWiuM5fzSDKwoF3GsXhymfjf1btXoQ8R7GLQqWJ8BawMc",
  "key24": "61XsaC6rwdDzRbXDLaHdnnznn8BiEwvgs4DuYMKfjRgQuXqypk4zK9uXzqMWN7mjDUd9eggN5pKfpNJsRdbNutig",
  "key25": "23tKn6FFh5bPHL1R5rZPzkHjfBhAtSC87FqpxtmJ1Cjp5ZLBZ7u22useVKbcbBsvAG3p86XQuNbCCywUzTXzseEN",
  "key26": "5x1Tms1r5ojchdyp4y9E4iLQtdQW6UVq7TdawPS24deFjMoHWeZmZjhvcSHrDbPLovJsa2JDJurzDRhxufEVTG4o",
  "key27": "51G3GQku6kxTbxfSwLSkufJxZ86S48J9mFcbbDfVFEp44tgkGLYG76B5ngGZDKtgLUndtkZ3Fbsae6Q9v9V37eRN",
  "key28": "vnLGEDaW2RQA48Wthg1NZLeYfykVugspzjKKc4S3SAzyJM4LwQhpFdATUzgWu2tsnxaQPWp1WjkiMiPmw2Dy87q",
  "key29": "EnmfWaaBbuvL7qKMyCdSJDLLGfmckhWeH6gqFFJS814hz12dKcVGheXY7NV7WVfE7YFUuizDEPPuJPqBYBD7RoD",
  "key30": "671YfDApxprMckKUMtAwrisxQ2P7nq1qZSWLxgS8bCRCNPqzcSWPCgeBfdsHqRvjdx7euwkEJpzQbytxrivb49Eg",
  "key31": "4oQqEFcjqzY8NhgC1VxnfV3MyAjJRDvELJBhK6jSZoYXjyXxscLEJRsJsqTgX4ZDmMpCAMaDkmjR5cv3ssBtyj9G",
  "key32": "5BcZ5BXiJnPuCzk8jKG3bRDm5fLJrDrio8mbfGwiSBsJpfoUfnukDHozFcGqiEsv1XvsmYF5iE5Xk2sGgGaSmkFi",
  "key33": "3jpwhFZ1HFF4DbMt4kNmnc1eSwYaDFaPGNKcT8SZW4Ry67iyii9ufdKUHMNkMn1zZihmErDdCBK8JoqUiNs6zvcn",
  "key34": "3i5hz5ACJZ6warVDoCXzpi157BbNekiQPmFfZ6thUQamds1An61b1fdwXDm93RhhDPQdP6QtTnzaVyogRkweYPSG",
  "key35": "61VWzozhRSfCETohZt5W5cCW2jAHu38vqCgP4NxR1TvRd3JpGS42Uh3RywEqSAh2N187iFoBEfqWUUYamXeLLG8J",
  "key36": "56G4hS2UXCbPF3ZTqRMtV7FZ5VCYPkPwQZMNkd4bAuJF9QFK3HPe3FAZptsJAnfsNPvnLHTfZTLhrViQ67APD1LG",
  "key37": "2q1QokwLbKS3XgYPQ1PxoifQc8rjRM6q5u5YSj67hER9SajKrVYeqM7W2iLJJiqCqwA4sYLBL3g1Rx2avVEW7eaz"
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
