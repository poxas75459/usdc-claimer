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
    "5GGgHDgsafJu9KbpTiGarWTbmsFkrHe3mFCk2pHqzGr9Mp1jMzodjtZ8KpYbUX3TVnC1J7TG2Vc6cbjBwFpLuS5D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "531zkgf26aoyHL7h59Fuk32oDGJJydcCJMppAs9gfMnCX1dN1MycqzNLEa9TGt2j6d8BHYVGZ3cffwuZNwaXN7FP",
  "key1": "5hBuorbCUhfr49rrhvR4YK2C31i88s5zXKnHtjyiGapTjxogbKVvDjrszTpXp8F1isSHC2oJeMLGQ1f9b3Vu8oJE",
  "key2": "4XiWTPUhDHxyeyaxkVteept4PvsGNptUHyCch8js6DykdG6sCvZv4H6hompjXPQmqtpDanEKk8GZ757K7SweUHon",
  "key3": "2gwpGv7tpe5LEE1XP4CwBUGzMgyWBDVXPpa8ZjtXRJBRnDRqKPDxXRGrat6pDc89ZushpmPH7EWBv7uzVupkppm9",
  "key4": "5FDNLzk6cifq1Ng4VwFB1dQpD7hBGqW3AFYbxbZxPR7qn911h1uubRdzr1uXEf5izAq2aUGQyDKrN6hDV1oa8peN",
  "key5": "2zWke9rXeEsuBpWGWVwPp197CnPQnqLapMhePE9yzAQxeKwfE96ppciJPTSxYoZpWGhngSiXHcBVpTDcdmwYdD64",
  "key6": "3WxbHiUH6WUrj8qMiyGxubJbZvuHn278vhRT555GcCY2t9cw5s5aNKEZ5Lahpqv73VALfWHPE6SetXZWD7RT1fos",
  "key7": "3sDfsXZkAW4r2rCNsaK5Nw3eq3nkNfNLPWLqUUWTLhMRdGb5mQvmw7xM4MJ9qVMrRvcyCsUT5TRKin93f2hsZ7K5",
  "key8": "3cKAfoDsBbvuygaK5yZD8s9s3bpSUf3GAHrwfuFKfPEmC2nHLZsbRq5wJAx4Ts2veqBncFJB66xCrDy2TAJJbyWh",
  "key9": "3XD7rcqWru4WJnDpWoevXJexqpoCaQFEwHQYJG1PEm7JBGPakhmNrZDwSugpsyjR8DPz1ZhSg4EkQxtq8cSCPQoB",
  "key10": "T7XotjDviGccwrvVpxSwhiXmXf1CJucSV7g2vv4Yx7EExsyNG1hwx4rt4Ziofg5oZqUHVEds71FeHopd3Z4yuSQ",
  "key11": "5BaCZ7tivdmeGTCHiKDyp9gBWbcw82pVDoLwYJV9pooBJndWYyTmbWLuQyB6t471NN7Com3Y66mY8mZJGzw6JC8p",
  "key12": "32G4Ui5TzCW4ofhMgGjC7hWREsA1JyyfGhXn5UTe1tcbYfLV4gHiVHvDxfp9NTsmDiWu6NZZK1hHJMiSNfXnt4XD",
  "key13": "3jAqxhqoSJihMvkZhuoJJckhzXWyR9QAZ4k2JgY9Xf4z6bufQshXBSNG7Jk46FsVoELupQ84G83rkFb7FuS12hTZ",
  "key14": "63FWtwXNuDEHnNC2puNnjn6yTXMVGfM61Ab7UZQpsBxXDGyAmaE5yT6Z9GArWgWvb7Ysa5Yp2gEiCuJkvQTf2FuY",
  "key15": "2PXRqjkXTPB2DYSNcLqSwZtvwVxB99Hk4vzBHU4hpxv2j5zypJ721MdPaXRYstL8izcZt99aDAYKunnSezzsuiPZ",
  "key16": "4NzjTAjz8CatRczABCKx9VsKc35unG1L6bk9dVK2FjfBEYX4j3HvnNumJCtKA2yMMwSSJ4potDDAV9CyKe1kM2bL",
  "key17": "3yXPBvUyRKjyH8jDJVm3h1n8A1Y54muhq7k7Q1aFLoARwtrLJqUpa4DX4yci3cTVk8nvHQdUUzT6YNahaaE4t9FL",
  "key18": "5QB4XXwVaqBsXQhxZmtqtEcBiZ1DXU9ZLbdSdnfJbX1wNUZF7TL92i7qDc1sHKNg6mKwrxJfK9nLsAR6wY6rf7KK",
  "key19": "vC1xvdHsb6n86fJ5nAz1TPq7TpDa6W6Uv2WLnAjxqCzATcV4iUt89pC6JJZH9eV1oBT9t5GZSFPMaHUtUgCurvz",
  "key20": "4GnkDGgMUHcYV4PpYvPb5Ui2FcvrNXgmHC4xzvmvxHW3yq1b9ADcRpov5MnAF37mkdp4jr3Gcwj5y24WFJZ9Cdte",
  "key21": "45YZ7qmgmRiQLmFMWwxsXShXugsx554BekKyg9vbv4k9VcWWFbDnin1Jb6iwjKDvhGE8goV7PiPNutdoQ39tx5hR",
  "key22": "aMGrnbTZGFL2wGfAunZaDjYE649VTLmhpfsZupJRdTjNFg3Z6LZPpqBFhpvb6HjJNQPLmdSr7nKZsetEiVnyP99",
  "key23": "5YcSnyYTcYMPnay5LvunsAytSyT7TqLDK3okC3STT2NRTMxuXFnVnRkcMLcwETeASKNg51h6X8Ea4hPbvrdW1nVQ",
  "key24": "2XUdJXjeiLkMk99HtUJf7wCD2yEKTRjaWXCrnVeuxsW1c31kff66nmypSW2yjJhJMpVVyzziPpYgNVfx3BLsi1gN",
  "key25": "47Gf5h68d6gjBbr4b3MnQysdyREujPZfjSnMUUQ8cQtQUV9XzNCxUcNRMQn6n2yVfudT9nZeiAe3gtD8pGQWhgBY",
  "key26": "2Le7grfBUcqdgvnSHhYoo6xqX2hKK84azAbEtDwd3aCW7P8h7reuBjcwfq3jDo7DRXfQWZfUctydZeW88e6djFBP",
  "key27": "2PD1bX8JHKhge1M9FBmQDeir4ibVYecLNsHDa1SbYVrbJJj8ECcFMVXhnBm9hS7zZxwviMu6kbSudbNQxRzHyZpF",
  "key28": "2sZpqjzqw9rB5YobzFP8ZxyT49MYWaGb2EkhabbMemFFi21kNRTJCjWNnHu3sFQeG8BgHjuBqeTqNhBaGyyassbY",
  "key29": "2FyZt5na52WVn5fe5vW3VsiYi9qgp41EHeTCEkXdpL4unt2RdH4sZTT8MvmXsbcf7VwcbBCrK25RwWyqDt7dV9VW",
  "key30": "5zUaY6Xzd2cF2MVfF9bpz2YuhJho1uttZ418BAhdHQJMcqTCt6GZBcPPNRSxUcn5MsmnF5nvsDaQ1eTSPJoQLwos",
  "key31": "4MEmeuhLZzwzTSogC6j6boRyVK2euXG2SrzMWuSV8dV12PuZJdhDD7LKKmKVHjAmzfqDtoWAGUbqzMSxiiRd7shm",
  "key32": "3wd76GJhjidwVfW3jzGqfxr95RWgyR1r2dviquC7jdGzg5BfxYd6w3Tvzwe3k8Rfu9JjkGwdSG2taqtHcLgWZJ9L",
  "key33": "xTYpND8SQMmcFyjPoT38dJras3XNqD42XeSH9yXYcxyKGQvbVQxnmrQnLSvRGMx2xSnYdFfxHNKN35U2qk9USQC",
  "key34": "5MsxwfXMVYRMcM7du8BcBi35kFEM3FypBfvodHYp6CnAFVbjGTtWmQ3CQV78iD5183B6uR1c3bpy5DWhciXWk1Y",
  "key35": "2cwLeeLJH4iXi9dwsm3Y4siksiDkumAevNEmDQiSRuHmMdjUGz2izM5YeGDRntn8rbf4XH5vivLNkDwLrcC4LUhG",
  "key36": "5V5RFXZvTDEvsaEK3G3Xii7mFauXZuQHZg6UNMi3ka3k7A3utdxi9eauqxNKpECsnrcR7habx5iNPf5YUaV1mCZx",
  "key37": "4qYGX2Qyv9cfpPAmhNPaTTfyZFjhqQHBDmRiSmGFJ8cgB9mF1rfHeLF2X7xBeWJapp8zUKAcPPkoZfDzaYnkGuw",
  "key38": "7QaSW8E7DAYMV9TYcfeBRj86d3R58VHF8SW3W7SPsViHrEz9w6kuuQ4sh5K2EFAzh7knc7FrwZawAfsU6YqLkpy",
  "key39": "2n85oXdunL8madqqWEYJ3Epp1xh114Pj4KdL8dSd3uXoSCrMnB3FqUoQR9h5j7mtFkrcGyvuHYPH8RkDwsboPtqg"
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
