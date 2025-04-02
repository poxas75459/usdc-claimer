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
    "3jt5GFzJEwEwa449XUW8PA2xEGvumUx28PT6YfurEgkUkjmsA4wdrBKQZD9BRQ7zb6oTNAKwBfpf8XE9GpxpzjVi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sDvBprYxWV9Uecs2penCmcjCnswjGTMtvHNauYt3HPj5pzDXcn5qYinqyKs7L4Pn2E6j4jQDnPckCwZtebqaTJr",
  "key1": "quRaqQmpjzChQXD4c3HHMzxFdd4poS3HGfnoUoHMRSoeQ32yXHt3D6CNczPypgfzazSBYKg3xR4w7o1BMh2hRrY",
  "key2": "5oQYAnzv5YN5bK9vzVdV9mZSstBMU1FVkVtZgqBgwQX6u1muphyD7u1xBKvAgRo7VTSSHGkJxK5vVTMkwZJyRKwo",
  "key3": "5ffAKSfRFDJpn7EDXnxzHWco4rZQYVvPWXzeYpk7cVGy6wMrgXnC2pjKzkGZaCGtymZStc3VYzSV5iaRqD4Amtgb",
  "key4": "7uymC1JyUidwr9FiNZXDqDcdZ8zmyXzZdQATiPAn4mhFoTqPBgxU2MKnZF68d8hYdWMAvryjVbtXxi37mU5XcCw",
  "key5": "6UFEfJUGhkvSVzsKsHwEF8JBNknYhGLg6vAwrvdePcUffH3mbrY6iUx1JrBr7mhGHPDBDpwUsjrz6ZDRm7Nb6jb",
  "key6": "KyJhVUYD7ndMscoXJkhALYfKw4cUjfDaT6omPWeigC26piMtjmcSJLt7zJYXNhiJwKgkWqCHqmZ69ELkXMm8qaW",
  "key7": "45ZHPnayuBhexBCTmU9J4x3dKozV4917JCqyFXFu3bXucs5YCgTw2a2b5LHGiL4fPFCW8hHXk8YxorFNV6yBsYFt",
  "key8": "3VMU8RL2Vk4UFsU2t2c1wwkhgB68cWW7macqunG3YGabd7noeVYmeG236cFBKBXhUoFbBW713xVfuYnAwdDivrZM",
  "key9": "5pmPkTMYKi2pKsjoxnvx1npVA6Bv41cLjCASzQaYdDmSoLrYyeD7gBQVECH5atvyUo3hcrFJdyJYXoF91J1tsEmU",
  "key10": "2q1AB7Rwjnmp7SRhdEqX3HE65mhaSWAYwKk6gUM45HnggTZy3VU7hifrpFdU3uQrQaLsrytUAATF1JHn7XsRHEmz",
  "key11": "5dG31pFFtzHbAvjkPeAhHnCzNnnkdfzx5dFhA8MRvGPhfSk4MA8oxir7eLcjLyyM678kKrAzZ6ZNBSrz1K4ZJdih",
  "key12": "dSRj8HUrVNJaELHeL69yVFk1K7K9uqTFGfRZ7ifdi1eXBv2nhXH3iowSmkwNndjoZies3Trxjsc5fKaN3rpMcJS",
  "key13": "67QYLsU8f5CYtHWGEgQoCM2EHZWofuNMNWQhMTSNHwvRPgcZ7CUQ9z9XRmh3oY3hWpbCzPS9iV7sfbbrTGoMsYtL",
  "key14": "2UWTMhNHxHHnMG8tvii2SrBzTfpwNo33YyvCWLCW63k3KZeWGHDgAQjfcVjNrnhQS79rMeTeUTngvXjEgEgaLLRT",
  "key15": "5YEEcYnrhS6xPH9AJzNnRqp1Ubgz8R8NH9CW5qfGqzf5YYxjdjQXQQMHQXaeg67z1KtJskBsh6mwUmENfNeZcrJj",
  "key16": "4Y2kJ9RQhfzKSF3wXHA93V9EZJ2f8rxTJivRJrjuUBco6NqErpizEs9QyvbyjqNPtv3PytGrGVZfr7x12MzWB9eu",
  "key17": "FQuNhCW8575FEwFLi4PxasV5dKYf2SGizVdsXD64DvW89YBhiXrxpCAPLLnPJPVyHHQ47Mqu2tiSHguXhpvh9d6",
  "key18": "46onheJTj75eY69T3LmSR6H4K5hDmGsE7PYRU8JoTig36mi2MRL9xscFeYDfWwB5zHncXxCcG4CLNhK3p8LHqjk3",
  "key19": "5mZuDjuNu5hq2e9wFw5tw9GfBwvr1thmF9aATFFRLxpggBb3iPsK4U99mif8V9aLgLkHQnA2iy21FLmk8gqmSdzf",
  "key20": "3Ewh33A6jKtbzcHVJ3J5haL3QFyzB8gq2x29JvGA8k6MH6c1vH4AzHMyEEcAdTTsiBvXSDvQZRFCQZW9VaAdnCb3",
  "key21": "5qhwz88d5KYZBiuTPRKK9xcYU6dwTYFEYRKtZygxpLKwUesJKJuZyeGUJs4tfMyob7DvxHM55XuApNBwcTAAx7YA",
  "key22": "3LdGBe49Stc2Uk4E4ZHURfeTqnnyo8QFqEs3kZSFARyHqCEwjhk25RyVodKmdW6H1BsiWZPP9kNxM9UFZf5h6SmH",
  "key23": "5Lqzi5CYb4nt54SEeo14hnmYjJy1dHrrd77NoVieiHCYzVkhNtibyuJ7YdsKK9scUqQoue7ZmWFqZwKUH5NxF9Si",
  "key24": "7FAbCoo921ihrzMCybfhmvkNWtefmQfUZCLFCJ4R6tfbDeESF5aEKvKn7H64Cw7untpcy1FsPJ8ZN6UEUaRBG6m",
  "key25": "2QG4ckUTmYtK28u8rZZBfLtkMWT92cwp46TZMLNHyrTnbQGrdmLoE5SMXHREmSAi2W1zyoqmThAwUtTKMXaLwXXY",
  "key26": "4sUrBa2GuXp1nrAAyZkpPhza1f5xWEbePH92UHxHe26HQjxGTUqk3LJ2ckuSBZ6TRCaXbrNDjLYSH2FPaQXLuZCB",
  "key27": "4HbPMqoes4xNsLLHYUD64x74k7jCRZu36mFcrUJbMxEJwCmffZFoyEjXufY3rYS6Nu3kqSsUheAh2Bkqmbrw9R8A",
  "key28": "52RyuxyzNkphSu8cfPosgNETdpNHHTzpKb9VGzZCGCcPLet22uGQ5Q3mHifyLuzTN2QLeJA8hkxqoi2bhVqd3JEw",
  "key29": "eeSVicwk5kd7yAn4zZN7kR1u8FMbwqnjZpqEjJqbsM4a7zAmSTZQorMGVRekhJaETFQLXijHvtLbwkpWLXAAKBC",
  "key30": "fW8PWTFLFQms6jDZLDNtGwy4WYnjYfEd7NJkuJEPiYDqqX4FcdhpFHKh1HtUXMpNcX465mpuuNDVGTkf4KGGbxh",
  "key31": "3zRYKKHw1ZKg88hP47RyxM2zY41sqz79pYNbuVE3BCRCZk6cNqm2ti5U6xeEt8ra3vhsMueEQdTSJi6kg3N9s7S6",
  "key32": "prGKk9kc6hm24aHk1Vjiryfj3zDGjeP4H63V55daXZKP9EH5xs4pEdZDFFCoa8P96jqCHBAovKb7cbaMXxLwQLZ",
  "key33": "RvUkPvZqfKWaGfC6aPmAwg1wroiNAooxbcUbxhZ5V5X3Y5sbTWs5ppwadW8kSHkE95xjgKHNJqz524nX4PyEPhs",
  "key34": "5SB3Lgtv58hj88S6NCiXkhnKCGxYcwXbNJcNrpwmGxNMdneNBkDTy8aVpUBCgA6FzjTx3ffLCAQeNbsZ6bSpFg9W",
  "key35": "2qcntuH7wDSyHFWixMMbZJfgi3Mr31D6j2S6LEKAg8iWo1CYiMSahV3mVnLemzKzrzvwDptpYyGXd6snd33Xzdai",
  "key36": "29FaKMbzmaW1tRujGUyz3GGeLpMS7vd743NWHh9Ww24HYGopZ55BYLtCKcytpjWnPy78j1kM4gt3aiDx2Q2Jfoje",
  "key37": "4r7KENPhMcrLMUR3P5isKFiM2F6ywtyTYZigvf5AqfxhTSdwSaHdCBKjiULTaBUCWmquLBZXRbQF33jw1YccYKu9",
  "key38": "41kRLpKiu93bqeBWP4FY3uJe5EqaGsxGBP8mdMcvMoLxwFeBrxUjsGQ3kbc4BaUnyyUfuZ2XeTo35n7rAKYi1R7W",
  "key39": "2aBXPAyEKULnFVpiXmAUyQbGv4Sn1BBTVdt5FvKBWuHVWUGQsseDV1wCzgM8AV961Xk1ztghxeGFeJsDbTRimmMN",
  "key40": "4ktukjep1kJJkNUEqe1Qh9GgTTkYorGpcwWDV679jM3P3brE86q4kFfbZua9Ax5SD4BtJ2KFJxjBpbJTZDikG2HA",
  "key41": "4yXM4LSCKzCvTjF1PtHiht3LQ6w1nro7TmKJGTbHcAhQSHiV48bRA1SPivSpEE6JRgWjyPR1b9givuXNuW8T42EC",
  "key42": "4WEq7dPmrxCdd7wZjpHSG22TRFcY3Pn1PCjvVWHCBAbqXeuS62zFJU75pMgPW1QmVK1gErGA5XSbRNfYnM4rAGEY",
  "key43": "2Tz5TUeTV5k9aNqbwynXcNQtFbcj2KCNnivEDL2rjazUJue2tiXUdQKfStjmv2JM9QmV2UvusZiJpgzg1s1Ttbug",
  "key44": "2D137oqezJojokQ9x9YPzce8Jpuj3sRXYti4yXEXF9kFM9bAXTpW8vh7qt7tAXDLu8ZxVhuE2pnGp764F81GPT8Y",
  "key45": "4GQe8apn38AGuD2UYhzXRTzVUWiViPab2DSAHgynAqiHriZQ9RnEMvk56YJFWk2j7THpiUMokDXVpZd4FESKunfj",
  "key46": "4CenXfATEEgGNGdD3xrUKLGNyEZrAg8Q61DSj8SRngRCfCCAkuNbVRieUAS5Uqw7PXWhV8w8JVmU6a6RpNf9mNCA",
  "key47": "4zjHFNMSUrNVytGPxbSxmrTJCajfSHasfKtxCBnvaLj5A6FBvdgfX5wsLw5z9q5y787q4RUVphTAiHjVgYyq8Dqz",
  "key48": "2oBojzfAY53P1TBGVtkdvPYiqe7XWN9i6hnKNXx7qGASdJ9nUpjfbDbSrHKXwZL53Q7Vv8UaQYuMNfRs3HvgnxRu",
  "key49": "FqHikCvN9CJ3zaj5m9gZkjZNLjF3MCE6Gcry6CxTKRJXoPMVGjAxNtBDTwXrYycyaT75mPgrg2tB3aKxsukVTHg"
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
