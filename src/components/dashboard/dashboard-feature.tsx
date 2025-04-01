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
    "5ckeaW9jyipLmzMb7LBn1SNRj7oKGgVJnZbdG5wbTRrHRzCENpczHkCLX4nXiDt7zLcNedmNVnsw52BGxuT8CWkQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yENg4i2GLj32PbKgrcqoJmJDwsAU2wDkjjAVzZ9KcjTmxykfxrYV2iUxsyMVfvvYX7mUQTz5Wwrendfygb7NRV5",
  "key1": "27KriQSZhSiuSLsnc4iVknCB7TNJLBVJJiv1A5M2vGRpxAtwjuM5YNQ5qB2nQARHrpYAmeTP36tg7okDfdQXs3QN",
  "key2": "41r3oeGKvEisCYMofPzxun2Jpz5f6AxrWhdgVHxUAo1dSmvmGaswXgo7G8t23y3xs3r2QUtULZhE9k8f3Y11zPar",
  "key3": "2wkxLP3KofxRHsFcgrVbFFrgLAUsqQM9P3R51EtQVBc8BVm8rAGHm8GXDE1w98HSjdDkrMsbrTJha3c5CGWV8759",
  "key4": "kYqPwWPan9jKa8LKqbrNnWpWBb6P5C1RBSdZqG1gzwPL7tJoDLFhV4g6n52D2CCvpC8oBfzhoSy11uNXpXNtahb",
  "key5": "ssP1AAJHvjZqkUR9tKFMDPczNC7vHVtCRQpsQbdBZ3krBwTaCB8nVmJSYMxGsL3A4LgXZXw7m6QAi43JKEhafJA",
  "key6": "7uvxgMBhpCmB5tk9o6tcyVFPUpsUVWxe13NdxjCnafxn5LYmrvMckkgaS2yvFYNWJN6C8HQpcehfM3z3kV8UgRt",
  "key7": "2oeJA7goU3pryp6FAMj6iPF9m3PjrW83ds7JN31cxt5d7kmsXdeNatHAWL8FBzAi83K8DsujvnXp9ATH6opctkLz",
  "key8": "3khA5m3nXiV4rHgYzFg3cGnAw9tjFUnVJeLrYWepbwJFpZS54zaADv6wSwbpnK9WERFJmewPYg9y2xBLTCks5cLN",
  "key9": "47yMMZrBz1tgtmvGQ6aj7VhhxBH7AFazoZERMLz14XWgiJjfGVbJ4zdHD8aZL4as3i2Tg96xMofGWyZBfLExgwze",
  "key10": "56L7Ab8xmdksnWUzFrt6XhXfZtgQuuLiuFKbAF67VVmSZHtCE41nmtn85e4Cfm2JcTijQ8whfUtAroffDbprs2ow",
  "key11": "5aYfkS7p6LdFb8Jg6tw36zA8YS5nnVMkxcQgLUZWLj3LRRMhaTBYAr1oJmdzUGE2F6RpSkizq4fmxu4ZSakLc9Uy",
  "key12": "3Jsdk1JUiR6gnHxD941nSAUt92A21Hd1YCYt9dXfzbZwXP2rp1EsoPR8SQCyn254838NztrRan6d6pmxu6Lxi6Q2",
  "key13": "bYepqf4AfA7DrJVUQs62H5hfrg7Pc6Zxg8o8aKuh64fyk6M6F3WubQtYZZyC49dHNthvVc41tpvBLCXmFSbJGi9",
  "key14": "5qx18LzSEFkSgD2M5q83wJuEJHi6ZGdfiEFsJheSc7C5jDPLAvfTnBP4gq3AycQyovEDr5rM3bvXf3pSjNBLzJ55",
  "key15": "3ZywUYxxneEUJ1TqTdqpCVzEozfXvook18ZJHMsk8GfCfaNDRZmu27ZVumhzEwxpoHPyySa7SFFJ8m1M5obDzsJF",
  "key16": "76Lmk5koQMgXFduvdTL6QCUcPFEDzPw6xwE2LgXZ35DU66C2atNf56RZKQ6dLvwuFs6zi6L47AgXWkfjMqYfiBj",
  "key17": "4vQnRX48n9LDn9WhoB8aU28TW8eKQt3YqFwniw5NsKyAE3EhyxKgVyGTyya8mmfcMKM9x4NHUiSoTwCpixrWWe3v",
  "key18": "4157AP53J4tk6EJodcnnaC3SHWnwvRxYFNunChrn2tEB1wMC8C4AYCDape7FiHVT4DsqtMGVmzhLndTV8U8Knut7",
  "key19": "54o3WaYpQ9QuLMbivobrxRCzD55a9h3uq2hMzLovwTMxmMv7i1GGGqQwPKdurg4BeTG7PiXB3yb7amyw1Yb895uV",
  "key20": "4X14qM5nfYLP3Nn71vrB6V7hYY9Xt4CTipMJx8DgkGwiJRmdwxAV6dgHSMKrzq3GPdntgs6orHpqiyH5PqovcZsq",
  "key21": "DVnVzNaZyc7A3wbFctBNgewaYpcFXpwtRsEvaFHQpYUPkPEMSk2MvUzPWeaKDkJzDbGo1wtNNvMDjL7yUd4nGPL",
  "key22": "3XedJXwNREYcioxR8h5UrJQwWNKAA4q768jA7mBRgTfR6EV1vN5Lt8yCGnnSxtJNuA2LJV61xVs1TNbZNYC9koAu",
  "key23": "4eSHzYjG786JrQwQ3AeyXtud3bAtNjq5SaT8aRVFTFdwpgmtPNMLrbStiNW8VHGs3B36pjfs5szpNCyeEd42Ay8c",
  "key24": "4kuGVcF2mtNniD7gefaH59VZG8tM1zvvUhxdJLTir6dFMiyyAWniLoHLCVdNWAnJgtW3VkBtwKQLEGa4DzmPs8T1",
  "key25": "4QK3WVWqapCX5ChJQCmLzqCU9e1PL6y6WrnYAMHQXkYcDqnGeqngQdJfmgK2z1c2y4Fwndj2Ys9hovAtbx5K4jnM",
  "key26": "4m1VC6LHQ6cpHYibYCvMzZpjBZAAXPU8LDHXVx3osWkaUXg2eQBbGgGXtkGZ1DfjrQ3DXD1gjiFRqyEzfBRfjnwV",
  "key27": "25MUjVQ9RVBGNyVpfReTuezEpj67mgGVGdyvVdKwUyXt7cc8kZEebzw6L8op5wf1W6tMHfUhK542Y4394ywP3RrR",
  "key28": "3YEVeAw7qedHCi5ECKhBu5jFTT5PozBBy8eiuiTShK4C66yQM6Gs5VE4GYJXr2Hb33sjCbPyFXzCkvhTtjBSS63h",
  "key29": "2oM9YzaQUKL8UP9SVZeRtkUuJMW3F6efSWqg8vCFXSBW2n4CE1BLvps4vvTq1zSH2jCN5oTxiebY2dMjwGZM9eaX",
  "key30": "3ksZ2cWChKr3bLgE2R1BdPLV7yqeSd8ej5JwfqjdLDURLKxjabfgpmSH2KVeLE31GK3YmW4asJxEW44WLHzmboLG",
  "key31": "21fBMtqo7W3YEJpp22f3Qmt1x6DBE3wDecvyLg7QBXYcBTDiXikzn8CiPfSABH76DPGD7b3fAA1EktL76oVb531K",
  "key32": "4CccDiETo5cLNs1DSWtiqhXweudEb65aqELBZKh42igfFrBEKdpTMAhjumyvahJDgSN7GEqMW3haqJnRKtWEW8Ro",
  "key33": "2acCHQML35j5xcG6uqAK9frh2JmKajHnVpEkmDmBpQJ55XEEBzSKAnewpbyG1dRAGT5SrwdTdcMtQMRCsYJX5mq1",
  "key34": "KCpNZXnS2wRYs8QbZPHE4fZeRFZrW9Yju2mn4HgTXYPQ9LsRAEdjVqS3XP8vxUVxVDUQhz4i13dZiiPaTejELki",
  "key35": "65fJyYamZKBLcxRatoBzii88a7YYqFnJUzrqs5vFca3FgZ1BhevbLEYBFiSVRxzt3L3LhVfce3sjtNQKtQSirgh1",
  "key36": "42kfx8yLa1V24gEZvwnyVjPrG4Xo6AbC6N15uZ7JHn7bpRGUmXzc4Um5x2QvRiT5YDnodWW8oakHzC1zAiKyLKqg"
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
