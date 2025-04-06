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
    "5kaeAgMBjSv4rnwq8iJn87x5s2t87HJeQKCKju4kRKMRaUAefddeDnassN8X82UEnht8gMNUqQHrHcDakjifYBrT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61X67mxoLtQiHbug9mFFvooFRoemJa9jnCQtZG3fPv1jR2imwKKnfAkw8s4PWz9gaywZuWd4nvJ6qR3THT3RBZi2",
  "key1": "B8svTZREKxb1UjdrB5dGFFjhZ2vaaqKsWhuGWU6MVV6HGzNEL86zutpn1rkSvaZHtdAjL4UY6NSiYPhhSG8DSnc",
  "key2": "5dtK4KchAcFnX4axbH6FRCLRRb6UBkGJvTNc5P5z31m9ZjXurvvXavHSu9qDgvdGfF6mbgqhY6EXxrAPSVu3wusk",
  "key3": "4equeKhCHbUfwCK9nFG2Yyie43S24aTGbFDTze5XbofzyCQtj6Sa25G9oEAkQVJKCUJSpi7pgMqT4hD3ZgvbCVw5",
  "key4": "5UKvJ9Hs7ypT6piuyw1dsnzrBnu4dkJoD8CRyrrR9QgKAmx3pdSoum6zkbLASBH64mWuTe6ZMME8qFVSaL26ic69",
  "key5": "5srCf9AC596t2HwQuXUQRCnYL3tjfNNikAu9E34k8BtRswkRfqy4N3XnE1Cscwz9cVwXHgAwhkkm4mQMZEtXbnfw",
  "key6": "cuABSZJY8VizE1GT8hkviuEhJ7ZgqckncaAAsAGVEiwhpGhGnc7NG2aFvAgLC9RwFwU6ghpn7Df8vMURG7BCZRi",
  "key7": "41zWz9XQXnT4yidWbanYa5NkvSxaq7gCAbQCCier5aHZKe6iMhte9NADhbB4enFKtuUqFAnBkYvTPcNVcK1A5vfC",
  "key8": "66jJVSWSr4sbFEcfN5qyCfoCsGjsotjs1kfQSUqGgU9zP6pwQdPe2CQuqhR9zdUwo1S3uYE29PgMtBBnp1BiiY7a",
  "key9": "5A95CXbRVBWxj95c3mn7ng5H89i4bRqddY4j7Q3b6sjSg39Sy2oTH7RJvgWBJMJqyeEo2gYipdbtSC8FE2nscug7",
  "key10": "AYgxdJGgrbo2e2d9TWf4NKuXHyXnFAKg53DL8nGoEGb6upq4qGBV4KWu3pADyAbByEHuGCnxCyt9V4zoZuo6t1G",
  "key11": "5bnL3rfZhGvVixByPSuVRYV6CF5ZxzuQnFcL4TsLMauuuuLorpfqQxXpDTmvMWR8mv6Suf7UtLafAEnx1LYcP9hG",
  "key12": "YTg2RFn8YPqeC9SCAHQJ4rcWirDAyK47S6DfVzKsMdWMLApMf8UydhWuwr5BNoHdbTSQ9ZUSJGbgH5jqsiv6rXi",
  "key13": "61eeAYQzQM8Ej92pJRQFWZWCXQuFnUwNAp8u3hzAYxysUJ7au51fCzUjQ4NWAUX5e91qTZb3KPbVog3wqZ4Tg1Vh",
  "key14": "ydDHWSDdonCmBmYE2vLhwQeTHWYEkYASvu7ayUPKaYCJ1n9kaHvMYNomfeNUs6DySZkSBakLJ39dok6g5poDbNo",
  "key15": "2iYasHp1yHEqU3sH41ZSNvyuGsEUHHrFTPwQ3Zrj17b8TUmsPdjK42FuU291xb7fbn27h7skudar53XfUxUnBfY1",
  "key16": "2E6TH8bEUPqSaGCqVpMh8GJHuyQcZuNRHvy6oe3Au84Lk221Vtj5mSkUx7GFMZjKHfgWtjzvByfZeacKhVipZiG3",
  "key17": "2J23GYFzbALVfzj6EL7UyuXveaMz2ZXNeDMGgZgF8pwnUdpTkq4LeFwekiyWBohSNyb4LHwkwfC7JNePThrq4Zj4",
  "key18": "3T1b523Br1Yfrk7ER3ZEpJQKb2UXSqnaL9EsnK6op6LjRWyjDyjDYRRT6wBzXgi1xWdHS6WCc6WBG3PK3T1Q3NUA",
  "key19": "25ahZ3gcbZjSTKKr98LQAqFjRxaWoL1vnpVBes6bWHpaCHow7BCTb2AFzm6q6i1goXckJyKSzaW2CDtDUEjkdmFK",
  "key20": "oXDJ2t8KzYbGkrqs5CkgLb4XWtiMtXVbKVcKaxNNfQdP5Z46EsTnVPjCbrwNKFvzE8RwWoFSx7qx3RYsmMVVuQU",
  "key21": "4UZpHrR1SemHgeVCDpyLwWwGDs44yVJM9ED7SFnXZe54D3y49fnEpQ2oQEA32hXQ11MoWsm4MKBJHH8sjQptpv69",
  "key22": "5UCT3cqRcj3d5oDXbgvPn5nCptqEqfSHuvLwCLsSzcQ7c4542WggUAnhFXimbyBDw9B1H35dCCgBEFRzL4GEvLU6",
  "key23": "2Y2xZsdyKG4Pp4yNTWsYeNvr1bBLtRB9YWzRiMYYD5Xp5kTE25qx8pw91DtiErH3pDu8ktRERoE8zbxPyiv77wma",
  "key24": "2jaYyuWZkEiBK5jaRY1x8FNQfFo4Pksud39hY67fi5zg36HK18NEVDDyBMCkDDmmvSWFujPnEjwDWRHzC82zxsjg"
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
