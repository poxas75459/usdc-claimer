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
    "5dpSRJBQY9naXFHLAnXHwm9VYk3MUhHf37R75MZPJYctHHdVJtHwuASWgSn6UAJmXUHQ8E9YJuC8W5QHxeRr83mF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gA3SMPMY4vuSkHYC6jf9gbDP3fEQhu2auiSid7JJ4HemWMJPRoGudRo4QsdZngutiwNjLczva3MYXukLFj5HABy",
  "key1": "3qPBxmEaBjno7PFd8thskxoc5eVYyLQeLFnFCyNnmdgVWgGbieRtcmJMLAoe741eNtLXEnjvpHxNocgbpvdjr8H1",
  "key2": "76u6cZXjwqohnUFdQM93eXZDBfbsfy3dxF689NKWN8G5zoMjYDGGE8fpu1qfqt6swVd4aPsqozhU54H2huojn4A",
  "key3": "4pbrYJbNJ5hBXPa2DJQRdkP9mN4iPaKmgnae8cnSLWAPnsDMvULiiPKoVvvRkDFeaDc1nwczWU6RK1oELN3m1tAP",
  "key4": "yWTrhH59787X7twZkWFxA1aLGoHnVNPqryc5qnkF2y7CEX9Yx8DSP7y329QtiHsCYndSvHbbBbCLr1QGChSq9Jz",
  "key5": "3B6ELJ4ufZ65brUTeP4mFM3g9c5qEXSqWx1DN5PeFesgaKTdq3vPr4Gt2hAB9mSymcgnKXmD67d4xSZhDKXr4dWb",
  "key6": "4AvbwGgbqUUtuNz1HDfRg8PQCbCFK3PyVdD3U5SJQDLksHDmH65DYLz7D3TVTHSHqt4YyncKsvUmDc6N4WsXVTCW",
  "key7": "5tWJPVt7fQeQtd8r5BbAu71PRfnv9SdVRB6Ta5dhNk2pX3BdfGSo7TU3z9vucJJWdMY8Wbt4exz6Mg8UiE3jFNkW",
  "key8": "fSyzKdArioNyVm3MjxQVA3xnhrPRzDoafcmm4AUoVUBTw6p2tA6yReyWFqoH31kFTDZdqxLtvAxtpfPQR9uLbDA",
  "key9": "4hqq8G9ucn4Xc2RAQUtss3uDaqSCAWTrT23yGmoryhr9qymyJtHmngmtWxUTKRSxvciWF7sv92yhFddfrL4XoBPU",
  "key10": "21ffkq287abMh9sb4y6LUNdrvTc3MNDLNjQuNqen689bWZUNBkQpz3o2G1tYXLGPh1KyLrzaRsgXrgLHAwytGNra",
  "key11": "4xZanFJmUgGCeU2Yk8fz7potGkZ5dFJmtD54AewuVNFqp2pEbqL5uwABfkQrxmPkVWbj1NMDmfZKgds65BZSHcHW",
  "key12": "4j41wF5Nccou8gj4R7udUXfFMB99Anfx5YnbNR9dzZsXJYxhAtnDY6bhyEdhXFwpnYosYRyP8cD8kQMmcL2gbiK3",
  "key13": "5n9pLDfjgtuygcd9jeePR7VtGMfaJ4RbWUeaqKuACuaaNTdNuVppoZhDPYCx92kxoehWTw2SsVE3LfyHjDWfz2Uf",
  "key14": "ksXaNWVM4JZfkjna6L7fj35gJ6GLgHG6g7pKKchCYRnQ4hqk2BM2pKgkdMCYJioqF2PWSynMKXNkhGre1BYzp9K",
  "key15": "2gn7KBzrqx7D5kT3JBLiJhazUdWjV21Lts216UfcRQG25KZQzJnpfz2m8tiadeHdtvndA35dK4CaE4t1eqqZ47gR",
  "key16": "5u8AJprkTJDWTQtr2xBHZFvhfT6QsfFHh4P3zAjEFKiGDNZJ2eypWgfM7FKZAbM97d9U2WAC37MdpQYW3xXBRYor",
  "key17": "49wpsviJVAvi5Gz9DFxpEycvfoKEQ1m1p4qvm3yyymHVVJNLMKosB3pq2oNRa7So8qZxXVboHRPi8C28fuVc2PJB",
  "key18": "4a9FD7RguAtrAmfLRpu3dDd1M64Ff8DTegnXfz7xJY7Kezcap7Ls5MhcqkCHc4gDYQeftC8dUM3tAZ1q7uFECRLM",
  "key19": "2j8GUj6C3Lnq31xqJPugJWBJhhM8aXrFAijEdrqZ5RCq756NsuxUA8RYp83FFvg2BuZ3fhNpthdJxSCAFu8cMZqi",
  "key20": "4ns6xaKLZpXoBmNDQLkSePSzrhsZjKCGoHPvtCsTyaL9io4yyHcpW41Pse4Lxwj5jkiu4cvCnqHHAHWiTgbrMe8U",
  "key21": "5M5HXyaVDKCoS5tPYzB55D1hdRKLC4sMPctHrJyz88eJEgg86V5KwFPgLkCwcjZjnjf7HSWzEWGA7FSt31UBPTKe",
  "key22": "2DefxwmcEetqo84tsqqRyTaJoxZHhR5rfHKgJ8DifW1znCGGPqKmoVv5jivat7LZbu9iPkKSnRQsb1JwTpTwUhYu",
  "key23": "3UiiFxGFRHyvmPwK2bCyVQpVStkc26Ubxdp6M6bG9a5pZtZjb9VN5PcTtitstmb78tBQDwFcXpcuh3hoxjPA6GjZ",
  "key24": "46UcJQBmczyze62HwN9NHXeMtrGYNwXfdypD1mYkasTcR2VHxR1VYGzGsfbqSc6M7KviVWk8qoZuopZDjsaShxSr",
  "key25": "2L73yZntmKZ85QGHsK8nEHogs6vaH9sHsk9mrQoDwJgrAEZge9ynur8d8XW9RvxCnMsjuAoT3HNbyjXom3g3geS7",
  "key26": "3Q6xrTSc8ez1w75s4KLCcP3hwsZuX7KDk6hixRi63MfyCFGNSqkH9BXy5ZhtoJFmAYnqV5udDguKCXdJYfB8Zhjx",
  "key27": "g5fToJkuRRA4XjPD8L1D7xF9hQyv5TuNof1HCxwTBTSydH2Vp3pBmXZZUhHZMKrQXU54187cRWCLmK7x4pZiGmt",
  "key28": "Qtarbtdzh16o3tGVg31qPgcTwCmTQsQhDKtLxRwG9jHzjPTu6LTS82s3XpE8E6vSBGV6ybrkhKDcboPdTuZd5pc",
  "key29": "5AP4YECRPYg1vSbPrRpeQ8n5AhwM1BzMsJJPbeL5Ng5rBr9DXs3o2mGvWPBq8xv68HNzgNz7pfAxbELNnmD3GJZF",
  "key30": "4U2vPBpikNHLgj75aTXmAzQZaofEkCSjyjjY6W6y5ob3Pe8SdQiENrGUvELKkcodaETzdbRUC8fuAVMjLvDuSGwu",
  "key31": "58dCnDVADUNgXNoZtCKQBkVvKYe1oJMYdiQdjQBnMtKFPpwixJbDxsYefLhMaYMBRJVRsjTCMwujq8rM8nFFYW8x",
  "key32": "4SJoMrbVpyJ8AngDVGjHR8AyJ7fohjpkvZbFXjPi9GLr64mq2EeXABEKkcZwYrJom8FkPvYhC1oH3aHh95sLExCU",
  "key33": "5uoRQmryEMNZS4ffT6iNmquWBvg1f1j7RM31JKk2uZdnCrmHmBwiFNUKa7CAsT26rx3xsSDnQeC4FrXfGmDm54Xw",
  "key34": "EyhFYwsAjMCs6ptWBFPKTPCyKYjBpF8iHeP4y9GCZb5Z6krto68XC2NvYFDcf9DGHYTUZusWGoHHJ46iUyJDD3f",
  "key35": "3ZEwNGMyxEd4gz9hNpcRDejThdqmeYDKYMwmXqqFwbMfhdc72LDgNVbFffkgC9tzKAVbxuuFrcPiZMiESb4sM6UC",
  "key36": "2kUMiKYHw7xYiXYQ5J9BkVbB8wF44cF53CwtCcZx1GuhEoVb3TsyoRUmk2QF2Vhxqf8yB9xj9vpNFqXa6Ws2uEs2",
  "key37": "o4XjVJK1VqbGESnnRSNqLKoJ8AzbknFHcFA6DEaDEYiXtcxDqJjWr6MLXxcsojpLkaCZfPQGpjAEtud3VmXd43b",
  "key38": "2uG2148jo27v4WpNKi4xshap5yTHVhbtKJmhwoiV6NaZ85amYB4fozkg6hoRB45dL2yRh3VLQ2z1tpMXhQY8bYPN",
  "key39": "4H1tKL8HNpna6UHtG89v7NJ6qciwUtWDbHefmmhseW99CXXSZZfPwB1FxpSQaLMdkQXeZX1QAhFzrMmXJmqLFP4L",
  "key40": "4C4zFDzzZR6ihCR6Xj1ChKYvroyyutJoZQfGwtvAz97nfCz2ByWho9kdHPj6X1koaJBKAra3PeS2fQRUk1vniDDe",
  "key41": "4YVBKAf4fCkReA62z89hxWaU2oxeRzxHYKWtH1yYXjB1ay5BxN3ZSucM5qdkbpjipCSZVkRMk8nBS6oUS7nQC58R",
  "key42": "5gZsHijFWhKAKTWGxPqYXXWdCbgtpJ9LY6mxwfswZghiKyWH2S9xwhugwWA9aYr766XiCSkx1hm6kYN1UDFTF1sq"
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
