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
    "pdirEqYqXF2bsSKxQ5Z6XTw9hj9pVYqXYePcP9qGLhwgyBndMixWaWjwVEcXH8BzrfggTVJzM3kgbgRoLqj6XiL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35PM7oFUNxaNB4MWj9s1BHJGCydZ1aaEUuS19bhr64hXUBjv1RHSzSBsTgWns6eo4evmwWoh72QoDV6Z79Y24Xop",
  "key1": "3AczMzUGrSCeC556HaVfDLFmWZo5eZQo8PNf4va91TpQEEDMUc9MoA132ToBSDULUT2EQbtg6p6BzUoKx5TvJ7pp",
  "key2": "4Ry3hAdZYsdEmWYnk62Gu9RECH2perg5P3dwzXcgkNJC1bEZvHvqu2EJoug7AEhGSJEkRM9kYy26a8ujp7Wvo1Kx",
  "key3": "4kRbKw828xc1ch49h41jbpucTEp1ZjX9pMoCnPT7Gd8JAs3yd1YDByqnRA1sBNC4GBinhzMZUfSpZpoq2eyPaLuG",
  "key4": "5NGqBR9Wbo4rWjmKK19LQg1HycR9Jk32ckNQaxAaTGccHex2Ux54FpfwAMBXYLmjZsiexgJdJk2Qkfx3btEt2qKN",
  "key5": "31BKWEHbKRRVmvNwMpGwaTUBPfUcsPSxipV35VWGXbwCPHeVbYmn9FGBvfVHQ8XBmQ9hvkSthwSPAhSiPQMy7AHV",
  "key6": "NuUS7wvr6pwRb3cABxbLYHtNM97jT5Uej8SM9ptxR3uDzqwjTmW1Bh85z8bWTfVxu6BHAExv98sdRg3DrfJHpco",
  "key7": "3CMpxp1rEHvDjixFjTv5ANvuBGi4njpnVvGi3bK4GW1TQHRdWbci4Zky5C97wd2sNpgzBeXDs5TaFZ9W1sWxQZU1",
  "key8": "5pWtr2tcoVPhfmeWbfkVZk81zaXaZXK3jb55fYmytHZYqZJQnrXrNeW7mVuWtFy9UQSASbVFxpXo9mvg1X8brrpj",
  "key9": "5yniQGF29Sa3u1G2T5hgdcyd5DVR6UWxVz4UQVmoCCRe3pR36QQSJR2VWD8VGUuM9Su4UEodh8ReVAoum141TmfC",
  "key10": "A1FaArsm52A2bDYqYZMZPWcghsQdLveyrTjxhKkW9kUq1NK8YHvz2UCdckYydrVWTv5WCdUiz784Hz47u1xog5H",
  "key11": "neVRyXPEeFPyHiRDBCPDtbosCfTpY1wqos52vL7RWa3X8XmSjjXwW5nG1bGRiGhuqQ2MqR4ikap1R26meQFgYLM",
  "key12": "25Ye6R4u46AYMyPzbks8KivVYeqmpBPNSVFgaa6wwmqAELntWr1JTGS55hEb4fo8n4kPojtYR9RNd2xSu7x8iGEK",
  "key13": "5XgHi9bPtV59gqdqYMMsUUe8QmhnrA7GaP73m5q4dCaiK2PhFVm1yDP4DwqFME9Y5ZzSNkZ9CvD3ynpe6ZtziUR9",
  "key14": "xTvXTVw9FFj2Sh3uK8qqb5FTyhWZhwe2u1yk9BcraWYdobXWvgfAFx59kD9mBEJ9jjVYRr2BweBwy8F6g8FsKKg",
  "key15": "42SUxsnirvyRaD5s8Uh36Jad5eXTThobLDLZctYd3hSszrJdVDMmx46poNCubDMqJhfa4PutchhshxHDBGbzaz3o",
  "key16": "5usGwYqvJqK2LfbnKJ995AkBUb9iAYtZozjYHPP5BVtayq7TtZ27KAUWPQ1iB18vD2BrhPwtQJYKjr5GdcyxXd56",
  "key17": "4hh128zikPhWpTDg1WwqHS5vWh8HTW3BP9zTQQK8vTTqoXuHUXnp2ybAVeKZPveYMVnTuYDWVqdmwxxAB8BtpmcP",
  "key18": "2uduPkNQMBqqKK6PU98ebVp7q9b1MAy9KXGgFF2g1kGiME8Dx396NJbvAMjrnYcbNcAfxeQHKc8zZNegUjHrUy6v",
  "key19": "3Htr3F37uARUaCioDipp5z4SiNEp6Vkbd92bJnoB9gWYDKRQFrkVDM8n7P6HqabJzf4Ym8pVx8T7UTMCjbBcjSCp",
  "key20": "SajdpZoVnD5f5EnKkqGtpCHB5G9kKb6tdvej1UC3sooHkqcYWMiq9kmRbVZbNSfVVFJmtdTiYibd2ScyfVqY6MB",
  "key21": "4RGN1AGiY6mtKBP2UzRj8rSXkkw4p6sP2erZBZHdfBkpqWREDgy7wmsDxY1RBNFkmLmr1AcThVJbSvo1SASn4kjt",
  "key22": "4wHUkLbezkwBgVycQuiQ7c4DQ2j6H2WwVNJnnyMP7acW8pUwjL48v6FcgMQsvNHPVuexr3RwJRHytpyFVRm3Bb29",
  "key23": "5fsUaEMKtXyjs74oqFEstrVW4bNsNjgwKUVxR8JZsCeo5fvvKW7EG1AbynGu7cY13vthTXmKbVsBb3785SwdmJX8",
  "key24": "mKV93FwKaVQFDRcUCpcX5WPD6xDgvYvaQappu8CUCV7XuEkKVxt9xpiEWHXRSreRRnfbggfJ9njmyiLh8e1qJn5",
  "key25": "3atkniN7baGjCxzg616NEdJCYBJNXQsy4AMPTVrRSkBD5eq8urZuaNGwPceu3QhHbnfusj5oQVsb2CoSAHAgZoLn",
  "key26": "3DZh7MbB5GgsyqAojfvozSBcPUQMHPB5tWkJAtHopSzYQPFWE9yTK4nfXmTUMed59AHwUkXRZv5jBXYtHeaLYuxz",
  "key27": "2eKHj4aTErvvEoMNRJb2QnRiFCyK1ZQmBALu55FpAL9iTyn8rVqthzzWM2sA3kYC2LLrPuPgXb8ghqKzQtRQmcLd",
  "key28": "2AnuNQ7Trbfg3HtF9BgBdq3DvzAHP8Yt3BnH7v3mkbDRgFgKZcNZ9S7a9U9jirhBHoyzXX4yX5vjkjLX23V3hqTW",
  "key29": "2RnSJ3QBdLMmVJ4FLukFGU963fpVWTYw73nrMFTovCCmnk8ZhcrYMK2nFw4fKN9rXW3yZqCGmnLoaE1vnFsDTtB5",
  "key30": "2hBwxxkkXmpiTbsE5px3GCfaRbgFGahSirXqRkuqVSNg5CRg8fvT1BWgKaKD2rbu3AQ9nUTZCZcp7RnS1gc8CVAx"
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
