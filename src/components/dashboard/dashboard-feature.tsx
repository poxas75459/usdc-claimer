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
    "42woVU61rR1vsuh8QWD9w2kH2zndAn9rqMxMxquuqRsCNZTXQb5GHwkDG276SUrspzAceY1yt9k1NmP9e5wNynXP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YQvFQj4zTYnBcFnYq8jvTgz73gxAPic87SGp222PsYaRYoyuD8JveuMoSgEE5d47JEpqALYckSQqcFbKMCpa8xw",
  "key1": "57aVnAnH3UK71p3sPyrggVWNuyp8xDNDi2no6ibMHp9QR1JHsDrYfa4E3AuWQZgFrp2X4qXtdeRkozvZ9ZPwZME2",
  "key2": "5JZWxZiJggnfSdtu2aADirGwgh2RhyBtWQVajwePg46DD4Uatq6c72Fw23QfQJ9ZvVGmE6Kq2xMVmwz1shNhGP6B",
  "key3": "2BJPjnUJvwsP6mhfKBKevs5dUc2ee7j8uRDAWEBadycib8ubk8qLnGdjmC38sVyXPWTYcSCdounTkAfMpJRK58g1",
  "key4": "5ogaR1DioQtmnsrevyHmA2jtMKMwuyyaKtHR84wSsQyHeebYdPjYjkouqa1DCj3CXLpQVKXmBdhsvvZwN6ATfa6J",
  "key5": "byMEdFcvoKAQuuQ9qrfj2c8Ece28VBffEdZibjkrXq9Ax5ns6GPSfod5bn1vwH4GjxYaSGz8r6rL5tyje8DHiLy",
  "key6": "53i39DE5pLLdRoWckTmKozpVchmpKuDnFYrHRaPj1xyunVXi8nzoTLkgRW6QJcbW6AU9GWyXvR6zS1McU3GLgxgg",
  "key7": "2nXrRP6FHhygm4hVX9Fy9399fWJdHAZmYEwXfky5ET9ghXgZbuTdERsVac4yNWiXdUE6T5Esf1mTbUWuvFpPxvpk",
  "key8": "5W9h3FqrqKzCFVkN3BtNJZHzG1WcbngnTbUJpf46LCPm212DYgxnJ42k4jPsCaHHc353CreJjS2yrUTAodXHJuh8",
  "key9": "4KkmYcupP9mrrbFDCgkv3Wk8VG4dy7StKhCEe7ajnUMVLHHfJ8uAFYS9mqV9vf9ejk15WQCroGZij7WXVCwwGU6f",
  "key10": "BpCZ4o9GeDfhg7ucoypJk8KWGQWGjELyWwm89A7s3xCXNGVDpyfAf9MQSdGeh7y3CgASAKEfuEUHGsPNr3y8Z5F",
  "key11": "2vTufuEmG42W1xk8Xm6ojCiqpY8rWKZdTTkqEDFoB33Szw6EfJ1PCSMxEKURD8A7BSPJ7xwpb5YDse16EzTUFkpN",
  "key12": "3YE27wMf3wRKE6rtQsrNrEyghWaEyJNNYez4hPaB4B2A5GLE5WRSKZJNF9iqQdrdHPaWppB9N8LhvsgrWvaWCqsd",
  "key13": "5hmrSbrCmePZL5WBwyWTpxP1LX7P2uS2DoEvKo2L7F4kz8UCTBkCS4qVMppzGH79rNH6GvbL9sQbDqopTji82Lcv",
  "key14": "34N8VkJbbxEZTwnCyouZcf5jTtncqGoGaziuLsNnWSVv2X2ktxtSneDTYqZPmYrbQkzVfaq4ob922rMDxrrKcLSj",
  "key15": "64B6haU3YGcDhb4enuWMqx7Pk3F6wi39h79QJWrkZMPoq9BS9cLdgfQmTQ2X6cJp3bmbVzAHT4YGV1NeuW9PdY8s",
  "key16": "2kKDpPNJz4AziX9pzmJr2pwTsKYmDDCS1k1MnoCoa584YJ7aCQeWaramMSigX1gEPf8FuNkH3uYMrBpDxdAm4He",
  "key17": "2WKebDj3V2RPVELqq7EheUNi1inpVM2SnrbeYUHToREYfGTfA2X7fWfNL9jj8s7xwSjznsRScFwbozhypQ3QqiqU",
  "key18": "3VxUQ5rLowLY5g8NEsg291hT2LCrk66Q1o3ZJYNY2nWhMbJgrrc4ibC5Kh1TyC6kkpZEjRRZsA3N4Hxn1w9i7bCr",
  "key19": "4jSVdx1ofu5SMMW1VtAKfKdZtMZyVpUexerS1QcKvZ8j2UAbJNY8SAMQe75bLUX42wWYsVcXZohCm7J5fH3hr73e",
  "key20": "3ymp28kZRkbob4Gzxmk8ozk2rxELu5f5oEja58eNR3fpGcaWQPr7LN39b1XCt29Wveu26MmY3s3KTEVW3WgJP821",
  "key21": "5JHXa3QQiXTTx6zNKWpXM4VzMHDT9rk1qXzkp9KMDYNrKXReEbHSipsQYGYDGXrSL4UXA4iY98ebM2rtLUztGWvC",
  "key22": "2fwVjHwyEuAPc5py9AD6VczXg1cvEkej9Hu71Uw2LVHZf1QYpHPGdmRi5ap6F6dviUr3dsLg7A7rvrpvaX9FYD12",
  "key23": "547H8vToJDJ1PmnivLGwM9xuYLo7iBVbjSGNE34kQ4YfuTzX4gJzCp7cktnj1hwcHzQU5jLsEjSeku5cFXMJKHjL",
  "key24": "2UeBL7TnB6fs5EyXyRGnfSohXN6SmZ9G1wyfvbDxiGUnTXQcbC6RQ9RnrGagGb8vdpQqsyK13fFxBKKfo5oRie8p",
  "key25": "2KTa76PxCTEAgfwVEcM9k2XmHKeUUgtMYVy2qF1MhDpoJg81597fjqfQDPDq8bDmTqgT45n9XFWao2drfCKhP9sR"
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
