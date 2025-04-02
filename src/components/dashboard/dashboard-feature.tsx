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
    "49BNpFQa5z2HaN9ZjB9dvpgJPPJbvvQBLU1fUnE4FovFxE27oVScQcygLs4FTvSqBt86UtpVJFNLJn9Co4Qkr4ot"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ura8U6XmA8dESM8gAX4XWCWSKwDYbxJPBSmESAQsnSKrgC8GiHQ7uk9tPCthrhFoogrxpEERm8ftEfhhDq4yBeP",
  "key1": "4aHN3fybtW19kDXMkFDzvQzSGNQTWz9Z8krX8G2jRHNqrVWPxQouqHEGiv2KRZceG3QrkYNSgh3Lzu4VzibCG4xq",
  "key2": "62px81ghbtXmft9jGQYu17RgLD6UskyXETeNVQLRfEkaBhVy416855Fiw2tatj8FT4DzsaYZ6aYh2KxFWLfNHr9N",
  "key3": "3NgJd8pTLdferRLebzP6WT6DcR6x4Prttx8khM6Ztgm3GCxSG5ADN3aKrk1YozKv1BPbz5wy9TH41yRTeZ8VnfTg",
  "key4": "4HLqNZC4DrBBFsDcW1EdS6jmvpZzuCNWbsdYnnG2izPJXh4AmaL3a5e6Z7n4TeQM76T3WU7aagMWPyguYKogTduk",
  "key5": "5Sh9C2dBcrxSY1n2Y7Lf7rU1QYBKMFzNSrQpCMTTFc7wu67THg9KAN4nqFKriXCkr8bvJczP1DbMKhDQXa6LyDoL",
  "key6": "6xzH6qBHYYt1pd6prDH2Tp6oRYWYdL3c1tKDdR9PvBQeyAWBPZ14hbJLHsxeeHuzTJkZfLpiecCsUtEiwffD7iE",
  "key7": "2xWpoYAKYy1ANAccxg9YDCEP2vUwgRoP5tUm9FuXx49Af6W86V9NNr4dDX4Em8wk44BGjd89r16wYPnP93JzzYU4",
  "key8": "3vhzXTfHoZYsasS5snJuLZUksrrnLpGyW4w199czDrtLY56ZLtaPLTjDUaWd3AvtRCKN2ogu3PYirrgAj3HSj1u4",
  "key9": "3E7Z8MFTfDck1aDfs5XBBCF5CYoYZFtmbLYRHojwarMVrcQJGUjheYJCQRF9Tr2Y7GbaWi8pCEBHwFKJSzZonpAF",
  "key10": "5bnK1oBE1zycpu4UTAmiwKtJhg6nhS5srUgWk6ycoVTjoehSTG4vFXC1kNucGt8bpp4R8VXybWNiRVuimkw1WWWL",
  "key11": "4kr6kVvHbf5s82b4FeoYnHRXkH6AstNzsFF5MRc2jCDEQ8naz85QCzSbrdafvjQ3wQffHbmrne9C5W3t4qAVA2Yn",
  "key12": "5buYiXE6SUC6mmc4tWEgWSV5rCx4jyYb7g2W62bJGELqS89S5KjFgx7c4EbeydH4UzT2goWZsU2Tgddind2L8DEi",
  "key13": "2THeM9g1MBna345xUfMNmwFJF58F8KhkNCAWLzqLnHHeUHaH1L4pfaqz4WH9BZZik97137wDKVTN6ihwBmD8JrbX",
  "key14": "5r87Y8JTcWEnNjzA5A8UrQdbXWgDCqFLy8V4mSUBrU91x5CE6pa8NyLedTw3hmnMx2FM8Pz53gvwAHmTSWNAyJ6j",
  "key15": "4wEz4MBo5xbjMjjhhztVWXLRhm6kStmN6wQzvCq6bzTkbG2nY5LN3aDppP94zAzU4r2eJMB4yfuYCXLV5ndEuEss",
  "key16": "3oZEhCTG7nDpxqA392mBRmCzU76ZrMBSjtTeiCdpKzNJkwisRKbDn1Wsv3D9q3gMFs8AHZA1YUPNBKgm3TtGHzBg",
  "key17": "2rq7MiXpSi5fsx64eMBDNzuNnzPiQ73KpB7q5n3JtnSz8GXZKRPToGNqTmbfoZM8TsGW1h1Kndi9RocbXC2T84hD",
  "key18": "5koGHWjEpSPfqHQgyshxXcPpX9yPCs8hRU2Momi5ycaYk4wbtQRYLBDKFXmDxM1jRSWC77McveSL4u4RAhZjrkjY",
  "key19": "3LGgy8HFVAPh6rnTp1KacUojFZHReUkqnxtDJesfFmgyUbXBZWmdku42p6QXvL7BC4VqWhV8pidmV2g9NUxUdbTJ",
  "key20": "5RUALFAp9HCPYkKkSV4xoCxDcQGZhrcHvmHkgc8tocJ6tipX8jHEEfX1Ne9VBd4iBqQmpY92hywrTGUbqhXKiAUV",
  "key21": "4QViEP8MDZN8LLS3zeKFArwrdrEtD6BBZHrHbEo92uz5DpouC54HEbMGBGKV37J3nnd4J6FbTkzyL3iDBpoYHBxX",
  "key22": "4Eug5YkYJt8T8ZeEooKCP4uLtfC17v5TXopf8gVqW5yK4wpVfTJvcCytf7XENUxXxgMFZ1nLgGLEL3iabMJg2Ym7",
  "key23": "2uG8pJKWLRjnFXv94utZj3SQQy6z3BWBZfdEf69eZQD1r9qQDzexxCgEiEmuBgwV1zXDHmo9sHktpZTbSb7MDj7E",
  "key24": "4N1MG1ajHPhuhEhexg4F4DKqoJbehdmWoYK3L5VZhRvqKEUpsWNDHa5qbJhfTbC8EMFcZKvTBks5gNH2r1YBsf5s",
  "key25": "4shpB13D2dCbQN3iVgDb82dWYdozKHPnyJuk8qE7SCYPR8niKahvpBLn8nGLSZN5XpeXxx3KgzABhZ1jvDjgbAYw",
  "key26": "55Q8niZiHXi5c8YLaVxNCxquaNGZ2qBhWjCG4AEJ6DPcosWfudYEa5KLi3ChWx3kGyxU8SWQhiZmc5V4jUKSNVhy",
  "key27": "3FhKCtVpfqfWLF51SCZkuEj318hpgFj5j91vsCyvFjiyButUaadDtiAghBxZUh6TjbgPx8EYhT46UJFXpXSmbDpk",
  "key28": "29hapg7UvC1yDGoZT5x1W5DpueBX9HtadyA15fkeoAf37Qsb6ATK5C9VZgzP9vAS43BMRJPr7xsXAmkfiE51QrhJ",
  "key29": "5UZi2TwSivbM8abbCT2dM7S4xYdbufNWFUFPWniyLDgPj69d3Nz6FCSuDz58EXmVUUKMyDVzLTjZSXSGbmp6dM2i",
  "key30": "2CbYhwKD9CCz3yoveLfRBaUFMfR8Ys5JGGtHcUKRtHQErrPrsg5zA6wCJvZ5U4RJLYaTuGp89gi9wU7f1ad4S2v",
  "key31": "3VJshey3eHVsVfAZ41Y3Fv1YP33K66MNhBiUxEfbogbXiEp9zWUrkPctapPvN2UmVXxjynM9fFACvYzi5EuXD1iE",
  "key32": "4RYamw8hGokx7UMgfiKjvD6TExyLabgUiAP9Gu9Ph9X5jktCGfn5h1wrEUnkQTrTxkEPvLrdjmHLiGuS2HSf2TB",
  "key33": "3EhkokmakYyTjHt51nEn8V9iUHr53CibQFyM54AbR4N1Zpc4Yuj8FYpeLMBu1kcpLJ95hGfoP5Ekfh3nUbFopKNC",
  "key34": "4jyi45EtiFg2bs1i9GTdzACVs5bNF9gsk2LCYbgwwg8QWir4RfEWuYtW8DT58TtYJBKFc65W3s7MaStxvbUZFvFU",
  "key35": "p2VUicqd4xYmzZuHjaCSuhVLgRdP3efFoCnGKD77mLwkU3HGy1wUrp7je4vqs1MNiYvXNmC6QUWeLrfFhsQDWs9",
  "key36": "5bXhvencWpHJsDnY1HmmJeg1Cf4dvjCRMXSesgJPYMEsfrubYryibZknYe4vup8PrvJNAHByqqBqGxZipYsfWmjw",
  "key37": "3k3iQjNBFCrRWMbBKKUoh1zUNGTMBvBuYXJYgMr5695qHr97jEZdTHqsx6kTDnwF4SNhqdT4e8efwR8JZT3Sp9rV",
  "key38": "2aVBXfE66AGMaieh4c7SBMvjGz67CT5nUURfAfiDG7ZVjcTiHnTgTYjZ2NjJQrUiUytP5FhrUDdSZkdJtVqzAAMs",
  "key39": "35KovTDTaE7X5bTQefK4GPZksHN7XKmAYya76w3ko19bn21ukGzAPwTEtd3AbcFenfkrDocJtjPeLgYTYS7bAPJ5",
  "key40": "3LqczDG6EJD6jGRiHCLJRoRo7ioMhAWMLTKVY6SS4iZh3sGBbXjeJkgoBxci7tUyevahDN359Dv8FkZt5XJ6pSZH",
  "key41": "2uwbMDGeJ35dDjB93kXHsvSPPPYyDhm4kXHppRpH7C4ewPkARSCrzBZ1aG1Vb8FdQyYQs5rdgnVVt12d1iQ1tTam",
  "key42": "VbSR2aX7mfXHM5XS6AegpGPhy7GRV2zbfFgs2QuTenemiLeb5GZi7KZsDbBYHumoJNsvu5zmU73t6BFkUunJtAU",
  "key43": "2LbNeJ8svbbdkoXrsLbRqSDDYACizFPrFuhUJVz4jvKDqzGnm8bewUNRnAeWMVznuSxAsErn8FZjvDTKB2txpWzh",
  "key44": "25AGEAmYZgz24zePohahGKuCEMwSyt9hitamBuy57wMvcVaDPApRrMnefC2jq6vpopGXa5mUJV2ZmgyvJD6q5qhK",
  "key45": "5P1KhaHoMZjzhrhkWs4qsTnB21Sqp1NMF91VMwYuwvD5TPK51yUaNdyhPngmgHyuN44m9SyskzNVdLiHTNSMFhvS",
  "key46": "4mS9BY7vp7m6SoAZbGwugbaeNeQcC22yCE44yCGon3PaSmpqNfUhv1GNaFQXphbPmNJZ2QSrG3d9jM5SEPaAutWE",
  "key47": "2qe7fJMSyaSxfe2qjMU3Sv9QXs9cPpYkTVyL9wahFzk14eWeUBFwwG6femFNzQVedwKexP6oqm4CDFUhHkmjaKAh",
  "key48": "5MVTkQugi8psjzmDLr6Wmw2TJfHSSg6jALvpyU4jxNiTA7sEFHcNjNK9Wd7V5i7WpLkzTfd34nfzB4s19yXAWg83",
  "key49": "5fpFFzR57Aa16Zz9yAFw7QSLLgnUe31jWa3WuhZeAdQyQbBi4cbsLM22rNZ4eaK9Jpmukiynf1TG5Hv98AuzrkDT"
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
