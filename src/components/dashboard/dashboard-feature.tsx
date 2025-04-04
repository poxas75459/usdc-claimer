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
    "55kCfVeTt5JWPLsdE5ZhPxvkd7KzGhJUtGzz5W8o2oZxSctoXSgVRUrCjgAhrXz6RT64akE5rWQ1eXwE1Xbs3jRK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tjuzMRWdiBgaV64HJGBcqWzhGh8keor7f5QW6e66KqZxiTvka6VXTz7VTqusf8FBiyWt6YAUvBBXygkPVHJHYD9",
  "key1": "tMz6jQHwrD8wKkEoNe2kZH3XXKJcwqmeW7163dPqNYUBkKDzchkXdbpcckKPgz2QWrc1QPYUoQB9AG8EPjTyrp8",
  "key2": "42FBhzzUQxcPMmTWBoTh6Q64pehDeeTktxNma5QK6TJdNm5CHm2A46UzYeqcndBcmYPL7poG9dMb6RZyGjww1c4k",
  "key3": "4eLTy1nHtVYVzwSZ7AxhZqLxpe2V8ktJVmxXFfoqtq63Zb2iDy3AuLgwFf7QB7AJ9XFFajXhGVQGsiukMkPRcBFd",
  "key4": "4YKnhT9Um14p7s3yj2HHHKmgqbraBH9EyLzGBSzGr82GP8Qu1Tdrey7k8TVM9ueXurbZ7GGbxn9BApVyb185pPk1",
  "key5": "5pbq5c8yTQ67hTx1bShB8cQu4XkBRzKKLAxXJTWyRerob3ADKVbEEvyhStC1L9kMa6haDt5TUWCkEF4rQFXhDdfr",
  "key6": "5ANXaMCaqNySDJX4RTtR6VC6ZpjxmXzXzsrr46T6HnQBASkNBpKayHbbNGnALtk5jfL7ZfKN2fyLqwZsmsbmbDHH",
  "key7": "4Y2Gc3WNq7KiLBfXdMZHLoi5hPMH7t2cHt1EcSJ2RtCUZWAhPBWyL7hGNmFubF9DdPzgsNohBAcCMCEyGoa1DV7T",
  "key8": "24Zrz1W1rF2LGXKVuv8jV9yLpARuCzmqy5KEtkXar4LZFviZ5quhcx254gUD5k8pyj8hn7tPr3y8uwi8BP5YYZjv",
  "key9": "3Aa2YbseTEhUFTQSXFinmrPcLYfiNfkZfKbDhaxAPzQyx1GFBx8kVhZrndv7Exxp36FA29KVfBPTQ7ZVBFWhd5JN",
  "key10": "35W1LCAGpEK21UpBsz6bdi6RiNJJqGHHDzvn4xzqc5UdvdkGVANvyaCht16cc32MZkBDS4rS5hCYwodY81p95Q2H",
  "key11": "4FELkQtaXthdxi1YBVcSw9h9czt9sjt8Jd5JyehiwLzR7LLTrnJZeW5DoFFRMGPZbGAHUUC1wSCPUArbjpbtNVh7",
  "key12": "25AqnLsynDr1qxK6MGT6vjj9Hz6hoJyCNRXzzgkoHrR4xCq2WxLNkEiqS2PqYfWjnapTS5bKHJQqcqmVjujdvvBb",
  "key13": "5gmcKSSZBA1ste184V8Qhri5xjWN5sgbRTLLTVctUWjqrG2oeKvUUvyAKDkKMpTETpdFjFURTmFUgWNGHumsJS6b",
  "key14": "2VCe9X3h2Ei3bro6D9pD3wHq7YRqzLTrSdMQk2F9qyvaMcjq1FedDcDZ2EgBP8cdA8KU2SmkwM7gtg9zcbxY5PyC",
  "key15": "5XZJJfThxjavSPxxSEc3QydZVZANErf5Gh6fprfgMCucqtMZcFMWa7MaYYcJUycJYG7a6Z1LqkNNiBiwPbKQseJp",
  "key16": "41EJSwrSvTxKpHyTFvSU89T3tj53DS1N2jp7imZ7Uv1keHZjqMQ1unB7XLznqLTV6X5tqb4zM1Ud8xKFmvTXFtMX",
  "key17": "5jrpdy2h5hidsyFB2o1MwXjTzd9d87DmrcHxc7a2URiJk5repVvNd6R3eseXadY4JpAm1p2a7LGXThh286HPT7c",
  "key18": "jtpZHJ6efNNHnqB6AiWHo3ZvgLw1tyMt8LghRVPZQ5UsgwiASsDDiKYjtYkpVrcrqEFnGVmfFdaE5qAidhnXJjn",
  "key19": "21ELw8irt5bydrhZVYUPipFHG7UyaSB4nicEHuSjgoBS7BazgSTfwdTXifwnFxtajHhfwrWsMKbN7aR8vaVGhqJy",
  "key20": "6114umyuzh1ZGwgDdMFWvQxcHoB5RnMinfk1Gu53H3eKYJYRpRdqEmpnNJTJhvUHA1ya94WurYEnBqo33ZGHnCki",
  "key21": "iZHzwzxTwKNbsh5VE136Tx11yKxKsbBbDQb5TPVakAg9uTwcqkpGm6XNWoxTHJ3GkGx94NyVEX4ug3UbocGtKuV",
  "key22": "3aGAmfpjGtvjzto6Axxk7P5PCW4aWVwLnLPq8tQnCNWzEQrgy525VxAsajuwiWgU4ceiF7mkiuiyRcE4rk6gFixA",
  "key23": "2v82bg9J8gP993a6EsPCRZSoCLxDdaZsV6SVy2idquzN2uDGwzqppLKt4WBGacTW4GtSWSpksGaQ8j8me6aapPry",
  "key24": "5rkU1a4osmLLEEomBpsJmGsrqhYaouyKjZyxwJrm2RNkTZf26unHTyDbcLxEXHdakHzCbkgF9fBdDqnUr3VnqhcL",
  "key25": "3fBnZT4mhkvWvrt6fDAZ1nSNdweHuCN2Tdk3BDkWXkXSLk2KLAqvdxePs4YqASKsMDZLAdKRMbmNcyZRJwGDsBdE",
  "key26": "4UzuEr4eQsRjFi4S5x4y27sTL3cQbAPpNpUT8Nou5qUAyzNDk19eKuWwc5SsX63C6kpdNZHSwmJ7NXbeLZzfzTgr",
  "key27": "5GSpEWByufEh84gVN5F2QG4RMQk2nb9YK9G4oPmTEKyzkCzRRjPtjfW6fJZ3JhPJU53JAqFHeRb3oMSS59EsrQ54",
  "key28": "3jawMh7BdQqvhi11YvUXutCZQW2GkhbL9UJGybMHPmvUfnnxy4yiceMJpJiFxcdfoCFbHG1nq1ZdL2kVaNQkrJV2",
  "key29": "2rRJFTXKjSkvPok2pz4MCjfWyBRQsDgcBwtj1h8f3zC1SwJ8tbzPLWhiSUaiNUSZb3YBEHeXttVuXjVaJ6Yj9zLY",
  "key30": "4dAeXSMUvogHUjAkvFXUXF5oQQ9wEs2ukTZDWnLgvxmvcL59QCNWbQR8r9VbGQ6xPW1gPF6NRTJpThkHd6XSJNru"
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
