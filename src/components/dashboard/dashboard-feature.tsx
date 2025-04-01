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
    "26WVd4sahH3xAvtBwp1x1gv5Q41bXGW3qnMRKyiuGcsfipEsHB2yKQTQA3XdpK1zCcY5ixB68ZwP2BeWJyYdnoa5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FUCf1buMwrMv6x6BACgThwQ64jebaYaZEHwjvqJsSmDSGHgZAMaxT6ZXyAvyNEt6eUnUzk5Z6LAqbWmfTNk6fK3",
  "key1": "5udeeHyWPWG2Rv5RyFaVMD92dhu7gJvDYu7tCNYC5UbV9MPNA73LSAA4seLVh1hgPRXGqf22Zot6thFoeDqsrRc8",
  "key2": "2XEZQWNRc6PrYS6WVXGs9J7ENq42B8Df3gEHH384xfGPodYopT12isppT4EhkEiarx3ZcVtDyrBAfDjLquWEy1fM",
  "key3": "Ba6rYM73VkYAArTj99o37TdYL8Ju19anE9pn3B4GTRqpP5HRAXWeU3Rp2qXhEmw6x2mFrd84S6nwxiE7UGS4jA1",
  "key4": "3yEEpnJTr7Gp6P2oHChQWgqbEN9zYxuHeXvTe5ckZuzsrdqWqmSDpfGqf2bPhbtbuAxyoUs4TCh7gtXGUfrZT9WZ",
  "key5": "3JqXzWJdwgcSav4LXEJvHj2R6X7gpG5RDsQcN959kYfsGeB4eDLj1usT5zaLMyP1b7mTXKTtbV5zkHPEkePTDe8F",
  "key6": "deCg8mLpscBR6TUyi1AEA7r4LEG5WvWSSx9DhEMit3iTh5DcMpVQt7g5KbTHE2PAcGb6zPJSMyPYtZeGUTydGEg",
  "key7": "4qMmdK7cWNemx7v4tGtn9SZuykkFERVG14o7ZPvDuLSiUiUmDSHH53wzDTve5dyLY8Bbmu86sPMTkLc6kDeb9fmP",
  "key8": "2NkX4JopFtEkYpDtkP2qZt4NndyGtbTB6QSnCqPF52sSpb74kTSici5kbNVJkJbmdLkmejshhC166zqyT1ceWYEn",
  "key9": "3t4PK7bgn5J88rnLjmudssUmmjNd3KueTzRva4xZBgUWAtAgm9ghkHe6tM4YnAy2H4gMWTxNXrf6y4G4MgMiFdkt",
  "key10": "3SbBCiULeZUWaDxa5293qvZbwT1PNwxn4YuFi4ZhQWRGqTX2RSQD17PWnbqtchTwMoDe5jLE1GpnZaghZ1yWdF73",
  "key11": "G2QEy9i1dgQRAoEo2vtesPSntB6uPPmEVju2wraytQJEQRtiaTM78NRWKNZRKEAe9CtnsfgubEvUS4uAcqjgSDr",
  "key12": "3VUKqbKW9ELp9dNMzw6Hpf9a2FFqgGh1XyNzRwnb1cpDQEVDsAbWve58Q4eon9YRHJJUDen52kWfYegxiMfxgGx7",
  "key13": "3LoRrwqfu2EEyxKZdYFbhHLLoMHoj75cdckCDkbwSvGMnwQbEkXz3N4xS7XBY8PQXZqDcrNPQTQLENSPUdy3NTWN",
  "key14": "5MwinPUUzakrAzFQXG7VRFaB76prw87hNgBBUrwkgeYYJcuJ8H9scUeM4p9kSdG74aPjEDSBYTAnt837ki2rF1wJ",
  "key15": "xinBXyCgVQFFCQu1ZDfKF1wZ7z9n9fGuA9fRsGDXM6Q2NDatbaFYc3puE8XUAUUTt39kT1NkQzfmyvFwFHuCcyq",
  "key16": "4nXYA3ncAdQeJzWGGcQ65piXMUinDQQWN4Jbu7XmRznCGugF2P7VUR956xS9u858v5KFYrGKa7EFavjzRNSkKKUS",
  "key17": "4Y9x72JzWsVdw5ijJKSmzGn7z78jq2TnPPJGq9zTx4Fg5HFKTbhptRJeF5L7Nip1BSNp6P9jTP248igocv7cQUP7",
  "key18": "4s6usCqJMaMMPTKPi7HmCGNwmWN3JtWXd2CBosBCfqQvswhonJ4R21ZBdPyWgp8UAcD6TXXwZSbXvjYajH7xfvvZ",
  "key19": "2Kqe6ab8AtfHXpYgLnso4JjLKVYX1GeTgHB58MVj4MkiJZyzcCLw9gtVcqfFL6SQDaVAgrGLV8Nf9wQX7dtL5QS3",
  "key20": "128XHQckgRpQwSJXMchFvYFMizvKogiv3vMXUenoa3iEAVuijxiy7hggb7w7N2tai5D4a67ZbQAhuHTUEcd4hMrk",
  "key21": "3gUC3BH57W7qcdBSxboJ1ZEYANg8C1GPXRU9p9geD1nFNcW9hxxHWfpfmsn3b7ePDzMzccuXLTDeaA5tqQ2TEXmB",
  "key22": "p9ybfoQRMWin21j5Ku4dQVRgveevMBV58yvCD81wx8Ypwu4p31oQ8mzYGQtYg2c7ksxMoXb91S4YWpLReBMYBix",
  "key23": "22VjddPAqMLWHR2MSwqGKyqMts5tXENoMfatNkvwmLhDUpZa36ARhqbjcrvrVKyfbbnniC2eTtCw9h9rYzqHrDtQ",
  "key24": "2szCx7v6gs73DstKZ2qKtwvqGXdjpiuRjyMqrwpgCz8qYpooRixKkz27BRn4XK6hPd81SHMdzYEfBeJboFtq652E",
  "key25": "4oxkoRhvrXRdKpG8TYp8XQBYF3nhBWY29CEbyLpUpELMLGixE4zJoLBsmqhyn1TXnkypAT8Wf4Fe7n5ywwJBxnjC",
  "key26": "3Utm5aD7numGW5YeR5UjmaACNKDFaNPXsnniUYHSmAy6VSYtorCS2S6AsfisGhGzrATAT93PEEXjDY5JqekA9BAt",
  "key27": "2YVsc7t9CjkRuSauRgEhusTLoGqJxJ7W9dP394Wb8rLDnwm9hHUWxvKCTSpfvGXztmaPL1BKYJEHTnbLZtfjn7LN",
  "key28": "3QYPkkC1KPeLXrpE7JjaiteRttJsKz7FzgR4hsjNtwDBG1QwrvHrvT6QuDNR9yARxBZ4Ny93oeuwqHVrkq4Lhzne"
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
