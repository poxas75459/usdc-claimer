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
    "4iBnXJsc8uqMYboN9BfsjqwfEraSLe4HXZa59LpC4jcSd2HNyec5PJMvD7TiJj7RzKpGR3fZ3Lr7o4v1D3oivkDx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gHyzqLHygj1psgVeQMqhyZMV3NNQApDeJbARtRoLPHnSooX4HE2KFScGP9c18LaBF279V8Sgz9K3tpEVMeyE1dq",
  "key1": "2dCxDogC4tsvAUsnwobaipDxuZvohtsXPU9UuKggtmoftz4P6qbwFnMjJC3yjZgpFiwPBHcBtauYvr4A6gMH2PZ1",
  "key2": "3dAaA48ZiQM1FAbsuRpV3QM2b3NNsH7JPcJZ8K5auxYouu52zKnYbYQiFebSwxAqBeUkZDySGYzrdQpTzZoc6sqm",
  "key3": "2xM892iGH7hidHccU3KRTzFbtWVm8bzZWuXXVB7c9zN8Ha7EkLxtYSTFbZP6wPEcpefmCsSr8YKBMWZP3WzbThJB",
  "key4": "4p7RzQdRZxtsweT1Qp29YR3kKH9FNBmWLSBsYW1CQ8QQodoBZcQGFwj4Vp4heLThf3EuxmhGxxGsxfXSJcHoaquZ",
  "key5": "2WwkrqfquW394TjVdLdy13de8oo2NsSdYfqN6eiZbwyPUYtUPDfsMxkg7o4Sck36VrvP4vQB5dwkXV7Kp2dqMYnx",
  "key6": "2WU1jDi5TvaEgsoi9jSkh34K4vLLScayPK2LYy4rQcSgVgv6gfzaYZWmozHU51uDhd24t2zoGEzyMR7BjSU4WRMv",
  "key7": "4oACuTc8htrHYB7KBaBCwo7ViwJKCq3mB2RuwGxnoe9XaprYuDFVsuyTQN14kJbyBTkfV6DYUEQ5nVmNyqZKjYVq",
  "key8": "61gsJQ8TKDiKKM3SpLRjKF8jHYLfS5ibZBgzfuLGM3i78W4jMCYxnswQ83VgeEAXgttL5ARVfuTGGf5Zn7kXETca",
  "key9": "3xgytZV98hD557wiAQ7JHKtHA3LE2UJyrxNY9Z4wUZDmEue6BnLYScRfPrjpAp4rao421PyXM3o6yMXG8qANaegY",
  "key10": "8hyznq3iBbkDjyvT6GgB1N9ZbgQwAJYWi2amkScJMsM6chjxSr2JYqLkuRVrapGUKXEzrirFeUH6QYUnQQhWMJz",
  "key11": "4Rah18CfQBt6wVzoQUXNaPaHB6tHjLqEqhRF41rqVT8SLRtZfndpcg4PLBwzrF63oYNeLeQkGJViVg36FaqthsAC",
  "key12": "2nfayVJhQgLTkgpyF612xnCnzDLTDqkjEnMqosnMYAL9MkkgZMjjZir6VHVwJYLQU9C1CVDZkDiAxEqT1xRXtLS7",
  "key13": "5bm6nMU7JffXMqzvNbyeCHhBQN4WAiJMSuUneP8NtyQc2pkCrCnS3vUwNFHJDMq2XCYSze94bdXXFQaDCzBWfB7a",
  "key14": "5Xq44pqm16ifTs3urCRArsmdddFB8CTL8yEqJWNhPCzUVKv7Fw7v3FwvofS6joSm2nNNkzbqP3zqpozCogscH9Gh",
  "key15": "39xotP3Kyvu3njBbhRjTGRLRv33R8fLLLVg5yBDDGWD41aEGT1f9wXXuRasepdwrTYNDUi9pnUhMxWw9XDUC57nQ",
  "key16": "3aaaL8iN5cBjWfQYvKRH68MAaZo87EWvttMszssXn3xThDmQAz9WA63P2P4Gsd6zuFyzMHcpMUvAiciNFmGBQepz",
  "key17": "VPNMYYk71XzqKwnRT2HFaW3tqrKNH8FaRkuuDNdTEdTZBXbC1rBp94kuHekT7ueszsCrpNCzZg7QWcv8fn3KU1a",
  "key18": "4HBTu6tUuiwfvQUHy5jtDvDWCaLLkFSWM83DhWvGKG2ZhyjXHELYD3N1M4vtMW1E3hc8EjAkuMhSZBap1QQGUKYp",
  "key19": "2DpcSuHFgoJNyVJXAGzY4dEFphq2EVvtKD9LeHwu5KgG8gxvoqjgaHLgfWo9raVsiFeVnMPqNVgoEJt8VFTCu2h4",
  "key20": "2UXM4feAoUkKNN1F8a27mJruyrBCTY8DpjB7ShxjWbTCTyGkRRGVqpoTwDiquwV8A9jCsC2VbBWDYmDiJaLqzujD",
  "key21": "2qoABr4nyjHZdLgH7vmhpC9u5vBmfTBkM4Bf3dv5oH7RHGCXidnkXSyMMxHoFRQSSpf4qemo5N5N9DZoRV1dRgKa",
  "key22": "4Mq2FNCf4mB41KhCKiXrsPoqDwbt4LNB8NHFaFgdSdmBeDubeHo6RME7qqFmqbTj8unP7PjAVdq7KBMWkihk3y1T",
  "key23": "278VArcuB149snsjf97APn4JadGT1oF8LButKFhA4YUSdmRmU92nak1Qy7kgcouznAfjttLwQJ3hYhvNi5XBXWAv",
  "key24": "3REE3EUCCpjQKVPGJMadZMPZyuELrqjSrY8yfvsNCXaweZ5w4J4njGSvyXPPwjAk8D3YTgcy6cy9Uax82YkWTPjS",
  "key25": "2zWJz6uMYyNb8GKjHkaXc723fGssGQEaASUErbq85XQv7NxbYqzfa22FrhNm4mdpxcGp9PPTm1oqweXp2r827xdK"
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
