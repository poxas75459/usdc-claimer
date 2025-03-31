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
    "5prH26RimazmF2gCnYjukx7vG9bhdXEAoCeV3PorVdFUZ1PFzHZKkLzrk2zEedVgHMjoSqddTRAtxwhyAzSViCjC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cSWgqbfZGM1sgjsTQ7JMhcM9fkphMXJAAq4QvokF71GafWRFHzXZEr8SQkPeQegGK2ztxDsqRYgwwsqTXkrKmib",
  "key1": "4DzepsHDQUN1RKcPxPuNhRPn2kbxt4kuNyuR31iQv45sT4E28McDssEmgT1MmCbw4WHL8kZ4mRXCd1eF4j9JNnwo",
  "key2": "HqFHMbdfDSaAzLaY364d7PyCoU55Q67NyomiMfRno3Sz1kYHvkcghLURo8819mC6wug6cMj35mvzc9JqcE2PUQJ",
  "key3": "d2D5tGBJuv7quKmaYRQ8dC8RRKdUKjChppiY2kLjHjUDQHQNo8pLNKKwNTAeG8iG3YKHgeF4sHSArnX6WxfAZDf",
  "key4": "4Z1YKjCvG649tU7WS5YWf7yQrXHwWo6RAKPYTAy55qVgFHhNQGWh1aZ4T6nma8EBReq7Pucydohx6rv9xYvqhxnb",
  "key5": "3BjAUqx7jPCT2YfhL3kS3sxzzo91QUhQZ2JT9tHKJBSknR7MNAjeC97Uae9bpmZRvwmQaMQKSjB44tkkjj4thgyY",
  "key6": "3HLU3gFVwiA5nbzJJiRduC5uwupgi78g16iegP7AwpAUrycXE4Fx7NGNi72qR2UeF2oW61XsCufcNBJSLsz9cQPm",
  "key7": "2nkEQhTbRaxyhSoCvh47h6Nbno2o3a15MCRjPgTvQpubRLKRWRRRvWxHfHVmH82sR7icGz3dBcWeNuQ1UtJoEySK",
  "key8": "AM715xWBmzbS8RgbKRXc6yQzJ1fvRfYoYkgy4Aw5gtB3nQ5k2eF9znUY382cvr9t85Afuy6afXD2gWT6a7rXAvu",
  "key9": "5UucMURgnQbBRzX7HqRuxAqCi2HG6Fz5BVM3fVwL1JkwHTM5fywSkbaW3GB6nqPuvAZ8FhU3qbz2FYpLWWdfY8jb",
  "key10": "4UmY5BSbRoPPwZBsZD1zMEZspoa6KouWgHrAYkAkg7eimohNWqfbFE9FcJkfCYcFjGEj91FmKdBShVSWHLWmVz89",
  "key11": "4m1T9CMpND8p9cecMLkpsJmRVpU2w15SEtTYCtYcpxDDft45BaRpxee6WH1vxjRdgcNshSoJcK1czLqTdcDHmJgF",
  "key12": "zYXnpbkZVoaePe3t7KLLdbRYXj7fdQwtz7Qx1smW8hZZjG2pHqxj1XdEvgV5etDKMJerNzSEXu1PjKFKSSKQ3Am",
  "key13": "2KWBXLhBvTZQmiiu6Sgy1pryJb3AE2mAD8E8XWHGhgnYBvS1dpEng1kLnf7Qxkjrd3AKRcUH1SPbMUepuRbKoEqV",
  "key14": "2roaPkFM7PAwrBG68SB9mMBWuRbDWfEVPBBb3yvR3j5y3xoNufrXAfNZDZLNznGmyGVD74uXJyzvt89D3Td55Xut",
  "key15": "5ZYhkvAoacuJkq5S5u5v1dabi9eaYztwymL7qr5mVcrYbwHb8eKeecUZPqwuC9ihADGxiViCMdHcX3h7P8Xxjx6C",
  "key16": "3Jep8X2WtuZXrdwruHeAAGuTPs1t1ZnxvRVH7JPwGB4mgXKX17RQWSmZUeTHsWt2CT55R4vyFZ898AqkE1PaavCR",
  "key17": "5JgVfaGVrhj9hVZskGgJovDhHwKArJEb7WvM9WWUFe62CdKs4SSWkwNNMkXxYpk3w8Qv3vRnnXtBmhpfhBUuiED1",
  "key18": "5RGaqU86Dhi694KJW3mXxHNJbxJ43EH2udRkGByNZsiBQVerMixauD8bx4hJmNBcNgokViMq8oH9LyFwzJktJGXC",
  "key19": "5PsxVV1XBPw9Rk4Ger6PUyfoWhbso3bmZv86FHCb68bwnZt5gjHqir5noaFn925JnrPziWtURRzhyLVYSYRDePo4",
  "key20": "2R7EyBbsMx3vPWHafMqqtb2FBiNBpgsukvL84o1d5QPLADr4bZ51wqiD6sb9LzemwaQWw8kHrnPK57gj7XMhjVUn",
  "key21": "3XXAXDu1yKMLVQadovgpkpLXso1bo8FZrE2jmb3vJ6BZhbtFULcbTjK2YdCX3UbLrFFZvfBsGWgSmePE3SUDm55h",
  "key22": "5Cdw2Kw89kcT79o2mh29iK7UVVwvNsqs785VALXZTzpczuLAfkuSgbunmqJRxKfpgk6HxmqmAgfQDPMWo6KdXkW8",
  "key23": "3CzKGxjxA73xGLzHCJSFwMGNjjaeVqYiQUfpFqwiayoJRrWTXKuDbnjxgTZaaF5oZETZ7YPdf4qz5cu9Bp8d22YY",
  "key24": "2N91weiSm9TnxksXm9e7P1jvWzwTx9jTuusX5FkxXyGxJZhJo9KSMe7zi7fYgMz3KwnEJpcD4PrEKrYzmPDonRfV",
  "key25": "9BGUXBwGQUDbgDQNjuAQTyb6JhP6SrXdAxcK99az1CG2YUDQJcq2fUk8oG6p2bWMhTuh7i9aZfCrws1ExMUcrZt",
  "key26": "5vhvqgPuBm5bAivG63P3pVBrZLiu9MaUq1xC34faCaX3GWk1LcyYBJDNS8b5wW77BQq4964ccna4mpqEaX7pnMbG",
  "key27": "5RYEgkhoB6n6EuxUTVDjU6o3iyrEx8NegHuzQs61LcnPc1LvEjGHrmhSi1jqCYjxd6dUMhJScJtXqt7eM6F8sywy",
  "key28": "4GuckVmBhZpeWpyiGfSpwwnpMTuSmnN6g3oW3cWjFHhPTufaAko1Zf88Fmh1dBfYj8DRVo9DXuL7A4HyJ7kLCSnh"
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
