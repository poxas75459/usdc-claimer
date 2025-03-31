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
    "3vkCw2hB4nbrogtCKuy4StN54tt8WfF2o7Ed25PQPpBk1MF5x63bNM3iybmqHDKcMLPGvagYKa7HsUQEUQLXLEby"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R3FNKjqLowHXp2FUyFot9uwr2xbsuAwAWw4P2voXwNfi9AwmaY5xoJpKqqw6n4Y6Xy7E9d5kBprkRgFQs5zwMcV",
  "key1": "SVoA22g2GSe7t2gLbQsNgsKhBG9mh7hEuKoH9FsaqkwkJB5moA88qRANzDZWZuddjFdcwkexqkzpHiy43MtENqH",
  "key2": "3Mkifc17vQGvxY7eVDiHArT7fR6pAHEadinM9S8XNYK3xzTqRLtcLDtopWXUogdNNbkVqzmoqLNbr1FRXL5axAxT",
  "key3": "583VNE9V7ue2fTtJ3arL78hEWPGiYkTL8KTSNSoJzfUy2gmBATJFsKJpbQkdsguDovCcAHEJC1AvoA1fvcCC7QSz",
  "key4": "5MKn5LK5tvPPaAw2XYqxyariWMScnbVRzAqXKsdaY3nrsK56GCDVSjAZTAKSp1HVgP9Cyt36TFairk2NcisDPabv",
  "key5": "414cajtFwWdzRNHjDN93rALETLsMQvBXst6UaKHkh66aQuwTbGJ2ToJLUkxLfHb5THQikLXtd7sRKgGSipTAD6FW",
  "key6": "479ADoEpxUByr5dCqSED1od9T6g7NTGqpmeWrFaDjyjqSNgfbRpHjFHm8a1V5VUs4dyqZwYZUbVp8TadQLVGFVpB",
  "key7": "5uiTSJmVLviHnJ9HXAeF2w2kdumodRyqkLHrTYzYKSDXWnCAVKbfhX8i6m89xCdDAGg6mJdMkNr9q6PXMhEMhNYZ",
  "key8": "3Uv8ePQsDiDxi4JkhfLPdd4dwQ1v4eDyAuBjvTucmYxGcfSpZVH5iShTyFppPhbcpp9sAFQSuUWWmUZNy8vXaVF2",
  "key9": "4QkzNeWqgiLZojpWhBKJM7pEWQj7PANA2dC3KALBd2Wfs3MszQN7xCkq3xRxuHmqwGds8Y8UD27FcwLmhodKyKhM",
  "key10": "3AnuxTfm5xxmDs7bapRkdGNitEupxhCJGuDt4wtATdTygmbX5bHuWAhK74iumifyB5nfNh9o2tfXoSfjaoqVUzD8",
  "key11": "3xWyL6uoYTDJJAVJZoYBfGvJjGFykCiQMH31cWG2EeVWKY586W7LcXA5iiH3NEARCKkumoSB4yuuCLUgHAGA1hds",
  "key12": "4uJmU2QiVZxhCvi8i6MQDVrxi96bsNBcvosFVMwiQFggE96cAXbWk72DgpoGW7nHiYqdo7ayya46GXGyK3qyTb3W",
  "key13": "2ib6sarkapTkQrxQWExCGpUX8H9V1Lg8PK8nR4hAtrnC4XUgQegqYSsCpSuLZPQF4VQBHRd9p7DFsKcBJkVnu39R",
  "key14": "3SmevoEvCFLRBf8VcxAzvFPbaARkh2e9i2tMqTPbHbmMtviveEbPkQk7rNkVvGmCGGPdgivTz72Q1YtMoL7aYexZ",
  "key15": "5wKscncy4RcPJfmn4jf6Vbj64HaGE9zcrnChEuMMHpE84ZKgEKpNnvjTgkPmnGwLKfuqu65sFKK2nRZL4srfF22m",
  "key16": "Rp5D3EqY3o4UdeixrkcJhfTTr7xjui19uLpQzyLzMvhE8rRetpfj3EpnxzdxcYT1e5oE4gPpffZRyzwCieVYUZp",
  "key17": "ofdEMPxvtnTBQ9DTfErADhuReDbLDktypWTEQCjrrdn4GyHAb5zWsXXmuWbnWVpFqx5y69N6nvA2cPtRbXZnFSP",
  "key18": "2LSCD7EnqCpskiSHH8vYXBzrW82wFQJhQDBhVE2BD4ScpWmax49p6HqNtgEWvHdiFsicVLpZypyk8Gx3qFmCMRcf",
  "key19": "5iJXsHkwRKbViVxf6LXdnTvER9BdMSWPYWndYxjrdWtDVEgg7ZDNbeYThvUJJ42Y9DZx6aApA6DYMgFyRMFeXegB",
  "key20": "4rPPyzr9GzCXdid6rohBEJYc6ZbNUsS3sR743VTxXT3DM9ZLg4UpwXQfdo3jPMaYhU3MDWbDPmH9YhZhEKb6P1vp",
  "key21": "itiZjU3MrTVuyCC6cfm8ts4c1oGHATYRWHga5m3j4AmcqrD2vw4EjgbzP4NX9UbUfWwyTznuHB2FvrEcNNB7xrk",
  "key22": "4exTmmvUUsfJdyUJQKfXyP7vhBEA1b97hZb5V55ZgKWf8pgpUB8VxDQ4xHvGakk5DJBxZPX9YWNVRhPwUTnVxrwg",
  "key23": "4KeKretbJEtpBmR7GN7oR5jz2Z3xKNUQBe8RfM67Ya3uRdbFwShQu9zqTgQEdNYTRqAnL6r8WKpLPhTjYoTbhGDR",
  "key24": "34kZGA5hqP7c3HpRecUdyKb7iQNrbxRk2Zp1vodzk1bYP9E7KWaJ2txavff1dXYnSudpLz1FpB8YzTA2AGERBEEi"
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
