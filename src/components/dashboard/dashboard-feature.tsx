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
    "3v4wTFuYJZ2c5NKFG6QJ72uBTAJftehsxQBMNwEaFkSZGnJGZTe39m8ccxNzrbyZWoMf8SZfDy9ANY4EivevbTLr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ihtrp5B8yqc93kWE1WKF1AVVfCL3nVU1vXwzdkf1LRYTSoycANAJJafoFmbsnwqTJQvt3jzMCPXnaZqQAzmSC3f",
  "key1": "47esoQQYkHYpmKMtsxBPqN2zQdeEVsnHJTySPrDsgQL6o2dLStkcRJRKtFToH7uDwbBwAbovrWuizdB4UxBCdbrZ",
  "key2": "5KWWyhMWsKfWsjnCSHnYz5Gt1qSBotBfYiC3Pa7f3pcWotUrc6aHTh9t5Efg5AsGYkwByssprEf66Vi8MHyYEdrh",
  "key3": "5fRfH6XH2S3usWaJqM8uF1gqLTrjDvWJUkSRLVob3AcCFULJAfXoY6C9oyc1Jv7RM4VQopVNDWotfso7TNhB5yA9",
  "key4": "5wSL7S15f1QLX9JdGutGJeku7CLH99kkNx89BosQiMQKZqUU1RcCCK5Q2XXRLQJCizDYtDRZhNJwqmQHjfdcpZZW",
  "key5": "4hSzCgpG6kVmsWyRPsYEsz6QLX72rXzQJnDWgxXtCZtx1S4GoR8cvcvPsvEv9PMzBjJ8xFqaUv8DjHBKLfpDdDHY",
  "key6": "35K9xVTyZXskQe5o1JSmQydRSc1aJ9reHkW4wpjD9anS1jPH39Geaf86WvM9Bnw6fsUy1BqBP18WQ6jaMZ7BiFwL",
  "key7": "4YW7yum4oGL476nEECxRs9mmhaYcfQcepALWSxiqZsLKK1xfo7AVpEaXxtKfkkmGUsapqjaus3ergXLUodabr8sC",
  "key8": "5t55YebHvtAZKWiXb5GLY6wtGH4YZA6sXVBPWpTrjZSYnJi59xkZg9RJ5dDt94HLbrQ2yS8KxZH9G4ZpUT3L1Czq",
  "key9": "5MasPiB4sgC4W48j665wx2KEHjhz1R6KdzPjbW9abewqcqNsy3HuefpNhdPLcURTiioZN78K9MsiR641FwEHX5QN",
  "key10": "5y6LdybmTHQBDadMYDfbXchY1bXHicVfMPJuAaHVvHzsBya9QDsyrtTWTnMusGGfGK83e7ndzWf8dvXnWDY2fyKp",
  "key11": "3vj3epMquiT9eHdvQPKMqathBdnrQu2C1Wjz5Lhx9aDSssxNi427zab8xLfaTyQbGYBqN5QWWZkGJrbeQGxmiPXt",
  "key12": "2XYj1vxQXStFWeTsNGbNZWhAjqpxSyH22GqMkJvr5tca8ppWSv4jPbiP5d3GQuBCVY5XKj6XSWJcNCsnHrRLy7ej",
  "key13": "52TihBikP2RaxKBpDoUep6xJgwSfZcHqBYNUxEBQ2GT6i8VX5dMh2ZFwb6ZVHNjQzi7Mj2CPU6UUBVGrcngaJkd3",
  "key14": "41TAw7Zyhc6q3HwJYHcVcJYbQRgF9LQeqoUF2YqxunFoGzvM4u7qe2eU45SwcNFxFRCLp9jU52uQ8yNpWcgQ6pbA",
  "key15": "4sAK9bVVFRRdFJjT584zjWqy2M2Bzy9SUtkQoC36JcopVnA9ytSURngLmVzZPdZ8jMMbQNmTsuY78KafH4kYFpeD",
  "key16": "4AxvrqMA3GcF1JTcCjQBw97McY8PDRJw1GLhQ126aFWX8W8JkGt6eUqoV7D9eb5Jr8xayLjHk8K7NRdiRKJVVwqc",
  "key17": "LRSSPRvWCDTvZ3RNMnEfzfmSVKGonCo3eNz2oag4BcMvUAM9F8R1zu3n5esqn7LuUMMErrXP444N67ATKF3tmit",
  "key18": "5rBGwrWGZYvpTRreixJ75CLRJGpkFVkjmxvYSK9QDj4gMkASQHeSEECGUGu3TeVCi2YVYrmSbQdh7ZNVzY1mv8f5",
  "key19": "2Di6WTb7RfFDjBGutEkydF2LfZ4xt93yTJTLXtn7VJuQ8XLBAn5pXGZHXR5NK9cvj8WXHqdRoFs52hquqkTeUhQe",
  "key20": "2DWdkxSQVPcdkfsVn64DwDfwZdSWpVqv7RqizTozWFHbXgASTZbt8mWY3jabcc9WxdzB7pw9rCb2DN1fEz83E2Wh",
  "key21": "WwWnjs1L94X7WoRuZaMCo5kvYKyq5hYo3JrxqKh5n9QrgukQ1YgXfZswrUtYByL2kcgv4r6fRbdeRyC9onf5R4f",
  "key22": "2JRSz5kzYdFT6mgbAKtdmrGR8Y6iYD8SaBC8quFAqRUcGbmSpNkj9PMpVTq57oZmKprDHDPZjwSYFkjnbrpoPUg3",
  "key23": "3GWhtQ68Zkm54UBWCL2GeJRUynYPv1D9TGo9WbLfapWLhom74GcXwZJdvMbJSobFypcLoLJje5VpHMtZobhPthFh",
  "key24": "3SQFPsjWSTRNPSwD4KJxKAjQZKTDU8kAJ4p4ijNGWqKiJXWVX29Hcu2JYXYYeFSUdezRfXXMyhAmGacBG1Ke4yQC",
  "key25": "3ZRKG99jctAHwht1AGUKa7wT9XSQ2UGmf78ZogPmooAuNGevexJshRLsthBrJjecvEQJsYG2AH4RZhDhoYWNuXxK",
  "key26": "3rKxMBhWMwE5zr7hRjiNQx1cEJY1LDhxZF11NwrueWvyDV229SGugHfwJAdx34XUF9FGXfeL2nbrWcwPx99K5h2n",
  "key27": "2kMsxyD1fEVpSdrH4Mic8N7NcAKqUq8JUQcPgMxMzVjX9b2HXAigbFCcw82GVZwx4qEQEvTXwctZSwvdvxiE3meg",
  "key28": "2NT75nQ6ke766eAv9HfAcPiGpsBENXpJsnxzKAt8iqMxRvhX28Yv8VLLC2AvBRhmXbdy519ETyv1n4ARv7SmU9ea",
  "key29": "2GC4fT8ZWYkv3KQ4ZzSjvnetq7ckc5Fjq22zMaC5ttcyUp6vZT5qmEizNm7zse3cyY6snmGBszG6bQs9pAC21Hjq",
  "key30": "5oqciVPmgZfSHwYePf2qKz7WALyR61CGfB2AgkTkW9rXGhxCjptPG7ybCaMcuzv9J9RqZCkU5NqmETAiWZsKFMqn"
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
