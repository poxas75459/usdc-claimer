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
    "4yv53KQLkhQ1HmXbexAZ4EDmekvqXksU7KfhWmimL98aJPg3DKS9uV4fjGfk37nyjx72ZxJdejfgpoLAeQbYkBnU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CFtXAKafNUC5oxAW6oPQn77REVgm51r8zdsznLR1vUAZhcyEKeMLCgCciUErPmPTroszkhZ68ne9gxZJkzgoFaj",
  "key1": "2CTyMj95pBunXJeo82BYmoKwUQ5UinwmKDXNF7VrD9FmaHKdE737DKerMaTRyfSVGMbZvZsdQBMj2Ps6oDGFk3Kq",
  "key2": "61wJ8ajy7m8BdXPX5YpkPJY75oJRCS2Y9hVURwm2yToRtxvZQhRem7p1dqoi73szEEH2RUuUrzG9ESfDx3avWaDZ",
  "key3": "4ARM2bDNRRdFsST7LkYRZHeXXU3t7EyaDijh4q85nPQXtjeF5oKM9QeWTqqmXpuH9CNisFnv618UNUfah4oRhcmg",
  "key4": "24eN939D3gGZrhp5kbKrmFen8Mdh167Q2RnU2oa4Hk34T7MB4PWMvSBw1RdPp1QrQvuDxMVvabwKQRSjkyP5YKQJ",
  "key5": "3yhe3LPPu5CSfXvV8paQgGauZNuvT7ESe6tLztJJNqWHZFqiNwH8UekUxgFyZ7uL44JAHKTH2QF7KG567DTT215S",
  "key6": "3wTvvYqNGitYFYJtbqqpLq4FJj8VYcqgTmq51AcpzPQcFEWM9hWokF4syLAQ37kgaUimpsvZdpinkpVA1bkLrCAg",
  "key7": "3uz8BwHSXiwrRyggSJED1EPy3syf5goEWxnVEUy9yso6QeiE7ysyZ8djbSPVfxWhycSgF48o35XHkH9GvDtNwc7k",
  "key8": "2f7wZyTJ5V7diPbj8vTgMNCiwDuLA6F4BEdEwazEjAd4mPbGAyHwTxFpoLfkQe9aJZES2mX8y4LyLdfmJD1pm5Fy",
  "key9": "5KdxFZwkfkExAx9nYacXpwJFkcvgc7e42bQ92UAfJnBRF7jhJTQh9pYhYHveeJnxj9gSN7qfs79DSZiezBZgF1X8",
  "key10": "3qjsezusB6oiKBSqtpA4nE927fwWnmRx1NevGgasi6KtijhEHtQs3VMMJsEDmkSCP3JG6y57d3Dw25PNF5FfNL8C",
  "key11": "2fYBrpFdguqQSHkXmKzoiks11ZC1v3NSuyfWhrh6fXWyUYU8mB8WzrDi1yMQ9HLj4Gg3i8xiMLFGCHkCRa1jPJs5",
  "key12": "2uLfCgvGr7PzEx5ZKzX2Q1ZJm6gHLGgpoe54Cmq8FAgR9RtwYSSsUPHQJicZy66MeGQYVs5EMzEKAXiRrnMFkSjH",
  "key13": "4gvAkY5t5rZ9TTLPKPAxcj5pj9L7U4CB6MVASjPByYgxsQSXekVdWgJShHQsThQMcVicNrapmvmZSjg3YHipMGVr",
  "key14": "5bmE3gDvYsx9QU6LFi2tZQM7K4ZKARvqH7odiJFMiPMQuS1aFg9oLhzdnkArsQ9QYZEQoF9uQypkuULUSqbic7VD",
  "key15": "46cH94HkXk97V4WAkj1hMD1DKWjzyUdXzikDtRK7MEbsWoi9CuohHaxyRurkNr81WRPTcYcizfkMwha3qo8DgRJS",
  "key16": "35pigPuYXZjTLYdKqqg7XhNGgKAm28UajfxQEVP3vaof7q2Qi9qXSF6oFoWebVYUVM7VrCcm1Q43JSeJFAatGm7q",
  "key17": "5YYCiPvcTqGTG8eou3kJU1Xh6Yt7dFDQjcmKBfsYx2WNAHsiEGDg8DQ4Js6yaBr7dRJYkFroHdRhivNDHAKkA7Ni",
  "key18": "55s7rHDMw5TG3Y5Hyzyds2gt1nJyLidFcv8nprXWvKcymvTSk5JcfbvE3TXyF686nKF8ujTc79ixavA9ya7vRMHg",
  "key19": "2H5PffSmtEBBPH1eZEmxd2FjTGRGdzz6zvDzwVet6eexUwh4MyNGqDC1VBYgRMDRvixKhAS8h1xopEuxeyFUa2Gy",
  "key20": "2GX7hRbVnYhRFAxF5bBfBjuAGoodZxrzwJgLnfEzJeHk8Mjgrd8JdQn2FuqoSN3Lj2Wie38oxJLQgMS3RBt1V57",
  "key21": "3BGp1h6nM4P2Uqfp64RSC7eSuCZR1dua3uQwAbzNmdyNQFoVgoifB8N1du6LCXfWMJfceKzPLQ1uovrwXt7QPeNq",
  "key22": "24nBSb1qXR1kMXEUm2uBrDsMgarVPAvCu4YdBkc2B7cjrwNpCwPBA37JQrCUazyST4sqk9qxHyTMgAzwXJmb7Hhq",
  "key23": "4gGfQTWeajFQgEZCwFdwBVyuKkTSzVLbp3omwztiJVGvUy1zJ4MaxHkiipdwMiUCR4bWwiPPGuF9rakQb2Z1kJpu",
  "key24": "45yfKoe19vpEFN76toDojkUD3QdkRuwnUatJzHUt1fNWtrRHvNAVLiAtZ9TyvjSNbrb3WtA9KhnUfJP5GSjcFbfr",
  "key25": "2BBiVyVi5JUTyfT8Z8mdc89nmQzdS26RdBJdB3BWQMoaT1UNNCNRT3Urbs1Pu7AXAe6jFmjhdq2LtixdDAe8mNAy",
  "key26": "3G91TvsgqjPvvi3AphFhEsU1qKUwMr5PKz6L9edYMcbMkyKj8NnC2qzXS27qYzzkhteG9E3wTVjN2m6nyuY4koty",
  "key27": "547HJsduPbutRFSYxXVFiaZTWXuu6C3uHCto89sXQrsvyA3ppq851pZcSeB4kvxiM1iHjgewkii4PfctpMnVRHL",
  "key28": "4YuQAsp4iTWX4W8oWJ84MpU3VeRkzz1b4hTWYS3dpxEdBvDkKquQXmnTduymMdCTDpGNi2B36qaBbS34pQVj4Ccr"
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
