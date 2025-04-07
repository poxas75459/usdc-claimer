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
    "5mzBFXmTLYqkPfFXbyGqg7yai3Ljoe3HmBTAbUZKJQ5nSkT4iPYvCViG5GTmv7jgjXzpZFpwsDLt7EP6z3xoss3Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EwqgKaYeNPwrzYWaSQQPP2eC3fRzGkLFHdAN96po4HGB9DNsz5YVtdVi9eiyigvwvy83gbm2nKYLbj5Jmu9mNqj",
  "key1": "2Tnj2zgrP4YdKN7sADrX49GC7RddY5tNpfiqr1mH6byu6UEE4rdvzyfscVR67YG2rj95WjcBcaM6TWmtbxBWTGib",
  "key2": "2mta6Vu4dnzku5TYCR6kBo7N8BJ38oS9Q3UN78TnojdfVTxTtjnBoYxzN1JwyPRrX6ADysEE9EXaC9CdPULLK3fy",
  "key3": "5vARAF8trVQnNDDn4PRBGHp4SiWPSkjSkQtBEbB2tMHd3zfrPBVATX4betyVcLBLzkcfLdL4MFQiN7WmZdgFpiXW",
  "key4": "5iDvtqhs48Na4Xaqhozw7GuLw7Q98HbWJMmjrWEskSpATjGgBseWg7hhAV6XFQvYLSgyCaDgWzBy4SkeYhjfDZ4J",
  "key5": "2VpoqEcVQ5JEPiYQs4y4uk6Vy4Q4KrSZUzM69huabqBB9VxitWb2fdD5FyFfsaj746QzFMqohmJsAtWv56CtWQ1g",
  "key6": "55rF92hLXfZy3SdPuxRsPo68jT5fA6PZ5HN1fLkDTABNv5MKan4Eqc74hPhHnSPkueQXXBtwpXZgtGMqFK1nghFu",
  "key7": "22Gpq6LXv6QcRDJe9HKCeVb3Cpvbo8zX9yLUFT58vxufF3xvT2Znp5yDnzDMvWMqpdPr9Dj9e3uHeK9fGCYVNPu9",
  "key8": "AsQix8HSTfwVpfwfvasAiLujZHNtZ23KHVmrZf7J6xa5Q34GfMzzK4Ft6eDiwFy6FaAcobQkMigozq829pkscY2",
  "key9": "4RHMjy4Qs85p7K4LNc55gkmKBXQFao2vhWvHKDVKgmhuxA6yNrY8gBFy1y7DzY2HwpK7LgHCPnG26MZE1Qy9HDM7",
  "key10": "ydHbEvs53RtAEpwfrES3SJXgC85ZoX3zMciqgNL75LtzgKcxctsrpQLoBJKGsFHqaH7Zi3vp1is6EMyEXduvjUA",
  "key11": "36jWHy33pxa5uadwKFMbe9VNtWTKJhFjRrrxnEmYriqhJnX9g96rFfPtmQRK7jCXYXs7iyij2vMcq9ASWArafoMD",
  "key12": "42VSzUeRf5BEfAZ2h2v2KEPFwyGuPRAqbQGaYXqsgWxoYMfXwhBMi4UrZHfrSgt2Q7JGL8u2YMocdRu5zGYAhvpn",
  "key13": "2q2j98ad7U97C9KbnucNT9zDDLXXjW4r9zEA18Qu34h71nHEHnAaxXxpTLZgnxTyzgmGTycD28vd2ZEdzsPH3g5",
  "key14": "2L3jqcwWDA9q7CYRobvqfSYAXWrTCJuMVdr5wDd5Phx1dFKSJfTfXHxHn8QL4YHkuTfx7ZmWdTAwcb1CFfEcLccU",
  "key15": "2ZLRvo9ZNvJmwZYSGUNcC1PhVm7ZkxeitSDhZm1DvL89PjZyftKJsAtdzxq5Gmhmptf9GSK3ZQS4FSvQwWkkzWuS",
  "key16": "5YsLrKcxndkZN6id4WKaXobEyzF8wUkwjF1L8eRThjbgiVAdEgnqcNkxztq7HXbMQLhA7L94XQUvgvy2uNNpdyw2",
  "key17": "3Y6BpfuZ6Gv7xHdCRbg3rCz2E17Gkf7Bk69sp11yEEuWmxukjZrTMvZRsttQf2fAHsYNJjH7tQu5TyNsDNYWDuxh",
  "key18": "4opMK3YeDBokoPMXZ4t1V9XDMscnuYLWsUtt2KXcTdopjhGMYUX5Yb6AB92GmVm7rBCjjd6LjjrMKut2wZW9ex1u",
  "key19": "2PZvVzZ3QaTtaAxRztLVR4zrD92ikGQbRYNCUDzfd2huRTkpw9VJCCdGXRpB3svKxYy2F1iuyNgtQfJYYcnyoa5K",
  "key20": "34CfrKy4ReKSwDEk2a5CGBqMCiwGYH4LhU47kn9Bz6nuwpce3VNJYz3nB1zPXbWtn1fykaRemLDoWqMFJQk48sNr",
  "key21": "4KtTKAH8AntxHga14FgELDnmCrBnWjTanxGJUr7qFkf3SyDfqPA6cPcJTyGMF9qYE1iGrdNzpwPRsJ1haviHjs2p",
  "key22": "4t2xywnVXvLYWuJdFknBGu54mwETZ5u4jzcfDwtX4XgbU7ngG2bKXPMrqjw6Yq9riVibJGAp7scxUnZp7cKiJT5k",
  "key23": "rszzYLvznUoPtFxJqZFrujZ3DBgQWyn5kGazbeW6vWdyGJjH27fbQEdiBTxkEeiHA7H1V7sJDxUoetyViMgjPSs",
  "key24": "2KawYJ1z5Qcc4ojhjL5trupfxkd74o94CFHTgixYxo3NisPTpHuNqyW7k4eELqwenQ5vcMm5omESJ9NQs4eoRnW",
  "key25": "5SDz4Z52zf2hiNnVW9jfCJ3fenJLQ7LyeW34w5scrpPagtyzmvk1hpXivpdnUNcameCs45NsBFhvYkgwE8GmLCYM",
  "key26": "4nZ4wmSgt16ZppstXmBSFiF1Qr1LHw9poJRkEtVjsG9tAeCphTpRBZFuAFFbXPHoTx6S3mMWFzZRiNwCe7reKDhC",
  "key27": "45VqWKkXmfMKg2S78EfYKtVJYc2Kgdd9UXhbUvFPf1QxXijLDkTiLq3XqYPbaVoXzyMMSTvPiUjpdUgn1wRqsutN",
  "key28": "42Zn6hzrYVaWLGjoSHSYvtGk6gd5ve7m2JCe7pFiWHB3HeXvHECNHiWjGLTASUqFofFJDAYCEJVMaFWKKvwZPDCJ",
  "key29": "3aQpDB8ECChj65HjNa3ueCby1zxAT8sShKFTTaQsxUX1ufnn3L7dtNosfczW265QNYmUoj6PDcP1BwWGgVD5R5nr",
  "key30": "5Y4L55yX8nhByLzU9Cau2TVSgfNXoT3NsjuBvHYvPXJc17DFRhu2ukGsutnMtAT4geGFp43RxFNE5NaB5Ja8NCWB",
  "key31": "2UGPMPhcLiJpTiAUAzhZc9WMzLj32DrKqRfLZSj14UF5yrTJwSQ9soaaCQw6KyE84vrqqvkWnFL61tFPFeVsfZdi",
  "key32": "48jWY1sY59pHD7mobFUDUon71BDAtxUapc2dLUBVnyas1iaMJDEhd6qfwX1pgiqdJSB3Yb6MRXGekK21SG2rPthC",
  "key33": "9hw683G1ibpfAiSZ5211LrCJC5agdkqchExHmznSQKasC4ft5CmVNTM9YPWiVVeZPvWgZyDyecpwC5XzG3juK3M",
  "key34": "486rrTHANjmukuM7FqXixDrjvwXwb9rd8b2eW7i4rccVoAmRtMDLjXPBq4hFZ1dQ4HNSoTPEXCL6YwqzXR6H97Ww",
  "key35": "3aRiViehRtoG5HghAtidLhVB3BginrkPj81iZ6FDfumHJYB7N7XfRdtjmdXk2S2Zr1S49wziCArb4yRTfg4WwwuZ",
  "key36": "591XGgtns7qN6P2dPNeju86PsuwTK4dJvPGuC3EdPB24KsYsDyKBtKPzGdzxNs5rUGqR88w2g3bRHkN59o3ztAw9",
  "key37": "vNyzVczFVSmuwGkeQLe9nnEDSzzzi6QWAXsqJRCyfpfTCkFYWYwZKoNZh17bZGoUhwekJFnX97MJi7iQDVwbh5r",
  "key38": "3aGsjhTuApMRHxUcDk7uac3hU8XMXJTBQHaUMMo14FCwLixmnx3ta8rVLATehbRpctcuyTY81zro6qLuahaByQRo",
  "key39": "sJfcsMVkKmbpicawSE9ntuY4SA47VH15SojbEv1KKgJHYXuqWF9YM5WpcbnmXMUKLUwYUL4r9LmYcpTAjurYKkQ",
  "key40": "44YoT5czoromyk1CEKmcamW6S8qTTSxy4mipq8sRSAQxM6FEceweGH4ajwMkRCED6ZfiLrjLNaJEdgc5nR3u8vCM",
  "key41": "2g7yax6StF8AN4kxQsRyTcYKYHQWo2YR5vctocMvT1BGq4C3cvhNRSMTrvpUghsihmW5R2EDXGZj1WN2tBb8tzQD",
  "key42": "5gfAThRvBGriMBWHMjGnejVsoEUmdia3g2KnqtwcPs9QNRLVh9bW7TjueBs6D8qEjzZE45yAc53YboVpSVghmeSk",
  "key43": "4bcdnqDY3EX682cqU4hrSN9F2qMw4Mea8mU2FQmFLWTj1vFnmgtSb5b4RPQc4fsnZMahQE2MQ8Mx6CFWMSmcuKEQ",
  "key44": "2Hq7hqZiy3RDVJBC5gHgNdzukuyib3yuHYxWC4cZvophumALb1A7HYDubSrMkhimULqVwe9uMeLANS8gFQw7sAAX",
  "key45": "xEg6iXgAHb4BdqjnQdwevHnKVFmEE1EfgykLtGVbYdbcPyTBghMNBatAp6aJgwctVJ1wc7ULZawdowqNjgbviwJ",
  "key46": "3HaLXCWTBxrqPBaeFTaPTuJkPgPYJAPKHNdmFxdNbLRCcuUTPpesnBP6rRfQpTRaDUm5QYMWCKjcjfMuSwiMWZxf",
  "key47": "4J4d96ctmHgKQ5Mny3XxbmeNZgJrAwgP4CyNGcdexxbJUAUJEgArLrTXBuH5GWeFbXtuZTy7nA2dLVzuhBcKJJnb"
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
