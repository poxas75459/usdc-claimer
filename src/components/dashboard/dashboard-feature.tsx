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
    "FH4mEHjRxsVzvTr2gUsn3JqVMD7r4xfnodAEsa3j7J9UThFkqbWJa9CT72BNJwY4E7u3XJwPwBHqDZEArA6rc2R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47gVZ97ryfDNyZWuMWZsxg914n4WC2w5cavF1S4pHsX43ZNw5ZjUDAVYLD9UZiqCS4FZeLCoXjziEbXiCvSiKJXN",
  "key1": "4VuW6krWk9v56C1REM7Ebh1rWd2Tq74QDd7LZyWeZLWpMpBwEyZvKK5D2aEYeVh2NTUyUcQ4pz84zLn6245VsNKX",
  "key2": "5TCERd68JSZaNpH7TpfTd7V3FU6tiFJgfvEJLid7Y1Q4U3RcCBeQxvmUZzEhP7KZdsE8ARDCAkuwosra49ZBw46d",
  "key3": "AzoHUBaL5XqqR3NBguj2m8ntLU5v3e14ADcMFNWqdEsHegzUwH7xLnXen4WuKJvD3HqFL7u7o2F1GvG7ZUYcVWf",
  "key4": "2p9ZkicFytNz9MUHCM34thhKvfAGSoWt1ZZNTeJvEfcQcpHHfoKRYSxuwaFgu1EH1ufNnXKu7UnXXkQKi7pwdvor",
  "key5": "VQNLWC5D8iFNb1nVWY57nbm3T2eQ3TjWpcGJ2PL9iCWi9gPmq6Aq7x37wLeDbUCyhuKuczCCfLr9N4cT7iokQWV",
  "key6": "3p1NpNyavk8FZsW7U35kr7ua8Ad2YzZJFUtPF1oPM2eDznx1LuESTnDUs4tYdiX7zcutWmU5T9oyRguV83GbwMEs",
  "key7": "3TfwaFXyD9i3mDhTG1FWZQGrPX2zVCPM8ERseV1iy5BPVh2UhZqCkLi5d8KZCvauKPwHzCUDSx7ArYGLE9kemeZy",
  "key8": "3bxJ2Mj9yuvF8zcDpv24PBJmG2M7kphB2Y8RC6AaPGmLvQGPwBv5Zqdc7iUYeDqBrCyhsCs8ZN4LpTcbsdu9ocri",
  "key9": "3Vmkjh9Js2Ud1C42aUNRTpgSsuvwBMyvTb8v8fXB7AYwUZnLJFCG7mVUKjqsTfMfWeqNXHBRFGJzLHwJtjaJ51Qq",
  "key10": "3sXkN8GD7ddsxJCgC2oqGCqzKwLzchYnFvpWUNgdxft2LS1nnTiV6h8AvXT1rmMofkvEeNtauWDVm7JfyR2EAZTF",
  "key11": "51uErJmjppieabthpKGPxDzmgFgxTngfL4FsYp8kE52E9gKAAxy2PzpaxUtWpRDyLiEmG3KwjdKpuHuitu3vvrvc",
  "key12": "4pP8uM2LdShv1mHpLu5M7qZ36QUJPVXpWwj1CELKY4WcjPc8jYf2vGKKZBpEetWCokjeNcC7oRknJmN4xeEBkXGp",
  "key13": "345RyQrgfVy9FrRNJjD6JcNzvWAr2hJYySeUwuTmEopLNDbwRhr8yG2hBFdkYpu8WY3gHB22YtgVDPCtjvaGzWLP",
  "key14": "wEdxCvSXzcuBjdXjWytY8DFiotbgrvhX3om1rwnCk5shFHaRAZVvg7wXWLRUbDaVbqpPGb2mbFLFQr7YDKHN22m",
  "key15": "4BH1Fhz8QeLa23i4hxk8VHPnbCqutkPP6LrSd6DH93psyvkY2xh1dyMnygnYJVxo8GrncYPnTndFzZuY6a22SwVx",
  "key16": "5RpJ6vBcU68dHFerLUsTaLxo5GYpmnSypiskRan31Sd4nKQVTmzS9uWdKc36PDBjgYZ6zFwZ8zDTkAeLrCromCqJ",
  "key17": "2f3E4bXTo78xBA5H5MN6F6Aufh9Ufs3m9RWfsWJWU4D5hUXKFTXqdp5vm52Y86g8HAEHXrJySWGSf2gw5NMaimJr",
  "key18": "3wRscAkwBADKTT3aa9ghay842m8jdnp7BeahMcVuD3hV4xRYKn8VJepchyEgJ4aNu997DZDmURKUvnQsU3wmemx6",
  "key19": "5Zj96zZpPzDykiuL9UKvmpFM2GJgDVb9efVerjgE8KZZT6ejXsE63rJHiQJzLYSpaNeKBh9p8f3RADKFpfQ3Mxnj",
  "key20": "3HDUQDL4Fk5H6SVqdFBCtLu8TDVN1jpdkiAfZdKHGNSufeDgPPJ9xZDVNiwQQDhT4yUGMxCcv3YD4Ufj5zFUFrjK",
  "key21": "4Xm2zb8bTTXJc159uNVaNvAumtMUHPfqbp5piTtFo4hDPogEguUoKFjmee3kZEnS53oWvotnL9wvEVDEwtFHfyh6",
  "key22": "5Lu3xmeJUEkAuNPHziZ38JhghUusSbU7dFwPFfKgmY7QjCbGbZCkkFygZfBfgg9ffh7M6uTz1ktepBhU8P92iztV",
  "key23": "RPDw9Mkyc7soXEPXHA3TCK8ViacfT6xSmC2AuGvb7P7cBqXoJgHXK5LXRYjZ1RzvH7BoHnYXMAr4spPZbRt6x54",
  "key24": "r8NqmzXAw8T54Kivf8sUK1ADaoeghfCREVo3ThMwBHnvGP96pW4uMwYHBHhvvP4j54rKgkrNebSdEjKQLXKqbet",
  "key25": "ymyFQuejeVaRkRTdzU3BbbQ7Mkx5xXp6WDEu8wQyycPVpaAeb4GhUfsohEqoWhDPoAeJPmuKMD2bYg1y16zTvRF",
  "key26": "5PVUnQk1Nk9kcorBPNpmRFsDfvqTrebxniUdRuWxiieEZ3YNP3g8AS7Aubm7VQcdhUT1264SHbju6vwxWZp8bH75",
  "key27": "Vhkq1i5DrNySZLH21eZYXHa4dahcuX7xVCWz2Yx93drvzRrmS1oxKke1db2b115YUbKavbBHjX3z4b2xbvTkkHM",
  "key28": "WvbdCqSpg4ksPzFpWG7xNfsEU8SkCTZr1UiRWrSyB2gEQbZC693GfheH5WhdrmfdXxiNXz9Y8wXeWDsTqPKcmXh",
  "key29": "3Rqvn2n1QW5RqWTwyXtiu6yzTMxgsqBWKZAU8LrUUwZ4eAFtsM5LyG1YsMP5QzQPT7jradNAjKuFZjFV58EyhynR",
  "key30": "4NHWY2LmUTm73WRCAYxL2jfV1Lkx9dG5SL6oCDnzKMcELoQ2imQTQTfcBG2gvbAvNbdkqwHHuHhvQ9dvjLjDYXgK",
  "key31": "5ka71X7Nqit3x1WE7CXUqYejnNujTTtwZviUegr2VmSwLwn91yL7Y2MoLpTf4r4L3Fk41HsSi38HsRmowjFhZHgZ",
  "key32": "5Ppr6XEo8Fkonp5nVxa6AxRjtoQtte8Ayd88vb3ZwvPsMWT6vdvhszGmEa8Ywrn7xCisL5KJnRqraPCnipTC2xfF"
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
