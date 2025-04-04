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
    "2nCYF7k3zVpD1HSS7a2JSaeAjZYSbKPj8sHEdHzX1kL6fB6P5PfhSGbucncLdcmVR9zNwVFbiSeVbtvCxQdHVmfC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q8xzkgfQzwyTrSU8ADhxjdsuzAzpDvynbayhnBYHrZjVat8rUagu2Uoy8jyU8W6br97AGfug4XHz9vin9Rf6vsJ",
  "key1": "2NYGmwMYqozb5CMFwAhDbgRrDejSGLmL1S9ECEPQkMpGpn9e1da9p7HQEC65X3ZrGdnFmt8Gx6puiXf96PWVs1Gd",
  "key2": "4TsYAjr3QXPLjHd7Gf31shQm8pteCUEFD1goHbDXus396YJdetx8HB5pXyUXD2rDSG45WX7nDz8d6o3scfuup9ig",
  "key3": "3MmmeXycm1X25Mrcgty189axBK6k6GJhveMRVj7TGWdxHmfhxZxiZu5WvaEsSxVG4TS6QNGaEhLCyAqc1Ec9rPRx",
  "key4": "4Q86EtY44HiWE347Aaxiq7Ez14cA41x7RaGADjvQGd9jpK8pZxJKm35NX8gdaQHGr7ktNRrTgHQwXTweeEHwtcS7",
  "key5": "1XEnPbbHZyDjMen5cVvB3TMwJNFzqJNA8JqMPf7SDJqM3XasH7yG6UdVQgJrn1FVkCQQMKv37eydqJUvDgHZvfB",
  "key6": "47YmjaZBzEPJejTWp9Lx64dz8cvAvrqNshQrh582auTUWMYtzQjKo9FWQ1Z12wGgXGuniH7emrHC4cXjafC9h2N6",
  "key7": "p8DYx7eugT6mnyxmKeaBoMR3onT6yUgtpiFFK9SpndwWLooHEXomrubzfsCKQmYQqR8ib593C2agc41X3Avq1Wj",
  "key8": "2Q4zXF5Y9CjbezzqTKJkjB2WS1dQC59ye2oYRRZXt2Ru6GDtR4zBRJ4PzCSCs5cVN7JSb27cviyDixsZVyGHJu7H",
  "key9": "59UMbSFTFRxpFMF5w2tca8m3SBfrzttvPibqTqeFVrpQiR28qwqvhajdEJcpqKyTGaFaDN97jfJpB5VtpGU97JiH",
  "key10": "51KeVrku7f7JUnWcvY6BecAZp6KnshHozaAddJ41SnhBJavKW3ctpXU9heMfTiWwkfwSRh16y1e4yggu2zLfZons",
  "key11": "2QByHBFR4ts5R6Fgr6dsGfYjsmfCChSzZqhQ3aJiBdyJa2qz4xu8urjEnABpBP6PNMuot947rb3deKWyX2kc4SFt",
  "key12": "4kybZiNddBcog3dQ7oymRV8bofJeePutuet2w3N5GTw1E7kDrP7YXMD2n8Qmea1BvuJymHdVQUjePYJPesjcan5h",
  "key13": "63nBadc56NB2TVrfYttWdKicrt1tmRV5HV6KZ8kYs23iJDEjG4aNNTnQE16drsTE5FxKerQvoi55zTsoZnVPjq3e",
  "key14": "vgXUJ9HWDXxypjJEHZv4uSbDG3xq43cP7iE7XLqVB3332XPHAB8cdYg6LP67opSERtNw3245sKGx6vkUD5AbBKN",
  "key15": "2S5o3xbK3XhrfSSJTkDidhHfPtSxK84jmP1Wawgmq3VqWEEM1hYyXtMZ3gm3zTC9VbfxtUBr6daiovoS2xyFkonf",
  "key16": "3GSBJv5Z6VefHGUnsx29BcDnmdHcAtkehXtroceQwgvzjmDBqfTVrtoGkeuKC2MRyAiJx7BLZBNJcNpwP4ZvM99A",
  "key17": "25VyzfSHtXxMEz4Gj8XUmSgvRa37Vyi5GCx4rXnzrf6Kt2s6rgTMUQm7ej6TvMZx1rKrtqHtWVT1TdV5TrHkYcnZ",
  "key18": "4A3496fE3tkLkw8ZGCvGfcamUaGvZhtAiFrJC7Cw5Hab8D8taJKdKjWYUcT5u4DBpJuhnd2crVNPNrisejf8Vvbn",
  "key19": "2fYp8uobcDUXyFMG3ahejVE444JnL7KipptQi3tevdFpvwzmMfFZuAs6VifjwXsssZ36S757GrArjAqQ1L8dSUd",
  "key20": "5EBqczaN4DHrGNRRpM33iX7SKinWHnMEWUFQ7rf8fVWbW4nYKH6cemhaddzJkK9aYFFfRXkuv1nLNna2g2RXiepc",
  "key21": "3Pe15DUS9ekCbVg83rZJU1aaLkZPpBvB4Saj3iddw1Ze57innwuSyi6JzqnBdULYqqSQ6JcKfj6yCw3J3pWP94xX",
  "key22": "ndjYA84j3FkUdPJ9x7JutJ9ghhMqMHRcteRmsb1pgGvaaZbRGrNkmbTBXNGdvvjZXrSKMwmv6MXwTK1J5AuL64A",
  "key23": "DkGXDxhHUc2FEGsHR1uABdtERQmfvLhGU3QynXSjRT6F1uVadzbCBTQmXPdWjp86fTfXbfHCXmSMWTbkFr2EwxD",
  "key24": "3AnqB4SFCk7gsEBBeWFLJmUVaVn6bSF2aeDW4oDaxbvQfxsPQ5kTYmTjLmqoQH2NuMfd96vCnQN683tu1LvNtx9n",
  "key25": "3urJypoigubjX21zvL9YVbS4GESQ6CgMsM9noKxoyd1ZXA1KknaEZTKeJbLcZb2YhZiBtyRC9UQWeHeQttDbaBZY",
  "key26": "8QTGeCzjj5V3YXnVmc1WPaVoq3iQg5KyuEn73YPPJbhJuQ2CFomkkMKh3qx9WoNkLbRVqM4beH7tCB2QgQhHnnE",
  "key27": "2Bgk18ZWPiNtZgUFFA24hVG5DbGfMVPz6bJk881gzNHohtsYVT3EVfVsNDr63BA4G5DKFENryD7TRwFz8iuYum8z",
  "key28": "5znLVow7VNR5yo5iCYbUTHS512o1LFewzauFe9mdXCu3fdCHSW62RYhekYuZSQL7YZCDYAaWGN7y64mzFyvre13e",
  "key29": "5sebCjtZPKNVLbytRKMkRA46WTeyELYcFoD8v4DwBik95hLGU47dZjnnrHNkogfb4CwihBbfAMG7KZcC6XYtpC6u",
  "key30": "2c7HAWhWoJU6kWq2tBQ24MU67k5SdHFiCK9s7oNAmcfFCWwsfJ7S6vnn5ds5L6pv1gkY1jeFjDAmHGovWhLo2qE7",
  "key31": "3XAY1RMm3umathFyeth5wmxqo5oLUypTTibXvBAcxGyQ3hU4SVBhmYw16CqRBYjVQNFHoZzmpg3ZGsc4YnQ1cpDZ",
  "key32": "48A4cQmhVfq93LGTbD4cwGT1T3Rzvvi1ZRXzTud18rXBvKphyZkxq96qKMPo88GbjQY1LTY2qzLYV4kr7eGQGo4Y",
  "key33": "58tVB2GjopeGCUxUFZHw5jzNckk6HgCyZim6pwAZaSsu9x2sn6BvNvK97WPyfJBPKMqaEDUQPQWvFwbots7eyVF6",
  "key34": "5i5oHRQSncJ4RXaSxJbmjthET72GB2UBysGTSBdwwLprboSDKTaUiXmbNiUYJHXkLNKG7EMFDZRHVQ3ZoJ71tk2d",
  "key35": "2RpqLtPfNWDgPd5E7S3pqg1f2PMQGYK1iey57aBSPuYcxUnEhrz4WdHFwuJMds5ywTYB9eEj4X6hUeBPZ6gzCjh1",
  "key36": "2ZVdvfjrQyZ1YXwHS8RrwciAAXW2R4boaqbUXoaz7JVvMcJfvyEJjA7UdAsNDazU5vLTuuegh9pk11HSRkkeNmma",
  "key37": "2HTd2hn96frTr8uzHsVDji8YwiEEoWQUnNBzvCTFJWCU86obqqMfGea2UG3PzyjUWFCEfgDxwKRrYGhQyGdBzUBK",
  "key38": "528NrsTVN3wxrRpcGF44bcKbcpDEsM8htxBbQjZpXxnxrj49atyHJswW7A74PFdifz9759UuUGaMcLqMCjxdTzMd",
  "key39": "4vRL5m3rXamcYjrg5hMQjENcMEW3gyi2TxmYEz4VLP2QC5BykNCavX2BEW2YM4DpP6QRknNZJzkhUce9xStZpr5E",
  "key40": "48f5DHxThWQpNmRcgVthrezFJVQmhevXWgCpvFJBASex5s16H6SgG8b75GCaNxZv7GdaWcAxYxGtm9BXyhhtLpnV",
  "key41": "b6mnBmgZyTV9GbeXEC4t873QqRh9KZtzKi75Z11pdghedZWgE13oM8QJ7jQc3fJhFyN6Cpjd1TBFeULoisZK4FG",
  "key42": "5thgNZYVZcHU77qQ57zqfVXd3XULuw9mCtMQTEn34mmFcRWU9D2rMhoJ6YHveczjt9RpFFiWumfouRcaVNt7ht99",
  "key43": "5DQragRxSJ4fcEw5fSeg6Hnx18bteczuPXzjcSVhZbYrr2cJT1kwrebL4DPC7J3cmDMoDK4vtzVDiT9cqZCBUiik",
  "key44": "5f5dt11y4XNR6PiqmJwBrASvtJyYQAoEKZcbMbPhGP11rrAjjfLfi2feMV6MZq2AjGphdNjy6kyfRYTzcPR5CTvM",
  "key45": "4a8hU3D3qr4JnWEckbqV2eBxK8q9PLsj87fFTN3pAibbV5CpomaBFTy5NQGGEjAdTL9z94yy2SQAt5BnjqzUnLi7",
  "key46": "669ob4GyzKadY48pKzcyZgFcvfAhBzEWbcnvr7EqyfeGP72Cs3BWfCdtaWZ9JLgMrL2XwvPMCw9Z7XH3yJ7iFs67"
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
