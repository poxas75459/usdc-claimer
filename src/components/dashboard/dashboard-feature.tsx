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
    "4sSau7bVhvTVGxJS8BBEbavFM2bymdxXdwBb7rWU6XLad9wismHYG9ykppLTb68VMz5UoRyfNF1oSx24RPkY3mzH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Np3piA9pn1wLD8S21xJhZYT9qnRpPnVjWvhLyr6Kqx6j36dQPGWaGrqkoX7U24e8oGbfe5bcQgPgDLLWMefeac",
  "key1": "2SddLSpwiWUXaR29kWoKbk5yDDJPar92cjGdKHXykXxbirFMunF6TdVXvzB4LwaaymCvAEzaCuBQQuyKxAoS8kV9",
  "key2": "52wQBfHd1CGPatTonhQ2GLfV4oHGvRXN6uYXe3gRgGZ7oiQAT65XudEk8qXgSbVmNySmKiHD4PTcQig7BDcJN5En",
  "key3": "b2vmj4qqBnKGWH7Hr6yd68DUspFFAs88U9jRmat1C4bJ76XurZbEG2ouQijXex3VvnghQxWLq68Nte6d3f49i9M",
  "key4": "5DjxyadjkeSqv97moEMAEVjHVvrZhv3jZucKezEQhJC2n4geEwxoaVapCG88sk7aEkhJg7kiVef1yaWXJgjMeaSN",
  "key5": "5RvAnhLnv32GtxL1CikeR7kWFuhRTQtGjT1q3KmRwpMdvKHGi8ARV4L79Ak3LHtGjUtpMSiQBADWbwoXcqNsrKHD",
  "key6": "49ChiXmRzK16mTzBZQwmAbnYLMvjxQ5Mjv5hsNFxzQFXbu9AC7cGvVPcdK6vdfa8gL5krih7XAi5foczzMnrbBWF",
  "key7": "vSBKS3iYY1nSEPT3FWzhBfyquPZvD7vKLWMJAAxzFpzceRB7tVDRd1frmRpVrBLvdE1c6hEVdZkJPQDh1LTtjiH",
  "key8": "4M8ejsTvmx19uwJAV5bmj6hrvp6CvhSbt8UKdEy8SmRMLc1iuDTbKChxeadTgbKHiatHC4jjnf65XoZ3pms3BD1q",
  "key9": "2Cx1PKq75AGZZCk4ciitBC2GvCfNrSGukDNHBVTiFZfSyYSTBEP81s4WfuhyRjkZpqkhEcYEVqPcGctjERZKnYS",
  "key10": "5dn6P3uQuwcV5HBBitTzZMQh9UJT4pciDitewo3hqBTf5uZv8UTY3xHWYWGVs4uScdKZZ4bgyQJeuofbAywCWp1V",
  "key11": "zeF14AMukYCQhrdiv3ixh9aSrRguPDTjKU8sD4JqC94NL3ktXjP97zq4ASmjBiKekfA2NUgFwhNDG7SNhp5H7KL",
  "key12": "2FRd8Gj2pcDv2J3VdmQpu69haFkc8SRJ4V535Z1iyMLw2cwVCmAmiMXWDfGDZ1SM3hYwW9JckwFC1iUB2scx2MuV",
  "key13": "3SM8kswYMWctFM6Xd3AWnpFehCuZrq6VgsedtT33iL2E4KGRVfBq3iV5RsHQbJJXu6FSp7K8iCgs2LxUFy6HmcC3",
  "key14": "4vTJ8thq6mX4ktjMqKQ1kenb8msMCgmQ6ntbKSBZtdZkHMJNnv5CYdLwz44rZGvLEahZpn4RQYmeMgmHHUHsm8Q",
  "key15": "35th1sbpfKgL7SL2fv1Q71SFe3eQZ6fWdorLie26ySirhEM4TEsUVqx4xJGAwf24kowR2oAyrLPDSt6bjuYqbjA9",
  "key16": "3Hy4UPNZjMD7ZZz4R7pyS93VPy5Kx8GuNX9BYgMvetQkBDqnxiR4NgApmZpEnFsonqJ8Gg4vZMgeb4D7oza7qEQV",
  "key17": "2JN1UbJ1vnp7NWiTdn5DFRq5DdrpqDHqnR9rV9nedz4pwZ8tiJiTetg51w7jcQgMaQu5MzyV2CPiFD3CPnRt3UeE",
  "key18": "43bMYjSPNxRt82U9fzmTyhWK6RtEKjFtmUgqKrnCdy6yiorqmBuiG8FEi6p7Q8vRcEvkdXqUGF9LZLdGpJTrBCQD",
  "key19": "7cq6hYcYAtiGMGCSnVziRZJcEgKo2cXXFHQrVwo9Jx2UeWhTTCUC3UkAE5mFMkZ63pyVkYeGcUCuNjN7imrxFHC",
  "key20": "mmJcVCp9aFCuf7Bx2VXRp7mNy8usLsnggFHbKfkmii9U1C7k1e1eBPmUCxiDLJnZKvdN8L5vDXTjtv2A74hF67S",
  "key21": "2ratHbTetyZqsHZkiTLLB8URwDnijFPsYdy1si29NnRho9DF5fomGyM5N9LzoLfFBCNKjoEf25fEb3YketSSvHZ9",
  "key22": "4m6eK4949EYx2Gcdb8BafzJCDWpp655GCessdYrTM5oJWwNrrMaS3aeedrfYtbW87iURANdd9aFh6ZMUgZcj8ZMq",
  "key23": "3EPHQ2ecvMTormAh2uAGaLPJ6By8BB7RN3nFvHGu5vTnmzafmRS2pJPRJGDuuZzQsMkKcLP3TUJurgDhHfNJCH26",
  "key24": "46pGdPYcf8v6af8yCtk258b1dPwbfFvN4nJXAX85upDgN4bR3wCEoJZzy24n6w85iQVuL1JzskdpwF18cgpFu5cP",
  "key25": "63xnwEveqSrKXmV5bC1Vyj9P6SvScYZQ6ya6MMS8VuCWjVcwFD21vyQBoBoimXkdavMQ66hrcrJqbHaAsLY5YK3h",
  "key26": "5iLEQz36kt52K9DEB27nwHz7pfDXHyYnVfaY8dbJLMJJN2bcvLS2X7GTRP8akjhghX8WgshmjBauLtLuWweAPqjN",
  "key27": "5xYEX1KZqduaed2mNJBeL6brGntyqUvG1V9hqrGPiSKgdgi95Z4BaoWtBH79FrSwzqocMweS3nK3ZQ1BW9MctpZq",
  "key28": "5BFGgCcRjVpcgSSLQ4yzBDTQudyugZ33cAw9iM17kw7DLwGwksJPHyvYZhVXGLir9RZVQtUf7v6jQQFVBpNS3xya",
  "key29": "4vPHkm9Utoo3HZKriKxBcb6HUPHWrnw5spdB3JDhYqFZsTRhHN2LrJ4SFuS7XiR7GTQsFg9XvFXGiYQTdHbWonus",
  "key30": "4MxFWBTVb15F7nSatweSvTo4hc7eYuGA4LkkuNq8zExrva6aiv4ZsP5dp7Z4nUokRPv9WTXmj3duQupWzCcApEin",
  "key31": "41SCnjFgrNcWDL4HBYNrwfcnFXThvH1ADFQToBhnut21EHUcQaT5eVi6VY9ePFWuwEVMCLxyA1geQeoTanqnbshC",
  "key32": "2TsHm3WjucBw7T9GUhx7VBSC3ZDmj6BKdAF8dCPtspjcZmt5kVLyExWKpLHyzXzv7JngkTwSuVRk3XKHiS5tcYhs",
  "key33": "2iaAY5ewvKsmpd4FEqUoz8x16zNce88RGHRt25W4A9BvEt5v6N6uT2Dh9xeBoSDa7eShdhCkAE9V6Cs8BGckqPb9",
  "key34": "3erzPuV2yRDPqW34jEVxXxW41fqswycWKayjMXoejtiyKfhnky1F2cMqfEamJFFM3Q5Xa7RDTbCgEnsrCcRbUj3d",
  "key35": "3wk1w9CRg1gjsHj2RXJHhvC6hz3cuZ2ChE467rzb2q4FN96x2xTh8XnwfqkCeb3Z2fpDSbu3feYTLqQQivuFN6WX",
  "key36": "5mFxjp7myMfMmHLaDuNMGwJ2P5p1WRZdn8QXvd8fBaF5SMJ7XP8NayvEbbBw5C7KjMUNT59yZe9yoJGV6Vvn6tLe",
  "key37": "2ZqmGsuR1PZ8YNRkyASXUNyTPuKbreCiQcF5h69j2rrk6EQKYsRomvoTUaKvKe9PkawmVwkrTaU83NAT4LLrxajz",
  "key38": "4TvCN1pzCnhfhRjQRMis6v1LmptJNXZ2fMpVZVMCa3mpoRa2gpBPwthTSLDGfXh5LPJBPjXgqbvekNdWGNoXHG6h",
  "key39": "4Q9Hp4oagXnkQJuj3EU3abePMMHJDL1s526fSNhs2er2fUAVwmb7hcavx6GHoHFeLW13XxNPKLaZe3PPb8c1ppSe",
  "key40": "55EzrwdXXi7BhXFwrQRtQTA6mcgG6phRgZmygJMW3WsZJUiYKDRK1xUv18gCrf3BmFFmBnRA4g8qj1bh7Naz5bQ6",
  "key41": "2frnXFLodBThTaE4hQD12kxtuvL5AwqaQPCm43B2nmANFymN5f7q5Du2WRvBP7mY6UMFWPrUAZsXAW4eHeiYaM9j",
  "key42": "mqkm9czwCW6JDr1ToEVFuECwkgtbHUqVNwmdz5Ec4u4oW2a5CTVvbkx1zYRqZ9BmiHTFn3tatkBTyLsSR21MGZT",
  "key43": "4TVcZ3RGVSeJ76Jcnk3YcSJ4h4nN2FJLgALDMCeE2diLc2vB8Cmu8WqtmACyc3mkm4YjeUV4Arc29thfQxYRwQGi",
  "key44": "366gaSEz3ZX48vt8rDLqYXojCYQQ54Qus8jsbRwVec9TpdJgFMKkAxBs98sajuwXfJetiMF5bT4k2sHB1wSaQdpk",
  "key45": "5K9eTkwWnttatsh2kM8Wpowf1QBf26RPWSE4X2bkz8fkUatggXVVcQYapKkojMzkhWw64m1MWsU8a9Trg6ADbVm2",
  "key46": "iBeBcnG23ASS5f45oyv9ykhdXDy5vB28dZSBU7yXcBHTSuUzVJaj1bG6TqmLSKhpxpy9UbGheCr6hqaSiZdruzx",
  "key47": "2uRPVHDGxNrqYAjFFH9joXUfZBduE9JFbSZxy2EFb4zXkdycuvMxkqCX64RNdiUixWC97my4PMd9nXfZrcjXmSqc",
  "key48": "4G2HZN2sLYZv7DZnsQTy7PqCTYdLVZqznhLMYDygPSbyY3EjWnmcLQLQ1A1vsJKWumRDCZsC3UtxBXwLSMv1S1cB",
  "key49": "2GtNfRsJz4B2zrhCXV1geJuyBaL5oJQ9tSWAM4tHSCA2CXiiEF5K9aBWdyx8hQLfJf5iTki3WpNSeWg1wJ3cdZBL"
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
