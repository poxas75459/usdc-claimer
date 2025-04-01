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
    "42xBo6Ue3Vwndu9SxpgxoofNd7QVBMwdDfQApDmuZe9kbiKhZM51WF9iBTeDHqzp8rBKZNESP4jyo4tP2j5yQfnp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GwBCBhPrk33UHRX2GffVULFWxVDtmUgzViCNDnHeFKLHRGdMMcjCWTuJ5ALUtymms386yhEPwaV5CDkaunoSHKV",
  "key1": "3DzJQYqpX9tDbuB3nufirHg2Ei2W8qE3VME6DHguPeDnEeTM5j46NXxWq2y9DHpCQPRWSFsaKX3YhjMYSMksHw86",
  "key2": "4NKQDm4CDNGDiojHKF4zpQsuRY6fCYgrg5yLGVNE8xcDqEwBiAPkdzmnd5HRUXKYtgX9Nf9tgLcqd9pxHBdyZ3V1",
  "key3": "QrY8SK8vandxHPinkZFHcENxVCFVUs9B5m866G44fJkkTT8oCNqj9eh3kGjtaCpGDum8BWAyQgjxAgxbJda7xVS",
  "key4": "5DKkvwW8vY9GtnkKfepLW7Bv5gA5aqYkYgH5noPYfKitzdwUeYEWH7awvXbbnFN7uCg78caFNkgFaEJ97tAGq9bq",
  "key5": "yxij7ujj6KJV4qB1MGp5iad9yykyi74RxNotCLrfJV3Tt7VRr1BJzk7n81BK6FACQkS4a8NGfD3ce7WjnJEJ7D5",
  "key6": "34bVuwXM7zH4AGtNQhxSVr9atMp72T2d3BhmQd2VipvUFihsYoSqyEXg9SMaVVH6hXhJ4PX2NkXT5uThbNeKi6p7",
  "key7": "gtVk47kryTPpqe6f4TwggyLL7PGZai8vbdxEMsEmDeYE1RZb1BUW2YhZWoNfDhDsxhpx6Hg3Zoibxsz1TbvQD6P",
  "key8": "4EPSMoxNJdkWYfxGXkDdxy5pVUo41FnbCG1k6kyYmMBpfYNgaraAY1EdJzCsqAgzhHrimphMfnNqFfHKwKxAvwTm",
  "key9": "2zVcW6WhnmUfpW5bWE2gWVDJewqYyAxDAmWBuA4KAJcRHS4SsSyTHb5sGetCR5y8dMHnZQt8iy9NEHENHpxcryho",
  "key10": "5NVvAw6toJMJAyaqBvhpi19srs1hiz7gkXBGVPFcpQ1hG8idHgyNZmzvLesZDiZzZaENmberVbKWHKRfWfkNo4Hx",
  "key11": "5yMyp7f56vRTZBq6P3XrREZ5AbTozKmUSc9cesGPA9pyNaRVZsW8ZBBTwuZMf99JzfEHoKJbKyP7ik4q2ctPstLV",
  "key12": "2PDm52mdgXAHLynLXDqBsAav9CAK5fGEogR8BFxab4uGxVaxcy5mE56RhYHsELqmpxLzX1XZAKjWonwG7p8rBoED",
  "key13": "Szqj4Lw3ywRAK5cHWuzTt3aYHiyPVU6KkMrGNMVtLstn2mbsy9Cg1VVWUFnhJ9Fo3hGQEYFf1kkVHqrGqeQbTQR",
  "key14": "2wEmwEpQWiW23FjbJ4idxZLtnhcd7WHjJMzNnej2WBLn4o81SWS1QYRmJ4qc6oF5s3YLkQByzieYxbD2kL2ZxzdS",
  "key15": "2hEqm5yyv9ZKGVfLuVtcACSCetoaEJV9PgPuafKUCGDry6CN7GUohi1LnHBK7KpyMeGxZNY4D7EaJ6Kbm4diSxYD",
  "key16": "2etreaxXJbjXhkKEJ9kqxrhTQz3QkkUuD9xizzokeetVew7u5Bdhof3XFHdvojxD86JzBKw5SF9naW4zrkqdSeiP",
  "key17": "xXApDJYJCb2oee6AYZMmnpcMmskv3YfY32fZ4VLS3Jd3Wj1QCKu6g55Y6MFniWAAhRoUdb452uhMSSzkMZNGcSu",
  "key18": "3tUWxceKJCqKXCDuu91Rk79JMTacnkQiDjkuRBvXfNKHtXpaiXqCgv9cKvHvQsR4SVVTygcpbuJ4CqeFq7vx83Bg",
  "key19": "2Pbr9ZNjQRiWA4fFspiQ7DScyohxMDWkSPhmP4G6eh6V4Np7PqswnsFdHqFF7u3Z8yxLi6VUCUjkqAowZbFTzWCa",
  "key20": "4m2BCUvPiCNYFmBZBCxxLz8tHwVRX69AJVHpYernYkDsJYJTxfmZVLD62T28HoDzSWChrKgYjLT2L6sRoKtS1H2r",
  "key21": "KyqnQSLcEsgkXivmdR9uKii2EzPaz6hYNNQBEHHx8CgCsw5vp2NYDHf3uwB35WYdLQVtHqqyXc44WKSyeSNV3mH",
  "key22": "5w41fwoavZhww4cP1HgnoNNxP9WDe6X4PhKfHX2DJtEf9ifYqPRGCi1bytWoqhdDdVHpEo4WD9KZDQadeKTSaiwn",
  "key23": "2GuJGyZ8Lq9ZfcXyRtuzXT6FcbK7AdLPiYxP22ZyDh9gsceBbxroPzHDzm6fcRfLZEbxKcLP9o6mDpjNt2oyCpD4",
  "key24": "4AKQNLUqfdQK3EBBbE4dF8rxVPZYcM2bniXzfZm7wo6UewxjSvCp8bUvkm6V71n28mkrCoTCB4Xk3Fagj5eHHF5C",
  "key25": "YCPAUjLUSfvMpV8BesmRgebgMUQDmjS6tTd7HCrzTFPdG9YLabxPmKq2s7mzMHUuiTqEVsR425DeQosQPL5BAbu",
  "key26": "5X1se2YQ8qbM9Fa4D8gV6e5boZHLgxPsRpBNp73tXydyt2iyTfa5ePRp4YvTZC3sV9KJgnn1ChjrgLxRqDTzmLJo"
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
