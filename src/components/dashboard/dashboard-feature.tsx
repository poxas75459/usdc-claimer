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
    "3PEzFomhKUpojxydRVP58mehW2b76L4HXMABvLjVbLmMWbgUDm796Q3v6poAwHDe7dPfwAGvjNxLSZAL4K4UJRcg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V2LqioRBJzmc3XbouX1oMDzSk3cvCucFVVdXGBPp5N8z5X9ur8aJTmTNJTBgaxtWALYugYmyVmCN39pra8ABQKC",
  "key1": "4pttyy7LVouzGPsooFCaiJiia2y5Xdv7JmebPEj4UbTXv84UJJYgc5vk8vebAzyDPSYMyL8Tr99kukDWhTTkZtAA",
  "key2": "WBz9kRKjvCMUmjFWgWpnmTkLrBqDwqovgxkgWCT8NayHavBk4znWYR7hxEerAFBiW8nkngrFBMh1jcBMTjEY6vy",
  "key3": "xScwTbUJDA2kYkcvbr3dgNXkmww2uXiCBw7bdJoygxLBxAh4yvnqyTqu2XHr4V37agkKs2sCmXB4yxwCS54gMvB",
  "key4": "5V3GTYzjqA2j3sZ4yV8rvq1c1EXb8WzoUjjaBy6D2ketDELvB2een8dZAyAvyVoLT3RpgTs7XkJa5hPZw9zLUDXV",
  "key5": "5xbn3YfRe6N3C4tDgbvmNSdMJKPQpgbFn9HmRGKva26sENXLFGam6hecYvABHrJBDHfGXnbK1j6HbzbkyPLxX1m8",
  "key6": "aqayhb868JikKXKsVD6ZooC24NtUT1FYVZm1uqfUbyd1U4jFQbhuFod1sjwMLGymbEqAYijojaEb3SCoMjNVFxR",
  "key7": "2XVxx94YaQua3V3rYm6VKvc1ZRKhtL7QoNRiGUMUwgoHCMUnyzyLBmN39T4gaSuAZF5SJYNtFpEwiDMPpREY6WF3",
  "key8": "njZvob5VwZjAukaa5rMsPkNvEmbb6KuHuFSk5ND6nd89UBtF9K3rsdJiTuPLwDhee6gDfqDaHV93k7T1Z2x9EC3",
  "key9": "24K1RxfyoBYqGxULDvyFUbP13ZQuFQBr4xqSjWraN2NUmmxZWTMaVPqS9DuriMZE8W1nmeuwacYiWV7caD63V81M",
  "key10": "4BZAXU3SyzjVfzuiEKJVaK1eASQfgzu5hdnpnrusnNHWJXricfz7udWecQeDy76Lyuey6tnBhfwZuM7cjdgD7KUU",
  "key11": "uvShbt8ezKzGmupoyuPw11DeQtbKgaSSbTsg8HGNfYqswAXUPUeao6SLTSEqbaz6vwduBmQBHJ9kbL3MijriYpv",
  "key12": "5prLQJUqaSVj1YrYrFDmzNXUvEeGkXeqGd154AK4e9Ko9kDxXMzAfMabdzAzGdrQBLxZnLX1y1iHS2jw9wjQoqpf",
  "key13": "5LYen1tymNLvDSX6nerAjK3jcqaZs6pynY2hqj7acZyQcvJmAKFnWZunfBi3zz1rtibjLeHq7r3whsYGXqZ89nG6",
  "key14": "2bWMYDoymeC5PwvxK7x1VypGELvgCkuucb7ir9PvU8DQdv5iGtKZVq3sfWWqvwcf11zBwmCLED3Ywz1dbvgQRPsU",
  "key15": "5zi52Zf32Z2HsLeofRL3DYPn2GEpCxiRydX5dtc11mekvStRorKuMbGDpj8YjFU1dAmkcRKyySgHhsin6a3iiRcA",
  "key16": "4WACo9VWiDD5f4NQsKpPAcJcVJ3m7z9n6aE7iFt9AyGFu12bXG3NhRFTeF9pK9BGN7fLx6CijpMptrVFM3MrfT5L",
  "key17": "8Lk11Cn83jBjknmfKqJ4SSxLwstweSSxX6hxPxSEcfUHDdG8FHP2KTEuQovQB4DZpKKg64L1pXtzY147JJhDo5Z",
  "key18": "3Xr1NaHGAFiScjGDRvqK7ui2bqrfopv9tL9ZjoeBeKQSdsJzT4SKAvVbgVrXqD84vYp1eCM3j29eyGkmsqSoQcvn",
  "key19": "18RxvLQbUwKX7aetJg5A8oFkZPT4P7Dy8S4CFCi1PqXjM4Vr7fsZfapkX6RVQFsJmJbrbRFX2PMSRo7Ep5McGtU",
  "key20": "4GTk11mf8b8FYJPkMrcNHKgxm7vZKAcaXAd5vyjki5Rg9DVatHHNqXBN9nYRLeutxf2FNWh2bB6yycTpBBWoxuiD",
  "key21": "2yoBdKsHvYXX4xgBEqXnNvQexWRjakwCeMi33SWf82FrZ2wK3aNEWwnSysRuy9ecvH2brthaccvU6GLBS5aRjQ35",
  "key22": "2819Mz9Dh53DsrMCJorYJxihDHAWCo44eWTaeDVydhbtzQoBb6e6sAB5pF7i7sYP16vDyvwGbU42AwdmZSMPPZW8",
  "key23": "63u1cB968NdaiNms6Np5VwAjhdeAn8w4Z4Afk444qZDZDRq828wCiG64sohTmoPRMMBLUGjKNdZxPkm8KpX2rZfV",
  "key24": "466h85P9eoaynpdKhc7t3WahaBgVQ78QTrc5wRqL7kdwxb4hAdtkXT83Kyjy2SbTxhm1wB5cyf8eykYzmQwCpvJx",
  "key25": "4nWnQPQG8461vjuFhMEYwDaktG8SQdQ4pnYsAMmu7y2BjyDhhvjpvjKvhwrkRWr6gHM8fbfBvBLpGiiZuPgfRWhP",
  "key26": "4LxWLBPhGdrCf4Xc4PLHDLRCR7eszw5yivmX56aCbMFutCyYGDHYEvZMSsRzmMMjMqMmy8ez4HBWvryUKXch3dT",
  "key27": "N91qpH2SoSUy1cW9RtUFvHCnD4DUnKYkZ6UMLp8XDPXJfgr7fL9TwgSaW4hqjdBY9pD3Q8X7ze8737BDDKWE39g",
  "key28": "5mP2REB54mGKBWbqMq9TC5HBYgkgxUrd4GCrGjAxz19DcYU48A4tWvpRnX2Fypyhc1xhHnayhbvqkLWtJhmRQqDQ",
  "key29": "2C6feqdm3KQ8Z6JCAk38MCxKZ6rvn1AecET8NAfjXXLNc5DDmEm5c27ZfrRb2m1jjMXyMNsdWdvnTcUrrbTau8Jc",
  "key30": "3h2VjHsgPepadXggfHYui41ZgQcaRnUXWJAmGqvwaKF8dHrH9yPrcoij1S5ZJxzwaHmKCvrneZ2phkqN1bDndyna",
  "key31": "36XTrjSoTh4Sp65xMWaY8meui8xwFJTfvC324AfUEUhuFiU4NtKuZgm4tmTkiCBifpE9smJLLV3xhJydJSf8sPMp",
  "key32": "iCuBzqmr3HbBbUrQtS4tPo8zTvdDTEezhzL7Uzz8oq14aZTW4CftWZGGmCn9DWcTDdkpbgCozTKerADKex2xsAj",
  "key33": "4h7b3E4WKHDBGmqwZ3NDatrgNfnSKB1SR8Do4BQaccWk5eZrHgiYM5kvhuUNhLb3mjfF53DcwUeqjnbi9hGJtuEm"
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
