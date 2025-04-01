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
    "3z1kbHWRPZB5BsxFCwYmSMuHo4pQmSWJkC1AEEdLLdR4chVTUaxZsAqhkAdm7Z65bRkbpsDbczYNtm3kVaRLEmuk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pETi5b5A9rcphRJYyFjtTFdBRbCjmPfKxNgpJ5wdYm5pJcPK5nDkLXcjsnjAfXbLrR9FbmbJ1nXr41PiZkE6xWX",
  "key1": "3EWfdaPr6sbfUZKnoJgoh3maHeTf2ascUSAUH1BhoXET5YjazJE1ntFs7sccvJTTwKfp2rMD9VBaamqaZB15Xous",
  "key2": "2MQybqegn8oNuNWbQubUux1JGtcj67v69y2Xvsd8L1DtaYowUgW7FUq7V3TMNCtnLHeyeYSBxr9DUa5n8xQUWJ35",
  "key3": "41jBJAsTDXj3xGZvkDVmKxjWDx8E4TVRvVjPyrq9eSAyQHqjoU7M3LWF6dxevUxMQbBkdcWze86KDCS9o2GK6xGS",
  "key4": "3vw3HCrmuiUa2eLv1G3kbVCdkotzBe2XNeC7CwmtVj8vKEfUxaQ4DGPCK1faXu7yN4kkuqRnhsyTrjk9ov7mNv9Q",
  "key5": "5FbEcL3ZWD8giF2y8piY9G6KJFAoPH6fao3GThmkdnicAjL4KjyvfDkmeqXXZCkdkjHt5878H2g4Xg6ULPvV6sAA",
  "key6": "2gLuxcqq8BCyAYhgk2s7kpggGtTBudLBnewCWwSvSu6upgdTKf2a8vtacvTFoo1HciRiXmCZQ4ZmZmLGGtiMPFPb",
  "key7": "4Nqk2DfTHe2vGpHA1pPonrorYh3BFRmz6zv4gBme41kC2E6shoDRycMb1gj9UmkxtDy7xkrMN2AvtVRNrhMLrWPq",
  "key8": "4SrS8EPBFeYwCAaoHhTH4qDAr6wPBZNMCNgHsRUAc3xYcZqYFJuk23vM7ikDJagP1jxbVMAHeDf6mvM19CNWM3wJ",
  "key9": "3V4GVYP7EHGLkocstLqG9dR8z8bYwHyBuLtYdjAvb1AFysdBx6dZE1TQDzrEUAv9fpaJfYdynrM3fQ14kRNTh5w6",
  "key10": "63PH9xmVqgv4iEFGX7dgi2SC3PWfUUFaf3qfu6GyVySPmUiq4c69bSGFGRyf6Jx1fTYsAQDhNdRPZju2MjeZtviz",
  "key11": "Wn4gQHhDSeWD8k2GutTFGi7c4KCqG3RCrBoDwdvZ1Y1nqE3PT424xDydZoJU5fR7iGkLX64nQQDbwFJKdWGHWNy",
  "key12": "36MRmSkgzJGLQYuKvsKhXXZxmYjox3esRL3XWicATrNYxkuM8F6ziq2W5RcLgWWrdJPtzj7pXk7zZGjKfvDs1BRs",
  "key13": "3TgwMCSwb8DyMKpGZhQGftBWab3CUKDaABWx9y5YfUnWBvrCp1SRd2DiAcB29J7k634H19ETySjTz6kcNRSurwMQ",
  "key14": "5hNSEDwXbLSe4qz4fTPKeDFR19Uq7jNjfTuJy2qV7hJ9xgFrKQBsdZXYESe7CpYEGhJEYRz7Dbu31Rn1i9aHLePq",
  "key15": "5hnPjAthAdh5ZPgsbcBL3wVdgTQFJbYVYgqwfLi6aCoRrxYSd4jgLTvvnaeT5AuJkqyRyWpUhj5PjkAhenaEyoPC",
  "key16": "3CAA666vWyKDFSEWWPATZZGuA6ghLgAF2SaftsX23E8a6wA36c92TRDuPkjzVg1fg9XwBfnWfpMhuTGJ7CyMsWQ5",
  "key17": "mPco39JidJwaRLbkSZSqmttfC634BKgMxpDnUc1DAkJKJFktR7vc6L75jvqgrheHtUotjXx6No5Pb9Kb3LDPSJp",
  "key18": "TemnYZdRoNTKzoVtzASib9JG3YDmKC5Rca3V42W39BK32LDpaLX5kyi7g6fMnSGn9gG4D4TSm6rsVw9vJvMPhC3",
  "key19": "5fwCqC63hx7fnnnUNdqxQYmfVEy4TZ1d5ksYcWLN8auqQFx29Y5H3n2D4FTvJzwY7JQkoGbwtowvuTk8gZrRPQqc",
  "key20": "36mKAiTRdzsT7DbAAfhQEDV6VXSYLcgfGYMucn9UvZ48Jc7sjC1DtQDVC7aRj3urKZdhj9oEYxoEW1bf3r1wXsrF",
  "key21": "54ZCvugbJ688yVa7cuEjGYUL8F8jTDUK2Qm9kUvcpCEfVJxYAk5qqjb7hLVJVisxW77ZjymrtKE7XiDS6ZFfv7Xn",
  "key22": "3pWTW51umxFwba6xQyMG4iHrTgoykdKU5giB7VL1pVY6LyAtuSRCtSwMDayxQDfzd84gS9c3ZVEAvqig4dBompx7",
  "key23": "5T7MdFuraUwYu6MuBGajfwUBcMMCLAqHnGpyVLJTJB5F7UAV3NtmxZAmGvnZ9v2VMYqX6AhjGeX7GHXFGgTJ4Sup",
  "key24": "3XexcRjBS8GJsVX22CTRzcBDukshTPdyszkDGALwMA6MCFHYWu2E881zbuWgRWBK39WQVDZ1sZYyAS1AGSfWv3A6",
  "key25": "SxvCYFjuU2jkPbjcZn3jjyZip5pg8CcAT41huMgZCyWuyGYaYbSYAG7hoiVDSEY8WJPugQwUK74NCkWUQZ71pfq",
  "key26": "521qRKwMdmjybmxPoWrUQJvf5MZzenj14AtLs4DWm6wezQ5F5RPU2Vn4jj8TxwXdo4TNtCrFJh1GsgF7sytg6Yrf",
  "key27": "3TfiWYRZfsYnhpEnzQE7nahheGy7o94Xo6GD3UfE8HEovktZApdhpsJm38Q2GNRpx4xxH7M58G5RDAvXKE9rY7fA",
  "key28": "3ehg296cxd7r56N8BmV5GqUBDF4T9X7EQmJLZgB3daZnjXMcc7cWSJmHz2EWru67grxNTLoTqVWuagj4kK91bfmQ"
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
