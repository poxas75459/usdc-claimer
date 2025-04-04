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
    "5R2ZZEKZCYRjXoZkSR7jTQdivMuESLBZx9LHknavZwiQ4j6RVMYLeRdF9zbGvhh4QJL4AjkbXiJ7eCo6SfUmQvTM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pq2aCK6UpU1Kx1CoNVdWgzMMVBCtKdhbM99dAYcC6B2GNu8tXAYSrszWqYEtmwSdXTn2w1nhsKhWDgSrtwMCZi6",
  "key1": "8grZSrQ22PHwMbdHykjSoNMtrZ6n3pYDqzKgw3h9Q1ZT47miBRpepfqyK9WYL9ebnfxEAV9tCYQEAd3TYCP5uTQ",
  "key2": "4kvvt63WUQWzmN8ndh8np4TWhh6kyXy8i8PRLsCFjAKjvZw6BD9NdK88g9onzy3BSaqBapanghj335r6xzFy99Lo",
  "key3": "2tvKqkKQhL4qNLp8fMiuJxg9gpVCB7zF2EhCqefCmfceAkKNtRtHrJZArwdzpRRE69peHs5edYJC7mLnfmGgLibv",
  "key4": "4Ak95VXahKMx1jo8MqaLowcWgbzYwXZhZgmMLGuRXMGBMXuZE5Tzk12iKqVJz86eG4sPmzjbFP73EYu4pFExizqp",
  "key5": "2E9JZQBpqzM8wuWqP1PEYGbMruEa1vHyxK2GAnkcJeyK9TEKQ4SDZfsYTERu5bFdL1rgAqUQPCLJagVyWxiBxMyV",
  "key6": "62C3hmJntD5bBSHGK68Tfr2viPyuWnKcA8UaXZPgSjxApv4NTuvtRvHvEe9XqtkrNmnXNgUXBM36dLkepCsHuD8X",
  "key7": "3WpVo95WuqhwMeSHgD1bpBLJYTCxzQsjLQPDbGjf7r6mvdXbK9JE2RUtVVSviN1BS2BAmh3W1gGyv2sa5bvMHUdv",
  "key8": "5xF3o68WqzfDxVs3h6iavzhcboiDvr7FGLrufmijKopBWS6h1wTnF7xauYcxsW5f3pyBofdBPPWSLArkyhiuWayJ",
  "key9": "3knb3c48Ww3k4YYvd62hV1L4HQDXDrDkK37F5Jims5UqJDUhqrHDpeGrnbg8NbRcCgYE3TWG87wp574d9dqwoDUB",
  "key10": "4HZpyYwKFubNo11JiQa3rfWuLWdrgbfaZFVcRCEEvUhrRs7361zvE2dTGRCsgeN1q9rrv2wnMpMDm7kSW4BqPCUV",
  "key11": "bEC6fME5n49fQetuzvxshYArtsYCrPCCuXX9EBtkp6xDVyJ8pd4DUDg1sBxBctCrgQUsqhwwrT6i9aHf4d4vePN",
  "key12": "2mte1ZYvk4PkWbFUoN2ERxicuaZY622p3Mu4AwiqemtyEnuNjER6gw3wAEZkBsmtQQeYmEELUpdgNLW5T5qtJBrH",
  "key13": "5iDqJfDnBqwrsBamniLThszjv39AANv1pqZ1ZAJSwv1i9ZhSPem2By1VaY6WY2ZTg8ahHkvA6TDEQgxgUUcHw6Ne",
  "key14": "4w8fQaAYu6X74PWiJ2wNKWhhefvx9Yv3ovRRzWQLA4raz7zLWTt69aMgPArBrreTwDtRjDdACaxCNwseFJvzS3W",
  "key15": "4p7wQyxeuefK84AgQJZdbHjfqPbSgBf9HVHgqau2AC81hAf7Ee2rGs8eYHkTTcVJ1YVsgR3oSGfqCamLSUykXuVu",
  "key16": "5Q72WobhHLS7FjuEtogAPEMmHp26xHpmTkgXFAJPvhcMSmS1ixu1ccz9ecqW4dn7hihe3ygxj6AThADrskNBMxnQ",
  "key17": "2ED5PnQ4wP8EbWVd96MgoARyTptTSzdNrG8f6cNcgduaiYXYrU3QSh2x3yMPiLLVjx1RneyVXPcH1pizzTMyGn4u",
  "key18": "3Asv9w3DCm3csMXSb6MZ3XxikM3bhETDCQSL2JFhzPEVNhrosFJg1KemFcYuyE7eDd8hAnRDxegug8JdC7wuVKxz",
  "key19": "5VGs4RpLRRTpCWVS7Bcz89noGGQ2VEW8kYheHUXJJ3tero9A9V1LcBM29mGZVkgW27XdSVfX6fxq7HCQKynN2MgM",
  "key20": "5U6nxVVzv5fy6TEagM2h8DWx3z5WBkHvJrKfLcR998yewHA6UU6DdZAG3Z4eprcXraKaPA5KCfu5tq63ihrQ1dhj",
  "key21": "22zLZrgtWZgTkNsn3TTD37kd2eqkA3d6QdKntK3587zNGaC4SQRLifSmgymMyMpuwBFry4d7jZFrH89tqq6P9YXq",
  "key22": "5YgUTuWrKNvnmijvY5jPCBXD4k5yiXjnbsoA4AEnjHPMHXqZyXfbbX1NwELGKYzK4z5yCsizbBVN3EhrLctWbrYT",
  "key23": "2VY27uDZ3PsDvNoFA9WaJnB8YNcBcjh46LKinh2pgyXyfbLSoS8W4uYQbjk5yJf8PbUHwqomWV8eYNLrfC8FFhZY",
  "key24": "o9nE1dSAMrxhW5Bnx1EkZFdVhrgzHNuHAf2y6BQD7XGrFF3LRxWovJhvbaAf8LV9HH3kV3ianw3KTpoxcfn235T",
  "key25": "67ZaBxDZU1UES9t3825wQ3QHRjPmXTNNUeeXn8u32HNLHdKUBMZ6L5zSxep2fkZ1983YccEv9W6BoWmUF6XW9nEt",
  "key26": "5G5AJ211FkkM7LKRBxr9eHdJmfAEa3BZHUvSB9YDZw8KZsrTCGvpC8kmGiVA81Dhsn9xHvQppFKXxB7UHz67yvGA",
  "key27": "4jFXhjfKq1JQRZovVs4u1cvx6Vi3768chavZehUzoDWDResJnLGuDfaTcqqESrwvNhsbBAozCuDfXx1uMJjNVfKK",
  "key28": "4XMjctjYsz1YCAzVs9xT9iPqDt4QpwyAnBhQ4YVbjwL2ozS2tB2PJFULGUzSVCFE9QeBoMsJowemAjm78f53ewfA",
  "key29": "R4VdmFhvED1NLoSWf8mQczEEw8K7SiaKtbxpDDoSEinBnj3G3Njv6sSxuLMRiqztgKcnE21TcL1mR8gtinA9FDd",
  "key30": "2LaBj8m8TRbnrWbDPHhfnen6CjGraAEPEyqK82v7s7DUJ6wxc5quye2hquNMR66uwSVksuKa1oohqpGytkr8Sbx6",
  "key31": "BRtawLnk799JTcoLTcR9UB5VQhfnRRr8pHB85h9rhpff5SBTpvuFCPmcoMen7ReqEdGHLwroDGBdyLZuWAeZMR9",
  "key32": "3JDXUBhFmAuybg7kQ7yS1aS9QD98j2zmSUHTBc9f3t8Q9D1B4zzqNEVw7wD8AvgiF9By2T9U4CcSHpKjThYn2r4W",
  "key33": "5t9SWz4FwwuPnHcqxLsD1imv5M7Wq1oRpL62f3ntF1k1MLr9WBaEAtYT21Tn17ofrkTsCERcDSmbVRK7xZKNn3cE",
  "key34": "PKWvBDNoPn7GXqs54gmta9395inUBSA2qfx2HikYYkzqYPXRTCt48VkHbNGb3fQe6hawvT2rar1UjUSdMztmZh9"
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
