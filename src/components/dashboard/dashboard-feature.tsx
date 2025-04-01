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
    "57KX1CCxAMzYBcapDejxzAd82UA6xxa65DqqpMmETZ4tTbE4tRadvkEJBr8rAZNi2iEqjs2Atxv17bMQ9oBDXYjN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Po3pZ2hc61NxEuWbRHoSJTcrdUUJc7duGRMyoBCfVRF8QhTPnFwftZSBi1LcMdRv2Th6biLKBk1gC4VofQvLHnH",
  "key1": "2BSaHP1JstzvUFZKaU6xYGZJn2oCKCnuDCpwMycGG9khimpiMTa3CYM1T3frhhtRTvC5Lq21aSjtWDQ3MK8XvrnP",
  "key2": "3wYYvQ98WyYdVSqxeiMmWmKRUoTQ6WM9bZswaFmFksLgLoJL8ypmvnWXZiMRiPbJC3U4RfxSpTumNMEtFWTznmbQ",
  "key3": "AS23cDEaRHxihdffEYvyiLU2j6u4cAVbcXugXa9Y9NszjDqa8AaeDHV5cMbgNsZyJVYSi79Q9ctWYVvEQovb27J",
  "key4": "4pBvVhdgY8wQZZ25VWyJbbF9gkxjGscQSt14EMTZ2giQC9CnEqirtJnoGwGsNjEKhjscidP5Dc7ckMqiEyWAK1NZ",
  "key5": "6aTA6A7AxRc4TEHLq1PEWBC2Zwg5ywkbi1ZMhWoN1bwA4DzKqY7H8ACkFD3uGz68zpE6oMGKPExPZHbHoDibXv7",
  "key6": "MJgJjde3qe15vrQsCehytSTU5J23WgLB2W5pgsws65qfJs5GpjN6mKZ3to5fjZ8StTuRb2TtEL8ZStyDzeWKrd8",
  "key7": "21bpGWfupohVREXNhFxvbNGDTuKgbN6ZoQUydSnawzkAorSeydgvK7zaRuMvPHWWV9BpxBKqo5ByDhnzsWnDyVfg",
  "key8": "2x29nVNEBpKCkVksW4858qR7h9d17DiaS4EypJDjpwcnmVdKBYae2tTCn65yC89Tzpv1nBx4ik59ZZDYKXwV9662",
  "key9": "4aUNnZRZ28qUzeHKJxuwcshT3DAeMskS127vSyDookEu7RArBnFW3x8157fXXtqXbGtsU47joKZ1cGsr2uktfrCC",
  "key10": "3uTrhW1ypuDDXx5UosroxbMVvgmHJ6ryjhbHcdcxXYkX2avfm7Vbe2qwLiXLQA7eRzakNfxx6f4ecwFx2aXU2oFs",
  "key11": "38KjQ2whL2EqJWkHBA3XL5qYGVGBHokCEyBmMStWDwv8urHK3caKPcEbodg9LHGw8c6K4kA3WzU7VWAPcpXW8Czj",
  "key12": "4tunjzJ3yTvz1dq4Zh3XzjeYPZMLWjbVvD45fV9ZD5z7cQVhsenVd8stti8ZdRM8CohRmAgZAy8TAY4qB6PzaU4D",
  "key13": "46qyttuJ2jcm9NW6pw8fteBd437DnuT4X15eXFhQYVMQBGPZPoBtGjzLQeDFYk54ovvSSBMWRUqKguje5ncS6Pfe",
  "key14": "2HW2jhwehekPW8qiDQHn2kpM9KtEJLVGABfqKyxzwoCbKYtjoiPpV1x59239ao3LhvrUsQAQtVL9LZxKAZYEK1Kx",
  "key15": "42qVdFM1gx1tLjxPdhDQDRkHE3oZiuPDjeS3nCNWD4sptpgdYnd3Gb9yGoknAkxjrJQEgHLLrUrb29L357pPwoPv",
  "key16": "4wmvcFhVQF7BckKK6zSMd4u3yUpPoxSz84ooofQ8N2wQ4K8sgXq5casFrEmdbzrZVJRgGcXAv62rUe7xRxkPMozr",
  "key17": "3FFfqcPdfAnLdc2BW4wFjFmpXTL4FRdRFPLn6K2zApe3i4CiPZ7gVV1foAdfsFQtoghx39uKtNYsNEWd72euKQwP",
  "key18": "5Y6j1y46z1P29MmWm9j8yy9SCfuz5d7jLtuy6EnR5CjnavULmnEAMk43Pm5eHKQpsevfxak5o1HKagD4Cyh5Zht9",
  "key19": "rJiDVzu9UXyBe6CbU76QrmQPxQri5dsZRpLif7ARxNbdP1daxrgBErqYUqqhgWRuLJXqSKkBBg7f6PV4Zx8hoLn",
  "key20": "3VJbrUHtdM6BKHhJu2pQHkngecTmiVA7NZB7nRk22j92CLs21FhjQrHbE9QoNEyGMtVHD2c7aLNaVrXSaRXuigdv",
  "key21": "27JJ9pZ6SQErAMNRePoD8CtLYSYPydYvjpb1f9zx9uiHrsHvPcg7H3r5Jsi6YKEN9bZQJciu6oUSZTkdqKp88BTD",
  "key22": "314x8efZQLpVaUH9gfM3jv2pxHwgd62bVz7YujBNk9ZjQFaZGRMFSVxL7o6AHADYEjsqEMe4BHEvQUnpvMmuTNZW",
  "key23": "4Eq5Sgwp5KK11QAP2x7SRm8oSWr333vvGjHEMZjePyr83KDP7gsWZcX1dpFkvKFnnn9RAZbFgWsgTn1FDq4VAgcj",
  "key24": "3dx1p7Ak6T4raV7yY1eFBUKZuCcFjmqwJnvFcHdjwvV6Nj9mLJATjWvaT4bg8YiJbXfLD5X3CPTh6yUeTRZTZUsp",
  "key25": "43KLagHatHAAffMfmxYjq3cd9sR58o3ExAb4BCj8CmdfMR2UkuMcY4Td66nN6nd6FnwVYeTbc1VQgkhEfLE143aQ"
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
