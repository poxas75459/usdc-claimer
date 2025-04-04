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
    "8hNp2ZedWnmuTNenWuLU6si9ANtN7RxgBVMBhs1EAyXWqStN1UTNeUB3KzjAYGwmaSCs7NGuQbawHaduMA87CCq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JeqHGKirj4BRFJt6Mh7a3gMA82ouPTQ5yhAZMArsowGCwANdvzdstNkosbWQsiLmf873pajq1UFCYBnRp3s35JG",
  "key1": "4B27f2NikfBdsKEmLwLGwHs3k9bvvQX3fjGT5eEaTKgvQkVfybzKwy2wXHY3PRvPTFrEHGYBZL8w8CmhncAt7it",
  "key2": "4bn7gPZu2vx8ZtM4CK8ceDntNgKdeemwa7pTBsqQE9a3vvN4YdbWcPXPmDj5Va6DRpcAqd1ctJgeSY6gDCfaQ53p",
  "key3": "43Z2e9JQ7FUu9tvfQQwtS3H4Ln15pfzELtKEYqLFkC8eXaeDqKaHjyBWSuhRcML7YQsUi1mkp6Nrnagqgy9LF9PE",
  "key4": "3w9PqyB8cTcjMTwmWmjEY9MrU9d7BtGaKd3Hmgp8Jw2onJ7MutoRXp5FeUbyD8LwyHMhP9CZrcQsKE2MfXyhWYn",
  "key5": "4YUe7n35GNWrPVYHVQ9YYBgGJVGCdZkjEeXckJmpfsnpNC9ygDPLtJRh4XJWXytRf3K1mXiTUt5T4zhV4XhGVjbK",
  "key6": "2weZ6SrVeY5URH5W9apeesRBz88BWBTf9gsGoMjJKCxCN5GbwWnkhhGgkdwNTxN9eLB5TDW6D1vzjES7BG6iFcvz",
  "key7": "2vxd7Gv2rxSZ8nbsZiA7UrVcMkv5FGVPvn4pZ6cj8NXhnWfEZeUZhyp6w9E4XpyDwsTnLxxjTz2t6Gt9fxeRMJZJ",
  "key8": "3yvwbAbT9pcVKQPu3qdYKDScuyngf4X4MVx9ZLpEQLQSBPGqoWWaj2ukzLDinkRxF9tZnXcqgWEJ6xGXMNrKzzf8",
  "key9": "9bhnqj8nk8YTvz5KPzTZQTa2ULNVw2scUMaWMEYC3S8mxFK7WmFApyVuFuuviqzx7HYG5xcDow2ZPMHo62ukYss",
  "key10": "2vSzCm3ZKNfn7WPumPBfzgDMLSLpNzFU8vvopNhBvULTfChkn2zXW7dA58MVrm88YeysXaNBGcpJwo4cSRZcwyez",
  "key11": "wMDNhz73j9jvZTxVwUaLDAMWspSsYWEiJJTY5CYCuMKKKpzmh1zLQf11MSmysHdhiGQz29XTfmw9hLvPMJrf5DK",
  "key12": "65sWoQGUBPEn3N9UQKHU43FDwzHznvBSjmhLxZEZMm8wTA55UhQRKUKamAGe8z8t4aP72yWWsAMq58B5TbtfKRr1",
  "key13": "2XCwELhnxEwsVWpefbuYQir8PsZTVFFSbhHUTYS7bCw2JQJjsHmgP6QRLALzNjRLTtuQMDt73ijGpKiMDNXDfeMA",
  "key14": "4hvKZESzYd7K5LyvqKAS1ACapeXycpPQwupFWUxenYHPk4ZRgEWBmqi4tzQJWkE8d53muZGvQH118QN5owDm99Bm",
  "key15": "o82FvPa2p1wfu36g9DRGBDZJv7WUoBQJ5BJjWrfGmbcKbUY9w26WZjPLCjf6RqvzyuQwYojNnA14RkJzVb3M4dy",
  "key16": "2Me8xsJA6ydG6Pa5Li5SPnHnVJBpN2MRSu9Fb5rFdo1x8WH2jetK7UgJU7ySNGUtb1ojHEBeqtoS6m9MPdn9TyM",
  "key17": "3UVVyDhpaB3T2X4VVfkz8CPsbA2QFw3UoUQeUKJgpXrcFp9J1FwfZ6R7VF4SFJM74igEcoxoLW8S15T8EZZHQnNj",
  "key18": "qLkwmKsqqMeMwVNjYEceeKncCRtby2DmUJe7NBM3ZBhcqMUQDBFAwbXn465BsHEGYJ2CUQRJEK7V9QTx6kULv18",
  "key19": "rc9qJuJH9h3gp7v5VDGhQEAkreaBBcfrttt3MKTM4KnxaZ4LrWn3jmGhAtKXvxzV7X8zbiVkJwZcFkkG7KbkiqC",
  "key20": "3hCAkkCzHDTt2PXL7euRXgE46KY3f31o4whT16hAyZmZNWV5uHcZLkYz3Q6vkuZQRdt7S2FhPrcbhmWN1YRWHiHz",
  "key21": "4TvXmsdej53iMunufSnFqXDb1MJDnUN5u9h9cJ1SyJNfHgbB3aajaaZ9eisGiB8XFLDGXxDPjWR9ppyqhQ35joPQ",
  "key22": "668pQxfk4ATX7Tm2CnE7u9ystkooccjw5jbE8AyMCJMvGncrgoeq3GURRpFKNMC3t5A6XRnChvSwwhRjkXGKY9j9",
  "key23": "aGfiv4CxuuxAhyoNqTh7Cf7V78krR6pce8nZbPFw8cmBbFArMAwYKtvzCZBWVX7tjXZP3cVjSih7DXyPRVb7waC",
  "key24": "5XmRscRMApKvqhuLrqVKRnhVMBivYrUJs8Dz6ie21rzY7cmQ9h8DPRuDZvGqvzSevBRWq93LwT5Sv6pbVwWEedod",
  "key25": "44fkyYtMcM9RdU9Zn6C3mdJo8mHMFmoEqJ9pfWixPCqcVW5zMyENWcGFTdodX5j8wsPyaqs9TU2GZSU2t1yr7RHg",
  "key26": "32QzHNxtsgho39KE1GZgPn1g9yX44a1ekfpir6Fpvp5B3X2o7Vt8qArMtSCUv52EVGnXfNGvntQYruy1PfuUZjPo",
  "key27": "495KXb8cbs5Jb3huuZDmiFLDUXWgwv2Sfm3dmzPGQVPsqa7PKDfN1xg5JWggGToAzo1D1Lcic7SyCJfpuzG2mXCF",
  "key28": "55cbXNanWjMX18ngmPZAiZYPCtHvLaiM4qAXEUdQmWoSJPLEt4s95npeWZKNusmbW8gAD762LV52YiKVSsmEo8fX",
  "key29": "3pgZyTkR3xcYZXWUXAUYeLeKuwZaMzHMZ2Scc43Ve5LZQFyLH4EgkKbZsm8UkMU92f9wuhbbeLTodxNrq6JZ8NPv",
  "key30": "3vMX2ynSf9tQmYcQFWknhxTiWzqxSN4JH1yEJCgRvJ6dMQUSTXFbnKwajdGjKjhqh8xHe9n9ida9SSnXADiNLZPk",
  "key31": "2EyWjXEuqVWKnFGmjnjZ8MLjubUNyB4y4GCue4uVd8QPEF5gJEZAw9Bb3wKsE3ynxBT6ofXGaVjZPjXmL6917zzK",
  "key32": "5Ras9wovwK9LugQMj8F1qWGptFdSaL3UDi3zs1Dv6cFdYJG9zg4v8gPuz2zjKS32R7UB3kBK63kARMofqgrwvNGL",
  "key33": "9vNeCNbPwTHPQsQJJkKNEuhV2GUH5oxps2niGAG2fZt7xVTgCrzHjevvq646i9MmUv72zGvdV46G76CeUZaw39h"
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
