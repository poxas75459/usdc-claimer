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
    "JzEeGL2w7mdL1NfGtx4wrzmnFCTR67LH9RxCujcnhJou5vGdsn5tzPTH1Wd1tDncSpZiJnRMatvGsxk1qZHTkzn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kry8RDb4Ck4kEbL77HDXEXZNkLRzTap4HGXYyYLaRUsrrnKb1tf9AgsDKzdNqaS768e6SZqdRobWSYY4pppQMP5",
  "key1": "dkoAnF3sZALHW5DKEKNpkzdZK9cqDKP6NyMTyXEsozhKM2RT33TTXd6mSQGYqu7A6F2AFNBrXvjKQnpw35Fmkmu",
  "key2": "54V88GwhCuiR1vwzWLBUJyg635fDaXzxSgX8XQ4Lpimncz7PqWD56P7KBs544H54isnS9Hc4iMrUKQayXdKBwrGh",
  "key3": "3tVWLUQJ98eVVgAFDVpVzL9KkE9Zm4eUYNgjwbDQxfpi9ScwtPcHiikQR7KUd4PtQEzH2dS6soKJcKzeeWacUhoG",
  "key4": "2ziBPyvfcqbXGufUHjjmUJgZwxHnhSVhR3FiCTyDCWgCBdCHDBqjnBv3bpvbLM9RZa8eKMWSa8fwBfuqSK1yD26W",
  "key5": "LLGfuMrVnSfrNn98z1y7seWCweGppuDowCQCFBMpeq7ERJHzpndLqnjtUaD4rpvniJed4vnKxmc3HYZBKN7C3sH",
  "key6": "q5asXmGBn5ViPqCV2tSSM8Z8KeD7GaXNPosbVvZfTKzYVM75zGxhGCXN7uNpyq7v96fiBNjCLLbRQowosMFns7C",
  "key7": "4FCsuRDoPFvVQgoLbr9VFKRvHNav8JHJ4XS8hY1Ra2tfZdKAEY58uQS3QFtoNDDU5878nTeyhpYjy5CXdVE3JCdd",
  "key8": "3EizoZYGhoATqo74JznJQ23pEdtMA93G9qZkcGYviNGDpMdgWxgSMqbdasbYpsuNa6K3tF4957aPfip3sfe9UHPt",
  "key9": "5ErjCj2HU6rzaQ83BuuM48Ug2MTfQNu8bDrSmivkfxC4DSyjupgvVeCHSBzHPY73vJ6fKosZ2xWppUYXiPUARv6a",
  "key10": "5hJJfbAPEcC7riNDZZVZBJYJ5LmNnNNFdogob6Y9hB6gidHZgWmGn7fWubSpfFa31sb7Aq4RKWEN2x3e9e3gU6XF",
  "key11": "3BHEGdSBG4h9pSmmAfuUAXJSJzvAAMkyLNjMcbk5AL5XsLF6JwgN1mMMB8Zr1DJjvVBj2zMepn69ac8ou6xNyZZb",
  "key12": "5xRqXuhnVkwEoK7d3XLRpPua1hVM4SAbm6oVDFCvf6k6g1vAZXaQe2QzXQicqs2CBtzvjTTTqVE5qu2bPi2zMwKs",
  "key13": "2mUEYxeaVHk818ELNomVgHa32FDK1HGwoR1Uc3jhizU182xAVeWjUUiuxh8Txx8fKgQeAT2kaPzArCzobLRNXtmU",
  "key14": "4nSdwyHiGV2bGfctSuVBnCbx1esQPZkbzeZaj42XV452gUFb8LpLSM1UxcQGR3QFrjmNohBpt1HyFPsCpHNvtMaX",
  "key15": "4RgvNg3jAL3wm6JDwiVcZcws2aPrGFtqiNXCdQarYBsdADJrKj9xtuW3UZiVN8DiwXxEKKy6hkAKe69oDgb32pR4",
  "key16": "7QK43QXN9bZg9AxqwHcZa5HwqyU2gauPAQzn6PRjXkbnDeSbgj7D69HrvaH5yZNgviKjYGB4RyDjSqBP79paJo4",
  "key17": "36rmJd9JnZqN2tYvUK4xm5wqTtu6RtFoKe543Nvo5Po1LgMFnUP8WwNRBS3cqnNpKQTJBkcL2dzcF8PcQAo9NPAV",
  "key18": "3kBzAkPfVMXJvr8FW3uQQL7PcWS7Mp3B5h9QWacM7ipZtZ2d46hpK72f38tQLPCtPBzUCXTYkUkv77K8DJEWbjpB",
  "key19": "5jXjMzpPUFUeFRWowCZp76qC7NGwiCKsFWBQr6WRV8UdtZD9ZRb1CYgcpWN5jXs4dhvJcL7tYTzP69ScsPiEaP9m",
  "key20": "5FfrEAAp5ZUnARMNesMwqXkp1wmpBirwfbyfzPxQeQmrVfk2gPFHEhHRbSTJPemS5n52F9RpudSShywkoimP3y2T",
  "key21": "3iPeUNohPzz15PTp77SbhS4DpsfeR6DYLkygpbpHNd1QqjEugKVJjaZeVB7ZbeLS93zsaYgo7a6KX2tMgYY6J81W",
  "key22": "2DhyZLUtVGqZYembgAVwevLY7tzHyUNu6QvHa8rYLsAahaRbsci5UAEuL6xHqsdxbiL1ckp7qFhnHSsLGzjirUrm",
  "key23": "4tnLCtdgwsLVbM84Po6wZZMg4LkmHwxuF5wtAEfA7McxaRJCamvyaEuJ5CVwhqPXCErxVAe3mGozU3KfZerQgwaC",
  "key24": "3YoaN8gdoG6wu1jhidknLHphFEJiUAeoFnuhqhK7GLcZUb1w9Hw5EjGD71YHzhP9bmd3kEFdchHeWwq71UY5WUTP",
  "key25": "3csbDMKwSf7pXschfiW7u7m4wphZy4YHBxb5VWChA9vvdMw9baGKTSw99TrUEfJ38sZc8fZ1WScZh7owx2Sbf66Z",
  "key26": "4bBxoUxwas2T9B9SFQxNWJfAZuZeJwsRKEbaafTFxBBVFHGfV5mJUCUo4p5o3o3yZax51eWoDgwMBXsHFQefCVkP",
  "key27": "rTW8n3tyMdHiD8EVz9ZrwQ1n9GKEJHviGmQcnyqTZXFeVncyGMjUQvRzMScQeHwvBuZy5EWrGCu51V36zYerRjx",
  "key28": "3sCeExRY731QH6fPCMRJyYFr4uqbyM61Lpuyu2n1PwrV5u6JytQWVrLgr6nWDCR2gjsB4LSU6oAcHASSd3Vyv5PV",
  "key29": "2q2NoduvuTKLVcNgFRamCDhV83D1LCs8SUyBEarkVmAwz9Ziz4D5dFVYWxGEHWqEmxyd7CLdGipWJ7gyFz3SjKPp",
  "key30": "43TkYKE8RGyM6KyKVqjXgTaXzzauGzZ8PD7dFT2hw7kCvVDXUkQ2V6fhbpyAUcjgRwyQRmNMfpcxTewgqL7344cR",
  "key31": "5pbcvtkWhHXbYkhAeUnsv8ThoHAVPRSJ8TXdzrRAbyC5AYbMyvDqcNm7gsi4FMVnTzi6jiFS9pt7uo4bwHaQzyJT",
  "key32": "47o4NKTG7Gcmg6Ef48CQSpnMC96u6FvR2NwdqtKaG9k9h8rRhMms5fTvHJueGxE3CH2Rn892F3eJYtzLRrVtMfvz",
  "key33": "FY3kCJEFnwMzLGNMiAS25rR96NtCByL7398rKLh2kxMnqCuPCzBYQtrmjaXTWT5NRLw6u5YaRcckL5y3i9KofeZ",
  "key34": "3GvxM15AbW5QXWd3zJ4U2KG2xWbtZjaUk2NFZRSageipY9ZMVkR1eNhyxTiTzn7YGwCdZext9TkVQLPUTLeyaDz5",
  "key35": "5oDnTp82bgUtj8QQtrTuW4762aU3KngDEGkLFQ7cYEF59VPwaTXPKzN8D3tCVzW68pjzBdTsFtTJQpUzhtKdTJx9",
  "key36": "jRP2ynBokjiBZvRowcjMLAX4AX4v7GBeGKBPgtR7uSTHh6RYhMAv9tekdZGg2TSxAC9vnzwAAX16BLyguMXrkgP",
  "key37": "5uN2Ys1mUivtpb7QaWsAaQRF2jqnjawjEm1PMX9auqwbZPdJGfcCvoZsfobMNdMFpkz8pJF5XKUjCQxt88GLa6qC",
  "key38": "2QEvEXLD7RaMPbjpdXmLGM5fZ37gxBqoBTkf3G6yyPARoZrxaub5DExMAeJFY4YKx2ML6svDD89hW87VKM4jFSFP",
  "key39": "4ScJg7vmqLFtWz9jy5SDGRUGB4UWrVNnj7kkcM4S1J9xpPwGf59Z4jaiF43ZdzctYH5QTZfdP5gmi585kcr2Bfhi",
  "key40": "5j2EjoSHHjo3kcet3xWgkW5hAeCeSo31dKbxBwZ6dTDA8ufrhQZQ53ke2DHbG4mm8xeEdc8cV3L5Sm6ZzKxpM22q",
  "key41": "9vrMbVQ7hFxEHUgJYxKLVKJTmYJNtuXTW6KWvX8xZYvcxXVq2jq4VfkyzEGAgoZfNvrBDxpmNzQpfZFDJXicctM",
  "key42": "EcyUDgAkNoAk5ZiFpkfJ5R1jDymMXcJ8EbR8qEaP7V6vPS1zYvG3NX7kT76xmTE3bcfUodEyucssjFKS4qeUJzi",
  "key43": "4trYcNSU7HkZDwtex36gYTmCBg1yyY71hTKG9pwas2SV9ti8gzWuFSo7N9YQ8aj8w3u4fBUWzuBtARNML4Qu6JNB",
  "key44": "1uAp2rya6WMs7ofyuyjoWxDELrA8B4ee6iGUH8eHUjhDDk6BA8zZZDQjKTVx38JxMxUV21JJsfAM8mEm2QtVZ6R",
  "key45": "2Q3q3quWufTj9qW9UoXrUi3RSxjHKezbh9QsYsdddf4geWS9xfzvna5n3LiKUnJDTwJBSkai6kZgAQbsiHYDxoKj",
  "key46": "5yp1JBnUvU6AKVydzEw6jD92JxzZkmUmmJrrFffspqQQTfmv4KNS33y4ahT2jtA92QwyF1UGDqzB8cJk53YYWbKs",
  "key47": "5m2kgr5Ni2bHfjQCnfV6cjCLb5Q8YsN7idHv2ro2FNEw3bHX78opQVhPdcwXaNAVrF8CzpyQ8RxRzAGGsrs6WTbG"
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
