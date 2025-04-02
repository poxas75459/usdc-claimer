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
    "431Y4CfR6X244zaRAoBJybsR5PdDX3KmxZFCzfZksUsrE4H1W9NMUB9jtoVqiUXSUtcr5qf3R3jVD7NTcBpD4krc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27p16KzqWRVzEcCNxNchrJs9TPA9SrozCM7VguspDH47qrKhGrxnaQPkj97GwJWvnr4mz4HM2Y2smLFMTVYyEZtY",
  "key1": "35u1zKRtja7infpjjc4uUDMh6ETmamBCaRNxAi8Etmw3rnE4tpwABZLXjwKaijVeM48YK6vFxxrpUExNmNkCom4m",
  "key2": "2cmKccAQ5JEeifN2MKZVdAPbB15aKJJX6pof4PYcxqmkJpudvfJvjDgL6BbX3SszRj4TqiMMcamRxac28dt7UjGP",
  "key3": "4T7uCoHQRd5bdPnmNY2vkWXrBsXhYBQ3FBZEfpkBTQe3oWfhV5cAhzvZeJBycvJYif77koJGUzmAyDSmQv8FmUMY",
  "key4": "4uo9XjmLQd1soxHqGs57crbBzEf6JUsGvV4PgL1fLLbNNcbu4K3Ey4vG8MuN7DDfJWzh6N3yd8bSs7fZvix58mBt",
  "key5": "5GSwY2J4oCxApnhnGbh4bZJFLouiYVRSgknU6fMeAd1dqki6ApCZSuhYU6QZQbMDH7UmkAXHZ1GJzK8o1obFvAu",
  "key6": "3LEAmvUDs9Q14yCSThrNWJ1wSub18zr8r1ic75TPxkhRqL7xYabPag4vHw9YmiJrjCFursbkjheCNe5NdrZhksNa",
  "key7": "592astEQvoV7sKTms1BAWgNi1JX9eDEXZjbejLqbsHoWkVd7QooiQCLwF7TCYCcgsK59ftPf4gjWMNTj4uwhbmyt",
  "key8": "4Qii4BScyxrj4sA4wDAyfRAnkcdhUy3o8kPCmdE3L4r9LKeFWsCPhoy5HzazF4i3iQ1baPbimBTHirKZqEMjs8XC",
  "key9": "mMEt7HCnoQsdZbeWagHwfBqnudsMv7zxX6cwX2Bc9nmWWnBgE668rgMPP3N9jCQWnAdhBybWtpGpy77Zdugg2ne",
  "key10": "24euEWxCqDCtQXDoa5amezJA4s7fKTZwJcTVjrji2uA64UcXhWzN8j3VU2EBMkaYhfncgV4VssqMo6NbxxJqZtSe",
  "key11": "3C7vUNF4ta5Xmkd3t1rV7LW1mMMGRqgxEt3woSxt2RiwXuT7skgbPPrrXFYjArFAUAa3zCYwU2FAJTTYYeU9NeHN",
  "key12": "5Jhkq88UFucpUSY4Tx5rkwDKXwyMbF2ht1sXQzwinaGRLb1gDtV2B11Wedpp8mzQD31XQFFs6y8GcGGBte5MzcjM",
  "key13": "572GEMjTVunEsahAEGygJU4BeHAMqNwwZCzduxDFYZdisxtigXWCVfq7RVeot6F2DYLTKou4WVwufqmfdjmjRtuN",
  "key14": "34wKueF4sDt8nxVWkV9Xx1qGuvxEBY1aQCxwjF8Y8c7GaxNhfrdPK1HVPdbxYX42jHSXo6ZvE6B1zwFbYQ7c8suh",
  "key15": "iqkA31GR5cGTvc3qdAhwAcDHtBZQiuESFFJzA9fXk99Xq2DHD9EFmPEnffwRrbgsZRYe5kWSbqDGqfVPsBq7dQN",
  "key16": "4wUGGDy8TrgETR73hKjJB5ftCFY82vKodozGu5rpAZiyhY1YUrdYSX2XACM49TLjkVChcaPXB98xGRV9J5bySPp3",
  "key17": "3j64UYTpYArF84r4xvPWcDPGcahNC1Hqg7DwmYHVC9kTMZUBqEBYBxmKqePpDuCWHcG6CnjAfvDHB4x8KDixZhCo",
  "key18": "5uK2rpvkyRZq1HR8q4C2J3CKfLmMXErEMqKnFkMgXAxKDKqD5VtvJxtd46x7cHrrbZKSzSYoswtgyXvZL5g1CGsS",
  "key19": "5ZHAgPzTdXpH53b1QjWDGScPPQCYdQxtZj9XQ1s4Mrww4mbN4Zgt8K5EXDFSHWBpY7RUPdhTSfoJfHXzTkw3TCgm",
  "key20": "4ex97aKGsiNMYwjxatPrBUaQAWhetC6EZyzzBbLhrFjzpwyj5Ya4bsr2Y6yrDHE2hpDBqE9cnwX9GyDUaEzNQ8yM",
  "key21": "Tey6NV4tEtgRGHFBRqfT8oypmW27BmZ2UdnTMvhQ9Cr4mEzvdoGteb2GJiqLFYHTETYr4UwqLZ6sTQNSYNgdNTs",
  "key22": "4EqJzFPwWKed97ZQZHvhhW8xWaEj2EEsMogYNPzpkmi4upD58rJNDJutJ9amVWkfsw7cZb4kAojkR6xeqNQdABZe",
  "key23": "6jeyMyVUJAmcsHQfCCiQ3azmMPDpwsXhi1obmRXBDrbd1sKxFS7pPW5sW4g4zuDNRLeXMcbfdv3mu5m4FGQXBdp",
  "key24": "3XW84oCLk54dUuMVYUtJ1VweuU1mQBMa41u9hKt3isNRqCBFdoiJFEp1M84Zkw7WgzCP2NUqsbZxg4QL67ZVH12F",
  "key25": "2QhYHwnvrMVawUpN15qT3SZM1BP4R53Jhu7KRAf4huxZuSY3j7RfNB7hCxQNjbAZuuPPPYQrAmND1q8Jn1TjGBG1",
  "key26": "4QGso5DxnJiJCMsCM7o6764w3MYA34XUcqkinypLdmsLDrXaxitcnT2ezZ8AcPkfugL95YUSE5ZqPoTQBbK65tpS",
  "key27": "wCdgAbHtKzquziv2Cuurh9HvVCYjtgPynRrVCucV1JXarmzbWP5fWDZidUXkcapGVCAvd9Q8egmknFQZpaU3A1W",
  "key28": "49SVf5ja3pLoathfhVYVYkHJRRRuG6rZoHURWXG2x6xrZAiMFSU3kvnd6oWJypSE8thhSTHWxgsWnEDt9kjd6Ggp",
  "key29": "4Q6b1BTJCof4e8SDtUPcusi6ZHgrQcesRnriWLY6j3G3Wfcnb9u3kM53BHBTuHRAX95WDdWB7XTcPNWAZc699o8T",
  "key30": "2cfchdzC7k34wQgZwH9fiS4JS2ANvwBLXDAiX3kAoAnjUBK9Rdt5ngFZhqadzRuZ3B6iu6asz8AoeocU774NPWkp",
  "key31": "2o3YZgkkhSub7BqXm67QwVtY1CbgHFHsJRbi8tqQa6j8hkLoH4mTvxUHYFvAPMfZYgkjtLvQ76PLCoLQXAAeFkDH"
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
