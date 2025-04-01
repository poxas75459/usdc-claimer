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
    "3pFocy7Wg3mG6CYyeQsJ1jjqRfDccnz4RBoUBBJUzxemTueFxpzm9y6oCh6LovNDMZEDSca3zTfr1RuXCkoMBnEA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vkN68MMW64nGZYU8ZrR6QN8TK4SFJMg2kVz3iCsq5WpUhFnZgU46REBGFsPEXNkw6KTVvALQK6Zp2UW2GM4ouBw",
  "key1": "XLJYaFNJtRMBkkEYF3gt1aukjdkQ9LC44Lzj8wXnE4gbMe7Vf6rr5DRb8fbXCxpQsqhrgVqoZXZGqajG4mvHNTw",
  "key2": "3D5T8ouNzjgyzioLh5QYknL9ouszEufm4rMTizvsLdDGLWMGpy7GwENYNy2gMDBX2GUAUSRufQbxDyVmztZfdcwZ",
  "key3": "CMqw2Mqz8jrxEoGCApxhRLzEWyefppwvXG7K3Lde9fsEBjvzWfLTTYBaaCCpcUFr3ebuhqrBzQPPkuxh5PcM5Zy",
  "key4": "4Xk4XQdmnwf2TSph2sNefhpRPannVsouZ6C11oHbshcoyZQiJi292GGCNLHtaq2J7QbH6YFXRZ5kGKdJfBfqtx46",
  "key5": "scgpWBw5DqiF4koYKv2UFf1Y9t9bj3NvWYhHm1RKFpVfg23aP3aTtemFwsdPWSAiFVbjZLomA9m1znueQoFUXuR",
  "key6": "wdXKm1o92h2v7jYxkLaYR8LNseHTpREkCQBHsggCcrjZdk4pLTks2dcYjtggzWbxGNXBvqEbKN4dQXPjatpjHGy",
  "key7": "26MrVHXrJ2FFebYyYZjG3xs9vwPS4j6BxNoEfxmGYWVT34ZHdSuYDsxrZ3rkvZrd426aMJcFFWqE1awdqNHWW1Ym",
  "key8": "5a8Sb2af5dzwU4CA8HURExGZZgRHvQDdSWcpkRXAjLueuSZkZP32BiKaF9Xo6pgNz8TjoMPaVyKCnGi262JSDaW4",
  "key9": "54BiWBBcAzM5pkgTkWDNCWoHC9x4vVd32J8mB1C4Vi9syvraxpdnzGeZeZsBqDQcSJsjQTGZY4B7mXX6cFatUr1o",
  "key10": "4sLTJQxjLrnrazM4Q3iMYi8AMNNDauxyTzVD6ZperE4CXU46afPrrmHrYSvnHUjvZkLtAysdUskAwJGfmssyzTYL",
  "key11": "A6h9XiNxfDDizaFsZph9suQx7dUrapPkJdXuqY2XZGk4RhAwWtK5yTtXue8WNK4FxQxud9ch3Fyi3QrVds5CaLM",
  "key12": "2KSNBFZjQjgsrT9odeJYYiB18dUqAFxfBFcm96KuyGTXdx6YxiCVLJdRJPzuiT7Eu3bMSfrGiG1BNxdPY3HdQQ3c",
  "key13": "3VpgRehUiNo8MVUnPkWQiK1kbPQjfUpge9qXMi6neUA1LwRZgJsGzFTNSrnJnQbQJKK6sLAguFSaCeMPCg4omBVC",
  "key14": "Sf7fRApvtZ4V825Qi9X5sH3Lga4TB2ZxZnqQZV7cDbf2cAy35EpKpiMf57VDLen6B5BB7e5qH1ncWw66SHTpKjo",
  "key15": "662XfSbyg7Jfo4SjMSj3dixhoLcpU6sAfpTJbB3xbz6YP3GYrxMSTJjsHYLSiZzpCesHr7zwMrC2k36dqx2s2G5k",
  "key16": "3eCCa2S9yiNGCCB2EpP4fauyQMnK53mk5r5ATdAWE7YuqU2Q4ZMgdbgYUAtXXEGKShjLyo9yKhfKbkwzbW2r4U49",
  "key17": "5wSwKPrNrvNz5uRE2U8gemv4JW6sXkgVQWvZS4PcTwX64a37MPrrS4xfAFDkkjVLBTC6n1yiEqKYx426UfMaVVsV",
  "key18": "3MG26XEQf2GsucwWvRauv6SJZLmFgaHEf4u99f3BQG4Pw82Zxe5Rz6gx1RXZwSPH3uHrLbR97Wi1gbhaHYiReUSs",
  "key19": "2TXrHGVvk8mJxHxgteuK9abar6Bp9fPNtCeeXATkmMEg6s3Fcxu8ANakRSbYpv2VM6wrpNqvJWZ8ykJ6M3DtbwBy",
  "key20": "2Wv1LG82Byh6qR3oszoS5XhxnP5r7FGBadhPtFNwZY6scEKMp2ybudQ6TEZaRJbankFuLtKxYRnYTbDm35zinza8",
  "key21": "2f7e5z44s7QoaBeKFohj1KhbVarWEUz68QxuZpHh31WfJ7tuAwVUEUhvzGVCPtnpceo4nYCbznyYfhNTWzkNMZoy",
  "key22": "31MeXGdM8awAMChgZbNjzDDoM87jqdeEoAbUUTTdaL154TgYVowbkevkcmTYNfmpwwsQ3pe4zKfiMxF8aEyy226G",
  "key23": "4D8MCeSwN2rwR1HU1c14iPE273c7A6SBAq8XVhtbEsZnXtURxkCB92v9SSWUbVGaxzmoHWehLyfxtJwrzocdaFJW",
  "key24": "2Ua1gjW1gHjujXaMbDBTtW5ma4azgha24q3sH1z3J385ViAF3isyJHQSbUmykbbztVQvsaBEnXEWGm5hy3Bg3SEe",
  "key25": "3WLNwoJSSHFu9tUtB3TfNr8sPtDa7u8xavdpb4UySukw8fZipK1qzLuFkZnbaV3c23gz3UenbVg1x9XSnvoCRSBE",
  "key26": "4FrFAkRFPKdheDVmVJ65ciBJPi9ZqdTYG67ybHizuGnt9ZdAdMbiWXCdnFBXwYEAGWjJhijWo3SjkgwDAZspioG3",
  "key27": "3BtKtNpUBekZRvNSDtRkKe2tGCtU4BGnz7rLHWeb9Awefvv9xihjuTHiQFW1VULwo6avsMWuQpzcA51vautaEV7Q",
  "key28": "3YAXpGcXHaBFB7UD5FhXdwJSUHgHiTcnPKfBPXvSJkAdakkRou5v1fa3YAEKjN3YYW6LJpvijrorK5hdercW1nv9",
  "key29": "5pU21rfngmUJ7eTkhmwi6BooBkrgKSYWvr267NGxnV3XEhbGeSTCzjnN2Ki5kCMEog4rDRSZ2KPnBxY37A4w6A9r",
  "key30": "5d3tJ5DgxY7iuzUJSZ8o6rcK7FmZQjWGt6kLtdPCV1E2wmwCiKhGqqBBm4qHM1ALb5zGRSTY2rvbKtohzY4482Nm",
  "key31": "38KX7zhB8etkyquwDzsdsw9DMj37XbtwJebDd1DVSgCy1cJfxhYhYTmMeAVXMmstJNtKodxrtPRdDryLTpm4Gw8r",
  "key32": "5DoRhAgtqHsAm1qxmeLuY2BsvQz57v6VHhqsBuzpTmRvRq9xBhFCZ2RZpXhv7ac16xArp9t4gUpSePZLvRaCCeeA",
  "key33": "BDoBKo1M2BsTcCndXHFWer4JiG6EJ2ifTAQsSorLKL1e2Je4TvRUCkXpLbv7w4hm1iE5FEyneqUjrmif1iZW5xM",
  "key34": "6sxZKa7TRVukPLcKudYqC1ncnhVjhQ8EbQMpvjDvWGNMvPy1a2Vu3GAQJTkWLQ6Jixu1XVdMg9vqUxdbMwZUX2U",
  "key35": "38Mae86KZuoBUwMqt5KtatKEMqPUp9bB89J26Nm187RveZGkGug1p5YocL8imdN7njD5AVm7KDMUJv3oPyAcfhjr",
  "key36": "4nEbRhuhJX8gMn16ZcR72n5m5en2VVzTVKzRdT2A7HzfAMed8B29p69pUuksL82hmzeNa7Yb5tspqagzx5RRfvU8"
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
