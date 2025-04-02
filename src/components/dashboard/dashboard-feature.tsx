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
    "kM7jkKm4GJd5LxnYEEStMjq2UqDSYQJsBrrcv7E6u2JpeSmFxNkBu5yA47Y9hyQ9eiNgdK3nYH9ohqaqHhP445Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54zFSz3XtbdGZ7sCQs8mSUQX4PZZXZFmfehRN5f6MXg2JuEjxoA6Scj7zscogKtxhomuRtHQBVRUvxNDSDFRgfb8",
  "key1": "JLbkVrAecBgP9jw2GktccMVz2V8f7iFM2Qg9CTSbyPt3DmLiyVxzxUnWRbCVM1QZ4oWTw62yiJ8CmiWjEpb4oMK",
  "key2": "4sugrz77KvHnVVdVkKU2ZpJHUrMMsxMGBNdB4kwTXE35DMg3roBcXMLbDbYbMK98pUFPzCNNiMQbUnLdauhFEa5X",
  "key3": "3RZxxWJMz6wTykK3RYuTUkoc79B6K8YUE79ABCpjxN9jcQNuVaAS7226YZUsUcKDV6CH9wcdEjZG8dj97YQtyGsn",
  "key4": "313b1YhoDwXaGyQLgjxSK1x5upMUAwDmhjqYig6ENpVqjpzRHDwKAtMCNqia1p9LHVF26cjZP8KJ3Wwkj11WfpPq",
  "key5": "D8RupsQiwvwh1E5kn1A4p6unJnhSwqqHcy55PaTun148MoPxKTr7SqHYiFARoCvLRXRrVKxURBGxgbzRizMj9M1",
  "key6": "2JSUArvfT3jAuNyu5qZaMvTN2ALh77TPP6iXGMJRf6BbEmZsmeVYDRE8tWAAeb6sdn8f1tgMtsz4HebXehKV45PU",
  "key7": "4zJ2fP1MRUyy3J6tKQxRR7HPeU2wgKC66JAcuv6eFVyMok4uW74R9QrjUnApVq5tC1yxWvdL5yoAxToJMDqe2gYR",
  "key8": "4HkcXw69HDcDug1RJX562DRn9BAQtykk5CMw4J6iWeBT65dD6g4eYvFnaMLb6c2cH3qBJAJM1oYS4rHbUgSaeirT",
  "key9": "5hKgsxik3p1ACki2J2Phtp9TMXtBcETR971xzvQxisQDJejLPcA4vzUxMnqRYKzL8EcmvVuqGu7RQmCe7h19Wuo5",
  "key10": "5q5UkvHtiY5sD5sbexQ2UABSJacnPp8gPidV6Knrgfb31joc6R1RwTA5TUHQFURm3jx3uGpuuo7qQSBiKA3QGgd2",
  "key11": "5S6EUifptyTgUyZ2tyS2ZDtkDEec1gqEPUfGjmx2ZCFz5XzYdmkeRcQrJpGCuqAC27tcCHETvc55D2h8kZB1YdsW",
  "key12": "3B8jLzNYqNZGDQewj4RCBwvyDbfnTxhxG24sJFwEYhg7JypVxSrxpwf8D9iyYJtrDAZJ1DKN6bW4A8fRjGXXk38w",
  "key13": "5qbo8ktY6rnm5wL4m6DzhLBQPza7MA8bfTKJMBXNssG327bc7zNR4xDMbNaDykwMKK1PZMRKA653CufR7JCVH2db",
  "key14": "2kZm1uh33GcsGiVHggXpCUaW61FuPzaeF3qaLwxApHScTRtHmx8VKYQNuQmvZJEX9gBJbUNJNGY4yGbThSBNNQ1T",
  "key15": "35Zsbvo88y7eiFUHHcRnUW3Y49NhQhQUBJz8zkezCifxSKpUd4VjLYMqp47nJ7qSDUuf1cjSB6UNJZziHypAFeuo",
  "key16": "5AmXx9L4CPidzD2moTYR1xEkcgMoxa3PkAe2NiFTc2gFVb78SKBrTQUuxst4vuyBPpagwFZYYgKn8HxS8YABe3Ls",
  "key17": "57TcWux6HdiHzjHWWgGV166cwQgj1bwwfeJdk54hks6kJRRMweXkQKctsFcHRrUKbFXmTAPA3ndcSiThyiMyUg9n",
  "key18": "3ecYQ8p2kwZp81vCRT1MoC3iyx1Gffe6aPvm4gvGmM7bK18xLj17k2b5HabKUzD5q4HxMtxt7cjLTA1fmYz4E3BR",
  "key19": "4zjbXWwwzQLyv9hT6KeHYqL2wcWXWh6AmwhNpeo7RQ9P7r2JY3Nt9TRZnUs4RhNQVu6QP4u9cNKV54MVuzmTswjG",
  "key20": "57vRUMX1BknNvz4YyZweYiJnQoFKuWAFLoWxAt668q8rJBr1zwLtsyjNNggStGJSin2rXP4r1BHqCnrpMr9Vv1d8",
  "key21": "3YsWLj9PYcufTdTRbCSxf6dP77d6aUoJXoAi1UPFL8LosPyiefgQYN5LutLLSxbpF2i7PsfjkbAmvE5SuX52kZSY",
  "key22": "3XPVCvRjssa2jTtSa255gafiqURNhQT5N6zaqSJ6dW58NXT9pD3rvHrag4cR9mQe1iTkQMC3rHsEL3ahkAzQ5NaA",
  "key23": "J3ZiCK76Z79vnRn4d46wVDjtYxNyEvMV44GiUw5vR4sFskD68eNut6iAXiLiLvYxWy3d4oXhnZjEeVmVGBpJafL",
  "key24": "5p3Df9UZvR8AkCXoKL8TonUj2LWg6DWReN1GLXpfefnNgSDAfWbCxCV2kPaDLCv112W16zFBmRAppmYdPB9ztBtp",
  "key25": "5pRNHku73AMmUxL1rPhhisNa3jnFT9PQFFoivubKbTwGaShoC55Y9qNpvS7VsTzw31BDthyF7Td5HM8cLNPgwaka",
  "key26": "53g9w9Q5qYCsGX7gtLWoNbkagxUNHVqynUNGFiavVAjdf4L7G3Ny9Cnw9jBuTKv7oviNZrA2tHnbpJZUUQWaGYJs",
  "key27": "4iaYwRFYPV4SUfjtzLjmLVZhwQPmFx4wGeYmtCBNN9o3cqW6stHBNHdnDzDBv3Wg2rZP1ZHZRj5qXq4ACxJ2e634",
  "key28": "58a9RzLS4Ls9CYzu6ZT1Dpi5ueFMLGYwpWKkiaLpgebhYMMVsKLUEvPVq5uG4UczcKiS5N7WdR5wHUoSqn7MJcbq",
  "key29": "4PQQyaCTvzaKkbjNKMDh4DaQPZdWUnL5eLFpv4zgwvK8ArFJyiXB7Xawm5LCBZTayrd8eNp7sZeEBFdTYjX7VTrg",
  "key30": "35A3SUsRjwrfXRYkyPE5Udh6j4so6NBxTSVNUHCopsZe5F34Wch7R2ysMdejeHR85Do7Qyw1PU5ZUGFN4FF9sF1t",
  "key31": "5ocmLLLbVFucTrW5tvysRBzFKDLGJymFANwg9kYg5kL2E2bJJgcg5Eo3wwuGt1P2UL2rNAoqyboyK7aurxEMTtPp",
  "key32": "2WXfunNy5TkZcEzSJZrWiXFj4swEZ7K1Ws95Cs8B4MHV1x3VR1UDx2DM4a6sfDPRiYEDBF5Pr6yXKBcmU2ofX66M",
  "key33": "2U4CmduBFCnuJpbyTqnF21igWfbcCKqy4whSNEnwAHmNq1TqVCpMJAqvUEPBNK3mYesq9xUJui976vno1RrxAxng",
  "key34": "qSDRte6S5itnnKi9q3LV2cBWyWgTgsNMbguTnqLNBjraMcPprGiySiKxGpqUaLmre2eGj8WVLv2gapy71T4NZ1f",
  "key35": "XSBxsdTZxQNEbtfK7wjTXa1icXRynY4MZTuj4NQkCg5qTrX4sF5powJ1KsyCVWx2KVD5TpnhAMiTfhakcEGDAvN",
  "key36": "2hp382eb9i8CcUyJg29tUKbXV4jKjYDJzt2bjGAy6TF2JtCWirk3Fvi4RH7RVjtjnD5ZrNmBwzuKqU24YBHGFjfZ",
  "key37": "2Q3dW1oa2sKdBrkHPWUW4msYPzTPneuX6jkp2sv9AmYYhL1nt1vTZSnWxxrPpMDpzgwr8q9JgmqFwaYfso4XzEVg",
  "key38": "5qMJfx8Uo2oGcRqfGQVkSWRS2UcYgqQj9oMgJMMNjmzpB14rLQwzokdR2wqNosD2PcJNUbUtqAKoH6Yw5BFCCDDJ",
  "key39": "5kiTezxBg8ZvvJG7powfM6kEZRKLZHx79t4JXZFDcPL3a3uVsRhkkWYEKUfx9X1suCbQ9vdEJdhbaqYQXa38hKCN"
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
