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
    "2Vu4MZTDWcQ6onvzXroYiaWQsXcnHfpewSHcnxFuA2EY4cwsoAFGFVoUZmTWDreMMqKCUytQ9BeFKo5tuVdsE8X9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VLuGv5Mmsw7xFQJjgdBirNnSirXMyBf1Q4snRa9MHdzDaNPDZDzTjd2HswPjixc3EPVvewHZ88vqo9RczH6owdo",
  "key1": "2wwfp9r25yutcZHL2uqhJMUGTbMTnL58y76ucuqbXaw8ZWuDPUPPbYhmv5HwE6PUYBxKcBFTbU81aLWFqa8uHHUW",
  "key2": "31vj16YfAFpcAfmUtbSkFcAozRxE8pqbKE2dHpmvguj1ykUtPeMT5eBdXCtRqw86W5UVF64qaGW3mWKkJHEipuKg",
  "key3": "XTNZb4iRrwBQeoXA9qQuWYBAcj5XQYyZJHdADtNoxLtexHnzZeq85xtWR3V1NhPDfBAdVMSbgLh58snLxKgzG2h",
  "key4": "4c2F4KrwLFcRhVyrzKGFi2naC99UAxm2MmQJ4EWQnN53fXTA2Uh9woaHUT4wDzG7PnfcwB8VW7F4oFACU2m12n16",
  "key5": "5SAsWQpUvNDirWNX5wGBaxgsW9HsM2wdNwNW7nZr7hyuRbxEoU9EnNf6hnCEqQLhvriXNwsFatGJMg8wQsKBtWsg",
  "key6": "3WsjY1YW472VgUH25JJ3iMDjB5A1vhCm8gVmS4KCExyQ8UJrBxk3vGLkb3JZj3KB2orn63GexfPzDu4AxYsddeoC",
  "key7": "2Ri6drjbES9EmGGPzuThyTzT4UQF2j6p1tGj57Mu1cCTrtJHzce8ZcyTpjGE3Quj9jf2sTkvbkj2vK41iQECcXhf",
  "key8": "4ScCMsJNDKXLfgCqv2vBccTN23KkZYuA3Ej6axsmD6kp66QuwZmkRUftftkddVwpGfPskfGu9NK28hURmneBEFsY",
  "key9": "2WeXfmJRsp4sdndAgH8Kma3DgzxrnAec1wia74HPRzLF2wTnPPeNRSb6RAqdxQQuH3kQ27dr8hqpkB7hcTAwQXCA",
  "key10": "45s8u7LxDz9kC4mynsMwRjcU7xdNzFKFGyeT2CvmJojuV5RHsfAundW3vfpLpiBDm7LSnm4RdGfhCywQTKeMgrmF",
  "key11": "3wp9HzpDqMR4mt4yvZmJwYoh2GECsTWfktxa6XQG7Hudgo9nvBvGLrHhcFqvviZ4u1xFcKHk615JqApVcdhkrUJj",
  "key12": "3yAThZ7jxtzTPqMrMiKDLSo2RNgzRd8bYh8vbsFiEiUbTa1DBfjrJXKrUM23kgWqCztEqeSx4GeYRLRxZQHCvAL5",
  "key13": "5XtzXZdESdMA37H4X69ED4cJjV548WYDcP9Av2BLuAGhZ8gyjtBHmy4Da1YLoSugEEcQmSx6iiv1nLzQb7CTDNpn",
  "key14": "oFXTTf2Qv87tDNdgjWqtPgxp5eJVNWbo9vP7H5KKwT8ygHgZQwrA6ChRWfGksVjeYgFTGKbhGz9EhZJdZ7Bfbsn",
  "key15": "fyYofjfFuegTxrp33jwJiPAuJWAvVn9fGNJsYLEJAYNMdamcghBf2cMJHewzSCo6Czpqa9zCKP4eutKz4KaXVz4",
  "key16": "5o6dUF4xvRp9G9mJ8u4MWfVzpVpUNm91WNR7JvNegjGQYaF5etPFb3CCWPCHAWrq1eNcFdfA4faB6dL5QPjnfxWt",
  "key17": "33KU1aSUUrKtZuSoWTNHHZUyDFsTWZoKiy767qCyYf7T8PaHtGmfdaznLHH1sDUtvtwMfhumGRcQbFh94BsTfhCY",
  "key18": "unRddaLCKmc4eKTaScWh9frzeKo3fP1wWgvk2SfJspyVuoJJ5KXcghyH634yME4WCJ2A5WStigssmJ5M4tf2VZq",
  "key19": "47CNfyvBbV6U94YgPJjXTkV5CQX7J5VJTF5h9ZMaWgyXnUB8hKJ9wBZrBkLPGFXi5YZK7V8TGKLFWQL5Ec63Po1z",
  "key20": "24e7A8g6qysZccMiGjpxd5pqw9bHsrPMobENstq8QMSBATejUEkgeXrcQXioxwhu5yRuNhRxNkQ9GpvHM4Xb1i3Z",
  "key21": "5314LjFnMXWaWEANXp2UvYAy7cqks8VTEFCpvCByHSJmpocyz9724popZjSHfoEZ8KTMLVWQVXyZixKfa8uC7yUM",
  "key22": "4q1PRWyYEVwpnW6njoUSkoqeVQcgb8NdfXhxrzejTQKPy7WENWAAD1BRFWCr8ggJH6ZUdzdizxZzKcMbd7B5KKYk",
  "key23": "3hf4JDeogbViTZWdvZj3svbdXH1VXGqBJBXWzbsMpmp2g8KaQYcbE9VBJysYXH4PLoKqq1DbPX1Nb65eY7XxBfWn",
  "key24": "47aoNrtwh84t5PUvqmxXUih6FZDCRZvTXZCwidUXZ2FydurgLEMkTw1VWrFNvvtgkjSzRjAwmNVp3yAoKmMvBVan",
  "key25": "AU31r6tGHpiHo3XLRYPgioYXoKiMs8CwSkyZnKGe7EYR775CcEAHW127PvkVcxKa3o1QChhzq56K8ttPXDf347p",
  "key26": "86dwSc4pj5TGqZGHb95v1Cesr4U1qi7gSRrpWYbJmCW1YJA1g26LziT7mvNQV2ANvzxUVKmwWRYV8MCjc9aBqm7",
  "key27": "NShyvY51TTudGRWTdfPU95KNNiaFYjMb6TXjoFxZ1mMjChPRtNcVqWLdKW52JMeews6mZSu61yxWWuS1P5ysR3A",
  "key28": "4qBSrsWX6EUVvju7ZAtD5DPCAPCzQzGYxDgLXCkGQN53S7HRYPnvyEiYhnWDuRGpKUsj3WLbxcbK8xbyyrTkFTnD",
  "key29": "47aBW3X3PRvTDrrwuakpSzQbr5AqKxegR2rJgXar5KYHpZ7cEE17ijGz5yXADjmPWXqLGMLPFiaD4ZJQvgZwHkdE",
  "key30": "4qUNV5QjjxusvYudHPMsLKULnNakbmRLByZfDnLMNQVdMevr16htFfpk1hBuF4pqei2wqZ7xMebtLjWsHyEHtBRy",
  "key31": "3iJ6sgrdWsm7cLQNrbgjDi6X4KjD2ix2fHbeSTgCdmR9PaYr5fw378gHJCm6BXFsjBKQmiYChq34eZvAHoNMrNew",
  "key32": "2jm4yrTTzBD2L1NA4MnMXBfbLtraZih61XCBpKFSb3USBZdQULjrg6Ex8vHDjNRkF9tPvzPKsiBVGH7HWQx19iky",
  "key33": "2o9EgVMLLZR8MaoQLQUs9TCavdeWbkie83DkhqSysW5M6wSWM8GVFF58B5BKVZhvjb554VddFKAXfR1TULjDWntc",
  "key34": "5fyMCHPsbkKmNZ9YSFBVPH3RVCWvsJ89tJi5DnvYPmqPRiLNu8eunrK3N2efTEKckG513vZgnzgGf3uTaAn2V4rp",
  "key35": "2EwoVwSCZLF3b8pjeE3TayE2rFrUhXqPRCcSPN4SdxWyhtaBxxwpwHrVHpq4VYWX6qonYg9LrV8oSVaZGk62P1gh",
  "key36": "H9b7Wq4BFfuKkNaqVAC6FsM6KvFLRggz6cqDAX43hc2DNCaqTdK1nF2rJMdbHYCMg8SkzjybfBunn5kiKEbvBui",
  "key37": "3ezDcZ6xeTkp8E2hnBinzRHtrGzoJjZp48LwpfkNG3eNdrJhWH6z681x95K6csgeq6UwxJUnrJXCzAwgpnMFiZGF"
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
