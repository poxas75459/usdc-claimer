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
    "3suWJH8RMmQVwnFqGUpiVcnpheGGetVvAXYfCbwWsjFC829KSmSgwC4eD1QQeSvuaJe4p3Pw1954sspJvY9RLsNF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NhZgRC2SmL4i9UruNps7LhXWYVaEfSj9rrZXSdBa6Bg3cyKetJSXY6NHidT69a5WGZuyQzwXFngk3vL2HuQebMg",
  "key1": "2K9rnxgGTiVoLGcbXgCU29hRBJZ5XeqKAJTcLGUZaPSS6c5erNrYvvonQT92Z1sfncSzf48vHVYJ4muFz7nNPzxt",
  "key2": "63VBFcFWD1BGZPBskwN6Vxy2qnUtQV6hQAyr1LeKtXSMF55XJ8X6Xt1q9Vx2xo2YTuSBNJho2PwJ7HeCVPgHsPdR",
  "key3": "4UR64xpHFsvovFhCtVPeQnVrA7rLW9t5FT17JxSRUgUGeXatnVraJhSR9cFs6QvWHeia4ANQzuxKf1xWNWoCWNGV",
  "key4": "323TSfDEJsLjuVgN44tSRhGxamPbiMLd35Nmja6Z1ZERYV5sAQnwh258Tcb7fmH4Sd2eX8r2Fxn2xjtA6vC6vmBk",
  "key5": "49hiqZAzW5yPcpCDYmgrykmwfVPmLgmArQhrA3Xmd2zt6xoxCR1cjijoUCv3NWoViT8skHN4ZaGzooPgu2Lm6PXK",
  "key6": "53zCTDcmQ4KN5amybEymXLYqGoXLL5uMdqca8Wjj96iHEgjZNCL1bP1E6Nd224p3wDR6TEqKhjJ8787AqZ1wjgKE",
  "key7": "5khazr3AnTqrJ65R2qJJ4EKC8npqJrFJX9heRZE243YSLdSf3PVM7NNeDHxSeK1GcShXy945wLN3V5sdoL6iYtBB",
  "key8": "5ZxhUtWR18Qj7asAUKgRnMtfKbZoYqqKKMfehCXK3wkWT1EoDtXd792XCQ6ruDrHJXbdqw6jp8NBth8QeHhu8UCL",
  "key9": "2xZswmXucjrZgogRNg4j7dCD9EqyNW3k1xRaqknpK3qkS7my3fCh6iWxWUit74AjqaT6Y6PYL46TnYjEeq3h4Cwk",
  "key10": "2x9KxDvTX6iMNBeTM3AFk2QYM7oiCoVAY64QSEeRsvUnaYZynes2LhNFnbzrf4Upx6iKW2fS9UxCodQ5CXRh5oEv",
  "key11": "WUoMMXA2sbeSauqQKbKMSviXQMA7ZswuQnVD8Z5UumbKPhJvmjS71iFxZtpnLM1MVmyKZBnChCNPPMDLSiLHEW2",
  "key12": "1pRPRvSgiFPmtGywAYCFPWGU5fLcAozKn3kVFiE2Wm2obEKATovPtp4gcU5vc2Me9gkQSmGX8MyGDKmmcYEdp8D",
  "key13": "4gSu4o39ieJbenWRQpRfH7ZYTbgGpfMKhNTEnrTf6N5LYQ1J1P2WLWdEYtAanMCf2vNrAeM3SA1KE4b3LD2D59jr",
  "key14": "2dBd8eF7dHzsj4WCEbGVBVUEiBjeuy1Q2t4jtod9FsQeu9crCygCYbNNBEHVgwCWRzBNa9qpdmeZWsKPM6Cmhkd1",
  "key15": "29U9Qi9gXMfVHCpS17Ft3hYBurESrX1c1dvtT3tzSPL8nJGc8AuVr63wagDVjBdb1j7r7g9Bs1Zp3AYoMLYxJyt5",
  "key16": "45VfBKwQq9SHtFv9oonNt9Ndm4pNuuSA7XnKqNmdyeUZLbScqkDYz8QMX6WYZbJJyXPmHPxentXE1ob6i7dA6tye",
  "key17": "5EKJfkJiL4ePNthgXuGLdqXVNqxKmrS5u9dav1NCA6VSpZc6yMK25JAmxfXkNAFLY3gJY91AZSZpaQVXyBpTWkJH",
  "key18": "23T8BCfJ7UKUT1w3ZpkohFat8wwndRxV3B4TDj63k5GWsPAdGyas9Vn14pqHULEKwv4LL1y2FJP3bMF97tkz19hS",
  "key19": "4sTkpGGE9H6ZEDAQwJVu9RPAPEkCTPbBNcPLue1HPV4tmLDUSFvv3qHZTCan7A8bYnNEKMovtRbZsp81rgUNiXqA",
  "key20": "AftTCYsXTk3RtFAnNZNfZyDs1Xtw2PKWqhZL7D9ALcVuGwPFE3xg9nZim2ZyiUucVUkXXFJHYzxf1vLo71JmeFY",
  "key21": "WPg2vsHeMp1aQ785Z6GSR4qx88jvQ9zvgYYHBhkBt1Hi58EpoUDUVsRywbLTSmEc5pv9oKgvUZvfGYdSFaGeTTy",
  "key22": "3QzVMkLjeBLcrDGUpq3wZWrxgF6oXZnM6LefRxXYmfSASGbert68pmJnxASkKmrn9a1njboBN1PjaUpvLRu7mwu4",
  "key23": "4SiVxpinTkkqsoHQNgL5NPMZ2jJTdhyZYuiTTLNPXByyTmGcE8FQi5v5WHtjkHkoF1ZkZznzt6JBthjikyRUpDEA",
  "key24": "6QQ8gpSDAvyq6kNZg9W9WzH659EWto8o7ckLcbZmb4zBS4gAS2otK9JpusfZWgCFrAu2hDZNJSKVEnE4T2J3Cxc",
  "key25": "5zmBukoF4boUsaD2mMM8Nk71jLZEusoFGSnhg829coBumFrysM7nwKju3ddumq83QzvJHsnqTktDA7FaPSuWgri6",
  "key26": "3VJ9MD66YaDADY7LBGgFD7pYTXWRF6ZwNne94A9WA1ysZ6VGabxi2mpVox4xgautMfBMw7VitTDeV7zpq7k3nn5s",
  "key27": "5fEmiM2NXzqPHJXXVvufhhyWa8CuAP7TmPSMTNNzYHpZtJSKiiToCUS2HF5Wm11jYsuHY8UViad88mJkhFNheAMf",
  "key28": "3a6ydgn5QKpeSxU18h5sUWWdGMPqxKP4HRCC4cRmmN19aSSBvjr61AQhQ8Ys7vRGeTk7rDcqB6BCzneSyuSj35GC",
  "key29": "5iYgRXrA4kw2A5JGiJyS34DMn72uv3mcCjNB7NvYDEpBbCHEQbx65aJD58w55Lk4ck6XDh7MQAPfEyAkhhKtrLpN",
  "key30": "4MziuKCuEUVXffUAD7RaNWLnBoGPSNT8zGwchPSojE2r3bzipiWUVW3nko2Q4VuzmdD8FKL9NhLbtcnZHvVQ18Z",
  "key31": "5pmoRMZY4fNBFCZ14ppZ2Y6wUFva1mCeYZgWGu3B884qGUX99gL9h9u6SiLF5SsaiqFcbKwMPGe7pLpdo9FKjYsn",
  "key32": "3CDpxx2PmRsWCAyesg6b74AqSVy3kcDMCDFzjxJFqkEL2Ekr1QGgzcMrkdz7sHijb7KMsKE3ur6XgLUNpUbEB5nB",
  "key33": "2JkYGWrWotnBXzaRTDspMoYfdjx2KRV1bggskXTMVcHYts9sGGjVQXRYzUEyKigjq82rSBJDPtBHmtHcWWtFPEr5",
  "key34": "2CMBwf91FWtuYWdqSCQkty963ng7S64z1ioYQ2d24WxTgCi4wmEYSyt6dzqaUbkif7otJFqEQpy46Q9tv3f5vhL9",
  "key35": "4C3C7Q5fQWFaajNDjHnz1KjowTPxZS2iMir5axfeLXbemBmSoWR5QDNw8zbH1dh7roQ4n5ZcnfEg4VnZ2FrxDc39",
  "key36": "3Y6HyRSQbndxWBHNVoq9Y53tkg98udAvBnwwJxevcdm5PmLDFabsXZjxZFFsyHzyZqhJaCvR7SXHkyCQBLkRS7cR",
  "key37": "2NridLCFo21P8Kw2ncsTFE1v9AccckGq7FgcSfA6H3DscnWGnN8vsFA37LSvbo6hijMwc8xBrTmJXuYm72ZqBPYo",
  "key38": "2qHe27mgBdjZbCyV39Vz3w3KqN9FKdpF2uWGWiJmofEmVxQREzkBcuM6R1eQY3QxtfjHgEAxLssJiBK23Yr7EZ9X",
  "key39": "4hufxYnbZYkphbfG2WT275B1fpn8YoRwbpXW67UKCJrQGH5oHEWScshiwNLujZaJtqvuUEkzSrjUxKD3mDELLtCS",
  "key40": "k1f5pr1494GD9EJWqoeQUvRUJnr7AS6NCuWsbpxjfatYzEJySdDM22WCBBhJUQaVr8ZWsHBhZ1Y52RqDxyh4muB",
  "key41": "4KS85CwVQYWhFzzEGMhXa5A9op5s5aUenpFC75dLhXiP3J4jZfzExHxCGwQDMX8zfWYAMko4RC77h2fTmnZdhuxY",
  "key42": "2mHLRDSvP6wGgrvYaqkuvW9M9QfBaxD3TksaLeChziPuye3XkZXGQqMnNMiyzpj6Wwo4CsPMCc1HBjuGB4ZtKMim",
  "key43": "3iBt4ADZivppQMDqEfum6K7EEbR7BgGYorq9iZVLDtbrXB4BsHYMMBqqaphkDt29hEAYR2aSQnuso4gaZFPdmDfg",
  "key44": "5K8SVZDdKtLmuCvcsMnXd8r5sqrhZt7RmsaC8Vm2mLpUX9KpnJv13JDnnR6FAL9Vnd4Np9Qvt3wPxg4Cp5GkzjzT",
  "key45": "3SDuFsgZVRDH11kyNJ6BpKALdefdtDbahSPpWgNpWT26uLuJAiYQyKFgX1ZHapKizo3wqha45K3TYj2E8Y1nXy5R",
  "key46": "4UvmSizB6ryT2zUVA5ZMSp3n4FS9vhmg8hq2jFZBR6ehEquJvinwaWymhv5iTiy6dLMjgLdfvRXAm1Au39F6xJFp",
  "key47": "26Gp7fEVvan5nNjTpZ8ceG9wtcoCsfgeizjEX32eScN8JaZGsV8fPsyczFoDAUWsZe3WiFrSoyC8bwfZEf4Ds15x",
  "key48": "1rzEaN1tGgsTxHpt1J1j3qQzLGWH9yzVTGsQxLp5bLFoKw5vbHyBMq79u3S6cZQUwEMwC1QhRFLjpnWS5GKRD6q",
  "key49": "39U8rYF7VAoFkyBtf5NAcuuqzR6zfSD6UFUyi3JZKivwvWW5YiwLJcfwRqHieqUXkAivuDJe7D6G1S5dFYhhjNMH"
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
