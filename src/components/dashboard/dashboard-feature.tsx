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
    "3jFmoVhRMUGxCHKze1AK7nAdCVWm1SkQD7jHjhkbBdPCAe6ifc3gwBHMX5xqHXWFT5TQShPTZCpTZMpPtuwEJ676"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BDFLw43AdFtG2cMB44DyfBcUWQuRam6gV6NTEPEujZ1BPp4gc4LwPVxswqcsZYvjnojs9n1AcfkaJLPYsoWf8x8",
  "key1": "2Z159c5qBb2bqFifyJcNEKsMCkBKbrfNFL7JSQ3evyuX7Ci8uGzYodBMAAYALsvS7RdhCy2DKaENcw5ggBiaNHp9",
  "key2": "3oaaoYRiyjLVpudixBBmNdHMF8US6V6hKPtnhiJBya4wDxLckuAXhBsBchJkV8BdG7KP2wLzcdVqvG2515tDkgfc",
  "key3": "2c4Kj5vXJPSLvHjYc26rYx9gX2Ze2p8LcPo3WkfEXk2m8xRykPypXDx11D2wrcFW9RHz1cSTqZN2mEzY8kfZS386",
  "key4": "3iwLU3eNcCmEKPHvv5qEgQ6jUyNMMWgH63Ex75DMpWheTPwBfToZhdUBZWMbYP6pMibZttPcCKyUNGdJGz1DizKb",
  "key5": "2fKjPFGFjWCUo6eBUBFwNYNjp5TQkLVbN7FQUuv875EznJuYSp4yMeDjCK2sLuQtx3x38LJPpvECpbR6kEcunW5D",
  "key6": "4dUe5WzRhB6bgdUY1nuU4nnjQp494NoxgArvGrBCeEuDAaPKMKK4vorbbaDx5ursSQ4Z43rxwBGpvfpUnvxt97AW",
  "key7": "5B7G9Zt8tvcaw5S7YzGaM9jwLuiAAoRs4wAEPZTTYo7aJgqZ7bjggJxG1fsMWfB6gtCAR1h2qzgsMsUhTw7Yhudm",
  "key8": "5wU73HzLRx83UuzF9MrsDHK2mAmcXAP16sa4BX9Sd11v8PbxE2kkewfqLq7n2WMS4CJrjLriahpiMZPvLR8TCLwP",
  "key9": "26D6pZ5Epjd5dHDxbVSWxYMrUoDvVbw1H9Eqp6zfspWyNM7ozu2wYfrAsJ6dEAWajkbJ4LJeYwRs7XQ9wfqKZPfq",
  "key10": "2ccUDGz92KGwRkKnJj6cCbyU8fPeVkjBrAEpVBM4K3MmZfzJWNreH1wucKYaVfmz8UKRLSiwN2WY66dV5JtfFGXY",
  "key11": "hwaaLihrnKDvF3n3pR6Pq2zc8kVFYroVpHeH6DrzjeS2MwL4jvHoUwwUCrkEbRE3wJvoGCBnFDULiyBtUMKwSVF",
  "key12": "5axNtA3S8U3WhaFYDjZ4uBHKgyZBAnzMAJJoF9dT2hoczu5es68nt5a5UTorHd77nLvkhjG5wyEboiQPt24BJFr3",
  "key13": "4MPnFadPDGBvTohWmrkY3oanGBXLJL2rUg65Asq3WgcgGw9XPaqgFiakMbs5zyxQnNjYXCzWfmZwcYDfNUoNB21V",
  "key14": "5sVdGBVqKcXXPoHhVxPx8PvAHnnic8hcuMYfwX7YwHHDcuUiMWCBo5b5uFQT9pSFzQg3uAEQP4WhYXdaW7Ck6GQe",
  "key15": "4e82w5KPvNtmMtnsH7Ct8JGf72UHTu5xjVvSvUMADpxyforoEHfPaEcbVtHb8Le8uU46aC1SACbd9morVXhpsgbM",
  "key16": "2tDDaqZNTZE8P6DKpE2DEwg2gHcb8fcFEZ4MJLAzcEUfvrF7wp2EamwQK133sLTrXwDyfcYM6bHg7cFQZPHreTJt",
  "key17": "5uo626QvYQSSUVuJDZ5u47VUSh14BsMgxso1JpKhfWoTr6rGbSSmv9J1NzFjyvg5oBLtoyNkyFk8gDKcCMTHBqiP",
  "key18": "5a5s1Tz9pQ8neEcnzmLtqzbc3uiuSb7HM4pi2iWZZRsRurSNq1FbsTrbXLaWsWWHTyNMhRoSAMexwamD4vRbSs3U",
  "key19": "5prNZ9EFNETcCc1GgXfp7ZVu5MsChwAd8Yrfx3GQGqekmciLGNZsdAXwTN7HnhhMeWUPgCUxBzzAZjrLUmQDWNUT",
  "key20": "5SqnvQLBP3kdYCo1K3D9ZiYbpJH7FYm5rHGNApUgZCE8yTKcS8m55aXXC2wH3qUffjyh2czxVURswGAe2ru2ozPw",
  "key21": "2mK2gcBYnYakcsiyXDLq72T6cNx7vFXRW6Tmn5V3RXqhot4epx6QKyH4b5jr2iuW28dwzQt4eNLt2mYs3WpS7gHH",
  "key22": "3paTYsQUWQzrNFyK5AygJELXuJYvCPTQZRa1wzvER6a8yYxXeTsXLuSSdYNnMzTnZuNjSC33WiBHf71XB9Nk5GH9",
  "key23": "5CRTvAbE6fLfvnK9NaT9rBw89Lb9woyj4iUbZo7qS3JaiqdfrKyH9oVxaZXiMWNNcMsxsoULJw1ZqwwonJBdQDag",
  "key24": "T93sRmQCCJMVhChn5PLbDCEXdUNKJazjbHGJMsu6YmtUuWkzVsT1fXKBrvV9UQAgCCtGbBTHZByFjEv7sGSXrrz",
  "key25": "24V7sjpJ6Ac8sEVKRJfwZKfS7A2gDgvh67MuD8ghiB4ZpQcdQ5LPN2zhMzN8decSoLVNyp62DtpxBdZMU3UMuspJ",
  "key26": "24CFd1Q8PLV6pzctSJPMjggzg5ZKDZNG3RSdXeyBgrcCmH1WDDBAL9QKpL6P9za5EM9A4mgUmLr4ADrxDGe2KdK8",
  "key27": "4tsCdXDPrcDCzNo46tArP5ZgAhG1p2Nobdx4CvUHebQgkHWQQMSSnUr3NB1a4FDDRnc6rprNwHk1NkvBFSaV4BgG",
  "key28": "5VgwSEenjgy6ZGYKxMp1DAP2897CNAAk6P6wWp8GhaWAmUpwQhSTGHrKhWvEXXjpt12CEDm4BNww2Am27dsV648H",
  "key29": "jURYxyr4pKeADyHkPsbVYyMare1WwKcAczF4Z8bDu4Lte1dMDFMbmtKsnPSqxY1C16ixJ9mqNj7wjvHHHqvcPzi",
  "key30": "4NjWBRk9DufyW9E2pHJwPBqaALdaCdkhrScSZ1xB9rGgxTajEXTuQV69VbnZXahr3aMawrunqhZVYLcwSK6tUnb8",
  "key31": "34EpfyD8zLL8YDQgrmCbgJShS55fPTJE3kS5mcDQocdxjcdsnAMk8Qv4wsYj9VwTN4h7cuvytx49rbJBymAjrgr3",
  "key32": "5njsAk1N9k5TiQBzJbN2LZWRDTGmAj2i58dPuqZhmzidSgqnWnnahvimzL9w8KJ8Ez7qt13p4NVWaradFvSFvJPc"
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
