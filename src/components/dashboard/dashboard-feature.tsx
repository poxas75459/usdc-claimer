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
    "poRHeUUBqmUqFbFfeTw7CUcrR4NzFfN9YxSaLXKYisELQ6ypVQ5otGufeLcHt3e4QftcuMvTdw2YPU4xHuJuvQd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26CYtyvJ1BZsSxmpbfcigLYQmz4sCqbGCWq2RAvCi4qYMUmeEUAsstJJ221VcUVBgDnT4eqMRCv7xWHVnZiXJaSg",
  "key1": "4R9Wh5ufq9WL4GB5iPKbfC2p9ydbXpc7Ah3LmzWZ3F3cgLh4uB98wuFCeEoyCZZ7cnKFnELCpQKsF5ChHV1YhffJ",
  "key2": "5j6eVMHp9hJuBAzCqY2T5R2T7BbKkbiTPNdDN6iedk1MZ8h2iqp8Z46FrrRRRQJDeuS8MbPxYEtptyMAhcHDpB6k",
  "key3": "3AVQ3NJcd5YL9f3CgLtfstvV2H6nqDqPTw1HUMFrn9LYysdbmTYxevUsoz3Vf7aEqUsmQAT62RLgVmAytQvvVcxM",
  "key4": "5tKgQ7G5c75TaV3ao8xCA3GnpezSK3HbNoMKvps45AhUaD47ufUNmJfxuCxSF699JdF9vuV9o7kJfv6YcwUeJW8q",
  "key5": "2Zqo93QmxUH1QEGKWraNMqBhwrvxaEFACRidw5zmM1GcPwihTHr3GGNfvzJVgRyXKAfgXfE2CeCB1uuAU5dcMzSR",
  "key6": "438ubcYDLRR3CXsRvrNpSk8S6UkG94itgWAptYry8sxqbeBKbyZS4TqExkK7AcVr8MHm9aesUWxmmVFCvnfALeAi",
  "key7": "26EEAUN78jNwUXZwrrNtNwSjnxCtH7JBFPUj4HaFMjFnaM6EDGmUFrWBgJ33Qi8KxSdDGHt5zkqrivzAMQnmpxgM",
  "key8": "5jCakTkD5qJ7pShM4pAbr3RefFA3cJ2sS3d1F1CwouNtJF2fLbBrnXmZh7Mp9njVvNJqpmQpi573k3nu28xgdsDi",
  "key9": "kNxBwfdDpXTL8XvmqYvhXNrDiAdb9X8i6MkkA7iQKAD812ngWfyafg3raiZsDc8fKg9b17Ygo7Z5bQ6381AgbN3",
  "key10": "3GVv79oH1oDQctpmhTWmwCVDY1XWvLVrsSU8eX2y1PZvqM4TMjygDHxwqERGW1aNdA87TQ5jBn4juw6rERsa89PD",
  "key11": "LHGJHCibPrrCZ34HbW5jsoCCmDjUa6VXHb2Qj8FKTcGnKAyBtETk8hE9ifq6d5FBtVbjtrhMxuYauD7TQG22KPe",
  "key12": "3rxKbhdSdfCT7r79c6KqDEA9RQdZGRzGat9XaRRetL6kusXDz9skYwNqB59Cxs6Kw9BVyCgDBHCdjVT2KrDsZLA6",
  "key13": "5yVW5JSd7zzi3HffvVRSJL1sWFd4yuKSQo9Ge1eWYhM9xaAKadcz8VhBgjMWC7CGz8zPpmTSeHKGVoQo58FhXayr",
  "key14": "3riCqHM4zNJxHrW8ut5nis42T7GaGDtQMLLwNNezDrjsBjaPugEZqo1MFcVFBVbZ1eMFN2WMinhEjDj1rMLL28sQ",
  "key15": "3oSpFBYnkHu7NL8SeAYGEBipjvbjNZ6tfpQze3y14G91oGPMYvFxPbgiqqJGLvSRqDPTvWpmKKK9X5bn7JxDRUih",
  "key16": "2rJMYJWg5KJc67e2LPaudFc1pgZZNyCQbwW9QFWvsDYWHcVAQti2wJg8FWDxZGfDedzxvt9u4L24veDo4uaTSQ1C",
  "key17": "5BCAEhLxtcu6r8j7rtLuvf7yc6m1z2TgdYD3QQsoXEftP2ysJyboAUW5FTHSqGhPuVSYn4x9eT6SCsYjqJSo9Kdo",
  "key18": "5CKwyWsReh1qXwhjSWsfqgo497fpnFPGtKEKL1KvTtRNVm7zVK9rwBwuY7HTCpsFoiJQjA8browkoXZncNfvxg7K",
  "key19": "XUuDi6MudHhbCGSekiiACcFLbbLCB8AAg9ozG8T1idH7iFHL5qtPakCjG1B2YsviKWz5aQSFKKo7PkPXH2DTwZa",
  "key20": "277aKMEVJ7Bp1tPgxVGoqqSLgJ8P4ZQHrfaRd3kqny7pcTRacUL6HEypJ6wmztqakVM6of4jfqyyAn5abL5kDVrW",
  "key21": "3E3F6fJ23uzwENEcKZxqgt5ooSqcBBvEPRgNumjJFWKVMLBxihLH4UJ3tMD2TAewqX3e1JG9LMKrBLQD4jvBMSUM",
  "key22": "SVF2XvcWCfeBTBy2wKjCDLWX3Jtmzhqiz3EJK5VNzpvNKcJpdqb6Jtk8UsMiGyvR734jo7vFazHr98yUPJLoLA5",
  "key23": "5QyZhHniU2Pu8USteZFFbamwMyKGJSnPs1QZBFBn9JmbKTWMQXErbEoLsAnD6fw9orxiTH5eBYMoFvkNMb8ogkCJ",
  "key24": "5iqbH2UjPSi2NXxcazTkT8ubYzK3hPFjGbaXxReAGXormiHmzFTveRSnN98rs2jr7NeAbz9T86gsFuzCc14njaGH",
  "key25": "5e3EBDzGQtXdcSECYMUtgkCAAeUhHx69CNcXkjt4He7PWyhmWQzcFLYhkKbRhFjaaUGszn2CqTi6EQ7nUB9bVrZS",
  "key26": "3g8QXRs2UxvubgPZ3d8r3qdVpuAByss9SUfiypU7Sn3mmKhjUMc5q64AENKrSJ6ARnMDrXsK9m12bcDtSQkNP1bT"
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
