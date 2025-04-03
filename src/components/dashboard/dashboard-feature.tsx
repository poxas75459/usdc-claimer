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
    "AfByEkAhbJRshpWfpjVTmLCZrhFc59TUPh6d1hEYYE232AtnSSjKT1qBNeRoLZeZMn3pQKHawRj5kDArF3nWYyv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4amFVJ32uVKVXC8qQogbTBm1uKjiNBCDQjMYELuWFsi3vDNSCQaZewrtxat6zL7GcoasyD8BMiSoBTkTW4LHzvjV",
  "key1": "UrjFicxe8h6riYQ89rvnSd78RVBaBWKZDQ9UXfaWw5JeFjnAhjo2VwC31GsJ1CyWTtAgqqtHw3YYTq7guWaCDbe",
  "key2": "5WdsfCecTsqYCsSx8jkqWLnTfK2buuPrwzDptTz5xnCG8Fx8126wFe27wa8Eju4wvs9zsT1wDVFoSkQQsLRvLffm",
  "key3": "2bQDqXVVs1EDJ5K7bho1zt2tYiYUDVTCNdnjxFgoAQSihYTTGTdofoV8qeSTUv76usUTgxarvgsMEUHZinLRCubn",
  "key4": "2MquBXsTQCcGopsJoGZqbADJCCV6FNN5MCJNMTX9XYbru8RbMQY4KcE26B2MD523kbbnCcxFCxPaxx5fxrxEwvTt",
  "key5": "5DMpwRvFZo3n6YyNVy3XremRnkFm3Q9z6JSsKHG1QL6nrwuKVSybmmZNJQDjiaxfdQoYj5pY3eSQswZyprmQ4a3r",
  "key6": "2ATUN7fFDb85JwnVDwVwX2JpLmvnc9JACVQAJ1DepkMxTFAX4ububQSJ4b2TubHmpHrx5pJrjKdrf5jArmvApW16",
  "key7": "sEG67iaQo7SF2rRVu6ebiwSUv6xhniPMNAhPA7m5c4Z7DN9wG1VNXmdtq7nyzjaFCnRUSNT1NcyUWCyubSv6nMr",
  "key8": "52CPVScvLMQfFZuQY2boqkXwP329gKFKtEVevCHzEZWDSUXdk8LuuNtYWxtt7pNZhPo5ghCW2jXryfrYWrneK7Ps",
  "key9": "4pTaJRz3RVU9kPUX5Q3u5X9rfXdXyQAD4ktCoRqZfQqNy2wDAx4N5x13gfweg61c6z1dK3KWPpvkJVRpSoDHucQw",
  "key10": "4g97GEqmLYwpJS5ovCUSgpiq4n4nDLS5nDVBZjB1qpU9xJzjE8e1uKn7gZxV8k44PX6VorjRVU862d2SDrFMHiFF",
  "key11": "2ds1Y3z89DiN6w1u9TN5Ae7WU1GzDzbWCgYnrSpNX6Qdoid8FWnHi2sr7J4P3QMd8hK67vVbew8vvvNzcFsQ5Sof",
  "key12": "66ebwkyqBi3AJ1awBaSoo6bmq5qcf1FMwCYcnTW7vdKey2GgyuRoD8ZtAUwW5jhXnNQznQJWzyvgK82rurtYSoTf",
  "key13": "2tvPRvh5DTgwBPMvTyer6FDDM9qF3dEDmSNmxCqW8t6eKBWoTom8mq6SRFH3vqpAnSpLp71mg9EZBjBZTuTFU5re",
  "key14": "g6hQk9655bTEjWbKiM9EoSBmnp9rCicu2MnonvuwCuueYdofy71KcXE7ynJe4b3L4xA9X38Kvx5d3wXkuErT319",
  "key15": "4cQqkpGqJUVBiWMmqC6D5rUdJySDGNWKVPsj5eau4fgHq5Zzk7oQHa6khdx3PcLC2WTr1D4kUmH7RnhkGG1dMKBa",
  "key16": "3Q8sTR9Mb7WBXHJyQqoPc4ZhPtBuExoJrAx2xDHg4TQUm3unckKRDBuCDU9XETXAsxyLJVfGxKUzGsjoxfthFA4M",
  "key17": "7Xi6MwV3KK68fg5qKmvEhGdX97osznJxA3P2NzUC6trgBQQShznjsj4wYXFQmPyxAqDrckyoUfb2ESTV5XcTr5X",
  "key18": "kkvbayzqSv8npb6EZiEnHzkqRmRLiFuksMnGjQDF5zu9HQzqh8BxyggZteLS7tBXRcGxyXmXMxj5rsSMorxwytY",
  "key19": "4zrfcvUxfta4JeEyB8mK3tehn29tkA9secDDgdZth1TvPQ9reEtpiQy8BKjoWVHQmPiX16a1xkBvw1ymPvjFVb9u",
  "key20": "5ZXKUyiNCoWZHeF41CcLxATWoy3adaf9WypaKMtSpztAcV5N2of1jKmVtXMJvnYtTTF4e6d1CwMus34XZsfmgJ5V",
  "key21": "4F1uHTtBY3CQLpnSpof97mtjJ4pFzt9HeDFo92UPGMXcsxP8v2c3VyXH6WuHvyn2jHdTqWAm29mCRjY7jFNohyFq",
  "key22": "5CubkaFKCAJ52Z5EaeZMYyKLZYgWghXzkYNH3zvaHfDCHgSV2aKgPmYyNgJGKPWDTKpySJthntTWryWQgci4wTBv",
  "key23": "RKHhZYMmxX4R265FGhHG7bfeVa6dJ3wWULCEHugMr1RYgdJZPNhW8kizdqRQRoZHrxho1noQjBidMLQgBDnrfQD",
  "key24": "43AadVtoTtDwqMVfo1Ydx4L2noYvcp9XENYsBRsQdBRHt46o9DgHzTNkTbRM8nhBDtoj6a9a7bbYj76Qo6MAkTs4",
  "key25": "5etK3527VXH8Ak4Yc2Q4XyBfhFTaPw1bdSc2FHGrW1rg7B3rmNQiUKYGPD12pQhRvKrKw8g7TCKC4eM1Bpe6k6DK",
  "key26": "3DVCKTgT4CvFShWFv2nccqyPCcfF4BheznSXeiBhftpKKkQsCkt4DwjSLQdEpyLQAD3RFarM1KkQoTh81MrhK8PV"
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
