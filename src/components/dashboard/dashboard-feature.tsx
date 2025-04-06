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
    "4bXXmTHY8EoHJ5fWqs6coH1G7MN2EAipU5nb44k3RnfMhz2GpABC6D33VXRXyAxbuvip58N7UvTRum714wW6qMnG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28BT8Pb7xPVqc4J2WukE4bjkU687LJmUtfTeREYPQykKZnc6PRV6HMqBxJMwXe683kjk77eKioRXMBzvHPi9CKs9",
  "key1": "251E73LbsoYjbqdCZYsLrEtVjhQZZC2ksio4ZLCHS7afXdM6kinbj3hFhA5wFsNuX8wxtr2fMNHxcmHkpgfvy7Cp",
  "key2": "62UBh3SKsrJUcx6kx4dJiHG5ntnBaCivb2EayVg1KRXaX5JF828Nx8LpuwQm7F4hFnn2CZ4X8dphLmU5kmCa4cAg",
  "key3": "4xCJc65arS4P4bk2WpHqwW7JedDME7go3Xcyt9XcAJnhDNRnZXvZ2az3QwQqeozx6bC7snuqztWDJmhvT7xGNhL4",
  "key4": "28iV3y3uEqqtLrULCWcKuPkYZ2hiegU6RuKZ2ZPsM98L6DvjUEcHwqiDe8XL7KrmjpEPpae8srHPMgQAvSYD8emR",
  "key5": "5HcEiVrSTXbC2ZDXs1TRpowgrsXim8Ydu6VmAoYq2Amjo7HSoKzzipK2qetwuWpZTt9SDSP6oy4YxLExLRvDdAPw",
  "key6": "4AXeUmfyu7BDwcYdRwgogsz9cboMxPt4zntq36ExcEA3YZLVVZbMX18PUaicrqhJJj7ph4guaLYYWbGxygc5HwTC",
  "key7": "2BUCM3DRFatSLUVYbfXVMDjdocZTtvGnqXXL3qNJRTCzPSdmg6xPo4xqpRotTYaBCYj1uFXLqBRGCzPG7pE1GQoD",
  "key8": "3vtWQh29s5neWfzK4fTWLJUu7MHm9DMuaTzHCLA5KAmz74G3YTUEcD2CTmc61GvGKRoTxqPcDfRvDCrpB7B6n9D5",
  "key9": "5YpPxyNm3LVKLi6FwWgUrbbPpicmGFBfipQerSQNAvmsoVXdSxEP9PWqdLTYndbDcPYGhGHhQnzbLodp7b5tKR8f",
  "key10": "H6FBxBD4feizf2uTQevVojgUYXDaD5jpxrK6WRWWadr8fMPtVBqq9UKf7uyUq4tmUofc22DpYRMRFGuTuzmp8kH",
  "key11": "2RBdhrUcn4XNdNbGTnwhjgNJ1xorSb97U65P6x4t8Yrs5v9WgrR6UDaMGSUjgaUvSeEsaN1fRV4HxCMqcogMSQFu",
  "key12": "brf1LjFm3qyNv5m24vN1gP7YqaHzwHnW4ySTRtkms1KYPY2GgCquKGGQW5c7NueadAmRx87QZxqXiH2maeUzhJx",
  "key13": "3fvN2JivsfPJ9Zt3jDGtzDwhDDHPiCuGeBfuaFsApkgGURV6P5PVF7G1r14yNJxuAFTZf3arydpCWATNLXZmEKdJ",
  "key14": "LfTysdasvUCReJhtvpv7WcuE4b1CTBsa3Whsr2sZe76DH7W924SM7XNrLTiHsKJcJhQQbFoPL7HLjfQZbyDyzyE",
  "key15": "4HJDLLL6jdxfvoWSq4giH6w22xGZNt8o7YHAXKzjp5hcj5s7bNQLXwYTcvPitZGBTNQyTrbkaMso7AEDUDe73LkZ",
  "key16": "2a2Ft5gXPQM5oEWp7qNkj3LrbKg6otAwuejwYgMA7onHchQJnThK7aQTgUEMemCtwP5SHj7PzjusRMme5X6yLv1Q",
  "key17": "3eLcCgCkZsPXc9iZEYA9XzjTaoXXcihemgJYYXz25FUBbzNUpR8jbwxCa1X3sntdgfBNLbsdmp4S8w1MuHbm2SJr",
  "key18": "5QC9gV4AAcC8dUDHE5o1gr4WBSiDuHQxh5CCvjjN9bsszShDqcrqqYouTigXpTfCzfjiHdp1VZVVec4LSrbxMceL",
  "key19": "3SHQNhNF8ikBMHyBvepw5ZDUzdkSxkZwKa8LS1boCAVFNJ2x5PNsLBeE4Eony8waCqtzFH4gyRUGdPD3Rt3bcaoB",
  "key20": "2jWe3WTJHmHeXNzc93RdsqPdXHN7S9y7R4Zazx89RJYY59aScF7BXt8SetHdMBCibnKDB3JKh1hmWuHFWpeZdELj",
  "key21": "5dTr7XpWMkuJaPV1SkBEJMnc1mkuchpYBm91pqpnJTmB9wqohsh1Hk4PrCwzsjiTzMvFcHqK6ahxLKogrW21FgoP",
  "key22": "2pibcUvWmM1yHvKpQiGSaJ9LZsiBgQde7t6Br1qKz59qAcezMBV2pjTCPst195sutub7nhxvDf92yQu8uVM7ADtQ",
  "key23": "YCmxZCmyUUwMupydYYYBwtkqmtPBJeAmh9YnjDVJ3MYao3i1naqcm265C1LSEh2BhWqEAARbAioV7n75p7sM1yt",
  "key24": "4c4x449NdR3z3pYM81cUUW2GCkE8EFSiD3WeGkRVVwxD5miPGSkdELvpnbUw9ExcEmjtt2Rgm4zDV6gUsZmQxEbx",
  "key25": "4eGbBghasGdiMKo6oVucQujSowt9Ls9rbdDgisRRFfXnbpy3JSM98Hhb6gcfFCjXKUnjSCC2BTTvMCy7pn12NFh3",
  "key26": "4YUU3VR58VvQrL5ifY6MMook5atjVSCn5TQbcMMR4hwMFEnNKEyPV9Qif7KEZVWiYs2bKEaCJ9EijNafuXkNW1B6",
  "key27": "3CVvEicma96vxmvXWNG95hJFCw964RvQzxArqLBwJagkzEqGvguN628HTz9rMjPf454GfxUS1jdR92SEn778Dzzy",
  "key28": "47RxK9jPRX5hJnLMfn2wxy8vcBAn7w9UThEg7tg6eCAjpPA83FuVGNRX6a44fErD7pJJQFe6evLbsXq7TKchywLn",
  "key29": "5NdYoVwAd4Rmz3kDSdCBghn473pydcKxPyUPaLpp75U4YH2xHADv9tCSuPEJFgJv298jUSkh3qMudvLwLMTNYHon",
  "key30": "2c8u7K3bEn9ejvEoKsd5zm1U5NTCpxBPoxj5zXc38iCyPh2DJB4iyyGBRvfmio6JR98ifhm1viBSkTDspKUTb5r3",
  "key31": "3gvucB572X4PgwEBtNCruuGXs2M6KKsFoMqHPoNXujpBwQmA2RFFLqQ5GX7k8jAR2D9W2j3iFQ86PgG67hsnJQX4",
  "key32": "siHsaN4s6AMgG1FYkWSErEZMYZR5Yp8UzDfFikhSEDpbWn6oXCvKHWiBqBBE1mqULv4KX5MLjWhYzT7DsCgHk7M",
  "key33": "3RKTNAsBvh5y3bsPrxf6LUiGiX5NPxzQKc1jmxXn5WwWBu31oidX7DXukQBsZEpuivQh8VfMXu1ULpNkN3nLDUL9",
  "key34": "2VRoqCpnqXKTjLobCNpC7Y7Ce9dHZTuUhD3WBvXPyPrxHW7dD43cVXdLEPwGmscVrk4QYTdHi4jtXpEejLapmo7A",
  "key35": "2TvxJT8uxKrf92iz24hDWy4VHNk3o7nPKR5b9dNR5oMgJ2DJTWMKtj8eWwmDz1HjDHy6pMp8hPFKAdY6YXrheqwX",
  "key36": "5vwetCGZSE5Qsvdu5dsqUZZ51PfZhRqaqdQiCzg9AA32er2AcYBbTyEen9TBv3YMJtLgQeftYhkvSaWLU6Mz5GXg",
  "key37": "3RaakPibx1PhZUpqVhpS66jE5PR2xqanK2iZFWqaRaUSqRKGFvVkQyiA6f1o4Yn5NCtu1nHAu3Q7F6xoX2V6XWD6",
  "key38": "2UXyY9ck3pwvCfrznpLVmjD4GM34NrdNU91Lu8pYNop34KsFKibXBfR8y6v6UB1u69L47zp1KtjRnPtzPnSYbo8C",
  "key39": "56ZeyQynjkqX9cerH8wFTtqXL7o2tQ5Hwm7ydFbGTuqfsSfo1aipdFJjkGB6sM7UyoH7FuWhMGRy6gWS5N6vEthu",
  "key40": "5LFdPU65zuQQgTwi39DCrWU4tNUjsAnwmoG39ohzVa4vF9LMjoFzkCTnzhq6KCsFHRiJmCUU95oTQmsJtwneuc4t",
  "key41": "4yT9GMD9L52AhabWqqhkPcbkaE9mbfXnbYkQwJECtn5gmYpBPZiJQPWrhLjfbBcwdtcbpp1o6dLo6yoLkQtiPn5v",
  "key42": "7dhMSR9CNUcqXEDbsvQj2N9CBFfZjUSemoitvb9MJnX9icZ2sTBAzNRNqxYb6qzEt2LaHzHDHkR1H9KuVRPkBmE",
  "key43": "4Rmz4zDLHRynE1wp6LX746soypBzy9zVsKGYKe6rdmX1DaPHQuQHUaf9HChxjvYdikTe7HDtrXW3EoKpBVkrzNpQ",
  "key44": "2oQFZVH4WyqEPmcUt2vrjnRiCQn7G8pmcfN98jbRoFyqUUuLTMEVJse5i7t876NxtCossopvpYPUtdUk4FJsRC6K"
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
