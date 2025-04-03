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
    "4dfdysAmJBniuNibE6CayH35KakW4fNU8esJFLiQwot98T2w2oj6Yk2yXiQWospqUgZGW8xFvFWqet8PX2Y2bohT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RwV7iGrHDy97ZHWS9P1SbiGiwQWBWaH4uGuGNaj7uqstJ8bmfNFN8bFnVPPzDgnrxft1i8YsdG26ByQS7Gknmd7",
  "key1": "25HcK5NZuE5CMPqrBM74kiH62XTsvtxwGseBJYaBJnCFWyyYYFx1Gd39FnNNrhPrfaGmBTdvinyZsba4qVzXcV7m",
  "key2": "4Sg4oGfPh4uLWs7Jf9mTDkMqvuJMvBqjVcMRvsqEaZRzi7zv8wua2W6mzwmfgbM34Gv8RLGPb2RKKssEEYe4qLKJ",
  "key3": "X71cGA7FDaimE7ZuNCMBd9YUEV1Gsr4KYjpaLuTteLSRbQFWtYajn6yxsm5oXFpaBVJKJhzZtoYXo1Q7do6Mbb8",
  "key4": "67Z8y37NAaW3dHSw6H2rn11x1eZ3C11yKpnuxiT1ZBuNdRPUucHKGKcaiGQypWqzeFJPg8hjcgr1htuZAy7qYXch",
  "key5": "3v1v7JajEmT9bYkG8yDNB9bam26zeHEAZLerq2g2EN35SBDuY8ptEz3CKsLEcbcosVhErFDhTCWXkzUtDMnkSphX",
  "key6": "3m4HiE7PhRWYDzfXdhsFCECqYrX1b9pR9CKV6CyYgW6gnoATVM6ivmykMTPowPfhH4qUoXzGuhFcZE33GiYLFerj",
  "key7": "oMYdjjeHAXzepEoqwgJLD5T5s41zjoxtyLeKJaakFe83NP1LHcyUzgHGGZaB8XQvnjQx2duJihewm6fQ4ncQ3PA",
  "key8": "3HYPyxd2yVjVCgNmM54i1J52x3qdCMozT74BrhMWhud7e7hU5hz4ejhhMThRrjL78DxEeKqxqTAe4oUaXvjch97R",
  "key9": "ZhmvNCtJViwCVrN5M84uymikyEAdLJTUVyMh6SWPV7kf9xQD9BQL6PRhxg9jgtwg3QxAR2E45cqjBmucSqQU6dc",
  "key10": "sjq9jUyUZgxR3hUAAoQRDYwDfBfRa8ZQRL3HzPRU7TxH5JFUcNeocYfXU3saLX12tkjAwe9rh9RCnjuaT6uqZ4o",
  "key11": "4QNtk2Q9CaAEf5rrmav1UBNU8jhdjSJU79LCHRs1do54Fzk8hkCPyfYAwpoKBwYVEt9e45E1u9KofAC8VFVxN2zC",
  "key12": "BdTAoj6b1TPC8CXNkSUAwXG9SQnymvThGKP8jMA8pWvTDoTPNfkSvFQRVh4NSA8vTNeQfEGS3NPNSCY1uXquKJu",
  "key13": "44hdsQHem8mGi85aJTmwrW6cmDySWTbrqthLp7qZFojJcFR5FtyYSabD4PURNk4a7JHogHUZ7zQY5UCu3jNekSVx",
  "key14": "4jsKQ73cxtk5tLwcgFtc2tr43Y3FemhosqA3s2fEcx13Sn7KnCKa6DkXugC7j7aJF7FVDjWqzrVmkXJGgnCC7esw",
  "key15": "5XxNPKzmb5X7gATHSFZicBUqyiNXMDDZszEsQpr5gULcLKrcdEh2XUNf5HaMCTUP1gcw4pszAajLRttA1s7kF3hB",
  "key16": "5WUGBPxsNcJ819JdBGSRE4DrjwonyYuvK5b2bdqiWqZHjzgpzjUccKZJJFNsyE76p42F6c2Lm3PYzXtddLutw4Xc",
  "key17": "ii74WRaUEVeMzgcos8kNvvRA9KH9nvaNQ9nJyLPQNyLQTZiRuehsuwuiUXvRxfWG58zp2xYHc3i1bdqg5d3LR9H",
  "key18": "5tdw4Sr2W2NQnAttEL1bqLhZDFiraCaTY2n7VopGwRVRajSrTxgPNFWNtck8UuBGqiquDLRHRvwYsCuSMHqF7Yxx",
  "key19": "5UwcEyRGjQ5b2xMQbSHgP2StJfw8s9n7RmasuUpFmDRHprcLdQ44BQvLf9P8qaBDvDX1um9qU3oesbZ8eqtubD2W",
  "key20": "5XkpQastGZZLZYMdPX29GUJzJrrfRdeJGrr9X394JTA5AGKchxSx4rQd2woyY8yp2qTBAEZRDABHUhLmxmEwHhZW",
  "key21": "4J6QaK7j6PSMGmGP5N1KkgW2qbTzAN87iMttezzTRh6FYkNVjNNeZcTxzc6WhWWoLiU9nh3HWjVUfWA2uhdUUYnr",
  "key22": "4JfZFVBuvUAiPHDJ8CEW1GuZy2WvQ6AjytzkwW7HbqwTuhofxnPNcFWS4qb5Ep2X1dKGEfni9u7mzAqLkmw4QbEu",
  "key23": "4s2C1ccGs29Xy91dPthq3zFHS2c8NTFemaRJMSEDKRuUe1fzjQ9pAZ6ViYVA2Vmi5pbEjpSfBZEjQ7JWS5avdcja",
  "key24": "2j8JnKqkpHMXm8hLD52FgfmSFXkmr7orEuiQARnpUHBEJnjnk4vv17nddJDFaZkSzkXonGPy4p9RC8MTV5wiWNtw",
  "key25": "317dFGS66wUR3F9UHSn9yw6c4BjZLsRzGfDkaXfcpqsFbY2BckvcFFMP47ZFommqxzMbMoUumpJmPMhtw7YnZ4Nd",
  "key26": "5NcJDJdwSL4AJmR4148RYWsR4qe9A7UcfcFkYJdxL1b27jEhML1qKSXyT8qzPRTQhibhy5BZXaHp4Vc4GJWiTNuK",
  "key27": "2pzKcbw8U72YqCX16vyK6YjaDYLFHwnEeBbFw9jCFX1TksnfUcosDmtF6fJqny7XuBhUTRnFTQFtZnZ7HMx3Dpcj",
  "key28": "3PV4czm3akr6wPSewLEaj4cHx8BK69pcHcpQpPuzSweAMLxCZ8UCHyM2ywARJoXreBAMyNz2Tmq1gYHVAAYuzR9e",
  "key29": "VMUAVtgmnCfvzA8WGj63oRjtKJL4b1JyHM5o6GtEjwDJjhnJY8irC1x33kLCAyZacnMRHU3oGCqXMzzr2498jJd",
  "key30": "hHFEFb1CfBSGQi92taQLDBtFhW3VsDqJkP5S6AFQYdZdUSYgHm3LtffUWV9ShHyiP2FzjLocok2Loabwf4mgjvG",
  "key31": "3eBUdu3YyvdAiMDindYwyJE7E7SDZSdZn5PZ247kSsUMnh4qgGjRGtjnRLRXc85DinuKat3aXafPxdEj1Lo6irHf",
  "key32": "32ambcYgV5RM7jf55mVsaVoRywRcA288GSdsjKmoMiboCzw4eeXsqu43ZkTWrvnfFAVmCmkqgZrj4ze5wgbKaiAd",
  "key33": "4QP2qJfPgqxAqSbkxRAmsrXkTbGkrZmDex7dM5RrwSyc6yjw2GLzdkBbyskvMuTNevmjUSKpDPWvuVcmGx98F211",
  "key34": "4wb5yvwQBdtn81VVAUdgQ39M9wxQrbws5aEE63XstBUr42A4WKhozKawTCvM2S51reDeR4nh2ntiYcBSvNGsaodb",
  "key35": "67nAUmySN5TZhAbBLYaFuiMUTdfT3cSH497NcmSck2XMsWccsFoSQZz6oXuFuccRW5YXJbDGZQkA8jN1YHpaBxts",
  "key36": "4evG7TE7ohHQRwvHEHJwdWjJe2125skJcFt7D3SS4iWm1VaqErXKtCF11xiDsX5LCY6p3U73YR4D3aMCT2Ghx7ff",
  "key37": "Sun8QwyMkdjy9xCiyz6wfaP1aJ515kufz4qMCNVE3u3CAFon5RSYCBCdn6qRTVavdTz5airiVapFneCyFEcWWyG",
  "key38": "2oDwMFo4esELAqUaH9MzeeZQaQ4qDVeomt4htapnTmW3SUtzpzYrVt1X8PTwC7h9tgkQ8WF4EhrMoBWDyjC7GxiY"
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
