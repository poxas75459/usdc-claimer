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
    "2qQLtcPaAnAE9V35WzCKNk7exEP5a4J1P41GJpv2JTD2A8Q9BP41W3Q2xR1pg7h1x4f6PQSnaXZ4AyeeB5QNMSRF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "251giertzCMBFLF1R9qByxgU2MezEwhh66CwFevTvS7UjRBZA5HRqqVCXV19P1xpFARHVySUh5wX1YQc8J6Urkfu",
  "key1": "5kTYiSRjZCv1wYJgauUf8yogcLqB3JdgezoJ5LSprkPmmTYhJwwGG9SWe1DdZdJgRjSigH7Dwa6s26XxixJSaFDx",
  "key2": "UeVx1Yhg5NyZLvea4R579wJuEFM9vvFZRni5xrLNmdD8PQq1xF3N3AoUtBDnA25FGZDDptwhWNETZ3Ej1nhyUJc",
  "key3": "4aRxwKKgHpYyg2yYpe8KjajXiGyhebudJwAtZEACY5exxMHJvLJosUhR3i91d1SCJxoWkZGERhGqKVrbqjtmGWhz",
  "key4": "4JKWjJPDrtzhQJ4MqaaijzgXebF9ttLsH1F8pQsDBwnDP5gesKgapmg5wMs7gAJeZypt3VwyQDk2zjHLGPKoU9o9",
  "key5": "3C7zNyA7vsuUGaNz158Kjd2MVQGBrt5pNthYLsQ4qnfTRMXHgFNeuycDCnUwXuicsdcNwgmpeBnb1tiykacagB19",
  "key6": "3i7QUHyxHQh9pWJhHzCwYGvNfAkiyp5yeWMNpAi5gsDwowGUNvVwLRtZKSoMTTvf4MDy3ACHDZkg7itdfjQVSru3",
  "key7": "5eiDH1MGQdsmzngTksQ3hoD7k8g1DFBPwUmertF1DfbrS29mNwxNDsWXC97XSEK9AqmXPMwcWueNV738wfg6Yyd4",
  "key8": "3QVqSQW16xitHeAoVoSqQJ4cwo12Ud6buHnzdin6VFdCCC1wKSekkmm5xtNZDijYNnhiSbK7nxKXJzWaYDKiGLFR",
  "key9": "2cvRvP95kaVqA7fRdbX9xvbSyjDoqYFmudBacMx9Q6SuPBLYjXisrU36B8eDzrBsXjBDhsyMvFcBvcwE7tgPNyWm",
  "key10": "4SNsPNpu6GvtJ9KLPmS1E4isG4QDgkq9ZKe63UXMWKZ1eYMkXKurZbF64MoJiSs83jmYCVQs9oqnMgyuHBxjy1cH",
  "key11": "4fMjAsW2Jsy4e1qqP9LBtx3Z8F2eLPHAuLvcT6DeHQSWN6uyBKVJ5yNGE6kPuDmKvRvsD5Kikpbn8EfV4wFp61EP",
  "key12": "SwZCEU5LL9BHdctpuwN66Dd4Cv7CeBdRiak76FBSVoVf9YApQuohaqnpTpaacNmN24FBQ2md3BBthAMw9Bzc3Ww",
  "key13": "3AEHYFrbpjVnTtekp86amf6mUfeBgS45wugKQBBzbThdxpYi3hmbH7DLcjiQaFVTnVTDGPv6tkCDDrXWi7kTgKtv",
  "key14": "5ggLVNyVbMeaS1YBizimbGUkPQY56L1Z6HnAzdaFcKCr9V8Fd27nWLDNSg1gJti3KY2MoGmPwvTQSXrKiVLHRMrF",
  "key15": "qedXckFX7MufdqYT5WTn5kWzCqESHQk7CF9ptu4UP525mrRQihcuZQefadLvYaChoHSzzynjmQ2ZepwBz4Up2Dx",
  "key16": "4LoUAfqraWnNtsxTaqPM2qLX1aBhJqZi2hcik4Ai9ee7yzKsepc1G3Nq7bjskuYXc6UKrQ3uXgtkC9JYFAxVbWor",
  "key17": "5TTiJfbMmfiZA4x7GSxYhEQ5xqjUs9QzMg8WrYhHiZfKo73z68dBAgFsdwSs1vhDLbTh2pafqs9AxXBL3uhgB4Qo",
  "key18": "26vaYK3y6nKB7Mnyfin63Ze8rprR1ydTL7bkpoEcSAQYq1FTpfZkSRdHrFPP3hz6YpCpSSnXWN8wkip3wGscDJ2a",
  "key19": "jDUKyBkH5TNgCQqibmTiddZXGNdCxQ5gZtxwZ5UDHdWvpyf7241XjydK8bCmEsLrobCSYQZYBJh2SZMXMmQYXzZ",
  "key20": "4AacEmNjgAkmSAD5nxzLAo9ZdDwTQuHBWTUDK3znBcbVKjer2rWWbRtahEk9kDRyJR9gAX1As8CuT3hs9j3VwvYV",
  "key21": "5ptGysGLLfquK5hBAF4e26Qj57tC9gkKH5Cp5XqekZ6X217FkQkDfXduQiCbktdr3rSK5nee4A9vKiGzamC6wCAU",
  "key22": "2SjADRBv2va1pFKinrQKG2bhRhugCtRUYRZ54sDfiBbEQDBsfUFuSWCLBgvtwp8AGDezxEqmYScjQLTpWzrWdtRr",
  "key23": "5C5rbaxXmxe4bTD89AqJhVE9trsfxzDMekcuiaSbA8Nq1hCXh7LmG8XB1PdmsUmJCgWCtxW93xHkXQKkknr3sVLH",
  "key24": "3rysXoK1yh527LHPqh2JgircE2nA9LiHfY4ZmbLppNtgMEBaAmYRmd4w6aMeU4fWzn32fVJZBasYC3hi13tU7JfN",
  "key25": "65uRAkb24tXpPzZp33wVHvZL37Mjw95b1dKHMWBaKVGchtnj6fspX3bmf1yEvMw4bYkxHdUkSMyKUVVRqKowHTDv",
  "key26": "3vg3qCkPB8mzoMYsBqnvau7ieNPzxVfomaPPRWTADwtHNCsisn5NeodAjLepUWCEuSsydfGX4ncZEbBaCy3qaFY2",
  "key27": "Vjo3apPdsnuEu1xSSs8UAbQHSgKMbb5efgmgSKjjaAaY6EyQRRugTkzvLA6Zbrq5gFyt57KT6RfUVzJvjWo41Lr",
  "key28": "41NkKTqsPuhZDtY2vRoAtwzRwFU3skKMs4cXGK49wgAEJZGQ4LugZZocobPNeqmXbbbTHQNKWThRYe4L3qURAY8m",
  "key29": "tRvx9VaBEiyjK5k1mnd42rPTzL7zGD9Jvg9xv5iqDpXFitXdJjkgF6sZ7nTPRLAjb5Q4VMkiEEApLRYZSvxgrQY",
  "key30": "4Kgweq3Zi8cwvhPRPfDcsSfMfXqwJN9A1oRiqzk2857Uevv3ZkfQ1GVaDWr2gbQExPbyEsxMnd84jt9qVRDyREkL",
  "key31": "5vCV9uDsLQaTtAEEkGsTWnb1xxtNSDZLjLNPw2U4fALtYsuutA9FVMraFxtPJzeJ1MPZPKGjKE2LBM1tPgP3eCvU",
  "key32": "5ZYR9Y4YYQJySdWRwtfcqmrZmLrzHKxTXZM5mU6kVmmiougfHoDvd2UAVQksKPxcz4Y1swsFSCt49gXTc9bbxHmY",
  "key33": "4MnqxErviWeyKP5ynUV5Gg8U8VaAtyMiCbqyAa3XcMTMGpm1Y37E5gvtTf4Y3xpVTzUNKiHVicP4ah86bX9uPapZ",
  "key34": "k31PE95cN97HEzWnCiGqDma3C4nfisnGyqzEqEVfN63fgWzHw8e1YSL9tJMsu5Rf4KmgyX2G7F81JMGMfqSu8EG",
  "key35": "28bXN8A1pUY4HPW2zkp5KdrKuRy6XwZSXG6WvNgY59uJkjDXrFSTATiyWtCwi77PGwFf4RP38sJVL637EGXZi23z",
  "key36": "KBrrnUSZpNuk7GhSGrsUjo1BeauS1ovdfu22DUXNuBd317ZtpVmugRyUx3QGZfqvv6Q2aTyK5EevwxjjY7ABvC8",
  "key37": "4s37vHzryGtJrnqGwJfaFZrorpgq1DdZFnNAMzvRBFdu1cj14KJdtNx4bHnfm5ikZXt1cDKkB9nYSPtDQTZ2XYDR",
  "key38": "4qhZSA9aVBwA8nXePuWJBiwT8Sot6X9NmTyydEgG5sAMaSncJ5m6YyzCyWQQkEAP6EvsjKapmap1J9sW53tYfGkG",
  "key39": "NDe9Er4yLC1pTBuE4wefdqjaL2Dd9sQu2T4j3vmXkAiViWB68tzinA3sFxDMTmXWpRK1QmcnzjBB3kPQNpiVVca",
  "key40": "4bUM6C3VfrjConiGn7bxZa4RhuaBRFjVwdaz7JAB9owGTHyRzr7NfdGGUMHmDLjYeyuaFw6gCVK7tVYyDnDmY8uw",
  "key41": "GRo3wzvRp91Z36ZgBEvuk9ptGkvB2zbMrqsY8PyVC1xKT7MeCDUSWFawH5Zkq41cTwcVTKEnEkoAiTV9EHdwjzu",
  "key42": "5nMSg4B4uYHXGwAtk4t5HLHWZRzH7xVLxdw2KYkWZDXVGZmv4uZzkdvibBERWZerBpMyveyjGEoU928vao4dMBVk",
  "key43": "3SN71CAEtKoZdiajzNPCHoF6hQkirPKBM62ceYH3RgzCoTmVefD3MXy8jmA2rpR1HUxUzqmKdn5oh86WpaypTATW",
  "key44": "4dX7HZH9KSLDbrY8FCy6GhT16VH9UcmRqdf6nY5Qge7Hm4DxZdfhmafBsKNtRRRAaA4yrbJb5YjE84ZP1A1iR493",
  "key45": "58r6tC7zMYUwKG7mtYCL8PhebKyoeVWFee1pppd9pt3gwAmKAMPfF9LLByeiqqUfA2Gxq7wKvzQdVYWXHSSFmc3s",
  "key46": "zVfTWcu2UW623ZTuVHQLEstY1uUQMtr6rmLXF8kXq2uCDEmnZkZpWW1xkfUN4um9KrVofPA6GTXNPDTaequ9ZeB",
  "key47": "5U5nv5fvaSWtU251yBQZA1EsCt68v5V1hpVJRY91qqZfHQWYtTgoubmAzuM9NDx5PJ36H12HEeoinR7DxwaYy9Xj",
  "key48": "4HWRkmVeQns9XfXx5jxeA1U9QBDqm1t891oC5RdFH3uUebygWGCweNmiQ584hKGiC2h91uogGEaGdzpdRPi2nPP9",
  "key49": "5PhsGhbq4PuAFxgLouMd3Bk2ypCTREvVPQviZpjFR52Dx5tnEKvMFfiTNo4gubRpgqmDDgUv3eZGcfYEXDAiuEap"
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
