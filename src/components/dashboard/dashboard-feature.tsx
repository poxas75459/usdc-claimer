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
    "XXCQqLhENa21VDM7e5MNyfnJeeuupEGyhgxDGtKKreUCbAh8XzUPwYoptTTf6wxS2ZPdYvAEbPv25Xgh2hPpdBP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oTNDNrhJfB1QB2RUZ1fFk3GLu3p5qabWL9ppDT6eEBb9rC52v4jnMffJpNyrVCq2Cs3upar7ZcG4QRuNs89knGv",
  "key1": "3SqyfSPznq9PDpCcHRMzsD6uKWXCmb15Zp6C2KuGtr1Rm7MN63jPvehJSq6YhRzFkufJgXKUAhSW5GWVBGKVrCh9",
  "key2": "zNZLsRHHWnSNmhQwzfULTtwwf2fqmoN4GR1TFUbY4N2hLdSsFYN6QZqYHar8CYDSZoTXZVWAUTB9Ub7CYgLc46r",
  "key3": "3JA3Xsgdnhd6YRQ47QWRpvjYu1ophtv1wGj3XdtXzgYRshEpbGnX2vyS1yzsZv2H15iks3EyPR55ATgwPBhry9eW",
  "key4": "2WffwoQ4esU7HHUMAd6HkX2rfD9gcRAwPWwapwJvKjVku4WdvofSrEBvvyqXo5WzwmjaSd9psFAjs5N5NQTAgua5",
  "key5": "3nBPk52CZm67GNVJ6d8xqiA8btYVWSvSmPUQzjD5z2RUB16DxgZAK9XYu9ukTeEWQqVqyBQc7HPMH2Wdr6X9Rhqo",
  "key6": "5yzsL6TMsiLDRHFupq2yS2ejeDYHVZgAdZnfiuSmFGqG9hDKrE1bKmucpxpWNpoq1RydNmBfVRnwJHysrsB2dqBh",
  "key7": "2kPwacZkkwsbE79sbXrhW2tsxkUVFFjWXhoHZiPjsigZpG3MZUCFaKLrWJ6rXE1TGUDh1ktMS6o7KPYrtd9ErGW3",
  "key8": "4HGANNw9qKoxGMNnBpyYreakjHzTggjZ6edTuLSnSeNx3d2YfngBJpPn3PQZuVo4yr7HHdkKzC32wNwtjfNiNnV5",
  "key9": "4HoudwL7DCuqR6QeH4ci89dpfBxKGAGyKGRExi3Jey66RzrTCHzmSj61MNMjKheMWB6sdAe4RhL1aYmsQfjJ7Tnj",
  "key10": "Aogd2wLQ48gnH3DXn8BtifGoCrz1weUhGffsSUoAdkj9x42J3byBJpggDkF9q3zphUtviBzEmhsvYuVyKXD6zLz",
  "key11": "4XVRvB8C4LAVowwRAUzY7JFVapefZjFFHjDy446rBZA3JSUcThFRB8VkqxxHwCNFm4st7NGeE5yNVmrP2dw5WfXm",
  "key12": "RpHHf1ACXF9FpAbbgXRpBgmhjw4fEZMAqLMe7PPTVeoMJ2Vs2WSzL9QvTSBQx4keYw7Zfh9gzMWmXsN6hnh66sf",
  "key13": "w2nAMghoAz8xHYSqRwyusE1R7xjFU63JijLNBkqH9nR2sMQFDzxnCj8PdNjyUHTrcjnStFGdhGreeKythFFH3YW",
  "key14": "5ZDGjC2UHVGubd3czVY9E9iqm5A6KZ6e9VrL7g3EgadKXkhwNDCpUEstzGzBJ38fQpwbcx1PTHREF9gfkSG1mG45",
  "key15": "NGJjvhbSMQQ5LxCsDMP3sU6vszExNvQgERKB2ABCGUJdyqAwFyk4iYDnsGBtjXD9WHoEkPH7jPEpjTZusCVXhPK",
  "key16": "5GkPUC4kccT9aAURySmxuzf2FrrJ2LyzG5hWN8CdbQdtSwuchTdhryVnR3fH2zKgtS9eigk4VVbXDvezS5r1iq6T",
  "key17": "kchP1R4x4Ns4583LZgD6xeZKkwCSn1QgXsNHV6juoDs5G6w6zU17opriu4gd6viUUjSXGpdUq4LybDfftRLR9dQ",
  "key18": "2qgUmMa6iys3FFT5XzCBHUiTeN32bjySUSz5HL8TVrj5rPo6K7oC2cTd8Hj1zRBr8ZeaW4FgasJ7up8NKrF4Hwgw",
  "key19": "86661dif6mBYS1Fo6wsrwsb3KUPjhUyjeGLXFq9vGyYpTV2QANpeyPry336tdbwospEVLJjnnSiXqjY9desx9yi",
  "key20": "36TRyPUhBu7FZKgVXT1cZe3pTcL6QEry8a9UH7DPdMaVYuvjV36Y75UkHARf3HRXatQedZ6U8FdDecLjirUgxh66",
  "key21": "33C5GUkLuYG54JtJ9AjiaHZXcpPM6kYUL7Q52sDnGooxDa1DdckzNNYi1Zc9WLFntawM7WjxgqjMsudaF8SnH4iS",
  "key22": "4dcjHLjd3jpZCYZWa7iA81fAJ21iWuzcyGujMrVEP5cSdbXrnKsjKX7u6KckRcQLYiZw8uLmq7wVACeMcc47iUdS",
  "key23": "1RqMN3etYGFutJTDqGNWP8KR4D5Ca72QhF1hybMavygq4j7GT2a4YgggdfotVo2XQRLRF8M6JCAUgJCUJo8VUdm",
  "key24": "2QS1PEMn18ACsC2xQ2bfEyzCvw6gzYd2WFg3syggJMGnTtWhtQVGZGoStn7L4Z51CPy453WPxy7k7HW2vAFBBeK8",
  "key25": "5mceM6A8oobt7qeRjW4mSUqtRyxwPnG2sCpr4H3q8Ntq41Wi9tMRjCG7gyfHT9zDHCbgKQkHC5C68CEQetkXvAU1",
  "key26": "13S8NLxb3BxfkHrgt8dRtccH8vCVU4Uc3sAqvKj6QBZQWv1aNtn7wUEBMM8PrtqQ9NEjt5ssr9dMG81AShtefwJ",
  "key27": "2TF1VFU23oZuJt81Xmi1doYzHwj3DwCZgGEDHufrKLVrY5obydF3Y6zo8NDd9TrwSwA7KN1vLm8n8pXWbMpVejVY",
  "key28": "41AaZqD1wufGSf1HuSo2cjMeJGQRwjm5KhDwd9yCcH42m7zZATod2uD9ykLo4ZY25jNnKoJNstHrEfcrcRq6mQ3Q",
  "key29": "4RnC6HuGAGvugKUtpRLKknRGVCa7YVeuEsCq9fJn9ha2dSUCsjHnh4v3wJZyA59d31RHygoGEx1mLGLTtARHhH81",
  "key30": "sBcrnqsfKFqDwDRh9HNpYyDmqmW3rKe4Jj4KYN2EuWRZ4PNsoNiJJnWmex5zVBqjKxriFtQCt3GMDJu6rLrKeR1"
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
