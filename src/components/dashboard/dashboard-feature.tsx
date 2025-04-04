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
    "3czLZjurmGFG2NcyAEJMR1HFXy1y322mH4KPJK9cR69MUaFUEG7EKU9vjrMuXMJHvyB7zt8FMGRcUMZ9McD2re7d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JJd5PDw2ezjXg8z5LhqxQ6jvepz9MY5UE2pGpWQHnVoXh7FdRUksmWv6BdqVFYKMQN47QWQQ2V1UvSTpqD3sn5R",
  "key1": "2XUrExjcdQXry3SwgzsvtAJwNZGUy2W8spks2isExEunirhYx8BE8aMYzD2TYAmVTqqnSTkJgVUF4AHdv4axeoMS",
  "key2": "3veT4ZTnQe2wWs7UfuXBCuztHRPcsk367av9Yzu3W1youWYA4TELjioBUdQayqMG2CBtHLHEEB5XGFXG5j2AotT3",
  "key3": "22GgRQRZXUCJY2gnQbwx9kx26MJwJC1YbYhn2PAaVJkW6komsoKmgGepTT49w37G46zuurhPG58mMn28G98V7F61",
  "key4": "1moMkU4JXDqUw6MDv87yGX8SQy4X5EPAgPf6SBz6tj62vt9Wr9pUTVeqN5C8GFA5KjvK5iR8U4x4nigmKWhW6z9",
  "key5": "5hwcwCsqDdPAW7FWah8Li2prNLTHRzzhxqDmDoqrziyrGTmwnhxyLq8AnjQU6oMBrTqQ9cUgy56quTbaQvRtshH3",
  "key6": "3nYtECTZbk1MTu2tCDuCQMfMQWp4Laecv9vCxxSv75akRbMBZUKAN32FkakNcE76SvQivhiF2WpDWHeGB5caPwXz",
  "key7": "2dBJzAYNRiE7kvapwYR4ukPDVMbzyCUKCMCt5LCyAgUX4KDPbrn6bKGuSNLTwLAZ8fqy5HJ1oxBy6jTAbx2YEhuG",
  "key8": "5BA2DYM1gbu1VWWAK5aiTrk5rh1uZ9Xy2SZCR8o2rwm3moPjwxnwMc2vNY8jDSt5EoeHeQhh8UqiNTvdK6rkj9TT",
  "key9": "5fRnBpqRL66wKrnFw394351VMUgXMnXHU7uBfsBpnqSw3jNvoTDMBusrYEZ8r9qTkz8HfWPYZYGUwQeD3wsxXNEQ",
  "key10": "4dczYAMtYFvCEwKMgYnCT7sec5ESqs4QddYZ1w6zaLMA77mWgwBbd2hBxbNZPLz4qrGdW7jed3cpZQXk6HgwTqHF",
  "key11": "5rTwwv9if35rLtNceP6s1gmjb3sDAiv9yxh8KkT9M3uSzGgrpMAp8qmHrhtbBR4pG8zn8otGbpBDkMQnDp8gUyYm",
  "key12": "5PMRqmY5FyMWXSBcmGGL1d4DJ3T3AVKvp479bMHNBAAcDckpRWJKWexGJk5sj4p4mTRSrWRfEk3EUVVAt2zJntcx",
  "key13": "3TjPX6MxZk5nXy9Wt1Kxs4HaT4css99yu1oLrENFvcPYNLFQPUFn2mzNBJetsXeeRDi9bCddE4TnwVHwF1DLavbn",
  "key14": "3hr7RPh994nQQDkRWB4jpEv5ujTo46WxURDEMa4nvkck169g8hiqPYmpU9M3VJh5aFCzugVDUov3sD9MG682AEEE",
  "key15": "527LrKsppibzY4dJMhTQxgC8Gb7ZxvmcZfgwLRJUMpAhKfz766HmTn7xvQ6a2RWkZbA9LAthuvAvxAtRct8BCbJg",
  "key16": "4V1xEMbzs6MUfmfj7AKWKRTkZWXkvavxnGDMgZhJpM2T9Xv8W6eWXSdafxairUtzJnfH46Ff5vZFawUSHiFLVzNv",
  "key17": "49M9CYejzRsFdgATY19pXRYNcBwMdCQZ2HvzStTjQ2m2eLU2GE7U3HDQwDiBBu7FQMtpFw4zRZKQucEFKCB1RURV",
  "key18": "2imZf7zrT3dLbSexF156rvRpiVbFmyJ1vJvhAkHoBgU2ZSfLCmkmpQFsczwT9v9UX9seoVDnBUnEFQL6aDjxf1f4",
  "key19": "4iASu2dcEVBXApXc6r6ky8A7QAPSRW778PkRdhTvSQUtvpziTCaDeC1Hi91RkHMYWwxgBWy61NWkdcYCfZkt9Pxi",
  "key20": "4cnMU6QGFkT6GMNjpYZnPgBzZASJM8EaERvpmDTd8xmqFxGYjkaE7vuV6TiAoDNRiJsbsdW3c8V9ye2v8E4xW6m6",
  "key21": "4p9fAMuTtwfe5zp17Z1D1VpF5P318jsSGoVSkUsfD2CD1nSMz4wFdEQ1V6grXWKsncWZMKAreHiWGBSKAzmQgTfa",
  "key22": "Fz63Lugrb1nynfXwcF3iVymGVNUXFJrU4zVA5zLSwq1xmcJzNQMB9BNEs4u4TnWkUjJozGYxqD8Guj5etk2cdTV",
  "key23": "538Sxgy3LrLDRFQ8qhQiCL3tQMTE3PfEMVEauGJYkLoS1TaMcgGzDetbMeToxXNn7vtUpqDDE4wo77cs4ZRdCvzW",
  "key24": "2AujgpHN1HJXC4MuqVz8BRYMihJ4dZm2LW3qxGgNX2LGsxGeEeAGkUs6GXZ29TDSKKMsLBNyqBEfYRG8cDBG2Fof",
  "key25": "dhJfS8SNsXNYxvxSLuwMvuvvrueahLmsrMp8wnTc5G9iT6CbNPKvckKiJBSwQm9J1EAWW1vMN2Q9ZceCU7vwuPE",
  "key26": "2HWRHeFf7nAuP4AQNFvRSvkpjbXUAo7YBU2xWndUMtdu3ZZy5StBYgZBm5R7wgbAmjhcbfBw9mxjRJvFtvjtxy56",
  "key27": "3d1TfWbdvejPqvFSLo2Dup6h3fV3FAbQ6xhDi8n6B96kR5fjfnnYGATrmfDedV9Y4Ly3N7CAzJjHLLbh6AwwRsiy",
  "key28": "3yegBh8SFpgEWA1xJLJVL2miEY7jJrpLUbALznrfrKCYADVCKBCAQmqB7cM7Ap6UkzG9nRzaSTBrL7aY4Bqobirm",
  "key29": "5Vhd9MNVcgrDgidsCbTPf9CJJPFwYE75YaMfDg9p1RVe1tz8QgpYisxfzakYjctQxAy3ofXAQGAVyZBykeVj1PSE",
  "key30": "41ZEy8kHjG3GAcwwMknGmJuFts2me47YD5oPLhqge4XXr7tvmBaNqhysNKXFEjC93WhdVXfkFZ9ccbTqgVNgcm9C",
  "key31": "4aCq4K2zJiDwHd7LvryaXPNCoj1mxyf8dxvoBDsApaF5XfWJZiAbBq1Jqp72Zx8czoQJGzaXuE7waabRzeeyvKtX",
  "key32": "HiZfHmLFHc4JuVDfJdpXq6ExRWrqk6WdqR4tg4xBM28CDFsEaYbAHxVrN1VhTpuAz2QEmTeWjy3u66pFXNGHiDY",
  "key33": "2w2UnQNqJW8CAzmyBRM4d9sYNU6Zb855kZPwXexGbiN6diqbKtwN9LwL8FoMjG1Ss2mTn9rWUW8Vr6pXivGsMUmz",
  "key34": "2jU6iuE9w7U66iPSQxkYfRVpwS46GZgmSVZkxDL7Pih4NJWhuQmHoUjh5CMTKD5XcRbibaHzu4EZDsfr8HVZtu9P",
  "key35": "5Rhf4dSmgj6PSQvt4C6WQYGu8yWWSmYGXNiszZ7VvZe4Cb3ooZsqjNRF6bYFq4McGXBuUiKoU9bFZZm6Pq79tSJF",
  "key36": "56Ux1T1obN1uqf6wQrMyTFc5QsgLvxYnGKfT6gMiMjhcqGA6v3Y1kCMsUVgd46dFwCBxmtnUrk5tSAWyP8sQnKsg",
  "key37": "4TQSTaSWecHWGYWv3wdKt5sQbzTuxyzRDxaQYbBKfg8V6H3gaLV7L4grLEgQHqDqcrP59nqrFDSy8icjDW5oNY8Q",
  "key38": "26xqy9z4RUTv8YegvzqFH34NaLQqTRxFFK8VDoewYUUXEhpjDoh9ubQduazCB8qddzZdi3Z5CjFszH3BaEwmk85c",
  "key39": "4yXFA76L6U5AHa1SnpWqjHSvpryXLo1Ze9cEa1Q5G3EDeQcSJ9SztHsY5wGMxgJejBPFfdxHdU8akyEDPWn6nymh",
  "key40": "5whcwW8EVewo7PAkF12WaZVA2DLYgBeiF1Hkvuv2rMyk9Z1JnnShqEF5WyddWXKnS7rBnXNNUEqGxW1vxE7fnzjH"
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
