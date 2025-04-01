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
    "5ofVMwCZVsWuGSaox5C5h6DN8BDZw4VQFkLKPtq6N6B8dtB5Juhh9GPDKmT81xgZkwcZc6HvxEKDuzJK6bMhxiUJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JxpvNmH3TYPkYyd3aXNS2H2bGjKSpbEAVPyw3K9aHp693UGM3NM723g3fnsXjzqBjMw6io89BqFuXDAfAvgT2U6",
  "key1": "jRH8X9dnbBACmqJp7uYauJ9GRH3KuDWxxkmwN1KQxnqRrzWF3dQ2GnAgTaGd2wSmVL1JwQfXHK51SciPUVjM9k6",
  "key2": "3UNme232dzsvBz1xdNRWDpUAHERgh5kauE76HRTvxiH1VgN8gKAkWgaD5WNWLKkrPAHF7TjY1Sfhd92zyDgfGw8A",
  "key3": "261rcVsN77amPRxqz9sUTXUomDB2DmUrBuuhQ6fMY5wYQ2bFo2i2TtP1VnbSqdSTmRxDcJ6xUjA5XkicddNNQZAa",
  "key4": "3PrVux5F2spWsTAyPwcwJdPavBUw9R7DkpZK6pS9K1zDhwtq746is37XJxFedJhgJoUc53BFZ8vHSxn5A5GY8Hpx",
  "key5": "2zDzLrBpKD9Sc7c4KU5D5axdB5JWBrKmnnDPvZNNeiKsewxe5UBR3bHtzVNupzCBYFXhj2PmK6iphQutPYP8wZyy",
  "key6": "4SneaRXqdmgC88yVxpf4B233YVr7gCg3MkBRjaFiZac4jvGZWomwGHyC4mH7cHjMJu8WXSur84nsys9i93SEtJNN",
  "key7": "5nJwhZEwnP8Z9RwjiNr4kqusZErduGtGmZ46aQAKGdNzoL9FnUqCVJpfJNCEKQao8GaC2ESPnk38QbnDHhSmYNEV",
  "key8": "4H5TfanGnkhynxTbg7huCjQBvqhZJuwzJyKP7iGvXvrQTbgtMAJeryvyf42qhSkUcaC5Vsdgv1nJ7s2LPNJoVHDL",
  "key9": "nb2rfePgRgh3JgGYQA7Z83tBxGYyXeVBB4auN1FVejtirtytcvp37vDJVFUDWssUr5bTqHX8UPa1MDvuU7GtWAj",
  "key10": "4tdDAVhdhppiWPayQCFEif3FrBq2RNU6zHnSqZXQnw5NUy3Q7M4MMVkdxEoDHcQRQ5tdHnaoonPNW83jyz2REZnB",
  "key11": "3eEjgpwWpe3vAmhVpRi1UGXxbWrLiLCanmESmsehpbErEt6H8fHXjy4UqkyiGxiAj1v5p7XDFtNagBy5fhc9AfwS",
  "key12": "2c86U8avtmKRfJQRVXCPDyMU6awLHTo8yb5WGbf8ttYkxMbp7cxuiF4xqE6weDfzt3K41ygeBfHHi4PzWqwjNLuB",
  "key13": "23tL4qF3czkwNPUhaw4PsodYc911ix9pHXuahPdcW1cfBzAsLfg8EQqTihQRnEpCD48PdaukEyHgJkPaJB3WhmDy",
  "key14": "2Jmo4DgPxLAooZBMyUUbe4SB2KfA2EzjY5VtoJMRcQEYQrgrGSK1Wg5AcgEHrdsMo1Bzr75aq5iNxpq1v9hjJsZn",
  "key15": "5QfYeh2ivAesL6APFEGYL74mydfo9pbVbzyoGBXjf6STFe9GgNiLo9AmQdZ5xEcgSo2LELxFvj5WTa4147skWzph",
  "key16": "3Cq3b4zbscBzsD29DLt8pXr2Q9TkBH6RWwz2nSXH4LiMWFqajoNRXuwpCGJTtrpbeVpDJmrjV45CuUEkXfZM1JLX",
  "key17": "5ieL6fkkPj21iHjRsNByPsfZehRF5vqaDx7o5pBn9pUgbNjAeD1skojhKSJKe9imfBuPbwxboGUNoSLPiUixkf97",
  "key18": "2GCR7fucFr4GiNordbobfXAzXH1NsGkffkfVUjQQzkMSLWsB8gUT8etE6Z1itsUiNodJrCabghbqFWSimRhaSBH3",
  "key19": "3uv3gB4q8MQx5a8bSsvKJDb7wPU19rFHbrx12cxcc9r2vR1AHNarfEAKuVW5sxBmgNbxUpwmPEmw8PG7e84VGSdt",
  "key20": "RQ2kwrmjENdrjRLCeKvqzEqVh1CQ95TR2M8aXnUEpiaEa6BCeYjShUnJcXB3BFFURdbeYXJ3rStGTbHWfJ4KrGJ",
  "key21": "3mQ7kkrSnPGQAuvGwnz1J2GrKwgHN4yDZjpQJQf28FvJnL2n51xYrPtx9BKupPjHu3xuvtxSC4uHGr2gjHnQoWCm",
  "key22": "5UgBDbPxA7z2sioSQmL23NooTB227ZRXxRenjtTkAak2Z5Zjj1Jp6Zz2wawa64ehY4b5GVUygGfJJyU5Yog4q9qY",
  "key23": "4Sx4sFd9mkwYRtqh8FyvywD4hbo83rEpREgizqEWkKzwMk1xMgGPFiyaxJsT9atgQUQitVvsZucdDMwsKxcf7qGR",
  "key24": "2bsJ8jLt2Mw8HZk4WtGNJZLin4aUNewaxA6gdPHYrTj2B86YfaEbhQLBkK55LheF1poAdiiSi4pHUnSmaXDjhBrQ",
  "key25": "TqsQf7rQ2NNGtvvzB7vr1z3fyc3PuEusouDXGgTm3SLc1jVokrR9BgSUEkmpZzCQA7bTBMC25hWw8XDM6qpF2Zc",
  "key26": "3vAitv7khdfTUSMHwKLB15NTqKNzg96MtPMMR34JTEeiSjmUXmN7oE8PNN44uBbFCBzuF1S44o8TjxXjQu7vyUgE",
  "key27": "5CBdJ5SUg8aopqEyfmR7sQiZMkGMroUwVNMHggeYhgb9kGt7MYxmgS9SvyE1o69uQgKhsv73XPChSDJseJjQdMbh",
  "key28": "3RM3iBUZ6yzJ4VgYCz789c1TmTUVM8NJafadLP1g2sTTuAautxybbFRGQ7y35k5VGLbTUzhr5rd4Sp5a6jVoL7xQ",
  "key29": "bPgDVtjfe3y8TNMT8zuBGdVeQhiCoRYmqJjKtrnEZq9GgQVu2fGXL9RbC71FS3Jp3g2wswcRdvypN4uHX2q5AXN",
  "key30": "3RLZ1ZXyXtLftBnGmoeSNN4gb53KTSXuKNAwr6WfsqFCvEBsWN5KobCgGAUeYbRahYf5GDV9WByf2j4NoVXuwK2C"
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
