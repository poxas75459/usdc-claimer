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
    "64a1hupkdwJrucohLgySqac5htvqU9is14nJxxj1SVpAPhbCykGmvo8agjgWgo2iYdjhwtiZwmtvQe1NobC4pmeL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HqgXAhCEAPc7ggkkMAwXo4SrWazUqiJcVAYF2frAwXkDehBchQVswcCcxwjYndFDwfmxQe55ZEZZSsXx4EANJv7",
  "key1": "4L1oV4Zu4wKrXJykPm8kUWpCZCyDEK8b7TqzkUVVsTZr9z14gnqX2cDWu7KczJzKtykXv99eey3bDQtH93D71naF",
  "key2": "4CH9fBGtS6BPScGN55YnkWRjX9St9X1FpAj4j3ZCHtHRXkZST5m7tj8oJcpXMocoJnmQ2SpnHmULYhUTdru5X1cc",
  "key3": "yxFAHVsmdPRtF6Zp4d5d9HV24M4U8ja7kftTg2UBEpGZ9WS6MgjkMYj7jFQonDeh2voDhCsmxrPBLD3exRkHW3c",
  "key4": "21MRzhLih5Ps1Qc4KovPHkPLqwd6SUB8mHjkTrYxfWZ92M8LQnNFaWbw62Ftca7e6U8bMx3jz2D24pPgyRe4exy4",
  "key5": "4qWEcB4jFrcWXN1erirUjcL81Xni2c7m1Q6Srj3LRHp9SC8Tbwr2md14UmP8nGcjnVnn3ycpVqkffPsbg4e3CrBa",
  "key6": "w8AANydr8FJSGUrMk3B3tHdz8RAG2ZJWrT5Ng4ZoKy5oED9PQmNFi64UKqYDD8gfw64w1zqrEZKYikpnqmkUPTo",
  "key7": "36VWioB4JMV42mZyMfjwkr9noAHL2gcpyH7ZgpAUmjyiGZk5QnTPpFMunDmTJHsvw4CtSSmebJXkCAzgJ2g98E48",
  "key8": "5kLUCKhzJ2au5M7EDfeFtmDSVaVanhJ5h4UaEffHJHTtAEm7ZEkgUU1NYEMaDJt2sSWFsvXFdNPxMMFnZttMcPHX",
  "key9": "4eFQ1Ac9mW4KwU9zkG5VAXQqB7zSCVbYJBzFuwfoG9gxRGgEdSSF9RbnGnAvZAVgQMkMUgZ6c3m3xgVWDjj4hmrc",
  "key10": "5CUPHARWs9ZNnLvYhsKybCdyP3kNNh8sWG3nqLze86XEQdRDLB5aBGnpGi3hJU3jDkYiDhqNgAv63z74bLfcxUen",
  "key11": "2znsvpvzbQ5RByf2oiZMcXpLKjNkKuDGJoCxnVRHkoStffwU5QN1cYBMnLvzRrw8vNYLF3zpmYyjb1BCBqtYzJLY",
  "key12": "yDWnMAMyQTC5T55LsuRQdsZ16s76Xbf9mviz7XzpRZBPfpyxyCKcVt1SJbNhEpiV1oUriepJhW2WRqyT7jYkKtM",
  "key13": "4qRL72sWsfwA7bjjP2GVKUoJUV9aRvtLbJBbgY845efcFfYZK1584pEn19Qwn3oVpMBD8eXWjXvioBShnWDEcN17",
  "key14": "TymtJfL1uVXTJ1MhZho5eqjboCi3Yepn32LkDp6g4t5Ho6UTvKhYayaUy7wu9av8jk8XbH9Yeht2tjcXGGeZuWX",
  "key15": "57TdeDyu7vazeZkCM8wrCVrm5LToTWyVZPehpnVb7rLXpzdL5SoqHRjQCYhQXWCjjQvdQ2ykYS27P4BkAAUWoBbR",
  "key16": "4eBdQw7uQozNEZXHri69Ks6XbnudpFZNt2JT4Nb4cmQFPamPY7G4SpX9Rsz2E7udGhw6frzBSxFeL5H26KbuaDi3",
  "key17": "fdGWAhRKLc57d9orfz3AZ5MDPEawpz3UPb9AmSjEVbpSUBxFuwbj221rJMi4n7hn1puz7GAdgS5pniveRJA43f4",
  "key18": "2eGKUQmn1ED5L1X1eFGH5UKknCe77FBLorGUHa1xy3W2kmeivtBXrEQ9p3N2C9HznQtmNDPA8Cvbsy6j7RozXXDz",
  "key19": "5UyXSU67GZEEFHN66nmCMuYieckxvV1oDXb6Cpr4EY8iVMH3isj15Ssec6PFBk5sQgR7ng6we2xM8jbKg7iSc7F",
  "key20": "4ZXizjFXz8mtfBfhcYrDMH34XpQmM4jDLYRhEsG4PA9kjxiM5Ue8regZmWYs3dshHpHt3x4mooz85NvyafBCXcA2",
  "key21": "5m6GWLgZtbU26h1VsBY42HiowRxRzfUq82kgxkiZg59uFjH4sNmBpZXe179PE4PpRU9w3FHnr4BqCmEWS2jJ1xjr",
  "key22": "2QExwhKa8NSDr1Hf1Q2369fhqjcL4HMK8rDtv4CQRe8frTrMZeFZr2mvN7rpehz5B5sBffN4LCVXuEtnuugKC4js",
  "key23": "qsnzvQyARhk6dt5azLXiz9Px4Z1yXxGjcktzQixogws7zZeTQoanqrrVtpRYCYiqHrL8hj2DWRDE26WFZ19nfRo",
  "key24": "3EhtQegKkRzcKZxzxAmWAeanY4Sp1uhiyecWtTwaprFPxuqZ3hpwXWS3gDNE9egA2qkYtwwmZ4rJ13qgfFdT8xmM",
  "key25": "3wyPVQ6aSzSgep979m2rWy4ZLXLMi2xpV7PaSGAHUhxgMbHhm43SskbRbDS2xkkuX94jS4unTdGYBGgzFApnrGbG",
  "key26": "42h8ZAqnPXi7F6VMeabKq62qTzDG3nhehxuQvTZwDYoemRsjhLjsT2w4oiwVy1ujoc8yJ9Ks9wnWkKaGMbgi8366",
  "key27": "4MRqbUDxjfExrzrG9vQTsehYTGA1KDneLFmj1s9xQzPCvTgVoV51osWWcQ5cWyhB2cesxqBjs5oytkFvQk3d22N4",
  "key28": "2Enfh8pgHEd6LjMYVx64oVNQfWcV2fHaiwp2gRpR2nBwqhiHTvEAw8gNTS8K7koT6mJPuzE1ZGj2jedKnBtiWvE5",
  "key29": "yanZzvhexfFWmSrh6NcmfPunUhrWbXNAbD5BaK4RYFRSyVM5Xupeu4rsEgqxxep3KgyaZtLtvbTxGunxNgmN1MF",
  "key30": "hhxRnS5VUwAJ6fYjPd62v3TF9rco2eccFoqJsdDHhtbCufpzne9zo4QuBhXK3CmEc7QrB7G7ctn1r7T9CrcDWpW",
  "key31": "oeU6zehCM5AabbjqsL6aM7U8LoMs3g4chP8DxEAaubDzzsiuu9uwMDTm8pSgSwbfKNNa2jevWS8YcqYbeSUKgBW"
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
