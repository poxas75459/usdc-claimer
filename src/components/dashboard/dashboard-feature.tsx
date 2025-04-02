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
    "276ubAPgaKXdoXhQ1N99LcwfQgx13TpkWDejwhTk4pHKbAuBEiFcqNoNGSuaxPWL6PpgXmJykk6XBPPm4j6oiQrF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "548kLTopWC22bYP2eVHooBp31iykqkBXmz5h5ffdm22kfsnnuGFZ6faS1LCUYf6VZa22MN7UyFDyo7VGUMgdPD6Y",
  "key1": "5WYS6EQtXMsH7STdWYgooKP9JneLFi2AMBfAGgRR1LZ2TgUyq1GfpjvmD8NFP3fYQAVR2BCA9dLwvmzvh3VBbxGt",
  "key2": "4LH1zvZYb5fTX9zXUYtKxPtgYsbc648RXuRyEteLJ3k18JR9x2iYstQvhV7UiW78Rv8AnRH36PtoeHPoMsUnpd7Z",
  "key3": "5QUTFDCJtmAipjwHrETh9RhRbNbVFZLQ4xeQvWWgwGSgpFNTBgv9Uyf1TurMpt9dsuQ9oR5A3eEihdGetrFVcENQ",
  "key4": "2Qw1G6qeYVBB6qeXseQBkpjpfceMqyi1HCzcfTdZGi6A5TjJ68jmue9GB1Zhk75UaXofaswwnwMMmWS58DfiyCnw",
  "key5": "23qtXUqV9ifPrjRNp6SBgTA6E3RN3DhxbJykHhr2YtK1EtB2P1re2j1EZn2Spsx42zfAcd3XRCYKtmj5qh4thuMg",
  "key6": "4PDKQJLQZWUbp6vUh761xgtWwjw3FCtkjxKt7abPaWXbYWrFMZZDi18vTHgsxkDjHTHdgU5kczZzNBVcb7SbF5Dh",
  "key7": "4YzJpMLa5oFpahKCtc2wnpL2rpbT8NGv61iEPJQLzyyST3Df2JMZePjereVmfA843ct7vhAyyM9xbhuw3geGdKFp",
  "key8": "4pB63fxi65gKE3Mvw3kH5kKTMuzPhEws1jkECAQH1N3TC1pu2p6NgvfnnLc2FXCmfjyjWovcg2GCuZyjVdB4k8JB",
  "key9": "iLTYg2DAwdQV2RxKSUpYLPk987kWTzmq7LqaHcb4a8RRRNXJcmpW51dqf4JV8pXiPXaqW68xJqe9bxL9ijXnDLZ",
  "key10": "5TnyjJjrWxy1huCp3vFRQGyGe58tcYnye4H1NzJKFwfJYa4DkiBMVtjeTxMnzQGWDQfXyvJNpH37EwGNB7gyQq8Y",
  "key11": "28eQNVmqArDMp6Y47UFcpF4z3LowfT1fnrJsuQGV3SSF1SrcmNew7Crj5EjP5S43BNcYx5Afm3922mvEp4BvHWXc",
  "key12": "5qyCYcEqiC53ehv3dFqcFN2Q4wf2Aee6iqkCnXvksZ6LdEiCX8BVtxEiAAiWxUCmVf4BEfHDPvKs9EW7wTMdAU5a",
  "key13": "5Z1v3w2mc8BipHoy5eERKekL1VLBYZnQzkZXLtNGnyH2v8MwF7bSbHtrgkcnDAk19HMQKWCRhSysn6ggiRB4VsVi",
  "key14": "5437npQx5DwePZgvFD5pBwKixBGnWgMWJ3KDWZ5fiss4TE6v3isETGW2K4iv6UCw2rui1tKAKV897WrpCVbUh4qo",
  "key15": "98ZVoLWyEHoifSAvVzDaZWjRRGmEsUTVSpvMkP4KoRvCj8SzgWCFPyJqhMgGHTq2mFfKjpzgmiwpDsi6PSf7HXN",
  "key16": "4BpNyrksWscTjgwycwARGHMjbrXKHSYvs6Z2r8cns5BC4nndU81TnbNeBK4nCanMCopbQVwNMLv5Sn3hN9wNvCu2",
  "key17": "kgY1VTLRtsifzA3kEW4yjqckNth1ZnNZox8ar8YQ4gXp8vhnnTda9dYBnTtbzWKYnN6hSFVKD3GSMK4vhmSRFVZ",
  "key18": "6g9omjh5Xhd3Ta9DQ7J8urh5HTPH1UnmqpbK7q5uwn9cTRu2Z6pH86WAuQuZ8vZ6ormNqPn5djnD62FGsmt1Xir",
  "key19": "2uWS9bPSbgzmxcNPCV9xHRsrQ4ZbgBpbyiEFx6fkwbxYVjVk8xMRvjGZwxqExT2oQPi3ULmHxAJyMzHmLpb2i8Gc",
  "key20": "AwiE2SxrN4dAc5Mn1hEPdjAmfazqMYz9S6rTMjdMbBvxijvqEGASFn9jNXhCBwvG6JeKHKTfdd2HhCuYw5PZrdc",
  "key21": "3PA3z7uXdY9cuTJMjDKRmQW7a1g68chM5C958Yz2XmNVdM9LMgj37bgYRiZobzdV4gjgdzMVNKE5qZo6yvA963La",
  "key22": "23YyVpfeenKXAnwf9YqwJGLwCiaBhFz8g7E6PiW5Hk2M9sXS4L6yXBP4ih1aicgLcyqc2p7AADPcQiK6F2dJnFV3",
  "key23": "BrYnj78vTEZbubaHoS8qQ1trrZR1ibBb8XCTKD98fVefww76dbh1sThY5QG1oxzigZWGYgRCaKhRBZmzCpGkNkt",
  "key24": "55x5pA1z2fXBu9r3yLpGxTCtNbNYMf7XZLE8e7u8Xa3DkZraUnUTPfmLxqKC2UkZNLv8qFycHcnPjhT1pLDhMUu6",
  "key25": "54ZzQe4RmucDweEiq3KAMB5TLSa8J9f2HWHwpngtJmk5BKxLb1GATD5XZaGGTkbqW668Vr9r88KgC8wUY2ahok8n",
  "key26": "uEbnaQduyCUmKoABxqSYU43bi76WtTTJuXB4z5RkjKkGmnpEwqNw8Qrf8B6utyiBeQiEaVr92g12fViAJjaZNkx",
  "key27": "34K2hJEKUcrHnUjdnNPaEeB2JfAdUGLYASjzLaWyFiPVEeXUHRQpFfJ7EuTPA5m9u8susjpP67ZEhHaToJKKcw5b",
  "key28": "3TgcgaN5UbCj7ctCAKxej13WvVTDgZeKGwcEF29jJH59Du569N6od95g7smkjSCEgJaXampjbVRFg58euPzYNGQR",
  "key29": "4rzB8mu7Ny3ZBnBACydYfd7HvGPbDXWP3vQuxygNi7RiZM8fSUnrHsrdtz1HHd2tmXXbBpriqL4kwZiLFpCtiNqj",
  "key30": "26DWCLpDztD8b78JHBqDzCt7knD3AfpLscC5emhkjAYLiStanZDyUKZAUE6rt4aqVjntJo7St9LmqFwF6R5FBu18",
  "key31": "4ZpzaaR2SMChULp9qWSCfKGQQewVAccfV7gG28CX6xbLx4tPkNUhQUwim8rZc3AjZyRPgCtfFLPsq6zpXUqH33S7",
  "key32": "axbEGftgZE3j1JBxT4icqwCn4VKQSsbBSZuwaexwFvkYgtiWvopomHPGwHYPoCFKNrZh9UNpHga4efxMMreLASe",
  "key33": "4RkhyYQQsXbKK9XaxhViUgKMSKLVFUpTis49LEpNS5xHZP68nEvvSEH8fJEvz3oGnwvpKHLRpMHRGkoUpEUrAeaf",
  "key34": "2msx4BsJzgAgqBbQwt5R7Q3b2Lrpqbo82dN3B3d751KjT4F3wQnmMZty7DCaAeU6ZLt54BV8USJEbSAP2BWGn9mp",
  "key35": "3MZLEqhuQ722pazPHr6JPWJFVMHKya5rZmBqU81UNPfHMYaG9bkKXXR5LgtJp7V8zraH7TM7UMNJuWCS3x51kEcL",
  "key36": "48j6qXhLRUGceb9bnoM43wpmENBgZ2MLNLzYuAiW3zwGaCAcMWRj65kZ9YQZqXQFS5oUCxLaC9cuZkkfFiENVSwY"
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
