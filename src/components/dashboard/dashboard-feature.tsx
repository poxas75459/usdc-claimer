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
    "3vqVBgP3YY4pm6b8m7ZakfXTde6f1sp8VpGUgbXy5dkcQqyVhh9pA6ZW97AdJUZarALkmqgFADVsVyi8oGtQ6qie"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o8cQbEENESRUVEBwoYxneY1e36yQPqtTXZ1wNVrpTCYxvgx3QZakaRejoxJS9RmqJdFTdcvFFrJ71nfKs11wHib",
  "key1": "4BBsgntrU45QNtpXqv6KzU59vmkJAixJoADcyvcnBCqJrSeqbB2d8AHcfdpuSG2qjWtFHTidwKFb75Ymjv11UsKX",
  "key2": "35f52zxkCHAtahGt67kdHv8scyA3HXBr6cupTsGieuYhmJ7fUo59mPAS5XBKCtGzrqkGivkQ78MFQ4b8vimUcqhc",
  "key3": "K7s8epUYqatpJX5xsLUcAAMSBgxXxUpt3PevWAwagd8DSQh59WqVzUBa53tQBWPfyFYYBMA73A1WuojQ8fmi3Kf",
  "key4": "43L7BDQE9qQkVTdAMWeKT4Fjt7YjRoTgNLmLCFnDrgxhcbELdVxHP8ebYKCrw4vT73ADZRnJo1DWWDXcJHdzR4Fx",
  "key5": "2UHqPaBCMADszu1mHJXKYr5vHKm7iF88JK1eJzKv4cxRB5BdcsPZZNvPYg3CsqzdLwHDkEVQLdD5CqRwNi2nt5wr",
  "key6": "3esi4sAvbN8xLQzDESivH1CjrMjEcStp3GygGxv8qovXmiwtQSBtgUjRybons1oiCiGCryCjLDMLNbLqeiQWr3PS",
  "key7": "iKdn7sEex9RpPYZFguz3dS68rqDTVPAsitZ7rna7Pk5FSMBqU2fmn1SsbYBVNyvJdYUf9PfFXAMT9Bmy8bn84xL",
  "key8": "4CvNQZhULa4RnQaUGAdG4GepDc4XrfLEss1kYX2qwy1WhQXbUJegsTYif6y6QxkUnftfj7f4dKX7Ttia9ogEeMM6",
  "key9": "5vBxeSQoGsTX5mfJ1aVfzynJ9DjhP7ogmydpPSTJJN9scz62h6TNa5YRgcfX2TeGUrovDRKUn56v6EhN5Dz4mP4Q",
  "key10": "4sPkmWJH55mkrvjj8ZcC8zrTrmtMwDKgVUsHdksXyLdyNZ72sqQnBdQNB99FvXnwJzNjgypBYamCKTEUncHf4Td7",
  "key11": "81cpVL39PfCrTGa6iKnAHRPvioy7R376Zj3GD7SgrGwqLg7fsuAUGGeRsFi5aQgeaWKgwRB3Gt9XcvuchwgKcJ4",
  "key12": "2D5c5Qzgu8gjWPRKUUhcoMFqmmk2hDA5s1ipFJ63e8TfRbKP7ty8Q4t2YsUbXiBbM18enML1WHGHmXdtqz9kPFsn",
  "key13": "5xCuPdb5fcUbVSfDwSzyY3rnD9dxgoRbmpprhFxYmdeJiG2SE54ejKqZtQUcJQcor5mgWvjGd1VgX6YitfgFQdeP",
  "key14": "4szrhZ8zVu4LDGNEJhvRvPdY3YWiwpSapp4hajwYUXBhtyHkHZdv8xhNqTbZnSv9v975bfFyr7Em9FDatYUKtYkX",
  "key15": "2HeViEUBvj8j5y1ydsqsn7YFpDC6TQswbGc3tcxWFrh8eTFteTiddc5VTzoGgRngmGd9qkwoQ7tLE4haBdTcfsAz",
  "key16": "3br5atmtLpUZBM2p2HAZH9Uu65chow9tGdMhHS3wjXJ4TA3q4JJXJSV1iBVE6omCxdUDCWjtUVDEtNDPGk5BQsZR",
  "key17": "3SY1ogRFtGW4dqy1Udr8SdnR3ogwBGQ638rSdNfeNgmgrm62Nyny5kNAPn2aQzmkebWq83WRX4BQZyMutHyQVXda",
  "key18": "5hrxbrgCU5PnC72FKfKezdtUuMd1hyHdSCj1w6esUc4NYhkmcPtRTSgathE4D5QZ5DMtF39iHxkWZiuCLoqvUEKT",
  "key19": "4w3JLZmKsEj6hj1GjRSkMQ852gL5DckRecfzb9nitxRjXYF93XQeTpwA8PJWWnzoq3sNbHkMdk3QBNoW9uYEvp9B",
  "key20": "4hGyMN9WJvAWFq3wafFDCK8KBta61YrFS8f3cRuh8c1fzrL6yQ7gSYJx4KkvBGTU3o2MXmh9tpVP1YxZb1MYcdy5",
  "key21": "3Afqf8h3ud6PwYXTe8iHagHKaMmtimj7251hZ96EBGSKKcLtPiokhRA81WsES82NLp9NkM7nfzJWxshT9u6S3NXG",
  "key22": "5zkrQ8FKYg9cgZewsxXDc3ojdRb2TT8TjDzqaWccqZ4Taoj46H3QCyHT9z8kUHGKKzeqNYzvKvzpMdkttAUvijLf",
  "key23": "4TQAH4jaeyLho8ghF7sggjbWKV1kCCL8nWsdZxoMJTZJyen17h5mWTc1fe7gLsA1rxTKtmxo8mNDrEfkkNk9iqJ6",
  "key24": "57HnsRVh7D3CUQ9g14xTqPMZc9muGD4M48GP1Sh8jS1TzE8kjg72As1uuKT4vkQa5HFhPNaCfoqtKPaSq1jCqDtB",
  "key25": "5oUkiTDELmNsjswqZnvKgMFM7RddPo8X8pEevc3x1ZRkW8KDjjsAzvw65e5oENt4LQg5UTnYiKR949mEGsuVSpmv",
  "key26": "5u4HLpqLHCofrG5fXKcx5WFiU9ZZcAWMtxMFKBPguewrR8J1M8ZvxupUNpAGTjrYAzsTuM3L1a9Ao3evV92zyjAN",
  "key27": "5Rnhrz1Vz3GRav3QqqbnH31aCpoSktP7wGkdoZZkg9j2pufV4gHySJjbkjgX932EtXDnZHVvjWYR3RsvhEVHR7YD",
  "key28": "5uZRnvjq9Z4QSz9V2aqBt7tunjd9TbVHmigyxgqtiC2BQbu4xaapeYebUYabHNVtsxgYysnS7PUaHz4t8whqQVMk",
  "key29": "AmuAbon4XRsGhrtS1gettXtonACe5kQ9pSzyV3xnJA8pV2fL95RHXmG1nTzAzeiDgZB4jj213CyUYKZ3CFGBfDx",
  "key30": "NeYfMnxGjELv1g41PM3cpUDhpqTDSsrB1QrDRqrGmUNkZBkKdpEJRdMPiBvZ8oX8tRyoe1pt616QRzptZZxANwg",
  "key31": "pu6axdyewt9o565Ya4WPLtyG6cTH3tZqjku4VCHHmtagdrzJeWGqxC7DYaZxftEQx48EZGpVMVJgNUdjGLrFHSP",
  "key32": "aCbJAEuHofQTiK7owMXmDniJSjC66s3AfxAuzu2kqzEUDwmZsKqomi8mfySHXaBRd91exhJvYPGuBLm7mZyUpbG",
  "key33": "5EBGCariExiWikePbso4EbnmHVR4BYbpR4gi3qwaZ5eWeYUhqZpu7c7A6UaWEHmmXtFxsBVEpGRULm5CAasEiHEm",
  "key34": "3SxzD6mhXvNjfnsxJmb2McV7NMJTFbrHcc97HHx919okAcRzmMMYd6s9QDMiFaKRjCFLFPmNypVdL9hNeFsfM7oG",
  "key35": "G7uW8nVpWVaCu4eqnexHwiJj9VJyaY8xorZSzXjdiS1A2BLU9yzZEciJWrfqDFWsLtQk9a4cCRK9WfeTAqqV3Zh",
  "key36": "34zhy191RRZ1JKcnV94prAeXCBWpsxVp5ggkphFcjUtUS1GTWNJU5YeXibjxmCEXxTQSb2mA7mie998uHRHUik2Y",
  "key37": "4T12BgFMGsPKteJa2coBDcGNUQXfLBiV3BdpKCbrmhTi3ErVrL5ruKiAhdEo5GmVKKHikpD6pmqcVNQsqBWXzZc4",
  "key38": "2xtHJmjms2oASnTKR2DURLaEH3iFqn5bopbQNPqRtjHBqHVUnNNw5zvdpX3BTeMLG8foPtRLLf7CEsasvkA9tN6y",
  "key39": "VcSGFr2Vw8MxakcMwXdrRFPXL2T8PvsTX4vr4mKmrXhgYmM3c5rSUBZQFnRQooNj7ZzZidCeJVJwfAPuYvFuais",
  "key40": "2QFWx4jvBrEaXqGKWeL9VhPwDBXW9ZfodWdoLBQuJrMUd1ZP6exssKUbBFQCcnvhpCD862QnRup941jHUaHs5iP4",
  "key41": "4AYhuoBggWA4BnzJMM9Bgkav4SLUme8FEcLjCyMx6J5pDxLdszMbBKxM2oifNFRsYFtXNBrnym9PJ8z49ZEKZz9t",
  "key42": "57uxx7oXB5nU17X9QUPrapPmM57ZFEs4HHNCBVz8gHxK8GiSeJZ1PzvGPCBu6DwxG6Uqet8ro8wn6KoYPXVc3G3p",
  "key43": "3wM6dEBvKqzFDt6zp92tWwNzxGUsQg1kiq9DuABkLAWcxYzoMLciuEt5aJEQx2F2erNCd3AtrxHR2WsxUxakm13r",
  "key44": "3gKQ4LbuQcGGqBSfg9tAfwMM2ysQXbioPWQESQCjskmkRrskF7obw9fqznqB2jZnBNf5KBYuSApmeeKfSLontU6M",
  "key45": "2Txu3EtwJraUxV35wr2cv5EyQwgYsMNG3C91RMcBrN7rz2nKsrkSG4qwVc9nvwWYsSucUkA4J9YkiHfmV1r8Edsr",
  "key46": "7ZRGM9HyvdvQ2nVynQSLhFECf7XNTe77Ytt9H1uu8zFz7uqtN6kLPKzs8z7syvaQaAoCXgK9fYoTkkUrtpYUGWk",
  "key47": "4k3WtELUV86dxjhTXZfTpE65CSnVAmvPp4t8f3xcwyEYVyduTgn5ZVCRUt72tnVv7yeVsrENtfnPxLmVjR6fnCLs",
  "key48": "4sLPDQzUsJpeAyqLP9UU6joFPzKVgWjZ5BYjiuxcxJ8BLE8i9mwxNsEFPGKTQxQaCCaKMTjpqBhjMaAtgcVDgyak",
  "key49": "bcBbZAdmrV86H8xS5MV5Lmh4PoJyQ3vwwXxzaakcNp4GPEP2M9x4oavUEtSbVHNLjzugmVsoFgMoVgkiinGzNLt"
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
