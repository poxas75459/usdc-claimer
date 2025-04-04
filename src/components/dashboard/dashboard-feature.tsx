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
    "2At5DQXk6eZ41LL4DwHXS8agv2feEZgK2bCexcmJGgdPJnhx39xUvPP92DJ52iMuZshALP2Kwiv3orgKt5vVXrXc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YZZjSyMZhjhV2qwFyPMgvJFSXZHHvWrNWAsLAbFZMp35EUdfsoUsKgy2yadPifNPZWiD59dK7yfTTe1MYhwfkaJ",
  "key1": "5gRaFLGfWN1yq6Epuvy73HuXbTPGsMQr2a64csnss5H4rGYthNUWiiT7vaWTDbEzqsu7VWq7vyrhnPHKFP3bBk2L",
  "key2": "4dNNtWRKczCgj3aKgu3ens1G6yE1ZEuizMfXzhagnziUrduTZZFPPjfiUn4aSh8VsLnNBKdii5jQk7k5vWgu84Mk",
  "key3": "62pbjMy9jhpw3PUFTK9xPWAfjtSwdx2fKPodN4nVH9K5s687k1aUyqYEtq6QpJJwEqxyCKxBozQ8yKNSh4sm9uhi",
  "key4": "2gwJQ8XmEnxUpoWQGQ81RdH5azhEQM7UJMgrooFosYucUwrkYwQ9ZawbnW9VtxaMbHNyHvTyn7s8e1S8zsJzrimi",
  "key5": "34b8F69KkW1juksjgoZ5XPRoNHuvABWp7a9bgEe1VRa365ghbxNTR4H8QHoT76UrfCXfnCueanm7tEPwcjmRicAt",
  "key6": "3Eb3wEfJD7jT6f4uGQhhBPi3NrTHWU3pWuhDyhvEyVPkuh8VUywongVvdGPYnaMRj5WS3FDgts5qjYbZG8Dqh7nS",
  "key7": "2KDn3d5MEY78uwcpeqRMzRkUkZStVvMmMj71AewJjc7PAWSKcbnQswz6uG4Ap7squrZPFaDMLqWLbDKigwtCcy3N",
  "key8": "24UZLP1V5EXW91ESPnZVNWSufuyNKM4Wxzi7Th1Jaqx4prRrsYiRHVsQ1ahm2ih4ZK1SZFdL551Mp2JNbGanJWkD",
  "key9": "59e6bQZ2Ug1e3EfKoebuZkk3QuJPVv4n9uJDnTC8FuH73aJMXngbyMiYwkchKpzphWaJhKRkQythkehnQfQKWjvt",
  "key10": "3XcyYQ3M8XkE8FAQiiT3A99fr2aD1mmx39DdZtEi4jpBYSXCf1oz6adrk2qquecMmk77dUPkTxv3mEQoxi37FR34",
  "key11": "2thHTJS6qGQvw5EJGX292yiuyKMDwQjknwbJEraoR1jcU9AKEV5pHtTqhco9UCXhHGawX261r8MGU6qWNMSSsG7M",
  "key12": "2x9WnSY5r3fTUurgq3gMhW97oqqgjpXT8NjKQ8huRMekisnjCwqFzWTW9N66DuecdPvqwPxBG2B7fLwiRPXFzVXM",
  "key13": "5KwaTxJYdoCLCy9wsPNfsWTFaaexbPQSZX5u9PJu4ByGnNHPZ9dm116RWxCxcs6ovbeD8zoJNSzyzCX3aQ5mpQRo",
  "key14": "3YLqjhmErg8UCXSJKqSXLP8qPYSCZVLHDZyT4m6xcVkL9XTm5KvTaknQoUJNq1z8MhnQwkFZagVy5pDFEprg3Pco",
  "key15": "5Zvd5uAGWq6ztwm6a2MM7y9Vf3mKMVqvbk2mzhqP6L6wRGRPsUcQrxoffkeBnPobwwPzRXEEXUjCWCfzFJ95a9MW",
  "key16": "5jfkgtwt9Lbfy7rEm9etVSyErmdqtgwowEpNWbvYoQR5rM7N2yGX2EcRQodWjreySZesJdyMVPB2REm5Es8tSwCx",
  "key17": "nc3AqqdLyjFiQyVfH8nnA17vJRiMMS6qLnAFEvh9KEnmrEbbFF1E8wQ4zQRvm3dptqCXStLahrmV2Wfp6ajeLC9",
  "key18": "361tXXovwUm8HTjGsd4Ufm8TqVSXd2TYY9B5FBaHmXQV1C7vsFNS3QP1vx8QceYe3UhWWRkH73XJqJ7ti6UT6MgZ",
  "key19": "1pixZ29AAW6BaMJyxodJo3k19bBPsZ3FzsGbNtuuJqGrGuZ6zxsXmSrqvgHqTGrae3mTGJtxd6DmJ7JYXtvk8Qw",
  "key20": "35j8sW9L3PpzHyzz9A1JWXtcF92EEcVvsJYR3WFJ367KGRUCXATqNRp5vp1yMZsPyk2knx9rKd2q3m7vvU6scd88",
  "key21": "fixEeuU8wZ1kKt6uKRyVfnnavoeLE3WkuyBNbH6iWbW33w9QhwnFvhzshEzoN5tSmsSQ1F2AGq3wsZUm96WGoU1",
  "key22": "2zLK4DwFP7EytjETLWq7HXoSYBwkBfEBvgP2zkTnNAhh4gkHh4djw3KzvKjFMRaK2itd9DHpcrk3mgC67JznKNv",
  "key23": "4w7oERbsgRoysM2Ntqfj8NEhG5yimoY99NB12SkRpdokAsP6XEc4CG2nLmoa1yg7Q9xcnG3nhQgtBBxoHJZuSnaK",
  "key24": "eVphszRsXKN14HBV4oxNb2xMB326GfMjRtpjXGZUt752sd558UJfsG2FD3u5GnC1yF9F2YJoPjYgq6CNYzYJzLH",
  "key25": "5MnNKHBiQbpv2Znaubw2pnnkuwgAbw8chiHka1ozBTgTgYgQynUKjfXNLh9isAZnHWHCrHcz8Gw4Ygv7wszgsUgA",
  "key26": "2t8fUcC7SJj2LTK2h4EtE4FnKVdQUFZsJimPnQeiK3mY41kg3ikqaup6GfBUxudTAy7n1ZwrRWWGqhQp2wvJJ6Yv",
  "key27": "dknqDaHbvkVkBRq3g4WaGm2mGeswP3XDG8cQdi8dJnRPqHzhysBaHMrTH213ctMWAe2KTuq4MGKgq6MdsmKVWpc",
  "key28": "2q6bQDLKAtu5MXE8XBCFm2vUieVNzYfypEvDynDP4BZCvf88p6dSmLDyanXfVwhaQAAwVN6x97YLHBzniGn26QB5"
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
