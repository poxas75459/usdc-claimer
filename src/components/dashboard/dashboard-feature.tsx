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
    "3zoUYSmYt9TkwZsGrECjvWDGpgxiVw6Zk648pfQjgb5i6mPPFAuvrJHnWWibSp5tSgab2J3HBqWP5s3afXPtidPQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oD8vkKpKxR3yP6bneyuGcPPcyLjJbpgC9ppeFizA5j8ooE5ANgoKvBZASFXhtSc8mdf9kVeE72RntQnmeHkg7N5",
  "key1": "5PxfKwY4CZE8t99Se7SS1R8osCRbFWyhjWD7VhyRBPHyAuLKeVJzKW1jAfjDLWq5MZVkGswyteo4ri8RtrymyWM3",
  "key2": "CcWjG2g2Kb5cQxY3WrH5eUdy4hMyzr7Rq3huUPdU7iqEuaAW13KybnXt5wpMCxGcy53tQfvS5YFrSsjykf3xP4U",
  "key3": "4xLML5HozEhwgcxM7b6EnVj8DeX3y3ng22jtXKD7J7PoZ6Pf6EjbRYqUo9TY8fwU4qNpySg7EtefxdFP1PiytvXY",
  "key4": "5cUgD5YFUJMqTUqMer1VbAbUgRPNR4C9HVHRtz8Wbxa1bcmTrMjhxPboviSnrsaGBESzj1FU3UiqV6K6oSxQDg8Q",
  "key5": "4oq7ezuu4xL5MFjUzeYr3x2xjvoEHmupwJNcLUTNhb7gCfZbC7arGgZvXqsVawRdwpeWz3tih3PNc7CvuZeTtQg9",
  "key6": "2mxMmRX69erBxdH9NuM7dobzrasYsm3ZHJSRaaWqb1f6gYcNFRv2knmUwi9U1gUA4RowDbFRDxKgRUAv4QK2mEKk",
  "key7": "bC5PF24XG5pNVqJ6rLg8ruyiwrrhWoqBqmAR1nzBAwgaS7JGCtdEGFTw4KZVQt9xdvj5AMKrpK9BzwtihaYxX4B",
  "key8": "4um8ftox5RGCNX27c5xzcdUjxBnH5gknckXzASJbnxsFATJgLc2Qgc75DZMEdEXyB2kY7SgL4wZrEAuqzF9Cb414",
  "key9": "2uJcUGrasziMZYv71Y16sPhCyfo1rKDiSyV4wkpwHBjzPJs3vhYZksp1hTdopukb4a2Z1W35EoF5SaMA3SZGocpy",
  "key10": "39L2CiKsDuz7fHJvCtKaGJYMX5QcYVMnEfUaayTTacz7e8rj64XNAxDAFWhrajiE29pWp2rLPqr7rV5Fif5i3m9e",
  "key11": "5UDDVT9AvVe2qjLQzCsQAu7VizErB2vwxJDUXJ9ytMH1FB2kbxCzrjZeekFbjnwTfwstC1MNmHDvxZKCzAg6MvaL",
  "key12": "w2SSRbYYNBiwdcA3dhb2ojy4u85JGrMqf5Ur8r4w5DinzkxbKhSJUxZhtMHQjQN5fRVuLo2FJptRd1t8rFxwaPP",
  "key13": "2GNkj9sDe5siekLHquzRBy5x6ztaQnyfo4QDGEYv8itcfP3QvmgZPxADVsYGukozRkbKsqaejo4spAD4k7bKmZqD",
  "key14": "3fmLPpnwiPTPJwVF6fNPSjndn5PBTu2GeFpaYy52VGHmD5qmY27mmnpBG5VVRNxs9x9Rs4ADLRWTRsi4QbLQRhNV",
  "key15": "2nymAS6V6Rtjw7ejHZwXnAaZzycezCGMRJFKMoWvdzfhrfL1dzCGqERjKcN9u2Xptx3cb443bfdSZewYrJJ45fF1",
  "key16": "RaAwDSsKC5UMxrfS5PwXsfPH851t3Pqghy1YiEb24fMzPBhtVy6wLjbSeNApucbZygDGRvXLRXX8xLmV17FeEgp",
  "key17": "C8JakGoPNBpxtN1y2EJF6pN5NDmrGCT7CjX1E7woSrEt7rCobQgbx9wX1vQvVDdetWdC8JAymNEkgzeuGK6EhjM",
  "key18": "5q3YwRmtBTcEpGSmKWacu6CcuuxQe7hiCde7mKg2V2SdSWmx41KJP2vMQcBBwYxoRfAQDV1BPGaFgZvmWSASX4ii",
  "key19": "3f7xD2ckouYNzxpeNG3GBtBkHdshS3SU3KYNrdszzkug1pZhdn2pfTnJGTYtEdLtbWXsuLczPyZdU8VcwLbWqRnm",
  "key20": "5vU7W8GyFUixFcbHXqWiNoMAWMxowxyX92QNGxC2UaR1fg6JJhhVoFwAvjL6qX2NURY52wypBRBoRJ1w89W4XKZD",
  "key21": "aPr531HC658UTkiZybfWy2LJWszXFxQmhS6NgSmxYKDoq7g9Z8zTgyeymhyzspd7iXUn1UGSyjVNvjW7tS7CS4N",
  "key22": "aTvFNF8RVjwD59nGVBDB3ZYwoP1ZLS8YXqiQ9gU4ipKxxLNMxZLVRUECvvBNGx7Lr1e4e8WyN8nWwXKgwNrf3CV",
  "key23": "Kmcm1haLyU7jf3SLsHW6BdMfH6CWwWsX5GVxeXGsvT3m914PHCD74RwH3UoXwixUJ2mm35ogMf65n9VvPTr1MDQ",
  "key24": "4oMKhndg8aNAgtdb6B7LVEGysHhUXtM48vQYr1p1zEZ6KpbaPo2GazMg5XVkpry8B7Cx5fpBYBcWc5HcW2rroXGg",
  "key25": "2Upe4811N35cyxwaYgUBmrznocjZfRrM4rnc6G33ze1kqv93xV34i8mGKqAVnkrTM3i5BFt6yTSgLFNX26ag9aXL"
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
