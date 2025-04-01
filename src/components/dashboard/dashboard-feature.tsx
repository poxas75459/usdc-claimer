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
    "2m4ag83wsQLh3xU2YYzWETRGiKGCSHWzrkP77pDH61LbWdSJEyAH8bsVNUHdiKT5A51DkRSH9oKYDjzUPGtrum9Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ai2d6ip2DGE4DbvchXUkiDPbA27bgRnCjVTogn7zKibGdU6ezyNTNDRWM3Y2qZ52FkrhPTGP2LdEqR1qqDcCTMQ",
  "key1": "3jhNdmk6ddp3LVHRFDoLZYwTasitMhY52QVkbjdM1bGU5bxsZDEY1cffJf4oNVDeSwmUcnxC8LpPRLrHxAGszu6S",
  "key2": "2efyjSgpV6RTxia4D1CGXsg4HAaQHz2o3HEjxuwvTGjQCw8cHBuCQdTpnCGQJapGq2Rx18fTMuartuNduaVYWSsJ",
  "key3": "66JnhK4yqQXAUhybKE2VRu1qns6QHyXLwm27Vr48KzUT5cLF31WR5C2vs9QXERAs81baNMTLUdgbLj2F9BtjoKY4",
  "key4": "fUXwnuw35Uyynyabi7cXNRu2y8V6YnAyPhhoSMfxdzibtg4MBuXyrXq9RXvDmiPr3StrouyuDn17FJumr3CrRUc",
  "key5": "2xTEfkf2i4GwwWUDEx4ZAEAwZ5H5nVXA8T7aED5j44QbYFi9HNRugKBScCWaw7H5sCD2sBVe6rD54MkE4qpsSkn4",
  "key6": "2D9FLU3DAkjhTwvVJK5yycFe2vk7D6uRCzSa422TdXhr4aHwtQVYVRbNTsa9Ej77Ckiv93iDnu6DRpeoattvVEPG",
  "key7": "4ASZgJcD7Lk2duvjmCNxbCLJZ5y2bi58rkgmxC3ppP8Z1PZTRypAS6ViUyWiSxfLdjCGQ6V6cLaqFoEtGrHoucLE",
  "key8": "3fX76Wy5wy9StTfGGqL1yaVwCqNDctp3cGJDqz6f8om9sZbKhNcUVqgkNkwTd356d9YzqjVaBH4n9hTmJcX3CzRK",
  "key9": "5CiAhGXdyes3LirGGdnqT12C3erFUpvVFqPFLVExdzBQycDFvTJVYZoGdgHxE2UqVpbCToFiqwSscRz8YUnjmqma",
  "key10": "2FKjdhkgzTha1epD9rPqT2FthHdHC1rY9pK8wT7zFcTv96bHAorjkPtkzV4rKBqJyY3rEeeukPUrAfA3eeeTDdTM",
  "key11": "41JX5ConYfRoQP82rwb6GsFPJ8bhxzj9d6JX3u2viBbXiWJajmhWxJy4xiWBuUJBUo3HPEZDu6cHPyZKfRpKrj6z",
  "key12": "4FW3HsWUEgbRaU4QSr6hAFt5AbcxtvYofNNzi52ehAC7r96EzaRKh6Pi1wTeiTcKzMgMpswG56RT9N3L19nRJKpL",
  "key13": "uAhBEjqefKzmm9BnrKKBN9hLqVniLPW5pWovg9MFQTpN8DYBKdx3PV6vcyzKGdB6hZDwFcdvkmQHh2PSZ3LVPHS",
  "key14": "2PKQa7qS9TaYSMT1aSrfhQXjfLnU94skMCricLCuCuqzMMseSA8G4xMpuuxn5xYjuMTAM7jnapmRkdBc59zT2T27",
  "key15": "5UJPMQjQ2BwcUH8MPpDqzjBsmrLbZ1ijMva4wGeyAFz5djaHPFTEA95mjscomXZuuKpWqn1uVjcSiYBzoUUG7Mrh",
  "key16": "NaBKEXTUQwfPkEd2625mdi8GTTVPirputfkAksop1Nfmgqewyd4tRY3fbkvSM48a8e2KEKeBGbKPhJfVFm69DqS",
  "key17": "2eaQ2v2Zaz8LSyscv8MyRCXQ7n16tMi8egfzvuX4gnHyQziX8ZS7NPRD4b7x8j3pWgCHRwzcd3CdUuuhKMGn7PGX",
  "key18": "2hUuEbNAgfG3QJh6WtbWKSpYdS6FBy7iWEiepycC4pArMWcZBernFbf6V5duBKHVdBoJMUMEKpbKuWTTDwHrJWQz",
  "key19": "UkBKFirfkrfqVhnHgLhyXN6soY8qAgK3rRtJW4bcjWa3enoYo8k33DDkvBzyNH8JgkNy6As4Gzg8yDH7ArUbyxn",
  "key20": "56YhorFFwYPSKgTQwoBb4HroPdRiacGbymVmzJPuygeQtHyWWi1dX5uhNJQUiQFxtA5rWrUCKGeRQZTV4sWYxoRP",
  "key21": "5Sm88BtvH7nhXuTeC3UEeoQQpqcZszd7zaW6SygjVfYG5YQLjqvwvHXtXio9zD7H8hdZAjiMJ7bwNxQk9rjNTJu4",
  "key22": "5Pwk4Ymc4fVbvXFFhSGsbmBt8EdvKLU4pJDcyCCrVz6JjrCNAVrE7juiS8wzmdcmDuAebTc3UT2pzoE9aXUDpvqN",
  "key23": "HQTc19wgcc6yKPnDKZdAqxiz4R7pHt4YyqzfPP39aQFpTtKycegmYsjvcnfpeZS5SNoGZYESBwRXf4sx3CAHVQA",
  "key24": "3uXqTRRDapA7ZhRW7ch71rpmYDfWFgEYxp5ZVYmfXyL8bLVeMKZW46EKppr6Q8Axjbfv7omZF7KF3fUDadnG8yJz"
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
