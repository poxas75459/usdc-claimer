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
    "5ZnLf5W19tYQEAyhowMrtdMsGuzVJ447ED82BNmpJ3SspDrVayktoLmZaHw2iCGaX5pmQvKnmbzPpqfHh2JJGNJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t9RkyJ1DkEXhxEcKZAjZdUqdReGMkozENHC26XdgKgdfHwP3NMjhev6w4zDJQpEgHW5YLKT6Agmy16SA7vV5ZvL",
  "key1": "d7VepSsDnocCJue3qUZ5nJAdkpKdEfzywKDmLJPu6HVmGz82QFR8EwFqC8dtat3FS6MgRotqmQsce5vkSfycYJr",
  "key2": "3tQrWMDGpBpnmqLKXhMKaF8p1eg6TuWnnz7BFA1Eayni6iwoTWTKgG4UREqjdJj2dfJ5r3jjj3XtLrAVjhVQrcrw",
  "key3": "4TrHbRB3uuphtRjzYRVt3QM2TH54SWpYFF9TbgJZHMbDuwZpfh5Lthmq5rkLdpyvazPXkG8JDU8RZsCnrS19BwSB",
  "key4": "59E84dPEC8goQa7XgRVPH9hgNS4xzVbkw1QtgqpSfa9ufCArfzqhNCuzmUQdLJzz7RHUYoYaG7p5zcomyvnHsid4",
  "key5": "2F8z1CdCLtizJsVMAnGettHJ5u9N7NrUy4P3JyKaZpsKZXsjKWxMyzc579qBCnEAzxmxsSEiNJJgTfJQRNMcte7W",
  "key6": "2NFV487NiEPt3bf4AS1pMkzK3YtQA2SbwubXyCGzHBqsHcCTLBxpMT8VyEMqxuuUYppSUoGE2QvkuKSgLk8t5E8g",
  "key7": "3cNTqZP4FF1AQMvGyjaLPpcraAUNmxa8k1LTFYJSkKfPDNxpf8vAn4uzxAQjLjDLtFM4Kfgrz9MiMzaGZBoL74qR",
  "key8": "4xRA1aBdfGj467KAhLtQnG4EkbUzKxXU17Mzohjiv2DETB9fVytb3EUfsD3ngcqfnHSTzbTNtCJxHU8VCoGM3UDD",
  "key9": "5Y2ihivNHaZmxMgiRgyTXQNrTCV1To2TJXpoQ8X3FuWeE5D8BCAVrDKGPLPaMFuTnVTV5Bp9SmLN2moVxBSLT9nN",
  "key10": "3XfwEg1nkjgkr6zsXjcwtrvN1Y8njaByUYrnLSppAcj5NUg8j2CrsoFAPRuoPz6hvq8X3nXN1NEp4jxGxQBRD4MR",
  "key11": "1gXEUNij9ApGiaigERdQcd4keUR4kgrpVjxwk5vTZe7C8Qap4AGDQujz9ogsQYGeuf1UUBn7AE9b2sCnwSi1TJj",
  "key12": "2es5zcZHNR57kGsZGWZR3nx9Mojw3N7Kc9Pr9w3fNKXJwWZTWdLUMNpjA2oGs5BkYu7SivXcLUFoTdCTiyqLCr4Y",
  "key13": "4LpUkadJeQyPr9a6ocLKsPFWQAxL3nHSqwMpXpHSnkU2fXWRCRC4NTbmZQ2r6EuQhA4icbWG7rHFBBHoUNWPzayU",
  "key14": "4BzAwgffpYBPM7xvGwbS53oHdAS4THyhUmfE59nrkCA9To9S8GxbHR56aZUqrZY7LegXEXQbnsipFjbcazUaJXw9",
  "key15": "Ugmug2rgmbnQHikWtWzXphXjWzrxnzoR8gZUHJomf1HZzUDf21LXmyd2R7R9Sd4HSTcyGvBXHyE1HtpYsLJJwPw",
  "key16": "2fQ5Bx1cPueCn7CwzbcyKGfUqcqgfXZiJH18aLRc5Axr9eHGyUCtBtyhrMkFhVSJ4q8vzFBUx8njj6kkCH5ZGj3K",
  "key17": "555njcZagoGrT69eofkJSickWrQpfjDkMB4vGRb7fzqQzicbEvSCz2qvVMfpcz7dpbUZY5mhPywxEar7vFW4PfSY",
  "key18": "23MTTC8RBW1JiHVD11DL8X4C8rtXZAXfWFFPDP1MnND9gPqm9bNAK2XtC7RAxZDR7vEY6aVoSEEn7KfPB5tB4ehJ",
  "key19": "61SQE3oKKn6RxKqdmpWuwrQLiAX8rT1f5AZ7ycKWkb7M1CZNjy3b4XYT3PDYdgUrJiiMpeTYpf41JgMuiQYKeB3K",
  "key20": "3V2AR65ucx6eVUARKSzP9iQy2aidYjjGRykgzD8Y9BqDMmNDjwa6u96uFn2ArAtEby79kYhAkR7uKrhbnFjb5Yzt",
  "key21": "32kWmuo7iXFSPaqmTpvgR27kAW72PUxHiYN81DYTUwuEnnEohy5DQzdoScZAr7hei7RwBKQhJbkSkfViMSeiC8et",
  "key22": "6th2eeG6jrmpq3ApHR8HYvoVMurpkGyeTbXYccLSmbouorvr5gzERwFRrgpoRTcXBVppgNDhBK9Ww1cQZtryubQ",
  "key23": "53gGz5y1pa75KfxxmhxVjfxXF41bCnUgRgNiNLfvVJRhSGM3k54wcsn2wwFwTfq3akbG1xurjbMfXS5hX7Ahjhtc",
  "key24": "5u7DcNhbBVC97UQxVnVEQ2dpmB265Qa6NBczrLNEhYW7Etaa8ekKFGNpcf23fKtEVEKS9a7Xunmuw7vfPFg57YHw",
  "key25": "4Y6o6sReJNuLtz7PYWryzuoF9w5jPueRDhnmPhR3ytBXirTgz3YfkqUtj3GyT8hvVzchnZ3Ysjq6AdidDaTWSEyS",
  "key26": "JPjfWnjHo8X83C9Nu8hyUetLaUeCdxxQK8HcccXKByAWBqrfbCZBcNspMv7t6GMfZ1MwYBmiCCQRnQCRWtGCdSc",
  "key27": "4CBwRe7u7aUKhbUKsYt4My22sUktpbX6ChbuHJXiBzqE1dScNJ1j4kGFUhvcLxnjmus7jY95kQbfykShxAgxuTD4",
  "key28": "2HoUjXcWYQSn9PTfJf3YWZjKjvAvj1XdyXRtA3AjhJuv9NK4GHBmPQATNa6t9EWEh9JZkF76okGXpZp5NX9aVCjW",
  "key29": "32eJDF6sDnGz13SGRYaGMLoMZ7srjnkJT4JuudpV7KfWuUktuVm97oQJMx4bqUzFPXb72G8YEx5iNK2GkrmfLjrd",
  "key30": "5uYmVbg74JpvtErwdsbQ44uGrPzKE5CTAadunmCTVV7ujAzwcxJLPd2NLp46xACabwTgMcVecMNxxtNvrfmuKuwx",
  "key31": "4GFbaNz3f74zsQaatAzk5Ej29aH3Ci8rsMHopW5xCMwkrpjsw5t6v1AakDKGiEH1X2vtG4j1xz6uZHhCwivVxeSZ",
  "key32": "39Jjmu3ZF5EU3oQRbq9A4nwYdJFs2gXUBFmXzWiP88ENuZKH2jJPMpBFr5dvgMvCuEd8Kx3ihm2xF6VXB5xwEy9s",
  "key33": "sZet2z5PMRfr8aWckksjFEtECR1wVF4LjTc6yJEPVkaVkuUa15rMGQQbAMmxASiJtyqpUhwD1GMg6oqX8UobGPc",
  "key34": "2LdciSdPPFEHY23ThJWfoYeaVVPg2ntvv3r5QqxYLT8AVJGuqVsKFmTEzQZx8BfbJXZtgZXji2vt88r9k5ZwPw8g",
  "key35": "4ep6vUkgjTnp8RRW9Yy691CGjxEqXgw8a2hpBCod3jkcGuGb91n378NptGY7W7E44QjyisUUXxi23s8u7nV9wAAk",
  "key36": "2EiwakU2dZkdWwhg4eL8RQs4z9MjGyLQLMDgf9bQEx7MCLEFwb2GcF6M61Eys2MWXau5CnVCwVv69TTAbAFcpLq7",
  "key37": "5pbA53dsYrpkCJwJu3vPmSBdc1qLTFufBuLuwjJjnkN5aM5afpt4c4p6HZaUapVVftsFEe4P2qm5HqenwAWuCpsG",
  "key38": "kuxv1xF7atSAkpuScZ9m5cJQd6ersXdmfi58pJVyYPYBegZmsa2o7aigfy6vSQXdcBL4189JNVgESo3FbmVXaKN",
  "key39": "4ktoUYxKKLqmqJs7WfzFFFQawuXkSr5HM9tXyiVMnsdWpzxn8hz1uaz341gyvVXX6QrnrZpZjx3moht3iJxN2TZq",
  "key40": "4GEWPBqHybPnoFBoWKPD4TZq9r5oNkj78sh6ghiznbmQ2JUPLXdX5rdmZMo5kk2QDp78EmgKpHqMgKuNAMYQoVPa",
  "key41": "5EC4RbAitLJuGcDgC5RrRWQfqmMMRMjHeYE99tDN1pNgjcakCezW7w9grLS2SSVugms1ftijQ8cJwYk99ivG2mgd",
  "key42": "fyhCmAWAGwCXHtZ6K68hLopdHpTs8fvgqzQ7zCbNsjYLwvbGkGsLVQSqZZinog4pbHka3VeMrgPqCXT1qA43QBk",
  "key43": "Kijy8EfvJBuhDgcNZZHkN4QaTAHvuumsPGMx8BLyffAnFcxteM2aERrMdqAg4ZRrcBb5b6P5GWk1fNJkXLQqapw",
  "key44": "5tczTWPNkUpWeyNcYAYaAgGCtQn8idFmZiZkqxHWF4247BAvo13ujC5j5np2eCCNmKdNnCXiGhDfjgjEZvcKvke8",
  "key45": "5jvVKq9fYzd8uS74B5PJNJ47RfeLNyCcooF6NkRpQYEFtNBGkGsuPsXm7TRJowCepDdTQsNM77sts3C2qMb9UdZC",
  "key46": "3HWKqBQNoK5wBFxYSfWEFyL1zGczdiD1iir8Ptvct7EtJ4mnegidDgcjQH4bHtre3e3srFZKZF7yQfoeybVeZt5A",
  "key47": "5Lq6h3kXGxU4D6fRTA14udkqxwfmjvBRzZbQ1NGTZ2PqEdkqzD95zGQKnwv4ncFzVBwJU56JdbPSgXASJyE7RA3S"
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
