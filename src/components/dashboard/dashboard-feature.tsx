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
    "3JNAyk6A1xSimw7HdHyqw26xtYCSpemeLLEeuUbQY3EzfQjLvbm4yJ6LUjAyo1pAJkHcG1Ui4XswCyjRqACwTtC3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p42w1GMMKhd89unHUd16n7EUrzARWDJBezVchRtEMc9akBBxweeVeiyxndy8k6fCRekC2BDyFv4pnkXhGjXnGaq",
  "key1": "2oNBGvhiWU3LufQy48u2DETF3EpJiBmKMZxpfqVkmwVnWhUy7cRmSwwGPcTWvGixHx2jnk2PqTmiSTt64vViXECy",
  "key2": "ectMTmXMEfvegPADX1YL5jvbXkxNWzFgz38fy4Xkp17M2XjiAsN7zhfaMBh3bHmumJUdnwiXYYns7BkS6CPkXLg",
  "key3": "HctXYZz4zKyo48knJdhNT68yCduza6jPViCmFSLSbvmKyP9dHwRqaC41CaxLn44n2WSC5ZRY6ZxgT3JsESxvj1y",
  "key4": "569jup2TrfjK8ZY2qUGprqpjv6U4KGFZYiRGnpxhXANPxHmQpJZUjaJ1hQUbWYwiY12UwfHLJekwG6ZSo7ZW2Wrq",
  "key5": "2qPPQKNfWG4hjTuDQqGhxVYCaLPBMsNCRJZTX9LV6f5oKWBLKzzRtmS3DWnmYt3AvteQEk1aMQQ3hJFZMAWB5Ge8",
  "key6": "2aPET4HvugoLJixVG2Q5Y49EgoCsTACCof21a6wYgnkYjpr5xnNG4Bt9rctGUcJVzsUSCJZgWQJzjjSRsCnKy7CU",
  "key7": "3G8cXoFdaTLSyKpE12dBC9Te7nZZesNbCdBTFYcBjGdeovY9eo4yLTBbL8FskjindrzGD45DgS7WkU3d2XFpot53",
  "key8": "13hsZeWmKfVFNk9BTS4FGhj3TdnN1ZRnscsSpuRLvTmRhUkvysnmmacvW64kfet4LDi88VpKAifNsep8g3sqLga",
  "key9": "p4uNdvK6GioJbJnBhcJL4mQGCYLd8KHuqf4kP79kEHzrBbdhGSLxayJDbbTZZpMSjypFLf2yXQ6gV2mogp7FDB7",
  "key10": "3ytrg6FLmornXtKCAQwTvJnCtt9Xb8t75o9r6HZxXeMtNMrm3BfidTKh3Byw5ZamyrHvALtxyzUbYw6gacYnMcyq",
  "key11": "2ZqnHkRvYwDGKyp7XMTUgQHfx9JddPNL2BhZJKG4Nn3bkVNkJUxhD7xy2bud2gQm8sj5X1N2KfLVTVXWuqt9j6ct",
  "key12": "4rhyiUbQdbDsPUcbD7TpmxhVtRDM2PHiFU3k7Gy7BV5LXkz5nFnAK19AAQJS2D15VobKxynbW33cq4SJqYZzCXK7",
  "key13": "4dzXj6p8YXcMwYoQ31vuhuDZGanGQedRgC1iEMauBTxq7Uasr1LDLwzciFc7w2sNhjonqAoHp7ptLhJdk9QvCxyt",
  "key14": "382vRybgqB28c1yxjrnygjkmDpBGuNCZUBUDDk6xtnrp1mEXZmdPTUKTHNAWQiKo8Z96fSbu1bzYBrQDEiWfL6uZ",
  "key15": "67VBhvrtNYmz4u55zbrFMqKZFksnjXqdVmYQq3SppShLsJVQNgkzVcfJGMjpryEbszW5pciCzVQvs8dawuntsa6p",
  "key16": "3t2HZYr9N77Dc2j9oFnNaTbsHmqGYqx88LZLjXRqGhfdtcWGXnuSXTEZLSabVTM16Pq5rozTuGRJm4iJ1FboMRoj",
  "key17": "5ZKJfowCYYTFRkEik9DcBeYRhhQbNKKHLS1EMYTYk1Yjn7Zm416Gtcffekfj1FDrBkXRYXSdWH2Umzd7JB9p2GqS",
  "key18": "3iPuHX2Pq5QctAU6Z5b6cP5XjnbMaJnfczY4UYbSh72j2ZSvPhWELsgrFXRbkHaXupujKDcVuQSRqadprMjo1epX",
  "key19": "Aibfk2LbXw6AtgmVLs6JuWGp4t3R5g6RMjCe9hnyciQrRWjZbFcK6qdrL34JTvSUEtaJvjMeBqGNsiEpVqg9PL8",
  "key20": "xY2riaXGHqP2xKjHtRNwD8QdBETajG6CQqdaF6XA4axjN2hJgAqPSvxRAMiEd3R9UBNBaUxL9ukkPUQRKqtzb29",
  "key21": "4obhsoSqHKqWxF2yKLvc7kKYPLJafZ2bwWYJyACWas3s5WVSpZpTx7Cp7XE6pVGUGM3hM77YtPRVgYNRJKipoY1f",
  "key22": "5bBffNLT6kRY6ruZxehWwuSXkHYARZnzkaRVCr8dMFx1jr28tcccwAkVyBxegfwDmwhRdf1G434HAtnh5AUXq4KC",
  "key23": "2q1Pb5AHSAutuDmnWXRKaJD5ShCvXPwzJYeLiGKxLzkymJRhyVPugJXeGNNviYc4JLzV3c1excYAyX31JXCuDEAp",
  "key24": "4LHWZuNnBksonwJoRkeFkAVPFKoii4TEuFLdTL9C51sUwjrThxu3isvBVciUR2YRa2cEBXTTu2JATiTkPD5XYahw",
  "key25": "63kTdMUtLHDoR1SfVgQeH6pw9dat8Tc7KJBFq6NQP8ereiM6nzcxFtmiU1JTYdrvhVL9Y7mgFZCVLG4EtPVfQpYa",
  "key26": "sbhoYGqaPgy8whKHm4gjo1oHey9HyWx26QnUnwnQJuWdNmPZwmbFrzb1Zr1ZEt1VvEFmspfeoj5Wij1iwLz9dtc",
  "key27": "32CWujnhkSykQu5sR3aDzm1vbhx5EyptNg1AWxA5h1nh1N23e9BScyURBLSUfZ9ocyYQWMNTNFNTLkTeF59w3bHg",
  "key28": "4oaHpBd482hzmyvFs8rDFiFEmVmSyi6fs5q3JuZZLLGAeTfcxdwVnfoYJHEzMziKW9d42zWpmEJuajYvrLn6fDBX",
  "key29": "2c73otsJpPqc2LEWXxLb6cEJt5C8SHSM3CpLw8GXb6ZzfYr4waAQdpBR81jsj2VUB9dSRBqjYrokhCzbHFsA2agn",
  "key30": "2JPUydEvSLWX88CoAZ8A29KV7tJ1CdRCpwuScrtdRfHfC2ZTyWr13nc4GtzbkkjuA1q8NMojH9bYBrdfK5HTuyu5",
  "key31": "38dckpsLjBhykUwjeZeNByuTzt5gngA5Y6hVBPP2gfASSgryLTYBARvR3kAgtQMAL1gTrWRndwaZbXThoZm1WbLm",
  "key32": "3vrq88epsrxfggKzUm7PhAdR5GR9wqi13JNPqGGJ9xQcY9JCYXwX2KfYEQjwr3667QJcRyNEVHnxHJe1kX53nWNr"
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
