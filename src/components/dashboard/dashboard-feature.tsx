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
    "3NWghgk7yPStLnToREyYgJN42C1E8ct42GqvyoZxn397UCP7aYaFycJ5SwsMEyY6FRXbG1sLhkGJJzPhs5P5XiMp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YyFVjY9zppcjhtff2xhCcEy7baVPaApXsidqVfJv2UVKhy13rL51sAgxBsyHxEQZEdZY9YbXA3qHFXmERnEphWz",
  "key1": "462tmD9w7fo3ruT9phcbtiRBZ7aC8PgsMsB9egLMGSUyMXdLLPpX9BGip8Y9KEj6Xydn9YrzCAuXg3hq4AYB693f",
  "key2": "5w4gT25NkN3UQbVp1gzt3Wahgf9W6Noivo6Gfm59e7qEPwZtmWpHaUtWcn5njd64iFrEa9wjrbUE4tYwUHiN9Eke",
  "key3": "2b4rZfuDYZH3a6uLQbqLyFoE1UhE3XccZvHajqeJT8TEAb5dTEuG7YzJFeZhVSTk2W5793bPf47WF8816dxtvQNc",
  "key4": "5cHLdr8Tbkv7DBsiD51EPeo8wVnzYrjw4dpPijJAX4CV3sHfrgJTVeSnsXX1XPJX2Aw9Tx3aXPkCHxKD1jXxDMyP",
  "key5": "2t1661a7LMQbjVgR4mWubrzJNeotcx47xQQEwC7H8v8DVtoaQMXErUcPyJjDDcmCJMMkgPDowXv8uPPESXyncf5g",
  "key6": "5DtCPLu2REBce64Jkijvgo8Ssgr634ZDJSw9uKraSyugqfVKbbmnncXoK51ttqB2igHEkdrHWBEMVV79yyu8eqqW",
  "key7": "5tHydp7hfroPazFpS3o6FgPPzDVqcNWh4fQqKqCzXUa5RmHnu2diCaQ4RdZitCvJ2PxjwY74WeunWixYdHG8xRU5",
  "key8": "zeXKTWP61MUabxCXXdsCUfizsn5iv4UeHLw8FMz3jQf6BTFUvxkXuEwfFTsDvKAY1mXwnuuAUpeRe6P5F7F32Lt",
  "key9": "4bCQbiD8svUfht7P1rQmCyJnXUBXENKkFoJn8odA8d84ihecJtDuQDSgDH7u7EcFpRL384ajw1wyigheQVtmGmG6",
  "key10": "4NkNpYMgeFhHCrGgNLrjAS1vpoBMHRp4eGEVTwVKqhbmsdYHv1fj7otdP7vi1m53V8HtXCvNKsWW5qAwtPZCkrRq",
  "key11": "BQSyM9aQA1RD1eFimcK9YFHNbEHm6zntBiNj3xieUp1aDHdif23ywV56nfgzzn3nm59PUuBxTijRVKnKFacpFdK",
  "key12": "4nbe3qGZeUFKidRw2t8GFkWQQXnDxAGVsbMd5ohfDBQQv94fcVvrNfq74Yfg5awMjWFV97rpkioJhSS8dUfHQgwG",
  "key13": "58z65KdzYxRpC1ZadbmhGB7sX4tH73nJ1VWvu9VHsCLoWHDYeB9rk5rGyzAYxCHmjQrbn6QFuU3f7ufoEKS8Sgvw",
  "key14": "gCRTGdNc8fajTnZ38z5VjBktFQnvYFV6yucCv6fmrzTpQxvYokuaa7kWTYA6bLhyn43giPukro7h8TjoE5naVHS",
  "key15": "2MCG3GY3o1QrtLMsW42cfknn9Qhe7x8s7jMVhyf4ctYaz9eBJuMe7L2hKzpc8hjVJQAaXPMGmbDVgpSnT2Vtizgf",
  "key16": "4XDCr4czv7jTSNdEmorKG6EGuAe1iKVbXRkDPdhSTFacHkASMEweD3hr8ccfjYPN4Zfx1DZEPsXwAy51LSugNFS2",
  "key17": "4jf5s1Gnpq4k5cHYKJiXVdBXJ2UyRb827JKrCAr99ZZehDZSECMy5DJkCwT3PJwwecCf4KbMNf8nSVQNHzYf6hfj",
  "key18": "28tPF5q5aYkPmwbpqFotQuC9ckZSxay9raeQwB4ywXJWhiFAuprwZ6gwjbHAX1XZ3PxzP3RnJUYWgYbrgfpGK8Nn",
  "key19": "iYEw8G5Z5XKBunwTiG13Y1nCTCsMkf8u4MaYXCPWuWXrJuqP5vh9ARPq1jNqYQcCpGUXLp4u3GxHUDpaJTZNong",
  "key20": "532rXJMCKMRDHmdXpsM1wuXwAPpwy5ZLXoB44DsgKM1eDjWCXX8cERKWacv7qMEi4FtoV9LdtxGqEvH7Pt7DAXJf",
  "key21": "4nhouLAFg1VoxY571wWZdsWFjbMUdmRW8Z1uSvdEZV7PW4asppXc7DjVUZKHxTaysQMJSfcB8w8qG2cJDvLmRJPb",
  "key22": "5geY77yR1W1GGgi78JnUkHYHa24Q2xMdmLqUK5JUVfc9hkeSzVJ2VG5FuzveNXMoQJrbPzRa2PaQK1xXpm97nsGv",
  "key23": "2C75832jKHnGYjmsxTmFCtfm3jN98J3ALaLa6A28nZTrsGAzxvQQEaQuye9pDCysSwN2BeA6SZXHbEkjvM1zrWdL",
  "key24": "3MpMKg7TWgdsTHrRGaqWoMJhEuXEk88adtVgfZdXw4AsPcHSL2C56pbfEVcLHnHzwNB678j1ywiqrzTLtgW1siqK",
  "key25": "5gVyFKrfGEH4nbFQENbfuftPwr6PGxTFYYZMwTrnqdBShYQwu8rZPNH1mQWqJRt1hN386CHoyaJGYP4GoNqXodUu",
  "key26": "5iz6RN2DLfRDSRrpx5Hkc1Gb7m5BWjmNwNakxMNfY6bDmXFueUYqSXNcubbRmtCjBRneYvffU1zuJtF5tr2gN6iS"
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
