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
    "5VRbWi6eZtn3RkpT1XpkyJcnnmhcKvFFCLHsyVC5RtMMUiR5v68SDThSaaqdJq6bSXaABBVwj3x98Jkc6VLECPLV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58oFozGWgYmqLHpNG4td4SGftv4mTn8EgLHQB38t8PWMLYj2LUfkFwrLsEGWocpDWipZLNR4dfyZ9A79jojw8X81",
  "key1": "45jmjtZgZpSJT2yJQi2GDawiK8zhxypjBiJdaX3T5BGGdSfn9kg82StvQC62E5uRoenSWZ4zG3EBZpdKaG1kCAx5",
  "key2": "2vu4tQxvDPwmAUEddGV5amjubSjUAaPt4C4CG6tsLbBkcAPfKdePwXrYaXs1ErZ3xQA95Zqi3HQP4YhZP12BcPxy",
  "key3": "5ZVdS2EjscJyNb95LiHgtQE9BoQW4Jg6CJJ7qk3phwDhzGBeJMxQsRR34miY8Vqc6WrqqRXp69e4YsRM1qH5c2Vm",
  "key4": "5HgobHmBmN91d3LhygZF5KTvZ4231jVuHqsFZs81ZHRqQZxn21UrchrtGV4sSoCnZWFAFfQnrFEP23EFhoT6adMQ",
  "key5": "5sFyzA2hH6vQYM1ohKh1hhNtjdQBwpBifkmq32mtPsZB2GZaNqnVsLoLNe5biV2UAgQK3gLU4dBdkibUhxy3yKHP",
  "key6": "3LhhpqT28k4upUXufWCENqwZb3FtoYZh4YGRMyx1BWwk6MpMpNgFHkKf2CF25LoGZSCug5cCj1hKjkg4MzFpTAQN",
  "key7": "BVkeYRahko8s1UbpUWf6o6g7MBZyFsR7XFPrzAGf7ZwCLEAjY4kHWXgc4kWSq6ZaDnMMUgHm9doUmJo2E2c72mK",
  "key8": "32PWgPEJaGwkEWxs3fkdGCjGZyYWo8cRBm3PJb3HBuuFJ3dS7h83dterXjFjfrFHreVBBwnNae71B6YPe1R9xhQ4",
  "key9": "iteUVY7ktSKfugap686SymsYjiPpoaLBYERkAdouNMjWEZpTeMDLRoKXNs1Zky4MakYyKdBbmzkTeg5dkuGsbXx",
  "key10": "51MLHbvfcqTN9TsdUWBGwctaprEQbivr4vZ5sin48NMatSmDrHutMXDcW4QUGoD9TTRYy9nYZCPWu7TivJDN7GiE",
  "key11": "3x5G4GTu3x4syT5pPbiY2VYtgUD1LyYwtr6qHHDkW3aZnNDj7wKn3MEsKz17CBkZvZgQ5fjoADypQ5oL41JhoN82",
  "key12": "EdzU2NfXDkYDQ8NetFu8Q3XAP1CvwNXxa8G7MnD43U2uHd9vrjs8UineHNPPTZnUVmwGqK91EYWvobK6mfb9MkR",
  "key13": "4rsrhKsxrPJ3KnHPAWF1Z5AAbaxSYgpUrUXZChTfn38UVMJDGGiCdPi9wheUpxZGzXEMheJkYVbc1P33aCDEAdpp",
  "key14": "NxnBRumnnmnRvmUVqzFu8cMQhtM1ra6T9W1YrAewqi1eSZ6K84hQHTSo9PmDsvMgXDui8nVAh6DBQQwcS1uZ5Zu",
  "key15": "4hnUSihTzi6KjMQsAG4DWJNPw1aJdL9YiZJHC6yemkQsCiNw5EHgHHwbpnHN4ntpFuYZXLKdgn1bGuTGnfvQ17Xk",
  "key16": "4NsAXQ2AWmJs9hSVoQofkfxESN9S1GyJ6Dn2bsai1pcUC8jf4aLqdgmWuJajzWmoYFJVpxek1TDjEkuuwDeTWmS1",
  "key17": "3QpQffXDqjhsygMt863EnBg45uaosMbgkCUTwS35GdbEpEom2sGbCpUBMGKuSQJAEvQ2YP5fpSNhc4bNGLKLhkyp",
  "key18": "cAHgEu1kUPJKBngoyvYRmRLfBbt6eWLhdTiUurYWw5gng4x2LLXTdWmndy2gDeZscVLxF7awiKZaW7dnm9GXz5A",
  "key19": "3XKMQ6vd79YXAztSAmVrzP1z9T27fN2pN7UJGruSrV2dvZ743errKSu2sey6axX7qoSnWFd81fc8o9tbpem5tvfT",
  "key20": "216neKb9Z9McCsg7iVvCoA7rvYK7AUYMB7tExdEnXkvjBgXNmvSLZ4PGyeFvkZXMaAm2YS7xwPYHm9BuGcFy63Vs",
  "key21": "3QwLwd1ziao1cJRTJGBUznD9gGy5G6XqP4HxzYAmdwBcgWRsvZKizQGaBNXZ3L2Qf3PsqiarXDwybYyS5SmZSPCz",
  "key22": "2ccQUjej2x8oajc6QjXz7oZcZK3c4VfmRQB45Vc8HjpbcCqfX35XWWkqTyPA3q3dHB3nN2GtQbTwM77bENSXWNAw",
  "key23": "5X4puwkgEkRE1qzRauKvzWY9pQpRDFmrPaDcbyBPaVfZW5bv24dyTkRRDrWSAZgVLjiPmmo7EWeUptsyq9tR9M5Q",
  "key24": "4QHxv8jLTm1nmn5LSAuDJwx4LEP9ZeMA7g49CSFHM8thRTcupMyjM3nzQc4bpjrWv2g4M7MUBDm2wuq6BngVmFYp"
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
