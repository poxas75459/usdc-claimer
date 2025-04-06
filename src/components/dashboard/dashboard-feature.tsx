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
    "5AZvY1zQaAuxqVdxog5H7sTTPmESndQzaWB6ssCqo9Nj4QQKbhos7fGZ3ZoEwDGBDiFKiLVgkek5CTEc643e4AmH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vwdUWUQzTnHEqDu7GkDnAnyShcjad4s8B7fD7CDS8F3CNsnBxKwVwAp9Re1PCgVGNtCE1LdBrTu4sVLAs984Dx4",
  "key1": "4Uh6XZ7EbtM9qn9jgGcEfVvNhyiGT7AbCGz7BvRXiPTKEg1buGdgx7Rct6kMmxc6PwKy53vAfMzgvzQFvaBRycgj",
  "key2": "4G6dsSu5LMSnJp2rKfTpPMMi7Tp6UMihRKPwwiPGCi2SmiukC2XXJqUC6KiR1aPoTwjUZBpdRxUfgrVaMzfkmJR",
  "key3": "dkXe3ndT6iUpcXtcgh88sR4MQPLaBcZ7Fpyx5fGWJD1mSdwYqdaWSGtMzfERaJcwnjTzqLW9qEDQfWqcBEcnZPM",
  "key4": "4QVS2yUvnfMg4B5dBun9HFwYoHwbJVQqjtca3sAsNGW6t5UjnBw8ZyzFoYM9jDn3xjCMmDQsCm6M4wPyBo4zndyh",
  "key5": "2hpCRJJvitUcBu2TwRWJxAgAepg2eYJBp698quw8Wzcfawzb3tX9RNKZR9F1dQahYie1RHacpNeEQv2EXB2TcigA",
  "key6": "35JoWotCMCXsk59iZvB6oiiFa1BBdmpTuFvivJi8RUk1aFcX8VTG3pQpEWthoX9URk96oS2CSMA6oaDwtVTkkdJA",
  "key7": "2hWuK6iLkyX54sPpEgFJZnWW59V7f72LzuEGkBcpQXzQ4kRnV6YTQxax5CoHPwFhQ3t3QfBEX9x9xDce1PuX9tiG",
  "key8": "42EuWvUMw8pxtt1EXBy3L44hwfVamawa5dmm8xbQtgsr2TCn8MHLCVgsVwUvogR2E8DrKDT5SyFwFDD2sEDq6aAx",
  "key9": "Z6CY9XmRPDR5FQwFqN34tR44JjFEHTgKbiqHwN4rv49tcPhg4vNRnc1YcB1tdD6VGKdr57x8GsZ1zoaW3mEaLEV",
  "key10": "WetFuAPmuYb1hLnr59Jkz5kcpYM4sjqaqvjB7P3Qe7R4Aue2V2gVjNN6e9K3G7KEEWeDSX11NF1W4o5Dxu6Dcoz",
  "key11": "4UjJnkGpqDwFwKtzBKi8pWuvuijTgowMSN7rnNkddbnDk4uRm5ZNh5TUkQxR6ty6y8aif8Qk5c4jLimqqsHgfg9N",
  "key12": "5qu6yn6Kof9ZW4WHAeAQNBfoEQD8mHKSuUz3NKuvipwfTFDGVsMoHEccBQFxLaoo5wMLZViamMAsPEGak4ZJAxvu",
  "key13": "hAJbpqpzU8sMRPSobgEThe3c356mGLJLiQ5ne639DEv3M4YCHFhLvSE7NuaHgzmaaGRCEDUK7TQFfs3w3XFdsn6",
  "key14": "67DikfMN26c4vEBiyNMHjQjCLjE5MKDux4rxkFatjosi7fCebCzqwssyeFxe2ryCiGFHhdaTHtHY5z4sYUeYaSGv",
  "key15": "4xN9Aj6hHJsRkWyiEvLrVtuwXTRWX1p9sNLGVcoYUp6KPhii5R3D8p6avdu4mLWiBj58fhTuRzBEf13TcFwCZdkK",
  "key16": "2FHi638w8ANedZen48ZZ2f9XH64x7Mk44pjqcvsMeGa62PFJjUeiJga2mxbvZRhZAEzNbLdyDDCefHQoFapMqRFH",
  "key17": "4PVz9PkCGVSt8DexoZwf8JGzEPjfc9n6y6yE5dF6MENBKX3N5oBjkAj9ptuR6CTipGAGAjF2v3LL9u1NGnMNcvbR",
  "key18": "5jLkbBXZ6bhMjL8TTDHzthzsCsLafvNrzqxXpmqpdrrRZQnSjNSnAtKtSTY318LFG9VNb5UgxSLzpoRwizagrfR5",
  "key19": "T6GCUabP4eJP5QptLrVzCtyuzwVtYB5tfoRhjrECqoF23B4QU6TRpHLr39hjBmZG3K3NGGQgzT9bwkMGQA5uARF",
  "key20": "59iLQwyoFwnD8Btfb6Yxb2GjFgJDFmSQ8GE5hvnWt8qwtTv4a2vvwsaoZBS8sEdGMoqhHFNkZXH6uwedttLf8t1M",
  "key21": "fsQ4zUxwmqKfCHdHRSApC9NBQD2JyQ8nHmf6NrhRfAF4Qcrtou1TiGJmKAgwfdvHo29HhpNm4NqWKu8ewKi69pT",
  "key22": "26o6VxrugLiewwBqP84gjeKAS181bXbEhx2C68ksLAuSjdopVNSNVwu9JMN8r23StJi7HzGFkQWn4YVA8hQh27AN",
  "key23": "2BJnBLLybqpAWcLXxgnqPAR21EeA4QbMmBEXwURuy8rGznBsz8Ua1Pscs7oWj7FfYFVRAYAQ2v7SnWkmB1b56fJr",
  "key24": "5x8XJeeDuRNTWC2ypvQK7xkz5UdWWJ7orsHoZzLqbhqngMSDTJMgZxiMjC1bkgWF2Wq4N7R16akhg8pXNS7Ns22i",
  "key25": "3caDwkx7P6p57kvMCoqe5M1YEfCKYNB4pBYdVefYC7fTW6TrHGmzuQTZnW3YWJq9ZmAczAHxFG48sTgumkhpsTpj",
  "key26": "4N6nYgRXBvaB1MQWj6byx67WtA7nVay1PpdehNCUpcraNt9AhcM2JAHuEG524oG5ZMbGxW4qFhoyzVcMo1J1S6rU",
  "key27": "2EHVSJjjf2tBCSSdZEVmf4WRyG2CggWWiM6V7D3hrTNReZkvpaVJ3doLtAyHSDk4w9cGfas45r9kgGZUbFWewYcH",
  "key28": "31s8b3kyvxq8JXqKbKtL9oy3pwtxVVvgBVZ8Y9VrABfUvwtrr2DZq2fg4aVgdFkLFCQCuiCg5bDdsuz7rjiRWV4M",
  "key29": "4AafsJPVihoJEVDJVgGvp5DwaEXqx5apuXjuyVUqdMGbAFH1KENHy1Kug651A8QUB1xK5RQ5SPTGHbiwiE8m73wh",
  "key30": "PdS34ZmdNm2xB8TZ6DfXxgEcKc3RYLCBEqqz9fqQeTvZnEXTcMrocbeZ95xJ1cQ4Ayz2SAqAEaw4tEo2CyNxi44",
  "key31": "4o5p1VHKd9PRhWuyxJeojS3nmFxSAbdqX1mUyyGdPHLkgMmHoroFZAsLxxwY4kw5mo2mQ5RtrAchXRrembHMMk6L",
  "key32": "4JNajR7Q8T7FnWKWnXoB5BEgNPgjXnHRM4juN9tFXkuamV2bPdEsSwq89saLcx9c5icCRHAvy61HDnEQRGALoFwS"
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
