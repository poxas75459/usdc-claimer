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
    "km43koBm1BbnRcvzFN5if7umcU1DxP5dmQbaRFAxsBXRDiGV2Pfte5495P3bmNp86MVzFAbMygghcFDAQU2nCGu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CnV5ZWWkU1gp1tvaKV6RZKhTBYEAUnZdFYmgG9s3LmhjuThA66CGEHrUc4uscYrPZQVAk65d1vfiduwM1U15VhM",
  "key1": "5RRSGVCf9gs9tFkXQTy3o6rG3MFos5CT6EjEfkcPfrKDQgdRrjTbBnnX27HtV9RA9Q6EDoU5xzVVgjJ8p1mBcAfh",
  "key2": "361KddPgqETjJbEFjcrkfN4WfUTCabjtiLMD5aybyoumijxqKBWfJkDmwgUH9kNYQxag9JidDY9p1LDMHgVaUZy4",
  "key3": "4HGycsrcdFvTCm4qjXfaGArrPyiwCbTtGPD5kc5ed6nXfymwd7XqjfCUvELjPWFZYMgf9TqWd1YvWZPfaZaBnyjd",
  "key4": "465GhmgU2nSMhyUnjadYfC2r3Wyde88TB6455cjLaPKiG2SKQxm6xe9F56n7J3d9kGsxo8p8mwLeKtj1u1V9qZ6K",
  "key5": "p7aQRnG6ziHQfTGyruYPz4W4ok6pAZdL1gi9G7p3C5nZFjPp69vSxKs597v91chUXmHyWv4BNRYNFbN2n8AqA4J",
  "key6": "2sAbKZfVWnStCFahV6RrGWfHSieN48joc4nT2Vd4y4PX62HKECKwAKXDFA9DeRYuTFwefg497N4xFfH3HuFu7ZXQ",
  "key7": "3ts8LJqU8n1yDwSdYKxgENGS5FLPrFiWu84uCFUPbBCbxYLJJu3MDsdubvaGjLn32VricfoqLxBqTv92E6aEv6fu",
  "key8": "2xm938txxVo1thRE1XMKEnW1ZZ9vtP3riRPWn6jWPyLN37YJAYGdTbSZGV8omNJghHQncPWLnFf7Cdyx1unpo6iL",
  "key9": "5mWwwSosr2Vr6znbCczYWVsNj1VQcfX8SPaobVaZmiHH7E3QwxvCyQra8gHA3Pou76Dt6RVqL8DWQMrKfzau1WF1",
  "key10": "ZKqFKJmXRWapL3wZUVMj5Xzr5CTDWAkZ41cUo4xQVppkHuHq4nHRuTuMVQepdbRZbJSsFiqvsRU36Bdoqr4uRfA",
  "key11": "3MeNjcWaE7GmTAZn4YFttUPvuiVdfyPzgxcAEJ1CVm48o6mdFALBmeJgSYChoYLq3yZ3zP1DicUTpzZzSr1YFNzk",
  "key12": "zGPmbzzH5thbFF9qusvnwTCuQvZ77RWQSL9sYFRy3cWxYoPLig2QVCyuWg9MbUmZhUaxjFh7jBUsarFfZrQhKFv",
  "key13": "2yjfCkayj12VMYeyJd9ymEAKDpveNKnVRH3QorW9jaroU7H1T2Rn9cXCuK6kWaBgwMi6C3noCs51wRMYzagi8KGd",
  "key14": "4xx6cDepkom2d5MP4nqsCaNMyPd1wP3H3j4t1c6MV7o9jtWNZKtSdJ5kSPnK2mkdztNFYuAGxcFBEXZ93G9Nuggc",
  "key15": "3uHEcpHKsB7U7WP9Le9sYev5iprcahSTUqLmE2PCfWNFfq9YmJ1EqgWZ1JEQ4GoATp3JsysP4USPD1FLgzELWN91",
  "key16": "3jmSbswxNc38DwLEvhz6QEsxnwJ7Ypz6tnKP79HaLVC8LK69NrZ1XKKDgvZkqgTcq2rQq4181WXsJrmM7uSexo6F",
  "key17": "4SAdnjpuacU3XRZYUkWKEPEMNk1Bnz1WyRjSynAdFXgdXXKxr1FUbKHts6frbnuNE6KYek9AsaM6j2dzTAwP9syy",
  "key18": "4Y2BnCPPwuKJdttcpzqRAGLfneXkowRawrViZBDEfSzLLq8ZoiqpuVmSAowNfMJDKrepmgmcriSNWyDQfgwyPQJD",
  "key19": "45BY2a2AEJcP2ajKCk3kxgFumptBZufZEJFgWEyik5WuhRzRreL8QWC2QZLi9ugyaJsEi3YpkbycfoQ4XeVoEv3C",
  "key20": "4fgqgeHqihcp11HZApEhmCGNdfb6YoRrtBcZZf7YV7krJXcxVYnHrUKLchQDRJvAjxgCVQwuQ7HQvNyK4CN798Mg",
  "key21": "4XMzNr3jxetqSRKPuujH2efwmBXqL2XNMAoUqhjfgnCqNfxirJ2nTryDz3srXkMt1ThmwmY64oNCEqMH4RijtHGs",
  "key22": "2tBJrunvc9s5yBUuRPWyCjtxyzRcpX3nvXPrCKBmsFGfF2gawV32Fg3FdhkXkxftz8eUhpoBbLJD54cU3wu7UNvM",
  "key23": "4XHB22KaWe2MiwTt9mHNqBpLtzyykvPKEEC6BERheZGnfkf76JuMepBSUiWBf83rHCwtt2oSGmAKfp3NkE6ijVma",
  "key24": "jybMHSehJFkh663PwL1M5UpyBKr9BJiqjMhPTbGEhjjQjhXBHWQUkhCCx7HVEa821LV6RoiTVvANRFSi7nd578c",
  "key25": "2pZ5AaKpHxGjGd2SsTzudb1NHERTQcF5LSTcHj4aUzVcDco4rjm3Yqs39bvAMw1jBJdkzTTog4yTqyoUSX8C4cEa",
  "key26": "41eziBERKk4GeDBZZz8bKUijhwkw6aWT7r84FQ5ik6NEYta89fWTELmFx6Q3iBZCKxYm2f96ngwSk6HbSkcEhar4",
  "key27": "2wLR6DBxNms62PskUMqktVa58B23rEUTz2itzNERebZD9P2sB34DvW1dEvJP98Ho7jv9JW5MZF7QJCRXxNgTyfvY",
  "key28": "33FhG3FJZR8TKNDsgYCpGLjwrDXjjvaYtwTa9geY352SJUY9QG2hKt4W7xRpwEwv3R7mgNqZkGnQont7iCJ2TrP5",
  "key29": "4US5mqNAsT5m5DU4DmnAJkLwq7hCQbMcpotHAXnAe2E6w7BQrKdnmEchqwu4bnKYt64bUUyjPrZNptsmKSudwofy",
  "key30": "288dES983cbEX2daZBdKKowsQuyn7VXR7i14iSgYxNzF4iu9TmrHSv2EoTtmw1poDxheeno74oQWXCefUa7bhjJy",
  "key31": "2scQGafgXzb9HWMAtAcH7Vz7GJfrsZeM1q8J3Eu5svcn14z96ERUeMeTUBtNQtyqV79bNwGnJ3QR2Nsa3qaLuPW6",
  "key32": "UsX8gmsiSft6U9ycEaARJgoak8VvVKHp43Tbjh8fKKs9JkReuFXexjBYXf88w5NK2w2Xc8WQjF47AtjPiiFzGSL",
  "key33": "2YrAw9PAgtZRo5xc2ik8YWQH82bjnxnFKKF2kikGUa1GVc6wBhnjWVHRxavDBrdptbnkiitSrwSdpoqCYvzmcNUq",
  "key34": "4spueKKDAEMkAu9dhj1oTn7nZr77heQjCBm1j4fxTzn3AD5gQgTQymohruKm5hwREDeAtpMWgFwMndtM98Cf914h",
  "key35": "5Jjqf1xhiKAbx51U3dQPhwpwWeBg9TrxYXHBpDjwx2JShCaCR1YGXE981dkG2YhitTQ7REZgDsF9y7AYiGkxJUWX",
  "key36": "5EpaDYEaZ3fCbVTy1AdTEph6CzyaFki6qx7dJ74WoooadEr2T64A7ywYAyHpDtcLhwepmNUA8ZephuyU25uJZThR",
  "key37": "4tkPVHGcX6mAme5BzZw9k3aYAfWLEKEdz6o7xdVghujU4tuxVaQJyAQZsPyvY21rqWsi8BmcfUAdGcb2xUZ7yeLG",
  "key38": "2KnK5GZheC9UDZfY1qtoqCJbB1A4UdSPvtqoY3mKh9BcTaGth92uoQgKc7TtWrzHC24Yxiw4iUvjzNu3F5hHMdao",
  "key39": "2SKAYk5JKiMrLahhekbtftb7FnfEdvNT3cUMgsGEfad848D4DbeivCucVv6giWW9PTjUPUmJF331weMv639ngoyr",
  "key40": "5JzJqsMY6vr7bWo3A1jKwcBpFK2kdAQcTSHbbG2uVUya6fjoUaTmtKCLsyqdfJpawToEfXtet2gaqvEExBoACTP8",
  "key41": "5Qw9Pif5XUgA7PjhAU5czdtVd4ByKE4AzbN7kH3fTuyZaEcmQfkfBjQXXk99m7LNeoek91213rakj1SxLW58YKKN",
  "key42": "242VywCStJj7o2Zkt3LyVMBqRBsWQfmrn4TreaqmYb94YMj7RAn9UJeTxc3tQCea8yL4bwTRrwNdWPvvRNYpfCf9"
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
