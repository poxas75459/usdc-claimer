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
    "nrhS3Ge5pk7sUm1XKuKWe2wz6b8g7357pctgoDTNDdAvxDT4vApKWe5JDrkmJ6g2ji9m21hfy4kyZYGTuyNrd2H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DXxyFvP4Tf2yak4cDfew1NEdeB49Sj3CcczsfrUDCxkzWuRugB5QX5LfW8B8TmvMZUkkRuCwTKqGULjxNV9HsT4",
  "key1": "5rwuoEMGMi24QEBuniqH5hJZh7ySDEspFVNaeYY1NeDGX5WceAdwcP9esJHrLKa7wz9EAfwn7yNgS5M9A3YoWeAy",
  "key2": "3BtssAnxHAb31F7GuxUWYtEP6A1z4nKdw2gyobP3fAt52jDQjGMiPQcjVFRRjws6WyS76mLLKMWQuBCqgAbSNr7i",
  "key3": "yxp8rNwvoM3Rk654sHiHp5wp9qqaMraJjQSJBsbDp1jozAANRA4EvAQTdbA3p8Wp6gd6zopTZpZBdxmQh4GyqFB",
  "key4": "5kQxMsq16YANkVJFw8RRkrq57qnga9NptsaCdNSSHfhfVZ581WFzht6efsZgA8AdmyEQPTzhfbufyoRjTupAabBj",
  "key5": "2fpS7AMr3c9Wy9QtHcDA8xr28PkzFVpJJbFQuFhk2LFX1nqBhNpb1mefz28SsxjXbANeRbNLG5nhk4EmWo9iPWcJ",
  "key6": "5vPnaRZKeRgUN7k49EV7SExGfogTqvMa148UvAYobixvm8KMFy42evygWmZAnnh7zpdkw2UKZ852gkhc9YMFLwxq",
  "key7": "2ijsEyfNgfbWQDSQwe6XTAwuxQA5q9RUQMi5e3M4zRPJMUfUVpTRti99LdXJfTwZpx9jfE7CQce7jwSNjgDBQDh6",
  "key8": "3hLP7akkomMjMS7N5fRRLbm3j1XSMU29PngpqPFCVDRXgiTy6CDkXKgEmMohZ7BucxQzMZkxtXCQqSBwARnp8EWd",
  "key9": "55iHK2YJkzC2wuJLpejoGT31ymcAKWwvW6BLctbR45Wgarpxv7csSy9dN7bTLzicLPV5JMvMSEAP9jEciEVqjhYT",
  "key10": "naNuvNmZjMEWMbGygBxUn5d9X9PnTaVbt5nnekPSTXUKCLE9BYGp9L5C6PLxx77zfdGjJYFNQHFvaHGDS3WJvAx",
  "key11": "y6wQ4wudaBhEnKjYb9GoAmLUDMoYWfCQs55ZS3EKYdAVc6Tn4szoZfy7UNcPBmbYda1yQpKQwtHQtCdGd6eshga",
  "key12": "4wCvLMQ1DDtLpY6PGEcNvW1x1vqE1t79dWkGCUUCJp38kC3jBf4RYqbzHqxEyo5KieN4tKgJsfFnuvTPAGFkWwMH",
  "key13": "42JdgrzABm1T27bTyyTta2KHqaUm3EV38Rg5MNUTpywst5HJLxZ1NcuaR9D6GJUJP81F6vXxEj2sJuz82phbUXLW",
  "key14": "A5n63qGAzpqCQHTJKKXL7Fv6KNbXQiwdzYyXqMabV1pj5C8T2Zmg24ewyMYU3jB2uzURm1B6NsrDykEH1gjyFuk",
  "key15": "61dc4oyMtjFSHCJDz8i27popwmVKCVG2NWbhqqPdpRnh4wm7UxGuJVs2c5x1UPX4bJ9pBcnMCUN1ASpk43WSfchi",
  "key16": "bfsF3tq1tRtDariRkVGb3xLwpVoHyunGrUurRnWzLuQYT7mArWN3BXhst6LnTabcNqJso4sPtRUnv5F6BMn31gZ",
  "key17": "2oADiebGXivtN2Md3RSRFrDi64fcjQkwSYs8jszbsCbEGjSYVVz7g1P6BZY9n1ncsq6Z8jHwjiLC98gBNUuWWnAB",
  "key18": "2xYy7VGY5wugw9Ccyuw9VSjJ1P35Kx7umM7LQsqvBc3pFMHvn2p7DM4NrpDLBXVXkvsFHpjyHCT4xB6AikrMQg5c",
  "key19": "4tzqJDVgMwBkgczGNjsQkk2Sp6b4u27dp5opahdUHbz76YQg1oziYERHk5zLxSHuByKhjXQUSUzK4b4WW7rpmnNj",
  "key20": "2YkF3WexZTMHURyoNk7qHMfE3rCWZjqSToxtY5XFqNmh6s9sNmvj7cnncxogF9J4erHCbCgPrWmuss9LbPzsVQR2",
  "key21": "2U9QgKZLATEKyZFFZW3sZh8oLLJwNVky6oYqPeRTZDye7CB2pHoYFyg4F4FzZzECy54CzVxsLT8DKysBNKN7AH97",
  "key22": "5EthdzJFAdsJ4QWoeRwBoD2rXajrB3R41saNeg3xJVBN2CUFXmk8XzyAR86RxxXQoP7NLwz1pAsD3WZpj3wdcqke",
  "key23": "2UcdYbtFPnQDD2UeRLiYqSb7TfjkoYLqC8Aom7LKmy5WuUL3eUT7oFCAd1C6ri4JAdW2i5qWuHhKoPgSJzhZgWMN",
  "key24": "4sBJf4FwGTM3KCLUnAkg96WLArdPtm7JEg2rzXyqtavsAfbAC2z6MgQj9WWsZft4PFjZ8JZnF4t8UwhUZ1JAyFZo",
  "key25": "4YNGbGaS9Q6yPZRsUtUpEhzxfA8NqopEMjoMzLgHJZCQ6wYUtwVMNp7iBGYxis3QvTndhz7Z43S3swCa2ZSE6Fr1",
  "key26": "2coMPgwNCR2vWTiquyfTxQMDMdwLQkGoq94Fwb1gMvyU2KCEsH19JVT8cjb6uq8f9SobA4vEPDtorUTBSMLVpGJs",
  "key27": "4iLjxGJSpYus3NwXrtGr815bXgKGvc6jXPX46zSQ9bfrrd4VjFo3uCBzDsVdzX6FFraUkAp5SyiQuExJUEhcVa5c",
  "key28": "3F258z6cq6ciRMBJZojQZHVaSLJj68FZuxLzjmqsivj9gJfKj28yaAmpf1gJp8N6jbcnGrWXok8d9YAepPUERUVo",
  "key29": "4DxkUbVwGaNwWtaTUekHStdmBMZkRpkzStBGQVPJKBhfq4SkNzS6Vq3PSELdJ3i1bQjKYMHokuYoTuAF57uvfWu6",
  "key30": "3fRWjmW8ByLz8DMinNuk6eSK35saZkvdqfrxdmbyFJSpxMx1p2MGEfaH7PJR4TxiGaB6gq9q1SyoFDZBeGT5frpf",
  "key31": "eXFYNXwpWv5727urQscycStd2vq3x73qLVqWJwKNiGUw4HxmBsEbVJVW9FWroUMosQpu5Bgb4Musu8t1CtKiMyH",
  "key32": "3khtcRXsJrx9ANcjgn5gDDHigXM2SRZSfUjpWnPboA6Y4yRtey3iFhfPbHHPEyJr5iSJQUMqLR92trbbuvMjKQpf",
  "key33": "2Tu1kaY68QcyTatSuMc4TSgShvj2z6V1HQ4FQX9Ahz7b5i7DXrzfXCGNZUjnw8RL2NFvR7vnYQPTz3hXnCXssZE2",
  "key34": "qPiDQ71zQdo4myDbMSNhBh4zE3pRGa6MU5pxFUTfMUTYqT6xxz7HKTKeETDSr2ZnmfBJtFaHV89LqiB9GiDmpN3",
  "key35": "3WgZBew2VD3KpcrX4pEGqpnFLCNSH6i9ePMVjP6uNMcerNGVwXfTHB6PTn54VPKAobC5bSu9D4NnLbgX1R6bh2tX",
  "key36": "4GRvzX48s7kh5gs9UCsiGDiRdu8ezx4MKYaXpbj1iSgHX136m2UKPypU4Za3o4vqBdjihoAnynCwgubD2AxCZ1Pg",
  "key37": "3JuRp5qRZ3enPq4sV1Q1qoeqKCohMoMnW6hwYSG14w1xS82m9paLA8kBGNnRmVC2aYkAzxFE114n4rBZXMZXC8Bw",
  "key38": "4gNiYB9jJtNPdh2CU5xEn2LauzK6r4F3GRS8Gqnmw1ck35uXnxYgMxyFu7z9cyVmHuS855EhHtfUVgfZiFaQAQx7",
  "key39": "3UNpbZNGjrB1hfhQJkFKfGmzPAosMyBuQiuWjtDhkB6Lao8rMzs8NbzHia5btNyhhvSAasVNC8aQJAx4tVF4nHkC",
  "key40": "4k16wbqmXqFynq8fa9DWnVnQGsVopZuNKytjfG969wxVGAUs1x8UeV6M2MVM5YD3V5jUeZwwWr7hbTf1sVGjCsyv",
  "key41": "3a3A6QDMsAYRFkZvwz93yww3HQWT9Ua46ZQkLxFHGw5rt1MLAr4qETe71Rp1oFBYCe2Ut9HxUkVxyVHWPmfLS1fG",
  "key42": "4XQmhEK5eWaTsXjQ65ski2eABHDQiySFwXyd6Md5vyMhtFN9tEBAmAXsDpB1bcHcqywQj5XCnet9MRFc6zNxgNiE",
  "key43": "3yNn9j392BYwPWxGRoJZKjS5ptPhgatQTLD5HwJFu4Xx9yoJy32zXDM6R6KXJnRfDwdJXazgFGisvj5taF7mZFWd",
  "key44": "55R1FkPK32ZUDgnnjkUKVWxL982bEFfCi6vrx5b59QqyRanefUBDFRkYUrLMhfKiubpQeLyzb4AAWeP1xg49BdXN",
  "key45": "4etyZXXP8sSbkpBTSZxc8BcKcRGa5NCa7tqyRRjBsCCmKcNPgDkWr3NrhZb2ztFyj2wCEGenTSDz5y1sG65X1wQv"
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
