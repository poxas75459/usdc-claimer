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
    "4WV2rYzm3DhjagRnKkyy9F76TKK6446aWjpjam9yteFmPTkbyn3njnXrUHGkchfwwva7TU36TwGmTA7XZ8rnfJMs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JN91QWsydeM6aZPgWrbhKDnnYCb3F6sP328eWqayQjRne4dVbMmq7KGksqfA8tt6841a583c68LKTSLPoquFVuY",
  "key1": "5f1GQ83y6VxVtFb49462XchVejmJTaUUGTuBQcdL2QxVUn2B1Zk6B99hTD4ERiQceKbMyaCMUqcQroFVAYbybgYA",
  "key2": "5a1dxd1nFTHqaH3eRw4pS54FagSTBoYqeYKJqy4NWX2GDqt76Mkkr8GY7muUsjG67h65P7jMLm5HbuKzgHX48ua6",
  "key3": "UGuFjN8ihgBFodEEkeQxFukSEc82aF1QV63LdV65a6RrEcAe3Fou5rCQGr8bm7efRXqjZXRHczbzLPER3WKCrg7",
  "key4": "5K7RWtMrHyhqCnAQYAvFjrYRNBCXqderkU3j4j5t1sKdjVhv1AHF3WyYu5UaDzMZff1EKCNSvzFRmD4hdsZowHfU",
  "key5": "4XVdosQx8JHuw5X3FEqBVkXLW9336geJKHxCbW7jvtoQ8uk9XrFo5bBQE9nx2GgsNnEdkdGKxhPUwAejGjtsdm7w",
  "key6": "tEYUbHZHoVgtKJgULrySeVd7TzvZ6HBQE9tvVrqFTXBJdtznGpMbfxstNbD5VCxPcPpxY3Jrv9fXeXGPpokZLag",
  "key7": "27ersnJb2c7USD9bE1DDs6YDz5rBx2gRGRe9s13RbxR9jgtetB8iXKaSLi5oPig7A7oYiJG9GQXsqQUWQBawJMMT",
  "key8": "2wr8QDLbHavUkaqPgYGFBEDKw1CshzTmdn2XxdxVVe84BhiWuDcfR2iJXHLsgaarMGxamkxeTRFcQBAADUNz7vUH",
  "key9": "2Lj8bCB3HRQHz69AdiESM7JLXtqNagnCn1hNaUmphbXa3m5MmHu6xx58kCASiqWs3SZX3LdKLQ5mEAhc3R9dUhuA",
  "key10": "4u2oKBxyArSHqU45eqTLc4Lud1m2E4RoPwckkGV1LsyHttjRcVMxMtdkhzSJEkiJ89HFrhKacuVcDuqdHyyWdKVP",
  "key11": "2Wsi2hoRJRMdp5k1QstAfzgmjr9cAA2u6wc4sDBjsQB4q15zYU2jv4CQUk1qaaYMDwzKxBcUJmnKfwMNh1aEVXes",
  "key12": "5b7S9fW8PTJu9Fiyoyz7CJmSo5jS7jzyVL2UpU7iQa1pjssHaau4gB2dhmaGYa7iokhDRGak87y3113iDhmiuyf7",
  "key13": "59CNbgoLxz7T9sdkxe5KxRNdeDJBPhHfEFUYXknPj6KhtxLmC6dVwf75oX4jDDGqNhpedeQZqgYeRMKzVykFAE4g",
  "key14": "4ZiXc53QzMH9tRvBXgJysHvx7oZfWVAAJT5f7v7LV8uFga4rCD736En4HsNUMBLSv6w6hZEujmdWAunsGpnGHXTa",
  "key15": "32oht1KniQzM17aj8AEowCNavZJKLQuWx5N14mwXXXFyese9PwFMhCaZaE1FjEESna8yCopkC6Sd23gP7DbHVfs",
  "key16": "5WG5PePCx7XAyL63fgTkUm1XechtRqoRua4HD3ZwYE5ETHbJ3BvDmQFUMCo5PPMbvzWxdma6Se3CrECArAdFc9Ub",
  "key17": "5z7JexA26FaH6jbeJcCp1MhyWvLnqgz2r5Xou98HRzkNKTgZud5s9E73snEweqbE8aNhhXGReBDXkTNf4MpnsTWu",
  "key18": "3ttpHHGVPNQZFEjSNSpCaRWYDp8BTFGawCUUiuQER4hecfdXgd4Wey7gDj7g6GYvej3rEqjN68jXB5i2xFwgjg4y",
  "key19": "5piQhp8WSLB8Xt3ZFA7aicbSrGFBt1HLsarXeWacjmMeyVng32xtVoaBweLxviibNn2WPWRiRwxt79dhyEDA1y3r",
  "key20": "2jhno368Yvddqy2dH536chmTckLoRjwv14ed3bANVRV3MvK15MMoQC1TV8mSrZTBS5Adhn3sp7aVkKSzKA2MJxem",
  "key21": "3eP4DY1Aun1xNwsaVDcRAGQYNQYKJqxUbSNTAqkuQZbvsRbHcGqPZz9BNkFrejXnycyZ5Fa2kn71cqwrJH9np1dk",
  "key22": "2Z2eX4QeKLFmHBcpwYdyNL2duTVuvdbHK1gX5ZfyDTzS9DCXzkB2M99rnJ3zLUHtsZ5EGduh3Gix7KUKwkMsFc73",
  "key23": "4KUQEyzvr3x2cAYoLfnsDJSmpU15WwhAVYQa3SBk5ExgS3Sw8BsGbwCdpGfGeh894QcKtANHSNutUWExD4fNmWfc",
  "key24": "3vwYYyw2YYcQgAj4GmkPZ2YbdhjwkhquHVwJ2dKV6SJoWsmiGwZM1rpmuWn9fat97YBKLBGdbVqvyN595P7tKXnG",
  "key25": "5HBRsz342bhDvUmLDVzvgW71iY5WEQ5rHhYP1VkcDD7cw2ohdkHs12kciFt58kuqTssdX5Yf51GgpGZ5XXspMSvw",
  "key26": "U2piddheJaospzzPQhhTVWYqbjH4SzC2UZqx1yrk4MFbnRkp3hH6jRRFZvidLy6kxVN4SpkvboJtnDKhYBDYqoY",
  "key27": "YEUXoNMRjzbrLrQqqtCtYPsPkMdEf8BW5bFH4nUJ52fBiwrghRCp9zhsY9tyxkkjNkfaPW4THVdcgZZfWWt9Bg7",
  "key28": "235iBg2KEoXczGZVXKCSDKYBZuj8QB1m1VwNM5vNhMFVJpUozokg8spX9KoXAVTXpeiNyy1M2xVZJR4MszR1fgMb",
  "key29": "2ZyDT5tZtmG7WoCv2G5d86Nov5gqgVS1Vn9bgPNJXSPAuWfi4ZqHkneWdEa6bT27z2Jd1NobhoCceJiZNpqshvVJ",
  "key30": "2FNC4VTGYNYzTDCZeHJYBcextd6QKTjb9qBJsTQBD292ewcL525pSU9zyXW2GG5Ld8QuxpL5pMe9Mouq1HdNqpUf",
  "key31": "4TzyZqqzhSLMNJrgNsbu4ZWixxTiP9oKwh3dTfFgPSjTCcfG2fz7fw8erbktXsTpt1ENZs8TSkZaSUfy77YyYrXz",
  "key32": "CHktGusuM4aYy4aKHyEkBATBRyLDA1r9tZg7wuKMjfsHRxDzaDQGHAJotHcQBmd8hFsSZiERJPs7mWZuSzJWAht",
  "key33": "f1NEDSSzrvieKwTSfJW5y262Lo9ZTWGHTGApie21nRrmmC7YniM16KHDjL3zwPejkXN288sBu8AhjMhNt4ajGye",
  "key34": "5XGBaKHe9Rtao3wfMGWnh4bs2rd6FchbLPinoHkxvUmAUxngXj4nbdcAxwMABowaa4PL4cWMMFHJ1tLZ1RFf9iWT",
  "key35": "5yM92Uc1adoEWtsj4AzVJ5BGcjqoRKSPf6jCxyvTnvEvJZt5yYJDF7PNjGp2fokjwP2ZqCgBeQeGzKAzXieqKsAA",
  "key36": "3aVyDgwczHxTfaa3jjqSLXzVRmWv7rqeiPsaxfeSAjdemsXpPuCkPK5uK7KR1QwcGYgu4gHjvXuxo91rykT84s1i"
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
