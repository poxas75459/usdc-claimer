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
    "2N7gHLYEZRLb4P21sFW4aBTtbXrWGDdjvhHycYEoErXWe6t95GbrA1yug4aneYUQx9JQ2b19SticsyiDfdod33q1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LeKJHPdgeho9UsgHUhpUSmbo3WAiS5b4bX9TCMcWmJQs33fokztMDKbnoUuMVHPffQmPF7P4S2DtUJAe3njWQFj",
  "key1": "2hqiqq3fpJyExr8rrGR2amF46C2hCVkTgGJFnQsLJYfELi7CyqnZ16oAvSW5SvZFqZZHsr54WJAHzBjmdfFprdbh",
  "key2": "SdicDFv1hEXhFuGWTU1pSeBpHypMJnBQrDm65BgcuH9p3RR5fcNZrz49gu74ddkFBWXpA2VadoYZqaXBFgpn3wp",
  "key3": "bjoPCBV24Sp9YaNJtVjjv25RFNPdHzay6RqvzrzHsPnykCgkEZueftmKuxA1zpYcvZXCPtk2k7iacGkG3MgB7XM",
  "key4": "4Dd6uYd6SFoJ522mNEdF7KWFWmwHJX4wVKUo1Nm3YReZTG6KpZwTFgRRC4KUGzmEjDUcjY9miEGZ7dNyeeb33Bgc",
  "key5": "4UHHZBTE7CM1DMZ5iw6QTp7rgHPxQ4WNMApWK4UjAcXxn1BuvvWBdgNdWJboqVDVXGZMW1h1UXnF61K7CDYRbfb7",
  "key6": "5kxxoWgcneEkLPANWfgDXpF3DqxHLTV3qnRtGnPgUVzeur1RP1EX8StdRS7fR84k7XSQcuTjxe7YLLtdYE63RDp3",
  "key7": "38ZGXnKSVEaBH8MBuM1pzb2xXkkcsQgQkHzeqBmrY71ECiAzztvhaykYbPgjMctAfLGy9JKSBCLPwEHNGtg2bcyr",
  "key8": "5XD1hUYwdKitqgc9kM2fouahXsQh1wEd3PGnJAyhcx8mCixoqHsgnXokSCvU725wHpTC9sXXrUmi2bBdSRPcjwsG",
  "key9": "8pAyMRVKg2HpC2dcG6xwht7F8rzCVUi8kBYfqTZgd2pjTeNLcBuEvJ3oxsbfUQgzuNHPwS8FLMNSE4KPfcBS6mc",
  "key10": "45JLc5Shc5doZgPSZWvCSWDgfadYktgkvCF1tkQMYHpuqcjbjwUFLZkBkMw8vAZYgXPwp4bDidbTPCoUcdLA4n7p",
  "key11": "4kgHQv6WK4mCjFQBBHAPDUoMdZhUhQcf5GapxV5FXSHLJU13iMeixx4qk4sZH1E7Ettjnpq7TUARfAWQP64QMLrn",
  "key12": "sFMJecUquE5oT2MktRYJQTGwGYgxZ8ZHBzPfDnDsxe48qGeemotUEzPeAfAH2ejr1V9q7bdTQhqUjAeTKPTEmgu",
  "key13": "4V1oGs2DjTKzsebUmCZkge5Yd7BgtmyxLgyDDJgTjqVJsLJu7R6kJWEAwsRmtMrLejPq2bnmLevuZ7xmPFbhHeYP",
  "key14": "2RW7EMpmMCD2CkA5GpquY1bkLVpyW386z53KyLtQQrgiKDhjU9cYEZPicgmeNYyEphAxL7ngLm3euzgRCkMfuyb3",
  "key15": "5MbDJfpKCt1cLmQxfa6eeUR9v1t1eJ1eRxYkeZtFNTPg7wMbhve8e1pKtaD1rXPT4nUpNcW7kEUMXM528gv1HR7m",
  "key16": "2xYP3mviTFiRAJg1R1cDXAu6sTfjs7WWeC63qQKkoqZ6PacNe6m31wTWngMaeFrhS4XzsdpdJB743RJ7JQ9fzQGv",
  "key17": "48izESFZD1JZED533sF8QB1niescvaWWbndcDK8GKLuHPXCm6sY3Uda46htehELf6yhFNmsFBprPAjd7WmzqYVuj",
  "key18": "3zbUmroiyMujDfw3GFuMLJw2RyiuAAwqyQVmL825jx9GxDerS1EkjaUYBevW3e8iXLbRK9Xo5h9RgooxFrzFuFXm",
  "key19": "3a9AkJZJzk5kLqndN3dWdURY2KUANBgQdWprLeaiUrNhAUMbXGEjaGLHC7TqU7xx7SEFz4xSHeLRMa7SfbjrZAu9",
  "key20": "2amUjur3xLSWq85FR2hYhpCCSqyEgFArgnrmKwLwfBjz7DZN6PQLQHH38cNFKxqAa4CCHTcYMXEfcg8mta3PXPTo",
  "key21": "3hdqCwTtNHGZ3Tp3AA89oJD4VrH94WD5T6ZFM9P87W4GyTmLhopRZbc5oDYGdbGde9CudHaEMhSfcmdxbKMmgKN7",
  "key22": "4Maoh36nbK2a8LMuEuQgkdRGTsJPoB7ZTshXwNEHGQ6ajhRFR4AG7tazL4S17uUK6rNMKuy6jmRxs4ZtK2uERZwu",
  "key23": "2VT4m6gLjK3e2Thizcrs5Qk7YJ2sxt22gZrKqV7oC7oecqaen3QovrEZ5DQ6hYAqHmdZMz3epDpJkoFUBPkvJ5hs",
  "key24": "2gtRkLpSouu3qvtaec8QnK1o6ezvqcUwgS3m1dWgGGd9VNubsmqzqwzjMasS4FdQojs9q2ZQQrjr82RonZdMPREB",
  "key25": "5N4oosjVTqr7Sh5vx9j218ukveLcMnqVok1vTsTBHbswFDAAEWqXQ5M6PTzmPFAs7PXEjUjL7honvDqyNQpEMCPs",
  "key26": "2Fvncefq6oKhMpaKYLMs2ZryUfQZfPUr6AnoC3KsvsnWTxxfoR1N1z75ShX3uSpfkiuLmtz8g3xBbGCSny49fy9Y",
  "key27": "3geCBiDXb5GY6rL41EstfjLrMKCnh8gbJw3VuwMz3nnkeL3hdvyU13V1EAYHSqzNAWb4pT5EiSGjwSQLhSaXcvw9",
  "key28": "4pQk6KKvmpgn43UJRMteKbvewJ914dAUWQZ54oyyYre9uf5HLpyjmT9P3D6LehTc5NLbwU68SvWwTEXZzc8v96qQ",
  "key29": "5JpFa4ADY9vFVmGXEMeMxkdbG4hZ4VGEDSCFh1fK8usUNXwrc9r22j8KShzrrWpQ1TBk3PBHaudJHCnKzB5PqiCv",
  "key30": "3Wa8qJFMnWsHu946ZjunVCKBGw3wqT4pHUAYvYiNg2ZXgVsm5FPuKEfGVQ6sjEbYwenzh8Nmm1rBacG9DWHJwTao",
  "key31": "VJXZSeH3SUcKiLetDza4z82XabUkoW7EUGaudsZUBxJbeqPYXoxwuRWfMp5VYEXo7biP5ku2bcpMWAYwNXUgBMx",
  "key32": "Nr7HSe7rRhCqQbCHHFGHe4ZKXsqWBNKhnBfaX8YPHsZNBdnbp4g8zhbAMUMpywArF88HichdkAWR63NiAY6UPBE",
  "key33": "2AgjqgBvDNvvMwXADMu8tYJaVVbceTb9rWJiMGwSqAj9PY2Y2uSA9xGrsCYHAKerEgzBFJMvPDeawetb6ESCnZGF",
  "key34": "5LnaL2661oG5dMC9AtbfXCqa6beFSza75cXkegNPaaLWDWu9n7UjhQGfwQBHSdFW9vswqGoJbYk36VnnsC9XNnyg",
  "key35": "336AZYHjStiZ17yLogVocpmRcdg3xVgduN8Q7i22GUMJVH2SNsrWfhLcatz9u16tg5PcDPeDektXrUSmKk2JB8z7",
  "key36": "5dRCUg4N889uDopHPHvnkv73tMAEaB7kxwKZnTcp5qTLDW5irTifD5R3rfbEjFMjxL9pNF6W6p6CkKzJqzLtAG53",
  "key37": "45TJ4fEQQRoXT5Xj6RnsGTbZQBjFwZ7NtBUDqYiXC8q5kGwd3USTsihcQa4mb9AA8YZvjk87wMb3xUpv8ZUY92bu",
  "key38": "4Nc2fLkz3d4dFyN5xRGm5dTmpSrpJ5duK1LWw11kDgtPenhx7Ptvx4JLHuYYLkKEeQAUYsvoHuRwpPKRx66LAKHn",
  "key39": "5LCFcZcDsh5dnKdQsUBYBBwXhN6uEhbqu4K295Fevf6dRuk8HrsZsUC9fZjXirVdCFpad8VYw3Ah4FvaWSnUpRAe",
  "key40": "3EBkeNR1Sf6TxVsuzC4PSF3CKKJZMUdMwxWo1obFziSVWQbqK6JuLhhS9us1njPmHApKE4XpKEWycpj7fv5jb5AU",
  "key41": "kRtkRofhbNJYtQrZfuHRdNWy8DWUyyrRBnDmKi3pzeNcG5gSmHbxe2jWwvnNUETTM2p7cbmCxu84sSx51SL53nZ"
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
