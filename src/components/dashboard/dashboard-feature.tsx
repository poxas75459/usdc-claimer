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
    "3KC2KXRYKiiAwjbU7oHdG1E6YD53V5eNCgZVMESVUiEbouZpkYAB4CGA1DKCFWaDcCV4AfFataZPyUjsqav6fihy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LDcYxcqwjUPaTqVVdu7dDbHo99zurrLMi7hUs8Nnm8gNkDVXDRaBwc6v9WGtsjdxK3aVmzncEhmVzUNNsYuXPaP",
  "key1": "4hov39Qk72wwKAPVbzFNgyFcNWRg13DX1KHDz8NhnoJmYQseC88f3Ex3GQBKKRDaPKFsshmHRrJx7tWaHCHUhw1g",
  "key2": "28zfnheM1eSRoW9kKaFgPtKUvBXKw4czSeY6LwEMSsuWq6fRwx1Nf2fZggCVFYeS1LcpdNhAbfKgJc4Nd62k5q4m",
  "key3": "2zzt9sVg7imTXEAmZDFd3eydXW1n6tSK23QwW9QQrvQ6aPCQ4Sb6QJsNd8zMTmMYCaJW6Tdc1X6tvDuntNxVZ1Ag",
  "key4": "QWoXZrtAKvfPLygRx6ahGZzhPoUbq6GkjeY6zEbWrLu6W2T9qQu6Wor4z2DaqEVvyEcTZ7s2T3EsxUgoiMZWFR3",
  "key5": "Q2nUjJiZyAN9WuRowwD5dwzLFdfSkoBV45TxXMGFuaVwH14KQQeBLhagxuip6EuWyDooSwEAnzrahuF4ziJPJCj",
  "key6": "SACJcrchwrzr3XYfDGDcJVfMXdJd73KxPafyjEtuU1zafyiQGfW3qC94763GWVbTs7dmoTf4JoNg9EniXs8NV2m",
  "key7": "23df8zQctMF7BwN4Y493KY26Abk4jS8gx968jRRnYD74EUg6JFBXgceLtNbactcmY14nEYRxbuaB1pfPtVMzzzep",
  "key8": "4CmbBq6WLT1DmX17mbvrA7epYYpfEhuGCmPz8TZMTV2WA1bcWLj92DM7q6KZZDK5vM2rCdn88d4qWben75ytuzgG",
  "key9": "JTCdcbJYWNuTFEMRzN38oddWABEj69CNTfmLTJznSFemXNN9qkRkrq6LCHyZ4reBVdrhMrrgzxpXAXXa2T1VdEw",
  "key10": "St6Ggc8LsvbpdgsYyuKeJFySN8Yq7sw1vFq7qEMrKmBVnsUrbUoQXG8VeHb48rAVZAcpGHDyKiNFLSxRcWhQtju",
  "key11": "5tVWECuF27QTKjPYdGS9jTJMzLkd6Y7cdnM6TXUELD8iSUkqjhRAttopSN41NYEZJbXVgLhB8jXECJbzyNdy9kLw",
  "key12": "4F1YanpBwUQuigGAUcNha863a8KoU6o6HH3cwy3Ax9kEDpu7Ap3fwbuTubwKGXbGw39i1WRgcaFuJufWoSQpmUn6",
  "key13": "4gUvuyZS8D9ZaNX4W3rQ9xbbEmQGe7GFkLmY9NbGactyUEgWuWU5rMU5C1fwoRfKwt4BArS24WwKcyGyHHkRy4Dk",
  "key14": "tuRgMKP6tQkaaZCyUTSXr65zvJrfnEgd1Y5S5wUngoXhaGNLKukoy7woUqUnqtPiis7kBXy7CayaZXrYHQSG4cU",
  "key15": "2diqQZEL1adjJJYzEFpiH1zwPxErYyb5Hywk3A5BswLidfZ7q3bmwq4YSYVb244z65LCcGixFcuneTsjuHGw8NSz",
  "key16": "WEdkCoqduSE6BERWfM4RYgKcGKJqtfadABBbZFBn8aFmagEL7K66PRUA71bwXsu3MiEpmexZJP73kwo3oiwXLkF",
  "key17": "5M2K6yCjJZpmfzbKYjyuc3pa7Z6jB7Ttuy1QBvsrKZZjNxLNSwGSDLqvvufCWB1hmnQsDqotM7MyTDyka2kvEUTp",
  "key18": "3qnHBoDDF5xmZDGj9JW2n6vx6M2oqUVe9Bxh7hCgAweHLdmhbnjoBkC6aEMNxiPjGUf3r45RptTZPMPtnsJDFPTE",
  "key19": "2oaba8z1Cx9DienYELZMkHRywHXbfEJ5zg9Kg2ZyDxw3MSQyKpJTPWGtPRRXNnw5qKUJ3JFWfYBxRiVdTKQsfwiQ",
  "key20": "4wQhNRGDs4Ba17woB27Sqda2Ky1vYMgH9P5DW8jTxUd1rWQeDS7y3erRsP6iJiMmCFeqQcN2S9cZbfjAdxcPFvGg",
  "key21": "5eQvqeHdbHqQMdbqpPfD5NbgKyp5TrNa55QLhqe3amMnswGz3byrDaNuhpk5oaqmqezhfdr4bB8uJfqE3UYFZLbq",
  "key22": "skudNrjuUYqSiWwqft6pAhCas1b7gZHSvzLMRnnqbKFGwUPa34h4UhjNvCnHsohtJZ2m9HGEycKWP8epfWrNLVL",
  "key23": "4SdkJ7SFYa5X1DhZ9ks3nUN4QP18Y6TvgkTtc5ikhG3dpjcTUH65FPpBT8iYQBVb74sLRkGNQRoCnbbYKYn9LFJU",
  "key24": "4axLEYJVfBCTdHi3GWPzE7CadhXsEbzPwZxzeED2GJhDKJXukLpcnLHaVYTqF9AoSS2hqL6Sdxom4nqWct8CxXNL",
  "key25": "5NubD4W5pZ2kZbeZVMBt762W2EjHhPkdmRFgtSHLYTPtT5AJkWCLE7Xyc5W4Nnjk1nx9XhE1WiNjEkB4wWHKkq21",
  "key26": "48SEYKTzKx6qC5vGnoGd63JRkFJCeJmupfMTRxh3UayAtmw3vWCV5ezAUFvL8Qui6LS2NyH1gdQKitdQk1dUL2wG"
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
