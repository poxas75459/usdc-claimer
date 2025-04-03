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
    "2fjTapHM8kNZGKCcs4fJEqqWryTctQfFU9Rjsw3oPMfkXVtEv6KxsuMi4X5zcygXV8t9f1FMEERdBgyQcYXenuvZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B2vXw61AfDizkJZPnLwGjbSRfG4uEg5iqgxWjDaj9Njn8AWWt3HLjFu6pXjqfTaPWnoGQd1FG9Cm7yRA1zMBtYP",
  "key1": "5EHk2na37UheoP56kP3y2aHP6y7TUxz6sWfLbjymaLen5nxxjVoYy72hwXMM5B434TzrF1npJv3joC93zFMvMyi9",
  "key2": "2Mq9LFDRkXu5AuxZYTj5qamiypW2C2KYybchiQRJjQmgsdwLsfauL3LxGapt23Yusb9NWNagB9xfjg5zd7qqzZ51",
  "key3": "5RBoG5yuBP4R3XA8HDuSLD3PbF78DSkiZxYPTNVcQ4ixhWj57fa9JzsqMnzHwjQff5GEJgaSSDQrC9YXTxY8Mwhs",
  "key4": "5fYcAQxZMohnb4LGWd9oc3Ag5dmPxWSSuZH4eD5Z6SiuLVEYP74aNNPaio9NhX21dC4j8cXQKNM3LMUfhzMbxkSd",
  "key5": "2hEB9wdQauyDNhiyFf9fnrM4pUv4a4WVZGNAiXSiVDT4QSGHkXqnH1u61HE4nqEpW2jThnbmjZ1oWVmR6Tcp15hm",
  "key6": "2vniBsLKqLL3r4n86UYepYq8WivYvWJ1zDMqo1A2NbjF51LQehpDrM6v917AC3yKesDmPQ18KDzm658VmGswXXAF",
  "key7": "4q5j71CNMBEhzcxWEr4yUBVN9hvJs5x4WapcirifrK7Gk4YH4mwkAzbR7JkGezWYbkjZunHRMYNWg25tvUVHy8hA",
  "key8": "4wFyqvmQU9vh1pEtLbe2EWruuQN5F6BmQ2vuUrVAnh6f7soXh1wwBc93kJD8RWq49w9bznJ97yS4p6FfPm7UqLjC",
  "key9": "5MrZBdW44jXTLv1CwypSwCQfenPnpSXrFdBwoo1yYSRQz33mWDCb7dN7wuukxP7FXGSszAkaLwFGdg2w43yLtKMD",
  "key10": "rUZ4ZTyRcphQWJ5ZTHYn26Yxu31qqSEtt8fT3aQiMK94VhTz6wbGy6qFeEMGbf7U5SiPnEkmq8yY2B3mcatBtgo",
  "key11": "4RBapapg9J15JDm1gKqRT8CzZkNWhvaq8pz7bjPG7MAz1wdtBtcwXJncxatXsCyHR4KaZ28jYPCkQ8zScedHsn6b",
  "key12": "21HekxMWZkJkrXFGi3b4d17f5brTbv1g7vFNSaF8t4F1wtVrrJ2r83bRYiUUMfjdE6oWZgd6qCZc9ZiPenHrnaAb",
  "key13": "nKLE3Eitx6nyshu3BFVK32SHz54tNPRF7ct7UkzUEAcVedXZw4jvPSDrd1T6b36niX2odbEQaWJRxm79j62qEpB",
  "key14": "zoQx9axAnWmBMY9WPsG9j33Uk2iESCcbTrYE8YgHoPQrhPRUD8DbNrBWBuqGfasuwqDyr3RiZqJuHQH2efxwJiq",
  "key15": "5cK9PUFZXWQa1b6RFPiqCsJoKGWWEcLtzNhVxXjs6vrTfsutrSbm8WN917S6UF25YQnyuKjPPXWrrLEN45bPTLLL",
  "key16": "22dX71kJsAQivEVp7ubpTZjZYhoGGPBFkxTYUFDqSQ8fJwJZhtVFp4J5kXgD48vraCUkRQySXUb1v6YtQa6EgL9k",
  "key17": "2Gfdc31enWfKvLXRYJo5JDA4yWFaRfgTQwzUVgR3q6bCUkgso2bgdWGuCTEpqxvn3dsawFdWTp1QybDFWaMmdSYT",
  "key18": "4Pwg9KLoJMdmsj4XEgGvtdifUcZLkZih44ynvbsKNdieyayeRQ3YbpYHXWmW4qzoxEGWDLrTagSVU1mgTgV8byHw",
  "key19": "4d3FnXC83zVftWgZvXNrSsviPQMmedz361mXDLZew8ig9HU5GjJCv7kAgEsFyRdARwnRxZpmawmD82BKBKLDxd2q",
  "key20": "4kqi5VCESyAQdjZc6Y6r8qpwxSGSNndAUjgZ8yGSsKkaSH9vhw8zHYTPBsfVX85FpNpwknA4DwVNggNz38cj9DSL",
  "key21": "3QaegwXQy4LWnHFxbEDhxwM3EbXCBMNFT9j4w8wKsz6sMnxCrXjqYUxGreP8Kmf1UkU8cdoJQQQhPJ4TMsGds5ST",
  "key22": "3HAqYpGHP6iEKDC4gRXnmmbpFEHHCx5PxfkUF1Fifm6euyGamNZDivmQcHpamibvc4NMebytvJ24zhM1KxvmyK3C",
  "key23": "4K4NcaFMpuhvFCkFz4pusRyENCb6qB2Q4fEy12k7DXwTqgoaVkUcmYDxWkncV5TguDB8v4QsHbHofwomvucGUtgb",
  "key24": "42U3BrqKnRsbGyiwkiL89xS2VXQr6AtUmBS1kpWd3grHCDDfufLts2Fz3mqNH7ujvH4mrXif8AcCg2znPufUVw1Z",
  "key25": "3RAeHh3d3hbSiNk8G4D22xAsHzhViuvcU8iXqeV59mmqG2YVJ5doNbsyUc1pUDr4ixg7sEZMz5EuUjeuuVvmjEDX",
  "key26": "2Hf2LidWLAdhf26ikhirzbnF614BNiJZE8WkZzrHXTDJZNmh8af5588WgiaBe5UzpxkUGuVAijukhU2FSvMCD42R",
  "key27": "85M89YLdFRaW1rQi8QQYmxoCeux4iZMMtWHo9ruyvXxZJn1vQntxmayBfsQZ9VTgT7wjbK9aDd4L7qjUKtkfcxU",
  "key28": "yrXgUDeRN1GncK4p6dj54EUFMmwMZb5mcYurNAe7Lpv6HNt7GWFo5V1mFkg9ouedm4yjnkVx4hH9N5rtdS5JNuL",
  "key29": "8D7CjDSHojS3KdtPpEySmJcAUK6GCQL3ptCbjjbdgpYf4toNQ7uoXnwyMyVg1WmiVs5KjWTJJTSxKpiLwXVkDJ9",
  "key30": "3AaLWk6AhvHBE4TKk2Awm83WsZ3EbA22HnH2v8R1PzUzDJN9EbPkfHD8UR9bdpPhkKKymdCEpKMkQFPV9QYjEaNH",
  "key31": "3C5ZKraahX2sLoWfdkGbd3QTZQDvp6spqvjyqN8ZU5LsdZrNigJvQ3SdiRdzDVg1wDsA1aJBm61HrgB8Dd6SJAnb",
  "key32": "252k1FNRgWkv4BvZvT1MW2U9u88DR3r8Zg14EBd4H3ud4kYc5Ketb33L6TqZodadg5WRJ4cfKo9Gi1kYVwpKKnwE",
  "key33": "3ovqCL98tiqUymgi3i6gDZigQHbfAXkXHoGRbyE9mXe9bBt55zVwwuvAGLmEzeJZocW6NuAb9CzDLhS6ajkAwYik",
  "key34": "3kym78oPNMSrBjBzr7rYwS8bXEpTeFjvYGC3Z37YxcceTsqMHqLZ1BD1i9iVcTQKrvYETCZDTAWo9kC7wjvQVVr5",
  "key35": "kERWuW4JVzCLg1mj1o69xKCuTfFstotGDi54SqwmPdzS4qFNeF2k44Jp7gtZjXLRQbauXBuSc5JyguFZdptkzTJ",
  "key36": "4R9DWkgTzxVU3uLCFJJbje81PHm8Uq554NyGbShmzj46ri1beq8tALc4Smht8hfifnpAxJX8v7imYNh1RWNK616q",
  "key37": "2HNjWr3H2CU4Et54zSbL3rJYYpMD8xGbsUuWF56oxNasrCxqLcJ2YXC1ZcdkpmfXe5hBKsgDvN5LPqPzKx5mTP9K"
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
