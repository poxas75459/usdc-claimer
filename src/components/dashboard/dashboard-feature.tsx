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
    "jCfPjM4Y9hZhnmG3XhNuj1HrP1G5rQViunD3GCdt1sVYb7xJ8Po9g59FP398EDq251U1QsAMZWYYfh9oEwvJfjw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hFNx2qbYdrqnXgs2jajpGHHSqVZzo9iUz6zy9nTyoqNrthgK57Qn46E2AUsCBZNH6tgNsqjzptEjiZxck1wKGZ6",
  "key1": "3BtvpZwGMvMTMzvcz7hY4MBsrYrW2HbGUoLUXSubHM7ioPxHezy7SS5yWXVJ6kbvbq2c1VMB6LLu2WoCPAHLF3QF",
  "key2": "3xWG74VA2QMWT8w5Z6uyTSMfwFRpcufNacxRZMT7cSsWU9kZxFPF2xtssFtbJecr5BCuQoVTZ3rf5gVyRgypF3HJ",
  "key3": "5D4wCKZVmWauTZwvQbPx4DbehR4Rz7n61waWYPyQfWY76s6HX4QipmrEBtTCJbEX2EUAtLdBdxt5VDDh966k9ADz",
  "key4": "qfJ4gTzR12xCBUgEqf9Z9HHUzi6ATAVj5nXcuF6FB877QmD6x3F7BqVg673NwX4DGmURC1ggTCvCh9NG3tC1kY6",
  "key5": "3vHTHqhZjdpaxU9FD8AcPFVwTU6mYvrbEfvNNVVQHoyqsRmpzmQd2tKV2R1W1MQsPsjETVu4ZKcnqLCRYRZwWwug",
  "key6": "5CeDQxrgfVvG7NMHji6RFvfeouWYYuumNHLenkRiF3m6JqDoPfyA5EmobXuwVutwn2hjzYPa9SrvCEH4EQ6U9uvQ",
  "key7": "288ioxqmfkh1jNe5mHpfRg8W24WXiMQBVH6wGwGp3Kw6pTyjvuaLHL5tqTZ95CXR4nfEKis6Uj44LXfz2K1oru3W",
  "key8": "V6ra8rEBip54HVr4Wabrb1Z4pnmfDRdfiuihibxrXsSAkYCxdJSzynebsxh8bRseAEmQAjZYG6xejqwoibfsWbX",
  "key9": "ggzfShRQUyuPr9LZr8jQJ64GRGvdj9zyeUXuQzg8qfXkVbDyu2YTUnTgG5JSxEgb6Di5NE5mfNt235LaQEQvxhK",
  "key10": "662jEK1sPZWEDWYfRCUZgb2ityUnjTuML4w2Nu7KyWULCMaZKvQJfjUugDEy4oPZyYruzqrPS4FHq1zPRxkn5ctZ",
  "key11": "QZuc96QHYHjcy8ZTt5s9hyDXqAZuMdaWSX4P7phBDRvR3Xo2FKkvruTWseRnHannHcSMfTLRzM8R88HfvvtjF18",
  "key12": "gmf2xvhqRf6MengaG34UskY7sZhtQEDRKXUsVV8BzdEB7LCTQT4YCyzaVhW4wxwRBdv9xNK1Ambdoas8o8DfpSK",
  "key13": "2UjeZWS9p5diC4aR2aeviuxvYkS1htzD1su16ppJKEF1TDNwzAVZ21uakMyJoLCHhszY6pcideUHGqZSEyaLyX5z",
  "key14": "4s9UJeTaPQq7UzJM8FaU1xh9Wji6hvKUnoCkAJf2h74thmhzJGCM1eAJPGD7NsKeV1DaU5euHVRkJdhuUB4D6DMR",
  "key15": "5wyfdGLhzVkGRYCmkpTgbUCeUjScgmvQaCPEqNRShVXLt7wHPihkiAP2konbAtGzfyX1fNrzoyZ44n3DJxBjUv6x",
  "key16": "61G9yhG4QdpHHkf8VxRy1T5mMjyTxXYGAWkGTRes5KU3fJ9KNg5D76MNHrW6bCfJPwXmUoonVRMLYf9WQUdg4ACJ",
  "key17": "3sPBx5jvxkaKrTgEJE8zaUJo15VRHHutKcnymeBN5LPFvBS37ndNSH3BA61XV2A4ZvP2T7p3feDvPtFHwLqbeYwi",
  "key18": "3NAJsM44EqDUX2rFXVBHMrD2LgzWQrB1RhhymsPraFCWKd6tfwTARsLtFVxeNh6jW7pJUom3cL5wSsXRpGkpbhMV",
  "key19": "2bv9Zb9L7omLcYzhW3dQzpRQJS6PkNhc1SbWjDJpsBxLEWMQ9YZrMCn6hAZZQBWQz6ctfFwSkuYuQAL3xe9s3qdb",
  "key20": "3QV74KAZGADFTkGaFiudCU45VJJCC8wbKFK97izLYunjgt6ZwjkvsxwSJ973uZ5ZuyicpBvCrYeF2qPCDG1dUy5h",
  "key21": "4w5n8ntuaKBfNrPWNcwrJKCRWt9oANvjLDQJpBvkAHHCn8itAmivYTYpt6xJMee5sa545HFEd1ftNM9ETmPH6VhT",
  "key22": "2WqNT169yrzLse1x6VcMBRrRYgmseTCVwEEN5TEqwruhLghwhNxUKeLJ4NGXRDyZTs8Arnf6hHnvD3qy3c2QXTN3",
  "key23": "CCoCLk3As4njxVsZcX4ouVjATX5VRramfrrvMKTMEuAdG6wVW6sFCY3Sj9YpNhKUi9mtNoJCFnqBjQkKEnnLMGW",
  "key24": "2PPsWZPTfrMNsZ92acZY6H95UbKyNwSZz8h3RaZ34QaEbbH9mcX5swWS9oquhYjpny4ZtVogBuUCYv7zGnQ1braW",
  "key25": "ZuYRyi3CmX7TFVa9DSgfNKrGaR9q6ksRnmGWnK9PFdwtmYoHa9ec3dQThcS8nn6sKRa47VpEstvd1khvi71aBSu"
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
