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
    "MqZw16Jmja3sJGpY8SQM4f9acrUYA8xdhyW4gfMtYoHH9QejQUmrp1aeb5cJMpHGYjVkT3bb3Q7bpnBkrWvnp2r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qvq4bwm36byrdngHGyxqsH3oTy8E1sZhtC4mmvDww3cgQCCyuxPyMPsxtUy4RKo7FQVa4HHLG3539Zv2Ffxfs23",
  "key1": "3pqGyzSXMeVtg4zLCTbQxkE7ZaKS5jQaQh8mVMmHfcFVxjwBkR9ikUpMtPXzsuBmhAPnDZquWp8pDH3BziV4DtjF",
  "key2": "2sXW1xEC3ZbWde1MaK6s7RekRdAapL8zGwzCDwtKHJrMsSsgEq1wwocLW177hSQZ8wwR6v6zFmZbQUMxFJq5DP2C",
  "key3": "3yT2s6Mvf314x5ViLgDtbQRg1QWS7eihULSKoLQhCe4iqeYhWCFagGxtoXDWdqu8FaJT6pQFAbYR9EVgjmsnHwuo",
  "key4": "epqLEcxnbvDwATYx6sVQmYEajgvxWwRjoBJwsxuiArUaEJgJEqF65GBvSQWMrpsqRXBJ7y98QZhGiNhnQq7ajUk",
  "key5": "5sBTKf3yfy1wyZyo5zpLo1Hfb3QaJqgoJnwH7TMm6JEooPoawN9WT4dBdby6cYuMQuLmgY8wh8VZikLWPQifnc6v",
  "key6": "4juDKf8nZoH89yX2rFznL2u8GYQAfZ1HW7rdUH5SD9W3yUh4NYrkJphmKcnuspj8ECb7qcyWXFcU1SDdprEM2VYw",
  "key7": "2Eevd4spbTG35Bd1ChKzpcCgYq2R2vnDh2FYsrqxafv9GeVArs1UgP2DizZAKhX4r49pg9LNKbrxho1vtm2J6jGv",
  "key8": "4eXufckbRVaW7RapK8CBDkh5XSzi6WXvWtMStNDBQ1Gvb1Zh5hoe5J4tVpyZF8uAdqX4TjnmFfdmpoLDpnTkgpci",
  "key9": "6nzSCex6nGoh9UE9r1MZJqjup6DePciRjud4fv6GxCvWGUnRbpGSiB5eGNiDDVk6LS4iEpiGLexfWgNbuW7bKkF",
  "key10": "4J2aNTCEuisNSzpaCzsqASbC94rgx52fBPE6x6Juaa8M6DoASw5CyBtEdbFC1fLth2SqJkkMijPNoSwgwUDwEKqc",
  "key11": "3GcwH8ar41he9H3LE2puAvVbGFnr6GHCurqBZ5EogHbYE8Gr7yxZ3hFbtDY7GQt7Hs7yqYquHYPVpHbzCj361yod",
  "key12": "3Gj6eBdzdUSqoeVvbvB7Xvb3zjPDaPXcU9ijyzFbHr2rRjmaedaiPJJE6PcFBVVKjMGhBQUFdceKnjVSLimDpFNY",
  "key13": "qgT4DEzWU4CbiyPLFPU7CwBcrehs4LEZqoKgG2WyuA5JVbnBn6jYbXQHWmvY8ty54U3qd8Ve9EfnA7fEGTjCg3t",
  "key14": "wjaRT7uS1w9XzFiQG57rTdomqKQtVSrgDZYnMucpfqvTp4y4Y89x6qSAadLrdCNotuTRU6r2hY3iCXLUKWmGzAu",
  "key15": "5j6G3Q4KrC8i7CeQNs3kSS8yFhhBs9QNcmREeEmopn1EHWwTW6seyDPBKXRifyJojsyEDHhcpdnMG9kp1JLjGk9K",
  "key16": "59GzSA4vY1pLGaeMc1rcdCdQGr95W9fTKwoG4PTyfkriQDHnMWn4EEKew5exNCsN6Lncx9pLuwUX1WAte9u4Eevw",
  "key17": "WsCmL58LEtJ9PwnptLra4BMrm7qvRqpUQVFCgu42h2kKPqTRYyQZNacNC1wrgesh4dZEYPmvRME5cZL6xCoQKRU",
  "key18": "48SuNXNFGAZdY8aeERutfEfQ9VgiVa3PtaYYUrHgXcTZq1haUXuqh3avrc4VR6n258UsuTvVo8P8VAnWEWzGhgnb",
  "key19": "4W5bvvQoFFQcREugSjZBHuMZ7VAYM1Bdy9ryE3ahGop18zWqa1ajVXF7puCHy9upLVeR4FZ1xxPgygsfsMiWz2Qx",
  "key20": "5tLAfqn7xYSa3SgsuXCSNAbv5Z65RriMkTooBtbtS7eht76iZGtFN6bdSXAoC2v2btiLsBMcuXXMTegZsJvVT9qt",
  "key21": "4WwvktWqwxL9LC7R7LjPzW5epV5yPRTxEJWAc4wxE3ZfSgq5C9WRvht5KYhyXB7pYZmgmQLVfJR9pyG6d2M6NPx8",
  "key22": "wJyoaicVcDU32HWugqkCUMtk1ANZxfjQdhkTBuGDDGiUhUfvawNvfDyujrPczsaKfzK75FJJEWbVGErNTFRG3Z9",
  "key23": "2Ksbmk511ihgTQK8etwVrCgmdb8G64bK1omB8UNZtdGSVThgxb6YYTcgFGeA6mHxfVoZ1rD3ifB6zhpSoXWfSDU5",
  "key24": "38pBaLP7HasnPjB5ZnkN4N3wJF9QgVSTCUnuG2og4gS2B8UNYMZ1pJsdCkKSWi5DSsCywZ8CG5q3R2EJfhn45a7n",
  "key25": "LwK1SncvrtL1tokDrZudYytKqAoHWRDFcbANwQLvmcJFCR3UcjV9ho7AqCNW8yapueoEJCNU67ZtZpVu67HCH5w",
  "key26": "4TN9U9dqvez3mbSeyjC8jZwCV9vZxt2KnccCcXrAJXVN4utaEFmJh3KvmXUR2xzWuvNXYbbutZ9einiX2sB4wV1R",
  "key27": "5VNCXpmizeTLzXafSoJL8sifATauhsVornugKgm9jqnf5pBNeia6jMaDTVokKdKRibRM6QhFXZxn7t9WY2cE8WZ5",
  "key28": "3FZAnZUYwvxKndFH7GQmHgC8o93HNogZQS7wG3Z5ZW2ci3nWnqk76odZnzTsgboZMZ77cGrAeCHGfDi4ye8bCeYJ",
  "key29": "2qvde6w2KBPRxGRK5aSvD4U5XLWarR7W8jpRMs2cYN48porc9eQRL6H7ZgJcDPzNUmDcDfGzvAAyEc1p4VppaJkA",
  "key30": "2vw1eW7DhoANapwY6LztAeUaY3KxBb5KxLczKLpVXqCpdnuddQxVyvj8jWnA7DYfiiZ4uhLdp8dGn6R6Lz32vCxf",
  "key31": "4X53EeMXeciQb9dSTE8gNtos5jmjSCMSqveSwht4PRSNVbqFSWykH9MCR1yrMuQ7tAzmVadKFvw3vUhM2DMPussS",
  "key32": "NUVzNrhHjQz1C5WpqzWhnUMtCxsYDMLd9hGcCZqpo7wNtsyhuriX2FsaWAKdZeq6WDjU31rkRaY1yHyGZQGG1es",
  "key33": "4Mgmrq7EYNJGAubGeKC73FMa2yx79g6RLYNk5s8KTvQkteUcRuZpsHhj9o9FaTg7sVSwVekb3ZGKWr2VVnsFWs1A",
  "key34": "29SFscdPXCriHLZLuPUai8idVjrXiv3V7pPptwZf2GegoueuHq7184uweapXhg7bv7YdynY9UTG5DX4fgZj3dWPi",
  "key35": "4AN8Uv9shLFirCMb18cafMTZGzDQGYFEPoVRHHh6wwsmyHWndjxacd7xN8SszFUpburm2Y1M2QdNL1uAtYD49ypt",
  "key36": "RUm8dZ9HR2xECrPdbAwEf4XyHkadi86BkoFeZHPiqYnJbo4ftEzoT6kNAjjZgdaW7qmZYz5Wjh3Uaq8XZ8swVGP",
  "key37": "2HcVCjqBpLwd2RyYE9rzuL4Y3LigCBCce1BARizWMWzrC1ujdd5DP6AQq5FUHJEvPtM8Rgm1zY3f7tdypXm3WBYv",
  "key38": "3XLF5d7aRrEMoqz6ChDudfCHafHUTQCa2ZvoyPAwUkFjsUFTv6Lh7DN1NDtYYBuZbs2r4fBGuiD3w8wZkYW8xmSQ"
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
