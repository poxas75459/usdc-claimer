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
    "5cjUo5CFLiN86afUpczXwfhJSvW28Xxry5rNJUx69VFtn1cL7zSRuaz8guvvchyymthfTikwqDzTAnDRpPchZhBH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "213JXfNprg9qaj3eVDomrzUujVcMuHKeBBw1A3GGtmYCn8HF1sCeoLTxAiHNy49GMvc1JHsVVSb7jZU7VdoipokD",
  "key1": "RT8dAx6mFCo2tzdqQKiBAHj5kE1qSVid9MrNyfJkSjoWb82oaEtHGt9EFkuYaMi375fVL5vhGCqbFZMLBZh5Gbb",
  "key2": "5ryQXo99dy6WBMSaKbLKiKFPLE7pJm5wi3j7stdVqo1AeZyBGdsXLSFbG62wSEcAGBAMzmGR6r15M5KutAiRAQna",
  "key3": "4FAcLm7KE5ShZbtgWVf1gnVD4yNJefMkYY6YhrUUgNHmyHng3R73RNSdBwnrCg2XJxbNFqdv9FQXpGXEmqKkZrzi",
  "key4": "4LNwqq546Q35DeCBpG6izbgBgZ4WNnQcgrwnmSESDvNBBYfh7bHzF2ysBpd33xqTTJG1Wiqu6bX1CoebBWgF5ykh",
  "key5": "64bU2XA9bWoMCoFx7Kj8f62Mxuy2r56WnMdoTYVQdAbvfxQdKugWiXmC2RtPBaRHLx6gyrBBtvewL2uQrMG1D3b3",
  "key6": "51iA1vjB8XbsKWpXGU7YxmzhARUMfHTrDyUN6vCUkiGY9CLvimRCKJEFLtXji8YTU2KHWSz5bcTNhBafM48Xn1nx",
  "key7": "64eezsoYqhJ6PrP9PM2FcCD3HdNGZaUy7mzjNEDc1aC7Q255HyLwM9kehrEUVMdLmiMvK6J9BpWcAKFmMCNHmWGC",
  "key8": "GYYZM4AWAKaMiKWD15Ju1GJnUB1DBuUk2GQnBhXZguMK3TTXyRCXfuxBLe2yQkHNrKqBsXKvR333Hu1oKfA4bBv",
  "key9": "4kZmgc3j6zp3qxADLwrfgRRk56o5xzJtyseFR95oDypgZLG7BgWxUJ8GirsKaiQ8cgw3PRoLmDPhi44HLeV9zXFN",
  "key10": "2koDRwGB55Nc1DW31NktnenzXLDe5zopLGxZoiNBXq8f6SaNJHCqwvGyotud4gvex9AP9M7QJA3cL6quq6YfCdu7",
  "key11": "sxhVws8yXfH1NCWKQoAV6fnHWZeiWmMG5bH6n7bwHWVcFLx9NacRtz7ssHLvLe7uPEGp2H1SQFit946U8EZzfQu",
  "key12": "3EjMnS2QSP3aRfit85m1c3gzmQtQuzL2g95rivz8TMusNaL4nQTfxTeqowjWFohaX6tQ2Budpp5uep9xF9Vbpwmd",
  "key13": "3csp8dZJpMNWXMyZ339TetBXJpSifdqyTU37WCPGwUPT2RDUQypywwWFXxooz19ZWcruPJYQhLrzSdwEiarVNWYP",
  "key14": "cDwiGT8sya7gT61PTTLd6qepxupbLfLTT5WrphXXecrne9YDFdG4KMM72PZQytnvPtjMmTAjrWswxivUSyqEkji",
  "key15": "65z3WVkRYoJvdL5SDCdSfgjnay4UsJNBi4NpRW9jyEPidcripmBjYLpq6SVFyi6FRts7QFsBUm4CgxfsvHiwAMKh",
  "key16": "2neggPY6KGVX4dkqFPDU7aC12iH5vQE9TNYXnCy4z1UGsVhykZfaqk5doDGZCeBKHqHCdhbLdX2tDqHQEapvBhFD",
  "key17": "4JYhfzokqv8RzJH9mdU88SPFdjPEbGDtRCngzqq5urAQX2nfViFMU7sGFNSUqeK7RicXGeqUq4ZABK9a6DCLuYis",
  "key18": "535ygcKm8hstrJ5fyjpNrxoGas7LBqZ1BHCJfjTprLLSs2Bk1cuxSdu7aGzTgnFup4iqbTSAwGzgAprF6tt2jtes",
  "key19": "4NuCxmJFP8P8AwteUNUgqnxZiwawcEAqMEpGCWMcDPvXmbNb8tYhRyhNfukh6xMRfMHMvg4R2HkgjuZeY9d7N3Wi",
  "key20": "2WBLgGZ5hHKqbgiC9iCGT32GHEtn9ENyVvdvoUgUB76Hx1ebVYN26nS333hgm8cEc7s7BFGMiStogbyCjAB5frne",
  "key21": "LRmsqXDCpmW6wcV9ZxnRbDTBuPrLGbZQpraenrVyc3U9MDmkQT7qT6hudXLhPx5nfL6AyVNk2RwFD9ztZghHRLC",
  "key22": "3jx3oa3yKw9JMUj2Qyy2k2n6qdw5SRCGvQW8D6chTZpR2DNA5V7nw9HCieh8nhAFU55G9XnyZTiTWCALhSyVhrMu",
  "key23": "5Jzi8JKrk5civpGVChCaduDPWpULnhwycZwreNAnBAj8heAPYWGB1Tuks3utuRjKJQRXcoKXVf24umcbxVPbMonv",
  "key24": "UMedXSNHvnwzP3xSoU3Ch4RY8yT6TuvEh8MHGbPX5MkhaMWjBTrQ82iAiqcR6XrVWrCQdaTBjhG4EYDcz5qwHev",
  "key25": "4NSykAcRE4GqgSPzt5abGZpWM58pnLzhiMPGHVx37FjRzYDubEcctFQA4e5vQwFrnvJPdFY6WZ3Fv4V9qAhYvhB4",
  "key26": "4pWJmVYcLkVdnqvnnkNCFeYzyaQxkRndvJT5WYcU9Q1xQjCV2gvGvdPGmb1RvCpZYdR94prJ7RTBqgWoHEqf2arN",
  "key27": "5ArFfqKVWwiPBGj8AUmSGzLSXgjdvXHDXR8FnJa8csc8vnAq35Af7R1Ky6n67Foq9Ar1YiydY3ryEGvd5zQvD3C2",
  "key28": "5GVWSrZdzmSygfYHxJirPGoiH95HzRYwypGapnxp3e4GmmGVd5YY1oAS9ufRBk45YLPC4NTpmfP3sdnCvEZqqnuH",
  "key29": "3EKG2GNGBuXML4Xo5RAK49TeiBaE3Sbh2PVnBmkbA2Peiw5GyVX1rP62YeN6kfcXhXYVjnUEEEGWMKWWkku6KC66",
  "key30": "2NfGA1h8fB6TofJJZdyUNwP8rtAQ5mMqVTqB69KFSBdNXQ6CfdWPkrtp6qbBVD4eRBF5sMqfFqLxjgKtcSkwSatx",
  "key31": "3s9bhHiKKnwWeduFx1bcMDQ2PfCErFAJTnuQsoANtY5Q5JDxbhJQWW8837f2iXLE6mtw7XsyVykBgxCase5gNysN",
  "key32": "Xj7QGCXp57id5LGAjo5xFecabXzvpgmBdt7G62bpT4HARomJD3hDtPwRwQNfrFmbGJFXyB6ts23QUsEQsANitpM",
  "key33": "64yer7EAzfgGrttN2zTrcKGEPjDmoKF7M9AbhuaE3HtgmerJy3huAK4dYsLS26mmCZCbUx89Qbc9WxT8SKQxqfJP",
  "key34": "5zgUUEksjGAtM84u4exHyNp1iX2v9wqrath455BEXyZTC9kEceDJweFgBMyCjKqM5LKNWwYiK6bcQfDiTkdT62tv",
  "key35": "3sFS76KDQqddTh1rLufA1AByRfT9dxiQmVtBc7BDHoDVuhw1oCn6VMjmEso1pgTooCcSUJ2yxq89SiCohJpAEkik",
  "key36": "52yEpQkrKSnUFbKpgjmsbmv4GjX4s4iu23BQjvU7oNKbkwnznxTf8cq8CjYp2jBLo3BxHB9CL5FnrPp8Gs2TQJNL",
  "key37": "34dowsauiXGySDYf9j8HXF1LUjh292ocsMeDbYfWhxt6QvVW81bt4J9iMR4wP5L74StK3GT1ppMkN7LjX9NzqtWt",
  "key38": "5zZozvjNrysyvFNGGbiLZUPq9R49jog9RNQUwNLdw85UUSbW4NDcdwZXtWXB9Tb1dT8Y2W6RMKYEGq16ZZv8SgK2",
  "key39": "5Ax9XKd6KifPuKvmjd9CVd2rajWJqWSnVskQYVrk4adtXx49STYEQiNbwBhGSK7zdtMqBKRVxGUu9EXezFvCANQw",
  "key40": "3K3VD2WCSLhDqycKRGUF3P2XSYcYDy3d8oGE9zfEXsQrZKuWGr1rrxxwRjbgTHYnwiiGpwwp18T8ew9RDe1qWeJw"
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
