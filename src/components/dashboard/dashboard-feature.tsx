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
    "44JdBoiyfGaVUGZDzbDedYWiXBBigYSGrAdQX16V3kuJhCgdqbWgkRtEcVwJVuwQf4nk2PSczQdmKcAVFV2oiTy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z8s8YJoqCnTubgAbzYfzbrFSAtviy7PhxZkj48LbJ3zJ5j6Luvh84mNmrXZFt6opfXVPT15rPufPBpqdQZrSjKo",
  "key1": "jH4Xa2ZDXhd4iuYmodLGg8bcMdUSy4ERTECVcG669qMYV48weHcYkpwyERjh9zc6S5cdunWXu2BkUWp3kNaqiKo",
  "key2": "u7evwTe4sukiSRJdanZSKMu5j3pnxopXguGQDg6di8He9pjVhGEfYise3LRjhamyGEFBKnJa5qMn5xNmMr2Hv5v",
  "key3": "5TWoVYw9h8v1ZvjzZeL1tBgjKyCv15voStoKk2A6XHs6n2Lrjifx2DVVYo1eyVxAcpgbN8Mcd8k3m3x2yNcMhmsA",
  "key4": "3V1Rn7GETSvZ8qU4sMCJ8zUKuoTtu9Ec7mU7uK9uyK5udqR7f8c3FRjurHD96UUNsyTBXDK6nE3FiLHHATXPScAf",
  "key5": "4RoDnN2EqKW9vd4dmaHycgBMKJxwCh9L4qNBfhK4e6jEuigffZoHRQN5DzV1NPLczfRUiQWvRxcSLYDrDjcPMNfU",
  "key6": "3hzGFsNaw5h86izF62d28jMzjLRYhnrgwUjriA4HS5K5j69WBvFPriifLudNh3e7j2PVsfpRuoPD6nN7eqpJrs3w",
  "key7": "51epmnZJxbheNJXRGk6kdPm2PByGnWLXHbvLrCYn21V8ZLWeDDTY542ZXmX5BsEgt4YnJjKyAg27Nt9XAe1YfdS8",
  "key8": "49Mz5ic6TqBsRjKjTkworVQBZAS3SgVwNMXRKWyzC26Hm4DsQiwmtjE1YagiVUpNjFyvEgR1qqn1ijL25mv9ivxr",
  "key9": "4JetrpxiwtMXtkf7XBKiD2aHGs1dLtXPLru4f3tYCKh5QAEMttxWEtfoeKMLPdvdoVtvQkLUGLDngFyWTNTs4KC5",
  "key10": "3EN1qajGrwhRvhNr28kCgyoSJrrREDxkfMRF5d9559jXAUhKVNY4mFUqu6WFZJDbgdt49WqcoEoetSE31vjtRaYs",
  "key11": "a74CEE1i7r8mD96H1h25w9vmY9zHgeP7fSNhox8ep2h1VFJ9pMdRXVeFfiVhzjaPRZTc85kycPs9HA5FYzvwnbm",
  "key12": "2RRLgEbRCCMPZTG8L7v1VfmC9Dr3uH8bnHrCFFz81qR8jSTrnASBMxZwTMt9S5wqdEJhJ2GfRtGGqEKkQq8L8ryq",
  "key13": "3kXURNj1suen8qA3HMcTzjqLTdWBoDEqFaZuCmTmtDVVJt2E49g1PpJQh9Yg9tgoJkxXiCDQbkw4R28QSNxecHky",
  "key14": "4EDxM6meASm8ZZFcGhRMmbDii64AdE7BNKP9DigVYhoptDyEWSD1iY5PoPWD1stKiTpdsX7uZZEjkBiy4BfDKNKi",
  "key15": "37u6Lga7iggJBCKdv5P8yAkBZuv556622FHNSZujJ1NUKGRCZesNwwzA8MyDo11S4U7F9g6CKxzhMDQzgcZB51gs",
  "key16": "KgjnpG6LHdzpEWxHWMeHcn9o55Yr4kEFvrZesA3f19eij7qA77DsjzAtLKmcQgGrSRZvzEtJfuS2CR3ne8qPZpH",
  "key17": "3vFE73ofEWEnLEHPtVU9JPW7Q5yaQJhPzkT2KKeHUib3UV4LGsMzYeJJUokwTSxdJ5VozQrdr1cejMHPPKabNTLz",
  "key18": "2QsbqtGSNUdhgy4DgByMtbnMQQN7dH4LTEW4G6pAUhpVBi7Rnof5URKrFjrxvJzt4FDEfr2xoTbAGuX5DbyYgRH",
  "key19": "48JGjcEBSsqyLoqhJHymuXjb6ZL8yLEf6T7C5Y2q8L66Jwa5spw4a1ZA5xsd6niDyi3E5uYBdEyYLqWSvAvNZhYk",
  "key20": "3uxpaMMZR1pMv1TgfF44ksnHkj449kdPhzV91GqUxjMUad5RjV69yJpGeDPsG4vhvy1am8DVVGFqYA9oUiNRXbu3",
  "key21": "2LN4WPp4HTEgHauUW5TRuJ75F6dio2eNnqv7KJBx3Ggid6biY7PfZJMxLAcRC2PJARLRdg7tZmdxrzb55k9F1hm2",
  "key22": "4ABXeqApkdvDgKJ85B8zWREVrLVC4AjxjRzuenUtAfDa4gCr1gK5jauP5f5A4juPHAw7HPHeNh6ppxbBXBNu1pi5",
  "key23": "3wCKc6jdsSZx91MXNcVfDu8hccms73egHBqFEUt44WuNq1cNjijRGRTKBJuCER2rC98VexrrMgk6bGSdpXTvuyap",
  "key24": "ypKdahk9VHF5WZUff5AgLY9YyvGSGE9KDx5AhPjCey7ySVyLvNHiiBz3iLEoaxzx336vTwKNB3U5sGp63Y3fi5E",
  "key25": "4wpyakaEAye5Hrtp8zvEhpeSFT6HW6yieejWkGDnzUcFjF1xdDzT7RbZg8MA38NTy4CG93ZqxF6yh54kYz1sz6YV",
  "key26": "4Wuu7evzidshNDKXis4MyL6eKfnbVMSF1gThw7jFMhoBc1AMEUrFvQbYoi2Ns4mkgeTdLbQvy3ZiVF3XYL7AdQvf",
  "key27": "477ectmMmvso2hqc2j9ccSQh2H99n6gJJY7X2uVptSZ85jdRmofTmoRYuc6jDW4imMsVZ49BDMB8bEX7JEwVum77",
  "key28": "TzVCMkF21uT81vXRCbtxixYTw2yAjc2oVV2BnCBz3o3SZvqHWiAmUYK7bKbHkyWCN3BEcvdeiqtSbsFRMeNakwx",
  "key29": "hm4mdDNX4vp8bSdmy4AqcHEKfuu5dTMbvGYjEv5DiPAfrAuuocF72iNCtT9KygfSATHWepf9JpFTJJH1y3Lwn8r",
  "key30": "4ptCPB71Tdsvt6YTNnRZHgYV91LPqefajyifnyyGhMv8tuzd2XWd5pvA6r7AWyLQsWpvxmF7YL6yu7aPj8vKtMwh"
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
