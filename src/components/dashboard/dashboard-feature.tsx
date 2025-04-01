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
    "EL2qdfmr8km7vn3q9ruUMf7sKxja8DCZbYYnh1mQF5u53Qhj6gajhZwUGTNHVtoGVpHUowBABb4jV5BnUGCuvbF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k37oZUfbxEv7uh6Jqyo1aDEXGXVZVX7TPS5WfZdHZCQCtFxd79LqWzhiw5Jk7gFwDJbBmEFyFtfdoibNqDTHRrT",
  "key1": "51H2pP5HFjRUquZkLKb9iewbgvye7DaVYdh7HbvXUtDZiZH3eSTihK24PRxX4wfwn4cMtGtK8SCpt7bh2sh4pZJd",
  "key2": "2mDpxqvgK7mobkQoDzWE5sJzTUzpGvXMpwfxpc4XQQYd79UT4bjj1qbUh8v2tYNt1oBA92P5USgJUfGcyFpTWR9z",
  "key3": "4VA1765ekUBBZTH6ecHwaG6fnhqgmSdoMJjQ99muiEiBGct49gyuVZUQ6PRq1MU18ssFcaE157okPwZQTXLXmoKm",
  "key4": "573tNkViDQB5AeNDC5EXGLbMcNfz1mX2SuP5Wizqh6Nse2KQZphuhiAGavFRTQRghYaYrn9riC44U4vsobcWWk9x",
  "key5": "54TGfSQWGHaJQNsUjvzciDndME8haauS4VrUBWgD5rhaDbG7Hfvy2UaD3mYududdPv9iMKdhjGCY1AEXEUeKwKA2",
  "key6": "9YzKheeJmhcMt6qgTt7tE91FmBewJh5fAVmfR6TZCCrAeDS8t8sx6PzxjH6LXMr1Kys9zjAiqgrr3kGqKjfDmuL",
  "key7": "5CXNjZKzu4SLJnV9hqAGpH7rMS18t4kKfRe9kDZXJbycWF2j76H4fda5GCfW6CbEkSyrGvZ5U4efkDAJVG2fcXD",
  "key8": "5MEaqC5kZxvH5vgqQYUCCLoTn6EYzqid73bS55GPPvSo9vTtevLpyaMthVJiBWE3kwUXuvSMeWLBD9NUnwfz4scK",
  "key9": "2p9hQYSBzGVXiiTUr38A2RgFx81hMFwziAkjvZwQ9ii4L2MHwX8sDnVjfsjeF8KSZdc98sW5jp2m5d1CS2aRKJhv",
  "key10": "4a8Btw1sYB1MFzAdGDfSi3e8ASnfvq9onznpVm2z4ccYdpQXmc3BqXabh8K6TbpJxCnu1Up3LogQMpV2k6AUWPzg",
  "key11": "5MM2Gv3gD9tSUtswBRMHQvH2NQehUNmWA9TrJ1oPpp5GLBk8Q4aLumyiseijWbXbocVM5KzUjCPEjMYjLu3NbpN7",
  "key12": "2VRAGHjCzKocvPeqe4pFPj1ei2icivA25ZmWh1YC28Z2xVaRtKMegvSuAYVgPamENRPvAL4Mzk4VmWdqZUAePqRL",
  "key13": "4sBrAKvRfPHtbBFHEjKZf39RRg8uAJNE3mKehfKazK5uyCSeg6r1hHa5UHooe1Y5zvbHCJSNuV1u3itiNdTyCP3J",
  "key14": "3cjofFQWRkuV2DCL3yr4xWKH6un3ZRaHpLi8Qu8wQ1UA5AP4XgvZP4S65hpjf9RDMcNQT4b7dtNXdw9nVRiCPT7h",
  "key15": "e5fUALXq9EAiatTyGemP6RZuumS8fxoKrvd7EQvAyy9Sa9GFf7dNegEkHB3A5QPNBmjv257m7k7w5LvpzkM39Py",
  "key16": "614ovgZStRjWRJUj1XJRRSGXeNRWUejYt4iPoFCMPrhz1SeNwJSUdfJTVVV2e6eevstZsRy92buepd9u6FLHziNd",
  "key17": "4BBjVnnLjqmKFD2w3etTncWyhvZqX7XDXFyrtfuCmZMZ2CA6ti52iETG9QZeN2qdp95G6MhLgQuypxxhQ27LnLFg",
  "key18": "5tyMHhaq28sEwg9UVrEJETFDwfMQZjFY2ft514dzpcPn9zfxk8sV46Vrk9yC933uEAXx7jF1BzQMWwBq48Y4g2D1",
  "key19": "55jcXmv3ba8BQK5gWpBufJW2X8KPa3sv2MFLCnUSyKo1QsZiVQNLW7Mt7BZGfmJZHiEaaXTURubJE48LwvQc88Wx",
  "key20": "5boCwoJUjxb19FNnqZ7W5Wp3iH58DpvDL2mAq55Ppo1fupiPTAyGzpR6WjdsBrwtEKGnjdkksL2RzvpAD3pRCqKB",
  "key21": "5AMEh2Q21rEMwXdA7tgJqSVMnP3XufTnGycwHNNNW7Nrdrg5cxEL17HnobiEkMWvef4yfkBHapWiVf64u4za12kb",
  "key22": "2AdK9Cbsrq2kjcTYbXFYVPWis93sCwhQNtNdxLjjind3C6Sj37oMGKSe7ohgsnMPRBzTphTDBsRbhZTkW5CbPPAL",
  "key23": "XvUQiMo34rvDMFaBSXD9ZLKUMgqejagy7DUkVYq9y3gMYbaBztrHLhMvk6GTZKmZnD4gpeSzvujv3oreby7eddt",
  "key24": "4u4ZXUtusJ9jm7YJEoJBwvXBXZiPrKMTwCtfUzeGkAEmhXvdDEpS5Fs94cupXofWoyygC4zryVy7zSCu46gNM7vU",
  "key25": "45doed7t6DuDfBwWDoFk7YWZFpRdhJFHVwKEiHy89sss35muWskKwE4ZMR6BccDesdwDevkGz3wQBg5gyzmyGX11",
  "key26": "36bfcj2mNEFVFhp9WVq1wZNWBeoYPKX3G4XtCTZr2PnHWfvSwuv2x9DjTV8WSDYiYxSLboXpgqFiaXPQNmP9MJYG",
  "key27": "2jBD3DVvmMYGTyUMEorx6cJHHoCakw4pZKrjqnYPCjBjQ3A5mSdvPnshyv24ikFNRgi1VvtnaFEJa86apy4AnypA"
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
