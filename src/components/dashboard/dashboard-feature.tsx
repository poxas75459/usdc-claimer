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
    "4647A6pjM8QSbf4tvyybyNDQctrarcdMedgSsBMeEh6SwrzzbzeuWcBHX1tUPV1L81cumh4T9ZxEjJHwa9QpTy2G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JkmBKJDoJk2VjdsUHYvmb3piRHzMkdvvpLtKzmpoETAKxMDnWV4ZDnHNWFhna16KRcbKksrBcBCFCinT3r94ygr",
  "key1": "4pegs14g98M5buJ2XataxzDQsQ1DmNY6FMpsnnCSwcp9Yi31AAqYkg32xC1B262J4JbFzEAJVNSXGStAYbWEudm1",
  "key2": "4C23TWUxyfqYbKHCZnP88tPyavh9hfdxcmXMWAFxohir7JXvCncX7UvbPb5EZxXUvMD6rEysBaYXD93QpdkB6DRm",
  "key3": "21JvEc1UB3RQBPam3qSJgFjm1pWY21LC2PUzTZAtoKemRnPhgqQvsko5YZiAhnzS7yEv5ztyxp3cxkAnvu8GVqHD",
  "key4": "5mv4hbCCkk6M77JoADAFQt3TtXeQ4dBEq7ihJZQZP1SU9RBq3nKgDCFffDDceJ8zvbhV9GJHyHUYXzPaNJXpzd96",
  "key5": "2CydQDwpakBdQX1hW4bgbLbubwhAyDTG6trU1aoykE1VeSQWHpLjSRNVP4mnZ2krqbaAm5qDgamzncGfHQRL1QWp",
  "key6": "cQjQCZriPXJoEbam7TzGtFQaS8hh27ZTzemfRiu9i5NdfBMJM48GLuRB1hXhzfjDQfkmJGuhE5TRRso3BBDGpmW",
  "key7": "jd2LQGe1bkufF4RVF2xkxp7y24mhjRzX3fJtHPBL48jEQHyvvKFohVNcKwErkHek66jHYtui68r9K7VPT4qaEAk",
  "key8": "diiBcXZP7AHVBcwxekFy5PTYx8j861S2RrNUL6dkawUvKp1V2R9xb3tVqgFQSN9MeR6bAbYS8L6jXmL2ETWNmqB",
  "key9": "3fNcbtyshTnWymKN9E4oKy4kWC4ZTWh6m4suubQnMMfxV1KodFNk7i1nQr4mY8F9rTcBQSwwRbwGvPPAczRaCrtm",
  "key10": "4R4VkE3FiCmvLXr88FSMu86ezXNnXbeYQsvW226WQg8dVtSUKrGLtf3q4MzkAmwfRj585G3VxkGUczWcKa2f7E8c",
  "key11": "PWYAJ4U6vFk4qvRiAMF3Q6hyzGvNiYkepKHY2LXjjk8Ed9zDDGq2w4bLpNxrsKKpYKSrJAGxADUUd9yJwBgcWev",
  "key12": "YRX9vAVZepzwRpYW4SkgGNCSKabwPa95PQw6cTYAmt26nJSxKermNheQJyrnFkAu5cLy39UAgMv9AP8LkB7wigM",
  "key13": "4dDcN9o1iwNoXJYTK9syx2pQXoS7TnDbq8vnZvjBxTsm8YA222cuYJvyiA42rNhin48QRsG69HVkqUT1cWKPADs5",
  "key14": "5QrTykMHWyE5k4mjcjPwZGRPbtTMzSVPs5AVkJi4mkc4C8EjoJLPCzY2EKxHg7asKvohPnwP1SGVkBa1u1HoVs2t",
  "key15": "RU96KQDNJMDnhj33rpL3YgDmcMwuH6puzPP2oYRxtNt3j6sRUuFWWfmLKzfY7MBmvQHSk5mTTVa8eHqaAbJp7KV",
  "key16": "32kVwpdJ4BWqaVnzJfP8yYc8143RCSFE5rgCrmXYzd95nH6iPBMX2bCzFhBPwqJwiZRGWShyb2VKW72a5MTfoEnv",
  "key17": "4qXy51yoSqF1ES83WaGPBEUb1DU7Z3BHQ2uo1ef3ph3ZvHxa5KuLCe8zBeErT5ZKp3AHiorJJZjxk18GMf7A9YWK",
  "key18": "3QMBQYJV7zDhd1sQnLg8LQTPA38R4quSMWRCHb321BRW5i8FdHddLdVjtExchFjarfihiR5xpA5vS6x9QEmfcX2p",
  "key19": "2AyVqvVXws5TwMGibLMrwNzgXNFFPvR7a6b85DhqiV9GDDLfUM2VpPLijQagjCDRNk6xv56VgBdhW9WWwRuFQgwQ",
  "key20": "4nuPvpo8ap7US6aj5Vdue6Nz4ZthjwzL9sAEMMuMayVffBad9mDmGG1hvXyvjG8zRscnsJFJ34XiL2QdWQpkFS5",
  "key21": "21wh6nj2T7m4bSJmMLg3sMv3qapiZk4bHD88FfmKxaRu3r4spRAQcWpNcPt5gPe3qzVNpZfDaKH6LkPy95E1sKmU",
  "key22": "vGvSf1NY7rdeJBDpEoo4SpgqCB2MUEyZiMhz68mPMeedMuwXcfrdGKnDaXk5X13inrw7noNnPVZ6gW9LXmnjohu",
  "key23": "Db42j7pM8gBd17Y6sHa55CcavKxqaABbbUZ6pSWvgU8t9osN9NLnDxZJ2SfmWiSsxDie6NA4CLzetYHjrbrA8Kh",
  "key24": "5MnDUC2yYh4ivsH9FbU4LkrwmHyv1Ag8q5XGvPUcPFapPV4snZdK6jW5WaPWXQaH5G1ncW8ZRrmuKuYxgRLGvNsq",
  "key25": "5HBfs1Cb9Ma6Aj41K2USBq65yjng83TDiGptnLw3C5T4V1reEidtRuJm9afyZnipFNWxMsyBwv1TAmbJ9oEdLk6L",
  "key26": "5PPiZsHvzRLiYSmrmKjtADaa6XU3x6AZrBXzDU9FzRZKieBBRfLtSsHagGMSBBGMThAWHL8xmfrFq4H5PJkW1eHR",
  "key27": "2wSPjAWFR2V4Q2gqNCY2u3ntQATX8NSDVHfyacggNCKSf2VKmRr9ECenxLvmKzRJJmF4kCf5e1UPJMWwncwsSdcJ",
  "key28": "3nC6vZN7MMVTg2JeBXTqQCRDf6HhSmmd7JaGksLvBfP5DLM5u7fgYd5wnPNUJNMNXxmXD53SH5NmxxEa5bgxHj2n",
  "key29": "2WXrKzUvMdiJh5L5Xs4YfXunZvuaRai3VrqpDKoACnmJLo6jby9SothxNT1VeNwmEsxmq9YCSR4J97LDHvSMxK5Z",
  "key30": "3UoqtzGZ3pyV8Pfsihf842SiUdR8ezWZj9NQgzibRmEjZ4D9GVBaU5vTDKQ1UggEQKpZddzmbyJP5pC849PJgSiJ",
  "key31": "3U1hKfdAEjfqmvidbV2KcXJgGhxtc259TUbUAAgbCx5CCxYdxBYSH9XvxPwta4S8Uhd6152ga3rjLDQBT16Aaydr"
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
