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
    "4yCTNc3ebHWvXu9PmCcNGTd9DkoxtE28d1rWoFRvmFDaG1my8rLdfe5SmP3d6NkacPBAkuHDVHMoMoxfU1NCnZSK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qqs2u2vvqFiJjzkxbTmdGbKsTeU8DKKPH9KA1bi1NHvK83osNiDyBm1Jd3PnHNrgPTSu6XgWXwXYdzV4uo2qZ5g",
  "key1": "5Nk8YW27Cq6f4VPVLzdYDoj23WkL6U6Q1tDNxueoPqvgFhUbRYsX4wtwRGRLRoD8NtbptX9uNx5KJ4kuuYkSE5ds",
  "key2": "51CpX8YM4e7CG8JsJymq4kPmmzPPbniLtpiMYLjfx9KtswkzfzyYHZEeqL7n5eJA2AT6mq63PBA9KxSiNeCWve46",
  "key3": "2zDRPuG2WsfkPcLFACzLYmepxAJh1cU8svkVHmiiuguEXwxY1R7owrUaPqxN17wkcWz4WcpRA3o8bRZ5s9CxCumn",
  "key4": "3KVrw8XEMD3PqxEHKGNbanhtddJCDKeQYGYN4FUxivXcgFSDLPqezDLkUzyD3QY71F5XGgzX3fCgqvJRyJpfxFvr",
  "key5": "5Tjbwa3o4RdapkrioW2xTmSKfYp9ukuFbuCqeo24WBvYrWXDY9fFPNjBzP9XZjcnLM1PV1najRoGZrDHH9RmjusL",
  "key6": "5vru7yXyDuFkxeu3Qh9VWgnsDYrAbuko7ixPGLiNn9Cfz9Rvwj4W9AaYWWD5K8teAnZzwAWT9yJGsVzRDmgWWm7T",
  "key7": "2n5HAR5WTNtvU7FnG6DMx4CZvrJm6eUzvgpNRzNULUjoKjeuytvqkGzbfeTd9n4nUxDFNBYzHRLyJ65xgC9hbeck",
  "key8": "4rtkKia2EzLjtDiHjeMsui6gxjiDwTMQK9a3ceUbTdUuLfHFjfzdn1hygzMh3n4NvJb8BW7mnsVoj1BD5JZ7EkgT",
  "key9": "4PFgJcTzD8f8Gh54PrzJPif1KHWpD8yHHtBexQWeenPajF6GK8DSvZX8htmM9DcS2yAfKNbZEp4S6vsZ8wev9G4i",
  "key10": "4CkRzJZ7FbfUJuaULt58tAaiQxgGMKKdc3yuVA8GuzqVHtFWTvoEidp8BkyJY96hz3Ya75P4t2sDgHUvBtELndQh",
  "key11": "4trvkfEJG7dVHPQZtpJv6TEzvVDNDNyK7x3SwY688oQ4QyaGNkVM2btzaSzHoHoyadfBS2u6d4RSVvMSP35aNm2j",
  "key12": "WEpakSt2MaYAghnYmDPKUhVktAwSnaZzEJGErnBVeQ9bRQ36aWs4pedzaxXP5Lkc3mnFQoGk74rJvfx6T2zokVy",
  "key13": "5KUweHVHHKf2rYQsRLg3rHmKh3jLpEbBhvABrekbk2e6LYCnXfUwHiCgxAFJG9wBzQvnLDQQeN2wBKTAW8cYZ28t",
  "key14": "Q7f34Q8x2EUd5i7urMUDQaaT8ts2yQ2R9KXMnVcdLWT9B9UsR4e6LoYGve3MeKdCD4FtxpqvDL8gEvZvgGfi7Xh",
  "key15": "37eWXhiujHyxGHMMDszkgX9LGh4EzTEkmm7tYe2Df3kbbDsgPAPtkxbyECiscw9XXPGrnVjgVo5s7Zp32nMdCFrR",
  "key16": "VKVbYdAygWVZWpJ64kfBgfNEF6W7qetiYFW9ng1mwbFUKAXHjn2cZE6Kt4anmF13MbP4vW3DvVwxaXp7d7GEwef",
  "key17": "4dY8hVyS4VBaB3FeTsafgaRtbrYXxdMuRyxCv1sSjsF3vJhzeY1bExNTBTXDuYxx9onsPE27Qr9tbYmgRxiamVKh",
  "key18": "33JtEipbUq6KuuxsYYYsnym9hZLcRvzcpKaMX9c8Lqd4snRnJKFfycggiyh3nnqPVB3Kh2QFZxZ9HL29vZ3PWnND",
  "key19": "2Mjq4S1QUFwJ1Wfs961nupnfchNXNCoMus7M4o7mZUt4c1mmwVz6XpJaer7Q3ju5r4xubWWKe3UCEvhNockzgHdP",
  "key20": "4o7TtPfhym125pFLf2GavaC3gTyBof2YmK5oLweubK4H9kmgzH5aedCr7wzXfg3UC3vT2YrSaARLBTVQquyfpUR5",
  "key21": "554gh6Y7oUCr68UPAd8hxK15fiT9C8Vv7ZiHk6HceGQvR1fYTU1gnXey8n4cjZTjyHjWcKsMn4NYwT1kGeoNAzQc",
  "key22": "5DTi4dobF8aBon4MLSUecp6xPPS7o9zTWjwJ9xdejqiKZ1f5LftqLehvsZx437ufAW822w8Jx5VsuNEnCLekaKfe",
  "key23": "2G2ihKVj9cnhVYkPBW74xoBn2M9pPmDpTgGsaNgJe96R837vzx1mvHG7cKdG1gQRYvj4MrKMoQMYbt1YUWv5WmVz",
  "key24": "55ZgiMtuMxjTKTpgAtiYmswJvv3CEbWGgm7eVDQD73HAy547N5cFp83Z6nN8uL47P3e7wD62tjwQaVNdoF6p7itS",
  "key25": "4w7BjqiM3ouHgHQd3pap7Lp4hMCmfhZReoMwKBeaqKkkTQzfgVxny4fZoYDaHofsmFW88vufuNinSSuwEeCFB5Br",
  "key26": "eYZHzC1rhzR3indJdqpmTCNUAUmYQPj1YiJvy5ZEm55gthJdejCgewciYnVJYrY2zangKszdy2q2cCPgYwx7YvL",
  "key27": "4LxM6wizLTbchznLrRfrY5DkT9NEeSYfJ1tU6D4qFarZD56HHKzSYfaxmkheC6Hk6nxJU6cD57wj4KkHADuoQpKk",
  "key28": "4TZwuUu69saTa6mpwa3hm2iv7qv6N3SGbMdydwkqYAYhMP5n1Z1M71zeEbvABkkVshhByaB2TJ7WyqZ3dy9f3vcm",
  "key29": "t6FgPGSyKYRHr6QWwzRUNmJ1Rj8L9LUZ3S8xLoxEAcXuVkfH3VxX9btBFvHATZuMJki4RUskXNJzr8GeL2qRwK1",
  "key30": "44HYqJ9Zz9kJX6yjsoQCHwQcrCzQ18tunms5zUjTVuvCFEf1qbzckaCShZqFCyW2LWmEyJuGq2LWeANQuSFFiF23",
  "key31": "2eAvZZ49kipmGSQWYjbUVaKyFTWHW1DhPYbxuYtZZU7UGTPrN88J7g8jgEMNJ9rubS9Cgg6AChQE7vxujxo9xG3N",
  "key32": "645R684WTthkvTnSewVW3MGx4TjaLkRDaCR338L2cLCDkwExwFKzkbAWBLvbeLSz9Jz9bivv8EGgCLK3nMFHCbni",
  "key33": "3NP4GrGheWV1cZrUWy8nCC1LBprPNVuPAmomsJN3VQY4EmaCraJugrnNCXKNgXdD3s7opaLsdCN67a4SzFZXTqTn",
  "key34": "4hkWRFWPoNwkXxMRgVgwXhVyPnGaGWx2LJmh54zhRzTJPKez9n3dvEyZpwQS2ujFgSoBkvDczsFSPhTumbTxzozw",
  "key35": "5fRkSKLBXWMbTucDiUHBHHiwmm94if1TKsksucDueJDJrbW1BzvCUwfqAtrMZ6ERvzfR3FDkBQ8zH9xqfQNPqGPr",
  "key36": "4vGHk3K4Goc6FYSsvzX8hQs2tXnstuvczqycXWQoyaDdUQqrrYnKfFWUUYRHfnJhqy5icpzP8u33NuNBTtEigvKx",
  "key37": "3TY8PhVg7qU48MBn7V31yppqwb4dufUKwAM4Erg1dFaqbwxTfbLU84C2R3uoHEPVshd7eJ3vD7Xc4j8ETF3tVNtw",
  "key38": "3rJo9Zvh4PN8REEEZHwnJA9oUzvKYxucSS5vTtpk9yvRKAs8KXxpyicAeFcUsnzFtm3gj3kkJfSFBmFtRxYQpeif",
  "key39": "2JykHnHb1UPRJHdWMsKHAmpnr8a5AzprrQzRxAtTZnomvXeaPUaycyv3tBDVwLdvQ1FhFzzxYCkEqJdxnHJhyrvW",
  "key40": "5wCx9CyvahaKLDDa8ZJNbDwZAjMZZdBTyNQ4S3eFP35vmuKFKLM32Zas4HgpSgzo9V7ECJg2PAscK9LWbjb9BVMq",
  "key41": "2uzvhd35fDgdZzk8zYuf2EdNQP7Duo6AHKxNS2a9Hwm53RW14oe73oCXK6QJsr7hb1895uZbzQV5eLuBiuUNasZT",
  "key42": "6eNyna1pptzJuberegmx4SjPvgT5nKChePwbYuspAi3SdLiBeLMWEeCCyW8meWt7M5hfRSq1eRvQs4uySVT3rqW",
  "key43": "5SvhmvYezRVQeUbyMwpesmeDio33p2zcXYA7tMaKkAbVqxDAPP7Aw3tnhZBjqF3mC1iwKomZHuwofniGET5msLBJ",
  "key44": "4Gaat16j34a8LSTGGgyVPLRzybz2hryNueHNkjSHUqgD1mMsEDAyDn5fBXt6kbW6R4VX9QUqWiH1w4frGps4dxgs",
  "key45": "2hjPdfCugvuiHc8g6G1pShQGU1avZAPk7FChiGyRQaMHXTTr55BY5QCmbgqqUN57t26FMpLuP8Xx61dUBAYMVmrJ",
  "key46": "5MAWyiA5yf34gbdXkzv1EwhZ1CjH4ztnL4fXsCCKJxCqYNeYbifT7MMcBW7wt2b2eXc491WnRWFQhjHCAa9WVFgs"
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
