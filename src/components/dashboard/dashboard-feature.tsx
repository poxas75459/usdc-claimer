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
    "3HARJT3gPSQZfXhf4AUbWKoj6C7VBPGc22iJMbrxxn21MyLrn59HqFkkGaWGcGChZGSfZtha94uD5ysWANwD9wFy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QrLET8RCN4Y3cjMVR3N8q7sBGLDAzt8QeG7oKx5c4i7XYDCchcSRcCjjFyTnWdFSNAynLo5Ty4Nhze8Tg5JruoL",
  "key1": "4sHjVehkJWiN47MD9Y4Bp5xRyQG7hLFyfivfwVEaF6mCWVY2zAeqjKQXcCZVyYgRufq6BUiCAHPuLq1fv2Zm6ntM",
  "key2": "4XcVee2SBCuMN7YJTB4jfiej3KLhjK5gfQUMDW81ULcKVou8MoD7cFA7oDRqDNuzbiDQwn9QjGe5UudDBjJoJL3H",
  "key3": "28VQHj5rSq3zJ3YGZPxgbw9sgFgGfuszY5DpeHJLZQFFUn2K8v8kR3EdRVwRNngcdf5jEysPabJBTz9fLsDhbHDb",
  "key4": "3XEnsDzvVtX7CMbZh2uVPyQGefMhsGgXaRz5o3vRKrnrtrFAvdFTQMKnLFcJWz9hi9Y2Zrx4HtYMiaeLU7msFUoJ",
  "key5": "5BQazd9EVxSiJsLkxn6WAtsUVdfRBcQAP9vaQxfvCgayiNseYdRSy6kZHhNhqSrBDVF8aHcGNQFYgb6R3EqV3X3i",
  "key6": "FDVSCtpyE3M59fKfFfhMohMqKhT41iE8ntoGLzDjiLX5ihnDUnhMphPfcE4JJ2VM2Q3XGiyeoqkVuYz5npzY8kR",
  "key7": "27qnLpKaVFknLh2LFqvNCQjbzj4zBqeVyMZ42dCr5g43mJjXSFFtTzvkUzoRfSADyxsqcEkGramCN5b9hnkKAmXg",
  "key8": "83emunMguj44y1Gnwv2J2DZHfFHVMp5XwfRoUtFQF1XMQGxAqSjvoRyjA1QnaPhuFoUKbsc1NX1sf5JE5dGCXav",
  "key9": "3eFM18HSpk8SEMeGq3nMYfCM9S4ZGf9RyMCvMa5ZGryJxaSnvGxTwsodx1KjHfJbSFYfnnMYLyALBAbZ7TzdZTL9",
  "key10": "3dEBKx7vugdqJYw8kQJgjJwsdwRydt1vwabkDwUv1D73CtThVvnFWqvrwbuShtCuNyC3mvfNFuBft5nF3q7Mi8i2",
  "key11": "52GLZbxK6Xf9EbXwFTEZ1VaSohXcfe9tDLQ5QZjkUDKVLq1y6SkiReRYBBsmdRSEHb8HadkSStjKuTJ3X4f2SXjy",
  "key12": "GxojbAZiVuGcayCFUniMwCgfEVEDMJMBAPim7bheHSPpCu3Qe1ZHwcaFbSLLXG9KHEmQ2r2AC5q284FZLWgJeR2",
  "key13": "64oHXAXWNhVFkPaoDgxTiP9Z74J2copobmPvovW187sxA89G77mvu8JeYdXSx38SAptQJrwsrrKcSF5p3BSfBGe5",
  "key14": "hCCC5mb66DX7Qij8JcRUa4tManc5RX3iMsKSwUVd9TsZQiAPAay8412mLDPVvawS8VSadbvT65aNBQwkMiPDjhJ",
  "key15": "2s6V4AeFcPe1Lovu3TYtfTe285PNJN7Ro7xui6udmpvXu6DGrKoUWEooteoGc69TR2jSCuJAbbfgJX8yTmMySTV8",
  "key16": "42qfv6wGQxAwCHy3ta4ZVsfkgwnALoZdwMLWedp1kNFhjLQrZNWDALCUkWLEWQXzw3ek4mrYrpLZuDqk8kQ3CK8B",
  "key17": "BkjfMrHayhsXaiiSECCJDp5Q9Y1VEsmaP2VNUSYpsFWJKC56B8bbEP1qNi1NnyrcdUE2th3omZjGeSBRB6U6CSE",
  "key18": "4r2QtiurJCmwZEBqLGRLM4cxdrGJKQH86s5yF4F4oKo71tXDQfie9AVYHBJYJih3rLLwKCi7fhqFWkj7tVChQ7kM",
  "key19": "16TRLGYBH3f1v2U6eda6u9Gc5J3oWLD4eh3UWDSMmdjBoR8NJuem5jaE7ogM3Xme9CUt2koN6h9h9jguPv7NEeK",
  "key20": "3C1Xy31FKuoSWdsQzR9jNJp9gUL8xhm7HWD5D3QYFRC59GgDU4Bzh9H5aGEV27H2NtJNCkcJ3nNv63YiQYzL7fx",
  "key21": "3iKZxMzKnjxoqk7GpiNZ4FBeGhrrJQXfrT88uEuBJ9N7CmE1PuAJaHpwnM5qFmnUxUa154pJZqkSwZFWEr9hLnmU",
  "key22": "5oySKf6EjavTbCFazu1xkzLr75Wjif5FusF53aWg8uanz5adGu14xLBcRxzTr3TVyqsd7nBkav81LjXnKokeiRss",
  "key23": "4nTa2obpgFsghtpi9ASDRMWLsifgfxD3KeGZRtLtEWfnQjP4mfbWqeZfF6eq4DRtcVoVze5uMCSwNgmAibVeeFjj",
  "key24": "61G1ZJpxWSdsBPr4y9EmbKJEPKRf7JiFC9TSoDALKKSWbY6v39k6oPY8LsYAkKhQbZqSuMtGAJ7EeH3ckBMP5K3z",
  "key25": "3kgiPXqFr3qjUbii6EBga4zHzgn1yv3txZwZyxmjdTtED2B4WA56rBguv7kTuvNhx12DrjLe2gb9XAceuqvtFK8T",
  "key26": "3QBsubTYosVJVZCaBX77NDQanZuAFP1YMs75ArwTvBXrGmCJPkMuZBDf5mX6HTXyPR4DRH19hnQ5dW2TdiHZ2NQw",
  "key27": "5aGWxwr2T75anXK3kGTMgd5NLDpmUJyEYmJTXxyp6NFvRKDRrT2AfL7aUFoa6oaAz1xtWxukGx3LXSUsNzusHGyK",
  "key28": "BC6AHnMVw3ijURr7usHoQkRXBJZ6NcDxoEdV4MvfvMYNZj1cns13kNxpA35AXNWyEDdFULwE837wkR5inkU2MEH",
  "key29": "4UTPekqVoe8TkoAVSPN1ZEBenWVCwaCYwyEEQvBcqBj68Pv8nxAEhhXZwUnstVZPYSMqXZMTk9NU259kgCBzVS47",
  "key30": "38q3fY8r5Jtn42HWHwc13SXkt1ShQrmEDTie6ojqJqQK8gMRyRp1QHhu2Ui73GC5twv9wTNjmyLYaw7YTbrunyDQ",
  "key31": "YV4H1GE3tSQRRdCvSNBzHPWttn1ACWe3q12nTZcqthhRkanjCKoDYGQT1BJJjwwk4sCybxKKNzRtNJKqaTas2HQ",
  "key32": "5LhTprzJZ56xqGzcXCi4TDv5s3HfAserga6fLZStwP5jvjA131G6NXms2Qi2MijC1xD8zJLhyV2B8D6DnNqMxBmG",
  "key33": "eYGFKqRNg1BZZ9JKzAhLto2bjCNbRBejN7VpT3ziHAFkx9uB9ogacuw6PsnswMv29qKnKHwezCenJmRuCscbvXF",
  "key34": "4EWPGVyc8Gfv7EeJj85MCPQ7WBruyT1AXmUUYF4j44UMm5RhTximnoaoFGke3N1yTpTJQdvFUXvCeYLbAkUDVCid",
  "key35": "2XwwfVtH6QyZFgjpz1Hg7khUTazsV3yjigNcvXZLXhUJj3zYVJ6HzyMZrxLwskrkRuJVe4d4NEscMuo5BWZxMz17",
  "key36": "VmaEfCh1AALT2SNz5KycNekg1NenajFbvxuyGb6Vs5PUGYwDr4BCGAUJ7iuvMhf82ErT8K8twiP5EfccdmdoNFj",
  "key37": "NsAAQaSiJp4sGcEGoziZ8MeWG4Ycfre2cgt5UkvmvcteBgmmWPWnAJxYxG3XJH3chMKHiEmB1cvt8CktQ9ZpSyr",
  "key38": "4cjyxtC6r8hR9SJBTcQ2H5Sso1yxtNirUJBiJ6LTaKxVsfLZq7BVNEkvqTBuGbnBWervydg4koBjECZ3VA5yraAL",
  "key39": "5RpQ3uRUWwMysugyQasCtdac6quWkPT6vgYnUxoE51haXpU1krxHwrP5JuRmJW2D2huocdVm2kBqC4UU7b4MFz6w",
  "key40": "4ngsSFXk9CT4jafKAjxs2isHJbwWQwo6oLsSmvB5eZeKNDeuH6cZph6XREortbwz55PGn1GptVQiDufSVvbhmJYx",
  "key41": "5naHrkoE9MxtrdvMYys9Ugmr2N5SXcdKNgkqpqNc8HD5xfuh1eRmtmVE9HAPkw1yGk5qMzTntYPaP1vj6nz7kKS2",
  "key42": "4Y57yPgebk7cfMrYeqDXbEiqJsLthrC2UaAHmQmF7xGZv2rgAJZnRRADZA3zGsBJvKKnupv7CMjgmwW5i8GzpAHD",
  "key43": "iMQgHC3JqKmMZPNbY1USsDiocqKUhXeA152A2AE3KYipSV62DPLptXsPxVNjZPHvCoa97MzGDKSFQr9oVLBfHd8",
  "key44": "4CPKwbjAjuMZfdwSxsWPCcJBdjinCw14LNMMmsJk7cwFEAP55amW45vkKraPmtcqgsbMLcTWo7Pq2eYF5SYWmQrm",
  "key45": "acKcVCiqt2LdkruxE6iDsF4hsNfVPuRNJdKu3aaTGBAMAKLpRDeMBS25ppTRvSZYn2boxHw6iAmfuLfuRsNYzes",
  "key46": "4djCNUT9RTR5uVRwnGfwxC8DDZ7FinKGGuYNN5YoDueg7ErA2YHvYPiwwn5j4FzHzraK5TJQbJxzg6yTubMkbSPn",
  "key47": "45GrJNwU7xoacLJmDqfnSkoDoKk4pEdimPUrkAHnnFwmMafXVPRqFNXTRCJh9HCBoPziYqrDmfs8JKn7UjvQi8Tw",
  "key48": "3PqoZEw3B54bNCCrnMiMQFpVM4o6ed67CPFNWGn8XY9JM1EC1XcXJzb6T8MzCZq2izi2f4sD9nreMawxB7MySYFh"
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
