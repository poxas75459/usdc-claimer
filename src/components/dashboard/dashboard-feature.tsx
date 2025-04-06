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
    "2XMQtCXYz4hJXTy9uvqDVUYAvg4qC8VFwxg6kYG2Tszd6Vk7RStCw5FhdpBgY5j1qigHNWc78SQSm2bgLocbEtkE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NFBQHerVWfHKMPUKigm66rN8ge4sBDwixL3q8VbXL85Vcsc9MyLVNUpERx7KR6XLDyU5wPmnMTp2sJboEV4aZQ8",
  "key1": "jLD7NbVWxgDwR4PyHPcncAe7rc4nT9yPD7H7yMzVRP3x1aHR2AV8MqrQ7tRsmNobR5YioYkxqnTNy2Lpq7xkKYz",
  "key2": "42RdwApshyXS1HQH8avR9VqzA6eu61kffWMA9gQcpVVE3tL3Dw3At2Rn9SxAZCpuFCTRGeNebjT6jmAhf797PLmb",
  "key3": "5gbTMhfzJ8pBNnAw17E4Tu5jg5PePZbVFq2qy21PiQTYRRphe1EtGQzVKQbgCubteaXRJr7eBknNooT6htzB17K9",
  "key4": "2g5FvFyomTQ8KpuMo42D8FxXqbRndn7cZYgBc65irGp466BuMLt2Un8Mf4ZwJtVveujgnCdmudBRLZr2U9JHBmfc",
  "key5": "2gzNGtYA7C8etigvzwJQdbbUfvNeJ7T42ahexcRUWv1zfRM1azELxrYTuaMrSJJS2QJ6vAj9R2Lg36bijPeBhG7g",
  "key6": "3XHQAhN9qCRcsw3LM88m4dpPxfzjTw116vKchG6AcVxaMW98eCmVD6GsN8nsWFDAUh29AT8GZitMiGFe6Tapb9pM",
  "key7": "2MHMxHvu5KYDcxxRYkvPkPPQ1nBqMEtVVUHpXieYkXdYnggQmXYNibMcQxZWTmUCL86XAGCzySM1HWB9a3vSCcWL",
  "key8": "41A5hERXEUGsaU8K65CcnwEiTSGUeTGad2in2tGfmeJvQdHT7D1zrdqvJd24thmZeu8ru3EyCbWHEg14SMqsHdjn",
  "key9": "5oB5b5fmvXuD9yQNNvzMXacYXgxkQTu2YoEdqvBAwvidbX3LCe1zteHhSuVvoL7cgoFFb4Yi1tRxHJTgpU8USDrp",
  "key10": "rARphYg2LK3dAUST2aMPV5tzZrcHLLWvtpAR4z7wdS1MKZ5QqzL6fLj6mNanw3rb3tNm8TeMiEBGuoVj7mWyfDq",
  "key11": "4Xaose3Mv455odnVdgHxNEGp6pe4nf7eEJo6k99khEHhWACdx3AzkVCURT5hc3z1wVQovjmJraFQU69v6DMJ8V17",
  "key12": "5jjhDpFGtSwgnR1A6MXQqaR2Hwg1SyLjNWeK3bzhqpqRWYapEBUGW4fTVszDDVfAbLu8xT8rPchxQfqtUtotjwfZ",
  "key13": "3HPrcxoUG95ymBwgm9DTPM6xCBD5aqPWEiVUQFfWWXRKLoB3SmHEQF6dq5NfnDsrECSaXQ7xhzf9fLkxpqQf3fLu",
  "key14": "D79QxvGcGLYvAh69y6ezJ3aXmDuXGH9izGHG9X5P3nmesittZAdfiqYCqrX2DxpPb9FD7EpToM2Zdw46b3Ap3W4",
  "key15": "5X74qfEBjTkpdtjwaeV8ELynTyCdNqenENLDA7Fm5ZZ4ZHbDbtJ6VAMaikELsPDUBKgxE6RTwtowyM1GEDDgkLPS",
  "key16": "3sFVnY8yJGgNQksBN7RDrVFhLQQkyzrHNKjTyezqYXzBhyNrADXyVYDuGY1KGE1qbm6eEoSXKBx8ib5LXLu9DA9g",
  "key17": "3dWyoer5gj8HeEyGKwwpcrDEi441Bp3HnQLeERF6SJPWuh71CSrZNT8BSZZ1FbLxVCGdNgR85vD1F5K8U9jbQbtz",
  "key18": "2usFCieTUMCqTJUNRrA2DFEinvbVHriPyPotNyCZFswypyNCCpqY5EMYpZqV5djXwuPbnz9hzFuwwT8TFi31YFDk",
  "key19": "5Nuih6QrEVrd4vTB7ZKoCBnA18qgKHqAqzDLMd5vrATwBXCsLaP3oHDpSL77iAQq21y1i7oqwA8Jb3Uch3rsi6vt",
  "key20": "5fJ2TE9Zod14h7e4cA5p8y4B5K77SjzztdMJ4TUqVgRYreWXFcHKP5KAoYYhqMxUWmsbSAmsB6UP3qeELboTSYF6",
  "key21": "4oiiwRfaJMMRtP1FpSWAMeEgk94LRc7XCmpBELiiwKJi8uW9s4rbfp5vUT3GLNfkadUqqM6WuJTruRuJLA8zwshr",
  "key22": "3Loopu1HVsAQNfFQcTzuqGrtieU962QSnHLD2RYDmEjsRwEGoGDYfSUiUeYsrAx7epn1Da21KTmyLm5NR8efAGUh",
  "key23": "zNTtmNgFQ2XZEnvJxEcyhGyDYHxUVAzp5wchS9AHSMzc6y6unDcPBKtEHEHCB5GUGmCZSuhcxKXsMvWuz3UxeYR",
  "key24": "SrqDtPqkkimPPqheu1EooFV8zdKwGrXqpXjPAyrDqEq2KuL4dbFHUTSrKg2nW1FKqYoB4upABDiC4XzhWAT6fHk",
  "key25": "rUD3u3guGHQ92mxauBfLcp5UhMEemGbztPFL4u53TwjZKeujtiqmvP89jpuxdMrLtRCDG4DMyhCreKZu1tHmq2b",
  "key26": "5wjj9avPzRGfvZTkLKhYSrd4wyYYgengFQrYrMnja5hocyvYNavosn354veSKJsNv9ZqciecMabz9pfc7vMxnqXk",
  "key27": "58j8J8KiQeytNjtUNkKhVkXfNK8LeCsJaS9E6kuX5FC1KMrNJVmarJ86fustF1Lwrdr3HNhsK2VPUBmHYAGuN676",
  "key28": "5ew4fX25tMPzsnoX3ttKt6iWNgioudNoNkExzQtFxSusysjPW7x2CNGhRw5CMfyUpZTbuEYPnGkqKHGV3g1c48CB",
  "key29": "3nYFNfWYdYZbY7oCbzVGw4DWWEHfEfnp4um3mu36Cr3UEpe6tgo7vGYNe6XpMs4w5TR9vU6Y4PYLY8o5ymVuYoGF",
  "key30": "47JbNRKPHAqJcGGJv4Z7Mi7Ev1izRMHdMfmzmuCPrfEro71JLDJpjSKEZbjuwfYRsySRwDzpHWnxpu2gho17M8iZ"
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
