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
    "5Vc5Y4MZhtmmUCPHZMd5kjDmVhTKYPt62x98T1jHAPy4p4RDZDYjXPGwu343UvK3VoUGN3XxQGQFiSbC58zbsvjK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tPGkZkbmiuCvqTSGrYA7dpL7JoZw5787sG995GTiCZN25BXZcuztvAzXL2ko9D7v2VLVrRosXvBzALmL6m9dn4j",
  "key1": "2Npbs8UCmgkNsUhd2fMXrLUS7TyDAE73h25XKNzcxUA9gJLS5EBpiD6KokSPvWU9yFmZzDiQQ14aPpo94pMp9Frp",
  "key2": "5qqkmTzBXCY4kDsGApHbFj6XVsrqdUvqAQFWVqGwTLLr92C45MeqjdDSaMcN2XGfW6BrzPitRmc3iJiurmM9HbxN",
  "key3": "KVnvjtaoUEPuFPwoWyCZAAMA3uPr8UeK8vJhn3eN9uwxPhmcvWBAfbwnkZq3UmuR9RJZD5ar5VSk6R4NdJE2Dus",
  "key4": "4UM89kmqUumUcSXLFMYgxDco9iciNPrdwXusmAkbS5pNtvb1CbHAxhcQYCTp5ncX7QGRNuBJqbyeWKM5kJYzVusq",
  "key5": "CmgHTp9wgiGYM3hskgyTT38SNtHWk9CwbKyLF91bdaDzevNf4BXifmvqPokySukhZVdvF7Ev4TCcNCWBo2oNJbw",
  "key6": "41sV2hYhaUFFMkhY2CfkTtbsFK5Nj7eS76UHRviheJW2QAfCcJ8XBVbCqkFzXV6BhAEwwPAhzyYNTZKJjKWjSQed",
  "key7": "4mJVoP7YY8xfR8e9ZSQk8k3F7A8BwUxupSwoQiCeZZ9UKSYLv8vGCTJ9QLwKJ1XdDq47wV7Ha8HBJxU4YRvKD9Zx",
  "key8": "2n5hDpGLXzfWSKh5r1Eb4rAYgYwuAKYB9Gi7DZ1ETtoTGBPjs2zxtLqujQSLfEde532AKjyNWLydSHLReMsYR1Qj",
  "key9": "4FcJXAkaRBUcvgAerg7WAZTjfCaRTdrx4UegaMWRW8S6nhZDUErMvE4BL9shfzdf1duKDKXf43UtjyAergtDBaLP",
  "key10": "4scQoKLrx6xjAMpNJ2dKK7GLMBh9JcpsHVJXhx5yWCSDMEFeoRtqXqWhTK99Vai1j9r3aN6VmEkfuXi5FPZArK8a",
  "key11": "3PF1XJhMdDxRewDNG7ECViPwKse5H4uPEvagSBYLpwYTNN26oJbYKQZR9V9i4qdJDydUZaHWggao3UXA6kkWqxUS",
  "key12": "5sjMTTfqERFF4QMw45AutayoZVXW1MsiqyFNUXYurgZEVSQ7u6wxb8kjfrwR73ohxyXW7fByD9NwoBSdW8F814ky",
  "key13": "4Xwo9zSGz58XB6NidRHf244X7KcK8TMBwM326ApHLAy4Aj7DX7Y9KCcgwfu8h9bmJvzAcTqjgNWFTnpmjCvGCdrb",
  "key14": "49RhvQo6CpRFi5nqsrqZaUYNAqEyrKJQSQgBG9eVEKC147FE5mSBnXSchK7q9HB3V1o3XsCZHsm412cUpVo7wd9n",
  "key15": "4jr98tfkYFqKzE4rTUwarrhGVQ3dTe8NpkxzX1VuHRus289JSsCyDkh2Ja99Ssn3YeMJoqapDRfytG628dFD5nMD",
  "key16": "4xWJqwdQDK7po5XAYvsGkSvMTLm7SzYES8HxXgZN8RubPKdv9J4CXbhs7zi6JgSV9KgxbYiGsMn3zrsNrJzLTgDf",
  "key17": "5HygVpQNqyGKdsTiNzqHs6ky1RBHdvuFuLgP36GdQP3xb2ZfXeqUpNBseQkBa7DKetqSK4fFqKV3gf4Ur9Wt4bqK",
  "key18": "2sKVngQ331qNsV7kFaTs7ndxRJDQQGc5jT92wRDNhNadTaR377LNn1FVYF2kC9z1RNE84WrcZMimMPMd6n6X66t8",
  "key19": "26bWLAyCYAyzKZf3Bk4tMGRoNY8uYDvZHzKsSiDvjaxyL9EVRCLNXc94UU8VGPe8ae5TTVq9WshN9PvXyCmzdLiC",
  "key20": "21nTbTgNnYToD4uF7hXCiYW4EQRg5TcpAZeQVsB52DzuF6fESPYk4yfCsLSdg1qhHn5f8Sk5QvsvQJkNr6fUHMGm",
  "key21": "3i3gMNkvCcQv8TVPPUQEiJwXCHmsJNBuKh9UoC8VRaKqgfijr4WP2vRNftMFQKVzTdkZQLKuWwAkrhEnN86Ht3iG",
  "key22": "35Jrc78FekcfZEpobnmwdxjGTPZUv8qwnXsTNAYVhcq4Xqh3jyUUakBLE2PQXzmVQRYrnwFeFdq5vQJcym2KzPeN",
  "key23": "5MTT9zgt7tWhVh2hi2KNaw5K3fNzS1tH69RgAnyEABJHuMub7XDSGutJUZM52QpjUQ4q1VkiM3aRdhyFEU5UfdSo",
  "key24": "2VHp7V4KbL3ve1Rnaw7LSzLrMhpZNzkz6n5ZuNXhQsDqHq5MBQbSJtbQ6DqLDVhnupKn4g7aDxe3UYcJfJaM1oCF",
  "key25": "4z2K7naUW1GsVtsfEidfidVWjbZT1QSiQEmi7n67Poa61fcEm7eHpJGgAmkwS2Y81HkGTF4othyCBua3bcGZVuo",
  "key26": "2CprSNc2i2AP5xcHwPvCPLYvF2xx8GG1DSykb8BEnpJWW7c88nX6qzQv5mKyGnryo9kqfABTcvNZvQjyN6zs9DaW",
  "key27": "bX7vCGZRA5RtNWdf3teciMzEsursKkCJGmK2JZjLj6S3VTo8vWvaZCEPzGebtvbyTNUWEHMa1TqfLqreNUmNajk",
  "key28": "4cbFFVqktJjZp8vHFkQbuRnyuDczN3CuqRWUJZfd43th2AiN9x7cTLGD6vLMxyXELqZEqk297avzAMMgJM5YKW6T",
  "key29": "2yMryo74gUKTTmgY7HwCDD85VSBbHvhS7eSTbbs2V8C2Ct192KGRKEV8AMir5T7VhuV5U4kEkouwnAuMkXKEbTQA",
  "key30": "22obsyvFm4cRbPhTPrkamzQ2b8A4w5hyXXb2GcsyqcW45nSpJRdRZxWZHQWgftMAvaMrFpLkgcd2cowWcGjPMEXZ",
  "key31": "n5QCm3Fpo1ErhzYT83NBwD9Z77PqNBRmPqaZ41d6mThia9qoKwsDvHYn4WtVcTSUsgVTPBCTFxsXUauJ5hFTkPR",
  "key32": "5vdzDHHQZu5p9kBvWFmRtQUz1CQgTLb7Kbq141G4VnNdyEL9fbTUgB3LFgyv7oZP23jHy6xBVEcnREsmK76je3ae",
  "key33": "LUzVnDCsenRJfiVRR9cCZjwxUR7TeVz7jrXwjeZTYKx51oLxmpC2y3CmtLhywkTEo6RkqvJKreVeP9oEgCgPA3m",
  "key34": "3UYUyXAaBZv3wPXkLdaNpPqXfkCZtWAR4GPTZ6GHRjNAkyF27P5F7bwduwVUrUNzr9ekYdwTfK8BiPFyo9WNUocK",
  "key35": "5JnjtWdvSa67mbPW689E4ZhENtJ4teJU9CH3fJ9QqMvcoFv6yW1WTfYwks3hoj874qkaNC6gzcKFbq8RNAoGjQ6o",
  "key36": "3P9NHvLpSYbAWCUYXe8VWuKTzL6Va7VvyWuqivZH25gHSSmrahVmCf7engMLriYxgNWoxG2mGdnW42bgA7eRyu9B",
  "key37": "421rVsKmeCXCACeJEMGXDJbYesHrjzVcRdyJJAeAqbxpXBamXAgYHdccNgjV2sL7HxbBFHZXVhkfWwaFEA6B6Jvr",
  "key38": "4bSczwwGQpAwHPWWU5TBop7LnkfKQJaK6MUmrCywiSpFfHs1rqNEAkBDfEqM1qYfqi5WCg9NWjh52DoGL2rMDeDi",
  "key39": "231J49DYa62kn1fPioCiKjP4AsnXrfEiAt5Wj3BV3QXSecFN1JE7r2dE8qAkkQubRbxYYpyoSrn9mvT7cHVVrowR",
  "key40": "2E3H21T3N7p6GB24abrEG4vFr8hFt9tH5nLMYQpNgB3smMu1x7fQwCabCwJJC3FiT3qtBqY66A7rG2d6CZxtpEXL"
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
