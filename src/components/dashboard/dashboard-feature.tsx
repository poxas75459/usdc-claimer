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
    "2kKC1JVy4dMSC1BGt3DbiX8nLJCFm11FNHXi2c79ESx1f76CzgPV3D1HUayLxRgqQDKvj9Zk1j7XQLBBpZ4o8QES"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pMKT9fS1MrGjSJdAHT1wurpGuJY5LP73aQwG8MxJMhZKB1ji83nWrEbxxHKmDXaDHLTneCsBngtgzu7ujXhSDR5",
  "key1": "7yk1rjYaMHmgQLqyN4yVAoC88vRpWgjdkG6uQQ5QnXjk78WRSHyJ8xHHELA71HT9hfG4At2EPfJaVfCNoTF5hjw",
  "key2": "3QynZtXx8wRMmf3iGpRX464iikck9tpUQFQQmWuMxHgnjaEyqjNE8cszLwBucobgdAZ4mZ2Q3Y39PXyQaNPsGBHC",
  "key3": "ros8Zs19xwEsk5V928iQtLiZfZUccS9uU6HBGy5FshgVp38chxkeK5A4vvBgS7hx7mgqoi5FG9uLAHgHstdvGi2",
  "key4": "2co6yFG8oH3tVGS2Ev8HNmW9KZof7zQGtCkgn1tYeCLDsda3jWY8nMVjM2twN4Aiz2MviX4VgYoqYDEZSkFFeVHn",
  "key5": "47Jx7GJPQHaR3a1mtUbaLci5cSxX5C9ZgVteg66cAUhYFAX88jXC9d3HsCLA4U7NhRDwKcrziDii89wCDQDXnxsb",
  "key6": "2cwvuxh8TaRhhFd5ofESQXvR7j1YxmmNYivtrfDBifLSTw3b7dfmWRY1iv54wbzCnzepT7SvgiZbD7Ungnwwh2Cv",
  "key7": "2jnBEky2qNDujjHvEnQa632A5WJpYsAxe2YL5X9u4faKmWUfnk4jz1BFPps6skDNCKPixtYoXK8MHLZwFtwCGaRs",
  "key8": "2XAaeK1ybjW3kK8a7PeC6To5FSUSkw5WmhGqiTTYTh5z7f4Bn88QyozoQx9TG5evnNyZ47ocGSwrAprbHTeqejmW",
  "key9": "5TrRsrmvipPbZu62HVk3eJ4DoQCpv3QL5nnSos1nFtne7NN4uJciak82vPdipGWGVxYmPsgQRXv4bZSmzrMB88j6",
  "key10": "2PxW4jq1xUWizHfS9qeCgztCDUuJN7iDVoQtjBcXnQVrtEdFPGHuCSzNq6ZBP7ckRhR4C6VMJfdCeLm7h6MqPweU",
  "key11": "262KK5h6ohSkME4dVLoAeeSNp5t9FVAv3PoZTmfBpgU666ST8q28QWCDXuvecm9mFEX88fc5azU15H6PFA7bUWq7",
  "key12": "5uRCk7vwzLBP1SG5yDiy5KV5Ck4SLCKpjTxL5KE7UocVrg6q4odh9gkCxrbn7p4yS5BfP2TuS6sBhGoBu7mRXtkb",
  "key13": "33vVWqk5drWAWrmJF9QZMdNrotYaz2AppCoeywwY4XT59EZUro8zRibYqzjVLzGeMjodd7jpBwYoMgUd4HrUua5X",
  "key14": "645FCggQb2LWzbeuVrydnRYA9N4uhmPsBjT2Yv6j3MPY5svC4ZUM2wG9fZVZk95MGxvgCmBmVYrLibxcxSsZ5hwk",
  "key15": "4PWLAvNvVZKhPRudxQP3dkz6KYEH4Ze1LvaF3vhUcS4e1t5MTstioxzCdTrqNomMEqomF3bLJMyuWRxYjmkzLwzf",
  "key16": "1UyRbdkHczQEMHJ67HfTyjFCA7LD1SuUFnzwGHCJSL6kMyAZEWPhnCk7paenrfEXXNjapXyAvL2qc3bWSveQbQY",
  "key17": "2NJoddRWBjRMCSvPMvt276C8kb5wCpDZHiy1LnZgSjBzz2LFQBEBmkFafk3g1GFRaD1kQKBwKiN1ZXthD2pefo18",
  "key18": "4JxfZRSvpDhwVHVhgdyxNdPkEMBGsMwg7Rn33TxNrkFGJybn9Z7Txnv66pqKyifHtY3GCQdevdzpgsHVTzdnkRUp",
  "key19": "4BcvPwPX2BhNzWvh5AqkYQSca5PoGy2QSrELiNLPB3uBestMFhYQ8oXSFCDWsF87XBYjS8dUsp9dRFnVmgudFMTM",
  "key20": "3USogN3tvdZ8D4YHqK7RJAnBQ2UDZwSz2wFvZSj43xPo3Jn7yJ7Y8W9pQKeuK9cQ7jLxianCy2aULSCZSTX9uWgT",
  "key21": "2D9AUB2pjfHZcCahWowsEh6wu5MfKtNUf1Qa5muMwKSxFJ9KMFq9cQkTyaUZgiCPDzAwYWsYZAQQdKU5jCNZYpW6",
  "key22": "jpS1rcRtcTGgitEBj8oXwjC1mDHaxGwPUxMZGN3AxqnQQKB1M185TPKWuUqFJ9QsPHEi9g15MoYGaHDFebcnV4j",
  "key23": "3LiCKEvzatzEctuhpNyJYL2rmHSNy6wbguQoeCmhzhsUJJ51RdF2uDaT2V4UyvdYQvzQUdayaPpjg6oibsw2mCQ7",
  "key24": "3X9Fjz2sLEESR1V4RxJXKdQrBmchvJy2YhoUSzvNU4BopFWcFAiSciH186x6PNDMRM11hn4XxKsg9QvVDYmDs7db",
  "key25": "5b93aQHkHBNmxjcpKc4CoGzVV4R7fFjH3JDkAVS9Qn7YkeTLuwURK974fUj81Tr1CFskyQ9y4kRrmBuXsBxb1uK7",
  "key26": "4n7abuGSK75B4ZZSQrDQwdUs5yBFpxc3hvhTtcddEwCsYyptnTuz39R4R3pjCYSnBe5HLXV3W8M1Mpkr8rdohKjb",
  "key27": "3sG826dSUv8uH8bfkum2nTcoLtvoDZjSx5ihiE6JyU8rmJuw3P6Cg4rPFbU2yyX3dcra4juwPbwEZztqrEUpfzUq",
  "key28": "4TN5rn7LEMAbn94y3T7jps5WASqWN7NuZ2WfAnenfWfrfJ8SeVP27a3LpFcTri7JNWQqA9tgV8mbJyf5HQuDhxwW",
  "key29": "nUmuvMphRTsMKaCRrvaNQeb8JU3AuLjTvBjML88CvbLPXdSWYwLNbHfCr4WZah8zzEZiJ2wCcCik4aq2MsWLVLb",
  "key30": "242SjsYK869vUKsBKh9y45GRoNzQ9yeTUQUr8LyB4ksog9eVU7P9ePA77vSMXRBC3dms7PFegBAjYLWuJCnE2JXY"
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
