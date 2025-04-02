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
    "5BsUt1Y8pDfYtJzT25v2oCShyYCm1YAKuA5oEyXVy11A2tq1M25JvmAcygW3D5cLGAkrPmURE4kk9t6JPPUoSsvb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pm1BPeDLJgCedgL6963ozr7AiVtuJ65QeVAkRcNyMKQdWCo1KBjb9DW6Aywu5H4TMvGmjNVNN7vVriXFR2SEd7X",
  "key1": "291MDSUfV4hoGrTPBeRmkRNVjMa7qAwVN5xFG66uxMtY2feqaDHoYtpk3TMXBxFqWPCttpa17RNNZNWrBY2ikhmR",
  "key2": "3vZBfc7mV9SXt7FeDmb2ny3HT2PiRTUjjTEy7e5JchAHhxThMZDqcM7QKTNrvjdjyf5JeFdvdfeGNNNKNv7nBv5q",
  "key3": "3STueqRyUJCCfwPND1vPqJZCMFbd4DY83BXNLZkDR3UL6PJXuG1diYDPFJMRT7qDFGSeCU5Kf57QuiNBMFx4HQqS",
  "key4": "o2dehBskA2Bq9f1mbtaSwnKfpoKPqxyqZf3CKmqeTXGKhCzNs5XgYs4iXcdftvRaRZGq1A2Gtkuh1oBQ7zW9E9y",
  "key5": "4oYz7gUUk8yiLqwQnhsABVF6MZ2RkQuKJK1woiU5Q3W8D4TJuK68SRdPejSb6UcRQcrVA5Uywcz9FpsuiR8nJmUK",
  "key6": "5L1NrwUD3kwSwQ6cMNpTE2Tk3Q2GMuVXFRpsDBP93BkVx5R9god8iZkq989SB9Graur6ZGWsDoWHaAuMHYmx21ew",
  "key7": "ccQH7Q7ZvibrsQR2i2ddaGCF7rSxWZcMq8nQoUdJ19saL9Yj1AVLuxEsDGKFHQukaYSrATbYWq2eXnwD3nm5W1p",
  "key8": "517UvY4LXrNJirZjH7qdvgZGq1kJqH1XZG5kEGJhKEyCAvG86Yfdqzeb68AH3EWVG81faWTzWEbpiBzghCoc42rP",
  "key9": "gvz2Au97JFGcj7yaKz82sviPTFiNCTDBVzv5A3siS5Yb9wom4KqtUqhMcNihvTdCKavtuQppw6yJaMvctbpMtyW",
  "key10": "2nbzrRrvE64xPJpKrXb2PAUZxAvgFjrn2mn6zEELUTZZcnfKpRr7mqzzGB5scTjq1rjEm9NDvNRnqnAW98XYbZrt",
  "key11": "5Kai8Z1sUAv8m7EFctV9oRAVbaz2JTrpBDSxZau5fBM8j5ypyaYyAzQxepoMfq6kKxJVLFJM47nKupZMeLBi8hud",
  "key12": "46B32Lgr4j5s7fsZsPD8yAD8xPLnDPKKRagJrddsLnZofxdKCJYfXR6LKmFjEnCefkX7ovQhD79xKbMVKjjPyDod",
  "key13": "65khSCbczT1tQgXNdWzHNy1nXbBWvAMPW2dbLZZArc4uz1EuwWfbPKRtNx2uditQDA2yxDMtrqiuMu6wAt92s1H8",
  "key14": "32dMVZN8wK47RtSZneWiQxGBL6RM7Fgwhd3ri28pVmSKT83NVfWMccyRaF1HuT7dKFT24uTB9VpP24iXXKCQUiBZ",
  "key15": "3hb3oHyvu6LCnpG5MsSjAjiHVZQym6cgHZqUnd9s4XG1sFC1mCMvdopaiFM3ALTQfutxnBtW3AvUzPfPTXqsaKH3",
  "key16": "4wNLQuN61PeLuAnLvmkZapmm1nQ9Uk6oE7BXk7DriZ9DcXur3yvrms2PfoP59ULWzjXUTD4MdXm1pN7LXCrdRcDf",
  "key17": "iXym5cxdVxhUKZCGaL77L7dU9pHwpz2S8NdKrZA2ze716VHWKGVUgtASuinzXwRc45YYi629KdzJoDaK1ay9ELj",
  "key18": "5hoZxbncJFPttvqBUabsD4DoM15TdBqXewZbrwdcdXfNoiwJnTnUJf1t7PqTMiqhjtoLwdV4Z6WoXQzXT6xsuKnk",
  "key19": "2HdWYKgpXULsxCpz9g1sSwf72cBg7SmxXAWDFcG6HFMfVrGzyU4vpQp64qXhLp3wbKZTNUz95LKf3xdpR5jW3Fki",
  "key20": "4FtzgzT6dTgokEjkWUvPgxYPXbRBV8rYaJzw9kTwxrTKdCWKPUCDAxff5vUjUKw7p2Vz5pAG2d3F7Fe82fBHfFPM",
  "key21": "4mJZth2geJtoWTZdpikzdmxATwLfea81RKo5K3hrV5cRKCYGgvdnKmPtruUqJE2jncg1E6rDq281uoi2LF2FQvdp",
  "key22": "45cYxkiPcjAKMVHyEGg9vv5pgSh7Lf34gL2zJcDu44gsW8WPshA6fdGXfSp1u5WuAMcpkd16WQTTEfqTMSay7t31",
  "key23": "4ddtDoXTd4EFzkmuuJxZKp5sqEwTmh743xJUAFezZeoVyhj7woRUeYJx2z2M7CHDgDVuF6rG9h91GC75Yjo3deoj",
  "key24": "2qg9M8V6Mues1dzVW33VMB1FoJHyCFEyVFxL1Ee2Ux1CweZPtGHy1sSQsMMput7pjW75MKQpz7wYX1BcK5zn37KX",
  "key25": "5aZFiwr31rgqwjAQq7d8odjrE7aewDjRzyDRg6xBi5rTzDuTjTZ9eBowbQCcqrWaEwwxVaWaUGvZZF5vz3qy7c4N",
  "key26": "5N74Nkh8hVqXyxkf9QdHKhHqwjo6bUZv4yCJfuLQvNuaMT19GR14fb9YjJzrfXBBreRE7aQ4ZV5RDjS53kQRqBD1",
  "key27": "267vG3j6KFpvEqoop8MihYwRYfFTYiQcCeEvWgU63gYXknWQ3Gy6npbir764EAPasA8dyXq6waUH7NqEpuHQpcSV",
  "key28": "5JJJWNVeBa8gMkf1ExrLDWuLWurGd6eEDdMrovSQpUcpGgP13yY8yzJ5ehuwbkLucSY4bZFhh7bEc3JaoUmqpZfc",
  "key29": "4MwWERmxFT1paN64JvUtssHLSEo4xCu5xZGHatEE91uGMJpB3gqTRRqHF39ev5j2ejZdE2Mp2Yp7X5vm1QZUUqEm",
  "key30": "TMC8xGaqb8Bn9h1weFb3RNZefvjTYFxMGEvv4dEBS5mnoF7wVhGd6TsYydRuCsudSuPq5cowVbDcgQCyvXFogUr",
  "key31": "3DzJrEwXwrasTdNdFrLwXtnWANkYWfe3J5kpYsmVSSbWgfT9xeAzz9aQ2bzFMVwqgBtK4TddquZJZNDjCMXLrhgN",
  "key32": "2jxyFHAL3sNHxRM1hgdqt6xtEL9xCy5fJXcBKYC7hPnHv4ABG3ofZCPH5kdvqUwwt2Z3uasp7sCbT1GSj72tzvoN",
  "key33": "4fctVcpvCPSuKTciYqGPgmyB1xTqBLbV5uTUKvMnjdasnBeJjSrZRF5Q6LdUKYmaBK8EthTgdCmVZqk6oNrorGai",
  "key34": "4p3Adihia79PqwuYmiKLtZEGFRPkiALCAtRA2ckmssSf3kWy7tvRH1FBZ7SweJPdP1Fdmkxt9EvK19csuereRPZR",
  "key35": "5qWWC1gKmSqdy67okgfcQDZV3cEK4hjxSV2TmCG8Mk2x99t9EDUChDCWFFDxPKrkPqtHN9gsrrb6G5UhWwMb65aF",
  "key36": "2ftC2cfzuqWWx5xk2dF4XHDcjSa1A5k7ECLQVoSsVxZKbnfogZRieUucQzWoHLbkajox5PdUQFyHx9tzNsYrvE5K",
  "key37": "5wQiq3a1QzEUY9NwMBmTtk3BM13dHpLtUJjirvJUWaYwbEhVZ4T3AeKnJVMxfVpsujgNGM1wvq9HuMoXJKb4AFBA",
  "key38": "fK78pu7uTPn91xppV6TMFmhUNMjHLE8MTuL8uU7fN3ys41M7p68Qo6n5AhrwzNQgGFhBZBhTp3fNLobsUzTDafJ"
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
