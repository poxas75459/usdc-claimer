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
    "3g2fGiPxCfCU4gMBRw6Luybdx3mddephH9JV7DL5iGRwMvEnybC9n2upZg9KVpBsKmANisNeTLYF91caPJ3VJbGt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XcYau1GaJuticRtcRkB7F5H78tbMYc4pkK1Dv44SPyLXb7yBP3LsmTXq8iUsQHT9Xu9rZxaXjRmHspNU6ohYwVU",
  "key1": "44i4VvC31sMR41A4qsv46iHcPhozznoAMZCKPdEuDqBhP67E5tY8uuo5DWrEXXjnm4pfrfj6E4Lw3JSzVi3mVsAQ",
  "key2": "24HjkAQrsDzjicGgDMQYG5VErhYew7H86Z46hQXrD12tmugfEG6AFH5JBuxyPji8dtwFLFTRU9SXq1gagUcxbThS",
  "key3": "YKXNT1ynD3Cic86gd53XJqGQ7zCZxaYaosdSpp6nRzCo6qyPPqT1MWHUz9y8a7ppBMNDiJ2q9QVRPsy9facyG38",
  "key4": "2vxC8vaVTnDLZ8fSC5fcN52USbmfFmRxKqRGvoBxg724WAHrPG5YUVhUhoWqA5SeT9Sf9jTJFAMVhumj83irCegY",
  "key5": "659ZwhETZ8nfCfxuHERoWMJiVprqqVoZ6teRWFR7Wrf5TQY6HYQzzVBiKsREkBWhzyjriu9syn117yeMYzH49FfJ",
  "key6": "57mtQe7ye9zgqm82Ek6sr7jL9CNc7Bb9zcFTRTVBouWs5HRZrgkGjW7WjqMWRKYq1i8gNBnG1k9sho7J4kZ8e1Fi",
  "key7": "2C6LFD4oEHCzMqbG8u1f1KpUAm6f6LecjnUUyCf3C3A3b7ahdW6UbKRmZsrs1TVhcTU8yz3j9xZwo6BEe6hSwexZ",
  "key8": "jRUncp99fFEKGJnhnAeJmLcRdnWS2JVgbfDcnc6E3pY86T3LJvXYTf6WprMzVX7w4Ve3GJ1RLwApd3XhPAWbGyt",
  "key9": "FrTZdrfaPJjEaM7usPunwQJHXQFPdeam1gxt9cFvsJtd9AkFMrBHPvZwSW5WVvpgjg1L3uHeCDUBi1Di2no7Yyj",
  "key10": "5WcempnXTsqmiyCUvztLfZHEEXQBNSWaVw3ic7ZGnrtihzRNDTMGMaFGcyC9Y4qkLDrHw6uhg69BCWfriU6NHq2X",
  "key11": "5zTK6qgRAdb7rWjxBCKrKTxVsjFfgnFKwUhaS6WPoBRkaATperh61krATS6UEeemCvhvMFDxmeWA5Nme1x7KSgYJ",
  "key12": "4MLbjHsCqeVh98XaPhDbxMtbkNzdM4C2ivz1kge3n1e5txpXW78eGK54MiMPRiwgLLPrkrewYHg1f5xAM8posRpE",
  "key13": "4dumfSwdm9CNnBETEKGcdq4mTmACkdgumG9VW6p2diFT7c3wjEhh9G6RJX7LRrumtukt2DQCYx8nheDjFRqLqQQe",
  "key14": "5s7bDv91p7Y8WpZQKGE9ZEsabhTe2P3f3KsJS4GtDsLCjwgxABstNeyPp6nJfmgMh1ZYiUX9zXEoPLjCLBu5VhFW",
  "key15": "2WDWp9GdexyJvYrs3J37CuaDYeQdhvRC3hAyJXVHd382X6q24fSfxJ9agpSkrLLVVfPU655TJzKVnJYmTeSYmXM8",
  "key16": "TyD7k8p5y9ZSBBvXyKW7bZ5MWphwoTQPNGhDWTKWiQLHprU8pt6ptDDMAdK1FsX9uoSMphE5ty37rcpeLMNynna",
  "key17": "nM83K9H5rNJ3ZWfa37MULjfYrvW2cFGPjBC2wyT1ibwcjeQLZXDzC3BgJ6jYst51qpy8PuVm3Pd4BoXxQ9qtuEH",
  "key18": "33bTCtc2rsbZNvc7Pb8wS9knDNMmahkzo3fqypBxQkH6uf6HGz8ab5BzzEik4WZW3MktbQGCrzbspPCfqCA4QNDA",
  "key19": "5yCwByZ9zQ27rKVMSHNzTbscnhNZCixFduYLswtvdfzySMewVTf9CsnQTaRHf5ieSWWYAmWDnUhyGff8LpxXNF51",
  "key20": "3APWPNARkGD635Barxpx2UvsxsrZVVhUHJxGdE5dTbLRy2iqkca6HSGvVMa5rzN578BEd3vq8rQ1NpwVQzRGZMYU",
  "key21": "2112jhmueXTm5RV5jQ6NC2mitdrvurXPUVKxw89HDcuZ5FDm8ipzMhdBqXmuENrWcNf8WUvog7F5TP11wbec6GsX",
  "key22": "4ZzfJK6FQEepzbCLFGFwPzsf8huqTUfEGi87DS5QSL8spf81X4jL2sgiCMTRPZDEYG8P2TTGqQaAn7SwkRcmmVGU",
  "key23": "26ZxFjCzsEYY4pBixMtbnoGdF8oMnHdHqPoc4zzAEHwqqabp6sRTaKwCFQV7nR5sVgq1kEeWjpmEDndhabCWYNZX",
  "key24": "4kJKe88TwhPtVNr8apcyMhBBcTPTNo8k6YjMxovUAQCBfBmj8AjQxmo5PLX5qM2nmh6mWkju9ukdRM6jndofKcVg",
  "key25": "3McyjN1trNifGz3JKZLFHFSN83cYBnZS4sDK4oG4nuKshSed4RhRDsC3aBqNx4pkz631SJdCWGsdgAt4PvBVogCP",
  "key26": "QcwntPDR8XcjNjMp7mFVQzqiLAfXj92Tj9x1oxtBEYR9uQ5M422N61Zwuvd9XgbqCZPGnBxxBkYhJUr4UtAC7M5",
  "key27": "4eSRywVzDEijeW1oRUFFMDDsVfXjQF5TDjSepSptsVmeuNJYNi45wmPpZKAMQ5xty8n5EGFYoTvQB21ehsbPFjdT",
  "key28": "3X5kmmrai7bKq4DZdyaJPiK65iar69cP9hDyVdvFHowRQZMgrRLMBH51p3qFmy7nvS1PdhK2WS1WTNP6J8JPm5Dy",
  "key29": "3k63y2TG36oARMqqX1qvoCPTF6U3uPCRuTYicmmCAYqjxgJs2wguRVamhLmESw8SVbChbrTb7WyEHsFkMNChofHo",
  "key30": "262Fxn5Lh8FU1v6qTVv96cjbkBsknYP7RPYxm9r2AU6fhbWyjgDRxRypvTbRjrjERtt4cU47vH3StLm7xPbVKiVK",
  "key31": "4bhgS1jzkuyHV5WwLUdcfnz72cSGMDRrqoV9phAwPWm1oe2kBBqs1JNQdwhYrPu6rw1pLPx6jYWPpPnMS9MfMq8P",
  "key32": "22ELP5aCR84dq91VgfFS3f4L118UKHy8r6W6BetfTPwmixiLQRvCG8mX38dJvf8FRdSTUMyFffEeEShmFQiJufkQ",
  "key33": "urD8h9i713jzeSB2vLu7HR951f2kRfiGt8yiveX8MUkZgjfe1zt69bKCKE2QBBVLdcG2rFaj986y4g5huCRcwZo",
  "key34": "4vpEm4WtFKufNbMZyvr4qP2m3d5YBiZu9Tyh8wLhYkTB3Q3ZQ7JWztDiRUjEyjZqaczWtsopk3EyjYKfMx4XUFk7",
  "key35": "5EPucV3iBeFM4xiotmHw1NdkHnF6iTha1rUSL58bZ37y82o1QXphyKHiWUmskLqUqzjz3TjAcv14Uv5iU4ykKSnS",
  "key36": "2KwkxjsCsQnBHd5A8LYFPgdkWJ987PvPrsK9PgGeKbXwLuCXAiSKWBnSsY6MeQcQ3Fic2voreoE6ZQLt9MPupJHd",
  "key37": "2EAeDkNLspDDdL8Ku2rgzuiAMPC3DKtzxrzMaJ7r1xPR5RVd5eVGFV8BFFcNAZmm5EJVpzq22UMcn21PnVDRasCj",
  "key38": "4MMHATkA3NSn8rWW6d9BxYanoJUdecsCJMVpSFeVNcUY98aPDt8TF7gjYcNyiuVyLaWVHVjrncX8ZCzjEtrJ71wn",
  "key39": "3aCQ9VMHU8MAabuAnhqPP6MGVv87Tcqzu4usX7VneGyVZRXnYecCs3MReATpNvGZSMGP2UZCaGDTQCqNXwNQdP9Y",
  "key40": "4RZeJeMUwMUgs8nMqhTG48kMcjAXXf4G4a7kZxmFnzUJGMCwhqUux6W2jPFqyoejNxXyHMvYUvZGigpYmsFgTcvK",
  "key41": "5mSGGinQyVaym16uNCnmVNiuVpVsegajZ1jT3KamBMv8sDYfyNthBxYwGB8oiBKwQw9vGch9iG6oVNda7SqeuVHz",
  "key42": "5qfNdnRCwtEWgHMvpCidgmgHRR1YFBUfFBYcRkRdFkHBoTufLTB6omZT2KBbAenu9DXs4KaTcMFbNvbE4wdRa87r",
  "key43": "5gBsbjQdxCyGt2BuhJNyXgx9hJvv7Wxq3KzJeqSk5JqRo5x5htHZ7tnDhFLJQ2xLuQvwtmTQbJ8ZHDKEbo3x58je"
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
