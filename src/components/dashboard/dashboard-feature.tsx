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
    "M82GRUtHeE6edjznmgniDnPi6z8deBKxJEfdstmJbRdGKWpuKJpyX3vYFm4P21ucDKVCApmBC4yPthDLKkEx1pg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aN4rMwtCKbPKzw7SSywkTRyDiDhoZ2naY1QR1nsAL1VRfvXeD4YvF5kd9JuoRpdn4oA1XrEBcg5FJCo2yt4Hhze",
  "key1": "2M2eApESHVCFDoYqqx9qhGyXKCVFSjeZm2fd7WgwuMzVDJK4ybWjwL8SQXsyKacCpbXd156o1H3r7D6PCxgG8uBM",
  "key2": "3uGXZNvHtkiuKMpw1H4toV3bL5k3VMyWLtaqT4xi625s3dxZoVGxRorGJmrRsr2ppU2dcs3juuMvBq1rTfVaKU6h",
  "key3": "4R8vGD79Q5JNdn7B1tZ7iJQqo1h29tUmQnm3K9rr7nKPQBUyHfTbmg782s472NbnepBgLVwaaygusoXGhw7ZHHZe",
  "key4": "5tq5jGnC4gKddzrjTAZf5JvruJC47MG9gBDziaNonT1A2MgqH1G7q12Dz7Eg2oot9t9Wp8Vpccsf6Pj9aqtBCWyM",
  "key5": "5RZp4PW34MPaK7aCZPwcCv33mE4vD4SgxkSHzpaQjhEz6ULJVfTWaM5wwAUAEnnkgqCVNRGY59o8o5PkuW9pq2ZD",
  "key6": "4cfonTTg8iEy2yZdgXBxxXhNPdvcQcZuLfDs6dQD8eFekEM8p318F4rdWVzBK67cyKR7hs2UeyFKr8ucCSzB2Fnj",
  "key7": "2iZhq2aVidM6wPZQ3NYWasnwc7gaRWE48venFjcU18SM1o4Frt7UFqHZRCohfnDbUUFH2dBw16YgAmgZU1XvtxRW",
  "key8": "46hH3jLXP4D1LcSgKv4epZvR3JFHjrtvbEuEqRpSodh1dkG26osDw6YAYhSqDdGELYz9x1chLCovoyF2NY7PHVbK",
  "key9": "3jC8bxm4nkPtxh26nuWwAoxf1psXM3nzrBhUQaV2mZSbPUTr3AHE1wT3m7yioRwPvgww5Lxo6CBnaEAP3tpmV2i1",
  "key10": "3psygMVFLN3sYhfHF47WWj84cuJX8nwWt88xymoCRqjiUeNxGfXkkK5FeV3EzykTa4sizD2npYkCM6Ta2pWeDbRc",
  "key11": "645oavu3FSnpwWmcfE2cUX65Snmzq92RWp72KdjPxSXv5Me6181szeTmGjC3N91r1x8cSCEFU2EhJGQSLKUww54K",
  "key12": "32DSFxcMXB5kjA28NXTNXYuieRN9fsJTWnVA7V6MrPFh1DGQ56K2EMg9TmYyY3QUkRkXbQsvc8EiyfaRCt6SWESd",
  "key13": "4UFCfeTDHwSDZVwHci3oGZ6uhjQ3QjSgyMc4nLCeWAjsvXayzR9f2qiyrHH8CRu5JumQWP4dFN3j5o7KY2AjPxGA",
  "key14": "3uAJ7u1XLNuJfM3JGKFaf9SoCEbWXc1wquvZKvHCXvLkGBmdbseBcfjYwwyFvBVQZ2vMFmdd9rJSS3RRoqfaKMUA",
  "key15": "4ajmpg9NusZMCoHbTiPb8N2WLeipa5imH2HeUYDGtZobV2247p2eLxx8pttLmQRo1ZEJ7RExYJU8sfB2RfUKtdtk",
  "key16": "35niuZZJfo8i2tY3MtCqhL9iDLsn2T4m4EkDdYty1rPoiQp9EqLS1WGDF29cxXF9gRkNRxiYy76b1ERWtNcexE4M",
  "key17": "57wAMfcyy4ryGnv52AKdX3UH5PfKCNLR1wC1XdX1jZ77ghAqPV54C3AVkqiroHFBKr5H8xP8u2Szk9Eb6RRNxmNV",
  "key18": "3MNvf9kVoZT78t4Q4sesTUSdfTq6MSKL6RCbfKJauYorPWd67uqccivxL1ghLnsY7qdhJpBfZ94eio72yi4HGGi2",
  "key19": "5Lyzpb7KMVsxFqMPefXcEDLCfL6Nig27JpTHi7yXVRpDkZf6ryFcnvARM2LFo9U1uA6VGrypUDWPM8HeMDSepXYv",
  "key20": "2LZQKwgrWfX2FM1mWNAJcadn5xkXCjMC3BfUV7vDqm9ThPU3JJDUfiDBqtHsBcMFKkrS14cpHkk8PpzCyQsTUhqE",
  "key21": "59HxdqGvnLfyq9CWjeKMHg7RvmGCevzntM5AHvoASboGgEVzrnNdKj5AmbNVqAPNoxJdHm4V2joeZhKp94A6Xnr3",
  "key22": "2m8Fphm1ECbS6wBKVSN1qpLvSBhhtuYMzMrpo5R3fgKsPPU7ywLVGfvpUUXCi8G6vpegshdYPbwhBEsjCCg5EvTE",
  "key23": "3WRhH3AZRdSkfTbELd6uvp2epcaaJ7Yuw3Q3sKHvjDE792TU7oUB7CYt5WeBZymVUKfvyLkbogjKaeD7eHov54U5",
  "key24": "3Eth7Zc3MLxK2pSV34B3Vp4FYvJAurBJ8uPeiLPYAx5dYPC8wVjVahsoSR2oDgZgSJvaUun6Hz8dxhFHfs4koE39",
  "key25": "3fDJuZFdMCiwBhqinLhkNn9TfFQuQAstuUmHKvLoPw7RSmeUfvYZEcNGv2XDwtDvGHK2R1xz8GZ4WKeh3NgFVqUz",
  "key26": "2NdjvrX3RT5cvUFnAyABgNziXahxvQYUAJVzaRJwaCn6qG8S3fbuZVhbtzyCAGeTXUXWPphRNdLzV4y7a1rzMwJx",
  "key27": "55B6759i46UaNwdMwJMWTKr3U8GaWSPsBeXRvermiAQaZEm8i8wmzs6iNivcrBB3h4jTUgfmAzE3oSSo5otWZHwq",
  "key28": "5eTSEQZHG9ZsCLNZnXVgmjdtrk5TgjKE6KhqTDqMjbfnZnhSJ6zPnPTfq6Kopfor8aKDXLczYG5zNc3SfaLukpeC",
  "key29": "2SkbybiMua3MSPXRH9zQq3Hht1UY4WhMSixhqMPpZnmgA3nPD2snmWKCmnVDt9V5RGG2BxhRNpXoE9w1kDjv3qjK",
  "key30": "5ePg8yw4doNR8Nk6xxiM1wfjgyaccoh7xztzdxeVs6kZb1eTQ4MM5aD9YYzTk2MW8xgNgxZXfrheAxDHXX4cFmzA",
  "key31": "ausS6NCFzNVRsDUqWagSurDgph7Ds4hGXzbZC1Z75Zjq6f6DihYEcEYiARgqEsqL91ftGo1QjJM2c7mMGHsWkXW"
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
