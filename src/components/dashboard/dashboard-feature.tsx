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
    "4MgbM89Mv1JmcfKRgmjC1cK6twpPRWMFnazG9VmtrSaivnTjcenHc7bhsWud31eBuqG2pJp7v4xuYRfLfqT7nLmL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qZQYv2casuU5nhb9wgTsjTPshLYUa9e9GWJsxfbYWFS1pdqbRsysDuo2SYzBFLgfpWGM1JFfnmKe7VwKLiCpiDP",
  "key1": "3JJRf9dsapv1cydXQk6sX5nfGE2W3hf6SZaFJdxiN2EpuvrhFj94F8eRZ7WRr89tjV2HFQ5hK4vFsxJ1EiH7y4D4",
  "key2": "e2B9pQ8VbsK1nXPXKrk4sNHLYP8GdpGFTg4E3MZALjZU4jv1bNzko94tQPZWp9Z5cBSLXmJYYman2CfUeofodXC",
  "key3": "5mFoNKWxAsUL6hnwob4a6Zz53ueB5icdKcMQYnuTqmsEMCy69UpXSz9nGbQsRKqD5KHqMudxfqHaXZBf26DFxkwB",
  "key4": "2tke6nzMBvn9L2y6T9TYBDj3QRwyBc2qoy2eGMi2SDiBXowurELmvk6BjAooqGvr8AcAxREdVq3agrZb4jJkx26i",
  "key5": "uzvFM6fNquNE3UHG4YyGmTUU2zxfy7C4isgpRyMdLgqaKs34FfvLBZvy5t7oZESw7LVRx3284NvJkgcKprq2nEL",
  "key6": "2ywMHNxxz8MBWcn75ixfQCdQER6H4xByq5EzPk4PxLWRnL5jPc9HJryS6fW5VtPF3JVhmxR1upMh5kiBMMvMZTqd",
  "key7": "38kZ6SmK899BVp99rUra2ug6hhDwLUksnoNzgbTazLcPsrdahxUfXN1tpxnew6B46eRnZWFp7B24hchX8JH4eshc",
  "key8": "5NY9BJqTiB5ZRnD7rYfyodkH5F9Xdw1sywY7g3TWuPHfYBJY5mdzJsi1YCw1JN2KTkh7vomyaJba7W4TMiF3zdmq",
  "key9": "c8x1jxd1Pbcf14TJNBmisCMox34nZyJr6uRDqW9ojHgH8YXvd4NAGijzLsMUFQHwTuqzSMztjPRJwmiHDtFVovp",
  "key10": "3VqUqtkLHxEzDFP2Ci7vv9jYVoaFp1x9UsQCTfV5dPwqMcU56p7bqyrFL1zQ9Nm1b43Nj5Kgbq8pXkt57mMR5nCR",
  "key11": "3UBtJSMC2zXTXt4LqswRaYjwmcM3274M179JSoZjfVDoULPX283gDR8Q4NzTouhQpNnngZ1Cv2qmKoqxNrxS6awc",
  "key12": "5Z3wGrJ1xxTsZJLcJAb88r4rEkmfMBEzBa1396gc194ob2QxAfGGgSCgVokSqadrwKto6M8uNYssuY3ksPPwZvAj",
  "key13": "4tLXzVFsMZUVzqVj4ga4RcWDdHmKeoQaFk8RZ2w9MUUpEn3QW4yxuB167WeGXjz7PQ62cSudva2hRobKUA3EZ1c",
  "key14": "yQZeTLjb5oSxjCogxSxoDbVMWYzzZaxexuthMFUe59XrG6RAX3hVMVnzjRxF8P8ib3cCCiHDdtn2pZ6WGkL2pcT",
  "key15": "4tiYtV1A1XaPGmuQpXz6MGbPy4MsGSrzx8ph2LEzhKKYDCWWdN8T5qXdjTeiWExLQ58a5jR15Vzs2yhiMuqzAoFH",
  "key16": "3iB6M9daYve7kvJDv1WYBxfnXXzisRSSsBtrbNDA6qW74LPph3dN5gpLyfQjQDu6XMpQ1MJp8RPptxNu785NfLf4",
  "key17": "5LddGedrhCMgyK3ksXrrZXw4gok7SJXkpLa9oWmuhwzuspy7Eopp1EQLrERnzvEuyuUVUoiW5Wu2gTCBHoz94YNS",
  "key18": "2UmbiyKwLU5bi5ghXDA7QNLmEhq8Nkm14fndvDF4XBqR1GjjRhfgHt5myoDPgCeU62seu2H9RmfCCBU8yQDSEo6N",
  "key19": "5tRhtb8i5KKopnp2tVtHK63wwgDnYnrbbhHUW3Da1hr8cEEPAsDnFuXus6b6TfFXXNkVNjAC6fHSdLWqxJZ2huok",
  "key20": "3viQMhHFCJVo43xVjgMhgA8oDd1ax5evSekt6NdsFYj6RUvSosur3GAutXEv2at9by6Rh6ybTuG9M99LHfifMF1Z",
  "key21": "wSANu3bJyqgw2ocnctQdZqvQKUuBi4tomBDoo26Etd7XrEG9xRJRKezW7rDqij2cFXaNUgeHa2TXkSymxsozMqy",
  "key22": "5KnqXhCBYtDZacq4HVAp2kmjMjCXAFCWh5iDq5DGuqTDWJ4nK9Ezf2qghHtGE9SUEkJ2u561RvgqbfPUXsPnLgj4",
  "key23": "VKbCDAxCgGht27JkKmE5oFbwgHTpo9tVD7ajRu5dwz3bwTDbEmyytUfbiDTNmG8E4b88x5X4yL1o4PsWcpT4FPE",
  "key24": "2Tf1BGvsGTEpNfvqBWAkQ2CbxEh1Ywgn4GqkMkxtpqbdcEh5fBq1tKruXpznTVjtAGWkAb5DyJNYr33TAnqZHesP",
  "key25": "4sVASM9Nwr3cX777pw8iNXMvkYgU9PHoqnhYQVsBxMK75KhgvcbhECPfRnLJL14dW3XXqcB2rifWfLP432jHrjkv",
  "key26": "5hKPLBcgw63LVs6S3yqhkGUXUeSwomJS4VwLWGnDAAwxDHUQAsMALY5kWX24Mr2Gp25irAJjzqzjSKgiqQbErsWt",
  "key27": "XoDSGbhrcbVXuTkJ6gW5CGgriQuxDdq4QokBYLFjiub5tW1RH9BqiSxzeE9K8u61UnmeQTmeTJvHXtpppqVCVS7",
  "key28": "4g74E8isUx7x5Y9H3UtEDfw9t2FMTcPnU1HTqH2vrZH9GvyvhTYQ4fVNeBij5jzaxVLFGYWj6tyYFJEPKNYo4jvC",
  "key29": "2nYamtGnVYBAKY6LfcrdgM7oNERGiEfQNqc5yPkpf2DsB6m1pQESrwBN4btUWPBA7yzXb5ovdPx4P6MfVyJLTzKb",
  "key30": "4XXg4nP8REAq3pEvrqYTrSxniYG9qcXD7j7Qq2u9DM6RfVeZu96hLTB71tiFpphC8rRhd2aEFRcCoHakCTN6iSRr",
  "key31": "5UMVJAyHyQhrjHQSww9QX64EdNdcqPQoVi3g8Cb7mKM7pbZjLix7JHdA8sLfWH9orwFyni98wjuHXVubsUJE8cE9",
  "key32": "26rv6zhLpXtYCobMmTdkTjK3EsbbVqmuBTqGA99WYrcLAqr9TVf6ygNjHW9N3kmt2kVBg93mqaseGFuQHdg856pi",
  "key33": "5jZ7xz1EPTno1D8LfvWh8RmojJpZA5UW1vGBi1LRKVvbTdSzfdwdoGw3o1JazT1W6iUfP2FEEzr29RZRbFcy3HPw"
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
