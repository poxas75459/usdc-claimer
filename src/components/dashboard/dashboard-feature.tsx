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
    "4wFbGg5o65R57T2Ex549QNe8sQQMjjnf6aHq3JTL9ZMaBMV3VGPFxp2aoKEcZv7bWxNp7paPzQTqNgUZuJCedqSM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VxrfffCLrk6inBWVkURpPPScNGajrNEu3Tg1soBskEZHHsvG8mVWDX2bQm8zoPTBgGNB1DFGxGpXVyRsEwsAr83",
  "key1": "DvzBnXjBx3xDVL2XDMmafgUeT6RoFtcoxHEkucYJcuecNw7AgGSbX2B2eUEF4wCoofsNLWKb5EtWEfFXhoiEXba",
  "key2": "4jgqG71MyYRBtjqwaJesERq1vyrF5vp7TbhxwQvSyMmmGRj2gMRXQuUH9rvL8cFBdrT3gefhy42akhWmpoaJxArb",
  "key3": "48kM3LLwyJh1vCJ6486kCv4BZZeCsxXfx1bFRBoJvkKJVzvb5toGTjYcZuMxZ1XMUWZ3QdqZunq6WfJ1zygGztL7",
  "key4": "4Qoq6NbjFbUzt42oBJRQKSLay882Cb9P4NiNgDdyhvKXEgoJAnRwDN8g7b2eBgit98A19fHYL5pu64P3jaw2qKL5",
  "key5": "ejk7p9FAcg3XXgzYPjg5Aeue7RfY7SA4q73j8g5HbZJbsF7nqsyhYWgTbQVpVkddAMPF5ka4w1xy6UHmNfyHWkQ",
  "key6": "3HFX9DpbixMveDtrB2rCeq7hRJ97WNZwW1z6rrjrp4Ft8qgHPAVrNJGP4HAPzRqSEwhWrHU17WtsJidMuWdSZvi4",
  "key7": "Jb53kKFmCdFVUXGD5sccujHgvRWPX1WEzahTCCctJdjAzfjVk65i9orD1Ndgj7ddqt8wZoZx5o7TwFdQVTAHs2N",
  "key8": "4iAkVPh1mSSXoFa6zr6wVc8Kar8cehy9TiKfem5RWQwXymC5hTUJiLjm3bLFnCffAvfc47bcznxVBW3bk4JT4igA",
  "key9": "5u15hkJTKSe4EYie1S8MG9stkU7ubVCmHLX1qZCDAt8AMUvXrHUQTYzXb5Xz7WW9ngEHiu4Fj9qJXa7catFS8qL3",
  "key10": "4HEqEwSeo5mnJvG899kMgo6Dc9nuii56LHz3KyYPiUSamfF1qHPeMzmXirack3SQ6vB1BTpnzX2Vc8vLXHcTo26R",
  "key11": "5Z4iywL4WsGQh2vd8sfCVJRYywK2dex6TSRHLAczDBuLhWeMhtP68AVVZwwBmKr7q3LyHbFfLaFNcMj2LKwoQvGm",
  "key12": "5w2jUaxoLFsc9J1vodMbiRfTpRGTjWe4UAt1y4kE4CTJBr4E8rr9cyf3gWVtwXZ8nFUNziH1PybZrCn18LvSBvjM",
  "key13": "4EJgocMntDhnChwQwakA1jMJchZ8X8Lhb72GwDXUi4GefV62uXviZV37E1mjekLyS56fBgBcVRKfK6twhqSVGbia",
  "key14": "2QS6TdvQSzwheuZ7xT2d5WDxsrSu4NtGPCiqfYXyVKyAMfmuMavrLyDvwE4hYe3gULefGPvS77MNsHqm4QVZUk55",
  "key15": "uziqzvvzQMGtjxqMKyiguiSVaeADYQ6vCc4whUBeJiccYKgvYQifzS1AjQUrEH3SjPqcGH93rA9ohDppBJ7sprG",
  "key16": "2X6RKvdDsfddTwyWSBbR72GWQ82B3GN5ceo84Fb2n7ai1FFbAMjtvtn8x4t7J1JSvxBKhEo1vYd3oaCenMhBadTm",
  "key17": "39SeGEEre4uNw6N5MCrba1Rv92ruzdDHysdS3HxFCnrLHhH8qPNUkwtV21coMSmjnuyw5d2TF81Q7934BVvTUExc",
  "key18": "42DYh1wvNjxRfyXPUTofaiTmRYd2w2qXgCHnXEzrmQ9B6vEugjbTGvGpxhKLiDFUNuvn3CxKQZS2eXdbh8CtuDUN",
  "key19": "2EFQVr9HGQ3Pa1ic1eHkdMwV2iMQa6HLLnu7WvR74mPQZ9JHL2ExSDs92AAPBnAyu221pJR4QubG8Y2p1BsCfW3",
  "key20": "5NQeNmugnP6s6GWdMLfM1s8YLc33NZfvzXejNGxN2bo8M4NQoZUQrAWAFmhzG3stW8tfY6dfJKN64zKgiJcGwvBc",
  "key21": "uDLCySewpfVXZeDe7wyeo98XyWzxuCz3LzsHGLcUWknWHhQYb3KAY3XnvH2HtZwFnqkpTxLJYmtf2dWVkKtouMc",
  "key22": "2DQTWtnBF1s2aX8UkmJsVPWw31mdg3HBJ3uj2MeRUxQwE9to7LrTWA631qizhZsKg6TjX5URnQcE7J1fb31jtEej",
  "key23": "EGJBeNZyM515kaN9pHyjsk8g4xQ56V5H7ULPeECnjMUPCgScJg8DDjeF61pTktjqmeqcPavVnvjrhgHxwWR59Zo",
  "key24": "55K8QoEnJhRFMKNvfYkVXUvHzhX7qrA27W23yhnwNsoxJfZZg6WGSxAqJkQyPiSYmtEr2JVMgVMV5LncCnLr5HR1"
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
