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
    "4qMPDXvajraKuauHkUrEq7JcVwqLtP9r1fTnXF8KEYcWEedWt83qCA3Xe9tfKWjeAFUYdWMkSsfbb9A5pTtwyY3W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hkeJwKWVPMuhd386ZwFQxxQ2Hz8jgoqm2VGBpBdMDR4c6RNrmLbWgprQF4BtjBvtpjh5zK3mNXX95RAtCqxQ4cc",
  "key1": "52ahqdVeMxngbG9NHSKMLSbGnmMmJTycPxaYHQJfXoPUesmqtbrkmcFuxpn6jvsJ6jBxegh9CJy9gPeSJtmk49Jx",
  "key2": "3wS8obfd49faf9wCmsF3sRLzPoMAHQMwN5r6wpDBCBNQTrYsyPT8gbM2sABirVdgyT2dUjrenoAePYKD63cxWCGS",
  "key3": "GU4UzsKNCknSg2vNRKd2gUk5UEVSN7faiv389f7hpaZAj88yZPpySFNBKbpcwNtkzJp8BCrjptHoPcqyraiGPcu",
  "key4": "2HZmSz513nEiMkfE8Jx3vixpWDCd1v9LA5rXoPSucTj38e36mZF9k5acZrzccUwgjshbzELkTZn9xLgkYudUSrp7",
  "key5": "5wpiwGTVmrsEWTNEXgdXwwggFLZ3MuK9aryDGSK73qi7K6G9npK5mJE35fRmhhw8FaEn84x7k2oScUG7v4mTY4K",
  "key6": "66z7SctFSnzuCa4RCTcrafhFKB121HDCYMptK6SomgdjQMT3P9qbfGcYB5mPsLWCgN4SHqAoJV6EtvfQ7Tj57Scu",
  "key7": "5E5cKeEUE9AhCAzGHCyay2nFUTSz4VbgzAMUEQMNedKK1sjwDMmubpkYujdc8QjDxv44d3isBRW647uVxbh1DWoU",
  "key8": "3WxjxMghBvw639WEP92MdRRDdiE1u1CxhREgysxHBykQphJ6UQrinxsP7yASPqA5ZA51kRrjkEsNtaMBiXHZfg17",
  "key9": "cqtyat1kmCVxR4gucai874cTsDQBbiuYMcbjE7Joi5FSwKGcaZXC4Qe48knAhBbtdKetMm5J43BRbo7AGjq6EUk",
  "key10": "568GsD9UVXiGW7Kade9xD5ctmxtpRtJmYqwjnV9kvrkkeHYBi49o9rrdYu6Dj5pu3zeKskbwSHJuDvJY1Fdq4HGz",
  "key11": "3ZkJYK1vTEpvB6o4hQgQ1DjMVbFz5GJU3BAin2aWEkNVGbVjzpQ9d34C9YTPcrB27NS4dwUcMmMBAS8sH4Ftyf2x",
  "key12": "3uXj587fYtbrxFErigpmUf1dnSi6X1i7CZPorU4RfwUjJfQSC8FCCJDLvXmJhVP1TuYwS3sYcCaoywRdFSB1FLFY",
  "key13": "5NEKHhDLoEGmA9Y1CqEGMn2xo4q3NQ9MmQ5BHekVtHiAvqYLdDiuGPnUJKhJV1He61842tAyubqSLt66ha3rpEL6",
  "key14": "54KYk9b9wm7Kf9xqRLYqL47YMxMYUx2sCaydpAhVSSKsGLdnULgo6zYqhV383ykdACqZTyvptXvt5esaSxQroVUN",
  "key15": "51wrxgqsrqRBKgXiAGBFrGDme6H7bcEuMjYYz6iD987AQm9F73FUnNgAPDsJZEeA7Eh3xcJYvDTEz7niUgConh53",
  "key16": "4gDhFuyx7B4MukoUkWPzX6gCnmHLrqcKA4hmAgfBfaB22uAsVrwGdXn7kT4qkRuqyD8C3QSj2iCqCjv5meKDTfsx",
  "key17": "5qjS2JP6SRQAdzezEJKFVLSx1UjLrKNG14Mmf85vd3SnaMhK5bJ6BhssBz3KfmmNuU8ZXDyoLCcV3Wz2wACYx7XD",
  "key18": "34NjTSTQLMYKC2aRPWdznG9JmvZsFusk6fNXiG4UNzz64Vtxtqs6or8mhCxNxDGfgfE8s92xHDHEAcbknb68xChH",
  "key19": "3sfYhsY7rzBTFgQvKDj8prJ9ZmLwbtTqCy72ZzxafC3bv9jxWthdHLq6czCko8jqhJmFTjTtrfesiPekzqEe1nxC",
  "key20": "4BR5b3TsvboLHurtSkibZGmaPui6geeUvumsDFQCA8ENjgFGr4vyf3XYMdEFCzanNxX17mSaSC3iCcxjViaGhTZv",
  "key21": "vu4twRWgRmMDQEsog1xy28RqiZvfX5DAhmop1HDdzGjQs8peGohQnA9ZN6fNAAdRBawLq7mtWic8yCzpfFw8TQq",
  "key22": "3FDCjxHVNCE7sjLvuF2qaH8zHi1dXiG72vSoJFNf8W4bY4TwhpGHbGjkM9GnwMBUYJZZM7qcHAddcfKgeyEZ7SXS",
  "key23": "2C6kC5EoKSshuoWbfqawg4itjYmCeukhT1YxJSqGGptz5woUYyBHHw12WNgwzXbQCsSVGhDddRoc43VVVRVrxTTL",
  "key24": "3XLjZbsoQJd34U9HpxxzWojuoeM4Pjw6eybrpS2MwRV1RoiXVz6BBafttgutfnCgNX6NeWPhPAGC4qk1iisTq3XD",
  "key25": "2L1d47oP8ZsFP2D2x8NLhYcrtdzjUdpSkjKtPK43iFGZBnFcLH8HQo2ZW9p3c6vggcYiJb5uw5aT7hUqpELGJqEP",
  "key26": "4QGZZBSmLKsitkh4fTqQX5yrTyJJ5teazMBqpTqrbQMhLJU5GCn89jC8wUDTddwDirUqkR38xoTKJzGPTqMWS8j6",
  "key27": "3w2suEPpNAKqhqHNAMboEMEoWo4mNRU11tajSapTC9o8mhs8EdSsPhaNn4kY9MvhdYQCkfBBdJBzFNkwhZsfoQFQ",
  "key28": "4ypnA4DnrdbxASgu1d4cD4FqvVgHe22ewEZhPLDGk3aoPuk1RCRvgE3UDkhJvpKWsbnnwSUJvP5B5zXqTWoBB5rs",
  "key29": "4doxGS1w39LP9NX3QeT3JCp4yc7A9BwYyxHQJq56vpqZf6dnWP49HBKnC5pyUmJFV87rxYHaweXSTu417Uxy15fy",
  "key30": "2Z9yzyfmjGq6mSEH585XpvLMWbUD1yjUWtvQU8FaNWa1M87hGrKRAQgE7XhaTbuBxxYQ2zxyon1YFhdhFXMrigrX",
  "key31": "2jBhmuhUVruwEFiGgnZjGfiAnfxgXgUaKme7TLKU8mwSUEce73q4avPiRwcLaWNsQoPp5MfTiiA1XZKUFZLzRV9L",
  "key32": "xkYw3j72VxMmmo7MDnP3miLKGX8bT2LAxyUnzhJ6eL9xuySTFtXGWPSdtvefT2EET3GpD6x2YnnF4f91U6KE3fL",
  "key33": "2FedK2f7j3kwtbXNWdJe1pytdDLPBBfELM3fcLR8JX9uau83T2zRRUvHhgySTax6kDfA8prWvd36wcZ239AyxQBd",
  "key34": "vkUncjKA3ad6Ay5oo3L7vyL3oytULvyy7BRk6k64oy2qyTZdqKJn7CHoM5WqQzrWpqPBjsGwJQHX92Kw3hQRyum"
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
