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
    "4ELhYvacSYBy8s79FqnypE3QgC7umyxGm2rGTWZyp2rE9ZTV8QQ72rGwb1ALH36WHWjc558vUApuzrTAnnnndXbc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CMhcZ7jC5gcwwHjGgEDnw82HuEA32WnAEHXRYo4TADeQtSraQYFwkBJH5ic4VieFDViEBb9HAw7QLkL4GqBddWE",
  "key1": "3mCb8FDUvshfqS35Hjfhk7f9Gznpu28nkvgt19tcMzsoUa3fyxg3GkvcHSS2pHr1qTdUg1XibM7wk1iduDRx9et3",
  "key2": "38AuvCSedWHoVhQMajBm8BCbRLRpt2ihNnMXDNWV8ibyioY28FJPXvQwqF1LHJ8cXfRzu2qvq5PF5EF3s3tJhsRV",
  "key3": "3TwhEZfLzXGUHvgCPXWf1B7Z3NxALLePtL4tG4CJEvVWksc8cdbBj2GfVKrEfCrFfUF4S7mWHe5yMSzAJNn1M1yQ",
  "key4": "5HxKqf11c6y6We1w7pGjNhcymry1TFikjK73MLHuydQuwNpHCv58QF7MpTfskHuoPVmoHmziNYneEduwuhBozgrU",
  "key5": "5vmodogvXZkSJAYcJFViLKaEEu7z69KZ1XfYvs9FVueLG8pme6rGFcqNNMyCLEbNrtNYkhuNMMLY8TB3gDn93Gua",
  "key6": "2A2HtdS9c5LF7ndDsW2ZkEzJS8yhj1jjWk7FQu6FCmK6NtVM2zPoo2fVD6hHXWVm6tjqUKnhjgWLz3JvjxkNwBC4",
  "key7": "4WNRX7hqqwwQ8ngjf8TkP6zQsfzcQa5dJxzmKnKq1fW2NyyrZESjqvvQ2M8LYw4hGiztm285Wpva4J3cdeqRsEuu",
  "key8": "C1UK31vAfSycKFsWjsjZ8QiUQKcFZn9gJ7TBmgrCdWuwhq8hvXpythpUJDy5wLH7WHZCfZahVaptEXVFhkcm5U1",
  "key9": "5yPJ5hTB4sCtVXrFrW6UkJpeLY6AZ7WgoVaUe3vPoJ8xoosjERry5FAvKCijs3wCXSdvtvruw8o6RVQhbpa3zU8B",
  "key10": "2CgxNk9o22EhodAZGHbV2dQQQYGB94oc1z2RpzAFLmCE5NrDmGbqJs6nBSVncwoKjVf2cYiStENM3dv2e9LH3mkK",
  "key11": "3MjjM1oaEYZJ1TLwbmzetoQBfyvGw76wj3RjsMum5F6Gho7ae8XPf5C1DGjdarBdpVvTAVVkZY9EEPxdCMSsnNxd",
  "key12": "3c6Q5Bo6L4XqJhQTGc3jp325ujn4ofSZXuaAvKnxaaJdTx6wnU5SWhcKZFcRjt8rE1w5nkryVe4gYALcovT2p1xV",
  "key13": "3GmvYAwhNawywKujuZmnzbK9TEfgjmhHk7JTkWHYmwmCUpcNcS53vvRbY5BYnFJKq8zUFbGRCQPN1ppo7BjWHfpX",
  "key14": "65ZsD6SMzaPXsGqveBEFR8cATxbdVSB4VQbPaJDkXtBnHa9m5oNa7Y2SSCodMCETz7nTHoeyY1Af87zokx4ahMBa",
  "key15": "3Vu7YAMcEagqWkBkfhpXVyJKEhVwYiAXGgkVuJoxqhvYTbZNvtzwyCTT2LdqjD4dRCRnM25MCtqkNnSMSbKZ2DNm",
  "key16": "5J5pa9B7W5cDnnsoHPF2Fc8PVRqLHhGF1EhnEUBQVD8hFW19RGFwfoZ1q5BhV5FiKp7mJevPHpnmegoFrbQMg4vW",
  "key17": "49Uf5zgstWNs5X3KxdoogUocAq5LKx27HhwZRvk1jQCwf65UghnftdooYs8A6gvScjnLzfgMU6NsbYUYAJkuvdF4",
  "key18": "5ovZGuPv822VcjmqofVUiamJins17V9t7wsm2vt5AGg1MwDsJiWEBx12bmhZf1QMApFMzGz2D6JUSzthEL3rGUr2",
  "key19": "51yazyCsVtu5hdhYQs6TsgdY5kzwbcj146ZTAgWbimhwkKGoEr3b7epTnx88KohWvmTKNANnpFV6DG9Z6yLfo9R5",
  "key20": "622VsrZtBF9yg6R6Kd6MSgWNQgSRe9rJCK8Xa21v87BC3fNRdKiUSdBKzBjAerAk9tUTKFJNPfgWuJqMQB7cMJKW",
  "key21": "WnhetEyk8X7sSLCyJG6wbDD5stPEeL5db99rAFu6kHDRgyztSSneDwaQaAkqsm8o2yjNedXT6P6Qq2zSWM3yUZB",
  "key22": "5cGX2W8Fd8ezQHWBJbw4bNMbo87GXMjMq5rwHkxQK3uzb1rctTECbMeq3UrkWzyNBfB2yRpB6QEqspR2EqHtCPz9",
  "key23": "3N65CPryPiJWQSej14i5BaBBYoNpA8mWAhVLYQFwwXLn9Evdo9cCSnjoFX29Mj93NrZd2gEbWHWeBEgzqLZccMJY",
  "key24": "3GRGKzRnVZ1BFq6xsYH73LbPc4M9jbG734isCpCSeJ5iLfYHgBfrwJWCnbvZ2f7yUhUXR3sjSr5mBDRVELLk8ob5",
  "key25": "4s8nUX5SnpREghnDp4qkWriXvJx267iYH5PK9AG3nd26VMAAm5WwVpSYaN9mULyrGGukArf57Zkd33H1b41Vgbva",
  "key26": "4hWg8KZDYdmZwd7vHq3MGEsiBZoC1StnnjsNr2zgJNVNHyQSBzBV2XgcR3kYZfBMd4WhQonedYpDap2cvpAWPj8E",
  "key27": "4pb6KUZkz3Lo9ysmNBjT5e8H2dUzDEzxyvXZTau1MW4v9ohRfgSvSCfMHPEfaPGxnE5z2Mg2o2TKcvyF6JCPDZdn",
  "key28": "4DVwcaZk8G6z5yD8f3F5ZmFjVWC9zYLe2UPhqjJyNFgXvfjSbi9mESB5eXs6LQ3uvKKmnd3vCxJjropnrPZBvxga",
  "key29": "5juc37AGgYsKtV9H9wUUZpA9pXnBFgPhvdCXxzHYD1wA2Ui9ECauTASq61ZWhSHQc11QwErNCdjxumCPVrgTyEcJ",
  "key30": "64GYh1CLnG8aDoAmKYpiXksPSoSGe6DQtTMr9XXTo2KMG5SpgHA59TyycBPAKKeczQprYqFef6kYM3HiAqjthP8T",
  "key31": "rSBv7Pmv7c981dujta2Z8rcDG17qU6t4psbT177itPuEfyMgDQZdmvvH9g92rA75S18oC8znsY4MW1UcBLXN6ER",
  "key32": "5MQPGYFHeMGscmujo7kuXw29jgdfGLWX7FGrCZWqin3HQZcPrm8rENPFzJx2C4pKgU2F91DoLSdv6XjbkpywC3mt",
  "key33": "4TEfJ2knCbTjDghjZtGiRW5zZG9sAkUGVh5TeBnXs3x6x4Na22foKXBodgtrnyK5W6iozsUDMvFDEeSwFhoyDRDL",
  "key34": "3co7mvgodv8rL4EqEZqSwE6esWdekbxaJB9gkLrcbZHuL42JN8GJEqGaJu6DuAfXyJUUCdJpU8akRQoUHc7RWUSA",
  "key35": "3isxxE6UGMhygEoJCGfTvQJiQsbxMymQaA3MSgZMwjvJmbdrZBAeYqAizfCpmmZcgaXw4cFxtVjr1EC1PJWneuS7",
  "key36": "3rCYxZrDJ99MAEVka6ivyLs3MEqT28LzzfXqUpu6NMX2zzKtVeRrmKcbriWhumbngTvFN1dMNrFi2hMKnb1cn32s",
  "key37": "aD4yoc13QKqXNpHeNwVmXLHxCbh1mmK24fwymXcixELVvQVkb7A2Pe6Tco1A2gEZP2zHKTCjEzgAjcoAoZozaF6",
  "key38": "5stimmWDnRqTbd4UauiB9L88KqWooUgbehKV5BXYsb2ZEfXT5iotwg9P9hzPgEAcV4ELNpws2RGgcjUrzWRXcUTu",
  "key39": "1wHJ89oRPjgQhgRKsAijWzLZjz8nqspF1Acven5vfxCrE41KvsforXfvmbnWppn93vAGWLm69mzLW25dMmCN5Ac",
  "key40": "5sreLnZn2GgWfsPu2wZsQd9TC5hCHRGgLvgyk4nawjYuJVV6T3WbM4xqrheSYad1zBz7XGbUeyW4LAuMZtvLVPVV",
  "key41": "YhAobLzGvYvvNaiHqsf5nvRtgtrX1FEX7EHg6BcNjCMDFtoXwHyP9Tu299xDbKwCR8nmNL9pqtyfUSLwgEQ2Brx",
  "key42": "5vXVUtDKndtt5pxzBZ3jEFQ27Ui2XgTsatREUVScPFNuzWdx17a6Jfjecgg7o7pixaqp8ScqjbxGYmMeVYUe1AQu",
  "key43": "3Kp8VjDUufDL34PrLTizxMd3SGcZEDRYLPP1DX2s5pKX6dhcsbUwbDtHEmdEaEpebebCicudN2phohNPYHkdoYWU",
  "key44": "2YaKFMWrNKQ8HPKkXNVuXR1PsZYr9QwsHoViq37ETfhHRjs3uhgx15c4D9NMX7t1GC2YS3caXHGXjHBFD9WF4TxM",
  "key45": "2vX9ch3tAvYaUSte1UTQ9LS1JYrrbJwVLL67EPN1DvvQigVWnxGGdkzTYtQSWhV4z656mBxhwxd26UpRx7PYpvxg"
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
