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
    "42xmBkWXrtXqQTHmoe8pomNLk8nD7pwHKypEaxAx1mXzyrHyeocLSFKfcrUykuvKFYw88X41ogYyxUHCZQTZQkSf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EAzWJ1oRb9swWiP3RFtW2Fo3NjDukdev7aQgq3vcNAkaL9aBBP2SFEkHJXQYzJfgcYqVvLgA43trkxjDh8m6Bii",
  "key1": "3Kmni39qKkiDnJtJp7XZiPEDEPkaypKYvJvLW5HBULWUpHnmJQuNwu66NxuoMS8f4oC1pKsz1kP89n6HaJBB8gTR",
  "key2": "2CyMSv6q6QLNXw5fpXScrDNhyfg3SUzh4L24pWCTUcYqQChvUHqzAoomTrfE91hxddGxdVNfXZF7McdCMm9L4YJC",
  "key3": "37tvRGeD7ZiD1VmAChPACmVktWq5MAVvV8kUnD9kfgtV6hPGs9MrD7khzGszmv9fDrokQz6eZrCa8rS9dA5hB1ne",
  "key4": "3rrh5X9uWbseZ6L13dxZcXBbLQmkdvZj1xTeBXJgbhgtBKSDpYc2V7ZJ6ox1Kd8GWaNhZq8JCyoYMCsKbPvvynZi",
  "key5": "2gBE41GzsCJJ6Zdicx1SaGYpvBpGNFzKhutjMF26Kk5ZFzgH3PZ6NCmZ2t7k2LiAaBCt1P9tNejXiWvtCC2E3Dnu",
  "key6": "3rNhmuh9rZG4s2ZMagLY2EwedyUnd4XxPJ3eyXqWRApT6NfQg9Xo2c6uag6DNQb97iUCccZH3xmXrgo8BchoAs1q",
  "key7": "5YZAVpanzZRJMHPoH1y9B7fD3soguUuMRRMEDm8hxJcsNf6P1T9dCsDSGSY8LoAjwERqNATsEDFMJsYpSQk6cWp6",
  "key8": "4yBxczD9XqxYyENc57ffgRNfq7kb6xqedYgQVy6jamynEVF2oTRT7zKKegvCPhkfhvPgV5gQQVv4sRcWGhnh6rhZ",
  "key9": "3J6xvXC6zCSpUEnEmHbA3AhZeXzgJiYJBLX3yrFKXsyP9T4L9bqmbmiWPyE7a6EGvMA8MYEU7XeUSwFxXtPWYu1K",
  "key10": "4M313wWvTgYc4wobQKb6zXy3JdVjbbcDB6dJ59HX8sSfyk8Vw83gZPwZ3RL3mH6z8qsPEWm89QY2Yun1nrBeP8hA",
  "key11": "2tjqK8ekXmZsu7cXgoJi182xYm4c3pEmrjVBnvRMEGMwABhaZJSLW6SK8mBREiPZQ1zWzotEUouxzoQxdfKKqkGQ",
  "key12": "5q43xJK7JM9GbZqbuVWNdFN9ieUasKiLoWAAqFr9rd85TeppD5caCyPNv67MFFMJosBgZnF1sWgEd8KNnvfYhEgC",
  "key13": "2JiTrYeUPAKWopcvpPbsTJZ3AeCPVXRti9matT2Md4sZucF2hdmR3kWM7Xpe2bQ46zpZvPXu6v7twtrv5U99UscM",
  "key14": "Aegm9qKAW2AGpUb4FvPuzNn9uyhDw62LhQPQ29JZDvjQBKzzNfmcFyZZC9BCqztSev8jGoTCXuat4cXnnf5wUQg",
  "key15": "67KPJV5k8xWaHQSxTCLY6vXL2zkf31hQrLVUG9EZVNWCGKvEoYiw1mpRwQkeJCMoaShsvxJbVzrAxEUB7WUWVWuk",
  "key16": "3zSaLdpoq1UZciRNnjT95nHYH3CqcY9GuR87uL7NftK53FXX3SjERg2rVA9BX2ehd66R9pVr4ZQBshE5oe4s5uUa",
  "key17": "3FkzGiDmCNsGNoEs28B6j4a2uBt3LshEFcyvQSAswKjGC82FUhfPfNWw7Z5tChtq4zj9xpmFhRdLBtBVm1XkAyZN",
  "key18": "4YEbc4DR4JNtH9hMcdak6Hyra85WwdniVMV6UMaWuQnFPfrsmTXqDVThekP76VVPj3Bmrh7f9cfbPe7yA38rAyTZ",
  "key19": "dfajtQHgEdskucSacrSq25x17yoC6go1X9N2QdMD22byZmTciWBaNc9rUrD3z2MdeBsveiv25SBVEuFx55rfLnM",
  "key20": "3syAXzYaQeaCASHTTMKewaNJRNmzz5tZMAmpfhsqetDWYHcuWBfk34iwmZYm5AJFRJocc86heMSih5hG2fqb8sfm",
  "key21": "62EanoowQUZrdZvSn9ywumfCs9Wb2EdppBh7kvLVUXsYvHTNwFej9o3YWHT6xHmxExRUCmRRD81xJz3WnNi1MB1e",
  "key22": "5khzNvya1vVLsoCvUBvdxiNXfRTEmqh3sgeWEk8K9GNX7GbaJ2DVMQ8XE2gqHpT16itd9j42kTdNXwLbNCXqsz6T",
  "key23": "4CU4hoEiSd2UJJ5x8xWirJqAagsweeRhrtfLtf8YZ3wCJ6uo5cgH8oKCgXUsKwLP6uWZJpgry3vwue9cmMDrqoRs",
  "key24": "2QXagU7osLMBq5467o2kPs7HTG71RhoxE4VK64t9fTGFDVNQpMA3GYjTA6SELCeahME6zkQzbKZqruuE135tsgyn",
  "key25": "2Lx2qwhebyKYyCW9KQgV8SqnFhyktwU3FLE5GQiwXRJT7ztALdhp7BRKmRLQfC9Bw6eb2Xpo2bDZvV13cArfWxo",
  "key26": "Zgy1Dt9oWUKyswDYoD1cLJC2PeJGUiahDTAv6NZiEKgSh1D83bAchcz9xRKz2PScUQt3Cnki5cb8r51fN7cEx3n",
  "key27": "45Lp9GxAMgiRmJz2Xnyexm7fzP3tP1SKd6npynn9R9cKFcoBwbgZAGtUMeSnTbx8PFAtbxpogGSzgjUipjpLeRXk",
  "key28": "3ZWpFqemjDo8cdG3zpFTsFcg69iAdUeAxJN3Z8bbsMphjKX8xp4JcbHawFB2Y4mLhtYeCYcNwatXUbgkqnV3YT6V",
  "key29": "65RVwkpSwvSfQcR1iEAhF3m8sKpv2YjeG3drewzBs9M6ahMLbRjk6fPoRyfjwN5vKqCXxbRX1cWfEv9ZQ5PeQTs",
  "key30": "36VFfFuhP9uXGnwAk71X5nBrtTEpdAiogTHsdZVk5b5kTsTUYUsWB9EfAZY1eozuUHyRaRJZ5RE1KUnsNEiXw8QN",
  "key31": "hjYKY9EXZgPfAfunQFWp7TtbTR3yMmxEjRhwJpHbA9kDtb7RY8UGHxfRo8SChiXJwPM7WYuVxG4MJGWjmadAWe4",
  "key32": "65LsacrhfQJBvL11eiCaXwAViQTcEyNa57WnQiD8e2qM8VxT5e7pDXksXuVzmbbHqwZNnzRromPyTHc3WsaqNpG4",
  "key33": "4EtJj7MTDSdKVbQn1vJGwND5hSMGfm3vziik4caoZoaiM298pTEqE3WLXh1vaY68oNDjqvFKkMc1Rhu65BGrXwNF",
  "key34": "46wuvhELjRPKdVHgbtwc3D8cB23dpgjC5i59owAK6bz2YYWHo6394ZX5b7RkfGxkawhWD6MtnwfrofHaZ7zEDgN8",
  "key35": "2jpNQMWAdw7RfKhfoADQ49cZj2Eq2aZNVrZyh11mS2mgcmNJjDbdzjLeKqFuhkohkNwBjoEcVj953kTDQzhBviLT",
  "key36": "3UNJpHJ9BiS8ta91JkfmgtarGtNgW2fuvYPxzeVQ5FPRqrCDJcHNxndVrTkerb5fvXtsMUsENHjgD6ZH8k4TKNc5",
  "key37": "4Nh6DozCRiFgJyxuGuon2TXqk3nZnD3a8uL4P9aBPrm76RnWAeWEHqmwSvSfWnB735hBAMnSs8HUJTyicNEjNxaZ",
  "key38": "4CqAjr8ymmswrnUjTmXykom8vBSFPsvGVVE9WevDKUL7EJQTXqxuASeExCyrgZaKj6S5ZNJVuudoiPHs2LjvsJ7U",
  "key39": "4z1BJnhQVCVkmF3CKNvNg41LF7RgkkyK953qW1bN9Gg2hTKAYPzWWP1iDF2zxjunUpDhLswENjcXNsgBzMFE3HJf",
  "key40": "5TyLAci1AEgRQ11DejcYwhGYkmntmEJPd5qZjGPgQPLTtxfrhDHQS1vW7v7FNYA1PWvpy4mAHxmzLsay3CBTob3e",
  "key41": "3tRxSmXipCCiTL9bUKKnqChLVWDAGEWWMUQdDW14ztci7zLYfy3eDqwtywhWE4K24JW95igBRTaFvzsqDWvf2E6i",
  "key42": "4owHjsHvM5pY1zo55q4ngk3ua2BA886UX1jxBdgpcy374fCkvanyWzKUC5B1dcDVrCe3q1BwadvBidLJZbc75Dvm",
  "key43": "2wiUhAxbPRCTsRmGijZqNr4ymVXtaPLwWP1NneM55SRgJpX5TtTMefxBXKx2ttfNSg3BDKh7htd8UNmSeMJLJ64P",
  "key44": "3EBu5E5Uo3c7gXPw9fkrA7WPYYRgi34isPjh8WAmyFCwSweFJCXgFRAi2kCDhqGWCqatVPZCbChvdmzxDVqUttpx",
  "key45": "Nd5gUoG8fzSNNhLoQEoWdABe5ffa3B9Rsjg3ZZfGm9iP5hBjzNtrLYCSapWWEt3QzLVcKGwJG65BNYLugjaYowx",
  "key46": "22Zjsjk95px61xkQBaHV7vu7eSAWy1y82DfaUBx4ZEnaqNENmSfMTfNm4ySewwhXyvzZyY59EZB4Zau3Pma5NVPk",
  "key47": "5o4uSNzBXUuop9dqt5oVttEoFEeuh4sutU9HLtpJz8LXGxGNJSvzVMx6m8ySPKyzA3EfgrjXrxdgz5vU8ttW9oQN"
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
