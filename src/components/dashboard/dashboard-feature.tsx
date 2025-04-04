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
    "byTZz8AvLkSDpnJv3UYnG2K4CYiyY87PxSiPrBX7hNV2pHHMWz5rCxJ5Px3JTgMU6pSxCUQMR1gLD6YXuVPmFeo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xLoGEwaV8KqJbaigb5PdcxnUe1PQwgS7izpYF7P1mRXq2Pit4EiURhXCcSkFWMfyCdzjDwB1Sk7kgu9YYU66zVt",
  "key1": "4r6KAc1gXCpa1mixZJWPRYsZBWCrsdpAQYK7rnkhhz6dhyPEchtYayeyeNxgz7eG7vDKR4SrWj6QSK4xyaKi2rHy",
  "key2": "2QcrsaPVboNUo7hWrPsxyN4dfwjaZdTD7fTixt5PWCoyFgHSnZ16rUSv1sahza1AV3hULBhTmye1Cs7yBv5CduGf",
  "key3": "3H3WCMXVxbU5r3zGM3uFRRMaeSMWxGyfrLzhpkrKKQNYSfXZFQN8unQSZtodBo9NUT2M3SG7DBqRcRjyr33Ls5FF",
  "key4": "QLm3H3zLJQgcESoidxXZmJnN5k7utd6LJekXYeKv2KVYamvoY217BeqsVMBvjoz3NS1d84wdBkmfoFYK9iew38o",
  "key5": "5FquZ2VYUnNsv74DqEcBxrAp2HhgqNRNJ1WK7ShFgG86ky9LvuYiFshMzCfETHdBnVWarRHXB9DLqBRgDXbKYrjK",
  "key6": "4BRW5XLMy2sS9naCRvKi7xAw3TwUtWKVP8aLhgD6hYCc1GAPwHF1gWeeE64fTcTBgNZJTRUXwPbTDnX7wLXAHa3Q",
  "key7": "22ehQ4yKS2UDuLokw87FfDLTNVtp9BukB469YfatRZBhEDDMJFKhhzGm27jc4uqEGRS3in8HA8mppe1UyZEuEfZS",
  "key8": "2aeFBLAM2r8zPLM6zJxkMA6Xr5a1DSQqXeJ92qiXZvXQQTR2JZrZGHCUaGwHVJAq47wL1AY3y2pgguaTEnhfQF1a",
  "key9": "4aAU9Ugxp511MXYWyNk6mvRSb6TEcmuUenvuxFTJh33iapF8FrK4AH7FspKDd3GdL4a99T22aB98kLkLNmzgzyfL",
  "key10": "34NStSifDL52KvF6TccsTq3DGJoLWnogYE9jfChnKdrx3scFJQLuZqmhkgFV7WSJYyxkBFjT5sKEabfDBMBpohBP",
  "key11": "4t7Ux8MDN5D9L7NDLgeTMNVPuT3DiS9ijXvaVAfq3vsF6kbnmrLbov2fwUYew1KbrZ3kRDFifQqkwAciu2UUu5HB",
  "key12": "5zZyb2VH8fpJBig8CycbzCX9pSMnFtoW4rwdS5R8P7EZBimNXM2feuRNPCUKMwywvTYnZRxQ4ViEGVDmrmCemRz8",
  "key13": "5eFCpXRiB7fUWpKZJqd88kgGqKj8TqkRsVctUBPzt3gCv1MHgWw4L7B4wE4k1rsyTpJGxzqp9LHSXcZBPPU7vid6",
  "key14": "4wufv48eU288pPfj6tnDkyeiDpK4V9mSbvHfdvt4v8XR2vTGifVimmguxt5hvyp9w5HEjaKzD4vBpbDB41jqpkjN",
  "key15": "ctC2N9mYBWk1vPrZzYA5ExZZszPZBjejmqhHhwuFaFf8pbgtL5Aej6HX9fTQVr5ik1oUWrYvGdqradNma7ScSvE",
  "key16": "33p47ajEhNjX76DTL8yqG4T69vNj3XN853gSCvX1qCoZWe3XgK5SfUDLpC1Lnhnu78ZP6YaH4z8VSXmXDLX6wDnu",
  "key17": "5i9SRBHXDTvMFEDUSknBwcBApDbfEBgis8ezZyUEgK5YcNXRGR6yNmWSdJTtNAy1LZgBwHbD8isJ3f7V6uZn1Deq",
  "key18": "2znaR3xkW9VfNtqYr9UtaoXTsJtjnPgziWQh2TLzyDTN6bkQzEWxYZ2VXQ31tVs7KKfo4PujPu3KGcz6iKaYWbg8",
  "key19": "sqKDt2hWCwgJUTnRKAMkNqqRrwWHu4mFq26K8MzyE3QwrE3ToX8gNoVYjn4cBGEXQK9RqUr8Nh6bhJyWfRKWgWu",
  "key20": "4M5S6vg1ssSKYTxYSdxDz1aXFoskXMb53adhWU9htycfi33KpTA1hSs99UE6Mi274W279pRCjbTV8xG4zab8thAo",
  "key21": "4PJCSAdmW7pRHDz4rrke8N9tFjZyaCNiQh5tZXqUhg1nm7rsG5ZmL4E31oVpn837uQrtmHPt5tyau1fc5C6A3qfJ",
  "key22": "5c5Vupq3nK1Djk7HTJsL6GuX9DoL9ev4F6QCLqwba6whwS4bMFUGtNwm2BhYUpnN3bTPb9GiXuqWBuQzCKqeBNh4",
  "key23": "4KCcXeYTWhNPXthp64eKqv4EaCcpwMkThwTqQN933Kev1Y1hEGeyGNRcLe4qXANSXstcAMscjFHnZJ4jrkeQCniT",
  "key24": "2SEW7PEVsLxpZ1rBMVYBD8utCwLGuABgdtPdoZjb2fFAAQDMa38ogr2BedXBVppWjFpnzLMGViJMPsKiwfz6x1aU",
  "key25": "hPPpLsczCsrcaf5n5Zo1mughCKQKykXGVDeh8RSQ3XrPfb6vm7erra7A5MES1SGW61KWtCcfPznmXnDdXPGcGLg",
  "key26": "4fPj4KsAokdBszz352rEGQcCqV4Uazdj2e4vEhs8Rqn7hjSNLiwofynz4tunyUe2iVEVMozSZ9oeZjNumtoxNA6n",
  "key27": "4hoyWvBxbmc9uCTS1Y9FWmPJLhaFge4zsj4hQKkDWCP4h5QH47knUZ4hib3VxV8dHwqJiCAnqikTGRJj5dGnHJK4",
  "key28": "51R9EUTDNQPuXyFzKZXAmEZ4qsrghNUNAkuh3twhuTtfPvVmUPLC9qbMZrsTnzABYp1bg7LMbqHzEyhCYurpVvP2",
  "key29": "5GstjCtCi5tfcpn44e6wfuyGsnkr28AzvS1bpLzFpaCRdr6VQPkfjt9BEr4fj48WXzxWN4xU9wceSVsYyaQXYbym",
  "key30": "5vCydP2QoiH7QxUX35kToBZyzWKAF9tc5N6wDUYTNe5VD4DZ7bJLwdBtPt763c2eWcf85i4BV4pGKhAgCV6f6pQN",
  "key31": "Yn2WS7comfq1x5wCzfe43suYFGwUCDCFXNqjDHcLcCAfW3FvRKBbHWX6no3hLibrQWwTrrn8Jg2EfsWM8JA4x7B",
  "key32": "2sJATd4XMvvipTcqeLbPKUVGetQzwVo7DqEijf4og1Egfg4iN64k3QVVwRLaBFU43tFVKy2QTBJtmsBWEKa4d3P4",
  "key33": "5erQzcqxVgpC2NKkbVmdiy6KACsFHVnaMyWT7eBVhNwLW1TVtaii9iStfFoYKfpTRCmtzjfk2YmXMdt23S3SD8xm",
  "key34": "e5QtGHVeQqLgqV9t3CoGsSXkJNRgNHXeZzgu6b4UpMseSrKCoSNtvi334qcSCDbU6pxr3HhomFiDWxji5cLrc1z",
  "key35": "3SfxZRuBVuGmhYBPdK2jdXJFdJqW6K1QPVt1zy7w81vzetFQUabGpPBnNtMatXcPjJbjpfr23XZfzKd76zZ136Yb",
  "key36": "3ndUAwpZxEqTxthW9GuJfXsUikSJBPDo27o7HJerJrtS4wGa4GZzbieuB1cmhr9PNdiYTcr5gdRQM9AtJQsTYd1k",
  "key37": "2XGBvzkqXhKjuFqp8XWYwG3u3jENYVFwfdxZNUZdmGnJYV7yajY2gDCngnaVYvezepdzcD3bBJF7oxchifFz7jfW",
  "key38": "51H5JaxaHrJ73Z3Xza3MDQKVYEsr1zDoLHvcCRLbVWSxrcesS8PEuT6fzJE6RRAU6jauqPmnv3znqsLrVsiBdmxz",
  "key39": "2NP9oiFNpsRR1CCmXFd1nnrEYY1EAPjnYEsPWmEkvRLtQVjbk19VB9VEMGgzSGhpAoj7gxLyNRQ22ErUm6jdpeQh"
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
