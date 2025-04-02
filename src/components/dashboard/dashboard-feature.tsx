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
    "2g839RznEVGZF8D1Yh63vJsZ5SQE355FaPt5Q5J8Rbm6EinJcJJud5cfrHAuGfe8PwTXAzAyFPovw7nRfmSJja6i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AnutydLscdw11XCRgcfgHyafcAJraTL3jH7d2VyfUpBUWBazH6uDtRX8t3phsfkB3jpnJNZcTZqA2mUu9jSWJ5q",
  "key1": "4joqTGwa8jYwUk4gTBSSAtY7rbK7KiQJfS4TLm5pnGfhronuBczo6KNTrbbrv62bZAbWZxQQWdoYJHudzkGgw16C",
  "key2": "2dCm5ytWzjzfpkTujx7wL5UCGbdH7mAfwH9wSbA97L3zdc7Hc43bF4dYw9pSWEeANsFsvUCcH9TMaQXXgEkxeYk8",
  "key3": "3JEbZTXacs65264DHfyTFBUusLrMA3mDoinBa5gjWQsc3kdJTmQg1u7fnFkLq4o4o5ywm77xPegLQerCQURNF1Lc",
  "key4": "5PQhzgbimtniDiShMGCp8zSp635q338m9L3qmENmweAwZyQb9iP1wH7vcuwwaTRdBgmzPARDKpSqgZvGSMUhQiuF",
  "key5": "2YkiCciLZxg8ZdUvZk2ApDeVhmdpCY6NuVsDL6goqFswCmHWBq7XzBesxmKegbutN3JiPF24iH4WtF68j2AH8zJM",
  "key6": "3XDh23JkRN7cYjfnBpGCwejR1GsYUY4aagmdULF2S5eSdyYBPcZjKWZ5pfRroQUj9QW5XXb6FSBBbyyH9f8jsDmu",
  "key7": "48Z9tF8tiJzJmeCKLqmXiRqvReTncZ9x2ZvJwUnnmQeXoNQroW3Tpti97DSqLMshThjGGgVqYHAp8uZEjTEK9ucQ",
  "key8": "NbSuPsNuJXknAixDLUhVv9yMcwvABqmcK6j4Bhb9j3DzLGuDwU49HRtct67hcSTgK65wswKQAoJjvF1LiBt7kEu",
  "key9": "2aXccHsfu2gyF1HYWw9BBpTWGbnXjTSWBYU7iDPKSya8VQv9PgyrqxVgbvkJ9VNAm8rF6a5MbfiKoxd253dUSKaZ",
  "key10": "3QCtnNKjZmmbAbuvF7fzSTS8vov91gWrv6Y7NNJCC87LYSn5FPfkevscgGwWBeh5p6WJfBZXiR3XuCgiJZZ1FrcX",
  "key11": "4qVuTgiGj9LPFP1EX4LHDG22AwiPuWaj6hAeHrg7oni9pzukWYBzmhpbV2ydZjXLLR3ntYUiLReo3MhSasUEeZQR",
  "key12": "66JjsZeMmNpHQdYFarzfLbw8sBCShD3c2K2DSJivve1uhxjydXZXtmfSpEmTzVB3FkiyAdR7ciDxv1xXh4g6TfQj",
  "key13": "4rnu12ik3KZ8wsxEQxzM8fRPKCwd73W42q1zwqHVkp12tujJ7kYqUT9sTYkp4U662WeF1AqQnGat4FSy74DPoCgK",
  "key14": "4T4vb7z5RHdmhKMQyEjC2aNg62bijBUPxQenjGVKDRuvk9RQzUHydKjsk91nPzz7S7wasxVeEDuae3Fz5Y4Qy9aH",
  "key15": "5PcCFyf14zigMiyYxMc8UJP9QL477Uo6ig3DMbATsp9Gr39jTRB4PxzL4ALhLFnMQxxTsMpi7jBov8ygHi94ewLr",
  "key16": "3eMYw89kNCy1FfG7dRKRohGYQQe9ThjpzuQ3U9K7UA1DYtX8qs9qp9MDxB5g1nAieW53sdPZXnivwnZRCvPXLy7v",
  "key17": "3T9x5r1XJNhVM2BUUWzwP4aUbpxpVDdUGqf2YY3Abz317CJJcj31jV3wkz3bP1MJVQLcpArjThBCzqtFpKAiZBDD",
  "key18": "5nvnEvqAoQawQKBy7487tLoQPMcMoUpxdrNUXR7oUX4he4Y7bZw4Za1XwHi9hSZrLL9KdjAFrB5PEXRQ5GspWc1L",
  "key19": "2Vbt95CiqST29uML2mqcuxeSppdDSdjw35cbdG2HTuEi9AtthoiCZxQM7P2APuznZLLjGoeHbeKSv1kDnA5Zv2MW",
  "key20": "ByHCAgrhAwHFBUo2aQHRT3EYuRJq2iAmFbnBU3NMxSydxC5bHC6v8PWEFTT3zFPXeUvjA9QQhGc64G1VFbTXgMy",
  "key21": "25n8JbCM6zjozPB7Urfu43qxPptHp9ZeQ1bB3XdmZLZTsc5CDNHBRpDDSSeoQiywCqFBfxDa9eVUxXWohwxwuU8U",
  "key22": "2hedWXkFBYiZc4o6xp6t7cqEnn6gg2sswmBDiJCQ76p2FQ4ZvDc2LLAHF3uoxTyYs63FjwNHNjv1tt3zmZYV4qQV",
  "key23": "2N45HJZ2HCoGZZWAfGtsbP1ZGrfQqWwzkMdeAQFyNWqXyzmwgDYd1YW4vKYmP61e5ZBeT1EShrYqQhZjigoRTZDX",
  "key24": "2jRsbG47VJeEj8V8UxkKAqSVGd44CX56SXsBSvu4Y3Yp17EPJTAnu3BNJGQczsu4cLRTqpuGabqLAV7jaH43DfvR",
  "key25": "o5YsqEo3WHn5cEZyaZ9abpgZ3SnbEDJVZHG7YuVUTpCPTc1Kb8yaCXXFgDAQkhJ6SESBAEguJ7rkjxARmndkmza",
  "key26": "3D1WizD7LuiUfVruR1WPYpcy8fMgi4WBTgHrtgfN8CNwissepPDiiBvrKVtDEfG6RJBVFFnN2SLCUfykdtxEjWoE"
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
