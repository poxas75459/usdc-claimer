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
    "3NKvPmywmJzxamc3ZVDnLCk67VYE1G1xrWr9goY3LKQM5GkMNdGDU7kHTyPEgR38PM5jnsGi1YXB5rEvYLYj9kvo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27RkkuKQoRUCDy7qRAzaT8vXMvdWWCBkuXARrpeHQFsL2aFcXNPFx49J5HHMDKWiWQKuZgoisxJq9HKgajn3GnEr",
  "key1": "6kYTcBX5haNVXtqQJcE1qQkMuRb3kwRTnEzL81ii8Rb5sGi3EHHA3QwNnNTxt2NSjmW2PuF7GCbPnpYiJukkBRk",
  "key2": "3gqLNAXVpVJa5NXYAxDzPWSEbMSvAaaU1Q1U77y2LJ1s7xP3iDTsRyqXYuy2KKQ7DQZauxo7fUG7SvJvtwsDKWtj",
  "key3": "3bSMz14PyEuxw1xRzBpJbd9bttewW9b3hVxJVd3herdP57QDjqtTKZkmztQrcSVk8H3eHz5n6WTxwDTfrgHkEwxY",
  "key4": "5vCsgRcWjjCV5a4niiGVETDjEChvaDQfzPVqA2n7da3UHFDnxQ41tq9zoXnAdDwxkmQUDsyJvhvbiZhJZK7EuqtB",
  "key5": "kpUu6bAFmzFaxAHt88S5PN9YCpy7ubqWdzAZ2zCBWsLaAwtsrMYszyVchA8f7puTsxLw1hRQh1fbcD79WB44mea",
  "key6": "3Dz2WFJSsDgHGpDWDrEuc6qMyuGLMfTvMeFffhhVddfp2ByRbDtdj2FqLf4vZJHxFnNxGm1dNX5KVytv3Yuv8ui3",
  "key7": "4ggcLW8fsDQKbvzyfQyjAoKGJanDc2kqsguxrmbwNUF1FBAH6Dpfcq8hBD6DEwavJurzMazEn5paZ8gefEZqQ2NY",
  "key8": "2szqLCNnBG6ADh2YshgMiqUSweqMuzh93CWPUEF2crqvhJQ4oMzSk8EqXNDtbN8bjaBG3gNeJm6wvXR5rXCjXdUq",
  "key9": "3Gu7ZP5gd2AeXLq45dza5TDNocEjhtid3ReLa54pK1hWErDsFTfUu7xmY422VmnFxiqZdRadA5wZGYs6yTpky43H",
  "key10": "2Ss2LMJdoMXGAMMKchZUY8XMv6NqXYpET62PK5cQVKNNFKhBiyqzvtSNTVW1JEKukmhPWEM9kYFVVQe2cydA6GJH",
  "key11": "kiRog3gZkh54SDC39EmmYK98XQfn3QsVL7PLHPAWHShQVmHJXupov96vvyoCjWUg9gLjZyyG3725nHybu6CQqCM",
  "key12": "3DZBwJJDUQ1q76dQJic7RxT3YXt7tF4PBrkLjEJsrYnmXQgo2XvS8TWwZ72TPScnZmfaY5dXD6kTaC7PcEC6HWom",
  "key13": "5Pj6c318nPksdp56EsxG3GAyEaddamsw8hgV2BCnhnraQw4PHYv7xzogeMVGLsTyMVwyWWkj5XLyUgV8V83JTkAh",
  "key14": "WqqCXb5K1CJDTwYKuYi8AskowBCS8HAPbKBVxe3Gkzxx9zE4nJ3VPDu14m5YCRuDhsZxTc9nRQdHogEtpRKSuKC",
  "key15": "4VMxWfmZ1zR4Dw8Y5437NjgGVp7Mr3cTx7WR2C6ihexQ5cZcqqZ2uQBHLG3P5gVrvJbU37U35waNXeqhbxvbMdfk",
  "key16": "2SFCuzrpbecgcGrsWYDrZGLCoPG3DMBX6fzznn7oD2yGGfwpLTXcWBqA7WqCDYLDk42jYYQ7SSGax23J51jgrWdM",
  "key17": "2F4r7WnKgdtzotyQrS3mgXEnmuPksEDxY8XqR3w6smrSYwrq6KsyuJjdS7h17EpiiaiRfEQ5xQNDDcnNatPjYtRU",
  "key18": "35UwtbXXB7WBehhC6bpckRDpfAYMdKP2z8akU7NrSkf9ybVHjBzKGaumrwL3EhUEtBNNEeAQQ7y7efCKhyXDZzsq",
  "key19": "coy9sE6NiDLHVJ4GEAWkRLtHEgaRgD78bin5xa5abfM5BFqZMmv2cKhuBV1z34bQNJ5astyFLPPCunD8mSQv5Vy",
  "key20": "4sSuF6Ry347Np6PAn41duFykWvLvLbEGynTNyuDz6Sf72zNe3ty9T6ZMU5RQ8rVdnKW7dk7RN3LAFe3NEufxPvVY",
  "key21": "5m9jqPjVZUmwugNsH4btrq72332T7Qa16nKbd9dvJeeQNTkdDE7PEGHm5xz4zpmBjHy27hPCg8o8YJxpxNyXR3bu",
  "key22": "5hxx1t9fa3VFRFdcnxt1jpbSERxY9UfYj69b7mrkzCQ3NbQgJqXKo5xxC934EBZmCtBKGJriQBUsXzEKmasE48vn",
  "key23": "tvw75e7v1Q839AJvxJwRVUKhK7PNheat2RpmfQmvLu9eSiAdzp2qu7KKao5JwuRZFYHyYvVZXvcBdPGVvf9cwE9",
  "key24": "2XFVN6qYpfuGs7wVQKQoBAqsbTwJrLExwnsPFqfzm7VeqRMJH2ZgHwqkxLKfWk2JES6i2YzbZXY51X2oVPRhwvA5",
  "key25": "3PK3j8MyDGntpTSDy5mzTadSwu24Lm8QWLeLbtDGPDfEJtadc1wmgvZEYSHB76ruJa4g2hCcW26wgP7rBRbEgDbP",
  "key26": "64aZMstBc3SjQvEb2YQFcVRjEgP1R2TuGuX5HTbH35zWdW9Lb5cPv3qHbWrs7mZpbsDQL81oAZAhAV2JyRr6hxiD",
  "key27": "64GMAFm5duCWNWrKk3HgCBxeFqmR41SnwqEP4poUMcKWFae4SgDZhjW6r5pSU26TQfbEbLc25EcJqUD5FeFyqd9A",
  "key28": "5SjA19STm9iK6Xj1ZrPZyQmyYu7krun5V7SwT88v42wKbRDMYkWniBNSRQax23tkNBaonHMoMByEryokidFjTxSJ",
  "key29": "55Ti2o8YFuV5ebfRHoyRfNE47DGrU4V8rbiCCUbqYBT5Tv7uqd5S4iJ2isxJjmHYuwabYPzVs1DJZXPct6FTHLM4",
  "key30": "28MbxJsDZCFsGfbTXJhRJyCbwkFxSadHAoGq6NBGniUH6V4A1qVNnMSh57mRY2YX4Di8C9d9qwNWZuNAkVyYxkih",
  "key31": "65MiecP7sjJx3d9h95XoPze3dUF9DXfBoTxTKWPpkNBzKxNKzEBSCzpqvp4WtWHM5ZrGnMrVNdftczbKZaaPjYgJ",
  "key32": "3dZH4KpRQAcbVD7PHP4Xy2Ehby6h2rBz1PDKeJcJR8RvkhZ1gEwwSoK9mBH8TqjKHS1z22tpLRBnEU7FUW7z3AzW",
  "key33": "fAqf4toqC3KXL2LVSxbqk6STAAhK79e479KFqrHfb4YU5RQeweWxVgEV6iNwSoarce6Y7YW6ZzQAfwnsrvr9khC",
  "key34": "9ScdiVBme6Pw98E1yQdpzjk1Guwpf21jyAncmhtK7dc4JeanCCi5ZNQJacXh9DYsxAyLp2KMgzUWDsNM1fsnYu7",
  "key35": "2VusYkMn3LEJHh8KW3yBRvDZErdkjMneJbkQqwZpTPvCYA1V14e5HWzktDvo2Ahvj2k79Aq5NDybzpyj5XHb3DsH",
  "key36": "5xzRQsoKTApAQbGePbQb1yJYHqJ8DFqTBT8HpPtkP6UH6mY4a3NN1B6tDjdzDedDB4j2kvfCRULFgNyg3YqFtuWY",
  "key37": "5kY8nhPgRbWm8FqysA2Q31LEMfKzRgKReJGfZFqEBqsuohCEQ1DTNdsGQMaLD41aZXktcJt7NDbB7wVHbMas3Lvb",
  "key38": "3K92DHe5VSExrgHpXVCfbFLJxTXy6gH2YfKK7qvvq5pRxWBuv48X7BAapqdocniUDq2LNS4tV1WZ3KLvwd6z1LjY",
  "key39": "5aHWSGTBB4kmcc746ccXJx3e5HStLSPEubUe4h4eHkAvL3a7NRK8UaKtAWGV98BeSb17UjjaxbFtxKWF3imDBH6R"
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
