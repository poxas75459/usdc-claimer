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
    "a9YA1KkB6or5Lrnrrs9hARr8pGu3NPPzVVPjXGUCaJos1u7HjZhKgyFHgJYnGQ9cqBMAU5PgQ64yvgotq5C6PuF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A8rPApKxWQTxyAXDahsDZuZqerRKJHZM8sDsHnzspxQWkqkLUar1tzPVMoLaMZrZSMNAEXiMzhFgvpC1c1zw83S",
  "key1": "5WB1oZPdA7dm2vwoCyGw3oz5BPx6tjDz7yVX6oTycuQHs6tjdmee93P71i2nT5f427oqhMEwdt7pj913SpozRnnR",
  "key2": "2n1B3SJH9ompcmKafNHXfDahgWkbVEHEYc3JV9MwGxVuzF83qTM5qCoxVzoMqN8GtJfuw7SPZMX7VSxLD5cZPcB4",
  "key3": "3J7Me3vnozzBMYZNPJvBZGUb1i64BC3bdUfdKe5Z7uLweTAtaKh8ENrmQ1nyr5wS97bwfNzfqTy7vfr84Gw4Ftne",
  "key4": "3nAL9n1t7v5rDwfBwjE1LrK2PtPgcGDUzrEhHNnCGHL2txyBn3mLe1MS3szQU7C4xLUQ8cd4hDt7pUnz9wQx44iT",
  "key5": "2Rfng3oFbta2aTPXbN4fnu82R82ZVh2HdNjFy7aR1tsTBqBZF2Brz7s6zscCSMawDqSib4ze1KXHGsTtvJq23aZ7",
  "key6": "5zoPzCqr7NRjCoaxUUKSEjyq5abVo4YuEqWAZovXgw6pniZhzaLn5vR9YzpHmxVwMGLSKgWwsk3bnCTRLZCUETw3",
  "key7": "55qeRPayUFWhKPc6s5EoRbe7bZS1xTMC9PKFX8SBA4uDeUNU8985vt7YWv7d7dgXUYh8UcTvutQSuScRwigjCDsn",
  "key8": "Ju8DD1YwpJqYscKng8LZnrNhQ9ZJfi3m944EpdtVRz8Rd4VUnLTjH9Zncf5wCbrtA3uyS3U1wDRxSz6QHoVUZGt",
  "key9": "2HpAYKXcyUdFh5BmpjA5Kq7s4meAub5yvyoCker3HBnQU7uF1tqhgZZ2MESc43eaH5dw42bmLpJncUxbXYWbmpAX",
  "key10": "3ErVoe9CTtJbJ5x53CXDMeBHdNtcBZQmbSWbWBMx2e7BxHBRCKjP3WNSQ6CCJE6aaiC6Yo5HV8CqaKeQANUyJoCA",
  "key11": "A8GDUHs8JZAnbUwwaC11c9cV6k7axDjBqG5aNhPWR4z6vuvmgBydRBfMuVbP3JgB2N9BVQTBssM9vTXC2vMAKdx",
  "key12": "4JUsf1bj2p3XKi73Af7eqa6MqgXuor5KEAG3aJUeuPsoyjx2A53QJsXgJWi9Zp6GQMTNYJDd6xM3CL1wwRZw5oQk",
  "key13": "3juNmCYZEL2z55rxh4rGLXcyWJ79WVmiSmHWmdfhwhCuf7ogwosgpBAkdyxFjN8AUfMrz3qb8dnpaKXwNsybfCdm",
  "key14": "5XxrvSH89Xx7DbEWofJte9Rp39LGa1uj8Ph3icd5JawBCdWfKFRZsmmR1hyUdEw9GLZXUPFm3Xr7vAhcG7i7vh84",
  "key15": "61mVJcVCcYJGmDWBow6mpKbvT93bciG4uHT1teRU8AaGDF3AQekGZaHKr73xPzW2Zy2qNygoqdm4TmYhVQp8CqGJ",
  "key16": "5t9MHDuCyobsmswseEkh3osnwDWmQcpjq4dR71PMLALHYQCpYYKPA7mkADHBUP9TYbxWzp2uBkayiAUaKmWQgmfB",
  "key17": "4GSkgnxrhRwdrSZpFwfAMwcaHbRgPs1QW6e8nxCo21dD3w4xBT7ZMUBFqpMyV9zGyNFZ1vK2QQhmHNn2SBAaA5Qn",
  "key18": "33owLEetYdCUa52V4orPtcVykzBxnZsqxWdR5txpAZACakyXqZiCNFzuYJQLjNAduu5eCUWrKWmpwxtY5J8VA2T2",
  "key19": "3UyisB6JVQoJuopTtY5GjVLzGY8FddbKyLbM6hPwrNjA3zrag1rndEXUpmYsAEWG3pe7iwFvAmFXrTVjqkktgtKe",
  "key20": "66qwC4yfpgSmySCLHwnF8XW9midgYnyQrCBu8edfjuUoTSkD8ppqcdcrYXENYYBeoifosQ7Dg51LYDj97bb6P7HC",
  "key21": "5oGyp7Vzei7b1D4TPnZ6fAkVLomrLsByxejKPoDsheQGtUf8MP5FCYAeNy2UCaL8MhzbQzqLkb5mZHKEEXz6tVN8",
  "key22": "57q3WE85T68duVDjXsNUar84K5Akp22KPjjZ9CucPAYhYbWJuc88HCh2kkHSpuuGKMYxL3UPxCE4FEZNmL9tMYZH",
  "key23": "41cQ55Jz7TdiYJWJZNc3P3suR6pWZZrx8RY6dEFTw8LZmRcpyqfxxh8QmTR4s6bTGzxAhcy7kSaH1JVKk6SgDUNT",
  "key24": "2u88F4r8Rd98f2hQ9RtK1TAtSMMqC6a9uv2wjEJNDGBwkKCjEcXhq4tttLmnWWnGBme1HZ49uNms55DPv6UFcZx",
  "key25": "kMqBBmjNPBs5oQJywYQhQM6VKQ7D3KmoqkUv9khYrkFEmwXHhXDvDb4BWLHE58EQymM5Rc4UYDuDBXC2dZ2eAUN",
  "key26": "SgUQYjDaFEc3RY3pMWis8xq5pZWReDF5XoMbD6kt4VjxNYc1HcX6RJVyoqzQsh7Btu8MkqBxHDsuLmpkQ72LcwH",
  "key27": "28P7hJpxQ1dkkEXJnhjUdtQ1BfF2JAttfumRrVJtDnz8DE1ngCd4ak8Kjuo2ibTT1LvyAiw465VhzNZdU3nh4amn",
  "key28": "4iPFRxWbNVeUiXsFb7zgm2wgLMi9rYNtioq8QQTJGJjTvovGM9PwmF46qMNAivCU2p495qvPqTcQjpxTtK1aoLJE",
  "key29": "3MCVFZ6r2aWnZ4YWJqedZxwqiHZadktab4TxKfZ5dfLPRNsKZ5agSRFGohfu1TJ3oTRgvozU6ntsZLbpkMVGbugH",
  "key30": "mShDgq5dPdN43q2v4tLdHUtdjhH9heCENpbaaFhWM987Xok7C7UMzVWjSyKnH7kWUeGRzW9y4Pghd8sDCEtFxxX",
  "key31": "2bvSweFW4amWEsCCR73e59pHGgVxAjePy5yMVgUdudJR85jDswXUNozFmnDEMjLSi3xpaFuGPdcZvsoHjEGVuEEs",
  "key32": "2mDRaQQSb7tiCgAJBFDNtEVdRWoawdmNykdiEn37eqHsR9LvMzCMHuqPKudZXmkWP5ePEDdJiuJcp7JrvueBmLQw",
  "key33": "ibpPzc42Co3HfdS6ZBcLBWABs6Gc4tQNPCC5iK9hrEBrnzLwLv8PTWe7eXMe9kCDEigMsGFPZsA7riGfuMHoAQs"
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
