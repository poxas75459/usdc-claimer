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
    "2T2AVZyEvzML91AESDAPCSCEKqV9b3pKKvQWfjkAmy79CoBEoKJHgEAWy3F7qkZEr6r9aS4PLsb9HHW33kmMEPMj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6MSFNxKaiKT2Rey6hLvyfjsgAEgNdo8CGCHrHm9a2esHKxQAgVxossnskq1cNhaMKZYh2w4VPBuA9B4vdVFt26B",
  "key1": "5Biu2DuZ4v2qEsLNtTW2QDUupAcVXtweYhAqR9KJLk5uJTyHMnovYawwCvML9imFGcD5hkvwjSxbzWdpAi91Bxwz",
  "key2": "4SfHReG2ECzyDa6NSU4HeejaiVdsBwCekWs3eqS4kcPAqFHhNSLbdEA5pJs1BM1fkrBiZ5ZRprC9QiY3NECnoykS",
  "key3": "biKtBRy72Qvnhqsr5Fq5m6Ba7Y3LpT3K4FobHU9ecWNZwSxU2V3s5wsDh79zRECi9KhVJ6a1beGBujQAqkF9HeH",
  "key4": "5XALEMKcuqFT65hwXciEuemwupX5ifMsfCLava3qejkheUNjjHnzn1stFWzpocJa2eBCDW4jdmY2sqTtw9w85agA",
  "key5": "5P2QAYCsDNFTJdN7gUrmfEm6P8FQYU16oFWu45wWN42hUAf3UQP2DLEueAySW8X9iokZHjVYxGa5KrWqjtZALZf5",
  "key6": "3tXP9K2c4GauhK7ypufAHzuu2RuBvBwp4Z6YXEXx5MAC3ypgBAdYET3CsCdFkjzzxLPboZhCn5RRkEEBKaFMJ36f",
  "key7": "3uYPggaDRvwNF2wUQ8gNnC8Jw5kPNgMw1bwM5XhxjM9UGaRH59tQAHCpN7WmvQb2u5Xvtqj8JSaBBSTVYmm53pE6",
  "key8": "4WKpVxTz3TpQNLwYa2kAkeMpAunnKvk6RYyQJvbkJYmnHzMFoL2Mr9pvnMmciAZ1opuQJzzfLUCC7vSrbLQVkpqt",
  "key9": "5f93AAtbYtyq4SM8gXUf8VjyCDVCPhNDkyds68qtbbeeyqY1akKV7Mtz832KHKjeHuYNDEw9pYdW5nBwfZ9XXsVR",
  "key10": "4zM9WvWe9j1ZNo4Lm6BbcpGmEzmG1C4apnugKtHRSTFNCmV6Q8B4cDMwb59UP322oixWY4xbXA22myWUAAfNVWaF",
  "key11": "48AtWhsRpkonmAUKJ3wi8XF5B2HpZtF11KYf77J2rR5cutDPX4sKgYXwNaK9NFd6JWHH5uTpuk81drSHt7mnHBBT",
  "key12": "5adFAM6PrieJKeZgnk9uhiVVitRfhusECdgxWCQWHDnSuC3YTVQaegRJLvQTWkRiFbG2g13S8W8Rv49Qz5vb8dgy",
  "key13": "MqWiqSQtJM7PTFqic2TgoqWke9N7wY1wVETs7LCn25SLTz1TGTMzGjfZLc7uvNdjtUdCgUKJ4ZUuuaXWmkaXTyv",
  "key14": "2y6xf6rfLNRyZtsNk3PbKQmksfT3nURqdRzAsHwtP85DaSYfMDQuXwf1rBnK68fNo5MRHG5fyfWNTWBAzJvbDzAH",
  "key15": "64Zpx5Cqio277F64AziSDHxRmRTn11a1fWae1KSoTobpSEgdDoVXZ3AJxedEeZWiLhzZKE7b2UN1vErX2UEKQ1hC",
  "key16": "QiXB8oEZRjS3Ph9ypqCPsaifAHLYtL8CQdPrytDozquXkn5cF1KHRNURR2L31QgkXCj6SZBrHHSrHp4yKXxHWWi",
  "key17": "5gANXbfp5Av3qhGPguuWX3Trbe6aDeANn7ykUS1PiPMVMQNFnLRwp2o9P3cnUVafFpWJCXNYR69RbzoGw419DUhY",
  "key18": "2avCj8dUFZ6UgWRYdjgmFR4hrXFA5Hb8UBkUpPHMpLPyJ5TEfL3EMRECz8n9bYTnfgqNCLN3EP1amkfzoWdXK5Ew",
  "key19": "LT9Vd9yukBeaUkQq6Qb58iy6FaoPCRAvpB6u5A4t2Zga9opMx2giAoXwZdKCco5e8Ky6FRRooBbB7NWfCPHzgAM",
  "key20": "5LaP2hPHYxn76LL42dHSprJXrYP7xaDDmSnDKPbhpF5nuvUHjp1eb83w67exoB8zHRcefVc8iy2qPs86Moy2dfcy",
  "key21": "5QLXm3q3BgxVDTDw4jpEjjJCc6kFp5JpBfrvzdWHzuVThV1daQhj7Y2kbTUVH4QTn4Tv2CyGJsRQHAFSHeCaoLjh",
  "key22": "36gdHaoGHQ59iHdZqhdEQc6XiFyf7BVWPzbE11gu3yAb1vLsf98nAMkTjk83C1Wiv1LavUogeyMBqU9Zuh4TqK3g",
  "key23": "3agMLYCPZJKKNnhbbEaYoX3RNbqRoU1k3FtSz5mhyvYhuMPJLkv1YhjcFVwga5P2PweWeRGMcvS5jjdqWbn7Qf1U",
  "key24": "19jgHonSZvxiq6w1KRydH65CC9dXPLMskMe4GBsMns9SpPAYXjr9uJcMByzzWdc9FyNquK9k4ao2Xm68bhnLA5k",
  "key25": "5QktfeH782FCnxeXiuB95rQwbRsfWksrs8aYHxX7E1FQHdqWmfroSj5dcgtc6C58wX4N7j5w8zvpHvDnoDPzcyzK",
  "key26": "52qwJyTBKcji95PGEuvepwgbUBJnvaxQvt9vbP3oFmrw2YWYQT2EL59cm6YYjuquKhGoDixLTCHvx78zzpATRiGt",
  "key27": "2UXrKZWELgNsV7J5pcJrNMQNDpCiz5eYoYd5Fr5UgrNgWrQGt1NRg6eQpphdisSqTmr45xomNe7Jak9XS2vf2AdK",
  "key28": "2s3p95LbSpU3QAjbrYzNAnj78zwKJUy5qAqWNa8xU1mTXvEtcR3Ldy1At3viGKwKGDACQEwHiQaQQhV1CmxsHcQM",
  "key29": "HdioHq5NUSsj3Kmznk47Z8ULzyYMzridCnzpR4yJEBqwmAZmJpqWWWzmrtimUQWe6Kwa3ZkQgVtC2FHJqCUmLQG",
  "key30": "3Sgxc9METmjrq9iHFMKU3KcqCQyiy7bZSDr33DTE4uQfJiwmSqoTKP3vAoxdBhryMcHuCTA8Xor3RMvhQ5eiYcqC",
  "key31": "iUu3miorADPvmKm2ySLUPBPk5hDFdjGLBk8fak5t5zMcYMDpoLzU7KXtvt3d2BhgabKWoPimp7Cs6f4iYBPe7Rv",
  "key32": "2rxNJAoQcKxUcNi3E8m63Cdu8aQSi68oE1PwC4G35KgBwhzHE6xUWxqXk8diPYoeF2jYud8AdfBUSLg4S4Y5Y8tY"
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
