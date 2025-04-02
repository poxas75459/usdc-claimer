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
    "3yaiXXh8TYPYT3azSxaRJg2jwuHZeLMtXikrymzPZgXasHXroNGMYoz1C7ufd5zsE8ndfSj2wbwJen2XAguRAGNZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f4ZaoKkhx1TzCoNzifvW9PQZyC268boQWerAT8pBufrsjeNX1SzYkDyoZZSHEw3VxiPR1542Rrfo637f51ewc3G",
  "key1": "2FpYAo5K2VtqVrZPm3gHWqny3dZZ7tQXBFfaswWD3DyHfebdaQZgxkYYXxeD1HyUEBc9QhMWhhCse4qU1r45yigj",
  "key2": "55Vjzt8jVfjxL2htZcT9b9ZRPapqRYiN77kjkuKaGkFVaUkwL26NM323RUSxjc6yBu6Z6sGBZecCrxKX5JP32Xaw",
  "key3": "4onx7qBGRipxtjQADpNXNB2bzNhKZ8C2ySxqbDvAQHja6fjH9NhEx4RgH6hT34ZPw7fXBMgzAFmYZKCip7hAzKUf",
  "key4": "43Mkd8ThmRUL5CyK9BbCZz4wRUKXt7kXA8V78iPfGwxXdVJSrZC4scbeJkjy1sjBHRXjvt13hu7Rg9fqQETiMhwX",
  "key5": "3C5ZYAwShg1CBuqkRUor4QL2U51xmyXtHNeane5f2oKvCXbR5dHhmXxjqiYiGjmbzDJujsi6ivAU5GWk5prHCNJK",
  "key6": "3f1DKjrGL4mZ7HVYQmMnHBsq9qd28hEchTfS7MsaqwdZnwo7Zvbn4GuN3cGUrNCVfcxbTs4cHHDzRmDYy57uwzQ6",
  "key7": "5WCbPwj8eRwTdvZbBDKeXFdn2UM8j5YkKp3TWrYaCsSVfznpK7d13K3TuYzGnMNTE4uHuWSusJEzWi8XQYrgwuzX",
  "key8": "3KNXVEx2YE8BzpE47jaJmk96F6jziVEwTc93U8irNjxxJVM8ywTBvevG2ruyVRRvgN5ZKj3ycgmBcNbhbdMMV4LH",
  "key9": "4chBkcGeF1o4Ejeib1pPiRNCtrvg7jY1p9Ti8tXnm3e6DM6NyXB2QTwtCY8ioPjmNqm7mELLmsHT4bqrTffZ35hg",
  "key10": "4Ho12cc4z3Q3jyxTd4fET4emYKuMyqkkKLt5hhS6RvawNBWt4iwQUMWDJFEZgBsHcLfQTa8wk6HLuVVNhydBNctT",
  "key11": "5wgpbTyj4BPasywRbQewsYZKJFmVLLAiW9VXDYEFjGbjxTymWaLmkpv9u6ZEGM6m1aVAGjiRZ4xgb7aWMVMdyVZi",
  "key12": "3JtMGzYY9kSeLoWCj8Uo1SQPbm5cpH8QMoRe2L91cx8JiV3FLDVtWKaG8vhr3pJu6TJSSLsq7tkCZ1fJoZUyF4SR",
  "key13": "4wumVPdf5TuJ488ZzPfoRydsNDJdNN4QHq8EzFRRU4yEGFNb6rcNDjjr3LyFz8VAEdastwPmDLohH6A8nAHNVWmg",
  "key14": "58JrKpnRsCVJp2sp1dTj7JWavVAZbuRySFy37Mgqa4V24j6Pt4SwHgQRLGbPhMgtejBnw83RsYX8p86ktouHyBb3",
  "key15": "2Eztc1osTB3GQna6JEFrb1EpdcSCnfQhzy7SvsmeneDL2wTcag6A4xfCsuKUSpSNWNX9XUHRQapCrG4mVXL8GaJ9",
  "key16": "4Bj5SZMC33uAoeshVnhKoCvxxUdKrCNDN7D4KRR6DP35sFKzLx855rP8BYYUfiGZsBqFyy7Qa4P8GMGxrsDfAoP7",
  "key17": "3dEgXy96f55aGsXoQDfyoNKBDzmKKfFMcCo82LNwk121GWp33zHYiXdwJgGaLisKoHHxTZXMuMsgJtW8FrZvJfD1",
  "key18": "4DuTpTujuXxXD6NXCj8uqGsfyWvYbUg9RCdm9D9kq8FN3bbCH2fsf5FdmXMVGamsfsqzP44AY7eut17ixpgD8CFK",
  "key19": "4gNnK9enEwm1rLx7eyPbPRfPrQErsoDghJjF7CGjby5qXZA5oKYiLnJ9MfiL6nr8WBZT1ir8Rkyjsnqz58QUhCyB",
  "key20": "3Uwk5jZ9gKodvR6a1r3RfTBvMzihyQo9jrnMCYAVi3wCLR12JjmMvbZxpGMauVwjyEaSZy4Go4yKaugByQieX4DX",
  "key21": "33T1uief8xkuuJoLvsYvwJtuXs3bgLDsvkGZdbuaN6PRTZMnuHqtHw4jgLj42Cb3oTpfiHCzspYapMj2JFyT3WPA",
  "key22": "7a33asNbKmdoMZotnEZTaF1CageaKMLe3ehABSC1JfMZWosDnjVAsmYjuYVCpzUFuz9SCeuGvmg7ugfFXQE1oQX",
  "key23": "299YoYi7t9BcvpDAmuMQSrMADMEDzYxJmqozWz7eZwgVTH1wxB55wHh6ELJAbL8mFx64fppF2RM3yhJRQMx8zZj4",
  "key24": "4zoUpG9XEB7qv1yiNdycEiDE8Pgo1q8fZH6sVwPQ3nGzFeowXidgmsJhokr9jvQn3Hd6sX8UMA3ziuxEguRRzAUQ",
  "key25": "3m1PSYB3to5jnT2pmjnQpEqjtLvEGPBBokREQgjsijHa24G8R3t8pUgUyYvmeH2cgfM1za4eLv6JCRy8kF45VkK1",
  "key26": "62XSy3yXhfabaCjx8yTwvNeFsY1Red325sVmAcndaGXtb2pr4puivXCwSPBKTxvqWMi5UHAbS84twkjXsnmVw5yX",
  "key27": "5jB2vjxcGMR2z5xFvxCgC5AS5Y5yHsS9f1YATdLpKLbUaZFydRLzyGdxyLURw7wDe2TMbrpvNXWEtCeztT7RZ74Q",
  "key28": "5HfF17objW4rdLAV794Se4kgRqhCapYFaYo27Wcpj1iX9QE5a35bSE9NWs2Ld4EMBsWfnbqoPQ1v2m5TkrEMZFFM",
  "key29": "3mS4aYU8U8S2LBVkBRx2x1PtmDpEsexU3dZdk6joaUz7ia5HvU8QCm6uNg3LmAjVUQDwxia1puisXQxzXCCWmqsR",
  "key30": "5pa5c8fFnkTPdLQy6uGe8e7q3QuZGK2n5b8dWUtLsvBHHbyrZVoy6Vje3BG3voZ1BhqJpuRsN1vfnydCw73K9owi",
  "key31": "KogCvWgDhVV2PUGarrzX5Q9Hi2aegrLzz9EZrX8MvGsVwV4CCjyPocxt75njqJ2X2M77hYQNc3sJtAfVMeYQAfp",
  "key32": "2nGeGNZfmpskyaLYNxwwpCkbEtq7XcQ1km2CmVR3uym11d2jgiiNuFeU7oDFgxt797Eg15NVyFaoFecSk2HfRaVi",
  "key33": "4R3FPtN3q3GaNuqpGX5rBLxxzeDLZP5AtoBYpdWQpRk9Y8o7tB4sEJgC5sWkb3QMauXBTKai52ag3vzfUAdKTGJD",
  "key34": "4m55AvT4SGMc35PeBkiSMUqRMye9GdxvHbtQbT1FNNHsB7Y3vfkrse21Tab712qspvFz6i2yxE4TfjGb9x4Mmg3v",
  "key35": "3WnGXi3XmRm4ufXkaCaEi5TJFCHXWJmQ2yyVB35Fh7wGUXJGzRjXt5HoGx8URTgeTA4xJhfiBvkBynkeWVn69cuq",
  "key36": "23WXBk5SzuSqoHLPi55isUEtjpTShfotQTZPFgdzDekDBpFfKRNJ58cApnv4Ni6XoqgNHvY3JQ2YpBGrsqZG8f9p",
  "key37": "1vg3Tp96oug8aRfPf6JGfdK6RnrTtY8xhatzpzYbaBFZ2gStu5cRUfQdEzyPxBopACwcQBdFWnxRWJqVetbuaPm",
  "key38": "5NiTFSzRD8pxxpM7usUYtXWdmx8mJr5QYK6sSfxNHF88gRaRtmE7khtkAQy2ui5sPDgrxByYzWZijcU3jTXAGoxW",
  "key39": "64hKTzPddi53zVsavXwnQQ6s92BqozCjTn9kxtxyQTSWdRWL6MX4URq659mRkXJHh9dkSVrgSEx522kbRtLLaEkG",
  "key40": "hggiVVTcBup6ztc7Rh53vxv6yJxEhnkXXh77bhadrXwfVREc9xPs4Xy8fPd76bMQ3JroFevuUhT459Skpn4RZop",
  "key41": "4qQbYdkLURRdoBsizgy886qVtwLZgVYq7s8NxmaaWbTjFt2AAyjpecj3NJ6VQemZxfEjSp4YqSPKd41bKRr9yAB9"
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
