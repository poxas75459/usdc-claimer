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
    "53mwhcPXAxoYkmrt2TYafDMzodmLQzKKwViA3V6PhkqA298cBPJoJ5fHYb2HdXbhFUVfN5Pw1orsWxj2vHj9JV5k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LKbgZgYN94RW5kPuyHadv6aT7LGcWunW6QTVizQoN9evc1ukeQErzV8uBCe1bJYujUNdA3RLLKch1hgzYS77RXP",
  "key1": "3eBrLsk8du5RK5CpQeY1CN1nxFxnZkZzhPQsFKVFrkKaPcfV8wG5fDyYNbypEbzsi1CcCGWcorJddpWESRr12QCb",
  "key2": "5gNXuoGKCZybBo6DcxpPwCDn6YFrqWo9dJkXHWukn2gr3oRnrz1fVAQRGX8xTDi8SRitxAdW7BniHzBtEgY6bRt",
  "key3": "5gUfYGeP97NPtvNwmiZScbzakjmkUtmK7a4H6v5VgRKXCB3KK1czp4LAPeRAQpCczdYWPkWdVMjErWDqozhfkeGt",
  "key4": "4x5jTJNf1Au4ecbPE2BhA9DckmBPs35qGgBPsmXeDCHQJM93yFeht9bmiUN6b5BLKgF9Efx6pbHG6oyH4QFwuUQt",
  "key5": "fsoZma34r9jgMn1m5KNoSUiokK6AaSyNVYZFrhPPBFjJWwzwzGkLuPBeuTGYfkfjLUiqQa7sPRC1tWJTnzMHyQr",
  "key6": "5zqTfYFt9Wh2VfMhff5T3K9UhcVD2A5t3CMd53akiV2k9iBRiQwt5vBWMFwQZdmBFxzq6pmDfErCsS63SET1RZh3",
  "key7": "3oPr8PUsefwWuE6EMpuFD1ronnVULxJz5DEKFYaoRGAizWX9eJsDcUShhKN6JubNBa18KGQ1gqWywD81R6WjdUts",
  "key8": "59w6BaZFqXgfaHNu3WMY7vxiZwBRnMhwiFE3jqLQLs4UcD6k1kDt1oyPyiiuo8AXibxw6URFj7brh78iG6j6aqPm",
  "key9": "5AmLoAWXujgZtYPJHD815pwB5K5N4EqaxKz91JcbE1GbFkeRoXnP1exY8yKse4mMz1UZRGCPqdUTG8PmpCmKrbXq",
  "key10": "pLyvQoXZwMDKRDTx73yxy3HJtJcXZ1CRXgtMJHw6NBoKMy58qcTaG73i2uByJ8j56KPqETNCWN8cS1qtVMPtB7J",
  "key11": "2kUAkBodQmH7n7ya35WdNojftRGiLYAZBN3AAN9gjabRomzFbM8njVqZMabdsjNEGiSxyf2Xx5u5SvZuL6KDdws3",
  "key12": "43m3sJABFcZP34x6Dqw7zXwUxYmg3DQUw5KFUcDduNTqSWEABdSDYAPHRW1XW4WngUUG7c7mXVvCPGNTxiUyxSfk",
  "key13": "55QXdwjME8koo9yjrMM4gMG9KBJdyTUtS3BZN7XtwX1dVqrN6dtV7w2fNZazkbo8KeXa7Lisg7PvV8TqcCtDhhsJ",
  "key14": "4K8ThamYYimk4AbZGzPrnxerR7ZPxuRaDS65i2LLDG4qSQEawEy9AHNAJsYsyHC46Qe6RAR6pPQbChviYhfJE2XC",
  "key15": "5PraYUp5aGnKDwPF8jub3G142eaeqYVMzGLYGVkonJomhi7be68UaPPJXerd1Heysv1Ea3QZzkXqCKjGrb1uyDFX",
  "key16": "2EAzeUAyAqiEvnhJriVdV3KHnV4PSE8Y7GJkeVTrGd5X1hm2mHZibYpPctEp88Rxx18icUrTQ9M75KWWx5FLVzq",
  "key17": "66tCcWq1LzfJCoJGswcqXEqB3TeA24tF5PsHvutC8YLXqXLFrhY8REc7snR4TGG8jSgJrqGLqXsQrwzzYCQYuN7W",
  "key18": "4FzZwzpJMbbGRJf3oRWz8KS336qhLe8J4koVcay2VYqHbqZkJVdtE36mwN8Q2ZdcFFenTHEEHWENtu9tsqpMQj41",
  "key19": "3ecGbwop5BTza314VwRbVELXhoVRa1ZGXq13LWfCVQyKfVucCneQgNLvPDuDGH1bQwvEZmxNowaZm4piuVhhZ96b",
  "key20": "3AZ6x7M4YWgpQ9nKgQmmmmQHPJoZVznXXZwKqkwFqNLqwBdEmeVxMjse2WGRW6kVe2bz7uR8tYW9Lg4WhkK3hJ2A",
  "key21": "31qcqEJKpeATwucmf6nAfphabn6ftD9UA7o4z8QzyJajbxWrmjV8fJUcBUBK6qpP7sfQtN3rYoQLDQyVAMW2KGKq",
  "key22": "3YQ98BtVQwSQEtceFtRRHW7xDtvFZW92qiskpLV1K7kj8ZV3Em4kLep78kz56Svs1aQDasGTSfE2Cw1BUQ9TsbTU",
  "key23": "5xKTqLKq6og8mthj2efeT4Rg7BtNpQnjx9zJQzdbzRd7jXdqdtUWXm9LBDF35rHZWFTvJUNGq7VZFPyP78FpWYpJ",
  "key24": "3aSabBbxjxA2Ua6BFbkCoEe2YeVZqXdAkbcdDfrg3mKXLJBPKVanyX8cy1V18a48N6g2nAS6q9Ma9VNNfeUwY8ir",
  "key25": "5BC1oApTZiuAXDYLXdCdyM28jPaYrz3svj5854Pno1d4Rp32eCjNVMAt7HHhhcBFrypRwCgDeSv79aBE4hHWMqbZ",
  "key26": "3cLXPRgkD6QcwE95NXXZZEadMYtyL22i5eUbipYhMnAftU31j2ns71JHKdEo71ZM4nkiUbmA5WzKap4c8phB4TQP",
  "key27": "3TufULyNQkMrDn19daW6FaJG2ePM3AQ3qv5U6ZRnTgHB1T5KmYJmUb4se9d8haabQZCcaRKxG2iDmBdCk6awF36i",
  "key28": "5qqxyedGZyrVMf4XuLv6QpxpneMRNeLiwFhEtAYwJxWuUK19E54EmThxtsWxVQcMmJjtGqnJ8JRM4aUTmhFLFjhQ",
  "key29": "4nPXcS6y7Ca5sWWt7otsodGmPxFJ1n6oWiTWza1vEm6H314R3vesyoULTNSEE1sncgUEJYjdbH9grZcpkhAkqxyA",
  "key30": "4GYnYFQSrG3pAoubnqbyjKY5agh3TaN9hwf6YebC3u8TVL8QiMYh3dkjh4A8oYUYbsbQnp4TnUb6p6P4EQkmLDit",
  "key31": "3H5K1YLnHsaPDmVr9v3hR3UmuxR6CoTGa5cAyjejY7ewL6Zg2deEK3rj8GL8h7q8zuaEnMMwhBLihRYabCfBsmJe",
  "key32": "53itxUx2j6o4Gowj8xbdWdB17vnJUiZfLzpUaye889y4xADQJQFcKji2SFXvmDUzeZE8uEfQYygrHQHz5eueKq25",
  "key33": "2QdQuKrgHt2EtPS7YB3pimbQqV5iWAioYr1Cm3bLy99kr6x3uJeHisqG3vCrmRpWKmUjwnSB515Hv2ArUyTd3khC",
  "key34": "Cbc2cgxWF8NMoGGuCrfteJd6Uid4r6ZoX7D5aoj81CkwNAhRxkkq1VnfAFa5p59bqZnJxmP9agNKpSzipb5fNQy",
  "key35": "4mfGkDLHJF57haRKC95uH3MjudUArZgCCUsZriBe4jyVarnZ9UuX2u4v4nGibBc7VKCRdLeSxuT6sPHZwF43JYpD",
  "key36": "3e8A6C48HvPmRnoFpzK6Za2zTbSqjxpYYo2qrxcp72q7BqDfCQ2ATxfqaXf8QiRAg8F6ntHNzHHNZ1riyb9v4h7S",
  "key37": "5EDU1kVbgmveNVR8SYZBT7HTAwEJvAJvGdkrjjvH3GCEG9RsDQtmErKGc3R67wF2KBhf34atLxTmEBNWUFkRtiX4",
  "key38": "5A7GmWsWnRyZonPzDo3Kh6LHKjq2QLK9DPq7MoqjsBxwBXWPxBr8rCNsv5ibM2xXEUzgV7tG6iQnL2mTvE5cero9",
  "key39": "5BZwMLT9e5j1jX79398t6qRPEdKCt4vM2AfNzfv2NM3xqcyrE9NQ4RwhDu1ms5db2JQJ2pnswfdqAEGD7NpxUrMJ",
  "key40": "43Kpxoj8uURB6Gm3RkRZU7PxuA5wkUF29tpixjDKj9xPXNhaDJFKhD2wVnMH2wahWQZ5w54emSTdTKKsem5QutdV"
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
