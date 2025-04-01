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
    "4vAxpvpQECeEaY8WUwMDhMwKoj3tVhYYq9a1HyuifTmcP4xmmugu3hmfTx4ayhYgEJNkx3AWSrsZM2Gvy1AZsVEH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dz5suxw3qafVKzo5UZwha4ZTxRTwRFeuDf7Py47SACCzHdiJHugw36d4wmjeYt8ySqHyZNUPwDncQdKJh3j8jHo",
  "key1": "3XCameU6ibByArwfCxZhz1DVAETtfF1aQrv6c4syMJfKDQZbzdj7cNy7JNR5EVFn76AHqDcJ5EUKXBSXsqXEQFMk",
  "key2": "3s8xeNcRHQPzw2hBdfV95JjzeaT5r97UFSCbeYxViV1yqMpuVMq4Lg1JtKSjRHiNZY1VSqEzFZKwKhxGBw6Sbp3b",
  "key3": "2DtR1u2HW5dCWcXwShtZz4gjBavirYR44sd5u4RXaVxJ5whWqeA6PZ5mk2xVb86psBX2JYGkm7jsBudTvf9ifvSL",
  "key4": "4ZHnrBFchhkkeeNNZbknwSeutvKZF9qvXHWXHhu1zNNYfdKLsEUQfFzAV6oAxDqqdqTkar3GJyoWEkvXiHunvess",
  "key5": "RQKLDLZkMPov2LQNG31T75s64LQtiBYrKWvvoFnNrqDRoVK2QwYSA2aLmmEysc3MLBT5tn1jWu3sqdYRYtgtfg6",
  "key6": "3hSmAEzk134WRBeiE5SnqwVKLXCzTeJMi8sjA1aPBkqYTuWLgi1c4WkqUZPmquQXokup4syr8RXEvTJFVzNU6SYF",
  "key7": "2SpjEy7AbFFopkRLNyTj2azTMa7yWQ19n6LpjPnbL4RNYLmhBvbU9fHQASEM2XJCCxbCK5yiSigV8zwGwGCNYfyd",
  "key8": "5V5X2MVKuUJQ88rTDkDpmAY4jG3jGfvTGZT8MFcnm6TySDCngyJfQiC4qb19GowUwaN945EyUn4X42xUeoUQkd3Q",
  "key9": "5jGqQszZT3BKwCDwfXFBL771B2KCrQmjAYordvD5zLY1NvaPEj22hP2HjPZLpbVc92AUC7MLuZGzQp76wKRPCBce",
  "key10": "3b1RdigF2wYUMkQFXiPhwqtx3QeR3JuX8ULWJZHdxBdwnwG2UGGUTQzPTWob1xYwss7hG6hf4gCEy9qiuoPnjcvL",
  "key11": "3r2jSKHGY1HJoXfyd9ze7gCcPXMaHGt59PENzbP6yseZoamu5nBBY7sstxYbmTKnxWwpgb8sVCdcw2XVcayfZXXZ",
  "key12": "4MzupMjg4Q3jS5eDXMMmg3ARgzoWvtY1hCVDPfuE7dgfow6zyKf5DgoWUN1Z2r2gy8uRpwUGTweaaNk2GmfSmWu5",
  "key13": "5qm4baEJqCEFeCWbaZCDJWeMAcoQonACiyR7vtXXMURkfcrKLsa5tbAeRwWog3JNJ1RnhNx4L5DyhBtAT75pRYC",
  "key14": "2RJLCvhAreDbD4R4bEYjqtsuNjVwtXsb4KGRRkBYPc9AHunRizKagCK2SF2jjJnSEtwsfW2RACA6kvvZA4wuE9xJ",
  "key15": "2TNKtjaAXb6JeVoxHWFqYZJBnDY3DVLC1M5eXGmxWazZkmkLtufsomfKySSTJaH8Rn9hSJNxjABx1ZiUWzqgJoQj",
  "key16": "4zB3mvFmNsRVCGCQdEbkrSW7iBFssWXLVvowNDhp7CbwiPuWFfBfXvMXTG8CJmPkBpMp8ki93mriTeuKmmihyzUj",
  "key17": "2o9q36nmgS97jTQgrGwHe9y1UoKwWR7fjtx7X3BMsvUBNuas8PMZJPD8HUSP81SxhKfQVZM76oKxyzQ2ZRKg5pE4",
  "key18": "4bvSgSrEtMPCbbP8nAFyhFQ6hWk4CbQRBBbMmGJRwX2VKHeFczFpd2a4LWzWDVBT5EQmCuqXva2o4BMYwwjpdbSP",
  "key19": "5FnDe9Xh1hMyqB4NDgvCkQQUYSfQcYHYw3rFJA4AWwXWxS5DSMkzqVWSj4bYEYJsSimgpM3gatBiNzgKuJZB7xZk",
  "key20": "5KXgJNnw8K4Sq7JpQyHzUnr4jgojZ7BM3S9SuQjazT84P5SPz8G3JPMLSHhxVFLrDs1A3PtLUJyZL5D9GSWcV82D",
  "key21": "4gzf3C2TYTYexFs5FgaAfzacuYc5eBLFwbMQvRzPoPyadzBSYcRNe6oRj5u92Sf9qHdXShBHoMhWFx4zd5a8TGu4",
  "key22": "2KBdteg8m7cys4z195PSnLQ1keojjbL27GFf8M7zY5Kz383hSTUDnG638ZUKFoXCEgi7sp9w2RWFpF3agy2WCNDa",
  "key23": "gtCBz5xmjbjHwCcwoREioh6RPLXUVcHDyee9WDEZD3jkb3bgcSrgHKEXSWNehi7iXTMWVRarP6ueChT8wPGeUic",
  "key24": "216DJc2hK5gp2fpYnd8WUhQNesh6CaH4PZM9FJysnVybwxWNFugvHP7qgcnPpVxX7ZThYLtReCM4HhDWJ5eKYTnY",
  "key25": "5SvHEZcHD5seAcdGDsB5UukXM66VCfMmwEbk9p342iDZ3yTWWmciFNNhbeMQnE2Vt3ZmTf1Zp1Bky2fdi31koZzF",
  "key26": "2R2R1oPZsoURoaP4k332DGKi89wSYmh5n9agEtepXg6hF8E3o43WL9DH3C1wEeS6e8AvnbMYkWrcpJx6h3iNsAiq"
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
