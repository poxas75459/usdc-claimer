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
    "4ji7Nkbo5sLRHpJAg8o2G5u7FJmzw7jkxzq6FAM6gZac1qJ23iKiiuQxSJwPGwLQYhrJDdKdEpVqPKZ7Q5DvNRhm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E8GU8KeszKFY6fF1ZGpJUw9da449D3355Vkg7mC6VmdBxF4ExRc79dv4AZcsaBVVdAEsM1cn5uPHvmREH6jG3bA",
  "key1": "4w7BQSfBi5H5KqwND5e5bsXTWSLS4K8VZ9Cacxgb8j8Thfmkeihxjb1XiusTzrfPkcLFtwF2YvatcVR5fXQLPAGo",
  "key2": "hXFympSD7F2hVau9JSLgBZj4UzfqKh2ntYfXJoaoL8e1BF3HggDjQLkmx58y1t6DduLZQ45kFobeEvssBU2xvf6",
  "key3": "2uB7zd3iAXtLHmN5kWUsUFJS4RZ9qJyWbgvyzjFTvuSpnhcVTc2c9X6xhFCNQBz6DCk3cY32fGgGqt1GT25pkqZP",
  "key4": "3W4wCSoecmmegpLH7SVpTTVrhjUkFDtWmkTMWrA6RX7exKKym3Bp54beqte79Uofn5jF9dUefV6m9MWXqHswTJVL",
  "key5": "3UWimqoMJYTjH96RmTZeM2QSgpGVkbfGUqizmUMfU5uB87pjMgj8ykRoebeeTcj39x25U2LTya2SNCj1caCjC1e3",
  "key6": "3kbmNz2X3CM3Mgpt6LRDTvjEf7fFmcyWyGvv8x8P9JrfRK6ApQHQDteh7WiEo1Fhpmoqqxso9raT2nJsk3pVC1aF",
  "key7": "2pDyrG4zzwvdugEBfcpauMzTHMisE55Smv5oP6tyXDo5rCMRVD3U5xGkKr7HzGyQFGH84S2v5vkbuGxiRbLwpV1N",
  "key8": "5qUsd5dSXVNkss1FUkZoRTc7fcGbza7gHiAb9rwMYsXNXr1a55fGqvEmHuLXHLRUNRNr4vph51vzX6zFu22rA281",
  "key9": "4PDwt2TaR2r1yupen4yBNJiABdphaknVVLQsMaYaTEwf5NzAL7zVFjJiALLgiuvGqbpd9emhNS9PCiAEQrppK14P",
  "key10": "4u8eVjmrnPvwzWgu1g31XeESD37JVk8EuTBDPDKiLQW8JokJkuonnoPkxdELEjy1zGbijhtrGestoCMPLxLCcXVp",
  "key11": "4W3M365CS7uxuaynLnG7XPuXzJcLG7zXVM2L4Gx4dYp1Vg1GFYB7uGbo2XvzbwGJi7N2kaQu87rsWcC6XL3zV7Gq",
  "key12": "2adguwsznikkbuc7PNQP5cyM8tZRx54Uz55zoyJcom1DZ5CG4UH5VhVWuAqwH6GhGSJx1Hadq9ezSxjpPeDVTqQs",
  "key13": "3SvbsBdwDbzsCinhpe31tvydnyTqTgTHfwJ7nQ2jpZq9UZbdiMH5PZgW6ahEQryFQbrCYD3WHKsuVrzzhAnUvTtB",
  "key14": "3ukj6zTcdTJnwwYGtfX1ETUAN6HQCSBjESMTaYRBPSU97pQf7e3brAE2a1HVQ1f2X3SEqeVdeL2WXz5WDcGPyZJs",
  "key15": "4cmkNVQMaEn6FPCm42gv7MVHnVLthd5D9iTk6p6nzcEjhWChSjKYLudJEirBqeEvRvpHxyhnSG91VmA6tn6U2nh3",
  "key16": "3WWfDXrKvuDstevjgBwpbyZ1ioRJmLcsCCtRJD2z8Pow99cNvgxwS6urBeTANGHtjTaJbuepd6Aaddtv6e2EcENL",
  "key17": "5hubtq7mpiZV3mHxjBqk2ZbiwqxRn33cscA7GAwq5UMvaJQ1mwanyu9vhjUZVcPWA4FjcSvkjjw4Z1JBVAN5gLmz",
  "key18": "39ZBvw6CtmYbQfQZoykBU1v4H7oXcE49jqMS9JVsLKP9ssyyrDxbPxndBrMf197TqNgBMKhRS3rR3oMvzMcm7Fdg",
  "key19": "54VAzcHnvp9o1AAJmSAPegcnhWYqpMJAp3PXJaMLYmse2AaJtaxGYQyh84uNxLaCkkJLN7tCkRfuxFWX4gULjGeG",
  "key20": "4ALooyai2wx7f8GRL3oF4nB9pAyzcF2oFqAiERAEjNcDCjgEQgkzYbxf3hfbAxh266TE55CJPaNdwiJ3oKqyNvCZ",
  "key21": "iQmsWUbQcGKiCj32REwiA4ftf94UMmBbCLSwWRMs43cpt5uEUfLQSC6o56dFthw9Xz7vHWzAgZ6kihW2MYCKZSa",
  "key22": "3h7q3fZJYmgR4z9Q9rezG5GXQXsuxqx2gcgWjDxCELQqrsrUxj5fV89ccChUmxMZ1VnGaAienmZZtgYvjCfNj4xT",
  "key23": "bxakQcSeabBE9yNqCP3scD2LTYyuu3Qws8aWbx5At3fzd5tE6YPjCvXvXLYft89qvUGpNtjSf6FocAkL48NUCPc",
  "key24": "2JgN9WRytHBAW1wdeDBX4BEsTGBEdMfx7rtMYuTTzMyVAWAZ6hj5Sfa2DPfQUV6iVXNYxYxEU38j4VamSMnZKWsb",
  "key25": "65ESg8ycgAUgji4KMM2CCmvu94P9csbuYUZMHdoWTYGcrdtfSGEYeZkMDKeQf48fJtcv8p2XJ5R3tuKaZdFsQfcc",
  "key26": "66RCMKMbVnh8TwTphzgHBQbTgTeCb3iFn3SavXm6K6Wi5j5FYqSCytQubnCge16qHY3KDmFgA6Rrhh5ER5QTHJkd",
  "key27": "4X7Ui5zrjj8jdWyE3hzDsJ84MdCk4Zj6GsXzQiH5ibxaZtBngLjm1oEp7RRESoWbzVD55zdJohGPvJG98y9diV8E",
  "key28": "4pcxxPJC4WUsFyVpSTfB3dDAZrXcceZhdfX22nFRKoVJ6L2gS1AiLwMThfJHauSuH6KdguakCbpmSnofuaNMJeNx",
  "key29": "3W5eKJpCnLcG2JvY5CDcBvXLqRQ4ZLj7KxvshDfzoGZL4f1zAbGmyPJVDAmQjy7BWAmayJJzW9iwZNUJ5y76hEKW",
  "key30": "29x4feKDDPwc9f9xxK4ZLpbHmGh5Yh7G2NTwqRtDcfMWK76V9tSrSP5cE7iypsgBahw9KQr2NXPNxEutHvau6jvj",
  "key31": "4myVr8zopKLyMm5gfp64DuoATQcfz3v6J3EiP8t7sSLGHAjau14kFmkhy9nvnx1ANEdn3s9YdeCruxnCSnh5GNaf",
  "key32": "5EwFR4YmLv3tEYT8uHC2bwx6KfpgTMRoaVP6cNgSBixGBmm9uxqW2jyMH8L9bv5qwBbNQcf1McsQq6zy5a7NgkLc",
  "key33": "WKjheS8awi3vS3dPHVJHJGvHjC6A7bJFCFWuV3pqrJPhadBSeaMtgXx4ghsXrYbWB6nCBDustfm9FgGFQaW2ccZ",
  "key34": "5UYt2ubv3XnokZckNrjPw7KpxQSLgPrQfV4VPUN4out68T9BGPxcr7kmRG3pgvSktuv9LZsx7offaFvtSU7V5Ttb",
  "key35": "2xgeHN1WKVaGogEDrrtXqDAFPCxiTRF15xyoVvVbuQGhUdf6zkfnWWP4nY7T2ygtdQqdoq5beoUQL2MqAG1bMZXi",
  "key36": "51wjuWS8E9pkq15x6eWdX4cxXfaeW7bwLED5oB4qrAkYran5E229kGDd3pbz2KU9TDtcijnU6Lztzq9Kizcmg5Xw",
  "key37": "2CNc3Rxs2A2175NcUy4VkCEYFrgCDdZDxKZHVfh8hjVUbF6ZmuRkX9Bxp9YATzVdazB7gdnTu5gVFaVomFGxTWJv"
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
