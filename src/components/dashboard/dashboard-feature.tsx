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
    "2ptJCRbkS6ondGuvVn5rduHtQmGQTfN7ysVg9VpdE3bmiiwfeMgRWPYxdwNChLa8sJfHqYEybnzYhD5A7hZK7iL4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hhy5WoPoqLZueqZRVdE4ai6YoMik6PxgsZsZzTHCXLyyrAFTWMkejDSU95ysvENg6RBCuwumGZthLwk2PYEL24U",
  "key1": "4vHDgwHKGydjYWuKdoLa3L6eL3Zqpp1VSACa1TfAvTY4QR6zWgZTTLcmkjBqYeqfzN29L8SYkwd3A8jUf1xmQG3n",
  "key2": "48uZjeezwhNuJ2G7yxasRkWDoaET694R8bW82NfAQp4zWR6a3p5WMjYjR63mfAWiwZhiwKFi2WRVBwUVTrte5coc",
  "key3": "4JpFwq9QSrkoGGWRfmPzFdZuUEDoDLYJt1aJuYXuveJcQdS22SWsZjCm6YbgoMunXiMxXQ2iEhPUtDoMEGg6mj1s",
  "key4": "37XQavkQn2CaJA6j6UMfKMtPyjuNRXAtZiGnZzJoknsCBEr8hYNC9UpsvX1m3nJyU5S8UoxvcAdai7rvXBwRU8Uc",
  "key5": "5mC4zv4patcymuuRxo14mFiWZGMmLn5ZnD4pSV3VDsVE2iPj6xHYGbJzqdJqcX4Dq3bK2Z1CJojYNRypPe4ZtNVV",
  "key6": "2BhXsN7Li9w1HHrCXvZQguiiCoemLgqsU6NAgdfzpPC9EedH4VGgRr1MBuudXffKnugjdBwiKH7er9Dv7i6LUzX9",
  "key7": "ZC93PZgoutzx3unZUxTYDUNuZzcNQ1SGjs8QEo2D1VmM5v3ns1nhj8UXKW7SWyPPSgVRfpDiHF11E4pNX5MXxXn",
  "key8": "4U1aMTtLpibSjcGPuUP3MojwVTsGSxJ3wQ8d9xPmCu12bUUJMaAGJSL5J3265SXTaMXVEY8GZiGDKtQvmtN3F2gG",
  "key9": "58Eg4CvzPvZxbxkSunnCK9reZ96oRWrfREtLouByQ4ur122hwZgZ1jazQcJ9KZQhVM2TTnH6Gtb9nYYbLB1934Np",
  "key10": "2VxupsHGjZhGyCwfm1on2Ra4L3PTKrkybz874vEXRLiSHjriSi3zMKeb5gcXJ82EKEnMm8riMwBJtcRpFynWR3qe",
  "key11": "3gJHJctUzdqzoAEAPC6BYLULwZL6xpchgdHBQZspYtUU97ahueYW2unsK8fxZ1v4SMQQATaHvpkMxxyEkSnvG8DD",
  "key12": "5WLEiJUTpYs7xcCeG6kEbRH2tphLRA9V6srdKdaCDw9b1KSrhFUjfoZiZo4NFW8pUCxYPAbhEAjJbn6XByF8qjrX",
  "key13": "3QvbuzHqykNC9yeAH4FgxM8dbY4MwjYHxcaWHPogdDahjXw9pqNAtWXwSmDt2PsdtowA5yhTVAqFgPkiqFvxKnnv",
  "key14": "4oesTFoNst8GurFer7EnNgGHFT7CxaguEzEV9P1bsnbV2e5Awp5GZiyNqc6E1bS3ygQd6mLeUDX2fLYFMwSdXqM8",
  "key15": "52t2gTa1ANHy4saihigC9rnhCNFa4paAqq8QoX49zjyucjAkhCsBznaPjuRerUGNSkQBN5uM4bZ22nfrLzcvqAVq",
  "key16": "65LdStBWwYadCuth7Ux94cMdRF7d4SSYhxMR8z5xdN2g8tGneFK6RAWCBKmYvXnD4Nvn82hmaHYczY5pshyxxgEt",
  "key17": "5SR4L6TgPHK5hgxdrXrLgu3dNU9RjKRWasaGkM6RBzKCtZrhwDfm7PxEDtg98gF6oqFeRF2Gcv77CBqWcpXFtT8X",
  "key18": "RRPm9AemJnm6ai5J1vGvtjymGvrBYJsM3kAhbAgXnBUxsWZCQ8adLrRh2JRaz8ZrLCZMkDqPyekrhGK1YAukMkj",
  "key19": "2P66xtGh8PCf3xBdKkRHnoBxkQz53CGuikbJjWBXyZWYjsvi1gP2tqbPsvDEpZhUDfLuwkCsvEw8GwmXZ4uqyeAG",
  "key20": "4wEyfxujhUjre6Sp6MG5oWuNhbjQgWGKR1M3hujWsyEQ43HWkBoZ3HWGi165WCFaUXKDNgjAzQdHUfaKyY2mpao7",
  "key21": "54oTs7tm5QdKShSnmswh2MzqV8UTcuB6G9RGesdCeWmowpx6wgDVcp3YS786RNJThJGhw5ACw9VUWVTzZxFch3hP",
  "key22": "3anZdPRVUEKrBbaBPgccZoy9pTWxZJP2ET5fggSB9XG9bjKDgZNbSXCqsbKkXr84M8kxmgF7rZbkMaw4b5Lm3LQs",
  "key23": "3CvQCwmE2SCA9VruviYXVRL2gMVhv2TXX8W2AKkJuud4Hm4UojfVvcMH47YRuTwrmqjncbGdScGQ9V1TyLstk8Je",
  "key24": "43wdjo87saTipVDt7SgiFup3PV1AxBSyK5G4L8vLGPHtSfX5N2C1K1LtzMZtHqVPHiVuz5dsQ3qNVToZaLkJpYDW",
  "key25": "mVVYFAwod7fez6Jof2GCmY8Ch4JdX2i3iZyqJ4i3Qwct926MgW7dWRY2VHCfJSb8f5c1G3spKNCd6N7WAXe9JJy",
  "key26": "hqP9aubXCbmf4dt8GccZE9moSAF2hQJD9R9xberaEAdnXQGA6WUyLuKibKbargKSgAys3ogVPzJDvbd4ApDh9hc",
  "key27": "4YjhLHg7Y7gyU4WPMeXXdv1ipEt73bG5t5U8mcEDwRBsEvVAqbpAwdZHdkAQ4cXty15tcGhQgVKV2Kzu9aWdcSTm",
  "key28": "4en4cg8Pccj8ncpiPNPBBndDrU3eqgL8N98ujkzs18PzfMLPfV6ky6joa3mJsYTDo5WDs5gf6pKTFrkQkxTQQauz",
  "key29": "5LnGJSRxQGHVucbp5TwCG9jpmupBmfLND3QQsxYCydJo2VYMRC5uH96FM6K4dqb3uaHo7kYnnUGFseb7s8eMVC1Z",
  "key30": "26mNRgTtjBmKgVGozBwFAAv6vZDZBm7ohfEQX2bu1XymbVW9WjpngqB2YFCNEq4oPCK9g1CGjYRVjPuMNhkPeQrf",
  "key31": "3YMpky5NHtzgsRvgNzEsVvHrbn1P9EBpixvRS1vG9NrdjDxMsc3xQEEhX1rFfYZj4pja23KUfV77k9h6qh6YgHpM",
  "key32": "43LnKbhsBsifu81S4xRuhQ16fuDscqGDRpyuaE2w5ZHhdmHsUutdbSyF1ne9k3zUA7uuNdMQ869a1fRFepyoRa5f",
  "key33": "4vSEvjMeBGnnJQCphQ9ckukHHP3Fk4EY1tsVzLzwgmUKp8UEFrYY16sHxPKY6APkFjPQ7FUh3HNigr4QSxNFV2zZ",
  "key34": "3i37QDYJ9mseifiFMx2SG3XNNEtXFG9e1Z7eEJrApi1qe6aWmHTpzShN8a7nvuw3ecvdE9F3B1QeytkQDUAQAHw6",
  "key35": "3q8CVpcMD7A6sQPQ1nf4LTb29qhebk678jdfXoWuKbENW6D96UEooJcnq4xGQA6ewXvJvyoCtXXTUU7sfSW47k8D",
  "key36": "5FLnpnVUpC2Mxn4sfVrHwzs4mVWuR15bYaehZZAiMzfBP2sKRmZLRmbPBoDHK8L5xBjConshGrn4XUBCd5QvPbhB"
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
