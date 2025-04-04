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
    "3xAZrY1xiMqUPdxzJEDZdtiuq75jWBVQ9M6KScLuHA4kzY7TgzxZnNzCQR92DQXRmpo26nppNp1xo6xBQ4w5T2K2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yLt4qwHowe6vcrniEFwag5jFbzZz4E9N7S8h8Cwz2yaUiwuYRd1EwEYrhJ8cjicZiheEzVUSrjtNmaRigrHnNxC",
  "key1": "5LNXTDZ6EAJH6nrbY3d19fPUE1QBYSTPkhz8jEr1hhDHtTgCu1r1Z4kH7neXUG2sTNMTjcxaym4NutgrjcqkhW1X",
  "key2": "46iKvFCfvTmE92tnHJvicYmMmEvCZUTWfHawUa1rk47atcCx2c7NkE779yf8Cx2iDKYoFpkHuTfTpMYufVX1wnt8",
  "key3": "iDct1yQ3dWtoDoxonuxz4KT9SbgFP5TRr8yATUBXWgZGCDaXaAK9Q1Sd8DeVKwof8QUupdRC8enBnUAaShQxD29",
  "key4": "38xXdLWM8Q4vT21rWxiUf7hZYsbYzVdx3XkiZpDcYuoacC8zxLKfuzBCDyF12RRMG2Uh2tP4rsUsDRkstCeVR99Q",
  "key5": "33et62A3mv7U2GwhCSrfTPBnDR5zDxBhwvxrz9S8GzySwZ47qJRAfLnNJcRZsPAxFavHH8A731i2myrsHmWXDVYs",
  "key6": "316NpR5T4uZpcXKgGNFSWc6hoopMX8P44e6uQWCLh7vZ2TVtgftFFo4xWTtuAV5P1t8nw1V68yTfBCxqjZiQBuST",
  "key7": "WKMRtHHF1B3nU85TMXUcCQnosKuP9kiJhbiRPUfzZPLNt83NdquGmdEsXSSVkX9aYbY4L4dfjeLM3PtPFhkFJbr",
  "key8": "2eso4pMnu5MCm5SicWW2nWAgAXHbY9dKoFYzi9V2B53cc7jyS6V24Wb1xmTGytadGGjUR4gv7XvKMdx2k7iFtVRN",
  "key9": "2aiRoD4GWv13k24sedkmT9A9jbvWNh24UUL6u5Z8siv7PN1aZSHBjbU9Vt42e2SoUbcvqa3QYocS4NpsBBnhrxuc",
  "key10": "5NbHVyD6wFq3Lge81moWtxRzvFTD3mCYZP5R791psHkHjPxrTrWrueVXG4fBiu6CaPYb9Z3jGChvZqMM6RB6auQL",
  "key11": "1CypqirJPCWbb8FxDdXDFugxNVCVxs499NzpXcMhsZrqsFvyWVQy5nqAXGFFUjMkA3LuvSCkkgFrsKMhhhzL4HK",
  "key12": "2dmPyyheVuo8RwSj4cTucbKBNHZyV9tDGqHKaudMS1JuWWKaSYF1ciGrDmirxrV2zcfuppYVs3LaWtAFmRhKPh2f",
  "key13": "4aHjhviJpfaBztJ2QAvvvTYSi6yAk39GjgA5ew7Fof3Hk1tQ8kBfXCVLP3x3gZESYk6ybrm3VijGPudhzmibANtb",
  "key14": "2wAzPkvNCAqhbUsxS7xTUohRDBrp86Wan8CNyGqB1x6xDcAbDkR7SSpEtQKoSY7vC5oy4wbv596sRt7U9zH14zw9",
  "key15": "3MTpQDXDocEQHtd1kao4E3wMyQ5t39EhmNkAMSfhbeQ1bvGEHydCaZ3k63zdwHPKs8NhwMz9L5AfGvEEHpkvV2DC",
  "key16": "5zFrj7PpeedteXBaLkEnWoRo9Uq4DmuHvneNyoMZhLJHufY3rkEfUYSLwiXCSmLwKBMr7A7yMXmrefXzsqwSD3jy",
  "key17": "4ysUuMeXrHrbAVCqbBZHJN8RPXcGWEb43cZmJRsTiRmhJEGg5uTG1HnGPji35AqvFE4pAy8oVE9sGmTz9P3bYw6z",
  "key18": "2X8iQMPEYMzP2Anxy3mnMf5PYcsRPDHEtR8JEHTWrpMbLH69KvUrSUGLnoUFSRYpniSbpxbTeZwfLde2UEZ96sEL",
  "key19": "4QpWsdCQdYRXxT1wq98BSE19wNpejC1W5UoBpMHJPjVpgzqvECD4BYVrmTf97oPBEPxo8PtXTcXh8Ra4cYxnTnvh",
  "key20": "5BWQecHWquCorpGMQtDXp4HhK8tidM9foCqDECxXMUBMwdMBxwNCfyPhsjarQQeR7P9HSkm6WbhpGvCiAgUY6ToL",
  "key21": "5w5GG5ZgHrQ5fNm4v7hZZu4C9v7mhYevKinYKz8Z6pCmYEDhbyzsBZ58wXDhcPU2sryoDu8bvpAoiRqs5foWEBSa",
  "key22": "Xmy9tNS3yYs8ph3W8DReKr7WbJ3DAnQaKeQjeUGcKY2FVBaSGkbdNayVgEaZSpiGUTTu1dhAFX1SdNu8ps6pdho",
  "key23": "ywcMoNtP35o2uCNmWhQQH6wUj4iTwvUF7gr3URvYjmfaCookSFAn1LNVf2htZ62Rm5kfivsNhYL8pZ28wNqYUJV",
  "key24": "2yZobAykTSuc9SiXrrwFyCNpM6oKEXv5NEruhuyWeTMY4rxRDVyVxQbWTXWcrSV3CzwVQmygPfVkzXGzgbiedMSE",
  "key25": "2pu25oFwj44YzEsM1h1oQjWGfa4yFc1QJoJi91HJMj2nxd5YjrqamKY37m6y39jGZZ1Cz4U5okxp9wr9LPjECBy8",
  "key26": "22rvrhqej1vmK3pwKvWW3M88Yrt1em5XtwjUSf8J7ZrV8BC1BNviSwb7EuSxK6mKYLTr54QsjBFABsmk31B4Q4no",
  "key27": "4ARjVx6LH3XVXt6G5qMyGL1vFo2R8csG3JJW9bMPWMkssr8qgTeG6hobyLmqA3AaoAjjCagSVkRxbUgB8LQbaetX",
  "key28": "2EfeDZimzD5fATYbxNZSt1rU5x5fHsJv5hYPLjp6oyirofyTXuNsobjnRkzVUiWCcuYu7gc8abCu2eCmo8S8QJn2",
  "key29": "GY9ZEHJKYTsEeY9AgcLNcUEFKAYmAf597isYv3W85f9CPMoHSim2B2FjZcQY5Vr4ay5zSp8YxpUNnnauX6voCxh",
  "key30": "4mKd2dz3UDAcEPLfAkzHy3h4R8HhkYRTLg48n9q859b6H7VWCoPoTs9nXKEAuy9JRPJ61VavU5dh2gYacWBkMp5m",
  "key31": "65RjdvERPfhf25yWVrXA7wd63k2sCVqf4N4fbdbjpkWHVC1FdiYKJnb4S8niZibQHxijTaSnuSrz3jLv1YaVmpm5",
  "key32": "4FNxKwTmwKJhNLZRGud8AjmyausrivpumZqp4i23CByF2DK5JV3i625nKxiftTUSwaTk7zojACJuqfNvH65KN1bK",
  "key33": "61oU5sgWM3REzeofe1wfq29ZnNvMxSPwUXsDEUuoaGkgBRgNtr7zGfeaEAa7q1HBcPyLBhMQfPrXaM3WroXdGJQC",
  "key34": "2iSxd4YRRT7ef9kJg4Qr8jMfNiPWinuEp7KmZ81xdTko6R1TYzAotsu84BZQY226btVsF2HfovnjYc94f3PEbiX",
  "key35": "2JHFyLpVNvi3UDrPvkkxUjVu6966V9f66SEEumYQtVnqsHXXUn2bNzPyf9jRHBEsBAnqvy3yhd9QDbC663euae2A",
  "key36": "2VPbQCiNqUDaPA1upXRqLjuVtfPdNCCnG5B9qbjRRfosWL4snnuXKB4T9NUSU8AhXcKaPZbu4LTiEmSKqnA4Mat5",
  "key37": "41chdxnR23fi1GwywQScD8827cP4ni7396vxxEiLMobc17q6QdA5VckGL8Mm6eyXGXwQ1q1Dk5vSrdZDVoJrGiXi",
  "key38": "3jZswJejJKdcV6M8KZRBEnzn6zPpRxnBxNFsTLx6hB18khiCYGX2ptcaKj1bqMLSQhwsNTMy2iRU1XTVbSPirdr5",
  "key39": "3PocoZcqhbPt9hoUvSmZe1F7MdD3LyT93WrZccPxZ31c37qijSSgTL8qHQrFr2jVq3vsvdFF8Spe9AWGJm7g2f84",
  "key40": "2sbRDhKcP4cC1yafmzWFzedX24arrNBgS81FSijS2pgxyK5h3asBieCMcw5yNfMmhdQ1H9xMXxebxiesv4hjpnCE",
  "key41": "3dAdaRwnyLsViWDm7yKBwYApf9GmwTzz5W2Xh3EaSp68ApcxgdTiDoeoTnvHUNRtyGo7sQY9BYbWFrpRjjFbK7FV"
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
