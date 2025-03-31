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
    "rTi4S5qgVkHrE1t4YwcsZEqaF6aAfsQSHUb2ygBKJKYyKfMvwf3u9ZLi3r1MgQRUHKw1J7NcQZUMqoYWzF9JWqZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b3NJKWbGFN49u92Z4Ni4awXhVbhC4zGbgEVADkjwxGXvHewvHtgN3D5X1nnjuTXRb4hsCG6g7wQoAzodVjuCikH",
  "key1": "2sxbkg1DBTPHKLAUVWk1AoK2BnZvN6NAT12CXjacjhb3f9ye7LwHvHqS1BhQeA7Z5qATVx5eVkCABZMVExYHbjqa",
  "key2": "3UVmN4NfeSTurYbrjd6jBbRYy9DAN4zcEsvhh4ffunk5koYcCkramGotKE6qcLBbjEbnSFkPLJUWWsMW9z9rV726",
  "key3": "2ZC8htX4vAsEQUKkaLHZcBzZH62CfkHmdFJBQsvoJCSQMpw4pB3tuqtvpsjcCXDfTYuzGKj62eAwrAyDh5CZtDEV",
  "key4": "23Yzkp2Ufynp4u3TVPcWNtMjFuzKuGmT7PrmaQHh4dTmprPCAzuHwaVayzfzgEnvhuxfVpXi7nrYNrwT5CZZfZ6p",
  "key5": "2saGBgtA7jsUn8sdEvkn1VSBgis9BPUmbpTV7EkP8jqysy7DpQe7LcEejWp2SxHpmGBjcXgPJyi5m1WdnXh2Rdm6",
  "key6": "3vyXEbbJ3z4G9HpouLFfCaPUdZa17H8H1LJvq6FppjGYmCJvnz5qrhxqji3W69WywQa3jEvNotCrQ1qKLz6sKbnR",
  "key7": "DmPRCDnaCovE3SHbxWgwHutgw6Qj6k9nhZHtsGVChpRWp69gtcqinoreQc6vhj2ZTeVHPLwVosubH9QQt5MiVCD",
  "key8": "GuRse6RJ27x9LAw7CHPM1vhWaeNCYJfr2oEkhFuut1Ms8K4beEg6BXTjaAoP2NYV1YEnAgs9BWzwwx2credgCGV",
  "key9": "26c1nDPMmjwQhhgh5KPXSWkZjixvXKRLQf8nPhXK3EY4xQe8c5pZnQRKPiLGH5DVEUL5qshShhqwvNt8MKM4Vvzk",
  "key10": "2sJjJJGtuhXBspNU7pAuddqcDYPG6kN8A6YFB4Ny1B13KxSEPMTWG5W2Wqn4NmJqc9i9rtRwPGJtm9TxDAdhLiZV",
  "key11": "4m8MkkdfFWseH9GfGkQpzDGsu3kYkvobWcxHry2tM4kvXNhJ3jqBkTzJ7KjQyGABRpttz1PKYdXe5YPyx16xmpZc",
  "key12": "SMvjUV1MJ7yE4rDzAQxZDCNrFw2bDHC5kQ9LkNpr9RZDY2CNtpdJUBca9M1NAvaB5RxzVWNk8fy2Be34VFDZNhb",
  "key13": "59FX3uftemvvHfVjn7jnMLdVhjLbkfjRgY6MWnFCfJvwYKobSyRp3S1WX8Box95GbMosCMKvRDnQ2Ye73AmYdAZA",
  "key14": "5Y1sCGsAAtNHuEdomBSSZC3Xex2Q4xANrufNWZu5T1yPFg2Sifvg1LJGjs1BHDRjrTMUn1Mqkw7nbaiKZpcmF9nE",
  "key15": "3WwMfEFYuW3myX9AH41df5kG7RW1HH2hRLhCY1xgHKP1JxZ3VF9Q7TP1qLpmxUAJewzcs888yMBprwt3WhL4EcDt",
  "key16": "4CfuUNeLtMVDLHDN1DxQ3U2SmkA6QT8CXjf5624sj24MoCAg7maV8PmQ5kqUaBgEX7GWip1Qow2BShp12HsHgEY1",
  "key17": "5G7G7RQ7R2rGkhibXC16y5gZ8CCH6YRYmgjpJUY9tFF3uvNsjd63BNr4aizF4sDc1F39rVgVM4DCZ2P4E9fm7KXU",
  "key18": "61Uf8vSRhvqGNPxcJqVXQmTfdrq5VnKWmQLUSvhQBWb87SjceGHVSGjX7h61VG5XDtsdEc5gQ6dSPyHAaeXkUhRD",
  "key19": "4GNAUnFU2aYwn4aBvhqkva2Jzh7M3shvkv2RjkTmASp79TVuSskVn7ibaj1F8aTDbCVEtNAUSXLJu5qLXyxD6RQg",
  "key20": "5Vqb75qMn8jGoPShZBVwENCqf1rk3SBaZjnmPF6RXZbh8PdK8qCY2LFJLcqNVGa8N83wze8MpnFEheKxxEkTX3gf",
  "key21": "1Mx3oFNhu6zSVThhb9T4rzwrUV1YFNVkoc2fUyDjSYRyKobL4kLGQXaiMYfh4tFf5DZLQanMr3sJrXjEJ1hoowv",
  "key22": "2UwoQ4UJt1pWtnzCgVmp4ZNYuq24yYKAVB2faac6wC2yejt6XMSgEf7nXeU1rz7EKFvfhRgw6D42YTsDjERruLvA",
  "key23": "4JDrqxJ53iy47s6KJ2Z7rj8bxG4inLasXLnFDmdu5Uvyk1K5YiPdkuADdhHxTxLzsECbDDkGu3VRTu7rUwUarWSZ",
  "key24": "442uM9ksMCNKN8ZdquMih8hFfhwYWbL1dkwshn89WHhu2haHFqACNMMknkRQVYmnVWVNzpDHs4DfqDxnQpKpmqnF",
  "key25": "4ZorAJjP2poAViCqbJez6idf97xGEEozQX3SSzCibarJV7gLFg1Lq9A9CJ7BW25kukN8uHAxcetZ3j7tcKmZz8wj",
  "key26": "2dWWHH29RZo8UqUMpGrThUauS2Uk84LBniir3SZVxMBzfPKz6Xev8Mk3AfykWEJVFeA2c1vf16rU4U3C7wJDVSxA",
  "key27": "44yRDtFvSqaX2PZidX7r4XtgspRievPWr8zfHrTVZPag4dpUUf1Rrq57HNgVHqnUYt5CvqLEPKdEyZ319C7rufze",
  "key28": "3gBFp4WCk5KPDenPzSyv9E92y3Wm6gfRY9EsFidMFfYpJPEnGFejzUj63CdCnZV8W9cuE59K4DiniuDnNsuQDfcK",
  "key29": "24oV5JQHJyP7ejXykXU2whvAMUcLRmteaVeXFS84h5Gb9UtTXwvtFshAarTsTzUxXj75VbjaE5XoYd47nYdPLqh2",
  "key30": "45EhGXab5s3WuExydAQS19yP6pxxcj76Pg9njSM1oa6Z7udQ6jKUzQkSvd13XXPd7JfBvSrmsPjtdvcisjoCQ69y",
  "key31": "BCi92Q6SdsviMmRbQREPtBxrDSs15wXSkTSpgGDvTBCC5Mzg9jJiJvstviJL1Lok5dC8f3qbSfn1783RZPM5yWV",
  "key32": "5eWg35u7oDknAFQJWLHLPdc1T3gHVqeW5n3Pdn39twyiquDMxUm9WET1H5VdJNFMMV6rE4VnS8GCs3Mv9qWRzaFw",
  "key33": "57U7aZ75Tfeakr4U94wMk8z6pbkCy9fqopsZxX3ZDNjRyS2bBridYYaw76iYQBhVEJTARJRGj2kMrhrs6neyrweB",
  "key34": "3HiaENfXvEA4TzUszmmYEdXo85Pn5kmzFBPxSbk5Secpf7KRejXRURqrwkBLeMU2nsypFedu78hb8Vvk2eby62rx"
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
