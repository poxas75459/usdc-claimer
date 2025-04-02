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
    "3XaoDitqayrtrtWutKj7g7zqgFyYNauXZTtXViSabG3VWRiDGnAADzGjkwAwxFb4BpCzoQCLf2ZtsSeLLuT9Roke"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SL3d2BKzDYyqiq6JwVUQtebVDokUqVmWQ9Mqk9dTXbNpQZeArn4jxGjx7ZNWjbv41SPkZ8PH5fm1mE7ozpnswaL",
  "key1": "3oGnGURGPj6UQmDafLwnNhw6psnEHMqVg5GxkjZJwp4crE3RZbNjTgRWUoZn1a1DFSrKBpRsVX1Jsbh8Xw55xF5p",
  "key2": "24N3DAVfTWyuNzA4g8tvkrBDLMAcP8cpuGuNeWZPNN2jT7VLzKdCT4kbhyU8ScdSbZhr1ky2Zg3DJ3AFF2E6ww1q",
  "key3": "4tbSg4UtVY4bsXJ9MpnJPmibEc8nXLRjTGiSLJhZi93N1835EKs56CUkYC7bRgxRyD6v5rNW6ZBEzPBhYBScJyGD",
  "key4": "u9ASdK7rbUKvX5m9Ly5tB1xywhuZTLsc5FchiWSEwgzWfLoQzG9MwTkdwKZaSmLxJP5ibs2ydCL2CGbSEsKGP5E",
  "key5": "3Fd2EaetH65E3iKfnaKDBYpwC4ov5nUGMzwc67HkK1oc8DRReCoPFvooUMxVUYmqKPH6k5BrH2iHUnBnoKVqDXhf",
  "key6": "5qy7d4EkRfm15saksNbmR9EbouFXvapwDNKSwd8Wj7qfgCCzzYgH3NPdX6BfMVZr5bnsNrenmqJ3ZMcMAeNVWH9m",
  "key7": "66yubbBG3ShXcvFZZpyAQK9WQPanEZxbo8BXzVvpc1D9zcMAjMwbH3pjHw21ULhJCLxLJye8MPGe2CCmZtEs88ZB",
  "key8": "32F3VUy8h6rQx4RbWaDJXH5MBYk54dyUGxxRmdR8EuJRrrurHU7jcopskj62mKtvu5Kk35GSbBiEPLA6xiFx4dDD",
  "key9": "5LFDpXPeZ5hwJGoSnC8ft6FcWt6TgtoKrUnUVsCKBCC13pTHstvGHyPvREc5PRK2jKJDGvdd5m1eSeK7ewS56tEP",
  "key10": "5bswWmC3wwp8DJRLcJbbiWQcQMFF1EuAPKvQEoRfunqiPTEE7PSGatk6rnbaF486xKQByqMUTpzNSn8srPJHgxUT",
  "key11": "4m4vQUkYtN8EPxsBJhz9niYs4UyVvJrdC2fb8JGswAgZ4E6i4j3tQ69sPGvFYSUWQuQnkt3qVuYwvtbjtYKhnnPu",
  "key12": "3Qf3tJuLRDhvaSX8mMnp1RUWmWfHz8i4eCjVovv7E5SyH9uuVV9w6vizt6bztpwhBWKeedkS4V3pKC7ob918xGZF",
  "key13": "5kwyiZnvvrWjTBqj7Ri7ZMNBjKV7nrtsdZGYS6N9sZWtj5waF8hoBMzria7BUD2dhAzu4WS6LffU97avshGgQNiQ",
  "key14": "XBuZ68mBejZ9ANN91G2eZB6nDh6LdnDiNLoD9JduiXvavm1cEXewa4qkxQNqwqmaVwq9F1rPbGUT1JwkSLK7VU7",
  "key15": "2Zq2AXppYBeDdpLdknCKhN3ptJ2FkDQ2AeGobRaD2wTQPg5NDi1KgfosCdoRZ1tkbPe7EVvWEzvv57mjwDqbSS3X",
  "key16": "5EXqwqM1x2M1LfvsKXSCmZZyGYu18TWddoABT6oV3eqCgE174z52wdtNAHQugTzPpLjNK9HQtJaJDTVjfe9xHAeQ",
  "key17": "56TT7nHY4VM9nyevFi1XQAHjbfwhBgqRZHrvKhGs1KGt8fmiWJkG2azYbbp9DYEE7C6TH4LPB6h77gTpECLxYU8K",
  "key18": "29t8NvJDMvaQQUgB8pS4Xo1vKvMsDxB1im2uWH3ApD2xutdD9FJaqW3tjwRgJPuqapraU7BTrzLfFdqh1QnrZvkp",
  "key19": "4fkQkkvEKfbb9ZupxhFgbC2psJ67ojNZH7ak36sYq1BVFBfg4b7bcZk6q55TsJjpbYRxX4Z9vv6uzSz7ZJ1MiYhF",
  "key20": "YBEw5c22QE6NBYe4s2P3vjRW4Jdo1BRp8BiHCmcQpmXamz6uwVhw2irLbd9Q3xcyFCA2L1HuQufQUh59aYpBCxK",
  "key21": "65ZLtdi2AUMRyei8nbyYd7jg8ueBBcN1MHTUWukvwiDtsnBXXV2MGA1nMFVFb6KhSCqE5xMZWtKmgt798S2febcn",
  "key22": "2WMuuGvcN91khPEtoYGMp6ztdP4BDad7xrpRuKDCM1fCJitrL2eHRVWs5up8nV2bSDfyzS7p9xwuwEtBprRvXYQB",
  "key23": "5WJDweGiEvzeqYEbx1zGf78AXPJS41n3f8xGr47jQVZZaBtucRd8CM88fMziD8YP98cgX4TNHGuFnjWT4gcFUKda",
  "key24": "jxjmzDppm4dtxkKNqojenyJKo8bjdCJvwL7M4VZs8FtLei2KshqPyfFQCUcirGFBykC2gnzejYPZoZzZ55drNbE",
  "key25": "4ScYf2hCvHMVEoWomd1CMsYs4CLUqf9SBBchuhNMHpjrriHyNH1VPQNiBE7K4dkqpYH6qpg5T2BwBUpaM1Mt1Egz",
  "key26": "2AYFe3QrMYXAMPdUcTxmTtDU7VvFE19aex2EfzDJDocqtZEzf9ChciQXYAhYfdJQ6AQRkRUp3cHCQKGFpFgKU3hQ",
  "key27": "3AtADeR2kpnYPHvWV9bgiqnTX8wxb1bkpJCCXwQ2nr49bkAska8ngFATNJpCzDeJV8AED1y13mdVyySrxtTKT9hN",
  "key28": "5mZKNAbYwCBCTRWzcp9eMedFjmERCJT7oJaqzmp3yEZkY54uTG8mqSUbwmwuFnJqDKU24TzZbhY43SrYFF4L4ced",
  "key29": "4PwHUQML6ehVwvTjQgaMYQC5Xt3G8xvwPmJZVoW8WLZmb5u295mDdXebNDkcExF51HXqmDXNDts4Xdinuj3PkQeB",
  "key30": "NHZvBpJp47WepdbY1YhzqVt7mPzvpkN3YFVcQMNLdJyd4YmmLVcEMccq4eG6i9rheUvcAAFHTBUZ76cEU7q9J4r",
  "key31": "3p4m3pUiLkaeuU2UTnE1qJykW7gg2gG6wz6QcdH3EmpQyqnhe23oHABpURkVorsefMvRCjq62azWwmfr8vaTu4kg",
  "key32": "3n92fbHYTMShR8ob33288Kw5hjf4KvMdz6gN3LoBEkoxNHg8q2S6M7PgdADJRveq7rJVVuZrtU8bBoHjxjSp7u8p",
  "key33": "3HnxmssXUTyyrg7U1akpxBmy4WzDSruNXwQXtL4rQfTDoVJ6MuCXUq5NP1fQKybhvnUbm9RuQBkrQGVzGGYboAnx",
  "key34": "21CTaFUJtzHQY7JqU3dpJu5jnHj3Ee8LfLLsRY4PjWD7Yuq8JH19JvmjvxsdjaDqb2oFS9o49Vh3MrWg9y7omVC5",
  "key35": "5BgDSU7M5fFjc693H3ba2djwfur1YjxyXnXcTHpFHgnHt3UaHtLYyaQf3cB1sj8H64NXUhPi5hLyiwML234gUPdP",
  "key36": "4ykjVc8GbdMVyqhTBuPpMR7dLaCtwkZE2viigvpDsDvUTidqaNQsrarPD4HTpZT13WJu4hJE7vJPhS75eDPX87rW",
  "key37": "36dQToFfBUH6rsazxWuk8ge2eQy8afJ3fcEL2RfkBuLZ41roKyLdz6R9sgtMgvkbQgb8pbLSrCBhCuoXkyv6YBjo",
  "key38": "2qwNa9ppo3r2vgDCHbqduwCXS83uscN1C2YdPnkpnL2d1CwL2gM3gJZVceB8u3VfGAF87ryNhAF3qKHRyfyTtHBW",
  "key39": "4urJo2nfbrjA8hv6QWeJgqxrqrp3LU5Y2zq4KiAjpSr2ctfNzRmJNebj7wuNc4KKWZpYo2QSsK1pkZUYs46watzL",
  "key40": "2YsupkEZ2srKaZwsL4YW9SkMSbN7iX1H5XF2Q3zjPYF99bTA56BAyH3fAcnYGnF5w46DsY9NhN6Z9kPR1U1WhKwi",
  "key41": "4szGjkesgokniFRGuWbQQAwmPGThfeSXQnpQVpKzA2q4KnBwe1tnwc7Vx4ikWpXXCpp4UsLhxbjLQqPLMMv6nEq1"
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
