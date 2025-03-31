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
    "4AvHBEw5mmyuLh4rKCENxjALAUU5driXPMk18UavKDmMNPS12hmgjwvE94ET7aDHVJCZaDtznARDJkC1Y667xMbQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H8rF8FmwqdmZfdC5gAUsFuYXZi8FDSWbsUg5F72CXFxh8oxhecgo3CaMzPtQw5YBWZ7AzCe8VPCtVcpBSVbkdAb",
  "key1": "5CBMErqJmrobyCCLigXrbn49zid5yVdzDVtjwzYHaFbKxxHZJESMmuzC1rrjgCE6tm3KbQzPoqdKZZKWKJvo15Hf",
  "key2": "2vAx5cTQ9N4ga6SV147Zk8yMj7Xq2B7soq4PEuKN4NYL3f93SGKgUALnb8njxvEPpgi5Zn6NgzL7JHNJSPrpmnBW",
  "key3": "GJvR8j5unnwfbqA4B6oUUbW6RZWonn86o8J6csqjbmC27hXXawbtj2kqkPQ6Hk8Xj6J96JwVyUX1mrL2DpGMiYw",
  "key4": "2u4YdvpfKNcAZBJMwuvQpVLk5kTEN5bAGactoJcAHEVRZKb3p3kYzdkZiNTGwjDMjn1C8fWb1aM5FemE3PTmdC3D",
  "key5": "eqinoSsjtjSwtwxu2WV13WYPbztzJQgKsEZEWaqDx27pDKpKaYCA4YUtDJJHoUJLdSq4CqvnQmWksHu7qeD22uq",
  "key6": "we5AF4JZqu5ywnF4m4gzSTvzZ93AUqWtiyK8bwjNfTXr1qFbrwNHE95QxeGXdqMirporEA64pC8ZPxk5TxboAbZ",
  "key7": "592GZgmrj48Pyac8pvKwpdpNuf5jnzxJtGW2EQXdUk3CtqQB2gQvPKWzp29fVrbqddNZvziReCqpcAc3zv58MyaY",
  "key8": "3Vo5RtiuUCjFGxKuR5BKkPD8i6K8CZx6g3GeXbT9jMJnckfatQcXswhjc9AjDy7aVKVQ9xPyWqbg7g4ZvxuKYzg7",
  "key9": "5BoyThSvxy1g6TobJ4mrcWshEb9YVT54MXrPT5r6KnGJFta4jjf9BmbadKPvrrbdFfGVFub4hxzHDVGcWqJKF6RM",
  "key10": "5Yg1FnEiVoC4k75MEF5YZiZvjRopJirXsaMAu3tfHAesihSwdyQzRH798HEBmMAnpdPkcLxGGQX59YNorikNifmu",
  "key11": "3i2jcKYu7JgSCRiVbKnyfb29bUdQDirYqvFJJbVbNhsYhsQaz1gKCEivpULkbT7gS2XeQdd4QMd9MmP9YtqeTXfS",
  "key12": "qQqncazKH2E1dX5VaLWEFnKHDwCW2y4gcLYTwLxSuV7pDQpfkktXDvBrS4aKPAhJ1RUUgBJtpNvtrsDLPqakB8G",
  "key13": "oFXLtacFjaArtDKpyYV5j6Uz4AGpRJQdLqjBebvFpyWL3PD6fJhRXq7brcDiGB5bv7SD6sD4bUaits5pDS9t4Bi",
  "key14": "2gFpZwJgWxHXUqKcuUp5Rca8CxmM5xJX4xFsewkUby9kJkDFHzz9gAMtQbfsVmoRCVaM2vGQsSP1LwZ6Xyiu3bC4",
  "key15": "5EeFY2AGyVCYAyHZBLoBnQ9yuoHRwTZQbJJbDN4i1BPwSsaRBw9BKQpxtWkWsNC8xVpnH2ZQMnaeZtD7ZUeUGwnh",
  "key16": "2m3kSkHvz6hWvtXmvmtKXEsNBDBahaZ9TjseDfoz3GV7ddPndwGRji4GoWPNxN9G1AVPATwxGmSQ5Ms2WA1jyvTV",
  "key17": "2tdzLQazHjsrQi3U2MQqK643ZqKKC8sDBGKg2XMRhPE9oqRistyrzSiU7mjqVuUSYbFCmRsStnBKyCnKRiRYPd1P",
  "key18": "4Tpy6vzqH28XeEQqvap5sv7JkBm3vRRsxv5Le4bMyAPX4pMHcmMbWofSqhLJTJPfd6VnbEXKmMNqPN5yQiDgvAA8",
  "key19": "6GV1jAPZY38Ha1eiGqrsBWekyU6GLwC5eHE1y8xj1G6LD8FwZC8G9U8n8dCQ2iKFmgaXCFMaExPz8LLsbLYW1as",
  "key20": "33EH8eKxwPnezhQ8R3FcQM18ZMRVjY5iKxfbaL1C9qMxaJuDZZcUSo4BHvEz3irehCy9quKH2FaSc2eAE9qwqpmr",
  "key21": "43S28UtaPKBvFM9jXNRiSfvQVnNd4wXkwiQ1nAM1QNMqaK4nPCd9oDxeuNXk3nXozzayxbqPoHmKgaf9LA9hvZqh",
  "key22": "3BJTCGqjmEjDEqyL38DHsJjRj6MqXHQg1aSSw7XK3da6ZDNcBTwXeN5SMMJZvhyW2XeXFQRkDE81SA6kuRCfyxb7",
  "key23": "L4pcXaioVsXh3txTvnQyNKrmoxfFDZbCgeJ9oTnXeRjLsiokdh7cDYKNZbpou6imGhrmAMgGwY2XWfZXBANXvSn",
  "key24": "2nKunz6wBdy6K5Vcsepsebkp1TNKjssxGgWbQM82QoSYF9emomTNzadJcdAdAKCkmFcBWn2uZuspPnWqdxD3LPh5",
  "key25": "mQQH6ocopbTNKf3uZ6H4Fxv7KLa6QQXTGu7yqDB8Vx1mBZ8WPoAeGSiu7uoJuTetZuSZcnpfbRQnSfPqJbuSDri",
  "key26": "HCRc8fZ9dtZjXGvfxfY8SwBPSYXLoJ49JLd8vDkY1pYiZ8eNUyYcjr62N6ZvamrfD4q1pKhw9rMnt7RUwAYDhn5",
  "key27": "4R4b2XwMi5mr4cLzaBbY6FPBSzjx7wutQpLhCnyUrfAUK2acpZ17K9btW3FWjyCUGv9JC66BVp6HrZakyTSSKj1G",
  "key28": "4E7Kg6EkAWqM6jS3Qyhp2d67quf5qx22C2nawDGMnK38ZWqri4xP9vacZFqAyBTB57dz4GoV1DhH33oZx7TfkCmH",
  "key29": "2KxpmrJrFnVkcbyabjiBGf4X6QmqrQUijF1ujoSBd5Tujy4JcRsvej4fxrVjcjr97WiqY9uZjJzrfgMYoNFmuhx8",
  "key30": "2U5s5xyLVm1XHhyZTatJJgVGiZb5ymZQm7gyjLPPxkCzahjXstNZU7NN8147k8NhL9UJL1Caq9UtRY1YcyvGhXTg",
  "key31": "Shu6zkfiyM1AKXighGjmwCEJbSnW9tuZgqGbcNapMeb44UXJVDKxUYuNnQGFNiUHhFUDibEyNKDkPF3r79A6WcA",
  "key32": "2P1KPWLsoc2xB7RQdWGxoSGJq3dvC39n1HJx6fbjrSdcwceTKHyngoxmtkrbdzSouY7B1tCTv3qjCSpyXhje2HiK",
  "key33": "2HQqCZEYHhdaDSHPiLBcnF4EAFoktUb577Q3Zn26j5ascHpWZ9qYRUmFsHSmvv8qPqTRoX8jZnJwJzTTPx4pV1W9",
  "key34": "hQfPYghfL5r1H6rNDRtz718UFCefkVxstXx2sL2MvXwi8LYcM1tRaPXhRvenKdQCLpcQbPuc7kwGzbA5UnXYe7d",
  "key35": "3ssM6k1ixQgHhYppN1N5ToxvhMZFhoUXYAaz14KSEvyUZRrQWFA39Cw8RbXAwRk7hRsFfjGL8W4X7BDN7GnzSqak",
  "key36": "4trX3SWFdbjTZbDYphVGLATQ4zdfxZ6KeaqMQKyF5rjuPFJDrfovKR2H3HL8U1CNEnvZFVJ2omZTNqmWdbUyFCnr",
  "key37": "51n7gwTKbNUuePTa4K7JqR3NcAstHnzuLxfqGb9qkpqE66oLfcJ2Q1kp8KHfbxs9mYX5s55MY26GhXE4pb8e7jwY",
  "key38": "258XCJjqTMz67VsKVtz8RPXAVaR59tJjsPUJffCCGTtXEQveo1n1Fdph3DgxvN9tvmmS8JoG4uFZTuDWN41rwo3F",
  "key39": "3VpFnwoKzuz58qrerku3YEMqdaN97o2j8BaMGrbKq93ZuE2jfBbf1Kx5ePYMeJgL2jzi7ebT9M5ybSzAcfu1up5A",
  "key40": "2oCCLDt2Y18pZ1WfjCDiGEgBbmXy1qJ6qGJ9pJ923EFzmuRUcGsM4PAYUe29muSuhhQY13FQnNmg57ppzjaMW4T1",
  "key41": "5AAhVTnXRKKN9VueKVTYSXmXZ95C98nWXuFjzJRAnvFMEqyvp8GYmbFfpqKUtHXsaw4GaGVyAhMsoVqa28eue9fT",
  "key42": "otFGJ16jkLgaz7f6sPGZR1Ej1hi1bBnptKmc8m59Un45XPMu9bGVoM64bvJjaoRc8UTiS4HUSaahJGq8mPxRwLC",
  "key43": "4PcUqdiVz88fmniB9cZLfyUhjRC4jTW4CnbC2L9f4yJ1pkW4bAt7XPo5F1S4A1NsPozwHmfc6rwaKnVPR2Cenydi",
  "key44": "RA9jYurz6g7MGxudPnBw9xNQZQZNwdGmsG2V8kvRxttpbbNvrC9UrZJHFvYqoE2ST4QHZjPMhXGWjhAKVTbQgjW",
  "key45": "64w52jxanTdXAHsqweDiyWebgbUfGd1DhpicKCdnU1QhhDNA1sbgPRKiEFeTk1NkaN1icV2oe6kXi2GCqJabVCj9",
  "key46": "5LXc2Q5a57XuhmvTwzYafCWWApPqiLfDwEN97zXC3b3kSbJUctwc6dHpejaMUN1UtxNKCmjFbrTq8JZY7e8mzNj7"
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
