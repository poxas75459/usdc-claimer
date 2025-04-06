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
    "3QShSakaUgyu2qZzFBnJwX3AQTKS8zd4GJYzujqDAnhKMb8a4Q8fe7ufjyH4J53tbwaQq3MinkhKpvYL6ScQLvi1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Mrgr9ffwknTZnb4xAHRU6SKF4St9EUfrkHdfM3gSYKyhtvfEPhYoBiJZtuynW7omPtycJ1MSpodHA84YWQaymUa",
  "key1": "4orZW7KjX7sYSGGwsayEfJvRXMN8bpxL6BfR4KmY9kWa8BPkfJ7zj6dFXNCjbFVi92qMJVN68EhmXrfGyiAD4ec7",
  "key2": "5yCtxbCL68yTcDvNiHnogrWpYfR5qunp7CTfEGYRPo2A53NpvEpNBVqzC8dnN57Gjyb4deDEhhNu934B3iCZdteD",
  "key3": "5a9Wob1v2oQjmkkNR3r2DfRvPiy9gTYaDjKvp8GDDdSEjkNhjjuLHmaq898Gv1P3ESboUs8bMqc1cmNK6LconJES",
  "key4": "3ki79ZMFR7XJQC1JiCogaK9YCSVn5GiFvBDizAuL2VVU87Ucqvjenvcpo4WSuzKZnYarcopmAWvfBEJ9FPtBury1",
  "key5": "3te8aDQX9EWSEw9bWeYdQnLJq8NEncRvJYLB1zkVMYYtoUEU6KsAJVxKk6LeYZy7xXDc6BpbF4cmCjPqRNKoTiUq",
  "key6": "5v1NpkBFabc4nLiUuXmGrnVpRGYQDyYjScTXKpRLQ8xrcZV5Q7JKCsvsP2iC1QZZMdyx6SLN2zv7QjapJz79qnLn",
  "key7": "2vWkMmL8HRXWxSoqC1RDwbVUYmTyWX9insaFY18RiucgzzDBmmYQyg746LjAkPTFNBAih5gbauiBu6QhXtcMw6Hr",
  "key8": "hLLyMkv7pgi3Sa2xNAwWBHiLqywijvbrx3HNqooGLv59RZDrzqYAoL64U6xpT4EraHHJpAsFXKno6GevoLF9XCH",
  "key9": "2xtCBoD7tKYpsk4tY3qL4iMBNqHNJnW1KQzav9grMgsfrA2184cu6gSRUHArtdjTYjPCEThChKueMScxELzWC2iU",
  "key10": "TjXoijaLBmDYMNZ1i896JWkztRx3hAaYyvJbhUr1DueFDrDeNYXiCSWQBytuyUA2gu59itQopZ7WRsTPC4rRFSM",
  "key11": "4w4NAgtwW3apT8ANjigf9eRQQtpGchcfCQnQz5aFMnUbXFYdUF1pXRKB8Q6prLnyRFtgER5ZniTHoZnbZEAyoZZ9",
  "key12": "28PNMHW6kJJ5NPcJKES7twK3NqqvAv4xPBJtRjAuMK1TNaYa158RcggbgXxy3BCQLCERt1WUYgXEq5YBRbNoPGmn",
  "key13": "4jcmXYSuzmAd71jU1GaYhZc1vet6DpRMfv1D1M8X4N8ywxAZxQUAxxh59pyiKsTnS2kGLLBmz5EnM8y8iUJ3CBAc",
  "key14": "5MfGpiwyM2GeAaRX6eH6mMTWJTmBn7UJRFPoxRWXdL4uMf1XZznukSULVK1pzwSuEZNzPv3mJfKUWjwVkqDAJjpQ",
  "key15": "5zbRixzT1x1pWa8Ls3gLniGAXJ6kr95LjSDr2hHyKz4EvcBvBunAsiCnwcqkf8s4shPimUpiAgLUyJCkFkkyevBu",
  "key16": "22f6nmjeNEFWTY1UuyLPkZXM9B2nZBirBr3M6XzjgEPacpPEPXApbtjEocemJemub6Uebo5B3Wdy6XgefBhvqm8f",
  "key17": "1Ss9XMgXupaHHa59U7j7xkFfShYVskUSMcEvHZ9qSsbKffdAqoJp7KxHLfv7SUQ6tFPfyPUPQcWqteEywYxUA9N",
  "key18": "3W6GNsuKcQXSArJ5A8UfAHr9AXynMxK22MXwddskvVmDmFn52qfLwdzgodXpmKLsdCw4tiC56yxQeu39q3uKeK2g",
  "key19": "3NE2roRaKemHgDYfwTq5v3RiY9ou2M21UHL1UpWcHFZa3xUCgTHAfDuSfGK6kvZDkm9LvnbH6Ui5kpc9UraKdDrW",
  "key20": "2dbrdP1Dx3nPD4aw6A1LrEoLYgBEzEUVwSfkUbnr4v4wmcWXszENLyuZBsKbUKc5RiLij1RmaAEkJSJF5TCtVzHG",
  "key21": "4vux8zQZpkMRWn4EfkL2FeGCMaNmAySvBadf9mP9QWEXLhK294dLdjiBU26e9zFR1Wdp9gBAzT7E4C6HJUKJDpfn",
  "key22": "hUYZXeBwCQEsPRp8rHHAxFpBgWf1g8Kqu8keJmM19wUKY9ABM2QiEquzRGVTAWsCCzUBvnutDBBdRR2GYuJJCJx",
  "key23": "2AqAupGo1eZtpUDhBhjzXnvAyGHsRHMMf4Jqs1ypuCsvgNBUT2GZ4acZZxnaebTVf2Ny67T4UZwkkXuZn5yDLyTW",
  "key24": "3JPSoWxYTboscxaMWw4DJHpGyxHCgikxX8LN1z4GQmcDoyzgPNLZ2sDgWHX5FQkCTW8v1F4AuYn6G6PtWQNo6DSg",
  "key25": "gcAjif91BaurgQUyo6hHEbRq37CZtFPzAEbnXnuYwX8YgxJPLVLkj9Djpr5xFvtmuKgsB6RGjv3k51HarhFdsPd",
  "key26": "5d2gUV3ULADy6hwn3BK1qteFhecZ26En6J8uHdkd7Pvo8Y9UGF7VSJvqFRxBBRGNpnEvuJzxkR7xa9AsypfCwRvD",
  "key27": "5QnXgioVRxP3YyqVWGbkgMyJxvdjgpawY1D1RHeCEtSdHgYHfHb69zGsNxRQnCSNoYJ85URuym4LM1t5PLcGgqGe",
  "key28": "5MbwrJSiCsiZsTVbzhmdVGf49LAEMfNZN9hnoBVVVMtKCXJdq8Vnziuoxq9wmXzaAEQy3nrZ9DiyX8Cddx5eMaBn",
  "key29": "3eP9fkUf2PDcYNDpUZuvyzXUuyZPBudcPffb6wwzoeJKd6YAjSbTwu9fTrXk26CJRn2kpFQGQBsLUuZA2UX19BXe",
  "key30": "2UZFpSJjYTTkznWB2ihMXPPfnpwiNY5WMm3T8uX83SgihgJGTg4tNmFZMQPqKeGst5RF59ybrprfUhtkzgUZeqT8",
  "key31": "5nv8LEfrDj1jCWdx7cmmtrwmzTTUjeQ9vskCViuf4hhBx9NJPxYGu9QscL5gydhXiwjFEGNNUaCvm4WZQsNE9mFC",
  "key32": "583TPQKwFGUpNwTm8EWtaA2hPCMdW8HmyKao2kyefvDzeZ6PM4HPbuQPqLNq7W1NXsZxpcLahPJHG3orMaNvMUL1",
  "key33": "65uRduZP6rr8vULHv4a5c41ZGx9ApA1cxSnCSResuditJDJ3YHRN63uQLbep1d4o6NXCo1Mwtj5NkGpbHkbohtFn",
  "key34": "C6Yqsjfit3BsSTWjSCophbp1fwF41LyY9UJPj6CTPvSiYwvqHLRYqBfcF7ACxsa9JSkpmSKGDce187id3ncbx39",
  "key35": "37785X4c7e4KPJqoZdebRWFTxA4TjfuHwozabWFEu4XmyXj4xkya3kQPtExaGFnmsT7teRmoKzQ8xEEXG24CeBBZ",
  "key36": "53foeHQFvQyA5fdvFdptCfZvByH6n7C2r2njxNopWw2TcpGzrj48JqHQa38BvvZrtJXsVS82CjxNSZBJGtFmrsmi",
  "key37": "JMz3Y9qhR4QZ8crHPoKRhevTBwQS3XdWwGgQDJx4quUyTFF6Ub2gkvce9trLi9Vtq92DzHvDCCScpU3PurAfnjW",
  "key38": "3C9TS7kxF3cPW5wrS5EZUNkTnomjiiaPRun7fMe5swAp4Mx2tLbWctS516pZ7dgpm5nzqAbXHEU5TyVyLiH3Z4Ro",
  "key39": "4qcTDEe1wvNeQL9B7j1aUKEn1Se8uE2jP6S4BMBkcim1EKQjKVZZwph2e6A1suBMpTdAxoHWkZiWykWUaa5wM5jh",
  "key40": "2k9hVS4YHH5fz4NDbUutxc6FMeGA9sdTb8secr3GKW3sxdPVZS2HwRivp87DmaRYVnAWJp3eABJ97zq8EHjNPyY6",
  "key41": "3GqJ3NDpMsmMXQeLGpdyv6WkmPhUxmYcHRcM9DGUFF1V7msEVDvpybq8FqyedhPdyCgfyE31qzy11hv2NQkWtgrR",
  "key42": "znN7NchTSDdKdU2DCrY7iY2XEhjZYAqDLktpPh6m2s5KCPviTrbGemiy5ddSuMromAAfMYnWPhNGqugc2RqXMuT"
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
