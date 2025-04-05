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
    "5BMSV9ejos43MjGidwgnTpepKLYMCR8CgCtGhhMfgoj7Eiy8uj1wDs7pSuwTqk3zHubySe8pqrEJgg2ksyVkcAMN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XhghLzSXSkHqmux2XS8MR4K5uoCoTh8dXd2f24xJVgqNidA8DZKUHneV6HyT4fSNveBrg5rHmY478skCyDRPeh9",
  "key1": "5rzrLyc8Ko6p3QwwGSDEgNMrBgKuGsV6iKqvPV85gYmrjxu2D9V6pVpoPxt7dE9kij5RARqLvntuCNkVynKTbahJ",
  "key2": "2y275xGRVBJtEXwB9x3DLCB6pdU1F3g8C9PBJRWkFtmyC3w3rBLPDSeGcSmc8BHJ72gyNUqa4XSQpAceiLxXCP7A",
  "key3": "66pmYZTdKAA9McXMAFAAGy7r6yuExD6khvF8eEuy8YtMDpYAgEi8B3AQkrSsVonTFRWw3Ah2cedRPBvB421W9kuD",
  "key4": "5ZDcBsSr78N9QN1CrFrrXDhPNBncGay2snoVz89iLisGPzBrTZNt2ejqRXFDNF8c45H5wnP2GLotTLsSk8yhr3ZG",
  "key5": "37kabWZU3tVUrmFgF4u2xwbAXBHEEaNeiFEsr8JUfNqtZWtK195cK9vBTqkJgTJevYiutYCRTryAmiyERsnmkYZ2",
  "key6": "5ws21gZ47Bs7W953Yste51ifudX9MGRTPSag8uxBgwR4xBQh4miokRNoPZbetoYvZ4Qyo7PkU5nxnnCz5iTwVMLn",
  "key7": "5vYww9WoTe1ff1WjpGVdfUBAEKrKAvs16ES9FjqvSGZ8qgD7GBsa5SCw7DERci5jTcfA1oZpM1aP11r22KUQ9fYy",
  "key8": "3J9N7CmLwQaJWh9Uis4VwbCC1vhLAuUQzSqXkiW38xRfUhhuK9qSk5obeJZ7SGbyiusT8HgCAbPLWNGJRWc1C7x8",
  "key9": "4mRR1Nj2iovNav8GNXDaXzMsSvGsghDFuwYi1pTMiS9VM1KsV3ZmFBBZyD3yzynRPBqfhgUAsecjKmAHuz28i2ze",
  "key10": "5yFxSsV6XcLffS3aBv4sduoAfMPbQePqxB5XLYnob7wZcaUjSCZycpnzWFbQvxSCuFBwEaUyKCZm9Uuux5iYBKn9",
  "key11": "5xZ4t4FXSj6TwhETMV6YoFkGfAEBEk2pqDNzgchVqBLFEfbcAugQ7xPsw5pMMMMo2vu9Z1JWY3stGVDkPMxKRL8U",
  "key12": "5FiuiHFcYmHZGRDwMqRcAb3GvdQtFR4eS9zqDbEM6XajSaueSDBABPJCN8bDFdn2CnfJQPgq55CN3qeWH4RKuXhR",
  "key13": "5otbT6ShW2cAChSEcmy8zJ2CNWoqEbjuN94pDbZnhT8uGxuox6xiBJt49Wc2rVq4toaTfJrkc43gC7gNBxeERvit",
  "key14": "2kCrkz8RBtNa6u7BAafmLqYrrSvosFi3GR97dxnkELoincMF57d8viQypB3qZammjqZ8CbgS7fgWKMZkFcto2QeP",
  "key15": "3L43GgYNR6rbySfKz5rZMDsPayzJX6wS4HTVGWrmFtX23VRCAe11dKiddWTWjcPKXBXx69eYaHjrcbcK53AmsTsa",
  "key16": "5Ea4oTcTD1X19PeAPHXx1Z2nQ9fpfc7YVKevcevRvyY1dREgsF2ykmc3sP78ieCYHi1d8eA2qJkw4Le1VVV75qNY",
  "key17": "4GR6pRG3c5xxJUzcdYZ7JTaiBixQ4DKvhMoYG6LZrTpggbG3VvktVrA7gRP6Mjm6Y1RM3MEptSiGcKMg1iFQrcQx",
  "key18": "KLhnsRmucBiuhve9wbbjQNgLDgtyRhCn6wX5dDt47BfpKu8C6dpprUkPGDvxYGSTPSQ4RuMUYwAyjM4Dm3VMMMr",
  "key19": "4ECSENVk8JkFHKBPqoYDsnnz8AQmvZX3Fw2wZz58V87dhxAv7CA6nGsrWJSxV4cRrjACNP2sQEGKF3YA8ktNr4X5",
  "key20": "3yrtnRoecah4yGNuatG2VE8uQJCmfgWCSspXqDUm97fcdQHZ87sLqJ2N2dPD8qghjw33Ke2PPSTTrjNgtKejyvuo",
  "key21": "5GnTNqfVAiQRyEVjFW59KgwEKujKiAhMSLQUboB9JxsUk6dxe7ceXupmr4LsS24WLKDKf1zXyrPK54PqtsShPLrS",
  "key22": "5yEYEghS2nN9E2v7UgnHHZB3sK1bDh5pq4SYVS9YkU8Zi5hByYs1hzjiZCV6nLq4bzYjs8ParLFgu34wXSvdjNPF",
  "key23": "5VYZugTXAgBcFCTK8mQsuj5LBR3TUTZj5zmGsehCTNTP4MzAmjFvEGRyZRdsPeyukzfrXnWWgi2gtqcqPAExFnu6",
  "key24": "fC53cCoqrwmcaqJr5NCuZRGxxP5oGPo3rabZWy1GwaqYDm191qoit3gZzThhVixHNRf7A9EcnK84tyfzbo5NYUV",
  "key25": "4cvYey1AMrKLETEeMu6hC2rpPANbKhUzcdKnkrthdsjgMN1owBEBWMmsq4p18yCvhJUaX5hP4ByQSKWLgRwWDojt",
  "key26": "36nmQccgoXbhfXf9LsCDCrGwoNMZvXNA3iCB5DsnPUDC8NCThHrY9hPxTNp2e7zTyb7EcGQMnMsikxRmry7QWTKN",
  "key27": "4XHJAS8rUE3gk1N2avjar9f9cLptBy4RtuUpVxWWsrVLxURvA4UmtG9Sa61WwCSN91g9c42okreZrLJAem8R2Hvq",
  "key28": "2CGihowG6S6DMVJyerQ8EgrX2Vp7Xdz876jmDYQqKRKfkrvcraA8YP5TXMsroouf3p6mvDh2ZEncvwY97Micqb5e",
  "key29": "Bu7qjBsFfFbt5Ha18Ni9YbQLqvc7ssywwBz9y2fs1VP94xJoxnoW1adR6gXm2T6ih3yne2tG8Ygdz7xo7Br5gnq",
  "key30": "5X5PRwUBV8CefahHvySxJCdxy4QBYJu9CysRS96Jxm8G3g6rNNZLRthJvsPBFvwytVqhBZnEXepMvBbyrTabMFVH",
  "key31": "2osfyXSgguQiQdVNy3xS8QcZPTtuuYthW8m8Banuo4MvwvcLm4zTnwbknhY4wYyAPBzEb2ryxg2a1moKnsCUZUBM",
  "key32": "3jhxY9ynLCv2ukiGKQtF5mb6WocVRE5Ls2foofEcwmgN2PqwBNscxT8zvR3nW9hizokQnw8ZHJgw2V2nXRBG17Br",
  "key33": "2zWeaQpd3idVwwUNCyGFDqd8KKszSiJKi7hnVMZuAciaWDuiYoujksU3noVxsw5LxzExjPtU93kyL7FWsGJsSitc",
  "key34": "5xDGUeWZf3Dy3hpWo9ZrWfkWrDZiWv7Snin8X4FweVtxCUDbq2rCp4w3RXeKrV3UBPbpV44F5UEv35G1bg7ERGmi",
  "key35": "2FZ9ENhZQhArpGiQ8ZFxg86mcWxUCWH7GPU8kLpx8CbF4DquQqzHrR7UwokRnmjJpGY2pC5fuvJCDXwecKaNMvHo",
  "key36": "5NtYG354rz4GY79u5LK8zsvN7BJNgi4PbUadjWkKzRnPiduuYm1tQbwbJxNmo6qzHWnYaBsBHuAsQqfnjn45Yqzs",
  "key37": "5tHfV7VwppobVSVVrjDHsLhiixZgsMsabM1RU2BPsVzhS8MrTKiohWZoLD6NHBDssvzTv6Q9mxcap3miFsGDiXPJ",
  "key38": "67ThbFE2W3SYydox9ZSBxWA3spUnKbXm8ve3GS2w7npn9155276YUcGT7dvcNMPnYoEaZJYsLVg2smSfrhb92LSW",
  "key39": "28oS9oS5CfNY9tkqLQcmgdzZDqAmJiRMGTSnReZkwoDfdLzUoxEBhWq26Byb9jEKMQJXnMtVEE3TnKPazAGjpsgo",
  "key40": "4V4K84o9CEnsraeFASWsEGWc46J7raYGqe2NwzfBoddm1bQfNedZfRbuJNfkroMQTGnxWMRfuMHu46rmLpSdsmzr",
  "key41": "47qACx7reUiuq33jCYNrDjD8DNAD1AbFGPLeVBaTdiADGFuNEzjxUgFFSkTePoeZDafRCz1Sj2F7Hq5qaYUQVNYo",
  "key42": "3aaW2eSPnnBLWm63o2krYk1giJZQ5mT6fYXSCmNdgeXrBDSAvc7tuT2FuPvNJWEtkNgNBpM938hkJqDdceGTLiiC",
  "key43": "abuucdpLfKjKvEyvu2CcRLRCaxikSCAjEZgqLGU6CN9SEv7VagMRrGVWjxapTeGhkGh1Y7yKbQRcWmNCivgW7z4",
  "key44": "3q7JsLrywc6qCQJ7w93wWQF9R1rKdt62i8jmNajEXd7h8PGV3qaaNkk8HvQedBARuacqTpSpXcexMxryFftVKNJt",
  "key45": "5BPy6qH9719oBnY43bKnaWDrGbwmDLbfhPRmeAES6hAG1m5CbqLFHqxJXx2gdTZBRtPR3S5BjDDVk5ZAUfpQBFfs",
  "key46": "5Y6CxErsJmniKot3dfvvLtoZMSZ3sTKe2uSk8azb4FcnH2Z3caepDPsr1AzBg6nnKPUqUmqF5VVt1J9bMEe3ANHb"
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
