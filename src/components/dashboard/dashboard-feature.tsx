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
    "mriKgsLQSkfHR8uAyjW8ttsGe9uV5yjzW3xguK7gZNbnk3VzfFN68hrGqUNqB6uHMQzWRqFJLneByMQ2WyVHiYu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QPGYoFdfNpswBYVTaeiiAT12WjRd8kkmrJTLQSh59aq994Bmn2p6HyjV2vaf9g8vkyWpgUKNPGCeHpydgKWc2YM",
  "key1": "3b1Mq8YzkppBdVpuPdcNQCVzYvv4HGqbqCz9SGeyHNMpeLGFJJ2ypkehBkSZLrMY2SLgggS8MuxVZxzYyRnsQdfk",
  "key2": "wXXgoiDx4SpYY3nZDkNF3qR7V5ujk58ogNS8jXPRqF9G4ZqLJVXpWxZxjEHc7EDEJDCpPPwSKQudjqgtSMtoaNM",
  "key3": "5xwDNvX1ud7tyfuT6aLBWaMNhRf1DPsFzE5obYZzcRKPVT6X2A3b6McVXdwkXdNF4DEMP98gpkvNoPgH3LdZsxo5",
  "key4": "5EgKDGi353Nuvfw8e7rj1W4KKSDdUFvnDav1P8kfe3SyseGy67FHEZftZTpXpsXkGznpvbZ9MJZRLXuJPCaLyrB8",
  "key5": "5oS2SLULKhq9j7NeRdySgpDrmWWgeiRrn3fuWzofGuzWKFMMBKYmvcFF2pR9Y8Fz1fBH1xYkJhzmiuFRHceAEmqx",
  "key6": "3FpBG4dZdpUQHzHHkRS7gKXjkHUJBx7xmoqZunER863YfeWLKYTJGnmqTX94fWUywVXx5iKxD6KqzvABCbtmpUDZ",
  "key7": "3BTSWAfPSmgZnL8DkEMSrrvisLbEbsnFRveAxHVwXiYLTvLLE815ogqh9uqff8vGnefvGGmsARsbYgvu1Zztxfri",
  "key8": "3j6Q6yhqqhZsDQx6FhRKtU2Jy2nxs8ay8KZUgK1uKgdsGNAFLyTC18hjZVUD3EUNEXRY7QAeZENB5PM6NShBmM15",
  "key9": "3e4jhuuLU5fR4d9mJV4R6GW8cMhC9zS2n4o3th5Y82Ue1RVvzD8LYAhybuzAiq7zK3Ky1TnYJ6fNceZTAiTBxwNZ",
  "key10": "4b65WUzuFJTLVFsFGg6eTk13RAsCKWmTXkHstHhBR4UxcLkXsSkg4gQz5ZDwfnt7ERzUc4EcWVg1U6ucE77jwAFY",
  "key11": "35kAW4AdcgEXNEY4fYdrus8P97eJMofT3K9eBmnHkikUPULNLxq7vMg7ZPwdFAnfxRELgc9R8ASWD1pYaJsfSrRb",
  "key12": "52UNUDWu1Y8gt5rhcydnMYr1ffWkvjKyt3EbzaVta3PWt7id3Rg2bXPgzCzknVRjD9JPvw4Rd3p9eMozr4CtWGDn",
  "key13": "3oR7LN85wtXPuJ7tFWbZCMYRkAA8rRWTNMdZofroYdbopjtFutBoZ9uhZv6qP1FZpB78wBzCr9X3BqsGkqiKpcdu",
  "key14": "28z77NPnutAQHGV2yKsEtST81KBDPX6jejCLkh3smveYodeVaGQxNAWx6rCxvJ7Ha4YJcexEgUZUHSpqPSgXM48y",
  "key15": "MX4HLpu1LzNQgcs7ZsrTDuV1u1EfNK4gqwKfVSfFeCxnmgLdvg1KAEv5ueNPTfBCU9UyA6LUayLQJuQKCFmF4Sb",
  "key16": "C4mUJJE55L7RbVuMMJHcegyEKEuap9BXhbVrc2nMuYkKMrxhMSsVFjYf32KMy784nwBxTUsMp1mUo3wSnhDT4Ad",
  "key17": "2jv8m15tiF9joXpemHunt1jXbniVKL9GK2o9LVxHVVAdtuyjcJ3xsdvU11mobMixptuXpwpMpicHjAvqaMKKcy3f",
  "key18": "648EXoLQ3TWNmQUucwQwDWDEDe5NVx1NGeQN5E9TL3s3QibHHQLdnyKbgTTBXqdYGhMcriZuG9F54C7jj1DxYns2",
  "key19": "5g3vS5BRvMwDkrU4fewz1bYwvXq1YZNbKCMCG7FaNo1eXayv6kaVqzWFR1NktvnnpJqMiVwsu7qMqcWyhEi5jqrL",
  "key20": "2yktRyfjUkiPtojkfzWH3w7pDSjj4z1r3bQvkwVS3fFmwo98UtqCqjSn9i4h62gwkCRqt1T99D7ZutQqLMCtCYwA",
  "key21": "5oyJRQaTE3ZikG2DPyQwVEWJqbEDiQb8gyR1tf4VnBXedewwwzDcbnj7qRKeN2MVcqViTyZU8ebdt5YGk4oXRcGH",
  "key22": "4Ch3HchjSyn6BzjyphcdH7eYu9bgeMHh9hHDDJrEedZ783ut8pCJsfYZYrNs7JkEGHXp9yZLLJjcH2D2W6NRpTv2",
  "key23": "fKLPzTBT2WSzYRQAc57GpP5CBHjYUNKf2zaqsEVX9v3ryVQy3z9CAWQsCztFf8qCgsfe6HZ3ueuocJkTjM12SLn",
  "key24": "5bG9cCrTF5NC5ftkivzrqA8Q1vM8kPuY2Cif62EuoTvEdcXjcNYRZj4SpQVvhcNoszd1br6xTzPEGyqV6hLmeL5X",
  "key25": "28QeN8rqQWfBJRGJhfgDjcC2A71yRum5uwSW4RnoP5kk81ximvv428aaYX78oHEftJdxhqpMkxSUS2hqBYKMDy9p",
  "key26": "2USC5FrJZYavnNVZpQrXc6nUav9R74ZvhddskPhwjM4DdwxYzRU1g48pRcAxqYaUux2FP7rWiAXx4JytQ7vBeddF",
  "key27": "SsdDhHpng4qWt7UN75QEhkicicxm65Q8PwguUsf3EhQjwcEfrGNkRM3bbvMt1Wk6dtEarRgPpymvPskNKFyBki5",
  "key28": "5wKt2ammnKfPqtnQdTdYf5Grx1N9MAj1t9h9Wc7T61GQR9y5RBfm1Qajyv2GBkkXRwQ3Hrnqd2g4BhFRxcA79MYm",
  "key29": "2e5ToNCnqLmuR8ykM3xEJwweU8c3NLtzXd8MMS7y6cNrGJ7JjCDPR5SSWpv5r8Lyigi6LqALoMWkYXtjLft5Kv27",
  "key30": "evuY2khsmQfsP28MVsH5dQEpsfmJjTGqs19QyxM4TdPPt7NiHvEr9YLduNHrupGkKEHoxrjMxeYFkBvwmiKfYaF",
  "key31": "oCTwkbiPL3ormNTsgWqDbxHPF8uzXnR3VPT5LY9euJRF36B2F995PBGQBucyZso5sCVA99PPGTJ4d4C9AFe8ciC",
  "key32": "3QkPJRN2n4qx5cdaF5H7WUTzvXSuESBKDhJRGbs3KvG7VAezHzGvei6zoyXjgCpzKafLWddm56CwZBqcdV1ci4uT",
  "key33": "p4oA7gxfwGGNDejbhNH2Q8TNdg9fvnqsCTAz5K3zAYeh2qzs7KY9LQ54N37hfBFUQU7zy1o41xX6aGBR5dnAps8",
  "key34": "NGBy9C2izWY292h8n6FE4bBW5Z3Yu8U1Qojya6Y7tGgQ6T9FYr7SPyuovSWnnhmhe1F7VW1L3h5eyPVGDFAbFGE",
  "key35": "59uuEeXWvvMMK6YvbUHS2FFVtjVoG3ocisbwfpPCpyzsexbbSCshHoc5BnrMj6ESwmfWbQ76SEKrYsGvjJfztHoy",
  "key36": "5UDyRLNznEg4BxTr7E3XSonj6PuGkveNncbzp9no9qAezj5UHYQx8oR9gmdwAzBH5Ea8ptAVUnZ34GVbGvnjS8RG",
  "key37": "4Et6C8iu2fXZY5vArmW6CwcGVnHyUVrEfBFwhZMqnXyDwBsAnzd6Hj6uucdbTvXKb6kAojwnbZbVN8k2WfovjTVw",
  "key38": "4x9YFicwarhbzvAfjxjnzKqvAuCFuoLbmo9mwWoSTgRsXYto7yfXhd8E2gVgFMKW6hig9kArB3K6N6NUVpQrR6rG",
  "key39": "3zt57AC9vEj9e21W7SqXfDXyTfzKh4ZKNhDK7nFVfPyojCtr45h6YLE5RgpKSPPVNysYQSG3WzP2MHdikn1NV9cu",
  "key40": "3pqr8fvbLs35z2JZJUX7gHwYbpicULzWXY2mefLh697pRDTakSiuTLxiPQEQ6WE3zT2MTGG2epHFXo8zNE3adTob",
  "key41": "2niwAR3zy7b5x7kuQCrL3iB8dhH1agYQzfpVmrCUN9NGjAQiz9DZxGKLikLk7Ei3mwq7jTEyLcwYkyjDTnHoMuFm",
  "key42": "ukNZxzNDBSJHm8aXc3c8CY2BWQfpFnNVgpBjbHdkuPs57MQfCoxCRTG7R5GS3awDTCXBx12nMZN34ErepV77bBg",
  "key43": "ysU7F65vnnFSWkNr8yqxvL7g6WJooFE6CReKwzuyXSssW4qNeaRk2yAS3AX3ypaMzMKJF2HvWrXi4eEHgBfKzxH",
  "key44": "4MPe28w4oTvCHmYrnQ54gqYPtQsX4Whi8BFgBtrNXqEHPgD5iwjosaCvKa7YdBW6h8qFYbvoDHPBT77RK398cHsh"
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
