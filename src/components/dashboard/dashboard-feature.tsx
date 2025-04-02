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
    "4YdbAziZtk1aeZCFGWshQ4vfeQQ847af8866LKvCTw3JEgEkSGpBrUdnvsQrHJtfAdF976GVsUqqjuu63LDVLVxb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kDCLzX6JDBB9z24w8vmY2WZDCaiM6XkU3AFnzpqysWE9Av4xAKMDdur4jxeYC6Z6GXkggoobBkv9tauz63GYKiQ",
  "key1": "4VfgEH2hV4UBfT2aDGRswnM4fTgNBu69C9u3ZyqPQj5K4LwCegbJj2FdgDGzZkq7CHkuBrVeJCh45JStzmwMsxgp",
  "key2": "5uvu7aym2bYF2945TwNQChAjKwp3UT5nqxij7SfQNHkMu4Fx7cAxepKdXCmGoU1GicT1GUAfyiE65XbwuwbqR43e",
  "key3": "2cWXXGMq6FyFgkiBjmy26BoLXUpXeWDbWCc25udijTdgsQN1S2f7Rc33UxzpBY8MHgV4pcfvmu2FdBmLQuWBCrpD",
  "key4": "FE9mrvuCKfKXBWyCS9mNvQk2idht2DgZo9m9o1SkrADUC9RpRFcWpSkRGC7PUPWo7ESioSn8Pok83bqzoCQZwUw",
  "key5": "545uTftNTfRhMBMEtfvDutvu9tihwTAp2vxnFUyjFhnofb6zYXA99XHayUmaqLfbhxVqNym7JcrVbfv7RoNyzRkR",
  "key6": "4UTJcPg4gLFCa6HL42CgSe2QMPQq4Bc23dwd2Tp16LzwWgRsvaMaVpTUKNKMrkPPuYjBAV4kfmCgAFnLjDLFcTdj",
  "key7": "5y6HMFmYT8tHqJWBqFVJprjKsD82yhh612HvRkUgUrrNH2mJg2WRb2eZit89B52eZvALTosEe1Md4EL9P4oVgRc5",
  "key8": "HtkiJp9cKmHhPt5uKhn9su3MjHpzmkvSY32NiAshBzJPhjPcM19zPqo6DiiFB253J8D8A7ffmdBqqw8WPL3dGjG",
  "key9": "36cn2tQFC1Qk7sRpAP19HSM8fJnAV6oBQCmaw4QVFY7PUB3HBXQsqhPLN79zMyr3unQUUNYPtmzvXseHSxcc549E",
  "key10": "4GsgqeHqECi6qFNj3J6hKVivb8Tj9UcNcCBxwbGm1Qk7nTbFZuXj8vj7xNqeBQDG3ezvB849ACCjKxefj1WuwEKd",
  "key11": "5qDjRowWkDmc7T9dPtqjnGgWzZTRhHUaRvRohorE2dKUQ45Kv7KSPLFURKxGVEdq5gvQLrdy7rxNngUWqwkkS9fc",
  "key12": "34m5kfZgpkxhYTvyXgoVrEXAv8YNFsZMUM2jdbKDHaCoPkUvHXCpooHMLoZFh994n95mTfYr6ZBasjbVfQY6Vyme",
  "key13": "5dLQ43jRn3fvcWmydDm5VEWVvNGb152wNL8kQeWQVgLL6zdgxVhdpmEiT8zdTyVEUm9mY18VqqR1F5aNf5VVDx6X",
  "key14": "2HzUxuyJjDuMQT4gTZoLFV5c8afnP2FM9JKDpEMxbsFqY5Mjbavqfjxjb3v9JeHsSwMPcoN6fHuAmUYGxTniWJnS",
  "key15": "3ucJcHwCDP2nqTGe7nr82e26MjGPP8cZoEk4i7LnYx5hP1UHgVTSgFSG7EE8aSiXkeGPdoxVYba7xPBSNKgBP5x6",
  "key16": "2Jeh31L7MqNUtZEyW9y682ciVQSa61eGnM3miWqrP9Hu5ofwnBoRnZAXvcKGZDr6XhhNWt2n9J8cHiBJLF5a2UVo",
  "key17": "37Xc87CcEkiKDrqQFtQbV5gVcAKYY3aSMqRkNk8YNnVBLcZD4CSTpwZhSx2tmqejdJNkG8g3B7wpEKqEHCmpUUkd",
  "key18": "4Y7mMtYLxe9sDrR6wMmUHgVSrVpFsLvvYLa4BNzFA5NtqMUUq72hm2D5i4zatwjCrukJQv2gFToKu5VUwgcAHqRP",
  "key19": "3ipEZW9NWDBMj2zxt3TZzXdkR8V3Z8smi9hNqhveNM5YtCNYEuqXeTdhTSjumtwpH6QXCK3Ecbirt1MGoUy67MRV",
  "key20": "4Bym4PwWEbifgSK9N52mnXDVZQFv1hNSKewSTtr9dYi8U2mZJAVAvGjeifqJgk9Ao2EiMn3wH9mwADJdX2ocdHfq",
  "key21": "3hiAWxPwyvjXLu5a3f9etdHgs7bFZivPkJFr4utWgMwS1bhf4aXkjKrzwn8XUjqoHvLZpmyVmz3JGbNGJF89vd1D",
  "key22": "4JLzjchhyrrnoq6bxfRWf6pnbzF2uwdPtuL2GsmapoHdT6W4HeLLuLvZdt2AbgXDcnAwqM9tZnF5nD3RQQfKg5JA",
  "key23": "2mkJd5fcFQcjBPEFDVM4qtuh3UQJxSD6VzysnPgzKFBywknvaqpeje4wE9FUgNiSaQiWYTbUxXobJxWVP8fE2zuR",
  "key24": "3CXP3EqYvkBzNzkEwJm7nCTguNmj1xaHpxbQVxeKRiZNx5z6crxo7oPrrBgniEUBdKg3nAW6e1QJKnegMX6n51q2",
  "key25": "3X8SjQnyCJ8s9jnsNuyKKbJqUEAsEsFjnBvZBXzdocNShd9e2hK3g5NuRSBEypDpUNsURHRiaNiA4eLdBK7MzxDm",
  "key26": "2wArhvkJuK3UfYcHEuH8uwszTbYaUQe9rx9UpyAKxRjc79PRFNJssUCB994QBD3JwMXezY4nKLDz9fLVkaNbeirv",
  "key27": "2QvA8jKcgKbiKnsXDyJuaDLouupSXGug7nPgbwJJ9Gfd1Kx7NMmaJBbU2M3GxE5VJR49kqj5tA9dkQ8qLR2KLowX",
  "key28": "4NU3tgKs2CPVh2GjLAY9uxkSnEAyiNRwFy5BbvBdhY5Fm7BbYErZRkAvjfLsKEYvDWDHw5hsXEEdTQQqaThZFGgh",
  "key29": "4ew7FEexMma5XgMSPmXfPPPSggu8ft92gwhv1M1TVuj3FmqW51EQ7z4wPUEZDHbKbGRMFH6WYszgj86umgZDnNwo",
  "key30": "3jgJxjU7xiVyu4nZoEBCJ4envUVuR1xZw5wFJqDm2iSnGSFrp9ctbZiGKK9HkRPJUJQHBfQgqHp5mu3tW6JwjL25",
  "key31": "22v8PvGWXZUcXVvC5LK1571o7E4558HiBA8N4hDfbFCVS9c1XVtUgzDE7vdeumQHCWfD7qP5PHcLmSdNzx5n2omc",
  "key32": "26F84jnuYBW5tfiXD1wg93qFWJC8RBHWpp7PMthkFb3hhPs2TY6DMgWSNzUT5hrFD9QVrt9mnZ845pkL7tSrDoD4",
  "key33": "4os7Bm4VAoembnqt5pAGVs7hAZModc8k9kryaiH32QtjZYW9CCpqcSgh5YVov72NHWah9HKBL9txQDuzgm5MgvtJ",
  "key34": "weQFmGjq6bFh9rN7yW6LgwNZjT3LP6nnz294ywmDf1jxGJ7hi36ycBBqWsrxEwx5KnzXwJJhEXk7m2DhLVLqKCr",
  "key35": "3NWTYwxJp56fBoDfYpgwCPMhpPL6MVFj22bs2S8BbiMhBWu4edPimEtUpbkubqEdzY8hWjmMekVpuCjhYdGtpAgh",
  "key36": "2LpuVXAMV8Vg2sHaPPhwSGgHYUPv4eaHrDkc1LWEPrtq4wXU8RZyjGHHNzHVUJPKv9HNjEqqN5B1oRZrVe27ufDw",
  "key37": "3ZFHarRZKRqthvqTKF8t51JNagE1RJtviF4w4ijXDQxtWSyVGDXuRabDpjKhkkQaRpMGCoFHPKbKY8oChonBDCQs",
  "key38": "5bBXmMhqjckQ6ZaUjuoWPq4bhi3zfd5PMcjiAZjK3aBvo3xJYDCSoi5DrMuMe2ZyfnXmYApuQYnfHVzKuiNBRY6J",
  "key39": "3xFWxbHxCvs2xCwKYs7z42ZYTzCLXJpY2kjxP3ock3UR7HjeF38KQANmTD5tEEAMj3gJhWgwC6urhfrpVta2JkpF"
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
