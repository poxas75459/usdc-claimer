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
    "3TBPGTEHbZf3PH7SXsU4Auj2X9Wj5YL6aRxSVPxeQgCi2CayP9Hvxihx5d8NHYeRVYMUtEFMg2xfn3R3iic7r23S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34YGysxxpeteDcEarmGrwoLAdJbk6pwwpH1cd2m4X6AFZoYQoDJKdnU2psNePBqhCBntGqxybngmmg7vKcYVYWUA",
  "key1": "5yBsLP547pXGWKETR9PSPbmqbEVZU5Jcp6PDjSBuVRkfeaVQrPd2oierZJZwgWLM8HiuU2btTDgJqTTLWAcvE1Z3",
  "key2": "GCdZy2d1rzBnaaZhZtYkEky15kza8WZCwm8GbEUCP5tgKmVqKQ8oM28bqHvhy2QNocWpB5WUKqrVcGFjrqzSt4i",
  "key3": "4YycUXxX4MxW9Y3zL7mbetTy8UWj8DdAr2T4wFZD8JaDLRFD9RfjjcRhy59UyFWvybE2CW8kxsDxjnMrDepeq4xk",
  "key4": "5i7PpGMKDn1H3er8EWcYnZZUZGS73dPzzRqv3HmWkdqMwhC1VB6sheZ3GBjQFY6z5B6kojkJ4QLoiYfQXZuy71sj",
  "key5": "XhigraRSc1ozB8waRdycpkAUmQy2HkL86zgFi5VDFUcrEDrKd1vGXEdWkt8KfzBi3dPiP333xyoR5EuHzUs3hTa",
  "key6": "55Gico1WmM6yDC48D62wbhkVmzfNBsVPwjAgW2fSnY9RktGHoQvUo5TiDkPTNmL16Ua34TV9XvKPTVxan7ErcGph",
  "key7": "47eDAELetNPYba1FhxMXNoanFwcw72jAgLN9QbgiNjj5LCvBkVH7S9ovr766fnLAcYsUSMJVmpWJkk7vb4FQxWch",
  "key8": "3Y3DyxGrFcPXKVjD1bkZ9dm45xyt7VAj7EZibwKnWf2TZfmpCcpErHzQJ66VPDw2ar93ncfprGkcf3caqttrsktj",
  "key9": "41DCPjn2bafboo2upkk1Vb7BKjKgbNTYVwh3wWf7tJzipvm5erMgUS9SQtWa5gzPtX2iYLwt2S79HrYBqoQ2oMjj",
  "key10": "3GRJL9JpomSnwDdUMThdeY9AWERtEnR7EXrfccpypDCoYvJZvfqZ2ZMokXUDomkEmjajdzs6TiXsCVQiZniZqg8Q",
  "key11": "5FbvJ1vVWv16YRTtjprV3QuQCC5fVucNbKeViqMRVtkoCL6DWQEi6CAQxWzKsx9cvG6G1SQtcmSQbCw7rXy9TMDk",
  "key12": "5B4mRGzA7apPGhn1taWMKUa3py63jyPet62veKUAim1LeADYLEmyfvBkzaQiDTMnyNPqaytiNainKT9UhvGZ4iRv",
  "key13": "5jRVw6B8PjYGf9RTGZMmU3GLth7mLxkSkAQWpdQrxprisC29a5UK5hPgcDUYkDvhbfuBvjc8AmLTWkNJD5UWZ4Zi",
  "key14": "4oaw9RtgvrBZrH3hP4NKiLfaxicNqxVFLSLnyxQKWJjYonk3YDuxbC3sjR2wAGUHUUWnE7fR3r1UWJkKdkH2pDPX",
  "key15": "26gWaghFRH3hWUst2cpLYQmV2Xsc4Q9ib5GLppzbw7xZ3EUecYHMEuN1QkNi57gHjLSWmQKxextsWGzWeUL4n7no",
  "key16": "363HatbZwiUHTpfHdVyRe31BihHepNbkPgzUiqfu9ErBB9657B9GYqA7CbZ6QxonBw1TVScsAkWcDE7bRwcJXAsB",
  "key17": "3WDvZ71HNNZwthjq3159ERccVusfY7yRmjF1HrBoS6TXHpSqC9cR8yvTU6gfCcp9LA23DZ4rw4KnuPg9EGTsVQts",
  "key18": "3XNWwbbNcL7ww5BNRH1JPQSHEmPiukEFGaeP4ar5KkVtSGjNBQePkNJBknKfSFSMLbpdKF2m97bphnnJL4cdr9P7",
  "key19": "48pywq9EwmPrfkPApckY3xT1fVJ6kJJDKbmCHuKd2uW79F3epa2woxFnvGfaBA1NjH8H9mED5qS9JwunQFGQehKH",
  "key20": "4SYoFU3qFmBP4mwya4u8ccrvTEn6J8NFBvd1nEm87XJd8erMDjbaZf9vJrqfXVLSJVoNKBjnQvumbdRkZS7xgjqF",
  "key21": "qezCZLgG87mgatXnWzyLyJ7gCixr7zMkmPfAsfSYs56wNx21vE2MPUU3NxuZ961RLnpa2YZesqPU1AB5KdLPsyK",
  "key22": "2sGndNVNkyFMzrxGfMKD5MNzkUobcx1p2iuPpRg6BAjBfZ7tWCjZPw8ohG324qZp2mQDLMphHJ9MbprE1efirJyv",
  "key23": "2P33JQJZzfQK6PD7HoqyQEUwanm4aVbVjxJvvkJFz6pajEjoqaJamtWCi2h51bhPMWwHDGtxoxwkS4duoCa6Vm86",
  "key24": "33iqoNAgRp63NcisQWQRWS2BPShXtKiBBHzVytt1GG8oALiMNr9Y9So4pmGmJz6gQ2NNz6oZSxpxHgCRTnNeQXxZ",
  "key25": "5nhDg3ZBKH7bcMdAAAadPf4WqFAQ5axjJtET7gwzFPUvSstWVTsf8eTfGJao6YEfq3zXrh2uyMJ1MLMS1FLNR3Rm",
  "key26": "4FADUu19ncnBpQyz4BUjHzqaqKMeizT6bk5kwH39XoBZJAVi9kq1cfbDiKuZQpcwAwbWuHbzzBEYc7UtvgNwbzRi",
  "key27": "4mMD2ZFVfWZDJ1aMjK7Km4WQKHGckHxd2A2rkEf9QrumWts35odVVH5o8CgnZRKDBGFwkmsFg7m4WQAno6bT5rsz",
  "key28": "2taFEuwuJuizHU2Sx6Y3Xek1eXRMmAnAcMhirRRtPpNRxJTnofxncWc9Tvi6qLbpSJJKWJ27Cmsd3C9jCTbNZJY",
  "key29": "3GyGaEBfZhSVrtqis1eisUfGnSAp9FexB4ToB686KLfzxVxbi1iUMUaB1dZxAkA64NG18ZcNkrbtK2jeFe9aFC5A",
  "key30": "4kwh31ky12nCYadrHX5kBuguaLtzNoVirpmgtbUhJsVtDnXu8YzVHfWHZdMPEjQ3ahxz9khw57xp7CN1HZwuwFHr",
  "key31": "2vLmpRMnurF2qEQyHg62b7DRWByt9iXAfi6YbARNpe9Np1QhkiNBBG6mgibJ7i4HwLy6UJkjsSTKUxETNgNgZPse"
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
