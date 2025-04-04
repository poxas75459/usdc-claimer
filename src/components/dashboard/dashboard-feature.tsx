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
    "5kAgSpZQkePVVTkuYiZ1GFsoe9tT1aMSkYyAppkp1vEXShp7YaRpeF8gztRPLbuPzhmpze93V3XA5cn5MV6kzqT7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UPwVE2LwQtC6zAzcaVvvZ12gVtjAYTWx1EKiF8AUKsxvKTK9SSQe9WTH7Kpihfp734kgfyca32kFvs9KMLz8sG7",
  "key1": "2PMDiBLKc2TNBzcFGQ5J3U44uUCUcFyMMjs32fkXJYqKt4aXxbn8DyYA7soxEQ9vx2PiRNgzm16fxMgz3Ed2oUND",
  "key2": "2bbdBYD1cfrKRjTSPkNuAhKfjV847zBgzmKuY5UGu8tkPSshXowY9NXU9BMu1FjQy6dTqmvm5Rhf4ejnVAZGVfTb",
  "key3": "49eBwBnjJ9Gge9Qe7MADWwRLNuh4Ytzr2Y4RyEfA5qs45AQk6s7THFBv8TVP6zAfEv5o3UwYUCxtSjCyeiMmqss2",
  "key4": "2F4tbN7UbkxUUTr854jesFFwqSUbesZ6g1Xcm5RuU6HuTRFfDY9Epgh5cYicHz1Rgy7BcBRMkV3xdTE1UQZ741Kn",
  "key5": "5KaV5UsFz2yfTSXFaYoD4MmsXKvvC9qJsVHrk6ZpCgYuHvhMz5s84WGjv1dzVhVGXUk1jBk6WFf9vnXDSGzGqHdZ",
  "key6": "2TZdMJvus1TDFZxYtn1BWxaUeuZZZVeqoGjoPiMbhSZkiURf75nJRyoJZ36L5FMMmcwoE9J2euJypb4bSLMSEtCh",
  "key7": "65RtHCHLDChNX7p4aCwu8E8DzQF6JXUvyTjwipRAJJBiFGbYFUH5qK5eaEC76URSC8vK6iXcGZw775EehrLm2sXP",
  "key8": "5QVkpuv62mymaYNRA2scE6FsBEHFhCaQxaMF7yUTEaPL24S1ZvY3eBNZczdi6B7yLq54zQt1rviyDNEzkcpmHv8N",
  "key9": "Ty2TKvmSsYz1zip3WTfkkL7Gn8smJYLh42KU6kSz2KBCS1TvCgikC5a1cvD8DgynFHXpRmFUxoQondcPpM7vm9M",
  "key10": "3C83NTPL7uWN4R4rXsaYvLvH6dTFpgB1n9wDokioePvfZjomsgshCtF5zKgJSA1hJ1CSaJh2u1HqagLjBeLLFgha",
  "key11": "jjRM2YAQe76gM4J5oSa3tVbugZTY9nHWc5zfJUfuRfXtshuKxLV7TggsmAT3cJZmXdhEKYWf7XWJkW5BvoypSxL",
  "key12": "39ds5Hb6x76Bgh5D3L3oxA4H2ixRKtY8dU4YsKXcHRkUsvuJa7JEtNjP2ZrGP67qRp5CgX39ijUdbJBCwNPQ29pq",
  "key13": "B6Zxtm8bUGTwbmZRniPMhNcoYdoqz54VEn9hnzX5TqL9fZDdGjP164kWMgUXwSvmknCA3JgnZg9WmssHYjVJGTS",
  "key14": "47Qnebjr2QVzULtAt3nSfXcrKxBNdN1UdpNPcnecLLuRJzfQAHQcGe1Y5DRmNo16156RYE7AmrP6DAP5S5jYpAdE",
  "key15": "3GpN6dWGgjADXyXyaCeZzFvp19SEf2pVVKwQUzge2Zm61msAXkGENghVzPMfuaXR89NgQgXYsTPeKTbr9zLJn1q2",
  "key16": "gTfApb2maKAKQVcsBgwcVh6oujwMM8fw1ZGS7MhRfbDZH51qSmn6B76HPsSA6eqRp7naeZ3Cviqh7GGPdnADNZc",
  "key17": "5wZMvrAYe8a7w3A8d8Mia9emcPV1fjB6mzrat3dT6rykNP55GHiSr2NCQH3rcPE5GhnawsCmX5MgbaABYFX6rmGM",
  "key18": "2u2C496qtLQeXkvWdCp46gXVD5LZnCFaFHUf1STDaC2pHrTh1JmU1A22hUaFf4HCxxtLEwGHXk8suCXtwHhzcFTW",
  "key19": "4mzD2GgULvQECfqvMKWHc2kikzGwRsvJsBY3WQya9YbqKsqhPwN94G2z81zoi43SSQMZ3JBUQxVNhGvmoNSJksRx",
  "key20": "4yViApGZpyW32crcwh4BPLKsLyRL9vH1RnqdWqyXhiV3xbQWM5ZmTk8Yfh8FweyTnd2SQCREoA2bLXTWcBvm9MbY",
  "key21": "4PUe2XYKbR5E2gt15Sityy94oZHMoVMLyH6K8gsmao9yZPhrCycKXfwggkTS7Vv3CDEJiUk6EuciKZSWRxRmTCHC",
  "key22": "NiCh5CjgjNbW3N6Kd4v1RGRtzx4udhb8JkoNKAhG6nd5H8cemr2h6FdM43joboz3TtFmCq9pK9dFBfuRvvPi4jZ",
  "key23": "5RUD9pUDbViJVrYY1u4PeAqxfRhKaEwo2VANRPS1mvy7ExXrmrJYKh7LwveABDu1B7VLbXqJffN7yDSMhHg13BsT",
  "key24": "ghRt8yihDjtkqF4BEJehuzhxCfd9z54cekUeidvPxPemMLWMgEZCjMDcsJPUCaZVpAkexffqdCDr8VQatJcNPkT",
  "key25": "5B3bHSMXnJrqM6VVaPhircvHKzvhRMfXohh4Z8BBd9zmK6BJhPNYTwZxnWjufdxDZeQXFUgbrxojt6v3Qc9gbcbg",
  "key26": "5Cz9Lqt3rkCTnZy63aFNfRK6geibpS8WohTjg1xfuWTAmDLoFtNQNtT32t4AEUTnvcXvy9DtPxyJn1Fw1MomfZRT",
  "key27": "2aFgpgYYYM8g7MCxs43jc5yU6TptSxpwAthVsxKU6aqEKm4n2xpTUmEwxBZB4qr5nxJn4UVApYmWwqGgNEeZoTiN",
  "key28": "5KEYxTTkGyFQKq87AmJ9vNGbUXgLqZ6YR9EQBXZ1nz64aPy9BozEK1zNX8BB81AWMTerV5enUGHjES3BVdnengpr",
  "key29": "3BttK6FKs3214kjxb9uwyBgGjc723LZkSYSQaHJXZo82XGbvHMPA55VqhzV1WryLABXvAPLQE3H7fvwbKWi2eR6z",
  "key30": "5KQ8jyWY8U8xXx9hZh7NRGVxLCw138uaaUT2kjbHJP2K951oT4zBdosVE7iia1dZ2Xg918CRaSNyJ5cUC3MvvRsC",
  "key31": "5FD1eJPFPET6DzgnTzW8HBmfapVLS1NgWS8HH27DcaG1Y7hUf53kkZkXk2DfnZ7QgCcVe1CTYQYjyWPmZzXvaXth",
  "key32": "4QF2dmtppJvjX73PNbXVpSjPbkkWu8767b1QqpB5JAosPD87aEpNvXhC7MoMHCyxdDTU1GFDhRmR9gcn2Zn1sYJs",
  "key33": "34Ux9EDZRqfRRQjCqR3y7MYbDfCqcQW4c99hWADdc8B6YLZF18rCtMBEWCshXW98xoko9yPuQeJd6BTwSzmX9Eti",
  "key34": "23Tvjq3s2KKPj491VmipYuUXW4hEUEUmjfubWAR6f2rFJFvAWSPVBbvvSKpAJXMxfKhNSYwkM5vqZVCuAST4Zc7K"
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
