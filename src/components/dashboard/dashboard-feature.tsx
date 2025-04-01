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
    "3Vgrp7Jnkyr9fU9APaePA88kk2SponuR582zoUnFBEnwvWRJ4n9HqnjzdJjv34FsLgzDQ44ctggjFshszUDioDfs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ToKzRGc83iYkigsHvrRKGNDa7WzNg56qq6JszHosQCRyZgy3bvcZafjKuwpZ7wZwHVsuL939hbH3Mv3i9iTi4Vw",
  "key1": "2Ba8RVqJX2DTEbDDypFWhUCAqqQkUuDhV2fwfr7MF6MQa9kBdLpqNo8YSdNnmhJnTpdTb3rU5zoxLBfkDgQCukZv",
  "key2": "2XAytrh4pDNdLty5WZv9D6bfWfx2Ep7WV5Ctq3tjWni9swCofSZQXHEnGiUzKt2mT5i1CrprNTX2jC3pcEGqSMi5",
  "key3": "64KXePQwFSbBmKRtUt9QgMgo9GSQRu2Z4QvGFRATmpNupnB6JuvKoczf4LPf9HXvNHaArr4n8hBy5a8Ra9FYLQw4",
  "key4": "5tadmLPEj8CHvwXwLAokv6ioKY8CvnPr5iP23e6BnB2rNvLvhpC9SZwuGHNJwqNS5nWzrMuBBcBhM8D1AS1PCmbU",
  "key5": "4Tm3EEwacciMrYHcfZ1zi54wKLWstMNMZrJUKB9SdPEdZbQAsCX6dp8XRjLz9wYXxU4dFcSf4MjPeD3eEyYWywQw",
  "key6": "396j62qt39kaeBU2sqJka42Wr1CC1oiUGRNBVu7u1Ko7wEd2AmQss3WwBtqmNnmr7tYn4g3hFh85oHp61QREU89r",
  "key7": "3k3gcbWrXJ8ncTr6DzHE9fT6thwnJsZ1TRq4K58nyjxPicJRRZkqsHdz6Vi6W5AZLqSQuq6Q8osWdrbEhhMdn7M1",
  "key8": "33xpr2gkULQnNbv8WEYU81rUf5qbzGaU4LfZQ7FVAGy1sWx6P6L4TxFAX9XbbYHy9ufguS1YekLEAKfbaNAPnP7y",
  "key9": "47jDaWQTUuVKms6Hch7VRFAL1GEHmDxVohWBCNnt52hJGLPSRShzhMArK1LaVXZYEauDTo1rypBhRLgu7n8QTxTm",
  "key10": "3xqNQKMJDwPXKbgXBLxFSVNZXTN7d3tvkdUYquhdLCW5fzpjhcSAgr8JFot95rH7QA5Gf1Zjz6rUbXocXJtdQGqT",
  "key11": "3z3TdQo82c2rVMaJVWxrEjyq2YAfqfTHHMSCV9EZAPy3oNA8yT48mroRvF13peRjskFV4m4wEMkYCFwVdU2YVjPu",
  "key12": "3srroesVobeu37CHB88qxXVb1KV5LAWRCFFLAgXE7k7nqqyWVFwxobaWRY31JoReEizQYWqc3W5Ptk7oqDqcz95k",
  "key13": "7PJ7o3S9Z1RW4hVKAB6LXZgFs6GiP2AFSgysBcpQN56Nea8oENMQKQPuYHkhfUbxvodTN6TpGYySo4H7K8DPfY7",
  "key14": "2cKBQBMPFTPLRVFa2n1kBeSJB8JJBbkgo7LWJLvxc7ivWUskLXmEYSQtoALhC668RdXSMLPw47EQcvrGDZDJjDsQ",
  "key15": "63FwPU9XPZsjwUXB5ifsMTSnh6F1h2SRbSCQnqJoNK7JEkWCkfiKKFwqr9ZYa5Wto8ydQJsfS1bFoqqdqNvL5z39",
  "key16": "3CXbT4AyMQ4dMmNgyA35oeX3ZDGxFuCZMdLn5bgEGokNX6sGDNLZ2Ha5YcdkM41kSoztoLnvTB5goH6VcKTjPhut",
  "key17": "2vgEBL8WjRjVsHPrA5dqTHHp6pqM4WLgLrRqFt5mDWzgGqVSRKjfvora6LeVSMZtS9AgjJQZnDzbMTzoEwpMRBWK",
  "key18": "5AEpa8CPpQpiphNsU2oPPNG2KuJcrVuxmTYj1bBSbETBLxqaXnN3ANpWv3beuYheqr3ihNhpEPSAKzACr3deAQe5",
  "key19": "5QPD5jAs9XRX577vJAwoNpoCRRHhg2VkKXJpjGkfReCMxmSxbFoLENrYsqHwM19pNo9Fet3W27iPmgvY6id1CYeg",
  "key20": "5f4t9kQCgbArXVxAie7cFyFDa8T4LYk7DKXCuqsc6tXFzhKPVqjQYtz1kXnABA4Up6MyDSr1Li9kXuexw6AGvA1g",
  "key21": "ugRZCHZv7v7AriRAhbKFwGFDRjngwSYTetF4TiFNvr5yeJSTzZMe1VoLEY4uco9TZrfRpSxsgiGUnjSwdpaTWUU",
  "key22": "2pnfCrD64H5rmFZejdNvZXn5KzRArTMtgM8RtL4xqmMr7NsE49tehQ4xpPPyag6eTX1A9VBjwSG6RQ6padjWHb8W",
  "key23": "27uYw7H8RhRcY3mwgDDhxteGKSLkHtY7eC8cw7JTHuKJNcBrz4PehfDT8ESy3k8Qj3gFuFQfQfGwWCscPtZYKKvH",
  "key24": "62F1gpVp6pHUvFkRkXUwawsHBzREYSAjPWZYauGLxLLxGBSefXzwAZtoEdZ16aE3RtexHgdE1WbzF6TREiXZkmop",
  "key25": "4HpWYjWSoacfYMKhv9D1uzfokxf7RqgBFCwuroLpbKjGBi6oDc4yWg7tqvVwAwgKM2ouMJ3gHV1gh5xipS4QpFMJ",
  "key26": "4Cx1EwozYV9PF5pEcAVVWb2iLNTNQUMn1iAd4JgaFrLiXBkokJUwjDoxKWNWNJWy61ecwjvWLTLZqJzrTEpXKhZG",
  "key27": "3eASKden4A7i4oof1EKdMkTVm7QYQBs9vh5DpxWEdSvsFac7Nn1iaqUT13W88rzNx1boNdkoVKdTxFdXMFtptx9",
  "key28": "4JM7LnxBFQEFj5jt9XtV8UC2MPsa33rwQzbqnQSLXJoSzXJ1ajarXMBTZ3BFb1XvQVRkXmqrbhDxMaADGB1xqrJj",
  "key29": "4jxDZFDRzZn17uiHo3v5vEdZTSjvxqFStF7BnLqEGUEeDSEgxoAV83qJu2ThHiQeqqQka3HstLuyJhJtwQhTA2Ht",
  "key30": "5bLQHqqrt6AMYVzAdXMXF2Qxfs3HxJouWWxRCyhhrhAYevQpzr4Y1vfqTC3KyK3cFmKdW2JgXP1rapjfxYkrfXYY",
  "key31": "2YcaR6WYFPUoPDgPG6XdJVm1FHdSVaN9jpa3qT4F8FXMkyEQG2JcHhzngsE6TcZbwGCB15LEmVJKquKq2Th1HHHc",
  "key32": "27CJU76BsikdXe6TgMPHJqygnzZ5p2RwxgHdfeEDcr3ainEBPW4xFPFw1fZ4xT1UdFfhYAAD7Tc6TVjGmhsoThTd",
  "key33": "5nF7qBXew9KFXqNBAnMfgtoxKvaQ6KbVYurcLTsuEKMSfhG7Nc1gj2HML3ok4a6mdnWRBZFcRuoghybaJvKVj8Th",
  "key34": "qCGChxNVTZGyEBqZQMagRz8YurygnE4KNbf2AghDLrXwqvFxrX4AYV3ML8AnrtwGtSArteWUB6WVmvDDBvNVpLu",
  "key35": "5bCGinkmWes15oGKuC1nUJfh4uFbBhUyeMXVy9h19Mq4CSJCF4LdTSmYstPMXW14t4vTnKKRtpnxMcbUd7dPNfu5",
  "key36": "4qboCZ92r7atdKzBuRujPh9b8wcHckik9tmX5YqQGRzHojEkyMDj4H9ExApbEN3p1m6ESQu7xAtazmTnhoYGkwX8",
  "key37": "2scFHusGqUHmcyFFrsLZMYwzBydmah7HrLYc5uopKXhQiTwYZ1NhcBYqkrtXu5Khgq7KhoNmT3kz14crLaQLUd3g",
  "key38": "4TPJdNCPRMG1PckTsC5Ysp8wJGxihWE7NzcEBw5ekY9mPUBdcyqZTT8ueAo9TqK84BzZGoyqxjq3DLN7tDTBbFY5",
  "key39": "dLnWotfpioBiwnm5vW8g8BHRAt16jjvSkfVaUvEmxmPZNCMM3yBkodQMZEfR8zej6VaiVXc4F6hBdZoaN6XDLL3",
  "key40": "26wsKukfAYgiu1V7zcmgHLR9kkPqaF9r4svQ56miRzXRABsmxkZi1uitUd2EhMstm9irAJ29Up1MDFqNwAKeJPV5",
  "key41": "URguaM49p3cpUbD6A7ooshEPR6Sd4z4H7Mg8MyoM2S9w564UhUNghq4CEa9xFGm6cumA9UaqKhEJtSLSxn6URLa",
  "key42": "gY8rB9PKNGb4mf8q9e5wKU6MsraC7rdFYqtLCDQRmpvYUfL92VqNCVy99ed589Lgu2kxWijtWtcSKVxaupgY6aG",
  "key43": "3Lb79dd3zgRPE3aG4VxcxbPqmGXMmRnVKAbqUkBtBoR3YggF6VE8XGrQwoRHY655FbX3S534TL2JQxewij7SVSKY",
  "key44": "54mt4WfHRTTbjmejuDhwwN28zbgRHJMpQEY2uqwpa4APiy3JZ1hJgx34tMwgPuPLhbN3A4rdWo6S4XaKbk9TG9v4",
  "key45": "jbS3cpdDoNuYfz1vk5gfKFm4jSket8NKkXK9upykk393s6AVhoZr9ZZFi7JiNcQTWckVZaL71JSThdfAkbiJbaL",
  "key46": "39u21XVjWeckEgjCs52qXN4VGBAfUAr5ptpG83UuJh8g9YPR6uHGCjVNCE8eRUJJ35yct72LzcZtM5fzbo3B3vAA",
  "key47": "2yGJFQYgt5W9d6NWzsB2P1eeeZcBMPPyR19ZC3UDnC7ju7yNdQfg9etSZwcJSEpXBLNNBGnANHRHxLsdsvdkjyao",
  "key48": "3JQueENyppxFbRLCRyZm5eMYSWjJ5cnibc36wC4i8sczywqn4x6xvbK5t57KhBx2hNCPbdfk6uGZDUajBoTeKrjV",
  "key49": "5WZ3eDvnb75rwN19tgRXBotRBMKRCrGKRdTCsgnw1sU7gehyn58AhLLdNt67Y6xi5aJ6tmZ5BoshFDMedbMfWFWX"
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
