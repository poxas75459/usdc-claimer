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
    "5sxKBhSUzDXw46Q7Ayb41za8CdoN5eX7EDvasF2FMkyW3G8nV6ZF2eBKP2oYaW2VrtNhqr6ZWLz2DfZ3AuV1vxr6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q7yXakzAffnUW22ekzQ4tScgta742iCYpvnrsMbjt7nU4SrgvxuKUkMkeXs78HiizF8ZHd5KxoQW6NcZu85a7Fe",
  "key1": "4MssZZ6NkydUyx4CahdsuxbbNw2Fb7vmDDA3m1fgfykxgUvtfsLe5DsLHsAfFrpeG8a1usihMZSTJAVNjU94D7o4",
  "key2": "yte9j9dMHgmcP4cUJxWaE5aFiqwjmCKphYKnmJdfVCVqBLoUFy528T945Qg3AMrC4WSEpd3dgmuMvY5L4T5kZUb",
  "key3": "2h7W4rPAy3tHjo6MnE9fgzAyJG9FYzG1tiMQo5T2Jnd7n69DpqE3WSVb5CFD1xfBbPm8QW3djNf1uHUpNHGixeGd",
  "key4": "4R4PXQeJzkiV91U47XSgGB5RH12KJwBuKvZPabhR6RDdRpiBMGnXEgF9mkedp8Nuaw7D7gUdRo9UerqUGdTTHH91",
  "key5": "dDSwayCHnRsmyWerX1JcME93GA89PiDDTbmdroL5KvhZhc1LY9m4s1QA8RRzxHg2CocmubXmaTCDfgsuY8tabyH",
  "key6": "4fg2nfWbYgcRZupEep3sWJonPUX64ZqAKSF5yAm8veCnBGuNZrnZZug1DEKgx491ZJNrmsRMgyvKKViMHfJzaj39",
  "key7": "2ycS9qvJbgChVRCKz2D51ew5VdiH2CnCGCUDsuEe6r44c4nxirU4FXsskndcNzfhboUHnMGD1H8AjmCQnisjdjMi",
  "key8": "FyrnTT3ov5PfW59Bs3iSynk1fZUmov2FbtZqbuep9zQPCHfy1P67SQxVg1mXUxLupwvGZqqy7QGZBZghfBv7KWz",
  "key9": "4wERC8n3TkV7xwWiJxDjzCzeFoRBpGr2fwo34sU32GkK21xr3BQ7W1NHCmFEy2GHcP4dPcRufLxWHibUwYyuSmsj",
  "key10": "4p7BEv8Q7R3Y7NVDSgyeCdc4HAKc1uAsuanKMgeb5QpJbB2A5EccXawQA26rDDdnQ6X84Z6rYnwXGzXWS6SN3TG5",
  "key11": "QzUUhjYBfQn64JoscKk9xkddFAdnQ9ycJK53JoyG3vgENpPdk9YziwqfNCA4iJaYS7UyWtSpLZvTTyLEPNiGLJj",
  "key12": "3TnJzGmwjqi3ieMsGJjSG7Wdnk6iqmSZ1xMj4Dqj5ffrUNRbDnUDcgxfX6J1jEEgmKVMEe8ucr73wiXHRHUZgc2x",
  "key13": "4H2ee6fuZw5e3R91BuTxKgoLfhFKqTxhUvEXV1r6j2phfRnniXwZZTHae6WjEEuFU47pT3ZuEAXoaPXguxUQwazv",
  "key14": "4Fqjw1Do7S5yqbtbY2JqZUvKPafy5GLFSLfcK7WxgxGuKX27ipTkUz8GwdkVVhtGsRWjPdzas57U9FuHzFNa9yEQ",
  "key15": "4CeBLXaXfDKiL4hWof9ZpSbSPZck7v8RR6P9gFuSZJ4HXAfFCY5LXeeC8Fx2aXJXPUdZAhn5eUn59HHNeK7kRWXt",
  "key16": "3E9BGJuC8w1KNKNUHSH3RV9CMDrVVRJ3rgB6rqEuEmnyXtwMnXGQjZEneetiJkupb9ngdZ8UkaHrrQpkZQo2tgTG",
  "key17": "5xiuFVbfrY24rTrmWqDrZ4ZCWTMP1gz2JGaDMGph7ZhJYFXnmeX3uspFN3qiycuf6CqmK9M8W5cA2KxRC7G9MYR9",
  "key18": "2CbJR1rBV9XfKzw12GpSaCUcTHUQy8jrFdAnMbxFc5Gpme4cYnozET1V9m5KGAo48ovDU3T1JQUUoM7F9umqnxsU",
  "key19": "2FK1mHEP3fCQogZCmzfhLPeVcuBkqqr8pabMuC6o9ieYRbpZ8FM25BeFuhmnnUY4oGYgLiJ1S6GHoBcvzTj3Rf6r",
  "key20": "5DJin6QLR1pz2xqJ5G8fnAtU89hW2tey5afRzKhqtKfc3DGGCpB6nea2b4Fv4ZcFnWnjSpnEvTRb2zWcBGfDRRq7",
  "key21": "2MhNpXJ5VZ7bPXKHMHR4quW1scHR6vBAp62hpXrNxMzDzfxqqym6tzUTAx1kpGWfjCjfDqWLMGsAPAbXf35N3NZR",
  "key22": "Z9EAgGakZX9kmgHpUNZwo3uJ4bRJiiSUHa5R4YtFYYxi7VxvNVocvuD9Jno68SMNrEcrt8hAdFNN9VtpEs8c69Y",
  "key23": "31bTJUCLdR6nyQNNNa4FVegLJjjoFZqBzxJMKMm4VzhwUSJM8ts9ApKqgREfwQzHmMkEmoegs3S72QD4YcFwB35j",
  "key24": "4C8grzjbDL5cCCJ2hfdkC6CaCw5bdbk4uTKe3E2DkZJRwrg4CnXnsbeP3ErXYpTPYhFkjX8ki4KEKA6GTe7u3AyF",
  "key25": "4Jnoar8LYxFiVUxHhtoaRi5aPVQ5aci1fsyzt7pagW5nYNVv5wULXVQbJkhobubh6mhkLTpd7ak9NvRW7MzTfLuv",
  "key26": "3S2mdkD8TmmEHmCYroDZ7wHW5HkvP9XzFCYdNgUqfRfDEVBpeSb5BxqAtyFutzV9vcXydeW3AhZWnibtFQRsusdL",
  "key27": "3DeUf15ordZhAabeXeVAvkMNkX9r3BdqxdCSPxrhfpMHMGEB4G1wT3jq1HxrUcairwbwTbJgb8JPqgNP1WsGJiuE",
  "key28": "28e9zZSvQ9U8BcBdMmePwajM469cV6BvwCNtW35rDz9qnKcUAbiCzxFiHWmfVCg4vBoFhBoGcrNA7HVGMHa9tZjw",
  "key29": "2MQvgc318tSqDe4fsTo944kGWnRQrDipvFjqpVcrbzoVgCzXtRVutVbq1B9vjfJDWdCnQa5PEgnnNcYvQJaunpRX",
  "key30": "5P97Kt6Gdr9iUcwCtTDewX14osqxfQtACQa15bWszugTrQGk2LTyZGAnr24q4W5gRBUn1YhZrEhJNpvaGqdPjxeo",
  "key31": "4jwA8axAtNTRrkQpBfMuQSvBdAwRa5yq2pCTedrj5ZSoAG6vU2nYXEMi7NBBnudNj8zGZKnu5EQ8qWgMzuqcbVS8",
  "key32": "4P6EXTkqJYnaee8D2Lcir6dA7KjjXf2o1vx1Ax1vT79QbA3Xmv3Zmd9Pu9DkDq6zmpTqKd68Q5oZv3eKPrnHYGAU",
  "key33": "5UDV4mFbNEibymJEwpaCk5ieT5G5c2frfF4vyft636nRHR1nwH9wBELduHPJP42TPJ3x32Cpbavwzq8oAv2p2H37",
  "key34": "4pFJxZFVJ12JgPfAFxN4qzZLoD3udhTKrJ9ENKsXD83Sux8etiioHBt9MRAHX8dSJqj9AQ3AiR4nX7ysW86KLrzG",
  "key35": "253D8x1w4XxJ5pRm2TLubueG7qBP5wFxqUxRJB1TbAkQD8ZkvhH2jU32Bq1CFdRJRT6zsysA4fvepMiYdLYZ3bEV",
  "key36": "4EBWriBM1YXyh1iXCHzoBEtTTf6t28U8tWJ9nJTpkAdGAccANMk48iKggNyL14Q6Du7ziZKbdYPgRYsUV7v6SRg2",
  "key37": "3TZSH4he6iWyzyYL6CVQYB6Cy1jheG5eSNTF2pBW8869o263jpWRcsPaaQepTgv9SYGFLWsb9KjCotvj3atKJskW"
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
