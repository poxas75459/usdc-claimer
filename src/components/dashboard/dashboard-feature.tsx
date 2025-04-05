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
    "55ykT9hsvDZ7QLzoi6BLhgePztEmQeXjeAfm8zzRKvnuot5ZfXtuZDvUKNvdfLpanLhfo7rsCP8YBZZA6CUQwHDu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xj3sa4hd3RrVDptympuuignnW8tNpjQmXim4vdtWCuCJQ2tqK4X66DdrjJLNhwYxfeAcd6LFtCgKf1TQNRXfZSu",
  "key1": "hWYMgUbVAx1jAxaB7dxGZUA2wP6EWYXtueUN3ywWNtu5Z6voirxG6FaKVEFtvUsC77zZh97w9QteEfY9rGKziYo",
  "key2": "4Bjn3pnx44VTVsN2ZCphWNsXz6vqeF8qpxYyumT8T5ShuJ2sUvjBiVDxX1uCcwN9JpfNXnr4dejskChZeus1PVPz",
  "key3": "v6wduM9fF3mwQiG4nvzJWViFPB1GqgEYKycNznoJ6s4QMk8NnCTnMsT31Cy1bMhvjJSMKJwrVWwh28Ytc44ePaB",
  "key4": "5ypb319cF1X4WGeHKEoYGfQYPwiVGhXJdzybLQ69RA5ZqXNYk1SUGvUjnPYtyPEkSbqWunzpRK7NmczhTNdkCt6g",
  "key5": "37Q2Q3CQNr8RUDo1ztHFc2RY23mfjF5brFW5yrEKcoAjD9u3mx4pHLKJthFLG7tnnTRBYvG95rAigkDfSSHw9wPL",
  "key6": "5vHQQJtNFDjVgfD3giEtYh2aX5NgQb1C1PfaA2M1AHS9wYGQVsUgBy8mcLg7Wx1JQ6uAYptJN4ZYLeRoZ1f61Yj",
  "key7": "5S6jZB5JeyymWbZbGP9teqghxrHrp8KFkXzTmfrCKeBWXNatYJjFXLspeUF17ibtmhZVq197FewmXcnU1Y5kduHQ",
  "key8": "5yJpdfMYnTbqMG6aXmieecb1s47m9G6ixhgmazzKQpnu8F8A59Keiuy8zorSSyEjto83vA2VjpmuNnKJ3z2kTLv3",
  "key9": "59uirZQ7YpvYgVRm8amyVJQ3bvvM7cx9gFmBgHNsUAFJAdGKWaEtTyZKbk5uVDuxu3VchHGzxUoetefQibz5YK9F",
  "key10": "4W2vBC6omsfU6fM3xdkfXycQBrdJVW61qDCynD9g39U9jwZ566NmGVjCxDfgyAiWiyVAnvpjbVZdKL2dxXHs2BbT",
  "key11": "26AVjA1rRpapAtB9ZLAbVVVXhzNjk72JNraJzotD3y9rRM96zNqtMGTspkW6V5UWP75hx2aU1e7Wv8DpbVcQGr2d",
  "key12": "KEHf1JmPLaGaN4NZpV7p4MwKeiRuqDC2f76gQErGwuC5GjCNBwChiNcnQYrsWx8Co5ggtxSkHbmztQai83GAXTx",
  "key13": "63u7tn2JWABRchLxiKba4VboPXkNHkJ7p1YdQy1WQMoqr4tiSgCLTqE9oDE2XN3Ma4MTCeMTaL1YURvx5M43hHdZ",
  "key14": "29ji2ynvLc9P598TpSQ8DULk27Veci7gsz49QKjtdzHZRaT13p36JiPNQFhP199j3GGaH8mvQD95gkJ9AKcz3aTs",
  "key15": "2bUU9tC19HtnJDdXjzMrjA4ibQkoWXVA6PZ5sL7SC9y1HejNsWbEgSUFwQTJz6C6UPQFo8jcbd7pM1XwXrT2q9eb",
  "key16": "v94xDYAxRQs2uB53zWnexYasDX2FJ1GZZC1sFPC2LDBDjFFN8oK8BxpeQg2pdCbHRFPLeph9knhVXvYCPu3uGQE",
  "key17": "4UTDr8qK389k4iuamdVWcsKhFMS5YoCrKjRcehmZn2UNvQbJ9yaERX8FoV2NwXb2vqrEWxR4maXZCNJzec4v6Yh4",
  "key18": "4BMuoNADw5qVxn9Tvhmq2NWY7con97x6RiAAQBDmodG8JyLifjuFgKXejKGaY7XKV2d8ox55WhUkGQYq1ombiw8V",
  "key19": "zQQRhjE5yLfaRWWqgmWQMf2m5jWtXL6Jz2b1qq6aSf6iAMNSZ8swPbFyTP7r1h5R3tokgSMho1r3nqnSMKQbaWr",
  "key20": "4eLcPBb92DnTdY4dPx1ofgBNgCZA784e5REZSFTkSeBBG6nHgFxZv3dByTjddY1T6PBAx4VqxDDMQ9JDGjQXfWhd",
  "key21": "AHJZPof8FrAUduBRLmACc8BShCQiLc9jk4u4pbuvAJBd8dZQtrjR7JerTicotr7p3uZTnMXVJKbWEBNkjH74WPW",
  "key22": "qa9Kdo1DEh9VFMgTpVsog957apQiUB3QJTPSjGzmSScn2mpdzC9ZMHDkZN45W1SoVFMo31Ma1MMWSztZCecLzyR",
  "key23": "6pTmR7z32UdmaKzFfxDnfuJK8QWpN9rKhtFkwJgcdrGzHEdAit48uBy7qZZfVZg1vzbJbkb9sZrPAr7pcS7okuE",
  "key24": "xaRjBvPsEXQM4xX4T5SeXMNwHEicNdKe6APYTPauPcYDtBnjCG4waW39h7Zta5mNT7veyoymeq2WtDRRR1jTx43",
  "key25": "4zC5pHxuKJsEyZA61FCovRPGVVJVYBbsiP9jpRLw9DYLkHc2kZgS3HvRGzU4qDJYjriTmNLRmqzMCiv56fSTuJmE",
  "key26": "2McsHyt6JhheT3UsjfHxs4HoxeBMkbXUMTdeFxRfVifwYSsTKg2ZYAM8mxh2V2xT9KKBDghJiB2jxDSrgfpCpp1Z",
  "key27": "5NJbPs9RbDSjmWPGH6Gi4eSzrfcumZfGh5yyXUyEs6NAA66z8D7njys6mhhoMyB36Fbhv7QFrtEk5jN2JQpVmWCm",
  "key28": "dQdb1SSgzHQ398T2uq2JLfaPaSgr8vXJdZCdGTkzZk7cWMEWb3TJGEwEn63HUohTBDsr8RzSwjLEfLqvNEYztXX",
  "key29": "2yExL5QYYFUbn8KDDdksL7wpWbVgmk3SXzEyUzNbYR6miT7Adym7JPLPuQ9JaaSx8vPVBNJLRBuEHY6cFuX1y8es",
  "key30": "4b3VBgSgBfCDiewk8h3uen5WkjhDeLZzDx5Zz9vXCaBVZ4L8TE2CCacf2guGX6AoJ9xvxdKgZmbSKReP1rfHKuKc",
  "key31": "5TQUg3Wxorw35vmdBUyEYxYB6qmXuzxM1sr616SJT4T2nz8JG1rr8ryxFWF5cDuqpWAgU8T2FUspuM1U2nF3svPJ",
  "key32": "48vMZmicsbdK4jx2gWn36uxAow4EMKMorwVErBJ9s3gHdXu7D4nKMATA1B7sV9zS8FrK9k4Jng1NpQJHFGbD2kbg",
  "key33": "43yXcdieRCe3ht1dZnJvAi5qLLcePjy4X1wAZM69acsoxqURsLxjWaAcNem3o5snmRMpgtoLHvXKuuu2qrDudqsZ",
  "key34": "5jtawyMuf2Hh5WMv2B8yrtwNduv5YKJGYMw2LXAdah3UpPE7xwCkejH4QQ44qFErDc4AfRs6cDXKuGesJpmcEyiX",
  "key35": "5DRvSkPvi5FhpVMuVGZomSPQnUEMiV6hV1MUcNudNRuXF9vz6wuB4KnGBnt75NnR1tLjpeuZz9JzY51f8a8euvDD",
  "key36": "3HsJt5fqY415aCu26y2g4b1WDnSd2NNVHqiY7vi1qgZS1soWC4D23numw7ALtV4EfVgJHw8A1arWs1rGHX7J3biv",
  "key37": "4hyV3QsSjCHf6ZHw5iXydY3HcXh1vt3ZfTP7ostrkFZd9BfdSe2fbAL49GLdwG4M4v6L2y2Tqw8jB7QNqxa7YTLU",
  "key38": "2yTRwyw6HjxwnPqBHkgP6GJR6nA8pVDNqdD4mSh9UVsFNx5um6U1PLkwe6Psp2HZWtzmRqe4wAdUZ8RSeZV8R8sd",
  "key39": "4sJ72KCm1ebY2mFMM62BL8d4rp4hLcTEiw7wBKj5yWagQZDDk4bvKnqYBXxDLLYYrJ7DZJJmLomAxDJd3PKsKNSE"
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
