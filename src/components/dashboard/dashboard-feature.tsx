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
    "5zgHPmZS8CqurmgSN36q5hTQ4HRhZtDu7UkzFPXhCacPn7uJsMoskFzrheFWfkNRbeVomGZsnEEpyy5PbTm8FakU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BTWTLj1SmWmJf1TwWCrNACEuMajWsSMvb11jYbqHSL5kqkbPCBHDNMGrpKsmvCAKE152uKnSpcuSev2AaEUEMse",
  "key1": "5gjnupEDGfd7SGf1aLka1umW7R2DhXDSzx8eN1avM4Map7U6zw7KYvXaKUSZr23PpoBKkxTJjeS6v3Zywo6d8CJk",
  "key2": "5TfJ5DD35ohtDMTQV36Z22QUcwBjBU67H3hnkuNfkHvPXp16sP1H8yKhLsTotGr14BA7TjPHEqz39ywVdAfjA8EM",
  "key3": "2avFyJpkEuDo5VeK91K6ozq5CNFE2uDvW3BBuM8gyjvKWecPNMjcSWMitVZKzZQUeYD3d5Vo1cA9RruLhrShfUAZ",
  "key4": "23M3fAbvnTCeYryYQcq9Y4aNqU6cN6LMuA9rR3qtozLSzWqjX3oMpaCwPsEhii8XnTTrPQV3v4qvkwYsQkkw47Kd",
  "key5": "2vQ47VADK6V1tzEcrWNqfQCVJYMG7EUdL6VmMoqhMBjogkoZzVpUBG8AJAwmH1bB85srCRH4tcUV2kcdo9FGXtDL",
  "key6": "42n9Ys1zRzn6bkeA9unFox5qv2C4BBcf6npUNAqDwdtj8EAQ3mzgQEmV49y8ze2JqmK1G55x3dGmQGjuHy1WVn5m",
  "key7": "4k97WoMGAf1SUS7ZniiYs6dncDKqEgX5AgM6RFgu87oAjuYeLfyxS2K3nkkCgrdbGS2RCWeewi5vL2jafkQaCWce",
  "key8": "neU7HEgWtXRJ1Ukn8re2n8DKhVvgu2siQqXFgp5fpBygLRCBf6xSF1vhA9oUQVzVsJRKyPnxVyhXrfLsXTHquyL",
  "key9": "5fvLXLjAtP91mehL5m4PRrpJkfUR94J8NQxKueKpL4VLoU9DU19CZtsZmtJx7KmYmKztnGQU4WFVNaLK8TkrKtAU",
  "key10": "NGpBU5MzTqydEPxzhwU72cBEsmqAkcskWSFpL4LdNrj4NFVm6SJ1DTxKwTdtnecZw5vdYzZR47xUENTB7KQkSeZ",
  "key11": "3trXcKsU55hhg7dee7iJJvufTcg9cty4AvwjgAiUHrRPFtNYjhPgXZ8pyp45phqn5hp9HMsPxvQcF6S3JhkATaoi",
  "key12": "5GqKctS6zzDwx271LsH1xkDPSV9P6mAED4vpqoepktSyeztFcKWfk1rwHd4B4nnBksgHhy4qDKQ9uL2DLc3LBbtj",
  "key13": "4CrBe9J7bswRMhnkm7ew7c8An1cMnVruU5zcufrfXtWghpUud6eD2DFQJEiwcBuMM3ywoSAjZYimJuCv8Sq9uXZF",
  "key14": "cZ1av8sbxtmuvHZoFakEHyZWhxv3EQbjffL1bH7gS5A8XdBPsABKyzkDS7zFPfUJa4oLSjYmw5qnEh5xwM148u1",
  "key15": "5LiX3ZGFxDYG6MFRBpnA5ZdWbj8U8nqMiQsVrUYgVqpykB84UCb13NS46eRvHMFBzaFmMiLxf8Apc4v2Mj958nkJ",
  "key16": "3uEyGEWppHmqUJ1cmNtqj9uPZimZh7d6nj9ynUyr3fUPDN3NKAumSr7sroc3nCCoGgX2zmnrL2xMpL2hVpM3M6JK",
  "key17": "3PprjE5bj4wV6cisyLW8Q6bptU22xJfUDp77ZD9rMyGrPrUsbnpmXBoojTpMLQnoHY435qkFkPjJopz8yEiEb6yj",
  "key18": "2b5eExfqpviwxdoTAUMkPFKSdHeDvBGFLqgM4GaAnispMx5sQGmUBWwvYrFFKBmrmrCvAkR7jnMJi8H8dJoTkkNB",
  "key19": "3FBahC5uCo6FQ9fGo5n7tYf5FY7KqXs61Q4pEatJweuWk3moNMk6jQ3iRwqDicAxeJvXJk8KAVu9KLNb2NZ2fMHD",
  "key20": "oBXsRL6NLu82oRWECkGwxCQmNSpEG2fGh26REPHUCXgCtxzQnM3L8tJVnwqBZamPvSCL9nuUdY9U1eeDRQf5NpM",
  "key21": "4N651xsBZcpdz7ffsqQ93raZXKmeasoezCPaYYs5aemGA6fMPdWRXadwpKsvvCy7eCtEayRBdqm37HjVnEcGmW5w",
  "key22": "3dbFtG88TqNqFhdTU462mZ2fNQ9PLmBffQ9VLJfNaSaKdfqgnsVnb9hjRvfM5PFTuq1PizZWDN8tgNDcSbLyfptm",
  "key23": "5q1Z31njcRwWgagrcoa7p4qygCzVPCKGvHUnHcZbiL4zqXYPrWDq3vW5RgudwovgtFXqQmH3eGkqsn14TfaGkPU1",
  "key24": "4cSE3iQMWTbr5fRXCKKXejQpi4sHg2vcwcJKfFeNE9hGD7PnQwfMPwTZQURC9sWFb7Hjf2g7cU9mMNiA4ir5WgzL",
  "key25": "2b27M52CSdsaCp6iorzFjq3t4L5nxCTzNEnXEZzxkmmMh6tDZDBLkNSU9nJ66QH3tRZgoKc8mbe6bRhKJ7Y4m3Li",
  "key26": "4hwXr5kbaW1TcCK35QfZDPbPxJ86tNXgmQu9rpnfUSDW7QurACtxqgSJvSUWTo2vGANAfYN85BjRJ56BU6pWHzLQ",
  "key27": "2cbDZEU5WgMT9XrHSy9R4whNWV4utTCfzwdrxxvrhEgdpu75SRYyFPZFukWXHhRMhXXUm2TpL922gQSY8xri5c1W",
  "key28": "3rSSnkjH1woUzUiwyeUreYA8Buzb2hsBqfBfrf3MGiENiJRw1SRztBuNtYQUMknxYU74EhraKK9FyPzz75o1fN4V",
  "key29": "3be6oWxTPYHtvceGqqNF6M91cLBigK3qoQMF6J31bnYATtXFU6Ro8x2yFhL9mFbiv9W3TXGRaaxEikws2ttqjfkN"
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
