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
    "46YBqRh9Ycfzo6FaSujWsrc8CYyjmAivJFZeidigsXD7Zf1reiXip8uCb9gUGQ79VheErda4dt9336fgC6pDtNcP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oMr5uyU6GsgB86Z38texx2x9r8JfSMDoSgrzYCrtbFobwpwkRBV6abjU2GM2Z8Bjd5t5Jz71fydyRsUxxHhg67E",
  "key1": "5epFShVMHvVho4gDT879Qi1csvYYDbCTPn6KKcAZnbf9jyfc9YnXCbPqWkjqPKj1LjXhg8WAegvf2xPkos3fhtpP",
  "key2": "8GSRUPoom7HX43Mm6GJ5dgtTTtAjk9kQrPRbTwBtLWhn6dKTHjmaL23TDVu9sAyKMYN4ra9v6uZAvvhXMvkVCUu",
  "key3": "4tyzMDVXxMLFUK4siRoySmfUYKe4wSyEvG6Ej5qQ2RedF3oyAgAPdTpiKuVweUc4FBrBck5USf23G6URzKhby33B",
  "key4": "qXh4rsJt1rtTDgLzEjKAicFe4dMcZoMT7dvy7NiqWe8MYJNPRJ6yLBRpzB37d6X1xF9n82yosYY9NzqK5xvuCuw",
  "key5": "3js9jbDWkiQhrisxKYtGnJzHcsosB6rSopDxBegYHTiPQ4HYGrkq9pk8JRmDKyYC4gGf84BAUyJxCUdhyTBGJdCb",
  "key6": "5AKh92ArK4RqgYcWNPX4ajnL3Gh42as6Z9FxUiEGgskR7WK2VmHMJCABEWZC6SahRoJ2arVeYTqMuRrJEK1xE5Wf",
  "key7": "4uaAar4xycT9qsYMuzH2MeU2rC7NoaB8hzPzroEfEimfnzxLcv2hXvkLjHoWhJxxcqD8juKooagmfZJC4HeoHJLa",
  "key8": "48fR891EY8jRXGtUh5uMv1rZMcFoFjNj6A2x3e2sVk6F8wQA6kc4vmSRuJSigJMrB1SPKyxpQHriQTb4DFFoLX27",
  "key9": "2q9MLtXXXkioQGwhvRMVDKSFytLtdokMrpWXrTyMTj5LeTjZnNYRqWCFTFVnpZSaYj9KugSDaSRPG1vG3eywUdwB",
  "key10": "2EEqyfgeM8XZe48piXPC2k9r1tpoE3GLxsLwbGz1TmvysLsdae3H7fkWzpgmF6KVhXnMLtWv5fmcRdSMgxRJAMAd",
  "key11": "5ByPniWNTV6fVVncQpPP3uxaoMQdZwgoGUR3rG2dEmCmvkxdM7Rao5QX3fDYe32oJKnxyDEHiboWNd8QL4rUiTa8",
  "key12": "67BTWUJNoZ63sBnoc24EuRSoPqsAh9WijcRcRTXvDRMrMd3Fs78P16h83iskbXyMh7chiuZ31RxF2z34WZ9tzEKP",
  "key13": "3heqjW2u7hDCnioYKkVwAfYPVCP77oFv4WCpXUUY5icheoMxfGA5xZLKE54hv8yragsN9jxrikE2uNGVj1DJgFzW",
  "key14": "2fmjBidy4QkVw48A52JrhuYjhz81rzF8LzUF92nYPRo6wq7yVEyiccYZ3MWDnbGZxZWEFpvAWkyj45aHCbkiRHUB",
  "key15": "48eYpswCsUQ7kfpANttB7gRdTXHXMK2nG7qjMYhGnq2VnruNqYfz5PNxGC532UbR9zAsCwSacpCVQAJCmR5wGQMw",
  "key16": "5qc7qQ1tmiXKD3wcxd2XBYDhpfBEiu8vbUVX2JWojBjuZzMcpscUhnz28Wy7hmEo4jyLJSRBExJzFYQutkaSTNtv",
  "key17": "5KuHG1FpkBVFdavDpVKmu4fdqZGiwQpDcFEXXimjuc5wQoDiykzBHHk6QVhUprcEXseP1wkVNER4CRLoi91Z7dQB",
  "key18": "CvFM9VCeJbXuDYj2VRA9HzsKxE75wJvD2HVoUTXw2m3MWbDXMyce1QfuxA6jrZxY7PWCqGdw7dwE1eQ1dF751hk",
  "key19": "3hMiQcTG3jMSWUrBEhU75AHA39YVEqPhxtKq8nMboS51JUTTrijq5Qn7amHyUpwQNjBCzSZEg5ymDaTimxG9BQiV",
  "key20": "3RxW6Y597GW1zgvGH31BLGUX8mPb6Myrhfd6Xji2AvPjF31xs6bQv8hF3yPCNtNwiPnooctdV3of2z2EAAT55m3P",
  "key21": "4QsAshPRBaTCnkPURB6YUtLMNz25BDw577HFAVGhVNm7X6YKEicN3z19A8PbXdChaFYdG48NKSWd1vpdjCa7EBu5",
  "key22": "3yxN1WJ2giHwnX45dKzyg4roVLZkeZYRcpm8S9fdKHjBVWDpFNXvDtW312hSaE9ojaVEusXYpmAFU1R1Fh3zbaXs",
  "key23": "5Z9a7tKDDYDMLpnypp9mZTCA6Nk49GJde7DdsjrCjpqYYackRpN7jvZCPptPAAmmRzgjPz9Dnb1sV4aseHXrFhBs",
  "key24": "2F8E3dwLPXRqTvse6oX2oaNFkdq3zkRw6NGEuga6Xc7SKJi294UACjwo3S5sntfNjaXgzsKF54VtdU9BKXBT8uAf",
  "key25": "3ebx2GmQSwzH1Ezj89BNBecXiGLfLYV9hW15V8Gs83UgE3grKJfFfNBzU1abo5KNm6rFXpKZ6KDNW7Ni78bC9VJK",
  "key26": "RW3DPcCAr7WnUYpnnHQjdqP7o1zvK1XRsaxUk2A7kJTAKjf2kLj1NS4ymLfBPdHPEUBfShRNC8bFWZBovhgRdzJ",
  "key27": "37KEVzBo9a5YFh5N7D6vd6XmHHHbUNMnJthPVjQs95sD4ydZGEALoHmyLuWVSDoGr92zNXHXf2taQ7c9tRDnb6BJ",
  "key28": "3kmYyjEvZLC1ThzBfCCddRmzGMajGS2szxBSRAJK1Mr3C4kKxbU8kF4iG6Mitw7ghqiAhKzPtvCBsseWhscjwCJj",
  "key29": "2HgFq7VeQnJKNtyEnTST5eSNA8UEhYg2GYUBWoaSfeRQcSsMKk3qJ8zzJJboSfykoN4Ue58oLzqu42uZxKuoqWAq",
  "key30": "3hq8Fxq3R9M2bQvWSSoABJekeuSQNjNFL635SC9TedNxEKyCAdxprNYsVF311nHkLCtgdzYc7t3kHbnXTFPri6K3",
  "key31": "65jKA47Pwv3gqJ94FBVwt5usMvKa2xbHgk8H5qRqX7aj625ENyBdnHKvRRXJTwY9pjyZoo4JqoY6VTB2L8F23AMz",
  "key32": "25X25ZoiFCivi99ykGjGSNwB2FgQvBpXUu6vbqUVcvL8gZugXbHW1UKZQizD2fJThe9v7WaZ1G63mjbo451KiZGc",
  "key33": "gd6B2aBMVNjwLv9Fd1WNgAWgfXpHTXxNoUi9NDEQsxGBFy1okQdL48hzwPutfg6vGSh7TF7NAsdR5T6eEGA5j2C",
  "key34": "47FHxjWHFhhztXPHN5xXYz2wPpFXiV7prhc7bpb57S25KWzK66sAVfnnU8S5Josjte6E62bvKKeA8obfubwfuWCV",
  "key35": "3SHyZMNZ5WbMhnsQ4CJLDtU1S24TrCVy6dyM4Frrz4hokPpjmvNNTYB2HGCMGfx6p4QYHhbUnARVBciEaEfSHsSt",
  "key36": "3cjyN2EPMA3d4tdkjCmkdTg2UwrTYw2mc62FMtm95JR3VFAjtkDVrQ2Rz7YGqLapMuFFY9PMWMZMCFiigRRv8Md2"
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
