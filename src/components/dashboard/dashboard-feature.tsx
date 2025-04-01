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
    "qAuzJNF2LRBA3Qxhm5rdefi8UD36AYS96TAXo5cL6WSoqJ3FuJaUtyia4Ec7FLYBLaeZ1kZzJ1VTrbvEnETaVdK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hN2vVshCJmcEy2xzQSJwADbKEd28d8y6wNqCwAB1RR8FWYzbdCmPAtWjBfXpAFcYnezDPfhdVd64Y6t1PKbLRXz",
  "key1": "5SuW1wQTS1RtQSsr576JKz85idn4UxCouSfFZiq5ZJzfraW83WZ3ZrTZSR79Xt34GpQyi3LLGPgrbcd3crv5jQ2r",
  "key2": "3obqowrAZYW4XLxBqyDFPBnsmokD2a5o6DVbLfLS6sBkw2Zj35UzwSZsFsDEQoJK3ypH3aYW4KjMWp6eRM4e4SH9",
  "key3": "5qLsUMokgDHtXKMKxFQEcYmTLtJ6jRmGYKAa6b5BQVwguK6KtCdKuWRxy8RydU8ZZjY99PsHKbFWAVUyRN4GV8kB",
  "key4": "2UshE6sci25r4vzfTXnPu5FvGqn6S7uT6jQStJnqyxqPC87TvEbrHVPLDc62ZktGm2Pi41zQGd3NXimJJd8rdW4R",
  "key5": "4cfcbmEaGf2YFUDDZbKatDJXm99jEiJpsE2p8w8AFuvosRZJMnNHWFnMop69a7uazYXpnjkPogrpb9ej3JoF8yBy",
  "key6": "31ZgUuUydB1ADfghCNvUyUCroqwVJdpLy1jXFYVCedBdDyD6uoGDVdDcKDBURQ1h158CsyUoLKQtj7ixbEvWFciS",
  "key7": "2QKJAgkZfkdmmMw9HkFdki1cCPGcFz9Jj9FRo8mVBC1xUez8P96uvouLPMvtZqZy3xSiZFoihp19EjsMBr9dUBvm",
  "key8": "4E7qyxc5T2tH36UZAGH33RkJkJfy3Y9BMTUwbp5LeTkTqSxcpvjGtw73hcVqKjGoMgQinywzrG8UKBcLuGjLmZSs",
  "key9": "2f8gCiYToNcju5jsBDavWsqTXSmnKbYEgCgcADdq9ZRHmPQLZhxV96hYS7J3J153JyzivQpawH5DKghPH8jpfgtb",
  "key10": "dNMDEWmqTjxBsMgZqdjKYEj6WvtyCG3r4JQAEE2Z8obDomSPAR62MS1jqATD6r64Hrkcp4off6zZsBS7R7c9qSM",
  "key11": "559WGTzxVRgvBjowcpn4hL7FAUJ7ToRfYioibwpRYAAYAKjZMWszysnHVjEzQ6e2835yWESHMK7ui5zjsft8JXrS",
  "key12": "3f794A4jNK7iNdy1Ho8XGvs9cCMRu3ZmQHqtPbppUwz4YvwdMNuANntvM5Y9veXdb2wZrkJ8kstChfRnG1WN7PRo",
  "key13": "5wE6jsnc431ShL5scWviDn3kMLjLKNX6vzmSQeYZ9VzGNeJrfuzncbS9VzEjjsvUZsufVNxiCGRrqVaxUtXcavr2",
  "key14": "hAZH8jd1bhYj6DtUtYNt2TMKauyMQjLSXvt6X1QAe4w9gF2ho64MskgjFotHfXEk5exM4qv4Fx74cQ65UjYnV8x",
  "key15": "4CWAusZesb3NxaZXiCKUFrjzY8jY7AASMXDBraHzZfr2iodWuBLSWEPWHkhjY5q1TYFVBcnyzzFjJUMXcwjsUpTe",
  "key16": "2TY7xxFUDJ5TsoiM4ASfw6T5vMb5evQRiCDzWrRbUBug3AbE31yjbXriBVM61BK4yopSa7LpcYQijgAbXRY2CHK7",
  "key17": "54FH8RmRtqUK29JWE6jGnTWpxi2o1yvU1SU4HS5y1nm79cNZfrJPLvXZqE9JdFwUF9VoNPaRwhEYp7SL6gUPcBY8",
  "key18": "573iEjvk1sMgniTruj551Nb2sjs47sMZYFQ2Kr9wnQyeyCek64MyrMXQLWvWz9tF8tAEr65pgBopmiGKafDHKabd",
  "key19": "Nyvg6DZeVJshL3Fj2frmqASQt3c7fhUKXbvbaKmCg5RvfPTorenGpbwoo5psjbD2wmXXoxQfjnFCNKFPQ4mr6Yr",
  "key20": "34HTmqCqQVFd1AM9kkScCBCgEmFN7VXsqKj11QJbjhFEWKTK1b1BtfM3TkzWCAuieC2mRUVe7SY9Y7S9b6thFuZg",
  "key21": "jKBerkZ7bEJCoWGMW2YcK7FA6aScLV8Z2CPLq8Ah6T4bJ8yAKvfkkjE3dvFFYTfH2MuJFS8z3npW5iXZZAaVZk2",
  "key22": "5ouWcqpkZ4EMHpFetrBmHQeokJfuwBsvCnDvaBsgGtDUXDhxhwKeMrm4tFw8pMkJAkdqjcKS6bcJfrnEv7vrCKpc",
  "key23": "5FjCxk43ex5WijHDuNCsDXiBhHssohynLFfQzM92GGshGbzzpMCgnqsxrLFuFJeKF1YRSwoU6jkhS2XGXRRhpJmc",
  "key24": "4mpdBCVv2T1BFANisjPGWWZ1PhibFKYaWiUgzXHZDTQFa5X4EJMRzeUsPzWVzf9jnVL1ychiLrbM13Qe5C9XL1Mb"
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
