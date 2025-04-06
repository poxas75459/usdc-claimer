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
    "eLJJhRsZkSwvjZHcWYSMmR8thCGuoTdZgnnMwChgV8vELSAgbjQr89ssaJJ3ZV2aRruUvJnSqzKUb44KhpYViuR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZFFBwTjehcY4NiHpjVuLJ17xePNtUBhQ7dam3FRgqdG7CpP4KZstkgxTzWktBGXevnvnk36xK9E9iENh92ffT3m",
  "key1": "63emJEGq4prwoki5LwnunW7Zbg1krrfJUg6BdtVSdFaFZcGgGo4GN9jw9sbbBtfCfczTsHJAe48teQAVSoVG1YZk",
  "key2": "tFNKRJobGWP4ACgy1PvBRHohq82csBHfV3JyFEo8xhnz2iP8d5Jykye9VvWH3RqYETtZTqHp4XvAi5aP7HeWz9m",
  "key3": "3ahCFYAWEapyrrHA6dCz6SsCXaR5UHzcrcArh8KscAnFpTpgTcaS9bRufzY58MM6NXx4kd7MKVSMu7PAfmuxuXac",
  "key4": "3ANnjcprB1pj5uUKnTvuCvgN9yUerHtqt3XpQ72Mdu2f9J69VJYPPdSPnUCoBxfRUBzbSRUs4Li6fogGEfCJHcop",
  "key5": "Dc3Yugx3B5n9bJ3MdZqEmei6sLxZHDRCEes21qhgvVPWCrLpx8b2U5iKUvc794Fg1HTJsEwhvSWn3WgLKk8Pzye",
  "key6": "33EfBECzK3dNuQjtWmGQjHSq2mkCygSJKxSiTJ92xsm2PEKbRECh5pgSDUdgmiduRNpmhnfX7T6RRNpUVL4WJhtn",
  "key7": "zHUKW7JXPUvCBi9edvfgQJT25KQW7wnwzQZZh3GF98McsdD712BLEWAK3kMnuJHrrQ8YuQJVxhxzGpKXFa2zZoy",
  "key8": "5qWHESo4fEb5r6CdLdKA8TCUDVrNZc2M9q988MWS2gjRq7wgQJSEqgn7tfcxvSKvSCFrBf14dAMg7h1mvNrm3MK8",
  "key9": "2wbZ13viXNXA48UPzcet6ZgBjtopsXwkTzHm4aGvqn2EnsGkMPJCbkZyNLp55u7papqjwgRzfXt4HCVZAdfef5RS",
  "key10": "3EXkAvPD3foTYijPkmrWpDwTdU2v7FbRmJfVh5evjMGUXDQNBTxBXEA1MEQ9qiuqJ8FhrfvVfmRWyJsjThWQzqMB",
  "key11": "FoLnuybXM9eWJa8X7FuZknbWPDTAkihc3XDtUWPj5DUoJ26hT7rzBiD26sse7d3QJNFf1kHuNXHvjNnzi6catqX",
  "key12": "4fjhpPzhawC5iM7RuPWwbXCnCVXdM8PMjkbJFZh1v4JrbjFRqZPqPX69Aqsb26oNAWk51n3wuFQ25GdJ4b29XuyA",
  "key13": "2DSMuZAkXYdmfPvxGpDTVL4tMqZrQbk3r3ES5fWWGJ82Ju1uLhRW5rsV3dN2Cbrmy4aZV1U3SDHJUdWLTBgTornW",
  "key14": "UjUMiEWrDVni9VR2bMQpKKNoediWeweDCChyCyv65EJFh7AF6T8AF4vXXceasCuyGzKBRX4SnstUtHPSGccAAuq",
  "key15": "21sksFumH5T6dCWKPXsx9oDxqfXFabncW7EZtbpEHbFDtSGPfT4qUbcRMKN4fy3DsNprHnMAKR8G817mXE4fPc9A",
  "key16": "2ZVJhEYiq1M5HkRWLHyCf64Cpjpb3kGjJ6hdDp8ayvt7fbxg39pLoChBMPAG2KokLk7irgcw5YCRs8cqZshpbkPA",
  "key17": "3CzWvFkHK7hTew7YiZafNmXBMtTjurivGExXe3Ld3BVX2g1AqLcojRpdT2PPqZwF1o4jzN7oKiBjUL43TEegwJLc",
  "key18": "4hzhKYNaKsg78aojrjhEsxjTa1s5AG8UyCFLkJpdLVnJGAVHC77i1PPQRQLNcMqnZ6Ue7BmGDiYC1XWwFJtUrw8n",
  "key19": "4d3mrsupLDtQhAzVa7h3GnTbjWm7UHbJTdYxfoncfncXmEbTJjHmPo9NdFMbt1kFuhGcpmRLDzHaeVrNEx8mri5n",
  "key20": "2DfxpB44haZ8pSmbDd4NPJEgWaKtZBidghsU2TVKEUsrKJ5ZunEWtSkqdTLdDEsDCor4YZJgkRnacKiRrztPu9G7",
  "key21": "5YjbMyVJAm4d1Jk3qBxiJxjKfnhxGjnf5u9CxHcSxtmsrnGTW1bwccdzbaRGUceNKduRprVAoko95aUM6awNeVHF",
  "key22": "sEjrm7AwsggoeywSg2TtikoyyE7pQWoJREebArZDYWeCHP5AM3W91RetddihqS2qdrW9z3xRhNMXmi83n7QuQ6G",
  "key23": "3oGUhHoWW9CZrHbWfL6JiAaNqgkDtEdwbN2NGmWon7U1MZRAP6i7GWVtMjHLxCvcGYsZHQetpri6bioW4wjigx9S",
  "key24": "4pCygkFw8fvijPQRhP3LGog5o5Xkm9Aa9STrXR1TfSZAcAjnwuRRv6R1f8pPa7wQKqyCbVvfr1fDGvEpxLtJ6dQA",
  "key25": "54hq6DEAp5KUtxo8Sgv98uY4dB9Mvc3uRb6GuEUTiYYMzfd9DzDDX2aB54sFibXRrMh9MQoXqp7gyUzdXAqoGTiv",
  "key26": "C7MCwYHd1SxhQjLDT46hsWbkzFbMDjKCQiW8w6mvb2d9cG2bgQ7kdjnVhTgtfj4abMPZUeB4SSZcFjB7P3XSqJm",
  "key27": "kEPLM2rGRHP8Adi2UHtFdaV9daDq6gH47mW7aToTBe5qHnoRJmAYHD6wHixAfmMvBFStgqofZrjBWrfsfBaqPBK",
  "key28": "5MCFvHnHWmv3oJQK4RscapfsrfR59VCVjUDBtTu7CjvhutGUP8gaeZmMsGDtPsdbNhqAfBg9otdEJG4vVMqooeP2",
  "key29": "64Sih3t7czJ2u9TY9eqmHJak6PgWBTr4cm3YX5nuKnYBoAw2uaN28u57JMyAQyGGZeQVycB9PqF7JVmVyG9jBwAJ",
  "key30": "5nYrZWZPe7DTsnwVmQpMe5Tz67qRQeaBcnwJknTRtEHw5fJjq8XTe1MdiCuojLNqYLm7K87JD4qxm9DeaQA3Ny1W",
  "key31": "SjPtjvmffjNGD7Wfe64swP6QwVkgJccHAirBRQAdXsm2FkoKneLb85tP2uJ1rDxn55f1SDuzptGJgESRZMmqdgL",
  "key32": "2KWGckdD3fokgHTa6tMdjoRSRKTJqmXhwL9h4J1oNQAUW5QMs8rdcVobPY5P5dX9zt1WHT82TTE8fnj6QVivMDzH",
  "key33": "3QgTbQb8b2p4xXfXb3AGemyMfEBBM1fcuWP6o88yzLNN4igkULh4pw3eoVSrh9jFTS6LhXagm8csjMjPNB3vQfk9",
  "key34": "Ayo2K9KhHsoGnHb6KoAyq4csQeSqH5YBF4mA2e4VgprivzxA6FFqRDE8zoERDwNnVJAT6U8BkDKgwFvC4GdbpAm",
  "key35": "5W1w1ddzyrbsSm9fehrNFi4VrE53CgZ27s8YEQksEUCJ8tHicWR2WfBuHh6sdUmywnmD38NSXYjQ8ACoBHM5Qcw",
  "key36": "3uyNgUBYT3Q8uz6yduSRARbCfLC1bTJkJuUjphYKpQrLSVy1Z4VXEFffpMi8pwRfj7pNnWN1nnQVcAd25EoztA7W",
  "key37": "4NMZB5s8UTdVjzqWwhW3sQ5oWZ6HJXg15sSj4Rps62Re7xLsYmZ58yVm2vNNeuzaCX2282rsyazXJoJaCPDmgtd2",
  "key38": "3CHMk7gJfEMfxjqcz386qUZrinDPpcButmLf24s4WaPBmUAqBqX9U6EdW1MwWapnYNtVEU9veQxtEVyMwy8FkTwV"
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
