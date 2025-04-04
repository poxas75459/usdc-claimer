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
    "4JHugPV5LipJBw4ordMxK9w4TQaWqQabbpmW9xkxLxaV5yTFDUBkiiLCw6zU1a6fKNrtvDAeRTPRo6htJFCzwWR5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "USTcua7MNcxXe6pzm6TLadmW8u3puYAaGvrvjCJfYqifdZGLugM6xPS3RfcyvcyuFduqwGsEmSVZzxaULFrw7MP",
  "key1": "5ucjuLEHooSa5MxqLaUH2tSP2RqdmFhu67GgprXeKgdGFm4GQfT8cz9p7d3PVjbFmpQ4bdovTYFZnJfEYtEn9d1P",
  "key2": "2c5oAFjRFw32dFn7RgjdwEtrUoGnuVsqznvjQ85r2F4nxTqzcXE6sntoUURPwbUPZHQXw39cpVkPXfY7wBFQophk",
  "key3": "3GcTtSw5CNrWrZ1RftBgY2nonTBCnERhGN8bXwPRijwX9uZegyNGNhB8H85x4SME1pbM6DRqxGPKaxXFu54KLFh7",
  "key4": "43boLM98FN6uuBmnR1cAr2rmHLCbAKmkcS8UvrByJdBdTgipvX1dF5QGtFgenj15fPN6VTgCU4s7918GMPw5NcPi",
  "key5": "4ssrTU5PPaYEBr6ncPvWDYMK7UfSmgwWSkKt9fHT1M3HiLmnGTDPyBEjY5yR7CCAEvMBuPqy6NuPEWz2BWgwnrvK",
  "key6": "dnz2jGT18qhcBJLRjHmnS8t9szAa9MfobSehKMGbY257j31yey26Pjx9AgqQoWo7hN9cJM8ZQCHAu7HHM6znHg3",
  "key7": "4NdnP9JkoNsqg9vxzH4y8V3C6yGjwjRTMooF8xsBDfA6WHmriRfRKn2CEq5RVN7CoD2FJN4Vv6fvM75QtUE5kaaV",
  "key8": "3AGFJrEmU1M47qPjQjExTpBT8RcqsgFftLUEnUTNiN7ZyGz8NYth5DR6iFLLiCD931pSTKvT5KizPx13tGPmCTz5",
  "key9": "5fKwx1CeAKtdYb8NmXecg7aNF2vepUkqLnS1XwjzxUXDwfnzpTZc92oxSqxWhkFargCzGDymauFqUWt1r2ECBLdA",
  "key10": "66SNn9hRGS3QFKwtHLAEms3FpYZXtJvKJtbAN731w21bqnCFxgGVqWa7UhvSNnbZYmHaNxZt3PFKcdbAWikj8RNo",
  "key11": "26kSwErmrhj3nFV1gc8bwCF5rxTkfXst1QLr69axjotBuYy67JSy5NMBN4DWVayA3p812X3YTUAaVEhZuFvKbBkp",
  "key12": "Px5kM71WpDEaCFhnwMfiniWwCutD6oWRaqLSzpBYLdFvDFofsPzZWdY1STTgKFsw4gaUhor26c9DKrcFz3AZM4S",
  "key13": "41uC7FkcaT1ZSrvWXCLqaBVnWeBmFtguaemeaMmSmaJyeNXt4qZoKpAKUU4Te8JcEwMx51puDviRBzvRzpueQZSU",
  "key14": "2w8SPerDK16QE2dgL367MCGkBo2LdVzTsLFd9rhmaTzAWZBwDNLx9J9eB9pyFvaQHN6p4Lmkck2tgHeUHRLZZFp1",
  "key15": "kpSSUAqkaccgMvFBY7WXkyigHukwMWRXYb4MCDVZ9Wuoz88d9L8e9s1ijK1Vn4K6LzLPVhVDkgCw9czcRRfV887",
  "key16": "4XjnUT8QQvt1ZiUphChVVtveorWYWswX2GwCMJ7iEHCbxtjAqfq2YnbPL1qwupc19cpjY9Qs9saC19b7BHnm1zjU",
  "key17": "289YDzMrWHo68joqkYPENZMoUEjSfU6ZujUnJCtmsgLn51HBMrPWsy9kkWKW69aCDCLsMopAQ2cMw84PXtLthPnR",
  "key18": "5x8z8VqoCZteEvsJdcedzYzuSgQ18wjrWf4k5ys1U1y6JP6DETnH2goX9MgvBiMDGcxDj1inGY4pj3Vk5Awryzd7",
  "key19": "3EHjzDtCYzp6ApkcewJKZ9oibW42jYCcxRjFP4XxHVCPSmeZKobxMxjguofHMt4NdVJj1y9DGGXVg7NBJsdjGa6A",
  "key20": "2HJADfZGuuxnnZHwC2m6A7uZKM5sw99oxgFFrTSGXoapbUsHtQrUf8AWHwb94Zj8qmD3MZjQziFJ5HPbhqaVFCjd",
  "key21": "3t7re4F1N6UoZVuaMsy48n7MikdwPgyJnYu7MV4MEhhgWDutSmZf5mBg13mwhRqLkGtRou4mNAKazoUnEWA8ofPz",
  "key22": "5yBPRUKQN1d5BtLuCyEm3R75fA9vmWSdDf3gW5VfgwdPytY7ZNo5RUAY4b4zjt9JvrVSDZFjPbHmEywiuPc6D2s7",
  "key23": "4ETV89vdHSkNKwdMc8gGnVJDEURU2XMd8tJCyrPuNNUmeVtwXqnRqhWqBtzASShGtwCoSdMY42X6wmBJmDWyPdZp",
  "key24": "5kkSxkwCvhFRnohd3JpVAX22n91sAu43XxZqqxcgcvAfNmSZhbHsmhuQzS5yvPeMmT8W7W58utcvRpxXqbeW2hNy",
  "key25": "nRTumeWLpPxsQptQjUgRQey6mJZNXVt7AoLLUPhRhs6c5hj871MadjyvMwwQqwGpF29Uiaenkw1YfTGuLYaPMkH",
  "key26": "2hy1Z3i6VSAi2MWzBtBhBR7Gd5ZvV5tY5YVGbBG4MofBtTNF68icxnYnXMqS8hDYPmWZ22JZbBFhaWmXtFmVwfA9",
  "key27": "5tTrzvCFpvHzVtmLhuJMmQJLLqv5ez4LkrUDri5iMyRTQvix4txm4g8DdZ4DLmScAG318eouBpa1oJvqCjkXkv1o",
  "key28": "44aFcWPvgMqS7spkHFWQkWi8ExHBfz2jFaZHY4Tm5yBuK8XtiLhJpASwiMRA9MtgNvaVfW1YeDKG3oDoomGtfq93",
  "key29": "26jzrFVyZHYPFLPPw7SvdQ1BuYmXxuYey3RVgZsw3G5qszkEkzjGKiVSz62Ff2RoknSMAPowNQxRRk81473WSotq",
  "key30": "53KYNaUKGwWNxx7Cj9bTrXJfqjGP9aT6LRCepH5NYM8cuD35u9yg8ak7Fj8eVUF53TSTFmH5dLdiHxrRkidh6TC8",
  "key31": "4w4fMnFqrpTB9ALyQTSnA6ESArsvBn9GUYaMuvWGnkKaKKEdcdgaEkji5g2tgiXrWFB7Upsbp4RLDCPPZmWCDpwM",
  "key32": "4zeAnKtsQMoTXEd46KXm11LWom7oqkrLjHhzKXEUyuRVCArVwanrRzny5T2b8NFsdfJvAZ3bdQstLm7LQ7ETRVN6"
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
