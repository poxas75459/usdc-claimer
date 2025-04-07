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
    "8EdMcsvpwj4EniJEa7cHpidkeWeaDiUvnR1jGUyaRC1HAkghQrGcvkiMyA5LtYov8ap1SmnzFPqCA9osQQPJEbx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57Wu6PCHLsrdySwGHTvp8yamMbHjUDVkcQn8fNjFdYmSN4EBM3JWjpMUxoftHe2hDZD8exSPX4KvNRyUiTRiavPF",
  "key1": "5ZhQHn7CSk65BcdSL3nqtzjCJ4vWWaknN35Bw3fbAWvdfAJ2z7z3AL1fmM87hqGSsczqw4R7NvnWaTrMJ2ZwsxAc",
  "key2": "3Q1wG5wtMQMGxiHJm2jWVEFYrCvj2XBgjp8KN6zXLaYrb2XhuoTnfE1aNeTk4jM26b9MjhEiRkXhMBsvdsSaqBzS",
  "key3": "2mqk6m1jAB34wUNYKqXgBTG6Ce1Lt5YkMnB6Lp1crkWrcEsxhmLaawqLHxatpk25LqQ2q1zjS5y5WPzfwzQf9dKE",
  "key4": "2XYAXBGMsRQ8d3T1yb9GAZL46etKeoVTLKuHQmQZP6P8uFRJnCns9q7wLHnzKLkh1LAHyqt7BA9TtVdma6hBXN2e",
  "key5": "2avMig9Rz2nTWnAZxjY2pGudsCikDotRdfkSk1fpizomEaVBqPvNSGJ9kH23qVSQ6mTijyghfZUjRcn4KRBKFBCN",
  "key6": "5CYe7XoaiyCFxQ3LAzXyS7ZqLqJfUvzZRnHzgTV5Wq75FsNmqXeYqmZGs8htwM17BjePtGx3gWCsr7tY2NTyS5fm",
  "key7": "3dzVo8G9tvq36vLhHryUV5DXPqFEN5LsU8jDCKT6PhREUmnYDpsqNL7JbnkqSprfGHTWeUbp6RFubbS8gAdjTkKj",
  "key8": "4MrLm92M4wnUhmiz9ZaeUjEfk2DaxQHtRGNy9dBXoAYZ36GP49SW5bu9Pb9tuNGTzkBmSff2CvZJ5kGCKkd9KJVE",
  "key9": "3jWugK4nCaZveK6J5XV25bpZsVX3kbGoedYX2nvgVBV7Yc7hGcuYFepsSP9PaWe7C8G61fMNoy9RBbAidVhDCHHA",
  "key10": "4QovQXzDLGjzusoZG1paYn1NU49KmfLgpkcDREoZ2hLZJEBKvtvuBHmrmbJ4q11WiPtAAHB9mXj7ByAFw9EZcuse",
  "key11": "5S5uuhxyqxPdKE4LpC4f8YmXbkBG9GJnmTNW55sDjbSVCgAm8mTyxXgEXECVJPcY28Lr2omLhdFUPUTpaJsj2PA7",
  "key12": "2jboE5Nx1xb6kb5YPBRbZ2NzCRTYvbJrFxihhBtDtD1X42pdWa5Mbse3G9hgSTXe6D2ob3rwxZSUBvVYkoYvfQkY",
  "key13": "5yRmzxhhR95uFXFgvdDNe5qsfTDyKjHYPbnQ4kLNHKvFtFQvdNYgTPtxqJNHaWwwRCyxWBLPeuHP8SfeECkyN3RC",
  "key14": "4mNaseKipatTeKDd1Y4SqcbrQdGgbyJ5NCn8rXwr64gQkT3GLHd4b4aXDNTkzWxW4z5UNKRiGbD6zgUNYttVsBEa",
  "key15": "5dXJgVJ6P5ujYgVxX2L8o7SJAxBDi8AbxJ2MoFNASNyAmeVqMTQvWkEsEemh2fPQtjJ4QqGQr7bpzhCzjCSgSUxS",
  "key16": "3URZVFSA27CPY5sXXQFEhvFdWbdo7JhzNZXAancyZKSoBrsJSTSWAMsqnHSYUQ624YiXJP6GAci8sGNNXMCPpfox",
  "key17": "3h3hpFkKVGxf4EXGRTmvqSeGCviogUPGvN15M2e8N7vShAUsr6UDLF6XLKXsFinnG5v2aXd3S8WVM5TqzMcveQWd",
  "key18": "356TbyoqemE7Nz4Y1Zt5Eden1sdKfE3nA2kGsCFyjWJhyiu5peWBE4hSEypkXa4maqoLpVvwwQKdFLt1uwfyA54X",
  "key19": "U7YJzeUGVbxVMxG8WJa4bb8Rmt6PgyCNrag47bhrKxKTqCrSvwsiHAqV1HCRxjxCyvdrzZ7NjEMtSdLx5vugpZn",
  "key20": "5HpeSmQRG2LPRQmsSTacvFhD1VCfUaU6jFZ3kqPGACrTuWX8g6pqoomx4fYnoaUwC2HoSjMQMEY7CCKTC3iVcrRb",
  "key21": "2YQog2SeAsf8gX772U6xSqR6Cggo831ZN266Pa92KfjFQvbQ7kjS7TxABtckW6GBLMhdqRKDbqxDrLMw4KoGJum8",
  "key22": "2MpxFywF7Ac7bnvnVzq8UzBg7TZeQJP7uY3Yan21Naf8iTXtZa45sSbG4yZp58UKoKJR6cZv9ZorKAfUYywcV121",
  "key23": "2C4PSzTKTBA53buU8bEy2bZHQjvxYNEyToAK7RgS4EpzzjaTeM4ZGNweXKYGw3X8yW5uW76gYExneLvQ5jNfLNuV",
  "key24": "2vW8s6L25BZBgqv6tXTZNjBmUYZv9urZUnxUxx5KUtHinc4NWe29JGLcpnhN7CWnEzhw5hWk38W9rWYt5Mw223QN",
  "key25": "2gb3pJXT2Yosv2gdEsPBehSjmYCiudGSssqNcNAeYLcRqrjxeoYsxAN7hUAtgUQCM7x3rnLJd2CRPaeouYjPvFTp"
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
