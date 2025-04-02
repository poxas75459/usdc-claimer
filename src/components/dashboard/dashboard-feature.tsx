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
    "5T2WUB7BVR9YDg79MWwfMomjH9HebrRDFu2iQ1nejGtpmU5NJr6NGmcMbFc9oBybvSN4r6euz47gbyHeH5o8B9ng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Eius91QUyhoZQ8n7jZ37soiLnJ3iYKdkouS6iQh8dgBwjrBY9ccxYYPHmHZERdqHpP8THC6Frr5u3HbXeHZWxve",
  "key1": "5eQyq1zTsj3qSscMPuprw5WeTokHr5vdfi5gtmowTZoU9P5cXXtUyQuNeZPmgxdJVNmSMxQKWZKSHH8tEJzhr14t",
  "key2": "3pBKKazvFiqj89tDQCVGBoqc3rSuVi4ZeBmkdtd76twLFGUnSk8ptxLfpX45CGfc1YSEnAZBPs7nEKA21d6ja97Q",
  "key3": "DkJZzYMxz6oxyodsxirxGiop8mjbLHYeFz83BcNaNPhVPu52AvyRThhDs7FeC77PQ8TdfxGsn2eqp8r9HAabqDA",
  "key4": "8jZuawUXNmLriBEVo73KwrzuH3rzwXWtTGKR6QfcB1EQzPEnzNMLU3fmY4xGqYsFbEziAeUd7K4oTWyZ3RExgao",
  "key5": "42C6KcYdocRUhdjUAmyiWJGbLrvkKzxDqBJCCGfRU8zohqV9iinX5WA1sbHh2RFZNdbGSiEBeqk8A276UZbo5czZ",
  "key6": "3CM4urNd8k8gh5CUMNANw1SW96VMKWyqnbMdZYcogRibiRKsUswW1Uittye7QKT2d9SPAxiQYkHhki1uDF1rQAhU",
  "key7": "5uJQS4LmwEPzusFNHhKUYS33b5Q6Msyppb8sR7peLtxN9wj2R6xfjBnyTgzECZan5QRieaf26YhsQJ2sHzH8vxCa",
  "key8": "2Df5XQfC5wkVEP5QNmUUmjwMgy2k2xHdNkxWwXQPCQPRpUkHggJcTgpRx9Bk9huwe3Dgt1UK6mdUKzNBAibpv81Z",
  "key9": "3DNLVqiyayZtQ4xhjEm9WmQWPsRiJv3NmnZEjJvCrzC97sAEctVmcoQE2mXc76e4KPmcCPjsJtv7iMN81WaYJxYT",
  "key10": "Y9UL3dhe5Y4e2zFmv4qZxTqc81T8EhXq6AajTgTfNhxAw6Z9jQieVoqmj7nHNwkyQM52wNfhuVCagi8pgkiZssy",
  "key11": "66oE2A8NfVYwDcPGiDpUK3UTpApHcC7N1guNaBkBETU4TAEibruPA31w49Qu57NbBmJVXYEDA25X2FqSt6Ld5atC",
  "key12": "3MHEFs8e3YaPGq5JxFRqxp13VMrQnJwfjWSwx1H56MUJiRyYTzj4sqBcZsD3KXbUJfxvSiFUf3mWakR3AQmHPxQh",
  "key13": "5ZgAfxaihtUS8pMFMKrxSpEzTQuVq5drUFya7J8rWWX9A6mLkD1n21sK16RrVKrUKtMR8eYw4zVe4FgduDjTpmfp",
  "key14": "3sGBbXwQUXccFrJrwGUmESZ8kqvHicuNNDvMrzkFVQtwAFoMu6pbzYerZEcbcVn8QdK6gF3DqNNaxEvaTzv29ipN",
  "key15": "3RN8eSjvUqXQetdon5z89Rig9a7hXKutTCiV6VCKsKBoanM6KFZnEdRGHbuz2Lwo2Kok7mc2aKzBJuasMMCDj5kZ",
  "key16": "3PPF6u1Utho43rEZ7Cxi6f9DNLPRZ8EJXR7qQqVr3Eu49ULFey21cfygqZha11gU7ParfV6AQ42iKmfnGgaCaRCN",
  "key17": "xH2neYUuF59jyJ2fda7cEBvrUWuXQAaZ1P5JiK15NERBABXeRA4cV1LnPfiRhZ9d5Lxr5Ww1yjj5FajRStFGN1F",
  "key18": "4PG3HVwVPpsgNpRw3kKW322aHTbCfzDPYW2ATpr4nrRqcPTEDUXM3mZTi4NvtxTUKD5j5Z5acV7FZ9odJzKHgXfF",
  "key19": "2oueeMMQfvyCacjEvoUYLT785vEWCuGezwiUYE49HMGD7NzeD2CX9so8husHA6QVy7rbTmVSciMicEbgWoT4eAW7",
  "key20": "vHh3cK8B8TmrZbJR8twfFjh1niZcrWjTy2R6N8Tbwge2tsL8gMUSFKU3dv8NRv9pn3MCsgtgep8HYzmFAJkdn4m",
  "key21": "2rYkjSEEAFUKHnKEKiNoQSUgFaSBrU7WcxcfwiE6EumyqmzAJnqJkijCnjMUN8Ct65Wb9sdmdkYQXCPAwismZtes",
  "key22": "4SVLE2nEN1NLFDteKKVWez3v8JnsKRDradP8MqEE77r6c3Vo9hvaREQhAjKW83Ju2fxESiHWckSEZV7tzC7yFuDM",
  "key23": "4mKktAjZDbyVeTF2dLNar754gVRdMhvzxX9TBvxbciu3HdXZncBAvLdYwp2pNEzNPgmzWYnw5pDJMNinfeQdsMi1",
  "key24": "5HTw3QQFtbyMB2D6QGeDp2Q8KvMdBcpny3rs7bje8TvZm4ovHEig1YKcDgYDxDLdNJzS7ANmQQsiC41xkbvjcevy",
  "key25": "5QF7YxsJ14PytWFan96JVbTdqX7sG8q3Ly9Kr8oGMCrP4vSDTioySdkpy62xzrqEvfNLAM7HUcqQKLcdDPGNNL6M",
  "key26": "Ms6De9B7XtQydV9xaL2yGpGBCxeDPsKS6eyUUwnqPi7ipnhJ7WYGKVA5gYauK1RW34AmwfefV5z7Z6dd753djGH",
  "key27": "3bpwKvckDWMAHMRsm48D9gesQCWQMi6KzDi3dtSLrSwiU56HVcxPexqc2DfWh6ArbqYhjCZgpSnc7uGDPgG4ohsv",
  "key28": "5MNhz7SZSfsYJNyReK7sgJggYZbp4j8GDiZbeqTgXZP8V8Azzwf56R5odEr3mtyjPc2wrU1h8zWDpK4BL7gonT9U",
  "key29": "25m9e1atsg1uiSVNh2xYAYtj62yveXfupjTrLSztsiFFi3bamNVwjj4bXbvV1q2t9nmahezjBz4NwyxY3aeVLhq2",
  "key30": "3MjPREbGqhK1dkhsUuNBaJLPdPmEgffPjSnJQiz7J2y7rDnDKYNPdq8WtZqaX8y46y6DyKm1B1fqTW5yzn7caWs",
  "key31": "4t5ggksigjaMpKx7uQ4NN31QjW5cYieXPV5K7sLGraEZtVAmZHCMQ7tXFApK82fXQDL9EaktZR93CGyunSc9M86f",
  "key32": "GqT2R6i45QdX34pBPvDrdq8xMKWJWvaKZFh2A7Z58qgKJnPJCBSsD8uh8ucFj49kHq9SHSw1mnKKHKCZcCs8bSn",
  "key33": "5eVCWp5ofNvCPtj3NGni5YGPB8KVuTVPiENpwCdLXLXC2P718t7M2twhYrZee2ZcXKJa5nB3wvrSUX1j9TxgiGYS",
  "key34": "qt2GC8sVptxbko6V9BCKKjryL5gsmbxaXdvvZi3FNwVntNy1viTf9jeQzwtUZ2qFUcbTP7ps42t4MesiYM73bKr"
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
