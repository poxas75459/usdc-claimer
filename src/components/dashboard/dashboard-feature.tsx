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
    "2XPDH1hrjY8uG2ips9CWKRAbiY5QsfbVaoG2Z9XdEgawM3uWjX6SNhjv8Nbo4zUdGPm3NXPTXvty1cmRgBEmnAYr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bFaewLm1cartp3t7wDGUCbWAEqcmr4xigmFaDDXZvs9THxFTbpbBZihRw4XuDx3WrudKSDy5PUnTxPY1jR8ycXd",
  "key1": "565HvQbYnuyghru3QMMQgWJNT8wiSso9maKrYy6XXLv2mJYsf1F9L7De4F9VBm86UsEpLP7L6hvHohFD8NiX8YwV",
  "key2": "3i2SSLFrMs1iVxdyyHKnZN2sUJQjFDfWEK6vttktYU4ZvSgE83aR7r2gfR9YhxvoF95KAF85p3MoXynBm1GtXd8W",
  "key3": "3sgKjF5WKvvt74H2LAdHjcnBtgm2SE114FejG7Zhn8E2pCieLNVUCPf67eCHRWtdCf7LzDXU9uTibr4Q9DG4f94p",
  "key4": "2CDUsrPYUp5qsfBo8wHSEQNDM5ZY5vrjHxsJdTz4yVWMF7hak7gb1546pW4m8QjKzajkxQXPq4U2vG7AWUdp1U7K",
  "key5": "4irMe4yJdAiqVxhapULoiBcAXFJgVQknYWTTmLVCotLa24gKT9s1vQNkuNaoeXqj7FuYMttQVon6vYGGfaP2qn8s",
  "key6": "4fLbYfGLBU1u96sCoW2KTskSL4djKMzgYDfPkPsBZ8KxFNAMBUNgDzKprBAAdBT7EaKTdtdAfKnibTzXmdAdhebn",
  "key7": "42b8wJrtgX4WMeiWV5JGSzwJXpei8cXZodmayA1msSjfhcxT1QZXsZ28mR581kuboNpggRGPidZzyTCHB2MQMrGs",
  "key8": "5zV88Za599BMpgbbDiAXSt2XmSzStixbcot17kKuS8kwj5KVmmjV38o4UbBDBp7VwrTNAcKBazyvE6kVkk1XMnPZ",
  "key9": "4CVS8HKLBHSFf9t5H2bcSw6DCwgFdW1oyXF4HD6nQSdb12RSgMfNMce8AxYfdjvp5juonQhenLxKEZh5EVgbnW2t",
  "key10": "5iN8ozyT8dqcFRxyogzkxMHEBxsynRZBpyH83xqiLngjEegDade1csuPiXjNfQTWBx37sSWJFbW7nwmByLVBVKZq",
  "key11": "5dsuuiw8Wu7yrWzQaN8qE2YTSH4c5rjxHeo7VHYWZGaryZCBh3ivcgv7wUNsP5P8DSXBG4hMCguGr5hy9AHtzpsz",
  "key12": "3ubYmfo92G2RFc5K2KQV8HVUS2DCzBz63t3uyR2SeLhdCi1EeixHaNzCLPzB3GBnFhWtLL8fD4xr94Vkj8ijadit",
  "key13": "y1CQDywja2XVDWezLAYitA1vvQVWh6GXm7g8d3vdjGhHoejMrzGUD7xnDtGmGCJbtE8paCGF6Eh19kMNfiKTFQH",
  "key14": "FrGK5qjWERPwZ2V61Qnxjq9sofQomPiERa5AMxwsGfiJJdWSqWFhkZoDtzm3x4PjGnqNT1pJ2wDPVG95gfzzi9R",
  "key15": "56mnPSYZw2FSa8KGxthpeZNRRcoFYXGYuecp5EVHqrE1vxrRLERYmsgLz2otadVKR96XkQM6oaLcg9e1tT58idT5",
  "key16": "2E2CBwBtb8C8H3U9KXfTefcXemV2VdBFFTvBdVaQqsCbTGXAvLh7ZLUNGb8ZWKXKp8ATnSiCU94cy8Ta2HNDUyNk",
  "key17": "3J7HawpXYn33S1UTXmXBsWC7KrAiow9EVa2npsxBdJzzHBUMkLGpwb38UYdsCpP5RBDhhzrfkMgs5MWXvjHbtRqV",
  "key18": "4PxoWtMNRJv8FAJuoAxHMawVsT5CRyJHszYEsJq9ykUPHsES4c6M36EGg6umKZcLPxT5bbxoMYAjsXNqrfAan2c",
  "key19": "pTMF5Q32SNEr5RDxUreyD8LVdzUrGjQsedPHLHgYy1HnpWrYmrJhTGXTVc9CPzbsB8LCneWuK8n9KDuJYgMYwc6",
  "key20": "2zh99Aimm3iYPF3x6ZwXKWZvbx8Bn6frsHcenFJAoN3q8EEuQ5etrnZjJ2jaaPWenKu9bHKWniyMPudmUGqkF3W2",
  "key21": "5MpQBLKyVEnRKFc9FgeJd7kcSTC7iS1fkVz5qbpkBaAezYobQ5TJjCN8k42Ct8e2TkdJHEk4pvLttcjwcyMGXDjn",
  "key22": "2LTys1bf3fmNydP9u6cJZJYcwaWRS62LEB5ebhku23RPh6BhUr15QQHnzK2DbCrVgAYpy7NxNhaBGU4DVNJdG2D3",
  "key23": "59rUXSxhXQmu8soJFSVSYB16vpJKMu5iSgvzFEfdyJnvnn5nXqeGKorjCopftg3FuNaaRenp5goGmwMB4EoXQRgF",
  "key24": "FjpcMs6d6ZbTneEhLcnBNmrWkfPd9RSD58mmuZRhYyzc9RXzjo7FXyeUownYoakRHDmHSoj4hWcRY2GT7YcPgpp",
  "key25": "25gTncUaZa6Wh7xJBFV7UACXhjewPdUf7SUbEBCTmS7LHMQ9xqieeBaWUP19TZkznkukyVqA6z83VmBkHfjM9Byu",
  "key26": "2fBRaF6a7Q4mAhTPX6B5eymCqwNrGTZLprQrV9hSfTYAqmw73wrLqZW3pkbohRmMUwZz1chLSCGwPasmG2uEEhrP",
  "key27": "5uTikWy3NMLHYLxyE8qn1zoTwJDpoAXi6azgjE9tURdRqRvA19g2KPM9VaTrKN8HoweEWud6b89jSgtKQL1fjh2w",
  "key28": "4UkFifnqSW3qiZ2sz2DJSPsXHHb1KtbdRJEgYfu7pVWUJu4D2BeY46jdmCr5gaY215oNgqQB4BWoGkjphGt3zLVB",
  "key29": "ELPePCexMofVumof9h1aobbDnLofoP29GfYy9LptiDrpH81bXhkF99QXPmd4icd7gmedaRdg15wy1SmqRQqDoMp",
  "key30": "3NBnjcV7vr1Hsp4AZ1e3jfYQGubtuCNdaAtPxxC98cTbJm6qDf9d42fdSD2WVvRbKxoGqHvXdBf17k5nV9S5EQJh",
  "key31": "oyvzUq1MYxTDnjqYgQ37pRDrjY2jjXP6h1qLH1mnk2WgfBC4VzEmeVC6Q4jevWBxpukNMvRUedShwsAfDccLAqD",
  "key32": "gbkXhkA3SJejiBTmJtHYc2VKFJDcKrBM6fx84sjAGrrsSL6an8kSG44vuDr7WYnUDDrMvrhvB8kpsJ4bvocAtSj",
  "key33": "2Mv5ZZBTtrLEXhbrkR8h81DKb8xzf9Acm7VEetSryeKicf8H8n18RKNV81xyQ5CrpKDEZMavTST9tezQ9aeafuu4",
  "key34": "5R1WsmC1Cs8GLx4YMPeABdk1j6nT3LZvG9D2sq5Zj8BHU1PmcXcXSEDKA1hTWaXhyZxAkANXtV5m4MRS3FATSH9q",
  "key35": "4vTRsmywLXG7LzmSKRUiLnAgtWGXUaL5Yp3jkSZ1mWiFApJ73vh1gVyomqJ5KdkftyvAXC96AC8qkRBd3nfEx2CE",
  "key36": "3ATWCdJfwG5raDJDunSw3MDKzRGqAKsWfvuJzhXUA38Cjsjw9UzmpNuZX9c8sM24UVHGDEUzQZjx5d3322L78GQd"
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
