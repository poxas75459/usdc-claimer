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
    "4TeUEbeB7rj3F4zjejQnwX18QjrEdivAvawA91fNRkZarkjakxuRGtRRsK7cK68RBAAT5xBmbrJb3S6keaz7f9JV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vAh7XfChMnp481Q45pF5wRQF6XVxmCeiBQidbfK2BFGyMpH9uBAKHXq1mAKnxQRrG2vWk3CXnJEmqd5MvQB8p6L",
  "key1": "YZ7yxHbfr9FvzQxWk7TmcTAJmDE4s4aFT5hdL2Ysp49ubcEZmLvzAH331rnQdrEaafPhto3QifijTRngs7xhX43",
  "key2": "2Fa8UwY8i4jV1sduT2WYfo1NnYGfsfiEaUiQhtAoL8MDefzw87a9oduXyB2AWSyUyZP6zoKwZkmonArvExkA1Btr",
  "key3": "3CKsj2HZ1bQn1yxS9KBg6rxEDrCdwfoc8uHyk7ThjxF7rpYeywf9AxYyyneYgQJ8rqcqUsLkbmBt6ngC8VhpARPH",
  "key4": "sGfMVzo5VmZXqRgJGVdSfUaLdYc1iuVmWtUMFVkwt7ddAKjUsmNFgirdBywgXCu63UCntenEwAAEKz3zzLpc7hB",
  "key5": "5ttFVSFKYJdGpZD1XQ4SwxGHjsrEzE3f6jjkvdycPur8LxXdQZMsHZJqoKqAYTpHr5dfQm5RaaHET9iSx1f399VY",
  "key6": "5qdkXc7fzN3KsaxMEYQj7pLRUKucfhjTEnb8byDYhQcCeHjHYocqnm9EpJZ3QfTESpEWWSo9bjwrdLoGHyZqDWVi",
  "key7": "2i28BQxR4784W2qY6ByDYTJWaTnRWoX7pb5VCVCJKPhjzsryQ1TCLxYcuxLMf7eD3hBe3VJdDm7GmviH192nvEe2",
  "key8": "5Cfsj9wsuUXcK8AudEq2q5vHzeqmndiXPgw1DczM7dfsTXU79pU55xEzvVyQE6nwmevHZkZiaeNvEMojZte51WE4",
  "key9": "32iBZqRQPiuNNSwPvtbs7C4hnsek6DKcJWMr3nXxLTnzEDhjSbWpKzUiFRhrQByoDiF4GfQ1PANpdwHvKMdUs1tK",
  "key10": "5NfEG4kGyXisYvq9Br6XQoz2T29PXu77iK418jpBnMSRBsi5KjqiFvpHV3ov3xYWNMc59QXgmizVGK6nc52x5Wpq",
  "key11": "5yM7RMWxVaKiAD5bK6TaJ7DVuoRAeowmB74UnqvBHTKfoUQmX5d5wS8CKjML4wqgRLD6Gaqv2KmND1oocivSdXgC",
  "key12": "3V4fgymTb4B2C7PiioD56jifwmzcP5Fkz3ykFJL4ov3iJhxSbiZjQV36cwqK5GgQxbqoxkqQaceYwgnBM6x2Svbr",
  "key13": "5UT311LRJD7LsCJEnfVe8SYRJsMtRJjR7rMZeBLs5NQHSgdTyAeCF3e6huyxcDdzwx2zu6WoByezyGDDGoNv5uQ",
  "key14": "HLv1h8VqcfCWkdPckeZ8VhfTbPnr3MTgmKJcKStUU8ZZrGDHgzjWrVoSkYNhmDCmMPfG349AjVH9PPDPPxhA2JG",
  "key15": "5J2rGx21XtMVp1ugdPeNvFJTSV62JqMqvmTL3V7bDvf32ed8HEb3nKGZ3YeiHYhfCR3RznashNLYFwjbxidHqzeY",
  "key16": "527a95RtefqK8T8z24anVaY8rbFZ5pxyKEzrnNFyQLYSBNaHxzSAZ649XDMKaqk5iAeppfLne4yL9yrYyDytwJqo",
  "key17": "2pJzda9g8NMsZViUnYVVscKMyB6dG1FL8JPCdeuzwBDEjVeuuPAESEKbtWhXa51TohHupZYqWV8CQYvN4ReZN5i8",
  "key18": "5Yyd47zFyMGATJxAFPZsQDsstypLjmN4JYEqp46oAqyoaE3yiYCGbBQpdPs5x9sLWWJPXsXbiDMkjyJHpHkh3w4M",
  "key19": "4Q4mmwnhJKotZrMqCX7kgNycs8ywVXCR7aA65gYmm5Kz7gvMSD6fPJb9oDyv1uj4M4i7qpmTkekTjpsp2jg6Ufap",
  "key20": "BkZRjD3bzGAmBUJJEAk1XTbcdMcGKEB2fTL3L92phXLsTEnFaAdFzcY3HF8YbRD8M9tN92JyYXbyvWExDfVKxvL",
  "key21": "332odHKkajxdcCEhKxkT8skv87sdk7fLzCrMafYryJXdnZ2Eemtjh8AeHwCKJ7F1tQe98Sk3YDaiZ9NdGsvYKJ8a",
  "key22": "3FbiCDR1VBuGcYkeitTnHbMkaMV7xXHL8j2mpvdzzJ9EC5BjmyhLVEHMdYTqS5qwCWDFuZKGGq5isiRUWrSUzSqv",
  "key23": "2iSUdYPW2ibMTtwqs2k87rxcWLtXfbZWJcCts1tY95mSfZJKhgF7eJcYtNuC81nTQQdusKVr35yUo8NLkBY22qhi",
  "key24": "3qbFnLd7tjYwZVdtwV94hPo4LyaEaGLtYFQ6eSqoCTQpJKC3VTMUQensaBrfkaCmhwq9wmDHcoTDQCtTLGDh7xMn",
  "key25": "2TBnTbESPi8E14AanqZEemBJv72YsR6R9o3gHUBfoZa8ZrQkS9DAkaUg5wxYpUPrcZkFLCmTuhDwFEgmZvsYUgwy",
  "key26": "5bbXLAojVcofB8Wpavk2LrkaowQHUj5GX6CivLUHTYWWLCJXuGEhoxYebZscL4CJP8ykr6jRVbR6SUWfz1LC27tW",
  "key27": "3t6gr7En4fMYZYYkqbNSc7giKRy7MqWuUx31pXUjuR57wcbD98g2e553kLZShozFxZCtD4YcHSyC6zJn6j2LuMt9",
  "key28": "5uHfCEoDaaTKEvE6PTxZ5FadKkWxM2T5V9YGGRzTT81iBcN7M9dqNWobdnjQ2sXmxZSemm4W2oMJy1DdnFjWuTnw",
  "key29": "8vosRRLJLw5qu28RTtDUu3F4U2PmhquX1G84uF57r69j1A5bR6rw7GBGNhSbiGxADPgALK3GMyy4RVKMg7ZJFEd"
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
