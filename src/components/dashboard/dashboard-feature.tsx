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
    "5Ssqc4Ukevadd6WMUF3QxU9T6tTYi4e5dBqPG7VbwjxF3L5uQ8h9wLgWSn5cgWdbFJMtJeV9oaJVrQfiULFu9rMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tHKtZ7LV2DmvrYa8ueCeEqiznTP7UpuLPSJKsmW5n7AStVdX7zLzvPJpReUzwv3VCkPxgYhmYowcnHJs2VdpuPE",
  "key1": "5bMuKTAQiSomeiNQmvrKj7UkTdcK1WbLTK8fMbs9hURzdE3jDx3EKFqSNCZAhLFiKduaBnu47GrdeovTKLvapeHg",
  "key2": "2hMpyvkrrpaL8YN9wWVNESkLsKcvp1qX7eQ2VPVuzycXVizNUD613wPWQvtkTPJ5y7eHp2uh1s1igdEyrPbBMrD2",
  "key3": "WfQrEECsek6r2A5UHdJUAv9cfFqyx7WeaNYA97zBkfkDFAaXmPr7XjAesU1p65M1ucHvWYaDZm6zvG2dpUGyhFY",
  "key4": "5f4JpgtB1fw7grtjsFg9593xXT8Ud9RbFsW25ULCZdPkihWPqZH4EkGmahhs8SAYAnX31GyVdUDUx4wYFVeLYyZm",
  "key5": "3iQuYmVzER4kwNS6YqqEv5ajJCPsnrXuF3gZbDfPgjHzTutKSWqYeAZEQKuTpdvKTawhyjdisUncJSmcC4ckPHuC",
  "key6": "2QQUi8TCWWe6adVkYMsz14J5P8PpBovaZERAS8zdpjzV1CSwzKRgy7FCGLSuuZGVAqMigEc3QpJAgYuapTsk47g7",
  "key7": "5s8bm2WePDwZvYvSAKHb36R1rTdL27Ue8a6TBYWLYN4urrj2t1hPvsySUyG3ab1LhXEh2BTzrEpM6hMWJYDkZ8s6",
  "key8": "2QFG6i8UhmAcvAhe3pFFn1y4SJbQH7XqRSdbYhUeVVUMkhMUzDnZMHQmp36fTstNfcjW8Da1mbwwcUdcSfzA8nDv",
  "key9": "2qEC9HUpFTye5CWx7hHG6mDhAjPdiYq4AE7P2Z1cNM1vfR3zyaGVkcxWfUaKV2LFf9LLhZ5LRTnUuAjgRQBdFEqg",
  "key10": "2qd1SE8MAmZ4m1KXRprwQysXj4peY8XG9Ewo7wKZgoEBK1DnuimLjULHksko5CWud9ap9ypJRb3u3Tx5PM2Bx9vs",
  "key11": "1YV97XnDXGTnXbGFMmpRyNNR8qippVsPuwqMafjxNVDbRB658niUv5cLzZXuH8YYjm79oXYoZqqAgHTV6Efr5mf",
  "key12": "2MJ3LSaiEqJmEwpWyWKpDwqMsJZG3tT9f4oohJ4khQqQSrXCqewEFJ5mYSosx5G9RewCB7pAFX1iY8wLyufLRuGr",
  "key13": "4z38pGcYDQmPP2S4YfdXpogbgqoP5BkwJ4Hs2xe3FRmg4FCp9H6g41cqWar33LPkmkkD96f1tfxrQtTHzZjyNtCT",
  "key14": "62ZbkwwzrHtfRxmSmz2FvYLaKcwJk1z4ZAJQ4dcXFQzdmWsiVE4EEJinqGT42wPEqwX7vxB4dUqHPdiXuM8Z5LBo",
  "key15": "35er1SEkXNkHXiw3KwLNqtZyYQQVegNQzYeTLvJwijN9PbbXusXnRBqqndPbJ3n35iUJDZTw7FrwiZCqKz21a2Pa",
  "key16": "4CazxpBX3MAKGrXNBpkbB5hZCPXK6P5q5U7GnDtHGmf9K3YRg4hkad3CARv3qhQMJMdZde91RdGF8WmDGMp2JACd",
  "key17": "5gsY3tCwL7yzjfxyqSTZJ8nr7Z819hxgCVxw99wLYJCCdhqXBx3QYUN9cbz4wQHsmwfxEFjCb8RwYjhjGcL7R1dK",
  "key18": "53Z3db1uQDwGEti9Rdfg4sCdrEgCGZUBvKnRavcfBZm2Bv4Nt2c29zgDHDDtFGayUCw2SCge1Rm6uaWKW7EbFXWP",
  "key19": "5YRFhq1AsFCdyS7Vecnq46yZZwMYWFky9nofXaR2prqMRAnYG7kksxvN25fdWUrYrsFF6PdJ1fNRVYqzwdWrV6Mj",
  "key20": "3fKvQwTM7DjRvG2XTbTtbbyMbGcE6AUYdaZJ94HF7ohbt4rTp9ZKLpCbGMraNpe545AN8hTkT5T4gBwu6hmLNNok",
  "key21": "4woyW2wy5Q9Y19rmNrGK5WFTntZiFaYdnVYcbUrun3vXxtU3m51UPYUTqqCo8ZrCMQ4WyG9WA3zHn5JhXHexT4E6",
  "key22": "5Hv8XkPgHjvfeoR6pFL6tP3Ntt1kGiC3k2YzDSCdAfLYMc9gFxDP5WUxYcRYYpsNU8iYGRZqAz1XSU2s2uNbjkDN",
  "key23": "3AQ5npxqvkxTJnuVXyuBKq2iwgE4fYF83fxm1A3mQE8xpQZTyBZk8druR8y7FyKZkw11AVZQAAmZbjogNoqjjth1",
  "key24": "2pzrotJHURB6po7pkomKKaE7ubFAukvHnCQLNhjAzhUdAqRvKG3fAMZ38KvSsgiD8oWozqzWC2VsHmXEvwEMVQz9",
  "key25": "4WgRx2hSJXmetpgtBhEbiYyqW139xEQZDL6fA2N9bVYSU5jpsYzQ9fqbTKBB4FE2MvFBwXXsyhyZ3aQ57unQdqDd",
  "key26": "48ZT7zbuBaqCG13fTaiDTjstb7fjGPht5WbmxLRJGpPM5FtE1fZHfeTaE5LyvxVTipL2jDQJcKnPJ94mepk2nC3B",
  "key27": "2vU4yD9ZpgKgxqeRH2EaWzEMZp746Pgw9wvGbssDrJaww3tqs9ro8RiudL9SzHGCUWmRSPEx1AZ5FYUd9NecJKqM",
  "key28": "4Dx4dtbQozJPRZM9euYVxVVNaSVk3B7YuAwjQZc2iEPQfzM2A3wBc9WBt4TSnUetTU31XKQc5gVQBTG3VBTtjkUi",
  "key29": "4stnqGmPUczevQDS7ayqB9dPfagbC1WLvcqp2AZo1r9qE9ULGBjtXUq1wDvBddwTr4KZTs8xYMNzdj4pztp9XdRN",
  "key30": "3TPLWSTMnt5ehKFZcdhm85ag7Bt5THRthmwgRraMJjMYyFhECk3ktdFajuYKh5syuYK9n9DfhQEkQM75Mk1iULYQ",
  "key31": "3E9jnH9vqQzxK19MAyXaeN3d48ywnwioQ3zfN1hhWWHkoVVQmPWfqs272eoHSWgzSzN5YHpaHay8ufkojYxEJELp",
  "key32": "3eQ1x82PMiHP9TWstu74qQ4DeW4XGebyNWp33zozxj34wYoAQSppNdbsmtV247YwEHdFSbAwYoEGYR4umf4TJsJb",
  "key33": "9hY8EcrqKfEA6L4RnPUnqBahmvWCoa8TvnCHKu2MjrGqPgwEi4pAsUFP1vr56DqjzyWaRABG7qQWv5vVuFSrq6y",
  "key34": "3faGUkXenutDj7fywc4WiDWY7xDcKa7YjsL7kKiccjqRioxSXmssDoNHuihj95GfVngA8Wjp4c46VY1yQm2mEHEC",
  "key35": "2Nqnt3v9RWTrdDabyoL5HPUrCK9apng1YdE1ggE16wTiDkRh8BQN6M8KPHhkWKJY37nm2LyRa8tFZt3xTg5EyRxZ",
  "key36": "2S1qs4RfsihFBT7rYwbXhSWWek33e4zrNi74mEm9hT8j1ZuFcrzwFSwEh3hfEiTE5gMGMhiociCFPskmfqo2dwna",
  "key37": "4E8j1gspcLBheiAy1mGVDc58H6URx6FTYM6tFgeHpTTMghe671nZPxMvobLiuHrb6YuNGKmGAeYtXJZ9Rj659uwS",
  "key38": "4WTG7NFjrF2tzcxPk6c1hMoTkuGMKnCrhyEVoMtHhmneGR8SsBuFNbjEov5jyCiKGV1WDn9P8DryzmXTRh8QPkeP",
  "key39": "3MshxUqeqqYx2X5U2fo2yvKQyehw2XH37L8rus8N2UNJiUT1bZc7up6hojTda3f46uRjYTL6yA86RwSMMhPzSFQ6",
  "key40": "3ssKYScTgFBCU235uq4pirU5XgdhG5AjGfndoYev9oxUUJQiazyPHsTKxRcYDDDMXDVsF4ZstwxWTCtM1mwTcXFy",
  "key41": "6scJqFBxqZs7DHC79EaKwoZmUp2VjZK2gPey7Kt2jY4WPa7j4WWYh1Uv8Qd1XuLPNdHeEXNfWktGM7WSXJ6SbpG",
  "key42": "4f8p3cchLQbfu4u5x2UEDEvXyp6BJ22GyHLiVd3GpzyH5He5C9peny44uL2ME4DAohsXU7DETZgCyAMXcC51ejnt"
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
