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
    "3j1ySJc6fVj7HnSyufWDV85ZP9DE4ZdXyAvtiGRQE1NHRMejfFHMeuPruRiaeMC5roWkWaUGTfNsjBvkqJfxR3B2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66LJzX1QCNeWaC1P3YLkJCCZHXkXK3LR9bcQdyeLQGKUR8gCJDPZsDBZXxwQQXTwpvDktwWpSeUx5TanPydv6xY9",
  "key1": "5TmtWJ7HTqUeiGLmrkbAGje5pG6t6s9Hmupm6C4HhMtByoYzSB3bRrPmTE4G7gjS1iCZVXjNPQEg1DNu8Qn4bZmY",
  "key2": "2ov6gbRvCEZBNvDxsNT54aUHQfDocJYc59hk9syD17rv7w3yCeMvNBX29hyedAsbSVHjjWY3kt5bL4wziuB37tHH",
  "key3": "5Fi9kuzLwQWLBaVc2UGVmUM1jbgzhRjDPRoWHn6f7n6v7Lg87HjVPGDUX6oszz4QmffefVT3ZHFK7GbX3sFZS4CT",
  "key4": "5PeffdV3tBvNzJR1nweUrFjthhpzczfm2DHQcfJ7wacA1xyaTy2ryVSU3j1WjTtpE3ehLWR5TpJmzNmSt8YFm1bK",
  "key5": "4vYqZeecyzByvHJWGr3Y6nRocz8Sc26YnhRPhimQ9ELymfWExgvcuijJvFm5opjrusTBgwTsHMWBKMPfDtDRRdV3",
  "key6": "49RHtKgPVnQBNZhvzaPUxkVCRNTBrAw3UeVtYdySVmFX9XywytpxivrBGHuH4pJGgoPgyYG6MgXDsUtud5FLViwQ",
  "key7": "uXnF48Bqk5H5X4hkQJgauMSnTVFgWdb2QRMR9o8Y1j6WUbS49A2jGMSGozXWGJN9fjBmU9AqaHB31aVMi8pPY8D",
  "key8": "582vfDiAzc8sP4YJrG56kXQWApanQ5bGu9NYu5b7xAbKrUi2KaMeiyGmuoybQ2nGeiyjDuNVVPv4CAzVyvAG98RF",
  "key9": "3tTXiqdNVaCxzrqKGbmCSVBnqGqX2uBdL3vKet4UyZTeu9KGRe35iKnFkn3oiaB5V7PcsGg2aNRfa8qdcLeozmnU",
  "key10": "5D1bRh2Q6xEboUYnQRAZWgCroUkvtcBspHFdJeVrhPYVHZ4CiMnTG4Stfy4C3xA1sf8QEnUoQma2QwNK8VVRwhvG",
  "key11": "3he9FhezxL31wbGMzvwobKMBU1nZctEHbYo5kirz1mv3TBVhJSdBqYQGV3qoB8S8YaEfr7zs9kTdNWq1EGZ6a4ki",
  "key12": "48wjCAPC8g3wetEqQjmBdLuydhTx8mjZ9ucd7JkCis1SkdEeYFBp3Ym3iWVP1RFcLqUHVqTrFZ6JrGnUA6MzuWFb",
  "key13": "5pxinnoup31JY19PHGxZSU6XYBcY94LeSnXZMFHPcVh59VSEnuqQ8cfxGrfm3PBXVC4uRypSxxRZGJCCSkA2Un92",
  "key14": "8gAis7ULq1gJ2U6MgCz4XnRHa29SCxCnPLgoiqGuor6gFsj9YRJVw2jsLQQwzFKRjwEGTZKPDTcUieqjSswj8vp",
  "key15": "5Q2MZpbBurcurTiGDLetVkEqAu7zEKwNhhFBPofV9t31fpMZmkyJV25jDG2eV1PrNZNqCeWm843L64tqZSJCmzDu",
  "key16": "5EpoZsLbJNw6HgFMuk4zKrY5R5tNWkgv9rYYdQ9QEzgji8ZeD3roAkGrQdQnzvXnMqDyXLL8zyCPHsccBftdLAUN",
  "key17": "3VjCLJecuG2AumNZNqdU3ThgdEU9FXJdxDUHtCUR65mZnucgxryAmmyAbgaRGkcXhZ5eMUYJDeCtAikG6sFDoP3J",
  "key18": "5WnamgC2Ggz5WqfGbfTadkBpFp94HyU2cSiNp5r2duLMBxQQ8jz5YaR1NUxeL1wRdgHeJKnSrHwZhTwjiKGsZtX4",
  "key19": "2PkBHLNq6XAgy5CV6FLDM98mk8hrfHvH15nCCRxanEjiH7VkrSGjqJqk2u5Pj1zVGdALkkWfixXGNoyNmUKtCGRf",
  "key20": "64vUHeUQvqnbTh7XcXLMnCFWy55mLXvGytCZvAURC2TfB28JNLzRz5MdXDg3kFTxPVVXkWoz5ZzhN3zHwcT26oXk",
  "key21": "PYt3meaM4ZJ8uvj3GdokvkB2mvHHPDtTeAt6SJkKBWywReeTwfSxxKr65a2P2MBp4MkoLZeyp1bRMNSEJLix8sk",
  "key22": "5nc24a2wEncdNRcm1jebmb3AugWM1pT9DbRVDd2kLvpnXHUE5FpdrU7RCDxLHH8tT1MzYQs7c6pKNcPYmZjibtGS",
  "key23": "5mPi5D1vE2JVR4WYADahaFrC3Qo4TzTQx6vkJmSscwyeLn59s3u3bP2oYLrxYrdmhEbSQfKUPYi78aRWuVwntWLC",
  "key24": "Rto7nxKVWgKLv8Q9YnoexVKsf7da2V27J69Hw4iGwbFn9383PaBhNmj7uvCiJs9ep2ZU9XR3ejjJTLkxTCXPWED",
  "key25": "5W72xWPB5wX7bqX1RjbBhEodu1R2UdozpRaZrber18AViwdXLZnuvK5pKWJUsQ6LGEzAQgDihAuRZMFSDEUgY69w",
  "key26": "5vmJaWyNE3QEWxqinwYuJWpbqN4RfVkaTvQbLAoBgtcPqMNCodLcJMeY3Ko59QYbvvVY1qncjb5T8nuXqpsS1SyM",
  "key27": "YtetzkB7gbvYN6fpc61MwqrXW1ro3sBKhqf74X1zwByVsuJWCgfJnD2Qnr5d1pFB7dY2ufWv6QeXRqKxi2E84Hi",
  "key28": "uPwwtQm7diaoj9d9ZegWz8VRtaBwDUcQwzdGD3oeJJMvxAmhZbwGwAkNof5uw2cnj7D9kayzuziuNAxFWLGSaT5",
  "key29": "sGLh84X25NBdUbuNvg8U3YDJ6iuAXaVMzZEtWbTz8EDCGTz5hudTB8TskjdYq3GAhJvNWbrjQ5u6C81ogfa8DeY",
  "key30": "237aDJKuEQJTSXQD5Ys2n6V8R5Y6m9RQc31iQZ2UnwmnD2cR3g29ZcrsAZx3cDgzGr93b9xUWxt13MULfbH97NXB",
  "key31": "5DnQkmnDFm2kn1J82WrFDpUuFgkooQyvybirkLuaqhkEi2dzvaugHLEY5nkMK7wXMSFpzxvyN6eJK76SP8EN3xK9",
  "key32": "BNA2mdvomjYcju9W3gWQaVzAMZNuTQDnN7NZAV5WmE2QeiLCLL1msyUb47aeC5dEGuBpFS5DcRdw69mgz1PWVvs",
  "key33": "5YrRL8sLy1jv9mVeDMAfohATnfvXAJNj6ARKgj8cwUCpujWqGVs7XNjWM1qXGBWzTL7VmhAa1VXWvmonomnM1pvf",
  "key34": "MkEhozJLnomKaSXQyk6EmsYvKSyhzZ3grauv6b6MFrViGU2vgW59Gff4sVEE5douNn3Reo81Kdrbj2EmM4DZJgn",
  "key35": "5YFYJBfzKAcjVVzZhgUoMgLP1oaDom6F8331hvPuoQHMQjkPknMwD1WaXYnZs4ixN8Vsa9RopExHH7FPkZRAJTxi",
  "key36": "EaCbfbmAZBdktba2w7fSuECMTK5SYeWacqsWknSu2qZkXQpiSDgYCRopGDEL74fm6F985sqCXi1uYCG18U48Lg3",
  "key37": "2g8mvK9cdu1mLsngKz2wJact6grRxmDgFmm1itJn9h3L5b9pKahRHAUXVPz81mLqHkougDbejAyF5nSZSmNC7jRR",
  "key38": "4aJeVV8UWWwoWwpYGd5AyiRY2zX48RxsYE7b7BqFzL793BJgx8tCfLZPzpQaX59hLUDLCgmZXumAwq3K5TjGmPam",
  "key39": "5U7Zg6hhJD7xuG1T2DRvbiUhDSf2AZUyqahfjR3pCe3yRHQu7jQ2q3ipZrnaDgDbyoQzApwihHtpDjsig2MugJbu",
  "key40": "3EB5ia8GVAJikz5HXVVehC8Tiruj6UYHyPwvUGwNs4arqHMuTpCbuMxhcQYmz7WHCBKwZnLtAHB61V7NqoJ1eJJs",
  "key41": "baoxdSt8tschW2LXVTC7AiiVjGeWeFe24ceDXsvunBfvUEQsQqPLx9XVNCdMHY8YxPLT2pwhweEVSFh15Vsfad1",
  "key42": "5rpo56fLAjBRwMiqpoJ2MCCkdihtVgEEi2tQfuhH7WmuTA5WU2CRF9G15b1DCJqYZrHp1iyUYewBaRkKpgKaWYuz",
  "key43": "4PMp86gyGn3f87Ug3KMJwveCpXv7fnFBjCy2z9BKoKE9ktP2PUq9VXTRg8TvuAdJSW4CMuYkXpUxm8k8wyZcDGHC",
  "key44": "4VD5BSL9tNZz1uSUM8daWH4QDSQDK3zTEzwTLQP3sun8tqXU17fcJPWHTYTiQTnR1zwtbd1nuLAPnW3tifJWgPjQ",
  "key45": "5BbWzpYqr3xaqK2DwyVNbuSBGyrP5XeqiC7AzhGNzkqzNgxLWJnqfRqKTMabPc2qwbd2VCwLYRrrQrr8SMMwZUA4",
  "key46": "2rz2W9NMnP4AjSpcK9nvGdTusooSEfmB2yyq1d5SdNS2h6TncR2FixFCERvCb7frfPPodHNNckSyv9ak24mL87dG",
  "key47": "5sJCo8cLTCaR4CEpHzmAEfA68Ang67HRE2e6KZqZ8jDnPB9LwRhqt14cwLFMPHBvnLJY6QKBBsf2t8f8zSNJ33bv"
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
