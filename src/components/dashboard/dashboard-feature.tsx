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
    "5CbQkmiik7iq3iYnjjgPp3T3EJFgFrRjcM1hg4FdUyMZwCkfUSXki2bhmEpEKE3qYeGku8woFJRffm3seSxTNNjT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uiiwqBWfk13FQvvaUi6UPcR4MgzT4d6xZMekSJ7oud6pvaQabdUYu2NbHWcREdNYkr911cUy4EmAQpCz15bbzQZ",
  "key1": "2KQESrfzidhEv2LNWoa1pkb5cpDjrJ9VxronLXabkBZoDb1wobmjmdP14iZbqqd42MuhPYrMfyy61PM5oqPRNEva",
  "key2": "2rmRv5fBShBerA8hNw3mTWpJrMBvjzt3pcGnJantMRBFenT15t9sBpqJVtCstr2qjVWjiWbL79SXUK5Bxv5qEFmo",
  "key3": "5j8YjGHvUCFXqMJEZqCFwtKsy4MYZeSzvEFHoTowP6p1Rm2KrZCkCX1wDQmWgutury3kshGMAD26euvYGVHDcRtX",
  "key4": "52D6uyQf2cBs74z1DGonfHaaryGNdKjpxDQiWyJ3umT3t3TxGkSHQRLHujqCrxadNV68HG2rUWEqkVUPNPbHMefN",
  "key5": "22HY81zSqfKFvf45AhJdCk4BwXGPfvVDuJcjVuMJKwd1Jg5zSneBQAZvM8Qgyj8SYoKjKBa9bTHaiuRd4wUZfm61",
  "key6": "2xDKXJ2XyLnCAmeizL3BHfnpMLc6f4Mwqypo7x6iz1jXHSP9uhNU9rNfAMvbn8Shx8jEEffRzrDaiuhh5YSf4n5A",
  "key7": "myZxZHvk1dxrmMdCZooHy4p7gexJjBjpC7WJtcd1P1SZbR6DJANYQGi3Lgdonx2TupRKxS5XPUpDBHTtibVBEYG",
  "key8": "2uSkhyjgZjkxnJQSaj8VRTVSp1VJvbYbBqvVzHsVtL9AAf1m23nved2m7dQZ7bssMnZMMVnc16RFoPxt7FtdFhM",
  "key9": "5LfG29wTK5Btw7GAYuWMvQZQ4ard7ANjU82QHDEPX9tqyXnPYTyxDtiMDaiDnh89FwLnws5mxMi52FhUxWmN3Sou",
  "key10": "Ad5oQqPxpnC4juRPjEVwJhNe7boZGBygAfRDKbuDzvGoAzdr94RnwewKUKSRgatb7K7P9qTNWHXHMEn1k7UzyTj",
  "key11": "61jYqNv27AJUHuReZeBRu36aLsDgXy4EyTWWvAzEMWLR8Za5zy1hXMoR8Hfc8Uj3q2YG3cTHVHHHjb1fh8ehyYd4",
  "key12": "579bj3oDUYvVnLQA7FmubRA8pfztm8Ddf3s5t4wHDQb2K4jXvyZMy7TZKoDrKnZqputHym6d3cafDZD5PMaEQrLp",
  "key13": "36VZtTC5Rk33aWSx3rKTj6CPqEnGCCrnoEwimHe5cffoPVNvXjg95fubFwq2D22ZUKPtt9Tk7eX2jVdGRJzcau4D",
  "key14": "4yqndLqncQzNofG4E9bUe4nkZgCyEYcbF3qWFPjQomyMTbnxDgeVdKUYcuddD81zGCW7eZi9VT9aRSeb8TdtJJ48",
  "key15": "72Jj8yY98ov7MQ8K43M33X83we1UgVvQLRyssdw8rg91DGxKGSUZ4FXDwPdgMe3uk9iuAnn5EgzzC29AzDK6c4F",
  "key16": "3KP1vQLrfieEC8TVcwvtou8Srv9cHrKErELqiBr7poc4WETggi8oXo9qdE1ghqZpgjVwkhEsPZpcAEtb94GZESTt",
  "key17": "E2qPKKAFXSfMNqhgLuXJY5AwLwr4mnudssHt3pZgqpcvPHoHVoQiKjqCNVXtwnoEho6yEvL4sZYErntvqsgkofM",
  "key18": "XjCPQWv3PNtVeuzKpBFB3vXeSekHy334xxskqpMoBnw9VMGkeBuBqCMXyXLq9ndVmmKj2McFGND1WhLNwWGcxN6",
  "key19": "4rZ1vqBK4uE89EBSW7ZZmMDDcVdxGNewy6e2Pa4S2v3mwiB8vuKQGeXYAs3bZtCxoXfCUomPrMHqiRhZpi7HYDb4",
  "key20": "34B6jXwNd16SFexxo6hbyDgh5cv9bQA8i3LGhRaMGwYjFegSG5SVpm7St8RddfAejtgUkqgtaFG8vBHNFZJjF8HQ",
  "key21": "4tUo2LLWfod2iK5XZiEjRna8R948z4w82jLZzjrMhPCXUZKJZb4ussjtuZbmopzHtLo4gL1P7gV9oajD8dmS2DcF",
  "key22": "NoPP2ZEs7d2mMzjdRSHyG17CuiK11CvG6CowNwukarWPWqdRdgtAHSE8ByvhKQoxWd1E9oDH3w5p5WzAxgpricU",
  "key23": "2cXWQRpQh9j6up5M84xCcvcY2pnpfA2DZp6WrmdHmMrgNMVJhUbfkkjSxUrF77tku1SMRadEnB2qH6mAHkUo4owk",
  "key24": "5hKcfWS7UU76JxyrReatW6Jx41As2RU6Eo14ZFxAfqbETq7g716NAL7UQLC3J8TzWAZrv2RYA6sgZqoH1kFBCg33",
  "key25": "5oiBPir91PmwCQf2zcvpghTzotRy53pQAWFqqNgGiLgUnR6rhFHgKtz3efvBCD7Av8hHU3cDQXfyz4FJXQwxf14q",
  "key26": "3w6tDMTeQ9GNuLsAosFqnk3u9tyruMEE68ACWdZy64qNb2q5kig3uzSYAFLCLz4su9kGcuTMEmacvuPJMBV4oqVz",
  "key27": "2QepYx6BFpgE95bJsRq2vnGRAUN9NaA3JXD8ioiXyxux78Dp51RhnEB1rCUYNUicT3i3PhNwtg268fWdV74yjG6h",
  "key28": "3ga52SPUFaeW9LjM2Rf3jdDNoZYByzrE2FycmRBYySZZq51CNRK72qfcFk7wKfmHTHoc7creKiPhxnHNzzBJHiii",
  "key29": "3KS3PKptFqzDJ3QzoNTpyHohaguasq5e7Y5S7F3wpsm3HPLZTQVRdcuje1aK4iwCjcCpp5fcrnKrVKn3Z5b9gZhC",
  "key30": "9FLojh17MWnZoCrNnmzxEPqdJDJ3HSZRQuH8q4YkDxBSnMmCDYKznC7x5er6Q8iy3UrARKqv3UQ2PeEa7uUGfqU",
  "key31": "4VyyabRufP8JTkLHQL2TBTfzi1bPFuC1mBZEJdXQP7PD63XiKHxD8HodDKNVpXAsCbAEQ7zLjbjyp266RzgorosM",
  "key32": "2zsCwwpur8ymsqXfVbXUy9s4yrSpDLdKXmBNoTmV8yk7M7YZjJTTZmvD6XGCfbX67GW6UbeUGVqD16wbtR2SVSm2",
  "key33": "5LnmhunAHNXxLHDntJSKJkzSARZRB4dKAbeF9CQZCRrqBeLRmAbQQ33SLALBaL2YVAn2vmKKgnWhxqEMfLG174WQ",
  "key34": "bkx5ZfapCvHu36GBW1kKRTKG8CSMoEdHbRqk2hom7oTXYG7fiMdaoPju8G9NKkBXtdPTBqQnVthxaE6JwTJFpe8",
  "key35": "mKVfkh7weUadrVeigXNBkqMCRPEagDqafSXTVpQ8XLZN756VMwpa2mBtW7pvgJ2jBhvskM8jADhU8sHX73XGo9U",
  "key36": "4VNzoahwkQamnQ8q5NKbfYJnQAr2HEK756dGcLF1nLBWgU4mcWUs8BGH2bgZx7kHqKwr12VnhecJNmBTmPd1D3DT",
  "key37": "3GD8gQT8TZqrgG9Ae2bgakM7udierPLq1KzCsRUJ88PBMQFKr7wy9DNu5hrCsdGUJeskwgATMZkPejTz2Xufk3sn",
  "key38": "2SQLB4EsdRDzEGqVSYsHEihRaSK6WcJq9XKa7mYnVd1rvTFbaeaKSCuqAHyP2kTzXUppUBCrrCd1CTxr9Z5ThJKN",
  "key39": "4LgKMcCcePyPjNQuZECNo3XPsuKaJKa16P1ZaMDj7CB2K75qdZgncKoqHPLwomD9i46TYATj8YP3rM5BL29bdZka",
  "key40": "BCbJva7euBU85wTmUpaLjS2mkEtcSEbSvXTnSBvQvXdmHp41SeiMZa1gG3Jbm8jFgoDtZJeu7TiT56oSR2qCDHm",
  "key41": "2ETWQ9mtJfuYJNgWWPSomfbXWH89JL78D3goqRnQ252Cbkbmhomugy5oRHXDVw8rj2CwaAw2sYjF7PXQXLKZT7pC"
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
