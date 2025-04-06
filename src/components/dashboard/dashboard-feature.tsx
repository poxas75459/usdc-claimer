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
    "4ZP3fk7PwDmk5w3mHgFKNeiUEDdD3bk6G6U5p33Fg4eFmBeCPzAAoVtHvBKSJQByoZr94q4Jw7XQKTGDTCMMnRgH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27D36HmpCdmvYqe4joyzpNU3MjDBMEFKZkKvtUTyGKVdYWKAszLsfaSnLKxDQ8YfndH9HV9EQLYeKd5TqKfD3t7V",
  "key1": "3NF9CZ8zVBTPxQDjXVUYZPwQb1zwbQP3TP8VgE41nppkWBR9zUaDaRGDtCGMb6xj9FfNSo6gqDHwZYRvPoFyGHd4",
  "key2": "1arPPa93a7myZ5647GNosvuDJV5baTMnrgFYGZ4Ssij8krYaDxtVo9GMrkov7YoSoxYfLneeehBJ6Lu3UTbCwvJ",
  "key3": "3EZN1vJsoibfEgyCgstLBxAw8xZoAU1WyufUEFwJRjd52aXnY4tdu7NxwhH4eQhSAHJNtWjrxq5ryFyaLj4MtP8h",
  "key4": "v2rQLu88UdiLaeuvQW3L6S7NCNuhPZDX9o7312bw9ABphCmBrxTjGKRvpvzdihZZE5Mr7RLsUaUjMeqPxdUCzjy",
  "key5": "3i8pEHxGpbdXewqiSU9576NnBmSveycSXPnXgpLF1cAgvc9koSt69d7th7FG1u7nRoo51g6Qr81wzt1scYbVKknp",
  "key6": "3c5APjS9uhVgcsdVzPhJGnxf2WoYxoQBmDLSbW5JZorncUTJoPjwWnBZZeqssTy5E8R11vJdGnFgA9VizJnCfxNs",
  "key7": "42hNfaS3NUkzyAMBXrqHAtnRcpS86LixwZ1ZpwEYyqm8eCShXKyqiERzo7mA49ZaRFKACTSxYjdn9sHcPpgiHAnL",
  "key8": "31LdV4h4AAnG83W6jhg7vYopBkuSGi2FMd9egdFjcPqWtRQ2NyBfWorrTUgftP6emEDYZTHJFkWuioKhpEQAu9eJ",
  "key9": "38KE2xuxJUp2e4u5m1WLCQ6qTK92RRzHTyjXLX1SUETkRZHxjr73ALeXCf7TUPQd3BdqyQdbC8fyAtABdaRWqrcU",
  "key10": "3ib7izRrX7Y7sCc4WMZW6tSDDHuTKR9bstHkemGmwJchAPWt3UwcphL1RupHyMModAeUBFRYBsk1enXK65M9Jx6P",
  "key11": "3NRkrtTCPRh6YZ3ctzEvcM15AHv1k2d4kXxUyBWcDSzccLGzdqSbY9xu3zhohNsbUdEpeLpMhsWEvPD7zDbuimcJ",
  "key12": "2ckgpEzFvnyQ5fqLXHFSNkzGZY2Z9vFsVd4ChBvMGaL4wGiAFGdZP2PTPePJNAngNsRb79H8A4B8jtK3hFiaq9Hf",
  "key13": "52c3HvrnegY2aUyqXgoYbUc3ttQ1eo7Dkvqpe4T7L8SxXn8s5GXYJyYUvxA2zn2e5ebGb8gDvJptxhY6drkoxNqU",
  "key14": "YeRUKS3ce2Ta8kdt1h2QVYGFLYtVgnZWCNS7hE8zkjDUP6myc3WHWshncp4rhzHAyRkZcqF82xikeFXM6mUe8yH",
  "key15": "5Te8atzqANFYTy6PLdpPv6hUhHTXKH2n4RHVzcqNhHUvsuXBrkFjJAupxzL2e7tr2QgFhboHujK3TTVAxP45QSn6",
  "key16": "3j9yWQzcpoCYQwWcnBbpvGfBQ9ViCyPJ4y4W2m6UDYZ3qo28iQp78YTnWTMZHcZmdGD3P93AfswgzKzpjoZnbCAF",
  "key17": "22y1EW5To7KLEPvGooww9qvTgmB6PYwmz924rXPDdF6SSEG6yKZQEG41GHqh1CDh82ef4SxJovNEFUhRXRUi2B8N",
  "key18": "58axVwCpkmSHuUuesbXE7ioLSK78hgFhvRj4X6EqEpR6pN6utGQYLbia5w7CfWZKWtfkiQxiAry7bXMuxyn2Mmn6",
  "key19": "4S34S4iSv3NV8tNPK5J2jYx178A3iwm1N4saDtcsL6CHhCcFwuAifm1xXBJodHAreWK4vuCWDfzLFLv2DxqPzy3w",
  "key20": "fm9jJA1xM7qQyNakYhNc73sVKwh47CYoCuX3X1tSUMSRZFu9iX5nomKeANexFgN4KcjifoWcm6zQHptsn9Dz7Qv",
  "key21": "h83RFqU3LqWGNCpRGABrfzcWDK7gk8jxGyHbWNub1tVFpNAbBpNZLy48u6hT2m8Xieugg2yuLDm2ECj5bcJhmyP",
  "key22": "2uhHDdhh2ND5y7tLc96BSu9hvW6gRnCBCBF6SiuBA6FB2NefYgZd9c61s7LwtukDMRUThCTSkafT22tseFM44suc",
  "key23": "2HzrYab4Vg9czXAXCGmvsf3TrR9qzF2ji2V3cBkPfPi6oDLNX6VLrQ18aFSz6VA3MDGYEDYYroZUBYcJxcyCXwWe",
  "key24": "R23athWhs4Lu5PXzgaXKSj6hVRGVVZHesXoDggiYMWTXmTxphEcEFdgPYZyrRLtGUXUxEBbdApdrEYvZCxkpSJN",
  "key25": "KJW8EmV3zSKAUAFEzQmzVUXiJnnSssXHr9SHVhhCJFxcE5z4tqCeq1NzSqJhM4omiBcSrsYwn2vWsHTBpCogTBH",
  "key26": "5jpnaQ6eXBwVrkCZhca2EGQepZBV1GZPgvkULQ1mQkNBa6TTWdyX4hCfAag41UetCbAKgAj4EWc1B4GE7EVvDfXH",
  "key27": "3kqUb9b8gX8urhycWQpvwrbL8BgtJjeXW2K4JP1r6tq8GAthXU35U9a67hMqkQSzZQwh34qntCrgBjFWM32qfAhb",
  "key28": "2MTQJRmU2WQBoFVVJJw7XEkgdJNLRvJwdhC62YNDpFvqUBM7Z3L4wwwYZx9UQR6hLxzfB8ja8TZPJ3J73qGEZeW6",
  "key29": "DsdAHFJdx1g2kCbTrEFwN82fGdCqhauhWtgs6hNCpAxmcLsYuzVDaM7fY2hb8puEw4TM2LgGyuZaGTYxye9ijB1",
  "key30": "5H5AHqHF27ckUzjCMKxQRpGZ9MaKZ2M6FhqkwpNiAAWyQ2LzejLWhURuzergyai8Ek4k8xkFcwfdxRaxNG61rMTy",
  "key31": "3Axr6kwnj7mZ6GGsSuWZ8xvckqkDkxSucKmCh85fHANYhWht7RPgBcakgd7z773Q493UoAjsUFpA9PX4qL3YR5HF",
  "key32": "5yMjfD5X7Ky2zxctd9u4ai9rHyQZNJwtZxALdJ9pUDgRtEVxnp1vj5Lx8Bm3g4RCBNRvXvsQmAVhT9VyGr1Ycqcr",
  "key33": "wYvzHpchLWcP5vjcydrdHt9GdQnkJjZs93w85Tq4KtPf6LEZWWguXSMETQGZ4zPyC2QCy39YsQvGGDLaypVzvC6",
  "key34": "c9PtQ3Pknzgi7XRFkZzvPyeQdGo7q5NbpZG4oGfArCJnyDdJWdURhtXpP9knDcw3HfjuEKTf4sST4s1dV1ZeQNT",
  "key35": "4B4mvGcaEyapx5xxKx4nzF3nYxdzoSuuEzvPqEtTVh1GCavKDdTBQJmU28T2Y6QUwgqvKs1Vcw5D8QQxyA5hgD2t",
  "key36": "e6Uabfs8V5peV3CZ82MiYhQCF93HU76EKuk4xiaEMG2xKZNm9EGWiKuTeY6JHoRDpoFzn1MKs77LcxKbs7pf6cX",
  "key37": "2nDm1nnLcWN8bPDtvM87SS5XTD5ExvexS48w7gDUAmq9mKNU4L7UHtgh58LVL3hG37Vm2vgmRY2cXV8wqqLDBPCe",
  "key38": "5RQWXoHBGn7GTnYvUXNRrzzpc4UJhyySS53pKdFLCYtaY8mDwixo8KYUxBXKSAqMF5ntvdhiZJrvUAj4pigRDKnd",
  "key39": "nQqY7ZfU5BgiRXojY1rHmW11tLNaxSepAFkfJUQs99q7mumDENoxULiNXaUeLdgiaAZe1Bg8BWzJ5V1ehgMkexx",
  "key40": "beXMoh6dSGxTjrj26ecQYn3Ny7sYUzyrtnpmvX2tSpVcaCAQoWmP8cbfgrZV34quC85Kh57Nqm3g4MXvFcqBj49",
  "key41": "43xPSzZm4TJ58wUz7MSAitrQAb4Lcdiu7eGSN1Btrs3d3DFVk1fEsDNMMt5jqzwwxsMbDFi9FFu9chj4eHhcZka2",
  "key42": "8LymGQ8Q8f2ryyutygNdYBwT4fUDQ1HoDF6Eow4n1fzChzyNEqtUixVrMrhtxvWXLLovgXhWoY5mQ2iWCYpvadU",
  "key43": "wYRT4niRY4yxhkvewrDrqCNwEjk4WW4zMcjFMMjDqzKzatdbyUqJf6EBfDrmywcwh4NxFFkRgPwT1YbyYYLsZ21",
  "key44": "3i32YtrKStKfXMAhbM24SMnQ3L16KqD2tQoAtshcZHB6GcjYQfQsNrN5YDKBJ6rwniqAn9ub9YXnqeJVqzK5YdsY",
  "key45": "STXDPFbf8rtwJ8yEcBSehyVWtx4CowFV3PT2m64J8AaxG84SdS4AKvxVzHHeXbQiNh1c7DKGEFepBJM5RwBouXo",
  "key46": "5aig5Jma2j4ZU7o6urHKj84ShS1apBs2TGMpiy8qDKMDnTvS6F2BDtzasmi4G3K28jUdUGGiP85HP5L9VuzNxEcH",
  "key47": "5Toik93kJScmQMnqeJSyAs9XFrEP9C8BewgkvEZuWFEr2CyErzNkfK6s4Tmni3yniCmZDdFggCxx8BAa5odQygr7",
  "key48": "3M6e5Hz76jqZPVgbFwa2PStEbMkhC5gJjuHASxn31okiT41si4EyJTqPV96ns4fpFRDJkF4xtJq9xs7N5vxT7Cu"
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
