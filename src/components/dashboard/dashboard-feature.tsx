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
    "4bciHL2mFU3GSxGwBZeBNqPnBDw7q4cDzHhP7DaexqFZnUXgAdG8BsyMbkAM6GZqJgibDUHjQPKXuLkNjjYCduHT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52AqMq1dDu3Z5wDGZyZzy89TNFffjG9KApMTPpHqQVn7k9nUoYDcQA9u2NbFmtxRJqjE3XUWfHW5z4FwuMBRd2BT",
  "key1": "2kfK99CQhrgvdQgAwNy8Z7wGami7ju7pfSuj4g6vuKFFjnyVn4cruFk6LcAc4DUQdeAMiU8949zFcHJ1cGGbiZbA",
  "key2": "WaFR4ASneFfafpAihXXzvYShiHvFYtoDJeHirTePjPxtdUbsX1CcgFDVqKx89KbdgtzcvooXUJsziacwUtmKNfz",
  "key3": "dpiVZzv4NZi75XmVo52HTdo6u3LB3PsQXTQJLptoBWJJKComRi89jNYfWHzTANzWK6uh7q2f1Mwzj2Rp16Pjpa7",
  "key4": "ujiCwq9wRJB2KrcP1SzKjPCYfPzGx3YjtaNPveV2SwtendtmhnSumQYLsJuqy9mtkvnVGDwEtDHvrs3scQWdFZt",
  "key5": "5EnA7YhybTa354gCutLKP6mdZsZM8drYSiGi6GdAFEqc47YgQfT3udus9D1LNACHqWox9F7WrojrHzYd5PQ8CM6h",
  "key6": "3kAn9nikGY7WZzs9u4eBagM4B4gai27kRoi1RMEwuD6QHFpyKkVpEYeykwBsFmj2jmCBLAoEirdN7fpQxx5YMXQs",
  "key7": "2UMYCXqTatakfwjkVLzkizvn3GWZyS1Vf5GQM23CTBuLn7rnpgEqTe3S1W8H7bHywKktSku8YFTo8sJoUefSCbfV",
  "key8": "3ToqTA8f2Y1XMDgPYkWMux97e2c9TYC8eT8WtaWDu7iXzyKu3QGLjf4znQs4nrPnBDPWiXswjZZ9E244ssc1NTtr",
  "key9": "4GMCHfPackECYn3mChAoz1fi7vWYuiJJiFVUf5CHG5dXCynEUT5reGvMtN63L5YZ4N1DeV2z2M6i4iYLSjqAiakm",
  "key10": "2HH2pGU6XmkwpQhdbN3w9XtvFbyQYqwp9WnmmMNyvVaSUh6VVNHWNua9j8Yti6u3dAaGcMbg3cBTabwmGcJVQP79",
  "key11": "2HbwJ9zpcmkfjWuf9rDc9Cs6KjQPUiCRDAVjt1EzxSP5JsnKuvXtsgYJG1gPphq9YNX7sZgz74G3K3kjq1XYbfJo",
  "key12": "W71jTQhx1MMi2cmC6VAtPSEzSYPKXsmQVdyd6ffNY8HGq8iRoEe1R2TxkFZTNiM1RQ4ddj37ZnwdFK6s6aXtSXp",
  "key13": "2k3DqYuik8i9w8bcgNCj5vgJkv6CYqzAXVVwNyLuSXeyB4sKdpxGfPX1HyP59D5veLLgsk9amiK3u67ZpcHPCZ3a",
  "key14": "25TvxLn6sym2XvgahpmizsKXYgfnWv9EuwXqK8QfWL8Sk6BfN1w5YZQMXmBTWH2RmFGwcW15rkbpaU5pNSt9sCcA",
  "key15": "2fLGEDkYUmuv8CZVhWqGi6Whn3t9B5e99RVWxJts5n8ZFjRRH4kQ8i2dgJ21BwN5jkB597ByNCBCSoQRRaLP6NqB",
  "key16": "2LDv8tS5TvBXDHfRjSpdhbC8zrzjwvyFg222WuC4VKH2dkFyNseMK6KnNtbvPiB83yamJUBuGSduqUtiW5DpVQcL",
  "key17": "2NEyYhV9odeUfF5H8FwxUoExWun5QBrqt115CPo3Y8vKJGzfCc4qwbCYCXHj2LqxQNbVQ8QJ6dzJh8pgp4pUr6DN",
  "key18": "ukqG8pXjMf7yNG5uGiSkDcmCzGuXXDFhtRjL2Nib9ggUExAPR82UQxs95Ki9VHugP3D4CwukdmB8n5c5wK1k3GB",
  "key19": "4JeZrwPY8BBxnt9NDGnWoc9hrTUgVnaYXQ14k3JFbP1nkrry7TCP84qHFtvUabJJVBsjwzGtiLVkQUJj7se4GRY",
  "key20": "3TUGGG3346vsh1ZbmhfanFTtaqbz7RcyoQtgcYmjP2xHHXBUK7jmed4LgyxaBgoQtSH9fs6nnpZNxpcrH1yue3wp",
  "key21": "2J3rjbcd7Rdo9EddYSxLCD39n9Has8K6r3LFMAPvAnRLjyrmwrMNHoWfNcgzuFc9HF2NgDbQsnbdJ5hLHPs64kZK",
  "key22": "5Gu3kAKHgmt4Yd2jUUfweRHHFnz4PyK7FDgw3Hrhc7ALYCgRDyRRNqafUaGpB7aPYEjtWMwruUdSx4Sbc2HV8AEo",
  "key23": "rSnKsu13dr28b9S8mt9FkgBvJHCThFZZfPuETrTbyp5CKr2xJUycFw3PLZbaiPgiwyqLM8hzYGwU5R3WxhnBHb8",
  "key24": "5BKGSkgSY4ARcB6FiDKHQZvjpEBZXMorYtp9NRMdowefFmVPwCxQYho7VZqAu4tKNVGwamxHXeHuC8pCu5uQcTqn",
  "key25": "5jm2ax3BP2Q3VyuB4y55e9QkxHVwqLRQKPa6TAVwge5Zuf1vcRQBnJDTuwZfdVnJxug3t769ZZHvLUBMiAGWA7du",
  "key26": "2WNwpseRdcz4scsD1ZuFfSew4KUXcQDLw3JidEGTp2AHo8hxVz5hskJxXXqi2h7HdBi3FjS8eqh2X3iUMjBMKVFk",
  "key27": "5QTLUGNDDtTi5AM7UfJJca5oq7nHQDmkNY52duPUey6fu9Qq45cxYWdPhquTV7XARCq6Me8tVT1iBTQGG56XCJZc",
  "key28": "5p1GofD6wUhgfxeSJeo1eRjT1n9mhCGpgTCPghSVeNUyPfZdUX8tUak5aZG6zpSHxHGvAdUF4nFFR9bmYQGx9eSC",
  "key29": "3kiXS4tQotJMJ1k2pCihu35FByskUErufLtyf2yKWTipVKNZ8YXyG7u2TKSXqGUXWnDHXEoDdkVuFytRnL2adctM",
  "key30": "7TZam2RyDAjhBzunQE9rZMjtwGjmA9NoRVMLoNX5tZgGDdLGvdoGLSQkS8hseLcmGmMQYhMmKCbKY8x14UsGz7g",
  "key31": "3dSzUZQXyYhEBeCHAc6KW4A9ZLFLdJpqiVmcEieNax1Z7miD9kLrbDh8nEr3Mw3m69euw2dqFTza2KTx9u7bHdzj",
  "key32": "65PJTecWbCkWbGs8YCphp91h3KSEhpUoykkixhJuTRVfvrjpPz9KGyFxactbcSEKRgrBe5G1V9aAu6LjFkqnMa8r",
  "key33": "j3bADBnoBaRRWoNZvJqbAQDJA6wUcZuhXL6f7NQEWzhzwQMiW2pHpgbcYtx4rcuEJVN5RGppPe3ih1Xa5xb2KEx",
  "key34": "5Ve6ProCkwZKx45cp7246RQccA84498KJXnkkQK4MHUAKw1dpMQCDkEwWjWivnh1NdmZSiQBUrxQii99N2n7pQid"
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
