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
    "3f95c7EsfCHrQiEWKhT1CVFgXScmTrHQF4kQiYf5WWyL8CAEzcMUggcZfbhWc4gXdp7ue3rBbtaWR1gecozCkG9F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o2WX9to3S82dB3Hgu2CpnydWvBUaEkwuH1S1yVc2jeXUbriZDTSafEdhAsgFugedTYuew8xP3MHQhmzQH9Rk7Tv",
  "key1": "348xirBbAnAu7xiDSJCesQwoqSnAy6vVxgDqAtarKD5YAR9zvXyC9zmz3qrHy5qrcUG8paMBuUNfT8RZetYrHo44",
  "key2": "56DXZuKprqw9RgjApNU6yha2JKTdPUSCuNHmpbeUUJHTF9ui5HaVd9Lp67JnvjbSCiZfXy1REESDk9H2Y5yUdK9r",
  "key3": "2RsRio26TdHEtjpobZC9eD8zQ9ApVnAkUgt9n2FAFoSvntJoEv9FQTgvwMMt6AAweXtaqioxHNRdGDFP2JqecNe9",
  "key4": "2v95YuYxvx4W2w5X4MxLvcqEoWNTmHY17JovBTrHWCWfhvW1YRxzfEt3n4wxpvbugBRyF9HQTZvwzVmVCyXz4nWh",
  "key5": "3D9EXeQm6uYPrzC4J7XRzRxHhywzmuYj2pAmEtpwak5tGa8UeTwzdM7cBmAYQqA7MuFvTvkn872FG8BQRPcXsvAb",
  "key6": "4ZAAcUFYU5sQ6254LmYZvV7WdwJ4kWXKNFK5riBjWPwgSe7P86kMAmxcGHmjApFbeyg1vgvnHe2muFYg8y4bSvE4",
  "key7": "nbYizqMh3NwZhnrp5h95EAa72UiHDJJHQjB91xJtHhxMdYmWeeyLXmRj4DgicuV483So5FP2tN1upME5Scansun",
  "key8": "64iULHcNVGfHos1xLRdGcTUoxDUvJ71oigepFxRNyAWG5rg9bR777zpqQsNTXQ8BLkZ4XRwNNme3t3zB97RV7QVi",
  "key9": "3FbxqcfkiYuFWDre8W48nZCyJEfMFc9yDBskBUYCSHkHyMka7Z5PA5yYFyKfxNNxgNqWcWFrmAZ4JX2kBamWxpvP",
  "key10": "5aT994FVUa35xPiGQ3nXYditwJbrSkgFDmGzaT17YWFjdMQXxrqV12UKkb6NcpXaiMLcYZgpEnuAEk6Cj3dznGYF",
  "key11": "2ACQ9EWwiFQgmti8MNpL5pBS2gwZGjrSW8xo15wWHLepffnmn4vCugneneJV47qtFNvoTxFa9TneGXZAiA7zZpGZ",
  "key12": "4SqWNMZPBNFafBZVgqjnestbF7QQej5oxivAKGNHLc3mGe1Cph1CBDJRPUvxVvg18rMhd6Zi1NGSaAcLCkvV7Wr1",
  "key13": "2SvY24R7MqeSuuYrg2zHBAAwhRZwMauX4PyXQyFsiHWzh9aG8oRRVMDFyXc6yccwxzPsyhVgoic8HLCEjLpepHBS",
  "key14": "X12vgKUMcHFErSS9Qr7A7V3sW4HgJEz9zhbkNbtimor3K2m1oh6rqqMtpLu4iF6tTnTaUGCKwmLiR9QQZ7yRumG",
  "key15": "rj8RByp5486zE5PVC9cR49nx1gzSgi3oegLmMLWjthW1Njwt6KY3L8iD4dKKDjT45oaoAqyhcdzMgVGA9BRr6Fr",
  "key16": "5diCL83L1vUdGLY954iHZZigowu5qDYo6tXbjsSw1fh4696kUTksLw28V7JHQ2NDPXxemgG3NtiL4jLg9jX9Yn5f",
  "key17": "5ysttPMPpoaE9v6L5nsEQdQKMcJgJUH7UPDVguAE5EWVCjQthzmwdSNJuHD53Z1v2rtLFAgRthNfGZotDLDQzJy7",
  "key18": "4iYz3q6Son8TL4J3Bm3RHF8HXgU1AsFGFcUeFLsgwuKfnk76LKcNS7d6cFvtXci1XNNVMvxr8zLSUaNiPnpcoTjc",
  "key19": "5KUTwuSoEj7j1VsMRZ8pYHBiTKVC3BmWqeuyn9VSpxAzdcbsEQakFhHTDDisEkZXRNxx7AYxpqKKn8F3fuQygQdv",
  "key20": "4Tz2tNzRGaZNjnHNmwYf9Xwmwd42xgk5UERYasE1kYuxQy7MVzZdUdFkEjb5AjibwV8UeHgrpEX2gEMG2nZNsBtc",
  "key21": "3yWTswFJ8sJXEEpLA6XE3nfjzUDcKMHrQaRbV37BeuzK2B9CGdu2C48UBhRWGKxMmY8W1avp7m7mZzZuKtDpRq4f",
  "key22": "3rbDnr7Sqx4tLNMSR8K59CyWCNip4UA3exEJfsbGGrtXBLGyuUTsGFaqvUx3FCjJE2jfnVVj96Yp5pMs3H3JR1sg",
  "key23": "SdArhFP7pRqRw6w9oXFxmWgTtDpdMcpigAQpDiV8f9EHXJPBkWzMNLi6R6bqpeVU8HfZcYGQzKDYP95QrYkrzhR",
  "key24": "rhGVUvxu9EZ4WtdBDwNVtjmT3e5G6o47tnYGoz9DF17xm2mHnkQs7iQSjy9HpTB94G5aR27wvUyR5U6UTtj7kie",
  "key25": "4FiNASWDqWRuMmex2QCj6fRv41x7wk87JWfQxZgAWLEriwMQBUxrkZAzDb44fq2iK2ws3QfnWsJiv5g7gq1Ekynv",
  "key26": "3mZgtDLbXJabCjTZqq5pjK1vkuPNn6cdrNyJ8qeY5qxfT5EVGgm864y4hc5irmufurVvFSFWyJuHGgJ9V3Ny1wwB",
  "key27": "4MwzPjNaRQ79avwqAuUrvpWmPi3CBTaAJmKa9VJ8eCsBo1VeU3zpwi6RvtG46bVrWEy8XmK2u4orQH5N8C9bxhtg",
  "key28": "4UcpLtMAKLAvQ2b2ywHMjDogB37D6KuCVBXL5rFtrRiV2PokL8KBwzMKNJVyVaJNf8H16mt3GAmjeVGotniaUBRW",
  "key29": "3RsPa3qgYpevnKPpsu6qwMeaMAbaXVCm7ZuZQAjDR8a1a6T9MBVVED4BnhqccXe1VcWECLuRTFv2NN4gcM648u9i",
  "key30": "57qjpUbpfGcbCo8PM9ZEns8QBAQR3Sn7pdC6UV6SW6jJz5oSHNY37GbJ5MafHXT3kzZPhYEMjK5JTBc3NG6s1qeo",
  "key31": "2Lf1qADHTTDGurDemmoWFmTs7YfSySYd8GZZRsHxB9jAeT5xRbCvBocFYHqUQJYSVPxYkY9KHU7gXyuahMY1xxZL",
  "key32": "2tn1xJfxjYMKVGDDhgDKyPr3SeZcH4Nh7WeVR11GaN14HxWhLn8CDCsSx5heVEmXjtCrsCNoouQyd5wH8woxsBEm",
  "key33": "kaYyPgPUR4xVo2FbgfEhmdGKm9mPcDjdYEs6hq1R7ismx8no8S7JgJCueoYqHCEyk6metV9DwR7nRfpLCGV8VkD",
  "key34": "4EKnfgqiNxTV2LZ3mb6uTFo9broanwA4sHVWJVG1ebsVuWyzSBxjMzWhouDBzzX4ZryYu2ZBZtMtqsSHvNfn7FW7",
  "key35": "2dm98CTW6ChpCtNV2UPUZ7bVxo66yf2ySKFaRCn79Vo3VQXnRbQGgAMx3aeUVAMu2HYzzXW5eH1beKPswTXygoxq",
  "key36": "2HKe3q9XM7gzEd6YEcZMb1CDWFeHx4bA2vT6burMz9tUHbLYquJXdniTMhLadRaZ4C6CnAJ6Tc1wFP7A5LCgu3bR",
  "key37": "4FU7GYKCKcE6UCGH2wSaxHeDkzQCB2Z7RzN9sC4wZbBqjDWJPCKEwBYbiRCGhF9E9ZrvxBTtrT23DyyuPM4nqiBQ"
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
