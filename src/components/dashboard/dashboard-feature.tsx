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
    "vrvPq3Aorinm4hv6zXVvZF5ggC5TWKguxFpYzh54qAme37tSETr6BrkqkTm1YpD1tURVC3LaBtK4KRvyrXiniac"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NSVyBXFfiRQz2C6fRKgs7ErQPNPaLETn1ubPYAHjWpVpRXTsoqfszcsd8DBXFVpSgPc8vVYhvnFPAUFK9PuHrmJ",
  "key1": "5RkJNGWP9tC97NNMxq5fvUNHwFQecSVe2zymUv1pnQonK7ZYyeJMoQEqmPqfaPxnLCfwaQun8atnUedhgQCLoXia",
  "key2": "4GuhN26LovZWSwSURwaZxr3m9tSAYiAwgD83anVMZC83VfRbLhFK97VnHfXH6c4QpwAEdBkwDYZwiB3mhAK198xB",
  "key3": "4Pckx9Qvk8ubdVjvKFsQ5FYyohXV2UsXpPnpzMdm2iFMFWG56hFz2aRPHhaaUnQ1dfL4ZKa84qFiVErEJhySiigw",
  "key4": "2Bjfdz3qdVPM4e8nhHkjunxqgoSGJVE6PxHNE2n1adPzeLq8C5nxHwK2MTWsAm9nasdC1GyZi2UMZkD8yT61e4Tq",
  "key5": "3hALJC7m6FWp9L9r5Ry9vEHat28XjwXayqK68tKsLtFSQXKev9XAQVaAoVu4jPYMYnQZK38Rm2Kw8crALnbhNVG7",
  "key6": "4yTeDTGc1YfFQxeiZt3fnpRxXKXRbjkuF2NeHtJ8u5pbuJ2m2Vj14xMNcTWHMfFgbmFuvsgWgdfo8crVChWpTcSB",
  "key7": "4tMPpq6z8FdXLLgQsvCUeHz4zhpXzQc6zQMnSrSPaqeFM8Aax3Q13yHKZQA8qkyqRmEUV6Y9szt8ShpomQtb4Piu",
  "key8": "5doahSYoMqF81Pw2Khou6y4hGfx7AysQTcGjT4ApT6xjWLCcX4ErkrfKQekePtPkrESH2SVAnnHgnnTAvM9QAyge",
  "key9": "3q5MD1iucTXgn1tLmQU4oHNHbn9rNUtpphCAJ7U31PQaezERSGo1cfpHdjh4JHBaCFNF2ojpY26dt5F95i6NzDt7",
  "key10": "3VYqdbCqF8fqU8P4zQDJNu9mJU3bbdKNc4j4bKx5kGAqimTddKLqb8UBxw6xe2xSh5Ta1JG6zRqkmiArnFZ2ybux",
  "key11": "ak55mq2dQGMcPwttX3ztGYcoq9FRGWP23Raav2Xh1b6jbbi9ABFWnbSCFbT8oVF6rHJPJoL2rE5uvEUqG9BXT3x",
  "key12": "2KmbSPyPnswYfzdWwWDuARoAnii2Gmb2hXP1rv7jK1nNyyyARZNQvAUkFhFTWcGCfyDCXyKegjRbAeSyrnaSnDgm",
  "key13": "3LvkgK32ySMZn5VYtchnJt2GYFtiwirrs6TB2W9sRKCxfnR5P7RakmZutHvMjZ8jHBazjnLBRrMn2HwfLPAm7dH4",
  "key14": "2v2KQVJMmxGgZWP51JxJiqm5EzuYZ2D3VviaK6NgKUha3sXU5URrYbfL3VPQY3AzTkJQMxiRADtH6SU6xeJLt9f5",
  "key15": "2AnowUmDwURhYTFsMeeodtzst4XR8R6RJ2fijYB7Zbx7yhnJKDjCQP8tx5bw6wjbkWjSGZvd8tz6ePLzP5o5X5Hr",
  "key16": "ocJVkrd99rkHWRAsUiTLQteTUBAYvNoBUpMn3WwGRug7aft5bcaoi8JDVhWwRXWPqjqtbEuG7UoKtQQXmVKWfZF",
  "key17": "3RLRWXwmXNhBHZxngdKVEYPcP4PVwhQYHi724WZVsjUoBpX2tnCyhD8nZf9bi9ePMnF15iHNwBaxQjvJJB2jnaAK",
  "key18": "2bM2W4aUNmLuns2LVKAHkbYprunQyNGnp3qaW6CHd2jZKCHksQAyEFfWWBPH2h8Ef95KtbQnpidviU7oegrkGvrq",
  "key19": "3igA4Nu3naLcg1eJrhFWE1jaG2ReGb8A5f9StL81fcaCqHcutegNHCPMxzs3YFJ7EdpHxmbuG4ApkEfimujQDDbj",
  "key20": "2W3AZxYSVMm74RyEJCohqsZvNWQ1XKjJt7jnM7oFDhgFL7sm4x7oJgr7mF6NTUbKYPxkdDVn72KZfKXZhwhRNzjj",
  "key21": "9JdH9wJUU26Y73gssgdkaThpAByeASv7RMoeBP6o8VxMRsNVm9Nrrqk5rJyqqanH7o2VePY2jr26tNUtMegLvA4",
  "key22": "5F6UgtfkbV8UDw3zR3dZtcwXwtPAKedjStyq9g1xYeTwtgjZRY2J2gPT37PEsETUYDaiKzS7gK3qVe4jgmoNpGPn",
  "key23": "2ptN3Du9Eh4qRCUEyZ3VLW1ysCxkJyELSQX8y6xhUo6kgxaouiF9CsyrGzmeRG9rnw4CRysYC83iDQe9ccKPVvgU",
  "key24": "23DH1hrhv11Khu4qb4JEP23U1y4XD8sam6GHMAwQhdpkSjsaZLHHyriTAE2fbYmhWATKeYrLee58Q3b4hCTPaYyV",
  "key25": "rp8ZBGnuak4EkKMuJhvJ29XRVC5CREtsEctW2gV2zuVyEiJgRvRmhm9C93qNzbsmhBLzdzceMQsneRZeLKMsKkr",
  "key26": "5XA2VSSwTvLByhqFM6pEo6MYPNosJhLAvsjxdizHWn7TXdjrFQbQuThzXdKbcGE9f442J44W7mFEYySf5W1j8oqu",
  "key27": "3w9TqVtiLt7irRKFaLKzDwM5ZmqxoFHweMUeUUzYCJAS18p6WR8NFVk4oxQdXzmjD7RDqsTYYpPqwfznyDbVmVJv",
  "key28": "2fMPCAcTAJHAPfcgCKSJzL4fD2dtP3gyRoSS33A9FgTJXVYoRbSsSCcptbWzVSNxcJc4aqn34BP73EPRwrhfUb6i",
  "key29": "5ZnBsim5h5qBmMha1oBdYXsmFcB8YMuAugQmzgxwL8oratZ47gWBiGT7CDccYLBPmyssK3HobYTYSPLnNzLf746E",
  "key30": "54s34nHi2B6fcHhZ6ooKuEQs9aGwW1QWA6vRsyersZkEJm1KwAwSBWn46Ah95ygGiCU26XW1nb6bi1XA2iRaavZd",
  "key31": "24B1a2LxrAu5Tj9WpSJghGNysXfpZ5UzP4a6XAGbQkEY1SiBR6kYvduZhDp4533u6ZnHmysxfvhdhXCMd4qD8UUp",
  "key32": "2sPrUBrLe1BJXbw4ukhfD8e3orWcBFTjNbYgzN8nMKXKtVo3SS9DZiLZSWX8JX9djF1bUNoz7JTFvT2PVtUzQj7q",
  "key33": "2vZZqNnRGVaoyVkCso4ToVMJ19UpNy7qXQgT2dZGMfkkaEe2C68qnJo95XsomLukkRDhun95bUuQ15uxvecxRKvG",
  "key34": "5M6f5jBgkPYsX3W27tgBYD6mzNX2EgyUtanuYYtQ6MVKMu7pSDHkYMv2Mx7SomyapMru7PqTAuAaGuSu2Uei3KCW",
  "key35": "34XFbN9faQ1fETq9ocwrZ9kWz9AcbvbVnhWWpAcgjMnxfJD4oYewAHq3xZKQYn85zV1ZFHE14EFdk65X3p4w2BUx",
  "key36": "5sZjAjxra18YidEwo5x8m1PRvhucGZ4GjKPVe9wbohjjSHyYPgDxvVPQXkogCp17aBhJQwLudbfM7iTuFJQ9nSCf",
  "key37": "28TmhQ7ysnqMK27cA3tMzDPK7ctVXn3vQc68A4QmAiv3CegBudS5oPjRhJ3CPHmTAEpKbPhHYMxddngzGiG88t6r",
  "key38": "22cf97VB3vS2izH7DyVeoK9hvTRQMiXgEoxRtReuaGrbrxoUwCL2ZB4T6u58YAw93VToDzvwiaa53uxV9iXodr97",
  "key39": "5aJ8nSjbYbjchZU2XBGA4YYFrfNDc3XywMBn3WDbuNq8Qk13x5iuccyHYmf3BrY8WkSmQxdHTMnFV5YkAeinhZDP",
  "key40": "2bAz8wJ6966hMu5KXcAu94uXYCTC46sm1JFtmRXm2kq5NqV551cggXc6S4jNb9ffWtT2Wt8r7TCMpnkYWc4fHAyd",
  "key41": "3MJ1VPGcsaXdc3CKFYKdyeHH3LoimLyvnH4888VgrV18tTnmAsWS5zrZk3sT2dCZDnNq8CUpSx2gVRqaLJRSYkym",
  "key42": "481a1uRb7UQbRd54vn4AzYSY6RdP4DJv6yCD5qBgnP6mzGzmJgx4j2n35no7cxiyLapexKtEqHcj3tU1U6LSLdaP",
  "key43": "4Ap7gbZnRrKMkHXGQ7EGEECdpXxF89gtVSQ2yB7Cv9A4W83cySMFNF4FE2bqgXyRvuoC71BDpSQDqRDG3gsWhbL5"
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
