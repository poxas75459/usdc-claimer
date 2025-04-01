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
    "3vCErr71hmhkxLfLdJHPaKXSGW6wutM8aFq1NWzsPmH5Hgawd5bDsYU4w2Kn8Dpj8bcavHPkasUYrkrgPKuRNZGW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zt35MTq7EgzRyH3NYXhnZLeNgjvqkZRV5GXPN19hiHxc7dgAZ7YyMZHG4HsPRoG8TeVm7DA5yg1fMiGkGWnLsot",
  "key1": "Mi9cDkLbm4pynPq7DNo1zpEbLGKT3mkv2Ypk1UBxr5DyF9KoWhsoEKvP6skbBpsb9GKSvJHyMhymg3EkrYj3aLn",
  "key2": "2kjYY2Adv5Rk66BxjFBhTRvvA8phXgU9rzMc4vY6QKXGKHFJPCAjESunyvNDxouB396nJ6bS65yoGFf25B9GyJix",
  "key3": "4F74XZKEDNXZ1d9jt3ZKfb647ukcTHazgnrMYT8aaG5YtNwDDhUiTkS9nGytTm7PZ5Qb6euZWYAUaQwcW59dvqza",
  "key4": "2Czs15PX1gSzfGC1GQRj6zJTz7mohNBmnHZNNSw2Nd8HhgViM5jk6QuohXkYXRUcHdL95qffMP3KFpwwEpHEtmb5",
  "key5": "5jqwUwu8V2HwFXFvRki5daB3VYSVkEWHFgaWayZRgRk2E3uBMdwhqRjkuMMJWXVQ1iwHe1nyGs2t5bzfVJnS7JRe",
  "key6": "5wps91BzrVHDqFFBA3n3YRxgy5hzEzorJyeax7Vor8qn5drPUyLdvBAv5cURb5VcCwosGW2xyyu3nCSn2xJk2cTE",
  "key7": "3XN73hyo9RzvtQ4cSyLAz2EwsnmkQ9kFCzmcS7rYXZEoamWLkbZWYaCZ2Ra6HGiRqd4N94CzA9LTZGRYbcW4KtER",
  "key8": "3r4jE2ntWbr8h7tszAqcQwhkHY164ia3rmkay81nNaTVQMPLn8VDx587KUqj8wVGPTymvHUtAqS7Y7VjLiyaxGRZ",
  "key9": "4SQYjuq8YAXK8bxZ5XxoRUweCcDkw81EhMcecb14SMAx2jQyG28msUPLtvyxCNBQzcjSJXFV9fWz4nvXPfWzb92g",
  "key10": "3EmxnuvbEc2vivGgyfugo7U3ZrWSc3u9VCuc1qfEHwRRQUcxELywSDkzy2XcsxB3Q9B2i2Tnd2nLAzCxZNALcJzd",
  "key11": "3eB7Ef4F5STKzM2tB8ixb2oEM95xzsXRb7Y8MHPqUFNNi7CPqEreHQoRUifXp7JaFXcWFKHz5KFiiywDh9JzbTND",
  "key12": "2QxuzDebNC3vykAEZ3vqDmhzh6RTgyrqmtD7vKPHavH79zf5PBa9KxCZ18ohnYWdsjaEkbdiePeM1quZWudmHpHV",
  "key13": "5L4QuvVWvxMxnr9tufQ9U5AUnz4kZeoBJ6soTeufJ4taAPJAEsYwt9o96Ge9Y12HRaTCCRRsh68zJKsX2RoHkYuH",
  "key14": "22bVJUg1JbKzQ8GQNQ2xkhrmKpUyfnyb524HH2HV9fRLzf6rLHuVRGxRaodor1kdnWgjrnMH98FLctxYLJnpd6Co",
  "key15": "56FfjknJcLwxXELDkG8p4GVCA8HBPnFZDrHiFHbvAqfJb8aij85FWA4PHJzbNU4ebX7JjBrNgc7fbyVP1W576TAE",
  "key16": "4AMM7qdrDdQVUy2AkRgtCPViEriEvz54cK3kpVFrKEggmnGzbc8XU7dXhdzaMXjCVMFRTZyJ4xhmAE1Y3rjAx8dQ",
  "key17": "53dpUYjLagQ2juQRHoiyqPwegaiQ8NF49RcDpKq9ezLP1eKj2ycKqTBg4W3wj5Yiw2oZFDV3dGkmfk9pf1otQgP3",
  "key18": "54vDwgfThjf3KyZsFXWNQL6J7dtU4qVmZtEmSYWZUazUVrHyAszA7crpvFJkNof8mXiddbo6Rzk7bH4bZ5MJubH7",
  "key19": "5zRE3yEjkruoetrQopxwdjL5HiTbgjQ9kbhpZqmUPeya1YAySdqWeQjeTszuFG8JZcV7AAHefgivqgi3xd1PdM94",
  "key20": "2uGH425qBp8fQpNLLTowSzvtGtDckruhZ3zsThyFwDbwcJzDPttwfWQ1WaQfWY9X3gbHAvSzsQr2BLnYZouChwv",
  "key21": "4zBU99bPbeUS32X6ZDgPvYeoJ2s4oiv6vF3y7HH3S6fDoRaYdr24Epz2G2vbi1z4QVf1PFkVh3QJ7HgpRPuz1Taz",
  "key22": "5vj3iSe45oXp3TwwWw7H3oJ2F58taRYWBukBy7zcgsik2df6a7zizeLLng5zWhfsck3XGqQu1ontzWWMPY3JTM6r",
  "key23": "5kCxrrzDCC9hSgviqxH6i1hWEqBEp6owingnS3e3VqQ9cmPHRp25PmmPquiXW6kJ5z3zSws9EWVaWohnPLqx9q5Q",
  "key24": "59Lu3imFhut3cXnnLpBWKLfu4p9o8K8rpdF7M4mw1T9AbUizxJktJVEPDg6qXpFbGDhizyzLQAQUoPM997tCFYkt",
  "key25": "2zVDbZffufxFyhZ7t9Qv6aTykAhDbmp9ue84ogSsFvPqM8PXuddwxuEbeViMUksvdLwfdd8Fp7SznMTB21nHq5Ee",
  "key26": "5iWZtRvHTHKc5bjEgXZfnRxjc8AFsXs7148ZewbWhZYQMvrCsyG5e2R9U2Sb7E3wqtGF7DfuUnTjL7yNGuL4FyyG",
  "key27": "4N1Au7jkDfpjtJ3X9eLq73xzPDeWaYfyHTQg7Gq3t98pnvdCC6ePxRsEGh1LS9gYvwa8wmLBGGwShx3LY5M2A52W",
  "key28": "4edbaT929roaXQ5iySt4z5cs9awtaGxorXeky7MAX26CaYJcqYDfb33p2VXgpgugSCxRnnvKif7hsmbMyhhiXjEZ"
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
