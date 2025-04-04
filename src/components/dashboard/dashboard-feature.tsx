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
    "3w9c35uxWRuhwALgzUajZNiZCyjeCvKsVTtWJ8BBTg3v8xfHEoJ1SyoYHgEGEj9zbERYqAzrfvFJ4GtjiCcEaef8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51fHRgEBcCpoeG2x3UbnxjhREmCgURr2ageqv6T6sFABBG7iMWJNwN5f3uYYivUAC8p14e9GZiFzsPdUsvctJtHs",
  "key1": "45MSZcm4EMLRqh4yPCNncabRUxX21NCahWGMur6weeNc71Ct4BruJ5QjdHYbN522EZ7mnSJ5jUf3dcAZXZnnRASV",
  "key2": "2fV1nAY4YFdXgLjNvEmeEL3DnkRtLH4VQwYAnKT9GP455Hkebij9M8DvQhAX4C8tGgVPN5x4JTBa16Lepz4YwHAV",
  "key3": "2rSVERFkZDCbUQEGzsZYAgrBSmBhXSgC7Wfo2Btk5xRp63tRU3MrotN4WJjRz1sbLFNZpearrRWd7rRR24yrXgiU",
  "key4": "2UGwK7fR1GwCUVeJn7toiFgKt19ZE1LF5Ke4PWzF4EEqou8vYN9nnrX9JqZLBqQkLhZG7MZ3NX9aetremJBPjXiL",
  "key5": "2rEZcfrp7DviHEYRdNsj4A6bKD5HJhskYUqcYdmGRywSK9rqPTqSkosEec6t6KpRwnDkN4pCmbzeyFTu5jDVN7g1",
  "key6": "4jTaUsW2roqvxdABdYdVnGENPygYdQWLNf3gnAFDHp5iNZCwfGzJGQyUJZi4rbTkF47wBGyPau1vYJUtztnvoGuQ",
  "key7": "2edF6yWNwZfPX55SNEN9Uv3JoFtjAuQpVK94b7tbCjfDkmqbMAAdQfcss5bJVQAuh8zyghVpXwTTxFo9sPAhiwU6",
  "key8": "3KShuj79BuddiErkQATzjs2xS5uuEdtEaUJqYvNsRMx1dVyAwcZbQMaqmVb1TBYwdjESaj69XLRZn2KwWwEFZ3Wu",
  "key9": "4UqhfHGaj9TcPKU1Kd9KArbYbk8Yft1hnmndADUjtqsk7aND8fLgLEhZJqnhnXL8NDBNvBv9xyzHA9sTXZKANwpc",
  "key10": "5bdKpRfCxDZXYPaCF3DXKfTuVYX4ASU4Vovkb6wRQ3hz6vR5snVghT35fDky67ANPng3kcZ4FxPZYz541BA4LGBP",
  "key11": "35b9VkR6QaKsHYaJapHknVvimNV4Vyp4AACy5SpdMUfiNU51gds3LNJwXwnVU4qF3yrgr81o1FbMq8CBXJBMjk2n",
  "key12": "52tApeUUri3NgQiBSEUyjEFJGzyYK2iri1MYyWNdhbnozTEZqxEoSVMir9GMtmEN92ZepVPeL2gSsVNQkaebcuB4",
  "key13": "2Kf6vceaofoXDXFvapgKUzqDeLLhm3xY7LTN3re63J9L5uHCkX6m72GzTSsNQQAkVaV3dqoJxZeNL9ji9fRja6ED",
  "key14": "3YNK57giqHKTYLsrwsXUXycJT3hV4xDgqzWQMd4nFHTfWdzPMK48yBeS2H2vxP1bTZC5bAaDbTu8jzGNYJwVUAGw",
  "key15": "4CQ7jKgBRR9UYcY5CdcLyiZxXhwTokEYQWRJrQEnCBgdSw6hxYZ7aWW2aEURHsq3ZuqN5j21PmFgpy4Rpg24DqNp",
  "key16": "5JtdN8XivPX8WBaFZVtEpaknXh5BA91Ff36ohPnVvRFU1i9skHUktVV6jRyDmotdmpeU67AsvCrYvAzKbcoxM1oG",
  "key17": "31tcUFsCJAYXpQLr1yx7kCx44XU2Xhake9QiJG8rXBpxdXvC8A6k4RozTSegpnx5q8juQyNZxW2miJSpYWdA152f",
  "key18": "3m37WRBcCPeZz2FVmE2ouc5cu91LJaFTUHyDbTHMzKWpN4beYGV2DxKyM5CfveqwG4ynNQhvWNKve8tXecsMLtkR",
  "key19": "5NtBfrzh3WyG9yJ2j7N9zrdXeqyDnHmXDSFVg4wPbZVTaVfrkgUoTFQ8oiuwbqWv2Yfw1X6JBqFHyQzqUQmWFfNf",
  "key20": "cQ7bkoKUixg5SrqUQdfTmvLYa4wSBRUdXvrRoVuzvyQD26xMwUD4898NKNqdeatbkuVR97Uts9SpUPyw3o74vHW",
  "key21": "aqfew9CnwFZbSesuLbSPybFfMyqTTi26XWfedRpdbeEzkUtEAVGD9bzhABvJLufbpQi5oSDVA8qc4Y7LVGfdFeJ",
  "key22": "57MUktmHH8e4v1GuapX196dG9nxUASyjALh2ZQwdNp8VKPFTJWeaXGJwpaPxgGxNqY1Ancv84XCgryEp5acByaQt",
  "key23": "3bgZ8pMtjVshTcnk4k4cwQfJoSg3f3gF88f2DrWoHnWPQAH3682J2XAXJEUSzi9myVo2QeE1gKsVVZiwDFdgoxFE",
  "key24": "2GUAhbG1YrKTkojRnuxMj9eAVa9P9s7aDAv9hhUn2oMQWqHoPiuhsr64TELBVE496ahWAFAcPUGzuq6E94W6bUaJ",
  "key25": "5jQMqac27gxVwcnm51TPtkDvwi2jGELZsxyUCZJaA3nuW6bVA2eThcR8WoRrEYKeGrpGsXAEYVvncrYW3kMBdRBj",
  "key26": "5yoPJ68mtdeDbebtSpcDNWfS1BujpH2z1rwVzTFN9Luyx5Lewpk1eK4CMNP7f1R2NjCncw1RQ8v1K9b2mkiUtMmV",
  "key27": "2gngBY57nxVv9VE3fTYKeT9g5wBiQf7SHZsY45nkgwUPYNVSxsmjiu21M9xU1nj21Fqgs9qSAp8ZmDfyv82QDBpT"
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
