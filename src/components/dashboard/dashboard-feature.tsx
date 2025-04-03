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
    "KcSEVQCsPGpAiZXj2NCs7e4UvE4k3hhpgrSGkDaf444Uk8HjzS8mkvfarnreYEyEkYXcpzYHRHuzumdSQuAhRpj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XrFmvNwFJDkyQC3RxLPSu6LDnsbMFNJo1rxidtqUupQ98Hj1GefLSUuHwaRCWM1EUuxEV2N7ZFgxsAkWwdSWTBD",
  "key1": "4qLSQixMzx53gUmPHE7biUbMPZnU9XwJKshaAENCHWntH33L54KyMsZAPagj3WkQ1NP5oen2udmtSDfBmviLZSxb",
  "key2": "5YbGwLkqKhWNykvaUpCJCXNNEv2Zp3pN37dtzUK3UX1P5agVVHVZSFysBLXNmVsUzrKK8APyFX6e1mYs2VJt9vQc",
  "key3": "4STKzi9zsCRHgt3F34UkPaSNbQ8UBeQMfyYhEkSkD6rviwj8N7YngTTcv1pPavsbYXaNLogHeiE5HRJkTFnTqNDo",
  "key4": "38VkcAyPWSxbojqtFMeqCfzqd76JZkVrh3HEALEUthveJNez91q8dcCYRyi9CtVawMFBGAnoGBPZu7TuHLEpLv6B",
  "key5": "K5FcEjrESwNgqdw4TMpGnPM8nFPgLTVjrth5CgnnLbr57ojnxLg2zqJsp9hYhRVmUyu4rc77bzQWWcfG6tNkQHr",
  "key6": "5dtB8UJaVXycVnW4vs59de5ypzLUdYDKGFtEpGhgz4FZo6GaHM6ho2yY35Psh4BU9n574JHHwLav2tsvtXWNXQFQ",
  "key7": "4pmomfLAfCZcRKNzpzqGLeFCeStbPYyk59f1APpW4qXv2FW2jAVZvq2eXhrRVsHi4e47f4jzhyv7X1NjAbWGA73p",
  "key8": "3FVmhD9achJo78ZkSfh2zGxbUmUXMAy4uZNWAtxAhZCcsbJDWSMAFQYVTDq4jHzXFYEPJUF9XSkoJtiZ7EEADGLS",
  "key9": "3PtmSYAe9UnGcSExhKcc5GDzSjDbxoC1WcPFBA5hUriLCp2stfFFcQbH3dz2bZ8rypMQWJPmbe7dqpyyq8bjzNW5",
  "key10": "3iDSnRefyj96EjBCgc3TYGpRFUop3YsVKdDJqCDAwsXFdoVLmRPoTPjuAMm3jiGiRRkVidTft7RrsMP7KAtEygMN",
  "key11": "3tfshFmdTPhoMmGxuftjzJnmWgBYPg9YSKXy8SyWL6h8WMhrPb1Bqy7H2zgdrUufPRzPyeUnFUWWCUxzKkPJubYM",
  "key12": "5Zv8cd5iGM16z5rHSS4SRcqDE5irVPdvuSvgfEVURh6HyeEGwkaxR8smhTuyeHZgZKe6TWd6Ew7z9s3AGGJ4kFAC",
  "key13": "5VceRYooJnrasV6kE14dYxG6KQ8PpvxtLuqCj517CZsyuA82uSapxfczdXaj4u1A2p3z2RgJ4eskaWukNeMEjfqP",
  "key14": "4NDWJPRhJtecXi4BXu5A6a2hJubZoccMqRcvaw4k2ku8C31SpK9U9P4Xk8Nk5RqG4QeeQKhieB28XbV5g6StynDU",
  "key15": "4FK1AYyFyb1SWsexBJCXfFbr1ZFQoCWLZD9nhjcTHfP7hKZetNMSLN9rw53jSN6rDC1dwaANHMGD9KgesYremuXv",
  "key16": "r3gTdKnuYKdEdB2ErMbABoHdNJV6gsE9UwAjGynhdw1SZZzoUyZ8SCX1ABqLRRF4Yu2haF4kFNgiMRhvYRYMMfU",
  "key17": "5Zj4WjwgbowcGw4i8zp8pzcaHVq9qe9o5AZRh2FiqB9a4qQfzqhWP5BMniFb9ARFvcSEkx3NdSGjrdu6L7syLW3i",
  "key18": "2dhG99QUcMn38KJh6H93Y7BysdDGLAU4ZsCkNoKJPkKecv757JTet64xuVmCRRHx3oxraiWCmZjgRdLBoFr2fcgo",
  "key19": "WDB1eDR4MbXMxGb45fzwWLjeuW4L4aEeEdmkUMTgqaNdBneWGC9kCCxG74ASNNQgPwrbHFzDPf2bvPCwgqH9Ei8",
  "key20": "3gDBvRb8PLnumbmLFQRSc28CXZk6Stb1bNBECWvzMicBsCYNBMpKMJTbGbimK2desydgFaeii7puLVyuXguktWUy",
  "key21": "56MNAvNnMmLJ8TxK9LCsBsUu13AwZANCX1qGQdeemGHTT6umrTTTbtx5XyxfmKjw4FpgYaxmdJK75LpHBjrCcBfa",
  "key22": "42ZPDaWjtbwhxbwaXdergaDYxbyAGRmxXLPo6B7jKRmDRwd8fgeqpEZVDzLbr4KcDLvukBCKgGFexeChZkdh8hwz",
  "key23": "ny5yY9phtjnSomfH18NY7uoo8t8nTeiKFmbrnZUzFKKKBp2ZGMRJsdjNXYzUyS1CsN1wChfWw3a12SPhQv1mY74",
  "key24": "4LRx5c9sCEjTaufFYHWxugjgbqRR9GVFks6EQ8AJYfjrqzPfihxQhmYBs1SLDtVuDhatG8AHCo28k2KqsQnjaqwx",
  "key25": "3jQQumzRLtDvE5TGmVFAvs8oapwBVrtYLGR7enjFufX1ZN2aVua6MDgyfFsxJ8g9nXyXxNRrSWw8D5trAv7DFJPR",
  "key26": "1jx8RaRg4yJLjPxDwFPnS1QjjCjD72guPzKDxXSphaxT7fqqSAQQgwMRny7qBm968jRP8wAE9L2iMopkpNbEL25",
  "key27": "5vRHucu9RcAeohEuyTnDhTMFguhft5H4mS6m2Pk34p7MkhKbWHbrBvqxgywVgZqhdEh5dfG7Rhd8t81EvrQ9UH3h",
  "key28": "3faYq9y1LMHwgRhZXNAaST9nsw2b5zxMC1cVSDFm2JW9WqodckPdF317ghMtode6sAxsJ4xg64tdE7LWPu1rjVeQ",
  "key29": "5QJmFXF9dKUddHdyTnn9YresUeRzK3auUaPydGQ8aA6dchRsDU4PjmxLSBnLoqMJeoURbXB8ptd3hbbnocfzU6XZ",
  "key30": "3My9BZygutSMaC3g2uHQPxA8SR3RxJkecdP9xGaMJ3ZBk2L3Hj5QHCV3Bay3x6Mfw5BnJESVN4SuK9EHfqBeqdYC",
  "key31": "mmn26FJZZz6MbfQF4knH3YkR7UaXQv2WCAD4Ku7p5bvChTBehEMcLNSaJrgGTejFfQj1BJyjKeFebs4qFAQLdjE",
  "key32": "zGfgnC6xgeXeCw643uQRPdzvnwboyCpFf6vc3gNPuAAcpLujce5QFrMvZpFhxQgNpaNGJvgGs9nXXuNo8zfXZiC",
  "key33": "3rVe49f5C7bDM2MXiguCyAwmPEHDzEx3QuCaZwkSKZn4zCt57MD7ycxuxneCJ8VxgpuqZG4bxfC6a6aEhR3AmjkS",
  "key34": "3NTvBq27Raoa4ujXYQ9zv8TXdYwfefUtdrCy3VGdrkoJ3idhE1841yTjGwATAXhhdopmujiFJAbrnhbxKboS8GSN",
  "key35": "4rh9BiHec9MqcE3TPhio3SfQe6HJ4wgv5Kg8AwvcmNJ6NGJvW6Stk8Rkx2VgCCnqqVTceqqBHad5UuAczKTZ2FS5",
  "key36": "4nR6KAG6EV5NKHRsdDHr7vDSLRyqQKk3zsPFM5qtM85Kif3gKkLcuTPr8vxRuaTDutmWvZnohowezL6WHXqZJi7X",
  "key37": "426tyVWoH3iEpybF5P1n7JcmRVLGsE59uLta863WewxFyj6ciWjgDT73UZMrUc3o9BrDiREVxQpHThttybxn6w1L",
  "key38": "5KXExhgiczc1NpVoRagCXcjRg68xkqvexq4wChcpTMTcfShmigdtMUr5xFFehSpEg47erkM4Ks26u9RYWjfCvKfz",
  "key39": "3g3cgVGAAX9Gf6V6k4Fqi7eM4MgWaqdS1wqrdYcy2xjeTRTmDQKRE3dZm4AHDmMk9fYdneSzxJEdFUk1CE6oZPKM",
  "key40": "DjP5KQPwFU9jXYZtn1CAvTDXKVT9jSESacwRX9ZYy6T3mNAEqYj16H1sMnXSAF8L88USk9iqFE82LSiBMVBJLP5",
  "key41": "5N2eCx4iZdrhjhoVwpUzkNDE6LGZW8WXWsHw9R8iiBoeasZB5G2PrfrQENerUbskJMqTXgd1cCJqmbCNWibZgcty",
  "key42": "31zCTipDM5X94YLhE6vTogU6tNUpRKidcNbxLSp3VEQs1BLBYJh8mQdmW81YgDZwpD3HgsBY11RwTJVsry69TF2E"
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
