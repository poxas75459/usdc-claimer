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
    "KmfoD8qEvugF4Mo3AN7pYeBmRcXJJRRc1yyJPYe7RJv7BUDW5BhN9YELuhkCU74mAgmVzA9GTd6S6KhjceRpRuA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZkNtnHmWjH1EHqMVuznSeAMR2nZWPUYQTz8VPPXJ4SzP8XWMo7iURjCqHn2MUPP447XrZd3wbsNBEmPyFA3Rb5i",
  "key1": "2gbyU8A18cbG3M6Q7BEiaQVEmwWhRFVo8YQBAVvMehnUPwjA7zNvBJe9YEz6Vc4WfabrUZWv7ANkm8ovAe8zGTeK",
  "key2": "Q2rEmE3cmFVWUsQ7TKWqTLSTfPRbjusNLDBrvkAsvcZ7TY6EX3PgQdPyTStSVnJdcoNgoLntBA4iVPPjSCmj5PW",
  "key3": "4GfaLmDKWdCG6xAYyveHVdwNkJiwhf61crZ8BNjEErXazVG4SSt2okKvBZukEAkXPQZxqncFFs1HnmgdEusFzeg9",
  "key4": "Thr4EzkWFmaHZointDpd5gAVSR8EnASmjFLYJ5ewqnwX1UnjZqYVgtstzB9QsL687P3wSpaACK85G36X2pNXLM3",
  "key5": "5sqDiyqzD8qwQ2LXkf84GcJRsMQfsSc5DXAtPzCf3a8dYfmYt8M3dAGAv8tZB4AcUBSepsBsR5pzg7E7cfwtzgdj",
  "key6": "3WmhArFhJBwpQPp6VtyHpaq4Y3FA2x9e4DFggQ39ikigkRFrMA6fjSrbL2CxEsAQhmFkSH3h6EovM5J4VZEB5gGy",
  "key7": "5aRqrZNmL8iAw8GdBVAKjomgNeVLrL4HsnZC9PKfyWT9ZKBX7KThrKv6cUYxQeR8HsFnZvicLkTk5BYbyKjo5rjD",
  "key8": "rAGd2xUTYZiKRLbdAhzhx5ZrpueHbAXN1K1Uk5wddYE9D7bNSArh3vcqUoSpYYMiUqzreLeD3gRRpfHa4EWTUGW",
  "key9": "47zbHuqZwMsbKApHihyeQiVEL1PSJK7pxAy9JuC6D7kH2f4rWk1mgY8zTwDVZNxv1G6VLHrDx73RCJ1k7VQjcseG",
  "key10": "2NHmMN76o93enGSKqtpjCTyPS5W1ib746AnTLSxj34JZs6uDfY2ZSEtmbsG8pFDNBRL9WNu8KtExJP18nCby4e5y",
  "key11": "8no8cznRJ8pjfFpS162AsGRbFMKEnhvXaNUdYSsVysLmznymrwi735zQmuiFDYgDhnGf1QKZgFitbp3VmP77wak",
  "key12": "CPSiwjQ3SSZ6dH4DndcAAHoKjGffB5G2hE7XKMz1P6D513tNLdwXhJEWQxwkMmHbVd9S3Ksehuyo4AQsSFGZWYY",
  "key13": "3C2eTyBpq9jWucKc8uPgaqYfSJ7vELvcjbdGzW6QoSjS1SYvRKuJ9WDFjFhRUTFpEB6gsCDn6KZKVkpNvz1TjjJp",
  "key14": "3FU9nkrGMLUZJfoPEYpBnNbk9fDU2oquzhXgLnoQrixbB9cZYTdR9SfLfTG4KamU6GfUotGofzeNTLsp2eZFtKFJ",
  "key15": "3rRBw2rL8mpnX6RT7UZDTfk2UBhRdCvA8mEJq4sSpw5dDzhLLFmbJV8GJGdL2hmNzXyA5hZrwp6TQZTJhFz1JvvA",
  "key16": "5KpCXodc5so34zhaokR4W4tP2FcfreQbgmx8vZq8QhN667qi2SRVcGbFbsq8LP3DKXGdYsbHx7zuXAM8pfQTBgVx",
  "key17": "5c4gbBcnHkm2wpf8cTQWkGXXVqqh4DoJ4NgDbUaHVQmupFoARRRg8VHYG521fRWsf22NeyFVothcCrjMfT2169d4",
  "key18": "3kEbUb9MBYE8yTkRR74rNnMGpgKWsEq8d9XKRWbPBeSbEtsTnSrjMrZhDS9hXUBFJcouvSWoxk34WHESBvNnxzEj",
  "key19": "fdJDAzthb6UPPhWpP5kgBKLbJkutJDBYgtG8nL9YprjAibVpwVKnQH1upPpc2rrsvHPRhNq1ZqqQpWRKapKBXBq",
  "key20": "54QnwVxRLfRCZhN1W5xgqNCFRFtEr2H4heTfhS4zHnCaMK2qJNVVTKaRLUxVRs6svZuanhoXPiWuK6R1ypUaSRsp",
  "key21": "2DXATD9ANQ5irVKVuyUyjj5ZQdD32w3nEupNSnA6rNtV7VaSHVBcc3raPPpDUUW68VTj9N86g49Gzpcz4jyDGHuZ",
  "key22": "2sXbEnWxc6aGHhPr8LJcX5MgFYNz797XL7Nc29ZBCodmttn3vjpxmeVCnQwQYkqFzYRdPWDYzWowtrg4b9Hxghai",
  "key23": "42hWMnPYT3JcfocFB8ARZX6aEghXrQzSyDVtSRFaZDFsWg3K3skycqQojnL7gCcXqLtkU5ya6gNgVqFwvnidmzvb",
  "key24": "vhBLaL14X4K9rh8xHbTftC2SfKQK6aGiqVGghv4468KjQfBqWp9scCmS8ccStwhTKrosSqhUtKwX9ZXSgd3v3Mr",
  "key25": "4iwgbDhaLVNZqjd6gPn79nFWcUDSW8HkFGCmAHg3niyyE2C7gEDAKKTTTVdk8KobxxwzPBcpmHsMwXfzHRmAH138",
  "key26": "3X7nt1zFnLYntVtQTA9XGLAuGgWvXS44rd1YtDKjZ1PUsbgZvrrFYFYp78kzLWdKLW8LXh9168nCWGM1g2C7hgnC",
  "key27": "r8s3gGsujR5Atae6xHCK6me9XPbqGE9B3qRsTW9j6qDsPoyD6nNwptNJcokodxt6QZpr3Tefxe3fFgFTTs1o9he",
  "key28": "3ojx3xRU7UsRhr8VkYhW8et4GF6FQZVcpE74hycPMWrAHWXnxZSS5yXX9tqLYyMBFfywNdV3nKbmvfWwY7L1cA8p",
  "key29": "4YokSZ5cGzWSfHANuCwZZfqMph83pU94nCif5SSA8uotFVEek4Ae9D2VdRWcokbqGT9Y4EHLM1JzrCqX8AxmLxwT",
  "key30": "3vkmkQxdRGdmZt6XXS8JDo26FtTfsXmigbjknudMNh2ZNnoPb9CThb5w1CfhZJrL7FEKUAtAXVBc4nNzFdKuLUom",
  "key31": "5z4QQ1WGitKzK3qA3PjheqFm44Vs1jQTWUaXrzK4TnJpkHY5b66U7oMCRoggYafHukdGTfCVP35kXVvnZFNoTSLY",
  "key32": "5mZJRXpVqREvHbznMjkzSGrZV4F8MrzfkTMkXNeW5tKvZt7G9aP5m2WNzzNv6ya9oxf8vhSRQsqGhnAWfiByNNBh",
  "key33": "3z8u1mMgsF6Ad3U6tZTrpHdA2sSbd8DYU241scDW6XL7UFaisrRMP7Lbia6EzMEFLcZP3qvzMMHwngSULXiXZEwr",
  "key34": "5QdARsCpmFQqmH6rBjUzDZz4yPaXrh9fRf7bnwVXsKAALJRkRZm919h3YPX6EcEFFEUr7zbwXMJsZeZ2LFhTF9VZ",
  "key35": "4xH7sNyb8YCUuj8vJB6oLwoyqcWA8hmcQMaJcZm5bJLmRB9SQ9ZPchfhdrc8dXGasDDvKp7UDmdBG1mXFhFN8oiS",
  "key36": "3kur5Dtw3imhEKM3nd7kS3mkmDaciHk5fEr5JGAh7p3Soz2ipifi4HYhFwPdbw37eiyre5zg8C3UrbPJsnxpPDVT"
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
