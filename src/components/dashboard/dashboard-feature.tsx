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
    "3s1gWqrv7FyEvkfNM9zrANeZKxE37ACfmD2asvffN1vPrEHTt2eW7GafZDHqxqGM7knmeHdMoKWveofx7pqy1iJh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KN1NRxSP9kGoBump8W9ssx5kWhNBndmMY5oGTEfbunjZmhzioTvoTVa8VHjsazvyACqgyJUsgq1hWvPoDFwv5dg",
  "key1": "3mvUo5dHk7WxX65f4GrGDp4n4BSQHgjjFNYCXLMdukW9qoBfjjFX4ANUdsvb8nEdDK4kNN5KtEvsJfLZvWLLDAVq",
  "key2": "UhJbsdryjrCYzg4epvHxEX27VZqYEsMCLx5UWs6E5ek61PY5vqK39CShNDK5KkzEZUCbyN2RjbvZydF1FeFzLjb",
  "key3": "5WX5WRCEusP7EwN2x8WCsqtEK619xPUrumg3XfPHwSSmwfBtGT7vAfwpjoqZNos58HPxBcng9L8UET6XLjW4fb51",
  "key4": "3rpPwajaWivSoyrpwkxorEUF3MaNb6BQHq3cvU3GSzeaXEHoLcWzbVCrPhn3UakRrfmzXucTN7uz5kGRosBGFYzC",
  "key5": "UbXHBqH65tcEjdL4YJSy5n6kynqsDsn5FdYpDEUo3JGBWcE4kBBZqaVTNBNAhBpfwTvx4iMaGGEMmCCTs3usu5s",
  "key6": "4VemV3DQ5kFB2QcD8aaiyuUaRo9Lz5ygGfKPAXE9p64TfNm3usUPw7gRaaVmNAYjp1mqjx89ro7k5iJwqxhaLX4f",
  "key7": "2197VdZVWVQge7m2Mdf7433xWpuyPe9H5vBdDfk5ZRsh7UMYGtaJXw7tmFkZwQnLFrUNVSbZzJymdHEttih4H5mx",
  "key8": "4aHP4nKaK3QUe7SGnZTxW9PAgpntbMspu3G6YLgt4qAU7RFEcWmoii38yDeux4of8cskLqGzbCE76zc5nmSwZGxz",
  "key9": "2Wm9j2o2gajmdWhSQafEwgG2em5TwTR6G8jg73ce2fbe88KuVcK5yy5RumhdeEH28uAqmJCEKHNM4ZejgJ3BjEEw",
  "key10": "5C1FA8xrmCJno1qDP3qiqY7RfgaXW74FZ47zGkFnvGLviLCy4bCn7UEMchSmhcpSV6e2sq9BRCMAqiKrNzgA7vyN",
  "key11": "4cH6wb7FkA5qeZfcgeUDPCCQav768aENx1Hok1GLdKje24xe8Nw1JryHi7emfBx8d5S3PxZ7FpjcrEBxrxpkT29Y",
  "key12": "3a9n8amTiioAXXL3B4xjAJbogdL9BA3yXA6B76bz3wZ7Kfs29zNWwDhbS5apw9wPJxoKGJyDiuPP5Jg2jqUGaFcV",
  "key13": "4V9P9mCHfp9SckgK9NCxpAuidbnNHTGFHDavnb47p1aYPzvHYsyG4RBW9Mj5ePtEPVkpj8z9vWV4baKeaTTp8P4w",
  "key14": "4SMXWG37sBqu4dskqfgEXFbrXqA1mXrFdsrS3no1iFbbDccqUrmeTJ7KYWKyzgkTN822PgpfAkSZUgS62uUztDmn",
  "key15": "2BmZT5L1y1LXr1hisPCCE7M6FSwfvQgALrTzzbfwzq1Ap3M3ApcDMULgBHTrog1uVFw9bmcqobqADL5U76j8WK6f",
  "key16": "5ERzWax2ND6peY94uGLhJH2M6mS6AqSxHa2Xk9ot1NcoqExGXvdz4JmwXa3GxnBk57qjT1sAJHHC7byHYWMTWVVe",
  "key17": "4GSpQFhCagtuUMS3cEpSd4fS5hRQuVWkLdAAd9qv1FrTVXcpViagNHAJdF3AQWL36EpjdLNEgu2128TczP4Bfcrw",
  "key18": "4WDU54V93DykmRTkg4FxDWQq7jDvaS69cH8pHeNUohd9TMWNSht9n5DqiickCwE4LoUky7zv7eX4D3Cbu9ULGYY1",
  "key19": "8Q3y4yDq1WvdVxuAdehzAzZ5aWwpMLw1djWhNtLob8CAv5jn9gJWqsZd1fzdM8MiJ7TBg3wcP6Dxze3MxytadWq",
  "key20": "4jfafxcCMccs57MJqaJ9bS6pRFE3hLRRn6TSv1A1WSzQ7wgo4KTwxEAQDx1ZAP6gsZQ4nzPaPy4dYdmqpw8ZqGZU",
  "key21": "2VGDThVmb8JDb1xDcP3nQSTtFJeoLrpZ7DrraYzJVjDHt7QuQ9Y7JjjrxJC17kez8prHrLoibdgPykcp3RT1vhqJ",
  "key22": "571PR8gFKtbJw7bBrPkUoZq1KxJsUgTnALw5qTaEDwipAvMETnZqf3fpjWH9YfBNFhvVZr8Ravui7JykcVKP2CXF",
  "key23": "4phAkm83cH1vwztAQx8rp5b5SKBKLeWbivWnESJ91oqC5vxD6iAh9xKMPDMAGVAku61NXHVsiaZp9MUPJKC13eUE",
  "key24": "2jvbdWa79cpSLMpu9qczz5NH919vUCmrE6EcDc65pejjwAAvj3DafA5SibjCD1kFxZsYSgbHn2MVipA8R6JHFLao",
  "key25": "2t8AUB1NggUaUpUm85Q1DwEDXpPq67hyBQee7UMzgULhRCyyEYKMTZZKPqLEJtUCpC5ap8JzRyEf8u4gP47xXgGr",
  "key26": "RUDN9qQwtXwSDEz5ZEedYNjkeekVUssYuDVUGYzc2uMWmUtoJvXiGkVLvM1XU2FZLne1ooqypUgWuYhpmyBSeYL",
  "key27": "22QAfaG1DXneZcLpzzK1jUCqnk1ce8yQQbJ2iKPqgDGtnChcd9mCoLDJHEctcxNE8AHYBGkfmZxVywMYegt3paP8",
  "key28": "62yR4hzyp9reWv1yWYgymBrKot3bYYcMcRK2oS5RpfMumBJxSSLW4E1too8xxyxieVoe2RbqMfJJyAdJiv6rneGy"
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
