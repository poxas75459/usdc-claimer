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
    "nX3QHD6V1XpiaokqxbbcTGqt5WHjT6b97k1xGzNfY46tHh6FZ5a7apWCkL8bSWTKh1LW2FNVEo2DnA53T1cuJ3K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JcTMLvqEpfCPxPcU9347eEqDTSgUM2SEqCQU6GGUzSYaDkrukZ6kt6Qhz9kvLL9bLXk4JKDt2DWpKaZYiA3XsTh",
  "key1": "53JaoYxNN1FGyQ1hbKHGogRyE9KEnWywggHZuLtegPrVoGobbwEjzhD4wbFkm2pnpYopnf6pmWwBeS94j3MYMWZK",
  "key2": "2tA3HZKoFR3bmxAAS22AVpadQWYc4nm8fit6zs5kd8axdU3uidCXm9eRfmYMb5ugBxo5jM8duTAD19UVCG6Pb1AB",
  "key3": "5t8JLCtRqSLfPXPi8AkWgLRZFLnECZivs42dpNvJbYR7v9rz13yQ18sLsqRhZ9Xxz8ts7VH26amm7UrUCSJ1UcqR",
  "key4": "2SsZWWfdbPfBDdvoSMTGTW9MZpCPfg7EbkG1ZieTDJEJ23wcYzD2ud5DDkxpErvNsXf8wniCmnYMCcyGJ7tJdmzW",
  "key5": "27wJbLZkLCQLCQ4dqsWGjfrXbZxicr53qdxuzmgrkpiL9HCjV1HiLXD9MbkfG2ei56Sfu4d8cAwX5xHZG1KFV2FW",
  "key6": "3YncA4ve7kPxZeGD8QukajExzSiDyrJDw9UstUUPcDLLHRoGvr55YDDL1uV5DU6F9pdqBE7Au3kHVxj1kA9SZSqx",
  "key7": "25P4TthBBzgARM7SiqHruHXURMb6g1xvoisr2NVsAqcTXrsNFyt2Kg6q39kX1vD9aXkHwfPcbCrbazg3ydBUuH6B",
  "key8": "DkDkUU73M7ktcys39RvKPQi3qWjtbLsjF7pC6Ac3vnUXshc9BQXBXMAxDnBHmddi5R185sQRu6kPg431CQkGjCJ",
  "key9": "4WdEtMsS9pE55Br7oRWuAwwn5bijcppB7CWRd4wR9kXtD7psMTYDVSMDmuai4byhAXV21kRGrMvpsP6Szrcbd1H6",
  "key10": "3jKFeyxo3KHbgmVP9gcH5tNB4LLDRBRPtgzTqXVZUMJKHTAQs6kYVZrekD9ynnGYwHM1DK1u4XBb9oMCZoftZv9",
  "key11": "2A4ArgJm9cXBqENqoMtXtBJxGu4vihxRLyz99aekPCpYR4d3y9BXyheJWsAQFqbZBEu8yAcoYExoJBzDXaVRjJcy",
  "key12": "U3QAoFvU5xXMpJykFLPg15TWTKGipBs7LmwXGJahePVuqGu37y5j7xiDtGe7kTDb5RWmjm56EkCZLCW8UzKfzx5",
  "key13": "5UyakXFkvQrqAgoRoXyLCB9XxK7B6Uc6PtrH9TbSSY1VsNXRXbUYNicRPztjqYn71WtN9kQp88Aa1nw5esCmsaXN",
  "key14": "4JQjjm71W1NL29AFRoWZBQTweNHgvaKEFoEbNdyeLxwZVYkGYtX3xnknUv5cGFhjaPzu2c7aPXgrFXsezY33VGwz",
  "key15": "n5MrCpYt9nnuDqqHfrUebDGhK4deDwEB25Wze47YSvdrFtui6zCEfTFLgTTCU2tkmr12dxib6BPhsKFg2HEbidT",
  "key16": "4Cu1dxSkP94RpPUiBwt1CjpU6tMMwkGaDfm1vKrPAYVXeKHvxRXK3VHg5Cmn8wAYKmw3yqS9sYry6kVqJtWPuV57",
  "key17": "5MCRhS4uSziVTfSxAtarW7txoPwMaeSwRMh5QgGncUC4bnZvnYog14nJ2NNanK9qccxP64252zD674ncLGq6iprf",
  "key18": "fok5ZtUfFuTSkgdG9ouDHJfuHc78zJ6n8KczV7ybv5BHRAorFaQaU9sHQBTJuNYf4GtWSfgCEaoBKGGTx7oni4E",
  "key19": "4uFtKWLPjoBGD1hm32w5tu9PyHc2WPL4Eupo7MA18pZqrsYX3gxBG5gkZM4sL3aNuUFA5jfu5yCn9yZTebaZxozR",
  "key20": "bLnfJqPANk7EFo6u1jThCSEPpoF4sDvURCxXH6s7J421YVigixeV7i953TRrxLJkRXiRbPkzaW62pXJAAvdC3JD",
  "key21": "LuWSeHQDkug8a98nHfbRYGszzUzWeebqRr4hcoMhL26YtPdSExXwWZXxJ5TTYoMmM51tNbUBvS2bzFKoY1MVeXm",
  "key22": "7qDwtb6D9g1jBjWpzSq44CPYSSK5sVCMEiZzhxD6NjRRtHJhMMLYeezgm2Rp3yjin3UEYXVqDmfsc2oQc5fFpi1",
  "key23": "CTru8UsGNzKPCbBHoqAtrhqjqZpgCykuuDcRvLQUCHEJPsfHG7nDa8u1vqn585WJ3KnS1Vd6N7sX1oWt5zmKvyc",
  "key24": "4yED1NhkxW9qJzjzR5fckPbY6pBBhzfRGuoMqJnVMvGhamkJtjVXS3GGFYyw7FgLeEWK1XV8Rsz41GYUEqR4Epk5",
  "key25": "2bwDNBgnNQNtb9MRyUZY7ovTgeU7PqGPvN1LToN2EkEszcQj1W8VAcgQCzJivpxhz39YVQPCxSxCoNReHhGMcVo1",
  "key26": "5AFkbdrDboCb1MzDdCBUFoJYpoBJfGEhNwsyvJTBU9HGfHJ5LLo2hA8riLR6Jwkn2zp7UKiAT6paXjLizJ21K1VH",
  "key27": "42SMeCuBYXsMNkHbCowaPixtdaqRKott8X9JffLvHN1XG2UMyrA6CoW78rhxQXF5mytaWXAJ61Ekt1LuhLRFfyY",
  "key28": "5pvSF8gSHMhnpcUY664JCHUwCDWzSopYgxHVuWB8MkxuLxj3EQn4KjxsjDnJc8faPiKBAPdC6nUoEio7ufkAhjA6",
  "key29": "4WE6qMq7T7kBHSmyGEihZEpfki9uhiYgbsS6LmMjCRFZGes4zjNjuhkb1bwhdByxMT4vJixYU7uo66XNjSaH9ssf"
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
