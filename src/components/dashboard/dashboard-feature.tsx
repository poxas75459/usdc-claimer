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
    "2PUbDRcxSX8mUGstb1BTzkD8rcP7sfeXC2hjGXMk8XcKg58M7FqKgTQocxjnPRs9xjxgXzBRBkc2qYFhT4B2EKGq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DCwwXLqUAECpyiJtVHT9kp9edP14VAxtCqk4DST3VuCoUhBPAxDUSaJiXsrKukBMoAGaYj5fdfNUq7aJ3UGfhgq",
  "key1": "5gfHvAApfzj62f7L1jSMJRNq5Z6pbUSjFnzXo9gyzc4TFDhCwXkSVwxaEx3zRLmwLQvznmTJXe4N4pr3sGjsc6VJ",
  "key2": "5VgJHjTdzfN2EvyigpYwYU7wpJW8t4HzPpSfZxnRS3sMqX85zBnsabf8xYxK7Xh6kqAic1k4r4NoVW4VLmMH8ANj",
  "key3": "2CQJzTGKCLgA4S82WwaWWW1NNAaJCM3CAfCfAN24o5UyHSoKYetd2rgMW9ZSwZZ2fFhEF9beuW6tn2jkZVrjoSbC",
  "key4": "MULSNddhth8J6cbrkAzD7tceruqkBEECPhep4uQD6jymGELZepjVJTqGsz15rBFtyZpJsTeuJbtMdGhHVndiK2a",
  "key5": "9RdQ3RtPj1o8TQ9VNtztkCXKCVMRjbygFxkn5eGmbgP8SzevbSiaZfbwDsmAE9DKjZTSuQxcBU3buAi6YGrJF3b",
  "key6": "uboHB9kueq4aMq8MohUHqBtSKGQdphPNXgAmmdKBh6gnnUQQUFFDapzKdYmNzysxtVCTKhriqyCxtCJsaV4HHT6",
  "key7": "2xFC8K3P8qhMy4YauZetHF6BpMVLmagCRpBhegspRYYaMgtDuJneFhv2U7LcSinMhKTyD1yHpVBWheTEptEeT9P3",
  "key8": "2VLnjwk1eQWffhBAbB95rhbEQja1q85s8d2MhfkFYEzXyB2HXttDYXSgUR4UTenRBm88AsetLrHLQ968uh4c8VGN",
  "key9": "5pG6CnaMso8tMZUgPi23obLuvST7Cdk8pt1zokmA5WUHWRLGC6fH3irdREUrGxc4zanne17pCCqkuqmhjiKmbSb4",
  "key10": "4xSTGhEQu5brS9YueAWuZiKE8qLiKSBdenNLYkfMw9x4KeDnX3nk7dmYcQL7e7cdWpgbzwojnKRSKfTKYGbPBg4C",
  "key11": "3LYEmFWUh7bCatf3SLJC1ELKThjrNnCxbhqtvoTCzMjT4g9hRMFpFMTGZsCphChmM7cWD7HCtsZvm4EvWaSzuVzy",
  "key12": "64ZHhUJT2rqRCpSfyAkMoXSVnBbvRiUeg9MAEsVY1Rgj1VN3wJSePbAUFi21hkgmMFHxCW9DxazRTbXGYNHHCNZe",
  "key13": "5yEeS4yqUZaXmns312ZhCxApUQu6vp4j2C4NsgubHiyPusR6SkVhDvVA1AYMsV8LrebLHrywyanwaovjp4TnAhgt",
  "key14": "J5f3Ku4e2YzbV4vtY3AHrp6byaQf9FT3U5Z4LUxM29HYPh6ptBdE4N5zk7yanFpdziVkB6djmXuUjnLuXPWDTS8",
  "key15": "R1pCAq3Jnrbeq8DepKGFVhYLdLy6fvdvKQByAgoqX6GyjSfukxgWyogubZdiV6fsDBX46EJAjypWF7itAhQ4KLo",
  "key16": "2zpipBKqskKLFyqYWdaiy7jyVYXDJrKzXSZ2tEM8hXhYM7sn5Vgj4DsnuamkDLYNCWJnPz5RYooJhMzcZCBQpVV3",
  "key17": "485efWPMpKF3hCsvgWmzYN2ps6bobVPFC54BaSqjZn8wXf9Nw9bRw4ZRPGyZD5uVp219ui82PZCpJrvMnqdUNH81",
  "key18": "28oMYwfBVSSeEpvKNNnmJEgmQaSYTr3Yy1msWrUDKVk5xtXP8p2k6VxCA3U1eDsmeWmwMRWkuZneEAbzYXHaA6vh",
  "key19": "4GFhmrc2AZ3oja5agCUbU8pYhqAJM3jUVPqcVTQoQBn4akNaTeUwRh7iF8oBSccXBNgDgYGjsygeEeLJSrns4Qkf",
  "key20": "4RHe2RqNh68w37NZwiZmFJzHihNn9icrkM3x3BAYLABb2xSM1pDjozenkvUmc2YEjzAkhewWiXxYZdFepmyQ2kfp",
  "key21": "5yKfW2ZDsLm1JzezW84RHykVme5Ugc1a637s7LLDBXPdvj5Fd448wPLS196XVFu2x7keMBPb2U15qj8abUX9gThu",
  "key22": "N27E3XnEhRVcTsgjJgyrcS7kCRiLj8FUAXdX1irBeGdPWPZho7EnwjU8NA9D5KDjSba2Vy1cM4qqZB6Lq5zFoNa",
  "key23": "4N3GE75LM732wHzrCP97rTGkqV4dfQuAUkto1teezvrtbyoa79a68rqjDdnrMa8kgyXpL57tBEQTotMVCiN6hV1M",
  "key24": "3UXS8FFBTqjBRmfvRDfrVuLJj9Xt5mJTPTtn7X12m3LLP9AntPgfQE6puakDKo1Q2NqpXG4QjqtXaXNWWQ3bhhes",
  "key25": "3YCdEgZBxuWAGkZkthbSC2wFTUs9uMSpL5SJSvCZA4ReFGSRBzzRUesd4vL7PKPFtgZztnfLXJaxZ8fi6SZ1hG3y",
  "key26": "vWfDhtcQG8td4gLeiWh5goCEBEVxZuRPRPeYpfHWgs4gZ2B2NNa8DAEL96Rcn6nkgSz12vfiM8bsdMg98cVjFVe",
  "key27": "5TVqnw26eiYZkeq8fVzpw9EZLPzAqLiKvKp1QeQCzUHCSAQBAYBfyEk9UcNuhh5XXkbyqV3XbtDhAu8pR1DTFGqZ",
  "key28": "41gzKs5kRp4LvCSFfd6FjH2n1XdnjiFUWJiCDTuoBQ7fPrihx2HhL48MimYqP4hwUaeiHqXNxi7MjXXvNAdLiCtj",
  "key29": "5AB3zJCVFANBEGUeDhXdtfCiukVUbyd2csGkgztkmozfL6BbRpJU94G4dmDKovjcdi6LJjkH9k38aLD2T8FkTBKi",
  "key30": "25HihqX7mqYJnBa5FKPgEnouqNBwiXN86JJ8p8NN18gBbTpC6MH7bTMaZ5sef1sEJsM4MD4Ka8Doijgt8WXvSCpW",
  "key31": "66hpoxjUvy9MV22MACo1yRdNkJCoHSHUrcb1shLoLc4vViW2mP82uK4sXpbYMTqG8EQXYAxAoKXzvaAzgYw61cCL",
  "key32": "3tVEk2HvFoScrU9DNYiYGGxrVKCk9zaCaN4dTRyAeidJRVGsRJP968UBR46M3qe8Qd3sNq7RrQsgMgHBYQ7VAeXo",
  "key33": "3DxyubfniJaNuBJ2PKktPpyjC2RbwztA7yLrsrF4cihYsBsmxtHHjzB3BQ1ksH8L4gQ9mchPMyK7cuss8p5P3grq",
  "key34": "3bDgZ9YFH8NaH6ypdaPmp7oTPH2urjCN4b7JXg112UYarcxgVrnS8yk2F24A7QVcvgn4qcoBSsyuEH8BX3jXFpyd",
  "key35": "4hXZCFuKBxr34CYxZ4ryJFHFgoukmk9tYYgXN1XhZ1UiijN1jKA9Lv7X69JAzgFhuiseb9CqD3SS1R3LVy3J2vSK"
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
