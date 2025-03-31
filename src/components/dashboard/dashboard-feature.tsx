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
    "5hnZ7bpvn337QRAEWTBYgmxDXuaZa5ALXTaWFEyAD2SRySi7thtqv81YjCLL6q8kwUry3xmKfD6GuVDyCnvErczR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ahr1PGLbSbdFXw1RqGsJQEe8n531JUQFkdJDfGDs8gxJpDzX9fkYbvBNDC6BE5r2NMhGY2uTq963EahoCCmaB9k",
  "key1": "4uMMzMuSLMBWVkP5ndzdyiEUZaBk6sjsSgsJ9pbKCnVignGZgHzzgZBPkxXPuWEDqWvuAAQn8PGwatnZj6hNrvu7",
  "key2": "67cBhKxpaAMRMVVazKohBSgh8BYhQgSiENqA8Bm7u4xySn8VEHEdkLqeUbroAGX3k6bj8Wxbe3LqkoigDUpzotMN",
  "key3": "3ByN7rCc6UT6paeHzWVGdAJ85VNNi6tyyX2o69HRS6WqqnTFn2VB7Q8N2VcVUd4gvo73JhypGvLvxXzxRa7wws3q",
  "key4": "yVw5nU9BWmyu297zuf4vqgybVdCnRiPxvthBW1KkRp31fZMYW8hzcVAovSk151Fua1QpdX1NuZRBbE1sSQzpgRh",
  "key5": "Mr1vSzuzBou3mcWZ6HapYFnsFTJoDoab6dE7LwxGDxRJfdMQDsiT7xDxezCnZoLUSvp4romi3rWTU8S1qb33mxj",
  "key6": "5GRBbiCgb1s2xYcLwpY9ghtGmTgdcEBHvz4WLEu4Y8NhtZayPRDqyJg1XeKHq6GqiP3Ans7cHdnygoGXGkU7Teiw",
  "key7": "4QxG6iCsKJ4MkC9h59CYuBDbzYdBiT4EABK1dV2RyQ7JerYc3RxfNojPkQnEEpScxP76uR9H5oPTJAaSieRTsrFy",
  "key8": "wy5wgRTznW77SQFiQz6QaTCV9QB58Zqu9ibe9xC335gdVrgUYRq7BwxMcNPSCADED22rAxpr4Nao7jfYn35aLaE",
  "key9": "5nW8mxgfT4KyiyWM19NF6FCfaTogzq3pGTNsrfKS4SrU2a18zmZjDiY5jSeCpcneLdnGQiSr3SKs7G2iZcbrKYTt",
  "key10": "2YfZv3rHdni1WBBZZDyn3NDSrJuCm34EDJcN4KY4k1cg2pHj2qk48ZJ1FGFgsXydr9x8QsCBfK9sUE1E8ENre7kH",
  "key11": "2GgBWpcwSyySdymzE2i9N3Dt8aY1k17sxAViTmsEycBr9HwCXm9VNRtUUqkJzSq7zxrQiRz1YUF46WWJDqrpTLkR",
  "key12": "3Tp7bHPL5VqV8bMiNe5SHq6UJhU2ECkC9NPcYL81vcYke36VPZNuNKSwrpPVQTJxQpzCsEehETjwz4zTf8ik7vxh",
  "key13": "2WBezwxfM6dWeeyk2dPFkciAiwdtBigzJNapdpDpAMCUjiqUVAEF3HSYs3Y4ar4vuVeYzNj5iBzQc2gCvebikyz9",
  "key14": "5tUoAnzfexESmJsQ4uvdPD84bSvV7xQ82wych2KjYQGcQQrZUgbVkNN2hzNAggk7BEHE2dLsh1aXQpAEtWNk4zEQ",
  "key15": "4DU5sQKx4foNECRRJvP4AhPJRdZiXY27rEAqg6rdbQDBwoULkS89xFykgpybwfbbHCZgUxie9HJNtAsGG934Rj5r",
  "key16": "2pLKTVNkcENRBuf7YiXdz9iUzcKhLqBAWnweWN48hqRmvQMZdnS5UUYgcacvYeXWkHX2tzA4qjh4hQnqypjhaLQG",
  "key17": "657hU2ia9PBvnizsd41XtmKCFF81HiXPxJxASV1mC8id6ZKqupMR3KFo2aqY4t6ayPMiZRi2qMHzEhEwz8wbm26W",
  "key18": "3Y89m8UTYp94s6iSzVhEXTbLFEHzBsX81GK7WjX7XaXxf6W8TMBzMgyCUH9xUte5cnPGkGLiFcwgHT7TnfdfKhSK",
  "key19": "5jer9SpefzK8pcuu6nA5BL4JTQf2kPyYArqQJzzuLDtwSjxsRqFYzWnatBmmm6oFWc9fSeA6MWq6GmDstb9B6LPt",
  "key20": "aCwzX2cizxkyB21LgHSLrdbrcvAU4PcWpHqkSqdY6eKJuBqUeVoZJ4WiFpnVy7yzqEKo9nFWuDLc7wh2xxYJMVj",
  "key21": "zoAXag4Xzxf7WQrHUK5Ny5VJsWpWDTyFVqLLfqrD6j8GAts5HvCkMw8D4kyAN1kfseJhzXeNKTEiKbtwJDNrKqS",
  "key22": "8ozkajGJ4CJKnmSTSgisThERd3kESbB9rousuryqPvsDMz3ZNcMLecWbjv8mT6gJ1KBST1ZfFeTxdqNLq3dAfRQ",
  "key23": "4ZHL2xFmX7Upkovnt8Y3h2TnZs14JSr2QnEz5peLTaXt9HD2GajSnFA8v2x8dZva5vqHQxGtckHDvm4BzQdqwAs1",
  "key24": "4X8pSWYpikGZdvQWc2EYUAaVWEqD85tqY74sZ7idywPQuUXJf3Ek3hVy94sGwpUkwP8LmYjUrtqi78vUSsXjFWM2",
  "key25": "2NesxqYMqG5xi9Y7s9AZYuvjR9rrbd8Yj6MkpRXXKVkDe1cV1CUDk3GWyPUeSfbo4iPe69BMmSsFSd7CAruU3mza",
  "key26": "34vHDy3R3wVFbLS5Z8cbnyxAoFvsC4JiM9LxrrFcCj2xCL7mcfPp8muaDnC9CtHEyTHdWqYvDi9oWEdePgKUoTyR",
  "key27": "5PBpGzKmrGiYpU12Nv681RFYqa7FXrvjnHvhbiNGUugf1chP42gCQgoL4c62LKJbW9rkNFs4rjHy5hgspnd2C2M",
  "key28": "54prVEYoAWh1T6n3g9PzQz9Qj3NayiwCCtrdsTovWX72HLRJi73Xe1o1Dtns5obDxX1pwwTMVAce8JPBcoY373fk",
  "key29": "2ZqwEoYSCpVEeXtgkL4FpbMLkngdpmUDtCPsSWoFCniyzKjVsywa8jTzg71fNL9gaYNFyNHcJcGWXDwdfAPGCQsZ"
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
