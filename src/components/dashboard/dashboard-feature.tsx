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
    "2HsrshJzBJgb44uAyvyK5vtiHEepgofhZ8PukpnU58DnXfbvAhxrRA4jpoukKzY9VYrx5rrmiPyAbouQDNvptMR1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WdCvyHfvK3XQEdPgfcCtc5xgtuVtAnZpCRTcAyhfn6kQasHJ6JB3bmoSPraHFfqkLTowb1EGAswfem2i7mBPJjb",
  "key1": "2uKasYfdnXTALRgsjCwBE18R31jonX7KsmiKNSER9h54iF5TmYBUyDUpxu1GYfFSc75f6YdiUaCVa3s5xrJ5ffzn",
  "key2": "metaa6nqm29PG1Ln5XbBebhdPz4Vka5s7UyQXA8Ro5NV4bLkt9aVi3AcAQRDvgSqn8DkYH2h5pVz3A1iA5bZsZW",
  "key3": "3F2F4rcJM4JHw8FcaKnupfsJuWmo4nLHj1vUT6n2nFSi2yJyomwHPjvo2XCf8fLPu5ppcKzWt65eEcyZrFRgNwzF",
  "key4": "34XtcbBKRhPrNPCpnJcubbxA2nAc9BEVpyK8augyMsDaiaShQKdrcAWhLXhVJFgiuYq51hUJuLXRH7bZM3hVmzPE",
  "key5": "7ZVgXTfqquwzQ4uM72HbYyt31EWPnK4iB5pGU2t3pygmH1LVCHWF61YhvQHRKDfzQMBcnuWkkndtaFunbT1sjNU",
  "key6": "3uviK9T3j9Gn44pEhuN81AxyauFN8Y2TdkJDgrZksRerKZ95r3pLe3dn6pxrfGpmRMgA6qM5QujT2vo5Hb5KuEsH",
  "key7": "2AoWbomUAZuVZRCPc7EsryvXTVXtWjZx6R5tEhmNFbQgU26qhY9QfiB6gfG65iFN9CYGnfLRvBks2J4JACDksAe3",
  "key8": "42gHiA6CUFzFBkbrS6Ni9bakJBv58wLuK1Nx6BQsV3ZGBM6AN2CxdtvfNd4HCbWetMkV4RubBJDrvtEYU7t4Sb8T",
  "key9": "29RSrL8JoRvPaHUAh1epihewSfywJg2u17GZorVwJiy8eahCYJx4FH3e7q8YxxieYz3DftmpZFQeDUSLwo4RjNSi",
  "key10": "5M4N2WKAdVEri2Y8qx2uYXbRp5pwK2dzmGUf3VGY9YeusKSiM7BR3KoKabRCtjPo6be8uwpqpQBTyhJEtS5YeM47",
  "key11": "5A2p277twZTAk9TSqf3ZYQaz7HQFcxJtSAiYW9cQxoEBPAQLiedevVBbzVm1uLsTofWMA5pbmB5DgMdDgViRFree",
  "key12": "45VVg5sZKfoHRCLc25m8E3xg3PLyn3HGfC8AKXFSsq5Fgbj3uQnW2qZHdWafP7GMyD12SQbiqFqNJFRpuZ9QPL7s",
  "key13": "53JPPpUsumxs5C2hFJKCikNrfD4cjL915umbgRwrVV4ufxYGJ5TcKKmbYqLcZbwBtZjCuJiEHgqoZpdkHVWMWSMn",
  "key14": "P4HJFJZHJtdieQMVbTFcvfrncxEYTCpp2eVQCeX86bfFHhDpBPWYGSNzyymp3fu2GMEUDLoN4rqq68SzrTaAftB",
  "key15": "2bdT1RJUhs7odRSypcW9fi4RDAsoBBPpes3FQZHfCkNUf2TaTTR2GxPWXynDKL9nenGKWT3qkVhhcUUQLQK4BTjY",
  "key16": "TWex7eQzKJdJZyWnAMNjDdUJjxkNXxjWvkk1ZAbaQdnWb7ZVvDNLj255o72bxcAfFHTRJ4j4StHftRvVsRMVgwZ",
  "key17": "gsyeHyRyxK1WXL8WfqdtwCqGrrWfLigKnqQEmWhZbXYDEmfuNm9iyi25zyxCBwkaXNWa9bGWRrmTeJGRcFzCq4B",
  "key18": "2UDWNZbjKCcmUVUPiJVk1DwjdSdCio9kxX528k3pwYSmxmMV9TCEb1iPZsYgcZJ4hMz38nGNyJwZbS56v15AtiDn",
  "key19": "3Agtvt8kYJmr1hhe8BM1EttX5kJdhZ3audm9yHBsQM9Z9tfebHRs62Si24psS4SgFFWjEg3UkRUG8gsvUF7BYpu8",
  "key20": "4mQ9jiRswjHsYxZTUWpaGmCZhcVUDzFEpWkbQ9JYXKBoraoPbC6Tb9JLv4JeqmmhAqPQN7eVeugdReCJD37EzdLE",
  "key21": "23K4TmfMr2c4nQKnNATsTUq66LwTxbR4PbLvjMgPWsSiTmgVbvJNbzSPQV1iq5eAxCxbfdtxgxaeAorcVfMnwpb2",
  "key22": "4osg59ehYGn1aNv6QHhjtwPKo54H1vpbzQqo1Pg8TgDMpaodke8QGNajRcQDxRMtt3rd2PVdAS5GkDz32BfDKTYk",
  "key23": "1pzk6CcN4cA2Wee6zXb9gXY9KSgHi7smukAHrxMHsdrXsAw5F7ZtqhUNBmwmhtwmN9twLnXUoZV4bZUirbGspX6",
  "key24": "4xBSDX6vVgnNSP7yeRGRaokYX9mfLPh2FXuEJLpWuAy2HTvzQbygE9tFmtjxhvUWXMKMTK1cZYSCj8AtswNsJ3hF",
  "key25": "4q3KEudKHm3PiBJgxtTvL3HnQq7wjsKa6qMUV49ALZ8VGLgdup3YsbpRUoCtgk1hTKuvu3pzBwLF5rQnWtPyHuHG",
  "key26": "2UyoewRz8YJ7sknEwQozUzwbQAR9x2UarW5BusuiHoepUkqoG6Ru7B2Z7b12x2veJgKVmkMhE2bPcqM5pgFV8chs",
  "key27": "4vCr4xCVNQa4wCdJis56WBU4h8kcug1yctdHqvScVKo16M4Cr1aEm85LewEMZWbc6FipFxdh5RTxyGeWFc6WvpY4"
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
