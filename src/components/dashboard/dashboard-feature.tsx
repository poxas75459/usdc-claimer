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
    "gVQVWk5DpWj3Ye1Kdy9DKVc8WzVpqQtUbt3cRkxefRzya7jZpKSbYzQGoMdXYg9wA3HEX4eYXkBcxjFobBwcz5D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xC2qaqDkUwc2ohbJcrnUXaNXRAGg9X1cDSaU5hebHtmzQxu6iuAMyrkt2CWVFJJkNK1wKigiLhEWHLZScqZUMtQ",
  "key1": "3xPCYnrJibQ55FnkHiQSA3z1JzaZELfB1PW1n5EggyhikAtwJ6hAyBJHfgQLrdTtDXXoytJetLdzzSxPMaiyf6M5",
  "key2": "4KWxcnaixNVrv2fUVvo2Y8jvkPeQwgwL21fYYUHB21BgjrXVQ7pjL9bCVvvpgxbY19iaADo9HdxaaZktvCdjCLM3",
  "key3": "635Ttm5HKy3CCdoweZMc32ga5F6MvexzSV6YYiTucSSkS6HFiW4kUW7Ec9bHDhEhXunugbqxeDiSDSJaZsk43PeN",
  "key4": "49Rgc1GYSzRMysYTkuDSMoiGridn1bKKTksGssuvm938AvkLdtACUc3afvj9DgUgEmntGRgreddsa3fSTVD47bio",
  "key5": "66n3Krn9zjkdArT6M4Hivy4nscQcCvdd9N2WsvNGTjAomtSciLVVCwBpMoc54nqibXxs7uA7ohkjo7SeFDaGMU2H",
  "key6": "4T3iAaX1XGYHkD56oPujQUHNZkGqCw43rqton7diDpJz6iYhctUXtzFXX7p7TBq8CFURufPxUt19JecUDouRWkkD",
  "key7": "4zfrdfJy5Wyz2qRyRF4bxzwbdjNmEHPF8gTCwAVFC2GiezmjUpDCr6847WAQQzRbjGNsCtSXZqZhi7WXnYTTRtmf",
  "key8": "nGWoRDrmxXBUY1odnVaN5k8rDvASXrdtsxw6Zjjs5g9tCvyLbg2F3ReZNMiZgyo6CJPMdKhWX71LU7775qWTpjG",
  "key9": "3g2UfsYsqQfRHJMDDph3Rc8ebbZAbf3wpRx57NLvzhaw8zunk4dL3VMixZHbpCWyudpreVVrbUF6eMVUoY6iwWUM",
  "key10": "2ypNX3GAC7vKReVqZDzRJ5eD5eSa4ix7gJ9fEUJumUmwyrYhb8o9PtPtJyG1QLyfYvVLjRiNTjMiiMHGWgTf3Tmw",
  "key11": "5PRPuKnzTWbeaZd7NMqAutoPSpNparX6EDYiHbqxAxfZuX9B6Z5XwrT5GK9xAT7VnB6BLF8Wti4yRiHoRUVSqocS",
  "key12": "5UwXdbr4Rg2ziLbkBsZRLXvtkxgVa3cjM3HcvssbaJota3oinBTsJMcsT4NH3mwvUFQhc3xYSCDDJRKsEuQ45dSP",
  "key13": "5emWfnpK6kuNTMeBGybVUQFXc39ebtrS3szaG4UxKmcgUfGMvcCDktYo5eS9ZPytrZUA2rie7R8x3qsqyp59Qgg9",
  "key14": "5Pk5rUKzicHDX3iNFmerEdagRQ7xiMdarDpKKQYqr21Lz8seBFKzaqvjztMrmD9p6Gd2Nm6L7dtgsax5J2MVXinq",
  "key15": "3mno77n4oRNj5udg4JjsLYUmVTaFxf8rvqKcNZ4k3FUUQCNGWxCDduu2MnYVc7KQHsJx57qASKCueAbLGqRsm5U7",
  "key16": "3ofssTrGiAUvMyEqBAvdyEreUWxWNFsuWkjy5ckkXc15YQ43XGU2qiDHKfZUHwupJ2hZEUtayrTd4AWiF3Jpi9vy",
  "key17": "N5k3H4YhZqBAMw947p8uED6Qi8sQp74jeH9A9DrwJBYwJegnd6vUScGzgCbCMx3tsHPLT9LziykrPovU1XchaZ2",
  "key18": "48WAa7CeQXquRJuTRr35Fypf4oUFw93pFoMYLLjC4jjSMNzkExnLxBVx5kuykE7Xevfa47mG8cZiawGDZoy49bBn",
  "key19": "3kcmNMgH2ragfXgCb6DZf34k8PZhodeR2WPSY7EPp25xc3mi6vi9oqWFNqheWX7rMAuQto11q7J78qFYvDzCeUd5",
  "key20": "4kQitQqY5DZXYkeaHVMUSyq7bgLfG9QZvTYETgiw3tmxTWr5zGBMreJmTxG93mPJLS76d7cLx37UKAicXox5LRG5",
  "key21": "67oZVuCuPieo2z1w4vb3a3TVnTjjrjSGxkUXRPMDNKjXeomme47pyw1fij1eUhVzo2GAWzoqNtrWeynj5p3fh8c2",
  "key22": "Tsar1YGKotnx5iyLahtqLdpHjbmpdj4jV1Rj2FWpHB1LpvkY54gTkrFbeBxwFofKik9fk5FWKu4yWSs43YLpD7n",
  "key23": "2xzi8thyRyMQuXf8T4Bu12NCH8B2HDn48ynMSurqMTyKkPFD318MGnGxxGLBi5F5KqSX9JeXVesDCkMt6a2HHFMU",
  "key24": "2ijhtRFVfxJ2ktUCjsWfCYfjjUG8PVKFNKpcVGqwGitQiA9KhkLWbh1rHEuMe2L2D8ehXcf1LuRV4eN6JiWup34V"
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
