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
    "5eCsEQvswfmjvPHLpwceDFP6ZKqgesaixLY9dZiBFsb72giGkCSLxcjLKyZC6hsgANhJeYyqmVGYnm6E5cZD3Btm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41CeQGtuSXNNNdKnnLDb1EJZ3kzHVhPNDoj3D7ph9QZpUjzt4oCh4d4Et7VtefMLZMQ6cbkkMCt1Wsb9ctttr65Q",
  "key1": "2fypCBu7o6gP711usQREUYm91g5iv49TLTZHubGFdqubaEn8auVUx6HxanpWWEwvKLkeKiK72fhcwDeu7mLgsaZf",
  "key2": "3biZPQZz5qLqjAZU1kazzmCtM3KvRS33mAUMKxwaau3YFcBh3YXbCEkUQpf5BYRYunZn77Z2W9CjU6CKKiYLVrRK",
  "key3": "3wSRqhJXVS3dD4y9tG6uPPxKJo48koDEqWypKZJtbjchTYXFHYm85SKdvpxk8Jpcg4pAdhXDQ7eNHi8ZxLzSZcpv",
  "key4": "42RmE6DcQ3RpTRtttMyDxVzF7KDuUMaAn8WTfBWDZdVBZbZ9k2pdaHtHQ4CUnfcjh5215Tyx9J8J9Dc6SjzDeuLZ",
  "key5": "nyFB3UoatpSkgu1HwjrsR9aV5PikKHSwg3GMqH9L3hfj4Bz4Fykn3qG51tRPJ8x6fjPRqJrpyCEMrkVyUs4QhFc",
  "key6": "4Qxv9AGRR5E3FG94BJ7GSNpcRwkexFksdcroLrsJRtpLcKt3M92wHEzpBdmCJ12VdUkebYRJJ7TVSTnR2Q1ePSLs",
  "key7": "35Vhz88EfUKJptsev1DLnWL31c25UFr6VpnLUZsWaTYpLuTe1Qw6mGJCkpHd573Ri85LpMxUM3t2Zhcd3nT6EAAM",
  "key8": "5UhNFYN11GmDyKgTuCLqMTfEXvdd1kFKQTrgGhKwjQkyhKxzC4XgjxQ5mZiqdZ8k92Q5B3xCrdn5d1QFimhw17pk",
  "key9": "3jrhbSgaj6dASkLyo1p5JgrSx6WxvVaDhrVBoKY19JvXDn7iFESbAY6vUM1MozLMBk69d7wNtR6MfXHPG8Aq8bJp",
  "key10": "4F78Kqbk2xdN5t9WyzaAN7aNsjwpPQeV37hFVbDXDGhuLJx1PUG5GeCNwcDQFz5t1XKpd57KSs9pMWVQXk5TL6Zf",
  "key11": "2oipRByoYkUz1dTAfLsuDFbPWd6Lm42uVdDCPffnj992xaS3y3JKrt3vHdtBaLS4jnmSomv4rkfx7E6Mym9z89GS",
  "key12": "4nmJdFKCHWgEvpfFzP89qDDBoy8LMdHHFDTvmjTqgSFMR3WSDu9nXgV5PEmSHq7k4XYhZeJNL3aVyvULSpHEsD7n",
  "key13": "5HxDiyQ781txwx7csLLwThhxgJPYGioNqVfUKoc4wFD8qCtVBvTuVHZJaXyrNBWY87WR64WQeYnhFcJKUXCQayxB",
  "key14": "4gw2k2LX3KWskrNExVX9PNcrZNTB1NKQFo8Z7DUW1n8kDCkpbrT7L3SrsAKzpB9YJVjxjeTdmUDBpqNokpUgHSKY",
  "key15": "4CSzoXutmXgBefL6ixEAVJei2wsTNXQCqeaeR6GEfYSUGmiCSbXEnDQYd9fSZU9CQJnuyEWXKC74hkNpxGBZcYfk",
  "key16": "te6cDSFSCRb2pEod3P7M6tWQV49Y9xfdL8qJKfqU7SPJSvTg6Pt3fF81SnKvAsGU5bb7JJobvz5dFw3oDBmDVmq",
  "key17": "4qQ8CkXvuapv2osehWUGxMWiMGiAM4Z3KeSByTsweLWnzPDfazXYheK7WSykdJ7sWiLUk82VUZfPb3HYby1PRAHG",
  "key18": "2zSoJSkL835R8X38vMqyujZQdJi4oUsHr7gWpQf7SKkTMCa4gashxqRwpEu1W9yZLUb2QQ1UkY4i6CUnJT8rwi3a",
  "key19": "vnDUy3m5yPUAFhkm4jAyxnp8FTYnSLesxCuVnHQh9H6G7U5pHbae2wprE4pcd9NVxQaXG9fG2cvQrwL5c9hGVb3",
  "key20": "uQiDGJ9fchSKaAVTz6JBySVvsbUdwcFQCfZGkF7chZYU1qGRtMumJ2w24Ls1iTd1RNxyVxfKnXo9FZkwfRDCCoP",
  "key21": "9o1fv66wkFLSKTF6rmzsEZVDHjDucUrd6BG11JEg42WdHWbBWXx8uERChT3CBA5H6vWzGLVgJ2msERFpYNHZhNr",
  "key22": "61NrDCcqJ2GZ33cdyToDj1xJwn93tJDm68qrxzXYAVZx68zHvbqgHRAX4JMpxw6ZtkHyD2bXXEV9x6t3bsLGRn92",
  "key23": "Wwto9BmnotRoW5szSLWoY12tgNcHoR1JFUYbogJ9KyULLPYDHQeL83g739em1jhhcuhqWnrcUvrnpuCe243XP2h",
  "key24": "5XXy6NT8K9jrhUjUhLpSt4nyo7xEUFr1U2Dbt9AWj4qmuqbgYLqNJLBVsWn24THxgNjbg9VxyEWaRCzevgjG37g9",
  "key25": "3kYSy2miuzzvaJbZJANevU97iVqTqx2ATdhGPdVbSFNEENLpa3SqrW3hKbUSsS7r4Ct8yLp6JiHEMGLi9mLWsCWV",
  "key26": "PiUu6aQxUqR6XZz86K4hhChdJkWDGBfCm72RQt7aeF3eoFYsRtXa79kHe4tgYoCmeH11CScq21LyH95DPbmyYFF",
  "key27": "2vPB6bj7oa65ikWLVjfB85W8SvU9JhKgmU7j5NB8NVWSRUaEBzPVhfdsVwYknbrKppiu3kuvLfJvC4Tw7nmC2iJQ",
  "key28": "3htBCGyYov74Dkq8oF94ADLBQobysLJ5UsVHEXSmKTi58xQ7k7i8UszDcptrzb2X8js4uhDyF31FfV9dRbsR4Dmb",
  "key29": "5Dz9Ezn4YkoisHovBzRoeJDSqsuosqCnEeu3DL15nzJehUea1CD2UQd6ZA3uY3mnpE8tjyR5FTZoUAobBTzjnmuz",
  "key30": "7dNf3hdVSgaxamvx26HGi7XRbYURcnhjFyaNmad44sX4JjJ2RGbiNGh1p4ASJQ6rj3dS6riy8NuJtyM1pVJJhcv",
  "key31": "3MBL1v6FBVhas3ZxBe3uZdDGu3Ge7swmVAkvZ9kUr3zqzcLuSKQcqugiie17zMo3quM7p5eqtPW2E1BLFXrXeddU",
  "key32": "2FfXAFaGJ8VR8RZTQ7rwTJkT7icCWEF1tuzWS3cSu4MuUqjgSkHCx2qERNzuucyodDUArbGoFuunX2ex3A3922hP",
  "key33": "45KKoHr8hE8rnLrkf8DoQX2yqgGA8qa8cmrt1mCMKSPuHGF4WsoinCW7oqSFN8bbEwAHL3xQ7wDuzkhSQfmXCLRc",
  "key34": "5y3wX91Zx6prJiFzRQ4BFQ5F7AMLJ79hoMSXuVsEeayUKkot6uoAt5PcfFZ5AUaQt2MwKzAgGzqCQEgqZoejREWt",
  "key35": "3Z2MtLG2r47aGHHN6McNTMnvKPjL2gYCiQwwLZhVPCxky5xBm9JsyMVeDuWb8r8W3ERhonqQyu4N2TuxSZk8ADzV",
  "key36": "3zg4QYZfGWUQu9SqEMBBjrqAk9cncVUaPDCW71npNTRqhq8tsZvLx92vHZmaKjvoCJkRnpaji9Nvzf246s4q7XvJ",
  "key37": "3sMz16hcynedYetUzAW1A9nRJzip845w1SYUrVPrQEiRZm6rFZv84p3vnGhDkNYNbMyfge1eDeDY7KjgmkbTWdsu",
  "key38": "3eWdnwDLQscBpGL5yEDnpLcYikHkCMnvaNRF8TwZtaUFinzPiHNoyLhoMtvwzEoMRC1utonc1H4PpnW45RroaSUJ",
  "key39": "3kqMSsNAf3BRbqqsdweruPhGHQzvuaQgKqzbdn3h9j7ArH6hT8i9YvJDs9s6GueihhmFx7pmPxFjnxDWWDo7w6Ua",
  "key40": "3sz9F3wsAUboozQVWyDzYGTo2NiQBx6y5Sz3Q2EzBhXpQwretBnVX4Dy17kTu4Upk1DtPgTSJZQ6NnP6wbjgkdSN",
  "key41": "5F1HhtSGtJ66Yviztztt1cYp3LKzoXgTkyyyiFFijxVnYztTAR6eqcSsBnABSbaVCnhpiCyb4YcN8QPgNyZmxB9o",
  "key42": "3eiF9PZc6kXQjbGQH4Gjpe6kdktTonSrHWDUZN2oHTryy91QS6gobximf2HnuSTgA9rnUMeS6tBbvKcQ9vVpvfJB",
  "key43": "5WNhzArtSQ8fxt2AHnwGGgNGnnrmdifPHiuhMQugFZspVYXKMTpUKsFxkdfwhRZWPPUup34RpsbQXYbdswD5Hrfi",
  "key44": "3Fi654YcYWMm4TFvaMtZnYryQXZPRqdSPhRRd1ZFtbbvem8oyuReTc39sgDzAwuizmRsPGXHSnXDwgiAL6nLymrj",
  "key45": "39P4WyynTp1i34u41GBGchF2z8LxK7SU8EYCnTihmzWjT5sz9YUGmrS8CqkNjknGHG9eUMuD7AtGbhZ2jNNgK4GJ",
  "key46": "59QZcGBLiknah1GNywseyck2TBvRqbCt5hGfjUM6MTjGtWtwmcfr9YKkczvnzJdbdvtYqXcw4zpEY4REHnp48WG2",
  "key47": "39FUYP5d4nWCwsFDvyE6pPcyUrtZdNABPmt6Wr9yD3YxZPPzPWrLhazbW3Pdp2RJU4xSiESGnnMJc24Ze64vN6ie",
  "key48": "FkLmZpAhr33AHrDYtkzN6vgErRnhi7cnskPupHnoQP8zpVJWk4xK7XwJFv4YvfkaFGwi29rLMtjvbZ9aKkJCxUC"
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
