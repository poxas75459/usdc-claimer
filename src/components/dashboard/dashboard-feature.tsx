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
    "cp7j8u7orcwbXVS6zsZv5C2jj2ZoFJVCcHk4pZhjjNpS5x474Ai2PgzzYPEeUt3ptFW576B6KuJoZJnDqqB9qc4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vGFHgKqQE6MfUKJQsnyk52DRxnVWRjyeFRTZp9ZUHbUsGz1doDq5SiLT7CCFBPECDfHFd627spt11U538nfj7v4",
  "key1": "42sv6iZfTNT9ECjfWBKyHnAhVA1XPbpE9srkw446DZXoUeVfkGWEsyEs7SXCbK7dUXBBTqPybESFC729ACbeYGxS",
  "key2": "biBWDmmmtXDR4dA2iUxkQ2aZtMwepU7B1BiCFR9pZNMxockB7FiQQqYMTFDaTgx9DQDn4WaTiz5Zxaj1DgWtcAf",
  "key3": "3vywvqm5pKL35o6TFyVaHxuer5yBDyjCpEN3df3Y1tHArLDnM4a5WqYYCwKiQAzhXv4ESVd7VXXcCUezMjGRV542",
  "key4": "8M16tjWHmX8Gj9B6T83atbJd6YvWcjne5TPp5Eex8JYj2Qz35SNvVZMiHSAE4cHJzoXxTH43EycCm9hsLEpbVVm",
  "key5": "2wXZSRwqLXURrvht6gxavApKszX68oF4k1pH7MLcg3NLsZRtoMSyqmbGVApV5uPbAK3FdApMpwb6LfZcu7jw9t4p",
  "key6": "GXS8XDh1ENQLRDpo45mn3EnS2NDiqg3Agsm8hER2QTbY8ahE9owZFDC3oLPQawYoterweqvn28nyu6wnY7EkF4H",
  "key7": "Fmb2j9Kka1FNBQ9kD6yiuSLBmzgTWHMMA84Bf8b9GYeQ43jHJ5QKxuqcnfc6SUdiniwQfh5saffcBgCoHbtCBUD",
  "key8": "3upfhLLx131NVnMMuNJgdAEiWcgGPwY6CcXggmr6g4454itk25zknQtBPwTUCtqAaSGMn37qdupC4t72ShnckBy2",
  "key9": "3LeSt3rBSjLrcTGLjcgL3peiqFgoFDwiwGT2rDqoafx1iUWMZHTsd3U98eChLoJUNYRkFzKxJYCfkULvCzmi4w35",
  "key10": "3DowLwWhvg8iBVC26AFVx7fDfL49FAhQSYR8i1bXnSyuS3PnuZuxahp1Ya8dcJahjCLat4Rf31mmE8ubmytkqUma",
  "key11": "2qtjXcAMz19vGZ8ZohjUQnFMnW5Udf8B8saBeMmwAfchQcY9uEXURPdyuxsQxTZGDKAWoHrhyRBoxeZNMXq92FgH",
  "key12": "4vWBbAtDK89LroYLVp1phcmVuDrFsYKWcJwzB5D4J8cfsSswyL2FFnEwWbwWa3fix4FBTAjkB58W7TinVm6d8Hkc",
  "key13": "asj7viis7GsN9ssUofuriVNEJVf728fK7haSDM3kGjYb9ZcNkt5SYRohGX18jjkDR4E9feWqfjPbTuA9a39s41o",
  "key14": "N9UiuVJfEJ3BctuUkvQJwyjm5Fg6mXSbgLyxCPFE4GMd6xwofDbvMwQQXR59ZSFqPod2sCSJDXSd1kBkSUnQ5YH",
  "key15": "4QdAFc4tp7WkjYGcYbox9t7wZhMdzaSbe6CGv6HouRPzpkSVWc5rw7CjHV2hgPyXKD7ci5TLgQNcLzAXENpae33F",
  "key16": "2iRkqfHfp4qpXWxhzWTYaxQRfVpPmReUj4AJpUAcuftMKT9q6hEAzFMG3tWEMtJybVCFDfFYWLrmgVS4Q7gmvf3t",
  "key17": "2X15knaeNErZeXZxaEzMCn3NA1zALZL1LGhH68re5PUkWAq2vDKrzcb8iPm1NsF7B62yThe1n1ATyaUgHZ7Ct6uL",
  "key18": "4DJ6xBBqPNMA6Phyd7LWkqZS2p75gKmXaWfjYekciMxDpX9nhnBrbvKg9tu9AtfhUcdQcSRz2suGxgDKPVYjQ65e",
  "key19": "44vNeyDi2ji2SSLxHpvXhqhCeJQDxZwVxP7pKzRcvbyh4YNoexShPVH3UdbKiSd3GW8tSy2ttbN5yneE3c79xYmb",
  "key20": "1mkM5rEzL1mAkX48HYBqm3og46SGfa9YJNJKTE6Py8PaZEB4c25VeNHwXsk8SjPjUekAATHg111vqk3wgxxBMWJ",
  "key21": "618oMEWroX3n5LrvuLLRTRTWM9qKYPmNKN7ukNhxd8PbHUrsJpk7KXwgBcb9nx3GiShh1tRfFj9Fp9k1SBY6gq1H",
  "key22": "2EocEWe5yf3Bq4DnMHPm9bpMdZgkAdCj18AoYHSwpLKcmdzJbVJmT8dMn9rRZ7KxaoAxCKPZxL6Xe8BNsf2kfafx",
  "key23": "AmAyxGwcZo7WYWasV2PFLamJcPoMP5vh1HZ5uEwGRrEMV431oXzG3aTfZwVKsfHJcRt3hDTb1jXqGzZD3AByMD3",
  "key24": "4Tdok4u8NzYrghq2pTTmfj3i9cX9B32ERfcdetRpv88vXysfQQYWFypeJ7Aa9pZW3x3ufB5xQCT5jPE9MGF74TAw",
  "key25": "63TLmiASHjSYsGaRRRu9UFCdvxeVz9JQwGZQFBiZqwfbsNs4ha89G7K8rxWQ7DkgxtHKtPv8p6rDkHsBdDaNqBRQ",
  "key26": "5cvkcZDaHmj9MwzMz2CnmTFRYV7wRCZLqwvw7JWP4SRmVL7opHjA1fxi3nvJKuvWW21qV4SyMn3izRmK9npggp8n",
  "key27": "2hMvGQwWdJDxb3VFPmks678XB1ZvCxz3PqB9FvJA4SRq4sVmB9s9zHA1JptG1GJmMESXPMNLkiGVBaxtTjXRwmN8"
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
