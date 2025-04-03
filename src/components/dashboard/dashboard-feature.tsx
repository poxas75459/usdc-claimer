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
    "4xtRQit7dLqdST9ughv5sae2r9WSa7Ug5VcDSreq9P5KPDZfcoXN6xrfYnwfixJchshxqyoLCHhR1bwxybgHukLp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2brqWbxx9o1AjQj87pHgUTBzHALsr4aC2StQfFV8omDPJUNatqXqwPcKfhf5PpiK6nibwzMKPTvJH5MTU95HyRQa",
  "key1": "5tPekge4MbJ2V6hq74qv2tLsyE4gtQWGVTKVeTsxLC3LkpBfqy4c6Bwv4U9pbvxszKX7hmpepURuerU7U5AE5nrA",
  "key2": "46D5LNadKY2qn39V1BC7J8UcXzRYJRQWhAqd412aNydnS7DgYjNPQpE3XEDUuiDfpmyzwawJpvESysfaah9KYgYK",
  "key3": "53Xk9F17VZenNCtBuzDstyP6aNDn4Yk7VffzSZ5zqDQigZdfiiuMxS5B7Bkr26BjejuewCiaKZqLTkftoTN22WDU",
  "key4": "5rRcHrLtojmBsfz2UJH2MsT4c5pvYr4pGVSibMvgtB9PnsKMbpPLj7ZzftKcij6WUr3SLjvhCxJ4fevJzyTvx8Tu",
  "key5": "pdzAQGs6kVsyhrti5eYB8jJgq1KyRdFHh4Fyw9AFCQqN8BQN9j8APF7ru2k8pJpM297FhQ6A16RMzrj6JviTQCH",
  "key6": "5S2hik9UeBKwahPoV8rTTy3gjeLaVYsdhj6Hour7MrPTX9MGeeYanGuaGPQPk8bX8zy3zqg2LpZrhXCakrmC4YYn",
  "key7": "4oKAj2HYbmQScrE9ExBhAkLmhLy3KTt1jWWBo3RkYGHNoS84D2BkbHewzBCrnPFcKdNMKUFkWptxZm9ifyQX8LSw",
  "key8": "3HxGLFGRtXaqjR3gS8hfrGrYo7ZaDspnfDMpbbEzuseRYyiH8AdTxbc22dYDCWJC776FRpxWKA8NipGWEdeafGx6",
  "key9": "5HE68rycayLRQw8WcpWpAnVYcHKmVYb5A1Szuat3Ea4i2C9VLTdQ7ym8t8uiD9mNkJbqXk7fKv4EDiUNEiudFwZe",
  "key10": "4FTo3Yj3wdvBqbdonnj8jdPY2tHLi5RisHCWnE13se395oXDNkJvFjzo4qtXQ47zAXgAg4zyoHYRN59M9AnYjZeT",
  "key11": "56y9UHinVdGE1gfyvo4rehRfCiEZ5o44T6gxVVHqbQUcrNkRMsbLch2JGAeHhNpmwhtppcGCfWrcLEcC9VLArPe4",
  "key12": "28fGibvKd7qUcCo9JXYBMw1TV5Mphdns6nvrgim3DnUbY4N5Bhk5RuK7G6YyMFq1dNF7UiumvQazxA8eBWqGLCwP",
  "key13": "3bv2b5mQeAoPWhvjudBbQzfXqqQqZjF6CPVpMQKpb2uSUJGU5Fgz4SBWx99g5xtjVdNJFmNdwoWkmqAvmKuzSyQz",
  "key14": "5VubDaGLGGYk9pjtLvyzmWZqBPEURQztX6DcM5aXEteRSYdCfDBMXxWmiLtLXFF1PTZaz9ELzg6BRYnzbUxiLaAi",
  "key15": "4qkZqBor9vACokbEKkghY66My14RUtvyLah3Ec6L5QGASy1Rio51qHSDE8Dq1TDirMiL6X7Z3PWaq8R2mGLhRZUo",
  "key16": "4UKaJPGeqaVY2cL1BvTGjpLjURQMwHupnsEjZNUsiYvpudEeLvcScN6fn12xMDfHKxFczw85xVsnSnKueawtBpEp",
  "key17": "2E9UfZFKH3HsYA87iEz8hYPyQetBdx8yM9iBuqJXqYDcauxVWobbUWa8nugyY8FPnbAAhyM3z7a3DwsDYeqgfuH6",
  "key18": "hBGrS63hvv64iGp5X43vU4XoCPJ2cy86sGczoGh4fcvdxQ1LLEDN2x8RT39pEqo9db2AvAXVKPi6bMmgiAsxkRq",
  "key19": "GcQgRYiDpuDuG4rCfTXw3YHHTXntHeuAS6ZExRiRLfgg6AV8Akjw1aiVhxbh2wUmfhSGWb3PzBwv3m1mvkg8bng",
  "key20": "4XBLS7tHG8kwFs5vbu3yg4XeFAWBcuun3G9EAyzpq7aHhV6yxRDwmLqhTdWxtdajV5mB2vx6Qs6zWvK2ErsNw8HJ",
  "key21": "3wx2T2bpvnrTbhdND3x6S4JX3ZdJxeTiLBX59DuSeKLMfdUyc63J4Da18rgkm12CBUUAojP6nD9MTLrQzc916f6p",
  "key22": "T2hpeSL7N8K9Xb7YxacMhfK6fDvz3E2XiZhDsawvX9StNw9HoGHvGBcKrouLzqjKm16xdr9EswUo6cooEWfxhHT",
  "key23": "oo2pSceKRH4JxdvSSMVrcCdCsKR1Mv1axpi7ifTnAnKRFc2svXok9DLFLJPRNp3QjS2wdS9nQaEYHjMqRJZYTBs",
  "key24": "3mKv3y3GThEoBfgxmAuP6jT9TVtTpyvatt6cCEgcC1iUXDdRq1VrYjtFiMpuqLCgXkDfZUfc5PZeVvmSgPKZ2eo4",
  "key25": "3zSby8GCuZEcu3wagSJaEEa1ZZfLu489jFRzneWFLWrwUp1skdDuxsQd7xwCxCL2gxJ24jFaHkuGrj36VqFbTsmf",
  "key26": "2tGXC1syuApheHD9EuEDaNazH99XkL91huzQch3demVETjoFGsM6dGRELXdPS5CQ6hixdvPbadGtWALJGGAePWa",
  "key27": "2uuMvH5giDC85nMfBMxkspHhyZdXJe6BMvsTbLRwDHBxbjRdRVvBYyhCCap7cYREpP3jfAGXPaEQyMZFCDB1qJNd",
  "key28": "5GeKWvump5f7eSofXXB1Xrkn1dnpT3HgjzG27mmMcfwaw2vqCCg3N4Ag3qngqnnkTxyZ7BtJ61cgwtAXtz87ZD49",
  "key29": "5B66Yz22tXmNVKezTu56Pas36bKtU4VPrJFYH2UPpzQRgQPP3555Jywg1vTExnZ2u4P2z37jN1N1wJPusvKPvGLS",
  "key30": "61FMAyxy59urxTL7dxB5wzLpndquue633oAhUqUkRjBvvRyKDXgqj6w99ap3hStAqdxAV6L4D1ZKKf77wQVayDfb",
  "key31": "26Fx61mpF5AWrDeZjTdbEBrG7QRPR2cLu6gm9VG4ZeJ3LywtUJc6sKuGL2o9HyvfjHmryX9WdUvnoUg3mWintX3S",
  "key32": "4gRrLyGXRZZgZhtbTCDxvg6wLaEKbqGmerBeedCze8UErLT16ZXxA67cGik1QHD7waMZ32bth7yPj9rCa9NFpWPi",
  "key33": "4RPknoZYhsPj9rkVppbuuorNcuR7hUAzB6STN1pKN46o1LyoVjSFSh94Gr68zk3nqE9r9mjkrFaffqusgtWaue8m",
  "key34": "2saayGG54xssChCwYje529rGdpp5v5b7gyqoQsQ1TDuNP6KzErWB6zg8qnSVzajt7XcWyLJmWM9txnGWqwLLmxiY",
  "key35": "4P7gFsyQo8RnwU85KYJsCUcuwVD3qoLTqTmXBfSTgriT1boUg6e7NMjWeA8wWbp6wVr1NTMHytkf9DvX8xVwJ3uY",
  "key36": "UfFRqbTvsn45cvCCLyNKJAZxSZSw95RpLYgpSxcEBvLEjCnYuU4zK7q4xVkWtVARG3eJfQBuPn3KaJ11WktFx1U",
  "key37": "5fjdbNTBk1xyMmCY33uTqgyMgbKB5rDNXy4bmC4p1mGm1z6YJPwP5BwW7B3J58KnyU8NdrFFR6DSq5CUHexV8PVZ",
  "key38": "3gnqYW9AUjGuVLx2z6JMaLdzEZgawqzeJnkKxJ5Aqas46o7xXosqJeMJaBA1mZ8u2av6JsFDzZyUiVaRo6xr5nZ1",
  "key39": "3WTkSFhm5FfqyC6LgefN4cn6saVDj5F9f1g89fHWpexLGzqNdDZMzGT2R8CK2UAUhGAn8Xryi5GfBpvyDA8jG6su",
  "key40": "2Xveaf54sZp6de2sea4YyZt9ziyNC1vmxkSvUnUwh4w1zzgquFBDgRHVCWrvfRdGMXTZJoF93AgDSNHmeELwpKar",
  "key41": "3ojt3G6qqCMjxJEMpZLMvHSUUgW86iEsrXeUBCWcrnEmnJAJJY8SbwnnjcbQ82oBkVQK5q2ECVQXZESsdpPy69Hw"
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
