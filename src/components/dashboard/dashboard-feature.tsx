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
    "46uR88erejRySh2XMRf7F4EChHMVJeVgtbxizzxoifPxNfMrnF8tPv7i4WUB65qKqHcA2AUVKkSvkEhttyuXmo4V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aipwZNbYVfsCrjqB82oyU4Q6iRgUH8V8b9jWCB8YvTmZZKGBzeVptkEWp4iPx318QWiRU62JyPxLf7CpXsUVa5R",
  "key1": "4VwoW98TW2wpVEu8e8mgB8TJUYxTWqD5hekUSjMvif35KVFx3vHnnAmWgEJM6Qf4stUa2tNXsB4pqqaBzyn9meLi",
  "key2": "AGiczZ4GPEo2Eco5mrMrmPDTHbfxvWQ2DjYPAC39MREuAC1Cv3T5dvigUDtrJCTHa6BKUo95bdNkWVjepDggo8L",
  "key3": "3VtxT1DpYz9eVoewDmQAxbQyv7FJ4EEfzrB1BKZ7vagGjEUVKwHGRpfNEbdy52BrzVxRu3qFMjPqwAfLuUjPWdSF",
  "key4": "4LeQS3EBxqsybru2qRTwrr9Hds2VPLk6bu2X1rrmTTWs9fv6sUS7Fu89RGh4SvCfvAcHTBXxZerqmPbEQyn75Wod",
  "key5": "3r1gh4G1XY4gVBn2dXQfZFk5vrGfKfkZ8UCy7wfY26NWz1FLDTpu9yiXZUKrLa6q36QbR5hSYDBFBCpxvASdsBU5",
  "key6": "t78DG73gy8pdjQF5A2NPkcGXz7Snrxt5VYALAmNqv5VdozukLVNsAHPRNAZP1ecXozYT4d11QJQDNyJASePMeG6",
  "key7": "2yWj4rQtSfx5t7MbVnBnji4posPeHQ9YX9U8KxcHXhm1DjsF7i6ornDUZhjXDECxhr1jbkDestbZfyhiq5T48uZ",
  "key8": "2BeNSzeNvp8buNq5ZwovFdgPpg2ZwMiW5Sg9MwSma2wVuqLhRyqV945MRLFFAkrKPwMipqqUAgKVdoGe4K2QGbGA",
  "key9": "2dpLoyqXiMJocsMNYi91wGenGBWGyTaYvcjBuLaaNE5LJWkjmXnrPUBU4cN2CYMhc6icv1HdiT4Q7cERhtUkAYvd",
  "key10": "5SjaSCDYnZZzM9yKZo3YTqFmSM4T7oz83eSoC2tjBw678pXKdmarRr1hUqjmyBDuqwUB3H7DzWpc2izpt7gshUtn",
  "key11": "4a1Ks6QAU9WfZD4EVMSBNSaJFAYhKmAqJGZckvmaDdp2qGLeUzxdmD1a8aGsuav78Sy4jKPZgkm6fv4eoPqp8x6i",
  "key12": "48M17nK6LL6ZH8gMdkZzWJRVTytBevDgWUhWzQQmSAVxPxVqdRkhDLPnt7FTBX4XWjFDhEcAG4UdVWt4YZtJZZrn",
  "key13": "3mhvMPHH4iYBXjS5Md68xgeG3ny7ZxL8b98hsZXPHV7sgp3UokrusTEsLY2bK66o63Hvaex586SJrKyW16PKBn7Y",
  "key14": "3Hpiz3gpFrS1bj9WMpwBJrrZ7ePvQUU3qFk7Qis79wrDyVrRQPLJqLAMuFNCfdhwRjhmamyj7AkXNQeMhUZJNk9H",
  "key15": "5PyzwUid9ZjAtL8JcfYfnQxGGgorqdjeT2rJegL2DPD4mbBF2q72uJZAPsbWha64F8FexaAsaPde8jwgHS574F2s",
  "key16": "4ntwhfnA8xY34JMohMXGBZJ4vwb4oJJ8ay6m23kTKwhNzbRtQ9nfSNb48pP5CMDtoKApsT1RQ8bPWByzgTFxLP2m",
  "key17": "29TMmonp2sXpvHzTktPtWYaw8vYMhz4qTuYRbnnbCqnMWPPpG9c42ZZVRUCVQTAyCeSPnBqG5wNGnrswRssesssS",
  "key18": "5z382jd4H7suAAgahZAf1mZ2N28UuYCbWR4TGA8Qo87SSirLxN6pUvgnN3MKUGpyZETivZsdFFYScu4ELGSZBCm8",
  "key19": "3bwgVoKQCUYNzEEo6JB5jBqYhoBsr7zrHrdz7Ct2ZY5iuBVSms1iZuzH2MthNdA16BhhHATJW4MH6os1TPYPKGXs",
  "key20": "4cNwdz5DBLdK3tFAo8k8Y59VBr1yoLZtLKaZoZi93TqMNz393vCLx4LLCHu9CGQU5CfDt2TCqppbPDQkzZ7G6BX4",
  "key21": "HpjLayi4KorC3oRJEWYN6QWSrzzQHHqQfxvbBJUebeerCiERG1WtRDzUk18rTvps7S2RhK1B86tmpov8k9P8DM9",
  "key22": "2NTdpitjdyrh35nw43sG6yerWfgzaMrsesRdtsJXNkE4YCcLP3nrZbY47Kbnnc6g3iRNsZC2gU7T4LnVnoTDrk2A",
  "key23": "2FBF5s3pJwz69M5thgjg8kbxx6S79MLb9MCUrR6MoAteRzFgF3VNsE3gH57Vw5ajZG8wYkCRZcTSSmTyD1yMiUrz",
  "key24": "2QGgJnpsj6b6CuH2Q2DpTiRKZgmFPisJP7i3oGZZxBpQeuAWoW47GG3ueUwJnbBL694JbZBdJmvT3v1M1iimKagN",
  "key25": "2BF7jsmnrsDHUmcAHYcKi4Xr9Zjw6LZFrw96kruFvhxSruV62sFxMdtczga5KhzdXipPu314gTumKimCtEWxKyzZ",
  "key26": "2NHTiBKJKGCRosTQWyvgF8PFFqS2CjRw6HEPVmRCChgK1gkyTB7gKPF7sS9iFd5Q8VNnTJ9rdZ3pMniNYfagBZbU",
  "key27": "4km1drGJXEZ6uFpCdHKTxKWZGDcsAck2v13dPdmrt7s7zBWm3ihXdJ4KzhyjQGErqeYfaRLnQ4kkk3AgqtkChtzm",
  "key28": "34itPnGL3vJvkr8GEMKhGFRXnQvyvuyH3miWtKAFL7v2B7zGh2zm6idUqDGNNrgXBJtWEXLk22wq1zxLP8FNQB5X",
  "key29": "48zQyTAsnGSJrHbnqEDN1uPvREwcaDrYbY8toxoNyaztgj1QBWVY3ovqeH74CzETNVTXS1wWjhnC27KzrLxkxCcG",
  "key30": "62RWDYgqbySQqPi6eqQURvXqQUHuUf6cJSRZgYVzdVnGbyYSspC95tw7pdnSftjDQDcsFkAURpFDcAybF1U4mXm1",
  "key31": "2g4y8mjBpqUdAwrhE9NnTUTQndEQCJG7BZLzZq8MTvDco8M8QdnL9Y3Z9yfmysCXa7HHwXtAG8cmpxDYmntNbDi4",
  "key32": "45SLN8hvU9nSrpPJTxKXppTCUxtQtUzup4eDCzfUjtcVRNU6qzEZMJ3JnBAMMn8f83icc6FeCN794r36HfbpY1kN",
  "key33": "egkcVNGeZeBsbX8AYo3RSyary9JuYdSbB1Cv12k4WFEMqCy3n9YQepkFK2HnaKyQBKgn9w18fsK4pfV238tCX9z",
  "key34": "2PuixwbxF4pQYmw2TQpcEU7RC3rR42ADtdgG7ADpUqgg6LViAZaPGrCLGGtPZJZ1qA6NQkfHJHUjoLVFaG97uG2B",
  "key35": "3auJjzfbLBdWofGsKP9Gaiz6UsfYA3nkLovSN4ybVvw8xPLKzTxcn16AezkCnuxaZUGvjqDtjPuAMscWCQEvrbpw",
  "key36": "cdvwyHhX81Tf3Yxke6CFaGDD9TNPrZoco4SzVBKBB5T2JCC63oPVKZmLo2XDghHhMzCVMQbZn6mwzzAG3w1tqrH",
  "key37": "2db72nkPZx31HnnVChbpmnTcQUFZh9H8Qd61TipTEFZTUKsQkvfJxQHmT2UdzJuSM7iSKtq5St6NxNU7KMNskRid",
  "key38": "4ep1TMZtpYQbR11EH6cKuSyY4xMngAESFshfsdJKiDE6e8wo4BNiEyrS72hujk4QdyFrAhq3LfJoQVZY9AsDr3Rw",
  "key39": "2FrQCKQVc1dTnzNmaHM886o3RbQzpfzgjXgAUyX8V9uSEbJLKC6S31nmf7uT1n8MzoW2x9CU2zEREwmH8QEfaHMz",
  "key40": "63Zb974jyAMNLY1miH5tLVJKvNuWLNqdTudy6BzwE5soJgesqo9XhEEzNNEEM4mzDaRSRrza3GuUpFXj4Pq2bTyz",
  "key41": "4YfoTphmLnUjbx78LCwgVYf798XJ8EucAxNbVUYfQ1yecb5V5RfGe8o3PVfpHm9LWqTuPgK4pFjT39rAzukSi5Au",
  "key42": "4k3CPgV18gm6NGYTDZacpr7sVWEHVSPiiXeEAHwVNbYMrxXNrSP9hmzJaHmV3DouRniykLzJ7dZkbkJeZ2Hp3YH6",
  "key43": "322LhpaRHSA5MjbRGXavAJTYiaQGrbxZ7r8nXutiCtHHJBSc2oFpA1WDLj1hR1Ufdie5eubgGtnnBkxw4Y1Bpymp",
  "key44": "3PzVwKQFss3CxtGwkockWWqTmyq1ZLWQEaJQ3afdDmLz7Hxtx2KyFbyZGPRJ84BTFXm1M546jYJNFiAUhtDSLWCU",
  "key45": "37ZGLLfXYNENwy9LCp5gaetK68Jr6Nf5jjfPYofj3noK8PURRiGbvqQ1o2yGqQ9MppBZ5AqzkFsqinK2Th1FsFZp",
  "key46": "3UEhNsGA82HtPZ2WstwagZdw7USRVtNEj3f7G99yCCPcqKbivNJ1fniX4QenxegbuNYKWW9kQEEDWLi8QRU5K5z8",
  "key47": "5qEkuRQyvQdXhb1vNYQQrLnQxBwXxUqKrJmh1GQBBPRHhC5hwHpswENRwrm3TSvMTkWYAJGusXDf4WLSziADYHxg",
  "key48": "47eH7A1xZD8ncbi3RKgccbJQcGTiM9DBieYh9Q1rX7v4kwToWmcYkHMLuuwASUT4gsAKBze9TdunnKvM8ncEcBLT"
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
