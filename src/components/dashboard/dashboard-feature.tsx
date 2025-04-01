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
    "5yvp4oVHmzr9AMgk9ZzLeb8guv15MXyvPhNRjng1juYcJDatM7iAP5caQUQLog4pL95AFLfaW8GPzLR8zo7VEaXg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WkmqQnu49ZhZcTR9vgYwi4Rtha8K8RaEZEBya4MdLnA9D24ciHPMrBsRBnx4oDdcGwXbjYvoedpuz4pCeQAFbPB",
  "key1": "48nWLwJE772hiy3wAZmD6xQbKBw37bAeRDXuSx6cMViK3v7bobBy1hHskGnaHFdKyUJcBq5KD81gB5Jog1UEjSvf",
  "key2": "4756hP3ofBFU3VtE9NE21jrS42gEiyLt5C6g5Vobwenif5gN1gbqhVNr6xemS5NSF9jPcrdgZbkuNbmFgykJHHFg",
  "key3": "5JDodeLp1v4npM51iZnDUWdxwGq3nvapQx9F1WRd3xhoWf5Wu7QiFDQjA7e8xaamm8Kuvw32GDrjvWPE78EABo6P",
  "key4": "5zLcFtHRE1oWvvfG2jw7o3tNAa7p2duNcCmWpRazKJCjNYiVAwUoeXYf895wsUPsMk6TDgQrjFZRjPgnw5DmF8R2",
  "key5": "U2Ye7Mzg3W2GqsvM5ousTLcE39bXxSToD8zqUA9RY1wb3WEqYFmXH2ncw6HLnkT7YpzusxedHmiKrsrcux2LwLC",
  "key6": "57Dc3r73re1cQAyvEHiuxsaw9czNiSntLqJNGvjPRSGT9Yt2UDaZzB8NyFpiApWhdNzoQkfJBr8yU9Nd9FkXxdvU",
  "key7": "4CQimt1C7QB8JwYfUfG7BCKk59yiZezPtNf1arvfKbtNRftQvqaebkrE4VVAVUPrbDxDdgUfpb1qiUZr8uZcgzmN",
  "key8": "4VBJkcXpNKkazMX3FDvfkwhnHKKQWfNqf1GGDsdaZaFqRJp4mEkzkBCbsAUcU57aRXKPbLQJXBXTTK1tNVjestKw",
  "key9": "4ZvJG96ibtiu4m8gZcsQVUDAf4PKDAWLWHgiMtTMkZ14iVjPp44qhAZRqvtoBGu7aNpLFEu1863FQzpvRrTs56jG",
  "key10": "2sLg9FdQu25DR8X8hRMDnM9oo2e2uuBr5hpJoyVGhXZ7XcFXcfzY7EJwkrDjccFXu1zaGYx2YKDrAKGbcqo6Xv7n",
  "key11": "3uNWZNkmyweUQgTsfucfa5cdceWN8eVxHuTyiMjaJ8hH8Fv7Lmngsm6PQJTb3BV24HRza5TRskB8dmP9qAsmxW8K",
  "key12": "4GuC3sgfC5fuPqKUCpuAUkgBL6m8P4VxpZR6uGqn8N26NUmSvcRWMfcENirENgKxMiSrkaEL7SkQwmA6vjqNu5Yo",
  "key13": "3Nqo1aMrEqjfgiV91ysNXzX9JSe4rDj1c9M48qbroV1G9Hhg1rY9dvxKrKTtgQPqzDTc5M91MvvnW2ph7d4s4t3R",
  "key14": "37NE16SqyhTdtyceMC8fujxkMsmWzXHyPCixkDkXiKBsjSfrLpKM9AqDKSbZK9BxvVa8BtqagYpy2dmWWSvik2Yv",
  "key15": "5G9MTjms6cMqnsJb1bEpusvw3Db5E1Xpc1rWVxGzS2GV9m3S4FowUiMvKevF57zVFhnaRUskHHX5k15k2fJn4Mjg",
  "key16": "TWTpN6dR2VTGBmCbNZKZJcmwWJCStZn6DknZT1EHbEchre5X9q97ivPcWcCm1NUrZP1ia4zCQsFCtXg31Ja2PUZ",
  "key17": "pXteUPVK4Hd7nNyMECsTARXgKeQginuGhuNy7jKZT56TJQirwUgLhBdvbvpWhtZJLhJMTaR8CiMJhfMEYqeJZWV",
  "key18": "23hBb62iBSjmVJdrsbFrGNnUEZjmvP3a4wCsF5NmtqgE9MtiajMXEWV9Qrt2RdRyho8Uj2FA2EfpzSVaVP49rw7K",
  "key19": "2ktw5Dny2YKNXE4mcyrrXt4onFCVyZBhPZnJd4u7zHmrGhQo49U6PXpdgxnuzapq6jXjEdPHxtLKeFS3EjrAPLL",
  "key20": "4pK8Hh2cChjaKZK2d4fDCC7RmeXPxi8qHSvvgDhU2rMKTExrpnrLAa94kEGnNRqRigHrsRJ3kRc37X3Y7GtsjD2h",
  "key21": "2B5dnbDZzcuBs3KytfNeDX2YgPduoxfeaEWjnTi3e6i45Mi7ooB7xUaBh5JS4D3S5m5Kp8XxMUto3QCF7v2aAey3",
  "key22": "2ZDNJh9dE1fKyUxmbqvUci8yUBwhvaN6VPRv3RdRB5P2zvDu3KkRgnMSxDhA3FRLzkBn1QMQ6dmDtxhkyqQaSVhS",
  "key23": "b3ZL6xmkXkLGtLCt2hnGJaZFDFP2u1Lx7dDqLc2VKtTEjpWSKrpzcXVVfBgB8JkhmvEnHXKHb2mWcz1Y2ayvQXm",
  "key24": "23KkCvMDmCE97NZu59SUiaGKC7GBtCkjW5WNLgnFhs5nfGycbM44cUJ3yQtqTSmqjXTEEG6H1XaQ6k77BJXvdgwT",
  "key25": "4ADao3eCCDKpAExRLSTzyvwdcGfX2BXxa1nWpEsMXUTdmsrVYE1g4rumxZgyhqtUG2Gf61PG7VcuwP2Z7uK9MBV8",
  "key26": "5QVWkNPQmPEuAXJ9yQJD1XvgPh8LcLrosfKxupmKUctRPXzQ2fywBDQc4BaLHo45twc1rL3swrHorhTduNNr7fEY",
  "key27": "5ULVXii6qg1sZM56Fc4pE1fbq7YCPtW5wZidZX9yinYZsaKSJea9SwMjTMKsbAzeDvV8nqiqpPMQoprUHNeaqRMy",
  "key28": "4H7dwgrzi3vVQCTGsh7Efq5Egf6yU1ThVGE3ZxMsKeFZeaUYK8TH8DU37fU58LYoC6kCoviRrKPVfUFNjyksBbid",
  "key29": "1F5jFFzKSWoAJGdYVPYxrkHhJh6vynMDyZWRYjv6jddePcRbPXZWCsBsh4JXbEfiJW6C4rDFuxrMvFzQwMNYy35",
  "key30": "2ZNnnTxPvFD7fZmvMZNxfsnQqn4tFJVwA63q9BCLfTUPK76c32KrkMrWzvnc27qFCxqFTMQEcxzLMbJbxyRn43q2",
  "key31": "2Sak4JWrxTCaizFmFk5jjhu36h7Dc69y4gkfFhqY5W93A5xZaF5E2aiyGy3WXU6v3LvuaR7agxKBui2oNdbEWmjp",
  "key32": "66HFagDmsArSfR621wB2CsK26sFeqrKJDXLLJJy8duKssoNrpn6uAS6TqHAUbMfozqNb26XrjCoBJhxufLTVER6y",
  "key33": "ejexHqHovLsa8CcUcnGiJvWg79r2U1q7NxN32wL2vxP3zDssCTqyhPGnMMj8BJPYyVmdvMGymu4GZFtyrCmLrea",
  "key34": "DYuuYePkzNnwzfgMWujJfDwCvmDcGAEH7L4htGSnXgALPU3KB5eS6op8DcUNtmHdLjVJZNqU9frg4W9QArtzuLF",
  "key35": "cJH5UEuYwRtiw2Rm4EfLxbXbDhjoaP5kVw1F9HoMCGm9hXDQwfW53Vj4gA4FwsuHKxoPzzYYqmfg5xQ1XCJvdzK"
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
