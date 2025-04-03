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
    "4UcqVqMMSaekgcKBioYbBNgrdhLw96aW5B1YiTaRfj9MaXVY2NBr2s6teRCsMQkvkjyqDjTEzMyanLZNwc9FFUzS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B7K6Ybzt9T7drzPVGgiZs9Z1d1Ty3RK4vsSMD2WVLwh7fG7oNuJaDU8Xn8mSZzTitoZa6dLRteJJLDKizgBy5c3",
  "key1": "5KytWBryJ9pdtqM1ZdzYXiczF95pkML7oSiFfntSkEbgcP4kdonfcLUANqFiSknyZvWmbREoKCjJonqa8eTmAgZu",
  "key2": "wVuYXKQoHBLgzKghXqHDyDMB1b6YLxWGUXTBdWeGYjz2BF3vdWhVyS6QEzi4yJAPku3kvBQDUYRyAW8NR8EktJ1",
  "key3": "2eL1WGSHjoPp9SJ5rAMtbiFMRksejvMcAHVwwUq7d5RLXMnK8QsExs43W77nFbaPXi8fwbW7CnJBsLaDbSvD81BM",
  "key4": "5cWwQg87SKFjtmn5612yWCvkymCyjkYSgL2nRyrmX1ACqaHuhYwP8rxUdYWQhedTvV4aQbaVZVmn8E3JHDpCd8AS",
  "key5": "2cdqyXhusMMcH93o19r3M9D8RdD7ELBnxPaK3iKMQLxvEmFxhhyuV389hHbB65Noy61efBCJSXYCXPjCUv4QWxn3",
  "key6": "j6eikcEBkzikAtc1fwmY3JJAsLHpSkzKMYT64zQjqwKAe4KwePs3xFQ2gHHpu8KuyFdg19QnBG1DJ8rpEbbR8io",
  "key7": "63weaEFErfrTrMvza3TWxJaAZr6rd8gVh4zN8rWvGUecxuxH8DAqAwVtVVNqkjcHq1m5iMVq9APw1yeiYCQD1bCF",
  "key8": "2VKKhxa8iaFaahccfBFht6sh4FpXqcXAxcDvzbDjgxzhXaC6231aUaRPiSCuNCTwe9ULkN3jQarmpfiN8RfEqBsG",
  "key9": "3394riFnfoqTJMdG9SpfS5pdmsL4B5GLGpXMypwEP9q5nyXrdyy2gZ1WyLzYnEtFKEWbJFyuLYENiDYPqJ4HyJYX",
  "key10": "w16qFomkbA6ELAVDutXeCsmrUAwHTPrwrGYpnzCPdWGAqWq8YMEvfRg5hAe97R2zze1DFSZGDcfujfSSRsS6XLW",
  "key11": "5Kmp97iK35JxFgkbeo1ePMK1WtQ6Fgt23mAmuiibyU7PfTnUhKRcK8nHFVSaPYtTN1zgC3X9ziiMfMmmvNzgmChu",
  "key12": "wmB3nwB77sQ9PgaqCaryTiZ8BgS8jqn3DY8QTSThkCivRUkDKfXBxMEuw83QuArG8jeoHbYusxu7c84Y81z6C2H",
  "key13": "4gLn7MkG1BzsqvNo7U4KRzQL7U9a2vCtGXEpmDnTBGsxURgUfVe8Cgnk5NBNCwdH1Gs5NWP4sEFKyAxzbBniKko6",
  "key14": "3LzT1fidWybD9WS62pTxYGEQtnFqs3Qr57KzS747bMPVX5mT1jnWYuPuHwfUmuCka8oyqx7aYyzj7op5MaqYrtCX",
  "key15": "2m41zHPNp1eaKEtkLHiksRUdb4shQJA335p55thCHBMHuxDoGgYsXyvneh8UG1foWtrV4kfYWcAMfgdq3JyDxmpM",
  "key16": "aWC4CBovfFxm8EJ1jXtvrnaAugHGme4BpociGPufzgg1zfVnNNkAL9567fvwVmrCrcbF3sd8K2wbJTPWVA7aBBr",
  "key17": "39kXeu1vm7jMFuaDp8s54cg3HU2x5otspmJ14pgA5WrnqhKPLM1Vz8jXpWX91JzAygDdgiyzbsjt5hwHAs12LEnU",
  "key18": "4kVpwCBmiwLJnrKdgwnk1Auhrh13Yq36HQ1SaxENpTeVtWurBRUf5Y3ydyzGdkC5Ne2cH4Srdgn2koz7fBQX1BQj",
  "key19": "2XJWUtzu8DfrQXHXFyG1PAnzABWDQ52TTT4vAE4gX9gwQEYFGiTc2JiR9JXc5CxvoPE3SqsjsmiZUqvgo7ooT4Kb",
  "key20": "F65UcfhKhYJRk6BikJM3L7LUUvywCzozSxv5NvkbGP4gdLTSsH9eEQNvr4NRvgDqeUpibW4u8DRS74cqdVRUxLd",
  "key21": "5ZijrQHm34rcx6tDSQaGbLpLpcKNHL3JLro3c1NWD1oJMPfakrKUkHQMwUox2qE9yHZuR66NaFLkCSfsnvNQmosd",
  "key22": "3YkP173562NYHcBSxshAa4u7S6idCLfWQvTAFWCNH885z25MoAtxLYhQzmQE7S9wUFqjUStY634wXZKM4wTWaric",
  "key23": "PpaDP2sBGK4gp3CjmN9dgVAuGJe7U1PJymaUfmZb5SXPKLTcxNLQ1auNGw91fo63SUF77BSMkvwaBXGxadwYmeJ",
  "key24": "mn7cAWiRBMny3gsnQtiTPvwgfCGJWwEfAjtVfr8eKStid634rudfkiX9iyzujRc2Y5VQiKJvMN31a2nXJqwCR1h",
  "key25": "5xrdythdp6J5GkHFad1wevi3JKVKjZMdcJfDNbCUbEyJf82i1wtF6BeXdoHfvKcF3fjqnzN18BBDe2H34f4pctRt",
  "key26": "5g1nkVAnASgryTV6TdBmygHcLou4CqRSF6rweNRhmevHjNZAQMyYTfiUpm2mE56soFeQSufSKfBPULQ6jixfmPeZ",
  "key27": "4vT69tQRqDUSsyRLbwUdRFKP3d8Ximd8m5iLD2h2k26TtN6ttg232vVmZFNWmk3HRMbRHMGiov2gaTgKKsKhDCZu",
  "key28": "4rZUMSCnimEAjGU7WBrJexmRdw28zxsRWxCkNrwbdoZk4q238JJw837Bm8yaF5hJJGzvhRtS7DjTRiU7B9zmRMds",
  "key29": "RYgmXtDWTpBate7fDCUvMwjwSykLwzU5mEoA9PDFUnmApoFSsTePBoDGDYQ4M6rNdZKDvAzeYSzZxsFGKTqWvtg",
  "key30": "4XqDNpCNaam69u78ir6JGdrXthi7BiK12vz8MrzEjqs8n9B4rK2d4P8RFRn35WvXg4d3CV33gKCGYJbKntBpr8Ee",
  "key31": "5bqmkkfsfG9KqNv9MP1dC3Z34Q41qCuRTf5wS1NsqLRCGz92cp2ToVL1tS5v2H9AGtnb2ZiDQZufYzax97gT4pwk",
  "key32": "3uq19puGJLhtYgKK3St126x9nDasryGJ4yAQzF3XHgi5VrL2zYrY3reFPdXyj9oGXPizYN7frJWn3MVEG5bBp2Ps",
  "key33": "5V4aoPsn6TDie42Gerfe1C4nDzJpzhV6d5WuasdbyMYn7YRbVJanYG6B2b8kD4ae6vLkiAVhhKRaBqZYkQigjkw4"
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
