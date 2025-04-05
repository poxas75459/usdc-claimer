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
    "CwrL9BQAejSDoaJtaMo3HnyVtFQGuxH6c4GfhoFmEizES1Tun4MEa2W8sQZCuRxh4wAz1xnAd2VgaYscbPAYpcA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57vj1sQV88LLheqGGgFE2Vyz1nj4yqge2uwcLXbK1SWvYakcEt5rna77nFMiagMV4a5uoNoMUAaRFKj2PqSq5n2v",
  "key1": "4izzHxieojboocwao3H9MkEWQyZUJqLm2KJmLqFcLHA8tCYYtoeU9gWaqaTmAuVYcE2arqjtrd1V88ihUhxd2fua",
  "key2": "5oomGaaecdnXWT5nPKQG4z15T8ew5DpTKNF988e9UHH6jc19gajLHUpKFdbyk1ZxnZLXrTH3zDGKUZ5RU77J8gUg",
  "key3": "e8xVpuX2512C1msnrQv9y5pmLpoDz1K2MGWB5kuGHyxHNWR2xUsTqJGfLjdm7iex568jWp2NpfJ5NCupdADAy3i",
  "key4": "5J3xZdU74uK1YwykiVN6B9nuXPbGH7MJtt9uoZEx6gkgjb7zwcXaaKy9qrd9QqSuqweHwV86kRVXp58Ai359hWWb",
  "key5": "2V83NKQUBpNLewSVbrdpC6T7ife2mZg3f8Ef3mnhPfDL5tsb3iXdPAfyXaGV6y1NencooL7a1RzRe1GNJjSJBGka",
  "key6": "4RPTBiFTdyyz1C5UqUCQp4mpatN8GzGcQTDocgwspyQHAq41UjEvkueWpRuLu6sHCS8C1sTKfZq1drWXGXGMrZSH",
  "key7": "2aUrysyJsfzFRQe8U22t1DpEq3HdPZN117H1KoMvmiiLipknVUvrnk86KJBhPj3pCkJ3RRUi7szyKDK64urfAkNz",
  "key8": "4FfXYR19ec8Fy6xnC3y7Nexf1VKB7jMq1ttTxjMahqPBQamrtGU1oB2s8giUdyxFvD3VCdRsK9od1tRjyFjaYwSa",
  "key9": "5B7iAnypHNXh3gqgS4uyRpiQTXkBJqMCsBn7FcRhnu46Rye4rX1JbzXTvTxNBKjVt9YHGAFmT5k8VyiKFVGfCpco",
  "key10": "3CEihnYNBgXT5CQBazMKqME73jg8JBJ3PNWyhN1QbZaNiz3Y6uPmF9d7VBeMWUD1iGHqB3C9up9AmfmSu3Xc6CFa",
  "key11": "5jRymB51z8m3KFUmjthHDZTk7Yi6L1yk1THf4zjP6ZJjdEywvWUhA3iWbAocY2MDYtP7d78rUYHMTXKAMQ2iUtVb",
  "key12": "58ArSjACWwZ7zTm1nn6p2UdzCii8R7Emz1bLVf6LcDpmyBNcZJwUg9orY3chRP6Dxgg1qq73ETqs9nKMcHwpCXsj",
  "key13": "4AC1JJ89vZMGkoycWjk8NWLDu7P7mZ4CXs1U3khr3jBd2dqXMkmBrhtYZh7Zeg7LdrvvZsRDfbXwEFjqfyjNUQcT",
  "key14": "2h52pFkepNNWG1gXewjmP7nSQJcykmAeQ5y8Wxm3rJUPhEnXDWybwz7v9hrboVERk6PyNbEz9VAuCKSiBvMWy7yC",
  "key15": "3cVHR9nKp4HKB3jnGAg88LBM3smDenhcnz5TyvQ4W4PZVWDfxVuQj8gzmRb7j3hELC3LVUNsQu1BTXz2dBuh7nK8",
  "key16": "Z4DZGdi9r1oouaVh4TAn7L3zVP27A9bn6uzf5dSqf37kKb64F2wkxgknh1sZxd37vpxdutrdJunKt4z9t634rh1",
  "key17": "4vxvZcpBTMZuuFh9iHHzqjNBKZKcduh3PBrVrjQXwwZjKRvyncDjScBr7ubcXqaYQKLLeqr32CtvR42h5nBxk8Ar",
  "key18": "5xahc3qeXSfECpPMrHBkV2Cdv44yWcB2MqX1a1FpGj98ugCkk2wQPujMU7uWNFoYSpdbFEBoWknMXmYyZHLWXibe",
  "key19": "m8Yd5zfYHoKUQ2dFQ2bzprF36SMWK8EdTFBbVWMPA5mmCJhxoR7THvQtCKZLFCxRHFFwPiYqAeaZwuqwK1yaMHj",
  "key20": "jQmHvK4jypASMg1hd5TS2urh7ahGcZn5EsUPGeyfAsPFCMKa8cv6EV8hQE4cmJfFszE7K9KV3pjMhSrmJew8t4q",
  "key21": "5TLgyrF4uYSoFmGH1nQSfTtzQhhBHH1YpYgLxfCxrfGEQBoBR36xxzMgAbCwTBgTn7UWGvKqv1QkoFo33uqtKXc8",
  "key22": "XwwUJcf89wm3RDL53GmSXqLo9AF5ZfBJxbjdSyL824wfrcSxndcnqMYDGK798BsGYmoSbxcmUvW4iuzUf4NqT2m",
  "key23": "4djVZxsA7G5G7vAo1MtEa1ry2dkDdWXTjMNJ5CUa4GfDX6gAG8bmZkZeeqJR2WQYwsfKaWunNT9Qe36Yk8g6cf97",
  "key24": "4JJyQwCGuCqRy2ucEbTPAoFwPjDTE2UitPJk8BGr7v8tcsVDXFLPfk1aXCNEt2fpSFFpQnF1b5oNc1cyEr8ru8rW",
  "key25": "3nHsPxiJrUYDjR1szLUYuHExEBz5AbueeWXGkrusdsTGgo1N7gwFtYRE41obtnSywfBJRodV1aGWpSEMF2bTfmZL",
  "key26": "25wBnBYEQ6iHSXJjdQuMw1NMgLLec1jpYxahZ3q7Wjb9w5D4iYDohqbZ2VNVXto93dJ5W1CXw4qzQtfS7YLpPZCh",
  "key27": "2iz6DqhK1f53DNhaaisQdmdHwY9mCiBSLbxU1ix5wMJDsaK3PcVkAXxBKfEo2QoZan3jUpeNXhGMeihPHjzSUg7C",
  "key28": "3MCyST7QapA3RZrHAwDDVgYcXELsno3Akk6A9NeA44dbVSDbJPZgeRg38Jaby1FnCPHz1Dh8nKbLybdCtDZTPBcS",
  "key29": "dPMmhe9nE59qwFtVTVEwWGFLAcrKDb8HLJUUG2yYhLUYBzn4xiQa9kP1u5JE8FZSBXZLsVnHHrz5jpzwVaYamtD",
  "key30": "3TZ5v11moerYY3SVv2LCvtVyCrHisiLKqsKbcx9TGs3DAPwHmkG4jgaERieiPQeLSfUcsWaKRVgDoJvLKyqMyf6J",
  "key31": "5pgCns8hxJKGAaLGzQ2MCKziyZkfibj6ALkvQygsa1H7eQMj84c29LZEPPnbgncN83ev8Ypkx5wykuzQRMrGjquw",
  "key32": "53EATx5cBr7152MnJHJ4Jz8TD5xABxojMSMDpjSFmp8MdR3dXx2nbfEkGGsTmkanmQ3CQNCTC48MVifz3g9WzHej",
  "key33": "2bD6AHxnSTe8kmZpmD9ipp92oj7FE349BW426rQoFCpcRa2aJSzamhq5qvfixdzrRdDf4Rp6SvvdteVXmnBdR754",
  "key34": "5G7dYedudoukXyeXpLR1hJWWSWqispazaq1utRRo4PMaNXtGzmiMjZgJQKn9tYcuJgzumq2DZNHiRAdT7XKn5YFS",
  "key35": "3GsDZCPxDQGZstQ9pEytpG1s4QbruMMZLWH4DqVMtBTfSShHDjbyQZFZYebqNsmvhcMW9LPVmC9s18Gb7kiDtZFG",
  "key36": "5DPaxyV316FiJqnngZpwTVAZmdBGYqmgGYMhfg3AE1M7vA8w1ena6ULsmjkCX1A9oySamMPT2SSbNuSBk82z6bh7",
  "key37": "2pS3nDSM53fQrguwFKuQGUrZTmtJQwuqcGdMUf5GT8xioFD3TQKkf1DpbXXUyTZnHy8uA1K7Z9trY8J45JnayXrL",
  "key38": "zHG8YAtGskeTDDxegsN2CJAtiftACpVEKeCNLHEPNrbhBGKfMnNZzHezkMiMx6fSGjfRwvjgZvgwmWTuB6mfcmT",
  "key39": "2ie2uhmHQCgVyQtDXS5dBT5Wxz4pdrZro2KCbKRREd27f58J7ERuxiRPD2F9Vjs5UakseHmavNk1ogDjdpsT9dM2",
  "key40": "aph8d4vuCmtxA8NA7tGtSigzumEa8WKpS8Y3jZCF1FZ4ZM1f6NqKTt422nYVPsjNcyjw3qMHfkvWU8A1Hn7hsuD",
  "key41": "3wXHP4hUxzVtpqX8szYwTxtyrYtMWSmEkmg67n9iZrABYZ4HBZG9pow8JxkXZyNLoSGFcNXQki5MQZs9vm6cXXQK",
  "key42": "2oHXX8529kWQrzhcbarK2vKwovNRERUDm15A8LGA48R8q7e8AQFfeert4taBMhAkk3j6jH6J7pCxDphGAN9ieMD3",
  "key43": "2YNmQEUPZBmXo2ArMD8nwsiYDa7Bb3HVYnshQFLw5kwBVu9i53Ys3JCKEkoYttFbx93sWWt1RHfVFVUc1uQyC5cx",
  "key44": "5ypm23hSJ1JCrSvDSbDGqeHTrGPw4YDVZnCrJUEFvc9c1ka78jZpfUvubcrRciBgbrpZVh835LBLeXbdGj3WH3MJ",
  "key45": "5aB6VpYQdVYKGJSF3UiDEPU2CE4XpkZ4ybwpgdEWzfzZPXFMmzUE8P4YVJK9qLe4cV8QiHCpmerQ7kESa4MGpEgd"
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
