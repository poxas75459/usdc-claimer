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
    "2yLUNtwBnAGsHxL89ifaWSpBAnGuo9RtuDGpz8ZFzEKUm63f7BhTbi8jkjsHkqrjTxgkviXxAQ98pRxtvWu36pS3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N4bjv5pHgSLqNTboCpWpz37y2A5w7aZFNJwVX6GgdRiQm4UcUP9hMHLyW5RA8WkyBedv2oWqt3TjqAnPRAUne9h",
  "key1": "4ox3EUnLBSGjKTZhxo5JZ4C55L8WXPSRiQfJX6xDuShA8gLBa5av1BuhiJQiGfDDWKTU8VDSWBAGf5TuB96h59Vu",
  "key2": "3xFCgqWQTYXxtx54z9ByUzgr4ThUTBcobJgLRba6GYFETcdw2hejRfnYruDGDcLDfTaWeyiv5tg2NGAMJzo2FpZZ",
  "key3": "5bZUaGMphjemgBTcCZYQiAeaX6bum1tdEy3Gt3GfUTmkUuKDPoi3fRQP7UFSZXD5BoGyvR5GMB3xzaE6tx9xYNFs",
  "key4": "3NQHAcv1A1riUoShJNotnuVTvQQ6PdeTvnAnN5QhFwg3aA5D3Zd8Gq9QRw8djQVC8CNuhEmxKnf8j76W3ZSv1DWe",
  "key5": "5hUFGB2PZLhEgMA9xAed8tX1vh33rXq9nv8vTRfZtBEZRHKbmgTp8AjBcb9m4NydJzQY5cP5oxVfr6R9tZomu1BQ",
  "key6": "2UeSkajsFMxKZF59Z37cruDp23hAP6CkfCxrznPSwmERFosjzNuPFNUgUtaMnU1sAr3uKptB8jdkRnbUU2HMs2KF",
  "key7": "qaBqkyxuXCrM9o2DFmghWRtnoBCFptDSKmaZPV3PiTQUHNFmZt5XSx89LCDS4BFeP5n6GnUgXr76JmmD2o3oog5",
  "key8": "dZ3bqbqH9Re9CkPLuwzA6FHMDbWUh7dsYVpUhpNQ1cuZgy92faM98SBRAHtKreuyyriuN4vtERvJ8tcdeoBDDDv",
  "key9": "2nMKWkMC9zxinyBFLrph2Jcatcbx3fZEiPaGHXLyfAqrt2EHV3KkZ5ZwexyMLArJqGtuHrDCTFEHxKcwttVFvZt8",
  "key10": "js15qtcFLrF9WBk7SBHkM2whwTE7JVQVzmYUDnLCNggSeFnftxbaVp86gdWoz3PD3BrfcxxKXbHEVaH1T3mNLJ3",
  "key11": "vEMGLiCHwFzTYb9GswCkEHT12Z2jq6g4n6DrHWTd36JqDCqcu7rPDbCtKq2oqRuBHY3CibdVUiYk7HZRMKsst4f",
  "key12": "2c4kwSRbYJx4u15JvoGUtut7P3mH8KGqrTQmpUSgQCHUZfqwBFGQwLmcTNqcKSPJtWi78f7kt9RDtHqMWnCTqhYK",
  "key13": "5wXxRsrxAtA5vzSGKhC11yLGSb8jF5HXvyuFFTqwArAWhbEHyNDUkh8EH1FY2MS2uUVKw1NKZQY8zbtbRTFKZLuh",
  "key14": "41E2xuxhMajetayCfJ1xzi3K7m4WsMJFJr9NTSDBuRrcvq1Q395K28U5QeJ1HntCaZQxdjEXU6U5y1tt9PcqqCQD",
  "key15": "3kJDoE1DGRiB6eJJndhAJFxxDxFzPJazpxqSHDwjB2L1PWCJTcvERtqNS3QtShnqrd7GwFnSeD1jYmAksq6FqmQi",
  "key16": "3j9zPWV7sSehT5agnsrLBvC8NpX9LZ6fKZpEnq2PubgWUmnXw7PyFgS1DqgcLfeU4TDVCs1bGaopRxEXKsgWzigm",
  "key17": "xznGK9saFXgTjGo5aHcyLVXFiQydQVh79aAB62ArWEqVdtNDngU6DWKCxrbk7SbxaHMWBtHMCgNaTt6BioaNa2f",
  "key18": "4B8DETQF8MxD5eY5fDqNWvxz7ykSeRU99ECigg6rZdAKXUkyBYNkQayARz2TjmukpoYZzfucUZ8XsCqWoQz8h3sD",
  "key19": "cRDssePHJAk2FAPczLdh5fousJ9aEMB9RR8DmPZM7NdCpJquftcrwc7NVpRKxPdVyPNUnABwmHC9J7Fh4nYVnsS",
  "key20": "2antJPBp4vhCBS91cq8j7BuH8gYC3jb6okdE2jQSLYVyTiHazf4cEDvufTMH3pbbxaUdxekXRk7NUum5wmcyXpJK",
  "key21": "5DWFe4T3VhWemsgAogoynwEqoByoyfeafYWgvAHygaYxzgkWQicdpBUKCGmTT3sxetbSjTYR9hLif2Hp22KLCFPY",
  "key22": "479cC4FAz1zCre7WhKyzpe5vBemCtWyirV8CsxM6odB54JHWoYDysd9UbiVSVPJKRuHBhSau8G36M7XZpUvGWob",
  "key23": "2duW39ZNLdsmqAJrpP9xFjPUAtjuYq3a4g9BfVu1QPC4kH68hHo75WBFhC84CBfeqaHwDZQiLcpZJadswsVNsoqa",
  "key24": "5pWeHZ3Z3NNzDuLvQvA2ZaNZNtqfXtFnpdJdmirQkSxLdJmrLkZNAWUPk6aDRr8czzsM7HV5AbbtJTSjGQsAAzg6",
  "key25": "2EF2dCPezf6jdWioDTeUWvx2NBTdPjqbCGhRPXsQqPhPvjRDvcrfBFYHWUYv6R29J3jZkwKtvFuBMPAiVcoLqgaq",
  "key26": "2o2NWCtvv8SD4mCTrtdD1RVS4QiytmxcZTqwXH5eiev2AztpJ3mKLjAMNfV8wBP65FrqNMax3WLasoCPGSBtJwFU"
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
