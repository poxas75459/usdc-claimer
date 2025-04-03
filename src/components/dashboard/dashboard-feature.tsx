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
    "2uWJ9Bt8U4qccPvqCRAArGmc6vc54Lk7ufK39b5zv1GTVvWcv6C3shYCH3sa4LeeYdVcKNzUoM7VTSwDKU9Uh4kP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zmXfKcwDRNpnW5vwnSy3ZJBH8bPXGfMydmxe3jWphtz1Nwb2hA9qX9oReJxEk6TomYxDjqUkWMoxa1thSC1ndXT",
  "key1": "4gFGskJEvMAGhHBR7UK2Rdy7ux9Ko9a1ACxRjvrN7VRcNXS6RdUSbdFXjL3euQaeVzagMdMmeP21NEL5qmfZgg5r",
  "key2": "5EHqUPrmUPtkUNBnpuRQ9AtxY1xcPgbshauZCCMQEdJ6dVVtjCMk8CKAea55XLaNJprKUXAehnfuqLMq4NhqJXvf",
  "key3": "3EcY2pcEYpvYRaQh31xv8BHC8LnJcnhtXam1kCUDpDTPnxpMqKfw3u2jAcFGeGqzYRvSuCFpMbY6kWYHfZur7t2U",
  "key4": "3eHmVdfEoB1pd7LtoWKMY77REJzNpsaysun1TiqQjA3MYnXvKmPyfm88yV2QGh5uvDjizhHhCW1qZRnxBNPfe269",
  "key5": "2QoWHpGqPLR4UHDuj4qAehJMGZL382d56ikue1zC7mK4pHZc8iodrzRK1PbrCJBTsLH2FyFfV7mmZ9tR8H4dbMgd",
  "key6": "5ttMNkMNU31mcBWkrp5NyAt3QR4pPoY6McJSpziAoNtEKpBfztyT4xjiwkeHivTj4od1GVvePm8Xt6gUYeyBik6W",
  "key7": "2r646w8cYV16Y5z5LnqbNS7P3BcMvLTFCv4eh6wV5YXQrqVGqaThmkxdqDvyYS9xhTQr3jhzUpUwEd2D4GEMJvtU",
  "key8": "3Vpano2xuLYwGKbiY1j5Esk1i93qRFsgijQgGMhs9tUAu5Xzi8gjcEYxwWNJSrBZyRziT19GA3S3Bi3v4ATXSwZo",
  "key9": "4kEqNrQRnvZdqATprGyUQBbsFtkT8pSMkPaidL8zCNEcf815a3mkERuoCSCMvumjCX59Nju7zcNKMEkHiaF35aoW",
  "key10": "3Bp7FZyAXyHybUm4HAiBupoEH87xnor7Fda1ZkwGY5r6oJtGNf69uvuQM2oUXWM3LfVzs9goVm1kzcxBasAQQ8ow",
  "key11": "4yrSoCBXiaBitZcbAjwpcTNSbAJ9Rmqp4sYToy7gpbaN1CcMVtkFmFyq8YTV6vGb3We7yurNCFys7zZiJzwwfEck",
  "key12": "3cqfKEbqBX3DirjsVjmAVLfuBSNS9Hkbj6mJZTFEhH1NwsRYU8o22UGGFQhqFq8UBK6BSYnsto82vvbuzaXUQfWf",
  "key13": "5FNrrzpRCzeW3ibEXiRVKhCmXGqT8JmiVmpZvHafd46JN6fw34JLSaUacTna1gcqhuZDMpqDR7BEZa2haGXJg9Ec",
  "key14": "5gyGegaBeBXdYuRLyrtbCJXkF9rMmh3MfnZBizwvboD5gnd2Mjr6sYGquNt23LkRyQhRHkUufQB88oY8aHPspSQd",
  "key15": "5Hr1Wx1JVyKzDQJtMxPMrbjncjUwKsDRuGpdMvuy7CU1BG3bmLSPFcn7tfghmGfuopK2pzjT7jH7p3QaktDkXS2n",
  "key16": "27ZpqPfirtjcRjBiRieTQsDcsmThmD4a2RAjnnXVeFaqE1NyJigqk32YngLaPBW4xFkjMCymhmafYyMVTiJEy6kw",
  "key17": "3frYzS8aTvev3HE6To3BpAJRK973Hve5Mhrh9bM9a8uq99rTwpMPcRwzZS9YpyyvHG6qEhkVYMXoCqmG1tNxrw1K",
  "key18": "7QqYXF6HKtvkuhfkcXfN7iTLQJsmxw5d57Dwk9sitoWyMwg2htbfQHfWi8q1jQYGyVqVpKBVMK1RcA7Q19ZaMjL",
  "key19": "2zzBkFchaQEJEEPKQfn8oD6c3Ha6nZNA151M1hU8acA2xc3aaS61XpLExoqEXKxPJMEdw4c3mYgg9Dhxry75t7tU",
  "key20": "5aMM487pCuDaQi7dUWcUddoqfkYj1sYaV6C6pLnmt3wetVnyX6pJR2Si6v3wMPxN18syKwifYt7CtgcAagBiHCFA",
  "key21": "2U9oxhiWMNAK43ftYMufAM2toYiWKpHiknBqTngber69Q5H97zoPu56oosG19wbWUmFg4m9R3GNhVLRcAapXn9kv",
  "key22": "5MN1RPjpw1kShHA3WE2awcvyK6sV9J5EqBHfpgFgjbqbw31Q7jq3sZMLriggwQ6dYyC2SFHt51Dx5wpaq3ft36y5",
  "key23": "4x1Yx6CzKLxie4dTdx4KSCHemn1feCjmtHq8j4ErYbSkcCUk8LuBkr9GEj2X7shQc6qszcUXNa8pZ7kW9VwpwoS7",
  "key24": "5HjzFeQ2u4nvGiGDcop5r5y6uzw193E2E6LuXyZUnAjzhhhofuN3KcPK8e53H2f2ybbh3hMVcqFqAhS3kZEqQFRe",
  "key25": "3bQhP5fp7cTD4fDCKfAstNo95Pi76iJgUi2rV8CdZhR95XDdAFUJm79i2Rgp7GC1cntuL123Q1eq3HjvLNxschCG"
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
