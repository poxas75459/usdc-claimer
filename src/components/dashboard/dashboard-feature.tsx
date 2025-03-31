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
    "NMaHPDfYERaYZcPW8S6pGy4ShTrRXK93eXx3XA1a6dFFqZoRoGJFYZqwBikT2z5WQSCrV4tqxv4bmQ9KsgyhybJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hEYpxGNwS4Q2FvptTJCSo8SYEC1Mn9wnMkdnzpG27NwM5zsdzgxohUZfUJLvNchew4RXC5L69q94HCQE54bqHwF",
  "key1": "5EaP8pVj7WuNYaQHTjvL8cmk1d6iX9MTTeAZZxwAjdokisag1mxV9mGjcwxd3WGb3DbSzxR88cqyHpKA3pndWrCm",
  "key2": "5tmhh63Kr4dhgH4ArA163DwHcrzAtjRX1Du7Ryw9YiQTCFKT6gsFBTHFAadTFf3LvA6wS5HxcAxayPdXgL6Ei4pe",
  "key3": "5SLjALgyDkPtST3hBeDuZi4oeanEf8joypBAoZypQKZv8WtACg73BjGGSh2JombwkksbnxvQDWctdSnC4bmecDoZ",
  "key4": "54wZPcnXQvq4tgdBsXE1NVQiQKvMfVwVwk1um96yuxz97e39CoWkdvoGZrpoEmCgR4YDHXVUUFouWSnUSRSAw7Nq",
  "key5": "Boq5cKUirxzkXSDm6wKUWQ7KjrP2tGmMghQSpJEcZj4VU8nfP37XtExsb6AuB65UurZAqJwud3kka6DJnEP1nSj",
  "key6": "2MFkouUVvgfZvRcLGMG79mTwyNckJFY8w3znF84HHnKAEjH7FdbrQoZbrKmm36tvM3Fu2nd4oRhqksYh5raMFDEV",
  "key7": "46qzdDHiib45R1Q3SdDdw2e4nJBDveArbuwsB75nX1W5bLhoh4qyaAujVjr3Q3M2BbRqQET9BLvWyxrqGjunav9F",
  "key8": "U1R3djckoGj25AySr6ssYfLDib9ogStnbsUb8cM1V66DxgvLFYegrPh92h4MvzsANKDRiPe9Si5EH2ZfRtV5kzD",
  "key9": "aRGRaMQMpjUxaBn48mtbt2t3RA3KLSr7gS5ivxHTK8XAPLHeVae9o73Fb1A4hUnL5B1iGhrmZetrkMnieojxcxk",
  "key10": "2VbRZ58HdDy31GDhK4vCFWzVtw4tXeH3sjgQfgVhBqAzYwJAXyfwjQCgqVE6RiY5u5oWMvpw4zY2tRau9wSwncWr",
  "key11": "5qeFCsGqD2pCSPymeazYfB4moiscJX5bFjPnng6qGYj8P4keThALBfo4icEi8XQwFj7wqVnpzMTN6L4Zm631Ls8q",
  "key12": "2gAfLYAPhhPNbFLKijmqYwrzhnYuhGnm5TGPcvwWfZTb6d9JERwFRghBq1ZaF7DnHUBTxnkXeMcDjcTgSSnGmvp4",
  "key13": "4UmLa5hG1vuhBMMAMCZisCNEczUoiMdxAj5XQCtbgYYzZWPzetmWVBd6YMijy1t6W9GwcPfwZeCXkLmKHjJXZw3U",
  "key14": "RkMAfKf8833bgdWMSL1gKTXYhxWN9exqTcJaPsZMKcyEyfoC3n3YGRbDg97oirstzKNd2tuRAzRFngofAQF6Ckf",
  "key15": "4dFBoST44wDp6sLFopn2zeUvZ2tzhXUSyWHnb8YLuVdyfB1uPEcaSrDGAuHM6GGBSxd6PvQq9tSujM9GUhyF5qTF",
  "key16": "2vp7pLd3rdWfpq7ztazyaueCvJmFvYRruTzJhBT1VWokFQTubJBxjXcBEQfHkjKVuyjFgp4sbwUGLxUPJwiw625d",
  "key17": "tjNf2Mr5mA9SiFLWx2Lw1hcfC5N9uURreSGrsPRLMQQ6z9caUcv1GB9yeR4r481yzHdkMXYTF1vfSddZQXnWU6G",
  "key18": "45rGp55FXHNbmLsZP7EHznnHBayJgbTuxtrG5t3scgUPSjaUaK3MW2oWD97nsu6KMbZmbjCNJoT4bav8vwX9aeQJ",
  "key19": "VEMg1sK6Gh1EaMrwbaNTHfRQDDKfg8ouoxRv97gBQXZzEarQBt1sybAPYGcuuhWWk7fe21xffvMMo4Nt9TnVq3p",
  "key20": "4JNmqZW7TAtwDkSgLBUJqBafM2w7V2rSW62eQD3wMmHh7SpEFwLkLEact5DqqvyPBExQ4ustcxB3fU2x9su6XUMK",
  "key21": "24ZDGt423BxUzPSWY3GrFF6MUn2AdZmsEpZwL9qyehYp5nwAirb77pdzetmMjnaX9EW7p4eEdM3rreJM6bnp4fAW",
  "key22": "3E25qLCe2TbTBmGHesTbta76XdrPdhB12QkzF7zQzUYKcHejwPttnGEfYHcG2Jn6giygYRMsX2veVFeqeyZzbCMu",
  "key23": "HZt9RUkqHZWNqskkCfGJACzGqYGZGJGPr1rVmKRu3fWrJFqoewnormvqXn2BxLd6suuwJyphm8R26PAZ5visfq9",
  "key24": "2fxSt7ykzZwjGWCcerpPEU6dqQ2xKVDxpKTA4nXrPdLoEaDJUahRo2mc7iCffcuSSSMziwsNbTPhQ9QtV1cXEnZt",
  "key25": "5X4RyYtf52t5zpdYMZSvGvvCFV9nLug1vMAKAajXYU6wvd2JqGoCEFYiqBv9jCAw3tAmAyrcLCkdZDE9nBpzxCzE",
  "key26": "4ggyZXHDaJJWkPQJcLZUxSD85q86f9uF1Zxrt5xxtHQruucuLHyA65QusaM57NsxtoQCf1yXvdTtMMPnDFEpv1zm",
  "key27": "3f7MM7s9fGmJyiwKSvRQ4bHsR43Lskwm1oZRovpsNoKFfuhpdbDwrHZgkC3KufGRU16pKAWAit3nnrT55zhMhQcL",
  "key28": "3butqMDCvfbTPxTn4H5us7EmqSxQeKaBHC339arDmkKdJSbXUPaQUMsKRB1Yv7g4oRbu9fd2tie27dz4eVF6Jh7P",
  "key29": "e7iHGHLnhEjrJJwpGA4BAzb4dXfnX9nFFR8tQb88v711nvWXoXi8DeUWmrrp1wAWUeQBVj3NHWeQ2ApLwzPUmND",
  "key30": "5XBfUXBtEefMWMr6APPimsCHDf3xC4CVca1oe6ptxC8Lw1U5ANLewtzSCRw5tjFncQid6QvF6LanrgDNNyH9A4pT",
  "key31": "3yjnERn5qKnd6CX4EMzaC4tnmuGmvy3pGKucuChtzYcEGETq8ZZ9RKikytxcGV6e4exG2c93JTRDJ4rCqFikoNqm",
  "key32": "2FtAvG2E6p9YJ5uTvsRe6v5zaEB2Afeeu4SW8Syskzm6gB3Z2FVHTxRcidtFBXfmgT3LNekVnUh3D52tRyK1k4uL",
  "key33": "z41b5xpMp3EzCm39mdFetSZkQiNqSjS5xhY4rfQqycbtrz8BAZT8VexJnJyKzfWpakMpdCBTJyUtU3Nn2rUQTKi",
  "key34": "2qdBpLTpYcHPuN9VQzVGR6SfAdaeMjPH7XEWF5fD7Eex2GNGtRAgkzaN3jUgp2fHWS5EAERYHgGCfzhakArPDJpD",
  "key35": "4vZDZgHn7zyzFKumHXL2B5ajXKZRvifRbdR2QFTLFeg5gBYM27UB2iWLMnLfn7LmPFxDrfcC9E1DMwAQVLJAB92U",
  "key36": "3bAxbTrDqvbRNX8TxaUQwNHSq2CdTS2cbEcdZ9z8iDiMrgX31aKjLgKGzEvqeEeSfUgizLP9VgGRDMLZNk3KxbSf",
  "key37": "3FB1GAZzvdXhkDWA1n2U6tpAD5UFYtq8t5QBjaCcXGG6TUxfUPVDWwg94yvhEidRNiHtEkAvAPZGT1xKsQitokiV",
  "key38": "46JKU9yxy2LwqgB4hKjQJMS3X3pFtY1KPFsG7afGyN53YYMtFLz7b43xNTitptbfUiciGzi8rJCevfCgNYZ7k2yo",
  "key39": "5pyV58Cn4jSh4XtqPsbri4pD6CXGTZdid2TGzJBHRDFHEH6qyfiLhbEu6f8Un6qZ6Z9pmCjzwvTX9aMiGBrLoNPN",
  "key40": "2WU69cLyR7eF7qiHg9QmXKrirZvxutcdGyAs53CQsmfMnRoyBo2JBbsinsgTcciXMWomqsqoNy31UPFvNJrb1Jia",
  "key41": "KJHyHVKvnTeTjiErbjLWcdUNy2iGWB5LW82pEHJ2fNbQRto2pu6MwZrWLJNYruciuzyY4vK74afJRP995smQ8s5",
  "key42": "3FM4M2irWR7XMzqhjTzhgF27d7WSsjbWeN5uhj455KzHvrgPkT9XvjqA7SiR2XAin2UGSy5MDRW1Br1ybT1jmh24",
  "key43": "5RZ5jp9MBgPf2sWsiv4mSoEBASZr2ys5VmH4QR18JWbZRiAmfEdNMV3A849Q4RQTc77CYRZz3ZekL4rD5o3RQzCV"
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
