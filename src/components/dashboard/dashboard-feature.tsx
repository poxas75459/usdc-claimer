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
    "24TjgcMnkzbmCquj9E2nJUYzc9UPpaZDrV1JJ997mdxXZEteev5Ta72qyzzRVFKhT9kcpoHrX2R2rZKeVkn6ff6A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S1tv7atzm7XeiWMwLnEj2wmjTzfHf95GWomDR3YMmtpETnnMRkKbxR5cswrTgCfmK1GALzXso7n1YTJwnFEs77C",
  "key1": "5UTT25vSj4TqrVtmopFeZsA9DTWwoooEbLjZBjfxB8Mb1xEyMFUtggCXPmeJAzun1X9sZED9rZGkB5S4ww4NGqrw",
  "key2": "2hS6LwTVM231ESm3NkCizq596GH4xxUGXwGdeiEsNABmGEunKHcYTbPm95R43tQ7A35eAa8oUoxKjZG4FLbTbMwi",
  "key3": "4rHv4Q48EGWYqv7VAiDCaKLj8rYBRq2YJ83jGhH4UsdCHiywSKKeuG87XLj8EGWsnbyrGR7EgLDb7SYJfXgngRCW",
  "key4": "66Sv4m2FUp4mqqyBXvaUSjm2knEwbKTKj6hFPjNTc8qN6Hedis1eVvAwBf2r6zrStWqoe8cF25Kgcdw6sQ2Kx4V3",
  "key5": "4D32oXcWYok6Y8mweR7anprHfAkYrEqAJF5969W7PMGqU4ZcUA7DQxuVbmFCBYTzD2wN5qNmh2eygB5K1Nw2kLkG",
  "key6": "3gyAk8SQeYsxfjiqh7GC9DEUEz4f5r5B2VRiv1uQZJofBLu3ASBaYbfCJpm26ibsFqynWMratfsxB1J4dbZvwLHc",
  "key7": "3zBJzRohwXoQXHb5dBH522dKvcDqNxUoSuCYji3UXDwMNKKiRdSbaWeaXRko4HbSCPe1Wqj7r7EzYfnYs78B41ZC",
  "key8": "4FsE9URfH4EEoEfZRnh5bftjnfR2RjppSGde5fnPNE4kZ3pYupsnpHZhGbSEXpbCNeau8FXfh5MD85DSmk1C7W2B",
  "key9": "1rbX8TG2D4cRB5fUM5R2NKQXTngj9KUEHL67QZqN3uzKKn4MRKLQzKipggTKuDVB5gyt5nvu5NNsC9enW1xcTKp",
  "key10": "5ATjfgUwwsnzLd3vxJiJmfB2b9bb6E4rXN1kH32tuJqXCwKJQyk2131oYPAg5ezvwABAiJe232ani5HdJXQDi3Ww",
  "key11": "DfCCEQvK3oFQxNFbfcwEDDFWsGNFMZEwwooVFrFJE7W8m3zFiuB6EZ2BSXMc45b5o8KNiPkfEr89xVWKXQB1t31",
  "key12": "2zK3NLmgB5hVBzYDX2yfnVLNbdPEaVhBH2UV4o2NJNxd2LWo16v1dEpf91RcyBAKNFsfNMo3a2yaQ4EUNtA2TwV8",
  "key13": "Zx11t6d3jXv1QXMhS5WGX54AkkgHCFawigPZXhzjVHY1wLqPFxMgQMsvouEtai6ytdQWmoSgydY44uk3hqG533b",
  "key14": "XAmj5KUyMCux2mdHk4ta8w4PjUnr1oRVsm2BN1aCiUox1D8cWrn9HJuZKGNiNoz5v32MtFpx2SJvudnPc6ndywp",
  "key15": "5AxHzS82hxTjNqfSEKthUTCjfKN8bKnxsa84GK99wBdd1quxHRXjYfpvjJDp1sZNuB5qVoownc727mp7BLFuMs62",
  "key16": "3C2SfhnuuV43U3sJEzuvyn255Btz7BRQV5TNca4qSYUgxhzqRYvFHsbwvokKeuKyoZCo4GTYAMd5mpFLQxTjbDCH",
  "key17": "PGVzXxJrDKH1Lzrmb2xHDEY8EL2BhpbhCJY6geEs3NwzjjYQQgZmbungtR7sWf4F5qHZMFmbBaPA2xKQTsZaNWJ",
  "key18": "xGAcZLzQmuJxrPKzXTQUqnVnpPuCJyrfsR9TjTAkhLFsidQjni6rryDygrs7ysAn9yfL73LFKdMRhtfG2jirNZf",
  "key19": "4xcHKiY7DaAdYZTBhsmQaFySK8JcNX1vXW516eonQUQWA8eibsf53ZkVfRbKSXv5LnsRdFrwU2kAvdV3AoH9AWqy",
  "key20": "2qxPRzN5uqoSWxjcKn1PxVQkk5V5tmhRSaNrHFEYuCFhDy7kuexnZERPaYfPRmZ4x4JKEBz8DZnujVYfcPZZ6p7E",
  "key21": "5u9agXjG7tTThaeAJfQdod69EiJwMA5j7B3v967TVyxrDqkZdxFnacSXz7kpBTfTSb164k9EaA6EzeiE3ucNXzcK",
  "key22": "5QmAHCeNiUC4avgRKqaDu9JZPCdcLFcCGtBkBQCqZPzU9GoaVf5AJpAQTrHBJoFiGjmGMgDHyY1pjCyG6wHqCnBz",
  "key23": "2puP4txDZbkNH5CJEaDJStRwX3PeGLSRnFLiqdTgu554XhoYFNTzskkPVK5yrA3koBCT7Jh234uqxgjqzr9XjWpQ",
  "key24": "39MbuXCLkCHRDSBZhgUnVsg1XsaBfEtkBDaXDCRAGWSotw7yLEQ46P7ugdJfBaoe7fQH3ksdX1oQEDeZf3NGw8Zr",
  "key25": "56xprch8zhFEBVbfmrMUdCxaEHsbFzwApQJ6oCkSs4s2iArd47g8E3uPLiwkij4tLVyRPsQmCdr8ZAWsXwaNQsxa",
  "key26": "4TApQvrW5qtUQfg5MvabeN1QW9krthJDSVvJJ82FYvkj56EjrQsMrhujC9ey4BMhv1AMTk6E2DHyvF1La6XkpBYy",
  "key27": "5DSTJdi28H82phEdkV8XT1mK8WYvBSkvzUDK6mFbnfPiJDZMXG3kJ98yrej6HDm8cgzjGcHL7Y4BZ9tjzMS71RPt",
  "key28": "5bYYF9gnRQ2iu6cx9D2qTao14U1AqfywHc51srRWexuxqdvMJsfAdW4gZsomGmsSBaoFhWTXHfk5jCL6pFbNFi13",
  "key29": "3QNcpGf8dShMr9F7RQivDk27iiJXjj1gGS7Zc4KR59UMa8Bodffh31QWkZorCnP2gt3hmWnzbd52pWMSvZERyH9s",
  "key30": "4eyGGqUdm1dVgDmsfDbTdPSRhQRmDn1ZZ1wd8Wcbxshg38gVRQfLwbQLWFqyKo3sz4CP14rqLP8eKSVjw2uuaWiv",
  "key31": "4J5yYKRCuWvuxBvuh9JCmYqDGFbM33SntwSaesq8vb4czyvtANAMd9D9j3fr8dZUrwVUHLBntr5Q8NWNK87utQvs",
  "key32": "5bUM3iyw8WXbaEyTSweqgBosceXHrxJzTT41RQT32TvYvunnywS75WQX3x8j9rUpKxyBSomYhv3vBkgsUuYGP97v",
  "key33": "3W8BsH8LZ7h54daP1TfTkVEn77PnRuQTnVBRz5JwbPNRTJJ62LoUqtCwis628VfWEoHMgoJ2NsQygJHVFq1pwkCx",
  "key34": "395VGwV19Yh9PNoEwq1TpHsR59jgLtxXCH59Dyc8uVmU52JRq9pQrT8iMCuUcqGkX8qJC8KtTmWkjmXhVhVTBDLQ"
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
