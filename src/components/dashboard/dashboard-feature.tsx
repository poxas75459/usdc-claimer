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
    "5Mf82EyE6sPqGP7sbT3VYLodsRKCnTzDfbgXHXhki8kecRUPLHonAizzYa4BRvm1WZBNdjMEKcUBmK6tgFPFtnfc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MGVeWhSMjG75LZJaVDkG3B539jov4dGFrxwrVwPFQUHGJ9j33eCAmdcVugauFe776EzAxiwmnk7qiiuH4qVYNP1",
  "key1": "5P3fYibAMMxJAdTrhBhBwCDJk2k3yAEsEQjYfsfNXt1JiLpEXAVd5AwUScHBk5mK5ukGrcE147zeRwAL57okufcD",
  "key2": "52QNoLqEwypQymLVJJnrZ6UyyMiNKxJRyMLE57w53wSTLLXXMW7DWXts5FxJ1rU42itUrdQncHE3t8VYSXGs9nhG",
  "key3": "45sdrwX3SyQjXS77yy6UE6BDKfb7JuVsa6jR3TAGDfkWyv1wiUJW2eVosRJLw73UHebvCdFS6vm7LywNf272a75L",
  "key4": "3AuDXVjghouViKJRrsDSzXz8BawT9WeSnfXb6faEDfivZZ5pYKSByPxj9ywvsFrjNnmUByBspu1rgD35CaTCTcqB",
  "key5": "dDGtXbUC7QgSVxxGZ2JquxQUSYaiiT9eFRXeHzkEwWQrvPHQwWuzcnbhURtE5DPknL8t9VzfXgv8VLkvy6qsqin",
  "key6": "4p9JFxcCod7UeRCDCi3ss7qUNUrp3pfLwEeyTNkwNF3B3A3p9r8RwiYeFzZZzETZ3KNHGR3RvzBTyyFipzEmEXNd",
  "key7": "4Tt43mMNtAhGHgpRMwn4pJWgdoPvkZQFbWfwRFuwo5yMvDWgBn2zANfiaNdN1VgRcBAPfiGoB9rEiGBz6RyNn41k",
  "key8": "39WY2D5SiMpeBrfhZFERhEmAJywWoUVCes8JTrUZ9PiTZvGprYs3w1HifPe3buknVqwZWWFEezXg4aJNrPXniRaL",
  "key9": "EeD5huAzAu1KJXj4Hfo5AgvuYF8eMHQbrWYHNvvWfKfmpPD2FLnmWLS5HTUBeDay64GVQY7CqVZvv5WQKi3xCxe",
  "key10": "2D2om7tGF6qtmK2QCkQfPvwNePBzfDEoofie271d5mW62qHUs4D3GWX9YMvUPNAJ5MZmKcGmjyYwvr2Lzbrzorrc",
  "key11": "Jjeqn7AYNUQySUuNJDRqYpsZ1V77KQ3H2tgn2Z3Z3UuYmj5bQQmhk34Xq9tC9fjPkv8YafueKp9kuNjBBjqB33i",
  "key12": "3tWWt1ZLNVnuQdXwpMgixYa1wz2ttEGDj3SABmbB3mWAJRqkyHhdXfcCMQwFudrP4XtUacQ5XJosCma4i8RDSZfL",
  "key13": "4h2VJkPgrrs8ysRCH8ZBN3LoHADWcPNL4Y56mfUCPNjcczV5hnSdxuviFR88FnxpxiA1iwHS8sA9uv8f5z7xw3cE",
  "key14": "4u6T2dmxobc6KJfGocQKqb9JiuQMZscXkxhTjStm1NDpCCTWFztwzUN6jrkeWJSGMHkPBb6ksTTQ9fNWegooauUp",
  "key15": "P7UKmjM9vsmsbRBeui35y3NVSNMtLamZ4jpcQTRB5AYdDyyHuSWKCo8EicdvjGPweqZEt51RM8HLHTbcsGxiXTQ",
  "key16": "5zVDhC7PRYJpdB3oE9ToFCodWeo3CUN4DnYn358vGbMtZGTNkEX8tsFRoE7vUnPpjDn6EJ2Nn2mdJ7mnmUmacSXD",
  "key17": "2Z5LbuE8DieNfm1PNdpAtQ9ofBQYadCM2kffe8voCN1SCJRQ7XxHwVSwdTvwYHXEQCbAfiZVefxYcinhaZYj5AFT",
  "key18": "5RojGUqVGnK9mFE9u8eS47YDXqXmmZUR2rq74EN3bvDAW3Fb4mwTwy9aokMwhp6EKXfNUEqdRZJj6n3H63ymNMYS",
  "key19": "3944f14KrT4u1H8ZkYW6WwkBhH57ApAGpcHM76Z8GoV91imoet3aqME2YAT3etcWVQRLFEyc9aigpo7u1HJMtJx5",
  "key20": "3ZJL4DWZt6ZDDLrzY3PSC9teQdZKxKJuuDEFjjK4UteRNoMMk21fYh9QPCJPyZ8STHLUnCqXvMApsKnmhXpsxnZR",
  "key21": "NqrqSLSDoR6LSSDodtFRQQWjrJBLmC1jxLbfd2x5yEXgWcxrHUjjQfNykmtajVS1ABHwk8ZVTGA53ZUw1WZ1oRG",
  "key22": "4Bg3W8ZuUdBYsWhU6AZjB8ggNZN6dnwo7UagHt8q61hKumuaQkpB4kLhv5cCedsSvgXvg8pjvJB947FcsDqUGRQT",
  "key23": "4UinpQkGjKXMS1yZCgnfq2wUFT5oRb4dYh8vKTd1uCv98vQ5kkEHJ6fuo52on7SUL6u5D1oXzz6DTg2pvZgnUFk1",
  "key24": "5543RdWoVt9FDuM8LYDYsnTV5ebs3W9HZ1c5SFh1CqZNvtMwqa8ik4PuSnuQEg5KjAa7kHA84ZdcRLqYQ3nhMpBF",
  "key25": "4Fm55n8GoPkPNg6qXmWAaM1gSgtsKVhvnHEauJm1PmJTAYRBH4Q7CpR4dM4QeYjvjDc6Y1PxRNyZ94PEDQJVaTZt",
  "key26": "3qHFfepXmmWi8YBe7Dr5BMUidPftcv5WZjKjcrVmXtL1ZCFLLdv1YBCh32uyuVDvacpcfKgsakfX8DSrEFrCDUkQ",
  "key27": "3f7T2kzNT4McvjnoW9jaEziGBQiBJELbfKccexxVPWwnk18U2bKwPrngsrYcy2AEPQRi1wZe7cR8EJ1s6gEnScRm",
  "key28": "5gYMhkAcBrNinmdQ4X4X9WRwjcYuYaJC7v388RwLTTbuocyE5BJ6Vb6gX83h9cXqyZxg1Jdpz2wgGGE6aoiy7R4r",
  "key29": "3z186kP5JwhaaCWe3ozqoYkDDTf84QWsi5dLSgjsRHpgfMMKHcsgwjjjwjdhHin8S323gBMTM3kfg7hsMkurC67T",
  "key30": "3Bn5Fta2LioCVRSPwhLu3N9fZjEHV3pYcxg5MEWciUnLkK1JHeFbb3v9D7rAem2sqEr7s9oZn83CogHpFXtJJBK8",
  "key31": "2u1yeboMWbvfAnDqj3rXnoWrtEmpFZ6LwY2u6XJjfB9crd9mxjEix7dan9SrfJdG8gEzBSnrjfZoacqepr45NfPP",
  "key32": "4brqtHT1AzqVSdHpBUrxmHAsgwuv7zYV8xrtVBsz9LV4GTFgc1wrdQGbDpfpDneYPDNPjDDAqf53xrbJ8E3QQB6o",
  "key33": "23uv7DyXno2mxd28oMFL4AWYGLtjc2bbsqxqaUsSdDNCqtKVeptwqtepvwsJXn1Qdmyb3kxzdrRPbV9nkKjHQ7y4",
  "key34": "4QuksvbU5oaVk3gBrS1XY2GpAVDgK8vZB8Q6LQukZwjW4w1kssy6KXB2imzJXbiBaQ9wdSdzPNv2Eo7jkNs9BqCU",
  "key35": "43pinX7WhYrLEoREktesc6TL7ADGoHDrdjoXDKbM6scVcqLP3ZHKsEeium5WPan8zs67qWhvFBcoWuZDNkoPN2Rd",
  "key36": "2jQ8kAsfxAFJjGn4yseBomaHBjUUdUNy4JfT9RarXTxDYTdTNEZww2HaBXJKdRS3oW79ETQjkT1UwBUr4pv2qXmp",
  "key37": "35Dm67iuQjH6PvMndoCSayRUeAXfBXio9kdRU5jGh3VGmHTw4oKrD8uPV1EVZhBdxBxqgXVp1L8ShJH9mgk8eMgy",
  "key38": "5knbww2Z9qhPPGqYZQveRBaHHqrnmtC5G6on2YpSnJd4z46AYfaUq9kRDyvmE9ERqvjdUPbwg7MZYiwL1jsiLypU",
  "key39": "5TQEM9JSJ1AXb1AT9ozEbkMMynAXHkJgjhjsc5jbmzVh8q7rVrtofuVoLbvajkWSdp89DuDDNNL8YvcQwiPZ6qe6",
  "key40": "cS4xsw3MaPd2tA7tearUtPp12T78PNDHTmWYKsQAjwci9cW79VASX4mku8FVXug1ETsceC4548Ljd6BtD4LsdqQ",
  "key41": "2ULQndf1k9NZpPafuW3Qjs5cBKedqdnpXvj7Ax2GjY8nbC55pP8SrrKmyL5CCM38JAy8PLMdQhyHbQTedbqMxh5E",
  "key42": "4Job1daw4jxV71bx6ikcaM84TCGs7sd76xRtv5Thkn5W6Aoiq9J6d9VR2Qvxu2QSQ46ZhNAHnWZeni5YSjdsC7FL",
  "key43": "3LkK1o4wq2cHJpoSG24QGohmFTNYS1HLtgTv85GkL82vboHHEvfCM2LfXVMyyZmFA1LxzqHjE4qxB1qKx553MFcm",
  "key44": "3j5PmUjsLW2RzHhDXuJw7cV2oQpGVAAbcMuLt9j9RnUf3LcTqsvhV3DtXBPCowTAYxpHdtKw3GwbfA6iHrvg6KtD"
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
