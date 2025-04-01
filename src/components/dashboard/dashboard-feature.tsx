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
    "4oAAscFNZYJhroGW4knywwohLb3fXvpepoXZvc2XhvDFbqNK5NqosUmoZgr8hTxRtYF9PANDN6GmJeVb2cK5BAbM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uP8aVYr9MyJBdwwpRM8HJbXHLWk2v8xqvgP1BLMgD5qVsatsfBfMfwLfJW8n2SZ4dP3wsWdeLrbkvVm4JL68qDY",
  "key1": "j9DZQqYFwNhGMUN6ee9wEnzLLcx9qpTkeFq68GKgdLxPuZVtYJe2f6WC4u5sQFghmgYJf2LkPJ1ETiaYxNQWC7H",
  "key2": "4hdqCGygQY5MwyMzf4UUH2DA7XZCtEWg3d3TbSxhwq9ZxBkLgUcv69ve98LRW5EP29VHVV8zyyrjh1tgVB4qh1YF",
  "key3": "5TJWxGLKhQJhneoZ1nNk7v7dLbtk1qQ7vtNWGatYjjLRxnrrBbsYhishiTk3nuPoJ3Fsk7HfArcJ3QBBA6MVL18f",
  "key4": "2dsUGwZ9mL4pjpgrxckyBzDUKX9d4EKuzvAcBPzTtVNoLD6R9KxKwTmgjBx7jWas8AcaddBqg1KMS8oxa9MS6EMQ",
  "key5": "rt3UPyxV5f2iC3aeAa6VMM3tfii2zuNtGHB7EX9FB3p5YjhybJkwsor4D5cEjCpsU2okJLs4qaf99fBdkC6rSZP",
  "key6": "5oUDEE98WNjTBroAKU2ZFda71iKHSEFw3KfmhePE5gBoccvckvRumsHhxDaZxh9ybePrv4xaFRQBtCVJk3WGgoLt",
  "key7": "341uxFAUiWh3Tp2fcKndfi8QHdYY2ocT2BGSiEE5mwsxKnfasnSRhQSMHWwTDzY9HzF5YV82BakgBM5W5s1an4QB",
  "key8": "GMDbwHWVSr3hPfru9ufHEsj7AxFYs19oDEjbscoG5jvRNuzKbhwD5UytnWULxFmcJgAoGy4JDwEFjMsQX5EaPng",
  "key9": "2pJ224XSxre4FXYncEFdCdfbpW6n4LqAaEcox8vi2JfiEJcU5AxFQSXFvGiZqWQrxHRUjvMwMGK3yXKkaoJHcNSN",
  "key10": "5PSSFNgfa5bYkzs11fi58Cd6HuWTcVHJon6wjZiJW9V1wJe4srTMQqg5nuvDBb8EuiQpZP8xm5GyHsAKvmCWNDWp",
  "key11": "5UwY33VyopsBzbveXprKMAh7fvnT5d51k157XYeKWRY2MVrhEWFumbahm8onZmDxTrKTNwNT1hAfLM18AqoYexq3",
  "key12": "2QJesZUsXZmaEdP6Ux3xHwkDBtQzyqoANb1vAjmVMkLNPKftq9WxZTT5BWTdRMgERQry7GdnKf5CB6of6MTKS2PQ",
  "key13": "4UZTHYA1ssE51z731PrcFSvnsbtLNJsYc6hveZ4ydPQbXZ7nF1hwZDZXxiMeEqx2xaoGqMupyhxBQ8Y8kJM6Jk7k",
  "key14": "2yvQW9yckNSUcE6nvdb2djQP8K7PH51kX8VsQAQh3f96XMZx9PPmxVDieX67BBSaN9PK2GDmhQqtV2PSzzLzbcoj",
  "key15": "2aQev9ehWzFwSf1tMEgEcaZiTnnb5NWhAqA3pXyTu2cpZK5ofTELvnxYJq54fzpbY3VYwAFcGBkTTw9TdJ1knwBK",
  "key16": "3kbcdp34AMW8tQk3BAokxXAUyt7Rh5j4DESVwXtUVkWH7YmA755agDcri1pDMmQMeF6mYvb2wxU3KDQUbBqujRt3",
  "key17": "Mt3oRbkgfzqCEssotnPBp3EcAPkxvno3KJCB2v4MCfyorAvczThaK6AoXHyH8XbhN7wPRiFBNsuXCfRQG2sgAfM",
  "key18": "2djSfX9kp6W3vXPK7fm13tAPehgKdaNFaNvX2MEkrSjFPHAqdAoBVL44WXAU8pEmC4u1V1Trm8NwfXmdd4oVFBTj",
  "key19": "2xCVRXcihqxFxudhyTMdYuA712zw3xv955BXQeM2hrLVqhPhfreVZUwFrfjFizivsz1nfbbLtzsneqXXrSGD1kQk",
  "key20": "4MMrejVFiqLhRZ75iVbHFRAqaU6StUEr3cuzR1khitZhZHZrv3ukuVVxNsciLXZFnMzGp6i2MNBtiZYBSEXxkWyB",
  "key21": "3kpzByJWiLbnpBh6qk7mm2HHxNmCVJqGHh2aUH1TVjsAQ6xDXWvTHHmURbXyv6xBoGrojqeBmp6vXG5423wtgTZx",
  "key22": "3eZKMrjjNREmUbx6jsE3VBSxmKtqhYeVMZEuSFowg6j1dpg17sgMdSMTpzt6fXGnccHbNJZnTvqkg21qvRJjdJrR",
  "key23": "3Us2CjcGTLmW4jz8UVW68sfi5F3BZ9Deog9Xkeaxq6AFjMbh4MoBtjk22X8kjNYB9q9WFXD3YMjsUjungAwVMYjT",
  "key24": "3xEgsC2wvjusg2LJm7WrbDwPehzvC4uAoX43hhRi3e4MnhxZvu4SgX2Me6hHEgGWTbMXsMnMd7nStLvFhakHFsQv",
  "key25": "62UzcJL9RV2KsS8eEMezhRZCyLt4cb7NbBegd8bnXUKUd4v9zdtjxpghW2SgdQznvxs9aVJjWa19N6hXvf9voLe6",
  "key26": "3g5xr4ADKYSQqdezCJx4qeynWmmBBypT85Yt6vymn1nKjvQvG3UH7nzQKFhC4eBSUhdxQ1Eaut65z8myhtnnige2",
  "key27": "3Yx92PSEP5qDb9wFU5mUc3XjYFLHtsmWm1GbSRA14AJrybTHCJ3tKmRhsXbmnGANkN1NXemot6PEC8u8nCxk5czi",
  "key28": "3y9fJmcyUkbj95hgppvKQcfeiqx1P5Z1K9cUzPXJHWR2f392mqBFjxeV7svh8eXZ8x4JudrQwbpBDNAps4kD5R9g",
  "key29": "2hqaZxWr9S5qFZVCYr54vgfzNSmBnxuWCtJDiPimgLnSg8DFW3cLVPqpLQgae6W2krBtQSrXpM1U8kKKVMSVA1bW",
  "key30": "5khn8a9LwjuTFF3aB24U7XGdQhnA5P9QMLfE5joKAoXsA3W2DgaYRd7qUUJPezGfhd8AfYBD9DhJaKefsp7ArFYz",
  "key31": "2JLRFGgD3w9Mv1mxGjpa1SJiGxLBJBS3eRDwPL8QSNdzN8xX8G1TmkV3ZsnfeZkuNiupJz92H96xLM54AxUkN5GE",
  "key32": "JwDevw8q1fEPM5V38f247NSiDMVCJYmAZvE8NyCEzA7abZ1srVFbZ8FBaEZz1ySKTGntsf7EWLUAuhprfobVQNa",
  "key33": "4x1evVEUabo1YNme8Wh7a5Eyk5X9vZupA4B7NPA9voZoZc2mTmUrD8q1ruYMhagMyXo3576iN7V9webx7dfnoRsC",
  "key34": "5ktHSW4NAG9pdLn2VxZo7iik4xWXspzDtXcbdHHLEBA6AN4PTfPaU2tCtN15B7FrXifxV3WWMK6UXkEE5pR4KDe5",
  "key35": "3S3RSvatvzkHhCnUeBj8w6xCAz7kFJcJ6jphptiq3RRSWZ4BqXgeRa1fXdqpnvus7USjwCN45sYWZ1t7dFmxqSLc",
  "key36": "3SsEwvkRVHHfrSJ9dL4FB9YSeMRHPaXyfq46MVxuFGnsshxzkg3ENawXRgfrxP6Rk1sCZkCWQL6RJmQAgwE15vby",
  "key37": "3nZXbWWAQYgCr7QpXX7iNBqkHDpHxk8sqV4LobmbYGbJZxK6t7NDgLRHuC2HpBpfeTRfZ2UyXtzq1xxZvMX3TLS3",
  "key38": "3rPE99CMBq4rbGUhUBbz7SY4zPfDRdHcfa2its6JbPnCZ3Ppfp8LtLHzmL2SjtCNo4DjjooyrsjnWgks2iaGxegj",
  "key39": "5et4vkfrhEei1ApeqAWF2QjQa5mqP8SHHPV6Xdppp1UFEMHbYmhXjj7dR1a7aLptptcDC9FuFtS7vCLpsn8VqLuj",
  "key40": "2AzzLCDzFT3wdZZHRJPYihhY6N7eTaBRA9UF5DNUkqHAGgVtWk3QouThiK1FF98JBruJ3CXsdxGNbtCsnS9qmFit",
  "key41": "4HrmEvhdq6FKp1KhSX7mHDrLx2kqcAD4WqngNPUpt4P2McecLHwnLtfQLSLK3uGbPu3So1Ufh9DsKfyZf4pbXWBM",
  "key42": "4L5eySiBsg9rpf1oKFV9i6SDD9cLVPNeSTV4MpDsvWCS5i48f94z5zz9WNLQb9zMZBq1BY9ui7FVGcNhNgX8Uuag",
  "key43": "2nSWry9UjUGtEYVieS2hqRot5Jj9DS96QkyU8gewpxQpPDSSSBYJx6qRCWRfy2tEDk7ZDL6rRezmb4kvHCe6dHw"
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
