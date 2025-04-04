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
    "3AyYZXxaATxzDAYXN8Xr8wBG5b9sTs7HaLAkt7TQqi6BdKSuMMYYBoQuV4QJhBhw8L5zTqRSrTNYtSpSAZV6hcL5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5boj81xy6qNhLZiZTKGTfB1fspyjoxNEN4PFd5bqNRUenMLzTwT9yNryD2D6Uihz2QrKU4BdbSZrf4Y99AVXjQTK",
  "key1": "4tZR7FbwAJFAPf3w4rQCsB4nUYSQenFCruRFxsBuVrCpZVaYhxRQbEac49vQ4U5MU2CUi2QdgsC2hkdrzqZ2MqBp",
  "key2": "jgFNLxgN4mVsEY7vgZpzx5YRhFKGZdgtUHFNyPEetGEyRaFYr97koMDkVBbgnXPJpEizbvaReVsYugSTcLEi6k8",
  "key3": "5XTqCFRCv5fN1XEqFEYEYx4LNpStkwkft2iBBy3ftCq795qgqEG8PLjKxZHMsPcLY3ZSbu6KGEBmWVX757xLCBWw",
  "key4": "4AByQv45R4vDx6f1Cnb3FrAhxgPdZJfwUzTrhEBbTyLRBZ4zBPWt8W7yadDjF3fg1z1c3SRi8kRMSCdwnuPjZp4o",
  "key5": "4NBHMPo3YL9EeUK7EGVUYrzHVmkbfvugb4mJoh3aJbwS72Z9nb5fhFYqhKCjckziFXvfcVTj3JugGgUY2oJbgGJ5",
  "key6": "5ZRz1RfpV2d97ACewPGG4fRwmSQgzxR6sEgdHge265pT6m6Zc9RaQ1eEKCDDFBbQaGa8weno2JuQs6KVgoio2mcw",
  "key7": "32gZgGCJ2tbcUcW9nCtvz1X7BgPRVLYeWkjmMyMgXeznnGdV3iPr7TbJFsUMrZARFsBRef8MWuSaqqpVfaf6VDHV",
  "key8": "4e4CTAYfjdMyrQtp39nUJK4Xkx6SFpYSkUw8vgh1zPwphQWuSv1bdAvtVqQrBVKTEem6kbEqKJGRcT1MdoRmp3ms",
  "key9": "5ayf7SN2Z6juZwzgEdEcfrGu9XryLgAL7J6FdqfA2RCiUczRfHAYHH8KTU19j6nw5nD6RYHaLA9Q5wyTtoNrv5Fk",
  "key10": "4dWFkgKNK5tYPctTd1smTg4wR6wxR7RFSrCHruDUbLau4mkPggcFnQpZWMgQfj7Em4NboWP1ejJkvYMDHipVBL7n",
  "key11": "SNSMVBLWsCKDE56aSzDFnY8cRCE9s13fn2QUPxqJo74HmMk9ykYx7VdCbe3gUfh6oKCAs15SE9rJtbEEixzDUDx",
  "key12": "22NN5srEbbVN1LvLWPLmMxPsPxnFeYy7Ng3c9oYDnFXreJSUF1tLdEqSiCL5f4SkQbLn3Vvzx8t1Rw3PvjyrrjBQ",
  "key13": "2uEVoPop1kGKe22WrwPqpdsTWSpSBZmdoD9dZXv72bu6XyKcFtfM6buY8GpTP3zdMsuKyNMQwskjrG5TWbMmU7cy",
  "key14": "uG8p2RoyRjFpesBgGai3ATGCkNRQbRRdwc1jGonqXzZDGvaPvxjtg3amYZTkqMAWqRevNzAyXk1miztAk9Nj7nd",
  "key15": "5TGSnWrpJtNbMHD2sTtsUoo2q4png26TiJR1SEcfbKuKhK8hPncZXAnnZMFxePjYwyTEVWbJiyr7QHEoyg69WabM",
  "key16": "4Tt66tvv8zaUZLrjDGCMTCANz7EiY2FyquXMiWmGTBwzzB2y8BsWGp21wMBRQx9NL3AZASeRN2r1WRmWe2r31tDX",
  "key17": "5GVJweqwt8MRuE4xbHdwt58BHuyfFtzXPTRiCd9thxhgQ8A2f1KmKQNjdTU6bFCHpm76J5wAX3Csyg6Nmo7sfKWG",
  "key18": "5TtdjFxF8xivyQU2vV5hC5yJgLwYYNMCfW6fnpnwQTxqJHgQUuQNHxCBjHKCASF9jhyyvUsUuTqis5KF4g2dXE81",
  "key19": "4FaJQyFeZUx2qbjM2igiPLPQArmQ5MGtyXeZYBk3msw4yP9Vf1SSzhxPe7aLgwrRWQF4cVTLdFmmbSM3nRMFdXzQ",
  "key20": "4ytjKcPTdkfMFdNThGZ8WC17qyKw9xeifKu3kcd2LdGZzYR87B1uZyXY9sJdg9br11pXNn3UaRHYxQne6jq145qG",
  "key21": "4E2HCvpPQCryY42uapAMzUwqQQ21EhHGuc9tzT439uhUuZBujLsxEi8L4oxbBiCx7t8a9r2yQoDo4V8ngEw8Ydg9",
  "key22": "5C7kxdTGZHmiH3ULisw8DcBQse3Nq66aDZMBcrFTsJyEMHEjohn7eitY85G5duyyLt5q8R2oVy8NyxjiPDAKXopk",
  "key23": "3NjzEcGFaNebTPM9DnDn1a1LEnAuSC2QGiUG2GDwrwAQBDiWR7Fi4ciPw6pPyJZwNbDeXhG1h1L13ahY3eYnvpUk",
  "key24": "5J1XzpD39GcHnwYmyGgjZp1XMrYdQUTnUFXjgVxXCKfiz9MRaXFzk7Rsevix12dd7vq9DwK5KR7MPda8TowJ6WMa",
  "key25": "42dM8T8aJHQcVkGC7EJuGafJTySGf9o3ZfDfBA8Fo2mzMetbQdNmTWL4sur9hfHad739KKT3fanpLVduLZhrMu1D",
  "key26": "3sXA81jZK5mQJSvUqdSDwd6dYtWV6WirwbHREVxLdFUTbTgzcyHBXxtJbsHyJiZPDcKnRWB8aEKtZ7c9b9h4yy4h",
  "key27": "5Qyf7aALMTGkkx5rthjbz2hQFKG4kSH4U6k7UQy8tLuGGw5Ef9NaKZWdeJkS2vsmpUyV8wDsKMdTpTxUMXRwgryF",
  "key28": "2C8YE8moPMW3RivtaroxiMewAniJEV31DuuKiuZ1V3obC57ccFWTP5SzzxFVtGHxiRpDCAuAeepY8TWG1rPCJ1t5",
  "key29": "bQhgLrHHHpNEs8ohS46PJNwupbvnzZFLv7qHTt6aUqfveEgqKCwimCaoC3mnNZbP5b6EfJBKxvFEDZu6d34h1uy",
  "key30": "4cTnRc85mWqGxw5YEUHS9a7kTFDHCneiWTTCSy1yMhhvFT8k1KKRzHYPAoN4y19NDfRztuam2B12TtZk8fTMvkQk"
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
