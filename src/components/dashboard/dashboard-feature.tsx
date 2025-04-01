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
    "3Hed7yRFdDzb3giZosjqka3V6aPb3MvNdpJmNLmAc1GtB6wVvRBBgFTbUec7dX3qfjUBZ4NDXCqjH21bZvJ83Qqs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3durTQGh552XT1zKiB3N3i1A1LzcFBjuxgFYmnwiVyUszMkePTbfmn7Z9Z6jw65piFzZLJRi8FoCJgFENWMgqyQs",
  "key1": "c18X5czCnkZz63wfbACEuaZ5p8ijB2PgDjieZ8Fu4eNZwpDmQekv8xrS3MSELxhJXu7WMBJDg5WKsxFhnbNxieB",
  "key2": "4u767WTspPZ9yEp17vJVkfiKwtDhcg8cMeioQ6PgJ1fnfFezk9Zp7Rn9fxmcyMeyUw2Wf5zHXeLubzXvv6ox9ucF",
  "key3": "3nniWKTn9nmNRkWtHHqTVAgkUCgct2QUouh1hY9pW14LusVwWLoZKqc1P1d5xC7Ra8mHMXfdmedd6kq1xNQWRNGw",
  "key4": "41VcAZybmYXdsF6KtfEfcshTBSdXC1D8LDuWJgfAsvX8qHoU9JstV6Yw9Pon5jcnHtHWJyMaxSKhCuxeMENZ4Dr1",
  "key5": "yHF4inwQkVYEri816sVqgY16jRUq3MmdUcS8zR1hWQzyqSv3Tfg5EcMxGAdoGD7UDPYUBg5rvAU68ukw8Ebm1C4",
  "key6": "4gtS3SKGhdgsfhUKVf9FQuMeYFGBar9PGkS7UzabiH2LsSFP4Ggbwhh251nCbFo6Db7KFzG8NneKFQu9RHFnCvYR",
  "key7": "3B9yUJNKYBVZ5zo3thhw89zAimcqJAkmY2dJnW5h38D9qFAm6NQ9QUbLdTJFpaXauYhp6NiVAhUoK2fB7kaiSoh8",
  "key8": "4VtcvkXLeRTVRdeUdpvVuLkCQdWBV5vp144nfpd3jaf6NfMVAjn6iaCFahkAgZgHNCyJnD7arNKzKMiQniVMgfkT",
  "key9": "4m71UEqCehmQ924hUjaTGhYNEQeJB7vsLNPCbourjxodq8Gg6r8NFnJhoKxWsLG2D8gnChqS3A3XftCdhKGuwpsq",
  "key10": "4w9MTvq1YLjuZhfewZ2iAdGpZJ3YgEKr5hBC8ccoWiBY6a4run244LbepQQG93S8syF4B6cAHSgfeSMdzS6RyRY",
  "key11": "4ZxFTfGbHt1F5bEsUFjzuEFuGQupeGM2aNsLMxuazw1ckuAkomzJ3hNmWc7Kg3whcjUVxet6DCi6G2MozbSp2oCU",
  "key12": "3KL5DEw48UNJDAbFvsoSwDLiUG8iVtxp7ZzBwX4Eu1YQivmHctNPug8rHLuTbNtYqaLkVMX3tgMEf3Z7hLex5RFv",
  "key13": "2vHoeDBFL5Vo12BaiR4R4ie5E3irY4ReqejrssNRyGZQ4LzXQvyo9Pz1FuEt7xyeZkKn2HJcntW84ANG1TnJ3vUH",
  "key14": "48ZSUCFnmoTASzdDUEqYywkWSordDWyuPYEe6T2wyhikELnCo4Z5we6WrTjHEQXZcU6a8kHfTsaZGiUH2rB59fY9",
  "key15": "3WXPKsHpBDghzCjVkS2wZvMNXrvASWkDBkUPxpo7KW9MhKqZHADzXRK7cXKF54wmxjVTBZSJpNUmiBpz5Yn5x1QB",
  "key16": "5ZsYoXzFvULdQ4edfxiKr1NEpgZimYuGX8oW6usYuGVMNya7K9M85u9U3NHTpSA62mz3tnR1kted4js3PJSw2gXP",
  "key17": "5iSnjeQRu1qyfgK72bbf5Y3Gag8uNyt2UJ1s6Hu5CeQdtSkoJb6XZCPx8k4p3qd7SALCPkjQuk32bKZCKxkxzCou",
  "key18": "2H3aE9vMXUCKXac9iomVEaPW8CZMLPPsYoUeEGeruMReC6wk4AsigNdgpu7MJPW5LhhsP2VoHhjQ5kVLVmndttSd",
  "key19": "4mEdDVn5ZSR2FQqo5KupoNobUoDxaVRJxW58HWfgyxXmAqb5eZeiahKwLSjGjRX9Bqi1pdCJD5JtskLhTEqu1jDr",
  "key20": "2rfRiTB4K8vChx4L1HrBeFKnqH51DugopiXw1418x7gPua6rHojcE9WUqALikoBBqgiebR42c3aEjkf72C6Bfkob",
  "key21": "3XpN3DbnqV7ZPmKfpZFmA79wteuDtDF1Z4NCy923mZnCbMQw7qL5QpJcBM3zNMf5ZJGKxjpmad6DbGyDFJW1KGWP",
  "key22": "2C94qrNmnycGAEbX849dworAACxGiCytQFfkQkpx9iBLzEuW2yNDsMPScqonhVwKLUJR1WVVTCaS1DTzHm1rUxtx",
  "key23": "fABTmij1vFU6BhuLQokeUQeRfRzYabcSQeQDq5NSEpark8xr1iWwQjnb2GY3be3YFHMDph19VkYhTaHKHxf9WGn",
  "key24": "kaEYAHSTipwE2L61n897nTzoorZEWAyWFqBKo3CcXAqTWxeF7zXFVnkYayZwnr9Q8KHL8ZExYLuF4KRVAkVpeKy",
  "key25": "2CQn4CLQYMBz2LTQZvV7LbqMbKEWEKUBzqg9dpKD5LoydjVokVAE6Q8EMvnoZtBo6Rej8p8cqMyVHzRBYYotvG1P",
  "key26": "4LtWSk4xHhNvcspekzMMmCXArG8UmdFCksQpVnGNKNNKxhCVpYFzdww8gjyTaBdZtgJGSdfTEeVFpivHCCUZ1xiy",
  "key27": "2qGkjvcZUGUNYJZDukAn9tsbiMuArEJtD3Ywwtp1LBpCFgFD1SzKjkvuUSPrVAwSHovkGTj8AKJKsLixEZ1mfdw1",
  "key28": "8fFtrBEaicBbaTXTgBdhWuo75TiHrYAt6kJzFracmkLu3TN4cmbaxM3cvyt7WpSSsKhGFtPMPVkSXJq6Wp68fmm",
  "key29": "45JkzcU3mr4PjKk6GreEuAh6wgKoqdvo8Sh1pLj2NGvgWWN9dXi4jAaHCScNMdqeogji5JJnUxueC5J9dQhcfknr",
  "key30": "5AKXYQmZ1M1o2KgebJK4tXwEn5HjDXcdpf6z6GETwnf2KYoxEhrbynZ6aTZbj7HrpWMrQLg9XuPYXxyKYvHZthTi",
  "key31": "5Fr2RCoBKQmowq3FvHXe84161jq3HZTcQRneDLHca32d7jT35A9VMh1GDpyHCddcgczoW8oPjSDJ9XvLJBXEeXL5",
  "key32": "FGFVXu1ujgJCrW8VTchRL9BooXqHz9CD8mqL1hexvCDbPLKmZQJKrbMboEoUMsaap3jgn6ZU7dGsoFZAiYCKU78",
  "key33": "3wsNCga3hWA5aZGEFYCYmdDq5efjht4GnbFyp8dWQESAEYUh2yp9ju1LGG67f1DDetdA5e2CfVmawugpa9jxrehf",
  "key34": "4965YffusjYtV7CbaZu2ZkCF3Ssxb6y6u3gMZXr7UXHGFLarMgWvUNbyxuSLongQgzohoPxRfEsokcjJMbh9C65v",
  "key35": "5oxKsHHMcmU7mxJmkHS9fycLhF5coSWk7Hv9XbYHkWM6XmM8DgGTzo77vQjnJrxpkxm1d84ygzzgFQqjKgeRye86",
  "key36": "vsmKMcZZKxS1Ng6V12wrFQYgvYiBBwVDBTUuaw1bi3ctYixuHAkzJkJayRDrZ9srJLpEitoESR77QJxJG4mDyid",
  "key37": "4htGATnVTDMs9xWchgAvL3rkYLeUdp8BwWMbEgHSDa1Suak7wjiBgM5mNc3uy7dk7YxnQX7hdYHmHGtMkYbyzPoa",
  "key38": "3HnNs3iTBy2PcKmYjUFGTbbtifemKVF1j5SLSV59nX8zWGq4CgCnw6f5mG8qzzyZiRUWJ5yQkLWFFKCnn5sixXUi",
  "key39": "5xqR8bjFnWeNazzKwoohPo85g4HLR4EpwkbkqArJyPbyfK83sREA6Q5mUTJjsPH8xy6zgWbhC3sYDr9i6AD6hw9Y",
  "key40": "5XF4DrjqFM3RKxpfwyANYXX6wd6BsGCRgsBxUJXakTUyvJz1oBVPEnGFSoab34JY5K5qz4JbtvEGBN4qkHvTEgMu",
  "key41": "sitELoT3qGAsajQ4JDTFDjBNuScpc2ztyhLzCnPrTqnvTuh1cXzzbfGJ55oEk6yPzrDV1Pm8M6iFwmh46fhzvLg",
  "key42": "2FasmH7cNh78QUn2EFy9jP7jtba9kkGULQA2extir47qCD7V5HohCsh3RGaCdqFnX6TYAzpSgQKw48tHhddjrBCe"
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
