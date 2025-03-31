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
    "ar9cwfdBNDDUKQVYnZupyHUiEDWk39WS7PoN8K2jL9DqKo1AeqR2S8bVa8wxTjtEKvUQQSxLsr9F7UqiPcXRfpy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22imQdmYQ4xh41hVQmnYXMZyZfHwd8WwSeWYdLmC8DSW3apoVZx11ZE71AuJmEPhWq7QKFnTuf93gMYMiseUgGiv",
  "key1": "7xWVRHFTJv1xiMSe7ay9ztQP9GdUrhfnisJfqisJp9UfKhtampAFL6EF2BQWiZZAjFfPkAg3CJR6YRqR5PK4xmY",
  "key2": "5vr2nAsG519LGYcvVBUk3At373tQHnUwSDJaLsNQQs6H8ks8AziGFNHMLE939g2E4ihmDMEEeptbNj38X7HqNnmN",
  "key3": "5JAjdxu52p27BHKkmtJXk5vNtgGZSX33Dc3Zq2YUFeq6kS4xATi1xX55FHDm5iPMRLAdoD4cH316zgfCdv4dNeZn",
  "key4": "5nnyYv8EFfGU9VQFTRLTykf88ods6NNrnikspW34GJfx7yENLuzAn4k9NrtCm19jrCXVdHDTFexPmoH3Eadaco76",
  "key5": "3Nw97wp61HTf1CMZTbPEVnoVzgDXM1xMy4TNodgpCprFVkyocbcZrCKd77SpqSrwMJnMkMHXWWTr5rtMNdANRUHs",
  "key6": "5TED9gVCzR1taH4btG8Lw6WiWxPW1hyszZ7fcYnTmvVVx75xYiVFxEAqCkToKDoexEpnuXtqmPrQkzEejHCnxphz",
  "key7": "658ARrtLXTMvFVto2QRBCNkZ2zV5XciWXz146b8p29w1bjKSAQr4xbahzA8RgjaKVrAkmNWT3oDWBB3Bn6EHnzU7",
  "key8": "mX1bWhUXaWQ8Msk6KWbkucegUQ54hVR2FnbXRXAKhBxfpnCXY4qvgAajQDq19oQ9S6okFn13BnHU9PPnAjaNjg6",
  "key9": "2SAsysSupXDBbprjnupUUuGsHCpiqea8r2eHf5gMrQ2zupUb7fb6MWKrnUf978dv2kqiFUhKsx6TZm37CyJ6hMmG",
  "key10": "HBdo4GC7xPk8oHPYNDm2ZzjSi1LiQGwuDFe1x4CVebtk9bHj9B8HCqQEoLdApHNGGgWryq4gbJ9vNFRuzeruekR",
  "key11": "DGBtbPuUhEcjfM29mrth11rHr5twok7yf3MRrQgHQPS2n5VrDxsuCTrsSxD1TE2spucvhRyiUyvW46Nb37ZVsZu",
  "key12": "tkcTci6kcc5jtwYdthN79b8CFVPMgLa2eUX8uAPCudx57N2xsD6GudeviJfAhpUayJv1qTdAoyckXgzgeXbLhzW",
  "key13": "3L2v6tVY9Bhf4NyoEMDM9TgwMqgepZ9UQ7Xh1zHTBi5xWx3VokZ8yK2ddnBqYL8jGoM6SWRNB9xEqr2fkbPFBdCn",
  "key14": "37tVen71Lwt5wNnYsyhm5J4WUkoSAs1tBFpcsf92DnzLSYaphEGcgeyVdurwEB9GKMvnzgmRMJmVwRmAfZUjvMQm",
  "key15": "62q5PqBXmtrEBoxiinPBE9mSVCZkPQ2rk52pdUox3JRGerrMTFSEGnqT8naXigMprX12QUmeXStvszDFWdyGoeMq",
  "key16": "5oQpuRGfsKUS6SgFrU6vvQEYQbMVcQAXHj2K3rnCMPaHttxVQCcjoF7WMSDhq9FR6wFC1VGwZQXwMahgWUZZn9tF",
  "key17": "F5gdkWUehFD2v9B3JS4QGqJKfCkk32i75u6kthoWqnh7UFXRa2cgis4uMNPLSx3VTiY3sUyM9wfbReaeULthEW5",
  "key18": "4Fnj1W6MfQs1CBXmWGuAQVJAHE4KQJYRmNUmKaoVubax4JdN9amJ7Ric3YzTBQzpMpE9tUAZzsyHqFqvsJgynnYu",
  "key19": "4k2ekPkz5B5eJVUka1omJuuHNiHUD38dumixjoWWxdVPmRooyyreDtHTM97Y2PNGtdg6jbDsmuDfgdZWJTJLBh2S",
  "key20": "bYTh5QuHHUyDVnG3hurxLEF1dBQwBmEApFTqeZKCyKFivtk5QbYko88UsBYnegWwdUk914Mns8JqEtACaukYRXf",
  "key21": "4quBoPpccqiUnx7fvbzDZbxzXrCkuxDiPgDDFeY8oF5vK8x6CSimGRFHuaK7GAy9QLbTtm64JkCnphfQMubZ8N8J",
  "key22": "5TwZm8T4Lmz7HvKHdUpcv4XXwMYhRnPPAf9UQaAo3e5EvDGWQyta7nnNfdXXELBT8H1WWoHwdimcj9a7k6ocghKN",
  "key23": "ArBp5PPbZ5jidw6Tejeh9gqAmU7BLAtB4bmyKX7kZug3j2DxQasZTUXud5aaBkyGhcobbxJ5jwg9sUKypRf2YC7",
  "key24": "PG2GegtJXmb6RSmWstuTgfRvFaRqzgcHR5LGsu9KfCR1iN4B7s11nSQX5drJ6Y3B6HPm6cTvXWaeszcr4tXhHmG",
  "key25": "57uaWRAzPQ7QkFhuQkCytAoKrRyHJ7F6vnaPGvZz1D6NCWjj5ni68TSNBqyuAixG4Wqd7zrhybKRL4NYgah744pc",
  "key26": "3rPVzaLAvMfpeh29kcMQHuveVco8b8g6wwDVR9dLxRoosiqMHphPzkLz7R9Xmv7nNYnXE5nNyBXD5T3oNuisHF6p",
  "key27": "435zPeW3aMaGHnLTq8k4PU3o1gPLrGMZn7VFvjPtxZWR8FaZMmRbg4anmnpJuvzpAFTyRiB49MrJu5fZo72Pvriw",
  "key28": "opihZ9yc6KLy1a9DFr2uu8NBg39LGyg8FvT8mLjZYfQHK5ApipF1dTKUFaAKBamvQ9nujLGzsfHektAjdkCDD2N",
  "key29": "3EzFhPtTR8dNWWwxZcQicMsn7BUZMWwVQY5SgTuMt7gYaXZbWFdN49DAqm8cDmCCreLLQ8y7ZXpvaa9jjNMy49cT",
  "key30": "5XY6s9G355vmpb2tEW4KAsgtYge6vMKsockGLJVVpz7FcYfnPMKp3pvw9wCwbzUj1f3HmXv1tBuRyhdny966JrKq",
  "key31": "3zKh1WKQNtHEuHcDtenepW8pzeQQKJhv29AfwxQh69tYjPLh62trSey7jsnpfpxUi2iURjMLjxwpHLAnFzkMzrUR",
  "key32": "2r28NRZaEm8GUcR3jVZB9WgbTNqTe1pZmiF1GW7MkD2xxgTSMid3Uk6NyqEU9iL4J7JGUnA7cas66cL5UuxhbsUs",
  "key33": "5cSZxLELQgkjdUhnzp8SFhcU9vxZvCNBY4Nd37Nk88CmDRSH19zGvV9NF5oWeGYcJRpG1MWberGNqjYST88tzjaC",
  "key34": "3WeqLeRRitm9p6Xa7e7uoMyNaKHsD97mENNwn2D3DTh7mRiE7t4vKpvjpnQpTR2ot7P2v8g56hyagp22XXcAmrW2",
  "key35": "YDcj72iR5ihvDHrAiUP1M84M4nTUMfDxiPt15MGgBgFJQ2NqmQbhGheRLu99RLQpkD6EJ5ZybEk6p9Dy7iKSvbw",
  "key36": "2PYBo4pJhzRVRw4iBMgcSBZ4EUgJcvvZdUDHqZeD7ieq177cBtuwpyhPHDydZhfeGb2FkYFQHsXhrP2nv7kRXwCs",
  "key37": "2vALaw8GR84BhedJsNJ6MhJnadCmkykF8GTdChxyuyTGZGBvLdQ9fixwraanWc9dxNa9EuyPdY9rg8cV3W9vr3kP",
  "key38": "3N4KXVDZLn9Xpfdcb4AxYjk6TR6WsHLmdPXXjLnk5vwAhVEPtgvQ78ntgdXRLvFJ3yTtHTeX3XRNUFbphNGUARFo",
  "key39": "2LgmXY2HKM6KHTAzNdgawUdWrkUUNtQputXvFXNZXGkMJNENfBnFnrA5UALf1fXvUqn4TxXdrWDVWukcHc7c4to3",
  "key40": "3XBmbnTDADSXHFgiqw8LqWZge8qfvg7PkFsErNakUedPAKp9TXx3LwdhfwQY1vvM1dA7NmuVUBMvrucGPymE5gin",
  "key41": "5oqgb4pdFuxtbFaa66RmDbrX6h56KR3RgjjyhL1YVgrNah96e6vn8Emb4EhYfbh1Nvj2pgHSrDEGBpj1oUC9mDQc",
  "key42": "3Ewc7PYaNvJkSvuJs7yDWfLZLjQitfCHw4A8B7RhEX4aFdFZQUWkYAsJ59QZYE6RpdfcEpfhMmr4bnBDWe2RrPhe",
  "key43": "5grBzeYSEBfV4GNBaExW4JHENdHNKTFMxaGVrwJdwBQW3VdHmjFCyT1torUyJsNScj1tgJyRzWkKy8AGep2YDvXu",
  "key44": "7mxf4mmiBvQSYQUC416mUzhDxyikhmPbM9AkPw9Rdakcd1R41pSwqvZ5Pc8EWbykXEenLRQAG5wP9V931Xnp29R",
  "key45": "5pUEowdVCFcbbQ3JdbLrXu7t9fWgqyeqQJEGfiQKyYwU3gdN8umVZC6TFkQ7WAH4rmfMoNA2UN733KbBDmP3Tpg3",
  "key46": "3xwNTpj1ZHgALPQMi3RQmKJeCTQKRvmnpUzEUDT9d8GmNtP6jt9MfPnrfpGkHrtEMwFeurUXLyZDjJUBjSn8tfau"
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
