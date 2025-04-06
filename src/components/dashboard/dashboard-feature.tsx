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
    "2spGimQT5AoyAUGEKob4nv83yoYDtXju1wj2N9ztDrtgZ4qmnpWVHwENo65tjTUhNn1JC6jhdw5GULo7XJsc1Qd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o7vGJH8mcACh49aPEYm2B6s4LiFYsPpaBG7zfEVd4KvzwAZrAGTjXxpRYSXYf4zEj9j4uQnD712kqppdWPf7b6d",
  "key1": "36ffyzQgQa39a7U3NnZhuPBQbX1t2Lwsz9NbaCw4yA6gWF6ruyKYBQhDcCduoBD9qYCo8dCbsjyRAU2CEme5C7VD",
  "key2": "38T8uNDyktvcFftakbxkdKzNrARggaV8Hkbzma4T37HMadfg71JSobqXdvuAPPyPK39mbcQegbNdXWG9wLdBgfJL",
  "key3": "3Wzkk6wEwDi6CE5SNAnTNLFfWtfycKLsYv9SdWADxpWGUHDhw48BV1gk6aTWd9weHWAnBDvqaFj1U7DRzhqd2pAF",
  "key4": "2A466NPotsH5usuyG1xZZYLh59Cp4RMEwv4rb7azrFDHYtgYroniTnXKG25PvqN7btWrptuS7ojfNgJcJC59TkfP",
  "key5": "2XhuWT1MXfCEZcLDjN9QUa3bqhWxuP9o5iZvnwpp5wLWfqSiZ35r5guoVD1G3c4JvJTViX8asxmP7aMB69LT5fKt",
  "key6": "zXtPQXjZF6GVr8c1EL2u9RTFHVP4YAth237Rh4B1ZAW29DkJvAWbc2FaLixePrc9FyQ1iPJGceYyjyfo63gxfkK",
  "key7": "4mYAFnNs3hk59KtnfscoAf2DLCpokpJHynYDikbPUZmMitkDqLfqdxR8TfCeYz3P56pfBdRZ1Y21NJLuox9zC8jT",
  "key8": "5gHAydq8jiQfu8W6a5oq57uKhiGdzHjPRTnKJNPXS7rfrvmVMHEfcckY2Rp8iVR1GJFwPuMtQvPbWQHypc7cMrHB",
  "key9": "EBBPzPuX1QSn19vWYV9kTKpCXZdRtyHRnuPo2tAwKZrMycsdw3zBCoRhEvfJvyp2tFstyGYWPN8RmG6mbVdK7fN",
  "key10": "48Uzon1BAJJri5vDcnu26pbrP5JCMF9y3gd4M5A9v1zoeZwqLN88dqnoLfkoGj1GQpT9T3syhNbuDxjiLuNAxRqD",
  "key11": "3E96P39dqPAAqrZtHJNyKDLKyzgNDrb9MoHMRKRHEqjtiGapxsw2pem7Li9vehM3M11Wn85XbHLnerCqjhNGqXve",
  "key12": "3FxJGT1iAfstT5SKwQhCoSmoKXriugeNzBCqaTeddgtAsXL9CEkqkHoPN3rd4cGybS6Xuh8FVSCPVU3WxRbknxn6",
  "key13": "5hnzUKWCPyJrSb9BA2VsTkwmaBhS1DPFN2f9F1ZPPNEybrGhu58cJgrVNXoPu7GSTpnMYrvRVoaEEtiY8vS8t8G4",
  "key14": "5Qighy1LeM7PWS5Amqa5bGeKH45ShyuUBqLxcaEvMjpqfLbxpZ5XSFsDS2U7x4d8a5Vdnd8Y157ZLGy8DreUgJyg",
  "key15": "3gfSPE5j9zJwrK5vHdMefwv8pCWg6X53YgHnqWC3ZMr3G11FLUaGiGRDH8m73MgCqFSGuj9yCzsPqRMaSx6C8BWJ",
  "key16": "2LHMGcUQqkF2JdVHffrjXfaNKms1V7LZ4J8nkjNuesBpGuAKHoDaKFe8i9FcqBVPGLrNebyEcwAG1ukSuNexYAVU",
  "key17": "5Pu9GyyYcGxgnFqjwxKdwMkeKfwckmk1kBmW3HLYB2QohDtTHjf3sTmysRvPL88CjvP6HkkVTp8oTGXCFTVQngrV",
  "key18": "4AohcQRmRHcYzMa7Szq5jkLag8LUZE8jkvbMaD5oUUbLDPAQLyh5aVnEo96hHaoDApgXp5HrANsz9MPAKnBBih2x",
  "key19": "2xP77Fz475pEyd8bk1JQRf4tNatQjgQpL3C234L57MKefvvrHrcLidQHY5TQ38NSry6CxJ9x2xHkG9oV1Bra989P",
  "key20": "bJssPYJiU1KqHw4jBSNDUm8VbWHWBqrCz84A9M4Syu3wqftKwutDLcVNE1Y2jsLQniDQCjAiq2mJ59wt6hakD9q",
  "key21": "2gqzzPgwVyog9uYVDTZ9cDqq8GrSZa7J5Ehub2moqsB3qceCum4ZzLxhvA6hGXn2urzhNZuPARedqqJTsskVihtW",
  "key22": "4XXoZrufTXF3gwTBymTrRbcm5R9mcD3p6uQYDae8tziKwQ4FC1RDANufyTxUy9fvKCraEGfy4AMCs8hcTdnMVy6p",
  "key23": "2HwgAfX4C73Sz8spwRfmGWjsHvnuaaCqfpbonFgFjK6Hr59YGAoKfNaL9h4VsQFKPNqytF22j9QPoEQw7Q1T21Uu",
  "key24": "5ZN69A22qxWS3swpxSAREd6hrhiwNkjAeCE4jWiCZJjaN8YeAejFeSqNX7tzme6Rt7w6GoKG8vRDyhxneXPyxVdL",
  "key25": "5PReqMsSVTT4EhFzRN8vWAGYxjxHtzPCZqsArGu8f9QTv3iASVPmys5q6c26gQspGzJvBQ4nbVMDPH58BevJwGvr",
  "key26": "4Edp3LywJoML6JaxXpyN2xirXxnSd5kg93GJkTvrw4ba83BTx1iJo7NC38tyw7vJ1JpsMQ2STAtm2w8vmBqQudNJ",
  "key27": "22aERM2sefc7PJmQXWtAWR9p3zdQUmjBZLdHrzQ3Qye4SqVDwhD53VAc74M3DWYBUmH6iTH3hxbty9jcyeE961Kg",
  "key28": "3yf2HYMAm3ENu4vqFAfxmCVHExNXiXDsqQFtuKiu2D8NXayZkMCWDbboYBLKdP1oWvSxFtqyNyuwpYyuMZi47EVv",
  "key29": "2mdgFir9qNkRGRWAdxJcHDBFNfJ9r324DrGewi9NMSeSehRPUL5XHDNVzsVSZWmrpNFk7XtfS1L5AFp1kCGH5Chz",
  "key30": "VB18oV91pqcvqYQEB5gAqPdvFgJsFgSB8UUeF67znaDQXY7xjKEvJgEdRMciwYu5tceXneCEbEdFCXSx1ButimC",
  "key31": "2znbdPVEoC6wCt5JonxxwkPe8gDvha9mhdVPgz8itjiUKnP3hGAQaBGWehdDwHDKiRx8h1Fs1aZ1ZRAGq2QRY1g8",
  "key32": "5XP6YmFKTWGUXtHjU5dAbqCpHbuq9gvQyfKGXNpLWAuco1fa1fnDz3wXYYEwVErC88MPzNQA8umf6j4dLpqBFXAD",
  "key33": "5xscENaNmo1aadYZo1Ph545wwzVznho8CW8JWL87yAbC1CvQRRMeJx4tbpRY6m2uqNrbUiaAzRxwbEdoitRKT6fy",
  "key34": "5ZaiXTjyx2fj9LciUXxZMQHaLdc7YBq1dScWe3JvSDWCiq1EL3wNckjantav73Xf2xx1F1tVcZzhKY9NKdZUXMDT",
  "key35": "2esXXuYfJc1bdJmzcbSbBWZYnS8tM5UQotLD8tpZZCbMPxCgENWuXhfD4F8dvKiiveDicXLMDyQgKVsvRmVTnhuB",
  "key36": "45bf1AUGfJN2UwK1Pg3F9AnDqej3GM2vsnYNVGhhupz7wmkGQgTfPsxwCg5B6Zqjc1Nq9BZF8jbhYgpdhjoKJUrR",
  "key37": "6tS7cX4nMedkoZ59JGjD6YHC3TSjQFsjCWi6SejanF9xZa841enfh6s2Z96qKtX1o4eNXfy8NDWpYJzFZriCbZY",
  "key38": "3hbtBa9935h1HmzrPwtSRy3o9sD2Au5Jow683rtuqZbKBw29c4WCj8tGMC1B6dFfxzHFw3mrRm9DvDExWDrW21TE",
  "key39": "iL8dCZM79eZYSpKTBHdmBokwtZAC459dWL1MHn9hYXLKn7seH2tqPFod8xgYv9Sutd6hVUCtC8txuZMxY8atQSb",
  "key40": "3ot9obViwaGS9e7n1WffZEShTMknAEdyH9mczdQQ1PRqyL3EqGfoRYA37B8TRBYW9yq83UVdGiJxSwMNGsVJN15U",
  "key41": "5NxBLT5y6T3kqvz8TnpRwT6uVW7KvrYPQnLXqSxF4Zvamb9RsgBbeqmp7nZ75SgKZyRwnR3UYFzCEShuRSH483uJ"
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
