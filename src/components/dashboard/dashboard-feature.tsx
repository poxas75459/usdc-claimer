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
    "5aTr9sxx5bprUPEUyUEHbhGQ5t13wQUsKtjj4JnrsCHG8T6dgTNpXUGYkgi4YgyxZSq8cjKo2QM11ANQALPC9vrH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zLoFeearic81SxmyToLEbFuDW7eP6Nj1C2Y5429uzQ8adUup5Re6C5ZfcBF85DP6GwdKdU9WzD3c9gHq6FAAsz7",
  "key1": "2kRfSGhRP3fS863sAScfpUHDesLs7z4G9Xgyv6t2GwDiVhnqE7RCY3uz2D7jWqciadox7YZZQgbrH7Yq3ysqwcoW",
  "key2": "ZnsQXNeqyfTymHbaQR8dsdE7DD818FpDwn3gdHc4qw548YmC5LWUftAbpqeJSN3qD52GJxcrHerGx6S4vXEvswi",
  "key3": "5arAVCKqgyYqgAd1XsbY4CHVF8FMoNTgqkrz2a9owrrRKZsCmyEDEBRYKWEYnhk3oj8oBiZUzhTFNpw44BJKkP89",
  "key4": "5dXCYBjaSK54PuB31UuxsU16ERxLA8ykbRjv87m6pDeH54CWNDy8kpGCZ3561EhyvYTfoJZRh7RWSi6HXrkPd528",
  "key5": "3ikXvqj13PG1RzcERy7tsDGLejaXoYnwHGQ3Bi2Wt2rLHaswjwkr3jJFEQYdthdWfRDvCcD66XorRMMqc2bmzaXu",
  "key6": "2ue39Yc4SRzkfgcpsGtd2egbMpxVSnTAhroxj9tZDcoGwmmGr4UCR9dYXofa8xaZmLnxk6zouLSk53NcriSof5to",
  "key7": "2xvQsGnMoNpbh4j5cSgSrsbSN5AWjr6cEPwf2zDuyqvwPtMyiYacEkBoUVcUgkQuugz5u6jdGCUAKbshqRBdkL5D",
  "key8": "598RV5Xnca8T1qTpN8JutUoid5tTSkxfpZKBb9F4HSPRaZNBFzmvUJ2e4iKdvBoqyrNYPF7QuH4cy12ZDYeUfPLW",
  "key9": "5q2CBK97GAnZd56saFbZxo7qTiMtFgMRtwS5HevPRi88H3R5LCWUzJC3GLtxXt31uBxDWPS56GV8nL2Wkv1kpsCF",
  "key10": "52jFGNADCnCJbjU5tpEzv7tk22RtzZmGi98nqoZnKojMQ5pD8Ac6trFa3mz3JizdEFsNog6wkrqzky3hzkEAX2qA",
  "key11": "2Ba37UsFeNkPcuCUyztG7KKKFsBYsZf75H7h1WiGJKHR45AnDTmhoQYegS6LZ31R56vW6ZbU9wop6dbCSQ9ysRrt",
  "key12": "2Gw2e5tWwq2yPvFcTXQRv4swjTEQdeHRBnxZXGTvZFFxySew4hVTwZmRB9GkFQNBUATnRBkXPgjEQSM9unCEX6Z",
  "key13": "DvgeVtH7TKotNwnaHThLQ2HjyuAb74oDr6FLTZKPyA9Vy2Y1BE47zsc5jqThqQhrmwq4MuUesTSpgSX3m8o94aC",
  "key14": "5RXtUscXG2iCpbtrSXDXqNVEaDyhW5sP8CGvjuxeqx2cKxk241Buf3RKJ7MNfCQ2r464J6TfD8mnxJdL1Ff3BoTe",
  "key15": "rKEGTHMTiMe8oVR23LoGHm8Mr5pJ8pt6rLWMQsiqsNFuFrSZ2yPNK4eum1dsJXaKU26c34C1WykzFCAXkpZi6Nr",
  "key16": "33LqDBrZJfTKD3nSKGgAB8kzeZkcrGAfSDBx9JTxMYFfi5wLhawXMbJsED6Ww59T8vc1A4XQEwvvZVbM4BtrVXXS",
  "key17": "5bmeAT8J4Ang6ZZdwuaZ5tihbBogiEaAdPorrWMTQ8kNCzTbLwg7fqXiuoB2NSMLz6i3zG58sEky3p8eZpdcDhFh",
  "key18": "25AmjQFgDzxusqaQUATe3LCZ3GJHVrXU5qmYi6p924X9NZaXQz723YcD7qRNLKv2fDM9mh8XHgZh3ATvZh9GACZf",
  "key19": "5P45p3A5RSY8w5Hutt4oYeRDmn6Tq5xGVgspfXwbf88Cp4MRN2wtUa2zVpU8hbT7sHGcJjcNfRC6dz5j2hMYPUQK",
  "key20": "3bHM45hYiqM5hQ2JpmZqPUdWFwyaQqcyFhnydDRpFZvvxN4SS36ep4DsYpd1FcqTFUaUoTCTtHL5jrTEEtW1NGKY",
  "key21": "fPBYduzayN4nqnYPNDE7hL5Gc9Sk3EdA5KmrcaQL1rbHyUPCrkVtV6UYBKX31s3BqkviK75rh9PWKKXSVqwgTZp",
  "key22": "miVNiDvao7ANLaywWbvqu9WW3YCJRDj3SwMJu6dpGjXymoEc7nofGnRH5Vy87rZtxamnNaJgHvaQdXcHx1D8L4V",
  "key23": "XmT4aUqHfqHUttbobDEKQ8ZtpRZiYc1acdDwXsDKgrAjrwvF47tTRV5LmpCCw3cEZCcE1HLNgfPJrUwYE9fhgDs",
  "key24": "4kD3yyL4guuq9Js48Lp8fyKMWB3n9WdttzdT9Wn9TqHxGJf7BokAb1xLscaqTFTZVXDv3Qv7bZA8Pq667ggso7Fh",
  "key25": "2AHWTUjrGpU1ffLsq5fw58bc1uMZn4e6jkPjir4W6nGmFnRiNu6ewpAQ6Y1qihDPr8vMT2QsP6o9i2jX3LkyGrka",
  "key26": "5eDxLKu7QiWxraRADKm57MHHRW9uN69P3Qn8mo3qNJw9x8LgCh2JPGdTeN8TEJ3phwBFsgoywocnF3CAVnhc8sDW",
  "key27": "63QfhngiP8nUnoDdeyAqNX9VwavF8sio9jZtzCuXFYUsGMqFn1M73i6p35d3Jo2K6V8PAgCsZWm12UDsachY3qVQ",
  "key28": "3HvfzufiqxuqMAWtVcvnzcWrbVdECUWw4XoSYrgLu7Ljyh22mNMm4Dac7AMd4TuxxxzrdzHVvdFyh2q7hPs9NVsA",
  "key29": "SugLTz92PfKLDPKxm2LDApqieSWxm14rYBBpxQYQans4hWhd4VF1dfPNmocPakJVDpM5eNe1dUHvr3rTPXtDx3s",
  "key30": "Ga9L92YX6Cce9Co4xHDif98pQnX7WN1j7Qp4FWBDJorDw8EKHuUnLLdMJDsgTxkk7tVcSukr4zJkAP6HeKcStbg",
  "key31": "HkcMinDJ8xa9nxL6cuJnPUTcBiHtJwK1mmmTDVdvejTagKZ9v8i5t4AdVuLQY86ZmzhPUpyfmXJoSu1uKYWAK55"
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
