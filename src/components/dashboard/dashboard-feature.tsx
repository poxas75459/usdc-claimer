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
    "3iiANVxHtaGyBC5VAKqKLkxjQfQWCaeNBwnm31LdV3iusaj49E93LsHbfkygsDTFAnjujFChhvXGTySuGqCg4fi3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gAEcKAmEy8LvxG3VhWK1KC3aZrH8rqFXEkdToidbK18uVfsYqDVsuYZNxuegDAyJax6fi9W3VcFp8emWx2yk8Lg",
  "key1": "3EW9LE89kDVCd8E2sAEUxeiPaEHQbu4UqKRYEoZq3AejsvGaZU1zE5h67Ztd9WhTiPXBZhaguf5893nXzZsckCMk",
  "key2": "5EofibtBrTvkfwYAmf9XcUs9YVysTiVzqs6HEeFhihRfeB5QZQk4N9wnJeFoqv6cgaLiyEpoumLYqiN5X9vqR9gU",
  "key3": "5yGHMXezwn6LdrqUvjnjmHiGjxEBJWVjfsNRMNL2ThUpMDhReJZ3xReWEWcY6FSfGp7ZsdLAFa7kHcqABCjBAD4V",
  "key4": "4vD14m38WU7jRUxpa43g5bYw8SSZkEwVk5Tq5SSESJS6XZQaE6Byzot2xAdUxMPS8Jyg6MYbyFoMGy2pP4sNW5os",
  "key5": "57Bc9FsqUUBHWkaMJYUMpvoRJkmEi84WugbsUKYDVHRJXDSD7JqQ3W1z66Qiq5k7wQ54NiHCPqCxokeuJ8qfUXAU",
  "key6": "3TWqrYT7ytAJkheQEvBxbNefLV2hdvaTFsGyWv5LTKDFyfB7YvdLJ4bxUo4V7fKHgWJvnQ3hVsKRN6V4KbPa5yws",
  "key7": "5DDSWfLegbqey6bj2eSS5s1DeiteLce157GGoxN74dQX3zmzcb3tgewF6TAgtUd1Z8FwDkFn78kYJYrGr8Es8npf",
  "key8": "2qy1VSxoYyfmuQAbNX7x8SqGwjriRcJeW5oaPa6YSDtd54aNErDNH4YBrmVXtpr4AXzbcuLVKGCCifaAFm8jWsyd",
  "key9": "ZAGs2Ha1pFztUM3jXKF1nxcFgB6HapW6gxBnLUEoMXRhBqNoj15xmnQjioHU8xhe6UVwMeJLjsR7Gi7z6MikN9D",
  "key10": "Yg1hfAC49hCf4niWWkiThCiwc5sY94fwjPxg5ihidFBowNWBu1THhKKEouNeQJgUFb5x4g21EQAWZed7a6FpVP5",
  "key11": "4pVUciU5mu5sgMNN4gqecfXgLHvQjvgNwJFbKkQsUStm694mPCki1wo197dHQVN73ds4rUycbSCa8pUsygJp4yXT",
  "key12": "4XTQBjisTBCR1QiyNELKavMxoS3uZ5FmwrgiPV1PbaKo7SZyh3JEDewY2Xr7hpzAVmADLrVtPE1aU7TozVra8q1p",
  "key13": "2dhYBzrH4B7aH5ozQiMPrqUsAs392UN6Bggi7Qr92u3UBhwVgU82Z7MFekAbozfJCtdJuQHbhS8ND37ki7A4npDW",
  "key14": "GtmeHpFqemuDD9aSh65j9pvMvkcjvqofGfMqrq8TNgTwyVFiF3Y1UagEB5QTbZcdghtTa4y7Rjr9fqt3j2ebqxz",
  "key15": "5LCHFKY32jjvFLXfyrFjKQb18QNXd25gVDBfaSu4nUMKA8d2hMM2kmmTzRpNTuA78vkWNq19s57rLdWYtmn671yK",
  "key16": "61JiEvngRA7gV6DZnr6rsAYX98HpzR6a3pkBczhCCbbDb8rfCpDy29spDb7fugB8xvpeySJRuMZBFpDrtQd7rP7n",
  "key17": "5dfkmnUz1rL7zLYxv8WeR3itsEmacLoHzM9TK8WdzkXEY1nUHfUSxzrj4mnDcSgRGY7NsfRjf6mRiyVRb8bfo813",
  "key18": "3cUxueSAcAmD2gxpPWw2sMjdNAWFArseT9eeVYnY8f4EC8qMANKxvu9ApGo595rV4BKYFDRYyEQTQmAwikVPC5PZ",
  "key19": "2o6dvYDb9ng7811jVZR2YNoz6Lp1oraqN7JdU1zeijGXhGEs7JGtb7AQafWTZ1Hz6Gh25Mqaergcj1psLJBEUkAz",
  "key20": "59R4dYVqqyorpf4DFC3jUuC2rmH1teBFodec9U4GLGCXwHMdzedghuCg8xdKPzCttPGtqXqdN4f8ab3NTQ9sLdxM",
  "key21": "57qPwrn65caP6NkzeMhkdiptwS4CKHG7mJyPqT768QkCNY5YU8kSzZmmkKQ9eCcs4J6hfNLooXxbD8SvbEpqt2qT",
  "key22": "2mrfSAUq4Dmw1q5ubGC6p7QXYKeBoaR1iEoSEegKt9egciNmkrFDJ1FHc7d8aobCvi4yQPjdWvbw8JE3iyn7DkZQ",
  "key23": "5Qy5iDwXNCQvwfk4HiibqSSU7kMkKxjq8LomMHeDwLiLU7q6PvG3MJYm2B49MseAVMNJMLiod3wV695XoFHHAXVr",
  "key24": "4UR4UZ1uj9NRu1Z5otYtYmju5UHbxVz6fyt9Vdc5ww5Sg7i7w4x9FuAFWn8S9wnCamfcFUmAkT33MMatXsqnpTFY",
  "key25": "2pdzDV6xE4eDaUmw1Gx3no1ki5c663hZL2XUjhHJAncVRRipVzf2EGcH4o2kZG4gdjywDghq8LmdGT8yx2hpNgkw"
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
