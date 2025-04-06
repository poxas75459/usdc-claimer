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
    "2F96QFpvwRw3smcQHQCv2BwTW9a6j2AaCNNTTVYJsL3iHUtS9svVykNtyLjUsSbnBcjtvBzEEayfLEYV7WkgM5nF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JK3r4nE69bNXn728f4Qi3cdBLcjorHvYsWbQZ8onVi84zqu66GEJsEYbVW6aihjGAtoc7bP8v12qZSFj7Qru6dw",
  "key1": "EwApJ1rZ8tTqUU4SEWsdDZXKaxFncFiR6tChYX5FiTdUSmzaeRhcEbp19fvMBbSPj1kmZKg3jdSeNijkAAyfyHo",
  "key2": "234S21McSDh2EheM4sZVFbEnA7twv9i2UBYzyCtvr5sRJwCDt9SY24B9s6nJnxTECnctCsTshbF5qUtTJnQapaps",
  "key3": "5k11HvAid8rp8vgQvst4AjXQ1e2vPks7h3g7ug7cCqXmKmSJB9kSr8jrSa6oKaAUgtHfunxyfTJPNrwyRijUM4bQ",
  "key4": "4SJRry96tqBFPob4ZUfNMGzqWdqMAxiL9iEavrcyjcvv4r9gujHrcsSfHPywpnQziiiB15vEErHwvZbSJFMiDrFV",
  "key5": "YeV4wUC3s3vQDs4fWWe8wtmZkfZ5fuZBfuJB6RskDNHrmovwW9pUdGhKfZ6XeLiqQs7eFhf1z4TuAQDZP7TPY7M",
  "key6": "65GGKUugWJDaitbUt6aKDKcnUZbgVJnb92kkJzEET87CXgDJjxUbn2BvUr6E7WTdCmnxZfH83RdMP2JoucaYqxxi",
  "key7": "5bXwStdwNSNjFJHJqrHLqwcnhhdYysh1g8HzBUt6tzLnVZfnWpXznLDQFLkNTsbnqf14JHEW388KHCnFcpugLoY4",
  "key8": "4p9Wf993QuxWQFUMsWdUJEaePDqdvy69xgiHTPvMLqL8vpYk4Pm9MPWL88WGE8Cp7H4ToriTTEQSTnhtuN7j9hN2",
  "key9": "xz4qWWWpJe47m1QX2cL2eY98chJtseiLEvSZrsFAuktA5nSM9oD6BSqjNaqNaUNaT58cSb5Urhcgfrnutt8LVxE",
  "key10": "3nrPiThpUWXMsSo6rd91q5SS2xfvvG7UCTNPcy3yzh1ndS9mR7xWueyLp9AANrFXgjiDvJJ5xajiDW8SY5fhqqBB",
  "key11": "5pcjZJYWHHcaVP7UxPzUwLEDiW6QKmvV5yPhLjeMGY9h6r6iES77H5yHKEUjdko7nDE5LasswJ311AdmwqSRJ4jg",
  "key12": "38JHCwL9K3YfytaeFzwyTEPYC8nNuvCqSS3tDLiSD3TAbHxMaWVcBzbNTnhdNZz4ctSeAKiPiweRHmKbeCnMvM11",
  "key13": "4U7VeykyRjFTYGVwxnS9rv5xtMw5LoMyYP6W6MSzCSvuEx9etP5wd8iTAe8YFHJ6gijuqqGLKeJAVirDXJTdEze7",
  "key14": "5XB3cypJ8Kf2dpt9Ku5PbwYHPH1rb7YtX3ZBwZSUNcwi8f5ewMy5WJbC8yJvTExLcSGvRX5CW9L6JbsuEwmLRo4q",
  "key15": "4GwA9BjJJ8cUxH37yioac8GeBUneFjQ31feP7XTGmj5dbNafQJHaxQw7oMbuTmQgoRQuy6vw4WMf7HDCMVUtqYCe",
  "key16": "41QZQDmw17cDD8qYwtXsuTW3tD3e17d9L1c8yDvy3w6CTCCk9aqKMLCer6jJomLoZmGbB3nCDaMgWdjx3F3bdj4P",
  "key17": "4cVkZXm1L9mNc7AXfjgJHQfXnS13Qgq8L1QHrWEUdxvbMwZMj9z3Yh8KEH7fE3feZQXhvThAAygu5KSZg4tnZXhy",
  "key18": "h5sfz6p3hRyte8cKcLKLR6RxpT74vTsxUpaLwQdhm9bHTQAyyRZnU6M5c4qteC72d3jkcpZJvwMqezq1ws1PvZv",
  "key19": "32RxQtLdTfJMJQJgkSFuiApcrZRmT6tvds3zhuHE1Ak5ENcVd1sBh1fDoqJ1BBfnQAdT6V3eAp4T9PSK7JZVu22q",
  "key20": "zfjjTDSBJvNN36AGru3f5CNjN7GNtG5LCvpited3WgaTBZcqcFWzR6QhFvJ9483SVhir4mMRTuDRTi62yW88EGy",
  "key21": "4zhXk1qKkW4iAG1Qnnf9Q1naMRqqKsnwADjNVkwgm33sfmWPQLBwusU6uzGDeXxW2JAkFBJgFFs26dv6gMWApkC2",
  "key22": "21q9PJmC3FgTNeW1cf86Cc3xrdp6TyU6kJTdARPs87yNoTfJPjXe1EhCHxpJypPFMg2H6Whu6kgUTgwDuh6nRCqy",
  "key23": "4g71a9ABixLdXZ5vwdhTFD4JrSUF7wFXfTFKVznHFJnWRwsbjAVHTuhJhZzDU2ZchwGngWnEAxBBT1z6tZAQJmbm",
  "key24": "23ypSn7DMCCkbozHiK5dnuyE3FWiHYBpPHufty8QEvEBvaey3LGy2tgqxwmddTgN4xtU34HcrcZ944WSwRuqR8DJ",
  "key25": "4nURehmB4sMorA9cXstmVH3UfCGMda1HLsjmMeL6xzEUKZ3MWGRWt58q42QBf3x9EQkMNbnEznQ7LRczxm9iHtgC",
  "key26": "3krdDGRu1p9ihBNzcJSXv2vPaQqZuVvvHdzthDf95eumrojo4qeJZyZ2oyBCt7KnbwXeWqY4XvexBYsHe6qqSSwF",
  "key27": "42vbVr8L3J45qkjgy7S8LWir5uoVSEYg9UvuXzv8QXWvUVc83C1ACRkgyuqB9NDYQq25UE2JazNPGhF4zxTnfTdj",
  "key28": "mPz3an25g75RXxq9qpK7XVu3gJKu9Kp99faFtWgjnmZrGU1vPLqu89SL76sGzrQtHvoRqYAPGKavywkUDoE6d5b"
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
