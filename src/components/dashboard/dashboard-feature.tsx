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
    "JTTKpkoLptYxtF2c2fbUdXCgtMmQ48PYmW3yjZQSjBGANmN7Ltp5LZWbkCZyNm5MKPDvDoFvoFJCQRxgf4T5Aiz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vKkSUNpXYuDs3t4VvJ3DoSvuTBnNXe9WSaY1VwQp5SZrXhtgnYmQk8EsLWdFuFw51haNWk1mgGAsHBFjFHw2EcP",
  "key1": "5uG3ckStZBvWjPDXGbNfDRNCLxSutb2sfqYBVcMs8eD2yJ4tuJkxoE7GNzDHqK8kdmAAVyHU5CX6LDD5oSo3i6JN",
  "key2": "SNNridSfzkwjvPNbdPh5kRCRaZqnuU4QbPbb7hiLszM7rU3fM9gTwtBS3deMjAD21MKLTiGzkxCWp7W54gjuANZ",
  "key3": "2jaZLnxNCVtq6eAG1dV37mwpjPaWcGBPYT1x23pXrcXcfiMfMs4PHxPJCT9CxNQHF3of3HuV4uwqvNFNuvymxwtn",
  "key4": "4mfUsbnbxwHr9qFxFGbHY4dWnwhFJfKWfoX6SUXpUAEMGTyr71u8Y5f4krXsjfv729yrnJ1MCuU7dvuMjAG9gKCn",
  "key5": "HV7UopXtrCyqeXQcsLyH45xQuYK9NU3zssufM7ThfzgRQQxv1DYUtiDiGA63kLATMrUwNRTjzHUJELUFr4eQa3n",
  "key6": "22kpnaNxKpHxBeXrmSsJX9x5jCY7gkBPEsgENJcY7vaoTU6FC5xmPjtokY3wrGcbRTk9EUwzzjGQ72kDsHdFuug4",
  "key7": "64FGCgNtMZFgYtsW2vwhVRYKEDdf95UJgdMttuibEp77VEQcchj8rrj1yYM8vJsUUT5VHC7HC5j8pXq8iCQAME2F",
  "key8": "5aCVbipN55LWquDL1iRMxXqyWnVB2avfhedu5bPUmn4bMdhMoPqf7fFHVGT57NzprueRifvJCst56MocXrYGEh4X",
  "key9": "2t992AUcR8jECnukiPnyaY9aaWBZugq9wERQKiCMAmdRCA1kTJcYZVtQ6mzQD825euj7AYsybRG8DMnZtKNSrvYi",
  "key10": "5sd8L9XSMkhAg1gEa4xpHG86Q4qisNC7TPJijVi9qtpu5HZtjKpMPFkZDr8aZAy6cfLHDeLEKMLab1maU6y5c9Qn",
  "key11": "CdnfTEp14uAoAiTxnELmtDb25tT7MJoTzS8Towzby8x3RKTktcEzZaioQnFtxrNsapNwmNoJWkpRCttrSJPogWv",
  "key12": "3URt1TpzTFUX7S4EWenvzN7UKNENVsmHwBYQYrPMraRLVyDjRjXuH4ffzQ1duufe2UQWPJhsfg8wnezJemWq5eJv",
  "key13": "4uveJnJMtFHyELWVQ63AoLb5BBYQeSpZ9oY5BjTYAJixwje9MW8ca9z5g9KANCatxFZW2nWmm2jJprGRXKadhXUw",
  "key14": "57QFMX6jgrnRzFcJxPJxqkePVLAkC6pQuhu1oFzdjLW3T7i4GEvHSiuQioVavyZqEwd1qZHKVbGPq1AmcNyhVtZe",
  "key15": "YwRiJFXWmqV3XDBXeZzCMsTVHDmzyrP8SsPeh4yoVckXf9MraSe1TKeCn32sf834anvCZtdCQKUJwwtSP9WV1V3",
  "key16": "5aL1awoe1ZqZnasnM4nnfKwcmng8BkKppp65mWjXtKTsYFkttx1jYo2RwaxBCK25U8o9ovriJSzqdGp7kRM4yZU4",
  "key17": "66tYmURy758aZWKgzPofixmoi59k5fLYt4JdWUJGQRcKA8uEnH1sYSvzAT6UjgWHD5qtTktdThAjmH9cmSwTFhUG",
  "key18": "3EVc9exeBz2u9ew34fg7g6P52Cy9HeYMazh61RjEyCbc6b6V5e4aAWfM62eHNjdB7FMmMA2aLSSpYP4vHV3Nvybh",
  "key19": "2R3Acqo2o2m8tzZuFL5J35CjVJb1FFgtRSFcad2K4SwgaWFfZrTQUSHnkkSgXWHW6yVKS5wXv97c4x6srDHyf4S9",
  "key20": "48xhYusdJAb6Vm3nGhCwrLwbGr7aEU8oLbim2n9MANLziTovaVoufhJ8LHarYwSANQhYxmjf8AvRjPoVSh2BYEEa",
  "key21": "cBqy87SpRDcD6v5qLL9C2A3XCtWtmpe8hEcvfuKgVzjdJRhYnC5TUzpqHJ2Cj82L2Q9fdNGwYHNWDhyHkQbN1ZE",
  "key22": "j2jKrzeH6EudWZRmSnksfWqdb5QSH6FQWdmo2r4gzKRGdjJY5ZfK1LFbju6X692Kchq4wf943oC7sTpKyvSZxSh",
  "key23": "VEqSB4d49FoXESryW9kFYfG4aqPFLQrD3AtwNjM9VUzjoymtjprf6iX9dZhwdgUc74acYgxpdLdxtH6UeP85ZCi",
  "key24": "4mobTfZ8kMRfJVwbLvQosqAJFZ2GvccXhmAuyFHM38vASEpApZEJaUcvUvcLkfay77dr6CyrJJVd14ZC6owHY8dZ",
  "key25": "bQgBAmto6dKek3DLmV8Yrciw6dDd3GNkvTAeDY3enFMfHqsqG19va4L9YmnDVTR9RWZwc6nEYsKPa3AmHyDPqKL",
  "key26": "4r3v57Pb5v6gFSFLgmiC83C1UAq6epMxD7LSWGnNc4keqGwZcBHC8j6Fo7Hffay7NPdMJuN1uRFX5izLVghhwnd6"
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
