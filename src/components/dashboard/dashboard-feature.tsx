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
    "3emMh1K7Yfbp6ptB7W3NXeJk7RM3xzRGgrVPbYwCukH4xLWPs6sEK4RdxuPThUSY4gjeBcn4JetnD7MaRnh8S2FP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7mXFEsoxriuhLpXR7ZNvCPcSZ1tFdDWTwpgPAoK4S19t3McrDj394icjo3wkcM7UAHDVZzsM2bYsEaLnejhzjbW",
  "key1": "T9wmCnkxM2arXQvqRavQ4oczHZFXiDxfKqxgZKeDnHidELLLfQ2PoW1pT3sdMjcMZGxuW8Mp5ZS928gSwi9sLzN",
  "key2": "BwEtznTmcuScKdJWmNkXvbM4zJEmxNU7VRspECruYg4upjqcGjAdLeXh5REwXjEQQzgNhMhP792h7QVuYbavdCD",
  "key3": "3ppuwCFS48hUksEWbFyvM7pbboUrZ2gTEQk5NdJ9jveCZrbMfGhe4xB2gYC6ekvf1cE6M3WwoUQHjuGemXxhnas8",
  "key4": "gZuixsYzym3BB1jhx3wthL5hfiC5BSHmgyseQUYmQ1hJsJQEksxiesmzWjB7EyB6HEjSct5mDF5uQDgVUSwxp4p",
  "key5": "3bEbFNyFojSNZMtQVNtLh9h1KX8xXaXDFzB43MZt9ZMWnBv7iXwT1esagAvG1cNza5LzwawKxLph8quqWfaY3qy1",
  "key6": "5UV5rsi7FV4aphzrgjE2aFiaFaTWM66EMjEXYahAWVMjQJo3JkggqZY4KrSnU7wAW27hLqvY8nFeN8pYVVqaF8Fg",
  "key7": "5PhtLhrKLoi4vtJR94GcXba9k8wRNMR9kDPwd7nfHznvkN8WkGT4S871JGeUxj3PxZEMHhFbeVqpnJ1RWKbgATQw",
  "key8": "5gB4zk51gdEcyXa41F5gbSaoDkaQWaKtRYnrfPnkrpT9CD6v7PstbhvRMoY1kPf9ymJ3x8kozKNtvLvctbZEbkBb",
  "key9": "4p9omGqoJk3guhW6iQwNMWkZ4aMrjM1ELdAiMwj2gMhR1Fuc75yVkR83gmNzSDVY5cdza6RMGqmDxbS1EHZg9YFp",
  "key10": "41Ys6EVwFvZCaZxS3EyzRj5x1fYZjLeMAvnPbXnn3q99263x7NpV8QmSUhLQW893wQ1UWJia7j6VamC4qeM7mz76",
  "key11": "21pbQnDfwY9HFRu77uaXxudBY6PviMymc855DudS6WoEJhXT2XdD9bKco9NMWHRvsGxAUgbgHF48j3Y2e8u87jeq",
  "key12": "FJERk9BRan3eXkcUsSsio74DzympE9xFpCwd6zXYv61DsL2crMS2MMwNo5sBmpGJpGpgGaDqRrAiSJw6YzTQNGQ",
  "key13": "5XaBMoHwP8kkJN9s5gQmDiGxNYeY2hHpHqVQ4FVDvckoGw8ggX9YUpRDHVuHYKXTgDSEHYrcoRWn6dhfwM3A8CJr",
  "key14": "63CAXV6XzkiuJcfvpsF5DHyWKkM7LsYT2cybLVqiU7pE9rdxx53YisA7EPvR3tLaoPAT4BYoiG1fEeGYTwzP169c",
  "key15": "2AhL76jxnwLvyZH4kER2HPtKQruENNo8M8v4TFWTQU9noDbc1rcMw2bDgGiWSePke8rFcnoWNTtZePgKyzdCn4Lz",
  "key16": "46junFycrwf7ha3g6t148raHQDmyU11ZsXDsAuDrZaNju4vGA9RUL45wp8MYfs2SFYuBDvTgbCnsjkD4eogonHsS",
  "key17": "5gnTraFeWpmpcguK7NS85A8FLQML2okza69FXLdgZCubFguzs7KEFMxe66Z5TnYEqTxpTwXFYCz7cVoXg6ySkfGg",
  "key18": "2H24UjatCjAEseqLo7HmNJvM1sWGJnWd3QYFvQ7srx5s86dDtNNiRHec5YiBqua2Tbt9vCcVoKVC7WdGsNrV1tjs",
  "key19": "3Jjp3KbmwfFgc3YEN6XmL512K8hxuZgCMbqERUvLxkmDbt4nvpiXxqh8WSAVSPd7X7w1JPy1tTYqiFNK6k25jGH",
  "key20": "4fYZKLC3QUEVdX877U8vTmJHatyQQ8zsaWLb7WokeBz8YmeS9T9yPwJuTNrHSmmDvunsBjTnXQRga6unsNC1HXCM",
  "key21": "4ukGv5vEmxaVRv1BzsPjeHDXj9eswi4uUE9FXDmeQj566HNjzBWKgNqJFKYdrgckTPxqu4j4hX5BP7m8c36TM247",
  "key22": "2gipBRnwdYbmreVTR2TqNFtugNGKnm8EThkTTBDjL3hb9oofwPQnxCFmFmRScpz3vCrzwdnpsD36NctNKBrFevkx",
  "key23": "2tYAb6uy7iTVCSTLAg526o2ddygnXbb8uoXhfohuJm9BKUAeBUjF9UUy2TKunw1canDQAGYqUAgK53DdCPHf3M3R",
  "key24": "3JWh6TfJy7LvQKiDGF3rgg76GM88RYztYWsfsUSXaiZZYHkvxZWGtuAci9E5sj7Tut83boAbRhTSh7APCDp32jxW",
  "key25": "3LX2555q21GePZMa1AL9pPTLwjdkmCaojoxvvRK1EQ2W42beFBVz8SJPiayTShv2LwBwRWG8kkGGmvo7EfNHueDk",
  "key26": "3VA9xMLDRBFfYgGWHyzKY5ax4n4ntcG8KSYz7zUXyV3HN1NPvsVRFMzsau94efEnsHN5Tur3RH2GPa1n1x7VtYGP",
  "key27": "35TWqGnNVoywxKnxPiasgLz2oeN8k3Dyvrojgvpsj8saBH1thBqLS3W9CZGJZNGT7phs8y5pSaw9GmCkqway8akm",
  "key28": "36Zby1887hFY9fZWHS9RwkD1ahtsF2eHo8Pt4Y1BgE8aHUfEUHnvq68ZQYQBWfHatnHHTAkq3xx7ETMxgSUML9Ym",
  "key29": "BLvoQ49865pX9Gk6z2RET1L9zL5cbb7pqrKzVXEdFxH4XXEvp7gYqfWmDx8j17BivP17SDPpLkZY89Dc9QcmrfX",
  "key30": "4d2W7kfF4YkRnd9XM1hrckdLTZtArVMtCgQJz4EdX6jwUnArm8XWjCsTu5HA2D61K2LQBpR47hDERYjjrp2xxEJr",
  "key31": "5NBWZJvkMVqx8tmTKa5n4Y3AJvxkRaYvmYE8mY8TsduJeg4yHum7SpwcFLciJS1MmmTqgE1i8FrceC2iBM35L217",
  "key32": "5WMhgoYxcP2ANuvTDmCMwyP9Ny6Hvb9Xm41rZ1JZWt4Fih1vYxj66B3AcV1Xajf7ym7gHWqgdtjKhFNibisJUzqt",
  "key33": "4H5EfT6bjxP1TYMhBaXGx8ixUn9XK41k7JjQuKSdL6pycRtDPgb1CcbzPpBJUqrEBGWvNov6QQPvKMUKwrJWMAKZ",
  "key34": "5gXeGeMenNoLE7h4NJfFdLSHdnug1vfbgAxuHkMnPMBb9CL6Ga2QaXUpvDwvy1N6jTmbH5T8FgQ2ASyGT4ymvSTy",
  "key35": "4uTL7jifezWterKykRQM3hBwcUfTrnWz1M9JddCCUS8uPobqrKyetqC3Np3mCgFM3j8GXvXWBQFocA7gxWJVx7xW",
  "key36": "662eP9MpKD7cPgNZRMFgjkqpvA93gB98m7nqMYTEzgaeeLLM4dexsXQrBAQ1vyi8VhHDNt61uLURWxJ1SERVtcN1",
  "key37": "3BkCyTQSvxrLo1YEazSZTdaqQLFbJCFJUZzoW2bh3YBmCa4qHbkyJ6mu1ZQQibFnJAnTBQvftHxbyNp55FX651RD",
  "key38": "4SU9qLoaBe5i5gxPP3xHygKpt14pJ28ERrjCvbgR4HJdjuREwQWN81R5GNqv6rWT4VZKtK3EcjtfhJy7DBc5HD52",
  "key39": "wMoEvbvJkuGvYSD9H3nqxrE2BdaBmmWAD9rVzpbmFSJvz5r1Rpuy6Jhp8aXHMNMaxquvRuAAYcQ2VLGX92vaW9u",
  "key40": "cLsAVe6V4X9GW4ZdemVo912ssjpHHxuzovvAWQVdZ9EefpbvnTcP6Be3ma9fd5VkptatvSEkVNEEJrF1D799hYZ",
  "key41": "2cMBzZqRYwUs4JGm1j1FCkdrezpY6xCQ3ARuyLst8GQbeYjSo1pJqkdMnoW3YsrhyBwqqPA4Zbd4ib9xtb9o9xpM",
  "key42": "5kBZZMuRNyP2DUHqV8reK9nxAZSmj5GKEpKfEb57puYbEdyNqE6vEqDSFrdqReofJB35752vgRKyJCr5wmZtrywb",
  "key43": "7DxvGn2ex8mmUnU9ZM8TJM2cKkx6gLmYbayY8QuLEgajAQQHEomGX1UtKTPVUQ7Uss5MuJzy4B7tBsivQc6Vq2F"
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
