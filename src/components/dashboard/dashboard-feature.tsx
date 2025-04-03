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
    "2kuiGfzD5mu62MPNSenZ4zSNUBPYBRRCvyjaY6XhuWfVL3yLHZc4xNqrrxzCYL2aRKnNHKfX8kh47AfMzGifyDqV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23y13n6T3r9q7b2zvBDmRWLVc2i6Q5wiuTRZcdvkorQ2weRvvvBQJQoWqzUAuzxJ7ChqJXAexDnbdcA3gyg59SZR",
  "key1": "5RhYhUYPzzL81RLkqL6vnQkzM3LHVheD2okikv15YhxiACs7BnFBk7uEnPv6cjeE7NFEfxP7WjqLfKKqF3345Euy",
  "key2": "3cTH9pwJNuwnZcbn1LpZfiqdfL7Sy1DoSqbtiXAq8mS8NYZ826cRgYV7NzUZQMf8wXSbpkWn8EsZBWRanNaSJehm",
  "key3": "TUAVbAwZiE8bP3We7TYcR4h8ApZRPp7J1CF5hH3qsLn3eZtKmRNSpsaEu9T1wU3ikAqE995Lc6hEPe9WsihNyZn",
  "key4": "2iEdJW98cqGrvgsQbhYACysyYz9SpfMpcnympi6cw6nH5NM8zxJ8JQR7i1g3hr6kC2SxEavfTPXv9zoxYuMVMGRX",
  "key5": "4o5Q5QGQd3ziW51VeWXC399u2fKwnX6ZbhjQJfn6gH21yxofQ2KQ8hzENvRuhsmZeWfgS3Z8cSxrFa4PgdhduPgP",
  "key6": "2LZjWkKwU4KpARNf76zAvjhmTtUphjrza4Vj7TSLgryjCq9HKMGzeqQKkkVkce87WJHzseFu2Kz4ZefFsZDvmDz3",
  "key7": "5QSDCRTcN4hmiDKik5kMSodSagybsEdePo767dyEp9SdmX4VCy3eQdFhdqemjp8JjnfM1DLoBPE2hq8grPZYSehD",
  "key8": "3fVHFYBo5RzYoLXqwK7VfjFdvE7yzWd1P2aGHNK7Eci4SmLuBbgPAHQP9nyhyPepEoXtm8Aw6aGRV2EzSihJq1y1",
  "key9": "49FXaxV7fsiQnMUdua5RSyfePUuHccmuyJ6ssV1futW6JKge5scag3g1YqBSQbTpf6s2eButWvhi3LVQkQWiBy7",
  "key10": "4gKuN1kf9kdnTM8mLVQsAYag9pxRczSN6Yp82QjaoGceBTJ5YYZYemmgsz7zmqG8PBWTmJVYdPLepc6DD6pcYW7r",
  "key11": "3pmch5HuEsMLWSHbvFH1ANka4Z2pTaELjRUFYU51zDTE5BhdtTaZmdLvRHgAe7LAWCCNJ3KYdFTmpMUk7LRKoywY",
  "key12": "2AC3J94Qz5vFEiXXLUKiuKqZQDv4DWLbGsriwnY6CGftkVf9BqVKuFZv1kBFcp1B2UkkMawtqVBdauoUvKmTUy32",
  "key13": "2YsCP3SYhpcoyK2qKESzK6489G73S7m8GvUZ4NtEbYCDYvfvrhAP3dMRTrnFJdKcgHfxnVTdUEG1aucsDWLXybku",
  "key14": "2UwmTCUci9kEGd3dt3iyUvQofwLJmaXhmdUNBcDpiUN11q6oU3zubsqgBSL3yj6y2mhYWrfsMEhwQqpUPB27AHqK",
  "key15": "BxkqoaQdT8jBnPgDdFpY8JbX6gDmDCxn3LTAjnaKfj8DGahYZ6dkizVfogA9zwEn411MnHbTYYBcnVJNAoRuNVz",
  "key16": "4zQktHwh6mqY5WLtovUgdDdxPYNXgc4D8fiYwSF9uCp4U8hQLd1yjkdiTB2CxJWauUcASgzY77jn91Jjy673XPcT",
  "key17": "2616uUwHxXbEtL261eQ95MXrsT7ZMuLB5PVmDFWEPV4HopKNvfW8nCaURfYWfaBWbmCBiatKqKWbUqLeNWE611Kd",
  "key18": "2GKQhwdXRv4D4T8dGTC9vXZ7q4o9kqQbwJiPzqMyxhhaR5hFJrLaEQvo7qfo9Bs2JVFZDrM6V51L8cetLPCnw5t4",
  "key19": "5GsTvdYRpb6R3fgoVfpvMoJeYLuztGkTyWTEEJiFqrVbFgqvFV6kbwANkDV4xBJDbh5Mkt8v2UJqNF27hgiDpGpu",
  "key20": "2A4KwfA3F4cwDtrK8KRuqnkM8afu7jtWWo5vL8vXLajTncRG5v5L6Xs8gxieLaVfd6JyCwtYucq2f71QCzXM5fsb",
  "key21": "5TccHQ3V9t55W4yZfiJBSXZgSwHZgrvKJSYsewMt5HF4haoHVxtLyKCE8TGVpwKrZNnycZyzzL7Q1YQReM4onXga",
  "key22": "4kzkSJPB8RiE8UGHs5ooGNwY14qacCfuHe33GMoJL7MU6WPHnrEAapCUHVXPsfa872829ucudsbybnFMYvSBTjvs",
  "key23": "3g8hSGPAdi3AuBrYEaWeD9zHA65hS3ZY2c4AURoF97mvVwAiiGLN9NEKV6ccW8hKRkVBqurMJCPavEMh1wnCanzY",
  "key24": "CC9V183GvNFHzyyis3sR7JYEeoffayJhuX76o3CwoQ9R9tJvjqwu4YWVZEjRsi6544tiG6sa3BFtboeBurk1cH4",
  "key25": "5XN9yaf7NXeyQ1t9yp2C5s3Gn4pCwdihQCiYN2jiC2X7KzRkG3up7UMgxQK9HXiTpo5CjrPJLfmN8KQZwoSqVMQj",
  "key26": "389kqbwUVhpxq4WmLviSp2PywcqRkCpK6UXqxxSiXbdhwG1Nb8Je6JeT38q2sY48SA8PEPFX9qd3N8Zo44ERLhBL"
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
