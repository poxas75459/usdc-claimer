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
    "3uTuBaW5ka1UxKxuMcqZJ7ip8hHEMnnb5RZKWNcJhmnm7yy4Q2vkeKKcShGPx6TKYsCE8pPCy9j7Bc1qCdxghW79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bSeTCUvv6k3KjF8KQjv17ipNWVDvhui3R12R4HCpJp1GLt2iE153JxSjkwTGBds7qs5ou4mmNCyUgdrLipvX4iA",
  "key1": "2pTWJ3rYJ1D5QPRLcB2ssEE3D3m5i4j2PBdATsFgMEhs7P7ggjNWwEdDsjhBDCSqC46QKGqonz7BWsN91EKRZ4Gs",
  "key2": "5TWVMzWdGB5d8VQAqepvT75in2bPEB1SG9WmKo2o2ZMWNj84fNY3GATk27xA1dbLtppYqa8ja3g1WZtzNinNrFYM",
  "key3": "5UWveYem4WUAs8UqPXLK7jXJ9YwyLWg4WdZLHpB4SAZhF5DUevFgcCZW2NNGMSVtwVxf8PadNLfimZ7QWWWvDnRx",
  "key4": "2hqaFqu6Zjvhh1nFjaiaQHKsfByXjSLzeQ9qczJQg4Cg2c9E7NX2X2NL6gqUjhWkTF3GryCdxu7sJMxgaZQqU4hg",
  "key5": "2qcUfNrHeDcAvfvSBpTkrC5GVqdNP3AZsWqGdWKoeRmwWaTKe1L8rxT9X7qVCUKtua45Jejsm4R3WM5LHjq3JKyM",
  "key6": "PLjuDuXHT5ScQUbKSuGShHwnnEoLax7qTEU6sRgSrcJpxvfcTh3oqYpGd8B2ayffJZmV9SRErcqxJu3oUp8RxvB",
  "key7": "2HBehhjt4uF8Us7vLiCxezMNSBpbSu3Vw3WF8B5nL7nrXMPf9BFVuM5nFdoJw5Jj5e12QdusskzpLtyZkvkwsmUN",
  "key8": "536va1nhnXgDFS3oHS7snjC4WVjZAbQcga3qSxLCuJYXkNPWPF4ZTBi2ojb57pVDeJBQZuSrSTLsGEVN1N4YWJa6",
  "key9": "4bYnhdUut79Gvkc6CB73mVwaEPPrE9cDuAeJ6kyzhEzkNxqQ9c9XzAPmcg7M1hv31dPL7FBdT8NjfNYfYE234Gwt",
  "key10": "5vGWkaq1VBoGM1bRSnYfsk6Xc3vSLDQKacG7DfM9BFo7BnrnBgik66F6in5FivTtXxpKsEZZxF2FhqBE8GMwjW53",
  "key11": "66TGPZnCgpUw4XHfH5GtFGer4W4ZGbYf3TrCW1mhKwMajMNK6QZjj1rFyFAh9dcDvWoyfVT2HQKCQpHgsNpiPWgs",
  "key12": "3Qpfsa8ySrqFNe3fKsYHnftUN5oG6n73CMcDLPHoToJTKUK3NG8ZfvP2p8zABCZnmr7XpVdVSPjB2DTRhZMFG9Xa",
  "key13": "61rbJKuDFWRFokeYCoh1Sgn1h2GVFPksn3jTaZsNRfDVquErfVaoGR8xGu7WvhLyTdqchcDtZAyX9sZew5NAaurV",
  "key14": "3G6d1Wtg4PRq6hpMzdzTs4yjHHBVMV5nS5FLpFBPz57HHFc51rXSScYRNVGqez8SAS9NkKS7JrGofmntqcSv2KsD",
  "key15": "6L1nnRP2DB3s9NKMSiMqYckr14K4sBaPXJqw1ZXE8rxCXjwKjaGRfgVPeJ5GGjR3rrrpN1zZ53EdbyWKJHyxfyc",
  "key16": "3TX6akxC4DQZzzofaGGGxth38V3wcamF4X7VeYFJ1XF566EuDjMqiWDcaYR1VW2tXq8s5caL3Un5YKqP87eNKyos",
  "key17": "63YHSvsqquEpvehcutg6SFGoALvoSeXP7N1LH3LwNM8cNZgPpSbFnY3tBE3JJtWow2yhBPs2jmvTBoMzxqjMtjmN",
  "key18": "3zpc8HcGk6Zx51M8cAqmUTUSZxSHomdebHsvWj2M519jeGJj9m2mcXEqhEhyCfHEEmPqjRk8GnVMPMshYs3cx3cm",
  "key19": "36ihTSznTdmTRgkBBvHwtvBpqG9cGJZwE3EhP9TnYU9iXybzThLNYhCnZR7W4Zgz3x3hkiYW7bTfFkmrF5WiMq27",
  "key20": "3KwRS4Q6EuRcaGefqojLE6BUY9g5kUv8HH4XSS7ojCcME9w78YZvjDG2f8ozkQeHcoPhU9gn2U2YCce7nxkV1fNA",
  "key21": "2k7Anyj6p8Kkb7Nd7hZFfXcP3A8jhvJ1PBpa5BXqS77acqVkdvSS7ED9qKaza32rPxm3oVt8cvpVcKwt2oB3BamM",
  "key22": "GuuoGyyTSwgWtbArtfhT9tsYepwksTpG1wnWbB7x8m6cujdXYWn9cMJQyE7uib3uyMbCXWcxogQbdKQ9vJ8m2mb",
  "key23": "5ryBN3d5o2CHbx7vED14vStMHJ8JrpeDEhLvQwgfBisfnZJwaojqmpAqREGrW8gHmUbbtTGyeWSZNEdmFZEM27EK",
  "key24": "4MJRA1dwmQy1LeXPJGcGQa2aztvyeAeuGqJZZpkdWznjTRjChAnEJyuSuxaUcy9Nh1KRhGb7D7HwRpryxQ5nvcmc",
  "key25": "5Qt7ThQdcTZRucYX6Yqyd9JiXu2NqntiySZybLx7y5KgTU4wChQ4h2n94RDcUdGTTcCYPAwYG3TMUTXdvF4PjHbE",
  "key26": "3QgmBUDiSeq1RHJ8wN92tJnMgygU8rVKxzJmJkP6jekHFE1nspEcPigv22Khdc8fujvu53xEwuJn1y4zUnGhKQg3",
  "key27": "4j156AJ5iUJNBUFccvwZqTvM2tG22my9QQveNCXPonyCsx1yt8bW1kWqhJ6g6xGfcf7NHVn9KYv6aEQcqUhGPpiG",
  "key28": "3wXECqZDufo9JXmkR3E8xAZ6DB7i3Xx5gUxLaxxkEmjDBs3MBt4tjwTiqmV79PqddTXtYnGFhb4D6Dc3i8HfjrBi",
  "key29": "2gtBpd6UQh353mckHrj81Bnv4zHBPwd3bS2Tjck6eSVS9FUa9juRQwobfvu9eHaNpaaW2X9oJPeWqinEPFXwFLWs",
  "key30": "4V5K6w8TnFt5NFsCYnM4qNAp9vT2F3771p1reHr7wSrMr45RU8ksgvjb9sFH53R73SC3ZUcBtrB7FHYC2h1htrqt",
  "key31": "5mtV7aRMaum9Zn78nkMf77EkqezYdjvtg3vHQ4sAcfRB6SYowhqzQFn1BcB8DfLm6MCywAXXsQvpvQQbngGRrquk",
  "key32": "2NiZkUgkpEezvuhd7up8DHZXAhQXF5GDuqbbr4sfS3E7Cus1qbGxkfpvaqFPyHa8Fk9HxKe8s8f4vZKuLhzDqTMQ",
  "key33": "SuszNdpjf4sYvD58t4c9hiA5WpTNScoR9YNEzKUYgEjHfgcVKpiXHb7MxUezmDZs4FSFzb1JGtcTSKuPkDvfBTe",
  "key34": "Ua59N72DQPN4Fy89tVBY7vB6AWft8xcfPAbG8oMVgTtGuWqffj257LCpAvACr4h712c617c7wo8GDSkNNZiUTk9",
  "key35": "4ZULsL1cVDFgKmuLDLgzrNJHWaAivXDGyUJjuNHtRNkevDbiUsm44ck7Cjp3h5hdzWbVVSvAQYSRX9Zq4jpsNxGJ",
  "key36": "3FRxHFFTE3tfc6VzokoCu26SexWmU9X6fNsnNXvyFmCPAiA9u6zzj8vo4KWhhTEEKBUnWDcecbMkT87uaw7FT8aW",
  "key37": "3ac9AYBTV75KDaXQ5MzbYh8MsEq2ra1WMKYytpCs4PV1Ztn5fmhmHaFSKbdNz8ECxDPxUZa1A616z9XDT6Cd75Fj",
  "key38": "gNzAeBaY2hP1AzXREmcNvM45F7nVHsYJF2NS3GdHTf7AJAPBk13wxCgAUD7wk6Vn9mqTCcCfC9mpGm16WSBuKQg",
  "key39": "2HVJi67CPJyPJYv35AGJSeHQFXAWNQAbdkuZn4H7ZLjHYaQbTnRiyEozLQCzNpbSb6ajFxwxDsS2hLevHb4vRqfS"
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
