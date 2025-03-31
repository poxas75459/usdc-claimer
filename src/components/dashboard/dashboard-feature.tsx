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
    "PUbGoCKCxrDvkkwnurJ92BEEzfsMw6nkJz1TDp52bcoDFNW98va5XXUu2wkcohac5Pq6qssGh4SozhW7karaVv3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "442Gd9YFsZc86LhvfjNhyHHbCZWioYvRJpf8tG9tWmUoeH4oJJLfCHrY7Bf9VPEtYXSyn1E2LfCSVWuie1jBYE6a",
  "key1": "23bctJUqrR2Q2UQC4w5TKKupTc3XpeDv3A9Az25Q2zRBadvTEhTsNmtyApSUQogQn5ffKaVCCfXMqN2ivfhXAYpJ",
  "key2": "3yXYWDqh7cMnUubHWshGaXjcw96oZFRjqkU1eU5fTrmVAX7ocELFiaX8B416ccJ823oNLXtZzfUjPSvhWxdKkKp8",
  "key3": "3kjPaAPNT4wgxVW62A1n5eBuzJH44nyBQ89LiDpi5RcQhqBnPLhGfVLQzmjrgSznXHAfapwRUeJS9BpDtzV7pDpU",
  "key4": "28my82C25w5SkqKiPZmWm1b7jk4uNxvqji5xiPeDcWqHwwPQZrJeyVqjaLVF2puJjcVXXNqxoT62BXbBz7wDZh4a",
  "key5": "5RtjtHdUvpqnotRpAUQLJ56kFfMGqq43HtCTfAo6XHGJRLdmB8CLX7TfrjRkUXLdavqwc9aNiRxwaQy6sFJdtpoC",
  "key6": "3Eega5NDfN4gucir6ZYZ9TieJCeqakXBaWPPTbfWP3J2Tqgon8uobibMAkrLxdzb2BHCqANBovqzgpkcRWqPa4Fw",
  "key7": "5nep91S4dtXBu84yZUdcbs4RtntihvLRoRutRuAXDaM9Te8GoBEZD6Snmcs8vSKoPNjH1PyVRuv5hEQFLzJXU39q",
  "key8": "Ky6T3EdBe1bTqMaRzuZdGPeXj3en38Y42XpW1V6E3tKUmmv68VDV9EQ5uudgoFfY8dDQioA7GySiQLk5YmGnm6x",
  "key9": "36LPqDyksRAQAmiCwp3wNuULNmeStHCh9j6Zvq2fZqDwSo9ZBxjxyZbPvWwh3emMUrvdj92GzXC2cNfzxxNRcCyw",
  "key10": "iWVMmtb1DA7Kd3bi8f22PsMA5yaHXs9m2TfvbAmaaq1drJuyV29nN6dQVMzCConEYrCRkScFmbPk1D8Se2nwNN1",
  "key11": "3hLjPA1fNru4fUzKqA6ei6S2tZ83oCobKiUGiTZy272XRzx8pSkiaVWguSnDmRwbnXUsx5JaD6MKUTbYhHQz4Wd8",
  "key12": "4dJLJiE68R3G4G7bk3kDSGv8hEnFePkAxK5WT7kZu5S12FsjomcE66ZdP6xuH6cnN5YWtB3JpzTZ2bpmgSadhRWx",
  "key13": "27Dfdv8nSPYyk5QPjMDrZBv9ZQGuaso5u2N7uzHzhDWetDSbom94Z4y1baUzVBxfYErWZT9E1PzextStWYLgrmTr",
  "key14": "5Z7iFhePkc61uDXcX9EtPtPfs8YgeDSkum3uUJSqpabPr52reVymZ3ra4D5YVfv9cEoDjRah9QC7rp9RDkDmUNrm",
  "key15": "395oPuZ31MHCx1wczpDS6zKXgm8ioXV5xDz4p1LzZQ5gcQ8GbWxJPLhLjhdT4KzLxF1GwhYg6MWDKSn1cXuF3E6P",
  "key16": "5osh6UJTkDCPn9Jqjxid76K73QyeHSqw5RDJDJuqx9or2zpXkgowvo9VhYeoRcJPpuPLcJguLNxvsksdy26USDz8",
  "key17": "4VwGjyR841UMDaLP1nLd2AiSyte9nYRtFBKmYxy8J1r1mATF4BW4nS8fk8RgmYFnbJf9tfYV44epQNUtfGxvfhYq",
  "key18": "3XjszMWZ5aJyUY8QMPahDFqrzEU9qsaWrk1zCGoRbuMPe2BvfFFY7ZMktQ88oFzZb7MzLsVans2rRq5V8uGkVLwN",
  "key19": "664TkVJ1WNaADzsHhnf8NRx4tUQ2sAjXFMgZicnNDLVWGjMM1aMEKEck2QSENms54roqiYsu1PgD2MFRf9idEVzy",
  "key20": "58558JXXsFk2ym2PdDG39wkq71QD4wufqFvgGExEYCksRcCmk1nYXK1sWAK3eQbpa4AUiddYt1QHSjDxgbuBVn8u",
  "key21": "2khZhVQCPhqqKgKAsdKo1g7AHhu9cEvUzRh93FSL7Cs36foKgjxE3Gm8ZjriLpMG482pYYycuNEgS4RBY4Pee7jm",
  "key22": "4V2b8TQiuG3LcggkPJkek6DJb2PHXxYEVt5rVGaRh8uNzKtJgL4GxVZ2Aq8QcuoUHafWK4DYvT6zA5MeGQjvAX2S",
  "key23": "B8vdaemuDgZNscuYYcEg9pz1CfSHUECbzT9iHYPNTgchdhTVFApUxVXkQy5CMX4Ab5NMv6UjAbyZiW6uvzrLdhk",
  "key24": "2Xc6dv3CK6HPVUFRsjah4dkDrZ1VUPoh4teet8mtCsUHBzbfDkhdgFnMW88PDsmpwhp7t5eJJnD3esegEPLsSTqW",
  "key25": "22S1iArckmF367s1D2FUuz4ynAoH5Nokpd58uXS1UxLqGCwnFLfWoARzpGN9LcpDBNzLrFNBNdueFjqsDVdMjteE",
  "key26": "2NwbGBF5QdhgnVdgFJDWiTaR4pi8t3ZYeA2grwme9RMK8LyxSJdNkApnqcNFXHY8Bqo2jq34CC2HrLAWP7WghCW2",
  "key27": "5ZF6c3kxAPXqhL7imsF4RZvfc77iPrYHUqBVAFUKv3vCB8SSWd7qQZMtLqLnhdr71JrPJCCL8xEJjnAPiNsgMUFX",
  "key28": "YpNFPCgjkga3qvrvjujX1KN2x72npTUTBAwgBYsEjCewnGaJ7Hu6rKKA7LgHLaHjwztyjeUr7oM9ACQEKgSBGkR",
  "key29": "2VxWrKtXjr3PfXFNLq6DCBkLrowpFQ2MYTP8BoUwPdNzMJZYH8qrvGLTxf7wk15dPSRt2fqyo9wq88AV6jqVHrH3",
  "key30": "2Q3SSuJVh4MNVfwzxJQAUxX2vddKx3Mqh1u8edQCabUymtCVKgS6gG55bxV9kAhVA2c9pxKP3HSubtJ9TiaH8wou",
  "key31": "4Uok6fzCssBur1BvMwFcvHGZFNDgEbi5H1JmPpQnd5GQjD2VpDXzT357j2T7TRqazHjoVh1KgFiLT7pZnfBJhYPk",
  "key32": "4bU5eNeJ253JrNrjUVw6nicfBmVb9afXR9B3M3UrH3Nv8FxdszkoP1vq4knrBQ5ry1vYpoYCEtTAkeVzr5N8neT9",
  "key33": "5Fq2CYe3AQfB2GcJ1WMFtQSNC2AFeE3bYyej7uPbhHAi4RRZkEdkJxeoVnthisHXZvQUPuvoosj3HhuoFoDufHDC",
  "key34": "579rLd3FFYE5szsVZp7F5YHADza7LnGwchjwPTmgkj7Ug9p6ACXTvjj1SmFSvfHwm7azm5FNrSCdgJM5Coadche9",
  "key35": "5FeW5XmEiBhxguSr5pQR1Hd81azJUV58nzNPxgxAj5jPno9CtQhb4PBBE8AaoU7YRPXDEG4Z85Yt6ZS5fDQ4ty3A",
  "key36": "4BdFoMCaFUToyUoH8qW5iXnYFLnsgYaUWZ8WM83gUnP5CNLzvf6iCkzarZZ6FgvHPGbEMgDHudRntL4Sbv4vqzu4",
  "key37": "Adpx5wjK8A6MPX4CMHyySCE9FQG277bD77eMjtSSBJT1MnX1vcPwXFntXpU9YMxAadzhMsEaCx2efV7VFQN927G"
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
