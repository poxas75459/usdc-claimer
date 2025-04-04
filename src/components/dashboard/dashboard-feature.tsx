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
    "5wwhpqzUe3AhmGUnzSVdQai6vgf2dhrF336wgMVdnd9c4zhU4vHivkfcriVKYBSRpFfCdNNh97pX4eTMDpDmdevi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Sh8oFVzaYbqdrD7WpatjQSi3oUwgqtDCPDZRN9j5QyS6x74dV2YA1EBBGR4RPtTqonbfDnKYLVUHoCmL3SWqLVh",
  "key1": "59jtu3b8nv6WRZdMqtiRjhV6iSm68mXSkcy86b6JjRtMmB9y9rEfk9jL3U5vRSSZp2kxqyo3ez44gt2etVNCpWz6",
  "key2": "oHAdT2ipUejA6d6JCBDWDhM668aYAKJCvaLmWF9EwgnzvW1ULaPwUbNSWAuAAoS1uu9YPkXuRyTDybXGq3JkEmG",
  "key3": "Zm8YdJX1ks1hCV5CB4qHxvYPDcY2xhFxhqhmsQZJSxZZW42XUa9zE64NZwoMQY1b1CQQT1tHh3GrNGpZJSsJD1H",
  "key4": "2rXw8Mv7TdT1R7HxN4ukrCKvc42ur8k6mSq4doZ7FgVtwqwmEVHgmsNbSaeyoDQNpok2BtzjZZGc8JrPNydVWJ1p",
  "key5": "34QSoZg87J1k5E8jtX2ngi3dRvP9fHaLuGsjLAAojYQSHvPciGGqvjGpjXAZWbqdJmZC5C4Zp4Vp5nMnTn9arfzY",
  "key6": "3NTTrW2wLES92fpamN9hQRYFWKWR4yDv5xg8ueJHSd6MgKmXmDzLXXPw3gTVK9WgyE4J5cpD1TefUpZb8CzQ6kMX",
  "key7": "3UZ7LrSNNUb7bZR46a6Q4vXu8aQrXTNwpsTq1hz2X9jt93bqEr7BqZRugKYiVS76FW9CZNbwJyYngJju3pUZZMnb",
  "key8": "56qmwRd5TSpKySyHVWFX3pCdQ1d7CQ6oXjwCeqceczgWEKDuGZEigGE8orwx7QXvzKM9a4ge7PPuXGsNk44cMh9T",
  "key9": "3cEcGzHmLhoquGJmpsW4QC83rLXGFQWExiupoiwLVDihhUVjbvw1aAWN2wFHEBkFXvsbC1RCac4GAPgibZQ7x3Ab",
  "key10": "2S821bs3MwJo1XpCB7nDdDKj2MeZNQhU1KrAiVpca9c4jVTPkjkzLh7KsVNcW3qVfgkoos17XxpUrUon6sKNHcjb",
  "key11": "5HfDbwct2z5dijMBG3PF3RB3pXz7XznpXMebp4QMXZhd44KavqXAdxLNxn9RGjdGL13ygmfDrHgeGnvc8mscDY51",
  "key12": "3fYtfqnUxC16ZjCnoai2DwrYXKZ9VxDJyDhv4kd6MEgdwiGfMbNmD8dbLzW2ZvCFkoXoZXUfbJHPR74gLSDTaGge",
  "key13": "2J7u255HREKof6S3iLx2Fa7qvFt3MEphnvaEBzR8cBmT5wyaTcyLBjPznCr8q15yFoa9dJCf1RfPzZbpVY3NC1WM",
  "key14": "623CWrMCtkQccdUVAoF4j2fCuh3wCoKVGRr6XGKgvNvQnPhnVusN24LFNKft1YLoi9BAwhjVfiGHYVBAAsMvKBms",
  "key15": "Ba3HXKUYrPhiJEiWb7KHkhYeZz6ZHjcR22PUrsLwbJdjYDS3vSZ4BMJBjGC88itXeooKc6P31pUvgLgirLueZVM",
  "key16": "64iv663ZQ275wMDXgWMJQKZ6Nk1WGj9iYipX8NsHRqLa6XhXyoCva7PKqBgvUSLXALBeXMGWyzAX2bC3XYreDd13",
  "key17": "3nkFmzERK62mqoPc21T6xRZehVrLRnunfV3TDk1JmGj1JowZDpHjJt9AyzK5cuFfiz1MfGKMSbiBeYDeffLwNh24",
  "key18": "5Zz8gm5q21PSrnqm2mvRtFRtjW8eEZv3dHeJtFrXCgeNNJh1UJUeGJhJdnhzBongs5QZLiHZzgRnBNagy5YFwWQE",
  "key19": "24n5YWbt9ehp4gqdWUky7sDGe4NgSy7bdxFBRhbG59SEdR48kKDWbwRg9P3Vc3peobzmLfiJQPfyd32uz2LoDJt1",
  "key20": "3EBd4AShVV7Yh7dMvKS1vu6Fm5QAdcFftyozXuP1yJUmtG5guXHGKazRV5WgG2AjFSwZqMHbiV474na5JjtJchyY",
  "key21": "2zyPA8Srno87TnuG2KPv3kpAsrwRQZGhWy9CVVFJFy8UwSaGAdAgtBD98snmZufgdaSD37y5N2o368GsGXo2LK8Z",
  "key22": "31fgbJpK1G2Mvn3evRjZyPUFRWS5i516w2eCEJcgURZw6qaykeCTNgV9uxnEXXHtxQkKbcdrCRQcprVeJeNEM49W",
  "key23": "5ntL2ffzECz71okXEznPwab4S2dV1q6VVRRKLQ1DV4VpdPjwksusqTh7zevz33hpCKoaPrut3G6TmHddLzemuHRj",
  "key24": "3GLoF7U1ZQD6gF1ZgmJLddbeNN3vJvU2nqTp55HapEgQhiLtMvhg2i7TG25FSQFvf4Eu4BkPVGxoej7er7E69RiU",
  "key25": "26bsbtgQaEUdPnB3D14F2AVnMyXLNyttL2TxJNtM6euN2EVBiHX2SG5vnsgDaCFHpkhep5dgFsJ8DThy6qtgKwcR",
  "key26": "zmVb5uQAp2SM5gm7YLhMqfybtq7RBNZvwT1hkc9jBdbD6XgE3MjnQgDE2mMa8KgJNq6Nw34Ti2UoLDUsNQuWJbn",
  "key27": "xGCfXbv3s1sFGHEdSL7kMxU1xM2onz2gr9gKzUYCrttDu1WEE9q7mQkwcdLiPBjdVaMcdNxB52LqVQ5AFbaRknw",
  "key28": "4BU5Mg61g7DkLtkkWeNm8KA5MM5p75KuAtuBnMwMQvt9p2Knf4x7jWg63ogpFt47apumLR6qSDZxsihbx8eSXTeB",
  "key29": "2zg46Y6nP55426iWH82DkUMvUXvotAp8xJLwwSX54X2RyGG7MYcMq23PE1pDiZheGqeTXbadoBWu7UjtdBwURJQp",
  "key30": "qDbvJaxtSeskJ3qmzJZ2TgAyjQKnFaBB4mQxYKnrcCiaUPKPWinGc5XBE1C1XcQ2PmamC7SCfR4jtrSvnybio54",
  "key31": "66MKYPhNw8t5gt8WVuH6rkzjgqMAg6Y9GxmNgr8P8gn6HX24MSTKbJdYvKLn3pydMFNqKYj1swrVTBcvJbnZuQcy",
  "key32": "fizFQriwT9e9k24vJApJAsYhWMUmfyiUiE24oNU3woqHFmJ7fHRPLSYTTUw4c99pYj12akDnVejWVYtuBEqirwJ",
  "key33": "5fLF4XKdfTRCriuJaeA1d5mRWixT4Nn8dHGjmHwuu9JShCZcEyFSraJX9ckLcZfA4Xs8ERBvW8LSoJhozrSbbBzD",
  "key34": "TjDhEky2pSwXfGFD2h3QxvzJ285FqQHf8hPusjxg3nmWhFCKNca34qXwgxn9G8aD5G3iEoaqLiMgUaJhyQV2Uw7",
  "key35": "4rB7HUZgZzb7zPZkXfyMxKEB7vo5nq93GzTKXgwjiyCPCE4UdxSyen3oSWbwjhZxNVeshhULRGnvv1EWbBwXmeer",
  "key36": "ThCGMBUjn4qximNU51AQasnpKW9jnpwXkBWNJHAYWkWsPU8UoPSFUNtfAWtrjbfQUq7S5VHsT5DsQ1AKAh6TYuQ",
  "key37": "2wUZtRyyABHiCm5B28mNHUFvs4CRJ12Zf2Bgaps6BFYXGXLB7mvdr7LBkHffzXjdnWaMtukaps1cHPTCR28hqpzr",
  "key38": "KZ7cqmuxQCk5D7pJswmQN93gyH5i6DWczHPYn3Qye1PbJKf1NfXPdZXVTw45iLw9fNiKXpXzQBevr1R7w9hSmY8",
  "key39": "fZRxj4GbH2BY31HACgds4htKYRVnsBFcortn8xUfxxZ9mziWtNuBmMhopWDm6JBfhGaT4HyuHdWDpQzQHwBKDcn",
  "key40": "4F3FYzKW8vgtzvPTreitKFDWELE3geo5bzzX9tNmnFfPiNt63wWGfJ177EjpcMNc7vWnuzBEZ8bt7YWZWgQ8cc4d",
  "key41": "33oZujuZaDwuTVXAWvb6iRFW6FY8LisXmNfzpRPPSfYfySaBpx4rGTHjf2egQrJM7CpGifR6mcifXgSWZe35RC6B",
  "key42": "4gAKgLQCCLbJJyEhgwi6zqTD5tqpc7MU3LZz4uwHLZ544FsAnNWoUJHKqdSA1dYFG7287KDJtXtHpwU9tUgSLKgi",
  "key43": "4QzRtsKoyXKKFoj6yDi3yFKL42e2PsUX1jiiqZhEcXPgH5EFKdib3ZhDBfL9RQmFo4Lq8BeExwrFtDt7KkqinoDn",
  "key44": "4V9Ewk6paasMuNq3aswgaFwbSxXc7bk37CMPS6hFnvWsboPbGQx71W9vmCfXbiHNgjZTQwzAfvUEBsBUMERsGnXV",
  "key45": "Lk7gW9KZygys7LELBVAL7B3NtYQUeKkxcBuwEgcuF1UURXkpPqnXGPLHxUEse5XmByDhavVwe8NKs7irQ71tQDh",
  "key46": "3Vo9rtJA4i5EwNbmCbM9ZnPwAV2Xdqf45EvEfV9ErXu99GbMrrJD8cpGtTJarRAmuCQwXd94rGSbYa3TGtkGgcon"
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
