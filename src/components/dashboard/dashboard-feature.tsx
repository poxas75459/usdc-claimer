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
    "mvh4oizqSYB7hcxV5XwRgRJmDCZKX2bETk5vANxiDPTPFC8Ci25EZagkV1Ga5k56TQg7DcxsFBJBiws8sv7BwRU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RoQXFuRB1kM7VynpibhsoKMv1Gvto9fJqQ9r3oBvg3ePJLjXoCsUKi9ZYhzqeWjW4NbE3Z7FRGeYT95tU2bQ8ZA",
  "key1": "njYq4APtbrAiPDjS7hy1JnXrejZ9qtuR9deRkc1pJXFGWJEUPHjDYebR34Ry6wg5k5CHo7wdu4NbHarfcBpGyKj",
  "key2": "9KXcantUudbjWoWPbnEY7sz7fxmw9KF5mf8gpLrHYQZ2zJzGLhSnMFbx8YQsfFe8DVcEpVdRjAP3cbKYKFQoL1s",
  "key3": "6zaWK5Fet7MgVNE1grGWZmgvuSA1k2yYQLWa9HymrakLQVArgFVG2FPmgSxHsP3vRw2qJRhS6qVuJnGeLHaUU7S",
  "key4": "3UoGgzyW2K18GviK8FGfuwSG4BtnXBUzwmhNGGkF265RK9hBKiSbcB37VYmqeHY9VM71LMZdMnQXk1TDT44zLxpK",
  "key5": "3N6fnxCzWe8dcCQuZEEkfP6SMM9J5WdXXYj95wrVabzbRU2fG85CU1S4b9vt5wpJNcKob7peCio9CJtcAqq4aA2K",
  "key6": "1mkQosJ2BJosmaV3dS9eQghMLdA1CZFnt31xpDmvyetjV7T7QQV5KkJ8LAkjcVuTLUPVGCumBbYMBoEAgqnnoBu",
  "key7": "rPFsVBxHjf2QYeynvw6nz7xQukoHhwgqPNyATwB5o9NtwkggiJvKFxQNa8VPaGqrUK7LnKRHi1AFuYFgniovfoY",
  "key8": "5Rf2KJYL4JtMRuxToHSy8PMEJKupMh9CEBgx2smDkAJP6sDMFjCc4QKi61yn2ghdvnk2B2se1gBL9rojZ8gC6mKu",
  "key9": "vr6nggK9MXbqdQCNLYgFbqjnrxDm58xjxNxrBqWZHwWqo16ReDqSqe2Hn5RN8XueS14fuEgwePzY7bpjh3KkCdV",
  "key10": "JUwRBZdExDgdH3SqxXvQKH6pfMCHqBpE7fHFqCbFu8X2eHLVi4mMSwQcTndXZjQGWdi7PDbqqBHMiJF71xRWmuh",
  "key11": "5BU4eof7mhuLrfiwU9i7P8kF9z1uPEmzf2zzPaLM8fF3uzuKceVk51rYv8mrdXFqFX95TnRWwtiYM1ZezAeUAETx",
  "key12": "5auhAhUwvdEdH3faFi2jMZWrEUBgaSGU14ng2Y1ppTSRiVAwjGYPCbro8V6p3naWaKRtKDeVSBCHjf8vWgUDBg6c",
  "key13": "dZCjGioH3RH5QhGQVEVy4EgQRpSJU2iGMV45PtftDDh1QjzqKiEByoSBAiwy2yTWaKEm2xvHxCHhU1URk5ppqx5",
  "key14": "2EWicGzvzMPzoSu5hBi8GVvAwtEZ8mxXvzJGHBTN5JzF5B2kvW8CMGcUNC94Rmwa2UCga91LndyLQZBcp9sgmmP3",
  "key15": "5Cc5Jo96aESKwfvNLyTB8Rh12FhSH7x2iBLoFXKTcisr28E7LqDV8nejqe13h3REp9BLgCZngje2FHKHbTa9S365",
  "key16": "3dCtAEjY5PdfxDsdLLHeaAxd4iX8dw2WNLZZjGdUoTiJL4VyuXFe8VmgGtfQEPCfm2TD4Gcq1jSopPhSHWQNNK8z",
  "key17": "2FFT9D5puspqov79t8K5JvFd9VXHh1NuKjUqiCrHzfghY5GqRK3PZoW1EvWH4GNF9Ru9T2cTdzLE8GWxiNjZFG2D",
  "key18": "Z1ReRP9MccHKzQB5FacuseRK7GaaCNw1uECr49evGJuDAMHMmT1c5PGno8o6AijZkBJYHeTUjDKQGuCrSxfHh6L",
  "key19": "2861TpRc2KRBYrdEqQvSbrmhG2Ssk5GfyKoonLwp7ekq9JbgBP7tyNEmCgXU2WQGAJ3tHTJoRLp29n4nHpGJTR86",
  "key20": "61XcnNs98rQSPEzPAvLwdXA8Yw5LBffydQ6cerPqpJpenzzm3n1SpCTDcHsV5zrNE8jxTdPBC71Lr7VCs8LZP4NY",
  "key21": "55Nmb1CmJqCUCiFG7imVMvHJE727FhG6F29FswkGhTXidt4AAWn1ncEDYd1Whe7KrBrJP7hUCVEtWNWE9mfSGDBd",
  "key22": "3Pqy76YXiUpiVcJk1B6oa8qNsUCafUvBhkKg4K4uQyJiVw7tMa6mh2sQadXGiBJbY8f8oGEa4tX3DiA85TjW2WPa",
  "key23": "5ZxPfp7Wn2dSNC6pw6v3ambBW2bxmGCq3iGyjjk1NqcB5VQvosBr1BNwwSRkjdpF5qo1Tzfeb5J17hg7CqbatQVv",
  "key24": "429PbD2o4jJays6tnJ1mRPXV7wsX6AmK7egn5UEZyxVuBsv9JZK15NEsQMjXQwqg7pyywpYyxZCDsBZstF1E5DZ5",
  "key25": "MhJDBFDyB6iDwAbMockg8XHu4QjbHtFFEimttX7KRKbzeTmozFzTTgYknq2VHd9iT4DkrStt7BxZ9TUa5zuKhkz",
  "key26": "5HLxfMyUcXxfcNbn6Q8LwUk2fpux5YQEjhcv2qt6nTMqYPx8Ln4RHDaKnxU8YTuCaVFGJbAsLmVZddDsrKWFqdMa",
  "key27": "35QXUeo77XpSWVYAcM9vL5tRrKc4MAiTfskog3jnJq8SCNDXfex3w9z7BBptXvyVq6KDqoibBy1LU78HDmSGrXzs",
  "key28": "5tYsVTFiJVe8sn8kZwEEywP623YkeeKkK26Fi4ULcXnQHBAmZ5dyXyQwPrF15nrY42CHiWCU5xU4DxczYpwZAasT",
  "key29": "3qmR2EGd6pa53KvnTzKmspkuZBHRjBA7GcCNymz4CUxAw1AfVBaX85nLyxYg7yZgbonSgCVA41E9TjLYJN52z17j",
  "key30": "2cZgM3zdZQFq2Fnm9xiUotSbRVmcbQtiS8n9cyxc35g2Qs2XZpwDwmZGTCiNKKSActdm8w2SYgNefwduu4GdkCfA",
  "key31": "XEJdEEdPwGgq2eLJZf4x5E47oZKqLQqxd21vhncy825PrFwUDUvz2puq52eWKs4z6WGx5VcsqZNQvLjtnwuSqqo",
  "key32": "VKSydu8UmXZVSspGKgYtY5rNHzvwZ7nk7eZWaz5iqukFSxQQgfS1mARj5GGqMJp8dho71nNmLY4dFYNcUkpsC8Z",
  "key33": "2PkETbwKXm9ALbmRGMP6SwnKurVm1mYxH7qXurDm5vf7FnDhu4txrMBHYCg2rbr5vHDMtmyZDv2aSBoJRv5QbBmE",
  "key34": "3JtMQViXZ3dE1stadh6L8auDMijS398Y7X8ZjVE8bXDFZyWQMbczYMen1uAWBDXFyd8xST2xaKMZSyXmXErwxjgn",
  "key35": "3x9ZvxgepH1MwB2ChHiJBNK6woh9W9cyFLnRAgyzie7Ybq83NJH6F3GwBn6tXSvsdB65Dwn2A8chq3Peet1jSLuU",
  "key36": "5GTVohVd5hgx7bQ8JdYsDRp1KiAMvRTUmPDCMAw39CZdtmf6CgVTA3VJVRxFJrGJDKEzUmX36DB47UVdRbL1KJgR",
  "key37": "34ojaDu76Qipoizmf4kS2gQKWs76tANbkUmfWPNWcLj2k1KRzhBGvUKg8vtaLHbXE1sJjTTPyCZdAYrdkszqTAD",
  "key38": "3J9G7cbUd4FPuXVTkrRkGg1XhEGzrrwovfYFpU1KoeVG3yk2HZVBpUUz7cyv2nvzkZYvZCSgSuAWyiKDFnmBsDrt",
  "key39": "2ghHrGYjm77azkZLAck5yBtuMTtbYcMzYCM9Ff1KxqZfZ7KgC1s5VVxrsjmuu3Yge3mL4UHscs4DcAHFRm31shQv",
  "key40": "3MaE4pXYvRxhDAZZjdkdUvDya6PBoc8MJiiLdssUTpaq6fpTgQDW291zeHdmL73JWmitH77tke6ixK1eY4Hoaird",
  "key41": "5knqSv9a7vK8mMXbBJ44dbQqLjruvZBD7deQKceVoLqrtUE7DVCqbhANxnz8rwRq2XXtXbSBgPgJDKAYACtegLGz",
  "key42": "56TYx3Fc7rVu8bmzwYGtDy2YEYmyc6kGNFr9hxBaot7tdg9muno5VETM7jVmRqmSAzumL5pJStSXxg9dFZaDBtSC",
  "key43": "2mtA9qBWw18JrFfnTz6d4hYak9FMfcK9EpQsRJm6bJFZDtKqRhiK5Vc1pR9dwMU6pV2oxDBY4kf5beYh1YxYFEaz",
  "key44": "5AZjNk5bxxnmS7NT83R8ycWgsgjhDmPcB7qatvtZyDhUM5WsjEwZyB7Xe88NSpbBoMUUnugUgMQgrKLrrfbH4mA",
  "key45": "28jnm2EYQGWucUBEfZNjZMsKk8zEHWm7bjg3BjHcsEcAQn4VvBnzWd1hs2uyD1UTkLsfNLFdZyV29cTupVPwdQUB"
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
