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
    "3xWofBG4C1o4eg6QYeMYFUEU2FN4t4nGTUQ3tWTd6mYiigZmHvHQAtVf4z3aEQqtgEteUZ4DyBCDCXbrnApHfjHn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DgFowfg2a9jUnHPMiVMGTT1wHcv55WcAbhsZbAxZbFNhBaLnqGqyXWrErtffmaBiCTPLR7C4B8VhPMav6x1bQZY",
  "key1": "3t86udtTW2KaMZ1Buujex1S7DkgRgLhxi2A8gd6eRsdw98eGow6Tbjzntokw66M5VGRHnC6HGaaLXxHpbqhwjh9j",
  "key2": "2khF45o4sHPDEsevaA2ogyRaZntuQu1Mj3F7Pecok4cFzUqLS2mzPxRqkaotvwyTB9awUyqnLKcW1QrKHPYS4Gxu",
  "key3": "5Pjhk1JYMXAdho794i2HNpCs7AcYjeQjnXsMu81vbcX2tWi9rM5oC6kg2o8iccCxG9adLuRATHPAJ6GEkjBADEGz",
  "key4": "5PSGhzK4GQRzcxJW6oLEknxFCQjdH63WKC8zqNvdSnZ5dTtPUvMDrkwbxeYF4QeSKbLDEbFGez7C822Go4Qq6Xdd",
  "key5": "67NRFk4DfnTz4KgR6sCJPdARyamgRcDKz8WwAzvjsGBjPsDXDUoNjyK6qTuY4wwrmv6xtaX2LUuCPc7WC3AYNL9x",
  "key6": "4Zrr5Y9o2Q3tKAtuEcJJqQ3UHtD4NbQ63pVJHAYBgVYnZfcKHnJXYAFsLKgmpMNcfVU7ZGoAPfGCWtYgQRibVudt",
  "key7": "4Ph8AUZi5DGth3NmnUYRw34WYadaBwkmUAsv4RVn5PMVVfYDc31TaFnm2ZQSci9VVgVKQMU392MvJjjv6ZVBsaqy",
  "key8": "36szXiQFtVcMvjWVKrPZbdHkYWNdBNjZhJuD5S9Lh6GLCBaaKW4hQsyJqKAZqWqUm5uYTz2rG8ZbnfqUwLFMC88K",
  "key9": "g99xSYG2zFwsCQrnAEuC4fGB8eMQpaLYhATtmtbNQHXayLorAKEXFPUQRRMeVCjVpHxkaKXkY3VPLaLScXsFhV4",
  "key10": "3jb8R2wDC6orzv3pMaE9tUq9hXoU7tGvrz5pVLZEntZdhME2h4Q41raf9znc6wNHamw14B2EeCeFY9JTQ8GiWnfq",
  "key11": "rB5ZL11FnNVfCTHno5WiWDnhz4siqdR7a3hSfWmJvDX41FbQZYK6W3XJajt4awNwaZBc9RkSSpdzStPwgyH9kuY",
  "key12": "2U8k13GFBcTPPD6n5QMSVJ1wXW3VseXAkZkFQyR7pNPQnpupdxuqVPU5uBDjXMKcv8XCc93jquq21z7kzcoYVbNV",
  "key13": "3EqBprD8f1VRvvwpGziQp1swJwJZ61cj6e6HwTtbEwPtsbeDF4t5QYh2k8rsNnjUhYCydEgx6JqVw5iY56CDiXX8",
  "key14": "1PzDk9apFDHQdkXLzMdwdJvBGvap6mQ1Sy1nCdeR9kg24kDvfKZ3b9QtJBrU1EGqfpf2U45ArJCD1BHY6xofu9n",
  "key15": "kjvQLiSfJ4riBZgWi1vfZbgdNNMYobLbL68NMGvM4TiRGUoxNYwJeXSsDjWmp237gBt2hX8Fm7P1KBPjugiczJT",
  "key16": "YoyDgjbjpZAhuc6SFKTYSdo5Qk7Dzs4ATsoRkBBhps2qLR9FwmQX3NFwMgpN5JTzMdwvYmCNmQw5DThcWgatkku",
  "key17": "3PGKKyimcd93zpAvkkUQv2VKiKyEzL7jqz149eBNHfQEQWK4zDbX2JU5tcKJRFV8vEHgMKY9JQFLzujvoFQQnvmW",
  "key18": "453yahTGEHpon6qicDNzgUV5fTFzd6nd1v2akgS46zrzrjDM3uaUwgEvakhfm5Hn9xtr5Y1raUKXXUBD8YiUjjxP",
  "key19": "3Pd5UHn82xvjGm5VEZDJw3tBj8r41gwZukZ53rNs1N7dLDgJ27XQAtaqPGH5X1jVaxCvNAK5nVnqGnEVXoFySat7",
  "key20": "89bAT2UPD5DXtrjMEJpJfFLG3N7oNgeKKV1mq692iFYj1HWiq4ZHLsXvNBJHMrNi1n9ScRVD71CRr4WQ5eKAbT9",
  "key21": "3cD2BJvXLHgQNrKW6xtBMAtHQ9hBPgsVN3T4a4pUnixmsKYPEgL3cgUCEfdfHno59MBuFiSnjSk2yMztgBC7ozSR",
  "key22": "5be7oGjydVFHkfJis24RmswKSs2fkq56yJeqwzqbxJJ1zD3hY6YNenHZxMJn76n5wdCh3G2L7zcJSiAX9m4cCUH6",
  "key23": "4iz2RioeUu5pV2HmJUrETztT7pdkNF2H2FV4Mb9KtkfJcd98gKafNqX8VzcaqBxmhegfkMTNTYuQXCjqGjvkoYFJ",
  "key24": "eCk3vcJmSSFE7mBWVXcaBq9bmQvGMJg7GoBLaa13PLh3mtXETTiwPPgk3L46sCoNYyeTmJAyD7QZxGtnbx1YPKh",
  "key25": "4KmeRw799bfPAHRe7TA6KAfpJcMvj1sz9ZxuZq93famoJkH4Z6SVRtARBtF1Wx8J4b9PXVFaiQEbVMzxNrbkQ5Cr",
  "key26": "5rV3w2yF2AKc5vn1nthkUFZNqCGqjRkWbn7YaAPbVYM2cqzPT9pRos59gzANmgrzFVLmJBUYsrBSccrggyjkVU6f",
  "key27": "4fdimw19BbBZpMhAs1bvxf42WJugZouGRPQ1krSsUB41gJidXtyG7eTMjQzHU8MKuYjmFq6hvMZjyTDbUJCQbc7s",
  "key28": "3h87SpSqjswKPxdLxscLSY2F6FaSZnLKyEVrtne3FwqnigrXSGvJu1Bhmandmbh8uHXDeeeVDxM98iUKd5wf6ji2",
  "key29": "2cJ1N2qP4sCRCZiSR8HEmyGqhs4ZY6jMuiVtueCYBZCQvw313mWTRgBJcrHLhPJbzqmN6FD2johL1sYeEreQ9cdQ",
  "key30": "65wdHJdsmCgdV5qJ9MwGKutzdTxq2hP5b98myxToiCWwvTas62hftSosVqnxrxCP49uZ9Fca2cWXg7jir56zYv4y",
  "key31": "5Wz39QwZPm3SknfANtgegSqTjxuBSaiDeVZFv7XhQbwG6hBMy8UWM4wa8ddQThgirkVKeHrqZLDe1d5qzTeW5V1e",
  "key32": "3CuQzT1rLvHEr43RAT5xAFbaVwLFCwmqAc5UBwP9FLPBjFtHby8rrs6e9uha1rebQbZAnNnyC95mq75KE9ZAkDU3",
  "key33": "3bjuN9JG1BfnQonEuBqXqRPn8ce5rENdgX4s1eaVbA687q3auvx7mxtmsoC5zocijQ5yxg4VMNvizTVi13y1WWd9",
  "key34": "dSJjgyLFy1guPQDhSLT5sCovPjgQpEbEDv6Cn9R16K3MEHEzfyGqWLxWAxeTtG9jdhFNpa9qRvfipM5zgySMDNN",
  "key35": "ijUnMw9EN1CFekfXSuJQ48DFMZs1LpgenCUqqEL8bJn48oR3yzSZBNf1MPXe1n5ehDDjkar3HbbNpuVbatmNvXk",
  "key36": "2P6f8LFMkQjn5kurcZc2DoctA13Y2G2behsAgZqx1XmAxucHwGf3yiKRZCaHE71egt5sjhBcVc2pWc455VoojpQg",
  "key37": "4yuYhsodbiHGKoXUFG3xkpTZB95jt32yhiodDjNV27swHCBTQLdQgBSqy4rsKbk7S6GgAd6tgxnSJL88Zo56V1eD",
  "key38": "vNV1p3fNjSWUXsgg23iPu2cigGi4rAHPo1VNrQVK8ghPaxWCNBiMrKmS74DWQrno9ExTPsyMnmMd61K5nBmBrRt",
  "key39": "3kNw8pxR1eaZiGAKmwqBm2Zp9tCf5vZktytCeV3w2nmcSbJGCXE7CLg9hALgpA6sgkBgDVeGVjNXPvQJVFBtQ15w",
  "key40": "375Uy3NBjKFF19h17Y6MT1JuXYqshaWZmZHirZyJMQ1yqfAR5YGDRLnJ7aBvSUa53ZAVN529U3UqiCMmy8dSDNfh",
  "key41": "3fGcWq7osECVm2rPejek5CnE7QESnQ1gPTab2oBdngCEVLRfV9XoSVtFFh2gToA47pDCBNh2HcXp2ARyxpof1g2j",
  "key42": "5WW6HNYVdEttUMcV63Cv8CDTwu592LeQvpYpFuYEXH8oacwojj3z7MGjN8dGvP9uDN47QsKoRRXkmLcoYQMdsxJG",
  "key43": "PYy9KpyKhibZGrVipTRWRkqZzAszjcTu6846UJdBT39nRghxkRZmTGifKGAEs5Pmvom8yXDvRBVbuoJkjQ7Deb2",
  "key44": "66RAGK8M3pfW96u8TFq2Vn8Sbq1JuygrmUosx7Y2nsQmdaFw1ci4MHYnG6z8HQ2KLFHgJRagiX3SgeKE2VEGAuJD"
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
