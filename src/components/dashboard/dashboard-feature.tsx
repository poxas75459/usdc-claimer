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
    "5SRVE4E7yyDaGUYkifZVApuZbzP9LR5uAfa3mR48CHnKnTotqYAqtML4Tk6wwAnH2kkRvStJUZ5A5rY9Kcgu7FS9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jdE4mKuvZ3DJKy51bagH89aEoppqpYRs8jy3oiX7P4udew1rYhqZGf7kyMQcDk7trN82KDAAD2civoZ1nBddm7L",
  "key1": "4kgf1iG8bxVVbuXYgZF9vh3om523ygtemcXjw1rtXktzgurwYQREDgUuTxUDH4uT9QzTBTcX7VM1x4gt5R2JftXo",
  "key2": "29dcxmMTv4yyruzubbwCCH4nRYFF1U8UGyyBV34RzVqdYSEaAaJ8rTUZ2iiEjq6GdznS1cn4VwsNP9RyaHcP9bwL",
  "key3": "5j83mxBhjnJVr4uJg5UBaSXrrba53YHR2oHVw7wSQQSfEiUJT5hnRSutnrn8i5QW8UuBoWz2rPKauHGJq8xV2oyk",
  "key4": "3v8T8AYiqrdjr6BZh2RyDmZtSz5U4RWeHVpPBZ8pqMcgc52veASsUG3C1sWb9xNQGA68rHk3P3dcadK3MDJHPrQx",
  "key5": "27Kirg11n9d72Z2wt83MmgPMpvcCeXeaKNkunKzehKRLWs3v33whDkjaN3NsLBE3G3C2jvAGxauFqn9niG36uLHm",
  "key6": "634w9L8cEFXfQ7isJqWtjaLN8TAbFeymVJZPjE6wEMYC3Tv7cvFn8Gme1x7FjFqP4H8Q9WmoQfCBwx4iUt4N5aoB",
  "key7": "64NRAVkHYCHHFVS8YM8iBtqWyxPy4qyNncfDDZFD2SCH2Lvtuxms8zcyDEXXxijVwD6qmC8vhHGEhwAaW93AVhFk",
  "key8": "5zzTWvqSyiwe7didjzf9GyJhYdFHaV562JYHe6KPckhEvD5XD3Lr8tjDRRrd1uYicgtDght6JXEaxcuRAw1fV5Pg",
  "key9": "5i4he9S7S6bq8hpP1jGPLNpJaKBooMNehDa1Y1rpVh33tU4WrDN1cM5qo3rG1cqS8MaeFvE6r9C4goyr3f4tXtj2",
  "key10": "5gBL9Jc41yWYTLcHb3Qzi6LwXa6GPbAqq2p34XW9ZMmdgJNxusEYRaNnkKMjGDGEh1PjFMhdjVCjQ5JzdU97Hmjx",
  "key11": "3GJpLWbeH5A9zsXdPNWwiJDVAPR4mimMuwcgHPZ7qgg4VumtFA2dhwXukv356zFs5avLSfe7cL4mJmggnC8CuKXK",
  "key12": "2p4sAFpiGWQML1FUJD8yVWTrX2AmnJotvMKe5Kp3Gbsz2M8Cduhj69ySfnvykvHznm7yjjgu65S6awRcv3ynwoQM",
  "key13": "2BoPUzEoTs8XpBWW4hyQt6AxUWDhV8YwQYu8mUfcGz7fBNTCHeg66snPq8yw5Uf711gM29tqzxVY2BaQF3BvKeA2",
  "key14": "3pM4TNeFkfQbVqB48Nmwo81cFHBASbBDq3MRXtpKzYPHrVANDohf5aGjfQAGgg1BqApvLUsHzvnmrwyC7EHYUX3M",
  "key15": "4ckaK38Y7WPVnXjZLMtHHnuMSp2xRYAKK9isTypJgBy2N38PufqhHgeGfJY7CBf9iNGZfeBx6RLHUMdYNaCqyTWQ",
  "key16": "44A9g7W2JqzuRTZMJKdbzLQV2hAn6jW1nuaBAPNgmuRVAfo9deM5T2Ut8yENBbgrvdyXQV9N3CRD3ofTiU8GWaAu",
  "key17": "p8u1nbXVQ2wGqRxj4fmDjmjGWXeP2cdafoaoCTwsxZuB9SStbrsmpjJCJ3KwQPvUNjjv8w1QMfc91oAZn6mKeVY",
  "key18": "4nsuaDkvo9dHdZW2V5krrRsfnQjEC7Y5oaxkJXKeeaixr8eqQeVdT178tNn1uahcq1nDMAMKhCfkGrbV6k5PwCdE",
  "key19": "3XZkB8cg76CPKRu7FMsAmx5bBo3TTEjavnSw57goiyybTh7aNrfy1BovaPujv88GWPCCeUTpLFqBLrYjAHvshf5L",
  "key20": "4tMZ4LkqyEe8WdMrxNMFgofLQ3pLVyVPomWp66JbPhZcUJDPLxgJwZms7nYmsdgAyZ5EWCcSd2MFs4my6xihYEDR",
  "key21": "4e7Z7p5qhpr2ik6JkqDLJ7JekkhQdUVH6TuzV716RbPrfAS21YfEuVtJGNt13jYYHNjrVpLN7k5yLSUTXWRueSE3",
  "key22": "2bfTj9D5yJXvqy6hFyPMGChT7ASkX6rr2XfevcN4AEZ8F4izBZk3RARLsjW4zx5BzHu7m4sfGno72hcc4wzkDt8P",
  "key23": "4sZ1myxkdCEJuyjaokydeksrG7Pfa65WBzCiKQfhNeDkPwAna5ph1oVv3Z7uMSSUYWng4tJBJzUcjL9yrHJJNKyx",
  "key24": "56daMpYe1TkGjRdh5VrJQrDL5QJqnFBFwa4SWv85F4DkaCNNmJCyBk9KYLZkmMdjyjkuTDSbTaJAHbVruioF4vPX",
  "key25": "4YFBziXuJ9k7JGSJJhd3Vuemiw9uZVzs96Y1ERW8USrjZApgGzGLpBJKe4neDJQccFpwjQVnZm5ddUStFqphA943",
  "key26": "5GCv9kNcQkXTgQrkuxyAgY14FFMLvatZcQdrsR3gkvKJWbi7HS2whG35AUzQU6EVDfSJK8ETZrvLg1gUBt8R1VFt",
  "key27": "3MF1hzQjfvDFdvbZBMibFwWd56VAm8qrmdKuQKrB89TAtKySQcFZsL4LCVqvSDCe77wQpdE5GL1GuYPHyp5bDj8k",
  "key28": "2cRb7M14aKzDsHeWHBaNkGuPdKrWTdRRZLA2STmJHNxSYX7yqDAc4NDz6zdXPXASLkvMC8grcxaLEMZcnDWycQ99",
  "key29": "2S3aa78bLANsfU4SG8nS12BZu7tXxLTdmhHzcKa5Zm1zQTFpuRLtqeF2VRuV5XRL1AYGNeWaCW8TgBFh7jwDcaiv",
  "key30": "2FcV8MkSkQZmrrLSb7wrr2YMq8uqymeGMZYaT41sScFjybyXiyVyHDgkSY1Su3YNBd1ziCtUETnqpqKhgBjZQF1r",
  "key31": "2fNCx5MqGDAwwbQoVZVs8ojdY4L11G56bVUggicpdwgHt4kAyQ5YHdBw2X3sTut4vSHN46fBhyUJ8TmKYc54ZUgK",
  "key32": "5s9ELPmvX2Fsx6qMQqBd2GDKnheuMfzpcMNY4xFK8ryEjLatfW33qh5iPyD7BpZQ2nX31MQxAXHhvcCBCt1Anf2z",
  "key33": "3uBpxAU3WG4g9uQx6bAia4TRpU2ZyJSU3ZCLsfwwQ5gD9nuxbXZC13kvKaDpFPaDFzkDEQHKsZ7PTGz7AXr4j2gk",
  "key34": "4nLrP8QH9s9HZJs59G2CKRSky6ezZXFRFjhqCte9j6ZGusucn2PQJm1Q7zgdH7hqTRmkq6b7gj4pku5A9ys2sChz",
  "key35": "2msc2MviSt3HbmBX9z3gQvj5mbY5QD3eTRSY3JtWQRjEAtDDo79TCfYUmrtE6w3K41YPSRbR6wLB73jN6EJ6xb9a",
  "key36": "3h1nPY6LR4zq7pftFbwKd9pfB1rfpezzw57ishXvDAzaf82FZrVbsawUPqNSLdDgiWeRVbxf5LrPBSM82SSSL4wA",
  "key37": "M1MbPbiYfF6SzXRcD43R5oA7pj1sp98YDCrXjX4qr9MqLDJarzqX1e9reKwD9QoxjFSANMMJEpKcfNzLRuGSive",
  "key38": "4ZqkditJPkycUJyXdVEq3Bf3Ej24K5WZr8whYMzwEnCpQWqAZo9FgdTsskUaArZiXPtTq5t3MB5RWfPDgfkpf9Q4",
  "key39": "3APsGThVtukg1VGjE4bJZ4q2x6WdQEf7jfB4NCC9MwfUeL17ckcM8UZBMuYzbmYQ1Xm6Nyt31BwHkrmsQ7L5f9a6",
  "key40": "2RMFDaU3GZTbK1PTHFM6tuYhhqASwpw5M1fRvcP1BDENxVdYgrzT1vg6DvvXFPbjSKdfcno4sQqpAm95VmiXcYGa"
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
