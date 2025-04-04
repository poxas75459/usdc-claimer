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
    "2ZMJf4khSXGCDZKm6G3nyUX3jumJmzXxAo6kg4ja4y6d1J9s7cQjBHVTswaAZrV29agxjSACZ1hWwo3RAstyeLfF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48CLnC2HH5HyCPgR1RpRKSAJZjPHq3VAcex4UhkMywTnGGxWmdjyRP6Cn2GvUkyK68DPexTB7BfPyCMXu5oej3Gc",
  "key1": "646kxsCrawbs9rTGT7HeEzZfFAgwiWbMkkk4WiSosZ1tGbQ22ULNpVSUYJ3ZEGSktN92Xbz9tfzGJx7RieXyqZmB",
  "key2": "5G1WKCuH1xiNyzTcMUP5JqgSgUpTcEwWc8HsuYse676Rfkf6A1u3kt4PXBv2PE5rHB3BeZHpoKpNJY2h4MdGnRTS",
  "key3": "21gWe66avWkKpPyz19hqMoY5ndQMvpTQb7BMKDhBGULSkeWirL3sBX8ZVyqUBECNj6FPCG6TWrJGcT2zC4MVa9vD",
  "key4": "2sH2zjHFNEuownJTp4fPpJYaizZBKPAezMuMNKiLUhZmGsJMqNZkscL8H148S3zF7srk3TCkdWBTK5SvRKPNHtG4",
  "key5": "5kLHnCREb23v2yBM4S2nT2zpiimGpwzApiT9m2C8EDZN7GGGjTJf9sjPRHLrPAPPHWqo7aiwoo6ZrfEyvGFeLkYM",
  "key6": "3KPSLuWwMeyW5xea9xabkr4LpBmSSDjshWJv1dQXFMnPtiWU1gbfYM2XsAwinmjVqgMXUDjJvR6iswvP1cQ1h6Fa",
  "key7": "2aTL1Jiw9NusnGuUgiwQRiAtzcDeLMoPLq3NBqPkcmQhTAnarChP9tBQWUfKv4Zt5SomPbXp9zaofpvdFfZqhJbe",
  "key8": "3C1zz5iw8XpNW8e2QWyKeuYxf8CVDskmQxdKcAmqGWpnBZjTnBmYrdu3YENPLh5HvsgCyEWMUCqVtRdispXcdvXg",
  "key9": "xYePKN6GcScegtRGYBay1KBFBcxS6KY4P7LgUyK2AYDXVPkVWKjKjcosmcmqxMmcxzZtsn4bnyB33dDjk2n9JZa",
  "key10": "vruMfBWmN9soUBLEHENSPyx5XTDZMNwmepmBJ3x3KDYwGFqx1Nuk7Ff1g5yv3UGTFF8LtsWxuAqgCvLZmm6qPe7",
  "key11": "4snAmJXMbB7WiqCeQDmMTtngcKQ9SWxBdGQ1H7pFwD7ENWW1V6yJ5zzzuR8JXhHd9RmfrGDMan24d1uMg8yBd9Q1",
  "key12": "4i5tvJBvXpLpoHDDa9ERu6S8iWVtG4kS1H9KWBhqzNMybjkeYdXeVdPSWfHkcmFE3BgGKk3gcq9CHgFZEBtGfzqm",
  "key13": "3LxXeQ4FDxotuo73YfvZA1W72Hj5VoU4zuDQqizspVQVvorDoFGQuXhQ6oLM8wrRAoPDAARBRkqXMaZtGkixP7Tp",
  "key14": "4FHgNLWM8uogKGQ8UtFskFkZUfxHLW73NaqAtgnPHijxUFfxQKYYpwc1sGJkLqw1z6AN71KntahGtpDYfLKmG4nh",
  "key15": "3e1yxKSDc9YXNxvy2wpTm2sSvuzRQSzdny9ppT3VABmXLnNsEs4TWTgPEp5kKdJV4dbTjephX9Gw91hYAT9Bw53J",
  "key16": "4XRZ5JL6Dz68gyvZvxA1FbsSaPJENBJdPgBnysoAJbZ3zEUx7bMWyXiipBzYuhfRgsyEQoLDcJFifVtkyphck38j",
  "key17": "5B3o68942iJ25fyqYDjahGjQkCzn9Zss46wuNTedX1wKr1HAjVpK4xRRNVg4YBf3AAuYT5EvMoXe1xoko5jPNT42",
  "key18": "3LRHmg9cXvHv83QJa1jTmVGQcRgABz8QtMKM3oiFr99dPEQjWrFHZXm5UZcMAYuoEVXVjXGe9CkfgHP5tdyeMcvz",
  "key19": "5EfunzpjJCVkF6QxmKerCG7dna3Cizrrnynvo6emiZFjfsPxBvkicyVeK8bKk85Fho214wdLgdLd2GzRJeq4B2vN",
  "key20": "5VNjL2i9xqJ1MYSqjCJwo3dQzipEFv4tuo9pZh8N7Hk4Hm44AEqUKBwdSN8jsSBS5FfM2Gh73eBHsgrNAYCackYJ",
  "key21": "41KZbDyZEFKnCPG2oPxHU1Y2mBf3Za1eiKRJ4hheMQLGswZwWCEbQ2mX4XSjWPzfWK5LnaMaGwMRpC77s3DEuAhq",
  "key22": "4ACcCpabQ69HCad7Q7dDfR6Sfpwr9SuVFvW7K6ewbYknpWWGmqttBFprT2aos3qZPVmLSshhWeBdaPhSDqpFzAep",
  "key23": "3xkrMyAazbndhr3nP66tQEwBeLDqbCXCvaxxEEuvJqJyxJNfNv5gwTYeZskCgpi3NwBX833RQSkzaik6qKmp3XRp",
  "key24": "4hciTZ8jG9tUQU4XSZ4ibcyz8jXB9QbsF1p5nDYRZdXveZRYV611XBnaz5AwVvJeA11zryhnx67nGCpBr8MEqGdV",
  "key25": "62qDj5MXLS5ZDMTdPHivKP1ceyV2gbvABVsaJQ3AMgHWAHYGVjbfxhteQdbzTaat3CkL45K88mc3DVJ2uWM2qi2S",
  "key26": "336zmgPxTPQDvYQHg9zdPK5SocaAi8BMdPvgfEsHt8dDbPS7B1rpSKatZGRuVdSPz7ghr51Gw1WtkZrkgm25UoBo",
  "key27": "3Lh3qVfy6dqCbEBSzybPvGoxNsmGFiyc6uow83gfyHyQP9UGxpm4SNk2fY1c9PCYb6aeXGhjrswhp6m6g4VqFWdC",
  "key28": "5hJCGfa3e6kAF6c7vDYUUwQMbap7tQxzDNHK7nUY9pF4pomvnQ2fjD2qmwG3GKGipkhexPQw3v9tHAtB9dd7tuVv",
  "key29": "5RsR6YwppcYzwTZbvRpmVcGNXecbf6sbFdZCiGHyWHA6whdQ8F5nZRr6dQjPvxJtKSAdNnBETybJE6fTifb7K52B",
  "key30": "2q5UZfVx4HgJQm5uD3FbfnJFr3MFDfmbT6kwkF1MVL6wLMGaw3bWCf2cwrTqgygHbv5yarWPXi2h9cRreNr3rKRU",
  "key31": "2q2FXXZD2Es8kCcQ4QHrad255bNYG2C3sVgU7akJihbvZ4GCd6vdXYCqXko2SDSftDXSA1x6HxKDLvc3aUCWZQEZ",
  "key32": "5SVMnKm2353UBJsiwXrLEoQhKbeLh8TGhHQmKwR29EX7QuKNBh4rYHq2MTNyWHfn5X7Dxx3eD46HRZDekJ93Vunj",
  "key33": "4vBVgNjecijdsNbNnZJdBivKkFUFEJAEJCPD3V6mBuFeF6YSM4jWcwfrn1CPv6q9gCtnc6Ds9mYw8mUkGgEVu86h",
  "key34": "5VA4yjF8yDUWSRVyrkqcmDvP4Ejx11ocT6QgJeEXcRe6VcmwQGganFMWojohNn9deg2QS9LezFLqV1eyqyXrpPD1",
  "key35": "5jhckG8asfswjBvhpX86xmC29E1FGdY4b9889qQmUUWVhHCor45EyQ3arfhSKebdGcbgcWid16gpyMkSVsZJb2g1",
  "key36": "5oUciXUA4FVcqgKvwUMqKoUAu3dagskxpSBGoMX88gRpRBt3u6JabzLP3GuCC2X31Viod7WGgwfkrijXhyShAnA8",
  "key37": "4Uj2YGmzWbzioyef9Nd399wtfokQemUQ2UzyPpHPt6RYCTEfrxsV6eNoksuoeKZN8jPzCgHuwu4pXjR4mXDyrU2d",
  "key38": "2zU9rC7ngMLvMmZcnAojhKFJ3y4TjAdBbZUa9Z3RzibQmmtkKkKnr7nE5P7e7Wa8KtSyTcdCds8jRHZZVKpcZ6ji",
  "key39": "5UZ3fRGEpujiGhsfYvdo4CoCr59ZMVeRWXHBBwPdfip2V1X95VJDKHdYaUG2GmDF5DPEbA54aZ6Yu587usCdM44A",
  "key40": "55aZ8vxi1ptQWAQDuKPZgabbeA3btcH3dGuqxbSN8m2RgzBNf7JGzHzCA6wipXNsidGewSEDnDVssqfufnFV3w6e",
  "key41": "26sMtPsVWiegUAsevAfD7Unnji2ST73wr8AjeNSrNsZBhCXSBCc3VGD35rg7DVHvhGSaLPW1WM1g369R33KaUwSn",
  "key42": "4AkEg4iApiPVu1YUkHJ2wzzBRskvbUvyepMVNd23HBQoneXUwyBiNkmmcukJdLyYhPeRDx73yDNrETEQNEr8xuMc",
  "key43": "5jH9iD1EmWrARUqVgveT7NxhxHAn4VX65wTxKsm6qRX9eTAJDKmWfh5JaTCNQuetr8PCkiCXJLvA98DS4FqTeZQA",
  "key44": "wABSvtfZZbWf98ZdxcvDBssUA1W81MNt437bTsv5c6ToKWiUZpQPzktW1aai7jwsBuoxFKAtdQtWdx66NLqCTEh",
  "key45": "3gAmz4dUkBUwdX7tUNBZBmDotoop63G5RHnNUPHpCAuXnD94uRmoXdCQ1REnpVMM1R2EkTs4WjjRYEgVzJJoeZ31",
  "key46": "4oxkU76raXwZEia8QKVL4r9VgLjvEZWdLHicoNqA5v7WapUi6qDZ1td2Mvo4Hg68veJmgjgKVz12ZsG2jGaxrFP4",
  "key47": "64Ukip2b3UijezZyW6ZZ6HoLZ6MExTEFAptVHp6EhasTvX69oCDVqzqVx2QYCGNmpqLKb9dEsJpWLxWxnMDyLcA6",
  "key48": "3EBPoLVEm3UDjozbHC1ZDHVYZuTVgHuKkxMzmKbv5QJko1ceACZYgg4pYJST99oz3sNfTr5qdZgmaq8SBLgDBeVg"
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
