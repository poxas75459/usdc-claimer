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
    "65S47PF4dGkHY25GnAt1LKZ9TQ99YQk3sve1reobd9pCoeYxubsrudJhwYELz6J9p9qZcbfe4Y1XJmGJGTHEvz1F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Hj8cNWeAsZ6PSnVfrKapp6jpdQQYLyGVWtGHumEh7YueohXXnuJ1fRZ1i8NR9sV8KpDfdLL82xvHicengZujdir",
  "key1": "54rsCgSGSSMns2rDcqvh6twJBNb3UPh8cBYccRnW63yEUCj7zJp11H9CzqUyJbWXi2ydk4yEaY5daBNjHdbtHtQj",
  "key2": "54qNCE43Fyft6SrG5E8TxPCuJc9BeQNDMC1RP4tmpsavK96zKfdqkRmBPJw3eRAkAFbSsmYTK8j5efdEZno9AUYB",
  "key3": "3sn7CHkeMWGKjbXwoprHxVdfA8dv39c4wrT9zepniuTc994mb9MxmqJ6gZVofHzNngXJT4cQTrRCYfMPmSByY6BU",
  "key4": "1dnukDKamMGN7hapCBQGUrDD6Ze1rT2EBySSZG214DmDNCyCRjhj3kfp2CGdWpGnHUi5UFXK9ooddoef7cdAumF",
  "key5": "2mCizX31LBanhcLw3zNDhRLYd5AtzNwV8j7NCXkYEYRnspycWyoq25ZjhPLFtCFFDMWvV57wxVZvvZpm8RRgFmpL",
  "key6": "21Qso84vENBbcEuGmqqB8jAEJf6hBEsKbyaNhSdNisERnNyhhvTM2VxPUSCfP8BpKrBMwitKLj45yySzVWAwGyEG",
  "key7": "2fm6tZtaGs34dhvfveUREcqcSm8pPiqWp45gK1Wsu6fTn59bmjenvJ2DTxwVtvm9YiCE3DCCUXfyBUCP1pKHYQ2d",
  "key8": "22ERR7duP8XocdxcRhEABSmW3jte4J6oUvg3KjL6wWqCu5pbw1HCmM54BPBiRepwsbCihenSnL1Z7iDRsLGrpVaB",
  "key9": "4ncfw4fJA1x1AyHDhjoo1aV7Arwx7LMBjhKEmXvFNdvDAR8NimBMTYeuuY1uBhDjYq2Yg7PFgrLxhty34TuEZ5ZK",
  "key10": "gDHko9VKvv1Vhm6rdpHAocN9p9UKTvXqy3VZZtdmSafz29RbvLExT9wuLqzFweo9iKVeGJdd7r4PTCDK2h8DiRK",
  "key11": "644DWmHai3ooLu7t1nZ2icUqu9RQtVX1NynR8PGW5PBVQvVhCGRCpo3j6Mt9KmV4wasPxi6Xk6p1qdgvJJhKgw34",
  "key12": "3L2TGwxPTxaRRnHi8qMataGpLeyg6pQHb3sKP4TeGxbv6GhQxs1Q9ZtYN72AU75wsCoDDkPMFgfqNFqsT6wg8ZJc",
  "key13": "KwcTnRn8zB7S3pN31YxyNj3MiyKebMrCcB636hBafVj4E5mVYyFCjdjQ5rwUz6F9ugyBYkLa4zvxtcK7TKqJv8b",
  "key14": "4yisDnNVNKCQ5U1PX4twuaYST1VZtgnSH9yQ423CmfvNM1Hazbuy4E2HkBU3Bqram4ymYvsDm1txczw2qL3pG89f",
  "key15": "3fwuMQQsggoYMFC91825evJ6iC4VqxkLHMMSLeKUsqfjQogDQAXQqCoDxNxnWz2pU3Xzb3Ehmz3F9ZHaSuyp4q6o",
  "key16": "57yYBp17vLjdjDzGMw1PHPGRn2ipgx2ysrTeqEMTMYviCWxmN2TKchx584bJX2iQgnKfte3RRYD76LwDFLT9hfV6",
  "key17": "36eJCQCKkbraZAzUcZUQaRiMsQZSRV9GVoZrzvaFaZHoYQJdNpYSfjFg4EsDfTLKrdXiTFv73MpEYy9CxVM1LFEf",
  "key18": "4w5xpqn6VmmJwzz9fp88ps4JYZ4vg16NqTTdiLdtZEd3JibgBx43yYVq61eqF5MFFriCXQ25Ev23GzZrHjTzw5fq",
  "key19": "4ekXncpz9qRgZtvirMzDb8hTnvSPMKY7vueX7itN45hSvjq1iYB2mH7pnQAepRQmrCv616q6o8F1JzN1URzStLqt",
  "key20": "67YZ9qZMCzyEi1VWtQHLTBxcTqnAbTpZv7Xi9FvcAnpvFC1SCmJUto1jKQAKgA5NNWpPrcSbChZdgeApmiKVrFT7",
  "key21": "489dwxgfwZ6U8rvpxLNRnLDk8WfDzXkpdkJXh7krTZW9jwiabh9oRf21Dh6jSHCz9MZGy5txgRdUBv4aVt4a7kWu",
  "key22": "4RFwxcCKhsSEoTVQNevK2uhUAv81vwb4gVHBpuaErWgFyXQ3pWbB5gCcPagcooRQ23enMycY2cfyAGBsA1AT2BbB",
  "key23": "4xLnhnBnHwjntauUUensjRDHmjjTqpRNKBKpEgCtuptdkfCjgT3sYXQ8Died8fVw2hmDe7hEsJdSGiAEGrpuNzti",
  "key24": "4osv12wFQsH2Y8PeuHBGyW1hiYkN5BgkFgjmkTsRZPu33EFbYxhLGQRCW6vipSZ7FLGPPSAf1EKo5ugieBvT9DqC",
  "key25": "v524vtKom9MsnxBwFvo41cVNs3pd9Jce6v2PprG2UUHNQ9PZgzV1Sne74XPAo92Nyau9rRY7pTNMQuAs35s4pHx",
  "key26": "5aFrXBJEyV3LeRnNMKuxfYGrM5UXwmm6g5tZrZRDSTQwQbkUfrwVkxxidqtwNzyG77kbEhkLkRPCFpkpDb9PPyCj",
  "key27": "Jia2S5U5mBst2NqQieZegCmnhrwfbN6jAg7p75zqGAm3wmVYVPxoa9MQpHnkBRgWCAcDZv4DUMt7x8rX2ZQYnvT",
  "key28": "3qGgMMiFy1wUouRARmHo8iRkPainq2WYSkuh5VN3D1C4qQtjun9qbesiuA1QAh6LmoTFDYWP643bUxnUwSG54mKn",
  "key29": "5BQ6M9Gvoy1kTmt4CJ4tGfGsaSWi8uA6n3bnTg1miuhm2RoLLgNBy1HMf47iuk498WhWCjBDdo515EAm7d2atJyG",
  "key30": "t4yCWfRfAcxHPjDFqVUgoADKNHJQG1tmKQgrkdBAdjd5U6AxdM2F9ZJFGgimPFpBs9TEfmYfkpsFXgZgpxxUFUS",
  "key31": "5kBs6CEyKbDRX8twxUkHeVs3cNNaFC3WnDS5bDTrqsnwtXtADT7q8k8bYtCRwNJsNgmVv5FG1yoABoz55yoXLNeX",
  "key32": "3oxE69k8Utt92yo8DqJgBoMcRRz5LgDY5zcTv6dHpw1YurxWLMCaMTp76doxJqDjxZ6XzBekP8PJx6EMiSosWkBE",
  "key33": "3rJbV8JciczccedM8fUCAoseipyZmdvjo9i1kkuN3iHJn2Kxf3rZmao73zWcHwTLWyU2KEPdn5R6ucxfCJatzon",
  "key34": "aFL6dnTZDQzmpU8eoCcbfTuuLEz4dRVe3QHfxbyCMPaRZDUy2rADB6poVxtDS1f1FGth3HvTtnqXNzPN6aUQQPr",
  "key35": "2cXXxWbXuXatsYREjZZxbhzX9eVZMDzsx9XGs8SFzqyU5hfAuzQZDaBmSrAsuVa9vWKg3cRhNG1T2YUodUMVyNvh",
  "key36": "5VNtXjpLZvtRUuMhwhQXeRsY68ZJmC2hC3prEAsSPeiKrM9FBmGVgyuxtiyLoELNhVmMjgK5fRs95P6RUt8Kwtew",
  "key37": "4Nu3joED2U2equKicqbPXcfwg4n6wWcmdoMdx35Y58U866KDipaqoC9DrzrrYC96UNpNgxtTsXH2Y4tUjdD4rBJ1",
  "key38": "GZc88Y2jfUexq3KuVqVqPdZMFZU9pvjfXNTABMiV3yEF58zbdiPfGTaXN3sKry9Pg87gSAtpTRBg69fYfQtB5ZS",
  "key39": "31uuCAdJcqfBC8WnNSQE9Xfoi1uh6UxS4mDJgqf9Q2DFsvEjpk6azAb95QnXu3a7ByCQYcp7NrDjsggADAybHb4T",
  "key40": "2yfk9UntEgazoeyTb8ZbJJjhHfyUwvpgD9xKRcaSQQboJqeauTJWe7LnrfMbfqEqLtB231aiS3rRqZ6RWd69vUge",
  "key41": "4VdwkGAHrDMDQTA6tEyFaa2w8CdHQbHWiWAArF9Uu68YN5MeLxHMJ69u4XvBLX5onFQNc9TsJW4zWucb1DueWeG4",
  "key42": "4PS3p97JAPcnAFNupjoHjAJK7o6Wsh2HK5gfbfwM5kAQKaahLHqPzcL4kTMDnUPw5ewP9w8Jx4XcJc6TnEJeXjoV",
  "key43": "5BM7sMtt3bHNxFHPwhe8jNZKofeSJ3FcmvpocVDE5BUeV5mD43wzAFz7NRTzaytCjTd6Upe8fUehkY8QvEFBeWmL"
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
