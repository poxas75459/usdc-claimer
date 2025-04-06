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
    "5RhC3aVdSf5aZwPh9vHHd64kp6rg5P2CGVSxELeS7izyW7Mp1uqmivVB5wnXgXxGa6FeCvngp4t4Gkfc6TFjHfEY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QEDHndKsBLy4NRbjovQFjkNnP6kxfVkKrh5RRQff8vFLHz2TsyLyzwQganHc3mzxhuV8PGyxmzF3RWa41P372gU",
  "key1": "3JMGDJZFnm8WA1LKsJCWbFBEdnZT9m8RoqwAXPPJv1h3H1nqF2RAfNUpQd81eYm27JaaDVfEp1g6X9BfXeWU3QBb",
  "key2": "5VAMC7pwkdWXefK3SdinyKMmiemW7qFD8KYPhcJUMU4xFaaGJWWSBz78YLHJD3YYNdHfDGxHj2s5DxsR9gZ5v7Ag",
  "key3": "4uVa7JwGMs79ovEma5kFR6KSi2Ph5oonZebQxBrdU6X6GzJMojgYPfvhXHDwzvZHtiC9NUc2dp2oZHbNTDxM4c9Q",
  "key4": "5zVBPh6KNhdDYNWk5njgDJbdKZ3fueE2SLohwKJNqb12QrtJzaCBjsLPiwnNV48ReiKXEs6mGoG9ymmEVsBftwX1",
  "key5": "TZGEN6V2VGdv5NrhNDcvJ5ox78EyR9Xegqp8DNgx1f27nSSdFmUYfmkf3Lsq5LyxbrBsCkQhRvtWaBFJWDqbfaU",
  "key6": "5RMAfp2vwhBRWnVaW4s2FAHGe9erT3X2wvnL3aSytg8mdgwYykn2NBKrna4dFhNXuVK3N7wW23db4TBesuB16VRj",
  "key7": "3ebsW3X6AT6mv8JmBPworFpv1sbQP3Xjf53yoEQt6efkmLbpdrCeXMKb7TvTF85j3pS8U9Gno8fuorUq1UwGMsz7",
  "key8": "4hoC8vNgCSFVpL56psKfhGRe89Rfbcf5u136HC8gBMe9Zi39gEvabTYt4GG82ykHH9yCnZZVCuFzzz6KeBebjjBp",
  "key9": "4nj1yUscd99AAZG9HiFQc9uHEKLcHm3AxGchonA3GadRF3yfqGNQdQknxKqEB2TkzNRqd48J43yYq8yR9JgAVMxe",
  "key10": "5J87R4eHEPToqnhUEGtTUjeYPy6pxc7SfY7bcccbVPt3SEUwmKaHtkFB83pXPCEp2MwL8AT3ZjqTBKtFQDmYoRbs",
  "key11": "5NDtWpC5cEccXGLdEfrwJ222L4N5zSmy1LgKZNuJJoBZ9mjDhmPspbpxasrPsfEjKkFYES6ukGqMM4QZaZ6JnTy1",
  "key12": "4D1DAKNwhA8poKEsaarziyUbwJBDKgPMtaToQnMKkHidGQDrHtijUqaSYD6Y9DrmRuAjmrSYdqKWTf43kD9qvz2T",
  "key13": "5f28zCdPxDQxKVTjrcXZ7rBpqBqMqk3ciYh8tSgPr9LGGYMJQFjbBbrpjH5dirK7cUzZyRG6rFDN5ZaxVjAoqurN",
  "key14": "47BnutmXL5QqTU8e4GLDNUUdkg7cceYqtFy66hiXi9nG7eHLUBsZ4GYqWUHbvuc1pXE4MuskY78qfTZ5tPGJqgE3",
  "key15": "S3FppRciyNWBQ7WJ438CpV9HC5ADyJyT2YjL9mtzRJYAjhepSpDdxpRVth8hAooH9vXfnSxUMP7bWaYkdmNUsLC",
  "key16": "5exa9N2TdPMVtofiB9LHutkRzcvvNJAWubdhDTP4vaSgRbYdYUBbQHZ8scUkqc6KVMSWBWcmZFqe9j1YW29p6SsC",
  "key17": "3UzeswoqvUTash7CudTxkZ81ficmW1dLEhwLNzAaRQvUudQcpstoU2tPRGkgiwax63Q4QwRV76Bpr8hKDQCnR7s3",
  "key18": "2sbyPhNhtjcvbwupnzGr13a1EnGDxjbHbo1vakRKfiyybC8u11uzC6rkUfHNtqFCizh8aVsgernAceXgYoUxMJqQ",
  "key19": "4kz6NrEpxiZ8LQLAd4WysKGtSdueFtWRHqjb2rrj8YRmpJtcDVd3NemdjpHZE7at9maTXWgjRZXxmPezsRZCiw5v",
  "key20": "5CLP9knRMhH66x6rpsaVTtwrAHpSntVFHLYiy62ndRZ92VL8Cs8Ygbt4Utt96eZxD4YCqeuiAd6BRE6ZM8nwGYW7",
  "key21": "2rjXs6PZ5rDEbsugPYMsM9Ln1ziJ7jrFqTLiAJzoYpZKc6gtB9Utbzi2AH1aeQn7uS3QWjUQ64o7fa6GFEDPgGGa",
  "key22": "2YSE1P4kWpgzNtTJJrq2VLZMmd4597QR9NUfn5A9gLq4G9SJvR4zVFUECyfoJ7VLKQhoqxDMRBBrYvHMYiXAVYis",
  "key23": "EwL2E9EJmAcTipDkEJNZXUVb7vpNdpLqdKfXw8TxEkCqkhKY3wrBZAdLszabsZWjjTu3kUTnSKNz1S23h9sz4Gu",
  "key24": "9bNgcaYByeSSBTjSSaZDGLwPtvMrDbpVvKEiYrBKmcK55293YLnxBaH8pvH7Jnzx8cMRaR1KU2x9nwqEZtTG9oL",
  "key25": "4CdC4K3Ts1qMz189vRDvBxX3NoV9Q56pzBkZYfMk1Hg7AgDe6qxnz7byDydeGyXRdnEVFEUoy8N2YhNsmm8gWkaF",
  "key26": "2V7jUjPmAvAFhcDK8SD6y9epEQVYZiNL1bV5hJLcDxdmxzDXpTnkRfuEvfT7k8ZRAH2GppSuiLjXBaJborAwXRMb",
  "key27": "3KRd2eKznXRxE4gY9EaoWhjkrD1zPfGUvMWPT6VHSKuWDZNi6XHpzzYLFZ1dhtFK41oYeGLVcGzv8omvQDXRetgH",
  "key28": "61vYZNhpN1TuTQt877fwvMkaJs7HXqjXATPt2rN9T3qyjvDiJW5Uss1YPXGqFt4uqiA1pT3KvcZWUDs5vU4BZvV2",
  "key29": "4XLB6SZwqY23QKbMYpdLVxSLrUt24wbgSaznYWz4wjFqsUqLoSNTHZi8AfgmaaYF7woRPJo9NdRZJb455JikXD3a",
  "key30": "2KX5p2DtdBkhJoPPhwX6QGw3p6VbfQsNtrukVSWnZhHcBfC82kAyQxtmePJMD5kNGkb4s5BsEru5Jp19E6yfvwUr",
  "key31": "66Rvkfnhdhb5NLd4jdQsvqwu934qCiUVPYLuL68ttEGexPK53XFXQyMvZJMvAs1NQPhhrs63BJENUu3aEjBsuM7u",
  "key32": "5QPW7amMB6KKmho8dCoZ7NL1MHiNE413SwSL7cMdQMZwozUbPo2R1ywDvtdvrWaRBnRvtVSfFUDKqNTLZYNJRm4V",
  "key33": "3uz5DVDiDA8ofA6zPUn5SMx4SNNrE2MdqrVpCZBXPehYry5s6e2EhjqA35NoddUVq3UyWGDqAZfKAZL2MZbaMVmh",
  "key34": "VhyrKvAgDQFU9cij96yn1KcjanXaedT3L3k1ikxbHznWs4a9uDS9HZiypLaDhfsAqKSJDjkk9tKKhPTnoWb7HMG",
  "key35": "2qjBstDhCmAuc8jHEB297wD8vN6bek1HuDbYFsWAcPN3iicbNSnHoFHQR4dKQj3mPobPeA3woXbxDUPHotEMM6HG",
  "key36": "2hfjbirfym4uyznMgDVkZUYSAJzqeukJWyNy4YgTQ2gh6SAt6WNKtkBxr74NJrZpY2GCV8fGTMDPu3bhJSxiqqY6",
  "key37": "5tSJx6TZ5aYgfrUmYqdTF8dSdGTtsJA341eUWnqrr1Q4jFZyKxPkAP7xZvWtpWHQkPsGWA5CpmXdQNHXqcqH7HrE",
  "key38": "3MRN6Gxwte7mTQsFYqvmx16Fupq29rDyoVe41eFbfXMA3KP8FtY7rdtdxmzPoV7eDciTJzA3UCeoJ5tf9mY516gy",
  "key39": "Y1M9Hp1wYECyJrxj7Prh3iVRwuSKqwE1fGh37w8i2sEvvXGXYFD1QPPrWFTfrmhjWs6Ho6nyqyoZokH95Dnmyxe",
  "key40": "2nvFAx3W6jTnJPCgH7raid3FbWYGPFYBL1WHSYZgPiawVm5bWPMvdgkJezUCFa7g4KMzhLEdga7jP1priNbqAx5v",
  "key41": "3fhZbip2sRf7B3JJE2pNutUveybeQoEjnqLX3Uyg4hR7MyFBZhc4faxpwo4zbDCJa84NtkFmtNuRXXqZthzJstJx",
  "key42": "5pfeKFCV5974SACBSm6rXzRrs73q6R9EWy8aSxa3pSCfYf8dz2FcHEHNWhfqZ6He6Fn5KRQ58Girv7nZHdeKWwhW",
  "key43": "3R31heJAAZtBXszq1fiZ2BnM8ciHSRXhtxTSXpnmYZfFY4C9D22oXuydG9dcdPDLWWoGvvwSSdcpC1xCxAASW23q",
  "key44": "4nNqGv3oNMgwozwo7SGNseb2apLXyiuCZn5sfP32pqoXcjaDs8bN4DBhoaPdzGkgTEESS9Ltpd1tL92ACzLgVem1",
  "key45": "48G9Gc17eW5QMtrA2heMMmAArW5CcbimRMKX46SiHvh87khzqkbkLAfiStNk8Sxj4K2BHqQU69RWaZSWHfpjhM8u",
  "key46": "5czaM3LP3kGK7Yw2kj8GtDqLzv64v6myY6jfs2RgqvDRzjq15VntYdXEqKHDP29i9kNnZ2wbtgtmv9aR8vwpRLY3",
  "key47": "2KQcC7xxVCifFGg6y3gRt7eACcPGDxG1sDGjJVh4bsLCvnaXaMqiTZVU6ZcmjsWtjDyDCDsdM7aWyDUeRdjm6W8u"
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
