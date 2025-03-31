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
    "2Xbn79ZemdQ24fm9UhWfDbnHKHpJbUuvmALZpb55Xj84TfJf6bvKgrPWAuNkuPkLJR3b5VPwMJpWxjZwwDMJvebb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28Mpi5wL41KP8f23Y7HVsCWpa74NBg5RunNnBjSD9bwpqYYFL4BLaYeCd7XpyrTLTS8RB9yqazbkfWgJ6AYBkTn4",
  "key1": "3MRgcDa33jX6XsXuALsNNYkcStLZByXMifqU59vqiqyzZmNw8UZzJGe3PWuBezQgK2mW3PmRE6to1jtGzWQXFXUM",
  "key2": "2eZ6o7ug5YVjv8vCG4sPQabF4AEzjmneYppL7s7vwpWL44yAseTjhWLVLXDm547UEnVj4voi2kNxeX15euA76i5H",
  "key3": "41QC4faBz5NUoukVXo8yk7jAqskRmQsMkc3VDUuHi4ZaxpBY82nV5R9HaBkoaFJne7UKnN4GEpAQwdHaPnydERKy",
  "key4": "2MZKSL7CxfLbs52R5P4ou9J5CpQvmHVRMZpEtkE8WqSSvy3epXSydpFRAFUALGtGLe4Y9X5Dw6f3cQob8Utdp9BG",
  "key5": "3og7pFDfq4uPpqaAs84WPcthEVPWVGxbfprat2wAjx8abMat3XWaHiUVDXEsJeXCM8XRTABM9MKyzAwLeQptAGv5",
  "key6": "2ehvzD6RLZnKt6k9PK5UAiLRmQV6zTwXp3Li6K6cqAcXND8rmf6UwdMBnBEpn9KmTYF6j9en3EE7F8m31d6mYxvf",
  "key7": "3bzZfi66DnJgvMN2iMZ1jWvmMnMcs2K1dYEJx9Pywcshdidoe4QUJ1LXjuAr85FLwmkArCsVnCyBvkb5gLN6MCfh",
  "key8": "28e7VJ8hQisa3REXkY4iYbdiuenFucEEyuDJruiGnSEMMHdtq1on4VNc63GbWyZe66VX9AgcPUYCrdcisjKzrc8F",
  "key9": "HnErQVtzVDNHCD3XLDYUxDLYBmVg7rM7WYdS8q4XCu4ARikXnWv73QDADtM6CP5HQ3STifnz5MdvPLWSL39ndx2",
  "key10": "3hG4evgKCUQ62ZMTqziuAFwprzhdqnWBUUPstHSoxQpuBhiEJUf6X89WrbkcFqXChrbS2cZAkCtL3g9Q49u8SD9y",
  "key11": "2JxzayGV9yYr74doDWshYqHdFfHG6BfMqpQ7UDR4zRtGufqikRwMPHrJ7oDedtECXKkFv8s6JZmPF8RFanNfUZ88",
  "key12": "vE2e9WanJZaRKzjFPE3hGg1R6p9aXiK2eUdpmRZf4SMXNms1T7cp9VC1TtHRzvo3d4kmr8R1TFZzqSZx5eyQMzR",
  "key13": "2H9MrQdPDnANECcCpbnHXwHbjZofj5FwUG9V8fw5Vnw3ohxtWZ5ZTcDnGsHAtrV9MjvU8VBSdibZkuFGi1JuiBYD",
  "key14": "5PncBZABMEaQKaoEU1AkqEhetdFPnWTLVKzLHDCjYL2EqzTmChsKKWqmxFtjuGU4Dm6u6nwkeRVoim3oczYYfzAc",
  "key15": "3UGqFvLYmfRUot5pstp399iKxu7mdDhQLi7QkSHLhmMjCoYxFXw4Lx9eYemA97wav94eaxomAypbXWDdrqaXRJ7e",
  "key16": "3AJCzkyWCoQDcfw36stFX69mzzHMXqqFFUzWZpLqKM1Rbn3ifTqHsQ5khzha4bBCngd9YpXuByAe9BnDFLbwCezY",
  "key17": "6Jefct9y5uJGJDvQxTAVPCzs9ZDVMRdzyHZCerjm5DFPZq5B73D1tqGfktTNvQLvK7Y1r1NCUcd6Pnx2sP5WPiR",
  "key18": "4vYY97RYoP94XrTYUXd6jxnE4mN5mEyJEqPYLC4yCe8EfC9PEjYCggYSNbWBeX94T7u6Erqp7YGJ9hnsMihcrH1y",
  "key19": "35FL4fRqXLKBnjcFzfUuLkUU6xneLFt1JCX9Vk2YwVV4ew3r8kKVoLT6iFeSnFq5DAibARjkWSQExWAz3gt5RTHr",
  "key20": "fDmHrwMHZd6ghJSjXiBkWFQbr3J9M3AXNVevNz1ttu9GnyjnUXkYkBN2Q4WYeAXJuyCVUuM3ZnjaA6ujkgLg7XL",
  "key21": "3mUHNo2cMbqpMFP6jkYQnMV8F2bcB8gq1fZoQJwe9dGC6TGfmV5mtvwmSJ7qCFKpJyuT1rDp5GdGnn8Vpy2uHtb7",
  "key22": "GSYmceDvZR4D5s1pCq5S2XTPyjUKvhdA1cAJWNtJ2qE1d9j6NnULdEPvwdVXMPrCoZgn7dRGUksgtaF92THA6tA",
  "key23": "eg3N1zmia8aqthWuVzvAm7NBSm1zHZqw94MHQ1Jse2NiYEhLFwURauEwiD9RSRkNipsjHN1P68aTMnazLYjhuqy",
  "key24": "3BzTrdqe2atY8agzsPyhbTH15d3fgwnYKuyDEMRL688V4XEcjKjYFzxPF8d2MwX9mVhcGJJHjKE82VB4g3ZaK6wD",
  "key25": "4jKNtcZ6U1iaFnvt7rYqinLqyp4SVr6XLSpBLUrkjHKJW3MuGuHDHoAup9Z5CcVmTQKK2gjdYQp1erSTeEZRtRpx",
  "key26": "5MtCBXjBNKL68y4zLwLyd4ZLa7rv6nb4zhVsbqtDvNwMo3JKqTdGWDgc4efom7JVKQBSZRHL6B2rDsUYNX44CWr8",
  "key27": "2Bk51yGxeWdQob8tkAuK2QDVC3muBGnNeT3RXq3qtRXziDhJS7KtfcqLEZX1xyFK2wVWF1oTLkDRgyg4UKBXBBHH",
  "key28": "fZR55kWEpA1dyFNDw6DTNaVDCXbsqoTPU8Ad4f8w95d5sSGqg3U3a5h6KUyABLEnCYYooeBVLxUJSWJVMds28wo",
  "key29": "2V4Fhq6xiUSjw9EfUbGc7FCsBufut7SBWVqUjaqiLPhCCZ7ZudP3fgNVo5kEfF4ZxpaxkscTW8fXhA2TvSfYBKMJ",
  "key30": "5qh9TZMHBUcetMGaakhCQoV8DZDe2cXofneuGDupb3nCh3Fh5RaKeReKnuvpE2S6o6Khmso3Ky8EpYj6Wb9iVTnM",
  "key31": "62awHQC4sZUejpwx5WvtVQVgavZ8KuXpA2puZUqAf7qEJDL9PbT1Ki9Qqw3Tda48FAkcz8HhBV5Gv12hWWaqChxV",
  "key32": "2Rd93j1LNLHAwoji36Lggcu3p6U7cLzTzFP8W1Xgxhcy3iZAq99FwvPhc3M9VFxo2hWkDsn9pQkQVpHa7uofoRck",
  "key33": "59JzS8DsAh4fo5CUErG65iVXjYmxoop87mjv3HYu7Z1Fv8qYBSTs88sShzZDJJWz7JLKscCBeMYLkpgnkodct8pL",
  "key34": "5zWi5wsP3eFr6raz5jVDQccmTLEbzXuvhNA4jmwGT7bUUsuR8DHARhwGF248HSvjLXaDizjdGRFopH4WtDyXGLod",
  "key35": "4qonmTtF2VY7QHmXJ79rizfg1RnoyQ1wNh3yjU37YrA7pQfQ9dRh5r7arkjFMfFZgaT7r89qjVMLZmWJJv8zZgHS",
  "key36": "4eE9PZY6Dxxoc1WfpwQ8R8buKoaVZvjKGFaZiDTkG4im5epQgbeX15HLzFuYtfw1tUgS1HwWp2svpxswgb3E1vRp",
  "key37": "4MG3zC6YKggzLib7yxcLW6U4QYoqEvHSRkFJ4tVvrQHDzC1myUm6r1LDZWMQHWCSn7rngfCcxx1f57DdjZ4THt19",
  "key38": "39995ie1QNRYjbChvg3GwCfHZptuNtGRC3aAjqZLoSoGVFVcdSbUNJC7Xq8icqZSaoMyaTNDUccinxqADdjwYcNa",
  "key39": "4E5BPpQNkj58dGh1dAm2t6VMxsWa8nQbCFvqGgAunaT7MjsiHbZsHCkAQih9pJkJrJ8qX9isqJ9nvUx7fu4qqBs7",
  "key40": "3pjd1zjxbsw3uK5Uq8yQE7MSdjExnbTCFnNaikwMM7Zb1taapfmW4nWR2Mw3qeBBAZ46Si3Ry3BkXQZpbQtnbgAJ",
  "key41": "343qwqHi2jrdFXvSTPmiUBv2x1ue4uQ2Tb1nA7wSXTkVUB6JijvBSC272avqbEiyHJ2xxmy2cNX4zocvARavz9Mh",
  "key42": "63osFhzRxMdnd4HEayzJ9Tx63B3uHj1YcUDUGfDJ7o2FrTxosBqW27zNTdeg6dRNJxW33147KSjnxAM3JFyG8xgW",
  "key43": "2a6BfTF4B1SL5zDm6zrgmrqM52bZzDrToktqqaQuum54hw6UHsLxG2UeA6iPKkfPsPzWueaibxGc64YZBmrMrfev",
  "key44": "npbsBGDyhdAP8WrjFXDcaaQM2Cd8ZwLGyU1ig1pGvSmUeBFmgwJ8BaPi8nPNH5DREsxR2U7NFgcmycNH7b8r8EP"
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
