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
    "38mrq8nrDVP4dkHSN5iM4r3dHfsgJqQxDQ2hvyqVXUpzvCmB5A8DVjFX8aD4hrzCVm8eSLetS1mHDB1RqXMhLVJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dkw8tSWapf9YqfZXLDCfF2wNh1FfGEWwaxf1Y4baVTDydyGKGwYhc5h1bLdzkfnU8BZELcwayU1AXumoarcVSsZ",
  "key1": "5EV4tRUVshJ5KxFGysLy67WCoESzDRCRgUzeW9z17VEikvesaKrvfd5TjHwzPVbxRvJ71H3veaK4rPR36FtBv52t",
  "key2": "5JYdBZYwhFQFXpmA1xpGFAe2NFEkpuxewQ8xSve2YUUzcJzDqAfhiy2iTxTfBivQGWZ6m2oqcigkuFWSq14rmGNh",
  "key3": "3RuXZkq4mDEELZn8qqnrd2Y9JejZQdpM5TtyP1TVUJ8K7Gno9iewBXAKJCEutD5YFFxGrmC1vbjxQYDpAgG3Nvnc",
  "key4": "2ycqeCVRy2Rbc9WQyJWFbBCAf6Lh9wDzxntyfZyxbcVkVe5BHrBkGpsk24uRmPbrmWe7u3Mn1pF3zZAy9rjWzupQ",
  "key5": "3Ma2rXQsAyRjXYH9QEjMiEvYSPQoLeVLLwSC2r1zozuQPjcy3ZrSHfg32vGibKwrFSCtossLiH53rsydDx4thRTq",
  "key6": "3gRRciLz4VQcbj8P5yWD5oZ95q8wRwABvRpE6gE93goGp776gJBFZ7xxj5qSNRwLoeAkXW6tU2LgM3djGhorCpZR",
  "key7": "27vfZAd1K6uH82kWTP4H8v6hfHsHNVwVNuektKzCD1h9pefMMnLEWoNAsPCqTtqdUkkvvrM3ErkCmaDH7fvXGpEq",
  "key8": "4dtU6DgMxJaH9ctt81Tp8nyYfJQN5isbi35ztrHpUCeEzxHj3NMJa2z5sqCZpasqgQ51CCCaNUYNf1yNMKe6jQx7",
  "key9": "2bhduX8VuYiGURVRTX1DJsVZL59cL8MmxcPjdkoLD8xNrfrcjirJRVXow6XsKKbpffsGvRsReuUWoNd3ezCPsxzi",
  "key10": "Dd59A458yco6xEFcQmnZsur8gWz3R4XUrL3zhxntWYSt7qHWF1XupE3zMzEjZzRA4M64z8TRxbTdBMw3NmVjhyo",
  "key11": "2TpVuc9j6Vccmr1ZHXUppKCpDBFbW2S65sS7bKkzePPa2Khzs6NxbjCYxEQR1vAcFmjSPTQQGJe98VgfueQ62BEp",
  "key12": "4YF1BBE1tFWWRJq1yet28PssDWBJ8X9s2EtX41m9jd1om6PPv6dpTsw11iGdf17fA2Fgi4yyNz7q8X7RgjwyCgjg",
  "key13": "4foXUCDCQWA57werooy5dQhkHkYeajpvujKoHvZCzYBxZqSSLfpy5JDwdoq4rWwND7Mc5UBRfG4rnq42M4QbEaou",
  "key14": "31ZwzueuppDRJrWERLH8Z2iu1zrhJEt6MErHeYPzmSbmhKh6MXn94yDMbWchfu5DYyyN1MQCMQH2keMqqtfK8dBM",
  "key15": "2mA738kzEhBSAwMHNH8vwonnwskmvpH5xsZFAY9pfHU79C2yn8YdpRSUKF7ouMii2F4bw3s4h67BUWX4Qcje8o8z",
  "key16": "3zecGpWw269wcV5wE6FRaeH2Hps9wyKvr8d5KP4fK9BE1yUNJbYrfAVpcVuoZJYUsZi47wRXnyVypvmxjegY2Gh4",
  "key17": "S6v5G5ybAJLooNYhyAVW3iQvQv23jLTQ74bc5AU1tEJTSs8KetKoYUKJhUsYuSt242ZW1ki95JA6gdJWaSzYhZS",
  "key18": "3nmNJsbPSe8DApoyDtEW1fMc7ygfLpnxW2p3b27yvRaAGaEYshVPzdm1XKVyCcrkRhz3ZbfBx6Bbn7jKUpG8dEYY",
  "key19": "aMw6AnKXEJ1DAY79pechHMuVKeownj3XdDmXJSskpa1hfS3B2x6KF2iXVGzPrSBJpf91fZJvCJ9bYG1RXKLhECc",
  "key20": "53aUfKaiSykJNup6khn7z4GTjf5yr8byETuzsfLYEJWDtCDL8Yisqc1A8uAYc1tHbp5Nhx84H73ae8taPYSLepzm",
  "key21": "5cBWDNDr9bbu27tvbs3e4RNwjVLHhMhJ7YdPmWu4znfoyjXEej2yrSxHezuiQY63FrqxLtk8d56xZ5bAMqtqbWJz",
  "key22": "5qZKConPF2NB1aXX5GwS5vd4WmWhEWhVvuN4MBZ9f9BSyrFaYoRbqwyzb56JSUUGZRD3s4wT3ZFGyPrnSUXCnggt",
  "key23": "5Jxmynj7RM5Y3r7m1zak96KEAMTPTFjRzUiFHd9ce8mnS421peSrZJ4NkYhatoPSXwYWFPpo5GwZD6ECzG1xoi2n",
  "key24": "5DMnS4r8A8QzXRR26FQiYWvsKRPDcWxFt2xedG3ASjdezTR9y7v2LFx5jA3VZ4fDFmzqdfvUWTR4DNa5JAU8yhRr",
  "key25": "39bpQuTGGjFbtnC63pNUoCHCAnnFdadVXZf7h1BxfRjHQUL1sE7jLUZSAodtidGb4kEAPomQPsLYHEmuRi1iK8da",
  "key26": "2pXPy2Ps1C5Y2jbVoVYS5tanDCPcjuqVxnKkFSwLYMqujzZDLEuzvmmTLXABA4Ez1VUAKK3iYJMor8cn49N5yBw8",
  "key27": "41knR5HVQwhNu3sh6A68Uec2J9aEpZVF5X5FRyPb2ptkWn85iYnu57vsiiFZ5BJXNkebxC2cVp1m3TpqR8R89sZV",
  "key28": "NNaTouDoph7pw4ppKGWfuNZFK9SgWrEPp9Kcxo6Zf8mDTJmuS42rUutSLb5CuRAsDgJJjMqbDkuQsiqpwKUW7Gf",
  "key29": "2grgAtqvPpVaFxCDsj8VgQSdrLESzpvshSxi5BSaSETv8sUcfLWZg7n3vRY4EXyWmMd9oXm3scMWioYoHBKtqsDK",
  "key30": "GtLgHqeQcHRrWFdxpovHU7k74dPaNdYpFTUiDeRaauxPyD74iBJ17EsamhmhRVnGwCrgXh2CZgApa3LkvBZwJtr",
  "key31": "3FD5HuyHUGoYSjy7X7QyjWopJtX3vddhiCGfxbsFyMQZjkeCRwaksahN4t5wXLwmHuM2PRQ1vzgRLPDA2Dsw12dY"
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
