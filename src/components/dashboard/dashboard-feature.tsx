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
    "3Z2hXNR1MiAtXVEjaPgp9jqv55SCVhpAj75jHrbF4Ms3bfBvtbYfeuYt4SeDNygTSsMhNeuLVwht88J67i527Vhy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MizyAY5MCdZdVUHUfuv1P7WRu1SoGyo4WmBnEfxdmx7hLGqg8j6KMw9CDFMtSe6wMaEa7AriMU8BttJUNZN4pY4",
  "key1": "2tkMKJUJ9MPP1AoMXy6NpU2YP7MpGXpnTPQatizAzj6udXQ9U3WZHqPk7QzcGjm2RFBDjYCVhZXYVqynWwAWrims",
  "key2": "5SiHyD7pSLWMDLobwRH1ELi24WQw2gXbtP3Dk9wM9sYbqzejf7mddvrMTuxz5oiAXMgbBcF16hJKYn3rQBCdLQHu",
  "key3": "2ApPSVvv6wf4DRTN3YhzUzNNNtQHvKTvrvtTrnmtRsRPEoxpmaWtgMSUre3Su2fsxgv5i7uA4JSp8ZcaXjAUEus2",
  "key4": "3L3vo4Ktg1nwmff83iHdzZkJiNdDVPCXyX1uCB6bNPAP8yzcoUQuuWmmjn8pDrwtiEJmdqxVUrTdP1YcrzatPvJa",
  "key5": "3soCgKASSUHfEbsnhJsJj8mxV4eaMHHru3xCLtxVg6PX3bg3iTFuzitwrMab4oG3QyhoFFTNoDxCBcrfSNqFpx2h",
  "key6": "CeX4cwzzgWg7WMaENEoZCCKSMNFzREZ2qfkokrY6jdCZq77jnEF3HuqWC9qBAsHkcabhrFrmWqZMXbipWZJAp99",
  "key7": "2FF4JEHDpFrnhwRm8WGfcWybW6RTrdXGynxUjcjQCLeuuSpbAnUHa9kBV2FhFzjHfbUaUBSjKkCpE2eRjkbJSyGc",
  "key8": "4npdTNkKvbLKwFxeFM1Bxn8LZiuJapkPboqSX183mLgAABKgpvbo2nA6a41W2Jwg5JU2k5VsAruSxb646G3o6xKG",
  "key9": "4nLRhHX1EAUiF5ZsBA4LKgAroTJ8EY8pHL77xVYb3qxyTUnXfZTRYavSsQmodLFf17mcd4vn2SqrCo9hyG7m66Gb",
  "key10": "v12djwFvjho3rN5PDkXScCb1EjY1HqxHwFbgkngzkLPSZjAjzcaorqf56kMEXX1funyiyfG9bXQ3PHvTRFjwYEZ",
  "key11": "4DaGsgdNSsGVACpxJ2zmfm2a2G5ngphkQHN5ZtFvt9fSX2aWaBqSUJA1CiYD8bJznUf3eooydA4rg2H5ACUKsoEZ",
  "key12": "4e5E7yMejX8cPgKByEqi1681H5pL2gaoz82Bnk5kVwEhogPtiUxr7CVLp3hdpwZKekZoMhLzUagVGuptVENXToGS",
  "key13": "2WW9XsKHGahSDcD5GFQaRsfYSFb6kMkJEiaNdPHgZPRenvKq9iNJL4yrscERUtPajVMjVJ9p57g2FgHbLsf2Yo4n",
  "key14": "5gGjybC1Cda1Y6Grkfk4ikjzks62Jthph9q3mfSn93UHZvyKKv4EVkVxcFMwHfrRni9y6wXs7Xb6Vh6CEhRrSuXp",
  "key15": "1vd4rJajU83Mv2QkN2gQAo6BcDL29zjiKUKYe4tyzqi8a5HtERcSxHVxuZJyKghwqyfvrK3RHTManVXMvjofgKy",
  "key16": "65sbWWgz6d2KMcbQmfHtRoVQTkPAgNRfnvEVS1EzMiXjJQusUT9tDLH3aYxtaCA69VUwCx6jUkeDUop8kXWJcveC",
  "key17": "oADb7ZXR1SbNmzLuPyYSXWz4Pg7XSksQmv3jhoRURQbB6QGzj4yVpiHYvYzv8wpT52xWvZbKdfhiQSq6cno4mML",
  "key18": "49hY2MkzPitUbFTBfjHQs1SxfBeVBGStMxyqgvXZGv3GDXUxAmb6mPSf2thvLub3kgYAeKdJx1vochdycWoqGPVr",
  "key19": "5wqUR9UeBdgvUgNKwYKfkMGopdnbzwhfQX7CC32FSMddi32q9QFM21XBYzyBvpKpEz9KPu6FjXNgCSCqsiXzD3HR",
  "key20": "2MES5L89ssfVtX11CLbcnyXtg4XSXkzMo6yP2jANstbEwyBTiVzDVufVFc9XGZNbPFAGNdktxtb5PSBtv9Q9Trw9",
  "key21": "5XCHJ1LWZq1C3WNETxuo4yM7cBaHryU3MdxAaDqZg3SzckcsxPpWik4gDLwapctNi1XGHZGiVX4zNdNkA1kAYvoy",
  "key22": "5FtPRaMf11W76sJWtnYXeHk1ShNiFZuWqhaobAdp8JMHZxiav7dcRHhK8CRGgMBSdKYnsBHJZ2yVjEU2oy52zLcP",
  "key23": "5af42zREdgpmWDyWG6nHmsnPW3b5GMSKZ1VphzrmPkzhmbfBTg4vvrh53zHZwjRwTUoHx6obkbiMKcZ2B3aorauY",
  "key24": "5NKuJxBoQqSgM3QCjRiV8p2UqSHEzQzEWgViV6VnPxnoLqbTzTfCPU4n71k1YkntVRQLUgLFCYqGcxehEtseAekT",
  "key25": "55SZgxNB1tAdtTmpxFfmxhzzF3ueNGbB5PtX2Lta74TYrWi25EZrzNLjpMxaJGECjJpHb6gGQX85EzirQMihGdYZ",
  "key26": "4bj6LfXUmpyzmZiB3QfA5gzrvCXXLrHTscnvhCUQZSBd6VWVGXS3xWCGG2FBYzW135cQMAvahEYcbfrUbBzMyT9e",
  "key27": "3JD3xgGLmXjxNFb5geKmypiNm7qpT76CeNR7EKzg26msKi4ESf6DpS7j9LpD3ZBzw2NzfvUfTmTBxfF8VmCBFLQu",
  "key28": "4zwtu2o9tWDM5vU3Dmmy4eQt6BHk3iEGwdpWV4qKMcK5AP9qqkRcfKXkav9dsNMQULNUyJyq1GSXZnorQzis9ZDV",
  "key29": "3JP8Yex562tscJqPm6Gqekps5LhgMJt91gVHoFMWNG8wvMU6FmPkqr7rjbtxHzqqw1TA4sDJrUY8GzTokNxqqC4f",
  "key30": "2NSmJhjE3vbntkyx76WqUHYycw3k1fTd87c3fPy8JpTzpKBVKkZ9q6M7dV1i6d6ktKmUoxZfGfnwjeMswHEBS6T4",
  "key31": "NgfF8AJ2xA5FXMypXJameCWTjXm1qoJFGioPbuE3cBtpfT4EhU13XC9m6PuwscDb3Gi8biTfWLhFNvz9rejrYki",
  "key32": "h7pTcXDmW3kJiatsPewHEBA6s28rhagFCYfEbaAB1sCtdFXu3a27HSu4dZ4JRSA49ET5jYYZmcerfzMQ2cvNXyx",
  "key33": "ptdJSeT8hj5MeBn4o8BER5RsbWNZDPmPZQC7TfZC3T6EskP8icXz1YkbSdRoNnZP7oNXdT1WpqSmyttARbpVWcU",
  "key34": "4mWbi86SRXkJkLPPPgKrrjV4JvsSq5VrsjPzwR5VaghabZ1tfGBC7c8EKrHqrzpTt5poF5hMKhpnHYcdmUGBPPLi",
  "key35": "2a7BxaG9BRZ8qR9biE8AXdSzCz9ExmLSU4eKBVJFcPHpLUwN1M4H47mu2FH4kd4VnZz7SZHiDyaBazUSuRpbayF7",
  "key36": "4oxf6DHhi8yv3t4F9Ad2ftZTo7PBRchtGbffHGZnN7Hw9vrHqx6g488LyTBjQcyjGntKk45oCCgedVKWSzcqiBVm",
  "key37": "3m8nB4SRToubyydGM6kXLRyHxoc9s5FT2sybqUD1RnzNYVdL9Nig7RW5AjXZba2jdqognXFfER2T6VarYx63ssiK",
  "key38": "2TbRGDovJGrTdtdtyNeNtwXkcripCq6Sd9cZJZ7qe3P74gZNUDfPMGwghhnKRmYTY4H3UE4x6K6QYN47fhQNJuWz",
  "key39": "43GCRR4Fx2CinRQwXRa8vUwQGNmXDtw5byJMpew3EaivRYM4TSthsewPwH86qjXMuPwNutfM1YVC12YikhmRGiXm",
  "key40": "4duEN2LvQ6bzhZ248LNHvt75xPKSBTxQZqj9tPMEhA7DmAkdWDk3SCACkpUdVTxEcLymAhdENRK4nH5GHk5WSpNx",
  "key41": "5KtPcFF5L9xvJEMp6fAE4oyCBmB6kGPa7sHuDVYpmSTnkHBCUiidBmYtyVvmhsgewKtWFuA3Zcc2vZzV6zRT3TU1",
  "key42": "4nhDoCRLKGUYAGui7rU6RguxiZBAjiXxsjHUJozoQu7jxdCud4S1b4Ahe2XE9JyoV22RM1McBK8vRMG5nYECexV3",
  "key43": "41fNsnGU5ckuRznnqAf6boBw1Uq9eB7R8saEwtQFaM7vJL928DK9tJ6zJxdf2RNue1yeiSzqmkfDR7Kr4XMs4gnG",
  "key44": "4FZzHcP9ujzjGAJnax6zQAfA1UgqNGopcwAYuEqAC9UR5BqAqbcGgUYqg1Fjbozxu8YzR8cQnj96x3kNrst4Lq6c",
  "key45": "48wVPLofQUfkauMTiTDTb3G9rLqk8ePMs9RZLqA9z1V3z6SBTuaXWhYT5M9hkPujGh9SmzVXHBxeJrGeqBxKbo9c",
  "key46": "43YvKfsdQW5yS6RszXhQeuSS6spkCoCYVWb2pZ9Wn4RTQRv1ZKmGfkjG9nB72c2gestXhovFDyaWxCycfcBDKmNs"
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
