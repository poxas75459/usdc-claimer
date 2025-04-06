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
    "rK4PU7Snf8SBipGsYFWK5qdW3SkprZP19gkM5tDYZqvrj9xcKUZZcF14m8nmxd6oPwNps8bPoFj7ajuPfUF2RK7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5izNPbFLf5SM6Fuo6ditREVtg3FL5NUyPofv6PH9tNim7jkb7tEAA6YiVu8BWpMsb2THt8vcmZdNAjSgcZjnVKkp",
  "key1": "2Lnou8vPSgmZZTasS1WRZhHWroTjzx9dzY3zx9z66pdZwreSYQxACuM9nwZqT1idJWngHDfbhxSgo64A6przheWC",
  "key2": "aAzmfr79w3CXUpTiSQVCSwtxobz5gcXUje3e78DdkyJV9yLguk9YBuU67UBW4kEWj4RYWXdr5hHRvDbN4e74EMW",
  "key3": "4NBbh32SQ5jrqsYKXVe9SSKhg4SHfxEFc1kpvVEkCvVd3DBPQXGZSkuQjaKf7K8Kw88xphYQUFzAC4Ebv6tTGCks",
  "key4": "5cnRsPiyb49YujPMyUTk5obaYimguJHLfMADk5fF3u6Jg71Phgp2nUfWgUa9TGYmxBFT2jgS3WmFZ6LTvEBMS22n",
  "key5": "3nxf3sQW9YxTjB6FfQ1Xfg6V5PXaqq1aQ991b7tmjpWqfFdVvwsGxJqYse3jCRA9NhND5ic8hVeWMuQ3YZXmKYfT",
  "key6": "3vgRKoetgGMDLcoLugokU4FFNVbrGiXo1LaSWYvjUYvC1y1fvMpDs8THnV8Lk1BT9AwjmYdegV74xr18cRtwYB2g",
  "key7": "66DT5csCgDvH4DPyGWeR2XELbAwvsFr7KNW5LPtNvV6xWivD8JUM4Pted3R5FLQWW6rLG4siL8SRjM9qQosiXv3b",
  "key8": "AeaV2SnSXBHebo1omCvBohtDZnWRKybSzjGcXswDLXF8Yn9ja1CkLgPqQegGYh18JkU9TXjgHWsHEvSpFqHjAeH",
  "key9": "5oqwPYE88SBuEa2TUioa26LXFjdbfkyFLEGnSPsdgFmKArMgzWwSHwsDrajEUcPAxCDbGUD3u65AYCPDNuQs62me",
  "key10": "493bQAMtFCmxxKR473k4QZbBxaFs5GnzivzM7P2qAYNJUip7Q2cD9vMVQePznFgpT1AfVsfa9XX95AMd8pY3r7Rw",
  "key11": "4jY9wPXWof81XSuC1FgPcDj2ZcBNoPRbW4DLyfzbtCdXUiLrNyPxvT2DxUKANoJGkMLUdQjDRTsSMJmmoxs12WkJ",
  "key12": "wxjS1BviJazFTVeP3czgmdHknHqncJpVS5cuJYMSEdjo49CKJnKBhYYPxcgKYcb5Us5kYnhbZR1MGpUna38JWBV",
  "key13": "4z8Ytpci8MVK6ZkzKUNMyQkytB1DfU4X4TuhLZ2xa9fozmXzQhVMZprM1ZAEMBVHAHu6otexN4PBLf6h7wur7m3z",
  "key14": "2iUG2FDphsf3KuqXSvQWoQM749zvWxFQMcbekmLwNhcKMMm5WDhbcafnMuspFXc3GWhpiPwtDYH2A1DzkEDhPwes",
  "key15": "2GRM9adY8trnBgJA9DpcyUyj3sfbVRypwNBP3TwuNTMePZSPzmyPnUVzmFaB2q91KMfDmwneMwywnVDYacktJHQt",
  "key16": "2u5Qmj5RkJBMEm8rewDs5QoQm7WGtRVp9EGPKj3QMmNKSNebo4Lw5MnAwJ8MF6X8CuhzF38cauavExtU1sA9qnb4",
  "key17": "4Rk7GpnYiBk9z3Nt8heNeDjfuv1t94xiLQPMQ7jJYgKKR5A9Vjbfo77o3Z4KBg62YjRZ3xXhGUEnHv5MXwsEWn8F",
  "key18": "2XmRAkFLYf2mD4DeHgw4DSn9FDtE1KqdSayA2uhEi9dxkzPhkbx63ayxJayVCGkqcNV5j5VPMinAhCEAhW97CVT8",
  "key19": "2JBXWjvfUrNmS1YQ2FU73Ebvryf9nUGp5R6VNpvDcwtc972amhjgKaJN16rS62jNvDvjpoiueqZ3HJ94YLTDZ6iL",
  "key20": "2gTRvvTX6SSwDeHeieH5Rb9kqhLWg1hVbwasojPcvhAgMjpwnEKDtyEGbcbLfr3BUCJHegM3a1dPvDoNXgmDqM4w",
  "key21": "k6MVqL6r4dKtZKokGhMiVftM9V9ecfDJKpDMQiG6DFJiSUJ74oz38dwY7vBwqmQmjs6SC5pW2tTnwFZjTBhN811",
  "key22": "3h3h5F1zHzpBTBYBG4TzG8UwE9AeFxC8Ed8rbTfz2SD4Gwcba7ru7SAkGxzu1r2PNymKLCfwUDS1YmyKJN6eC7P2",
  "key23": "445tyxpw6yWX6VmP2kT5uCwXZEGsGRoVZA1nY6qGe6VjbgQHQHvAjczg9je1gVSZQh8LEyaPoEC9j5vass2RnH3c",
  "key24": "3XAiswwsWsvGLsW1M6nuXQaUumK2sL4Qx5ka6tYXdxYpZNPo4WAMdq1hqYmLSdRmjypfDdWdmkXkMVdqNzJy8F8T",
  "key25": "49ZwuVgdJhPx14MoaoAcYdFqkvMkQa957jnGF67csswb7vrZKXRekLv3TxaUjKvcXqtMfm2TgBLj8B3kZPF73cKY",
  "key26": "5vaVL2ycpaYtJ3ws7EpBh1t22kE7uhxaLAXRT5SBdpcQsxt3NSfSYYUz6AmZjxNACg1BAVxkf2XHc4tNcjuStzKX"
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
