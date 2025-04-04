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
    "3nhdviYUPas8nqKvPvqkYtqe2arFXvJYx6WfeqoRiQ77t2qSou9DEsoq5iZGu7yvXf4a8BJRBt2CXeRUutn97GDm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z7ysFLQmCBbvmRiYk5xa5c84JXkghYV3UkoLkxgHYDfaf1P87WbCPEnwPUfGknthcmdzAdctFHsosLm6Dp27r9U",
  "key1": "5rutdWpJ6qN2EVbkp42RUDW8NkouWzJCXxyYz1ZtFN92Yder63tx4neGNPZqMaKBWYnE7ZvEMgqCJ2qtZ8qBkpCx",
  "key2": "3o5GWa7TGLHPW9QZsncWPzakeUZoem1axreQ8SpW1omcGzbpBvo6HgviBCeP8kh3Psv8q4izm4VnANLcjjbHuBUN",
  "key3": "5JGD7gCmsC6LB2a3NJx7dyZcit7gevw6kdmW8ANdtBjS57PfPsQWHcD2BZVhQjm1yKm3Mb5sK27WRbfBkuRq9AzR",
  "key4": "3pVUyXHsvVKsph8rHRuTcxxRv4RkJNv8QDfNezC6LdgEkmHEdpH81k8ja5Q71ZRWbRuzD9qECmzdhqoB9kei2fFk",
  "key5": "2g8xdFzXsKxAY4qUyPQaYiw5KFxw3cdWRCsd8tYGch3UPaFfpowUL6GSPc4b8PRLSez1CmAawJiXp1t6FjJdEAHm",
  "key6": "4h217Sy42hbey444hGL2RcQeDZGbxJsJe5YZricar6JS3MQXgVuXBTeB3GnCzPAjNtzQHzwUKD6Fq2JfCntJFqSE",
  "key7": "4w8gYW6RoLUWjV9ZuggUtXXq6Lafav1kYUDhm7QVGBiofgCXBjSwr8u2PmiQySPX48pJgbbYPYV1fES9hwpydewo",
  "key8": "4c5RPP1TDNqxoSBHp6g2nnMwq4VG7TogeWo5tL5HjFJKBWCwi4owTbHziYnMN72ZxfUbszC313iYyrDzs6eiqkFr",
  "key9": "4CfEvk91BNTm23SeBymqShPnBtBPGFWo45uQjPtd72K66WaPiT8GoLMgQUrjCCjqipg9D3WMuCBkPQokRkakhCA4",
  "key10": "FnBYPfJsFMBCsUY5V7nL5D2GXDUYHHFqFSV1dJPYr1A2Rqq9GYMgrajqR3ZyChE8EZXYzMfpuq7w2uLBngEbBud",
  "key11": "2YpmkVUS9nhXcEFPRFwovgASXWvScTD5YkhTR1RBZFeFdr8u6PM3YwYEFMYqNybEgWNTR72bJcc8Qc6ramZxN9RA",
  "key12": "2kqhNzj9hGvU7vgqvLbAQrAUbN1CjycwkpyT7NzPaNbPbCyatNRnr2DAMUuNvAFRyk3t9NVRQhjUoUUASgcjZ4Eh",
  "key13": "d28LrMph9ipj9QC7SWNxtPkgooc29R6sAgosT2MWPt78Z9ditcLJMpYnHJfvY5tED5LPajTgvYbLSGZpYnV4wbw",
  "key14": "2gBHfjqqKE5sU8dQPF5JZLp1EqR6vyXZoodh7KUnNjQg1gbkcjniouYWopDmLVdN8tVLu9qJkAE5GYaURpTSXYNC",
  "key15": "2sUpK3qT7L76XUtNoQZjZu1HfUBXcKXLPJaCGftHeYcJwkjQJaibYXtHtgbej1MuEJvU1P421f2GaSPqfqFiWCAG",
  "key16": "2LqEF5cAPTEW31Hj3L9MNQx5sxvfVefQf4aUe8R4MLYZHBJ9WThHaQPjXTmScr3h3mhxqHMzZvz3eZBxpxTUpmjm",
  "key17": "3x3hYamFmY3RRrqSLhtj5hjeMjfPSjdmYGWneXEKcFgJk9dTbd8N1BE4wdEqFcvWFjsFj33zhA8Qzs14Up5Q3aiu",
  "key18": "5aPqKibksJmdKgQAsdyuATnvJbrWYeFdrK1x7q6NDwfrVyQvB46hm3j728pFPrjbgHQLsE9SVVSeN4Vn1AnzdrRi",
  "key19": "3mVrFi23HVzZP5sgci1ENMiDyL1q7JLm85S2xUGqAA1WdRdnVEetYLYGLbLhY7CSw1QGfr3WtdwJLSpEJdxC7qQr",
  "key20": "5HQLf4WfwV8zmFkfVcDnsPv2Y4RGw8UHY4qAPiGxF2E4PBjzHNiUTuJ9d7nrGQh6xjkuntQZ6HLQTGTrCfQrMDQ",
  "key21": "XNRNTveFgaS7ktS8fTEQaNGpTDpq8cx9acthoEn9A6Utk9UUDcRzMDW29Wco3cBqVQcxUvCPXRk6jitxUT33aBW",
  "key22": "btSRVL6478XzwQVditYYFgUb9pNbwyM6UT9fsLktBmAJ3p5E4zcfbFv8dYSWr7rNkKepSkznuuxLbofDiiCUqTn",
  "key23": "3jAoSw7PWazEknp2cRx2SaoomftkDFrTrcqqgtWUL5cArGJrWGsRrcyfJjLvKHtsVeCPAdJFP65Cfd85EAEUcNcL",
  "key24": "2aknL1DRDsFLTpod97ts632tDr33LxcB26ed2pczWRKmRZ75LequHUniFmvfbRL2ym3MMmw9jDptF3dpiNNuNesD",
  "key25": "1KrvxBwrFEWKYy9s1Bi6nKJJUhehpmfxxNmHfXx2weztNHUiW9f9Yy3UJBcC8xHM6RMzNi2X4BwgR6iUF9PWEd6",
  "key26": "VxFvDgSMaKwWDSA3wswqiQFjG8s3xxGivHMNdjWRZ2YeJ8iG7XNCMgf7xwyiu687feggrBMQoHi4Fas3G9MLDRv",
  "key27": "eikVobF4R6QoePimhgP2ZKy8SULk3HzeNBkDkZhHWGNBqRt6w7LAcbcN2Naxj99mqNFgjTgna1W8jSM3mbWSfK2",
  "key28": "3gijgytJ3d6anCiSqTE2SNdqMVimu7zm4qcUHtErXVkjU4drf5EqXqJ4bcxbZcBk1qtoRnbAjMBAmM1gPnzHphUT",
  "key29": "43dhN7BbSDj4JiQUxHJ15CBSmSGCGPFF1cS15rEQ7CUUymsaB6wYfz4RJWas9AxjYtRKsmheira3cMHirzbc47iz",
  "key30": "3dE4pwVaQpC5yZfUxc2zXsdJw9ssihCBtZWa7RbYPRUWV6xF2TkGJgcfzYV56nDXBi1dqZdKAtDjWsejgnsAiX5i",
  "key31": "4KP686qW1JryQipJX3YXF272acYPNWRbbJ3Jk8R85w31LUZTmuG1uPAdtKWVg1PwzL9nBJVk9oewc2Qy9VmaPZki",
  "key32": "5UcNEgECz2W1RvbTvoBNdccbpz9A8bfHdbXyLWueN87ZrffKtK2hCH6yNgmJ3SV1Bp12hCmqgkyady5pqdsB9VZJ",
  "key33": "2kbRLBp3LhddZwmM6bcG19cUcaN3v6GsHuQJekkCDwHyZBC6xs8eodaQDf4CVbUgmbRjqG1mJ5PvRznGi8zUzbxW",
  "key34": "227HSzEx7ighHSyWUadBBQfhxYKdhmtSVJZv7DgdBnETx38BDfsYY1s1xiWg6rxdphjv2oD6qKfU2VPLFr3YsYfH",
  "key35": "5qQZtJgDxiZXyXaJyw9FhH9hjDKDRztZtFhczXhz6kC5jfTYsqgYFMc1UieKAZEuAMHJ826M2ygHdNCC3e3uBxhr",
  "key36": "57eXxoNTXrqe1YVdoYk3MapnuwcEVarbcVxMcKhoSeWpiG8UuwhchVCw5Z2pn9Zkc4h9DxvXiq97LKaSUb7bQMGe",
  "key37": "2HFQXdcJP6NHqzr3c2Z1oJtCge81FDKAyF58CpH37sA9dmsVyzrqh8uuikK1jRiBdLziqCNkR7dGWF9DkgvNLKse",
  "key38": "5vtb7NWJxQySJcDYfAzcceKJLCjLUb51BNuYWnhFFrhFTQmPLnATum6zFtxxaRHMPufqDqQAfRP1v49SryV93M8C",
  "key39": "AZXSrXJmM4sxBu9PvhyXvFvR49DM6cX6XfqEqRLeQZQbuFtpZJewbn1U9b8MBKWZvXnKbQG4RkKU2hRsMB1WpuQ",
  "key40": "2yittKyzt87tcnySTo6LwwCzqUm8Ff51yffCsFuA7Z6xH5hYqDhe3vJi9ZVtHNmiUwZymhLZYyrmnKRjboBePMiG",
  "key41": "5xmHQ9VG77qE7mtsCRr8VNjUUP758DxvWqmJEWB5x9QhYJzAZXMFn23uq9hPqtZBqora3BYVEAiV4cmSHTfJ3ZHs",
  "key42": "XgWFt3BVe4tAMkbGD5Ah8qUdEKCvLguMdcevq9umP1QzhvRxdXYS77bPNDB7bCJXndd7DG1abg7zaxig8oCW6bY",
  "key43": "43Z2BfTGGpPpxzkcqWMtadCzGhWWweMXSKqTAhYna8z6vg655YeEKsAP83rmWCR1m51FJMsV3y6DjVR5jfBoFWk3",
  "key44": "4mJaRhF3ZgK4A8wZsDuypAjzDssyzPqAL9A8axFGCTyh9kc2u7aNuvtNCQ3dZhKyUxjKVoevVazRgggADBffjv1E",
  "key45": "5u22ZWNUzMayhMALSapWiiBigJTuaY7a38SXBu4frGSFPAJyNTre921sCpMKqtEqQ15jq6Ne1k12YqnqYwxdKwgq",
  "key46": "4SZ7Hf3grDHwJDrUqYUBdejYskDtej9esMsuB1zYPEZRBywk4pDXpsFXLGWhTBBA69Ebhv4QD4cvyMAPooYrUQnX",
  "key47": "4ppLGg6g8Kv9QhtCX5Hu7U4gBdiWin9n3omJ9huP2GiqEC2NSDkijTbAncsCZ41yPZymwRwdzEUfRQaK3L1bJMqE",
  "key48": "4ptFokitifWQCaAeaJ1gCjATy6FWix59gsCbcD1FfXHoTadt382SfkSymv2wkUhAMZeXM6oz2aeBkNWvz5iEegjC"
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
