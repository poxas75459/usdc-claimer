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
    "3dSNWjG4JfazTdRkikkS7e84SoVaQfYNKYng1JyuK9HgeL41n3ocZqz5a5jjpYpykW4Fi4335jreLBp6csTPaYWz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jQUHuGoPcuZ3wznbHqea3EBrS2UuzJQWq8MRkGwty96hn47dR6CFAG4yAdXn5ASVDaDZ71C5MyWiyGiENuiKWLb",
  "key1": "47vCyHbkQjmTfDwzzKhMYa4xRvKYHR8yt5GYjz5Z2Zrwp1bLVRnhUYdFCziBbAeHzAHKLyfyVFBE2d69XHqx3SF3",
  "key2": "56AMZNmZ2yq5moULyEipHH8kFYEJnJyZqTQUyN6KxaD8bu5EQkBZRc8dPzsmidTU4oP3G49AD2TqJoS3TLCgYxS9",
  "key3": "2cTA5XjFsduLjSswbAUTnWhApk819MGoZNGw93xPCWkBaj3XYrW1EuwQpTsrKXUWtDTiuNmKi9QAyj4tv2L2cAaC",
  "key4": "5VUsVf2f1rKdjS3KpTszcirkDTZVpuggNcJpzv9FhJADnYZxiabL3QGMbwVbSdosVStJmx83q6tZVvWaTLuLAqis",
  "key5": "zZo5t7cM1eBQRVC7VpV7Lk4WvgPvHCJ9mBA66ZrD6J7rhLkjpuEEfrNWBkzk6JsedkogXK444MUi3mgQEp6zk2i",
  "key6": "41a73VoYyzwCdbNUUcJ6QFYMeTwXaQUMDHsKqwJc2hBXKmeZcpHhKW4LLRiDfKEBiBK1oC429A1xYXZVy9p8StjT",
  "key7": "5KPbXEWdhAogdfaNEGFmUooubFjQ4p1YSbopyiE3mMM3qbTmq4iWhTca6LafhbJWi5hHqdqPARRbEVMFWayJ9ehT",
  "key8": "5DJM7ovNnCWsKMoETJtDpjW9uXFsncHSi7PmoVgh3gU4646fF1SZmEs1bsvcLTTmt41GUaAjg6MKUKPUmRhWRVRL",
  "key9": "3mSif1W3X31tFgg5ExS3MgWe5nMHVd6wdPWtcfx4SzcwqUXWGLZeSfkRWCrJJQU3aAshzrKSWLohoLLwn6P6BAT5",
  "key10": "DrRC96RyvuKSgTuUiGMpfnofchVKu4K5xDSvnRNS5WuUTPQxjwwkLzkSLUKYbb3tLZCMWt7Dy1PF7VW3U7VCqzJ",
  "key11": "hjMaHKdwm21HkhTwA8rB4Bim5u7reM1kJneteZ7XU7LUgbyeZFD7oHfD7haKXfrjChuqeU1yVBfMwW7ZWNjUD8f",
  "key12": "5Q28wF8c8M8D5DFHBi9r61tdicwQH7bZtV1xEQ8cssrGnFmwUNKr3Q7VSX7E97unJvsH2nbzKCH1qXPZk2MGXcaf",
  "key13": "S5fHwaeE5Ep9AhsMzeAxmgzQU6H1qVpQEJcimdH7n4KBmc7At6waXpeE5jwvkhY6auNFMjC14ecxvENLbQh8mcP",
  "key14": "4QLZj2BxKi2PvquuVddsMrn9rkhX98Qiu1i8uxJLZKRt4tczGnQRaN7pqD1dotsM9G7rDbueVL8J923w8GK1JVUs",
  "key15": "5URpCWaa1Bhi9oMZN2YfCQZpyP8iY9j8KnYkmc8RgLmSMrPG5KGWE5RmNMJo96GCJ6gEmnJ5SKPnn57NEedxJuac",
  "key16": "5yqz9hmKKhVmekRbmA3gpM4n1XQYrqKFQ7P386AUXdyHA1qYNr8ebsJHMiyHwojNvzBAwVRU6UA59cE6G2Zaj3Hi",
  "key17": "hEG6wmKHfjZFQNJprZhwHF1rx2Q5ebRGvzpARs73RzEE6HtC4RYGvmWQQBoTyzh5kaHWaJcvbpfqLpYaq63UAJF",
  "key18": "A5QMGnUjSKDARSDRnW62pEyjkiStovMDBi8x9VU6vpzpdCF993yVZEEhGUN5qQb2CYBuYJKzgCAsLua2gjBsFsU",
  "key19": "59XMQ9c3PcJRgjbpFMuRuijKzSJ2rEzjZHikM6n2D4Ni6PehdeJNMoqFff7LAtyHAG4ZuAVELFfXGoh2RxUDCcWV",
  "key20": "271fmrWxR2wABgHdjJctMAtTRQ7iqusmiVXoucfzheVfFmyy7M2VHMXLiVqUTqVHMGGgW5vkqQQx6PCxiCqqjnP3",
  "key21": "5XxVroMn4fFtdBCKU4ueoL99U1626xFvwTvE8u1yFHwqjYyFeoFwjJDzaSGgGzxtFW9HK6oMNCuDSW3mXXKrf7Tj",
  "key22": "T1dsjiShsm7oTbnUNbMbDhWKzCc56Hn9w6AxZdt8kCPs7kr45pMtrKPrxAUuNKXfQrWcTm56boHrM9e5w54kQtY",
  "key23": "3Pv21eusv9dSKuzLsJ5vNLCsqnPjRQECkQ3rPjrMpwBver2zDzaHuEdJKqKs1AZyXpoUHqhWTA76rhCFYvBedbt5",
  "key24": "5H1Dp5jAtaBnn883wAx75z6psBypQcPEyjrAhJKgcUVwQ7Ecu6JNaPStrpcs7FpnHYR9QsZAPrvgst9jLrdNLC1D",
  "key25": "ZYCSgCo6N2eeMC9Yc78hMzJC3g1fKbDxccXYP8vFUA4XXe6Ea5BcdT4Ng6SigRuuATVGhVtjQMvm7jPCZvvYX69",
  "key26": "we3S8DChyrr6vcSPxYKtWmDNM8LcPVdvtWpz1Qw95ssSUo9yPj6wM61XcyUBjaA9Bt1CGyWWsoea7WoUUaXmLxE",
  "key27": "21TjxEH9kJd7P6YPFiiqS6eNQDd8yAGzSecYDsVNWh9qgVMQ1JSH8By2GUhrE3gkUMyhgkZiAoVSfHfsvbXeULM5",
  "key28": "5A9Au7ymEvR2M4pUWjjrt6uV5BDYBvXHjXZr9faK91nUrBjXT4igBgG3fJ8XdGDeKd4ahUYMU1yQgjXm69UE2qfD",
  "key29": "5cPRX9tbkhFUQGzfXTmKayZNZrHsgNZGx21EpGLBf7BRMfQjqa3CKMsaSKYvj8yWEcyGseWTRGyudMRBTo6aS985",
  "key30": "4deXGyH9fnYGbNFChAPTxLYQwHpGdkq5ZzK3iXnRStwuYSG2kTn4XhnehtZQbtDHUQSSk7ZfUzqRJvMXkQFKRJzR",
  "key31": "3rvM1x9oJ2zjs7UCnFnidUKJD63Qezkfxd3sQZU2GWkaynWDDb8xUojfYARhzeNYPaHpJQd3AHe6xyKc3oUwnWB8",
  "key32": "XJZXEVksuZZGW4L8LYPWQ9QqYXnbmadPci4yy3jMF671BR2XW1yTFw5Gr2cLznCR3PK2BBpKuwu8XAGHmapy89X",
  "key33": "322CwaxZMJ57a7in7njaFgdH7G8njHsBH25ZFbhc3wHQUVM3uU9hVo4dYVBC1vRuYPYCSDmCRyXQyXCwDoCk639a",
  "key34": "5jnB8twsJ7oYgEWxzJRRHCnfCWLE4XQLnBzFeveofvEBVJs4NodhoVhkPbEyRVM3LjZtfyeLKW8WWruJCTY8cArH",
  "key35": "7qbxAGhGSyEAaLEi5ff4kyuuwxMeXiYsNPC8GEwAbzZeQzZq2GHMqGDpxZMnXAThEK61GLBw6hKJUr1ZpWt8L32",
  "key36": "4NkGxK2Ws5M1Bat2j72czG2J9FZhfCrgdKBnHN7WSUyxpyLoCMMhxdjBW3pgtiK1wBiZBUQcZLpziDxkT8BTtfXS",
  "key37": "2MjKngefpGU5p5VJUyD9y2xEbbwMxLNz7ALrHuhPzmUovGc48RQFSoKPY1kaUZNSDHf367B4XVmYGAq5MSXxrG2g",
  "key38": "cPx3oj42J4P5yZxQ5L3heqkSdQvGmX1YxAVKbJ8kG24jWp1uKAd1vjrEneCrBfk88TbxqSJz26vR6pdpinefaov",
  "key39": "5HVvqHnxdrkapfiTRKz7vmDzUP1GoYimQbCdtNtkkKCDDKrGW1Ei8TPPh5rhEocywDfD973KPeUVWjLx1fMZPJjc",
  "key40": "3NLTXzDjwjNTzK5AJUNGfUmMf7h9zLvrYjgnmchbsZhyE4bZoRrktTEbZooeq3T9bHEcTjwSAbNHsYnGuarP4yE3",
  "key41": "4XAeR3Hchp7WwrNT82J8k1YJN9jm85NLYj8RmZeaURpdwgeu63Swdn3WA52ZW7XkL4uvwhre5yz5K8mmtuHULHgj",
  "key42": "mvrUYUcivZBXxddZh6G81z4AfJ64gMJeA6GLJKH7t3aDkSgiK3xcmhbM1pNsk3TspfpTzEQEmDpxVx4qjiSxQy1",
  "key43": "2THfPoaa5JzySjvrg9Gq2EqEw9ZuF5ynumnQmLmBwPxsJAWsCfp7hgtATqXZPbkTmHpdFvuEB4kNzU55iRXdpnzR",
  "key44": "hDYbQDpTWBrjVQNXwQFbMXYAuCo9hiiaobFd6vrrU8N5qLLicMedZZdK1ate2fgDKzrs1baVkUa3D5R2mGYj4uc",
  "key45": "2XAvYGT4XEFaSQQQzMrhq958RmoopRpRUNZrz3wFR59xhVAQXs5yC9wgeMuZdDFe55wxcRqDWXcX7RkT6Sdhx6EP",
  "key46": "3VBLTdkpBNunRZzbHUnD8x1D5TcEL2GvcWouZhniVGGdDoBDY85g5kmY2nAQpj8ZR8KSVGyG6R92jjvxPvNC2YKV"
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
