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
    "5wuM9JW96owgEVdTAFELNumzCytMzHEF21bYFVP5v4u7weB6aTZvRPV9QbBFiFWuoDEBxzHFLt7hzvS4EjQ5vwkG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58fC8Y8L6MXEEBUi3vFxsBEqy1WJ362eDz7VUu7Ej9Cd8729McCU4QbmFYcJQnGgp5ekNJW3Xrr5aHgkmfH1A869",
  "key1": "5koJbeUqLHCENrocm9GLngFL7W4ULScZoCskdn4EngTsakz2p6pfE4zFcuUzZq24goumMuxYopobmFaDpbg3bSj8",
  "key2": "2HpmUbDZpUmV7SdY2LyyDGTqajjo6hFeykJCt62xFamkEf4fob1yWdUo9nnS78PXFcNtan4B8yTo4fb9ez8vcpQY",
  "key3": "4NoZKUedSHYx7UHDpzJyeb2BpDcFVZ2tpyPjoijERjNb7WMtiCLdUgHMJdmMoMbeeoSwjfuvucJviYimgxFfCLgn",
  "key4": "2x4xRmqEySLPxaNKf4UfuryYDrMrucx78reBEvKHz8pXn53NU5JMM7qLjtEA8Pts2PrZiQB12SULQYnG7WSZVP9e",
  "key5": "64QV9b9KzRBMuc1nQC8wGC1S9R63sbfbud6PE6hFYr9WxTbotjqbWeHbkvhP1HQBAew6VJBnJGnJxZqkS58da7My",
  "key6": "mWHPPJuAWeXVPxVcv4wXSNjNXSDCDCVrExQnNbGrqwxQmDAk9bE5CEpy5iarr8dFMXEvSkurmHJKwBJDwG62AED",
  "key7": "3stiUYCSfyqQ2EntUdy7cDrnrewpkV92tNSsZ2d1eujsui3XoB3XuVSg5KLCVrtFbS7DGJz1sEysrRpRn8A8uzjV",
  "key8": "48pWqdamBpLP5nwgt6kHuprZ6eqLGHoWv4z5Fc9LqcgtdpSr2F7LopZq4tr2ysPWufFBThqiV9vycZZToUtWfYLQ",
  "key9": "5S7DJ1FRPYZsV3LkeSXMqQYoCWryYPvABAjmjw3renCMXZmYxjMDxgyz3VoRBDSmiGKAupbPPHKpLjpRhobtidmB",
  "key10": "5dKG9LgwgvXCMZXbhjmJtmcNKYeDwNAaDYCyBhQRcrv8ESYUgkRtWubGqgWpXdzMuNXvS3agMcJRBB9tPafv2RSs",
  "key11": "3ekfG93oiznNaPWVD3kEFxpeo9YmqT2nneTuNDnSFWYa9YzwfG9sQAG8g7DhqB84P8qqXgK9UkF3XCcGNPu5NLek",
  "key12": "BWUSRHdXVyD9DpUQYjEfGC7oTfp1fhXtMAhT2nLXUWnPSrCp3LUM6a9dMmFsAzCojhXQ6auCPBpP6ud8gNXSwzT",
  "key13": "2NthfWH7sNjBsJhXuZSSJi7NGKmBjQQegEDcoewBphf1tnQLcDoXYJuyXV2Zxah3evg3KTbyG6xYEidvxXYSxoDT",
  "key14": "X28UGZUVwHcJu7B3ZdKVEBWNd2pJg1m8Wq3fS1iwMdCjCb4bRQ93XTBJcR7MJJECt85qEuDgvit6swdrhNVqxC6",
  "key15": "VeuqHKPaSbNejSMediA4LcNgBpKeaczUX5KzC6JYWQEpaQJAujFXqzJjU2NpoBVoTu3AL6qxgjsa1rQiDSJecFz",
  "key16": "3yhjPg8uBaanGkeZsiTAEF9KGEjMjMswxXWafqWmqfDkkhVxDJLfdeeSpx7Z6FsRbS5fpkR5PYXJNgVRVTjtCUja",
  "key17": "4V1QURijptqBaKtzrb8v7o32DjWRv3Fs1eY3iCVyQFhB8brEFamEnjNhhVuGY7t8yZBdE8YpmFtpifDjeBEt2X9s",
  "key18": "2CSZ7S7hyLqMzK9nyqggAjk1W4iKUk65LQeWsfXUjDXoTPXfueafdkP59VQgRH9Ase1Bx1YUmCa36wyw3AkDaJnK",
  "key19": "2ENhnPzQbt2ByVveaGoB49cAxRKLBu7UcppbpjMj2UnQ75WzLaVsQT7pgDar5zTDMcTciK6rLkSeDHyNACF6bcj4",
  "key20": "FDANQuBrJCoXbzexwhyevA5VDrwQWqGQRXN3HzSfbvbZRCeJSFNfXvcDC6rXW7DbZS9JSzKS18fwwmmHRff6Nzk",
  "key21": "4KfopfznYZhhLdvYKpV1QiBDpTJu6Vfob3FwvmzMwqQK7VdyYchVUaJbhcFdXXmGfzGLM8k2AUMv347iMxBxndW4",
  "key22": "4MyRDBk7EFJoHXpeTMNF5sDutqJk1kAejhaSis7f7ucxrc9NmwRSD78XzTKTCwdnsYQR2NdLpdVz8zuuLEJAobAW",
  "key23": "5zguishB6KHKgX4h6UXAQcT8i8U1fgkWqXo6SLbiabzrPpMpDDWChJoKJr8DmeBgHtfDrTnRks9CF1EAbhxZL2rY",
  "key24": "vBsVFWfsfFfsNT7TfvHSkPw4n1eMLUXs5Jt2gRdJxJAGSKGXETPSzJrK9Xs6WULkG8H1LApydMrzahwNr9JPiQY",
  "key25": "5ASyL2XYMahuaX4ajKcXpnKhAVf44ktUByhfzSCx38SqFTUDVefSWtxjpddFSsZbvGq4daBL56EXnPPriq7VEivZ",
  "key26": "2TqBsWNY7ZZ19wCNYEet6qkz28L4DEv2zBsiYowH9gYENFTWzTrUacAgDftyLjeyV3gZVwJUN3VV5cVWYUMbH2jo",
  "key27": "45kneuAH1NiFDn8dwrByhExc83z3m6w4SiCsBQiCexppuWX34Rp9nKJ9nkqvKrforVPecnUY4M38EHVE5dBJtEnc",
  "key28": "4GW5tgzu1Nx9gnGjMu8r8jwiP97Yvx4wsAbfH666LvnBxWTzpdJSg2kuQRJgX8NiGtwW6SZVf86er1ri2EJ3gqwi"
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
