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
    "3EZYR1ZyCSs4iq8PyfoEzFdroUTpJeSC7mCjsBrPzdK9K4Q6smNvsWriuCTZLYdePA67YcBgjDbf4RCeDTetDo6Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UkDmevWr5sWAMvWVKMkcjazXMyYB4TF1YUdyHHzNL333rHFACNteXzYEdcXVZo8WmnRhupWZUxgMWc64FyNV999",
  "key1": "JzbeoSYGBLF6o5SUsRADm7Gm4yTXZY1Umptt4HfrrfZ3MXR7t3BSf6GGQs98G63ETRETHtUJeU4zf7w7kEX6R5B",
  "key2": "34KM7ZTA3uWQxKmRp9QwhmYfGoYzAA3Ag1LkzvrgumShHQo8VHqBXEUD89T6WxFAbPhv4uWuPsG9BozVZTFifiXh",
  "key3": "2QBzzvtzvDgeHGhtsNCWwNZiy66ZjAgFjL38V6ozhiBooHXjCmRNGL2JXuFXiYeWpH3QFDGEruRsPPjUwGv9yeki",
  "key4": "467ZFF4KTXDEv9fx6JoqDmVxr81irMWDBvA7dVbuwPnVMxYRdCu2G2NAv7bW4Ze69JFBFmpzihDvq3mESbmsaJdG",
  "key5": "2VZGdcv4HmQwjTWnCxbgQ7mtjqxYUzEPmEz6aL4MADP6aTK9froeiT3nyXNiaj2rPRrqN9S45FxXL7JHpwWDK68G",
  "key6": "2qNQ8vTFKyJo3ZVycrWHMkVPGAcj7rY7ggN8darxwkMETUw7hJzpF3jWN7erpEexPVoXuNZHnbuRBzBnPrrkNiCt",
  "key7": "3KXpRRGkz1qc8jrtJ5fNMrDYockxFoZhQD5NYf86AUNzr1n6J1GizHGBQYvP9kJDGQXqp2f5xpRXLTWBCGphyCdx",
  "key8": "4WY2DcYaxgGKCkSmgJM4KbbcGNuGr21idd3vd8LZJmb7f3kAaBHiVzTPFVdWu69bNaQetHDBbeSVu7YcRQFmadCb",
  "key9": "5Nk2KL6DP26e4mtxECtkgdS49DPhNXngT97tMDoJxTSbkPTDzi3XcJ2FEUWb1PXe9hdtHF22s1DmcPYE2xoKyBfM",
  "key10": "5hx9w6YnaPat58TEvHnpFybHDu54PTeyvhRb6ebhVXR8dDuNhgF1FniZRnAdZgrV9LUsM3ZKZ6BeTnp1RdUQfsHL",
  "key11": "4idfqCMP9TxUDCL9acYP4GqCpwEPgTsUdU6DKPPJizU1hfE2oZ2n3SgTskwtYBCRn597bDass49qaDViMfVfZRMa",
  "key12": "ZRbSWhreAANPuynF578GJ8e2pYc6PMhVJA6vtccqhBfTsB88o4kYugN5g3Pm9wGAqga9yd3ANuy2iZYSFojzVWC",
  "key13": "3hKdZ8quc1JCMghBmDow7eE1Kbw4cV3TLAcCpwm7Pi6fTDZ5CnV6pmbay3UmhbXPV68cHEZcnmAYjiWszdaLjU2T",
  "key14": "4CKWbRoSVxT6WeH5naDTziczS6FwMk27wrzWoWfYCACDx8vvFKH64h7PWTDdQ7YfNbZiihmsg65vjs4f2pTm3fDg",
  "key15": "2Jhc884H6VR5j5sfVNdQF2fGWe4G3JFSjHsuqkz6g1UFghPdtnK6US3tmzdLYytZ9XiRP85cnbCJkvjDqyU1c8hc",
  "key16": "5vDbV6MZ8wEHhcxP6af6BACsj8dbLBgRLkiwVXE5yeVQwruDKxmTXtZxEmxYUEdKpkwCdZacVaokhTWpwGigwiwK",
  "key17": "2CR4gKfbPWMM1g9mgK2p4yJSgVJqvNmers9A5j1p5HF4BzqoxmefBcqHggRFyn9L9WvYjj3RaUh3khAkDjyXMrHm",
  "key18": "2238vRuW7YrU9YGMX3XuLViqAc5EnpZJ3viQMbSzVJnENXhsLsLqSqbVCAPhniaf7MiDAvYqU3sj4kDZZKMrASSq",
  "key19": "3hCj45ZqQv8dxRFJtrTGxoeMtNeHySjaywzMQ2u5LqqhnmERmA8of3PZQxCXqnnWjswV5scvWZVVpqEuZ2R3L7vr",
  "key20": "3Xc2yMSfXYcRvUrA9JVf92nXT3U9zcU8QV7QQTkXG6iNR4RyuWBJaeiXJNxsb3PXHj7AJHcJaMy6j9gqYCLaUJY2",
  "key21": "4AhPG23CzjEXNSPS4VVTc262hwMHZCK8KFpybBRNQuh1nLctR2GGHtUXbRmzeVvnuZm4ysuLEkfG1XECHbFVYX57",
  "key22": "Luk585Lku6T2NZZK2zvSSR49VmirePowq2Vr4StqVA7ubGYJtweAecNLZiwQMzVezZJsN1yxuxBwx6D4fYuHYhM",
  "key23": "boY27RNoF6aGdk1b131zZaeByfYqftXNbdnkHMeYXeyhXsAUr4TQ36tknUetyz66bJ8hnVvYkXRiwrKgPYiQdMz",
  "key24": "d72avE52ZiKpDX5eBrzZMoDmh4sYP6W3hr7KmxNBZ1tHA3YgwscWnuuR3S5iVdumvWFfZJLjswDRwUCedafdyQS",
  "key25": "3DrZuicgj2cUqL3JX6yA2muqD9vybgf3UfRSAqMMe5HVbEBR26Ap9sQBkFmPwo3s5KHQfyp1dZq3ptDvY32g4dJe",
  "key26": "2JLVfS3JnJeNDp42VvtnYY9D5Cp5RH4QMzncDYPN8DX74cxhN7kFqfFygRohPZUMRMF13gf4Chjkt5bGXeAUTm4o",
  "key27": "5bRVuBoRq9Bwwy7QHx6ivw3Y8XdYKaggYahNyqyF6c9BUfVUHD2AngHcGKFLtq7937XNByvYZnWCciisU5zfBHTR",
  "key28": "5ZkM9LjQJuUgQDm1rYphtfiAjzpGWs37ZCnc8EXxcmNvs9nE64SAzPANWhgR11Rgd2BKi4M42vqKCVutP3LG8XM3",
  "key29": "39CqUgv2vaX6RHqKYeposJETVzuVh53qwnGqiipoA6cRtsThWk42xjBoFuJcZJtvXNRwrKvX9hmm14b9gyd5NcnY",
  "key30": "56sobaKq2xf7TUc2Rvr4PN8zsffFemyL1EiqJ5WjMd8F1spm7Fce7mg3KTB34JZSaYVQa6CiZYU5sQjuMjYLNYSy",
  "key31": "3U4pJ8opEdVNy9CN2GNadubSqzRh3PNHx3CfTn7n5uckmXkAraAVSaFpKyCL9y3y6cb3ZUMM2FDHHbW7kERzLyqN",
  "key32": "5uFno7id4VQTchKa4ksf5geQ52dScsSoZrXLAXmSdjc5H4ZQ6Ps3MXrThVCp9MPV1mzfVKpNdSxHEDa6xH6wW54G",
  "key33": "JnBwrvC4gPFTp4M1K55qphcy485oc21YwR7prDNphLAd1gEPz14SecFxC681o841A23DCKXZSXBgH8EZumDV7mo",
  "key34": "2GTUX5sCExYCnRxvfeQRm6cXxiAs7xqN6vKK4v5GKz9t3yvSQkoHpG51VJm9ePS6QUj4sr6qApeX3d3wEQnBfVzc",
  "key35": "7iHwu23NEe6g2j75dzU6RaRCrTvq9nrr81jUxFUtBe9As6z3EqwavtWM4XZyjKMRoLUw1CWRCt3oBJRzMVn7M7W",
  "key36": "3irxoGhLngEVbXkm5236ChvYjDbB8TCQt5K1yzxjradbvx5eLnvtrr4G3CjQw6MLYA6XKN64vCxnibTEcK8zg9CZ",
  "key37": "5iQfuj7m6jQ552u7TgENsKGDiCTMkPYy3S7Q9gM9d5rqGUkRn1mQjX2tkPqtVTDQCWuT5AgUjjSGgkvRRFbzF8k4",
  "key38": "2d1Cu7562onbXvJuKu7cJpEmnQaL6qg5S4os4UmDLrLBdKg7kaRBYkmax5NSpqxUNwBCZicxrtig1xAHdiLsNrQm",
  "key39": "35saxcPHUqPCrXEUCSaykoj7ZD3Cj33iGFXVcMNVweDTeHUEHqFYKUvogCDzy7JT3fgAdPqFK4BxXbEyr7D9AARK",
  "key40": "4DsJeyoszmNHBczGV3KhHdFgx9AAJvhTAyHgJfQGMPC4QZpSwC4yyRvvVL5SPoWdj5mLWf2g5Kytg43ViYtstAaS",
  "key41": "4TCzn5JXQ9A9QrE5RV82qGbKMuq2AfHMXFVEzDQHFwTSTTN7upj2pzfBeJb69mosiNXX23XpdxjxvgDZxhnt1fuA",
  "key42": "5dPiib1DePu3193Chg5XZUB3e9GZS7JA2FBUPZee2QHb7a1xyv6w1ACPPipHVHo3cpApCXEx54KpRdESruQDPCna",
  "key43": "yrPxit5aLr4AtHe6TjdAGL5PM2BA6YLRmxWjM336XPa3TKDSuzUYhcekUr1XDJ3CJH4R549yg13dyNAqzKoMw7c",
  "key44": "5JCMdDYjASrvJ7qCLpkKXHnC2Chq18QvoYQT1cSWMnFk5yYytkq2nP6Nbfrn891WHGYfap28TPbyaqCoXEZGpkD2",
  "key45": "5yCpXQzyPV2m4vMKg6zhVetdH6bN3wyPkbYUeHvxeHvfZxtQjAdEdZxyKEWKfNFYdMUbicfAZtybpCAr2tfs3EJK"
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
