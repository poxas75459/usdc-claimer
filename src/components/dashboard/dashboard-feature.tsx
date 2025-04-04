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
    "32cFoZ6xFAFKk89KY2CaKQpjDbuFbsaKvKDpUJUNYNzgSdQJGLZkEdTZAiMqsDXEzFGQMAainRhDYw39fG9fSNzk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Adf6qpAtauAWqdpPhNv4cCA8m1dZtuLY5CiarB9qh8zK3ghDY636WPgxG6vkEHcsXUSY27REbWQZT9i9eRkv457",
  "key1": "KGXgqw6gdAPaG8xATWqKPxSLAPut3LzP5kVAqpA5SNAzFC7GiwceRGLb9u3UE7L7pX1hKRatSuqPFwsjsriRm8u",
  "key2": "36UirENwpkhLiL5FTcyCuKKgoSXnc3A3chDazn3RKMyp5t8vuZerhbNFLCFtDiiK1HfkCX8nTKCnmjCJjQw5aKnW",
  "key3": "2fxp8zfakB9va5A8Yn2SR7Com6gdnpvizPGskAtsq6gHqL8YMXcfwKPMfVEJ545eqq4sbRmjv3RwCyLLAgmn6x6P",
  "key4": "5ATYG7JdM5FktSh4vMyJ2uuhgFSUc6TaqPfBpBHkgrTyQUtQjw2g7pzkHudgiRKpirVvuDx2fvd3u5cWtJCwN9bN",
  "key5": "2zWYzpx1NYzsT5UUAdU7Agschwh2vv4na87jfnKhm9QN8p1BUCacbFmYiRQGYghM4toTGiDQ6yLCAjhVecxuvr7F",
  "key6": "37q7Nz9FZ5SxpiSBC8g6odnJEKXfB7TN8FANWp8nCRahaubGXvnxv5yCkgmmNxTVhYgA2rVZkoGmmqfMQBpmqjvf",
  "key7": "4fBhw7ikKmqBhA4nmXf4nMm9L9FFHJFFYYmxKs4TT37MWJgcSUUHfQjMTwmcJpiKPpffvSMVLkZdhnU2r9iFL1kr",
  "key8": "2r1JzXUf3eMJQtoWDZX3Q1J1cAgoHgyaMfYGEarjSpopSJCpca5rvXbtaa49byVm2cp1azv1JVpusCKAmSmrnge2",
  "key9": "5qrfuAKmbaiTg5p8ENR2AK3KHoL8qEu5d1TuiRJkGqy7Myo3KUQLk8cCBGgZ2EJt28JrnEsHWjzaudBbUTmDuUNy",
  "key10": "59yPwR5Q4xGgBiGy5EQVTizRV9CEhdixAe1bJU5YGdYgeiEph3KnzKCNu9bhfoHfCjQ85YwD7cCiYMr92dCj1gos",
  "key11": "56sv57QKd9g2S4p3wdsV9WgvAxyRfEELKCc3VdL6W9Wu83Dq2VavwdZfiLnjzGDf2uWYMQHwXUajUktFrQTgJUb5",
  "key12": "yJdnwUejuRzTNNLCYEScAs4Srn3dKrd4fnCQMZHSCyXmTUuPKzBPFN2QuzDQcQFapdSfBCZdHNhKYQ2PzYwMqtA",
  "key13": "33qMQZw66UoezCTysUnP3gKNyJPfX8k3mL35WeKy5SYnjBVZjo5JfGJa1mJzycoBkGCfzR1CHyvreymaFrN6RcG",
  "key14": "4JBJxGPQgH6Z4aAktieS4HffuTuN1U1czjoQoZ4xF6SgKupBEpRghWfgujweMKVSmdnuHVYdkCeQBzoEpGEXQDtJ",
  "key15": "5DBmkMxz92ecbZZtTNKf1eQpVRXe4T4vM5BkrrAasayn4vr69VqBK8Gr5Fkt7V6wycC8B5ByDyyzS1D7Ub2XwaxZ",
  "key16": "5SsqeE6YoJA5sETdQ7PBVk9Cb8Pc2j7tmQ4h2SDr73HPUNN2K1sY4da7bpY8csXwa9ZYBaMJDQVRYERsXsvsDTPH",
  "key17": "617cbWyYzmBoUKS6XBP3xghpCfJsqFgsWqGgYM9aKjfpHXdwjD2ftkm1NGUGNc3ekf3SSbJXTgUXyaQ7Uex2Atk6",
  "key18": "2iC4PyyvNFVeVDZ732gCeuhFY6Yw1B1Tb3GpzPsaqyt6JM6eCTwRyhtRPfgF7eg9J6rXYnvVbe7WUzjee2Y2KgJq",
  "key19": "61XrkeHUkWYDEGrE5pPsuKJTnWF1Fe39vjCjYDRqkNDeoeLjbpN47GDSo3snUb2ai455n33QEs19CLmnKwAyhoAQ",
  "key20": "WwkiJgrCcdw9CM4ZeF1Xd3JVobHkjteSyrb3KHp7VfcEW1F288MiJ5it4oWBGQPVjfeXz8ysKn9gqaQ9GHErV5k",
  "key21": "3rbCsZMFrTsot937zAbmhWkCVGurQ5nopGsJUmssmjVtCwAq4zBgvvP6rGkbBcxKBz3KQL6JXfkpXAykQMUoerd3",
  "key22": "36FyJ5xrqi151nL9CBRHy9PtLW8b1yyy2ctvpyUatPSEWnxPFcDcKjbfnR6ngYKEPLVzDHuVmjyT1dodvNyZK4v9",
  "key23": "62ahvdoXemrghYhqzJfKajcPiygviKT7o5wHNnRyV1obP3oUaX47S2AjdU8LEg6R7rB5ZgLEoFFsjgmntwGrr1WK",
  "key24": "5XoHShwBr29hXbwX18W47GbdqsGFtzZjzvWTv6f3k3m4pqky56u4gzsqtfJZKB63r5TPXPVYT9d1Kc1DWtTNVrBe",
  "key25": "5nPwEwT4TfKavRwxVpzXEY3LBn7GmvqYehDnGCLMAFj9hLpfxXpwrSJJAbhG5pDnNN9vQjvFVGUYBjszbCBLVqXd",
  "key26": "SxTwKviQe5DWg2FD3b3SHFmXSXtN794HLebqhnteb8JaEYLxuha1JDRorjKLNT8M5VDJ95x9gUjMBg6TkmU3AbY",
  "key27": "3hfsrveBxL4Yg13nznioxQgxNngtH2dESLAfXzKwVkQ8QjnMoJy3uMFcA2phyVisXVjp8ighxbf5PGeY6oCEouvy",
  "key28": "WTnv9QtjJ3D2fzycEHoAwyriokA6yqEaV7dV1FUSaqhA1kMeqz5wHAmWPxPS9a4g8uMSG3VHXWCZfMSnu6bPjjC",
  "key29": "2EyGKZvMAimDYo7azozhzQjJY9AQUy5p5AZmWJYvbU8iZtCvhMYT3XZaam9JUGoqZJXQJSRhB1Xoa48zdb4P54jj"
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
