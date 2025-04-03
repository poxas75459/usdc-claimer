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
    "5qp4QKjxYHDjcHDnBhe2v5H5hKjJ5z8HmjbKRZUwFPueu3em5nkJtcarHYyXWvbzVzj57pe1XmaAfAvdGLKdtTDy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GNcCGnkbtXskJZ8dfLe52cPr4rSKmmgicFYFftC4APrbNV4EhpZ1B1P3jxDzbpnUYgeRiruVWRrg9kK8GoRxGkk",
  "key1": "57bZvqF4agaM1CGTATswZNVGpN8gBbS1aHvQLEZawCZUbYZy4ZNcxLdYAATujyjGti2vpvuTvAbk1T13vMktJj3y",
  "key2": "4yjWBSf8nRWxT4ry6oezVQNQBiUBP7zzY98Bpd3wYFaerB8MMV3HNm3j9gMDwozN6KQdgn8fVJbhZXUuRVwckgBQ",
  "key3": "3WtN84XgPdYMwVrKmbeupiP6t4NhJjgSkYk7BkipmTUKifvhUR8hthHyYbivNfbR1ZjJ43tjEyNicjxwD9iHStE5",
  "key4": "4Ciw3b9YaLpjPRXy5VZp8wc1DjzW2T7LTc5uZxe5gKfQ5aQMRbbcn8QJWAzwPLdDrj5yYzeD56fNfjBDNjaAiPRt",
  "key5": "2BB7J8fK24LbgCERwhG8URxcxGdFFacKW3s8hUFyLwXqy4kXEP8KPPsZbzHyaLP8zU2n8ACnBeGHGrTN3MogiFi7",
  "key6": "4mEs2hFX9ZsZj1o6wDTy7qEEpwnxjnZAbNGZPkeEyVp1CwhteymmvjF5Zw8ETW53f1ZNcs8TsAjHeaL7UQdaAHwk",
  "key7": "5dZusvjLdLrxirPbmomTit29nziwhCoQDcSVH5nYa3kPoUjxWHHHM6F4pwmCyWwsLXNAEZUqxdHm2nwPnhBxun5N",
  "key8": "5iHoLH5dvHy2aJHzeE4PwarXGdJieMbFccSBfKvx4SdT7mf2wL5mghkC66amy6USPszUv79Mc2LswjBXFLoZ71Mz",
  "key9": "3NTYFpo5KXsi3zSLA4PC4e2Byg5j3S9BxAqZ6bueQB6yUPL7gcr6nX3CAJx3d2RnfxoCqeW1KLkpGtJAKfQ5reVE",
  "key10": "5GCZ3CBbzcCC1nnNB1AnbDk8a4gSMLfpVxFrAp8QMTTFEfJSMEpcbN4JWrB3e1p6caMw1nx9AUBsnzZqLpTx4yZr",
  "key11": "467G1wFc97wmiTGCHUB7mvUMD88yHQ78FUoK5LYiNuFTiyfb8sqR7gZ3Yr89M38g9YD74MPTX7b5VyLRTvE3sQyH",
  "key12": "5wDBsNCB1PjovKnmyWMaR8jCo1p3rmznLcCmmYbHAcxbDtEjnxXYrBZCtuFgPr3yThwu6wTZCvT3yf818q4ibjbE",
  "key13": "5Wyg1nC8Y9rDEVeWb7xijGftNb2LTwU1oHm5ei9qZjXvS6rt64jggDEJutyJ9Ve4rdBaAYZkxqHpgorJRUCS9eQb",
  "key14": "mCHd6HkXxmJqFtsJq8AGveTxptbXHZVikXmeTLghk6p5Xkckzcai9MueBB8xUejXiN1LK5jfyYzRzChBdEZQaag",
  "key15": "4AjBuFJDmujzmgLaNc8mY9ZHjYQry9mtf7YU5jistKu8hqeEVwS149Tz6HDNogVpSiQWDqhmj7QbEqzS9tdb8QC9",
  "key16": "3VwrPUveH8jVNzoJeDMoNgk6gK6QRPYGmFuWGDugCcV8S434iKWZiNeY4QuS3e2zC6pGpVXd83RpfZe2uCnWmYPL",
  "key17": "5YuM1RUP9jegjLhksoKekndDkPRfCQF4rcuCbC4Gw1CwD7WNRTEm35z7ipbGK7xBsTNxT4Vccsmw9yYE1g8iZsQ9",
  "key18": "BqwrZeikCiVdJ1XeESbFKxPxyam6vdPwHadGgAuZX3AQxZPVG1v4E5FGueJWLCFvQPiahgA9UKx9iZtuiuKsa5K",
  "key19": "5wJt3Tjref8VfF4noQyYX1a3tzXt4JSGjULSQbvVYYnTgAPESabEPxJuy2Lonj5MVT4aXsH1pCMASLxtAzdcBRTu",
  "key20": "5FvK6NNZy8tFdFCVyiuYwohcsaC5iVFe513pT3or3z4CDQgDTT3Ag5mUehRfnFy1PWrkm2XoPCnQcm9JKafHjRVB",
  "key21": "kdR7VzQP8cpHkfJtbc8ig54euGUAxNpfGGVxQ61Piwatjkbd24N4fuqzHo8FvY2ouM2NDt1QVZayZNKkGsQQmK2",
  "key22": "5m3yPjirTRa5Wvzri8eGBtai5R9uLGJ9ufExseZD8KbYmqCvmUipvA8gC4SYidQq9HscQr1yhdUjkUM6cpg8QPb8",
  "key23": "58VGzLEQdmuPX6Ynbruts39mmcD65rjS6taxSwAZAsAA5ktB5xy9MBnZ9mRHwRF8Q7LJr5aGVQkMZUJfgSY8gkqo",
  "key24": "3nz2tbM2Zk6WjFy1aKcy6zcNWxWr3ED3iGuxctusTqcLUikvCZe5o27ixeRK6ss1LVukN8QPThRfnZHqR4zgXtK5",
  "key25": "61A2i92wkyY6DfiNidFuRbZUWRt1gG2oB6G5cEN9KmphPWPhhFjDJSCL2vDaausQiiUNj1koZuY39SnwxLLkDbav",
  "key26": "4HN2LZd1bxTbNANZqvSYHxz8rKaZhv9mq8fgLCtFXcWAZfeno6AVtuYrhErpT2HENNXsRBPUmCX34kvjS9LGrTbi",
  "key27": "2pSLFeGEXJSMCqS7RW79imbGWde5zpFMn6JfFd59jrBjqugWW73VWPAn5fNC79Csh9SMNbKATgeM3JTamxS6Vnj6",
  "key28": "2MZ8ub8B7sfFsXnxSEK2H7FYfzDyKdRVQcNUJ7KesBMNScaVkwTFPo5uHBwMMmQuuhFtokGVyK9VTVnqT71iy6Vk",
  "key29": "2RjeYJMtYzvxFUfz6cMxksy42RNoqBNyAMUNfdcufbzqD1Cp1icaQPoCJ4N1LopVyBosW5rRNqtY3pqPRTYRAphG",
  "key30": "Deo3pL4Uueav9dtYQwXFY6LTy8wiSsJ7dUBbU7NveoR2Nnip5kp97TqDGDZavYNPehgJtRBVYD299tXvzUibJGk",
  "key31": "3zP6eoa2Hu5gmcZMCY2HyHAnSBA3zRgbaMHNF5ZHoXPb9KxrYenUJLKH8xwqd2izHhoPofEy7z6HMtZcfZ1fZjZZ",
  "key32": "4gBzRsGJqXMg9X4tSnv4mRhNsqUPq3ew6Xwn8qiRkmNodDZ3ixjEBVAQCaGMN2GryXoa7hYNLUbRroyGBZNX4mFD",
  "key33": "d7SGcEWP9nkrWf6V3jeRLNrVrPjPdLQjD8hWJ6ur3yEcBV9EzbxFjzpfqDkoJia1t3HEjx1AwBHcJ82hwofjrwL",
  "key34": "hoKivUBLhaEy4QsXvT5ERGcWcDxPL5KnF4aqY9WMnsXbnkFz5WmTziRUbVYEnmRLkt2uy9agymwXiP7QSeCaAuo",
  "key35": "5bzvqtgbKt7hUury1Hcnq6TbHtCj6ghwk5v8KenyrEcbyAkosqVpWuEM4ppCthXD5UiNnDdFootTQ4WGN2MzLVUr",
  "key36": "56RcDwHsGeNdzDFL1wEgNtnBRCCdAab2EJqSWQKH6M1cuNhjKyETGN6oBdLdPGPhPdnXTFCnszDBubsQYuVc1qBF",
  "key37": "c3KPyJ3Y7rWYb41BkkaXroq8jK1JfN6eBUVGDsFdH1wkFsJSBUj1wNJP8NNeMKiohDKM8mELYJQNsJe2BaSXD3a"
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
