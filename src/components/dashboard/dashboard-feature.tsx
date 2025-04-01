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
    "44xHHvXdQHZ8k95wyifXne8jTZ8PntH9fg6b7dChjhc1QLbRW9b881DKvVvmvyZtwDoW7Qei5kYyWr72H25a7E7A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xk7egoTj13XFURwJaXehtg4rhWGyCVGGtNXbSXBuRDVod6mys9ERxY2vr7un8cASV4ZC1tNWgyFnb2RMPs8KbbT",
  "key1": "54oQoNYwsf8CqWB1Q7ei9idiy8yCqErHq4XWnKcgXv8wdCeNG1n6eibC6j2isCdbeEWRd7ADxyXNk3GyhpBR3V18",
  "key2": "43ngxxeNx2ewEvhCYLvS3wArMNtY1xDQfAGZhnYWmtsRUAz8djCfud9EgJbZZbFyGT8ySV6o4CqwmPxeUrzgtW6s",
  "key3": "2ZzrnjBxDty9UUsu9oNpoT41YqabMJQJ1QN51M3vQurov7Nt6rNVEdN6Rh1rxsWA3yRfehWSjE5mxNxtQXesHgcz",
  "key4": "3yVRDeDwoooVqBBEA4ZLzFtkAMgzJHXm53d5UeNwciy1gYw2tgxqogHtcNgDqxJTf4s18LhGp3SknEY9Y5ahapVv",
  "key5": "5RRvdz1QvkFAphLsWrsr9XZcAYgS5wrBUuJKgqLbFQt9iwVJUnqynohSwJHr5VAzomoduXa9jC5GNmt37CzeiYFf",
  "key6": "5YStPCiWv3gTSQp4SuJRAJ8LD6Agn6yaknaCqZwbXeetMFFyttCUi3WwMHdQSEgLkrsNhDfXP9aQiEQVCQDajTQ8",
  "key7": "5GUawCcyeZv4bFrx2hyX1waRuHTkVe7CrRYUvY3qQxb8fAzpq7xD9s6GE4839n64x2i4LyQkPgnDgjL1PQMkNsdi",
  "key8": "5LTNTS7MFboiwxbzkMbWAWvryETjYtF8WHHtgGCGZfjcamQFvD5ntAJE9kWCMoMgHkdiuC2qzX3BkPM2UZQnxUxE",
  "key9": "5tgE3jjQJWeodQcejENcgoDoQ4fKL1R4RZ7K6TBmrXEK3DMeiCV3a3NjH1A14dzUUgZN5d4vzs9VcV7cFf5VkWLb",
  "key10": "588tqHbt1UEHNvv63N8A3ehc93RKnhLWqV1dxGao6TNPeoHWfZUCuGUg8th54zKjE8AqPgRtRRgPaPMCK6B78M92",
  "key11": "2rjGp9qqXrD44RqKfuMYC9XX5Z93LJnHLtyAin8WBnJssP6bCmczyBzzAR79v8rvCkuQYsf3kX2Rmsec2SfNXwLW",
  "key12": "3GTvxAiVEf4zjyMqwnvKf4GadEriRGCf6FfdtyKEHQ9oKjmFGZjJrj1FeR1398k8LrTNvV8Q9GSaf2efhW68ogc5",
  "key13": "3gxk8hp1sDBnUxu2fMmDy119MUKm8NdWk4XyMYNJG4QAYn7q3za1SG2DXAqYBZY8wWXMmZJK6XUJTMuhdpEyaTQH",
  "key14": "Bqi7pP7Nc3LNH4nhLu6EQ2mgPZF4FCsxYybg5YMDPZjD7kTMxfXkztvMrwCRUE7zdH9B3AFmsNcRFC7dBru6Uhr",
  "key15": "S8XUX4tomiV8zpeCk4KUmLvxVgPxZGpYcamdh3TnqWDaVGNWLGktBewEyyKvWfbpWzswaf5C3WUuyN8ELUAsQss",
  "key16": "47pqkouaHrYuac8v6jYd2FQAjQMTGEL8ZpHCrSX4Czp1yoMoueCVvv2p4vJ1Sukk2G5hYxW9Gv6dSVdjLo2oxcNn",
  "key17": "5WTHG1i1m3yL6PopZYyxdJXV5BtKmFCFzg4cwkbpGFnYuVnxgiqCiypLTSvVw7TxBXNabHWkZczHjTf91tWJopuD",
  "key18": "4vDeoJj5jKNvSeKUVHfkaQNPQfivtK1oWfsUxukWxgqiodujLwjYeCL71A7zF9CCvRQDCXzozsd4CuF3TEm6ng5u",
  "key19": "3vGKS4bhX7LbTPJsvjVzVh9XUpPVGeeXogbPawi7gmZ3JrGcwrBVVCyyfKmGMC9xteVLDhJ1iPrDbkQAsmi4xkKf",
  "key20": "4nu3FSRcuHV1sQvR5KyVG1LvRASELJVXoB7CTwJbvdoGnuDqartWgjUD2V4KkUw46PkujsdnTc3QAQXnmew1ortW",
  "key21": "4C7Ea6GXWA628CinhsMzKLTpDKtFn2eG8FFBXxtSbkj9xFMpNMXL9SFLK2LtTLtAGnHVzCCzKbEKR1YvJQcxnTys",
  "key22": "38RNBfZePmUoySkrduvr9Vdk7pueZ2qcDgeJ7pKdNbHM7iNNpRXFyHhCPJ6fVQVChCNnZbHpnKqR6WGBkAuzBqfF",
  "key23": "4nAErCiqLhAC2XZ9B2CCbapySHS2QKyZ2F7dW16UwsRBJVf6U3yRBPDLSZdxvb2pR8T8x4UafcEGMzewNWfGdV25",
  "key24": "4PmZ1qvdbdNEzczSZFmNBWbzUoAim4ZHyzytkSKieZ6UZDWRjzz3fCCz1Gh1QDgED8Y5EgPRHF1eHZs3jqNpenk7",
  "key25": "5NTFE52p6mzswJTKVg6Z7JBWyQGAd3qpev9EdgSDRgAa6Yk6a4ZECDiQWz1GWhdQmw3Ws12rEipQDtehDh7qF8Fy",
  "key26": "3TemqYpe2TkKSaD12SLA1Uv3mkRoFFdyhcUm1XaC8e2fNTqtoZYZh9823u7UGC3JVjagQcYDRcCxVUX7mqudag6Z",
  "key27": "5kTYiNEf6wkTGpbimFWtkUqCHprCBqjzF2Zus39a3Y4JQs4gnoawx3zfktxgWVYd7EKQWQVCmcLymcijQpnmFbff",
  "key28": "CnwF2PUWPdoYkYNVyPRG44AmC6uhL4zEFwir2pPVwkg7Dbcwx6p2ZcDLDzaZz8ckgeeZhPxWsG3X6ipSGR913Jw",
  "key29": "2aKddo9Qa3L8fFzAJDMwUAPo3jsLbJAKACpsGFYyZPFcFw9zhiWssYqNoYxwCzJhM7SEvjriLmcsooa2Ha1RhkXU",
  "key30": "3puHLzW5Drh277zVrHGusXwWjsT8DDTYVTZPWY8g5sacu1VrcEaM16aBdC9xxZavXV7N2soLuk69tvZM7R23pTmq",
  "key31": "5f1operkC5XxGyjD7J9kzYTwZdWij58X86HsEdWZXq39mUKMqu1f4LvMbCTewyxoq3UHHg5HiLFRskK9NRypbskD",
  "key32": "3vQMmRZRs5tMqF4a5uRZU1W6QtqEuwU8sx21tjzffscjZavFH6m5J5PteESrz7vAPYrnZCduwChvkGfB7MwxXoPu",
  "key33": "4DkTocCnEGyfCMkKRBvjaCxmyBKt793tEKwt1JrDY8gfqXEwPLB4uW3WzDdkwz9GyXzp9Jra9zc313MvTH84VZ1t",
  "key34": "4DQfMiuNgng6M6pSN8ehtGQzuyq1y2153VDe4StMSJzk4DQPjZcPNL4xFzHyrm7pzDPF7CHnYySE8CU7gMPhzSLF",
  "key35": "47nXJvqGKi7MQ8YpSS5XLWN2cZxSYAyeqZTciaz73rRBiwDE9PRXFmhAqTtk7DgB58biqsc1AgzEbuMEiXctm8ZE",
  "key36": "3vN5deiKh6NtsQrRLz6xAEy3FJuThPDna1k5AXra9Q1jXtJyiuCe2mLFZtHC9eKBg7iStifszCXoiF8hoWBX5U1P",
  "key37": "4KVNnU3JPv7Th7gLZ3kZvAtkiMDJCSrjig3VWpEihr9RCvw8MnXstuFYe8antXq9eWMe4DNTStQ2V9AEutvnjUcw"
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
