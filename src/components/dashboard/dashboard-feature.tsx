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
    "jomSuMBk99YWMUa8QKDMxcQCLN6LpBVmv5tdPuamj3FcWWMwuMa3B3sNFN18GbjeXdnVveCVfvKSqqZs1QQjRAY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T98bC9ocghGHVkz7sksNAxmH6sASxp5LuKEym8rNZh1iiRqogDj9MSt3sHAgJmMZQ9htTXCbdL3u4ouXxEHGLQT",
  "key1": "5JpkVyhAnsDKATFNi2ypBmFvTze6q6xTxji8TEBxYvM3MGEUnY2gvrvJgpoDEehq13tZ66q7WbVQYUdhLjDZMo5L",
  "key2": "tGqwNGybpmNwpF3uP2n2S1KKv1vFBtpbtyRKQ3eBPCzDoSiad6wXzQ4cSaHVwDDGhS2yiYKD4tH1staWxXoHhBY",
  "key3": "vRHeuoHUBv3A4nfRDs36sMnWqtdUeN8chV7moVhJzCmap99VHpw1NybYJMwyYQwyDjd9bKwchvcgsuo4G4QWmLM",
  "key4": "5nYFmf4ZWgrageLzQPduKjjVqTG11xVgFrDG7o9TUYcDTiZ4tgeHKz5oxNUbeF13DtUb389k6qqvhYcqEBY5YD6m",
  "key5": "4sRuFqyMvJGne8mp76948rjpFGEs9AftpdofoBKbZrGXX7ZYi8ZKN6ND7GvgqeMuLtUcc6driV9UUDrXNLmGLheM",
  "key6": "3sjia6EfAEHUsSMDsBWcVpUzuzauCUUxPbbWdoGtveWobp3v3HatDH9PJ3owwPDDRKYyiuoRpLYLDEoaV4NxtMsE",
  "key7": "gh1FXsVv8CQsjgigwEjT4ZvdYtrpEjKkcB8QZcdwQonVgyQ7osYxTLeFLRmNp9CaoQnMQNqrrxzeGtNAD5RXVpN",
  "key8": "v3Bd4rCWrgx35AJ7dHEQzXQhgniCrRCxQA9iKzoVnUnQ8HEvLC5hPsf3Sz54izfDg1okopQ3WoujQpzanAnMiVc",
  "key9": "2PtLt8Ty4DNDbctx9JK5hpZPFnqhYRST3S6yB6bqV3aAhusunr8FbGNpKa9M5GDadbS6u8P17FAwkqbA577vP5uH",
  "key10": "55SXcB137kN4TGH9JJrJyqdQFSVeadkPk6bcETfwTkQ3nRSAht5caMacpgkCuLzwnNg5PhsThYeCvkNQL4fe4Dev",
  "key11": "4Mq27qNQzAPjAymsbWw6YArguySa3uWF7Z46fCLJpHEwpNmEKwKtBoihchFXgEw3kr6LfCW5j3nAdT4TgohLxDZC",
  "key12": "2921zyDcZSoJjzghaATBMSuDYBPuCiBRS4hdTBon9txPXKruHJqqUjdygai2VkiGdeVwFzLT9qonuRBzhTyo6XqX",
  "key13": "3iaJxMLtS6bYr7d7vtjJ1CJeqEbG6FcfSDRpnJaGragFbJsz5eRS7CDSuoUWmn4RRabtjZd8fJHvjkPzDcEEbzv2",
  "key14": "37HWfQsoaCS8n6QaHqHoLaMzPWAZRBTRAFQNVhjBT8bhC1w3qQhP7Lzec3qGwUJy6sRKT6FugVKxhJiKFpS3KoGo",
  "key15": "2wQqug4aCjQhDqQRn6BNjsmsbwQ1NAuxGyGUg8izvczxeiBgAuX1rkW1PdM5bzTM4fpoKAj6uz9wAowRRpNw2SES",
  "key16": "UzxECyCiyrPnSVVnn4ZJoguiDhQftw3PMuUqPQHJLgVxsiTn6LXPWCkrcXFSWMjhhXgCqxXVDmWyAR4EbNgcn37",
  "key17": "65Rayawxtr37fBURYVopvz9uDsjxumnygYkMPrjpAeaiz8CFPeXqp4U92Gvot86JEfnGj4ZzS8rMNyXeb4eWz5Ht",
  "key18": "5gviKhRS9ut5fQGdqsgxwLYRU6m1bvKGe8aNHK8DY3zVz9X1fts1YRWVFvX1dQbAEDdy31qPcnrYjBXSCKHjb98g",
  "key19": "2XbiKSZeDu3XVmLznYUSkSBVA6zsEGFS7hTwMKBYK3QDWXryFFdQdnPHtQhDBpCUArHvKbNXsQguavVnNFf4fwgW",
  "key20": "C7oov6ja3UCZmgkY4rE2UpFCbwDC9x7iTcczgYXY82LB1qoxzPtHVMiLj3V3Wc3gCDtaEFSqWJzrop1xA5NxJSM",
  "key21": "6452xfnCRJhejjyR3SMeJbEy5tqCSw2si6HeTWESXfUPEqhoKnuj2wwZvQNvLa86mSMH6cAojU7UeGC6o5UHF1KG",
  "key22": "3DdWpezdSAbjHHyzKFAMgbjXuyp7DxXqdWFbhqbEazK2UENVosFYbaBgW1iFa8FNkYoMMb8ZVZpxnruaujuFx52c",
  "key23": "5arEJUkwqN4JZp14eRhYoHHCD6a8ir8GvTLs6PUPWxxgHPUZKgtBWFZt9AwTe6BnAEW9aEGDYQsX53V5wjstxWxV",
  "key24": "5M3Hk19mhuuUT4LjiksB4vKBWSi9Wn3M2dyocF77WN2VcpKy7eQDVNLBqhjqfPXcDQxU1A4LDSp2jWXdKHrgu5LP",
  "key25": "56ZozGyocKaUooZ7iJbJRjABooMz3BdUJWvCWPLg6SeLKrJU5PY3m7YaXkHFqCmLPWcpctQWkZ5Vx53AjGE9pkGi",
  "key26": "4d5hK3VhA6ASopQ7t43wMNcQ4WE8jKUf3EiCu5hSFEeokPyrF23X7qn6SKPqcvVDoQYjKgF3EPX1XuRqnhhLt4HL",
  "key27": "4edN7Qg21CBQ7JkJVcbEZb4u2GH9rDk99SsvNhXi6PKCJwRguECp7zojCZkcLHGA1Za4mXFrzRnC3nJrdVnPE9tQ",
  "key28": "4esJncXN7nVfRWERyCVTrKjWs7awStdp79761vWAZ7pZ8au14aKzMu1gPwMiR8fwb1FcJyzQx5RizExF7L4xLaaJ",
  "key29": "oW64k7DLoaPQBrKYQDE2UuscwiaRRzneae4JhyYcg5qxMHoCPELL4ddgfGEk2X8YmFkw9JuhhTyzqbg33S7ASvH",
  "key30": "5LSbQzJdc9DC83bcqsbJC8gA2pQSBZMr5bpVqVu6JMGxAr9m3p7myHnKLvWcmcJk2Vo4Ar58EcE81K24L73nEhaG",
  "key31": "5uNmRsbxFzRVKBX9HbKTgUAMGEdoE42Fk2ED7UmAQNNpkTSjNJAkxVGmSxygrhioZ1utvuG323J9WRvsgAKUjt8t",
  "key32": "29Zj9Hz7RcMmk9hsTjTdLmyi7uD5Wm5J2JjuLta4HAabidVKjcvZJGhSUttBw1ES6Mgouws29vQNyKfaTmbLNkdv",
  "key33": "5HEE113XfRFRjSrDM5gH58vdVsnn9xvoSpuV3jSQXroKwge3Xk4AmENhz2Reqndo3mb3RUkRh6nZ6Y2a6TeVM4Gw",
  "key34": "fhHj8Qkipmcpjp1XsaPiabPtW4h3Zmsajhyoeqg5LLKasTPBZtFKuctsiv7TGWNmmGBTDsB73NttAqefR9jpXVS",
  "key35": "ckq7XFHgYWgugwXhjXCGybpHKkna5eSNLfKy6Vva8UPf6AkmKva2vMADpaPPPRsJjepm6XASr2SeGNQZCFhyuzt",
  "key36": "5L6zxmAXpUBoAgR5QnGHvk2JWo28LpzeXzAgSo7pUx4LEfTWGGdni5JNQ1TP8sUJjwwhHuZFtoAXnqH9npFXYUSb",
  "key37": "U46j7LxGpHAg6y5AAqNBVpF6w9nJZEbJV2FsBtxu5woa5X2vCx6tzbr7SDN7GSymM5nyvx4MBZvPXFq9QKbpRR5",
  "key38": "ub639GdCjPwCYCdcKGCYHCBLmpQKyVz4oseFSmKbAGBjt21teUf7NwvruRziVsqC11VfgHcxQUafiNPEdSP2bkg",
  "key39": "24wJK2Jh8JGsmfLdDj7kP12sTa76mpJ7qmpcA2fVAUsSiKXEFbeSUoMUUxvEYTn5R1mGXBTUF1jbEUSGmAf6Lctp",
  "key40": "2Mh4HBAr9ofMEMY42i6RLoJmsN8FDUSxUPkGx12bFeEE6KTSAsD7YZDpmmeVBrLuAWsWa3biR6Ljw38Ukc8cSegT",
  "key41": "2KX2s744Xvhmoz7PyaSXa9LoF9V7v1ZovJrHAr3H9rov43PQd18RoYqXcNJw9JY8EHVushkKTk2p7KSifSRJdFbn"
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
