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
    "4FaAyBHAaByit2nrajoQraiLzrZhaH8ZcYsxMaS2r2jtYwtYibdLGbAXQaAaNmiH6eTtowMTFdD9ogWVsQhrs3Kg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U39n2xkFrTDqaGfZkXaGmy8mUA9Dx5dXWwqxkuBmGFdfnAZw4zGHBcxMsFczC23CAmvfZUEqo5hr6bcG7j3N5hb",
  "key1": "4JGqAxmmLzCKnEVLEGuzF1Lx8j3pLqaTYD9Hk9J58v2nzQW37ViE6MiFD5gYgSFE4Lqiosa3PQQJz4uVGT1SDWG2",
  "key2": "2TLEgFkW4FVPBJM7tTpLeXmV3Ua6ouDmi7cGRDZnqhBrxih7DBbpTQN8b3bJQbSiSnRWBh5n1jCWGJWPLFZSzUSR",
  "key3": "2mqJCG2xFRsdbw7LeLnjMYjvfSNut1jiAohhXeYxFT7aaSywLwotyDnzx2zLNATPm8rtS4osr1FV5jM1Q5vhtN7b",
  "key4": "3mVY9e5qbQAyZQH9YXj1mawy8tZvnJRnsUKWJkWcNTTi31YGYRMau86ziTkVHUWwViVmbPMY1Z9f4LrySbkRCz4Q",
  "key5": "4QKnC3pdzjRi2xyGPGeE3FFRx61EKccQ44AKDmTLGPVEwgNzdfC4GTuio2vaUpUSBxR228H2RMBt5KF4eKZB3kXm",
  "key6": "3HTA8vz15gEgQqL8fxLsSmUPXyR5jtfHpc3tePWDzAgtFvhyrWHRtNtzKiRZEAi1yQvx5W33ak7xoaGMmBmKLYRD",
  "key7": "2NBA1B6J26VsUMrQN4XMCcqFHtwPs1JAXjF3qPCJDc8zmdo89GjEFNoK3BhzVSdzydPT4zNdZEzP4hLijf5iNXdx",
  "key8": "2fnfsZTWbE8HyxmwMTLnqCV7Gb5673CYeZJdCpMkQ2LTdo3tRGj3JzKUernScDoFnaWMHemvUrkXa5k1WGDqPp9M",
  "key9": "45EqMobQ8Ww2sJJCKF6eAfe9mrowzQFjs4st9ivVecN185dNkr2mKqEM9s4WBFYUsiUSU1Xf9TZweH1CnexSLcJ6",
  "key10": "2q2tzHd9bt4UVxwGWFn7Fcq1Z58Szw2caRkNjTp2A8PYF9v2Hnun7ZzsGY8TSpKQfr1h7ZFo3GKwXsVF9Pn64brz",
  "key11": "DRHKUMmEofSZ6GmfNaLNLuhqTWSuThCSZF9KY2QiDLJ4wodseAq4ShP8qUoXUdJX3oS7x5J2negnkDWe2Luhm5j",
  "key12": "STnGjXNYQuWRTd3hxKMijJietu3fzRRBQ6cck6ebDWQ7v3zy5uQquumyBZE829wGit15JzMbdQ9hrricrMWmxFE",
  "key13": "2mvnHRNeR7svq26TFFFoU13nvwt2PzmgPErg3FjzXkzm8sZeywUBa1gzRjYyoxuWZn2WRCw5xFAkLEAuskFJFAow",
  "key14": "52shi7JgX4oxBpfwUc2yzjXQpnK94EYEW7JqnjoRa2ARuuPYbnvxn8LjGUSfFMoEdA6DyfpmALaAeq42GYz9Q3Ys",
  "key15": "5anTbDUvfwawGfwzxaaUuFPqdKM4Qo5zt7T4yJDFVtaanLWeCGXFN8H9educKwgHkpUV7bNZRbMDAkyYgdfvfKF5",
  "key16": "2V8YycmGiwDmRKrGScBqcqNMrbVTQMeF3SW3P3Km9yKKTLwoqKoSAa8m5uvGMDcQwzUFYPyQuevyLTwrFLm3di1J",
  "key17": "3yteXeByB92qkp3yxkgoBdNTNikXryw3xxhM79Ph378sXboYdo94WU78JUpreg9a613NkRvE3qzn4BuusNHVaGQL",
  "key18": "4NPTJnjAFSm4CkjZRCrgyWbAkERiKFSNG7WcCFnAKa7F3JV3Xnng8hAYDc1gdYQ9wQiy7BpoFD99DeWmRtkTUzPP",
  "key19": "4nc4CfLGA2wARErpPnTwzisbrRvAg9PdFFPdyp1pwVnWZC5Sw1XbWxQgszRPSscrFFrbixVC1Y8wBsGpJHdvfdS5",
  "key20": "7XspMnH2ZKG7UNv5DVHihMMFNam2bBhgZrsLEWGejUkKDADKZcGQoEd9Nc3iq7FYfhZEHf9LYqNPiSTN4aBsZhS",
  "key21": "63WwCHc6ovPPcDzDgkcoxhg16tJUsmztcyBqVyJa7L6UrS8EX5ZurX194aDJet9c3a66A1kaTFTZXce6vfziNLib",
  "key22": "44EemFUY9HK72ARbZxgx5DEjNVdWazCQXkTdM4pwtqeo3jBfwACVTaFRPaQqZFx8sWy7qQg1pQjFF6HqVTJSMTsK",
  "key23": "XRdkv5zzW7S9dyApqzjXEwoyqfKDZA5neCmG6iwYfaCA7ZSJtNjMubiPM5nfQzuUKKgoJ2VN9Vo6esUvKvnQJLH",
  "key24": "3pDtayee5txcMVsszRf1aY9DdspqkiHkhtiPXUvZuCx3cYAqBArR5SotdyHc6t9ETFYL3AsmNHrvFYvxjdfNmTbr",
  "key25": "3jp97SVwtSAUf74rDX1iDok2pCwLU5q79mjL3UnGG5QyeC6MiJcguC3M5X7vZpuEpiTehEepigGyvMc4Y4F8fbTa",
  "key26": "BZFx2QkpmKchJGvCg85wANp469vNE6NEgQjFrDjjJvu6BKnSD8KKQS3wxtsJYV5tWaRekfxc2q2P5m1FvYEFgns",
  "key27": "5peGxqS9eqgFmL77h8KFj2nXVPyFhucRrJfTkif5ECttWrWYG821ZFTKLHhBECdaE9fxMmkEdRTXEbWh5MFScwxy",
  "key28": "iXGSrX8RB5Zdp65g6kmQ2q9VUWZUSZc9CENYPgw2oo3p2LhHsHdgo8kuNSR3TfVsbRAD6DGBtxRPRrqTyp4rRDm",
  "key29": "21i6a2TosFvSv2kcdP4Tz2ArrqevrFcXQoMYM3PZ93EUZgPEN2kQGdwYi68U4E76riXzdD9wFRM6tRJUfbEvRuYF",
  "key30": "2eqRH8VYTqZ1r2fYFinqtCHw4bB73vokYRzY3xYHLfK9JWkw1b4GwiQx8x6gbGwsLPvxP3bviYw6aby9EA8BxbS9",
  "key31": "3wpJvdg81yxsaMUPRb4hii9NogmbNkiUroSwnoVrzc5dvYmDVZCywSd1XZuSzgZpBjNnL6Jkppk87eXgzPgVoHfq",
  "key32": "2Nnhy1EmpRXYpSAsXrY277Ejn9YK9gdD1wCTZnBx7MYPVMUtPXdSpjSDijEyWk7KXqamJhdA4yXg7KuZJXkqEo5U",
  "key33": "53jbciRok7YwHjUFPUE7KsKAsKzBCzfiYueZCccR3uAvfkg3GSjn53eyHxmbbghsxnByQLfbCJWDEy5AhcqRrYab",
  "key34": "2uysRetYsywfy5VtX2bwbL4hwx1f3fQ1GrPaXXTxEEWRcy5QAGEHu4w8d4QFA44rcG44CYv94K9YuzczhGGEuai7",
  "key35": "2GXX48F8TVVQrs1orjNWca6QmKyYrspWuVh3CSfTFKuYK4PyQgYtQJVjKMRgptwbxJUuNKxQzqPZhe6vnuNqj5uq",
  "key36": "29SjostSrAVZAxNqVzPSiXoqMsyNQwgmV7B3oLwQUBWp7LSYJftHBGd58JbjWWeebQNAFtj5iYEBgwQWhrghEsY3",
  "key37": "ChyApKG8kJGx8Fy3k3hdCW5arvcFQ1LYpYX9Xj3CvpRfbiZjPVmY4YuE39ozapk3g1sCXRVygxuy4zaP82SBDE7",
  "key38": "5kHnp15KtFFyqhA8DFc6AeJdm3XDEzGTbk9oDACAEzmrD2J735bkWEjaDoLDvwwS9jhxWqCeFHCYvrtp9LGW2RbQ"
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
