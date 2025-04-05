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
    "3wcCKxj3YJkukjWYn3sZUm7UkRrYoSkZh3ATBhUjecAeS6jY42yxRHmcKH1x1cmr8LfJyWc5tXtChH7kvE9ohb7B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8tYkDvaiuNVWgKzAZyCdXkmWBtH36Nxkmk4HWKZbUMjMWdprW7iW32aVMYm7YPxy3U7z1pAQ9aERWUMomg44Ah8",
  "key1": "2Uizfka21U1KXyiJGL28BjNVPvmkg4DjkfC8zKQWydXyFxAgcvCK9nqdGsmza8JhAUf3agrRc5CwXCBWHqpD3KAF",
  "key2": "4CUvoPwHAMZzB9QxaXFaYEnt5bZ8jairHY3hFr3cYgaSSTWc5oK8NLxpZeQCAHAzWsLYnDBU4wubMosRyUT73gTN",
  "key3": "5WqXCXPGbqhTofHQztGoYrk8Bbtuxp7qCSUoov62afKJ9VYfY83zyLbdCXQ4KoF1BRvbLFxMpy6fBstqPwTXg71y",
  "key4": "2nVL5chCF5cabN3vHGEVasRjhyW8tZSMcWT8t2XYd16fG44mKxYvTyofJLErvyP5BjHFzC6EXu37Qd4ZRBNgQctX",
  "key5": "48oWG5BUsNp4LVVc8gnNxBGJRwhr698A2rRfhMtKYrjCPmoRJanmJCXv1sTig3hqkqogPWsTYj7bPueenFuX1a1Z",
  "key6": "5PrQevLWqLmZjP2GEcMEQUYXEzagyHimShisJrwy8qFKpVwppBxAGw3pgbZHNhMZJV2xk5A7v5DCv7i2JfSrXxsJ",
  "key7": "4A9hscfcxhDB8Kon6RT2vzkYhpBDPPMuEGTYVRRzoVHPdJUPn5yd32Sz6L8FZRXmHWR425eZMmJkFTsC26UUMtii",
  "key8": "25N4pq139zSmPKMoUNAMK6bS3X2cwgz48BUVr7aKT4FHoGGAgAj4Ywp2tupemfFoedyuN5Kr4bgFeP6NdU47Bhpz",
  "key9": "2RhqxN4idEyRBXcWchEc5WAgkJhW7nMsCLscmG2U3PH9ZrRztHHA2EENFthynvcG826v65tFEYNh9NKQsFz4paRH",
  "key10": "5WH6q7szwGqEd6dF5fMd5LsjHFMURrN94FJBGedHbTjfZM1QFc9ACQhDcagdSnWpRdXQHVBaN9JQyBEGgDWpdnmz",
  "key11": "5ugJ2YTtdM2nYrPmSkgwYNe9tGEoEFSfuBTtXCCSqGgYGxN5SSjeEbRQGp4ivmMPaWaturJxgzgtRsgZQ2XaWKLy",
  "key12": "1K2MpyeBJeLkzBC2cXX3KpCXFWYmcX8PtqFfShQgv2YsdQo7cfiVysUiveXNZWeHRd5d2SDgqRXeNeokve1rJd2",
  "key13": "2HrLAuzRyRQ8TqGVpK6kyZU7qfjpdHTVmyLJR9tBhfYjDMd5Y9UXX6sp9EYEEB6ywiudHiEoTqfNkbJAwkd9a1gT",
  "key14": "Ngcmjo9HYKZbQb6m7JZkpt5iSn34VBzoUiYYAy7dGjpicTpeGoUku8bjUDEX1bKX48bAd2tXSHJXkYqu7cPtp8Q",
  "key15": "59ity6FDT6ApYPALRGSXstc7vXaGVJ5FiU3WUuEUqwkVb5e3DRqKiQDduYhL9VghC9D7F4ZG67BcxJnxs2oSy9oi",
  "key16": "51zz6yxxgtNDEhu1YLr1u1TfYrf3NvRACew6wJfFVWN3HdwTb5otcRUutftyrFbnP2HeNYnvtJynyZbfuPud1s78",
  "key17": "2PkLwMHZg7gMsxybm9M3V5BBoB25RYEDBPJijifF2G3zzeTzCyVpBcDChehCF3DTxRFFDWRFRpVNPSGFiQLhZdTT",
  "key18": "4U7fU3dti7AbSq5FHwBBquy1mLs8ncGHaGEpMXpEFZsL8gHCDD55FJYATecq6Sp9r4V8rwSiMm8UvAcLTkWDZNmS",
  "key19": "3Rd4kdFuiAjhQkGexB3nZ5mrNJNZcq36qaj8Z2XjvBZX2WmWGfwLZrfcN7ZYnReAkAmQDkWPQGAZNpWHFQAtXg3",
  "key20": "4ocPjtsCj8mH2xm2pm3zdNRVamAs7pfSiXg1juiuuWc75tryQZexvsD15HMhEpkLdrCu9cvwdsg6A7n376g6F4XR",
  "key21": "2QEXWmqrcgcmhkAfj6sgGRhGss63Lt2FdcHq1388JuKK4UMTxEBivUYagNdMsYkkANz5m8xNaJWgDjJkSsvHe3nJ",
  "key22": "2DHEGb45KQbDbwVewLoWx4VkPvRtYWjpiTvTaDNRQ6FwcXXaWBiSeR2xKBhb9pmxBhMBQX7nEEPXq8H6yauWNzTA",
  "key23": "4W9W7AeJe9d3GBorM4Sd3KSa9fhpMq9Eg93vus7kHSNzNr71iAQhxfhU4vMzYtjhUkKnkaUcRHUetV7HyyGyraAT",
  "key24": "4MnDbUdZjzV7JqAmtZk6eQMNAAsFhZ7bXBD3fCQBrEzji2JsbAGXKjYD8LzwBtzotybwcD2woPfMEPNTNUp41o1k",
  "key25": "3nSTfwiVCyuYWCuruwfgX7VBJWgZ5nUAp37jmz4RgdwLU2Ygxs63GgnfKKAZPZg8XGE9fAwUZg633gYLZTjKuyFS",
  "key26": "3nQEMVRRd15NGL4MVeNBaSMoinQh5ebedsEugRP6DaSi2Y9KtzfHU78qxU3cQpAcLgryddzn59y6FXRXMz1n48xd",
  "key27": "5uX6bJvmYCjGEaE4RaVbsxvfWbFoxy4rW9VgB62pe4bYZJvbhcuryXUof1aF3azg7CupRuUgMk2jyNNCxGb15mUk",
  "key28": "5NvMsNj1Tpx2V5HuqaUgPedu1k8DR86qoVCLKA5ksaSpmTXAyyziu9oM8BYFw18ogabF44uY9GaSYJgs4qaCEbW3",
  "key29": "3DcTLhVx4m4xh6F26pVZGesiQNAGnguxSRpnNkjStn9eZLKZCtTLVzzJETr9jQkcfD78oRqdoxy8UUNuGyt6rxRH",
  "key30": "M6APasgYgbrsmPyGoSAF744heLJtdgwQWBRNLEzVQ7xGp4bP8FW6AhyFH1WGK3srMBAoZU7f3EBj52xsLz4QYZL",
  "key31": "4bZbWGh2T8TbCbqeRMhWfcmwKUkhQfzfQrEvqzjampsCdFyK9P1uUiwFSzNuQz8phTfbZ94mUGjFBpwjG3PxwUKH"
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
