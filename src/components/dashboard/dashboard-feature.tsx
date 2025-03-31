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
    "49YGmCSvabHbhoCEfsQSEiZ6s4eYtQRUAKyBEk8HYdirMKXScFoMvof4Ngu2Lm5divMhjQLaEo8QWZDJYc7fKbvo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uf3z3KAzymJSs5Df8qCWuZeMk4vZf3guUHhnDs6C1WXkcijFssXuqVwst86Wjymdn3QvqsQWctasM2aaEGPesab",
  "key1": "gEXBMkWYeLipybnRBCeVK7FLGGhU4Kw7LEQLiyut3uvJcHgcVwTFEM12wpVEaP7Xxe42c2ZKwv7Z7taNX8atFBU",
  "key2": "4indm2gzTPWfD1GN3fbFcvaMDKj2FidabfppsuKVYqTGLamL7rifiBW2dYR1LHQTwbnaWJp852z1EUP8XG8NdHSD",
  "key3": "23uwUnm4n7kRCsXCJkaipxikQPMKXHPgdBSuSUEiVJhxRJqfKoBtJ8EsmHJupPSEpW3Dm2Q4xCyKmiyAWh3AbXqf",
  "key4": "5DJj6YtHAwHEcuXAFogQmh2dThh9pW5eYJHms21CPVEwUeeecXQUj6uJcoGC1unJ6WbgRTvp75TZxWtTfyGY6a9i",
  "key5": "dqvoHhefVSRjtxug89mJTRzEPuztHswJoZnd6P2RJG7bV7UDy4jUHeVXvqYPFLqvrkc55GqmFrcWfMfuQCYEd4r",
  "key6": "5uNyQbXSqJoMkWNJ3mstehMehdoZDM7o5dN1a8yLLzikjK1HTB1zTuPRd1kpZv3EYo6aCU2BSmUCKXNu8JDnc57L",
  "key7": "66RFk86aNfbs2tNkPrtQAEd6q5GkiCqBbLC46MXyQx8hNgxoTUfc6FvTJfD99Ki11XwLixymDmymeaMhDbQyYbfb",
  "key8": "5PMwNc3kcPHnpdGy3mRNtLqvT5AWSypR4gQQsTHzTD11VKezAikRoVboJ22JNWEq7C7aCuXSQzxbbbjT8K1NHts5",
  "key9": "57e8vEPUhCjoHzCYBSPaFsum1hxFTz86SFXrVu4QLX5cvz5R1r5h1BNUECN4jman9ceJN84H41U31mP6oGvpRFfZ",
  "key10": "45zPRNdRy5svTxhfabQEw1zwAeobUPsdgFCPY1qfm2LUXGcojbTzLMVvnRMyzRWBAM6AatW8tLQS2ftNBsPc8ga9",
  "key11": "5TaVdTbjktYCELLcwWPDtiV9XHsLtk8uBB9RTZfSR8WEEZUNCeSThng29DUZERgWQUmyhg7r3ERACtDQqJvgfZM3",
  "key12": "5iBabdaME6WRrtoGvZfEXAYGLejrcBHinBvcb6mPdAxn9XTc3Ppipd7vFDFh9gvJ1HhK1ULGzEPPcYV1ZjzUyTXy",
  "key13": "2qspynwYUzuGe44NBYVVkXBhaWypecvhWqMssK7vg3E8oQtH6jgJWsJCmjJ56ac3RecX9amCMZXzsvZzpBaUxQf7",
  "key14": "4Npf1yg2BWZhVfS9b6ULaZmwusYSYXwVsKAxfbjxqPSFeCR1KPxdxxYLYCyQNXM8uRDPJYQ6bSxoRSZ1VUL4B9s5",
  "key15": "5s4uUs5tNXZ9kLcSp1MLKDa2mN1PS72oQczYViKFiBiWY3tbnwYsbxhUZrenV8Aba4EfKJi2rQUKPFr87N5we3GJ",
  "key16": "2AtjxN9JSLhKBmugSKZCwv61cPeRyfvmDh5xqqsUhpZfDhDkU1E7sW6ymYGvay74vuD26RngnmPeThSZtut5VTrt",
  "key17": "494MfPreguF27jdp1M8eyyYqccNaQd5zuZDtxxeRoSJQxxT8fxqyuB8foRKRmN4WSKN3LDb97Hg77pEJcV5cUY2w",
  "key18": "3PhgmGnrry8dyUPp6JVk8bbMU1Uz8oNfWiRWQfTDLptRJ6qiFfcpwAb4eLH9tLjg82btEebMLA14FuxjR8pxmquk",
  "key19": "21zxm7hxP5edBL4gBtPCWWYTT53U457ERHxL6E7zSQxmW3cE5fV4bi9sJLRgDCWbe1YBaVXKSrpCiqciEHHFyvBE",
  "key20": "2YJUvfosnFsi1onjYUxq1xkhk4tA8LShY5453Ld1H5fRd5zuUbR2fGGeoFYrXXB8E2WoZuV4SyaJeYouGvwy421y",
  "key21": "4khZJ6nMYccwunqfBgJYzSGwCbvpf7cFto7bFEPGZawtWj7LAQ1bhfyCvKp9gLtfqbPSWqo4Wq3Aef5Znup99tHW",
  "key22": "2zQotNZSz2j8goqTZ2i2Vd1FMxauahyQq6sUA3go3nCczZXyrCJebu8ncGyXp7fBXYdsh1GpeZwWMPqUyXCjoYha",
  "key23": "UtSiQEVMGa49rptmsj5ewd52dFQfHvRS5UFJo8QqkaVK2wwg9XJcmRnjKx1a1fYMX3iDVefYwchXCRFtRDCPcyg",
  "key24": "2CsqBt7D9bsXyxeXb9GpNkDUZra9kV6nMAzSw2yodzYQUce1opJa2VDnKayGK43wX6XarFu9kvdFipicjD7NScqY",
  "key25": "e7DZwoKCR2Cwx37RH4YCZoH6e8cq834bpMwcqkRPWhyE9qYk3QwAc9fyX1BqXHsAadYLodDYPMCaX6DydoKDwFB",
  "key26": "3irRLD3JquREosMnks9D9o9gbiSbfqd5HW71YhM9gGm6c3jaKhfd63Xrkahj4WM8aiQsoHkzTcvTtVqaa5n6DJCt",
  "key27": "RsAuDi4fVDQgX5sgVUyQQLoHyGpaUuM51vdnQCTA6zLVUCsf1EcEkQrGNdF5Hhgq12LLbTxBnGaqJmXfwdpVKJN",
  "key28": "DMnZScxZ3ZgVG1GxHjftFAVoQRhuiZm3oDdbgJtz3d7VCTDnhuHAvvfdT7pqDgPV2xXC5pgJMU4ZuQ2pVMEcECd",
  "key29": "4WTBiMpFexRaXnFKXSrKQ4Nn5YcxKuRtKmdfrk1TvQ8uC7gjXR6svk42AtKAoYexq7wnN2RbqS5jr6MUmAAt4aZX",
  "key30": "48uHA6xVMrJ3z4saYf5tZvPKsUdff2Z5ceHEPe1Kzpnuo5VyiDuJPe52LfX4KUdwHTkuCqqXCfU9nMtHXVhNssKq",
  "key31": "4YJMwQTJrTfmv7uT48SCgC4UCyGJPFMAzYbd7dZdLDvGVXqK8cjwJnpptB2cfzzgavr6vGGWK5ACHusdCtQDtNPf",
  "key32": "2qyWVLQDfjnKetpPzZdqr1jZ9ELEBYjJNCviLT7A78Ci2NAofKxa4pfELHGHvWoyaMoPqXkcJY8yEw1DBHoqzSYT",
  "key33": "3rc1DCfzWvJVNoHF4B4QhKRcmekufDZkwMMa4CGoGPZetmmFHsb9xDznFeq5QZmaoq5A4e81hcrZHHomAMXLLcxJ",
  "key34": "2pkNy6xura8g1KGozbTv9sTuEPurVAcjTx3YWXEXtMnCrcpScYivbiK1cZzBTCUa4L91LJBbFbH6HJHWi8VdTp1c",
  "key35": "2hibN4V7fLkcv8Hog5DK4qZxnrsgXveBRXX363Xqmj2gaFTHSgqo1KLdGji1hmC8Eg8sWXkZqvCVmzzyStLDLeBr",
  "key36": "2V5JVB5K4hXq1avGe5pe6MF1NDTyoaVkzHV7ZqURfRVthLzBhXBYwMCPzQvLnuU1nw6BVfMpX3ywGfh6jz5BuzUi"
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
