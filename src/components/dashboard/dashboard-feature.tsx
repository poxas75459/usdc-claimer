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
    "3ecZgKnCASXBqTuJErsWoV79LdhZBdEhimCYkBFy9dYcA2QjvpQeTynB6eRrsuCXKXWf5ZoXpGVmvHRenWpitnPb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Jg4GFk5Vii5ECEmxGmg5dRqQt6NKsSL4i6iAeCUFSY8X9UTNtwD1FAgQfgrvteERbztwjaySyQyFkpfkRqvenSq",
  "key1": "P7TmLEugopXqdxUUXLHFEedL6cfMnoTAgiXgsFUhaGv3xWkhCkWhjGS22j1ZrjSpjNzekrC8vb8h6erGrZFD1dh",
  "key2": "31J3Mqk5EE6JUqhvHk7LM29u889Eu1FoEvhwmRemckNPxSzdz4arcUtC3U6swPUUGoLZ5GoxSS85Pcvifu8kZqat",
  "key3": "CB1WdCZMbnwqs6snDdoAnBfL5MLUtUdKGAWP7HMAZd5ghpQJj45twPucYeA95c1jkMGaae3GF9uLmErfcuWFZ2i",
  "key4": "4erQPMvLFYRLpBE7hPNftZ3N2MCo9q4fthMQ7LqC97wna8mL7EuuznwBpdTxowcgtoNYEEf5iEJ9zXeNxNWtHA9P",
  "key5": "5nSNHR43fDRBrfqV921JinGsrLHCHn683Mu7p1uYMpriFYh3YrmntvtbDESHGGSeiuvnwWTSwjH4Ao1tokdBTvsm",
  "key6": "2Q1PkAnmhHGyw8NVXovEL9V9EJYCMp7iVYwMAsbYRJKAzLeod84b6gDjxF51VyXhaJJT5eFDAt1T5EWw2C7Masy2",
  "key7": "34JXeWkxidiBF42NfQXrSNffMk7FQNKHGLUYDYhkxR4x1g578Wkty2qCUkKBDu6Szihs5vSa8VeUVpRmWRW9AFfD",
  "key8": "5MpL8sh51bvbcM188KGKS5SZm1Q1HSZZJsQi1xYNHzFyrccSQjJeDwBtr1C4i5nmdaC6vfoAGsTw3eLaUnqCVtfm",
  "key9": "3Deriwx73wNQ8xrnz62BM76F8g9pSs46cnuFKQft4iPN6kvoeuak7tTPBTBQHtcSt8dWFQRtpJyK23uRNAQT636u",
  "key10": "2K468xENR8afTDqfx6RjmtTinysS3q9NKaF3YgM4s3FvtkHunCzj6B7BYGLCfaMqgwr5RQFFdx1XpuJRv8cWfGf7",
  "key11": "3zUqCodjdr1H1etoQqpk3U2SfMihwKW4Se7QbSwafjZKaoNfV2MeFxhnTb9TaxPer2YVgJFDULzVsrDbUxAdbcjR",
  "key12": "4AcsPjwrUswhbwNsvLZQBiStvUGjWJJtn49AsgazYyqzeSH7bCdS1AogPrKZbLjUDbZnJEMrkuPcmcbAdwQT5WGG",
  "key13": "3MoymdUtRpECn9oMNb62ZPXFQ3rLbLNL4q4bvUUrgi4w83iLcuWftDb7jAw3Y3HbYTgnypW1eqTonSifnBFArwd",
  "key14": "2TDWZc2eQK7aGsBV2XnadgaQB1dsX5wzNvr8of5DrSd7HrhUP5Y2dzxkmFCDbhnX1EYCV6vMQbGK4gzYhikHggUv",
  "key15": "2AAX8dqbxhF3MibVh4RBktWG2AUou8We8URngdLehzG61XhsnJnCddtm9CGVEn7Ez454MZeJvMZhKgNGcsJp6XZP",
  "key16": "4EE2hjfpUcHyvk815RrmthVb64MVmwL37SkdygQjKUopvsamC87tNzNKxvFnFAUnsd5pGnwXXEv368JSDJnEuGKQ",
  "key17": "betjq1KaX7CgU1mn9RpFuS1LK8cHRJMdG1VZFoQHUDjEPFwNvY9z5CuuQr8oEJQCv7UtvwNXjd2nbTQG1BaKiZy",
  "key18": "4QavJV6NA1qRbLQKTTAMPvkU8WJ1ZzjNUtSsAywE6CNYrDTpJoqhXTSFkFn81tRBJa9tMhX7wSc4Qvxxnk1318xV",
  "key19": "5UFfJM8D6oZ79vZtA1NSVJmydTMfQkaDnQiNNqPkfxvTfoQTcCqi5i9FCzGajz8V4qcXqw8WtLGffjheDg9Lz8rt",
  "key20": "5EStgkmZZudCASEV281mtJt4jeqFva8g5ZwhnxzG7iBaCqsNPtdMsE8BKyHG67TYAHewMeFW6MgcphJcG3bwP6rF",
  "key21": "48EBAyVAv9W7CFrwySe9FEvFuGjBAC47qYhhx451DpwSphF9hjfLtL261SHJLLzV3JAQ4kAFnesaQ3zLypfxotG2",
  "key22": "58o6UiBSNL6cooUCL9Lmtf5utZkwKaFv6oTzUUZvDfSfB1sS87Duy5vph1U42Qw69VMiwuDtoYnsZruRfG4cJzJT",
  "key23": "2rPYVry3dGFxjHEGnEUJYwyW7Fi5gsHP1J4m4k8dHR8kpDjwCiZf3hkB3QBQMX7UezuexNrsYZZ5rM3VjzNcLe3E",
  "key24": "4tNzuVdWjw1wL7ueYgHeNCXtU5dbbMk9MyuQsZbEWCzv2t9393CaFJ8UETNNbSjmyimDx5NysethBuk6ZwQzfE2P",
  "key25": "4AGpwsb55YG9cqkDpu9MrrHKcbVhSemeYKy39Y4bUbUKz2s4rmNwg6xSB7ZMHgaNp3jyVo54a2MyHNT3RqmvcrKH",
  "key26": "4dEtXKUbmgQPDzyGmuEGRpZcmWnVKSdih9HC6Rh9WZuJm7vVBKPuCXX4MBKfwPiDuabvS8aSHEAVzUxDSftRJTGG",
  "key27": "44NrXHA2XS2BG6wtiguxGH5PPeC5NimPoX4brWg9yZP4PXXitC7Ewm3WwmfGN4CC4aSexFwJmnVRfMLDzZDgnYnk",
  "key28": "HvTx6WyDzjrZEYeEx677JhYbvPfjuD7fttnyG1jVGyhxpdZmhGNymKyCnwvKJB7Ry9KbQfhcNRS2ZUMrVZixP4B",
  "key29": "5SiZNMvJD9Sp1Cd8td1K9HmWt264fQeabmFVAYFLwCNN3rrZvcUPQ6K6j8MKujzasa7wiNsQaiHYexuPTX8f6tCk",
  "key30": "4AwhyuxGDzAdW8nUkhxsBcVDE2WuKuqKEMuuzFSX3Uw5EokgM5SVUoLTgmx3EriCSsL9k3mZH9x6KeTRFRe26vYs",
  "key31": "4TLkN9jvicWW79E3Grq4MqmLD7bChNxNcb3xjFPTELdRL8FFr6JHtQeq1Ntx9erWwgeEhyYpP8PNh16XcLC9VU5K",
  "key32": "5nVuMUkH21bidopeNWPEbLgrWKmdNiN7m9YuW3vRXx7bJvmE3JYbMMaw3nQ8zvL8K5JV1QMdoGZfcHUf9QBMF12a",
  "key33": "HWfAMVgeyQgYKEsww5weuMqgK1Eeu2ncaFoNi2RMWKKrw9JeV7Y8Ed6osi1TBHaVHYffimuBAWiH42nuunSPCqX",
  "key34": "3pbUpfx8yTYmLHsSaypSqQgSQy2BNx6QaQ59ogrKWk3JJfymzvcaqMifdQE57DgHwjvnN7748jJhLxQhcSvDMB4M",
  "key35": "38CHxB5oGJq5Vua3FxEjfeLBhUae4UYDEgJxVsRuUNhvvb5iVQrrMg42S5eTX2cUdZgZrfjCgUY1HxSBEseBedF9",
  "key36": "3GPbPrbCnDp7LcZWjt337NaMyLu6fjFEP7db442PDHauVqwacPw4AyNjDa1hZae2oWZoi7pEDfofcLY96DKXm6Po",
  "key37": "44e5tHYknwtwC67xvuPUBnDwXhxPmLfNbsraAyiX6f6ZMmj6rfMZtsjX72a2CsXKwi12gwr8oiaNhKTXtdhatEq2",
  "key38": "26ccWvQqavbYni78Y3i138e9FbAfKdjUDK9jN7RgfUMKZRNiYoXtLGcrtbAUmu5gFq47uaNQudT9p28QPdwVHmZ2",
  "key39": "251xUDazoMmL5F8fk5THqztEScHXTx1Ewvw5dqWjqCa4Phk4HoNyoENY9BVQEpQrRG3BEhuGUoFKdAjQWgHaa1aN",
  "key40": "2SszVVtWYoJZcdPqtDXcD1qcZ1KkrVvVri2SkNeHjo8NPT3nELooHhu5yYT1q8USmgFnh86X4hWUhKz89UkpGhXy",
  "key41": "3UW5FnaLaA53LNcwGmK3vzWkHS7nuPeM4y7asuPSEjYYwjcYbSAKGgdDkmuxQZv6qPAUtgTVeavytjroVzF1jkB7"
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
