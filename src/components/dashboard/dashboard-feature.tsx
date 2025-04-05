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
    "4hQHYEhodj6TkiEmrWatJB2bjrScfUYESJoZkdnzuDRR1DzTLLfAbm3PTHqFi8cRk1WbD9EjDwXtj92ohXcxDquZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JXfXjYFdctp8hDc5FbsXzNB1wKLF2Wyfm1HSZc4tgz39SdD83ryCs98DhHcvd9oGPET3uV35ZPfhgU4vX5uzek1",
  "key1": "2jrycCDM9EAYYAzbfQM6Sopwx2MrV9pKArVnfuewRcf4KdYymNs1EGGrqbC2dezFW8xuNHv6GzqMzzKAovEkmdXE",
  "key2": "4i72Rf9ipbpFmLKQMjhigNgLjqiZt14X21wXetZMjiWAsjqLeLhqZXm8vRm1b1drnjfqrygvWjnydjDz8Wujhj32",
  "key3": "5R5NwkAt7pwars9bajmDHA47djNKdkdvaeEChapdqFCo9Fjw8EWv6sdwZr8ReSbEgvdpxYTj4t5a3X24JGHh1Kry",
  "key4": "3koetSTHK6LLWTeRuAEg3SHCdNvfy7fccibWDH6WhoBCD3hJjsD6dhAaHEthFuevkbY56Q8EBd854XM9uR2n8s6v",
  "key5": "4KaWXjrWs4HFRk7S7afNXVaEDAfqvJbqrkCu8MBqyTyXT7uzp589P8wpbb8AMYkZeHvAJZRVgZcrp2zUH884uwLs",
  "key6": "4rSxzs2qTcHm6vrce8NCmB9RLyVN4EJ7mTevSnQ6ZPaqjTTnatfR8A6fRwRM7tsFY43sbZTV87Je3rgak39Djoxn",
  "key7": "67hANCciYDkMqKHna5cKhhRmJGeMFay421u3jbfF8FZMe1sJU2vtzMh9txFuuuqr28dqVm9wkPNtPxwfV6uMd6rL",
  "key8": "2LxpeJciToHn57MtHR1hW7hgYpU255YZckWMQno1m7anUNvLBibPs7M2Z1qNpEUrhcNUXeSD4TwbhThCVWsbJAxK",
  "key9": "2GcqMXtWsgCjkZUVVXFgc9hyCusC9GUosNcZWyyt3rLHB9xbXKxSmwps8S38NsiTcfjZ7tCYaLdZ4fJT7B84yyx3",
  "key10": "59iWTKc98tX1oW3aP3o1aaYbL25r8wPaVugCKLwVG5h7XYXRkF6EbLQ92efMs3yqSdrhR9kB4AwKRzT8C9sA6TZm",
  "key11": "5eJTHbj8axecGu143XkbMLFa5Z4UQ1cNJTLt5BCHux9LPpQMZBuDQAepK2hzzvE8CkHkHKqx9dh3DQZzF18XDw9w",
  "key12": "5SVfPRQY2nnii8LzM7jtXRAfCfJEM1H49ioMe1xq2WogVJtfrPA3jFU59NSxhg687a6XxGJMLChV6EhedJWSqhtL",
  "key13": "36JDdWF6K2wH3VU4wgziEABu8J2k67LgyszFf3S5NYrMGwmxPN679tmBgaWjRmiURtbFejrtdDvynj2yB7fKKWhv",
  "key14": "2GK83CnfqP6YFE8MXG5LHG3rk5w5CmfD9Jwfj5eAJPfjKHXHMBGnZ7Xc97JMrWb5PSM5qsBhPe7pE17ktYTzfzLR",
  "key15": "3bbCm5GQRYc6NokH5hwgt3b9PBx6xn9m5CXFBNgGRtPzYYgjiS3bkuxxjDhKn78gkpuShjFNFXYRugjfnFFTnAzS",
  "key16": "5auggCdp9TogqXyrciTSk8Sphh7fCCfJarCuL9aLxfYCgkDRCyftZZqRH5KGtXzptP3UShGhpVNgbV1WoM3cLSEj",
  "key17": "31RUxdAajiNWgQJB4sPVzZz4im62tg52mNE13qXcDgdCgr8Xn4Q369KBwT2FtQZm1sTtXcgj8BE5UmaUQvu6roX6",
  "key18": "441ZBRHXkxkXZUVx55DBgoVrNqnwfyzWtTZDx2d3RL6vLRBTLa1wfns2e6XQpph5eCx9PsVvsEp6PPG5bzpZfujK",
  "key19": "Ebmnaa3WU6uZ8ZNKGQKkeeCHVAZU1W6WzHa8gZdJdythkXYx9iHz9FE8kVbQrZL3gmbxdCGskQM6kRAtZt9mTa2",
  "key20": "pAWYLgM8eCuUtHAZkQYe95hyXbEAMqtRR38zcSVNquF4opUnB7DFBrWjFPaSfLvGts4gp3WRDKk6VM7Uca21Hv5",
  "key21": "rQhfs2yGLSPyL9quEVUiBmYHBvCYdJithqC8xF4dfr5DQjBaybs5yTV9sJx6eWiCzdRSxKUAHdrczgZBGTzxQRT",
  "key22": "42DsM1j8p2S7vS6vMySXWPLmgibymMFUzySYhU1RCUk15jVhhawgE4TW3AajKnUzi9pg9zaR2YnzQEgzoSbcQyhk",
  "key23": "5rBZz99KbPG4C9ejXDPiKLwKsLdVbvNE8LsnsrWHZbCJUctyn9JeWV2WGaqgYEo2mpiDpyQ4b9VpGoXAUK2WwQfG",
  "key24": "4Mq3BuV4DMaHTptMhVdukTJm3YBjxNRjCCAP9G8a6RmuoFi1Ge8ANFaZHoZ98du7mY21DTToRUEmKraJvbDTmUZc",
  "key25": "4wVWGF57BJa6hZLJFtM7UuQokxYtCTQtD1d48GadC1evBYt5CSi3V7yAZu2AqfZktTVmkpoiHcKbSWYiyHUTK9Kt",
  "key26": "4MqwQkWf61g7uXnvkVbcceWXXZ6A4HLdjouhjT9Po2VMzWtvYB5eSDZvpCwVhiLZpyQLnjFkxjLQuHhyLv8wzzCY",
  "key27": "4sfS7WXsCQEz67Y74C9rmkHMQnGAoiKJBv9tDeRA4zQUQomH5h7y7fjq26dsX12h2NE93pThPnAwbfxwQs2gWbZs",
  "key28": "2GcbjcNB6WMRUjanQaGzXYN6VE7eBM5Bpuw4TbqVee9nx7n9ZJ6WY2BKMzJP74sDv95doptKzdxhbLgcgt6Fznwh",
  "key29": "3hxz72ggmUzMGHe4nkUiM4FEdTf6nS9XhR3MpVkDGB18zoG1fJeY2ynwxvfDe3cUYPhtXxQPPWdBvBxdF6yxYDCT",
  "key30": "4zu1DXoTJLDg2W521FqYpT1Vyc2KUbXepHwioZLeDNpTgVrfWFA6DFhkTTendLf8Fre47KEji4ntWJo7sKh7p1sj",
  "key31": "2GKz8UAtb2Harrr1mUZwSYsCfjUhy1YWETFtG4cy34eSj11cijZgpT4WSVtUm8DdLtcGcY9iRfEnQE6qiY2HmDYf",
  "key32": "9bKN4VXMtY3VGBWbqcFaSYHumJcLW4heRivDTQwzoVpRVs1b7qn9CDnDzBRmuZ4FqwWdmaTYg1ybzwMDztYYtzC",
  "key33": "3P7kngcqtMSVBKV9ut9D4shcsYHsSzisZYvaGuN8zQuGvE5b39GCEaQkCTzjvucsAoTSLwGg9in3THTcU6CKpCxs",
  "key34": "5zJro1y2NxoLQEBk4w9R3HZw9zc1DjK1dr3MqCZX7bUX6R5HSva3sswaLUq9kZHGPPkoaj43xgDhGt77KUn132GK",
  "key35": "26YYcsKQgNEgdX2Ep1zJ2sZC761BQovJnaQQk6Hs1YC36HHRdggsqqePHtmNsJ96KfJ1NsHb1DegJryJTo6AHqKT",
  "key36": "8y88SGLbqc4PrsD6AC98PJkn34YYc7R42yNy5JKqvVHdqoEUC4oRhj7M1MJ5Sk4L2BF2bHj9p34C5e2muSW6mkq",
  "key37": "j1h5JtKSEXGXkEmpNvnXEss6iBM6vNsdGTkPzRALA3sZYfBLppeLCeK5zgusJ349Apwm3T2uhkLX7zkW2UKSyt9"
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
