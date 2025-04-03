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
    "29d7AhtHMZmgeFX4Y4gwFHpQduZ5veey9z35yoZsKG4oqjdg8E12ncCEoDB3ovhfKBaj366arBB7oWn8L8CeHogU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JSbEqzAhkz87NY8vBbXAqVuwfeC39r9PJ2qcqiuNDV8igSMGcrcSdcFJdKJdMMgYkPgCvPGkNvZ2G96hCtTz97N",
  "key1": "5npwXkrLW4hKY9TZiLmWYLjTBBASBszeSw7jG2fLo3CTq48w7kH85WXTARiAprUME7PtPc14nzqpyQi6BQ6FJPmr",
  "key2": "vsLBNmbUrRiq4BRyJH65D7jSK99j1sam9YimnFpv6b22XhNcBYQBj5g2fS1ntWTGDd5UbR5nRzEdfGhnRUwvnx7",
  "key3": "6tUQjJw93stGUrQ8oa49pN4YyusAFtMWe9o4QAgtFY3rQkcmXr9kjQAuRpxWLWJtGYNuRhMQ1w7kcnNz98KoTV2",
  "key4": "5ZgX17TjLSgj1nJCDSrRNnXYQLf3ae6LbNxQAg6YajtokqdpjN7dZifcCZ8kTx8Nudt5HyaaGmEGrF9QACMyTD4c",
  "key5": "4yx6cRpHNtzQC76jGb5CYV7ronuaBLZXSU2x9h3qJ2ZSwZqcui6KaytLQdnxtxGHc4dYjoGuX6Hd8L5AvRBnfK4g",
  "key6": "5146f4hbicr1fEP2Zjttdsd3RewP4cEu75tG6HHXLPACUF1Nj4r1yurGkYtufzRx839JVMrAKcMwoRbqkbaMHTqP",
  "key7": "5gkjCNPsRXPH57GRj16bckmBDrNAqtQymFqCJWj2PYMhLvC6527niUme9TSkBaxUzXNSsb4thMkrpi3YfPZhY2YH",
  "key8": "f71m7upVMmVpddtZZkENJ2WB8kCu8NsRVSRLUyptZaURXbsvBvDV1aHBFuhPHzSa2AhdbEtsfW5kRKysVfaA5i6",
  "key9": "3VjUxYS6ci87auQjYcFX4J7Py4LY85ar768nBZhVgRoLPsApkiv63ZJ6NUynUAjHAxbC2nnL5Y2ojpdSQtuC3jb",
  "key10": "5JR53cn7URX8bj777BRtvP77z7aouZDUQDN1BbeeuZ3WiCbr7MR4AJiqPfhARLKrtYkTCsKgcaNuQBSC4XmMbqLd",
  "key11": "4mvZK6bppPLGPUeuD6RvjWBinRB8eWPPaNPQfz3pPL7VxXhS8aZN37Zf8wu8MPzzttdQsj643DMAJx9GngBUF2wT",
  "key12": "24t7vGkkujJM7kXU7x4QuQhJEiYFXZJKsxozzumohpDdQ6rHMwGvBUYAPzb5zXC9aAkq5aFJYR2hCCQDxEybuE8d",
  "key13": "4BVtsjYRkG2YU8PVZ67qFxa9j71q7stZCzhHZtD4ivvCRBxWsuoj64Bx9KpZZfdiTsWsg6ggLHTRtea9KbodMa4x",
  "key14": "3x4LefsvjWjxGiscvv9pyLD4KfNQbrx4qesy8AQHhhgXhtzzuHTBkNqRXQX7kqbdXvpFCBsdhJrie4JbiDCZj35H",
  "key15": "4QQHF7xBcFfdZkzGYRhs8DtUWMtf1Qag3CV5gEmdxgisDFREKR7E8gzmZqCtRrtqcDG1UsSf2H3vtMW6Y7SKNUqP",
  "key16": "g1sCdY6S9EFS9YqR4aTnR96Eh6Ybhie2AJU7UwGNGE2zQ75u7kzZ5TbJfMgApjGaSP4wea8heAxiBDGDqa8HpRw",
  "key17": "3ihFY4DvicpZLwWwJBpxVTPXZDHeMMdQDc7GNPVQFCeNe9DsC9ZYFgjNfYiCeVXNgfoYxaeCKx71qzoRi4g7zv2X",
  "key18": "GsGqbYBnq6x2XjRhZYsgr66wFBPmkqAm6y1Nn1TB7hzVGrcpNWLeLLAbVRStKrts5c1i81WJaLR9ghUqRCR9Lfg",
  "key19": "4CzqCZr1QjJARxymMq1Kyn2RUsXFTmpxAjfGuCU4CmYqA2NoqkZ4BvkjTN9oJgHC3tW8N1YsdpPiMcD3guGRMUBa",
  "key20": "RztoqUrGotShDqHsk1ef1TmHNnF8okB4pwBwUYdc76SZQk4bGA2ukHQJzr58kEvdFLgNs3cbudW5geskrfKKE8u",
  "key21": "66X6kyip4TC2qqL1KFwfVk8K6XhJgZe2Zi7KFzMZm6MJSjL1LuS3nycLzKpdH9Ppny7xzL1zYeFXNPcrVm5KBKwP",
  "key22": "5qHsJHMy82PLggJ83HV9P8ttrM9x7Ts4fWSi4mGqcs86U825kz85fdgSTHnGZufwWqRXCPK42Kp4iBPcYUoVUHnz",
  "key23": "4GUH4Dw82hjnKXaXWkR64VuhxBtYAgSvENQezprMUUnfEV2mt9SpUwKsVbc2FCsttXZFbg4RUn1N9GZajNry8FxV",
  "key24": "EWJ5BAWw5gAgfw2qcuzcz8YZBVC8Kf7Gtj9DyGw82qACkGmvsVdDA7s75Fe5b9rUsnpuTXZ18Pb4s9qNytC4B3J",
  "key25": "2o8ay2s5CcvJzQgcAnN9V8je9bgGLcteNspmYK3QmZ5jpbiFPnpAcVa3tC4FgbnJYq94QorUHze5jAJg6yiznC8U",
  "key26": "5HJ7wLZa7ibaUqvBwC3xK6vmmKDxnGvABf9TPng69kcM1khzXQ3GdMCjh3GYeuSVPHGVD6xzR3Z5qQ1BeXZDNhuZ",
  "key27": "i1gQdSJvFcqoXYEaGHrxBRtYE3QaT8Py1ck9hqdicJrAQ1VoGXajfJjDp7DAT7VDj8RZjF2oPn7bBEQYZey6ZeN",
  "key28": "q7Go32XxEo2hsoP6AgHxCu2oH9WBawusQy12nkLXDJMLK3WHokkiSU9xAWxD19jcoJZZfyRsXRDivcNdFJqTcAV",
  "key29": "3vS28PCgvsnGZUQPFEaLYgKdGkLo8yi2zD91Cxu6hdCLTbkcvAkrwiZJk8Gax2RjsjZV3CSbtx5SGcCsfX8P1cm6",
  "key30": "4DHTjnqch7edoDzsT1PRoEXmEU3rQ8htRTGgEYCpVuGzAdDcDmo8xwdxUNnh7KAevZeqe5ztS4p2deEdPuachicL",
  "key31": "5wdfvmYqCbB1Yyc8ZN52ambKhB3heD1Cor6LLUm4wQyinL2x6vFBLPwzBNYU767hGWpfgvBP9dmE1xoyNvee6rxr",
  "key32": "LwACBMJGKSp2SscNq6E8KW7NzJUGAoX9dxmA3Yh9ZeTRuse2HuQPEjFgMmF1wgetb9NucLp2kbJuZss3GVwoTKb",
  "key33": "31XgS7dUBSUn84eYDCKWvHQrMNBdZetdhv2UTqQX2BH8bDGuFKzn5ZuEWnj6KsKYwB1vrAvJDABCXqd9rUMrnYXA",
  "key34": "3dx8QCgSXCHuaaCswYEr7vU1Efq8jauLcrgNRfHzdf4LoBdPW1PmY1mTujvbqPF7xXMntVyt8VPVrgqrPUpRAUkJ"
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
