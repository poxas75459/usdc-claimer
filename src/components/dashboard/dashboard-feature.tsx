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
    "DWcNMoXWBGRzvwuFY3NZLYTi1LWH91ESwERKY8ZvCPgoLSt21bzCaNH7svEwkokCAhU7UL1pUF7b137q5kQ7mg5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iHnQsxnUx2mqXUjLGLGZpTNeXLUgArrfsbqBDFYVPmz48aciZcJqQyyZfDGdzUGtiR4TWV6pzwTXGmTqq6399vf",
  "key1": "46nn74zYyNy1Y7Cb4WW1w2avDdhzdAX35isH223K7jLMCv2Wf217FqcUy7eWF5o5K8PjTtU5PBL48oUV5ugvsdMb",
  "key2": "3C1z9pZmkiz38HsXqoweKUYTvmt4wR12dsSqPmzNDR1Xmoxvo3nSVEe5gUDgymoBUyoPpBBi6zHuMBd7yC1jx8KB",
  "key3": "nMRyXnMo6tVPXyPNZxXeetdY6CLb4TrESHDZemAqH8y257hGk4xMxUTvztZAbk9zTxaAyrYHUYR2WweLaXZmeS8",
  "key4": "3NGqQDJpzqws7Xm7dFhn2j6Jr82UWMVjrBjtG6CmZ14rbDyhj5JyRF1qmnhnbUcreqRzytNUq1C63xqbJeKNDMAX",
  "key5": "24WHFp54u2PmL21fEBb2bn1K9moHpPjuMKRETms9VFNQJngLXsqUwJt4ysK3ZTXQKHUaaLFZuehQgPHVMyyqGtdf",
  "key6": "5bLX2KLuLfPj1iu7dUFe47VqAa4jSm5AaTb9Vss3rtccE5HoD7G7q9rUK647zza8yroY9txfGSPpVcjHnAAUBemx",
  "key7": "yQPwBVYhSZeEv1AigffgUoYLtxPMSGWU6yi8R3j1DAeN8raCcfaXNuWXTxWdkFXn8wQ656j618t58fxWJ5biMu2",
  "key8": "5XeK6PrpPa7pTqfgggxp6Ua64E8jbq8D9j8xXuQQ44A34aGcbFUpCqpaBEDn6JHtyhFDQSdDqAsMGfcbMs2asoRR",
  "key9": "5x4WNwzemWbP2KwfzXzeW8hVDJiv6B165Wsx551tajjniq6hhXTfb8wMoTAyDRESDBS3FxeHnYpn8594zJ1KsyLc",
  "key10": "5YQph4snZowHWTYbgiY8DHUyHDj22LkrE9XC11d1MdDs3TxxnNzB2CUxSqUhqLZF6mM61a5QCKn2G2k8ZxZuNNHX",
  "key11": "4BbyeYRQ8Ro3qfmeymaGeifEhPKcjqS1vCfHJgz7xrQs1G4vGS5zdi4feewwEKLA89kbjYv3nS8PwLQP76jWN7zR",
  "key12": "3wzDKA9EQ86QUFzfz7Eu3FQXNJjzGf7f1cyrBwcyLhe9SAfi65mLp3uczBZXG2RLKQQee1ni5qSNeDW9aVTCTgA9",
  "key13": "5WAbcsSSnSLARy1jF2TEZ7zbAktEPpUB5FSXHSHQhssF4ZpqC2JGqCKFdhN1xii45m3UrmJWWFuSkYDWZwdFeAX8",
  "key14": "421ynaDNMspKm9KQWK9J48eM7DT6BqBM4AZuMGUStuNMTo4f72Un7itRTTipHEWvZgG9rWdibxoBzT6g2yShv5C4",
  "key15": "242QkjPCHxBPEkasuSdq6TUmiq1t36ZKzgtcDA1hdLAJdTG6jmWmXZ5iKgX7xoBQKNELf4u6dCqw3vD15ZVqS2p8",
  "key16": "4jaoWxrCnGn1mwGNud2TyyPNYxH3JPtu5NX8c19Bnqomw4kfoMJFwWNZd2oCUrrmf5Jkr2W8a42EvPECvq9DxknA",
  "key17": "4tLLoJHXEJi53sFjGBmx3bzs2f751n8QheeE5kPSkLt9PdRZMRsxGHAXR1JZpSbRY2APArk7zYWV9dDN4HwasoPX",
  "key18": "3kZsqqTLMWtJ3w6jZtwDS8MRTcGeedi3Ca2w1DsPepSNbaMW4qxeZssZ7S29iCsFydUHUN1PMjwYKKu71XmYb57s",
  "key19": "5q1dzzxQezGT9A4UuCjQTsZAFCqGy3cgGXjV3q6nSRtMjmhskki3uMHu7dVxACzftr8MLayXdBbPcM64axSxs71o",
  "key20": "2L8FEWgaH35WrEESfH235bTvH2sSNJ7WkJ6m1v3kYztSDfCKC4L3i2J3s1AWY2z99MSZbuSCDPFvp8Pub3fcEBvi",
  "key21": "pZNVDuZhQGFi83R9tFToKVAKbjLzDXqb4bfQr4AqCHypR7a33VsbKEPegvABAF6rr9MqGj7pD3jD7NHtUkmbeTn",
  "key22": "5vztZGyrH4gZtM8DsakvPYYsPUjvwfpv6yn4EsWm6UfY9gEyn7GxHEK4Z8mhyviSXUw9dJ9W2eCJRgBnvHsZmQMo",
  "key23": "4Y7SkYquJoxWubsp8x1ceeambrZbfT9RsYD617MhFFSVUGW6EkGtLJYLzjL2gvJWS74as1oMGQUQ456XMdpu1uXf",
  "key24": "5LkTWt5KF4Tf3LEox3LZhh5WpRKmuCJP5X1xTjdnR5J1pd2VLumkVbYjTjzN9ohjSGswnR4nZLziDR5MLJEi2tUc",
  "key25": "32tqRaBCz8XD9dtwWD1VzDZZspd1guRkL9TXePAQoNhrbjhyRAbbEnXP2itPYHy9aSQ98N2VQB4uFTWpYKrqb3CY",
  "key26": "2fJj4jexPgutpCGbny7D7aFaKbscfvqL1AdicrxDtTXaDwLEzyhA48mUWVNJcGWzQMARWnaMc7eqSWoBwtv3DvvA",
  "key27": "3ntZAPWsxYAZwiT2prJ5oKyWeLMx7rukC2PXrm2rA5KMTx9ksZHE3rJMz1bPXvhvyE5KuuurifvWWpT7RGjTAxMo",
  "key28": "2VrLaCcooVg1qwXa925CuLUYtT85FNoKkaa7vHPiesjzSBkxFTKLWS221vUBTFj5KJTGGfAz1pc94QaUFvoNWEZL",
  "key29": "418w188hqCBYWqhi2YLjxQdMSoXGwDsfN4mJw4H5huKqZEBXXjRH64W3t24fABu3nBZjFeEfmsbkJD8NXbmmHNuR",
  "key30": "4u17mWuf8aciDLygm7iBXJQMw2d8ApJp1x1D85s9jUZ96k9uAZMbb1kj5mnR96t14ao5BGcUrAsL3XwTjDntiCD2",
  "key31": "2acmnz6TpX84xX6ouHwHDc3kmSiQCMKyKNQuRwbNzcvSYFaVd9TEmUippBvUHoL1GUuHxyg6MA9XqE7Xwfa8ihae",
  "key32": "5tjUenL3yrGZP1VQxRvf1CGNJRH3UF1SNPjou4qesFVJDc4fBrGDDpqP7FVqhbXxdVaCH2oPsr8QLxRoU1E9WW1x",
  "key33": "29SiZMFncvZy8QA1U8MJm2FNhKK2gWvtEezcpECJURHVcxHRuLHAS8CBMGRaWADAWLLpjxqj8Bz1pUM1Cg5hYLCu",
  "key34": "4grFFWRk7qNHRit5BkfFuQTmVZKsYL9z8VCvCoxr49iwTzNAo3QHQdsq5SNqD3LavapMiYnE3FcTPNBeyC7fyJqR",
  "key35": "gememjVWpovCz6FZvyNnes9apwcmfhpeUr43rz6ktCn6KmdtGdUYGuQQu8Rxc6ckKugBFz4s7cxck9gYRoNQRSg",
  "key36": "4xKeTrWsTqWKNWEoMHPhpuwy67pFhATTYxn2qEPZEwiPYHTRc5in8YvsVRpCRh8qJd6XniocBikMJgchDLCqyxmo",
  "key37": "4WY6h8HuyBS44uK43RhbtBuc2aTD2hAQqJoWtmvSPWTAHaJuuMJcR3VGfDgE8vW87kpnpe4bAkvSmYiP7zB5h91C"
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
