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
    "kw97HQZvg1whJeF7GfpUCMVq1aZuRkYZRFG73ypdCYwn6XjidjGkYUH9xGZPQ14xkgAi7Ds21fGNGthkck2ek9T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XEV6JjoXQsM53avLNYoiHmcKCErDqwSACmYWks3PMJyVdQtvp5jGE6ymanbw8W1CF5y1yaPSwPvjegocVkhXsbj",
  "key1": "5eRfqBZXHtvwYey54f6dmY3m2HAzRogSt5NzhoLBtbzoaecv3FvmjJJHJnL88DPdmHKXdwh8x5WU9gQDBSQheXpN",
  "key2": "26w968yDxenc3UHqeYEkN1UfXTK5FQTdxmadz9eHk6BP18Lo8gnBzT2yFk1mbE7c6LDGiskLHiJDBLqtZaezqmBX",
  "key3": "2QidUJA7X5AQQh78s7RbcCXUyEBpcJazJNJyc3MV6q8UHkSGHU2udsumhUmhJwRwhFgz8Gbkpiho3RhYHqY3Xqt9",
  "key4": "53C8v5pUZwebzanitBtnFyUkSxDXvfnt1xgY23m2hQtZEYGAhKLdYNBZEmCG4xhBLfz1nVeBAoBCUxDkjXCiMM4Q",
  "key5": "527g7pM2DXGMHnVZog9B4ee1zUVPBxv2FAwpm3QNcfLEffn9qfexkdhqeuT2AfoGMpShP4pESgCDVffpWNn2PRpo",
  "key6": "2FjZTon4ihX8tsHNSuAa1eWX5RMqUvQF8CV3qrBSZV1DzwRSzNA48HprPNB4rJDDMSacPos8TU68zokWzeCkn4p9",
  "key7": "5qasQSLbCLbMdqEKeZ6BaJccWfRTXuGhZHiReEyiTrhKxntXUfFxr8aBZzBJKNygnKGXNryFZcji7F9pFPWb3HCp",
  "key8": "57jGrrc8TjX7j2VsGi2Sw6aaNe6uAacjEgpKR22rLYdet865qTonNF1sg9q7FiA31EXNFuAU1qNiMzu4YuSqsvGQ",
  "key9": "5b3xSr3DHbepMmuNkYWEMvRD9ihxzYrJnVmP3kpG9iBJge35DbLKfA5c8qfnRtjTr3QXJKMeYFBpEsuUKSXypaKM",
  "key10": "GqgxK7CL2fRuX86mj7k1wVjM15cbY24scAxeXgDJ6e9UtbAtEnZKyxT7QBYJb9bcChq3t1QafoxdgG748mrSKGK",
  "key11": "4T44HfeSmCgRQGs5CDkB34hapZ7oGmsnT81Vg2g8T5oor1pPUdnTJ4DJu5H3H3W7xY6B97wMrYkyPb2sdZmrme5N",
  "key12": "5zv33tuQwEEhVMHc3crUnMy4RvCZ9knT5DReEyR7LEf5dygRErqJKd3V35s3pfgCPZC3MsAweZ16xkmndVpLfRm",
  "key13": "2GHw9d2ga3T3BHxsSRgzcM66JSaKh2F5PVEFie8w7nv7YqCpRBG1qUc8VuwSjKVcV8Y4Ab8pk2ZBaWDrG2GDcg6c",
  "key14": "4vjoSy5g9JkKMMCpfsjLRZPxR4P6h5chR2QrKwU49ER17DJQgLkUHrQ2u651jA2aEd7b9dzgvdsn69N8xZQY3FaD",
  "key15": "5afX4htgZd3EZSXRci6KvnDcgomU3maiRsT8URDU2Et6dK7uTe37nhDggkuSX1v8dibbVYukr339maWp791bBUnL",
  "key16": "4Kv4VkrqTggnKuACRGWjf8UcM2dtzUXYKyGPfj9GKjuPRej75h7x9wn3YWx5eyHfoFaadzhy19jQ23pErhh5W7ZK",
  "key17": "3SraDdWoKn7XHfxZxj81NQey3HLBLgXyFVNYSPioJvXEHWg5vHrNhEZiyzgJNuVVeXB8p8kCSX2bTtze9EztsNWt",
  "key18": "Mu4EAVXNvCVKAWK7Gh1JcnNpNk24TFWWFMWAvkyzoBH8X9HnTezsKb6HzFV8qXeoqWkPZ5GfAibJrdyAeHnrbUP",
  "key19": "3gaEhNSR6geKQy8GN5JZxCJzdBda3j6aaSb7CvfDkWqLAFiTtyhvZ1ktxLwmx6iBCR1stGLNdSqdhxE6b2AxXYP7",
  "key20": "4VWKzfvkKmRwvq9beTHApLtnvDHipjrt3xSm55qkq6pZzp451jwHgY1yDq5sUeBnJbmtSUTTEszzyLugVBGGRDCt",
  "key21": "2gtVU3e7fUSQRdnifZHhDZzZeHvJse1ULW1Bn9socwc3G8qhkHXwpm9pbBBWKo4byJdadaUpfAj2BZAprwNmyJJr",
  "key22": "ELe6zNdzRuUs1VRHR9zpF1GZZUaC2YFf93yyzbLxCS2RFxb6VFWoVxMBahUMTeo73B2c5CGcJM1BA1KZJPpJKBj",
  "key23": "4gJM7FLvrmhiTYYL3gYvXnvNEgonJMyDivPhnx3TrbtuQ1KZ5YbQ1sMesNLhFba8ise1F22TeKk3H8xZn2YQPWXF",
  "key24": "DtaoBqipyNFt6Kpv8oAopvnakU5gQNgRmuTDw3pySSJ5DADEMddg8ugi8LuRSmL3UYPXe96qVSgdqwHJB8KM2V4",
  "key25": "2hGUyJS3wmgrbusMM1h8ERsmJ5vdyYu2LgNjYE6qy6yu5f4fz5VBAQ5gLywzo95FKbVePe4S1FVM4efBbvwAeNBA",
  "key26": "4CtWTgTeMoEPCm5KpCL7adzXywR9YY6Y3jTNsTf5X1ZWbiSuEAuRDAu7S54ooYp6B7VnQU3qq4eRcA6WiJpdKxds",
  "key27": "cqju5qabceVLADZqwxekJFJsrCEwzqYWUs87LYuUgjs8XvQxVYqiJaZw7ANke6Ac1f7dM86LoeUt8NBpCQ153zf",
  "key28": "8uV39SsQ6WmrakHBzSrzLEmzsZr4eUP9Nfba3hXGvQy3XyKYKWz9BDKrBjzQp9VbyMrFnxjJsQ2oQraRM9QXaCn",
  "key29": "2Xdj9BTem5okJWgcXZmyPJs2hgDiwgdxANbvVgc2wdEpuVKNqFaG3YHVLpbqLYP6XRNLYCjzEdD1QAL1jja5enYL",
  "key30": "5pt7yMvBCx5Kk5xfhzmn591RdUMSZakmBvYAxH3ob9tT5hRpyAaR9ALkFiFiHmVH5rVyAL8Egu3ZitMR2mdpm7RT",
  "key31": "4UJJjBKtdqriAAnDArJn4Jb7xWBDQWnLqUsCLjWkKspcvZdJvRMaBqFU4WPnXL1zSoDX7Hei6tWyjDqwsdSmMXrd",
  "key32": "47jLznGp216ktrb7pMhm3XPimyUr5XmfTJ31xNNTNbBQYfvhNRtVhE73T51zQCFsF98UAuakn3rsiaULEcZ4JhrP",
  "key33": "3X9kqYbBC4UoeUKDYvwvbSiZJX1S4s2sxzW7fN7KDUWto5tQB1H5ckDyGTg8yTwGfm3xLeLqLp7YkHdtxCE5YsjU",
  "key34": "5GrSLuCU2hF1QYW4sMj5aJjR1XXPS4HFAz5fvNvhpVEYvAPtddxY3Fw12ohf636oQjTfkrdgx4czEyTeqcZ6jJMC",
  "key35": "51aPXn4BQrwPNkz3rJb6jGYUHT945erCkGL4zuxHfbs7zsdTJwYHDvG8jMMMzKePQCz6BjakmUQ2qTD4b2YsWw1y",
  "key36": "g6hvkgfMz85Vb3VqpR7vRSCY6dFUHHJnJcuqHzffpKzGb1b9cPevQwAV1E3x4rCwDvEpmvPHb1PzwoBSdmVLKxK",
  "key37": "bZ1CaYvUjiFFtwxnPs8gCbgBpAWDMJ4ihPrZcDgctziXZo6aq3BCH7sWbfi18Pi8WL9Z41HuSN2DWNCt2nBKnj2",
  "key38": "3jc4Lt2CPHaAf3UpFzueWj9PMLUeBL3if4Eyf4ZgbZTbQmF63naM9LcfsD5Nt9eqGub5wpw7QeuTWuf6hgpotcsW",
  "key39": "5QHURt7aLHCXdNXSvsQ9U46NwNRABQi8gLHu1QGtG1bQmKSNAwzZsp5SEni1ho1ewuBbAnziRbmLCFg6YLh84siR",
  "key40": "hiWHd3fVnvE7NZMMNpBL3LusxXkBbopFbj6wuHqEY2sgGP28esokMwujpZobi1VcUMAnkztnMtpsjyU7PgrugUp"
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
