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
    "qYoiR4GagNnrNBjAUQD5RUkLr59jPtxpPBHtnwRddHeFzoPtQJqGhd6VWLmot9ksAa7S1K8Vs4WPMuZsu5CLj3h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4po5EbuKnEq5rEU37M5YoHSfKMCA4dsYf7G7NXAxFkq27nwdoBHhSXvL815Qwtpf85JnGQHsf5Wugr6Ye6YrR7RD",
  "key1": "3obSwpEHu9sgrPw6PnbD6q1JhM8QxaMybYRwuccyPv6pmx2UtvV5PF15BHynGJcJp2RyzijsNjC6cCGVou6qwHJd",
  "key2": "39Hx4Y12bCgv8nMz7a1YpqKB6z8EXFKJUcFodJ3Z7jMVdFvydGjjbpvdJQNM5yt2uDJHNcoeAK6EUeQWdJuGt4m3",
  "key3": "3EsvrcervctntUDzSCW6feV4fK8pjukdwqiCV9x9dhFJHqoafdKY9LMwJgSSFdYG2NtSjadqGvecqMpjrDUX8Acz",
  "key4": "4wEdugzccXW6A4JDmmCakqPQwChbbopoaswKwB6YjnPd87d84QMEET5PYTSGDA3rxCcsfWZxvnTct7BHCPXg6CYr",
  "key5": "57m7jmyqf4Kz7u5NKR6GjKUbKn29jwKhnk35f8fWkiASLVAKLgJwJoXW63zgZy7BsE1T9bJaVmr3QNurs7QSHKYJ",
  "key6": "2ZzWhE4SMJfhnvLDQ9VQBP8FYDgswJBqmVLLEjMjM7RLH1LiMHhqQKYmtEw7aWA3Ym24ejcrHV5yQEvLYgaPwE6p",
  "key7": "abYrhbCMw7aZWjEoCGm2sSSK4FDu29vv5scrEht3VqabAq9nZjwbrkr6B4FCrQX25wHkHUTMnw3ePmTVMNNnUQT",
  "key8": "66cXFYMptoBcrGrCjt9LgbQSEWp56RwEbLGS8qAoKXsAX21ig7EWLQifqwBQ6jV5kE1ySfBkRmbhwWootcB77gu9",
  "key9": "47qMRCB3UmtEBtM2jej48VbqeJNCVA4oFsSbqrF6vykU6omL2Fkig9hqxMBm5PPRCFgVYJdQ5wnPnEdoQ3H78CRd",
  "key10": "62eQ98cgxcrtxgvp4HtFoNCRYCgd3m6tN3nK7JSMnMPi6kYLAPsCaF92zwHrgqWaoebtDRNnt5XpvLMV6w8XhhXf",
  "key11": "25DKCBfuHduycjEj8Nhv2mmx9cxZF5Bsj2PkqEZeN1bwqpGP4dyCycXb7p5WsYKjD92KFG1PfZgEW6AiYEwMaJd6",
  "key12": "3QbbHHiNLWpzVMGAzXTzTtr4CLhq38bLjQ51FXyr6nqW13ibPspPYPuupu6SSK4y997mcxGdpb6CSYuKy7WpL3WR",
  "key13": "2xBiwAPSvHudbBRjuqT9JX3yMvB4M4KzWNAWEmZXVzgFM6mVW3m4Zr3LBR16jY2aTu4N38yW9VHsHe1WmpcgHDZe",
  "key14": "48CaeQFHR5RtnnXcmohwV3emwEZchvCQPGf6QFpCPrKtbRhiJxznnmv5znrzefMLA3sQfYtsg6nqnij6DT1Wphrj",
  "key15": "4SZUNWrMYX4w7tezWz45UE72k7FY9tkVj7Cs8P4iVw9gbYntKwwdrAkuAqVULn9DvXYenfaX4CAsAErcBewegYy9",
  "key16": "4Xq6DRJAHcF8atRVM7GbjEgW8xv4xx5wqY5hzAASNEU6xoGZBFSVxUFmC8pMGVzYHDCVdxtYPji7DkbVewSUeMNi",
  "key17": "3cGhHKzc2vZUbUgvS8ADzwJtXXSTaMQZDaU4Pby6ax2wUS44MHGNcNz9yaRH7beUmhtowHZsMatkirNhCh7UhfT5",
  "key18": "5TEd7jckCo1QKbVyJNhWqeS8oL1h6yHhkAaS2YiEfPa1RcrcodTGGaVRoxixL6pzKvsgW2qmunJ39R8hnRTcn5tT",
  "key19": "4U41N9a6tictUcK4FyrUAd8vmbYqMiF6MKX2ZnLpFQFmeTe1JNyjagSU2wfguPXV2yb1Zgzv9sqXkZZpf7JPLdC1",
  "key20": "5JYeb7CUJPGAo2RSaU8bbPufQucXgXSB8QbTK24rwnatNFbsLg3Nc22Qpnvo2hZBfNU7zH9Xvgy8hJca5Psk6hxg",
  "key21": "3xQU7kVir8MjnWD9CsypK6GrTyDXSrcuqoubgLiRsM7d2bgWYjjiKZvReeqWmFv5M5bEDGMTtfB8dTysFRds7doY",
  "key22": "VRVJbVizbHntM14bNexN6C1aC4MBSgjwmyBNLKKDpgn4bjg1L3ppsET92zbBASLH6s1TKJZzaRLU3MW1RTRzvYn",
  "key23": "4aSrZyARp7zWvoygGvvgomUyU44PpaoxLNUyfF83SFGYCB2JePQk9wJ5Bbph43syCBhDoGKw2VKcL1Mz26TBd95K",
  "key24": "37NhkVrL3QMoLFZbvW5RaKRERP7VJvPN39cgGwRwM7ABM9SGgGe9Pxc71UcCMGkXNd4dFNjHWUAfgtBY5vVxDuiG",
  "key25": "2tyE8FiZYfErGLsk7j6rwCRBEDGHCDCyL8eRzRCdxCs9qSBQvdK3hrkTcv4vQks6VU5fRPXcEm2uc2LXgCAS37C5",
  "key26": "4Np6MUeVbUmjRwMTkadeLAnegQsgsCUzDkPpnHggxHdcCp8PfQBkh6o3BTnzh54KfrMv9Ev7ff4maf9QpAwPuZbS",
  "key27": "32TD8m2yqA3EykjkVQstuDAT48NawE6aYbEvQg52SSLXtbaaHU5cbKrirzwVrpkpbzkpkYZL7tPpSDgPFpAz27m2",
  "key28": "2WUMfgR1dP7RbP3TBBXizzY3sLQEcpKtXmsdSVuYKauSpanvX1UTRiGNb7mA82o7jqE8w8aaRNZaAThseJpGkYGW",
  "key29": "2kBgCQSZWdtqJpxnNDXXJE8niZc66pcjLCgXoqZBapPrdyvgmn1ea7rPGgMrQBaHeJ8zFSQoP8QosjJYzywoXgHe",
  "key30": "4FjAA8SFitABdoVBYaXiD1PH2nKVsbtXimzFWjUL9HQobmNtD3BTF3bCU6Zbma3WapD6AahFVaW8BwmjCHMKzUK2",
  "key31": "3iC3xeL3CABiZ63ZSv8Qk8sHRGvbzb2CHqguzSM9mhK32f6S3HjgnCGjHZiSBqaCw8Q7AGMv7TN5CWeSpgYjeQHx",
  "key32": "3LHBDgvhHcMfdXbWgLeBwsH221xvgBMMuocVX9sUdhGQkNGVXispzwg14VN97oAVTVA8FonVJomBKaswAD5adMvQ",
  "key33": "34gWeKASnbRUTgUnQWzzCwyw4N2RexMRxoP9mkiRs5sbjU7uaGj4bPfe5Z5MtWxJjfKnwGZdabZAKhP3Qcg13KuJ",
  "key34": "5LACU4r7oXw3s2Kyi7DBEZnemGmXZWucPwps7Grw2qZ43rGyP2BXget26Ky1MVNCGmdWBSy5Wd5QoFdrvwp1hKES",
  "key35": "4gGPxDJmcnPafvZybHvqNxMG6ezK6nYRiZnUCKAHGkseqCq8NnS31eNdLxPYawptsq96xUqHzYfymzmaszMKzdo2",
  "key36": "3dToDweUa75gCFnTWjt1wF3LwEABf2xBSG5eraEMTM1zKf3npYXuxWNqXH8iC1rAXKUPjowpbFxoTgmsJqC1U6g7",
  "key37": "4aBqkP7bMLU3LPs6S12V2vTAgeiLhmz2tkSai2WvUH4sAF3uyL916E2n49Njnt9B1LJrpKhoxcWmaVXnhWDpagJc",
  "key38": "e4gF68wWxm23sqx2KEh3BETBETWL3sWzgJgtYZf2oou3T6o3d3bwkVQZNdz357bB3qiynriGedtiz7VNsvmCUoA",
  "key39": "Xz1XsZnTbeZpQuKgbjBZQWDqASZszKAucxPw8hDb7utD9Msag8cTuk84NLQg2Mg2sMFPqCCCp2pakaETw5Sgt8K",
  "key40": "597ZuK9DwoF6EMeYtk7uM5VHxnh4ghB3MUxtYTTLrpucZ8wBJfjvVVn6Z1NqW3gPEJXtqtKfy3uYdHfE4tv1Z9DL",
  "key41": "VLfB6vYWWPfWpoVxGF8MQGAYWVLwoouzPJ3GZbzc6PRLFaxE2Nw7c2QorJ4i1WnQzx1Vo8PvHFJAWP2r2gVqit2",
  "key42": "483EKZaVAScHVSMXbBUKAF6EYkhmfYcWFsVSdM84AUSFSwQHhnfvQkJBHDvaj71Xuijj7aRRLkAY4y9QygKfTX9L",
  "key43": "4BEja8HR8shMr75X2jJq9u37qMK4V4HvsixoKcFDUeVSoG2yDsNKh842H8gEGSKgkhaL1w9ArJjDkXdDxK7J1iFW",
  "key44": "48KXjsxiQ3NczcZTVRNip3AbKtTXH5FGbMqQ7we7P2aPzuPoGAnMicevxz1dnLdAD9CyYbTxX16j4BcrAofnFNtf",
  "key45": "39R4ogeALwahBunDBg1XB6XF5ssawAEECFgKDkAUGu1jBQQoihmoQ58UXMp7xuTnwFf2ofVd7cNxi9DscBZASgjz"
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
