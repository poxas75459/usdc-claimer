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
    "2zY48xtGPM6dWKBWQgq3m91Zz2JpFak6T7ChfbjrNFCSnjwSeFd33NaPjLNJNjHdYK9tnZYfLSzzPEbGnp4uHwiC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DNwZ3i4TbQSie8CbmuL6wMsFDvxp3vphCjrq4YRdLPcMpQD53V3ngD47BKVvhiVB9QA7BZcaNQofUCjKY7ViGfd",
  "key1": "3CsBzShmcAD1N7qmeiPAsP1i7k7PZ17Eq8zubYxWWToi4LFYBPV4U3BSPP73VQG3RuRYs1ppejfayEShswiKobMV",
  "key2": "2JRUta7nQ9EKcQFTWd7gAdSRSZHg2HYVqy2CCCqbHguZ4cZuL3cA1JXXZCQFsFGNXSaHgkN62vujRtcwMo9AJe4w",
  "key3": "2pRGwpmrb5ENTcLQiJpJQRWhXqnDPmCQUsrPWq3YGECgjr5AYrRoJ2RLft2tiqkBvcsD77YzMHY1Fnd6k4bN9hit",
  "key4": "Q3oYue8RCGLdmAf8RbzxYQDYiS6yY5kXi8p7183QT5MxH9X411GQXzr84eHiGTXsk2BCepdHVFn8AtyNhjPDfcg",
  "key5": "XuhvyVH9R6pGYZz7PCbWn48Jo2BN4j2kgKZoGJr7GkZP7PSv4pBGWoZVryk1iaGtoEqbCCVbSUgWL5ddUJxHYgd",
  "key6": "25fHFmFt1L3e8vNmPjpQ1xNKQkHodgXRXr5U43vm9dVfNwutN2G6KtdYT5cpA55ivSkKbHiq8nUQkWYN8aSZD9q4",
  "key7": "2Q8S7VL9QhBXgDHXULhtTorRLSCYiiUEpmCXECnwsaSwnXevvyfAQUNxpRGofnkWQKoWbZfYhnGxHpvpA4QiXKJo",
  "key8": "3Z7tBzbZ9VovU372shpXbhneTgogA2WY5Dk9EnbSJ5iudWkSSu57p2u1T4qrzLgYTZ3CB9emdz7Y85iCy1EQmzSZ",
  "key9": "54Xthig5mrByz9yZSnc3KVJc43WCKduh1NZyRLErcDF5GFWJjJxExcwinV8vyjd7TwyTEXVGT1zgcePZ9xm2Jept",
  "key10": "2FTqe5e359nMv1pakSCviMVoXAqPHQ2zvrU3bfzrz2kLGGkgFQHsFnby5Vnny724Zh1bVHExGn3xQYC9ipkaRnrD",
  "key11": "5yLcUnMB6hNwafcteCNa4jgoLXgibsWcyyd1ej7WeZaR6udxBQRHPVSyH1ZgvLuUHz2vMA3zE2HEyPBVL4HfJ9kF",
  "key12": "5jLDRYRQD2ByAy3m5UDH9SkrF9eQrDYSjpFjHTdTdULg7Ep8g7LmJQcXVzTu8irFQnZ5iz5HoJ4DVqE8cMvfNv5H",
  "key13": "2eDEb17npYcGfXp7DUr1fQgZsjcKAy9qb5q5yYS9xpn8p9sVtUH7GVvAuyVYiGUsRMzxoHDJwSDEoRZhdRjNCz73",
  "key14": "J2bfXxTTFncks5kU8RgyxvpRP3EcypbEH5X5HmgnzzapyeCJstwQJioKoX34t8mDKx7kQTAdTnsjYs1WZGg9Ws2",
  "key15": "56TrTuz2AjDn1dBReApgkynYS9wFAvuBkToc3B7yVJQ7NmGfJkynUhfUH5uEDuLm3LR5kQ6CNoQVxXjmAMFAskDh",
  "key16": "22hhYwSqNoCzAvqHkWRrCYGYSfm4pfd1JK85gXvkU3atAQD5DGE911nVpDhXaRwmzRGuWoKVYxKBpmMmgEQtfBvf",
  "key17": "3cwuQtdztFKa44zc4ACaVP4vBhjEc4iAJciKarWhgn8wE4oAMfJNDQYxU9i368shaiho5QMTSguaLytYs5Zo266m",
  "key18": "2peSLJ9MgJLhcf3CRgTiMr6WB5ymvtxHEQRrRteMEXYnoguc5nn1EB8aGKBMpuU3LM9qth6atq79Fv64zsDCFF17",
  "key19": "yfxc7GRr2eAHXmybU6sRu75Sm7w6FLHPX7edQtxoPqc673V9U25RBTN8HV3cv8TpLaL7w9AvYpbu3KARQfqHxEG",
  "key20": "3WK7L2XKLHuZ6pqEA4YUFtvKEhLEdR5ndYSXAhQDcXMS3qc53ynE5TrmDWXFxDLsKY23XGEq3io61Aj7Amvq8Pmk",
  "key21": "3i2ssEkuVt45L1LimfbCEZbV6Dv6jjZtk3kP4rC5qn3BA8aEhN4sse5uXNMhAivgqrahVNE8YCFBx7qv8YwJWZra",
  "key22": "2dResjzk4PUX18BAPVc9HaLvmucRkPXKxkXnZCMxPNyFxDECX6V3ejRotQxsbD6hoZUXYFXfLt72HXLjERr8prBm",
  "key23": "DQhboETAynxvMoLt7p9T6xkmkKiGj5SJUzV8JP4HENuyEEFhiqFbGyq7d3ZGjdumv8EfZMLq5Mxmu4TNEmaFMKg",
  "key24": "4VwBw3hqT1b366hVWjPghzNp3aAJTboEBop2Ahhg8nxSq7QWvC48NPRw6T4ayseWV14nZujjCQrecAhAuu4FEhB3",
  "key25": "2j6g99XQty6qPkh6p5cwYtwuNq8wzXoC7HZDtvCoUmye2jVnEVNLkUZUs76ndgsGEnUPzoqd64x4ThivXk1S9ALN",
  "key26": "4WHVP8SqcbHb7PjQFzrDMSWT7buzyDBrwiZRcTg7P5m5FANVtkkBdMGnpkT6okvrtguKjrp1ZtPn382qy9KEAE62",
  "key27": "2x8oaEufDR2CFRa8qcMKczCcWdTizzqqGhzxyohwg4bHWzdHusauDkdBGwGFX8QF62eyv34fuptdovi4JZ19Lpnt",
  "key28": "656A4PqUrKzg8FfbDxv2wBbvqVJBbFoXu32Gy9sJXARRLALNzEGmah1iDHMgVU6z3dgZqyBfUUaJG7suemZXxBkP",
  "key29": "3B6UYqxTYc1DA2NaBnmvtWPdmqvUmKhQQHC2Eoq8WhLBhiPght7kzmjhaF72NY5K6HB5yUJxvifQCC5noynr8Vy4",
  "key30": "2rprLq9N7xzPinFU7KpTgvymWFtA3zfWwmqhhHEAd4vHDsBtJ4fc99yQGGwRN4bfdMk4o7ZG15was1grBb5UNCb1",
  "key31": "2rytAwZiD9mvvCWrEe7r8CDjs68cLRMfJPUVBLUVbrqN8DeeA4ykCa9Nx6iRdP4QSn5tLZKvE8JWhYcwXdWfTRzm",
  "key32": "5gGYkWfu5aGAds7u1DZcKK4VBfruQSzuejH8FbPbrDrVU87A4EoCZjybGTFim6AjqG3S72haDsSKfW9pi9jbjoTk",
  "key33": "5xmhe371yb2qMqtwvNoYNiCg8UVykPubGV1a2GS1y9qWzag7W2dWZxhJpHuCrubjuw6GofmJB5YJN4MgxXWhWoga",
  "key34": "3qNpyfSB99yiAnVyn29QvwD7HzgnVdhWFtUAY1457Fip474rLGNza3BW1xfhR8mNVDvGTt5k6ywzxw5vAEWF667u",
  "key35": "359dDVQbKyvoaUxQo2yLB4KPAem8i4vaoPzpuBoxCAZ5fuYB6rMCwkn83s3JteDK4iAAinHMrR2m8mNemAoGQEJ6",
  "key36": "2R7YC1P4iwnXuyXb82onPp1o3QAvhwjdUamgA2sE3kxHJ7hU3fkPyNGbRuSgzXpFv9CHNJZteuCRjp49XFuZxt2p",
  "key37": "J8qArADVBuxMeFPB72bb2QcYK49z9stZ8uV3WncxTnwjCJXQUsGXFDH87JfVgRLEcvtZEvLar8JqdKMuwkpKRLx",
  "key38": "39xw6RZqrwdZ97qqEMg1D5xVKBBB11mrAfxXqF7aDP13ghS9sALrza8a7e8fJ39CbCkeVJ22rXDLi79UkusqmsNf"
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
