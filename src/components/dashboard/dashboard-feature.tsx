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
    "RwYBHRwRwAgQcLmtqQFHJEWSZMYu9QuxZZdxYVtKhPjcBVfzrcfeuJDMGbB9ZvcFgvNcGEunX6iPnZqDnfiyXZp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JAqzHNabTNHjqDAY4k3FqmKGYib1JZSTd9mJryFRCi6nZ9P4H5dhWHaSSrMkDejvvPSg7aG3VXxykFX5CMz12P9",
  "key1": "MqSuPCRAkUciJKzfywCUemAJfthSKG3KPLFGWC1cP2369SufBeCoHbxRsB7rYcdRb1BG7EPdk7nhrBa1mS3Eqgq",
  "key2": "5V41UZB2ktVnXuHtvTNAQSEjZQV5wcdgrk7zeJ4Fsib7554NgsafyFoixTY3sLv1AHowEkZuZAFb4nZV6qwvsXYr",
  "key3": "5MEmJNu1jV79ky8crHb2CzkryK7NYoi2X6DvmYDk7gxpDwuBKq9tJUL6cW6EPfaZrvfCgWQuS9JB8SWYMFZHeqVH",
  "key4": "5SEqfHD4gVqFgXDThnvWaSKB4bDtk9aoDFVbfKCB3yaypC7TLC2xvkWYhxZreT3cGjxj9nS1j7EgffitydxJV3ft",
  "key5": "5fmK3skVmqH1Luciy2wDJJhHTGmRA1ga4irU3BeWryb1b8nszZwusd84D663GdRKmZXNubfK5PNFghGz32fSagQd",
  "key6": "3hXhBfePxBTQU11eTQr5sScqXid1Vrqej6ijYUjNdGzzkHqfw9ZGQkRYx4tF7Kx9pGfRx568HeEoCGHMzkA8Qwq",
  "key7": "4ByNJgnmkkoVukHKoL8WYLUw9CfV8sQExeKrMj4AfeNCeH77gEBf6jBPAYdUU7JYXRkuVFAXT3CvwH1uWfWhkXX9",
  "key8": "43ivDE8eCtLCNNSkBQxN4s7T1e13vMWHtEkE2P4yfwJPxWvfQN9Bpv3gvpvLXMuZayckofhrcbkFfVYSBLtR6miv",
  "key9": "bD544t2owS5WMHbEwRBsVwegx9Zn75jvh1fmeWw5vqJPSjyZFAjQx94iQkCfn584MJX1gdAsQ6cs1ZNtecDaQzJ",
  "key10": "2h5N9hG9GfQcoQTMBL7ZWivR2EDMYtgZheaTyEspAFDqLYtKNKzyQ3avnysYQBgjQPhg4HHorJFpgbnyWf11Rnij",
  "key11": "CzBYuk8cU86n4Br3T1WMfACguHs6YQYZRPYZnz9M7UZ3F2m7qko3vGbhvHNjL8Uj33E3SbefKN5bRt27Ry9CnHa",
  "key12": "wdQi4WHVQRWQkwzFuPiPRkB2EEgW1SADALgKYyoKaCYT9QpFbuZH21jU7nyxm6iUnPJ4DyiwJfX61R2dkVMCxqJ",
  "key13": "3oHjnWkFixGmCqBcFbz6eHraBT7G4AYN4YKy9An54ryHF4d7d9FytWNFtA8daAr5yR56Qr5iaeJCF4qV3Vf7pD5a",
  "key14": "54TN2XW3D8GMJAQSi5YPz4GJKo9jgz6Q9z8y5TEtQ4mswhhfkZhWPXmHeG1GC3cCCwm9SgfzwbGn8Uar6xXTizdj",
  "key15": "4cQVZeGpnET4BU6eS3oYzKHSCD2PKs37YoPRk8ZyEs1JT5d5nfjToz5LJweK2ZRuJCR2XohoPNyZKYagprY5HUb8",
  "key16": "hYiGRViS6bHPXrJVznMZypJzys1Fzzv9vXVVZAVYtTwn5j3BbJE1dRHDQL2527vubf38fDKoRRBenNkFgrjG8sf",
  "key17": "4YPi1Gswh6kBBmnkjJtveZo2EvbbiMm2EDD26cgm5X2nAmBueCm7SwfFqA1W2skgZkkn614DrVVs2WkSiVVhpTMb",
  "key18": "4HvuSaPnbhi3EQ2TrZanUuPiMfN3CsrhEQ1sbN5msG9S4s6eFAVgQwtdBCohfTa6AeUoW2fTpLh9auFUf9iy7xsF",
  "key19": "5tj72HMmYvXTw2hqN51JKqLcz4PE9BuZp7vCf9MeH4Lt1CpX8btwTW2QCRGskM9YDSrkxxVX2GQJJT4g57CRoZHE",
  "key20": "51RnypBsbYLeDc1DMR4V6Vf5Tr2jcgbZF5NNAMLFFmFweBj1z772S1fXJdEuPy7dVA68RV1nuVwnpXiK6moNJkMz",
  "key21": "4rn7Yz456vZCx9igjo22heD6fGQxoXrrzJFhHySXKjoUXYXgtcW26hRYrsc5L8Htd5U9ZTXQK8vHx5rXRBsJamSf",
  "key22": "3pa64WKWf3PhxtbiFwAwk96uxVsMmtM7n5gKK8w2yrgJbUcnLz1wrghKNBLX8kYJApXamZLr3rJ5MxQLq5iPpeVe",
  "key23": "2pmfrjmwHTnTxywPawUvJPgiJTrpb8VdkMqv9iwA6E29MVgV7vfuisyiZjcwisiVDW9tsChph8ehXei375FShfQx",
  "key24": "348uzoLJVeHYY2KMzTPa1ibqkyuc3nYwZVEYSTMzEFjZyCiNs4ndMjrpxe7upye6XbdU7XaReTE2VFWBRsNkNqc9",
  "key25": "2mXrmqxdNqfuuL9UxhJ9YymrBnUs9MG3pDZnVxrmSpeyXy838uJzBBceGSEX6cXUSazdaDMaNRKt85PnsXmS7SXR",
  "key26": "67RcvdvRWwJyzontUDkMEGfkcnNEdsGmTAjqVkBC7TSz91m6NAWLzXNXaPSPd2aXDctkjYWWQPu1LxqYstoCUMgx",
  "key27": "4qPMF86uwJQ6Bn5QhRtGooNbKaynDSfLZ4sysodYuTyhK2gQTPRoa9jHDuv3DwsuP3w3QmW4zhqJje1phBk9feWk",
  "key28": "2kSojqWDdqRv2GHmPe2ND97HU2YaAjJw8x4WayJKsjvcS8kF1bjZdyo5kbqJqZwnUHZJgb8mqFNcykJcAbH9tP76",
  "key29": "5FTuNE35ETj6fDX2LvcHxjKq1dhbXsDgBGrbkoKCkGUXHr2VuruwwChXMjiurQcXpy3v1Xwmi1XUMdUsYYeTmNk2",
  "key30": "5t7rGbXMVjCWBCNTWnjWyeBZMZF2G6MchivYLku8X9316wq6KuUHuNJy7xLH1uSua1cN6i2GTk4iLmeNA7BbU83o",
  "key31": "5ham1HW8JNRbD6CYXaFmi7S1HEFAc5WHcx6ES2bZAzKSffZ6syT67yeiP8PccJBYjNTTedydjwQY4ogKdrxHUkb9",
  "key32": "3qbh3GsbnYrZczKyfscW3snKrQZoHMtAkv3Fdk2f9BhY6ChUrYtPZLLBpcUNFKF92f1WJmh8kdFraYTfXmYR5Nqm",
  "key33": "5LDjthjdz2MBVcPzFUcJTmFFNRgWZ28Kout8FLAXVkdhtQBR9YBeUZqGBr4eWDSffBtdqnQqtUug1zSdT348Z4eM",
  "key34": "5PFP7wLqGWCD8STeXzsGooR2CrDrSMMyGeD1aaiitnEM4Zzivqe9qxXFxod9AdLZTizqbRZPWQgFXrg6fqCneFzb",
  "key35": "2iyC7msMeNTL6w7JQzrYr5SCe1Td3L4aw69fjYjGj8d8EFWCkrN751zXPihApGFKU8WtNooNeBrSum8awCHcG5p",
  "key36": "2HF3HDdqSQaaRrLPJsXfL9tgxwduAZLYq4nvzr3sKQJBEVAUymn8Tbt6qfNNmcj7Yio1H2FAoCyDeuLWMY981ecu",
  "key37": "4xxFt1nv4QHftA285Mh2teYrwUCZ4E2qjSJkTsHtZsuDJb4e1NxJYkgyvztV51s6LPCreF3qJ5soCGzbPa9qiMVs"
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
