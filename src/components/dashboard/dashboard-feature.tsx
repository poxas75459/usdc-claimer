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
    "59cN4JwP89hzXkLVdWLJVWe83zfeuGt4eyvTvVtxSRADuvJSc16ozGpbmwLiCAyR9pmmv4meprMH5kVxo5UXRyyC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43H4tKqAYWiw7X2qJh9AsoJdfe7EJv9ZD68GKzpezTTGPVBPx2741xxGAHVi491NcoYuUTbxu4DYE568k2q5uvvm",
  "key1": "BBcJzfE6TH4ghc4eC3FefyWrcufZmikuDyj5dpeLzjBD6qwqt1kkDw6X1ELp5wWK95bUVA27pvhnHRkQf2Eybko",
  "key2": "4DyFL5rtsgbNi3VHHUxLVVv1ugWaPgBgeGJ9A2S1nYe6ioDTimPqCEnbWTioSj9pR2MNqrmarzQgKUZpxQjBjgTu",
  "key3": "agJ1EXGuT5DFuPXBzKqAW7R6ihxSdJ98VQ2QdwTYoH2qBUFuEGYicr79jshm2xKJZhomgaPKcDZH39ja2EGiMbr",
  "key4": "Ey2HjbYiixdBcVaGvDq5C4eJcDdXCHsXPZYWRfJi3BBJHyzYmYdj8bgDxLMnJyR5De6hYK5z6c24DxRZKmtp2wz",
  "key5": "3rXJnBQaBKjzJ2JhxKeabNGEtiP3j973NovzPh2zHVk5C8LHmc4gDoMLeTNAKx3kXg6M6gSQx2x8Lm5HbmAbmUXD",
  "key6": "5d1T7dD8XyN34mARgLo2kuc4LyE4ym7zxwgdsThPBmdT7CzdyhEk8KdHGgXLcCgPrAkv72x2DXgCcTUJhWWd7Ka8",
  "key7": "4MnBTE1kUKgfHL991kLuV7e5mRCJtw9AJnP5HcMfd8uGzpq13YoYZBdAm1WUbQDRZv9GvKXS5VKDge4mXbbafjUp",
  "key8": "mwyc5BntrceCn48qTaZm4ioXMByBRyMgE2MYFyRmvyem5tUjx7gx3wVyoLLrabV66doz5YkQQTsoPERvvVgkdsW",
  "key9": "rM2m7k7119d22vGdcd8LYwYE7qCHrFaDoufAayRu5zjVGjSeFpY6sfbUt9JGXXySbaaZFkAGqyLzr5QGTp8Y2Mk",
  "key10": "4geEKk5XEDrk6zarPEXMpy1vHMCpNAJntx6oCV6BsDxGJT8oFQu4EY5anh7HCQeBLhh6T67SGJbpH5bfQF7wmGec",
  "key11": "4NJkYU8qmFeNEZWCZjtaqpfV52XBk9SAuiZQijJnctiXBMiu3MMFMCdk3BsDHFXg57cwtdQ6ktkQRnQHQ5jgJqM5",
  "key12": "4gYgxG6CmAcLxR3efDgfJrPHP2N78qnyjutKod6ESQiAju8EDafZxNd9xDBEZawmTV6Ui3hB76DYVGdv9bhNZFie",
  "key13": "zgacw4fzrMRWLrujPR6wCtBpBAv6QsW55J4pTTKftWnhSxeedXhDUL3jBmbMbhJA1f27AMC7m94ZkkPiwpPPGxx",
  "key14": "38QR91DicwdB7njzLQBa7NCqMBs3966nxyBbbJf6mBQ9pu949GFbRcacs1ZCTUgcii6bYFrGYxTFd25TGuNwZuYv",
  "key15": "5m6euLuoPr2G9hdMQfN7H5tYsuiUY46V6UFAD21Bfz8LEZLytrYWBmYNcUhUcPxkvm36HjJWwA6E6rp6FYEpCcpj",
  "key16": "PWFbDYPFWBoDaEHFmj2z2UBaH5GEGXQ5ar9mZZvxtq4EPzchvj38jFTBpDXrTrP2bcNe3SfjrGC5rn7gWuhH5na",
  "key17": "4YVwqfsxHtxSoJtnzs38mjU7Tzg6kpZVWiC16871k6GN3M2BKsDw7Cmwtjxk21jxmzMv5TGwPwmXX1LzdCCRATw7",
  "key18": "uw7Dkd3xBgxaRFh4F9ebq6cMqdueXPQgzFg4KY8Eauf8TndExJYmfWbzvqd4kv4SJ5W493d3H4cAfaY9r85tJGx",
  "key19": "52nzmWwbGrrFH6Weo47vDjaEi5fy6ciUeMemiFJw2rHJep7yeM4XRw77ucKHhUb9zyyeprfb5qS8JoK7JuPp97Uh",
  "key20": "2AihyvaKykLX9ZXTDLi7Ur4kAP8SUQ47tYux5y7aCEEV1psX5FdnbxNynAwRcVdoq2t2TawMk3sd7E2XmVWwx2RP",
  "key21": "1xrKUSaZqQmummbvMkSoBR7ydViZzKqmjAZYxLJkbDdB7mmmkbGoy2SCNJVKjYtrbNzd5WGhJJZ2sABNZyNaf9X",
  "key22": "4jNPKPexDUQoRWi72MMGNAQKWVQYUzzUozfaz5cxpdD5XHxPNL4VNpxf53ayFre7nNH1MSUDncDfKVxUFWqTATLq",
  "key23": "3MR8gBzdte68bfJKqzY6N27hh3e6tPNW433zohRnpFyZbTaYydJtCinCy1J4qonbvwB9VvNgF9ZFVinZZPq8kV2h",
  "key24": "37RCqugpBU6jjPZFnK7xp7zneqw3iCMtFMQfyu5VwVqS3wWBHgpmtE6g3Ho8G7QRd3ma3rx5DHDfTWU8b81XDx3m",
  "key25": "31nYLLssYVs4bmiSmsQdkPNUNxATJboBtS8wu2o9CNmqZwa9GgaPK3YjKBGy2mdNt1z6QB2YBrP78o2UkqiPiGE7"
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
