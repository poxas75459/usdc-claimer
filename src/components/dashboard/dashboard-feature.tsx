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
    "XqCxnffuAWfQaAhU8c6mSDgpV5sDTJvX14YJAYSRTivQgBQXWM5BHzFg9VhLFGHrtfrmFvWQWW2Jc6FVxPrXEX3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qY2vMn4d56Sz5zU6TTzLo22Z5rLaHSnkhgFpwuLJeqzGRrhvSbYR7rZ4LkRwEg4hrkRNcPvLaxPbiF7hYSCVtSy",
  "key1": "5bJLRuXB6d83pPq9giv7h2q8cLYGZpBDpTsxuk7rv2Dgakz16FQ5NUhCYBUdoG4aWDtqUYVtCqbjqmeqZWDt9mx8",
  "key2": "5vdaqGwpqSwczFukDYxyjgNWeo3oYVHTjQ21QNEo1vx46DUEoE5tBLEA4zQzSRJVSfavXztBGnArNNG5gSfbarpv",
  "key3": "2cpKrzsdkVV2JWhHfdQJjvupjVveQFFtSFHhyTKffGwP35vQFwMzfYtxQvJ3DMoP1TZxk9y7V4hz2rEpxGLG4Yua",
  "key4": "31szrcwXki9r7EMKcPFKve1AL5QLkymaCvbLnssZPNsnPneBXarxbfXmbrrz77HUG2Cm4EPPz41UPjfeCQMakKN8",
  "key5": "5et8AWXqsZxNg4Puvs46N4VzqW4vE8cUofAs2fcrejFeRWPvdEyZvSHs5ddh9oMHjvYwMUFxHF6gkyeB5PG4GvV6",
  "key6": "3oaXPji7Y7hZuhNwuAmEcHqeVUGZmpgJworRomhjNQ99HNLi5DfDaP1AX1dBbSiQGMDxjbtGMK7s3JH15eWkqefM",
  "key7": "43ZNW4bNKjNvmmL6VoMVXMYkrgb2bDFcAf4rQKWsUuecbvqGb1TJUFvpBSWKz3AKRyVCp18L5svWdd8HrcdvrkRb",
  "key8": "ZRLFB7x96rsoYYJ4iFYjyqhDU4nLvwUABccR9HXf1c4Tsyv3QWH9VaWManavLhG4sgjSmRoyGAiDWhdu9Y94Wo6",
  "key9": "2qEM33kiimy9LZqr6ZeEuqLwyYuwnzd1CEUgcqobjyEA9XVYoTFJuHJSTvMRdPgYLXhL5S97a5tyuVcXDrRocNei",
  "key10": "2BdafF7cEDKNgJJa8N9SEpNPK6r1VdqZ1RH2wMoAejCkMpJTp2w4ERG4c9oSJE1oLXofaQ2cBRXPMWJLLGYZyeGv",
  "key11": "4grzjEjwBHpqtMRp762kqD99MeaaZccUJU6x3xnrKFdk7X8piN1DxaobLck1tv52mCnNcXzqrGzdsfuFVvpU3YCj",
  "key12": "3DGnDdSfJoGtaKsBsz2QRb38nGGynfqNsF2q5aFTFcK2Goo92KitdTy1ht2HCweG9WcjVsTpuAutJBmaUcNXqfR8",
  "key13": "42H33ATq2tLnW8VJArBrMxAEPDx3rQv4Do1EdXufqMbzL6pbzTpobgb6tKa4GK1WALUQoKtd1kPFr4pRogDNKagE",
  "key14": "4x6ZZPzjLQR8XKCzUNgknpZVsvyVTEUAqkXJAdtDDhBHoBaQwSRL3SeBpvc65qSxLKEi7PDcxcvYyBD4H8j1FgK",
  "key15": "4qZPhcsD5YxuFhj3odibrYLsZq5GENxHbLH5Ff42uwHwLJmjdNJV89xbc4BvQ8pqVwHRcAaZSbGiraPy1eZ9WgUz",
  "key16": "3evwoKd4gN4wmswv9QCKyYEhEFiKrz74rGXMo4Csa33SQDcRYVydWq8VNCW7vFQ7CH7efpRvqsRZQxXJG1ug875L",
  "key17": "jjkoYdzBbH9T6UXAHYaqgGMA3z3H7MWTBxFh6evc4YdA2tysP74tBPtNNHLcE2a67qrur8qPagfPwRimfD4rv7u",
  "key18": "3fnrdVagf4w2ARBJff5WuayTH9ub5uwnBeuSNakB7UfMrHCfCP5JgS7D1kYDQfMwPcJHQvFxNBMBkQpA1VXuzQER",
  "key19": "4f9EMxzuQgzdNX2fPg1FKdW9TbS681C1GF1vWs8Uivvhi9Jb9LuKSrHfZMXmJdgdZcjSRTYS6eQhAfPKxQqZregv",
  "key20": "2SjDC61Fw4ushuCz8SeWMC62Uns9aQARomJh6jjma9ySHv2z4bujHX2G7315bvhbXRv4khtCLNXJEoWEurm3iEUs",
  "key21": "8q1g9cvAwUMeTMkXRLV5swAUPd9anRkW5nzFCWju3ui8zQRZMEwPYGcNNXdnC3Px539pSMsTy6bUfNB4PCjGi1s",
  "key22": "3PFeU9ek39tr37XKt26qscmhRsF498MRHKxqdasgjEEmpFhuZjgDsFhmYsPjxvxVZAX2uoGC1Mi5bFFNRDuKcMcM",
  "key23": "457bm992ryDyFZgUNhL7gGFRqtombZTpUBkYNxjriLRupNiu3vYX4ixSu5nnSwayVTGx1dLRoUwThJ1wjTBQGmip",
  "key24": "45XrFAN5koVsb8JJdQM3ENugV2hRcX7kYC7AFkqor2FWWEYM7pXAP34NcHayB4UGU4m1X5VmF9Xy74X3v6VT9qiH",
  "key25": "3ciwD5x1pEYCBmngR9nrpeQXwMwbgFQWQRKkhbWM4s9WrqRbRBtSFrRSWwpYJxVckgKvY6w6ZE3Nrir9dSjE8sPc",
  "key26": "4Y4D19eX6i86ffoggGCa6etksg7o8BhoDQKoEVaUL4dw2YSg33ELPoNYKVP4RAgwq6UDskAdxUBnfm7ErMSGa2r3",
  "key27": "3owtzoVBEgABSgh7mBCG31RN6FtvRxBzrrBjGa5GP7LrBukSve5AJBJeNp2DbpxbJmDbPhbs64bkdKEkXsiGNSfp",
  "key28": "2F624vqAbWnjzxfVpCjJck8xcVoWFuPituH5aVturC1hdLXNcUAjsp69Xtp5mxExTp3KnzcNLKnHcX16ptn9MmoZ",
  "key29": "3S6Bgxvhgk1tyenMft6jGNrcQqqEKyv3FfTpHipnQgd3Cf5dz52e4q21eJXt7xobg9jFQAGnzAbEe9KDfLbZtD6a",
  "key30": "2pAnY6GzqQjtJWrhoixao8iFJDSVDfAL77a7rKU6WWuitSdhcGg6Qnj3vpsCFJTiHMTrY7WVdEY5MAV319zqQnhf",
  "key31": "5Wm3Dh7Bs4kZ3b79TFWh6o3Hu4aK1p6GU7nDKnbYPmgRA5U8tHgxJbvpLwVMFHzwUttdrgXFyRJHNhGcshzX5b7d",
  "key32": "4BxqRTwe8airxedP6ggCafPvDaL5bkdGVdYszCid1z4ikZUbWG1WNuC6FZqzXt3rbZjTjJ9JMQtELNfHxncKfuXH"
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
