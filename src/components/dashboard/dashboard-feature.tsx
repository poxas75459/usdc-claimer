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
    "6DUP4bHW2LDKhs9QW9kiNXPfKvSzocraXDxZHo6XLkM2TQmyMRNw3XXXU1JeFR9j1JqSvhWo4bMYeNNingeHXXK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iknvHxibWSoGWrGzRpxRww97yszHKjcuGM5PAPYkdvuSvrrSioHMRPvy8Nei9HWZmhjwAjm5BSruyfjYLsMtB3H",
  "key1": "2CpKUn9bMkouHFfWoKHg5h4PKhYYubL7DbWBD3uMaSvdxdFdVfzgwAojZPp51X6GXGxJtYPy6KNL2ffAYeuDbeBn",
  "key2": "4YDyu7KLXodrkmzqL55D4TRmNDFkHERiThbAV1TaoTc9S8NvC8qGXMk7jTczRwhdRTA6SsmEZAmrHVPjHP7rNT93",
  "key3": "UPJkCgg7Cr7ZH5mH9As1LadJCNjgibnsjPvDd5LnCFctzKV4FuAZi3LxzbbRJ52ik5Mw7mJmhxKCAiga4P1b8B4",
  "key4": "3oc28CuF1uzoZ9czeQJb3GyAe8gmb66qAgSD5VsSPjfnQMHUNmCenUTXyJRchbojKPyB4fp7W8zLVvTMudbFErFS",
  "key5": "4C7PnwTMWo13XEnqQLRWef3HySHLsRLj4igycSChHT75YB1HJ8bvn44AYff3kyfB1RU65ECxEfbLc5GAMGrpKzAX",
  "key6": "53V3iy3LJzb6AYc1efu9K4uZcrhH7suPZFn4Ddc3kYj4PiRhy5Zxhm1gb8ztGvZJrJnBXmyojc45GPMpRXJ2t3Di",
  "key7": "27WTKJLaS4QhhgnuXuuCzmk9gRGosuA46EUzyrcsqbU4t3dFbg3Cww97NVdp8LGXb5kzp1uGRf1GReTTym6Xvax1",
  "key8": "BWbYgAdNWGiUuF7fJc9CmCCAWHxTjJ9JCGiT3ZHf6abS4NjmzQe33VTmp818tQTVbExH6YWXEwoGp33LeakMvcU",
  "key9": "2Jd2AjdqB9thAJgKNeKFNsq9rNQcprpcdYD2iPNVYnhxfBQbpmNfVbN4zazbgxDUDZGCtXrH92hcepZJ6vLecNtX",
  "key10": "2AEDS64497Lk9mzNqh2fkcayJCuzdGjR8Q93qtNy96mSouoUN3LpV9B5d55VaiBkfv3cv274FpYakgx1nikYiSoK",
  "key11": "4y4G8DBZoTJjf7Dmo4xu4NyHJzW1voEw15cVgQbvaa8LU4RdhtjwpVqj3fB3GeuZo86RsxtnE4braXy2s5WYVxu9",
  "key12": "LyY33y5mVK2wxKE6izNHvZP2uFYsH1kWomiHNMvNrwe1eMk2gSxUvC1L4Xwsgxgkqhz1J4Lnhe2z9xrrEBpkay8",
  "key13": "oiB3KNx878q275k2fLPotvm18BGyvhTPfRJNoZ7VGZiQQu21DsmRZxh2FkNSobrGW5db3yTfUXnk5JNV1kFgDf3",
  "key14": "2RDWN8NckEy9oS6tpFfzzHMC4x2PzPQwb2AQvynS9FvdbFt9WmoJvYYNRQZUqDarhpEMBZMnXhHtmrVQuZmDSLnC",
  "key15": "oapbbnyu3YCQhNbfbqc8fT99kx6RxWqhV7ZuWvYYKmudorKQB2hvMtqKDTEtSgNCnovRsED81ZX1KhtrU86HQf9",
  "key16": "3Byyk769ZFH814HVuxK2joX9FZdo6dYQJ9wZ3XH6Mw4WNGPoCP1CLs1vT7ScgBTknBkkM68A5xR54ej4hECo1QtV",
  "key17": "2X8UtgYmMRoAd2DyWJLLfHtTaFS9tMU4c7Du3d6WmGxgSDV218fHeZYa2DSvZMp6iTiNqPw1kAW6c2fjJPWzRBSB",
  "key18": "5huUCkBgbUJoZevkNuhmxqCP8vWxxSaZA8ZiPkDq6BqYCwGZ3sWwvzEvYdko66rDaaeBv2MCeJ94rWfa7n5YSqLG",
  "key19": "4Eok8HrC8MVujiLFBcnb8ZtL3w2yjoQJukymmRtHTPAXchTWhhKH2uNaTSNB5kqPX3V8NaLkiWNsUU9nrDtu1N2w",
  "key20": "5nzyErsm14MZpYFzSqnycydf1qWaNRE1wp7iRFAfyHmYQPd4ANJ5XmYxcHvojwgpFSkVHxbD623ETT8qcuvXieTS",
  "key21": "oqJKsUf6q1EEj4YmVEBSeh9wwqRcLsC1Qu96VWbF4Ppi8XshRF2GuXwGGDwzRiiNfvwbiBZc3DN2g5eCY1qhrX6",
  "key22": "5q5d9sknmgZ5PfCaoVgshWFZFQuqL3suNUvEJ5nMktnQmXEe1Z69u4pQBKYm5vWVfnQkpHBoyHDrgLh4qcAzjXpr",
  "key23": "2fZL59rtTTfFBG5DdmqYRaZypDydEsQgmT7nHYmyZArUqhHibRAp27y4jGrR82JTeaUKzK5MD6ydkJ3WjPtzuwVP",
  "key24": "4nhvikmjPwXgCdZT1tnk1HkGUgXLfbMNVwE3SSzxmKavHRDze45wng8Dhr3GyZ9cf38LzHpbjQzFUK2NTcyhmci1",
  "key25": "2U7Fa47G1VQpnS13M4PyAuyQqMJkEE4BPGNZywFp6BFpB2W2tBkRYD9DZ7BGxbq9Mc7qxZvfgJDjwKzPmozbCm8c",
  "key26": "2RZvyuQ3dmeep9Gp9KCi2DZjpvgEsyRccFW9YcsuKfNeGXJCPHsmfpcQYMNHpXUAqP28xZwsF1i2YYpqNrR9i6mV",
  "key27": "2kN3YpMG8apx5LYGVxCHi2tHZkwXtzpxa7SVTEyYvqDhfLWyAELUwbPHFCerebyEZuCoGFyxSu4p2ZbCc5GBiRqK",
  "key28": "2PK2vkhZ4athFtWc8gA88u6X5GoLpLFByY2P7Yb2kx19ATD456prSsXsVcrTwzvXsLC1bg9kHUE77x9cdUeqYgoV",
  "key29": "4ReyvupgLT9bfwXCQNU9cui6hzopaE2Y2oxF3LLwq7aqmCeJfPap3S2NBYrQYLTbsEzGw1ZXApxUEBdMXSXZ66zi",
  "key30": "4wHWzRoxqRif3zwyo5qKovme5Rgx5c1EbQnm9SPupn9WijcW9kLDVoSwd4J6BGigjF7F27dPQuJUKA6vKfxx61VE",
  "key31": "3B2UHH54bam9hGgSbDSnvEi7L3RPTNyAb9ipaBnPXgMpgbq42ZCCWwvBi13DgMm9BreK6EY5M8Gg1nYb7c88wa5g",
  "key32": "4pGVmKjqKtkngbC8SZoeyPqh2SW7p6azwC1nPvEU6DmTTnL9jft3vw37NkZwQBa1aXTeSE5zGdcYEnEBZe63tFar"
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
