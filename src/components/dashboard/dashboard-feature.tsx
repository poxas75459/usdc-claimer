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
    "3oKVi8Ai95KBrx4Max5KYSX9oq3mGe97m2MGSb4C2LjusHoSS5oJjacQAfzmgz4Vg3KoGSccv4udHb4QzCgEnApp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tsh5StgH9HsxBM779YgQ4j7br7YnLmqSQi37Ujx1fFYw1fWbNtUkGq9N1HuLA7Us4qjAEHbxiz4eyPFjzAUFggQ",
  "key1": "qXUySGKePWMrBfZtnDdnU3jpo8rtBTwqhf8yfg44YtzwxGovoT4w8jS9jitMd8sSD9afSF9wuWX7zEjN8q2MN93",
  "key2": "4UtsRo3RJcW7Y9ABTpK4RdJNCF19gFV7GbYTxjMDjgUzy5D5MUK4R1yBsZdzqRd1hmU4kqWEP1mK5tzMZED3VU4F",
  "key3": "2kRW2sEPTgm9sjGqS8uV9GDNf2ZUYQGwAWYLJk4DJhQ3Rmk9QfJDCpEzMQ9GuDAiB9SHNG6iYAFpos4xqENJuRAC",
  "key4": "5Q9yfK79G3jeywPQVo2NE7GXn1P93Vq2d3fUdA8MKSHLwyA9CdBNhjceU1TyF2TTK7eZnrtDSKs6cWZgUbQBaDX9",
  "key5": "2XWg73cXJs9nHAZNk3SgMjxie6i147D9ZMeheiGrnU7Fi4RyizdyT1yyUW1G2xo8yAZdYbuwJ28uYYE4hYQkWuER",
  "key6": "4PRzkgJEXZez6xHq7qtcNvZkRndE4ZcBGNyLsSak88bgmEnSKrj6LBZzxSdNacsyJJGFmmjXmaynLvKoWHZTnkw7",
  "key7": "2rRmJBx4gwru7sRbhw1fcVRPvRfN4kfr1JModb9qLZUhpb6gfuwwAPvMnffpxAnEQyDFCnTH23XrUax4z7VGsycc",
  "key8": "4bnyim7GdUnC58z7nrWXQ2FBVWvcAiT8ntbnchFvZVnMPa2RGaG3e8HbgpzdeiKicUuFqBbZUHc3vNBQEgXkZhe4",
  "key9": "2cEDcPnT8i3Vi4zwz2K8ygWvJP5QVck2YWrHAAZxHK5EC5QHnjvWRjmLCEFGZoGhtdY1Khw51UDTjyv1Haeb5nVY",
  "key10": "216gnQjTgaS1fLYJmXLGcrRNcsLgmwQVbUJLB3Jdrz6jmmQwjMu9KX9MzWahvA1VHJxtc1gk3SdTARwzLZYdswgf",
  "key11": "3zhxcLG1A4txP6pAxYDktZmXykeR1S1xAjUfeFu2Fg91BZLbHcvnuS9ufBWrxb3CC6aWR5dgCkLFWQTgAAJantk",
  "key12": "qExGMP7ZaJUqShJfjaCjFMZpKuBmxuPuR6asfr7GN2fE93xTqQz8QDidRuXAqS8vbDGcahFnPxjBqEAcNEVfxiL",
  "key13": "2BYGkXGSH3hV37YwBTTxU5fr5xJGiAABi5YVHz6k6Ryimyscrq5cu61Hxm38PUKG9AbTGRdhVgsv1FreTGaAtqHc",
  "key14": "5y5dBJdDpEiwNsdGq8Yw47XQnkCHu1ivt5SaJARtTiYs5tizaC9rBmHgrvxQp2FVsjWbX4EwUibLDSHgMti7WLHJ",
  "key15": "5F3gV6eLym3yNRCmcWSAvi6WwFFzsgo3HCn34gF3EvAuvrbW6bLC2KhKkm8eoyq2RdjVehb3dXiKZiQouJUexHLR",
  "key16": "4B7WDgBvXBhLjGzFVQQ6aAPfHaUqtykB8QZA5eHR3rc1HvkQ2LDuRL6LiDroLZNLLeNEncF4WABEakMCdcY3RrBw",
  "key17": "pY1nSzHdUnxTrjfQ9znKjWF4QDjJ1qe1N2THtVqtXn1aMbJhTBuwpfFi5DvDbMx9vzhX3BxKHfg9scDQ9Tr8QG1",
  "key18": "PLN22Q1AAMwzSHHTrz9mdv43fY3RGQdWLu6EXowuAnYEqkQu4iFC4qi5RgzNbchvF49553LQn5awSFXCmh47PCg",
  "key19": "qTHdGNUbMFT91U9pbY61RhYXDn729AyJhGeKbipJqnDuQeELH7L8gixzjZnXrchWKcmdtYoyR6ncL4kLF8P1hsH",
  "key20": "4g7zWC4pMXpoLG2rnFXT2SHRcm7bSSpJtAvoc9U6kDB3KmSNrpXahYGSTkQqqFyfi9bdDLs65AJ9985eYJsoMbo2",
  "key21": "3R7jsCzDNZ5DMsjcswZBZB7z7ixcsoE9XpypxNvujQd8vCrFcpdYWkfm6jJHDxFKz4cjLgVpPzuTMFsSr1heoJpn",
  "key22": "3XE12YSQeX25wQSXHDoxnDUQaNEBpSPRoga4aWFdVXduzjbmnBhtyry3hqD7oRMgvc81cXbHyLruAYsaca7TB8PW",
  "key23": "5fmqoWkXFnv9gWDPvgePusAPpCX4qiqUbdCueSwqHv1HphrxtNhUQnX3BdzxjVTXx47PYpTBJ1a21zfRPKeAxUfY",
  "key24": "4qqfzA4fJLYWYAK4W46TWjBNLnU1V3FGFgV3yWx1ua7tKzs5QuH9VJw9RrcyaGC3H2pZdcL8k9nxCDbe4DJjMmTp",
  "key25": "nkEjKBuw1eo5CnSnMB7HBumyC5Z69SHKpvF4hGeYqrgPP4QiVE4zD9WH5hyq9xLELdi5Gqj1gjKi79GRbJndDf5",
  "key26": "49GCuAamgGzJwLAzPASoPGMpoYSxcd911qX3F4roNJkDxgQdujJEt6W24LyRRnBGmPvkcdtNNyYLLCrguYErhfBz",
  "key27": "4mbeMwxLiRykN3eFMptZ6rVqRHxHDdMzkCitXEiRiJs3Sf9WPH7ikvbdVR3DPGYrxtJnFtsBrT5gLnPJxj3bqHoh",
  "key28": "5fLtcvcMkn2iRmyD9gNCgK48mCAjAMxkAMFfw4Jpv21dK65mCe33u4mWQW5GN8kg7yEgURDd635NvA5iVSxjTnzp",
  "key29": "5AhmBR5EnSWN84nzaaqzrCQySgxMaZmBeZ8UWheLK2foAJMqjyxLqcfagJ1MQ5WTXS1E947hLyusjeSU5jbaxZjM",
  "key30": "2d3TfyqwabAcxD5FohKzCC5yATW23tr4Ty4av9TnpiwMCwayZLzXamvZEB8MRc4cSgeyQbYCpSfERNrTAa3BnDqh",
  "key31": "5mYwt1sYLHH7V6xZkjTBwerXkqS1xqyoTfcDVn1pQW5bVw7t4LrtMLdHc39t44weENLDsZuPxtGR3sNUMoiB1xaM",
  "key32": "HhPAV2XLF9RgxD1jY8L67zsfmTVo7uztKKFNXgxk4qhDS1rSMn54umbtk93BgnZzUuJDM2JronuWZQTfMXXtfmC",
  "key33": "56g8okFwTuMown2vMXGRWXKgTgqo6cFgqLwiigzbJt9xpv1QRHRrErrmUEFc6xGTcZfUCTAjJTq6tdW9M6AjSNUB",
  "key34": "379qz6yrtZj3X7b4VFSn2gQRusyHzxwbdXJyVvc2PH3Ds3SWdkB9aQHK7AGKN5Vq2dTNuHjsmNyfAvZtebQbU8Zc",
  "key35": "4ze3ShdwHpgiorywvyeio17sRkBj5q6Ls1o6CJm2YgJp9X5r3JSzs8KJrcid87khurKBMC1d59k9cTMy1xJtGCnf",
  "key36": "8bzAQJTkXtTvDxoaqhyTnKezBUDb4gPdeLrZ4Q5vH9mVnpvxPUDn4bQYpgN4VohAfnNihSNDX9zAg8Z2GUBuyH5",
  "key37": "2KAaoG5fJ46pSK8USkhRgvvr6LUvb4kWWNA77ZXRZ95Gwi5DibCe778uPV4oRmow2D3y8kzKnm3w4hNYktXhCvhy",
  "key38": "2kSP9JTb6WgprAHRCWxB7JkoFQShMtVxvbXa2YX5eyBj8u6iE1fCSQAmhBVGQcCPfgjCUAEjiKkLzWTmA6JMmMKu",
  "key39": "3KB1KQiYkGsA4j2RienUxPj4FBHxQy7EyBxPEZMucLb78PFJVMT2AMVnzzBybivDH9DHhC8L35sXQwBnARgvSRLd"
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
