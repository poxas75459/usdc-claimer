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
    "qf86v8CSFmyb75fg5BGMTLKrA6v8XVrJruT9mNkCZtxfR4thjrwRjze7DW5j2DGmvG2mtaSLMGixjhJYT36znqN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hkiW2i15CXLFnxKRRkxS1BWRE26Wxq2XEbtVYmKZpanj3QFgB1zvQ1HFPamfnCo7fc7BqyDhVAKu6QYwf5GtNZF",
  "key1": "3MWsWqJwZ5TWWSnLh1bgSJ5Kc8Q9HAPaxZrevdPEfhkeJQr3n4sPBqb3pcwSGKK3ytQMJ7gB7MWZHYLcALru2vxj",
  "key2": "4SvzEm28PVCdGvyLAG1WrA2cSiMhPCpRqyHe2USG1s2GkFCh4pJvadTm1RUG64wZcq3fkA17EWga7CAr9wkq4zyB",
  "key3": "4uQ6TDNgW83KWMCP4cD4e6xGz2tAHxuPEqLPKmQoLcx12rxegN7erUf5Puh8uhEf8nC9bABVwcX6RVeibxKrxwBy",
  "key4": "342tErGCp5gy1sp2xbn5tMpMEMBzV66nFQh3UJBSzg3Vr3tbp1RmawxRTZ9SfqKKEdXhZMqb4zbS7HF9ZzJcgFtW",
  "key5": "2t7CRfy41mJRWRb9XNM8gvyxWnReJBQAbHdqTZ7ZKy8aXF7WqBtdSKcUV8jyujeRHLfWXJDwh2oNVVfVg52UaS5w",
  "key6": "4amPRFZXh6nbJjn24KQDHFwjGSwU7yA5MisRVkvNPEwoyB1p6mKVmQHoPgGrJ8ncHrUaXJKbcjkW55HPy2ncfXH8",
  "key7": "4VCHjh52CSrwdTPAAJJWZJXUhq74We743CUM4HnT4YgmBtLG9gWumFNVLpd5qJBBeof4WyEEtTqw28pyvAJTJ5oq",
  "key8": "45TB2A9RRJgJcDxjBvSgQffBXAPSdVDeCgCUpZTX6CDVszyQssdDuqSR6XQS3fummKB3JUERPA33MsMHtN8qzSvM",
  "key9": "anToyLnUe7jkZ9jrrTVchm6ARUi68ceng6NVRTJvkhkqAKbUCNFrNcZyFmwJmwBwAQtuRehfAqpCytbcNaAv3oy",
  "key10": "5nuxTZGiobREFrXy2Uejg74CZFuTCN1qWrR2DesxA3pH1VJk4r66WN3LRNN6upq2RcwtUJnprxGajD6nRMyWvtSy",
  "key11": "53p2ne2Q45WR8kZDc5VE4fk8SRvTppsGqikt76VDzho4KUdHu9Kgq94bGLT1xZc6MsWsBUfaGrYJ1TSv7FQesABC",
  "key12": "41JrKaUsRv21oENLrguCSGekBEfjp5GMW5Q3Mjxi2YxyFg1cACZeRFMctQF5XgfhSCvthQ5L3BpFM6kabGZUay6o",
  "key13": "53Bt3P9bGSMYrxRNV95e2fZggHG9EgERtRne36Us9epV5oCQZZw1C7MdpQ1S6ooB5RxLMnJxyukPmp8WYniw41VJ",
  "key14": "rx8Zqu2WDX2Y5CvUmXL1w1awYMiBe6pjEkHCmXr2H45dUkHuu43BuGuYJHeSNH95g713hEsRJU97pgj568PQfZ8",
  "key15": "2L8D7xXi1LNQ9H1g6Kq4jFBY7pBPmZzd1UE954BKBBxSnCxHGHrq7rb62EYQGUc9EpmuKJ5cgkmbpk81C1F6uwpJ",
  "key16": "35SaVqirEsxzr2hFFUMZzqVAyuiiTUJbrGDx9JsDUJHb2gNAf2Zsx29Aw3T8vDSD5xNBnLB2LwTW3eL5ST5v5qNp",
  "key17": "5CohxnA1oZ9UceJtPW9fRvfUKHJ1jCAnvCUoB3F3jfgYMEJ3ER1MTBppptQ4Qbgroet9mgwN9JqQpP3oZu9hYpcm",
  "key18": "3M7P21sbzjDTXdGUqh847prX4a99VhBMd4LpyKVzBrdA7jFqLWrCHBYMuPDc3eVv4g4yhCLcadTZVtNK9vpJ7Fai",
  "key19": "5c5y9rK6hNavPwVACkGs3S3HN9MV6M84HYAfT5JRS1iW8sALDtzkGu1HAwDFAhP5EavkX5sNCPgMgMEhVBdGrWXj",
  "key20": "4WMHVF8W3Vvgstf2bXDjz7FV9UGehCJ2khmcfzbY8Pkh4c81t7vTg7qVyBrtJRC3mxLtvJVy3FyQAhpLaLHTjLPm",
  "key21": "27FMZ2UCE2JmfBmZ2eyPwGeJubE7XHFu1EmevRjiPWGDb9UQVSmwprK6akAPVXgJWyNEsKLPBP1miCSfYBxCjD4a",
  "key22": "3rmMsWgEij1gbGSNt8iCuzpEENvSHRav9XHNERu76U7yfZ6wSv7wmSbpFNTjDJoqN5KvNPwptSaWxaddxwyNfiiN",
  "key23": "dsR6J1Fw7CTYbBojePqak3HiPDi5aSMXmaba13vVm9aWg2EUhyvymvZJtygfhRA8gWMkYxRYZqoiYaVi53npQK1",
  "key24": "2N7PaXQ4nAMmjmAN6jDH1mWpgjcJLPiNdYN8QqceBowLBGRQALFxZuGXVQKF5n9bbQJzcevADtME4zenZ1R5mdZN",
  "key25": "46AnDLkYDH793mjVvj2263onTLeEWw19wm3R88sXtMYhwAPsQzqXfp9m59oKpbRXuC4svsZycaFuQgDdjT5Bx6m",
  "key26": "62ZavmzSJgGHZfFnUCqAVjfF4JLd21U1wStPT4qJR9BTYs7daQJwK6c4aELRtzN3ervX3fH6QSK4rtBHGjpXbPvx",
  "key27": "61Pm93jZystnzjy5jwrg74nwqt3AuP6DKEWP9AHGiTci8YuZdZaDuhiG9okRjJ2E1epaSjG2yHD6ejbFZu5Yy5WU",
  "key28": "5XCxJxxJzfxQ8JSHdeuK6NCcpNFk56r2TzBLxY4duzfpX6SXicvPhqGeXENaHjKam97uMTmC9dr3XyFX143xxpuT"
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
