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
    "VxCBcp4sgY9DY3dPcVSYfkdE828fjhrvNTCdLxkf9684LFpD62cPiAUuUPZJn6fcts6NTNwiD99Qt61NpbRX5Sn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZCVrNdrnR88XsbNjsRRLgxBac4TDENkqJQNUaQZ7QR4UUYv17LJSyzAERc7jR9i8hRMEU526nZN2ThWCWsntFPZ",
  "key1": "3KqSMyymwB7xQ78AfmxJBfzVLf88eWQ35tYXZLYrBGouZ5WNCHw4qxsfLDvqqi2Xw1gkWC6QzGCSW9yfK3JmVgRC",
  "key2": "48nJN93K8xb3CBfcHcgSmVw9FeST3tnuuaNTpExJkUEVhD8Ro9BpBA3SWnpahKCxMrdPo4gqiGWtYETB6LGWpQ2A",
  "key3": "3kessMReKMcNyjEKVv9uSVouB8A6v2LtBf8E7FbhoRkeDdFceUqzZ9URDdRzEGgTLk7K5X5tstf2G3wcNGBD7jVW",
  "key4": "5TRvQsJcRKWiTEbLpCvBbTiwTXBwLNxazRGar8LEcEYNRB87YVbSMLDATAUpgujwCMnCjvPz8UiRZdhMxPtE8cM2",
  "key5": "5tgpmxNcZmJBNruiAmmYM5rXvVfXWNzV6xPSip7MjhWGBeYV89J62shsbZaNR2LZbAgvfonYxwAvoBsfobeUSuW3",
  "key6": "A2SR2W3NcqVuiXVYCDGUunWtz4V7MBswLxDuTN8ni3knUA31UH1UxJHCoEtB82sC5T9uBvW6ZAoF4Kzo9kfbH7H",
  "key7": "5EusfAt2e2KMkid3grgssBs2jff3XHeJvNaRHPpFahHAsEgnyZFhgQyM1yH5hiqUQYhGWpPYAJyoW3UryB57xHGv",
  "key8": "4e4hJ6jxvh5bsajtMn9DWYgS5LYMxpkaepBrb4V8E6HPBUNKqKDmaZN2L5BicCJYXyHrfCQqn8XEgLCvPBrcwvhk",
  "key9": "tDnU44ADHDkn58WdrfpaFqP7osqQAoaQvkfCVBGQiLRzRKW6CjHNFVDmufs88yXtBunz6JxB7ZoE2nHASx2L3Bj",
  "key10": "3zBAQ1VDQqUAsAzYew6mx9g6zbT8bFJg8FtUfQQGjoscFCKgBY4yC3o76hSB7bnsbkhtH6s541rjXm8ub6HkG8BQ",
  "key11": "3ewgbD3VwC7ampPXL5M1a4Fa541N28cFGhVikSZPeGgUXsM93YNFMBkGdgMhw2P2C4sAmFH9rdA8dFg8D8jqntAe",
  "key12": "4wP8xQgFbZqMdHXZ7cKDnKECzNTZ1uQXsJ6CHknvhEqYSsJS8wNC8DSpsMyq29XZpJwFemHKbePoaqaZzqMBKTY8",
  "key13": "2Typ97jAv7MkS4L56ktjfh7VKeumALupdpGTV3H1smacU9t2E4nFP7ndX5e96aGkWMpereHJT4pzowgVr9CLU3PB",
  "key14": "4bUbT686F3Fku89soMkT7kH1ZcKhXsbzYvkCxfhwxZEMiFEnDd9bEqYHidZo7oZjEtFRKjMNCrR7SiDdcpfG4AQf",
  "key15": "2Gba7csmDp24XF9zSTypouGEvQeZa7QnvNS5u8B5qUpMkahpChU9maGeD83vFgsXugf4L6Fr1X9nUxpCC4n54bag",
  "key16": "4VF7GSdPhotLNsAfp1SkfdTH9qA83DYWWCoN8Qa5kSrJGy1UrGA9Bq9uprvugJPoYJSpxUpGA4KZMKgKH3zpyEmp",
  "key17": "fX7siqZ8cmnAHkqmixBZpRCEYFBKPXLt3vnzx7GFV42mbrVjRc9Fyi2Z8nBSegA9U8QV5rSfYeR6nQZmpen9k4R",
  "key18": "36DLb8DdAyEswuAq9fLJkwshUqSgTV47oo3CHjY9y71baLhCKTUa2rRwvhrCoxpootwPY7L6SxmgWCdkdrhbmTAh",
  "key19": "cEC9ARSVaVMFHQapPNBeCfCkE7VahVQdnZ5T1Wd1XYNSnezLYDaurWinqgfSvikLtfYKw3zBzLjXWRnLn6cf7y6",
  "key20": "2rkzomSnMGNCLz5bUGYQ4T4bM8YevVRprJLhaKRgr78JHv8XwxR5z5sJaiMivaL6KQ85UxveJwcMWH6yCPjbdbtM",
  "key21": "63zG6XnsbuMU7gbnLniFyL6RXbhw41ayhXNWmm23zYxn2KHQx5dexMwp53quf56mou2Sb3vx9EtiPCqAPbyVV9iu",
  "key22": "454uUq1kJzvx64YypNx2HzgwZmFQjeDfBTCNnafeFrNmKhoTwUZh2mYqSHMC2dyZA7Pt8aPmM3npBzd4cS7c12yU",
  "key23": "3PY8RmoTrd5XbJQN4L7qXhZnm5zkf6sMyGTq7zwhzdbrhqMtKCyAL2cwnsu9SHSbXpgSgimouekv9DPs5XFyjvoU",
  "key24": "5iexNR97o4fQxnfuWNKDcFqDycx64A8R9viGKxhQv5uGaaUxxkS2hgaBsMogj6WeaY7Yv2whyjbKvgDm81k31VKn",
  "key25": "5FDEo6J45K5orq5ac9B2yg9Pa9J5voHSpbdF9DvmAS3urAmYQ1Dx5XHCuoYudnc7YYfjsV6G4bdi2DWHiLWNhj6Y",
  "key26": "v9tA7mXktmWzq2XyfMKzd8vSwwuP6qW2oY38AdEcPkscoYqggAVDFWJAoM2ouzBaUe3ZhY34zAn4vUvYvBoc3G3",
  "key27": "2fNnPVd87pwRZsYwfLpnRBsqzM3z9n4CkL5zJS9V3VDkKjhMpK6jXSWjZiRG2i4yZSawsKiNRSKv5YGeAyPGtCSQ",
  "key28": "5eAjZYaSJJsGWopp4s8pjAXw6WXxjxtKQqBWSYArFkFnwrxjnVpab9MfHE7w286u1pqm1S67kST36Ao5sEj7GHuh",
  "key29": "2eFcfPASagXHg93q6vcUpYzVFSrookLN6oCbwH2Jcqd2eaC7pE2aLHPDasV93zzjK74vUPu8wdzTDAAFKku1A7uN",
  "key30": "3Q8226iVtgxB9K5mE4RxerU1MeMY3R6EQTYt3J4nCiuKMpktDgpSKgbqSXMjdRj7BCnpF9LFAuGmb1GPjXKDQzgX",
  "key31": "4p4Zv4f8dUgrgDv8TkxtjJpZemniwxzW7nN6vfaF6rte49vmZG7QBDRmWu9mHRUshDwMDhrcNnefs721jjuqby4Q",
  "key32": "4whNv2Uu2ddX2bcyY6zKfxzuzRL6LXTNuBkD3ax6F1W3Q597JZ3hMfesDi7XcQ73uQXGrWBTKYWkpxMm98eceQ52",
  "key33": "51t33W3xWgWddLy1S8jMV7j8GzoZgpvggPFW28ZK2XYVHBN7MprQ9vHHGJbxu3CcEDbkUVkBUoGiE1jYQARmKLCt",
  "key34": "3gE5jQcpngpeo7wRxWmQFnrEGfyAJDwto9P2Cge4DnirPYzJssT28iNhgzs7kVB3o111adTWPfxR4vaDoT6meeCo",
  "key35": "4CzvVvpSrb1bb87CrhquE3UAgzdPGREmG3gHgsQJSZUrPNkVoAFia7UQ88LM86WDStHqtyZ5Cnytw4ozBxLgodcP",
  "key36": "2oekpquxTpXWAo7okot2AqfYKBFAWQ28Cx1MYUTFs5ui1Yg6A32zi4ReYCLN4pJp9Ka8JS41dzMrXfzxTjMgLD55",
  "key37": "5Gr5nxoUp5nTLJmyhz843hYJAtodt8aBXtnebLoaTSA7N33361iL1c78h8k8gvJUFm9YWnvbRZ6TRgeZMqrgvi7T",
  "key38": "4Vf3wvAAckwUdDddAzQDJDr4m26AEAxnSNrEw95QPeLbrUoRk8mrjApoK2UCxV6YrHeD6YDh2EEacEeYPTFstrRa",
  "key39": "5pCMYKCDDVnn3hwvmKLm3HdxQQ65qhJfbjg49UUA3pLU1s5LWQ4MVKDitzp63yQAeRQyjBXLMyQaNVhfxdqHhNWd"
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
