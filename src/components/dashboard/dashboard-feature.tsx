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
    "4EMrx5TiWmAkuHNsgWfgPUpaQoRuStE1RBkMC7YsaFG9wHXUGwGm3nrNF8x1FQe2RXURoqo44j5wLEzL92EgS19a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53Cttcd5ohmkfkSQtLws8vqrfa4FKcWzfmZxkcSKEFwKism4tXdzSv3UzVTnnXooU4FfXYw7q8Te4VGy4HGo7Dp4",
  "key1": "4eCUBamK6Ys3eVbbQoGjp5ZH2Qi1ySNYuiE59hvTnZkty2WBUtxkqmXf2LUpRLkEGufvAVBy1E968Yf2GHffecCB",
  "key2": "3sGU7pnSH6XjGqZm9Gki3XciRWwbrjnYtnj926B7RaBmaNrYV3MT4FqyfDJQKTKbg13WT5pmCXVbQbT3Ybe8aTnA",
  "key3": "Eo2uvbwUpm2AABMqYziuJZ211ZNoALHBG53RFCXUrrbfYba5jA9JSVgSZAcbCnmSPcm4QzvJBopUmiNdXP7Ubse",
  "key4": "3aUZguxYzzh3LdynKtpEzjPFcwJ4keJEHYs2E2s3g7U8T8ARtHsPMZYYKuA22AoHhcmCmWuuUN6yr1NqDsksvLhc",
  "key5": "MdCrNKKsYsvrg8pTotEKcNKrAcPvDcRUdkdYcLPU5mV9SH8LEH5jeVw1xoQhdyMkvDoogbb3Cb9w64f8KGJymVX",
  "key6": "4aguXBfxDPSAKN4biBUPr1vLPsgm3BKH2xHWS9Xh6iLkgbXb88gwXxjhTnLiEkwcm9wpCBHbmN5kwRmY15gARAcA",
  "key7": "22A3cvS2McW7VNFwvFoS63udefFnFt5cEoXht92EQGa2DVWwsTVWaaY3oEgZCk6mm5DeJNhzhSuEYgTvk3SfLajF",
  "key8": "vyQjqJvFMw4yqgAfJcJtN4Qt9A7Ui6ewV5s9ZhoNc6EmSEd7dbbcT9udwEKrDgMDngKThj3brz2MVwSs5LQy68t",
  "key9": "49DRryu3Jyn9MbTkKUUQj5cxKC96NUPm8S72jXRWT9x5SaDgC4HWccshPFqpasURnAUTy45adnojKhpFQ229e3h",
  "key10": "DZL2qtXJug5Gj9Pqsp5Up3fftYKv7HJsyPX6zHpAZLmpX7VqxveXoFbY9M2Asu6WHYqmYwBBrfydjqYVQwPPzmr",
  "key11": "5Y1LsKiFfpSHMAC8pt83zWdXCe9x1KKTCfZ4EHqUDCrCLyhxqFP61XsaM7214NTo72WJQKqfJrD9xNMuHUs4az9h",
  "key12": "4FfS82jdvexXe898eyMML9bawsSsa4eqUeP1bVkUXeQS7fXgCWHkbsFBmwf7g7VgkaCho8ND62xLpML8ZLW5J4CD",
  "key13": "3S3qpxtNeVf4iyr2tbdekJLtC75giSNMhiZLixMHBQH7MonL5iU9q1hsnPwgySLPgqaet7iGYwzaQDky2kgHngMi",
  "key14": "2fGnLWskHrhPG49tBhJyXtKourBqHBYYM15uqBf2vsLXdAmtgFNKwYFNTQ3k2eWUb7pHbmcq4wqfomVAzn8LVGN9",
  "key15": "5r1YvQemNxykxoHN1X2kSgQAvfjRqP8hZeeYNzcmybF5UAwbcepRkLwrbCPLWYcHJfiGYXy4cmpMzFcUyv39eWw3",
  "key16": "PVuH91ESpsH7Ud5cC7VsPw4KzxJerw21P11BF5MUoYPZeEamFqh2HHAiWARMaLbVkLuoXnHdZYKCTXYoKt71wv1",
  "key17": "2upWLj54EdCy5KbPwrh5rNBNqaupeWMRkUcHDzXiV38hZ1RQUJXbiZbgTrH3UXEp75snxaHyGmzt6PGwhbLaoqdw",
  "key18": "5LhTQByf9dd4Dj6BnV2wruUpCpWPg7N32ddrwE611qTNupkoXYD78m2yonnn3p77v8SB9uUBcQm9LZSWawu6AKDn",
  "key19": "347xTwCWDbN5t9MvrSfJ6kJ8aoZTfEi4gx3NFrtkZnpsdKwYDCHXCka2tr5bTj8pRwvdoCPypyY2QL5YX56eqUsC",
  "key20": "5nt1x6HZuviK11ga56vosbYQdPMzdYnTt5gKRgasuwcS1oYAF3kxk383dRemyuCu8uLhFW7zgmTrQYnK9QaxywWu",
  "key21": "4sGrGzAzB9qXnAnqVByvtRNertKWhhjFT7qhiyPeiC87nFn1w4UKq4XdZZMz8V5Xk1JkvuXq2nwEtWRZ7YhQjqYS",
  "key22": "5GnED32aKsgYhJgkMSthZCX55yBinP8ghqjBUdHqgnESYmiQRnpoZSNcjaPErgE7JkQqyTuAmvTD9yU19ZyDVTpm",
  "key23": "2epnBkk81HDtYmqzQuyK32sb6tmaDtVxLv1qr2aGYWtnm7ySJNpwUpqCNNJp1TaNhYncbJV5XoVJuyoYSa8DmzHa",
  "key24": "5gAwHUkw4a97JAjfPKxKy4fUt9g9yyrRAphUtcXAU3tqRk271onBuhKEDY9sJesUDDLCEcDMdmTKUVF6SeYJicxm",
  "key25": "3PGopHHimRehvNwWdcsxt8vsfB38svTXvq2jiyUhzMmpd6WXtwcY6rD6WE4Esq4H7UvBsFQaS3Rzs6om6TStZagj",
  "key26": "HyEWnxYYA7rvXsTwK5uM1mbRPjLhBb9utXzJRdUo8i3tW7pzN6MAZMSqeuyCHe5yE1WJxSvnCcuWcjH6a4LmByC",
  "key27": "3zRG76a2S6KqopWe9CV89eez6gC1rMm2RRA7K4s5cfiYkWDyC4obxuMjxq5WMxWi7j1RZRKWKru4qXszswLhakEQ",
  "key28": "64NXu2E9dJQu9FkaiqzYHJN5vaUe4ksEQoWb4zopdUw1UWuA9Pq6uUgXNmKMzJek8KDMd8GmoYh4sH9CV32rWPgZ",
  "key29": "3cYcJKN7umdxeWgu3Sfu5dLm9YbktBViE1sjue5ouUjus3HPf7jG2u8bDtGtftScwYHuaTEBQ4ZERYfHExJMAKY1",
  "key30": "5NBsGfuVNnD21BtVybypX2HcGsCp7Y8Y9eAr851gSvPHYRtsQgnqfnoa5mDCtPt8CzwrJgH5TJs3n7HmQpFQCEAn",
  "key31": "2ecGz4LUWHCcTfxSHsskSBRGq8RUkgWowe78a7cEc62G5XR7JwBdVFskeTxWNPpWQgeQNjBQFb7axHxvU22D74WX",
  "key32": "59Kv5PV37uup9togCBnwAB2UJoCz4F9LQHEVoPhGSi9nPdKJo4pLM1RwxFW41sSVEJQa7WR7Mzr5Lwbv7hkx8QnM",
  "key33": "4W92UdAwTBz6gH62hv2sKSKwCaJYivwtxru1Czx6soi8AxVx6G766TPPuLz3DYw4yNLJLVrGprqqoWYaLckwahTZ"
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
