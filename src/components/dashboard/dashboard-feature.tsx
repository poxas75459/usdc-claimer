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
    "2QCJyGq4oS65AdBRueLHG1ScqfnFsvmF64kCUHbT1x51xTLj2Tcp2YYoH9moTAG8sbFNqbcYDLxYgqDEstVVg6NJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TEntFH7BuZpg6ZVx75EATK6hb3jfYxtSmmhNEamNo7KMj8ZGDrwDgBqvZbeNcaosRPr74dv9XptkbzGaiT8NWU1",
  "key1": "2fd2pxP8fM28GAHmdwPAfJ4fxLgbnxcsykMkg5NWvKhc8nPvQcQbxHMcuD8xuR3miQ2m3Ms91QwgPXcRHwEDo2gC",
  "key2": "4vbmN4tLhUgKy9K92vPdvfs1zL3QMCWU8wsqGRxSJHVeF8gEXKxsgzszLRJJo68JbK76aQzrZZM7ZCGLsyaipM91",
  "key3": "2L1F2HpoGYz2fS2WWK2yEb9g7TiTdsD4BymXwwoZTQRPySnEYjEDYZnvThxZk84pv4QGRyCq98j6gQ9cuQ4VbQ1T",
  "key4": "4yjn2hn58VXnEvqR3GhFpn8UjnBKGiKrgUw1ZaMmiS3WbmZMMg3wNbca58Nq2HNddPJjxLx2GamaVACtKqTR1wzT",
  "key5": "3kXdkuzxf5NtEiSH2BHQqmaNAcu4qt31yBdWJgqcmC5YqpKF7S7Hn1qfXcbNHwQPY42FyVavN1w1qQPEfwTXeAYu",
  "key6": "3rJFKaveUv6JpWs29CrEjbtzJDVL8y2CtcatpMGf7jk5KiJPsLJT1FfJviN6JQRvaUcFJGdixGihg8xqyYG8oJzF",
  "key7": "2uqQAabvELggrQMKnCtGYCyiftuCVbjpRPvBtaudQVbUJkKsT6dJPenj2ooVaR5uEUky3VkUhfXnvdqBF7b6EHFH",
  "key8": "4pDNuS6izkCoG1yRi7u6AkJuNy6eLbaBZFmXjJ6WPmbJwBsBG5TiRC5dvrhAwhmoe5dVYrnMGbNLHBgoWmUAt8sq",
  "key9": "pZQLEAH8sgbuFrrdSNBbjLs8b8mJVUffZryxT8sqS4AZu561iByEPZqfGNbR98qoGCKpQQchAz8goYccbBj1s1M",
  "key10": "5RRBbcMB3rNzptvJRL6tsB7B9foyZUgJRRad4QwoZgQVb5MGjXeT1ujdtTU4QDtrZHp9V9dDn8Uxjxp7Yv3xLQJV",
  "key11": "5LZL79rzDor7mGcKGviSQrrxWJaKhBd4BM8y5udRBCpWN7fpUZEp2PkNTWEsCAPvWCAa8zt7nQjxDLr77YCPGuZZ",
  "key12": "29aPnGoSaemNwxtzRNbjAo5gUB3ErE7EAxqDS1SLske3zgKH5hPonYFtK4Bnm8JyJaQHtsChdzPoosBKk6T22uhg",
  "key13": "66HVZ5VKMeLY9vhasU42scn8RB53HyGkv2SG6AXi1sBbfYosCMbGzG2k4URfscUQ2nzMJwn4jCvn8Aqumqa59vNi",
  "key14": "kP4Dtt1FoPs1aVBh8aUuPoMB7AZmfrb8uHEQpXZBLwijNYeEi4bovdc3Sjp2QXRKzRQ68T3NntjXYJBAcgwzuJA",
  "key15": "2God9VTLqf27gakewzujYiK8yowvo16pk72PoDHyqWr3t3ham2hHsANsZi1UFZQ5fW4V3fxiZcDERyaaUW48s48z",
  "key16": "ip6uByvR1v17ukLgi3MnC5U1nHPGYGQqgcb6Unj2s3seQqWhaDMQhKHG6w47uiJLkf36hv2TWQLsaSsAtrZzC6E",
  "key17": "2YggVjCMEeYHvoRxhc5QT5B7rfjAPPY2NwjTzFQxUgd6QgGynZGf2jzBBfM5JCNeJMgfa8PMCdisLWwwiipEptXZ",
  "key18": "4gQUSLRyhvhEoGZ8qaehJtVYqE2GFDdGrD9NtqvxGJ2pwwX9sJZnAnCQLLLti4W7R2N6a9fyyq99WxhA4U8AvKoo",
  "key19": "4f8FTDbzxjzQPnfudZz2DXgkafDgxtvDbWbfAnzJcwujkSSyPg9US9dcipDELo5QrMaYAWEkdeGPT8YRjZNHP4mS",
  "key20": "4u75C7QiobB3Buj67eCugRCGmiGsTakTjaXQKXcyPCTGq5AdUUdRENZCu1NsPtsP4DK9WakgGd1m5saXVppZBVX5",
  "key21": "4VnKFFKHCKmosAgBau7eNW67PAq5CZYubJnkx8n2vTo7HptEevhV2AXLamwEyM77XRzYeoxV6KNFWaXBTRzetv3B",
  "key22": "2zx5nLMB9jcwnJxhLvXjQi4UQnRVDuJgHRaemN8TS295BL5XWKVc4Eu2ao1W331sYhT1yDbtJUpXXtnMEVqCYnNy",
  "key23": "zHTVDF81vyVkmfADZ4e1BVQwuTriXDMK3enYjBWf32ESGRmWx6kAuvYtqS2WyH1aGMevzYe9KuuYPThgimJvve5",
  "key24": "2Z8r7ckkdgYAMtM6H85EboDjnoqBq28Hoq6pAjA1kc6Sx4NnHMTXX14PPHJcS1En45kWGbe6ccfqFBeFU6oHcNVm",
  "key25": "Lw3Dyx1MhWi6fnHdhE4E2w2QtaVERabQuGYqqU4aYaVA6EfwztR8eHRLuby2BykM87VDS744UhH6Ri32ThPaUFn",
  "key26": "P2MUsBT4FhnFoe9nzDPJHjGqdMVZ5jPDyVoNUuv5iVf6WsiY2XwGAn4tYGsGMQfPGxNChdxNyg84ExwaY3UFc7b",
  "key27": "4oiJ49xVViRXT5PGUboxt1NZar8Hy6biyeoQokhWhsY2sEs4ypcWggVwqX5hBH9MoTEZaAtE5wm1XZxCvs7Hshik",
  "key28": "3J95fZcpVh6rLMHDcwsxC7D5AkLN6M4DnqRb5CRitym3FVcF9zyFPxnL7cWPipZov5J1sdxMKrZ9Jq4Kf6rZYwtJ",
  "key29": "26vGDJdKuhbNUDwjS6zgWu6ju5449WY6SyoUQbjqvetWajdL3ZYEcv7VMbVY13QqxkMvd84LNBxvPYy8areNZvTA",
  "key30": "2QjLvjnHZ5FLXM37AV3hwQLdVVBrXNBh3uE3L97Ztzq4zxvPGL38BRWdPS7MoiSQoF9HHPkVPBRV9KHS4b6171VZ",
  "key31": "49fjqg9CCKHRmrV4auEfSKTAHRzKMyYM9SuMnJajLUgUsPm935Qt5R7LhyvKTtVxAB72b1fBge939s4vP7i3wmsB",
  "key32": "2rnfNsYNZmWARZKAPo7P417KbahDg1W6pRXkrgZysZREunGtZUS5auTgoym7iGfSxuU9CkwxgoaBHF6ZDqSvAmDV",
  "key33": "3LrBqEojYSsYgCnHNp9LgvWDZy8sineWnTciK4Cbe5gRpjLx5D56TLPgajzma39Heby2ifShCqen23QtVdnCDFxM",
  "key34": "2i6cTpKd88G1XVcmDRwHmvs577sjfVusjfktwHd6bTQt3ohsvrWtKRrnAMQ1UtKy8t4mmgxKdcPVuMzFm3D4vNfp",
  "key35": "4XF9pKPxrrrwuFChN8gJA84c1htNr1iPmauKcgqx6caQ1LMFs6sCnKsVKsjr4nsPQRaVrqoNAtnox1XFSe6VruQ7",
  "key36": "4w4iJRpCQkMxgHmSrLL3yMkDH6qSvmjyFRM4QWGNqi4DU4DnwDRJHLbEm3957YxNFu6wAbyh7dnctsnHR7oQZFfD",
  "key37": "66n6FuUgfGkpNbHZDtirvpSFdMF1JYt7VEfmyFuY9BB94Er9aQMh8bhNvYYV3j6fZaFq8F4ybrTtBtbb1SYLan41",
  "key38": "3KMBax79WRCfWjTuQhn3sixxwU3NyaeiJtfVFCpJx95LiAfCiKLk2Pm7MhhgczPV7VhxdCzxpZ3tCF95ffpiFcrp",
  "key39": "3UkAfmoQLJj49M2emMkRzu2xwgGpueLRjZtEGxwyMUn9Lq8FcxibJsPbGaMBAt7YMCR3feUFPjevh9Jcg3VGdS9U",
  "key40": "3S1MFHutf8WA1kq2B8oAM8YEupEpcEB65v66tJnbpP4DbN8eUUnWpFRkR78ZfF69GbTqmHhAwJfucta651EzkM6W",
  "key41": "5tmuREq7d315998BvkmaR4CeFPTQMYdGSWQUDZojnUbpYsAe5342LZo3rzYpqdXLqCbSbQAg36npKCQXrk9W1hVY",
  "key42": "4SiFerZWytvtzwSUN377gk1XC1kesh96bfPuzjNLUdsBDAFdNQBGomuJUdAjhteD1NTiuw5qECvUpnN2cRt1ys77",
  "key43": "3LighSRTcv2U45jVFSD8vMKWkfoDpaVv4ha2uhsWqzyiF6sscMQAWcsGWzrgH1uH64pumbLiMmqmPapp2EnMVn8T",
  "key44": "5SKFAJp7VUvssjQSHafNAMoNoTr1Xq1xELJ4jfayUm1ujkDUkmHfFpdGHrDQaRpRtq6b2xjHz3Rj8BpxpNGPHpKC"
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
