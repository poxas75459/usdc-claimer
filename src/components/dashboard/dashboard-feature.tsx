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
    "2a4AgpE7kFZ5akCSX1Ev7XCHrJxTgmuzvLhVw3er9UdUibGqapumWVFEn2Ab56NqsU1rotMjSgZXgvNqyZadCzP6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JUaYzMufVgdPTRMwrbTXd41BkpNqGPgDBnmHEtRC3nzrrDzdNosGmMSCv3GgjnKPn2wmoXMrH8gKwjoU5FDzzQA",
  "key1": "5aBjf9K26NGSVKEGCNp8rBZvQ2NREU5FsUeBhqUPiy2GVZVqWGAiyfAc3V7DyuwCDQhqncPfVqK9PDJUkP2BoSR8",
  "key2": "2dKCs4mG1Knx8KWF1ApWzZBucwGeGWYcnNfMhT6CtB7G7FvehGaUX9A2ouYCwedXWw7KHpzYannPYoxmrRE776Gn",
  "key3": "fPUCF4bdbm4RpcdchUXeXkywoncRyqaLPq1DNFgEJ4vxahz6TArrRycNeXtq2im1xUDhQw8wacEL7H3ohBfVDAQ",
  "key4": "2nGrk4MMoQBC1R6D9PcmzG6SykQvm5HGwL1wjhLESVREn8Z4UueaggoqmoWfpB8BhL3rQxSuB7Y4jaBRm626Ezgb",
  "key5": "48NK6s1ApUzyyUqLkdd3CwaFFmYvc1XLVdeVwYa6eQ1P7zqa4x8WPdh4JaqGNxSGJm1VB2FFQJYGFCN1HbxWH1xU",
  "key6": "2ZFTUqbR4tpkyv2vmuWUzc7AqBwGLQiLzfAmmzurphmbDjJgrTpT7MhZrBMpUy3S2p26UJNbfvF7TVbTrLABjzeJ",
  "key7": "sXeQoXoNPXcUYctMet9J4VEd6kd9HFYgDNrfuGLPNCb9HZxRSoM1cQFwq2rMj4XzAz5qhLbnxKvDz4xApUkFWeT",
  "key8": "3bF6kWz3NpNxEPfETTGEWMVC4hNmr37y5Krd69YrCdYAkSqo42sNRXZNZd8xXAqTptWTjnkapeoRDFATmryFkDcs",
  "key9": "5obsgPEho6U2BiiareWQ5GmQHk5b7rfKBaucuezWRn4ZHtisHEvTBKkRdvqGZF9w76qdvitZGurK5zDwSKPZGzw9",
  "key10": "AvUjBvV2QQWWnN8morhTTFGFRG6g41yx5LfLtERRvyk9uJCdUYAut1fyF3Nr5nJ3yccMdYRcjm36jqMasR8rDXn",
  "key11": "5p3JvaPCZpNLRYD1ikzYHsBevS7WcRTQ352pGfReWW99cXN9ZRMQEgx6ytNK3APEKP7bwXFYRVa2FymX2jnnssLG",
  "key12": "yecmU23MYPekqmyoyYYyTLL7nzoun8k5EpjaSx6F6YCDBvUhFWUeoum4E4uK9ujYQRjU3iLqVw1x1FgqEJ63pmX",
  "key13": "5DRHaKbkTJUBCEyw5eto2Y8n6pMQLGLR5CtURocXmsUHjbq75McsdewFxkErMgjsqvs7SqEdB4KRpMgY1SZbGwj5",
  "key14": "4xFb2dckySK92jyz2Wzizbf75oM2kuy5SxYNHMAhd3Mz5P55QKbPf1mHqUbJErd16B5Lx5xRs5c2AMzJqj8JEeTu",
  "key15": "24tszFncsX3r482Qxu4sDzKbRYqaXpc9P4xHVDLgCk3u4nseeWjYAXCn6SZL1YouyiPjSUMA6zvNbqjAX2dngXL7",
  "key16": "4ygjgHfZSbYHFF37ezeLWZw4dnfWsTErZGFtU2Vf6qEan1AGxVqBMBA5YTV9K3dzzNdkBWi6TT6VoNb9HWUPPSEJ",
  "key17": "2u9M1vktKbAZBBhXsc5ZrEct4HZGfTpEbArPEV87r32QFgH4dHzN3pqnP5TwrLimobpAo8GMUkEgAKfMxcNAFNV6",
  "key18": "54xafdCLc87fH9vxDv1zh7vdB5LV7Dc61E8PymqBixQnQRWSsTR4tnSoBGNBaCuZNPyjNYqVBuJKSqEwMWQJB4TX",
  "key19": "4gmHpEoTo55h5KUKuF6Fpr92YX3hpQF5hKoAEwiWDJzMkwGZEaL3DRW1aKVvEKAwXwFKv7jp96WFn1jYMAxEX1RY",
  "key20": "5x9QAh8Bwu3B6PWPjV6wXyELGhEWwZfpGy88LMKy335tLjyT36wQcj7tinFyv9ZnCpJ99kDJ1NQKFkJGSUffCqgd",
  "key21": "szPxi4cWJ34joZPo2b8B2g76S3t6g3v4nPwiiHJL5q7d3MN5FScKLx5TGQmkFkLsGzYmG9DpJUvZKA7FGdx1TCm",
  "key22": "hN3TtQ6KAcgLuu2uuLZ7Uab7S1UfSDMfGLGeQkFVkX9QNn87qE1xacyegQQ1tbyW49gSRuyKQA5RwKCWNd9o8K1",
  "key23": "34UQGfWfWhfnWb3mZEcygHcFsK3V7sg1DYM7X2tdoCwTumR4u9hjoSWrMQ9brbrWQxcwqaairTXgdUv976F82SA",
  "key24": "DTfTdPyPEheLb3L4p1LoPLE9VfJYUtPeEwjL6PtVDkWTqhkksAJa16Hu1XvwGJs89apGksYjJCRd4naNTxm6jq3",
  "key25": "5mESgGJV8SyFxL48mZQdrVZ3NWwbagJRRfq9vBgvpdvBYHjtTJhmheYY7mohso9Z7K1A2cDzY1ijPK5nG29c3GNp",
  "key26": "4RN4tgNeufFWVp3Gic2yq9CcpMv3RxNtCkgubiGDZV54Brskt6mCXXRgBHHs6mcbmRGL16LGGwoA48kvMMy2rTmn",
  "key27": "3kXdAZtV2okYXfNjdjJJV8Zwyc92FXNua1ew3jFgMDsssoJQAeddPHVfzauJhfeXixcvqPGXPsSi3S4KP4pXFyB",
  "key28": "3UARfEFsuq9VXsDp6YEZoKTBuV4cucsKHaf14V1ZofXuafyC8AqYzic123UWWuQPd88K4nJ3jJ1z3rBRXjHj3D6G"
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
