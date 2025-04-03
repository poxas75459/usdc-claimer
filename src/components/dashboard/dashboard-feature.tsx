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
    "2zxp3wV5B76fRduis1vekMP6DuhC773wZRf2HMHD5h3LvJhHLonpSX3h8vvioaGKKPSUmgsKgakDabyDUqujttNY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DceY8zo8fw5wopFEY4ruHXUY3vWqzyXXhoq6DHQDFxPTDJTageEbJeB5uDot6YwyHJxajZKWajBp1EuyFZSmLH4",
  "key1": "3qnmRjnCBu71vazBmA69t9wuucg4cReNk8qQawiGMCbmP5wuzxYpvVgXaCL9agQYJqsUq7hNdTp9XALRJhRswYEG",
  "key2": "3HJvWXiPmaeV3jZvr62KdvREPEk8hfsSvc4pDqUwT26HuGEQuThAYvbFoaTUJVDzAgUcN8YAt2mBJ2zujLEorWhK",
  "key3": "4eBMF1EguCKTH3MKeCAftLkF44dQPAEv98298LyoZhz2asoLMrJb8w5vaTpZNdAqu7iXWLAWps6HR6ZozuPikpGy",
  "key4": "4yfWNqNu27xaxCdNAA66as7HzE8uxjbY4n4CJ5xpniE39kGYiDdqRdQTap3UJNc3qpLGKx2Zp2AXv7HTDYNNsTFg",
  "key5": "63SWLn1hH7VCtgefg4u8H82T3KQjcjPoow7uaR7XkTc1FuZgoEmrNuxjk94BTcu784Ai8CEnCfZjSZi317oH5kNx",
  "key6": "4Cqa6ALwYpyRFGAsLrt6XNsCWRS37UT3uPYEgumKLvaEbL6U8JCjTaZrYHZ6oCBtb4Q8dShSYkEzc2tra99E1PiU",
  "key7": "JHNEtD341TUkTZqthtrizoL29P3pLLUDNHePrLEoL1pYx2ftgQ5Qt4YrbCwm4vCcJ4VFhuYrZYW7kShQ4c1bSF6",
  "key8": "4wqiqaiQ9Fd3Cbv2YKQFbURz8arzrVqwgPtzYgAkLEJkft128hpNkinefBg4avGNtuvAJWxVa68WAM9R9CxV8jEB",
  "key9": "4CHSmNUqhgtWueTa2T3E3GSkB7mQ5Nf9KFMPjPjwj4znt6FuLgHRnLfPdBdrVWSgf9hDhDtZnbP73rzrXw8usfyW",
  "key10": "4YSGTzynsfuNhmpspPu8ZrRigzxTrd3TKM67LmNeXAs9muovbtrU8NukQSZ8QeuymiFPNB5XtNvZzD8StN3PCMav",
  "key11": "2BW64nMw7c5yZUH6frXtWeUNeVVp8QPi3p7QfJxz1dSoHZv6rEue2ooxZBX7WGsRohvaywcUyZiCesAt8ACbCCLS",
  "key12": "2sGBzmz6ALQVDi4iY5SHDMUpfV7f9zGhNYULSJv16QC3oEGdPannx3U3VNJyq6FyDifHa8s1dcDXhJkdXnzMHjhJ",
  "key13": "55N3UWrgMnW4h8swvGNreG661ycQAngFkbBPLoswUEsPKnZJbm1s1WgyhTr8uCp6SAH2Pv8sQ28tNZNBfUjggnf",
  "key14": "5fV3XKt1uGKyF2Mx4G71hUiYGWZuic2YFgeaydoez6B8eMZMsHDPbHEKk6gSc5UdXQ2YuZ5SGAGG8TNgTzwu6MXN",
  "key15": "2ppRUec8qb4Vf1bs8eGXeFag4BNEmf8GEmF1V8TFWGFF8M8Sct8LcigDjvCthLexbMWB1hrDWXQUK3HGS3zeYAUv",
  "key16": "49W9LT1K32WKjKmDWNUuWGPfbgCNykzn7pY2s8eVHjkmZco5yMYrFwJSNqLH6RNgSurmStbdpEKFs6orxG9kzLbF",
  "key17": "M4v6EMvMJx2WgcJ6zhjKRT9iK7HKZoMEDinG8hfRXFZy2SGCXsEqkCogsbr8xhUgcU5VwWwZZ3GMeqwXMbD7Ju3",
  "key18": "26x1hqvSeXfd4MRcHJWHGxFMKMYVhLTcpUpNKjsKFNxvpaHwv6vKvA3mnjSvTLnfbmYB2nXD9h6rNiPw9dygVdod",
  "key19": "3py3cLUvSUwRyNkSkNamHANKFPEd1bc2j28Vqp9yCGuEae5srUDJkb99uFherpBhLWtarTDBw3Sm13EJKag3sXPd",
  "key20": "2mengNjd3wj2pswUj389vCpUP2nN72aX2ewrB9rety2gHhzFDJtuX5t4L2KhgoPSZrBMee28dB3zGKVcFntKJzh5",
  "key21": "4DUi2awrJJwCpezP15S5z7MHBDP6jWe7fdxb8KXN7bf3YMetgWWaHdHcSJbWBrQNNciwykb5TGkmipLezBupwqS7",
  "key22": "428D2JB3ETtsTpN557BbU6CeNF5Su3H1KEARES7tUZihFNdyo4Bz5M7FBmMSrCwuK9ViAy9aPWRq1wAQ8C7Dv72G",
  "key23": "2jdSkUm3GTxQWRUjRZ4CxUJNThqbWKmZga82sUFsTmmv5VmzUnMj3QQC5cmTDW8gsyBQfPJPDEgHxQsveqaBVqZv",
  "key24": "3Jc7aCYmqnH9YYEp74v3krrfiNVduFNtkqtnAn87iDZNM6D2jGheKrewxeAnBkThszzfLK3dHQC8mXhrU8D8US97",
  "key25": "mWGeHS7eM7DSjyksUZcw91UaYv7MvqpXuYq1TbYhTBT7CvKw49GbBtpPmVKtFpUba7gWbJRRe8mo4eSJ4wx3oVr",
  "key26": "8WbcdTLy57WoEfSN5psax9Za6JG71pVizY7THDxHfoKCjqXY8tuqMZJ6me3Cn4GdQXhMBkQPQXYeR7t6dt1yRFm",
  "key27": "5yWWqfXaw82mfYG82rTwGhdmCTKMLQPhvgDZZZDNeK7DpAQ15QypT4e5t3XeL3qXXBBB554Ja5kZHgEMwh3EkddW",
  "key28": "LPY1ozr8a9dwwUio5GxaztYkHzw5hL76aWGcsG1LMRmuipJEFap6bBKKU34WxZvpc3pSY7VX4UJGhxnuP2rU1vL",
  "key29": "5xDMdMo2CKhSLTW7gEEqAzucgGzYVnxFoQ5N4wLTF6GFstftMjw3D591uBcPgkw35e3UcqRug8jgMu7z4xXPQAjj",
  "key30": "23115UwyFoueYN7qsKotxDwkT8gQ1F3KDq35unnVmvtujaQKKT54ZgqRS8DYoj4REWSPpsfaQKHogG3mETXE2uav",
  "key31": "2w7mW6dPtKbPcBgpk7ofkdudNDHf6tciktSY4k7yyadajBGBfBERBKoHfg6wbXCsGPqRdsRHm28xd25zCA6UHotz",
  "key32": "B2xCuG1wtrnR5nvom2dyNgbPFpGjt3rxEACuu6jzkCz1Jr1juJNWpe8C15gjhrMwSG9gJWzcwp1yNY1v6rrKAPS",
  "key33": "4YPkkdq3gVnfbinhpvQDcCCe9JXNGDHXEdDVKjhTzHwhWHVL7ux9ejydBv9Z99eKhSRT47rNy2JQoNXkSBGqDzQc",
  "key34": "JGGNVmRUaHyrnwYK5JNBDqnkxnzF5LqfrB7PEnSNSq6egjvCGAEb88dNWXj9K9g8befKe3jbgot6zqjpRGbB6mU",
  "key35": "56YuzHPfyB6vaeiHe5eqXio73p64NmLDNuUkdCeo4Zkm72HthUMp9sFZL4n8ok2bKTXKRsrbojjBknoxFySPAwKY",
  "key36": "4813KDdUbDYc8sXwa7z1G6MNv9HVUtK2TJxnq4ELJDWyfiqNHonYmoxzdcjz9WVBpBJxn9ydpRDae2eADP9vFoWP",
  "key37": "4irTjCPvXdDnXHf2XZLp8HYXzHAiywYv5prDqbSeKP2ugHXuh15seGWM81R1v13h8YGzitD3Ns3q8AS4Vkjdjp3q",
  "key38": "4TescLjxtGULc4aM9UdpZF7KeB436WNaqvmWysQkQi4iaaPnqXKCmZqwosdRVffR3wRDKxdyNRyFKkjZYW5XVuvK"
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
