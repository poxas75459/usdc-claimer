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
    "4cpmiAKBKia9974hZQmgps9AT1xp3Bt2qESexQT3pvVMyGE1zFu17r9Eyc92xmWSELZn3pSg25RULbGAaoVf7xeE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VStYAD5WpYXDgRdBRqQGTu9u4YGbpntwiGimcVQzdHEr25VT2mMmHoLbvUtr8jjhr7Ehj2tsmgApLPA7w9kSFh1",
  "key1": "5ppkTSgzvkvVzwYDcquu651X1WtaqzNx5cDBE477s9NPG3DHi5gETTZQ4av2R1JzXKtN3S7ucoS8yXXXM8P3zwDT",
  "key2": "358ojyip9uDXPnXEScYZbWrS6HocsKbsNCHDv7B33FUGiYbAPDzmbbtWFpvWoGVz9r8cdq2M51aGfcAbLUyBhfS5",
  "key3": "3u19138HbayDCwiPLfKrKowij1WjHrz5RNU53DFoKNgeiwCVFb53hMsHoyS5sh1wAsD6cMtUF8f1WCTcFBAPvxcm",
  "key4": "5EExS3MkdKqakELvYtQGngvew2GZevxRcjrak76K5XHG9c7aexqgeFAMPPaHQH2czniFzSkna8UUmTkNMZkRiH2E",
  "key5": "3aAZwP9Wmwo6yfo3s37cvxW2e4pbzgydkzZUsqEjSSovLVVyqz5qrFeBNjmTR2x2bqd6eCgDsWxpYUhhgnG2Ciso",
  "key6": "24im9bU7aRBcjVJcdRxtFGFes6X6bwPWpaFrjbj219KzShbhXZcbkqwHzYvxNm6TeQ2Ez2zXZdWKqy4fhqM1uLWK",
  "key7": "2M68X7KTPWhCguNe6srjxwgrWkA8QtzLxMX2iChLYNuCF2Pg9PwyosaoiYkDbdU6rYvhHUcChtu6xwxxbbnRjmAw",
  "key8": "2ja5X7fEcNNcFFhCFmm2cqq19FZif64ca1BaLvDrqW7MeFjB2NcMXyVATXLP1NJiTXUjdrSjmyjMwwu82XgVY1MX",
  "key9": "2pwkMhF5EaUxGcXac35fGzk7GFTw1bDmFTJhFPCJPg5UY7cAG6EYp5JcFDaoN2DTMgdsVzEYTWYAReWtStFDgmMV",
  "key10": "1gxPbRf8QbtsF5qBCr8Kdgi168uXyEMjb1s1TPaLBtmBXgeApTGzhKTNAeKxNhewGPbGjpNbF9BJHsZymj3H7xD",
  "key11": "2DLZxitYh6wck62yepf1omF7PV8Ra5zQhpFmegjviNy233HVo7NnNwgh47d6wTX53M88w1TT3xTEMTED7rxu7dKz",
  "key12": "1hGjGVk6Kvq6kAaY71JHEAW5KfnJViagZNwvWFswoHq5VuTkwqfpxePpgZBqnkr8ygGnAcqXKefLkgjfmJaX2UG",
  "key13": "2j4HPqFAGARp84snKESV8cn6B5nYXAjn8s4NHXaaiFrXMfDFahnQTgvtJgzaQM7eUfgj24EcLrZVAuHMkTztK8K9",
  "key14": "5vhqSVka8DQ3shZLBP4cyrAVJ6BwbNVYaCPEHEzCMcvd4it7HnSPDg5dVyuyC4QpbaFxzV2uEAeaQ4LqChu2HVQP",
  "key15": "1wnepZDqoQcpB5reX1RVejz3tYpw3LK7zDQ8LncBr2XHQQYz2YdESFUUAKyXNxWxqDtesXyimc3SZHKpdL6NXvz",
  "key16": "24ZuoDLZLnqaejWXnrsCbyVYW4f8TANREjc8GC54Lhji4ER2ss5XEBKbsYmQacTrjy8c4eryRT8eacRnLTM3tLkN",
  "key17": "5Sty2kQXt4afbKESHff15rsfmvyJkfrgVL3GQiwFbDR6VMyouP5isB79qShtEy5ZZnwF52jc5jvNrFm32YtaEcDn",
  "key18": "25T6rb3huPWtSopBJhB5QFdm2yVyVhjZpcRRct3Ukv6b1oYB8XBmiM9Fy3E4zhCSJNgLV8KLXVZCv9VHZSn672Dv",
  "key19": "9dqjXKBQH8LkEYbdoeHzJtAjLEBcaXZ33mBvwXDC69FvcPquydhu5HPmVJHXVGRCLNwXX8zN93uANfBjBE5otLV",
  "key20": "RkNBzvAT5M9yN8iWcmEqK7iw4EYrkXG6M4WBPftjjz38JQ9o3sUsztGcvdmu4aSQNDsUZzMopGbaeKugyPN1Whw",
  "key21": "p6BbW73Y3uVVs4hBg35SrtebMGvpSn4TrPuoakrFejyxmf1ZM5iFYufaH29Ax4pyNSejHBadBSxRn6hmc7c42ZT",
  "key22": "5TKhBxREUghGwK3BVxZ3mFLK9VYfHnGCzziin7JsHBQZhYcQLWPcueqtJ1pMhS8EsL7P67JbeNcKPnz7km3xJ4CR",
  "key23": "tu3RYjEDrTrLhUxwFmshiEbi7RMKfqAspFxG35uRdHxjKbme83aBM35TM5BiqKvTWHsgvyABRHe5w4oEms5RonT",
  "key24": "63h482r66zq3S1P7TUzD31NERqExFsofsTuLiFpxjyLCWKupXgVBvyVKTju92eCU8E7vH1UBDbCwUvwb67yP4SH6",
  "key25": "Mr9vGysbamP4jG7UBXTGo8wUP3Tug6qrBgvQo7yrnZ1mKUSCSmFuDb3az23zHm2EuVnnGEasmMqw6PKsv8XmMDD",
  "key26": "65zj1UmjSSVL5VDchXcMpvJoGKCm9T1sDMgSJnSZyEmMw13Gx1NroBmKSNfzwtpMPFnFZFpZL35aS7DyfgPZi3Ti",
  "key27": "4oE17UeKe3bwVZ8Q6NYsXmDD7TaVZoo9m3KzdBDvYETYLLNew7qzNSLh3cGGzR22kwS6whTgaK7xA3MByj1BeN5v",
  "key28": "55dBHUD2ZnZs7pcuXEwMi6L27cAM4ZP78XzGj8NGXCzVvN6snHHpQsfQyL6STAtex2PP4jrCzcCGvWRKzMgvXLtT",
  "key29": "kxDreSziaBGauEqizJXbCaBZ9713TT31waGGWTGbJZsD9QzD39ViWm5A2YEpiESNCuVZm33hqtnaruht4RquKw6",
  "key30": "2htjrEdyEtfPrM2JXjhKJYSCxxQ84YUzEFZDKFb6ZE8j7p3VxUfP6DivzxfETeiPbFMLPT7YbeXpm863td8gRHL2",
  "key31": "X6vnwMQ2dpcMtejP3WnocQZUbRD718d7tMDsgUza4oDRzD7Wj8rffEzSGd8uoVmGPsQgLPhSyzDJGcfD66K9VQk",
  "key32": "5y3CKjiokhiyi7bQGZfefYz2cT26DzruXJtLbiihuJ4zVMoUke99S3cwzLz9L54MC9Vq4ZPN7siqa6vod6dnvnud",
  "key33": "3AyNgoT79dqzvuj9abQaotqZkpkodKK4CZuVuBF5GKVPwL2QeWR1TdXfMo3HbJCs3dRoq5G8sK9gexBJkhPnfRi5",
  "key34": "62Nzh5x2Y6VHVg7WfaX6fRgDVrwm9AWyn6FxP9nr2RhbRskTr1H666WaHBXxbBJCBVoxb7Xt7drhjBxb9Kf2wFJC",
  "key35": "3QDEDmQFuStirRkcyXQ2pBAcZ7Z6sdsZv44EJhZ9bEb9XKTZ3DhFDzotuXJp5pD5o5AEf7ZJAwv7KyKGRgqirZ2e",
  "key36": "294cxR24GMEG2SJvUJDsQghvDAsJdHHms2hSC2G3eu4QcgMs768Hkb9L3S8nnxNAcoQutt9JTLZgviQMiBHrQUZn",
  "key37": "HqQe3P9d6R9SCVSTV3uNsfT2vCV9jkgwpg8bf4VwESPAq6sfSmhNZYW8F1NuSs7xSVE1JVaK2hJzVfAqGzuLRTc",
  "key38": "5ksh641mso53yHgRZxFwfJEo3Vx48MZVJ6kZaSM9L2M6dnkLemANSiYpZVH1y5j47PZFSXcG8iWz93hA2rUu2TiA",
  "key39": "42qMAh14STt3aB4h2GP8oEsAv9Y4fV2rVh4Q6fgZYZHXwhYQ1b1mnF7wYNnDBa8FTn2SrsyEcqA71REtCAR4XD92",
  "key40": "4GZmrdYz7jUGaC4b92258WiqMh4go5dYNh5EnBoHag2y3jA8Sn4tarW4mv7xw69kYMUFKK2AjaaAmDgdjgF6cC34"
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
