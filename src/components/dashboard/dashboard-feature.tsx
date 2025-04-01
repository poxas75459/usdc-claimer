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
    "4w8yyPq8aajpUYEaggHpfEKo3zPnKt8XiVz35rooMDkQy8PqPqqFm55fovdLkJj7GB9FQbweq9V7UNSJd7XSJCYV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66DBcHNAsyxvz1wnRN8H3eZQsPmJi9AEj5WXR1iuRPEWMswagro5X4Byz4gfnjjzWfn7KagnWrbttYbh56fm1mjk",
  "key1": "3KHvTYvrMzwMdhzsX1fCvnENLF1ni9mMZJj3HimFqekGsaDGaZLkwvYcTzqpws8dDHHabj5xjCzyzQTnZbNqgkkV",
  "key2": "63uHEBkkSpnh8WtzLj6QmFppXBxMXeyG2oDDTYJr6Szoff11mm8YKZdQmVyu1P4KhqbTJSbzP32Wt93eeCG27uND",
  "key3": "46WgcsgL64tR8sG52vTsfGwpUVK9TUReSXMkBbgtbc2a39vXKwCSdQvxyzzN95LZnovPpu3pNePtfDfP7isSwJbe",
  "key4": "2mmnLRfvqVHHVbPXCMysxAvWkH7HXdPuVGEgKHkRe4QghRWaiSSqFMVt3yJTfZ5cDG5aMQxTHNC2y2v4PeoXhdax",
  "key5": "5mE74sa9LwwXT4DmNpT9gPqDX4fQ97h46XbZaS4sAP1Eg9NzPg8yhJor3wG5XWPyirwKa5AviH2aQTR45USmVcVm",
  "key6": "3Fa9KHg2kTuDAfNAVKgJDsfmCW8ERUk5cxdUgFfmfMyPWFahmEZoNrUPMdwGS3ADR4h3gzhjF7GPYn4r2dpFb8TD",
  "key7": "3cgRgKsE7XPkQLMn5s6txkKQD9FhFDkhsdfUoaR7fTDtjJ1w1T6LJCUk7gfDE65mBrTdUKAhLDNXkZMYpUX2ea6t",
  "key8": "2T5g9zApmAHErTfPsbuvKoNJyR8SrDD8EWtyHhqunu8r65c7yfm8ukzHZPhht2RLeeA6R4F17LQJE3KUnvqYUnKB",
  "key9": "2z49eVdUCJGowdP72b7HrcB5VYuNBeeCxFnkS6zY1aTge5TVU4VLvAd534csgpAgytnpA7xWdr9d7fySyJAQFwAd",
  "key10": "3h599sddTUW2gg47qStL7DFjmxy23sTaxmfFiy3pyAa2BSWGsXb38C8n7LGbxjw4X5uTGtZrRYaPLg6u82qXJQpD",
  "key11": "5FA3sAZMAYiCyHHFfQc7bNGcdoDLV1gFC3cbF1Pit8gWxy9G9qt35MGZNG5Bu8KYCfyHVkYNRKnfxQBbpWRm9cie",
  "key12": "4TrbYZKWWJZXJUt2oBRHT2Zb2FFxHR893gaU3Zfck4VKGHw7v952hraHwfmHsT4oATYXXkqXAemscgZRW1NT1tHE",
  "key13": "dbV69NpsXiPVNBXpF6vKorCBDsJp6jiW8zSMjKUudo145Axyr6sZjqGcvPtmNS2WtdJGXtTt7xBKZathwfMxWST",
  "key14": "ujBBi8cfwjBTt4QtFp7zZuuEQk9Ci1yordR8r89whREHcyJFCUKeKAGgyNrTby6CdKPtyoGuSxhgL2v5mzVHjw2",
  "key15": "eck3F9drpwxga8ckfcnHNJH7BoSXLZxg298zQKLevU1YYJ62TCJ5Bh5BYR7NUPPPTbkgGEaJdd3fyqV5iWM3f9R",
  "key16": "sNQHJ13nCKHLFemeSN7ARJLqt2rsSo5MLm2EZZBdNgthnPqrnDWTgz1hzTSojgeMcHWBog1tu45yRDy6b4o1NKA",
  "key17": "vAKJ6L8kokQUsA4QXsLGxX9G281HutaSj6kEBdKQSd9vJmWA7Ji9dbmK2bwFM9zrb5pRR75FgGCX8nPMSt1g47o",
  "key18": "3GL4jMB9yVjWyVeex52kceLTeAhb2m5y4c3hJLHef7qtTBtYGKgyZfUtxFzTTGZpQBVa21FYz14gpdyknxhgz9fV",
  "key19": "5i9NagLyC1YC1LczCFFcBxgC2JS1uQ7TqT2CEmirZcE8mUhCkgXg2WWrLQ4oGbimqpKsajPFLrF52o5oyAJVgvgb",
  "key20": "4TJtB5MvarZmdxf8cMEooLZrw6HW67vuFz1p6GFffbUUcL7A4iKd5GLNGzm9U1mBFdbgp1k3dKqnHTBsLXKSJhKd",
  "key21": "5n6uvwsPYtDCgfW31CH44Be5Tbpc1XZWuEcfcrNNUtoSzfQU7mU9htSjEZfAyto1v1VPDWt5BRBaciStWKUfpcp9",
  "key22": "4nF4YorwUi4sfouEbGX3EQj9mgx7oFFXPbNeqakUjsi3HgrctoVdzj33uCHoSzWFmwFvXXK8TezEr7xJarMGcvpo",
  "key23": "5FkxXzWpsLWCqsjd4JGtwwFCiuQSTJ3ooRV5aNwAmi18XWqBxSPGSrhHiwZ7aTTgMm4Df4f9nwJkqqm762958SSj",
  "key24": "4GKyfSdri12kwZADro937KDR2mSoRB6SiN9u1gCsRUHwKYpEcA61Nzjy29X3JPbio7AhXRYZjLf7j3uthgF686bk",
  "key25": "2Bsy9DQmQd6jJc5BJ1WGUZFj79CCbfcqyfmxj8VFYFHubL62aqfRGzormiuYEEfaj1wg9owQ4vkn7P9sMJEoLjkx",
  "key26": "3oHcSjFt1EosMabohearhw5cTipo9EUja3BVPapLMTXNTnfMP8kaTMvoHj6cx9wfiY9CjbUyxiW7u23Bi8FQkrrh",
  "key27": "3aJh3sYf7c5wNfsQyvPbEZJZNa8HJ2FBZadJ5asmzD1Ki6xUJcfXQvLJQBhrTD4giDgwmgoz1UfNUMY4SdixsWkP",
  "key28": "2Bn3WmLD8bHgRegYuZKiyyhRKXXyVfqvHktRQ2X39KPZCj9xcZZ3vjhRPYoZ9YHP9WjkELhUojqw4YCNBYXTK2hx",
  "key29": "64V7ezwLkE4b98DMVgRAJxn8p8rrQu5p6ekKxsrjzzTRhgWe9oYA2rT37nXvBuWhUrfJEzNyko9r9ZEtxkymBdrx",
  "key30": "5oGv4UjSCxsyfouVXgZk7ecFERnBVqqD3fok6JQEgFaRhZgn2HYdbTR1DjpQNqwQQgLr6ncKhGaq4oXvfTHPpBAU",
  "key31": "5daAuDtEKnb1mjG4hxMMk47npoKSBUqQFUCnZX9Hsd2NhXJW1YZ33hWs5tUotkhYyC4A998DrBzV1WfE7eXFEP6t",
  "key32": "3U1itxv8ahgGXek1fHC52Dkwn3Whc1KgeyBCPY6XB8U9Qe3g13Umsft5qCdDkmyDQPv8Fwpsx995KNYvkuCov2YV",
  "key33": "2QSvSiE2apAYVcctnAjkb4boxCSRHzcNUcCZXK8v2Gqhsfwxg2ygnHHCnwSd9KYjK5amX8mocVXhsrJBZs2sC83W",
  "key34": "4nbow34s7NtFDqbynJ1SiTWTgUXEWvzmGeLr2uNvDNPTndnRkCUKTfd2qhqqC6m3UByQXgBZePLPohAepm86dy9x",
  "key35": "2PPXA7HB7LZNvRkxtRWsVkcbuQkVUEEwWUEvjnNQzkgobfMgN4RmU1e9HLwvq8fsAfpRFhMgVosJ9gk6GKTkcd5j",
  "key36": "4hNp3Hcwt48JHqdBCcwhXhDUVEQXFppejJrAkk6giAJU6DAnUZKkZVf65RjXYFYjop2BFcFB65NMJwxoUALoCz8J",
  "key37": "2CyPYznb73HAsosXEA7ecjJXADX9dCJ64vkp6fVkq733FEJuCDc3s5a7agsVLNizU2wvtwoFFvx5THaCcym4dxGH",
  "key38": "3aCAjpF9ojmfhzhF62oNdVsJAtUQisvMTjaveTczd17cxXZp4qw73MANtdKqztrgrUwymU3GGUuNWe1ShSurUyog",
  "key39": "YAhhYDL5vh9Dx5kRFweoaonhyHv7JHNStF4bXy5DCyz53kzvjGHarXY7Cr2E61HYy9wDirB1h5cUPqt9PLmqWUq",
  "key40": "2xgmatHBtNsZWSWu6E2Bn4DzzkDJacs6tscXkoYKhTqH6i8FiWF7PAyexkM3GdigJh722fMmecgdgU2HVzJNoQzp",
  "key41": "5FDMc6KpbpcaoeaUFKj6GPbgnmv5bvWkknizjCwC51YKi4fJAz4tphRg61abZCE2XmDR6qkjm57T4dqgwpaXKzzq",
  "key42": "5JAACbegrwLvCFWnL6E2z4NLc3wSNTXn9bbZVsQWKa5a8C3L4uM3J3fJhE1oxFp5y149jog77NQrdr2gNBVweb4c",
  "key43": "5eVUqfFfehWpVzDS7VWwz2reBUy6CPDTMg2RhmkhzuYRU9XU6raHj2FYkn1XQLpokHDo4nrc4p1R8WvSWz4Sd9EX",
  "key44": "3fhwD3WJF8fXnHQFJKayBwd9ew2S98rvTyv2LnrWPrxqAnwBULEvyXRtBi9fwzDmDtKkSsWaSix7irpKukootTvt",
  "key45": "2tT8FzuNtEsYThEQE92XaDfZyRGidUKFWLSEvv6FpSfKW6Sk15RYeGWU7wxHFmSNPc2yiPJ6XjasCxpMmpms5mAa",
  "key46": "33zUfYkBS7XwvBrmwyhWoZ6yvyQ54jAYnc1NRnN7bY23tsWDcuaLcDhNCVKw1RhhyaS8L3JtoqYrvPLkYGfwbUSA"
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
