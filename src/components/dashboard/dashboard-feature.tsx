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
    "4Rn1QC7K6zyzQkNk7Ua2cJpXw5ZmoscSEdQsY4fVucUeH88vEafY7K13cingibDd6mqP36AFjSxpPnUa81gCCimS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cU2yGFaLj9GFZwapRDkYtT3A42FwpgQxL3t27mAh7DamgZQi7oViKyPLQRhtw81iBurF2MK5yiTx5SgCkXJ8EKs",
  "key1": "5A87PdDg7rnbaxX1ZBs1iToMLtWef36R9NfZrLtZ5oVDtYEJzJFwg3sG3TJX1WPaBmL3HaYSLaZLEr1P4CRQ3buY",
  "key2": "2kWuAzDsdfG88EdCAYTGraE2EZZGnF1YBStuJPuLXspzkkL4t4xeYPVNfYByhEHex1aDRjSJWCxCZkfmCc74ArjV",
  "key3": "4bK1R9Ps15dz6Ezq8mrVUjMDHynRVp9Rg8JsrshjveFicSVgUCQGNfA5pUkGv71LK79ZqfvLCB7oSLNGt3tiCkhb",
  "key4": "3xKG4kq5M2iXwj4ur7FHfeDbRupqDx7uytkg1m4fL1Aiyd4TMhNSwbvdBZseTvZzEf54ajxy722LcGB4jZ4xboHd",
  "key5": "YiqrjbQR2Ep9Xd3pmqStrnknEAXk4xisQi7H254Z6WgASEpaNXiX4WGShWQFYfjQ6Hv6cNa5usQ6AvP1tLzvEhh",
  "key6": "2bEwb69eTcuFfrm5MpU5DWpzxSAMNQdkwMDH7vVvUq4YS5zQdE53JH8ZAezYwraGhCtYr2G2YyzuHnzoA631ego9",
  "key7": "3J4A9LVdeUVNQ1uUinFchBz7ogWucDzGrFeHZ3QqspoBsnZ3iF4SLMkvJCdxKuXdm3wUFKAwUU7b9MNoBNd8n33k",
  "key8": "6x2tqT9tKCQKDCQLMiht7CiPvyPPU5ukQiRzFoDMTDeLeAqw8KmVBPhJs3rBkXsRnpHEbyKwoYnKcRNGPDTMSvp",
  "key9": "2PyjAJ1aYUNhu6kHY5RjMxZX5TCpD6ddTQLKQs7xAF55BLUJikFtDAmvU89LxdkKgPBbQP1bnxvjbFnP8ussu7wu",
  "key10": "WpFE6cwU56K1iXRLsuT35D9wkMVJdUR8rK26QauBZyQqGVXg9RSmgKJ84NoTD5PWv5nnJzZAQaGeyTpYDF2g2ZW",
  "key11": "4maAf1LRxNeR1Y7p3GV1TYfH9DJZ1mtMBXLrpoDZdasz3uiimkyHiYmgXTGUzfkusFnXt6Xvzz8ZdyXWh9j8MTaR",
  "key12": "3NX1dCnyKtQBaSFXKJrTNCpfHEHZ7v7ocSPPWB3EtunqVMU9jnQniKLJHQrP6okt1FvHuoa6WHrVvCLuyuBazjSY",
  "key13": "2aTFj7zzRvEVch8h9wXTYgdCus7ojFGnnuKZD7WLgAQPFt3kUW1vzdAi1Zi21c99TP18LwDVadFsrrozB8AQje3F",
  "key14": "4ugDB5MbsbxYHD9tfnv5EJJe2qydjAVTYDmFLGRHjgtTKXbvxfGTCrTvJmYeqaHTFq77pdEbG8XsuENiodVrbSqw",
  "key15": "5DEVBGVnY8x7Y7436n3UJQg5hr34UH8WvDF3m7Kxy1H8JfwVYx6B2Hsj7h4GxXTAYJvb8hd89cXChxYPS3zKQf6u",
  "key16": "2fwyc9M7RHYxumTEmYHd6P3PhZkBXpUDzbbmexmPmkEWNAFpazTsnN2xoWkmCHrFGbeBTW3aAoZhGivYeZnAtkhB",
  "key17": "3n8qjX7Kdzgm3w2u73pB3xHLoBw3q6x6xqz6a7oX4PbwdxnDeT9z8ZKV7pgbWndVrjuMP88LyxS5k2BpBFSuWDGM",
  "key18": "5Xfcap8hygTdfxEMchSTcgFojrKaCaac7u45gnsz7y34kf77fLQjrsZWAxcfHjfLXgDp3SC7Bczto4ctdJWumXTL",
  "key19": "4cMJf5aaSB3LrFY27EKNNWgpaTBAKDZjbVnudNQ6HcZYmn3ogiWyiA8TVqsUstGBJ44bwLKmmm24p1bLjJxfhaSu",
  "key20": "45yu5NyeF8q1k4afnt5DSJpycG5iSsHkfM1g6Enrv5RZ2t6FTed97koosELFX6eQMGNkBnHz8kgiS9YaDk9G1XCP",
  "key21": "Yq8Bz6nwAi3iiSanVDSB1dRGMbgS25q6JX3EH5tpRiA6bH2B5H1eX7MzvdMEdR4DiPtgNcTg7fGw5KfuJtHsdod",
  "key22": "4TiK8iC1cuLuVZgScpitSFZnhkyxT6TdPHRq4Mcfq7BSnqq1CDTe4hyyB7pD7zL9SUWHCfe1LSmkg8eEXXuTk13R",
  "key23": "2VVSSiX18rwgTxhFyoXM3TBJ7n7erzqN785nkaZEn61g9nc8b25yWRcyaz8JWvUuJ3e1HP3AvEikMN4oYdvnHVEj",
  "key24": "b4bX2mDrtGtpBR8aqsXdGAaT6j26QuHehDwoTDqcYUZqrT5nNSBxvTYCdGUbt1LR1WrGvSL1Fz1hgfw189DwEuV",
  "key25": "4wtQQWBny6Ca1PDjPZZHXS4VGwAs9X6CfKsZNhVwVQCkhxnivQ9xNVi7uDf9h4mBfJzT6Rp45UBhtr4qvTFGBbue",
  "key26": "5n7iG2US7BBrE1xn7qdwJf7zQG2sZbgtZMthAwsURUCsCCehVQQL9xbDiCC3whw1XQ8c5vcPFq31WoqzgUk57DRv",
  "key27": "43trgY1mSrTwDc1JquG74b51HfoUqosmm8zKp2DaXbxZPjhm4DUcAgodUztDWLWjaGLhaYoR94bVAwNuGPNXdBum"
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
