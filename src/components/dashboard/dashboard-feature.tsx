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
    "rkTY5GrgAZGUcFFsG9y3hNT9ia7erZhUntDrZK4LcwXdVbcyB7k48a2A1LS8HPcm7zsMkmYgRYj3qrqecmykBp1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MDvzmwzg1WDE4VanADHTgxrMp9mNV9ouSRSxk5ETRXTtWnazCrbA3C8rWojM5QP6TxpKUfKKLjVQyCmPhf7uHQa",
  "key1": "uaLRGhZy6h5CwhNtpAhfgGaEmkLUCz1R59LtmErQ8YKSnvvfYDeYC84xy1ydnzTKSbQACLTfhyeY55k55LX9LZP",
  "key2": "5a49DwszBSfUe6URSyGDbCT9TKosSUZjpZ2Sopp1PzaXnS2Qczu3DBpe8tVLRoQpSiXrnwB5eE6XHyJjJXiRL3oY",
  "key3": "59SPxQyGGjE4coED3v28MfX7Tm8tddYAEojLMjdVqzWV4nXQH3dupkvMEFxHjqsqF1iJ3QPy7uXu7HVEWQ5Jvgt1",
  "key4": "5Fmd3yyC8MYnqSc1P3p28HMKC2vnewqp6kNKqRGCVvJuRM78MwRTc2CgAkNpujdskyXSpUQ4S1NZBY7uCSU9G5qE",
  "key5": "UuAHAsAjBumzSjWSGWqeEZfLbePmfZaNfNqbXA1svEb5CugUWK8UTr8eADJ1G5drBbuGtLTfi7FDXLYpdv9shrj",
  "key6": "4xGQX8VkVQWnzewnKFSXaxtRtpGurZJsUGH8MHKfXPMGiumYz8HpEfs5PWgegz2QcbxSn9pakVb3aQQ6KAxpUg8E",
  "key7": "27GCcqT4VGiQNJCTtfjGhg7RRbFfC3qTa5auXv32KYutX1bc5WLsErgShKoiVoJgmJg4sjf8T9HjxWHjPDYsD8Ts",
  "key8": "NQc26YxeuBzJQQBm26hBpp91S9XPp8cfEs1GNrUvTWhnvScVLtdyeQpzohWysESR9VswbbVfMkHsnQ7G716JkeS",
  "key9": "2yqipjwb75Hy3MtPRZx1GPgXQXnghmfMZBYc4faRYcBK8zMAJQwspKYHZXyRWs5mdNs4QKkFpFxLzFjojXoLSce7",
  "key10": "5GkLtpFtqeWWUS3C7AZKqTY3SEC8NcdiNApFBSwjTckkwGR7HuLpTqrjx9LHGbaHJbKvs8iZptaMhPYd2F7PQqYE",
  "key11": "2xkciX1Tv5h2u2EAUDnyEkXjK434wvmHg9t56TRwqQvjEy3vU8gurWXpEKjW66ZpsmXanJWmEMGp9HEkXMRyRJyn",
  "key12": "vMpLKAbwNSDEUw8JP5q2Ba9bzu9Z2Ugeh5mXyFGs4fxZroagDh4SJyCfqBQW5Xe3YM9KAS8NCe5HTTSpTttPset",
  "key13": "2eSLGeqgXNsTWAZFogVid3v3cYbksfPET3iK1wdoqfcUaFqnCEjGD9idhQryo6KFXTVgBj9jhipCuQGFmZJCyqQ1",
  "key14": "44RhikA1xmag9Z2wNfoTxUmGqzWSQgdNa3CSj9dom6wKZUVXSSHcmA3fTEtZp3MHN5obNhgFKjuzSFT18duREAQT",
  "key15": "HxknQeEMoC37gj4Ffqyrxq4sCKYnJp5vaHMG8J8QvLCniqPfpstcRR5rcAZk82KREQfWEZWva8zJPrCxr49UZ17",
  "key16": "54Kcwgz8NbNiukujQHaxSSaoNsUwFYdBUDrxG6bBGUkxMQTSAeCZY3HMhLNQh9G7BFhzUDmEWYx7TuzC22LdzxuY",
  "key17": "4SaCh9hqVSQjnyRfJKQTa67iKhLfGWAASVJSys3aS4mQnYmihdRn6FxMKGCoEuQGVmikFQ9Aq2XDufuwnzfBo4LJ",
  "key18": "2UFkrfvCPFrxv3j7D33LxSxSjnjzSyDsDQsXcExzcYoHeYH6QQQ3J1StzfFWipNYYzzQrwTmoJKSXGwJ2prcungW",
  "key19": "3ZGuuztWWhi8c7bka14BGUvFzVDQ6x6ZXGbMC2U6FJHeneK7yroqnitL3URRxgU4KfvhgtyjERUyWwRfjuQSNiu2",
  "key20": "3MGPZyzdY1zrnJnKiHRJZPPg4WL6QDVsXjiP4gASu1bHCbGym6NMbPdgvANZ3imuPyLvucqCMFp7vnMdGtpaKrBR",
  "key21": "3hmt5jcixirB9kdetm3rq1kGRtuJSmoPhV37uiHPicf1yW2VtoFRfE8wp4WKej4E9EtWimKdq1bh1LjvpHWNyXzF",
  "key22": "4zDNW4JLS7WXrrVs4rrTgXy1qC3LX6UGpiovyhE3zZgJMG5HpGoQdGvkdHm1XWaJiurV1nWxVMSRBSh4mCbnDvnw",
  "key23": "2rR8FuM4aZaVtBKkeyqQrgxUA8QPVvqdFDFwJRdhBMPo5vvcKgu5vGUQLhLAJEYZPCy84qUQZXBcYZHMbXYtTvP9",
  "key24": "SjCTsESRRmzNpRin9bS2A8RM3CiTWqs4B5PQobmXg4FjqA715E6AFcFrjm3DpjsvpQCFQ5b1mKe3cgnYDExyBDC"
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
