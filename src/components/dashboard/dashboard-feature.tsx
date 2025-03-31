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
    "tbrQJKDmDiGKkfiJ2nqaouaAoV2n51SUiz5db5dpdjomW4XQuzXKfRVDJsn5eoAJhMhSXmTtDee7hfxCrWFs9SX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UEKKMQnfisb8QPKZPXxanCWBNxzQyqcX5hf9R1Lu382CuPgtRH3RAj6tGczXFSCJuX7MZPT1S9f15pD4wwQrjEC",
  "key1": "593ZNsuPzFfpiaNdYA5E9hfQ6TBZPBHkfsWDBAGW5R5vA8kWFXPB9DCcfkhzXNjYSYa3Cq6dK3NeLEtiAQooyuW",
  "key2": "64RuGZLAhA3YXgKyqYm2wpgqxQ53z2ugbbG4FhKARniMfzFaGjHaMWitmJ67GDLNyPkF5suzvjg7fYWyw3qL4AS",
  "key3": "3Rti7uQRorHnhFKPCjgvCiQtoqpprANdAHhomPsncDKgQiXiheuMGPpad2j4z4pF63Ytfa7Pt38yd7HnDio1g8uT",
  "key4": "3bzZG9G9Bp5AePRxLoCxq6KUFYuUzCPKGnkPXzH679FqddrHkmQGdBN8nJ1zhAxoBMeB6TTZLi9T1QTxy9JwZeJX",
  "key5": "542qEThJYEG9AN2uUdHEYb8BHKT1Q9D3ioboBj1RA21eprdV1fNkHywtmxFEGDHaKqEKN4fD4Et7akYMcQxjLcJy",
  "key6": "58QLu5dPhjrmT8dX9PvqGquRVRFFtaeFNo8X2Ex2fc6m1te1aJHkza9GuVByNW9TUxew7dK4ADr9WA11d4ih5JdX",
  "key7": "fsMLqBjSwKRHhqSvBZpCWKnwVWDpxdT318GwHHoMYfaV7MoSBSbXcXCuHCBb3u9LiMWpoWseba8S64iDF7nLndS",
  "key8": "26fjikPdSMgSBBeVUcrYJ5mPc9iGYHsMec4uGEWzjxQ4WBc2qmTvwS5vzUQU1HH7ZXfwwZUv18CHxLZ4m97XQx7S",
  "key9": "4cA4zBhJAuAX1pd8u7xGzP84HQNDVgoCPPSzkhQ5A8HfZEj1cu2rbDj13LftaSND7FvuJiT57Vjoseqn2u48Vhbe",
  "key10": "5PB7pYPEkWdapa2wZb9AmMHXCc2nuyJzXSQseYLG52mvTHk27hBrTd57uHpznJjPe6KtL9oAexpGvaVz6Qv6heF8",
  "key11": "4wUBc7Zv5drK1VAdXYAiMDb1EGheN2dnPVUoST3gG7vghQnogFkRwi6aG8PYRfCaPW7XTN1g9zbqEvkCrQs3xBZG",
  "key12": "5EbfeAp9PPeBvGAcWBFH3XapkR9mwaEWyEV6joM9VdxsZ2XNLS27oxkmru27XjVnFuMZiFjPSce8nMuqrx6VeyCp",
  "key13": "5B6tW9hJq8RnS4hqJwSFbqiyjpiKsXxmXfpgME4HoyEFhyERcHNujKpWnALw1EHdrvASq9oVdCmeRPKmTKvTgKWw",
  "key14": "5xBjPo4cCvfEfYwZswdC1BXBfPLCkzxFTdbbnbPQ2rC4qYJJCRGJxSS4CwhpBCfUbhu8h5DUM8MBDXi2vbccZTRH",
  "key15": "Y5BCupoaTsu3fQwvB6Dw16cSkQSTEZRFmHF7nAVzt5EoHXHH9rDsmWqxUqmBPfd5R8triU6gvPspdm8RfK2ECEM",
  "key16": "5AGeiWciooFBcq4znsCRizP6SLS8ZomLEkcDgSgT6MvNipxjwu2w5FgCkrVqCNkkcWd5gCRemDP5MbQADzwHVfDy",
  "key17": "5D7ezDZLZogWse7zsui5fCg2r5xEYzZw2yr6xSYWY6cbjiPiFbHXekbKS1B4jihBiJvWbbSNhM5XxxaGjbuK7EFe",
  "key18": "4A2x1cmi6eveHF7szpp7SDk4M4ZvWDH69W2NdPUsoZvtKg5eci81ADSBjFBtU6sKhW5YSthUwUvKRsPjmBo4frjm",
  "key19": "3BviYfDe7XC6fqDR4zaiPF12QKypKTwT6RMBNBzwKL6i2Wc1LJGERgeQpiWUeDZTpzWjWxZmvkE7oadqvyq6oRit",
  "key20": "4NqekaDyDPSvonbKwY7ZpFpEzYRyVVyuZScsMjLJCNQ2ZxYDrvejAd5cSJ4B7d2RnW4oxVT8SaPXrfUYDMi7v5p2",
  "key21": "4iAKaXBVY5ChpNknvMDf2wu5hjsjSVZH2UCh4iuA4QWQRVxcN38XxX4sWWHrE5ENkkpzPo8AMv3iexZve3Nyu2Hz",
  "key22": "5Cpm3bA2K1asfUt2yXSqwtFdKgZRTbFsUYxkwCHqbGohjztw8xh3fnWbrakmnEHmmQZsRBz3H75zTDs4vdQzY1wU",
  "key23": "4yxy14KtP6YQvhXxq7PjVGYCCpn5dDvzb2QXFQ5bnuaF5vd3rVxteKBrfe1KF88FFgYXVhZvxrpVwRoB8J7J4Fn",
  "key24": "39t1zrMoD9eAcSUCgHuNLZWoAPZ9fs3AUsZpHguJz764jxMkCH5AjSvyUcoGg4UVTem5RM2HUG195fX67FaJtwmZ",
  "key25": "2nv9qqaQ8cYJ7XbT3S2CbkjgigDZEQFMZcgH1ME1MuVqU2Z2tBShPGCL721r5S9tLkUNw3DoPKi1ga7BmJDggX9i",
  "key26": "48CkZPGrbqKrHPSA2SYhwkCFRu8u4T5GLK2YNAFquz8nSCyYPsDd6BKPp2fWT7To1AnbYRMLAEWzYBmZ49kRzsyw",
  "key27": "4yXT7RhATV1eMPkRcnBQVkTorzPBdYcVtySn6RUSooXD6kJwSSYBEWW6jVdtU8ifBsthfpcHcEghAhfRgVCRjoN2",
  "key28": "3HpiGSdHPpNw2kRTdUmwrW7TsLMiUYDeugwgVubKNRt6rXqR2zoZLDgr5e7WGBBKnetp7EqsnoUw6S6aEfEJxxAw",
  "key29": "4tqeHDXUcqbQd5e8Sc91xKJwbPbf6nV39WY8SE7fYmwafsKut67eJwogV57dymwPDY5XDSUWbZE3RVxApAcQxqKs",
  "key30": "8KBvFL2RgEVk8UpTHCr7ZUFMGL63B6ETQFoShjoNHs3TxqZPkrzYLVKBJc7hgNz6ndftZhiVewXwPvtC2UtsFLu",
  "key31": "V6Ume4P7boSTvQLSaHGXErjmMf8PGQL16DNLzYK9qzUuPZurxWvAGw5Xb1xANZedfjg59p3XqQ7swX7HjsVvhsK",
  "key32": "4HWkboUqJV7GHV8mCJxeNdStpKk6SGr5tgLk3JqvjqetvhVoNsQoGvq6u5Pbr2A3oiK1bMrqA2sFxCZt9peGaanq"
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
