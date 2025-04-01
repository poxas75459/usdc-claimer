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
    "c4gpPbXa1SQdfZEigBRoPFJjzdTx9piVVCgo7vCxiGaXzr6QT1nrUHBdxnNVJQweqe8ipunNTPGzskaVCfe12T7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dLoVWoFDSgHQNChvKsp6LCxSpnkAo5HJaGhfxRwTNJ1nVLP1G4sNeBysHDVuLjdWhbvQ79Qoe1DLoNaZoibEYPP",
  "key1": "5PCVMueFd6cpXEEaNtpumCNZLzsZpkEMNsqbgnrJHJoWh8u4Pt32m49kRf92nk5XfKrw3kDcAykaLRj4bLPtrEBF",
  "key2": "2gQh7w9pk3Jcpj9oyGit1B9XsLadYRYQjTaiDhXhbZ84A9gkuE4rcX9aNxobFdjwzdiDYPyHufwF5Ly5bA9VJ9RG",
  "key3": "BJvLBudXaHEjqSdo7Bk3f9E4QGSaC3fZZwWJy6nQVwVdbsTtFiT1qxYxbvwhBY6546swYovH8LJ6CMSQTi4i2cR",
  "key4": "2haR8c9KWknasd4CH9Cagucx4WfAEUB2T58jAauvPApftRiK3KBSyNEzZjieinNvTEgVceBk9pquX1UhsZd1HpYY",
  "key5": "5UvHKFMZGF6bpj8i4umrjiHss323pvph2YePxhELiPPa2FWEV2Wa1u1GXVP2oUj4pXWsqc72zmSkYjHMajqHWAYs",
  "key6": "2eEqHQbgsbrPiNaL8MePQJTPvcGKBh3KJJpqxf4acDocU53GaVHPKuwusZ7rEfNH7C5qoy7qPNjgXz148vDerD4K",
  "key7": "4KfihwmFS9CfqoohMT3hR8HayEGfCMVZj1vDGmAUCQmt83PncNeRcyzAnv9iXvGUmivqyJaVZdvYYNu75En4GtYx",
  "key8": "5Vqx8ybByn8xQWMWkypSCvDZrjyRRsu3VbHhorxUyjg2ewwzq45WnXMXn24Ng9SEEKa8z1XRnTfJHh4S7ARvVFYf",
  "key9": "5tdH8x3jBe2EJzrAjd5PtkEsyzEcZtYtxpG1sgf2xjQxyd3cfvh4ycszwzVivVrYYrrrKpYP9EBNmnuYJT9Ge9pJ",
  "key10": "1Xr3jstLdRUaLN7Jn2mKUzd2BgjyJdJgchWgvF3zDdccm2Pv5Si6X6SKy1cqPJmwEwbJhoL6GajhvgK8cjyirm2",
  "key11": "rouiyPrryPVecvwLAJDeqhoc4J53viS1DCiZm2yXmi4j6QBtDTvYtYC78yVoaqGuLxmc88G5tPQUSPpRjiEyEbQ",
  "key12": "3b8dPaNt8vjRPz6A4VPDwjzRBxVzM9aixTeojqwbbRWsMW18kPzEvvFT3LSWmMQnQKQQrjCRtLLY66spj1eM3hvk",
  "key13": "2PKvvmwVjoGBFQoqVWRcmazv7BDdbZPL8jADocNE8yZ7cJaNdb3wJSJehBDNH5Kw7eYf1K2uVVmABTJesmZ6hHZr",
  "key14": "4XkLm1BNwBadFXjLdRAuVuPjzu4TmLDzxo27z5RPfGkCWr8eYythdoz2FhUqnGbfQi8MNF4dr3Ty7jJbQCiv7Ubg",
  "key15": "38NwHehiHKmjjtQ4kJ1nfMxtjFwdatzDxAa3QZjoKR3QWWody3Pu8nANdR6pRn14pgyusvPJBRaQ37NTGLZ7y45q",
  "key16": "2rRUis6SC2LVA2w79PBjaD2Z2sVdPNox4upYm4NRpaPz5aGVhkgzvyzJERsnZXAi3keaETch8xhgLzFWcJGaDj8m",
  "key17": "4p8hG5BWbguhcjnMJ3TFPAkm9eh9BrdMLyX6XtCt1G9qu8Zdw4KNTBcGT56qfpeGZLRKbzBc2ww9EB6zDCmniDeg",
  "key18": "5hikCQiPj1A54DUgxwtd4pYbzo7VYh5q14A8qaF1pUxqJRbo4a5ggaHn7up67hVYzVpDYF1AYUczrsqgJJA9sD4d",
  "key19": "5xLbjSRscKM666Xj8v8AeqwKUvULkKmZcm6qUQMwg7jqftDgeTCjMWGEyBM4ahHRoTiuQo8hUmPmt5znRvXTzRPQ",
  "key20": "J6xtNtrcdeRZUuk9bznjTUE61xfuZxhZpnF4MxUaAbx46uu5fUyYBahzDLSh54A3ekdvRmFwL3Ln8Hi1TGMeqEs",
  "key21": "C5U2z4dTXxSTupzrdKrogGd8Pwu6ekHuNmBQuSJN9y23CgUxsBJk3canPSngcpaemYE4sWEoqrLoyMMdVdwPr1f",
  "key22": "65Tim22iX1iGvuFAFFSXytXaVJXubm15CD3nbuaLcj3suFAPvzXDPKT6PLPD4KCbzd3UK7EPfS2XjqZ6bcyVhZeN",
  "key23": "4E5U8hxPfsdR4qKjdLu1mH1VrYCibRctht1B4VrFZNPhsviBwViaLaoNctr1Yx4CZoBbJ11EEM43XZzMvpkU1AbW",
  "key24": "3hRqAwn33b4FkEHJd9Uw4aBcCxz1cD5UpEBtL3fVSggNRxFggvY1PrVR6UPgMWSXdKJEh8eicNQm96jAiuyQgDW6",
  "key25": "5CDZ2cFBTkouS4dYaFpfihoFnnjmGHoHxjkEMbVfktgNxDeU2g6LSsSo3LKFEEuaESMJM6D3WkD2GT1oimNngjYb",
  "key26": "5arMkDwxk8xqoHaCVHgpHYvzUMTXmuqbmnbSVbKQS3iSq3X1pHbX4EsRaaC7x7tuajbw7Jpn1r6nvBNu8RFDnij7",
  "key27": "2v354r6pqN9PtTtM21oYgXB6XJ8hoxCBTmZ9xgFoMMyeE11rXtjVxTrWizRkU5wEhCBSCD8SnAZzQ4JZ9E335dSo",
  "key28": "3oQF9hd6WPNgrSv6XYth1CJZ7WkL6cuJG3yszt6e1gF7VVsMDd5iP1SzRmbdVoZSM177RF8go8f1zVbdWtdFYHBS",
  "key29": "5JHJVUqHUqQa8rbaB95WEASdwNHfzaGnTfY48uGpd3FKhp8iWgPkwkTsiGc27FMr92SFiU1QGN4N8mYY6x7H1KSr",
  "key30": "HUovhX8ZR7hem1fwWGMdApHEapuEJJz5ukT7jewVS6E1K2oPmUm8JhRtfoDYEQztjGaxkmbHiqsgZwLaw1N5gZw",
  "key31": "4aHjiYj6diMPQ3UTusXbTPFMyxR5EqiyyTmX4fM6dHZRAMdjCUwJppQjDNtAAcFhvuqBT71qGaWvGVSdtGSVabEV",
  "key32": "2Y3q6t33A6L1ZazDu5KMi2uAY4nEcZhKw44zMNGktbJUHgUnYzjcFVj9e59io1Y13BT2NJnq1Sszn6icBuvRpQNZ",
  "key33": "2vbMW4P8mi4hV7hb6dVEtNQRiaUPUssajH7PzU48kDfRTSZFpPqxeuJg3pB6wSYggHW5uW915hdxmbVjs3ELZssB",
  "key34": "2fjFA7ESiNkezg7xEZ6vChm16iPXTck1kJnzzT3ugB3b3vZcnCSe3uTCwhAhoQxaYFX12f9F3DMBfqXA31WeZEQ4",
  "key35": "iUcVBkyPTRDhLgFEpsHtAH79E8pVAXqsT3tAoTMC32Ye6xuxvheYDQwwRZhjc2JhG93RpjnPVCdTRstr5uSSp5Q",
  "key36": "5vEv9w7YYNjat8eex18TPBvmg4gYVJZ3Zhq1UCQDTq7SUhX13BPovrGUdvgRjJtPQMid9pX3763kGiDnE9vrTg83",
  "key37": "oAnjBdzfmaQ2jiYwFVDdTAn6FKF8GruYowxTgvbKF9VQktrdjNfgmtEBuadnm6dxGPFm3cBzPtyU9Z4v1UUQUqp",
  "key38": "4tDHAsg6bKwg6EynzqQBSqVVCPYv4RicAC35Ld3a2UABrZVHQm9jb3r3Tj2Xf4xeZNkrhZvVX3PzH41oFRD3Kw53",
  "key39": "5xHdAXiCvn2gB4yoG8fNHgsJhWDJ45cNetTyUcyuDDs4EGJdqu19mLVhaWGUcUp457npbp3hUR6pVZ1mrDNpy5hg",
  "key40": "3yrzpV2Son93cuJLTwxkRscCLviJbBe2RBW8Ze5aZCciDcBLxuSvBM3YsEjrPAJkTMq7V8Nzo7ivB9CvXEyn52Sr",
  "key41": "2hozU4q48NVVTBg1a87yAodVNpDPj6eSrWaAkmVqkoZ4CXdqNQahBeeweGry19pAY6QjDBSgZC6eDmZUkp6fd27G",
  "key42": "4W8Tm2iEMG7rZJwKWdVty6oPiV1WMfF1y4DePrEWdXREx9SyFbE8EGDyp3J7Sd9mcihJXDg45QYUrnKrkMajYKqo",
  "key43": "HV1WEPZn3M2SzuktPjnuDPcdZSfp7FGf6PNQJ2Y4ZMTE31vuRVugoP9zERzNHwLcswoczczfTuiTFXqDW4hyYKX",
  "key44": "5uukhKPGCaeCWm8yuo9Yuq5ZTzB2HKGG7U9WUsLUaSeuFVxuic8jPio3WGBXn5YF9ZFgwEVdhoNJDq5ydGSbsyss",
  "key45": "4TTLTi7PYb9FACrHMryfZpYMDp5rzwLgVivUcbvUyMcNCKDZ8ceCCN8HTJhGxNu7FBRDyYFRi9zrTDTeKf2hTJJG",
  "key46": "67XPECT6p7WFkLG9Yj91ZjTmk9g2a9N9XCphwJhmBnwKBeWFgA9Tgy7KQ6GnHDWJdiaMDboFbAmir3GwGVBUFfAW",
  "key47": "475iXJEwz7gnSS7jghYjHnUekzA4Apg8YDeveQWsizNDThANyocmFFgnbo9Epxd8pnwJAEM8xo9RoxwYP85BPSTa",
  "key48": "4pBx5HKwv7NPHjeSfSMPEDMW35nu6k2NjGLNzHDHSu7ktKkDivoJbyhXVsunHEiemcByqM68KxHKtyWXBfDdpXVH",
  "key49": "5Mt8efZJaXTL8m98WmtTEkeTxioQ4G4dcj8FAM1ZvaS8YsdJmeUjXjGh3TpEkbyt1rd1gwaiwEZd83KvhG7tnRB2"
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
