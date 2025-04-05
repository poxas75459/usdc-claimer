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
    "GPZhbsHEP2bQviGKRTGXNkGfwg19tkJpeBjDCTPSWnBTLn3FbokWZvckdwAhjDEZEgiPn5f1bLE2YVjfwtDvy74"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LwJ46rqWyG8QoHDfsk5U5omLfQmLyhEPNrdBjgWJoLdba49kmPWFaF9SSpCi47qKfd9QKMN1Bj1QjmgfmLzLS2F",
  "key1": "3GW5wB8EWDq7autzYrwbUfPSZbDBa1sw4m35prHpjsn4qdG4hrV5xDWRePzzq1pnQGL59vChezE7Kav7BtuEhv2D",
  "key2": "59kdRT9k8prti9iRQM54tbssbR5AA4ZG7F4thrBydcAutJZK9hxcqYnyGaWfWFDs2qo7JUUMbcamrBsBwW7hUMVY",
  "key3": "Q6uUGbcwUDQAP7s93B9KKX3aTrr14Jg2n6hU7nrow7EKorP8AuyodJ2KkjSrQDjFVQa2uDetnkEu4NMSR1UkdGP",
  "key4": "4Q6EcwiLnc6v7pAFSWnwDwRmSm7sLPiyu2MrUKx17j3KbEx7CF5jEaiPFpX5YWiTbfVpzhQak8WfhUruqFidaN2B",
  "key5": "2md7BrhCdqYgCANgCq9fYmvLVprSh7HGawHhAnAtuVi6NSfW92BqM7rbAbpD8bumCA8HJTcbkNr17TsuzmRy5xWd",
  "key6": "9YTaGcpTHSY5jNNr6cXEQTpmYXrhP5KqJCGxm1E5Sb6uEWq5HZFZPHQns3QKhuS9VWVSc2JfxCKneZMeDjaUUqg",
  "key7": "4JxZ2tnX3YUVux6LwqhN8F5EfT25e68PsjECbH4ng4gMkMMbYBex7hzp5nw8BoPBrZmFcpCmtCLSEVgUmBWEQTMt",
  "key8": "57wxcvNPirnTuMTDgRNDkD8c6XTJMLr51mCfj5ucYD5Bie7zZfJSssopBSBu9msrB6oSveCiPiTrNMZBZkf6Lkhy",
  "key9": "62h9PxHJeaVCysU49Q5BjWtoLjAryD1w8FyQi9E5ViBxEuQyhe3rJ9eqUZkGojJQpg69gPTpTeyFBY4GN2kG74tg",
  "key10": "26nHLHhfmSVsS9BX7kGfiY382Jhmp1fDuoE2cMA4ue4i5S92jDLpf4bPYK9Ka8pLqg3jiR9An3dUjWcvfjHbTAmK",
  "key11": "3WNgWVNcrwHkwdNKXNWUinBgVsCD3yMyvUX28Ez1rww9vLRtPRXiahi9aE8yPyPjJLMHF6Mbhsw2qzENc3r9Api3",
  "key12": "3YAm95g6EkP7LvM5Hb2NV92pThYS33n8bdXgkZBxmQhcWPrwCi7uhZqBFDtkTjf4K5vH9evEAAstbTj2vAvzzNhy",
  "key13": "2EXbufhWpVAcB4GpsR9JbCE2nZQDQRx8sK1qi6Qnw8vaYFPLuxtNKFDUW2gCGUZE41r9ADkpMHQGzgFqj7zkfimQ",
  "key14": "4Bgspb5YqG89rUBhwxqDNW8vzmmsCDZbVHjWE2MPWSUWiz6GSFLmu4H2ZwAznEf7zqLuGzsEP9JbsugkBpW2gT4p",
  "key15": "Fmtg4NE4SwGZKfuV2Vt2cjfsjNzdvGcjrGpXAxWFqe9fzsJYHMNj4HEpLqjKr9AShfAGX6LNaX129LbFZucriDp",
  "key16": "515o2NPK8vsXzH8rgzEGsHGQyY2FbR3NCzhVvT7iNUX3PZuJXGGCgsx741nexjoH8d7ABSn4dTdPyHw6gQcWUyWc",
  "key17": "3WPuWVUXEZKobKdRPXT2DCneV1AMcu3ofH9rRVyDLXWQBwDnPaf6Jr7LCW3vUen1op1tdPbi5jBbLhLmScJB9acZ",
  "key18": "WKqEHAV51bZ7Jh75qLWnaJXXSzEfZrH75z7CiSXcyxQjLkYQ63CRHVTEiqi7y4pWxhxB4QgtY16R8eNXdM9z6WH",
  "key19": "PsqhNFdp8iAxtmzNY8K9BjMJ224qPF7f4SNLYBzexzy8jDKeHUhcsqYNZPaLoRbaY863UJv8nmEtbXx8N5GgT5K",
  "key20": "61J6nUnZ9TgYaHtK3WmqTcQiNED18TfYS4DF9X8aZHrQS8mh8fRyMUNdM8kPZkaDnZXN2YyCpjqd5MrJt721qoDd",
  "key21": "5XdxWc7pibFfcV4UNfY8qCyfuAvBmuuWPiu6BEyuuSapYNikjc98q4qpNbnSew5jDh9Mm7H2y2xkfQdK7qgSbxKC",
  "key22": "2zs6TXK9o4TMzSR5XDK1AHyt6SmzoHS4bF9KAk59XtAjcrBXLauPZRvqfpPk7fPJM3mg1VxzJ7FmsPK57hQWxkzR",
  "key23": "qw8xPyHab8eqcD78MPpoicax4Zbu1QwY3YEvuf4S79fYyByLGrw8ghtea7x6ihGiWtn6gtUz3HAGYbi94YU8u8N",
  "key24": "2z5iQV3mVcjBQH8e7CCrEFLMWdXE7tTEPwT8XoYnt2tx1Cp9ejqZdaqPViXLPdmFeDtYYGHvWwxsH9NoHdEvs7eU",
  "key25": "3a3k8Pa4NF7drXapNx8Lk7Z8iSbysp7VKQ5Kx5czmA9itgTirtELXTr5G5xpuhTAd9EJTT3oNFDy42biykFrtE4D",
  "key26": "gWMEjCKsivyDhKTwWuH8pasXzVCkn1pJiBaBSf73UxtWhKvYVzy3YtK2cFHBKCXBfy98kpuv7orcoW3WXNP4RWE",
  "key27": "56e2LwtTx4UWbXggc9FMLJq83QjttBrsLHNpZErP5FH9Ya7N1ZTnnQTfxgTUmk8zetco1XLCoTv6FhQ4N7xXkstp",
  "key28": "2HacoQPPr5VcHrvQuTrAyFcmyf6epcggxvmnjE1XBXiStven1hwiqKKSkYsMUmtBx34p5V1bDQPkJHr2fWXdCe1A",
  "key29": "5Lv9Wh36THyhdL3ouYDpqoQudZH3KijHRqWFbbRMQqrLTyNQuYmqDTY5CaezpT3mkd1inqeGDK7gVQbNidSosZJY",
  "key30": "4Rxw4SngXPwGeSeb77b6KntnNfohu9niixGfxacPAB6FWiXahas9ACHWDCwejnTQS22WHAQ6Z22NrWN9vD4kAcg",
  "key31": "4eVGxxGHmcVwigFP7WhAeCkMA6W2joffPjN44RhPZx71uDBK6wBSBR5imiAyP2mMNTFdMj1DzX2BNEhCpwV7CrAg",
  "key32": "2rvR1Gei8VHZes8pxTZBX2BEQHVRyBrhLz2Du4kPPJSHvDGq86csPBMmqwekjEjf4H7y5GZjpyk11Xgu8za8yUHg",
  "key33": "5t39hCYb2V1UCfwDezt3tsem1CP3PxRQ2wED5srVJ6tALbS4h8tu5FRG8GMyGKuK2gToiAswbVxxqFq3gz2u9aRW",
  "key34": "64BCKwCSAC5fVvqy4XxqbcCw6trCbaud5d7nvxAkgtiH9WCBnvbE6TRZoX19q8qZoyDiWCLW4f44UMqjohWb7Kvz",
  "key35": "2DAfxMDXsRpNmn8wWR51AejjY3wSiDZ5fW3kSYtMRfVRdGTi2RGhn89XWAxVE59U3bEnnUGVq4D1qeQsKELanrLm",
  "key36": "4yD5ySYGhrtkFRBLGdpVQEywSnsexoSgdpSeUChMYyPyq9TETHWNv5wGtgPu1aZY9Sv5ZLek7NGziFS3pNPM11Wn",
  "key37": "2HTXTHksDbbAT1X6K942cWiY3iEHHU4sghyHQUy8FGZve9Y4UUkNud9ncR79qYf4yFu9YwyewK2VrqUqMhV2d9V9",
  "key38": "3ZFp4Hmcq3LNG7smoJRkWV1q9vTdEDd597szEPSbc5udJN197Br25xf1d3V3b7MSUqQ35E9iCGaAoDjNb1Epx2ra",
  "key39": "3sbmPHFnKhVVCimpW8UXpSCJE4kWR1Zb8RkaJRiGRUggrR495TauAUkoUsSuQFYck3Gvf72SbYQXcqPQXA5fLkSg",
  "key40": "4vczS53p6UjuQzfki26C5cScNqtCZu3ZT6TDWBAqs6TnQcVcwaTgVT3SCiLAiMazZ2qLdJ3898xvCJBwQHMWhs8j",
  "key41": "4fVjAXsxLSPKrqQYid3r3SD7vxH1vDDg4zsYM97dtK3xTW72HLkLTaMQHzhqjWZh66HmBKn619u7BA35eJVwbsdJ",
  "key42": "ASxhwD5Rfb6mZ2BeuJHsXfyU5YMYt33Rg96ZuoZqbJyJV6w7rXG4jBg8uH2f3X3oTVGjquoCRQvGNSVPpvsUN7N",
  "key43": "2VuFfA6n6ZC7yecXCCt5dHiLuxbHH2LPzNT3eqBCwervPa4kHh6VGyGmDhBfXN9aYSTjFH7t6fX2fnxEBuWMKoWH",
  "key44": "db77TReMkkxnjZzEsZj5TiMH3PFoEQTaXT9DnefmBmhnH1u9fzzeREgrviQ1riUAoHLFgY8ZwtKGYwfvWmXWepD",
  "key45": "4ueWKAXttJyEBUScuSfU2LrDshLmCWmyAx58Tu6qmXSJMeNu7XGev2G133h5v8rKP3gE5vYagwYGwti7rTjZX8BV",
  "key46": "3BZRjtURYBx3ie2BeaoiMY2axhgyN71Us6s68D4PjS2Nf8NnvW8p1JuFLMgxhP9dcEc57Pc4kKw1hifJBoSqZMgJ",
  "key47": "2nnYhHE2n5AQ17Hyk6DBER29yYpvEcP9BRYqu9Cn9TSN7Lc73upt8Q4p1bUkNfaXdE6jG4vm6QdvAfDxv4RJtZdV",
  "key48": "3e1KCcxa15vfEYHvq5NRLK1MbLvnTbpYv3hu64K1PVQrpGAt1wHd8qarTQDREBqqPsvL8MDkeqDXGcKFzMMgaLgv"
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
