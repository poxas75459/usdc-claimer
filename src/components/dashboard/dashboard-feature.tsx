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
    "3B1Zj6wHE6Jusvw3P4ydihoQGQ3CdEbpZX11F7W8zVMCgcxW5ZArP4xZTVqdK9X3bfreQZQk8kroE9mNFQpwDb6q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F65kDB25EwvxVEDQfPhoF2eDk5D6DwtR9y3YbNpx5DZTG5zrpR3uwrDyUVp9udC4dj5WWKCRr1iiLC873tQpufy",
  "key1": "5KweZjVre2L8QiPbxngNV8rbjpvYv8jqVdKNbCG17zTkngc6yHbiMfij8sWrSZzFfuAeNjkkgbYBhNvCJgBpzPUW",
  "key2": "4PUyBXqYAnU7WeiWWsNHGVir3KxevK4FmJtr78M2Qc99LQ4CoLtmiTefe2Zac97Ax1ckr25cf436c2cFprHMUNen",
  "key3": "3QQCFth6WBSJx6kdwZfnSn7LqeWsxtDJvQNoxBoGVGrhsRWjSgzn6RQGnAEYcjDXvTZBBaCPAMnshuzccNbHDawm",
  "key4": "T98HsixRzhwEGJ2fUjCVTsLLxv3Xx9ZrEEUcCsVTh1hfztWT3EqqYHbDPqpmXwmanWhroPiCEgqw6RUWrGYB484",
  "key5": "3XDQPzKGrmDrXtorxeH5yDKhuefXekVhKLYKNR2NhHPW7VJSjMEzqt6n5P329KTTj4XobmqXmyFm6SYenBEh3SYr",
  "key6": "2TKauSp5ywnXLZuNz3KoCBW4L6BQiNTuohVtaZyy3cEnoHQ5nzCdfToe9298vke94azg7HvubRKEwprmYoaazT83",
  "key7": "WPXLaZYuTHqq26f7SK9jaNZnEzPv1d6qWjTUKbE1qrdJ4rQ2ZLWHxDUUWucE5hsaQ6tUHD7HmGnkyrBLCoZp78J",
  "key8": "4ZoNxCDB94GLWmrKifPoGJtirCX3AfLR3xQndGhakNrfhUKfCwhzHvNfSWQah8qZcg5RSM8Uk2pp4n8yqFTdndi8",
  "key9": "3d9uj9ihteGWMfviywK4Xq36As3J5cHc41tHza2zmSy4aYxNGh7k2seJpwtG6unMiCjoEr145uQaxLwaizfBojqF",
  "key10": "63bT8frj4FsLU5nsQqnihHWqwyT7zx14VYX2dhTyxT34rqBpM5dnaAeLvymLEnNj5figR9psDZYiMXhb67if7x9C",
  "key11": "4WuNgzH6cBqudQmdg6MFU6ttKukkzwPHkFimHGZ2TUH1qbjmx3dfqSevCcNGqzh6wMfSNvzfsffwT7oKfKLAKsu1",
  "key12": "5CdaZ4gyKoGjB2zaKYuewSJBfCtLtk1qBFSw6gAmQMNVhGAopDdTzBzAYo1q7HFkBwddWAkBEykVkvuUkuDo59Y",
  "key13": "5w1C8hGYD8evTMU3MnPEbFEwmc5BLqCptPjkPXAubLHGkWpsuJbRjYTEdw2rZSrRki4pcev4h2pWBxe7d7zUheDB",
  "key14": "3mcw3aHmc5qCA6ztioXSYWo8ahXQDunHVyf5Baz1jDosTpQhWp8QPNWURAJSHaH1jGeQr2m8u5tN1wCcfQBvmyVr",
  "key15": "5NhQ4dVj3LpGyivWjXxegWAX9VKrWMCTDN9oNzNJfwy12ZK2MKKWqtE6ErbgLr44GWWLB85ZWc1kWQQo75yzZgSt",
  "key16": "Q5mLZaS8hdCxS8Te9VEmxXKBf9ptKh47fU7LstFZG5CFmxMHG85EUaqe2FHCS4RM9mCTJWgSfh2gzEG9MdZsuq9",
  "key17": "4kGMHAdR6acWzkgQCCTUH9BnuwfK1p6MSaZHDWXM73DTkmUeEHrokaPCEHna4TtZs2Pgg6eGEMsbJZg4PEY6KKED",
  "key18": "4mzj69TymAbmSWCiLRaAXfqM1uERudQk2vqXXCmHpQTJg8RT9tUB9kYU63HDTcb4m8sgsDxxcP5PbpamZLdbReA9",
  "key19": "2en2cQihJMunLcoYsWShQPT3KZsgZPcNpfntaM59aZrKmFSgRXnbBaNY9UbYk1SJTvwVuwbNVPdBN734JccDTVWB",
  "key20": "2oC83iaEBckydBZgNwJbRB9mPqdwPP65ysiD9W1TjRhcH9YZj6Y8ghAi7VY7xxnQPnRmSeaQctjHQaUiF63Nq5fd",
  "key21": "3uaJso4Vbx7Tq1UfzWewduQUd6GvqAC4BjmPCzpWWJpmnqtM3Rs26SsC5jMXo4e2B8HnyHifWddYYjWHfxNHU6NP",
  "key22": "tsmk2sAwGgENLXovNFqwyXsLXMo2PC6zEDp799Pe4zebWVWUaPRWHG5jNe4jaJ6XvdDPinEteN3cp9i32UNTCZD",
  "key23": "3qxyQg3pwdQRmGhLhCZAEpZdvs6JYitErS1DNvC8QP5YL3qnLjm8C4HBJZWHmhAM1KoLp92o8afqFbrgWjpesM9Q",
  "key24": "2DedM2j3AutaNaxTXESdbgDAbYQzQB5jMUi9ryAYuvEzfLBzkW6wzE8NEkUzwXgRapbvrRNd8spSXRDdQkvdxcvT",
  "key25": "vZQKtG7LXNDmTTpHS9jsfYfXrpCJ6iBiLMdzNoqwazcG5amabi6SPP4ghyUWkPjutG51JZ2yCFcJTa83FPvYQnj",
  "key26": "5QkfyrQkgFet4vfrkGNMBHrTihAxNcS36sVyshT3fDtQUPKEeUV1aUtjikFM1C3jFpgmdFcASKHgiagCcMfo4nLY",
  "key27": "4VKxiNxkejaCPSXBM8WfuxNivDnKHK8AcdMgfEK1RyVZNFSHimRerfkRw27f4AjEJT1gWqU17Jwi6cuPX6rcUBqm",
  "key28": "2AZvbw3d28vw6J5MfSbww6niVs4RrsihkQ8ZDRNNGk8iqQ47VhT2H1qUnqH8ucCZ7r7vGtD8eQwBQeTTAdYfLCzY",
  "key29": "344furRh8LQNXUEWYoxKrh45VLtQBQ8Bd1rhFDUP2P5H7JY3SmQ2aGkKqLLqRtRSsnkLKBF22c1P1deyPQkR97qG",
  "key30": "3DYcDU9USqz68p5L4cmJkvLaddzoNKXqct9tVKGfa99QVYieKVV1PZG28BGKKVvPiAhgZTSi2PhnBgDRCdNHQbjc",
  "key31": "5hCjrbW3b2eFFmsvgqM9PJnDT8eTe8v7CswKApwT6tdxqHrw3L7jtMzYjBM63jmvbzukJBj2PwUVkAZgxrFNCYbJ",
  "key32": "2kRdFKrc98esjaKUuQgcT5h1T8FgJBwR1yRw5SxYdcu9BUFuu6vNVRmTSdesEQxuPkvoMjJDj6oWno7jDQQvjDbP",
  "key33": "5L3fcSgaBP61KnG5dibuuy9NQxn7gGq6TNLzyvuDeuDhBDZsb5UCMgDcUnyFHj7v6rYNxnLMWvTLiu7P8oCxPxXc",
  "key34": "3PxDsUmXeX1vj1cFsqfFTJZk477LpWit1fPpSATxJxjbyP9xftDn6qf8WPRtfTRYGBse6R9qwvUHEdwU3W8sYQoK",
  "key35": "MfTeju376YHZrXDXFSNJeVyi38iBgGoHQmV4pjXvDLpv7kf9bfKTEyTfTUVziMPdRQY2FACMgG3uzvKaoNs7Hqv",
  "key36": "5XgZmvmyRhSZ334AkMvizU7GzBDmCTftVgK9xjcVM7MVrCuxGtGuzVX6W7hUDE1WpALhr2kmo1jEXvrmAa2bQfdi",
  "key37": "56ExEQGKGpW8KQUnFb6UGS6bzrEMP7X4qvxH3ydrbHKJ4CpYVgVooK5oV6pUhrt3THFGGnq8obXQU7YxRAyWX29Y"
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
