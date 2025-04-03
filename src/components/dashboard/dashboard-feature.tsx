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
    "JkedZ9eXAiZKHTkzTdQzRmLQrCJFh1kCgoaiTb9Lh4rypUTtbP4tQ16S6HBJY2V4APV7NQKq8EDbwTFC3mGi3kx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43idW28omnn5g32jKQkhufqWkq1monMyXLw3aNxkFq54YCVJ8CGSwjpvquWB4Src5u7Uj17FY8ih7HCSzoLqsBHP",
  "key1": "jb9RiTnm9zydQsLLhCzks2o351P2kHPmzWfvX6BXgi5thFm4CmyEDXyQVwx4jDsjrmk3wJmS7cJSP54pC97UsW2",
  "key2": "3qmNuyAxcqyjctdwNFmnKH8hf3krdsu337WNHjtAyG9cJyPb4r9hmmhEk7A8DoRqmK4kjUd3z425r7Xrv2g5v5aj",
  "key3": "23RF6Sq2JGtnhsSq4uDSfBbd1YxmZyEsBGyHj5Kfv1bevxAaFT79c2Paxck476YV9xuC3yLisFQgwWyXsNjBkqtB",
  "key4": "s4YnBym2LSVQFHiyF7hXZbTCpHYn4cpWqfQRA9i9to7gvbtmkPgoenTd2ZoKjJ64ajcxB16yShzMrF2CHvE3oQs",
  "key5": "27xHJBq3kM1kQUqaLAVW9MDTxSowzaTxAifg8kyjsjLHDeg1SFUCoUGF8eiCsUdR3X5Tfth884KwPnYAn7HqNuUU",
  "key6": "t59mvsXNhy8yDaj32NW8znDtCvXyMPtzVNCFY577aH85FAW5PC9dG7GSR6HXAbnkk4J1mEZbdJemh2XJd293oh1",
  "key7": "3tb2wMU1y4AyHQFXGinofJvhuX6E2Q6itgkeMdfaK5xLf7DwsN8Ui8e7RtTasVoHrmvdpfuvyHZD97F2XVDsCbhY",
  "key8": "3Ah9f5YkkHdRd71YtNde2JZthWcm5L6iJ3fNoNQuptfFmrvAz8m8Ri8TtsKyZkugYnhSbVGAGszcn6px49QTQAmT",
  "key9": "QQs1WSUnxM56CXpNwHCkWoVvZtuCFbjknfRQECbXDpAatSnx9o9HAs45tTWTotaHKAJVzsjHF2joiTGikiV6XmN",
  "key10": "dvswZPK7mwypvnDGKetrYBdXe5pHd5Rq1PuunBP8Yd8PidzbRNjvM8BXAkdPLaaojWHrbXW11f85RwYwdxaUP1U",
  "key11": "364D7ZdwePnoH3vHj5ZMwZkoe6XwmkAfm5KGNdzDeuiNPDZUvyV7oSL2c7DAuJ7ZZbVd2e958vrZmFMG8JcNYCGV",
  "key12": "2A9phGDQwBE5EsQ1NtUoetDqhYLmX1hMhw1VbbYkkcQ7FkEinbJEiejsxphBGKK1zj8VUqisLjnw1weeqxM3XUoc",
  "key13": "2tYdSCvSZZAdbVxsZLZB9eV3Cb5w8dwd6tpxunTgzwtTp1oLMeeAfQdwRtHZvJkTbjshupZbeNvEPBbkVeG4tFVm",
  "key14": "3ERWyVNCDhLyXHueq97rRjLqN9AuJASdaXTGhJdmw2RN34tw41ophb8rJSGZ8a4ZkBtJ43biL3JLF3PMgYiUt9gQ",
  "key15": "3K6VqM7CVQNYo4fRwMDFc2urwPpz6tGYGCFhaYiCdQYXpSDFXnS3RBH7hjpCeEa15d1Ux5s6USz7M6gHkDmfpJzH",
  "key16": "NuMxdevsfMZroGcEfRgxXpaBetuLNUeW6YUPsprbC1jJfJQmDw33tvMfeN6sPmozg7AuaQaATMiAaeaePF9gbBe",
  "key17": "2nKFfFEKGFH4fktFmLBT1XGHZyWuhbmbVJ3ByTpJpWbPgWKFXqx62dZDCJ1oVUtTUgMgKXKEU65iHnbKQJkNZJP2",
  "key18": "5kCpmAAKSNG5owpjByjZwLktYEGQHXPKccLXUrzu8uUnaEpHqsQTNQGu7iGyMVQSnnHEJMe5dDTW76GwSLpDNcbR",
  "key19": "3QFVX9MkDVoNPC8AEsrmf5R6ZHEfEFGHXkWqd1HY2aDUN4GJFts3bQu4bjvQk7WRfoGdhvQxX6qb9CTZGhxTrFx4",
  "key20": "5imWLxYcR7Yw1X25PELGTWqPhvA7BdiUrw8PNb2eR8pz22ZGTd5zCMUe6vNbBBcmc86SPoDXKD8Pax2T4WM2Bpn5",
  "key21": "2HMWVz6NuezpNYoC2MikJdpzspxerNXPprs9Kmq1VbfxeqGhPoAosQX1z7x2LAKKTZDpwM2Hv2RMq9y3RQmMSPL",
  "key22": "v3mfjUyB23yr9e25x5SUGaDuEqA6cECrukKFkek3HeSndchAH6rp1KGbmb8qtt66vT5Vi3nBwmieJvT1kicQwSz",
  "key23": "2URm8Dt1TE1WnhgaFe2bLQSgi7QjDgteBvdskE7FMQ5oVQCsEw5PEbzE1D78PiesRitjvQ3wMz8VHVysa7nfKT4L",
  "key24": "65AwqT5PUAJmKUfqNr7dwuaQeiopAG8duZxjD2es5zEshAQ4KtEv1RUT4GAS2D6UnFdnvNXMCPR4MTYRP6Cxsmx2",
  "key25": "Qu8ThGBPZjQCADJGVnMXDpDZEegdsZBKsWfnnr5XDPqUraLT5KoN67Kk6mP6YvmwAdjdivLmkc7U7Pxo22uxMCC",
  "key26": "45qy4XaTxfRiJaE2cXt8RaUNmwtUvaZpeVP61dFHjEGrT3tNcmFedjfsEJmSSWJKnunh6xv7VBCe3TgLx7Gk9R6A",
  "key27": "272GPe6fhX6g29KSNJHfHP12XRGA7twAWD5vWjDoT8HWrAErJDBmn2WRyn5rKDfCtoknbXtQRHcUpCo47yj5XET7",
  "key28": "5Bfizck5uQcuZHxDXF9EvH2pHm5UCDpa4fhsLMEwJAMewn7jX4woornzdb5fsk4jP7ADkFzqo3PBorQj98Vqark1",
  "key29": "22S2Z9jqSdMvGJJZt5zFGFpyFhj58x8SydVfaYcQNhA9pTAUgSzJHCK3ptHTMnVPz6pGXBK4XahFmqPXtaNaMXUi",
  "key30": "dGGmz4UT9vKoLxiqGhaZY4LzQ4Rbt8wBoJe2dEYUxeBuyYSm9H4nEocufBQnPKjvRkS71qdm91CU4VRkECECQUr",
  "key31": "3E752hWtvMxCREjqosV6aHURtVqcrNpwZDaihoAoEAnjk5eT3oWzdMZ2C3kJs9za6zikg6uQ2sECPA3iersZaNci",
  "key32": "4MJvJdPCvw3gMtZ4ADNYE9PraY9VVcaS8jxeLSt2iJzFq4oXKmD77QKi4JESYrVGn5S8RogpiJL9QGSenE786MVa",
  "key33": "2YuUsRLFe462Pw1ZxijeWvD3WyNUuMjUBsTgE77gd17PqkzAjSwkLLKjtaLae6iHy8GsorUEN9Q8Gw6HZ4qq2BUz",
  "key34": "2rMGoGMmES6du8i6rera71pq9DDEDSi27Gu5E71b88xkkqVAB6AXZAx84wqb9C2B9uSg5EGPLdyCe75nFekepwPW",
  "key35": "jDEgoKfCM3zJopKCyYZGVVBCjbu8u5HCdYSE5siRUadG9pDiUv5pvs9MnsPuMFuxQB2vi3mAbMDJw54SdfFp4UL",
  "key36": "4UWUvhzgChPH8JTBix3or66ntMxCUU1wi5KzNmh7jwwRRpREiLTuUdc98wKHRusLswhsKaqJ5jNvMBFKxeds4jL8",
  "key37": "USJu6eJyHXhNbR1iXDKn1JvoRMoUDGPGZMm1p9BkV21rpAiK3A6KJhsCUkTS1jSW42DKD4pWC2Ashxw8A4H9syQ"
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
