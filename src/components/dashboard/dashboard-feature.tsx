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
    "1nbBCXUJTe1BP4HhgKJMXMdqDWyu6KovsutD8AkefakNgC8hPD2xLJspNr4WhWygJ7abrW2i4LykyWDak26SUD3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26Z6TM3SrQ7HJSV47pQT7dh4PQsYVG3k1gszq1JvcM7tDiVP8HBFibDAKNduE7PcBWYKhwgWVLGHHnbTBp6e5R27",
  "key1": "RuPzvP7SgspuNYyiHv7v3vpeDnULxJqME5MAz16Vyu3CoNQhfc4Z5qxes4o5utHogAp2PbHX8zbk5HzuM17e7dx",
  "key2": "4jkzeRbHDAGNnidZ8HeFxV6Kwcj7b7vJDADa3R22f357U2h36iZMCXCPQJSj53EWuSmqKJME5bDjbN77yHEP9UZb",
  "key3": "4F9ZGyMeTXdn511EDQN5DNpUAE94SZzxcXhHgRdwtKzid6igB3JconVvbjs1SoUuiRdhyJ82ZPgkYqZZBLjuUEes",
  "key4": "55WGjJ5iXTPPbjwXT5kfD4PyHBF5apLMAEaokU18svLBN3EtdxvemDjLwYKZzK91DKicdrbVnbxaSSXuKd8mdVjf",
  "key5": "3a3MSjY9PZKHEWQEmpLBWSM1snb5oVexDX6MCiygyTYT3f7SaK8qPXeDA4H1eCnWLdne4D3tcGcKnApazK7UQH7Z",
  "key6": "29qLN2pcjrC7hQHsQ7owAsiVJZTYfHv1Wue7RpUaoz7ovQFLq6PsRG4awYFZfPeNZRsrQBsFvnAPbD6LZugE3qte",
  "key7": "5qUHNwa5XmeLELerFagkDdf4rqrcq89MrNwsdMLkMfjtQggpnD2RyasNeWWajejHHBxUt1D7d7Y6UxFSoShxEjWv",
  "key8": "5UkpgoYrJATAzq1Jt94wzEdspDBkwMVzduDNfdqY1pkQ45qeYxm8EuFhnnV5hqCU4XvuATMvY36cpMALLCDydyMT",
  "key9": "2QtX7bLmokNP7cAfZ9U33xbxB2RYUW3MJDTMhRiz9SW5pwwjUvJ1DCJwKSywzKiEo73crqWeNkRy56PSmdprr4oq",
  "key10": "46Pvv5Us4mhf1CExevD3S1UjTqtbf14S7nuqYfQxJvgwHdcqUb1Y2dS4NcUGuu2PAVMhvy9xaU4xwiD2WWh1uHNC",
  "key11": "3gMNcW4uB7cVPdMbXD6okirwKQJDXC1aJDMkvpQCFBAJjbhABnN4wuQqBYtLkgvrwE59F2FQsVpsw69j6wwmBW9p",
  "key12": "5q26tjKKsYz7hTiBW9AyFbjcxTzf5dr9s9oJYVrkkoRMcTP2FVX9ruSGKXkVEh5WQ48kV9ssgGZzyfBkJrFgZYkh",
  "key13": "mPfqTQ16LNiWu5Hz3uRBnNxM5amPDACvJoqepmiQVxjiGkbcP6ztQ655cUT9PQgECw9Mb5LFEwYGyRqUrVpLkXR",
  "key14": "2dWuSvHRbxLZMjN4YxR5uU1i5nva2LRXVA2XZC4bstZYF4of4s1tyAFyYmLtt5roEtrCxyJnJVKmohqQrv4XNoSA",
  "key15": "2njfApGQ4e8tJ52gxVAfgar2raM1dkXuWUUWL26Wy4yNEZFDLnqKRMKTzMz3HAQZYgmRgWzsoMnwygPZ31kKsSY8",
  "key16": "6Bop8RTTN1XGofbXJMP82KYbaWNKCYnmXLfCogXsgTJjAUHiy1RkrU94HUqpeKNmSWGas2UZts3MA5uAijGDSjk",
  "key17": "4wjFuU4M26NktfdyMbz8zGSF6gRKFQeg4kEVdKC9dJN6Mk3g8VtTxhHcaKihce6YEeHLQ5HxfbbGPxeEnAniGuqo",
  "key18": "RuQCkxEnvuiDznGdUCPSqdPsg39YzuiZvysmn3M1msJJeFD9h5oWjmVi3md4KfSnacWR1CLdjw28soqb8n4TBCi",
  "key19": "XLUvViabQkN6EJcRAsNESmUymUYZiVsdxMFw5eSKXQDGyJpyLHxtoqAT2bf2D8ANgELaDM8C5pRFtdbSV1QMCrH",
  "key20": "8JP6PLBdPGB4auW3B2ZkYQx4egZ5nqoD1dT2ZWWeRpM1hP35cT1r6fDyCmcavtmcK98TviGZczgMeSm3488JLjc",
  "key21": "5cQNd8nEj9ddNEcUCEpR79G3Jj4SrCC8dqPd9QSF3BxCe5o6yci6fBiGnPS7nDnGTcJw6m9CZETw6eqR6qPDD9ne",
  "key22": "5v1EzCgwVgt2UDpc27SDS14g6fRtzSceaCRbbN6mystgV4GZsKjNg3kHH85t3fES3RKzmPVtevcLj9t8yWFp8soX",
  "key23": "2Eqxmzm9ur2fTm4MxZETSnSwsMweszmtQMiD9HE2GFbXNTr5Y1nKEm35ednuemuRvkqkGngDD6MYLVDYr5iZKVZ9",
  "key24": "2wpvfyt7KQ9Geu24ESNFH1gY9riWCMSXBfwqBraCYUf3Fc3MfwezUAkHmLgwkDLjN6Vu3tacrh39bjiCiq8ayenq",
  "key25": "5VQKFyYZxxLjqNF5wohYLrdue8qm7Tr3qTwMJv39eKMKnrwmztoh9HXqNQD4UGFTeEGM1bE5rpH3jGiUKHMTVSZZ",
  "key26": "3vh3Vp7digSqwAHvXoEQ8Qo3YPwkT4hRT7esvnMDJ4MXHHEAPCYbs9bX2mWV9cLG8RHVPKxvi987SVtFRTgpAwyF",
  "key27": "2ByAC5ZtYkc89YX9SUNN2Z1kemNxPdbsLVRRfp3hPaNSKeouMZzE4FaHtGifGUa95A9DVbbR1N1SH2BLpotKRYng",
  "key28": "67871WX7gmL64qkN11aBp3jGNAiiJzqUr3Tsozt1Qct3EyWAwDcPTn5FeergUffGzEtDgk7wxegEZQ2FdwLc1Bar",
  "key29": "2DEUdZYMKB76xEgbjTLqpEWzMAUn2BwrywHv8kfGYjXy3HK5rCQXsuBvPvZ2rYoMDuozuCRmh16hsiNjsWc2xtrL",
  "key30": "5b2pG84cKnVL4PQaqPvFG2jH1g5sUuEeJ3MQ8eqQ1sphubsG72RSXP2U5R8fNKkuLftsjFnYDwugH8UnM66MKc2b",
  "key31": "5zRLw8s4hwELb41NfUADo93gxz8AXfaApXySLkBbkh5iueySeaSRpSz55bVyzYXiigRWi43chWyrnVeD6AhkPwZQ",
  "key32": "4iyhpsVc1jg1JMyWA2ph12h96afrHVyYyBosaJQx8jPZ8JKrYRBE7ks2juVxtFdzKH83DWsj4LHdehAZYhkN3QUt",
  "key33": "TCChsfXePQSasKNAs5ZWBc8gYcWdDdLmH1BSyFKfh3CL9ezc8FwPMw9cnBkL5suFbX2kmNPc6BDnEXyckY9APYs",
  "key34": "sx27ijZFGQ8cZMrjTEHtSMr1e9TzYzTjwCFvjQP6F3DZzdnt4quVTQPNN2zxwMnkCV31EJqhHyiJuUNPWFiDX4d",
  "key35": "521Zyq6TnJ6v3aXxoUgq6VfkZSARZXJyTKw2KptNBABkJiSiHNrKtwEJFjJxfTbaokGnoL9ik7G4WxX6SwK7KnHj",
  "key36": "5XkeGNJZxVDxvyHwNGUvQFjDzo7NTtKHyDVeL9XJUB53BE2x8vMTJaHyxHwUGqYVhyCFrZe21fjqy3s8BYDiFdTK",
  "key37": "2SeKVXKgBs9dMsXdLXcYPs9rStoL3qtYGrgCJMyTeDpnJr23THgB66ky9DiiQrJRrcsTWEycLDF3Ua7VJoxs6Eh5",
  "key38": "4Jp91Y7JaQkwD8KzHtgR1478orLR2Laq5a2QpcQWBctaQzEz8s6qwq5cMAv7ZNuq1QSCHQyYV48YBT6rtqnbXgzV",
  "key39": "42eK43TpTCWUpxxFTVJKHHx9zrV98UA5RKMRvp3wX5Q1u5viQ99AaMFkjcxzb1ziGhwK37xJK2zM6S5LHCPakseA",
  "key40": "2VDwPkGrha5zDEgbjLVaMnWobtiv1mFqTvzJHevaneDNVqLPQLFfJ9B7mQMKz7WbbWeAoi4Rzh5Dpne7dgCTbtXD"
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
