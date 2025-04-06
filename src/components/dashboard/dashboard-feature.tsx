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
    "cJHFMHNpU9nLUfPcg3dsKmYK4UL95HztTKS2n6ZewK52HHFzhi11oer13v1x9vFh6CFeZDHTAXh1zB1Lr9XXyBb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Cdj2fZ98UYfDjWPMMux7RhBjrdT8ELanrReFL8axLB8pdijC6Na7hRo9tdKQoUzA4WSCMuYcsVhX3WSdhQo6y6v",
  "key1": "4NZeVR85GtGQU9PR8bkPg5GTovdnXvYBeMV1gisVGw5YSztmHrinh4fChYv2uwEHWpaE9JUMBH4bmh6u5oQK2dn7",
  "key2": "26PS6fi5hcsHdERqVYW5498urRn1vimn9GmvZAPnMTZSxrquhcf93K6znXpXkh59jLeLdZCWA5DFtzrX5LpLtWin",
  "key3": "3rZTsnhvJPvrJ9XETp1hEQwWrsWSE8erwvWeBEGd3g73myyGcLeoy1dXV5w5F6CiJq6zPSQnkFP2gdRE1vz6AWPp",
  "key4": "5RjHPv3LYKaNaVfJ3pzUMU7MTb3UmfAnq7rjyjz8eGywBgxqcZgFFejW38CTzq1yurRBt6xyb8HWsDswZFwsbotD",
  "key5": "pRmpZGziMz7GxfbaKCBPCV3aGRB4VwhyLhj8p8fnRqUY2J1kooiHWKEccxpc3KwXnhn9tFDer3W8rtXvRVSAjkt",
  "key6": "8Gs2hfmesbU7aVTCF5qShwn8vJJA112HqqYQT2sBwipkA6YK8ASpMv2UeMC8w8UanLuhe7Ne32vGruPDucQhw93",
  "key7": "5gHz8admzREc6bMPsm3GhRVhbyMhjNahmm8y7yR8b96dbkWPA1K9w3sfNSJd1T15DzVpLK6e3Audm1fqgY5vW4R9",
  "key8": "5G9kAUuUMdbsprNuE2ggK2zrHNZTKb8gdaDRPAjuzNfHuezjw4GPjSejLv3msQA6TLJVfhmjSsC6DW8zvSZjYjPv",
  "key9": "5w4Tfkf49mRhiKcruo7WcsipNKSxuXoUecpW8M2VYVyidWziav7HUDzZpWFq7tvLUL28prahFS6ug41Bt2cyfKxQ",
  "key10": "2yciiJh6kugssZeWfG6DsZ8ksZTWxEbhYuqz378xDuZVvRUQwf95hBzMALsL5JSbtWSS4GqgzyWwZUJFGAHYfdy5",
  "key11": "2sbmke1ez7NjGpCNFq4ds7vgkkAmkBVxYEV77F2uCLyaPriyWF9inzrAgTUAC2QkJ8mCLZAs4DByHjxELPGB2xhE",
  "key12": "3CL4AWQF3cytnYo3Uaab44gCeS9bEJksr1d1XJVUApGFFH2ZJyUijkt847irsBKM5bLnUCAKE8P7RVEtzRGZdfWq",
  "key13": "4gDKYcMupbL39Q1pJcGs9zTpESxSwfFWjc9G3Lh1g2Xdc7zYjkwjF6bWMdA6AgkgHADDewxBRKHYhYUjuyshHzPj",
  "key14": "2HzZmuYy12UdB3eX4Wi1idu2WJjvVsWsCV1zbPCrMfJsZPeBVf6m6D8jPGfe5CDB97LQNqMuMNrPWPtTHL2nVxyZ",
  "key15": "3nBPbRt4UdokEzbrCpUS1MZpJAZJUmeWScPPuUK3JQPE5wiSGKUBLsinRgDQdgxP7BfSnn37eNeSrBvC4vPBTHfY",
  "key16": "5r2JGGneRUH5XbYPadqkNyEBCLkzpsdZrMjGWzrxi1LoFz6R9x3nLAbPQp9nikaCu6rVSSPiwN5TNRuy27BRryML",
  "key17": "ZtcbLTiwfvLk7DjojsWcy7JyEgDmbcVfpEJ9F3iuqwXY5uaskBfYeo5u5LiRf14KpFbfHiVpyDZWr2ZZtWBBtBA",
  "key18": "tZr51dG74jRM6nkTwiwzPAZAwPBNf8FL5cXLBugaZfYd8ZDXCSBmVUXH5kjkvMxFZ7nrSc2rk2uNjVdtURhYZY2",
  "key19": "5Rnkn6DzyuuLeZypept26SdkUApt1Q4YvsEXQjMxrX5RFHjMwYMEytvDF5YUeecvUCGykT1hvAupLPT4R5CQVnMu",
  "key20": "5uCUD4QxUnzgpGzJkZAiJQWXUrcar3dhfgHw7cArcPiNUrXFdYd2RiFndD1ecrdPpEzYxuYRgeuydSFDdSekdpud",
  "key21": "4nYzRuvNXDcTdhKgpMcQSB3sofTZac4ravXX3tJMNJHbfFUYC3WKReQjcrpkfk8wvBcLXcpr49noTHUMVZArHTZ7",
  "key22": "2wLiYw5HgYs11Tqrsykmyu5h6ZQUvLxnuW3VgSt2GS5k6HTCuyxEkF7YsWd7sdNUB17sbozr6XYt51ccWHzULQbF",
  "key23": "4yQjB9WuF7VuabgFgd7nqyFzPLqxfBF7JeYhJLTf3JMMbm84qE6M7TR3DU3XaHDRvHpnvS4HuohvYTUEsYHW8GYG",
  "key24": "3YhDBFzExjKSWh5xfnX2bHC5yGcGXdt5LA7vnEbWjBsZUMm458DNHG6NuFxQs6kUAKqYJyJYSoVgYvJHZkB5LKSU",
  "key25": "5eBTRMiSDGbyqaJ8E9Q5dSnhMqzY4t5hGbrdTkHuab3Uypg5gd1HLHKPmP18Dsfbnbi6n3TERfWw8Wf8thtuYJK7",
  "key26": "3h6nEjJqWVnUXjvT1NkYdCyXLAFpEAaTmHtSUeC6aCPzPhibYtpWwiZN3M3cY9LSmaJ7ioVJRhxYnokCbGqSaRAr",
  "key27": "43WoVvTXnVYThMQZU92mQnQKtxuXn32jBf6VKg1KFCyDhMtdYmsBVDdCWHwPDZVWvRmoy7WqNZnvk8RgoYuweNni",
  "key28": "4DQuTzvnCUnRyRRzT91sKPhDoDNUAKnCTuAB8eLD8UsVt71RWxBTYGyrY7JYoePS5NguWY38daHr2G3LwNyMGoUH"
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
