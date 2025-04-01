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
    "2wR9pEdsDMWhmxrDgMSW9dWaygeSCsdrd8jie5uuBm7PCoaL8AmsunJRdTstUkQ5KRsTPK3fPst47xwze2oCpB64"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EEDYJjJyBgCWDCdXWk8n1anbGsYQbyZYr2o8K8KAHgho5dfgvoiqvSmEYPvcB9NFozkEfv8g5ot9jzVKzqTnvne",
  "key1": "4WuUxibfAtiqRUnbNJi4jC2GnzhKrwYDbRAu72QZ4HbLtpHJ9CQKcSUBfvw54DMgF1RYd5sWkRAP2Ph2YW5ovccQ",
  "key2": "qMkTmYyBxNSa9nFwc2Xigt7fh2Snwa22aB9GA4fEdNmbZNnxb3mMDxWkLKRcy1aPM4BtQ3jpQ4xeEVuQVB228aA",
  "key3": "4jk2FY4MjYyqcXiTomMXghtPJD8okCGGCU2ZjA5pNtxcHnxhwhVgKgcyHXj2vYZZEqFkicMJ33AkwtCPwHaanub9",
  "key4": "5WYai22qaxsHk56gpXUyLdAY9vTwdZdsvu7REG1GWwJPr1B9om2jnomHsgEgvfzAEDBBERLWTFdD9TSEViKoh68w",
  "key5": "Nu8iJT3NGBNLLGy8sT9ChKtgyTeqbhy7di2ddBjbfvPM9CkmaNWxJSX5wf3TJJ2Q2SjsDDFY9QjRmmfU1TB9owB",
  "key6": "M4J1sTMdhdbiLURTp2vAPLQw27CuTVfbfzwVgZxU8fPZwTf8XKtqAJ39XF2MNQuhM6x69Zps6iuy5ZJ16Muz7LA",
  "key7": "5qQvcCdUfTk536sppSWQ29au4ea6NNugZTX76c5DVZNHLtudv1Gn41qZhfPjX3VF8Jcu2LgMvdy3GDjUDkB858kN",
  "key8": "5PZLa1av747mfcschoSAnKmjdxzsJtzCp9k2YSwWnTw1pNJrcaq4gXThtcYabbCnms4tNrgATyPw9ZVTyQDPL3zS",
  "key9": "24byqHmSNkaL4mVPAtpeMHSY87wzzmv22j46XLZxzQXbYYeJsmEaM9Q7uNzgRyBDthhoaGf6Uw5ydUXzipN25Tkn",
  "key10": "4iBqBcisaWd43LQ2oBj4KQUbAv5uMYztJNgZHLvjQe9Mc19tNkVPGWYdeFnLc6jjxyrELGnEmPPEZBr2s3BK3CJK",
  "key11": "3fZc8dNM4aBnbu2LHMFbwhDkf2dFiDaQe4uJBpF8RMhJrwnL4Qv9C1XLxzc8TDdoCGzf8YoyAh1Dh66fEtJj9G2S",
  "key12": "4Xxd2oCBj2WtL2pZjkbkPxv4AeDXbcpjkWWLr9YmCECCBnFu329AkUriMMRVjfANuoR2HSXEdtGNd47kDrLcHgxj",
  "key13": "2zPuUcWTBnTsjiKue18HsnTCv9rhoBkx6kq1ogxdWuEF89xu1naYXvjoWreEKfgPF9qRb2hsPapD36KP17auqZam",
  "key14": "DWN6rJhUSb2HUNPgocq2XKmNtUMBPBN1u5E6fJhB7z6Sso8raBLG6ihCLYqwar2K5JkmXJS1q7ShRkSCCUhWQhu",
  "key15": "2rbzfdfsSTAxxF7P1LVDiKHGw19v19JuEMkXpDujFUhvPFGUwQ5H2Uw5kt4YpcB1njwjRcx4MWF1NgumZNpEPDPy",
  "key16": "PCXRbQ2Hwnb64gaE1pzPTHf3sADt5eWZvBm8fkkcdXAqMjMgV5oPVcSdsbe3PYr8odzPQuvBDbyEvwzS8ZA7EgA",
  "key17": "5Km2XUMdTFJ7ArwK85G63A1CHdXBtSDdCRKXZBqeCDbP8i4WgD4CuaCeHF7cLu7AA8xsFd2CJ1YVLfaLTcQ3Cq1f",
  "key18": "LPDNofBtakYSETY8ikyNRccKUjVtL2z8GTx9pmV6oSum68YQsNhWEs3gPS9c4cmy76QGfXt95QBZhoi1tmirtPU",
  "key19": "3KEo8F9CyAhygKPrsd6WF87dQZ9g1VYYNreSBhEtQsq7MTzGtM7F6WTYqD7rpGZapSaTBLob6bDS33KkY9SZaawR",
  "key20": "5qbZPxj2xzdz8KoKVttjZMyW5JFKZFxye78vHQgmLToZnumVKWoaozBTD9u17zZStNiwc8aZkQHdUXvutzUPtcWT",
  "key21": "5LyesQrkM8pQA1YqkEnC5b38fLj1bRHg8yBjHuehctMuygszwyPxTfP6vgb5qhu6A34knw15ektqZ2JHbNima2KT",
  "key22": "4eAjFwhJ3HNp2tLxKChGoZSc94CG9FLgrFJCFQe1nzLRHaXf5hvXxLhgdF6E14mvUfzNMfMMDQfx3J5ZazgrHiYP",
  "key23": "4fujn878cAmC4QsZrZWZaMQc5LwsRzJK6zJLVoHrRQiseuxPCC4Twtah736Mz24e39iFFh4UA9pyYnEawiKTxAvZ",
  "key24": "ta2K7xzu1Q8RysxQ5wA3sWcYucPFUKPZ74bbLmcMmLDd4zz4cD3cZUnzWhiqqiNFvZLQ1gt4QtDLsCJMtR939P2",
  "key25": "5AKtDwkzpN7M44PVdWymiwBSjrkgpno7NJjhGK3xtTeYPMZ6RwK9fgbXjWhkG4ynUybtDswp8BKA5KPqdH79cHMd",
  "key26": "CAuJhsbaAn3SBy1vsLWR4x6gdGHqrryf7sykdXyupq7UYmFAtMbzhSbyaPY2ppnB1Axcrkj42xJ2x61siRTdvfm",
  "key27": "4m2ZiSrUEtBAZV5wN92Lt8zugKQRTcCDAT5nocJ7L4X2Vx7czuYKiVtus2j4oahHbn3D2AJ8uD4pBqxFwArpt1TQ",
  "key28": "3mSxXiRGpy9BwX6VMmy3SDvrq4R8s62Sg56iEVwGtYar1kF8YezwjipTyp5Wzc2ZtViuEA2ANo3HjFDzNy9YyCNA",
  "key29": "5gBc7Dyagsza8zExBerPVYiBdUsi8R9k6qrCE687SjCdXM523u4uFZXfnj5nzapgRng8RDps81wGxGLspLVpcoU4",
  "key30": "ZQxiv3wTFnAU74H2EZKzymfyg1JmQTCA9Qr5LAwsk5FqPwReLezU3HK2dyb9XjNs9qmzT5sPhRm2Kc2ZmxpN2Q7",
  "key31": "59T1xHLpVWujq7XVVGs1o6u9mvKCBXDy3zNUNiTk3gNrQt9bLvszYd2oUKcdhq4esUAY9meWwhL4pzPvytip2DTJ",
  "key32": "aqyDBwJTiL4wi9LhTigHuLULtSSwnRSmTVbDmgy9HDKDyskvxFep6sxV1eYbAHRcUrU871goxuavUpkVg4DDLVy",
  "key33": "5QZM6tkRLKDw4nTtFKYxdr7p9Jn4VDghT5jW6TAz4dbJT2RPDr6p6SdG46GMTcxhS51c9k1WntumUgJ2F6kbqKsu",
  "key34": "2s1M2QqWBUQdhABC2VbHqfW2zdaHQn98hyEv283DsnvnzQFUXQV5uo4kA9DY3q9Gt4M19YMBVZiuSwCFRr9QXNyR",
  "key35": "5vFUc3ErMQka8VY46aiyrKK67Mjt6c6LzuwFWKgBauauiZ7H1gZJdewbsFQZNjz7rc1c5iAXBG7KyTMGtELQKDPj",
  "key36": "4CwQ4eogTk2DazfFwCG7GBdQXQp6hRfXy31u19aN12PuBihUMnG7JsWcizwubtsSHXwoo7RYXx1twmiFvXvcLeVY",
  "key37": "3AgbJhR8bXpyq25P5H667gkYdosF72V1ea8PX4eoLkMzm1w4KPyrjsnM8WLbGSyATTCRNZ6yUpbeN1My6SaaoMhj",
  "key38": "4CaBaCsuqL6dCByNbJgwJSX7D55twfFRsGdtiUeoz13HwGto83nF3zzbMSX8aBjEwmCW2rtxshW9VrbftpEZykkn",
  "key39": "2tyMomxjtZMmPmu6axAhD5bNtuBrWQyHEyEwi4vf4rrFTY1mEwPBJJ391DBonbyVa9JPoQR6Kwkkgt8hxFMqVoyV",
  "key40": "4TviWpZyqxzzD7SjoupR47hWNBxArSxG7tkSQbiTKqt9yhZGZi3ZERa5MCKwjHoi8SfPdUWstAspVnR85gfqFPZD",
  "key41": "4LDqqqgkTYi1MXrftgfN2fq4tTraCW3VLWp7FaxikQg4pdunk5g7ayBDM5CDqDNJr7JVQ6cpZ1cSM1Nbsf4THZa6",
  "key42": "4uKYpHjw4jikBpRj6i54TvkYzgQzsRMmfLTkdRSK5FrQucCPaWSM4UQoQJKZDNd8aYWE6SR41oXMNCANxJykNnjZ",
  "key43": "5ytSbPSmJM4iKnHUyKqkkd46RDUJF4moTkg1WiEBq3FnsRiKPSBU5bExUSiwVJPQU1bvSQW1yd2dagZNtXHMDKZg",
  "key44": "5XBv2pJRmyE25gwKf7P1R7fc4DNJbxzGtizfbnTjfBSx9BvNFv7JK1LxaUnzERjnggX3RccuHRtiLbPB524gkngu",
  "key45": "5nCcU6qszeUf4JyjdtXiemcfucqai561xPByyqUwf8iFjgaXXBBWNCEN7SogyESCHcn97mbMMsCnyZve8XVdfSxq",
  "key46": "3z8Uok29Bs4iHkurhY7QwNvrjaxtmYqzF39JPydRq7D2XxVznaGcNC2p9yf5BzTres2ysx5pdL5TqQv4Teepbf6q",
  "key47": "54iNPvnHSFrVCcSCHPw6MHvihQXFHtd5faZLBtJCtjMZdLkfc9GoyRxnWmW5zESqTq4ewHJRUa73Gvvm53dHKyWA"
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
