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
    "3cMMv3RSDXzQzJ6VwL9EtFzNctYGjsMvsLN6dcGctQE8Cc2PNuQSseo26spx6PXAQT1HN3djNz2pmhE3s2o9DYKZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wLssTmLwkp2KiJeFmVWwMkJLMLJHjuQ46uo3nYXmSdVQ1MoAddNeQigrBEKVb2fCfcioM1J4VNCoAPj6PuRwEfW",
  "key1": "fuUf9AYFG5eLHanbTwZcoPUooAr1Ws6Wpc2sfnr9c1vza3YR7oAcAR3an6L48FhCu5WRZLtaYnH1CS6HHrkLYm8",
  "key2": "3ZNkHbuKRH4jgthKFtEs4m1Jqq8MtCkB96ayQmK8n6tP5B4B3KNFaaTBMr5Jq5di8NcRUMnZeqhYXUefD61owE3H",
  "key3": "55eiHszpfUCkabeVrqYoGvXW2vumd5itW3MFKK3UUXEkywPoR3SvRsbDitWzD654hmTmAndTkZsMuqTXaJ8AUMMz",
  "key4": "25fHnogDyv6s2Kw8afuhucWE8gWhdQDBezRhJnz17ne5QYkSmCmGevq2PzXGmgqEavUZmBwisYqrfnF1JNg765Mq",
  "key5": "2DimeRq3w1YjCavoYfhLEEaeztGaVNxgJxwQh1US6VNAQWDD48XZkqZoy8JfuKcLZW5vPN36ap27SdCcGSCFUnbN",
  "key6": "4gPk6rXKuTyBhwfHv79guv7CPmPVBSSVdeopRaTZAtGQzc54U8smg5B2o7Qj5jMtCQKyMQLjENt6LWhRCF9JZS7q",
  "key7": "5mgFs9LYdoyJEEPioi37Z2A4tWrHhgRhTSdR2if96iJK8EduVQiE8kpZX6yXKDDSgt9NA7JvHvW1apqeZFJD5W46",
  "key8": "5eKbE72isgKBfPudzehtmzZ1rVE9FqCxriYa1pwouMnEnT4xzg9Awn1d1iJQ3SNaB5ZsWsfYuT5XeYU3JVPb7Q77",
  "key9": "2JDM5RJm3LJWU8aWWUyom2fK3sh99PwM7mNNkkhTM4EgdaWMK7VPZG1A1NZkqjDkfJ1t6fht6MxPqjdMo1EVxbJR",
  "key10": "613v8Dikbi9jqjhSRNjsZjeQmUvQyJ7EgFb95HMH9VtYKv176WqX5P1YeTg4ixExfqYkWqfEJiqJ6mWXi5ghD4EH",
  "key11": "3zaA6YfTyDxh5FD29Mf1RLX69dNPzSy5MKSBFtGcjgbHTPgAAgLWQozwApmp6r8m3Ci7N4x2PJfdaQhbucZA7yfC",
  "key12": "tLGBLcok3QDZvdQTJX5XBkqGoNBP9rPS82xCug7DGGcqSJG4NGeKUa9BMmLfU4EgnEFaUCJrb8CTPx9UwgSuVYi",
  "key13": "2Giw8GfvAQ1opMU2Yk5kvwGCtxDGzFbBS4Z78x5djW4JAefSgBWGViSpNrLNubHv4zK6XdQ33LzFwp9LRvNFwnpo",
  "key14": "4yKPu5s1a3oxCfHmUDJpBumHQajtD99r4sJmaskZJS8nYQCSCpiZpBvs9yTyNhM99fTRLpuP7cf3FqjoNQGyLC3Q",
  "key15": "4Xye46zyCmQDUiuuQpRAQ4gtfszUxu6k18r2vbDSScCKDCt5UAx3CvQRMDG6gCyaYZjEKYqAw23Y9Ajm9wd1k5tV",
  "key16": "4mopJdKdpvpojQo1QepUEEaTUbc2VGteJDhXPkkih58UyxAza3sbXRJHpHenftyDQvsLRstb9gozHoujadu9G5kv",
  "key17": "4bqzbGPuxwpz9diB1YMXvSJ52heskSwCo8h6c2L1LeN2UQAQbc6He78WT3jzPN6rWv3eZEHMhRfufJcjXTHhgijj",
  "key18": "5uRg3TUDbW4JzMVoVsr63LrhauuhHGs846973yX1MdNakELHn73vf7ETT89tWecyeohRijRLBduEZSBKZLJWepQz",
  "key19": "TJwt4pEDdNHFQo3oRvpYE8GjuvJFMjP7zHvyWiDJ2gx2uUeDWSEJVajsFAJaWrK38mCXohrtgediAJaBb8SrRe2",
  "key20": "wHZEwSP3muADo3TrfRobKuA9iAgaWmvUG8ETgrGZWL8LtrV736nMYDgXrWWWbEF8QXpftDtkqPv9ogfuukMHbX8",
  "key21": "5cTWkshzB3DpfB5tNYd2HRjY9g17sxa99dKtnvPoJXYTnTAh214oztTDNmj2qqtkoPqKjjCMQaHQ6mEWMqNKLxFg",
  "key22": "3oVi2LoKBjmoNnaeCPyV6BDdBS7Hwb5roZy9VJDZqVydAVV6NLPSygjc7D7JXMPPSZsfFB1Kw9VmMC96pvMyuL5R",
  "key23": "43SBq4HnGVa811cho11NMxFQP7TtPnvBQuudJ7nQkJZ8VVfpBhKa3Ww5Mv7bgrpCWqQmR4RKSF9aoSTG4zyKspq7",
  "key24": "4dXCCHTRJcjmCVwknKBsYES24wLJ5BwCvBtCpxSjhY1S972nuhhpUHcao3b5q69NiGHq1MPXRuCqRLPBbKJuCL5W",
  "key25": "5WB5fFcBLZmSeAcpWduev1i64FXAhm6KipD5G2AtUWZPrxPhTqt3q9xDzr9uG1bC1tF8G166spvz6zSEAun6tdUU",
  "key26": "4xFENEKNA46Mu6XphwZ2puq9vJmSqsHRFc98KZjyDwKREhZykueAZ73c3UKDEcgfJmy1WimTH236u8pZJDedBHJE",
  "key27": "5rokJGASZBvGTTzhkzS8g6D8zw5kinqMKBhA6p8CkU5iHwf67pZfjZ7okgJzX1sSBwEnRkPVS7A7F5FYrZfooj5W",
  "key28": "26L9DFxVuPCkR3FRDCpQCZNPZWW8JnZYWkmP4b1wBn5u24r6N9ysySUxK5V22w5ZN4UkP5gNX49pk57Q649y3vjA",
  "key29": "3PnH3iK2pMtHUvhHDb7AB1PogUgjQF2L3w3k5CWkYtPgn2CrVC8qZuTfkEoA6ST1AmGng9Y1XYonJDY1atb3f2Zs",
  "key30": "4UD4b3KX6bybvZunZppfxG14yeEAgR69NqdvRoXVWcJ1qSHZy6eBtHmaTNyUWYfhT1LBPM5wTjbYp18Kw4YPYrmy",
  "key31": "5ADPmcqTK1GiznTuD4mJmw6ryFZ4FH3YJj1Q8D34kJrv5rDPdUjVCLYcHLUQvr9qK1T2V72PaPTNsmZqgwyTRtQo",
  "key32": "5k8bLarct6Lg7JPaLdvAbUZxcDFuKsv7oLBg1ss2RRENyTnkgTD1vBWZ2PzX9t9WrQbXUZANYbHfPd7ktGAGkwk8",
  "key33": "2h351w5zcijuqefeShA1F5cAtfNzixQrr6eF6uueuZEXMb9QQ2EHU87K6KNMi65PFL9BrTuV6o7q9ZqQziQN512m"
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
