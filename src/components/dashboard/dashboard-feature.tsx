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
    "2waZUjrwEqSNyNaYBtcCNQvwdszWBNnHD1TynbLMgtj2TcWPCkJV3g1ZnJLaswcrcAu5MamenHnYCYqkwWzTaCvn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vzMPrBqbj78xKFEXnvtRG9kPAm7oANjuGs4hP2o7YkHRLm5WxZkNHrjZQMWu1bC5kAgGNEkQ8FjZ5RwrkSXxUed",
  "key1": "DNa6uy54d2Pp399kubNYDjZxwDbXxgmD4d9HqsaaFR1jBoN4ZcCxE84tE8j36FgwxGYT3fveAhPnxrfrjEfX6ip",
  "key2": "56nC552uZqPv8CcrXxNJ3XFz5ZQ3orS7e6BcQHafb1349vNprH3y6iCrCR31Thsd2eHKXQ1zTW4j5rf6ngVr93SZ",
  "key3": "3YcuFcZXEGkcMtFBz4RXxpWeKbDUTddt3uDWtB9qT5X5gUTo6y4oaEew2ndZCUpz3vP7CteqJs9xUa2B4H5ZN6As",
  "key4": "b3KUBC3ZFzoXgn6dMi9UM1z9YFwiBckXGnz5FodJB4kkNmbRP9yuCwB44J2ZFDFcAiurUzWNkdipEAwhuCANmh2",
  "key5": "u4FrzkGH6zbUbrzKfToyupS62rvB46nAQKx36FPzJgjBSACtskkRs3Eu19Pqakb4KzBnsuGs3jF1bhgdmKjQYmJ",
  "key6": "2ks7hamEBWoAkFMm9bR6k5bcJ8k1NvmGuVW3sDRFdCJaFzBytwqKg4QDf49BQiqmZqJ8kmzjPVZMQMEdpoJzdB36",
  "key7": "XYaZLvwgXSYyMmAcWYDRPY1abU6ipfDEj9brytoUh9YR1wbmBFdzWop1QztU23iwCkz161QWZmHuX2Crde3rNLR",
  "key8": "2aL5wMV6Lkv2aQoHAvqarTvfeWFL5gisVQMYGJHkvPyep9u2e7atswRNvLWNy8dS3NPENkfz3H2DuCStWN96GGfn",
  "key9": "3aiRsz9CLJ8UsGrkZGGxA8d3XeoPqdg4nNqhYV5CYBoQiq2EYZFVq8z9WPxHud9YiKp3WwEHiPZfKrMVtRgTXDSg",
  "key10": "bCmpS2Rud71X3qP337AujQEhs4YJvYqgFpLavfQ5UXzJtJsT4KPMDHp43kF53Z1J46ApUYLPR8hPtLr9DtDDZsd",
  "key11": "2RyxHrZo4kzqkoxbNFz1zNuRZDDVxzCCaUPBZGCkUBRW9vrW7P45oa1ppi88o9JcAgBTai82vf1MgrH7BM2LGafS",
  "key12": "359hWa678VyyipnTiTguj5Ao959M8o75HtMWVYzRsRwX9CHUZEDx8nzB3hYJJSQAPHeX7M6pHZc2Maq8wNnf9CUo",
  "key13": "xK46c2cQurGCgc8MPJ9pjvStsFaYmiD3MLMdFUBCyP1DmKxGm5VW4P4aaEv58nrMKnFuMQ1zdYRWCqf9qVPoSgx",
  "key14": "4xYmcmVacfGqKvfmVwz5A6yv97cr81yCH22Mr3JsU9KhhPmrdAjPkeR4arFfxmR97ck3zMPcmiGoNgY2UeuxbxW4",
  "key15": "4NVfd49xbiFxUeXcUTsA5Z7USqsuvssXpF6Mnu1aeCXGKeZrwDD2Qi837QDWvabbUTR4nS3hnrzbfWVZnDaPiF9W",
  "key16": "46JYFGAHzeJTKz5gRE1UuoQRLzJsR3ybTWgmWy8J9a7dK14jVa4jU5zm2XiEE6r3RaVy1BcypcAYXjMSky7c21qU",
  "key17": "DcXr9D6Fh2GNeeRfPrmfYDgwFMyq3Pif1V6iiffD6E2M4zZq7HcMeqX7cfwmeYfpp2jz6ssubcLHcnEruxw8Wv1",
  "key18": "5ahaCoZpUmSqZwp7UMEut1vct3ns9yDMLuuBQqRs4P3DoDfPELEJHBgME17baa2ezPJH9kK5pcrejj2Nmnd5Me1E",
  "key19": "57J4LPuAYZr8u5q3TZoUuQJdrsBEExiaPGjJEUYhtxmN5p1b1cgAMD4xaABu8zc1RXAsMocBdLvqgM32ze7Kxahg",
  "key20": "3xVFYhNzmmmndoLRNNxKuCSXhweHQspksBVw3LBavCQXBTgXYdDdcucqn5Mm6tksbC6vNCC4sugPmG6BEZ2hSpvG",
  "key21": "5dB7mNQAaGbGVL55EtWdAMEmdzL2JkFXiwzJvXsRKUzAKD894cMd9XzrYa2XXidMLwcmx5vNkRC8kBYJim62nq4q",
  "key22": "5haB4HsrxAb8qAEadbpyx8ZAA4VUmB6rRovi8b1o5quhLAzPwxE7eDzpRVQVBT5sA9UWrKMbY99nFPV7EFJ1Q53B",
  "key23": "2GtvNyGSjQARft2gSJvk18SRojfZkzM5EfWBbXecn5Znuwn4Gz8qiCFMd3CfCGEZLarcAmugjPz3dGcDXqxwTgAU",
  "key24": "mj481RfwVqWSokY3BWQ5MctTQ6GE2oG4dYs7RCuUTiPvAhjgtdaJv7DjazeuiBZ4ACKbyvSUsoQpUjmXaoFqXqo",
  "key25": "4gZQw9UN581rNh2qXuBoaXqHk9GQsFbZgct4MLifQ7YxkFrfDpDQdsRSp8izQtYcfKfC2ZoRms86TubhPwP4WjRS",
  "key26": "ER8Fr9vtquuVQBtqSX21HKJbu7kWCe1mNdGBhjXTVSY3knqqx97uwfYvQByvsnPXPa5bE6GW9Q9YomifhzLaCxE",
  "key27": "4hWAr8v8KCCtuFGN2tMAAFa8on4stwSyWGf61t75JAa3watbK3oyXLCk8qYRLXpipPhYi87g3WFxisauboHAVPNo",
  "key28": "6597YZZGqxNDeGsx1mWzGoghpsCSe2WtVSiNWV47fC9aGCCM5QfLc2heEcWariMeyYsngXCmbfL81UaS7mDF2ygc",
  "key29": "35m8sNGuWYJs5UpuKRbV6EoodAHz9EA43C5yeuBsAf8T8qaPaj5yUqpafDMBAJ8rihybkomx9w8pgpdR4a2YCYE1",
  "key30": "24ZSLwKUCjKn1kQgZ5wrqC2ryud37TjThYwjuUZwuuD7iVqeqcDJ5oNFS6NUHWZFuU2T1KXiab1ncAt4nmq4meR2",
  "key31": "rnec8Y6pp2bNMscY2FfCA9CUsCb6Hiwyym34G59ArEbRgDp6aY6G2bYoCckQvk3Cso1PExXY9h9dR6d2S7L8zyP",
  "key32": "2n95Qv7TBZHFByHPZYa969zwYp7LYbt7Dmt51z6AvFrCApyQ5MuaX2zTBWUt2v7eZVurhr575JaEcQsaJAqv8DtD",
  "key33": "3nZiLCKYVSYEkCWHd8u3BDAie7xt8XSBTjoHNmbwvHiXprVioQgnQ7cVCS2ZUXMjT89Ew71iouwBy9qg2Vz48uB4"
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
