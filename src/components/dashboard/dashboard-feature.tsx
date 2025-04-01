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
    "5awk6sNxS876m3kbFijDMJZ1MJmtCfUtzjTyA7xcWtC714FTMEYuBWH2pkgVdyy1K9nAvtBLKy8TSPgCXeLhbxQT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43F2V7MRMPF8Le5Z3xQohnDHhD49LvoiVEaTDL9RYwMNNzETHZNhw8hCgq2cgWbzpdtt3vFynRpztECMQ7UUyJMM",
  "key1": "3oVTNb7GProhx17yxSjh8sfRU3wesuP2ieuijCRaF7gq4FuZ6KoBScH28qwT2fqTTCfiUjiQpPiS33t3EV4sYBSt",
  "key2": "5qndNbrYEMpj1FifTRK7X9viC5xZCSWCEGjvrJKXaGL9W5zkrmJPMLgwUnxQdbE1ZFVJcNhccCcG1aFqgmTcKEAY",
  "key3": "2VBhdvjiRZWpRmGexMun1BtmJa3Mpu8V3dWFdkr7Ha16B3P8wtsVuv33dHgHDZKk3g5oGGvs7dNaP58dxNqnbGB5",
  "key4": "v7WLhfPtNawUpqsV4JZg4UQLNoY9bnfkfYjcfuWRkkvj823faFTjU5qXDqJqvDeCVayYBdmuokwsySzJUsDQfVk",
  "key5": "3hLY5FSZzs5gjyA4eEB2aJQDr3GbyLDiNeUwUBvK4XmsJLKHVFuRW3XLtbNcuMCnv1xcy7CyXxg3GrHfMJyV7BMp",
  "key6": "63qrandJ3mzgq1beBu1jDJBkJQoQzv2CypNBosfZYq92mrPiFnXWQVbwinZazJ2hh8Gex3izkJnGNe9s5szPPUiu",
  "key7": "5F2oEz3BDDHPFFePS7CysAk6jkoxx4qrJ13vrPcoEbWVfq7TJR2FDcDB3quw5pCvshsGjXqLmTshVrpTUcMRUyhF",
  "key8": "4GYbyGV6AGMMdTKLDnyGWPyaSRgf9GwchnsrcYR11w5XUaLauwNck1kwM2ygoz2HeBYVYG99x7JkJmPGwJBodzkY",
  "key9": "2FpiSeeiJTj2tKH6yfwnbnDgWikHAY9rs7pwKDDKTaRSRqZChiwzicv4jL8bUJ6iVHdRGygc68ERoYC4JCwgTT5W",
  "key10": "2CPV3CCMCnEVcx2zZXDyNjmpfbAdWNXBH7ZqB1ExZFFoXJwvBjj4xhnGAvj7QhfgX3sWBHjAUyG7ABZMcMJDsBNq",
  "key11": "46CAQXqoAhxq4APwMVWd9nX8MExhuCyXRFcoa7pquFFJ44Zg4YAWQ1TFPipkrZCeQPwPCHESUVUJots4VkV48F3N",
  "key12": "3Lvd1UYmMFw2KYKgZtc6kfodEMB4UXmuFgVUs5Azkn2nMNLoD9bzduPGxgsLnEtmyDTWvctZZ5qT7EnwJRmMMFQT",
  "key13": "4M61AntrQwu1j6aJpWKiXyz8VH6q92USf6RUph8G9UgQmd53QjoZ9Abajt1Ho492c5QsAKkGbK94JURoMuEkPf2z",
  "key14": "25ZtU1a2A1bmvgXnYh8z9qzMHBLRAUrsLWDc9ANX3r6mht9jC34k3hnMYxh7fctwPNqtELZ3nrtbg2eyL8Lm7z71",
  "key15": "3U65cd5tbCz4zy4AULJGZmz8SeZirfGxUQH9FPaoN2Vb6tLJoLqPFwgGTzytC6dvHUeGv1HK91sou1EUgmJwdziR",
  "key16": "21e3nmi5rwAYHGSFC4RoAhJscj7tFR4wBcbsnh9HnxhqSfEdknVPbuTCvmuvKC5hrf2R5L3gk5jWzrps4peoUhP2",
  "key17": "47crLPbusmExx31jCsfm8UHjj423VNvXQB7KoobuvwGZHYZyvrLYX34CUqQsaFqe7SxeCMYjQGDhv8GsjYnnMgw",
  "key18": "3Xf5KYeSLWhd2wmg48xXyZzqmzzV6V8EhpZAJYyHbVQunjRhPFU3yu6XjCtnohKioXFNzrt8uGqrEDL5xNdD2bLZ",
  "key19": "3BSfJUTeB2WKqBfijZRcLSrHGU7bjEFenHZP2AMbW4PcJxYsSMDh1RbWLkV6AZE8ovj59zNPTYygsEZefffXt1Jw",
  "key20": "5zHBErhjuWqCfbRPF5wuFHqKCiGvNh5VWYfRaHroBjJBz7HvW3w8TQjmURC9hd5ATDmzmncyDhA3HoPMMoxDPioY",
  "key21": "37cAPao9hAjdUeYNx5PkzDkpnvQ3kzwudngD9PaaHX3oUquByUo91F4rVqxv7orvay2izrBR6c476RMaFrJDRH6k",
  "key22": "27Zra2XRf7LuPTxirAee9PwtCbAHjR8r3UA9ZAMoWTzTc5mFAvAtWzc1R1j88E97jc9b7BjKT5f8g95RUhBDuVtL",
  "key23": "5PEZfEyTPQX64aSVJ4UwSbzNy6uYv29MPGNh3BX8TZNxSJJvL5qne6J8TeGLda1zePUR9qgouJJar2BuV9a1QxRN",
  "key24": "3uMEkd5jvt5zehvMPZYNFjvDyW47DzcVTi5n3H4AbGWZUq8B7YUEXf4fRPN7p5LDBTxGngmwngScdTApQb6AguPu",
  "key25": "5KUY2qfXeqi4xFzzYMSDySKiBUpvJdEcAftFqqmqi7e1WNHf4ZJpMxsPEZRpdtLkarwQr4QjMQoCCTratPwegvrt",
  "key26": "5rKAmoc7PMdY7U4A7uGEQoe4m48uSvwCEmn6x45ozvdDKpkrJx3YbBPf2iKhzA8Q89UAWGg7fEnYvFbL2FuXNxKo",
  "key27": "2b5P7uNK9AevdDCQ2m5AA4qHBAgFq7WHWjrfSXWHGkR4PKFuk7ci1KB6GiVCUtXXdeASxZXxZfrUB2VUQ5STZKsq",
  "key28": "2Gzv1ipc5PWKgKm8KBMW7c22QQUuV6mEXoMiczHRMKtQw1mQR2FCJ9DsfSyCbnHkZWQWKh2rcSgeF72QTmaD4yfR",
  "key29": "4ZYWCgXDcPtgPvRDUE1TBjY1Gvew5V6NH4sTSK4PBBLkNysm5Sgg22y5RDU6Kb2GLXqeqwLxNm8mutRS4gMerKQx",
  "key30": "3Vf7ZBfD4bik4hhZ9QKN3R8whDxgJf7g3ZWcn8qNwXiGvfAh19kh7cEnFcPCKjnd5iXRXcTvar9erQHyGFyBkr8y",
  "key31": "rZbs37kCBYu1dnJyGTmDqHweJfgdZL6FYeXuK8Efpr3DrXyCEHLcDkYNyBfRML4pGygW7QTwe3axTagHTTYxNAU",
  "key32": "4JWSji7rMnDL1WBvcwHaWzXq3L3fmecKGvjSkezc7CCrxgJbjeBMzJgXqJFBQvoeUeCkMtJwZSNqk96P2kAgGyS3",
  "key33": "5p3jM6kpvABRsh6Q8AAVex3bici5WcM6kN4knwhVA5pPe3ajvUo1PSqxi3UbKaVW6kdxZvaejrYAHX2jnmjMTZJQ",
  "key34": "dGMD6gUnxWqo4rRoKvJ5u6zCoX4Nq9KyYra4WukW12fLrxuXrTGLxAzJPi4c75bc1EAdQdowiPaBZiJXEFZvkqW",
  "key35": "kQyeMjZCLw771vD8gjjeuVjRSxRiYeoKHWu3qJorhUNsgDinCK6XG16FYePQDbknthMj61i5TvQozQLUpGaZTXo",
  "key36": "59hftvWKyivqWUbZMz7AKQU4nMfaETPyj57xe3Wh25AJnt8yDNpC3QzcTKgf6Ra8UQPn2PxuLHN6z4qUGzSGXcqS",
  "key37": "62hPbhmQoGcfommVPcP8KBaHKHpDHE8YSg4k1CxbWFs6VuFYKBS4uuDXb5B5Vpdwo5KLp9fSKgDegJ7PDTevJrBw",
  "key38": "5AKod4cXFHYvvd7KJMJqioxwDSYNLM15QWqa7MHzHL6TvzyDz23yKZLQy2qmo43v64Sf17z4UDzBMwnAvLurysH7",
  "key39": "57VTbt8xvpyNRx7Adpwe9MjfDfP1D9US5Cch4JHd16Fgh6ZZbnUf8XdaTD9eFPDNb4QsbL38jAmBBPe8ZfhurvQZ",
  "key40": "2qazCK41nuBR3Utd8txEHbZcCxRQFbiV4zvDfcB6nspWSZ3Ae7nGCYQZHYcfJjECYaCTGpoNFU3fES3Kwk1o68hT",
  "key41": "2KJDpCtg1ZDmn7f9uhe5D1FKWGSei3dXAuPHCusjkEyVEPKUiC5UWwMTCJZohHqRiRb3gUZ2eqE45935ftTxQEZ2",
  "key42": "34y8gzBJR6LyRLjXzRXA7CVB4tSTWN5U9DhnREWZ9HeHfrm1X95tarVtyJRj7pa7Ez2JHVBj4JKeMawbG13R88gK"
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
