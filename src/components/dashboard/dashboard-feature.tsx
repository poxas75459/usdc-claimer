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
    "23ZkAzjt9whu6tafa8BAFyFyUEZhwxNejhxma5LygJh9nNGWMW72hXV7DK2p2htjCQ7FLSS9oLGYeUspKboQ43wB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pUceKToQ7jRod57JS9mVHDtQLsFcDJUvCz1Yv4EMWufhEZQaQFcsr3N9NHXFXwcsw4inG3CExQNiRQ2eMxiqkH2",
  "key1": "APN94tpMZyWrikCmbCrRzihuoR2K5Fcm619dmugLBCVwxwa71hSfN8WKVUwJabaGYys1cqH74NQ5jkz4yvZ24va",
  "key2": "31ye9KYCssRWR1fCUc2NUG7zSMtmJeyzrcvA1WKRzricUtE8CiCNrUdykTHm8XwdZ4idWWeYbUE3Dh6VDw69Z92M",
  "key3": "CZ4Xbmgv8cyBAsFwmgpcnDLW4mVUH8j8Jm51doUtb7a9QxVkf8atwxdhEawMcEAL5cGAGZYc4v2mdGbLCihArnj",
  "key4": "22QafBXfVU2wyxcevQkMq53X2pmSZkTPTueK96PoLLfiQF7zS5ML2YSFwgK4HdEggNRr1hxqFm2xT7tfaTCZWiMy",
  "key5": "2Y32AVKRQ8t76diSp6DChTtAn3a4RngXfWEyAuqchPkv6NNL8zek32R8VxtLGw69g66vK6dmriyiQFs1D5Kzz72b",
  "key6": "61fWZs2m9SBR1r2Vf1JgV99sdmfUWPv9RfSnTjL5W3v3fcUvWawPoUpTp6tg6W7hgHM2mXbFWMTvKdtkaETDkJx7",
  "key7": "uvYEGBpP4usU1vRoXcgjSoiFXiPAwCGVq51BCCZsYAsxpM5uq1QYDdPJ3d3wdJQU9KMXVL4qraBRgVgeC6THKrf",
  "key8": "4ymyxuLe7rBSbfCsFMhvM3tmZC6gpdGdBgHdSvMCY8KZ5N1j9wHf5AYHLHzGZ1tCKQN3SGe6Kopo2B9sErrLpKmx",
  "key9": "5jnjt6YZSgt1N4aC5DcKwaJ7PcH8a6BhdvcFxGrJib8Qy57kErR99GVYArVHjYctqA4azjZovJMi7eGdwhhMi6t",
  "key10": "5VrGNMvp6neKzBfkeUCs1GgGEwhNZp8JaUKCnrA1neJdtX32K7rBHosTSQaQNYjtjgR3NMtXs1FXJMTYTbMKKRLS",
  "key11": "5HyV4kxKodfSAcqJCYZMFmqPMGHA1sBu7fanaASCLUMJvQjBLHkM7awChsTKksaX1kqxLL1d6wpat8CzdwweAh2R",
  "key12": "5nkdXB2PstSgzuA4RcqeTPeGPqfk9wP6yQNQ79vQAuzSmYzG64u9bBqTWhSpuQXcALH3uuWgjLdvMBnWR6VfpsNG",
  "key13": "4crqCBcKLJ48g21gNQydiuqBQkjnAzAxDwEDv5qSKZySYqNgSH1VkxtYuy5BdKsJh4w4uJ5oVG4hSEbzyyDJaqFQ",
  "key14": "xRMgq43xyKULUQ69GQ9sQQT4NkKtTuxUb3tfeuwvZ5We5H1gi8XX3bys1xCFsAwBAHF7QuLoCuTg1i3cjA9rSfF",
  "key15": "5j2TAyuysotT9kbomuaU7rCAvhgwxsEx5fEb7U1piXDimfntmEsdkzT5Bmfb3UQC7K8gucumD4kemzXgAYFfMvkC",
  "key16": "9N46wqPHzpyHphySWBbnmsv4Y5UsYcjuoVvwXfUJc79uTaBES3TTEwcd1hnuKQiGeq3ua5osBw8b75SijChk2MF",
  "key17": "4WvWBVDY1KFNRMXbakdrg1wqwjycfKtD2EGF9kBsfbXsThGa5ENB7GUwt7TsRxYtT6yEzZWrbozkFpRdpueCLZd1",
  "key18": "3wA542xfKRypgCa5FH6jPEUx57t2XzYMEmigiYMT7iFhAwwVNW6ZxYPVvcXCpjdAPakYhbyVyDCymqGf5sFpf5wr",
  "key19": "2wtveqasDeACMZjAeUno9gCgth6A6AmhuuNeB6fmGNZAt6umQW9VQJErFj8xZx1YmZSkMWxbxi4vbw86ZrP2LEAp",
  "key20": "21FuL2ZdM2sM8vjQNRDgxtzMMsPMuACh9wrZNdYMFpgsqTdkV1QoqSGrNrMS3xCbfksJ5fTKd1h9rENwf2CcEXav",
  "key21": "21YzwM7H8me8Z4SUXDcmpSAcVFRZjnR5jhCXALUGZA7Sb58Dn7qu7ZBxXHKi76W9YWBPJDcruRphHryKxXcjgiTG",
  "key22": "3dmEtP6jAKgP2vBeByFVsPMtXhGLDbE1m3WuALUsgTkmv6dbaV9HyBi6teTL5qNEzX2afUAxcoDjnF4xUc4zGLAi",
  "key23": "32d7vh6hrUXuw236pqsRaTZjKxN7BJE79D8UfGXL5ypCcCcqaLpRLiTtU1m4wyeEoQ4RyiKQWW5Vb5N1MRsGXLGR",
  "key24": "2qapWp8Uni2igCqgPziVCRDvZsXw5D2R7BNErEoCQNrZYetu2qotHPg2fxZt8ZB1SLepb7jtWF3NYEPkfPHFXnDU",
  "key25": "D19YK1fhvy2MqVZWyA1F4T8o9zhz2EhF88o7puFZwxHPircXaRND3odxo2athro5HGpxtVZ8b6uYuxQsHNs1Msr",
  "key26": "YBSev1Hwc5kKfBoKfBN7P9PP7dZr1iuTUGL2S1tgf5qhznBps1h8CAp7u5B4PM4r1abT7YswVtFHrS2Q4zLNyt2",
  "key27": "3coER7kyuuFh9JKFNuysHuWDWupAhaNmX4bjPHYmtoAL8ivW9Xvqg31ehoB1Z6CVMj51Ry9nEBGE6kUMK4S2yJQk",
  "key28": "5hjfWWyKtP5dvrScBwjY8oPmTxr7gGjkiEm6va5gDeNz9qiqgraqtpBPWGLjPH9dgBzkgB6u8cSDFiALtSnABwCT",
  "key29": "a5V2wjah9m5PxvCk5Cs1n3v7SEvBQTNZLgdQWKTnz3U5wKb8SvxPxbwN3eNdbUBA17AvFjJLcxRWoGCJFd3NBHv",
  "key30": "3VriprrVi7sLLuiNBgVKgtYzVnqAk341jHhbeH4v2CHsdfmCAo6ZQmoSeLWQYXrz3NYMGJ2s1FM8ZBKNf7Uk8xjF",
  "key31": "3c26uANfGZR9qh6Au6Q1RpvNrmmgf5Uxk2N2mnW2d6LuAdZxQJ2qkiiVEgFPG2dFbp2u5tGz52TeakfyrW91fLJB",
  "key32": "4v1QtT7btYmwqyxpXSuTFU7tq3CmXCwkSHys8feChEXtcQr1RNQNBm3zbGp1z7Y3iH78jTJbzdfamkS2xbKv9d2Z",
  "key33": "4wvctTkpN2khHvtYHzgNcEDuBBzVz44X49Knv5CJXzped5oiMbuWhAQScoxS13rH1Zr8YttZ14ZFcF48mrCo8Lfb",
  "key34": "4oYS3kLGTLS9dqSkZ659NdzE26VETmnGuXta4tkq11mW3JuLRYdns7By7DMC9RJ5qc61BxLaDRmkzJiaTLoaebQj",
  "key35": "442ZSaHcxv7yLD9ysNt4sE3RTqnyVwpPMQLrdMDTj46Wb6JCXYvsJCSvxQtQLKMyJpWXgnmB4vDFzZLNQ8Bw2tLR"
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
