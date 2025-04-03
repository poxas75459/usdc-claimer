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
    "2sEJeGUmRuWGYJeevc3tCQgQADN6TVShut3pKJVTuTbRzrpMqhjXbNQNRYk8KTB1T7AfzrzbEs3GrFWvR6D9yjUS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xSoYLyT9c1kujeb5axfBfS4L6Mf8Jafmk8ho7iuQQ4Cw5PtffyzJvyy9fuchMzi756Jgh12spbuTWgiWKqDKj17",
  "key1": "5ivU8vUWusob8uB53pDXo79FfyrokUtqwMQgruwCWc1VoDJaYfU7zjpLvoyy1iEc9fMVVj71ppJ1wSpY9g1DkNhm",
  "key2": "2dbA42kFC9Pzpt1R366jBLKv4HCVE7US48RrpDLmwRFE4Nya1xDM7L2Bb51ohwG6gtmfXwMGNtUC8ukJ7RvTSPPF",
  "key3": "dKLfzta9uey58xZc4KaTfgjbpQ7kDTy5XNsGc7prxBuXxR17YE4FMke1a1JasEUywdjp9X2rR2kgXL5RkJhBD6H",
  "key4": "49Sq1mVZrNyyb1VQ9Lw8KBzVVL1Qf8Ky1op4iFULTET8iVMCXVkPB9jYz45ayPsGJPBVsxH8WGCz4KY1vd3TX2C5",
  "key5": "5StUqgbuBpbp486PeyYrqDGihGKq2ULsRUQoSJozsiBjSkAaoDeMXRsuYfYCbZyjUFgBcSzK7oetyJQ5hrTNsCE4",
  "key6": "3jBmUJFHHQgqkFVZnWcGRcuk3cHmMBS5Mei7nNPh9i4XQPWC34v27Wer1wJ84bZn7BJJiXX4W3itGD2xqRKEKELm",
  "key7": "5RDfxZRQXTi9Bv6tzU9XeH1yij5eHD7iNtsbaukzAFVsdCxt3mhfCgoC5fs7y4TuR569X2wKDnPLqZ3gStdX4Bje",
  "key8": "3NGGSmuzSVFeaH1hTsitGbvJbqh7BH6r3tMt57g8txRPoPaKDvZmij87ctEn1dVcdHRBeP5iYrbrZwpi78NPM8gM",
  "key9": "3SfLYgKytbk1jZo1fe4BQ5t4kJbivgnSt6o3j6WDGYd69VJFotp3bsxnRmAspFMLRg3kTJUUCh7CFFGKuZXowcVY",
  "key10": "2bgRBaeWnWwnWUn9J2dSGoKkaBPnBgZJdoGgP58qePb4XUq44k7XyBEnHRVtfPM1Duex44n6pLJcxKH1dwqe8j2a",
  "key11": "3pSSFH3FE7b98y5UTnb2LuXTajf2DAp83ff97gJz5eeQjUE5uC4DL4W4LkpcZsLbGCbuBuuQxhombteV1optF6aZ",
  "key12": "5hXVtHLgmupjGytBThjuMTjWVA4KKKEx8px5wAmf9AhRichUrqxeMqVMrdadNxz8wyCa1YysgpChYfeCCZtEHwXN",
  "key13": "4cHG5jq44qG2HxEVcwwux9o3Shi8jawf93wPSidVbZQtZWeSTzrPybEgPE3CssLvF2jeMuPtA9CNnkQkoY2ELXd7",
  "key14": "38R3KEwThhr4dPbdzhHrCuFSxc2NAS69pn9nDocNiRYuw27ZcrfNh1BhQTRrnqUgk3Rq5DndiP2En8LpZrs6DdAg",
  "key15": "Aa13Xn2TWzatfpE1WednZ5nshcRQt4EwF2x9f9GkRZy7stcZLfX3QJ9KdeGSPMP4HxyhWnKWm5SMobjUCjtoaFg",
  "key16": "XEc4cuqd5g1N3D3yRUoLaHdNt3sjHH9UhwigEjY82o48XUZsoY6YK6FD1xSFAtYmSogxS1T5A5Xo6nXUdsameBf",
  "key17": "4AbNmzSFcu5SCpYK9TuXQQMgLo2Fc3io8YVUcUdBHB9uLWAXvYbjyogP9ijm3U6cStp8jgX2kbz1kFUUEReV5SRZ",
  "key18": "39vuFGik4eyByhLNe7mAKYSkNULRBSo9Fi2MsyfPZAZFgYdwm5QQAfz6qJ44Yq1fzffy8TkAFqTH8HDk3EnSef6N",
  "key19": "4DHKorTvmDhWxiqytu3qBnCZyeXqobfnXooAcdaRvDsN5ZaBSfHxyGBncb8pgBRbk1KbHet14UsDin6cSzBp6hDv",
  "key20": "uN8H7xbZUiSdkrx8QSyXmRWxzZGj8GKEFnFBUwdfyehR9ydmiFqDD9BKtyhZW3fhRg8caXXdrCVb23rQZVYqTN5",
  "key21": "uKK3XwLNqLN8qbDWATRJ9YLv62rQg4vpcUsMFQd4ctF6W3YDCHLahv5iFUWLfNDHyLGWeMXTvDLCFZFzaX8mLi6",
  "key22": "4Uj1iVmeMzn7htFEjvq5fBahGsPbTZRhjY5gBoFisASCGNQJe4fXFG5cYCnvRvMyimpAK5nNK4Av3xC9LBexgLFn",
  "key23": "NjPB2KinYcPfgNeeCKEUcwbxysBemHHn4bevnCooxca8yLVgmQrP6zGhpu9FQ9XWeE6Q2x1WU2R78X8DTa5YZ8f",
  "key24": "5xjnxhnBT3Bt3sS75FzSz9dBTkXK9LMfT9QEAkPrUXL6YMbwKsMQ9sH2srsmGU7NPVGjrytqFiDAFUJoRmx4HaUX",
  "key25": "3dPjX73EGLY9aUMwp8HYG3AYGNsySvKGBiHWznLwShu4yYAq5qxx7QWUtcVjYHV5Z6FW7GFm5Uomtfiqs8929AP1",
  "key26": "2fs1zjnLnWtxjaYDb8bDuCKBqxp9VANngXadvQHfmftAmBTBgjh4fcfexuk5Ck2kPkAYGVXGD8VZscXKm7ai8q7o",
  "key27": "3hVEuwxDjRGFjM6w7PCtsfcyHtN3kFdQPqFxY5BpWPiyFU9NRHFGVNuJ1pv4MtGGTCobuxX7NeHictK7e1P7rtWe",
  "key28": "CrjFLjvGjB3N6HPFddxYXBfCQKpVjMuBYfNU25cwmqyPTPmsYy8FXftCpaN917qKBMCMXfahkgeKdtgVWiwuTe4",
  "key29": "2SBGB9VCQcGFHBbGsWsqucLgtGDwzaeuvGESMxii8ZaqV1azr8X8U4McLHHRSvv1XHVcRXMDcm9adLiSVtyX1PvS",
  "key30": "3hchs4LopBTLqfEyXiXJyABwEraNL9e7aDwvDo2LsnBHW4QxYaAEAo7zdihAVtTfk2kbuoMFzs1A3boK1xw7PECJ",
  "key31": "XbfngPFrEmyricTdsSFK5GXkKcAunmmo6BibBDHg7etDjMJQy6ZuHhEsNrjuTZYgQGvnjDGyCHzEAXwoKMbbbj7",
  "key32": "4yQY7quY4xLze23q1JGk8rv6HbcWyHtHUNCBqxX3RFoCa4uVonRyaVsLsop9ZLQLfGUvcs3UdyYpjhhpwvFMwgJa",
  "key33": "2CX1VSR2JwJ2onjUSiKmJTTqF5ozzJBuy7rAUmLEKZo9nnabBWzcU5XU3H3WppWSvgaHmMq3xEvgkZsos8VmmZwS",
  "key34": "2gcpbaMiDVoRi2cYoa2VKyTk9L7Yzig7Zp8m6egX4hYdPDFoA6ENZ6i98JCPKEb2AA5tbMmrznyfQ6sM9337rKB3",
  "key35": "5AEDATCnFFKH4FE3KoFKZrxQqisA24rzqhcgDghd1ZTaPUPUqUV2VNEdy4biMdqXLcsSCXzTUHPEAh6E4LwMjidG",
  "key36": "2h1cZvmqAdPKvvcQuHFqrj892nc1iywF87QyQjFgitzeQLizWbaXVVyZNZvYEjE33poSvcmZu5cBjLXe1F1QnAuu",
  "key37": "gffFvUSMCU24uGVY453hDhPQDwsb8tR5P2q94FFFu78izBQAeDBNhT9bC84srPfJ2YFe9EJPnZJYwdMJKRDfivz",
  "key38": "26TJoiwSNDmtCbpDTuCGg1Bbi3jkNUz6WC5haKs5MmsXcNne7jkRZRQPahfFJMDeqDqBR4HBY36ZF2gN9c3Tc92c",
  "key39": "59cZTBeaGsM2XTQaNUzUuCxkuJTGwNzBRd5h5jzu3yYjtJcozwvKDjR8RbazHirCvzgAAPhrbqzZ4niENEMPdqeP",
  "key40": "56ZaKLYjLziBpyyUhvjozywzheaAq57vpAjGBagJnEXWYnLfdbcaZRJ7VRt6edP7svtCRaWxDJCZhFtuWM5AbtGx",
  "key41": "45X8ubyxLPPngbVe8ZHuiLEE4N27bRKTHHP19xWS3jjUZH3UcLrBw4Lq9NDMSaykCAtsPGiKuMFUMf2B9pGv3eMr",
  "key42": "T591Sv64tWxaXR2cJ95rn1jUH3aK1DtRB1TQgKrvxqDMk5jqVDQAUR9tnTgMiPzZ7cPdd4YfuBGCxcGvhTZukHT",
  "key43": "3kZBvgmqFfLrhncZjZe88Y2SGuZDuYHhy14jh74eBXBrEXqz32sk8hGzn3yX5XbLAQbNFVbBFuwUuxA19FcFWwY2"
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
