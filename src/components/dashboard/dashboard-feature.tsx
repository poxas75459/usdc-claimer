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
    "z7PERfyLnaFbxYrMpfgDcyvi2piyCFaY8ByXVe6cCAcYABQyP3YJRnMe78hfnYVTaP6RCr442dcKUoFg5WYNT6S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cM7VL7D5hwzobCsVJqMUL6zw39WjB7xUtJ4NfYgYsrh7f1V1y8vEiM5AyxvD8jv7N7sABdtDyE3RXzHr1aokJBz",
  "key1": "4FyiBgzYGkrLAGvdhpqo3ihBjuXvD5jkeca4N3PwKCLeMGiN3fwqwjXeNpVLdRtDN54UtPG6TSSaWDAe8d8rJPDj",
  "key2": "3xqpf4DWTMgvFX7qP5NkPDfEmFRftZrVfRJDSezBNjesHBY5UaBpAh1bEb26uKhjYspH2KaWTvofwbHF3zQKh9Wj",
  "key3": "3MKXQ6A9nRaGSqrdAq8MteBvCSNuE5GDUUakwTXL7capPNPvGk2dbR7AUSuYgQVZoeyPhspFZ75u4gjc2aAGFKxv",
  "key4": "5fd8k45vcnSxdyhc3Mj4FfPWAapcZcKXVcRyjpjFp6GbgGra4cKEnozhgB9qWFD9kxXzS3FxVhbP3a5p2EyfSP85",
  "key5": "5FYwa7b2Z222zx7MTaGm3FW2sjMfSc2yT6QXjjDhZLawRgKWQA4gGuWphttDh8QAXkhsirVrGqm2s7SQ7ovhA2Jc",
  "key6": "3h19Di3VbLgjCfj74XJpC289s33aeRw28v9Gf38t6p9HGMvokL48EVbknG5hHje7W3hMyXv33Ph1L76yaM3rCkEo",
  "key7": "58jeKyBsa5c4GrURsF1mD3C9RzdJ898cUXyG4TSwrrHW8T4mzd9fMTFxtYzTPb4M4oyM7aCK2PYmHcWLPtcbBYbk",
  "key8": "4vuGm7ncrieYWnCUKvv1r9VLzhQUtnvyjWFMvmSZWBjwA7QWJVof6BV6L3GnUqtzSiYiHbhwLLhJZdgYXSYSNsea",
  "key9": "5N3XVtLPekifipowNyaatWJW8ZTMHzpqoETYQysZeTzbZYYr5RCD4Tc6kPBGS5r438GJEWGQix76MmwoPLFnsSs8",
  "key10": "46qpq6kScQ4YEGPxm5vtRePXq8KnMRYbJEoHxCs8cD61Rjk3jnoA1VnNsXQtDujRLC3D5aF4w4pr3rcn5yJ4K12D",
  "key11": "5yz8fKZaxPUfmxEs89QJinD1uwFk75ikxw5sEC8QMxurjrs37gj2SoMdBj6TxGC1DBuz3gaXxuu11gQvc95sfdND",
  "key12": "ewCHEitenUQDPqNfnmMGgRMcySiD3tjwfdTu98RrYqgxJJpVvWnwveheNH5RHuMeB8vy29HA4BPL2cGfoC5HgBe",
  "key13": "4Rfc6ixpgKxcGXoZHdp2XJBZaWhK5ubWhwrPRmet9ovPTg7X6a9tEd8Rh88Ym1LUr99sWhTfRaZw7Eq6dLUUTBRL",
  "key14": "8FNeLavRXMbWupCTvrYvCzLNCD2cB4umQDo51Bq3PSxitVcxBAqAN37HwMTR9VuVq2VvNA3i3ZTvBuQMrhDPXGA",
  "key15": "7qyjoDtTeqkHHGWTsrorBBot2Di7kWkpporz8tKPcgAodo8u8y1Ju9exwqnmx4y6AHUNoCq9cFupDmWj8w8YyLh",
  "key16": "3WVQ3vhJn9zVrqwDdQoEXmf55T6bojkwka9Cha82t5oVcfrmAPC2GkqB9MJZfvenayqHFEsTMv8bEhnNpQkd6TtK",
  "key17": "25u6PKr9ApXmqeTEhRHdxb3Qp2S2hbNZrcpY2Dc9Dj3RZLV3DXTLGcvaVrfTKq2kKPAbPdbMR735a6PgBJvFBxr8",
  "key18": "67m7ijFm4wfwBeCecLNWH5zuZ3eGxxnWxqJPRPrFFa5bf5bMP7LGKWkpaNiEdAwaxf9Zc1XLGRXtY42evmCB9S12",
  "key19": "5JCU2xZY46rkVXcDFBsvyKAZHhGZgqKt7Rst2RJ6BnS2CwLT71WUwyhoPYHShGcdKAbu91H87UQXvYz46HPcXu9G",
  "key20": "4QJPifs4zWFtrnSwnFWENc3UResJcgZzDjdz8MCAUZDZRLpwuUZMsWkTKopkqMn9NpFnfKJQjEssyXfT7yCuQFyo",
  "key21": "3fVUort24v1wVuQmmGoAUJPtEK6MEwhVM6gnGG8gvUTaR7sWQf2qTJ1gxfuPVBdDDxV71EspCNHZnfDXSboBGBE4",
  "key22": "4MAATGoXquqekRtpQdqXsh2svvre2ZUkJymeM1rnSCErMuvbU1i6kVqukvogsDiexBeLmCKKqMN11kLH22JK3Hr",
  "key23": "CNS62V7C4QSFbYNw868w4H93YxFqZsPYe5DBcBbtBunpaUfExMivfWrezJA35w7A63Ja6GkZVSKgKh7jEMkLQtC",
  "key24": "b5VogXfBR1zyfLXhwxKvVmnopqBjhRWEG4UrHYQWcPQUUpgzLoWnVqVrbMQ9o8r7mGq1vXWZ977M8uHrVsQbxPG",
  "key25": "42hiej6uDvSTsRY8xZngr6eHPhLcadTzWzfHdVT4byPHVY5EfiFRj3suZmptRuTQUmdQSVTk6FXnDXvKEAddJkSP",
  "key26": "3j2dvTu2en9VwDkjAX2hbPN847SGxJJN6tcdp4d3dfRCCpXZpdGWFL5EX1x4oAWBQWpHVJxU3Lvs2itPeKJYZXKh",
  "key27": "RrjbUSge48R6tEViFDCx1FKEm94AY5hPQ9gUKYZBhHg8fCfzWsfiCVzn1VivKzG5FY3vkPg4fAmjbhvRSdwSqNC",
  "key28": "5aHKUPH29wx9AU1Aexe11dhmngzKhHQqDmVURKmThQAWjhCLUM2pq3iBM8TbSEeyCETnXaUdBq5ZvxLMr7RtUsNb",
  "key29": "33JDZwPpjzKuRYjavR6ApYouFkJArP88J1aYBrqE7J3wF3sGKNaX8ggcv2j6RsMqxJpP2ZAr7Wj7ZLw8ant2Un49",
  "key30": "2Hr8qQinRXH1vp2h6kYTDUkCEqePVd55dfBC3fGNviJDMaQDLpHzRpfQc3GeDgkURXGZT4rVxJEy2E1XwKGAW7qd",
  "key31": "2kUs4nooGZaxgy6MCa1S6uYEnazi37SSxiJ3A4tBePDQEoFW7JhALTECsvtoMCaRbNtZXyvQUSj6GWANwqtKLzGb",
  "key32": "5b3HTSDXGt3z7rJiEaiYtbLewoJ572cJUoZrYQRBRLT4yTQS9NWg69Gihad4zgfhoXgwzAYPrwmPN83GEJuC84LU",
  "key33": "5i4hDMATBvGb4s3jEncdEaH6BrYLwoPEXAeAortsYZFAFD9FPczWPJLnKfZWydMmxGsgQ9PkwMf3dAqrXV8ZNTxe",
  "key34": "738Xs3aPfzz46ttGq28qgt9rmg5NVyijRXQ5GKhDXA17Rw84cT2yVYQGbtWP67d7c74RJTRf69zVf4wknAxGoHh",
  "key35": "3EeeEJGve7y2Tw4TCoVHMB2EPAwcYCSgDznESyYq3Y7JgNhu5JkW4Xj3MV1eCpsrQMgSufNMF2scBnCQQKPt6pcB",
  "key36": "5KEEtDYJ4X1btjWFZ9yKEL3GBa1fPk9dBf4sg6ErdUjnKmDtuMSyLPeJmsoVQmBKmctCx9DwSnePJHiG1ArqbWiL",
  "key37": "3VpMji3nhHS4egKja1Wz4GmMvkXekJGuMmbctpwNeBnMZNVBtoeqvGvpZyfjEaDmNZZB7RsCn4mmCL3E3xjTuTw5"
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
