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
    "4TYypvYUtTA3e7SkipvjdNoYYuctyJQKVZHQob91ZKKHLmY1mx1fm9khfnkAZ84Sa4CGVxQ6hUNWnTEjie4FzDrA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42zaV7h7dfY3VmygKKig2bnqyK5rSzNcm1xsJJ6VmkYRBxGm2w78A1sDMqBvh8rA2fZukxP8ZTpW1a1rQXiW7TFk",
  "key1": "9FGdscTpLXXiX6Z8U4Xda7u8V1C3HkaV1yozPxoYLnDVhGYk2x3Z8FnY5gxv9wmvEDmqjVUk1aEFwKQWeJpYaDF",
  "key2": "24uVLapwZ7YR8NBKDKuURoc1Nk7p16iLgR5QLpzeWqcxTfZnbb7yJUHP56aajREaLLtFHQr95YLYGRa7pXKWiYd4",
  "key3": "4y39vcRqg2Q83kXRYi5YLx5Zceppu3F4vnuy9YUdbzHuAct6DSGA6AiExxwGvfQx2VZffwTmJVziomzyaE2MFUW1",
  "key4": "4eNaDKhM9skCMoNzKrsVJSZ9pcSjfBNBtHJD552rxPezqPcpToAKRpgdGG2gdigZVxexBMhUpMfDVPhU1GosuScN",
  "key5": "5JbfzWVZd68zxqS5Gv9WGUN2sZQ6TLyW7bunFwzjJZggAw6ErugUJ9qponHZq1uVJttTWb2heueXBAURzRm4x3Nq",
  "key6": "XhxezSvmUADDFWEzk2xha1MUD7uwCFTirNBLB9g73x2BkKohxCLvGxV2VzvPx5MhUm3Uvr5FEinC5F1JxhfSThu",
  "key7": "5ycRGCdq9JAEs9WWGRBnc3obqKhK3SVMSEmDKjHrDTj57mzjp3DvWFrE2F7QscR4V54oNEao8LDG2eFYpW8pJinT",
  "key8": "5Mh9wf61P395zeZoFoXX1bzxaNbnykk5jNR8wyH8jaa6ZtkTsZqan6LrFSLnmcWGM4vKde7XfXUJtGf4ranrJwnH",
  "key9": "2wNeBTZpGX6pmD3wayi1UTThkyaRvZKPertbqNxo5tJNjVp9BQmr4R9SR9tuNyVDYhLtKmAhFsXbYd7fyxcF9jEA",
  "key10": "4A18ZP5sTxLBCmb5amxDEHfYngt665GuDCDEZeaDnsR4oEfsmLetrNmr2XEj8v4WMX1UbAH2g2Fp7FVFe4B5qBBG",
  "key11": "QFQ6HV2Aq5n9QV9vbqsYfyyY4r99pi4KbhZYWg1Y1S9w2m4EEsJrgtgnpMzpjfpqf8cAezUuuzrV6mfn6AWTzhk",
  "key12": "5i5xfKV5K5EFLpW54Z14hkk7j4pe4Q4WdmMXabPssZPTSuhiUGEcfcNyDnHvQxi72Snx2ahrBBDBvT9iGATNmwNu",
  "key13": "2ZdFS5dP1WcUH3SwqrGAd1ZXgqvaWUWX6nxemPqXzxbq4wHXNzWBVfCiutWZm26iJEUtAex5x1oMXp466iVoTbMf",
  "key14": "SWREsFHm7mL5DkCviKnRLffuZQ2dtU5YW8f9P5so8KZ8FHbdYNTxy8QRePnSsWpDiWDGYmAMkDSvjCV2muSxWHi",
  "key15": "xCQuf5TR894vtkZ37n95S2Dx7jdKBpzTp2da9FQZmJNvFE5fNbTUAGx8MYDFETohkARXYv8cGD5soncfB5PYw3M",
  "key16": "4mXf8UzYwrtxtuTp2mXrDU6vgrSnvU9UgTjFiUjCdcz4EMDiCkn5eijDtixDYZsHMFPQJE8Fto1wSKC15Tv5HrJK",
  "key17": "3pV6odo5Xw51MMxVBaCKuystRK9hUcc373BvJ82iUj7k58SHxeyet1t3z97HsugfX8nHvDqiLvQcRpQXBKQsbpCb",
  "key18": "5BCkddWLysYaHE56b3CbREz5s3cFo5uJ8NueMYEQQyHeE5qaLgvRFjUQnbLw1QPHEppq9qKFKWXz1SnwHdtz5kQU",
  "key19": "4Mgq9A5wdkUpKubeBzgtTS8zi85ZhgLP98wAkSFK4pSWHWqv2STJsYexrCMrUWocNPzeyZfCumJvvjkaJYX9DzbV",
  "key20": "4XsCvsDTuUQM7f8a434GgNW7F3Wmww1sZfr9S9aPPiqKPn9CeTyqG3j1XZoxUWANycErwFWZKAXJGS3SjKjokHwD",
  "key21": "PRK2Z2KoP6DNRK8fQDYE1H66VkhbBQMteLkTwW1Si965d6RurXw2wW49UzH9XWSgGyZciZg9wHD2kxrkHkQ2FHu",
  "key22": "46Tq7tKMDGxfndyBKgbaNwGzHE1cT4Rg3iXkcU47uePwNgbuq5tNWLwMkpRL2AgK16aNsdrvcXjASY7KYS8v3no6",
  "key23": "2cchpRGRPsHtvGjSyXx3FxdtaCDgn2fmWn4K4Sfb4owb3Z593H9B1c8fMiN5DEsB5sttETcLctHVPvKexRmAVWw4",
  "key24": "2esTXLA1YucpbXCpQDghC1S548Rft9dQkkMWjpmS2jFzjJkYGCrKUCgtcwEasKBHzWSMHBHjAu2uqbXj96UpWrQz",
  "key25": "2NkmUbu9LZACagxZgFdQ1J5d2pNvamCokK3TD6xQVv7P7ZzQ9pEoaZjSQAR1VgcpLUJFweS6gDhb9oDue3Toigks",
  "key26": "3Vin1VDS6maJMN5tbKLQztuUWf5kGacG5gmeVkUnApBNnjvsG4ZBm5wtUQ1Tar7SwqJZHRHSkrpgsKMJN2SFsku1",
  "key27": "55K1qwDMKJHaezdtA1tEyHFa5Z6oZJuSWKFZy4EBgyBSys66WWcqrG8PQQ4zgxREJpezJ2TGbbytbhQp1c7wsTDL",
  "key28": "3juHQzuc1sUtze2KDuo9nXbgq5AE9gmYzW5GNxXPrpXVwkLBVoAvvZhAoTSFzYfYniRdKc5WrWLoaiQSoGjN3xA5",
  "key29": "515RGkDMEnccnF8rwQBY9vMxWwZvSg8XrjPLrwC7VZGae7aaqaVtkfwAcA6C1GBKbq3TWkJXE9yvpBY8ncsBxCEm",
  "key30": "3hq4YtfH6jMDjMY7SSWBkw9Ksi1qTCY5eH5F94yFDykLBjE6jdN7DSN6qitR9moaRDRburnfTfQibafdgp2TYCwU",
  "key31": "nTSdpE7yCTTy3xQH4Y3XNqMtNo92SEMU7o2eiwvYdWTDQcDNrg7snRp23nsq8S1R56fy5VEMaGkc3CtrsqS3DDq",
  "key32": "4WhqCTaQGVjXKVGsTCZwcaHQjUy8ABXCMWEwyj23ik5idJV7Qe4fu1ZxVqa2B5ttYQdGDu6qVbiLo5dnnVpoTfAc",
  "key33": "5VunuVi17Aq4CwHhQSSbj2BtkZkxcSbNXFhbY1M8p6HGMi9oVi5ijDhoKhHHKAngVPsQz3T2JSHjpYHPKiNTU6Dy"
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
