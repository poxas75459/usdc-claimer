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
    "3hUqArXbxocKhntN8zpVuLgBkvJQaxUW8pjHhHN5fzcb9WvX4z7JA21Vuq2v5kMppq7WGby9v2CRuDes66ozWh33"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JQEpYfUKb97omkxzYezgFpdj1ch8UFhU2WVUW2UVKeq1GAetkxBREv3X8ASrVND5pda2XUTGoMkQvJLD7smbtWZ",
  "key1": "3d8Jyyt6XB3fbKZst5W6pJDBk4vaEaTqGeJywB1xrj5uxmjwYzvYUyW1jYxhrBW32Y7VkUieuH2UZU5MKmpPuyL7",
  "key2": "5RY9XfRVsUFdbhELUu9ANtMX7NqKYddjNrBrHpkFauhvvY62rFnq9GMSUSYHcBQ9DVUo3f9NwnMF7cCQ7Ex9LGNa",
  "key3": "4KVhPaynCCULCjXTBTwF5c7nL5AEZbeB7AikGJSh1VWFRqaszmmvr1TVxU8sfv6zUjbpSvprAPLSZ7UYuVYcfX7L",
  "key4": "2nZe59ALBqipXVV3bbmi3DhhusvukBM8SDoCX7SezZc9N12cDdZGGEgbKJDod7c4wsf23GAwdoQnhcAdqAFxzK7k",
  "key5": "4ZUAffvkCeFdpQovrdsPtPLNs6SnbEh9GHRrsXaAapDm6HWPs3wrxdE5cGbqP9ppfMHrPhUUU4ownu5EuwM6bz4Y",
  "key6": "5VQJWRQDsNXhH6DFL6bs9itQAvNfoTz1nUW1P5xDhuQaKsFDbVYf5pVkvqkxWNJxZDLK4q7Zp7HU7BC8goCUWGYc",
  "key7": "5UV1VQNAV6P8LgRwLRFBdNT8VteKBvgWBcNtcvB1z1B91Dj6JjYVZ1wEfrdMnJjagfEVam24yHjRTyF5yAt53Nfx",
  "key8": "2HfQv3pLyZVWVMGHy5fBYCGZetchRYH8yVHPi3BYwWa6gjPodVcmq5AkWo7hMSSnmbtWibTYjwYFo7QvqyoBKjn2",
  "key9": "3dsDkaki6RdJuoKgSu4YCHxEKPEE6gbN8H7t5m7U3fSnKc1hLpCwDZiHkP2XUCBvVn8MwX3XrvvnFLCsEJhp6zWq",
  "key10": "5Ejiu5yop2uJCLUjz986GQcrDoiCMKEkZLSzkPDptMhVmDVapYtvhdJum1fkrV1BVv3nH3bvBwxPkLS9NNEdAqJU",
  "key11": "4Xrpu4YzMK7GAJNvQ214XnRjCfk4LgSCdDZg45CzR6wVA4oMcJEoGARvKtRMGYLTmBN4CKjNMrzEZseJVYxKPLAw",
  "key12": "2riQAw7XSzcfm2nmqPQDoi9NPGeC4Di6cC3UdYa7zywbLUYAu2bZVmE9Moo2F76m3JBp12cyt39teWocbLAoHVgt",
  "key13": "3UkeKuBTHg4tktywCn6osky7cxk5Hf2TEm7584zb9HtfT4GWMXZDLiSoGn6q8Yw5X9ELK2CqLthhDbmP9X56YtRi",
  "key14": "4WZTGxxE1v7JBcfd8eryvPG1CeuhBD853rabdoXeLbELAzZFTpSKPfQ768Lk1kquSnF7eBWpSSFFh1NnpfZRMWCt",
  "key15": "jkTGAu15WmjVWPCNWBMVaBm96offunp5jeZp5hfMW7iuEcAEcKptC869kmvSrsw2JbNa1AETER4X48n5Up4WXHa",
  "key16": "5nzoxRB3QHKnWZegM6Uf4qoKcx3UVT6DjHM6BKm71kXyGzB5cjNN9z9NTWAqviQoa5xEtaViXdPdvEBS1wpsvLrt",
  "key17": "xPrKwMUtB2owWdKYYV7zzHHyno4Ah2gDZoCnVXCbkNBwUdLdrXjDXqqgYYWWZKK9yMkBRJu2WJ82s9Rp2qQqc4K",
  "key18": "4hVw1RpjBa2u91wg8gHXycdLv1oiPfJzjxCymzGiyMvfoGSoQ17JK3ZxyXZ7xPFtTHJbGVSVYjPaKRynH6je73u9",
  "key19": "38RLeS7aMRScRJN3kQy4rnxfaKgx6UqNU64LamLQ2unQvH1ShYX1rKrqq9YZFP4TK33v7KrHAfG4iG5wBoqjNYX5",
  "key20": "3a18AMLjiVUMWizBDNNZushNupJfJqQBNbSMyFoV55wLQDuDB2BVvbn8cmt7reSD6SM1voXBPk2d9gTZrHGCHfz8",
  "key21": "s993t7RFrH8jSRCbpsuY7TEJpbJE24gum2mPBHvaaEjtAAHR1SSrTStjefjkbC4n2MtHs9waeyUMs8Zx8hGXiit",
  "key22": "o8K1BGewT27TC2z2KHd4oCQbR4Wt4T2g2KGdL8MonswDjVvdVQsY127TN36pxcFHDjXrngAZxTRh1RPYZqzr5kt",
  "key23": "4q17gJSkXDK53NdtzH4S5ahGPWLjyax25jLpt4fSAbvu8c71VC2TBq6MbY5h995kRp3Hs72Cs5Gpnc8Y8Dkwv5vE",
  "key24": "3CKwaV4LPqtj2kbNTVYQydsMHL64SYqqkVVu1PPCLtSZGz8GUSXsKhGJQJzmzpUoKaqDiP9ynSjfiiN8BuTLMvQ8",
  "key25": "3SfxrcyKE3nbd2kTHCsTwBCdvXDtZic8mTKPwFUv18JxfirrY1WbpN7rWLV6WJcZ59CScS3gxwJsYzsVii7UDoCq",
  "key26": "nCEZvL7GP15CuJqzhqxQPx9RuHL4Tgi7e1pgurAMhR3hWcv6ZYTTDnzU3wAWLE47j6ov5Tw89eVPofc2ZCx8sFL",
  "key27": "NvinQXpi7Fiyp7KVfXjbbpPNxCSESLjVVGLiMXSegFFkPCakwCgAdE4h2T1KCa8gwFza6sFicrjZsHaY4X2iPcH",
  "key28": "3c3gUCvCzX4vEB8ZJpdN1dSqecCYzzsntN9mbQ1ViBouAfuyuhmJLzN972K82fRfy2wVakDEfqpPFLSizPVVRRp8",
  "key29": "5h8sLFechKivcyx2rVbAs1BKDTVYFeauuiMHRCXp7Wz8fh7b7STUKLSKTUsZEjVG2euvX18V9cJk7ydErADmvv8p",
  "key30": "2vGw9HYVN1rnXTPuQp2iTPN1k4Awtc2SS14Dz7SoH8hFckXzVMPKLgD4SeBfWvp8nY9eTuCRtHPEoiAe4wXbrhBv",
  "key31": "3gcd7X9XNrDyajmQNYRfjxPb15v1fp8MD5J6HYVdVatw3R5smCmNMbFeHeUGrUUYrxworDmPm8Eeq4gEjb79cVks",
  "key32": "3oUg52hdRMPmqBoM7L9Kv6YuSKVwhNaSadYNPfAZvpwpzPWX13pqvAMhCy5j41v63DYUjHgM8zzwwfmDFxJjAEgS",
  "key33": "5W3E3RL6269grcxWpi7qQKWGNMvXrt12oWX2YYf1wv3Bqe14cccSUTPsstzSyhAuXcW68MXwmsQUJnDmoNYEjKSj",
  "key34": "59Nqcr2WEywYnsHPSBy7Si8c72j93F3TUsfXVsRED8bzr8Lm4rBknrHn9ocsXM5eaRt2bVF3cqfzPY4JaT8yz7DN"
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
