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
    "51sCQNy4QQ9E3EFW5FzQ9vRipHeMMUPzJJgrdmNjdwgo5XYkTHLfDG91UpJ24wVKLWyfjjD8ZgWkHiGukFi6jxoc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iCea15LASNrWJwSHvGnzLoSASfCmzmrzd9YtxCcnV7fN3ufWWj1XwJiiqZEqms7ightu8VYqBpHznCaoEdGZabE",
  "key1": "5pu7TT3eNvjsdCm9SY4EkzSZ36g5sjQyyxhHCVZjTs6Z7e4gsWaxCBadFWMr4oXuDfwYVgZDqf6oStD7jHB9HNji",
  "key2": "5y8VdZaV2NhoqPk1mFXkvtRBn3zfdG1GhJrMbzN9MS7gcsS75xhhcicvtvUUgfkQoaeN6QJsFo9pJPVfzaqw6TCw",
  "key3": "5YcwcWe6De6c1qdVF4MC5exKWxQML2ito9p7Ff8wTLgwnK1v94Kv2WebiFqsJBpF5yX8ra9AVK4X4FDVn48Miov1",
  "key4": "2SrbhM3fuJhDEJNYkccdUsR6HfX9hQUeftLXra9GasZR85AwTFQBoWMMbPPUQYcfPAQ88BaitHKfFrnNYwW3Sqx3",
  "key5": "4YjnG7tazovgP1vuWgYF1cWJTwc8x2zr4ohj9ga8AWWxkjDGxMrXu88GotGK6DjBPCS7wqmgPvgxpXKJesYzteVH",
  "key6": "2HYUcvLontX2RQRfCZL7NFyvmtPdFVqLZdbLTfYWZBiEtvnxsudmxsyvQSMYuKA4EHjDvVTSRCa98MWaj3xkztFQ",
  "key7": "31KLgiU4f7jhfeiCLMcpjchWUXbPh8VjgE4fksbdFScZHEHLEh4UVxzKSHKmXrq2iviu67D7BZRdvLcapfvX9kC4",
  "key8": "5mnMChjb2rzXGjAiFHE7VYDyRaAahzQKJrLkibWEvRb8SXygk69KqpCuRG1SsxvDY9NpByw4QXhvGpL6fC9BTFY4",
  "key9": "2QhbkTiF4Rxmo6biY8oZjYLJFLi1HrJpsTtGPhMH43y5Pv3z1Ln65RLACEjaWkjeobYVL1DxogYf5bmRHvHSXqEE",
  "key10": "YjxVWj35tvUpVBuy4FHjQk6V2PRYNmN7rBagh3CwpTm8SKSH6SBWAHpKV83PPWikb74joc5f2e1qeQSD4Ghjon4",
  "key11": "4A4z8vfLGHoz3GzH7MaR8DcXZArAmFJRgKyHEVssLkiBXQ9W2zEucDRPjqgUFWQdPTtGz2kHodco1PVeFbcm9EoM",
  "key12": "4cdyvz36e7CQS8Jg7osxdQ7PkT2nTTsLrTJubm6HEq3eeUa52CR4RnNTL5Ei6fgG9Yu3N6KJKarP99tYb7c7pEJM",
  "key13": "smVgHkpZ9dBFYHjFu34SoUh5ToiTyEmf6Tvgtj3kTu3ZT87fY79w5k3Jz4nUNW1dpXKEPzVezgNYATuHm9CC8Jt",
  "key14": "5pVavtdcHsh3P48gQvwyMQCppYug8LeHVqHFfHhTRNuumKQpSeK3BLGuenwPnAb8UZdsdF1TqQBvFn7jxCQCC1XW",
  "key15": "w5hvuetomYHkUAcytV45jDGYbcmMjDEPXLM7E4ona3z6qKgHadJ2MVb2jVT7X6bwiZX7tAHF7FB6ak4G1xq6jMb",
  "key16": "282dfccofK2CYM7V2gcXjHdD6qqYNHMhC1Kmt67mgyKvEvvY2TbMb1WWvwpkM2xcki9hr6e9P3uePMGJKozV2Gut",
  "key17": "u6wcHm5SvhDApwzvQoo1jBv6DcMQwRqWdAbz3neGfUAg9iaGrdv2cBX1XZcaFHxzraCVapYrDtNvsvu41zERtDQ",
  "key18": "6nTB33dxutV9JwhBmAQEcg8LH3YUA96ZBKPPhmhgTg9e3FfFCYjTZBFQZdFQ63ameu7XHZxuqnxjzkrSPEmuXTf",
  "key19": "2xCxyoZ4aR6SjTiYK6y8LfuY8R1iV7YsGy38hwiGAnnouvnM7DpUsPYMcDjcdFJJF7cpLHabuH8Ar7qUiXCvvUs5",
  "key20": "4wMRMqpotCqcbpG2hvbePrExNPQar2rEq43ZERzF32o7StxiBMe628xewyBa7YvK5YgQ1o2pgzQDArmzDMEhSxNX",
  "key21": "3i643GEQGXFe5jH37isj4zko17Z4PS3Qik2Q6uUjd5xNR7p4BnRtDAQJAydPDdshp88cdfRkvbzz4s5tLwH7NR1p",
  "key22": "5bvk4i9HNbQyGkVCC2tbdJfWQqXGkCMNaVZ3VC4acyYkrDyYAZ5H6ZvVSzRwP9HAwfpz9oVHkcAcURFkWJLpVX4n",
  "key23": "2B2yqkiGtwp9FJdNSd6Jj9ai3UGQJPRWvcPzHAhUe2oQauGMg3gGVcBUhvu7BrMypkufWmqCfiS6asmifUthQYKj",
  "key24": "3vjeUmz6QNAVhLPzkuvHBMY1bsuDpxVsik63QutT4ga7WsbAcAVzTNXKcWxvuhyS9vNDoKpPGnX19jUjsWio7h6B",
  "key25": "J8UYbRHWsxL3KGJ1qFtjcTLhRYfrpXMzTa8wYRgvBsJGRS9tHL67QHA2d3Bo3242pgmWGpocEJ1VNs371qSBUiH",
  "key26": "3v8Tn6oG8ynDzaS7Neb2pDS4shv5H1EFUC8YNwb7ruJkfhYaAfSpa3V6XxyFqJ3bdTNvqe4BXc5is1MRZwfPDUhc",
  "key27": "4k9fZtAPBewYBzJq6hG7xJNkMzKHBuP171TPfTs2DTZfAWgfi2DNnZJgDK79DHm7BsX2Gx1MJkFJToTow2bsoH7V",
  "key28": "4WS8q66YGv9y6va4tzWicJdhhNJVYNaFesMmcdTkPZe2yYFhjYut2s48cHoijqaGE11JydQ9MLML6n2gbYqkW4vV",
  "key29": "5B8rv35zekXb6ZcTD7qbD37RyyG4at1yF4xJaoBKQqJS3BuXU5PRr5tPDN8x7oNHX5d8Eoir13arFLkr7KzJzjrA",
  "key30": "63X6DDd8bzZcvuqs1aKyAk4K7WWjkgohUrSSitmfB77JSZcrUH1xdMct2QYoSooQHggmGn1jgB8JSNqFXm7Hfa8T",
  "key31": "5usLbwuB2poCqkGP4Feo8ZLFJBozvBugXxYKJ9XMnRNuLz1BMLiYuQ4J4XThrPrH9zwvkdTxm8T8xTZqZqzm6QV6",
  "key32": "3pbStmGvJUysTbZM5fkz9cURAqubrtd4t5eRQ1GR6ercc5dcsJhqdaKgtaghUAeUfSjAxgvEUdEZ9eVcS8Vpj8g9",
  "key33": "4yas91erm8L2wk4MUv3cRE1qcaN62q3QY14TJJEdX3jsuRjyNZPdv1tFQoKTn3y6saarUbbU5Lo1GAUurWD8kGC7",
  "key34": "5pBVviiweRZikbA48XfghjXoENJHrRoP42a36vmuLhrge27fEihsS1y2mBKDaHtgX6ZyA8duV8pLv3nB5diBh9Sd",
  "key35": "Smz9nQ9ADrV4nVXSYXG9DaxNnED6bd7oVawdbLqxdgu31jDrXdKJfie3WmGiLeyrSTsudoWgNyW65n694t1X3BN",
  "key36": "3HgikVV8wFxp4vLDK9oRpHLBgEiJmLfZ6KrpPpwi5Ybg55QcdSMGh7bwCySCzds5gA314RmvBxEGfFd1KKdhTBEL",
  "key37": "HEFKjXZQKbNUszJCrMc9pHVNbcrac7zFXwKYqjK6Ld6Fy32x5GPP9AE1u6DtnqFqRibHaZNRL1RUazUZEphC1Pi",
  "key38": "4FU3HqSjZCzQ6pp1FHoEYhsUy3MUYRr2XdPzE8c2KXQ1i3iLY5mrqnkQEkSWjvBtDCfgo82mknJWTEvAr5Scj6Y5",
  "key39": "66ZXPQWNqv9AFUND9vTdCAQbUceoKd7fdhmc8BmQrej7UL66zRdKLkjhFAneJi7nvVy2G9d16YLKRU34Uv1LmX2a",
  "key40": "5CQLoPe6TVTxS3fjFqAsDpcgAyez8J2HizmB1pKhfNZWj5fccosdhcvaavhJtMaUjDmcEpmTDfmXoJgjAgTn38AH",
  "key41": "5hPcjkQewnHi4TJdS1ofpSzY9siUzMJ8rNohWG1m7S6D59ehrEeydDSQfLgaR6rzPoEnWJsb2uwQxw5QpngFM12D",
  "key42": "4PgnRmMLPE1LBp2AZ4vfm9HCJxUoqEs3gEK9csgGUqUU1q36bxg1Q6t68Thr2cg4iY71aegWzgV7H2YbKty18ngZ"
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
