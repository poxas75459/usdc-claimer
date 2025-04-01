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
    "2oMnNFRQhErm8CGBP5nzPpoqGdWyuXwrKs5YKECb6iwAEQhePJRhszBmx4cRb5m8aXT7nCu5MuB1aunV11aDY3PU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41ovCmhvHECcSaQTxYBHnNGcJBJmKPqmfYA72mvTxD9ZBM9brTq4YEJ9kGYgdbdea5mypBo7LaS5ZGTDzNUq8gMD",
  "key1": "2wZXvJT6QAFbnW37RJpWRVjDRFESaUTbaDjuDYioJbcgUMXXjZ46e8AnnnBKZJqScZUpiLe54rbWjSJrG9whKA9y",
  "key2": "43ku9EqLokKU7HHTdehf6NmyAQyr2AgxQzzdTtwcPn6V3ZKrfGvbL3uiWnUhmJdjVPnQVK3qA8n56xaeYJMdVSMc",
  "key3": "2ruwasWnKGdATsDNahpBkLeMcKqCEK2xL7dYqiSy2tVjmK8cmnXYQCNRF1qoRjtKzDPZ5YPqUdYj9vyZaxEZHCsP",
  "key4": "VXTVMwwbipj9xtsE6QkWHwdrP26XuBUD8X7zpriSK85hPBoyspUxVpdqpmWmtBk3B3ri8A6XtqjxpcPC39tAnUz",
  "key5": "2iBaFnmYy1rwkGe2A9nxwEind9Q42mcGeR8aNzcDCf3JKUBLjcixTznfNLUdUMpn4ymZmqMkLmnnf9HWxJgc49AW",
  "key6": "4a5W87yRmpfbyvtSejFJmkameFMQNpXFGEAhSEZwvMthj1nwVa2TXe5qacJ7atBQZ1rGzLsSDYJcncKMKhNqosee",
  "key7": "4A8W3dXysSuXpSQibkqEYa3kTkRPg2W9BP88T1wjQPVjKiwpfGTzHJGeBBoPrL2ZSdEF2sBpuXks5hdvoWuW7LR1",
  "key8": "2f6uzDXfbvVZsDz2VsHdY6V4HpuKDZXEyQZ4QQ6eVjvB8dKyPuubQcqGBtzNRJ8iD4wEQeVvT5pVbxsj32GPY96Q",
  "key9": "5YjEJL7fyFePaf6LgCTFtE98PrpGYdvJMEWmj6J76iTU5kFp1syXqb6hwWVeMrhNZMmbEfgZzkMEorATxhJrM92k",
  "key10": "3UnPH1A8feNY1ZHjPNobJNSaJr4CNTTG9Pex9tzDqAfGszjrFJgvNM7QkELLXcmacS8qZPu2DvvtCJ9GnvMxucCA",
  "key11": "5D7sxXbKi4pPJZGTWMJVQZKNrwCvz17s8bSrVUV6pS24CRiMBY1dFX1m5jLetjirzHCwY5urTDbQ6iv5q1MyrhZN",
  "key12": "4hRWzaEePxUBWg7vouMKWbRknphge6oJLVnM3cix713zBV3KqZfFTFDrATT9czCAqvZCjhzKniTRsxTnpayL3RC9",
  "key13": "2S7fcc6wemWikqwuPJnWMw9KLTZAo8741P2eJZQ3W2Dq9EyM6sWXJ2Rdm3vZMzdr8PYtr9Y1E2vZMTRx9JXBSC97",
  "key14": "4PGkXjVk4C438mjx8yiL2yhMMdrVyHe6BzfEtcXmgu3N6hzmznsVJsymZ3sRQcKEcei8eZyh233qnP9NN75Gsin9",
  "key15": "3VtKLwJjf87qtW5o23e4S6KnagEed3VJ1wTpEhK4sRGdvDxcT6xb3KeDUgTetPKWEid3jRihyYphHjLw86UPjkVQ",
  "key16": "36NYCmuydTm4AzWukMwau9zDTKiWkMCr9e4JDo91ihxytq3D7AxApq19x5LkE6s6YU811pRvWHog3UeHAzjBfY7M",
  "key17": "2UcQAhbN4iwD4fUUYHPxhedjShEw6HaGwuM5sgXkxjnShKsDt5ryCPSNm3gAowuxch7jsYMXWs6UJxuRa2rJjF4k",
  "key18": "5tu3GWEMp9duGgkyPx5Me2ASQom8x8xWQRWaLJJzJhV9SQ82TUrEMabGhjVntkiciH9M46ihPr2ayU2qWekPm1JR",
  "key19": "3a4qdcKc3jYEXtEUrBH2AYaioxfTEyKnVkWVisrGMwuNwMvBGiQMZcAd2S3vnV2ESBg4AZgoZeTupgMsZVvUGJJM",
  "key20": "zw3m7xBo5JtE5cK3qsjzyuBvVvpt7Pbit4dH1pg5JWwJumRtUYCL6oHsqyFpwuuBTTfa7dBj9gjAkn6NH7TJtkh",
  "key21": "2xvVbTxb8dJUPiLi2oHRpa1xRXprLsohRjMRGAqfTfiB5a4vsyLsGHfVM7mV4HJ53vsRxWjPqxYXRYfM9NUApbJw",
  "key22": "MeSoZW9H9ig7CdkeHVCkXqheLurPm2gNpLrz6LahZYK63jM4VBoWFL9HUk5P3HTUoAFBiHHBrHvRWgyiZxuMYhh",
  "key23": "5fe6DobHdpV9Wu8ETtU412y21jdd6Ew9TWzvP94Y1My8NeR3tmUcxfXNvDUEXWAuHaWcyPubCrPRGBGHi7QqxbVY",
  "key24": "2TJpdkUgmftwibrhCM2iBGWeRj8bFMNepkXsYehMLGGj1qhwmtoWVCm3tUxHKs5nEpeLxTTYKWdrS8Yy5otyRksw",
  "key25": "4H54Vrbx2ytkHmoAbeK1wT1jSKmP94SvGyAAXS5iMsZ1enDovhF34eYoPWiBEqDTjePwwnicPC8pDGL9WsQatHkp",
  "key26": "3ZTD3oBhGP88uJ24MQV4cnig5R3eEdZyHiNwn11Z6HkDAGTExshPX97sFks1vrC1PsPtBioARHrHvtHf2RdFWZUs",
  "key27": "4YGjyucKDefzhqkYHazox9nibKPPcRzKXPd87gNSFUQGmzeZD4FD5S9Q2vVpHoWceh9VNsxhXpry49APpMD6yTzn",
  "key28": "4wqQrCUjus21hLtzRxZ1veaUWwi38rqDpviAdMk987Kr6Z1W6yxJFbGfeFUmht4Jm2FbGozxpsiD29CwfWeKpYj",
  "key29": "5GBDX4PRxwDWnnuFP2xxyRxtjR4gqXBQzfzD3oBuEqsSAnMyG5oqpvgAM1uDw1HjYVBiiZYJjDcDcon5zHNArsbG",
  "key30": "3whmTzvCzbW1LhNV762JZr7BbXk3o12WwDoFMFLx6BLkqmqakHmpeh7uFUxRR8idtJBNuG5owXWiH53hk1gzAVDq",
  "key31": "4oQ6zAoE3JhBHCdxRTF4VQwuovmZ334cvRQMngX9cobQN919Xjp2YpnvU47y8CQUBujdcB16BYSEyCj1X9JPV3PX",
  "key32": "2RUsPekGKHd4uRTRRwWRTxBPiswqaGrEdABxuvkHgPgDTRUgkz23ALsQ9TUPvuRPSvChLp7vmSYmnywZ8Ud2ab5N",
  "key33": "fjJNCb4Asuz4KaSoNyXjtbWaa8A5A8ULjbUTFS35yEUbNyrEZGsvVza2JaYxRXdkBaKEVeuVCLrTBtZSY4Th7Ju",
  "key34": "2BgiPdHuaAoeujUqtzQV3k9QPqprUT2F8Z6vNXJ139Ee1btfprj4mqdnH1omfNo4VchDUGd2Qtd5hH5QjoYPaekc",
  "key35": "Pwuz1HcuWpTHiAoqUw9FHrsi8KFNq2gTrUaxJp26WF249GrFMut2NiBoHoHbRguia94YJ5bvHhHJfoTf5SRoRsv",
  "key36": "4i9ZUfGzstmJuKa43zX3rComtsBct4bqssgfFazTxmJwc2Tri4dGurdjP6A8smPZGLH88y3kmPAjaYnaT9NqhzNL",
  "key37": "3p6EFVtTPHD1hKG893WTq4rhJeMCXGzzS9PNiQjihwmhkQmVSd8FjzRrfBqS8QvWvFrJGqDh3tJBVnAsuDztiUei",
  "key38": "t3mqUnQdXvbuVo18NyYkm3zoNUnTU99eW4ugnysXEmuEqaFatv6AAEDvYfUvexVfau59pwAvo7mnREB2e6ar383"
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
