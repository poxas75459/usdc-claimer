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
    "57wASXnJzodM1E2s6kbdEEcq2VixsBdZyEVshuEnjXBHGoPWgLkxXpCgtZRtzSUtHU2xibtHWzq2AVYZaR1bXiVz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f4VmgXcZKmoweUxFHX9a2JtEuLVaANYujrnyC8caoRgxMCY84ZgFdCp2wdSD4FgEiyTNAdtoYYH4dB4ZMnKpmGJ",
  "key1": "3Lpqa9X12t2sTppL5B2ZZMaYhPHQ1hMspkVPM4E4skb45ccWoDGcFaFaTgHAZ8ifym2oaZ5Bso8s6oB2T4oBYiUz",
  "key2": "5gaTN7y2hc6PvCQ4VvBcmCiGZf89vsNQdKpqh3KWxtVmbc3veV6dhkjnL3yRJPwz3WV51zYfKLJKBW9Zy7cKoLL9",
  "key3": "2DZBfotDa4298TNJdLYgRfRQCwC8qjU9tM9nSawWLSWmc1ZP5HPvP4754S5uvopdh7Amhjp9GMe6Xx3gn3Kuq7Ew",
  "key4": "2WLX6ThiZEqA894kMgUbEv8raZN7nJesN6hpt64VKS48TGMDKZfow7vtxNUHNgrutKcD4PduBchajbcr3R5G7Lig",
  "key5": "2mDSxgjo1QyYoBHLKpXHsJupjydCHPngiHAv3dMSFPDM3RQRnF7TGhZWqeBx3mjXvYroBGPa5LLQH6tdes4FTh1g",
  "key6": "5zGAqnqMCHzqCvN1iwBY9Wh3H9unEmfY7h4jN6ZVQELqeLUTTArQFs9R41dGdFwNqgJtxcJHNth19k6VJWuqvC1F",
  "key7": "51cbQi4gLFYKE3mqLeAXbj8bAnKzqKQnhmBQPsyy2UcAAGfvYtzQL2yNS4U1eQqQzAZaRiJcgbMonNsEMFJkFnbC",
  "key8": "K9FeSq9wG29vGnMceETvhuDfNPtngu17dtAmVT2uQMQtKinEcKsBBgW8pyKbjVsNU1YxzHY7do8zcWNKBQEe3uX",
  "key9": "4Chn34w4xJ8PtbautT9bCyw54gGdziSUA48TgNJToCRe27WaEPWfZt4Ceahgb11QxFwdUTXUEptjADiiaBgZrnNo",
  "key10": "4USps6GZQzrukBg9xfBopHZmTgXmj7Q8WqP8TLXVDeDahHttigTS7PoKYQy76CddLGfKCY5e3V5PFxX3L7xgTEyz",
  "key11": "64VV3HqZnTuUGYdJSLJBHh3EApuZTZozBSAH4WCaLCdQmECZKsawvs3QuKEN7iY7gCSL4dCBG2SE2e91mEjnfKyN",
  "key12": "41gLsEevtX3c5peGhUB6WpgdP8FNmV1zPvoyzTeYkeMi3QWFpKRHxVgJ1aZtbwipjDfNZMocKgvgAKFyFjd2Dzxx",
  "key13": "61s9mhtccb5pKseqUd3jpT82D57C8bqmyrJ2aV7hC1Dgayx6Sd7a7bvoDaHKuCY9v99UfpfVqTn3QWYzf2ibRbzg",
  "key14": "2tvp6xCpDJra217TrsmLSMzNxueBYgteygVvkFaxNHqRkKv6uYQyyeQwxqEanNdKvR6f8wDXw4YyASrUSqVwrnnY",
  "key15": "3wLXRevvrWPoWzwhJzCuiodyct3cyAizpB5KnrbTU5Eaq2JXUW99WDqR27KMezxKFgTUfwZUKUgvprJHvpPkkjms",
  "key16": "5r2TQtyC9pdrqwx6o6Xktjv45G6MMbhrC55Qj38zVfKpu2yPwGGCSUtHs4sfrCzT4XhTAaNgbzBAxUvEGjE5DZg8",
  "key17": "2xj6Xpgtu5icwHPNMYBGpFxwEZHedPtXVS6Vu9BkaNEzcexr44y1xHeW3YALrmGLDZVmVzETUhUxg1V1V17g4vLf",
  "key18": "4CcBAYFgU1139iU2zdWQKvbp94CNRoB1sFAjtK7jHb2vhsskY4keVKcEHeAPRs3SX5xVk81YmZPzSJpnNLXRQWQh",
  "key19": "kgUr1xAvjiSsusyCvMReYufEYc2bPtEh6KzSmzkzTYwAY94C3Vhkb3pSW6jr4cg5F3cWRBrvqL9zh1ZKY7SodAA",
  "key20": "2mR5GfaxXuiTSW18qiS6LVn6NCnEUXtCNLmf2cx9dPZTXHbjX9X9TgnTePPfWL9n5gEvkHhYETWVJUs7xv4w2Xdb",
  "key21": "28BVNte5aq4ypPFdtXJ5uUmTuLjJkjnjhjN8xnESMzdDhB5TL5ATKB3hL24YEvki1v9fv7eNWKoeuJuqXMkPv4U9",
  "key22": "FszsbuWBbtAhyFXuAGXsjdexMQ6pAfxEW6vpjh1Lc4iCFhWVsxaNKmgmNWx5oSP6A2BqC1RWfXRny2zQw4SPgmP",
  "key23": "5RDavCMHb151Um3KuGFizAWm353PX4YSw1k3mXuTGuZwXeJPVMsqr1UUHM34BqiG1YWpxrmQYAgYtrUQoqEPfvTh",
  "key24": "5XwiQwAq85TG2FPHihs1rGt8hSpY8vVugSu6Fh4XRwwvQy3ip4xdbH2Wg8v2X8UtGHL9zN7rtoQqdWYKfjvcays7",
  "key25": "23dCsyhyE2qLZdj7RT13sfzdqxGfeSVfyFwYTcw2ThfUGnvHMbp12smDX1hZZjxT8DVnNLXzGz8A13D67rjG7mtS"
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
