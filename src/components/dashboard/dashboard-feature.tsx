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
    "iLAgQmWhgA9rBENfgTZti7huoVnZLNbqxyfEo4p7AeREuARskZAW8krne2TvnC39SDav2YAMSQGZWPqrCwSjU3L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32KXjNBUTiii8CTm5Fdshq2Tb2XWAvhhhLx5jgBbUQp6Hkn4TzuGM8Hqp6NuDwP8EWNAidEz7YFABVH9PyAJSUMR",
  "key1": "5Mw1NgKwWdRneEQavxS9S9LLnbqnZerRdyJEzSSbWMBaP6paY3j3DA9T82H6cRL6uz6FnkRCvHfSB2ZnJ5wjU55E",
  "key2": "4EPjkHZyfDvNBg1FDs5PxkMhCMSvANXNkR8KRu2cpEfZzHJW4cAp2CAFQpstmhUL3TCX1C177CLD8bmVbxMntuky",
  "key3": "2ueQtxc4aoT4YTHcsDSPppFY5DsSfuCQmNqPF87ZDHdHGPC6cVwDk7KirvYAXbRMs7Awr7DirV57ywndFHq8gNuD",
  "key4": "514RMT3LKNCE9LbhpReDk7b2T2G3YL9Gw7E6Gq2EMx8rzfG7AS6CMP7idCDPHKp1y8XUXcfJGyFFxMFjXxScZ5ts",
  "key5": "3mDtymKQECGbA1BTX62V5uNwHaKpVdHzcGYe6oB2xEstY8xK98hEK3YEBGPaoh2E5nUqtr4MTLq9WX36H6oEYuY7",
  "key6": "2vx3HYNk6YcktxqaBnZHUjKCP1Lr2zNoDjZ5UZoziF22uB88B2dUFy2QmNAVuPVG8FMQyMLBv3wRMretrdcqUN4x",
  "key7": "2KuqUv7t3Jibjd4QMW7SP85jP2sFdLexwd9DKE7L6ptxsCxdsCQKh1eHHFaBCoYcLej8RqM68rv9RcMuyn8jbmJZ",
  "key8": "59LN6pzDAbG1zZm4YzLWydYAge7uesA8Y1615s3NKt2hRYihRkzQoxsEeMCwyXGtAnWHN6GcfypLuSJYeszmdePF",
  "key9": "2UteAgmQZQV76hddJc8WZfteKVsGXLd7986Y5zCgy1RZpXMpMvdBb6wgpLP2jQQQgnw7hLumgzS6dojvzD2AUF5i",
  "key10": "4QfTHs8eZnpVSGHmV7PnKReee5ssQUZ2EyoCNuMrZjiex67xy3zvxVxQ4i2TxERaMZjJAjCUXnDUsorDN82TcuVZ",
  "key11": "4V84H9XtnmK9NUxU4RwrwonD62rka5zrSyry1y9YpE11dPiYmtST5dgja56dAn1eEc4WyrhsSkc5aynhK3528WFo",
  "key12": "2vZDmD5GkGjqQjjdGbzWKxLg1XsQVPc39DseGKHLBNG8gH7sfwjB9inVQbAH6ZLB8gWGPCw4X3T7PpHyEYgQPDaB",
  "key13": "4HuJh5YwLkyQ172dcaqECyaFKuNAvSpPUVLxfNBgG6ZwDuJektNv6fWQ3iZkKy9iFecgHfhpyDuXS7QSyC8QTcmU",
  "key14": "3M6iUQ4qgwcmRxXhXywALL7UuBh73Us7J65s5BNdLbVHkreZRZrzufDDHsLCnweD13KbSyXppjyDNS436c5A5TMj",
  "key15": "2b4P2uztw9LMipsYut9Fniwkk1YwKXMNNtjXwKScJ5Ytvyxs8pykxdu66HA4dkxZKgeC9EsmGb6M4a5BMRz5STPr",
  "key16": "32jYDjs3mmC9NoWBrstSet5D4jA6XPX3VBHBJLdeg7Y3ThCJWeRhCV53ep6jqBwAqqLSMewJZyxTq7riqZ1dH4gk",
  "key17": "43nETfTCG3Nmm93ckQq5tptssrmnJgQbWptUsfHTSh6cizSLZmEMHyEcoTdLHswr9Shvmom6ehp7aDNHHMy32K28",
  "key18": "xhgqmepfqsuAUhLBizJ71esRkNVxCoYGkkCA5FXZYCAGQrMSCDs24TqNfLDJe6YUjvQVhgKk4hS95u5ot5ha9uv",
  "key19": "5p5K4wswbPHmE7ibMHdnhiMum9CMLufUdJ68wtyQjHa6Co9td93tMMXui1xFFgDPq3PZ9yC2pr5oKChtnGdHtA2d",
  "key20": "6QkT8UodivaeNByFA44Edjfmf54RbgytSkJAaJUR9P433agNQvybv1aEJfXCRTSKteVKfT6r9e8fRFS8UqYCGPf",
  "key21": "2ZyuNc7fh8PWU61d8p9CTohXj2jadX7fznDJSU6t7GXyFwe8BMHXDVppszAkoT6M17dWxGpWHNhaftsxCDcUA98e",
  "key22": "4zfSBCJBodgg6zh8mMCKLnek4jq3S6ZfFTQdEiMfDuEtZbnDq5yMUTPEs3tfjYLVx4nAydacm2egNXR4qD6YVuHc",
  "key23": "5QSTRQM3QGQ4wL1XWoofTtPgN3zHrArJPgW9ao5WysPPdDK78hK5tYGAXdixdBSjoeTkipe7gddBdNwUwuz7brX7",
  "key24": "FSna76tUHCM897hvRTf767dPbQ93N6Rmub7bgBmUyxSudtLJL8ieaGMZcAMjtshQG1cMyVaxQHivygcou6aG3d9",
  "key25": "2zFFTe1ayTiADEzb7o6gfXKSeCvZUjFj7pkidehzt8azsNFmsHyREQquYV123PShWPcbF2sKwiBK3e2HbsWgbQwF",
  "key26": "4AJxp62e52qkceTprqEy6oLXy25VyVou11qEsX3yw2ara36Hf9zcd5gadNvdQ8Y9XaePjUcUWPu5ZvnJkDsYudZL",
  "key27": "41LpXr9dBvnX9FdGtRNdiAMqF4Yp8SZHufLicdtHJHuTHX6N6uF5s8t2AUCF4oz6WHwFi71RCwhS4ycrnj5qBSBa",
  "key28": "5ZJ3ZjFwjbAQRgZfAziEx5aNHSc95Rb29pMwJ7KKp4HExFuq9htvrkMExzowktuCGM8CnyqWZxT5uDj7LAijXQDG",
  "key29": "pkHQjZ8JDgp9PBUMsN1288urZSym2okxr6FEMMYN8NeyUG87EpcP7LFEvM9TmtCN6KcB8WyxcaqmXFV34pm8h8F",
  "key30": "4EUrqrevvCg7jo69FHHqWRjEmSxdniME7RecsNXgdyTs8oWHmbTjXcA9jbuMceUhh4cmy3Msfrhau6icdJN74jVZ",
  "key31": "293FVuoX89pqFGkLf9BtCLmvFHEUC4axWDvdYba112TFfKfUdvkHNZw9K2a89QYAoNqy3aTkGRypkgC1LF1iz9UU",
  "key32": "41iA4PqoZYqVcyQyGWC6KToukrSsWSMbxkymNqGqP4tYu374ezKf2QW2E7Yti5J2PftjqzJnCXtdb5hHTpnVYxH6",
  "key33": "Css6knF5NeFRSe7BEraYbYEX9oK2LfuEkdFtyEG3pkz1pGqhgAV3G4H4FqQXGEZsSdxr2DhnPRcTwYyYcyMJVFc",
  "key34": "3XGXs9MF3CmX4h478JsfJoWKvQx9Ao3fvAcPASnkGmqUWLb7nwjc9E4sRX57Vgt5vhjvPY3kqgcSR2Fbbxjxof3k",
  "key35": "24xTSVrz5fezWebnHRNFdYauxvqW5V82ELjtiTA4iuzgnKWMfqYraMR6oS69prTp3nwKigpiMGXxw9Vb5jbw8Zkz"
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
