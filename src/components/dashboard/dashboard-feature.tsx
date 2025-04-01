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
    "4nkhvHLnzcLnZ1JYwfoxwYoWS5AxnKsSE9LqZxTCdvX6vHr78UuTfCosGrjGLYxz9wgKBCjP9nAzRHfgcA5qRwd3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mzaxtNWMgu2YG6b12YCkS4ieM92RmDyS6GvjMKTaCZo5wQPpo175c6K384VeA2vYDCiGJofUQbYuKnxeoxMrvvg",
  "key1": "5Qry6QPNkGZY5nVpJnuK1CLihcEJaKX6r3auDxsd9MfQX7sKDsmu8oFyPTRFCZjLj9SmfEoBByCXQwLpbFkj55d3",
  "key2": "62AUuPSwtooBqEinmRiH41ieh2rax965qxhc9PyyKfsub8pQSCTbHpcQogCBaHYurxBfNJ9jyVATbzgxRYYXiB3",
  "key3": "3X4cgRESaj8ux8cV144uTrfzdbCjLLebgzUg4f3GZAb9eWsbzjwb78eMDFHvhzFJVdT9T8Deb5uVbExgjgjH6nbs",
  "key4": "45Tqgh1b26nBP52Ht4SCcM1iwrXugtXjgSCw5UMeYNzmqWNbvqW9TkZ3eC6zVi4oAy7VXBTKWzjo6xWNmz5FKvU",
  "key5": "4p8tJXP6skuagJDJ9mww7zX5rgEwJndgjoFVAjsHkqLuoqxDffoiRjwpYrpoXPY8DQkfBt8NvX97rALNqFWKVoZW",
  "key6": "28FSZoqAJBN5qzwYZ1sj5sdXqqACZkULz869m6yfmds8Xme14QiSwH6t2pjH8wns7yDzb72uwBfz5PR1q7LBZVhM",
  "key7": "44s8A9tXq4yV8Rm179NcN4XtX4u2izyANe4hYzTkp3BiLE8Lnb4wPqy3AGMBvto4SrDE2HmEtpNxB2camup1fqeA",
  "key8": "489dHmxx8aJRouUjHbSbtHLEYyRKi9iRETzKigZiP8XoP7LdobHaKuHk3RMgMLUQNvWXcjzcYm6fb94UhsjbwerH",
  "key9": "2iXwUGMLMnUK4YKZ8Z3F6JHfYuRF9QgtURooVrvFbfqJ3dnCQVKqZyR83vBvbxJtRoj9EbtWYdrXfe3yycuT7V5L",
  "key10": "2QJMRuL1Ja3RFXLeGfdnD9RwE6aU9kyniDvA8gbb5XKehFevSec7QefKu8TSRW3VnvtdcGDojygGopZfZSR2ouX5",
  "key11": "5opxFe2M685hkKxxnWdyDE5VXHWUz4C6Erahv2LTHjCdxBHv1gCGRRTfxbXGnbmge7hG34jkoBZQKdovBrmiB23S",
  "key12": "5rpveRpUHCgswMc47hQSrP2nDJJW8qo47ZVHcZFH7qpm63LckLcghWsfdBfz9F3N6y91j92xTPnea7hmzZtr4xLT",
  "key13": "bbM2VzJmMWKMynnr4j7Bk7EcGFuGmiriF1SuKDfUYgXmnEsECWiPZHSZwPKpx9jo421rKeoeMsPKpJn7hZJXsfJ",
  "key14": "2wqHJmdCn8DF3pqYmocmdqkLSKuEjUnhmmUC4yc7SmQyHLFrgkBuHmtrJTJjNjiyc3R7hL8GdaLJMnzCdZUi83j4",
  "key15": "59ShEr1vnrRpkLnXPLYz5cKqwxkQtkviAETWQFi9B6JkgyKAu6Tibg7KkC1cWexB5wceDyxfUD6rCMTwMJdKwA4k",
  "key16": "3zaY4dyGSiq2u9U7hdm2qcsUNVs5uujxoYSKCVcPXvYBace5qkPuoKbXFEyMUDY9cqVHjkhY7VAd4LEfPSmfwoX5",
  "key17": "54C2hGdXax9z5vcCt1YBBdY1uPEexSGcaN8nZwJVTMHWCi3iBZUA11DhQn9PcPRNQNzvYZrHUpeuQd3M2rttxqh7",
  "key18": "27DfyW9eWmm7aGQkPcL7nKF9P1PKhXs9XZ7bVDYz2WNStinsPeesojSPgjFFjy4a1LJwTnTNrXvMLT8DCpZLUUSP",
  "key19": "2s4u8HdJxwxcXaLsutymQgKZiHopm8iXu2UYBLXS3EHxPgdfrQxUaJ4F9VQKz9Zj5QFTeX1maGVBXGmsRq4jV2GM",
  "key20": "eYzUnoBXNwSqoAKP348zWcDoFSSG7mBq7NekUqurA3MtmHRGHERzGDrYrmEzumdvDnseb1K1ooqnqa7G5R668vn",
  "key21": "kWhCKk6fpB6TpDnCEusGkno5DnyLMWsjZXv7a5pXvadRT5SA43gKJaFLkKWRu37zTg2vJcY7YeysKjEARbDYvbQ",
  "key22": "2gTEoXcK4XYPeTr2r74NWosGbLVqpjCh6yYjkb6xa82HLzabkR5zaM2eBA9bNDUqmyxHmQECu8g5F2Vok3hWsTe6",
  "key23": "26Um8jC2WEDYm3uoQMoYYXqEapWRYPLqp4EmFHHZwTTBHrt7PRuKZ5H9FTQ6xDgKYYyygbtiQgB2kRwFG59XifEo",
  "key24": "5szPKvUXYCCCGD1oRuUq2pGZQQ2keDP9QF7MYqMeo9WKYp2ZDruePMZ5f7H2PtEYvQ5HzTNuZnAr9EQstDx7kHUH",
  "key25": "3UGr5ZD2F7Wpa79rMJaTJxVfzBFKztTv1qoXbqhFxt3rShPMaTsRKWnjGACpu3n6tr1RNPXLY3J7zAqAsj81rPzP",
  "key26": "2Ccm26Vzi2NKk1wNMedCPrDEzT6rWXYpC8rvgmXod8FV27xpmqoUevjqBAknm1dFE5trjXtQDw3Za8UgVCzJD7Ai",
  "key27": "2UFgGMQj82RgGCHUc5Bja4PaTHM4VSvBxf1E63bbCq3Xm3DANTb7r5GYd1Rm8joUK58UM1rA1Mb4qjoMtjwoWmRk",
  "key28": "3hEhnao1a6UcvVS3nFukBKR3x15PN6uB3ZLf8BCjEC2vY45E1QL73z6jQGxQcVuMM1k6EMtVhxeZqugj3Sh7vEnB",
  "key29": "4BexqbkyKtKSHHotHGbLbeSDbhREUwpxCz1wb2ciyMNixGNYNGkJgmKg5G6N2pfEn75SeM7agzoo9Nfme4f44GrE"
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
