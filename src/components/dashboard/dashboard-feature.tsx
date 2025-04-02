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
    "5FwhGvcseTWB61CyiwkRrhaNAHJFiJk6YU3bwboJPr7544SQmyia9VJiYdVCar6iYHoymzDWw83pVatAeM9VxN6g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bUvBF9By5f5Kcqfu51BzHTzFHYH3ioxzmnaSZEu9k54Z9xbxEu4wYAnPC8hno5gT8RMJ6JaD1WPpphb5r4R5s3w",
  "key1": "UDwxFWdS4jiWu7hTijN8dP8tdsxpWuTjXuYQCWhiqwbfofYGL48AevBTn4wpDz2p926wv13bKSmb5ujUJpd4hUk",
  "key2": "62JxTDdtKRvV7a6771G6JKes24khcUZQvMCBYDHwKAME8LQQSNYa4mddDcQdHk7hTzLavrc3eHXEWMep3KqBug6B",
  "key3": "4ZNsCK7upQPyA4Q4jqcNKfSrA5xjjc9754hcKW8xrgDDeXGm5CvU7M2xPLqfjMKfRHfKzbdp6wBshdu2uzHDoi23",
  "key4": "jSZkiP69UUq2jKzykGd1D5fNN2YqU4eageErwBKnEV1UXVtU8LpeYbz6UMAEdZhrRqaxFHMBx4VHpBzSJffpYu7",
  "key5": "AjcXoV9GKnVhpkFpkMe9C5rorWsXYNdECTgmobzpQ77UL9Q65P5fFNe6eedL81NKWCWihtXVRSDYgftbCBFsCgX",
  "key6": "4xBjqoNhMJmufwHZYgh6fsd3PTMPPEyF6GEGNNkXSywo254SdadUhRCWkn7P9LaiaqVssYioRC5MLmNmfTrfQSqi",
  "key7": "3y7cxp5FD5fCpoMBxj2uYckawSuBveRpWCQxnFE4jhopUwLcJiDSVWMUQPG8iLaRFbygxxvFmferGG3aJyi2MDrs",
  "key8": "5ik3VTYtZiFzPriuSjgcgmCcotqLEGW1BhDJNqJxkRKX3HobyJR27Q3dyw6FzHtriYJr453sxzV7bt96wb4Vuqx2",
  "key9": "4hKSAxuVkRKdi7yjQ6Hdi5ZFsLcSa2YeBvyeXZ9qKfmgXeErfRPU7A47iTWpxjiPimDBedAbgJHjBdwCKy831E86",
  "key10": "5o7JsPYyoBRiqsPpZGfHCMmjAFZrDW5uNVmVVX7b2MA11gNE7JimMUwsao4PBp8bMpxx7c3b1x8jnbpFJAJ9U1kJ",
  "key11": "2uE3Wax2HAZ84kZN66twkx8V9vvMJpq4BFaixDBtrY9yPpz39hwcKkeUdcgWTPhNtGTGaLdWuXwFoYw8nds3SsTF",
  "key12": "3PJJsxTXJSk1MQ8Ya5wcGUr6ikN5QG1tteeJtMDHNLB3ai5WubNkJ2C7DLiqNWLCL4rfmbH18Kieq4hrPdE8Hbmw",
  "key13": "6sx9iL316nUJAapGnHZMXYr4zu5VqSzagYNDFDRdyegbstJywXd2ERcTKhCypeA151xFCoTFFu2WEdCSdA88EQX",
  "key14": "3JozpVmBxLGMpGiXqv7hCH5atGy2cjKn6bvnMFPyzS32SG3jbZHsXYJMfAa22X1y7dTczekE4U4BAUuWXofcoUMY",
  "key15": "21xo9ybDw8PUEVyz2yHiWL4mMKykP9isvy5L5mZWVAkx6ej5SHeqqtcrwMj2Lko9RR1c5W6bsX5eWDWfGeJ7itAf",
  "key16": "4gRbjYyjLhF8Wj3dpyL2tG7gHMdVh6gFHzMEZVC8dgpGVcEhPvGyUaq8WVxcNzd99sc9SPBBPy6bkmk9tsMoQAin",
  "key17": "5hxvhTdn1HsFQffdEn2bWKdqREn54m2fgMAHj7U6HYpeyC98cV7niAqfRRtNsx94HWbUuDPmLt8KtKgY4mfEzW6c",
  "key18": "47XqutSGXGK77JfTVnoAbG64t38uNysat5gaeUF6dChwNJvyUFbzQceKM6M7mUWiZL6z7hNuXMGhDc85u9KFaTSn",
  "key19": "4EbBtkH42CYNtBwVSzSHyuEm5m8GLNoaBqFvZyYRRV19WDc46eTHvnKhHnjD3ADWb421MT2VH49YrRfz2agtBDQG",
  "key20": "2xaSRoteD3SZcCniTqHFFBHHoqHbzzqCXmjXCa7AdYnhLHLK2T8CQi32jbCPXSzu29ZAN9dT5mAmEbsECDbmchB7",
  "key21": "5TYqt4bWADmkPBXzYWzMNdhT6cftRAL1cyubdxEcdeFbAeG1KC8BALqi1T9BfnPRTFkf6rQx8BmKgnSdj7TaqgAa",
  "key22": "3idk6PtRXUHHLDLzZq9ppQneDNM8UciT4mU2wgxqu4V4aZt6sq127HhMLCtsa6MvAWy6jEusWTrkRYLe58JxFS9B",
  "key23": "cDkPB6BNwRnKnxrN8V7LkMk33MvCkVxgFF3hyBTcDkxhugDwRM8ZjdC77N2yayhtcDwXS8fZHd2n3PhYEhFwKSQ",
  "key24": "23HvTx47FkWu9CiSv2t3BEmFEbuoD6q3KHoJyihqg5wLuYfdSjyyAC21eiAJZtAyHdSiXVq1U2LQo2bTQJ9kjb36",
  "key25": "2Y9VzWHnTuXm7JfCYeUYEdYyPCxAq1TgnfFtunAwGYbQ5RTqaZAJ9atHaBJEjiw5kbcgVk3v9eSfdtv7xe1FyS78",
  "key26": "2YJzwNJugmTCx7b6k1PaQspgXUWeE6CiQPaANvUwU42QHzY1JPvEzYC6v2nEn25wiLrdNuHsMT7RK4xdC1csKLp6",
  "key27": "4s1sLk1e2dohWrB2LdiMHFG9trXVzSPUfDD61WBN9dNFbPH4JmaNnWf1z3uiR9dfAo1qLcrFSTnznp4ToQtBkCV3",
  "key28": "3utFb2i3AELS5yjLxW1aNULFJiBSnXVgZu7DYD4bik68BoNUorQSUqf5vwiPxNJ8vnzprEHfD2p8NhkxXkyYPwB8",
  "key29": "2L4LfsbA2WuiHySkubvinqD5A7SNNyDj6Sc1YJvnHPhdyxs5cyYfibtYx1cc29FLJueGxPwUo7BJHd9TuXXLApuz",
  "key30": "3yGr7YRNgtgy6p4tHdPUSw7fZrdGiEMHLkQPuRZpDuxWWdSkBzUeojXrEGVtrHvh51u9a9gfVRnKrqTkWHgoC3cu",
  "key31": "5yDXxKGQErmzisNc1s25bJneUJgpv6SdkDj6C5sQK8QDts63xdGyp21wdvkMDmN4ny7vsNQGj1JFXW4XnHD5PMwj",
  "key32": "4QzZd4FQPQ7migsVAnZ7HZmyXpDPza3Grr2R4XNJGpGCh6PqkLGLtaoBzEArSjPcWwTaoUnBiKn15kaSLWt225NK",
  "key33": "2vWjeZ7DpkssEc1KmU8PWBXV8JFyLhQbTr7tGm58QGim2WiWSD9G4qQJ9qQce5jBdP5gAejFKcsR8aFgQvuXYTGN",
  "key34": "5JnUAs3n8z9qpnh6G7LksFB31DL7Dhn5fCNHiV9qjALBJH36uZ6bdepa3gueWpBU7NXwdaWYx7Jv4hM1XLdVNaFK",
  "key35": "61vUVQyutvHJrqcZsJrc14B9KnTAiGGxSFj25wMa7yWgBtD1ASFbTbpeyWkVB6irbbtcZgCZNvqZ5397gceanYta",
  "key36": "64K2fwAnbuVWuPYf2VDc6Z8tqdEKnUc4KZd7ak4yQfxybh8VnGKVWM2v6DbBTVDFujFsUneNG8Fdf68t6Ztg6gnc",
  "key37": "5FzaG8FY7takRwr47WzNwzTgCV4Vzu8ebnE3yzth4Fabvc3J9mK95uZuvwtSDj3KuBmPvFgHtLroPhUbGDKTi5XG",
  "key38": "4i8EfkPn2NcwbGSWU2HrjCYCRqSDAF9L2pJv52uijQA1t5dQ6t863W5ztHSH212hVDxmDaGRy91GvxYPRG8fTueq",
  "key39": "4KrzYLCz2FMzQdBznMqaWWrs8WdhofwfZX13cCfwBC1mG3AkzZwSMzWWReZKPkf6KXvKkZpw9LqWUT5EBZFVxiE9",
  "key40": "3cCT2hdEKxdGi6o5Dp3EXkUiQfNRGYXyPKJhLBhA4PdXNbtMMN8wcaiETKJRhb5qMiRpPeV6gZszSzKyzwW7Zk1R",
  "key41": "2dWPt2eMTnBTj3gvEoyAHU1oAi8mVsPjQqEezTHtmpz4A4zAEAdQe4MHBwwJwQytZh9B79TqZhxNK7rKsJgprW22",
  "key42": "3JoB8rdfkXwp6GFoDEqgBJZRQT9MYXdDGr2vnyJVN5LqwbHmWm2AtUPBSwN2W79QguJJUoHJYqznLhdDRZRgCjjZ",
  "key43": "3ZrpMSQBD9YmGQyzVD3ZmseZDah1r8GxDXHnKdtPsLmw9EG7a637DAL7exJJHFjAAPuYsDrpATTRqxQTvcbu3Dir"
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
