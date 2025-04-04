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
    "8BJrWepjSr9ZATj57iawDv9E89cpGEBQ54Uwe2eGkqvFuYLs8hVzuBycbqQRHLSfjh31gwMrvVPXJLNUPN9CsM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uJzvoumRye4LQnfFLigAxEyKZ8yoLnH9qGfbjYzLALNairVdxXW2wqVyoKRHhEqyFuiQsBZHaqKS552f35kxFeq",
  "key1": "E1cCEXRce6p6vzjKSqfS7Trzo1WTgSA3BvPUAeFSA5aevnCySWFcYnJV6KMfAyFhw5tN1583Dwvve9C318suVTp",
  "key2": "4MqedTzLRAq4vKtXcHbjUmb3a1zSc7j4cGhKBSjZZkH2cSQHAY617Jg4xeEJ6D2y9n3t8WJYpRV5ZACCAySbC8fw",
  "key3": "43Zfh5guEzskNShJdgBFgTA6ijZnMhNKzRVzPFoW8K5kCZxgm1HhQB9TYDa4n3MLKBDw3KBx1t6YnoZC9wEXygVe",
  "key4": "33FGzup5JUoh1117BkqPM5ni5jWsm9mZjh8YxtT88wwH1qiaPCRqKGuWbUxvKizMutT99tFfNXsTJaJvgGct1u3a",
  "key5": "4rA6Kdq951BdZyzH3gWxtM7d1zZkY4zHMEqBWcoB1S6ShtVsTyU2ahC7Dyuqiv6bMKiiJrsNaAXy7jyunzgNUb8G",
  "key6": "65uwiuuJVoipDCEFvJMrjrk4NAfbHppekT2kAnkBZTHDndjdvpGgmZ1q3Rd2vA6EnLuMcwo6ADEaoTeCRnwdwt1A",
  "key7": "46XF8H2GBpXxmbAFxxAtJd48c49CkQdQH8ktnFHEoAw14f4R5i3fH1xNKuNZYB219TDVQrc1SHRe1GsroiMuLvmB",
  "key8": "3USqacJYap15n2WPeF2VuiY13qTNYUAbbTu99BtxRaRLxA58kgt3phSBicP6gXY6WocyQcrNjsCi3ceV1iaGfddx",
  "key9": "pjzdJMzq9y6pij6sf1airdJjSaw83mfJ1zwqHk3HZUCgS1CUmVZw73kg4LL33F6XnUwaJ3os1oC1VS3HEFt1SP7",
  "key10": "3SyLMeymEk5jjp3UQNKRi5iaq829SRfY21g7RHGeBGbCWHzDfrK2KezujdAa2NUJmaYNX7PFK2ZMpVp4fFDaQCge",
  "key11": "5eB9pMjF9K7PRirSsDUyqCgoPDT33BBXrpAuMDjPoWM3LixB9SaQJC2sE1mjYNDma379bjR7H24hjXxpYF1fcwsd",
  "key12": "3Xp2fPXw8G1eBLcnuKKJcLUT6nnVQERiTX4MuRVPZzrHg7yopWMAHc2Lvf4seNzQKdfJtYMeNrqrcg6aP4LuA4Ny",
  "key13": "5ZqdGKSjvNC36FJiidWbWrTQXMPkNMVtwWCggX6iL9z2dPbbQYK7BZf5yEwgE2g13UyQ95xwE4QdweTrPc18BmVL",
  "key14": "2tDVZMPgA4XZE6FmcopZkBvvMDJnGghEXTE6KS6gsuETXutpWfCcu9kKKteEb3e9SSVeLiKhysBFHNtZLDgE18pr",
  "key15": "5M144JiQmDssLzeX4RnNqakGVrRnoAHoAcA9mJDvRPVKgRU9QpxwhETqprFbem55QphoAN8JjPUTwwAU5JYeLChs",
  "key16": "zJpR38FFkXLr1yhgNS2ieKzMyFEFZ2YsLcXDHMaoVT5G2P1rXKkJqVSYDyasXQ1T5DGNrdCBZC1tjbkbm6NYDEr",
  "key17": "2QjqHeyJmXiBy7G1NLJ9uEjGqVg6ow8YHRxBB1xFkgz585V6b2y3rBqYjY1DTPWEG7g3cLEMtz8LDozcpBVP8A2h",
  "key18": "2gsFESfCyDzkEGLGDW2hEwMZtS72LY5mmsqN1mitsgXW1WrD3tnZS3vWZ3H6uhJEKQy5ZnpPdAT56VEXz5usBvdG",
  "key19": "4KA6ocF1dsUSwyL5jtAydhUGkH1Dy49py1gzAAJE9AdgHxLyyQXh6F42pJ8VAEBvswFf5i7BwoDFnPM8Z18ExSyK",
  "key20": "5GwExGWH8oxRB9nVGMvugPcq8joytUnZbBdmKNz2kD1y1QzkcC4dd7Vk3Vyxzt313RMqquPTXT2WNu95NoVfAvuS",
  "key21": "2Kgdg2jkKrgcZX2q3jfrUWVsVgVVKGVqwcQoWuoXvJFAVM7Ud7AN6axr4Aw6T6wKFzpJ2F96rP3QeWuQxQoKsVet",
  "key22": "3wXu5ZZvozKy2WKXE5okNFqHi2227fD4aF1kdksyVwRSVZsGPaXNLEhxRYa4h6VMCPpf7PMfk2A9Tea97tDnAVdB",
  "key23": "5nbUMogyJrdcJbHDcJ8yzr11BwCFmPHtwmSM198zWpj8RgdQATXY7BDHSEKxHwYqDVyhLXzihkCmxNmFVjcz3gU5",
  "key24": "3S7RRjJa92bNk4qNLz43MhQQrdT1wX4UBPmWith9erXcxyXuHFyMdXXEM29Ff8eRAUmjs36MMotsQkcYPhqSxL4z",
  "key25": "2pAiksxJHa3ph3YuHDMMcTdyRktrrBWHjbriFG5ovGg4sKtr5Cew4uFf9Grtu7dyXU7XGzFXN1AKq9MXmrYvFtxB",
  "key26": "4oGCh7ejZELWg15TSuQjCNZschdDMrd5Vz2LfsukjmkUYQJZi2fWC7JA8dPLZ5fWTJzwWJhKKDE3fwZ6ESaZvFH3",
  "key27": "4uDs1ovKnDthvCZqzycx2816M1KyJr2vqfHESZpmtUtHPhmfh3Jkxz4zpo7D423GNa3YsjW3Dgzf7rDf7fg16V9P",
  "key28": "3wobpyVEeb2irQiges1M5rokAHuoXWyvVodTki7GPykPw1Ektq4LENVJe2Wmo9LB6D82R99z3Tr3hXNKAttjEvA3",
  "key29": "2Qjt6AWTqYWcHEqGJ8hFiYgg9VPUSQDZADBNLVzmb4b8LpEzsrUHfWY2dUJmy1KAwojTJdAndT4sEQw822Urrd66",
  "key30": "3V8zTp5HaDuCQxbtbfYqPcv1bDVJn9URrhVdEF3pwpbGCiW4kAwZTL1BmM54HJDNC3GZk9Zi9dnXoRaSnGyVdsry"
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
