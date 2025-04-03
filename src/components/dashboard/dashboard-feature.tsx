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
    "2XGCsE2afpqUedhjn4TxZgcAi7qjAuBVFwBMXSww3Gtubis6q5MeN83FcAto9RgUPqAggosF8KZM9RThFvvez7sE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kV4WC22PJwmGQq78W1zhLEF3kd1JMoWtzuka25c7gFcuL73zZrpnRRfUnjHXgVxALyrAZmy3pc2sKV2oYgzGHZQ",
  "key1": "4HjicobhLeYhFpLoMKsBwax1BPCmWQc5WoCSN38ZEmweVic1TwqrPtAGqGb1Muax3QXCFpvDZR4e3rJ98UxBBpTC",
  "key2": "4U6Ex7DDMGX2LBCcMmuKn1w1yJa9osAA9D1rXPXQg931Cs6Pbkf9r6kivKdMGpbmL1CYWf6bnXGi9QgMvEDKz6Ly",
  "key3": "Ec8QCuNWaUdcWqXYXJMjSmPwxb6WJ4L2eccG4juwoJ1NNNNVsv5f3bWcg5mY5TdCYCfVi8ShbkkaStP18BKvSaJ",
  "key4": "5QVUkNn4kZLqnbBhRdzC8NPmc73nis6HpSstqFxmRTdFVTEQZGmrNjZY4rfXXw4HeVURT9MUv1sWst3MSm5eeY44",
  "key5": "24TMvAAeXFtD1Ax3siq8xxgeQPEZXCFzAxDkUBaKybgC3dq4PGS1GC6U3HzGgDYEiA7Gn3RY2seJu92AhKkH79St",
  "key6": "458uprkqBUXiYSEZY7nNqCSk1B1HbiStFeM6og4ZYrZJCqJpqSnj7UD4pndKQCnTPUrFNpJzVngNHz94ZrB7gCk3",
  "key7": "2fKEtHoKNdGboHGepkLTiXXEFRLfcaBuv3kF7dxC5xbnLRb2akhNDWWDNV7vm95PP5Ud3dDAdezNnZZ1R5cehp7L",
  "key8": "62VvPXfrqTu18KcZCkx6Atnp9QCxXX4vNdjyGHYKxAgUvjKwiWMP9MDywZCmA3ypyfcFmn77RF8b71z93zaJBp9B",
  "key9": "4ou6Ru58pYBnxwqezhRfMQ9MpGaGsNHbHF74vhoNigeMmpvz6HFL5x2o2qL6mU9ydNZuFSSsSE4X2E5YitYX2SNQ",
  "key10": "5U8tEjoNi9EaG54koACxt4oFC5Ps4hQ2H8rAvMyLC4ZJAiKjdHgugpCfHK7uC8CaUYB9Vh13mW3x4uPYaCbAe1TJ",
  "key11": "2UTsXXG3pyr7jDEj2puKp88pP27Q8nTDwWmD3SZ2uMgWcGLXEXQhGjw4XumnpTsYbWJjm2vTjHqGwrm7TSieBSux",
  "key12": "3t2VLd6irtfUCgK9bqQ8BgdbJfqudnFragV659Liw9FuYqv7zfnGJoh4gXUhQW7NzbaUAjFP2fXVgjfV1DKbA5ZK",
  "key13": "vuo55kscTofngbhFNKzw8GnBBNEJmHTAQPgb7aUq7Gd5kBjRG9Epg5GjpaunCwSMsyxbCYyzmAeR2CuQp6PQMNx",
  "key14": "5XFqSmEcEeQ7yHd3DxYik9LCoFZAQabmk2HTh53Ata7jcGZQmKMP9qixZ7kzWaqbCSU3F6Ng18xjt97NTvAXZqyw",
  "key15": "3CVL7LDLCMFaX2bf8MmTC5WEtncK62ZcZ6kRcmGgTfUFcibrW4bkdAqysGM4Anc4M8Y3b3e7uhXmK5THFDorXRto",
  "key16": "4GoFgtz3Tqewb9aSf4gPMAYQoFUhoreRfR6CTa1k3wWDhVhovSMaEHV1npnu5Hej3hsdxP8TuEagbbzVzrV5jhuN",
  "key17": "5L7eUyQd748UqhNnLrJirr7iuVpwLwAybAsLqD52Mrm9QS7ZbG44uGMRggtwRuvtd8K6d75YfXa3Bu19oqeYPfiF",
  "key18": "jTs7kD1Hvgaa9LKqpKNQfJCN1aejA4KkzH1p3f3FNb4TeuyCZ5dP6p1LYRJFpXPYjUgMdtY9NhFHjKHfYS9Yvn9",
  "key19": "726afFjueJyas5ArchFiRPTqptEkFEjMZYUmJ8fLDx8F5YAbFmXNG1oLCWbPiRonVkop8DAJRtdwWu4js5JqfpJ",
  "key20": "3so83qVRXrKrFyez3gMGjc5d3eWWr5RcCcnbLri3yaLKByNr6vMLRtKJfq5S5vv2Dz3PHyNZmzC5htyoNyigT3zc",
  "key21": "3rS1xJzTATbTLmvxSghmmkcqZSCAJL1aFho3xgGSbH9buQhfFG5pHNPzkGDemLEm2RoVgac9cc7RKPYEFMiExxaJ",
  "key22": "5QtBTBjTDDT3SkXeMyu6F5NaikTN7899k5u87F2u5nkYRjmJ8h6J8uUgBFfN1snzhx5XnqmqxyzGB8FFbWZL6Zhs",
  "key23": "2vLmT435hnFwLVNxXGDwVyaisGytzVnBSciWwX8Rg1FEZR7WtpdSrRgB57d2CMG8ShYHG3YGYodA4xvvyJhUuZVQ",
  "key24": "4rc2gm2zFQPmNwb9BjLZQXcGhoSqf5ESDkhfeFZHmVN4b6Qs6Q8reJnNE3JJL9bbV6s5p1YNxaz6r316abr2FAHe",
  "key25": "2GAGS1cQeSKFiaLQijsZSETHmNhjvvSpGfoP4HqgaDQFMzhkMkhz3txog82DEKL85WNX82S2drqwpcajGqGxKtes",
  "key26": "2Ujqj8DPTPHvZweKFxEtf5HbE5g7ckAxuZGxxYMaBt9Srm2pi4pVmskrhzwYb4h4X8yjuocW9kRjsJsj8hLvtrvB",
  "key27": "5xeyAgmPR3AvFp1xnbgBx7tm9Nsid56RJnpVc35oPPq5wZvXQYDE8iMpiAZcBKokk2aMmmAPWxdf75BaGkkn5yQn",
  "key28": "4JnbJTymF7Hy4g5jB1Hhz3z7UBZjAqqfxeTDRyiqop8epyEXGCLx9t9Vn94joS1nbnybhzR1cBHUUpkLmWnKvn8a",
  "key29": "e6kgDA3fUwDWLQyeK9sKr9ezszFERwvDwx98gPmA1d7oSNmLnNgkQ3DCePoJZm7qZmxwQQmcFXhdfFwWH67WdLC"
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
