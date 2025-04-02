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
    "456mqjMsDWuqfym6KxukWFyVn23GDohDEc8v2f76Uk1UeZFr889PPYDKE2b1DBSLbx6cfFgnhhrUiVVNwpe1XsyN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49Q16j8MaZHigbwE3DL6pDL7r2hGrtNWxVznqv7XYtVfG2vieFJYADwhCrL25FP34rk9HTh3iHYJjX7KtSnzmvFu",
  "key1": "4qHmqDskqw2MwhCwcDMLhW4hUHYbj5h2ZiRCgnW6r8ciR6wpQU99cncRHoCKBppNW4mMXNREdVxpHjFYNo2meEQd",
  "key2": "5zwxMebHFtRexxh5RLNg7NviaqPv1pViRWzFg1AvMPGWGaEJSiA8FydpfcCJctRN547k8Am2wiDghaK67Jzhb1FA",
  "key3": "34z3Ef5FcomrB5PhvaQGWCxVu3pq8qc36LthY1eFUpkR2cH5mfBGuyDZsgPZU65weDcpDAfLrVVj5MW1UDTnEQ2W",
  "key4": "5vferYKJQGVN3vppQQGsC5oXkG6ynR8r9dNXfDDvyho9AhdLeNV64fSSGPxa5eSDUFjDKubma4RDGdmaMfiaGNHA",
  "key5": "2JQzjoDPMCCE2UcSBdekuSuwLSxJzx2A6vhQ36yxAb1Sbr82hmZUMWGg5p4TzHGFpeNMvwdPUGY5G4iS6JqBSREK",
  "key6": "ZLJLoyg6GBDnr2HLTxsELJ8gBR6U67bpkmCki8dvqstZ2HgEhto6UxHTjPBK6gLrZ7rTL2Qpiap6NyLVUw21TrS",
  "key7": "28oy4kTFCqBH6TDsDut1eMqzFKw3CoPy8mK4pacrTBoMrCPs548KHjrDE8squz25xmD4Jytxpjxb1mak4uyiPS4v",
  "key8": "4oZAnQqP5gPs3Hs7tFdnYxiwbaoufrHuPKK4dLJeZxZwYrLvzDw31HGt6cm2mszPs6pUziAbkeFvGphELLFkxbUi",
  "key9": "2xDzc6fk44eggmeKqEVTvHtwf1TMivCiWRC35oKz8xKZJMFJikpa32XhdTndC7upgcmZLK7r2c2GVm3RFKcqtjN9",
  "key10": "4deS16cexN65aNYDQrABqkZyD6A8aADKqU2fk4srjGJ5vvny8fkC7ivSJZEU7tEs6Rv1PZZ9FkwQ1f83vtXZvcm4",
  "key11": "3nn91J5eudNPbNtWsP9sMvy7KThYNcvsD93JF6ahZe5WUtMqJ1sA5gQQCgy6EqnYGYxfwsMaFpiFigU7X3EKfazd",
  "key12": "5uT9sCPcJ97ZtNGctpxQwHpsskRy5joc6pEWYMvvYyA5qQGuaPTXfQfyCWbgAiYwJGPDHoXgSmi9ftnM8KeLPvFL",
  "key13": "R315z3YYRD64nxZRSQFjYSVFJ3jso6KjnibNAnS9ShVHiV1FqcF3Srq5Q1jgWf5KuCYdL3SsDeFjQthdq9JCVPR",
  "key14": "G5miv4twLbCoUDnW8ZPvh4PiLukZT4whDLhFmPtkeGjGL72S62Ek7sALZJVzcSZwtubxeDXychg2UBrXQPbnXFi",
  "key15": "5TXG8TbNXepzyiTm1xeER3k3sUzw7iF1qJGF1wPXSLrMxaNKspk2wJQNrMf2h54iFD4czdYY4DNxKCRkHops7sJH",
  "key16": "UD4YXhB8ACiZgpMt3wBkhHgx3uLpn2F3aTo3TkyphA4bdWNNsPX9KGNyHoakvueJnwFGhTEzEEQMmxEf7Uq9mxN",
  "key17": "3ijAfpDFUwuBRvxtMHM6NzJyCofnuqJSHtuCFJY3Vx6ShgJAYEKbZCMzE7KftiY2V1fooUR2c8VjnR6Rxz69Foun",
  "key18": "4QwwdFr1cH6bQVEJW8Nx6UBwhEUwaTk8uUhL87JJh53TUicAhxgzPqJPNMK8jFpTTtArwKz17MwX3dh6WzQ4Byqn",
  "key19": "2HkBhPF2AzjeGvYBLNkNEGNjH4qzedrH1H3eoc5ai64LpzzPpimxKsf15x2jsEaP3Rdv3wV3bA6pJFGMpbayHNCA",
  "key20": "273yvkFcWmsrtQB5sxBThD2fSfsAKxb7FVdLtF72d1DB9ckCiESDjykEqQZcQEHhNumjSFNAgZtyhTCpK9mihCNH",
  "key21": "5r1KAp716VmEGNNWq3tV1PmSZjmTr5ATehsp8gZPpAFejX1tbXXjjtbSHMhGJS1BJp8tebzGzXpCYtpzjeYLTTdT",
  "key22": "2zP8gvCW28XASxhk5KyZDf17LoYwYCjHPxxuo7X6JjVXEzmo1LsngX3kxkp2EdiLBLsDRFjjVZBz3mKYrXNhV3WG",
  "key23": "3bBhVCydbUSaJe94EW5Tp1SVvPDTs9zZP6A2bYMdMSopwnXhnckH22D6GfHJppCrfNibvN9xQdD6N6xydoWaBYVQ",
  "key24": "2aUEcuK42spC14vxhuaP3WaVw6Pu4WghzwjJneoiwbsyVw5G2QiR2iqDvbdq8NcbFjtQA9Hve2BNMc9VGp1gRDJr",
  "key25": "51u8XatxbWiA5Mo25ZuHtS2W8eyGGxmnC6wC3YhDEsNQmku9KkKHsiPApWSrvqZaux6Un7hbg4kpuN4yAzgJR6YM",
  "key26": "5wLQ7Cy6UrdZnvBjxkqr1vaacDKRfKmgDV8igpR2x5SqH7FF66V98nMpU7cb6zC5Y2nVbFUF9PoQwbuRscwMdLWb",
  "key27": "5PHsGiMEzbveA3GCb6H95EJAywgL1T58bymPyxZ4DKTmY1jZg3NHVWJjjusEybZVgdVXQCudTcGqWC33AuDWQciz",
  "key28": "3iXhoiwtDtBjsmqGRgeTT1xFeexdzvRbR3uQN2ga9FPnfLc5hoRFctBmFrH4RCtdRnaQH71BQ5Tdugsm8jEudexN",
  "key29": "ch3EsJ1rmpYcmRUEdMktTYKNPg5pFiRUWMr41QSBJJo7idzezGNidczaKmUp43cQfppMhLsoXQGjvQnybEMSvXj",
  "key30": "4H1odnabeMksPzBJnnd4yb8Z8F1NjC9m9ZXenHGEBrydFkj2trsgUw2T7FaoEsLfAUrrQYjW5EUkVgvwsZ5NXwZS",
  "key31": "3PN1qp3en3aweSux1dN7i3H53a1Fv8Wmz8hKCRhjms96B99rptg4ZUKxR6ybbJXidbkajJ3uXBnS2zpB1ij3T4tZ",
  "key32": "5wgEarc87E3WtHbhcsPf9hZKnSQrvBgmvkDVzQmgwX14A8uRZm8utKyCdPib4CaKqLzv91PXs2kxEkyK6PumUb6C",
  "key33": "1gDXCJ2rnzS2gy5KAwrH4pR4eG5e3RVWDkf1dge3qdMe8cXtcyhcdNnsridFdyPPM3ZCKVugeFGE8xtEkppNqHB",
  "key34": "4Zh4v2jWU7QSsKvpw9TnPWhJ84abkehprWAKKuiZm2uCGHNTYzJBfP1eCa2nbgCbYRmuLPQWmxqvhAvYKA9UsE82",
  "key35": "2kftq7kyt14HA13jyMdjH4dWQXUuUBecs8etU88swen1e6vkGzv2XzWWfVhksUBgTVEMRpfMmopr8KuApjFibo9y",
  "key36": "k7tryH1n6xxCxnrvtsHPMPTsNgx1jT4SfwCSF493a5QB6yL3HZWeBsXc3HGXAmFucZDedyKdNA6uEaywbvwhUqR"
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
