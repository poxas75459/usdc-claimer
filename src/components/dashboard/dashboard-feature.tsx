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
    "JLYJ8BVybmtb9pyhobWV6bmmZjFRC3GmuLNeUQT5WQVUTGjDSNhaNWftU8tNVoFzxUsZBf3QW3NTtKGPM97Z43k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gCqJKrrp7yUnqxJjaGWMpXQ6fQ2NuDpcHf8zysQvBgvPcuWiijnszpUxxdebykjdLptHPYLR7NbfjgrLx69y48s",
  "key1": "4THivVbBprMXVncfPkzgAhJd2D4gCQeoUyLLBQzRGidb4LeKKBijK8ua5qa5jDgtEpf4iPB86qt3WPXe4UCqq3SF",
  "key2": "3oMrER5bTuPdAgk2w6NhDd5YdnVTvmG3zRRaFpMBYPNQHj1AB2dKS3teWHQw2ci4BTkf7KJghKDViH26VoKAedrj",
  "key3": "33ww2BeEyWssMkxd75eLrASo2fLfsXuy6uzezjKFAx2P9HY9actWDrx54ttD2cgXfH5tZJUuYWX723Riafg9ofxi",
  "key4": "4SBmhBc7AjZ3QSrZ5SGgo7U86Fphcoz8yLbcTW7iTcHw6VBKnp6XbWCFrcniM1yPuodRBrzLh4e6YcoyRE84rbC",
  "key5": "479iWmRVTw5PYNVSSsshcwUgnpnrgFN9FGPzbT5Cp7qvJyJ9YtB4mtpdyXR4832zDNmDwCng585a639pHjsjhvCa",
  "key6": "cHo4DqNxBUqMysbvnX1iz6G65ZxiUdA5J6fnv8A2a37mqUVDiQEgqXanPpVvpRX4NPuNpmEA8Q9o4Z8wf2mBPoz",
  "key7": "2pjj4bEku1LpjEAsFuXozPe69b1sMD7LVdtRz4o97v5uMXBEbnBGN8Zh459A8Po572dWh2JbeTroedGRL2z5H8mw",
  "key8": "2ixpGbhSHSnvxwcczSXUjwmwp8HCisf7Fu1yHRhozWq6SRrbvFkCUAPdrhDgKJYbCBdPv9szDtM6pzkAiVRa1fwE",
  "key9": "2gueW5MrMu7zeEY1i6VNNADwQ8atBW1gWzknX3pNZ8sEAteTqPWev2ZoQMpswMvww6B8dqdqfMfXHq79qQ5XAf9o",
  "key10": "5F4bzMjWPKaJrSVJ4deokEpHzWgRB8WDwx7HtiSNT9EsyydxJCm5o7FaeURzLr9NASodKnsv2ErFFfpjyMK8PzBr",
  "key11": "2SkoTyVQyWT6DfQ5KdKz1CxgPcg64z2UunZeoapXaWV6JB6ZLcu7DuTS8pE5VyMeQXK4KTivJ3NgNgazh7Cj9DwZ",
  "key12": "3Ur2u7erNrvFi5MrYTX2HvL3dNTiGx7Agw1reEkEJHSiU3RGkFF4PtHTb79mzYeUXDoCDFTTjWA9g17NuUPpFKca",
  "key13": "4evgD5zUwKpHCd2jTp8JMYk21KEjxbFPdQ6h53ufrNQNZoyTMGcmJmGnxh8MmehnHL1PVEQzoLA9oZRh6doqYvi",
  "key14": "5nowL2GKJFCxp5TpGpdPdMPrqTm5yjBxN2p7DbFmTw1q44nmhwd3UnmeCxMFStsrNYfAL9UxRyfJMzzYBqNmhUi6",
  "key15": "5Qe7MjK98d8PyYFjKDu4ctFc6VqQtVFzzM46iiNzKykBehxw6NRn8wo5SivKEFsFN4mp1qhiqD4SfqdbhTfcug49",
  "key16": "2qkpJ6gXbR3dY45jq3ocY7PQCioYsw8ojdff6yaw9nUtzC9nEQSPAGYU3MvyfA6nTfUcfDK7e4zP1sE7jZpsdUSt",
  "key17": "3EBpYwiaJzUxYC8J4JtCfKeLLbpRxQSWr3FCe8h31FddjvAkN86d1Smo1mJt5SP6VAJg3NJLcBkS29kF7Ai1Eh1d",
  "key18": "tRFxHXKzoYBJiyoe3jiD9vfm5B4WcVScnHbFbAF8nf4Sk48H6T3f4atAwFWB1zmTKJwexCazp8UoHJPaCzu5w9r",
  "key19": "4hgozww3WN2Zc5WsBoZMvDx6491eyUcs4H5rsXpNsrDgBSPSehwSGEAAukzjPaHAWYBHBLjDiNhoLAguPrKoT8x5",
  "key20": "4z4ThWyjpYJhFokDNCyJ2BSfd6TptPqnNnh4vXGpD7NDKRLS7U3Gwbgso16fexkzX2AkwRZpV1E2T6PmbpcyBw3Z",
  "key21": "4UaBa8fYNp4ozNJafiqQp7NyYrD23VXSyEyZ8GMbKzeKwB3HpTjP7WgVpFDUxEXJG2wEbe7uKPWmSxNgDeJ1WwwB",
  "key22": "2NBQKC4qRgiYJVcsYnccn3RpjKYXpsYEhRJrpdPiiSmJFvAc7CGJXoD7Kxc8mgYyDVSaE3ZDa1pcZZk8eHU5xZiS",
  "key23": "ivuaugjjGyqoyNhUHLSSo5CLuADZXt5UG2EHRv5csEgPuagUfvCokeK36nLZbH9TUkBHRD3kTo6zDWBS5pnYvvf",
  "key24": "2c6k8UzxVrJDQthXadan3z5TwqHVqgcPSqz3KFJRFmRegsWHdccT7gWCscvYi1ZXZjWP3tSi8DNHsQefqLPNikny",
  "key25": "2dDeeTSuKoAYDU5SKaey4h9eLp2G7kM8zY7gVE5cqre3LLdKX5okq26CfgF71XtvGg9KKXAu3J5eacffq5KibogQ",
  "key26": "2njd2ri444ZTvNEZo1QBi1uGHon9qpfpy9CtnPK9NoJCcZqZ8d135v2j3pM3FH8S8aFCropyteuNogq1UysrDjs9",
  "key27": "5PpXgSEzDafzxLF6B1MCsCBUTvb73ZKF97xQtExiMYCvRYfeUvS41xps4pfpfCo6chQurKyJ9PgH3jMYj79VTMpo",
  "key28": "5PakRLCs73Htg2EEyQ7FNswf2QTW1W6gKS5oQtZ5e8ovPzaMFEnYvPmBFRS5YrTaL59oxhgUZMpLTfpYYdaNSHWc",
  "key29": "3TDPTKFtvU2Qq2W7xR5xECGfgvDFwDiVtTbGEHrZ3Yn8xBjXH8VNTZRP8SHzeMwT61RYrDPtx1Ssnvm8jg9tignu",
  "key30": "315PdMnEXZwrqBePCBwTu5wxCRER6hddD9vzKzvSLqx6oe9VX4fRdeFjWxv1rt5G38h31yQ9djFZoJCwamB5ykvg",
  "key31": "4FuUfHNGS9apub8d5mJEY4Pk2QCnGHq8CGr7ZKxabUHez1LNr1L5AEFCtenBo7H68tvuUSmk552gh3kdbf3a73r7",
  "key32": "2iNo41R8UBsUdv7V6sbwdYY2B78UJd7o32fh4nsMMXEa3fBfz7Fkd6fHizts5mpGbhzq25pJVn6GbCwZ6jDp7QZp",
  "key33": "3eJNEm2EsKAL1ZU41moeLZMFyrsKnPS9w7TjLzSUaginPZKce6a2PfX6xLzShiFbvMUJnfMdpdohwLDqogMRnHEm",
  "key34": "2yLMQJM6JPvL1825cusks3zZMSGZ8qssjerNSDVKdHaEDHXLrGJsG7F5bfqGVTEEWxThcY2gVvKWLNPtd8krT5Qu",
  "key35": "4SW3LbSnp9R4HVmkLrD6tEEJm4k1SMAxvfB1BHMr62P3KT7S3ocTFBctAK3dpVVhEvc7PyXFp3eG6hHocWCcCF1y",
  "key36": "4vpa7XP9ydMcWCny2NFjbvHTfyzNbMVtPyXENEoRBQfNrJUn6XZyHmqBANeYvjuaBM6cb1G2qRqaHEYkXmMau3PF",
  "key37": "sPsP3jBDh3322vQSehBJqF5ekLUXnQuaYRFYiVT2KXhSxs2x4hoktiuuDZooVUkmpXbXRmagxJPcpD8BNkJTv9u",
  "key38": "47aJtwC82hnMRrXUJUnLwQ9EFGqP4UgJWR8uNAwWrLxysPJF8MxtonRi1HJDB6pxTGxiBkHoQMruBpXhQ2Z3Hm5n",
  "key39": "2jRWPNetE5wyYyhKSDyusBDX1GnVn9vm2qACCZtDZyx6WFFH5rVSML4vbKCnpVfVo5TyEXWAKFkiCYSYNqdiVBj8",
  "key40": "mv3r2tk4F9Wa8pH7Y3V9uufLKg2jX8T3HLxwiUMoU491cCFCVqZVc9zCmkJh2wazjLr1hewX3mRc8zpNXjWuZB6",
  "key41": "SH4NvhJ4VY7yMQ5LW18gRTrDYYUE9Aj4NWnJMLvnUMdV2rqg5LxjBWBSBoUXX4LLP3VKLNR28Q8fxYiQvDJ8pQW",
  "key42": "278nK1D9QKEKCKbSzM3nynmWVrHg8KSi6Eie5fDWhreJm6EaKxEFVchkDqqAVRSR8kMEjZxLXMADzUMWFH7bazKG",
  "key43": "5oF82kvBHvYREp42uNUh3i3wMce5kKG1Y6TVoJib9a1K1cPpR32vsedfpmAC2sjQGQBiw9Q2QiPnZz3PwCGSG1ed"
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
