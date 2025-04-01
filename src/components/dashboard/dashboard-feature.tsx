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
    "55TJvcYstcoSu2T4UNi6pvxvuYYGig7sHsP3rn8sBKHiNmbgSiNNJvorVZYvSGXjSwfvPUH65C5tPd6yrZjN3oC8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jbxH52bQ2LXoNarmNUfJg4En7ry47MFDSFRu68XhfzDCBt2Qh4xYE81yo4UsxiMUCMMgKFcHkW7PQYuRD2g9Q87",
  "key1": "2SxWKdWHLiP3wDos2UMZ6PJqkxSXZzzwezENScGG5hB8uEN5WersR6o8eWXBfvWLSEUYxyAirkSXqwj3L3zq2Hpk",
  "key2": "52bV9uDA8SUFtXocBd63DFybzsSiwa6WKRyz11A7ApczXUDEn4HueyE4g1HDmNzfMpdf4BdrcU8T3N617aDnNU6v",
  "key3": "zfJgYvYJL1Hrb5ZnYb5Nddur1UnNDrg4kcNBD9m1Mzqtvr39vCiki9n3ymLpVWbYUp9HYSdixgufTxU5LNXSpHu",
  "key4": "UjrZKhT1VrbnCMqTn28dXTMxw4BRMEFUx5yMDujCvK9Crf62tGj7H99ndTRq7gBAW6WcmDDGPSdn1rLjNE4Uqcd",
  "key5": "KQNR3RepCKeSaCDJCg2R8iaygMjxFtMtVEuM8qSwAwdGawGTBWi66sx3nGnfgqoqqUmFavzSxfmubS66x2En6my",
  "key6": "3ZFBPUEdW3pZZdufVYdCDLthfkxzknQKVjbKxid8mdxrrNPqoxBEkYn45tboVNLS2R8ahTnaNcBLKv7zDDw2wNz2",
  "key7": "hfDGbjG3KMziGZyrk8TP34AXv9tHB9uMiEtj61uE6eDV6NbU97N1XCCUACGgA52Po7LZAidVZ5Zw45jSEj3xm4z",
  "key8": "rytx8eZuiMaqbnx96ATCi51avpDsQbrPqFkQP9zBTggemrg5wvKWfDbGVJfLZqawJjo6141ofj8hniThFYpjGF6",
  "key9": "2U6waVpdUjTgWsmtXkUbdm1QNpnfiEzQRcRX3xpJ5NBi5XbTna4XBTSR6iNYpQmdDueA2eAdNSNYhybjcPdHiAGS",
  "key10": "5Ym35e7ZXVnfHX3MTGG771Ya57CAAWHcjfhDwfimT18ur88wsYBT2mYzYRhbgAu2suKBKojpLgw4THvUDeiNqjX8",
  "key11": "4aU4LHYTYEGPY3wLaZ8WrGxj7hZWmhvsdT6ieZie81dKf9yKT7x39LFZRnbkmmbAyda2cLZ8Co8ZyYnuKaG7sgJN",
  "key12": "2To3fLDRcE4ssxcmemQdKTg5d4vtLkfDkDGxStTqivfhjvtJgPfpG8m4gjjLGx5wyctwXFWoS3xQa82Dq6t33eJV",
  "key13": "2e1NYDZ9wrHapcQLsmvYcd7tYMWqPAVEuKCsVQjPivzvMDywatrfwXkNdmUa4xropsrr2VU1iF9C74HavfqaTwGh",
  "key14": "4z36SBzgUpMjJDzFZXFNWwLH2PEQL29fozja54vvZewzaCtxEm4iArfnGFjUrYEsvACaPdA5GK3jix8ex4ukxijj",
  "key15": "tzdLzpMAqXgJX4aL9ar8uNK1858xegwuKLjC5sB8zjkxgg73P4jgD1JCcmJWwREeS6yiQceTCo4ysBUdbVpiAvK",
  "key16": "31gkdoaXUssDZHYtoabAPKZLM22FiMPWtnddU8PL9e2wCtC2bZqCFSRF4qWKfK81gEG92FbuH4ZiLF217xv497xJ",
  "key17": "3PnMmFVFES3Cpnn9NfnWaiN5u2RSdtG6P1FvbE79nABFCVLXwEARsBdssF6sEErMWZRiLa5h1ZRWKjNQXiu274MN",
  "key18": "2mFzscg3bwYervhjH3BYiekrUmj4SFRXGt4r7cXPon4RnfMfNRX6FsHonBBHeJx6Qo4sfywiE1LgpBCNzYKWeGXT",
  "key19": "392hhFN68DvqzFwsqD9UbEhgBdrafrcxiEHbPGys1gAwgz2JDDzN9UuxqNSHYu5cJjjUkBNdhhhRzpAQxJq2DzqX",
  "key20": "3H8BM9t52g55dzBGL4TBa4g7wzgJtHYxw5MKR7zEbU6ouLH7pWwpWsReYAQawBLGb79tvm5tt68MUrwN3WrjFNnK",
  "key21": "3Vcsthg1RecAHJwnkJzCu1yDHxQhy9JhywBow1YXLBaRQjwKnUGJmnnieq2VNpKBKjzP5VZZSR9rXVVLEvVTC2Ez",
  "key22": "66V5hfPqvN3vXojbUozFJyBFHU4W8umGfmZCqnKBBnTS7Cya2CCs1dYEwCwt8X1inGzPSn6tW1Bw7YK7S3156EYa",
  "key23": "5b44wj3CXNofLWCG2wLqGXj6uXtisHrsHuSd16HnpQDSzC1xAsKibAcvAs9YAiiuawS41LeUfx3cyvLE1yptvin2",
  "key24": "5DvUL8sETzkVR2NATAgibSry8XYuyEzzAb7XyRVwgZpcY68BsTQYCoSguRgyG1UQv29K3S5SqU4Qa6bmV6Gfs6sk",
  "key25": "3Bm2XJ5Q8ra6hYBRZAHbdCBSSRa7T7oKf2A6zhkDo7mXHbaH35myMyPByGMm4Rt91jJtTHVGUCJKEStpx7oLWqMB",
  "key26": "67SSJZMqsQ4EXPwiZLp434TBCD1Wa57v3wqWSkoTLZbSfm1HaFpk4NMue5z3W2Zdx8KGDVyiucA6i9rsjCN2Pr8P",
  "key27": "4gUgJGDvXJtQjEfxZ3jBN37PSWeHFAjRQD2MgRNHmJCvidXE4heEoZZCjsKTM3WMjmw41iELCX7XNg3NJkujr7W6",
  "key28": "ecDDnEKRa5JLoE2ChwQU6nGN94BKjnHSA3ZxHCL8s2oRbkFQyreDdTvhNXS5qRz7aM5qrzSfyxU1w5m6nAhufA7",
  "key29": "4VebbXgCyrUV6vxMscfKsTVjruGGGNsXSab4wqyVx3Eic4pSzFzD7D3hBysD98aQBA8boBXKrUFsFLeBoF7uKrAK",
  "key30": "4q4PSh5uAGcvQvY6SF7GBD6eXdpmCjj5Q5XL8ZpNJcuPNEWUNnBfUf9zeZobHEQS6GpPNot2HxeooicQsn3HpDDV",
  "key31": "5XxxZvXQHJFF3dP2zgYfbAoCM7wMuMqLZ86kLWd3ZKMtmZgkkqLFq9r6zrSp1gJXfvt8RUK2QjLQz7J2E5vpe9Jc"
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
