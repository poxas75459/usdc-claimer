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
    "Ju8siAA3iHsueiAFqWbqAoTA9eweAbpKNbCMszCTVZdEnkKEXAodZPLJhh3p63nvoggzr1Nu3dDFr8f3sofYQ6c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5atmkwaWS4r5iUX9zK7jVnaYzHTrU7snRRNh6oAvkgbixtjEKKPtsTUYo9cgmJAmcjZMvYDZsHgto1fLNfcVMGdV",
  "key1": "zo5CdcxArV5ACNsgpXjzQYw5CEgxM5Qj6tg4yPF1F97P67As8tXZ6NxziJMmdxnofwkorWaFgoxPvW8TVDLD92A",
  "key2": "42vDgdEsyiX2djX8mjNAEZXix3u4qQw93eH55XdoySk2Hq3DhaEmbdT6nF8rTFKWzvg4ddnxc2ZJkJotVyx3HywZ",
  "key3": "4m8eUFjSWRZ4yRXwGaLapSdD2PFVT4SakdNiNiYR8CxpgTujmHNVLVSGcaxqdbeEd3hjsWnxeJita1EWoZBqp8Te",
  "key4": "4FWWazCNiWs1nPRZ6F4eMq6VdoaByRYu9pGDHcDC7jPdigugb9UzYyZj3KbtioJDcn2aEhcfSYkTA1kh7RryXuBb",
  "key5": "4ZkqKftUJTiWzitJyVenYY7RzXVLHhMD8oRpzjodu2azdNqc7qw24AkyD8fiuLaYXrQ31LQUBkyfYRinzq35zpLB",
  "key6": "4w4wQF2pFdTwsZ1FkjKrkBPgRdGEFYzeyzFsDz1nce2mAiKXasTWQDwBnkS71fdKWGdmQzBUXUUaKv3EaYB4YVXK",
  "key7": "2cTCCNFywpFRVsJSGJ4D6PnyLrE4XSjgqPGE5PM8e5JY7VX6gvkG4Sbh8WJATjPioXX4qWwdHptkeiGV726ZaEKg",
  "key8": "4F4ySmaGLMfqdpAQKDdETok11KnVVxXL42kTELvdLUMmEvHAvdofLQajqF7Fm7AJYy1VeRiQzwEJxsWsVMuVT6EU",
  "key9": "2eNbCH4yhQ6CAQTfYxamms4cXa9bBgaXDAaVEnN3YMFTTkwCzvzLUn6fgeg94JzkTxD6t4m42HUeAGNK6uCeEtei",
  "key10": "2KZ52xuE7uVBNJrHVoypaGfUPYRSnKyJoqqTR2anSsQj3KW8EGuNMsNV1u3PUKPiaWPRek7ov2ByJsEtMmb8df6X",
  "key11": "SryzBsCf221Kk8db3wQEV4grRYEtJ9f621tW4R6HVqto1kXjYjNNoeJc1WTYg5yBNVyFD137RM8DnYMh8vjxU3Y",
  "key12": "3gcK4hXFfsu5Wjewh3CGoePPSKQwrbTwda2esqhcxN36ppd52oTMVaL3f1sB3rpBHNcLKnS71WQxFsyttTHTknTD",
  "key13": "KYwZZKjrR2z7JUkZYrntBH7pPER2wSoydqx1mHfzqNb7QRNdYE9SL6apFg4C5vHUYBifap1XkyQ2d463xhQEijF",
  "key14": "4Wqhh8GrXjfWgSMaNKTY4dGiuqkVW2toTEQfo8fnXMjzBMn8c8HgfsVD3guWbapeurVmJrMF8S9WkVQXJK5LeFJU",
  "key15": "hqod59ipoUqT1jJcaKpvAYDsytrVCR8z4E6Ec4HX1ip2SU7RHGeuffMaUoP6KtqjNb1gHU3aUpbhCASrYx7nSGJ",
  "key16": "35cggYjMKn1tG3w9ZpMhUEDf7GtKwNQWZQADZhEDFomWz7kdx1NXCUbtbJm7zyazTUp1DQvHYxmndK9CPeUAdixi",
  "key17": "4mt8ejSrifazG14YdWdXjc7juXnSy6RD5fB9Q3TJCLnRzzLvkXCgC6AwNXRJUfrHqWHGhPSsxTLxAPAEAruKDkXy",
  "key18": "2heDKxACwpNXVbxHzjEFeweDFLj9jRhA67c7rJRmP4R767P4bzwgfYnYXbSTZC5EEEPzLs8N9KsvdmE5sk7iDB4E",
  "key19": "3K9Tih1h5XBm8xWTbDX5uFD6Mf7sXJvxLfnrKLsgVfQ1uCJAfgPC8E8j13byk5SioQQXhycJ46xX15HyD8rezKmB",
  "key20": "4ZNur3W4zXQxP7WnNprmNgL7NzPfoGcr2ixSAxxzwPoufJPDaoE5GWcgb1kxbKHEHwe9HtLYtVLgXzUg7oNEcFnY",
  "key21": "2i96j6gsRTAN27eYkRZKLN5Sg2CxenTExjDdmNSoP8PTEyKc4hwkB5T3fTN56wwdtEuZv3yZGMqTYSXqWgquYBUq",
  "key22": "3Mdptp5XUboXzJ4wz53zGu1Ct1DoGN9Kn9GFuKbaTuKJi9u3Jbg7PYbHpt4ntaaotVQ21Kr9FtjuEvdBG6e8pAsc",
  "key23": "heLWDUp2YuDaTpRViReVU5e4kfsGJaCy3JHkDGj31eAadKeviN62cUMpkMEfkk5qH3pG3ank2yzfFffTTKLgx1e",
  "key24": "435HA1KBwoNYAqToM2ZN97dzgsmZyCahcAMP99RnMZwcyVCjXgUiE8zaJ8jWibv9Yf5W1GJF7MZZ1S8ahbs5aPpg",
  "key25": "4279roopkWo3831WLuN5oFrWkTnRGm2nSRZxPuXugcRFyXasvFom5RBUMNsqBGdKGqZrPXD1xgJ5dXQ5kQcRmXXH",
  "key26": "5eHab8e4Xk1R6isBTdzTtxrmEevjKDzWgrpENSVgPFa8pTe4ncXkpCQNqJiKE4MG3c66eUc8rQPEpyuXk7xyx3g2",
  "key27": "5rGPdrAz8p2nx6JY39Jed42zM4EPhpioYktrh2QVFbBUov2zKWz68QgV6FrYcM68fSd45tDgoULJwHK6cq2Em77K",
  "key28": "3uYYwecAaBv8SjoGYebhSRhiDhyCbGdwiTYCrXWXkrCdRMEZe5CnQwVgiiq32R9fMwhB1WxyRVKRKHTWxAu18UuB",
  "key29": "2VrVZ1J7hCTFrgXWkRpcTY661ZzMADZJawxstzz4KUzzSXa8vyLTVnff9F1NRY8yfQ5h6TzHbS9sjG1HAT9WpK5q",
  "key30": "5pP5REfdNJRa2US6F295NUYpGkyxTJFFgqotM8QN6t7kzqQ3TFZAzFw14vVeU9n8TdGbNxYCMfDAv7UnE2trg1M4",
  "key31": "5Cc3EmrDukoZerbrGx2ShMhoC2EfZUTFdgCEeGfN5Sym8K6RD847T943yCxMHo2Qw451FvApBuR4G3qHEGy9uAtP",
  "key32": "3gb133Y7SnKtK1oxMjB4EtqLimQXGoaG75LodfqXJTxJdBjcGSw4xwJHnBMb857tmoqWiNUgYQNzBjWHc856R1fb",
  "key33": "4i1PBhnNrb98h1yQD4jVKBGPBysUBizvKGgfvstjLssa1VPDxk1jChFpGDq8wNqdqRrC7Pwb1SPS1ySE2YTAVMSa",
  "key34": "UDA3g1XQe7ZGedAVmNWVFZVUcRENex9Cbio1UhMR62FMqL6aB6DDE2hpm814bHnDhbvySHkXs27PGqhnBPywWLR",
  "key35": "3wdvDDNBipX29z7sEf4nhwsWvBz7hVWmUumvkx2QWJQVHZHsNzKPkb9xLopqhZWTE5W2sn32oU6c19GgSPrUeCYY"
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
