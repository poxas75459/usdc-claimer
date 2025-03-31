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
    "2fH4xZtpQ4JBXgCFW29pNSCSQLZM7wvk53GeAquW3tDWGWJ8SJGYx66UUJLbaGdZ92qsp7SYw7gv3ohAnVUdJG4N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aiUBtYxYbPdp5LmpmCJSe6Jx2vWpZrRKgGhNwyQCNAMTNxom8aysp3cMdEsrygr6gkY4K2KeSjh5SyEdaN2Hm6c",
  "key1": "2QT4ngTKZj1Rwe9Fwa5Nan6TrpEbW7Eb4AaFgrbtr7fTk6h6YwB3sXRfS8fQ5poLn7q6znCR61ohyNVgxzdEjw1D",
  "key2": "67pCXj1ZhA2bWzZ9k391QKGUYF6hUMTPEbFR2krsjppdkFn6AEDRaAD8oEXoa13jco3aY53PmVKujQmog9GjVpJq",
  "key3": "21QChcGqdWU5ZMau7CNbq4GHs87AeGETAgc1MCUMBDJbwApunA6APzvnZSA43jqy9FFQtaJRZ3QjQuRazjJ8pBRe",
  "key4": "3SbkXeLnk35U2ECWYuA3eBCTetHW9UEdR8Gy9a6GzJLxHvESoJSQ4EN4VTyFpFGEWtejobe5AXfKKFo2mugA7puE",
  "key5": "eDrKojuZcZCN6bzyp2WDipJYjV97fACqoRDkGDBhCYUSJxhr3eAHbB1NxG87L5qY5sBpd9urQaZqXrKKXsWnTcZ",
  "key6": "42sY3tUbPQvT1H3SDcR37bzPAbCVZob5zFGaaJhbHVnsQkNd1L8VeHvuvZPsPKLsJPTirQhdj94cas1tsqP6aCB1",
  "key7": "5gMf3QbvsGpyEeDJ4PpWXsEHPKVCnqYnC2cXQN7Y8A1t9tFi7Eic1gTrQz4LX3FhhKzGxEjsR1puwhghdGQSrfC6",
  "key8": "2LvjtowBF2LQjgiRtR2AiEW4CeQ278H7gkKmapJkDPZZuKrVHfUYwgYkfmWuh3Tubx7g9eEUNMRVfk7Q6Dn5oHZT",
  "key9": "2y9R4y99fV9EZcbZhAsEX6bJmCkQuPyMoEnvS3JhqYd23qmoKkzHYkD34MRazigugGyRDwXDc6idiyQgV86Dmegm",
  "key10": "4zzWkGCwutcwfnKWhpsAKQFLiYvefuJfDbRVtiJkguAhtqi1QNg8iLzy57MMrqM5vKXxvtW2upnSsTpCjCcu8Fri",
  "key11": "5PBNqrXg4maLFfEoDaG79Wawcncd2bBH5MSvNK3nTh7hLVyCYgGriRbYe2r7d6QwrCu7xZnK3Q8MgD2gYa4opHj2",
  "key12": "3fx9ggMkAtAqr1QNMy7AxijSxKdNvDsnLMTBWhPCiXESsRrZgrKDur3tg6HPWnJMST2Fn7LrHFXwuMx4q7ExoFfK",
  "key13": "65Z8F68bGgEq5kzaSQDYBKzwjhe8KBRXXCtkB3bSFe94fdLYNPtQjD3zWoR2SngQpb1QMWdzcHtJBZxe75chkaxx",
  "key14": "2sRDEDKacryMpBRQujsZMkr7B4xm8TTami7LWXbwt2Y5Eje7ooUKpcJo29ZAD9XGjbcCASg8Gh4sRh7tArWZhHns",
  "key15": "2oifaL1NNvGxPYNBN4VfuVChGESvfdipK7MmXMRWuGnisF31GFhYvbtqGv4BQ9bdyHsXY9vcb2QtuoCm11hJBSoo",
  "key16": "4Ydiv1DsfxboLM26kkYSSG5AVMRQ4GfLZ3hj3d3GyDDu2wKUnHo1aEhhcbdK5q233Gbi379ZVfD3fKAKiSPTFrJU",
  "key17": "2fGf9NWX6i2mfRkBagrCReeCg1sQkgC96y5FGgeHiBnKjsCEQpxMxEL9iKMKQr2eGT3yc1y9M4FKR9FmGYFzz7yZ",
  "key18": "5gRaC2Bfb4TKPo8g8inYBgstxQwE4bcv7hTzjxLyZBHvTgFEvrY1yuKqw2q3wDt38NJrmvF1QnqxqMe7qtxGh7RD",
  "key19": "473LZBNeSAsGM4LKXmukmdt62D3x22tQ4pUaRynwgoyjkyBto324yn1cNx1MsrajdACLcbL9rcCxrbTTpEyGRfTj",
  "key20": "5DdXLdvDFEhzkkyq4pdG6TirhZBBRAtB9ERQyrk1xQoxzcum44LbeDnrcV7Nwc8Vs48a5XoHLXbtk5DbDAZH7MVX",
  "key21": "4MpsK7LQv9xbnJ654q354SoKSC7dShVT4kmMeSyfC67ba2XvvQAjXYBVfKvo4Ezgmvfat6YTDb17yXAfxmV37pt2",
  "key22": "3xqzDpdh7pXAKfZet7pB8j3wLJQVAUrC7BHshNdzYoQk4MGUYkRkoQnggpwDyh9fBKScpUgNx2a1p8pTcpcZtfD1",
  "key23": "4Uzaa1R25bmRkqmqaf5jFkP98Ry2mXLgetkq9AvbhjWeSPC3h5Up92mzfPEvLNUXXtYeHiz93DZFSUt1MXQJi7Wq",
  "key24": "4t7UXDGSWhcFvdm3Vt1JqD35NJTtsQHTg4YewYjkUjT2YEbmcttGoU5P76L98a7WMwUThGAcZ3tj5MjMRuET9ZsA",
  "key25": "3RMGTQusDkDmgN7ESA7E8haW1PYW9JAPY9zTZ2kYP4kto5R61gYFysNx2f4dDWsLMR7MaVhv9f16EJBjG3fAvdav",
  "key26": "4ovMLbdebDJeJd8T2JueqZcGPdESKjqcQXgKDubtjziZUzqtvhyrsA6Resqy2KSeGtzjAyZdgu5BocXdGm65g53Y",
  "key27": "uB2RC31xUKUdyckLj8P5dJYtaEttBKeGG8Y9mtLBZ6RBCKXLaDPJ1oNfDCrPtgM54JCXh9gn8fBiVhCqZ1t8Cdp",
  "key28": "RNd1AQ21APPZ6Y96E23mnveG5UAbVF8duEabtSnucYEjvXEvv5skV3AYKXpYYRqYG4oFup4FZZuQimKsvPhYB5K",
  "key29": "5o25sRF3YpNhLdci76snb7B5Uda2g6stgxGFczqx5eP23WdmcHZMv2XiohzKA6S8gf5XEqQSrnhkqpDAJepj5LKN",
  "key30": "5ViLKPn7B6tAEdrUivjZAtF1thX3F8TghZF1w4sigGVzXPJ9UHqd9qq9bAb6Pg5m1ZufpMjudMiX8bGRBmVcLUu7",
  "key31": "2uvTDBuSzzhrSqADHsF3uZANWHzVrWh1zZF2cCswQEdduPFnPz9GH7MsXchX5nXVhtzUvRhamqttsAT3aBr8Pjw2",
  "key32": "3Pex7CMSQzzUmhABsw25aDQW63drjTTyNMtrKQwfic59YgiBSByWoWnCL5qdoD9chgodgrgNBVnQpPsjjNiLs2Lq",
  "key33": "3KX1Yv7jHJ9r1or6umj9p5K5zCpkmwd5rdfaGuCDQNcNqRrg3AYN1rsNwH7bpJkbKxLRZyPeAqYMKyLhDwXoBFjt",
  "key34": "35BzLaoqAKri2E3AsKPsY6ohH5u8Eo5iayFS9KNzxGdCBvB4qTfZn9FHAY8aoA8CW3LNZCyj1U7eRUDoH8oFqevG",
  "key35": "2ATiHmJAAn7XY3C4nMMWXf6h1Vs939KZRaokHrh5C8KqP57Wkw1aDfAtLM6yC1KPZPQSLMuNHtnB3MjDFADv97Lb",
  "key36": "66qjpyz1FcjFCsS3o5tpPJNzAWUB6cxrgf2T37BhLvNuwK9YwatCGvfz5pUuzLcjdaBMQjtzmJ8223peXZQNeGvB",
  "key37": "4YDjrzorR2GNmrd7KkPz8R8XpScQCpNWgG1Pp78LjJaw7RjSz8MtDu6GwUcCbhare542Fi2TWTovtBEV4Pu2cyTh",
  "key38": "33j16q4X3B3UTCrX8zHsjf4ec71FLhkgERA5WdoSSRNypwU6vE1f4Cm7J49FKZru4K1fs9PJVhurRsFbYq5MxwJc",
  "key39": "Ci4cHYoyJqg77svAMhUz5iACg34Vh9knhkkg77dRU1DyTwCWQHMnNpixnumx4VZzAAHFRLno9jjE1LMLDrP2wQD",
  "key40": "2zPnPBupD8o4pn9oKquc6r7pP4uYAsqrj8HenBNM8c7CmzkojXaVwojVnrUkYTK5g3yAP5ybexvVQgLxtNz9JKTJ",
  "key41": "5uN1LFpXNocpK5BPLKKmYWJYU4hehYuPkmtbaFUXwGnqQCvMj8rruoYbFBWQ2LFcKjpkX9r7yAqutBshbRZDt7Nq",
  "key42": "5Uz4oWqEy6eXukFBSdnHsXbhPzj37gnd2vRSj1eK9Yjs7UrCvLjsqcrJCL6t9EpSwGyWA5y2bmsDYePu69Ut3Ntb",
  "key43": "3tu14WZ6HCzfgonrJNqumFxMcwtanAJyz22it3DqxUVVqWhevRV7jX5FJczkzkdqRmZVCpWuNZjMdXyXSk22ryjp",
  "key44": "4zaiEZDw2aXnzQuGfvKD1fHvbKt65re9QZxBQCS87HZ35SmxCbq3xfX6tMJrZ7YrHWDqr7u8v5yxAWhL2fRHT8nj",
  "key45": "513N4uyEnqJGmJRtGCrCQ95K7DTfqZUdnJmoJYpXpuXw4osXdcxCMtNA2VBdW9J5c8a1EMcrptrnyCkfmtXgY1bE",
  "key46": "2RLYuz6FmnNJJP2BK7Vcndo3TRct3ohQmUSDkM4upce9BWU7nPKcCcsjdmHiX2nY8npnsXVWqhy1FrevUmxGAfHW",
  "key47": "wdcybJDgU1S1yDJpgLT4esK93T3m7mGnNVZ1AK2eH5TSP5hd6fw7HGdNcjbN3zAwFLYfBojkbFRppaCQZMbexCA",
  "key48": "5rYcnSJsD4PhZaH4kvmzAeajzMe52bdoM8V1Y44SzgvyaLXdFF8uwYk7sMCRyYKsoQuyMTkfo8U8uTGpgh5eAq3w",
  "key49": "3RnNsgvw4mZmqPhh9sYvWy9rRba2TEB3nhUBgEA4Gcu8LrtEGxuL3nviosaG4DPhk7fAx4DRuQtEWu8G88gWxz9x"
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
