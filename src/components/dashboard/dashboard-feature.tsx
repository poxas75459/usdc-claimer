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
    "5q2ZC6yS8hymDwZjRqrWJEuFMTLtPHQrftYpeWZodQdwvAQ7H4hMtkHCJTRYYrQ41Y8FXQn9PZosvpRyUFHDDw8i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b7m3UR2Pd9tebD7SXdWxBVvhg4DYdGd3DXZe1tJ3iVq5QjWmJRxdZRv7Fjsg8o7tr5D43ZjDDaAuw7AAVBuSxND",
  "key1": "ZNMQp481PDAXJerMWfQ3TvM3QGAZ348MFzn3FHdgyrkrFgkTS7UE38bNQK6jBqtDzVG1jndkYT6nH3mLJg8Bn52",
  "key2": "65s35MrVu8he1M5UMWN16Dn3Nfsok1khcz1D7d8wiWym9F2sdVFNaTtTmS2ykMKR9d8zoWv3DkY8umYpn1msALRq",
  "key3": "2ivG2vqPa1UD9gDmsRr9Eqm9KgHj67Kdii24kWiVA2vySp5PC4atvTV3W3uqBop9GgNuBMejq6Bd1JS7Vpe7JNon",
  "key4": "t6vw3QpP7aCQH4tCWVoJQrWLUPkgAnDKNXq9jVVvjzse5mR93kUAQjijj11gaxXw7tdRprWNAhpcgN57baF5drH",
  "key5": "2LNoydCB5nPqrYmGZzfwGTHLekGZMrPGbsameefwqAhVJmeiBa7iJr1K73a3r9tvTdaPkbdqLpGbdXuV9NZYraPN",
  "key6": "2xYWh2FdX3y5mgbxH5VT3YqjVTbFP28fr3S1SRNNvLua8Kft1SHzFXGNzCydJj6WUtVbGt6JzFd7bFsSygR6chud",
  "key7": "3DKjkGJeNwPTZGF1CZKwmiw4gDPo7hPKZF4H4PkC3QUQQ1tsZSFAnfyoUArLeC5ZwRYGvCzZmhVgD1tttKEMaKK9",
  "key8": "3zo2JDqfpgF9RMDyzJdmKJo67ptB7sDM6HYMPnSJ72gPSS2KZyM6YzhX595KcJMAkqb1QSHUBKawuJEA5wj62Lnf",
  "key9": "5NLdXKqGz7opsuUEeqHbVqmc1YFHdwDCaBFRNeTEYu6gXxTfG24MgRtXj6nENyFiJ9ZKN1FzG388ysp51BvzumMe",
  "key10": "36PipwybUaVaRYQ4zLogruMU1UyfC4p5c2nqvuWAAUdWRPFBr5HG54mbt643h5PxZb11c1QuUuvii2xWFdFKhE5u",
  "key11": "3VhEQYBUEkc4KD4ivBmquC7U7Q2UE2SK3QXc4kGFn1C9W6VaeB3j9kntehUuDb2SgSEUyvM5TKs6zYS2YibEnVZS",
  "key12": "2EDEYAZbMmoVNKvhXtoAk5rJeuwupj38bPUBP7qfHtMr7bmAG5QFJuV8E5p4bCbpGt8AnPomoN7TSmXNTTT2bwaM",
  "key13": "3xb4t9ydj5Yy8g237znV4puhWVHTJo3ztovQi7CivDwU32RJyxDVRYbVEXnzmFwxFcZ2X61EZ3RXbjVangP3JRho",
  "key14": "2tJm8JpkxEc979HtgireAfFqmenT7KsQ5abP8dQeodrp9Rt9nYga5RmpGceKmEDvEdLcMVE4YFkjs9zcKvqTDZk6",
  "key15": "5EwHeSJzcyiPgxHTBEKDddjaMwt6bn2NsHZx9QFAx4jCdc1grPwQhKFrQvxziobpRCd1qzAgjbyZNLsznJ63yzNi",
  "key16": "4HH5XKmDWTz6XCuTGUD1mgUQ6fTyQ6neNpDtXipXJz2Y44xnob7QaCFWEnHkimoBotCEAaVVYMcsqYsD6dyae28",
  "key17": "4jhej7qbyxd99xVAuSgbyqdYEtYpsDDBoXpM8x4jiFj7pKHJPW58CFtyFFH8E9bKnu1scVHTMvKpsm45MMi1DCPc",
  "key18": "MUDdpsPEi9XtY9VSD87LweW2CgZsuKVju7wsKQRer4wrKNBgxudrfWwautsrLYcBcnWgSKUCWbwUjf3KrXwvYhQ",
  "key19": "4pxwQayD6oC5nKkb9xP1BhHc2dJLcyPvTpYP7sm5gVt568kB6CapSw7VkLZSguiBqpap5ZVUe2xS12yeot8kkhxF",
  "key20": "3sQuwqtJFBD13oNT2F7UekAmFF27f5zmkgKQWWFfpE77fxYhgHSgP6ELccpdM2G6DohY6AyVc2ifw31rAqdZ9iXS",
  "key21": "5BNErRbZm9wkQaGVzwyqV2FGD5gRnx7ZUuP44ZhUoPEDpYqLomFx8Z51q76VhBiRb57AeCdEDKpZSv31T46R4enL",
  "key22": "4ULX6bciiBTz54qoefdXsxjGbkbDjphvgJM1Jogd2VowBdU2gj6RhBo8tW9NS8sBcZW5h7pxQCsAf5BBtg8JSVAD",
  "key23": "28zwKv82CnoBy6FF4HyQwsv2qZs1gZRyHKsWBhUE89jPogMxsqSMsjptpy8jMA31yaacXHq6QvzXaJPRPhz2zMMb",
  "key24": "2sppGRjQgLgd5jTVoW2qEdWdwQou9JmYt3HTjKtVAFNJJ1iee7rLShZDxd1nspabj6rkB8yHM5g5m5VMvznsgnAV",
  "key25": "2sZzFK2Xv4yzXQtNkujqLLD7VzCbqMXa9YCzy7UM1SWvtHxWsr7ofGKusk7EB9fp2Kpu65aSoaVSZ9xWSw2gTLL8",
  "key26": "64fSD4VPDRovqKybQ2z1FinGz5EQN4h5fM9cAVzhzcRJSddbJmkgiLoHATQv8DQY1duUob6QXQtDnx7rCV8MVyp6",
  "key27": "fiUjUGPQAUu3xtFzyk1S9s8b1LbKxp8vGVEvPq8FMbMvNYJ54X7iKM8yGwuoNNJUTZCfyGhJT5HTRujYMtw9C7v",
  "key28": "2DML6SjCp7vpv4JvGTz2bFivFVcoYXibN1CocqgemgvvSQ7yFiyBfSDCE5aTCybKapTDh2k699ZmfnUtWuLSJvM9",
  "key29": "2tZA2EmyCtWRqePcZ2J4LvWpBziXqtBHzNbrMYYioxiXHzqPQ89RggzCyiNz7wUWQ4b9aBAbZpchRap2fRTNov4j",
  "key30": "2TPq6XpsVX17cT4Li1qZkRAzivPtv9CnAd5ZkFd55dq2UJCYU3LXbyMe5KXPhuBHgpSs4j9ckycm38V3qCDULz7W",
  "key31": "oWhXF9R1JST6vmU1voLeTMKEYqndFbgjVgWm5X3tH8rrfbpkMMEZwCDWgzd98wgZuw6Yydm5aya1NSDq46FXQNZ",
  "key32": "3BQwbUhTnxTe1x7N1d3vxKQ6ggNCjKdMwL8P7m8AZrKVw8nrFyN6Wz6DLZdZFRy1vWADDAZCZxY6L8CxFbzHvk6P",
  "key33": "429so7M7u9Rv9caWPz8HeExKN171pxSyH7cMzPGgGaHJo5jecwdBaU9dQQxtudAgCb6i2SVpPkubFyqPsHGmb4kv"
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
