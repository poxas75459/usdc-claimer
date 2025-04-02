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
    "JeUvFrreCfSmiLXDMhhFhTgprKTq9v2YfYq6hbGVc8oF7FVGB3xHCAsLsewZMHUtka89X5u7c84SbEmcdCQJwgQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38gjMVuoNd7BukiVBa6iPiJinXdURwc96dbT2aCc1Aq5dX6UQWqirtKftUn3tRsiJLH1Kstm9PUHo5CGpEYuhNVs",
  "key1": "2ehNg3uWuatUkZQjEKfANojxJG7evfcFzEi1CgNbLdmouuW2jwQypLLcCQhmayaVkUPGytyAbQfUDH8JZkPHJDaN",
  "key2": "5Xtju7mVP9esDmySat1KwGCZTY55NLZtjH4pGAj45kgGKQwKgyLs1Ytkw36JUkw5tvn4hKZBAtXRaotdmjXBxp6M",
  "key3": "fwhQSEEPJUsR6EKQwcVHfRkzTUtNqbTxKwFkYRoLVWB1F9grojjRxW7ugWAZpU6noT2rX1TqVnWLsbJkGgRouuh",
  "key4": "3wK7jCuS23nHJWRKxGkkDJFHkFBkjvFFSERKCKJ3oXG2msWr4C9Ayd4ZweGtHVkaKtR5BThjy2LSZNM51kCi3Rpe",
  "key5": "3sJjWVp7zowi37o48wXFpz9mt1JVo1jkqyuqQ7KazHnc8D2dmUvph7FuGGof1Xd7ZK3daP7Xj7kJDgjvKaQP3Jf2",
  "key6": "84p3fx745F1hDif5t614pKor7RFWqLKMbSTCd7C7i5JyAC2MMpbbJZAcZPCBzUBkrV8KRszBf3ffbiwH9z4Rt3Q",
  "key7": "wZFUHmrB6G7eTQ9C4KkM2d9NKiY6GQ4L4LSnu4MGqNWpMBRoHSgjGzfavL6zVfTnRJ181AVNaFjnNkKK1i8bdw3",
  "key8": "TkRBHWYXiDyDXpeANXy8DpHq1y92G1rH7NVbr753bchojWT4Wuk7d4N7agHLp76CrZkqLZ2ektP6uxAncQobuXK",
  "key9": "51kTnGDAfhvCAqB8hGUqkdWzEBH4kWG6zzdDiQt5zcmKWsEae5qb4TyNDS1nJove5Js2f6NQkm699LWb9Enytm9b",
  "key10": "5sdyY3p91x7p7EJLnF2w62Rds8M121fr5iEVEZkZWrncHRyCz9TVN6ExkwbYzttA7XN7LYzSfYNRz3rYkt8oMKLJ",
  "key11": "U9waSAkmHnebjcDhsCovA8W8LjuMLwsHuB4sX4Cn2mWXurm5H69HQNDUhmsCBV9HGbY5hnQQBraM4FydBSq3QGv",
  "key12": "4pkcs4ijtFuS3gLrRMXc5bV8fEpqbr1pidQB76KiECJU19gbtEMvo4cL3dx242nEbXwEpEvTv51pwEskAoQvnY2s",
  "key13": "5huhEZFKkqLHYCeTA3UuNLCRNHVjU61thWwcMH6rxgLEcTCfHg4JjbeiEFDdmvTeBRLYVmSbwGGCoGQmEYxydrSr",
  "key14": "2DszNvUnmBjEBvHqBVXCjAuu4yNTg5eyhgY8bJyUMzmp11KW86c6quwBsq6RupJoxWe8Pt28AAjjp3pBsBSHAe6b",
  "key15": "4rYNd8pZSk4rhDPGLa8ui4DPiX14QSFPXk7Wc6QFxaj5wdVm1rLXEpjcudJr3GBLSBbokRZoHqNogoqjWdjNhqk2",
  "key16": "56FSfM2cUMHG668LYN71Cb6hF6Evcqrk8yb9phLXjUtvDwfmCeZcjrJh3SXc1xdCT9LFMR1fDtf45c7rTyocLDLe",
  "key17": "4Ak4kz4ZTVjY7zF7uZJqFm5gjKiSptXGkpUSq1jeS3YF8xNtrpwpG3Ki8A4wAnv2YGzu1zYFx9HtJtiYLMQSfvnS",
  "key18": "4xYJ4s9HSgK6dafc4JHA7QrWYHetnbDjA4C5xJ6Aex5voxskX77goDEyjQgAD9zzW2VZb1ysYmgWn88beNze7na2",
  "key19": "4nWxgvSZh1xmodKuzQHvDrp3XMr9rcHaChg6ANQNFqBc6rVFCm9qaxnKhpZgY5ydhB45k1kXAS5CLm9T28Z7bNgv",
  "key20": "4CJ6w8qGom41chZJrxT3g8e6nC57qVXohaCDFJefMs8vkCbX5H2We3CCLzbGd8skjHULqTuhUnhWCNeHB1pCEi4x",
  "key21": "37o12cZ7VpVjQD3UCS7o4U9GK4reNxWsB6wrzxeoaUtGgnnFVdgeS6n2AbVknCuqw3ogx2LhSr5pUTCuE8Jp3bFB",
  "key22": "4qS3gWL9nVip5M1j9R7CGC6zdYPVwFbJLxsYeAaZ8uAQDdMJjp6LeBihab59KyZ7XzL5SQ1Kx3JATJJgj7eCfcxR",
  "key23": "5GadaTSEt3WxqwgiCbhPJq9xcr919L2QhjFY6wP2QyLCEXb8kosJp6VQyYTznhQuahuwp6kPKNUwKY7hVn5hDkqF",
  "key24": "2DnZeeCuxPq465ENnyCYi2hjGXpAJGK1EBGiZ5LLon3FEASWDQtzQsEZf6x94ovFhchWdrbobaGVAVxKySeRL7iX",
  "key25": "4GX1ZsuYgaqu581rYPt2nmQ8RYb4AtjMMQ6Uo6gSp1nzm6qfciAEQyPVzwbxme3ZiHpxqwjY8WDouTeTwwgYtssQ",
  "key26": "UCkJkoQrzAmeTm5jgW5NFoQx8N584NPim33YdbM65pokKX1K3GdU4A7LMVcKB3NJBZeBkQduXM48bwjRvs7qEbM",
  "key27": "4drpi19wmtnQjZa4iFAwz5PscehkHTtkMdPcVeyeUhATELvSAUbgqcYrK5fgUiVZyjtEnJwfgsgQXV8jtWvHeSH8",
  "key28": "3DQJja6Dh83jfYdy6Fe16TxCMgdwmHHaRaMUaKE79ToiGK1aCGmSRKYFweBARQCSEMLghxk8obX8dmdhNVEVAUg8",
  "key29": "41ZguA9m8J2XjZNZZnRYg5e8hNF6mPgEMFxGgtxdUmnJXt8YmYboEqhPWpDgvvxwnWJgjmEYCUCX8gfvTWCJyxjK",
  "key30": "2s75nWzLPRUD56QFoYwTHnM4enho4aboNzCpdRArALmFCetwPS4c5TZvDuXi1KJRroCi5ivHob4WZFXcKM2R9HWP",
  "key31": "598RoGfpApsawkpqvcde85XiBZCttov7VcjBebGXXiQZnrz63K3Xfa4RwB3c2zgkhPyEBtB4dF2QFuzPV7sQZxdR",
  "key32": "4TFR8MG4bhNCyDjiVX4b25our7vs5hBMd4HMY69fbiFnLVsGngAAvKgEKxZbTuwRWLKCwUv28wh2qEe55VC1S3mZ",
  "key33": "4zKfkUzjWsxR2NPABBXrVv6HfJdXJ2jLsw32xSHsVRiMhGs8JSWEsMTur8UYzo4FFq2hAmveqDdyNQaogm21pday",
  "key34": "4ddxCeoFDVWS8dzvVjhmpGFoZH99XEqj84ZMfDjbizXKufxZ3wXKfvVtmZ88Ginicxhb8Yz8DdkHnLZrMk6Rg2Bz",
  "key35": "3T7UxXtLY5Pe3vVem7ggyi3GjCqsLDvXryDJgyNwamrNxwMiUcwJmkff4hPEffh2vR2QWhKup17nia4t8djZXEPD",
  "key36": "3yXgk5Ac7zNMAduQVXAXAW3HxxKRQUMWiPagRRGWCxCrFaJ7mhrfHwtsGHdkervLkfLXqznxAhsrZbsbxDvskVFb"
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
