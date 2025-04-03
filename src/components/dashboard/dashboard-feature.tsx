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
    "3pNzDfbS9fDodfVSF2cVxNgsRru7GDNXgQ9BfFCYCD35iGV1EH3HjLv5NqVH2CHhwC1qppyAr2bt82K1QW8QFi18"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BcpJBdPMAZqh5JsicQsFikbo22bsNbyrLZjzTLCggR9hSqaregChxuXhqefciuNkrjVaaLkPnb6VyaKHkrJy2zb",
  "key1": "2yyVLCtwqjtTA1GBDJGeiDCEVxAuCAosK5PpVcL5QsPUQhseKHaQgG7sgRnMQkRwwsKEAQVtQYZpBpiempa8uHz1",
  "key2": "64yuqo9fNeNmha1RpxuqEFgoeCSp958r5qgcScZSHmQfWyNJPtH1PJH7nSfaEaE8S64Kf5qvpeEpQpVmYtzEe7kN",
  "key3": "2A89tK8zdC2aaFKD72zWaAMoe97Di48C9yG2rm5zEdgeXKz2nTEY7TQsEot25Nbf7WwYv4jjvoohW1GsDkve4cGP",
  "key4": "5SkRSuutAuojxNef1YTS1tBuqnELMQrPDWKGwrSVjbA8DoQhf5LUakGPv5o8jJLjicLeFH6FDEziuGXoxRs8yRze",
  "key5": "64X3Hs1BgQ616oqy9Comq6KYpH2x3kS8hiecaCBxzERBPMJTsBms5u3mVi62BVcveTpQ8UDUeuXDcYRqspEB68Pi",
  "key6": "2SBKXR8jDxbmUuWvdRjM1mZT2AKuL559guyZHbDgPZixLeWCWy1itKSzvsatcohiX4mnfBV325XUYqafkZze7Yfa",
  "key7": "4sLybnyX62h3gujJrPJn7koyvjZmGmJWkfrxThqTz7EPp5mZyHzHFtfY6XYRUo7BUxHV1tETwmt92pKVLy74CoFr",
  "key8": "5jf1v7LRZ5MwJt5vxiq8muaRU4YhWa4SY3QNL7na9q6PBPu7h8Y7HowUVHdGxfT28quwY3LxPiCxFAk2DkcixTpq",
  "key9": "3zS88TdchJB1zsKh3hniPazqojUrxrtYbbbYc7kzNnhyeVZpg1NisF24LuDV97cvL3VNxmRCXDvgaQo1CnJF46xf",
  "key10": "55rsMuBDtHZYVBjxpBeptC2owDswcWZkEEjKgqTDU1y1qDT77oM9mAup2byBr4TNk6x4ND9Cxd7AwQapgnGKPnHv",
  "key11": "bBpGk6r52h6We9NyBEMTc9iaRdNWL8m2HvbfPNNFT5NRdLnDEidX18Yp1ADi8Zr1Dh3PCcTVfkzuGposozVzhga",
  "key12": "355n4CeaKGjPWyMkY9sokYbSAN9ZdmjuwMw3EBWrnmvW4rwopM3GqYRbM3ZRXAT4bAFUAVaUn5kKRdSCAUaDfdT9",
  "key13": "5XxQc8KFvrrBDxXzaobygbBzi2VE9oL5D1onYnEadQPJsEty4JHRs7gJFfceJjYeuquMWFM4hqKwqYfqPrB3YAr1",
  "key14": "YPeBZk89iBHcpTeff1brMRpjMA4QDrZqbwQxbCmfVo7jnZUkeE1oVzCcoAKzpKP7CA6AjGf9CEsuzueaDSv5U2L",
  "key15": "4TRf86wktG3PygprERDXWeoRiNRTXkgQ5MYuyDhzwpro1XHi1K2sZkkqFRj9XSj6Z4eBLh5xfXTUeBQugCjJpWqf",
  "key16": "3qcaDiiyVvz9DN4utKD5scQkYZZ7v4wHU2CPAigo96gRxBjMPeuCq2wkqq3YvcbAKd8VjzGEHHVtnpsbwwzXTG3N",
  "key17": "3qsPX95kMfsxJnzUVBnrb5w1L8atSb8uWbvZe27fLEVFMyTcA3gWKZwh9J5y1Q7njfnUEXQZWbtcoXCDBfcu7iNR",
  "key18": "8CeBz4kDJdjgTxzb5AnLUdzqGFeWgGr8rEDqEZUvPxDNkVm8nQe8ZYQ55ifffwCcDYqW9HCrwNrnNL1SsEUsHip",
  "key19": "2iX7gnss9fEFxRVux3pD8xhmNtVWKyXALj1sGQJWDmMTYWcnYw98fKm4SiqfSM2tPTu1uQcwSReuRyTxS3pUvcfz",
  "key20": "mgAhGsvVEVs4VMJm7cKNt3wKBbazCNF4bHmfnRYbFWtpzJALmw2eQfM4W5ny5f6sVrm56LmJHFRtrxg1g8RmywR",
  "key21": "2XgHnGsFRMK73FsntCMjixUoyWw1Foenqp8bigZXEC8kVHnzzbUuM2FdXQgn6ke1WtB9CdVbfkQGxNj8UBNZx7ZG",
  "key22": "561L1uf3DsBqYNZUgHSVe31v2ywiGLiDqCL68FY5WiEPSRVxojSpaR1wpUgjs7TQ63sBJtV9eddWFUQ6jLBEpNvx",
  "key23": "HAKVK8pyRUQi11xceBcZkRxL6jGjjqiCPMWCF1Pb1GdF3hiwnDRSgpz83qFpGotjiEhPTds5SYQGJeALWcV5Qos",
  "key24": "3ktUWUYuF6beVMNCHGeoPD2hV6YmCGexBFRCipfjfDaKgBft9AgP7ybntkYKM1jHa9AMi5ogNNPGB9yH5f1YWvb8",
  "key25": "464xAqo2gHzPg4iVMo7D1xXJhA3nxg9VB6nYBvAPvxinFQpXiGFVeozATP5M5cUnY2QJdMrbKMm6cPzPHLvCRYP8",
  "key26": "62J8zyeWUuDEzXVnWBWazw8njVkMr8WQFCJ2LHaAH6VXbUEE5in2qr8LfE3V3W5NmUtUCuTFBVQy12ujj6cjGkmC",
  "key27": "2YTNVnLQ3iZsEs6MKGwxw7sGgB3ptVRYqiKe4P6NskpyK9xRYgfiqwGRWUm94rtBEbTpteYaqYnjkPoTvUFSbvXR",
  "key28": "3Lh6SL4XEcKttKAVFamsavU12Z3fLAikmhAeDqAYGBdiTvmQtn8uN2w16X8kEEU3cBwy7tvDuVj2vMwbpZCDcNh5",
  "key29": "3hVGyfozbpCBBeViQcYkN1CYJaZ1CBnBmv3Y6TSuMySUYVeUfCy9JE1sfgzSJfgQDP1UKR3pqivBM6K5RoRTjHPp",
  "key30": "228t54MJb9Pm2Hs9X75i8bgADq7m2sLuiz1XtSUysJ7KJQXqtB15S2ZSUDhtzUaG4uA2YSi43RvK9SDFJfx5duht",
  "key31": "5Rbe2fiyTisNmpxcgT5eaTrXArs8HsLZtzpydWh39HQqnhT4RaCDAy3yFqLvpVHopmiFiKtHyqE3YK7vibWLRX6j",
  "key32": "3W4gNPcR5Rr4HXcdgTHi6EyZqAktEehKvqgdGM9qxiZ6c625ixAiXcSZYsqJjXPa7BCKAb2FDbJ275so44VpKmyb",
  "key33": "5FQ8eVzKEsCPjeGc5TNa5GQ2YmMMd8Dkd1bnoZLPVWWig3rALxP6NSQTkJn2kidgDdHzxMNU2PgizpHKo9oLJHym",
  "key34": "4rMPp5MRmLxtDb9NJTe2ikfFRrvetw1Kxte2P9FLWcM1rYGPRqHMN9AHKsw6oegJsphrBz6gftfUJHnyzEKurpQ4",
  "key35": "2whbzykUjVuL4XwYSKDdas6xcsB9Ei4uSGngYR9EW2Wqqz4m6YFysyKKgcvJFpsxpUsg1HDhJTE8VYNanAcgc3ud",
  "key36": "2EPTuJ6gEYLPdNnegJhMnZDAfgsZ5DadLCHj8XVvzy4BghvLLaSk1eKT3CZHzzfxSPN9kwRUKQU7ENu6iRd1iq8F",
  "key37": "3u8TRe1NntVCs4ZndJKhpHKutftqXjJHkSHm1j6i9NFq2nFUTjSwjAcGM5KWc4TKwPnkXU17NmVmNbSFEsqZNu7f"
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
