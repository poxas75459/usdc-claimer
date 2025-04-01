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
    "3qdv2rSSVh1L2iekTpzSaDaAEBYJC19cPnVk9Vubx5EM4RnRKjqNwTkzPBXj38FPwEbEbhtWXyQKMRHXmqSLxLt1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yZQnY9Md24d8nKUMZ7XZriT7Pf3AYmEQPKhn4A9N1PLjHp64aEXJyj3WiYyPtckQmvfarGwk94ZbyVjTgWWn77G",
  "key1": "2K1yjxmRAXPn8okb1kzxtd3FkdBfK6WsC1AvUoYGf5rmHNKri9B2dtKHDVdc8z3Rpf5HMkqxWe9Pcc6N3VaEcad1",
  "key2": "kxiLZPgtcnYLKsaFLPhVMHMz6qU5ducK2hQ1hZtd9kadK24uLWCc48JbQpigVC8amERt3CcJtfXY5VxW224vHgL",
  "key3": "5a2cqwnxo4pXM3RMGCHAQXBJMA7A2rWyAoxFin2QpJ7N8cGy2k2HP3Gh7wNhDWa7SLFZHjqqxNt5g1pdny5X4G6a",
  "key4": "3zY4XNKoxhUqyDpBqdDvq9aaSvWP9JQgunSuh2KxdkHhrBJzbAauEKHUWkSdt1iKdSk8ydKALE4yomsCECL8BbEh",
  "key5": "34L8F6RGRa9ASExX1e7SJBfVCwR3bhvL2vM4mywvFAs4AtvY8raxujokm3eYHzwPKuAVwYs5wJQ6UXuSeoTyRYu",
  "key6": "JLKvyVSMVv4hk8P32hqBaopVmGemqAjMBPHbZMtgVkNw9zzig6xmv7vRk8uWqwNJ13x5b2jcJ8ziHwda9zYvWxt",
  "key7": "2z9fL8fqj9VK5UdwxwHEkiYhnxWjet7mxr28T3V3nAy2XSMheHMEGtk4YcESvP7gqUw92p9TryFSJn86okx4wccE",
  "key8": "3vKxcaLVyjH7akyRmwX6U9qURLWTR9ZCwpB5jgF1uK5hvJ5dwsokHNM57qxkNmJ4g23osqpJDiu7GqJyZRNtts83",
  "key9": "4yVD4zstG6gecA35pLcVwCA4HuZzFEyisLo2JhSHh1JtyKTYevwr1ogFzkR8wBivJiPdMkxr11ybCgMrmbzyEch",
  "key10": "NRgK1KGSJKsAoafSJXUXav18G6k4n52NNtofeK4Lysjo6WtNPkW6UAvBbCrPstMHYAMP52v5NmmgpGmJkcXCStN",
  "key11": "36TpNZD1nghmJSKeD7ZSMjcaoCFUd4imfnmYU7v7VRsC4piotiwFfHNm8ZUpBFKYtf9oSYMjV4FMALcifWGfE3JQ",
  "key12": "26MmAppSXwZxre8Ngbyx57mNW2fZmQaSVprkWRMwfYN87dwhLyFvq4GvL6BxPiMoiso7AKNL8WD9Ta9Pw1vF3cfS",
  "key13": "5trntP7jVrEsQsmrRcS5ZEky2U7ebmPjsctZTfXDEofe6WkkJQVr1FBuB5wovzfcuQb3SMrKSfLJLD3u33x4q4V4",
  "key14": "2UA1EK2Cd5GAomjdTCnKc4MUv3WgyTi34AgWjZ1FFE897QMB3PoZLNS8fdCymfhHTjzAnu6yYXqqAiYm4deDF2MM",
  "key15": "3GEeEAn4e7aTjn8EudMAyauEVjUawFaAk8PEqQdEy315QyGLN3NUZF4GBQuJQQUA5C9KK1jepgeDBjPEHBoVWQy6",
  "key16": "2PMXZWx5zWXNdTuxSJDH5aZe8nf4wo3qmxq4A3tt8Uq424pYxDN8J1VGbDwPPV8gLfq3PgcwpZt9rGxf8ioi4eZ4",
  "key17": "2qDqkDpXu3EuK5V9hMZvuv7naCrNB5MPG7ykkD9PfFjmBHV5sesZ8nEJzjwSojemUqWR9vWtiaXfW7bu6pAffn3D",
  "key18": "3y6shjKBmu7Ed9M2HPEZb1sEEn4WsAH6NbfzirztypQMn3Wdvkk5MDNr64xcC4VzyTz5nQF6vWtCxe14SDSGpp6X",
  "key19": "5hQujnxwFCNHEK5vzPEbVttCPVVENuF7U5BprBVMRzXmABV4bU7YrDHbabeX6dGk86Zrv2pTc93YGQ8dzFN9RjAa",
  "key20": "Asf2pGjiT27DduiuPNS96DL91CcAYusmfg5rATHdEE3w7qkT9NipW2YfhwUyMYNrycRB8wxZdQAjcp6SSeiwm9Q",
  "key21": "34danDfvVfsoks4zjC2W2mwW8PMoxHNJrAndG5J2A4CqovYNofUjKPcGJ2fmZx6ZmeQGoh833ScEwsWoJo8KoJKJ",
  "key22": "55jUW8KioJPhWWEUCEfkBEwxD1FSUVpLZ9KrDC2beSiMB4Ev1UotHkQ88rJ6smttXTgzjwqQ1r3Vt9GUj9jap8Bw",
  "key23": "4RrxL9WcNXwnFuoubUEpXXBL7PtEZF1zvfNK1ZK2yWYEosYVGFZ2rSSES64RvTk2SXaz6tfgJnYNDzteuTGaAb6J",
  "key24": "28rpZgNkV3R6DznA5sBB8Ku37c9sVqzvhXzkYLicUVEKiUjQYM728bREXCWqYnmCskEy6aZJdestbceRKSAYh1TC",
  "key25": "ArFijgidgB6upCHQ47PpC9KRuTsW67A3WYYefaBGQnzxbVHYQPVw2weRsxwuH3XG4K9LR4cWstRHH9LTMAhvXGc",
  "key26": "2E1Zk1eqQ8AwiTtBsXt3mQerTpp4xHvHwZUxLkoJQSiiqmW7FARNbSNP8kaDPKX3hqh8B521vKgAKfxZ5yqbbY9h",
  "key27": "2rz7qyiyHJuucKj2XWkKrg2KHyv1xhxZ5hoV5fSG6RZhDPv9qdVqrZTnuyDPG1YsNW7mAGz2QkPitC7SZknJT4Ty",
  "key28": "4DtynU538rrHZahoa616JMJTp1vduJg6YauKimbRCDmbhwskgJrJTSW3E3UMxAvBFNLxcc7BFY2CYH4SguSuHubY",
  "key29": "44SMK8u49hDEyvxziu1B6QG8Qtek1BsHts5GUX4aTdSjFdz4GeWhpcbfH76wtD5ekQJypyEzSq65VcEfipFdbWyR",
  "key30": "vJFd3zxN1xzNLwHTYJjvJcFD1t5AHZtCc17xnVrUew3MgEW7Z6aunPBML4Yxx1qiXNSX3eyszLJDd6KG9kFLTKR",
  "key31": "3ZTVG3iFggBQ5Q5XWcadapqDFT6PiTQeGCKKjB4SsDCiSJ5jg7M2VRPbC21KLkWFcFrmpukFqMvdFsbZiyeL5nvA",
  "key32": "64yJCg5bPBYSwULX6yUvnG8y4P5iFqbDfwkN6rYFnCRasW57ESp26Toeqat48i2ZBZFNxR5H2ZodMq76z5s6CqHY",
  "key33": "4NvnimUWXAZmzjiQts2gfT98UHZUyN5kyAJ6jhXqxWo1zKytcE7Z23UxfVBaDytivQpAMZvfV8Dybw4Lb1JxduQP",
  "key34": "42SEdm2ePGdDSMYpSgtAZZCDkMu7f4a5xUfZxDHyZdLbMpBmrnPeGGBQLvex5KHXrb7sKwoSs9ThWf1kQnDqEzb7",
  "key35": "63rMoyF2fWHyNtADHDja11WRjWUpe48Vwi2AzP3BdrqVATe1Za3Hwi7ug7t31kYQfYBmYxa8XGJp1aDEWF9F35mh",
  "key36": "2mcpkfWMauw8b7uUFKfyYBRX6hi5vVWNvnbv7598En7uN23Cb6SZpKMZMmLngfcpAthfrNCCRbKZPsWVm19Zfzdj",
  "key37": "4jEdmqdasLXPTvqGhf8SvSFrusWDG3B2AAH2Pdf86JbCJmApuuzu6h8jbg1FRy6dfMgKjYMVvhGSZDjyvaNc67aY",
  "key38": "4UoRznAePuL7MZG249RJ4fvyZCcbv3oPEFBZBu4dtQiqY1TWwGwqCiAfAmC8Hmky1Vb4JfEXaFcA3sS92Bqtvz6q",
  "key39": "YXqfpdtwLNrS83nVtfTujRV829SQxikSg9abBQLgKKBYqsibrTYH6CpDRmj41CyBBA3q2btFSUdaiL6BwPed5zn",
  "key40": "58sEEY6p54K3q3uTc2MmcN4Bu6R6D3oYH1tHawASRG3eg8jHzkghYJde5CtqKB9vyEEgcAg2ckNo2NAeehkNVGJg",
  "key41": "3sCw36ScHnoZvvq9DmDwCzLsEW9pzkpyNBf1FftabzyohfeHKiB8Ss18c5d2xkwFfnxxVHRBp22MCmL2M8SxVkW",
  "key42": "TUY36gh4pz4eQfYtm5RCXYbKXTVQktDdGSfbzJQ7UZv4VtoTu5Q7CdDCdYt6Q4x4GuF37Mfe6hRrvTHzfYnLecF",
  "key43": "4yJbDhw7ByBUShdueJs72AmPqNX56ScnQdciMXUtpR8LaUjRCepWCXh41hPhorF2dujxvNHitjnDX947fwuLbW6M",
  "key44": "3QPJ4LkLU6Yv2F9AAk5b1LGtFWEtGiC43AdeRPQFmvbWhGPzjgHKP7jjQLUon5As7Hvs2Kzyc336LkLeoa7kFMAb",
  "key45": "5pDXnHK6Pn5acnAGbVKyKmsubHGid7ctxWmHhPJNEykemjQzrx2WronL8QAQgBy8m74J3nf4beHE1qwTqiMnFcyv",
  "key46": "4sVAHr67kk65eZJxp24ytTgLTef82ph6h1wKuigTn8zXZwB6L3BnJDN7NGzb1MmiQmhPcyJBM9CwjEzaEurWcfSR",
  "key47": "2gmRL2Ajf8A1R66jWXT5v467U9WdMpT4z5rztbEgLD7b1xvTBP9qh2L3vDH3phAnSnNzrsgxWJ9mZEqevHpHrCFv",
  "key48": "5L8ekEnuKi1YXJJHsNWhTutLxy4icpngmHWDUB4Un1FFuyiJ2v12p1Yty5bBNccETdXkEisDvbQX8xFQWAcD4TVw"
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
