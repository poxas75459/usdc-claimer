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
    "5PjVubLNo5EN9PKETFj56Bd9TLvBsfiMXR2ixnDhvcKy3Skftv2U181XCcWZNr3YZBZncDnZMxZRMu4XSPY5fWu6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sbqvwHpagbkzR9dMYGKhTtaYcqL6qkAsLqWerT6jw3t3oiRe49fAMNR8mCtRT5Lf69EVinoAyvHc1gZEkbe1Q8j",
  "key1": "3C73t2Ladf7KbLdAzcFAQXJjVUjzRgdsBe5DSJCHgGHV3KEZ3JzNfrTi1rapi7ni7kmmobMfEspMA5jk1RL6e7iG",
  "key2": "3deVjNLg6AhiU5DBajHyMSr5h5AmcMTdpx8TNu7w9RKypHHygMErZjjLLZnGWXDWDrpUTdwt6vK2ZV7JGh82wxLf",
  "key3": "2Y8WWra2tdvqGXYhw9zgCFgTTWdSPsLjF9UsybdZwBhmvgPGZaXPv8teawGkV7nTytbKjY6ZgaXFMMr6zFpK4Yhv",
  "key4": "vdjeXwrSiew7j3s9oEJmAP6cvJwfphPSMQbGKKquNboANHcyhPeUESQmkmozgZwX2mvsktqTwi898NY5rzYZVnq",
  "key5": "5woNRuygRkkFN8WyBqSDgsCukuNaMa72Hdiv36E6vmr8bv64RD3uLmyXQg9Riz1kGTzTC1HnbvorxprjPXDvmmtE",
  "key6": "61csRozfPiYRtEh6qwTFkGZF9YWR9kAky3NQ13y2QCBbeZ2SAXEtHgiGBwshktcP9XGDtax1wJerYM1TtghP2azk",
  "key7": "5oHwXhiRTDre6Y8rF6BRNFyptHfmncE7rejxW1MaamWx7myBYwBQfUnDqFsqjJewxX1R6ZadWR1oCqcSotLD2RXx",
  "key8": "4DTMLG7XsyCLzQ2pgZy7u4ybbxfwmCNEb1xfvAxBPrNCS5aJoUm2g8PwK9Mun5p7A2vscykUUaMXkeHWxfAwePBL",
  "key9": "2kr53NqacTWhpbz2kab11AP5xog9Ne46G3BsAdAL9WtNe8g8PfjgRWidfVd79HnwtjMen23rZKs4grFupWsVJSCk",
  "key10": "x67UQDRPENiZe8uMHKKn6njnZgxCoshYC4W3Q2o2d4pBoR6pWJhFqbHbji8V3E3ZJx66LFP3NdTR9rTUuqxB5G1",
  "key11": "47R9XSMjSE42VmvDhQxu1gxSaCUf6Yzy8p6sPTDB5xG3hHJTjoSPWYrcv3gn9qGgf66doJypY6ii7xfmdYqgGZBz",
  "key12": "3hDJnbRaHPZcLZ3iCgSRcu1CH3hCLzAiAED8Uo698mUAmLJcsbbaiN7g8RUdGKgPyhke5AFGAx3qS2NtfQQUP7gS",
  "key13": "4DJngyvHwn7tGqDWctqmXjGmGkauiZrKFh57xcpaXUiULk7HL1oF54AeXLcyJotxepTiaRwuZDyPHQnrb6Wv62AS",
  "key14": "SZRRBN6c88zE8iUPCzUTCVwqh2dFBuCoCoiVgEzncJBNAs6G6oqXoZCTLmo9BSWAAhZ4vvb2hTLp7QvYk3JhEyR",
  "key15": "57Kj3PqnJZZ7CHvqDWEVMcN98dxWCdd3nojJzLuv94VUYbLTRak7h8LXs3N5o9WA7xYNqU9vKPJ9kCHmu2xz55D3",
  "key16": "3TV3S2P1VB6TqaUL8w7dgKEtQqiThbHdS1egxLdbUYFuZJ3DqThfNiW9v7WK7sutQVLk94tA2igeHkUhFJwtydYw",
  "key17": "3FHCEjEyENHZM2UB2o9AAomrzr7tkbNabZdvA1SZNkeujDKfKUFxk1opoNFyRD6SxvT7xitiqmSJFsxEDZXHAPzC",
  "key18": "5tUCGYy86znr9WkNXZoxYCFKFQK2fJ4d86TcTGqYwFL2F7p1sThjnk2eZAhZu8F4Ev2P71wbDBBuH2EbXtHXW6gA",
  "key19": "43rrdnShXzxdUhjQv6qG9dYswbqneyvaATcbTCo2Cm7vBrfEvwBJE7gFAvPnoayxsoqMqbHX2M2HM3UC6GYSCp5w",
  "key20": "4fmxjanUzRSvj3XRrqC3JNzhyBL82CJMzv7rNpA4St1pTHgritGZNb2261EbCivTTDuHVXQYb419AMKSHaE5Xhut",
  "key21": "2tiU9FTLYxLDHXhXYfzPKmVhvLFNnq5npj4ABsFDzYbkvsxq2nHH8nu8psUGzKr1mRhbxAUhTFVfy7cf1VA3AsGg",
  "key22": "zaNMFcNHcbx6JsKpe1FzB2JWzsW69hN8ByxyrqEXsy5MvKXksL92NqFvySvjNyUPVgjoyvD9JC7bpDe6Yw5GD4A",
  "key23": "4kaXTgNdcLiZQfFXQZeEAqMaRTgSRDE1x55cZs8RUUeYhxTm7B9RTkW7AZX7AnaAWXcmEz459r7oMXNTunjvnkQB",
  "key24": "64N4gyrsw8WER8LYd9Tgc4BtzrvpWiSE62gjpfibC6yxSQS7WesyZxSskM38MhYvyMygQySfQXQrZXFL66XtBFie",
  "key25": "2RNy7QLXiZfLmxRoLLerhsjMne8scgjLEGf4iWwcADWGSFdPzgKw9MiceJ4FND1Yo9jp3JELmXN1rvjdU68QJ7Vs",
  "key26": "ttWMCRQj8n1LgUbfQneY7Cj6hrSuqhBfU35X4StKdTv7E5R86drg6PKuHUhUVRwRFXxPn9jFZMJU6HrKkLT3bjr",
  "key27": "5LgMm8PqQkxvchEwiSDWC1fxSBVZeYDg2fsXsSaWMuowqshEBCnte8fahRmETnJ7mR7YLCs3pjPJjQ5ZFMWqZHrC",
  "key28": "U1CPg3cNfAKYeRmj4zL6AWbTfjqvcAddvwYxTJHgBnLh1HTEyWLR3ZTsxPn5S5fMW6THZiYfzNwSBh2nkqvbCnU",
  "key29": "bKdqTe85VZXLnSano9cx96NU4CwCP4seaQqDLTWYAfEKYw1yxy4YeE4WegD6sPeBq9Nya5PUfHcpCvSTwQzf9WC",
  "key30": "2LJV2Ym6WvaXCuCf9JjaJz7iSXtG5BAGc5nbfSVyrLek7mW9a6CKyxYRnUxCLV6GXiTun51whLTZKcWkYupPJKii",
  "key31": "uGd1cnvfC34hnckwuTjQZwFDuDQidKmzbQGB1GJipm7KDqhHpNQVei26dx7Ey5gKrw2xnKrcmmrR5rC4CcJXYJM",
  "key32": "4JrBUrcSTNpS3fzLikxbpdj1sq7ygx8vy1e5xNfkv8ADiiTzXc7uy4pUxxbz7QBfxpQxLaspyQMwnDtDmjfebs9E",
  "key33": "3yd1wD9pLTaqiGMugtNsWz2pg3mZLwszkfVV6qHocaHoEM5ZwChPXz5VFiw5MjShFHZ3LN1j8ZxymxqyTTz5kBft",
  "key34": "2zGxFnoMTpSoboxqxSQRWpynKGoU2GKT7pBS7J8PyXNC1CzhLDK5GDxVJpAhGs3sj32MjP7oVrWauanFtHwW9DrC",
  "key35": "5e75p3eRbxYFgd94hw2JiNWaTQcFXMwbJ5e9tWapmwNim7T6TbfiHsbdnEvU81NGmQW7Qq1o6HKnqVXsQh6v1bae",
  "key36": "4ddZ7EQ92gAks5HCFJz8PQoaP6pFSX5mAugzERY8JkQ4HtPdngG4CqPuqs2JjrYqgiypfXSCeYjJJWAWVZ1ghwYN",
  "key37": "5z5saDuSNncjEVxyM9xGkVHXbHPJH5J9m5C68JhzWCsQKVvCzK4tcSirQcCZGM2GMTHYZfQmWzgqgWJBNX5GeTEH",
  "key38": "3GvQkSDNxVunm3Giz5hDdCTxWNJEZprijDduEWDXg3yGH4RkvdrcMTkxaCvsoUCpoEwEgJdxX7mQJ8L1XMyVfhWV",
  "key39": "5ijFWNuDcTSNPnKAiBzcYLjnyzeBQqKxgoqAFQc4qjhWNGGnnZh31C9pRVU4qtpkXxasY2nXvRzH3ZHENSM7e8SN",
  "key40": "2WZwyAwCiVTu2GcPgVb6xXFKR785N91PLdeH2gPUaZHHt162CMEXNP2cHgnr3b612b7w5be67zaZj64FPZxrDKAN",
  "key41": "3JEJMhQJd5z911RR3JhPiWzxJbUhqisjZx8YQRHJBG2yr9J6v2qn4DC1xW3ipNJ8pEoBSCSy9ZkzmPYK8Bnkkfhr",
  "key42": "5ENZgBeRqKSEbYrgtVqDv7agrGUYbzuauiaX4o1PytHYQCQZ6uq2eeFbZGe8uUnKAJBWLjRaHJFKuFfeDqsCtV24",
  "key43": "3Z89QfxoBj1hrJvNbWaCTEMSU1LMDhnZe9J7q83YgHVgsGrUNqKswLqiw4L8cFvahaJ9Rw9ovdAfxASvsvbyTaXN",
  "key44": "38cjcWyEhUnciCzbbJd6xdPqoC1Ma1eAB9XaXjjkebYDPFvXMSb9FDZuxdGtM5ozzuJVtGPSBM6Gh1QStHTHRYE2",
  "key45": "4pNWy9f7rEh4zfBox7hz5PwJTfMakMjziekExGDGkSf5wFZcsVyGYMkksUJLAMR8iVUjbAz6zMBUPAtmSdtQZMnz",
  "key46": "26w24nbBFL9zbRfdRVnLZfHa4pULBM694WTHvbor1kuqtXDgVetUDXc56D8zAaiUp9VfTh6MN3MBVpYKQ4J5b89E"
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
