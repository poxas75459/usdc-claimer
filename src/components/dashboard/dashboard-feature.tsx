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
    "28TfeS2shKShvxrWsZZXb32Z4v1npKVvagStXvZDyRBURCSDfdxn7sma8o6Qr4KSMZzMuvnsVhV9njCDW8etJHHy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KjRvyTQJKGpQNjKPUhiYZ9y3VuWs1ENpLZdegtsMzpkYo3K2eydQSPHU7ys8xjFDebrcisMNWgxMXe1JF7UFxrY",
  "key1": "27U8XytBDAksG52PKodtjHFgVKQAPkqkG5H8jFfxfXYzvbDGgHDLmd9uAuFojMWb7EkSDne4Liz8c8jdS1XYxbkK",
  "key2": "r8RAZoLqUZM2NwB6CEBhbXEPmqYVDU6PXK7yzUKAbCynUjFJjPEoUsimf2URuZxWVGMGyV3gTZPWDKB4Qcrrowy",
  "key3": "2QEDHwjZfhvUnUeDxGb3ArN3ov4WmCR8Kwm2G5u7Zxj3BLq1378JYAhymaXCFQXGzdkRiMjnXjssrVUz9pNKjAwQ",
  "key4": "2kq8415XjNTupd7g3jQaR2JnMRBuN8TaVPqB2BkTSeMZTzumKng89B7KkCgFYaqMqef3gnJjTj85RWdrujd2Qhcx",
  "key5": "43QrnRznaQQfz2ckZB9LQ1GR9tKSLwJmp78SwovNk6GJmVBcWVeSL8WLEKep8REZ8Lpu2MVvX7c9FCFnriQHgNhb",
  "key6": "PWRJV3D24M3GVjrvp1Y3eq9QrfVGavq2xqtgnwEsoDtZrGbfo3gxy2VJUbWm1rovvHygDnPR2WWrbE2P7RoM2tJ",
  "key7": "2dreL69zrnoeLFYjxrYf3U6kP9NaAQaouzAXj7dYWEiJN2mgX6PKy2J3NEPgWMeruzEjnswmnnvK4yNuU96dpUGL",
  "key8": "56uKu1eE2e7pUuq5XTXr9fcJasXcsAWE3xxyrEieA8FhG3vUh4ubwCPLwsQb4xM9xvzRUE81QVcwJiLo3nXJQRC4",
  "key9": "4rrjvchu2hyG45naRbcp7NwSHM2Zwx5DaLMH9Jjozn1amgjnFnnQpBmpSoJKACUYS2d6HWBNqfNPgPWxcMoVzhFs",
  "key10": "5A1DK6FAGoV6YBw3KNY18bbnGymCWJ8f7JghxaEBpSp8dpsomxMQsG8K5ntUF6BSpvFAnKspYutQqFHRGcQnYes",
  "key11": "431BSxmLDVdNFsuxq5ZhysE9yRATCP9bBHrTozb2h8YxTiCY8gqsxqGTLLnA4H8dHaJLeNrq5FncZFhJa5DjZubr",
  "key12": "96SCtLX9U8JKahqqQbXFgUagW9oUcwNDUhrRTm7uHJG4647bEkBeasQSGDcR7P54YjYJhbwEUmD5AKAwFvA83gR",
  "key13": "LxcK2Gmt2L9E5eHnYvJyMEL8GMEEH2V8Km6BcSyhqZcsDC9ny3CJGn1Gc6aZbbKMoWkXiKjrXiCd2z3NsR32y83",
  "key14": "2qteiqsgZ6NTcNS5vTvLbKQ7NaU28DHcuagFbG8TTLCwAcpgJQbkf7jr451DNvWWsTacaVv5LFani1jdu4Q8H5Us",
  "key15": "5JRfxF3tJxSaW3Kb4Z6SqbRvCTzfpqAtebPJaWeUBsFtBixfnnmCxDEg1NYYBHfGztGx28Um7PHf8gFGNHK91vLa",
  "key16": "pzcfPugtqKwAEirXDTeoSiqAfzFZDnDZEHMDeoTfovN5HKqGiC5rnUqrgVdkyAQuP9o8KBnZASgRUeYQHNk27hg",
  "key17": "4ch2bdvv5EdXiDdHY1bnQjz4ZLSoGr68aAGDoUCP7T6jmdvUhTiESEnA1oCQecQ73uw7ufYsWQZGFUUAk1hV3peM",
  "key18": "2Un54RwA2Ltybi95ibBcreGZX1BTuiDqxr2d14XPM7BpSWBwC3ZSFgevXnmbRChkpUcsPqxMWpcz9MTyVpoZN4AH",
  "key19": "2CfwcLZL9fovU4GqMz21X6ELUwjSn3okPoFsumnuK25WPW3fLXKMYzygsSF98UcivF1MqUaRy21kcLhif1CiBsUa",
  "key20": "669ySGW58xB4HEPd8uavoea2WdqnsiNxeRQDteuDPmtwcgmgVdSNBUCAeLVzKTVAbq29rMJrzWw4Uz3V821Wykm2",
  "key21": "2ynvV3Z91dyLXq4pmFsK4f2idh1XHJ8oYcHdoNjF675CNbx9AK9SarvMQZat6Sz2QMFYL4LCwUs5VBnNK9c35SLY",
  "key22": "2e8Ui8urUZRDgpbZk3LqEpMbrowEwQx6LU5KGHpCR2QHvsnDQWvrbGKUcadA172R8iCchGGMrodtvWoRhdrJgv4r",
  "key23": "5YgXxccBZ3KN2Xhk1fJTRPrAz7CtLR58bZTnusT19ESNYDkB7ZZYsk4xhdGwmsKbvd98tAevZFEa5EuzWNsgwJYa",
  "key24": "4sj3cLtUdkvmxiBQ29nkXtFT4YL5G4j2KzwAGC6dCosRwmajdya7mBohrfK46bXkTTPHhLfdd5ELD4NFvkY7a6RF",
  "key25": "37ZFw5psb3Rb55zqkMoHLaka7wKLLkijRrJWiQ2zdqPtrsrhoi2nHGTR9beH9nq5SiixsckAi7hDAAoL7i5L1Ydt",
  "key26": "41EB37oXvCLaPFGFW7BfaicHD3QDUEhG2togdfbr4bE6EYiiGDs2ppaTESd7vM6PQQS79y3aHJuNvvRKbTZyXp2t",
  "key27": "3aJC1AGdJq7WHCiBFJjYVhCo8pAKQkX2QoAjzQHXePjoCaqtZYKKnRiEGPBvAkM6DrbjpKDRb7oFtEGN5MsfzCZN",
  "key28": "86J11nEZc76RUmwaRFyc5NDVphq3areBFqWSc1XXobq1Vbho2p53iDEBXhSTjkkJHaDYyZ1u2WfxkXMD7DzAnJq",
  "key29": "bidR4Ki6J9bd6CCzoqCzdsNetu8Vew5sL1qgzJXXbzSYTRS8MVrGFHFDtKTVD5Rz1FAut64kPCimeq5dAAHuNWB",
  "key30": "7bGYzULVNF5uxbgVZyUXBh9xPf7UXoKQL7ngovqSShDyU3AAJCVs3vULyM3YHxHTeUvbma1z6fg6fxoeukDiFjC",
  "key31": "2SYSmXnoJJ1eNzcCrcppWjCSZEgtKZmdvMyRwXzyd7wHk9m6iib5dbTjsRmqyfpwyY1AZ2oNWXdXwMmHGFyNjcSS",
  "key32": "5NkAZCDH51tg2saPBrKa7KtArvNpiTogumB4FLsrbmS8e1FtzfcmRfoARpgMtYgtACYTPKvQeqDMXeTJRUmkdT86",
  "key33": "5qoENTD37sD71cex5jJN3ZATXsEb1EwjFcyeMRDXoH3mW5hsKCdtZewRz1DzhiQLn5FYpiMjTqQs5LdSaZosMyYW",
  "key34": "2XatZBQG2wVcfjJwiaVPrgpJayeRQoSkb6P7rWX1z5FTTXiQZZydjjX2xkHWWtVcSQxuMkw2ddts2L9R3UPs4YQJ",
  "key35": "4XwJhHWtU948UJz5jsNZE3TB5w1NMerKHLmxxB5Boir1gbtGzCdNE8ZiFwu4GsbpEGyR5UvJiXexSHSS152cXuhi",
  "key36": "BACbcPGYVsNhRV87xk3G255PLVAAzhDdVUSB9TQB2hSV5wYBN51koffNfHmkMP3q3LpzhqP6BTHjdfhgbhQtudP",
  "key37": "2yvtPFmtgtbynPT98XrhyRxfZMJ5MP1BtugGzVfkafmTffTe6p6T18pp1MYRTnKWVGzD4tDCy5wyQBxvuE8dLJGJ",
  "key38": "V9BFc1d7fTmUsZpQTD4L4EV5JTCP4RcGMkgQMzqf7pETPnH7Vvnd2zyMFJUZVPpf4Xn1aRikbC8dsMX79HcSipm",
  "key39": "4Zq6GwiBS88LzxEvVv18sJbdvzRicyf4XYPKKqj6ErXyJ72C8HSFZH5xUMKiCrBg7nbddRGrHaMqmGbibPjffh3B"
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
