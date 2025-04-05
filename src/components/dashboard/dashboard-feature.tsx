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
    "23ixuM9CNmTNYeQLBeo7QRvLJV57B2BpZQxs5NpsoVzkQrtgcQ5aw1DFT7Q1XwVxVHc2En7n4gwwD412eZKLxTXc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ivEFiEoe2YbCMkhnHjVYh7bFRYrH2jVJQxvkUySsjAyiqRB41sLEn3BdHUHgTmxsHg4kQRArExwE3HonvbNXLxt",
  "key1": "4MtqVtEsyyTis3mxA3EVa5KpM9H92qZ37kKQsqk6ncWnyZXLcUHwCmp5iYAeNjG9tTXFvUxK4VwdoFuu6wmeTwK",
  "key2": "2naVozKd5PfJQFBKVcVHGAnnrbozTiFTofRrwfA2wH8KxgNgkW9TyQFRjutBhU9im8oXsXNtLBFrxjd51qDEWuSg",
  "key3": "2Cz5SUMnDMJWy4yCgjCV2jSyHCH2oL46nWtCGHzKS29kD3RwP9Athwe1GhtyRX4h9GqjLhhxxrzUZZvEvy9ycpWP",
  "key4": "2TQfQc5zTjLDYnQwT3mvexh9WFagDipp4xTXimbY46PB47roJi5HSM4k3no1x2B4L72QF59Dw6jp9D5BpDosCUGP",
  "key5": "VXSK9X8SWZjGFhfeNvobAmuFSNxHLNATyCKAbTwTZjr4HaP5urGTyFxgkkmkQ4KCrM1RGU9umgwVn39r21Q8fBY",
  "key6": "3Fre5S2QqqqhD2NPxYZkbP4c6XcPDQ3MYAy39FBf8VzbdKJQtNuTPd3ZwAAy1r9dBfkWB7KqvaxXs7QkPDusd6if",
  "key7": "2xXjEkoQ2Kkcq2pb1jEV98bYNqXwZuJ53ng5kQxZBMZWumBtLL1wMZWJ2hbTzSFBbhF55ZUbHD3xA5t7Es5bZbmV",
  "key8": "4i8xM6sjLHvMsAeuNPeoHGfc5JAXgSPWpqmYZshnS3FJA65nUuK4pCaDNzrwturEivMG2pRSycegxNbJfJ7azXGN",
  "key9": "3vMyrzrjPCYAqUMJveY4MNJ1trUJhtze74Sap5KyFDdap1R98rR3Q3FQmYpMoDLX7TStcXrFtofWzPyzBKXJxeeC",
  "key10": "36KDajVMssUAjozZHRQqBALFxHJppGT8m6hQ2tJFJncuoE9GJMJVSUhAzrzQtYuDq5ihb5tSvsA5VXPB7raaigVE",
  "key11": "e7igYZuWbuvx2MNfr6FmTqmRWynir4sHD7Wp5ue14PCDrY51Nrt49Lzsfu3gung1dqwmifLsZ1LQdWEQ2WkD519",
  "key12": "4wdE2ig59PaWX9BA3aqUvLP2r8RLWVqPAGn1Kf1kpu4eEAdpb5bJ7GXRjtPp8xyu2zGpDQNcqU9JZUrqomBhudNB",
  "key13": "26yXsALGtjEGmj5rYb54rSMDXQ4m1yYGTi84CcD3uPvr7oFfe2wY8GGaHP5cyzJxJXejWPyyYcRDZSpJMVSTx61S",
  "key14": "3BBjoqaNq8Cu1gRw9U2kyi6AangUSf3x9UhsS7dNxSAHwAiNyLFAbvM2hGYKEUqY6kCAGCcPquZKEW32ZEnJSLH2",
  "key15": "gYzNideK3S54GBCGSQT3cum8iJfL92SLCGbAVjQ1QmPhJqKqGmQtomh4gWkdDP5Ypc2ZrS446UAgZDZpNJRN7dC",
  "key16": "2ez5tofDtVh24ejArfHieeFvcfrkxJN21eWyjbHJJMiPhmNKeaX1GM328bSdWK5rQZDTn1oxYMHAuRJ3gp35Gf1t",
  "key17": "3URQ88sXETE75apPE6m6EQK3uTi7HhDNQ2MTFddf1wSbmodk8SshnypPhKqZnCiBZ8mD95mhyWGNhUrfySzm3S6z",
  "key18": "4Mvyd8kfP4r6pAg2xif3PJ9X7SZdbSmYMLMttXNMx8YTJBmhYdzPVBvgWTYuAUZiXgFpY6s489w6YUBXXVPHdgcp",
  "key19": "3FQSJ7LpwMyBhtVNsbAxW34VLoERqd2RFPbpkF17rPbqE8344JAcnSRypuUWz7iTZU3A9hCMKT6HtSA1bLodNcpg",
  "key20": "3Y7huWKvnyJsaKxoFzfDJdny6SUsWXGhGpM6jndBdG5zz5gJb8ebNhjyM2V7ZsBvKQRZuQyBzSvcCgiW3iorASqD",
  "key21": "2hwPqhWpHLNRsrs7hSqp2Hf7yak6wZPJFeQTJsyL6mMyuLCRKUy5pjsrBnijox1hWcXf81kiu8W4poZbnaciW2MJ",
  "key22": "cmQMxtPeKpriTWuHNJUp5nJbEx3xvtuas4pqRpeMeYaRxcwhXcQns3GjAxSNT8mgA9rohqJcvCnk7Fqgfr9c5rC",
  "key23": "2Lsnh4yExnDNdH7zy3ogov64cPnqgA3rpJmEuzG5x3LvSLTvM7KFEyeh1pADyJc2UVqtEMHurPYmK6MHp75Uc5ZF",
  "key24": "4ZAdwGVhaebhX5BaB37THZ8vYCrrxt4jDwGGae8n14pZ5LEJeaXaxURxPTYU61tzpPSWREt4en41Jt33LKPx1Fqj",
  "key25": "5YmBH138ej3DtibSqJ399QK1HCRjzvrZr3EEWvwboXFmQiC1Exz2u4FCR2EzX5rscAEDAfcR5L5tVJ1Y87NkPszs",
  "key26": "2EzHLUjBJf6uQrht3MBkoCKtV45TkMEnj557gijrXkbtS1VEKrrCEQpcvzULnC1X6gLg4XrGvBBVK2dXtNVHKx7G",
  "key27": "5SudxP9kbRTZeZeUAHBXicrNXUGxgzqYm5Rs5guzx2eEbaK3qM8Jin5EjPYD3oXDbdyvTfvy9e2QUz46hrEWQtiG",
  "key28": "sjeRAgVgFn8PyPMtzF2hfwdeaYpSJvB8digW3qYLqJFqyJ1egfYXE1GsTkX9pB3GsWgHU7RzEYuYcAzxceSgRhD",
  "key29": "3FNVSAZZhtK14FznHChzvAt8fJsSTU5dGLtuys7Qdiorx4LdCyS3KiUwuqJP7WP1VW51QqiV1YiknbzBW7gwP5r9",
  "key30": "4hxSodLadUHkBJWXWQgL6N8biRfVFUXevY6S5fbXNo2WYo8RiL4UMFFHw4vpqHNukwX1ENDMzfYYdcJxY5RcZiTK",
  "key31": "3t9qeP1KKo13qugdU5dEX3zpBcmT8MHNvzcfWf3rVW7znpKJ4AnmHJTTEqGNy73w24nU4EptgcJZaHAjfnMQiVYC",
  "key32": "3dM592arkzazMRpBpNEH3gJEnRmwMtvhgMFjh1vaZG4Fw3kiQo6dGrQvDEk8BtyBddtn4y6bjD5oioacpmonBF1v",
  "key33": "5Uy98vrwkqyoxYVcMweTk7DuFsWhiCrWrDiqzy7XxjSC2kREo7jmDaZcTeUZng5c2Wr2EUxBgZ67P84jtncqqwG8",
  "key34": "2eVijxDZyra5m1J1noU8jXKTKii53nF3K6oi4GFSSMxx2csBnEGigqEs1inSgwBYt5tyfPgQ6Pkm1hip7YKQUt74",
  "key35": "2AtCpAkEKEfkZbbif6rLkSfmox2No3qnzEFNBxuZmKgTxNrN4UcNpjmaM7SDUCdB3XgVGYjFuEThqAtHtJ5tWaba",
  "key36": "D2nhTWQ1hqZXq1CBh1XAdo2JPsahRCqXxh6TgJBsdZpAemPbRJNYqRFacTAKS8MNLdaFf7KWW4X4FCnWpri1g5w",
  "key37": "33cTR2MUrAJgpTCszGVSbo2KuwngtoX2xSbA2xxAG423uWU4JcFkbV1gd3i2Nb3b7Qx7x5QHJTmCKuVkZeKjucxq",
  "key38": "4KYCqLHtCL725sfs2Jv1dHLPuMWE4o1vTyLJTjWeyH8jhxRbK4Pe3iV3AH4jGVXLFDDLbfBkxYmv6a8kpksCAuJs",
  "key39": "4SfSZKaxtKUeSFVk9Yjmws2cirYvGeb8qxjhCrvCTi7D7wvW7QwaGrzCeT44RxeHRJjugCgF6fK6Lu4cpYyMfr6h",
  "key40": "YEFWYnsiuv18YzhXAAxSo6kRbrRf6kVu4bXyv8hyMGPpf7SUH2QreFH4TKoPRpTSwwLucGWv2WKHk363ZrGgrBV",
  "key41": "5N1jCjAUnYDhTRzgQQBoGe81e1HwF8PGJy7wMHYfStWbptRGQL38weMeGWR6hPFrbmrv9mynsaLHSkAKY2viPRrR",
  "key42": "3a8dxsYgcoAN8qNvdUTRFZZVvcxmZis2PRjY9NH5Xu4RE3RcGmjLHp9Za6MzFE8Hc2k2LKj3VndwppPcLHoumjYT",
  "key43": "4TANNv3KzBqeu3EBKDt5dj9YJW282uJEivUCJ7PduhAB9Ns7cmDABvKUvhMGMzDFJA3RLzoVCtUKgUop2CEb5hmN",
  "key44": "3ocCn385javMAkNdbVRRiM64aPwMqob5dsPatXP4G3mEHc9GpwfAu4CptoDLtryoogure8p6yECcFH6Ds7oF4Wp3",
  "key45": "2zCfcr96Me4PNQDeSyLfrHwKbC99zDYmv1D31uNBceCZXkNBkaLHPDBEPyEdtLDh3JrMSfq71QokhGp3BWrqDN3k",
  "key46": "423uFFV17dmQgG4fVGLLPgu9K1WQpFhR52DUxG7j2FWBfL13ai5m3kLwgkgMvWhpXVPP9nKZkZky71emVM5tDAgb",
  "key47": "3BCb2yG8C3da98BgTcNK25oEiy8j1xXntxzzbUHHvTdz6s5nSVi8YJnn9qCdVnCHMrr6DwKhVDN7xHvFZ3bR61fe",
  "key48": "3T4mzB49aX32uybdhz6PkPXjZ1ZtscQG1C36N2k4EC8YydyfmBys4EwAHMGoxX57Xhcz8Ms8TRstBVnivG1MvHAn",
  "key49": "5FhPhYYo87nSk3ABKT2pXPRMCSMmzXz1YyFBhomK2Yp2uGrCBWGYTDDVg2NuurnZvAYsUXNhMUCAPYGrE6SATx3C"
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
