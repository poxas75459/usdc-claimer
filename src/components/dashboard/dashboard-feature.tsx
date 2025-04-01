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
    "4AMbYPKya9RW4SBCy32L5dVRGLbj4Tg9QyNyaoFwuc5XfSwDTVuH9WtJd66L9nf1pUm3GvwZRPtLdNj2gHeyrHCQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54sbEt7eA9FF4nQ2bPwH2pChiYDC1mMqvHFPQ2m6VrwhyhXDH2ZhMiRiiGzrHnDhGdWmued1A6VdQWSKzLXowoVf",
  "key1": "2hHk2BmMa77bNLNu5TKYgFtjyQBzdGpTBxGJLt3tMuLrjqd5YzKtGM8rU3jZM8dYJAMR6CV5eB8ybDXyWaMxYUQz",
  "key2": "jn9EYJyPu7xr4d2RXwJpT36zFt6iDCsTgzEZetZp6zUn51WZuUnkre7mnzPScXYCnH6LRdf1ai4XrR3jjv62YNG",
  "key3": "336MPodpyza53dx9TaMhmRZS8GAJuL9hZ52wwrU6YS3bm2bKH9UkFUYAiXAcXoHz3XbC8ZABBLpTHqWdw7JSTgoF",
  "key4": "3zXRRRZyfXFCHTQTCepZ55hhS3HfWL336Q6vPz6kb6YAm7em99TjrBMRTtGGrX5BwwMLGyrd84MdFXEW4QqHr1Yi",
  "key5": "4QXezQAemxgcxBjDpTk6MmLPZ9Sp7LuFvhg76LjaPmbyHjBndPCL8XjAgsCPq16EivF3ZcgessJATGB2hccXTYp5",
  "key6": "63HZpNAmCbjxTya8tmiAA9GH6Dqw35wbqYkCkKvNMpgsAPArjASKW2movDyBufBgoNHKRMrxc9294fjaxghU7ZPc",
  "key7": "r5FxoVDUg2AP6cfvn1v9Uuxz2Uchf1eR5ceZ7Q7sPkS1fviURQ9B6pF1d7cpNMNWucTcFbqYb72J7RLm1CthFYM",
  "key8": "3AdeY2MwucJjd4kEqTeXUP52HjDHumhqA4KszP7dMCkzass7qE7coPoJSNBvg8otXWVLz2CL8JkmTdMw7rsPy8bg",
  "key9": "2hJxW3vpNNdHfzCFePqS9Az8MTnkvqSF6uF4tuacz6BjeqNvEAJVGqj3x6z2GYQgJ9EBV5aNHD7uG4zFZg4LsAge",
  "key10": "5Ead6xTXjykSzGA9XsbLCDRpeFrH7t369BdshGbpbsB8jqGFp5DKpmmGU3i3MBBiXQLN4aJdf6wfUrz5mRTdwzf",
  "key11": "2cg1LzFaVXa9W2uEYgThsgyzF9WLG2NUTFhScfWiA36skX6fCcsYHhqUWhFEALmq28HHMCXFrfj5tMJwZ4Qe2mf3",
  "key12": "2BtDHrVPmyCfcy4jMGam8CTppuDhSHgmAHoheJtiH3S4XX1q57Dfi8baebuX8qKeAbH9mPMcGoVw3hty6W88JFUe",
  "key13": "3T8Sk4Hh8h2TcXabudkcdRbTZpayGxrVM4TCbDhxfsEdTr75gRr399HT7xhZeLSu9Cfamu5FwmuvQ2GKG7o9pBjp",
  "key14": "Pppvy3yvHmMh5MdJjn7nxxWH65qaj71kTZF8fEyiHVeatfs1LRN5bJCHPBmeUQrfwJ1ADxN7bES4E4a1gdACs25",
  "key15": "3bjFNWujgtYaEGFa3hhVrpTiXvgLAFWUYANqDWGiMv61rKvcGYCgBv6zbymanUkRG7jS396wMFSphj5opGh6uAqK",
  "key16": "4yFPGKPGf5WBP4fDcJQgnQfxFVHxWV5Sxz5p7otE4v4DYbj4FkPMv4C22dEVWJK7jHu7HHQZBpVs5D97XqbcKF4k",
  "key17": "3bSrWhe6wGSwJ1KPqXrWZrfo8xhdrd5hpdabSVHwCf2xpCRDuGqD5VuPeg39NkJhuqJQoydEJoriNTPQ4VqS3dgd",
  "key18": "3kmNR5UMCx37BNQBRaM4UjsLYEsT62U4asP8zNy9dZQmTANEDL3Nh9fyXsEWUsqEgWnVP5JHFYvSLkGb8cBHYTS3",
  "key19": "35ASj6KNyCDj1eE6ABhGi1CE6E8wnBF5xr9YddBPD4YyVgSxnB4pa18QpfFcnR49ZmU1Ehdc7aryn16Lo8AFjQcz",
  "key20": "fGYEaoZDuvbx7Ds7NPY7AuK5ztCc4GSUXW4dZkcp4yKdeHD5AF1zrjoQ5oJZWriG7AbmuL7RqDMaz6jMxN972YC",
  "key21": "3DWQCn2fPVjLAqJK8w1FtZahPapN75j1Nw4Gr7FzBJJeP5jCnenUVhvkFRcvWya3XxnwvWqYwZAa7vHmYSeK1rfS",
  "key22": "4VwjK7tcBMVF87uJR38KNHvMBHQnc6WCz32QHR51JjvYBQ7MnbsoRpYHKC9r5Lm1dTiguJhiq85pnKvKNncCzfZp",
  "key23": "3QwcZfz8QNQSnU4xkDMEHRsj5dwNkSAURekiPqNY9iBrsRSEAtyh9FktKak4QNJHruLVmD9Yoo9JLZjvmuDAgae1",
  "key24": "2BhX8BgV5KDoMtYXuNth544t419r3xTAFzcS1UphHE4fjTFxVhuPAmN5e75AJG8Dx8mCz2CftRMRa8zNNbhntFuw",
  "key25": "2RqKy1xyT5iVZjDoDh98wtCJSnrpbYWKTi6MBxGuPkixQfs65J6YGXacWGn7Vi9Vfx9W1UA3Z7qkneJGPudqh1BP",
  "key26": "3Jb6qVRYGUX4mwoBqSXNiTNfbrj7CRwjzQ9NN6dFcxK29BAHuZFzTYfiT7Jae9gWWx3bSHEBBx7M1ntPfgFyzu9Y",
  "key27": "4YPfFYvg3w3HRu2MaZx9akfDVFNpDrjmcuHEEqYUD5Ld9LaaXTj5hdDyGWV65dSXn66a9x4oM94UBx7NmgtS3R2A",
  "key28": "2tJr4D4AMcf7RoiH9qVAXp416bAwummR2nBUQrcX177RtcPnraGPpePds339c2sAnWuxJWBY2ZxKpAJ7h8iZVKGc",
  "key29": "2Ag4fEbZ8nQMHtXx7pLRQgHY6GP1qXdiCcVPHb2dBji3bMAAKT5S9ANzgytjuvsmoUM2SnwZrJhTry8jVk6WfvES",
  "key30": "3y2SfqZk95s6qsEJSE4UyEETBqdXg5tQzVLew8R4yMmdoFYvxPPwRGpE3ZJN1bXTR8LeYTAvYzzWK1LsyBEMUHHA",
  "key31": "53LkWt9ioFTi879s3uzuHYntABF2tthKEDetF1AMKiifX1e87SWnpCBiqyWDfRW7Dfqhqx94MKpd8JLHN3SubK5y",
  "key32": "2HyqhpwxGPYs86qSBnkYR7veVkyBB647oc81KLjkisWVZxj6rAPbKZmRrXp3BFdMfRT8N6PmyUrfziSxDhQ1TDkS",
  "key33": "4W4A2EQrSPmcMEFJZ3tpe2zv4qqLcqHqkK2Wgqr9gHpKYLuMWgkirEicC7wEF3wEJyrAawAtUf51oa7ZFqzGeDfD",
  "key34": "47S299FDw1T5kHHrnTELgrecD3AmZDF1XaWrUgpEM3yzWaupg4WvJ5oNyq2GKZ6j6QepV92mi3Am4Rup74kqbRpX",
  "key35": "642inD4RVeSFWTPSpyypzcXxhx7mv6L5rrCD5N1MpGhuL9q41w3zTkS7ANmhjApdzZrWUo3he8pERHRyhhcmCdHD",
  "key36": "5DkFt3YA5F8iWbpzNEnRc7nGKkQNHZoiVxGHUXdSSu2x2rCSgT7sd3CTHDw8Ci9S2ToR1RgG7fAyz96G7Sb2FUWT",
  "key37": "wqzx2dhyT98kDmdAGqs8nmiwu9nhH1CMPHiKojmdwXduWmVmogbRTrVLPqoXWyXoNaGASATevCyZHPnuVCh1xzz"
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
