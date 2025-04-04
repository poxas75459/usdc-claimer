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
    "RTbkxrpXVpvj7dXM8vKgrre5qGro3JhiKhuFuWweUu4XxnQkphVocfL8XXzpBFpNoNXAUdBFP5Cg98QAA6p6uVD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uXSmy18EQtqjezrf1rHkMtQnDjNkStEVsEUsXyMEhErT1vk4Ddykgi1rdWC98Q9JvxLV6cMVqjQFgjW5SanvUk4",
  "key1": "3Wpn9pGLKZtwLiosy3zbSTUufUJNwuM9rt6pQpffvzpNMEJmTWgxkmamFNehrRjk16tSvvYdKi8Dbaid8FAcFfMY",
  "key2": "331YDy7dR28SxzoHUu6fk1zZguest35v3cXqH9YW5yUjmPVu68pqqSeAqB9tZ4UeWRrmeN7UemW3BVC6kqC6ExVe",
  "key3": "fp9S5Z96eVvoEyCiizPxdsfUFrZaXebSH82qJHcyZ3RSmKQ3LbAN6rDazrQC6f4iREUjf5LUJfv7iUay6uiopeU",
  "key4": "3RBkSd69F3YDTi65zidrw11eQQUsG7RGpqhfS3o9XjRvMoXu6vzuiYNTskexZq6Uepjv9vA212QVeQMwcYSH2AJ9",
  "key5": "4dcNV7a5RqTVeiSaaCA7GLgrauT329HRTEGD6Tyh3xbs6YQHFabVNWBh9AQBaoJVra2ZsQu6ioPUdcMmJRtHQQR2",
  "key6": "EhAAjNvRqHf6qcc5Fbf9WC1JSXSuwRCE7kG6o6L5hGRCUuVGwQ6g3rLhffMxVna2krzBFyicbhjXCYV2zusu8Ua",
  "key7": "5cMwDjuaeKpC7WtAsAVkd3frUNiB1WfEwfqq6WnftbdAcnNpfjHfQtMVstaeFxCjCVUzGnCiozuhwTGW5CQXjHVW",
  "key8": "3XHGmeu6sGgr5ynqmL9f7U1ASNJoSCJZnQskERbjKKZvaaUpWxhGbuGFXAvrEADdxC3G6fjGdaySQsSsXRGW45Xi",
  "key9": "5LMZvLAz1rLo4qtth16uykjZ6YvRVMyUk8yfBEeNysEcyAjS8scRVMrdW5Ryu7dztdSo58bN2YiKUTYAQSHEzPxt",
  "key10": "449mrsVLoFppDXkE4HQPCBnXqQbfT4wvtD5XgUgFDymy6ZEEBKioxQKWoWjyTaJnyCCQeimVZGiy6kNJ4mHDvs11",
  "key11": "3FncMFnZ3KmrsvFUtCoatFNGEihj24VbxVRB4mgPKLskJ5cyVE8nXzbfkTNQzHV6CgaEuvrrW7aqSFosJG3SHmdi",
  "key12": "4odZ1xUJgLexEUT3tvYtKqzMUFGQT5d3jra6Adtm3nB4Ue18J1YcC9yhnr1FxmPWGMppRJSeZchvpGShMEKstss6",
  "key13": "64d5WhbXpuQ9NLh3yWfg2HmZxKCVA9kwcE4QLFDCPTZodGrKu4AeY3tp1fKcGsgHHS5tct27M91T9d2Zd2QaHm6b",
  "key14": "TkBR3dLEs9at2TjsyQu8koUtcNGkXSpNbDhimh6snEx6idiwEEfjNG79xMhc8nnzW6KvenpS3z3rqKYBJZuvk7e",
  "key15": "2QvoKh1HjFp15iwkG2ySyNCqeThBNQVLZ6QAmrsjVK1RZudyovaE9mXCD7wdmFYzgY7hdBf5HM5vd9QYZSSNRmkT",
  "key16": "3H5aCwwLptV1C6DJe3mAdoJzg3XNe6TkF6CQGQYUoWC2A5Bs6YAXKLfYCshEbY4LxS2JeRdDSP6frMinZWhYMNHe",
  "key17": "3HuPdc8RY4qRk8fTVEySoHcYkrdSGz7g7Rqtz6YYDYR48XkJvArbaLWcUU8Khns5bDUtX7TpCFRUaV2o9xhatHpF",
  "key18": "2gVNb6qyHp4sEhMJfoFFdMsf38xG5WGDr3kSJyXp9sjjUU41xRcF9sK92ZQ4nMSYxD2BALZY68aS7PYsAM4eb27S",
  "key19": "4xaGyQhPU4Qe45xpWwcapQ4qTjfXBaZnuoAWzEAdSKdJiuixDXCX7TxcNQxsf63B9MdbHRxMKkGQrBa7mhGxzvAU",
  "key20": "3e7ZMTSAbBHR69g8tNdfekJnYTMaP6QCFcPGGQXpcBCEiCMWGu98c2UVvJfrYGr7yk9ob2SfRui3B9N3xVMR6D6h",
  "key21": "3yMV2jZD2u7n5GRhWoq1XvK3vtDvPTd2tktTHGzH67wxzXgN24nLeS8BM1JQMB18mTEp5aqa3WyhcnCZuPhbBZ6j",
  "key22": "4powHzPKhySAAthVbQcs1tjaqQozSH2KwNkdhVKsp7mcRy8PyotLJXa8xhdfM6BAgLzE3SrYZmhvukuyEwcBRu7m",
  "key23": "4XNmestHsCscc8r7GHnhS5v4q4BNed5My3qprGaeE5D8UwEQqsELZRuFCoy97EReUekKaSQriutvBY7w6WbcREmY",
  "key24": "5jSSBGSEnbf81s4bDgKTsDbKp8NMefcqmwWWWtmKKqgTqvibktLaQVNZk4JBVXdumUFCbeAHbnyQ7MT63BW5b4hZ",
  "key25": "sgTX33BpF5Ve5SCWDVQ3mGQwSHy7x94AkD8FRzND7PZXJfpt9xbCvyjLQhKRWA6XZVTeFXTrCrmQgWF6W4JTBrN",
  "key26": "56coV6UCGH4tZyg4abFoLXCN6yVpTTzeNyEQW7Qqk1FbMHkHNCNYsFJmwCDBt7yRnrRe6Pn1iThFjXovpexZNwpU",
  "key27": "14vLGEA5KBbRPQmGtirr1ehth1pnur3DWDPdK3aBMT9gu9rqgvTbGzYVBtgzRXHEJf63d7rMkvYfBt2hbwAxo82",
  "key28": "5HpyNTnqjUcwZtjd3btV7tJzVShxXThPaoR2cnuXHLwxBSAmQLKpVHBfEHyfuRBuG4tzbTHXJJ5QtQSYbsVxKayK",
  "key29": "39cVihmNovYS46pGoiDH4ZXjJ2J8osrzo8CxmG71U1ZAAg4GRqXtikimkm3RBSHMprQyBmovy876NnsXsnyvAQGn",
  "key30": "5a9mqwGX46ZBLbf5TzCC3hi2ccdxjBrvhJY7WtQq31EcYs4DhcNQLpNineSp7zvhRyvDCy1QCZHwNo6dZ5URybZs",
  "key31": "4UmM2UdkAi2N4Fb2j9Le5YDeBYXhjtVpiMmd3kWz2UeGmL3EgM8EZ8zmN3ajYgnnL5LJsWmZPgTfFET8k6sR6UHp",
  "key32": "5rfRuXczTb8Z7J3MMm9Q4kArzVdPZAyjXXxu7YP4mgL4CehRYpyC3k2kavyw5M4QqMJjt1BjGCuZFPpHyw8w9RSF",
  "key33": "rQociMDiNARxrb6j5JREPesrgQcDav3jkrzTbqfnygfsSZsDNtdSjrWbdQNcqXKwMmYu5Aseo4ZDewSpSGKK28E",
  "key34": "68Tg4kg7UHwqUrBJbjqkhuQJXdqVEGqQnRNs7YfAdgCdPpLZYgiEYEmpHbVkpixsDn7umuEd5aMoMesGmGzpB6c",
  "key35": "2uv686EPBxmmRUu4fvTKT7vyj1jTLhfjj1rG4KsCxveD1doMfmUQcALLXvrpo9irTXnJqYudK9X9yD7WdJzWXrZ3",
  "key36": "2SSgxqoAiQBJRHP5xH71cdZZoxjPTJvcjLw5dWYY8aAWDJHQmeCZ2g5VJUTtFVC4UGg99sfJ8yA1Uwk1Xr9GHQcV",
  "key37": "25W3TKDZf6ZMAPRhmEDZx2xkyiEoZFbazLAmvoitFKLT4sReWRz1CSk26xiTiPxgCMPxXpT4rU1F8rXy5jxjDsgz",
  "key38": "4un7Dt4Dg2rzy7SQMLkU4PKDRjbQWTSS75cTMRvW1X8guJNrsYWNfNe8FdUqhraXrX72h68UMpNNsFE1ukAk2ScD",
  "key39": "2wx4WCYGSeCTVapVLcJnRRt2vpWjStJGS4sXxr45GDdLwwDygvxKFPfwYjiwUrHG81SLiPakW8rTofM45D9oJxRF",
  "key40": "2Ke8cgVFVKe3dTNuUA4CWLT9vemi6BYcq9YjNhKcGHCyigDNiCek5Gk8T8g7yXjABR3Fn4UYL21V9AZ1bwgeimwd",
  "key41": "DDfFToQuJCTfrRRMQbdiTScHCNxrtAbxzBCJgtpjWdmW9PrwJQ9LWg6xQN7D4cEVb3YFpysvVc5AtPVoFVttDiM",
  "key42": "m7JuaQjvJ6kZLtTJWmYK9n6kPaNW7aX3GmWjgLHExV8Y86P6Qace8oxgeNR4Hsqv1oCZZDhnwK5qwCNDtMBMiZm",
  "key43": "5JvtdgLtnBMoUf285QMsE18LeEM2HxT7ntetufJVhtbjhYYfg1kvch2nDHFDdUwskhjFRpgirRr2yDNj3nu9WUTd",
  "key44": "2q9oyZft3rrfZhm5E4zT3qE4Zep3ne68PMrMfPkRpvMoceys2v54ZGciKWarzdUbiP84oUVM1yVgTMpDaEyGqeHj",
  "key45": "2rwboBS9hYyWtP7yWFotgNSKzQPVW5BNQRwQsjRaTpGffedwMxUzwsKTynzPWMJakgNqruEqaMu3hqefDAv3YHBZ",
  "key46": "2o9fdYVn6t6Y6T2f4ihu3dTvmCvQPepuZgUVbWd4piZhrt1qYFGjmmNtSaCDcTMyQdAAbLinXmSiLhBvPzKcfdJf",
  "key47": "4sYY2zQvAyEViW7Csze2ZGnTwoUYq5CL7987yPx3BacZ6cy6MRZVms32NG6fwfHLpVa8MjSW7LQt1sAGBumSjeba",
  "key48": "2koaq4FQxTg8Cbm4tAkgAzWAiG38PTTEoTczYPDRvDKbCqNYPB1HqtjrFp1TgBuW2tkFzmgVGeuZq8LUpHcKmFzc",
  "key49": "5yVGvCJ7SHbBtBHBBqEUHMcDjgSoJon8VGtNc8PRbv7Nv8hCwaM747xfrmEh59XLNakzGQf1XEJzobE4NpUTNQpg"
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
