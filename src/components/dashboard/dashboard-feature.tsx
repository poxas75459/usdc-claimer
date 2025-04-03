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
    "JKHtNgc5KBeGPEfe8vzSQxNiSbmH32pKDJgQRJE1YskQDyjg8tyxRfCBQ8s6mmie8tgKkwaaqDpk2LwBQd1cRtx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MFQ3EB5JpdFNpSBggBJFuwpd4ExxaMVwpv2WCNDL7RatDtH4cXKtGPUeJ3EXWhh1kf71xfcGRw5iZm8m8GzBJqi",
  "key1": "3Bj7GnHnXZiUrwyVnV3QfCstYhMkz3K3rgW9ESEfycFzK3M4iEvSBcAqkV5JAmES2kFo5mJLXtHSJZ4ELLVGzsrR",
  "key2": "3mY2sZn4roUcNfHXmpnX8ZDM2jV8wngdEMk776yaZnSBMAt8pwwMdEcRzXnwBJJei45kVgY7mv6jrcJCkMmQ6QPQ",
  "key3": "5kitFUe4Jn34KUvp9wtQAoVatf3NrhUVcU9D4eYN7nANwpmAtRo1WVrc57LZFPmbsrjLbXHZcj32pjx1brSd2js8",
  "key4": "2w5rdVdS35kzAoGxEAY4LhSTJ7MnRnU98nHTaBkLDef8bmZKfXhVAaWedYBKHwW8oP2MSKwh5L5VBrdpnWCNpXAz",
  "key5": "2uqEheqFc1yTgbR8HtheXpdo47DmtrY6AycapfqrxSDKnTSRuzviGw7JyAXFWWsggfRfdgBxjK6WoZi2eEwRSW4d",
  "key6": "2d8VxuMUX5y5twNs5AMLRydJyzz9dc4DsVbD22agFpvAd66ohyCiDrYVbfiPTuczm6jxZS9pTFFw18ReiPGZqWA5",
  "key7": "2ytHL2GoL6uBF9p3PWKZBRqu6oETcH7C5Lk5VTMkXCEqEgj8JtmEtKXwKXTPaCrSSAUT3uNqo3bRsZX8kz3quQys",
  "key8": "5oFMCm4SJMubTED5R1tp3D43fX46xGGFEE7AiY7kBgxFR3ShKAozjLqvwnW4iEp3GAenV7uqiwxqgBb7JmgBrSD4",
  "key9": "w3Bpu86CfCjqnCMn7BU4JVj7DmH7gAzVHxSuGrirzWBReBkHPejF4STZygc6fWmhfGDzwmqk2zgmUCkpLjT2NU4",
  "key10": "5bBPeLoKaVAtsA4HoLHRxZYigHiFUGjGWZfvMWRgu16bTNrq5LuyQoEu7b1dtBYPNj1htwgMTxa1ycDYUsfGLCpv",
  "key11": "5DMqb2YDy415xgnmqFajkqvy3XUsdasgdeTaXJk1AjGMxzGo3d1wwT6U6bb1WofML7dpXWSGLJsKpgZKZ7NfLRi1",
  "key12": "5ZeW2Bp2JXPARaJujGAdCugqvzG2bppzWGU8mUhPuMgdgn6sGJ2eWHaLb2Pzh3uiLHTRmcMCuEVEuuVMV3Ru51Am",
  "key13": "4DtQSM3bdkB9BJLLSRz5arb4Hi5mmhmwT5JeL5YfTHZMFa2yqC3m8FNNRDm1QEHDNGSZu9pKZRYuX3MVrHjtC4EB",
  "key14": "2SQXFcacB7PGUCGq3n2c3xyXANRtDiBiJ81HoEa9yZcuhbHQRQdAfxaZTLACvzL33ErjbhCvykzn6jtEWzb3yFH6",
  "key15": "5iHuPuhh3BTeFXa2rF3U5dJp6hyyvSMjmiyrCxXgHYaByYjEupoerW9EMaLQCkFiaMJmqeb6kzcr8YPss3VeZmGX",
  "key16": "2LdzbM4LAtvq6ijLt7cVcczSdCkdouhHsSbx3iGX7JChhjhRoy2dfjPrmxSYyD38vy6Wmhj8ZAjvyZBwGGJxMjFQ",
  "key17": "5XWytTJhnDCSd9sbEfo1afWkEFMaXDj7VaMuSYbuzdiKnvpd4pdb4otniisCWKqjTuPmPQAtEh4hnR7evsovtHe7",
  "key18": "58cxYqSYKir1KTCryVr8HVWv1vDLNMrrVTegQGoDPNbzWhpq6zCFvmoujNq7TTAeMcvkBZVUYbXy4kbdhJq6PuMu",
  "key19": "3b3DR5qi5Tapq1ZZb5ka7fqppjcHVffmSsdU88mfmbn5U1xrtSZvw1wuTLVGwyj8YKq9Qb4A62wv4C9fZerBPatz",
  "key20": "4wmM9PeEjB548MmXSx5SU3xwAnac4Ls4m4M94SVfFf4t9wrnbQdhUmzcQgou4r6RGTJsADvSbw6GmgzEKXUncJkP",
  "key21": "2jvgRPbP95p2XCxT2fUKhx7LgiEaycHpK3nf7knJ5PGNkN1CvEHCcVAB7QFAAt9L76Q41Tx5q1yiW6fQcXQw4Hd5",
  "key22": "2bpp5F8hgwozbwzzSSg64KzmHo6EErqmQ6Sp6sMWfUs4yYJnPBuRUq5rnydF6Aw3GuDKzH84RvKfuJsUNctLMhN5",
  "key23": "4SC13P1iargegr2gpXQqMFxoU9BQqAvkkcjFZWuoRwcsDTSSLeEhJwBxK822Q2wDqHf3E3h9vRf5K8ypMsbhHSK1",
  "key24": "4kqzVTn9ARFLPbH3M11QpYTMQFoHiX3UsrXnATyUfm8c9svTGBk9jSqySTmThspw59ovMYeCC4Hv9MfokPiRrSkY",
  "key25": "4qmqAg5jAwA86yCpyxG8iYsKj5kGAftrw8WAYp65cYEuZwfNVZbd7Muyn91aFakLab4QsBPLYZ5A93RvEQfciVdY",
  "key26": "3tnxKgffFebZxENBqYiufsX2xETpFV8y15rExs3mk1WZQJQX49GnC4f9XHM9i8Ygu3Gs15zViK2xqLSJkxuUAEmh",
  "key27": "4hLnpL282PFuDhPKpQkvm5bGahN1f3txNVuuzgQa4ur8VC2PKMm5Fm5Sms142vrgZaq7SFRix5xKXmsxnZJjzb9",
  "key28": "hS1yxDSYA9sF73ahnkCagutQt1YSddFrhWd7JWUngHaaLxDUupGNuSrHqL4ikvXPxtF5N2Vwb3HZi84YLM9D2Li",
  "key29": "5Zj1HqMYDbxLaySiSFBZ4x6FMfV7NUHgk4uLwNtp5ZmBz6UmnN5YMHB81Zn2svsA3QEJrkozVgQbhMDj3JLUUpjs",
  "key30": "b9EAG5iMug2RCUxLyF9wqdcBwwfbMGeeERKyr584rYycocC9rHHAVWQM72bB6BTcQfoFM4Y3WhYzAymRRbGGMdK",
  "key31": "qLDywRyLd3LoEkk7hu96AG9muGYVppA1i5NqfjjRpQ7BbDKXXZKSqUdoBEdZTBGhfsgghiwSEr3Vmzpgv9BvgNB",
  "key32": "CksiK3fDFEDjf2bgCA9z159jNj9bkWx8BnEzMFyp2jUZ4S93XrYa3LAvcU3Ye9ZtEYVFNEk3fVaaAUunn5eDm1D",
  "key33": "2xer5PBGXWLUN3Pq4KUpQjyma7vrX4MD2g7fdTovsKKb5fuTTvgzejLzwZn7psUqqJbaMd6NAdd2RkB2oHaY55ds",
  "key34": "2pP8rbFiyWUfg5xbvggR7njfjUwQoJ7dEc4PUausJbc19NMHqrywKp53VDaL3oB7FXufeifJ617Rsmr66rpjhcY2",
  "key35": "56LCHb2BGgReySyUzbAs9FYevPBQG8sgft83Ug2uhwT3j8TqfDhveFZ9m6oG3D8QHYMGD5f2xnGms6qKpaR1moeZ",
  "key36": "wWHk8sY9XhFWH7LbfAfPJTS1ZkWFHLsqjjKTQL2RY1Z9rz6M9Kh5m8LxaUBcE8wmdDRq2CSWJXsPboMmhuPfQLz",
  "key37": "4PHNgCEouufj3peY1pBVbE4u1EZc8ekZ1JZdCJFN7Wn3EeeXL7KbXMT6dn8VAJYoCBzmP1NQjkxMFE84Lg3cfs6K",
  "key38": "KPYpKZqVavoe8FATRUxYX51cqTG8rfqMggGXG7KBQ3vDy9VMrjnpVwvUMbgW39VvE33F9u3GHRrWXznjUkUX41B",
  "key39": "3awVUu3ag8bvAHCqJdN1e6ufLZyjnJtF8rn3dXhSd2f5WsQcLnPynbirAULeqhCouLiFsiAgwK9VehKBzLMe9rEV",
  "key40": "44CceGRCEhXu5aPE51mVjEnCTfswA5NVRXpAxRachHB7VzegvDr52H6fZL2g5D5QQiJtBhF4scSWa9fz4YwELbXJ",
  "key41": "3ii3xf1NThQPfJPuDhMs5J4FsEKmvUzVNS8JizfGBpNVYVzbtwpttVG2mNtvM9FaXYeX7vYgfGqrmUxWTfUqY6TL",
  "key42": "5RxAa6b2tz1AJP4PWRSLKRajYu3S1jYqv2J4EbyfqruGrKfmnsenznnr4daqEJiVjDMnsNmbotgfxxn3gn2d5iMz",
  "key43": "5mLqNPrSL2BwhNo8goHvwmdxZGTDrwxpfwdrEvnSkwMWhoGGpn7A2Dsh59iSiFmqnpKSqbkvgJfVmSSscQaZnmXy",
  "key44": "NwsruvA5KTN2kuiUyJv8aAFXA4mfC9v3bGF9VnZLuLXdfEZGGyzcWAyATGRJJZwzaLHEbzwP8AMb3FU6ow4pBgi",
  "key45": "5CLizsJSSb3pGp4TLUNBWMRTR8yMPRGqoAzf2sjAqMMNtNwCF1XDYni6sNEdtZGDQneL8YXVxHFZjs2Qs4eGByqi",
  "key46": "ZbAPesG9eeJvNCLWAoxQewS2d9m6XHhNLAV6wkUu5VUfTabSxZvDz5iZpSaZ9WUm5knyxbyRskxbgiR1y6Qv3qf",
  "key47": "56sWhWodREzw7g6iJkpa9GuxaAEWSMYB9n8CHpwkrKme1NRckQNMBBrMRahGa7GXd9MdEpvun7kYiNXwUZFH7qsi",
  "key48": "Vhhw47DUPSAVzt26J6nmNVqtv9fJiE6XjZ1ZWtv81N7uYkwi1Ez5HhWhWcPi4f8ZLJsxjjUJdTnbn9TMKqXEWtZ",
  "key49": "TL4uXPwGv7xTmJ6ugGuWoq2Zz7sSLPARkpVy192gTYqk8Q7f4HJZq5t48idiaY6XqQfMmHgtX4Ey1omVXk25LrP"
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
