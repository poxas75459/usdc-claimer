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
    "2ywLay8Bm4cecoEWyqr615GUHtXXTHMQ4EiLRmnb8uh9kfMQCmzkFk6pgCGLWsKyEQWg3ABBRpDZJSyZCNnKXV5S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5unvUuT8SMeD6aFHay5ueRbozW67Fn4GdLaTkL35Vmf2SAWi43rnghs61zoqgWtYzMAa2vzz54xgLHLHTpzvYLNg",
  "key1": "2N9XTdcCQW1zax54kNVSaSQbsFSpzSVbm2Zpp7KUu81mF28jwbiq347WafpKYQ45cdqnFBaPq4tU3RyX8vFSrFi7",
  "key2": "26RFZ5hWTAefGWsrgids4e9PTXNL4ULsLyxX9qR4jRDQj8TyrP4qhHcBWxu77nTtSnn2Q14S5CqJYjQYS6e8d2nE",
  "key3": "3Dw8v2mCm62sHynueB5kQ4ZmvmQEYDfhWczUaGZptCrA7iGhRfP6NymaT9pTcsS6VMuMsTmsWxN9uExQWL468bfP",
  "key4": "5ngrPdAcGuqaMUSMTyucRyBe6usAyrvcB5JMn38dzngX9YaUzq68hB4ku8PfpcVFBMqu8AxHDayPDpCALz57hX6e",
  "key5": "23Pb5DuFdVQfYNQaKLbh34EArfTRa8mivnz22yshgiJTJmNT5bZxpyK1Wm7h2CUKrP3K8wuhB4iFEwKjodSvK2QN",
  "key6": "35B9K6dPkDUyhcsfDM5Hdh3PLmDw6hrb9JSukBwcHCmKYVCxwn8XbwwxvfufJ6LjUrnPJen8fzaeCq9NKMRcN6w",
  "key7": "4szmEer2X4LzPgCBu5po3EmHdWpeXn6ZMtbK4FavGHA7TdnU3egdP6vZkPmegBG19BPL1uQbvvNbMTer6HWxA7rB",
  "key8": "2muT3bHpAUJHyRdbSRhF192GNuWM2BWf5K4qRLUtRsRuQe99JdVjL2bdq4MCuoGcGxmJQXqSjxEAQJihtTpwxACm",
  "key9": "3ue56g4SQgLaDRqaM7Jh6FbxiAcix8xKStqQv2khhEcSGY1ykQCe3EaUTefc6kJYQGGdzvY99x8ob1qZZ1A8Smi8",
  "key10": "rNXndvZeU1wrmnxbNqqCgxP4o8nja8yaETpBJqJqwSWz3t5X98snn7UVX9MrwMe7qjinDCNY7C53W4APP7cZGTw",
  "key11": "WWWLMMx3qeYKteoDYE3uuXFjp6MzE23C2CuUvmtF3VHq1L9K6XeGKy6XEV1yhCZiqSfrhT6TaHy5V8uHPmgSzxq",
  "key12": "4X8nEMSo3eSk2apxVQ5ayoUwCF69fsmwFtyEX7SFeMmUEDoeQzCFA8HmL4caLZ1BV2ZvXSe8VjAugFvAqT14RBjL",
  "key13": "3RX8JvijRHjouEarKyrikvKQrdnSvjXDsoE51rB8y6TBirBUtEK5oEnsRtJwYudVsFttpENG2wzF22C3a85fZVSB",
  "key14": "4L5ujbCgnXD9sg17N5LUtMRywpwGt18UJWoGyeCvs8JQtZoBBGHepMXVQayoBgdXHxfiH5mxiFcd6aafLa1JofK3",
  "key15": "42etxGU4gMYZ9Kfjwy4NcKM4YDNhoUC4cEXFWSBwqwQhScqxggicWsiiHWc8hcAAheVitybBXpocfgPcy6Nc5oem",
  "key16": "3NJfY3zPUySsvooSU43EzoXUsC2aUjeEcnL3hr2GN25wxH4cnxvfU3yRW2VjCzCFQ1v5upcRWjmWocAC5qSbB6Yn",
  "key17": "3ANjj2qLp7sSSjbpPSRS9NUqAHDkv3sh1o1EfBusdUjvzZKF9nnxYpcB9MbQgd22MfhapqgtGhjkRxpSQWCMi6vG",
  "key18": "LwCMmScJLFHXWYd1z1VP8514q1DNBn7tR77z3VCeGEiH8bkFwXkLJ2vFV5eJzqmpBUSMxJXESPPobXiJ1bN9KMS",
  "key19": "3MX9ZvXxX9htxgqxBd7zmuC1kfj2GAQohPGEadXxgCsXJCjqm1SUYPsvuYs111QFQY2Jz3Gw2UEdLCmD6oJJNLdz",
  "key20": "5cSUoTQtdZ6hJEMzjrLhB2mYxm3ZBrQX3KKZhkg7n44GqdxSsxaoQK3ZD8SX41iwtSD88cxYRnFBf7Acqb5Dc755",
  "key21": "49FSWvGdSgQLdA9EMetQA54SRMAJ55HjGVDBpXGyFJzja3Ricq6S1tEgstjfxaFxoxfbNuUko7keqxech41tpLfp",
  "key22": "4awApG9upSNto8gKwMU2NJMRRoycJXsf6ZHcbPmHvbsRnPRdRqdAy7EupCZcUP3ymdWbtGTX4erpBHffDjguAUe",
  "key23": "5Hm3LnFKu89xGWnCzRgBoXgavXotBtAVUeboU18EZofvrAVmdMaeQ5p9qb3twKKCShQkcY3TDmD1kh5tqwkWZQAm",
  "key24": "5jjVjH4MmirtAedxBJjyUiYffNRqdF9qN3G8RxdVABDA6sR3ziiHsPSHNdcziWTwJ1iVxbiL1SPUNpGq9VnRRpFf",
  "key25": "HoQzNqVdgp4rqiYQoFnsDLJurC24YnneHJELsM3DwjJJELLMsN2Ty46rJcPBouHxz53qhtPcHyYaeSe65w8G2iY",
  "key26": "3eXuKjxp9CjksrD4fN2UeEpL3i73b7uBKSh8HBRPgpLv7GddPAsheNaFy7Zw9ESatMGZfYuCCBU8ZAitUXLq7Vad",
  "key27": "5DfWpQm8NLoq63c8xBNvMwDsi2g7R7HgkigL4k1wS4CwkUEuLtzi2DTzk2HQnPQjCnhGGKkSHUPMmCjWEUnjTP4L",
  "key28": "5dKiYpAUWLnPtRw4LhMEiJbeBkzi3B6mLLeT1cHmPdBVWKVH4Gg4xQADZfkdpAiMDuysvPNqDXrY22f2ATkeChVz",
  "key29": "3AXsnV8zZDnH2txY3NPicXqASsvxS467FSeYbHT4ntk2Z9LSVWNqmTvJcpDX2RoQ673fofou8GSgMMKdLrzQVEoY"
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
