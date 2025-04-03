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
    "4bCUC7ZaRTYY74JQQqyqKYC3uk5wKM4TVsxpYpkAbkZE8HsagQEAZ6ChrgdwkbB8JB6YFtYhmryAZ4T4o3Aq9wH5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DfDKFdXpjochNeGPSiN9iLdiQdSaSGXuXRPmDZAWnmAAWtrJBhceDcmUQkk1cWkbSDSA8GvjdS7V38PDdvhuy8u",
  "key1": "2GaUGooVgta5ADFcc36HJQmoFu4nexVYsN7nRCWSiCCfcRLWtAHcmDsg7VupiLUbNjiYTyCr1pHLDTiYqEi9bD6t",
  "key2": "B6ZK2cU2RLta9cAU7xV6WfyDFgo5iuNj3vKurGGvyGgXmN7hPBuCzozvRR9X2tN1J54ah8xVwMcLApNc1WTVxRr",
  "key3": "Fdp1BqUghzY5d27EUSU6gyAXUxs6ccmYbjvym5gcmATV2XQhQdpSioajRx8E5jQqm5gVE5zGbQ1DQvELbTShZV9",
  "key4": "5Fc6rYUKS65cWwLYf5R1fWyjRSTVhNRnhZzKSCyDqXB1dBKrLrMja9SaLvE2xKao8zXrQJfGEa4FeRqYQVwkro3V",
  "key5": "5L3LEpdWANtnP5UWV22UpN3UcAafZoUmUmwzyGauoVPKKfj196EwuqxdwCKx541ZeATVdkPpLirbPACdXrzK2a2X",
  "key6": "7J6iBtWD9abmhGuGs81oJzqP69MWiE93n3N7kR7pXiRdUaFNeR82CxgEnZ9osnrQktqt82EqDwURrGG6GpdTfGH",
  "key7": "4wYd38bwibhLmW8RFoGWqaxqgn499QUj66eH1ceYSTy6mrxztRdEFxV41qkiEGJ91Dtq5H1FiYCdVrWNZGWh1AZd",
  "key8": "4GqrMfaQQ3dGgTko32HZuYBfstK3X1dT9cZQjaBrW2Dff1hNp9ShLatzEyVnidTez2sGi9CZipufrfrzAQCEZus6",
  "key9": "3EmfksPeBUJVvkKjdGNbBU1Vvo1xhRaMSLDtFADadkBAFtzk6CJ62WPag5voGp6f8WrNRpbxfVDVos97Xe2919yn",
  "key10": "FPWaYXeiUBrKH13PhZg9Q98iHSPEUKUznipv2io2e9zfcoDFeGAmL2eFFVw9QX2Ctq4DjnPX5Mrod8d2Q9UJ1n2",
  "key11": "4ifPa4TD6JPSLvHzvriRY1q35qQxRiNBiMZwK5YZamujuzBDC5aqWhcAEda3C5AW2zne54898DqXAyvXwnV7CkFz",
  "key12": "5dbsGdUPpqKHE6xQvrHVbuhTqS4G85WcwnaRs2QdvcZRjfnvPtEJiqkuapHWRtgHQSJHUbNQ5Th9tKZLn34b43hA",
  "key13": "53kDgTVQFb9H2UAkwGdbJNyEW7zVSUkHy6wNcT8iiXTH8jadeUMHeo3ZVsFQnihS2tbqRb2XUr1LP2Hc4RqEaPCF",
  "key14": "2znS1kzYuEQxZHEBdHHXGPUsfsjMWXofsU5ea3xLMf1kPpFw1AAH2Wk6Q4txFyJwps8PDLCGDAVfWS1xGEfE8Msw",
  "key15": "4GThZCZ8WZJTwgpTZPfJnrnVMBwDkbSvx6ZxJSUWC5PuVjT2Pbb1Pz6NZoHCdw1Vx3rXEFDt3z6V65jsKqor9NGB",
  "key16": "fxK87kvmLPeobww2z2BfkcgUePu4Ynsf3G2G2K5G37q7H8YRp5jkhYc5vaBfMHg5ccj2yzQxb5ZWEKG3YYk1psJ",
  "key17": "2RjuXw47GDAiSjBYcTK7sQHev5MRXKEd9RJQ1dxtLGe16sVeqtXgoCsJBQosBXrX8bedL79Sg1VSJuVdnKcViXtH",
  "key18": "4FHvj8GG8oFcX4PsdTNREzDz7Wt8pemxwWsYNuSeBtUtP7PnZ1PphC4NDBNt6BfuVHfWgXVfy9GVSDCfd4VXv7LU",
  "key19": "2RgHLHi13jyn2b5Gj3vfTaEc8TFkfdXRUspeyfp6L1Qo6WN2perLRJfMoc2aEe7h8HP1jjBkRwP27qCBq4AscS1T",
  "key20": "jfiSvoNj72TjuHuEWcrai4q64YgHvs11rUJeiwtZECGxCLX5VbwQfSWrX4sFnMsU8jju6tBpJXR1gPnGuwTtsgp",
  "key21": "3sHpvJDudQxb2QdMSrN2y7HQsszZtbUq3b5AdYfP1NMaAiHQV8hQrdkNgAC1zpqmcvQHevSiyG1mdMzfUePu4VSK",
  "key22": "2DyyAvFQywavmkLjgz4nPsUhngNQpjeVYgJBbd5EWmk3e27tzZ26Dwaqy6AtGjfqMtEuVVuk96GuMijkENAQanQc",
  "key23": "5U5pvtLkpcBFLSfxknt6xdntuGaxjfpmGKFZX2xv69fjuUNrpuKBRMYytFfW9dKRncjapRPtysmVF78WYEWLVmPb",
  "key24": "497iW3VFATMPNAFWEHQ2eE19Bum1kHrHsCz448aZYo391zMjXh2H9yz7DvpEGAeD4ZLrK7uYYCzRWxPdbGPjRpkq",
  "key25": "4SfpbPVVGSpqzEcFhTRPAVWBK8hRfnd1RX6ebS8JiA6teCSiwzU58JsSNDkWyprKxUQaAYmA6ziW1XeRCWvf94dZ",
  "key26": "MB3nHVq3QVLgpfmF5m9sYEVQyXNMjqvstHK9wtjtjQ2yrYXramhGTw7UoRHevYF9ZsXgWwyzRcNJtUvdLH9UerV",
  "key27": "669gZPKjz39DtxthaqaBKkhEjyyJfoub194aP659iSvTt4Qw4ZFLntZCFM6kRyRyR4Y88rWMwhQvstjRFkyuC7k5",
  "key28": "4xQFQ1NjuoK5rddieSYxTsUV1ovYL4bQjeBWTY13SFSWr9JihhZG1yYfyk9eGFVCRkRZEVb6iDw5hfN7eq5CDzWs",
  "key29": "24nr5sqvPLMKsUMjeGZVVK1bvF2RG2PJbwam86Tz7CNF8Lh2AGB3CwmgZbgD8mwhXuPQZ8QAyjFVmfWttxndk1GV",
  "key30": "3UdLZh3VfYF41CpEV5wZnxmJzeaKQViBNMLW7usWDVAWdc5ANAd3sWvx3rQQsyTZBRMEH3tywye13ZXVyQRrPML4",
  "key31": "51o3XsFxzBPCkjjh9UNpAQCFnkw1dAqWwkUXW87yXr8VXvoYbtWfM7949ePaY627ok8NEs81qQn1myHnshsp5zbm",
  "key32": "54fvGm1R37gsGfkgyia7EAjvoc8zaMuxLEDXgTTvhXBfqMuyw5yUFPrptw49pfzZ5Spz6GwXWnMBkUh7gdrL7p4U",
  "key33": "5JknWfB7DT3cLxuD1fz43Rvcj4g1XeGPm5uDq9GAXuYq8n9JvJbgtfyQDNVY68DpsSk3N2RzziaQgucwGUEBqvM8",
  "key34": "2v3t7f7312KWxizUQ9rfBT2EwTWUbLVhtVGYgZDhq2KU7aD8t36GMSJvfg9ViH6f5v5gf5d1NwsGqxMkqrugGAVm",
  "key35": "5YE4KdXnPqUerm6rNe3n6DZDtWTvgr4WA4juzBWDsga2HPNXp4xMgtizT4vfrVMDQUEU5zWJuU3YvEUpok9dYFJX",
  "key36": "JyDwSFK9g7392pej4HLrPNZP87sQfawEVFwHstWmzJ2YKcs5CSFniYMnc7rPaAzi1joTJsQBXn7yQW4zNL3bKbV",
  "key37": "3d12bnmfbreSuN88Ct2ukmNP3oNSf4qc7jAU59UXftVPN62zPhFQxcmV21r5fsVB8bx6u8HivWgA9YnnwP8Sy54r",
  "key38": "3EpJmuvXH79tcoeq5EBCjhbNkLHWbehnYZ7TzwaquhcP8NScoXz29MUg7iyby52oN5XpudKxCND8krw7vVyjJoXy",
  "key39": "J2LkeadysgRRzLG1xcLRCn4LaikeTaNogZ9SCET7S49iUmqjUWkDMwWZTbrJgZHHr2MmMLG598hNzhJwGPehd3K",
  "key40": "5nXJDXUZi6jQM2LNKi9EDb88hug3feeZsTenUkt7GqRgqix6TDMoXoCcjyXuaMJZEZkQ2Sau18MjfBxnLToKPJWs",
  "key41": "4KC5Ma7y6ggQCfK3shYTWY5wj2qbW8CGEmfMKJySyCWDYCWueMKJsMce3zHDuRHu4ZxMfwbvFcAzr7eB5PBTtVJp",
  "key42": "5pTgxU2h5DRGNupmSpWFunX3wjuGXmNiVLKGXzsWSp1nvWormcvCPydyG8qfnfRx4EfiZavjmrsQMNC2zo2oMEoP",
  "key43": "5yMVBCuyZQyurh76q6bS6rzZNs8M3b62a2esvfdkBRcexSvq5ev1rWMCaRCrg1Siyaf362hp7GweCQrYeRhP31En",
  "key44": "4HLC4rDP6AWACfsRmP4WSnguHLL9VUFB9sYSBBHiawrCTDzCM3LVULJksdNQYqmmsXNZKpSxoqbJ8rHYZj6ncPXS",
  "key45": "2qZXAPayTtMTB5CZ1QZAASykJLDGTWufXbpsicom22k9vWzPab5nVaKJdmXtPHes1ZkyMBmZSAicyJLmLFXq8ioH",
  "key46": "2pdcM9sL8un6Pmba1vaY9x36Q7HuhrDn6f3jv9T5Y34P1b3vcv4q6hYcupG1LBijqaSweBuggh1Ge7t1HfmP6M33",
  "key47": "k4ruSP6mtqWGXucnMcTX8Ss8yPCYGeUQfwQXsyB97ZSQKiJGUQJZwBFHSkdG6WLb56DFLFaswYGYQDaz555S5uE",
  "key48": "tWsSxPeSp2BLVi1svK9SNu2CicHidQmddfJkWSQVsqrEvMx4cfi9pQeqxnCrzDQD6vYWQtn9LHjSP91WXKpXqhw"
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
