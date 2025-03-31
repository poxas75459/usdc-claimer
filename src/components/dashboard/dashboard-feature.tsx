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
    "pwUYJHNd9V42sTQBXC5E5hH2abkgNWWef6Gf8cZTuc1ujB1BZFbxYb1Pk3a2wK4tuGRQtNgQqjwGEdcQN8eiTPJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mvD5sgXwCTLKkfNfS5tfxphHNmFJpSnqJi9GqzFdKukjzK1Bpm79gaB47MDZxeDdt9gXiBCutara8P7YCqH7agX",
  "key1": "2t4kmeug3CMaxQ1U6WiMamnc7BrPawFudv4FmXKqrRXYtWdDGP3eEkGbt7dAsUbYX2agYBipQhzA5eLV298Lyejt",
  "key2": "5kxVCTfRRVwyE6GWLTzwyQoiP7QJbsHsM5yYnCdZi7AquUpAtm34mw8kEFMNBKqgPW1T28VPmc3QWrdmFVGdHbZM",
  "key3": "5XuDhDme761chycQqrWfUP3j62jq5tHQc1E62db28W1ik2VhkG5xbViz5xDMjfwctqzEHEFECKFNRJRi4vrX11Mz",
  "key4": "BkK8QsH4DcCa33SH9jwKkmku9NKubjqk9zzmBzfj8Hs2dbikP6meMrJt9H6BgheEk3NB5EpXTX4gdH6HguLJtPn",
  "key5": "4ypng4LgcY6GCey6dfxBYecawctwZcp68kts1Lyw1oLTYhiJjUvZkeYSeZQkNFtJ7y48rNyjjT4LGyEB2DrDWvFy",
  "key6": "dD5fV9C5T7pMKehxfaakAJMADd5S8MuYsdVVLATEB8TezFWnMbR4jj7psxK8KMjCAWCVeMKattp4YSWzTvvCF5D",
  "key7": "3QpAWQktF81FtDusovDqkXFA6You27pxt7Dq8cyeuCL9mTe2LWH4D5nDFbSd5rnEBvB8vzZpExe4hNUgdFfksPQ8",
  "key8": "3ZiuZpyrJWZghkwoZmvnXeoCvJsteM1xnEo8ywazkEV7arwSU5usoQ4KfcK3BDk3FeWhNq9q2JQdQNELdS3sXgiG",
  "key9": "4Fb7yAPNGHMVjTGgNM4kBPSYRKDy2BA7yRJAmQzb5hr6PswNvmCn2QeCLvsL99EmGofGaCyQRYMmJiJRJp1XmU7o",
  "key10": "AH6VjB9UasnwDSqhrxV8zeDysDkEaJYbk4fjhvE3QVeE8guFSiegtgX8mGgutTh1XLegRgmbJRtjqjZTQQWLuqC",
  "key11": "4DaaHCuvqfRSi9m5CpkzT2jS7Sy33C5KJZmyZDTRYxQ15q4fZQnj82dNLSXGNcVL8BcPjpFqwCLdx7eCAbQaYU8P",
  "key12": "5r3WVusKbR6khyqD5isrwNoQsxSMsAz79Sh552kEX4Ku4Am95RuRAH8PNPjUGu7DkVbzffBjR7S1utYRidkjeR8Y",
  "key13": "4Ys8QDYyF6uZVTFz8WkCLhU2LLQaoGJPmcNg7c9Tsfc5HCVk4hn2V8FQmGdB53kr17vcnpBH8JaBCtd8KYEoS3y3",
  "key14": "drcDUuLoTepwojvy5kEJNEV8LCC612AeaAyEoqMQLKGVRwUYZ3H6wghK7d5s5UoAiZ6YkZes3uPsb8hkUX4B5ow",
  "key15": "4z9bhzSkYhJzLGUGhgFX6fN4JvfrQvjkps6m9s5ASVwr5oDmuyV4afXHx7pjVUtzmqbhQHRRSNjtD6X99cuAACMN",
  "key16": "4Jx23r19An5FQKUXArQMyjHcJdRa1DwLfYkkF6TSSP9HEqXjjhdVefga7GzFTqXYeLR7Zox5t93eoC3NqE85XUvr",
  "key17": "3PAzpHaCepJS3HCZP9k8nHKbrU1qoio4XgfdYrTwjHSjZuK8ErKyseHfxK7WTrJk7NDTHviaHcWmJxzcpVEQgNgR",
  "key18": "543Nu9pTPxJ8ytToCXxNGUwF8Je9MQnjqrwM4azRzdyUyngs6sYz7mx2NiK19QBX46VY3hZx2Zma6chPSTHfXkgk",
  "key19": "4SbFc3iBU8QWDS7gtfZoSyoSc1bPAfTym24sszQ4bbrPDUv9CQBJsyKt1YwqsiNC9bxyxMkwntSbvYwjwwb6ubxF",
  "key20": "2KmWr4NWZW1VaEDpHDvoi3kUYuX3nkFh2zPWrNVchLfrsSZFy6uVhFrc2diQJ76EdUZ6ms3YGQdJZRT1cpGQ7yFu",
  "key21": "5enBf6U1sUsveo9Zzx3ZWDoTqZdurmyojXG6qu8Fdbznkcv95DNjuR4LMpkVZT6SUxJSwZzyTdBhrFy4K2uWhtGv",
  "key22": "4csuu2aQanR8xFuKMzobszYeQfikd2EevTGDFyuNWeW3A1CJDaQwUqcSFNW6R3STxuS6TVtyPpkzLBQbbtwkWvGY",
  "key23": "22LDYoA4c5WGmPR8UtzWA5vnjfbgnnAVGJezrpgP9e71bRgjnQc7CsZJUrQfe34Nv3JJ4BFwuR3vD6BhSLuPaAfy",
  "key24": "sTakmQqi316jsi9YKXiGBdvVMFChjxKZ1ySHMi5F8pFauCoQjDexkPyqrcWqt3LRRK8XQETUC931VC9YDFCLVHj",
  "key25": "3PYyxQKQi3CzGJpy8WJB4ArSiTLvMqxSWXCBAiwZQGDbfnDJis219K1oPiH8hGseznBYGw4PzF3wW9KKiRqfu2cV",
  "key26": "2FpgfyrzfMzLkQ4BpWeZEgfKxPdPUiRwqCiim21bZjn4PC3AWq3QrC2i8N8rMYJtD1rKzFNTt8rrXJ2PK6zL9vSY",
  "key27": "2w3xHTGXhpKhzXLAcsfRheEcnATkUPK8h1DdMNVZgpHLzE1ZKcM2Yt1jxiaYiAkztkNd21wShGpnauDr5WUxPT8C",
  "key28": "5pw2UVhmESVRPnJsPPtikDLJABkb1CanrdqCPJjuEHcubX9EvwwFar19ob9rdiaVFN96ZSPTEf4AQhUN2xP1sJCQ",
  "key29": "DsuxJzdPQYLYvAZggFTu37hiT3hWMX1qdxoeh2r8uSFEJJMvQ1KRoBsrk92797Q4N4bnSPDrWs7KzcSt88qkgX2",
  "key30": "2FJzRF4rMnntU12hvYLbZAstKmCBWyDR5tnsDPJTUHseTtuZv7efWbPvzQLYZgHvBwWhg3oyFnXKjSrqZLMMGBv7",
  "key31": "58Nuv8Gwuy3JaKhd2hdjxKstvK18BLn3oN1je7YBqA1sSBHbmMbj4zhBfWU6kfrDq3rVfkQVWRbrrxg67JpuCzhK",
  "key32": "5BisAUaejj7D7RpgWreDqQhpArTBDAwhwKpFu278e8zxtxDuXKDU46WVBmgCGu1wKFztAGjw2TFbKsvtyYCcPVNF",
  "key33": "9af9wuxNYP6c3fVPBdUfePxXG9WVPHVc99az1EpBEyAv1Xt2uFJW2e2qN7jnZDmPageiQrXiVBt7ASk2phgCU4C",
  "key34": "3YTFPpsEpJvo1LH1FhNZe7iZr8vhD6TQJbpQN7EYKHxZAPMFGkmRJKqxGam94xfGfN4VRX2Rkgzwp3iw7dwQoGE6",
  "key35": "UUqdfcCUz1jwzB9T1VjBegYo6hW9xkXZxKsDPm1QRNJ6ydJBjJcXgf9UwtUfJ8VQxcv3ZnumHCFXxs1WmXP7hfG",
  "key36": "42pSZp6KqE4MrTxuCLtA58QGJLXuhZ6y1r9mfJ9GvxXveJuBcqt1HAiiiJdPXmAXch8Je4KgWJLY4VLGf2idaMmv",
  "key37": "LxbhY8d7AaBY7CqtBsw6P7poo29SfosXqHxY1w9uNXJ1Vn8ce5UapoLNCDF63GC3JacKaT9UVy1ijyfHNWMTaVN",
  "key38": "irpRCvrCHFwCQBJLULvwXLEDMrDvWjasGTe11TAiKVzV77Q2eLtRfgCyrxVPjmnZNbGRbbMJFaBhpYczCwSsxvN",
  "key39": "36G9PYB9rizbnJF2c9Z1tjzDfVmaAjkQDkeMzvt6xfhc4VSTJoqw4ZSQ53LidErWjoBc6sKcSkTWFa2XbFYA68GT",
  "key40": "sguJHpLD7LZ99KWLqH8YHiGHMmkZmE4fd6E7SMA7sTRVFUKKK6SorpUdEQeoDuAvGau1GpzM3JCejd6AzuS43ea",
  "key41": "634AFhFTk2QfcPaKimspZbWsdXJzPmjcVgVtA4EFySsneTWWT2uK9Hak3CTJzJcNg5ujLLm8AsxjPVips4jo1mJP",
  "key42": "3DL7s4VzYhbL89U9zn3hdSE41Bb6ZaM4JGxoF1A88GHfMEUFjfBFAkjYuehjgVDW239zMxNuwYCozJUhE2mTr3nz"
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
