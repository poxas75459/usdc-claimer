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
    "3SFvjjQMsWxNVzDWHLxxGZKbERGUjGmRDyAwsV6J5Lcd31CzjHtMUywNi9UkDeDcCFSKetJNKukdS4Xrm4azLHRY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WyUyQ6n3QKoZDERctiDe2oWsbaGQBNQu4ZH557uMf3eJjUTD3R3hSiCiNxLn1sQpENG14Vp8uEcFXFcmgsiq1Tu",
  "key1": "3uGJUP4S5jag7dj8PArMsiSxbhjxLXgvnvVLireLF3SsuzpPBfvDiHJ6yKrhUWbBPUAssXaVvZcyANTGFSmsvWGa",
  "key2": "2Xkita8RLSBKKbNqKmK99YEf3Mo5VY6z1j1j45Axjf4motyzqefdKLB9p9kG3XkL9xkZwiyFTBPSLrCGZrCiL6ZS",
  "key3": "3EtXyg2Zu5dwxo4xbM2iyy1qEwetQN69Y6KrtpBPpFZ4BGJU6DBGEYVdG7EmmVFRtZ7DAWygrEBoZQak1j17ZqkV",
  "key4": "cqhvtVC35YfJyggdt9NaQZTnmyUhkTErbDqRi4HUZpmPNEQLBcjHprFJDdVgCKDZH5a3i9kSkMaR81gakNvfKbv",
  "key5": "3JvuGmi7AzXLGMrp5TCx7y3QcY2NEwzDubETKHy6D54KGUxD5bc2dMNjpCp3Qusgzierm6cYCBSvPgAMxHko4sUh",
  "key6": "3eYJhvPBjKD1Vn1rWZqnAePpRN6iyRcxSe3Tip3mESW5rHcTk8mkDAuWxBNpsMRgQU1yHuesGWUuAmjurN85D3kx",
  "key7": "2qC4YHnQxGzxa26vtswA2xRiBT62RqahGrRearSvRPmMftzKh1WggVtKsLvPx9eLo5WMU95Uk5CN43dtDPV4Gzpj",
  "key8": "2gvw7FUzRkECoPgY31aS6PjQZbR9qtuvMTKtoope4dffURxtx2256Loi4C1d66gNUbo1H2ig6ifChW66EJkcq1j6",
  "key9": "3r9to92yd5r8gqgiyFWDmkMKHTvVjpGsVkZ7CCMRUBN4ZFrVVEw5JW8ur7hg1RSHr2scLCNZxsYaYi1XdTDz7ibi",
  "key10": "47Amypo8qF4vXTXXLycHyAj7oBf8sXSNFYyfvKynAnA6Agjty2R8NwB7VQV7piZXDTzBU8bJhjjsVRxEdjzdNpHR",
  "key11": "2NtwhmoD1WrRv1zwRWWf8dDUY3vTsvf9wruuqAg83XoM6bLd17v8jLrVBfAAdBCs5w2ZnTGwQ6fgDjuuf6bmWgWs",
  "key12": "aBPojFobRWNBBXJtDV76tnDGyEaCmG2QFkLG3cKChbL4X3EaL4Ur66ssXCtRKbiJ5V8E9Tumos2EKF6on3jjZWw",
  "key13": "fAZJ7cgepvEzjSzjKojszEujNpyhtEJ28WVjtrWiA47MC9mV7wJHmcyqtXTe8AKN1Xhqv2ZmaNNxNL2A6QkLYqJ",
  "key14": "5JDYvHq1FfHywrK6MShyPeKH72jBvGooNZFnsUXLPxWviSKqxyGBzJejuc41AvXu734ctdJ9eHgtoDNtker2qKsc",
  "key15": "2CnbtAsRaCLvGferVrS8w5GcCWX2anwKdBYDANehNT6TciCji14ohCsABf2ezNYE4yLT9b5ig87y639CDmaDuLkU",
  "key16": "5cf2ZV2hKdC9qkJjELSqdsffK6ssBhav5M373SnTZAzbnoRtebG4Yobr89SpHLdzA3ewdLw8VBWzL6sqrNTMufVs",
  "key17": "64mFzbYSaBPYGNzTvFURmyT4zst4Aa7TjTJrPxEjPnKcvxZVH75pKhckYmHfFm5Cf8reAxaAmTsnoztY72n9P2Kd",
  "key18": "38Lep4kvsdK59o5GeS7u1yX3EKM7mihX4psGmwk37F1h1BRoRCPnyCf34wJxMTdS3U5EvxbJPZfSxHhkPqpUyQ2X",
  "key19": "5tGe5GAho3qxmJ8ijbjKasXrP8nVHnSswmrqQRDuT1B2j8VvjbyqWs4JMsa5noAjnr4mf9giczbMzXpdC5RUavf7",
  "key20": "ru2Zyydw8LxTfDcWZomThWZN25wYpdJX7zCYar6RY3JZAzqXnP4baztpxjKKGDGAfaGjNFfa8rr7uBkCSUrpDuZ",
  "key21": "5xytZePGFPAyhXSA84M15FkZic4AXX1GMj88hTMgDNwXBZTcghy4je1zjbqcM7dBDiHFTDnybFZ37evqwCLsBLXK",
  "key22": "3H7J8e4LTu3EepxAs7ApZvbH8MZj8xwnCMjGgzxS4htCMuHiXP48TbgQ92PbBAB6J6v1r8K6avXgtUri7gn72PM2",
  "key23": "4Z7cVVkde4PQqPYjhGRCgXxvhAhRrqUohGKuWkmsxZbnfq29GxxApxJq5KrLBdzJuaAEPYniPpgjiw9S3X5z7vJT",
  "key24": "5g6RfMSTE2A1wK3sftKGPgvcsVUiEpfoSjRN5PCzre21eeCQJ4Tg9V8GAJ7WPQTjquFrTeBeFyVGdTMNFYztfSaw",
  "key25": "2L6nqNMhjAB8NYw37sxStezui7hrRnkNRx5KRw8dG4EYSpHdJ9jaxYS1xHP7NJgw3Crfj39XA6UYssF3Hq3zLCzA",
  "key26": "4dPgZz2rhcBb5gA5NABVncXuCTGtRoZvNLdNXcirLEp4sT9LbvuVkMLtBuCP5mvbimytkCU2apiyxxkg1Xdoye2x",
  "key27": "2pPYH4VFozZFn6PJ1hCBMvtjAALbEmprQ9xVpbhq2oF8pL3a846Seir41uuZooZf9dm5EtZZpRZArUhBKyZsXSR4",
  "key28": "tkZbVfVX1ayJXQDSPCHDtgLRRn6vyNMXd3yFETm1G3wS5qdaVJPDmYTcyZauFvHaGGMRpQSTRe3gPrrr5icjFNK",
  "key29": "2hnQk58xrCMCgMiTHyc25SQBvmYpqGrhXMixTpnU55fPpUgWH2z2thSnazsM5Zm1949scGUwmUq5RmxovZEztj3m",
  "key30": "DjFTV3vHHns8Av5JpFe8544pghbdXgiHBtuhruzJnZaR1mNMfez9zjajDbXWeDXBGES99nZ4R6Vg7X3J15fnLWG",
  "key31": "3h6Td7wDyPd8jLDH9h85MgWY2ErHqMGqJ9HutVem4wxQCnQWSVdsR6TqRkbyQBwJShZtDscrqb1bCKYbvb8tGWMq",
  "key32": "4eRXyGBjS6mY6AVHz7nDRNN9a7CuZ8Q4VWErfV9Bid4EwypQMUSnxQSAf5Rnesj7Abam3kPYkPUQ5A2QjMYUBQbU",
  "key33": "3amyjgfFNiHG5UmPABMKXSvAMrAcgJQzSv2WdYVU7E6h1FudaHHe2uPywnyf9ooQPoED8PrTPkGEgHVFNM9hU6nk",
  "key34": "5dkdg5dSXoba57HKPmPjpTvFmzP4XAZEUxc5w1hVCe1J3g1Rmem7qRgPnZw2tkJMaCLrzoAQLMXxnhngP3oPpTEj",
  "key35": "2D521GxKpMsXYUVirGL8pHZrRtYqzndRnEJMfHM8wCsxrBH46qtdojJrTdLszmxVFyuwoxEt5fAV7yXUjBYhQC4m",
  "key36": "46gAobCxetM77hLhjdS5CEtwi8zfgRj7AJ47jvaGCoMYkWzXELezDhMxvaA1xj9tFokRyGTC2Vr6CF7tcZUeQs2W",
  "key37": "sHq5SyXNd6VdYbZ1X7Xt6pQoNgtCWAa4tQsYtPaxdL2s4zjJDoLBfgghJF6gFyJgDmD8EkxBpaGHmNPjedoqZkt",
  "key38": "5tnnBeov2BGLwbAd5vJ5DHBrS2b2MnBZfrziaHd3zirrA8U7yfcRzmZ1NMF29LiaS4NfsATArkKwgkE6ViERXp3y",
  "key39": "33nJLm3qVKqmXeaKW5NMN3BLyQmC2ya67UN7vNbpKjGsbAmfxBZ7w4hdGML6NWE4mZ7zXoxTytLmBc4b5pvyhuxZ",
  "key40": "3tpE7yJk4VtTGu42GELpYPsWXendy3PctWHwudmJB7KfHy9PrJcGfAQYagRNS8r3k2cEt9hdhU1uaasEk6ETf67k",
  "key41": "128m5Fj3JrxGkmHxkxhSCXc72AEfcQranobTn6A9GZgPm6zFpSCChR24Xczutopif5Vd1LGw4L3LdE8nPxurqVsn",
  "key42": "6Ghma2ueLVmy2gUMgmrXUebiofjg8RYzWxXzumcxXtmhxtb8q313JhuyEUesCTnV9nRgjQaxAjZoyncSrdRsmCm",
  "key43": "5MtqLKyaUhVbLa517pvN12HGzJNERPUBUDQdfXuRyvTG1gnGVABVnvFwuamKdaSuNE5cpbvzZSiiQCV2n1Db59D6",
  "key44": "XRSyCttCGXzyXhdFUvXEr99LQmSjknNkNfmgr4tgHL2U8gzmQvgUQXrzCaee2od5RFoa9WBH8S8wXgo1ctA8AqS",
  "key45": "4tM4F2tJkmkaio8gMJhdKAUKSkBbQfU3NdmQQTte3bgqW7rMYiNctDkSgWa3V5sLJPxPTLv6ko3u4rMEXd2hbvAK"
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
