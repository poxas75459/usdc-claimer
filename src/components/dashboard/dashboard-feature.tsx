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
    "2jJFF4TzuvEXZATi9wNbzFHXL1RbVWE59zwSJuiwHTTshTrJTsx1roGgexSxkPhV4BazjCEhcqJyxmm3vxSB3EnH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47qZrAcrgzVJ2xcK7WU7v5ZYxR8jaqbk53xVtuXg9gGMmPYvANyTCcFpDuBd4aDGzRQkMjpUHGw11Y2XgNi1L4z6",
  "key1": "5S5t1ZWFZrDRoRs1Qb5Yt9uBsQz5U2mruHfHuGw6bM2a9XznwpMg3gmJbLDYrvitDchML8KMh9H4nVUgJ3GT29ki",
  "key2": "5oe8RKBPo9f59KLmvZwVZkUPbfa19MbUzi3615wXM1wNrp2vngKjHuf1HnSnBLaLZNrqtiKRwZCjVCtjC3VDD3AP",
  "key3": "21VpoZe9RSsgJd4jhJVY6zAQYfTxMz7rSmfdb8oLiPraLjpo472gRgf4rDfjM1kYS2tqcmqJqVUjniJQHKm51Zfk",
  "key4": "61MdW9kpiHSHhWi6rfhsJGrmArFPYPHZHqnnv1oGxrFSbakPd35u7KDsXm8BpYC7NZAK1Wrq977BceJ33HKEaaeY",
  "key5": "5SB7o9QqgKVGuxnEYrcbQbLtC3h3ZufSyoWkWAWqeKqt5aBAWi538XJ3nB3em9EwEKv2W1oVubD51E9eXrhhMYaT",
  "key6": "gsJen3JU5eufhfCPzQicH3WXCVnDEeBiVu75ESuPRJ7MFCPKsjb66fH9bnpove2fvGZxLrVrxc4jGHqir4rCPsY",
  "key7": "2hSSskJ4iJq67BPNvK5UFjGLjAfWbCAdKcad5rLRqx5GH2BYRydNevcRAQPVLyP2Cjgr9Uwy2goMceMDbsBgCwkp",
  "key8": "2ES73UETWMQVd7iM5aVwELgRxrSzyyzXikU8aV3GKpbqi3gCmiz9NYxX8QF7XDM52kh5Q8bgq1k6fnmBVzQ1Vrxk",
  "key9": "45fCUmhbX8SS7KgDWxdjnQm1Gff9qLmTwPBb6zWouHAHUeuuRLDEGdozEriKm8hK3xVteBf3HtpkYubL1EcK9jr6",
  "key10": "mvJDmX3yw1rbzrKqyf19k4GNDqN4HamXNwpFGnashQLYhyGprDYVaKfTAfWr7NRLDASKNvw3EfYcucDbk1VECYy",
  "key11": "2HkK18xtgKptVAqeULz9GnErod6ZpJYNEgATo1BuJDFwd3XT8msHQ6BFd2zv32gWBimChBkK6cmVKFAbEGMuVdqN",
  "key12": "RDfUcr2YYEDyUS2UVnapPfVLQ6TdtWum7iJUR4WYhQqmCLiyMJZCaBWXssUpw2wkjp2taMARHXkmK47Nmc6w9ob",
  "key13": "4QziAa9MfxngH9cdrXY7JTAmFJYaMvYiuAAyypvYNRmJ18DpJ8RQCn9Fv4xb7RT5YeF9a8HH2ezLMpW7PLww8uLd",
  "key14": "42E48ut2Xfg9BFuEK4aV71xjkRD3AJHwwDRNQr6b5Xz8nkakfcARAScAvcYvBUPxHcraHSDn7MVY5inXsuePQBH1",
  "key15": "WKe8qG6XkGdPKqZbC1L75gBNsKDheq3Aq9HeRunzDhSUf2Sj6PP7jfdHTuNdFPWdW3jSS2aM1mFvAANTPZp4n3x",
  "key16": "sTA2TpDLdEwCX56KuGJ8ERVSBqAeBwfnxFFfggBayb6oQoj9swfXeFf2vBxzmBQ3pzLXLXvk9GFQTof7xyWkzQh",
  "key17": "4eUTd2ESBkS7pcQKDn77HxB5Q1BrDBjM14sMud67Z1YtQRrFLQiodCKUhZuBRYxa5WqjDR5kdEfPFMcsn8RD5RAy",
  "key18": "qfZjS945yzSomqtGhSQYxj5Wo2Tkpb9KrwcwyjbF8PrZgGixtrEnJ6pPbBuWspoz6giXkDyCe2YCSoVnz76HVoD",
  "key19": "4q4TX5Cbm9wA78hhedGTNQcwGWh1i1shTmHvfL9LjhkcRuYbrfY6mj3Ccuj4dWDCeRbWuQq7NRzoTqMRyATU8duB",
  "key20": "4R9vSHBpvZggMkUTLx7LT7H3Kc1sQgpwqz94hPfgNL44LL5VwWeV9qkaWQfiABguBNWFhHx1mWdz6pjR41hyim7k",
  "key21": "5sQm8hqrYcJvuiEhqbzGPbU76mowAbg6dYvDt7F4uRck3yxcX3siGn6vq499dNjdLgTyKmarKa9djC4XCoPgor2Q",
  "key22": "48QGZMU4FQ4CVEVjXpXWx2hS2hs8YBAG6KW9QzUigc7W3DRwYMMJUdivccwHLaWtra1HVHvAXs1Ub5HXevNeUtgG",
  "key23": "2Un77mh2qzop6MLQyE3Bu9asWtKuUzSyghGbHwx9iMn6PcJV6vFmxnZF8GMsk92YGDmN1Vw1T82fKQ2bmJK1jX6s",
  "key24": "3h7v7i1sZz217yj72M4o2A6t3B1R8wVgzBN2VEthG9K786cxqCVfJxLF8Hs7WFMhaWTyXnztiWeTPqopHUqDmXsf",
  "key25": "qG7LZPQf4tWhcgXvSgCMwp6TsKMy3x4HKfTcK2VDVf3QdLYtZCtSoENsPPiUz6Tze4JFFei9TnKiXNfrA1SUGUe",
  "key26": "3H3oFfVE4VLnspm1T6yxgueveuPQxXi8eVB2bqSYBG8zdejgyALz9ZNRBQnWGmrDgXmRMsuJePMj9fE3QsRLT5od",
  "key27": "2UNYTxeid4tSfFd5nJVS7dibyPQhGN1rfc2aeyQ3mVKxpHfRBVEGAwUVTgFA8Aq73Sjobfo2Qsn1Z364HLoRM3GE",
  "key28": "5yBz6LBQ4NJiTijuD3qNbfVjFFguo6QK2VGbaZ7thyN6AwgZzwnxQ7MSKaWgH9iDM2qnwn6TEM2NDCw9wHjJX56q"
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
