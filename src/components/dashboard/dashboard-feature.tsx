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
    "8ZeN3aZKaTB5CqU4XdehqdV1Bc92VYknYe2Wbc29KHHcZpFKo3gVBBnKo27jpgGzWXyZ3ee5WMoAWsDbEoFZZ51"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AsRy7WrhSefdh4SKo3rVSSwu1Ere4txroiUwC8FG59CpWdedGu8wEhRXuGZQqNAzLip8aXm5SjVKTnsKA1opiVv",
  "key1": "51kRTZgzuxR2yGERHmA72uUJAr8dFQGQbiyB9aFDCaX8tTBSR2haaiRiDmjeTr6jP2XbSaLaNS4xugx2VEoZ5khY",
  "key2": "omy4q3QyN2LLQaz2QqA4swdxEAFRymCdHquRfzQqDuCkBsSzWWbHAMKuTMMBMJuJjciFk7e2hYy7nnenkPkVfv9",
  "key3": "4fE6NBUnrYT8ddTBpo9mtLvCtvVn5AxS3V86UHyhcyfvC32Z7EnDbb2WpwAFnBWnL17GZHrANhrbtv1W6TUJ9J6T",
  "key4": "2ZW9pEnGjeSPQLbxpq6jRQ1dgH5YYD455wFVwyU6Qo7TNgj6oSSoUYE3vCG3pRJzeiF2QgpDWrecGzmeg9e1NqiB",
  "key5": "427sGpXndCZPivVg2VRQdqsz8pMCCz8Pvj1T7ELfiU1UuaEx2F3pzQSksfutNcGoUPMc51hhfHjWnqJzfL1SR9SS",
  "key6": "4afN1cUyau5QPfHSVmKsQgS5LurTjGMEVVFjGF1UmKnuBmxZ2BderhSWn5Uy2cG5y4fH1BVTaHyvPLRzY8NdZYre",
  "key7": "43SU2p5r1e7DffNhqvG1mCsZbDHZ2B7dzYgvNrM8xVfiQH9UGeAAaZR35Kh94z4RAcAAE6BxnZbSj8vVbYpafrZE",
  "key8": "3qZUSvEXitWGqkdQM52gjKDDiNRKBb7JBfvFMnGxLdu9ffMZCk3uxUYiJHcx14tNR2E8Mp5HAg3Nv9Xefif14ahf",
  "key9": "55wYPGAMe2NWp35ZNqZhTAaPxa8tZgGvD2f6QU7Wm8791b339fYDfnMkkjm2Zjb5KxzgFaPaFMGiNAwq7qdrTQ5c",
  "key10": "2qEfRo7heWnqgnLRiY1Dp6gDF3hEDq2JvbNL74V4pSNgCpF2o85cnpEGTxGbv5q6WK87BzwCrz2pn9ByHuMR9Edp",
  "key11": "3rL28rFKZTFHDUnNsL1soTrDiK9Ko2M7SuRuthCzX7pbV9Sx7X1YR1UcY6gKqtYKfM3KLVfdApbS2Amw1VTXuQoe",
  "key12": "3ez4ZXeFEwhx4vZobjygKCJX1xkoNLgjSHm94wPXe6oo8NBXNud9ZmuXdj9ige29EpcAd6FuAjR7XnAmcRB7P8Wa",
  "key13": "gfZP7btCy3kxQSYDNPeVj125LNn3Pmk2E5TCKBpevtUmnphEpSXPeZ8YBz6Xqcu7fS1qQf3p88WPh73dNM5EdDs",
  "key14": "2BRG5u2ceFrMK4JpKjsY7fUwLBJmd5ey1eL4Y1FoxeVMasjdjGZtNTZH2nzwA9bqZPS9H8BtaZphb38m68vLMx4h",
  "key15": "5mZV8s5Dj2eVv6Xkkb9MiuW5booxVCzEWUiHUSgwEXzsWWK9M43t8ocAB3GSo8bsNCyXnegPodrfmMShPKYW3qh3",
  "key16": "2TFcDpqzBkmqzrrd3KfpvyqHZxjmyA5acLLg2qU5xjwph9RVVSAvd8hAEoNfNVzRH9WDgQGgZXwwppb4MhAphyVj",
  "key17": "4ZV6u8MhYKBTwviei57ASEhVbZfsdpuSKyQ3MB2e7m6C8Afk9XMwevVrzNHkDZQ9r5JmkRs3G45zPyJC62xuUkNF",
  "key18": "56pC7Agnv3nqUUbqeC7wGYrPnc4E47SddACz29sjsoHv2sysWyfBr7Rtgnobuq8hmGnpzbQQ4GNdyy6eyC3gu7Ww",
  "key19": "5WT63tN5cSJnFDYBrWVKSsRuUnXwW6CCG8JJrfjrmg1ZeowCqCWc68m3Se6cmbEqu4Um2NKPXYWYXPaXpbM6HARr",
  "key20": "61GiwParX6KDQfCchjFPLQr5gwATAyVsQPyv1p14M2TvSu2w6P7bLZMRsy8SsGfwCL8WueKwagoLNm7nvzzGhd48",
  "key21": "67T68BaNkNb1av1CqyYzayWBGL9FS87PEAVyRoyU157Dm8sE9fgewDDhcwvbrEnr6mtC8QaPNtVPWGH9HDNvsXxZ",
  "key22": "5Ue5JA17CD445UV1tjguQPLHgBvgFvo4A7CtFdLgD2xwaB3WS8aX82CWzzJUkF4aggqSK7sznkHpD2yFqiZvWxZx",
  "key23": "5TX3zK395roYyjTpmHeyQcVeDQk72c8VtcTdCrPVdrRkufWP2nZsRhuCREJXkK9HvwREjuPjPixyDRTbSQBpcHY3",
  "key24": "3zFLiWzj588CKUwnjFbZctxmzrggYyVtGAFo2TrC5azUXv92ZAYFacq1WWxPZosNmPLDZ6jjxwgaZJZNc7PBQx6L",
  "key25": "2pz8LsBbzudVat93wfa4eDqEYPgTEX5dp8mNEutraFYVch92Y2xXzx3WHdJU5RZsWvVNSpLPY529rN19sxH7diYj",
  "key26": "2dFMxGBjZPhKXiBvLWpzph4td6d29Yjbdoa5d21nKSY63mpaNLXhVLLb7Tbge4MWZDCBvz2m7B8ZvnTufTqJuLpv",
  "key27": "2WGgaLRDVULPxyJqiHLuHL4es6YDGv6R1eeasUvHkMWEunPJ68LKb9SGwCspqm6vt9cos6MiPnsPhC4kdydrjLkS",
  "key28": "2BNYMJdoHhzTpbPAR1A4CPoZXZtseQmntQ1MSJA6Ka3wkbV5rQW6xw5FAcuNUePFV3nx2hejNKqzLNy6knConS1e",
  "key29": "48FRqNVhroEN5Tr1vCfD26wrTAhgNhcdp3CgDwXwsajyqVNuhhVj29ntyEGiP3svtQa46nMuKw4ihs4NMGsEt8So",
  "key30": "5gTmPCA78sw7A7ukY3gS53LKw9X5utAShGjFd4LPz626Jbv8vDYDnnYH3NBr7WJQXRDqoVZ4m1m1LwUcxMYQMMJe",
  "key31": "2TpkU3teMpPr6vLcNdh9Y24FZz6XjS21muUUGC2YTyNBbLJfBCn2XQQB5VxpBVij8LssWuzpdNVYTj5s67GuSSaW",
  "key32": "5iY3RNfqd9zFs81QRaSPnTtqpVv2ZcVwGLDCexGAmTSoVN5gRS4wGUcbcxmbDjb4VHfY51Cn2JFh5nB3q2hsh67d",
  "key33": "STmJSANjv7cESwWdKRra8jy3SVRTxajBiYx7AQ3jRZYSL3omawWv3uKEHtAMttTcQ9pMKd2yYaFUa4zVbuoFTPv",
  "key34": "4uBdkva7X17y128gKee5f9u4vhrf6fW3Lw7bK8oX6AfkEnMUB8UHTds8tj7BccmjaQSHvPCqCz3wzBEqFjgVu7CD",
  "key35": "4N4fQHoPgu2wAUYNGFMJ5SQc7onQjFh2DcDnPnvocik7WRYfM7QJvesAjTVXodGpnRbPUmQZ74Nb52ivnjC7ohbL",
  "key36": "bqJ5XrzdtnYpoHFygsSPmN7J5q7fkSxkjQd7mZQHKfjHevKU8bVk22HuEqXbko22Expn9qYM3WNRw7uV5ogBx5N"
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
