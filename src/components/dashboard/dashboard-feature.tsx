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
    "47KqQuAsWWGqZiyg3Dx91ofufmZ1bRqgjetZdvFGkBHRapUiEUrWDFmjd83HByEqcAaSuAa5Mom4YMHpJuGQ5KF6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a4y695GwvJKv4XHYB3x4X12XUXDsD9mCbaUmExtyqpGnoaRGFGZ6RTJT2q39zA3eQ6yUymQLNgafh5sX7Vo8Jt5",
  "key1": "33B7svg7Dpup48HnpEnx7oeV8Y3HtjZCMYVN2AVmsCyjo4MKcwaBxwhXPeL9mJ6k3KTcWpxm57CWeG9bMTi7eBr5",
  "key2": "26snnz3wSrM7jCBLY9RzSQFbDeuCjRzCeu7do3HSNdyZvZBqAPjrJTMHR2iZ6xxz639XQJpbapEb9tc3n5AUACm4",
  "key3": "2DACJeZHUtjTNzTe7xN3AkvSShwf1YEgdEJA9sxgpSCGmTDAunApqfSs6oFDu39SCYeaVYjGZWK4jzGcLAineQfo",
  "key4": "3Sohgay7YYubEhL4UCaAXYS8EQDFHvHAg2JmcsJGif4qnYPLE348yUUagECHwSp9EyD5byhfh95hjmnYMiH6UgmK",
  "key5": "2ZZ5Q6uu3kCjh6bh3jZ6r5oBYkE41vWny9Dy2gKi8Yr2fyhjxKJRFyfy69yRr9Xv24eTdtNkt1oK8rxp42DaudQE",
  "key6": "3qcr8rypVpr5UCeP5hUHu86gyZWt5Eqh69zxq3JMatnwFq9SYKCtSjSjPrN16EARsiDwVV6EW7YgYAkkV28MFSMJ",
  "key7": "2JQFNsY1L9eR3rm7Q7dvZ6AGwivSgoKmyN49mfLzNX6QR6CgYbkioDzhN7uSJFK5kiN6daQ7no1dkBn1wGm3ogcq",
  "key8": "2MDzMS4dwTbFj93wmMvYuoLBGfzUVJqM9Jena4Auh285MnYByFTD1jLSJwue4TV6qkct6XVGAzq6nKSuNSq9Sv7E",
  "key9": "D5MzsfSGA46CQD8UovHnQvkgDMJcG4iSYg52zWWN57ccmhxCKpqQC4wKUqK5pZVGM883AYg8FcmrpNQAqhhPMoC",
  "key10": "645btdLjN8H8FcGZZgmvxi2HEwayQUvexHHyCeeUqd3xeJ57d93fcfP4gcvykT6dGGwLwKWFWB4gM7QmXdjgADtY",
  "key11": "46SnHP3eFJepUyEZzAviP1XQ9eGMS4jATC14rNs6WscGXEYZtgsqjZ3VmYJoBMjQKSAgd6sE1Lt4fhecXzm64N6z",
  "key12": "2snPMmqWtmeDpghiMeqtg5rLgtK66cAiMVSrUNuSemgogHfWQMmxbES7j7ATsTiJQbQDvx5Kwb9L2pscfJ6Unnkr",
  "key13": "PhKWrEP3fgBipkUSv2gYNWJZCj8uENduYa81Scvtt5qpnbQDwR1LTY72vQdfQvgc8GSi9kzLhqraQFqbXbFkVzD",
  "key14": "2zxqTVJDWE4coZjBniBLeGgJHeGTqY77286DLcw8VyRTxqXmVPQ3EE4aSEe7XD5Ag8EEn94vdFEYxBxv56LibReg",
  "key15": "3pdg47nR2JifyMRYxwo5GtGuSyKNnrM5Xe4WjyfuqwUi8WhrK1hi7DyTJM7PrBgCzrDtdnP7twWq7iAdXLjWkqHG",
  "key16": "2yMwEBvYv2cHMS1RtYk13s8VgwKPr529pZb946V77vfJW9CACJcT6ViZoW92xDMAr8VxffuYo7cKEjwWHYs3ZLPE",
  "key17": "ahuvSjHg9cx26TbZhhyYLHAGiC1n9vhCEdYYY3vbukmfAeWTJmYyiNtTtPfqNGNQ3rFd5a292AD8rc1eD9N7scG",
  "key18": "4EUF4siuczCpK8orums1Ktp4Erdnw2UMCYS6N45VLmL9fQc57515ArWRZXNXEwZ4hYAcKWRmX7QavdWEg5m2jD1H",
  "key19": "3vCizFuTe3WDAFgKtRMbzRmdAefufwYPXVQYyozgPooBiqFZkiiLWKx7LrEAiqJTvrvY5yjBQHr36USAFww4yKDu",
  "key20": "2VieUXG8moe1ZdtsUsCmKtGgh7gNHpFQ46F7Pksx2hCTxmKLQAMnCMwL1baTXWvfztu7Wy9NZfwveDe3VH9MDVtu",
  "key21": "NTU5HS7X84H4awNEFPhJnXPwxLF7onyZDV9yHCAjX2QzanJQHd9u3vn6mSbanH2Y1q55X7Zg9pvhFyz4PgkPEMw",
  "key22": "4fS63Jx7cr7wPyGdghJoR7Ye6KpndkdNEUCdQwXpL3Fmsc88UGa6zeU7TyYgtdQmGQP9UhQnMhVnxMuM7ipSikUS",
  "key23": "iqFmVpzLNT1fbproB7gpJSYjatjQvDJDvkbzCoTT1MXaFAxPnq3SzDHm7cWAL9MQkrKcyRq8APbuj9C2cSFrs2t",
  "key24": "31Z7aMLCxqdc6qCCw2gkTAmwvYyaYK9sPnv42DH76C3ThV5ZKfpdmgfbj3jcUJWvXK5iHMrn77W5rFiajVko3CCB",
  "key25": "hqEw6z98ihiMSZwesHR8Noe3ahJ1brLG5YAyXmA6dirydCVTAVp8cprUWZDBPazJ51kWpdnUGVcwdAEcx8JqeK9",
  "key26": "3y5KMP4TMK9QZVM3avwpaz1Ebe6V7d1rkAtw4qoh9jojgTTd5vmsy9pExZEuWUeMpaY6hExjbjhdukxYoB4FPu8r",
  "key27": "4ooEAW341AhNxthk2bfyP9r3xxVpsJZpCinEn1VUfh6VrL9wsqW2BUvzupMHtRTqDTnitbrq7EPuJSRM1E8MaRYt",
  "key28": "4Uq2nMbHSgLb6sVx2Cjk1io59vYVR3232E2yLzuxgYfdhjMSymAiwP2SzKpmVu2Y4zX37HCmdKxM8ppxBhkZb5N5",
  "key29": "4FxKipvDqABVzPoAoJE6ZepN6QxHpNnjatXMMpjLzycWDcsYUUAFEZYH1JT8MsPUKmsyYyP3nEgAMsQjsJ58LTER",
  "key30": "AJMQyGJ7U5pGtZwhhEYiLX9SM6gVaznYBedtwP9fGsdyp2EZmG8bW3cqWi8TK4YdaFaGEHyGzME8LKLs3QUwsHb",
  "key31": "5HvAKZ3z3vSf9frpyViJ8eERGRdEPAxBAc2245UswdcKtfNMMa6pMgadSJpA8ezMPHfbFGpxKx9TN5qwbnCX2VoF",
  "key32": "2axsLjSnA8or6FEY83jKypf1Crw25xdLKnk6chDgWV8YjZZtzwdibMY54Jb5zeTa9bgM7DPZrWtiEeQCpybW1vtc",
  "key33": "2Xr5ui7CU7j75PjdpT6kzdM81DBLHdDoDo7DJU5vV3G8gJcej2gq4YRm1hcPHwRT1pEi8Hzg9hkNs2JPK7VLCMzH",
  "key34": "3oHRpnWRPGXQdmCVNj5tDPkXTXmGN1UpPCyuBwoQtYoDNuXNMQ2ViXLJYmPqXMYgou2YhZNxXTN5eQxeN4T1jbXq",
  "key35": "5rBaSEEphTXfjDEFzKy32E2me7w9gJ5rtWRtUgYT9rtHqzLuw4DeCw6KcMMATEXixwap1Czb2TSmCfTn9ne8SAMq",
  "key36": "3N8uYKZ5p7V8antcuuMUJzRwCa72p7GMPpasV8bteqCdan6Cii3FeGC1rnwg5ckifQDBuHDM7TQEUNdqB1HzR5NZ",
  "key37": "2sbQcwZeAyVMyspMMMGzoQHwG98DWjCKJartwYUXaSPZ3b1Vq8CdmDRQqGLNWs8V3HsrsWMjV41mjsiiiuj8GRUE",
  "key38": "DYkwdvA3oTkB5tqUWtavvu5y6j7mWNiCWZNxbcmkWvfTmWbpn6MjVWtyWi4RP2mzmG4g2ruQz7iAaFDTHPBTQLB",
  "key39": "623XxK18mKU1rTqBYBRFfgY3aiXRiJUhSeUT2PWBfco3pMJvVM2KvMvmQzbHtKWESSPEiXzYzVNiv5ksUcaY43PF",
  "key40": "3gC5di1gNmi7KLiKsefTWaM1wfJNZyybtjSYZeaJxNoNR1PPJFbwPhG5M5epQCCwzmpyE2zFENSU9yD1rGyWNzyL",
  "key41": "3CdTJHDmoy2XrZSgUVnMQbsVvyMJC2fU97UnoKVeXsWQ6wTSrMNuiPJDNd4zeCKuRk2iD4xZEtQssXYymG45gXtG",
  "key42": "5wgr4mZuepVfpG7dhFeAdWGKHBGxhkS1FYBdmFr3dwRGLJoocDZtfE3QGk5RAGrbZeoVapayYXEVjpHSf6v5Xi3q",
  "key43": "S5pWHE4TB2X8iuchzN1N7PKdGDsUsh4KhLSZfMvfXQVYNXkXrrzHAHwK2rqwJLDHjXqKpk7aWWXDNPKBU3AzgqG",
  "key44": "3ChS1rrZhBqyEvLXVYbWouuiRpUoYdgf9b7HL5RP8nLgy8zrFjSc7mYGPBMb8P9nzueUwkij5DVVqMkBWVenT1mw",
  "key45": "47cgRLJr9bkMNzqUP9tVvWCAwfL731uzYSNKPEFqtHqMRdMPaL1XrYJ87eZf6QAQZ9i8EHW67Fwy32K4tEWhb42s",
  "key46": "c5PA1wVuVz2WmhZN2LXiHKokEftZocHLNpLktFjwibpuhAskNUWy6CufVTecJUsWf7bW5VVtRCQfNzAth3ZWDHU",
  "key47": "m5jm52vsFM2fbhKkHivsNcQH7HnJjCG5o57AiXxBnoDkNn3EcUwYiVnataekgMfX1mXdrzARt4VRRHCdEcjA2bv",
  "key48": "4cnWyG9dz6LSCNmJb2kaJhqD5GRMaGpEqXCtq3wXgkvJNcWWwFUTQ17L7o83tDxqDdAP5qVv5ogqaxCJGZRbp8Qi",
  "key49": "2VNNUrwwrYGtNU2ia9bFqe7GYkgbBw4hFkZSifY6bGcfDUnEDaxeh6buUaZe9MeRifayQTLmVi5oJpFyRbVWwchh"
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
