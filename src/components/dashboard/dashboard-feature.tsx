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
    "3hxCw2sqHdZCkfUX2PXPqBYpQvNJsnYYqsHHeFoDafH84pR8gMxEnHbQeZZNGYjN3sW4qsxc988FHZt8rjBK5FCw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48oGrnd6utyRkrvM3XjnheSumgorNRRU2nLNVcPzDzp43Xyfg5jb2Ho6VAWg6uTBCn46QHjUv1T9pmKvrCG9dk9H",
  "key1": "65xUnqRcMA2tfrFebA8XYyHxQWodBBvNvM4ZB3vT7bMbJwA8BjY5F3nX9BgUkY4J2zFLjhSPpGgUgwBpATjicvby",
  "key2": "4Lb79W3oD5tEzawtvodRnHewv9ZGs1RggfqTiVmB9UsWptxFH6LivHv9T4w16zpoafCqVnKm8z41SxZdv1shpBLA",
  "key3": "3B7zPSH4rzhfqfuVzRNnwvwE3YDnsni91469qJCE7VWDmAFhct6VkKEbYvioTDbfxUEYFdV9DWTQcBsEQyUseGgs",
  "key4": "369PnakbaiGSuqq82S1km4dz8AZ2MxDTkmHEsULSXSKdZDiVfKzCgrtLZddpJJZJ4YLQ2tFHtoofJkiRq3wwVhjG",
  "key5": "2AmNwSF5yHCGFqZJj6FaXeM72uuhiJBiW7U1EwMJ9x2HvRUWf36vuKAPNLPRy1npwUbjGHWNDSJxcqcRm2wBnHs",
  "key6": "4vmmA2vD3xwMsScnS1eg9yhSnoHypx9Aoqa984CHvRB4r76EpRz22Nko9YFisfmTcZdwEqaqC1sktUPJfJp1d8K",
  "key7": "3m4upnNiWHA8PvAx7RC7RmcCJCHCN7FhU9rLcQi6Wq3FZnnXMVcB5uYuiaD13pis3EoPwRoaDDC3VvjJaEH3UP9i",
  "key8": "5NHDtGhs3tHkKj6wAyagCBzbb8AGEW4J8KTKoFdwvVET2C47yMUQsRcUmpJbuqW5NSJcTNuennKaMgPqbyAhGou9",
  "key9": "28BbgT6kCEmHPhUoSj2nHB9iDsLZF9F1QH85Cgm7qkqp4zXsLw1eyzBREuUMaJJUSkkyj5WBjnvPWmEtLWNEfBLm",
  "key10": "2fgno1vQKceHQ5S5ZPURayFJk88xN5MWR6axDghsgsz54bSgpA6p6q3PRs7Qdx6banu1CK31bsWmPi3rtzpTRMnh",
  "key11": "4pCRYqrALdViEA8tXYqDErB9dvf77SozCoqt4vwRwCGTv8y9LYJkPFo6MDcm59odX8rensvPa5E43foHkmb9bibj",
  "key12": "3uPTwgfnhkwd9VnetwczmYvCGHfxVhy2QN3UFcmbmiPX7BQyrQd77ZXfDWHStuFDtgySq9JHCxGc2hriuqd538bo",
  "key13": "4riiJ3aP8o6U2tc86XHDRJFwnkBgCi355Qp3MbdztdU1DY4f4tVfdsisxEaaDi3C4SBtLcBWkC8fufV4eHZGeHbN",
  "key14": "o6KDUtY4Dz1fg2nbd7oGpr7FSfbZci7JgUWxASbiUYZzbP8msT9fNFKYVoQ4vMk9qm7y7uNqLGoA7jQtJ1jdC56",
  "key15": "5dUusTaG5nuP4bMhCq2TXKmNET7LrnzAzTZstL4Yp5rqHTSvSYpYt4b1RM19KXcwpvo2coh8176eTRib3kWK8ttd",
  "key16": "4UZ5GMfbv3uPS7E3wdR2fn8mKdD5Qzs6TWn5Vk124nE1pzLAGdNz5iQT7w5sv9UiyDgDkrk34Vsu6Ysq2qe64QbH",
  "key17": "25Jc9wTW2VKXmWyVSmwdUobu8Z8zFPc9Zu9bsxz17FyvbhKDxNLKpLYnKDp8LnZTY4Bzuw8RN7RTmVdFd5DYjznM",
  "key18": "2Q6zBVAfoTkM1M8m8GMtxZ7xnh8TmuTvAn8fYy8Mgy3999nf1f73kZXaQ6ukoRsqAQi6RvjVJt7cW71BeDp3xqV1",
  "key19": "5E6vwu7fZXiJWfNZVFxhE2LZHkH4Ub4Vm2wzyHwNAP1hZzkvPYc5DK3mHVBiUVgKvWhQB9ehsXHYeFhChx7qXZXJ",
  "key20": "smiyzzU7BUfYWQXziHkL72BfnA57H799D8Dv4C9ZRrMhTVKSWw3wy2MDLmAcjuopRNFvTcCkcWkzdGJx7nDhQHi",
  "key21": "4UWPc1PNeymPcN4idFTAnTu4njzx3eEo3hd6xDA7RWNz8F1foGCsg3671SgNGH2vyo76fwYdoNe2fiPFa8igETDS",
  "key22": "27MbP1j3jWidCgVTKiebFP7po5bvB6g2RUCMq2h3tMZSNAgGmQawWqx7HMFGSyNfqjGG8rpEiRFVePbQxQGkoFPm",
  "key23": "26QiamUfotEtZMHxwi14KzvjVfbRmeuofC9zUMNvusepmCbqBL8Msew2DAmpHMgizQ2EFkMu2WsAyPPotpFDT3eX",
  "key24": "3N9hEYFpDc4UmJeYuF8kBtZTcrA8uF9EZ5uAFCwBzfbTy8aawL7c8FmBYdpMGgHBcdZFkoq3k8zHf6ctKkWxspF",
  "key25": "2SWtkUupjArPmLBvhDmydWd8REF3eie4MXvGQEDZUMiii49fMXcJT8LPwVpmiwTMKVZsYUgGZsYAfDDCLKdDBECY",
  "key26": "2SvRSjXNXDaJ1Jqq9uZHZah1xq1FuJ8pPPJaSPGMnm7ZhTAjCGqHFhKK48gCb3hcgVCRQuZZuCnHG2EvoxpYnbMX",
  "key27": "4gRUUardnM4fruq33JrnburD1ddaYdkmo3KnQE5mdMHn4XVhUPyRGDxtD9jGnAStN62kgvfownXtm3Fdxfe4Xc2r",
  "key28": "qF7wJYDqN3RadS4dhE2cmTBgDxGpdzTxLoN7ZD9LUueubmADUFWcE9UhU1rvgDpVXMiS1MP4EktByHAmKAwS99A",
  "key29": "jqEa2S33rSp5a4BfpFzJZz7equEtHtFwiLnNL96i9SdBwcRcG4LMrWc9uKVyN3FJo9UtFeFidVi2SydTSraGgVj",
  "key30": "2TEuokCSeFk44G6yYsCRTuUiwRwdTMGLS178TuYSp6WGQKuzgqiCYovDqqFNzfXtZNVz7UQzVUaknEBwuWmwG6ik",
  "key31": "28tmDf6BfC24qsaeZ8gJyaRBhGX6pUBhsLi2U2VWCKDKZGvmcaGX9SDg9swkzYKSnmYYyCynk6MLUPSfz1N6o43o"
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
