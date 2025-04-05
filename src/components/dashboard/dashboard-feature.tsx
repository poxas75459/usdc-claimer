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
    "57sYRFnKnQM6bXgGSts9nEwPRvCbkF3CfFC5c1mEt8WL1TWbb9tLJ6hkqEYpiNn5jukARCHfRJZ57bFvX5dNyn9z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mjd1J3aSAU5wD61VMc5S5nWNbcnwfC6A82jfLLvRJoxFdN7gXB5xbFdkqgdhsShBmDeVLRWq3HLSZgRYdZxFwJC",
  "key1": "4X9vaF8yZ4zyVYb7aXrZJD8RvmJgkTGCiR8WTU79AHs52ZRJhH7q33RFmVdaaomotNEV4q2ruM5Y2aBLbX7eFp16",
  "key2": "34ZEf9vHAz7dFKVmTaLrur8PbFUVKhz31xs5QZMAtkvh21Z5uvdmc49xYNAaKukNLVVdGuRRFLZkBE1mMGb4afx6",
  "key3": "aa8dSxLZaK6dqQF1S1hkE2XzYdP8MhMTvaAnBu3NQekP5J37cj15Usr4e6zZf8aLkPQVPgQBGYFVbL7G9w6qZX2",
  "key4": "5UQ4dAMGeMQTK3nZiRvhiURpZcqfRY6EQenhah8YZGGhBAZbGYftcVcxRJNwvWCMPinBRH1Jit4CQdojxQxAYJqc",
  "key5": "2EGYQ5tVvTTzrZeabAzmhRLNVkkKhCDmCNKJLNVEsDSb1X9UxxgVzdeBZCKtdqNbpEQgEqtc6G8o4P37GwLkCdB5",
  "key6": "27GG9mAvTU8jNcqmfZcH9gVFyrY3bShdkDEaf3ggJ1vDuDYwNwoZFztnBGMpuFGFzyH2d5MTqhkBYZUVKsytMcnE",
  "key7": "3awT4kQj8pRCbRq1qRRRrivC8YLAukLxmjucXQDZV2hpMs8ZxfV166T6rN4GJbzpeoq8ms17s8g42tL2h4X8mWfW",
  "key8": "5kQDPqgDDnYF6Mv1SNxU12zvcSN1j2Cz3TTYNpbtpDPPvrrp1AwD7KGBnianizXp5kzv6ZzLZ8aQoF1WVABogZWB",
  "key9": "ukhHrnRcfkhKLBzbKfqEVaWZCAXXiikdFUzTBb8o9eeJRQr3MPDj3A73MtT2C6uKcbTUL3AL6c5czLGXSrT57rp",
  "key10": "4WNq5dPagh7KYFYxCn6MgzfkRysrxjoTpY37f6Rho7TZZi8rbYcgWSzkmRBnCHhPGDhEWW4PGSJdQBijj9epN6Kn",
  "key11": "23AQevBXuruV1wtNet2jGG2oZMM2aZZKEboK1BqEAc5Rcv98BpWfqPuBxEDYQhTrNbTpWdnrs1d25kC4KFf9SE7Y",
  "key12": "4ZyyTgTmREKACAQfEwrmsmKxWeWHbQCJBkVnZVTcw9GxbNW1vTM5BCc8ezR5GLWpeAepBW45U7dKQzYxBDmjfzeQ",
  "key13": "PzSi5k78HSefXBY1Sdeqqc67te1Fzmu8rTWWowbmXTTqzoWY1k8myTBR3L9C38sxjtc6B1S8XpZeeapKeqWwMEd",
  "key14": "5TFfnJgbDfGAvSrzNLFwNWYe9KjZZKgERPGQbz5LxcAhhmUG7MNTFrQBuSfcqMFX2pGmZsRaNx7BYJRffg93V91c",
  "key15": "4dvxueFCYmvV599nMTqRS4jGyaXtZcjJiaM3xyHBxfZfSwSPEWkL8DzCr8JeupRuDXfKipg6jX3zk67iDidzbe3Q",
  "key16": "FPHkxqcc7zWETEwf5co2wNUyYLkWD94T2pxGNY1fe9bu816MiK33P37AxsAtEei6Pisbxkph4SUmP7JLVesKsKG",
  "key17": "5x7KkAyWoajNuXDWpGQPvyDyiDUdZrYhkdcGp6qWUcraXqB1Pvgo333gRN9HTCibvYCEqjEZNYB8xALinJNN9nqK",
  "key18": "2gTWZ2Cfc9TXB4fxLGvyNr6b6mr5srgr57iQTQbqrWdkYuxhDiHWYAZk5QUCVRSHQBnPzr6Geq2dQ8TaAGPTwk8S",
  "key19": "3Y4rRVLYp6heKmiNvt56Eu6H2HiE1GF7GW12dn7NYitEufu5xn6Ah2Qpqg43ctYd1UrQn7WbyKw7fR685kSSgRKp",
  "key20": "38ssxsUoPoGSGfNrwDYTNmHASbhAehPVZCVTUXDbb3QNzsLfVubt7ffm3vmp1FfXFu4c4YFEacMbYhTzZrzNwE94",
  "key21": "5xTNULErYNLL5nyvo7n5ZAqWhk5YFrruimvA6MB9qqS1trpi1DiiVptJmNni1V5RgonE2u24R5hUumgUqKECPqvR",
  "key22": "3P2fVmdJw9d65HXDzWrViQ4ivbmVZevA5HwKJdg879EMTVMUC1Hk5qhm68B2EMR4PLC1btcqCBQg2zUqqakGP4fW",
  "key23": "hBiJjAjntKVWGnr7LUKR49zmQDqnX1f9bAEW4AEzU5ZMY6xjtmmpuozgaJYipsy7s4FKwZQN7Q5TcZPKU4s3mqu",
  "key24": "4NwaugcGPc9A3aEypV7T6sYTzN82ByxWPwiWCjELQnU9f27CE8nStawXJmJbx3d3EAbXgAueuc7KAj8rdG2yAqHw",
  "key25": "39xWybEjNFjQ4ThkJv33KTfAiQd7hzCoU1ZiUD6y3smCv8bPySY8evRehTLUttQK3rC6Zt1ZiBaZms3E4U8FFoUV",
  "key26": "27kTUa6Ek41uwfwY2sScQYsTq4UDUyJ2oyAaPQiaS8Jja7DiEz1K5ttco4uMPRkJKNEcbA7n9NFdHwtiyVT7NJrC",
  "key27": "SGPzPt1GpDLWwJnQTeYTQ4NNLyLEMWkwQwayag2n3T31Lz73xhkASAEyGD4eawD7DZ59qeA3mP98iUHZSf9ouJE",
  "key28": "4KSTEdW1kXPjs4SXQZGX9ij1EiAtqG2qprsCbepqLMVcPdTBBUnmmBP7XvsgMnVqmy2N13FWWppYqyZ7e7BvES5L",
  "key29": "44auyY5mNZ152cgLEBtKPBAs4NkxaEwMaCk9WuckapHrCPfoJUv5ciiGtQfMnCWvyzqjwL5EiawGs6p2TBnJtf6t",
  "key30": "4FNGL3ncCxop9UBKCXnm7Dw8BpSxNrezgg5ovQxKLbFzo4EMFSTzMs1Rv2W48jp4kXQZtDnvcr4gbysdwaRajwpZ",
  "key31": "4XnFQPVsm4TSxZz519rR3c6KWSWdaAPMNLiCEN835cv7dvjyzexUTY34SNiUKFkqVeWVkT9FQsexBp4fveCc3FMo",
  "key32": "4Ko4GpPVr1Rghadvf4TzKKcBzh5wHSRo2dwYWHxczwH2YeAAMVn86NgqQbKSaUXhdjtUSRLiVggEHeBBBT8jYFd9",
  "key33": "26QyArUtKZYumhqMAU5MX3DwvJATx4mMwTtcfB6ZdNKJDfcdn5rQYr8GCs7TLVCWmCuz4usG5V45iypwUFWGiLCo",
  "key34": "5G6fv5AVuNWPhCFN6JsLZ2R4BbS2PYBpuh7w9tc8stARaHEvKgC4RinuTD9xNznq5dudk1hiMBybNiNpeewHgWeu",
  "key35": "2pqc2TuvTeZW5BMGCH3cHzowHT8WiN3DRv8VFY5bQLtqAdTHmFuuQnxWCu4h5k8n2t9m5R9xmu2HrLTGdXdhi5ju",
  "key36": "2dxLybQVLJUmXJnDBPsoPpExL5d7fuAaJ26ma5weJAGxVCpqhWThxtXr6yyvcxzNQRbb3vWXSpiqFDpmw4E77niY",
  "key37": "5EnNRPZGnEcyzDsoPnvMpuxfnKFQCMJvL7Dsikg7k77jtUjWSXgC1cNkm7prTfaxoVTKGPBuT61YD7SskAzce7Ff",
  "key38": "3xzNgGShS44mPwMH52i1EgmrkEAn2by3E9H6BFi5vbRZPPZm8AD35yLWRdGFaVXqeJPvtEEyQuYpjfgvVdZUFM82",
  "key39": "LgjmdvFnGuaHv4YDqq18WoeAvGVbQpdy7av6cZeLZCevgfRLTk2Dq6UZmxATMdNHJeVHf1uoLn8ofVas8rCYb63"
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
