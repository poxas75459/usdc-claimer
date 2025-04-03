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
    "55eBKAkpiiopCtYGHo3HyQaYabRU5VEKVPNWoDyhBx5dQjyW7fMSuiUqv8nYGvZrgeqjcyt5Ff9tqFAWRsXMoBbQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zUW2w32QMwZEJ7xJNRQoTv1QgLgb5TUXfAuq44maLZCEm4tMWSnJY54NHR2q9HApamQLmYBCJay5zLfWdriabv8",
  "key1": "2hJUGa5cC3J3Foc3YvuuCmELGrxWqgcBCfYWD5ariyV9GUTDF2YyEjYUY3tsXvV1GcFXZxLKSTwavAEnJGicBKqB",
  "key2": "5nuLzqXF8wkGEMQ8vdwvHbD6Hc9Bj8VBxHnr4adJbQV1itZ9TfTSfUyNUG9XeE14defsgjjShceXUZLtYthV46kD",
  "key3": "5wvCmt7ABo2YBbwkQQrV7UKYbzCtCMEQTdxNruqveHg6S9YRLyq7ZEbcUhZxGb1YvN7LCQWzjc6hch4pssLrYcr3",
  "key4": "5npwjWkD4RNh7C96YkBshmTDm1ug1NaGaptGZwUeZx9Ev2DS5veMJAkSBeXbW6Fg1XwV4jcEm5qktbTAoapj6ehy",
  "key5": "3yupY5cwjzPtbatSTtoH3MtF6v4oCr4UJ2pRE2Wr9ZEDpacLtJ4jivZULhptGbdkGNhRvwjBxZ4s7DZYD1oWDqYJ",
  "key6": "4K2thaKWjMjsYrv64mBBmdc2gxebPpMY8cJD5P9d92kRk4NNjdA8z4jtLQasddegM1RyLJgLwkjkrEjbMg4PyYNZ",
  "key7": "47umZQH3uY5hyjW2x5VxBqPrPF2uR1B1B7TaLqeLXMWtUPBqsh9gCZ52zSUxpNuRG1VSxoG4aW3ZputYLs9yHpHm",
  "key8": "uXeaLc1mYkkzKGxLnJU89zMAWkTBKnTLsmWKpLAjT8xSz6gmiYKYi5ExZ9RjzmScGppW7Qx7VCTd4wnd5jao68h",
  "key9": "3XF6oubzjdHaR3VEBcvoNvapCodGMJDXdcoKHdFcdssbXgHvothsx42XfiJ4raokZ8hCP9bns5esZRHCwYxDgXC7",
  "key10": "4ahifAGJoaVq3yqam9eEuFQC5qMSDSt8kdJsMNyNjCZsNuabGPnTbYea1bSnhq5rYJwgnCedorzegB6GFtEyyu8a",
  "key11": "3xSzP5p82QQG8Z33t7qAzQUrrLcgfXaRd3U5qoKbLXrDVgHhU8pBNCFTAz2mdKTz7QyKAkjxrw2yvQjCJRKDY2JK",
  "key12": "5P6fubkHnH4s2ZZvgXbzfnmnUDtKVcvd4jBPRuYSnv2A5BmM11ePzTLg9tUYrDHVuZh1ihdQoSEty9QmPAbtCyH2",
  "key13": "WDAfukv86zSFSQJwm1zZpaYybizMJ2qZQJ3weh36rJoEyWBqqGS8dLQ6WmaiufjveTHSf8Gv7GC14FrShuN8qeP",
  "key14": "41RzrsN67VZshhQ8AYYJNvDKNzw2BQLJU4SPbxYgu4GWqSa7oKxnvVpfwCwc8naUAdqj9YX8oqtjxzVKRu5S8UQN",
  "key15": "2aY54vCWa4fyyMbv2uQX1fk1XLRuMDz4fi82D8cYanLBRqh9kmCELT7A5RceSHXeJDdLgj94FPg7bdHow9bpngK",
  "key16": "rmosieN3734TRWokgHbDG8d1T6VXSgYSsC7VUrTe44xCdWGdMPaA2nrrSYDTfVVZDSJfkxY7XTqKhAwJ8Z9P7Gt",
  "key17": "382LdtmYkLWVkJRfwW6SDVMCusv38NkJsqS53LqomyVQyA4PQXf7i17Gzv7zWjy8EBw75U2jm8EZf2iA5N97Rrox",
  "key18": "5Q9xyxpcwEjctuxVCx1PVKRd5zdazyGJwLHXggKX6MwYnivqbqdqNm5r1SkVTLPv8tcwgsZ7emhM1m4W14Cfiohg",
  "key19": "2LYWV7wzeMNPB7sBaqcAFxAfEGXw96JfC7caNeVxyhZx5UydVW9dzUkTfvjKqLCgT7bcgucJ73YCzyLbn1sJDqXu",
  "key20": "DBrXwSQBwXU6i4YV3AMpPeUM4Jdy7DEDewuc8MV8fXyKUb8CDVoHjp6dfDmhgFyNpzMi815vGRaz1F5yMPhFUSw",
  "key21": "5HBgcTKnHSTA8bAGmb5G1efnXMgfLwujPRyAVipg8KaB5tp8fmeUjd1PdhXng4HH3Bi4ZqntdSrSap4uZ5zc2Tqw",
  "key22": "2zmSDvfYgC7jj99Ae41yAsU7ujapwPnzjktVbCTqJDSCCq3UPSG3fGLdgvEdufFgnX6xxNQLWPt9kFS5qHSapuHE",
  "key23": "4kidFfD8UNbfjm3KYUFkEoZSRXRHrvRHAjyvrxj3s5RBb8Y7bUy4Q3iH4dNeDZryXhiTA4M4EBfKtsrJvAyJ5H1g",
  "key24": "2gHvjweZGyKANgtRi1KEwXEpybBtJJKf1uawq3wAujrNuhnQc349rLWPFgUhXkeoxjK7PoePkeEZqYGxxy1wtxzX",
  "key25": "3ntHZeT6R3bw4C7RDTQqSdwqmFRAkeFe3XotyPw6qidP6oVpCue3PLiM3bYSqUabK5vzNFYNAg1qxY425twN8HcX",
  "key26": "3TacD4C34FR9jBTK21J2trjAgU1JV7FjiDH8mV6CFAGc2MbH1FKwMngqis8355m2vHNxTvPWj4JLXitssqPJoh1n",
  "key27": "2DeL2273Y7cvYVLwynhAXi4nvSnzyoNCSZUivGVpbxSfVSKvywvskp4gJBpVtxvZLi84k4EjpZmMTTbhLzjiGFdY",
  "key28": "3GWyJKn1YcPiUJXxh9nTqoCU5tRTS7We9oXmzzoXqzeSvBfAJrDA47B6xFUGX2FBjDaFRgPfMSyYSvMWL4AXmDq1",
  "key29": "45QDEbkwdh2Whj9shLoh7f7GsWNpZPtCDCVdoKpu5zxgpydrz8xu3jS3MvsYk5YEv4iH9M59AoccgNHrTwHjGV1w",
  "key30": "58aUMCCqPQnXoETTfhhc4GxGsZMNZfcBvDx2WKhEahV2ueea6APKXuVeB74Fn4bHDrSWU38Yu99PNPK4exeTMTXn",
  "key31": "5fGDqy78jd48LWLYCjdoaBw4EJyXy1UtnkSi58nMUXJusRiNSNsWQjK19ynBkNZEeqN5rd7UtZqNfwVqNk9qyzqB",
  "key32": "52JsPXx2BkTjvxVFtyirJowVLssjrre4h86P3Kge1YNEedBaEc1VQgnSKGh6srxwb6ZTo6XeT2aog4dUuA8mE32Y",
  "key33": "598isvmZwJJZQ4i1W1QYEu4JXDMm3qvrTTeZs3nx3ssyTzoSsqswyDGm83WGX1idh79Sq6gHTc3dXATmySagr3u1",
  "key34": "VZUzRVJvL7aSDHnH5iLjb7GRwFoxd5hfqKZbpP7tGxuxC8SxSeov8Wt4D8nygdchLFh2bUECTnAPMh7ct7tZq4b",
  "key35": "eVF6LwW39mkngTvmX1gRvpUzR5Wrz3Ctdy1CeQ35EjtRoMmh9rgNDoaFikYdgZ5QFRZ4tR4f9fKkK48kZ5soawG",
  "key36": "5GuuvT3PZz7u2TpjbZnuPe5eTpDEBB9rJB75Fwz6q4mCL5HoFCcMtYPS3KjnsiXh5DL52itxo6dHqeH6oFfDYj4Q",
  "key37": "5sf8Ge7S4EbbKLYyMbhTPes58scZjEe5NRXXqz7Tx1iC7kg2Tn3w6Cu9858ottsoRmndmzo9RKBzoEWAj1LEQ4B",
  "key38": "5BSbMVuykSFAw5UdHSh81o7qrLszu8JZvUeiqnDyUqqRvXc2up25LgJAdZ5B1NrfriMxFYQFZfqyMdZHWTpcBVKN",
  "key39": "2jSsdonVZDZTsdnRrnoKfNjM5u9kHWgtAifDEpuKuKGEs7qZc4NcMt3eKnPgevrJKoEWSMt1Z1JxwL8AMWNhg7Po",
  "key40": "3x4ByTxP72qZ72Ptjtf25VM4ZtAea3aWn4A4TUS38sYz6yFu9Gt7R4kG9n9CqNQXyeT8tANsTVkhzKeMc8aoFaHZ",
  "key41": "2Yp9gBs7RSbFxhgsWTRoEqxFpew5NWjwBMuVPQ93QXGmhZKCzs6fsWTCCSCjMQrFpCYXDvdixTe2bJLum5hFHB3i",
  "key42": "fww5vHr9P4JYMsKbKneTXm1Acyarc6TaBrkJqpEh972FG7BREgBUQ5hdyyZoXtqoz3NLp8haMTacadQsNxA42Qw",
  "key43": "34d625HPZTeyCk2w435bshrV4AFa7G1PY41UD9GmnWvvsLJYroFCJpyWV6ZAZRAPzJH9f8QrNcT3e7mFFJD4XyNH",
  "key44": "5YtdCYb8LMhmjSECDdbyh3aKmZ1h3HeeTHcAkddGvmt2fXNRnVjTkim8ZXX5Symt7ycedsiNmVKhLSU8i4XyaWhq",
  "key45": "5G9z2HZYyVKdEGjmrGxvAgss4agPY2annD28nGdiPAndWMkN9uHAiyhHr4sGns4UrsY85mLUk7dTukGWz3hjYGEw",
  "key46": "tyyGqzkBzzngbGgMLJtVqKdExyahZUmhrtqUAAa8Xkgr9Nryz4qdvyRhzQtYt8w5Txu3Fygjx4zgGmoyfnKdY6f",
  "key47": "TUc7DFMwgY8WbU2uPyfHLVc3y4gbsRcmZcXV9rR9iV6SZJW9GdE5b7WgzrYHYmDW8AZibbYPvu9dMHKUxZ8Zn7h",
  "key48": "21cXYs5Yis6AWFn5ApSvCZGAqtwBt5XB3HkoeDVfc1bnDvF7YRSfopSBfWMYjuBk6j2xC78Hu2zmLCgFdncdf3C8"
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
