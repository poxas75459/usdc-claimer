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
    "4EhTpLb2yGfE5E111iYVHAFdyP13QaQMvqsCH84jGQWxsP1yrCPZ2rbAPTLXWH42J5GWScmw3hjENvR63tTRPepx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E7i1Pfe9zJPpZiHGt9fwBeDjDYNJLP5pkhS7RANxtp8chqz8j6tfdioNFCFeCabFiUUbFQfoCXnbAeRDmhp6KNS",
  "key1": "2xWzRwqxGnnu3CJAjBLSCGuyFSLdCyf22g2tZyDxa1B5rrZt15W593bmUTosmsNysqoe1oS2zf1FfqnXx636FGz6",
  "key2": "4T4zf7bcwE5JH7wnVjkdTpdq75tTv9NxdYaDk5dYsiaP1j8n69EscXfhnjYEaDLmqpVfUaFh3TLapr7JkJRMDfs9",
  "key3": "decrnEuhPi7w484c5qWT2wCqzZseqd3LHtt1HAhjpbB4jo4brFkB7b46Gz2yxxk9GL52X9pRo5UcRN7PLnUzkEf",
  "key4": "4d3yP7GiQW75nfbLQcijLEH9zCzq2qGM6B6694vG6mDKuULaxB2oCiZt16ne1NjWXvgS7mUq2hixcJZ52p3KTw2J",
  "key5": "5BSt7SR2Sv432bQgqQvJrmkk6vwTLJSYoZmgU5hXzaSCfQTc2auRggzCdBQxTjmhEChUdisVJcUXR913GNcz4wwn",
  "key6": "2eiwWvq8g3T2JjXTdaTeFFYodrDeYauiTKEiLQ8zTfQeCehKPi6i8U9hR1SyksoRcszYgYLEpvNdeHmrJuT8kRNB",
  "key7": "2nrc7tVAj3xfYJiwK5HQ6uPC27Kahq7wa8Rwo1a1aDmsKyQgZEx8i23M4Rqs3bRWiKKVVFnWdFvxt757qaWPHNET",
  "key8": "4Pebi1jCincey2iCsSGT8kvynLpMB5JqqZVyfuXtDXNebmG8DrfQxoRMnf7qW9Tgr6qphoEU3SbfSujzR8yUH7X8",
  "key9": "SbqXTFJph9U897p4qzbEzpodcTyqY7SRS23xtXLcFPmADYnXnXURriYY1FEZ7BwGiEAxVQXfbkWPV8RcyTYXwvg",
  "key10": "5dXBev5eUT2yvomQpErN2w9BPJdgn7eqSY9csSssiWFpTh76Mv7L6L72K1xgoLJGju3G5AzY9b4gXpzGCm18GsSM",
  "key11": "31pXdpDJQGdo6Z8EfPoHoXq55aznNFkH4PcQUv6gG7LiGxP7dQC5KANo3nnhkc22VUiHsXByj1CUv36rRdtnxEdk",
  "key12": "42HpynMAGey54B6UY8RHseQ8WeBeZucr5ovwyPCfJnKrwBsBsLB2rn6LEE5CRwCgAFujbpe7YjyfcSyCNcuPiNW7",
  "key13": "39ppd7MaWZY9PpFVkth9CzPsTvBAeh8LJdCSES3cMDnGoA1xCWu1hXHeVirn4mw9KPy1PnZuS7qJnZ9usx64zo1U",
  "key14": "55fi1jop6dAx8jBmY6TU7Evq8aYGmTBk1jM1sbBcgjfa1xA7JGbmBkscukaNYzLFZtXn6EUbrPWnjUkNMrS1a7fd",
  "key15": "bhQR9EAncww3ueCRZtzwMGQPqSxenRD3KQJnYvDgodpF6EBYGwA3EpHpjTkzbrpCJJy6RdjTg9Mc9LMTt15hjxH",
  "key16": "4esogP84GgbSk4pXHeAvvAmss8sVU1oXZA8aM58gQDoURiBEhpepto1aLpTSMLQMuLVgnzGdLMp2CxkGNTRLg8hw",
  "key17": "4hGdEZcvKHZ8qCrS2UTyrQGewaJa5wszQBGXGLYhoNHLZMeCQDq59nk6GxGBr39KgcmSDPHxyb1SEmJymGPrq2pk",
  "key18": "5a3dX2jPbaVp8npU4sMRCRk4autP52K3NxzSFKwb1mkoN8x6wMwtA4dd4rmuJp59foWqRoH1jdqbJTUbFcJ5gz4f",
  "key19": "4xTDCzN2yeYAUmoscGqsU5AU561YBvUoCmcBYV6AwsCjwMiaNoTpkf55hW8voxRSuzVf8tFF4B9pdF6KLnvpxCWu",
  "key20": "37GrFCxC6c6oKdfR6byJt9Sj2RVjHeTMth8VMHq9i8i5795KbMcYQiVN9tgjqMJuvutmb56AVueh8ZWuiZsBUgDT",
  "key21": "3LhtcuTjoq66fWNXMBRWJiTkfHBBukaHqzCAsHWuFy2gE5uB8VedhRXBZPATDkhgEXKQG6PWr8VLsWrBBaPvLUpW",
  "key22": "4GDUU8Wek2NiCCe9bNUMAECE6355bDzDndKKmjniKbLnkGiGW7gkehec2uHrBUM3wgvpze9nvqpnSNseEbt6eTkL",
  "key23": "47n293f6X5rJCADcF1L3FHdhMv4KNEGAegEpWC3F5voTVN5FtmtL9qKC3Mezt5gVzBN7akeRw13uCxfLxMKHPA5r",
  "key24": "3pu9CpMamM6hbghE9AWo28WUFrx3gvVuwSjSBjsuVBSyv6jRsF2xh1VHFesdsXP8JVHb8gQtvUygXeYKz4kCL5Df",
  "key25": "5yA1zcqQsaikqzHUdSr7RvAZbP24mgaaumZEQ3N3Sknttn3g6Cbv4SNkCw1LmmrXonxuNLdFnNdC4Grxz8EeVa3A",
  "key26": "5shX4XnTKY7t6tGuMSeZJVndR2yBXEkddyDh9gDQDCHbuWk81Mj3N2sVhnChFei1hgc1qBKt4BzGg3uXMThij9rG",
  "key27": "2aafzwEsDBEjVU82pooFXSq9gyfp5RRkHACXtjeUW7N1PDRqfTmT9TjFeVScJPvpuKFmjdE6rUbjEmkuykiK3acx",
  "key28": "YKP6xnJrqHP2bF9nfDsYq5qUFrpadM6C6D71myrDUpzueoxx9wFxunqQ23CHrgV9YUepH5DXLpGYAkv8e9mVutp",
  "key29": "4T2Da2bYzXRh4mi2KqVM2MpkZTafjWcz7Ejo8W6zYrZFy6DBpZWJdFJqXdNwWEUhYgSv4Apa4G19s1mmNzWC3pgp",
  "key30": "2idykjAFe64q2P2eSNgUEe9fKcW7yCsy1UmhNKw1etVqcReqDgeuQYW31JyTThK8HbojCni8qJm7TqSQrUcpv1Kh",
  "key31": "2zyB2jDM759j92QH9oJ6CJmcP35933Qp12z2GVjAAxmL2D48K3cpTxNkT21siJCoxCWyq7BEbpryfuVA4GDnVYq2",
  "key32": "31SV69EgJDKWpFM3aEQwzurQFHKeuGzKKa27oDNMQRUoou4Zdnd52yJ3d4kMTFCqajqXUVSktrveFvGpHRDLqAE3",
  "key33": "4jJEeatFSkYs8o2tq7AzJZ9suQxLhYnh2whi7XfwNp2qCqn4qY2G3kELBZKvBQF1CXL7Y5vJP6yWXkfYGRS5Cnc6"
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
