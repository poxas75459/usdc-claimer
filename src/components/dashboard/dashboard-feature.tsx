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
    "4ycMeUrfknsHDCqqyVwo7sccDDZjLtvKaDVUEgaihL3y8TfnXYBrkkVh6gSji8b6jT4iYLGvG7584gK6mBJz84ch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61G1Kbsoj1FZ4NKzP2B1EWwvbfrnzfHkdiK3RmfZfh3wrAf75MiPPL8M8ukxeEYdEDtbeBfQSeWLmDkMJ7feQbpP",
  "key1": "5PtJz6sMpotXmouamZnoN7mCiXck9m2wnzpDq3QZZCVQqEhpVfkc3KXsoTbbn9pUPq1KL7bQHgD5Uyr4M9m2mb9W",
  "key2": "5ChRHyH9ZNqFRZpH7uwVMRvAvLFcaDsWKeL5V3zBhT2kTuedQKmXNBwt7BXjxS6ChXrgzAunVCenDo56VaL6bfr2",
  "key3": "32NYWoLRh8haenn9c3u9TQKPHwkdVQ17U7mi5gyRFNy2uwmJtbJwC3wSTYJuZoAT2WTDSMssYKM1UvGhsDnrQeu6",
  "key4": "4zr43yRGCFy6v4LNRN4Ds4XDWePJDe9DY2K21E674Q5YixNN4HErhTQZHno9QZ6DhTbhtgU3gvxCtmcCyvUQv5Tu",
  "key5": "cL9RRcqzCwd94tJxkNsMQ67CTpqT6TXaKcfYCYqMtAEEDbUTPVoVNLcpdwKq2ihzgd9WAZnULUsSQKveu8YsdWQ",
  "key6": "9PrEDjkPU6zRM4fuSH34vc9jWFYErMq8kKq1Ja1NUcHkMpykPeAchMYrDZbG8gvS2HVfe4d3YHUAMVLoARHcj1p",
  "key7": "4upnz3tYyvjya2XaBSFiKx9s5ZNC1axRgasUCAxLyaokPYBqWS7WymtXtmzMAmyHRwreGhqEMpaAhCgdVCZqyB1R",
  "key8": "4K9BP8PVTWsZdpkKsf5znptcKynnYTdUwhpxc4CwNaxD2TrkPjiLzwpHhdwZ1PfAm2UFwauNGun6C8TPaKKdLSXr",
  "key9": "2fqVFNJjyQjkEz5JraxeCutyDuHVkTL6BHBAyo6P9nheWpUCky7P3KwCMRcSggqoE3iQQUC3LfY8UYoVJuVvKFoQ",
  "key10": "4WAvbeUY3kvMTQiLCzawHmjBwPpWxjaRJjbz8iF8LVmornSv6HGq1rQXBCdBr5feh3JvQJQt1WSziuPf3E35BjE4",
  "key11": "3dHdjKRCncjV9yf99abuYH7uvh6yCVWHoUez4WBCowgJpukwJN7mfLFTVc9Ft9cC67gQk1FGS6WYpSwCAbXRoiAV",
  "key12": "9kGCokuejfzLi1otDnkbXouxkvrCCwX8d2r18P3qAJ8gUHii9ry5PGtSjdSN1JzjkMeN6Z8g4D9UVKuADHWDZey",
  "key13": "48gZUUfMkh8SJmTqpPLhdxHq7tHdCAgpNemTqRr8wpZpeQG2cfYKFRVRG7BoL1E49zNHSadKZURfbmZKYDvpaW5T",
  "key14": "3sAAzNKjmdnNzSyF3cdYaM72z52ZCXzk4DGpm8JyMd5sNqtXspzkkgpuUBgBcvceEimnn4iUxDMzC8SKpJP1zMuU",
  "key15": "2LTwJJ5i2mTPigDdT9bcmqJc7GuTNt7a67a9bP5BnXhmxjwzNXGCQZP5VsdDAdG6qrskRQEYztWXYafVax3dmDUy",
  "key16": "5gpeNQBCo7ziUhs8jBZeiRxSgNrNsArnSRYqmvf4mug3trnEJ7ncCxM2vm468TV4qaxaoRfTNqxU1KZfvbEXB92x",
  "key17": "36WHpfcusMcRixomgs6ta6MfBeA1B2qubiiNMDb3RK17qsSQ3P7TTDWfHiu8DHeK3xMZGFJbtThbCxf3v4LcD6M7",
  "key18": "5a9sHxyeSDttmW5UvvkDV6tga9tiJGn3QMyRpju2foitURUeRTxMTduiVjYj7X728d16vMLvbkYNLegrDa9U5cPo",
  "key19": "4Yr7qJ67DAqdJkNWYhDFrzjDQs8HPDguN3qz4By9rp6iZGRNgiA4pRtLGyebRt8nzdCa2XRLtJHZR2DP2TFRybAE",
  "key20": "4RSXMmVMPcjLLQZgZVJLksDC24qjYbfyfafunLGH5ia7M9Xuxt7eUpMJQXiu3vcy6bXLF65h4s18Cij9pYRz6G6R",
  "key21": "4Zyoupws13m8nHgvv1JUf2kBEfWXiJvsT2r8qJsAKnxcB1yDzPSyuu3qnnH7vzki7pLPV4q1WeatNCwDq84zdCb8",
  "key22": "YhZEmepS15fNCouiF6wuZFtYN99BDN4jx7rrRcWakpJRQCyhdt8do76BeXusmJk9G4VMX3ci2UwB5ULeK7Rm3pu",
  "key23": "5KYxarkqCmS91dTjTR7BftXQXASpYApGwkcgHQncBeN2hNhZGvSQJyHwBapbxi9qDyqNmgjVmqJXE3wSsg1w8xp8",
  "key24": "3G9Rg59U67hfMcXMHnVhtYcR3ZcmqGTUekGwQM8so4LRZngFqvrNQJRgUQMDVC65dWQY2Q1De1vWzzrFj9mh1vS9",
  "key25": "bmjffPpZTPquioBx22UiEAfwrfbtWGJc8qvymrnzsrEjSks7GZeDhpw5VgWyLXGLZnmyguJceKHrzCv6oyiY4Y5",
  "key26": "4YwUHjXp8dg1wRexQNMthK2Ppd7oxw3P9UkxgL9NDz4r3LjHxUvX6USkVJpPr6PLUgzmnLH1EgjqjPHRFYh1QASv"
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
