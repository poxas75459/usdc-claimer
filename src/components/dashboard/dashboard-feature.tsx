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
    "28owBAtAgYZMysftWsVxC6PmGwZWL2zAA1AuK8gw2DTdUvps6R6N9JKWpka4Js7DNrmBUb7zG3v6bM4DtWSJZoF8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jJ5uyjmprdgj8LVPVNm4eCAnQ7aph2J8nh1UCxgFNu7zK83FNUUnE6VnM6tAKbQoimhYXsQ2zv2Q7ZtRaAHnLwZ",
  "key1": "2R9DczKhr1QJFuK7wbxXLZQne7iRcVqW99kMWA7Fiiiw4TaXFtBaxuLvk9kG81bFCi3R2y1NneNXVeco93NmTCz9",
  "key2": "3VBKTzvzbTBZ22D5aXShhwjxHWBbzU28jNiTGGHq8skZDMUMhyAa4u4HH8rn4HoA9NVFernE591pdvNq6djSPrDg",
  "key3": "4rkATeQ9eJkhn88tz8RA2nXXWHUmJw3iU655vWe7j9PgqtusFie1UKpg1phPc3a2D7k9R1NaN2i8cr9HnspFzryb",
  "key4": "5mP97n4dQNYCwPtj3dNqGVaVprVpKj3xyFSyNxRnhW81a7maN8kRAr8tnzR5NdtPwCNQtmDae5pLWHHNMYxMNJnR",
  "key5": "jRhELMVtAHzSEcGPrQyBa9wYAckUHhSuLPz4dYX5cDd1ZVKUrj5FG2KMg5oif71mrFd2ux2XKQCwoHaAuL3fHXH",
  "key6": "5V8QpoqE5HoLraPVK4i5DgNuHedjxBD1iRJ14zwdCwY68fkfMUXYYv8zu4ncsod8aKhb1s7f2iJMtiKpktCoaQSf",
  "key7": "65HA5GKJzquHpp7U4Mg5XpDyaxAXXQdmYMGVmAwvKWo7UZpbhhtfLciRUTCc9s3vLC876iomwrAzPYst9DBmp2wf",
  "key8": "gzkRb5J5XQH6p2s5hLCxZ5nqHLS9sYKQ3wdfVMEBfegen61wwYPeYbibti6ttHfSAtSc7AXbRcS9N4LqBXw6udx",
  "key9": "44wEUtaFEmro5eevxVCEhopxMUTTNVzXevkERYBKCpZgAecVAuP4qLRR85WdeYuoHME8sAmi3BsvnWtc8AxsgsUK",
  "key10": "3DRtrcEyYY2spbfDd98bMcanwudqRFGU1iRFhM5u7LLGFz8sy2jTgP2aDss7YrDVaKagcuDgN466kDQ2aqxVF6Y1",
  "key11": "534c6XX1oc2ndWVkUeXoZMv4TFPaeVDtsrqpQdvxMXAJX7AwMnfjinGZzcUur9oteEVJwpph4yDPGfcZ37bFRYcE",
  "key12": "4it4my5j2S6PZCVXBrUzhZkmqjjqVq8dwDa1K9NmdRy9dydAkCZXtESLMXo7dc2e9FqWV3zj7BFGWnvD5aRBBbTp",
  "key13": "4CEMwmTwv1ywzvxi9BwKbpndApBxnzfvR2b28qzz4jBKDB2dEi5onFXkLiPSenu9fuLedp2LM5tR6XA4kb7fxjPT",
  "key14": "3iinS6m8smPUGhS6QZebJj43DRgc23XkrZcuAoAz8oqezUfvWW5RaHNJrKF2KQ1LxkmMBVQQDvw4EhLv4tQrmxfW",
  "key15": "4yoEVBNLeMysaqoptVB2MMuTB7Dbrh5HgpWEDaxNfhrLERnQRFDfxKp45BUd51UaRy8x1xCxdG8s3sDTxGvM1Vw5",
  "key16": "5JfJHris7TcEd4JGkLiWmMa8AVonG6jRxFRYbg2GiHWSasA2Dn5bHd6j8j8Ro2tEdzm64pT3eU9e6fWYrxsxS7oP",
  "key17": "2thf6ib6M2NmpmxJbytvhwXwfEWBLc9PmcVr1VV7k99ZpmzUyjG4npFkGgvrzcc3VoSpBPWPqURyMyrHmQMa1JnG",
  "key18": "37ov4mhhFTWsbZGfMaUwKsnCZRKjrTb9Yh3iMf8twH5cGoRig9vGwVBUKxjm36dR316nFYPJBzU5cS5xn2WsEiez",
  "key19": "3mqHkSrbM1frQAQ1tqqkA3XqhtuU5Y9sEah1WLsmFX1hPdEsHrMaYbSxB5oxMMjpMZkqZWkqjCR53vX7V8QHmecB",
  "key20": "2gdqtBsT8pDuinnQEczo3e5PEedJTgdwkBAryGj9ZdsXj2hhwfqtCic4FqtVawmgGy6szFPYLF85ZisXgHzcKDqw",
  "key21": "2BeigxxrAoqijscDUjZYvFQbjrYKjebWtkQQzAHjUPEMxUSTiT3W6uxhFPZN1FFXQMHvkEJBP5EEgGa6UMxwQMTj",
  "key22": "2Q9q9CzBRr7ex8NGTPtF6CPFSiJrfZrX59Vzdbugfi7Pt6Yh84qYax6X9hXMF8BePyWz3HXx9KTSRFAURR3K8MQH",
  "key23": "2KG9Rg5EyAsojNtcPsPV6qXvmuZHM1Q8c6qLrUPg9joKSrr1FyrPhZZ7Ea5wbroM7zeJWVDBe2qLh544vse2NBzC",
  "key24": "A5v3XoZsaKEfgn5zWDw7rDcwnw2HzBZx6iL4vU66YEmoSAsNzmGjkBYv3sxwooXCqm81opkJ9MicYFbC4oYrA8F",
  "key25": "3GgJE2fekGRkEVrhBDKXKc5JTWMrxaDCYLCXtYJJRvbd2wbeDZHDMD8UAuikgJJSBn7MwtVFihPnpxdUrfBPazSj",
  "key26": "3LvkfwVyVxaFD8f7vS1ZGpjVgk7UWd5aWhZb9MQvf2qd467URi3iwABWjKxCTCmW4AcinZQcHT1GYXJJxdH5kGLX",
  "key27": "3Q9b5fQqY42GmSiuqkoxKuGiv67vTuD4TdByTMHxa6tDzChtsXedfDuLY72J5pxaZf1CgKkWtS4cYr3Tf7VFsmm",
  "key28": "5sMybG2fUzh4wRoTZWgddJ8fo6R1xcyf6FVjJhZygaL7e4RMsVjNgZACcxmgZnDLvZb6KLGpM2WioGbyF5fCDJig",
  "key29": "4SDB5Q3Xt7VD7kRBhxuRJFdqGk8XzHoQqmN1JgixJSpuyYhHSFd4ugoY7ToCDiqNbiCSPDAJSvZMvqvStBEzRMpC",
  "key30": "3tSznG2nbTp2cBzMunHZ91gorsySbY2sL3zeC1diSqY8wLZCckrUZEncbGzuQYpTYWjhDQysig6zB3CDdXaudQx",
  "key31": "5UUChFa6VKzXvjzgFmfTdQ4mkJPBCLuM2uVKZhKgwojmZXAJ7tnSS3oPDzFLdQDEYsNSycCxgHdCY5PxikVUM9BU"
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
