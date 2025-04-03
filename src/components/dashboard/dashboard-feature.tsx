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
    "8SFuUmjYPAoB8b3UZENnMuo7JXujQ1Ymydk1DdVvRmLaPtq84QtP9kXf8PJa2d2x6HNFuFq564cBFCeaHTR94t1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mNzirw11TPg2iR3L6wkFJQLP4k564TN1t3dfMAqEe9bPyL5jbSJSVEwKGx3NnEJPJKdtFt29mxaQZE7DTEAyXLp",
  "key1": "2WtG6xfLxfchaX8PbcNvDCyaKgdhc1pu6rDtomLv5LJgBGcEDRMNy2MHhPT45JW4HixXyvA4cmU31ua8na9y6FU2",
  "key2": "Pp3GAu4kVSp6FYTNUMi1usT45DeQk4iJBnHhfa7f3VFb6PZfBujcF4woyhPCPVthY3z32NQ896EzWcSCRMriLtr",
  "key3": "UMBcuNTaZAVks8S3sv64WM7mCKBEsP5NppPz5SfkEhNDngR8vhgrvnh9ezH4BT4wXmzQHj1JpztWwZkJzr5ukqr",
  "key4": "544s1VhxHNnfzysyLKReidsa8Y5W7htF162kEZAfZemMUYAJR5Cb75uhR9iWWg7LMigWNf2jchjAHFA43bVw4Sxu",
  "key5": "5ED43HRiSQjniGR4zm874f8xCRftPXDja95SRgGY2GRNH97snD99aH589qzDxMcavFFXKMsfZvcCsEYPoSRiuabE",
  "key6": "3FY4GmPeRPTwv2tAk5z882jtzaHnnvbG5TXFWiwvNv2QqSE53mTFyzyW7otvkXsFsxnn8TBkkCURYco3HE4nTkBw",
  "key7": "3eKAeKKzKk5BGeJvXXhZGJoW215SUTTgAfuLtQc6Pu9ameC8q9NVsiZq2wBZj184h2BD8hjYGBbMczhje5a4NAh6",
  "key8": "2P3FCq1DigURfotUVPwwyCtWgqPCK9ormV9iEQoibCS7ZNM3qiAEqjm69cHqPHmuZJYkurid8HtbCkf3bgGw1887",
  "key9": "2MCtZ2bf3eA1DNgLnEs8yAj1w7PfLmppcn52Gx3epyavwRqfdJKTNuaM7fCCt1XLvt41qnHfXNUwkDxjua2XHJ7h",
  "key10": "xZfpXDni1m8u9dSWCE6he8hF5CUxr1RS7TvKk2T1MtVVW19NVDfcSoS6HdgRrKM8KDfyJCNvSSSoSBLVamZWxua",
  "key11": "4mx4PJvKULGbgYvtyY9dNKuzo1uJym8fFjVtKLAACTpJ5KTwZMz2iWLpRxsFKioY2UrFRVdBoWPMR9dmDKKVnEiv",
  "key12": "4g4mV67WgVkyW8aPZNUzzf14PshafpRFsPe1P6UNKyacPs7URskVbXevhM7qDRa4RPxeasow7MocecVvdsPmSwTu",
  "key13": "2SuQhqcL3udFX3mEhraSvG9KJjK2vRmoWgaaChWKx3W49gzV4PDYWXduRVK7TmoUwRedFJJDvp4bQZFzik1MtTLh",
  "key14": "3BFJiyEDs4tTiYn2B33zqShdmNsz5H1zVBSjVfdNfnGhReF5yeqfdWcr8UciXDBHZ9JydqkY9v58pE5QfTVcZ8nG",
  "key15": "HACpTAPbkYThUFAbuvQUsycKBi5dRbez4BRX8C2YeWEtdmETkhBvNJTkHzPrSVVZLBFZiXFz6UEqSdypYMuNk3z",
  "key16": "2QNUti7tBts1Aj1UjkHhXb1SM5BdGdP3RppTZj7SWfgKEs5HRrDYgY8BWhnJNpMEigxBZZ7yRWQ6h7aMs9NXJ9gP",
  "key17": "53Qzyy9ERvwVuMTyf7XTPKtF6Sa8749Z3Pxzwx8aAxSbJoGDdRq1yibxBUdeqyNxE1HGBCHsRN2MA7mJmdXGLXSm",
  "key18": "pC23Kxf1UgyeaBDzc1FNi9bbFMYAcDoi4nL6s7RgtoV1GxTeTFGFzMLfQTP4qbhdsa2gVJSortNcofBDfr3u6Yh",
  "key19": "4uca182JwMbWxzMF731edZ5sJYGhSot5TbYBbHE6Gb6SJj77zCRep8HtDkA7PryCohYaxSDwREpW3dMCt8rWU9AW",
  "key20": "2NhYvfbtaQxbSkuwakdRsffp5SxZG7cezEvtw3eFWz5fUCE6Q8wrJ6Wu6mRLsvYnt6GkGHQFfnmBMR3wCf2bhYox",
  "key21": "3s7nEWm8SiohoTSH7NE47o9ftfh4UX6FJwNFGXmMsPoHDgL7wWpKPWSoSiHeHaMAqoKujeW6FM1G2RhjDcerAw9F",
  "key22": "4mLmCZpTWjQVthGe2UJRMGS4eWicjQ9GWkQdwbmfFfDTHiin2pjNnVgYzq2ygwrv1BoJuUaB3Xy1iTAtrsVdRQVa",
  "key23": "4uAMkhZ7SumG7dv5tYrejhyv5odrU1PALvRtrNQeSkXrAX1sfJgvGspBiEiyHaTNApcFaF6vnAC3nSinBf6TArNo",
  "key24": "3QHUziowzLLvuKpxnQiJwUBAPUawkd5gzT857xhLxPb2REbvdSnL9tHwMHuEusG14iahX8sT9b6D3WFrkr3aYJb5",
  "key25": "oAaNn1jVvZ5TjkPPoRxR39oGfnUH77BAGrWuRCS3DahaUhC7ubo7CMvZRrycmZgqiPSmSr4dUTprsb9bKbyafhA",
  "key26": "2CPPd49QnFAkegq7hfcgGMeMKLcJ9XAhSEFpX3tAixY9u6iKTHn78tNJHwKavgBFKVRrXz5VUkEnPFjh6aqaqGJW",
  "key27": "4ujepkH9xWgX9VBzgZfE4YGpG1uRCetTffN6haws5SSS8jn3Bg61CnsKJL1YNWtn6bRbEp1AER8VWn7vVHV6VCAc",
  "key28": "4vhVSNfneKwExLWD1KZXcRRd2SZPZRqim2cMuN9aMWs19BHd4kbpEfFNPYbYCFjuQqJXrXVaU98gPnE5zS5wVtHz",
  "key29": "SHhAdZRjDtpWJgqBaf8exV76gmMQZqAkEZx2YM8jmrbny8ze3pJKiBZAbS1gWqASjt3ZpYsnM5RfTHnkK2ffwkA",
  "key30": "5w3xMUxaroRaaK3YJxqZUSaLBaNXhejZHwgqgTPTLfEhqPqf2Uni4sUALscNsrHqNC86dNLcu5xiDyr5NV8P6kNd",
  "key31": "4XNKfjVchbR3Ku6to4TJ6tQmcufW9yKHRyrsddV9um5uV7GUSo3defbpEeGGX91US4nxSnPx5UMfPKKm6zQTJu7",
  "key32": "5zp9WsgAxq1URyNnnJbEYht6gRi28TWw7ZLDSXbixoaXMTCtqGPpgfetdSgk2wtG6QENKBf1viCCNwmXqnA26szp",
  "key33": "y68UJJRX7Tz4vt3WbVg5fRmA4yC6pv6mvkavqvF8MLmzVz4M8F8QN5ZLBPt9g8CuBzEmDAKt2nK7nqVNUnHPp9L",
  "key34": "2pVcA6cieXciEfCgSTeA69yJC2ctQFRDrDNZXFsHhqMyuiKdJE8eB3fFvx1hktVxQgFcVyLkcLxWQWS915ZvcakG",
  "key35": "XebN7HhhCudbHTGzcqUgw6TCDzmLeAx8npj39n2B5zuyt7z7USQ6JVjFGX8tPqw9aGCxnXfayFQgY471k8eKSwn",
  "key36": "hkwM3f8X1ezU8QmnXr6gudkhh2Ph6wW5iucHNDhZK1LjZtfTiovWEf74pLRmvssHhbFgc7qGqCooAvF7aptJp6y",
  "key37": "5omQLr1z37vr6GCMxB5bVxGkPSgvK4KxUvgm9Rp4fNBhwh4rDfbm3XrQTv6Qod1viV8NKcwquNKvAAuKGszRB68x",
  "key38": "3h2jnjGMQZoDTV72mbKeyr9nXnsLeYPLLNgQTMBkM7i8acZebeLDZT1VjiuQyttmYNJcVnPSTztfP7qqVWxsEUMX",
  "key39": "5tdxbTPDTWBDnn7ZiLB9Z7F8VAEpo6yW9mYwsWwANAJMoXiaYzj95uSyb6F3NW5MxtDoAyF5ZCzG4FdMs3jogEgu",
  "key40": "2tTiTjcmiNowt8xuUkiZWcGpyYgQuF7Z7n2EGqDpsG2nBSb6ZwLoRcwZf9R1bLA5WDuGsriddN9MvZxg2r9TF2cD",
  "key41": "5FKM79izkiCCGdTJa93ZqtUgAZjHRcM7VetTNrQaBK7N7xby7GDDrYWrEDhpQceqNL265JA43Ww81uvoHJJh3KAR",
  "key42": "4pWRuUAYn5jfgChDyD6iA75x921aLhmEXphFbshDAA6SxuQ4pKZgYgoP2p4bX5WsP3yph5TZ9T3za6xq4y6VtqNw",
  "key43": "4RGpfks8H6pyrd2MyiC8a8xQkYwBs9hZshaYm6WTSxsz6xox38bAVPAEchdaqJhb6yZ4JrrVtKRTZzdYj3t24oZJ"
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
