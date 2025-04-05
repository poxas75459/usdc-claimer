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
    "3WWEMLYKzT3smYHbEFbC2J5J53RuKQBRKbowLCRvXcQjVB7Fq9v25hF2rDqJKHPm5ZSF7cn1NXnAPqQvNMjYG74D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WFmcSuRVRrxymQ2aASqmE6rcDEdPoZQ3xiS1UXMgy9qsop1bReHXx94opt9VLVfqvWAtxLNcEFuUU78jC4Y46av",
  "key1": "3D2NRKxXcyjEVZxAGQrHPqgJ6kACvP4du3KxTDnUCY7cnKXKeJzeTwcU8bASJCojtv56KMr1FWf9gfxB7VA9EjVv",
  "key2": "3jqsPZCNrZ3ph6ThnSvtgiQBcnZeT7njqiFjrPMz9gLyZC3HaoHntbvfjTSaQcVfUXe6QQp9Cg8rJkxYrx9czAzG",
  "key3": "5UYDHqay3dxzWqemyBT3W5HNxrdnaVsQWLWTiwkdGRwzVdPLTZbRMbkoy2jggzNxDraLnXXdziNCEn6GueCW26es",
  "key4": "3cCsFivhVfe52xANdS7FtC7ZH5hvtCLZ4yE97kJ11YJusFwQSa52Nyuy8PtsGuE7m1GUsWnc1KCqr6SYexrkudig",
  "key5": "3Dup2RCFtRiCayiCuK2AMjmXHFMvS1qLRFciDmyztsCFFE61Fxh4eWR2zFSRK7LcRxPUng61jwAphqB62vxT3wXQ",
  "key6": "4NZBhaESpxfbjZXXgB8U1Fx8TpUX6H674pGCFqwH8LcDzYXriN7ym1E7soQeUwwzb5ruKzv5doSJfV8jbR1qdX8p",
  "key7": "5tyudLeB1qkLC3AortEQKpK4ypJJPgy4QNMgBFWJCwTGiqbfFtkXRCBCmrZx4TXswn76jQnEFcQm9QTLSmKeJVab",
  "key8": "4HfK2YgNEW4wiWJBGEvzfcdmgUszyYawMHEjE3nM4qWZnYiDYYs1etZQvGb2aYT7MJTGZ6Q43VWQfkmKj2yQLCHq",
  "key9": "4otVAjV4vrX3bJyg3X3942JH79DZbGFyY8R7WjrMkygrf9WCCCwXLbUnBDXJ4NKh7rowapVwqPquxdzUKok3EEjz",
  "key10": "vnvb8d1uFbGgu7eT6zFRjPmGe59UeWdVCVpu3A5W6U7Y14uvfKx8TxZRrpmUW9jKr11x4uuPL5jKyRwmUiacF1R",
  "key11": "3fUhiMH5rwFM83KRN6tp9TsQjiyakAyVqa72ikUeexgfcU3KR3WWvQqSc8jveqPFKXn1RAMnhsvoBBUFUUfQmRp7",
  "key12": "3huhB5CUCKafWB5FQGdZcYjVB4Fr1511r3ihmzBzQgaQJASmewJBoU8JTpUPoZ7Znfd1AuiPizCtGRgN6ckSt1DM",
  "key13": "23BfqEhZEzpEXfQJf3eZuvwFPpHwPCrrmrwYRG7Cet7Qiqi3nXmSu2tnjJiwjQyAub57roJ8ZerCB3yadsR4xSbT",
  "key14": "22azvUm9DiBzzew9GE9LxyJSgBwMc7D3zsHncgi1m82Bc3LNe86r1GiJ5cmoeg4B4EUJ9D6u8brU93kXYzND3VVg",
  "key15": "5n2zpjvFooreQY4B3aUnWihByWDv911V91Tv7NSoaDWUxgMU9oYYr6WCxZvmdf4VGJGb5XFPXkqJmz3XRp6ScHjz",
  "key16": "62LRYWYP63ZgJqdunYipsW1MyigMDpYYgRxAxZW8BW48Npwi1XBbJ71efkAN1Kma4upw1x628vdfUmQ6busqfuW7",
  "key17": "66EnKLSkELJ5NB8RR2GhST9jyyQACGNTJvPUtnSDomn1YTJGKXchB5iqUjWLUpcYkBMTpQyFWGxi3uYxuXBPTBLd",
  "key18": "3ehnz4f8gsbNKnuqHaC3gKsxVEaU7j6hxiAfjaggzCXCXaJ6cupCCX3NQFCKssqpDpHarrJXGEWyjeABrKxW4Wxi",
  "key19": "4VDrjjM8AmjrAzNvTcKSajDmpFxEkrPEVpD6A4ct7YmCev2gudthtsT2JJMebuABgpYx8TCvYzejja6iThn2WfGq",
  "key20": "3R428nL2zaA5kagXjnCrBPqm5CpYN5NqW7QJVXNoGESkFMyMWFnKEkLR2fmUH587WNeTyk9toejC1YVHmNktiSh4",
  "key21": "4VyEWdTCEsVthEWQQWavVNJaEbBEgq5f7GVNjK6966iJwpKkSDwgCB8JRigaLemjEkwCJisjPWMgMTmeDbsAMBcm",
  "key22": "4kWQZjA7JhdPwXvN1xLHPrjQJyMUNhKtyPG3jK9Pg5W2SxzBnRdn8NY294u6braymYEHFaDD4ztve5XSZvGgUDfQ",
  "key23": "3Nk1mXLaxKiqkF1Z71vSPV92dqKBxsh6EVnzEnzxHHg3zPnD5PNT8yGcmXZaCxyzZ8GijNRuhcjKmvZuyDNvdsNg",
  "key24": "4QvkKDFXwYT42bBChv3yTK4AFwv2ci2bDhuSMxfZEW4SWRTkZau8JSsbs28eDLyTtMdq2sauyaJ4GPccXxWTEn9r",
  "key25": "2oJ2fHcCwLgQTWoPhCcit2tHE7dmuFVcwhyi9swUYaMEh24A5qR8xZT2cRWMMfXouZYQkgSPBqrMceZSkZDfnq1H",
  "key26": "n66kb6beJDBbtwZdC1WXBqSqf7r4E57zuXwgVuPBqvAnHy8htoBkfL7shVVT8wze1sM7HMQKjE8oS9mR5CZgPrn",
  "key27": "2myT24noi4oEy8NnoavqFytfoL6AziR9ASLy9RTN1JhunsZRcUiPszFpFNptgfV3woixwVykP64KF2GAXsPEWqDZ",
  "key28": "itNm9yGcgwWwkaigD4sAXJVd9K1MNaS7GyzFx4fcUcVYMHC7pDHGpz7ZC2Zvd6V8GCXRvxhpJSLsqwbxShMz5ee",
  "key29": "izwC7h3WikbDJWoGRtvQsL5xVpVMD1ZC8pZPnqnox6Yn3c3dkTqaZLHJs3wA4WEF65M2De77b7ooK5i9kLDLgxy",
  "key30": "4sE8nKz3qRx4HzojArZwqZ4kEN6KvsfQy64NoQxM9PGiLqa1wVhUxoH659jLJ7cRm3Jothf3MWcuvkYiQTuC4UUe",
  "key31": "d6bd5CsJkVBAYGXKBrs6Sk85pUoxdBMFg4FnzW9aBaousdVMDAoQBJQ42JgJXvVe2aZPY2z8DEHDMb7Wu8BkSMW",
  "key32": "4s7JVj5T5N699w3ysXcim5vWz9smzQiHjuMz5kir8act695gbqhnxfw56W2XDmrZ68JHsFEF1CaM9Y1H48keMauJ",
  "key33": "3wqbKEyqj81ooxaVmJsGHUXPFwxgSQgRGuKQwDXqGoya5fwRJhK7pD6BpCRrRq3L3jXUN9KYRjHBajJoFLG2WHcr",
  "key34": "BQtCpkKaK9gULYy1MjGtX7VEsjAjBE97UfEEGcgcE41zFdtbf7VLYFFwULr62hJxSEu4Lfnsu2pDmmgTr3mBknk",
  "key35": "4D6weGKTp1v1jZyWJjZ1nVQVqsG1VNGkzqfhW9KWVrK9nX7ZEYJENv48Am7KUw9anhLwzoP9pAGMcThaC5G3uypy",
  "key36": "3Z5MoqW6xLZnTpkSsiHm7sF6GgvA87wubSV6yrCsB4g7rM6tvCkkuBYqFpAND5TbsdgVqJN5CYcHynGFuPXM9zRN",
  "key37": "4StN632jJLB5hHuh13gQHoHcHizejUGsAto13n2MdM9rA1a6ChtdRK6D8okY5BY2meji4ef9Xv4FAQQXHsoR63Q5",
  "key38": "3dxPh72xatxjsBXDjCiQNW52aECaVJ9NZW9LnMkwUL9QWbPhQn7he6Eh2nhbxKD5MLeuX4nwPa6DprgjJk8uke2P"
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
