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
    "2RLAvLumA4oFf8z1NdFuDCX8Ab3p6G5GpufhKxRhei69ovrxvA7qQ3ieApJTknAuJb7aa4cuWTrHVM3zDwrhKnhD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rd5f2xWVMvWwwbmUMdD1EFwbeTsAeHAeeF3Z2hUHUYPQmHuZV9BBhJUG497JHoJrkVs3SizxdftPMdU3eHBBSNP",
  "key1": "56YwqvkKsvFmXXFwe4wJfGdUb6QXrJ51wvWf5TfsMK46zjHMNbnr68M6PJfCVKW6PhwKv9ERS2kucvFofrEDHu8k",
  "key2": "3o9pGCmk6jGxrmRZgCwi4m8jC1S3xmwTR3knULV3b2sdPQqyd52kznDdEc6ZmKfm2srQe2buGgf2W3v4MLqKewMg",
  "key3": "4XzGFYSBHoYfQ6nEMGxv9Qv8UHSBBtJFecJ9BWmcf7E9YqX5H6TR7GmQgagczzGxNYp7hqzJg3mrwZT3er5PU4iU",
  "key4": "tgFBnwcK8DAPuxAjtSVJFiQuy9jJSgYHj9QTMznTfRgSF9wwdTETcK6zceLYh1kAGR4cWLJZXrqVD5TvRYRVc6a",
  "key5": "65RrCpND3VZtq5sKHab4DLSqvWj8w7aK1mpkEmSFcZEDMSRrVrjaY8e6SGtr2sk2bSgDVovbbo7kvdgfNJJuBpMC",
  "key6": "cxKJxRz9HttRswDUNm2A8hrCoF6hPg4vpQkeW5fuRLici3JuekgnxxBPAvoQr4sZNhhow2rJeM1fpqKgHW1B6sN",
  "key7": "3SqCYUMANod1G8rphxA9JWSwVCEaXFsktQfNXNGPLCfza71dyLxXuQHY6mz2bAQzFJHzTfYq2RcBPiTPVSC66MGk",
  "key8": "3vH6bhA6SizGaanjXim5W3VKx8y7TVHgBQ4STsi1zWR8ja6PBa6JnZptQVnbrsExrT8Wxxv32Qkk7gGjjUCXVnoT",
  "key9": "5rRrZXgEtZWdSJUHwMLyE8TMyU8mmGZPgruSDGaJ5K7ogKEH2APvxNYGn31xe82X8H3MSw5kUkvnTfKfL9QpWG9b",
  "key10": "q9t5wJaZHvRHxaQhLqwdpZWKPUyQsRkpU93wHK2nzXfdHyDrvpPhR9sx7UWHgL92Vv3Uh25BXf9UQYEigtxsabj",
  "key11": "5gxhbQ7ifEYT1d9mENEgLzNAWW1NtHJiGtDhT1wzbTDkbhCQB6BpQmMUdPFudiuAXuZzNTHPbXy4xAoavUmtpoM6",
  "key12": "3wL5PVN5rscgJ7rksjEtCQuw513ka9LKWP2QdMAbZngNhEhX5C1FVH3BcXaRK7YCW9PUYc9KHZivQfNQZz6T6gMt",
  "key13": "5UbsN3pa6Eo6gY2B4Mw3SPxALgsLXPo4XkS8xchnWgPkFija82MNK3LFro4jF1ycTGT3vhTa4z9REbwHoc84MgpV",
  "key14": "3zLzxbRbZtkB9XmsuTo9JM1rNKWiieWNTRrLQ8TNR4WTccXVzqaiCneWdpmAAu6fpTqdo3uwpW8wEzwYEMSUN6xa",
  "key15": "QfVGnkjBVBzVCGh1pdZDo7GD7X6uf5bxsgzCMqevofYFeCwuPgJZiybP3SSV4U46eBkojPfZp7TXwbXRUzPJDyS",
  "key16": "qgT9vd8URWCEMJZpQd7aZha5xy6fRUBcqcmz7NaZwRhwvFtRf4suN4dMbbsnQ9KsQfC3iucWLceYiCckAdJRVUr",
  "key17": "5TjSPxrh5UUNc6V91AXos9cNcV55HjH6ycT2jjSkzZVRhz7J6tVGL3i11Y6yqk73Q8Y5JTTmpKLcfcrfDDu5weP8",
  "key18": "47uKmwCDYFLyLewNjrKAneGsF2K6jrS7YjFWLagrgihAxKfLYressxr99BqG3X2Z6TfkJ1fjJ9UszHUhWkHNYk3d",
  "key19": "5qgABPAaNUecKzwteD2TVKjd5Y45DsWN6k9bUDzWLvnLvxa3XMYP4gp99u2QmEKdCMBpiEh2qUN39y7a7wLunBPK",
  "key20": "5wkaLv4tff3Pe74Mtxsy7xhquczZbyJ5oLgFXST1ZNqVaF2hKd6dVracvpjAL9PxTUTT3TFopobQEARtmy9WZ3JL",
  "key21": "v7BdsXy8MZFmhpUjwgRst2Myg9fdoJYhdqTkDRyz1WbvinWUoBHmFHoiuCSmj7VswwqYuXb8angvEhHuAvavzUB",
  "key22": "624gPoPTfuavC5XxfZ3dHjnBwrjYZSA44XXmCLRLPP4dVDoXmS2Umpw8rNU3eWLd9t1YiBFXrYWbpXaW1PGGaYrK",
  "key23": "3Gh4coc3ezGcRqyi6PeohhKubtfEw87eHwMKq71Yj6c3o6ctnX73K8bUcDEQ1DEiS4zSvyoRAzPdSvPAy2RVNY65",
  "key24": "4j2bBbbPvNceFh38jjNUkMybb2msAikc2UzRsqohLuxvPWyuyAHYxMxMLPDxSPKxbxPuyZ9wweC4DZQ8fZ67ctL1",
  "key25": "5FcNsw6zUXr7uGEez6J5E4qkZkKCMorGTJYahEgEXsAHD1iLBZDYZCVRbskj3xuNy3RSGRkU4n29GscbHPK5huHk",
  "key26": "5mqHHEavefJhPxij5YnAKnSRKHMsPaBVhsj5Let1433U2RVRWKk7ejX5sXWPqTi5bTPxASkBsGkNs9kUMA2GLAWL",
  "key27": "42mMJCvBkeGrtkhkx82Nsmasf6wzDUACCZjRhSA8wtALgWjTUAe5NJ1UuCMXYg797YTXZZm5je2Qe4MCXUMvapo9",
  "key28": "5nSqK3QJVxqEoWuJaDTZd6fM7R6o7tVFe8MJX4Fea4vcJ2rWKMsgfLSE2Q1zhcWnunSrpmVz8a96Z6DHrmDj2WFc",
  "key29": "5qnX21zLB22xNYwhktJarzymx14LwKfeTPecqnDtTkYz1wo5H6w6P7TL9TH1fxcqGeiuPEiuQBiSTXKbFhuqQ19o",
  "key30": "dmJa7ZEcaukF3T9uQ3HeoxnPTczgyC8KHYcFv6Hy3UFnuWNBSdojfcxBDGT2Nw3kcq8L8zKDnGMmUhu915JM5XE",
  "key31": "3EjTc3cS43DF9otwAzpJ15Yajp7zviavjPA3DvPWvieALKyvegodBzCwnwEJoDJ7SmfHKnPJxsEiEDRtrRUizabT",
  "key32": "2euhQBgLoXFRX7gg5eBRQHcvstJgoMgGpAaexn5XD1ofBTde1zBx4UXonuKB9PPGzvomD8QxghxRzS9YtKMWy8kN",
  "key33": "2tSc97bS35fStxDQNAdws3C3a8pYM5nkP3bwNomDh4y8zSb7wkFC6JguVpvBnGpk6LFSTLENdycoVtxXUADmPfrA",
  "key34": "5PWi927BdFusP9L5tCEnRcCzDV69SR2WmwfoTu3zncGLydgmepAsQQsae95Vs4ipAw8vJEf3GxbuwnWQsQvm7paw",
  "key35": "AWHhb7y25YTrtVYiZF5npb7Ljx9tPSnEaUuSWnnyWKBGyEYYgnNSFvBd9VYjPB8uGbdf5MAcEJMA2YDNo9Euicv",
  "key36": "3kmQaJpNp7jexA3YFAzmNss1agiLdL7JDaB2hzfw6ogR8SWeT3rF3DNxQL4sM9sRNnevSpe5XYRiaCctcSr9h1wd",
  "key37": "hmUTs8ciPToP7sRggpCQstoEjfpXo1xHVS53HvTnCArVLzz895dQG4PBhxqXaeh7xPaKyA9QS9AyPD1JbB4VsJU",
  "key38": "36Rv1haJ9bML16v5a4cm4z9Un93DnFwA4C5FqWvEd5gP1FRS7uDXPcWn8abBN4eb2YwCcPKHEd2Zb58CpALLhCiv",
  "key39": "3CkxXME4Riy6RNddUWeDpb5ZZZG6Gi4tP18fEXouwwQDPiJM98qdDFd4NF4EwFLcC9N5Y4Zw23jCW36fwwEtdb9D",
  "key40": "537yDqvE1YDxYPGDfj9iZmy98hyNDr94r3NSwh2b8uxXkpX1ck1Y7SY8XRvj2byHFoHbwCo5sxc5Ys9rQoPzY65",
  "key41": "4mAuUBnt1ATKnLf6gy5vPo7s4pdbRXCMfvRqQAgdkH75AD8YHWPHdfq3GcZaeeusUk7Gh4a97b5aLo596W8Fbah8",
  "key42": "59FNG5hGSxpwiMFSszDo6umfGi7XkXexAKzCAvSQYFxr4K1QaAaF5MDjXUNj89bPQWPVjrBws5SyFbanFrLJdP43",
  "key43": "2Eqw7mELkNNGuYHmdX9bygSaCxdceaL4zCDhm2P7RrtsrSeJ83gSUyY4Wbky6XHPfUjxkpyENHQ2mUoabqc2tuoZ",
  "key44": "5PgWi4of48raCF2dJReqSwtQCNNP9hKSHdaLrgiNAUaamXVuZ5ckiyvCeotREL3cgbZnsQ7eUpkGjAgxDg6279br",
  "key45": "4M5bgXJJ744kc5Fh36oB8VxjrNUib5Lu9rPa8LyyDrmesYXCgfxhMxqEeNsXmJgkYnYALTYkx3tcTUAdAt7jQhVY",
  "key46": "5LoVzsUWvUfpJNM5AqtAyzKkmWhcL3vsyss37tMCwn6PK3bvWxggvB2qNCZtrUrmhDS8LwcdBmpQdG5nCvmBzrCL",
  "key47": "66kGcN1gdZgu7RzAKnCng5EthNyEqQeMAHSL7VijLeSDpyxuzis5hJyu4X3TbrZzZCmY7RFWN4gVRf9ykWPke5jF",
  "key48": "oHEbqMapukoT4GGhVdRWdTSqeH5f9Ur4NmdSAU9X56HEyLfktYhY5pG93AWjEGnV8SAyuhcf7giCrJ7wAHwAomW",
  "key49": "21JM8otr4Yz8GCjPKmX4dRtNUT6on2qcjYtzMVKEz24j9LuJsSFPKJat8CZscrPBB52ZLU3QzMzJFgRTzTcPAV35"
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
