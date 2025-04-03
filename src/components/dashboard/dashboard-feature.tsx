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
    "3Qa1WpijUAFPc53hEMKQnffUtQi22aRegjGcocpXfVtbonQTQchsg7vuayB1Qhd4TLRhQ6s5MQpa8e9VYcQdqzSs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v7uqA5iAJpRY34NroFPSovJ7hjTCvdgoEKN8oiTbban3QqQh25gefShQyUQaNcpPHPq5ACp9ERogM6zpPXca7bj",
  "key1": "3kBUbmrYn4zJSgXJRyFSeH4TykYkRtxmTkqdrke2RrYxEcT6bLVvEgwUhaPVTiyYPS5i6Mcjwy9WLw7gh13R6mpJ",
  "key2": "5F3k5Mo6SyV7JhAnz9JGtP2pZiegVFAZ3U9r4hR1QPsmaRAcyb6F7yL19p4gYm43bcJWr1AP3oPrUxUywUt8e5cj",
  "key3": "CfQBKFxDuyf7EHzsvzQ6Uagh4S7WtaDyqbsaKCYcKJSxBKcBNJDMAfSis6Bjm41Ehwunc7a7v6j7HKN7i5f9VRJ",
  "key4": "3scdUP45mpaXqLf2XsGUBaVv5kMxizoTqXQLsS1s5nJ8GDH5DWuVsftgr5uxEoDoLzsouTVswJpySGYSZTZQ84Cj",
  "key5": "36VQeogvNRJgxb5y3tpRcQEHaQe6FPyCog6yvv6Xzb5f2Hqqo7woaFKMiubNDYXP4xPshDrVmyKbsKLzY3VAq7Cw",
  "key6": "euAQpwiNgP8xxpyr3mNB4Xj3LtNfPNx31TrAEJbURjK9vaMmbx98aiwNMcjAPXdi2ZJB8aJgRZQmNizAzix3FDt",
  "key7": "3bfew2DKU8aej1Tm6P3P1AKWRnpZYmnpktN21JZ9M97ZehpN8QekndZ4wv2ZzYLRgrSzWBDqujwY34SP3cqEYTjA",
  "key8": "3drw5JW2gjqvRid83JoMedr4uRs88juz5hHWKLWW831NtXRj6k1eL8k6AvPgz359pC3Axm1ZRFEhu69ef7QbySi",
  "key9": "4MJpNrzutMWsNqtZE6HYFtRJndj4rRaLwjixfkpfrnNhjqXntRmUBXPnsr2BVptdXpcGunC9eNnoheoUNbPkVQtm",
  "key10": "2cvpLMxmf1oEjY1ikDtU4KigFs9DoyoVYwLbEjrMszGqeZWq8FE8tN4TvcgrUeMbS2yvzPjCEWPTERWEXiPVEgCw",
  "key11": "43x7TBtN2HdKcpvKjDNdQwBSGqTyNJjDMJK1TDXcQ8diQk9ojQfKcakKPhJgsoyTyN532Ru7ZXZuziWp7H5zhsDH",
  "key12": "5Mkn2yECWWsX5H3gEUq4HMVX4n3VW5wUkWpcCJzMT7KRarwYxaBCnbT3Uf8hfTbxotUkdhGatbGBAoLpxeDwMbFU",
  "key13": "3jrz5jbFH1gLQYFGLJKm8NyFELWnTrLwRj8pxUaqYavBBNqZt82s7jmwDAudvxaEPAtVrAz7Z7Gon3ZcqLFbtmWR",
  "key14": "2fjopFxB1S6hZheWigKdi3PKADcoC6K4izopCtpwQwX7hKF4ycUyGsD4B5qBtc3VvuM6BFGY164dkrePh2ipFMAX",
  "key15": "51iYawzLQEtSbL7MJdoYx2nfu1C3rGwbkqowu9zxjFimTMVkpfzp6xMfRN7GEdWP58ioyrm6S3jWMduutJo26RFJ",
  "key16": "3SCdmbfKL1cEy9B7WN6NirGi25q9TFvrcU67TMYDpkym6MWUnVFvsqBbHgqiPG2vDeRXfeA8yueCcnYAgHL7ZZVq",
  "key17": "2L9r6vjb3fvDbwqrLsAdajm7rGQfkfLs176z9RcW57Kv2VRT51jSeVc6yoSubyhywgM3aguMfsmcbnRsvgbLKtcU",
  "key18": "eo7pq39kiaqBwA6q3WnCF476PzQ2ywX5kJjf4XFiqAGWBETyqesVqnpXpb57ByUzTEtJ447pwVdw673DXb2umrx",
  "key19": "5BxVKrohzgHcGoSMm4b97TWPdrjhw7AMoHMpf1qxRetpHEAPKrJSToL6vVAgJZ7sGowoYiVhJDDBMrjiewA89X1A",
  "key20": "4mX8zM4vPWteAheV7hAPbYZZ3YrMSZ8sScF6fuQsHGUoPRrQSE89bny9DKB7hm9zcsSZdE9i4KkjVE2vKpRdxwL3",
  "key21": "4kKCUm2yhmvRTU9WU1YcCv5qv37BN5DC9yswToRbzyzJpgtJiSb5DhWbgypeyqjbPFN6Z7pakmdH89EvZ7ntbjbh",
  "key22": "3r1mjoGQdFLAWet2du9tyEPev82HnpTFdY3ZJyarbR9YfQ64iP7N4LwuoxdYvmeU4cDoDptE76LLDZWw84rav9BM",
  "key23": "3tbri7nyDf7Rt8NghQwxGP4pjGQfQyRJwMPDS2TzWCckYiWXhmA9XfeabwLWNpo8SyWj52XHoMuAXZPAp7AnJB2K",
  "key24": "4j5cSjChGg5CBHQyTguxZWvVRDwvigZBveGJs25ErkcMzGWLCC9Up8WcfbrGLcy7ao9RUgmLmPPpeiRFQNGmfGw9",
  "key25": "3hWeUkqxtvgzFHNKRh7kWsZNydhpENnZfodQaUkXWbvYopkaLGzEm5HXYNzmkGaY46EcQx2JHaZ7ADULLLPnkDB2",
  "key26": "3oyd71JbFnzLYNVZhrydsLnBC8n3Ly1g16KozgDTJ3xmM5SuvE613Pgyj2ox8eH7tNkprUze4Te7mPhQibiSNWSk",
  "key27": "4qAUkrLt5z8DWWyQRmPJGxDC5TpuwfSqUQeMccHnUjwor7hgoWbuhRWHaYSwBuXon6S4z5S42mhZUo535vgfBUvD",
  "key28": "cVLwHhHs1kmXbhGEdpzYaob7HDLTwqR4chiKkndvJ4mrVWWeuRzEboDyV1TMgE2Cyc4VrmgyrJDDGJ52uT2bGHz",
  "key29": "3bGxUmNfWPUmkPR16px8sY91kqCiaCvha24Zz78LGpudpnhg8X4J6kgwEiZ9m1pa4AF3j7mLfFbxX81YHTCFhSct",
  "key30": "5BYXu4w7WexNDVa6oRJZ7HByfy9bvdTy4K8zjVhwFyh95o2JD5fNGTwLEt39m4T6fdkJ6EvBKZuVvWkwXcTSNpLZ",
  "key31": "2kEE5o1GY3Ajb8d8o3FgyfSPdXWV6QpQzXLazkzwbaXYgWwMtkYVDFrooMo2KxdhoPg6wsYhBYfvqhtdDyG16mgw",
  "key32": "Yk9b7uP4PHXLNDHUC51ozy2eWs1F99MRgytpUZSa7Dgqj1p4eKSGvN2pHoUHNGURRNZLFM5R1MaL4WK5zmJmmkM",
  "key33": "3wVaoMumJZS5qxQHzGr96DEfcr4bjwHNsYjqWEcapgUSWxxGjUDJE2aBtMy9oTLKN597AJeAKStvkzEsavpaEaPZ",
  "key34": "3WKF1bxif3R5tkG6wSHS5XxA7KaW5xfQKd5AfjEgq6q9q94175XfZkUNKXjUFScZjjERnesPgFUc4G154mvBkTtF",
  "key35": "Gg1yaTVY7Ki4KGhVh5Uz8fX4byvKv3ruL3pH41XDqKxBM67JGPr2p46oNyB36rzas1ctMbkxTeKjJ2vomY5BsXE",
  "key36": "3duHnGCTFNEhvaCh9azE7SG6V3zJp1keT2YCDNLNwDkQ92Qx6y2z3Y4HSuHHhNRT7aTDBbMV1NjoiMuanJCfb2Xr",
  "key37": "2mxGZgsinbvF1Trg6JtCZttqFALoGSCXQASpBo7HXxKWLT73zb2szNiasaE5N7q1szVK5sbyi7tETaDJ3gZz9A3m",
  "key38": "fFC9gfdMiUpKXnZAWRJnkFCD85nMzz8MekqHbb1qxhHjQqxyxGciwC4Pv3Afa5rwGfnZ9wStRk1XyfURAthS1bz",
  "key39": "4nvHNWFCYMEK5p6ve8Rw1V3jFUbDUmR7auRnYc7U8dxgdJaqCXBRY1NEqcCmfnkfLuLqngMSh68bAPJiwJjmYRho",
  "key40": "4ftQ2duPYjK67u6jnLKp9pNnStjN8f3AqKXPWAnoUtpjX7Cj2SXbG7oeagnTaFFLNyBss91FkV8RfjRSw2z2PgAu",
  "key41": "4KcsFbzzEKZYxmVYTQsvkPH1NSRgrZcGJ4TLVmxqrXimxMY21uui1CrpPcBhEXN5551EHmuoNM3bWMnS4KZqmWyg",
  "key42": "65Z2P3Zzu4B7Tp6U74QYdK2DsBPJ19HWzigLjBm1NQND4XUaKZFNoybu3JkbC5Y1zAFs1a9Mk65sFGtyZeD8yiW8",
  "key43": "3FZaVYxnmMMrVVHYygTQN3A8qAjUF4JwUUyc2BE3xfZr3dXgni5MJL5X74qpMoaGXjGr1EZTpyAcRC2Nj1xDEXfT",
  "key44": "XVFdtpYNSUfxUjmiA7FgjXn4SYbSfowYBbnusiFukTmMzTLF6Yv8AxN5wAZLrtNjqVykUaeftnvw6ymgwFPqDnr",
  "key45": "4Z9ESnnpuoZkWrU7QA2mnU8QQi6JmpuGMJuNRjdBy5dkxKUR8vKJTqeC3EifMJ3CUGV4bMnUJxQgdVS95LyZffeQ",
  "key46": "4zaFqv7VtjWLby1WbibMLAmqvVW6JGKgfBMvRrc1bdJvd3hkqLi5DYMbVt5E8TaHcMXh5sRchZqZ8UDMwSzGgP5S",
  "key47": "4DMcmCBZRmNfGegfZtkPUwKF2poWukyMwYDwQT3UokZxet4AQF75AgJjyKGMRdU3VGVmepRxDyvrZBHYjnck2hPS"
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
