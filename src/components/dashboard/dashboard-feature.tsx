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
    "2sKimTJ5qPcB5LJbmBHC79Upf9PaUc7sAufWFF9qefGrVVm7qDgvifepkJbucFJscta9615sdFRd3KezgCPB1xQY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CkqkBRHEG7meuHJxYyQzrCvYM3LuRhpW6Nz3xsQ1T8nTGhA89jrhtvHoYmWv56WyMqN4BDjA7D2x2KprfFJWzf5",
  "key1": "52CJ53FQ34LjvLhy4dkpEpm5n4Mt71MD48zZYT5EMrfCtW1jzY92pbpbk32BansKChzYd9nXBBr7JwUcvmCAdhcc",
  "key2": "3JhU383u8wzKZVCcKgkAa3PUPQYTGyxAc4C1157eTufXpnqY8zHmgURVKxnQS2WNHPogLheZf35jGqjmqH2U5o8Y",
  "key3": "bBy9tugXqienMMHTEJAqrDR95WiQ1h1eQhunXTUyyh2hNPBf9orRd4tn9Rn6dpZjYhfB6EWokpcMZu44uEKyKYn",
  "key4": "4vjVe1dYsHA455kmuhY6KwmHLMM2FKuU1cSLH8vAb17RnQWePFgCrMAQHjRDETxfzX1majTvExLLEwX83TJWWje7",
  "key5": "tQRXhzuw3uMNBESxXjSHrErsuJx9AS8A3DDa5qSoxAXbC3ec7QCZ45PpkiypAhMNe2VQq2suDEG7tgNujoT1dRr",
  "key6": "53wyaGZJ4aeFzapSVoV2wWofwqTSmWTtzQiyqXB1wSURwWPWTTWUVjrk7WShvuvAUzwph2yhgeLcVTbgicJnzprt",
  "key7": "3bpEL7LUXgjqCZCYWqcN1FLyRzfiLyDYiDR9CtgLDo1UGxPR74zuRtwsXq4vvgat2TAotjjEzy6jCQ8w3xUpTGE1",
  "key8": "5VR2VJTKFDG2zi8G9zp6PLvrHXM81DMH1Ky1z2hN9rAjiyT33mHFjbnPZBRRFVmsXXBUKcKtjSv6KsjTybULE7oa",
  "key9": "AU43FXexy7Dv4wJHN1rRBx8eFrUc1wSCZ59acptyWuNwZaeCL3phEgks2Keys1pubaePHde9vEy42oSBw1Y5pCv",
  "key10": "3gfH1tpG9EYaAtr9Bdzp1FitfKoRkGXuZStHJ2B4BFn7d9C1bYjNYZ8vaftbskf3QsSR2MrgvfHxUBMS6HAdzTmi",
  "key11": "5H84JcYwfsBKmcT2EV7vKNZ985BzMdEZQededNcD5XxRYbrpBMk3oANBjmLvQhDGSL1KDSbBTSQ6b513EnYu9ftH",
  "key12": "5BiGo8YqkG9vTbtnpEsadxcBc13xMvEo5hFj2FMDfiJw73vJ7Ps2r3n9fcNERMdn3GMGi8wWsiXxS8hrVA5nM2WE",
  "key13": "ZABbFVyC5Mj3H9XxECbQoHHVzPALAK5PJ4dExchKUjX19qP9fioB5Ttn9CGzWzeBCeyiANeUaPLiHeq1Pnbhhsq",
  "key14": "582pDawNXUZBpWUXrBymTKrGsWP49xUgzG18raLTLffpq7WyBKsN9nMqAxp6jtPUcmfi4akNCphmFiLEEqbkzF25",
  "key15": "2VvNu5PY7mYbtHAMBBfZpEWFfwJN7o5vvbhxM5WcL7xF9Pcz7V4MW9YoYn9uAdVmoNvHs5pmhnC4Z7ZK76dEdpKF",
  "key16": "2AcLnBp9HZg8SXCGrJG6LbWao74Tj4W12YVULweu3ZD2tYincV2gGKFtoJEUNAYKFvgdPkP8q2sPQtZ3uTtE3yLE",
  "key17": "4HAB5FdTggK5ViycQUYmGaZXFEf5cLncg3z9ikP3ab8vQ4NqCGXoTmtUGV7u5H9bvzpiQb4kXChNddEgsmTDoquw",
  "key18": "46SG3GtDjkLUYCNAkN3cpoqb99hP77er4p6W6DsR8WUkdk51Q1yXdgyFFMZCwU5SFFouRxVxvvz5MqBPVuiJUK85",
  "key19": "4qMRhv9tc8HRCxw3nnBE7DrnSRfvY45joQ9u9iC8KHvzhxHYVEAAit9kHymGpv1GPoXK2fPsAGF41WnWyeJUQJyZ",
  "key20": "Bz3YNzKVJQTzMhfff8W1mkS4UusSjgPeuQAHtJRm6VFRW6nsVzNNQ3dPKQZyCKYsWaFzairCJoLDGNg7WSkvyNC",
  "key21": "oUq9gMYREjiwe2RkWZHtM4taEeu9kv2uTcJzjDLYRkC6ww861d6bTo25o6gMEMjUWT2aVGuw1NMhu3bgzZTQRsu",
  "key22": "5oBYoxm33XcMzjBsc5YPCGB7yfxDrH34fz7atyusvhvZruBV4FTPSxSY3ke9wtrEEbr9FqaFkuKFCu2Hq9VfPE6a",
  "key23": "3sXN7BUX1v5R9XQryNzCX7jviTMu9GJaWjz1XizMPK2LKP4foqmRaXz2ZJB18n8hSkh531xP1UNbpEYYqvgd416v",
  "key24": "4cTQsPKXBymDrMXAShscGLLs11RhpmsSYzh67TWVwFz6jvaqPW3aG396ZMJyEe9zMJAnYDYEjkvLpSeLEvmRDfX1",
  "key25": "25oaX2n9WCPWzpCgzoaxbPQfpz6n7hm15S19DJfjFQHBFEBdpTfb8iu5pioo4sHU6yZEa5zUeczpnF1srdnbNCrf",
  "key26": "2pKPTRFVgZm8yQAZe1DHg16a94tuBimEvYAMjsXonip7UPy2SDEf4aTWXR1tve3ih5XDaCVG5yAWAfD2AvdboEZM",
  "key27": "5daYUtq6g1ysJujZbeukHoaHSkNLoKEzxooYQ2PVVq1AoDTauF3Yv7K8GzdBakAq2oQMnk5MP9zbKJbLoYCqYEpV",
  "key28": "5KLcPuWdMnQhN42wYaMA3fJmJCqJqqoiy1bRYBdtvXgrKUJ89xg6J4pAzf6xXFJmqy14jtVqH4Tx9XJ7RdVgjvDu",
  "key29": "66jpGGcWe4XywmVJAMiPCDDn8sVFQLkVFzY6LBB366c8vJWYWmV1FGNEoejDQguTa5ZFhGFg9woTp5czz2Kku56h",
  "key30": "2dDLSJevDQeB9U7PkDhi8HDqv3jSbX1S7M8XDVjsLTXHK2iA9csXNHJF3W6YaGtwa6b6jNBLUzRmeajot8vjicjL",
  "key31": "5DSHJVhBqDfXBZiv9dMLmhPMs2h9KzzEq9isgv9dVHm94reFrHQPsmCvdu2ovddUpMzGtLGPXNmbJRKA7wb5GAhz",
  "key32": "3ibgLsdaVYTR3kiKU9qhrDr7XYT2dbY99zCRAQCb6sUSGivj4ZA5cHu7RMHv2kgLZbiczEgF3LS8TsQzBn9mjjw3",
  "key33": "WUoxkecSYYYqNQXUExX2cRCoFurLtq6ykT9HbWQSVTRph3gkEmYCmpg6qCqfUkPS9GtMbEsA5qp4Aqu1ACVY5Am",
  "key34": "5AyTsMBdT5FxYhJGMNoN7aT1ca7K1VSS3RWokvU2mtvHKhpM62XXA81GvFGKzCmXSEpWJK9KuvPmcH2dxTZv92p1",
  "key35": "5SMyZEoUt5KY268BZCYseBgign2W6otFsHkvYyg14nbHVDpULN2iTASnAmmsF2cxpgVAN3eD6RNC2Wk8qrF5Guty",
  "key36": "4mmXhG8nrp1wxTPQxcWGWpXMuFADyxmehuHmbN15Y2V9F7PnNb83BD8LZPNB4S2q8oiAuevHUppJibYrrQFX3Bdz",
  "key37": "63AtbAQQJXJcDJDd2ZEPm22KrAZtf1CexQXLTTPW65RDL7SnnkkJu9ywmvaKfGu11zbgEa5ruWUFUaE78kbsASRA",
  "key38": "56kMeTAYS6P6ENZdYa4Wa5da2t1NjtvbE3i8ZvhqBstinCiLHgXEbvX8fF1sFsFjSzXbUwTMGp7w5RQp3XrVGGtY"
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
