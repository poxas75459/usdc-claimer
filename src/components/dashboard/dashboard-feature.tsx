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
    "5cYWUnH3cZ33HUyx9jXkC3NjNC3mxiHZfT4pnHraP4wbMnm4Zdv7QoKF79icbzXjfrV6YwSAwUnKP1b2xCk7Lv7p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62mQstVLjCFfHn16UMfasAA4VGG5Ytc2yaqA4dJ1PCRLjdSgPka2N8nrdoqRK9M2pBQknVFbbGZLDhmWWpju2eBG",
  "key1": "MzJM8JXUScM4xEGrg9Y7BwHG9CNK3q3xFxkHpDAoKzTD6wEnkyjqoxEv3dEKqFDuGQYpG8v9hxoo3HBNkziVmBb",
  "key2": "tepE3PMxg9FzgUG5wBHyoCZnkpVJYpQAV3uD6uLKChhHsdeEXPUPwJx8CqHNtvS35UFb2WYojtKXdZiGSiWrsXV",
  "key3": "HXZFrXGYdbAsSTRG8FcLnrfTXxUx4hV2JX9czBg66bLCj6V2rWyKp5xa41AuDqk4SmT6nn9nYVu3WoEFkDhpmdT",
  "key4": "5uUgJ5syCEF6FMMq9nH7KpsSJQS4SjyoCoY9gDFJ7LG8dpZisKjJgqNpecZFoC76QbPAcuo4G3Jwum23Fo8q8rKT",
  "key5": "5fmyBdtzcCUA2RAYUhS4Ks744bE7zcjCrwCufFzp9MQTWWgH812t8iSb2t5fBwwFMXGzfhcybjdzDKCHYzDEXoYR",
  "key6": "4vi2wJottN7o2DE32eKrb1tur1pRKUTYJWHCeEB2aBtfa3kooHEuCDrxahEibGpZeLovXBEfP9gE5258i7u3uPE7",
  "key7": "8ucjWv43tDWVWAUbHmAnhmZ9kXAPH5pYnN6Krp813TLBePyHe1WTsmVrweQ8juhAcvSzGKLojEK8u5JbqvKDjGf",
  "key8": "AzzwrSNkjvBipJNdu2xoQ4Dq5XTtpJqwoizh2xSTg4qao4NUeujq9WBw7kphKFExVqEA4mHGiR9HVNwSVCkWiWQ",
  "key9": "QNa4WWB5L9u4XHvYqT7JXUMsFn7R4hgdfZ6ftNv4axuVRi59aixLBNgna8Z1ydm3CY84oCFohwmTThtVkFzXUq5",
  "key10": "4QAcTqYdbyCmGkm6ZPYeGghQT6w3K57L8jV37qWzstiUb1mXaLTcPrQvpkzKBGVMgsEigBGSY6Wj7ut4Y6GzHr3S",
  "key11": "231aJJgaqdnQFskhBByZqj5RKJHcTuxyH8iQGU1enC4wArk6goYCN3oC4xFgXudQLQ9xtd8yZ3C8ey3rPZXD4xFM",
  "key12": "V6RYd3NMYPsHUvKsDg48AySQgBJG698FVVnkmffkoPjrP2wmf4moJJsfTMY62xRM6oPPxecaAaKhmJqjS81EPpQ",
  "key13": "JY9K3MTKXBAVfyZc5LcmNYcKgAAZq7vnv2DK74EGkjdxQYc1VZXwZjQFHtZiwxfPjDPkCYFGjc1vspueKmSoyLP",
  "key14": "5vByh6su2ZVjxhZZKkQqM43mrAyXk2E1VskyRRKt3Re5nB1ViA28nvmevBT9YYBtUMgme7ye4eRJSCV5zeHGuNyQ",
  "key15": "4JNw8C6wghKQMqDHMokj5Bozjf6YBbenuN7Acp4L5BAD1Agz7HuSCVzd7ms6NvuLcviNwcXvshFEvjXkmEPRmGXe",
  "key16": "4jzCadhm3YQCaDSxJRZXXNKd7eaKtx3BTphu5RsRJzYEN4vTUiUEzALLvfvoH4FAtvsj72FzvdtZXZusEapRs1pk",
  "key17": "3bidDSb8v82gfeMq3pxf5SUgcMJiLVH1ZmTFpoLKExv2kb6zzD8yVhJ72UamfEebgNvqiB4EA2oyYDy3RGUWtPou",
  "key18": "4Qw2jKmWbiffHm2jwacDH8CFhjy2qYNMbpYt4Z9x3bsKmvrWWHLuTi5hXHtD3QzFoUKmS43e1b9fXYjz1MVDTgVy",
  "key19": "VXxHdjb2sSox1yJaFhcLXHrVUvTo7ifiQCjbCt2N2ctUNqBDSEhTWLtkM6DnoC9pLyTJACfeaLthiiYmgjdNx65",
  "key20": "cVPS2sRg9DQ3LajTjTvbXsm3CYHUzAYCCYB2sEzkPnNM2LwX1vKV8LSLSPvpHQ4crQ8hdk7tQ8ExDfsYKiPkDDG",
  "key21": "3CvjDaMGSNALETAcAXgrtM1uD4PRfz5YNSyQXcxik2UTq93oGCcxH13PY2Ux8oVa442jRSntU68NvfLpxktne45C",
  "key22": "31nZ63Tcow5wYKp9DXsYrTADKq4TvFUZR9QckgYJdwiUNLiDyFS7KpNauNXVYD4XyLwmzruD6kB5jD78SWE7KFcy",
  "key23": "qdiWSc9SSJdWgf5dFK6P7mWeKxkBgbtYRp9qcW7xWBjX43x7rgXRDuMekB4cerEAQtt82sqLAV9JhkyWivrizLV",
  "key24": "HNHBsHzcimBvMiAfrz8UK5iUTz91VztsHjK8tchvBVd2GzidzVjxndWYtLdK83YaTTNuJuYVrkKzooYCHsHk8uf",
  "key25": "iY1uoXikFsLFzJEYhacAz5M9GfEg4KUgFsFKwr5G2odhUZYw9qD1xhN4AfTycbYBhVnpC2hggeBVwLxnMqa1HHs",
  "key26": "VyBrEE9KWpBqfPh3LkZLkLkN5R8KUXjeEtyDvpoHubqaQJ1zukqPpSJD7HKnbarHbrF5iHsUovx5cV13TTcEbPh",
  "key27": "rhs4G3RbsQHQyQWhbQMYjcuDQx7M3t5ruX9YgFre8GeEq6LekfV75ibbgVaWH3H5kYe5g5idqstu9K4QBWaYEm7",
  "key28": "qdAFoTafLGUeR2yB4Y892Uq9FxCkvvAaCvvofh1NJ6828e1r3kiXrRym9dAWK8nNR1B3HMRqejH1tmjPLHY4gAs",
  "key29": "32YhPyxSBYe9z1q3fvEoVi67F5Y6x72NkPFcyYa4iMbueSmE9ghucs8AXoaNgR1mrpGqKBPixqznZjDPZ8veeKmH",
  "key30": "56WQoSXKV1YAqRDx4eprPp7fZy2fBxqs77vkEYXPCHXh1Tkk6yeaaB5Xsumg3szxiCiiuvmNAWW4JAFBXc5b6fQB",
  "key31": "2hZWo6d8KawjRzTWMcE8QXBgwUTo7RAb4Yv7fPfeoBAjQB8dfNupdmtaAx6QMH9mf95Lf55sobxX84Q6rTZB9d9h",
  "key32": "2C4cKXnRG44f29vdPMmDvkTo3PoxRa6ZirJ4H5BRVv4YvHnFn1Fq57KY6jnGKKSwKcnv1BBSEAC5Xnuhi6f9rsfH",
  "key33": "v6FersEABvwq2KYRKgB3VZxH7e4oRPQ9A4TbPzhLTbzMsXHJysEBRsgGwYQ63PuwCuGbVszDjgPzusNHNzGcine",
  "key34": "3ucaVc87sALYBod3zk1V8rmhUeN6P2broJfZMiGLkAfwCPyUwaY7mbYfz22zkeCaurj4UM9KaNuSZpfGpFwjux3",
  "key35": "47GTNbPkeFYhJRuQNtmc6zFi1vNbrtHAKgJ2ww9RCvm7PVJz5DT8RippgVHPgmRrxHHVsTWPnsHjTP7ciU8WWhHs",
  "key36": "5bNp6qkUry3onXaZDFVXAL3eaT825yTNDfZKxqup7yKUkaj8G1tMB3sHiQ8JnyFMAbwH5QDZTvV7aRYuG94NJXKf",
  "key37": "5gXnYSNfxgNNkpzFqpPTPQLL1NxXWT9mLfVzhVJrNkCgiqymopdWb8LAGnnSBpsHLZ3ANLKn8Xbxmfeupa3akpBT",
  "key38": "3csN81n7CQUdc17znXemS1jPtCJQznoQvFJqqVeQHvmcNfGSRU9nB1Le3brisWttrQC2AC8nZkYkD78kPEhfo2ts",
  "key39": "4J3hgftY1AKK9a7LYUQkkP3gDeATYnLo142mpPA53LvRqDuF4wdBNhvTYJXHCyg8tKCFbrCsG8oUAQAkceNK52XN",
  "key40": "4X9exm3D4ocqgd1C5gX6QYWFKDB87czbkCQKLcNghTPsy6osJjJcmxYH9vtoYL6J2UzkEV4a8CCffuixHZQUDPGo",
  "key41": "2mXnvrEytrfCgaaxstT5ug1FtJ2ycvGDHdJPbEYukCrF8UvEuXUyt5DvK5dQUDukH2mA7BdnDsAN9xGFxfGP8Up3",
  "key42": "3S427gk8pM9GHcfawVauGxnYnixjgbzMFAE7PfqWxm9JmkwxaFCcpD3DwBTPJCtofkfEK2bNYd8uTjAVmDnH7Ne2",
  "key43": "KoZBEnx648D1p8E7t6idmfrRCAyzjXfjQjPmY85QGaJrsuvcHTpLrxWG2KKUikcQVcMHUyDz7uky1PiQgdYqRDb",
  "key44": "38xfgdwRnNUBcPPubn4ckfzqrpv6UBoHfa77bk1xrWv6GvnPNwSBSqStnHbRzQTw6QiyGmykLsh1d9V8RmJ9J8tL",
  "key45": "5HpoavjUMDP5Kuz11hiwfmXibRHBjqjpJo61UCXR4NAPUGVytZTZibfNi2zZRLUm4T3ZRshn3HK4Bcwh62UapsVs"
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
