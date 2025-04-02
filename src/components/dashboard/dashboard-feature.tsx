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
    "TtwaWNH1UVBpdWmYu7b6vdFX54TDZ8US6vGzXxGyVRd7N6eiXhAwEpCdmjeFXAeVnaA6HNiAgtfoZCV1z4eMjoi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mpkWALz8dr6marJe7kr81jJBTtN3bZjUCcfKYf8TmX9hWDkAAhxtwpo36unZDi3sNNzA5eGufMBNWzhUzS1RFG4",
  "key1": "srCxf5wbqkHSvYh6grFvCZTgLGNeQXhVG2bq7Mj3F7fLd2nPrAcPyXTXxo5aacdfChhsJ9mapkjeboFuhVWLWaf",
  "key2": "Ny4vwD48hL7PBqTTi9kX2jWHAtBr3zU1ioK23sMrjDPPiLAhJ7EF9XiU8GTTtHUVvpnZujxpSbMAUdvw8piPHuj",
  "key3": "MzkPBdeRZmctMy7YGfFWr1Cqs6JSQYASQGPbr2GKXpWg894FxDACkgf7x46rJvsEYTG4zbVR3ZFC5fe2BgtRHCS",
  "key4": "2i5Td8ssTkpNdkqsEpDst8ZVdTV7gUKrfrkSzLY5KFEPNsKwy9mtr8MqGjqySTStvyLJpBXxBPMGPJPY1vYP5osA",
  "key5": "34AhC7GaBYriDYBFcbBH36aJp8CcVGfHja4LgG2Mmebsrjby9bEYiCXEefihDkPTx3LwdRb1T3on9MxoJSy8pdbM",
  "key6": "59GUHugBZXe9HsPnJikVdFey4fybRBTRrizWqzdtXwox4uui7gMbaq2v4sf1qEZZavdJ2PAMw63vcvhALz8caDKX",
  "key7": "5DQLLPUynWEyfj6F6dzwSPNiHUrB7Czz22Hqhnpc3KEZ29k1jms3fktHoU9dw731Z6WPoMY38bZx8ThERWRVYCQu",
  "key8": "49wAUcCBBVZCVamXz2qL9xkKAMW8WiYY7cGas1UmB1b7mb3mbVXGYF38Tuzv5iaDWKjr6bwBYffGiKwy7fm43Fr9",
  "key9": "85LGjxMmYQXcSh4ed9Q8RJT2JipcroP5EWMXZYbE37WTJ1uY3mfWcZ7boUU4oBgRZfCRvdwxaKf43JX9q3UkYby",
  "key10": "38EXZ6boN6WbM9MYgz1CeCQ7mCANC7n8FTAyCBqSwzg17KjtySgKtURYEK21rNSkgrWJRcZzNhnwTZeV3doupJv",
  "key11": "4NHcuWweWmMHXn7d1q7ZXDfNErKm7sFrnKSWjhRMjn4Gy3AtCyFs1HgRamogm6gtnq5hP6xYezCEd35EkbEzwP2m",
  "key12": "2WGSwARXPWTXA9UFte1kvXkyTWJRpmeDevdk78yDBef5p4RzJZektp7GuaMm7Ph8jTq8Ud7yDAx6L4qjrTCWVYGk",
  "key13": "4x2qcBYUZSGrF2p1Ca4CMtzgobHnjWz1YE57TTbSXRBV6siSVJoG6RjZptWQwJ5mTLSxFuDnKZrFJxQhocETes2Q",
  "key14": "4X6uyxSHvbXuQRog1yYYfDDhzLWrgvCnd7fsA1MTxsdfijEzAfHkXMnfHbFoS3RQYxzUedQh9PLiG8VfjC34MHTF",
  "key15": "5LQNftU2GMYhTjBq41Xq3Ecn5HWBq1n2RgJwZjkV3CfYRqZ2SX29QWqYDyvKkYzrsb7VmVxs8CgCxZPG1weXA8sz",
  "key16": "2FbCacgKy4M76vmhoyFkDaTEcQDh8Gefm9C46ec98Ye62jEfeH28MRAos1smqaLDKkrnWZe5eWymhhXMiKfHKWQw",
  "key17": "2Efy355MaHRn5Ru5DYSPng8CrWFdCve2bHvLFoGKKr2vy9n33ru6Hw9AQXt1CkFvszTFxBe9z3vWPMqY7QhByeaS",
  "key18": "396MyoxDYYq44csJfHwbmKdEqe7p2forqdee7JPgq6PSefuUj3Xm5NvZK8jJkbfwMBFsijcSfMXG3M1eYzintXcj",
  "key19": "2HCjDZDJN3YdmbuUN1ZZqiswja9sa67DVsnsdqWMMdZPPENSYrxibW1s2K2RyRs5z374cFMhx6MbLmnh39AouLFg",
  "key20": "3eeZGVJV3zzcPudDXYfXVcHfo2aFoQFxR1sTsH9w3hZWSsDQv6TvW65TNZuixRRGiFKo2LdeCZXnYAXcEcycN4wM",
  "key21": "2NxrDQJbuDCXpdxtgSJJM8Fow7qxBPP9cgdzbQ3JYSeHEepa8hNNqkygUTeJRG1zBhGVuLC3SzAej2vNiBGwmuas",
  "key22": "4n9W1aig6hgxNs6Xnu8WNDEdKqb3CYAWvhm1cKNs2YJ92x5nCYajRo1zSUPLwRU1R76xjbnhAGeufhxZFkyKeCcP",
  "key23": "61YvAKRKW3o5F5nTCwyJqUr73LQC15zvNLpmBdW4t3rokk9ZNAvBzPtfJ8FndEc1mAF7kp1iJuPZF7yHqesif5Hf",
  "key24": "xgTxaDhYWmwRNnRU6kpPAfSZm4oziYLamAnd6xZkC493zZHKm9Az1RAGmkKWC2tawysg8FYzQY8XUjhf8nujbpx",
  "key25": "YXMcQAgvPAaRPWcg1u8hZhoASzhYpBsrXomt4ivNQJAKkH4vh1ywBCGYecUsBRt4e2KbkXVHfHsVZsFHNTFRfoM",
  "key26": "5Av2Nk2feSkb2mq5Mqc5AqHNyQJpRH2uGcQfg895BcMy4SaPVyHQ58euB5EETCW7KvX619yeEDrENPQqX8jhsBBv",
  "key27": "5fZhjgx6LNeiuad453sXMVWryFteAqwF9bHeNkdu9986EVNYsaGEpeavd9KaiwY9E1HRcA5Wfc2PnLAnUu8whcCL",
  "key28": "5hiULkPsbeEX3NRPUqWGmZVJwSjD7rcN4AJDM1A3psprJ2sfs4xyMkdyVYNixcF5Xz1nVQPFGi1quv7htJZNHnGd",
  "key29": "2g8nuZWPF6Zwo2xP4gAUwBTmKJqNBXLWyARWPvvPYpxUWqFzgqqftsnT8gHSbARbezzAb2VP5G4XvPa1LSCQdETu"
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
