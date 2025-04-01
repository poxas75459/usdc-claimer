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
    "5w3LWu2ZwB7ZrdFiXwL54mLESdnXPgaZVHq1AH6TTMgM7Qd6oGHjp4jRMW7rkEaMeFJBQeuQv4svANercNrHk7j9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57gFe7LffdF9dvQvYdGRdNmp5nK2hrTPAYfQsFQ5tdEYxFLc8duYAKJ5aYuyPUDahq4gYjonfzeiRiiLwUnmQ9f3",
  "key1": "YgnZwGtZQYqSeY2z47kPEYgz4KDK7V4E9YvZPRZTHziSmFoJwb3BU68AgMbrwxx48syJNN5wg3EiABhN2jo5DSy",
  "key2": "2MpVuSQLZxqWgwdr94XbG8W4vxtA9JfEYioZPLPMnbJeEw8MtGMhASdvtwBwzxBFassrnohwXpiiivHXBJp7VmcS",
  "key3": "4gdsTKssWCZGwdGrU62hNFUH2pTzrxNDRBpdzFnvKBCcZpxqAodx4acgKoTLRAugHgKBruxDjHZjmGaf3DCH7Y4Z",
  "key4": "54fetccZMTmjo8JnjSJDuCqyXiibQJ5nPKDr1tuCqDovK7xYsrWH1kY3MZ3Cjgt31yWkV3VZ9YTwfEaHvoZLZbV8",
  "key5": "59YdQVV54RcRmjqLdo71qzTgPoGntdVc1zJVP5y7SVabcmCkxchTBjy9sCJmDAi3xU2jKjztfD629dEfzQCn4rxC",
  "key6": "2iTmpY9V46rf55oxrDvHrdRvz2ge6pgnDxfck5V9hmznDLAQ2rKEb1ZBHjtoR2RaAz2EZm5FJL2fuDCpgsnMnCHk",
  "key7": "5ygeuKeiBqboCKcMoLoDhyQP9GLrjoyyR7nYeS83oMVKF3D6grciS6zoSPfGA84jmhjkT4EJQjEYZaEDX3S2AX8r",
  "key8": "5tZbjXUEvm7qwcRjSY3EdthGuhdbtCvoVX7cA1o1jvfooDVcx2H3REHWQRN9ddyZE5ww5s1GXuqjtcGaTCdSdaUq",
  "key9": "2y6wvcDvPygQwzqZYE2mhUWLsZKMBqPafMJCMvD7rPFveYLCaBcVGPi4koctBvEizzr8iT3XgAW18hMqQnkdX2HJ",
  "key10": "v7KSHExrsppuC8TAYHK5uZnYRmTc3JsnfPhn5QWawK1Dak53qYvwVwpLpSPsvsKiRHXqKhyrpKSJL6ue6qJ5tKQ",
  "key11": "8BGGa1ymGxAA8cd8qtn4NTDqqerhA6Jye3LEju5UBHpFGt4erMEk7uRVhEqxSmozdt47iEk81UnapvF2EWX84Qi",
  "key12": "5aP3UQauFMeSaiqsS2mxN9qxmAT8S4tvNH4G7aDTaUARXtrKsnxNaaqsrZcz1Jn5gfAoTqJUVcBYDxBg5BJPjMGe",
  "key13": "5CGLMNfS8jPs23Jn3YTFAe2BokvPPrfL92oqbpKFQGqnqFA7pXjBmUwdhMK5d4JHGqfEdN4JA2JTxTJXBMPnpaeU",
  "key14": "5ugFTCk8vFS7KmqzQjup5N1PE4RWR9FKGJHdBH4ZNNoFuEtknywZd8VgAKCSKuJbC58HVm4sXeSvD2VAcT7sKvAD",
  "key15": "3bnBBHd8P3FcPRiro7WyWPteGWefQwr7b3M9RjiEXygBhPpT2DoMedUY5ykuHsmVYFkcEv8xgWbHFyJR9XZrD3eB",
  "key16": "67YRabrzmGU1q8ZzChVysW5KMHeDxPYZfMxyDY6RAxvvECFW58rbwajUoQHzmFawWaMfDcbHRbUXpcyN71hyu7BG",
  "key17": "2sFkXsuVvdxnxwrXWMrRU8mL31utgW9kyDG9mdAmfMCcWQNnG1xF1KgQ9CGLSw3AskjuaDtWfzNjfhde8nNExg6V",
  "key18": "63nDK3rYAqYSAcLiLydER414xxHqaHrzTvFxv11D9DgwqQWGkqnVWBuH8SDmuzopERJg71Xy8czQoN7nSUeHjQFJ",
  "key19": "25p18iCpj5bQDgoWhvG8cGnrmbK4FvJMj5KEUd3v5g34qLE8muNy3UXzuxSHqCPTmk76qJT4XKdTNuqT2U2sxqdN",
  "key20": "2xnVr1nDC8pWdH16tNWRse9ga6KHVBW2CxhW5hRC5pGzVopXz6VStAnTLqEZgLAK6hVoiJdWmhQgEJooYCpwdATz",
  "key21": "3qgQkY7WUT9oph63khjnR3KE1jne4MbFiEEVQfGwpomm4hk99yLuENuRLWLp1JjEvPMrVPjEsssJzar7H6o959VR",
  "key22": "2rfykLE6W8iJvkouXPvjumcvgopW9YRsBEr5oqDunrktFgTQgX4io3ZptQi4btsfaxJiRDqQMCitW3HxdBBKckJu",
  "key23": "5iCxYXZU4jwXWFiw6XvyiTCLDD8EGoCm5atk9V6DbM2GreV8JX1itB3C59ZMtzCfKfyLkGQS3miVvAR1xCpKWSkE",
  "key24": "2rBhRFJuZzR1txatQQ9VsW5QJ3StKkX3XSJT8Vv3hwuTJf7GXnaSgdL1pbMUeWoEVun52GzMZRRdKoETgz2yqLqY",
  "key25": "66HcqLRF3NxZ3Ash3hcFpbEZRg7E2xKtCGycD6F2KEsoJESeQehmNMxpVBeWbakPBSUZJxLoDGjiewo46Tk3GrY8",
  "key26": "3eVV87dnxtk2JLwZ6SwA1tWZfETK6kJ2x5MKHvuXAcPpsVJJyWfTxP631Q18iFDrN2i7JbtrLRN1YH3duVY7vjSQ",
  "key27": "4eFpoM7fRQ6vsbPnbbvYyphQjx6DwTvHMgWvKPtcZAA9L7EdxLLPqP1LE4Miofxr9B5F1GgN6w4LwrJqrTezkxaX",
  "key28": "5Nk3w22TDWCpeCXrrHJyVPyxkeAwBH8879PnpoSM5kpHBhxB7zrA2TBd1Ros7qeUCtHoihgu2rWRgg6PuSRwQjvu",
  "key29": "QhGXNnvUh3UWmrVUNy4KSnzs44rHiAjpawqLJZz7RTB1t9CcNWLno6VD3xTGJHC6EX9Fi9AYG3xxrpJK53NASGq",
  "key30": "3jbFpFPWaNgNzuhDNRx1G91ixsUmWJ8e7oWbSnwpLS1ZznJat5phwJ15QpMcstmyG1PVphtobGYwXQ2JZygK8x5X",
  "key31": "LAtokSjqaPLxxThbmi9oAD3w7Fno4Yr7dTPM3zgtXdJutMo3ZmADURBGbvKLACv8QvmPN8bkNnC2fNn5BJMwZYj",
  "key32": "22htV2k78fQ6bw4hVgGBD5oJPUrRnVq1vgm67jWG3W499j2VuCrkPbJcMd45LrGU9DaAXv6Y71jiZBkazC62Gpnx"
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
