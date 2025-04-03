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
    "2T5929LMpCZesmmyuSMvu8ioQTg4JRf1biFBzbs3J4wTNAiHkSatnUbazNRUq6WE9FcZfeh9wqiTCZtWWtbasUtu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V9unD51Nd54hFxvvfXAXSQc3e1N4WqM97qgW745o16WVED4sWcDzYeXk4a3do8me4DcXjkHQHm91jcyckPzProB",
  "key1": "58jsvPXSeKNYS8PEWDUkd9jk157fZxHtfWbQ3wkWzo9xi22orxCmferCXxeYhkTzrZUa1rVL8LFCAce35Ajj5L9w",
  "key2": "2Bv5VktEZi3ityJCbYNz8TBrSE15eQJtv1H6xcvzfuFB7dYKHiuV1garSH9tSnyoQ1b6VSXJnMntKR75T73qELnu",
  "key3": "5RWKgqsTNwFpFDAoYTNVt1qmKMbpGtYL3jzbhYEqeYkZUXpW6BhgLdPnTTmfrBRhvcW8LbV3zpgBSbt6wZPdHyZx",
  "key4": "4iS2rADxJdGXE6heyxLMzuZepiSYCn7L8jfpZ2BE3FaSPuATh6TcsjrTuFeMP7qtrr955wpqyvuoJKbjZbVUtiuq",
  "key5": "V3wbDWGpXGE2ot19ss6FE2Mtwn3BtXAfVgzrtcgGcF5ocbdgiXptLkWCXaLrG9WcdF8ML76PceoCCFAczzaZo5T",
  "key6": "3w1XJG1gUjpAEop1meUEtteZALaw3ivK8tq7YCV4jD76vBDY36jYY6Wh2bsd8d7BSTmcsZnYY8WZaKgHM79iACBs",
  "key7": "3wuGDCnAc6CtsWnxeWiMopfnXki5ocFpGyDt6RKeQtpqGEvJwPuibW9xgGixgribQhDhNFPJiyUvCU1WXa2J18Nj",
  "key8": "3PaKQa77LtV6ffEtnQkDoU6SiE4uRogYNpxmNJaanNBUF2nfGsZXceybaqS9hhyVQCUCMFn4DxzUcxZpLbYoJLh4",
  "key9": "541Xr3wB4oVtWu1Ao2SJ5FsigHwJF8ESfMiUYB4Q1BSce9vwrw2TM8XXqsjo7ccC8pQNdR6ixwbEbqw5q3CYUcDT",
  "key10": "BoTJeZQrBjW4964ZB96cBdK7hzRjnyNWP6nPP2z22wfxMQ21gzqcZkTsN8FUpDtxEw4otAdpRqTN5bG1T2EvFHR",
  "key11": "5CDBHztLfW9pcPYAaVMrVi9mJ4e92aQuVMy4axfdYYBmEoLxTtdidnYGYFhAy5LkdHpcrj2kyvixcGjt7iHeKFiQ",
  "key12": "3KURhwYmcxvyGrae9bJVBvZnvgvhaQp3KraXoxCbkWz1hR8kvh4xu4rPwNfBaxwszN7sojeRGvB5cz9va6k7hVSX",
  "key13": "4DuDhiVf4QvxHtgBMae24dbm4m5mwcXD8faBeLyqLKZ4R68NhJEwRG4uEspdD7Gy9iZRD3CrfHjUCf7cikjCgDwE",
  "key14": "2cmpUEGBpC66NzeReDmEiYW7Ug4TqH46zKYqYi3mFrqTgoTj95UvKNPLyshwLwcGDdTzt8aaGEQTBuAkDttWPDPL",
  "key15": "NQWyjzKb3GgFtGgZkwX1Ar9TyPJcyAiMueLSCuPGzgiStQK6TGZaM2Aw4CEFAevUh3RxKXc5krzRtugA68JaTLE",
  "key16": "Ao86TKCD4EXfdyZVREbSNJPwqAD3Eu5c6Eijt5NWnbnjDSHoyjNy2P8tjd1snTWWUacNGD24V7z3FBBAtYhw8XN",
  "key17": "66DH4n9gDTnTkHTGa8BRvYnij7rFKGYiD8K93srqvDJmDcPS2ibahaJuefx82WQZagpWMWj2TMFZTZZUT5StSrx8",
  "key18": "5erw5nTixkQ5Xv3p11t7YXeuKbvdnrSn4P9obfC6JZADV3PgCVevbwm287SM7N6qvUiVNrtoUeN1Ddsbr2SFXDJ6",
  "key19": "21cTUGpUmTFH2hitzajjUC4Z1XGjQqHNDkUEixiymBenNqqrgwgN2bJS7FVQezqPQoYYqesUkW95rRR6dPbx4KSc",
  "key20": "5di98TPLHLVPm7LwAw5QX73EK6X96KFeVG3UJPne8mRdWtfv8UZPodtbm55U2h9SC3kzSZFvZFZh73Tv5k7uQr8E",
  "key21": "29MyMyotvHSn83M5MLAi8CQCiamYrkWbGBmmiednNhnvqBAstrHE2sJkbDx4gNdtWRYC2eaN3kYhPrZSPw67o8ez",
  "key22": "rF8YMhEtnfatZGzxtp6n1pnXRXoFg2edNFE6Rg3dQN4YhCaEj4zKrwdjW75q7k5sftfVvFnqKgBMijYmLDKqmXp",
  "key23": "583LtcjprLs2Z6FeLehS8ZtSvDkd48BTf3XiEZGao5RyEnxYiBjnyMztCaBRcWefuQb4rhhP7VARxnDQXnxeVovQ",
  "key24": "3f6pmEQyuPJBz7TRT8nGgBsqnoD17zUwtfQc1ap3fmJbgjSWcnpGde6BjXkSp3zhr16wupxCix4EhxWyrst8wu52",
  "key25": "2aos8vBXniXeG1kRhtKbyHd8z1SrtTLkzay9LNGVfokLaMyfpSVRZ8vLDFGHpRcJtcW4Hw122kVT7EUSwqGLhMNM",
  "key26": "5TV6fyHvEomkZuTgKY8FQiUAdCsJN97StWBmeXGoZzhwpERECtTaDU9MqVAEQ5AB5kBMa2dkB1TbeQu8i63zs7vs",
  "key27": "4nDQDcAn557yuYFZ499r3UAMPyFtNLe4wKTJVrN181HnsWTbRqcczHYzU5jdftEFcej26gBm4RMp5VwzxWgHXNbC",
  "key28": "5nedPEpdN2qdjg6qtqWkgqVkpLMvckQuJGn8vVn3M2xJkDyVyLJvFcKyECUkHgp1Gg365Pto5TjYLGcWGdGwC5CB",
  "key29": "2qWXdbW6ZUksKDbN5MrK96FLJ5fML8kHTbNYX3RXH6yDaf2AsXiMZzHJauypLQLhr6yYucorTULuw1r1PnnXrNpi",
  "key30": "4QDH8nLT2A82KSuXcXvWpQdcxUDoKdRiSTzrDpsezfNrfuUjihxtVfYrHRK2EEzWtPWfdzYphaMDuvhWM4amQQiL",
  "key31": "2MYTAM1GfbRzSCV2Ln1qWFwEioA5H5SePibMKuRj8aR9dbgHumdN7hqtYPuubu7jGCFsK4snfyCHaBpaJxR695YE",
  "key32": "4MkipCsyucjRpDQ4pXJq95gsAz4gmqZZYsbiMSRo211kEnSuh1QFBmkkLbWWZk4jsCYkRbKgVMKMMJ9Xf8mQeXxM",
  "key33": "369o4xpbTiEyWqNddbTtVS8kTawfVUzYnaXxZEC7rerB5QBAL9aezBHcNqr8T3qzyfjmfmcRz1PqWQwCQYad1Byy",
  "key34": "2V1Zidb9EB5mEaarvzj3PV1nQVmYQ19S6bS4K4YERP3PELk6QYuqbfwBNMFK2MjGeMGNKDdEw4swJAMnxFKvMu99",
  "key35": "6sdbARsa6G7SY15vcp1kVSPb4QHLkedMzoxgiXUJNxs9xEV6XgPzZCDrsBAZ1n8mjBQXdBWDKcve3DRbHMfQHvP",
  "key36": "5AAFfk7eVhCYNWQwNvhfuiC3EXYdcYCQ7E8K7yPq8YWTZTwBKxEXiH9Q6biR8zegttv7yd4AJbiirCohEGcV65Sy",
  "key37": "5FZbSS4RHNfK2TUiQHsrBotoS5seoF4685W9uCp2vY7JsjXagRVgRsCmuuPu4uVLVjct3Mmnitz64yQqru6pa6Sf",
  "key38": "4bog8rHT9kpTw3xJm9RpNcoiQn8JaXY9QsAZFF5DJpjxATS4nFr2KCZVNp4E2znn3eACkzc8j2jkWH88bBsQQHJQ",
  "key39": "HDU1Bom3kKwzamydHXnNxBwdSUQrXwvKBEeDpXyifj876UUSy8WKWSco7u6fmBvc4HAPkvgRwKcdETioYY6FeeK",
  "key40": "5gdusk5hZib8aEcp8fgUxJmPAAFX6NWzVsBtDNUyVXBCnbAminriQPUyGDhFZETAAFywdPqSi4CGqpyHzovio7Ys",
  "key41": "fGQuCKCL8MSRuw3yVebhWzePHmJeoEPQEwPGj9MY61KS87nrPR2Fkku1RBwc5e35VXLuW5Z2x8CDuoDaBQXua9A",
  "key42": "4o3d9FdXDC1btj8Va5QvsBp4TAPm2Zwdf7XMEfbPzJpjtXQrX16v8JDdsdC3n1yvjNNjhPWHSNR3PeeaTxeBBzSt",
  "key43": "3rVMQGVq1TeeWakYw7aoxpCeHDmLUjH3wU1dLxJt8X8tCEfUSbyggHuzReLcCvNuGZX7NotX94Ewbv8GDhYeqfj",
  "key44": "2TWqpfGJxW1ZW1zc9PC4PpPAui6RqtTLvP9ZCrj5sLDUgZ6ny676ZZxgyPKw3cMn4DB1JMxiuQJ6wrCsi7QDPJHr",
  "key45": "kx94xnUC1q5x8ogeVncvsV7CCJpPvCKsevXLmVk7ZJFSpNn8Cgprc2G5NWjJKfYN5N2WrJMYL5KonUfvEwr83jX"
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
