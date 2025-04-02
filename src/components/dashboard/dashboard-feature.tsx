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
    "3buCUxywRPehth2NEfg7To95b4bSdTKTqjmBCDUETPAPzKBhkQ23pPGUPhMGoXoNBkMooAgxRwZGTUG9nhgy11FF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E3C7AtHUSEf9CKpgjSSNzeXRfW5sy8Dp7DmZ2XcCxWECnhVFyxG41i2WBFtJTKEYb4CBReBjzzLMD1qCqyr4wNs",
  "key1": "5DKck5NMBUwMY6fy7ijew3ErJBg8veX11AFFPPJGYhNY6XWYZNxECzJm8yN9qBgBfExjwwhzALmS9BLTXG2FZtLu",
  "key2": "3SkMZetcc3yPH1jo1P6xHx6YnXHPpZcmJCoTGomDKfuHxiTvG7wC12EKoqssSqfXMrYF9RjuF4ubWsNN14bZMfSr",
  "key3": "2a2xNna5TDKe48HPcvyHYDA8HKwNpCPhTPRdrXYLJPzYep498DSpD6YvpJmPufneLaPztE5QKcH8LQuJL36oWUru",
  "key4": "5Ae2utAYjjwW1GomkchMVtF3KzuwGqyD41n9DFkgkUcix8Q2o14spiPQmUcnGZ4Vv1wE5NHA7AxCynR5jAP84iN2",
  "key5": "Jy9JoSdA3DYSK5MkEDTSCVK4QzVqRHbeSXCxsKYF6Frt54BKiXVH4WYsoZ2FshjDP327VCAZfeR2nCMyLMpwAcK",
  "key6": "2eGsAjzFGrAK9dwXwy4Nvp5kUYtD48few8RrhEUseqKjibhfwTP3dBDxPruSX4TSjDf2odWe7oJebaDcPWQtToPM",
  "key7": "4G56XMFtXHyswD3nVJvbX2PGs9TMZbboxeMubCTK1At3Dv8CygizPq6a3TMARAbWHVSor4g1i8XgZ55AS5TTQMZR",
  "key8": "27XvwA5CMoTRn1Agfr2wfhKgP562APmXwJSaFYjNK6g9ZhppTXMwpJiQrnHfKdL5wKCnSJqGhSjsM4Dign8U5mGq",
  "key9": "2v67kpemCKznfh4Wd6wP68SYtEBsC5AXy4bwfSCfnNpNAnP9Dvy8CZUk5ZEnMH5QzXJzPD8pipCzBnUcBqXZUbN8",
  "key10": "53oPt76Fptr8hmWXWgZkG1CmnZ1899jRNs7xBZp8Pqeoj5bqeH9k6yarKeGdxHmWbs2Jv3rKkFhYpDmjuY4ovMcy",
  "key11": "3WFaZtrLoyb33eEvnBKk7zMzwaYRyGN7sUyvxagjncYi8qivBkg82stV6AGxzMJWMK8kBTHLhZbLXHXJgbazXcZf",
  "key12": "8z97ueUB1Yu1pvKwKckKWBaHJwaGmhU6ucMNde8z3iARsvQsfKezaStS8KiaTrYYwbz5wyF9ahH1k6jeha2XzCw",
  "key13": "5PruxzNSZKaoVpDfzo7QPbEQ5hrGpA3sksjyyeb3HCMbs8CyX6KBUxA1p2WqfrwdsZaFCNc4Uw3pAcAC9mgNE8Zw",
  "key14": "4AJLxXbACTwQDU3K6ZXXn9REEw3X6niZBau9omShEMyVXkwLKc56Te48u5M14SL3HaWsUGTWAs4PQ1pofbVuVvPg",
  "key15": "5MSBKKnCBkE1PEGFfxNiipENub17W1Rzn5CqvhXxLmQNNdq1VUNywAnMP6WmYmrHcL1X4dZMQNUVytjH5GG7MwXD",
  "key16": "5un8RJ55YEWFMv8Ej1c2R3WuuwFQzYmy3mMudqgAYVxLH2QqjoccrXNLxjt4uo1GTkhkUxUdvVdpfnBq1mpfv7e",
  "key17": "4ht44Hv72WPHsucTNomc1mgEkoyntABQdB6p7AFB1Ke6hGCUanjBaAWESZzpbNSEJuuYnHdNHnpdbhpJKES7RP3e",
  "key18": "5V9mYmYSqjqv1ydqk8zuyjMnDJZTtmcSgCa6HrL31BvDD2hNJ1iQwaHV7dSFBgrz39WvMKhanczVTsvHqgppAN4g",
  "key19": "2DkifrzyzWtvUpxtuJeo8JfqtUoGSqCtY6dkig3VazkrBYVsR8VcvpkFxZVUSM7W39LS541Rkwr5tXLCNswPamXU",
  "key20": "2ZQpRrcnq9nhXEuT5CgypF8AhwgtZM6VJzHRnL8fcVJhwnjWtVadri5kgynTvyMFMCECvEN9Xn8JLAUsEEBCRnte",
  "key21": "KHi4JdNeN5Zr7GBiGRNq8R8bdehyAWM3Vff2nH5ATeZbzKrLBLypFrdqhLiVfCUWcNkhHeCiaWannvNPd5iqxE1",
  "key22": "4AsJSiNbwN25tbwX118XKptT3yAJmrDPCdxzXy9AdX3jKtyhcVgBa8Yu52oT3CL145FuwSz6j6xfWtfjdYSEdEej",
  "key23": "5KtyvoGQphMW8vcjMXNdKdqBQh3yN4ctQoUbfU59EVJxcsjdqD4M87d6HPZAikfMgcYWkiTUqHLR5PsR3snbPuL",
  "key24": "49sUy5XgQ5qNfM73oVS16Y7XU25Mq6PQbtji6NQS3H2G27zEKBtbrmunu2HbU1RUGD8aMRZMEU1FyR1PpczkXtYK",
  "key25": "4tAwCiZy7MaXqhHsrY3wT9VAbPgEAkr6geDN9jHm9FMviFiuvcctAyiYG8pgMvzEa3RUBMBooZFbxSc3rSSTmCPw",
  "key26": "5sSuSHR3VPonG1d4jn2r3Jw2kLhFQ7zrDVpFjhNQjmQLSupnx9u2vPxsZCdLdzbbaoYHad5c83QLjxRv77EgF5x2",
  "key27": "2i3wT3wtrHbepTNypjrkygUKyJqNCxsD9FKNERnU69Aruom7da8i3HdUWEPKRREq3n6Q4VMXDqnNCXFq1nk1Yakc",
  "key28": "3QxbRu5Awj7iVYtwNDZuMdymX5oe9MhryXgoKTZKhATyQDPHBVFKAgRKFDasjW9x1avqwdQtxFmTmu4YV1c3a9HY",
  "key29": "3Y23WnfbjSjKAngXs9jLm3wcwK4nGMJ8BUAZYj3XKNH8greXbe16EyCa6eacCpaxQox7a3682ZCC1CmFFFaD18CG",
  "key30": "2hBzKgUQnq3PvHGmYoqU4og78WQibMt5xLJUBY5MCJLutGKwsqbAMh5Lo2dBSBbhD9k8ZMF6nwV7WnG36xc81Wky",
  "key31": "67dUxgyZmRG4g8Z4LYAf5NEuuhNjkwktZktnnGvctkPKW3xM7vkEupRuAHnKaQJ895R6EE6FigRf2nhSx8jDy9Cx",
  "key32": "3xrp6L7yQz9XZtX282jQveMvePHMggChAa341uRqMM7th7RQy8m6chxbQKSJZ3WVoC2UKMjX3oevpcjsGSAJJJzw",
  "key33": "4Jm6EPCp1zKamFhWMZRQkh5aiot5AeDtDkzbyU3zjUpdai8WW2axczjkpL9vT8WUhap6vZtNQgCneu8na1P1n2Mg",
  "key34": "2DyQVEXnpPMPQ5B9YMzopYrWMfJWS5WCEXHUPaw3kwj21SWwp3dDHn3dNgN2qhqXLeyUXcFdyLPvqHJVD2NE9yfv",
  "key35": "4Br93MTD8v7KWKprzPGjZQYzU5AiAz8PJJwXcfeNv4vAgSAjKRXn3UPLAivY7x3w1krogwdM1nbgnu6SehvWPbTX",
  "key36": "GrNCd1xJFUM77wdBYXt3pShtZYpDBgvK44neQ2pTWBerddHkYaBvSqmHK1dSJiav5SRsehVhDsFfY8sjX7nM3LW",
  "key37": "mXod3UZ9fThGtyzUroR8hyMcF4qyYGbnCh4nmnSxzNApp9saCN3XV6RrAFLBeUVrgWA79EoL3HNudPSnWyT5UzX",
  "key38": "5pF2MNa2CYDKco1zRr9zes2e5zSGishcRaP1hsGAigfWXrsH85MZyowA3CxyLUuSHFz8vCDxCTkhmHu2eoNEtsE6",
  "key39": "22gjgdLBfi8ffycAC9wsWpa6XTkHtmPF2mVaU1qHuY6yjZwib1JrCWWbbghJxem71A6A9R3M5sQv4qdcphpdrgGe",
  "key40": "5CSTopC6HiBMyMRNVd7MyfV9nayxcbMat6fHHzs3F2o76fDKV1GXdT4QEBGxNbHDiCwovnQrp6hnfWb8TDqUuTtw",
  "key41": "4sP1NC6NH4f4BKqdQxi4m3J5SVCEaqmGhLQWaJpvuwEa8JQyRF2iasfHYxRkVxvTuAxUuFbhA4aERpc9nzz53ZbS",
  "key42": "3hTvrmjRKFg6ZcW7spKfYJPuz93bYRGbknsMd7fBBXtXFnXDhy6zexVijyKJ9jnnR17Fc3JgCd9MDnJPCuBgEv5H",
  "key43": "5CJM2R61gxkNd6Yjtdt59rNv44rRwSHdmPa64Xeh2yoax3Pr7Hipf3A8GFUvcoRSJtTazj3ueekh7kdgUsSzwabg",
  "key44": "5zVT641fFk4LMKKX6ReaEeVBpCWDcmRogWUPR8yRFK5BgPaFHe8YpLqD8uFkc7mp5F5J2aA4TCucDUrxWNZMZawk",
  "key45": "5t4tE8D1aanHTEXBMsCF1ARLmPj9Tmpz5qF3cKc3HvLat9nfKNgru1P7yXU3nqoyyf14ReK8MJ7Setu3c6pP8RHG"
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
