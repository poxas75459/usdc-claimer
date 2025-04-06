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
    "5xdcsjNu2F6CRdMJxzxnaqEHNdkThXnWqke5cKa64gvUvmd7MVaJEt9zf3G5Vc9U1QGXc2K1xXEBdAQFoNAY8DEV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64Sow7atpui3HskupBT6bngf68drx5mkoXCGPRqYeozdCpx4oYvEyoPbCA6jXjZ5Hek3iSmowkAdoJfuHP7L74B8",
  "key1": "2f1pfiEVFbLwdTm2npscb4r36BnS9eRqdyXT5owGxdi6UPhhU4kNDfdQtFN9hWrsYUhvNsQWpyD1Gpz9KpSazdLV",
  "key2": "26fhSmtgaRmaApTBxmgQLUVrrEhxmXujfWam4wKjbcV7ydvWg1jBGad2uBBqZeM5Augnr1fzp8w1VwL6obq437mm",
  "key3": "4G4DyMJSXv4aibJyghuER5KLHuzszHb5hYQozK7YHp6bwub3ArtWh8BAhZZuiFXT4UUS7a3TC4N379Zx7DCZp1i7",
  "key4": "54r4tXut1RjQfQH3B7fByaec8w9iDSG9SN6shHWCVgMhZfWYEcWxoi62KGDwmv8EY7pzeYBJueWmqxJnmU6q63Pw",
  "key5": "5eravhETnnTDPCmRm4LnLc2mUbDQ9zE9ztVugJnfPii6eHJ5BMMGB21mwBGq1mTiMftRiyVX2Fa6Mhmb8aurFe2U",
  "key6": "4TxUTgzgtbbYEathabNY8DaF7wxXSfAyugs3QYpxm5ykuehZTWLpuZfPsDwXF3UjduprHvuy43ZBatuqm13EUmU7",
  "key7": "2AwNasspyJhdv2tk4h1Ner1P28i5JvVKZZP43uz3izmJXHzdkQFZs7jPnCu4mJLnDSWkLAozMDPkN2v3gK93W1NF",
  "key8": "4173rSYWdh2ySSPmX56TT7D7jLq425oRyo7XmbN2Q6KS9qAnT5yXMMrg1Ehe8qZwJrnDfZHWTFgBKH193BxbV7i3",
  "key9": "2cbrxMbWBap62sDg9Tdg5xdPTdHUPM8DxXtDuhmntn4zR7w7gkAt2omhzXb6GvXoQSkAkv4VCfyv5AiGhxpVH4RD",
  "key10": "3HQqHPyZfxgP3r8VQi1fAmwLgF6aRihDQa8dpZescTQw1tG4h2DNq6KGSpQtuU5SEYGM31Kru6jJdbsxcadKyCXg",
  "key11": "4dbpUunwS4WriQSdPidSDzaPsG1QNDyfRjFnFc76Q4jEhkd7PXLFDnTwYgUUPKjCeiGANyU15RsxBUZxkEQgJVFT",
  "key12": "4dhF3NiiH6K7a8eRLQVSzQV73y5AEhe3z4TJeazunaAbPtARR36ocrd5oz3MLvLfjFGbLGj2ovjkJv4xuKVCzVqn",
  "key13": "4gse3XmDBzX13QSigU91X151QvTmSBYkYnUvy326WnwdCCzHicu8Hg28FiXckU83UVvdBVuiQMsKXXjfUqtUqqYt",
  "key14": "yAtqDQpYEwQzr7hBpyTFjmNDRGHuJ2iATYRNHBwtyXVyvgFxKrKkgdKqS47vEdcoTmCw31Rdn4bDHrQhSA6uYNx",
  "key15": "3rZkDDG4Tp3xj84rsjpjX9YkPHBWaVDULCgxJ78axCMz6mitmxxjXEkWCZMcgu6SdUrqLszcRJboWRtXRnJaTBcB",
  "key16": "4G5mnmy2ZPUipXABFe7wzuD5EDyPPUQhwihsZEDc2vpnBM4xN8rZPmj3YeS6XJMCLz8KbE5WUyNNeoBAtpTKBbrv",
  "key17": "2gMUPAZKNmhRAjJcdNMUsxChJTice7WM3bxQ6SfBXeNCJzbR6P81zJ9ZwmHG8F32AfXGhjB7qGandF6qiQhej2yP",
  "key18": "4T2srH9nR7gxgAkYjv8rKr4bQjQ7oqdzDvKWwLhKtwNpuwYxWoiyFjtzVZ3CtLWKL3p5PZvyDM5EEULAsGmmtUuE",
  "key19": "3ghPTQK4ocsx29FqxRVG8jxM3VNN3iweVX7f22Xc74zRKGWi75suJSU9KDrPx6dTc65FeE4SBhSVyPuJxJCjXt3Y",
  "key20": "4e9uWHVRA3e5FJ7gsm65GiaMuqrdvk6MDkEhXL7QcyJe2WGm2Wc6hh9kJpENL9e9TJGcGkAyL5rWeNStZSKDPebS",
  "key21": "2B5GGMNaFTsmo5EYwkYK8hscg3y6viCUdt612URRJvCo5GMBGJp4P7bfGXuG65kbppTFSf63LwkwW6Pkf7iXAgUF",
  "key22": "jRKEenidDTAK9ggEQNZDRuJ2ZhbmLsQ6ng6ww8un8JHsMxQeEgxK3625KCWZyq6UvEk7HburYSfiBHwviUQVQ4r",
  "key23": "27XkHe3fMnbHgcn5UYBu741XQQSBUuv2VcyPt9tNXQ6GDQbekLPigJoVbAGaKq4YMhKAxeL5QD3QeCprJGwwW1LD",
  "key24": "kdMSDvfsjxT2QZWxm7DU4JVzzVmLutjPyRSYgpG1NTs9Hm5mxNUhk5nSYJraY2jTYk2TG8RXreo3CFDRBPPT35o",
  "key25": "4dyzPgBgyA1mrQ7LezkSMvRX4Mp4vcSeVTF7PJKRmbcEF16c6EpeEkoiRs9H8mXRKN8J2T9WRWreJ3yjgJ9YRogm",
  "key26": "2VFmvmvqF534KMNbU2Gv6mtDjotcuryFtzajZG7nHiBWTpRmNULydE2KMLAUPt8SCFbWJRsr3XNVAJWfjjeypyZT",
  "key27": "tQxJg6r7he7FMTe92XgewLSjVrXxwvWuZjdWeHsvNr3w2ezwEj5uQVCesez4uioZBsF6ZxrjmNxwNjX42ZfQd5u",
  "key28": "3zCrCoyJ1KP46xyekNwGyQTZHWV8WZxW7hqeC2b5eU4yvNe7gcQjYEv2CDYB5jUYA8bXpunovpB4M7CCTCGQ5VGJ",
  "key29": "2HRgtsxHfC5y5JQB3raJxaGLtdFjJcLE43Tfd84Qp8qgG6ufQxLGnrti6Lh3fqJgboq7ugnp1jjMwVJJNcUmQ1vG",
  "key30": "4QQ5j2ugn5Yp7MnJAPYXNE2RHj7pynN8astzPhmGjUZZjurm4u2ScTJrDLzntmdPNQJc6vAn87NS5EYbdZu2jUa1",
  "key31": "cS5VRbsHhnJZgUGzsDnT5bknsbBzQPrwpxqBepNQXGYMGLg7fP7zx5DavdMe7DfbFLPjkfoPkuLJJ7m5KSUvFSY",
  "key32": "4Mng88R5Yot3hxFPibBy8eAp8J2cn6VDPijBEZqTXtEet8FPhinTnW1y5RBKYzW7dXNyhownQDcPKYkrKJ8i9Uby",
  "key33": "Bubrazig2v6UDmQaMBuEvJVMjtTR73UtzDy8AGa5DFKwK2Umshc1YBpxnV5jHo6JZLuc583eAAujDW2U7ULHQyQ",
  "key34": "5QJQ93otPkjXov6QqUQpC4qUWuVtFGZKJC3QGY3AhV3gB88QNQfut6KHMfQT2S2Kc7FUwMyudavkibNE1Cc2U3Jq",
  "key35": "MgaHQRw1eif9jekYRB6wGNukBQ6AdRZD7WuzqiqjiSQE3jetR8mdP6RqCi5QVCjt8mUuWbB1yj7hPoJ56asJmy9",
  "key36": "3u9XeZDj6CNQTd2hBexYnnbaMLWm4SuGP79NdwWnQoqbfNDtrVw8caY9BRewZ7rcAq6EAQapZxuCsntg7ivuL4z6",
  "key37": "2H6S4qdR8GGGgG95Ky8vUmVTKGTSxeDd6wnrCyArdMpMRawMPHZa9q2t2YNq3fxg3k6ifa9pGBbdtjWLPWR3BxM3"
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
