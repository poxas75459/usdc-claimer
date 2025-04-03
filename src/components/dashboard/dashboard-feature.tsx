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
    "TjMpPQhDA96su6JHaCWHXWcJ4ed592SP28ekermRiRMZyJB7hXegv98bkD9J8FVFNnMTXqQyXJFHj77XfRF58CU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BkAzv9TLiNqynjpALgrNHgeV4UU7WzyXMhvVJX1hhboMN5fqb36zjcnBRc8J4jhvWZBwD6QJGRJ6NaEekGA5hWH",
  "key1": "55QfQsKMxZen1oGF1ntZhxzmvqKvjKyNykBWdC7qVdf2whQa3bWogPPs53S6Akw24qR2sgJhS8XU9iW4YVsWpCve",
  "key2": "2iyq2v6p9vSYj95Y5tUFg6NDCPMevr67GEq6KDysvtpQwLy5wnRkqKMnrAR31MmULhqZXFbAJww5SFSD2cT5AYj8",
  "key3": "4G4TjNG4XhnC3BbYFFtLaYaGHupedRtinFmbuzcgpj4kydL8yZ7JvfSS91hY3PFiKWp6MNbyih9mCdt1BNWPEWQd",
  "key4": "3ay66HdAraFw8AfinXCSc4Ma8Bjtauh1EeGT5kJvFqz13BvXD4HiHjY7w8kHDyyokWPJYba7K2BwzytUmQazTj9s",
  "key5": "4Fab7E1gwshT69qdK4uFbDfGUxZowJE9SbRRxmDfpWfC5fFryJeVspEthRv71gdA4oEXWeQAKgucTdZoXKiULTaf",
  "key6": "5tSSK5uwaJz6Csq1UZy1bXGzDnFqYc9CHLrb64QdsvnEJRUoGbQhynwC5GPBF6kXUSQSdaFoNdS1r6g9YfJTKo5H",
  "key7": "2NxPbr8Qc2z1XyGhppDPkmgWF3unW25ScrQ8EVTtriNxd6fG4SfutbQQr6dZHazbgAtQUDZcuEZLBxiKW9sdBbec",
  "key8": "GpzZvAZ4NwWuwzVQPiRvCNVhU6Pbe93SycD8MWZ3uDbK6ph1osaQxaRKCBpHCVtEyLe1b4pW6hBFLgv82tED5ko",
  "key9": "4L3d2UPnEeJcTrEZpSw7oJaGnsQBZJg63nnqpaRz9sJshNFu3wyTFioLYaf1S3xP7vRXg6aUWmgTNeSbugEkZScn",
  "key10": "2VCdGLg7Uu8EaFWjy8ckc5XS1cQp5i9kDbDTn8xqCQVHqWvCxrJt6eYDQdYQavRerV2rwonW7QkSzP9hqAck9F6t",
  "key11": "4dL38pFrucXv6hBKX4LNEeQ2nX7rh8uMHwBAvMhF9xYgvcc2vc9jEwHyaq5SgQYyCrinbiUb9zBt8mkK6VAd941F",
  "key12": "3Kbh8KwjADarKJSLVE6PysLzYDNScvY3tvwnWbyvr7FNtoPkHUyQFiB2Nts1S2cq2uJUfLN8EhUk3cuz3pom21j4",
  "key13": "2sgomBnNa3FyftHK8UodKau5i76GRD6uEEAFARGxEDuE7HARnSAmoe6dnhMUvecWyZQtAE7YkhuCN6hnV1LJ3yWu",
  "key14": "2mMKrx54HoXPdVSnjEeJPo4quFc827SvCJaHknxbZANfLYS3njhkXKYrmkNkhj59rVhHkZQR9e9yBjBbECKcRiKx",
  "key15": "5bgZX4uBgjBnR95trYetYhkPa9iDdNkLKFenkrMjG6NoQVm8MgRBZCpti2e2TT5TeMjTe142VzcqLsiabrayuhDS",
  "key16": "27BbahqSSQEb7RCeCQGzPMG5s3jYpaFFwE51i2kgHM3ytmT4EywvGrJ2kb4L1xqmgDRx88XrE7daG7RQfcQ1XtyS",
  "key17": "tZYTf4GQ9Be7C9VBLd4d5kPE6ay67BL87Bv1td42cPf2uQWEbxE7mqbmmvdj8Mbj3GxPpLXdEQsjc9NAupHRUQc",
  "key18": "aN6e8nfuetJKLPjyrCADRvKb7mNdhp4YsQMfhYvx2imgxfZFutt2QsjoVdvHwB8ftZyX9HKNxX6FLN29tUFtkW2",
  "key19": "pQfoU8hYt3AQAe1ttktRfKn6zctTParAA7zytXFaJCanj2MJjwb4NUWmK6Zwm27qjG7UKAf3pjtGpEDz1EJf4mQ",
  "key20": "5SkprdAZ9r3hQ9haQyhW6ro2G91dUJ6EBheFRJQ5fnA9BVgYs2UjPZBMuEQvbVu3CRAKbEgXSuenXJXXCPmwiGKx",
  "key21": "4BUtSRZqRVPvoBQVUUF6rBn5kh7kn3jXMRgp5nbEYVSEX1wkRciiAKHEu6eYH1PnG7w2QC9yzjprmpNHo5wHcbx5",
  "key22": "3bZH2RmDUAUEHkezzieEpsmkcYNhZ59xKUsj9jV3NAMVFdHYUhgAH3gtafpXHS8tgWaoqji4EP3GVHfViATgE7kV",
  "key23": "5gbRobW21ojNmn2kBstTPjVHU4bdCh8zQyugK6oE1RCcjkAjaiQZLJ8cPZdsFk36TmjLDBbQ6h5AZDjnWrFSfJq3",
  "key24": "3t7Au2PXXH77F8QXm8RC4UrSSsuFpF349BCoZRqZ56XaMQeJ8Veh9jH4vv5ZbzXd3rBvmPyvy5sf3mTHK2Cc6g53",
  "key25": "4nVGgVmTjwmj64x1umcJpzB9bovBkQKJRFKzP48RKVjM7HzDXoX7CStYUz8e2V4EQBtdBH92uHAHo8wXeePiQBtP",
  "key26": "2TRGUhwxKDj9VGKZs5LwEw284ZkbQu6gXgiQk86xt6d2YAnkCzn2GkrKzfnmAkAw64j4HZXA4cKeMxo11UzNc471",
  "key27": "2xmAt2LWbf5hh4hiuKT34pikorR4f8oPmNrDq2v9zroCfQj59QYPC58rict1Fbj8k79KkxEcs9g3ySCFQRtAPRda",
  "key28": "3ZWx4sPqKVsQoFnYJuvVdgnK4Wsi5LLU5gJHLu8aAvs9AR9A7HyuxFguSfa5HrttUGVjn5i6LiuutSxxj5wox7ei",
  "key29": "6jPEkmSeQQi35a8Su4Ctyfc3TfVTUAbiE7zi5FFtcRUSNoUSyZXDgsPJRRQ8rwPTPMYavb9SAK4Uo6YejPXRn1e",
  "key30": "5X6by5bkiNXpnouMSiDveJUxAATzQwNHXCNSisUK9MFszpKveUL91XKEuoH3ardhWBZwC33jior2z5RdyxYxa9bU",
  "key31": "33yuzZCUTY8h5Ch4sLmVKegf25t2mrdeWbdpc8UQFNGRGPGC67YyvPdyXk1dqByqazWD7oUt5RAov3hLRbcbTTVo",
  "key32": "3kcKR4fT2mBtnrN5a9V4DJLi4HaBJ4LDx27JbgC6jmDhpwtvwuRX4U9t4RUTzkdJ9AWDnXbEoq9YFCCCuuMgAnSh",
  "key33": "4MeicdA32PTAwVrLYWYaBm243NuyLYNt9w48s64rhNA1LGM1dYCmVfSaqwfR2Qo5czgouPac4c8ZABQDicRYqXQS",
  "key34": "5PfktxEHdbLc9geTUEW3XUYwmAsXY5dMBKSLXUJpDvLYP4kXQfFgvPPnJGb722YAodTuFeNNqgsnrt36ruXsudBb"
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
