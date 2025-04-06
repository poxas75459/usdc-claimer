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
    "3dnU6FWM4HsWRUfNiUNSHGcmojYsqoheo3EWVwirkqnARdmM5aGLVBHtNPLmJN9sB7VFPaBxjRofvnVKQwhTQjGK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jPBa6YScXLSDSt7dpKsB37QqxCsDKsgXbSVevQ6qJv21fhjZZQpKcYemXsaNpBxV7bu7nFV6xJG9p3EAkRpw6QU",
  "key1": "4Z8qF6WCpNuruiafWUsiKEpouT5nvTy7KC4FVSzo8YGehz9YGw9BMHS7UPhvBLpD6JTFepwj9555PK5TACgcxC2h",
  "key2": "5oVVjDhpxodkXQ4KAax1xsVK5nPECa3USdfXszqnhB9SF1Rer5LbXvaTwtSNT2LBYif7GwC9K4xev4vWCF1tctwm",
  "key3": "oE8BD9sNFnYJdPvWTPTZE5hbDxfnvBBSRkDG5bhJVEaq2UddK65eJEK23UVPrepkTQ8mNKR878Sjz3GAjH62WDj",
  "key4": "4TnSwrLUeQ2j5PQ8TcMawz1avP3UvHTgPnwHuh3YbP4craFAoUr1vdrL3PMVEWwZWAniip6rQabuBrpEx2kBQSmU",
  "key5": "3A696QpJo8Fy47Mzr4m56PNk9gE2dD6cdDMsqLZLFvyHZXoRvsgUEs2QEMbA7Dia7zC2Dy8vVwWF2ufE91N5oPT",
  "key6": "4dRM3XjNJsHrrxYKDZLzZt5zZbToKhH29jjY5MuTTyFBs2LY5BSucSzEnHSrfCvaLmmBH2JAqMnMp96PtXw1p489",
  "key7": "BXr84AC7pvhCz7Dy3mT9iUEZv6YYp9B9Q996JC5QLEKcgRymz9cj7dabXwzZMNBkaUtoff8tE3HKkXjKXfDba5Q",
  "key8": "2puYwnUnLNHkGJV67AWzqNubh7HRRZQjkYNTjCSNetmnjCFArcK7czQBsEs3LeRT4RVTT4xunU1ThLiDqNkEhDK5",
  "key9": "2t4vq4HP4QWh442yme65Bj77WG8P483LipjoUiKW13i7HKoCVsVfUfN7NVCFnn551LYMq2xSETQXeVc3YnAXJiU3",
  "key10": "2NLbpCqnEWJbRaGUUQhUGuqBhmENSc36R1d1K9dp3uwKncfXb3GMifyM25RjthsmYTVbKgsrvk1oXgbyXbtcc94J",
  "key11": "5z9Mboi54rcJTSvkMzFUv5ePBnSmWs1Vf1jTSBtQaaCNurYrETz2XbAZGb4d8xq8NphronjrqvxwrBDmBj7HD1HM",
  "key12": "4LTc2EuPjPyeen8DKCbLR14v7iYTUb2RAYsmd5PFtcjh3hvzsbNMhxDgxc8KWEJqDbFqU8vvExqR7sth7FTcLHq5",
  "key13": "2YZvBXDnJUbT7ydWGebpWxjQPhR76bVn2dSEMcx3zMAsTjpP8MqH2FXdAgNjcx2MVP2mDTfpVm6KxBTNxyjd426U",
  "key14": "t6JEYETcRwNkRRWHo8wo7zmiUeRWcxn9MeNzuRj2E6cGwioFt5DJdKQEiNjCKAS2D1ZP9vg11kMH1nm4qC84oU5",
  "key15": "366ijekKG5WaLxDNSdGnaXBhg4jXiWLfz6saxk1yJoQx8c6Y1ZEf18PsZ4tHBu456ejPxtZRkUhmYQmpLK2wTFJZ",
  "key16": "Q8FSgzL7W2jLvPJzC2mwWxNYyFLHWb9DHgUr4UJG9mKqcd6cSzqzQvX91S736TGgr3bBJTStijGvMWh8VK2j5vH",
  "key17": "b67u5Fhn8XrQnEoXGXMj3azcL2tuwjZMwKCMdYcadmK7TzRCWTPMXmSHWJyByX5XzQ5A46mKTi9CmVcFY8LZruk",
  "key18": "2YosH2SzxJSqGzXe3BHgN4p2mzAgwsxvodXrMCfnAvKx1TP5a181AJyFnz4jdcziGPLbaKWTJyZPDf8GUkewfnEJ",
  "key19": "5AqVUTHPCK3Axuaqw1hyiYARUvxCfqmVRVgrUbcpx9YVmuVjDQLsYgywCz9jp8FNxAaWggRWV6T5cxG678raeujp",
  "key20": "4oCPyJyw98wH7rqRkjrJQrzWe9YnfeykUujhk5vhNUvrrRf6X5fQjRzJxqy8qRfstyTck3sDD6uYNEoduDvi8Hd3",
  "key21": "54qM62tWfMR7Uq9gyGjDTcpsPZ2r7WjkdvPgKFkZyPEDPXuAkCQjuUR6C3hjYV399xTwWKqeRKeBrWqpE23iVegk",
  "key22": "2aktchrshpYmCiDxNrHf17dH6CQ8rcUKGNuWBKz5DpUYQtCX6YtzJKdVtbxcjHCqkctJbcJUMqouF1CJSMbiYceT",
  "key23": "38VULbqMzV7i9sLpMMYvrDFgpCGXUsABc4SHLVU9dTDYqLLT3yHKNJQpUayjUh7jtCd12BmUnX1NHfNUcmh8SqWm",
  "key24": "633uJLkdRd9Mvqg6u3PP4R85xeMqXq7farxpzqcQLh4wKZ5FL4hUYusnavz1vN7FjbjCr1t98DfiYTpuTZqiqFNq",
  "key25": "25yBpsWTiFnAPeMyYf49Y4ycdojMCuhDV9q4G7uYfN7gFrSgGWrLH2ETo9mNAACrKBUmJXa3D37dafCXsBa2s5PV",
  "key26": "LiJJMYxHQaoao2cV2PgbG1S7GAcRDZaUW2dVSJFU4BWUTbpimAR14Mnst4ri5KVviXrKwkB5AhRnTdy6JzATtdz",
  "key27": "rwVf1JjErnNHGsFfa4UngzAi2CMC5szpvQSzxYF1QM9XCFcMCXMyMs7yVYaF1XCGYdsUEsHb6yqm9mNKPjUJmzp",
  "key28": "3e3hARfyp1wpMJJ3q2RX6X4qiULomZa4b86jFMg471FJ4pGHNkotFbQhM1iFx4Qw3VUnRtuXzJ8pxDexEpYGnVF5",
  "key29": "3db7uGQm9HmR1VJmgMw2oH1Lj1KJijE3VFC5c9PAdHffqXE2Lu6CeQt9KQWVtLsf6THwZ7jdzpVe15bjRf4jAZ1e",
  "key30": "2C18rZdVmJakNLYGVvNkMB8rZnQMY5KLbcRMk6ia29To7uPAFUgn1Pq571zT84TT6vFh3GETfvrhCiqM87dEmUy9",
  "key31": "qf6KinCXYGv3UwotEzCCPoNeTpWQ31YCvLYk6QapPszuzkWCmq9h67VoHahhuB1SX3wH3guR8aC6PkqwPcLSkK9",
  "key32": "3VTSbsjoLY2fs2tAnsEod4RsaWBMKN6TGRcSuoxTuimadpoJoav4DSXCobza4WNYrHUxRPHjzm4qzvghLCyfRFhg",
  "key33": "5LsLvFkByJGyt7SzKiPWpQ1CuqXKqxgPJzEoD3Z2WKWjkzXFyGmhwpJegzJcL4YzSNXAW3KS6eKSo4HiRFffCRhw",
  "key34": "4dRkB4fvwLo8ujfhNZU6FhLyKZa5b6MSEmD9PRfff3i9cL8prUG6Qk3YReQUqQTUzC9ae9RSFs3FpiCBUCuH4mce",
  "key35": "xitMJWNddSfK5SSt7wC2jSqk8J8mJFozCD5LZa5oEgaZRJoXMHbF7eeaLDLPV2YFZNJaHPntdH6qcfkC14kaDDW",
  "key36": "5LXGpXVW1iJFbtnBdV2YycWQbK3NASvktZ2WHXMhegAeD6AUuiNqPvw6eis8SrfRToLbAcXJX1jWS6gm64R1ND8e",
  "key37": "5w2LhS9QfRPYZq6oWP8fcPyLLmZUQEPzLejYL1xhjSPFVXZAfHhk1DWMKfU8uP4zshnXUWNUjbS24hEfAUiMS9rG",
  "key38": "2qQVo6JykoD6j4YyFGNw2egALqWBgy6kDGEb91pyM9jDXmTWUtRC3LbDkocWqZ7rbsNmmVZo2xxRzoRnVkXzKqeR",
  "key39": "4Q8k2jwyBs1w3WSVmwNkEBxVVWQkMMT37Rg9x8cdN2zC8uTJwWnJQJPpoYy6pL48ferqqroei6CQ1C3G7jU1iCfd",
  "key40": "4akst5yYDbFae7Aiq9pxPw7dKgBfuXwbRMAZoDZYLQnFgA3GXoMNwbwgxwxEU4vXNMx7xu3bCuzHpUmMxmm29GGe",
  "key41": "5K2F3wkc6xdp5motArFsFNoh3ooiF97ey5XrEgsTXnvcJiSpJXrARJ26wgTpBDksg4DZaYJAzL5eYabd2C2Szy2h",
  "key42": "37TTAtPSThmDVHnoDLGoseFwRgPHEyEs1VdYPUQLAyqtunnnZRZfpMRRsQZybjQKedBAoUPugsrrjq5fCVNE6qn4",
  "key43": "57SVpWUeSzwzMgf6FqCSgczrj7WGd7nrY4s4EATW9eDwtBktb5CMuEN1bM2ZrSowAYTffbYSMA3Fx97RFob8hV4m",
  "key44": "37KGrXJypx951RvyM1d15hn9y19T8EMtHq1V2gA5raPTwMTaK4wiJAPwxboPp3bgaPvsbNTY9GtYpwAj5urPDDHT",
  "key45": "546z3JLCSJ3zt3ndEqvk5BnNRXJ1K6gxQ6vuLXDi2RM8iZtAq2RHXRmifK6fYmyoiXNp5wyG1iw7AEgrBuoN5PsG",
  "key46": "2mLW3vZBVSSyrtRfYfFxzNy4WDZNYerHpHE5BdLtWbYnKUNfH8RAcgEDUdsTgPkVgr2axT2nExk216zGYdSppER7",
  "key47": "gGB69pbaJvEvEkVDmyzx41HWWdWMGViram8chZpTesxrAXCCqK2V3d2AEeyrmdJqCkxBRidLQigMWB92UQp6SxV",
  "key48": "2Y9qfcis3C1PgTM7wbYmGruzhC8RAHzC5zspYMp3UoHLkExvRMbWS89ab1Jdog48EyMLucfERbng1A7j7MEdbQ7e"
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
