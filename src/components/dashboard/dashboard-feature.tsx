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
    "5PCvNjsq4RAa3wYjF67DtH7CvXsLztuA6Wvn9DBTcB7XHxFvpsAENxdbV7ozgRSH9z2Wge762EHvq6qGWqaTxKR3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DSEMVWuTvi16TRsbLciJJJredfDZdtbyojvbXAxfALhb2hSey7Hm9ECudVCfufBwRftVKfqBhQ87gUctHAQraSj",
  "key1": "4JmSTdPo6jaFnxnHvFhws6dvkkid3X1xKMrrFydRhDExqh64voj4KCpnv6ZtPm7QTJrFbbgcjJopTKEieMfADRcG",
  "key2": "2FgsSCtqwfFj5dWX3c8C2mSwkBnEk5vqJc18fCZ3bfo8JSG5MdDun3noLUGTywNED9tytf9QAscTfoWVPZusysMH",
  "key3": "3ZBqah5g2Ky3tYGSkFAWUp1ZpzvKEJVqyJ6vfM7Q8Q7MFnKE7SgBxb3hMBCGHHUFacdZMgG47onbX6p7VVB2Dgeb",
  "key4": "5LKC7sxjAcq4mQdvhq5bjfEfUQVGik4iN8PjeASSqVSWo54ujVLsQasWXY8TkDuAbGD1YgxPKkjiTZd5VYUTXrT",
  "key5": "2xUjdmFJk2nQYTPW2JfEk8NrwAZfJn14X1s2eFGwC4388wsie2sdHXRprKjjoS1ZPyQEkKCEAY8ohVM3nh7dNshL",
  "key6": "4ccaSmVbmkHgpgBthRdwAtSkddjhoGsRXjncrysckfh81uWKmfmxXTKrCGP95FiDSVnjhLW9yHgcAu3hNozuWHQZ",
  "key7": "QRdkWg7FTr9jUcTeHhCR496vR44J8MZhHRCmgFEGVdU7uWXS7yvo8ctDmgquYx3YMJxvmqPcQqUKGnJf8jG5DJv",
  "key8": "5ucKo6xLXoFF6CtLqfBwjfpkVmS2X7gEsyqu31TUwxdUx7SqbvHJtvMSqGjt4G8idznRCkfcsBxKkPQBQwtYpNsS",
  "key9": "4vEaxQACAN67Q4sumht3dvkwLHiX2M7y2S2W4Fz3bkSBcBh28G5rj6CGaHL4ESGrdNDpNdfuTMYd26kmFw1y6DUa",
  "key10": "66XAZYsaV8dnMk5Rq8wJdUEco5LnjufQZFoQeXa8wFB8mpy2LnPHm8QEBaxSZgBYsSs4ZY9dSuG9HHsLU2ouVVst",
  "key11": "2a2QTJk5ctHzyWuWrX3WzuLGv6nm7m2PT13jBsbED5g7df9tj3H6e6ZQgKT6RJZpXALyqLLZJPNKooiv24vmcb39",
  "key12": "42sG6eP7osoPgtpGS9PZ5NobvaUS5Cauwsbu6kJqfKLvFggSu9j9mn8yZW8vGKoeZHYU3htYgoLbK1rXDAJ5xeNP",
  "key13": "24FgtaK6Wrrh16HCvej67SpASMq6CAvYfyxP8zDJjZC1iZkYdFxYA5ijytc4BdzkgUi6FYW1wrL8G5s6npG5goSS",
  "key14": "2iWPPyongybZ8LPnf9f7E3iQSE6LHNPj1FqfhEorGBcHUdKe4VkngJWagWMwQFkGumE6mVYbd6uTccEhsX4NTgUg",
  "key15": "5oeVrFet399RiVbjXJcp1RdBtYromPsG9dFocJwz4FDnqVURpFrAohdoWYyTFdgeysjG1WW3nnuv495ouZQNAmuk",
  "key16": "5jzSbzgoRZ7WhrKuajbgzGr3S43oor2pe2BLaoNmyZWAmBoVSGhPUCEFUVnyeV1tSYuedn9PMcHzvp6dPzi4hsV3",
  "key17": "TAn4GD1aopVEib2mj9vj9YGDJffQXMqAuFmjKQjwCCr9YLACQ2wSCvh7o7rouJuQfY3N1h918Vi4zBw9MfP3g5q",
  "key18": "5TDC8MAbJRFtvsES9vHj54vBmNGMbEKybQE4M6RPoHBZ2XqwoiTHW7tQnp9yDTPrcP6KY1bSDgW9n3Gx3FzY89Q9",
  "key19": "3apESm1CLvVR44vWySgiK2hh7MCD1dnV1rNQWy53XsaULgZ2XPPq31oauafQrwS3a9B22VvzzeSrpc2cQfjugGB2",
  "key20": "4f5tyGKABgjQJpmXBGg21Bwh4vQxpfn9VQcGspFf7XjCNAjzup3TBLPshDNyPqNeR9J3nZk7ip1PRTSq8ThRL1mo",
  "key21": "2xe2Qajc3GsbgxXQK4f1aE21o9XG48Wr9EM5QuVGoxFhbbXAK8qTBkabtnijypcGCVpTkVGZmBchgFcghU2Bb2KK",
  "key22": "2EpFHy6ioGwrjJ1jhaQq2AEteyEJAo4CHrFYBrqwTCctzBkZZNXGAjuFzy6MHdyagrmiBfVamdcNa7KpEqJ8Kjap",
  "key23": "5o2fkZmVQkLszKfHFkABhkdHMCZ5ymSE23dTYDZBozhrrBmhUNL1pjAq83sfp6J85uKVbMfr9ReV9mLYwWa6Q312",
  "key24": "3rG7deyxkKbZA7itZgbuEGMmG5tUB22GD5FAG5nYoNwAQEpezfnTzib8CXeC7H7WHZfNu7mNK1FVX5cLG9xabmz5",
  "key25": "cKTTfhGHLmqkxqmhiZmBPCmAxwuw5vT4VuFC8qKThVwkGxmVFWoa1YNeKJxuxCXGg8WvHdFF4DbvMB84YvaNmdo",
  "key26": "46CiL4BHwRGHmbbyxLF19xhjWWW7oSWR3Ej6HCFx3FB9h7Djs6vVbXLZgmNRNfW3xdt75DrRRmkwdmuvnKTK61Nk",
  "key27": "4HXNkeSccT9kp7Zb7YcqUSrfb6UdjiBvvsZDibqEPGGFuG2xeEiCPXDVsjgj5Jytq5kBcJoWjyLWAhUsizm41cQ6",
  "key28": "5bEbbVp95aKUKHyD258h2V7hoXCteYMUx675vZ7MGB3CfC7eQL5dyqFtEhb262VJWQEms284QYq5ygZzZ5YpTLSG",
  "key29": "5XZX7ULGbfEKVNMBkvRQYSCnpZZ8uTMcXGnJoYhcoBy68WTHAZ5YDMEwwgLWovqqNCCQVcKEBQMJR7dWXmrReNtT",
  "key30": "5oVaoohz3cqxSdw3RwcwzY8wDBG3uuz3QqFj5QyvxeiMrHeCSnXEXF5FvVCyCssEdRofaEnEWh6RS6NS5U6mmLvJ",
  "key31": "2Ue6mLKTryxThKVqZJ2SZMDuP1NwCopm1Y7FKAKZhozrfQud9GWgirUxoV2BGSCaQJJoHTcNKxjthz8RfhHTd7Je",
  "key32": "2vcpnUs7uPYCwRrG3pb7UPXTXz6eTh1ww34RdqQghJdue1LG3C8PSrwQxf9V3A6mWzt8BvRpqvGDRp2DJUHXLyHA",
  "key33": "3gxoVcCNHi3kymyV1bNbPg4eQv1uByDcCQBKCHGCBCFqEqP3iunVG17QCAeRWKmxeF5MbrVHzpMpuwNfAQR3Bqrp",
  "key34": "5yXKsygnyeCLUe5eTTG2UiztnupQY7NfBQCbHGJPob2eLyp8obReEN9TY75j1ySaLoG7fwWbnCiUMaThVAi7C7Ey",
  "key35": "4cNM6E8XsRy3WiPvLFo6G2au4fcsrvuTX9X3mMVCGRaMYQPZYq22ZbL95eNJKCu9S5YjSPRgSYYC4F13mFMdqGBK",
  "key36": "43AYUWk6YYcASKY85JCePrYLhQcshwPoGUpfQamVFJLb5Cc7RGjbNdZ1iiNsAxVfJctXjs5Dp2mcSzKXwU4oQKee",
  "key37": "4UP1rRCeJ8XxYt2i6oj61SZmiTuEgpaY21j1hzxmjdKC5uEoVj4mepWBh4JDhhSK97BjqgtuXDEc8ruf8xy1W33P",
  "key38": "5ijqNupxe4NeTNFqkZ9MrnQs9dnFHdQ6gXANPvgywpaisFs2mknacpQMCW3HZLQPRi4wi8jd8dRLBatKD1zAsJZp",
  "key39": "5rzAHzVEtXxMLSFAFFVmAt7dLENpmcfJN5BiF8FRXBPo1aTUf8NNo3nmBqAn6PJhW9NXvWAudewjNDu8rKcokBt5",
  "key40": "29TfsnCs6X9X7r66itWsUTcZed5k4mVNVaRZVt8zTDGHopXVerZkf8QzMq9EB24k322j7PLKDpxmcegKukuZnwM6",
  "key41": "5W2wWszyQzpqLnv8NqPrN3JSPugDMq4JQhFCPtBraLxzVJYed3mX8x9se5yEkEk3TGNM6Z7bZ9jTKUDBbMpddfHc",
  "key42": "411Pzgew53aG1tKkPDkwF9zBda9MzobRCd4oLB2k7zewk14USS6N5ttV59hJRiaNP2LUkg3GXJiEd8DjWcU9mmVz",
  "key43": "249Q1U8CmtdEoqNCAuYdeg5JDprsqa5E8RpXYDwpzBe3zqJCeXsMYPWfG8v3Qh7jhXuBHGd8spni4fz2uSm4sRFV",
  "key44": "2jAFsWvLGtbLtjP4rNZm9tCCvTfxDDLsDDVz5qgyhgM1LUF3tAvtpTv1QfjRoaHFFMgSfjfUxBVm7cbbZgDW2qEv"
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
