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
    "4nGktixr5UJUoJQCbCqajHjfX8bzhca2wyjxna2txxbSoxbb7TNazXQ5dDhotsx8hQYAukizZVAcPgwHT1qVx1WX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RpqXeTCz5FSXyZYKVhb3GtNkRrzYaEJvH5dybtdk76oHNUJasR2QPVa7tt2swjNszgVhxxVEhmawbAoscd9o5sH",
  "key1": "GzversTv3GVsUmhJ82gxKoDEGSn5VmjERdftUkXt6gDZJdt6Kb7gPmuwunsJTnuCMuxJLBH699vUcjXBBbv6uvs",
  "key2": "wZebsoUC5rw3VamJJ31upuJzFyfxdyZ2ESEoPPfmewmuN3CxV98KtSG1oJQqDX2kBZo4t3aLchBEErywCDc6CPJ",
  "key3": "mvWzViJnFG68o6QCsLB34SQqdMpmestK1qWp4zW4syPnbJe4uVaq1nxybUYwHPX8VN9R7KehDCcUgq8HEodXsrD",
  "key4": "1BtDx3Dkz9R5TkxAB2rc7fiq3cX3Jw88DwY9DjWG2kBXQJc7zsENnVRMTCBqtXzxufcmmpPZuwK16yMgvFH4QvW",
  "key5": "L395ehg9pgBBVJ4e27vcaqcRbFnXUmd5bkepPpRpxCvyABC1zxvHyeMz1x2TJQhSdXQi2v9RtXiw8BxztLUFLSn",
  "key6": "4UdHUEUsgd78N7qtiydsCCddYEGWsLZjRUV9wFvrZjC2zJAQy2jXVzCw697fYUpBdW6RbyKycZLXVdq6K977AR2Q",
  "key7": "22BKHs5Ahm2V89zMxnoiDfoGk5vENgeesvfqe5cg5umZj7R6TUqM6QmJAQtX5aWQexoCz1pAFmbirPo3CsDYPuoe",
  "key8": "5CeyHr9QHzYPwutnL8unsjiQcf7KkQ2xjANac437QFejSG5fhHV5JXq5sKHcNJ123r2aQUj7EYdpH2NWm5hUX2Tv",
  "key9": "2f8gqQRSXCnZEVNoYEaiDM5yjY5s43bVPQ6NKvbHpu3mEshTud8NkX7n77uP67v8VR6NHoqXqrV7iuPuaceMqTk8",
  "key10": "5KA2oeJwdm1mLSm5n4zEXjJ7QYwGzGJXgPjmH1vjSV1f1g9cqjKnHNx1KcpnMRY2ozZFPhD7KvbDnKwENgQ613Pt",
  "key11": "3qc8yFpHsMH8PkSwNfE58QsadqBVRKKbuVTY1HL9Dcs4DU4hKnhsucLdN4cp2ti5a5K3yMsmLF4spGkrvimu5pi2",
  "key12": "2qpdn8qVNy2759ww2Zk2E1VgeeWpnN2QW4YB2wh1WoPZ76tqmYYGyPJgnP1gBJMUd9xCrmELxXPgBWCMzfSQRB5z",
  "key13": "GDeThyKikyFqD842NmZwkkecTJNjjWdLcnJnCg199w4TvAuAgUagknKXVTrJXs8XfgK8chG7nP8xvWoPAypu45k",
  "key14": "2y8zwNSvtaHVdtTJ7GbKVb6bbRv83FDZJjhGzNKuqpgabwhqzFvBC2bxH4wappAgfjbFqTVgguZbC1WyS7BZ8Whz",
  "key15": "4JMP7KRYhN2j1QtKtYySkfY3PMvmB8czZD8A2cUcAe5iDxp17bKkwaiPbCYtzdf6g6XSx76KGwvJ51hCCmCJmKfR",
  "key16": "3x8P8rmVnkKhSch7Ja8s67ax3vxA96jrezJAWBeVdK1M8JNbMN7qnZZGr9aZtcmwvS7niqk7fXNJQuZTKYuT676L",
  "key17": "42vsna2h3Bshe55BHDhbicxAh5NwA98zmUjcJYsDPKvm2Ra9CH51diUcjC9YfSkErcyCtw62gsJtq96UuY31qNnT",
  "key18": "3BouzF2UuWj4jSNmvatwApirzBQ3NTnvGrY8kB9ytsT6gJgX9t8Y3Mpg96z63Pc1sEKh3JAQnEVzq2uHi2PvX7Kv",
  "key19": "2BfRrViQqQaW9cdQHe8zn4x9VrwdotuAKknpqiXNMfhZigAHT7y2PaTEZ53abPB6H5RZwvF6tkHqS3YpEXZebaFM",
  "key20": "2EnszMjfqwDZvdnZqgeQGKeu532gA8xqbVFL8b4eutwVPpRkLLbxqcq7HPqCvFHN2m8yPiSh1ErB79vpz25pjG8v",
  "key21": "UeE4K1ff9xeziyh9MHXD3yVwr9kfQe7fLhRJnUvEB9Sx3SDfjpuZ3wLDPp2qSLg3cKqtRPsTz9AtnctT8LjFg1F",
  "key22": "ig52raZoJNYiaF739FHujdfZ79RHVdWRkumZwBj5LwPuKsKAniqFrsPjDJ57oixygMv5YFe2cWFfMrRXGAyrQWt",
  "key23": "5gT6D6qx2DvuzGuzC9UF26CD5mamNTSsucAEnr8TtUBC98ZiQErLgQWJnDQXXyG7Ai7TVxd61ts8CyoRXwUskRz6",
  "key24": "37KmkckcEvyKAdbGuXY1umY5XXqVdyiERZttCcFKDoLm4DUAh1itCbFJwZVyBU5wtJn5WRGwa1nqDJRwzWkr8fh4",
  "key25": "2bCBj9vcb77PJoTCxEomJ6WSE2K4p4BdVfBKQreZNcYZmSxfdhMc2Dnim2ftk5JaozEE7Z7o77hniBeHqpr2ovpx",
  "key26": "5oWJG9XFv7ncwyG3ok4gjjiLQjdnsXEWC8EVUbKqjKsuf83CdoUyzzv3FigyVuUYDcP7noBm1aMYc9TLbrLmnodt",
  "key27": "4bvwaNP2XiGbRLXz4svcUhKhh9doMugEU5Q8G3gmb6qXr2sT7Ufdub9gHwGfVvLedQNKcHFHnK1fUYZ1CNJmJQ28",
  "key28": "63zQhN5v4KGuCCvQCoUURJ1bwVQfonTv8KQ4rAbgmdjMEjiniF9AbbZaF2xjixEG2kffRpAt5F2LFsXrRRPtujJM",
  "key29": "pYydzrECGBau1eYFF6rqtQupgmU9HxSSMP7rDxvt2oUBaZZ9PAZ9LJKA7cfw73X1tgvjJkffjAXMSsigC2MZ2ua",
  "key30": "48kqH3Um1RoW2ejWkKapnHNGobSfs1M6WiaWSxmRGbjXdHBJkDqtkccjK3msVwXcXkLgUp1bez8NZQw2Epq21Rv9",
  "key31": "5x7VU4KL6MTXJCvkgzrXrmWgNr9mWTuYLSSWNA8dqd9Fkymzuo1ttxUJNTxy4aHc389PCRaFNXwMHf8FJCJDHbXY",
  "key32": "75Rj58UfmzReCPVKLiSo68Z6sZQJUZu1WBkV3UrpD3Mw89iX9S9Kr3S4hQ1hYYfDFsyrwb2eTS7B6BB4SnWzTTp",
  "key33": "3d8s9G1d8A39tdQGR8gvyqx9ihMEySvBVtGAcYmKfsjBcpvEPMvyfgnAuWc1H2iTHEqN4sqQZdXwuBpRJryfS9gj"
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
