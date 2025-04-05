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
    "zvAk2fkJmQouzZDxSJzVvnr1jk4KeqtBzw3cS1Q1dCorn6BAqvDjqoot4RwTfpQz3i9cj5TUge8UHYdpVJRvZdT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Cb8u6cRJ2djPaEiNY2vHNHj6ni6BLNZ6aAThPc8WHpXczPeHtruuLAntZMjJ2RV1ffzhrYFo3URDTWqaJiAaKym",
  "key1": "4tb27ZhRsDFZLLyBgmL2DiFEdzWKDbxZnTuknPeBxtQGWxSsQZpAAszJaHvthdGpLHYMpUzPsgu3P9qMaYCZ9YZo",
  "key2": "4frDtpr5Z44SyM6eK9xPXUQnCwQryo9jBfvWcDPXygGamJ8iCCSSLEskV3izjk5kjp1rNKgWaABUhnyFrwzsQnLJ",
  "key3": "4dFoceTkBEFWYMHMhZ6cUXtK1kEa5dTqFYP2MkBzQ8ai2q5LYGabDWWcPFeT9vZKGz2vo2NHHTXzrUySzEeNfaY7",
  "key4": "2PkDjiy5UvD3b9gdbM1PwBtrzK1ze2GZpP54Qd5QytJmYGLHsBsJftmHjSwBSsJ4v6ZhuaL9QVYRrqGSf7UqWmYn",
  "key5": "9pSakenuB8Z6cqPEm7f8nCnwF1jYVpyG2cLJYn42TSBc7wHRkqoDp8AbzedkKFxBFmptTNjX24rLEWejU1Vy4gY",
  "key6": "5FrtrgJyWQ1BnbAxEF14GJk51ToRZXk6tk38yZp7m3uzPjvAPLmd5kFBngbkiZBAEv1Lx5RuzBPybAXfgze4K8GJ",
  "key7": "4CwUPhtE1iFTDvTNxGX2DN4rXrUugTHGmgLfb3KtBK4jAiBTjx4VFck7JM7EMKbGXuoUEq4697CeFW6vmcXvGvHZ",
  "key8": "5kemDUvpC13WkNtzRZcXvXGyKyK6f7smdXaswVpYzL71hzNNMNZESHrWEm444WzvHGaLhkZWxw9jR7Eyi3RrJeSb",
  "key9": "65T9QTnMexUFpufA1e1WuEpNWzvQ8Q9sGrzcE3tnvGfqeYq1LmnAiiBn64ZNyeXPhDNZQhLqKddgF4SKD3NLwTxh",
  "key10": "5qemEXRDFR3xfbKhEcLb5zK1XzcScXAqQx3yh38yPBGCoiWJqSDpWdkmovZ7HE4CbobL8t25TWtjn3A4sd3isNuf",
  "key11": "3GPRTrm27QM66q7Pfi4h9sB5xYtwY6upK1HARaLaSHYTZughb3g8mwhBQD7aCGeAYxSphJZUB7W1ni3YPFndYNKF",
  "key12": "5VjGmXBGaf9GmUYaCpmSss4nYZ4ZsHjb6Azs7B2vAY9xq9G3d3BNskjYf5gUUbnMoUgPa9mSh1Td4qa1jqEeu236",
  "key13": "5ZTE7Znvwqm63nMY6zUb5Rdb7KxnR6RVZTdoRxmj3p6TwUpAdBA2hE5AVptiyAFXU4MY4YnfaBMRyNEPtYvRP2Yo",
  "key14": "3RY1YUoHwSHuihSiGFAyTcUGg29KWof8A9ok27LFqhgaFLFdhjvMDJyXKCBfZt7uNcXARGTcfNqLh1MVfsaRBNWM",
  "key15": "GNFiDQJLraXtcyLUT6ZMEshwDTuuyeviTkJGxZS81YQeur9b55MvXQNKhzxgmJkekPCzXDtmtYyF31JF3aKmZ1k",
  "key16": "45usEbUC4iErUCgNFfY8qKg1xLARQF3M9n2AaHzELdtEbmzkW7o2fBQVnN6QirTXUsA4X4tjtbUezXxf631V1Du3",
  "key17": "2wKGy3XiHnEbmLFfvxncDbvRtQmDZRuGr9Ej9HjWDbWoecKQWN4KosRj2yuQsaVeUKyaujWXVW9EpkPDsd1r6Q5f",
  "key18": "3uRekQwc4YFFW8iJBPy1Pu5PwS5XD8qkW1m6dZtW1krzeP3VQtE4D5yMGWFfn3nyNWy6jU5gnE2pvBSMtSjkfWqX",
  "key19": "4SFciyBFKcLrPj3Nmxreq2GYcMubXWXXi5wNy2EdDGk8M6cRFPx1HS69fTabAQzCHV2q21RG1vjpvn9yEVbVV2cL",
  "key20": "27n5QnmPxG56i1U7YWEW3z6GiR4ge83LSQ2fiLWaBVwQ1xH7AtMAGYDuTKjvpBE1afaTjqNNpAyhEWR3GmxV8SHg",
  "key21": "3qfLeyqddmajHrW4nYxK65HiJBfJLn29P7QWG8A4PZwLmow3r6nLrM6kgw4MH9H4DK8uA14UnV6RexbdY4xVxgbk",
  "key22": "tNXxLnRT4qiJSZRCP165YE5giEQykE83KpdeqvCNv57YVorHTkKrq5GXE1KTWJzdEhcGXjeyFofYYvb2Vr1v3CR",
  "key23": "gifyEo7EkSy61g5ArsKuqohH9ydH3XvKM2mnocGmjcsciVtqZH8Ry8mj2FrKzJ7b5GQzt3FUcEERxC75zvXKxSW",
  "key24": "3Ry2nKDfGuoAbgsvL54WFTa9z5j6PAfnT1GojXK2opMMuySzQSWNM9WpTmGDvFP4rDkCm8b18uhDqPhyVR4NjXY",
  "key25": "537yF4AbqbqthBWyqhhv9JR95LnQM1muNcGTD2CkbaAMHQSXDkByEqgT9bH9LpycffMenoNYzKkbQhZd6vPxNonq",
  "key26": "5KJAJBQ4n95vhzASjBFq2t2uv5KeSs47EnZzNxWmjgwua5CrVvbjHjzhsn9PXuW3sUn5hKNVAyjCWxHVmqiCtYX8",
  "key27": "5idYBJVszhK78Rubnzijtt3dD2RdFXji3uGD1VhE25MUYA5h3GhG4MhzAgEKiV15YZ1SwPioG12bpM4NVBW1EKtX",
  "key28": "5uVMvzCorWCBFamXgrmWHn2PYn8R7kMC36WrKic4jDQcnUBUNEenjyfYAD5cB67RospZ3wbMDT6fTHy6axnvKTkq",
  "key29": "3jioneaSy9VQqwJFFJki61yMMKZJzSWceBSdMwLv39ipyM3qVoWoeE464WLNHjrSZivjfMzhzvpMSKUAioP6RYtm",
  "key30": "6Waqz1Wu4sbHWdH7geUC5H3rBPkEhokiWvPAux5SAGxWa5anDXnpDYWMgDmWEzY9ZjEvB5SJcPjVanHyyq72jPt",
  "key31": "5YLXdbEwRBMUSWP3GZz17krBPb9fkke82CcBQd9nBwTVoD1Con1nc3qoJZjW2wdcHRUVYZB4nG2zckYEHksdWyz1",
  "key32": "3WzetBXE9j5bJiLoc6ZVKYnjhZ4HVk2BmQvHkK8aD7hHqR56y86HLkYPK2ke3CtqnFXmKN74gfHVyjs1Nn8VSMJ5",
  "key33": "5vmHDXTx9pN23u6iuvG3VDE5ehfdsqqrqzXpCfeqyxZe5fbySWovCQsDNe2uB9ST6FnfSsK8B8Xc3gWm7secBwuW",
  "key34": "23rkNdjJwSsCSJWADvvuUZaxZfQicHY3pGAABxFRYJvChqteH61cUFdRtGKjJPBaCKZbbKhheq84AiHTJS2zCk2j",
  "key35": "3o2yQB41nSog7ThsgsLrLPZdmUq6j1BSrPRUJbwkBjp36ELSU1p8LtRB48TpcrM4NkRd9LJCjQfj5gjiAjUpu1wx",
  "key36": "2Caj5Asi2uaJ6j1ocgrHgQB67zT8MigYMmXgj9BWkv4PrHwnoVHwMKhMgjjY5xeoFRRa9FyGLP9Zcjen6Zjc1bpZ",
  "key37": "4BM6NAgDfctE1azySs4rFFQBmv6MKwDe3aRfbJa6MzS2Z7WEJnmX2cTUjnr3XjpG1b7W3uDeHkkaJYDQD1z4hvut",
  "key38": "2iWtgGKWfEoTCfnJTPbSZvL2vBdHfxH4cb48XdnLVunDduSygUQftYhyUCqCXWNrumcsRJgnWYUo7ZR5hA3TxhMN",
  "key39": "5WQ92wgszSFFFSTeV7hE3if5EZXCnxRqXo3sQD6nNERdWEsUXtYx6PtCYscmiJt5u6fgRoZW7MKuARuGxJnd3pZm",
  "key40": "2UfnzV4TjRzh17qDgcuoB63MRfVA7DE1x4Ak7wiLkPe31x1se9yCgpbdh6EuoQ6q2rafVVXMF7TDatgk2jCxAKoZ",
  "key41": "5bGhX1C49sA8nKTMm5yTUbYQSR4oKm6Q7BAwhyptV1aM2JpNqGcqqpShYiHuzrnSGsDi6QVXxopY3usKMdQMxnsi",
  "key42": "5648LmhTF7UGn8t37mwPtLP6wBh62kR3R4oTTa64EfdPcvs6q1L7FyTMv4T7ZgnLEpewLYSqXULB5g6PL5jyq7YQ",
  "key43": "3yueq2LAqk2kbLCBDVPGUBEqtKSUUbFUREUftg6Ta4ysbjYzBa1BeE2CWYiib2D9GMGEeXwWYsvLHbuEL5mYK82s",
  "key44": "4y8yS7j1jPXV6P75Q7gdfLXVokoXS5MzoAyaBPCaxaf1iHjmgGABfG3EBTtRxuhjDXGMFLSjXQEPCWgYmpPYnWR5",
  "key45": "3eq27PNxoyqxhxH2tCosL94jHuuCxQdzrzg4yJFk7v83nn2DhgjaM6yXhiU6RX5Nfevd41h39tSCrpfEkxffKgdF",
  "key46": "QgcraX9VgioZ3VNsQLasfDRzZMnTjzWcYKrJ29U3LfGkFC1vAMT5QeQexBpq9zPGdzRXr3YBjyEEQc9gtqnwfpk",
  "key47": "5iGSqfowwMrDQPoUNsKo6ushBYA9YKjYfHPE74b9z3w2uHzsVKK5Hce6B9gtSdVRKPRkay4HLTLkBFK14sX64neH"
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
