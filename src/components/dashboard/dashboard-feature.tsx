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
    "2i6KCMALh7USKrFi8cbhK8xdUuF5WsyFiWPab9WtgLWztRQ7hLGN7RQuC4S4hPaBqJ1V7bnT1RqQveBrJ9DZHty6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vn4cchGLWSBAtU83dXnZYHzCnght2nL3MrvuFRJ2U4hr3n22TjoEh54JyoEZcmLcroxtmYLQC9Ktww1Q3AjFjq4",
  "key1": "5LYedvLbTP648WrUqRcna6qzMbjj7bnNZRvBjqKT8oDCAunyNqvBaoM6FG2wequcKWek5Pw6tgJgKDAYWGywE29v",
  "key2": "38cMdgqSeY4iaXurigDXqeJefKcyet5CW9UkjF7odH6q8hFynovEQCFiEVeoADYqyN6X73HVGLWq7JtFNhfYb1GK",
  "key3": "3LGK3PqU6bmQwTkxSxkLHUQ6hBhxL4ZuvhPeyo6N5Di9PSKoASA9spMk6hrNHoAaTpGmJhcFeEmUyznV8hkyHhHn",
  "key4": "4AQgh1j6Jy9N8gKWVJL3GTVn2oi8GAURSB9nCpMXWjGQS1ZousFLMGXQ4DrYnE72zPPpHypNmG64Y5i4jnceH6HD",
  "key5": "5DeUfbfdDwHurp7vH3CU1oUJWASMi6ZZeLBHMnrP11WETuAAeDjLC96MLsoqFqmKNeT4w2yRnK53FoMXA3wYcb3P",
  "key6": "5ys3pUTB7ZmeeLbpACoexoc5Ss7gC3kC3VtpmARJ69Rz1y3hKU7Ai7wkTMz2mGNAHDUxEqXJsE92VHX8D9phnVxk",
  "key7": "yim1wMg5kSxZXMFxBDP7YpzboXjXXxuwwkXjbb69FSqD31mXXqpEUqrsXCpkcsELCbXfpmdXqsVUowYgfeaxaGP",
  "key8": "3r3NU1w96LfCzeNBKKRaQyUn7cSEyhCDmycYD9Ro7s14YMQYksYUGJDz8bKvuTdgaAdLGysBxq4XfreC21hmtgZ5",
  "key9": "4LEGFJxvGXiEdCamnMychsYayEMuqrxkonWKvmMb1xNxVKodsAYBSZ6SDJyrzVZSnY5cVg7WxWeJg2DvKgttFZ5N",
  "key10": "5SUK74rRfSgmEHDJnuvEaTweenWPnXXcSjVMQwm5Qj5daACM5AJj7jBCBk7dBFq6ibjVaMtrUHjXUwcRTyFPtHsA",
  "key11": "5TKRxKdzLz2odCVz4eXDK37HUC81mdsDoBoCiVz44rpnCsPGdtjdRGYnXXX2wEQPspBvXRE7i45rUHy6y81J2TFu",
  "key12": "2QrZoKpnBZeUSRAkvNkQTmD3XXet4xnHhZ7sBPH92gKgXjziQYsE3KtV4sReKHKNSBj7mHfmB22JuP25FBjhWpQ9",
  "key13": "5Tpc9F6NSRoTtCa8svsvAkKBMDeJbbzteUc9CbEQfsAeCW4VQVS3DqyK4fU9hyfufxcTckL42YvsVvsHT3S2wMAg",
  "key14": "KrbJHLH1VWQp878iha7AUSjkxbEqQETpMM5Z5T7KAA9QKt6x7F1LHTpfun5bKMxj56UW1bwkzWVKwi7M1NwxL93",
  "key15": "5KUJZqpMcg66w4mEJD8Lrrpag3SekyDkQRoZbVbEQmWZ2jmDLL33CeDGitpPHKEJ1AYvJj4ump8GAPPXaXe8Q17v",
  "key16": "7uWoG264unJapUVVZzaZnw1bLQxTD8h18rBAWKKgKBpnpoNAD6jiAReoagdk8MWeqf4CfYNnHz8NZ9PK67fbGKZ",
  "key17": "5zZZgzkMHJHiRKXpJM6jiGSQxwJ66nXCAdtqfQYSaFN5EFEg7T2uN5TAQAgAEsg1q9opDQ6S4M2hwmRSXv2jaunK",
  "key18": "5jXtyfnbyZ8P4DhjHiHqj2zxfgVMXumWNckLUBHXPrkMb8jtgUwZ5AvJZt4QsFALWpZwwJjNwyJQAkCCGY6SK5FQ",
  "key19": "Uv788hEbAxy4jmEaQMpWyqn1rxWu31cEBZ7QYxyzx3bWYCiLEVYfLyMQVqBRB691cnJFgND7uJU86nsL6kz7mCH",
  "key20": "66mvw426REu88VY8byRNQ6CKp5o3taD18bKd3qQnHUqHEuTrQVjsXcVpVG1rh9iRxZxHsHfZsJZXhEGjb8ebe2Vq",
  "key21": "5rH91GWbxCma4rhC6NFgwcWeLuQA1R64T7QkxH6Ke2gQiajUTbrkR8WXYBFQepLbWpPpTC9hQrpUw5xpjjVZZQZU",
  "key22": "DUHaUNw9qyuUkmYH4QSE5QzvATqiqoD35pmXLDPzy2QFHmCUNmxrgF7ixoifg39UcPR6yCmWqKiRrwyjCjsv3Ff",
  "key23": "4xRxbNhnSXNSt2ewhxXBih5BvZEUSDcKPrdXvKD48qPnS3EAKe1B38oEWDbwMZN1p2B1VGtpzHUBUsEREBFMu8EH",
  "key24": "3qGxnKkifU1EdnG5neeaEz31FAyqkJhig5zYG4uoF5nEnZmU86sbshNBdTyHfaFbA9RZtyCe9q6cKwHt3NBDVb5y",
  "key25": "2BSSdYk4JnsuQcAsGqXRd76K4ufhDUFhiwmzJedFurctovQjBxavvYe1V4hi82JSXopZjDgZbY23FE8uDquxXcpE",
  "key26": "4QkYDPqudHaokRn54nZUYK6vxEu6f3aNMutbc6xpL86q1KE75LhLC84nPRKT6bWYbAXyawMPojSrF6EiAUqe1qow",
  "key27": "49fXgdEM4Yf7an64FtbffpneRAwTRDNzUatfKGHuncH7ZqEgJNnaxfTQUMcPjpig9EHH7BcDMd337dVtFSaRhpNr",
  "key28": "5kH2d7UeXXwbjqSM91r7JhH7KCkKpXd1kLQYyWF4XzcXX2oF5StMvhcraygcnbW8uxRaztcLn8novc3NTR7ErtFx",
  "key29": "3yK4AfnbvBt8qk5GBUBSbVfaPiVJszeuyt8x5rK7mFZTaraePnh4KA9bvgZy6Kcb1bSUs3dm1Bf83xFppk2GMw9t",
  "key30": "3Cc2X3evhqXTCAK5QWmNzfmVbPgkxzu72jBrsAD7WJw996ahFDwpi7ueA3xKLsruvB4YJkV7EVaeFY4R6BcqojS2",
  "key31": "TLtuEHgRJqYnV9e8JCv2RbVSre4a8m7CQ2aE7KEnT63LzCPkQnXBJcYJcodPQGeH39y36qiXSQRLY1AN2ofUipG"
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
