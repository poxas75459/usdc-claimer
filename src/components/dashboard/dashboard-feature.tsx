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
    "ScQbY9vewPQ6iTnKUWJBjrenDJzCFRHM9tkahM93ghdnBDBs7XxEg6mrNYhNsfNYjn4CSs6RfpNPqq4TUpmtcYP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KRd377y4aJFQaSARXCTqQszDxR3NPFHDVUKk6mv9zXsNqEQhbUXF36QAnjzvxqtSzD6E2oRs7FzuykcfumC8Rfr",
  "key1": "2xqygvxHCcvd4oXiNVspwuFLHibqURVZGUW3yiH3GrKNPbi8WaRDWKcBuAiTXHN1KSpT9NvTn7vTYgNUb6Dp28Pg",
  "key2": "3VBTbKQWL182hmRqA8FQDUUanLA2tFnKEbuWztkzyxDatVQiCX9UZTWCSoh62wYjT6NouEzVugRzvqBrTqxXHKL3",
  "key3": "36jxyBYR7KS7pNKXJCyqqF8MyM7VKCygUuThsTxK1pNJarwSUT7oG27VHpLzxn2NkJt3cuS5CFbzU4cu9zGyFDmc",
  "key4": "22ww6EZV1YtgbsRWPLEmR9tnQUUaPtFJQJ4AQN76CnZhYRyHuc3SL3YZ58ct21EhbLWrjpnZj2cf89wnXHFwaMd4",
  "key5": "4sJsquEBDGJwBvcfuzEFwgivGxb5f9AZoEXNSqqfpXH7CMZh3LxiHCDC8hci9wTvxiXPZb8sNThon776m65mQ2Aw",
  "key6": "4EmwzwMe6r1qzg1JtPmbN1Rmbi4V991c9Hmtg86fJ8BkeFo9xCXcnCkZ4XkwbZdLDV18gWAfLcZqFzSAKjpcboZT",
  "key7": "4PCXcm16GTsEwfF5WK84EbHTUBDBAkM3EznC14d8N9yJ9VDkEPARSj78tWqqDRjeTERd4FnTmLPDUNyDRg3pF78z",
  "key8": "2dcecNLR3Qv1TWqMNi5ePa3avtvB7TKajcjkxVRqXoAtN1nnUqoTLJ3yFjYJGALNnvkhX8ye9TKzq7SEi5Wjd2xG",
  "key9": "58VWfm9VsrfkBvcdTdi6jGPYSnnRHKEVCjUfHNEJDQy96sRG1niCgavemKGWE6rJbF5i1Cx6zrbqbUG3XBz322Up",
  "key10": "aV5sD6oXZnfiw1nZcnsnBf8FH8zZFjGHKRoAS9NkTpaiNZzk9ZmmzL3ZB69yGKWenvwMuHsx3CzY5DbkazGnZK8",
  "key11": "2mtkt6iWzA9i6N7shC38yb5xAqi7JPsjtasF7TaAxG4H8yydgfQRM5TbLpnNTvjoM1xJ3ziN7xFBNxLhRKSzvHmC",
  "key12": "2Zv7FF5hSsUH4JbmUqhkSTEedoj22A2PE3KCxED51iGjGa3hUPGSZWnQbJ3XkC4BuyfejF84d2VfSxVvkrArpiof",
  "key13": "2QDtE9cXf96A1BvyesrMja26uG8YJFXLwQZnGnLFZDiyhSLSM5ADui9iVF6tMP5Z94cLWA4AVkZxLpnXXgXAK1Eh",
  "key14": "2vqRJACJjsBVC3XHHBRJMSpePjjEConKC1wn88t5yGxGL6BiQnbrEvPhVjhxYKcqRS39veDSk9TYtWxPdgnRJtbY",
  "key15": "3ZTAffiqvQ8s66QZMrvjoFJZfu2iBBUBrbyGqmbEvUR1M5ySXehK78TJWDPWQFZe7Kt7hDE8kj1BAaU6hQdaZE4S",
  "key16": "2scLq8czNpFmGPbDQueEoPo1HLtpMJtAKfjuVunv8i3GyQVmMUDkAPiDjQcJDm7iWtf6EJyggjGgfTXFExXuYzV6",
  "key17": "evUViJb51D7hVugzxAgbHXgdhrh1XNo7MF7C3E1YMfhC6hgyFLWkwUzeeGFTbLy4NTG3fqmCakkzoLcF6aQd4cZ",
  "key18": "3rRmhznQMAsbMAPgMZz3YDR6TBJsxHEQthNsWTZtu2dNW2GuZxikNVwQpjoH3139oze1wwtYX39P54yLrANoiZ2X",
  "key19": "5CKii9Sw87KMccV4PdJfdVUAxg6BHnYWYkfkwdHZJK9E9xTaaJbDLkrMWRGGQM1Gb3EiJ83yoxyvFGqN5ys8uutv",
  "key20": "2EG2LjDwM7vtZ5Rt9L8D6UE1LEeC2kSu7oBtAmPGFwWSuXGTCzPBsxRszwYEABdvEyydvYTNRohuyDNqqcaiCJyc",
  "key21": "2MKyHoP7n4kTeocaf38yyMxbHvHqNBRraW6aBScyQhYNPocbjCTkfiUwmT7JW95DB94uv6cHouioHAAeQx5XU9Qa",
  "key22": "DbdqJtiJGgAEekh8myCTDXVWYZP18VJyzSXjRzHZkqvT4BAemx8hFbxPfQH2exxtgRbiVjfPdKXYsyy8PeimZjw",
  "key23": "Pe2dJe4WKdFVjt7F2U6QHXKpwQFMwsPoSB7EE9Aw8PxxkuqsNxhKniJs1cgbwiDVCa1D65tYqxVJTMJPt6LjRtx",
  "key24": "5wKFiCpW8yaX964z9v4VjXmDsxgAP96sfoc9CiYpzLnwhCsPeUs6BwYCapGXENqUkyKK265defMfPdUUtgd4pqTz",
  "key25": "4aPHy5Eus8Jv4NYZEBkaA5vKNVmYwgo13Zk3GtKAVcYx9ZbLwK8ExRVVCpHPRi4iZt9TeKeAyVctj2K2mQPS5zg5",
  "key26": "3dS7st72z6cYFMg1k3GZHRNcEng95DghKzHeSwoUa9DzfrGu3RNv6G2i3NhXmWj7P5YZeQF2AzkFDkUt21dscZiP"
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
