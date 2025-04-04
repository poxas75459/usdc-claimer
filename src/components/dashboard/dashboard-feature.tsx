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
    "5XZsUQTs3S2o41YKibWsRaXvna3qSdbuE98SG16sK68fAdRHjdtHGC9a6PUeCfG7Si7LSJmzqN2UwSv38auLbWMx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28XQwuG9bCB7swSGKQziH2v7ju3wJDgA3qTp8F32wKVvkhL9pwjxteHeZ1GzAC3RxuhJLXBwTskXTeSGdazoDbK4",
  "key1": "pWs3aAZaU5p6YeZdZFfbdsmKnoTWg4eeyZwtwUYbm5t7ETZJcuqRbvztJEeKGExNanqgfpckUhuXSBtX59ckvUo",
  "key2": "4tuj8wqwxkr47hC8KAQqhdnvwYtTBBxg7quc1YVQ6NfmxXcwAigD6buCoHjr9gEksFjAxTGBWfqy4vBX7NfK4ojY",
  "key3": "4hyhnNQqRphPZCanL7K9rBVxQ1TefMTrn634j4Fsi1nAgDz8dFk8MA46ZCX3DSctwQeeXc7rjMcVJV5DniDLns3n",
  "key4": "31UodePNrrfR2hhvQedhW4pNDCyscvJ2ciy7iFo9N3ndRXwV2rXtrGGTyJsYG9CZ7P54MUBbTyhKSeGuz5MfhyKc",
  "key5": "348NPxVHwfAs1xdpMtKv9ESUSr1ENqEjJAX4TtjWhPHLvrvfF7AErkgofFSzBkVViYggmmnZMBLJeUFqyiRAnXzs",
  "key6": "2CQaN3NFsXZqnkiXifSqcdmcec5HmMSScna4zgLgE35MSZEtyxC6yMJbWNidQ7Ut5MaSbbX6VjSLgdvEsHvAsC1b",
  "key7": "4iuZj24vNErKL45Qs4fmQrkzxT9DW5kcja4L6CpLNVGk5JgQAYRE4h7e7jNX2MLTcerk2Kt5YLwVG6jc8dfQBCxF",
  "key8": "4fcEKU937RQPP4QzNBEuLabvDLGs1QvMNxrEhHyMdMubYkHq6BB57bz4H8meJbUFiZJf9PbiEbohtwiynVFLxD5u",
  "key9": "2k4VTHSg87g9jRHrz9GUCmLcPRmz7xmkHLLMvPkusPpme1dySQ6hvg9FSyG38T8hYrUxQEWPLoNdXRRTheETW9Sf",
  "key10": "4QEAmHV4LoUSSPY2tzzpDF2pKXE5RC8iujLrVfNMCD8uFs1VCFRRPb6M678Gipik5YQpB8Dn93bRUtRSP5zsSm8R",
  "key11": "3nQnRHnvTR1eu3DPwWFzMZg89hsGh6T9ju4hWKcGGkkW5tg4rwjMpqYjVf4wjHXzYk7VKnmi3J6LrxADo8Ps7Ewe",
  "key12": "5sF3AkGaaaBTFLetnhuutPH6adupGPZR2TSX127ZcyTP8BvAjDAGEzoameCNKULZv6LYBwTZEa1Vc8SWGKH7Uqbo",
  "key13": "8SwkHFd6izxx64dQ4YPo3hZxbZytgEZeiXGXNVkjYpJGqDfohr6Hsyu2R7LcwGdkMhx7Ni8Wk2YNP4qCxpFxr6N",
  "key14": "4SUJAb7T9wG7671kQnKAoVWy6uadekLNCCS2M1ABaaoh4suKshBjtZNDfUAdGq1AHLdXfsP6TdAAEit1stYpNRC",
  "key15": "66dTGDivsczUovdnXWaNcQUsnhwThvwhnYpgP6yCoiGb2tjdCgYQgJxL5jRyJuG5kcnZeUbzGv4pEDvnKHeWhEsg",
  "key16": "42xgKbVCxQDrkEzYXBCPvQsaQGDy1AWKerDnbegQfNoLYZjaG49uX6VZd9SodisaKNaodanHGVV5NLondCVjKVrt",
  "key17": "42GKmBYHP7S3H7ykBNH1rFcKCyxJnQ1NLDiKJ2S3ygtpxrFL5vF3ukVyBMqVJ64pXDuEPFoX4KXFi9ohtVbzG7cF",
  "key18": "42c2QSQXczXvm6aJctBsP2ASuySynofRQHcPbNbZS3ohtgZSAY1x1af1pgYqsog3yYNoz8qFHyzzLJk8dsWnC4tQ",
  "key19": "NnxhV2PgaVxJ6ajQNh5RvRjdvgiRsmAmBgmekfE9sMuaynGKp9s1Jom2dXcYdV7tRHC7cwM9PmR3TjCBrewE161",
  "key20": "57FMo5Pw7W6gx7caAXoax4foWTPHPtJAYc36cm2BZCcgCMNihVG9JjC39xu5gkcWCCWufn95kL1mDjfY6Jax9CES",
  "key21": "5b2DbcQUQ2o4UPA2YCrz2UHpr88ybQZGHfPE7BKZggvpwkCs8HDLp5rRueySbxLziRX3tYKfwpEx498c8E4c5VCo",
  "key22": "2f6YBfuCthQyRKUvXZVHDe4RwNJJUh2EK2txYMF4Gx4xWekiqu3MXaESjo6HVVh6fovKuHs8JQKunwggVViTo7Nk",
  "key23": "34qfJCBLA3FW6zenERPkQff9fhPJXj61pLSM12oncBm7xc76JfqaoBvaKP24VYhj9Mb1Cuo6aFtHgNj7xCbPtjhv",
  "key24": "2oC7SkdyhQrWLD8vRCs2Fkb6knx5ZgVW3cK4JZCtPZVYRidaBmy6AFoqB9PJcQLfqaTuENGDpkPi2hAkwVESp9w7",
  "key25": "41A4Whk8ATi6WfzSNNwxRDnG4ynBrfkfSdsXU69BQPAXP71LxJBTHAoGGDapMJJwLWERF47hMMLryycqZEq6q6Fv",
  "key26": "2UjeBXh84zNoi75VVTo9DhZFjyQLquMnV4LnxryzVDS5pQVZ6bWxv7dsXS2zapBMPegiTmMiCBGmV9btKW3guJaM",
  "key27": "4MXnJzDSmNBf3kbJQCREAL9NAazrDp15xtKkrqyj1miQEGvhgoDEPWyxxS4nx834KpVt81gEFszmMLhNiXTXdcXi",
  "key28": "5m1MN2QWyb25aPkdCrGDi27eemmJ3RjjzdrTkrVRYByu7WLCYWSQxGTEMqujnMJNCZQMmtWRDQBtZuS9Uy2pvFmS",
  "key29": "2WYgcBuyRdndMkWF11TCGtbtUB9vVVmZdmNbUvDuXiaUir3he9Vash8PwMXXR8epyhus5JBcDNdyVrZec2cV7cyP"
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
