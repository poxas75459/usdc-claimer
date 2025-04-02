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
    "43zsR4FixDg21RT39NDE7dcrKt3raPKPQfNPSpJhcuG4yFHxeTUorHbK4GzoCZVhtK9eCDAYCBDCcCVh53p8HWg3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xW7GR8Cba4opM55ZAQ3mUVdjSuHMxvBYR6cXRgHPBPDjgBNX7wPZ3iDVa9CkG1gt8BYLSiJME5PxEdDrUPhieUv",
  "key1": "36arFKx7SBfmZvwehhN68BBWm4ZVwFykxzkj3jyK2ofse1ToA9APaeffZDM5a8zinVHVtN7jAsPE4QPF73ssJWGJ",
  "key2": "25qtbna5Kmuz6N4Shn77SLGqS7TVFg63gqTo1Pu3trfW1SXYrUKi2r9AzDeNML5hwXGmW9rDT5sbcMguCwFTz48Y",
  "key3": "33rntts9mpLDribTjJ5fYnDteEnXmL5aZ6gPAmF7kAVNETdTs1kMn548nfvsmfZ2is78Xip7R1MhDfUUe41SthQ4",
  "key4": "5BXJUN2yPNJoNm2usffENye7zAoRFsyCtUkPE6EUmJt1SEM2P2Tccg6dHMqH4t7PrC5xGVPZ9ngUsamW5HUquYhY",
  "key5": "5MEJcrJMu3uCryfAZs3WrJAKn6R6TPw2zuAk3bYKSipgKtL73fpyYwpScyEUmDWwpHc5Uad3egtFm5jv2EdLTRcY",
  "key6": "39BEWzR7e2hYnQW9hYwz5SQkhgBNrP5fc6HX7rRc1PhLWXvR34RX5J5Cg1GjfkTEbaZvhjoSa6L9g17LWpb9hGRD",
  "key7": "5BYEuQhaKiKJPHPNZ496JjCdtvpy3yU1hSjBRqFB5io6vLuvg8DLVLUvD3Sc8VcaAVdrZjKjztqfYFgsSU3n9gGw",
  "key8": "2LGT6BwtB1omdx4Km8nSkBm37onzPG7X2v3jys3s331NAyPPCJX53HRrZzPozRcomr6rEMUZgwkP1zgLrvczfp8U",
  "key9": "27yhzicLzJAHfZHFuAXR8WdsAyqcMScPxW4EeJqxizMK4qzdCgfqgLHpjEwhHoH9PZy88MYHqQmfr3NaJitkZZD9",
  "key10": "2VHed9bk1LdU4S3kpBEFp39CHu5fV2EHJcwMVbqSsb53LgM4fFoZCcDbssbV2KPXcY24HyBVtV2JSiV7mMF3K1zr",
  "key11": "3VEREcEWfhC4Avx6qLh9CrFTqd1HBNj9Hpw9pxsLXsShyNi3xKCfztgnKR1eBxru53MehJxsY7Xuz2yRd8it8go2",
  "key12": "4cQr37PfJurUYn8dEcPzeznqb2wkYApQuWewxQnHh7mMD6xwd3HS8PAy5E5dULpPhjwahKxoqGDvbBm3H5nZK7tQ",
  "key13": "4tZbwYoavf5Ewt4PNqmJgKCLE3JdN1tdJqJMq3tYXkx2b7yfQ4S8DVjJXN34CT5jNautxCwaznZ2G6eb2VttVCn2",
  "key14": "TdjmCJieQceHXNQki4z9ZdUcFREN4fDkKv8i2jLyYFMCW22FFwwydCYMzjbibWBkdvWUvPn9gnqXENp7MqbXy93",
  "key15": "3tPSKCwKLqKH9nZotLmC9L7UbqxRJkZVovStqQ38Vqon4UAMDjKCF8WPW5HZfDRePqUY5rqatz31WxNjkcFSqpD4",
  "key16": "W89Q2mzaLfu5e49qCJXXNZ84y2dSrZgNLQoPs9vfCuaFyZ7HLexYiL6LcqGPAYvX3gmdtYr1QCvGE7nCZcjzd2R",
  "key17": "rg6ECvgZzxLkSUFLazqmXLgTWR3eE5vGJMH44MAi7fGhUacrviJ4qj6kPse1fw7WLLrHtMLouTm6wq3ZjERevmU",
  "key18": "5nKdF4geHExc2oGnhdidkXimWQRF2BzEVFX1fJCPFfgzHR1TMy7dwCEUsEko31n2PT9bhtaMchG9MXXMxjFJnPdv",
  "key19": "3HDGRY7tCSyiVTaJJvi8yzT5rLiSjEzgx5cEZQ39d9cUA9ECXyG1bqBM4fAttJ4U1YeESFe8hmHKuomrADfX9NUj",
  "key20": "UBdGLip7V5HbZWSynDYaK2BDKCuLHX6XaVX7e8Fo38fHu2N3xgBuRX7EBcW1qLDNAALDes6Ni9wJirrKkvSo38B",
  "key21": "4RAq6hquRi5JqgYkxQDSrLM14EE7D68M9Y5RX3R9eJuk3H89w5Qvog1LRWYucP5J2CFn4Yq4NmuukwmkYaXfsTu3",
  "key22": "2iYYuafwqGFa9ryTgh8XAzjzZmgpd2RBNADMmyv3EPP941NXradgcCVCJCFykzeBgjBA8zLbKT4J1if7LKq1bdha",
  "key23": "2HnnhnW7EfgXGLqQ4UyKyhCGN78ZfSTUEnUdP3UqZTM5v6NUAoWyzowAugknGx93q2B1L1NNo8eGSwF1fxXuuETP",
  "key24": "48ytAPuZUjav9QCZdd8VMon7YfnqBoo4v2vLXmnPevicwDfB4oDQUzDdYxEiyS9hRTfphSRqYDNSdfQ7SjP4fBhb",
  "key25": "34DjQjvo7Q3XM3HXfdv2AeR889SKXmcPGQP5CrEPhNL2bVDakg4ZLHuiU9YtBJqTQSHFWSBa8YN3GjD9MyDBnakH"
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
