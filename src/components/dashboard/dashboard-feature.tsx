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
    "5w3fJVbjAPfha9h7hPav75c6Sp3QnqpfSbVEnLf4TMjqNnG2hGSKVrML8VezF6fUwh35Ad4C57ob8axj3EfHKtYK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ByinY8mo32bfPCLeJfsmzDaKGvr3bWUutmZ3umBneXB3jNhUQV8KhcgnZNswK99Zy78RujCzkDPQ2zxt5K1qHiW",
  "key1": "5wKr7BdMppriu4TBmDarcaSX9jTFyk7dbABUsZKVaXCCYytb194enSf1e4aTS4RN1USM8b9XTevsFpRrDGBiQYhX",
  "key2": "2zfyUVAwAaszYjMhoyVocxTn2P1xhafyZnpGUpfN9GsnA5XgiSkB59xh31PqGf2MDpmqKXisAqNfduukcJabfHMF",
  "key3": "2QL8rvDy59hqghEfNCRo8MKFfPcYJRe46SfsfignY5LWYcTBkRVfJR1Gi7DVF8cnU2oKq8LHNNgfY5djBdHUgUjM",
  "key4": "3nsAPBvUJTMTFRRhDcxtdoceJtzF4cPMm7LYapEaUZW4nXjcV87D4ivbvFKJDCtEbsabWVeyTifkx1LW3DPDqxhs",
  "key5": "3TcYDG2pfEYKoJ8Avg4BycjcQjobsS6K5mTMhjASyuRsvLxLSm5ZeXGSgWv4vgFzAVqNF1k5NjfTRZ1YJnmFnHWh",
  "key6": "2QewNV8C7z8Q2rvjsyN9eNMvdxA4Fmwuzk2DtJSYZZ1uwGDGEtA41yfP4iTmtKvjm6xCHmVgNoFqsAZgCTBorWq",
  "key7": "5rJAVSAG9bNHwLBRSevM7MTo3g2x4nAj3Am3tGnonVazrFixNc4uPURvggdE5Mkfuu1xXFVHewqmcDkeCUUgxxqL",
  "key8": "4NstFFb2hydkA8SX5Bv15Ze2tcRZvckLh8jWirvTpHrLv6AskcYHajiueNe89PhkvuBrDYeCSDTnMKHsM15YZ2T4",
  "key9": "3BaEcG2hJdH1MQM8dNJjjQsaiAa5GWNR8aPMVrEQDwyvB5ATCps57yHnAf1yQkZZF9NZqiF6R1uazhj6Wo4WPK94",
  "key10": "348Gqb5Z8xbDSvxioAst6L2Cmpa9JsMVpagF4cpsEq1Vq2rKG1ePuCR4LAtypSb44m9M91m5ekTgUAzMPCXyAERy",
  "key11": "55tjwE5x877sUgKpfeg3ye6W4FfSYcRNsiTzg4ExTaJVuJYDc4ZbWY1HXynoqjHXGFSRkdaf8DUK6gJtEK5NVvgm",
  "key12": "5Nf7RjAzML9rf3H5j5Q87urLhW3oRFFSSkdfrmK9Y1SuXnCfRWJtRqPivqhzdjyuBK1gx514xjg6nkhQEgk3Ssfr",
  "key13": "Bykf6Leb2jj3EKpamzfgyT5KYB3q8S7s9aXtDqwApmFEYJdbbEzeo5b4By1uLNbr41raXGXE7JtqikYoTwKShh4",
  "key14": "E25e6VzooQeC6oV2CBUnd7bDAdUMQiUEiqf7P9VMBwt8w56ohw74Y4mMscErLJ7Q72zge4MV6fJqzfYkDKqqYzr",
  "key15": "mtW2YibdYX86gYxZVEsdzzjBAWvnSpQNHR9f8qmxki4dJX9PPs8wV9hBs64ZdhtMZWAVXaHAnkLPaXk5G4ikQXF",
  "key16": "2wwa4KShNcKVv5vSaUKaHDtPiA7RGV7UXTcpchzXNmKqbGVuT7AaunKUzg4WD1HXhM4DW5kVTnu1YmuZkRtwxx89",
  "key17": "38MX9wfHg4faeNG2rVYgoNFVuvyRz39dK6HmZxxaMped5UNk3TzKCuJBJAKP7PEhoQy4Amj5REeUnUc2jFr7SWzd",
  "key18": "gUHKGAvmsmMGCCFqbXzfrNrza2m1xQaXdSsXrjR7yB3LPKDURawtxsRpMVFcxFrGphjREMeVyQLs6bxRQLgDphz",
  "key19": "5yDHkAfyuVMcgmYFk8Pi6wZWc1pHCqAopwaM3N52QHA7Fk4oG9MVk3erdU3jtH4TdMZCC4vPJaCX27C4RYq7fku3",
  "key20": "3bryo5Dm1cF7GmmxcbQ85srC59AEMdHPyu95wMQJVLZ21koHkFAxWvGvR3j6CLzVCc97rf6D9bXugxHNpJnEQHgU",
  "key21": "5AN4uATgQx1HguwhzphFomPioub7oWGivWfav7QYyktaASahRcwPwL3SdEQdd1vWFP9KeTuH7XCKoBNifeHeucxP",
  "key22": "2ANQcoSuSEERYzqgfQYhw7DuHmYTd42xxWpZHCzFwTyyDu4HCDd8YNBmj8LgJJikj3j1DRFDQXumHw2jcstaEa68",
  "key23": "66mLAUZM6ExiYbWZkjSRYrGHb8ochw1egGuaRMaoAkKSeWkCnQ1CD415mbLS4uUxEndJHJS1f1Cc1BLSyGYtsHvG",
  "key24": "5S8ibqEozHo37EUyJnsKhvjhBYGkLtdr5MJMF9XMao1A1zgLUDchohycMm3zuheyTLuzZft5231pPaAkPgJ44tS4",
  "key25": "hmQXVLNGL1LxXepvoZiCgrHPn5Wr66CQ5it8C4bwX4z895LkGqQ2ZznLSVEwJXsi8vNmiGmguNtz5f3tSQKfkTD",
  "key26": "EdQtwSUM6Jisd6S3yTKRduAXrGwFsSKT5boLscQNtu8EbHx22kV4A1Tah9k6eUCULNnQzVGyBhyncwKwUKPYfL3",
  "key27": "2VGJYbHfcQNmsbtMpSxXLEqifLReTL56hSeBvfJasNxriknjX1zZ9R7XAP31xx7qFMF8BfSZ4xf64iv9HAcRYQyB",
  "key28": "3hQU9eM3Yin5pi2jrmrGZVko1ULQJVYc8onK6aizZqfFXPiVsweCvgneoUWf89GTiokXD2AyzHMQPmwDkEKy1h5U",
  "key29": "2HVS4xiTaNxrhwA66sZdCNb55spMYwkMBSHx5M1y7oeYXioopqp6NWouEHvUEZbf8BaD71dJPgMKnJHtW7MZGh2e",
  "key30": "588CZocQKSWtjVJy4CTCPN1mwKLu3KZbyzbbUNt1u3uejCVTi2SzG6A1RF1xRERHB185XjBDZ6mgJhBXnejPM6ij",
  "key31": "Kz4iiYXc8dX4jJdbvENPE2VgdeYwyoNVPjtQR994djpg3dfJDu7fVqWP27bU52UnNbNhK92zMQp8AKoF4oQey4P",
  "key32": "4ELGGa3uD4NwNMUEx5TCTSFuc2oLNyVkUMVSNfghAGnDCUoyuqUoyC3dsQHNwijBndZcouWzLbsfiBagjSyPo9E4",
  "key33": "3jYjMbJvPvJHgkdGzjd6zYqYoHhbFAjDkuBaVyQKsJj7iCRNETodFcR1XVGGbnGpV4Ve7WRYAksJKrQHPQMVebXf",
  "key34": "66WJB1ZhrQjTFzvLn8J8CUncPNDQsmoMZsoWYbrTnNZTmFQh643sNhWcwph4F2G4WyCAp9AwvLGJUYc441zdANBi",
  "key35": "e6fVbSHyzPvWWpA9xswYt1U5W7G65idD7xAKqZtcbR1pBbp76NYKMpR1UoJXpjrpUkndykRnrXHCkrgdLgLTDSK",
  "key36": "FSgwfU8AbEJVvSe5jyvr4ZWnZyEGpAWdkPaxCsjRV3cNg1wDnuQPp1Vmb5WwRoB6XxbWupDDa2LLyeBiYyVdYfr",
  "key37": "q8tNdGFk6x7uoPGpS4mrHUSq2QpMeuZ15hiHyv1GViHAvZMM6xbYW8i7CavQdP1PHyPT44o36SPh9rBQELVaErR",
  "key38": "43xvG3ThRDbXTn8bz37xBCnP52C2tiMNd6JFXX1p7Kr3rZ39CMBnaX7asBHq5zLJ1CCYPJqsqCmCFc1ZFpcuiKWp",
  "key39": "3T5fL63TjEuZVfYoinDJhvVHhx3ZKcHAWcTVmpfWDBNm7nyqEF4mHgkEgLtCHgtf3p7GqhuswJaDY7pfeZfVEvVj",
  "key40": "3jUT2X11Ru5DPmKs5MZNLBSNSxgdqtE2yBk1vEjXXxRExtDyJ1Kf8gwn4G9gaJSnMhfsAY34GJeqtcUMqrrGqyxF",
  "key41": "3Kphg139E2wbrYoGNKmPMcoW4yzK9pr3xzNEduoKcra8eP9fAp9UcdPb8vnSCrhfqvMq3feNiiDWpB3UUfLqACSC",
  "key42": "4EWB18Dzi27fPPQ2ZUzGTxv8zxPVymRszY4KdkZkS8mGBGBMYuxrpHc61mTvnp34KR6bVXagX6enuZ7MTA2LLtDm",
  "key43": "MdELGrxroydSSzjJsCTuWQFuVCpES9zMETwZK5CX9W96U9mWBjCQa8ba7qYoHir3PAcVnrQ95W5v2ZByoTcU6wM",
  "key44": "3SZ6AcoB5exg69LjAMTzcmfT9A9cLRkwjJcJEj5kEjiLSv5iX7fVW1N2d5W1ZBQbi99WGAepotdKD1izCg6S1rFa",
  "key45": "5BoR877GjXamADaN7EtDsgLHGFGVAaySrR3EHir7sGux8oPfchXWS6TYQas6fLVVGpsyY4fRBqsa6WHKggPh1WyR"
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
