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
    "X3uFEWrAJ5zBxXKFtRHZMAFZ94uaA2EzJ6xKGG41wQn1dPL9HXM1FURFKnLZHXJLCuQi6M73M8x2RuxnmLuvKSs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dK2YDsTk8KZDEPCqWQSZyMBSoPxGfKpwRTgtiqGFGa7QbYa8qdo1bdKTQmiRhyWydr6BPWthrCSPctPN8UeiK5o",
  "key1": "5yvdHqeJMEGrwy2XnVqjuFijei32cqRFHPjTBw2vBfKdEBseK1GbgoEjAZkM2MHfJtBQ5iZGFAjRpY5f41WRmmY3",
  "key2": "2VVPR1iqQfaB7beFG95TqBbrobXpG7GBoB4M2mmq2aSAhdtqQh8Jt2zjuJUnsikV5XeqvNc1NPrPhPo1EVqSdWbk",
  "key3": "HWU6MyRCnwPoMEu5WcV6MXeFfrptiB9dQepQLrCXVkoESGSGmnfvVFwEuLUTdSrqYe1R3mjCBpKbGzzJv6KcFaz",
  "key4": "3umn9juXGRzaeSjHBq2NRiHB83QTJKcEfhDWEG8DNhNvMJkRv9jxc6TGcGmpxyh21MKiTxrN1oVp2rWX9eqYPXsp",
  "key5": "3zzC9PbJPJAqqUpCLcACZYmLTaUFCtePQYE1j53z6XWxTth93pRt6gzfpjLMgnqVWshvix82zd46ZnWU8EwF6fzc",
  "key6": "iABVbDwjW51BobZVsD6ZJQ75GPPGs8S3x9eUWPce1G9zdtG9aAbqom22sbzi5i2dsXqjGfVqRc7sZPun3DtHu6o",
  "key7": "4syQasJrujwfaepM14sv8RrHFtutpxTo9R9ARx1MMDiaDg3wxo88z4jizn9Lxdhf52ra8w8Ln7EXSwG3fcEdvKsm",
  "key8": "4VpjoT3Y99jWLr92whzaFoDgCcKfKTTYhAaSVtVqEDQ7wawbUKXELTEVUhSK89kXbFdfBRGZM6fYDeJYnSQYBvyX",
  "key9": "5c5FxHC9d3mb5afkjkje1ofXxv76mWhQEZtte6BEHebCmGAkCXrUT7zhBoMNeUEL3DdcqnqvNfouqGNoUpvjodqC",
  "key10": "3YDSGw2Z4nbkwNQUUWaRvbii1PLXmZ9x32a4WiethQC1T4HAw9YPRzVKnaP9WbQMENM8RaARmmXrJN47cN6C7JFt",
  "key11": "3u1WntVZkuCzTVbWQgn3vWQGfstMxNjr3Z8oFLxKQkgv9LYHZc1VKN5QGt3YJPkCJhDGjrzVUGt7TpgvQwHd7C1w",
  "key12": "2YJ4Fvy3gguX7x43TmzqsaftGSXenytb8jV3oGv85CTqKmY54sGD2hnChQfmia9FaDT1zf4Tgi1ZottCw12HoW9T",
  "key13": "4oZsnSFZxYzBBUD4RGNLZchX4awQbeFkmXhTemyFECbkNmirMJaPGGVNX3JpM4oYtcpc6BFvFDYEVEwLBCrahjLg",
  "key14": "5oz62bnwtAC2rVece3s8tvsShazeP9zBxgLWKQK6kiTLqUyAZufy7ZNJGB2vRVZMTUGTXWaPnRqYxwLSU7kg3KVL",
  "key15": "3HJBah3UaMWhDT2mhaSbFQ4r8jX6Aiy7VTWqD6pSdp1cs6iCQ8mrkkgD6N4XDGV6LU9KRPHuTub9ABtSRHspjtRu",
  "key16": "2uTx4yFKnT8pAwvqspTyPUhggjsoxZyUAk22gqrS5fXh4sJxQgu3gbwXMFBR2vKmrq1PrtzYzTtFpYrvEtrF2Tg1",
  "key17": "3UeX2G6vxTX3wSshFbV3HFhCxcwknirHPCVfZnW6ikDSba6R4ykPg55LmLWrnKaSsfRPWsdkXw5YyV89TU6wdmRX",
  "key18": "2gVGAiibcubGBtN4Wt7KuA9zGUNxvMsVh4bduUcSRyube3xwRsKCqgorNyxetEaRx7MKdA7PCCNotZb3LwpUDF6Q",
  "key19": "5v7BjSnACKaeMf9vndoiatqJbJo8LcSe2fvmsGv1wzRovFgBnGuC7BnVHKAVapLN9pU7wFMGNN8T5rPygGYfQ3KT",
  "key20": "98hSx8Vzw7WpuCD7U22u1WAucTHnXQzYznztKCDWn2koLiCymCMYv4q2sVZETc289rzwk481HFqnbEVGsSBw7wC",
  "key21": "5E1twcTQU1AK1UX1A5d2VLrUizuQQ3UuhqSW5SngJuAnix6hbEPovbavxbN8nBtGb4iCYxVbT3dZ4sv3btgaNAN6",
  "key22": "4MrsGjPVanYdsQnRHeBmbkLW7FGf5Af4ZDf2E9oRwZdk8t4zsem2J4z15uFYiQMAY6EXQzdNudsBCjCcMeQLZBnS",
  "key23": "2CodEczH6ytRkrsGrbrEp6jVQrUetDFp4HStLUp2YqDfCiw2guwAtKT9TZkH4gzwFwQCatVKFRZaaX517KuTAEpR",
  "key24": "2MmcV3sJo4uyvPJSQScgHLkt6PbcVgjorGtdmNcXXZmvKmCpW3p8zVUWg3P5rgi85YF1rJSMdevZWarPBpcVyFor",
  "key25": "4y7Z7BT9LpHSSs7tkFHWVUbfT8GXE6LT9E4boxhhNBkrRLtbs1AqTqZVseENFhCcBuapVhFMtLix5EYBqdJZJsK",
  "key26": "5dipZNiVQRjcCHKAnBbQsNfcgHHdz9e4PzMScZgGtdBSpxBCQy5eis4YqhZFSxn91obwUhrqHfagHv6EdJ5RXPgz",
  "key27": "3UXmYdMnR1T941VMQ321bo5cJ2AzPcn9YjmSWq8sgM47yvgDUiGYcF2EYNoC5aJsPwfXwJuizx2a43JhzqpKs7wN",
  "key28": "4QD67nAsD72qY6Gs1y3WVhNyTrJSXPXAigQcDpEvCpGKm8AxFGxEAYYZjuUogjefuBkqec6RCctGLfVjKGLJDVFg",
  "key29": "3z9MvSBSAsq15aex5MrgeSpgcBjCC1UanHfo4EwFBBYBpeTzYZiNQoZ8bgGxDw2MS2DTqM6zxGNoUiAmCLYuWiSq",
  "key30": "4aVpcrnLMoLt7gBEWWPniMrQn7XkuKW824eWp7GzL1PbKeu649umzpELtoHwghDF5TBq3FR3hbjx8RYAhmJ5LMvw",
  "key31": "4RonBpKHr4TZFCSRwQj2V7R4tfAaqhrHEvVbXdGC25ZEaF2PgR8fN68hiBY6jewhVXeDM2S6CXa4JXPDJQFoWocs",
  "key32": "2obX2BPEdhiyS6tibMFcinwc4HE3fk7gQGQfpA54XsXnEqhjMQKfeLDYjVpb7i7NCzqACpd2nnepnJ8F2UB7sys1",
  "key33": "2eiYeDybqRc6qLjj2ihy7Sr2bfk1WjRFVFE3t4j99EjmYwHK4gA16quzRohyVT3UNai8TE8y5Do1kT1DzWWY48zL",
  "key34": "wMvuUow2cWwMvoF5fBbRvYevLgVQ5bmyrHe3qcQFQ5Sd3hAzvSMzEBK4AeKV7hr8Pzx1xi49TmuwaMMKhfLLo24",
  "key35": "53rfXESMMNSNPbdurFyd32Zk4Q8VKqWRxx2fmtaSLEFjZnAEsKF7kr2dt9ryLPhjYLw5hjjbHprEsKswQs5q1eiE",
  "key36": "NtvnAe1A3DEFeKuEAy54Z2FT2oJcDHrGyRfHfRxmEnTeuva1EWqmHAZS4n6uLPVvzMayULCj25penRe875Ktr6t",
  "key37": "3tgKravwPPttXmcmKTzQ8eZnQx8DvRFSdDf8VoVcnE3WM91JsStAsfyu9xBJoX8Qep5JyJjiqP6dV1i77YpfXpU2",
  "key38": "2GMi4LSUFVaB4NFC2gap8k4h7kQLMexZLQQkBdR8vo4MUox7Fc5VHZAMZNKHNxtMrN7fgs1pVVvrJLH79NQ5egVv",
  "key39": "TEgtBp4XPqdSpA7syvKnQh3m9snkSkjFg8VW6JpcoREoAxaFyrGWcwQWce48Df4yagRVVjXTwaJz84rUePubgZ7",
  "key40": "3HDJ9iiG8TVkcBLncUd7gCnH5hCDCbfbt1LX97CuVDvWwtdYG5Vhjums9MNjVGASZdptRz9WzxJBRurWyhXtJioc",
  "key41": "5WYQMjvExGZma3YqEUbnQ3YFazqHSgw28xQk9Tp1BLSEgJp28FmFcioD4iV8tC3AQprTENVMXjowBTBL4Xp5tfYV",
  "key42": "4BrCbvgwVNqUT872Hbe9i1CiiabYTNW8hK5jLRH5wBc9yb1rEW89Pb4SbHQsRiXjWZW5hCQwpqEmzHdmz2gWLfrP",
  "key43": "5fUXWgG6cSgDDeJ6WArrQUeARpEKVhB3617ThzZFLgFKN3yf5QMuzKSUUBgK3wgqK13NRdVjPnhAiSS3a4zZ7EG1"
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
