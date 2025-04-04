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
    "MkXWJUGVkyE8yfhiAHaaw8hCMaWKctuNUW3jCpzta1q7f2NaRsWTWmMo4UhkfWfPxTbVzza6NchWZ6ssKj7wEZW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mHfWReTUrconSWisQKHQG3vvYJK5p8oGwiQjf44ochRJoZNadbTWVfwa5jdXBdaFnvZBxt7k53W1D7VFf34zwKC",
  "key1": "2nQeNxGYWRm3px6RJiM2x8ye18Wj4Lk6Cic52RiDixAXGGrk1kN2WJAVcLPW9p92GqvQb5qpCrN9XwU2neHUxsgx",
  "key2": "5r4p7kVbtvF4iy354sVddQ32zK4AfZnK3xXZo8a9fvbpkgtMQ1XZfncAoBRmHnT3TRHbTtX26tWtKLcANTopBW4h",
  "key3": "5ovNX29jfoR7rKnPsY135MvPMFLZJussGgWxKkrauhWqBewBV7qpnUGdvQCn8sJn8qkSgD2pijKSoku9ujzzfKph",
  "key4": "53cmYqZFMQxQeV7Sw1uPLxCkKGKTnsXnsuAM7DtJCuZHWqKCLk8eqyQvaURwCnrSLEmuheBQsCB6HEFhcFjLW1HH",
  "key5": "3ywkgiVtaJPsNFXMTeSURdeeDNNXvkVKiqr8jp9Ebw4XVNXKXCziimbaqpPs5NZ84KMGgyrnZpuWpHeYHANmk1q",
  "key6": "58kiEuT5JxKJHWPAmgkD7pwpPiYTJoWnghgpHL2WpSuTWYX612MckuYWXdVFCp4Zem1xPQ1QCmcj6inqJaCUSY7c",
  "key7": "oovjtyhCzpLn9jAt4vFUR4ByPUUJvEbjHQBWzvYEG3WBqRTBNakhJJoPvV8puNE3Zg7qJrjy8DMsbK8PvsaV6Ba",
  "key8": "X5tQF5myD4hsbVBekYrgfjhGbt7A6eNWTZKx4nTsm47iGBqWXEkAqzLBXabHJGoocp2JaFXDFySKs66xnk9vGvw",
  "key9": "JBtiY9DpWT44qN41k4fHBrppj1uumM6B5ATqBNmnVR1iuzJ8DbvZQXSUw2iUcxb58zSPC4sMcbwNGMsTeXN8bhF",
  "key10": "5ZrHM8BthqV3GX6mknm5RfTbZfdxcwnHgrLjiEGJt6xxHAEMYUkoCEA6d7aSaA9W3CquTVBFQRRR6yiP1tWHTLm5",
  "key11": "3bf3rU7FgKSGCroX1Wksv4xBAL6oA4t6hWSqXn7xdbRe8XyfMknWAH7EiGmcvxnPwc8mB4xj6YrBPdNkf3DrEUQD",
  "key12": "3KQhufWk9oYjGdDRNKAVkMt4MuHL3tP7vhAP8pjNKFDbzkXTXvMXoUF8FxV5F38XnfHk4ujnvHKmoigKyPmY8JZk",
  "key13": "27KWjKJYLouPhmYghWd8X1exTT9eh7SZaLAf8mwporAhSP5XrQGyRLVEAZ4KFbptr6u6hv9BkZ7ZbLWYfwhiGEHm",
  "key14": "4jPKMegRy1yuZjRE1rTeiGQa5NLKJT5hMiJKBejtMSmCYDBFdrGkRgJr6KKxk5vSRYfk9LTz7cchuXvmvt35eZAE",
  "key15": "216VEoxupqe3QrGzVUhK7UBHyYqdnGWeKT33YBeyb1GBSfxtfmDuiTbGXEK9fwzG8e2Cc2X6566hDSM9KtifdXs3",
  "key16": "8a6SgaMWpGv5BUUnwwaMDq6HAxSx6gfhNbB9rHssgufuTPdMvnFciQxmzNgJzzarcGVwN8okgEbAexWN2cke9eQ",
  "key17": "56taBzz5iVC6pTMSpzuaZ7PD7oTQMFdEVhGsFHfCXTMrhs9gcZuqSN4PKm8Bymsp2Jz9QQHYjK5o2RnSJchYLPJB",
  "key18": "3oR4zUfR4zESQ6VoBtu1T2g2pAGF3r1qKowQwTD9TmYHdr7Mj8HnyiMdKKSAvKYZEkSu9LyDJYrWHmEsjZDm2p9F",
  "key19": "4whUTnVJg6gsNbKie3MrPutQYC8AVX9ZD4FwD76ygUjtX4oWDEAggXE4GZAdZPsJT6quMdAvRP8wGFFkuspeL98G",
  "key20": "3miqX7wz2X1jxY2oqVp8dDtrXmms83qVoHTyNSUkuV2cRwqj2zY4MZE3SCLsnVCEPi5V4tjoJ7zM5TPfNPT5znbN",
  "key21": "3as1KG4CWaH5BsPwo3yWkDci6DKn1hicDDudpV7zxqotU793xtaJATFqA8KVNPTyrddDke6RMZcMeSBSRgo9BaZG",
  "key22": "3CpeQqLCTy5Z6ksvi9JgNb8nVzKnYPTBmPDjDmxnaVpBAZ5pnSwrhDJQLLBkgAu7LUQH9u8N8uhXDzbaue2GNPV7",
  "key23": "2mYSdLUge3snZfig5Z3LgSydNKR5EUGkJXGmjJDuPy2kPB97KTu1Bm1PPWssyfNzkVSFWrJ7iCt5c3Gf5sU1Yvch",
  "key24": "5QPSGbBcdyaYfAnQmJjotTYZi4stNXwbFK3mSqfgjfhziLU8twa8W18ZtbNwrimoboCQadYkRMnTaJjE53JC6qrB",
  "key25": "JDy3EB7gTuFxBfdvkwU9mdpsmyHACuygr9fq86gPWHyAYrMf8u8k7twyDgBXdva6GujRLoTpEtGJXG1Db8FNvgq",
  "key26": "5jQgrgLK5Us1kFv8wmMWJMxt8WoH8q2V7iuqvc2w32ok2vz2LoZVgpBGe3NYnLNgBdGihAKpvS2kHwpDkifZTdLW",
  "key27": "2BiPSgqV8JyhQ9AThKkBanS3ouUn5nccNq3sS7d9dhSepgjQDBECJzRfwfV2S6qHnUHC8gSzfFdDgwhtdpGdfssk",
  "key28": "25yHcDDwwvuKNuKk2cWbSCSFMb6CGLS3ABcP371cREFTSFAr4PnMCYiEkPJPj36Y2iDkt24rDdzfz1Fn6aYWff5w",
  "key29": "63f4uNkVsedzTqzJQPoUW4gfQmWXzhYKTbwabnouojSKbAKfqTYYEbAH2vuKzoG5GwMdxyXXhKiG4Yz5iqMkxaT3",
  "key30": "dqmwBYkfZVDfmeLZFuSWh3NdiAk7FT6UZ43r6Jge5ZPdUR5TQA3MhFi83EGVxWuYTmWv7jscVwb6f63iCJmEYY2",
  "key31": "32Af97nVfswG7B2yddCTXA1arpdS6QjYpa9iSDg4LBLq6cJXyDrjdCnDSsipVHFX6B4kanFG1io6pKmCpJMFLCUC",
  "key32": "3VRsHXiwEYqKXazxzW5NDDw7G98MsFtDcCwu5cd4eBcbMTqZwQn9xFFUAsuEXww7QgvXJcsiomi4LkQGK846Pzxz",
  "key33": "2b4kfPBJzyQC6c2kQ6LcGcRXW8LNiqVN6AHZqTTsjXb4b1zpbFj8P5AJoD89iNDtE1XLReXZtW8DUQay8LrKC2od",
  "key34": "3TzVpSpYWE6HH4pEjz8YJMt7DfFzSrgWQfArdnEB9o5Wu3soiUN5CKpkSFsSNhfVdk8hYp41FEw24irhQv5t7o7c",
  "key35": "3JTFsvCptdLNUc8ojYTDeEkJTZu88fXtKcENkFaQY86udxGXGsMjJpdUbaM3oGKtbXM8wx3uxkfCDR6UEScgT6aq",
  "key36": "4HiwoTzZsbbP5pZwmwRoU8WrfaL7oeHEMgqKFufJsmbQ1YJKHWh4wHHYqtoTzVdPupNwek7iCxTUhsCZoZb9xrPU",
  "key37": "3DPjreW5CkqozVgUBwe9PGp93Lq7ENLzvdXX5scWH1HFKrBwW27EDyi9EQ7p66tmZZQmgXsZGQHcsFvcsGVmwKQV",
  "key38": "3rE4BzfKhXfmDHEZZLMKKLXtGHSfqgzD7y6QpsuceVnVcnx9DfWw5kFndYEcKQgGE28k9JmB8pikc6BvtXhYio7W",
  "key39": "4Ko6cVG2jSNxV9wGEX2QvpcTwbMiHKagxLbwMQGQAdWaM8ivnPKhkGfpD9sPvetSg6Zrx7F8FUwb4G1cQ2C86fnj",
  "key40": "4QJtUfB18NawwEsRPSANjLNPYrAQB41qNBoyxu65pKajSpCK7DiMLHJfDF3fU7Tor5Zt5WVS7ozj1v3dCtAYT5bz",
  "key41": "j5VqndhvbgjgqfTK2evhCvT9Z769gEFgBVsXs859B4JT9Tdk5WHnD7x9zhLFjMGa2fnTGxwYH7GRgmMFynrqREd",
  "key42": "24hvx8BuwS1djGqQnEatdcXH3iWtDebtofBuggFSfpzgQGNUiFUVwveVw7QEm1N66hU63JjFpi57kX6FdBt2nXXE",
  "key43": "5NupGoUuDQf3XyfdEW6MYXFdvdwu9nc6F1JgYgRnrfMCs8HtsudzgSxBnWnhTp4BE7bypcK2TY9gzU9R19HNwozX",
  "key44": "5LwG5hgoMigVs8Vew5eEHjmm6ULaFS1H6fZkLhJ8kYdU2jxhyazCF4ieSLKtE25YbbEgqWgQxG6Sq7BaandLXAeL",
  "key45": "2pLtMo1pfDFxdUa4EaSNGbjj9hmKVzzZdxmGEySZveCGimtnbWonAQZqpEzHCmdqvi8RZjjtWruMBpEoTB2TqWBG",
  "key46": "4H7EGFWgF4DnSNqKM3rR5WiJ2WSepxq5Aq3KYy3HpVARrBTb3tuh4rUVweQ88eBbBSh9RQGPa8HNNTBL8uQrsvL3",
  "key47": "5EtRmmzT9HTR2prwfGxgc5dDHyXxGTERxbCvFZ23tvGf2fbSWXoSocjq1EaooMebWDbqjQLsbCVZJQ9DgVstEqdW",
  "key48": "3LXjXaB8wFxpExCBkgo2StqGLa7ipYCNMNtCWTrYsjvL4KwNeDmReGA1d3eJZLHVfshV4FuoNzae8SJnXgdKpR2P"
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
