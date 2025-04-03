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
    "3AHzAGiR3NbA7ompSw9kfnE15kDpLT7AuMvpdUssXAaQ8HnECtkqHcnVr6ynzuVQpaJWKHXLhtfnNgdfkstRD56U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YXkaNJcSxi55efLKESeVh3nGRVWmTWvFuHwtJ9J8q7a7Tfm2H2BRFsorAFDNsFwe3hZmQN8CVHNMBPZnYQ7kqGJ",
  "key1": "5KniNCsPL1dFrXedqG8NDquWsg4tGttNin9gdN2G8yTwt8j61bXiYKQuy8YhDpJQVqE6KcMqF3q6eejPSiiMKFeK",
  "key2": "C5txjw6F6NVe9L2RdTWjvQRAxEFr7vaGe7M1ESG98SaGCffi7PLgbhUu7w7rHorjFr51b73S1znq4tEmroYTuna",
  "key3": "A6Q7MKX8Rp3LQ6CTAVRKF6kDH8YSCrUFqnBhkEMg2PPAoEctBoNgiFLfocpW2Hqc2KNhY4nUoAUai1B8iVDfGsh",
  "key4": "5GXSSAQXFm77gGHbPxYByZEqPEk6fKfooMwnwXBCfWnZuzNU2MqQMjXxNXrX2z9ANMiss7vUkbenQd7K4T5wgZYD",
  "key5": "5uEuzjLe8jiwEM6xudsTGRhjJrwSN8nsF5W86HzQnhuNQdNJWaHHAQ1APGZoCSnBzQNsHZaTRoNR88YPCBqcTwRf",
  "key6": "5H7rEZ8sKgtTkESVmPaPJPDq5dntTpZDgyZEUPzRAqBga6F1k3roFKAEgHvgTGTN6ztDKaB4HbFZpFQvn8Ry8gMq",
  "key7": "HQe2ugs9dKPUezVjGWrQ8jQAhquqeSdt3xVAJdvAX9vsQnVh3UCS8ZB4JqZKV9YWFGXfVfo7yVPga9o47VAWh5o",
  "key8": "3oJYLXYBXqoQVenETNHsU2QGrMvtbesvY3oCHbKCEpdUrvktHBwBmqtSqe1v9ENEnCfcw1J8xaBResJr33rxMPU8",
  "key9": "GzMjqcnaM9xrQtyNdm68mB3tt5Lyyf5M6pGK1CqVe6yaTz2jFYPWRUCTMscoN6EKhzCdH59uybJDYs3aUkhaRgw",
  "key10": "4JEFiqfTtXEGucBNzYPYb47Ys9e9KZJ7ZmKnR5uhWZFNfYo6HzYNUfkrEmm9oFTKtiDAqAedrbU4uZroSk7aogJm",
  "key11": "2d3UaboDntabkNicryJtvKtf6S31pAGXTLDv75cCkuymPqeUQ227g5Uqo7oQsa4vXyhbAwCBZr19YxNJhS55svT7",
  "key12": "5cZpiXniEjRBL6uVBuG7MgoexCuHwS7kYEPL8D4iLPSnd8riFri3VqYA1y8akRC7BVVPNM9h129MEGrf2mB5YiMg",
  "key13": "3V4MxMjUxUo7DLm6HMrsVuWiU4kDoFXoFRrmjbW3m3W8ayZkL4bLqQb75bcxgKbciyCA1f68xMZS79GEtMFzgzR1",
  "key14": "5xA89X7oQzA6kcCQuo9fLeHVPJVLdPkk9icH3MC4zTz1yEgxs3Q5VN3UDjLAiAKMk1rUBCebTEaHLPgkv96LrakX",
  "key15": "WCTSCxHXbxkQikkEfmhAfAK3cY1qyScY3udxtYPMxXJXynReLu4jLCngai27CksjoaErx1WaZ3AtXzBTyTE1B2g",
  "key16": "THXKFyyQQovU7YxYqcwi2q5c3wAjfp2n2YMZy8wyYp8Eq49FKqbtwPrHW2r6Cx4EwbGcRwP4PKRngUtkMyDxz3V",
  "key17": "4RSJmbYAATbrMGH81ZYNK78CrL6M1nG2dHStPA5mZdAjKZkQ9DjY2dY5W5wRRELnP2XmRQ88wjMtX74dLpJ3G1WH",
  "key18": "3FpX6k57J9qV9NDyDMdADKBGBRyxa2cpYEuRccpsnzTjnh4fATGRJYLZqh8haLvM3qhSMh5dmK3AdKaZ3vuHCD6A",
  "key19": "4TtwquCTfxrBGjUAW49bk2vFWAdW5Cd6cubDiwWr8VnjkucD2G4CuEosKWj7T3VnKwC9g5F8iuqFdJ4jTQbwYM3X",
  "key20": "Uh1watZMqwX51yytqRUzY1Kwcf6GnEL5kxRqNZBtDL4g4Y4gXcFTTaJUja7kfA2nqzzgqwtpAPBDLSaz2w4FiTv",
  "key21": "VFwEAnCBS5AqFpdaJTAHdaAHqrGewwuXRXBD9ZoxrTyjG9F1vEShNZuEvSnXopXL3RsXXfoRZFfDhby1Rof3yYz",
  "key22": "5GDy2FqtXwhZmbU3YWweLgNzQjxoE7rT8iwg7os85aPr5wqv5YSMzUm6qAs9h5pu2p7ETSi4jzMRFMrZgMyYoXy7",
  "key23": "3kh9iNixshCUUwrE711h8wYhwZsS29hrLC5Ear6nGUXnv68f2FHx9RSi5k9zD9hW6cUczDmHTbWj8XUbMina11hv",
  "key24": "2xEEBhk73k3No8iY3WXkswDV21HfAYRMeZZuau37cJRjfLWuTQ8cWgFB74agPGLW3c7fTKgJHr4wadbVTHwUw2KU",
  "key25": "2FJ2RwkxwCKiGjrp5reXdi8NYkcmhUg8iDsoTmGzDn4dL6mwjC4QwFTFmLfVA5CRGFLNCw1aVMcj9QVepdra1ceb",
  "key26": "2DdEacBMELSy2a3F5Qf3PYGvknqbYWntYmtd9Q8NFWGUoB1899ntQuYjBi8brRyXihAcyyNBjroZ47KNdqmgHhMM",
  "key27": "4syniRVtzfBd7CeDNE4gvN3yGWtoakhyc42kA5XYcAMcBwDmXnBzUv3x2SsM7MGpAnWR76dKPEm2w8tWD9jaB1Qo",
  "key28": "3ddYVqMuqhRitgkpSnUY6v4vgTzj4521rK4DAdE642wkU9iBHXnYBQMrdmPkq5xpZ8RhbwpdNj44d3DP4GdtreZe",
  "key29": "2ADtCMpftqphPzXkUMwLYrx2NUVgE9ALrYHsVjCKn5mXinKJU6TdCKvKM3kERDixXMhXdStpBNvVwXMcuTmbGzB3",
  "key30": "avqedvKVk2k8oB1HhaGao23Bfvd8gknjhp1v77Jw7tfofZUqsh4SY4PPHdhxbosUjjZXx7G4zubjFEN9BoxavnA",
  "key31": "2VwnqUajtdKoV6PdM9hZPjJjQtBHCQXLWkV757xBR8nzaPUkqYvC7SEqssXV6Wwyc9mZuunba9JKbcxcjfBnrJwq",
  "key32": "4NaARy6hzYanzH3ZSit4Ut1tM8cmBSm4vGrPyhQSGDtAGy1KDPVt2qqgokPJ5HSqwJE7EoEgKBdtmF2Kgz86SeEH",
  "key33": "4ZQxNzzUeU1LM8UjyazGuSE8ZS9ZQNgLVCv4GC5XXdmAzw4uZ2guud7ExvymUrDoKM4YuKLoqAfkxqjmELrx3nC1",
  "key34": "2soe1U3ZTjLKEMfDsmDVPfp1xdFbaQfQAh1qr9rhT2cvrj9cvrTPLqQVmShsEuDBmwvFijqou2TCZVZPu9LzUXRn",
  "key35": "4iNvcuMU6ZgKnvFC2r6fcC1rNrnT9ig7QQKj5jjBTFXV3X2ngsLRoD8QLSiRK8wrPZLc3VRjwa8kM5ZNHD3VYahD",
  "key36": "49FrctSBfKp75pYtdsoC5wEDUkp79nJ6jY2mDh5xdGUCqXa5nmHuZeeSkooQRFB7MvnA9CeqkX7dVGGZAEKFvNaK",
  "key37": "zdtBjd5CJ9Vqn9UNGRDMSLG4nsVyR2XKcKH9KNnyFr91Hf69e2Yu968YdwAhi7yzWQ3e6xC3RL19QiM18f13UXJ"
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
