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
    "3TtPgCKXgGLY4vZ7PH7xZxQcejQKTCR8V4b6LMjEHpNJKBMDduGULd4ny34Hzhornut2MKkdjS7Yd6jrgX62icGi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rUvgScCQPZSqouZDrSG9nGeE699YiNnHaS4V3JMBgvypaUi6wq7WhYFrZg5m3iLJUCpHL8VMXQXPpg9YZkoLfzS",
  "key1": "qQSDm5qynFwjbXYeJLa2Necz9hKJoX35NMvzaPrtE5CVNLc7aJ12aHdX3SWLKzZoxkrLSH5qxDPm3rgFcvnboLE",
  "key2": "kkwb6jq8rBKYG9h7k8qxVangEXvmx7BYUEhdgyTBynQ231zp5zwF93xEP1aom8tupeFW3ydMtof6QK437uzDhfd",
  "key3": "2EWqSVsZKPABU7uFx5QfnKy35WBCmgCdVnnYWx2gmH8gspPrz8rki8LLGYo7ZRvM1UpNjPkrchnU3zKXB1rVGEbB",
  "key4": "2EswfBWeK8ySWiYPeVGVxuopa6nG3i1PsL6xKbFCHC3rRm5V5KUSRkJBQc9CVHSgUGYJs3TRR6kcSRoKjnxTBzHa",
  "key5": "4uAmxNzKxiKbQwoYY69XBXJkRzsVNHVoou2iKWthtpuKrBDXvRXSgBxvMxxroLhQa78QVDEv2tATtrNvb32DyvGb",
  "key6": "5Wrv7iaUs9shnvtP4A4czzk8AR97q5ZdY89fS3BocFxCJNQ1SrPsTxaPHGKQB6uKtveb1UyoJQ9He4rbpdrpPh6K",
  "key7": "4rjSH8mbpyNBBSGK4tQPYqjqjLdBbXBjjHWMe1Pr9zMEiMAE8EvEx954XLCbwP96LN9AhyqtzXKqn5tbFJWNGhgN",
  "key8": "5pHXLnJzNRQU6Bw4dC6bg5nySfXrAbSKY82DWouEUirkzf7rxawDGURXxeqfw3wd9VxFnzPzgpZeVhcLM21iYPUc",
  "key9": "u25AMnDBtE7NRrQNocZYKXQLzE4MwiWuvt3UvH2xvxZg1Eh6vFCVKX5dH8xQPaiWdjurbQ1dmxG3dFpPzbmWtue",
  "key10": "2NPp2B71ZK9j8gcErTH8ReFm7AcBPEEH1ixFg73uzm3NCCGCeMkaqkBYTpTfxkn6sWc9M6SfCCNx2kRqoLPm8SUT",
  "key11": "3HFod41Lyu5htb6XyCj3sa8onAw7vff5x75qPpo2DbYBZB2hCveR3xVsyctygobKNLP96F41Cu3L7MtjtvjcdLQt",
  "key12": "5dw5Xgg7FnNXY4KjKsntNSMt4kopX3dve78xH2t3EVh49daLf6esv6CuUddY7v6cxT9fKdYnJ2WvGociVyhNstTX",
  "key13": "2sZapmhT7W2a2YHrj4tVASyBCsoiUW8qmhNhEgTEahjGMjT4s6FtmozK5n3ZHEAszmea4XcrevAkLH2YBZpMk5B9",
  "key14": "5MNaxNybJ9awof5cVVovCa79SZ8xXJhypMG33Zca8AAvZHNihoS462x3ECy8MbSWeN8f1qnxaYgnjJ5rDzxXHxDJ",
  "key15": "5zNehjf7T4XXGE9wf2uj2YHqF7ynxd4Sr49aN75jvFcgTALUntrcnEkLmXEURKm2CTr6dQkaS48RCnVAC62csCBz",
  "key16": "22qGAB6a3g7tbpP4gBrF9SJy4rQv244XLEB1Shw1ZLEY78HHn3Ribs2uyC1mzRtMBKgXPq8VedrujwFdLBgbPQDS",
  "key17": "47duCTidkHmSCtCvjL9e3LiK6heGao1b24MqBshtr8gz2QH9xvsvitc68ZLNbFLHWfi3y3hRAdmUXGQXqUCwJBdj",
  "key18": "3V2hJtEBnxUyTz9bvBLWLw7sdbTKZmuynFSWY5U4S87HFiGuqrivZoVmC5nvevfyKFAyDRervqDRRdo6HnJ7eZEa",
  "key19": "44JVL4LGUsZm7Z9NfnQNWappYYySobPamk46K2G3mTX6gdvm4fc5NJ2gj3iPEcFENYHe8qaMnSiucvCR38Rrj7Ak",
  "key20": "2SzEt3qDjXSuK6KNj9D6gBfa4eAf7EAFtXTk8G2bGYUW2cNpGpu6fJWoH4XXKTdrec3Lagsczdz4sLkM1vGB5Cx7",
  "key21": "4k5ifd6T8HJgVeiAzA98BDg2Rj4Pt7PXf1aAXFx6vp7cWi5E64uRa8Ng2gzKDY4GopccoHKeUWST5kCpXHRyVjZJ",
  "key22": "n5sCpcq4b9brFZ665ATbuFMDiuW6JT5bUHWpY92wnHX2pqDMvPoBk7qmkTnaWeiGiXx3D7rPya2zF3yc2ekgTio",
  "key23": "4dpsiVCPy8cXfTCdRFn7cPaxwRkoGTZ2G37Zb7FcaRRT2t4oCXbRWGHMRLCpz71xUyHptk7VwRSVXGGaC67PBYt8",
  "key24": "5xVBmbgeq9pTDtACgngzXoMXzMC62StiUgj84momEJ5QfT8wLhViDXHD7XRqdW5HpFr85cQ8uZVzBstZ1b2nGW1n",
  "key25": "4ZnWUMk8K1r3pxSEZ4Succmz6ZKG7t3BYAkVw67LoWtRfrDUd5A5TipCKqWm5fkL8i2jkENsUK21XCk5L1tZQxeQ",
  "key26": "2FbFU84dFdnDvkye9G1Phjv4Nt5TpADFaByKz2XKQMKWGXE9P3NMwXuVBuwoakU7oPKVSFjfvrBu1HtN8dgr2QgF",
  "key27": "4ftJ1HFT8qHvwo3AxFHnwHcST75b2j8Hv827aDzgKKdqmsfxpYcKqApFD1pofK5rvUCER8MR7XwnYxryLu7wtNCD",
  "key28": "4evGAyjztWdoeLhvpsVq3gQQ2bdJskMAVt7oMiMFTfV76wK3Da9aNjfgpr9GRVsGFJUzgsAgESRByJTQk3QynPa5",
  "key29": "3Uk89vXC6vtag1mWosZuEo9GvKjc9bNJYoonPupBEh1ZHVt5ZPxWHxw3eJGJ8nNhykb8ueHRtAxZKhAfkvL9DcJ9",
  "key30": "2MP93SgWeuY4Gw9VKLVieP5d6ti5QfXfsrcbec6Ddz5N86yQPsxzZ9pXuCKi2opBh6P4gN3arbVSz76FCGa8YpDs",
  "key31": "gX4q8avmjvh4oN98quzxPCtTT7AUM1JXcwS3mAz3tpwQW5qzb6CY1dNg4XhgCJaLT8nRmZgQRj8yURY5XRnwntd",
  "key32": "3eTnpFEBUM22FXetz3fa69AALQkhAXh6jupdUrh817mfJcnavuPXT5DL6hsgLLmxCw39Bxovu2oYpTv6eG2T4qMN",
  "key33": "5op1HbK7WVGvtkSmVnc8RXkeZSqb1MZEncPebdtyVSiWNvEBgmgn2yJhtBHmk5M51VDVaLgGRv8tcEpJW7WjcWvr",
  "key34": "386QR1rYUW3no7EzeEKiPMPcrY4mj9imS7uTHZJ47Mw8ZS5fExCcw3Jm5M2eCxAkomRNNgQEhDnbPEmebQrgHNKL",
  "key35": "WgZbYtBDK42rv6dWVEmKSfto7sXeQYvaXWdhHoc76Ax9uRjCoMa1JLcLVUbbxsvMZG6RVE2RWAEkyBifKgKxeox",
  "key36": "d92iuRmRRtmhCYaov98iyQv46aKuA2NDCDFNN1REUboU9cP3RgjCyfwqfKrN2WiydZT9hjmSDRGhEgobnwwMZAf",
  "key37": "3BSM6nvJyakv8DQro7TUa7vvRCyUvc7ag1nTumgWN7LZv966GYMnELZasitiP4LUAmrVDM5ShyN7DZjSG5AwDSN9",
  "key38": "QiAJLAaks3Za3RjqnJBHc9niNHM5qFy2iLhxSW28UKvWssdg7fgsJxBNEJuU1tAFFFAcXnJt4fSMbNXmf6vxeGK",
  "key39": "474ZXzFW5JYXmAovYCW71FuGox8oTwyZ4pfVqU26Dj9dFP8bLtefGbYXBzk3BR3TWmkHEQygXk8n8HzhCW2yR93k",
  "key40": "c9kvGhxEwZeNfq9f8Dc2CmZ8i4vVeP9NficcpLSaiV4jyRGPQfaBTwApZBDVBPggKk2ZuxuFPKMqnuaG6MCNZd5",
  "key41": "42wHz24FpydGwa4xBCCeDDAUkR8ZaBekoEUZg8VLJihXPnB6rKhUDJTkyDxhak1MHFVkAcaxeg8JZXpYWqfmUyyA",
  "key42": "2zVWsjCxJ7DCzzMrB5wfVUx3RTjFwRJJPwfwZfKyF2sLdJXAg83UEVbUtLY9te9rJCmLzo15Zwf6iWQiUgLFTp2p",
  "key43": "4UkbWU6DhAK2SiM12bbVFipS6L375aP1gPhFw8aUuBN7TMX3bDUShaa4AeKnrH1uDazEAHoPG3ZN4tAJKyZwgpge",
  "key44": "2yavuEiFtkhsQ91RL7zciSn2e91ZJBCwNqtXHwfvHxhntUKXwPcq6UscXdN6rSB5dC4dieFF9QfQZc5h26b7XdWD"
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
