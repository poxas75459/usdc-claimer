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
    "464hDXUKFGZfPogYEtwUBMyHPkBYidm3paFSqHxjftqCkKY4P95gzFu91z537McrYWq3DJVx9AyMGPX7tHkFeC9a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UEJyc7dDa39YRZT4ysJRYJvGrvFDvqbFZ2ShMsJGfgEAvPjwaN54MipUM7gFEfGZvcGHaRCB7hvgT8XK4jerkF8",
  "key1": "2H7n4g8ZzvdFRcgCQFedFwhoSuM6KSfgi8FNDef9GzvxCnEUBJJQztVRnmN2wVaUqEXqzUhAZutBzbEZqjfv2vZQ",
  "key2": "2LBEYGYQ3awF8NRdvjCTRCnr32NdR6WdSQJfnEF87sAUKx3DYdJSik1uaMP1HzZEVAZM91KPaFTBqQ3WHQ7VocZK",
  "key3": "5W5unthq9Dixsq16MFPbQ5SEhqdmgwb3atAM3jUnQ5EkHNVBpiDHxqk4oQSWc1HLaXyrzuUrCBbhFtTcmwUMW7vt",
  "key4": "3TdT8qwpzwRmdPF1jFt3v5tzcS4fbbx3vKXu48FzyCFx187j2XtmJ3rqoFeJcd35Y2tUFaGntHA78bDb7qQZJQv3",
  "key5": "3imtPHK7i2m4RwXtuPj9fXVbpExn9KEmBSpp1WhZosduvDP1xV2MM2JeqGVHmD3iJ889a363pQJejZK2hqf6Pnxs",
  "key6": "akyNZNE7MGzCeZCwXh7wFPMLiKTtAEFZY8bejF2y3zVX5uuoHJYZotoaKnu6UkcT1SzoLsZhuceyJFUpXobH2k9",
  "key7": "4bPfkgqZNWM4CTMmVXpnipkXsZdGQaaacbiDNFJ6hv8fzTamo7HyV4n8UY7VDAzDupx4m3kdmbQvE5WrXU4JzGyn",
  "key8": "65ecaJnSztRpjJsckndixMJGhyPwDRagbV5q4PxXq9xH3ZDQSYMxzBX8f3R6VUeUs2RKthYCiEPRhqtcZd5uJZi",
  "key9": "jSirXM98jsLwtSLw4tgSxT1Enxd9X3CyG25mVUSgD7i1qUZd9Qni4TM3CGUzRS6KRRFnRpQoUEx8ofphGGtHLxa",
  "key10": "5wSJ6FfVvaViDYj7k8VHq7HesvruSrskiEJoXwX48B7x2ZNSzQuBYzVSHBNXL1rJ2PUzdgYWqU9SseGcuDtS4u92",
  "key11": "2Xww9UWMu1PNdk8bxPvrpqG74ZGtBF2J9FwifcnPoYzELw9WCdPKpu3irB3z7xTkRGpiw5CiyCPopBM8yH6scodJ",
  "key12": "5xrEAN8694PCSuhbs6SNGWXQ7bYk6V4f4S9M4CyQLNTvyK986M1bU6dMgUkMDUU3jLWCDQM28x7QFxDGK3bpHpyS",
  "key13": "3Z1kdvv5SpthS6ajjBZGguKJmApHA9W8uqoBveP9D85zzqLWTozn2RoYFzBKFF4jfLU536uJPBNVc13Yq66YMNoq",
  "key14": "5TYQwePtmPTjTof1wQJckVhbN7TceHqcTPskNYcByY9JEiwFXCnovYf12ENUK5jvSmJs3V1Yz4Pr8wf8Zxxz9nA6",
  "key15": "5SEh3z7u14j5yhPvr1KYXS8359y83NsqdZom1BQVAcW1Wn3KAdQfbUp4n3VXEVk9yUDkn668YaCXq22HtaGkuRvp",
  "key16": "3YuR5eZDYNWhQUdvLNMEJMM6gKTAYvXik4RdexzvYgp8ZZM8i5B5CitT5CPrYs1Ji93u983brZAoajc5psNmyKW5",
  "key17": "3Z2oFRg2ogVaS5xdkQAT8UGUPJtvL3AKsT1DkJAwcngYuxU7mAS7GxZwvqGdVZgvExSursC3LHW8JBtkkwGGi31k",
  "key18": "2CohdjMscv9NSwDPGHWtcowq63CSB7bSME7VD4AUz13CKW8V7cPqvwC2jmHvdVZYLGaNniRGAGoh3GyEFEq39Q3S",
  "key19": "4Q1ymy86aVGRxbxZKcJSB1hrGR84scDRbWKrjWFLLsPVDK5o1KmCgWfyt3zZsRq2Z2R59MFFLsTQJvq5vVa9bPjN",
  "key20": "44rqUttM3WkiAJLEuGBXh3qvrmBLzRkUWMSSf2gErRsc2749xxyXe4n42bdDuCwocLw7k7ftaAtuovNUhVceeqzt",
  "key21": "4NmwPrGhazVf8cnEEZVoExv6g3N5CBRtoWXELbymnH7oi3N1w2WKg5rtgCTxsbshLPHwS3pHqgf191igMnCeYcVV",
  "key22": "4y1KE5B8Umosgz9VBb7PUeRCYz7pH5G3ZyJaKT1jZQX9zMZttjRPxhujPc7khgoLsgQKaebS3wY1p7UCgBMyY8Jn",
  "key23": "5xxsM3WCTvCdiYKTV7sSr8uQTH6uECPXdvL5nQHMEdSbDSdoV5RmnzueMKzLsjnGe4xRhBUGpGSkNkCcNHjTDjcE",
  "key24": "54xHp9mAegQCewhpWVAGgNQt9HEGPvsSbhKiz4GU72VxcXUmkpNoB6TKgEJBPAda5Sy6VeVkvXLbX2xw4GJHQCj1",
  "key25": "3uRLkCQ8TabcWxvbrAUW3WENq7tuXBJ6R6KCSE6teXrMQoZ2vQjUFMFG7MxGLZKy5XZpXt2FkgWqRZp27dmtUn5m",
  "key26": "5j8fzZSjDu6sjZHZEkXSdrFE5LTaoxXoG7TgjPPJrtBcAC9wyUJ4ux941dtwMUTjy8kLRcgEeEaSYhjcME6LHktc",
  "key27": "3ZxgcwwcxP7tE28RpZxoFvK3XLwM84veuzZQYiqmXYBQxfJk6sWDi6CHrZ6ZgDQhzRo618fXBogtyfyEa2ZW3kGv",
  "key28": "3XcGeXLzbxzVbQHetQbUUp2NRyr65Mijj9fARbdbEVxFny1Xg885WiYtmu7FigHtXCZRatTAJ9oPU4BecjKennbp",
  "key29": "26dKqduo4ZyUZitf479SgPuzFzr6DSJpSmg5LYRrrCeAw2hHNVszaZFgPC4pb5UoWKjx7a7i55UxdMKnCcaZzPbj",
  "key30": "5djbyX63opWLkUqq2Qg1MgAZLwnyoAnu1yjfLwRaHsXMy9hxmvrDwKWrnF5MD3kKdz3PjUE8YVumkUejsvH4uxdd",
  "key31": "2pJ8VHKxKA4oNfoz8R4PsvognGhCve2qymDvZ6ZNusxf6FpvCcaYvazbwRjuveAKDbuE4RyWB26sKNhg3Qi7NAxY",
  "key32": "5efkdAWdRvzLGcHfQm5xhHVNnSBrW3HG7VTAfBqmxhHQpMxaDN22f3jhMqdGzN2y2icNopduq6SVMj6c2csSoapQ",
  "key33": "SaiJw975SyFyBUiAkS5iL1z2iE7pkZCmyvusco2rxizzbNKZkJoHj8ofvJVTdPhYddFs3RT5FUT2ScTmLMBFNei"
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
