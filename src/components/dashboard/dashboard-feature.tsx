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
    "MkvF2sBxGygVH76P6YKJavKiR9Xm2gnzfAnS59xsjywXqXvKNBVTEwVHRP7ogRpETg2hczs7p31fcJiUXyjLuZx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yRR3D4tLdr2FsHVKew2As7B8VxmnyLqYXMfePdMHwhJd8k4XrYYHezadxbQK93pmWjwAQo6nHShVRf7TnPM3txD",
  "key1": "5na1dKYQH55GuEDToxgZQsdHBwzq6REnmxYs9FB2AQxsGgiuUz39kyZQZgp6BMKa83Mogu7kRZcyD2KNPndM78K8",
  "key2": "4wSMK6YcLwhCEriSwB2vucaZjymbyF64bMmuodKeiYZhBDyGiBffuMnj9NEFBDWZCrJCyhMqCDP6Ca5YNHPKtMeX",
  "key3": "4sWRAbWqGmZhHdNj79hGveXZMFDQ6jKhUkzWW2G94yDaBhFtCpYTofqmVFMjMRyoFkhyZvpzokUXkLDQiEHP1ZQA",
  "key4": "3TXECowQzYyJBP1s6oRKE2CQy4uaGBbcCEjJ7HgKsV2RP9Twow5thkB1c2wYF1D92N6CkJHjtKCfVVknDPLe6QMS",
  "key5": "2rjpYCrPTL9smnwSqzi43sr8GQPf9NB6UhW4n2M2B2hx9n4M2Cd1HVtnN8ixpvyD5xCxiDQ9PskGFAfMMvojEEER",
  "key6": "3T8xkQ3iERGTEp6e1242qy134uPWZHvZXcLKnSQZsYG19o9SGjiSFvy1oNnA44gJfEKSfLNJPDGBrvAAFersRLMs",
  "key7": "51ah4u7UnhGUyK9yBKWgQEo1281b24a51SyZcUm5P2tCXwwkqVFm1nkKc5gRuRFkFvxrqsR4jcSfP1TvWuBAvtXz",
  "key8": "3kXW5i1fKc1wMsHaZ636xwjof9e6SmddiXYLKmZ6CP7o3gYiPsEq6mEt2xyAgXSbQ4HaCqJ4iAWrDT5sYCA4cSGJ",
  "key9": "3VYguTmFRUZS3nJEQFKBHHU5bFn59P72teUhNQJjrjERKnEgXkciojnvAN3UGadUxNPHmQkJkdByaiY1U47LZVG7",
  "key10": "4XTdX1Dbzcyc2uFa6hJx7HN9SP3LU1AFHbSX5mKpvSgAWHEzgMmMrH5U4Ay4aaDLkpBRD12afTsGd4S4SQV74XQA",
  "key11": "4ThUA2K6cQDBxWLo5JiZZf3QCoar1kjxD7ivWxcziovVsAr9JcRMYSd9TVJMnzgJ7LSkEkHTTSYaY3K9WPAcy3GU",
  "key12": "4R3Hjnd5UssCUM9BwHrx69tHRxQkjXv8MBTHhVdLoZDtjo3wxenxRr1e6z6SpxPMqLMqbCbBEu5nSAESX4QTUdjC",
  "key13": "p5pwamV7k2Z51gmmjqvangGahtVNCcKweg37CvQxsL93VRmogd5Gg1znTa3uAkpyq4ngdm2pa5Zjkc5UsASqMMv",
  "key14": "5htdqmoFLkfE5APR4WX1j26E3TX8bwouXfNef9uhRwwWT5nnE1qnMz4mcbsorDSaGLqM3iRgpJK3ZAEUJhWrhmmN",
  "key15": "4sogKiNsvezdvq8cGGPM7NKM15vfFdjDNqxe4vV6Lu4di3YLSzwY93oAXHu1NRX6Ydq9AAiCC6dWzrjzi8DrfYwT",
  "key16": "3AKsTnnj3oj31HDm1wqscEc8x8JxUrTMu6A9LiF8Nne4LKVTs7bWcWwdAbYDTXRcgn6dbk1snWmNqrPXVzkFgpTs",
  "key17": "2fz7wrHshhmR4DmJLbSG4JNeS8VwRTwt17itgDJ3rLPzmJecYeWZhX1t6gTrTsP9ek3Ny176QryaEybWvwgREP2X",
  "key18": "31QLHBfap4WekgrFcGnZbgrc6g16rkvGZSdBfWvkVt7z16KTsyKB3bq2KtKx5oDPmhNjxVW5mVUFLuxMsQLCVkW",
  "key19": "37XapTfJCrbdeE7xBjUXSMr35mGXUqGxRwp6h5mkejr7v3uQG52e5ZQVrfxG4M78WSx63GcUorUAbbMEpxjSSdjN",
  "key20": "4kRWRDSMJhASDi3cQno3bLTHRUBsjbA1b216MzHaY2YGrmTVwhNm7mnHu9PhKE6euNrGnmnV4vX1DCycuwy9dfXe",
  "key21": "34chKXuFVDAcHyb22XmGZiSMJicH1aAqNbvHCjmm3oQLyYBh2yAwcVatiAKT2Cn5TAmmzynSxw7GF9SmpDivWvMc",
  "key22": "4vBqMusDgmhdM8HtBEpGQ4BU9RsZTSkL8xuVV2e8LPnFxzAXkEQDfr3RKQz7UcZMuV4nL7vooRghaSiMgyrGHZAm",
  "key23": "wdqmNVJjX8hRBj3wXqCJ2iAmfiahsykrp1seWfxvioPjhmNY8MVHFEnfFdkALebpmRUkJt358Nr2ZWty6BPHz6j",
  "key24": "4jJKEyCrZrZMyETsgSbtDMgvN3bpGCxeKbuDSVt9xoqE8kMckNdxcfx85MPUyRdB8pWBYLqu5jxqNXUCuGtCcfrS",
  "key25": "v13n5KF4NVwMX9pVr5Vdk6Bu2JgaqcbHN8XH54rt3BSuFTjCWJ9gpjde18ZQynvQU2xkxM3QV9qBV2VwXCvFQs3",
  "key26": "4VkVmLGAvCtCZUirRmST1d22PfNVkYRgpqLkVvi3NJ1h9vygchSjxjhbu2DBqh1qxUs7J9fxBudGqDDncWnVquSR",
  "key27": "6MvYekMVVrWCphmKupS3QJezXGQhPtHk92ZjVFcZDjK1omZ34n88eURoYNRjaCqKmwskztaZDJ6MPZzMupcvDVk",
  "key28": "8CKT1JSh5rNmeKEo5sPNsieBFrGorQN23uVZCWifdkL5Yzqm6tm5pmDSQA7B4xswCkrkbhZYTBDwEKDVaK28seo",
  "key29": "4DNQf1JbUttkndBGLutCzc6Ab7EQzmpTiFpsXSdwrZ1ibUDeUb7R1AoB9JX7wX9J4a5Bwt5xWbyTbzQjVCaDBsNt",
  "key30": "GoSWPz4dnEHDqNqYDQG8gN7dcVpGs9t2yKdJr1XgJ5Y9i5AXo5Ao5arBns49vFDoN3vvHWgeWnrvAbjf6cu4P99",
  "key31": "3nJmPd2wdiVaheb5DpckzUDDjNXFVtAD9nsHeYVMGFq2HZkbFyTUKJrtsnjipbqvNMHDGtMD6sGywYg6qxqH66zz",
  "key32": "3TpF4pHiCwRfDRnghZWNTqScg8KvgPAekRqfhB5471oNdeCVYC3pmA1pPmHy7cHiMrpP8Ae9Dztex3BW59etzHRH"
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
