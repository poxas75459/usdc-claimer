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
    "3djVxsq8nxnsTEh4GwmgYQLxtRHhbeJJ5kwnzqEZzMJM6mCre9wkAKA1gZwMALdHy4wbUynXZtRjv7JnRjivJ32p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UFTusXe26zmqf7NsdqDyvGqUz7q4weHWK9FJCptXJKKP1MzFsqbGGp9m27p8eJxoSfgML9tJS9EvyRmS4jSdkY8",
  "key1": "aYK8MSxGSbCBmU9guCEHvowk7DWS9CKcXvVvnW6iYxJYPfFPZv9VWsJoZzAxywDzHiw8pAQZrYpQrM4kEQCjM61",
  "key2": "3RZkzJQnLqL63dmCsou5aKqfGy91zkJ8MTJgq5a52k7r4cvixHhaw8VwLVFHMnUkWChtfuBQxn5D6t2TkABnvLvz",
  "key3": "4PcWuWsph5sRSPPgsQtnWG7bv2QPXMSSyKXGPoBW6BWfATN4jL4B3qzAbbnoDPbEFUsneYKzEoLCqyZzuLSA9cAW",
  "key4": "2Zjy8X8pjBXi8qrfnHcdMSdN9fyTpemXqsF9rF4LHVGyw9xJKQoC6oosSPzzqRKCf5QbbdCs3yjNsuQTBKGfaLC8",
  "key5": "4ZFocy6jLqkfaH9XKfVrBuVTt1GvpozEKbPH8vjWRd2bEPss6WZebYKFf2d2iTdb8yHdhUVa4Gp4CnPB7gFTFjtL",
  "key6": "2YW1hRphW3AXEa9GqTB3YRuBgPz3TXWLCDSp4gc96FJ3kE53xy2M7VKgezsuCMoELXkRTPQprpU4mztFcdvwyRTw",
  "key7": "4piKTvdDxzfrw26Ttmjbhm8LsrYMLU6o2mTJdzq8aBZgF2TRqfLRNmnmVLgb1FamMp5vWNepka1iFGDAowQZXdu",
  "key8": "5WVczmzk4VRDisNPfBZym3JU53hBHSBJhhSnTDDdjuaPhBAUMjQaNbvvqWf7EErzUUYWr3u3HfC6hqQvWzKn2eoT",
  "key9": "3c2yKrkzgQNEe9yYqELnB5WTVa7aMCk6WpKwNepyNPLXUkFjseDx19xDmwDV22jrcRYZoXPszMzKaAeXo7xxghvB",
  "key10": "57sgnuRLgH8fxoDdEHJ1MjeJWBSQwNbSFXgyExGYThLXRZSuW9MVbeveRWLtHMR6afWssWsbe1omqJ9NMDnRoBfP",
  "key11": "5CdshENsKvfQ3oF6RJ7jJycRTom5Ln6FeZGsDtx5bUBZiKK5W2cDRLatuuGozYN4R4Mf6DQZUJZ8JuHTpg2WhyBB",
  "key12": "3E2a3pNJfs7c9S6xTw2jjVVH9ETEQfxxLCTmfEWKgenmr2qzCGkpfvx6oB1jLhj39sceYiX8RUetraxLrHwVrGD6",
  "key13": "63MW8EJ6xu7yTwC8PPHripfCVAwJuFJzQE2PCWw7ZZKWJmsS3ienTSRuBWqiaHARuZdspbu6ri67Kjop81SEHE2e",
  "key14": "2XSQXvPGzDcXLEQ8Uf5yYm5htVfxfg2jtpB7ebwmXC4m8k1nsCR2b6XeMFgxqLYkiim6CfPjWD78ZbqZdzSe31Wh",
  "key15": "4rmnQBcAfUiMT5mrDfM6f51ftaStdXdTGmxZuJSbRRbixUY8jkWnNntdubafaZ3JmDtXimygDPRzvRN431opP8v9",
  "key16": "5Y8VxXeWjftjH1ghmcmSYsdYgNXtznZjPAV6Ji48w6PfBDsSppQUaPLpgYgwo8y1c5fHz14mHyhAXYgTGmJQUzkU",
  "key17": "4DP9D52go73UwYktrYTiNXZMFozVBLbDkotmMeYo1sxu7A87vTJs9W1142U9WRsGt8cDb6aCe21r4EthxgzvAaqG",
  "key18": "5JvM5B69E4pqHbq3wNs7VxTgV8qDGn5KkSMc6NnthJBFwnWYhXDUvQE4HeZsN8SQxro9cB69Hp94GpBk9xYwfvex",
  "key19": "nQ3tqzGPaGjX5pCsPU8QWcc6iFuX54ErUBqoMb9S4vVwx5sSiFTFhUg7rpeoev8TFwZo3v6jVVS4ub98v64qNfL",
  "key20": "5bCCrxtYU1LGSnbVD4R9bzZToGYGDAwo1UmHwxVF9QSsFnvWsJe5c2JbphQKiskzQL1yNhZ6L2v1K5Fq9PseRqzA",
  "key21": "2WZKrSkXzAgQR8DFbVoAreAFf6TqEp593zA6onXFvPfpZPJ4pFLDE8iJ4mrdFAp51ThgNFsuu8uFZzvKTWM6Jxzb",
  "key22": "35rR2A8tquLvUTmzEH7VEBssonY4zorXitgdpGtK2Dgmf5TDpbcJX8WRVJiS5iBq9jmY6FbUKU8b1r9gnAmdFpK5",
  "key23": "jM8Fi1DETZpbgCA7LTAPQ8a34Jwani1nHT4vWCLumiiH76tWSHRsUb5nRgxauGT3z5KjUrQ9P7pctJo3EWsQ6UE",
  "key24": "3szYqZGqXt3BtyXgVx6YwNpWynro3Ccve5dN7KyWkTkkywLwowrfiKAvUBYU3gx5oQSg753JbfyKc5QSxtnZPFgR",
  "key25": "2avzyhTVnQKXKPheSDKLpSeszkXGEt1eoWMK8qDo9LCWmp95QaA7oQGhFk1EFQT3UsbGVDhgXBCsadMsC5t2QvhG",
  "key26": "f3gvSSBMhGDS8CMDZdnLfeVSEWMP4v6A7Yir2gxyRMtDYHWjCfdnFuEb93naPWW7rM1nKRWn61dAdbq4FaW4hys",
  "key27": "3aR6jH7Q5zTcTwCJMsyk77waYEtjFT7Y7eUVDmHWnqQfbpi2wB8KkaYgT7VpwsN2KZPdvEwTppRY6B59o17SV51F",
  "key28": "3cHQ8QfCknDbAhoDyjoFKp5UmSkZhpLgxw1D7BaNmSkomvQ4hqNXCSvButYqM7WxuvAwa8NLxfUscwDdxEQxuaLP",
  "key29": "4x7TdM8KzL58aokuCogJAGz1Tm58MvhHxWdW9bm53yyTLpboLAdoEeCRwRZHTUaqNBq266TMG8yUsssLXdgce1xW",
  "key30": "3vJ549Y4Td9TFW72fi9XM4regdhrhtKKMJhH5ps4h39cK3SjRC7DJ2y8YrzvDgrXjWNHo4TKyEbjr1tgBuRCv6Ef",
  "key31": "3ZE1o8m2rSUe9HrN6QWiJeQKo6Bf4C5tVU29PjoUEbd5awiE8XbB7js2i8ZnMLQzXooAWruMsSpxtkSDibXk8MsA",
  "key32": "5Mao1VW1FKh4FfjUAA7LhGqcxQFYLtjP8dqB9xLkdmQGYt6V4x98Pu5LBFzWsjt35bXj1k2WwzWQakfdBisHUfaQ",
  "key33": "59cdrdearixWwrSJgusteUsMgNCj4r84Suy1ZtfT3XuGpB5WYQRfsUAFFKg4ZQ3kjMVe1MWvvBzATH4CoxXxCdFv",
  "key34": "33UbDaoecmQvsRAD6UE8m2xR2F1nmtvd9ppZf73YRacUjFwmgLogNx8tPM92DUKBvwkpX3Btgt6CQoekiH2tZbMn",
  "key35": "f4N6jEqFe6SymxCcjAV3ngWpr8MjhyEMQT9sZQy8Kmcvf5Wry9fDb7x9oZMaugUuwVTpJ2fGdvDb71kyG6ZeUeL",
  "key36": "39gqevZFFmPyP7VPCwdeFQMKhxPzhgf6kd14zsRjrx5hJYBY25GnFbtKuKyM8Cy29W27FbgS3KUsYdkbSK4EiYde",
  "key37": "3HDk1DY53J9hhpUQmu7U58kTTFWJeXZ3xQtzz9Sn4hReX9Cv8TTAK2fnjH9rmwNqYTweMAJ8Vs6moK9hkz2H3GkM",
  "key38": "3hD6jcFb18XBywjQYZ87s1aevSzGMkGZqxVv49hex2GNePWgNUCY7CTUqwSoTniAwxzTphewV8AQqQzR3GQoFVxx",
  "key39": "43foMrPZuMhi4xUvLMUWVKwCiUGD6DF8ZqQUu7oHiMDMjoBvWPy9qw8xtCNQ69eDWrcWgFRrmZCtnxUqzojEX8f5",
  "key40": "5rqfcLhC7hNg7Ukkj4KEZByWPZzu84A3gd5eP94rFdvEfCXHnEVqCJ4m2J3172YtZjx1PLMUDbA7Sw59T7MzCJ7P",
  "key41": "abVU9LSunrjoncbZuLMsF3pvyEowPnL2UmkwAKQoozHAd9MXFJiJ1nwDFmzFpnu4d5sUXcZGfbdrutZvmKhXvGg",
  "key42": "5Yho9zrzfjbBmPSeRgzWdAJuUqBCwYtiy3A3jU3ftQ8VXPgLjBXab7cRhsNQN2RM27eVeXjuuCZX1h6mAyHwKiYW",
  "key43": "2HJeTbMWUA85xP5mfWDFLrQeNekCcEQ5UEPBC5kaDHMLEaPmmJnLbW7YK2MezN24P8rmgXMgFCnFkwz6tgagFgfC",
  "key44": "5Uh12XLSWQdwSwRKzpKi2T8fYBS1TV7RkxrBUtjZ88JrqHjzNeHroFPdKeUxrkNyTs68uayr6fnWU1acz6PzVyEt",
  "key45": "3yw7APsePz4o1oifjbFRFFVXGbBRwJbtf5PQgf7VjWn3t9mT5b5ib6RG1gTqu1G777ihQgQ9of8yXJ8sxAiykDYv",
  "key46": "5M4CCQwJ1h9hh4LTzz8Ljr5KnMqUcddziu8qDg3Y7d67Zzz3Huq37aB75reS91KRG5RBaoS3Yeqt9kH5vXCsHKn4"
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
