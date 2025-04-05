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
    "4fcc7i2Y8kBQHDJpoZpTc2ZgFYfc7wPYEkadMJounkq9W3t5JcCUCUs4C6Dx5T8K5aYgHHb3VAwLapxbuTFSo1vR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rHpELqznv2r6zUw7yokEGgtHx3WgkUpZe7tf6rJvwyRcB3qoSHDoAiPQwca3weByjk6CkC8GFNCvj5iQ3AZVHap",
  "key1": "3WPUmGFBvBNyThC8BruQJDarupGWpcx7UxREwu2Y21ZyGq1ATKjEr5nbtUji4SiYWRQAFG2rTXvJ1MqtupRJFYGj",
  "key2": "5QC3Xcz3G3UENSh7rXwiZtvVgx7zQdsmpNtHkRKV1AyF9KdrcMX3eWgyWBtcAGUVPGEbYTvKrx5wZQqcR6xd5ApN",
  "key3": "4m7WnN85kmF6c1qoYewQTumpGvdd9n1ghzSWSZRSfMcuVN3g4VRErYG3kAjsqrcfadytnJdMGEZaSZU8hvB6eqLD",
  "key4": "U5DQp9XsHUa5LPoTyEjcZ847TLtc453Wjet3FwVqsJCaE7uPeQApAkEUQaj2GxWqjDUSTK1X2czGia1Gxu39rtz",
  "key5": "5Hgoj2K7q89SSmyAvTKucsz3ZJudmAhVU6WQPn7ERaCYdF5rz1owbQF4PSQgH6z68KEoY5nDjY1z4VoxMDd6kMP7",
  "key6": "2ZQic97LVC1prBWzZdkwR61TeTwuTkRWpEfNXWyicvnjTM1an4jpUY1E8absrX1EDg8i8YALNyVKTDGmCnKVW4Ex",
  "key7": "5jtkLUA1fvtDmaVPoZYtK8or4RuzDmomKKvodvrtTsqimNqJEWvkmfF9L8BDtPWaCR4KnmgjrNLF57gVR7BoPW7d",
  "key8": "3M9EdCtXRG8tUhqYzWfqGvM2RoYXFBywAdcPPP3NKC75yFVearHqR5NzDhjA7CZtdxwY1HtNrxWmL7SGjU87VLTz",
  "key9": "425KhozC6Nu8ATGYM46ruHWdRidKKTvGbX76XWTVpfYtpDwKP2qCwz3zf5jSy8jiETPCUcGni1JZLs5ewY5UXENR",
  "key10": "5UMa6uPkLmuEe1B6F11qQz3sntKPAQauCWJiFhk6qUE43YeipM7Tj1Pb2eoUBP2PCJvod6MHBLgexMvXxYmMEWRx",
  "key11": "4i8VEe1nVRY6efLVhXwu9rn25YCtQUBDtbgT3AhypYdWPXoGgeg9wZFzeWz9Jr598cE8uMKgU7M31Jm4ZaPpVgXy",
  "key12": "5RvcfGSfUn8zaEVVpPBhH5PPgENZzYvsjXeY1zX4BzbJi2DyrqSiAF1NqgVvDtGKWAXPz5J4XS6zVwPvNchRKeQq",
  "key13": "3ptKpmvhkLq4E2DVLbjoJFt64eFfFfMY9D6nrMRDjdMMeEgeKSvv1hR8F14uiSivnrRhVBsSKgRenXcXVzLehipc",
  "key14": "5rzDepVeYWwZvyWK7nSWDjgiAbcUxYvHVPy22uW83squXdio7QgGKz1gQ6Y2qzdoQTXELuP8uV9QD1p2hdMcS1vM",
  "key15": "MerrsodcQ18DpBLzh9rJnYFR5yLcZfy1cY465CTJg34WutNH4NC4nbHBm39s3meMut15SSiaz6es21eB8F1hWcz",
  "key16": "47xvNfgJ2i2Ms3DK4124Q76a5C15RUDm7b3u9C1kvGwyMGJVtffAPohTY8iUNcjDHuzK2poGTomRGLzFZb33C2Mb",
  "key17": "iNJNiLAG6DYLV3HStoDBLmNkuqbpQfFPVCgJgN2bLb6Nsw8LRR31KXWKbBgS1Fwz3gFb5V9e62EzHx82Xvp89Fb",
  "key18": "2FJmRzCH5yZSMHTYCyM1sV6kFjCuRKXuovR1AH5DMtRkXDfvMJVQMV5tbjnSpoTHKFpopHFVcqTRFTJ6wDFcTtM8",
  "key19": "3hPDTCtLyva7NmC5GfekWdHEZ591w2TcgXfmjGUbYM5BYhYKoPtrQjf6xeCsvEF12jhUQQfyT1EgF3SWV694w421",
  "key20": "5R51a2VMzGjUiFEEmToVgqhB6WfV1KftZ3pqkfdzjrYiVbfvWYoqdQ4uUA1sjmLwrG8xLiH7DeTPkoj5vCDak7SY",
  "key21": "2UgMtKknSAeeZdJNacN85at5X9FYYCJZmQYvuo631otFyd6qsGQSynovBPBFPb5Z211qSRy6SWj8JT4QbXZ3Bvvz",
  "key22": "42yAzDpvFi7h5MjSzjZVuCZWYYdywEsTU2LL81N9ADEiFobHrPKZm57pKKtW1kp5rBuNUHEB3bWMLCbRqXsaDX6w",
  "key23": "3H877uARTTuBLYpbk9LynWKTTKU9z9BirYkU6aMUT49qy6KXf3WGMHVDqrBdEfWpw78RL3Y7YdL7XHb43uhDQ22g",
  "key24": "4YgkAaxoBGX5SNDA5w6YSmQtj12LGkjJFMun3vvQt5WzeujWEQxnBysuHs3Hp7xW5fcDSGDYt5RAzHaG96FCfxQF",
  "key25": "4DFEbFHm44kmHNCzv2jjMWt7PDwTyFZHpZ8euCE1pTKxMJBh9owLSi3UFE3YQaSBeycFW5ig1LMfiAYkrQvGGAAn",
  "key26": "3md7ohizgwY8dgAMmWrSyAaxnDtDKwRjTkR74wTjVX9iVm2aLiNAiMUUuBS9gFdHT3MZrgpcPNQSUSJWqAMzaT26",
  "key27": "5eHUvSyhapUif4cqDwLMLNwTeyXzKsYYNrRza6ArQ5kqbUqBXmkfwrn1eg2QwsmPv2TFCYvDSNMVL24k6dqwPQBf",
  "key28": "2VG8JgfbYwc2yZLRj5aiNy5krBbAYXJUYWv4odsXkUNRZ3AXxBDkdWgpQFTcL9woRUhEpbeWTRwevZMNYZPUdRFA",
  "key29": "pzycDzP7gr7ZtEjuZ4at3b7VfB74iWe5qyfPfQtU7jS97KiJXE58DCyscER2arjXDLjSM5KapDzR8CrKz3xisRw"
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
