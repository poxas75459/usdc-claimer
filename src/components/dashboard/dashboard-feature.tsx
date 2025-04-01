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
    "2JputKTndCfCHfhergEQApwLEaz79Ai52KkmRKThvoBAFWVKNhpMCMujnZkKBCp9fZAh7S6sJWtbMffsM2ZSzjzu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s59g3ioJZahhDVax6yNgGVkaMZvkPhxwJpqMijbXPoUJ3NJjojPJnBiVbkJZh1QnjZsDs4nkg4TzUS7n8knawsD",
  "key1": "nNYK6wEDxhxAT8DzeA2NYTb1PkdfhTJYHReUhd4cnFmSFdrptbhFTfo3DzmxNioWxZGV2U74AfN6wdxBhyzbUDU",
  "key2": "5AAqZPrdAsmKAQxFznU3bqWrbSoJC1XQUXPPD1ZHKrtxjUvbagivMop6vALMk7TNe34PB7jPFHWNMcP9PgnbFkTG",
  "key3": "3whQEis7iANbu7hs2yx8XfruVdS4EVhEGhM5DdWiWdJjdD9RNLNg4YKsdFmNWwEVoEr9NiCQnWBTYpXf2QnZm2X4",
  "key4": "58rhc7v9owXwTsnrAax5DwBSMQrhmnC8rPsnWqHTqiJvjSH9aJ3JUn9x4sW2RYCPirTwGc98PrkQBmDhmf6R2TVv",
  "key5": "3MUDFP3g6hP5Y3DVz6iDdVrEBkM3daCu4q7MVpWkSkLVXmATNGKkbLG9gpxACDZBKdBSrWRZvG8QATocomFd35Dn",
  "key6": "4gGNY4f3zAMsfrnKhupBKiAKJyHaNgoUVCt5tweKcrNzip7nHnVyZKyVx9WGWj35JJysVwjce5oB5KugPpAqgd2d",
  "key7": "617WrBsUCaL7jPdpPmiB2qZeg3JXh6hJfe8kk6jAQsfzKzCMEVDea4t6S4Q6MX8wDKXWsKgdZ5fVoK8AFJDELf3c",
  "key8": "49SZCpyqr6ihkpDvxDF7kt7odqVr7YPsxGniWtB4UXXUUYRQY5eUB5wP3NTkLhnR6K6owPpsJowpp6vZrLiZWk6b",
  "key9": "3HgTyy17GSnGyc9aMkxdEvRFcJEEtmwGrB8Hbx9bR3Ne6wp5FPw6CoCXdz8EjA82SFs7YSRZ5YS4eXB3YihxVTm9",
  "key10": "2NEFjw93iC5L2mvmrjoKYH3vFNXM6v6XeXpy6DVwEsg3g6gaBPLLQZbHuDLV49TSPqwSUR6QtpuVEjMUznMv1vXe",
  "key11": "5YWxmSmYh6NaCCafVJSwnufMxkRyo6HvbSacLZg7XrL9bJnUPXcaDDarnQihkxUYJkguZBsKmyfovAxd1iK4V8di",
  "key12": "4khnoKh7ni5bXPhicfaapPJfEwJ1ZA1gf3F5v1eksFYikhisoMndzdca9oq5zRyVyXmjp9iMbTQpGBNoqVAJSQrY",
  "key13": "3t79otyfuoMicizzY7UAidFUAYrHVFE687QKcKnVeTWAHUpsbM57Gad6sBhLP7zK7yMjCzj8rypGi7St3waMxoPc",
  "key14": "2A6Jg35wSiyPSpzt2VqjC8bYGRp4PUKXcoWbAGiSDRqf1Cek4TZnZnv8tDj5SeTw3QJL2nwjKAQRzhkaba576sS9",
  "key15": "Jj8kaPD8HJRMyh6jBdbQZRvdQv35cFx7HygjiBcNnLqcFev2wtgSRyxodFADstqZDyXude41LJiQEn1zw2kYxUa",
  "key16": "5zai5pWUMf3KFQnrmD7BVyALHQQBmjE52fgdMLrYQE2E52FiNKPtx5Yq1n8Tj2ZPpLZ7WRuhXCr6TNeoUFEpdVKC",
  "key17": "iswV5WDjz9BJiZbrgtnY54P6rKaBp723SiCXxxtNkb3cBXYRVWANevMfKg8QEpsoo3eAZG7EysReLV852JFRQkK",
  "key18": "2VBR8pYWmYuPcneBiwoV1XEmKxAwNqtXt7MyPoMBXTjcTz4NPyzqNddet9fBEynhd9QW6pi9nk7yfyAZDNy9oYaG",
  "key19": "4ktcGbUVfN313JkfF3kV3VZvj5d1o5WJ4kVNmkYCvAaC7p9qDKLNJNktAC7KrRV2Y5K41G7yPzugiqxY3zm4jpTW",
  "key20": "2xwqWmTW61dbNvi6MtVpbYYdzCxamycShxBw12biCcGera94PwG1zJhVztYq2ifBAjQCoCJtVo6AMwZtutX9y7rL",
  "key21": "5KcXez3Uo86RBJTWPpjhjmSqfZdNcJJPAd1UTnLSuphKVarFFxPmxcAG8w7cYUkPTefW4mzuhVNz8h7uXUBByb7V",
  "key22": "4UT4LxrzTxwNp8ZD6tTYRdii5BcY4ZQRtXnK4hGHodo5hC9q1cruiZMJJ2srYjE9kUph6CKJBtiasWzccaHnECSb",
  "key23": "55gW8vDK2aCS5vTdW28ABrFQv25esnogWj8uLPgWFYTEeb4v5vGVN7DSXzNBNjib6axCYsPaCXn9JAJdHWQru7Q3",
  "key24": "4grp7JCrCTM16buEKKXZBchJAzdqpruyyAcywhsKFAWW5dNttaLNeXaeFi5EFXyZyN4w12Kacutmvda29uQDy4VQ",
  "key25": "2Z8caLWqpJ2qkw8UBCRFi51Lr3LraT9BFBNcZPC58vEumoob7WBki3o9d5MKtreqMa5tkqmGXvRXHmPqw3RXTfKM",
  "key26": "4jZeHZcr5s14qQ7fhkGJ1Cy2GZSneo586EiJf4Uwff9GXkKTCa3ZscXNSS4nH8xwEs1AaL2YFUo6xZD7wBP2LH85",
  "key27": "4LsRhMz85HLyUekTcfSniGQbEhKtC34X7WbY7T9R19Rk6bARxjmrMKhNyXtnrmhJ74w8h36CwhWQVEemsUmPiT4a",
  "key28": "2ryQBePCcyMoYtJtvwfQhDh8c4vAmCD4aUdCMrfgjY2HU2B4zVHVaMMfEXgQ2CWxU6ev9FRTurBrFQAhWEeYauQz",
  "key29": "2q9rwRzVqacfK3nHH4hGvR6zgyNv8YVHAxSptjs3T2QJvP6bUuZHAhcqSaJpsdSS6WnFQqcfJLENBEpd4q6hi5nK",
  "key30": "3Pw4g7fxXkQqjaQ4BMo2Vw9PkMeA2Tk9o5JH4s6kPaWDJusDPmQE5MJiqgm1PEyc76daCT12LUv82P1Md4ix3mgy",
  "key31": "5moELmaYXWpVPoUxDYJcey92uN5fHf2fJhLUuZoBko43a7GTwf8ruMu7B5UnNEhHgxzP9CnuqfLKxsBaq4bwE8vd"
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
