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
    "4pcv5THEdDopYMynm33X6ooUWqsDo9NLNvmfiZDeEtqTYTZrohCmMUjdBYYxtnTmqia7oCnDCGHK2h79iKiBSnmR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xzetwxkztb6idzC5ZUbppoYC8ZdjE2v1uT8LMwMSG9TAXWCyynqCppdoP1S5CK7nXCRPZkSQ61YYY6rgNgDvZMQ",
  "key1": "ZYKMfovfSbob15a2dERqwZb51g13CcaEDRMctzBzHM1dvZ3LTkhMfroiJ8o8TgxJR1DEDjvK1GLNJRttknVtkCx",
  "key2": "4omiyDoitkfyho6783uSF1hGepPQf43DbtdfyAffJpf9ofaSdorVUvDZzDGtPU5NR45Bt2CbJoiJDtWWp84WihC3",
  "key3": "4WsrFEt13YCAc43j3wn7Ki2sWJ1y37RmAFy6UnLN4zaVhiQLA2TWyjvPLLf94uwiCDqsMSLj6SArQKE8VZRgePo5",
  "key4": "5Aaz2hM4exZ3fYtmSudMrB3wMuFFi1MPW2bdgQPbJFE754haVa61CV96RQsMCHrrEutoEiQsE7Z2i3Za5ntmFC8V",
  "key5": "2xBSiHdpKFJuHuM6P95Secz5bxmQ3mY8ync4QssC72Gw1dsjUir41JZ3ANQpJLrvuhKHrit8rnfYsA8w7EAAwZVq",
  "key6": "2AF4sVAxx4KSatgTjBuKnVPBbopmQ7fL1TVKVDccXQP8HBCeEcoQrmXiNKcwErzLruTM4bb9taeyYmMDkeX787xW",
  "key7": "4LVQHSExfwZNtEV9iqrACZngpwqvMQHPq63GinPKgEN3Bs6fZ3EhvWEp6RdTKtSsizN88oGJQ2VkhxdLaxSGPWNZ",
  "key8": "3wNUVTYhXQpH5fzBUD7b1YswbKGYXA9frmGYzFXWZhAoZZqytisiEjWxhuHKKW7t1V9XcJxQfyxiVpfFFnn58LaM",
  "key9": "3qrjbvFx9Ag5uma95RrqbZQAUw3fbWePHMtrF1SfiuAb5ud8dNznYdzL1g87DFzTQ5PY2QcNuQTpgTnUrDsFGL2f",
  "key10": "5oT2TKDDfGCz7BwC3g91zSzYvDUaTELUG7978KHPqr92o2ZzXmfHw6A6h1yLCW8Np55psD2pxjrKE3Zp2GZCdG3v",
  "key11": "2CwwrUymCYnEDgp8EEbASe8Awpqut1Fpz3naQfQr1EFPK4pbq2rc4ArcighL5dtqBxRNcznBbg1Wq4RTgeWVseEE",
  "key12": "5z4D2SqCXMYg68MvzAWj6x98BRpMX6XEgvdXcFZZV54CZxaNrEE2yswtzAAa8dHrzusnLyoDTymBeiXGQPzxt4Jx",
  "key13": "3tABu4ryxMhepRP2Z7uo8AofBjj9oggEAh1SZcayqhuwzq4n19cYjLyDnk7Knmt8ngxYGTs3GpUnHdqmL5Vs8vxK",
  "key14": "3AxjSWwZpkr7aCf2iC65HvsWSKb8rQTBBk3sRhi3wspP4vDdn5tLE5ccka9AfoBFykHHfFnG844EN2Nfievxmgj8",
  "key15": "5uWU5kwJkvPaDEY6rGYiN9dYaSsH1NxXn4FdTugGk7HRFiJcH2EFN3tEYHroxa5mJUs3rC4GMqNz9yt2MKeuo6V",
  "key16": "49Kt2tGN3dQHoTMiUKxDVCXRcgh9Py5uhqHMUufFGiayjXcfokUr5FNKtyQAoSR6boqzYY3dMHdw4NJyWmVeY9y5",
  "key17": "46aNn1srdvA9nv11DP9frGHc4sTspWsMxLpV2NwSjREncSQweNbgfCbD2iEXu8JpbLvjbVxqETZCWNeTx9oidrMU",
  "key18": "2hAyEeAMPnviLemRB3XDfFZFGQWPeMV2zy1sT8pXZBfNZeza8j1PBEFZ31uPYg1h9woYub61xvxZXdVCvf33DDys",
  "key19": "2f4WvTwqE9EvjVDEh1b9iaXczhzaJgTVq4iiaUuck93zX7U9CVSSfSiqchdKDnVYAWHLk8vJTWBohgXRbL72SbVT",
  "key20": "3cLpD8dwUoTWBsNn8FhAxAFHNWAvLT4A5rC1ZG1TKAGHL69dZmvwtdNpbYZU9KLeyhCxJojhMbYSbhHZE3ZtjCsP",
  "key21": "178NLNLE3HNBfSoA5DPr5VXQYja6YxTLh3WcrtBjKt221987qPrzuvyQRgtbrnfDsyAKMQWncvjCj3SA2wTYfKM",
  "key22": "H3qh9mFYnCNF9uZhmaKyfD7Shw6PYjv9yfSoGuTJXvx73VithcifumkdZYFLcffSdT45Ecc1yDD5GphicangNNj",
  "key23": "HjZMP1Wigv8V1MdJvraKTYSbeLnjxETbqFDjWb3DfL6wj6HuWunddrGmPwNFF7nm1FH9fkqxUmbaB1NxMVkjUvU",
  "key24": "3UNedx7dfTamLCRWQZ2xavRnBYsz9MuPpXcBayAdJZcyb1goiaA6jFrT4ZhbYyJsCqrC9WtdjKh52xuprUAHbhyU",
  "key25": "Mej1JTdBrrM4cDBvpJ14mwvpfPyWTDhFRk1B2EKkLpV9ZJzvFLkBrDNuDAWgdirrtBidGLfzyM2avnYsWJkqkGq",
  "key26": "5JKANitMgaPUcnmKaCYjdb3Hg7tkgzLEXK1mKLqcN3KqScAkawZQMYenowLTTmZmbA69vyjwLC1DivFLdKDofRzH",
  "key27": "KeA8Ym1n5ZQvb1SrnNiwxUgVj6ChMGbLY5YdhEwHfXcRLpWUjme7Csnr7X7iex2ppQYgXqjKsnvZWYgh6P8qi3b",
  "key28": "42U5ztGCU76Z4oWnAg4xPu6nHjycnySSGT5WjCkU2LNpcfq9JKPUKJC7aoNdSa1Wn6VgcUhKyGd5dFy2BWvkuhbZ",
  "key29": "2CcABJnvt1CSQxstdWQhGZKpFX7533kgj4D6ZE7RchZpVCub4RhcboUFKaxipfgmp1ChPRh1XAD2QRtoodiq9Qcc",
  "key30": "3KcrJgUxiKDx5DZUY84VvgibbVvDrZCd2o66Wz8rH46zrFqb1a99zj5JmQa2kSGsoExifsR6oqETrxMwZresQL6B",
  "key31": "mSKCoXT7JrJ56GtnJuh9UyjB4yuvjAYVLo7cCgvqmmu1Q7SpC4Y7EpJXp9KCPa7dQVfrWY8kSkzqvjqx7hyoHMJ",
  "key32": "5Qg1wpkdtoBHfW4MuYsYzCCztmNP58ZQPtjysTmjZWY1mEveQLp2jnGsqaRtdmTYZBa2Um9dVmk4zTA97CfF2gj1",
  "key33": "4zmeSZTAU3vq1BnCVVoea3EDhywiNU7GZki3HajLc3ExBRXchuPY3svPmAfjntYNxx35Y7kLJoArq1TNNQkRDfd",
  "key34": "sdhmmytHtqkUmuMPwHdWQzEFCCC7Q3RHa291agYZrx1kQqu5iddmQHNCMSKhV5id1HuFL3KkmyLwCxNtqnANpKp",
  "key35": "3Y5wXNK2EGufhT4DLWBjVqYxCi73W5soz5FbQCmhYW2yKS9wEiS4f19QxLadKf9dC2Buc4kAyYVmVMMGUySm9WZT",
  "key36": "5jt6faGM98uZr6KpRzrcvEjZ7R21qq9dDmeYQZvA7APSHNWxxG6ojXbVKppEQRW7pPSkDr266ZimVPsJZGxE449S",
  "key37": "5kz8py81afmFvAYBgGL6BMZ5L333NbEyXVtjk4pEWnGKLR5MzXoaxbkYSGokRnR6D4u6s8xrD5VGqcqfV4y5dEkX",
  "key38": "5MJa2PJP3KSqLqh7ZkuZV9WYmDPuu5Hpy31sbkpJDdg9dJbtQhRhsT6D2qoqqr7gU548vM78Rd5jv9pTZpKJNrAo",
  "key39": "5TzBp31S8MFS1vnHR4D5t8UyDCK7QqYHjxxkYiA9AtGrjCdrgeczgKEtbCByhvT3JPLCRWo35kBE9C9xKvuJ7JU5",
  "key40": "4Vwgt9DD8eUQQZ7mXdY5oPZ6w5rnok8uPF5GrxWSij249upgPMfLgo3LFoTksPu5MdUXG61C7ttEqVKWsfTJepKg",
  "key41": "5jDQgzpF3voKa6GKfv6J1vXQKJv2hiSWEb7tbtaCDwNC3C9gtrYEUqQdg9Ncn2ouTdZYQQRGP9rjBbFjqPWZ6T9Y",
  "key42": "2eXRTqKeq6rnbdbzZ7qxqDULVWzAn1N6hszE65gDiN5uEHQ6qRhAdB2car8PqDGH7psGsT2M58hNC2ePjsaNd3kx",
  "key43": "5NK3qKCiC7fk8EyfzLEJKgtcndxEd9phr2NB1HcvP8RJDQtJQCKqCwR5FZZvGX5qhTxV9ydn23oVhpCvx7diUY44",
  "key44": "5VFLBGDNdSFzM3qFN7XSfWQZG64Edk1ajkY4UxLsz4v2q2cnc6WrUaML7XFey8Pu3C4wnCscMu4tGEzaFyXyufrD",
  "key45": "43fUeyFJVTp1HGFABiJAZFtUMUM3c5AZGgS1zPS5v26nqSyj34GcZukRky8BPqaypTvVP1u5KVTBWfaRupP2UY5Y",
  "key46": "uuiixut5ukoDDcW5KWBfyXW2Mr2jyZ3uiokkoSqy2xw2s4GXXQjrRXpmmQ55s2RZBq3JZgG6W28BysaqKGwqvGf",
  "key47": "WjBPpi5BiN8sNnK6zCAgGPqTxQxbGKFgr4voVNLSauCRoLbWJpTXCCY5gFUsgaVN7SZz4xHPUu5ozEbPJqXXuvM",
  "key48": "5ofRz6EQR8v6mi6W8Lm9Eo7CGsmLqieUwjLbeqcNGF2bULJJhjRC6RLKxCszm9M6wuVCY7TiYANTWwzXWR59JQpL",
  "key49": "JXGgyayANxqS6X791nhkCM8H3HmgnRa9Ec3Vxb3dB5qFEs276tfsFgJEVcWzCMA1rJ6PVdKNUaknKtw3VfKZAUC"
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
