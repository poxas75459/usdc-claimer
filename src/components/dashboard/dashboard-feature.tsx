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
    "31tdKv2Zx1zXZseqQGgHuzTsQzYakMWG6fGpzRsk38qfkVo5YHvSc32b3N6Fu3WzGYLJG5NZqbcb6pwBT4s7ddyo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jSsJDejCKxDmJXFuLRgHjGHxGgNpzbgXUmjuWpLWi1m3dqdF7BjdctgoyeKxopoFGiDkTUwgeyNeX7T6nURfpry",
  "key1": "3B5Bf1HRN5vMhCnSam2mejpz9NhJrWZhj4MZK9M4Ef723kabZgziLzxsXHTmP1KP2tnEqJP15gdUfiqCgXovFJQV",
  "key2": "3f458erU9ZHrW1u9tFmb9KJqnU3LJtfuoxgD9GYkmkci59srpv8yq7WiLYc6Wg1wJHzbEAhK4p39TVgq4YTfXszD",
  "key3": "5DHTDLcA2LtzMvxpCgd96E61qYzR9yGUNrVo6Zaqsqsx4zEeKPc8kQNVfnsysrxh5KyuJctMezFHceSTocmcEzmr",
  "key4": "3VKJAcMtTz3CvsaLy78vZVh6mbyrawPxyxbfZTMZSJRR1XaH3QxCtwgrdmpTznReaYfFUp58xc6SRQwUW5yjNTNr",
  "key5": "pbgGT8Z8xZXfzJxG5QswfRfoAwNLducrY9pKwDJfCtnqiZfUHYXUhtNqbdefzJQLtcbsj5V2tk19T6uwsfNN5Ws",
  "key6": "2pdaU1vSuZKahJZMawJGujJSqhEfu1bpjrA7FtGGhwDEbrapujqAGzA3x4UdoWUdQVafxxMVtkj5jKLFQ9UyXZzR",
  "key7": "48NtNxHaKvF9bMTgQnpcdvqFmkiwmGmAWAE723mq5rb8VxmHwVjvN9RSDpctZBQN6DJBToFLHMi5X8AV6sRv1PD3",
  "key8": "2tzMszXfhVNSi1hp6AXUsu4E1R3MDAvYak9bYB1irEjZeAMXKgX89xuNTS7vhJ5KDJAwHTfykFWf9dUVNXSgSNGV",
  "key9": "3uM27y2yqxrXA8NWQ7nMzoQXtcobpe1kHYCsahYnoCccDNCdj68UGpewUmYBHrn9i65E1MpNkF5RaRk3PUKkdbB6",
  "key10": "42SEKtyDqz9ccFNU92fEYeCMJ4PCvJtsMJWgdw2iMzLd624eFRN9GVAuLBeFWPuxFEbL7XqKTcMUPp91UMnDBZne",
  "key11": "4mZMwaSVQQ9tpRhCgdA5biq8deq5tUb1s635wujqKMtBKqb7B6XAiCU98n47MP7sU8jB8Rz5jdeUWj82RoaSpvvi",
  "key12": "3Q8F3DLwcNwdHCfEmdAuyYmdpHVRDU3QVyhSrBaRcH6mQgc14KSJJhPWRokMQFeqZmqzd7mJqkipU8pHwKsRrNrP",
  "key13": "3CRgMTbn617CV5SYk8aJhm7Hh6X7YPUTHUkJtPqzgoBT7VjVPRh1eNgmqSgWYeepPVE2A8YYDmXuQb9nUQ63dQyL",
  "key14": "4iuny2S6w3GwhaLSTQ5Ea29o8bvJ6pinUBW6M8Qw71z1cszQwRQLiS6euVMpzCK7WVLuSMW2mYyJxkjjH2bbEMU5",
  "key15": "2NDYYzzZ5rPwo126GeZzCJmpjRXfSQvvxxXwvYs8E1xFGzu5FfW9rbcj4KhVCSTqivH9coWdTjDLeDRkinQvxXoK",
  "key16": "2Agp3UuPvrspRCjLiG9p4DxTV515xmLCSGwk6P2keDeqAwtZeHKvrqiPcE98c5i2V6UnGwHJUuDTRFYeQMEeGEH5",
  "key17": "NJfRX79Wo9gpU4cRXtjD5wYQuHJHRUouGLGcRDNx3WSNbBnwnEH3gVWJCKANqcqxEtcctQvqsRPToMp2QyPVHeg",
  "key18": "Db2xN4u82DWNwZre2dUcnvmgeaURfH1p5c44uGHYEM7pXFr6ADsRNy7dmv7PNjqUzJ34f1FTr3X8hUQpibY4fKU",
  "key19": "2WK3eFryuaNHsXgUB1G2gknNqWuTyLfP2g7a7rsABa2sz8cx5MXVwVApmNCGrpVGM4jc8ZNNpEd1fjaXrGyu9WVy",
  "key20": "4iF6fFoz7FZucHQoGWXTJBSpvEQTAZze2euRPyWAY2qqcxJDY9fvkhQBnTyohZZsjb8QT9kVwnfsRuYYAwXb8gxg",
  "key21": "GvHA7BvFpiJTebMmQDxUTLUqCwFRosr481QmDk5roKLvojuVoTPpoAFV6xAPf15NNuntmCspWBxS88BSEc9YMHd",
  "key22": "3SWsF9gwd52mLiSeEAq1qMrtsatfF3kkx686fPjX8ZLtHsQsmKrDBHqYjigF6rGiHyfeCZZuJWydGbHTVoCfx4Wu",
  "key23": "486yqe3oyEEmRwnd5V4Bw4rAnRMiBcJP2hcPsXDr1tzP9rUmFT6XoMym2kJpC4Xxud7WQbQrokBTxj6jM4KnAEya",
  "key24": "3QrhwU9m9Hu9iYyeKyNgSAZtqKxDHDs6oLeAU5ZqhB1Pd9D68rEpxzQ5wBPYPMUmQfQbom2WNqz7MbZ8svQKF7TA",
  "key25": "27YLFePhFHkBhQVfXP5pwS6tskMzucYEFFh8D8uDRpHn5XKJ8rDE2Pvx2Yk3cbyroUrA76h95cixm3bqGERvu3iw",
  "key26": "8VaxMamqcg6JS5bsQ8UBmcMCPTh2c784JCda5xuwUEc8ELApcTuYw9woFmHJDVnUbstUhG7oT7WmiHwaqrUUDWw",
  "key27": "dQRK2HYAjGfKmdKDtNThcHbM8pZrjzQKzRuLM4pZHhsc2m92u9T745CiciFLdNFM1ZQ2m2i4CLPeHck8mw3xyvk",
  "key28": "2FH2BH9HMZ3bPPn1KxvYycU6RqBcNatSGwG3W9W5CroAciCMmFJyCYZvGpquPBb6BvioEQ3EcmrEmkDqKY155WoY",
  "key29": "2S3XNt3PJLctxLzHDmESCxUgocukF57iEWzwH5iT4Z4zPj9jb3D1uDqh4o2frf2bgnYnqDWbp5TRXT2Dnem98JK4",
  "key30": "3MY2x9uStZLBKZFWEJn7tM1n8DuNYKXtMiefCNT5L6yP2Jf3ExFc6MXGgci2gGq1kU5tz9abqWs2ycPVXc6vPGrW",
  "key31": "2gKpUB4868Rh5iktKZ3SA4bp8GEYpAdQRdL6rTbVfxtNXLNy1MwTNSYjBfmaqHq9Qns6ece85yxjBh8umdpYosZq",
  "key32": "57vQCeiJGidBTgMu4fyP2aoQDDkNibGmb9gJMDbVqqkUSJBs4U7QJpEgpSsoEz2n5UMrZURZ3oAXzbLWYrHiUbg7"
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
