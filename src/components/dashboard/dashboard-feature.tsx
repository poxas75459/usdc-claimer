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
    "4skbTZArhgByiqxgmY3E5imFTc3HD3irdiZhjvWgkrHzr4NKMm2NjEiseBudQuCNdbAC6qjgjrCBznytBt49J42u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LXLR7ZvvQfyF2Jm5UKnb4c7PdBskvNHyRgaSxRbe9vMiKGbA747cvy4Vb9Dr7gPK7iSQVeUkQoMjxPapSvuyDNp",
  "key1": "4ZMVH1G7My2ckHM3tw3BYpwRw3PbnBA89GHJEZMZYjMLL22eAwhf5hh7fKxGktu2GtPArFmYN619kyMduwyCHKLy",
  "key2": "4Q78BAGqAkT6rWsHonS4Su6QDskfNox4fQihGuJoLrarPBTpPPysB651f1MuWy2zEKeEbYCJbD4XZZPuzH2Z5oCB",
  "key3": "3XtYuzy3ff19h69nyVFwTD12Jsi6tsaAu6VpgbnBSk8BhRU1Kri8SZb9QPENt6cTLSVsFFHZUjYh8ZyAd2wEA8JN",
  "key4": "3XYnC6Wr59yNuNqM4ATgQRbc9bLJJnceDRvXVzKphJpCdwTZ4UPdNDySn1AdCUE6MtFXKSeW9BRXpbVD6cFJ89vB",
  "key5": "5qCYv74dw9AfKXCf67Hadbt9jSH7U9hr4Df2G52HuN7qwte2AA3Mhk3anYKbLSgveDijeUucTHnbiqtMRKxJkbP6",
  "key6": "331tCYFfWdKdEJJCfkNUhbfkbuYTzPoH67oxXnQ9YsmZbPcZp6tridszirmyk8U5kUtHd53p3b2nPLk8LB58gyfp",
  "key7": "x1ayiEdjhaXXpaNHBjTrKEPrhhgpmKM2z2diDWBWabZUBdM8SyNQsM4uD6CYSQoUxsHLdS7oFV3VubpZvQnnZ85",
  "key8": "5r8zPtLC1XxX3BGzLt8gdbccEf6Pmd7JUHNgVChdvtLkonqe7jvzffkRkStmhz6CZGSbTN7vuMtS4KoKvNQPi7zG",
  "key9": "TkoKaoPFmLYuY4DzzPt3FmViDewtrJtGR1U6Xaie6x5EPyLgjVGrPH8KmCBduzsPJ3eCyF1pSc3qQ7AJdVRTncw",
  "key10": "2b6gQXjgWs3oGDZTy4y3qk9rZy3hGUAtUP9roDPMqjPoUBnGdx4xv1SVxAmfsQW8ckqdP21ubFA5jqB5UyS5G1EC",
  "key11": "4DXkAGGCx2NXYARMXQAUz3mTszbc88bYQGQFgMCB4u19sLP8XecMGXD2iS7TFwN6MpuS4EE4tJK3Y9LAveTDQPFf",
  "key12": "3gsaLto84dgEmTxS9YQwfuaMkKS9zyNT16ukRKiBFhZVKKarBVS3R4Q9vVRRdf6qdgQ1XcPysRXyADntJeGBY8vh",
  "key13": "2Mgoo6kXBPPgHjrqgBBCYKK2ADqERPABi8183PjxFqXgtiD6NJQFsv7kpbR3ZCHZtHmhwuk8U3YAQd5k547Bt1vp",
  "key14": "2H3PcgrWW23zhNjhZd82U4sgm5Rj3kujJgLowbcJdnqhMGW9BDyPvfvNmPCLtHEQ36R5dEkcGKNrskzsjY6csTdT",
  "key15": "2xFB4Kec1Z7nJb73tqLhnNhsThVvi1G7ADL2v8K1XhKqQ4vikr4kAMuCkUsXQFcBfRy48zy5egL7Pr68nphB8PNQ",
  "key16": "2d9FHmnMGiiYdgdeia5PUu8yP9VepheVg1SnRqE5AHRNM836FhyWyzqXfyHhBTQRA8qkhBg1REaocEaECfHF2PLv",
  "key17": "XC9qq8X9mbcFbVHcA2MoLkt7sjMHRid4QfQ61se3b56aSkALk6iF3JBX1AMzEYwUAhzBgSHg1eGiyxtGcUxUCFf",
  "key18": "D4nY9GnAYGUc8XxkLrmS5JhqNwP8Qc6L7FZxHA6QrQpubrXiLF7Xc4xgEwKcLk3vyyuiwRQF64DqBsdA8xmWNwG",
  "key19": "yyobLesTCFGkMJjude1gDbtfEFUUbQkA9m76oyh1nbEJv9Z318668of9dfqpNsqPKiY3ZZhmnQY6CpT1CtTEg1k",
  "key20": "2z1NBEXEXkSVWm281FEb9pm4L4Q3B9ev3evTHeMLrpsYEknMWq3uUJ8Qii1AduRTr291yQHtCNWkvXapuQDDtQ74",
  "key21": "4J6zMMsTtMdKfRye7aaoD4QKCYXMWjXi265sWTC3MKyCApkVdmmxrWonSXpKhXu7pCSwHBGxFZJ51fiokiPsU1R4",
  "key22": "3ApYpZETkVbmPtPXJmi4KgCt7okchHZAeLcvNLkCYo5Zin6fyXLi3RCMNbFkPMQJLVgGiu4KiFmV9EikqKH2cFwa",
  "key23": "5adCPA7QLG31uKY1c6bXMV5yuVahrx1cNikf8Epqq7ouq7SzKVhtSJYL6JmAn9MAoR2tUejTowgEtgzdMA9qw74S",
  "key24": "5UFfWcnvF2m8BUE9fcD1FU4z21X6XaHy6wtPvJVDHkbY732K697putgshxnT62o4ePJ2pXGHU52k527H7WjQM2N3",
  "key25": "GsDd3ErAurXgjQ5rxY447U86cPJKLm3ZKpgzJou29PtTAjsdYkUsk2G9CB8tYXFshX3eaK2dXgxJAXXcDRDH9ZE",
  "key26": "dcg1eQzULzisdE71xbfnWa4Ydf8oY8a9N8PyHuHqmzUS1hsReB22WMgZVJb8tBPUFDb4KkDaRfjdsd6d3ygtLQm",
  "key27": "25ztPLCqFH4RXk3Zne6JoL3sUKfwUHzSk3QZqdXCVZjBcm7gpiLMWYx15Ta1a993tv3ps72EoekVwjhYrWq2brvW",
  "key28": "4vv6GNnLUu7d4C53Lvr2HQv54MjZpJhYBe6C8cb71B7nfhEiiV4UeBgh9o8CJUFAJaf2RqKwcMzUHvvGawRt38o7",
  "key29": "626YjdmHvhoKAapGcJZNHWV77TzxrZWeGzLaWdQaZ4Rr6krjiSCLg9DtpjpoZUcvKyZHfR5Ns2oSJcvw7D9eZKXe",
  "key30": "2r8YGjmUQsAMFDySy952nkWTjzyKQopTMdVowK573GdwNoZK72dvL81havoe1ageGRNfmqe2AEQHkyj4TZ5N6hro",
  "key31": "63ZXZ4VAQR5SDzXgx6scCMsxuRQb2YJZ3MWP3VwNhdVSGeVvv9TNgP936QAYtwzHj76oDZZttG5gMjdhs2imxqvT",
  "key32": "5z7J1dc5oVggfKLTfpjZ8V1cj9mVZtAefCMU2fNE3Y14Gxx8YRQ6oVdh1hotTpgxzxoUuZgpwPTvxxEaCD9SdRsx",
  "key33": "4RPe4shegJVP4YKghy4DaaEWtNBpPsEdkpJ3TtyRMwaa3GjkpRQCuPKE9fsfmeEvXhEvsrAC24KZJuZJ24t5RHoX",
  "key34": "4goDD1tqeMZDx9sqJhYYaX69fj5uftoiBKZQy46GotwrDEFUJjTLG2tFhJvP7auhMQyPVypN8yQhZBETJHVz12sv",
  "key35": "5aUauFS17tY6PsonHnKFo96CeWyUXaBokeraeNtBXuvsPrpvj7RsiVs1GATD5GqcaQSXeAHXaH6fC3hZY4qC74qL",
  "key36": "97qMEYQ9rRcsd9b6xt2fhhdR7rmRpEtcWYopqGTxWGpV1jntbz6eXWG86NM8TQzn9e7VQqXw1V2WXZ8PNGemiMz",
  "key37": "zr6ZVo5KzmfHu7kaVo3GwpCqHorMuNCd7j4oxRNrH67M36NYjAEqj8r3Tvn6AdNW1p3qBspf4iRSHxLWhJGfXz8",
  "key38": "3zuKkUCgFzYv7vemN8YTFeSbj1RojUhNsvmcGjksd9jswzETHFLXrjwdP2dPN8XkK3nVnfgq1w8VZursQ2x64k5G",
  "key39": "5MryuaBGNwLoXdUe2cx4vq1cWvgryFmpnGwWcmF4NTGeymJ9jDpVe4QydAMfnu8dSU4drHKPfYsm8ppWmjtjLtQK",
  "key40": "4uCDqbf1gGhb6Rd7NvuNG1uc887DmHNfMpLGV1RbHzsszt4LBWhLddwj6gaVdbvMvvPweXQHmtCekivk6QHxRXVF",
  "key41": "3gBtSur5rV6GFWp4kd5FJyX788n3SvApmpaXKXERfeWjvsamSg6RDmXFbMqSFWR6icixbScFRi35pCQ6Lcqo1DSP",
  "key42": "4LGrmdon5mHBenWVRNMuJeeGF44BazqB4NRWduXrRFNheb2fcx3AT75jDaNWPgW6AVvBzRix2X7X2gh2KujFwbjN"
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
