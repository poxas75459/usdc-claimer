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
    "4Jrpn1phTRtkqUGUtY2RoqbBdQnq4y5q76ckeDNtvdm3GdX2bcrYGovAgodHyDokE2DsTd4ChbhczxaZGie2LVgu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42cj37r4cdA7fubHiiiK6Yus1AMtVdPjKTYKRXNDhb6bfdvKHsmhDRBjt4rb8msGK8XwnAqdvVj31wn6iaWAtmb9",
  "key1": "cCLAuefeavtcgyqXke3GcLrWrZfSaqVnDgXxZC6UyYyDJY2Cc6W6fCy49vNEe7xJ1jCfanqV6bYF8WxeS2Zenz3",
  "key2": "2esR74HWdZ19bhFnLA2Ndr48H5sVT1yuqo9XDEphzFn1sUzJLm8Dg5yvT5p4CU4goBSji6uPcvfiix2gW9AKj17q",
  "key3": "48WvH6DXWTE6a6MZCHv7FQeeePpMQp6G53YMx2NqiQKagCGXNU37pDYmEnUJaoeHZi71BUj52vMHitJss4gArUqE",
  "key4": "4fwhNmuhVTWngSsL25voq8xDNPxaj6kkaVNANcjKKRNLSYuJQsXh9vp4b9TjjRPLvS8Kr38xHF2KzYLmKx88UJA3",
  "key5": "2PZcDPUZqgiZMPjMczTvC73AFM3QPh2rARvihTWvs5V6cDHLnyQTbyGBRuHFi4YgdTZLGric6ybYAQmvvvBpEm8q",
  "key6": "5U5gb5Zmi7puveXbd4tvCUKru1bnWqUJAdjfUtxGhRT9aF1UhjN4jyshVpdzgiFsefMtZejEefm8eB5V9p3mGQeA",
  "key7": "4jUtG5CBMqP72SozcwSU9dyijrEXQzdPeL9PVJhqjaZ7dqJYwp1wn9UCFuneLPifXp8YMWToWPVPU16sbM3PWcTt",
  "key8": "2cUVdapw6ZppmjkGt636ws7MpthwAcTPDFh7hCjWpSJt9e68HMAQSgQ9K32kaF2EFDznsgTbEVi3aZnbcCQ5SVqv",
  "key9": "3eDJ9t7W9sEELkkhE6q264py2pA7Rvixt1PFnDYmR1rJytjKbocFkU1DkbgEX2ti9J44JDWQk2RhpD6s1U4C9x3Q",
  "key10": "42UToWeicaNV4Y5XrwFWvS5jJiQzuL3yMAodxqnwiBvhF63MBMPwccamAYKQtBgFEzkGGtK8skSRrnEjocV14Hwu",
  "key11": "8Ct9NZUoeL717FKmEtvDzUJ5GZQrWH3u9qxpL5nU2tWuyxfXzJk37LFAgZjs8MPYchymidiYpHpb1DqigdnW345",
  "key12": "LsyZjf8q8hwcdVMvEgQJaSeMydx6fR9tD1G8nedTHwKWj9JPH2KJELuffkrf4jenXLwM8Y9PZ8sgvVHxpj8ytW8",
  "key13": "sXz5gJ5HfnkKBueM7rtB282stcoyNwZiBQUzVcWqE3tN9GgMsuszpCZKMCwAWvpx1erhKhVYjdsaKEbgg8PUjAZ",
  "key14": "ekB6nVnvDpcJxDo7s4zRZynjFPm9xC6CkprPY2ozB755djygkBRTzEHQ95qydygNP3SjBXttc1ywbu79kCYy22U",
  "key15": "fTZAunfq5eZWdFgD2eQgjaGivgsVS6tRn32bWJWh4Q5pDCNv18jFB7ounTt7LGskDcLqFRLWpKU4eoFCbc6bcCj",
  "key16": "LC5dhUu6Ac46Ytm7t5EE39AGRMMSYkKMhcyAnEDrBMsLWdXGeZg97CxVmpmsoF9xUNDx4PtoVGDLVruh7HnJkC3",
  "key17": "PUUs46DW7ZE4BgJnsickXNhZyrnqFgJvqhibF9kE1ymWhXrPgactCS78zGKxriYK5XsgdbiyGAhi71z6ZGPF9Yb",
  "key18": "4wQwUZof6SPXRD84cBgFJ5ot5qTx66dYFAgMxvPthegYCmSaDKWZUEzQKBdvhHMm1JgjbTyD1ZXVgUT3iC5HtnWK",
  "key19": "5LeewRP2BLZznx39uHboqk7VEaoMzASkdvqzBHJUWUpiEdYCWTyCDPt7qSi3oiuzhfagZCiYdkUwsXUzLRXf9DKW",
  "key20": "zbaQd65g3UHQGsPfpRp47MoZ2W7MPbZub5ZQwdVZswr4DfkvZxskAofR29iyEdKCcDTKPxJZm4zfsyZ7Sy15Rvn",
  "key21": "5SWixgNQipinQzgqL1p5rXWnwnCtcCXsJCQayCb3ohBRwUUjX5upsDYWJAFsF9ZmQQkmLnMtjKqVs7v9qm6RnWM3",
  "key22": "4yPAFHzCGNMK9PTr5RwxG7LVXert9nfuRZDrUozQyxDLih3mH5LYbVybM68AjgUxUrkZQ9X4U2BuHHezum9TpQ1z",
  "key23": "5mY9JDJ3NjJMavHJPRQUM8wDjKyidAFi3APLDEZJQxX5ZMaA5TyALcE4AA8dT7DfHSczrszzYDVuG3qivEHMgBp8",
  "key24": "3TdWyhgcKawG3WMNeLHTAeiEPHU4iUw1xhuuzGVpLsJ6rem77NF8uZJ7r3poTyvwA26Pi7qXvUcDUMviyZQ3qd8d",
  "key25": "2SqLqC8QMgc1Kw7tmgTJGLVZxsi41VCaDD4UFGAwoTN32CxMGD7U8q8UcPgD5o7aEsEfuDEHmJgm4xWQ5gNZEFYo",
  "key26": "4xBcSFsGn1iqv7RyCmtpr3WLAGs6TDEr9nRWutR4nVK7dsHN66PdJRqJdZQBWHAe2uWAPVDC82fwBQTKYHUQuFid",
  "key27": "2bQUwfDPCQCh31x1V1PRyQ7bGsMcamwiNHrDkvASEDgPAfUBby1uSxu7acfyumEt28QTrMfp8DiUxA72d829vC7V",
  "key28": "59Jnw699uzHZB5UD5c9dqmN4KzYmYafPkbR19dJ1aMNKSuYrWZuUqWbMZXJiEaPXVebf2aG4QZq1YHKeymwBtXo7",
  "key29": "4YLWxrsNcQ45me5uKX9844MKBAcXE68BnQVB8eumtm6TUYrAeUuETLAeFp8DfGppAwe7fC6NbP1QDbBehqaotrRx",
  "key30": "4ksS4jAt2q6w1bj2fUWXMKJoSZuSxGHDSwWxnTNHZkbPMw8MFpJKBULQ4wtv3cVVqTd9GWK91eBSmTucVvnPL16u",
  "key31": "2GTFbw2VKgX62dmYNpCoU11NjPruJKBh9HwfcpeAv1gwC2jGgrjnnH4bmnAn7JzPjB5GDAJwLR2WegWkQZFwnzYQ",
  "key32": "4z8VVCb4V8y9uQYNR2JtDwj12krfYgFASB3YXqWxC1BXctb8ykvypv56ZTXA7qQJ6W9CKvt3J9H5pJFysQnHjPcv",
  "key33": "5Xd7DArmwbUSqZzSuGCiKY81JSgxrXKWRqy9iwDPqPCMVH4U78WQopvpk9uo2E4E4MhkLyUWcjf5WaVB7MkdNBuv",
  "key34": "2AYQbuRB8iRWNrwNqtSVTU8a9EHwWMhMoXTHs2uofB7oeVdhow4YuguypFu64ZQKxAtCabrd8mvtWkjKhZK5EBw5",
  "key35": "2rv8UMFFdb4RNDz5id2m53r1vS5Dnk1pbkUQ95oS8bXbh7voZfo537Vmbpkf9aN45nVNCdnugYqMtCd6ox6fLqE4",
  "key36": "3f7MNkn9ox5mUn9QyGVrSyM8hMEc4wcNebZ596NG4jbn8gaFJRHVQaCCR7WtzEpYWuSR1tYam6hhjVdXQn4haAPj",
  "key37": "5zEhT1SVcbZYgm18pWUFftoMRjE5YWNHxr2siTbMtU6Y1SGdYfUR26w1eSSBMhKUthzuKXqPnALeUnyZmsgvC3YV",
  "key38": "5cai487nNL45Wto1g9vRqYNoMTLeEsi8WNwh6yKKuTEtdtrfLGb2oFC92dxobgAxUkVLXZkFJptmKL3WYKY8YZj9",
  "key39": "48bu2P2XgaAZTAEWokyoaFwR6BgxocwdFT3yeUB4R5fhKYaUvfYMmgESTPRmKfnT4qkovwLb3mR74SdJq4xnz2EJ",
  "key40": "9yNwFeLgaDmJFEvWutwfHJKLDggtXZhBetqLEW7qctV1rYQ4FqgQCQTno6AwSTtYGWQTfCb1ct8AgaTYkApdbXa",
  "key41": "w6p4X8kKz2oYUuJFMNsH7WavmJdM1gKJBSRuDJASouWjz49X9Hdd7Tu5MqfBh3hpK5sBqdK8ceWygTJGKPqTdGg",
  "key42": "tYBifadBjKBKCYmsRrjmHf1BkyWNmtLB2y84o7u1Jq8ELNBBpMxrFhPuyaMkKjKUFLnQyuKz69pqtgDLM4qKpAJ",
  "key43": "tDDMwCYkA3pE5PjEzaHBNseoRBiM9JXh4BSESSvtnYTFTLt8PpeJBTAVZiS58UMpuKYEZWg7vUBrSSWVgitjTG9",
  "key44": "42Gdcz7FU7uL6wza5FPmksemMJBVsKcZjhdQq4XLzjAyPZU7DYRm27SzcMSwU6Cv3YhDbGBcP1U5V8YTL6gT3ind",
  "key45": "4kUwj2sGUWnExyDJn66DZ7d8YqdNegXW4YxV3qPsgrw2EnvT3rzn9DSD14Fm8MumucbiqV4vPGPBNnQYhWtVPGr2",
  "key46": "2QVRhTecUuLdGgkdK6Z9Gbnryxqg4LUNXv5bF667ugUcDYeJXaJpTaTXta7j7rhayksjBVc1BDrYo53vQSPX4Sdh",
  "key47": "3xaGJsGJ25hERWVyEQQXN7Dk28BXoaGjWg6hXVFxRhaW5Sdhqq57BqyFrCz8UvEPtQb1QA8HQCJeK1d3w9BSL1CB",
  "key48": "39vMn8d2VwQhhpoeZ7hSuYXDJSZ3ZGgN1xuCa4okRp7Zz87oa34TSN7qgnJXYn4hofPxH55Q7CGoo9EYNACvRN4E"
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
