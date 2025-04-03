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
    "7ymweom7XEm9BNZTERtsn2gkV8dDzudk5iWKSaDakCD1an5m4NySGPP79yDfwA3u5i7yBmWQNvrwuutwqirU71p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PzaUgeGWN2Re4vwYPJVxHt1rmSakUmC8d4ok23Pn1Q8dp2Y4UDwfBSBADJqfqEFHse4D4xkXrRKL81jzT12mDnM",
  "key1": "63cnrneMNepMENYyAwF4WcE1vhA5Y7jKbSikZNAaVhRN3dbec134YbQG2Evn1JZuqcj2dRDFE7ugPPsYWXVeRGuy",
  "key2": "1Yx1Gvh54v7qUMEmN9ZvCknq5zvJrSky5MwPuyJdVMFPRX6MG8p3k5MLSAcRqqtimuMcamyYLwwqUkzHWo17UU3",
  "key3": "BSL9Hs48ZmyFg1RWU8mvwmvHevEv1pXAVHCWpuawuYuzgH2f8cEvCpMzvbe6pSRL8yza6WRFYT2z5Hdh6CLrP8g",
  "key4": "59d69R6UNzhuakiWbGdbLoShTyisfJekfgU9Ac8P7NVkE3w9giWU7mFaC2Yad2GLqGmgmi9HT4RDHWCYdSD45hS2",
  "key5": "epSdt4hgvJcYmgosES4f2Pk38dWk9VHiQULtkj9jCZH2Uuuy8L6kKRTFjH6htT1fA344oocPRZheaPptZrJTqpB",
  "key6": "3zc4UfupAor2qgBnAVA5wE1BM3Rb9Stzrs7pGabn7RNSzVcfnkee5xmELFNotT7KrRvsPc3738Rhyd4FrFYxTr9K",
  "key7": "2KnfPFV1ziBX4xHCS29MkeykuJeGtQgsx35KZXT1NKmCXHCdBYKoACRkmCcUmrecuMDuT17gHcwm1rfZpdKnyycX",
  "key8": "4ixDctXuEQQ8SkGiRjzf5gG7cLXuw61xYtZVf9hEk5vAnsMpgMJwVKwWUJtyQF9M3MLj4Ks4Ckohbw9D7w2s2EC7",
  "key9": "292VR7GMNmTRSPyLdk2ioaZgBwj2Pj3CFmPLmNYkDKVWcLVDJjBGwczCXXK1NxC2XvnGZMrdSH9A9AMktc2enpxZ",
  "key10": "3KAv5hhc3KyZkhGTjdwrUPKd82jDj6Wm8FQvgkVnXx8vDtY6Am4Htxn8WsDzwa7ZnBd2D4kNdW5xXE38vzcE9Jnd",
  "key11": "3rJRFUWcDcRR7KezpuzNBmaG9YzEhSWTNxXer8746dbt8TCZWUPh3izxVX46oDkAgaRZHi1c4qBLQTq6saixC5E9",
  "key12": "HiEVqiX3qmUTHPHzz3kU7835my3TJr1C5TyVaRkghow2i87SyCX2ETN2BPT3sFRFsyYafZE95r8qcNM7fHzmsXL",
  "key13": "53sazQ5AVgbsrvor4q2DS7c5iJjUyNg66qgYKndhWADhRQMgS1s2cHSX4V1e6S9Hgi9o26RUBLoA5EYHvm5WKrAF",
  "key14": "2qrhRQLJK3k3ASb8JfUUdUmTXn7b4i5x5q5G7vkrQ3VV4UvXKw328TVGgNahX8zAL8saQ7r7p1JFoo8mhKbGHT2g",
  "key15": "5kSgYPKLfyCXaKoU69q9AEbVs6JJRraBNZ6CWMXHGqH1R2VRkMy1Vw8oLE3tEEdpkDb1R3vrSkG7coYqMku6r2Xv",
  "key16": "59CuGBCKpToyWeBkY2FmNTYiEsop4GGnpSkTmuxsqTuBuWo4D11sswcD19KFeNQK4HoNz1h6RhUn644cqJqwhX8k",
  "key17": "4QtUte97tyjneaQauYWnSRT3jpAgpJpkPJGAcqNPen9KFbZKH8817897wXqz1KsjPomRexR64Wmwcpba7sSmeaXQ",
  "key18": "4KNcgZh2HtVVGTiudWZ75cwSWLgyMtdz2KHzh3wFgLgEfrvLE5SJfaZffhtN3GcBa3DHTmSKXug5c2fsGyrtU1F1",
  "key19": "bUzVeTa4zV5RPEMYEgoByM4oUS5DCAfTEFRdAoaytML6vqWojKpXUmCPYkFtpyFV4aYP6Rg3Lyrm1v2AJTvbToA",
  "key20": "5RNc3esPkfUTvznmfnYXjZrA72h7pGVBSaWJjMVf6Ax9fbBiHPySs8313E9ppiUvEVi2tpPfpmSARE9QhhfLgs4n",
  "key21": "3EL2LJxYGA6ENMsrCeCKe3dZASMBCmiPL8kELtNethBxiGzCwGT8tVu1JiKKY6eoCabAwXCqT6f3KXXDR2VmbxoX",
  "key22": "vRZHhHE7MX5T5FZMV6arhTUFtEpV9iyiHtVDuTcvFDiFun2Zoj7Ae8BSDVCFe767gAJVinTJM9vzksW1t1ipNBG",
  "key23": "4bCkhZcoCB6mHyNXdA7CJkULdGHL6rdre3PHfjLfmPXmEBGTgAzSAnU3iwMBPFZFjHgr5jQqtvCjWqoBZn72vFaL",
  "key24": "rNubBu566qT7SxibgYVp1TFTMLDy5b275RV6coMeHwEi5Dn3e284XFoxdHaEsQLmc68YocXMuJwjd4jGiVLYqpV",
  "key25": "GD8fBUM2ECv6s3ZDtH6RhaqdgGgfbF2RbmWAd4QhL5Us1yA1sJbm8snTwYtvZPhmnnyALcrqxb8HcGUqXgGugHx",
  "key26": "4xhrnbVrFDkDthNtQnzzVKkfFtchveJqiK4MN1GCFm2bEt7c5GspR6xEYFyLoG8cPQaj7iQ2q4b3nKDR5BRAGagJ",
  "key27": "5imoEmqz5ssPterd2mwd511rkr3gWp2m4bJuZZsJBqP48NGDrLJB2Lzb1AbtxeBhwpzDhzjehfSDv8PdT6XWeYqY",
  "key28": "3tA6Lt7cJocA9jcvvZLfKkUiBPFhLD7Knpjdi7bmYsVVeWtFafo6PwgekzqtCQbrsMnSuBHUFoN6s1A9X5wcZsCL",
  "key29": "2G61Tv5ESZgrzLyjBGw8Q6ToeMEEk4T2U7bsebQKUQgZCCZBNwVQCQXzRPuTyShx28FXTGjmbxwmeE1dY4EArooz",
  "key30": "3hJyNp4yemraeGEDbuBSPUK5nr8DNmbDwB9o1qBgWBqYhkVYYBd3jZ2jBrWfzquYPHGdhTxNiTUWafM4rsyUuwDR",
  "key31": "2TfLxnQK9Edi6MPQqwi3wFJKrJyR2xKGcP76MWiPg8dz2bR9wTjGvhT5kCsasn1BjF1acdQi44ye3NrjVwKLKMZF",
  "key32": "4ydc9o4Gzi8oQwWMQh4dHL97hgjUEtdMjPy7xZLrVd7ersABitk5QL8u2ioYyPmi1wdDvap5Dm73E439UH687M93",
  "key33": "4NijNMcjWHPGi11qojVVN6jhH3BQZ9tdzdkQYbhJM9ggZohJYGvgENZY2eWkyJaqWhkxuE8UiEhs2uR6tG8xVuxS",
  "key34": "5XLe9j7o3jRfCJqWUWUZNFT5Mx3A4g64vWxFHuy5JbvdGnALpBq4rV9sVAmXt2tyzvNmfBhrUsiQCCEEQ74JDyuT"
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
