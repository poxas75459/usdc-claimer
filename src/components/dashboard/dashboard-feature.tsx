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
    "XnAN5ebgSCnYaPFAyi1er1SowH4c3AQxnHbKp1s3hcguhELjQ6SpGrDERLjwWbCxsLhnE8kESKyZWqTtPb2cgf1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57txhf9vfT89GR6HwbjrRZGsHaxurNHhu7tkDknJL2FcRCmbC9RKv8yu2Bd4YpsYWJU5UQq4AL1Zq2v1JqfhAbGY",
  "key1": "3pvBgdcKcU7gn7YRViEAAwY59uGhvnigXjqbG4sDyiDWmhLi1LHYoZY1kPpwqos6F4QQgUFZxAahUBy6StsCfLHP",
  "key2": "3PAfHh1K9ssEnXs8SB4uWWNKMGUbMZtmafptEiUhGx2gyojopzxm9GYTzzR1p6q7zSjtKxQ9zBxUYd32szYMA7k5",
  "key3": "4vz1acLxy29gX6nUAoBGmhvAHSMBSkxq68xZK8yREX4rqAg81NbjtLkdCm8GrwryzmQZdG1h1AZwXDY6Er1Hb8x9",
  "key4": "58aY1AwXPCPmzeQMR1NauGfiVVjedSZwdpsWUocYBVRptNVYGWQXLWg3RHbW7NnDQsZ2PMQWnkYNznf8Z86MsbxE",
  "key5": "651WSK6kCskGvPLXeub8DdyKdEsjzAXzBtiZEiA33EQJEvUkrmBYruZtAMCPxssnLbaSoEeWMbue475agnqmuHx9",
  "key6": "4BrjShHH4EE4YEBmTo31Lx7pBVSaJ9YuDt8pJYREfXuqDeapRXgMiS5XfvxWRPc8TDGrs8np6iHiRUvamiE6LdUj",
  "key7": "4VvBbkRq3USvMq2wHvY6ksQj6EEPKbFmhBYpH16N3DyrNfpbZg4h7dFb3bYfGuFVy5dGAxC5cZ8hz4f96Ay1ytrM",
  "key8": "4jPqjW81onP6fbiBAjMfm3YVxCyh4CzxPesoxLSi4scbnFSSBEY4SBCmiwNAyhf9tiT8DJUq99D6aC2r9moHnQ1C",
  "key9": "4BuGpRp4oeeUsC15QMsWR667FsUCPJtMokvpkGVmWBzXfpwJDjk71rrDpEEcekQ3rPmjrGin42FxBWEoTJV3v5SG",
  "key10": "gB5Ai8Gg1PjTUMRTscstChawTh875pNup9LymfoaXrFSht6fhYQsqM9h3f4cpHjWfGyDbui7jwiG4R83gQvVzh1",
  "key11": "3RqMDTmr5SFsc7g1RP2mfTw4aASxUzRebDh5bBTP5FEXajr1fbMvxssCRM9aL42JnGtsHUzRMXe7eXEYvK1TYm9a",
  "key12": "24YCZDfYncyrj9aK83pfYHPqHDGv31SLLn2veoWewNbuN27gywjMKqZi3a1QDZCBxtxMvdGiqBBMMct8YjgQgCDM",
  "key13": "3fKi5RNWjFVzYfA374QqgfZkAy2y1RRZuKCqh8YSWzJu1cNW4TaiDzcb1Kxx1f2E9zi3NrGqUPamyyaVRsthtWHt",
  "key14": "2g2NQ7YYBpzeEsMtDqYcEFtqxKBy7HPsKgTxDp87rZ2qWLgeQcY5UwjeWi7yBKTthwwJZA1R9rAY2tKpsyxKb6zs",
  "key15": "622oNrwB3m1dbj8wq4Q3RzWMjxNtBXwbfzSjFV7TumnG3hUHAAqhtkj2AK7m42PrJWeRy1AiqSGKHKsBFkeWYGvP",
  "key16": "zZhhQ4iQr7tSJvcX82KmeEYCxaKsBt4zWvBT1pLxzjjQGasPbVjzPCrS3CAx1eqwRicfjGUpTckE2CPuTTrfxxH",
  "key17": "Hmc3RtG6fPqVAWaKj33kqrTYAXhibcGm5HGp4AmVsbXEu94Lwq3Rrzsp85VfJwaNFSXYy68UaLnumMf9AUZYgqp",
  "key18": "5sQ2tWEMVukbaxcTfx4zR9ct5WMUYqWTgoU8ye52W698YFgfnsmqtmfQBrZjqR6WzoyiECkgHaVqdZKkUTCj5PHC",
  "key19": "65GNkhsJLFBdBJ9ZSMAyYam9G2sT3gwRZjrx3Gj25bQvXthYmncLDWPzjQKqTDqhMEobH2rZMuQcTTpKQyPDokPi",
  "key20": "3TEyTFtkb8cmYUxVxJ7EKHDjHqmNAMPmSn2ZsasLA6WDgghgygTZrJrMzE9k2dVfJyX9KzckDsmHJJSwD1fek4mx",
  "key21": "5RZGZ7zNEh8RFqbkpL44VzPmQCKQMxAZqdpSSe8BPPTGC8XF8iez8uW9hMEqQLRpMrrEzNTV98CXgQ1Zd2Nr4AZn",
  "key22": "7c8FD5SVBcW2NuWK91cXcPZ8LhxM2Lc6ZysZqHXeRZcdfTfZcsGx16pARjbbg5f9NmXrQzG4uST2Uk6vfd6wrgK",
  "key23": "xGt7GaHykV8RY4Bjsd1AB2U92mDX2SzFymZscRD3FpD5umEeeADFxaave1zxtCsC2sqtUHVPZPzmNDP6dvR8f47",
  "key24": "33hCsydne9tY8ACjUG26paB2tSwZbNrurUnAi6SWGQT4VBzC4ixnQ124umyvW1rq4magGJ3RX64QEPwhYCzV6hGW",
  "key25": "5rDbzBJH3oQVTmEzA4FVxVt9qSZxxidnQxNzZS5FAgrziFPyuW876SsAaNE6nX5LmCBmoZVZLfDyvQkooocyi6pT",
  "key26": "2eU8nmPtgpGqfSAKxNT7McMLRArqFhm8KFsgtWkqG2ksRfBqdbXXm1D76FQXsScoByaMPNKmoJ3mL71sTNum9toR",
  "key27": "2QXXGKH8bEGVgKzbcSWaZffeuRjhNxZaiZ66H5tr4HJUBnoAGVWSqQnAbs5ZUziDSgPbUk64mDZyNamvDBafoRpq",
  "key28": "63geijjfYHwC74PMpUXT1ySYYumg3yEba4i9riajJeEsHVogJnEp6oLLafatZKCTzmTewVTPXerUkBA4PV1LY9jU",
  "key29": "u81ip8FhMGFGGnGReTpbujXBEBW8vz6cckLw4oQbQMpF6hvfxYqvzPxP3uzbR36gQyUHrybKQTJS1nLZuz17QFr",
  "key30": "2NaXeF4LkXa16jw1r6wYQFDiZJdpP6MXg9L8my66LeM9btirPeG8VLdaNu5yRZDfAUEnAFm7oVA4sd8rTv2ZVZWR",
  "key31": "2yuqtT4Bu7KRPxeU1KAVbDcuJeeP5fBHLbtMaKLfzkS9i1FsmXjamgZrnGNvg6odi96F6m2DoPR1frRV8RHi6mZY",
  "key32": "58L6EthM8ArUgZBvxH3x3v67vMHvgRv84gkdU88avT8FiU8AUMqXWbyPYr7U9wejproidEvA83iew621n4eZmKnA",
  "key33": "5NemHJQ13kMFYmyhKogV8XMkdZHqkGSarR5xAFXiJsMxTpunrpbECnRJNk3yacKrx2h24m8yPXXNHfdRibMAE8kc",
  "key34": "e2PWvU85SSrdz1AbZWjBsUZBGXGpfeMGEjYjkJihkQR85rz9FdqbYwVGYmJ7q2sirWS8UHFwk4arKDPPqCfRZJA",
  "key35": "2z35LwnARqwLDdYMCNHvb8VUvHLN9vAuaed6RmBRceoh4xwHyGzr2q4Fjx4v3Z1HbFsadEEsZCBxUEemvW837isA",
  "key36": "5jWASBRADWLq5qqxzPC8efbz5iRgXA188HjECsS45MQeqBTX5NBKr3ouApa7dg6c4YXtxTnUbJxrPrFZGVkXpWcU",
  "key37": "2T9N2QVWoeYQV4JJCkwy3tZubHEow7T7sLAcwfhV3AgLqpBhKjxzDhix7vfJdtkTR3aVjo78gGHffHv5JTFcyTQT",
  "key38": "2DbJqRV9Mb5UsKZBBoiTcG896msh63x74zsN46nMLM2W57yQB1So7qgmwCVKcZA52W7vpvAX8FMgpwqSRujxaJs6",
  "key39": "5Bpaqp6H3mgpCQA4nXJN5scPsab3MFBHoFKyopdiQeZ82V2BVfnDbLikN96TeiahyuxpgbyW4wz6UXKc6PPwSUMd",
  "key40": "2EUHTAXZNWLpLuMHrm6Dn3ABHmtm1vGu7bpepGj64fVmT63YPi8MfAg6UNWsdbfXpNtwNMqpw3pzYs2q4EMV56Db",
  "key41": "2sUKftswdzBEs6oy8kmoKdAFXFMZto558avvFJSdiAf9nRK4gdSVf9wJjkHs19xR5BkRk2ZLbSExW79MaWqP11k3",
  "key42": "67Wf4HU7kfwWmRHfzfUARQxuWpgjoGajBakGNkLQQVTVm4SbBJiYAK1Gy1gWnPF8wMfoibfVrnkicB5dtypcnuLP",
  "key43": "5mdfftpcTdNttxysPobHvKfV7QJoGZqKeFJPPG4amJC778BfRRhivgmB7bsSrkTfJcgGzLwBR9QpoJyf1WcCHZja",
  "key44": "5MntqbAoSsATicLXEksZnUFoNUwdzRM6xn7Nt59AenWEDuTE9sBY2PzS5cFB4ehrjY4TPiv7JrbEVhcanBrY2Eod",
  "key45": "4a2d2VRpSUVRMBkMPNWxCkuBq7HenfTjBLZbZRordGGYbsyrdFpGWh6HhwoJEf3t7d4kp1FfsFjTUnejezFcEfA9",
  "key46": "2kKskhg1jc5tVZgSCuNQmxn8ve2ak5SuGTsgLaVEonbNQtC3ojoHpbUKMjQhNNs7ca1TGxktRUvYCgtqSQr4K2pD"
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
