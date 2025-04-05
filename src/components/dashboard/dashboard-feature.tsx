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
    "4sgVHuQ55hPr1KpFEgb9T7JBcd5Xv1Qm6j2xbhVLozxJm2pyGPyM6FkRy4945k8jLRYK8FV159akNt7B7PFNodS1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42mLJJJ4tFAGmkDBBm4Uo7xFLvcUTaBscWMN6G5YCyfpunXo1NXzsKH4g1GFG8zUbjCB12ydXbbAbKgtMG1r1K5Q",
  "key1": "3yUdjRJd6bZRrmTGT894pFxSvcjrnD2vQtLwsrwDc2QhU17LmrZL2VPH5XHu5HgNvSyqLjTTpdtEGYZ3EkstmCrZ",
  "key2": "5S62ygJVmzzXzFex19YAR2PdV1N87cZQoCFH7yULXupwuoTdrGNGyFzzyvEkt9uSVdgcb2Zupb3ssUprEb7Zoxx8",
  "key3": "2BBvKFSVY8rPyiomCRMPj8gCz57LBaQB18zi6zm4uswucSr15SY64pbhzwbTbDUiHRo5t5pGNi1KaNM1WayXJkhX",
  "key4": "51MntzrE22J4kor3AD6UDFtNEs5j65s7FHMqbHq98oZVjxyaiU5na6Dxw743yixRuNg6KBP1286re9VMGuNfayrJ",
  "key5": "VQtkMeYVg9xaKtw2K4JGS1K4tjTFnbASdZGzVuB14KmFq2EMiJxaedMLoJ3xKRwV69Wn5iLqc7Z74NfDSqHB4RD",
  "key6": "7d83RqmP7zRBBDCHY7jLetgzg9y1B1otUyATQUBhBSggkWTQhbJKDoGBeqG9jUSfaWa9uVmqCXm772YcyEySmEU",
  "key7": "3mq3a3SuB9wcKJYQo4DY8AKD3Yejfzv8JUPi8GXv7JyZY2BaGbc4bHgqhRf4PmVYupCeDevk2wvtp6pudZ18cA7S",
  "key8": "2XHRvsutDwMAVTnVHc7tNew1WVH9E6vqPzUxZeVMMdsrQBwnbwiNY4FRKr4r7qPHBdtRpEFDVXxYvehHUoH7yuap",
  "key9": "dSmsh78EBeZygBAtM9A2WXwTBzASTdm15AgxfPenszVNvb9poVLRE7t1Ri5PiTaLasuQLBwh9yjsZAbJoF3oFrP",
  "key10": "2VLaE659WXTdu37XgqBdgMgJVivg17cJezPm93rgB7H2nnbshAaLaPaQ5dy6pgEUr2z66qzWbsAq9bNmfZUAdUNK",
  "key11": "4AsRE5sTw4iigPJsxHgcRBipcVAx1fQxA3V9Z4xYfTCJjh6uYQxDNpkCuFTyJSAbiTBDB9iJbYg5KZR32obCzma7",
  "key12": "2sz1vDYjj8L77v28KzwT5HfdvL7RNJ4Tzyxp9tYcJLiPJx1oZKVmHotq8YaiZUA5pMf3rjySGJL3bbrcbiWcc3yA",
  "key13": "GTd6gUuUFL98UYRDs9k3iBQzbbFVJsGebkG3FKoAwPCRa6QYmLGZstEL6H4h96UKmJ1Fn1G1t2UM7JfWh9qzH6K",
  "key14": "3s9AAFTQy9hh7UreUbNkFYVgrgV9MXxfTwzQ9BF72xLjAz9khkHzXSB8SxWqhx9xn32Dwds4qHGH52EWiqrqBAH9",
  "key15": "5RycX3fNF8pYYA4NiRQiL99giUho5EXyP3HDsKa2BZkGqCGY3rKESgpk3ckfGHUN831nZ28Ec594oFcHQVW1L8Kk",
  "key16": "41iKD7Fy9U7z96aUv7Gku6anPjuRXchtqL6JC1fM8zkgw2WoKQ53wJ1UtKbbNTwjGLLznPtRC7AjFLXyc3DhcG3s",
  "key17": "2BFVVDUvj5ZqyeoUpbXoAt299zcSD7oEkSB33QFGds3iXC4dRREe9SfUHpKyRbjHWN4ASJuP2vPfpCZ8boiQueqd",
  "key18": "5TdENDZ5EzioWPQ38FtpsbvmU1qJ69UxTDFnnseYEp4pF3hwfGhL7paSm7vL3DU3VmtZT37juG9xjxayZzDGNkrb",
  "key19": "8D9aukYpn3LpWRZgzoiEoynSa6uo1Uu5mgzXivAiMpgQLQtVFUCfbB2MhCNCnJfu6nmcuNgrJ8AVAtJRMTigC8G",
  "key20": "2DABgBSZCes7y4SP49oDnbygeCzrZ99vdQmWeRpmxPHeioybVpaq9VMu41GNnXmcNwRD8BDLmaah8wFWG8YuSaSP",
  "key21": "21R1xAax6zPoN7x7aTFZ2zMXxy8eyq2hd6f3yjnQRt3kFC8vH5fxNXRLF7hEqrbPvWuRU1nv6WxQUrZ4DLn2kaBc",
  "key22": "xourbqhMTj7gYR8zT6SFBQuDiLrWKYvgn64WzWhxyExfsXgcHAm5dZNFvurcQMtPuNziN7pnPawsHFdCFpKqNmU",
  "key23": "4iEkd2KGSTA6gtewRR4KX7xufaBMn1MZQ7mWcsnDX5PqJY8jw1LMsV3iwiuPJ8BuVm6bUzkH2rgjPBzvyGKKvcP1",
  "key24": "EgzChVFU1QVczoqed8XpBJSWoxVScxB757jun3DEmxaQuW9TrKTaRbSKFGJgJuP4nzWtYk4fiSp3Yeu7CpMVppS",
  "key25": "jsAwFwQk5kZoUe7QssWn8b8WYcvZ9qM6NKNDavoQYCYtbuaQRLHuUnpLjs9SW62ySXFqt4xh3V1U1THgZMXmC95",
  "key26": "3p8bDgGyo2AX7ybi7pAJifcrBpkRvFQTAEkJtUYGdw8bKue6zHtDjSqPtQMH4Aj6urgeYNvpeR1GiGDjaARdUa9n",
  "key27": "5ez4GVFgieJGKv8hkBEGeZ3DpQx9b7sUJGEetombBH6n9p9ieggRSPkNaSQKbyjHyvLtRpEvJqSsuWdesfr2F2iT",
  "key28": "43avuZnVua7ST4ASGj2no3aJLU2robLmztk2goe87oV2YRiKHmmuUjP5985KrbvfxHffiQJZk3x9dMT2tPMxBiCB",
  "key29": "2LB9LYLSsRN12y7HdPcc4EE9ihyE3SVoTBau1v6ZjBAjJd5bjp42yd2VTgsg5MYBKhf4fvSs7grgHutyTvd7gJn9",
  "key30": "5y1s1ggCcy3NEMbWYcXxiKDspvoTr86nqRJQ6sQ2SBnr3ghwfUm1LBcyjEZ5dBbsD9qRnJpgrudE69S4xdQm26nk",
  "key31": "xdQD8x3r6yMxBuhKEoqZZPBCaA5j49k1f5529Dy1mjCVtehzcNqyuZPfbHbPgazAKinMy24eQPbKSy4kqQHME2i",
  "key32": "5QmVe6s7qMem5n5qtb3tJSbALtTmT1VXGCcnKBNwH6j7BGo5vj382tCnUBxWgzv5GoXcqp6Z7oH5yHpH29faXjT2",
  "key33": "2FSEyziGx2rDq58esWFMqZ3oquRsy2zYViKetogMpR47NXytqSJWwUnMzE27CaZerRmLJyuukkSmQLJD7sm97wB9",
  "key34": "3g1ytqvyPdvfUxW4NLDsfCVsf8PBM2wSva6NothfRQ1RPBM1Bq4SaiQdSZFBuAujacXJBWSVsSYXjp3vcyyFRKhz",
  "key35": "5v8kJgF4BoHzspv8ECR9QgqQtpfTUqsSyGs7SBLML9eFgHunJUcGSgv6Wb5ayQK9vbGRTNsB98X5icSMbMD2Njxi",
  "key36": "66xaVJF5PgzCueCZ6LDPQaEF1MUkR3bHMiRUrqX1yqLgs3ojCcLF7dfeY4RSWvgSdyovDC7kcTxe5rQvCMtLwXt5",
  "key37": "2azwSon6vGrWYmgje2ZPWb4o9sVoxfiWRYnn79MkXKZAmybqQw29FADnJMZoAwqNB5ztMCZMmncd9fEpFuDAB6aL",
  "key38": "3imLYgod2WyMHmVgsYh48dxcp5tgLuZCrXFUpErMtR9fVFGckYuMVy6UDY6q2SEZ3NVKfnbi374oN5shfN5bBNGL",
  "key39": "67YgAzoDnk95GzgEaK791LRHXL5Tb1wGV8nGrJ6vocMFp5w3W3U17PPbxY3bLdbMDYk9q7buReHRGUbmzEwDTHiC",
  "key40": "26cChSzVx9LSN1kx6HodPQFmZrtVLmXP8CoGZQtfFe6wjnypiTHdw8E4wkBzSV6KZsb3pUrb3wYWiNKdBcQZAXab",
  "key41": "2HtUY7SL8Bxb7qqkFD39pWGHdw1aGwdedJu5jggZD2m3qHo4xZtez3BP5h2CFYR6pkiZsk6em1NMggnLBVQ3sPAp",
  "key42": "3WY8rWoF8NdLD87PLQSkaEw5gNhnc813YgBM9j9mLVZeqqxC8sXm6yYkngJZg8SgGufzY8cnD3fVpA21Figd4u5k",
  "key43": "4qPMKYn5srGZfB4cEmR31koyS2LQj86rBgWciPNcVPaicaB9vRFykURTXoR6bzhUKdnc3oV9KB5ZytnHerspUvTS",
  "key44": "3PEk7y3n8o74KAWV9ZKDzXnb8TxHJfppHiyWH5HVmwZFUtf6XGpBXBjLQq1tC8ukwCWenLFR6vCKJyAVrt9WWLNY",
  "key45": "2kL4yF5RCF5cAnTwD1MbCYk9tbptpZwRahAc3v9xNLdv2iGcDC38W6gTBdkQ344xBSWobHbFKh8pWPixBRLEJSPR",
  "key46": "3pbrUv7rH8kkEoXLJTuiQdxVr8bGk74BL57KXzTSN6BY3LXn7Hf3thH1VsjkJ4mYwGQV53Y4ifGm5ztkKRZE6RRu"
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
