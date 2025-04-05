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
    "3odE84MWnjXrrq4QCG3amLzLwV3ULE3VUpNbSqm7CD8T1127fAdkWZQdV8CfXdjU1tJDtqdDwd5drSXPxMJ7YhTn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1fZMHAtjkFYYJEVLSrGq6GUE7sb4vahNmMgpPr571cY9RFNSxw5AL38XfhVq6UbE4wpKwjrbcPNgvtUgaFhdurF",
  "key1": "3r1cFbE9HJawkJ9Whzckb9et4wvvs6KAoswU9Xuf34tzXzXPgREGmJRQ11XWhUVHS4DUDb18SyxpZXrw6sxncTPw",
  "key2": "2RMPQdUSAaSdirzFficnz2UA92oJGy5XZ5LTKouXGc1fTFmuFs2K4C6gLJPr2aueqAn3A6P7sRzpxrr5zyKpwJBm",
  "key3": "5JeMQc6ydZziBp92g1mf9jQSxSueRMHPim4jZRJtChMSgDTxGDviHppkNN57XRfEgeMkptoGX46sxpHKt3myyHdB",
  "key4": "2mneS2gbC1uPVhhP3ZyHob6RzABPVPVFfX8NKTJLfCT2RZDtwuyiqQSTh4UM2KzKVjMmQFVDJMoofKbNQJagBdWw",
  "key5": "3zSrviKicoMfbpTD8ZH6tDHwkBwu2MH5QkP6KbuzDz4NUNfPAnxJkhbgWtUmUGNvx2kAstVuFGXUJhVLSdQ9zEpt",
  "key6": "3GqqWqX7Ec2cERQ1SBum7c4GjBxouF5ogmaMRB6V2pZbPHW136WFnsLedKHWQyj8wNvg8qtN4y5yrfkw2BHi9fEo",
  "key7": "7b8QTnRYz64XpCBLnxLSVkez5GRXDi1Y1WXC9u3amAczXtHpG11k5R82roP4TtHEeiZNAgR1d6TmPr67b8nTR1g",
  "key8": "58jAGUkPFQYNacojDmnP4Ej36BEss84Ui1C42PZhAoqwW7Ue47JSbteprdSA2ghEVpX8LL3ABisru8tzMH4tH5qX",
  "key9": "3yTAKJxuA3voH825Zqpj7i1RSdqByu152N4rCjktNy6bT9na1qxqRKdNmynyhLFJgpwkAvvZ2jisDx2DEa2YC9Cg",
  "key10": "4PqBXQsGEmQpCpu9uAiWwkGDG6KhRNN4mPNHgLYTEXxDi8JCJgpRiqBVwYMhzXUsSBBcXtjmQnJmqagzndU75pUe",
  "key11": "25782NxFz3kPd4G7gVyTnmFWGeRLMVTcSSrF6A1EPaiaS8fuSjGtrj8XXmW7yH2ixeaZxSBnHNRma3UHm1vmks4C",
  "key12": "kZ2gVNLQxQc6zF9L8w5XNgYKbkiFfxpWXshZY1PeGKUicynpLJVb64YXdZfzgtrkRPxizKhw7fa36dSv4hq8uKH",
  "key13": "1qSaqoigPMtn94wSgeS7DgW8L6dtvyN8dpYcE3F6xuyyca8Z73bfWZcM4chZXP6m5MqHJBhpHgN7Xq4iY8nERLN",
  "key14": "qiSGeeeEoPKmJPq6pW497CXDn6ehdy6RisCbq1qT1MS2tZ4TShhzxSMSMvKBbSpG4dpt3rHYUATNPGhkxijE9L1",
  "key15": "QTiRZs1WhL5BkZkCY8y5wntKt8ZMpZe3wz6CKJHSaZezD3RuwQJW6gBh7oBqM3trM18upYkqsJvo6ot3xCQxXGq",
  "key16": "3CktK17TAwYpkCJEKUDTBETqjQwF86iDL24xnaBpBzGeovb84G39LGnSDRChZVGn4s3zrrwPAJRqdokAGTxF4Trf",
  "key17": "Xun9SjLec193gJ5hnmk4LGgs3zPpWic339qftR27twQVpJjkKzwAkW9As4QZEnuvkFg43F8RUpQNKPpSBNAzvbX",
  "key18": "39G5ZnRiCPPB4gN5UdDfa5QZ3WTMpKd7Y38K1UaN5RyhUwWHWktYvkE54QiLsdizd8zhBMoqwFf6cDdebXKgg4dp",
  "key19": "5fMhBSjh3xCK5YyLHPC5bWpRPNXXJtG9AcdehdDXqamn1xYHdD6dRfWnQTPsuidafp2HxYYQVkMqnseuja6eEyXC",
  "key20": "3D2LRxTSFyJm64KsMh23WRTEcqcHewcuzhDaDt6TtuLpLVDa2ZkbUtGA9vHWGAs6pvALgbYYMgKq91dbN9wTHJ3V",
  "key21": "35TLunA8RJ2PoEhmkdRan1WxygxtyAaNJQmbgrmcJoxwerBnht6ULzeHJRaqTYwgYd3Vu5hpV3EQhi5ZRjwjM9tw",
  "key22": "KfjReELNuXWd5jAfUCzSESNAAnf3nwXwbQ8WL9TnaDdLquPSnz9ahBBtuVySsC5TivCDBKB1AB4nZKNEAaLUMNX",
  "key23": "5F29Km5vozhJnk17AFVAeAWfbekDVQdBxB6Esqg1JH6c6Z49121sJcNJ4ZSQB4uehMPtXeySizdT3VtW9UCnUsF4",
  "key24": "5nWMhW1YhHzNVE4p1oiDfYtanSyDYgWiCfTWNyBnn8NJsub2Ced4X7KZGJ6caC6ZaFFKEfMHXRp2JD7EorcrT3nP",
  "key25": "fftqtwC4n6JXGdfsM7RGmhMewD7rY2aiNAzKySF6qSreN4E2UrfnV2iBQp24PD36qUVJZyeTqYsWot8fs4WcjqP",
  "key26": "2bYbF6wXLJL23RkswrwjK7fPZ1h7rJvZoMz9Hjjgjk6XQzHSNKy5n8uYYQJ2KmakBY5o9KWW2JCwgMUe5WjZ1K1d",
  "key27": "46JT4qntDAiiBZ9yAVQ8p7r49KPcWU2TXNitGBeooVft6BBs6mZ3EqKBqieT7mEA8UD1SvdgTVC2FbA86q8QRV2k",
  "key28": "54UbexNgnfobs2V7GG4e68MzXYY25Q4wByb4cMKo5ULfhdrdMdsP3m1Jto25Vz93kMBJgxmsEwhqFoMGsCk8VkKQ",
  "key29": "43NjkLsqYFVQ5hAnVAcVtW3x7dyDsmYUzrXG7cwzrbQ99x1NRMACQhMrY6rXTCr4q5d5mH5eQi6zpqV7oryvDx16",
  "key30": "2ibw4fY9ZGPEgimyDzJcSRRyGzjaCQMTKyGs1VDhVkXhDxq87k3UazysT7K6erdxPV3EnAyjP5eqUfKcUXybXc9x",
  "key31": "DresyDGfTsVCd4rzD71NnUnEyigr4PHtAacypYAjfDE765ezH7JqFGs8BvxNNoaRC4ji3GUvjEAScVaBrSxs82a",
  "key32": "3bhdmZMQEdQFYEEFdbko2sLJnFSBBEjue7aADXAFuTNgAcwuPK5Q5EvQfaDkx4pVJiBhEzmFxNi9wdGujbrrgiEE",
  "key33": "4PqkC7kEUV1xKcMPXjknj6BtZJrqDn6ADDQb4UXASCPECWA2TmvHGPi7MumH41piLWBxmdjTp4XyWkNzSM8DjeRM"
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
