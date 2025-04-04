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
    "4pajxLanKDt9EZS7XkSEAzVHWPg9YSf2HLHHuc6iZzATZJiLfCHvwQVdAibQB9pmrdgtSFa3ymMs4aBoQjA3gCP6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46Ncay28Cn4Ycm1yUbtxDCZfbdZW11xqBUeFFb1CbHTeyVRR29f4KfsmEFdsBYavdGpk2ggKXpBNVdRmdtHF368h",
  "key1": "61gDSLZhYk2Ceh2bSfKjHaRfZh1xFnKh1F4ykNEyEMTBZfuCxbBEQUqsqu2WKHG4ve2rZ9mstrJ4oPte5QVV5387",
  "key2": "5CyTqZrhGAuVwa1QpRQEY1pJUu3xw4oX8upFAE51wCAJXtY1JDKskc5TA6T37XsNYcbdAPyTX112THViHiRDg7rj",
  "key3": "2LbomX8pcBE7Lrkg8XYs7avFMR9XXjL1nMo8KcqwJPJy3FShobtSTqrGDaSKeuKbgrM8D7f4bDWAViGzJ4oJjpxB",
  "key4": "3gfW7FZ4vzrXrhhUWLao3cWr5C6AaYBBk9X4XWAUvyqkPCpVPfpUdUbxz34mJQGS2LhWbjLGwaqBguQYr76NjxQ9",
  "key5": "3f7PjYeMvg7uo9tyVWdPJQBfXXUiktYF7iXaS6tLmUJofXvbkeyqAJJYSiDkiDEryPCDA6YtdCqNvNqtnTirMvWf",
  "key6": "ViVMvyBX6h8SMuewEqYXDzvFwVNpQLZrEmh7BJ1RKt7cNJ77qDkhxjfBHPgKMmMRM31NqfyxSrJFs6wgptXZDWp",
  "key7": "24CgwaEPJnmDFyAhWgq9cgVgRQAZpSZy1zBY4NeQSMri7kuqmeEjDRZPdrE7fjjSfpa1j9JDf7d33BVrtvdtzc3V",
  "key8": "27A6ReDZSb4UH3QjamZvUSE8uxwX91UL5QMbBBnwWUauNbifmvrde5kfzRB16ERKNnAUej6y3EAj1Tvmj5faeDgY",
  "key9": "21ijjJmCf2uEzv1m4PFoqjNUDPMTYrcuY9WL4bTxSyyckbLSBk28a8MJCUQBc4tcpWd9a4DF8fgwkJChFgGr2FJi",
  "key10": "61o9kDD4NPy6eEJjMmn1wEFdA5ATsNGWWBKbjcPiDEgXBag129akhW5Bo3wqxvbAR4chKS9NV3onzXQ5wuWs4x4D",
  "key11": "wzyAjAQuUYijz3tJ4t7BDZDPw8sDQwZgKD6wyeYymgrhS9LtCP5jb3X3WU5nZd73bXb8nJNNwA7J5bgRECLYed3",
  "key12": "23BYHpvPpbS2oafBcmSyAxUTxDTRJuGLKJvAvi4Jf29tx3McEuaLwE62HiFSUYjbpTgMZrdeNK6U8tnS7Vp9fP1R",
  "key13": "36UkfLPQnoeAui6WxkrKdmYKtAUtVNeyBHr4bGkQwbniDedupBfTWNy3ijybuWc3Kz83vYxJaHzj4QdE6FxeVL7p",
  "key14": "4AvJwrTwRnAyTMjG6L9JGdapzHA6LLjzSvWSSjwYLB78iq7sn2R6xLxjKkH4r7oVxRQyjJnM1VusRS4vHRC7XX8v",
  "key15": "4p6UqLu3HpGKju7K4tFH5R19S4pWhvSQFc1zZfAPBPseKUSqYtjHoxi9PTKQtsMzsukQBH1hGqbootCQfBBVxhwX",
  "key16": "jNybY83wfs4sRBNUBBKTgh5PPAnJ9WusMULVMDt1FrZ41FnqPjUcgthmtQsL978pvyLyw5ZbRCaMcCMi4KrNnHK",
  "key17": "4uDGvqWinseb4Mr4FqyPXAJv1C7J7E9EEzDHGkHGTfyUi6SyqHuwhrfoZTnNM6vz1GoTT39WftwR7xi79fwujBXb",
  "key18": "5gDxxVf4aTqTDJ4Ny9yPNsBvmdYTHwJ5YBrjN1w5gBMJr8sRvmKcQ6txfGRzrrKAjewfCu96dyf49MwVqdDPq7YL",
  "key19": "gpgQqZQmRE9jStKbkBGLUdR53nR5sFNLbR4tCyMUemed56HCgRBVhzXqQZxb53M1aweeYuzBo9zjUDiC97DRa8K",
  "key20": "4yi7snJq7qQ6WaXesci22KD9E98Jmkpu46jQpk5QzGMELXq4XoiwRTmfxjaJ6YLMpwTSRYSoeYR99Hnjye9u7ZCB",
  "key21": "nDjYvWK7kXttWYUryXxvokyG7FQsUzssmPasBBxm9Cmgmx1NKKQtggRMQuzLMQPTMMdnXDnCGtRvztP95pYGA1V",
  "key22": "4HmY3QgHbAwpDiLKLTTxnPYThuToqTbtpScAX1ymBCwXUqHzqZLmfAjXujGDN7Q2VGG2a7ssNmd8h6tAZdXdjCUK",
  "key23": "2epvLQo4aCCHXovA7FJTkKTZHiUeCHZMJEw1hrNKTuJMi9qwapc8rLbJzANKSWmfKg695Cb2v9LaCbbobx63F36k",
  "key24": "TEX5ZbZRFWRiCV4qkJ81uPZ9r2ft7zmtv3ZAwo8F6ncrA2umb6WBHBVNDsDWGmi3a4u5VVCtZo9Xi6YihcgHZ4C",
  "key25": "4umR7XNDFstQTuRVvVYx33dThpXUbULeDXdsQs65syBFjFC5pAuqcbdVZabQTWnY3buExR7R2sDqd8voZcSJjdDN",
  "key26": "4UgbrY8jQRVMnMhx3rGgGse2WH14yXw1tog6q8czgDQZB7Zu8gznk3UR66kHmVXrBDK51AD6KVHYHn7DsWtgTEMp",
  "key27": "296pGkJBrtzoX1rB2kyDQBGb5WVw3euPHioQUVSwYUjBgjYivVGLeEm1a4QPBKTKGDEMjfeAdwQNK7iZqrHryJKG",
  "key28": "4AJ6J7GM8Xq5Ciki1kBTGSDFuRqpFqMULNjyCUwNLLtA9t6cwnUuTuMWoz2PLvx8u9TGqo4TcU7XWt7Fjo38epCY",
  "key29": "Ld1hiqKXnVTUGUpwvGRqSCft6gXTLSBVYFQnibqQRPvEj5cjsxew3ECEqP92uYfx7t2T7yjCAs5FJaUCPsuoVo7",
  "key30": "4vxWTeCC7yMdTDAtJiXA4tXXDaaqJCFno2NBc4Ppz7WfNZjoVgRRWhWjZTrknyApLzEjcV73tWc882q4SVZLnEEj",
  "key31": "31pLsM21WfwhTiznuRzMwdcB1d9ccbybcNt5Pv5jwYqvY5LsRTNoYWmCLDQRf2xXu4nMjHFYzAFKQgZSAG6AqL42",
  "key32": "RHpZtvAsmYLsZGZzD7CchV26W3RwXsLKNYTWz5Y8BMrKQpscJAALJhgm83UP2ExuERprm94TezDV9i17Cy8h7s8",
  "key33": "tYbdSDECfewMVoDT9CfcVR3jfM231wciiAFsS8YZJNBifd573B6SxHEXHdTBoLkn7XovM52wkjV7zXsPfNM2Joa",
  "key34": "45JJUGXPi468n4oXW6cy8MUFAMoSfxhR6UyHLCcUa2QvKZDyoCoKauHNYirZjw3d3VfTjR5VocPAgGoTuygua7B5",
  "key35": "2E9s26tnixbJFnCgcpBPGgsuXXpmB7JzzRjBktYzrumKAiF2zBFDSZ4scL5DPLiCnxXEs5bRxVnRMb91Dy52ZW7i",
  "key36": "3MwcsjQFCiR1rViLcmcKkwKP3VCM5R2TRHmhSjrHzde8NpUHaC8M5y3EnPj2PqXD2YWcRqJo8gENW72wMjTJ2cVf",
  "key37": "59wUdZt1YiSnEVLw69fjmyngutgPmbPAs9neKPtxxFE3KU4Sn25RoHWPUusKRLvGJZvFUxe1enqkCZftqw4PbUJf",
  "key38": "49K73M9PJtAEct7GHuhh29jDvMtcXjvqQSatWeD8BTNRMtRRY1jyDhAag5CKMgwcEr6hFWin9LwtyKJEGT9eu1g6",
  "key39": "EMhEtqSuXwpVqNWqwvfQ75ijPV44JE31F2iMrtJoYtp66fgzqhTAVBz1xdYAcxKZaNn3SZ45CppDECNNT9w77qT",
  "key40": "45p4mBppHyqauzxpqktBnV5NpRoxptzmk7DWxmfS8SgTLQgYBmoct4D7EbFcMwxV6pgDMvHLBt9UhM46oqybKpNu",
  "key41": "4xM4Hi2rPpurg6PtzserkFJsapm56LwiBGG9NG6mrFxEaYUBgCTKXANGhdTsUCNUDSjoySCAbndcbhev2QaySVKE",
  "key42": "2cuyXYpkMMFRHrhSKL6X4j9AVcie5ikR5xLkzrPU6wVwTzCdNXDCAx15H8QnbrWr3eGA4qSVLwgAqM6ZkUTMGraW",
  "key43": "ynyAZT3pLypV6AV8tDsJsR3quhM4cvDYWXkdNgys1dEMuQjGgBnyqyLtw9AJy2dzLxxMDM6YKKnekuDDxR6hZLd",
  "key44": "2qvf8tAS54bh6dp7kTGacjXUyhdaeLFmCyLJvjp8ibt91ZWY6niPHFQfDnCUz5bxrUHyGhbvLmoBjDXmpsZhcvq5",
  "key45": "62Y2U3Xq9eUFt989zbE4efxBC1NPBgoumazXY7kj4fNkrqJiquQnz6QSci74NdkchAQv6gVzG7aDWH2YNM2y4ViJ",
  "key46": "aBFHqjS627nyJ6XhsqGrpxUuNN9CwnVyZ4zUhk1hsrrR7bQbaDVjZ25SMKXzgEftZKRU1kw5iQms9VTgS2YYVtP"
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
