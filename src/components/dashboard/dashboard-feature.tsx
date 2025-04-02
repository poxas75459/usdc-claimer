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
    "31qhHZwwh1af2xP4pkAnSim7AAtiLUnA2i5PpAVoYvSwovUFBoM7MiwydaxXAfHzfvwEcKTc3x8Tg2SwWo2E5m5H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sP9cr8JDF345oz6Ab8h9M2FocBzDV8ejPGyy8iPBBoW2VvjpMPqAuczkgGQJMw3acb6BuEKM7C8E3UaYkR5KY2o",
  "key1": "4X4PFKyLHvrHbKeotT2RCnqadsnAFkViqM6TfbynmfsS2nRdhPpm1gF5eyFey7BRniuQvjbSHMSiqUknKVDzhtrD",
  "key2": "mvMpzVBWHFm9NrLibrdd72wHqxn1SBZxt8nFvJSjUMy7YjrW9QzkeKpcRzbP1s7zW72vMa4wWb6ssXsfFKgkioA",
  "key3": "35tQGVYjBdKZYT5Z8kpUp8YPiLJsoDbMkzJeX1YYoGrbgqYWUKZwnL2BP7m7j4U4v1UZmoezVrvh4qLgqAtGWUbR",
  "key4": "suKYsEqSQDDwMzxhRp517HxxhUiDiikY3KnV1JtgKahdEwLC972mjkJUz7sU4LHLm63XPauZ54oAGxPtEjZTj1j",
  "key5": "5CeudbWymoT51QyTynBx8nGEv7rhGv5pVSyFW53Xg7fKFV2oMmnCP3DeSprkiR16tvfot5AGF84o7UaJztf3XYby",
  "key6": "3dCmhVH4LUT2UgW7NKfJXYub22k9UQUXj47kzGUrU3MvtW64TJTq8iLyeFhCD23oSqhrhv4HrssmJxADzCqxYBrT",
  "key7": "5Xeq1tEbUmBUBNCyguXY4xKUeeMTg1vdfy6MahdAyauiFnC4pvGThxzHsxwwtieWRKSSNVwPAwQ1LaJouutnmjEJ",
  "key8": "2wDLQPicq617jgJ7X1EPJCMmGh7HNGHzTPE2Yjtan889NF4ZsctNuJoSCZas7EQRPBXmwGapRCarNHLYSazQUPaa",
  "key9": "4kjthdCdgKifJoE9r6Upyq7FFMnKFCH4NrQVtKA3vxRe54yN3LEH2sGVdGNnMme6ya8VsdnJgvrhWMawTeE8vAUE",
  "key10": "3aPfq3C3obg7mioxB8WZdbnYca6tDbnCcQzpPNb4krUHYn7vtetx9ZiBe4VyocgDN2JqfYHGB8YuA886HzJNobu5",
  "key11": "5vbuLMhyHTvsjeJ93x794SVtv5WqiYvfFNU9sJgzZV7RVKbYpP6eqZhUNra3Pp3YakpXD3d3ZFd5RA8mTja26wTc",
  "key12": "uBP5ULJUb8zsgmor1At4jPoJHLd9EStxDuvJzjLHLzQsUnvD5tgQuWUPPMzeZ51w799VvqdB36Sh9VYStLL8kxf",
  "key13": "33NPXoW5VYeRHM9CPhPsM2rmK1UXoCf3hwDV3R9bBFs6uP6uNMRoYDBqk7ngFjCWM51psqX56cnwRuJRtJxuneDf",
  "key14": "61hKC1FK8ErN8ScBxYSyQqFMW1UQhy2XEiFYHWPwDsSEBDJF7KFRPe7kmgCAJjjqtSZW2MkMEBdsXEEvE592mrBq",
  "key15": "4oVmPZGPgE48jguiAycQWz9d9ibD5e7JmJ8XSax5FpaqvrzDhEMsyozjZaX72wUBDQtB5xNftXTJGi4ibeq6DN9n",
  "key16": "5B7mMj28c39FXD7ModJRLCcRVmLAda7m8tAC8xmrgsnpbKTqjbScuv4sUubXv1qDcb28M2JXnPG1WphdYt4gWi6K",
  "key17": "3do1bW3ZmYqwBM58w4oFAyyJiXR5G43uwt9UmefU1y64ktGcKWsJPu6VVLVLxK6oLrQLnqFrSTN9gug77AcYPwSb",
  "key18": "4rTdERtRMJcqo53weP9ADdYj6Fd5bwyygoNBmSweXvTeEutAvS8SiyuSgdLQujU2ouvVgSDAVdhQ18bzLLYrxZx8",
  "key19": "6vQv7Vi9M9ZVuDLARNMgmunwV2ze6W94Q25x46oR6mQqkYx8zbNtVizJkaJPxNY6PrDZ8U64m5vscMvxK5u9Gyf",
  "key20": "QXFjZnKxe5mJ2c66PJsZoJ9XXnGHiHXTa3NEVgedWzLvKWT3ZXDvuhC4EcGLJQoyo9qQ7fd4MaJUfiEP9L6ZJe5",
  "key21": "2oo9xfkLqym3LcXyF2cQz2YoASdeHaXcqwxFudWPZNXCnZf5YWjKKvDcxDXiopKx83AaW8zTFvJn6b4WpGqhEapQ",
  "key22": "44KXjMMgSbYgisMdjWzfqa2VZU8zqz2D9LKYgEQTy9WuvcGqqiSiwBreoeNQ35hEZfF7fLijbbEGXs8uymrirVas",
  "key23": "5rx9S122r646zRK3zuqovPU8gmKQXwrFv6PgxMAypFG6fpvdqvmCHUoHbGBXrcDXrU2Afxwi4csYbKUk96zsonkr",
  "key24": "gdmvc6dmpoYhTiZymfN4PfLXRKsF9kuWoUDkZ8te8QbBCqFVdtGZDM77r1RkxBx2MFiw84APfp94EZFhcGSVjgy",
  "key25": "2Ffmuhr6EgKGKqTPNryCDE61ZMb6XJkVB1YKeuZRTrbaJjPxQyi4iUqGUiLCbkFgeCE55W2W7odPFoKDb2qt3jwm",
  "key26": "4dPkbm7CH4f5UPfcPVmjLUj3D3NBpq9gnHQpTDVFB5KzpWQ6ANBNes1eDWk9rGeNwgHpZFBYn7rBtsaZm3w5WroN",
  "key27": "53nynF8QF3CgEzKfzXWEBSqWRski5CLkyuPUDiao9p5JpzwCNdSXfMczWFGVDFa1A6788Fb3z9pypjh63cXwdSYc",
  "key28": "3ku8kQHxa4USZ6tiLtjdPwxtyZ8Yf6gtK8ByLWZ6FWepXxFtdEUBUW3a4ipRJeq758GqKnBzTL7abP3ctZVfM2EN",
  "key29": "efTTkzGLeFBeT6pL44JkB71GwxbTcg4jajAFmLTBfH4QFxHNyx2buGA2PybkceHbarQec8SjhfT2eEsRuFfvuAm",
  "key30": "VXr5KYeofyAVPusvHpCrCT1wGT2anygJKj55daCwa1jinDf2Mss5QAqVqkSc793pcAy4JGGafS96NfvacbkFYYk",
  "key31": "3RvxTJMojkww3ig7ZabybnSWd9m3P8fF6qNPk58ZRLYz2rNJe3YgMbhnagHmJFGbT6qT8VBCwkEoudopAfEm7c6N",
  "key32": "mSQVknQRwzpLBa4miDY6dQiR2JXb7xXbjXWHGYPJnpsQg44mRW5NehxdFkKVtjGBQFw2v71K8UnG2LWYg7tETMP",
  "key33": "29JPCqTdf64CWce2zdvXye46jg8D8QRSviBj3FDjz3XkLDcVNRLLLoY8jPmgkDBj1JUrTsnAF228LFQz464FnFZT"
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
