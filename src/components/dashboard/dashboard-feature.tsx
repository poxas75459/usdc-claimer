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
    "2RXVLDXG3v6ogJmR7vfUsxQ1btW2irVzfvEzSBeYVtrzaHe6i9C7M3nKpfUyt6WGsgmLLquvSY6dakqV9RAmatBM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eJMaUpRJfLqqKMQ2UKBquR18WaM3rMfg4LjoSCZNU2rqcDcWRmrL4bgh9U3vNFeY6i7wFsWwnPX9HUJaqkoTSq5",
  "key1": "4MpV3LdgMPqTW6mEq4DKnuFVvdDwPRgA7ba2RqwwsT1bjpu4P3wdszw7wZP19RdY6yoNrzBQFpjqMYnUw5P6ocmw",
  "key2": "p87sTkpsHCKNe2EQgM3i98pU3ijed2e8rY85ji1fe7AShFcG6iDNgedqDF1yfeisMNnrtH9qar9chCJvDLTH3ea",
  "key3": "4r5AYbQfkTxwh75EW9qLNxYorEG1a422hQnsSXFg3dpcf54cqogNVCSTheqLgYTfk9599iQizXYkpK7bx9sLbVnN",
  "key4": "65CkNEen9X9zkmQHARgRe4MyTCiDLTgYa9AgexUMR2yRrb8YUwmJVMQJWV5RKfC9RNjut6Wknsk2NRDZmq55LTva",
  "key5": "56Fca6jkHkteBj9HK8pJiGW37sHPzWi4cRf4tByea4M5C6z6J4nM7gfTNJATKvp8X5RogMthEhfTe1qajQted6Gw",
  "key6": "4aJtiArQhQL2uoC7utvDPrrGzpjppk3huhnB9Y9Wu9GEtWNkn2JsMb4pUQXmPY1V6YkLrBRDzHSkwy4gKrRzgaKa",
  "key7": "5CB8Kf19chMySfAr8am5XbVqKGxAVfEyiyJwcBiULFHSR6AdAr5vAZggmEtnNETsji1WSVQ1PVHzHjq7WR7ceWdi",
  "key8": "2vXEzFhWisa2xQcg19tGgjRtX8XQC6LzNdMyDELQ31WaAaDoFiDDXuPX9bDh6mN9mjLNQVVGjsXqjh6sHBBXa7Zv",
  "key9": "5VmuGtikY5LMv3cFgG5TPaWwqb8H1XDegit77AMJToha9AKTzQcRBGzYevUhbXKPfZMdDafc5FTZzDEKmZ89qduh",
  "key10": "3zDpBHWZ88iBpt5wx2kTxDDpKGU6uYopVfS2eC9RMnZLpcbvwXYW1YdXU8H2HRUQSeNxS5NLtHzB1R5bsrSaLeVL",
  "key11": "zxuTQ31gyRoR36MZcMyWwjH8SorLNn6r2HkNWTuP3vpcuPX2Bp4oVdSdFoCG4NprycXUGnv8Q5Tqu6csy11sUvU",
  "key12": "5Zh9R3RijiPhdDvkVPN2ysPeRwNQiBmxkv3XhhDSCQ4APtQHEha1R6tpCGSqYEtr2kEs3YUG2Q4DwsFTLikMEDW2",
  "key13": "5F3CYoSQLRkeVz4iBpxY1ihixA5FQnif44WN2g5ibRQPwBVXcscoFwCnEgnNNY927gn2c3v8egUdSkLucZ1TD4z1",
  "key14": "3c5q3PKFbUcyhgoAgxMVdJF59s5cLrAUEeopmhM3CviSQPurJ9xDmZZgsztxZLiMwpVBiAfJRjSoTbHhkEgepC2y",
  "key15": "4MuJMNvBPzLPW5YSAccijqZzMCkHDc6DtrnypsMjSE9J25dJMMyiN55cZrWmNy1rnFzhVXWyDg4KUvK6ctUt3rxu",
  "key16": "42bRMsyWaVwVCd4NMiv6QYBfkxhm1ub5higQKeYcUvA4fw6CG2nsdYDQR1UzhdbRMYLFEjjp6FEZCmCzVCY3Pmtb",
  "key17": "wS9xC2NSboJtt11f6dvdErVZYC4n5hd8huQn31VZzrk8PPSYAKo39CgzGLhTnHDqvdHWqrX8tydz4uHKarJDsy7",
  "key18": "5vX79cGVUDuTdTQeKz3MkGRE9QkTte3trCNcUcyamCeWzynkZwjjGX48DkVHJxi1u9LFnrMLfB8SqoWuL7RgbfGC",
  "key19": "4QLJjNqyiS2gWzxZLAmbQgLhCX1wsPD8tTjzZnehDjGtiG5EznLbd5mYKD5DoUbPaSmanAXwEihPH99ZjKbTk6XT",
  "key20": "uBa5BvA8rXU3H1zwXDbZxV1YYhsjHJSQK4ZUdNQNAEEotmcuDmWcPDiqmgS9HhuzJYW5r2hseS8qKJraFPFgDmu",
  "key21": "45CSFuk2DfQVKkSYy8VAUaBXUPAF3C81YVGuGR721C5pj8nbTGaZkKQ3pR6t61LVPeZX2s1ZLQKiq8d6fe7tYcj5",
  "key22": "3A9VZC8UepVMYmnY3KHrX6AWmPJkKEQCoyhTUgvEaFGnfLdAVmbonMQcgLSQPbSCykJ3TdAPQVKPx997mVWmg5Gz",
  "key23": "42xgsgNtFpq4zCr8UTqpwcprEWZxSNCihPXPD3z6NvXTRZSNYQxopAydTKfqoLH4JMBtj5UMvGuyVjw3PdpiUfem",
  "key24": "42rtLpLAaj8cKXoYUGtTN9GHmReRAmtfohbqzsmNhF7jESeZ5DgNZVmJAQzQi7Cz4v74RLT8CRvBo1tEJWHuP47D",
  "key25": "uBT3fS8mJEofKnuU9mCbh5jEP7Tf3Nn4GXmHt2R9CzDebuEHpGuKDBJXE6bNXnmdq1Y8DU7Fiup4Kp96nLsgBQg",
  "key26": "2KrQJ4Se181yyPYRLYDRDVAUBcgGCob25hkXhiZMTjN17DZ6G6GKADBSXAC5WkthBU3FvViet1kuAWFh319XQzEu",
  "key27": "3NArCmESTCgJY6cjDVGdYtUDNVVP2g6kcFAuR8scQ4Swf6CSztCgGCsXZDetPNqBsV51fMnML8ZPUtDz63XoYAP6"
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
