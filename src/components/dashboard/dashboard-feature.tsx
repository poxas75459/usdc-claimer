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
    "4jqmaCFiZYfZow1zyyfu2kD2kaYiDrkvDapXCdhEiLmdjNdc3DiPUDCy64oQu1kRuPPBqRjNgUhmjekx7qtbp4an"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eqqzxGqTeG1cS3BL1ggGWUJfrk1mKmAvaQWjLVfCgZmncmUj4EHy8oD4arcvuKNu4dZnAXRgUA7vdWA4NQeW6PX",
  "key1": "389MfQeXDb5xVxEjhVKSmkFopNy1jaWK8wMZ7jVjA5o8Uwki7Yt7Fag6kPcfRBdx7c4pxjFUo7MUKWCVxZPstZZj",
  "key2": "475zPa5bBonSguvo5pEsTg5HzHX8tVtbumagmbDDrJBswUkPnPeYqPknXJLb9FykYsqtmJUgXVV4h71WVidWXvGJ",
  "key3": "5g7DsLkHFwy9MyduvvufvFP76gb1Jm5Fkf5PuPDuEUc8rzVFjE64RiAjfDkjPgcSVLS6nhXumhzEp15nHHKQ2Fye",
  "key4": "odneskGF3Pk29KnXvfsRzugsRZqwHd9bP9Rrf6JNkv9t7AGNHmJxPDczru6FFcZQwBUTi3TE3ufdYHBLMhTAUYM",
  "key5": "16sTZkXjBqrTuSGGy9XmeEE4Xg4mxdqzZPwAosKJXp47fFJRqqeUFjpULjDmf7Rom419b8GMxp11r7eViLu3SLP",
  "key6": "N8Y5Vht1CwfirGU9XWzWKSYMLgq8BctNNqLnzYJVfq7kN25c31S7ThLN8dtt2M8RVmtdREH699sn8XwiFyG6GbX",
  "key7": "283zyqwWoiv3RZy1smbYm7v9upXrhwJtfx1AkvZdgMfeHNdGJbFSVNG6kM1M8JY9c3hy7BmGEZbMaMykonpV4zQo",
  "key8": "25X5tZr9pMntkcyTHeRbKLVGFZyySc3X3QpSjFQQR22jbmok3D5VFgFS41dKKwcWap28RFD97Hj1PHNbv2sKRybX",
  "key9": "4zfHTmRztvM5gnqodmBBdVHEpVwdddgtGkEoWR2sLBQahpc69GTbZMSDsLAkdYQ9LPafi41pFX2LgRi3mNCqodQG",
  "key10": "3qWiTWmLYxo3Dw6bcDkcKPfbLntM2b8NHUyC8UMk7s9k9Q9qT2LwfngjyTR6YTyGaUP9yWeyGs6jktmmDvLBHBBZ",
  "key11": "21QqFqtL5sE5M9meqX6ywqK6esPC2CxYMgeXU86LnCW9WyYSPffKAo3cdZrEcjU9fG5V2aT2PMig1TCmAFBDEBos",
  "key12": "HBHhDVobuvkGVtkT5Sw1SNJRaheAKC6BcG9AqNq3WzYzpPQJniH5GqC2Q1avdVLz2WgAHYerWSS3TZ1c9fz8Gdt",
  "key13": "4bMETd9nEUsGBpLtsqCke1SCjz7rre75GTZBUGoqWJ9key2Ei8EWPpXVeTcmVaBpAypipxZYo38uEafFcGMHuedT",
  "key14": "4f6qR3gjo4sbcgpqbVv4M9SzwZVz25JiLpBHdv2PuSKpkaJRZXKMuTREA9NKaPJLnVemkac5d2P7buPc7ynqexFe",
  "key15": "TdSAa8XtNhXyGYyTjwtFqu2BLU1wEVrmePkf7g14os4C4zLwGhkLXKWSeMqDBNXEnZxYASSfjkpxjK8xTu2517h",
  "key16": "43P4g2NMEbKfKYLUdABsBW9KN78mokwe8GdQNNhymnNeeWG33Qp8h3NVH5fQfig3QYzqTLCaB1a1pdmeKkoiUftx",
  "key17": "2B7vmb7HErj2DkUqvjpDWnvSxbBTppZ5McLy3qfkEcNufuDBJiZbrKu7Tv78DAuRrfexJcrvKamKXnqC6RtV39Rq",
  "key18": "4tBzaQ7mxNj1SXk7YzrpfGuYd1FTv15RkGkgP9Wj9b5SrvrLiy5UsMsGcAaJurG8aZhsxdGHhbZCrfApNfnRam2c",
  "key19": "4J2sZu7MjECSXzJVFKAApzjhEcDRwgjAkjrsRNBX2wR2grkaz2ziKVkpVyacPTnrCLoniWhw9fdUTsjzpRJXQvhW",
  "key20": "45P4xCsnUduNZGgVXBhVDGEY4J7niWdBYrWdV6Mh6iZcRWTNBchWQ3uv7SubVNfSLLSkdaBLP8acF5Yx1Atqjmct",
  "key21": "4xuXSnNwoX12HuSUXgsjdQkrGCdeYqi4Xo2MfdPyNizvuG7CegGxTyVz9ydsD9hKeMdhRALYrX5wLsB3LgkGJkkt",
  "key22": "23fG9aAgDhtAys6YUDkZuS2YBaLqgqqoNXkwzUcNx6ZGoNcqfa149hPzeBDhhuKf28Y2WyRTQ5wESmw1xp9SvkTD",
  "key23": "4RMZgMGJ5Pg1Yb8TKutu7MFMJJHy8jLxoJhLiai6iywcRyYHpqjpmsr8jifLiweqm7AYGphjkPtvWLCD4hmir45g",
  "key24": "4AeJBPLjYtDkGZwHomacC2yM89N6uczg1T91p7arwqx8n25hvFFfBsLyxkQAAQitQgx2y7yhKbBjd43t4M52METh",
  "key25": "3BE6i2bNQEyAxFZAFzELjXeQpuGNB1C8QTeYmL4ELouxE6dXjgXfpUwJyzmghWCgdaRZnmCBUdhS1EBDjHFbhQHc",
  "key26": "osJ9czy8QD5VsCSzc5ev4R5vBA4JGVJNuiVnZuHbWvijcUqp1iXktou6z7Z2KKHWouukS3PUzf1Fy4ULKX4mvNY",
  "key27": "3N2yjmezqbwUFr51zk8RcK9HGb5yDQmTRepxwLFLbGtaJPQfWNriDytA5dv9SdyXsaEKEkqXYBkCpK5MrtstePV"
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
