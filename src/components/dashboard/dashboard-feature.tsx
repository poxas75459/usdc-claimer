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
    "4mdTjWTpafVXjcrk7DAyx3veJYDVExX6eRMvcxc5rmK6qEQgFVXcqKK5HnennetBNhVa8Mgi5UVygMr9VVU4cBGi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EChCFYGj6DSCTi9bXrVz7FSbBE5K9gd9sQS1hUPrvdJDeHHX4Ktpp1RnkWreARso2CqhRjE68aCmVCZCPxQJaBz",
  "key1": "35xQxggMddUCJAFeX3Q4eg9GsQrNqanPaxn4x1Rs9u2g6h1J4Q7P7GtANUDCr2Nm3B941j9vP1M216Xgtygn4BMJ",
  "key2": "R5guLLFHT5Z6KtsU6R5vKhqtTCqvRK3Z1MsUGfwwj3Q3ZRey1o4VXVX676xEveLN5DXVRJ1DUYhjJTXR3UQXnvR",
  "key3": "21uhewRa8p8kHm1kiVqgmf78NPDmDZnrGMqyBSKMAVTzGJjANU81g3y8PdQPzRUJcwKsB34TAN7xtmVadKnfPLbL",
  "key4": "47BdJnvF3RfhANxP8DR8cx8A8cxGZzWuAgrxzZhxNbYeMG7xo7jiyHGTNhrcqsJ7A9vAE3dPzV3EoopRJomyiQ7o",
  "key5": "2ghBzdcZaN1Z9fa1TWiEqtriqX6bPTJkJjmRYzbzAdhkTkotTPVBPWCWKQS5YPqMBBAvm2QSVUgMLRHSehNpddPV",
  "key6": "2LZyScPmEj1m8rvmRdmCvQEsz4JEKyRj47ebBpgK8FmZBaVmqrFLYeddzwzMvWdqD6y6tK2XxnrQ1WBpysMNHQ6g",
  "key7": "3mfetFCQ5WrimZNonKYvJSccYo9b5dBjWUYMNoDvRDxztC3wmcYFdKjGWbS3RyFjYpwPStENesSjz5LKthkCyPGr",
  "key8": "U9guU2xxnZ9EEDWgCAoitp7uHyV2PFV2HcuWBDrnBc4zutjq8pAXPeYjrEpmUw2QznFksfpF17YKEh6De2HAfE9",
  "key9": "3jxfajWkrt3tfBaw1s8L6xgG8CEnze9hsQNtEYS9siRNSzhdNeCYKSzu8USZEyp5ct1ZDUoPK283uPXuJDhpb3af",
  "key10": "4FSDGQuWK1iGFGiAKR2j7qHeMH1cMpcRgTVE3Hqx5ECA2YP2XzBXiQEdQzEfTzVnEuwk6jWnSa6jn24bXVEVZjbG",
  "key11": "4guju3pRXep68FpqJtE5MfF4YrcPaYFcAiw7cwWAcqb3P1JJWnqGyU8TiFv6i3peern9TqiakuKCcxgjGcU7qhV2",
  "key12": "4dR1WaYTStVXfpwjR6ERHSUV6Cs74cBhtqtRLgs71RjNShgBbFM85rGy5d137Dpskhs4nCpt8WASo5Z9ECWKHuNQ",
  "key13": "467XevJNsri6f82ML9YTUtb1HsD8SXvkF1gyJ9ER8ATLgfMt8exigUPehooGpd9mNgyWyJpCJgLBtHuMYafymCgf",
  "key14": "3PoymJ7xbt3zxGZnDHxRkjezvaf9QXvoyqGZcgqBdVSsSfUUqa9eBUb5TKChx2psBzZjnpyLBf1YA9Hiv3EBh6S4",
  "key15": "btpdUbw5EA9mVB2Q2LviEEZQRYeCNginKfWBRAefvzMC81u3bLbMLcvoW85SrzRsskgMuPczVckvypMyMsYpLhi",
  "key16": "4m7gJki7Zx3Geu96vRaq4po5JMZA4frmCjE9pGKHxXAJRoLRLHxKBPRvmYmovKXfFJbqmcp7T9ucxkifMkMungCn",
  "key17": "3a3XjoWkb2CMkkFFninATeCm9ugHMakEDtaWiSarF2hpMCfFkbWEReM8xjejQvftBB7HTYvV8T4MHUWAZYFKvg1N",
  "key18": "4WSFoExnLH18goRzHXmszQjSoWTvDaK2t4ykEjnsVQyx74dggbg7qHB2RMqvtL8bQfjC8g28d41YP5aYBqcGd2mR",
  "key19": "52hnsocRxMmbZgEbRGdzCFsgFqAFFHuuH3j8G5QeUYgt12Bp7SpNNQkhxQtSTAFurzZSppEL76L4QZWBw22fnGyF",
  "key20": "znmyYKJEQRZvPXrrdyDtGknxjPTezLcjNmNFa3ydWxasAHUdB2SomMLPEqcbQuUUuV1trx4d9q2owNhd3ceKN9V",
  "key21": "pKXpA2bEhhucNbS8sh6oRrJMyAabPuc5en5xu9q1SopDU2dZzBQwo6vDujncwxtrFSQfoPSRG2VrDfTpPkFgc48",
  "key22": "4YxkTMdo2MbvqkZz46Eb3J9kJmSqRNzLFNZMm2zx81ucaECcYMWpzKrFc83CibaNMuEkYMnAY7BANfxGYf8zd248",
  "key23": "5tGpH7wCV7HwFd42D38fCWLQmnN41dSXkKhurhMNCN1skNcbezT8gZ2zffgZJwVfSDWkwk7NWFoyyKD7xNRHPyLb",
  "key24": "2d9kfd8LDnmr6U3zWjqf2VoVcAhpG5EoRef9p9U4QqR1RfuRs1rETQ7akPQLCuqcn5oDvDy1GzJjUxv1dLhrQLxp",
  "key25": "2hq3guSjHS4LuA8yACLykCKAAez4ZArgjwFdnSuJ5LjAVQHrVrAurvU7LDD2eUhuG9WTo8Wg2w1t99778dZiHXj8",
  "key26": "8KAbyxVR4b2UbeTPgKLQsHTEcSRvyrm3J8CQa6rudReMm2V9QRXUFx49s3vjYieQgbpsA1Xgrakgn88N3Su7WEX",
  "key27": "5TBGhEziqzL9ZnSfwXub28TM8ZSghhxcB9tWA2327UYT2FK752vkMZvcJcu6R6MqE93ow4i142tpLu6HDNs4FWma",
  "key28": "4FvKWXUNGsWpgNv7PVeSBAdTnvXw3paRtd1eM8ZSmGPJc9phsiaVDgWqnEGLY2qJdjQtvrAYDLKok4r9JC5e7Vcj",
  "key29": "5HPbWJPCAzXRBmxx4ETbDi4HsiTzF4QB46qJKRLQ9NubtMYLQ6kG7spDxTmrpK76rnc1zsjkqq7j3pzu8nLayX2U",
  "key30": "TVSNc8nTzd1kakmprK4ooQxx2adMSvtVBrb4FDcDM5jtHocddmG6jTvGH1ktPbiJKEvZ7pCvsuaSqMto5FX4oth",
  "key31": "3WzWgEuN22WxcoPyBSw9SVsNvkinfzfQjLNFX8r5qjmErnoAP8kbr4fHGiUECumUTpHiLy5UG2EmidAWPMjLpaoA",
  "key32": "4BFP7zHVamEjNwKFskhyaGYcESQt65hyhDXKYa4MiaezEeZvfa1crULBtXmBNS36JqkehwroxttRmeb2MbQyH5YP",
  "key33": "3V1XPWo77y7WjV29uT5aT2KnAgwi6pYwp5GPXjPaWgcV4F4YdVRgBbhNZ4hcDCKvDqTqPXUu4YkmajU1vtJek1cG",
  "key34": "3Sbkhbi33KhAZzRJCPxDGFMxxc2TAcBpW1ksJqVYcAyTieDmjhMoaShtYh4XQoUvDryMLVZi8RSSjT5F39vouqoh",
  "key35": "5gCNGHTSnt2RgbYK4vxnmaMSBpi69krUdRcy5eCp6eVS2vWFATpSiS8aiGbx7WtzJWfH8Hxx2nkGD48kCoDPW3tR",
  "key36": "2ni2t41qasF6EsGXjeSs1xNeL29LqS5ZkpA9rEweaeWbKzT1maDnDdAzRJGaZJBjbZod11LF8oMFmESuqM89cYm3",
  "key37": "tnoD8PdGhoCbU9jTgw2T7472EDwWKtT3pLqYgjkR8qpXc99xJF9zVhTEb6htzHAWSsy3bDwNBoadUdrZXxAt1Sq",
  "key38": "1UyrgdYM5KJi82wAVrZj8GJ3hZyyf3Qs5YdNJ6rHXNMBdY6zPeVJ8DLG9fVQ7nhDrHjkWzCHsMJErFuVAwvLXAb",
  "key39": "4Q4dWAm3aS2qz5Jh8hntnZNEqmBLqiyhLs9XC9NNCe8iZtv2gfSBcN7S2p9BVSZwAL2xRhN4QirmvMkzcPBRFinW"
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
