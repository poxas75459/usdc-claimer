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
    "5JtPXZy8unjWw2TxoSK65JDbFGFfVT7McBxLGmEZ1ujGUVQ2yXk2D7HuCaVCHv7V6t3xgRDR8r9c7pGY6SKXc5br"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i4DkENjPKc1VwKCaVi1C6Rw66TYnsXH87UjYCL8ZCZhkhmoCaBKmJZpHHpQ1RipHSNraVyyuvpcjr9xHiaqD9SD",
  "key1": "4SY3XH2QDTtAJDka46PN42Kdtc7gJwCbSp7yNp94qdkbaAewTbJM25X9XM88JfsbHBjcZ56vAtvhADqvcnnN1Jci",
  "key2": "2S1JDhxAa9nJawVdX8nQUHCZZ18NdQnFcgyqNNWnq89zhvegc9a7XvS8bEbfGw6z8kDxXDwdoJFK2iJ3MykAb6EG",
  "key3": "2TvZokAGYe4DQp8vi3uXbXTxfNSRs58wgbHS28nvq7aQ5XQ8C4MnFWHW3bpUW6tKRwZ8fCPexcy3J711xD54rKsN",
  "key4": "2gixep1jZ9hjv2Ndunt2u6YJ376ccpGNdij5BMpsvF6NvCjr4RoYrackE7HZu4MQv4q9AUBujB13oWU1H2WehhyA",
  "key5": "3dasExazEfMffDTKdXPo8jTStoR3jnt6nCoTUcZSGzHmdxXZDtEzCMTBdtMCHeaymgzBztyrrepxfASgrscRwu5X",
  "key6": "5wBR945V8xA7KLQGaMgwtWNRQiEc24mV527cS3QhzAhguRa91d9xTarjUfkxYmYGTxco1rkMYjZpZ4Lh1QYHPJCU",
  "key7": "2K2PvNwXRTUiBN62YSRb8jEnXeEUQvx8jrBDpJnKACvSuS8Rhr9rqpYFfvEsjYcSjVLgXEYAvkuyrYZonDeKf9Yf",
  "key8": "2PdGep4LByJHREw8KG56aaManjUfLpVzdrmWBfEXXGWiQfJHeEwEqDkjnpcwe5Jt4U2ipbh6pZo66nQYav8ZuSfM",
  "key9": "4amQa1S7uq6TDMiHdXxwVa4ovQLt2gaLLaYjSEK6kbfzPFq1aDXrCVEVQvYbLfW1XzgKzufjiHaNyg5TRJ5KTGh",
  "key10": "ZJ1rpPWZ3XPPia4r5WLpbot996qwVLuAZRmG6Zax156hfL1WEEgsvCz4NxdggorRwM2Vgwg3mvASt3J8uw5Q4e7",
  "key11": "2FMZum5tG4sYy4xH6VrTAPHsmipUxzqPiu4f5EHopvjptycvoK24vQzjy3cuVA7osxSZHxdfUQHh28JUHuN39vGz",
  "key12": "2Pu1GQ1miesECsv8czFz3vmCM1mA11wGEg3QVesws8wj9sTrJSVUzYbPmLcBEDgpG5r1tNb9HbRUXDeQxuQT4ZxR",
  "key13": "5icpK6Dj6g7jp2oF8fMEzyJvwXEYRsXHjpqKTfMkeqgG9CRJk3q15xdArguZiHQvgMrfs8bamvEamuTbNoEc4P47",
  "key14": "3FNs8SbTyr68GWU3HLznxcRY3Vy6svh7ArvSMP8PdF9QUcT7EAgQTM9onVP9c3Wy1bvJqoV1cpD3XANxsdhHhc3y",
  "key15": "2TgrLYs3dVUjFsYvaaekawRTwq3zSfSLYQWdBDQPYHMUJvrrqH9xGUnKyCTFFYHR4MkYVYDu5H5psJaQvYyqnCUX",
  "key16": "54z5eXYCBhmx82kxdQaneFmReYMaC6Vjyhgd7aQqVabb4EeYjZt7otvVKMqxXSHwLjx8nD92Mdp3TiG3XJXv8Tfj",
  "key17": "4CXDA2ZdrwapVvXG63s24eB4p2PB6whJGgkGYXxH6tDYFv11zb5MtgSmDV81p97zRKUtof2rTCRcmqa6Vd83di5G",
  "key18": "3EDj2mEif83eB3iGesEC8u7h7ahKPSHYNhJSq968TcHeeXyBug5qGjYRRvw7pJr8w4FvjEsBiLRK5JL6Yoahgovq",
  "key19": "5VxVjgrdnocZEKeFPbcoGXu4xBbif9udnZ6iSNKzbXcgL7Whj4EcWNhrxfpK3PyEE52EQn16hLPKLmCUPrVN9Vuk",
  "key20": "3mL6RhXWTLedGbuJYpi9JyHjJzeEBrudmYpXqCL574jhj6XibHB9PutHpJjD8o6tGrjkvHnJiqS8FidXtTnNMNF7",
  "key21": "4Pt2UoDTE7LVZWRt6LAcBitMdegAJPMZ4rYkATEEvJgwcCnWQABg3Yxp31yFLa2qmRHD5hUbArj1oXHvcB5QdrdP",
  "key22": "4yUZjsuKPUNx91SsnZrX7nHiJ7w3KscyGBammQpNd4yGBQLm1NDKkkh42jPxLbNRSA6zNab4G3zx5uD1dvVmgX5J",
  "key23": "3CpSk1xEcdS6tC6P4SPBR1rMf2Ep7qUgfjZDEJnkEcxbDFKwZvFQAQbAp53iUuMTHAc55zA98Lwaegxuc9MJtnsf",
  "key24": "4camnnVvaqRWvzGkGsJUe2MBse6TWqSqmW3pWPSoMS2Xdi5m2Lzi4cgqyG88M4DmgTbkhjnpachrnVa4X4Hrs2Rj",
  "key25": "39PFomxw7qTUh32bpVLQH6uadWaowGfqEywnwW7mXKVD2cNqazBw9hz7FoXd11DTZx1xwGJYbuovkEQGtJJyYfCK",
  "key26": "2DyQJrQ16x4AVj48Qx3vDvAB6pNWRSR8QZj9WoYvoJrkq5p8zTvp2K17yQzwiAAa9zKLmmX73cfjV5Y2Lk44SbfA",
  "key27": "4PWTauDicQZeS412kygr5AabLtJzrjfzRfDFpGo4ftfMEPamLo8h6BHv2dPpAQxjpHU3vKAhUwHUGgbs5Bn15yWi",
  "key28": "2smqQ9gTy2efjY7vt4keJtGLjGs1PgGitrXs3YyVSPo29vnQQFoBpHEBjUf4Z5XHgk3P5hdpDVNqBFyHhkrchFAk",
  "key29": "4SjzHCv4rwUfL7G55SsakLZw8WyNADa9AA24UDGeuM5KAFNrHB2suQxGDWmvoiAHCF3bLjqrGYKi99HXacSGGnJz",
  "key30": "5DKTygXJXj4D47iHt8N8Ld6K1RrRgHoegPD1pmL7S4JXv1kesAZ9VJ86ouj7PJYL4mh8cEn8aCdcpp6JYKbwQmLp",
  "key31": "3ixp4wMwKbYWPRebw4NGdZSfbHmScdaht6TaQbMciTrNmJrCYUtQAAxBhfMYGRYgwUS32hXVhLtUQdtH5KiVa7yh",
  "key32": "5YWKF5fwpYgn5XRktq1CXoeYPBfzxdDvXFHtZp5SbkJ2wJrzdxJ9p9R8LaZ7NLmwAMwWrAMpHgdwqkvzioqQK5Vn",
  "key33": "K7rmDu6MVS9mgbtL7Ck6GPvcdTC1vo597kaw46qeSqPi1EiqsjM5ALz92BhvcbKZxQniow2FFSa5TQB9RrURWE2",
  "key34": "2R49A5kQatHuZ9hXdDFXqoSSAK41riCDjjBijMj1QHxztKgxnyFG7EVNgNrndfSmCc8DUKF17i2JnDsPTg7HE7Ux",
  "key35": "4QXxrmU7YhrSZuHVxgA9eMSkDB5NhYTKUvXoXqGZz9KKbNbKK2utjathcEcvZhVm68dSyJeurWuJPbTDsKMej8mS",
  "key36": "543UrTZ24xxFa7qqu4tui6U5edb8MPPVLARBHdmDH8st5P5HrWxyLNd9uBynZKZ6B5kFzUUsefoQRf9QTx95UYbQ",
  "key37": "2yFtdYpuStJKtNdtJuBAEfrvbw5NoB8R2w4oWFtMv9YK68tBGGDNomuwssHxrsWRL6L9PrtHRWbXnhaLpwnU4DdT",
  "key38": "3VwYnbcVNLrwrysPghKxM6CvoaVPkn8hSKB3DmQzgZz2rDoErfxkfP94XCN8eSW2f7JGqCwSLDnbyH6Vc6W93WxN",
  "key39": "33exYkEwXCtuAQRoyRqVkKjThHHsSr7HfoB9E4WqM8FCT7BuVC9fov8mjMDEVoBESizFMvePMk3f32Z8EtHtHmfP",
  "key40": "2YAHPy9wnjTjGBpvrL8MdtoPU1H4QhyRT1pWqe8p4SXbKvYKHUyYZikyRQamgmYxLB8UxSyCXeE4h9kTtfatobWN"
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
