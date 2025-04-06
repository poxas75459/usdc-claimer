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
    "5nCyuqg6nMkUSVSUianRa9z8TAuFrjTvtEHb4NjnaMgxiuencJQUQmc7yj5Chv5KzjFngZwzjCPMPH1fuoDdeMSm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t1HDY1auX3rYHU7cABf41Kp21Dt2ipnj3RY17BtsaneFqaqAgCwhjkAXbU3pEUp1BqguYmMYTiJczkA51eLPaeQ",
  "key1": "5GTYybQvLKeokfru9b16PurK8pmYxMGYkFABCTQZRBLNiMawAXseu7HfLGNwz9QDxU8ZbteKqeRJyPZgDfCMR9Yf",
  "key2": "2nzaDarwVxKmWA48wBLBhp4aWd4Mbqv5gYExVjjngnv4HpC52j16NPiKyCJkXANt9iFjhiLqzpGbPisV5PogxdUg",
  "key3": "84ZArL5zVDt8bwGinLBScEgqsrWK5XW4hwVnDwB4Foj7ooCjUbSmt8xhgebGmyqE8ioa1uRnGB3UYJLzc9oG4eN",
  "key4": "KGsNew2qh6DAdR5hpLF2zpES5jKBc8PaX7Dy9rf7xnPHD7aVphLgVyvzviXHWEfQZ4UEgANaCyPVfTEn6g5GD67",
  "key5": "5X8BYP4k5iWqB5KCUr99UGvcZrXA7UCisaoki3eZpr9QvYDisivGb36m4ZMGcXbhK7BuobKKGiqQ4XHE62Anzvnp",
  "key6": "4hGBWBkNsaBY4QgNBrLYJ2CJSYJvdmPM4mYnaRnmhzaxNy5WdLEg35fp9ZrdjGJSvSBHfCgRsaAVfF7pYD9kdBt8",
  "key7": "2naTaMmWFVHhxbRajAsdSe8Mtgot9YYZ1RYCU1Vhk7UsE77BsU6T9TWRempJ9rAh3dPuK9HH7MwGR8DVSnRjg5yg",
  "key8": "39Cf4xSQD7U9AM8EKH3N5pRGXxy8TontTEzHk7qxFDG3bAT2Ex2wM6r9BeX1FA25NK2LF3Zmys58n1nUvj9k3Uqv",
  "key9": "4PXUUhGNG6oSf6ApLhA7NRTtBv2TF2QohG1Q8ur6MeHtQFexR1zzAqgqM1zRnRh9gYxKMFyQDEmjz3eBVwHd8qXm",
  "key10": "5EP7d7G1sqRTQ1EzStRJFPVk4CvtoF7UtHKxFndLw1iooasUyn2TukkafbQ1QWVrkeXcXd4sKR9znk7kqkUTHQHF",
  "key11": "4sYogPoC63fgySpziHLEhWUrL7onxf7MQtDeuURTUAJRW9CVF3mcwxEhJALUN7xiDrbDeQBCR3h4BqbUPpWjZNHz",
  "key12": "3XXjRpsKNX6QVXAfPUzrunUTau5LV8171PExZckKriMt8WFKsp7LyAxPeqDKbpPUoUPXeeTFaxj2R6TKUYkUAVWR",
  "key13": "5HdihVAXkCBH53GByyCZ8JFhQCpG2qeHsvNBaA2GviBQz4aX77yUx1D35wWuAbbG7vL7F2RpAHZj5F6LMuMhbpDv",
  "key14": "2gvLZ33g2ec9muvyNTteE6nFvLuVAdR5FXoDC9PjQMJTksjav4sUopZmZPSMZUTxoAL1sEfhY6izdxEDrB7rFtfT",
  "key15": "3uqcDNxC31UYi8b9VqBb23vGXxbWRANRSdCz6ijzanwKHef4QCZKdLHxhLEUTw9y5FEGWbbrxLU4jNd2Wizd9dEP",
  "key16": "3vShZ8pmNyN5RFXkoiqfM84AbvV5QPPvuDJynZ4VFKZR15wMDmdoqdgKJ6pyD8Cbgvgk1qaNiNknLfRkGS2YV35B",
  "key17": "2or5jp5KLePQvWpYhUWRueTjcbktBfb2LD8UVEtJpzK85XiTVRyA7hwzzuistuJzEV3X6BCbNXJudAFjKYJn4HpT",
  "key18": "3wB1b1SvWHqqnFPjKHUy5VuQmtf8Q8fAQmMB42McrdL8XCFd3UPNKTXBkebKLoWmDxNDvxntfpeSfbUgdYZE1Zt1",
  "key19": "5FPTWzSZb3P97jsBPuGJdNHG3GnmVdTCbZGAyRRJTTchwiT4wzAo7ys4RFCJjhkzaosUMz36cAmcWjoqpDP6p7rS",
  "key20": "5kN3pTiYee6z8wkicgAHj3AtC2BFc4rEZdYvVQnuhX3TF8dtBgRsrcW7prxbeBqdstk6tjR9cyCdTEeRTWQ6A4T3",
  "key21": "5ExFqoALL6Q3mufLFxrYKfdP3v4pc7qWK3BzqM7wcPbMhSaVD2HbFmiG4vhMUw4WqnLB82iWE29Qc7hqTHe6pUXp",
  "key22": "4fJ2z5JmiHvK7n2wFXZU6P66AyXA1LcZGvEumC2DYJGeb1dhKSLwnvMvA38aRomeGgYdMYkKKz2pB6VbDRvNfkrL",
  "key23": "4isgRiC6mwwe7yJ8EqUqBLciFRT9qt3YEGsRV5zSDdhgNrY5edT8UPTE8whkFWjkqrTab9mj7beN9HCn4WzPztMq",
  "key24": "4VaZTSEyZtUdLg6M2tB2P3f25J7gxyXn7h5tZPKNQ8C6Wzg3MNUf8S1u6mnikMaVTpTzMYbTY2cgUXxT47msgzhc",
  "key25": "3e2YkQLnFUYJAzLmcrVN9iRzvBjtry2f5d6VYrnQ2t42y8TJxuJiQaozpijwFZ6ZrL8dr5KNYZMVAy6sARDWct4w",
  "key26": "5z7n8xRr1yw53m5tTrxYEFxKuSxeh9QrMjJpJV9DYLQrxugvvtu154N25vKqEtvvSnXhyaJg6xg1FTUS9XYe3CEh",
  "key27": "2gNPtEN2G8HTUfu1SHp1SQk8QxSSDQnppgRikcsTkFYBKZZn7ixSo1HHKyJLC5yyRkNadTUBH1XqNvgJ9wzujg6H",
  "key28": "27afSP6rAzUMZEp1J6QeRdCNfrtLugoxQifMV4QjRN7RKdkcSFinpxPfiVxUv8eLzoKsP76AMFGnz6MtUaksPcQu",
  "key29": "4rxUJQ6v4QUHPuuQ6edTvESUdJLUdTr8XviaB2g3Ye6uv7F2RjdEzhpenNuEYYqevVY7boXqdWi2YqWFybfK4myL",
  "key30": "32RVc2V6gGArTAzjyJ3FdSd7Po71ndrdtTgierBmyf6uLp6b8TQsq1zsanupDacebJS86QZEQtaKmg8ZqnH34qCe",
  "key31": "AGSADiZsG8sZnpv9snXvpEbWjbxPvUHTuZckFUDutqY6ZZBitfMeFDEXqfC378M6PdbKCD3KRAAPN53fp5rRPUN",
  "key32": "5q2T3S88ZbbpgzYNaoHHpsS4uRdvkYfqBMu5vLBUQtQpB3FE74ddS6dHguNQ44xzmubysFBVK4PoY9HCJzgdNNR",
  "key33": "hjUXKcKProEfSJo5jE7YM46B4ZTzMns1Ezu7N8WeHyPHabr7bRcX1FRPsossuTAkRS2deixyspauWitkeSPGE4S",
  "key34": "2tdhEMTUqZesWpoaZ7xMdZFUY13W6KJkxA9gXtFm178GaH8dxcMzXmUFhpvmJQzPy4aXYJVe2W1ixgXPiHGJ4cTR",
  "key35": "4AwqScrmvetptn18xLRADBaDULok34Rf1MWverMT8uK6sJ66XgtJ1cQy3GBXxyJGbh3Nx7CHcXoFnh5EqaZjgKf6",
  "key36": "3iffbW2U5Ap5nbDNdbGjouKF1obZ3bUuZ12Q1uKvx2r848ot3JY597NHnQ9xR1H1P7foGyRNmQjoHhK4LC4haJ8n",
  "key37": "oyCpHKY4KRjFYZJj6FHPYJ5QHa1dLSFXxRT8KXkX4Bs78kPoSRMAe5Evj57mMeKyNUkXmvNKDXSRY76XnSifDH5",
  "key38": "Hx8s9Uz29sQ7tHmTPdHCL8FdwkZBkok3YQoraeLdGTVRfgpJodVNBxCV1fiBukmheKavrP9n1gBBVwQZwMd4BtT"
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
