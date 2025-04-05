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
    "2WFUQqGL1UH4gXffPyEcRKrGxTt4NypXizQyWNRfK4GUfGMszuNRoCEjamFd9JwtxGJFNMH5jH4Wp5ePUKTjqcGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hWz7t79yLFZqXmKx9KozMbi89ZxKdZyVwLqsoye5YNdPGyrJkrknkUuJnRQ8ssUcBQnNiz1VgNMpxiN34QYpBuh",
  "key1": "2t5M9E6WZvLkdACd46jyFTrxtBJki9KCacfSj2ovNxmNQp7ZE66kMWHzRCmgwp53Luku5SKD7dv2a3d4RwX6mryb",
  "key2": "hAjZR5jxtXJe4VamKWkLYw3kDygoq41nqf7n3sfPwKFzSEgnGdoSza6AFDAvre5hX1ffmzE1NVnVXs1o4dy1wrK",
  "key3": "3WjCH5KA7n1s2mppt1Ck8jLYNasJaPgH96DjHwS3qP7NSyvdh7YXGGgHVi2kCEe3CSKswgyaMFUVNj5JNJXtbHwH",
  "key4": "3ijxXK7zfw2FobzkVZRKLnFsvibGkWNCdSYiBgU4PVp4d24FkeGvRf5SgzA9hXHSTrR9TxMH3eg1Hng5ppz9nheg",
  "key5": "45fvX2vhMWBfnnb88bsaMUV4f4FX7xZV2rnqZdQPgxEfghxfSDW44sCEjcG9JuehNxXcva82t4qBoDJpwHR2N396",
  "key6": "2Vkd9Fv1tARvRcMB1g8WwYBgVBUBeS6zpFPgxckzWYGL6scrPfPChNY1KrojAUDYVjNXnoQoREYCo25pBniUAMNY",
  "key7": "67a67n1yPtACzRC2XGyysLbKRh1dZubhwaTzyNppkYAVCyG1YsU9qzGEJGbwwPeybQx2zxxmC3Uq4n7x2Ti3fgxw",
  "key8": "4USnYGimFD2F5wWA82KxR3XmC43nj1MZPPg6RbQF8jHGLKDC7TMgRrkfariofsvJ9J5XU7rkBvpS29YfxWuX4DY",
  "key9": "4tP2G4gCD7uaswbePnboa46nPxADNAH3ipY5Nwbut4oivzWtBhgZqcALQyPATzJriqjKKnwv8omVY2Uprmd6aEA8",
  "key10": "NCfLeMN8un6UqZ6Gk4kjBe4Vy4S6N8RQaM9gHn7z6a3Pof5tKTePyeho6PhZBwvH7MMCp2X8mdoWnytkz1kA2nz",
  "key11": "QpJvg1C8mu6pUkcFwwTadUQPnmow1sG6WJF9dj95yum48u7zSP6JKpqDjuSFQSWHReuaKsEn5BsRbDrLjrEM5P5",
  "key12": "Xxw4Rvci1CyrKyes77RjCCqBgC2heooymPQSxHaSbe5BNaYwL8hx9JiC8anbrSrqpbiecLgEKUf5BuKhYDaAP52",
  "key13": "5Dvm7YAHnnZLHJHdH46ZbsUaMRm5HQCu9vruhWzVbhA396D5pKA3kx81pEehp1U5gpw6YHjaRw7BGHWvpduAAVFu",
  "key14": "5Sd17DW7Rq2RnuXnyHx7Pjf8gURuVx9ia5kkbpSAZHyc4XGAszXPCy7jF4sZLyaiUwXVcGcpyvCQeko1jQXMsbyh",
  "key15": "5x9PFJesqUcHQRWPbN7ycETabApFggmt87sjTj5D3QKoM9ateD9HCRXwbqVDh5jT75gLnjtMU3u1awh7xpw8jkLJ",
  "key16": "4EGhDBPbvtjGZmv7NFTyvsQ1QjkpbfjYtN1ZVPt4GSTk7HA8JGk8F18reuAcgvUjdgUkR8p6bq5LtW5Yb8qj4Q8f",
  "key17": "3j2mcEYeg5X5kLZuCPC5dNSHPi7qZiX2vXnKRkQqapnhL8hKRdvqy8XY7a14JFrRcfX96BBGbcNNTb2x1Re4PH2e",
  "key18": "5rY7XPuU3fz5vDpydCa8FmjqqFnjwQh72BM2zjSmv2uupicdgGb4jWBtBcKzBEK5rzh6wvChzVsRzzEa52FZsNg8",
  "key19": "4iYU1LM4dAssEgma4cs8JdLvLSjNwDFzLxiDJTDALkagUEkSzW2J5j3aSSdJGYi5B5ZdxF4BhadFaWs2nD7Lj75g",
  "key20": "64ZjQLQPDwFwMhjViBY5Bq8gR5nY8bjM5VYnpCwyCHFwpUnwasQocRodAba6e5PBBnr43HmTSpKm3aYJTAbPkwNH",
  "key21": "4Jk13A3W8NUhEcHGkWoMV4wcscAcCVHoy6bgh6msk5y4xfjhvLi1PMYPi91uhq9tm9k9kJeo9nm6Vy3skBuTjx57",
  "key22": "yio1xhVUv5AW4rpGtwbWkpHkBPiZPbApSERBopCsY7zcULnrv6HsWPocevjXnrHiNBLFu7TmXkzipdvydwuSdeC",
  "key23": "5U3KEoe6SbjHsB7cF6ig6e8WfdXiNSpohKnaaV3c8rQHM5dNAytSswY3gYRzy5QQZzF8MWj7UJ37iXX4EvXftkqQ",
  "key24": "2nPi6sCurjMCZeFnqsVCTqdfUXzwN8vhYkKUkEnFmF8WY3tZVjn93LkRRUcoGsFHH1bdwQutMFmFA31zuKiyWHTW",
  "key25": "jbqEEiHtfufa4iuLfTvYzoRVukJzn7kcBot5R1ujAa4UHoffGaBKJCCiWzb1XhmCkCxpVKNUJFwG9Zxpacwb1f4",
  "key26": "2Z3AzrANqsf2xvLZ9Kv4YGnZbf99QCZrm74Xq6jntmgwvBzRGSggzvchGwgPed8QmuCh4MpZkP1AqcRK9TYXHsTi",
  "key27": "5vJ5pLoWLVvZ2uDkY4uH5GACUyvoNiHC6CiAtLMN5GUaeRzMDEPUqLVj7JmrB7qjortNsdnze3fbwggHUx5nc37Y",
  "key28": "22hR3W3majErN5X6zAv9qrweLJQdnWsFvQRnD83CNrDECrSZawmtgs7EC6S1hsnPStxFyEG7fYgud9U8vVicsjaW",
  "key29": "439u8WWpB57zb3ro38oiucwV7sd1E22rD49C8ihpWtqpd2xH2pSb927xVqgv6rdLkEHivknxozAHiyBA7E5Wtfx1",
  "key30": "3xwaCKpz4Z9FXCCgab5SSGEkuBYEoaVgqamrJh3PVwEQr5eTdJ4ozDRmUQ8MuQYPXG9hVecZNAyGcKYdRo6XUKgi",
  "key31": "3H54iqW4df5z6aP6RPKTEaaWjNCUmXr3nXh7WKMft7whpGPaXAvycnHpfiyNA2X4NUbojYgCz1cniV8gQMnnc61t",
  "key32": "39r4cyZtHZxApSqeWE1F7Hj3gV13Zboz46XLDnEur6NVDgRF9tz8A4kQectePq5WL8e8xRLd8MqpFFmmVH6pncBg"
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
