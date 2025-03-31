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
    "23wFAhTw3r5i6Q2E8Nh2cUg7bwLUkJsJpmyFTTkukcnYEKf6MbAwJowBa2LhDTQ7FxhC51xiJfBH4N8T9UbMkw6k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iNDCnrvQUBRaRu8jDHwDPkp91UXQhUzzu6d3uKWEgattU3kTzqewifPWqVb13btnEu26uDUUyztymPBc82J6gHk",
  "key1": "4xgF2s3bsfcY6CHxkapTfvzn3XajXjZE8uwL96S83ahk4wvN1fpFerMrtbGZBLnhWNZrwV6ZE8jBWxmroFDFPQaS",
  "key2": "46uXHRRVsZAMnbyzt4mrqDB5aAKJErbhsqt6vLoiQAczKnowwwVRuZMb15SCm1Gyn3CoMCpW7RjNLHZMSSSjzQAy",
  "key3": "2GktGJUMJntpUfRvW8i4t2wEbjsiBqNT9CukZ6ptaFVkm3c9pV4wMhgcqenBDr8pdQ9Kd9qKWeWUqDUGfNu6bD1h",
  "key4": "31tw3izCeZFAYTqM44xZ9uCo4GyaCkdC3T6mtA4PYuSDJqh31m5S3kRHfTvz6cxN3qtoKm85xNbGRUb9atkNev5r",
  "key5": "3STazTkYgx7iW67yZW49F4AWGK1fo1gwuR3zqunY4M8vjX9ef16uEyQsNeKQDyzEhYq78mpDd7f3gxHvxVmBkes2",
  "key6": "4fhaTDCDQ2p22Y26pFZy9Vw2XXMKL2VWiSQx3vMeoQ6CZkY842X1DfTMNfo4rHBrbKicnNk9WrhwLc4fbxeoZUx4",
  "key7": "3ukn8RdSBnU56s5BPV35gRxhw36DrP2xiHLLjLhEexfkDQyJKwxBwAUeeEaKFruYPjvY1UL1hVd7nTf7fV9k6MqA",
  "key8": "39WrRfbSwbL2gqAHBuFs174i7nLi4ECKvov3H4sFzPqefRqvPCsmjFWtHi2c9JW5vykMCczVqyhbSABypeCsDUgt",
  "key9": "9GCQvfkatQbrdkCQ7jBPKmJZmF7jcsd97nR8ToHsir4sa9FLCoTpA4t5ceGXJ96ke53RmF3mra7NMuYWVLd2S3S",
  "key10": "3EFbUPkbPfLHpsLGaYUuZgQxp1GbXqPRemgQ2xs8Zfp1bn32xR9SJ18Gbm5CRyM2XWQ5KnUJ4TeAoWmGopqXc5gQ",
  "key11": "VXkAgEWLkbAh3ihSrJ3aH3kgrcHMGomH7eQxxh3fS5ucEbtVwDroGbVZWDgo5UoNW4fKhmf5yayv4GKV9xRARQg",
  "key12": "5h3AuV4NgKSdsdxrf71y7TzfdJE5T7znb6nghnn5YuuiiAM5AaKYuKVc5C6qUrgDBVzwpnSj5x2ffqApL4o426rV",
  "key13": "cLbYfg8L5zpVwCGhf1nir4P1YaTy54rq7UcEs1WLamwHn1M7a3WKmsxPtay4PPQFFC5P5r3yoXZcHyDE8tSTf27",
  "key14": "3w7qMLNtiTmryPAZQF4YGLKb6LZRo1GMQapXeBAL17fkstrxbcK9H8Lm8Gk4L4H6J7U66M1BFxpjMYHGvmLjUrc3",
  "key15": "61orohYLaY5eHrQLt27ATBZW9myjNvc5HYv3SRXp36cYKPNa4SJfXuHj85rW5cBhLuA8wBoPAGhW84teiAWCtzU1",
  "key16": "2yVSNhwfuQg5LQuWGdFxL7DcaCTkCU4cjyNieHxufv9Z7odYhfT2rW599GXE9n1Tm5ir4R1H5NR61catrpfHuP4q",
  "key17": "4om9dmapiyAYFN8fNjgMkCEE88b3eyMcPHRHnmFnjHNoogsjvZj6V5pL2r8fN9nwtPNkQgnC9bDuNkHAYnDKi2C4",
  "key18": "5rdoErFoUssx1LTp36QfMpL3xacTv1mZfQFMaui3YAguNZbTE9MQdEBDbQyzkKMze9RuX2QhP99zGd9375V87EAh",
  "key19": "4EQQYA1HH2ftx2awEQ42RAwHJQVcWD53HP3yzQCQtbUw5g6wM9L3GRJgSCGoRrkjUt6PbqCo9TZfNCRg1tYuBHRm",
  "key20": "2bTP78TpCFBYGEMfF6ByDbhiMimtE5PQ1ZALN6eGAj1uNbkkJyc9b7q9r1u3wEwcMnu9332CmUpZcdZr9e45qbJ8",
  "key21": "wz7nqaB8iwYezFGKFtQjtvVHYDGySKB4mWzeVnF5jLvfNsVyFwJK8Y6dY1abLvCGTGEPCA4C4PeZk4466Cu68EF",
  "key22": "kz4H9QMKiXG25kgs9oqtfE1pTguM67572RLCn2Xghq4wp6cKZznnTgeV1zoCYYBvjg8fxeKtXmg6msvzTKg6L6E",
  "key23": "54ch2vAUB7btDz1DpS7E4Ue7T5RNYLC54pqxS6hq9MzYPeAZic43vhjqSk7b52eXfqTtLcdhpy7jpLjpxCtmUdqq",
  "key24": "4M5gX91J9q1xHiLPk1WtWypoxsUPrS72DN6GaLDGuC5D9pB2rHg7Yy7T9R9Ng4cybwUDDUpBSp9e4FQqK9yYzv9C",
  "key25": "1251Td5RGnH2SfXYL48EHbZWBkt26XYTzRPLg8YMy3Br2cbzXCVPUB14mhD5aTKvuJrSFcgBQdxrdkz9uJ5DaNL9",
  "key26": "3ArfjmaGv9tnmSyjhUrGjAZHFimJPfM1GXY2JBjYHGxXkHn5CVmip1LFRHgUkBbi9oMrCFDbWhT39eixZ1WfgJZ3",
  "key27": "648oZv9pcNxmWwDgwPrPriu3Lgz7XJD32fW2w4jSwxZCxHdFX7DtezkAFEaH88aPABnZyL454dKnfBTTDAwbig8k"
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
