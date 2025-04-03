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
    "3uNHTUT3EF6qBY4zgLsqBvYvZ3G8H48CZe4wafEMooLbCo1SCYoWQEor2aJt4yCodiq1oG2rCmqRrQkz1hCfWnF2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35y8uU8w91ZNv4XQqYnav44H2AyGBggF5yBUBT4M6coEcWY8de5jqS9P7M8YUgCDsH8CcP6roVv3WKepdqEMRwvf",
  "key1": "4DushZsQs12NKMjk11NAgxpsmBEiAP5Bch6MLNX2tX5Fmw53xgyFLh8oGmt86P2LpwHhDzgkvPS5V3UuK6uxtyzU",
  "key2": "2heWpwBsqYBtpjCiGt8sn1KfCNVrr6WNEzZUGTLaKf1amhqrES13kosRL1R7zSZ7iciWYDT3pwBLfDjooduwaTAa",
  "key3": "5MhAcUb7q42wSUwNfTfdgUyf7XDtuWY5wkYZv9TgDecGPQJidtwH9WXAAVCN5JFG5yZ8RRmpR6aMzLX3onDpYExN",
  "key4": "2ukuQ3f4gbktxAmZ5DLY7ax5gJVYxoxmJiZ2YtsZdYYUV5U8fjGnoSE7KSeudmRD2SnnRdXjSNGkDck7F3BCzCEN",
  "key5": "jN88PUtLaPY7H1rWGAHYx6468q6X6HEP1pwJPVycHQ7pYY4gmnoy7ZHWfYQL3qrLjZrbSRRKbsD2sotzU7VYw6m",
  "key6": "35LUg3kTNs5cxAcFRbqinedLMLWfmC2CwtNYYoDxcyre85vP9LpnF8iJu8CSdVAWCmURnt9Cv1DFbG1xUEGCsvrA",
  "key7": "mhS249WGah4R3ATr5viGzsDjSsBsGU2HpQqoSjzixDr25fR7dJ7tnxD3R3LZbc5mwxEg6Tn64a4ykp9vQVWfG93",
  "key8": "5N5PpYqziFnv7KFEoXWpvQ7CtSVbRNgphBHu4YJpmgaXrM5uQcEtNm861j6KDrYMYesCawjdsMjsbGpgYEiFff7i",
  "key9": "26mrCGpANFSAyygNB2dGVvikRbDxcnpU8qSaAwepBkdePcSDMBSkNnpST4DG65KPrcQ3kXUNEmw78B7JmDs1aLQj",
  "key10": "4d9gkwCeCSaSG4SbhLQ1L8P5RSMaRxf8r4bgvTziUMoxn6HRrB1qpdxHZgcxVeWqoKUHvuSAdZ2oaj66cYUgx5c8",
  "key11": "5GCCQvCLCxkEa1LvSAcKGkVCUNrYy1HCJPGbopyaSg6kb3GiTQZ8Q4UHBN8iYB26UkSkZGryLGj7ANqJWYdRbzPm",
  "key12": "gBkGSdMuYim9KjsXVZrsviyA5pnX1KXE5SRJ1XSoD41PZmotQTGhXotMzW1Xk5LQnb48XATGFVyziB65ADEThNM",
  "key13": "2saMwZJwSxLXB4ErXvCpvpKJNErmUpPvgfGSPzcBaUm7KtTpgaznFWuhDYkvHJNioxnR1qcp1X5rxU6pb2wScMsv",
  "key14": "JXodMasBmYd4fhpi76sSmE6L1RP7qYeCQRbQsjNwb9bTBkUweNKnDap84YzUsrarJUjZ92Anh8PbfaXqtwuR9Rt",
  "key15": "35Yj1x1K6QtJBKysXVimMjV8rTW9JLK9kbCedKLCtBz1TMDQUVP5fddpWtUV8bYpz3Vbz13UYLPPZTrZudpTnXWq",
  "key16": "2ThYGhuoWL5ut3fDcFNR8mQj6FU4ZNXZbNEmJHjeUwJ3yfUYUAcBp61Xe5FwSbGwqxPsi93ckGw76ZGXaoSw7B2H",
  "key17": "2yxWqPi4mj2YGdVkWDszzFp549T5aNks1Ugy9cJTVtTE1CHsJwUXicnpmKqUABAzbSVkpGkBN3PCENnPVbdTDbAe",
  "key18": "5NN9q5Y4s9Rqy7XC2j3tgXmaXCCnamH9CEYxU9eWykt5VLnotHdoBq2m9qt3ejSsb4n6x2T8yLHqHX1QLikRJecX",
  "key19": "4jd3S6bTnDb3Kkd8yh1p4X9GBJWWvMJJk2kS93DpfK9DZbqqw2PK8K6xkGgDdZC4GC7PJjWLZgb3P4Ky7hh51Cke",
  "key20": "46P4QoHfDjsZizMQsxph8VUVNJpjJQAfWejUBpLvbb2LLuxAmpDGq7nE2hHnt1a4SbqNG6Ye2ee9GsJNGufUU8Zq",
  "key21": "HqrxdeLQya8fRQb5e2WWfoD2M5ECWBSUJLiVMkAG54hNxTe1zqeEtuEVBgFthR22uizExCzJm4nS97cUqkoMrTG",
  "key22": "3vZpuYjoRTJek15fBGV9CJtC7hGDpx4Ma5T3g5W5jD6BiCFjAFNp3oRpL3BRFDEeZHVWMD7fULqtVYs42KU44oSZ",
  "key23": "gMSCLTGqMP6TW3jC424xMTrw5Ab3aqGdjAunmUN1eWpyhBLE3GHyfWsPmVaSVj5tYbNSax7Vh8KQ8dXg9eT1Gi6",
  "key24": "2DgdcGSX8vBvS3JKyJrGdUJLMMCWFjMdB6q6TDPcbof12VdmjXfPJ54gQUBY9ejAb4pQgkDd2i9KZudaPM25GjdG",
  "key25": "3pnJkvoUvcPYZf2XvUiWgPz61Xv8xEbJU2BC24e8k3uETHCzYqZ46uU7QjET96JiyU4ZCds9uz87q9QE8cXijnUd",
  "key26": "5NremX1V8PfFJku6wmtfZnkzicBFq6LTGgN9BGTfdvioFaX9B56wb4jhjV1eiwMTZFZGe9tE958h6sXxNKWHqoVX",
  "key27": "66Qg2HbWsSSHHyJvHkPW3MYrN7yuLoL6vMMgrET7Yp9PSrSYq7GX6uUTzfh754kHqj7TNWKs66arYoXFcXpWMMsm",
  "key28": "511LFPfx2fAwd5BRitNTNWL3nyG2fWWNW14i3dHUrrJsGkrzydvJKvaqzHcRN9bD9gzSqxvzpEMU3xqH5tn84bSS",
  "key29": "3nLeJfBoMnaagawPdroyQnrw6dJ61Pg9guPaK2sxhQGoeUYP9M3dyRHi1DSoYYyyiM6VVPcngRDuLLFwPwt5RKcM",
  "key30": "3uPFgqZXf5qN3jnQKc2GmRV5AeTW9oJ1CLGHQgjaWdHNJih5GMyByZfhMvbtJ9rDtAZk5dM82i9qCPgfQczSySb3",
  "key31": "xZJtQgbLT246WGZBV6fYSbDpgng31iH3HfDSzkPGo4GT4nuX1WKBdjpPDsb9jBvh1wDcxo7v34iPbKEEMxcFS6m",
  "key32": "5JfrUEbV638fTBmnyinfJQzcu6N9nxe6wdSTZe94CRrjXcAU8dMGS5emfiTPsv5mG1Xe4ZiSHq71UjHzZiHvphYk",
  "key33": "5LhzoJY3H3iDwcdMtDQykQYUXiMvUqrmUDPbxjRU2XEWomoBeyxpu3Ho5MLaX7Hjdx3tQjdAdAAst8BxLzBSfb2R",
  "key34": "2XL4FqiC9BTK4yZLt8n5d95WKLA2evjgh2sBAjpjBMuTEGCZLXv3rXwbJhqve7fRB9vomrxxcvq37fNBDeXouxnA",
  "key35": "ihzk4W5zN1X6g9kDqw6CgQdLRY298w8hnxF5i28M8MqgiZWWsQF1wKs5fbiZpKCc8umT2GEJAcbYo582zBiSqzm",
  "key36": "5Fwrg3xyjxFJB4WUbvVpCZQXBjv5ssg3nnWoVbmiKWRQbapK8kXGUbdLjcQMHQF2jxCMSVa21aqaVgyJTGxnu4b9",
  "key37": "pvzB3fZc4KE5ab6ZZNjE2ziNmWtG541vyCXFZAfNFcJ1YRtrHFHGdXNs1y5MQTijrjuBLPRjWHSwnCZXxNjKqjR",
  "key38": "trrU6ukjcC3eWrwDUwNsCtivvV6tfLk6aGhgcRn62HVjmY8vKjqYnj9G83JHK3SPNZ46Mzbm6wdZku8V7twFZ3H",
  "key39": "2RDwLQJ9gLS5gpWSbvJtdYScdCYmWe9mL4rjTGp7PVQfv7WL2wgDEGk8rF6PjLx7tNZGF3NKcME1QtTYx2hBrVBJ",
  "key40": "4rHKm8ycbd2KVQFNucnEN1PM1nZpqVUNbdEBVHFcnwe3nAASd1Y4EMkWSGmG8G2HRdzwPeGDa3owJWWVet6ddfNU",
  "key41": "31W1cETfRMrztYhbLYzD3g3fVqdqANTdAEtiTswMbYdy5MfNsstaG9NAdoZ64FBk9uKHJbetZZm8snY4D6sjjpMk",
  "key42": "4Dig1TyG6LfX4Pe87mvUzgmyvPE41NETuuN6pVxyQtHHGkiDD8B8gabf7T9eAkKQZMbsXWEYQYmj2eMkwgQZM4AK",
  "key43": "MTbSoPXa8U5WtTsJXvReWv4y8c9Nh3SrVxbf7Mvq81Ct9GqzrDWvj6ho7c4S1KZpQUo5gjTGtoaaz8JRgBWhH3t",
  "key44": "5dswP5TZCSNSxx11FVoGorPg5LkzRWSBocsG4K7CK5WjSXoHpupr5oURQwB8b7HSZdf8G5bwQZ37MNEBd5K1Q3Sy"
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
