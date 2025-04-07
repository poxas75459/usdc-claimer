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
    "4oXG7YeX7Uct9jWrZ9S3sJZWov712B3yigUANcJwQs3Vu7xhUpGQvXxPin7QmufFR91hN7Fmhw9eip9bNJdepwn9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66ZA5tvZRM7unsuU5ZarT11rsvARDfui4pRRj9x52qKNvzB8wfpuZbwFZQ464izGZe86rK931JciJ2kRxUUbN4Fd",
  "key1": "4uFAuDsqJ5vaE6mJzAux9FrHtVa3SyLSqEnHrD4huRjqA5dVTcdj35HmmS7VmNgmQucLZmR2f46wkZ4mFDrEP8d9",
  "key2": "2vZuN2zEfF2Vrs7UfFMwrKA9M5NetWYAcvzQVfNDh5eaxDx7SaAaMq9qwiwbi9CDfHBVKvuBd5WMG6ZouXt4c1cz",
  "key3": "5CuTcTSVnL6KHqRFtwfHWV6dzGFDz9fzD1LCqRgZ3SPAvzUmWpT5xVtidLncjHhPnwXp5t5J9DL3nJKvsmZiTNZE",
  "key4": "dk8FUXNNEWD2MuN4owxTfS6osqN8kSEC3u3RnD5hQjTWU7ViVxkhcwHsm2ZW8NqpYvzwmsfA7KN5YmsjJSj3N5E",
  "key5": "37SgRmia8BA4vamzsLqMBd6vjJzXoRgHBsQ8fD6SoAzv1xCKuCBCJSPcqEDHDfN2NsDkLoMb4xjeeXm9VRy9DXTA",
  "key6": "44X7V9jNPrSJfLXi3Dw9hgukGqoF5a9Jhv37Ak7UPPoGZtRVTFBdviXkfNW5DvTTzHqDEX5L84LgYSYSQT5VP6EX",
  "key7": "25gigA8V2sh6zi69yPWYosa9jof3dB4SoE2xk2bLzrc4W1RNhh2KrTnNfkTFnCLiqNoLugwpissscEj6D4utt1oM",
  "key8": "d1h8DHC52aaQQ3tg41snViHzb76pzsrKM6knth7ez7UcNPHMg63TYtSfMinTS6ALKsfj5K9qWhDz1tLZ8GxBfD8",
  "key9": "BypN8zMmZMbFrSuYaDcagseG5qMZSYW1jcfcNb7US7Q5nsc9SAmvpQbm2wd3so2FvYnAfMFhVdz5QRHxVVvoNqz",
  "key10": "f1xu4AhKhNVDfTtoMv7ccxftL86ErS8Z147spJAXXGQKaQNeejCTjmbRnCz82vxyQxG12LS8wqPRwJvreerRhmr",
  "key11": "3PD3b8htvgZ9kPdh6SHu43EKvhf4JEwV6bXMVSAko4jzvHg8LymEJF9JKMna8RqyWf6GYoS9N2uBXGZHZGrkzySC",
  "key12": "3g658Vh3woNHvDBZGraTxAv49eBzhLL4fzWF3KuxNHjX4R24PZGw1xwJh3L39D3mXd8bRxHs4GoojDm2fZu2GmqG",
  "key13": "5Jq4QQsCnk1j5vSSi14siGFjAd47YxdBJHHCBwEAU1FtdFVKGnrGGiJuMSAYdWSGzvqZBC2hcKPitnE9kKM7dW8r",
  "key14": "3DUwBYvwLTTP4MNoe1pvwFVF189kGd9Ua8ZRvamPEX81wPmVumQP4ho3aFyPCSWGsmLJBhUdVodLJRuGuDnX9QKy",
  "key15": "2xagBP3jECruw8hGHQGaM933q2PbcDZ1r8krajzwKZtmMZs5fgRo4fATrQmxrWAtxTMznBCQ2cpWh3NDFRr1Rcvy",
  "key16": "5QmxkGsex5jtBMpCUR9aVxtUht2uM6kkF3LTSHAt85PSwBzPe67jjfnZQSVz3GcgwaM2gcoNcRvNQcBQJjmuDDWe",
  "key17": "5ZxTYT4rLYKFXFQjmM6eB8UtW2N3Nmr2DpP3okdwqF3NZRS7RtSRKaJFEHLwSA6hheRwm9zroArRyaDSW4djevRF",
  "key18": "2RaiWHu193kMqskLMAbjJWsAupsHruTRE3XfNyTQ3sudruLWYrSyAuKjxeUHp518rxUkVRibyTwpJB8VM8tzCykv",
  "key19": "d1Qvj6pH1FuMVuwtX4ZpE78RdqeiHoa1rmWMqeotLKomk7zsKgwPgbBLzh4dehEfogsXM4RYy6GRgq5iTbLaUoa",
  "key20": "qJdCSru4KSd4m1E53MWysWePvRZQfCm2QvwCGYLg5KmYxWBZq9YVqj4PZgy7z48LWk3PiWVMtpV6nKfr4d65pi6",
  "key21": "5ucAQvZtP613NYKjKoR8kn4KHkp6S8hUUH1mwyLy6S4LMNqoNtQrnpKmiYvYGXkuPUR67GF9UG4Ckwrj7Av6ro1e",
  "key22": "2C57TAsdLumvZFG4f33z1FeFrTc6fVGcjY7sXWXyjimg5UxW8GzHAm8xEsFrVfFTdy8HQXmnE4GC5PpA7NEZUmCC",
  "key23": "3tDwg9oHPvHWDGc2NgVtJQ5AzXVchtqY1Vnbw74WjsynVB1DStBKZQ1sUs32HBwZkT6sYMedrWkKALZWnYbnTCwJ",
  "key24": "ZsipqNYme8Pw9ydx3jKmcWie7q4ykt1ttYEAyZw5axf8r48SqM7AsSR4TDhY7jpVdmXUvX5jBAKb4roV5TM7SxH",
  "key25": "56rKU4T1jDwkk7ZM2drDUGRuSbotmEvBkmGydxVJ5sBfDtgYBBPXsVTVSooeatP7Abfu2WChB7VBKsjgYWVzYcPK",
  "key26": "4VKbqLgXDxrwGXQAosmpEF1k4hn8ZGo1xa1pMBsWxEtnSQtukRKbsiFvXkwAWWxe2CPEJMuPoqx74mkwwodoJm7B",
  "key27": "3YwMg48JwycRMuvVgpALaTHXtdLB9Cxcqt3ctkxep3ajRdQW8LyV53Ejo7UupAPmGVov7wBvcDAuqFb4A4S3Syco",
  "key28": "5btni9dXJ78Xo6dbjQEdYCJtNvRNVEmae1XE1tSDEgw4mhgkSR8hzm5oLa29mKtLcpJqVuzK3sVUneMQz24AwukY",
  "key29": "9SsndDRsK9sVBCfwMEAJ6imJd48KVng5QdTe9hqkSiV3fxgzsJEt5md2bf2QULD3EhQhG3WgtdkqBosw6r7iiU5",
  "key30": "4YaAtYptkhSE35n8JTgogQPi2hP9yvzF3bAfCgVvGAjkZCmUtAaZL5BciYtgKUGHsoX8fXPHqMAEZuT8FGQrQ8XL",
  "key31": "4SQZkCMSfhKCrGBXUGC518z1ZAfSbHS37mRrhk1TWCifoEnxKV6xE3oEmpeLL4iabwBLmTgBiZNYxh2FDpbJpJD9",
  "key32": "SLtZQs4eTLPnw59ygBACqjeiU3a8eVQqARL8DWUwFMbp9361Lna6NUUu4SacxDaaX7V3HXdGyb6LdQUY76TGR51",
  "key33": "3b2nqcbn5ATyxED4by5AWvp9PnmJ7kVSYWfxTYhT4LQHLbwkTyFD8NGXYBcGsKcrLsNKtqPqVAEi9awfW9xxky4o",
  "key34": "wsVCmmBT56JskAh1cqw1wtptSvZA7b4Zf6mqCVwn5JkqvbZWYPYzFze18aHA9P8ZxtRPAkqwLTaK3VEz5WvzZVd",
  "key35": "3rmVKjhhCp4CuLtAqVtA9tbvehUWa4AakQSpVvtWmTbcEQAxAdanXmZrGd5pysTrBkn6ZQGaUGvwFdhai7YqufX5",
  "key36": "3rvNjd3eB22pRhjLQufLwFhE2RLKkJeSXQ2t7UpmfEi3H9aBwwBwtt6zFsC2mjkbq7xeUVPZEPFMK5xeeppfsHad",
  "key37": "44D2Y2bQo1Fjs8Kpwqzh2NL51tYbBKe7YDLybuN7g11Yrwm9V9Uw96TJ6zxmBmuvMG1G8D7R4To3mNRcbncjZ5Li",
  "key38": "2M2kYEyxNSTDUqjiSjsJdNXPKpAwYj5jfh7S8dNGs7WEDYNBGA8XB6wZmuhVVP6UusWrLSuxQtKMiRcw8CCmLbbS",
  "key39": "YCaRUBo4Kyha8Qh39ZAW4Pjspz6Gt7GDCYQbEFbb4wHtS4zMPKaQBTFezcSbdcKTsHVcDRoreCAFQXwcA3cmYyf",
  "key40": "29vrQdAvweSheL5FjNLn8BsLLM8EWLuzbgVpmsBthS7rwYmeJYyzkQCR7zdiB34V4e9SPaNRnFCJ7FMbF23f7Tra",
  "key41": "36v6XwNf4rg6JNFJTTbB8acQWCzXQkoWCa5SXgYkEhxc4zrRALUkWMqtq3Sy8sXXi1SpgvK3zA4VSE9UxAQTRKc5",
  "key42": "47Wf1mYyD93AVj9To2CPNEFasUJAsVkGHPyZkHDNgBzhtDPApqQcB9W9H9bfxpLThezdQX9z99r1E4n78HzL3Ko8",
  "key43": "2qr4bE1LfyvHdV4YiRjWeoJDKyihTGTABd7po7AVusdUZthX9fWpDTsKtzLu9h9LqZ7yf6TXpbiv2T8vddv2Rey6",
  "key44": "GKXfyLonroMppdCBuUyUwPUDHjJ2yeryrzKJmAnJnTs2bjZVSn8uXWvVLdoQ3MNhQN6znWz7cTas2NYZsFPTfZ7",
  "key45": "2u3ScmRw4HQEyjtyNa1eMXpAa8i41g3LHmNXZCNBXwdBe84XavGsKVBJiqEfScGjP4rPesbLxzxxQqsLkv7hszzx",
  "key46": "5dhv9p535VDnijdXMXjLntb4grUxCt1SnuGSVSs9RF1ujtiaRRQHBL9a67vpWC1opbUtR44k1nKUBk4ro4rgL66G",
  "key47": "2Du3v3NXfrhUswuRDvUTuJYJdoqYYvio5HuLA9pEdx8gVnSDnnhwtgBJ1cjy2GpfBGQy4MXir1RzdBg9qKiCrKad",
  "key48": "zLeesSTLtVZM9tqkdoBV2GPpds8iWX75X9u2SeThMU2SRPgBGDvktkSaWRigQkSj14xyRKLTMm77PHz1BJZ9Thp"
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
