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
    "64f36ok26capLqSw6fe8EnzTgenyUtDLyTbMnTw4bVy4JRAHJ4HQyf22GgDKaFasYMNDgBv72dzRBSGgLNqtF9aT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fDv3ZM1UvnuzCJj6bMrkm4QhPnUUikKZszWu6B2WfEEEV7eGks3TZgq2cGoUGSESJzSQV9g52uAKHKnvBNMhmPF",
  "key1": "5JFdr6R2kUcSrqB3tDR3oJHXEhKhw3bHJcDeyhngci2b4PxzSKm8SC5t2peuonRmJD16dvqtcxaJ1CWESBTizihr",
  "key2": "3TEZkNL9HXAL4evAoy6wWrU52xGPSBWXEMLbabwpL6okSJryQ8w8RfDuu2DBAF9EvCg9KHx4tGxxXbztkhz4LAVP",
  "key3": "2iGz1NmiH39AX4zmiYMBkC6ivFHyo5aqNSSYzZuvjouSTE5bS7fmH3ZTYrGqjWKquQWCDads8MHp8TrvLju7kGvE",
  "key4": "594udhyLEKLENVMQKB3w4dU5H9XFND82KXgAAA3UtyFCTyxiemeWjZRaAhWuR35V2Kn1NBfh8vHPr5xioNS6JFE1",
  "key5": "THi8bVQvDuxhX6PCJKUsxxnKWs8EYZW41c4vXVH8y486RqpM8VdthSRC7qMn1qbdze6skTaYq9MPYWmKoKVApJh",
  "key6": "2wrcoeKLuZ869zJqVmSG61ozJh7V4ARNy6YTHoNCKM82zJob213befpe13yGTZWhKAPo3yHSJzCGHkP5nzRwKgjF",
  "key7": "BbUH34exvQqTSDBmvM299itEfdQmVX3E52QKkSwf7ViGykYPPdHxz6SD9ieDYPZzHraVLL7rw4RV54cur4y5Zy5",
  "key8": "aQMJAu7fWjuj9u1Uc5vupMQckXAAmK7h1HbuxZQVAmSdbS5D8u7W8V9ciUehcW4P3p19qtSYn3wPJnUYkteCyVr",
  "key9": "41pbfawvgRdtZFuHr3TpQEp8gZc5RcX5fGsetxs7kFeHBkZUedS84f3fHf7mFsPd7PWWTVNvMt1tDGxcrSti9W4L",
  "key10": "26jBpT2fvYxkSJYki7ut9iFthA33BdHMUthXwmWgZi9Cz6RhGf4edKqa41SecDeS2dFkbb4W1PQjB2tpuNRNpF66",
  "key11": "4hG2URvbZt876YB3YUxCCxCShD6XtEMXeZnMDYv29D2Bd2kY5fMqTkSSJxga9AuSpjNkRhdgYMW7nRzCfUqh97y1",
  "key12": "NSPRLyNumPKkpPKZXWtECHpNLjpgReuN5dUQ9dW4KZdXu7iSGA1K41fJZAykVxFGfW5MYA7dUmiJ35S1ifdJ3Gx",
  "key13": "e43ZqAEFgeTCuM7TdjFFsWaze3hBkCy87cwSzB39qXzBz3kEr2uUkoq5bfuXXEYmseytbLwz3i5JuXKvbu79xNy",
  "key14": "3opEgS2BVC1e4a3tsg3dAa5Kiz2CbPJWq7EZg1bC3V7edRwATf5iHgkNx24cgv7tLurqMHoRLDcGu3Kuqo7nfdBq",
  "key15": "4wsw9yxKmGmeQZinXjm9xkyBMCgsvi9NJEdpDBGNdEB1Fo68JcjXm8oyscGiD19nuz32WsRSBrh1Kuq1KqctyErM",
  "key16": "4KCK8E5Uczm8gwF94PfJnknS5UhCaieXoXods7qmnc5z7kpxebS6BpAnGgkrotARstYX92TSZzrjbDYLnkweJ6fa",
  "key17": "3FQiEdb3q6ret5HoZcUEiS4E75GAeEBTV8eaZa6dkZywgF5btuY3MTaHHwa9rvZSbACjJHg5A5o6PVPSBDeVTdvH",
  "key18": "4CHcKjpLzHAkz6cXuyeXGhVHGNseD3kULayySNo9t365Y21tArJB9beNoruHvdhpF9w8t7JxHwk1YUfQfCufx85c",
  "key19": "hWsdeN6WLZ8uePwCzoQBtAoE2QxXuaja7X95pLvjYSPAxA8XgWKgqVo7aRvUGSSTzPLumUgNJzN5uFFj8Jzwnf4",
  "key20": "5KmkJN5NyzwY3F7hvqLFj2PctbFgqQHV7YvUWXgPKXBdhd63cJYr8qyMydJFX9c1LmFGdfHQUVsrXQMeL6sKtMnv",
  "key21": "512QUuJJhNDK1vWN8Sr5BRcxv2uFVhuAPcRaPurUW7RUsvCmLn2azpxJTFWt8PqePauXtQyB4QDqHJCpgXSkwray",
  "key22": "5dhMmGan75CwHGjuvr59rQYyMGUFDVY1oS5h2QidB611XhLcAnv6YY859Hxf1UipQTZoEek96yucfUkhRnJiZt6m",
  "key23": "2XWspeR2MA4UPwx9VygE7KRzmrAVx53Pq39TmWjAKy2b3aN9RS57oHCygsHmCHrJFsbjnWSupC31bdQM8XfqPbyq",
  "key24": "3SoNdeCGFZ4z1z7r68DHhLdkpK3RQRmuTURNxwE676BhMwcAMxqBuGsBDUc5MsnNTN2DYYxaWnTfWCS3vAwGo2Fo",
  "key25": "3KvNKsQSc4cWHBpZpkA8wTCSyymC4rb5iRkyX6Xq6bwKjCj1BgvHuXw3xAbsuCZkms3sQSd5FqWFiusTsSie35Br",
  "key26": "3zLyJPxNvmbJoWCQ6ZAg8sALzoCscjtL8hAYQ8vZy1aLgLjcUWTKEvwnLH7H5RRRieLhVriKPYjbpCnsBiPDpiYh",
  "key27": "4c3TtSQ46HMtot3qF5R3N24MsfM58TxHfEVyHRvmgDVc1UJ9htCkBuFRspDVcsPdgBCPBv7Q2JGshxztunz4Wu84",
  "key28": "2Vnw8CvKiXgup265D3wDQHoFfEe2Uma3bdTUBrjBaQUo8FRuSj5MyBSJN9q6A6rhbjwgJge4rTDhou6tQB9odSz4",
  "key29": "2rXZ7FphVja511zawUXj66Z9WwpeSXU6BoYzmjpSJM27KD6sBBG9iEP6dJUQ5yTeMdQmve5NfPgWHVGej4M6qUYv",
  "key30": "iFS5J66AWtiWUCUfxooA8yHxZSNmbjysG7JTothKGxDDQebPXHBTDgiutTQm7esPjc9fq2nbTTCG8ChpWZQv6Ri",
  "key31": "4ohte5B5CvNMiHZxrHjevf6rE2T9rmVtjFeif2ddJBMs34hXAboCa72odi937P4eeHBnMUWtwugLWL9nJZeQ6Ttt",
  "key32": "4PbFSyWRisV9vnv9L9tEok5GqCQDF5azJhthhXQbxSYEdeFqeHDX5Do7ekfdpcArmmQWRKLm8SMEsJHKoTd2opNu",
  "key33": "26mXcNARhgu8DAM3PE5FLyKYDnsfATuaEFU6TGFPsGbAnYCUUudgq5tNYmLEZAUYskP9Zihyw9PCRWVMPN6qgZ7t",
  "key34": "5wDEX4X2ndLnZB1akc5soHadScaymywa9u7xgPLpnd3MYZv7pKMxh3YWi9Q5q3km7psbgdwa2DrPv1814qEyEYE1",
  "key35": "4ybQR3ZRHriD5oer1EGULk2yZJcgtFGuKdGrRNseNh49y7kdgyJzmS7adaya9YGtTn4avSVtZFijKZE9F87MGPB",
  "key36": "2AAD7G9knck7R4s6mTHyMTRsv9Ma3knwQKMMQEVMSuo7qoVUH7LcRGZajGGsFSNVheRTDXAJgWoWYpcYo4LNuEy5",
  "key37": "WTokH4MwvTXRbApysvUysRcUYn3p1R5HsYk6zc2GENVWofAMLfwakTpw31F3VMrnN9gtDEoqJwzQNKaJqRnZaso",
  "key38": "5vQSjRqPy84Qi1dJMBrszbDMZXWCHzQW8kVdXHc9WG1Jj7mcZPhafYG7tfaYW589vE1uQC2sgMQEv6276XevsHYo",
  "key39": "3sCk6y8TRE66zc9ZgxriWAxjvKRemNSi9BJp4aEKyZEA4rhWoHnmwn5wTvydbXRS1VJiDqPXcRm7rT9FAWj6miZM"
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
