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
    "TbSHRdSaxB6HC37Ffo2qt613gjkJvqWAiPgfZoieZrvUSXhBgQiz9GMCcpxwyxrseu7bstA19Rd8VZGZenP5YdA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oDFzvtNi1m7pNkQeSSPvPsAYCXaxguVEc4AeE4Peqha4ZxyJjB1NBwRFDqRjSiCgJ8VwuRnLbpdugKhfwpfKodm",
  "key1": "2oj5imda2tFiCncvGQAJa29ZnnxPx9AVVUcqd5d6YWZw4avoAdB6KiMpiKgTUe36GdceeEXaAepX317o422VVwX9",
  "key2": "2ZwQFJpeCKmyZ5gyCmiK7y3sNf9xCsVJwuviHSvuWcXzVcg3ML92X1EAjPVTUVYbEFYiYkVmWt9XmmyHFto9XJRA",
  "key3": "2Hw89hJob1cvPwwk3MKbou6TQDPd7BCu83KemozUrAc1yt8kT5CRusWnTiwPcXRvHmmAmxzuwK7gLV6jGEpdcgC2",
  "key4": "3GDhm4Rh9bt5YhbHWoFRkXfmfhsaYPENJfsdb1MyetigZYaNhv1BZwhsE4sHifectfQESpdbpzw4jvUy5v7sBW4j",
  "key5": "2YwVxEtpyuipGXVb8hv7fGYfr1pXVD6bZeSBphXzpPjXaVyWMEuzUr78NLVhhDQDKKi3AHjBcYm5kJw5M9qpbeyU",
  "key6": "43j4vWsKUtGhdZ1WTXYtstM7FukJmC5wgE9xKTsfbmzWAqMsMcyQKezdqJHE2MG1rLCaT72gcBYTC6FoqgGRuSAM",
  "key7": "RDUTCKHycsPosLF9vQktJdcBqXf4FyhQa6oQ1YX9cn69JFEGFqYw66CX5vhXirTbrAEYhgt1FxG5bFoukjcsFUt",
  "key8": "3GyRiUEVw8SGnGNvkkKrDk3fGUL9Jtof871cWVzXQW8DDmHCxozaBe5uETvr8iVR96UJfPVkte4SaT3RzVw8ELXN",
  "key9": "GGwUvwSxLNhm1HRq2YtzafBH2nhd11HREFRVJT56N7FDX6b2pAcVYzPCUn7SJvfwsonTK4vsPsWoexYXuRnAfEM",
  "key10": "Syv7KCd21z6k6ggYUpyQURKsySVqSy1vmZEwJbkRM5jsCMQ6Vt2aeUWdQ235sLXuLSQcHMfHg8GeakCXCEkYwRH",
  "key11": "2aefhJFkRPe9QHkXzMYFe8bKZK4bmeDro6ESDDSv2K3kTMK73H5zHWD73vAoPNuGwJijKTfj2X6SXd7kAy16WvRB",
  "key12": "3Qi3fNJxamSJz345kvgV2hL9PXNJ8eBqMYvjs8dr2XG82g65o7ccLYWiEqrBo1ZKRGqsuahgxUHAzYdVXN8BFW2g",
  "key13": "2unwz7cjmfxSP4NN2ezXYMNVE6iFRxZ83KCkA8dyu14zbR4TTgUzqkhM3Db2uKt2a6K5YhFttyU4yjAn7vUmLW2i",
  "key14": "4SXiqiHymoticgL5Muj4DtSbCfbqut6KSKvUP4LBUFWwYCzRJrcNkrD3QSsPyzfmS2vwMoFfiFJLhqmRdhMQqKhx",
  "key15": "2G1G1YPfd62hSaTB7pzLZVsXpfAU8KVQcLyNFnP9N1Cz37i6pWfFsDvam1j3J7SJG6viGHhxixjk2BsDkeXmZw1V",
  "key16": "2mKDNSTtYwEHaf1FNgyzixzwMbWVW7A8obgkmFB7Qo3nWWee6mYEut4QBgNvSxGjJjB9YTZVzxp8zBrcW2bwu6hr",
  "key17": "xX5XyWhSryDzCb3jy9CArh1Dg4LECuRMBJ2dYpYciQSKKEggbPVqgsFw1i4dzWbtr29kibAjaNyeVU4iNpfYnfi",
  "key18": "3M4wTDdK8AggvjnmbxDeVE83xtRBdgVe5TiT8qzAMEVWUg4TEDh4rzHakQze3LfYecPHrZPtiQfLMZrDhEpbwXv2",
  "key19": "3SErzzbjTR54BAVvnYPLLTvcTTkgwBuKms7k33yyzocjcjz4YBMijfNV7EWuaMKaBieccKGzNJQ7R7psZ9hj3me6",
  "key20": "3cNp6zwzYhhvAFVwAK1Eyz4CVvPPgU4LS1vsGQCb32mbxKcQi7QqpjjYs3jFLsLxfLG8sJ2nB6uPF2u8JZiUqeWn",
  "key21": "4qDdUztAMqt7GFb9LYDxk9433Ys3Cfp9vWVAY7Nz4yT1J7oZc9TQgabbWY6AZJ9PaeVrDFAnJv5yLFYBXYUQKf2w",
  "key22": "3pcZcKeqrvvWZrhvXRVm6NdgDsxQRY95ag1wYSyQchgYeQVbwn4TrvFE9pZD4xhLd7YBV2rTBXdNnkcBWCQ6Gy7y",
  "key23": "2uz8BfstT6z5EgB5Pi8KYTWdyBBTMgYzUMVk1QbAFJgGcMPukZnMQdNkrxyDg6hqb7XtxJig2PhXFRSCm9j6qQor",
  "key24": "xMZh9ncHgHFvZR75LM12mjNumCkNYqtEnNmwwCsb9xJxs6r6ywrkFGqzm53EFxUenZmC7uKkszT7t1VMfaHN72B",
  "key25": "mKQznRkhBHwcWmtgdNzFMaTQRpubzKwpygPKhzwfRo6ntEmAEiMcvDecAf9QzdfCTngYweRbWF6PNSe6r9psFuU",
  "key26": "5VqQdrD9QzTRY29XDJQ2VRB4uJiNEEbbTMa1PrTajDuDQeesCTPwdVm6g2uGtD1JSndEiTANpLkf5obRo5ta81Ju",
  "key27": "58oUfB3WXJkwRiNGsuPfWGwvKjrkY5Qs1BGqLVjNv8Lbx5ziDhuPZ3pKvPhRn2MByf38skuQHztTun9bykLmEZwm",
  "key28": "5XrdTEJRNrqjhzsdqv4rJXCNHg6nhCpyKeW2r9bobJkt1rRnbkCcCnG49ZH15GFpBRy4oaHg2QwwPtv853L5X3Z9",
  "key29": "35Y3vpQjS2mHkhwXm5xia7yFaVrbFKT1gcV8f9U8k2iNYR9uihAaWCL6ayeQG5P4RBCo3bsZJo2UrBBHch3FRTXE",
  "key30": "3XvVQNnsFFCf6Ws55NeJqT1UM68P6HLC8pyf8QbDQGf5wnzLetUXzNPtFsi9FNQeK4eauSdhJk9FSuHnoAUZop4W"
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
