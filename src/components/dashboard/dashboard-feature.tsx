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
    "2KxE893yrBEihWmgwhHHJBDBHebuHgeqTzq6BFjobBNzw8Gy4jSMowUxftArJZqMVLrVNUKC1YWRUBk6tx2DMLe6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UYHSg7DYq4TuNtGLcBCvYiRuwESVxpZST42YcoUNpg7ra1c132qdGVDpSiJ9yT7cwqdappEDpEFfpukPhMtBxQL",
  "key1": "Bg78GH4rXrVrwLz9fPnpnvGrZ55Cm4ZQZCADEHWPcPUdbdNGJSLzifSA8BbcjJwWftMABfMZzKKBofUf8VPp81Z",
  "key2": "y38qsdQuwC3E8b2DtfDh3hYhB91ryRzznLrNSiWBYQEb7RFHUbbuxw1VZUWMTR3LvAYS3tuCnZcLesukG7Dn6sa",
  "key3": "3DFpYhSSZL1yYvZM7rLTPN3ramVq7iEWwqVLWJDnro3e7CqPjRBzdFqSwFQ6ZYZKiqTGx5KoL8FaLz3LEnJeMHwB",
  "key4": "b2VMNmjqnoFPL49ThMVuUixKrmiE3RPLcvrcC7TnAtusNknRwQiEUUkkHUUtqxujcDHtV2temkTGbfCa6SGu1ck",
  "key5": "5WQe7dgVqhinhyZan36JcD5nKMkAVAzttt2TKdGxhLb4ZSqCaXNmZtybquSjmEG9XWjFFGYw33Fe9gNS6ps2Yd4B",
  "key6": "3YC2zc2eo9NvmZoWPxYJf1Mrvybs1QpnL1JYPuGKXMYnoVR85Gk67mxLCuj1CwEy6e5f7pgoQvaw35PaAgDwmyeS",
  "key7": "2K3uA87ThyiNQyU4mqbF4fgamsgikUpgyCJkRqt2TzazSZtMR8wFe3f28c7QygFnsYQzi4QxZFNqcm9Xj4eHW6x2",
  "key8": "3W6ctoFLGuHXMSTvFy5B2QS1tyneMXbBkDKCTDD2LHdpDA7DF7XXV9vzQye8cvLyRtxu3mdQ9ytbTKRpCvKFTb47",
  "key9": "UUssKc5oLXN5mKXi8hYKZJw75MyHpbitBL7Vv4K4RySucGftL5ethWBtX9cBC9Go9K7LRxiCkLET3twuiE5g2yg",
  "key10": "HLA5LgEK5QWtv2dNBF9foRQWQiTZs3Z6ADis2B5v6fPiYf6tiAcL2gfyCQ8NBN8PKrGFfj3g1XUmhjJSdCbYuBt",
  "key11": "Udc82xRHdgQVVEvDon8LNuqCZxzv49NtAbNxTXDEG5n8d7VAMPikW8B1EXGgRKv2aGh4Fmp2CuRneNJXoA5HAKY",
  "key12": "28xm7XQUocidURyrcAySQonXca1vyhwC1KJp5BxGVG5ShZR7S461zvKQGhe1emCeihKuR6E6qEYi3BBz2koaqdCH",
  "key13": "mKxmP85ZUt9Qvc2Uw1bs3SQZyRpK2ReMJxNFuta356PN2GDQYfeHwJyAydEBTmaUXxAjihmHfu8y3E5rschqKJU",
  "key14": "57xSGLkJFjyxte4JFrJHvQ4KRLSvs6Bmd5xvNjDJBkRdFzRQUvikzW8A9E6pSgspbU5pM4WYL5BinjRSTNqT6Z1D",
  "key15": "21S58xqNTe9uQrQ4FXnxgdTrk7Kz72iXLLaRhwTzwknh93C94BZJFHFkYofSxPMn1GWTNCwqpUGDSXjcHmHiwWBM",
  "key16": "4VzfgoGC86zs2uCvE5p9w2j2QPTohsqoVXLVCbg6tBPqshVgt4GLoe9gEJcdkTYkaWifHSd9izKZnqHiTGtZzSzV",
  "key17": "2YEeH4qYuNX3v82LsGevEK9fW5dSMoKX7Rzd22K84a4ooAt1owCY5LrvVpueavpBJwArPrcBAcRFmJKw9Xm8k1i",
  "key18": "S3bfairKdBU4hgkphTgPaZx6X4TkhscR5MmwAdskgSuiWFU6xZZCd9uHkVbh7htAtZtrVBMtXUwrGzXTwoQngpT",
  "key19": "4UpvhUsuSUTh82jQhhq9yTrSkQ7J2nP3mWJs4FGpTQdGWnNAcwwdYCAkVmhrz2EHd8KZAViBC1oUgQ6SZf7ppCvv",
  "key20": "58re5LrY32hctefY85k99uaL189ybhgtiHxRtFUikDMqUek3n7Rh18eCC7JqJ3RPrVeV6xk3rtxh2CqfbzxKxvHj",
  "key21": "2b6Ge2MUpGtqnYREUXS3XCTdvppp8iD5VdDZCqyiHBpvZCdPX5e4FjjYFN6GzjvNaoTFZvrN59oWBjLcRpaVa6y1",
  "key22": "4qPQjYBZoxAGizn7vBiwiSDygFdPv1dY99BvGEZpWU68vHfXhWqVCWZL2Dro1RFTX9KALmbjmJ7suCsBySsUD8Pu",
  "key23": "3sxLoaNsV4qAzxCS5DFNhCvqLuzYbGt3ZEkkVaKyWazszWwJNeiLMGdUqhfX5QN78kcFrMKdCmWbWemAEqRa2mZ",
  "key24": "38fnPMbd3Bn26hsTnFKxj3Q9CB6v7Ss6k9uKSuvvpvVxPZLjHqUZN55NdjXy6DhQcSVP9yPGBsWhL4D64g1ze2N4",
  "key25": "4EdMjfCu2jV49kCWLjCZ5WtUk2tanmX5JwKzudCBbGoJQaRvnTTXDxwJsZPYJF92grX3vf1ja9YCTAzHKy33sWnw",
  "key26": "3MGpF7BxsfCBp6WoC5ThXXvNZbEAUc33qVw4pnJERysYwFUnDVEbcmvdwKynz7pHVX7Cgq1diQJLZg3k5nb53rNL",
  "key27": "5BgWXBMyRAkfDBisGALoxLET5nekuWFRNAbevrr2v2ES1XwkipaM3dVjoa5UgNCWD8LonUgnQxJwe4LTHWfST7Xo",
  "key28": "65h4KyyDPNP9wLEycMPqdYtfmYqnK8CdWjkFT7XVwVoGpLzvKhukN9d8YrtLvoayCJsQhkREv1kLSsNshnbwAVoQ",
  "key29": "6grQrDf3iwtmyg7uZWZo9knVSmiyGifuEqCCjY5ngicPWxsao8DMmN64A9g6wFXKHApiEHrGKHYp3USrMoZ8rUT",
  "key30": "59MiY57RXEfer6uNQVWFWHW7ct3R8X46ZXQugh33xgxFLU8NEc6fUTnw14yfhQZQgS5sR9BDiucfuD1n2eaCqgrW"
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
