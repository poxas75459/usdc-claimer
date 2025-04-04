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
    "4787cspwuMs1pzv7rza77R5SxvQTDjD13aCVTmb6Xfcu7MmtWAo6sGWT4dSvqwj8ePCEnLr3mtw3eUtiC9cquwro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RXgcY8ACNWc3SopycDwCnE4WHsJBvS8N53d9zAX2y5Cg5B9atPhZvu1ohMtZerHZcGTwXrj9izio5xE7H66PTPT",
  "key1": "5TZ8QDT7unpY99K6zJ9TsEuh94cMSF4cgaCoY5woarrZixBmqgBwA4Ypt5L6J1t5ize1vQ8EcXdZUYBUU7a5Y1GT",
  "key2": "3qUgZP8zLGGZZfbjcPwaaosq6RA7RTK6NWex1JrTTkfbKpZ62A3sumZ1Cc9A8peJ6q55j5zNrw6JpYMkW1Yi6X33",
  "key3": "gqrjTXuKkqGhtKsmhwoPAagUsFPspAcMpsZUAnhgkzFzxTnHwJAGmNACu9WhZr3F7QnCwH4Z7cNmbPX3oYXdi9z",
  "key4": "5LR1aQxo3kuB1AUugdNX9i1qQmNsU9dcWJhfssUtH1xA9dmhKuQjtQVGjEScwMoqTMNb5TBiqZ9zNHuxV45b9tR6",
  "key5": "5F8z9MQ8A6SfAQ322LEmnsvLFyxkrqW1ctz71DJFg9jautGmViCDaUgnEUFwZacZ3x5o3uUBHjZqwuu1M1PF9xPo",
  "key6": "Y36DFECMnmhyW2LabaAi4bxcEC4m9cKcQF51jfX4K4LJhqPCP5chJMenijdoDah2PCAPsX6rK7AgV9iybbuWmuF",
  "key7": "5SqWshQrDsrhKPYXqHgJX45YYV2vH3ZSxkL9NxvrERz4jVfQKMUk4t74oEcb9LTAGjEeHiWhN51aWrjEMECubgBj",
  "key8": "4CqtfYVPNvvpGVwF8pVuuUwPP49bUYBj5oS2i6XX3odEUo9bwARnLrfdx2bBgXgfJaVDFFjEETRibmr7wbNXU4Fy",
  "key9": "cb8GSAuf5qgrnu1URa9REsMZrSGTxJxGaHdtsdyghM1dN4M4tmvEDbwBWYFu1CpRMh5nEuh5zAzz2eAfrLGmTRN",
  "key10": "HbdvZtyo937TadeWzdCU9qjKEmKVD8ovdxVoF97Zg2BL3mYt7GhmoapDHFuQoCUdV46si7cT6Wsp9GDaxeuGJ8p",
  "key11": "2G3RrNfRTFuDkjGGfeb5cA87pLM8nRHjG7CXHsdQnfQx1UJddSgSSw3NZrnuzizhxeG24iYq6seXijMAfRXScHky",
  "key12": "4HNdSqyk69HkCuXuTa1Eo9dYddqZH8cTdDReY33HitmKbv4T91s4hjzzsT3vLZfEQxkE5iUwKH8NMXMxpjSkLw2H",
  "key13": "58CTgdbdRBawtMv4tTz35c7H49kdVYBR3HX2dJfz5mpuwVMYsAm1wQ7oydXaVU5g2DZ1rfbKGbX2e3yFijwtGf9P",
  "key14": "5hoKq2n5HuAobcQ56aVZp6Ycm9mcdbZakYZMVsPB4EzDFGz3Vwg4zBQdLuobV1A14rBPrPGVU8nRexMcDAPAE5UN",
  "key15": "4YtnnkcG5hprhQxuqNqntivtG5LSLx1yJsbJGZC4mxdrM15ggD8L2t5EJUWhJpQpyron1coYoE5kgk3HAo7hsGkB",
  "key16": "5q9kKiugdyut5gfnem6hudWNJfNBnXc8zz9uBRuygY9PpNWM36eM3AG99HFqMnmSyNguWgy137KSLKXFzj1MDQ4R",
  "key17": "2ckFyPrU4CAtSydhUkQqtxNnk5XEWqLsdADnoJAm1FBB6qF7bwEZjtpqsisExa6tutKEyZbifkuHCBnn5Mckb6K9",
  "key18": "4UcXVoBiudXjJJ78QH4HfN4VkpTMP3maYSu9jtU4Ueifrd7frUeywRBdQdrUsxvLRsp8egHobFRFZwtKgZREwHsJ",
  "key19": "3jNjqqL6EBdqhZoivobKWsKzwzksooE2opMzgKiN3pp4taqVtGf4TT19QWxn8AkmgpgRabp9YmWY5VMVh1j5T4ki",
  "key20": "2NJJSxgfu4CQn4UCrxfjqvQmq7CG682XKQN9fM1QYDJ5xaAFkiPAsGXiZq8TSZLVsJo9DxL7TNP9Rv51fu7pBLA7",
  "key21": "3Yarz4boi4UCbRvcD2i8Bq2pFzCT2MMTzWmRZRYg67YS731XLB3fXNKqsqKUqLWpmn5dg225AXoKWhx3nyQ6mYhx",
  "key22": "5zqAtGf1QRdyLQPwPrFmrEMXTeVh5bqdZWKSbMc83C1tb3deYC1YkWB4biFkk2t9GjnfEXotMJYiZmYW7aYwf4Lu",
  "key23": "uF9SUCSmtuLkPZtHNceEnzFzh98SicqgXy4QKpkdmwGBxQiWsHPsV2MUPBFFZvKJuZeocYCVCkb3AjPvSamKW9f",
  "key24": "xaARxZ2sDNvRM8RBS6WjGeBUuivFK9TgXpwXLdwXUxmjuWQNNEWpRF4ZiH4uoPwGm6d9TKoJi4yRzN7WHSdQR4E",
  "key25": "4aheCNxKk1wRUp5fmn7aXaLELZeVozsG6guPzErnWgk9mzh3jq3wYAsPZieqqcxefP5Vn2tUApSYjToEhHcP738m",
  "key26": "2mxPDoAJVMSndisPZZZo6QzqgwkwyFNyyXRnwdgHytmrRWjUBQQEYXzWDoQQzwb4jbCda7WdRsxQnafGw6ZSPL1q",
  "key27": "2QXrwZ7Q6vjitUohVJfsRKQeVHDGgCw2SThssL19GPzM3deJdADPXkqZsjf6jpUinwjeGrDPrdJQmhadDZSUbTyw",
  "key28": "58mxgba81HV2CW533jyafhPoPaQQFMPBw6aaA3nT8pyF1WbBqSDjwQsEH2escy5vYvsR2T34pMEjdSiMcsYKiz48",
  "key29": "31ZUPf22FrSE6YZpjGkBobouSSm7UQJx4k2K9fYyrZSQNqE4toGq7jkiBUP9bPYvbS77kC1yxR6oy8xcV85oGcCa",
  "key30": "56fd9qRzY5SRg2JjhVzVbz9fNoSKE6cGG5zEkQibtxSzryzmyzatR2csrRMnUrc9V1QkhQtBb7uS41JsmB7uimaP",
  "key31": "51KPavnWaVSVhoiJCPngUmG7KvKqAcw4Q7Q8Ui4S7meC6QcShpwgws8ZwC5oJqcnBW95gwtp1RMC5yg8XQmUxFMV",
  "key32": "f1RfjRERK7CAzCjtV8dsBV5eqS9jsTUMm321nSev61BhkWSScfg4Le6BPza1mtx8LU5mCadhvyXQhDsxEDzSt9d",
  "key33": "3QrupDq1sX5uuRSSX3KCPexrcv4QmG84ihYDR58j6X7WTnZBTd3zzVn9WxDX3ThNEfYfxPSU3w9YsUG8irMQ2SBt",
  "key34": "3c1HDF1SprgcTpikovoZeVoLPzbVERsBy5pWxQW46T2fuv1xHME9vboLtwR7oYvtsjwtSJ23c8bWm6jvSGfF163U",
  "key35": "5RqH6jmWNVsd34FDwxvVia6DqNY7BFYPxnMTri4xtApWeyS4utgiWhtpA3S92reG4Mt9dzM2q97UVugY8YyAYud3",
  "key36": "2VbZAdttm4Hx81teryZDcuRzWnpBcTRgtetHK3NUDbNwJAAAt5LRwi5Pk7c2W81pB5zz7phMTHiBtfcBpQfuU15d"
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
