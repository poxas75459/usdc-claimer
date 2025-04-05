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
    "42RknxJYWcGZBYX98ErdW3YtNXuqCzzoBNFJ7vBZQNh59ozceEWLdsnUByGjEyqFhHGFT1YWMgqKnsd1RSwMgZD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FmcFMfNMmBXM1kYfo4KVLATndqSuz8TbQ2Mi12kH2cczhT31JFrHovyP9WTjNDNheusBH8K4TV8mjP4wdtzxBct",
  "key1": "Kc5sKom8KUdi2Q1kmRArdo4Cao4UWCHfyop6VQPcv8dgo4XhkwsGSe2Q8uQPQriwu3gqyPyUbyApVgcs7z8ZxCr",
  "key2": "Qn6AnZf5F1jWHV2xjE2oDB1zKbCTyc7bdB1c3oqgWqpyMVvJRVc3rWtqqizVdpdnpyEgs6DP3RkL8exqpg9xHT3",
  "key3": "5xDci48kroeVYhws4kobQ8rCtStoaD8tHgKr6qAprgyQin8pdVu4qk5tQJDUAMGCLy2gWkqdA1fEgFQmKpb5PvGA",
  "key4": "2E6BWrTf3TwtSg5dfeMd285uBMH5NYTuvQ1Ha5HVxJQqKH6CjpPSPA6JtvxRsBjhCChaPMj2syd632YBLSU6yrYH",
  "key5": "2pMFqToZhWeCy11JgxyXBGTVPY55CDkXR8vY15eXmqTfa3qG8qLe9kXft9pTLeKDaBsnnwmcEkM3B2eFnd8PrPpT",
  "key6": "4PJ7fXJ7qkqz5ENALjimM5nvUTX6ct8viRhPP79owrvb86sSjEpsA9zV8beAzVunE8Vpj7Hq5DY3MnMBe6ar1Kh1",
  "key7": "361bQ43qBbj5RniWuPGmWkXBG6sQhB1uduB2zQoxYkj4PZ5iSEdh5bDegP6FuhiX4RbtUPPMh7hFSN3obLVy8nD",
  "key8": "5PdUQ7NmuUHQigJGQZAVdQujY8s3X3Mr4gUJai7Bj2wcwyz7UnKSxdPJMBxP9weXWgr4Jqusdf8QavXkqhY33bYN",
  "key9": "59sXZzW33M9veNyGVuj7pW3xCjkU2FMyh5RyPwP4VFBVLbDLUS7zDVHTE2mW2b9gxro8TtSaQ6GuZyNBXUA7BFYn",
  "key10": "5vaMbrWCWKJZuJXvxUAJxxDZNdzuhmo8uxzmUyEcRR32PTqLJhenbdiWoLwes8AugpGtuB662pepSuW9eT1ZT6RB",
  "key11": "4KDFHGzmCt18HujxtWHRGN8q1FJXMdceHkR4q7J996snfLNBhjqZ4tgWDRMQmdNE4mkKgby22UfQ6YwrJusLHNyB",
  "key12": "MMMp3qS5cpkMjy3Rjhn42K86zF6sAZtZvLZeNmMjquoj9xYnWc46B79re8ND7HU1F2thpyYDMnQxUXtnF9uCyxp",
  "key13": "3C4faAdzsMXLn5tXXuPpsmKKdUiTsUcC7UshoNtYav2NZTVNpSbuBMAAm11jXHRteJJXsLf9Pu3NWT9yUpP2k4iX",
  "key14": "4VMF3pM4rKr9YnDZ8kJ2mZwmKYz3sMJ2bhbxdzktdx8vUEJ1QzMZFHLowVRr9cUs68bM14QxVHn16v65pqrnxV81",
  "key15": "5Ja4RLUDsrYx59Bdjdt7xN51LjdXdvxtUZdiczsuDukvyt2QBL4ockNJUwu2ud1e4KwqWmYcyHzEmbyNHdQMVtmy",
  "key16": "3CRiJPAPBs9pq7Ju9zeeLeki16Fn74VkBCBmGYMmRe1SvikuATyhyYras5j1SJdSzpLMEwEDjjS32r564bfit3vF",
  "key17": "5jYY5yxVhyRiLK5rCkvF4dACe3AWvvqccejBEoZg9oQzHkpDDzabwmk1fFq1vketBPSdGFN2d68e6EeLuSfpJDdE",
  "key18": "2saP16ScAW2giE5VsQu4mT6sN5MjeeChunm1DQK8i3uWNAYDxngmzqpq8965en6mcWCdsDRC8qbctvHhxzfZKXiS",
  "key19": "2d7bS9tS9NSr9GJPSHLipDTtDXnJFPeFYhydqgLDu2PUckvS6j682UjSeGvzyDt8K9p8a1HUchhjBueAVFhCWZzn",
  "key20": "52asFZ4WaTtmWyU73kYct8JEowz6wv4aJ1VWwdL6uYLKZPy8FYpcgo7YLEiHD9NED6Yn8e4Linfc6oSFhneQ9SMq",
  "key21": "2tc4E22r8JtxFJgRPx2ycqFTqUrJ14vVhCsPZtZvWHWsso8SfyaE25t66RWyrHS1praiRNbhMmYCeiXKE7BrjLq7",
  "key22": "3d3jS7bVgz4pLg7sPKsr3zmSWg2zLQLLokcAJbCto4vduWQTtZtZWFMRwSyYnhkLJcBc5RS2FLnS6siTFnYSsEno",
  "key23": "4zbvgXWt1iJRrH5YyHEW8TAv2AG235X5M3H6BtAxxxDD719NqE5JeDj9bchSfVmCTeZHc9J6MFP3hedhPj7XcHtN",
  "key24": "3tPb5SYLVwELsXhEM9yPUgDUt38caMHErityTAagzeZE5dgT9dbrZGB4dKBrFXWfHAM36PiDsiamva5Xd7g1g6sj",
  "key25": "zqSrwcQDjUV7jLGrCv9tAnvKMGxA54GLQVgWoydKKd7dGuZsDNx5MoLMuWzFAbtgbNnVKzXUVFSk33baRbaKpTy",
  "key26": "4sX1SPfB1WuBNjYCg6YmaBLGi5AHxfqxtfUWVhbrJL7nKAdCZ6ptPt9ucJhzhfPZbnvKP1h92xf87eJ7hKjenZgR",
  "key27": "4W5j1p7CAkTK7Q5Dcbd4y9SzhvEiGB5Nj8a7eZj8x2bKdmnQNJoeTGM9GGrTXaigiBh7w3Yba8GM2yMrWLcAzii3",
  "key28": "5UZuFmxbdq9WiMYnbNe9rhYuEb7KM9BkMNwT3omDwbz8vo6Hb8WZonmLGFPnfivtD8597gV5HgHcGwL44R9vozrz",
  "key29": "55taWwRWE3VkpZUNZdDZ8zbcWJ9UeaXX7xwoNsKiV12kfhg8Ggo3a2x1F79DnhZE1Ayvun7ZfKbPBg7PJpL6p7Xg",
  "key30": "559arQ74R9Ls1tdut8zAykziT7duQmBi1vaSaDhFrAy3zE6jrQAWLohpZ7k3p4MaV4NLySvRTSE7JuvAP4RUSfgT",
  "key31": "4XxDW5BGtGDXT53V9NbspYuE1FeBvHA3LtkGoNyr5LeyHyF1fXyrEumWoSRW9Eo7ecFhfnzeyZzj3FHRPJsposU9",
  "key32": "5LbYX3VF8kpJEsCoSA1dN6j3M9RzLQoLgLWjXFJRFM8LqeV2QdWGfwYmb1uTGodMKm5wnAoQK8xmRfm6WUw6hSLL",
  "key33": "5qX5YWXFFFypPvEbBcQFKbzbdJqrBk6xi6DnhcitWZ9yd96ze2Br7GvCv8ng46zdXH5VdsoHzxpd6XV29aoVdex4",
  "key34": "56JnKdoxaGyBVzMvGUFUL6NwZsqZtJHEFYXTT4AB4AMAARm8rfTVeZXy3f8FcRTF98exwaGo4NVfkDh8giX2pvnp",
  "key35": "knuPZ2tiZpH8p7fZbSWf7TWVAfN7T8jYnoFD241QKs6G3xtSSBifksY84zfsadpbVmhV2EmE3DTPfpefcuNCZWP",
  "key36": "4bQBLDv4btwAYTzRE8gwQyABMYcHg16ZnbXnMwdwjuHQ2Gj5cgnoGiLvRponGPSZDGoiaEKDWy32kvYKUWmBLMSq",
  "key37": "62g8auCh8QenysNsvLRbCbFhXuKsEBcKd87mNPQ4fMrTkvxJNoNiBfon85ZAPfVJNQDcc4wTiFUoED4e1KwxgmTb",
  "key38": "2P9ojx8EDuAWoNZYqdsGDSpY8QZvGVNjDVgfYD1ofUgzgn4imEC7ft6Y4fvmEvmFrW6tUuf4MgnW8mJE7cJHNCq4",
  "key39": "4b111QnR56RBDD1yUyYhau14fd6Hu3DkTKz8RAjDCY2E5qUcRV8ArHpDpvp3qHuGXJAHA8HCNQ8cjQ9a244KpdKZ",
  "key40": "vjwAS9ath9y2Ww6tWCpecWUgVWgcvCzEqGga8MFmagZPVoPy34nyZMrkirEcgWfzabK1VqTC25CKc6PMWxVtx3u",
  "key41": "4cRUDUPiwnjvJSH73aCEpxrCCBq5NRkyFwnbDBsgAXGN9PhT6dW3jPYwg83PixYUDrEHtf5TSAgVx2Pjx2SPgGkz",
  "key42": "5xPNgzdhXQg4Lz381Xz49C1nACeu9Sgqx9Fs34ChCUQbf2iYqM4mnWzozLPa97gsHJGb49n8LtjuvDM71bEvEVPQ"
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
