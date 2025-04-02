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
    "dGSW539VjZyTGmvcJjYKgF1d6YKfgmjtcQjcHBUq78dG5AtqNqKEW3xaz2B6V6Wjc4ozbNWciUSQTM2xHxUDSxJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48Zv7nVdKsBJgNupFsevf5rAwk8hoGfGNZvC34H9wZJLUsDQnTk5M4Qi3c5K974moG6MMEKXEnK5j69CzjA8pntd",
  "key1": "3v8kFW3y5yQA4k5dHR55NimMBzuU5BeMYyQCvQhKc98WKwYGEEFW47UszjWQaB2eRqdyqyk8hQfv8rihHTv2HdmP",
  "key2": "5AnQe21ANcpMBSzwenaFsYBBof8NVWczkzNLXPcknwtiSTXcrzopvLB76u23JxQFbY6EV7d42emhTGEXBvBRE6PK",
  "key3": "5EoXe2LnTE6qdPV989bokexaFwVG9rocRNGG5FKbYTbr1EUUuEDzkGG2j9Aj3sHwLcQGddqt4jj1fYCA79Zbv5Sg",
  "key4": "3RbqrVBa4yCHYdYv7vxDHf3jnYFCr7js3pVWtds6UsDrxGpSPkyVmA9imfU2vTbMwc4TfNqGts7bVvKCCPJVV6QT",
  "key5": "56zjVHYYsaBiVaV8Veb72jbegxn2G6HH4R8QaBDGojauwJYfmcLLGzYjjhrrTgeFxRu5RHsx3kavDmSCuyFCjKi9",
  "key6": "4eBYdPEyeUJQq7E57MbEFxQL2ZNnq2uPaS1swVAu2F6ViwEkbXNXAVNRUvzTMM7RJxGwWzRF3JfhsRBwoLN3U24g",
  "key7": "9YeSpdBUfSF2LxW2WRoj5HxvfmPnsESTPs9Qo1WGoCMLZYBnriQyoxLTUyeQVSqVrMhDciACvsX3RzFmREJSHhJ",
  "key8": "3uKFfFCW2aPoWkcNzEEqHxEpMzkFE1Xbvboa48STqbcLAd4JNJ9CYuvMokaGRBdyoZZnzzCL1W19nXZBgwnxwmf6",
  "key9": "2ccS7eKbxDp8SgGxAMPd1PBF7HQoMHreUc5d4D4H6h23VqE55ys3ynpyQFwj5jdCvvygP4u2JkfizjmCfMNz8MpA",
  "key10": "58wmdbufNyW7KtGBaSonQ9Dc7RQBgupoBfbV8Kd3vJ3Kky8e4FxDorV6xGUnPHS6APKfNJTQKZcJJoYeg1DpP9fJ",
  "key11": "8yVrFrevitH3NdPVjdrkxzFFXTsMbBaotCbgRFf45wwakanuc6htjT7E72amS9EmxQLNAoG89KbWUZmSw8sSqg9",
  "key12": "5rLu8K831jZpBSJuCTuMZR2g3ynUs4TjzcLQw8YiA9oq5rJoWoZsKAVEGLrEVXjVFjS5txw8hqbDak42ZnJRY23D",
  "key13": "5okEPho3FUyuBPz1pFoCGz16HqpNoYdgEMnBHstT2HjPt1Mks6bnBrSSnw8fh6NTVSW8Aie6DkjJSk2BYkWuRTkx",
  "key14": "2XoJ8vdYqw3kLZ3GdYMES8kuc7puqfnVBRwcCD6uoCBAixr1Amx4gFjuztWjPSTx9P7CCyKzFKNE1rZx9pifjghL",
  "key15": "5sHN3qGyeafu4zY4DeZf8s8FDbZKf33n6P3aVVFpZv5eb4W8uYARiBAQ66aLSqUgcjLxrJdT5dz4SdPkAjvTyYrx",
  "key16": "5ZccWiWeXdTqAUE2LqFD2ksLvw18sgr9LipzwhPSgAvtShvD4JfFRLqPgZ3dTyQkUqVs3Q7gKSo5yGiS1U69DPBv",
  "key17": "2QQqPdJBUM6DbZmtx7osUCEXSQuSf77fstj6p9kEyp1eUbSHK7wLGVhJZAeeLuqp4Pz2VvGRnCWR1NfGkKZxZwRF",
  "key18": "28TiC2E8f9u1Qari8sXKqoZEBFzqjfCx8SbyMumZic9dtbsLRYwCtMer6eKXynDpxAvHg495LEk9SHFT7FRqzxr3",
  "key19": "4RXjvRSVA6axBLR9dNKhD5fVoiQdyQPKxAk2oJXhoDj36pVKRmKniLm3cJmNvDAqPZ98mB8bT4GR8KEZHFkSmC71",
  "key20": "67HeKZhWR6QxWyayaCjtTUKH6qWNsXCtjzJSYxEvEQGZLMkJrB8PKAqMnkHchSxYtZKq4Rra7DDtUkZ4LiYM85rq",
  "key21": "3wdxbAq3fM2AmM1dvVQiX976zMRXBn8EyALSezQxARcdp5rxTYrDM6ToK2LTX6hnNZmHH83CuDgpQknWbhgb6ZyY",
  "key22": "5vnpFhav7rqpGCQ3CQSJRuwav4eh5hUZdMD6N7vcdZUQae9ijtjYAcKVb7J41LtHJPbHZ1akZZUMdRquzyyhcDTN",
  "key23": "cUUuVYucsqoC1of76NcsexCVMtZGf38SoVFtcx5sdCpm94a5Fek7kvJtnCM3tikZaerQSZz8EifwgcXKFUGZ58d",
  "key24": "2gv31KDwKJKbVfGpbD3HykkinnLfQaNMtDBWtAyDqxchfcTzHBjQBUZPmupp8mzhwuRwrRhRUVYWPC9o987zKfmN",
  "key25": "3PEsmxh2dDvrnzK49e98zG8bUEXiRGykwXKHykekYU6zyzewa6Uw3qvB8wQwJJBU821Bzsjf238u8YLGgWUL96zs",
  "key26": "3BefeMch4dY86LNqyJhMufxBRYkDXLP9gZPdiMjhgnKSXqpztNpMRH9jpSngTUrNgCjBEvMpJMKJyqwvBR731pNZ",
  "key27": "62NNYD413LbRxhhxd2BFqJwSQqC5nkBWPyawqReuXm3dHvHi1asw9UCCDoiqgDUsdzD1GwxJo7B3bHD4zpkpNKWP",
  "key28": "4UqGe8sYGLf6LPhc2XFcek8cEhYMeCqCvVkCT9aktGRBg6nqERSQwdkyBQbfZ2xe4iBZYb1ecmQJ5danwaxiV779",
  "key29": "4FYqcTU65aqRfdPTJgcaxChusrUpWiEabmtmrVVyxZSphnNZAbNHDeroyWwQPJffyPpfmiuqSqnVShM5PR5Tc4Bm",
  "key30": "2rHeUiaKtXCkQE3JZRKNgJp9RCN3oY4wWLruVxw9pPCS9TZDKgimZfmNshbk6tU8kKUZV78Y3cFugV1KwJdVyPuC",
  "key31": "54mP99qcqcfwCzmbsfVaGqvs5VTUQ9Lu6YXe82xX6tt8uC8SgAtAzWRkZ8eC941XCe4LpL2tJB1kvmeR61jfC93Q",
  "key32": "2poh5mcNEq1jsmwZZjUMgrkjJmzGEQaJxvRWSNAtHmPH4XL3RZfRnhR5uno857au91wekcTRiciv2MUWHsE5CaXG",
  "key33": "zjjBq88i71cyjRB5A99Dk3stnKYwD8MmhU1J7VLff1DtmzQqEWDhbUZm8nZMyVjDPap5UXDGGeHMGgQd4eXFo5t",
  "key34": "4W6AYCKPF5rmB5HNVB5S1iZxjT9XZkk8QXkx4NHSBNPJ2SuMWxFV4ygozfoUGRPnARBnWVGdQi5nmNKNJqXg5xXB",
  "key35": "4ZfTTuwA93mHk5KAAHeMdSE9aRR2t8G69VxRwwcna2ufqQCbCH9AWVVfeMP5ZhFsg7ca9Fq7gd9J2YdwN4HdxgiZ",
  "key36": "4x9xnJjqJcpBaJAzgGKD1QQL12i6wF2UXjPxNGVMNF2EnBjv6CKq1teJVEjJr8HPY4VDy7CBiA4yrYdQdyXfMje4",
  "key37": "4xhgQoqatePrqUXdodMaFyMyHfqu3vxSxS4aNcGxudiixA6ZKCe3Zu5F5wr2xWmgoDgtD1WWhkbx2Zf9oGdnuwmj",
  "key38": "4KurAyafBPzdP737H2s3WXpeHT8iE629Q2AVmbzLEkXsKmtDfkRa52wHQNvYbtceUG23xmJ5WMV4iJk36Ccanxin"
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
