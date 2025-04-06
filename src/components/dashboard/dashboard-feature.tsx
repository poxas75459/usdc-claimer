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
    "5eaUghahV5hc1X4z3xgTeL8fVvE4KEbRb3SDA45dzrGfzXYwbqxXyccn8zDECptvLdkvo1NPfv2p3CiWGFatqjn2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kJ2Xo773nbvRrusV2ndARMjSp1DfKXjUG7xY72dqLwEivHsQvV8JHSGJLJKJypkbBQVqkiremmLMJGbBSeTPDLx",
  "key1": "TnsYmhfTE4NycppRaqVi4Fi4tU2GBumN1jv9wJsQbSbCieDVK9Gfn76BMBGmc2PB16Tfh9RVEAvXmFuWbjLFNs3",
  "key2": "MS78cFhw7Q8KbmsXb6XWgyR323z23a6o5pqFWpww3UxudVFiGVYRru3xmWet8CLdr2h1mfMqUoUiczbNFhtD1um",
  "key3": "23JKB4HSEVQDktuLcjvHQa8LSFjqYhQSNxduC4rNdGe8WacaMKuituYYYB2B5ZAHLJoiRoMb8cJA28c3uRtbcPYn",
  "key4": "WeRUBuzRHvb1n5beuggGsjGEurKPysqPdA3LRCL9YM4cdiEEgQvqjUXg9j6nsc3LHs9CZNQgCffMfcbwpCjZvKF",
  "key5": "5eipvxx5F7ytBsSbdErp9vHh9jLG48W7zC2NtL3iXysewrRsb7i273NQAcJNkVSNxHY3r6iFob8hkVZ8i8awGmdw",
  "key6": "2VCeeojzwoZPtG9qp2QA7jVbAL3uQPs8ZcVXZZZDC2BwpM5mcFAFRJ9CX2UJfq9YooQd3kf9udpTGuh8fvqtKAaf",
  "key7": "tWPpdGTvM3mcUbz1YTqzFf51hGnn1iKQvoxXXKDfvYi7VyKnxtQWTJa657QWYm97VqSnMxLN6DiprKVvpEfeoaK",
  "key8": "T8TC3qJ6pn6XsJdQ9BkRUnu9kWgvUnDTy8YDV22HErmWHg8Ter62aH3PpSyVPnqVxJREtJSxsktsBsJDx7cMwou",
  "key9": "3kHb1u5YoiQLT4p8gfFAjnaSWLG5K9yyRuWaLA58U6fLi9we8NEfjg7NKy7XkijJFEb7TGebzYvohGNSgKyKbsa8",
  "key10": "4Nt6Sae9mRCrFg4Vkd7UHMBKpSwnSrfFXrZALHXqZPY6ERaz1qV4C9zZJguaGesVE4EcfcdFKL4TJTBbtoRjBY9F",
  "key11": "3Q38jZWhkZ1ALx6QR9quTNA19UcxukgKUeEk8agQhcyCqiJiFV6a23gBAuH56fHNZVa5gwjLMifhHkG1gRctc41x",
  "key12": "xt2C3UxyFnZ8gXdGUTXdVxJsFvdqh2UC6FVE54ipod7ckJneALHhhHo6Hn8WHDHY1vRjZL1MdTawjngsxDHhkAy",
  "key13": "2kzKMgjj9qAFCNgPh6WX2vsE5ApuA3ZYZMiSQsLfEtAmk5yzJHKVDV9w1EtzMqS7m5nfBN7552NE3oJEge5LZyoy",
  "key14": "4HbMtiB9Fty6MVVmPRj3NM9ARzdPWsmvBuPwaqEtb4zErrTLN1TEbNBCxW16JBSTfGrapEnzfT3yw63YhUoqmmts",
  "key15": "2rcNEjV8wURiCn2HcbEkgME2qeXbdg2MNS5Um3dAfiKPbSN8SWo9rhW68MUkZJ74ik1xtj35PQbaWfSymWKRb5GD",
  "key16": "5SvSRKXhL7DmBWF3o5DLAaWtFhM5oKnA1XM57j3FiXGEU1xkJwrF1eKmL2GVHC9PhjwvMmwtUtztcFWtyjbLH2jV",
  "key17": "4wytxgwpuP9qxH6Ue7v79zEk6d84wM2hKCEW5XzUNdXHheczHSyLokJxpjJP2iEY6PvYdpnbNuDXfY8U3T6JGSJH",
  "key18": "5xmk2UFJGFpyM5YdE4ZveZFLvFjP3jmx9rzagfRPLzNoJUFXmN9fJqqGR98Fwoum6ctCvCJLbUo1U6B1pBoFjSfJ",
  "key19": "4TJb9sBsh1gRdEKx6HvpjeAE4614HVGJFoudQBB1CjD6yRVNnTtV7zhyevLfgjws7jDDiGy88t5SzSHmjsNkGwp9",
  "key20": "4V7F5mAnX54Nhx6KUTNawvXApUB3dwSd1HnfT775EaH2AUHKQcv2XFEHheNjveL4WqZrDFxzPwY2UwyU1CNsTQDs",
  "key21": "3cfYBFQBmHdwwPBY7CvUGUcRhz2wAdqpTUy2YAmDnJXAJ34hzdLcKW2voQwsgg6NtvGVpcHLEzxFMz293ieW5v2G",
  "key22": "27C5xDQcfLDivsHWNiaUdu9A2dYWdBH8BBHh6owsysVtW9Q6cXU3KqHgkGfJKa49mqCjigug4SSNdfzKsgDL7HC9",
  "key23": "61MQZjgN66sDKFaneKvx9eWxB24kXr3rVhnJE1kGKHg9YkBmNSG96ZGMttgfJXrVrisUmrNeV1DBht2NEpRNEWQM",
  "key24": "4Mbx5goLKnrSHbXY4Rs5NsWdbXdYYDRhPBN9hmH2dVStioKzSNwd9jcocHdrw9DarsSzFhDaZ8du24h7vK6XEW1o",
  "key25": "3UxAAD5BUfKTkmeYoSg5qZEHQ2T3dc7WX4TkX8p7LBTZ7CwiwMfQAGjviVfx8mdWYpmh8EnQZcuG4Pf3k8bCt4ut",
  "key26": "7Ti7nMwimrHuoMeYjtT1mkRKAoRrV4T7U5Zsdynd5j5EVbSEo3f4kuC9FdtbAPvvMS51FjZuoTRiFNvdhAA6pPm",
  "key27": "3zSG5VbewXSncnZczaHGj7Nxc6oaF8b5HrLnpy2HKaniEJqzKBNajqhhb9C3kv2DNwqRAnRKzeRwj1oQEHEJ5jUf",
  "key28": "5GNeEjWBeZ9uXFKdxQPagx8jyBTF6r8ANVtMFMGYZtXUw5UTQbd8WyhZCTP4WnvnpmipXT1qp5LaQ9qZqiGm28GX",
  "key29": "5fcP6C2XzSUaR77otEapb9EE8MeTxxEibevH5u1Z5FruRfrdiAQn6Q3RWtRUNv7v1WMXT284cMuETa5CrgcwYtw8",
  "key30": "2dvJQoJ1M5B3z85DBL6ySzKRvupVJL9U4yFBm8QAKmhNWvWDyyhzpygVabJnWbYZUhFsSeXo9Ka8sjHE2YWBRbav",
  "key31": "49nTTZwPKSbm494oSJqR475rANvRNQoUGbza7tBnmTgtyzj2RyqVuCWey3xzdzFRt3NNfVUVWX8nVrap4UxrHgbd",
  "key32": "16DFbFLuK7jAnERdSpxtDnb64uRaznsQoQkEAYvXnLvvYK6qXiZFaNnRUajokuvshzTQK9RoGzf1VmAPLj1x14R",
  "key33": "AR3ux5f3AxKcD2LGSobznKbTbe42wQBaCotSLYkWvveSnZCgTTuB2pMh669aEvsCEyKQz2EARHUSVaS51YURKXU",
  "key34": "2EqFap7oVcsa3rijE6X6G49452cLZJCW5L2QCHhbUXD7TBmo9vW4nYef5FCquBXNBNWGJ8EGfJo6QQKrLxcAeopp",
  "key35": "Exnmd1dGohjedbF5HJtqxwrGg8qk7PXmdSTxPKbqHEkmFc6Q7UPjYnYMEjxvHgrKenRGkWQco2suaQXHsyBnkAK",
  "key36": "82osPnBt6gEHGTXWgUUVqRLpSthHSPs6qYX4wPKD6oCcoBpjm4Sy98uenC3BwJNA6wVj2EVf9Qk4AjN2G4GYxpd",
  "key37": "25LEeGKDAKfpHHBBBYm5EGprLqT1GZFYg2HUJQKji4TSRpTofAgFGCirpxLc4CenTerH6SdyFtShgwJPTd2Spx9r",
  "key38": "2wwmN8UZEP5QFEoBjdGVE1pANqGmq55LSpeE96pgz35Z6cSHUr489BRHs2pXLqMkcDaVXT5sZuzVZd9arQEbd7Eu",
  "key39": "2Q1zmttf4N9B7bJJfk1N6CMDYmYEouDQM5rAx5DeJFcvzVpJ9U5ZywBHYZhArnDiwpjQGzQAnfX27FSJ9cnn7ua4",
  "key40": "5f2kqiJqwhx1fYG8c9sCZGHLTemgGqG2vFfLiUxsV99irU4FqCtuXYepNaqnsRFAwVhds2Kn77gCmCTKwdEqC9T9"
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
