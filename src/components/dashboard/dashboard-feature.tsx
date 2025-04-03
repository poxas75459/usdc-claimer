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
    "4D4RTo45JpsBAMV7aPa7dZViVRRxk7Wn8WBsj2bDiM37sdiv1C1givLDFrhtjgZbvzxBd39Y8c2sRNHSjLtGNZmG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R25Qg7EqGy4Mbagam3PjvC851nmrrGsaEmYVy5eYxewPHZeSqi8vweTeerYXAp9zLbnwFkMMyjEYeYVnyJWYQti",
  "key1": "4JWzvDoaMu5DTNffW7CR8bUeq7x9RtWe7XJqFozuRnAFQnNWGDojyRPTnsaPkHL2EXd8KGDNSmPt5Fp1ykmHg5ZK",
  "key2": "4BfdPrSZVcFMXmLB6NXoeepfy7sB7iaAxeYdYvWXqWZscBcqnKjZ3spvLTxWvcz8cSESrMwvFhbHU3WJbvK4p6t4",
  "key3": "5T7ECkvs2o4bPyEzTANHY3L8GCjEkKqRrGiREg7MJNT5Fc3NR9k6Sppeg7pnAZrvs2SJaCswWhpfMwm2PE86ML9i",
  "key4": "3L1ssEJ7oEn9vAXuLugYV6NNKy3QvmhUsxedk7c4RK5ApuDTvomfaN2PT6EXqzL4U4Z1u4L83oRT9JmAtWyRELxM",
  "key5": "4QzEHHXdwEWhnSHRbQRYnCuZJevBmE4aFjg8NYGSxih9oPiuE2tuMb3zcvGfxL6tXzjNfTwzbbxQptWcshyg7th3",
  "key6": "wBqCbqQDdZF3V71sgV12RB8zmURWJqu3iEmXj65VbPDVon9hcVicrn8ERis1HqEyMk19EQmXKwVCJLZeRNd6Gex",
  "key7": "8PGUsU7ew8ey7FoEh5EwTCMUrEP8aRPnvs14HAsxFivezo5XrRCTFmjg8JEt2Y11SztzWQ7hfqZKBfe2RRwi2Bc",
  "key8": "3LzAZ5cXbQrJLHk4gHiTurYsTdXFYqfh1YyvcEDbmo8CHrPS6ojNE7qYB3CK3BWAmDCrRbjSPbmeYak1KadgHb4T",
  "key9": "4JNP7eSkJhtKKaaabwVTkJTsdeSjKxwFf98xBW7ZNRgXp53UJv5qqWNV3AQmXmCZn1Rr4w1GqMtQmbdNthtH7R9w",
  "key10": "2HWtYiLLVCiFNUXBkTrEgKezQKEnZpCsy2MmGfKHBRw1QUQPUH387e26CGj7doKMjmDJ7QBsFfZs4CtLUf3cuAdW",
  "key11": "5Gng2a7hAKTgPtyosYgC8NyuGBRrnwqaSDZ74BSXca6A933N8Udr4Xb24VnpAEpb71dnegepTAcfuxsn3Xt8NnE3",
  "key12": "BocYaTGJfNK67emmw4U7fThDYpvBNXoUJZJznLZyNAA22e1fgD5uErW6pRqvcibLQn4Yo7cBiMSU1t5nP1HQLht",
  "key13": "VSavC8koQD9w1X4bmNVd4M67DNh2FVDdARnJh84jwMW7YJxvBKxDSe33bbHjHGoTmHpsiyHhGv6CzjZ45gPbL85",
  "key14": "5KUZTUeKc28oCKPCpmXQxyfwTJS3ABm2hCqwKTkcuzwFReoFfjGTgp2XFnD9PY3mTAhVaHJjBMVmYdCqRS3EP3Bs",
  "key15": "3ND7xB72D8wCPxWLVKo391TTSdTQ7Srv1Udu66RDxyJMhx46e4kvMuY5ithku5YGH4t2CH6ajiNMZhifGYHkuUEo",
  "key16": "5ZtsHy3sCM6rrRD2LRCEfJc5mEAKSqmSC4G1dGkPzwsC8G19oG3WMHT7F2jsSyoR3Jdvmre6AM1d3YFt5bh8TfPV",
  "key17": "3VoukoT476Qqrrrvyh5LTSJ5hYP619AtzuDqfUd2HSLtuUUHg7sQZzc6dhX4SMM3RQKYoXL2srCn4sTmG8FgF7mJ",
  "key18": "5SxQYEYmxbQmzrro3efGibfcyoiChCxbE5XfaURbKJpKWX7qixB9H1YJZG7NDEdM668RfyHbT4DBxBQsHvKPb1Zs",
  "key19": "5bB1SFh5feJX8NynxEWHppJqHgJ2EQLktG4pnAEKvu5U2HYtdFPrUvQdfZ5ZQ7fLpDcLgTcKrjhXQATBJ7gfdAxt",
  "key20": "35aznbafeFBqH3tG8SPxW3ssYpXLStatj4VKZJc3FUxVFLtgSsSkegmQj6ozCtNcepgoMATYzXdLmAatY3c7Qunz",
  "key21": "3PT9Xh6vJRkgSwbYbPTCiNtVSjEXVSyJV7wzrcBF6GAnz8AQembbzSsQVsALrACtt3R8n5jv5XVH4sFPpTeMrbua",
  "key22": "336E1nXi4co3cbAkaM7Ex8v3r1LyJBYCaCy8vT9ssLLxdXJeayxbDkBb9wiHvogp8zbB2eCreuvpZj87VAtMNnec",
  "key23": "2idmBqhKSf8RqzmGvcLfkcG4vPwFe19pS199mJMPaPniMrB7oyUJ5PNqxor3PPgfYr8cy2BvCSxJ7knGfzYGvEwm",
  "key24": "2ViVGDgEKZb69t2mmTYddUC6ND5PBcdub8mhPTMfy7EwXVdUeeFGBVA2xLay3iwBmeetKvz468uZMb5XFVVMCxup",
  "key25": "Xw2MZed92Kxebgim9TVyKFNiCiKZuvfdc2nMDZWUb4S9b5ucicmAVf6BPWKSqUm1eCERdMiBbPtPwenzy7FD8tQ",
  "key26": "ipgVHzuhVPWaoTtWdsufPoDG75nTpszWUkjzUH6HK1YyPhmgmH5kH7rnYdFhGGJdEha8mXC5CwmYE3VAa8557oi",
  "key27": "2L2cisf3Rpfv9fBPQru32S8GdAz1WTcZMswQEn384J9RXdfDShRKSSLCeSVnnerrEo5WJoDNwKpujtfNFQDBsCYD",
  "key28": "y1njZe6ovdGWEvWXyNveyPKCsqr458msbyHEsvW3ETLypRRSTKJYAknsNb9wcwqnLGMAVH8ypEwMEd3eezSQgRu",
  "key29": "3SeEV4VrSmBnqAj84qrULvrAFLUrm9vTv9aDj6HMtt6hzbi5hwCc1rMYJzCBpfqGWFaTRJVi1RdwwDXXSp9vwZw3",
  "key30": "63wNpVr5Z3Ch1m1C3AuedH5MuZ5qse7tRBq3ty1JagbXoWDoCc6LmiKj6ifBqYVjTaFh2GeJrrrbCJ8zR5crtRiK",
  "key31": "35adktT7bw2cwngdg6AN1v2JzSPR7SoivckdN1LBPXoG6xjZednnecp2Xmuy98L6t3SosGyiRjM9zpN9LeyKsFFk",
  "key32": "2L4Qub6VWofGvNvxY7qEStoKP7EcTu2xxcvM3RnbpAHDAPEDmis5kX2q9a4ZWiYondsiyvxB8CoCHWxNMKEFaSkm",
  "key33": "5m6UZ5XRDYw1QgZq9iqnb1HKapQPQ7RAChH22nzUbuH89tdeTa2jNHXor9kaoYrdNVxqPnTKXqB8qy1Uj3nULzHM",
  "key34": "5oPFHD9LqUGGjZpokpx9JyVAUuHs5nBE5SuaVvnp1fQLRU15hn2vHxdXPRNyhCRWK43zwSLg9vYpiL2fryJnHheH",
  "key35": "3pKfkcHvsyJomr5qaEKFfaVMLNF31sxskJ3VXb3ShzyiLQHBWND1BDfTD1WCMmsoUMJxKabU8aCDNoJFP137oZor",
  "key36": "3bnKS1UeRFRm9rZtejm3ephg1Hi8QaZxz3vctKnxCGRGfNY66jtvXfMghDG7zHjXUijkPRFiHr91hyEC52pwdfGE",
  "key37": "3zXSZAavgBXPxSKdSZVrqm4K2MyTjg8YtThwj5ZVnwux71sXVTRyuZefqwRf11XCsiq8vSdaxg2FxWGzL6e9SLyp",
  "key38": "4FrKf8LJXFPem5Y5CaRX8UXiFjxBBYKkeUNWJVErMJxr53S5abTMFRGbgychN6hPSiUxxtwJ4vEPNuGGdHanBMYp",
  "key39": "4h8aR94fU7ToQTTqbEnGXZDya5qgfjmABtJEHMFp4Y9sXJ6sqdHPEzHSSQKKBbpiXL2hFbqaBqNq6RV4wB6jYbcb",
  "key40": "3viYensLaiQDJABpRtSCK8WG867FG4kgcneHVNPg8DcvdoKfiytRrXqVwrsJ5M39XCXMVLkT5gx6fX9DC9oWPjwn"
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
