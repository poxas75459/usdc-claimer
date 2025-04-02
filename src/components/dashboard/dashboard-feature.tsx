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
    "5RvFongsJdgUvC9k1RFSAeNCZ3A5GMeyG6NbwiGsyEcobETcNW7fSBhbvZUmpF5V51qhs1EnoEge3uJuLX1QhGxg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8XBiVwF7nGeW7q9R1TzLu58i9xpyUE9jW46GJpHXzrKH5mTJBz9gpmrasWmHm1RFrg4BaETwEQhrKLCCEuHv7ks",
  "key1": "SNQwLq9V2yh4E4xWsTqQ37YGBsPws4LSBFWB1NhaqyFdAxn8NSuVBwk9tFbn7d2EAHQeFfQfh1wdDTzdKHDkwj7",
  "key2": "218PEKgHc595B7XWuam9mBLLdJBJuc3jRiSxMtWkBriN9EwXvBKsZEArk6EB2Ca9NjobPAhbXd3SWLc59C1PPZ1g",
  "key3": "3bEuqDeRoNeJNud76aZjAoyxka8U2APWgrp62S5mqWV85G7ozuaeDEAWv8eqha2BKwYgaQccjjboe9owiABmJKwp",
  "key4": "47L1XWSKFYWxvYgBm7DjTCzp8at5Yc5eRXfqSoyqbQJmo2qiMtQF4K2JMwEtWaXvHEQyYW2ca7j7G9PUioJGkNYR",
  "key5": "5sLxuMLkL4vE9REBshomaUNt3ey4fitq3Rhp418neo5cxJD5PBB6FaQCjvZHBKTwSa14bV7nyngEC8QzCJ78H4Ks",
  "key6": "M9Uee4kgoJQGNqfQg4CWvvR3bXfhCyGBnJtKSXJeADhgBUNtUiJMrZYuqQQ3CH1aW1GKAGsq5h7a5GRkFfGBv8m",
  "key7": "2LfGJkpJvDhCA1GoUHBmMzghjmGnvhTyDspzmLg7XeXfLrJS3qj1BfDBdCp1Ptyo1JdADX3mx3C8GVByzck2VXeh",
  "key8": "4RSMnhg66jDG78VNssDDWwPsF3P2nAAM32NcTSwgTB8J1C2HJ6NW9hD4MVzJoJ8A9HjmM8yaQkkjYjkU7XNigjyQ",
  "key9": "7wmNtZbbHt6TF7QgC2j5fCUQduNCRaJSurhjBS84bJGAdCEVExEsL1CngJYfYMh2pv4F3p74wVWM8BddCFR16x1",
  "key10": "5ytwCYXXR1u5UFDkigYbGS8ewDtwfnR1UTUerrxhXjyiXV6esf32hV6Xwdob8Yzy8hT6Xn8bPxxgPKGpubbDi82x",
  "key11": "5PsyjEB7UJaaSQfcTrppGc8Q693YpCZamAt4yZNFaagDqaQShm6hrGRCx1JCfxRUwnCR7anBcXEB84qiV2eSVM2h",
  "key12": "5QT1C9zvcTtZUHqxN2GqV9H3mfJUNfVqztcjCjbr8LT4N1LxqPsfyGFUYRRnC8BHXrRLQER5r8PC6svXnswDYvz7",
  "key13": "4x2j8pALozPi4eCSiZ1aATsB7fv9eRiTT9p2PDo6r51NWgDac9ZKdSncHKuyyFJtCB8V6AezU1D3U5KrhkjLfMSX",
  "key14": "2ZxMm1x7dQ7q6deuVC9pXsn3v1tQtqXVRjXcnJfaggTJFp7VT6bhD2BMQ4SmwiDcx97sktLLHSfd1F5o2EfUZA3Y",
  "key15": "3uu6d5VgxfL4SHc4hiDfFYnBwhipWckFZSCqJ2zXZdNiKe4nHFU5L85pyGoUorGeceSnZojAnDmTmmoc4GVKiHB5",
  "key16": "2PJVs1Xvaq21VF9b2HQmvvAnS1v4bJzA5R4qe12L79eRwMgrD3TmmBFrVTCaXA9idjbqSgMrkiRu9zLdtVs7BndD",
  "key17": "3YrqkP7nNmFp9xazc7nuEC5JKhcGxUXXL1YiSdHwx9TraYyQHatPoSQfEYfafnCFy4yvee7NSAomtnXXQLeY5dL7",
  "key18": "5isQN3vv6utP6XbeCRyyDhLfk6SviTMAxwWKNqNCXFxX83WQR6QhzjcxW7QAV2bFbguN1frEStCGUSPNz5tCVYpU",
  "key19": "2y4Wmoe1JzzKiLasDqfQHmtryUVxzjBjwEt8eoDNdrwH22nBd1SthsLowmTT5EqcVFmJ3M1YepXoFHx7gpfFcCmA",
  "key20": "4t3KWnd2GobF6hiXuwNXL2MtqyuSf6a1FCzgRZPmxvmAMuBd8CpZcPQEPBFKnQQY9Fewax32MmCNXmLxA595Btxo",
  "key21": "3QbMkd2wkKCkveg9sxLV9bh87mYANm3jg8z9LZ3pyZ1hX54XgNuoHpiPG3tDywVgqA4CxCSmvi5hpa7d86A93GGy",
  "key22": "62wCbqRedhSVTGbNZo8Sf7vUxNWBi8P5E7Cre3QVBZJsqjLvS8bDK46htad5aC3m3HcKjYxK9BQYBB1DrxdkQwhX",
  "key23": "44gTG29nN6mQxfizp7v1GQ4E88MvHehhEkxDd29d97U7L6XgPr4wefcoTDEbiri65pKwr8FHu7jHz6SCuwgusmkz",
  "key24": "gF85xoL3Nzk3hC12ZiBkT5SMWNhFcVjNiLPA9kHEM2unUx6Fg5WpvePgcv9Nv1GiSTWvYjDHprRc9d5xT3hD6qv",
  "key25": "v3piPKGGWwiRv4ZFWjXKPaSzA2PJjnDG9dkCFxNhh6RQCHwr6TdMKVvLaVBPQgneKtMN6pUWrJruErEyr19xytT",
  "key26": "4jkhmvgun8XQo58a7qnqYxRdcqGCoH8SmyGNgAZ4QFBnGRuk2eQKzb3QPHCAheufJ5iVMmVamvQs6vTzeKVCJ61y"
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
