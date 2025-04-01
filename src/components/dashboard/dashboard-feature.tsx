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
    "4dBQ4BUn1XW7CKopxT9NgMkY1w3LHxtgCLTgKK9mTiArovQs7Uwh7eRvF4R4MdsTv8eph8u24zP5e5uQGdKmEm5W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k1aYvDRzQKm6hM2CqpNZLkFhdW9yLVEgVNHYwJVn31gYqNQvu3CzH13RkMi5SQJdrDUSiWN3zZN6CnZBVRzzLoe",
  "key1": "62pQGJsZ13Sr59SgwCvBQdV3uVH8ngBMmxnYV32tox8JxAq22UrsKCDbmsWHKjUjExXtB22CkkN8XfQRPmrbwHWd",
  "key2": "4RkSyEYKiyb8p6UmVH2a5ueyVBSxmQusNReuPERnJrZj81QgNofKz3xrFNXzoRmHuZ9LsT6wB1YksSJ3JGwMmKBK",
  "key3": "akMpnViE8zho7Gqa9xS4AvJfBqqjXN6dSnc59T6eZ73hzbXwnTuhyaKKRBrwLLYRXdFxY4w3ypKtJ6bYtFYA9x7",
  "key4": "1JP7xbjmUXR7yzkhqNQLNULGLLwUKomEEtxon54ZRFdnPMdKRifSH3C6dNNiJ8FCCGvWMH47FtwojAGeiJ8z5qd",
  "key5": "3rr8dRXoyT1vtEer9uq3xeDiha4Qyt2aFCU3FLvVooeMXbYjCeL21FCSXwsamPovWCvgpR3kobox8Y3JPVUfyGMm",
  "key6": "4jMYSzCinph9wSgY3MGWuxYet7dEfEgZEkU6vJbRPjZBVDHMutnCdooMTDpsT25tyqdUSx1gf5S7z2ZtGkA281Xw",
  "key7": "2bG9HRWo6xRxV8LZjy1Ve7dzakbCKNifmr1pffp8JfXMf9KnVm8AiWy2JxYgYE3itbuWcAsZNyDzpqCrzdg94tpC",
  "key8": "kBGAKYpCrRtBN2imgcUdRaf19hNLshnsLbDpyLNiG5i44cZ42hdPBamz8bi4x5mqsgegpiHNzoAH3ZcbteELxeU",
  "key9": "WNMFBLLXjQgFUwZt84miqQH6USA9EqijsQaQjSBSZxqTPeysHfiBqB9biCdKfLHoVkP9RBiC8FEJnCJUMwdi1Sa",
  "key10": "4vjAZdRVJLqxaBQafBgK5dAgmDmvRezPoETE53RqF5rk6vQopRQS4xPgiwyWhvfag8DQaE47kJSFtZPd9pzzrG2",
  "key11": "3owCPgmeGjKhYztcpNU4AMb9nsBuDaLaayY7Xwtzm4y68Zi6Kpzq5FKrSrDyNWDSh5Z68M5PFA9NNU2Dtjm1jrNB",
  "key12": "5BBSAiUZBoJAop1EAPuEj7Uy2iN5whmDLnoZG7YKUDkg9Dms3dtRk9k5wVRZa1Fx8Q36WE7tznok21DsTxX2UfAJ",
  "key13": "57ZpGn1fBVnkCFdzhR2JpKXKpiAeszdNaahFXpn5nxXa4j7Kvk6CTfzeHZLDhhobj3KwwqnLSoc4RHanUPxvgk1S",
  "key14": "zAwhqAzUWThiNQsdGWYGFNut1XRmJhLncUgfsbvt38ByTob9Xc42QQszCNQAgBucZC7zRXgEqFskxx39BEcFgJL",
  "key15": "5V7sa7YPDCSjTnre3HJ1ifMoMtZsLHeVynHByeJC7UGmHg3LmqKUYxs9B8vaUtPZJbJ5v2yq24xz2BknNZUtrZiK",
  "key16": "2f6CWfJ2Ce5gBzWGk95CXMhTMW7WqyTrM49FGySrj4NosoZLTfQjV299GpAusG2ttJmgKNxEm5Zgd8ievFvhZExc",
  "key17": "3v7e8g5AKeepB6dJXwxzqtwB4xW1idoxBuUH3rrumc9SAE7i5CVv8p59RXzQM4rnupB9wEUYrPgL2nsRkZNDGz9p",
  "key18": "3dKMZcZYiCTNMY9C7RdURYJVhW3vucCoXr6Tb9tB3uBVUrnyrCahK5WRcwRZB4vaXb9WykWx8RjXscARuif8RkGA",
  "key19": "2LTuHqxMiq4pZtsKAp8JGonbkC1R7bBEvtQioG27hkVBPreCwhMyzM4S1anDTn6kiq5qJqaehc1m8vH376oCFJc5",
  "key20": "ZeVqgtXNp1ZKgdBuWGBJZDyttjiKS5mcTWHCU37P7NecLbd7qMpCw5MNfatPFdXRFQSQUJAzEuUmd5ivm19uAU9",
  "key21": "4vSyFzfCsbK6g13gZRaotKpKSb2TUg46VqZrg2jhRwWNtheGHmQ5rztqk5T1hHCmMC4q6rvc1Lj5MyCu2y9cc1q5",
  "key22": "3gUT82EARBsrVuFDNM5rXvHvoDxjozwjMir8exdxP7kr4YGJ4Q8NEEX8HW1HkqsZCYJNAQtB3x5Fo61vJRzy9n7h",
  "key23": "2bFfNKJVTfxkhg3uPnFNwAFpD4nUGkrBHpEByKN8GozkXYvoDpetiuD1x55KJ3TW1nVVy79PbTde8b1nBSHQkqFp",
  "key24": "5G62kSJxzXeiA7wydaeVtDqWznK28WwyHrscyLk5dvtefQEwaN2HSCeuzBG3zk7Q1mYRYbxVHLXjfcVA5o9mSVFY",
  "key25": "2mD16NJnoEkcATqfgGkSEU8XkpRxZ2ddKMaREedEpcfguJVyTEZggrLWpFrSXixgEBJUuziFkTvfnDGWNKwnRgDd",
  "key26": "5WBmEFUw8d9BBKnGYc8jbgrpH7fwQV1rnxGNbnDcN4zo5itLQ9DzRBcWvJdrgKUKB1mDzDNV1GW2LudTfaGCHsW8"
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
