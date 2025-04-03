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
    "4mJmzrpPJY1fGQ2pQqwLQz7zoLcSiRCfumpiwskL6EATuPH6RXEACSg3c88DUbZRng2fskVcrW7aTyivY4bEiEYr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LLoWuygj2kRKdmzhHe8dvyDb1fXsh3qp9YmsJVBzGdFpsv1FzhXfu372e731hmWAkPdirnM1tBRfaTQJwE5cqTZ",
  "key1": "5hY9sx2AhXH9CdfVFMwzqa1UpsJRz6KYzAsJhtBPsLottehTNJ58TpzWeEFcSpshp9encYL2JXEpmPVSmEJ1osJM",
  "key2": "4DiahzX3PFVFAYAUM9UszB8c1xpX8LiDHqTRN3cTZVnXiDr5wj8jmHM1Vfe9SSQaQsRWSa9hncNcBQsPHoakf85X",
  "key3": "2NNAisTMjChFCtyfdijHHu3vmeQXhC4eKvN3Us46sYP7ayFNWSoFR5ZExf79nB1fRTYkX6JzD4RNNiHpjKbLb1ho",
  "key4": "3bniMU6FgEygVNYxNSpguDeuYSWEXJ1n6gUVQBbjWbDWcg96ChMSzSSWJuu6Y3ptAUxhW7iDDU2w51DmDrQoafvf",
  "key5": "2jcHyEvpp7PKFGY9Vs1THHKronoxbqkv6VGdEvKM4QeoGYNKvnyBzdt6GXXmFbBypBp5g1osbXWvt3WBAFMXvrF9",
  "key6": "3KHHmfG4tcuDSMQuTEh3EhfRkq1K6293jo1zGTFcB2T4WSYd6CXoxbH81Stvt86yaeabnaDSVEQpCxvcQ2V57mh5",
  "key7": "6a3GQ5EqHShmxABHMpa7re4bHgmRoxBiUHLi6mqYQt8WVoJWMVGDLQ56YoBd6gxtt3aBu9UvkUSnP8SnWHBTaiX",
  "key8": "5hrHKLsD8LkTaKWyYV7UhgLkaT2SRNC268Cfx5EXA68g91k6XVUyb8EbZrBkBVWcbe96hbWxRCRfod5moMcvDAv2",
  "key9": "3baMs8kczGJw97BfuT4hJmSoiTgMY9JJS42bbob9UwNouNybiFJp5dumuNk7tg8dhxEQE4P32W4yCL6XLXGVgNEf",
  "key10": "4HQqsYYgApJZZUaFGQuuRG3Jv5U8j48GUHrfxP8tcGKqnPw7jeChWcXYM6NbmwuDwezorW89mETrwg72Y1YSeX2Z",
  "key11": "5QmeK7vJx6fpvrFee3AHw6rjT1JLczFbyWRxL8WcbW9hFzG3FUU8jAiq43EcQUd2qf97mgnaQE3saEZWjmPwkZRM",
  "key12": "2w25QcFnwnfWCtX2fTRhnUWSVyhqR2yAHHiJXFqTgM3BgpZ3vKMo5Ab6HMYMMp2ag4AVcG2CXtBy6sVtW2r6oWvC",
  "key13": "5ZeMfmFoN1chtYA4wgGcjwq6HVNQ2aJDTzyMQQwCJCb4yXtswuRCek98yR9ZA2ExGZMZGizbx6PdExAbjD3hL3h6",
  "key14": "4q5KQmffcGFjSgTx14xcqAsjHSCeGyfxWCipdiP9uaf6ZDMwRCJCuezoY6diUgvQPwHnQ9YE7N1Bb6Su7okPcT3Y",
  "key15": "q2q9YuFNtzxuUyRvQeieRcHehdK96jgDJQVvn5o25jUBT5YtTCQvaexQmK8zp5UYWsopadqN8K5x4oaPB1NL2Sd",
  "key16": "5yXvqtpUCK6cMMUzUTwArHUwKAwMkJR1EU3cdUCbMoR4F8dQ8HzNRWKFAPFKovQ93njmL4xsehRJ5K7iDVN5mbJp",
  "key17": "33QtdhVQFijJa77dLQP1TN8HC8x218VyN9Qzgr5ARUJsGjTFJ1mLY34U4XRHdH5rwPC1FMszTNzkt8DSaZt6cxBF",
  "key18": "3YJ4RywzNi7wT8zpirPJHirGHYF991L8s89feDV6efNtRrYmLGemvGnEtZQBNoKoPxd23kDLL9FwjtJSk5D3NPxd",
  "key19": "3g5edBwXZn3XtCZZbQZqfBCyK97TeLtEnG7RzfWtqbzFG8e5ZxeaKx13RamU5Mmddr9YnFy5H9JQrjdhW1DSRPKe",
  "key20": "qPbFFwrhGHGeEXGMdNZmYMi2F8Bo5S1UwvpBvdn129ErQpah6WaaGQm1w1hST7Vz2P7PiF4Fr7U6CWKPdgy3g3s",
  "key21": "4JKqJKLMHkDTSpgpeYrrphrJHUHHKVAzTfkfPpixdr7U4RA8fdNK2HSka3zSj4MWTrarz9863pTDH3cVNNRsKPec",
  "key22": "3fSkjoEmor1NTWKqVKr8zpNr5f2wm4NcU5qoMkwE18ABucUg7C3XpXzJ4aw1AbhCB5XAihzmh3bCK55i781DDRJZ",
  "key23": "bSa6MZ1qdTrRv3h48oFCEntu5YXnhjaahNoETn5cBWUAY6DTPtnzHktz1aoiQEKj4bsj8sqyPWrPjVGyBbbQXVC",
  "key24": "3sY72gtjQgqSGxtSc7E2KGvrFnZ9z6F4MLaMTRiDrKczsVRn85Yp7y9fyGAxWL1preEsqGarvYy6dAzio31Becsg"
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
