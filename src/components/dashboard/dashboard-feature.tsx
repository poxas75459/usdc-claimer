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
    "3Wxe7CWSqknzH9FG8SpHdoGwEj4CHzVwg9VkcN2ak7zVZXp4iJo3fVyqGK76Dg8izdZ1cbafUGySWx7tPF3yc9se"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "465dM8kzj75AqLnC4MfVdVTH87Eji4iLszCfUh1p4tNtpHhNoXaTcw9KnJWh6tYZAxQZsSAgz1MJ414VgcWzZFQM",
  "key1": "53fZhdSDxyCmW2H3Dr6P9VJDyy1EUwwSHavhyJPVP2ka6Mn996D1Hf3fgHHPqMb7rrjBp1tesJUffE7drSHD2o7C",
  "key2": "2WaPSRPFckVDb6zYvixyB7Vsf1F3jkdQ9FuSD2kHxo3HP5Rt68BgkKnBzKoSTA9eWcpPSWVQU6GySP2NcUUc7sP6",
  "key3": "2m3MUPK9jWkgXwuiMC82VisrWcDeH4nVfJtRDrq4wKABBVt9HznoxxkQqCgqjfkXn2Qk7stRmT25sBswDZeyShaw",
  "key4": "4epjWGHaPFwcLUp3a9Mx3MPTzP13Pxec9ptZt3W4LnsdRTLRdoNyAEFrsXz2NKRL5NJyjLWvQKt7ZNatQGL7HjYD",
  "key5": "4WLMGXNcZZmFu4p2rXttyt9fvWnvhLncY766z3AyyFGbrmynMr3r7mN2pPGUGaf1w2W9ZzqpqFwJgW9zsXUr1Sg4",
  "key6": "5WRTGDGrMoUMBR2qg2qt5rg4aXukWszGtTyp6bavUzp6Zgiff7ZRQ5f9cfeZhjuQusBpUzVUJgo9sYbb8tYoA8tT",
  "key7": "5b1J3VJGJ9KG9NzmEKULbXGUs3h5jxpxsu8AcQYKzDHQotYZELzjwPDC2XmLghtwkfRThKtoGWTERHuvvRunN8Jk",
  "key8": "dLWnxxZ32pFxWU7Mi2SZpxTinAk1njjytBgL3p3oRhEMEPz5VLwzcxT29ipHe98mf7riuaTUQ4Y4k7z1ERuXXVc",
  "key9": "5bsqZ8u7tW9LuG1b1cicTgfiybKnChMBADFnUEK74wcSv7xuJ4aXWnXMMtGiMh2xusnfCMESruv1fcgQomApEjqj",
  "key10": "4Wiz2M6fAcyorezuLXR5DReeeNyVYg4PZ3Sq1edVQhQCknmhCqGKuz3LJMjHQwuEBqgZXBAjweiK5RG7vBJsaGaK",
  "key11": "592aLoLVqVfedUGh6EyBQMAsojoMf8dFg1AmKHbM7BsmFX4PmrhGLAasZY3RhFb6CYyz7K5uV72MG7mJFayGLA1q",
  "key12": "5ZuwExmsbS8VPFsqqcambxs7cpNZ5C9d93Q9Zzop7WyCEFygZGuKrnBVXBsLHTg66DKUUatYXembMgX3oozqKdNn",
  "key13": "62aik5TrAF26F4K6XruujpGVkUj1xWvryzszdiv4iF57YiivaQ8eV7XYPdD5ztAxZktbLzqsftdZ2RErFpN5jADU",
  "key14": "2CRZuq5Kd6ckvgi8T5AuyjCqDS5eB1JTwtBwBfrxntqWAcpSaN2Hd8FyW4Ma6xfVd6uy4XPztifyjPc2afJtv5z1",
  "key15": "GpGQ55by5PEWt4NrhqynER5zwrtExHWVWYmFXdC3Rp9purRmbAJfNPqzSv5LwcvvdfJciNTcgCnipERWC44yZ9f",
  "key16": "4qpgad9yRR3Xwcb2rJNr4pW43mWJ5hg7B79y6QcAXo9Fj8LQyUepKCsXCrfrmaCoUAf4qprtJGshC8Z7jEfWKr2i",
  "key17": "4Qija1A6egPsL9KBPDmsv3YVKFBPQ7aPKQ6RBMNALEsMWiHPKyy3wExYDUR5EmaaNGwXk4ae9zzLb7YS6pQ1crru",
  "key18": "5tQDvPVzcYjhexdRUm1TBdupP9LfwmMsBPsLVS1NSUYoTumtCX4ETjRwQnoyZHCMztDeovKSkuN7WBzsGQKcdm5u",
  "key19": "aBUaDxq6CmmWeudkmWGZLBbTC1MLLQynpJcefPhKDQLdoa35aQYPRpjvFfr9ZHqRXbMKpEXCB1R8KoNxxyWHYHg",
  "key20": "3i9y51Mjwn5LijwZZCDqYXFW9TVuV6w3B4KiEbSFyhncbnGBn4SFoCYkZ9HtwxQgEm93DivehhjeZ3yY91QyKfE3",
  "key21": "5x3grJnEzgMVRwCvjDcUTXJ65sGoiWR1iKbeu2VeXshB7DddtXmxYTCwEi6wbzfrRCMqF641Kpse6NkRtFzidiQP",
  "key22": "5QMebzG1jD3mnM18dhQkkLzGu1HHCyMnziL1fJ12a1AiiHvwtboZG8iDikHjGQMFJDom1hbsCPtxFSdKxaBjwscM",
  "key23": "3Zf6cSBH8cfA2oW7HaduvKhC65X7vdeXjCrJScxauDw3PqAFyXrSgFxPdMeksFZwqn33H9ojGsCu1mvAYnByFnYg",
  "key24": "4q2x7wn1YEKy4vY9NEy1rwn7wDjAQNG9ze4w1kcYPcnQaPzBbDkkKuPeDwgmJKxMMAwhUhnj3tacTBbatAddRYdY",
  "key25": "4JtmPmLoxWF9wZCvzK3Er7mQ5AZL2FMmboeProvoi7CZ2Te6H6bWXadQb5LRfUjN1HUL7yauLHTPH8ohcJretbAD",
  "key26": "43Sap2cTBKBxsk5xqvhZ4By1ApptWBgyeaggJgNwxnBAf2seUFYBXsuKtSu6dztYpYGVy9Writ5gU4qaCEfVonvV",
  "key27": "5pL6taoC6yVEh8xgGSVVPc3nt3xu3a8vGt4xCcqmysoaoG4mXHLt1uQKVxHV7FRoPYghKDWhA3Z8Zr8zkDxoTtWY",
  "key28": "3hZvhnxcMK2ZARgB1Y3EkzWuPU6Eu3SP3M3jCrFoT1zo3Lq9hMKDDvvbDiX9KpTGtsersHof8mgTUGesZe6kXAY3",
  "key29": "55DtV6eHWSePCx8y2yTPNwNNELwTWNFMV1buvq8Bxd2yDp1aSACDHo7s8d4qdWsWyDotyK2GtxETL1rKZzYFTdA",
  "key30": "26qcPp16BD2SgaV12Pquv5KcpXZmNnUFwHm2coMsH5u9rqD3AhobCeVGBZtgYVfyJhHQyodmsAbdqSWpCj5X6Djt",
  "key31": "5ezhuVvfcr7Cykjy2rV89EPKtwfsjJvzWPejn46uzuRpFe6hz6mHzP38YaemvjkfjvqYo2JEw7Wgtpvb8RP4kSqB",
  "key32": "4npJWwcjzrtkAadrtJiyA5BZLiKdtRHm7hxDZn9B9SDwSMdSSEZYgrmabk7FGqgVxc3G3NFb683mqGK7omRcjz7b",
  "key33": "2Ztza5k2zt8VpLUvC66i1f2YDwH3zLm6n6d7tJmjh9Ec3TMLoEWzswXcpSLRhJW4FBgGiKjnffaSpn1CH2bZ1X8t",
  "key34": "cjnwETpKrrXtXMZR4CUmb5xrjGTTHKZkbih7fgcTcmxT9RD9iEgPXHruUXWhnuTUUnmCRjUg3fgbSNeFbj3JQjz",
  "key35": "1C9Zgj6f94XdVMAu7Z7KskpnGXZ3RWDLZNE66qHSPe3p3jfhs1RM5iX5K8qqxTPDwubv13MaXWyDUejrmvquKwC",
  "key36": "4UxhKdwXWBaotfRY1pzvvHgVLgYweLS4R5dv8MeVHLrvi9B62rz34pwaAu75xaSXLM1X4Jeq1n9euk8GMawGu6uU"
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
