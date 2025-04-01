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
    "3ihKs6JLR1PepoVAfyScx1RTyTS1jR4gWdyrcHzfgE3ff1FwZktJGn9yzCw9xA2k1zogn6MtNJR1Z25ywuBHRWAQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45NkYhUDjSPjvyeuweRcRn7hVeaLJkCdoWmQ7RiuayHVLwSpeeMysQhXwsYB2x3fdEkJ4PKiAtSr7NSaYBe4ymCg",
  "key1": "3Sqm4E8YF6roqt2ydQEBGAjMfd5EfLpGWWXxXvWnwCGbXPDZQXniZb1g34tSvFdoubVwmC4bTeyQ5rNCURYauTC8",
  "key2": "2Qfa1u9K6sBUBms54Lbv9BEKhfYQu9eQwTUH4gcRQJNmRZjVfpqEjM1HvmdGQvXUFWtgSAbP9k8P2YG1CtyZZye7",
  "key3": "4aeqDz1dUBC8d5hcfRxTSHRakeS6phMCkDqvPF6nYfXxXYEmXjXP4G754ggVEbxFVcBQia5aJykmC4vuF2JuPJmY",
  "key4": "2sdfqZgYUHwWMee5Uh1uzAm32oXbjd48W2CeQVdbZePbGFoqypd9dAzX9GsbcT7nLKiDzTQk4MdN6tpXtFZj8dwo",
  "key5": "3z7PeJjFgvkon79pgLiCPU1oo7SuZahDeKquscXRhowHDqv5v3X6CY1MuxHSx7vwTkXjMgRQM7fQxio5KRdfi8dx",
  "key6": "31AZ7EopHLCnDrejRmm1BEx374bVhrM2rw3RJfB3YHJoNNPSN935htr9CuigYHy8z2NLh5yjKZJ1Rc1CZ6i6TCvo",
  "key7": "3zwXotYSzWamTFu4u9tBT9rWjZEe4DjatWYpMTzmfyhhfYNXNW6pyYmmaTxWzGyA2v5Zv36uLd341cRXjCgkAdCS",
  "key8": "5KXxtA7bH9HYeU8hfY5J1PkfM23VJHo5BDKhTpRW6yJUeeRcWpyMiq13feu6B58n2kgxuYLfwb7iR4tptTCG5upr",
  "key9": "54fxhPQvPdc7mAf1y6rkESajDSQk3JVb11tsHM5prBz7zGYxWNV2eB8f8zoZZgpzK1pRWmx7dNcWMEcYZFEgmQnm",
  "key10": "51Kge1UnCTGdAeeXeZCUMzwwtuxDtMBWofSUzqUCXXmDCsWhBYxt5j3LCbv7vFgAKjppXaLeKjkEUxuWKk2AohkE",
  "key11": "3CnqnAVgm1xwy8R7yAMjrQqArqWdrYM5qD7qxUc1gL7bhwsre1tSLvcZjER5PaxEVNima1YQp4bAcdiuWkNW4ENw",
  "key12": "56AquQYXgaFFoaWBeQjANBbY8gizDZmJzjnAjLXoifsCQeejhjLtSqgDeCcS84q5baX9ESu1VrW3QCC7gqZY71Fi",
  "key13": "4jEbZWj9Q43mQaxtmEwuwaDsX6zWeT4M8TRq5L5s7uEFS5DaPfHY7vM3ipEvWEp9gHUn839iaWVWbNhVjCB4XmPV",
  "key14": "3qae5bDCDJonzfqfyngTYyyF1UdGXrcpBBoqBJjYGeqfvJapE9r4fSC8jHR4qWa97hn1eRbP4uH2pMEG42diihuM",
  "key15": "3WkE8XYjKGr6Tx2dPpnQmuravDgUCAC1cCYXP7QiKh1gyuQpQBpD1M6t1VgjmBAKds9mCvhPB4aWf13TzLTwVYSy",
  "key16": "3mNWY3supYEqdwKoi8QT52Bq9v3fEUTDusiZe8eB6w8tqaD2hqjKLymXF5we7Hk3LKa7tWVadd4rApr78AVxhW3Z",
  "key17": "5VDLL8ZYeYAB3DYSM3xLtnCsek3KgNECa7edrkYwZ3MPwprnKxhAdV41SY5ucwiVx84HEX4qThX3CzG6pcpNn7UP",
  "key18": "59wWTSzj6WfVgKyN2Eous7pHX2PWSFZRMFYXRSnCuY4h3dREaDwKHYoaoYYL71EnCFV4EycbBmmPAxbH9ruL6uFE",
  "key19": "3CNQqDuP1kSebgjwvwVyFoncqtLQhfDKibnHJUsgCvVfBDwvTdexJ8akjjncjfttzspQsKj73RXvka8n5en8Huc6",
  "key20": "3ADPW8t4g3dmvwefPqYyc84C5HgXvNrAHhzjAwzPTAEJhwqNVgLB42oi8sXgt8Nmc1HzorU9oQS2u3exoGHiwDeK",
  "key21": "5jYYpKmmshfgYfrDnGDGGZ6N58VY5JEQ9qRvDR9ss9NeJPDeepzq47NuEvamLEkhZPDUJh9maDLSxM53LBGoVq2e",
  "key22": "2L5i2PrLi118BQijX9S2cKvJWPB2Shn4S9Zc26jvXAUyE55qXxF2ncE4dUkQrMZMGih7W2oAm5VfqtHpWA225HsQ",
  "key23": "5HsoqnZXFp7twNM2bh2Xy8REcYFrDrpngqCHgro6J9JPRsGBiBr38fs7g1M9zf8xbzSc6jpgVwh7tdRMNMtHEVBT",
  "key24": "489JSwvyBn21a9WHLxQGWTGxqSxvHGziBBMKr3phxSm2UMFQUihdW9irCDeacuFEC4Zv3FUCKSKcKSEW4Ss3mPeU"
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
