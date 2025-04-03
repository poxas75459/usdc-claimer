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
    "2TnHu3brx8BxJbZNFxBFVcQtMg1rayTDpQHk6syRXRoG1VXAB4iXdoe8P9dLo6NfoE7fM2DkWSzFv7Fdx49rM3Fo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xv4ENaHkgKEAHnbzxfyJoFfM3BNi3jbsLsKoywDGQ2wKudoP3B41nC1exBoZrKLMaKv8m5sVzFYQrScwnL14Smk",
  "key1": "4SVgrUcAK6LwARfu87yn9cNEgAENpznqDSGK9GyZuhhTYUmPW3vhqnKBSKLGEcubQ5a55p51U8wnkYWhtt7rRaQL",
  "key2": "4goBYp9etLSDZHdd1unYaHnf4mb5NqixxVcVPpC9vh8jmWWDgwsQkmgQWzgbBJDxTUNg74BpYfqiMmjRqpbWvoM7",
  "key3": "dhyuojir2aHS6DXApeBJ1RYkidNuR6DX9HgMhwwt1C2R2PjXVsXfoJDXfLvvGkdjrxRnRYFFMWawLigMhv4X3CQ",
  "key4": "4srU5LdaioFtiNcMW1GCwmrXMfFjiMU1JB9VyjXer6thwRjFJvzjuG1oiQgLG422RjKTdnQjS31gJZz1dziusyZi",
  "key5": "2ewfnMoBdTKUjV3sqF54S6kP8yuc93q6ptFm9K5NWqMtPG8jvcoABpZLK1pMqFUXoe4MvrZucdgdvNZKXR8NxapK",
  "key6": "3feW3fMxgWeSZSLkaR25Bd8AxWSsHG1uJ7YSBK6mo9Wgdw7CHsG9GK6gdCQcHoS4c5CeBR5Pzvf7KPyUb8zRMBt2",
  "key7": "5y9ekpTWwLpaHDAa3q6QbgFrfqNZn8ZQqfxtNjpmrvJSp1pu4m3kLqzh7MVCXJizECBwRmhM5tQGQeHS6aZhkr2G",
  "key8": "3WhfKTVjPNi164hV7AdR4n2Sgc9E54mCp48maJGeVdnbBbWUYKiT14X2CVAJztv8TajfaqZFFKgQVF2hdkqbLTDw",
  "key9": "58xtt3Wa24ZaDB5w87Vhua1fWHghVFmz59p9rhQL3PE9MkyZJEqMq4nvDCCRJ2mVfTsxxpNSP9QXpn4CZdwayd1d",
  "key10": "ei8sSpgtqr6Ccge2AbfQ1Syg399UdNBc4rPTo346ArnvrqYrk8vKxYKEuKziKaCxtjbU4Qtf1VdZ5r36nL6W1Ns",
  "key11": "3UzP5MJMM8QTC6T5ME1CtWUWDRcEaWCYrfkX56c98CPEWRxVotPBoqtk31FzT3xkTDKyMkP1x9wdG4AddouwpJG7",
  "key12": "2qwnniTQP7ZmCbf6vTrBRiut46UWe9MoxufzzbiMR5d266cQ4j6QpBHGPejAjXhQAFB12egjcHwyP2FzZKkNXh1w",
  "key13": "3DC2fJW25KCUbz1ceptkzuYFxzwtfVTQZTTtGqqFaHQLEgLWZJzmqiBvAnqmukJq1NYsHUnz1AD6ct4WtRg8BtPu",
  "key14": "2hBDRuPRCuNbazYaMnFw7FVjD64q1Y1qM5HTiCUsifpktT5NFJUPdp3jo8auvQHd1wJEJLXWjpZWeAtgDBSxwdje",
  "key15": "vgQXLriy8XguoX4XugE6dTHvqviHcAnV54VwaTqpFmFKxU5cX1pAU3kunePyBrjdjrDhFhavh7WUaRqqkVWP6DB",
  "key16": "pYUCLZQ6nV5J2B9n1LiZqpyQ9Gnpyu1dXbKDw3zKsGgiHq3V4ypX6VZXp949smUPwJfxTmVNPvdSqfLZm5crEme",
  "key17": "2jWxKus1t1SfryiWnFPnzamWm68gi2ZjypNZeDSHbHFxda4LEArFwSVvNy2WkNM7CdoEpKKCsWZthPvoYGegBL4k",
  "key18": "2rejRdS3CUDPXC323hRxHRXhtDJZcD63FhmyqPuPLKZQoyEZRfmCPgsNAqsHSWtUiYBuWCyzmuGhQbM8NskGCbGf",
  "key19": "dX2WUzUPv9UPq3A27V8XrYrdqvZFA933KeNVt5vdTatd8fgCgDZBHgTrzG3iVKnxGJDCS1VDXLjwvNdorNnmeEA",
  "key20": "3F4g6xr82E7pkZ7gp155rTuswy3S5CrSb2gqiPeCBwn1MGMRA6tLk7qgWjLtL3VAumcobBRQ8mWfCLySyNnU8oDT",
  "key21": "3dPGTFMKDbscQBXdohzHvyWFZa8ZtQSDjkPRV6sEaRYp7qvF1MAcuDoPK5vb1ZZGdz6S4KLf3c5E9Tc79DxcFkDJ",
  "key22": "5s4ZDsRb7rufUVyiVFoSsg9HJLQc2Xk7VDDvfmBMtgbvAvVG3FqXkfrL2Aj4YnBeMzvyTr8nbvN2vwjCeCzjyByN",
  "key23": "2CBfbv1RhKbS2Uh9JcJ1nPGjDjkWpQgd37z4x9h594bsnNYe59grPUdKKbzS1yCKSRoF9bcktxBKtj2JLUDakTPB",
  "key24": "3PNnaGxGSxSXnHEBtEKaZXAx9SARwNDhqcHHBQnxTziFWKXHvDvit564G6qQBifrdZ9wnwUudL4kLP9eSJaGHCwg",
  "key25": "XFU26Z5GNgwwoK1BNtsRui5ZsUmAZF5jNMWtPGz6w3N18yhNNkFwoprPeWD6iQe3ui2J8DeSgerByJ5MmCCUNT4",
  "key26": "2yYLmrUz9R9arUypnQUSLjhzEZbCpaW9YQSt1YahBLwTa9EHqjDrUTrBvrHSWofquAhKtegikvXz8hx6CbDN3EBi",
  "key27": "3uxmpjgYZ1wsSh8PiRKHNSYxydCU7a4Kyv8w8D3GJuor816cGSPiKNbeZCT6iYEbVSro23TjEPue37UchYtzjkPA",
  "key28": "5UXqowmF4QT9ED1ofzZAMqHbt91BSF9zAPqtVBdajv3DxDF22XrndupXnVLKM2DFj2qQXbdK7iJVHZgBfYDwSBS2",
  "key29": "52G4jrxaxzMeCj5XzgMq82kqjLWVUjLKL7WRaqjnwrC4TTAyyKLq6t7Az2DnLKkSzgwUhn2jSqVoJ4KCfgcSKvLi",
  "key30": "3nwWKmcSrPuXk1ww37SJftUAMTRHnt2iGNqG5g4Xvn6X1DVKBYoN5ZMC3qzPj47orCyDvL7ZqcjpVVWU7dheZM4j",
  "key31": "29MK6EcHHPfuQCcbk6UM2sAceAqpFz4ZjKe1yoCqxzUfiHCBDii9jRNMDJMmHe1CAt7KjKjjF39vFCu4U5A4E7DF",
  "key32": "55QhyFBqi46NpTXaJjwDqiVd8P5pXVN1USEBWoHNwouvmuAGZhyTFQC6LSmy5PpHjXwgEoB2E5TTy8Rq9gJ5V8UL",
  "key33": "yWfdkA6e5e1DogTJcggNzitwTprvSbghEfRAfa7vyddf82ZzPRKDh1b2aRv34pVfYDLRwfAGRYHNr9qp4czqFjW",
  "key34": "62xJgWrnU38bgp9Cg594NQiX8X6sFQzzMRnrCBF9bmcuNtCMvcj5DyV14b1kFELmrXo896hos4nJcxw5GEv2E8QH",
  "key35": "EbpkX6KAnc6MwbZX7PeDMgpbDGs8SpFp1TyV42Y3XD35fxvBMf7k2gN4u4sSFTNwkW264RpWJu58HMECgASbPtp",
  "key36": "24ePmAKU7EWmNA8QV3ZsU186NHF79TbWCcKEJ2EWJA1skS6bJjp9RenvmBLcGyRXPqo6njHmbW9f9ox6duwazb1y",
  "key37": "4snjSbi1Tfzx6KTsGQG93cGStSw3CKiDCJE3ejM5xaoQeiNCRnh5H12stVH7ccS1aiXVd7ih64cfp6gKjXECUfK8",
  "key38": "2bAYWWyDPUNdyt4yqkitXuY1VjxSTNfuKETu2QV7vbF7MZcjWFagaQKPifkG9yUHwjBsAdXFYrZ4unsz2dMxk2Jy",
  "key39": "nEUQk4k66nijanU1TthTurPYrz1jaA49eQEAfAwb4dbe1bdubDHMHB2tykCDEMzTGALUr6HRvEwPwwYn7J78etB",
  "key40": "2mK1R9J6J3xdoXu2xGEMxij2vzYrqqKUAZXu56yjxqBJL2QGdfNcs91Fde3wkFTvAZLBi2N1HUVTx3n5By3x8wVW",
  "key41": "3h1yrg7mjEsPn3JdzuwaKVEBJ7r417jahMvE35KJAwXnmFmFqnG7ibtm96V6seqcZ8yN8nUuDgNMWEWMUBZzHNiR",
  "key42": "3d6Zq2QQcDs3eewhYtjUsZUHxBTgDHWkf5HR2AzWrurx6TvP31DSseGQkAgnXKY5acbX6Yu4CMc5A5RRqueqCvrw"
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
