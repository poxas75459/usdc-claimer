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
    "3nhm4nqBXvwvqT7mRKsHGp4M4CeZkBzJA2g4KdzrYWzJciWxHXJjBAPUfRsunGWqZeTmSdVR4PPSLzTEe3ogmd8h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zz5FsFpgJQxrn6kzK1KSF4fk8ejqcQNqsSEJB7xwS4aZ1yER9tUBhh9Q6zeN96wy2VQ1udFwiGPkbsg8Zo8VFXT",
  "key1": "2N1hUzeZyf8vzZevrHVQmKBGPbsnqJkGVZwV3Uy3teorUfaQSAL3bcjKNdWguchL51U9AqsvCzDR3PgRtyEAgjgm",
  "key2": "4DujCssWDp72QvB1Rti8WqF1sw5d8Jw775U22xzy7u6vLhUhx39WX7dtpS2T216r9kWBaopLpz5sixBrxjrqqoCk",
  "key3": "729dL3zJRepxoBzwvBqPpMfLqznxm89WNpndgEBPLWHkyWuLiq3be7aRLPnVC95gXKG5HehZ5F59vuqiuyhTU9c",
  "key4": "3ruJTby6GtHG5TrASMkq1pmYYxkEJLmwacb1GWajTgscbWkLFDvuFfQXh2VVfbhaXkqaA9Bz9pydrTrNArsk4q9Y",
  "key5": "3NntPVVeakQ9NGPQZBWNC5mnRm7NNs27UgXpguUbZdzAnnZjE1Uhn6rd7r4AmFiffTryK2AqNQa1YSjFeUVNtN3t",
  "key6": "2LJkUJL28WwJN3kCAmwPSaNBEpDDVyyssdcsQ353s4cYi1Zu6ZHC2efWayeoVKo3sLRwyZZWAE3c64Fe7RQ8573u",
  "key7": "5YwpNX2Xzp8CZbu2pchqXeuY4NZZ3K9GvsmU5FkR171uQqZem4dqqNYpmTh1xJxf7fLrMV6x6Q5kHfR7htGouX8b",
  "key8": "4y362uA1XqHMb4amRZqmSuE2RdHuA1FYHvQ9ft4y5QdAsFRjCXfBLmrmieDkYeKiUM7MX2GpnWrdZN7rLFQ3Cc5x",
  "key9": "58Gf5iDX6zmByYrYZ6Zu5fRyasDkLyK1Yce2wXZ2JrNRbPojEC1sMczntXXdQ78Gi9FLiy5RDEdf8xajnmeC5htZ",
  "key10": "4AtxUMEo2jEhNdN1hUQnrzXJhm4MCB1htH1MpHPkacmW1kErBrojz84SiNNM1dne3jZuxxLvWoN768dtAwnZkCnS",
  "key11": "41KjtrmxMdrcB6Ad7MVCrcdzgiqPF5JUUaaj7FCJeUxiQNveeuwgbLVuBYEMRQFqu3HhGqntM5QPCKaMHciLufLo",
  "key12": "54ajja6Liei14SQfjDCUXGhwfthFtRugsEnw9VtCt3e3UECFYoJAGL9YKz4WP8LJQZD57MgyJ6M7uvNp8UkDdFie",
  "key13": "gJtyZVdeJYY7F6skrTPh38GHYjxvrP17a2cPFe6vxKq6ES3tsuHHBWDehQ9dwEg4w7VK7fYqdSEHhS9goFcVPKF",
  "key14": "2rq9paKuqpu9AzPSUywb9VCRyF39hroHvHzsvQ93shLukHy5PcpRJ3FvBT3xZpPW8xMbu43qBLM815RjHkEK7fgz",
  "key15": "2v5QdYBA4zh3JBQygfKKr7PdgXhEH4hsbgVTP8WiCnBzeeavGGi3tUZxniogoQEAg1tYnLH84uzhvBb3PdifnXr1",
  "key16": "2a8aL29JkgV9cfdV3utb5C9G3Uvy8XADv6cLcVdg9BZmPiMm3HaCcwJt2C98zGSnuZsyKXeVJMd4uPysmbyRyg2Y",
  "key17": "m5J6uLDmPFH3NacTxs54iCHHuuo52AYqA9AwjpRTSkaZnd9ciboRLwHizHiT5LPpewcbJ1248F8Ga5qNGvo1uky",
  "key18": "cAdtyLdfhrErCLVUSKCnQnMEQg9MxAA1PxcaghSZcK4AY5fkQ7j4vV4GNkHJxUZ4FnJ2zb9fW5ZqwSEePGnKixP",
  "key19": "4xckmQqLWfKuKBh4YsZdgxjPzLiQFtEXUts1noUZ41rgyi2qvMpCNA6uTFyfmEBEGJwYiBfXY4pWzQhy7pB5fVRM",
  "key20": "3ZXYPHvGfJkfXrfKaFbQZ5SQEbrmY58aK7SmtaXWBwfR8WaQJ3G4FkNFH4L1qA33PuDmwKijzL6nQ7efZHAKXqhr",
  "key21": "wb5PudVPny5PgEmPsgQeDsahDLzJoSiQvEupG2g6khh3axqhwKw1TWmHmbWU6AV4cNaDyszPhJcag8u8gFjnXAV",
  "key22": "5VJsxhNsiv36aw1WxTKXBYPJfGaE5bK4kZDJ4L5XEREKCqAX48KU6hYWrD7ob7woG9q8DQAvREbzKDiviRhuMewN",
  "key23": "5ZJZj4U4jTg4THHj3dxvnT5hPgtnGA7p8VmH49uRwfLs31R12pmnbJFL5Tj9Fz22mfRT9wavMyYXMawmM99KMeAF",
  "key24": "3MJxPx1Ak9BXFPxCLJKYBuHZZSDEfDLuaFVUwyM3iZDfGWV9A32WGYqccWJDX7dUteZBqwZJ9h8D2vCKkMuLPke",
  "key25": "4apncPDqkZ8uUrWpyNT3bMSzNFHZrasTzpbF1PZm88GtCqYtDTLJYjBTKqkMoEVeePwyUSuta52rdkBgf8dNviHT",
  "key26": "49Y4Logn67GYoMASxhxGsLD2zT38ZjxaxmcQiwCMVnwNcXTTxYqQ1WAT7WQ7iSLJtXo27MgAJq6PYB4Ke1jTnZ91",
  "key27": "4a7bYw92bevt97jL9miJNbyEcDJBMKN6J4CAyVUSiee4XH8RL8fRLhn83r8fasAy4xcFxrtHXUsXHnXTgunyZGhk",
  "key28": "61i4dW4MpAW6aKUVLoLYcJmMiDJMKE7Bkeg9VyyjVaFCoswh7S1eJLQmXMZLnanUof4Q8cM4kF3F4m1hwydRkaWY",
  "key29": "3YzszqWfHeVwNsbr3kD9Mbufp1JqUjA8Qbt8y3SWyaYh44G3bNb8H6DWie3UbR8JSRDYhUaQ8Z6sKpBKRfLPxa4M",
  "key30": "5DeRTfyxxzWJB3zMgjfyBriFJXkK9eQCVEQsmzStuJbpn737BRojcoX1Bsw1sRz9W5QWp4Vd8Umz9M5ix7rvBeJz",
  "key31": "3W2ELU4911ZR97psmSmBLyNCRDiDrHnSDf9MyywHwtkgZCKNx7fEgkDQa9rrrEVT5Zp1UdBgne1YBNwpMxjKh2ST",
  "key32": "4v1br3vQHiFiyvDsEebp3fy6m3afLWKDWzwC73vDowPXZ7vchVrzeEaG7yfUzGe3xYzzDDDAS1T83YJvbRdmCfKp",
  "key33": "3fEgAHCvGcPXbkmMmXd4ifFBaxdqhLJnFYRnUGdVcfGbyMD6Wfac7vRGTVpRdre6dyHeKyMa6oCsj9unADu6mWRr",
  "key34": "64yp9vdPbTJ1RXECin4dwcsFRviQEe9MsTSRosnjQz9FR9Lf3AvyiqMEQAJ4FpL6dMtD8i4XPWqfbSJyWxxZuYsQ",
  "key35": "tWe2P5k6zamXUAbgYifBjMVwmdxqEyafGjmrmMNS3rhSAEFmi8hW3LC79toZVRVS4HDpSH4cnoZrpaYnCeXyTCd",
  "key36": "5hDA5T8EXmoQTt7Y5ubdLDApN3ro7VqqDHg7YshDFKgQQHSnM6CWNuAK4GnvPGkF67gXHqGEdtoMD9pPo5ymw278",
  "key37": "2X7Ey4VBgDjU1msqH8bWCE3KqMKQSQcgpGx4hdHC3QV53aRc87QtfEcNcvRqjbTpUfLPCDRGamfEiaL4RYueQt5d",
  "key38": "5qQpscpJa29ycPmVKuvdMgVoxfRsNsHWJCyf1rKnLwcqZMYoKxa11K2VpDn15gqRHj1hZvHHjGozip85Hq299Qfw",
  "key39": "2coEub3fiHhhsoszmGVAQnNcWMPYWdqc9oh9oHWDjpr19GH1UDWdaHF3RgJTVgdRWxaregsqJ8vQyUe4jKtYS6pR",
  "key40": "39F4yHFSVYVKWs1Uh3XMy4nLczd47BwHnfh9GDQ6aDMvULj2g3HZAzTRMx6aMrXqDqcoMmc7mP8NRJcJwQWBBnes",
  "key41": "4b3HrUwee8APCViab4pTixCAGu2SMrCHuXkoTJGApvPcSa4R9zVGkZQAEYZUmassgtJk4m5D13B7esmGbRk5K9oC",
  "key42": "4LnCNP5DT3D5r3uCc22Z4JWMdTWNa7uHziCxVmH2CBpg6kg6CdzJq29ieD7kMRe8p9tMiMTPpceFkevANzsLrC26",
  "key43": "5Zsa9a9aeL9G6wrDAyihuuMAcjv1jnp4syPNmc8EtWxHnEGvfqMneqGpGMnPaEa8wY1D27YfuTAdZFJDFrbBdttu",
  "key44": "voRR9ZBBT6vLErARCswQdnmdKSbEVUrZgazRTbnbL4F7iaBmiBiVdmW5cGSeYMGhWC7YEC412d9xk5z8UGooC3c",
  "key45": "3Pznr3FVamckRq27yDcz5UrXvBzC5Wk94C3Y62ZQrA7bt6HNtdKuMhzG75to1afVtwDctj2pfkqxoWH4iSiz5zBa",
  "key46": "2tkBfLS6vRg1LuPyY7N7cGGYgnMNhDmRkxgggRnSXeYjKMFbb4J3A5DaJGWchd5J74TBtxSmuLUb7LF4rQzNqZLF",
  "key47": "5j8WTUN8JJ3HpzHLYf42gEB5NJvnFCf3ickZaJ11KZzYsRbBTB4mS9q17nbfcfgofP4mncV32rRQw29U9ZHDvZ6C",
  "key48": "aMhzqM7jvMBMoXd8AZ51a1X5sYoJebBJ6dCFr14Q3h8DGe3YyMDXXxs254CysNZJP3SXaKP5NjC2Y3b946vyDaL",
  "key49": "5J3fzyDN9LVHEMMsoCb4SeESAsV4np4XzbnCTwwG3axZuhnnctDAjqU5ko8PYtnRijHAR3okTr1dZTZcwKaWdDpN"
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
