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
    "4E1wPMPgkEBdFoC8DWryVaKihmZDYUQH8FD774Hvrku132TPCKoKTBTsPYUkWi1BtGzwrvZQ7Rdb1YxQ6aoKhzyG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K12G4UsnrhawNpjVBQsyGwSW7bzfSrAw5PF7gaC8ucHeoTBiiyhV1GoBDvmd2he18fnhjq8zYWuVuWmzRjvB3MN",
  "key1": "NHE5c3HjvV2Ttf2tDiFXZaGDhnyyVUgrMcFUnBorEWaQ12ECP12LYvft3nMGZXwrYjyrSAmohB2SYWoizwKYcXA",
  "key2": "4Wx1jqgmY62Dx7yEWQo3BkEs8WS7LtXvUC8mGLUSKV22YW8FK6jtYtfBeFCM3iFXC83ugPqMg3pYY1DkRzvNn53q",
  "key3": "5sm8RcUuYhgh6YbbfLVhSeWatH6o4VztVUHQVPUKAnvyqFztybcfvyLmWYj2dYqc4pAzkwD2QmxiJGC43pitmFda",
  "key4": "4MtkDhcUTXuokEnVWFgwPSDgeu9FZZLWAGjZ2fKs2ANde9JdzrKfWnch3v9L4Nd2vothyvkDFsGjXFKK6jLHDL6w",
  "key5": "4QpDoyM6wyfeyrpB8Ct4zjhJC1N47ejEB2upLd4erAuDizrGTBU5Bneox5TjfqtgXXqkEpt8q5CwM7qgsyurK7Z1",
  "key6": "4J5vdAjx42YN94EbgHdNkbbY8k9KdcFPrrTNhA3ttRv8kGP7ZBUMZmnBNksd7WWQdz7sguEtYYHNVxd6jBCY3iMV",
  "key7": "PsiKHgDj7uUgK6UkS53X4Ug12Z9ApX2SvwcetxihrzrctvHzVCM28MPaucVSkb1Lt7UksFUuF3V2KUNYiYgPhMD",
  "key8": "25eVgJA24jrXQv2U94Uqo3Cw8PzZXmyn8SERVRurDH28T5e5enreQxKNB43m8SjDRS8CMiqRqXgGGSqUbXADBLNi",
  "key9": "3MuUKUH8qEEgokksomtSFAc5r4jVzWB1LW36559tJKarzy46QjqynkmVSqTJJUm1oJ8MbpQ6izPrcSGLTnx8Eteq",
  "key10": "3q5B7Tv7iqhUzXGuGm8yJBYP78wPTsxgKRgGnGZ7nVgSM8wRHpCWovLc39JyhjZ774U7PVDFzeJSLqKwzeRFqgWr",
  "key11": "aAg7wopB5qZ1NyCedHVSV36siQh3M2y886jmr6HUjTeqR1vLZYnFFqkGukBMxoHzKcLMJjdcAtgNyxDTf4qiZCM",
  "key12": "44LZD1TBSxCWBc6VTsfbEsEEpLyT24fr5WrvVLLecJqKXRQeDZ3FhGSa9vGF9aFE8KwLWg4GMxxgVFMR7xKeBQ91",
  "key13": "2iXx6C4q9qeoR8TWn4JmwBNTDqTJJ16UTitnyoFwCZWdS3RPyujb9ZQL5VBrLdEhm9ArxoudnCSGhKbDbLMS5ZY3",
  "key14": "3AXenoVqXbgVTga3Gg2axGArbrWPCiL2pkTsJeydN8yebykB9XEBoYSm4dyLYLyNns54hadiQbbouq8MJG4sKK4y",
  "key15": "65j6P9EEnBfVMcdxYCETtCeK7nQAZAzaCPYXq3uxkbpqpB7rgkE5Jd2uxb5hQigsQRTr3Ax39dumfJv9KSc71bPL",
  "key16": "3FotRZmR2NN4Dfyuzc9yhtjDqSp1eUNqTXyPxkXiVJbqGMdxghXCERWB4PaG3RQfWpcLLhhK81Cd4CNFJgXGAVt5",
  "key17": "4gj4r1SwSSwnghmBvHEpSj7SaycSdXKx7WQkHQpt6RMa6XxrtGqxT56VC4MKyCm3rxmHefJpFC6bqTDzaSR9iUew",
  "key18": "2uYDBKXFDGrqbpRv8Nti4Bnuxc8BMHMfGjYjQ7Qd8oLRK8szFRKQt3niCvtoF335nkyucrKXXq87L7uExBmcP7Lg",
  "key19": "2ZjJVEiEtjfqP4RqDA1gp4tWTzjhcTAzmXLRTE81gSgBBYGnscKtNC3b4SWmpdG3cc4P9MkZENA8AZ6Wvz2A9VDS",
  "key20": "yWpNHhoKCHc6NTBHDq95J3GdxkBNMfoh7FLDJbxSHmbKAf1sQULM7Evaq2otd3xGERNqLKrN76DB828xFnsTbnY",
  "key21": "4VrCXXCwRkWNXVsnaCATJmvVgDh4sL8ihgrtcpkbcpp87cb76M2Nr8WpmPYbwtS9x52Z3pjJqJEcN1oXN1iPnTTo",
  "key22": "62LMwEqiFDj78n6sJC5Fi1rziAc3USM9SLffepzdBDMC6NMi3HR7iFiy8GFCUX3RwhNC8S18TBEJJXkoy8oXY75e",
  "key23": "3PYd8AtqNemHy3QEdpfC3bfCddN1pjUevDDnNRkDG3kAJPAhgszZRZm68wZDg7geq7UgJn2UqCuhSXKRxXtXubyf",
  "key24": "5faipGtnMiEZYzu7AZvTfiGMa4ByRWyj4Txxra6EwR1ope23DPR1521HS9mUKxPmJc6Hscex1jD3RqPMnShxqnAv",
  "key25": "653ojrFYtUqMC1nBcaSPmZ32Hj3wur3r5YpcYbQvrb1KyASoinPwb3osF52pSaAnS7YGnCqrsqhrYt3V7QZ945GE",
  "key26": "5E2nJYrb7zEj7oXudzcKxfhcFMNzpVfQa64ZYWSoXfzpMtQJ6U2esYCYpyoZnqfzWHJsMg4TEz7DnnDeMstMucf",
  "key27": "6uTDwGhANjjKxdvCcTnaRzamLF4MVe553Rds7ucszx6aCGm2QRdYarA4kePHMDNnKyj8pTqbKR4xLUFWt1rLu5X",
  "key28": "4iNQGiwQ3Qz6jJe91EHuHWSfabuHw6xvAvXCNpkxiM2L6oCUWrYXdvU6hKSK2ZW3JVdR6XwfbNnAGn1f4fNn1ypt",
  "key29": "5r2kfW9yinta2tFTBCTrGnumJ58c7rxmhU4se6jEMmXAJkYAJp6oREXpFyJo553ZRHuGNrne2Frk5PR7AWss5m8J",
  "key30": "5pTLXgRGHRsNca1oG1BL6vvoUcxzcVAhZMQS4Nq67BQsvVEgDdTjukpg3MgyWjvHRnMMJHRTvUNWqMJM93L69YAG",
  "key31": "2n6wQAmZriC7XLXgVSc7hwXD2isaPLQBkoGjBsdScF7y5jMuxHRHYogF3EaMaQy9D3zhmYkuYBps4CCE7Bh6tfpL",
  "key32": "4EdGLP9SoCBcyTStMiw2yajkeqNxSvDxAJzkzJA8eCNojU8R91GX2f6cEfSPTGU6sUDjjfz7K1u48NrDnnkgHr5e",
  "key33": "3ZQop4c5GsoboD7RJbgq8m5UZgkJaRBvsPg8NanCrcus6jwpJPmabe8p7sJ3dzpK2CiFkvMrxkDhfZupyguSM5KB",
  "key34": "3eNeNZZrE1SJnyJ1D77x4B34iN6EayZAL3JsoGL5RF2s6WuYq86kMEEsdwmoXcQKxKJMqwhd35MVmzzrJ36wDknE",
  "key35": "5TTTPuMHg5qzdKZNCgmLZoTdxXU8umtu6zNpgYnCC3aDwrTK72iaVN4b7hKg3mvmUp7qnC4DzLLRn9GTPef9Ax74",
  "key36": "2Y3K59kFDJPoJ82EMttBG1paSRpeyytvKnFCRrmkEniQNWv9WSEQEU6Cm9XSGskGYvM2tBQPGqJyo4iYkiiqcnYi",
  "key37": "3NVYfGAgS8rTfKWBZ6QQMCB7p2tvNwMDQCpSrXQaMyk4B5aDVNhKhAQSkPGurt5sLnDVcok343ij8HHU4QAHrKGk",
  "key38": "2q7GgHGxbb1GPQAfdYwAsnheh5DvziZBA2xpbuveN8dBq1o6nejzcJE5ntVnr463KDi1jA7dCCKXsPN3RqU6izjo",
  "key39": "4HB58f3xN9HwtzzGdXDPy5gg9EgBdNFwPjTk2wsQ1JXktGw1HybsUgC1heeMCcwtnKJ9oMq99kdTD4m1kzeYuiRX",
  "key40": "6Ume3PKKHoNP9sb7pvkFQyR9Z3PYU2Kq4Yh417NEqFHsQZeCRrDuZYP8bV8sviawLbzsehALH9DyLsGMZ6Fs18o"
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
