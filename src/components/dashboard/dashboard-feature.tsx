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
    "4LiQ8gS5LVKB9xMotkJ8tawh5gJvXZu18gfarubZGue2hTGooZ1M4JsUwSihgNP6HUBUBYyBaSzcJMbTtctFaBDX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mTpjmvDNjWb29LFUQgvCLFLZA9mw139TM7HNguj2T7nBocg5JLCzhAVFPjkbAMfaM4NNhQPdsueWqFUDpqigEYo",
  "key1": "YwEhkSMGSEYu9YR8TyYL8RefvTxg1KEGxDcFtBmtVAdB7xSoZQHUnKUay19VUKQDUe5F7XTmRJLhdxS1vbcJivk",
  "key2": "2sMUW29LfjANTVoXq6TtfY57aCYNrtq1j9Dx38TPEBLahXqABTqfaNyoLxoqtDLtaA5FC8fwjjZXuSWrqNCsF3bY",
  "key3": "2vrVYCwJT7bjZpBMEw6fMMRV8inWFLbSgp9fBQVDYYT6dXr6REPk149MCwdb3Hs3S2DYr7rBuZhEN3zbJP6NL8oq",
  "key4": "5EXo83sjAqk9U9KCFM5q7LvhBPAUxpSsJQYmJVNT6XJGAKSLHuSNgUxrAUjbuzeQ8H4VfccSn1FQQCk4cf2n8GWp",
  "key5": "zjckEtn5RS3X11AC7T38QQs749wmR9Y4zccbd7xLt6TqiHdaSoDC7FCcftKnYWa6Xxfpox8cFfy9U8oopJ7CjRv",
  "key6": "wSKW8X2kNY55ESCu7XxT6P3Pifzii5r7VkMV5FPLeJK7tzkkZoxxaj5Cp2xhC9xctYrXJSkugY33N39MEEEWNPH",
  "key7": "37514y4PdimA1uFD6bxxKjTTeA1jmsAswfUKPVpp8uxZ9HTApgjynwRjXdJG2cgsUkXvfbHL3uMvpk5rMy6yN8ke",
  "key8": "4zwsQ6DdtwDa8oiWD6rJSxX61egr9AMFmE6uYkpRWNHgTwpmKtsyUge4EaNkXwjcZ9CmSg4fUNVVsvmqfyCHzZDQ",
  "key9": "4gGZjkUeq3epoWASdUeTcDFc4LhjVnATnrYtxLZMUj6Ug1i4epXyTrQQP7UhJpCMCjmwjNB37kWNv1GFd927QXge",
  "key10": "2dbJVueii2tnbkuJCz7uALq1WnAkQBwdKQz2gULrbPUcmCDNtz9DhCwxzibYRaFJ693L9FaojqAnM9gQJpvXFDv9",
  "key11": "G4vdWWy3d7vdroWfkDcaqcv3LXRpcEmhUXTNkHp3bQe4tNaRtK6zU6bQ88g7a5uCdF7gbBdPJV2jvvxW1SmWy9o",
  "key12": "257t26JeEyFK7qGVsBhQ7oJRttLYDByQjRVQCdt1kDBFsCyft7ACkAqJc4zh1RoYQ2xsSbTPCKeWNi3a6nQtiv1w",
  "key13": "jUXJhD31hA4cmsmR5T7MGdPM2Epg3JbEvEyJreGera1hexH1DkyWVmKBXwrNMqGLKhNeQwMVrjG5SK1Tg6HuNVL",
  "key14": "2BdiFAoxhyRnsXWVBu1mUarK3VpohUukUeXVKpg9LCHucCAuNXhDrYWbyNPwq2oAa7WKDfw8AMg4QwFDFQr5fH3w",
  "key15": "3dPRGXMgU66SmJtny8UVDayyuDW5rSo5rdSfS67gwarsy45ujokMiVpNrUxPZ6d9Xyu9ZiGDCPBfnjYvo8cmh7LE",
  "key16": "2M4VP7hi9yyhnpaGDs5KgifBkQiXpvSj56nit9inAhyomvvPTXXLWVhQtBsTXqVZqHqRZz987zPxLKk5j6GP62tn",
  "key17": "uybHDfYpwbyibJv7EQu2Gf2Qn5wgeWv9t99pKNTPQAkGj1wr9yr6hQ3u1nxbAi3zrjUFFXDp9QQa3KpiH4yCEVW",
  "key18": "59k42cyAaYvBP152XK72zbiuYdsd9UYGhcj6ytACujXMiwT39soQ8zpEGJViNaoafeySSWRtmVuerRdcF7MXrpgM",
  "key19": "3PeDBLX7Z8aGLQZdJbKAQVGMcXcCQDNpGW6ZSTfUwgTaewCy4SkQjm8twvEPtHor6VMDc8Rtbkixa3ZhidP7UChr",
  "key20": "2tPUp1HvwwoJFAnyVbAW55mqJ2xSFqzja7wEcQ5KGD6r9NdsmVLrPV3yYmxxBcBRwx4ucUw1NfBTh4QvQLgj3zEv",
  "key21": "NRsxjpZrvua9v2Lk8h3Azz4mbsoRjHDmDMTwAkQHGsA9eqXC7jC1MSCLxqScwDdwkYXGTZLRhLG3LzuoJXKFHaB",
  "key22": "d1Zc8FQykQssn5vNmB3RRZwCWXex2BpcnmFmYQKJZjJQjrBKkpgMKGg37meVc2ieC4GxxHQbZZX1jqtsQzmjsZb",
  "key23": "XkQq77U22pu7qfjbPjCcMmTvCT6ZtrA3R9ENPDnHpFz7CzdgfVNsvaHjRood4HVV6xY765Vp4qCyhvDHCJUHSwj",
  "key24": "5wpYZrqSMJrH3h4Y2ww3twVEUF2bwZc3fCzYEyBX81KG9MGopyJTZRbyBiAkxsdiCbJNYmJS8J9gXd1auyB6wuPd",
  "key25": "3B4nxEikbkC83j1jzQcdM7CHNjDNkWNYr6qa7RPB3m24fmBMbnHPxUYYssUi4MvhHSs4f4mgf4kZ4re6AH72KQDo",
  "key26": "4zbp8jptjx9NuZS6PrVkDCvG2YUnh1q8YW2ywZaN2TCfArvb5ab4zk8KsrZAiaRyKByJ82EtuvaGYsKRt5Pc7dRa",
  "key27": "5YdLwhyxj6HXDYTPZgUJRXtZNN5vSiPV8WfW4t5ABhSFTxGc5mwDip9YjYotzLCDMEgGUPNSvith3tDn6pujpoRu",
  "key28": "26FtVXEjT2mit1iR8a7TDZtPaxqZTfhrgxHmdNvejYGgyCCGTAhwbvGcG8tKy7thE6eJZ9aiB5yYTp1CDAx61sTy",
  "key29": "5YLF39yTyH6anFxhJW6sRpLzduxW2yPv6i6zwKJpV2pUxGLkBmoEx9hsryJVhcPvkPzuFCDGDESqVmFoRQVXM2fw",
  "key30": "4pZBzUjfMJWSUy39jpLXe2UBZ6QTW3z9VuZYVRiMeDQNuiecVGkWUWc69pm6K4rrBrfkjKNhjrWmLBpaG7FSzJ4n",
  "key31": "2pNqAy8K5cj2jorE6qCnY69nv3GCVGpfdCRi9GvR4YBcbbJgCbF8Qz2yxVE2AJpo4HGTPDwuKJUM82tp8BnE27Ve",
  "key32": "4FP15p4q2CuEfVEkAmnJBZLK37ecgGVJjBJnM3j2W3vyAgBw8dTKVdNUk3uRXqMYNL7LnTynt1GZEAev8vWETH4o",
  "key33": "3r5fCRTyNKroijdLzqCYRtXjtAF9tUXDFBd8xdsQVKyK5a6krRGVr4ie3qEhyCL4ybv5Y4ruNqeXZQeQHbJc7anc",
  "key34": "4Gf3xmtDZWJukPKTY5JGDNGbNv3vFo3ghzcHCeGXXiSe5CByDp19K2RBL7ekPVFf5D9tMgwDT54vTbyBcQ24ubwn",
  "key35": "4Fayk28mke9NYpj4LYrYV2QsBKAuxNgAwh8UUCgstiraWy8rnHkXpX9zD6TUN5vyx8mHEY2rgRMzuJrP7F2o14z7",
  "key36": "2niDNoid4YW2WTsAzfmFLQ99ALHSrWbnNgWGnWbRmZwkUmps6PokoYv4mCyvSRM9qrBgVRj8wNgDZg4n63EFTf77"
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
