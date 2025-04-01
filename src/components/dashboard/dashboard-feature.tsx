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
    "63FGxPLB4A1SYQEdB2PCCUQPz3DyweRqeo4NcSkmoP1RrXtxwjuQwptKtU7Q24DfU7AwghXw5xgMeWWcYs8TqFr1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uL3cpofGibPGdTzip6Uvodzw7tLkNJHiuXHHsfdfxjpkZ3MPkDnG9VkWsemh7gm6AWkK5bAnMPDcWQzdVCMUTVU",
  "key1": "2Xv3GD8gAqebUGFAqm9E3LZ38cjoQsbQqaJP36hkjzqSAUjm9zrR7S1bK6dqaSSpMomwVSoHfeL9vYwMwqRwHLvg",
  "key2": "2mvjmCyG8SKEJxQ976TsvFXzmHbBccM1mVBWqkXSw8Bkb2r3EmLyALeHxHhWjEm1u17n7UnwMrQRoVcUgfGMfTYa",
  "key3": "2n82rqH3udoZTSRTVpM14AVMV8pqx6o78XZUBuJFzFx8cCB9UPakmXFWB8JYo4X481E2gPxyvkjwzbTot8kTv7FT",
  "key4": "4V3zeaWS9H9FAm22quEZcHRhWxgkUJqeT6NJEvagds3wnFG2jw7Sx7eot5f337szhhhztc98mVbwPLPn38vFYqNt",
  "key5": "5tfhYtWwWuXuSB1JtTLihJiN4y7cgZ2thDnVm7hUUJZM4iAnk2B2dZcGNKzHc9jate6yzh82YYtXWptz5nSEseSx",
  "key6": "7ojUgNkRuQKYbXEwvKFZsjkBWopJ59zLqw8g6joHsHF8P6z5Z47WdPbt8EnLWD66vsgcLsGhTH8Yojv89N3xwsq",
  "key7": "3K4QhHVE88Bfoz1EzfJoEoLSCxWS9S9LyLpvReqBmEYPycgxCvyduSgmbaMK4Rfn3gxqhE6kyAtBQsWako8rwGYB",
  "key8": "27qE1xZuAv82UPux9EYuKgtd55JS7NRnAfECcBTdbVNhaXk2gsbKZ9tWDW7vx7GqMHiWW6uoALjnFGZ9guVkrX9q",
  "key9": "5kD21ms6vmAk2GKL9S4PzHAkxzgM54UdPnS9Xo1gRMeuZ19Q4W33iu8VyKRY16Ktsh4342mtUBihFeGFingfiQNK",
  "key10": "2WaU6B7LJgFuWTqLwLnUAzqVzkkDDSQ3Pwzof2CgEn5TBBTEii8caQ8BJ8d6opNtgYUpXyXYkeGq953tNYgq3B5s",
  "key11": "3wpY5ZLUTSX1mgZ5oc7fPS1Y1gDjCFhg7XHaaMki5eXkuew3AwKg7gNJjoeCZXC2isL21Lin7vW8Kox7CJbiWVJj",
  "key12": "29nkk2EK3m5zFr3UVU9nZRaARSYDm5ZunnERJ2zNzzubrUvS8KUEuAKNeoSu8MezMdUPYQexpAkSw6mosDiNHNuF",
  "key13": "4rFp5KwJA8QZTgqJzaXWmyYHizYnvKWrkcnqFDPQTYDoEqHMioTHjZBH7dyToVpyCEcdsJKPvpW9SaVKXWt9DBHx",
  "key14": "2qiXheV6J8NKMKmvWXom2vZzMEGizx7DhoRjHEbzZH49QDm6P4rbmbHxsCFyMEavNfHXgJuDDtzsdcyovFT3cFgR",
  "key15": "2M2bcBb3F87YF3oNeCzgAi6DFQ1KXxtotzxBJQrrWDUUHU1wnGCpvwaEgpgSid3D2NwTN9pE3Kp26uJcp8SZ4Vj5",
  "key16": "2BGogQXcoeDiZko2SLn5yjCi2viMCrC4yU9oux2QSXTcBkFftY84n7vUM5AzY1L5rxNtpdJHg92kmioSWcoQKLqE",
  "key17": "tVqEoiiDnf1PTt44QA24hJPd97jZDVoKY6hqhA6tfjacwvu51Mgwm2MHWcV8CPdAzWoY7dUSv6ZyuThuZkL3UBu",
  "key18": "qSxnKvV1i7JaWk6N2DDPaAmDcHdLpEFqEY9bYR7YHdmDnf7Jz12fvbh1zQrAoWVfyUY7RpEif8MyLMkAvD4shVd",
  "key19": "5BmGeUndk4u7opiJLB5NSbWRoKSis5zy6fzutPw3dJJf5HDcJAZ8q72PMeTeLoKcCtxST1yJphXwdKZEFsuEwX5s",
  "key20": "66jRWbLmunDP2sYLYxcdTBiVydDjRV3AWfGFiBktxPM5AANESpm6jwAqk3UTGyqUziXjhGfiNDYSvCBNTRtMRVG5",
  "key21": "Joggd71uxLpmNDuLqyZQC9Yqr5Lk7cXcDPUtzPUvxtq1UmYpMJAc6gacW7SPeQUiS9qs2Sfwjc5NUjVFAJvRRhk",
  "key22": "3uS7RsenFcv2dzw8rr8tXdV2S8vANG2pZ5s5q52FVsAqndkDywVGfHmFEh5BrVKxnBp3LHxyQ3MMzKgvhdxp1aCK",
  "key23": "4yNDFCPzmEpWtJKHg3of4TQNyNxKkgQYzeF6WnAcoAEpC1Z4EF1FbQjrB2zn1PbLoDPFN16VcM5mPs2wAukwqd8Z",
  "key24": "3dzu49dsBhANL1AnR7iNpjAYsZUArcS73STRRzh1jX7vs5CTLzhBZz1mwhFf4QKq8p41YCndMqXLGMPxM4GYFQVa",
  "key25": "3isM4ZPhFcQwwdwZXd6me3b8tSJjfdF3gnzxmaxfaZXW1QKicAVZv9XPzhwiQkpwLNc73j2XYHCVH4ni4pQdyTcm",
  "key26": "Kt4YmgBUbfbEsMPruvpD2qvC1AANWHRz6Zq8nRE7Hq81fJSkFfcKe7KYuwJuL2NtqfacVRd5xN9E3j4hnDukVon",
  "key27": "BT8jUDNChf1DCMb5nb3SAYN51nyLwaSTZqWN2iM5qpyMZh5HHTWsktXVQkKPzfqrfTsuz24dzYZbVzFxTwJHzr2",
  "key28": "2hfg5M8eZteCUMHYEjHCgHoJeQwFJfrD4JoWv21Ze5pGy2e7SDmyF1ZVZe4os7BRZWp5kLrz4XjroceF79MX8vPf",
  "key29": "5q7dQA1FVJUBkMVqmoY4e5uqpnBqKqHwPHrc5LBJGJFZCPbeHpQJmaHu59y5MWB2wT2NvCMNZeHSNLc8WSkqyA3K",
  "key30": "5LRrazcArpJK8e281qGYWz1gM1ekC2qiJQHmzyvFFznyBXMJw1hBCesEkgwwYKLBCYk9XjyZTGJ3uFXr4f85SGmv",
  "key31": "5MwjUAZsiUKKBTM4f3vkxnY6DUAJX8XfL2vTusFMtGL4QtjsYC9nsA3tyvHwrKptfYyNybGSuj84iTZj48nM8CTP"
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
