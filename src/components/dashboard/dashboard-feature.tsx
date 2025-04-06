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
    "5hBNoeL4DxFhWbjFnDqxJm5e9ecKA2JndioSaCsuBtbm3y5WxQH9SRaAaTUaMug4g7y2wmJ4tJ4JNr8m2PgwEnuu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F2oigQJYSLZAP7Asa5FFGZ5GU8U1o8GwMMAbk7KbDi2XHdpqeZxuqMga4wQP1CPBgB3PVqdE3NqfRC3xErEjoWT",
  "key1": "YrZnrr67xYQs8VMUz1bfeCdRMVthFYwCnQYGcKH3gMKAidgZeQyS1a5R5idDVLsjVEu8eoZg1k3sFwdcNL1G9AG",
  "key2": "28198EYt7T1fk24veKUxSWDccu3pHsjNEMQFnkptkMY6BchiFQCNjmRS1f8CPpBxFe3ft8nAY9yiiRi87pGFntyW",
  "key3": "2rfRGTB2y31WpFb2jnyR6Cz8nCKQyTT9W3HNGg41Px24W9xt9h1XkdgZE9WRNMmaLgBs9mDe1T2WRvXkbBDoDAC5",
  "key4": "5iZB5cjKrFDTcUU7QAAWCwg3fJmmcLLahRhEHBukxJinmseGVr93rULQZZEBakF6b4ZFCeGcHMKXLAM9vqM5vCzi",
  "key5": "GXbawWdFhNu1o4TC3AhRBuRZjEPrqcU9YJMGCxaarbifkyF8xT5e7gjvfvWzo2JXn2gWV4EMAkaCv9pP75jM7xn",
  "key6": "5bTjQWW1kLEWsAKp6ASMX5r6yQ4ycU7eSUA9DAkqwKV6tEJWUkL4rqeFZ2qSRNEhbMYXQ2wtgGHvpJ6HhFmLNqV9",
  "key7": "3HzV9KfXxLRCz9GqBfnp1iK71gnULeaWPz3QiiKexF6RMVD7f9ziefzAKhQhXecYNNQujr3HbX1L5No8CH9vWh3y",
  "key8": "8Kf4iEMpcctQHgRD9TrFZ8dhsLV8NgmpsGp647eyRVRr6FDMfJxBLP6amK6jXDEEM8fEgEsaJHYd4SQbicDb6Ze",
  "key9": "4wSXxTDj45PbyDL1p3ncxZMrKJqCb2HW2mMfJns7g63GAz8o54mhNfxTkFCWCCGk2NX1E3tQG8dssAXVPHsT3YWj",
  "key10": "3PLdggSUsykS2sC6YmK9ML2AQtHBc6E2iJDhNEx2oonpTazH6E3G5okACaQjk6yuuZjbB66zjtcEeYuRAdTp3dLM",
  "key11": "4x17ZyxD4yRiaUpduT5ygpjdBGkMDv6zZ6W1sw6Nd1wnq6onjqMVCmXEC8mLreYvD3mTzsxFCEy5D9DsSx4FszKH",
  "key12": "4rnpnRcWVmGhkfrJ5JkbGb1jtEtUAffGR5Kkb67i1HUajaCgJLb9KFRwA2Mo8FXg6qJZfV6GaTJt2E2KQjjBV5wM",
  "key13": "2FmVrqRyrfK8ju87VSMKMQam42VmbBDCP9VMvEYZNbHWH4fDfmt7tE1rknCeVUMK3SPsAaBk9iTKcGurNLphc2yR",
  "key14": "pP3nehMacYA8GFLje6zomWYLUWdg7gjMGUe9rFk9mDAMrFNy2v925XHJWf9vv4FY4rNhhLRAu9PVQJfSnnmviWL",
  "key15": "ZwPNr9p1xRP7z471B51ggZaLDTKqFe6EQh1gnXr4jjLoers1fvyM2p6JVMzSWixs5sPxW765X5Ykoz22wTVa2Vo",
  "key16": "4jQdeDtN2cChgYzLEQXknFEJeSskc5qScz1QdrR8G9GtM7Ys4NN91sEXbLPVimd5tMvmu1duPNA96xdTCQq59W5G",
  "key17": "4QauU7sU7miT1DMk1rvjUsyFBKTptuEBcfgUnfkTFDnASQDreo4QNH18K9BoyhTU2WrfWh28Q1NRsJAQwMgMph1C",
  "key18": "5PzVp3Wmbsieyw7mTcqoUipYTDBkUa4kGYYJJKoxL5QG1Y4F8Rc8Ypm8a9SVaV4rhduLogMtMU3K3UqSjAn3wG5v",
  "key19": "44mm44k3ZqrZDMwXSjmveDgzMx7C5usgskpN736Q2ALvU2TNKyGLdhbRapLf7xrK78wDUwwAKRMhsmMVNP6BFzmM",
  "key20": "55hayYz2smUCCsztghUCV2DZjdoUCTJGEEzBQ1UKf7rptrtN1JyXVgMSTQHsdaZ4T4q5HX4VQUSNWZM8DXpmMA4Z",
  "key21": "4AEMhYuRHvuzEhzGgDVLfmnBjE7ayZ5xPqhHYcYMdb4aQiuZmpoMD6rbqJM6hvVKfdMBZdtBT2jSWHAsa3fyEqQE",
  "key22": "5ULzdkqVCVc6tW1DM7ounXCKPX9wJCBiKfmtLP4on7rMq2p9FJ4SDLJd5Y3eFGtkwPVxzb2Vs2vMPa7NEbheREcN",
  "key23": "2bpgcSM9R9QjmC6cdywHJvwoHPNYRqEsdPYoiCbaWnfNNsr5QEefLC2Quz7C4t2VsBL7tuQj2t3BNK1vd6jSNaFA",
  "key24": "3Ud7w6kEdmSNKDd2CRbtQmFYB7fgxk9L48QG2xFuUeSXCKrXphzGrPSJeweR9y11V3tMuwpFLsBcbkTfw4eamje4",
  "key25": "ahdT4nreWVWPavkMw6McNPzkh8w1qjApMu23VBrwKV8uKAFNJLqQJ5MNSBFAeYf2SBpLxH5bp7VGWPLUtp14YLG",
  "key26": "4EJ56rgevKyawJE7LjeGEZ4NHAHPPhuZcoxsw8XfQrmufnBCBvt39th4i6KiNd4d7gJGr5hVQzX4ucZCxMkiBjQ4",
  "key27": "2k8BQL79ruM9V44inZfMPfJxdrGgdYg2RuKkpHJHCj8dYFgZPdMpxbYca5zXNZW3JkeHotnSXyCWCjVdY6DKLL3",
  "key28": "5gunJuMYrqtHPXAyVqwBMHZD1guBUgYkmU2PqYaZhDcNdy41zDPKzM6qedvruNdJTZqrVdWQdjTZMVbfkxNixiSX",
  "key29": "5UgwtQzY2RpGy9qx8PTqZ2487V5MhPqwiNtX53c1iNmE9qyej2h3wxJozUagk7XPV79nUv13ksH51FnycjTLJCpk",
  "key30": "3k1jPBkfXrNshYqXX4NxjqAKsnrjcDiaqtxm2GSj2MWJByq4pCx5NvhJ1nZzRkSGQE7SxKwfUJSAzhj5K965cV2V",
  "key31": "FG6GZ6vLxoK5MnFM2yujrvnCsH7RjQWdRyTF1CSer739Bwp8Gz572dYfRopvQt9CxHSMeE1DtpT66krMB9JmkdX",
  "key32": "8LLYXBU7TfSQA7DxKttVLr5V9eQCq2h4M3fN2bPgPuxLV2vGtmjybi3gSG9Gbumm8tP69RvdZfRmvuQmyV83JN4",
  "key33": "2es8U9Xck7ktbqz7otaxbzcebnZ8uYojSU7S9VGcgqrYXF7rvLsMdiTZDCD5FrgkuN2c9sZ1wTDjURkQhNtZDG1c",
  "key34": "nyJg42oaX9p6aW1R1uxgAPq18Fv17JgwWmFs1m8XH5u69dhv5FNx2ufK7k8vrkQEYv9zkqXDzFxieT2PsUcriVK",
  "key35": "3QiEV95ZSZ3xrNisvokAZHuYeMrNteyCb9PTeHGX1748r5mtfEnCYQi3AaDMxie4ayREs6arUEr7QPnc8DtD3J7U",
  "key36": "3WmDk68bsbKmCYeTuj7rERd2MMvSbevCbDnNrfGHbXvW4waoLXQnp4ZEgMY5FhdXcGF7qz79jQoPvPhvgmoXx2rE",
  "key37": "49U4bqzMd5ZRHQr5SnYQx5sHHQ9Vi7h2XtFApV75CpwHo95WQ2tJDbjxkcGARAwQ4yDjdo4Vk9Q7RZ42gZ7X2Qrj",
  "key38": "CSmRKmU3pVKBadLLgXb6kDJLX1fd3BxkKgXoeQt8ajL45KTuLz6zKkwTu6gRSrCZC5sT2Qq9Aj3jRRTdM21r4Nn",
  "key39": "46dZM5P7wtZv8aro9pqAPbg2WsuThfeL5XjB77rdE8vXcGriofjuqsyKxfKuJsqXs231LpxNr6F8qhc7YT9SCxtY",
  "key40": "393Ln9RhYB8SWHM8QmuGsvKaLBeQmBnEiJR8rqZ2TfixrZPTwnQY7VMdc6pNH2JgvLhpf8B3xApmbmkLpdisBUK7",
  "key41": "7tsJ5T1FK6SJBu9rc9YrNizDt9ACZ3iiLjK4snFEkvwAvbKi6ED8sxDZhNAus2j16tVjFEnm9BaFkwsszZSPyMY",
  "key42": "5Tu1vnosWhwwqbCAshGXb665Uu6K5pxXqGywdQTmNSLdZezLXSBSoZmfmD4AftPjtFevw2F9CCVUNRpiao2L6seY",
  "key43": "5jCFvirBkWUDNoXqWFGutLn4Mij3GogpKGYM2hmFtDVasPZfHRMBSwD41FAb9cPjoQuGZybKrEdpbnEMV1wZdp86"
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
