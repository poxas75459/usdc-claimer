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
    "4WozFiuLj4QccfMeAEF2vvzD7JEvZeTGXQvUWGfU9Rd1QoEcSScj7nmsHPJZmYq3TN4bfpj4GcB4uQQNeWntc98o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yKd4s7gi5hZYV38obLDRony7vrRPU4i7zpohgbdGp9e2hhiD9HoFvoLpf3N2qF9gsonW7xARMu6sdZ7QRxH5mP8",
  "key1": "3JBfLbHgjFLXwHHuSmjMWbiajuGyk663LgC7wVdVW2AcSxvPLXEmqFHRu4R6dinnWeqM3x9q1SXS4w25DrA6gueU",
  "key2": "3YKuaZPEu24JuHmJrLaANvEpEUZeKz2jvZcoM9CNUwaS3rCv5PjFVNVfEQ2fGWzGu9LZHxdV5Xqn9hcbJ5HADdhs",
  "key3": "43anPPTzxxQB9zvZwuuKFunTwE99FPvXSdNVCY7ghM3Me5G7YV3VDM3cmpZcBrTtYT7496vToRtVbmd6tRH9gRw8",
  "key4": "Fpb88BBSLpHmJuurbHXqFad54PFXxnd9GVxBq1ykkyNoMku4J6vTiGPX4rd4w8MAisB1Ka9dEcJ6byZGrygFxte",
  "key5": "eHaRJxGFGVjgEVuXAx6SejUQb5e6bm32GvmCTcSLWgCyME7nytZ8zTNaRX9dfBYGtGrHyaTWiG1pYPoj8Nc7yFf",
  "key6": "EZSoiYJ8JbyKaCaZ8Cz92gpZuybxdyZT2JkzDEeJN5Qwgvbpj1sgHKrdAqEBrudBRhrBCjQLLa36uM947vqwWbJ",
  "key7": "1PPHPZy7ASxSqGZrEUUkPP8vMJyosBzP7ZTS88jMAh7M3fVwmdEUGYmFyWB5Rn2apkvsvD5PBTgWiZvBUp4DwQ8",
  "key8": "2UgebAj1SAqMphto1Z2Jpcc877kdMG6SNxHYz7YSur2L89juzrAZvzptYN5jQEKp9Rv9mTdNzJEpsrVGQ8GFM6y3",
  "key9": "5m9G6SZfqmQJrMVwDbStLmpLSxpv4ykbcxb8aNKNwPkgJrCuLQc3SDuydnCkr2Fq5vPKW7VQZVaJbd2Xk6ARJm9V",
  "key10": "3GZyh9L8DUeEjRwMXf3R3XcQmgbB9rRv5dq5zn8quQtCZwZfBP8LQHj8JiGG3EvbDi4LVGk7ZcuXtLFa87L6cwwY",
  "key11": "3YgvzRaPLZvJ2TCWoxhtUtguP8ioRyPkafroBHh6VUj3Pfo62TmKFATYCPcKW1GN9oXsgP55xZmS52c4MquCn9vE",
  "key12": "5383Gk6kzyFRFyiX5UgY6rMYaGeenwjp2JckLZUp1KFXnjRS3HeAKUjFPFXm18WMtQCd8xvvWG46mwxYZF4MKrT7",
  "key13": "3xrr8TEPmBznmz3doUUbkedZU1Zes1hePvKLfAAivmTsFM7QUKYddu8HqMJmQkvVH1F6D2TuCqSViQ46ncHYueLt",
  "key14": "5xAAwkR3SYPb6AFXHGMyvFVgGudzvcWDr23rF8JZHUGbQbfdWty4i5ChP8SnqU9f7cnQ8a56zb2Co8xg5Ev1yYNE",
  "key15": "2Jp9UfsTX1vStzS4bpAu6rb9uEFyPqrdB6V1F5nZsqiWxuVTBNsdZrsJdJttkoWErhqd4XgW6YtKNeY6izmSmA6a",
  "key16": "3tS11a4rx7ckbj44NLJMVukg5gKZ9WqoNDGLEJK4SHBvpN3mnJTiSYw6XtYqtXBpY4f7cMgn6xMRKDiWskzAFsKy",
  "key17": "2PAH4A6y3e61q9NUGUpEzediAcZ7HFVu9qzVWhk4FTPcQr9n96Jopg7qdSYDBodW1uwyqpfWpCZDqdxQtR8kTaDJ",
  "key18": "33YtumKJBR3HATF3qzzNiBioxtA51yuNv9roojxJVzsGHVrmGDp3AyoCLF2fcnkvGB8eNUGsTjKcu5qiN17Q774Y",
  "key19": "54qTHy5YHLYA924YC9zBCZsRrjVvKUiEUz25Qoc7A3gqMumZM6ji1uL7qfVP6LTzBzGEBFFk4aHTDmrZu9LaBwkk",
  "key20": "5ysUhE76oshMHeGxZZD3sLUoFot9DG2wSG2Bnchr4BfEmKCZiGB83rTsQj5DQ5p7e2JENoQxzYMhwdyiatFjErTw",
  "key21": "4f1D99rPEPb9E2FSxWMoVxGsmxXUd7ENGCJe4Bcwx6YfVmHUJhY1gWCDdMuvvvZJ8vgSMMZYYDejBPW1jxZ9xVER",
  "key22": "2Haf44spEjryYKbCmpNR2sRXQUeedemsnSDmAwCedxaLjUNpW35w5Fns5AfGVFmKd8f2aDrfbHMDXovMQ7zj76Mb",
  "key23": "36xkirLCCAbkctRbmjQaQdsGPcSPyLcdmEA8Cak8gy5buexYLW9EThH2spbfp5Dz7wR1a3kNgrBiiKHYvtMse7nn",
  "key24": "5kWGVDky7fzjEBf8ZYWb1baQqBBkwAphd75Jzq6W63rdk7Fa1o5hPGkyZdLQ2zZEczAwHXUiFofpZS9kC1r73oBi",
  "key25": "27WGgkeSt71PtkYsLXbaExmEqc4Hzm7yH6HoMjZJMUHC3EwBijyTVsaFpuHvBJ1CabKamy34Yk3SGGdMuHoT7p7f",
  "key26": "u1VHkxxQ1B1cbociJyGLiAmbTaJryM8hxcvoVvydryjtj3mAi436sankjZkYkgGZXLaNaU2iBDiwh5qSxa2w96h",
  "key27": "3k7Y3Uvqkzv2VwnAYnEpF5jTvn6JX9rEWTtQ9JNdB9fHXaPU9gesKE65wqP9pbvKj7w6n1kSqDa2BCYDuwxvu8oh",
  "key28": "5wVwk8XPbHMGi549QaWZKoA4HbxGcftH2fUzyjqBZATdJsG82egZn456Y5Y2b986zb16NBanRbovAzhXtQ7fRGJu",
  "key29": "4UowHGGrcnbPy5tHhXZLLyq2taYtdMyq9cFAr7QAEx9SST65YsSG5gTHcgyiQi7AFTViKXnhGr6cHRn1S88T2xZT",
  "key30": "5f4e91vG4TjZgn6Y1GrDSvb2SVvASJgzTDnXPRNvJ3VEsQeVkFBrYfoutAXGWH3XSHA524jaJq9sRcBCE5sZHaDM",
  "key31": "5bMGKqCET7S7EHsqageHgDAsd5iQtQyeaSAMi43XD5vQhADP9ZJdzZFp31byyFWAqEocQD2wrafX3uKii8PYKYuM",
  "key32": "4kDrnb68HRahkQzjtKfNM6Y6wamt1YtNJjD9CAUx4kPb85dzNqp99efm4TKUXNqomJKieLGJ5m69i1UHu4vC4M59",
  "key33": "2BKTWWm35aZWpbagNEDDEYvMSQ64jz5UAuuDsuR3wPz7Ai1ciMJAMnypytmTrdG1jc7GwFTaDwgnXiLdRMC7T2vM",
  "key34": "3tCDmUBGGmKNSYSzcPzBvbq5MqHx2EaCjcjFofMQrYob2qz9aoZ6EXr6rFNFKLzXvoHR6PH7K3NtDShpT6LtNCRq",
  "key35": "fXUUqPuavCjWabxZiQsGni4fciV2DYEGGucGrLk9s8fuBD9LcLbi4ndLwRURxEWasyyGV2FPJPHKPmVCS32eaGW",
  "key36": "2Vg63LrsTgbbRwn9SBUjPsuVwLSB3hHVWvRV78mu7gCgSDDLMV4wHK6fv5NLNP4f32sXU3N9rEwCayGS8TK6ipgC",
  "key37": "5UUJSSYwwHGZqfa7wt8M5qNCNYMjrsXujMXUaFQu26qA3Tisc4f37s1S7ALKwk9UU4zCdiYiQqfvh1cv6uGqjyNE",
  "key38": "EBHNxU7o9b1ENtb3NHkV41kBpVQgTunxEqkacWovAdqT9f4SF6tx1D4c1XRpL4Tr3t5utmJ74tDdEc9nk2qDogH",
  "key39": "3TZvZrghBrrgHkb9iDgjuUM9eVGs4HVborpKEUgMyVgSVa49MLBmf5WtsZN1YSpGVwLrQY5fszzwpbgCTwQaiNMn",
  "key40": "3RaymHT5hEreQiTrqNgmRyFfqSFVmuY5fWjwfRvrfWKqXmbNhHRqMYi8xJTT6cbPjHM3RGoaUZegRWRXRyoiGxUf"
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
