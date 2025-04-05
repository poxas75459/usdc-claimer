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
    "5HPTvKC7DGHogZoNMiKuWaAheEy2GWtY4gmyxEn2ND7rG1St8PfppKets28d3b9cxVGDJXzf6u4YNL4mmxNrD9iE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59tv92PEm8YS3QQAtTjGTDPUiovEzZKxCLmDWKqvUxbveWgWganojrotMQRusTTeKzeTgBYb2HAxf6g9M1kqLAkk",
  "key1": "5G9nuB13q62U9WmhWYHkFvE23BhKTcbeFy6rAsg6Q79g1BwZ6rkpJjo8TAvCQaZaTP3664tatMJRdUJ9FWNEXT2h",
  "key2": "nKfxo8BGCRb4QfW26fM293HZnCdVjk4DSn4EtfA9oiQK5CBAvevydauhr7W1HZzsWptvJtQHd3fFPDHXVeQTHvt",
  "key3": "2UVoaesBCsRUtg3TpL1jJnZRYNip2Rxa5BnLL6BKPNpHUVauVHpe1Pgpkonz7hTbnXD3tYS1H95ASdri1wt5eCpR",
  "key4": "4NxFRvnmZ3vj1xEtF4hxUu48NVGypihcskt3rujdggMPpAF1KVGynpo1abASn8gZxwpDSpeFWzbP2YaYcUu8CwwF",
  "key5": "YPQbtDD4heGpEo6o2rf9eGhtzX95iouVwuCBRSBuYxVWTCmNEXsMbDvuCimW1pJHeTqCEtYDotVfEH1t5kcVNyj",
  "key6": "wpJevm6b7naNAdy1bbTeHQLUryB28XGJRMv6WXCLAB5TmCACmHD13KwGPaC7wzXhJWEt2uzwNVtQN8Lr7W4m97o",
  "key7": "5zKcSb7xtAnEBUh9dCdass2xARhuHCRGv5tSteFMPEeDSPCR7ZK5GHg3hsXvfUtX32qFaaJ5C4NPQVcKhQDPgYW6",
  "key8": "TWt15YS5w9jh4mRrRM8bFfS2Un38bUpc27nCvFJRmPTxzHx2Uqopt1geRtEPgkTtDA6bp8kEzPwNbzNEFn3ZyoS",
  "key9": "5VnzobawoP2Y4y7JjkUFqntiLQH5EgT8QNYE21gsSNGsK7vyjyg1RZXkNUWx9YBHeWjnhjbW4mjsToBv86AKMoxA",
  "key10": "3t1CfFURQnrrGqZgZaB1CXDYp7S5rd1RdVVoayFoQ94himEf7nFWRiJx7CVdi6bYHVwbN3kYG8QZLhs7RECuBPmE",
  "key11": "4TH5kSLQ9TmawxmctLyKnHxmS6sp2wMgC7J6LkHpd2PYMjFNTDZvgDsxv8haWUv5pbN5bYRo4W133UcK6766716F",
  "key12": "4BMtbCzxEmMmhdSnYqJfgoLETZ7UnxstfGJe6wvms5mbrDMMAWy5nWFmFeFnQtGVW38FWYWam753TqcR954DS9H8",
  "key13": "2HBN8o1kiixigto5HMfMa7AEo7ZN8r7jNKx82NRHnQYTXv1Zp3RK2LsiGz1dmB5upKStrxzgrru2nJrbWviC6BtX",
  "key14": "4QPQBBAdNLm3svDZ2SVFnGiirrjVDneFqz28StG3HiFw745RRi7viU83GdFUC7frtmKgMH51jzQyZSqpSCrnTsXS",
  "key15": "52sN17AcekLiJzFeDSg9iFak9xDtdF4zm1T4AT2RpbhrgkcADifrWy2XdUnCmgMod9avHkDkDg6Lhb5n7nYZetNG",
  "key16": "67EXciPahhSLZkDeLiVqm3BGJHmAJwhtVsQGR2yi3ykRgY4JEVPece1TSmr3hWDqfbAje3Q4XZf9jD3c71XddbpR",
  "key17": "2xhvngGifs29A9KHsHLpj4n45wvbsziiNajdLVHrPzF1VUbJBhUmmDVGnQXPrEYk91SqsmUFoBi61Db7zayscEHA",
  "key18": "5x62kiw25yw7i4QAAR1qVcCpT3drbuanbqEi4oagme3qJNaZ2ioRw5neLNFCQA2amcqJkbpD97EVtUzmbwHkkJgi",
  "key19": "2qBTVYNtebXe2pwkkgmiSUugs4HxQEf2ZYNEPnDqesCykV1DmaymM5CCunAAQKK8uL6AybCmnqaQmDrCqbYHTSvu",
  "key20": "2cupqzvsxBGFStnyEyrQg6M5tekAJH384fcaR8zH3RAoDb5rfTxAtxJCCzugEAgDp6ddV5cDa4J6MTugNNbtXqC4",
  "key21": "LRLcaN3TzarTKTa99wzUr7Hacr2UyP68Dhfq4DvyLoRGidFKyFmqqUw7uFPp7NMP53XsCvK7yoRdFfNtHGxyWz4",
  "key22": "3uauyMmgwfvu2btLsc35774cRJ4tLQnMPR7rsmqgnE6xUqNDwYgEUmjLodUiFNPNrAk3S1EwKV9PwzBYgQiUmeQ1",
  "key23": "2gkgj7vsKgjdjjtWmyuWVDBu6C9fiP3kAX4f7UvBJpnbShHPbYxyjcmUNffo36BWWPJdUNZ9DVkzepAtRQBGrdrG",
  "key24": "5c4ifb3aSey1XeVDDyTxDUn4YCeosYB1zzv3ZhqzmQPxbve2U4pdUGTeKM9rsGGwZpT6UuAFALMPgMQ2JaZSGbMz"
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
