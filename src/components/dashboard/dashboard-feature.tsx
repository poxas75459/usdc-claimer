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
    "4nn7csuFqhH328tthKPyHgmRUXeAdkPjEbEJTKtCP4UK5my8yArDRUMQYwR15eM1wBS4vEJFcAGGna9uf7WKioHY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oBtpktKDBjkuKG7Lycui54vNgwVhUX3fDm4sZR1o2sVXbiu8KsEBceaie5nNLqAUofs4SJFj382TvmXmEn7uX2U",
  "key1": "rYoDbVTTiAxx2PKPNVVTySYvrBbYAdQrhPcHkwaq5JYHPAg8gSxzzddoJsTQ3PmAoetqgddu66M4kcA4dgaEAix",
  "key2": "61sf69ow8XNcFVYzigFL5XvzrtUwsgpQqxAf7Vkqr2rm7LRgGBfs5gRkiCuhgcVoo5bUzxdAULm8dEo9kxSoQZj4",
  "key3": "4SpNEn7D3c92wdrqgw96rbNTPGNRvRFfiGyZN9ivWzDQNmvc6K1KyFrRJmMxCcrgGJcrtBuDr2Ez6VJtmdLRxjtX",
  "key4": "5Kt1qgdHjLNKVmfUSYUyiCENHCzVwikJtAD3G2XbT4eoTirSUq8pyR1i1ufwjTmt4M7WFeRnWtnzWbPcLTK1PydH",
  "key5": "UdwBUYfay1F65rrNsh3x2Hgu6H8ZLFYF6SCJrT8uJ7UBdzYJmjGvcFgRQdd1VTH12gQJvoxg7HXqzXhEQjhckeo",
  "key6": "5b252LN8CvE9v8Ltnnth8HtdxYTg8CZecoF7jJ7GzzkDV4NCq8XNczW2DnLH1XuCrpDsk8aM5CysggQZfttJDcU4",
  "key7": "3LCr1bKuB8JtoXAhAHGkw2VbTpUo7zv6UenHw4ERVWL8PEFrwnWhkjeNn7jwQBXNMtYsT8HaPWCXuSyEb49rWTAy",
  "key8": "2nwywS7rHnhHoC6GGj6hacnGs4cfRhSpedbCFxbmcq9mKxA8YAfGkvei6nZUtqbEko1dAnUsnfYtJ9UPipYNNekr",
  "key9": "3Z18bq9YH6JfEyBEMVD87VJTKUPhHoKuxS4W4TWyuSC4UpCNwN4GPu1EBo2QZwgK11oXM6fnaUNqArfuswj5q8SX",
  "key10": "5Kz3K6VuBDuqLBqeZNkSffr4ExcChWRAYmrD2Kk8b6oyu3sVfKWXJ9yAacLPNG53vmGMjXuxx1TnF3zw1hpSpCxQ",
  "key11": "2yMFkNxG3WbNwNWj2LfmGbPRtYtCAG3YEvTzR2vsPuUjcUkBCF8hdE1pULfQhF6V3DoroiTMpLFsX14G3jFxpkWs",
  "key12": "4gQbLAQWMUVwsqUpjjaGxRgUPEpfU7nM1W5fsHY2zyWrbU1ZpdpLwkizRWiPb9F4TrZdXNUwZC5FmmH894JiPN9g",
  "key13": "5AdsG4483p5doW1LeUcZHyUYervRrAFnkgafDEPZeuxYNcNYka9dRSHD3ik7DCYQAjKQWSeWFLkaxk5KxzPTV1Mz",
  "key14": "5yyEzeiYhoyjt9C3WdjxWroGrbwDe7aeLAtCAqMzj1YtQuHoiW2zwv93UHdP9sXGBj1CEsm1Q6PGXNDoFrxgJqcQ",
  "key15": "4t2JnGBUY2vKmaN3JnC2ZC8jZAQgg8j5HvDoRFSPNR8A2SQrya4XS7yjz6o6onUGUFkrzqvtUzgmEnW2gwbxmaep",
  "key16": "neAGu7DZyGsLZnaTx8EMHESdVd6SwYyFtiR5JNyvCw1L8g4JdiekgdUqXs8bzdjPJg2eX9FpXfjHuw56kNZJ3tP",
  "key17": "4jMMDBEPiXnma6F2KGUmjAoZrApdaBrV2kwidyYie3sEJTXVWeWsGPWSJrtUQEiL59exWF4YMeLCsU23nmaTqVGZ",
  "key18": "2KjHKrU5fSNEhNom3R8XcD34SAf2FzQncqg1juMkzobAkB5xhU9rQseR6Ky5HhguYV1QLsqtvQJKeuNzNcLpZyxd",
  "key19": "15gG4GW8uV5ELWqaDAbNwNsshKK9Lngx82PSCSe8LSkbikkMuSR2r3AmE25NgcUyznheodADrQYj86E79Hy3ZiR",
  "key20": "5xb634CEdyHNytxQrogoZYMG9Bv7TJ31sZrKnE5E4vY8qPmHxVbhLXWCyorxoLhD7hTs24gatMXB7nLE1sberS74",
  "key21": "4hWTSjvHgAX3QTQUjMcf3v6UCXWcoCvWPhr1jWKuiVQGahcCadfdYPdmvgNnVCsF7NpZDRjWaLZWbLDD65RWY3Qk",
  "key22": "P9hGbJvETE6h61iUqLwQ43nc1gpNqFUH7CqP18kq4wG7BD8e6tRr3vBodNBs4YseF1WaLcGHY27vuGitSnriXEP",
  "key23": "2nAWFP1LF86CrXxSdPhqhAKrn7mBWkYCfrzXmBtr4p63hvfmwATD1Yfa75QxU9fPSg7XFingHfmid9pB92nmyX4f",
  "key24": "57e7yoGinLqy1QpRdXFxGbz9WXNiKZ6QQjCidKZnqea3xBgxXuxv4aDkAgxk2XCWqu8uTgx1dydTxfpn4xDHPNye",
  "key25": "ezx1TjJaMn3GGXwB88WQgQuEnGN3j3xvMdgLA8BViFzs4GrmxDgnWsuMQ7PYwuNmsKxfak3vkj1VT9382452Ta9",
  "key26": "3t8hkZEex3GgKcS6hJoHuHnJyRmj7RC43LqYkBNaytyRFj8xfMQNaG9XrWgx2BJ8Y5Xf1Ddg1PhWXSE384ZHZNZh",
  "key27": "286ghRHfdsxebTH95J3B4rE1DKED7fuu5qymF1rbEzsW24CvHUcLqPSLN8WbmtTF7auJ7kkyojZ8dkJHBkyDpeCk"
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
