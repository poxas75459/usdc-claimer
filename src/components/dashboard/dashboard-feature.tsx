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
    "35vDMr8Ztd86zhCNLNKny8pU4RgGrH4cmFXAZEnmavh7gZWNazKPWHMJwQBegzWeRjtSwTthTHzYWxoGB1er7JW9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qp4iFkruSpYTyGc2ep3Umw2vfGDjM6L7wNztPCuEvDJvks9CwuqEV8LVKv18z24LMd9E7nC4iSxCjZNDBFvXdzW",
  "key1": "uz3sF4Frw4RtXxtQ4YR2dThPSPCzjjuUuVQD7Pgs1AbdpjqwsY1XyuRN1pM1CbikmQa4pNXTaXxCP3nCSm6iG8Q",
  "key2": "4fcAzeed6Y5TZT4tCBuhw8Q9bk6jw9jBHb4Be4XqnspWryQmWys23NDHXrKZL1tJjLbngd6Lv1TF5aNRdaYyTSxJ",
  "key3": "5g8PQZixgrL8ckn7R9rFqEBZd8CNEK197PqR4nAJLNUspfAZYmWTjgF7pq1AMqkxuRA2muGNAQE1b5BrgcfFuQvS",
  "key4": "4EEkZdeNKa7JgJSEVwXyhP49zvoG6tJAXnYxhzs7TqmisVAP6hUTxmuXXki78xUTYcz5tjgmuHoBKZME9yCoi7cb",
  "key5": "StHhH1bd1JzYjtJorq4TNwiz6KXCYwytgcA4Q2kyQFnMFqKeTNNJqHuQ7n8WUBkmhAvfiRbUys5QFvBNqZV3PKW",
  "key6": "2ETiz6eQuikSXTXbFekWBGCiaMsbZQjTwyM1mDor5fVC44GMy6zeSEfn25DAjagdjuygnkwxgkDtvvMibbYBSR7a",
  "key7": "2df5AhhRXxnsDFc4hVQRu1sNzEPoFRJRxmBdeNrAtjwUvLWeCiYumyrv1EQ9ij5dMDnHAtLxorr5wjG7cpeSCoFH",
  "key8": "47M97r81MnrwRS2EBTgxU1uoLsrkK2KPTtrvpCSpoGEs4KTUT5uPKkdpBzwWTV1nBPJdQKU1fDHXTRAdeFKiKdj1",
  "key9": "yhCVnQSKAjyh3umKp1zZVs1UU1Sw11sePvEVfKEdeb18w1gDtZzLzadvxj9Sy5eJjp4nh1t8RRMtRdQyJnYoodg",
  "key10": "2PKe3Whb3mTte9W1wSL8FbqDJLWboVAaLXUJFKL3dFEQTWQBQLo5r69Mw4SM9R5rcouQTD3v3SSP92iaqZQvc2Tk",
  "key11": "WZT3ravB7qvKyqGhxTkoq1sCRoLCBzravGig1jpahaDGW9DheBUkHWPDcXvQkFgwXdm8u1Fv46kifo9atZ5T2vV",
  "key12": "4KzghT6jzmezRPDGxxjzDEgKLqpVRfGEvskichRPJoir6X4nKeunGjed4jMVQCJmDkhVsxurmMbTqdbVuMqnvdE4",
  "key13": "2uptsTW9WNCGB6RtaqQGu6mF5wMaz5w7LSN4RUnbie2tbGQuJiWwfSy2Po3KMboSyR2cVidyM9wT92Kj9PB6ZmES",
  "key14": "4oKWUmzEC9TmC95NJo2MRwi976ntBqp9oom99x6pAhW2ugMuGWjGdRYodwM5LwKqTD87cVEfiYvmbLWxNQUg6m2b",
  "key15": "35RasD27ykKaZxcBwSHBae2UTfP1Rg8Si6wfnUjZkTPuwN3LK72AAyTDSb5JsiBTGpG7R2j6UD7ENvsoSTguLNqo",
  "key16": "3g4fkdZ46kfQkauAEPTmTevSRkBSEkFZoyLvPXWJymhTydHkQd3EQ4qLrGbqg2MJWdMrCptQZ4PfiCBVPptL94YG",
  "key17": "5LhjqAFGj192NkUngZoGBWn118G4AE9e6dTZQ36Xr5zDSxBzfVwbxoABt2DUu7uuPL5LtssVzbhfzjvTpU6PhHi5",
  "key18": "5btZNDJJ38kgUrGHaHUxZ5Fx4E3Fq4pKK4m5dQW1EjUbcFsxniNfuthNUxL95NX9UXDYVhGAEppixgXt4wWrAqVi",
  "key19": "NrswKwNSGtHAGXVqPpiXkLhJCDrX7BtXFRdS2sQjdmEFsBNeQJqMBNWn9sbgAqz4pGFqpQbVg219YQkfAiaEcYK",
  "key20": "Pg2HqxZPoUDWeiNKmxsiJ64L7VhvkX5fB4mS5cxoNp9MMRHGFWZJNZeSg6Y6hwQ8qsGQFxdhQba1C738ZdqtPeh",
  "key21": "5sktxqNmQPmJSvqDYVr4SmyUaYZHsNhg6N59mFF61ZY5rAZ5iEt6jsUGgpvpdCLswJsNcfq5dxrsV84TrbXgcNrQ",
  "key22": "4nemaHfuNtqgxCFcvfzETYnBLtfxqsLxQPcTeLaXwhbAxrZeeSsnhX4Nwz9yt6vPFJqS2dfWY99bMCbHLnPVCnR4",
  "key23": "4B8DU9RPes1HxEFEbz7fwpXBPMCsWyDgHFVhfVMmUn7qn2n6WGGUJvUvJ3FKuddFsrWY8DDoyyRGFMiHanCHs6gi",
  "key24": "ngCKS117faZjf3ShddeucmmSR1Gh3ysnmVaZBGJd8RMD1FPQaJALBjV11yC9xhXK6umNcGVX64Yx9AMja53tTb8",
  "key25": "5oapwiSe6hJGsFDCcYLTvkriTh1QREaWKiW3JdsaHcvr8HSqHMbrKLHa2f39gFCXzHSCbt8F4BKaGimSAtY56rEj",
  "key26": "4RYRhxSfRWoAfYeaPrbb9xVSs7HM3fMjBpBmGTghoM77J45pxM1BNpzpsPsCnuhVnxAh9h9W58LkuuCm82PJTQds",
  "key27": "4D1ajjKRPbKCj5rKkMjXqfctvtVfzk5Sxz3F2i4HXptpi3rtWRC9gwb4QC1c6VwEPLeenKJhyRQnUvT1sDXzqFr4",
  "key28": "5aNLTW4Uum99gHtfGfruD1WkWXaifivwivZ4dEH6py9CwArSuU24ihZvGUBdGZUgyX4yXiXb3PPtkmySpxehDxC6",
  "key29": "5wEBjUzwAwNtH4c9HM2dV417AXPPt4tAtB2hfTsNnaSDJKomALALz8CnyshNbXz2VkrDmJfrbtTBPnyURuaBMuM7",
  "key30": "65USNRX8HNrZogZD6Q6A8vEC7Cue5Lu759tEnXsRHT5C8wQqLahSc8wK9uFV9DnYDsqoU97wZJgfjTGPcYNEuVgg",
  "key31": "tSNDjEya3Sk4Uppfz9eaK1iVAVP8v9LTskyMFfwnZX8uojpcWqMVqnAoWvutEDdWx3ZxU674khbkNR7LEytaMNW",
  "key32": "5727TLm7bp4vwAkC8C6Frb5NLiw81avzGje7KjfHW5YjMpxNrHakKqjUG6mPuR34kVYo44e3LwkA1A96FZtHxCBY",
  "key33": "5fkWYxo4AmyKY41MbKE6bgDWXeRRf5qQmQeovZgGchgsSV72732N6R1WYxn6sozvPGGZ4VcMhks6kYpTkN1D2X3E",
  "key34": "2qWZxjR6sdm3q2BnKjBGk21WpQX3XCz2eAqxprhaQBKZcfw48Ggp7srE7wKufbiXCR3KS7ytzj4iHRKdASAvNhHa",
  "key35": "5sypEBPSqrrcKdhoNNVNY3fsWvGFXCGWngt7xUcXvbUBXJqswxZcALmLE644uQLfeHwcVoRNkZe2Z9t7tXHeDWeG",
  "key36": "2Lqb3ywUpC154iRbvmj3FHtWERV2CQj2uRrUaGwANMvxZWgWwm9aTosnzG7NW56PGiBFmgL1CfNMgfPJ3KvQXGpo",
  "key37": "342NrTxsd6uwjWAnLtFUQTNUroqowwXMBftumKch1FbJrYGLhPCBB4ZuKLbxd2k7dCh386nJgqvBcBPB9WJaZB2e",
  "key38": "45ke3pHRhMSMjqArvt9jDXmy83tXrx7cebGVs3TRj97vr3Vp37YHCVgQYjFn7STh6VRoMw8pyqSwidttrp3pLoGr",
  "key39": "5o3cvT4aw7ugvKi5Y3Nt3SB4dGcW7VxdfTgcJBuhU7SKdsEEAcq47RXfuYpEXKcRXDcnun3PJDGpExD74JGSJMB2",
  "key40": "3cEX5dzqCUY3ge3JuyfLG8qtC28eN3C8hfH6CqYqyrSBTZDgnACdFMFfc7xBnz3KNZgP4tgNiZtz8GtdLxfTamFB",
  "key41": "3qy5tiw2uGBd42TrmsvgyeWJpfL5XpeSgytmZJw4PZBxJL1CwRAgzETuarCN4qhwYsHLb5fsaNKV8zBSjyCbqXbr"
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
