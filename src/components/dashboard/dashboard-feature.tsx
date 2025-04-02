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
    "2dGCvPTjJJbka7CgUtScVzmbNTctXubfn4cHS9aLV6LsicGXBQ8rrDv9yJmTrgr3Ersn87MWeYgzrrjQCdDNKwYo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64tWhE6AfQytkt4M9siRji17b8e25cWroNuSZdFpdd7M81QMFM5NcoSKraicvVmpapBCSkpMaF84jumptrkiGvPV",
  "key1": "2NsRJLibs6VaU8K3yzdrzkxEsNMMUjS8bKFoHUigjDHRAWejJFjKWKFCiKx9r4j6NuzhYEy6bV5Haj6hpQGvoHZN",
  "key2": "61aKN5p7Wj2WdhXkKk5op3M8YAQPkQYaP1YY56HrocosBtmnNM8Wqx2JUZuiiGjC9VhtuZJxmRHg8YP51X2tng2g",
  "key3": "4Ju13CEo7T9ieeAw6cvMqbydMWp1noFbBGuEmY7jJP38vjtULbY8oTRLcPZpGeghP2XAZkdeYNS9QrWDzj3jfx7x",
  "key4": "4EHQQuHWKvh6rY2sRdfqKnDCe22pahbNud3FnKx32iG9mAngB7HF6wFGdtSQZNH9vnx1dMksdpbbkWgCyjmB9TiF",
  "key5": "2bJQjoRmruhvwMiVDCTMYYgKtEYSBkoJzvfUwTHEQcxCU6DxoScCUu2h5JQnbtP48d6vR5TXHXTB1rUS9KjYsSty",
  "key6": "kPqe2g2DL3ak76zBHnFMKNtadY9zUPpZAxLkQ8oSJC8ypfrs5abobYuMXHmg8duHpG38tcGNFFvcWQ8A9fg8deq",
  "key7": "2wUdGcWgzqy4C2Up8Y9Ya8MNzTcdRZDxd39qPAkD86ghfaeK43HRSLM6a5Qg96Va9YL3TuXC4pwE8knqdVGMb1SV",
  "key8": "5dV7ucCHm6biFQqrAEkEw1UXdizTdxkKNTB8TYpeWxMXF1U1eVpFHqUSMSXMcPbx4YSUt5eH9CGnusfYNuHjHjKM",
  "key9": "5MRCDWNxhysBzVwUFW95EsVJgzHpZLhE3uNpF3RJJzrPoppWCx8w68Jwf3Tp6D8f6249NtFoFzhp15isNPwtfygL",
  "key10": "5QByC1sv3ziUuei5Yip4QxjCocjfAKdyKp1n4q1LAxz2tBbLonLbYiapSixnAkG2kqCKiFt9VP45VGubjyCwhoga",
  "key11": "4wy4cn42aapDEFSiNdx57dH3Cgx126YP58DPdNCKzoMXKmc7zH6QtgKRvpGbZxdvQCJnupPH8Z9tfyJCRk5VTPSC",
  "key12": "33RUrPszu6QpBWjZPxTtraUr7XTg7n4pum2i8JNLE9dNZxE1yYQLzTCKkNuXghKuypu8h4SwVxrUHozTjNnEYay1",
  "key13": "5TuLoWc8Xb9c7MAZtLVqBZnUz91kmTAPjtQNrsCZYeE5YydwSjonJW48JqVtGPt7A3DGuPbLaCWADSPDgSmqy1tk",
  "key14": "5AUjk2w9j5zQS3CBPNDY9qYY4Nt5zFkjH55GKcxiwLuwWXJDMAZRB8Byn8NCedH3zPicYYEn6GSUua3pcVFxuckR",
  "key15": "4QFgPpaTp51mgbkbsdLVYJrA1sfZGrYzU4Y25W8oTPVGoHuLJ3x9g1UytXJBo9wMzPNUGpAEV9EjMiwUMKS5nJaj",
  "key16": "5gB5GPYWm4R28ECRbCYVwDZZYLybSF3DBGP2rQv1U3qkGKTD4fVAQaKjMiKYfg7UoCnjeynq2cPLfTkVJDWKPo3C",
  "key17": "5iB7fzJjCgrGam6TKsKRjcDeNpmbxJCZHWfTvL3X5Dc2VkF9g8vkApgd7PF3qGMMdJajfRufoudpKS9BjuYdo6wx",
  "key18": "EvQ3szeoTosdKK8ZEbMMRFwFy7qJqJKSMiVbjrFBYFVnwQZFQ9igcTZtCyRK56EiWn6cJJRqrtKDp5Pjzj8d1NN",
  "key19": "2dqa7gkejZoHX43cuhbcYvDMrk1hwUq3Yu1QWasN5C3btQuikv1RcbHrJTjfbSSoBAexSY4qbCRC3N42j4xYYtLQ",
  "key20": "5oW1FFnrPevxh3osYgPararPoEnET3hGo6KcAoJ7KNz2xDQVYch1BzkstcsHAmH8BK18PsR7egJjmSHujHqvKoix",
  "key21": "224hRLVH77FUZGUoTMhuw4LYzwdbbFpxUWiKKQsZPsatiQVS88gpDAshbaTJHnNcMesYubKQrb9skjMYShgsqNTF",
  "key22": "5vHmDz1TjRaFKsCNN7ZvSTnMWUJUdVNm8oFznJ73DDquAZyhgDEmPefDqW9AJQTykTV5wVRxVD1V4jcGF9e6Pnn8",
  "key23": "3GEW4p7sQKSDUoof1fAz1sYQiV63qoqAPg2JLiA7WP6tbUzcsSnzQA1hvAgKgWPXUTrNAYGbaKuYjcekNqC2yNq6",
  "key24": "5zcigt7C84VaYLnEA3vWvJZf46yVwmReS6sz3NoC5ot3atFuWd55VntSSdHo1Qiy8epokyf5ed8zFqA3EGtnCGXw",
  "key25": "4f2tPS6p9ZBFThf3XBPxYtxDgHYh6YHZfP97eDScdoEx9qH4nt3ZTZx87FJHJu6Ska941HvGUcmJdJLFtbvVdJUx",
  "key26": "LJUvBbb3NrPbi47ftfXJn5ZKPpMrLB47Xcehh2g9ZJxa7P8Yab5MZiPrj3G3nd7eY994UTH6tjyoQbKwY3Z88Rm",
  "key27": "3hBcDxdp5oeLDcW153CM7bS7NWcon4Au7iFnpoCLWjgjUaDeAozGKptM2dSBHR5EUX3AHPahdAUT2ceE4S5TaMSq",
  "key28": "2wJCqRVFo8KEyF8uwx5MR3GjPEdgPs8wFsgmkzDjWTVSU6Y3AjHoTPeaq6N4Pusi8keccn2yhZPYWEqmM7pb7aro",
  "key29": "4cFmcrRex57hCdoH9GfXNv9jkQYRR8DqkuibwAr1LFo6rjyrcULDrTqKmSrZoDY9r9h3aH8u479bgkkFcDNbcgUK",
  "key30": "3YAXHXEzm99HDTQPVgXHZjmbLVZusy9HKUvQUw1h47kX6jLEkSeG6URqCSKj4T1gNK2r1Uo6WcshLiEKks4VscYo",
  "key31": "86JXw6EUucSbvgHNbHzkcd8YR5L6TiD8AdZexTs9FdNEkZBzGr6QkecuEeiSjddAXtm2moHv9SXc4ZxXooFsikq",
  "key32": "41idozX67BzeuQqhtnSKBpsai8d8Vegp5hfs3K6VBaUCmdqmwXknnJK38yiinb8T3u6t2NGANN8DnLt5qp7LCjjS",
  "key33": "qTmgRGB6KArcuc8amLfKsDzsLEoS1CjdfpvHLB7dWhNKvqaFfx5ZmjUuz4icJ5W67S4uiwhKiBR4L1AatpQyTZm",
  "key34": "4D8pisuoWKfBa5YaufK5VfZtGL3QE3Hrx6WNtZvS1a33BeocVAQTq5YyfUNVpQxPtoLYLamPhxPyYMRBTZ1SW7HT",
  "key35": "39RRz39txsJbZnPMT1z8UETE7gjQP9PqV8BV9XPA5XyNGXyH5hv7fCC6X6f79o3QQrCfCrHE9rnYJXuvC2AGzM9S",
  "key36": "679mx7sEuzo7hpp89Ze8ZnmWDrjci9VJSLgwLhfn7Y3Gdf7xZDuHQX3m7hWutQnVrCufpvobrmLp3zGP2u4M5WPj",
  "key37": "2cKppyueMspErRvGuMdDtknYWfaLvVNbe9sFVJ465cspFd4gKEFRSHgzGqcRFF2WEBerzEUVz9hAW2Gdk1wAZ8fQ",
  "key38": "2ZQMipUiwEc7FiBx9qWsK8TbabDbP6xPVSTvcRMkNvKKsVN6dvKhpu5hsyPs2o99MWGiuREWjbZ61xS8MB8mVCay",
  "key39": "qLgnrAeqHmQrJmbDbopM1bc6pfx7aDmJJqjeWuuKLHAWJziXhb3gV8LvArZPcCFvCCwA3jbWmEWyy3dbz9o29nG",
  "key40": "hjSmzBuSqQtF1sWBHYnShJF6jpF54RoYSNFXnvWS1iDPdHCVcsqhXScPK11HiHng4Zb7yEsSknwvrzsFodbaYgU",
  "key41": "DJdctwXAkrZuvBhcCBrhDYBGKnoeCNCzJ7nxwo9Jqa4JZcjL76wT6RtKCYH6RydkwSM9iXPT41WQyGzD2Fs62sp",
  "key42": "4gbjSMcsaVmN726X5mmxjyuCqjt4i2QhnvpYp1QaSDiic3nopKs2EcSz9oHyURYjpwB7ALxPrbos8HsHr1P3gGqi",
  "key43": "3GEZ7snZ6NaRZCAghmiUofPmYwJ5GDuJrdMGRYFTgbtfHJtAQrH4sqncbqfv7jLenBZ4TJTKtYqxG2bC6uWPbF7e",
  "key44": "3MaHon7L3hsexP9f7ZAQzsDYYPycVHGhB3v5NmiF3JdxBxhcSvjtKCJQEyyQUKaf4YjnKecpiDDFXTo1NBcHEh8U",
  "key45": "51ApQ1YZonrSVpzPzYSy6X3mkDjYcqiHZtMbc4wqyeYT26boXy8jrCP5KWrVAgPXv48EoWiZBWxtY9WRUUdLhwnj"
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
