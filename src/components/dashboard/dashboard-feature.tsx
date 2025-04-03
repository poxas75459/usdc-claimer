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
    "4t2tvAcSwHCtJjQGEQAN45MEGcUmixJqCKQP3SSDvrg2VzDjhMsb19GYgmPSaHXC76ympv5V3dD99dB2uyayRxbz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35qhry1yW8MEgyoE6BHwJrTHYCbMtV6MbB8iP3NggSUBb5FAquUtirbQxzunQFq5QSymDXXcuwD46znF4B8N9mQL",
  "key1": "33NFpMvFCVX9g2kDJVHqG29jGe3z759r72wGzkrNJ1giUsHEEr8rer3DPy9EBk4dkSbFAikiMuMRa6MJfoDhZUoc",
  "key2": "2K1ob9GG2J1Y6BsiwzNA1U8JcEGUHqgp3boQHVUZ5kWL4N75HSWLDXkeJnRHwUDsqp75HpAbrRw4wCUeFV83Rjo6",
  "key3": "35Zb4Pb2rxBUxkscRzPem9DiQtTAAsMzPyJp8mQYGMCvpe5mEkCX6wezi26R2XGAG6U6YZAbLJjK3QknGn14D1XG",
  "key4": "2ZjoSFixUMq7kSYoGLcrqV4g4aBy1zrHj3UpN7mCTnih7QAjAbNAWK6oLxmjGafUf2fG5QXonTvQ6HdbbHBxhGoN",
  "key5": "gSkqnFuv3z4McRoMVRuceJsLA5Z5WH1wmnRvoqaEiikhmLFxMWwHrfaJQeTKFwPXVjFUYFUBqhXXKAbiHFG5mf4",
  "key6": "4eyRgpNkp63Aw4G7jbtMH3aX9MPSwkAaKrndjFeUpJVCgSdu4LQheRxSUyqzLMyVj2XSkunGxqrp4vjJoZnQ8P5n",
  "key7": "31MSp88vCpWry4CDAbFeQAWLs1wmbe9tHEzLCcJ8Q5dtwYUKAxNZnEbeZWZfaaGP33zPCDCuJF38Xp6hnf6LEneE",
  "key8": "2HRhNpQaWB1CQWzoScu1VrsfL17F14itXJkWbpqKmTqqeibeUCvbtn2cq7sAEhd7PWNkfQQ2nPQWpwE8i8SnKNRY",
  "key9": "5XYiwzDypLbduRgcn4stajZFihzbEBob84FYE6cg7YWamX6PsNDvN6djDgqRPr7xexZAZKTW4PZVxeon6JvDxzRP",
  "key10": "2mDNRhjTHTcCo5xijT6UZT7GTifw8kuRuiR2FcUeMNksSyD36mNLwTVDc3Xf3T5QumpyjhHZUFivRdqfbZW7aRi8",
  "key11": "2MovVzivDUdYQEwCr8BWoAsAhgD12M7VyPrkWQhdu39te8CZeFNbFAnSJHaDJex55UtxkVRy3T5tLR3eXiWkUNPr",
  "key12": "3qzYnQ9hcS7Dn4Jcn29EWgaie2tz8HaTsyaM7X9f57BtWrua6TyoZbpWfuuN2NSg9Knbxz1YaUSSa2QRpZVtM5cw",
  "key13": "5BjnenNQRCGG3JwR6DTt5BWf987VZ3qwV5HsjsYRv35myYknbb6ZJK36CueXRk9YdYzqK1o4aV8Na7pn8TUwejwp",
  "key14": "4s2xfuFZWx3ekEhRS2BsuAA7xmgNiM6qmiHkkCA7tpqNcKH3R4NVpDMs313o6vqkvsPKgeH9efK5vmzNAoRBHjdr",
  "key15": "3jEQaYfpRP6ZK3F6TKMz7jfuDCf6TxtTsTsSGBWnrPcr2VjSXn541oAyXoiU7L9nkdUcm5d29xdmeFhAEn2pwT3i",
  "key16": "2dzo9qWT4To9DAHyEqFen6yJDjqYFgDwKGfgxifguDb4qnUaAAgyxqSxJqatAkvr2hq37mgNw5J9w6NDHysKaYHC",
  "key17": "4XjP2ovZZaJgUa7tK5VzuuEcfKbk2fCBSTrtvPW34b6jatuZhc6kuKTGcG1y6xXPTeo1ranafaTZgzUWD5iMyD9o",
  "key18": "3ZpmPKsYBfRWoWxtsFvt4TAp4DVnoxSS7BuyNNW1GZVBegeQRS7jMLKFAdcFoo3NnhpmR7y85uniruCNeNqgTwMA",
  "key19": "5YpmLCxo218mtDdbZZPqZXc2zFsgMJoVk8rMzScmBgc3GLQ7cGLDVauTZ2DFyWe5oMwh13tJWYRM7Jy1emJ7zhMd",
  "key20": "LimwFqVqpt1vF7Uq8F84qj7gvoKmikTAr56vqgpJ8TAzhkcAnoMwPi2trR5rEX3Ag7JxPmaotGyhAb9VboHsmpN",
  "key21": "1M7McX4TyVKDhwskjfGCt3tSZtyqQpRPb8MoNBSA7iF6d7MgKb8YF72PnsPn8r8yaSjq9WMRFy4z3qGaKBsbxTy",
  "key22": "46SQcBcFbLaDHV6UknBFwoRDv5NVxghgroULWfxMggCUrCCF5Hs4yPCByzMGgAc2VPr7s2vxupwDU4ufJVPC9dQ6",
  "key23": "2uFHwc7u75owMjiZGPPx2N3x8mAvTu4TRtoby3hvEANvEgfs2mPuf7UcH4EK6EYomxSAVZtAwsrefggRvCGKwYdM",
  "key24": "4PqZ4JrTQwwmoy9nh8Xomf1BmNXNjMQ4hweoreoYyG7rEemvuqYSrMvTMwEzBfeh3vJAa1SSnqqjTgyCcqZczVT2",
  "key25": "64dccH27cEWvmqPz7fJsJoKm4FZHgS9GsJHTsTfSjotedLR6jik7xmBcY4iVQFidF5kVTpjb9jfSzddfYEwKCmYq",
  "key26": "3fypK2KES2JqKNnX7AtUvYnzxT4xXKYULn7aBQukTxeKbFSfCt5txcFTdLeQyBuKUZmkaqAh4uJTHhq48mA3icNP",
  "key27": "3LRkcQ2xpCFgKWGuaL6Swj9PQrEG46erqKLBqvvDNbWkGNjsv9jiGiyQaPzZPXgcvsim726yKuNjg9bF2W83ARen",
  "key28": "ctv8gtihxjPwXKcaxGhyT5BLsvY2t1KoMxDEtNpBjmQtGyxEURU3bTGMFJHtHBpupsSVLJQ1kpf8NK4NM4vMz5m",
  "key29": "4fszwuuNGT6QMVatbDhAVq447AFee5xP9inND7KZYMF5NPz1m7q9ZsHMKof8wDNHJNo76aZZtuoUkpymu1Kb47ma",
  "key30": "5JdrpfXyFdaLr6sRr9dHaoqTRASUXTXXDyJLFK9uFqMCs3pQdUirRUp6jGMPydu9bNPTpsuejfk61jSYsSAqXHCm",
  "key31": "4chsntX5Kor2B8e6cJbAjwmFTFighNiqmArzjxs99kBQ54CTT1t4zoqCFvMED4JsGojCWkNC9bybPREXxYNDaj2f"
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
