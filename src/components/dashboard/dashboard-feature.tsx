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
    "53XJNeDkov3QeoAqCGQk3MRrjxUfttP8kE5snZiGmxtLd3zKUgQQCR73DACj5JXzY1pkd3mQbPyjHa7QAz3X24CQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q3RvPAr8izaKMdkKDXwaq4y1vFHP46qgTVwuGAZC8q7tkttNr1xiXj81KL8ntiNVqMwi2CQNfKwZGKDZyPVtwD8",
  "key1": "3HGPFxp6KsNFE5pFRYdUVVooeW6arS5fpZQ86R3SA9cGz1TKWRDDor3xhC5RoTUgpqFpNfp8i2Fn1YtqTB4dBucc",
  "key2": "3djkak2wqw45dHAhgrmhEnwyepseZYNSRTpGTNF6DMyA9XPwDLPGyRF4MesvikMLXJx8QCmyqSmNL4BwrgD1DVhq",
  "key3": "3FL3L1jbo2gbZcFVcFKBm8m71MkW6dFdJV5XCWNrHhNbkMiYH7txjcuSSBEZ9byPjPgVF71i1YjjGYqvk8coLJnT",
  "key4": "pzr8auZf4dAfw3ho41FSDztkEvRGr8VkixQRkgNsE9Jbf8wTaVtwAHADjUN59aNJqhz7d8sPNfnerAF5BwDE1H8",
  "key5": "2VbsrtTLoACi8P93iitC6ZnbQgLsyCpG7teHcZ54J8p1umGYqi1QSTDCVS8hfJKJXk2iXAryytXWcpSKBv6tyHaG",
  "key6": "2iKhvEPPzSMEWgKfsHbMq5YSvJsBuXX3VtZugbB4UGeXuc58TcfxytTccthhnUoFr4Vsv1ew6uWsiWtLCUqcp5E7",
  "key7": "2svXdJnWsDynRciiu1aZHjRHRUqPdpaguit4VK3oQYwinFzTvFLkxAYLdbDA5k11sHXcbppA2UC7Kv4L4tEbGTwm",
  "key8": "23VZp1Wb1gUK3kcFNnwkjqJMnhpRBehcpzS8nMocaxx9psz2i3RQ3LiJS7B8CjJm6P8dgci5eyYXzQcbTAnUi4pG",
  "key9": "3ksyCB9D1JiMyizhxNSjuqoH5KmyRMsCcxvC2m2vaxpmFCVtFQyyt61GUkeGZoZZfQ5fBx5z19BjUHK6xQkgQWvx",
  "key10": "2qnS2T7yzaaNVuaAQgYTUBZbskqqgEYkBgKUNXnHqccnAFHEALp3qyNZmbukMAcLRvHRoW1v3nu2fWMrt6JFyMtd",
  "key11": "7Lbo6F68NXtwcw12Za5eQALkyRFQhYkxWEqwb1NYCVELMUWdYyDAqzxAuL7itZqR5gp8jwxB83aHT1Z4jYTyedZ",
  "key12": "H5zJEnGc9nnVL1zo1RsDgNJt3CgP8QnBbLwDtABpUrMRzT1L4k54my4pByzFgZRjCqnMU9NBA7PgHBPovhui3Y7",
  "key13": "L1kaiesgfyg7mBvcECEupsVyPXHezLvhr2HyBGVoEDEVpRyyMfU8bT6BJHzqnEbUJsdnmicS2oHBuza1iFxaH9s",
  "key14": "3ymKJiKbDyw5fMQFf1ohbsjrY289BkpEQfymN2YDxykr82kizDLhXFZ5QyLxuXJoSiHFfsWefusLn9NTBygs5H6p",
  "key15": "46RBAzUc4JsST8vW7vVWyekYPL5ZPVvqm5ebMQxfA46yi69vhvrjuNEe4twkDmzs2xKNREzU1SVj31G4jsaZSCqW",
  "key16": "5NXnNwYw3HVYCRQrK97Co55LWHyhWbgVJ1b2mTewekwS7SdSSJYjuaLfpG4DN4VLzQRtveVowUf4MkTaD3YYfVAh",
  "key17": "5KN7A2utJRDcmVEXmzt1CCJNDLZY2RKFfYjhvrBukVXvKTnjZmt1Ax255yZkE14S7U6pRiT8bmeX3CAe6ETFaPwv",
  "key18": "3iW69uVYz6e8i6kNVNBACrAeDoXPRxXQrzxBTMMYHPwfLZ7n16LKxJb2FY4rGp9RxP364xXAFfKgU5uy5tGg9FKA",
  "key19": "3q4R42ZkwdoVfgrmYjFXeLUqvmqYccL8xu7AgWbnB6sUhpsvAfqzfyXefiWJK4ZmUfX48TCrKZtKFLWNe15ANBfB",
  "key20": "5AiFmGTSRF14AErJyv4eaVMKquqVoSW4zaHtjfZZdNwWNH8pSQfCFm47RiYjQeRoR5uPHeXNd6mNXG6YNkTwmJva",
  "key21": "2HZ6qL5N1tW7jRntRjQjRZ9qGVCoNCxMT37eXeBNyrNvJaWPsvksJzbe9Nxn5cnTN6vsM4YRpBMgcCpLeXQWJHzp",
  "key22": "7iqMXfAaytWKD2X2cw77uXu57VEgBbqmxZYyAZf3VYjJpbXuvi9BcJTr9rJEsHSqAfCGCGx7C3V1wiV2Er3AP6r",
  "key23": "21qrt8RJcGxaJsaiwnE5rJUhzZRxPjgm17n6pyEujqQ4LyBHf2zteF2cXZYtpWKXaHHwT75dWAuMuKi4gs1fVMEt",
  "key24": "xmhytfFBUK2G2SZdqY5j8m1125BVMXauE8PzFFYt3QSQF6MfSYf9WvhzAbsZpLNspK7kGPTChEqUKEaySEwNkoG",
  "key25": "hhJ7YPQxPSvpCQ3ksxcJFBcpSKWfso25sFAhThMWraQx6u5ySAZmxNWafgE9hC98t4J8rZJanwQo61EU1w4tS4P",
  "key26": "2KyVpen96MrGvTg1kXXmR4evFQ1Z73AEW29JgVtkKozZzs78UaHdtKg2jXsaFeybZxQQ2VisM9MDTJqCU1vDNz8E",
  "key27": "4nFjASkH4tLdbbsCQgkth4JqqpW1mi3Aqq5xQ2KJJCgXWDa3EuVQMreKfwYVTGGGTTrF9K4rB4kbvRsUCAfvv5ng",
  "key28": "35x71X3XBVKaEJo4exJQhrqiNAdSbku6AR9Qx6xQceaGFff8u4BTevK37dzuqZg3mZ2TkDdQyqhLsWrMktoQrrZg",
  "key29": "4fmYJrfssw3M2vz9XdUXgCPVBAasJWBHce7nBC9FgsWkAD2y8MVqiZFjDEdFEHrK61z7j35mmsW7wTP9wdxNrkJP",
  "key30": "2A4EsEQbuL1R9SKs7pK3kQe8g4gtqUuXQdkv9t41qoESj4N8somsZV8JyUp1s4JBB4zkB6nU7hkJYi7PvevqJRdx",
  "key31": "WiQBJw3XKTDuy9ArnR3qEQJdQxRxrR2nyzphZbACKYpFC3rtM6aQQgabGFqzSrFe65SmiSCSNDR9RktLvTLyfKk",
  "key32": "4iSpzkfW1XLndqDPwYg6Y4fMSzRLxF84M8UUoZkGuXx1mzfgVMP437EcygVAekMTwLPPao7ToGua3XosBdQm9GW",
  "key33": "613eg7xUnTQcC5RSzgoywpfRD5jzCiDbKo2zK8BGjeCkvDCzmQ3VikCcEDaszC5Ygb4dd2xHU2MHvSMQL17buJLE",
  "key34": "5su9ByphkXDx3nj8FEdWzmUELTELFZRRBzE6hcToaActn5Aggt8XXqUbsvNHCy5inY9Cyczeg4gz8enNj535vn3o",
  "key35": "31fqFi7MNY1f3dXs2ChfrZZ2hSpBU6itDdyEKQWPFWE39i9T4ZJWzVFEBnydUaaLJLAszJcqxT3VCKseUEg2BPj9",
  "key36": "5UvCuJ7ieejpr1ZReztQeFopTyWXvBW6A67SitE5ATEfqQ4N1KmeqLWpyveqn1C2s1597bt985FuLoXk22mqgFYu",
  "key37": "4QPFgXugdtjHf6yRsbs8fJkp7qLMEqzgzLQif6MtDBMkhCTKNriLNXK9fcZu3MTUf6U4L99bnNCWYohbfnEjoP33",
  "key38": "5W4YwJohpLF1WuYqkJuakZjecm2qZkh5c7Az36goERF4tQBh1Tu8P3anaq7EwSRDnoMekEeArEvSMLdTxBPFzWqL",
  "key39": "4VQY7whsdy58zmx1PC5ZkhVXwN5Aq7gyAzwNn8BCA2UZMDVXEUtMEgJF41xKyyTuQA96JJsMNH1WkNPd3GcFLmC7",
  "key40": "2w1KkRCULGyVJQNAs1r5xBoGbJQEarugtCQV453LXp2ttQPgh2eK3ihoVfcFx82ACfsVYDHEU7gtitp42Xscp6Pi",
  "key41": "3buDZpn4YKEXq3haw8GToPxwhDUYsLfsdQWFKZfgfi3ewZt4ox5BrgZazr6HuR4T1J1ecZXscrpD6sVNRipAKWmu",
  "key42": "BMZrsRTLX8qPETKTiqNTTHLZ8EBd17LWZCu46Ergb9EwQhLF3RXn1jNdbVaUzSPhCjS73LrQp2jYjiXGnXKGEBE",
  "key43": "5PmBhJhmUD5KPz9RDy9cokFfwzxq6DAsbjpB6ZWPF8Qi1g46inSB62oospjaWvmvDGQWEvuKyX1rVGzNuXBzcs4r",
  "key44": "3CG6Not6rrJh7hoiSGbTSgWXhAbygzFGN58D2QXvQg243x7gjThyjB6MYQULYZNBTSti7H73wVekFAWdwSnCwsto",
  "key45": "22jtSSYwmLNxFLx2Y9kpPc8828nTLmo8p7G1ZBkZiaF7hfHUWhGXrL4QnM26ji6Bo9yVbQVryXusAQyyPUPnNBRw",
  "key46": "2eePaYJ639v7oxJ9aE66RKfrBfLF5dahYm5TGPCiJJYxcAyPcCB3VfnuwAkvhw9kGgiEF73yLAexU9zmZj1MmAHQ",
  "key47": "kRWT1ome7PadihTPwvwsWTQuU67cSz44wMx28N2eXxvAY23KequCZfnogobg5oEjZRmBkY1TPTrrSUyk5aQrGvD"
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
