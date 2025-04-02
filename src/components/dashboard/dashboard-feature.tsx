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
    "UbXCS7mHRS1x85QfWbDkWUrs9QgnpqPDZFML1smydLhKaUimASB462SCvj6BGM9rqd46UAo3W4KAQNYM5CicTxM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hsisQVQZcDaQdnRgxFKFrwNBBjRLGuH2tGPhG2aJwrDnbfSAtYjd6KsjyjbaCv8z2KdfoUQ2XUeUGx18JfvVkvA",
  "key1": "64WMUBQbE7uXzeFdCwrDaMtXREszK8i5qogQhiB2eADnbeHvBdNfUEL3TihhHqGUYo7EtxjvuvapPRwBWpoTqJv4",
  "key2": "2tk1q2JN8obZ1v9mMD9GuL4Ck2NeWonUZbAKnYAn9BSAzW3L7AR9qPdrCVm4fRiCQt5128bZQx29FbRWbEREZJbm",
  "key3": "2c94tsHC1hPiyQTsJydZWzamBd5egqSMjdnKY9MHRYeXoKUidvACeEG92uzB1S7F4R7Mb9GyjgnGJGpzyDWzhp4D",
  "key4": "ooYecwngERqJyMYZgQivGA8YQZKwEJqs8VwyWsQGqsJyakGs6YakCMW9ZhAtMcFMBaD2pTXQsnuEj5Gz521PH3V",
  "key5": "5kBBvaHJ748rwcBQ9Q47v5MBRJtAfAXxhUHhv8JvBx5gwUCJtj8pEDwNtKavWyyoMBfHDuVbgMterHeXahsVMGNp",
  "key6": "5QiqHFFHACRnQRFPZzLGVC19uhD5xswbLpj7gVCy5yUCLS3qWmwg1jvCZ1sKGovfzPdWQTiUCgxcNxawbKCvtytf",
  "key7": "dHXXvY7KQVX4EpjoA8wLBZoHpMQRuJeuZTRj4SNtQeuXjWos3j5jQXXqQqF6QboZhGVC74ZwUkQ3hFGPGrezeat",
  "key8": "2jD9FCACNePw9vrAmxi9E9FMAbpFFWVBCEXGwvMJe41mGuL3VFotYgLHghcSum3cfrXbAt3UzCgPxbaAmGzzqnuB",
  "key9": "5jfq3V3D8AG2CZLrhU4GdUdpnpWVquamVXJ3EwxKVJ694efqKm1b2rBFdXpp4SekYk1XjUv3he8yiP2zcFxzK2Mi",
  "key10": "2ge2TeCUUM1hu1VfEC76j1f4dBaYGGtuUGxyaX2RbSCVDanP83qbXj1bf81BMCC4etYacHQDGA8VnCkA7Bvj42H5",
  "key11": "2FyNaZHmujg2cKnmbukBy6GKcz33airSCgcR99kvhH7zT1MY6u1aACfaAFevF3icmGEc2TpR4RQqqWMR44odFHDu",
  "key12": "3tWwD7Lg2YPke4Fn739zh4tZTLPTaSg8xPMuvSQ3imAPMjACEJwYsAiA3vxcr8bsk5dAR81MSKDmKjS3y7cKp2TU",
  "key13": "AVggTo3bcm3S3HeXENVHXZo6ZFTfNFkrqPJebG1ZPXEPSpVPyEot9GCT4qmCZ2k7HQJs5BqruPRENzqyhpR7T4N",
  "key14": "4fQnHGpVhqhGS2UkjZjdub5nqAXwUSoUypAB7Ezij7NX2HyAgbVAbi9DeDDC4PRG7KtXUYkEyPnvGmYj71ZfGYyj",
  "key15": "4ui46Tdid8GjjssnsieTPzRCB5twTYDxWoi1raDUfHvAPm9kesWdSHGBzHW4Weq56VN85eNvSNDGgWPSkg11VdQA",
  "key16": "5H9fyMg4ExvJWXPSMkGCwBRGgigiXRwDv9C9hnywPAHgoBYR4UKVBspC9JVdhmyMQVuSJhBSPdAiLjq28BMTFeyB",
  "key17": "3wogYRsGvF46zATRsfVaShVVfDDMNEYPajAzU1L3MwZUTA1kWrfoDgubjBKrw7YyD7pxP5pmAn8PgJWXkjX1d1hP",
  "key18": "DHS84tRrdY9XX4sxZG54PWSPsoZThjzYnKQCc5XHM1NDwZz6nKT5Nv8f4dp5MRMBw3ahX4p1K3kiHpjTH4FQoEg",
  "key19": "2T1W9zrNgcqE7xgamX2r8ic8hYxG1dtCytUA6dkFPW2RdwTVQCYukyykeuXyFCfj7aXHFjpRJZUcMFMLyY1BgqXR",
  "key20": "2gpk1Ko2QZmgF3KojJ6ik3Dys91BRUSsrXei2nw13tdgrZb33qHKahg2p22re28mMiyjvzg465PMuGKvEtx3UUuZ",
  "key21": "5kAV6hcVmnj3pFhvLLy9DVX1vUMb7JDTvuefB9knJ5RQGa9ReBap3AP7GyCKXbeTWV8eq2NJd2XJ5DEqyBDw5uJz",
  "key22": "63jLajRWkQDPgzSS3j78sYMDVcUPDsStFESNpTDQR5hbs8DK8xTURghAsGgehnuKHNToNpgfFCcbHHNvYWqnLGeS",
  "key23": "3NucA9d4pjRdcbewLGYeqkJKKJWoY3LdRct6KtZ8Ex5juGkV9Us6seUy5MkYAD1BwQaxpsG2GA5Cxbh3iqETToi",
  "key24": "31NrsLjH1hby6uJRcWhamoby2dAGrq5X9SbgTJHe2K7tayBVFHXSdHg6QHitCV7xkjsEY6ZnJkuvhwqocsAGt3J8",
  "key25": "4sGKuFshR7tKZjc5jis1Mp6yrWmDUqmiefHvLG44HAmMCR1LkrRyqLHrmNviaW1sU8ScYnf3uVDJAodR5JsEGmKP",
  "key26": "c38DxykCPb4CDKXuzRAzHdXjjdL3BJPX5Z8EHYcEdbkY9z91yZgewaiQGUJmCLWiWpGPS79xeZe18AQ2mRYdmHN",
  "key27": "42bjPytBuuP7ZoEUBUy5Cadf5syDJXytfyN8ZTQH1YznHLEK3a5o6xZRcS5yeKqtboHcG46gViVaKkbxd4Gp7KNi",
  "key28": "2woNjGb8K6HhXAYPmxST4WbSXG4fTrDraVHB6btp66ZPDwuNqrvFKATyfnFZ8aTzvr2NNmbt317FZF7UGKMy2Syb"
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
