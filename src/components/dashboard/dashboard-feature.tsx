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
    "5oyA8KvZWx5GPWncvJrih4v3jzY9ioFBKKrEatspbBa6eqTfgWwPDUN1EFEoozysR65Dotb2mx1AkrFqdw7REUUk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dtq3SFr1vy1HUbyvvsQwGVTTWxpnfPksWYVjySPdQzVmE2rMZduHQFDgJHuEsiGPvsPwaFvi6hKaJ1f84wEaULp",
  "key1": "4UuZmbx9PeCmdcEnb3V4tnEwEwSeRx1w8a8aTFtv17L37VqzRfLAYnFN89MsiWYEkZxAAjiDKKjSG1zUJM8CUMaR",
  "key2": "4P6tn6GtHBdt97DnaWwCtkNjMSFVVY7cSqd6Lrr1qTSmnwAMZi4Wo9Ad68f8UUJ5oz19f9swLPD3kEuwZQgzdg3b",
  "key3": "3XCR6iaq5YMNzBPhZ8ouufpohuEF2QdFejjEiSHfhLj1oDaNDbXeQ5Z3Hcyx95swXzAmeWAycncB7j1V5Xcf5j4s",
  "key4": "2VGc6kRdPsQi29TTHMQYpwbriu1xdsNmnYWYRpDBu7toyWFC8SGptyWR2SzN3DdqhqYXUEsoesK8ZFpJTLDzGwpT",
  "key5": "2wwjVnkxQqtSuKJ562sFHQ7M3KhvkAqvWYRDnZAy1U3NZwq3So2QsvoNjhyYT9anXkyewwt5mAF2uGdE1f1Ck5Hu",
  "key6": "2v278FnAWNJu2adz8awQKt8i7FRFVhmyNKaLWrG1X7bZ4Ph3cBsLp9qf4mSFurGLKWRQVgFfpz82j3yaw4fXTbbq",
  "key7": "FDAwobnR8h7M3ashfLN6ovqg5YqZiK8f8kT8WViH1EsrPURgw5PtTBBcYEoeiAa9br2nhb5GjM2qfw2wVo3qaUV",
  "key8": "UvmLj4V7qyhBYtNf1GjN6a9SAsgykwAN4z37higJJeGU83t7WP28oK6ytEW7CgbpJFrum2Czk4ki8FdxYxrAhMw",
  "key9": "3CU8uS7S89c6jjBT3dmUPk1KqJAjAHkDypE9VK5SUEm6kurV6ypcwvvgug78xGmXmV3nNMFLLza3V8jr6EPFjW1y",
  "key10": "5FLfFrGLYNs1fL6D24WxTBLCCQyMWARAgpag2TNny5rhAxgx6Hx3z12of1WJPFbQR1vCtj1TbNrvemLbzE4aYMzx",
  "key11": "2zijBaGoe4GnAKzcRvrFn5hNxiRKMP9awoCaQmw5WXKnjRKQZFMqptXfWDTiE6BdsypjFhahFbEB3J59qJKnDiwX",
  "key12": "5WAckY3mXnY4XtrLPtwyPKLWDLcMJb9uunMNiMiUAXhZczuB7dbjLW9hbbnKqGE3koyD6CchTrHvPbx8uuWiZJtb",
  "key13": "nBdh1BXQHCMM4ppP6M1EWrCCBrsDv8NnZx7dJMwy7AhFsBaE89JgNupa84UL5gVGPbjEw5d3Fte6YTfGbiVYJvD",
  "key14": "4MDCuqZ7qrn6RtwCArjLftVZ5GL48b7FaU5693cjCVYbLkpNBzULCsyx8HnUqjQgHwWZZvreWNCSs4Q6nraXvmVw",
  "key15": "2ErBnPRsdRx68D9YmnCtRWqkBNmHKxhwTqomzX8ZAwessyeCvwsu479X5dfLGPzhB8xzGYntUUg1izPgkWLGFafS",
  "key16": "3ngEPQ5654gW1r8zwLBSmNxLpJB6Yi8YPyjDr7Fq19stm6yAQjwz78AjW6TyBdqZzQ7jNWCFr3Fvvzic893mhTz6",
  "key17": "2bYTKqfqqmghqQgjFvrUFi1MGDvW9Y5JjAyBjb5kbtppDQWhMAjFMUvR1kJoG7JPQVZKHGpVEdcFX4RDSzAgbyxM",
  "key18": "661QrhkHVBCP4PwyRi86yJqF8XqPNT5RxWVkzeBsSzS2wF4RDnba8xH4Fx6Lx8pbvrbZ2Hrzx46g22pF7qB9uvGy",
  "key19": "2Hnt3Mg8tfj8ADyojGXJ87hzF9WVvH8zHVBYiDxrMuw7MBvqHxuLSxqfPa83n9cG72hzs764KFXSkSofZF8EdKZd",
  "key20": "4oPHWW2xH8W7Tudb1rqFzghrxZyBfLjmoXZFWYDPPEEjJzHD3hcCMWUNz3HE1ks5sgJ4HwK96P6FYHZkqT6eY1k9",
  "key21": "637fDnj5s14V38PF1kx3RAyV39SD6h2Rud8qtuCBpZmSXe51GbScWzA8yEJS1wQoffzYntZgxs1Vh1FkkipLmEC2",
  "key22": "45TSTSmJufJWxwt6nMY78JXtNUmLrjyb8RBfUHiv1HhKZg7mjqAqnavZ1QtHSSpeG6MyDMGYBjnrp9doDtMfBJ5s",
  "key23": "2cJo5UzE7iGkXYQLRaZz3S8eERvwh6jz3B27ep1xG3cjykd9XjYgdaiXnmXDndcdFRVcgES4dVS9WqGmhH28LCNd",
  "key24": "54CqFTkuTNg5tZetGk1ZpW7McdaK4rSwFA7oeGrbAqb7p2VQpYaCKi2K651z157aRvfvC5k2y36C8mAP4QmeuvDS",
  "key25": "4ZMGoCPfYJouGqvDDmikt5UbgdyJNhb5aQkLGb1rAZeYgs8gjJ29MqV7PXXerkSAG8T8CqcH9nutzLqck4LqhBDV",
  "key26": "WZUJe8LjmnV7JcNGaBvAWsEEkML2DFsVr858bvkMntB3U9ZvSGPbNaXgLTHbYS2se1aP2RVbXGianSrjdzpEy31",
  "key27": "rNrCn2chRU5ZLCTMv3SWmEinNUQmKfujzzt7nYWWoMKpiUvmdsnnuaxPyNXNnTGgVGShFr7TyoFTzmWwQ4E6QwT",
  "key28": "3pUnGcTYrrZZqd92XEh3TACzvWdZjgN6iSi5vFRGZFmxaZTjo37egHmXTHkagwoqskjrYen7e7YQLDsSNhMeVqKJ",
  "key29": "2sPd5TkPWgcQ1yG32NqKf5TmUGdPMahYCAsPALBpTRFwkbiimDKGdBED7rAF2D1hUiRZ7hwbHdyyzck43kgLHAK9",
  "key30": "HPnpqa8vNPmij3rECzt59znFYope3BdHinUUEZBF7AhPmueCeVupaWFf6fBonskaH8oXvcuMrKqCgDisNiRvsWC",
  "key31": "23XBMtDCk7Nk7fryMFWZ6qbzqv4a7U16gTmvKokvCbHf34KgiG2NYpqmaBPCkzmaDd41FfTccGM7cNBUs46nLaeQ",
  "key32": "VAcoHdFHy19t3vgnFeR8TcPMTGeUZVYT87dTLyicLSZrvXbYpu2CzAhwi567JrxuGU87fWr98KndjziCxvNRJUM",
  "key33": "3CtPqj5PhFMkkmhiHvY4JtzLoEan6uRoHnmty9RNNwn4RkBmhjPo1yhuVNeoLDLZscdKJCbXH6mtcLdvJgXpWADK",
  "key34": "3uPbeQzL6mBWpjgU3RQQdR52S5z23qjCMK3qnRKJfDV5m3KpBDcLNtsS5Qos2BJCe8UYTm8nNBqkBmWuDYGpFaLV",
  "key35": "4eh3PqY2Aao2q9NqsC8cy7qi38gutc8Yg2ywGJzaPSYcrTv48W5ARibY59w17XDR7LPhYeBeCjg3LiutsEpmqs5v",
  "key36": "2h7bVkiQ6kYtsmT6f8HKo6dJmu7tCbaFbuC5nES97gDrUm11oKWB1AkDLtFC9WE7QoySeWadc6gArTw2VZ7XEYr5",
  "key37": "52wvFq2QLzHBb9YuWmZ3fdfShzYmrmS1rdVSUUFuibJXwjWEkpPsW7ZFcFfKkxvXVbwiBAyevWivCPLiwNoM5AyK",
  "key38": "23tYkUS6fdhWsYqKp5uvFYKrLCioppNVJ42DfQWmR8AFGcDtarLxzn8UE3rsXGQLxiqfLSxEc2vVKrrwWNCevAFc",
  "key39": "2mgFXgK3nnhBoLpW5HsKtKm3RT4gYF6S8MSJ9qL5nyP1nWB3mJ92wLSBDs3iwH8iYYkmHzHrQu7NsJKB5bBbPXKR",
  "key40": "493JJnBXCKHjfGPx84wVTHSMdPJdeGDU9PoeTTn2i5z8yNxh7kUQB3sTZZ6afBDPjbzsezWT4ZS4WH5hhfhzKz5D",
  "key41": "5z5w5zMHjMu8Bcpz8RvKTppTSkXPx4Hjdn9cW5nR1GgNgY1v3j6KFmRCb8frHDjaqucVzHcrPqkFomR6qWiCZmtH",
  "key42": "eUNZRAjrHi68ZsuHw6f2qKFhgqrgcKJyLL23DvYjGtFGfrPGzNgRcWKFjTg8qaK3am6mRpcmwExRxiSdqnmjnPf",
  "key43": "4AoFpT7pumHNvKNYeKj4E5dzhLpTsjAA3cYZFZTbtxaQPoRQmbni5oweQH5DiPQ6KapnuULmuUDQyFDuT2mVoxmC",
  "key44": "2wVvaNQ6U8MFTWpdvbRxZUk1eYPywi3b9QvUKjLxBeuHHSwMhRA4fpxMupBzsQ2KkiXmGb6VjRa8ySU4HrEBPkpv",
  "key45": "YUvjQnLcpEGFibwrvvvjq9E4ANZMLfeThGQvFZxbvvz1QkY6kjPhLnmwMsLJ8HrFMcMWpgF8Fbdo6FGrV1uEF2Z"
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
