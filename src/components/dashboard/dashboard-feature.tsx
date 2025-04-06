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
    "TWqJBxgAGKwwxaF34mWE57MSgZQYbmTmN7JoJNHSGXZkbh4oRaiTqMV9udwRwXuAfUCUsr5sdA6DWBgEjnpBXr3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fZRV68u9U8zeMLtAiYHJRCvx2RFdwdk9K1EaYegNEQuhU4fU77FHzvhTMsozbd8mMoDv4pzj8DCwmuiFpSCy21m",
  "key1": "3vRC57GhJoa3p4ui1DdxZ8RpyqbveFTSK8rf1nGLrjAmWYd19RywEWprg2pXsuHi5BwpwceS6YEJrUjocUJyCp1H",
  "key2": "58QsajWNmtoMjbrJzaSEBL4BPTgN4ssmmcC53cZnMgZ1xt3ywoACSJVTumhQnKBE5UvqkonLmSrUNQYhTqRAqqx8",
  "key3": "4oHbdZgZ3K2f9rbcDbxakV31Qvt6F6V71aRysJ9EcnSFt9Bk7uHqCG3E1VEcEwN9ib3hTVbEK6YTaUg6Ek7pcvoB",
  "key4": "3fdPHR3JZKD5abMxpJg3n2SENyu4y1URba2K7We5MP4hjNzjYiQP41dgQa4s1WAHQbVdsnAU4muWQcqyKFX8dsBt",
  "key5": "3Di4DNHyLj2sCgNGmVWVutqNtPAmmZzqeuPSji2cVsDv8CUPsGvtX2QiXbqeadJmwz9vE7hxYQDxjKcAcJ5Ax6Wb",
  "key6": "3TD2oCRjDRJSACPzXK35K2KTk9Dxqz8aRGXuwzbyo1wun7TeoELSWfApeKmDd1q6aaE5mv1TyKjhwCTbYx8ZogSZ",
  "key7": "3jRpRycNHNDDSLtkLXrkntREyx9uiEdcpfxb85vZSjrWD88tAhBcBsFxhv56MHhopdGNiWpNH7Dma3ebQZCMxPs9",
  "key8": "5y1soPAFvv9mVmf72WtscNbD8gpc73JjQhBsRTRsACSohvz7adQxPTRwS8MZ4gWr6GLPWfxVZPcJcinnQK4UxZHj",
  "key9": "4vgYVaYVV7wipQeTrqFiC4ekQkdmjDajaXmUh1BHk1xPCG3fnDbtDC47vbzE82oNJwKG8ixEKNyRpi2CjW8LTA2w",
  "key10": "36JrezWjo1Qpzx7NrEqKPigFHGhAHKzT9NzWnwbEqT74i2APGHtAeYycoXvL7Zm9Cy8skVWZxmui7Yt5BE128Ren",
  "key11": "yoYMAFaRG9nXaRq1nx6qo5PuWBsBDq6vWfYwFPV8Nstm7HPWv6EAJz8cfUoznQ9bxK6J4pqS8vPc8FhSXmwk8ap",
  "key12": "51zUXE3SWpTefyPoQYCeYcmY4f8nM1CF4QFZeG8y4o1z9RkHYD4qN7zwdmkSLrHpKphagLaUD6BB1GkA62JebvQG",
  "key13": "2vYVr8bcKRgsh7XuTKokpsbsW2MU5dvrqw3YdSA7MM3gybr5gh4yUwZUsF3qYga3AtUWUG95xdyXXP3etvLtH8t",
  "key14": "EraNUpYWkCk8HutmNVKqVdt7yFHVTvXU6STFanwaZLC15aP53kL98bBHBcARPxQRaEZTeVqVm4R69R2sMWpVuKJ",
  "key15": "5Gp2unZz6tBcJssCSdfY9fsiGzaKtTdtpYSVXirKSCCTGDEkWNEMVp2SnCxpSnqAFoec2ex9VCTXJP7Xdjy4f591",
  "key16": "BF9sqxWGcSujCM5QPtJtxBtcDyYnDZGBAmi9yLAjbwVPjBuAZN7g8NNrPmW6XKkttms7HyitkzXSStKfwrtJYQB",
  "key17": "PBr8LReToPKjjKsH2ufPno8zTbS2Cp582jbCHrZkUB6tjxdHw1wBK52dkiwnS4sxH4K89s7UUHYdo5yWVAer1L8",
  "key18": "ZsRCESKM3tXRfh5Saqi6Guigr8aHcWmKP8oAirzB7fQJivnQVaQMynVrQ8RY57hUraup662BkrtgVQotBHQRwrC",
  "key19": "3nJeowds6DQdiKW1fcFZXwWWDao6cZwCm537FgmphpHaEWzdU9aiSiBVYk5T2x7c91XMMhsrmCsCN9PrLKQUYtWw",
  "key20": "5PunyUCQd8L8CzHsZQ7wqYiQVuAVNFZxgnuwZECKYhCTFRqgDNdTu8nB4dQEQtBivT7UXYKno7qPtJBRdACDDfWJ",
  "key21": "2m17hDxvbBhvg91rX4UDrTkbwsjX4DTQMLjKRUGVMDn3CvRY48bfewmCtSTPL627M1SBZPU7ZLRYgsEgz5ueMjhE",
  "key22": "3mNHtc6ZYBaEU4imC94NES1LeS7TVS3r2CFETvSocXLZVsuxVekojf3pMpButJXQDSwEd7DayHQuoEjW5f7TxWaA",
  "key23": "2jyiCLpfb6yrVnjfRaEpTtw5tKkpVLwoGarwKyspRoPWBhXkuWEdWgKCoKiWoncKBJhv87vdoRxNpHnfeEgKhCxS",
  "key24": "2pvDZ3ekZweCpUwizL3JHMBXsL7pWSPfgtqrFtGUiiz6742sivTPE2V7KpAj4UsjW37C2r8rdVFQShds1P7Cpc6E",
  "key25": "2HZvUoTcPMZnsbPFgpxdoq8uiR61DfpaibwFxapSVmWr2Lx5jucQRxALrKuNE6ESsE8Z9wCVx48KwygG3Tomf2ys",
  "key26": "ARnGpwCXAY2Ha2D9nuWDs5a4Z2GQFnL5Ztfc5YzN2mGTZC2Hf1mc9emeMG6ypS8Hq4y1tu1pxEfyo62unRsNPWa",
  "key27": "51tVXhthfqHb4mnqNXSnPDZ3eohjBn22copdYWd1SZetjgt75vTSBoLf8SV2G6UTNf23UySWTY7JfH3aecAmjEDY",
  "key28": "5zLCn3GnuVynr52aCqyEjCfJ3FvFbjyAXECkxiFGsyFYr42h7x1Rj97P2ZmtyY6u96fKWhf11JxGDSD6XSXvo1XB",
  "key29": "Phamqg7nkDwA8rvDHKTCDfic3Kzw2TU2szYMxeFL7VRBDViF4ndcoLvBhCZuSTTY6641rLRd5aZbW8QFuGyvxqn",
  "key30": "3QccD35djsUR7JxdMjEiJSa6VDmwufv91PncQiuCGpAHu7S8VcBecyUybwHwSXcWumoxcHGpAUCSo7Hp1qnsxGkt",
  "key31": "56iAeWgvndEAPcHUQeA4EM4W8u28ukq5nbrtHMgVGTDxZnRMnGHjfVQDSd5av9YNKAX5wak5GM3gVSLkGJHFAdeg",
  "key32": "4Pc47eWgqHTfGYfkLUo2bx9TjzQS9TH18tDWcmJNFez2eiEecS3oG64EZzAJd4yRDvjbYhZQjcW542SV94NAhXEZ",
  "key33": "2t2EwhUhyQqbBJZq7efwgFqv9YnYXKdmKPHpR1sYJDGeeUtPV6hMT7UaxjoUMNAAwstm9PJjo9KY3DdsL2JTnCN8",
  "key34": "GTpMj7fYMoLZroiGLPMwYsmRuiF677pPGyWnbX77vD72ebHNbbNoqR1tsHd4UFrCNh6KHdU8yYkg2ygMohjwsou",
  "key35": "tVaWYGbXPiqeXdxZz4sHV3jTw9ELMTEQxLgrcYSR17dRPfsWLkkWCe3n2mUdVSaAMiDeqPAnF3YgKgkqmEqwmyy",
  "key36": "4Vp8TdG79Fb6bfriyM7sUcFNBAX6bCa5FhTAm7NF1cbTwLP1ktSTtfoKTKPm15C3UepGsE6aPWJH5SmkJKoa8NTX",
  "key37": "5x74genM7PVt4tAHbHiTwYUFM3HyU8xXw27HgubNGgR7ftWHMdeM8RydyQUK4fDhKVPF5baacR2LkTv1JLSwyNPh",
  "key38": "3JcGhB1N9qmrc2WHakfYMNkqPMzKkRKuaNHvSCqScgXvYo8zVNhyJFDHBfAmJmk1dNjXZzofqypb6YDqDD5zbsCj",
  "key39": "5kW83Ex6BYHehBWdxf7gzU54WsPigRmNKankRJs4BkeDryB2vycdgnLeoRJK3N3WaUngWk9pWW2WQGTRVCbc4g7D",
  "key40": "7cXCdnQpTuRUepi7j91iKTMBYXd34HnfiszhbUsdifLY4FQQeSDWTip5gCqrATrvqJ5JxPMDQs5xewsDjE4VydB",
  "key41": "2AmLTfhgHNUFv4KJz2azt1qFC6RiyHmar66nSyvQtFsNypfFM7Po4RwhtHkz59jpvJBiRDuqRm73TtedeNKuaHnR",
  "key42": "2h4YHmfqivAHrDawz7HcJki9oysnXomtj2ee3rYJEyw8zuUV4Knw4hEegXH33KNiMyysU3dy4EZFkFdzMntvoEfX",
  "key43": "2WjQUYCxxd9VS4eRRLg4kUWUxi6XNNSd4VrTR33JAmT6borjjVZ2zGfe3vGMEHoMBAgiavm3WH3Mgo3SKjQG49ZK",
  "key44": "4JDVFKxNZZHWb4PuEsYosEchwVCcC1bsqKnMfLju2VMMnWv4MyFzyJLstfc43iyGWmD3FkwVdyaqgekrUxvM1BYD",
  "key45": "23df7zSAnZTTeFEo7su7H7Rm4aE1DhU9jh2DoKim3J4YregvvEU6R4L1AwUew8bafFWGRPfwq65FHSp6c7kViqo9",
  "key46": "5q8U2G8A1aUHJ3wURpyEcHsKA7J7DWqyV9iZXYQrRXC5XHnRBzkMnhcvnzacsuYf9yXSHe35matsQgEnyywY6PQt",
  "key47": "5yeQEhe6TqQy6wrncv1TtnHa4sHZdWUttNQ9fTVgaMuhQ8R5nzXVJvvq3GN2nybQQqTgA9gsRdGHYgYmYG3NYs1f",
  "key48": "KJew7Xojuv6iXZcfUghUEM3rHWXVQbS7ngFcFYdyUSGxyYyqxwopybHnpTZCPAQMXqVBytREetxR5b9DDK3ijx7",
  "key49": "3MniXWeLKmnWLHrVLqrWoz7VXwLQfV7hPVi2EBqit8buFnavzaKhVsQb1ZbvvapfiRsWzgZCWfegVeSY14Y9s7Bm"
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
