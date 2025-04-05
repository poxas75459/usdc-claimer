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
    "4Sn6YaDsY9M6Wu5dWxmL6aVvkBzEgyNmmveZmZZC4ThcKqu8DkuJrjkXm1gWXHhBoggAi1NKqhyrq2mhswP945BV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bFXDrCTgMk34dWEq66trA5AmZyA5e56D9MD72DqcrzSi9KUh3P3vabojP8eDpEX5WytXUHbtVcNkinBeG82XTrp",
  "key1": "3J8XNBaJSP7dH9eo5HPMgmfSZtG2DFTCUAmgPhVWjaRXQHtXjUvAUL2ciaJJSstWsYArHxcssXwYqmRMcxxE2jsa",
  "key2": "4zVzCcX2Y73emmRzDN1BB2cz8izTzXSSGRAFpFaonQXzzv4y1ytRMahtiL7ajergzNTuCgABhuqcjVj2ZX5H5Wne",
  "key3": "2TaP64c9JuibbgVefVbnv8WH2B59WmZ6Gq2u15cMG2vdNsv61v1ZiYnJWknYS5k9A8Z4JGHY6ZDHcJdBAzDavd8Y",
  "key4": "2oCcPh2imZYZDLpWCaw632w2bkexXrVkuwp28TRSxWT24ghaKMCLt7TvovCmBDMKcBugG2sbdkjfdKR7ojHmbnF2",
  "key5": "hadPh58v8rvFYenFTzZgsm1GAvXxz1ygejvnGAgavsXTDM2hddBUHYQzLo9PrC3iKPveJHV9FkyiCLyN2YtESu2",
  "key6": "3sJApdPVVkQx3ak1WTTMByrztgYetkUtkYyZ14onuc1VGfBAjKdos59QYbYaLWxBKe2z2QJdLuRLWyi41u8df1Ua",
  "key7": "2HPdfUfHbt3dpDaHnpFj32N4Umm225uv4Mp6GRi1th62jT4suWkCRq7iaVLA4S3PpGPQqWK8ebtBkTacFKhtb4Sx",
  "key8": "53KRtFg3fp4p4H4vw7eDzMi2d3CSdZPN449bWXNNQGdmDZpXG1Wk89s7HDPRyey1BmKpvpMUyAZqoPFv3v4XDi7K",
  "key9": "63fveZHNasHF2LJqr6MNsxzvHDbePCMGGnLdL8vD1JBVF7Juua4mYVegwWyBRLb6u3nseruE882RjA9Ce1WHJ5fW",
  "key10": "3CHyK1re8eoUp1ckhFAmsZh4VAiKtV5tDN5AC3nJ3PBZDpdd4vU1gmeJKLWzqHLqaDvDg5VvfVU7LUUdJ47m8jGu",
  "key11": "3tjjVPM1jDiXRrmiv7DyTVApphKJV6ooKg5KVtpm6SZe68JVVHSktzDo49SGzFYV6k1fAQXH11eA4JCWse52W5LU",
  "key12": "URf2rh55xR3t8oX7t5wJTYu8bgAb7EsTZAG5uJiqGT7JQgWDMNXAf3d9Qdm3j8uVWtsfNf1bwvdKpzrtcgWiwBf",
  "key13": "tgj12Z7r2D6P2XpRFq6GcYtB1cYN8vC4EEwn1xngM2rPoiqUTVqdMuqhqmJ7YjMfnA2BTGDb1E5nXT3KBb96sKk",
  "key14": "3ruN6kbzz8pv7uEZMLyz6XsGQpanjqrTTHKcPAVagxpuY3kv8vFq6VvGX4peDGyHwV6DD8ofWUgvCcun9en8k1D6",
  "key15": "37XDBrFtkLv6VLZnAm4VgGjpZUm83iHhwv9jw5QaZ9XD2aa9SWGmau2Tq1js4BHdEAdwjfGZz62DwtEX2Kfs8qUy",
  "key16": "2v2mNGBJtug5FVmbiijuUyWkwp2eMYwskd8pMiS5r3WXr7ouUTFAV6FTN8cjtVF6N6A6s3s28QbAFeBft251iPYH",
  "key17": "TsEn4AgopXXAxRxg89iDapcVKSM5hiPU39zdHPeGXZjUkDLfa3HVekjN2tk5XDCtVjeMqYJAM82q1XenxechmvC",
  "key18": "2kTf5ZKAJ1GsxujGN2TnsWm6H9c9J1jQMZ6HWVvCafPWyDxNsp7MSXWxcJHEgrLsKGeZQaviYQEtJkwXXgY2WTwT",
  "key19": "2BEsez7x5xgHWGxBooScf5gVossavtUUpi3zEj9zRKTcMxdSvuq2c7e8KUJxUaV7S7K96FcNVSW6kMKeGpeefmFa",
  "key20": "5gP4Xse1MtCKNaVcuSHQiYdYG1iFizNKKT31QwWbmUsY43hkgnbtt8YLY4ADfug7wVoJTYmXmbKgYXxoZDaTPxFA",
  "key21": "2TJ3wEmC3qsr11bP7biYjVoyfRFCq94REZtpoMUkJtHmKchAGU2HUjuX25LnGq5Pky7sgSTPzE7q1jZXen3KWftb",
  "key22": "26LCytNBhmtcnk4hhPAv8kaXyQSe2MJYqN785cytx3jpbUSTQXvbTks5CiyETvEikLenhwVU1c8KB3FxU6PBfFdk",
  "key23": "2hmZ8KYL7puN9p2FJEGtUQ9frd27ooHzvTRMPpfV1SGY1z7Do2Nqn9KX4XvLedw3Ky9k5tefgAjaGRWwq9q8HR7G",
  "key24": "dKwXHGAnWzSsXamwaF2XAiDVxV5hSQYgcfx7TVve9GvuDUEEpguCQCuP65ENEk1HYjvRsoSau6dKYEAx29GFw1g",
  "key25": "4cDphJDdTjykse3p2Cz5CCpeQwLndLxekdtuBCRbL4aFiDWpbuNqQGVm2DuH3sKQHZ8yJgK1gxDnuKnncNJeLVYQ",
  "key26": "2f9jvpQGcYaQHJczQh3YHtaB5Hky779BwkiRi2qNSSkNfTi3DwXwwfvuUpjZUQkJj2DYxr4v9xp7S2YodAL6qGbm",
  "key27": "4grQ4qeDE2s8k56NdmwLmRzuz1Y35y66ZikVmxLqtBCJB4xjikRF21wadTLBXdGhnNMr1oZs4HzsmkLzNU4P928j",
  "key28": "5wkswCwqRLj25HzztxJSmuzcuhnXHD9iuuXwrLXAAcpCibjExrMoHpAVwg79xSQfBXCUA4vE5CuPFNzUHhohft5E",
  "key29": "5UAsCrk5i3ZXnrLXDAoUJt9ZKGX8WKB46HPsrFB7C954eEMUPf6v1gZWi8hkfB4LtyEuXncTvSFpGd5u9kdrbfyC",
  "key30": "2cpSh8iuNJcHmvUAZxJbkwxdd9bHHkKnARgCB1SWQQiD1UBH4aq9m1wfbpXvirdkFSkdQa2bYREShR3ggV1uUWeV",
  "key31": "4zra8Sp2VrUjNNYgwgStiALBP7fYX1Y5XDn3u8PYxmoes3jFK77bgiKLCF9jfS92E6d7wfbzAqAbF6814fpe2st4",
  "key32": "3B47raF8vJVZj37ZedmJ8ABNCQaYeMiwYQKmQCaDU8oqFGCh46Y2UM2yVUgjGaRVFAiwihHzik2c8ST5ugkAJHtt",
  "key33": "DMP6BeP1fmm48Y6bq2kY655k4WSby1poA8CE58m1baQtpGrm6p153eVhjEyynFTd7S8dXkSMx4pdEdhv48RZC78"
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
