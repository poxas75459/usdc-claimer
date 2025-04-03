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
    "4WezNSgLHyrHPYymVAQhNHJS9RejU1AuHXFiBmcNMMBALbMom3YWsuvwF7fC5SHEBu5qGp4JbJDzvXiyZGmtxCYp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ooiKjkFkYpsUjmLe8PK73N5ENb2m5gG9GgC14t6FaoMRJAciHeFEtJ7aEDy6vumDSzyDCYx98ejutrSdBHo7H87",
  "key1": "dVuQjoSwMsLqdDgiW8DxQbBGyt1kMohfi3CUdpA6LNQ5YB77ireGQ6uPMSb8vtmuzP5ZYXEYTfQWmY3i7YKYC6U",
  "key2": "2Fh6Kz952GKepE3ceakWczUHsJfLcJUKTYZBM8ZmMqzjaju3iD9gZ736YCPKBBKt1SezRLAvdRoemsKLRbcJVeop",
  "key3": "FJW6v52QiQy3xqEfdbW1eLW3NLCfCs5n5XgJrbsqurQbgCPZ6akTikqon1qpkjdEvWrr1aRKbV9nhja7Es2TjRF",
  "key4": "jWgEX22cxH2KdCGo1Hv9gGn2S6h8YAsvKgMgw3j6iBvZjw9BvMTWCx866rdHgpowRnhgp7M9u9yAtzpQyUycPru",
  "key5": "45iAPz6qnsLAn7CPgmvqHVYxFAU7aubYu3BHTxRYVob572v6StAS915kxYNJKS674edM29cqky4iCqMNX5y3qh4c",
  "key6": "4gvPFMvBhjLTXk3amNk6aufvqQ1gkniZkWfyqHgxpBSX4eJ2sT1cLEBWDVaEiZxu4Y4p43tPyzzFbbCDD563LddG",
  "key7": "3WNgzxFG1MTUGkntNRa8AqHBJXJz9giu7GDy7XspgDBKdyVDzFfV61K8D4wVk6PeXnyz1pdg11AsvS9DVSUSeZ8w",
  "key8": "2RRhS4vvB8ovDShatUQvyVTQN3CjaFsQJaFiixiBX1xFpcstKvraRKDL64aUgNJ8gRJpszqMuztoEzZzQsMpU7xt",
  "key9": "HAUS3j4N6fBVMGCryQSaZsRu2Cx5bbAYWMtfWbw9p1XskqFwZsq3hUH1HxjfoZjzHUf9gw1e3HfRSxZPSFLZzdY",
  "key10": "3cYfTn8vrmByZ6DV3eJKZAoQms7ix99FPRYobtq45Ya6bTwGtWZC14qo8gg1Tm14FHGSNvMzFtTv1myWApcfG8ih",
  "key11": "3Pz3Sxq2A2Eo9EJf4GLFAVjy9DPTPr3K9boH7YX6pJe7zRvJavdayLQPV4xVqhhrNQRa8rQaRkR5tghSP4g5B87s",
  "key12": "5Zymmt3PE6fBuomXMdqpFheNThy14oyPbUHFKZqzxbBsZ4DgEgv1n8TBs6h4sqcrkjcVkThHAcvECJs9FkvrQUNV",
  "key13": "dVjSj19fR9E9Lex5MYKs2LLs5XBYiiLACoWxushw1dnYgVFvtMZuCtyiD8dWvtbZ3bAf3jzJJh1H43Vq7cUXDnL",
  "key14": "5TxPYVR5WqGDYXRu32VVCXh6RHta8Ff6jsY8QzU6Sn7mAPfj2fMm6uKwKo6FaVTNtLFQjv4iudEydNM5PxSkDgkE",
  "key15": "5gmrRv33oXqxcvnXSNEyjsDQKfjkqB31ZjnSdMutCaCcmruQAxAcjPyEHpyhupLqcWaZfeq9cJk8nTcVnJNh4ewB",
  "key16": "PviTptQmaiwzWvhUB2CtDJysgpoYnGgYQUdWwxZEQAacJjc7UaZetsi8TuVDAh8SkgaGN8jXzdkt4KRESB8ewNo",
  "key17": "3W4c4tEa5P6W8nXtRZQgvYW2YegbfSY9sPTJF5Bww8MGUg7q29cNQmU746pkuQrQ4tddaVqVqmnUyDgz2CNgeiwe",
  "key18": "2j713iM32rfHrME3ABYBaNzuomnWg2g8mqpt3E7xxhCinWV1682EJzfyYwjyCnyTKRZSaJeMtBfRDUDwLYdZRk6y",
  "key19": "36vAzRrHzotRoaLcWrmL2WSdWTFBNf6iQrdswqq1ocWWfkPRnwTPbqXDNSkgSmG7djNwyDof8kNXLdp31AtmHkRG",
  "key20": "5nBgXyr1y98cTfJhFh2WVKvp1yFWmEFb4TN3yYwrWGyveWD4oaJ98Un5DL39B5Dwb12ACiYhRu13hrCZQaVGB2v3",
  "key21": "VRqpJFE3W7jEpiJtyZGYkqwWx3P3PxivNkBwqFPihFoHrYRoNRM1jMz87r9EhY9dHvQF68NdcC3pFLgxPNsjNSc",
  "key22": "3V4dN952aTJQiqLtJm7HHi6N2Zv8FQjvP4QE4PYXaFatU8gqwsGRgiDwYoebenPpXkjbhKRLTPKDQwRu6dA4aQMr",
  "key23": "mwTv7iXXoJ4ke4p5ZNW1u75WfckvbrKqPGW35AX7CKeZxsDqmVnaiAg8fT2r9nYUzKpmhF8MUSNbZSKCCHAkYaJ",
  "key24": "5G8aojyK3tiZ3bowPJLpF3NBc27wTaEnrUPDoTfwzyzf4W8NGidjtappL4mrFVo6JEQjAKY31BQjbrx3ZZfVTUqL",
  "key25": "5n3tbcE5JwDyka1ZmpJxnZYh4F1fe6Nzq84UHVPPVdW5zqDTLWuD8dtqviuS4hCsFZxrKWUyCaYhy5bwmksSdmUu",
  "key26": "4Gm6HuZqM5KWid1ror9efwgDRYyndMnTezVFbWBCANFxBqB8igVJxBrHD7CA6sJ5jfjFporP8iA7dPgnr5WuTUee",
  "key27": "2tY1VzNWnS8DoYMNLLFWfguqRBFRr4i1XqU6RXAnzR31aFQgdcdGumGp7RQVZMaEvHRF6NV9s15LkmMCZuW2Ux24",
  "key28": "5ZPgxqLAvthXrqkYpxmLgxHZJX6JvDvhvwtFAHta6fufuzYEtTmUASMKbDtTYkK63Roxr1K2vRm6tkwknJdRuWCL",
  "key29": "5yPo4noJPhT95HyaDstTLmg4ZcmrNDgGJrvFDKu7pwyHdgbZE9tiKRKUR1n1ps43Pf3XfuSbqEHVvJYS5FQpUJ5L",
  "key30": "3ToxJTmDsbPSBrsLSdmD5aoU28vfNsqxXtahdhJfCuDDAwqFWHHZ6pGytKvLDTPjWCDsFjfW497Zga7spnnFJucP",
  "key31": "5AZhhQZzigcXkwrzxXxgrTyZQrLBwbP3Lc9duJRoUmGPTFwBza99FLPPDE9JW9m3EosRxFaykkaREunrsw4TXydH",
  "key32": "5PHg8opJMQorbUMkdeK2ZbwHRuH9Hz68U8MfRidKndae64YQQfP1rbGLxD2DiyEAULdGTAESUQfnRXhCrWfjvytA",
  "key33": "4HwHE87YBYpjgX3rY6uspxJ81ZMDKLs39BiSbJ7cGDw3ys2TuMh7pvWmUtZckCxUoBMwxXTk3UXoejghBvtkarwb",
  "key34": "2MVA58KhV8Y8j5penkPeacZKfcxQP6TK3mRK1c5novpZXD5d1FRyiQ3mJNnYo7q4r1hXM4jSBXwvu2uXNM4MZAzn",
  "key35": "4NYaAyXV54jXFqsGfmRKi5TzWKWL7K4taWj2JEJMueD8yxgzmT29bSs42ieNN4kFuDfSPRELRZPy6Go6uPtqCkzB",
  "key36": "66oN73Bkaewdg1Z5qxoHFFNx8Rxu1m6Dg9HATGWHaimZ946ybETo4MNsB2JiRyPEkM6sY325TZ9ZXRzNHU3naJAS",
  "key37": "RUuzuMoa3ki3JVESgUJuGhjiRobGyRCXp59GfrPktEAsbfesGhTrT46xnza749qFiL5pudqAXxaS2utLguDe6uW",
  "key38": "5gtLAAyThyKKkicmaj55jP6NSiXpQjUJFWZ7y4V3opk4Z1reeNifmm3JmzFqwEAEuSudtvTBbVMecX5v3tv1Tj24",
  "key39": "3GyYBpL2Ce4TsrvCk1UC5rbyuPPji4Qvzf7UHxhcvRwp2Q9XRVXdVDmowGG3918mLG8XX1dUK15YMoFsq5KBSecH",
  "key40": "UWtdp2CYn4TnTFhnRTTq7Wciv6zJi7UYhroXB6sKxLfFZrVaNTY1trLheJKbaXSoGZFqDEDg11RKAs4LDgenK1V",
  "key41": "5t1192zAtUxwZTz8oZ6ECHAgcESaNzoLLVtHccpUCaoRMHJzyzEPv2VYAWfTJjSAtVEtxQR6ASrBDbi1GrHQ3q8Y",
  "key42": "4i8CcGvR1UfrqGsfuxYFHMmEiyxpJHTQQE1Bn4ahpsPtfAMEtqPg7b1QBQUVcHVB33F5N711ijiRkcto4tCg9CF",
  "key43": "61QZM1hdUnoSpGVn4BjgaJLLF3EkTggekwtSDAAeY7YTpyp5p6suZt67T9M2uQ9m9xGBFWtauVv5b6Mg8njcatrA",
  "key44": "3aiossrGqKGXZZtwX65V4AGYMWxtG6a1GQjChi7s2hX3b9hJeGjFocLbLU8mUx4u3Efetz8p1WsENjfaYkmr2gLR",
  "key45": "c4jYxJW9N4MEokqS7nxSQQCd9c31G3X2sUs236DawLZS8TumqnULScUpbcAKRHDG1QNELeA7LA5124tUytcVGTc",
  "key46": "2i1VQLKstqg1NSwQByXN3T7bpSYEFvH8enXsMLsej8LVJbDMzPnPnaGrRv5xcd54Dr6P8i4tENurVMUyy2Buyoqu",
  "key47": "3DnYjeobhHbPkqa7Kwp1GQ57VJ32Y2ExG1JHm1KDiFaG7PAWYnFwGYJz7NFz1sBQF668x7CqydSDyWyc9qgYU7Du",
  "key48": "5UjHJGgjxV7oRr6zwLw6LhpAK5Da4HgPg3g1PiH4tHPPCeW6AJtAgidPDrRcx45gX5CGaRMPz6qdCmDCDMJVMMnS",
  "key49": "2RCYG5y3DgiKaYpkXYRcxEZuGAD7ksV2N8ZqbMoNzu2iAQHwrxKJBnVUrJKQcKCoiP3TtT9JjjZANwTWVjdyNu8T"
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
