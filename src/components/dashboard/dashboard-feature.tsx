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
    "w1Xd3AzToVqaVRJBj71qXFcVHdGfQEvvMwRAm1HCrqy1SW8Mbp7Tb6irCK4kCWUWu3pKuEVratd6Jk5qFkKVvGq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SThswQfpXiGjBNn2V9JAw4kCCwyMsB2QZnVyfKSWRJ6BVB11YB34hPbAu39g312RCxvhXDVnQnEDoboK9tbeKyG",
  "key1": "2AVCjGx6EeqXTZKPZhHobriaS5abeBR3GcMWsJFSqtB57Fe3ptFw972e3UMVyUemH35DypdaunK9g691vqwHGaQs",
  "key2": "2BwMBPysRnLBjaLKNYxaXhpHjVK8PkCQUZxJarEyLTVBKAnccpqwR3s4ygCSyJx5McrN2ToBXcDwYUur7jtSfdGB",
  "key3": "619FSkG1TMwXScZGLU3yiQeuv6H3javBE9LRxCBJY4YfeVzexjASpMTnLQKdWuks3tfBWh9warjbJdf3eevZSB9p",
  "key4": "3HVZmc3jbju1JmPu2ZyiEPGdgg8cmgmRs9FPZYWjX4Dymm262zsNH4C8H2RqDY2weCjVWerfjxwV5bsW5WjJLfFz",
  "key5": "1EBHVoGE2xweroun2v6sdP7uEtxoWGgT9Fu6piY3L2PhJumqkYwKW7pG2cdLyVDsfr5DdyqnwWptM6UCuEKudxH",
  "key6": "4vcLw1m64zmsCEAYpGvqNWnAhhszcrTZktdsuVWwHVjiNtj432gdyC2bSZCSD1jPVYtHAy3m71HERxwLSHtFgZwF",
  "key7": "5gzv9jPM1VL7VFPLhDs5fqWDyhkaHJfYymgnXHQoWrDm8nbwwZKi4Z6uPx1rJtqdNLcBFv2rkkaEGo8UNgppseZf",
  "key8": "4PdwkQF5MsW7ModStCbpaLyrmTuSzpHDsbGtyiKZzPTQG9Mqe6tN3ZGE5FNF9y9pbFnSKES2CRAvfVgKSNScSXco",
  "key9": "4FvKAnWBJ2BZTDK8EiDA59MfydQ6T1rXtM1ZqSPJQCudk5qrMude6c5hoJYVrC7fa1XQbmL3kxLGn6DmL31PN5BM",
  "key10": "2bngScN8JHSpcqJNcM1tw6wx49oZGFZcwWMcrvZVsqeAkx6iKJ5L92zv4tmLNySQZXieRkw1S1hdWqx2bFDUp5ye",
  "key11": "3Z3G4QUmUxFkbhSDHicDoR55ZwoVve4DN9aSdd9xhqBTRn28vLATwwhgyWE6RHAdZuH1EFoCbGudygsc4zewHWWD",
  "key12": "Tr11TN9jfqZk4cZpkf3s7WWscw5hPxsX9VmdC6UzydgF1ak4fdzCWHzciy1qPDCU5brj3M6DmdQW3MfF1Q2F9bv",
  "key13": "3sKKdf68bsFm1x6ZwhhFJoW8exvS9nVZKFhmKRXghT27xYyV93GSBcRTTDr3tgNXpmmTmKzmpDaqvScgCCwxvg64",
  "key14": "2N8sa2UuN4NbEpgtnkJxZDVjGTW6Y4t5iyP5oTYBbEv6Ft767Dt7G4Y66pVDPhBbNCxTmo5yCN3KNVvwWTC8nnzU",
  "key15": "4FmU1baad4Sz4pZSE3G24vJMVUSXL2PYqn3RDPx5by1fmHUqw7GW32n73Cuod8ejdwxrTxv8guhtN9Gas3gZfNj3",
  "key16": "a1kLhibAXk3FeSF8aCQRgkwi9oN6oa9unB1bpf4tvbBEsqiu2P7AWNMQhy5J5MkWLqqYFzvUkfA3kkA6Q4R6mFa",
  "key17": "5n7AX4aGNY97Z1EdfViZmYrmH9mfNFRFyRcPs5vu88ac1uKycoVoXjEz79q78fpnVL39YcozmncR3BRW3QJ5XcZ7",
  "key18": "4SLebcA3AL3KgKxRwcTdZjGgo18aiYRzfpGqq8NBakN5V1pY5WvzRE4BcWwaVtoccGSF73761vDvBvsUUBQSZGoS",
  "key19": "5wgXH92NvibXfZVCUUNsndPd5mPrKj7MnR2PnwkY6Cg2u5t6VMPspoWrWxYGzSpRiLGopHDcsFpv4Lgf84myWp66",
  "key20": "5fuq3cz3A8ZoEmYy9KBvUehsZZx6LYzm6bLyG2jFm7T6gd7BQGwpowLm2mEfSM7RKFkh9kfhfa28GmgzUBy2Yyn1",
  "key21": "3aubiToRwAR8gEuUvMWB8ZjuG9DbvxgPhcou1URWHkdbJPsnscNPVn3Ymikp91G3oqkEtKzeZumuZD4AiEKpwqew",
  "key22": "XanYu7w2cWpNmEbngfVrV8BhDtD3fYscdHaQhUVraJertfsrdj3SkC98u2cQT9zeEz3c2PF6DsyUhi1S8FArDUR",
  "key23": "qRN75Zx84e1S8Mf8UuHRbvTLyQbtDzM4RuQEE4kCBfNAS9wR44SAJtNM2LoK6iMgg6KCd8k4osXctj6fgYGTw4L",
  "key24": "2YnKKx9KAj8huV3pVvkSdTahuMAs1uxqP8htSuBozDBRAMsya6echak74Rwwq8QnhwkTrLtTZ7DUhGmc1McqXNmJ",
  "key25": "3AWKaNSSQtxb29TsAuF5JAfe95M6b7QaU3LeqnEYMbDD5mJmqCtnMJH7MgyUxy14PceeSunyjmJ54F4JncCov9yT",
  "key26": "3HWcUdRrDtZxttyVZVq4Wy3QVo1zzjqJnyWZ3HRPm3EZHJ8saGGhLTVvasC3H96VMbf5gjVpS24R2hnvtEYm39Qm",
  "key27": "21T3htXvsDZnuXXo1DYjHgvd1HxP132xi7ctC9DT4VTtJWzFGbJXBZeY37LvMReuafANS3JkJb7warjLFwZS374a",
  "key28": "35U4A95F1gxqY8SCm7QTUeMYUBdDhgcPFWrorc1LuS6TCi1gvXsHkrpn8Chos7t4kxRBv1nd2rd81JgF6bvzGDRJ",
  "key29": "2UPvovGDAnDAxKzeWKPbwH8wRiu5jXZHpDndq2QbhdTAYV6Pg5B9bKhv8aZZVinmymcGbVtG5iFUg1b56jHpTrnK",
  "key30": "62Q4S78wCG6TbAGKXbUTrs98wemgngviUE453pJgWju2UbXApywFSCSwXRYU9Lg1CWabMt6TSdEErL86xMNjsxkB",
  "key31": "49UCg63PAUFa7kWBNMZjTue7kdDP6YTRSo7KNaa2PJFZsbRar8kfXvpRpWwJ3AJdAVUmNpbCq8biFcx9Vt3hwNxi",
  "key32": "5ncgb3Y348aaMaogbXifaHngYGG7DbfAcKB6WePkygyni8cHRhJmhYW3BTZV1qaWte19ieqMtHhM5iExSf8uo6vi",
  "key33": "5WEBtnqeU4tzPyr8v73M4wKzs2gUtApyncqRCUwvF6KZby2pApQ1b2BtNhZW235YaSLLjtgwtKBV32yfueA7qKE",
  "key34": "5HoF5SLwZZWTuQ6xaMCexBwiAQdhHJmcGQ9pNLJTiWWNn6zfuVzgXyKueY2CH3VXMyZj9xSq3icd5V9TTsKiqoNU",
  "key35": "5N7gtanYh5G9Knv5x8NKwdPNZJiWuLqrKenZgTaAvA5AXKq4uWFJzgGNVCc6jMwhMgELmfmSyEEVjtoaKNH8wJZF",
  "key36": "23EVskKGPt6g1zetkCdPZugRt3pPddXKsmHR8kTPeRPERo6XHvHkMFpxiBw4hBAwoyM5vhejtns2mLVFroBeyWuX",
  "key37": "5HHy59xGaxhnRVRTR51uu8iiECR7eHQHrSuo3TfbwBe1ZJU7oLp3KCBRmBcFh9MkvqeDVjLNL5S1V7Kve17FHUUM",
  "key38": "2iQxPoLi2BKVPQY1AkXUQ3cZ8zGB9vW6qjv8DDmpz9PBQVZe9JEdRxaxLcqoT4b4U127eu2QhPuWUzeTa8HdB9R1",
  "key39": "48uBEdKmf6cH3bfusLotgdftoFTEbisBiyzcT6qyi1osHcFN3ZruenKS6S74ekuvEnBUSJqz9vqJGVMv43XDNpXg"
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
