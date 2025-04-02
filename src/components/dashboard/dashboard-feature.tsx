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
    "5jDFErKcpvDhKdhHFyfo5FzyP2xMhW1EeEdSWt5bDFqqynz5FwuG1ibQESkXgA1WMa5A9MuamfU47wwHgTyDPC7C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NoniQuBp7wAyejFURXcdQ77vrFBRP6L8tM3TS5GrP8Jkdssknpb178TkviYdBns5e1oYyYb7xASDQ79r9gQJKbn",
  "key1": "2ahQ68CFanj7YQjAuUN3Cdz2VhjtedFJAgaJeQznW2ieZKoe1gRT4fvFL4M2xxQDvfgDqJVrwShr69uGtr5ivAxa",
  "key2": "3tZY8QdZ3jb1QUbSZhLhneBtrfFeC83WHW1y9KCfEzkzj4YnsvC4XQZpiZcdPekJYtn9KyesED81RKeBtyFsT4zf",
  "key3": "61WamXvqqVgusqTkSSkREX9nXnWDz3XMAHsW5BFkXWeSfiifxUs9LGcbXwNYrVbqs7yZwXLGvvRRMkTeUVYrSBfu",
  "key4": "2iZWrFgmK2d6pbdkoTwiMWL1mFBh28YMj1YqaCcPF5WKy1VRpjQpwV65g9sC3k8FemM15Khpo36KT476dRYCJ6aj",
  "key5": "4qtSe98w2yssLXKC7Es7okudTjQuzjyVpV9DfqPtkdTT7P8d8btgeY5DFfwHYuPkoQVkJ9sYPizqPYQ9sHUDL9KG",
  "key6": "yDZ23biSBS2zhNmopqAtZapNbi33gFoyni3tqb6duH51oDP293nWv7zDW19UrsK7bANT7WNRrJNjK6W9aZaMimx",
  "key7": "28EanGFB7fTWKjxNGFH6R4Hm9upS8jfTUHCBdWT2GZQaAb3EXP2Tt6wuA8uVNn8TsSWcvavRGJefysk5U9qhupkB",
  "key8": "3uAAx8VtuWaBrehjtHEtzUas8M1tFhaS7Dvc3aHTxkqbenoEQ3iih96YPzK3PhmKVUY5LgtyQHuCbeh7u3BeLZic",
  "key9": "3QyjKMjJv1jQweGshYBLN5QzVuAgZSEhTPYubsRXucdVarob5DtFKq5MJxF7dhYLdo8SKve3j6ey6su3pqim7CGd",
  "key10": "3qxGpaT3mXQa66uCLqRyJocngWESjSwKBdVJX6Cyh688XWx8jE1AkhRDZFvqqmgob6m7Yeu5ohWgE9a3vDyirm1f",
  "key11": "3NktjRoSccmmeBVtyd4S7DeWUGTvUc9qPwBQuW8rbEuUXEpuGKt1Hc1Q1dfnc2wq6aCsYkhgD6aypdz1syow5rZm",
  "key12": "4jdjcTrkFKsw2rFLBueDJnA6uHeFhC1nJZihTBpDy56hxRQNH2xvbt7s6fbhiBn62HQ5JbqVfBAWPmKXa1aQGWvB",
  "key13": "55Dm7AJTBXEmsqSKG6CBjg6yYCqijZLigA5D5JDrvge3eLxbaoynKbtTx7WeafFFdG2xpC8NYiNJnAVhX18sE8dc",
  "key14": "3Rd6Ueupr2cXebXZCjr4gCKifdanhwnKGDVSpUXq3BBuP1zezRYbYfiSqSphC2G1VMdsGRANHQYVbZxjLLJyKF8H",
  "key15": "4vkV1GcLbcTyvFGD1pdStvGfcRSPDgEV3iQQK61srcx16VXTtPkVDzBWdXAc1yHq6GFNKjiuTQAjxPxweBpbWHiR",
  "key16": "3G4fmcJEL9SJjbiw1htBmJ17VVEigziGTBVB7UmvwPXd4aimgEFRGegQ386DZ2QBUkhNwvR2Uwwzn7XxKaH9fjPE",
  "key17": "64PEu4FteHVYGmcuYZpsiutGDptdA1zgvGJoMVSv8frSdKJM4BFhEChhqXZ25nqWXXAsfQ6zhjkFTqPduCBJYwWV",
  "key18": "2EPGbuiA6FpkpxTeV5rrs3fc2ALbESnisC125KggSmq7TuNyAMuiCwRXud1nkerQKoYTseTa8n5DoeDykPK4iQBe",
  "key19": "25axt2JUyDHuP6opwtL3JGuiCJwTkXCLbwwMZJJToiQnXUtDdARWKrvw8PfLdEs6rXASichnLSHKzZat9wscSGQ3",
  "key20": "4TbSmeCfLkupwqE5KypDAnuZKN2gjXZntGYsZVfLtZJdZjzjsiUYQB4LrT9yRufEYrjckND13DBnELpVMExETQZ8",
  "key21": "5gFRG4oFJeJFSbuQ3eNB6FcgwPUUw6TPWboJdv2wLnbE3Y1hzRARjYTV5Ur3bxWFFqb2oWrYNB6PZTYP49tN4BcC",
  "key22": "YafmrmakLMC4Q9YmaRdpuNuGeSGDDVAEGDrmLrR9fvvbVDsaMJ2LkVvBtzZ3u38BAe3erzaxJ9brfaNmLCLZdEy",
  "key23": "2Bpmv1tojYaJhK9sPLA7T4tEkiuNuWTrySNMufLg6yrZMRWDiPmAuegdrJ3PH1pL2TA8BVbfKBjkiG44WA9CYukx",
  "key24": "4mtovnSr9Y6CTUxoySmPLjadXM7p37oDpqaTNePay2PYivcagX2Q4gpckNhVJaKv8Wk2JtmL2PYBANifRxuQrGUA",
  "key25": "uj7Z8DzShX1svwEkwPqFGxPk4ogkrJx3rNvJofo5BMpEoeG9HPeCARmQ9gwb8FQrAAd1vDd8mhKsGq3iqtLAvR6",
  "key26": "4WQ3HWkWahLXiTgrUKG8yhTFvZL7vcJSSoabBvytRRioTgW4nxsVogEaXNY3s7AfsxW1xkxtVFZQjB6LumKNHcbT",
  "key27": "2r49tfWkXx6ZcqdGTb1urCK2NJe23TbiLD95GWiaiy3QjohK93RC47XDuQbzCoSUPPwN3dRtxbtsk4Kq3Lx1nFUc",
  "key28": "58186i61umzqUitdK8QuH86yRQgDgRdojFkfQw2BqycngSVDxCcb5wxNy1YaVuHh6VXpMwKCzVPzkWor73YFqsxX",
  "key29": "5EyRNPAvpC81xhiseExJL8xxzbGb52GeMVN543JPG1XeqSfEGBC1ZSH5DnGrXBUDLDD7oyBSBvyQy48y4qCT82j2",
  "key30": "3QW2rqWnGG3zb7Lab4WR8LheKTqr45WCKpXxq4CGHLx9URZ9ssfxpDjpdp2bFWMjHkPKWK1xDkaXUEWyMHTJ2nxQ",
  "key31": "2gjsK5cCDbKd3G7i1B3Paeafn4YPyHGKox9BXZ8ejxBTEpxACN4Y1BFtXkjxdnF1Vyp7D9BvE95dTwpnX4fade9L",
  "key32": "5m46858rq1UcUiZdpjD4YBLw6hpCk1r5TizDUr3XYb1qr78geK7Uwpg996T9dYeCJ9BztGSn7d8FA658pzNvoFFk",
  "key33": "4tNWLnCJxyXJQRVLqJsPfadPVvc9727yPt2b34ALDDtq3AYryyU1nYYwhvnv8rywfPtQHhsan5V6ADEjkRR95s8x",
  "key34": "4HXVGpk7pqa86wgEv19Zp6aAJddvRfJ3TF7UJDhtLeHbZFMmZszhQYWkZpfv3To582uPeSrm29eSVRVSq7Rfkswm",
  "key35": "6457Uika8EgAPsU95w1KUSbC1nU6BwymHAT3GRRDcgSuKLsvdn9aTQrzAmo4zsB5t4xVM7eo3fyM7XoDMm28Q7yb",
  "key36": "2YECG1QTveRdeCbA16hdZByj3ChBE4kE79LKphToQUKXMPHVcftWRgeCg6qzgDYxZWtsfXw5GGeTEzjAyJjy436q",
  "key37": "27hMonMZ9dU8aPSQgsiVHASwcpqJerPXDPwEWZdo1jTnCRNwYx8PJC5adLLhoMNj6aSTRCPsJSqpBYCqeerkWwYS",
  "key38": "2behNwZFNvHnVAEfagNTf1FC4BoZzamzX5iMT9BiYe88f5RTjPjn42qZGag8XVRKDjkJXrzFQPZtnEvsHgqDVhiN"
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
