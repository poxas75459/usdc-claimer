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
    "4RzTBQes2HcyG92h6ifV3PsfFQpW8o4vpD2TJXEPKDTx6VzJ34U73vnZCtA3UcdT4oiyRXsA23fibaViipDXs7n1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Wziru4HgnGfQFwi9KEGhmAMfhnEFfTSixE7A28DEoTdenBj4wZ2HEs9FNbwDtGG8bsL4ZyRmHTXf7GsfXFmMS3Y",
  "key1": "4SBiopiLPzAgzcM3rf4tdDaC6K6rBAgW1aAgq9EUGksUZS9p9gXhimXPTx5FLKg2KxDzXEPpmU1jH2EVXAiqRhRs",
  "key2": "4R2v5kvGJd84iXciShkrxCxmBaYqVr5EzmtLQwQN9uBNqZmpiji2VNkjEPqWomHBUENEAeP7izBGi1fne4Y7wzmc",
  "key3": "3nm6EqxRP8EA7U88SQmMKbXhctTKrh6ncPgbaYsybsRZCkxpHDZZzBX4B9PcqWmBGrky5SKreC3T9MjYP92SNk6W",
  "key4": "3f1FAMJJADpXK3jtXhnnBwJBwjm49sJ8juBgoeBC1B54E6iJU9zT4nYksUv1JnvmECZEkoZqmg1JmCN9XjAfzZAK",
  "key5": "24JGdbYqbYvWcmnEkvc9zZzrKf2PD2TFUYAayXJbCFF3WEx5yGRx6ut3zLE54etgrb4ZTz25JQJX1MW5ayRWxz1r",
  "key6": "2wFLQoRhqmCgnRHq91pmnm1iKj73HccXwxpfygKMwfpUuuCFZCaHE7qusfLBn4W5CLEjdxChuwgPH8WUPd5To3e8",
  "key7": "2XV7chyPHzkM1pvMWDZcERgB24syDtxypsXvXW41sgwvnzLNfaV3xYsgDo1uipHGSSymF2eoE163hJqjiciUM1Lh",
  "key8": "32zLHMYVSVJFusTLCLdLbc5JMWQKeP5uzFPZ63qbdGqrjtRYGR67C3oDjWbzyQryVoF2db7GwLNAbjMw8MEg6AGV",
  "key9": "4ZVFxSezomN5PymnUDd4Mfj2USZKBtSSKFXhWnBGXUZzZsLEXdjuyHYP2tGUVL5ierwFG6Ydwxc1zs23fujvE6gk",
  "key10": "5JucnEEX1CbzAitAo9dpCvWpyw1RZGPsPPc3n3hzLBgWVhAi7GB2AbP7TRCz4FwCzQ5i2EsgYVBRCLYRbAzdJC8s",
  "key11": "3QYHeDatREkn9N2yKMqXgMWnVQMihuXBa6MMT6AxVMXBQTSp4b7WrrzRrE1PFxmw9Jh6njSjKztzMqNC7AeYAp1N",
  "key12": "5wSyddR8wSzEmTcqMFFRxDUfx5H6KKUr8T7rxiNcPBpi6riwf6ZzSu7nkd77Un3PxSEfi1aK4FJhRxRSbg1Brdys",
  "key13": "36EWAwxkei9dbs2nkDbn2tAHJjGomFVFeJwmeY1U6gP1ZPjt1RCZetxZbWsTbcP8qfZVQZAk4zCLZ6MX84tySrMT",
  "key14": "12aPVuEhAwSZnKwWhp34cMyLRE6zu4aa14a8vRea8sFi3AB419DMVDF7V5rbiPxiZDEWyrGaJeeRcTxDPnYUNC9",
  "key15": "PyL9pSmQiCcUmYFFVmn5ZhMYt3Z4PoRYxmJnWK7hmfykoiL8bxFgkhr5gsfj6NftQ6Rph7iogDwYE3VQFEkXz6Z",
  "key16": "4cFoLzU44mhkd1f4V285ktXfFVjZge27pjT3DbpsgR5oXtby4J6hrdXZX4tA6WYRYy21qKNnka32w8vVLHm3qDZU",
  "key17": "2SrW2wmNkKLK57p3KtcnAecspeUGwVYbogVcYLAQq9or9XenVZ72X6ibWaqmuL8Fmrqr76uTy3VVvLvwJUXTf732",
  "key18": "3xxj49ffuBYDB1WqLz5VvXFi1JJiWA5aQfrYDvaKCsAaDUnWApJ4cySMgjy5CdkYGF2PRUvF9GVuUaQEqVRdi9w2",
  "key19": "2bhUCrSHeDwnM3EPZkbRmzPJRxYiA12NJ5ab8HK9MChAusT6iHmq7MXAqbFNKeKJxUpSefprxo4jYhk5WAyKwDi2",
  "key20": "5JvTrRP5aAVqjrt9Pv25vYqRawMDAF2dQu6Ka3dMCQNTE2Ve361EFf1z8QnEoX9C89wKtmq5wUFc1jBapKwyziEE",
  "key21": "4AvD2EP1R9QZHtYG9tXVdzS4g5fWrzpN37WqKLDCjPLSdSWS2TnJ1YxYAJp9mJYoBRLgdVn2Rcn5FLgnX96cEfcN",
  "key22": "5QQ5WHinjk3LHV4qXBwq5XGioyuaxALJdu4xQec52WbAjQ1T7JNeaaih8AE6dwVsgpuYM5JbpfvpWANKAMXJxy4M",
  "key23": "c6LY48Gg9UZx9VeY1L1R2VS8DZmutny75S4ecPeCFKoVrgUVDWxxxKDKLapCG8So4Hj5Px9TFzKsEzm62zES6F5",
  "key24": "4Pn32jTKMB8HNrLbtNc3N5pES5TQpGxFbHxm4haEALhmPhw8L62ZuKn7B43TR1YaxGTzLNAuBK7Zys152RH8g3Dz",
  "key25": "HdHC9mMTphB6EuVrojTKuw64ioezSURjSfK7V9mQQGexk2gqwjfYCpdHYxHdZSVwkReQYwqFhT9AUHxuTRaAzmS",
  "key26": "63dh9TzUmRHFdNHU8gsdvjsaLiGckQoyjtsWkApjoyunmUfzbQme1VeGyEawuzq7e2AhNpZV9JfAgmBgNBD2c3gC",
  "key27": "65T8MjthSSccE7BLuyzSWSTnEzgobJa1oXVrAzWbLqdzCCwmg2CRDjuaFXHE9t9QdvaUEABtmyUHohkgLXDenMQL",
  "key28": "5VYgdQnZ7LsjDnFw5Rb7gsEHKcyznBXsCU5iEuPAhvWseAqiixNrPz7C6ZGRPsFoVGWGLEvCf14ohRMYAhaC8F7Z",
  "key29": "2b8kQEW2oVd3GJ34w6Y5AhtsRPFNxN1aSE5ma3v3bAbJ2sZ8192A9cY8fB9FK74XCPK5MLPKctQXnbyoRky3XzZX",
  "key30": "3QCJFa9xTg3pQKqWGZmcwxSUHS5YGccAHrtikXkfAyHFNNGEZzzaqrBkFPmv6MMcKeX48j9Fw4ANJxnoaxVP9mPY",
  "key31": "3v8ed7AuPKs4vGvVRj7JGJJAfTbDPv652nrQpbubhKy1goVZwoV5BWdDNwaA9ukfzWE9Na4uTFxdmaq9wGhkUGKu",
  "key32": "3dyEKEfKURPgdHC82pReDa5ruaC11PJRGh3MJ7mbUZ1cdkwaZ9vjHocbeMt9g12dLnpvGVaRGaMGc655fJMcafP3",
  "key33": "LCJjMgqTP3s3ZvP7Yj8hjTprojM6nhBG1ETPEU8HU4B3jgUg5eFZY1StpWYG2uD41JzByDcyN9yphzsmHfha8SX"
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
