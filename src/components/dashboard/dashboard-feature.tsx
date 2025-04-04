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
    "3ywGCLcMbuEDHypfZb5iEhMGNstPBWrDzU9QK4r24cAx3uKg7fdMwoVUF5ZNb6EdHZf843ftVDUxNCtUSvMQifc1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7fQRNLnT7CHA7bWmH9JkarStnAR7wxnZaWmn4URQuz1fx1KWxUx6twtxeJVpW2gujxiucLQ5w85Z7zu4vL7xDFa",
  "key1": "37B7TzgQjTHYrGkMZiNpPG1HDg9uaRt7vHqZJzSU9v5RK9YDVv9SzvwGUSUUgmYjZURUCpinPz4mpYHb99Bzg5C9",
  "key2": "4GppnUzCSsYoRAGM3kpKE9jssHUjBYumEfJTJgUDgRUipZ62QC82BwuoX7knkAtnFnw9JSZqg6XC56u4SpQKDB8F",
  "key3": "2GrW9XYtpH7cPPn7YutBTn6VQYoC3A2gyHVE6j216R7pQJDMV6TRnyrh5jFCGVkEh4WxWcGYqsUjQ3zNwGUhpdA4",
  "key4": "2HTq9z4Tp6pjwDU7iyNF7GczFMYpMEVwsDx9c9nMsjerBeJJCXxAnBxdKPKqdsjwr1cBMcoKKc58dWRdpPWnxZGG",
  "key5": "3ncBMd5wxYwowYhfHfGNtAX3CefmWjjL3r65yQTg9HmoTRA2fNtkvoT61ZXXF2F2iep9ritsvdMfGgJZKGSZopxq",
  "key6": "5iHoC1BpkSboSsUfymKnupUKgkv94jvXVsfTZE1KCiGWFCA6eMj56HBjvKtL8UnpuzmfC1N84E1u6PyeNiwQ9945",
  "key7": "2kgGkixMpjWasszCMZRthnZBcnXAVzXwAtafoMTAtJoFfAPmppZENT74GfEd18jSzEbk5R5xHRrNn8Ho68oTVdRr",
  "key8": "ERuuvmkss5BxAvdwLa7q1ZSkU1zC2jH9iWge6L249cDJZoTmjVH6xLHT2TkF76nokzUbAmMAQam1FCmCVhnBQyv",
  "key9": "2t4XS1z3xPoZ7cb7mQaHqnQp3eRGxE1kxrNKxxu5FZ84BCx9mTEyNerFrzGA4yZDLdA69bBKxrsFtSzM38kHoEKX",
  "key10": "5sE6dNrMoVYNppcEdvTPYYWuLhakXnjNpb2vRkavJWvec3GMyLLTCqGbPdD3ECwWox684LJm312XU7gzWD2pFncA",
  "key11": "4QD8euYpe1EPbxPVjp3J3LumkfC54j7UKSnSquU6r9Qk243YS6cJtutfjTcYW7Vq2JmW1gXqBekq7iAJYGoBPbkm",
  "key12": "3aNaug8T3kaz2pvKGaSrZgbdAwuYwoeVayYUuKedADvtfuZzG8rubcvEY3376CsLjh5fEdGQtBQJvUhUGWGHVwW1",
  "key13": "2j6mYBC9ZR9izaCRxYaEtVyywdWaVw8JSrZ6s8i8ysujV4SyriwCuia6YUVqPrWzUxKBqaErYbNGPp9M5dwJ3VBF",
  "key14": "3SQMr9XvxY7uJuVXn2RVZbUnot8Gx3Qf1pH7b7bLjU3SqU59eEyHCAxvfa61t1t3fiLRyFJRKcSiMFaxR4Khnu6d",
  "key15": "62ekkp6qsz67JUHmzTdwWKgvx95bEBYUq1bM7C1RNcanuGAm4uXHVoqsMLwRCrfvi4MdbjGtVikq6SYbmpDgf3Nc",
  "key16": "crm8eNvCWuBMQezZX81x2vbcoJ1cL31fpp5HGCyBe12SPrz7bdhpRUyi2pyy8rcf7XiiYCabDQW7KgPZgUPVPfq",
  "key17": "5tayvuqfRHsrtHpJivXWqHgttxCWZaSaeSh7DJeQ8ov8DeGuJ7saJ14aq53QJWgLhVAZY8GycyZ7NXbbHhwDWfX9",
  "key18": "NrkM3mPyZLxGpm1M3DERPQ7qFhcE31vfHLgfZHLUhoTJFof1RF7KGnCgMNQW9ZkiSosMuWfQYTtxQTriRs8qbAu",
  "key19": "2RW4aUXKJ5YVsFDB6kf94dWhVFHZqtHsddpsPsBh1YoMZdDNK6MjazuQAfxyzQxGnhaiC6H84v95nsakbLPdVnDU",
  "key20": "4dDQHinefvEDH7dpbwWwZzLU7A5J5WMEEnGttVrwsj5n28pwpopfM2NcjLXfhEeY5EHMsuKMu22Wr7bLRgJqAQrd",
  "key21": "5R7YsYiWWAyiPLPqwguHQgaL3Ln3F4YtWzQ4Lh1yWcwugfyBdCkkf9unez5M4PWmigr45zeEty9jeAWjqYVSyzQq",
  "key22": "vJt7K6X6Gt36M4f6dEukPZiyVu1UvRPSSKUuquPGvsMrTWSFxy3tKruJoMcxtmZxucsAp6H3r3onVBuzKtA6kta",
  "key23": "ZxcTUgksc2zX9P4LsMk7yizPZTdDsQKd4kmuFijbqJPei4GEGXTrZwLZjHf7CLpuwV2BRbrMCrFna3RuhFemqGT",
  "key24": "58VijE9VsRQTLXiV53nV4Ya2ijBWY3exUhXpKBybEQCV7tye2i3c3p7LJpygm2jykjMwtkKjpnXkZDJf7BSdHNMb",
  "key25": "3oWE9TQv7eigHVYFsvvSAd4A6ENy8fbyCJGj1teswydm7J8sJpQVowz6VK9toouMZtoZLpeQ295psVFDNsfRUfF8",
  "key26": "VDDJCqgoMWNFya2h9vZy96vQHxwuBQjPK1qVe22bHQDeBxEFJYsz8J3FxAiNfTNMi8rzRUnLzzJpxLp9uyEQQjt",
  "key27": "4msk4Bc8Tt4VoekgRsro1VGHUt57JfJAP54tVHGSXJ1WFpcwWMZ2jrJhMCwgKx3vfkhMrENuT1XmC3YbJRRnMD8A",
  "key28": "462d3y4VpUfqCUtJb41HRPG792kNLKpZKjaHGNfmDhVRgo3qj5gcuwqwbfuVZRe7M8Gyu4RfyeSb82cwnA7RetKB",
  "key29": "4omPyRRy3a1D8f7jZ1dcu7NDgsZ8Gr8eQdm8k1jrT3ER5y6ifbDjQB61AAwQ2LR8MNV3yvzB1YgKpd6fx9HPXm4n",
  "key30": "4UQtYQt2JbKV6kHrYveWF5oTDj2e7gyNPBM1E8oNmMhKaRxnAoa2PdxLRrFeE2dTDer39hh7gAhoaUeuBfbP8YMe",
  "key31": "25EAMMX6eheFFwQUiqrHSjaBkJeAom3g4c3SEYZMNsjNoQy8o7sa211ubiwhsY5ZLnhWoPki7aD4EpXhJBUyXXJ2",
  "key32": "23X74osBZAJYGsDLKSzEdUMh1BtfhDD52EA7efXDxg7NnLBJP3SpPrGGuHvPcZSTkWcaqHKqjrdUkhcdpdF52THY",
  "key33": "2zDnHjCf6EG39ecXJRxxAjnfMPrercAo2pouVwkSpcszZPaaEwW9yrqph4SFWKg1ThSFYJc4KZGMzbs4btDtRm2J",
  "key34": "3HYYo4b9McybVzYscMrEGX7TPUsJMMbJwkXv5wsjt2BLHVk5TnNZwyLBqyCYjei9K9mbPhs977f1FjWTknAcjzHe",
  "key35": "2CwtYTbRqR3ZnSane4486Wz9Cd711wYVZ9d97azqf3pJa1anRGoP9dkJ8QZNvPhqM59NGZfu3QVZd1TMz4okBnJY",
  "key36": "2Nam5fUz6ZQCu8pUbo41jR3wx8EaJg9aautNxzuuSrYKDD2vDwhx4MmagB2z7xaXiV62f169TG2GiQUTxQsAwaE4",
  "key37": "2w4AwK3vNRdGkntmDBYHxHeR1N8J79NP3rkZmYHjcuuJnNGKmaVqYY5zBU1t2KYJn931paHxZsxSNWVuUTWrNSG2",
  "key38": "28cB1yH22DM9wKSpoepdLcnCzC2NVN6BMDqHekvPRn9iE8XUeK2gu3KLJiC9ZMo3gE2hn11tYEzhWXuPGvmTbhT5",
  "key39": "4f4wyDAmTdrN2hAygbaGxgdoCKjMozkp9poFLfiWd7Xd3Zhba14dESaK92wE8p2pXqP2w5PnEtAygEvGe1CFMbR8",
  "key40": "5BpRbh8gs1oihwbiCXX7SriVf1oyteMYWKzq1PRc3FvtGJPsxbSVb6QranGdxsBDc8KHqxasno2GrgokGTvxHyGk",
  "key41": "2Q83oiL9UUDoNk8s6uW7nYVzz2ea4c31gF4gf4KMFG8udynBH323ikk29MKtsBU83TTKp7nMvBeWRR5NUkcCBkZB",
  "key42": "58b8dSkshqSv6P3XPqdPNzvSp5R1di5netVLA3kwiCHL76P2VhmZbwQnvBQRfCzfvfCbCW5T3P8b3bhYqtX5FPht",
  "key43": "4ik2yptkRwWPkPhjtZ7NoH7AiyZBrfckfWp1VNsqCS2vkm4DXGv3N9kYZw6sefzxbts3sdYCYFk8mrwUgcRUXT6N",
  "key44": "LcY8D1HMvP3aPX5aVDZyMezxVcbLXyuad4ymCCqJyMmK6ZH4ahXFY8jQJQ1vHSMk6Xdj792PT8A3qbxT49jDCwF",
  "key45": "9wY7guCitMbBgGyKXHBmMfvKLSNFg3LHBSyeiFjeeVz9Nfa8MRUuTqMWuxBmQWcbmVgPp7GxCwUDykwzucf25af"
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
