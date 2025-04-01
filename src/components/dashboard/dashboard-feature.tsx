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
    "3k4qG6Hkn3Aw4kgr4QHRpZWKDqzSMvuNUKqSPM2DTzdhVBiHgE8J8JHnoYLGdLqZCR3VFpKz6jojpH6gzkXLMP2j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rmKcCzzLyMX3tSNM73AYt8naYxvazg7GXhDTrQKbBxEokccYmUU34VNBUTnYuzPupTS995RrjDGTm3KAEyxb6tS",
  "key1": "2fLDhNgGZ464EKWWA35Jk7T1WVRNWkNySTpeWUsL3mpGFwD29uYK34xvEYQFApFWcuFNz1d5wReJSC5sFh3285Vu",
  "key2": "5UTX19nYJo6kikKAda252kzQW8Aen8hXCdyPNAJaQtv5LDELwwmGr2LH91oPorNcUJxougYMNg32DrfjTsX2YDPA",
  "key3": "4FiEUvn8Yb9TA4TAKYvPUXbNUk6MiFK3VUcoTivegH7QHMVMZt2wsvjq4ZUrMAKScpmtiaRmDfpKyVMHwWa3hN1X",
  "key4": "4bBZzCbE5CXT6mXamF5qisXUr5RHkJRi2Q7gJFK8ZRJGno4tswwzrSvoQAJHJUBy9YittgvrByAzhnFRS91h21gW",
  "key5": "3BxzMPYraaskR9XrSWX9wg2dtfHnhyK1Buj6KqSWGmsbWJbzKKT2h5tCZuas3ugNpXWL5QuC4t4aR1bZPzYomheZ",
  "key6": "2SXQLevPFQRQ891jRpHf71iwFFW6YTH5Fpv5kz4Ah7Kvt52ygGryfx8tCK4RJcaRYizjf3rZYWEe5aLypjkPponU",
  "key7": "Zrt7GucEDhCdqYjB9P5fdhpfSUiXyPwBWEHpm3q1ZxJbw7LbL8454cdUpQPLUyfeGidc6Z2fCvuShR8CPerrfEz",
  "key8": "4GwaEQnRvuxnHzTBUaoNCRLCbqWBscDH7kcHQwWtsgZ74CGRSfKFS4NgwP7Bf7GE73mrfJorVc4mFatUMLY7r8RQ",
  "key9": "4pmhALNnM3DzwQ26U21pCtAteT4qQ5kmHnVZx8qKSemHAZduJcqiCJFGnsbP1DcnQ6bc4RSv6d9YeWp87QCdmzU6",
  "key10": "47ZMKmwMi3qy8y6yebMqLmVgrGUYmUDkoUKBwiDtwPL3LU7KEEkVSaB63dgRZCHjbxcGjMdePxzJf3jACFYeA31N",
  "key11": "35qBFbZVkXEThzn763ahprKq4WimBY3DLFbTnrNgys7aStphao5MFd3YSTz17Fve6oz1iHHXsqnpFaaK39zpe5ht",
  "key12": "2aRsHjpgjFsXFhPXP4UjSQvCio3WFGF72oTZYm1ENdmN7paerBKneBQPNQLMHEg9trLezUwnevz9vZnqbXNdV9h2",
  "key13": "5nxywRdLmzzttdyRARKqgXwgvRR7W1vWtAVQye8LqNoMtVezQzBNrfJ5qSRv9oHg17udz4tEZ8YNuLsQD6oHjkwu",
  "key14": "3RLdxSkZ3m3s2cygwn9sGn2ByUuhfmk4Kt1KCd4MJf6nA4XSpdjj4zv3AwVjGStmUFxyiFLAk472eYSZa74vQKdA",
  "key15": "3hHww7MoBLLFUP7cyyuqrn7f15Rx3rC6KCaYLqSgZJxGGEQwgXF6zQ9seRaXZUKLVrWxTUdFbUT5kCbYFLjydveu",
  "key16": "3fHYTSJ6eQMpb6YPi5rvC6XsPDnrk5jKw92jEXxyKrEBfUmERRAJPcvgKoDuikP7uCaZ38xi3cS1rF1siVAF9ets",
  "key17": "5jXY8jsGMdpLpus6NK1E4Cnj6kCN64YAvCDJhWsBTvaptuxuG2mWqG7AUqr6uvfVgzG6VHys2qDhM1NwhmNtXWHa",
  "key18": "4vGQFKMjdfQtahuBcLTEjVHMgvLrsQCUmKRAuZTwFCEs779WFvpgS2EaCWfsqqHKwB59GatWadmjarGyhS5Yj5Tr",
  "key19": "21puMEVmM539MfX9GnYif3xU9P4FmrdodsRZU4KSax1r7g6RTf56JzDmLJ8QB2LE1M5ZG9aRb2hHFoZyv9Y14iHb",
  "key20": "3BqPQAvquWSBLr33QNWDLnbJfZM6HVAzTkMaYYS4uPRugkge4RkrcHAbG9aTjzEkzoh8mSHJJm9GbLqnwCpsj2Xv",
  "key21": "3TX4EyvAczMNYFC9DpZDJVg6AKCwan3P7AYkGAj9yB1aUsNP8Bb7GTC5JRoptdS3idwBSCWs5Vv9fv3xosxqGqnj",
  "key22": "qjK9KejiipRYvC17YyGXprWpXY7fmKoiCBwv9Xm7TaYBvYCYy9Dhv4xzNrxxLUqZqLoXpJA8L2P6CYZd6UHZeui",
  "key23": "5WsuiGc3wmQtfEiRY71hLDvPEuBTeXi3xYnSaTWgUBzxrdfVavQzYkVH61ywgv71UwqQddBZBdddi2nCwGQr7GaU",
  "key24": "5sw3JLFY2XQfCYaeY6mRM8yJBPQQUXY1GQw41FrF6xigNYsjP8zM2FrGrzeagnq1uShyCeXunviEHwRfb3n4P9bx",
  "key25": "3tzBxiPY14goeHRKd9AkoT68VAJfJoRgqVGbgfYc2n6Lnhb5nhjmVV2sV76yXArXSi7qMSjxqhBtnnP1oanyLh6k",
  "key26": "43MwBMrhq9cc3RZqGqmRD3Mv32RTEnqZJ6sjbKBysiLpLbkumK4WfRydiKWMxqHSWhPPs3UnkpFEVoLk3qN9CyAY",
  "key27": "34LuyxbvXyn8MGM5cJGDZ54iM1S8TsscfU8G1YXws63jmVDyz6q5VHGCV5sFLhu9M5zgG2oNcnmkbgT4o4vJJpr",
  "key28": "49W4YggztJ1D4ZAxsBu59F5kMGdDyny8X8eieHkkaaeQvaGhcXRRrpiURH6ZV2KEB51P7YdycZAEkLLHXzL1JVyA",
  "key29": "oS6raDLGXNoT79x8sNRk3HRoVaKj7PJukeYnzf9Z9oegN3Fqf9mDi7XBreMaZk1oUD7a5FZhrVjFWJoaFdwmCYC",
  "key30": "4SCc71jAPmmxb9LPSuzEJj8tthshkcZxhBtcBoy3FCTYZvfjDmToAPBbwAf5aSEzrK3KaDSpYS6hT9Mw4GeZCWwd",
  "key31": "4c4zcs7wp1fnZdgtcvPcBD4Ro1qeZmh7hoMeh4kbwcJ6fFmETH3B4fDDrw4LRRidLmC3Mx3Rxn1jvG7bDa1tRW6z",
  "key32": "3uSEEQfxXVnvrFUoeAPfHpJvGVk7aYii1svb3UcU59RHc68LWugiige92MXjz476szqCipyCRK2q8RmsAJohFLKV",
  "key33": "2e4twEGhADat9Mb55BxFmzmD5R5RAtgshsohfhGek8az1BFVB8S1jSZEcUwdsikZmuL44Hte7BsDg3Rk7URcUYEu",
  "key34": "2J8cgBRYbxZ3SvUbJwUXf5LrxLyM2rzczuM5QQQyjPn7bzJMR1FBLfSkfngwnjNeWE3cRjPaAKX3JXYcxxgFC6S",
  "key35": "m2V8CH8BNtQ6q1R4HmZQgibzMh5MQLCAhaoPV3qiZaMjXh4CbdFfdbqsWcUmHfVGGVVkksxBJ56AVRUFNrjz4hE",
  "key36": "3FUn7cnx5wKG9RtJ2WyWWdWiW9KjDzcJ6hEpK5odZ9KL2FwkydsJZWPT35dTsXaGwBHWDnmxe67p7J9feUgjCcLJ",
  "key37": "3pkS2Fat2UZzN6icYDVzM98QgWpewoKWhWZ6rJLTaQWCnv6uczUcNpHaqLKXCdFAMvmDtMQEGmmW2s47pJmvEndA",
  "key38": "2pcGS92B49LFsApa1kTVLJyfUSZ4s8a9eCtvDJ9GGLSDPGAKkdrkH5Zvc71sVXG3vxPQD39MizvSDwRYRzWiqCQQ",
  "key39": "5Y6SGZmPDhQRfnZim1We9NL8kGTi9dj5KC8UqJHYDqRkQHF8fpN5AJsJsBLGetYShfzVTmSZD3qGPEqgMF8csxEe"
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
