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
    "3EkJgvxdbXHASWnQhK7wXMKYCxJEvq8eoHYoDGSGHKQNyKc85zkUsSHhCajSf7xfMvapxgoKVGRNabmFUjfARNMf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FAdo4NDvnej7xecyHsjH8dxcpGzmkm3ufdyGncStwwP4dDABzopWvJnKyeK4jcsYw27GJ42hLv6Yib8mwLV1Rsj",
  "key1": "3NxK1JRQpWW2j6mu4E5SPo7ajNmTLXcMvpLBmcu9fUvW2bN2a19RfW5kpLKjj7YsfQD9ogSn2hkcTymuVH9WVtg3",
  "key2": "jN7Qtv9cVJgW5Ri6n9w5xxJJHVxn6k946ryXj1tXF4vcau5E6eNbHD5rd5QsHPHnQiYA1jGMaVAFBMyLk56oKa1",
  "key3": "MdQnkWCcGSjrdRc8fyQMvQHdpvBq33QyFjjhq7uyNPvGtoHoKNvxHHvJza3hVX8UqqcRLjoEStt5wEkGJKZ57a6",
  "key4": "3u4oJSRGKXiQ5sm6iP2UovgXjNcAJPLEUip91dPMLzcZCY8dNBg8Z4frqmTtXCGhScW64jfbSZbovudEZVYznTQa",
  "key5": "5ZAhk3y4ycLKX1PpGQiwGdZH3AGAWULDYgDcmdPvAeb8RXcLsG5HPdV2cwEjES65TXo4drMuWXmQsA51D3fdFfM3",
  "key6": "5B51buzcT4vA7qRzQmxwhzhfJb3eEfa7uMceHu7WjNpY7grYQLXF5g4saFejPMwKabwdtgTL47DREQUHLba9xJQ5",
  "key7": "3yGkdrF8wskqpeHbFbnMMaFC1pjLkG5uMsmHseAKJVYwNVsGFq2GyMPTv4DX1N94oYgCL6JFJ8V3u8wcXs4CHe3v",
  "key8": "54nVbuqRX1GrLdBFBKbKK14xgALWcEQwaUodriWJoRD4iY1Bq26wiRM8Ym1e7xiKkZzDbjzaLztQTev1pnPTMXKt",
  "key9": "5drZK17sarpL6urYHKaxqvLrHzPMsGpaRpvPdCN2zL75VXD7TbJW37JpZwLxjFJsbcYg85wEjPEphVhoUjXrZgB8",
  "key10": "5QAjXUSvp2W2PhAnBEQek8WM9NPVxjA4KuNx21bBo5B39VMpvdfPc1Yw9a7Kmheqw6LQAVzjXhGPMoLXnC9ZCvvH",
  "key11": "2yR9xTsuzfA7uVcZYdfiFpKYwGeiJBeLJL7tZPtmXnPxVNuHcdfL8k7235VkRGpYSr9XXamkYBzJ1ct4AGEQ9fUx",
  "key12": "5DBvVsMtXno6GUyd6jsGcFFgMyhUctEYJLW4xYhVYGp76pLN4gGAAPggktxPxoDN6aF6U7hxm3Q8x8srCiu7UaSy",
  "key13": "5NZh9wwNsVqXt3RhRUuZv6mZTrfSsHtUnUhpvWcEnwaFjZAQSRibTABVp9y1T3UREKtRYH5FmSknuvRLnfP42huR",
  "key14": "9daVgRzsPS2knEwUJkD25S26grEysE18X2puTXhsK4pcy8zqu7iYvvF91ewKoNYkYsH4f9uME91NPmZY2pEZr2z",
  "key15": "3xF6natyurSgiEVqrnNWvpaKF31f2yv5jxfEPNtVVgUcoVCq4iCcJ7RgH5Fgum1pkbW76itw4r2GQwGNupVQhkQY",
  "key16": "5MvNJJ7XNkisbPPMaFiycnyBTCM6MJLHiWzZnzVHEPMyyb64D1qAoWQ9nZma7gYUpMK9dic46YK8ThozYH85j2Ai",
  "key17": "56McDNxjjRaaQsbFH92fEE8tRzSZnz5zapsNch3r3fqbEEnEZgHD4rNMrFtT6DVZDnaT4MfZMPJv6N97qUKnafdd",
  "key18": "2jFajrj682PbsJxjLdRJe8siLCM9iXM4ki9iAa5tArd54CMDQ5YN1m41moUywECE579eGVBGoJZr6DhnfRkHobNh",
  "key19": "jQJqVo72X6MMm2ESuZpa17CzKjFcwnZfsKcrF7EDrzRajGja46cDiS4KvxBaNXwoWLrrR1dWzyS5jzx6fAHZSYD",
  "key20": "21XAuNPf5nhjZUm8KzioWdS6698jLMKt6L3oVAwA67KpxbrygaSwRycTyibZmvbMYijRep8mWjXTR7srV9YM1dKB",
  "key21": "5r1sNhDDzhB8jDKAzxzPGEq93ziwyPwJse2aU8SH3krFy95PYppLTgjJyL819rYETZsoWe6HnGZSe1YWVpTXyg62",
  "key22": "3vsxPRwMNZMT7M1nboTQchFqvpqJcrMBFQVTTmSRB9gb1fiWrVVumVGSVmCU5FN4BMdaY8sDkJCCnXWQfv9WsfiC",
  "key23": "AxoAUVtEBQqtL6NKNXqwKejbUMMBgkFMWQdA7sa7aeqrQ5jmaMqirXMMzPSdN5ZYehiHeWZJWohzuAUT6C92kfx",
  "key24": "2Aowt56C9PSyY1SUGQLSMsWCX6mbAEsg5uqxCUQP6zttWxNF9XemHdkiNY4fKm6Pvoqj9yuYLJWpzuzMqHGkijPC",
  "key25": "2nxP5fJuZ3L1rc2KszNMoibUewEBuwb8pMxX3H81wG6SGyNBhgpLxFFDWZusS1cMzmrvkGgGmdGF3bANwxrZhSA8",
  "key26": "2UdnAJMjUxhg8HiK51LvpyMpfK7weWDfqEdJfE21h5i62qqrbaWToBsbroEbNdQZ8dBLct3Gt9Qm28NHBNMqufyH",
  "key27": "5u1fv7HGsxZojU1oVFkYZsgrZGVctEszLgVYz6LLUpDFPkcnPjy6nK9gUo6QCDCzoDaEBMa9FToDWvUE6y6jznmg",
  "key28": "34UNKxai9RJg7eM68RQCpGMxpL6XrtJVVQMLWDqH5qNu8NcmtnvcFC9NW3eCi9dFcRBUFhZtHLsMBeZGiVSUjzpW",
  "key29": "ZJjTadBXACN94zAE8vjq2mUg71A8rmT6sx672XF2GD1SHERC5nwB47qYcyRA6d8mtaa6MaeqpBpF6w5u7yGGgND",
  "key30": "4xVecxXtaKSwPwtmvFmyc4jYsuRC6P3pTaCq5PezGL5keGokXrUNNMD4c7qV1yedY43hjpBKEGt18u6RRHUBpb1e",
  "key31": "UmJLrhKmc8wuCqKLtEdLnoq8tdZ6DQfRbSFSguyqEGSQfxMgGLgQGMVQ8gA8xvscj42v4t82xroMmkHUyP9LfAa",
  "key32": "2qbCr1ehBkkjkkRBLzhoZgCf4TTqXt2N7yksrE7qMzMHpqwpD8YBZhPvp9Q7zaHfGjjrNcBHUWFXFtAbeke3G6Su",
  "key33": "5N2tHD99DBPChjq4GjnJEC8s5tEfu625jn8uZZkFnHdh8MHeHdyhctrPhGNofEMgGwQS74bGuJm4v2f85QgAkU9u",
  "key34": "5yZ7SGmtMF5aYhvzygKzyftxoD2YweQHj7YdBPWbjMCqaCYALdo24jzNPVL29wUwSkUGKdyxhCLEFoTb73TcFtd5",
  "key35": "sZnkCP13Xzy2WtBYCviuCrPEApz2U6LzmQwvfXoY2HF4rjAgmKKG2qUVXQcNhBXrRjhAynP2ff6RWpsQLB5kaVS",
  "key36": "JG7v6it68DooZELDd8EGf8VKCbzZok4AtEVneA6NKEb2WRp6yiEGibBvrGA4QGWuSkzUzWnNMqX5E3ivmUj3M1u",
  "key37": "5fQMLqgfw2wGLze2uhdHSCpJPrxEvENZD8nq9VhDaBmFXwWUkiL39Xw6yRw81Nx5G1RZY4uBNLPppBLR74Em6E1a",
  "key38": "3UHnXnSXmQPG9woBpN9cjjYDdJcENasAgjWAG545Stzwa7kZzLTBnyHMHV79SS6rswRk4stLsviSmycCR5yqco2x",
  "key39": "2fEF1du3byfonHyyPS43YkJr5sJ8Yd4wYPNAnXGDiXVGPrXpM67edVJy9tvNmqKR9Dnt49oDWxqpJS94f36HmGXy",
  "key40": "3a8595mG8QG8E9K5B7Wf9NAg4nTG9VSYsrMo2bA3df35HQhiqwugHeYgd3ekRWWDHZ17LMFprxXrMaHy7e1G3yjN",
  "key41": "63XhPuKyYhKcjeP8exMGz4hcw682qJAD8iMCMNFhzGrAUftu5iQi5AVdvPwMSJ6gdk4dxqUzkgHiGuDXpfmSpyC3",
  "key42": "3rJwDaoymYfrFeaas3JmjvFx7Tq8zZHgLJTPBGCJCtvP3ee95VBnjimSiFA9KCp7VkrcKx9Ce7BXHcTGHX2FtGbR",
  "key43": "3VRf46cBfmXtNo9DiGCJ1YSPFZLAjySxAWeWCMgczTiiMKvWrB65KW85e7iDUBRk8RyU3KXxdnU2ishu6abYXZkX",
  "key44": "3qv9XP4wLajVpkoKZkeHn66WqQD8LyTVxuiu8xnLdm8y6w6rMfXraVVJAwxU8vM2W9CFNXSMuUHiGsSmoaaDoCX7",
  "key45": "41oAHLSrLNcwr8dU9hL5WHzLUaYfP6GnausBdA2jqDFs87SZ5pza5E8Kh3ySvEUTA6v2ToHo2Be5URPXpmFFDScb",
  "key46": "5rEsYgSSd6yy7ndCW1XYBebDv13PF6AYHQekcY1xZKHGrfhUGDhPYLLk7mCrHNrsiEnjyu4wytup9CGBM93B6tLq",
  "key47": "5bg4L7cvPmwVZhXJ85emefjBDzGT1pahHGKM36x5c3cTa8FhM7X4zA8w9dWmjXfYULSV1snb8pAYMn5YbN5tTZop"
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
