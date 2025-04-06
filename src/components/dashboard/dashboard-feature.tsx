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
    "3kb1o5de9ypAyqnUtMLufYdaZrKrohjKbjWGYymSHQkUZkEP4EjPo3hB4cmxUyrpoeJmpvbSKgJm46yERxmudDWQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J3kspCQYQsC9LCe9zcu6MWZW8kong2AXjXRsuxHjXPQQr8vE9QMgJsFLFXrLwVJudMufFdyZqrqZfYrjs7z2xeV",
  "key1": "24pK17CA8jxXvPeNk9TghoMWBQLH4Yc7TJkvQCspR9KmGMjSY6SqP3grvVmkGtrAgn4J13rCX76KN97nGff5aLio",
  "key2": "NgXB6bYbeCmVsGu3gCiCndySsjrMY1fK3pnr8JR2iypyvgsBii6yvLeRLrpy5ZqDhXZpYissR7AuXAQ3PFbMTTr",
  "key3": "2iccyKsELrk643mxwJb1wdrJstdni2Cno3E2xU2D1hKWjxNkmh83M3pGUaqdpjeFnM4jKnTrw32E4FNKU727k92Y",
  "key4": "5k3ucS29eVG1ut7hW1br3Bu9AxxB3VuZKmycrZorB7Uyd5v1G8xB21iHHTeYFkGsYv3MNowmb2NKqm8Df9HfQ1W2",
  "key5": "3pYwdUJsHnbsdZMLqDLvAkjnm3MzCrS9DuGvWsX69V6S4d9GBdH4hSkGkHpqsmhToJeaEgyGjxkJwC3Sf8h41tpQ",
  "key6": "4tLjyiuSadtcmXwhVSXiHECehedN8RDqTyWG1Cf45ZVLVujLCVY1Wy6KMsSJ14odwscoq5TimBwnYbauJtrhBJvq",
  "key7": "5A8WJWHhWzDpx62XvGQuEeLwsg31UMMHnej3Dvf7V7rQ7b65zNib34rPnVrwDXHPT8vZii3Kogr4LPywL8DvxvW5",
  "key8": "4wthRpYrttSoKQK3dhWrc5FSY2GEmpCa3Rh56Yh2KvJZaUq4dyHYibL1wRmq8C8b59ZUw8MxNoCYD23GpGkkrgHV",
  "key9": "4FBoxdotNd8TyM8Fz8GEUzCfv2n1uzXTvpLzLtDXYLQDhDDRRgzfEc3d3NGCnvM5bFQX9CpKxmfepQsarNGtYjza",
  "key10": "2HgMM5sKRMCLAFw8xXHqshM8rHbZbkEQzc6XCyxAoEUUf7uH8bvyKddR8T6mrQC5kVBdJ9FWxYLFPt4MzmvsqK5k",
  "key11": "2TGfYuxP1fy2kXzFHGTrPu3AhCsZYJY5ygAoG8NcMw8UY2cKkQcmKvv1dTz9aqKbrkQ9y52RCy2F9iKLPgrqDNyD",
  "key12": "4F6b7HFsN3Qt5NRuyJmXq43epk9t3JU6ofjc8VupMfo1A17mxGge91qRPwt5vcGUB7Z9BAwbfnwL51mQD5HJv2oE",
  "key13": "44XREXPkJ2obryn2sr8nc7KPTGinAEECHv2ie7TQveY8wAwkSwkX8H4roA4pmKbgRFQJXBXfzpKthDrKKW8vuA6B",
  "key14": "2hqvMPD4HkEkgUJ9bYA4y2YonGNHRksa9JMw79AMji3G8tmoTXoDL3LDh8ziYA92eoJ428ZZMPofXS7jkGdqSeAe",
  "key15": "3mdtwL2aWeB1FPfFL7GijnSmW9jtSLvHr6ArU8eGsdMa4aYaNtXHcXm8DYCtLyrA1VVY4pFMisZzwZAmqYTvTXqQ",
  "key16": "7nUsJkPy9ccVmmig81qfKe625VThHVKHKk1oUTwiEEBRLoVGhHQUJcDzekKD3jid2ApkRjXafnGt2AEDyW1GZbV",
  "key17": "4MCcvJCMpkt7id2o3MrzGc3K5QVXAtHDcJXbPFTzShmK2nJLCccUMoxLHaL7MF7iuJrAKY2B2n7ASA2QXjigCHrX",
  "key18": "3Nfdak2gm4ZLCGKMs9nDaw6gjA6nF27RnWQc9qRLcNE4fZn1YSBfTo8y1KP34XtQVNoZfqySkJvyv3bGPJJxAnCE",
  "key19": "2SUVNdafuwvCA3Q8DBpRTReWEM7NZ298Xd4yMjPnwjhq9H2u5ftknUND92DhuLNwu6iZaptCLB5xjBcJtCj4TxDe",
  "key20": "4NkMsuuC7d5CjU2xVy6NofLHP1WyYiqTZzn4k7ZK4R3ZGsSEMy12NQatfXJHBY3VGfANP5PkbFqJwM7DnSZeT3qe",
  "key21": "2ky9vjcA8BQoG7dZRvH75wwMCxPSgCu53g6qwqLLtNzGgvFmNN6UPDGx5mJLh8PpEi9XzCP6CzJ51EBac5NXd5D9",
  "key22": "5S4phHk9gGa7eaiBfSQdT8c2dG1g8fydpVJJGusi4kQj2eHv4kXHZhpdH36KUFJWA8xjxqmDctuQkSh1vjPpaHV",
  "key23": "Ri9o66BqBrL1RicToFZ5ahvZsBgy2q5PZ9QGSTSiR6AqyYw9uRaYHazBN2CApNam7GGnpxcYtTMq14ZPwhT1th8",
  "key24": "3Kq1aHDk6Pj4LWXPE8mtotjpTFAsPtNsDCtprvXL1HffUQbjwQmikde8kVN5jEeYTowHrBW3Yx2UmKahQ4BNT2EQ",
  "key25": "3xUdhh5GNcZBQrtznYsdmimg9Ei5c2XymJLqAKkSWF8XhS6hvmYW4M8esCvo89M4bT6iUa78Y49pXFRsCXQpoY62",
  "key26": "2KGyn65cVitdancQ18e2wC4eSpzFXLDdS94SAuj8BqDrS4Lstnocy6kQ4A1ZPKLmTEHdwScnECE9b8eU394ZkkMu",
  "key27": "3E5amDuHFojQq9ApL6eFnN9PBfhPwnT8WHhfd8jZjqiA83Bk6giPkf3q52zemHBquJrxCmd1oC7TK8oBAcgEDtt4",
  "key28": "45P7JbmFNADsPyVi95tRQE3BPnR9FJ9LT1gkgwobe33yTfE5q6XZR4WrreCFS45cQPktxhBWw42ResLewtGuPDyL",
  "key29": "3KZVTsDgT4DH12jjEkSpHUGStvp1g186X9VLDyFibaSoNr841kqSdsLLSAwPcCM47krAVzro3upbNLEtFBtkXbPB"
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
