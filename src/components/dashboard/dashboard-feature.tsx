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
    "3VECMR6U7UnhatVCt7CcJ7zjioiEAdqdPLhJGggiozZ8aq9PbkUJCjDfrN6AeHWrxzRddSyKQdHTTCs3QbCMcFhn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xZAth68JagET55z8udnaB7n2wtd2z5uvGGjhJ6uXt2DJBDgRg29BLqnfgVB45S2kHqPBcb3pw6BMCSQKteYuUZq",
  "key1": "j6Nww963W3UHkVHSyvSEYJRqxXy2hg1yeMymSqUVDVsjGMgFbUBSbejoRj7M6i7zYQXs5brM3zsyxwnrBA7CqhC",
  "key2": "5NWZoKbEBmXP6zS9kHt5anvdC2WWnsKB8NNXLY2fuBpbESkFof9uQhFeHbzdrrt1Db3frwFtLMC3SnWYNBZHfvX8",
  "key3": "5b3jha5TUj7DMnaD9qJrFXJ6wNnd8P9ybgr4y6dVeXBq3NZT1gijL2MWHGbZTJ2aKd6jaDY3dUh7NVdaWe3HoXYQ",
  "key4": "2arCn1LnJpDaziuoayvYxS75sEVns7VhBKMLS1D3qtKFz4UMKqsMzHT6EviqR9Jmtnxh2egvVVR25eeTHY3N3rK4",
  "key5": "4H3oZXtohSv4SqZxaP4EoWDE61bNuD5EnRP3P3ZKN93c8s5zYLLMuGRCVrCTMo5u22QAMzPKHmDb2qFmJZ77HPd2",
  "key6": "WnoVvc9KbBKEQ1UXeaVoC182a2b1hvHdBfJKUHUJiJ9WqhzvtNy5EunWjvM3LUFaCw6Rw8VndqUVQRcGC8pEFr2",
  "key7": "488QCz2Y86aCXEebpgeerRiiDiDgp2ZJMUGQ31BV5XPU34ACTF267MPdNTc9XxRnmzGDdiy33x3vRDvMr9rjtxzA",
  "key8": "tqzk8zLbVTbjCSUEs7Txw2iD5b5cz8SohA357UMtrapH3gx32HdZf81Ec2gdy9bhp1p1XMQQ7eYZsCdGk4y583f",
  "key9": "3GpCcVZ1kDMaCyF8Wm62cSgLrb22wxGWj4LWRSVsgfcPwkKDSrMxFfEvmgcjpkaB6XwbUr62SZeWHNS8PvpVcr4t",
  "key10": "5t2tqa1BgNjqBpHcq9WPuxkd6ePdECGVNkLfuAPCRb9ueKXcUTNfwPMCqPfPwesEh2SpB2FgcKiFpHWyPf2E1HFm",
  "key11": "XChneS98Ndk2CjKAyhJFTzd72JJjR4oAxmobuUxhUtJNHzJWpAXjazB54owjec1jrpPe1FQknQshiF364FfFZbW",
  "key12": "2swbBbxcXhrG7z8A3EVPsuj3B1AXJyebqmPgwmsZKo4t7x3rnVjoz9jHR8xoequAfKZggth7746fYkXmCHk2SYeA",
  "key13": "X1Bft4Xr2N5wESXyYrvQa2uZaAYeEW1DwW7MxH55vSeddzPfwbGsKgN2USGJvrebahXqRobHtrykRzE51w8aLJ5",
  "key14": "g7fEinGuMnDYCYoJ7qcZp3D7mDFxPk4AhnMJc7oR17WqFmWhqUpSqqeNVojd8h1LGYTBrZwJsQsjQrhj6mtuD9J",
  "key15": "3FyG8q2zTD1HhmtvmeVANcfgeu6WRYj1UHBfiBvdxk3wZbvfqwRKU4T2kAvWVjGtaXfrgriuquLM6TBoVoLvDoRv",
  "key16": "5EdRNPSoZVaiYAbU6MGWSiEnQkQHCsb4BpNrV621N9NJEgb5u9bQkEyfa82ZZhCs86Ke7WRodd8cTq3ijAahEbGo",
  "key17": "59kytKrDhroYtXtsfHkFvHu91EiEC743QysJTGzN6bJ8feh2ky41DDe7VQvuLGSVN4NpHeodM33cmdwARNMWEGj5",
  "key18": "4toQmHLR6sxUwjVMijNfYH2htMixXcMe1b2KWYd76DxL6FykXJVAXgu5XScwgH4HutRrWrp6UxVyLsvDCnDJzuUE",
  "key19": "3P8pwvGjnTySVgxc5AoLAmcDHKibawT2u6zXkp2atdXKab8Bmc3dstMxDoAsLSLqwtrPpCsZorXqCcMVNfuDs9eL",
  "key20": "3s1h4RPTSPbCUeVa5CLyvPPeMakYYWNcPJXtfWTG4LGWv7b5tUTYSpRSDsAyaSecFeMWUSsFWzpbqzw4yPFM8H4G",
  "key21": "5qdKintGXDYZyGACTcBQ8rpHvd8dYAuMm4Q2WRhyEnvtoUG5LLyK8oHZedLvZ5x6LAuLj7ji6mMi1242i2xZZkUA",
  "key22": "54XMuJ1yxsWXsrCL2v1b3kLJ4TMLSieFp9SBXZCAXixsTm5xCCqtfYK9RobtqW7bPaPAbaT3QDiFE9Yrd7wAJe2o",
  "key23": "4deV8zeVww4V9zCEozyTaoe71nMF7zE1Kmi589ELHWP7JmGrPiJB59uznDxzarc61k5effRMcaxY1meCR29Gn9yE",
  "key24": "4rqCYffN2Vo3C9b71MvSczT3akUWqZ5wVCRKKX7ZU4YYqUF8oD3xoErxJTvupEirsSSPSwx8bvvYGD7TkdcSoxgL",
  "key25": "5BqT1Z8gQBdVhK2PTEpwnerBt3QGVycZmokkYxx34KXtsyAZUapLuPpQnSpvoj2JhXWbpPbCfT3EzynWT81PoaBw",
  "key26": "3CoeS7N8xhLHQ4eQAGkABVx9E1ukCpriZHBdjMqEXMUnZUxPMZkVsHNwyMStxUkdTHQUpirzydNwHYEY19mRgt4X",
  "key27": "GFjAAJ7ZMrPUqfgAxGBycWdUcUH2pYeUdug3GHUiREiSvp4i4TC9APcNFbdSpUT1Cn2pZv5eiwMF6ijwU4GUnXP"
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
