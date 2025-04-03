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
    "3eD9yCKMdLcCFX3vfCztwaHDocCse3uVcWNXBTQhHSJGHmgjiDhP3ghUBs3snoPgyuPmSQfamuvBvzvjmu9h1Udt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WGTdf6xv87ymV3bjVkFiidKk3i6FmfeYPXnZ4Ni9LZBi87okj2xjAnxM4aJwEYzWk9XWX7oiA77Ez3JtSeFtoqh",
  "key1": "dnW7UUX2ATLk3LPa6P46Byxoa16fVFosngMwuNoU3zJAeaBCnkzrriLNi454NpkSf2THQWqqzVZDSS3H3YGxFG3",
  "key2": "2G5zJxEtioJBiSM3fv51JHQvEWWaJV79UVGQSKC4upCbbMpgXvC1yHrFpjsVrxk8eAXCnpYV8UprfdJC3EQHY15Q",
  "key3": "2DUa8sguRUKRm5r2tSKrxfx5wT3xDEHMNfLkmukv2X3H96AM6WEqCtxsb3gDqqUeFxVgu2jGhA7z73r2AFBZSENP",
  "key4": "2Q2g16U4SJZBoLVxf2Nq3jZBLULUnMdFzqJgg4d82yJH5WC6Q1G5UfyY479Hukr2qziDCCWN4SiHjdjNDiDFePUm",
  "key5": "2j3pcGsLhWhrNj4zUkbWdJowFnXo6srJnsdTL7rQogwcj7UAxe6UQq4VbymZen4S3BQDoyn5PVPCzckzwq4vRuQj",
  "key6": "3hvC9PaHqSu4jg3jp4RCwLeRqCd1CtRkYRNxNXz1VGeFwiJEsMPLccBe312rG3GABGZ2xdsmxPaY6AC4VV3iqudJ",
  "key7": "5TAzJk81fp2f4iKAQVwTZccKho4obiCe42TgjM3yVJR4tmq4QTPsY3gPYhnE8MBN6nKfcVxEN8td6uQv2Rr8YkJ8",
  "key8": "5gS9GMR6KaUZtGyyAWtwxt4imC3W6FhCE6HrTDL4SVs6hjTAJGmMu9EeruT8deSL1c41uBnkrSZS3a4gMDrRTb9r",
  "key9": "5JpYoPJgxr1WTtzYW26G3xey964XH2Z4xcAteiRd85JN5Np6rAjZ93iirtns6dERU4XSdguLcX5wxb4CD5z8KTAT",
  "key10": "MVFn1UMXF7yJXBdEovnXu1CNdQ3aA6k5JwBnh53oaWQvMfbeCTf6AALgrSEyc4SZwWBigEbDzoNH3oiWwkXYrLX",
  "key11": "3zP7RiSdPdM4kDdtycMGBGiUDPQT5TJiGZRoefcjb444rrXe4JiwYJRurgHWXx6ZiHi2HfC57QGfJ5gDA9Kkz66a",
  "key12": "CGiKvGS6HuBPH4vaRKaJYHyRvVGSYv2WaihmfvNZKWhm2EaoHM8LCtLKAQoE1Nib3zCFTNdH7kdmMcaTK3KHWQu",
  "key13": "T9m6b2hd2mZq8zFximBjyMBv4aT189zPqsp16rQQ3yyHDt5kbTbGfytDX1u3MNk5oYfCr3thRupUWSUGsT5vMWS",
  "key14": "21L41vFGvYZF3cLamGjbaUpX3krUBioiJ1PgqosPNNt2t1HcdcgjSiatU7grMjjmfpMnJbNQX9TVJJD3wGD5Y848",
  "key15": "2JxFKsGp1GeNoj4T2GonmAztFUtPDsWjp4u3tFRkBp9UjHCd2pM6SMFhh4BWVn311RjHUuYxHWWLSTQ5Jmrtey7u",
  "key16": "4H887x3B67u717EXHprM1MKZ7u5zYtCmo26u6EDtTgPfMWfwPhTueE96BAnnwX8Dtv2hcavjK8BH6n1yDt1x8vCq",
  "key17": "3txSWKw8SQDgLnuyfqEKJrmGYrs8RLi9bJrrzwD2uf8KpMmRYAbNXdRRoV8Q9Z1iWL8zxj9VWtsLqYHMzXkDHQsj",
  "key18": "2r63dcAtG3BxKbfMB52N6P1u7CAjcMvz3waFqv9CW9hVjMMC4zggju8f42MSYfANhtU17e44CkFVwemXmRmau1pc",
  "key19": "29mwECYiTdCZRRaVoTNhC1HTqABEtjaYz3XiYuu58wELsZovXzzuzES7quViRJororTcHSQRBC2z92FPQdeL9xoF",
  "key20": "41tAnRF9xCPp2Rm5SvSoPYMnziLSt6SPURHjeokAZWby5mu1RxTa3SbdzaygM9qnDCFDwJDCSNBvuD744T7MyMA5",
  "key21": "5eAYHf3SN3mfwVSRoME9G6fUb4qgAycLrsE1YJqQ97kukuiaPgHGRzEYeKnGTYLjQJCFcsxZgDrADBAq5NXmasfX",
  "key22": "4ehoaWKtAVwuGRkRUuiHT3y2VZjJrXXw165Gns9pieUhuXwd71RMckrTt49euRCN3gZp3is9FzHYwGMa175dMEYR",
  "key23": "3CDXLa9fDqZUskzDRifUgbgPNSiVQDqRuUJMzJAHahcaVgN2j57ki7S8FmTDZ57wUxPDRm9RhJ9RSNVaKqdfpZza",
  "key24": "5kD4vjYPA8UZ99ohH9VaiRQXjqrozWSw1zmf9wiQUsjhC116UmbBGwwY6bj4EEkisuvTnFR8iUen38qSBALf8Wr3",
  "key25": "pZvyYhWaE9PLB9kPLeHnPBeMnzsySkSL7GoXejhwJPCvzVTHP7rw2NuusjdfTxcrDR2cdM6KZ7CjasTBvJi5fvo",
  "key26": "5iF4eFXujSEvRG9yxoJmEbT9XijviChEFSNScbfaB43JnhTHxVMJ1nMK6W6SNk5atG8NkCHaLT7u3acYvBcx1jjD",
  "key27": "5qQ5VkBudrxkS4EsZSDf5qaG5cRpU4fXS3npjmJXnofpXTNu7GDZnY2nzhxau1JMjj8zXpRE9Gh93jzzANVkG8WB",
  "key28": "RrU3e1o3c8UJexd6EKtxKahkroQimG7gcwLAZefNoT8aFuUio9dc13WmgrkRpqMt3ZG1hLptrWEG7ussYxKusqX",
  "key29": "4uvgE9XPH9XvJ63ocKcqMMxAKi7yEki7Apk2CdjnjqDLBXhYT9EcreJpFYkMYT5tVhjBLCmUe4WcRsDLmx6Q3owZ",
  "key30": "4PtKFi4SRfrozctqFjcP7hUVCeUAi1MZnxRvYqcopkRNk3V4xVUnaqcwqXRN83AaCddsrQKnoZSnaXZRxXyXMswL",
  "key31": "4vSQuWFvcRfSUjfQPwxUBE2Btv9hrTEjx5LrntA9kvsiKcKBeD95MbaH63H8Jh5ywZmWLxP6qBmJ8Ys6v2MZn7gF",
  "key32": "64pLjJsfpGbqdLrSBoT7iUrjyHh5baXm9gL8KoDyf7yp3Ks6BFq9hrMcH2z8rLbdLp7m8DBWQgynntwFXm8vazem",
  "key33": "jLKd1hFMpbwnjrN9YNeNa5sPB3Q4gQQT3UUU9LGaCL5JzAbWYNAX71SZsKDdcNmsJcS46kXsPubiwANfGLWVa6n",
  "key34": "2KtDVVYCNgbz2aZmYas8Cq8qJsZxKC3zJjD9CkVRbJt6MQUvqwL8DWGBiMNUZnESRzzNxFWSm3CsEiNjVrzry18q",
  "key35": "1gCUZyPhQHXU9HVbMKLgRiVuafdqQ6vdNBWSnUXtvNS74hKzrp3h2r6UCkrXkM8K5WMZyWUnAkDtKcXx4E6dARc"
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
