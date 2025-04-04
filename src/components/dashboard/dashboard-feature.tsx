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
    "5jCnRdYXxSM2qxKxShLaYmiXouZHuvcS8RvpFUnsv2XPJMqdS4fkD9gEXPVDYbSiSh9WDUKraTX2JqrQwZdwVgVB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HPjHjvf9MkMRFt3kSgSe2tgwnjVanCQ4RiR9GXTnXVXwGovB7hoEfKQnAGvC9n9Y8nGnpjptrvg6LEdkiM8yCUw",
  "key1": "5Jn6SwW2Sur6deggcrQKPsiRWa5Hqj9wJcjVQb6De652cFEvgEdgr9aaEJhDefiYXFdogCruWRNqXSqCghJDPuTu",
  "key2": "4PXrzVQtt2MHoeuN2WdgiacnUwx7VuJvWsfTErhzBGtUFBZekP3e34VnZyJNmvz3k93P7ZxPLXWJMikzUcc2J7wK",
  "key3": "3ypHKju34yyXZFdjtBhKZuazBTywa31WQf26Lyd6SViLan39R4Vu6bEbUnnxLgm5nZAkr1fdka7fxxRXSgrEYhd6",
  "key4": "3nxRFGdsV5bbggQgjnqWeQaXXxnvH1eEqHeP471vv25EX3zcVqA628kirPzzxNSAziYyL8rgur85n1UJANQMRDRC",
  "key5": "33jSyPWAhegYpG7vozZ22pHDyDGuRcRqRbxxqxzjCokD7NbkancS2qn6WCcZVqHHTxwKgbwpRAuaNe8GExskkyYP",
  "key6": "24EBtoPy5MEnEqtAw82r3K2QKVrViELeam26fH6Q9GUNgXqgRB5odvn9pTwTixPMPjoRWHx9HM1CGeyPnVKic2NJ",
  "key7": "2GNdTjyArUXNgVMdngeLSTqMmnj2QBKV8dADsJSnaVe2qA4PvCix1zNVoFhwda8AgNCG83ky6VAaQsxt8MP4eSCt",
  "key8": "3d4qkjWq7TQWKxzzTUwDmyphoreFCF3gV1NHvsxm7pwUDBFg8snBsEMwTtwJsqyuR5qHjKi3FzG6fVerckfTqwAH",
  "key9": "54q1923MEx2xjGGNULgvvsAMbo1LWykWLkCDzn66L5gUEUfdJ7yFoQjNi88wWyL6gyhfD2vSLU4Nttw6eFCVWFgC",
  "key10": "BKEPRyk18szWHXY4oYuXk6V1rgXatxAmNS9XLrdqUuzjppydAvHxVEKT4LDCxHcbBUgR9ph5NTZxfzcNwTcTnnR",
  "key11": "4Lp3U1ReuXkExRxb9aWjzyaRBue8oPiJYgF1nSvizXDkqMsSnFn3afnXDb9UPNV9BgsYbqJLPNh1NvB1Hp9dctu6",
  "key12": "4yC9tTLASGgF1Fng9LK29g2DGKN4xtVrPZnH6L6RAYK1Xwg8dLwGgDtvtFsHi9rr3dGVXN1pfd7QmjC9vUZt9yPF",
  "key13": "5xkTiLuZaXyQKUbp67tYitEmDuemAsfzuHYQ71NPF1AVZzhDz85eJv5wYCpky4QtVqRYpAgK8AYg9q96AYaLdWj8",
  "key14": "2NnLhFU487JKDdu9r9r7S9cVLAgWczBiEfkHf8TbByBLyRryPdXkxPV9Zu4Qqa9z2jCBXscUdqJv7ZFNjxS3ZTLv",
  "key15": "3XAfBV5JEFLwKX7jLhLsc2MdqQWURp7jryH9x4DQ4x5tgQC5misqZXbYt9ZVkE54cNeCCWNtdEZWhFhmL3FvaeQm",
  "key16": "3YPNDNtJMEQLaDQYQbA9o8esH7BNJZaMdXRCpmpTyMRjFgmeW7kwRQ6M93859vSzRzF3SadeztAyBbZWnX6khNH5",
  "key17": "2Frk5BZWXTg4kuuWWNVMjb3dvegMixAQL9pzewyqpHStqZTEp44LL55ihpNNJ9U6YADNFfYMLveAbiZ2Uadv8JvR",
  "key18": "396p5txvXt81LnRk6CPNrZFG7XFRWwwWn1Ukq27NBGcZVNPUvMv5Aeq9JQy2xQNbqTdnwYdb6xhqVaYhNZykZFFp",
  "key19": "5y7MTEMA83Dh89wMujpiGtTvsgnXQv5CFoeeKrFPjKvqp34JSBktAECu13GWv2kHg8YyZV4DPzdC6HmRRjS6dni1",
  "key20": "532asp25JCUTwH7oe4ig6gPAGn6qCBnSg8xBxkyGES4TgMFrNJ5QC1gWLnRmoz1C7sox6oTVtwYcGQNjcevfL9xi",
  "key21": "3r77TmPN1gyUTxWu3PLU1ZVeVWdUvu5KuoQBzYugRRGvbT479otx2ArzLiQthBPRHmiPsSX5NhjKE7bUytEW16rf",
  "key22": "3N4C1VkR1QWKNKmEXzLzG2gRAmBjs8s7HSeg5gBNL5yycYaWFeYVRAeUeYeQYeYycNPnCXdE1dimX4DLjMhZ4XQd",
  "key23": "5oVEPuAUEFfBVJuZLyn1G55F1T22F3AjyRyeYAeNa1t2L9ZqUanyr1WEYWeygHfbcEDtVPuyHuAd6HVaRPrxJDa2",
  "key24": "671mRkjfiEfan3ZjJmPXF98hJ2UjZe9XKhuwuxTtELrHrZMP8njA7GdLLCJkn3fXZa6qJcUzQ16jgWJSRtEasNP",
  "key25": "2KU4xTKnm3ZPnhNP5t6Vv1GVxBSoXLpDh18SAXwvH4VU8qeTVoA2sXELbT6a478fHzdrDUNruED1f9paSwQwxs4D",
  "key26": "61YYAUzAsrm12epVTsZtkCf1Yynw4XZAfEMpkEW53wdQzieLGJqPXVCZfJj23d4gyQprZJuMfNCyoBBHnFGzN9L8",
  "key27": "k8mY43b8QR1kCr7zSMkx4jCgikqXK6pwkNjGq31VFt9EGfjW4Us47aPaXZuhuWNwK52ohrPiSoHRiDhvr8tDfMT",
  "key28": "2U7beezKWFGPePDpeG6dui9EpgULq7ukPCni7qyEQE7w2Aao5PFJV76LEGNdpG8aaPaukDDw8wJh8itTt3ufXXP8",
  "key29": "3qYawjfK79Zvcn5KAmm742vWei7MFzuVkh4fDeQSCEoPmjKC8kiyQUYjTTj4AwCi5VEtZs7feBqLaU5BtZwhc5nR",
  "key30": "5Ph8pFtWfjs24aWcRZZkCjzoS9s8SgnF9h94AYTuzt9tZL9M896BTxaSV3CFAygjQ2c7vPgHyGUzdydyCMfkZ1hN",
  "key31": "4UU6Q7bGA6bzQSnf32S7fmH8EgJPWAmQ6ACmQZK9QyDN6Dg5aRVAe12F8rdCiq4HmyZgb1kfzWy8i4jwG1ngErXS",
  "key32": "5ZaLsXevKUhq2smM5ZDmai92zW7ex6gpmdyUJKdoRC1PD8wcPdKMmmwZnKrh4dCQGqoSYUzqLdt4aXibDDHGsx8s",
  "key33": "5Lt5D7suv4W2C3UYHMMAVvaL7v8WpUpnrEbyj2z78MgnQQhhnNb5RvT8EDVF3nQVxPmi8NyyCrbtdT1BgryotTez",
  "key34": "5FCnY18FavzrNwDuN3MrhaTcvfZAKxX71eVwTu5B4gZtEtp8MgkoU4cFeoa7Gzs7NGaLBE3ApaT9EuiQxDQ1jDqn",
  "key35": "rn4oXPiRdpaPpfTbSAemB5PPFh8py2xDWBeeyppiUpUEikZEF7Au8QifCTjatg8k1StihgfNNL6Ls1HKtinj3ou",
  "key36": "3SdBwnKLGg96DFyTjCpCs48r73ZDob2PdqS4BTZjRapv4u8HwKYWXb5PWeUPz4amjdjbkZrY1GbvHN32HmdB1Tbg",
  "key37": "55Npu9HC7N1tHZRoSW3nY35CTQFEV17k55GDpXJp9TLkYRNryKNTLe6R1FoujPPCuD9TAWKzuMGLstc5JjMboZVp",
  "key38": "2qsfyRPWCbdB9EwiWDy3q5BKRScCZGiZNTmJAx9D97s5PDLpmZU8b7P2qCjuSsd2QZjnGNhDFrsvRadReAYyoBfb",
  "key39": "2SWsW2s8DTXMdCimJ3CceiUHPk96SWJRJPaAeRu9d2XNNbUGUCe9BgcyTPfh81h2uHoKANcETa5Se4okWDGtznD",
  "key40": "5RGub96k4aZJMz7xvDZQcvvBn6iCdUTHvPm6cGk5MJ4BbaKT2DeS925Uvy2F3FCinrdrtTRqdGpdZtNVWar3kagf",
  "key41": "3RBpvy7Zk2aJbVB7R1ECDWYVSNnhcjdvh3RZ3J3fgcHdrBBoxLN4uzfmsfqktVLzzGHHRWTdqGh2htsbfkjas8Vm",
  "key42": "yaZ7RZv87shyyedVFH9hURQV3zb7oEvTCzQ5E53aVw179xLbDRh8nf3uVpvM3nQ2AtiKuXomBJSA1sr2keLWLVw",
  "key43": "SfwqTkFc6SFCNmJx1oked4DEdMyQpe7pT7nk3CzNZPNqBf25w6LQvPbkFYtuaqQgF9FsAWwpQYMhTZDkAiHQ3h4",
  "key44": "cNwDMh5YZ7ZMQKrA1RB4v37omqkK2vi8RtzSLRW7nSfenzQsrkiLhZE5hLhVSqgM9G6hMKDa6SMp6qnZpdDkWkN",
  "key45": "5Gq9LTBnn3fXPTQGFFtrpMuZgac6ZvgsGSSrq54yn5amQozxoYtzPQ2qVqQ47vsctE2iSer1EUKNGAaRngVZAE2G",
  "key46": "23oVTyDqFzkyzRYzzwgGg8EYUFeC647D7cMMPmQR3uG2Djrf6H4UBh8d4usAeomC9DuWpbNDFML8QehqUXsYFo8o"
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
