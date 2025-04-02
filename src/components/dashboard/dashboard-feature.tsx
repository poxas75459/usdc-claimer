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
    "4UyqEP8FQPBi4WCivhQLfVq1E2ZXBT5CbcNNuRp1krpPxUUj1gv8CY12wck3iihVYM8iFoGzd1i3Yo9UV21KkRRR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hz8jMhbGRywMMho2M4JsYaZiBuQPaPzPm1RN2Aqux4bdm3QQUEgMaCKZtPp516x1g75cH3e9mPRDQGckL49s3rY",
  "key1": "3Crbpm9dA5Pn7hYRR29wxGzwfR2DV8hAyrwXuTjtqkSWYcP2tuHWKfxHHbHXpY1ZEFQyAi1M47Rk8W3fgEMyoFNU",
  "key2": "56MoyZpYhLnEbBcFmDwWhxowWrEWBdSB1KNeJABPtWW2cGgWRs7XY35biCcM81PAUPCK9uevZtWSLC5euSGDYqKn",
  "key3": "44uHBAhSSJ6U1MLuiRCvq6Yxf5Srjgo1ukk2AwxgCVPQH33qxfp4rXNvXXcnpwiKM9BJhXAey8VW49gA7vQZBN2e",
  "key4": "3eo4g7jLZLHuqEenLCTgUWwibXXoTTsoFArpSrrHEyyPuw4ijon5DnxS2xswe1okkRXw9yeiFdYp2shxbf5zxh32",
  "key5": "3ERaXESZfKH4RrYASe8wvMfNQ22QtBcfp5VMfmXQFNMZVDzmsnT2sAjsnSrJ4uWMRbQGLjYqQ2PUkoT3BjYiZnd8",
  "key6": "4dBrRCXCUqYday63buytmMGf7UUXKBmypkUyjgmShsHAB9KCnB5LQYsucaQvJNZq6kESBUZM1RbHLR2cg2giBqbS",
  "key7": "4bAA1vi9yATS4P8LbJ9xg5yF9m8YaQL7axdQadvvemkjKjgXsryXZbD1BQ1DTKfuNnMJMDTfzSLq59AR83EwMv25",
  "key8": "3GPXFWjg7eMRvvMmJN2EF97JFB2rG3Z5tr2vR6BSBcmNXpjP53HRqtH6zr67eEJ5Tn9amLPYQKVXMk1qKgb1anTx",
  "key9": "5L7P22C8qmWcoqVkhdZrjbs9DLL8qpRmvwfFts2XEPethAoJ5k3v7XQAnrBWfhXj359NNbGSo4JDAnqYznXXcNJB",
  "key10": "3zaRfyvDmcRKezAmeFEYDUVjTSt2VbQgzrDDWZzxhtGnHGYAumYrCchDN7x6hbNumNYjGbjDnFPikyLasHj2x5yA",
  "key11": "3PPKMVG8HZyZjoonyFxRhQLjgPDjkfj38oTjazfFG8xyzdgFfh339YZfmq3r7bqhVmseM6Lgf7A1WTYzzCsXw3V2",
  "key12": "WrgAwV6JxaSCSfj3VXC8t9cU9UWxPUU3nCT3KsqZ7bPgZNJ5Va5R7uLXSHvv8Fu3jGHJhfuKWC9iwcgLzEVc42T",
  "key13": "3xeB8QN7cAD2EpqLsXWCJkXNqDG8SYgYAqK5eSDMW7eQZWSqr37PgV99srx6aZKUpVfMKFeJcJP4aXjKoBmBhYDF",
  "key14": "4QYhZb5WbVWtFS1WzjxtowdxuAsK8BtqSRjZWjGN8mNnUN9PrQq3DxdgPGehKieaHAENXkzgbpN3PAVipwLnJ6ms",
  "key15": "4PrYvKMoXDECaxzQYEeeZ2ZJ7ucUm5qgWBwBwSFjSjyvzTT1TvgksJv5syNVzMenfYvTqs4oheyS9tDA9EdZBTKe",
  "key16": "2TBv4Wh26qG23DtXbdTbiP7Vfzc3Zc485mFCkbzo6b83JVpWTW7m4Sd2BZ19kG1vTM9nNExRtkd2NhKi2ZtBajFv",
  "key17": "yYPYA6nrFeTMe7W1SkARqZN9mrTwXgvrRVQAcANN4knYCYiDroUa3e2gSPekJcXD5BmPVpSgFToavXZh2xySHi1",
  "key18": "4nncAYdpkT2BZ7s9DLk8u9ammx5FaRDzwdgeaayJrgxsXBfiQQV9CjQt5kVvV16xctsKtKpK45vteeT41mi3eCj6",
  "key19": "367wedXSswfdAt3xfG9pnMUX8wUjZ8B9ksLqASewk3h9LFaZx9BqayTLhxfx9T6w4dvBb4kHa2wmX8H6j4jnXQKV",
  "key20": "5yxG4rtzVnqTMGdydyutw7XjgNnre4ZNgTaSAxAVakeg6tmT5NoHHSYc6tr1bckfAwXvLUihBfJ8CMUW5yveQqBD",
  "key21": "4fDCTKTT9rGQGqovBLksP6u1f2PBmdYGuJbDy2BruU13JCVXSfEvfXo3dyXtLFUb9M2Tw4y22Bbh4TUpZzBRnAur",
  "key22": "34maq3GHCAyecWPFWMRW1jk8EMVi4G9QnoyR8k3sxmjogU1X6g3TSqwqxi39BwGBj4CrS523kZCCYJ4niRvZ5dd9",
  "key23": "oC7WNr5UAx9MM5LeQosMAss35QfJHKjsvdX6YXTpNMftkeFGJLzMFZUD5LPgPsGUnQwH5xFFMAuvgFZxgmVxvQZ",
  "key24": "4pJARBpmBmK7nFYTgeTTPL4BNBak82JszgyLxbR76MfhzesZ6bN8gAc8KXLNLdRCTAt45WkeL3TbVEep2AQNXs8t",
  "key25": "4Jwg39p5McZPoMHqHRBpmBHY3edojFKCaEdeR9MS4kzpNSgLWyiCsTfCRwxazw2iv8Go3QdeomaSEopPRYdsc1Q1",
  "key26": "3tEoVJzSdQUz9au64Bmu7Yg24AjP8RJyxXYibXLBUC4QXUY6a5FWZEPqeLAupvrHXcAS8LkUa1caMJtobNnBq6G3",
  "key27": "2gouEwxHrW6PQVxFr7v86DDJcc7S1pSbsJkh253hdzxPHQtUnghHZskNaFMLB9EceN1YNzuEeiTdtwkc9Nb4tth8",
  "key28": "2iZsGrtkBGYGshrPHry5jHbLdsb4Xb6JJXJoytFHigda2VcK7x1ReYaWYoma527MeJU2xZjSKCoyakTRJcVyLejw",
  "key29": "2LYDg3esA3yjpBwcFpJmzawheEbMhpq9D161rzbDLcfekYt9MtLpuT7iJSHvV6o4YmveYqV3sSHcmf2dn787wXP7",
  "key30": "2CgLEhHHf3n9hQjmNGSeEdY5XAEGRN6nmGv4mK4zaiEgLdYg8jwti8SuffuGkibJPygSeT6mGJ5wcgBNfAMxqNyF",
  "key31": "h4BLUCTtT3JFUJtpkmRd8D6N1yGKrLipZepXfYS7aHLxtcMYpfpNMnKmbyLUrdYSSbdeHjz7LodW2nabDxUeT7m",
  "key32": "5sqoWsZSf9itFDKbPDMDXRxKUkNtZNL4JoKHmht2fghGE7PcfQ7w5xuCT27o9AkjFUHMubhUA4sCymZVWTmcLdQZ",
  "key33": "4BbD38k6uM9tPneTnAoUsokaMEaikA5X6Z2XPCCMGhNCmm2j28SK5jEZMPkbbgD9RpPx68ixJkxHRTBwg6kvLDFT",
  "key34": "3JsuiTfWEVq4sWA5xA7ZTn51hsYQMk19bAPh7VBHx9qmtxDKMJgGmwfRKQKjma1PHXAXjP5ik3DhodFahjoxaWaH",
  "key35": "YAYt5XsYdq1JkDFoqPH5mpY91diryhzgCvgvs2b92drBqjpN4bUH2tzzR5cynW2NzDui5czrxbtrCA3ekZanxof",
  "key36": "3caJcKoDHwdfLREwSZFfFnkjx8tK5VCG5gQoziC7fcFrFeJZJoSvdcTRDQsPoSLDhSE6J9V8o3uarGLTA2BRMVNa",
  "key37": "469bnwaj8TM5Eg7MEkPZmJqp1dspqJRYG3HBfkubusC5aVpreqWmswicVpYhW7cU3KZGHpKAMVNMfigqXoR2PwXT",
  "key38": "3mwvHdzvHTcDmKEmybM9dDpSkFHgHP2o2oL9qNca6W9kBVzZ2EnrqEyFsDHiEFHWxsjtuLNTkLxD1koBkVq18RFP",
  "key39": "4KCo73kvg8uWxKZgd5JLS6faNNds16yCxuvhJWYm37qZXHa48kWjTmDUUcj6aqZuCaHm8sbDtTFF97iL5kLJbZMW",
  "key40": "5aJ1vAJo9CHf674CxUdxVW4eCNvNSWkax1QbdCLSmef6A6vkYXk48XACxVUM9PeZUPKmA19isQCbi6XdoSitgX5S",
  "key41": "41zzayTvZZRvabdpgAvqCKsoezuAGMqxsqfcaeKyC4jLeRxJDSifsfTSexEyknPkMRHnJxdekjphjKfGjig7QmdS",
  "key42": "224okBx9z2PWEjsHnfeRaCgMzgfV5F4YF8R3FYAYFcL62Tq1z8MLsQ38VRStwUTLTAQXSUiH1roY53w8u7SqtUPi",
  "key43": "X2sigMQD7TZV1kmsNUGVYtsiSv4BHvKTDRzEKSn5mk5v6i9UEMk5NDYrL27ic1BqHc8ZfxWVeJyRBPtLxmF7ckE",
  "key44": "5qaqnqGox4DnN5yVBPWgCkXnu2V7YRATqq6kngxyy8nTqBazVtj9JjApFAX577Dd4W8SkBcV3pLXmgGa9Jk5kvwU",
  "key45": "32EZt6GzPfcfzbvouAv3ja826orus1sTKi3nTt1zTy65UE5LUGvhNS1NANxoUKUr41wg9UABEQD79Tq2rHR2akfR",
  "key46": "39fV6iH22Nztgk1BnhXB8PjRVk19rK98Pj7yjcyNia5rogEQE7QTH9gP5mShuXvQ44ALkYPdyv6L8pb8Djow5WFd",
  "key47": "2BzhsknVfGNMu5nUZUWXxZEpyeSJDvcoRZVr83kkz3BzDpeJCNt4NLRbdsXZasmMyJEiRvKd5ZMg21uqxgBwwTV5",
  "key48": "4f2eJwKWs1FHEV5A7xGUp2NndvS7nbJVwo3zjLYcecGx8rwCKUKqWherPydmYg6brcPdG1wa5Yc1Smf6u8jMPbK2"
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
