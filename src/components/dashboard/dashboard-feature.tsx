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
    "5w7XF6akLtprpeSrJgdgt3RE75MBe5dTEKkZVw4FG493gWcxmGz49VGxgDMDS7d6AShdvuAim3uGRpftzj1FNTDo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zSMcboocyoQPxzFqqx5pqsSoGMQb2R9zmAhzXVjAw2oFPLe8cbpfVFbpoETpTqs2imnJ8xxNYeCub2ouDpsFMqN",
  "key1": "3QUGCKs1dR5MPYQJzsBWhP7fq42Vmi95tQUeLeh35o3JWjHhBCGYbbgwaiyPy5RgFe4puYe3W1bjxcXURLj3uF8D",
  "key2": "4mKFRVNWNeepf11nKPt3GoAbqkg3UTmMx1d9C4qx5ogf5QkR1JhTb4gcpVTSxgTCcaYkjfKdg1bPr8wu15Nv815L",
  "key3": "v2M8e3hypJ8h5H9mSxzaNDhaQK525yKSo16HCZLGjECTwPtbrQZ1oMjNBPE95KzsWdJRQU9qFfCURk8GDUnXZyM",
  "key4": "4aYg3evwp6d4hCcy7a6niMyxxJPavQ8MRSzJzHEYqUXrqMn4w1qYNy9zGQcPcjTbyg9N55twR2zjpWabw6CgreBr",
  "key5": "2NvQxwBthvdNsB7TxyHaeFXwh72m2NYY6mrjuzGNXZrAEBjKNrHobcmu97JGNda5VaEhHTXDughzmDCyEbR9TTWH",
  "key6": "2gxEHQr1rYB7ySbixxNvKELxxHi2s315mNN49LG1Qfu9EJsTsXjHcH9CVH8swxTPPVo5ovCvC2vh1q1nxZiLwZ1f",
  "key7": "HzVit1GJTEcDFtevZeCGLzsPbH7s9BdVvH3nguTtxxDHdPy4F3e47FFTNNHo9Pi4kZEUcsrDLBcHbvVapX6oNja",
  "key8": "2WqBb64vtqQ7FKz3zmu7pStdnhq2rqFwPw41difeE7jb3uqh6jhHALwRPKjqDuATkxHZxMriRkSandYWmMENcHmF",
  "key9": "5urfkGPWTBCfPxusf9r6PuBcCvkDdQgFpWjqmamv9cLSFhJFVv1DYr72FLozSkEWqsV36AtAvdK3S1NVVZgfHqBm",
  "key10": "2MXFHZAy6r5tMHvoq9hTNsXUCq82ACbzWScCTidKoBXVAeznFddWhukJ4zYLEuzZfqmiSZKjduNpgHcFzjV1mN8G",
  "key11": "4RE5HSoQcs5uRGbQJzD1BuqjLH41xZRAQ787Y9zY2RGPipRVVUFwexyjiM146h83TwSvmZmxXfHt2BjWCQSazPYo",
  "key12": "27YXUV1Cw9pC59Kx3b2dZSShpaKRjhPMdoFPJbouqrQ5inQkiWgX66y4SLpH3vSQ2KcuVvs9ddKT1YBDqg4qjb6c",
  "key13": "CrmciGCc6tdnTxqXAkY2xfsxyCHNunNRgSJphUjQCLwJvFDXxpzvEtRf1kEHWxZdRbVS3a1hdMahfqofJrL32BF",
  "key14": "4PU1yM9mW7q5KU8uhMZXxfKfqoE8iZf2f6Akv35NVpPa6dUK2jvAYGdeh3V8LrdvcvK7Sb3xCUxv5xedBxzkHw32",
  "key15": "3dzU6Bf1vSXXTMP3pQpfbfMqETxpD1A1orPEtZ1PVLyrE7Yuf2sia39VL69BD6bGYYSfuV6Pz9JJN4xZs1FzZjr7",
  "key16": "3Mu8jvNHTHDzoR3XRbVap5p83ruWPesmagEdfFaB7EKUQDN162sjVQhP6rK3197k9eeeALbGSyfxbCW2M9QBE1Ue",
  "key17": "7gnDBT2nHrQ8PbP1y3voraNgLiBBhaGnVhpUaGmSzHutyZRv5E83bTtb5sTho7v4hqss9EwrjE1uPbEhs8nAUFd",
  "key18": "2ZEV2gTbRDABUFT5whJL659qvDLGRUR4uQjix4EjYNMCWaKzaUQgVCMtBa41VXE2ckb81vPAHTD8L6MVcttqxCJQ",
  "key19": "3aVcFZs3gU9FADwNK2jK4DvTW2utvC5jNDhdrM7chNAwxyEUVWBZaWA154wh3QjnakiKNHMNMfysydWmmekkQb5n",
  "key20": "LJDGuLBFHKkm1F3bTQPcx1SsmpDukhLdxeBw99DkJ8mYMAyaVDhxdgbaBPiLMi53HrJ91a3t6qkBhd4uKgmjrSJ",
  "key21": "3YS791qLdJB5YhCNQPadFhtna9ySL6FioLbrZkh7wBhzgfWjnnw1jfv7UBFSdnucKkp2nYp76wZytAvjMygBaaXf",
  "key22": "2GCv7Pg3YAtm3YqU3zYq2jnMutqFe5HAEAHG6sdpWfaaw5qgxnTe5pSjjjX3m2umW3EvxmVjhUXLonWQX9PKhgcH",
  "key23": "4WWk223iNpf3E9M9HyrER7rTSdGuJhpYM5KR2uAbKcKE8B8weF87GMxfUhUMa2rg45vJKabwpsXvMSwEMEccgovA",
  "key24": "5mA2KmGWWokWn3uVBr3g8hCybtYBxKBCcPbC3Jnr3Aaxeq4JKyYCtSb7SiQhV9RoVsTu6YoHnzFGqyBoRyYwVi2E",
  "key25": "67Mrp1gCBsDvEaVgqpVkfpRjWvUYFHMg6LdYP7f2Q1QaD6PozJYJ159fJvMghUKm9hs7JsLAM5MgGMksyAdjaihQ",
  "key26": "2TUNyH9cGVMQrgULsKyogyzMZ8YY9hyE23TX2RTQN6J4eyEJQTGo58VVxe2LciKepT5gkwpYdrqAJAXmrxqHMLt7",
  "key27": "2hR9RXoZDrCgdosVYrJqNCDQUEuzpr4SKtqgC2rSFE7hPMZrefe6esRhdYSDt3cGGK8mRSto4ByNbr5gbYteH5a3",
  "key28": "4AUU1E7gsqvxmn21QybJMnoY1D9nK9aVohGtb9NykRfipbPafQivY143MCq379DTRL1B9H6eoZaJMuosEjEhZ1K3",
  "key29": "4nCt636QCbo1Waex16LWxLKhnCF6Nces3MYU28mWZgvRdCwC2mbCGTUmeWKtYmvUhq16HZV56fPGd1retzXucUQa",
  "key30": "rvfnUxBDfe3eWLhYaUbNhmMEL55K9yf6RGCr57MvPKPiiZhbV115dzsmJKFtF3vDLNbegFWwG7yqawtXHqNptiX",
  "key31": "5ykbgyESnXfMqSh5zNLyQnWh4WhrqKnicQxm48gD7byfgGDho8D5t34sz7WuD3fDZovigdmjdLsY4YaoMusRDXmk",
  "key32": "2PCRRLHYUpQMKaz2Y6zQRZKzn5hw4TP5YEgeK47KPjhwiGRqPzHDnBLxK2Qr99Ca4T41EZsX8YwbqgMupc3ne6zW",
  "key33": "4eiATSTWgXcX7S7t3pVLM4THE1WGyPNDE9wm4dMU4d9gJnSH6pD1CpH5YCX5jpKw72AznXT4nnxenDdWQFKD72zi",
  "key34": "2RfhbMTVH9qBtaPiNP2n1nWhM26dCq5e5KXom2QYN77jEjNb7XLWGCx5hgFFPgEzqG73eBkc9uaPEZjddUKPiwYG",
  "key35": "4AHVGgnE95BaUNGATpf5CTNr7u12uGuJ66ktDuy25BKQ6SK5mYYpno8AGWcR2PGc1mSgAiU1tCLecSKPEeMRKS7d",
  "key36": "5FRXzPKeCnRg92fb3A2q3adVok2MRCsqjT2qUDXAUC9wp5fHrNLyHQELqLHFPkm8Qh1KDyPnNkwhwGFdnoti2PqJ",
  "key37": "2JLWBCYfCBpxNYKx7f36cShrmvfFEgomoyVUaJwTpN6sGr2MgKTBDD89E6LPoizGAj5RXkymrPbfYFrdHJGJv7CQ",
  "key38": "48tTWdZGD5AJ2b7ANA6Nf65xjYjsWaDB1MYXJoo3kiJDsAHkbaeCExHnJh1pLdJJpaxSzFfhzSUjXumx5mxQmDbt",
  "key39": "5cjrkAs6g69eXJCTEam3dca1DY69nYFWjard8htacJydGC9Bb4GJjWoqm24pCDFFmxEJ4vvYqgs48vJxWjaMF4TC",
  "key40": "2DUNUfjAiFD6L3pdHfy9HmJKuHsMEMkCmAKbHp7fUq6aPaYc8BqjSjMgkcXAaBTXcdRYtkA386sL4MBCioguFAUT",
  "key41": "3PeWypYGpxDaHngsNqcQSEJr1bYXYpRhjS6HJfhVXnhcdFMe36234s9hbuczKqBvTYeR3cw1qjEujXXfgWagkgye",
  "key42": "4ASkLcXtJVA8RxY5qqiRYX25vgXSUyadhd5pF2WakSnQedXaJ7FpH35F1o61qZcykCWoLeM9sNSzYWstD2SwVNLv",
  "key43": "5vaSzwQ4StwxTvrXxNbSkzCV4thr2N2X6BUTQpZdF2ZsvJYhRcdhBNaQPNWpGRphbP77CWVb7fwuqag4sP76B4Ln",
  "key44": "3Eery81xmXKLojD8GhAKCARtJsfysoYaAKFYqHbZWNiLPA55d34giczBWEoZaph2abVLrQirdLy1D8wwexmyMoWB",
  "key45": "48U8WmzHbHTeTPmSKL8afRsSJ4sUDdNTQJTM1w8yx7mStNEX8tzGn5xTo4ZXi7Q9pg7eFjFTUFKwZpsJU9rS6jco",
  "key46": "FEk4ag7zYVTGJjRJLQ79mPqBHAZRkkft9wA4zbj15ysQr1vapUsEAkXYz6MEMBAduB6g7fYF3NPg68FjwaZua3F"
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
