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
    "3Lf8EhtwgjP6ZW13yHFQgEa3xweQL7LnT8CYUQE8BAomEN6CCPAf2tUFwykDfw7X78P3PWpgjeV25TtoF39CZTjr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EDU8PYBvLya8s7dRG2szaJCuDRkaZCwPxGiDaVroujuQ73yRXMnkrxwNcCBckwgdZKDxsqYma1VLZh26SHNbdgt",
  "key1": "5jhFAMi5HdDZ1FptkzMyzLU3PM3GKAfKBiiEVmF4kfSUNrw2JBKPT2BBD4hWjQLUJ5b2FfJ3dEQ64cTvAfdxjGBV",
  "key2": "5uijog2vNMWttaqtQJeYkCzQZsWJ5SDrJpX6mkJyccBGBUjM6tx97vEUiaqYefmJpxVbY4oXMqY72i9sVsqBAEaM",
  "key3": "sRCuU9PYkZt4gf92RWzvmLrQa1zrtT6rKMXtbaHwCK5h57ZCH5FpZNXk4zojcoKfS3t4MThCDyr7RU1eazj4yNK",
  "key4": "PytLXi6adrm5RPdShGkR7braZbdiApTUYCUd8THYGxHKNbCHKyrtMoswbAedVYDKfrQLu7axDquBZ4jcUSjvr4e",
  "key5": "uUL5wZ4rsqgnrUfD7FeebuLg5heKbq12KewPu3F8nPsjrZhzZPQvGxHpk3TuGsrFo39qVcihQtVP9iXvMt1sqXU",
  "key6": "UhJzSgTv6AFUQw3psCHkMuY9G3mronas7UWcitvDZMQB2acaMVevShVMSi7Yhxsybkrp6LxbD1NZNgvcKh2AaeY",
  "key7": "62BMd8eApXEWvNJaHBNNPDLxo1cVro16rtqcsPFJxrAakUd7LamH7zHRy586Yw3vPGxZQvPiLqpNHXP75g2V1q98",
  "key8": "2wYjZqEaWeYmQaQDd9sQJ1qAkU2F9ZwSHBDs8jXg3Et3oX4kiNxD1HbRWDpvASSwzYUZekCVTfrnbEoyJeeHugh2",
  "key9": "zEYLcmBmqWw3c8QCbAxfMuDzCg7MGQ4W8qLEYQRpyEtsQm2c8Cvbzadb8BccQSMajNTDiuSZPjtekEL7MVFAbWU",
  "key10": "3jC7BPUkdXnk3z6nG6D1mwSKFDXQxPGY5rqwzuETm2XMY9ALVvNeHoqE5LjprvAR6ozPj5itLkHs5H8xZyWTyhXv",
  "key11": "3TNsmj3hchaZpkyDkbJfujmpYdTZXXw4r4xMLkxmJEswA229DdwSj3waTDKvt6FBNtk8ebvo6ttX7fxC9eDzhH6Y",
  "key12": "27npv8JkSDwW5ej8Qp3hPgzZnLWxnvnivq8venprtEu1AziVTf3c4MeFr4fcYwhyG7yPuLQWrqtCzUyABSkVw2oV",
  "key13": "4HTRTKvniNMc2QZSkoxD5mdmLBGgib1WLyqGJe7j4KzpyU5ADfHXPNiBBiCRFjcxBA7PAHXeL1zi4mPFKL4FR8Eg",
  "key14": "3BLWhDcFGDRJaBwnZ4ucEFoVai8CNKZj6CiWNFvSet24A2kiVuc9WdGrAUVDTcameyNrUD8MEvM2XMF7ukdFHHL5",
  "key15": "4JDJUjgxZ3L4nqubQBq2LUWoDpRSJtaqj4SW6LeTtnCqAKhx6kidc8CCAfbeCjJJ24Awi1azAuhJMkgXJpsL17Dd",
  "key16": "4SkoUHPLb6QRvkqTosYV37is9eHR52AqaTVP1aMuf3zuCsfJktYbpvcC4YRHAJQXR7YsWeQswigmSs3tmK9CWdJo",
  "key17": "yhSyaao4zXiWS37Z29m8ZZc69tQNA6ux8Qw9USnYtfjZZL6YuuVUJjbYZhEwDsAyDncnVtoT8PDBaDBo6JopK57",
  "key18": "3tPjM3fGVcAKAtLMWaYiWge5vKQHjWSrR2CzLqQdfTiVZTXoEwcP9GXJZQ34VKBZ6C4qY9UuXCj9AY8zWScyQt6k",
  "key19": "2PtfTmpiKycqNPLmXYMqKy6DLFQtbfh4psoqr3W2Mf5jJQffu4qmAAKtVBz9dorSsK3aedfLvq35kLJrkZwCaBd7",
  "key20": "ToDurQgmipxwXaXDuLLMhkjbWVhhFesqKTAXHe7oJZnqqNCJD1w8mUsongT9niK6zMrLCkqHxHmuFrbbFrrRZoB",
  "key21": "SwbWXXfM7XWwi52QUZmwLNMgLtye6PPESD9eWQyJnM2ZKfYez89DGwL64o82RXhCBfQU3topwW1NGH2EmwTh4AY",
  "key22": "4wJvLXzQQtcb47LTzy9JdnD43tV4QdQFXDmzf4GYNwrwyKdaxUUb2QsKCo2cpZxcdenjKVRtZA5Ly3bv2gxb5aWE",
  "key23": "vmNpn8UMmYsy28441XaNK8VCPxQ5Xr2CGfN8kz1SsUEG9EydueJuREAxtuJHw7twtbigmoTiXixevD4HVysRNh4",
  "key24": "fJ3DBgnMpPyA3nzx5dFaB3xAYw6g3brKrekwddZyYBL25hYUo5kA8ndkMEQiP9nBRz2hYD8TtfgXMZCPEquGTsr",
  "key25": "3Hn4XaSfZprtn7VKwvXCdSyZEWWteBnRL2oT6d3MwLN55dGpbCWg9Sba49qmfpw2ND2vrM7gGExLGZtzutLMTY2J",
  "key26": "5ysrkeS4j5dE7hVuUUessck8qneFDFQkbKHYwrPgYqg6TyKoeVELWQDtSGkHbcJkVYW6noZvHvtqJ5Sz5vSmkNZt",
  "key27": "NZfaBn453xLJzy6Fyf9Z1mvAjs4EcBgyE5RFRECykbR7x8DYj5pvz3Nw7rcMuXXHue34Na5DqTWFMQQTDsBBDy9",
  "key28": "5KqCm4harFWPeupNpjQQUgCHAaotD3qwKF5M4jZx8FuXkY1v8hMQQBoMoo3BQfo4r5wWczaVyjKtuJPfUeoDW6fg",
  "key29": "4Xnwn9u9CXoQWumzBEn6bfcvCZjB6dg4kFbn8C9Qe5x6woiF1MaqcKLazs96xsLwvtF5HwHQnZGiTYMrYtGNX7MK",
  "key30": "3dDRqGzmrDFFsHiaqvNjp5y9X1kQnBxshvUimkryxtvo2pKkhpS2Enmt5HJzsKSK5HyxNff6gWV6fKzGdbSVqaSM",
  "key31": "2JoBtTqsWZBq2Snd55U8KBQyHtx3PxgwamKopMmwWARDGHQPBsVuo6UZbznbVQTKnhhT2EmYZUsQ5Xsp4LoNxkxL",
  "key32": "5yvCsoVaW3n1U3ZGiHZmzmssdQdwGiReCaAepDDLbBBKV8eLPtT1LjfxEVjiLMfwmUYf8rUDeiCEgUF46YwqmVK6",
  "key33": "22tS9murho89GWpQ1Vv7fWWRFFqhy6YruL3QCvvTdgVfbS2LJRt8JdKBpMDTGfAWspcmUy2vZgtsFQBsAwuviZ8y",
  "key34": "2APpQE7Ys8BtkSLSJHLMQhkhfi5ijtXoJGrzu5ij6oQfQJ7rM13rdaUzwD14wUaX7aJzWqfZJYdgTBqxXCuKdeU4",
  "key35": "PfciiDr3L2AyW9N5U6EKNnrAUsSqQEowEbTmfJt2CaiJbXpXPCHr3XHXRCkaS6MJGG1ukXvg6XSK8ASs7Utsi18",
  "key36": "5a6GUxbZ6Gj5iLfzPxxALT6GdeieP2hqYSHv37mvXtrHam7h7tosJMcz53AjLkoaeUJSUUNgMW5LwhVtRVqWFw3z",
  "key37": "4b8GvzA9n3mDDw7Cr2RKKjFi11ka3xV6CU9xxs6tqyCyBdVVVy87XdZRSEMoXJxBauvCkNfN31ASjo9RZ97d31LY",
  "key38": "ebUrQmfhNi5HjpEHFio3BSSmNFgQs8pmvHQTNoEJwvCfbeZr77fVwEw52uNSoMeb6g3BXurzqdqoYtv6eA3TGgr",
  "key39": "5uZpfVqmspBVaQRGSbLfcdpcvov7TSP393VVzFSPa6iPiRsFoLqbTRCutLAZA9CkYebsd2c5ehChfeBipVeRkG2v"
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
