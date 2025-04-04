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
    "4zvJ256LR7jVHru7XT68wcYtMNpU9G6fqdxFJqKuV243RoJmhTiqKnspJkkp8dFms8E7v3ESr1Rz1CDPh4hxqX6f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fu2od8zegy3ywLNTDQEAChGqs83MzHku1qbJ3aHpvvxyE1UXeaTBz48GnTtBrk6oef6fsPmkqaFBPWdGPLnPTPX",
  "key1": "3wDs3WidTZwetWKsNg8EkVvf3hoJA7D93pyTwnfgcD3scXgMczpGhDVPKKgQBr2NVfLxMRo7MjgSrojTDwnn6c8a",
  "key2": "3KbH9RnQ8xWm9YmrFc4f3ZR5K3Ar1mtd475uSPND6yUR83eq8Q4n2zWhXx5KdHdHvPA1nhYBsTydZRJGgPPZAqtd",
  "key3": "W8RPKZh3L4a3ofYUDaMZBaHr6dfYq5QkXXDqikJZt82nGbsmVHKhLpZHN3S8kw8crwrYv7dcStzJXy9m2jh6zjK",
  "key4": "4ks9hD7qUm6x7S5MimjVbqMhZFo1h6WP4mKzo6yrnNTNsUyWJQC4ug8vZb96jr715C8i3zjmsPzPj5orTvHC4FTr",
  "key5": "4XrLejPoMF98i2PtiTPp3k1F5fTwQjpgtXNB6fw1hzpC7cjQ92GbFGWBYdFYcpaLHoNQ6HUcqpVTNBxYvrC1S25F",
  "key6": "5xhEFtTNgtoumJp5GSLNX94PbMj8ifYHvuvPQ1ebC6t3x6T3Xta8B6zWjWk69CnSWdRqttcyXG89GNvRzQ516msp",
  "key7": "2xWHa1EMid15mNadYv2qtTBSbbqoctJJLRT4sGjiHVZrfnZoGC3REKkvf9qPzSMLrRsNa4dx8K6AHFxMqPpoWgQq",
  "key8": "3ma6cx2Ufy6VD8Sd4hPQMSM9vUUHmgNe6ZLsq6ErKuLhbPkMb98yiYxam6AVPhCBHGvZkmrranWVJEvNP6qq2qvK",
  "key9": "3oNmTnq8hVSog4KJUmQpsxrtDAoPetMKRGjtHqV3ZGCsQ2RkvoJToc6pntRjWYuvJ6K8RnBctctZQRwvjFVoYwFD",
  "key10": "2ttvatsTDcy5nYyYuQpHcotSoZ1HFXvCrhc8EqiEmt7RUaNCsMKu9uK6nPWpBzA9ocuBDfcpsZRcUGrVgSMHwYyB",
  "key11": "2NFGLfUfYydUzEmShCgdS7kkCPwVYgJe9mM5WB3KPCPATYGTaDFBQpudLpchTaSuZquTRKLTfJ3TyrtNUhLupJ14",
  "key12": "2JuNhV59aD6jmAerNKZmF62rVoiYrzhKiu9ARZ3R3Hvm3z2vj9GaRemNsZGxBRX11ddKrofMM3cvfUeDE8v9cgDW",
  "key13": "3Rqd7pAU5NH55SvJJjfuHEtwUNBx7rEkQQEowg8akTBiepG1Kq4sGWtjZyT5Rgn66XoJv1xmNGLfWjCQhNheSXe9",
  "key14": "3kJhCu7G6ZCcpmmi5TbMXQTMTQrYvqPdsPcb2XrjSjnNgPK8oETpNiLsX3ZLTxsX2Nn66pMHKVhbncuSr9JwHRHN",
  "key15": "3htUm2HjEmwUHG1mpnywZrURRj4WdqBBM96rxfUzcJ17f6ieHtFk8Qty2xgF5XzCzsEqYs5jYdmcs11yEnmDQoJC",
  "key16": "4YSWT8sDHiDbdDQn3hdpph6zExjVYZEjQGayHzy3Tea8Bc4NV9FzTvw6a5HPj4PyvnLRQ1i6WWq6xHkFHZvLX32h",
  "key17": "2XLfmNiUjWAXUtyQ6tDPMysXLHqTyoJEmH1cT2M5FPggQmJKpjj4vZKL3NkwZbSkMNWYtPU67Y36htRW4Epn29JK",
  "key18": "eeg5gPoEVAfw3AkDNVPCHvuGE7NAFEnH2ATgxCTW9BvwLd9HFNsjbZtV3n26DVahRZaG99ic9BkfGaQrDYziyqS",
  "key19": "5nc6upTv6xvZZEhnnCobgXtHi7957SsFbCwdUQcvR4JZGBnkcZ5JqCi8j8yQvxkQrgZRjjZSPDuaL83NM6AYjM88",
  "key20": "3rRwht1ucjSHDvBhpgJAP38if7hvNAbALVpRNLPJFiTztFfG2LpqvYysiTcyDAbgATvtWurrS1ijxqXeZoZ82X5V",
  "key21": "4YWpJASCaLKC7MDdSsLdjA7EsjnpwTcGd6caeAuhWDiR4dSAoRB4XG148MP1exeFwRfqZb7Aazs86AcQAXWUoWBV",
  "key22": "3efNZG6uMwerVX4f7eByX2wevWd5exqCDHdZcE12yPwMqdfftYBHUUVVHpzKcH8zgnz1XqUQoW4EaCrtCYvnC7CR",
  "key23": "2D8CAVLY19hdiph1tJujknSfSEbK6C2tss72qw3RAVetYxyGpPPHU8fTPpFNDwBzyHaDmv1AengEcSGBPsbowXZt",
  "key24": "5vKNF3944kdQU2AaiQLyrSFX18pEGVvEHYcUqB1yjE5oKuMJWfZ1icLC9o9p3V69CMZUZ7LkfjQeQPGJTa6tg18j",
  "key25": "49NLwYEequttYzSrHNCKvpseg3mteiCBEQsmQDhYkass7SYY2gZgqM7nAYWSYgU1guEBvGEMFLvtZLx2HKEmqEhB",
  "key26": "217AYEAAYU9VDgzcqAb4uSx4ETYsujtvfSMzNnUj7GUxk2ibEhPMjXhg3tScVwdqJfPYXiBFrSZZPyR82G5GVshK",
  "key27": "4u1nDm2q71VhH4kbyGpyobmKvLCD6FpLjemnzbUpQfybLNKnG57UBB1Z1rDC8xoeeAC5h1KM9t8LQWEFVzfGerV8",
  "key28": "64C6d2oPRwAd6fmt9Mp4wqSdCKiCAizPMkD1P4DWjiTrfsqJV2aYwF7t8cyb7etXF6MqZMMxgXrzaczDCGG5ZJ15",
  "key29": "4RxAn3NHX91MRyHNNXVQxHAx8zWc19zXZRNrVh9K2VhHZa79PebqPJEuauP3dE1fobXNDdGRYpDUVSjw9zYR3HFZ",
  "key30": "4VR7oHhvQFZw3SQAh5meZXKNgYGX78w6LGZFGWQ8Twi8AqytU8rEDWrfw4WmXWDfnnxVykpL6yWPA7xtJ8HAiihD",
  "key31": "22Ugi1covy5Exr12yXFs7e7RMiDfmrNxm7YUNbctzEceuSRGBh77cGnyHD5kuKxuF8VWZpRXwUiuqhVuEur7Fcpb",
  "key32": "gU1TQnQH4RsLL1PekUWA8aXmQADc4Fsgnyyuznwkyu2bgiaCUbQLh6wrcQia48ovyR1xUpRR9vvWp8XNMh31GS9",
  "key33": "3UeLGDm1amFpb92A8vVN8Y1XvjrwCXNVzJVLHdt665y7x9NGqgm2Jrdq3okgFoH22r7MEjQt7kaRgb7zzLKAQHGU",
  "key34": "38gZNQWhZ6Fy9ZkbuY35YcyKoLFsUm4eEmKEJG9xpQ98HtXFZgR1s3D4SyXBj1ywBLJxp6yEL7HcyQqCw9131oEo",
  "key35": "HbcBkSF7Ume5iYuzFu19FnStzgwfsvWAdYhkjZnjMAzpE7Av7YAPAwtkUgikG4AFCpeurUbLYKYSJbeptvN7CHQ",
  "key36": "42GcGrApjqFiPDap2ASCW53jbZwfHBHz5cZLrZkV8SP7ixbEPTLoKgJ91ZMEFvEPogkvD5uWJHqiQUdULavwx6qp",
  "key37": "2Hjomq91yQMtYphtDehft65svxs3MiJzakeLfppedkwkaDceVRdpJiDfJHVNc6WpfFDDs49UWoouTXHmKsQ8FuNr",
  "key38": "5UohDm86KL9FTjbG9rpUtjdisCHohQ9YctdWgUS5RxwEP77LvxRT9X752WmSMFzfb7MC27B8nKmMzYnLUby36bAZ"
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
