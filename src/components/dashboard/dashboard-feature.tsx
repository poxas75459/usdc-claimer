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
    "2gemwnQqgyAfFzzJHgk38J1wiygrpWcmv7b5j9QmYaL4WSvd1geHwFo4YvNbRysyFX5c2QKxPVX6MZtgqc1knvnz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yLFK2MvPc5N4YttNSYtaX4JBGWqWi72tg37H1rn7UQdL8cKDxLShMc6RgoCqVLnaWkWZ7LjgWKmHM2wdbgkz5GJ",
  "key1": "3hKaP6KiN7YNn5AziSPerJ6pJ5TfpwsHV9CojLK8LNz3wCRACTNcFsDaNc3m9fSU2UVjn2TaafV6ZfoZ6Emvj313",
  "key2": "MJJeeAdrHbxH6S1gYt6mMbzXyEhVzfGCvenieZZ141kk5VHG2r65mN9wGaBknz5WSsEovXKWzDCavcEh9zxiaMn",
  "key3": "MBHpggmMm7RGXPZqq7QfESXzq5dBrBwMQj7VGsdj3uvmAnieHCtC1ygGULuzB74ZvqBq2TC6jv6yy9SHE6cjtMY",
  "key4": "3WujW9AdTeuexuoJcd61oC3vczS2icUDv1ti98Lyc2ynFoA4yAgEGneetMdhqC4X7HrPccLW3cLy9hmmioDSsmro",
  "key5": "KcEvewTHLFDDFSknP1DqGUWfhsYFJxiqiQEAj1qF43JqAwRJCAEFpTy9R7fxYi6DunnVofvhHgrxyaAoYwe1PXh",
  "key6": "4akzShMS2pxTdESfjPfn2MkByk6KArARGJneQGQnPaDmEyMTvHAYUHgiiMXaiXa8Epvu6UuGTytbCsRTFKZDncgf",
  "key7": "4m8hn5MHbbs4e3tSGig9pnMdtGSjtttZbVeqFcxzHewGknyBADvndcB1RFUWe6dv7QR9cEnVULeJPPywLhWS3Wyc",
  "key8": "4bswgXXm1hzvKwwMy1wakGu7T4dhj3px74umqHem7EX69HFCP328wYQUf91uY5aGJHPwmeYioe8ASTgGQ6JLDPZX",
  "key9": "XdH3Dh99hMCSaHt4cgz4cE2hLYcV4MtoLZhfkz8ytLwpngPqquKZpkHomLd59P6LTarmFwttCL7SWsgdVr7LkNC",
  "key10": "5LBQAygPz2YcR3rdag7XZjYZwoQhWkfooruFWYypAM1QK9tbDcmgj7WPaYPxnFQHewug7ukwwWmHzxw2bpoKDdyh",
  "key11": "51Birein5YpCj9LVT96WtPunAW8fGSWNx8yK4hQzMxKs1vAh4r6gW1REvNJCbpBfHSbgSm9GdUWuyZ7PLnUMMM7b",
  "key12": "3LWiHVgPo7yxaXziXue7V5kHvFdpPBpYSCdng2sgzgQb3V4gqhHSzmrLRY4DZV5CHMcAYEjiCdGT1uXkgeRG67rG",
  "key13": "4emcWAymRf4ZxnGRYEVLqh9bnN6nH5nFySzdRpPbPq4WzhWYjDQA1rXL51UKzTMXWJoKLha158Hf1UePqK8QQSKC",
  "key14": "LL9YWjd2JBJRsETPoyd8g7ecodfCw7YvfuHcHH7rJgvgyt7C55c7kUhaP69g5XCg4A3L7jVgSLtcYCgDHhx59uj",
  "key15": "wPWKKj746Z2vZ9xCfcodeMwvT4RRCSJVBrmvFYSxQk5jURvo72Lz2Y1T76k9MVwN3hLM6xmpFFSWCXdwy5UV9u7",
  "key16": "4sng2KiL7jBu99zAigNwKGuXqYBsH3XsfbJWgu2Z6tGrXdtd2DP2sySc445YgLUbvwNc9fUig7S5XvuXpXyitPnP",
  "key17": "kNvLL1mqRwuCr1H53EmgSR1Yzvq94kxrmRr8hWtgw8Hb4Lu4wyaJCJTjZuf7DKW2soUVNDLGZVCs7G89do3uDvc",
  "key18": "65ZS787SAELBSGz3NSjJMnps7rhFzjnKTwZe9ZYUygDmeKAaPe2or97MD8kTgmfVX4dvvGwFKLN8bq6jpa7iUE4k",
  "key19": "3p23ARXrt6HrA2uxWHJkBmJNcEdmidtXeX8xFXq759CPYnbNii1HtL7UazzmNd24peLPcGs2UboAhTzfKLWDjr2L",
  "key20": "32iZ9kt2yTvUqd5oWFpZP3783XHpvV4cJS79MRNJNYyeVhpmqGLH3vYGXJUCpKRvo6CaNhX8krkvkhmESH9ER3hQ",
  "key21": "2td7zERyYxHoS3eNsonX8bDLxNwsZwXEqmLRZendtDfDkMLbrwxhFZo3AkBKQbcsiNatgrzsVnAt3L5he15Nkcbc",
  "key22": "2rRnXmgKiUNqQKx6FxKsiT4GyfjXC8M99d58meGhWJgK47hhLdxZPmVF2j8ajifjxpwJdJkyQHnJ36rmfXtnM3s1",
  "key23": "2r2cGnHVNsFkrVXLMicE2nhJ8Uzy3P8oiYu6TYCmyDuaHYNPPRzirFBb2UM65GgHgRJTJjNaZuuU2UCrWuWB975o",
  "key24": "3qhorHmRjb16hRpo5JSkwnKLsbmKxaL8RLS5tnTiuknUjUC7jCWZR9hNATwdHwZ3X6scicKY7vbqbjx8ya27jBAp",
  "key25": "4ZXvmours2YV6yLn97VRq4pcxTGwU1MXGfigVWWpy76bxF5ka3eF6ZEkhkjHE1VoGfw7ms92Zx29EGH8n4849o44",
  "key26": "3b3eF3isR38LMBQzCyC1qSRXLrjrWDtRPo1saKqGKJ4Bnjo6n46KqkuTS31bxf2rNCC9r25gEruz8SLr6ioZSjPM",
  "key27": "HmmnXayMw3jTyrQoyjgbm75pRuFuVEAYiixqU2KoPwiyhNNaQPSQj1EGB6TVZHPEQVCQUYMUJKZ58b1amN8zeMt",
  "key28": "2q7ncz9kLUF8KZaCUisvwJscwb9ePPQE1PUcq3x4rojhcWkEz2fNJe6VntepZtQxE28WSLDKz4J3xLNDQ2ZjbUSs",
  "key29": "r6H9XwH761Ko7QTP7Vm7t8H27qd7R1h186gWKLwPiQVT8EqZx5KgjAmWbRVJRwdrTDqBBZQfQqCvqP9AcBFeHyW",
  "key30": "r8eGVTrLvUHhQRUZRwuggx8ASvPyLooJkPvR8cn1QE1RMTLXBFKSWy9ggrKCJUUGy7DYm2huWDhGpT7Bf8pvEjG",
  "key31": "4bTSf5jxY9RVdkDJogT3LgS9o9QYCTeJ1bDx7X1ejg9pSQ2RW5dwmUkF3znVngn69dPMjiDQJirBUgbcMFbDWqwn",
  "key32": "3raRsLfHrgyCDwMtaD9KABq9UyEQas6Ve1q1ZVWfYk8eDN5pf6P4iZqw9cNRDXYo8D9VPmrPGS4zTJkWuU5aEuE2",
  "key33": "3qTqdfi1DaFzk8Aox3RzrCMmG4DTmspAuRaKghv9EuDvwWEDjTy9c4PJWL5gKGGrRBdSkfgfwC4HB8bS9psnZuey"
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
