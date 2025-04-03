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
    "42XKJh5kKQnpeAUajBeWaZ79kBvPw4tA6ZoLbErMtBqv6cgobb6Q2YAiPwoicbBuUFMRJ7tHYYJPDrhRqRV7ESXh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BUmAtmi79qhvqVveBkLFn6g41ugq5CrauNiY1cwWFciwwVpt3fvNWDYn1kfzdmNZHrtDAXHbWTB88LZEBC9PvVb",
  "key1": "4yKWDuYpdvPJBjc7fSzeB2Xepx196dGveetncT9RTbjfWPB9sJEGqEsq11zaKD5LxJWkqcHrDykATwf6aDE1TZFj",
  "key2": "2sBYnwPZG5hLAm1EenHT4WZ2mjqiwWsJzkUFVER1xeWuy2BWiMYcz1f7aVbcoEDqTygxqmcUCgHTWcWeyFz3ozxP",
  "key3": "3g4rn6gZVg9D3ZuhSFC9GFCzXxvYtWMXMAMaan4PkfdpSdG14zc4FFpFk1kbAHnc61Y58kLzLDJ4FaPehPCdauA",
  "key4": "5ZaTGiwj2nJ5zMLE6kfTbJeS2sM3wLnSoTGSH1wHAvXuFir9dDUiuhoa77XpT6iLjDyyxArMtZS1okm7C3M5xBwr",
  "key5": "35XwocmRNre5pErp9apjnJyrFDvBAR3PxSgKuKcJTd9NMHZAkZi7Ct2ddV5YXhnPrYj5gKmgqpYxJt2frYjnT8fr",
  "key6": "4oH7nYhCv12ErmDNJkfASSmw6TCMVcadSjahCaFUTrGV6pAH9oMBzS5rQV4KdQ2XuXzcrzuc3WzCh6trvxWndxkS",
  "key7": "NgkNSvk2VegvLdmXvLWrzjAJq9BDqpYhpwuxDGixwr35zS3bWceDQzM5CxjSUGsKBvxuGJXJ18sTFkaEm1QW6Tt",
  "key8": "3UxCAaWyyMEi4gCg7CWC3uH9uxG91YjKKwFzKuTFwfXS9HggVgHXjTDYMYtjZBeTvT4vtE7xYR5jGWEQRCqWn3fF",
  "key9": "4gifN8mRqSUcrP4pb5ceiWww96WMeWGD6gfWjNpNKbC5g241KRRvAgpgWjkX7anjbvYERj6dAH69mopGYvshPW8b",
  "key10": "422AtzEEW4TVBFTQeiviS292gYhP5yEiLPThiWEtDSMtABmBHFdMFSzWYAQLve1R7hD1Bh7xeKLN6jbbHt94vKmy",
  "key11": "khyFcRB62iogv9BeJSN2iozGiQ37Pp5Xth3ritaQgsMCqKZmcumjA41DePX8KorZLnHWpjNgspqcEbdePbYcA33",
  "key12": "4iBRoNRcbZmt4X8M6xJKz59WZnmrEMa3P4HxrLd7tJGx5RrrvZM448au6BJCvQTiefGE2Z4X4byg7ZYid29mmVaV",
  "key13": "31papec9wZDMWqqoAfiFFBAv15AN6ZzZGbJzvsw5ZPtwu5gn75Pe5ZUY1rYqUbWUramUJYwbDrPDPwbZwjA65rqt",
  "key14": "2MXEWn7qkUygdL1hVXDYvuHhKUizbk7bLkWY7bxFZpKLEUvvhcPath5AGC8bj47pHJE1UZHpbWJ9bcfiPGGSyA8P",
  "key15": "hpXR6wdvJQ4LwaiZPCJJPX9pBs8z8mzGHTXL4677MfnRYVFJAToVnxt9dvSKqPqm5drb9w8N9VpSj8WLP2cc9oK",
  "key16": "389c7LBAFQf6u77mvmh4mVXZYavDn61Eya3XHSWUP78bcNEo8mhQFwVWu6G8p4nduSWbtaGEvHwqiuUQGkjZSPXH",
  "key17": "5kaC92vzPPwwmjYv8kac6KzAQdxNc7Qg3jm9Yzz6VpvoAtg6X4B3sgUHgpR4tZjrQxMsA1FTSpyxEcVwD5bYAZkw",
  "key18": "4FX9c7xBc57ry9UpVGuHHJ26BiN9SEruGUxkZ3okovV7KN21vcAH9KzDL1VwYPFjmm26pvNeDjnfYqqBjrQUuXn6",
  "key19": "2nUBphLzh72NphzHXufqK3VP1KPUXUxvf1rJAjSg5FV7wrHWpEfiYogkJ5Si34toHoqASuL5yURJixkYFrhPuMEV",
  "key20": "2QJeuQAdBbe9rYjdxC7UgdqjVDtz3y5fY6RuQc6xduXEXZiuHY2t13GPqJMmaaYQnMsamzwQ2Xb8ninMP2y8VQfs",
  "key21": "UQWKZd9ZxTujPakBncKudfsrySiZxQhYZcvWXYAYX1LNQ4dsGPFZKgjAgqLGU3i7QkXKZTjoSkLGjMbvZX5UQyP",
  "key22": "YWZKkhqqwQwCGxa6sz8CDbL5CNsLBVHMu34iMAHT8v9TbPnLZKuT2KfyMWFaHnzrdFr2e9JnUuxnJGWEehsZrTX",
  "key23": "3XR6JtEkaveyPXYiEBP3pMzpiu7FJVDHrcuaR7TpnUm2XF71TAdAKn34qgtBrvR4GKsZe6wE3BtjMtTpdm2J9its",
  "key24": "2vKpiNHiMqkf21Cu7pXTWGseciUs5ZFcU4MChN27CtCj2vtS57ovAxBD75FDVULq2se5WFbhpESYvB7MmUmufcZT",
  "key25": "3TGzFNtH2bFnPnnM7bbNFZcTZj9hEPoLj6LDyZK7sKFbez2724mhBiSz2oVxacHtvqwYV5GA5JLgcZFp8wxD2xnV",
  "key26": "4dLGYMpHoeSVmvNou6mn3YB3YURp5PHi3aFNZR49ambhQ9hccfeo7mnWUfaYvwnxfm5NmcePXaoSGua52bQRcK27",
  "key27": "Teg6Qf7xKLzL1rVajT9D6qZi2ju3hHYZzDoLuM2QtPxQySLyZcXHZyfxXrmTJZ5ZAA4GHSK92maMfCSPnAGP28b",
  "key28": "5sjW1qGuBBYi6H2t7byM6TqSCjzmYANzGw6Gca1Pdr2pfh8G9qL8XXVRXHeiHnfgbGBSUPJeM8iSKsACThckLadj",
  "key29": "MhQpLkJkQpw4B3sWXxURskNvXTfwNUiQ5BXas3TpvQ11UQT36RT8KcmPkNL2JkewTBEYuekzwwy8PdQ69hZnxCB",
  "key30": "28D38rdWtqe7jvfvxHnP18U691eSJoeAWCsxN1M9YprVy5iMuYB1xUde4FQgCTJd1hFK5rrEgW2jhFgbyrQZqm6f",
  "key31": "3bTuD2CwBv3xpb8i6qzgtRJogD6TU2PfFmU4XphbqiLTvhNdU5RRKNcKTtTMJMMtet6q9iaArCcTrTLnwLWYiPgX",
  "key32": "mYYUR7VkHqYPYyJtfGMiVdYP8MUj4pGJTf9iHQ5aXYS2aVjQvzmD1oRBV7VRB17vi7ZrSX9fQm1rMnpd7sLQrAQ",
  "key33": "2x4x1JGkpXRJaXdBhsyBs1rw782EupZ44w2ZgKKQ2Gwpa652eH6ZuBzhH4bdF4fw6zwiY8a9583ruqLafo6SQy6r",
  "key34": "3HuzDwr1YwQYLJxkDkUPwfXzPUSVcBEjjd4FtCfC3snPSWC5NKPCpexnGwyBzF76Nuu7aQoDSNehA8VgzxPw61kL",
  "key35": "3DPcVgXaHY5ou7fA6vw6xg6Ei9n5M1jVHkaA7dv1YNAwS8uUKNcr6TaBrEudzcxPyruhqaekKuLtXW8YXVjxg9Zm"
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
