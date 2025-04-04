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
    "5cZvyn6Do6EgBVBPApi4BK13oQo2yNTaqc6STbpWZo7CzVwapZetYZLxCCYzEsxagxtnaRsp4hAQ4vFcbtex53ST"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28Nrw7p2r5rb91LRqodnbMGobtCnd4Eb6Ukt2TswT8M7eFYvdx8G6oAkAz85bdeqFnuyTGFFpmvrtsg8QfTrKkZ1",
  "key1": "3WcVCHGREWyRUsGP4equT7AJmqwWGkDKS2bT6csJ657hWaoCHD2TrPKE52qacVP7yffG8v7GkyYWawC1Ripn6bNA",
  "key2": "4nbBYiRAZ22ssY3YkJNhJ6etRGdohyAhu8V7SeSHTCkowQCJEbsBVvrPu2stCcfdUtD68BRGXiRnSeb2Ancco1SP",
  "key3": "zGWtCd6hNayhctw7ZWpVLqQ2Kr6T19y14yT9cftT86uhPpAPbpWbKCZrQd9PJAqELf2cifq4twwXU71DrKHToub",
  "key4": "zRoHHEJ6ZXkKiEgPVyeGFEuPXPW8PQ9NgY4g11i2Hv6pPjw7v6GPYMycY1nr7yhfrmUWKUK4CmqhdJTJH1ja7i2",
  "key5": "3aT1niPFmg6QN9V1hKu9uNcb5nKqaSmVPPhqWa6mLCPhrb7JQfdbMianb8USAzXMEnXJUGGbGJ8pH922hxMAZHx5",
  "key6": "3R5CSovUEitWJeH2wYGD1g7BjGjjhQrq6hUf1ZNzKDBhrCAkV5ygBsVM7B7Tv67aLWnvoogzXnRsf9vQP6AEZdeF",
  "key7": "HCrrm8ZNjc9bbgKjGDDUDwmAzChHxCkBartrkTHLdU98Dhtma6TVMwJ8FoeafA2ExrAzqE6tBHvUriJM3rZvBQX",
  "key8": "3a6cXRyWLrrNDu8mWXSd3EbiNursAncTnhDFc796EZJkWs5N8LHVpjhrh6sLyaqE5CeqsKfzRj1bcokWuxj9T3Ar",
  "key9": "2MhfzGuQP3hAsQRHMMxU4gA95RcFQbBo7bAhhbt6qHHGiNpSyCdwGMT4x2Qf8QpqdAkXygTwFn2342j42cYstpeJ",
  "key10": "MYkD9Y2SrB5REiETjzXn8nun3ehd84pS6N8CmzAZaAWhg9c4CiUdm2CQ4ekeXBiXrcQCCm5AWcfrtMEtJwfW8Pb",
  "key11": "2nPT5XT6AAMNT1j5NdUgn6bH3S1DscvSMa1wJV6NgQZe4cLuAb6ZPwnoZ1cnQcPFDWsb59bmPecvyTjd55FKwSDw",
  "key12": "52k5S5kbQqTFwX7GLEURm8H3cdaJUqKzmaXiEpkRWVb1JjyXXhMnVPF4AcumPm2PDjdpsNqpHJad34bdsBko1Xxs",
  "key13": "4S3rqivM6tUxte9Fso7kzYnhHWk7GVHNHW8EWefC72HxcEM1SfVLPut4ceRgegiMwgpj3jibTULRTEga9WJoguNq",
  "key14": "BwjJPUN75x53hh6xxUkFGyFJcYgkEqi7PztBWktsB1TYRzeK8NfEyrREEnfRJpvbZoL4j8gDjJNLRM8seBSSrBd",
  "key15": "5at7x9M4cRmbJQfZKQr8RnRTubGJmxdPmXuoPjzmkfBaNi6A7em4L4U5MkWNivt3o2qc8U2X8eotmKBKhcRNGqyZ",
  "key16": "4ToRuUv4f1yZyWi8UZnCLEVqYLkdaYvS55Z23exb1UaYAErGNPE4KWW9VXv3k2b1u1uPUkXWgEXtoarFAmAN2hjK",
  "key17": "3GQ7kff4L5THkmxFaU2AH3bkCLfKHbXdCgamnktMLoGEX8BceWX51aM8UEjt2a2dGHvAh2uREXa4YiAeFCFTAAdr",
  "key18": "29GodrQ5ZwJ9iM7QYh7qrtbzYU8CT8PxDQ1aiPuP4yBSzVXyeNFe9LPy6BP4hM3b7DqpRLxze9ptMRitPbsbfYhA",
  "key19": "31NE6K4hiFdc5WfZo1t6qx81WTgMKgBYZggAZRrY6dZ9Ge4sYpJE42QoepddaDTMo3D8d74CCYBeCxEpAyHBSwb6",
  "key20": "3QsfpQXFTmWcU47mahg1XUMGfWifdi1QACeGupjJgmckakW3LbVSFqti9vmBdqbanK7iqatxUkv6fshUCBDJGkaj",
  "key21": "2T4enRz4xGueFgMPDsNgs2bvmcWpqyjTnmxDHKsjs7k9JpiiC6bCGpybcrPT7XkDya5bCjdDazsd9pidZbEJSvH1",
  "key22": "3FYkVuAs2MCi1wxXR5nSZfmTEH9aY9wsfqkawfkDk1s7JXLKcMuuQ2titBrAxM4jaubaHPa9BtG9WEeaCHuu6VKf",
  "key23": "mh9smZKr1xrWSstQsyL7ivk7s2geWdQvRA9oi7qsmoaJuF5nnMToAN6goEFjkDm1UrbRDtzbFbFKXuo12cSnjFs",
  "key24": "RnjVE3hRqMhddCJbTjevHQTnagjHF6nq8UUi2PYKK3nWsLuaKH1UfvmjAtkemURRfsLCWZxSYAcdE19SfxKNCyH",
  "key25": "4trx7SArtoi8vyAUNiU4zRRJ7VjnSVrsJABY68nXNCPBH77zGzppFGaG9JZTBQQVNB9MkLXwmwAoJ17vwZ8tpAS3",
  "key26": "g6iVECvP8VMXZZ878LjphKLbHQqBDaUhaRXXx1HB5Z8qPBjGLEZgYuGxSfELfPCsEjcNw2K8FonYW7WmRfErSo2",
  "key27": "4jGn5hCosRNR8kruTdtMQrkrtSvh3xoyF93gpTipRxJHfAMK9DQvquriqAMLt2uSTwavE77bpcwPu7XxfBrKePyk",
  "key28": "2kFnNz56m2JsP9o4RU9CovoQ8zANMwhcZUvNRMXyjyarFskJo2aUMTRGeCUt2TBPeCp9KogBYSfTVBrunLLgWNVc"
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
