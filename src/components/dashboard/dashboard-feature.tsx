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
    "9ScLUERnkAzB5e66CBsCbyjeAUZDd9fPyx4mEb79asBTG16Ztsn4GW5pTzKy5SUJrLExBBvEAm9VWnAeCvtj5UE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x8eRVmriEAQRufZGx7yZhkCaVf8d2He9vfHYPdVmDkKLNtr1YZnZarKg6Q5AJD868v1JcKiHn4RAkzLKvhkh9G8",
  "key1": "3MnQNrGm2En2ot4bkJh6291iXGCQ7d61XgKRq6YyUcvsw3wSEwhQsgykddQigdWwjM9CAuFjy9irQzZKeg9aQMUR",
  "key2": "3ym45tfmRu2RsRuybZ6qeCwN2fDyGrKTCu9F7bfwUM1W7v8ipvZbmb3AmHWDWsawPUe2TuKRVX3shH7q2GuLciU8",
  "key3": "3zZ2tgAyhwoYUh8rfwyLDtYGv8a4qs65jPaVq8zjDFNmyqusTA7YBCGLezs9EiqitkqhckKvao9JKhTkA341rCKJ",
  "key4": "7dKuxp64mSUzzVNjcXz64DmW8B26ZPm2sWChJdXaYK3upYRz1xkNTBzW9cFZ8Lgq7RFH8iZFuTfxwt3ftMcUC9D",
  "key5": "4NGmbbc1Kuf4727n3yaw2nzd2AamQRhXryPziZGvvXQcfmWxBzwkwZVmWnVmSnhZ1wUDfJZTyZqZmqj1FoAjZMgF",
  "key6": "5Y6z6UioFEzdkPiasHVsguFhLV6J5SP6tfZYzrDSANeioaaCAT9oyFWU7d8LnzxcgcPptydHrEYRTzKeUecoReNc",
  "key7": "5WfvxUEEDTJXxYNseVMbyRTPozrC3ZF4wCNfsQESM6wnGB3gT59x39gwqxiKGdxsGuqg5ZTH1az7R5m9p6yDLjrw",
  "key8": "zTXpZHhoJ8iRka95mfp2N9SnDuks5PJgm2hr5wEVauBhAU4qVrMNsM57CrRZmHmSXUCmAHEKYoiptJLyRWxTrZV",
  "key9": "61XscQhqni7MV7TLALAe6GEmaTKGUftyMBeUXZKUnkBGNmXgf61DKZ4NZexjLZWaZzhmsgvKvMArxFH3nXiFv3Xx",
  "key10": "5RUPf3YJ5FkNGYCGktR4mVDVpgZZsW6ASxCHr9LNzTZPVNjL5q4y4U9fBxSsKy8NYEnbpnb7MF88UcvhN9iQNs3e",
  "key11": "2Yoku5JvMAoThgkLexCq3ayic94bFqYe7JBYffiGGvYTcxPqQZdPJVtkLesDC5FgdhiPpcDp1k924dTjqAC3HK99",
  "key12": "2aKK24TyhtHXKRADQKVLux82275mhGrF7Gq6gLBHRqz6NGLT73p1e7MZ2BFLNRfLKU2XhdwzwLuuqsxcynETZjwW",
  "key13": "4sPi5Dsdb2hWgzsyiC5HPoxt4WCQBhfTjzajngXERNZcpv7cKmMngG2gKwSvLM4HvJj9kQnteuh3XrikiCeKfuQV",
  "key14": "3K8YZ4NNqecY2NVDV7Ni4NfX7AjLkdH6KDLKvK6R35aKg2xWriskq3MSsZ9pivTmMbhfD16hTcgEdtBLoLZtupd4",
  "key15": "2f8k35pHYXk8rU7ZMdaiEPU2fQeF2X82ojD7FT4xHKaZPaC32R5JKPpZ1gDwp9htTaiXpm9GXRQnazt1U1PnRpSH",
  "key16": "45NrU2YggvS8FkSH4mJXCvrzR8NZedWSPLJdHgKcBvaxHCmZn3Yt99bPnAqLuaHwzKULM5SaUiebVhYuJHqqDVyt",
  "key17": "3wJPFYVgBzp98p1HLuSUoGh8af4ymy3h9zhBqzUcdB4rifnFenfyUcMUrWyRqGr44jQW2LXSGEbxXGbn8FaUQ8jS",
  "key18": "t55r9KZNYmoNvT5tChGKd9xJwsnk7MK12or5f4FS3ijZdM7tr5UTBXv3ygmcWHyUoAsAMWXMEuKGznCYG9sjC8Z",
  "key19": "my1k8nsp3fkQiTXfEBdmbvwtftYxVoF6PwXmoy1rRm74N9RF2RrqCYxXQwHn8Z5qnGsWdjn8ahTXQhvCd6BSSK2",
  "key20": "3pbcdgcBGGNS67Xw2VGq5Z8JR3Megt4trXVysL4sicAy2btSfkv9XT7aYTjZgYEtySWwM1cvfufqdYhp4z2D7Lhq",
  "key21": "GtBDGgukwSpYfrGNYns8Xsac57tu5LgDjunBbkg4Z5psgoG6TjHWiQTbDCwWE6qxjtYrFEMR2pLukr6TmhinNXX",
  "key22": "4EkV1fQbwi8ZjgANKDs36zu4SJivNAuJfN6stproj45EZ81DqESSPy6d1zoa9iSFuLRgcmFazW9J6zHnTvmbJadY",
  "key23": "xGCy7uxKtYn1xbqSes1UF225QL6zb4o7gnDv6htiS34RRMZWRsKhnntQBfE9hyAreFVauD42WhEvzPc9SaMyGXf",
  "key24": "5UovjCKbZkKMYq5m5dpR3L6Mn8vBUzLMCLbqUZFW6nKXZhWpDPZMWQF4cKJNBYyrdwPTMcBdL1rmw2CmhPUR44wK",
  "key25": "yswGzmbRhBDKMGn7dFyk3bthe6HnABxGXSWLvtTBduguAsQD4eDsA6G1NkadRAx5gTgXZU3c2hCQGVhmmeAojgb",
  "key26": "4nk4s9AYtSeyY44QMMbMn3XtBZG89gCC38NxFnBJujiqpbRXgtYjezz9bzTXmtMLTzD9Xu6e4Vvn2VATTTfsaqTW",
  "key27": "5rQrn9PAuYAFNNU4hAhsSikkJvhr3DHAPPHf8ivQqgd8EhWAyJFWEoKQPW1qwYL68oaEqCXnXYLNfu2kPRtDaFd7",
  "key28": "3m6WWK25Ud7Vt9MTfquezXnwWUReaN1qXJ6s9Cyzu7jwNXTqkMo31XNTVM71g3an78JNMnf2jKSFM1soe2sQ4qTi",
  "key29": "5CESPqWwyEcLHV4jsQhBLZnSgY54PDXxwb53TmaE1pLz9BNbtWXWAYDLpWpshoAtzqoKjjGRN5g6HBXjGuQiRM7S",
  "key30": "5y7uq9hbpprH4Az2XchK1Y1ih31GXPAerpwoPQV495EKpZ6vS1S4aTc6n1u7AJoMcrPfajBSrPzdvMbsGBYRXUMD",
  "key31": "5FqMTqckzuA4YyHT7PcpVe32AF93wnk5HFkYvuqskuNQpQrYmT6H1mGF1mMxm5eUxWE5PDFspitatR67ZsNeNfzv",
  "key32": "49v6D9rpVnFFbZmTES6yFF9fTi9oDTMyUkAFjzSWZjWkJ1j4wcoCNxWkkPMHsAYdbKxgaXmwJsePGPzACfvj8Dim",
  "key33": "2gati7iphoKUyWf3TA8uV1Q3WXAHk49kFHA4qaJ37Bw5EpVPrky2STXkgUAhwN27LEUHyigVxoLgCsnRV7A8Q14V",
  "key34": "2toJVDCneRxo8Z39Fw4skoeVLztzuc5GFYSr7A85Sn5yDJNXxcWQMrqLFchjCbSpiVV9rRgZRHd2e4dQQrEF6142",
  "key35": "3k1yMirY7K12cfhcWKpPoyQhL6w57kxww7ShebfGF7xNXX2XpthGKkQzCn2srdrgTePV8gWz7qJ55NFtr5ukRyvg",
  "key36": "65jsaeEe6eUKHgNFoaKMU8Lkg7q7A5X62E7NkWtDQTJVtYC59QuicALUSibWsSQ2CC6UqsGKJVcDymaSAu82Kwdz",
  "key37": "58dZ35eLqfZVetkjugttJdd8dE6Suect7ha8DYWdYMEV59WqdjoEJaF4sRqHx1pKUMDAMB9pGM3uari2fXDprrEn",
  "key38": "4mMfWNEG5C2pUPMcKpHt5PdVB1VLSUutx624YdUrssoz7X5gVE4z1SfQzZFwiSJqMATu44nsRNotwqACSHhYNoKs",
  "key39": "2x2u4mK3fmiFhuMsxcU5k6KDnwoBT1iYku4Lm9Db4mNhBehoSvRoGRaSxfFvE8n6gvzPVJp3gbQMc8SHUZS6UZPA",
  "key40": "2WGBtdbouZLDHYeKZTsyprH2o4KcweuHkKJU5SzXTfJtsa1Kim66pZxuTzAriPCD5V3J2sV8bzo4tAuWsqcXjqTZ",
  "key41": "2sp7DgRL3X4ocUNpxb6eKGbLob1H8RDckrGY4bECiC9UkeSzqF9P8aMP9XwAiReXKWkPbsMkeVRoFMjoWGgyHMSU",
  "key42": "2SxjGL9umQWxnZ8TJGn3GYhru41dJWSS4yH19bm9t7FG3dvh8XHuyTXUQKC3C74Fi4ZrY8JuzckmRhU5XAeBkBeF",
  "key43": "55bVrRABmS2LPwQXuwCtfceWB3MT3TGSD2Rx55hqqkKQjybr6NFNYNujo48UFvrjajD1WT5wZCXWJRuMRAiX9a3B",
  "key44": "3xukmtw8YSfGJDM6oydvVV9khf9598D672DzMZGEbo24CF3kAXnYUh128UMuqv4UgkfZtQPZqtqsmMeUWy36ps1K",
  "key45": "3cNoaKdSsFsxEWR9GCtrrCELMSGJ7LMwpHobZE4MM9QMrswb5t82NcZyewttcFdniUrTuEeLQ2fovk6yC6AcxSuB",
  "key46": "3HmXuTH2nHNWDbURjCcVeiSX9xjKith45zYUCpHf36xwcQLjwLnKkZtEv8SsMEfYdKkyNxwWfzerVdkme3KafnLx",
  "key47": "bc2D3RvkvjeQLbnbhCwQVTxfo3h66AHjrRbNPw9chNtTh1boVa6XyM7wMNxoXJbc2wTbYMCqZ72hhKYiUoiHbxD",
  "key48": "5WPZF6ZdoJDzkBWY935pmgiY4mzgw4yVFJ9F6mTWv93YNx2eqQHG2ZYsVEvKtkb5ExeqwhiyzcCWEB11orspEw6B"
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
